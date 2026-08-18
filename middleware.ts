import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { rewriteLegacyPath } from "./lib/legacy-routes";

export function middleware(request: NextRequest) {
  const destination = rewriteLegacyPath(request.nextUrl.pathname);
  if (!destination || destination === request.nextUrl.pathname) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/courses/object-oriented-programming",
    "/courses/object-oriented-programming/:path*",
    "/projects/object-oriented-programming/:path*",
  ],
};
