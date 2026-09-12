import { ChapterGate } from "@/components/chapter-gate";
import { getCourseHome, getCourseNav } from "@/lib/content";

export default async function ChapterLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ course: string; unit: string; chapter: string }>;
}) {
  const { course, chapter } = await params;
  const nav = getCourseNav(course);
  const home = getCourseHome(course);
  const phases = nav?.chapters.flatMap((unit) => unit.phases) ?? [];
  const phaseIds = phases.map((phase) => phase.id);
  const phase = phases.find((item) => item.id === chapter || item.id === String(Number(chapter)));
  const chapters = phases.map((item) => ({ id: item.id, number: item.number, title: item.title }));

  return (
    <ChapterGate
      slug={course}
      phaseId={phase?.id ?? chapter}
      phaseNumber={phase?.number ?? chapter}
      phaseTitle={phase?.title ?? `Chapter ${chapter}`}
      phaseIds={phaseIds.length ? phaseIds : [chapter]}
      chapters={chapters}
      startHref={home?.startHref ?? `/courses/${course}`}
    >
      {children}
    </ChapterGate>
  );
}
