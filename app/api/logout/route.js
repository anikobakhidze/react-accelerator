import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/constants";

export async function GET() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_KEY);
  return Response.json("delete user");
}
