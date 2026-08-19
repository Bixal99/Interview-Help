import type { SearchHit } from "./learning-model";

export type AppIconName =
  | "home"
  | "courses"
  | "learn"
  | "practice"
  | "quiz"
  | "project"
  | "progress"
  | "video"
  | "code"
  | "terminal"
  | "interview"
  | "search"
  | "settings"
  | "complete"
  | "current"
  | "locked"
  | "externalLink"
  | "menu"
  | "close"
  | "copy"
  | "wrap"
  | "reset"
  | "run"
  | "previous"
  | "next"
  | "expand"
  | "download"
  | "playlist"
  | "fullscreen"
  | "lesson"
  | "phase"
  | "diagram"
  | "example"
  | "tip"
  | "resource"
  | "warning"
  | "error"
  | "inProgress"
  | "notStarted"
  | "phaseComplete"
  | "projectComplete"
  | "gitCheckpoint"
  | "exportProgress"
  | "importProgress"
  | "resetProgress"
  | "paths";

export type CourseIconName =
  | "computerScience"
  | "oop"
  | "git"
  | "web"
  | "data"
  | "ai"
  | "networks"
  | "cybersecurity"
  | "itAdministration"
  | "cloud"
  | "devops"
  | "odoo";

export type StatusIconName = Extract<
  AppIconName,
  | "complete"
  | "current"
  | "inProgress"
  | "notStarted"
  | "phaseComplete"
  | "projectComplete"
  | "gitCheckpoint"
  | "warning"
  | "error"
  | "locked"
>;

export type SearchTypeIconName = AppIconName;

export const ICON_SIZE = {
  compact: 16,
  ui: 18,
  nav: 20,
  course: 24,
  heading: 28,
} as const;

export const ICON_WEIGHT = {
  default: "regular",
  emphasis: "bold",
  active: "fill",
} as const;

export const ICON_CLASS = "inline-block shrink-0 align-middle";

export const COURSE_ICON_BY_SLUG: Record<string, CourseIconName> = {
  "computer-science": "computerScience",
  "object-oriented-programming": "oop",
  git: "git",
  "web-development": "web",
  "artificial-intelligence": "ai",
  data: "data",
  networks: "networks",
  cybersecurity: "cybersecurity",
  "it-administration": "itAdministration",
  cloud: "cloud",
  devops: "devops",
  odoo: "odoo",
};

export const SEARCH_TYPE_ICONS: Record<SearchHit["type"], AppIconName> = {
  course: "courses",
  phase: "phase",
  lesson: "lesson",
  concept: "tip",
  project: "project",
  interview: "interview",
  command: "terminal",
  example: "example",
};

export type TechnologyMeta = {
  title: string;
  hasLogo: boolean;
};

export const TECHNOLOGY_BY_SLUG: Record<string, TechnologyMeta> = {
  python: { title: "Python", hasLogo: true },
  sqlite: { title: "SQLite", hasLogo: true },
  vscodium: { title: "VSCodium", hasLogo: true },
  vscode: { title: "VS Code", hasLogo: true },
  javascript: { title: "JavaScript", hasLogo: true },
  typescript: { title: "TypeScript", hasLogo: true },
  react: { title: "React", hasLogo: true },
  nextdotjs: { title: "Next.js", hasLogo: true },
  nodedotjs: { title: "Node.js", hasLogo: true },
  git: { title: "Git", hasLogo: true },
  github: { title: "GitHub", hasLogo: true },
  docker: { title: "Docker", hasLogo: true },
  kubernetes: { title: "Kubernetes", hasLogo: true },
  postgresql: { title: "PostgreSQL", hasLogo: true },
  mysql: { title: "MySQL", hasLogo: true },
  mongodb: { title: "MongoDB", hasLogo: true },
  linux: { title: "Linux", hasLogo: true },
  windows: { title: "Windows", hasLogo: false },
  amazonwebservices: { title: "AWS", hasLogo: false },
  microsoftazure: { title: "Microsoft Azure", hasLogo: false },
  googlecloud: { title: "Google Cloud", hasLogo: true },
  odoo: { title: "Odoo", hasLogo: true },
  html5: { title: "HTML5", hasLogo: true },
  css: { title: "CSS", hasLogo: true },
  tailwindcss: { title: "Tailwind CSS", hasLogo: true },
  flask: { title: "Flask", hasLogo: true },
  fastapi: { title: "FastAPI", hasLogo: true },
  streamlit: { title: "Streamlit", hasLogo: true },
  selenium: { title: "Selenium", hasLogo: true },
  supabase: { title: "Supabase", hasLogo: true },
  vercel: { title: "Vercel", hasLogo: true },
  c: { title: "C", hasLogo: true },
  cplusplus: { title: "C++", hasLogo: true },
};

function humanizeSlug(slug: string) {
  return slug.replace(/dot/g, ".").replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function resolveTechnology(slug: string, title?: string): TechnologyMeta & { slug: string } {
  const known = TECHNOLOGY_BY_SLUG[slug];
  if (!known) return { slug, title: title ?? humanizeSlug(slug), hasLogo: false };
  return { slug, title: title ?? known.title, hasLogo: known.hasLogo };
}
