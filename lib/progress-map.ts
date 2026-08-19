import { plainFormula } from "./format-math";

export type TrailStatus = "cleared" | "here" | "open" | "locked";

export type TrailPhase = {
  id: string;
  hasProject: boolean;
};

export function plainText(markdown: string) {
  return plainFormula(
    markdown
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

export function isPhaseCleared(
  phase: TrailPhase,
  completedProjects: string[],
  completedPhases: string[],
) {
  if (phase.hasProject) return completedProjects.includes(phase.id);
  return completedPhases.includes(phase.id);
}

export function canEnterTrailPhase(index: number, phases: TrailPhase[], completedProjects: string[], completedPhases: string[]) {
  if (index <= 0) return true;
  for (let previous = index - 1; previous >= 0; previous -= 1) {
    const phase = phases[previous];
    if (!phase.hasProject) continue;
    return isPhaseCleared(phase, completedProjects, completedPhases);
  }
  return true;
}

export function trailStatuses(
  phases: TrailPhase[],
  completedProjects: string[],
  completedPhases: string[],
  currentPhaseId?: string,
): TrailStatus[] {
  const cleared = phases.map((phase) => isPhaseCleared(phase, completedProjects, completedPhases));
  const enterable = phases.map((_, index) => canEnterTrailPhase(index, phases, completedProjects, completedPhases));
  const firstOpen = cleared.findIndex((done, index) => !done && enterable[index]);
  const currentIndex = currentPhaseId ? phases.findIndex((phase) => phase.id === currentPhaseId) : -1;
  const hereIndex =
    currentIndex >= 0 && !cleared[currentIndex] ? currentIndex : firstOpen;

  return phases.map((_, index) => {
    if (cleared[index]) return "cleared";
    if (index === hereIndex) return "here";
    if (enterable[index] || (hereIndex >= 0 && index < hereIndex)) return "open";
    return "locked";
  });
}

export function chapterProgress(statuses: TrailStatus[]) {
  const cleared = statuses.filter((status) => status === "cleared").length;
  return { cleared, total: statuses.length, done: statuses.length > 0 && cleared === statuses.length };
}

/** Fill the timeline to the current node (0–100). Matches a stepper: first node = 0%, last = 100%. */
export function phaseProgressPercent(statuses: TrailStatus[]) {
  if (!statuses.length) return 0;
  const cleared = statuses.filter((status) => status === "cleared").length;
  if (cleared === statuses.length) return 100;
  return Math.round((cleared / statuses.length) * 100);
}

export function trailFillPercent(statuses: TrailStatus[]) {
  if (!statuses.length) return 0;
  if (statuses.every((status) => status === "cleared")) return 100;
  const here = statuses.findIndex((status) => status === "here");
  const lastCleared = statuses.lastIndexOf("cleared");
  const index = here >= 0 ? here : Math.max(0, lastCleared);
  if (statuses.length === 1) return 0;
  return Math.round((index / (statuses.length - 1)) * 100);
}

export function groupIntoMilestones<T>(items: T[], count = 4): T[][] {
  if (!items.length) return [];
  const buckets = Math.min(count, items.length);
  const base = Math.floor(items.length / buckets);
  const extra = items.length % buckets;
  const groups: T[][] = [];
  let offset = 0;
  for (let index = 0; index < buckets; index += 1) {
    const size = base + (index < extra ? 1 : 0);
    groups.push(items.slice(offset, offset + size));
    offset += size;
  }
  return groups;
}

export function milestoneTone(statuses: TrailStatus[]): TrailStatus {
  if (!statuses.length) return "locked";
  if (statuses.every((status) => status === "cleared")) return "cleared";
  if (statuses.some((status) => status === "here")) return "here";
  if (statuses.some((status) => status === "open" || status === "cleared")) return "open";
  return "locked";
}
