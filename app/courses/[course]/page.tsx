import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseHomeActions } from "@/components/course-home-actions";
import { CourseProgressBar } from "@/components/course-progress-bar";
import { CourseToc } from "@/components/course-toc";
import { CourseWelcome } from "@/components/course-welcome";
import { courseCatalog } from "@/lib/course-catalog";
import { getCourseHome } from "@/lib/content";

export function generateStaticParams() { return courseCatalog.map((course) => ({ course: course.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course: slug } = await params;
  const course = getCourseHome(slug);
  if (!course) return {};
  return { title: course.shortName, description: course.description, alternates: { canonical: `/courses/${slug}` } };
}

export default async function CourseHomePage({ params }: { params: Promise<{ course: string }> }) {
  const { course: slug } = await params;
  const course = getCourseHome(slug);
  if (!course) notFound();
  const lessonCount = course.nav.chapters.reduce(
    (sum, chapter) => sum + chapter.phases.reduce((phaseSum, phase) => phaseSum + phase.lessons.length, 0),
    0,
  );
  const projectCount = course.nav.chapters.reduce(
    (sum, chapter) => sum + chapter.phases.filter((phase) => phase.hasProject).length,
    0,
  );
  return (
    <main id="main-content">
      <div className="ih-band px-4 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h1 className="text-4xl font-bold uppercase tracking-wide sm:text-6xl">{course.shortName} Tutorial</h1>
          <CourseProgressBar slug={course.slug} lessonCount={lessonCount} projectCount={projectCount} variant="band" />
        </div>
      </div>
      <div className="bg-[rgb(var(--paper))] px-4 py-10 sm:px-8 lg:px-12">
        <CourseWelcome shortName={course.shortName} intro={course.beginnerIntro} />
        <p className="mt-8 text-lg leading-relaxed text-ink">{course.description}</p>
        <h2 className="mt-12 text-3xl font-bold uppercase tracking-wide sm:text-5xl">What we will study</h2>
        <CourseToc nav={course.nav} />
        <div className="mt-12 flex justify-start border-t hairline pt-8">
          <CourseHomeActions slug={course.slug} startHref={course.startHref} shortName={course.shortName} />
        </div>
      </div>
    </main>
  );
}
