import { NextRequest, NextResponse } from "next/server";
import { updateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (!tag) {
    return NextResponse.json({ message: "Missing tag parameter" }, { status: 400 });
  }

  try {
    updateTag(tag);
    return NextResponse.json({ revalidated: true, now: Date.now(), tag });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating", error: err }, { status: 500 });
  }
}
