import { describe, expect, it } from "vitest";
import { roadmapRegistry } from "../lib/course-catalog";
import {
  COURSE_ICON_BY_SLUG,
  SEARCH_TYPE_ICONS,
  TECHNOLOGY_BY_SLUG,
  resolveTechnology,
  type CourseIconName,
} from "../lib/icons";
import type { SearchHit } from "../lib/learning-model";

const searchTypes: SearchHit["type"][] = [
  "course",
  "phase",
  "lesson",
  "concept",
  "project",
  "interview",
  "command",
  "example",
];

describe("icon registry", () => {
  it("assigns one stable course icon to every catalog slug", () => {
    for (const course of roadmapRegistry) {
      expect(COURSE_ICON_BY_SLUG[course.slug]).toBe(course.icon);
      expect(course.icon).toBeTruthy();
    }
    const icons = new Set(roadmapRegistry.map((course) => course.icon));
    expect(icons.size).toBe(roadmapRegistry.length);
  });

  it("keeps course icons typed as CourseIconName", () => {
    const names: CourseIconName[] = roadmapRegistry.map((course) => course.icon);
    expect(names).toContain("computerScience");
    expect(names).toContain("devops");
    expect(names).toContain("itAdministration");
  });

  it("maps every search result type to an icon", () => {
    for (const type of searchTypes) {
      expect(SEARCH_TYPE_ICONS[type]).toBeTruthy();
    }
  });

  it("falls back to visible text for unknown or logo-less technologies", () => {
    expect(resolveTechnology("not-a-real-tech")).toMatchObject({ hasLogo: false, title: "Not A Real Tech" });
    expect(resolveTechnology("windows")).toMatchObject({ hasLogo: false, title: "Windows" });
    expect(resolveTechnology("amazonwebservices")).toMatchObject({ hasLogo: false, title: "AWS" });
    expect(resolveTechnology("python")).toMatchObject({ hasLogo: true, title: "Python" });
  });

  it("only lists technologies that exist in the registry", () => {
    for (const course of roadmapRegistry) {
      for (const slug of course.technologies ?? []) {
        expect(TECHNOLOGY_BY_SLUG[slug], `${course.slug} unknown tech ${slug}`).toBeTruthy();
      }
    }
  });
});
