import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const {
      userId,
      qualificationName,
      qualificationDescription,
      qualificationImageUrl,
    } = await req.json();

    const qualification = await db.qualification.create({
      data: {
        qualification_name: qualificationName,
        description: qualificationDescription,
        imageUrl: qualificationImageUrl,
        userId: userId,
      },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("[QUALIFICATION ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const qualificationId = searchParams.get("qualificationId")!;
    const userId = searchParams.get("userId")!;
    await db.qualification.delete({
      where: {
        userId: userId,
        id: qualificationId,
      },
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("[USERSUBJECT ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
