import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.pathname.replace("/api/get-cart-items/", "");

  if (!userId) {
    return NextResponse.json(
      { error: "User is not authenticated" },
      { status: 401 }
    );
  }

  try {
    const result = await sql`
      SELECT jsonb_pretty(products) as products FROM carts WHERE user_id=${userId} ORDER BY id`;

    if (result.rowCount === 0) {
      return NextResponse.json({ products: [] }, { status: 200 });
    }
    const products = JSON.parse(result.rows[0].products);
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
