import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    const user_id = `${userId}`;
    if (!userId) {
      throw new Error("User ID is required");
    }

    const carts = await sql`SELECT * FROM carts WHERE user_id = ${user_id}`;

    return NextResponse.json({ carts }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching carts:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
