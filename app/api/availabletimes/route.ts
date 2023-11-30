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
