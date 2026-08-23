import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const projText = fs.readFileSync(path.join(root, "help/ALL_105_CHAPTERS_PROJECTS_AND_TESTS.md"), "utf8");
const solText = fs.readFileSync(path.join(root, "help/ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md"), "utf8");

const projSections = projText.split(/(?=^###\s+Chapter\s+\d+)/gim).filter(s => /^###\s+Chapter\s+\d+/i.test(s.trim()));
const solSections = solText.split(/(?=^###\s+Chapter\s+\d+)/gim).filter(s => /^###\s+Chapter\s+\d+/i.test(s.trim()));

type ChapterWorkspaceInfo = {
  chapter: number;
  chapterTitle: string;
  projectTitle: string;
  format: string;
  why: string;
  problemStatement: string;
  checklist: string[];
  workspaceType: "notepad" | "compiler";
  language: "python" | "javascript" | "html" | "css";
  solutionMarkdown: string;
  starterCode: string;
};

const registry: Record<number, ChapterWorkspaceInfo> = {};

for (let i = 0; i < projSections.length; i++) {
  const pSec = projSections[i];
  const pMatch = /^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)/im.exec(pSec);
  if (!pMatch) continue;
  const num = parseInt(pMatch[1], 10);
  const chapterTitle = pMatch[2].trim();

  const formatMatch = /\*\s*\*\*Format:\*\*\s*([^\n]+)/i.exec(pSec);
  const whyMatch = /\*\s*\*\*Why[^*]*\*\*\s*([^\n]+)/i.exec(pSec);
  const projTitleMatch = /\*\s*\*\*Project\s*\/\s*Test:\*\*\s*([^\n]+)/i.exec(pSec);
  const probMatch = /\*\s*\*\*Problem Statement:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*|\n---|$)/i.exec(pSec);
  const checklistMatch = /\*\s*\*\*Task Checklist:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*|\n---|$)/i.exec(pSec);

  function cleanTitle(str: string): string {
    return str.replace(/\*\*/g, "").replace(/^[\s"'“”„”«»\\]+|[\s"'“”„”«»\\]+$/g, "").trim();
  }

  const format = formatMatch ? formatMatch[1].trim() : "";
  const why = whyMatch ? whyMatch[1].trim() : "";
  const projectTitle = projTitleMatch ? cleanTitle(projTitleMatch[1]) : chapterTitle;
  const problemStatement = probMatch ? probMatch[1].trim() : "";
  const checklist = checklistMatch
    ? checklistMatch[1].split("\n").map(l => l.trim().replace(/^\d+\.\s*/, "").replace(/^[-*]\s*/, "")).filter(Boolean)
    : [];

  const lowerFmt = format.toLowerCase();
  const isCode = /coding|python|sql|html|pygame|canvas|pytest/i.test(lowerFmt) && !/no coding needed/i.test(lowerFmt);
  const workspaceType: "notepad" | "compiler" = isCode ? "compiler" : "notepad";

  // Find solution
  const sSec = solSections.find(s => new RegExp(`^###\\s+Chapter\\s+${num}\\b`, "im").test(s));
  const solBody = sSec
    ? sSec.replace(/^###\s+Chapter\s+\d+\s*[-—:][^\n]*\n+/im, "").replace(/\n---\s*$/g, "").trim()
    : "";

  // Prepare starter code for coding projects
  let starterCode = "";
  if (workspaceType === "compiler") {
    // Extract code blocks from solution
    const codeBlocks = [...solBody.matchAll(/```(?:python|py)?\n([\s\S]*?)```/gi)];
    if (codeBlocks.length > 0) {
      starterCode = codeBlocks.map(m => m[1].trim()).join("\n\n");
    } else {
      // If code is in generic blocks or other syntax
      const allBlocks = [...solBody.matchAll(/```[a-z0-9_-]*\n([\s\S]*?)```/gi)];
      if (allBlocks.length > 0) {
        starterCode = allBlocks.map(m => m[1].trim()).join("\n\n");
      }
    }

    // Add docstring header if not already present
    if (!starterCode.startsWith('"""') && !starterCode.startsWith("'''") && !starterCode.startsWith("#!")) {
      const headerDoc = `"""\nChapter ${num} Project Solution: ${projectTitle}\nFormat: ${format}\n\nProblem:\n${problemStatement || chapterTitle}\n"""\n\n`;
      starterCode = headerDoc + starterCode;
    }
  }

  registry[num] = {
    chapter: num,
    chapterTitle,
    projectTitle,
    format,
    why,
    problemStatement,
    checklist,
    workspaceType,
    language: "python",
    solutionMarkdown: solBody,
    starterCode,
  };
}

console.log("Built workspace info for all", Object.keys(registry).length, "chapters");

const tsContent = `// Auto-generated master CS chapter project and solution registry (105 Chapters)
export type CSProjectInfo = {
  chapter: number;
  chapterTitle: string;
  projectTitle: string;
  format: string;
  why: string;
  problemStatement: string;
  checklist: string[];
  workspaceType: "notepad" | "compiler";
  language: "python" | "javascript" | "html" | "css";
  solutionMarkdown: string;
  starterCode: string;
};

export const CS_PROJECTS_REGISTRY: Record<number, CSProjectInfo> = ${JSON.stringify(registry, null, 2)};

export function getCSProjectInfo(chapterNumber: number): CSProjectInfo | null {
  return CS_PROJECTS_REGISTRY[chapterNumber] ?? null;
}
`;

fs.writeFileSync(path.join(root, "lib/cs-projects-registry.ts"), tsContent, "utf8");
console.log("Wrote lib/cs-projects-registry.ts");
