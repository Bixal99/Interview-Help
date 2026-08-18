export type Heading = {
  depth: number;
  text: string;
  id: string;
  line: number;
  phase?: number;
};

export type YouTubeInfo = {
  kind: "video" | "playlist";
  videoId?: string;
  playlistId?: string;
};

export type FencedBlock = { language: string; source: string; line: number };

import { contentRegistry, roadmapRegistry } from "./course-catalog";
import { mapLegacyOopPhase } from "./legacy-routes";

function normalizeSourcePath(value: string, lowercase = true): string {
  const segments: string[] = [];
  for (const segment of value.replace(/\\/g, "/").split("/")) {
    if (!segment || segment === ".") continue;
    if (segment === "..") segments.pop();
    else segments.push(segment);
  }
  const normalized = segments.join("/");
  return lowercase ? normalized.toLowerCase() : normalized;
}

const routeBySourcePath = new Map(contentRegistry.map((entry) => [normalizeSourcePath(entry.sourcePath), entry.route]));
routeBySourcePath.set("data/job_tracker.xlsx", "/downloads/job-tracker");
routeBySourcePath.set("content", "/about");
routeBySourcePath.set("content/roadmaps", "/courses");
routeBySourcePath.set("content/guides", "/projects");
routeBySourcePath.set("content/templates", "/cv-template");
routeBySourcePath.set("data", "/downloads/job-tracker");

export const markdownRouteMap: Record<string, string> = Object.fromEntries([
  ...contentRegistry.map((entry) => [entry.sourcePath.split("/").pop()!.toLowerCase(), entry.route] as const),
  ["readme.md", "/about"] as const,
]);

export function githubSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[`*_~]/g, "")
    .replace(/&amp;/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  let inFence = false;
  for (const [index, line] of markdown.split(/\r?\n/).entries()) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = /^(#{1,4})\s+(.+?)\s*#*$/.exec(line);
    if (!match) continue;
    const text = match[2].replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim();
    const phaseMatch = /^PHASE\s+(\d+)\b/i.exec(text);
    headings.push({
      depth: match[1].length,
      text,
      id: githubSlug(text),
      line: index + 1,
      phase: phaseMatch ? Number(phaseMatch[1]) : undefined,
    });
    continue;
  }
  for (const match of markdown.matchAll(/^\s*<a\s+id=["']([^"']+)["']\s*><\/a>\s*$/gim)) {
    const id = match[1];
    if (!headings.some((heading) => heading.id === id)) headings.push({ depth: 6, text: "", id, line: markdown.slice(0, match.index).split(/\r?\n/).length });
  }
  headings.sort((a, b) => a.line - b.line);
  return headings;
}

export function extractFencedBlocks(markdown: string): FencedBlock[] {
  const blocks: FencedBlock[] = [];
  const pattern = /^```([^\r\n]*)\r?\n([\s\S]*?)^```\s*$/gm;
  for (const match of markdown.matchAll(pattern)) {
    blocks.push({
      language: match[1].trim().toLowerCase() || "text",
      source: match[2].replace(/\r?\n$/, ""),
      line: markdown.slice(0, match.index).split(/\r?\n/).length,
    });
  }
  return blocks;
}

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function resolveMarkdownSourcePath(sourcePath: string, hrefPath: string): string {
  const decodedPath = decodeURIComponent(hrefPath).replace(/\\/g, "/");
  const sourceDirectory = sourcePath.replace(/\\/g, "/").split("/").slice(0, -1).join("/");
  return normalizeSourcePath(`${sourceDirectory}/${decodedPath}`, false);
}

function isOopSource(sourcePath?: string) {
  return Boolean(sourcePath && /(?:^|\/)oop\.md$/i.test(sourcePath.replace(/\\/g, "/")));
}

export function rewriteContentFragment(route: string, fragment: string, sourcePath?: string): string {
  const hash = fragment.replace(/^#/, "");
  if (!hash) return route;
  const fromOop = isOopSource(sourcePath);
  const project = /^(cs|oop|git|web|ai|data|networks|odoo|cloud|devops|cyber|it-admin)-phase-(f?\d+)-project$/i.exec(hash);
  if (project) {
    const prefix = project[1].toLowerCase();
    const phaseId = project[2].toLowerCase();
    if (prefix === "oop") return `/projects/computer-science/phase/${mapLegacyOopPhase(phaseId)}`;
    const course = roadmapRegistry.find((item) => item.projectPrefix === prefix);
    return course ? `/projects/${course.slug}/phase/${phaseId}` : `${route}#${hash}`;
  }
  const fphase = /^phase-f(\d+)/i.exec(hash);
  if (fphase && route.startsWith("/courses/")) return `${route}/phase/${mapLegacyOopPhase(`f${fphase[1]}`)}`;
  const phase = /^phase-(\d+)/i.exec(hash);
  if (phase && route.startsWith("/courses/")) {
    const id = fromOop ? mapLegacyOopPhase(phase[1]) : String(Number(phase[1]));
    return `${route}/phase/${id}`;
  }
  return `${route}#${hash}`;
}

const CS_ROUTE = "/courses/computer-science";

export function convertMarkdownHref(href: string, sourcePath?: string): string {
  if (!href) return href;
  if (href.startsWith("#")) {
    if (!sourcePath) return href;
    if (isOopSource(sourcePath)) return rewriteContentFragment(CS_ROUTE, href, sourcePath);
    const selfRoute = routeBySourcePath.get(normalizeSourcePath(sourcePath));
    return selfRoute ? rewriteContentFragment(selfRoute, href, sourcePath) : href;
  }
  const boundary = href.search(/[?#]/);
  const hrefPath = boundary < 0 ? href : href.slice(0, boundary);
  const suffix = boundary < 0 ? "" : href.slice(boundary);
  let decodedPath: string;
  try { decodedPath = decodeURIComponent(hrefPath); } catch { return href; }
  const resolved = sourcePath ? resolveMarkdownSourcePath(sourcePath, hrefPath) : "";
  if (isOopSource(resolved)) return suffix.startsWith("#") ? rewriteContentFragment(CS_ROUTE, suffix, resolved) : CS_ROUTE;
  const repositoryRoute = sourcePath ? routeBySourcePath.get(normalizeSourcePath(resolved)) : undefined;
  if (repositoryRoute) return suffix.startsWith("#") ? rewriteContentFragment(repositoryRoute, suffix, resolved) : `${repositoryRoute}${suffix}`;
  if (!/\.(?:md|xlsx)$/i.test(decodedPath)) return href;
  const basename = decodedPath.replace(/\\/g, "/").split("/").pop()!.toLowerCase();
  if (basename === "oop.md") return suffix.startsWith("#") ? rewriteContentFragment(CS_ROUTE, suffix, "content/roadmaps/OOP.md") : CS_ROUTE;
  const route = sourcePath
    ? undefined
    : decodedPath.toLowerCase().endsWith(".xlsx")
      ? basename === "job_tracker.xlsx" ? "/downloads/job-tracker" : undefined
      : markdownRouteMap[basename];
  return route ? (suffix.startsWith("#") ? rewriteContentFragment(route, suffix) : `${route}${suffix}`) : href;
}

export function extractYouTubeInfo(url: string): YouTubeInfo | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (!["youtube.com", "m.youtube.com", "youtu.be", "youtube-nocookie.com"].includes(host)) return null;
    const playlistId = parsed.searchParams.get("list") ?? undefined;
    let videoId: string | undefined;
    if (host === "youtu.be") videoId = parsed.pathname.split("/")[1];
    else if (parsed.pathname === "/watch") videoId = parsed.searchParams.get("v") ?? undefined;
    else if (/^\/(embed|shorts)\//.test(parsed.pathname)) videoId = parsed.pathname.split("/")[2];
    if (videoId && !/^[\w-]{6,}$/.test(videoId)) videoId = undefined;
    if (playlistId && !/^[\w-]{6,}$/.test(playlistId)) return videoId ? { kind: "video", videoId } : null;
    if (playlistId) return { kind: "playlist", playlistId, videoId };
    return videoId ? { kind: "video", videoId } : null;
  } catch {
    return null;
  }
}

export function stripMarkdown(value: string): string {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_~`>#|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
