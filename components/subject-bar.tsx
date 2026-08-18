"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { courseBarLabels, courseCatalog } from "@/lib/course-catalog";

export function SubjectBar() {
  const pathname = usePathname();
  return (
    <nav className="ih-subjects sticky top-12 z-40" aria-label="Courses">
      <div className="mx-auto flex max-w-[1600px] gap-1 overflow-x-auto px-2 sm:px-3">
        {courseCatalog.map((course) => {
          const href = `/courses/${course.slug}`;
          const active = pathname === href || pathname.startsWith(`${href}/`) || pathname.startsWith(`/projects/${course.slug}/`);
          return (
            <Link
              key={course.slug}
              href={href}
              className={`whitespace-nowrap px-3 py-2.5 text-[15px] font-semibold ${active ? "active" : "text-muted hover:text-ink"}`}
            >
              {courseBarLabels[course.slug] ?? course.shortName}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
