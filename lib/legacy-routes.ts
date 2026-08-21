const CS = "/courses/computer-science";

// Maps a CS phase number from the earlier 1-43 outline to its current phase
// number in the 15-story/105-phase structure. Phases that split across the
// new structure resolve to the first (lowest) new phase they produced.
const OLD_CS_TO_NEW: Record<number, number> = {
  1: 5, 2: 31, 3: 6, 4: 8, 5: 9, 6: 21, 7: 22, 8: 22, 9: 23, 10: 23,
  11: 24, 12: 24, 13: 25, 14: 30, 15: 29, 16: 27, 17: 26, 18: 28, 19: 28,
  20: 28, 21: 30, 22: 29, 23: 29, 24: 30, 25: 102, 26: 32, 27: 35, 28: 37,
  29: 36, 30: 39, 31: 41, 32: 43, 33: 48, 34: 52, 35: 55, 36: 58, 37: 60,
  38: 66, 39: 72, 40: 81, 41: 85, 42: 95, 43: 99,
};

function toCurrentPhase(oldCsPhase: number): number {
  return OLD_CS_TO_NEW[oldCsPhase] ?? oldCsPhase;
}

export function mapLegacyOopPhase(phase: string) {
  const raw = phase.toLowerCase().replace(/^oop-/, "");
  if (raw === "f1") return String(toCurrentPhase(3));
  if (raw === "f2") return String(toCurrentPhase(4));
  if (raw === "f3") return String(toCurrentPhase(5));
  if (/^\d+$/.test(raw)) return String(toCurrentPhase(Number(raw) + 5));
  return phase;
}

export function mapLegacyOopFragment(hash: string) {
  const id = hash.replace(/^#/, "").toLowerCase();
  const project = /^oop-phase-(f?\d+)-project$/.exec(id);
  if (project) return `/projects/computer-science/phase/${mapLegacyOopPhase(project[1])}`;
  const fphase = /^phase-f(\d+)/.exec(id);
  if (fphase) return `${CS}/phase/${mapLegacyOopPhase(`f${fphase[1]}`)}`;
  const phase = /^phase-(\d+)/.exec(id);
  if (phase) return `${CS}/phase/${mapLegacyOopPhase(phase[1])}`;
  return `${CS}${id ? `#${id}` : ""}`;
}

export function rewriteLegacyPath(pathname: string) {
  const course = pathname.match(/^\/courses\/object-oriented-programming(?:\/(.*))?$/);
  if (course) {
    const rest = course[1] ?? "";
    if (!rest) return CS;
    if (rest === "learn") return null;
    const mapped = rest.replace(/^phase\/([^/]+)(\/.*)?$/, (_all, phase: string, tail: string | undefined) => {
      return `phase/${mapLegacyOopPhase(phase)}${tail ?? ""}`;
    });
    return `${CS}/${mapped}`;
  }
  const project = pathname.match(/^\/projects\/object-oriented-programming\/phase\/([^/]+)$/);
  if (project) return `/projects/computer-science/phase/${mapLegacyOopPhase(project[1])}`;
  return null;
}

export function legacyOopLearnMap() {
  const map: Record<string, string> = {};
  for (const id of ["f1", "f2", "f3", ...Array.from({ length: 20 }, (_, index) => String(index + 1))]) {
    map[`phase-${id}`] = `${CS}/phase/${mapLegacyOopPhase(id)}`;
  }
  return map;
}

// Remaps a saved CS progress id from any earlier numbering scheme to the
// current phase numbering, so learners with old localStorage progress keep
// pointing at the right content. `fromOop` means the id came from the
// standalone object-oriented-programming course's own progress storage
// (before it was merged into CS.md).
export function remapProgressId(id: string, fromOop = false) {
  if (!id) return id;
  if (id.startsWith("oop-")) return remapProgressId(id.slice(4), true);
  const foundational = /^f(\d+)(\.\d+)?$/.exec(id);
  if (foundational) {
    const phase = mapLegacyOopPhase(`f${foundational[1]}`);
    return `${phase}${foundational[2] ?? ""}`;
  }
  const numeric = /^(\d+)(\.\d+)?$/.exec(id);
  if (!numeric) return id;
  const phase = Number(numeric[1]);
  const rest = numeric[2] ?? "";
  if (fromOop) return `${toCurrentPhase(phase + 5)}${rest}`;
  if (phase >= 3 && phase <= 20) return `${toCurrentPhase(phase + 23)}${rest}`;
  return `${toCurrentPhase(phase)}${rest}`;
}
