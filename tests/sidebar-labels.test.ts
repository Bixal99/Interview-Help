import { describe, expect, it } from "vitest";
import {
  sidebarLessonLabel,
  sidebarPhaseLabel,
  sidebarUnitLabel,
  sidebarProjectLabel,
} from "../lib/sidebar-labels";
import { shortenForSidebar } from "../lib/sidebar-shorten";

describe("sidebar shorten", () => {
  it("creates semantic shorts instead of ellipsis chops", () => {
    expect(shortenForSidebar("Problems, Inputs, Outputs, and Instructions")).toBe("Problems & Inputs");
    expect(shortenForSidebar("CS vs Programming vs Software Engineering")).toMatch(/CS vs Programming/i);
    expect(shortenForSidebar("PRACTICE — Written / By Hand")).toBe("Practice");
    expect(shortenForSidebar("Authentication and Authorization")).toMatch(/Authentication/i);
    expect(shortenForSidebar("Fetch → Decode → Execute")).toBe("Fetch-Decode-Execute");
    expect(shortenForSidebar("Unit Project 1 — Tiny Computer Simulator")).toBe("Unit Project 1");
  });

  it("keeps slash lists readable without a trailing slash", () => {
    expect(shortenForSidebar("Best / Average / Worst Case")).toBe("Best / Average / Worst Case");
  });

  it("uses curated CS complexity lesson labels", () => {
    expect(sidebarLessonLabel("computer-science", "31.4", "Best / Average / Worst Case")).toBe(
      "Best / Avg / Worst",
    );
    expect(sidebarLessonLabel("computer-science", "31.5", "Big-Ω")).toBe("Big-Ω");
    expect(sidebarLessonLabel("computer-science", "31.1", "Big-O")).toBe("Big-O");
  });
});

describe("sidebar labels", () => {
  it("uses curated CS unit and phase aliases", () => {
    expect(sidebarUnitLabel("computer-science", "story-1", "I. Before You Write Code")).toBe(
      "Unit I. Introduction",
    );
    expect(sidebarPhaseLabel("computer-science", "1", "What Is Computer Science?")).toBe("What Is CS");
    expect(sidebarPhaseLabel("computer-science", "2", "How Computers Represent Information")).toBe(
      "Data Representation",
    );
  });

  it("uses curated CS lesson aliases and keeps full title as fallback input only", () => {
    expect(
      sidebarLessonLabel("computer-science", "1.1", "Problems, Inputs & Outputs"),
    ).toBe("Problems & Inputs");
    expect(
      sidebarLessonLabel("computer-science", "1.3", "CS vs Programming vs Software Engineering"),
    ).toBe("CS vs Programming");
    expect(sidebarLessonLabel("computer-science", "1.7", "PRACTICE — Written / By Hand")).toBe(
      "Practice",
    );
    expect(
      sidebarLessonLabel("computer-science", "4.4", "Fetch → Decode → Execute"),
    ).toBe("Fetch-Decode-Execute");
    expect(sidebarProjectLabel("computer-science")).toBe("Project");
  });

  it("falls back to semantic shortening when an id has no alias", () => {
    expect(sidebarLessonLabel("computer-science", "missing.1", "Floating-Point Number Representation")).toMatch(
      /Floating/i,
    );
  });
});
