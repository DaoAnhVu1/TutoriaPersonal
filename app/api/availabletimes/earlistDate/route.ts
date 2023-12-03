import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const availableTimeId = searchParams.get("availableTimeId")!;
    const tutorId = searchParams.get("tutorId");

    if (!availableTimeId || !tutorId) {
      return new NextResponse("Available ID missing", { status: 400 });
    }
    const availableTime = await db.availableTime.findUnique({
      where: {
        id: availableTimeId,
      },
    });

    if (!availableTime) {
      return new NextResponse("Available ID missing", { status: 400 });
    }
    const currentDay = new Date();
    let result = "";
    while (true) {
      const daysToAdd = (availableTime.weekDay - currentDay.getDay() + 7) % 7;
      const nextOccurrence = new Date(currentDay);
      nextOccurrence.setDate(currentDay.getDate() + daysToAdd);
      const formattedDate =
        nextOccurrence.toLocaleDateString("en-GB") +
        ` (${availableTime.startTime} - ${availableTime.endTime})`;
      const earlistAvailableTime = await db.learningSession.findFirst({
        where: {
          date: formattedDate,
          tutorId: tutorId,
        },
      });

      if (!earlistAvailableTime) {
        result = formattedDate;
        return NextResponse.json({ formattedDate }, { status: 200 });
      } else {
        currentDay.setDate(currentDay.getDate() + 7);
      }
    }
  } catch (error) {
    console.log("[AVAILABLE TIMES EARLIST ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
