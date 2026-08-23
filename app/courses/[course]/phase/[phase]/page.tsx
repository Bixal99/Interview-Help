import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhaseCheckpoint } from "@/components/phase-checkpoint";
import { getAllPhaseParams, getPhaseView } from "@/lib/content";
import { chapterTitleForPhase } from "@/lib/learning-paths";
import { chapterDocumentTitle } from "@/lib/curriculum-labels";
import { lessonPath } from "@/lib/parse-course";

export function generateStaticParams() {
  return getAllPhaseParams();
}

export async function generateMetadata({ params }: { params: Promise<{ course: string; phase: string }> }): Promise<Metadata> {
  const { course, phase } = await params;
  const view = getPhaseView(course, phase);
  if (!view) return {};
  const title = chapterDocumentTitle(view.phase.number, view.phase.title);
  return { title: { absolute: title } };
}

export default async function PhasePage({ params }: { params: Promise<{ course: string; phase: string }> }) {
  const { course, phase } = await params;
  const view = getPhaseView(course, phase);
  if (!view) notFound();
  const firstLesson = view.phase.lessons[0];
  const unitTitle = chapterTitleForPhase(
    view.course.slug,
    view.phase.id,
    view.nav.chapters.flatMap((chapter) => chapter.phases.map((phase) => phase.id)),
  );
  return (
    <main id="main-content">
      <PhaseCheckpoint
        courseSlug={view.course.slug}
        phaseId={view.phase.id}
        phaseNumber={view.phase.number}
        phaseTitle={view.phase.title}
        unitTitle={unitTitle ?? undefined}
        prev={view.prev}
        proceedHref={firstLesson ? lessonPath(view.course.slug, view.phase.id, firstLesson) : view.next?.href ?? view.startHref}
      />
    </main>
  );
}
