import { describe, expect, it } from "vitest";
import { looksLikeUnrecognizedSectionLabel, parseKicker } from "../lib/lesson-kickers";

describe("lesson kickers", () => {
  it("promotes legacy Phase 1 labels with flow visibility for teaching chrome", () => {
    expect(parseKicker("WHY YOU ARE LEARNING THIS:")).toMatchObject({
      title: "Why This Matters",
      visibility: "flow",
    });
    expect(parseKicker("THE PROBLEM THIS SOLVES")).toMatchObject({
      title: "The Problem",
      visibility: "flow",
    });
    expect(parseKicker("STEP-BY-STEP EXPLANATION")).toMatchObject({
      title: "How It Works",
      visibility: "flow",
    });
  });

  it("keeps checklist teaching slots as flow (invisible template)", () => {
    expect(parseKicker("Why This Matters:")?.visibility).toBe("flow");
    expect(parseKicker("WHY THIS MATTERS")?.visibility).toBe("flow");
    expect(parseKicker("The Problem:")?.visibility).toBe("flow");
    expect(parseKicker("How It Works:")?.visibility).toBe("flow");
    expect(parseKicker("Visual Model")?.visibility).toBe("flow");
    expect(parseKicker("Example")?.visibility).toBe("flow");
    expect(parseKicker("WORKED EXAMPLE")?.visibility).toBe("flow");
    expect(parseKicker("Trade-offs")?.visibility).toBe("flow");
    expect(parseKicker("Interview note:")?.visibility).toBe("flow");
  });

  it("keeps utility chrome as visible headings", () => {
    expect(parseKicker("Learning Resources")).toMatchObject({
      title: "Learning Resources",
      visibility: "utility",
    });
    expect(parseKicker("Practice")).toMatchObject({
      title: "Practice Exercises",
      visibility: "utility",
    });
    expect(parseKicker("What This Unlocks Next:")).toMatchObject({
      title: "What This Unlocks Next",
      visibility: "utility",
    });
    expect(parseKicker("WHAT YOU SHOULD KNOW FIRST")).toMatchObject({
      title: "Before You Start",
      visibility: "utility",
    });
  });

  it("promotes contextual ALL-CAPS journey titles as visible headings", () => {
    expect(parseKicker("FROM THE SOCKET TO THE NETWORK:")).toMatchObject({
      title: "From the socket to the network",
      visibility: "heading",
    });
    expect(parseKicker("ONE PACKET, FOUR ENVELOPES")).toMatchObject({
      visibility: "heading",
    });
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
