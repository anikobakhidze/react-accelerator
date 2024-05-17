import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
export const revalidate = 0;
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.pathname.replace("/api/get-cart-items/", "");
  try {
    if (userId === undefined) throw new Error("userID is required");
    await sql`SELECT * FROM cart WHERE userId=${Number(userId)}`;

    const cart = await sql`SELECT * FROM cart ORDER BY userId`;
    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
