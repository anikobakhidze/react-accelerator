import { NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "./constants";

export function middleware(request) {
  const cookies = request.cookies;
  const authCookie = cookies.get(AUTH_COOKIE_KEY);
  const url = new URL(request.url);
  const pathname = url.pathname;
  if (authCookie && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!authCookie && !pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
