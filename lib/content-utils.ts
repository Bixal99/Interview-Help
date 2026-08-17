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

export const markdownRouteMap: Record<string, string> = {
  "cs.md": "/courses/computer-science",
  "oop.md": "/courses/object-oriented-programming",
  "git.md": "/courses/git",
  "web.md": "/courses/web-development",
  "ai.md": "/courses/artificial-intelligence",
  "data.md": "/courses/data",
  "networks.md": "/courses/networks",
  "ict_cybersecurity.md": "/courses/cybersecurity",
  "cloud.md": "/courses/cloud",
  "devops.md": "/courses/devops",
  "odoo.md": "/courses/odoo",
  "projects.md": "/projects",
  "interview.md": "/interview",
  "master_cv_template.md": "/cv-template",
  "readme.md": "/about",
};

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

export function convertMarkdownHref(href: string): string {
  if (!href || href.startsWith("#")) return href;
  const match = /^(?:\.\/)?([^#?]+\.md)(#[^?]*)?(\?.*)?$/i.exec(href);
  if (!match) return href;
  const route = markdownRouteMap[match[1].replace(/\\/g, "/").split("/").pop()!.toLowerCase()];
  return route ? `${route}${match[2] ?? ""}${match[3] ?? ""}` : href;
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
