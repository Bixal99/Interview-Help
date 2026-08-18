import { extractFencedBlocks, extractYouTubeInfo, githubSlug } from "./content-utils";
import type { Lesson, ParsedCourse, Phase, VideoResource } from "./learning-model";

type Marker = {
  index: number;
  id: string;
  number: string;
  title: string;
  kind: "phase" | "fphase";
  anchors: string[];
};

function isPacingParagraph(text: string) {
  return /the sections are connected/i.test(text)
    || /there is no clock on this document/i.test(text)
    || /there is no week clock/i.test(text)
    || /every concept in this roadmap answers the same/i.test(text)
    || /every concept answers the same questions/i.test(text)
    || /that last question is the engine/i.test(text);
}

function parseTermChunk(chunk: string) {
  const match = /(?:^|(?:A |An |a |an |the |The )?)(?:`([^`]+)`|\*\*([^*]+)\*\*)\s+(.*)$/.exec(chunk.trim());
  if (!match) return null;
  const term = (match[1] || match[2]).trim();
  let meaning = match[3].replace(/[.]*$/, "").trim();
  meaning = meaning.replace(/^(is|are|means|describes|stores|holds|lets|checks|creates|spreads|changes|controls|identifies|translates|provides|sends|defines|protects|asks|applies|gathers|returns|uses|makes|runs|coordinates|receives|carries|keeps)\s+/i, "");
  if (!term || !meaning) return null;
  return { term, meaning: meaning.charAt(0).toUpperCase() + meaning.slice(1) };
}

function parseDenseTerms(text: string) {
  let body = text.replace(/^\*\*Words you will meet often:\*\*\s*/i, "").trim();
  body = body.replace(/,\s+while (?:a |an |the )?/gi, "; ");
  body = body.replace(/\s+and (?:a |an |the )?(?=(?:\*\*|`))/g, "; ");
  return body.split(/\s*;\s*/).flatMap((chunk) => {
    const parts = chunk.split(/(?<=\.)\s+/);
    return parts.map(parseTermChunk).filter((item): item is { term: string; meaning: string } => Boolean(item));
  });
}

function parseMarkdownTableTerms(lines: string[], start: number) {
  const terms: { term: string; meaning: string }[] = [];
  let i = start;
  if (!/^\|/.test(lines[i] ?? "")) return { terms, next: start };
  i += 1;
  if (/^\|\s*:?-+/.test(lines[i] ?? "")) i += 1;
  for (; i < lines.length && /^\|/.test(lines[i]); i++) {
    const cells = lines[i].split("|").slice(1, -1).map((cell) => cell.trim());
    if (cells.length < 2) continue;
    const term = cells[0].replace(/\*\*/g, "").trim();
    const meaning = cells[1].trim();
    if (term && meaning && !/^word$/i.test(term) && !/^meaning$/i.test(term) && !/^term$/i.test(term)) {
      terms.push({ term, meaning });
    }
  }
  return { terms, next: i };
}

function extractBeginnerIntro(lines: string[]) {
  const startHere = lines.findIndex((line) => /^### Start here if\b/i.test(line));
  const vocab = lines.findIndex((line) => /^## Beginner Vocabulary\b/i.test(line));
  const whatMeans = lines.findIndex((line) => /^## What .+ Means\b/i.test(line));
  const fallback = vocab >= 0 ? vocab : whatMeans;
  const start = startHere >= 0 ? startHere : fallback;
  if (start < 0) return null;
  const heading = lines[start].replace(/^#{2,3}\s+/, "").trim();
  const paragraphs: string[] = [];
  const closingParagraphs: string[] = [];
  const everydayTerms: { term: string; meaning: string }[] = [];
  const terms: { term: string; meaning: string }[] = [];
  let bucket: "everyday" | "terms" = "everyday";
  let seenTable = false;
  let buffer: string[] = [];
  const addTerms = (items: { term: string; meaning: string }[], target?: "everyday" | "terms") => {
    (target === "everyday" || (!target && bucket === "everyday") ? everydayTerms : terms).push(...items);
  };
  const flush = () => {
    const text = buffer.join(" ").trim();
    buffer = [];
    if (!text || isPacingParagraph(text)) return;
    if (/^\*\*Everyday words\*\*$/i.test(text)) {
      bucket = "everyday";
      return;
    }
    if (/^\*\*Words you will meet often\*\*$/i.test(text)) {
      bucket = "terms";
      return;
    }
    if (/words you will meet often/i.test(text)) {
      addTerms(parseDenseTerms(text), "terms");
      bucket = "terms";
      return;
    }
    if (!seenTable && (text.match(/\*\*[^*]+\*\*/g) ?? []).length >= 3) {
      addTerms(parseDenseTerms(text), everydayTerms.length ? "terms" : "everyday");
      return;
    }
    (seenTable ? closingParagraphs : paragraphs).push(text);
  };
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^#{2,3}\s+/.test(line) || /^---\s*$/.test(line) || /^\s*```/.test(line) || /^>/.test(line)) break;
    if (/^\|/.test(line)) {
      flush();
      const table = parseMarkdownTableTerms(lines, i);
      addTerms(table.terms);
      seenTable = true;
      i = table.next - 1;
      continue;
    }
    if (!line.trim()) {
      flush();
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) continue;
    buffer.push(line.trim());
  }
  flush();
  return { heading, paragraphs: paragraphs.slice(0, 4), closingParagraphs: closingParagraphs.slice(0, 4), everydayTerms, terms };
}

function sliceLines(lines: string[], start: number, end: number) {
  return lines.slice(start, end).join("\n").trim();
}

function collectAnchors(pending: { id: string; index: number }[], headingIndex: number) {
  return pending.filter((item) => headingIndex - item.index <= 6).map((item) => item.id);
}

function extractVideos(markdown: string): VideoResource[] {
  const videos: VideoResource[] = [];
  const seen = new Set<string>();
  for (const match of markdown.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) {
    const info = extractYouTubeInfo(match[2]);
    if (!info || seen.has(match[2])) continue;
    seen.add(match[2]);
    videos.push({ href: match[2], title: match[1], info });
  }
  return videos;
}

function lessonSlug(title: string, id: string) {
  return githubSlug(title) || githubSlug(id);
}

function firstLabeledLine(markdown: string, label: string) {
  const match = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`, "i").exec(markdown);
  return match?.[1]?.trim();
}

function extractGoal(overview: string, body: string) {
  return firstLabeledLine(overview, "WHAT YOU WILL BE ABLE TO DO")
    ?? firstLabeledLine(body, "WHAT YOU WILL BE ABLE TO DO")
    ?? firstLabeledLine(body, "WHY YOU ARE LEARNING THIS");
}

const nestedTopics: Record<string, string[]> = {
  "23.2": ["Parking Lot", "Library", "Elevator"],
  "38.5": ["SQL Injection", "XSS", "CSRF", "CORS"],
  "40.1": ["One Server to a Distributed System"],
  "40.3": ["Worked System Design Walkthrough"],
};

function extractLessonChildren(lessonId: string, markdown: string) {
  const headings: { id: string; title: string }[] = [];
  let inFence = false;
  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const numbered = /^###\s+(\d+\.\d+\.\d+)\s+(.+?)\s*$/.exec(line);
    if (numbered) headings.push({ id: numbered[1], title: numbered[2].trim() });
  }
  if (headings.length) return headings;
  return (nestedTopics[lessonId] ?? []).map((title, position) => ({
    id: `${lessonId}.${position + 1}`,
    title,
  }));
}

function parseLessons(lines: string[], start: number, end: number, kind: Marker["kind"]): Lesson[] {
  const lessons: { index: number; id: string; title: string }[] = [];
  let inFence = false;
  for (let i = start; i < end; i++) {
    const line = lines[i];
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const numbered = /^##\s+(\d+)\.(\d+)\s+(.+?)\s*$/.exec(line);
    const foundational = /^###\s+F(\d+)\.(\d+)\s*[-–—:]?\s*(.+?)\s*$/.exec(line);
    if (kind === "fphase" && foundational) {
      lessons.push({ index: i, id: `f${foundational[1]}.${foundational[2]}`, title: foundational[3].trim() });
      continue;
    }
    if (kind === "phase" && numbered) {
      lessons.push({ index: i, id: `${numbered[1]}.${numbered[2]}`, title: numbered[3].trim() });
    }
  }
  return lessons.map((lesson, position) => {
    const next = lessons[position + 1]?.index ?? end;
    const markdown = sliceLines(lines, lesson.index, next);
    return {
      id: lesson.id,
      slug: lessonSlug(lesson.title, lesson.id),
      title: lesson.title,
      markdown,
      videos: extractVideos(markdown),
      codeExamples: extractFencedBlocks(markdown).filter((block) => block.language !== "mermaid"),
      children: extractLessonChildren(lesson.id, markdown),
    };
  });
}

export function withSourcePath(phases: Phase[], sourcePath: string): Phase[] {
  return phases.map((phase) => ({
    ...phase,
    sourcePath,
    lessons: phase.lessons.map((lesson) => ({ ...lesson, sourcePath })),
  }));
}

export function parseCourseMarkdown(markdown: string, slug = ""): ParsedCourse {
  const lines = markdown.split(/\r?\n/);
  const markers: Marker[] = [];
  const pending: { id: string; index: number }[] = [];
  let inFence = false;
  const titleHeading = /^#\s+(.+?)\s*$/.exec(lines.find((line) => /^#\s+/.test(line) && !/^#\s+(PHASE|PART)\b/i.test(line)) ?? "");
  const title = titleHeading?.[1]?.replace(/^The Zero-to-Hero\s+/i, "").trim() || slug;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const anchor = /^\s*<a\s+id=["']([^"']+)["']\s*><\/a>\s*$/i.exec(line);
    if (anchor) {
      pending.push({ id: anchor[1], index: i });
      continue;
    }
    const heading = /^(#{1,3})\s+(.+?)\s*$/.exec(line);
    if (!heading) continue;
    const depth = heading[1].length;
    const text = heading[2].replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim();
    if (depth === 1 && /^PART\s+0\b/i.test(text)) {
      pending.length = 0;
      continue;
    }
    const phaseMatch = depth === 1 ? /^PHASE\s+(\d+)\b/i.exec(text) : null;
    const fMatch = depth === 2 ? /^F(\d+)\b/.exec(text) : null;
    if (phaseMatch) {
      markers.push({
        index: i,
        id: String(Number(phaseMatch[1])),
        number: String(Number(phaseMatch[1])),
        title: text.replace(/^PHASE\s+\d+\s*[-–—:]?\s*/i, "").trim(),
        kind: "phase",
        anchors: collectAnchors(pending, i),
      });
      pending.length = 0;
      continue;
    }
    if (fMatch) {
      markers.push({
        index: i,
        id: `f${fMatch[1]}`,
        number: `F${fMatch[1]}`,
        title: text.replace(/^F\d+\s*[-–—:]?\s*/i, "").trim(),
        kind: "fphase",
        anchors: collectAnchors(pending, i),
      });
      pending.length = 0;
      continue;
    }
    if (depth <= 2) pending.length = 0;
  }

  const introEnd = markers[0]?.index ?? lines.length;
  const howTo = lines.findIndex((line) => /^## How to Read\b/i.test(line));
  const teaserEnd = howTo > 0 && howTo < introEnd ? howTo : Math.min(introEnd, 28);
  const phases: Phase[] = markers.map((marker, position) => {
    const next = markers[position + 1]?.index ?? lines.length;
    const lessons = parseLessons(lines, marker.index + 1, next, marker.kind);
    const firstLessonLine = lessons.length
      ? (() => {
        for (let i = marker.index + 1; i < next; i++) {
          if (new RegExp(`^#{2,3}\\s+${lessons[0].id.replace(".", "\\.")}\\b`, "i").test(lines[i])) return i;
        }
        return next;
      })()
      : next;
    const overview = sliceLines(lines, marker.index, firstLessonLine);
    const body = sliceLines(lines, marker.index, next);
    return {
      id: marker.id,
      number: marker.number,
      title: marker.title,
      anchorIds: [...new Set(["phase-" + marker.id, ...marker.anchors, githubSlug(`PHASE ${marker.number} - ${marker.title}`)])],
      overview,
      goal: extractGoal(overview, body),
      lessons,
    };
  });

  return {
    slug,
    title,
    introMarkdown: sliceLines(lines, 0, introEnd),
    teaserMarkdown: sliceLines(lines, 0, teaserEnd),
    beginnerIntro: extractBeginnerIntro(lines),
    phases,
  };
}

export function lessonPath(slug: string, phaseId: string, lesson: Pick<Lesson, "slug">) {
  return `/courses/${slug}/phase/${phaseId}/${lesson.slug}`;
}

export function phasePath(slug: string, phaseId: string) {
  return `/courses/${slug}/phase/${phaseId}`;
}

export function projectPathFor(slug: string, phaseId: string) {
  return `/projects/${slug}/phase/${phaseId}`;
}

export function findPhase(course: ParsedCourse, phaseId: string) {
  return course.phases.find((phase) => phase.id === phaseId);
}

export function findLesson(course: ParsedCourse, phaseId: string, lessonSlugValue: string) {
  const phase = findPhase(course, phaseId);
  return phase?.lessons.find((lesson) => lesson.slug === lessonSlugValue || lesson.id === lessonSlugValue);
}

export function headingRouteMap(course: ParsedCourse) {
  const map = new Map<string, string>();
  map.set(githubSlug(course.title), `/courses/${course.slug}`);
  for (const phase of course.phases) {
    const home = phasePath(course.slug, phase.id);
    for (const id of phase.anchorIds) map.set(id.toLowerCase(), home);
    map.set(`phase-${phase.id}`.toLowerCase(), home);
    map.set(githubSlug(`PHASE ${phase.number} - ${phase.title}`).toLowerCase(), home);
    for (const lesson of phase.lessons) {
      const href = lessonPath(course.slug, phase.id, lesson);
      map.set(lesson.slug.toLowerCase(), href);
      map.set(githubSlug(`${lesson.id} ${lesson.title}`).toLowerCase(), href);
      map.set(lesson.id.toLowerCase(), href);
    }
    if (phase.project) map.set(phase.project.id.toLowerCase(), projectPathFor(course.slug, phase.id));
  }
  return map;
}
