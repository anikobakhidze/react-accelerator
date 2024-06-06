import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { product, userId } = await request.json();

    if (!userId || !product || !product.id) {
      throw new Error("user_id and full product details are required");
    }

    const newProduct = { ...product, selectedQuantity: 1 }; // Start with a quantity of 1

    // Check if the cart exists for the user
    const cartResult =
      await sql`SELECT * FROM carts WHERE user_id = ${userId};`;
    if (cartResult.rowCount > 0) {
      // Cart exists, update the cart
      const cart = cartResult.rows[0];
      let products = cart.products;

      // Check if the product is already in the cart
      const productIndex = products.findIndex((p: any) => p.id === product.id);
      if (productIndex !== -1) {
        // Product exists in the cart, update the quantity
        products[productIndex].selectedQuantity += 1;
      } else {
        // Product does not exist, add it to the cart
        products.push(newProduct);
      }

      // Update the cart in the database
      await sql`UPDATE carts SET products = ${JSON.stringify(
        products
      )} WHERE user_id = ${userId};`;
    } else {
      // Cart does not exist, create a new cart
      const productsArray = JSON.stringify([newProduct]);
      await sql`INSERT INTO carts (user_id, products) VALUES (${userId}, ${productsArray});`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const carts = await sql`SELECT * FROM carts;`;
  return NextResponse.json({ carts }, { status: 200 });
}
