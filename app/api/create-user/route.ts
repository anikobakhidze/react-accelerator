import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export async function GET(_: NextRequest) {
  try {
    const session = await getSession();
    const user = session?.user;
    if (user) {
      const { picture, name, nickname, email, sub } = user;

      const result = await sql`SELECT * FROM users WHERE sub = ${sub}`;

      if (result.rows.length === 0)
        await sql`
        INSERT INTO users (image, name, nickname, email, sub)
        VALUES (${picture}, ${name}, ${nickname}, ${email}, ${sub});
      `;
    } else {
      return redirect("/api/auth/logout");
    }
  } catch (error) {
    return redirect("/api/auth/logout");
  }

  return redirect("/");
}
