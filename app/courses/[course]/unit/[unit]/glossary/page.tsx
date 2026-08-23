import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UnitGlossary } from "@/components/unit-glossary";
import { getAllGlossaryParams, getGlossaryView } from "@/lib/content";
import { unitDisplayTitle } from "@/lib/curriculum-labels";

export function generateStaticParams() {
  return getAllGlossaryParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; unit: string }>;
}): Promise<Metadata> {
  const { course, unit } = await params;
  const view = getGlossaryView(course, unit);
  if (!view) return {};
  return {
    title: { absolute: `Glossary · ${unitDisplayTitle(view.chapter.title)}` },
    description: `Key terms from ${unitDisplayTitle(view.chapter.title)} in ${view.course.shortName}.`,
  };
}

export default async function UnitGlossaryPage({
  params,
}: {
  params: Promise<{ course: string; unit: string }>;
}) {
  const { course, unit } = await params;
  const view = getGlossaryView(course, unit);
  if (!view) notFound();
  return (
    <main id="main-content">
      <UnitGlossary
        unitTitle={view.chapter.title}
        unitId={view.chapter.id}
        courseSlug={view.course.slug}
        phaseId={view.prev?.phaseId ?? view.chapter.phaseIds[view.chapter.phaseIds.length - 1]!}
        courseName={view.course.shortName}
        sections={view.sections}
        prev={view.prev}
        next={view.next}
      />
    </main>
  );
}
