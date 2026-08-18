const CS = "/courses/computer-science";

export function mapLegacyOopPhase(phase: string) {
  const raw = phase.toLowerCase().replace(/^oop-/, "");
  if (raw === "f1") return "3";
  if (raw === "f2") return "4";
  if (raw === "f3") return "5";
  if (/^\d+$/.test(raw)) return String(Number(raw) + 5);
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
  if (fromOop) return `${phase + 5}${rest}`;
  if (phase >= 3 && phase <= 20) return `${phase + 23}${rest}`;
  return id;
}
