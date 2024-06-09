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

    console.log("Inserting blog:", {
      image,
      title,
      description,
      category,
      userSub,
    });

    const insertResult = await sql`
      INSERT INTO blog (image, title, description, category, user_id)
      VALUES (${image || ""}, ${title}, ${description}, ${category}, ${userSub})
      RETURNING *;
    `;

    console.log("Insert result:", insertResult);

    const blogs = await sql`SELECT * FROM blog ORDER BY id ASC;`;
    console.log("Blogs retrieved:", blogs);

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error creating blog:");
    return NextResponse.json({ error: "Failed to create blog" });
  }
}
