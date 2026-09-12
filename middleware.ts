import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { retiredCourseSlugs } from "./lib/retired-courses";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const retired = retiredCourseSlugs.find(
    (slug) => pathname === `/courses/${slug}` || pathname.startsWith(`/courses/${slug}/`) || pathname.startsWith(`/projects/${slug}/`),
  );
  if (retired) {
    const url = request.nextUrl.clone();
    url.pathname = "/courses";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/courses/:path*",
    "/projects/:path*",
  ],
};
