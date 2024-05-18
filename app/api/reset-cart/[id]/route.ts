import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const userId = request.nextUrl.pathname.replace("/api/reset-cart/", "");
  try {
    if (!userId) throw new Error("userId is required");
    await sql`DELETE FROM cart WHERE userId=${Number(userId)}`;

    const cart = await sql`SELECT * FROM cart`;
    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
