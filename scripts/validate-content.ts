import fs from "node:fs";
import path from "node:path";
import { getContentRegistry, getCourseCatalog, templateRegistry } from "../lib/course-catalog";
import { PROJECT_ROOT, projectPath } from "../lib/paths";
import { buildParsedCourse, listCourseDocs } from "../lib/course-tree";
import { allChapters, getCourseRoadmap } from "../lib/course-roadmap";
import { chaptersFor } from "../lib/learning-paths";

const warnings: string[] = [];
const errors: string[] = [];

const coursesRoot = path.join(PROJECT_ROOT, "content", "courses");
if (!fs.existsSync(coursesRoot)) errors.push("content/courses/: course trees missing");

const catalog = getCourseCatalog();
if (!catalog.length) errors.push("content/courses/: no courses discovered");

for (const entry of getContentRegistry()) {
  if (!fs.existsSync(projectPath(entry.sourcePath))) {
    if (entry.type === "template" || entry.slug === "master-cv-template") {
      errors.push(`${entry.sourcePath}: registered source is missing`);
    }
  }
}

if (!templateRegistry.some((entry) => entry.sourcePath === "content/templates/Master_CV_Template.md")) {
  errors.push("content/templates/Master_CV_Template.md: template is not registered");
}

for (const course of catalog) {
  const docs = listCourseDocs(course.slug);
  if (docs.length < 1) errors.push(`${course.slug}: no markdown docs found`);
  const roadmap = getCourseRoadmap(course.slug);
  const chapters = allChapters(course.slug);
  const parsed = buildParsedCourse(course.slug);
  const navChapters = chaptersFor(course.slug, parsed.phases.map((phase) => phase.id), parsed.units);
  if (!roadmap.units.length) errors.push(`${course.slug}: Roadmap.md has no units`);
  if (parsed.phases.length !== chapters.length) {
    errors.push(`${course.slug}: parsed chapters ${parsed.phases.length} != roadmap ${chapters.length}`);
  }
  if (navChapters.length !== roadmap.units.length) {
    errors.push(`${course.slug}: nav units ${navChapters.length} != roadmap ${roadmap.units.length}`);
  }
  for (const doc of docs) {
    const source = fs.readFileSync(projectPath(doc.sourcePath), "utf8");
    const fenceLines = source.split(/\r?\n/).filter((line) => /^\s*```/.test(line)).length;
    if (fenceLines % 2) errors.push(`${doc.sourcePath}: unbalanced fenced code block`);
  }
}

const slugs = catalog.map((entry) => entry.slug);
if (new Set(slugs).size !== slugs.length) errors.push("course slugs are not unique");

if (errors.length) {
  console.error("validate:content failed");
  for (const error of errors) console.error(`  ERROR ${error}`);
  for (const warning of warnings) console.warn(`  WARN ${warning}`);
  process.exit(1);
}

console.log(`validate:content ok — ${catalog.length} course(s): ${slugs.join(", ")}`);
for (const warning of warnings) console.warn(`  WARN ${warning}`);
