import { describe, expect, it } from "vitest";
import { parseProgress, toggleProgress } from "../lib/progress-storage";

describe("progress persistence", () => {
  it("recovers safely from invalid storage and de-duplicates identifiers", () => {
    expect(parseProgress("not json")).toEqual([]);
    expect(parseProgress('["git:phase-1","git:phase-1",4]')).toEqual(["git:phase-1"]);
  });
  it("toggles a stable course-heading identifier", () => {
    expect(toggleProgress([], "git:phase-1")).toEqual(["git:phase-1"]);
    expect(toggleProgress(["git:phase-1"], "git:phase-1")).toEqual([]);
  });
});
