import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GateBanner } from "@/components/gate-banner";
import { ProjectChrome } from "@/components/project-chrome";
import { getAllProjectParams, getProjectView, getRequiredLessonHref } from "@/lib/content";
import { lessonIdsByPhase } from "@/lib/navigation";
import { chapterDocumentTitle } from "@/lib/curriculum-labels";
import { parseProjectBrief } from "@/lib/parse-project-brief";

export function generateStaticParams() {
  return getAllProjectParams();
}

export async function generateMetadata({ params }: { params: Promise<{ course: string; phase: string }> }): Promise<Metadata> {
  const { course, phase } = await params;
  const view = getProjectView(course, phase);
  if (!view) return {};
  const title = chapterDocumentTitle(view.phase.number, view.project.title);
  return { title: { absolute: title } };
}

export default async function PhaseProjectPage({ params }: { params: Promise<{ course: string; phase: string }> }) {
  const { course, phase } = await params;
  const view = getProjectView(course, phase);
  if (!view) notFound();
  const phaseIds = view.nav.chapters.flatMap((chapter) => chapter.phases.map((item) => item.id));
  const lessonsByPhase = lessonIdsByPhase(view.nav);
  return (
    <main id="main-content">
      <GateBanner
        slug={view.course.slug}
        phaseId={view.phase.id}
        phaseIds={phaseIds}
        lessonIdsByPhase={lessonsByPhase}
        requiredHref={getRequiredLessonHref(view.course.slug, view.phase.id)}
      />
      <ProjectChrome
          slug={view.course.slug}
          phaseId={view.phase.id}
          chapterNumber={view.phase.number}
          lessonIds={view.phase.lessonIds}
          unitTitle={view.unit?.title}
          projectId={view.project.id}
          title={view.project.title}
          brief={parseProjectBrief(view.project.markdown)}
          reviewHref={view.reviewHref}
          reviewLabel={view.reviewLabel}
          proceedHref={view.proceedHref}
          proceedLabel={view.proceedLabel}
          whatComesNext={view.whatComesNext}
        />
    </main>
  );
}
