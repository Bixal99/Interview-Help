import type { Metadata } from "next";
import { CourseCard } from "@/components/course-card";
import { getCourses } from "@/lib/content";

export const metadata: Metadata = { title: "Courses", description: "Explore every connected technical roadmap." };

export default function CoursesPage() {
  const courses = getCourses();
  return <main id="main-content" className="mx-auto max-w-7xl px-5 py-16 sm:px-6"><div className="mb-12 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.16em] text-cobalt">{courses.length} roadmaps</p><h1 className="mt-3 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Choose what you want to understand.</h1><p className="mt-5 text-sm leading-7 text-muted">Each roadmap is ordered, project-backed, and connected to interview practice. If you are new to programming, begin with OOP Part 0. For general software engineering, begin with Computer Science.</p></div><div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">{courses.map((course) => <CourseCard key={course.slug} course={course} />)}</div></main>;
}
