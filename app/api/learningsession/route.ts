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

export async function PATCH(req: Request) {
  try {
    const { sessionId, newStatus } = await req.json();

    await db.learningSession.update({
      where: {
        id: sessionId,
      },
      data: {
        status: newStatus,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("[AVAILABLE TIMES ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}