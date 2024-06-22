import { sql } from "@vercel/postgres";

import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { rating, product_id, user_sub } = await request.json();
    console.log(user_sub, product_id, rating);

    if (!rating || !product_id || !user_sub) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await sql`
    INSERT INTO rating (rating, product_id, user_sub)
    VALUES (${rating}, ${product_id}, ${user_sub});
  `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error message:", error);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}
