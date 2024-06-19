import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function PUT(request: Request) {
  try {
    const { id, image, title, description, category } = await request.json();

    const blogExists = await sql`SELECT * FROM blog WHERE id=${id}`;

    if (!blogExists) {
      throw new Error("Blog not found");
    }

    await sql`
      UPDATE blog 
      SET 
        image=${image}, 
        title=${title}, 
        description=${description},   
        category=${category}
      WHERE id=${id}
    `;
    return NextResponse.json(
      { message: "Blog updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
