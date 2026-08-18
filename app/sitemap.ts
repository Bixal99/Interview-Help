import type { MetadataRoute } from "next";
import { courseCatalog } from "@/lib/course-catalog";
import { getAllLessonParams, getAllPhaseParams, getAllProjectParams } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://interview-help.vercel.app";
  const routes = ["", "/courses", "/projects", "/interview", "/search", "/about", "/cv-template", "/progress", "/paths", "/practice"];
  const coursePages = courseCatalog.flatMap((course) => [
    { url: `${base}/courses/${course.slug}`, lastModified: new Date() },
    { url: `${base}/courses/${course.slug}/learn`, lastModified: new Date() },
  ]);
  const phases = getAllPhaseParams().map((item) => ({ url: `${base}/courses/${item.course}/phase/${item.phase}`, lastModified: new Date() }));
  const lessons = getAllLessonParams().map((item) => ({ url: `${base}/courses/${item.course}/phase/${item.phase}/${item.lesson}`, lastModified: new Date() }));
  const projects = getAllProjectParams().map((item) => ({ url: `${base}/projects/${item.course}/phase/${item.phase}`, lastModified: new Date() }));
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...coursePages,
    ...phases,
    ...lessons,
    ...projects,
  ];
}
