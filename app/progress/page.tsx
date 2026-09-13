import type { Metadata } from "next";
import { ProgressDashboard, type ProgressCourseView, type ProgressMapStop } from "@/components/progress-dashboard";
import { getCourseNav, getCourseSummaries } from "@/lib/content";
import { githubSlug } from "@/lib/content-utils";
import { chapterContentPath, chapterLeafPath, phasePath } from "@/lib/course-routes";
import { writtenProgressCounts, type CourseNavTopic } from "@/lib/navigation";

export const metadata: Metadata = { title: "Progress", description: "Walk each roadmap lesson by lesson and see where you left off." };

function topicStops(topics: CourseNavTopic[], contentHref: string, contentLessonId: string): ProgressMapStop[] {
  return topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    href: `${contentHref}#${githubSlug(`${topic.id} ${topic.title}`)}`,
    completeId: contentLessonId,
    kind: "topic",
  }));
}

export default function ProgressPage() {
  const courses: ProgressCourseView[] = getCourseSummaries().map((course) => {
    const nav = getCourseNav(course.slug);
    const written = nav ? writtenProgressCounts(nav) : { lessonCount: 0, projectCount: 0 };
    return {
      slug: course.slug,
      shortName: course.shortName,
      barLabel: course.barLabel,
      description: course.description,
      lessonCount: written.lessonCount,
      phaseCount: written.projectCount,
      chapters: (nav?.chapters ?? []).map((chapter) => ({
        id: chapter.id,
        title: chapter.title,
        phases: chapter.phases.map((phase) => {
          const content = phase.lessons.find((lesson) => lesson.slug === "content");
          const exercise = phase.lessons.find((lesson) => lesson.slug === "exercise");
          const contentHref = chapterContentPath(course.slug, phase.id, phase.unit);
          const stops: ProgressMapStop[] = [
            ...(content ? topicStops(content.children, contentHref, content.id) : []),
            ...(exercise
              ? [{
                  id: "E",
                  title: "Chapter Exercise",
                  href: chapterLeafPath(course.slug, phase.id, "exercise", phase.unit),
                  completeId: exercise.id,
                  kind: "exercise" as const,
                }]
              : []),
            ...(phase.hasProject
              ? [{
                  id: "P",
                  title: "Chapter Project",
                  href: chapterLeafPath(course.slug, phase.id, "project", phase.unit),
                  completeId: phase.id,
                  kind: "project" as const,
                }]
              : []),
          ];
          return {
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
            stops,
          };
        }),
      })),
    };
  });
  return <ProgressDashboard courses={courses} />;
}
