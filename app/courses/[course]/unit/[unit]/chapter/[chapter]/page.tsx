import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhaseCheckpoint } from "@/components/phase-checkpoint";
import { getCheckpointView } from "@/lib/content";
import { allChapters, unitForChapter } from "@/lib/course-roadmap";
import { getCourseCatalog } from "@/lib/course-catalog";

export function generateStaticParams() {
  return getCourseCatalog().flatMap((course) =>
    allChapters(course.slug).map((chapter) => ({
      course: course.slug,
      unit: String(unitForChapter(course.slug, chapter.number)),
      chapter: String(chapter.number),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; unit: string; chapter: string }>;
}): Promise<Metadata> {
  const { course, unit, chapter } = await params;
  const view = getCheckpointView(course, Number(unit), Number(chapter));
  if (!view) return {};
  return { title: { absolute: `Chapter ${view.phaseNumber}` } };
}

export default async function ChapterCheckpointPage({
  params,
}: {
  params: Promise<{ course: string; unit: string; chapter: string }>;
}) {
  const { course, unit, chapter } = await params;
  const view = getCheckpointView(course, Number(unit), Number(chapter));
  if (!view) notFound();

  return (
    <PhaseCheckpoint
      courseSlug={course}
      phaseId={view.phaseId}
      phaseNumber={view.phaseNumber}
      phaseTitle={view.phaseTitle}
      unitTitle={view.unitTitle}
      prev={view.prev ? { href: view.prev.href, label: view.prev.label, kind: "lesson", course, phaseId: view.phaseId } : null}
      proceedHref={view.proceedHref}
    />
  );
}
