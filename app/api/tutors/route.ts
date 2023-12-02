import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pageNumber = Number.parseInt(searchParams.get("pageNumber")!) || 1;
    const subjectIds = searchParams.get("subjectIds")
      ? searchParams.get("subjectIds")!.split(",")
      : [];
    const itemsPerPage = 10;

    const skip = (pageNumber - 1) * itemsPerPage;

    let whereCondition: any = {
      role: "TUTOR",
    };

    if (subjectIds.length > 0) {
      whereCondition.subjects = {
        some: {
          subjectId: {
            in: subjectIds,
          },
        },
      };
    }

    const tutors = await db.user.findMany({
      where: whereCondition,
      include: {
        subjects: {
          select: {
            subject: true,
          },
        },
      },
      skip,
      take: itemsPerPage,
    });

    return NextResponse.json(tutors, { status: 200 });
  } catch (error) {
    console.error("[SUBJECT ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
