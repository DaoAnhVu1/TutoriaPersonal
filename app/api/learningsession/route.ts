import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { dateString, tutorId, studentId } = await req.json();
    const learningSession = await db.learningSession.create({
      data: {
        date: dateString,
        tutorId,
        studentId,
        status: "PROCESSING",
      },
    });

    return NextResponse.json(learningSession, { status: 200 });
  } catch (error) {
    console.log("[AVAILABLE TIMES ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
