import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { userId, startTime, endTime, weekDay } = await req.json();
    console.log(weekDay);
    const availableTime = await db.availableTime.create({
      data: {
        userId,
        startTime,
        endTime,
        weekDay: Number.parseInt(weekDay),
      },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("[AVAILABLE TIMES ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const availableTimeId = searchParams.get("availableTimeId")!;
    const userId = searchParams.get("userId")!;
    console.log("Available Time: " + availableTimeId)
    console.log("User Id: " + userId)
    await db.availableTime.delete({
      where: {
        userId: userId,
        id: availableTimeId,
      },
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log("[USERSUBJECT ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
