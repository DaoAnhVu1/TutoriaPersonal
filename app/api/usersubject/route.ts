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

    // Find the UsersSubjects record based on subjectId and userId
    const usersSubjectsRecord = await db.usersSubjects.findFirst({
      where: {
        subjectId: subjectId,
        userId: userId,
      },
    });

    if (!usersSubjectsRecord) {
      // Handle the case where the record is not found
      return new NextResponse("Record not found", { status: 404 });
    }

    const usersSubjectsId = usersSubjectsRecord.id;

    // Delete the UsersSubjects record using its id
    await db.usersSubjects.delete({
      where: {
        id: usersSubjectsId,
      },
    });

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.log("[USERSUBJECT ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
