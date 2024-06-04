import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/get-product/", "");
  try {
    const product = await sql`SELECT * FROM products WHERE id=${id}`;
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
