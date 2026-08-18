import Link from "next/link";
import { AppIcon, CourseIdentityIcon } from "@/components/icons/app-icon";
import { HeroCollage } from "@/components/landing/hero-collage";

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

const features = [
  {
    name: "lesson" as const,
    title: "One lesson per page",
    body: "Each route is a single lesson, not a giant Markdown dump. Read it, try the example, then move on.",
    tone: "cream",
  },
  {
    name: "video" as const,
    title: "Video on the same page",
    body: "YouTube links already in the source play in the lesson. Nothing is added that the files do not already name.",
    tone: "yellow",
  },
  {
    name: "project" as const,
    title: "A project for every phase",
    body: "After a phase, open its matching build on its own page. The next phase stays closed until that project is marked complete.",
    tone: "white",
  },
  {
    name: "progress" as const,
    title: "Progress stays in your browser",
    body: "No account and no paywall. Completion lives in local storage, and you can export or reset it any time.",
    tone: "white",
  },
  {
    name: "search" as const,
    title: "Search the whole library",
    body: "Find a lesson, project, command, or interview prompt without leaving the site.",
    tone: "ink",
  },
] as const;

const steps = [
  {
    name: "paths" as const,
    title: "Pick a track",
    body: "Choose a role path or open a tutorial. New to coding? Start with OOP Part 0.",
  },
  {
    name: "lesson" as const,
    title: "Read one lesson",
    body: "Watch the video, run the example, and stay on that page until the idea is clear.",
  },
  {
    name: "project" as const,
    title: "Build the project",
    body: "Each phase has a matching mini-project. Finish it before the next chapter unlocks.",
  },
  {
    name: "interview" as const,
    title: "Practice out loud",
    body: "Use the interview playbook to speak answers, then keep going through the roadmap.",
  },
];

function toneClass(tone: (typeof features)[number]["tone"]) {
  if (tone === "cream") return "bg-[#FCF8F1]";
  if (tone === "yellow") return "bg-yellow-300";
  if (tone === "ink") return "bg-black text-white";
  return "bg-white";
}

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
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Zero-to-hero interview preparation</p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">From first principles to hire-ready</h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Self-paced technical roadmaps. One lesson per page, then that phase’s project.</p>

              <Link
                href="/courses/object-oriented-programming"
                title="Start learning"
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Start learning
                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>

              <p className="mt-5 text-gray-600">
                Already studying?{" "}
                <Link href="/progress" title="Open progress" className="text-black transition-all duration-200 hover:underline">
                  Open progress
                </Link>
              </p>
            </div>

            <div>
              <HeroCollage stats={{ lessonCount: stats.lessonCount, projectCount: stats.projectCount }} />
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">What you get</h2>
          <p className="mt-4 max-w-[65ch] text-base text-gray-600 sm:text-lg">
            {stats.courseCount} roadmaps, {stats.phaseCount} phases, {stats.lessonCount} lessons, and {stats.projectCount} phase projects already in the repository.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="bg-[#FCF8F1] p-8 lg:col-span-2 lg:row-span-2">
              <h3 className="text-2xl font-bold text-black">Technical roadmaps</h3>
              <p className="mt-3 max-w-[55ch] text-gray-600">
                Software, web, data, cloud, security, IT, AI, Git, and Odoo. Each tutorial keeps the source Markdown as the teaching text.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {courses.map((course) => (
                  <li key={course.slug}>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="flex items-center gap-3 bg-white px-4 py-3 text-black transition-all duration-200 hover:bg-yellow-300"
                    >
                      <CourseIdentityIcon slug={course.slug} size={22} />
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold">{course.shortName}</span>
                        <span className="block text-sm text-gray-600">
                          {course.phaseCount} phases · {course.lessonCount} lessons
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/projects" className="flex flex-col justify-between bg-yellow-300 p-8 text-black transition-all duration-200 hover:bg-yellow-400">
              <AppIcon name="project" size={28} />
              <div className="mt-10">
                <h3 className="text-2xl font-bold">Projects playbook</h3>
                <p className="mt-3 text-base">
                  {stats.projectCount} matching builds. Learn a phase, then prove it with a small working result.
                </p>
              </div>
            </Link>

            <Link href="/interview" className="flex flex-col justify-between bg-black p-8 text-white transition-all duration-200 hover:bg-neutral-800">
              <AppIcon name="interview" size={28} />
              <div className="mt-10">
                <h3 className="text-2xl font-bold">Interview playbook</h3>
                <p className="mt-3 text-base text-white/80">
                  Spoken Q&A across the same roadmaps. Cover the answer, speak it, then check the structure.
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link href="/cv-template" className="border border-gray-200 bg-white p-8 transition-all duration-200 hover:border-yellow-300">
              <h3 className="text-xl font-bold text-black">Master CV template</h3>
              <p className="mt-3 text-gray-600">A reusable career template that lives next to the roadmaps.</p>
            </Link>
            <a href="/downloads/job-tracker" className="border border-gray-200 bg-white p-8 transition-all duration-200 hover:border-yellow-300">
              <h3 className="text-xl font-bold text-black">Job tracker</h3>
              <p className="mt-3 text-gray-600">Download the spreadsheet used to track applications while you study.</p>
            </a>
          </div>

          {paths.length > 0 ? (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-black">Not sure where to begin?</h3>
              <p className="mt-2 text-gray-600">Open the first lesson on the path that matches the work you want.</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {paths.map((path) => (
                  <li key={path.id}>
                    <Link
                      href={path.href}
                      className="inline-flex rounded-full bg-[#FCF8F1] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-yellow-300"
                    >
                      {path.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section id="features" className="scroll-mt-24 bg-[#FCF8F1] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">Built around the files you already have</h2>
          <p className="mt-4 max-w-[65ch] text-base text-gray-600 sm:text-lg">
            The site displays the connected story in the Markdown. It does not invent lessons, videos, or quizzes.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`${toneClass(feature.tone)} p-8 ${index === 0 ? "lg:col-span-3" : index === 1 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <AppIcon name={feature.name} size={28} />
                <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
                <p className={`mt-3 text-base leading-relaxed ${feature.tone === "ink" ? "text-white/80" : "text-gray-700"}`}>
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">How it works</h2>
          <p className="mt-4 max-w-[65ch] text-base text-gray-600 sm:text-lg">
            The same loop on every roadmap: one lesson, then that phase&apos;s project, then the next chapter.
          </p>
          <ol className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.title}>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-300 text-black">
                  <AppIcon name={step.name} size={26} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{step.body}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/courses"
            className="mt-14 inline-flex items-center rounded-full bg-black px-6 py-4 font-semibold text-white transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black"
          >
            Browse all tutorials
            <AppIcon name="next" size={24} className="ml-8 -mr-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
