#!/usr/bin/env tsx
import fs from "node:fs";
import path from "node:path";
import { courseCatalog } from "../lib/course-catalog";
import { buildAllResourceBundles, bundleToEntries, writeResourceDataFiles } from "../lib/learning-resources/build";

function main() {
  const bundles = writeResourceDataFiles();
  let lessonTotal = 0;
  let lessonWith = 0;
  const gaps: { course: string; phaseId: string; lessonId: string; title: string }[] = [];

  for (const course of courseCatalog) {
    const markdown = fs.readFileSync(path.join(process.cwd(), course.sourcePath), "utf8");
    const { parseCourseMarkdown } = require("../lib/parse-course") as typeof import("../lib/parse-course");
    const parsed = parseCourseMarkdown(markdown, course.slug);
    const bundle = bundles[course.slug];

    for (const phase of parsed.phases) {
      for (const lesson of phase.lessons) {
        if (lesson.kind !== "lesson") continue;
        lessonTotal += 1;
        const resources = bundle.lessons[lesson.id]?.length
          ? bundle.lessons[lesson.id]
          : (bundle.phases[phase.id] ?? []);
        if (resources.length) {
          lessonWith += 1;
        } else {
          gaps.push({ course: course.slug, phaseId: phase.id, lessonId: lesson.id, title: lesson.title });
        }
      }
    }
  }

  const gapPath = path.join(process.cwd(), "lib/learning-resources/gaps.json");
  fs.writeFileSync(gapPath, `${JSON.stringify(gaps, null, 2)}\n`, "utf8");

  const entries = Object.entries(bundles).flatMap(([slug, bundle]) => bundleToEntries(slug, bundle));
  console.log(`Wrote ${Object.keys(bundles).length} course resource files (${entries.length} scoped entries)`);
  console.log(`Lesson coverage: ${lessonWith}/${lessonTotal} (${Math.round((lessonWith / lessonTotal) * 100)}%)`);
  console.log(`Gaps written to lib/learning-resources/gaps.json (${gaps.length} lessons)`);
}

main();
