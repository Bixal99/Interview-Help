import type { Metadata } from "next";
import { ProgressDashboard, type ProgressCourseView } from "@/components/progress-dashboard";
import { getCourseNav, getCourseSummaries } from "@/lib/content";
import { lessonCountForNav } from "@/lib/navigation";
import { phasePath } from "@/lib/parse-course";

export const metadata: Metadata = { title: "Progress", description: "Walk each roadmap lesson by lesson and see where you left off." };

export default function ProgressPage() {
  const courses: ProgressCourseView[] = getCourseSummaries().map((course) => {
    const nav = getCourseNav(course.slug);
    return {
      slug: course.slug,
      shortName: course.shortName,
      barLabel: course.barLabel,
      description: course.description,
      lessonCount: nav ? lessonCountForNav(nav) : 0,
      phaseCount: nav?.chapters.reduce((sum, chapter) => sum + chapter.phases.length, 0) ?? 0,
      chapters: (nav?.chapters ?? []).map((chapter) => ({
        id: chapter.id,
        title: chapter.title,
        phases: chapter.phases.map((phase) => ({
          id: phase.id,
          number: phase.number,
          title: phase.title,
          goal: phase.goal,
          hasProject: phase.hasProject,
          href: phasePath(course.slug, phase.id),
          lessonIds: phase.lessons.filter((lesson) => lesson.kind === "lesson").map((lesson) => lesson.id),
          lessons: phase.lessons
            .filter((lesson) => lesson.kind === "lesson")
            .map((lesson) => ({ id: lesson.id, slug: lesson.slug, title: lesson.title })),
        })),
      })),
    };
  });
  return <ProgressDashboard courses={courses} />;
}
