import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const { name, nickname, sub } = await request.json();
    if (!name || !nickname || !sub) {
      throw new Error(" name, nickname, and sub are required");
    }
    const userExists = await sql`SELECT * FROM users WHERE sub=${sub}`;
    if (!userExists) {
      throw new Error("User not found");
    }

    await sql`UPDATE users SET name=${name}, nickname=${nickname} WHERE sub=${sub}`;

    return NextResponse.json(
      { message: "User updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
