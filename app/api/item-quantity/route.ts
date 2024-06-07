import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const { productId, userId, action } = await request.json();

    if (!userId || !productId || !action) {
      throw new Error("userId, productId, and action are required");
    }
    const cartResult =
      await sql`SELECT * FROM carts WHERE user_id = ${userId};`;
    console.log(cartResult);

    if (cartResult.rowCount > 0) {
      const cart = cartResult.rows[0];
      let products = cart.products;

      const productIndex = products.findIndex(
        (p: ICartProduct) => p.id === productId
      );
      if (productIndex !== -1) {
        if (action === "increase") {
          products[productIndex].selectedQuantity += 1;
        } else if (action === "decrease") {
          products[productIndex].selectedQuantity -= 1;
          if (products[productIndex].selectedQuantity <= 0) {
            products.splice(productIndex, 1);
          }
        } else if (action === "remove") {
          products.splice(productIndex, 1);
        }

        await sql`UPDATE carts SET products = ${JSON.stringify(
          products
        )} WHERE user_id = ${userId};`;

        const updatedCart =
          await sql`SELECT * FROM carts WHERE user_id = ${userId};`;
        return NextResponse.json(
          { cart: updatedCart.rows[0] },
          { status: 200 }
        );
      } else {
        throw new Error("Product not found in cart");
      }
    } else {
      throw new Error("Cart not found");
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
