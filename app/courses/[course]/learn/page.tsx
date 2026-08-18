import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HashRedirect } from "@/components/hash-redirect";
import { courseCatalog } from "@/lib/course-catalog";
import { getParsedCourse } from "@/lib/content";
import { headingRouteMap, lessonPath } from "@/lib/parse-course";

export function generateStaticParams() { return courseCatalog.map((course) => ({ course: course.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course: slug } = await params;
  const course = getParsedCourse(slug);
  return course ? { title: `Learn ${course.shortName}` } : {};
}

export default async function LearnCompatPage({ params }: { params: Promise<{ course: string }> }) {
  const { course: slug } = await params;
  const course = getParsedCourse(slug);
  if (!course) notFound();
  const first = course.phases[0]?.lessons[0];
  const fallback = first ? lessonPath(slug, course.phases[0].id, first) : `/courses/${slug}`;
  const map = Object.fromEntries(headingRouteMap(course));
  return (
    <main id="main-content">
      <HashRedirect map={map} fallback={fallback} />
    </main>
  );
}
