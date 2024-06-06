import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  const session = await getSession();
  const user = session?.user;

  try {
    const cart = await sql`
      SELECT jsonb_pretty(products) FROM carts WHERE user_id=${user?.sub} ORDER BY id`;

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
