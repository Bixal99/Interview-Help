import { describe, expect, it } from "vitest";
import { classifyPracticeTask } from "../lib/practice-classify";

describe("classifyPracticeTask", () => {
  it("classifies written/by-hand prompts as written", () => {
    expect(classifyPracticeTask("Pick a daily app and identify one input, one processing step, and one output it produces")).toBe("written");
    expect(classifyPracticeTask("Take \"make a cup of tea\" and rewrite it as an algorithm: remove all ambiguity, handle the missing case (no milk), and make sure it always terminates")).toBe("written");
    expect(classifyPracticeTask("Describe a problem from your own life using decomposition, pattern recognition, abstraction, and step-by-step thinking")).toBe("written");
    expect(classifyPracticeTask("Write down, in numbered steps precise enough for a stranger to follow exactly, how you tie a shoelace")).toBe("written");
    expect(classifyPracticeTask("Reproduce one small example of practice — written / by hand.")).toBe("written");
  });

  it("classifies explicit coding prompts as coding", () => {
    expect(classifyPracticeTask("Implement a function that sorts this list")).toBe("coding");
    expect(classifyPracticeTask("Write a program in Python that reverses a string")).toBe("coding");
    expect(classifyPracticeTask("Fix the bug in this function")).toBe("coding");
    expect(classifyPracticeTask("Write a SQL query to find duplicate rows")).toBe("coding");
  });
});
