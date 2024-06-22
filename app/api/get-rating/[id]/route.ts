import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export const revalidate = 0;
export async function GET(request: NextRequest) {
  const product_id = request.nextUrl.pathname.replace("/api/get-rating/", "");
  try {
    const result =
      await sql`SELECT rating FROM rating WHERE product_id=${product_id}`;
    const ratingsArray = result.rows.map((row) => row.rating);

    if (ratingsArray.length === 0) {
      return NextResponse.json({ averageRating: 0 });
    }
    const sumOfRatings = ratingsArray.reduce((acc, rate) => acc + rate, 0);
    const averageRating = sumOfRatings / ratingsArray.length;

    return NextResponse.json({ averageRating }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
