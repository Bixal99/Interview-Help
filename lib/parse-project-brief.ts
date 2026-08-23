export const PROJECT_ARTIFACT_KINDS = ["code", "lab", "design", "analysis", "runbook", "rehearsal"] as const;
export type ProjectArtifactKind = (typeof PROJECT_ARTIFACT_KINDS)[number];

export type ProjectLessonCoverage = {
  lessonId: string;
  lessonTitle: string;
  application: string;
};

export type ProjectBrief = {
  title: string;
  kind: ProjectArtifactKind;
  chapterOutcome: string;
  lessonCoverage: ProjectLessonCoverage[];
  topic: string | null;
  intro: string;
  spec: string[];
  deliverables: string[];
  tech: string[];
  steps: string[];
  validation: string[];
  completionCriteria: string[];
  gitBody: string | null;
};

function stripMd(value: string) {
  return value.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/`([^`]+)`/g, "$1").trim();
}

function sectionAfter(markdown: string, heading: RegExp, until: RegExp) {
  const match = heading.exec(markdown);
  if (!match || match.index === undefined) return "";
  const start = match.index + match[0].length;
  const rest = markdown.slice(start);
  const end = rest.search(until);
  return (end < 0 ? rest : rest.slice(0, end)).trim();
}

function bullets(block: string) {
  return [...block.matchAll(/^\s*(?:[-*]|\d+\.)\s+(.+)$/gm)].map((item) => stripMd(item[1]));
}

function projectKind(markdown: string): ProjectArtifactKind {
  const block = sectionAfter(markdown, /####\s+ARTIFACT TYPE\b/i, /\n####\s+/i);
  const value = block.split(/\s+/)[0]?.toLowerCase();
  return PROJECT_ARTIFACT_KINDS.includes(value as ProjectArtifactKind) ? value as ProjectArtifactKind : "code";
}

function lessonCoverage(markdown: string): ProjectLessonCoverage[] {
  const block = sectionAfter(markdown, /####\s+LESSONS PRACTICED\b/i, /\n####\s+/i);
  return [...block.matchAll(/^\s*[-*]\s+\*\*([^*]+?)\s+[\u2013\u2014-]\s+(.+?):\*\*\s*(.+)$/gm)].map((match) => ({
    lessonId: match[1].trim(),
    lessonTitle: stripMd(match[2]),
    application: stripMd(match[3]),
  }));
}

export function parseProjectBrief(markdown: string): ProjectBrief {
  const title = stripMd(/####\s+PROJECT:\s*(.+)/i.exec(markdown)?.[1] ?? "");
  const specBlock = sectionAfter(
    markdown,
    /####\s+SPECIFICATION\b/i,
    /\n####\s+|\n###\s+Git Checkpoint/i,
  );
  const deliverablesBlock = sectionAfter(markdown, /####\s+DELIVERABLES\b/i, /\n####\s+/i);
  const techBlock = sectionAfter(
    markdown,
    /####\s+TECH STACK\b/i,
    /\n####\s+|\n###\s+Git Checkpoint/i,
  );
  const stepsBlock = sectionAfter(
    markdown,
    /####\s+BUILD IT STEP BY STEP\b/i,
    /\n###\s+Git Checkpoint|\n####\s+/i,
  );
  const validationBlock = sectionAfter(markdown, /####\s+VALIDATION\b/i, /\n####\s+/i);
  const completionBlock = sectionAfter(markdown, /####\s+COMPLETION CRITERIA\b/i, /\n####\s+|\n###\s+Git Checkpoint/i);
  const gitIndex = markdown.search(/^### Git Checkpoint/im);
  const gitBody = gitIndex >= 0
    ? markdown.slice(gitIndex).replace(/^### Git Checkpoint\s*/i, "").replace(/^>\s*\*\*PROJECT NAVIGATION:\*\*.+$/gim, "").trim()
    : null;

  const chapterOutcome = stripMd(sectionAfter(markdown, /####\s+CHAPTER OUTCOME\b/i, /\n\*\*Unit storyline:|\n####\s+/i).split(/\n\s*\n/)[0] ?? "");
  const topic = /\*\*Chapter topic:\*\*\s*([^\n]+)/i.exec(markdown)?.[1]?.trim()
    ?? /focused exercise for \*\*(.+?)\*\*/i.exec(specBlock)?.[1]?.trim()
    ?? (chapterOutcome || null);
  const paragraphs = specBlock.split(/\n\s*\n/).map((item) => stripMd(item.replace(/^\s*[-*].+$/gm, "").replace(/\n+/g, " "))).filter(Boolean);
  const intro = paragraphs[0] ?? (title ? `Build ${title} as a small, finishable program.` : "Build this as a small, finishable program.");

  return {
    title,
    kind: projectKind(markdown),
    chapterOutcome,
    lessonCoverage: lessonCoverage(markdown),
    topic,
    intro: chapterOutcome || intro,
    spec: bullets(specBlock),
    deliverables: bullets(deliverablesBlock),
    tech: bullets(techBlock),
    steps: bullets(stepsBlock),
    validation: bullets(validationBlock),
    completionCriteria: bullets(completionBlock),
    gitBody,
  };
}
