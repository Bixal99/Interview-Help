import fs from "node:fs";
import path from "node:path";
import { courseCatalog } from "../lib/course-catalog";
import { extractFencedBlocks, extractHeadings, extractYouTubeInfo, markdownRouteMap } from "../lib/content-utils";

const root = process.cwd();
const markdownFiles = fs.readdirSync(root).filter((file) => file.toLowerCase().endsWith(".md"));
const byLower = new Map(markdownFiles.map((file) => [file.toLowerCase(), file]));
const warnings: string[] = [];
const errors: string[] = [];
let headingCount = 0, phaseCount = 0, mermaidCount = 0, youtubeCount = 0;

for (const file of markdownFiles) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const headings = extractHeadings(source);
  const ids = new Set(headings.map((heading) => heading.id));
  const blocks = extractFencedBlocks(source);
  headingCount += headings.length;
  phaseCount += headings.filter((heading) => heading.phase !== undefined).length;
  mermaidCount += blocks.filter((block) => block.language === "mermaid").length;

  const fenceLines = source.split(/\r?\n/).filter((line) => /^\s*```/.test(line)).length;
  if (fenceLines % 2) errors.push(`${file}: unbalanced fenced code block`);

  for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const href = match[1].trim().replace(/^<|>$/g, "");
    const internal = !/^https?:\/\//i.test(href) ? /^(?:\.\/)?([^#?]+\.md)(#[^?\s]*)?/i.exec(href) : null;
    if (internal) {
      const target = internal[1].replace(/\\/g, "/").split("/").pop()!.toLowerCase();
      const targetFile = byLower.get(target);
      if (!targetFile) errors.push(`${file}: missing internal target ${internal[1]}`);
      else if (internal[2]) {
        const targetIds = new Set(extractHeadings(fs.readFileSync(path.join(root, targetFile), "utf8")).map((heading) => heading.id));
        const fragment = internal[2].slice(1).toLowerCase();
        if (!targetIds.has(fragment) && !targetIds.has(fragment.replace(/---+/g, "-"))) warnings.push(`${file}: unresolved heading fragment ${href}`);
      }
    }
    if (/youtube\.com\/(?:watch|playlist|shorts|embed)|youtu\.be\//i.test(href)) {
      youtubeCount++;
      if (!extractYouTubeInfo(href)) warnings.push(`${file}: unrecognized YouTube URL ${href}`);
    }
  }

  if (/\$\$/.test(source) && (source.match(/\$\$/g)?.length ?? 0) % 2) warnings.push(`${file}: odd number of block-math delimiters`);
  if (headings.some((heading) => !heading.id)) errors.push(`${file}: empty heading slug`);
  void ids;
}

const slugs = courseCatalog.map((course) => course.slug);
if (new Set(slugs).size !== slugs.length) errors.push("Course slugs are not unique");
for (const course of courseCatalog) {
  if (!byLower.has(course.file.toLowerCase())) errors.push(`Catalog source missing: ${course.file}`);
  if (!markdownRouteMap[course.file.toLowerCase()]) errors.push(`Route mapping missing: ${course.file}`);
}

console.log(`Validated ${markdownFiles.length} Markdown files, ${headingCount} headings, ${phaseCount} phases, ${mermaidCount} Mermaid diagrams, and ${youtubeCount} YouTube links.`);
warnings.slice(0, 30).forEach((warning) => console.warn(`WARN ${warning}`));
if (warnings.length > 30) console.warn(`WARN …and ${warnings.length - 30} additional warnings`);
errors.forEach((error) => console.error(`ERROR ${error}`));
if (errors.length) process.exit(1);
