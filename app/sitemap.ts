import type { MetadataRoute } from "next";
import { courseCatalog } from "@/lib/course-catalog";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://interview-help.vercel.app"; const routes = ["", "/courses", "/projects", "/interview", "/search", "/about", "/cv-template"]; return [...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })), ...courseCatalog.flatMap((course) => [{ url: `${base}/courses/${course.slug}`, lastModified: new Date() }, { url: `${base}/courses/${course.slug}/learn`, lastModified: new Date() }])]; }
