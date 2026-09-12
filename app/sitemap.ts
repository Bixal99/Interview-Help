import type { MetadataRoute } from "next";
import { getCourseCatalog, listCourseDocs, listLinearStops } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://interview-help.vercel.app";
  const routes = ["", "/courses", "/search", "/about", "/cv-template", "/progress"];
  const coursePages = getCourseCatalog().flatMap((course) => {
    const docs = listCourseDocs(course.slug).map((doc) => ({ url: `${base}${doc.href}`, lastModified: new Date() }));
    const extras = listLinearStops(course.slug)
      .filter((stop) => stop.kind === "checkpoint" || stop.href.endsWith("/solution"))
      .map((stop) => ({ url: `${base}${stop.href}`, lastModified: new Date() }));
    return [{ url: `${base}/courses/${course.slug}`, lastModified: new Date() }, ...docs, ...extras];
  });
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...coursePages,
  ];
}
