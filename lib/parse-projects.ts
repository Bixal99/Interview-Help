import type { PhaseProject } from "./learning-model";
import { roadmapRegistry } from "./course-catalog";

const prefixToSlug = Object.fromEntries(roadmapRegistry.map((course) => [course.projectPrefix, course.slug]));

export function slugForProjectPrefix(prefix: string) {
  if (prefix.toLowerCase() === "oop") return "computer-science";
  return prefixToSlug[prefix.toLowerCase()];
}

export function parseProjectsDocument(markdown: string): PhaseProject[] {
  const matches = [...markdown.matchAll(/<a id="([a-z-]+)-phase-(f?\d+)-project"><\/a>/gi)];
  return matches.map((match, index) => {
    const coursePrefix = match[1].toLowerCase();
    const phaseId = match[2].toLowerCase();
    const start = match.index ?? 0;
    const end = matches[index + 1]?.index ?? markdown.length;
    const body = markdown.slice(start, end).trim();
    const titleMatch = /####\s+PROJECT:\s*(.+)/i.exec(body) ?? /###\s+[A-Z0-9 /&-]+PHASE[^\n]*\n+####\s+PROJECT:\s*(.+)/i.exec(body);
    const fallbackTitle = /###\s+(.+)/.exec(body)?.[1]?.trim();
    const gitIndex = body.search(/^### Git Checkpoint/im);
    return {
      id: `${coursePrefix}-phase-${phaseId}-project`,
      coursePrefix,
      phaseId,
      title: (titleMatch?.[1] ?? fallbackTitle ?? `${coursePrefix} phase ${phaseId} project`).trim(),
      markdown: body,
      gitCheckpoint: gitIndex >= 0 ? body.slice(gitIndex).trim() : undefined,
    };
  });
}

export function attachProjects(courseSlug: string, projectPrefix: string, phases: { id: string; project?: PhaseProject }[], projects: PhaseProject[]) {
  for (const phase of phases) {
    const match = projects.find((project) => project.coursePrefix === projectPrefix && project.phaseId === phase.id);
    if (match) phase.project = match;
  }
  return phases;
}

export function allProjectsByCourse(projects: PhaseProject[]) {
  const grouped = new Map<string, PhaseProject[]>();
  for (const project of projects) {
    const slug = slugForProjectPrefix(project.coursePrefix);
    if (!slug) continue;
    const list = grouped.get(slug) ?? [];
    list.push(project);
    grouped.set(slug, list);
  }
  return grouped;
}
