import type { CourseChapter, LearningPath, PathStep } from "./learning-model";

function range(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, index) => String(from + index));
}

export const courseChapters: Record<string, CourseChapter[]> = {
  "computer-science": [
    { id: "foundations", title: "Foundations", phaseIds: ["1", "2"] },
    { id: "algorithms", title: "Data structures and algorithms", phaseIds: range(3, 9) },
    { id: "oop-revision", title: "OOP revision", phaseIds: ["10"] },
    { id: "systems", title: "Systems", phaseIds: ["11", "12"] },
    { id: "web-data", title: "Web, data, and security", phaseIds: range(13, 15) },
    { id: "design", title: "Design", phaseIds: range(16, 18) },
    { id: "hire", title: "Hire", phaseIds: ["19", "20"] },
  ],
  "object-oriented-programming": [
    { id: "part-0", title: "Programming fundamentals", phaseIds: ["f1", "f2", "f3"] },
    { id: "thinking", title: "Object thinking", phaseIds: range(1, 3) },
    { id: "pillars", title: "Pillars", phaseIds: range(4, 8) },
    { id: "tools", title: "Tools and modeling", phaseIds: range(9, 11) },
    { id: "solid", title: "SOLID and patterns", phaseIds: range(12, 15) },
    { id: "architecture", title: "Architecture and LLD", phaseIds: range(16, 18) },
    { id: "hire", title: "Hire", phaseIds: ["19", "20"] },
  ],
  git: [
    { id: "setup", title: "Setup and state", phaseIds: range(1, 4) },
    { id: "collaborate", title: "Branch, merge, remotes", phaseIds: range(5, 7) },
    { id: "recover", title: "Undo, recover, rewrite", phaseIds: range(8, 10) },
    { id: "professional", title: "Release, workflow, trust", phaseIds: range(11, 15) },
  ],
  "web-development": [
    { id: "browser", title: "Browser and HTML/CSS/JS", phaseIds: range(1, 7) },
    { id: "frameworks", title: "Frameworks", phaseIds: range(8, 10) },
    { id: "backend", title: "Server, data, and APIs", phaseIds: range(11, 14) },
    { id: "production", title: "Security, production, hire", phaseIds: range(15, 20) },
  ],
  data: [
    { id: "analyst", title: "Analyst core", phaseIds: range(1, 10) },
    { id: "engineer", title: "Engineering depth", phaseIds: range(11, 18) },
    { id: "hire", title: "Portfolio and hire", phaseIds: ["19", "20"] },
  ],
  networks: [
    { id: "bits", title: "Bits and links", phaseIds: range(1, 4) },
    { id: "packets", title: "Packets and routes", phaseIds: range(5, 8) },
    { id: "apps", title: "Transport and apps", phaseIds: range(9, 14) },
    { id: "scale", title: "Scale", phaseIds: range(15, 18) },
    { id: "hire", title: "Hire", phaseIds: ["19", "20"] },
  ],
  "artificial-intelligence": [
    { id: "data", title: "Data and math", phaseIds: range(1, 3) },
    { id: "learn", title: "Classical learning", phaseIds: range(4, 9) },
    { id: "deep", title: "Deep learning", phaseIds: range(10, 12) },
    { id: "transformers", title: "Transformers and LLM systems", phaseIds: range(13, 18) },
    { id: "hire", title: "Portfolio and hire", phaseIds: ["19", "20"] },
  ],
  cybersecurity: [
    { id: "foundations", title: "Foundations", phaseIds: range(1, 6) },
    { id: "defend", title: "Defend", phaseIds: range(7, 10) },
    { id: "attack", title: "Attack", phaseIds: range(11, 12) },
    { id: "detect", title: "Detect", phaseIds: range(13, 14) },
    { id: "respond", title: "Respond", phaseIds: range(15, 18) },
    { id: "hire", title: "Hire", phaseIds: ["19", "20"] },
  ],
  odoo: [
    { id: "erp", title: "ERP and modules", phaseIds: range(1, 4) },
    { id: "orm", title: "ORM and security", phaseIds: range(5, 7) },
    { id: "ui", title: "User interface", phaseIds: range(8, 12) },
    { id: "web", title: "Web requests and data", phaseIds: range(13, 17) },
    { id: "hire", title: "Release and hire", phaseIds: range(18, 20) },
  ],
  cloud: [
    { id: "core", title: "Cloud core", phaseIds: range(1, 7) },
    { id: "data", title: "Data and traffic", phaseIds: range(8, 10) },
    { id: "native", title: "Cloud native", phaseIds: range(11, 12) },
    { id: "govern", title: "Governance and security", phaseIds: range(13, 16) },
    { id: "hire", title: "Reliability, FinOps, hire", phaseIds: range(17, 20) },
  ],
  devops: [
    { id: "flow", title: "Flow, Linux, Git", phaseIds: range(1, 5) },
    { id: "delivery", title: "Artifacts and CI/CD", phaseIds: range(6, 8) },
    { id: "runtime", title: "Containers and Kubernetes", phaseIds: range(9, 10) },
    { id: "infra", title: "IaC and cloud", phaseIds: range(11, 13) },
    { id: "hire", title: "SRE, platform, hire", phaseIds: range(14, 20) },
  ],
  "it-administration": [
    { id: "support", title: "Support and endpoints", phaseIds: range(1, 4) },
    { id: "network", title: "Networks and virtualization", phaseIds: range(5, 6) },
    { id: "identity", title: "Servers, AD, Microsoft cloud", phaseIds: range(7, 10) },
    { id: "ops", title: "Recovery, security, operations", phaseIds: range(11, 16) },
    { id: "hire", title: "Hybrid and hire", phaseIds: ["17", "18"] },
  ],
};

function steps(course: string, ids: string[]): PathStep[] {
  return ids.map((phaseId) => ({ course, phaseId }));
}

export const learningPaths: LearningPath[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    steps: [
      ...steps("computer-science", ["1", "2"]),
      ...steps("object-oriented-programming", ["f1", "f2", "f3", ...range(1, 20)]),
      ...steps("git", range(1, 10)),
      ...steps("computer-science", range(3, 20)),
    ],
  },
  {
    id: "web-developer",
    title: "Web Developer",
    steps: [
      ...steps("object-oriented-programming", ["f1", "f2", "f3"]),
      ...steps("git", range(1, 7)),
      ...steps("web-development", range(1, 20)),
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    steps: steps("artificial-intelligence", range(1, 20)),
  },
  {
    id: "odoo-developer",
    title: "Odoo Developer",
    steps: [
      ...steps("object-oriented-programming", ["f1", "f2", "f3", ...range(1, 20)]),
      ...steps("git", range(1, 7)),
      ...steps("odoo", range(1, 20)),
    ],
  },
  {
    id: "it-administrator",
    title: "IT Administrator",
    steps: steps("it-administration", range(1, 18)),
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    steps: [
      ...steps("devops", ["1", "2", "3"]),
      ...steps("git", range(1, 15)),
      ...steps("devops", range(4, 20)),
    ],
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    steps: [
      ...steps("cloud", ["1", "2"]),
      ...steps("git", range(1, 9)),
      ...steps("cloud", range(3, 20)),
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    steps: steps("cybersecurity", range(1, 20)),
  },
  {
    id: "data",
    title: "Data",
    steps: steps("data", range(1, 20)),
  },
];

export const learningPathById = Object.fromEntries(learningPaths.map((path) => [path.id, path]));

export function chaptersFor(slug: string, phaseIds: string[]): CourseChapter[] {
  const configured = courseChapters[slug];
  if (!configured) {
    return [{ id: "tutorial", title: "Tutorial", phaseIds }];
  }
  return configured
    .map((chapter) => ({ ...chapter, phaseIds: chapter.phaseIds.filter((id) => phaseIds.includes(id)) }))
    .filter((chapter) => chapter.phaseIds.length);
}

export function sequentialPath(course: string, phaseIds: string[]): PathStep[] {
  return steps(course, phaseIds);
}

export const defaultPathByCourse: Record<string, string> = {
  "computer-science": "software-engineer",
  "object-oriented-programming": "software-engineer",
  git: "software-engineer",
  "web-development": "web-developer",
  "artificial-intelligence": "ai-engineer",
  odoo: "odoo-developer",
  "it-administration": "it-administrator",
  devops: "devops-engineer",
  cloud: "cloud-engineer",
  cybersecurity: "cybersecurity",
  data: "data",
};

export function pathForCourse(course: string, activePath?: string): LearningPath | undefined {
  if (activePath && learningPathById[activePath]) return learningPathById[activePath];
  const fallback = defaultPathByCourse[course];
  return fallback ? learningPathById[fallback] : undefined;
}
