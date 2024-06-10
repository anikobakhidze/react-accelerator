import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { product, userId } = await request.json();

    if (!userId || !product || !product.id) {
      throw new Error("user_id and full product details are required");
    }

    const newProduct = { ...product, selectedQuantity: 1 };

    const cartResult =
      await sql`SELECT * FROM carts WHERE user_id = ${userId};`;
    if (cartResult.rowCount > 0) {
      const cart = cartResult.rows[0];
      let products = cart.products;
      const productIndex = products.findIndex((p: any) => p.id === product.id);
      if (productIndex !== -1) {
        products[productIndex].selectedQuantity += 1;
      } else {
        products.push(newProduct);
      }

      await sql`UPDATE carts SET products = ${JSON.stringify(
        products
      )} WHERE user_id = ${userId};`;
    } else {
      const productsArray = JSON.stringify([newProduct]);
      await sql`INSERT INTO carts (user_id, products) VALUES (${userId}, ${productsArray});`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
