import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const users =
      await sql`UPDATE carts SET products = '[]' WHERE user_id = ${id}`;
    const response = users.rows;
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
