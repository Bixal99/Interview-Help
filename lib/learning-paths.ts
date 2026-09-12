import type { CourseChapter, LearningPath, PathStep } from "./learning-model";

function steps(course: string, ids: string[]): PathStep[] {
  return ids.map((phaseId) => ({ course, phaseId }));
}

export function chaptersFor(slug: string, phaseIds: string[], configured?: CourseChapter[]): CourseChapter[] {
  if (configured?.length) {
    return configured
      .map((chapter) => ({ ...chapter, phaseIds: chapter.phaseIds.filter((id) => phaseIds.includes(id)) }))
      .filter((chapter) => chapter.phaseIds.length);
  }
  return [{ id: `${slug}-units`, title: "Units", summary: "Units in this course.", phaseIds }];
}

export function sequentialPath(course: string, phaseIds: string[]): PathStep[] {
  return steps(course, phaseIds);
}

export function pathForCourse(_course: string, _activePath?: string): LearningPath | undefined {
  return undefined;
}

export function chapterForPhase(slug: string, phaseId: string, phaseIds: string[], configured?: CourseChapter[]) {
  return chaptersFor(slug, phaseIds, configured).find((chapter) => chapter.phaseIds.includes(phaseId)) ?? null;
}

export function chapterTitleForPhase(slug: string, phaseId: string, phaseIds: string[], configured?: CourseChapter[]) {
  return chapterForPhase(slug, phaseId, phaseIds, configured)?.title ?? null;
}

export const learningPaths: LearningPath[] = [];

export const learningPathById: Record<string, LearningPath> = {};

export const defaultPathByCourse: Record<string, string> = {};
