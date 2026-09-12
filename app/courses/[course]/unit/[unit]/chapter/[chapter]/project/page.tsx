import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDocPage } from "@/components/course-doc-page";
import { getCourseCatalog, getCourseDocView, listCourseDocs } from "@/lib/content";

export function generateStaticParams() {
  return getCourseCatalog().flatMap((course) =>
    listCourseDocs(course.slug)
      .filter((doc) => doc.kind === "chapter-project" && doc.unit && doc.chapter)
      .map((doc) => ({ course: course.slug, unit: String(doc.unit), chapter: String(doc.chapter) })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; unit: string; chapter: string }>;
}): Promise<Metadata> {
  const { course, unit, chapter } = await params;
  const view = getCourseDocView(course, `/courses/${course}/unit/${unit}/chapter/${chapter}/project`);
  if (!view) return {};
  return { title: { absolute: view.title } };
}

export default async function Page({
  params,
}: {
  params: Promise<{ course: string; unit: string; chapter: string }>;
}) {
  const { course, unit, chapter } = await params;
  const view = getCourseDocView(course, `/courses/${course}/unit/${unit}/chapter/${chapter}/project`);
  if (!view) notFound();
  return (
    <CourseDocPage
      slug={course}
      phaseId={String(chapter)}
      stopId={`project:${course}:${chapter}`}
      markdown={view.markdown}
      sourcePath={view.sourcePath}
      prev={view.prev}
      next={view.next}
    />
  );
}
