import type { ParsedCourse } from "./learning-model";

export type MigrationLookup = {
  slug: string;
  phaseHeadingIds: string[];
  projectHeadingIds: string[];
  gitHeadingIds: string[];
  practiceHeadingIds: string[];
};

export function lookupFromCourses(courses: ParsedCourse[]): MigrationLookup[] {
  return courses.map((course) => ({
    slug: course.slug,
    phaseHeadingIds: course.phases.flatMap((phase) => phase.anchorIds.map((id) => id.toLowerCase())),
    projectHeadingIds: course.phases.flatMap((phase) => (phase.project ? [phase.project.id.toLowerCase()] : [])),
    gitHeadingIds: course.phases.flatMap((phase) => (phase.project ? [`${phase.project.id}-git`, `git-checkpoint-${phase.id}`] : [])),
    practiceHeadingIds: course.phases.flatMap((phase) => phase.lessons.map((lesson) => `practice-${lesson.id}`)),
  }));
}
