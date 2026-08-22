import fs from "node:fs";
import { parseCourseMarkdown } from "../lib/parse-course";
import { extractPractice, withoutPractice } from "../lib/practice";
import { extractWhatComesNext } from "../lib/lesson-sections";

const md = fs.readFileSync("content/roadmaps/CS.md", "utf8");
const course = parseCourseMarkdown(md, { slug: "cs", sourcePath: "content/roadmaps/CS.md" } as never);
console.log("phases", course.phases?.length, "sample keys", course.phases?.[0] && Object.keys(course.phases[0]));
const phases = course.phases ?? [];
for (const n of [60, 61, 63, 65]) {
  const phase = phases.find((p: { number?: number; id?: string }) => p.number === n || p.id === String(n) || p.id === `phase-${n}`);
  console.log("phase", n, phase?.id, phase?.lessons?.map((l: { slug: string }) => l.slug));
  for (const lesson of phase?.lessons ?? []) {
    const practice = extractPractice(lesson.markdown);
    const stripped = withoutPractice(lesson.markdown, practice);
    const { whatComesNext, markdown } = extractWhatComesNext(stripped);
    console.log(
      " ",
      lesson.slug,
      "handoff?",
      Boolean(whatComesNext),
      "leftInMd?",
      /\*\*WHAT THIS UNLOCKS NEXT/i.test(markdown),
      whatComesNext?.body?.slice(0, 90),
    );
  }
}
