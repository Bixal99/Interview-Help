import cs from "./sidebar-aliases/computer-science.json";
import git from "./sidebar-aliases/git.json";
import web from "./sidebar-aliases/web-development.json";
import ai from "./sidebar-aliases/artificial-intelligence.json";
import data from "./sidebar-aliases/data.json";
import networks from "./sidebar-aliases/networks.json";
import cyber from "./sidebar-aliases/cybersecurity.json";
import itAdmin from "./sidebar-aliases/it-administration.json";
import cloud from "./sidebar-aliases/cloud.json";
import devops from "./sidebar-aliases/devops.json";
import odoo from "./sidebar-aliases/odoo.json";
import { shortenForSidebar, shortenUnitForSidebar } from "./sidebar-shorten";

export type SidebarAliasMap = {
  units?: Record<string, string>;
  phases?: Record<string, string>;
  lessons?: Record<string, string>;
  children?: Record<string, string>;
  project?: string;
};

const catalogs: Record<string, SidebarAliasMap> = {
  "computer-science": cs,
  git,
  "web-development": web,
  "artificial-intelligence": ai,
  data,
  networks,
  cybersecurity: cyber,
  "it-administration": itAdmin,
  cloud,
  devops,
  odoo,
};

function lookup(courseSlug: string, bucket: keyof SidebarAliasMap, id: string): string | undefined {
  const map = catalogs[courseSlug];
  if (!map) return undefined;
  const table = map[bucket];
  if (!table || typeof table === "string") return undefined;
  return table[id];
}

/** Compact unit/chapter-group label for the tutorial sidebar only. */
export function sidebarUnitLabel(courseSlug: string, chapterId: string, title: string) {
  const alias = lookup(courseSlug, "units", chapterId);
  return alias ?? shortenUnitForSidebar(title);
}

/** Compact phase/chapter label for the tutorial sidebar only. */
export function sidebarPhaseLabel(courseSlug: string, phaseId: string, title: string) {
  return lookup(courseSlug, "phases", phaseId) ?? shortenForSidebar(title);
}

/** Compact lesson / story / checkpoint label for the tutorial sidebar only. */
export function sidebarLessonLabel(courseSlug: string, lessonId: string, title: string) {
  return lookup(courseSlug, "lessons", lessonId) ?? shortenForSidebar(title);
}

/** Compact nested topic label (when shown in navigation). */
export function sidebarChildLabel(courseSlug: string, childId: string, title: string) {
  return lookup(courseSlug, "children", childId) ?? shortenForSidebar(title);
}

/** Compact phase-project label for the tutorial sidebar only. */
export function sidebarProjectLabel(courseSlug: string) {
  return catalogs[courseSlug]?.project ?? "Project";
}

export function hasSidebarCatalog(courseSlug: string) {
  return Boolean(catalogs[courseSlug]);
}
