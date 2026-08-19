import { CourseCard } from "@/components/course-card";
import type { LandingCourse } from "./home";

export function LandingCourses({ courses }: { courses: LandingCourse[] }) {
  return (
    <ul className="ih-course-grid ih-landing-course-grid">
      {courses.map((course, index) => (
        <li key={course.slug}>
          <CourseCard course={course} index={index} />
        </li>
      ))}
    </ul>
  );
}
