import type { Metadata } from "next";
import Link from "next/link";
import { getCourseSummaries } from "@/lib/content";

export const metadata: Metadata = { title: "Tutorials", description: "Every Interview Help course, as a tutorial index." };

export default function CoursesPage() {
  const courses = getCourseSummaries();
  return (
    <main id="main-content" className="mx-auto max-w-[900px] px-4 py-10">
      <h1 className="text-4xl font-bold">Tutorials</h1>
      <p className="mt-3 max-w-[65ch] text-muted">If you are new to programming, start with OOP. For general software engineering, start with Computer Science.</p>
      <ul className="mt-8 divide-y hairline border hairline bg-[rgb(var(--surface))]">
        {courses.map((course) => (
          <li key={course.slug} className="flex flex-wrap items-baseline justify-between gap-3 px-4 py-3">
            <div>
              <Link href={`/courses/${course.slug}`} className="font-semibold hover:text-accent">{course.shortName}</Link>
              <p className="text-sm text-muted">{course.description}</p>
            </div>
            <Link href={`/courses/${course.slug}`} className="text-accent underline">Open</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
