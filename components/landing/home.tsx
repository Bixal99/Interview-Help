import Link from "next/link";
import { HeroStage } from "./hero-stage";
import { LandingCourses } from "./landing-courses";
import { LandingLoop } from "./landing-loop";

export type LandingCourse = {
  slug: string;
  shortName: string;
  description: string;
  barLabel?: string;
  skills?: string[];
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
      <section className="ih-hero-wrap">
        <div className="ih-hero">
          <div>
            <h1>
              From first principles to hire-ready
            </h1>
            <p className="ih-hero-lead">
              Self-paced technical roadmaps. One lesson per page, then that phase&apos;s project. No account and no paywall.
            </p>
            <div className="ih-hero-actions">
              <Link href="/courses" className="ih-landing-cta">
                Start learning
              </Link>
              <Link href="/progress" className="ih-hero-progress">
                Open progress
              </Link>
            </div>
            <p className="ih-hero-stats">
              <span>{stats.courseCount} roadmaps</span>
              <span>{stats.lessonCount.toLocaleString("en-US")} lessons</span>
              <span>{stats.projectCount.toLocaleString("en-US")} phase projects</span>
            </p>
          </div>
          <HeroStage />
        </div>
      </section>

      <section id="courses" className="ih-landing-band is-white">
        <div className="ih-landing-inner">
          <h2>Courses we teach</h2>
          <p className="ih-landing-lead is-single">
            {stats.courseCount} tutorials from the repository. Each card opens that course&apos;s home page.
          </p>
          <LandingCourses courses={courses} />
        </div>
      </section>

      <section id="how-it-works" className="ih-landing-band">
        <div className="ih-landing-inner">
          <h2>How to use this website</h2>
          <p className="ih-landing-lead">
            The same loop on every roadmap: one lesson, then that phase&apos;s project, then the next chapter.
          </p>
          <LandingLoop />
          {paths.length > 0 ? (
            <div className="ih-landing-paths">
              <h3>Not sure where to begin?</h3>
              <p>Open the first lesson on the path that matches the work you want.</p>
              <ul>
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
