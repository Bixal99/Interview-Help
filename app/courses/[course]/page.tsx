import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseHomeActions } from "@/components/course-home-actions";
import { CourseProgressBar } from "@/components/course-progress-bar";
import { TutorialShell } from "@/components/tutorial-shell";
import { courseCatalog } from "@/lib/course-catalog";
import { getCourseHome } from "@/lib/content";
import { lessonPath, phasePath, projectPathFor } from "@/lib/parse-course";

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
      <TutorialShell nav={course.nav}>
        <div className="ih-band px-4 py-8 sm:px-8 lg:px-12">
          <h1 className="max-w-[75ch] text-3xl font-bold sm:text-4xl">{course.shortName} Tutorial</h1>
          <CourseHomeActions slug={course.slug} startHref={course.startHref} shortName={course.shortName} />
        </div>
        <div className="bg-[rgb(var(--surface))] px-4 py-8 sm:px-8 lg:px-12">
          <div className="max-w-[75ch]">
            <CourseProgressBar slug={course.slug} lessonCount={lessonCount} projectCount={projectCount} />
            <p className="mb-10 max-w-[65ch] text-lg leading-relaxed">{course.description}</p>
            <h2 className="text-2xl font-bold">What you will learn</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[17px]">
              {course.nav.chapters.map((chapter) => (
                <li key={chapter.id}>{chapter.title}</li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-bold">Chapters</h2>
            <ol className="mt-4 space-y-6">
              {course.nav.chapters.map((chapter) => (
                <li key={chapter.id}>
                  <h3 className="font-bold">{chapter.title}</h3>
                  <ul className="mt-2 space-y-1">
                    {chapter.phases.map((phase) => (
                      <li key={phase.id}>
                        <Link href={phasePath(course.slug, phase.id)} className="text-accent underline">PHASE {phase.number} — {phase.title}</Link>
                        <ul className="ml-4 mt-1 space-y-1 text-[15px]">
                          {phase.lessons.map((lesson) => (
                            <li key={lesson.id}><Link href={lessonPath(course.slug, phase.id, lesson)} className="hover:text-accent">{lesson.id} {lesson.title}</Link></li>
                          ))}
                          {phase.hasProject && <li><Link href={projectPathFor(course.slug, phase.id)} className="hover:text-accent">Project</Link></li>}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </TutorialShell>
    </main>
  );
}
