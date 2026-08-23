import { describe, expect, it } from "vitest";
import {
  canEnterTrailPhase,
  chapterProgress,
  groupIntoMilestones,
  isPhaseCleared,
  lessonProgressPercent,
  lessonTrailFillLength,
  lessonTrailFillPercent,
  mapLessonFrontier,
  plainText,
  trailFillPercent,
  trailStatuses,
} from "../lib/progress-map";

const phases = [
  { id: "1", hasProject: true, lessonIds: ["1.1", "1.2", "1.3", "1.4"] },
  { id: "2", hasProject: true, lessonIds: ["2.1", "2.2"] },
  { id: "3", hasProject: false, lessonIds: ["3.1"] },
  { id: "4", hasProject: true, lessonIds: ["4.1", "4.2"] },
];

describe("progress map", () => {
  it("starts the trail on the first phase", () => {
    expect(trailStatuses(phases, [])).toEqual(["here", "locked", "locked", "locked"]);
  });

  it("keeps the chapter current after lessons until its project is complete", () => {
    expect(trailStatuses(phases, ["1.1", "1.2", "1.3", "1.4"], "1")).toEqual(["here", "locked", "locked", "locked"]);
  });

  it("opens the next phase after all lessons and the project are complete", () => {
    expect(trailStatuses(phases, ["1.1", "1.2", "1.3", "1.4"], "1", undefined, ["1"])).toEqual(["cleared", "here", "locked", "locked"]);
  });

  it("keeps the current incomplete phase as here", () => {
    expect(trailStatuses(phases, ["1.1", "1.2", "1.3", "1.4"], "2", "2.1", ["1"])).toEqual(["cleared", "here", "locked", "locked"]);
  });

  it("does not jump the trail to a far chapter just because it was visited once", () => {
    // Completed early lessons AND somehow marked late ones — current is still chapter 2.
    const completed = ["1.1", "1.2", "1.3", "1.4", "2.1", "2.2", "3.1", "4.1", "4.2"];
    expect(mapLessonFrontier(phases, completed, "2", "2.1")).toBe(4); // 2.1 is flat index 4
    expect(trailStatuses(phases, completed, "2", "2.1", ["1"])[0]).toBe("cleared");
    expect(trailStatuses(phases, completed, "2", "2.1", ["1"])[1]).toBe("here");
  });

  it("fills ants only to the current lesson when later lessons were also completed", () => {
    const completed = ["1.1", "1.2", "1.3", "1.4", "2.1", "2.2", "3.1", "4.1", "4.2"];
    // On chapter 1 lesson 2 — ants must stop at the 2nd of 4 dots, not at chapter 4.
    expect(mapLessonFrontier(phases, completed, "1", "1.2")).toBe(1);
    const nodeLengths = [50, 150, 250, 350];
    const fill = lessonTrailFillLength(phases, completed, nodeLengths, 400, "1", "1.2");
    // 2nd of 4 lessons on segment 50→150: inset 40, span 20 → 50 + 40 + 20/3 ≈ 96.67
    expect(fill).toBeCloseTo(50 + 40 + 20 / 3, 5);
  });

  it("stops ants on the last lesson of a chapter when it is current but incomplete", () => {
    const completed = ["1.1", "1.2", "1.3"];
    const nodeLengths = [50, 150, 250, 350];
    const fill = lessonTrailFillLength(phases, completed, nodeLengths, 400, "1", "1.4");
    expect(fill).toBeLessThan(150);
    expect(fill).toBeCloseTo(50 + 40 + 20, 5);
  });

  it("places fill on the second lesson dot between chapter 1 and 2", () => {
    const completed = ["1.1", "1.2"];
    expect(mapLessonFrontier(phases, completed, "1", "1.2")).toBe(1);
    expect(lessonTrailFillPercent(phases, completed, "1", "1.2")).toBeGreaterThan(0);
    expect(lessonTrailFillPercent(phases, completed, "1", "1.2")).toBeLessThan(50);
  });

  it("does not paint every future stop open before earlier lessons are complete", () => {
    const openTrail = [
      { id: "1", hasProject: false, lessonIds: ["1.1"] },
      { id: "2", hasProject: false, lessonIds: ["2.1"] },
      { id: "3", hasProject: false, lessonIds: ["3.1"] },
      { id: "4", hasProject: false, lessonIds: ["4.1"] },
      { id: "5", hasProject: false, lessonIds: ["5.1"] },
      { id: "6", hasProject: false, lessonIds: ["6.1"] },
    ];
    expect(trailStatuses(openTrail, [])).toEqual(["here", "locked", "locked", "locked", "locked", "locked"]);
    expect(trailStatuses(openTrail, ["1.1"])).toEqual(["cleared", "here", "locked", "locked", "locked", "locked"]);
  });

  it("gates on the previous phase lessons and project", () => {
    expect(canEnterTrailPhase(1, phases, [])).toBe(false);
    expect(canEnterTrailPhase(1, phases, ["1.1", "1.2", "1.3", "1.4"])).toBe(false);
    expect(canEnterTrailPhase(1, phases, ["1.1", "1.2", "1.3", "1.4"], ["1"])).toBe(true);
    expect(isPhaseCleared(phases[2], [])).toBe(false);
    expect(isPhaseCleared(phases[2], ["3.1"])).toBe(true);
  });

  it("calculates lesson percent from completed lesson ids", () => {
    expect(lessonProgressPercent([], ["1.1", "1.2", "2.1"])).toBe(0);
    expect(lessonProgressPercent(["1.1"], ["1.1", "1.2", "2.1"])).toBe(33);
    expect(lessonProgressPercent(["1.1", "1.2", "2.1"], ["1.1", "1.2", "2.1"])).toBe(100);
  });

  it("fills the lesson trail contiguously from the start", () => {
    expect(lessonTrailFillPercent(phases, [])).toBe(0);
    expect(lessonTrailFillPercent(phases, ["1.1", "1.2"], "1", "1.2")).toBeGreaterThan(0);
    expect(lessonTrailFillPercent(phases, ["1.1", "1.2", "1.3", "1.4", "2.1", "2.2", "3.1", "4.1", "4.2"])).toBe(100);
  });

  it("fills the stepper to the last cleared node only", () => {
    expect(trailFillPercent(["here", "locked", "locked"])).toBe(0);
    expect(trailFillPercent(["cleared", "here", "locked"])).toBe(0);
    expect(trailFillPercent(["cleared", "cleared", "cleared"])).toBe(100);
    expect(trailFillPercent(["open", "here", "locked"])).toBe(0);
    expect(trailFillPercent(["cleared", "cleared", "here", "locked", "locked"])).toBe(25);
  });

  it("groups long courses onto four winding milestones", () => {
    expect(groupIntoMilestones([1, 2, 3, 4]).map((group) => group.length)).toEqual([1, 1, 1, 1]);
    expect(groupIntoMilestones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]).map((group) => group.length)).toEqual([4, 4, 3, 3]);
  });

  it("strips markdown markers from chapter summaries", () => {
    expect(plainText("How **source code** becomes `instructions`.")).toBe("How source code becomes instructions.");
  });

  it("summarizes chapter progress from statuses", () => {
    expect(chapterProgress(["cleared", "here", "locked"])).toEqual({ cleared: 1, total: 3, done: false });
  });
});
