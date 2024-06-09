import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/delete-blog/", "");
  try {
    if (!id) throw new Error("ID is required");
    await sql`DELETE FROM blog WHERE id=${Number(id)}`;

    const blogs = await sql`SELECT * FROM blog`;
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
