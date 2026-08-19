import { githubSlug } from "./content-utils";

export type InterviewQuestion = {
  id: string;
  code: string;
  trackId: string;
  title: string;
  level: string;
  source: string;
  prompt: string;
  answer: string;
  structure: string;
  followUps: string;
  trap: string;
};

export type InterviewTrack = {
  id: string;
  title: string;
  source: string;
  questions: InterviewQuestion[];
};

export type InterviewPlaybook = {
  title: string;
  blurb: string;
  tracks: InterviewTrack[];
};

function tidy(value: string) {
  return value
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function firstParagraph(markdown: string) {
  const match = markdown.match(/^#[^\n]+\n+([^\n#][\s\S]*?)(?:\n\n|\n#)/);
  const raw = match?.[1] ?? "";
  return tidy(raw.replace(/^\*|\*$/g, "").replace(/\*$/g, ""));
}

function labeled(body: string, names: string[]) {
  const pattern = new RegExp(
    `\\*\\*(?:${names.join("|")}):?\\*\\*\\s*([\\s\\S]*?)(?=\\n\\s*\\*\\*[A-Z]|\\n---|\\n## |\\n# |$)`,
    "i",
  );
  return tidy(pattern.exec(body)?.[1] ?? "");
}

function normalizeLevel(raw: string) {
  const value = raw.toLowerCase();
  if (value.includes("foundation")) return "Foundation";
  if (value.includes("screen")) return "Screen";
  if (value.includes("senior") || value.includes("advanced")) return "Senior";
  if (value.includes("core")) return "Core";
  return raw || "Core";
}

function parseQuestion(heading: string, body: string): InterviewQuestion | null {
  const match = /^([A-Z])(\d+)\.\s+(.+)$/.exec(heading.trim());
  if (!match) return null;
  const code = `${match[1]}${match[2]}`;
  const title = tidy(match[3]);
  const level = tidy(/\*\*Level:\*\*\s*([^·\n*]+)/i.exec(body)?.[1] ?? "");
  const source = tidy(/\*\*Source:\*\*\s*([^\n]+)/i.exec(body)?.[1] ?? "");
  let followUps = labeled(body, ["QUESTIONS THEY MAY ASK NEXT"]);
  let trap = labeled(body, ["COMMON MISTAKE"]);
  const combined = /^(.*?)\s+COMMON MISTAKE:\s*(.+)$/i.exec(followUps);
  if (combined) {
    followUps = tidy(combined[1].replace(/[·•]\s*$/, ""));
    trap = trap || tidy(combined[2]);
  }
  return {
    id: githubSlug(heading),
    code,
    trackId: match[1],
    title,
    level: normalizeLevel(level) || "Core",
    source,
    prompt: labeled(body, ["THE INTERVIEWER'S QUESTION"]) || title,
    answer: labeled(body, ["A CLEAR ANSWER YOU CAN SAY OUT LOUD"]),
    structure: labeled(body, ["A SIMPLE ANSWER STRUCTURE"]),
    followUps,
    trap,
  };
}

export function parseInterviewPlaybook(markdown: string): InterviewPlaybook {
  const title = tidy(/^#\s+(.+)$/m.exec(markdown)?.[1] ?? "Interview Playbook");
  const blurb = firstParagraph(markdown);
  const trackStarts = [...markdown.matchAll(/^# Track ([A-Z]) - (.+)$/gm)];
  const tracks = trackStarts.map((match, index) => {
    const start = match.index ?? 0;
    const end = trackStarts[index + 1]?.index ?? markdown.length;
    const block = markdown.slice(start, end);
    const source = tidy(/\*\*Source roadmap:\*\*\s*([^\n]+)/i.exec(block)?.[1] ?? "");
    const questionStarts = [...block.matchAll(/^## (([A-Z])\d+\.\s+.+)$/gm)];
    const questions = questionStarts.flatMap((item, questionIndex) => {
      const from = item.index ?? 0;
      const to = questionStarts[questionIndex + 1]?.index ?? block.length;
      const parsed = parseQuestion(item[1], block.slice(from, to));
      return parsed ? [parsed] : [];
    });
    return {
      id: match[1],
      title: tidy(match[2]),
      source,
      questions,
    };
  });
  return { title, blurb, tracks };
}
