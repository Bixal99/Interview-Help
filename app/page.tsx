import { LandingFooter } from "@/components/landing/footer";
import { LandingHeader } from "@/components/landing/header";
import { LandingHome } from "@/components/landing/home";
import { getAllProjects, getCourseSummaries, getPathStarts } from "@/lib/content";

export default function HomePage() {
  const courses = getCourseSummaries();
  const projects = getAllProjects();
  const paths = getPathStarts();

  return (
    <div className="ih-landing">
      <LandingHeader />
      <main id="main-content">
        <LandingHome
          courses={courses.map((course) => ({
            slug: course.slug,
            shortName: course.shortName,
            description: course.description,
            phaseCount: course.phaseCount,
            lessonCount: course.lessonCount,
          }))}
          paths={paths.map((path) => ({ id: path.id, title: path.title, href: path.href }))}
          stats={{
            courseCount: courses.length,
            phaseCount: courses.reduce((sum, course) => sum + course.phaseCount, 0),
            lessonCount: courses.reduce((sum, course) => sum + course.lessonCount, 0),
            projectCount: projects.length,
          }}
        />
      </main>
      <LandingFooter />
    </div>
  );
}
