import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function PUT(request: Request) {
  try {
    const { id, image, title, description, price, quantity, category } =
      await request.json();

    const productExists = await sql`SELECT * FROM products WHERE id=${id}`;

    if (!productExists) {
      throw new Error("Product not found");
    }

    await sql`
      UPDATE products 
      SET 
        image=${image}, 
        title=${title}, 
        description=${description}, 
        price=${price}, 
        category=${category}, 
        quantity=${quantity} 
      WHERE id=${id}
    `;
    return NextResponse.json(
      { message: "Product updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
