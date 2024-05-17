import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, productId } = await request.json();

  try {
    if (userId == undefined || productId == undefined) {
      throw new Error("userId and productId are required");
    }

    const existingCartItem = await sql`
      SELECT * FROM cart 
      WHERE userId = ${userId} AND productId = ${productId};
    `;

    if (existingCartItem.rows.length === 0) {
      await sql`
      INSERT INTO cart (userId, productId, quantity) 
      VALUES (${userId}, ${productId}, 1);
    `;
    } else {
      await sql`
      UPDATE cart 
      SET quantity = quantity + 1 
      WHERE userId = ${userId} AND productId = ${productId}
    `;
    }

    const cart = await sql`
      SELECT * FROM cart
      WHERE userId = ${userId}
      ORDER BY id ASC;
    `;

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
