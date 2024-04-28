import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "./constants";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";

export function middleware(request: NextRequest): Response {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const cookies = request.cookies;
  const authCookie = cookies.get(AUTH_COOKIE_KEY);

  const authRequiredPaths =
    !pathname.startsWith("/login") && !pathname.startsWith("/geo/login");

  const loginPaths =
    pathname.startsWith("/login") || pathname.startsWith("/geo/login");

  if (authCookie && loginPaths) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!authCookie && authRequiredPaths) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/((?!api|static|.*\\..*|_next).*)",
  ],
};
