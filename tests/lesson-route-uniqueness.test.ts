import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { courseCatalog } from "../lib/course-catalog";
import { findLesson, parseCourseMarkdown } from "../lib/parse-course";

describe("canonical lesson routes", () => {
  for (const definition of courseCatalog) {
    it(`resolves every ${definition.title} slug to its own lesson`, () => {
      const source = fs.readFileSync(path.join(process.cwd(), definition.sourcePath), "utf8");
      const course = parseCourseMarkdown(source, definition.slug);

      for (const phase of course.phases) {
        const slugs = phase.lessons.map((lesson) => lesson.slug);
        expect(new Set(slugs).size, `${definition.slug} phase ${phase.id} has duplicate canonical slugs`)
          .toBe(slugs.length);

        for (const lesson of phase.lessons) {
          expect(
            findLesson(course, phase.id, lesson.slug)?.id,
            `${definition.slug}/${phase.id}/${lesson.slug} resolved to the wrong lesson`,
          ).toBe(lesson.id);
        }
      }
    });
  }
});
