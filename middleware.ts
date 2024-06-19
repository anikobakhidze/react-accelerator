import { NextRequest, NextResponse } from "next/server";
// import { AUTH_COOKIE_KEY } from "./constants";
import { createI18nMiddleware } from "next-international/middleware";
// import { getUser } from "./api";

// const logInRoutes = ["/login", "/ka/login", "/en/login"];

export default async function middleware(request: NextRequest) {
  const cookieStore = request.cookies;
  const appSessionCookie = cookieStore.get("appSession");
  const { pathname } = request.nextUrl;
  if (
    !appSessionCookie &&
    (pathname.startsWith("/profile") ||
      pathname.startsWith("/admin") ||
      pathname.startsWith("/editblog") ||
      pathname.startsWith("/editproduct"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (appSessionCookie && pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
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
