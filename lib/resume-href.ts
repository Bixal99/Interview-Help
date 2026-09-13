import { hashForTopicId } from "@/lib/content-place";
import type { CourseProgressState } from "@/lib/learning-model";

/** Client continue/resume URLs. Short /chapter/ paths redirect to /unit/... */
export function resumeHrefFor(slug: string, phaseId: string, lessonId?: string, anchor?: string) {
  const hash = anchor?.replace(/^#/, "").trim();
  // Checkpoints are splash screens — never resume there.
  if (!lessonId || lessonId.startsWith("phase:")) {
    const base = `/courses/${slug}/chapter/${phaseId}/content`;
    return hash ? `${base}#${hash}` : base;
  }
  if (lessonId.startsWith("project:")) return `/courses/${slug}/chapter/${phaseId}/project`;
  if (lessonId.startsWith("glossary:")) return `/courses/${slug}/unit/${lessonId.slice("glossary:".length)}/glossary`;
  if (lessonId === "exercise" || /\.2$/.test(lessonId)) return `/courses/${slug}/chapter/${phaseId}/exercise`;
  const base = `/courses/${slug}/chapter/${phaseId}/content`;
  return hash ? `${base}#${hash}` : base;
}

export function resumeAnchorFor(
  slug: string,
  state: Pick<CourseProgressState, "currentAnchor" | "currentTopicId">,
) {
  const stored = state.currentAnchor?.replace(/^#/, "").trim();
  if (stored) return stored;
  if (state.currentTopicId) return hashForTopicId(slug, state.currentTopicId);
  return undefined;
}

export function resumeHrefFromState(slug: string, state: CourseProgressState, fallback?: string) {
  if (!state.currentPhaseId) return fallback ?? `/courses/${slug}`;
  return resumeHrefFor(slug, state.currentPhaseId, state.currentLessonId, resumeAnchorFor(slug, state));
}
