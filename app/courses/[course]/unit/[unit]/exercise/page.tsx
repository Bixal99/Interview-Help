import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDocPage } from "@/components/course-doc-page";
import { getCourseCatalog, getCourseDocView, listCourseDocs } from "@/lib/content";

export function generateStaticParams() {
  return getCourseCatalog().flatMap((course) =>
    listCourseDocs(course.slug)
      .filter((doc) => doc.kind === "unit-exercise" && doc.unit)
      .map((doc) => ({ course: course.slug, unit: String(doc.unit) })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; unit: string }>;
}): Promise<Metadata> {
  const { course, unit } = await params;
  const view = getCourseDocView(course, `/courses/${course}/unit/${unit}/exercise`);
  if (!view) return {};
  return { title: { absolute: view.title } };
}

export default async function Page({
  params,
}: {
  params: Promise<{ course: string; unit: string }>;
}) {
  const { course, unit } = await params;
  const view = getCourseDocView(course, `/courses/${course}/unit/${unit}/exercise`);
  if (!view) notFound();
  return (
    <CourseDocPage
      slug={course}
      markdown={view.markdown}
      sourcePath={view.sourcePath}
      prev={view.prev}
      next={view.next}
    />
  );
}
