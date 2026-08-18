import type { Metadata } from "next";
import { InnerPage } from "@/components/inner-page";
import { ProgressDashboard } from "@/components/progress-dashboard";
import { getCourseSummaries, getParsedCourse } from "@/lib/content";

export const metadata: Metadata = { title: "Progress", description: "Continue, export, import, or reset local progress." };

export default function ProgressPage() {
  const courses = getCourseSummaries().map((course) => {
    const parsed = getParsedCourse(course.slug);
    return {
      slug: course.slug,
      shortName: course.shortName,
      lessonCount: course.lessonCount,
      projectCount: parsed?.phases.filter((phase) => phase.project).length ?? 0,
    };
  });
  return (
    <InnerPage title="Progress" description="Stored only in this browser. Export a backup before you clear site data.">
      <ProgressDashboard courses={courses} />
    </InnerPage>
  );
}
