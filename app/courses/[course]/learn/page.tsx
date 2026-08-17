import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReaderLayout } from "@/components/reader-layout";
import { courseCatalog } from "@/lib/course-catalog";
import { getCourse } from "@/lib/content";

export function generateStaticParams() { return courseCatalog.map((course) => ({ course: course.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course: slug } = await params; const course = getCourse(slug); return course ? { title: `Learn ${course.shortName}`, description: course.description } : {};
}

export default async function CourseReaderPage({ params }: { params: Promise<{ course: string }> }) {
  const { course: slug } = await params; const course = getCourse(slug); if (!course) notFound();
  return <ReaderLayout title={course.shortName} markdown={course.markdown} headings={course.headings} slug={course.slug} overviewHref={`/courses/${course.slug}`} />;
}
