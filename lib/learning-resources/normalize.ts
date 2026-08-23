import { extractYouTubeInfo } from "../content-utils";
import type { LearningResource, ResourceType } from "./types";

const KIND_MAP: Record<string, ResourceType> = {
  video: "video",
  "best animated explanation": "video",
  alternative: "video",
  "another angle": "video",
  series: "video",
  "quick survey": "video",
  "alternative video angle": "video",
  article: "article",
  tutorial: "tutorial",
  documentation: "documentation",
  "written documentation": "documentation",
  reference: "reference",
  interactive: "interactive",
  "interactive simulator": "interactive",
  visualizer: "visualizer",
  github: "github",
  "github implementation": "github",
  course: "course",
  tool: "tool",
  "practice platform": "tool",
  "free verified video": "video",
  "official open-source book": "reference",
  "official documentation/software": "documentation",
  "open-source git forges": "reference",
};

export function normalizeResourceType(kind: string): ResourceType {
  const key = kind.trim().toLowerCase();
  if (KIND_MAP[key]) return KIND_MAP[key];
  if (/video|watch|explained|animation/i.test(kind)) return "video";
  if (/doc|mdn|official|reference|spec|rfc/i.test(kind)) return "documentation";
  if (/github|repo|source code|implementation/i.test(kind)) return "github";
  if (/interactive|simulator|playground|visualiz/i.test(kind)) return "interactive";
  if (/article|blog|read|written|guide/i.test(kind)) return "article";
  if (/course|playlist|lecture|full course/i.test(kind)) return "course";
  if (/practice|exercise|tool|platform/i.test(kind)) return "tool";
  return "reference";
}

function inferSource(url: string): string | undefined {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    const known: Record<string, string> = {
      "youtube.com": "YouTube",
      "youtu.be": "YouTube",
      "developer.mozilla.org": "MDN",
      "github.com": "GitHub",
      "docs.python.org": "Python Docs",
      "react.dev": "React",
      "nextjs.org": "Next.js",
      "nodejs.org": "Node.js",
      "visualgo.net": "VisuAlgo",
      "pythontutor.com": "Python Tutor",
    };
    return known[host] ?? host;
  } catch {
    return undefined;
  }
}

export function enrichResource(input: {
  kind: string;
  title: string;
  href: string;
  note?: string;
}): LearningResource {
  const type = normalizeResourceType(input.kind);
  const youtube = extractYouTubeInfo(input.href);
  const videoId = youtube?.videoId;
  const isPlaylistOnly = youtube?.kind === "playlist" && !videoId;
  const resolvedType = isPlaylistOnly ? "course" : videoId && type === "reference" ? "video" : type;
  return {
    type: resolvedType,
    title: input.title.trim(),
    description: (input.note ?? "").trim(),
    url: input.href.trim(),
    source: inferSource(input.href),
    thumbnail: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined,
    videoId,
    embedSupported: videoId && youtube?.kind === "video" ? true : videoId ? false : undefined,
  };
}

export function toVisualKind(type: ResourceType): string {
  const labels: Record<ResourceType, string> = {
    video: "Video",
    article: "Article",
    documentation: "Documentation",
    interactive: "Interactive",
    visualizer: "Visualizer",
    github: "GitHub",
    tutorial: "Tutorial",
    reference: "Reference",
    course: "Course",
    tool: "Tool",
  };
  return labels[type];
}

export function learningResourceToVisual(resource: LearningResource) {
  return {
    kind: toVisualKind(resource.type),
    title: resource.title,
    href: resource.url,
    note: resource.description || undefined,
    embedSupported: resource.embedSupported,
    videoId: resource.videoId,
  };
}
