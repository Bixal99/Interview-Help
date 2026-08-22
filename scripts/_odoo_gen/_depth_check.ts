import { readFileSync, writeFileSync } from "fs";
import { parseCourseMarkdown } from "../../lib/parse-course.ts";

const course = parseCourseMarkdown(readFileSync("content/roadmaps/ODOO.md", "utf8"), "odoo");
const thin = course.phases.filter((p) => p.lessons.length <= 1);
const lens = thin.map((p) => ({
  id: p.id,
  title: p.title,
  lines: (p.lessons[0]?.markdown.split("\n").length || 0),
}));
lens.sort((a, b) => a.lines - b.lines);
const report = {
  thinCount: thin.length,
  shortest: lens.slice(0, 20),
  median: lens[Math.floor(lens.length / 2)],
  p53: course.phases.find((p) => p.id === "53")?.lessons.map((l) => `${l.id}:${l.title}`),
  p31lines: course.phases.find((p) => p.id === "31")?.lessons[0]?.markdown.split("\n").length,
  p49lines: course.phases.find((p) => p.id === "49")?.lessons[0]?.markdown.split("\n").length,
  p1lessons: course.phases.find((p) => p.id === "1")?.lessons.map((l) => l.id),
};
writeFileSync("scripts/_odoo_gen/_depth_report.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
