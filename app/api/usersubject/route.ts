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

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const subjectId = searchParams.get("subjectId")!;
    const userId = searchParams.get("userId")!;
    await db.usersSubjects.delete({
      where: {
        userId_subjectId: {
          subjectId: subjectId,
          userId: userId,
        },
      },
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("[USERSUBJECT ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
