import type { BeginnerTerm, CourseChapter, Lesson, ParsedCourse } from "./learning-model";
import { shortenForSidebar } from "./sidebar-shorten";

export type UnitGlossarySection = {
  heading: string;
  items: BeginnerTerm[];
};

function tidyMeaning(value: string) {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function isMetaLesson(title: string) {
  return /^(practice|lab|mini project|phase project|design |architecture |written |trace |diagram |sql practice|exploration|story )/i.test(
    title.trim(),
  );
}

/** Parse authored `**Key words**` Word/Meaning tables from a lesson body. */
export function extractLessonGlossaryTerms(markdown: string): BeginnerTerm[] {
  const items: BeginnerTerm[] = [];
  const seen = new Set<string>();
  const lines = markdown.split(/\r?\n/);
  let inFence = false;
  let collecting = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]!;
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      collecting = false;
      continue;
    }
    if (inFence) continue;

    const trimmed = line.trim();
    if (/^\*\*Key words\*\*$/i.test(trimmed)) {
      collecting = true;
      continue;
    }

    if (!collecting) continue;

    if (!trimmed) continue;
    if (/^#{1,3}\s+/.test(trimmed) || /^\*\*[^*]+\*\*$/.test(trimmed)) {
      collecting = false;
      continue;
    }
    if (!/^\|/.test(trimmed)) {
      collecting = false;
      continue;
    }
    if (/^\|\s*:?-+/.test(trimmed) || /\bword\b/i.test(trimmed) && /\bmeaning\b/i.test(trimmed)) {
      continue;
    }

    const cells = trimmed.split("|").slice(1, -1).map((cell) => cell.trim());
    if (cells.length < 2) continue;
    const term = cells[0]!.replace(/\*\*/g, "").trim();
    const meaning = tidyMeaning(cells[1]!);
    if (!term || !meaning) continue;
    const key = term.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    items.push({ term, meaning });
  }

  return items;
}

function lessonHeading(lesson: Lesson) {
  const short = shortenForSidebar(lesson.title);
  return `${lesson.id} ${short}`;
}

/** Build glossary sections for one curriculum unit, labeled lesson by lesson. */
export function buildUnitGlossary(
  course: ParsedCourse,
  chapter: CourseChapter,
): UnitGlossarySection[] {
  const phaseMap = Object.fromEntries(course.phases.map((phase) => [phase.id, phase]));
  const sections: UnitGlossarySection[] = [];
  const globalSeen = new Set<string>();

  for (const phaseId of chapter.phaseIds) {
    const phase = phaseMap[phaseId];
    if (!phase) continue;
    for (const lesson of phase.lessons) {
      if (lesson.kind !== "lesson") continue;
      if (isMetaLesson(lesson.title)) continue;

      const items: BeginnerTerm[] = [];
      for (const item of extractLessonGlossaryTerms(lesson.markdown)) {
        const key = item.term.toLowerCase();
        if (globalSeen.has(key)) continue;
        globalSeen.add(key);
        items.push(item);
      }

      if (items.length) {
        sections.push({ heading: lessonHeading(lesson), items });
      }
    }
  }

  return sections;
}

export function stripLessonGlossaryTerms(markdown: string): string {
  const source = markdown.replace(/\r\n/g, "\n");
  return source
    .replace(/(?:^|\n)\*\*Key words\*\*\s*\n+(?:[ \t]*\|.+\n*)+/gi, "\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function glossaryPath(courseSlug: string, unitId: string) {
  return `/courses/${courseSlug}/unit/${unitId}/glossary`;
}

