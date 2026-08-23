import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { parseCourseMarkdown } from "../lib/parse-course";
import { courseChapters } from "../lib/learning-paths";
import { courseCatalog } from "../lib/course-catalog";
import { shortenForSidebar } from "../lib/sidebar-shorten";

mkdirSync("lib/sidebar-aliases", { recursive: true });

for (const course of courseCatalog) {
  if (course.slug === "computer-science") continue;
  const md = readFileSync(course.sourcePath, "utf8");
  const parsed = parseCourseMarkdown(md, course.slug);
  const chapters = courseChapters[course.slug] ?? [];
  const units: Record<string, string> = {};
  for (const ch of chapters) {
    const match = ch.title.match(/^([IVXLCDM]+)\.\s*(.+)$/i);
    units[ch.id] = match
      ? `Unit ${match[1].toUpperCase()}. ${shortenForSidebar(match[2])}`
      : shortenForSidebar(ch.title);
  }
  const phases: Record<string, string> = {};
  const lessons: Record<string, string> = {};
  const children: Record<string, string> = {};
  for (const phase of parsed.phases) {
    phases[phase.id] = shortenForSidebar(phase.title);
    for (const lesson of phase.lessons) {
      if (lesson.kind === "story-project") lessons[lesson.id] = "Story Project";
      else if (lesson.kind === "story-checkpoint") lessons[lesson.id] = "Checkpoint";
      else lessons[lesson.id] = shortenForSidebar(lesson.title);
      for (const child of lesson.children ?? []) {
        children[child.id] = shortenForSidebar(child.title);
      }
    }
  }
  writeFileSync(
    `lib/sidebar-aliases/${course.slug}.json`,
    JSON.stringify({ units, phases, lessons, children, project: "Project" }, null, 2),
  );
  console.log(course.slug, Object.keys(phases).length, Object.keys(lessons).length);
}
