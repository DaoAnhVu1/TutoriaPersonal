import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { avatarImageUrl, userId } = await req.json();

    const user = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        imageUrl: avatarImageUrl,
      },
    });

    if (!user) {
      return new NextResponse("Internal Error", { status: 500 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("[USERS ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
