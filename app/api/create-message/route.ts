import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, subject, message } = await request.json();

    if (!name || !phone || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await sql`
    INSERT INTO contact_us (name, phone, email, subject, message)
    VALUES (${name}, ${phone}, ${email}, ${subject}, ${message});
  `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}
