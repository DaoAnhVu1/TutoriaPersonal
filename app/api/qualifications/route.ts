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
