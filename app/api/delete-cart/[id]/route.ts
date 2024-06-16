import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/delete-cart/", "");
  try {
    if (!id) throw new Error("User sub is required");
    await sql`DELETE FROM carts WHERE user_id=${id}`;

    const carts = await sql`SELECT * FROM carts`;
    return NextResponse.json({ carts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
