import { describe, expect, it } from "vitest";
import { looksLikeUnrecognizedSectionLabel, parseKicker } from "../lib/lesson-kickers";

describe("lesson kickers", () => {
  it("promotes legacy Phase 1 labels", () => {
    expect(parseKicker("WHY YOU ARE LEARNING THIS:")?.title).toBe("Why You Need to Learn This");
    expect(parseKicker("THE PROBLEM THIS SOLVES")?.title).toBe("The Problem");
    expect(parseKicker("STEP-BY-STEP EXPLANATION")?.title).toBe("How the Solution Works");
  });

  it("promotes lean canonical labels (Story IV–V style)", () => {
    expect(parseKicker("Why This Matters:")?.title).toBe("Why This Matters");
    expect(parseKicker("WHY THIS MATTERS")?.title).toBe("Why This Matters");
    expect(parseKicker("The Problem:")?.title).toBe("The Problem");
    expect(parseKicker("How It Works:")?.title).toBe("How It Works");
    expect(parseKicker("Visual Model")?.title).toBe("Visual Model");
    expect(parseKicker("Example")?.title).toBe("Worked Example");
    expect(parseKicker("WORKED EXAMPLE")?.title).toBe("Worked Example");
    expect(parseKicker("Trade-offs")?.title).toBe("Trade-offs");
    expect(parseKicker("Learning Resources")?.title).toBe("Learning Resources");
    expect(parseKicker("Interview note:")?.title).toBe("Interview Note");
    expect(parseKicker("What This Unlocks Next:")?.title).toBe("What This Unlocks Next");
    expect(parseKicker("Practice")?.title).toBe("Practice Exercises");
  });

  it("does not treat short bold phrases as kickers", () => {
    expect(parseKicker("Note:")).toBeNull();
    expect(parseKicker("Factory")).toBeNull();
  });

  it("flags title-case unknown section-like labels", () => {
    expect(looksLikeUnrecognizedSectionLabel("Random Compact Label")).toBe(true);
    expect(looksLikeUnrecognizedSectionLabel("Why This Matters")).toBe(false);
    expect(looksLikeUnrecognizedSectionLabel("Adapter")).toBe(false);
  });
});
