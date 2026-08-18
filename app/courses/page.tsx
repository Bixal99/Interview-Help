import type { Metadata } from "next";
import { CourseCard } from "@/components/course-card";
import { InnerPage } from "@/components/inner-page";
import { getCourseSummaries } from "@/lib/content";

export const metadata: Metadata = { title: "Tutorials", description: "Every Interview Help course, as a tutorial index." };

export default function CoursesPage() {
  const courses = getCourseSummaries();
  return (
    <InnerPage
      wide
      title="Tutorials"
      description="If you are new to programming or aiming for software engineering, start with Computer Science. Programming fundamentals start at Phase 3."
    >
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <li key={course.slug}>
            <CourseCard course={course} index={index} />
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
