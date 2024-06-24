import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";
export const revalidate = 0;
export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/get-user/", "");
  try {
    const user = await sql`SELECT * FROM users WHERE sub = ${id}`;
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
