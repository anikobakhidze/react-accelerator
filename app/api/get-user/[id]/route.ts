import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const revalidate = 0;
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const user = await sql`SELECT * FROM users WHERE sub = ${id}`;
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
