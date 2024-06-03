import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { image, title, description, price, quantity, category, userSub } =
      await request.json();
    if (
      !image ||
      !title ||
      !description ||
      price == null ||
      quantity == null ||
      !category ||
      !userSub
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO products (image, title, description, price, quantity, category, userSub)
      VALUES (${image}, ${title}, ${description}, ${price}, ${quantity}, ${category}, ${userSub});
    `;

    const products = await sql`SELECT * FROM products ORDER BY id ASC;`;
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error saving product:", error);
    return NextResponse.json(
      { error: "Failed to save product" },
      { status: 500 }
    );
  }
}
