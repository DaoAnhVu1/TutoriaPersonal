import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const newName = searchParams.get("name");
    const userId = searchParams.get("userId");
    if (!newName || !userId) {
      return NextResponse.json({}, { status: 400 });
    }

    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        name: newName,
      },
    });

    return NextResponse.json(
      { message: "Tutor information updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[TUTOR ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
