import type { Metadata } from "next";
import { CourseCard } from "@/components/course-card";
import { getCourseSummaries } from "@/lib/content";

export const metadata: Metadata = { title: "Tutorials", description: "Every Quarry course, as a tutorial index." };

export default function CoursesPage() {
  const courses = getCourseSummaries();
  const phases = courses.reduce((sum, course) => sum + (course.phaseCount ?? 0), 0);
  const lessons = courses.reduce((sum, course) => sum + (course.lessonCount ?? 0), 0);
  return (
    <main id="main-content" className="ih-studio ih-courses-page">
      <div className="ih-studio-shell">
        <header className="ih-studio-hero">
          <h1>Tutorials</h1>
          <p className="ih-studio-lead">
            Select a tutorial to get started.
          </p>
          <ul className="ih-studio-stats">
            <li>
              <b>{courses.length}</b>
              <span>roadmaps</span>
            </li>
            <li>
              <b>{phases}</b>
              <span>phases</span>
            </li>
            <li>
              <b>{lessons}</b>
              <span>lessons</span>
            </li>
          </ul>
        </header>

        <section className="ih-studio-board">
          <ul className="ih-course-grid">
            {courses.map((course, index) => (
              <li key={course.slug}>
                <CourseCard course={course} index={index} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
