// In your API file, e.g., pages/api/check-user-rating.ts

import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";
export const revalidate = 0;
export async function GET(request: NextRequest) {
  const product_id = request.nextUrl.searchParams.get("product_id");
  const user_sub = request.nextUrl.searchParams.get("user_sub");

  if (!product_id || !user_sub) {
    return NextResponse.json({ hasRated: false }, { status: 400 });
  }

  try {
    const result = await sql`
      SELECT COUNT(*) as count
      FROM rating
      WHERE product_id=${product_id} AND user_sub=${user_sub}
    `;
    const hasRated = result.rows[0]?.count > 0;

    return NextResponse.json({ hasRated }, { status: 200 });
  } catch (error) {
    console.error("Error checking user rating:", error);
    return NextResponse.json({ hasRated: false }, { status: 500 });
  }
}
