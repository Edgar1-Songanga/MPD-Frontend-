// Placeholder for middleware.ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");
  const isPlatform = req.nextUrl.pathname.startsWith("/companies")
    || req.nextUrl.pathname.startsWith("/users")
    || req.nextUrl.pathname.startsWith("/candidates")
    || req.nextUrl.pathname.startsWith("/jobs");

  if ((isDashboard || isPlatform) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/companies/:path*",
    "/users/:path*",
    "/candidates/:path*",
    "/jobs/:path*"
  ]
};
