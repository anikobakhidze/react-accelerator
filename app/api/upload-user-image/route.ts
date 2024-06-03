import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { blobUrl, sub } = await request.json();

  if (blobUrl || sub) {
    try {
      await sql`UPDATE users SET image=${blobUrl} WHERE sub = ${sub};`;
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }

  const users = await sql`SELECT * FROM users ORDER BY sub ASC;`;

  return NextResponse.json({ users }, { status: 200 });
}
