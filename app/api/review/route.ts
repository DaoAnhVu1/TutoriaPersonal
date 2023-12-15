import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { senderId, receiverId, description, rating, sessionId } =
      await req.json();
    await db.review.create({
      data: {
        senderId: senderId,
        receiverId: receiverId,
        description: description,
        rating: rating,
      },
    });
    await db.learningSession.update({
      where: { id: sessionId },
      data: { writtenReview: true },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("[REVIEW ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
