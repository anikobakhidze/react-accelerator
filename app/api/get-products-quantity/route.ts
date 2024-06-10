import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 0;
export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      throw new Error("user_id is required");
    }

    const result = await sql`
      SELECT SUM((product ->> 'selectedQuantity')::INT) as total_selected_quantity
      FROM carts, jsonb_array_elements(products) as product
      WHERE user_id = ${userId};
    `;

    const totalSelectedQuantity = result.rows[0]?.total_selected_quantity || 0;

    return NextResponse.json({ totalSelectedQuantity }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
