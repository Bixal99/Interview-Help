/** Client continue/resume URLs. Short /chapter/ paths redirect to /unit/... */
export function resumeHrefFor(slug: string, phaseId: string, lessonId?: string) {
  if (!lessonId || lessonId.startsWith("phase:")) return `/courses/${slug}/chapter/${phaseId}`;
  if (lessonId.startsWith("project:")) return `/courses/${slug}/chapter/${phaseId}/project`;
  if (lessonId.startsWith("glossary:")) return `/courses/${slug}/unit/${lessonId.slice("glossary:".length)}/glossary`;
  if (lessonId === "exercise" || /\.2$/.test(lessonId)) return `/courses/${slug}/chapter/${phaseId}/exercise`;
  return `/courses/${slug}/chapter/${phaseId}/content`;
}
