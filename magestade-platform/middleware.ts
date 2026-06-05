// Placeholder for middleware.ts
export { auth as middleware } from "@/lib/auth";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/companies/:path*",
    "/users/:path*",
    "/candidates/:path*",
    "/jobs/:path*",
    "/applications/:path*",
    "/contracts/:path*"
  ]
};
