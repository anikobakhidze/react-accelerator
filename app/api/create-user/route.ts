import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function GET(_: NextRequest) {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  try {
    const { picture, name, nickname, email, sub } = user;

    if (!picture || !name || !nickname || !email || !sub) {
      throw new Error("Image, name, nickname, email, and sub are required");
    }

    const result = await sql`SELECT * FROM users WHERE sub = ${sub}`;

    if (result.rows.length === 0) {
      await sql`
        INSERT INTO users (image, name, nickname, email, sub) 
        VALUES (${picture}, ${name}, ${nickname}, ${email}, ${sub});
      `;
    }

    const users = await sql`SELECT * FROM users;`;
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
