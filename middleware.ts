import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "./constants";
import { createI18nMiddleware } from "next-international/middleware";

const logInRoutes = ["/login", "/ka/login", "/en/login"];

export default async function middleware(request: NextRequest) {
  const cookie = request.cookies.get(AUTH_COOKIE_KEY);
  const path = request.nextUrl.pathname;

  const isLogInRoute = logInRoutes.includes(path);

  if (!isLogInRoute && !cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isLogInRoute && cookie) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  const defaultLocale = request.headers.get("ka") || "en";

  const handleI18nRouting = createI18nMiddleware({
    locales: ["en", "ka"],
    defaultLocale: "en",
    urlMappingStrategy: "rewrite",
  });

  const response = handleI18nRouting(request);

  response.headers.set("ka", defaultLocale);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/",
    "/(ka|en)/:path*",
  ],
};
