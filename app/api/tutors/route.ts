import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const pageNumber = Number.parseInt(searchParams.get("pageNumber")!) || 1;
    const subjectIds = searchParams.get("subjectIds")
      ? searchParams.get("subjectIds")!.split(",")
      : [];

    const name = searchParams.get("name");
    const itemsPerPage = 5;

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

    if (!!name) {
      whereCondition.name = {
        contains: `${name}`,
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
    const total = await db.user.count({
      where: whereCondition,
    });
    return NextResponse.json({ tutors, total }, { status: 200 });
  } catch (error) {
    console.error("[SUBJECT ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const newDescription = searchParams.get("description");
    const userId = searchParams.get("userId");
    if (!newDescription || !userId) {
      return NextResponse.json({}, { status: 400 });
    }

    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        description: newDescription,
      },
    });
    return NextResponse.json({ message: "ngol luon" }, { status: 200 });
  } catch (error) {
    console.error("[TUTOR ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
