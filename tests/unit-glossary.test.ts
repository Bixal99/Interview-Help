import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { parseCourseMarkdown } from "../lib/parse-course";
import { coursePages } from "../lib/navigation";
import { chaptersFor } from "../lib/learning-paths";
import { buildUnitGlossary, extractLessonGlossaryTerms, glossaryPath } from "../lib/unit-glossary";

function read(path: string) {
  return readFileSync(path, "utf8");
}

describe("unit glossary", () => {
  it("places a glossary page after the last phase of every CS unit", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/CS.md"), "computer-science");
    const chapters = chaptersFor(
      "computer-science",
      course.phases.map((phase) => phase.id),
    );
    const pages = coursePages(course);
    const glossaries = pages.filter((page) => page.kind === "glossary");
    expect(glossaries).toHaveLength(chapters.length);
    expect(glossaries[0]?.href).toBe(glossaryPath("computer-science", "story-1"));
  });

  it("labels Unit I glossary by lesson with short keyword meanings", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/CS.md"), "computer-science");
    const chapters = chaptersFor(
      "computer-science",
      course.phases.map((phase) => phase.id),
    );
    const sections = buildUnitGlossary(course, chapters[0]!);
    expect(sections.length).toBeGreaterThan(20);
    expect(sections[0]?.heading).toMatch(/^1\.\d+\s+/);
    expect(sections.every((section) => section.items.length > 0)).toBe(true);
    const meanings = sections.flatMap((section) => section.items.map((item) => item.meaning));
    expect(meanings.every((meaning) => meaning.length < 160)).toBe(true);
    expect(meanings.some((meaning) => /look around\. your phone/i.test(meaning))).toBe(false);
  });

  it("fills every CS unit glossary with lesson-wise short terms", () => {
    const course = parseCourseMarkdown(read("content/roadmaps/CS.md"), "computer-science");
    const chapters = chaptersFor(
      "computer-science",
      course.phases.map((phase) => phase.id),
    );
    expect(chapters.length).toBeGreaterThan(10);
    for (const chapter of chapters) {
      const sections = buildUnitGlossary(course, chapter);
      expect(sections.length, chapter.title).toBeGreaterThan(2);
      expect(
        sections.every((section) => section.items.length > 0 && /^[\d.]+\s+/.test(section.heading)),
        chapter.title,
      ).toBe(true);
      expect(
        sections.flatMap((section) => section.items).every((item) => item.meaning.length < 160),
        chapter.title,
      ).toBe(true);
    }
  });

  it("reads only Key words tables from lesson prose", () => {
    const lesson = parseCourseMarkdown(read("content/roadmaps/CS.md"), "computer-science").phases
      .find((phase) => phase.id === "2")!
      .lessons.find((item) => item.id === "2.1")!;
    const terms = extractLessonGlossaryTerms(lesson.markdown);
    expect(terms.map((item) => item.term.toLowerCase())).toEqual(
      expect.arrayContaining(["bit", "byte"]),
    );
    expect(terms.every((item) => item.meaning.length < 120)).toBe(true);
  });
});
