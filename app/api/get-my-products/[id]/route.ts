import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

interface IProps {
  params: {
    id: string;
  };
}
export const revalidate = 0;
export async function GET(_: NextRequest, { params: { id } }: IProps) {
  try {
    const products = await sql`
    SELECT * FROM products WHERE usersub = ${id}
  `;

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
