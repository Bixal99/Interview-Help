import fs from "node:fs";
import path from "node:path";
import { contentRegistry, guideRegistry, roadmapRegistry, templateRegistry } from "../lib/course-catalog";
import { extractFencedBlocks, extractHeadings, extractYouTubeInfo, markdownRouteMap, resolveMarkdownSourcePath } from "../lib/content-utils";
import { DATA_ROOT, PROJECT_ROOT, projectPath } from "../lib/paths";

const warnings: string[] = [];
const errors: string[] = [];
let headingCount = 0;
let phaseCount = 0;
let mermaidCount = 0;
let youtubeCount = 0;

const indexPaths = [
  "README.md",
  "content/README.md",
  "content/roadmaps/README.md",
  "content/guides/README.md",
  "content/templates/README.md",
  "data/README.md",
];
const registeredPaths = new Set(contentRegistry.map((entry) => entry.sourcePath.toLowerCase()));
const sourceCache = new Map<string, string>();

function sourceAt(sourcePath: string): string {
  const cacheKey = sourcePath.toLowerCase();
  const cached = sourceCache.get(cacheKey);
  if (cached !== undefined) return cached;
  const source = fs.readFileSync(projectPath(sourcePath), "utf8");
  sourceCache.set(cacheKey, source);
  return source;
}

function parseLocalHref(href: string) {
  const clean = href.trim().replace(/^<|>$/g, "");
  if (!clean || clean.startsWith("#") || /^[a-z][a-z\d+.-]*:/i.test(clean)) return null;
  const hashAt = clean.indexOf("#");
  const queryAt = clean.indexOf("?");
  const end = [hashAt, queryAt].filter((value) => value >= 0).reduce((minimum, value) => Math.min(minimum, value), clean.length);
  return { hrefPath: clean.slice(0, end), fragment: hashAt >= 0 ? clean.slice(hashAt + 1) : "" };
}

for (const entry of contentRegistry) {
  if (!fs.existsSync(projectPath(entry.sourcePath))) errors.push(`${entry.sourcePath}: registered source is missing`);
  if (!entry.sourcePath.startsWith("content/")) errors.push(`${entry.sourcePath}: registered content still points outside content/`);
  if (entry.sourcePath.toLowerCase().endsWith("/readme.md")) errors.push(`${entry.sourcePath}: folder README must not be registered`);
  if (!markdownRouteMap[path.basename(entry.sourcePath).toLowerCase()]) errors.push(`${entry.sourcePath}: route mapping is missing`);
}

if (!fs.existsSync(path.join(DATA_ROOT, "Job_Tracker.xlsx"))) errors.push("data/Job_Tracker.xlsx: canonical Job Tracker is missing");
if (!templateRegistry.some((entry) => entry.sourcePath === "content/templates/Master_CV_Template.md")) errors.push("content/templates/Master_CV_Template.md: template is not registered");
if (roadmapRegistry.some((entry) => entry.sourcePath === "README.md")) errors.push("README.md: root README must not be treated as a course");
for (const indexPath of indexPaths) {
  if (!fs.existsSync(projectPath(indexPath))) errors.push(`${indexPath}: repository index is missing`);
  if (registeredPaths.has(indexPath.toLowerCase())) errors.push(`${indexPath}: repository index must not be registered content`);
}

const slugs = contentRegistry.map((entry) => entry.slug);
if (new Set(slugs).size !== slugs.length) errors.push("lib/course-catalog.ts: content slugs are not unique");
const routes = contentRegistry.map((entry) => entry.route);
if (new Set(routes).size !== routes.length) errors.push("lib/course-catalog.ts: content routes are not unique");

for (const entry of contentRegistry) {
  if (fs.existsSync(path.join(PROJECT_ROOT, path.basename(entry.sourcePath)))) errors.push(`${path.basename(entry.sourcePath)}: duplicate canonical content remains at the repository root`);
}
if (fs.existsSync(path.join(PROJECT_ROOT, "Job_Tracker.xlsx"))) errors.push("Job_Tracker.xlsx: duplicate canonical spreadsheet remains at the repository root");

const documents = [...contentRegistry.map((entry) => entry.sourcePath), ...indexPaths];
for (const sourcePath of documents) {
  if (!fs.existsSync(projectPath(sourcePath))) continue;
  const source = sourceAt(sourcePath);
  const headings = extractHeadings(source);
  const blocks = extractFencedBlocks(source);
  headingCount += headings.length;
  phaseCount += headings.filter((heading) => heading.phase !== undefined).length;
  mermaidCount += blocks.filter((block) => block.language === "mermaid").length;

  const fenceLines = source.split(/\r?\n/).filter((line) => /^\s*```/.test(line)).length;
  if (fenceLines % 2) errors.push(`${sourcePath}: unbalanced fenced code block`);
  if (headings.some((heading) => !heading.id)) errors.push(`${sourcePath}: empty heading slug`);

  for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const href = match[1].trim().replace(/^<|>$/g, "");
    const local = parseLocalHref(href);
    if (local && /\.(?:md|xlsx)$/i.test(local.hrefPath)) {
      const targetPath = resolveMarkdownSourcePath(sourcePath, local.hrefPath);
      if (!fs.existsSync(projectPath(targetPath))) errors.push(`${sourcePath}: missing internal target ${href} (resolved to ${targetPath})`);
      else if (local.fragment && /\.md$/i.test(local.hrefPath)) {
        const targetIds = new Set(extractHeadings(sourceAt(targetPath)).map((heading) => heading.id.toLowerCase()));
        let fragment = decodeURIComponent(local.fragment).toLowerCase();
        if (!targetIds.has(fragment)) fragment = fragment.replace(/---+/g, "-");
        if (!targetIds.has(fragment)) warnings.push(`${sourcePath}: unresolved heading fragment ${href}`);
      }
    }
    if (/youtube\.com\/(?:watch|playlist|shorts|embed)|youtu\.be\//i.test(href)) {
      youtubeCount++;
      if (!extractYouTubeInfo(href)) warnings.push(`${sourcePath}: unrecognized YouTube URL ${href}`);
    }
  }

  if (/\$\$/.test(source) && (source.match(/\$\$/g)?.length ?? 0) % 2) warnings.push(`${sourcePath}: odd number of block-math delimiters`);
}

for (const sourcePath of ["content/roadmaps/AI.md", "content/roadmaps/CS.md", "content/roadmaps/Data.md"]) {
  if (!/(^|[^\\])\$/.test(sourceAt(sourcePath))) errors.push(`${sourcePath}: representative formulas are no longer detectable`);
}
for (const sourcePath of ["content/roadmaps/CS.md", "content/roadmaps/Git.md", "content/roadmaps/Networks.md", "content/roadmaps/DevOps.md"]) {
  if (!extractFencedBlocks(sourceAt(sourcePath)).length) errors.push(`${sourcePath}: representative diagrams/code fences are no longer detectable`);
}
if (!mermaidCount) errors.push("content/: no Mermaid diagrams were detected");
if (!youtubeCount) errors.push("content/: no YouTube resources were detected");

for (const entry of [...roadmapRegistry, ...guideRegistry]) {
  if (!extractHeadings(sourceAt(entry.sourcePath)).some((heading) => heading.text)) errors.push(`${entry.sourcePath}: searchable headings are missing`);
}

console.log(`Validated ${contentRegistry.length} registered content files, ${headingCount} headings, ${phaseCount} phases, ${mermaidCount} Mermaid diagrams, and ${youtubeCount} YouTube links.`);
warnings.slice(0, 30).forEach((warning) => console.warn(`WARN ${warning}`));
if (warnings.length > 30) console.warn(`WARN …and ${warnings.length - 30} additional warnings`);
errors.forEach((error) => console.error(`ERROR ${error}`));
if (errors.length) process.exit(1);
