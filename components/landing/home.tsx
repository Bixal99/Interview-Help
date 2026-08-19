import Link from "next/link";
import { HeroStage } from "./hero-stage";

export type LandingCourse = {
  slug: string;
  shortName: string;
  description: string;
  phaseCount: number;
  lessonCount: number;
};

export type LandingPath = {
  id: string;
  title: string;
  href: string;
};

export type LandingStats = {
  courseCount: number;
  phaseCount: number;
  lessonCount: number;
  projectCount: number;
};

const TILES = ["#D9EEE1", "#FFF4A3", "#FFC0C7", "#96D4FA", "#F3ECEA"];

const steps = [
  {
    title: "Pick a track",
    body: "Choose a role path or open a tutorial. New to coding? Start with Computer Science.",
  },
  {
    title: "Read one lesson",
    body: "Watch the video, run the example, and stay on that page until the idea is clear.",
  },
  {
    title: "Build the project",
    body: "Each phase has a matching mini-project. Finish it before the next chapter unlocks.",
  },
  {
    title: "Practice out loud",
    body: "Use the interview playbook to speak answers, then keep going through the roadmap.",
  },
];

export function LandingHome({
  courses,
  paths,
  stats,
}: {
  courses: LandingCourse[];
  paths: LandingPath[];
  stats: LandingStats;
}) {
  return (
    <>
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="ih-hero">
          <div>
            <h1 className="max-w-[14ch] text-[2.75rem] font-bold leading-[1.05] tracking-[-0.035em] text-[#1A1A1A] sm:text-6xl lg:text-[4.7rem] xl:text-[5.5rem]">
              From first principles to hire-ready
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[#505050] sm:text-xl">
              Self-paced technical roadmaps. One lesson per page, then that phase&apos;s project. No account and no paywall.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/courses" className="ih-landing-cta">
                Start learning
              </Link>
              <Link href="/progress" className="text-[17px] font-semibold text-[#04AA6D] underline decoration-[#04AA6D]/40 underline-offset-4 hover:decoration-[#04AA6D]">
                Open progress
              </Link>
            </div>
            <p className="mt-12 max-w-[75ch] text-[15px] font-semibold tabular-nums text-[#1A1A1A]">
              {stats.courseCount} roadmaps
              <span className="mx-3 font-normal text-[#888]">·</span>
              {stats.lessonCount.toLocaleString("en-US")} lessons
              <span className="mx-3 font-normal text-[#888]">·</span>
              {stats.projectCount.toLocaleString("en-US")} phase projects
            </p>
          </div>
          <HeroStage />
        </div>
      </section>

      <section id="courses" className="bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#1A1A1A] sm:text-4xl">Courses we teach</h2>
          <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-[#505050]">
            {stats.courseCount} tutorials from the repository. Each card opens that course&apos;s HOME page.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <li key={course.slug}>
                <Link
                  href={`/courses/${course.slug}`}
                  className="ih-landing-tile"
                  style={{ background: TILES[index % TILES.length] }}
                >
                  <h3 className="text-2xl font-bold tracking-[-0.02em]">{course.shortName}</h3>
                  <p className="mt-3 text-[15px] leading-6 text-[#1A1A1A]/80">{course.description}</p>
                  <p className="mt-auto pt-8 text-sm font-semibold">
                    {course.phaseCount} phases · {course.lessonCount} lessons
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="how-it-works" className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#1A1A1A] sm:text-4xl">How to use this website</h2>
          <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-[#505050]">
            The same loop on every roadmap: one lesson, then that phase&apos;s project, then the next chapter.
          </p>
          <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="max-w-[46ch]">
                <span className="ih-landing-step" aria-hidden="true">{index + 1}</span>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#1A1A1A]">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#505050]">{step.body}</p>
              </li>
            ))}
          </ol>
          {paths.length > 0 ? (
            <div className="mt-16">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Not sure where to begin?</h3>
              <p className="mt-2 max-w-[65ch] text-[#505050]">Open the first lesson on the path that matches the work you want.</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {paths.map((path) => (
                  <li key={path.id}>
                    <Link href={path.href} className="ih-landing-path">
                      {path.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
