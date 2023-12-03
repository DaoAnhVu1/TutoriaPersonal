import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const subjects = await db.subject.findMany();
    return NextResponse.json(subjects);
  } catch (error) {
    console.log("[SUBJECT ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { subjectId, userId } = await req.json();
    await db.usersSubjects.delete({
      where: {
        userId_subjectId: {
          userId,
          subjectId,
        },
      },
    });
  } catch (error) {
    console.log("[SUBJECT ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
