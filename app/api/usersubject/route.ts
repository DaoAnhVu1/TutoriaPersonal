import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { userId, subjectId } = await req.json();
    const userSubject = await db.usersSubjects.create({
      data: {
        userId: userId,
        subjectId: subjectId,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("[USERSUBJECT ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
