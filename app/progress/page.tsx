import type { Metadata } from "next";
import { ProgressDashboard, type ProgressCourseView } from "@/components/progress-dashboard";
import { getCourseNav, getCourseSummaries } from "@/lib/content";
import { phaseCountWithProjects } from "@/lib/navigation";
import { phasePath } from "@/lib/parse-course";

export const metadata: Metadata = { title: "Progress", description: "Walk each roadmap as a trail of phases you clear in order." };

export default function ProgressPage() {
  const courses: ProgressCourseView[] = getCourseSummaries().map((course) => {
    const nav = getCourseNav(course.slug);
    return {
      slug: course.slug,
      shortName: course.shortName,
      barLabel: course.barLabel,
      description: course.description,
      phaseCount: nav ? phaseCountWithProjects(nav) : 0,
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
        })),
      })),
    };
  });
  return <ProgressDashboard courses={courses} />;
}
