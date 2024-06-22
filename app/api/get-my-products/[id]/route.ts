import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname
    .replace("/api/get-my-products/", "")
    .trim();

  try {
    const { rows: products } = await sql`
    SELECT * FROM products WHERE usersub = ${id}
  `;

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
