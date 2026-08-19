export type ProjectBrief = {
  title: string;
  topic: string | null;
  intro: string;
  spec: string[];
  tech: string[];
  steps: string[];
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

export function parseProjectBrief(markdown: string): ProjectBrief {
  const title = stripMd(/####\s+PROJECT:\s*(.+)/i.exec(markdown)?.[1] ?? "");
  const specBlock = sectionAfter(
    markdown,
    /####\s+SPECIFICATION\b/i,
    /\n####\s+|\n###\s+Git Checkpoint/i,
  );
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
  const gitIndex = markdown.search(/^### Git Checkpoint/im);
  const gitBody = gitIndex >= 0
    ? markdown.slice(gitIndex).replace(/^### Git Checkpoint\s*/i, "").replace(/^>\s*\*\*PROJECT NAVIGATION:\*\*.+$/gim, "").trim()
    : null;

  const topic = /focused exercise for \*\*(.+?)\*\*/i.exec(specBlock)?.[1]?.trim() ?? null;
  const paragraphs = specBlock.split(/\n\s*\n/).map((item) => stripMd(item.replace(/^\s*[-*].+$/gm, "").replace(/\n+/g, " "))).filter(Boolean);
  const intro = paragraphs[0] ?? (title ? `Build ${title} as a small, finishable program.` : "Build this as a small, finishable program.");

  return {
    title,
    topic,
    intro,
    spec: bullets(specBlock),
    tech: bullets(techBlock),
    steps: bullets(stepsBlock),
    gitBody,
  };
}
