// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const POST_LIST_TAG = "POST-LIST";

export async function POST(req: NextRequest) {
  try {
    const secret = req.headers.get("x-revalidate-secret");

    if (!process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        {
          success: false,
          message: "REVALIDATE_SECRET is not configured",
        },
        { status: 500 }
      );
    }

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    revalidateTag(POST_LIST_TAG, { expire: 0 });

    revalidatePath("/");
    revalidatePath("/category/[slug]");

    return NextResponse.json({
      success: true,
      message: "Website post cache revalidated",
      tag: POST_LIST_TAG,
      revalidatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Website revalidate route error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to revalidate website cache",
      },
      { status: 500 }
    );
  }
}