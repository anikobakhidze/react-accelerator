import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/delete-product/", "");
  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM products WHERE id=${id}`;

    const result = await sql`
      SELECT id,
      products FROM carts
    `;
    for (let row of result.rows) {
      let productsArray = row.products;
      const updatedProductsArray = productsArray.filter(
        (product: any) => product.id !== Number(id)
      );
      await sql`
          UPDATE carts
          SET products = ${JSON.stringify(updatedProductsArray)}::jsonb
          WHERE id = ${row.id}
        `;
    }

    const products = await sql`SELECT * FROM products`;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error deleting product and updating carts:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
