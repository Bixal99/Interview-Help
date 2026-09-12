import { plainFormula } from "./format-math";
import { windingSegmentLessonArcOffset } from "./winding-layout";

export type TrailStatus = "cleared" | "here" | "open" | "locked";

export type TrailPhase = {
  id: string;
  hasProject: boolean;
  lessonIds: string[];
};

export function phaseIdKey(id: string) {
  return id.trim().toLowerCase().replace(/^phase-/, "").replace(/^0+(?=\d)/, "") || "0";
}

export function plainText(markdown: string) {
  return plainFormula(
    markdown
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

export function isLessonComplete(lessonId: string, completedLessons: string[]) {
  return completedLessons.includes(lessonId);
}

export function isPhaseCleared(
  phase: Pick<TrailPhase, "id" | "lessonIds" | "hasProject">,
  completedLessons: string[],
  completedProjects: string[] = [],
) {
  if (!phase.lessonIds.length) return false;
  const lessonsDone = phase.lessonIds.every((id) => isLessonComplete(id, completedLessons));
  const projectDone = !phase.hasProject || completedProjects.some((id) => phaseIdKey(id) === phaseIdKey(phase.id));
  return lessonsDone && projectDone;
}

export function canEnterTrailPhase(index: number, phases: TrailPhase[], completedLessons: string[], completedProjects: string[] = []) {
  if (index <= 0) return true;
  return isPhaseCleared(phases[index - 1], completedLessons, completedProjects);
}

/**
 * Furthest lesson index reached in order from the start.
 * Skips ahead do not count — visiting chapter 61 once must not pull the trail past chapter 2.
 */
export function contiguousLessonFrontier(
  phases: Pick<TrailPhase, "lessonIds">[],
  completedLessons: string[],
  currentLessonId?: string,
) {
  const flat = phases.flatMap((phase) => phase.lessonIds);
  let frontier = -1;
  for (let index = 0; index < flat.length; index += 1) {
    const id = flat[index];
    if (isLessonComplete(id, completedLessons) || id === currentLessonId) {
      frontier = index;
      continue;
    }
    break;
  }
  return frontier;
}

/** Flat index of the lesson the learner is on right now, or -1. */
export function currentLessonFlatIndex(
  phases: Pick<TrailPhase, "id" | "lessonIds">[],
  currentPhaseId?: string,
  currentLessonId?: string,
  completedLessons: string[] = [],
) {
  if (!currentPhaseId || !phases.length) return -1;
  let offset = 0;
  for (const phase of phases) {
    if (phaseIdKey(phase.id) !== phaseIdKey(currentPhaseId)) {
      offset += phase.lessonIds.length;
      continue;
    }
    if (!phase.lessonIds.length) return offset > 0 ? offset - 1 : -1;
    if (currentLessonId) {
      const local = phase.lessonIds.findIndex(
        (id) => id === currentLessonId || id.toLowerCase() === currentLessonId.toLowerCase(),
      );
      if (local >= 0) return offset + local;
      if (currentLessonId.startsWith("project:") || currentLessonId.startsWith("glossary:")) {
        return offset + Math.max(phase.lessonIds.length - 1, 0);
      }
      return offset;
    }
    // No lesson id yet — sit on the furthest contiguous completed lesson in this chapter.
    let local = -1;
    for (let index = 0; index < phase.lessonIds.length; index += 1) {
      if (isLessonComplete(phase.lessonIds[index]!, completedLessons)) local = index;
      else break;
    }
    return local >= 0 ? offset + local : offset;
  }
  return -1;
}

/**
 * Map trail stop: contiguous progress from the start, never past the lesson you are on.
 * Stops “I opened chapter 61 once” from painting ants through chapter 61 while you are in chapter 2.
 */
export function mapLessonFrontier(
  phases: Pick<TrailPhase, "id" | "lessonIds">[],
  completedLessons: string[],
  currentPhaseId?: string,
  currentLessonId?: string,
) {
  const contiguous = contiguousLessonFrontier(phases, completedLessons, currentLessonId);
  const current = currentLessonFlatIndex(phases, currentPhaseId, currentLessonId, completedLessons);
  if (current < 0) return contiguous;
  if (contiguous < 0) return current;
  return Math.min(contiguous, current);
}

/** Lesson ids at or before the map frontier (for winding-dot paint). */
export function frontierLessonIdSet(
  phases: Pick<TrailPhase, "id" | "lessonIds">[],
  completedLessons: string[],
  currentPhaseId?: string,
  currentLessonId?: string,
) {
  const flat = phases.flatMap((phase) => phase.lessonIds);
  const frontier = mapLessonFrontier(phases, completedLessons, currentPhaseId, currentLessonId);
  if (frontier < 0) return new Set<string>();
  return new Set(flat.slice(0, frontier + 1));
}

export function trailStatuses(
  phases: TrailPhase[],
  completedLessons: string[],
  currentPhaseId?: string,
  currentLessonId?: string,
  completedProjects: string[] = [],
): TrailStatus[] {
  if (!phases.length) return [];
  const cleared = phases.map((phase) => isPhaseCleared(phase, completedLessons, completedProjects));
  const frontier = mapLessonFrontier(phases, completedLessons, currentPhaseId, currentLessonId);
  const flatCount = phases.reduce((sum, phase) => sum + phase.lessonIds.length, 0);
  const courseFullyDone =
    flatCount > 0 && frontier >= flatCount - 1 && cleared.every(Boolean) && !currentPhaseId;
  if (courseFullyDone) return phases.map(() => "cleared" as const);

  let hereIndex = 0;
  if (frontier >= 0) {
    let left = frontier;
    for (let index = 0; index < phases.length; index += 1) {
      const ids = phases[index].lessonIds;
      if (!ids.length) continue;
      if (left < ids.length) {
        const onThisLesson =
          currentLessonId != null &&
          ids.some((id) => id === currentLessonId || id.toLowerCase() === currentLessonId.toLowerCase());
        // Advance only when both the chapter lessons and its required project
        // are complete; finished lessons alone leave the learner at the project.
        hereIndex = cleared[index] && !onThisLesson ? Math.min(index + 1, phases.length - 1) : index;
        break;
      }
      left -= ids.length;
      if (index === phases.length - 1) hereIndex = index;
    }
  } else if (currentPhaseId) {
    const currentIndex = phases.findIndex((phase) => phaseIdKey(phase.id) === phaseIdKey(currentPhaseId));
    if (currentIndex >= 0) hereIndex = currentIndex;
  }

  return phases.map((_, index) => {
    if (index === hereIndex) return "here";
    // Only mark cleared up to the chapter before "here" — later completed-from-browsing chapters stay locked on the map.
    if (cleared[index] && index < hereIndex) return "cleared";
    if (index === hereIndex + 1 && canEnterTrailPhase(index, phases, completedLessons, completedProjects)) return "open";
    return "locked";
  });
}

export function chapterProgress(statuses: TrailStatus[]) {
  const cleared = statuses.filter((status) => status === "cleared").length;
  return { cleared, total: statuses.length, done: statuses.length > 0 && cleared === statuses.length };
}

export function lessonProgressPercent(completedLessons: string[], lessonIds: string[]) {
  if (!lessonIds.length) return 0;
  const done = lessonIds.filter((id) => isLessonComplete(id, completedLessons)).length;
  return Math.round((done / lessonIds.length) * 100);
}

/** Contiguous progress percent for the course bar (matches the map). */
export function contiguousLessonProgressPercent(
  phases: Pick<TrailPhase, "id" | "lessonIds">[],
  completedLessons: string[],
  currentPhaseId?: string,
  currentLessonId?: string,
) {
  const flat = phases.flatMap((phase) => phase.lessonIds);
  if (!flat.length) return 0;
  const frontier = mapLessonFrontier(phases, completedLessons, currentPhaseId, currentLessonId);
  if (frontier < 0) return 0;
  return Math.round(((frontier + 1) / flat.length) * 100);
}

/** @deprecated use lessonProgressPercent */
export function phaseProgressPercent(statuses: TrailStatus[]) {
  if (!statuses.length) return 0;
  const cleared = statuses.filter((status) => status === "cleared").length;
  if (cleared === statuses.length) return 100;
  return Math.round((cleared / statuses.length) * 100);
}

/**
 * Path length along the winding trail to the map frontier lesson.
 * Positions match windingSegmentLessonPoints so ants stop on the current lesson dot,
 * not at the next chapter node.
 */
export function lessonTrailFillLength(
  phases: Pick<TrailPhase, "id" | "lessonIds">[],
  completedLessons: string[],
  nodeLengths: number[],
  totalLength: number,
  currentPhaseId?: string,
  currentLessonId?: string,
) {
  if (!totalLength || !phases.length) return 0;
  const frontier = mapLessonFrontier(phases, completedLessons, currentPhaseId, currentLessonId);
  if (frontier < 0) return 0;

  let offset = frontier;
  for (let phaseIndex = 0; phaseIndex < phases.length; phaseIndex += 1) {
    const lessonIds = phases[phaseIndex].lessonIds;
    if (!lessonIds.length) continue;
    if (offset >= lessonIds.length) {
      offset -= lessonIds.length;
      continue;
    }

    const startLen = nodeLengths[phaseIndex] ?? 0;
    const endLen = phaseIndex + 1 < nodeLengths.length ? nodeLengths[phaseIndex + 1]! : totalLength;
    const finishedPhase =
      offset === lessonIds.length - 1 && lessonIds.every((id) => isLessonComplete(id, completedLessons));
    if (finishedPhase) return endLen;

    const segLen = Math.max(0, endLen - startLen);
    return startLen + windingSegmentLessonArcOffset(lessonIds.length, offset, segLen);
  }

  return totalLength;
}

/** Contiguous lesson fill as a 0–100 percent (tests / fallbacks). */
export function lessonTrailFillPercent(
  phases: Pick<TrailPhase, "id" | "lessonIds">[],
  completedLessons: string[],
  currentPhaseId?: string,
  currentLessonId?: string,
) {
  const flat = phases.flatMap((phase) => phase.lessonIds);
  if (!flat.length) return 0;
  const frontier = mapLessonFrontier(phases, completedLessons, currentPhaseId, currentLessonId);
  if (frontier < 0) return 0;
  if (frontier >= flat.length - 1 && flat.every((id) => isLessonComplete(id, completedLessons))) return 100;
  if (flat.length === 1) return frontier >= 0 ? 100 : 0;
  return Math.round((frontier / (flat.length - 1)) * 100);
}

/** Fill percent tracks the last cleared node only — browsing ahead does not advance it. */
export function trailFillPercent(statuses: TrailStatus[]) {
  if (!statuses.length) return 0;
  if (statuses.every((status) => status === "cleared")) return 100;
  const lastCleared = statuses.lastIndexOf("cleared");
  if (lastCleared < 0) return 0;
  if (statuses.length === 1) return 0;
  return Math.round((lastCleared / (statuses.length - 1)) * 100);
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

export type LessonDotStatus = "cleared" | "here" | "locked";

export function lessonDotStatus(
  lessonId: string,
  lessonIds: string[],
  completedLessons: string[],
  currentLessonId?: string,
  currentPhaseId?: string,
  phaseId?: string,
  lessonSlug?: string,
  frontierIds?: Set<string>,
) {
  const withinFrontier = !frontierIds || frontierIds.has(lessonId);
  if (withinFrontier && isLessonComplete(lessonId, completedLessons)) return "cleared";
  const firstOpen = lessonIds.find((id) => !(withinFrontier && isLessonComplete(id, completedLessons)));
  const matchesCurrent =
    currentLessonId === lessonId || (lessonSlug != null && currentLessonId === lessonSlug);
  const isCurrent =
    matchesCurrent ||
    (Boolean(currentPhaseId) &&
      Boolean(phaseId) &&
      phaseIdKey(currentPhaseId!) === phaseIdKey(phaseId!) &&
      firstOpen === lessonId);
  return isCurrent ? "here" : "locked";
}
