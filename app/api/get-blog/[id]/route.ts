import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 0;
export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/get-blog/", "");
  try {
    const blog = await sql`SELECT * FROM blog WHERE id=${id}`;

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
