import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Role } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const {
      name,
      id,
      email,
      image,
      role,
      description,
      subjectId,
      costPerHour,
    } = await req.json();
    const costPerHourParse = Number.parseInt(costPerHour);
    if (role === "student") {
      const user = await db.user.create({
        data: {
          id,
          name,
          email,
          imageUrl: image,
          role: Role.STUDENT,
        },
      });
    } else {
      console.log(id);
      const user = await db.user.create({
        data: {
          id,
          name,
          email,
          imageUrl: image,
          role: Role.TUTOR,
          description,
          costPerHour: costPerHourParse,
        },
      });

      await db.usersSubjects.create({
        data: {
          userId: user.id,
          subjectId: subjectId,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("[PROFILE ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
