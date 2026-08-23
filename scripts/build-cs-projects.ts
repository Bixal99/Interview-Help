import fs from "node:fs";
import path from "node:path";
import { parseCourseMarkdown } from "../lib/parse-course";

const root = process.cwd();
const csMarkdown = fs.readFileSync(path.join(root, "content/roadmaps/CS.md"), "utf8");
const projText = fs.readFileSync(path.join(root, "help/ALL_105_CHAPTERS_PROJECTS_AND_TESTS.md"), "utf8");
const solText = fs.readFileSync(path.join(root, "help/ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md"), "utf8");

const course = parseCourseMarkdown(csMarkdown, "computer-science");
console.log("Found phases in CS.md:", course.phases.length);

const projSections = projText.split(/(?=^###\s+Chapter\s+\d+)/gim).filter(s => /^###\s+Chapter\s+\d+/i.test(s.trim()));
const solSections = solText.split(/(?=^###\s+Chapter\s+\d+)/gim).filter(s => /^###\s+Chapter\s+\d+/i.test(s.trim()));

type ProjectData = {
  num: number;
  chapterTitle: string;
  format: string;
  why: string;
  projectTitle: string;
  problemStatement: string;
  checklist: string;
  kind: "code" | "lab" | "design" | "analysis" | "runbook" | "rehearsal";
  workspaceTarget: "compiler" | "notepad";
};

const projectsMap: Record<number, ProjectData> = {};
for (const sec of projSections) {
  const headerMatch = /^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)/im.exec(sec);
  if (!headerMatch) continue;
  const num = parseInt(headerMatch[1], 10);
  const heading = headerMatch[2].trim();
  
  const formatMatch = /\*\s*\*\*Format:\*\*\s*([^\n]+)/i.exec(sec);
  const whyMatch = /\*\s*\*\*Why[^*]*\*\*\s*([^\n]+)/i.exec(sec);
  const projTitleMatch = /\*\s*\*\*Project\s*\/\s*Test:\*\*\s*([^\n]+)/i.exec(sec);
  const probMatch = /\*\s*\*\*Problem Statement:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*|\n---|$)/i.exec(sec);
  const checklistMatch = /\*\s*\*\*Task Checklist:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*|\n---|$)/i.exec(sec);
  
  function cleanTitle(str: string): string {
    return str.replace(/\*\*/g, "").replace(/^[\s"'“”„”«»\\]+|[\s"'“”„”«»\\]+$/g, "").trim();
  }

  const format = formatMatch ? formatMatch[1].trim() : "";
  const why = whyMatch ? whyMatch[1].trim() : "";
  const projectTitle = projTitleMatch ? cleanTitle(projTitleMatch[1]) : heading;
  const problemStatement = probMatch ? probMatch[1].trim() : "";
  const checklist = checklistMatch ? checklistMatch[1].trim() : "";
  
  let kind: "code" | "lab" | "design" | "analysis" | "runbook" | "rehearsal" = "code";
  const lowerFmt = format.toLowerCase();
  if (/rehearsal|timed|interview drill|sprint|verbal/i.test(lowerFmt)) {
    kind = "rehearsal";
  } else if (/runbook|ops|docker|deploy|recovery/i.test(lowerFmt)) {
    kind = "runbook";
  } else if (/lab|debugging|profiling|testing|wireshark|trace|inspection/i.test(lowerFmt)) {
    kind = "lab";
  } else if (/design|architecture|lld|schema|spec|whitepaper/i.test(lowerFmt)) {
    kind = "design";
  } else if (/hand-written|paper|analysis|math|proof|probability|calculation|evaluation|assessment|matrix/i.test(lowerFmt)) {
    kind = "analysis";
  } else if (/coding|python|sql|html|tooling|shell/i.test(lowerFmt)) {
    kind = "code";
  }

  const isCodeTarget = /coding|python|sql|html|pygame|canvas|pytest/i.test(lowerFmt) && !/no coding needed/i.test(lowerFmt);
  const workspaceTarget: "compiler" | "notepad" = isCodeTarget ? "compiler" : "notepad";

  projectsMap[num] = {
    num,
    chapterTitle: heading,
    format,
    why,
    projectTitle,
    problemStatement,
    checklist,
    kind,
    workspaceTarget,
  };
}

type SolutionData = {
  num: number;
  title: string;
  solutionMarkdown: string;
  code: string;
};

const solutionsMap: Record<number, SolutionData> = {};
for (const sec of solSections) {
  const headerMatch = /^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)/im.exec(sec);
  if (!headerMatch) continue;
  const num = parseInt(headerMatch[1], 10);
  const heading = headerMatch[2].trim();
  const body = sec.replace(/^###\s+Chapter\s+\d+\s*[-—:][^\n]*\n+/im, "").replace(/\n---\s*$/g, "").trim();
  
  // Extract code if present
  const codeBlocks = [...body.matchAll(/```(?:python|sql|sh|bash|json|yaml|text)?\n([\s\S]*?)```/gi)];
  const code = codeBlocks.map(m => m[1].trim()).join("\n\n");

  solutionsMap[num] = {
    num,
    title: heading,
    solutionMarkdown: body,
    code
  };
}

// Generate the complete content/projects/computer-science.md
let out = `# Computer Science Chapter Projects\n\nOne required applied project follows every chapter in the [Computer Science roadmap](../roadmaps/CS.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.\n\n`;

for (let i = 0; i < course.phases.length; i++) {
  const phase = course.phases[i];
  const num = parseInt(phase.id, 10);
  const p = projectsMap[num];
  const s = solutionsMap[num];
  if (!p) {
    console.error("Missing project data for phase", phase.id);
    continue;
  }

  const regularLessons = phase.lessons.filter(l => l.kind === "lesson");
  const nextPhase = course.phases[i + 1];

  out += `<a id="cs-phase-${phase.id}-project"></a>\n`;
  out += `### COMPUTER SCIENCE CHAPTER ${phase.id} PROJECT\n\n`;
  out += `#### PROJECT: ${p.projectTitle.toUpperCase()}\n\n`;
  out += `#### ARTIFACT TYPE\n\n${p.kind}\n\n`;
  out += `#### CHAPTER OUTCOME\n\n${p.problemStatement || p.why || `Master ${p.chapterTitle} through a focused ${p.format.toLowerCase()} project.`}\n\n`;
  out += `**Chapter topic:** ${p.chapterTitle}\n\n`;
  out += `**Format:** ${p.format}\n\n`;
  if (p.why) {
    out += `**Why this format:** ${p.why}\n\n`;
  }
  out += `#### LESSONS PRACTICED\n\n`;
  for (const l of regularLessons) {
    out += `- **${l.id} — ${l.title}:** Apply ${l.title} to ${p.projectTitle} and record the reasoning and result.\n`;
  }
  out += `\n#### SPECIFICATION\n\n`;
  out += `- **Format:** ${p.format}\n`;
  if (p.why) out += `- **Why this format:** ${p.why}\n`;
  if (p.problemStatement) out += `- **Problem statement:** ${p.problemStatement}\n`;
  out += `- Build and complete the ${p.projectTitle} according to the chapter requirements.\n`;
  out += `- Keep the scope focused, reproducible, and verifiable.\n\n`;

  out += `#### DELIVERABLES\n\n`;
  if (p.checklist) {
    const lines = p.checklist.split("\n").map(l => l.trim()).filter(Boolean);
    for (const line of lines) {
      const cleaned = line.replace(/^\d+\.\s*/, "").replace(/^[-*]\s*/, "");
      out += `- ${cleaned}\n`;
    }
  } else {
    out += `- Completed ${p.projectTitle} artifact.\n`;
    out += `- Validation record proving all chapter criteria.\n`;
  }
  out += `\n#### TECH STACK\n\n`;
  if (p.workspaceTarget === "compiler") {
    out += `- Python 3.12 or the chapter-specified runtime.\n`;
    out += `- Git.\n`;
    out += `- Markdown for notes and documentation.\n\n`;
  } else {
    out += `- Markdown notes or Pen & Paper / Notepad.\n`;
    out += `- Git for saving project progress.\n`;
    out += `- Diagramming / calculations where required.\n\n`;
  }

  out += `#### BUILD IT STEP BY STEP\n\n`;
  out += `1. Review the chapter problem statement and format requirements.\n`;
  out += `2. Click **${p.workspaceTarget === "compiler" ? "Start Project" : "Start Building"}** to open the workspace with the preloaded solution.\n`;
  out += `3. Implement or step through each checklist item systematically.\n`;
  out += `4. Verify all edge cases and record the validation outcome.\n`;
  out += `5. Save your progress with a clean Git commit checkpoint.\n\n`;

  out += `#### VALIDATION\n\n`;
  out += `- **Normal case:** Complete the intended scenario and verify correct behavior or calculations against the solution.\n`;
  out += `- **Boundary case:** Test edge conditions, limits, or boundary inputs and verify robustness.\n`;
  out += `- **Safe failure case:** Verify error handling, exception safety, or invalid state recovery.\n`;
  out += `- **Reviewer check:** The completed work can be reviewed against the master answer key.\n\n`;

  out += `#### COMPLETION CRITERIA\n\n`;
  out += `- All checklist requirements are satisfied, validation passes, and the checkpoint commit is complete.\n\n`;

  out += `### Git Checkpoint\n\n`;
  const folderSlug = p.projectTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  out += `From the portfolio repository root, review and save only this chapter's folder:\n\n`;
  out += `\`\`\`bash\n`;
  out += `git status\n`;
  out += `git add -- computer-science/chapter-${phase.id}-${folderSlug}\n`;
  out += `git commit -m "feat(${folderSlug}): complete chapter ${phase.id} project"\n`;
  out += `git log -1 --oneline\n`;
  out += `git status\n`;
  out += `\`\`\`\n\n`;
  out += `Continue only when the deliverables and validation evidence still work and the working tree is clean.\n\n`;

  out += `> **PROJECT NAVIGATION:** [REVIEW COMPUTER SCIENCE CHAPTER ${phase.id}](../roadmaps/CS.md#phase-${phase.id})`;
  if (nextPhase) {
    out += ` | [CONTINUE TO COMPUTER SCIENCE CHAPTER ${nextPhase.id}](../roadmaps/CS.md#phase-${nextPhase.id})`;
  }
  out += `\n\n\n`;
}

fs.writeFileSync(path.join(root, "content/projects/computer-science.md"), out, "utf8");
console.log("Successfully generated content/projects/computer-science.md");

// Save structured solutions data
fs.writeFileSync(
  path.join(root, "lib/cs-project-registry.json"),
  JSON.stringify({ projects: projectsMap, solutions: solutionsMap }, null, 2),
  "utf8"
);
console.log("Successfully generated lib/cs-project-registry.json");
