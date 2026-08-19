import { describe, expect, it } from "vitest";
import { canEnterTrailPhase, chapterProgress, groupIntoMilestones, isPhaseCleared, plainText, trailFillPercent, trailStatuses } from "../lib/progress-map";

const phases = [
  { id: "1", hasProject: true },
  { id: "2", hasProject: true },
  { id: "3", hasProject: false },
  { id: "4", hasProject: true },
];

describe("progress map", () => {
  it("starts the trail on the first phase", () => {
    expect(trailStatuses(phases, [], [])).toEqual(["here", "locked", "locked", "locked"]);
  });

  it("opens the next phase after a project is cleared", () => {
    expect(trailStatuses(phases, ["1"], [], "1")).toEqual(["cleared", "here", "locked", "locked"]);
  });

  it("keeps the current incomplete phase as here", () => {
    expect(trailStatuses(phases, ["1"], [], "2")).toEqual(["cleared", "here", "locked", "locked"]);
  });

  it("keeps the stored current phase as here even if earlier projects are incomplete", () => {
    expect(trailStatuses(phases, [], [], "2")).toEqual(["open", "here", "locked", "locked"]);
  });

  it("opens skipped stops behind a later stored current phase", () => {
    expect(trailStatuses(phases, [], [], "4")).toEqual(["open", "open", "open", "here"]);
  });

  it("does not gate on a phase with no project", () => {
    expect(canEnterTrailPhase(3, phases, ["1", "2"], [])).toBe(true);
    expect(isPhaseCleared(phases[2], [], ["3"])).toBe(true);
  });

  it("fills the stepper to the current node", () => {
    expect(trailFillPercent(["here", "locked", "locked"])).toBe(0);
    expect(trailFillPercent(["cleared", "here", "locked"])).toBe(50);
    expect(trailFillPercent(["cleared", "cleared", "cleared"])).toBe(100);
  });

  it("groups long courses onto four winding milestones", () => {
    expect(groupIntoMilestones([1, 2, 3, 4]).map((group) => group.length)).toEqual([1, 1, 1, 1]);
    expect(groupIntoMilestones([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]).map((group) => group.length)).toEqual([4, 4, 3, 3]);
  });

  it("strips markdown markers from chapter summaries", () => {
    expect(plainText("How **source code** becomes `instructions`.")).toBe("How source code becomes instructions.");
  });
});
