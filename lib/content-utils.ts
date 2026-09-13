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

export type FencedBlock = { language: string; source: string; line: number; meta?: string; playgroundId?: string };

import { parseFenceInfo } from "./code-playground/fence-meta";
import { plainFormula } from "./format-math";

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

export const markdownRouteMap: Record<string, string> = {
  "readme.md": "/about",
  "master_cv_template.md": "/cv-template",
};

/** Map common Greek letters to ASCII so lesson URLs stay routable in Next.js. */
const GREEK_TO_ASCII: Record<string, string> = {
  α: "alpha",
  β: "beta",
  γ: "gamma",
  δ: "delta",
  ε: "epsilon",
  θ: "theta",
  λ: "lambda",
  μ: "mu",
  π: "pi",
  σ: "sigma",
  τ: "tau",
  φ: "phi",
  ω: "omega",
};

export function githubSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[`*_~]/g, "")
    .replace(/&amp;/g, "")
    .replace(/[αβγδεθλμπστφω]/gu, (ch) => GREEK_TO_ASCII[ch] ?? ch)
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
    const phaseMatch = /^(?:PHASE|CHAPTER)\s+(\d+)\b/i.exec(text);
    headings.push({
      depth: match[1].length,
      text: plainFormula(text),
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
    const info = parseFenceInfo(match[1].trim());
    blocks.push({
      language: info.language || "text",
      source: match[2].replace(/\r?\n$/, ""),
      line: markdown.slice(0, match.index).split(/\r?\n/).length,
      meta: info.meta,
      playgroundId: info.playgroundId,
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

function treeCourseHref(resolved: string): string | null {
  const match = /(?:^|\/)content\/courses\/([^/]+)\/(.+)$/i.exec(resolved.replace(/\\/g, "/"));
  if (!match) return null;
  const slug = match[1];
  const rest = match[2];
  if (/^readme\.md$/i.test(rest) || /^table of content\/roadmap\.md$/i.test(rest)) {
    return `/courses/${slug}`;
  }
  const chapterFile = /^unit\s+(\d+)\/chapter\s+(\d+)\/(content|exercise|project|resources)\.md$/i.exec(rest);
  if (chapterFile) {
    const leaf = chapterFile[3].toLowerCase();
    const base = `/courses/${slug}/unit/${chapterFile[1]}/chapter/${chapterFile[2]}`;
    return leaf === "content" ? `${base}/content` : `${base}/${leaf}`;
  }
  const summary = /^unit\s+(\d+)\/conclusion\/summary\.md$/i.exec(rest);
  if (summary) return `/courses/${slug}/unit/${summary[1]}/summary`;
  const unitExercise = /^unit\s+(\d+)\/exercise\/exercise\.md$/i.exec(rest);
  if (unitExercise) return `/courses/${slug}/unit/${unitExercise[1]}/exercise`;
  const unitProject = /^unit\s+(\d+)\/project\/project\.md$/i.exec(rest);
  if (unitProject) return `/courses/${slug}/unit/${unitProject[1]}/project`;
  return `/courses/${slug}`;
}

export function convertMarkdownHref(href: string, sourcePath?: string): string {
  if (!href) return href;
  if (href.startsWith("#")) return href;
  const boundary = href.search(/[?#]/);
  const hrefPath = boundary < 0 ? href : href.slice(0, boundary);
  const suffix = boundary < 0 ? "" : href.slice(boundary);
  let decodedPath: string;
  try { decodedPath = decodeURIComponent(hrefPath); } catch { return href; }
  const resolved = sourcePath ? resolveMarkdownSourcePath(sourcePath, hrefPath) : "";
  const tree = resolved ? treeCourseHref(resolved) : null;
  if (tree) return `${tree}${suffix}`;
  if (!/\.(?:md|xlsx)$/i.test(decodedPath)) return href;
  const basename = decodedPath.replace(/\\/g, "/").split("/").pop()!.toLowerCase();
  if (basename === "job_tracker.xlsx") return "/downloads/job-tracker";
  const route = markdownRouteMap[basename];
  return route ? `${route}${suffix}` : href;
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

/** Drop authored in-page TOC blocks so the course sidebar remains the navigator. */
export function stripInlineTableOfContents(markdown: string) {
  return markdown.replace(
    /(?:^|\r?\n)##[^\n]*TABLE OF CONTENTS[^\n]*(?:\r?\n)[\s\S]*?(?=\r?\n## |$)/gi,
    "\n",
  );
}

/**
 * Chapter pages already sit under a unit in the sidebar — drop the repeated
 * `# UNIT …` banner and promote `## CHAPTER N: …` to the page H1.
 */
export function prepareChapterContentMarkdown(markdown: string) {
  let next = stripInlineTableOfContents(markdown);
  next = next.replace(/^\s*#\s+UNIT\s+[IVXLCDM]+\s*:[^\n]*\r?\n+/i, "");
  next = next.replace(/^(\s*)##(\s+CHAPTER\s+\d+\s*:)/im, "$1#$2");
  return next;
}

export function stripMarkdown(value: string): string {
  return plainFormula(
    value
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[*_~`>#|]/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}
