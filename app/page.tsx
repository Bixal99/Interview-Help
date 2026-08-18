import Link from "next/link";
import { ContinueStrip } from "@/components/continue-strip";
import { getCourseSummaries, getPathStarts } from "@/lib/content";

export default function HomePage() {
  const courses = getCourseSummaries();
  const paths = getPathStarts();
  return (
    <main id="main-content" className="mx-auto max-w-[900px] px-4 py-10">
      <h1 className="text-4xl font-bold tracking-[-.02em]">Interview Help</h1>
      <p className="mt-3 max-w-[65ch] text-lg text-muted">The same roadmaps as the repository, shown one lesson at a time. Watch the videos on the lesson. Finish that phase&apos;s project before the next chapter.</p>
      <form action="/search" method="get" className="mt-8">
        <label htmlFor="home-search" className="sr-only">Search the library</label>
        <input id="home-search" name="q" placeholder="Search lessons, projects, commands…" className="h-12 w-full border hairline bg-[rgb(var(--surface))] px-4 text-[16px]" />
      </form>
      <div className="mt-8">
        <ContinueStrip />
      </div>
      <h2 className="mt-10 text-2xl font-bold">Courses</h2>
      <ul className="mt-4 divide-y hairline border hairline bg-[rgb(var(--surface))]">
        {courses.map((course) => (
          <li key={course.slug} className="flex flex-wrap items-baseline justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <Link href={`/courses/${course.slug}`} className="font-semibold hover:text-accent">{course.shortName}</Link>
              <p className="text-sm text-muted">{course.description}</p>
            </div>
            <Link href={`/courses/${course.slug}`} className="text-accent underline">Start</Link>
          </li>
        ))}
      </ul>
      <h2 className="mt-12 text-2xl font-bold">Paths</h2>
      <ul className="mt-4 space-y-2">
        {paths.map((path) => (
          <li key={path.id}>
            <Link href={path.href} className="text-accent underline">{path.title}</Link>
          </li>
        ))}
      </ul>
      <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
        <Link href="/projects" className="underline">Projects</Link>
        <Link href="/interview" className="underline">Interview</Link>
        <Link href="/cv-template" className="underline">CV template</Link>
        <Link href="/downloads/job-tracker" className="underline">Job Tracker</Link>
        <Link href="/progress" className="underline">Progress</Link>
        <Link href="/about" className="underline">About</Link>
      </p>
    </main>
  );
}
