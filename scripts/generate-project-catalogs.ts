import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { roadmapRegistry, type CourseDefinition } from "../lib/course-catalog";
import { chaptersFor } from "../lib/learning-paths";
import type { Lesson, Phase } from "../lib/learning-model";
import { parseCourseMarkdown } from "../lib/parse-course";
import { parseProjectBrief } from "../lib/parse-project-brief";
import { parseProjectsDocument } from "../lib/parse-projects";

type ArtifactKind = "code" | "lab" | "design" | "analysis" | "runbook" | "rehearsal";

type Override = {
  title: string;
  kind: ArtifactKind;
  action: string;
};

const root = process.cwd();
const legacyPath = path.join(root, "content/guides/Projects.md");
const legacy = fs.readFileSync(legacyPath, "utf8");
let migrationSource = "";
try {
  // During the one-time catalog split, recover the pre-split guide even if a
  // previous generator run has already replaced it with the compatibility index.
  migrationSource = execFileSync("git", ["show", "HEAD:content/guides/Projects.md"], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
} catch {
  // Exported source archives may not include Git history; existing catalogs
  // remain the authoritative idempotent input in that case.
}
const existingCatalogSources = roadmapRegistry.flatMap((course) => {
  const sourcePath = path.join(root, course.projectSourcePath);
  return fs.existsSync(sourcePath) ? [fs.readFileSync(sourcePath, "utf8")] : [];
});
const sourceDocuments = [migrationSource, ...existingCatalogSources, legacy].filter(Boolean);
const legacyProjects = sourceDocuments
  .flatMap((source) => parseProjectsDocument(source))
  // Compatibility indexes contain project anchors but no project cards.
  .filter(
    (project) =>
      /^####\s+PROJECT:/im.test(project.markdown) ||
      /^###\s+.+?PROJECT\s+-/im.test(project.markdown),
  );

const overrides: Record<string, Override> = {
  "cs-phase-7-project": {
    title: "TYPED VALUE INSPECTOR",
    kind: "code",
    action: "Build a small CLI that accepts values, identifies their types, performs explicit conversions, and traces assignment and mutation without hiding invalid cases.",
  },
  "cs-phase-14-project": {
    title: "REPRODUCIBLE PACKAGE SANDBOX",
    kind: "code",
    action: "Split a small program into modules and a package, create an isolated environment, pin its dependencies, and prove that a clean setup reproduces the same result.",
  },
  "cs-phase-40-project": {
    title: "SEARCH STRATEGY WORKBENCH",
    kind: "code",
    action: "Implement linear search, binary search, and one binary-search-on-answer problem, then compare their preconditions, traces, and operation counts on controlled inputs.",
  },
  "cs-phase-53-project": {
    title: "CONCURRENCY RACE LAB",
    kind: "lab",
    action: "Reproduce a race condition in a bounded worker program, repair it with synchronization, and document one deadlock risk plus a safe ordering rule.",
  },
  "cs-phase-57-project": {
    title: "DNS RESOLUTION TRACE",
    kind: "lab",
    action: "Trace stub, recursive, and authoritative DNS resolution with records, TTLs, cache hits, cache misses, and one controlled stale-record failure.",
  },
  "cs-phase-65-project": {
    title: "SCALABLE DATABASE OPERATIONS LAB",
    kind: "runbook",
    action: "Operate a small database through a migration, backup and restore, connection-pool limit, read-replica or partition simulation, and a measured failover decision.",
  },
  "cs-phase-102-project": {
    title: "TIMED LLD REHEARSAL NOTES",
    kind: "rehearsal",
    action: "Run a timed low-level-design prompt, clarify requirements, sketch entities and APIs, trace a happy and failure path, and defend one extensibility trade-off.",
  },
};

const courseTools: Record<string, Record<ArtifactKind, string[]>> = {
  default: {
    code: ["A local code editor", "Git", "The language and runtime introduced in the chapter"],
    lab: ["An isolated local lab or documented simulation", "Markdown for evidence", "Git"],
    design: ["Markdown", "Mermaid or diagrams.net", "Git"],
    analysis: ["Markdown or a spreadsheet", "A small controlled dataset", "Git"],
    runbook: ["An isolated local lab", "Markdown for the runbook and evidence", "Git"],
    rehearsal: ["A timer", "Markdown or paper notes", "Git"],
  },
  "computer-science": {
    code: ["Python 3.12", "Python standard library", "pytest and Git"],
    lab: ["Python 3.12 or a safe local simulator", "Markdown for traces and evidence", "Git"],
    design: ["Markdown", "Mermaid or diagrams.net", "Git"],
    analysis: ["Python 3.12 or a spreadsheet", "Markdown for reasoning", "Git"],
    runbook: ["A disposable local service or simulation", "Markdown", "Git"],
    rehearsal: ["A timer", "Markdown or paper notes", "Git"],
  },
  odoo: {
    code: ["A version-matched local Odoo development environment", "Python, XML, and PostgreSQL as introduced", "Git"],
    lab: ["A disposable Odoo database with generated records", "Odoo logs and developer tools", "Git"],
    design: ["Markdown", "Mermaid or diagrams.net", "A version-matched Odoo reference"],
    analysis: ["A disposable Odoo database or documented simulation", "Markdown", "Git"],
    runbook: ["A disposable Odoo environment", "Markdown for evidence and rollback", "Git"],
    rehearsal: ["A timer", "A disposable Odoo environment", "Markdown and Git"],
  },
};

const mainPortfolioAnchors: Record<string, string[]> = {
  "computer-science": ["cs-oop-block-portfolio-project", "cs-main-portfolio-project"],
  git: ["git-main-portfolio-project"],
  "web-development": ["web-main-portfolio-project"],
  "artificial-intelligence": ["ai-main-portfolio-project"],
  data: ["data-main-portfolio-project"],
  networks: ["networks-main-portfolio-project"],
  cybersecurity: ["cyber-main-portfolio-project"],
  "it-administration": ["it-admin-main-portfolio-project"],
  cloud: ["cloud-main-portfolio-project"],
  devops: ["devops-main-portfolio-project"],
  odoo: ["odoo-main-portfolio-project"],
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function clean(value: string) {
  return value
    .replace(/\r/g, "")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function sentence(value: string) {
  const text = clean(value).replace(/[.:;,-]+$/, "");
  return text ? `${text}.` : "";
}

function kindFor(course: CourseDefinition, phase: Phase): ArtifactKind {
  const text = `${phase.title} ${phase.lessons.map((lesson) => lesson.title).join(" ")}`.toLowerCase();
  if (/interview|mock|job readiness|behavioral|resume|career/.test(text)) return "rehearsal";
  if (/architecture|design|modeling|requirements|ethics|human-centered|hci|ux|capstone planning/.test(text)) return "design";
  if (/incident|operations|deployment|maintenance|recovery|backup|monitoring|governance|administration/.test(text)) return "runbook";
  if (/math|logic|proof|complexity|theory|thinking|foundations|review|consolidation|statistics/.test(text)) return "analysis";
  if (["networks", "cybersecurity", "cloud", "devops", "it-administration"].includes(course.slug)) return "lab";
  return "code";
}

function typeSuffix(kind: ArtifactKind) {
  return {
    code: "WORKBENCH",
    lab: "LAB",
    design: "DESIGN STUDIO",
    analysis: "ANALYSIS DOSSIER",
    runbook: "OPERATIONS RUNBOOK",
    rehearsal: "REHEARSAL",
  }[kind];
}

function legacyTitle(markdown: string) {
  const brief = parseProjectBrief(markdown);
  if (brief.title) return brief.title;
  const heading = /^###\s+.+?PROJECT\s+-\s+(.+)$/im.exec(markdown)?.[1];
  if (heading) return clean(heading);
  const artifact = /^####\s+ARTIFACT:\s*(.+)$/im.exec(markdown)?.[1];
  return artifact ? clean(artifact.replace(/\s*\([^)]*\)\s*$/, "")) : "";
}

function labeled(markdown: string, label: string) {
  const pattern = new RegExp(`\\*\\*${label}:\\*\\*\\s*([\\s\\S]*?)(?=\\s+\\*\\*[A-Z][^*]+:\\*\\*|\\n\\n|$)`, "i");
  return clean(pattern.exec(markdown)?.[1] ?? "");
}

function splitDeliverables(value: string) {
  return value
    .split(/;|,(?=\s+(?:a |an |one |the )?[a-z])/i)
    .map(sentence)
    .filter(Boolean)
    .slice(0, 8);
}

function lessonAction(kind: ArtifactKind, lesson: Lesson) {
  const title = clean(lesson.title);
  const action = {
    code: `Implement or demonstrate ${title} in the shared unit project and add a focused check.`,
    lab: `Configure or simulate ${title}, capture observable evidence, and restore the safe baseline.`,
    design: `Represent ${title} in the design and justify one decision that depends on it.`,
    analysis: `Apply ${title} to the controlled example and record the reasoning and result.`,
    runbook: `Add an executable ${title} procedure with verification and rollback or recovery guidance.`,
    rehearsal: `Practice explaining or applying ${title} under a timer and record the evidence and correction.`,
  }[kind];
  return `- **${lesson.id} — ${title}:** ${action}`;
}

function defaultAction(kind: ArtifactKind, phase: Phase) {
  const topics = phase.lessons.filter((lesson) => lesson.kind === "lesson").slice(0, 3).map((lesson) => clean(lesson.title));
  const noun = {
    code: "Build a small runnable artifact",
    lab: "Run a bounded, reversible lab",
    design: "Produce an implementation-ready design",
    analysis: "Produce an evidence-backed analysis",
    runbook: "Write and rehearse an operational runbook",
    rehearsal: "Complete a timed rehearsal and debrief",
  }[kind];
  return `${noun} for ${clean(phase.title)} that connects ${topics.join(", ") || "the chapter concepts"} and makes every important result inspectable.`;
}

function toolsFor(course: CourseDefinition, kind: ArtifactKind, legacyTools: string[]) {
  if (legacyTools.length) return legacyTools.map(clean).filter(Boolean);
  return (courseTools[course.slug] ?? courseTools.default)[kind];
}

function projectCard(course: CourseDefinition, phase: Phase, unitId: string, unitTitle: string, index: number, phases: Phase[]) {
  const id = `${course.projectPrefix}-phase-${phase.id}-project`;
  const old = legacyProjects.find((project) => project.id === id);
  const oldBrief = old ? parseProjectBrief(old.markdown) : null;
  const override = overrides[id];
  const kind = override?.kind ?? kindFor(course, phase);
  const title = override?.title ?? ((old ? legacyTitle(old.markdown) : "") || `${clean(phase.title).toUpperCase()} ${typeSuffix(kind)}`);
  const action = override?.action ?? oldBrief?.spec[0] ?? defaultAction(kind, phase);
  const lessons = phase.lessons.filter((lesson) => lesson.kind === "lesson");
  const denseDeliverables = old ? splitDeliverables(labeled(old.markdown, "Deliverables")) : [];
  const deliverables = denseDeliverables.length
    ? denseDeliverables
    : oldBrief?.deliverables.length
      ? oldBrief.deliverables.map(sentence)
    : oldBrief?.spec.length
      ? oldBrief.spec.slice(0, 6).map(sentence)
      : [
          `A focused ${kind} artifact for ${clean(phase.title)}.`,
          "A lesson-coverage checklist with evidence for every mapped lesson.",
          "A validation record covering a normal case, a boundary case, and a safe failure case.",
        ];
  const oldSteps = override ? [] : oldBrief?.steps ?? [];
  const steps = oldSteps.length >= 3
    ? oldSteps.map(sentence)
    : [
        `Create or continue the shared ${clean(unitTitle)} unit workspace under ${course.slug}/${unitId}.`,
        `Write a short plan that maps every lesson below to a deliverable or observable behavior.`,
        sentence(action),
        "Complete each lesson-mapping item and keep evidence beside the artifact.",
        "Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.",
        "Record what changed, what remains limited, and the next chapter handoff.",
      ];
  const denseValidation = old ? labeled(old.markdown, "Validation checks") : "";
  const safeFailure = old ? labeled(old.markdown, "Safe failure to introduce") : "";
  const completion = old ? labeled(old.markdown, "Completion criteria") || oldBrief?.completionCriteria[0] || "" : "";
  const businessScenario = old ? labeled(old.markdown, "Business scenario") : "";
  const outcome = phase.goal
    ? sentence(phase.goal)
    : `Apply the complete ${clean(phase.title)} chapter in a small artifact whose behavior and evidence another learner can inspect.`;
  const intro = businessScenario
    ? `**Scenario:** ${sentence(businessScenario)}`
    : oldBrief?.spec.length && oldBrief.intro && !override && !oldBrief.lessonCoverage.length
      ? sentence(oldBrief.intro)
      : sentence(action);
  const folder = `chapter-${phase.id}-${slugify(title)}`;
  const next = phases[index + 1];
  const navigation = next
    ? `[REVIEW ${course.shortName.toUpperCase()} CHAPTER ${phase.number}](../roadmaps/${path.basename(course.sourcePath)}#phase-${phase.id}) | [CONTINUE TO ${course.shortName.toUpperCase()} CHAPTER ${next.number}](../roadmaps/${path.basename(course.sourcePath)}#phase-${next.id})`
    : `[REVIEW ${course.shortName.toUpperCase()} CHAPTER ${phase.number}](../roadmaps/${path.basename(course.sourcePath)}#phase-${phase.id}) | [RETURN TO THE ${course.shortName.toUpperCase()} COURSE](../roadmaps/${path.basename(course.sourcePath)})`;

  return `<a id="${id}"></a>
### ${course.shortName.toUpperCase()} CHAPTER ${phase.number} PROJECT

#### PROJECT: ${title}

#### ARTIFACT TYPE

${kind}

#### CHAPTER OUTCOME

${outcome}

**Chapter topic:** ${clean(phase.title)}

**Unit storyline:** Continue the **${clean(unitTitle)}** shared workspace. This chapter adds a self-contained ${kind} deliverable and one reviewable commit without requiring concepts from later chapters.

${intro}

#### LESSONS PRACTICED

${lessons.map((lesson) => lessonAction(kind, lesson)).join("\n")}

#### SPECIFICATION

- ${sentence(action)}
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

${deliverables.map((item) => `- ${sentence(item)}`).join("\n")}

#### TECH STACK

${toolsFor(course, kind, oldBrief?.tech ?? []).map((item) => `- ${sentence(item)}`).join("\n")}

#### BUILD IT STEP BY STEP

${steps.map((step, stepIndex) => `${stepIndex + 1}. ${sentence(step)}`).join("\n")}

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** ${sentence(safeFailure || "Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence")}
${denseValidation ? `- **Reviewer check:** ${sentence(denseValidation)}` : "- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves."}

#### COMPLETION CRITERIA

- ${sentence(completion || "Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit")}

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

\`\`\`bash
git status
git add -- ${course.slug}/${unitId}/${folder}
git commit -m "feat(${slugify(title).slice(0, 42)}): complete chapter ${phase.id} project"
git log -1 --oneline
git status
\`\`\`

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** ${navigation}
`;
}

function extractPortfolio(anchor: string) {
  const token = `<a id="${anchor}"></a>`;
  const source = sourceDocuments.find((document) => document.includes(token));
  if (!source) return "";
  const start = source.indexOf(token);
  const nextHeading = source.indexOf("\n## ", start + token.length + 80);
  const nextTopHeading = source.indexOf("\n# ", start + token.length + 80);
  const candidates = [nextHeading, nextTopHeading].filter((value) => value > start);
  const end = candidates.length ? Math.min(...candidates) : source.length;
  return source.slice(start, end).trim();
}

function catalogFor(course: CourseDefinition) {
  const courseMarkdown = fs.readFileSync(path.join(root, course.sourcePath), "utf8");
  const parsed = parseCourseMarkdown(courseMarkdown, course.slug);
  const units = chaptersFor(course.slug, parsed.phases.map((phase) => phase.id));
  const phaseById = new Map(parsed.phases.map((phase) => [phase.id, phase]));
  const body: string[] = [
    `# ${course.shortName} Chapter Projects`,
    "",
    `One required applied project follows every chapter in the [${course.shortName} roadmap](../roadmaps/${path.basename(course.sourcePath)}). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.`,
    "",
  ];

  for (const unit of units) {
    body.push(`## ${unit.title}`, "", `**Shared unit storyline:** Keep one workspace for ${clean(unit.title)}. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.`, "");
    for (const phaseId of unit.phaseIds) {
      const phase = phaseById.get(phaseId);
      if (!phase) continue;
      const phaseIndex = parsed.phases.findIndex((item) => item.id === phaseId);
      body.push(projectCard(course, phase, unit.id, unit.title, phaseIndex, parsed.phases), "");
    }
  }

  const portfolios = (mainPortfolioAnchors[course.slug] ?? []).map(extractPortfolio).filter(Boolean);
  if (portfolios.length) body.push("## Additional Portfolio Capstones", "", "These synthesis projects remain optional additions to the required chapter sequence.", "", ...portfolios, "");
  return `${body.join("\n").trim()}\n`;
}

const projectDirectory = path.join(root, "content/projects");
fs.mkdirSync(projectDirectory, { recursive: true });
for (const course of roadmapRegistry) {
  fs.writeFileSync(path.join(root, course.projectSourcePath), catalogFor(course), "utf8");
}

const guide = `# Project Build Guide

Every course has one required applied project after every chapter. The project may be code, a lab, a design, an analysis, a runbook, or a rehearsal: the artifact type follows what the chapter actually teaches.

## How chapter projects work

1. Finish the chapter lessons.
2. Open the chapter project and review its lesson-coverage map.
3. Continue the shared unit workspace and complete the focused deliverable.
4. Validate a normal case, a meaningful boundary, and one safe reversible failure.
5. Save the chapter folder with the provided Git checkpoint and mark the project complete.

Projects use generated, public, or permissioned data. Infrastructure and security work stays inside systems you own or an isolated simulation, with a documented reset or rollback path.

## Integrated Git workflow

Use one portfolio repository for the course workspaces. Initialize it once, keep each unit in its own folder, inspect \`git status\` before staging, and never commit credentials, private data, virtual-machine images, raw captures, local databases, or generated build output unless a project explicitly asks for a small sanitized fixture.

## Course catalogs

${roadmapRegistry.map((course) => `- [${course.shortName}](../projects/${path.basename(course.projectSourcePath)})`).join("\n")}

## Chapter project index

The anchors below preserve links authored before projects were split into course catalogs.

<a id="git-and-git-workflows"></a>
${Object.entries(mainPortfolioAnchors).flatMap(([courseSlug, anchors]) => {
  const course = roadmapRegistry.find((item) => item.slug === courseSlug)!;
  return anchors.map((anchor) => `<a id="${anchor}"></a>\n- [${course.shortName} portfolio capstone](../projects/${path.basename(course.projectSourcePath)}#${anchor})`);
}).join("\n")}

${roadmapRegistry.flatMap((course) => {
  const parsed = parseCourseMarkdown(fs.readFileSync(path.join(root, course.sourcePath), "utf8"), course.slug);
  return parsed.phases.map((phase) => `<a id="${course.projectPrefix}-phase-${phase.id}-project"></a>\n- [${course.shortName} Chapter ${phase.number}](../projects/${path.basename(course.projectSourcePath)}#${course.projectPrefix}-phase-${phase.id}-project)`);
}).join("\n")}
`;
fs.writeFileSync(legacyPath, guide, "utf8");

console.log(`Generated ${roadmapRegistry.length} course project catalogs from ${roadmapRegistry.reduce((sum, course) => sum + parseCourseMarkdown(fs.readFileSync(path.join(root, course.sourcePath), "utf8"), course.slug).phases.length, 0)} chapters.`);
