import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { userId, products, deliveryAddress } = await request.json();

    if (!userId || !products || !deliveryAddress) {
      throw new Error("userId, products, and deliveryAddress are required");
    }

    const productsJson = JSON.stringify(products);

    await sql`
      INSERT INTO checkout (userId, products, deliveryAddress)
      VALUES (${userId}, ${productsJson}, ${deliveryAddress});
    `;

    const checkout = await sql`SELECT * FROM checkout;`;
    return NextResponse.json({ checkout }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
