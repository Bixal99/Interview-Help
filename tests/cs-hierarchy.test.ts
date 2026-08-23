import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { courseChapters } from "../lib/learning-paths";
import { coursePages } from "../lib/navigation";
import { findLesson, headingRouteMap, parseCourseMarkdown } from "../lib/parse-course";

type FixtureChild = { id: string; title: string };
type FixtureLesson = { id: string; title: string; children: FixtureChild[] };
type FixturePhase = { number: number; title: string; lessons: FixtureLesson[] };
type FixtureArtifact = {
  story: number;
  kind: "story-project" | "story-checkpoint";
  number: number;
  title: string;
  children: FixtureChild[];
};
type Fixture = {
  stories: { number: number; title: string }[];
  phases: FixturePhase[];
  artifacts: FixtureArtifact[];
};

const root = process.cwd();
const fixture = JSON.parse(fs.readFileSync(path.join(root, "tests/fixtures/cs-hierarchy.json"), "utf8")) as Fixture;
const markdown = fs.readFileSync(path.join(root, "content/roadmaps/CS.md"), "utf8");
const course = parseCourseMarkdown(markdown, "computer-science");

describe("Computer Science hierarchy parity", () => {
  it("keeps the 15 units in the supplied order", () => {
    const actual = courseChapters["computer-science"].map((story, index) => ({
      number: index + 1,
      title: story.title.replace(/^[IVX]+\.\s*/, "").toUpperCase(),
    }));
    expect(actual).toEqual(fixture.stories);
  });

  it("matches all 105 chapters and 881 canonical lessons exactly", () => {
    const actual = course.phases.map((phase) => ({
      number: Number(phase.number),
      title: phase.title,
      lessons: phase.lessons.filter((lesson) => lesson.kind === "lesson").map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        children: lesson.children.filter((child) => /^\d+\.\d+\.\d+$/.test(child.id)),
      })),
    }));
    const expected = fixture.phases.map((phase) => ({
      ...phase,
      lessons: phase.lessons.map((lesson) => ({
        ...lesson,
        title: lesson.title.replace(/^PHASE PROJECT\b/, "CHAPTER PROJECT"),
      })),
    }));
    expect(actual).toEqual(expected);
    expect(actual.flatMap((phase) => phase.lessons)).toHaveLength(881);
    expect(actual.flatMap((phase) => phase.lessons).flatMap((lesson) => lesson.children)).toHaveLength(17);
  });

  it("matches all 13 unit artifacts and 69 unit requirements", () => {
    const actual = course.phases.flatMap((phase) => phase.lessons)
      .filter((lesson) => lesson.kind !== "lesson")
      .map((lesson) => ({
        kind: lesson.kind,
        number: Number(lesson.id.replace(/^sp/i, "")),
        title: lesson.title.replace(/^(?:Story|Unit) (?:Project|Checkpoint) \d+(?: — )?/i, "") || lesson.title,
        children: lesson.children,
      }));
    const expected = fixture.artifacts.map(({ story: _story, ...artifact }) => ({
      ...artifact,
      title: artifact.title.replace(/^Story Checkpoint\b/, "Unit Checkpoint"),
      children: artifact.children.map((child) => ({
        ...child,
        id: child.id.replace(/^SP/i, "U"),
        title: child.title.replace(/story project/i, "unit project"),
      })),
    }));
    expect(actual).toEqual(expected);
    expect(actual).toHaveLength(13);
    expect(actual.flatMap((artifact) => artifact.children)).toHaveLength(69);
  });

  it("preserves legacy lesson slugs and orders chapter project before unit artifact", () => {
    expect(findLesson(course, "1", "chapter-opening-so-what-exactly-is-a-computer")?.id).toBe("1.1");
    for (const phase of course.phases) {
      for (const lesson of phase.lessons) {
        expect(findLesson(course, phase.id, lesson.slug)?.id).toBe(lesson.id);
      }
    }
    expect(findLesson(course, "1", "computational-thinking")?.id).toBe("1.6");
    expect(headingRouteMap(course).get("computational-thinking"))
      .toBe("/courses/computer-science/phase/1/computational-thinking");
    expect(headingRouteMap(course).get("chapter-1"))
      .toBe("/courses/computer-science/phase/1");
    expect(findLesson(course, "5", "unit-project-1-tiny-computer-simulator")?.id).toBe("sp1");
    expect(findLesson(course, "5", "story-project-1-tiny-computer-simulator")?.id).toBe("sp1");
    const phase = course.phases.find((item) => item.id === "5")!;
    phase.project = {
      id: "cs-phase-5-project",
      coursePrefix: "cs",
      phaseId: "5",
      title: "Phase project",
      markdown: "",
      sourcePath: "content/projects/computer-science.md",
    };
    const phasePages = coursePages(course).filter((page) => page.phaseId === "5");
    expect(phasePages.slice(-4).map((page) => page.kind === "lesson" ? page.lessonId : page.kind)).toEqual([
      "5.11",
      "project",
      "sp1",
      "glossary",
    ]);
    delete phase.project;
  });
});
