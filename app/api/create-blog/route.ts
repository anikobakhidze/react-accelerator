import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { image, title, description, category, userSub } =
      await request.json();

    if (!title || !description || !category || !userSub) {
      return NextResponse.json(
        { error: "Title, description, category, and userSub are required" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO blog (image, title, description, category, user_id)
      VALUES (${image || ""}, ${title}, ${description}, ${category}, ${userSub})
      RETURNING *;
    `;

    const blogs = await sql`SELECT * FROM blog ORDER BY id ASC;`;

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error creating blog:");
    return NextResponse.json({ error: "Failed to create blog" });
  }
}
