import { readFileSync } from "node:fs";
import { parseCourseMarkdown } from "../lib/parse-course";
import { chaptersFor } from "../lib/learning-paths";

const course = parseCourseMarkdown(readFileSync("content/roadmaps/CS.md", "utf8"), "computer-science");
const chapters = chaptersFor(
  "computer-science",
  course.phases.map((phase) => phase.id),
);

for (const chapter of chapters) {
  const lessons: string[] = [];
  for (const phaseId of chapter.phaseIds) {
    const phase = course.phases.find((item) => item.id === phaseId);
    if (!phase) continue;
    for (const lesson of phase.lessons) {
      if (lesson.kind !== "lesson") continue;
      if (/^(practice|lab|mini project|phase project|coding practice)/i.test(lesson.title)) continue;
      lessons.push(`${lesson.id} ${lesson.title}`);
    }
  }
  console.log(`\n# ${chapter.title} (${lessons.length})`);
  for (const line of lessons) console.log(line);
}
