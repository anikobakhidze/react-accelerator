import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const { id, name, email, age } = await request.json();
    if (!id || !name || !email || !age) {
      throw new Error("Id, name, email, and age are required");
    }

    const userExists = await sql`SELECT * FROM users WHERE id=${id}`;
    if (!userExists) {
      throw new Error("User not found");
    }

    await sql`UPDATE users SET name=${name}, email=${email}, age=${age} WHERE id=${id}`;

    return NextResponse.json(
      { message: "User updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
