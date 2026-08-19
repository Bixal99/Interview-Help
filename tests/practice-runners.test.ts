import { describe, expect, it } from "vitest";
import { getPracticeRunner, lessonHasPracticeRunners, practiceRunnerKey } from "../lib/practice-runners";

describe("practice runners", () => {
  it("maps lesson 1.1 tasks to prepared playground code", () => {
    expect(practiceRunnerKey("1.1", "task-1")).toBe("1.1:task-1");
    expect(lessonHasPracticeRunners("1.1")).toBe(true);
    expect(lessonHasPracticeRunners("9.9")).toBe(false);

    const compilerExplorer = getPracticeRunner("1.1", "task-1");
    expect(compilerExplorer?.options[0]?.language).toBe("c");
    expect(compilerExplorer?.options[0]?.code).toMatch(/add_one/);

    const timing = getPracticeRunner("1.1", "task-2");
    expect(timing?.options.map((option) => option.language)).toEqual(["python", "c"]);
    expect(timing?.options[0]?.code).toMatch(/10_000_000/);
    expect(timing?.options[1]?.code).toMatch(/10000000/);
    expect(timing?.observe).toMatch(/compiled vs interpreted/i);

    const recursion = getPracticeRunner("1.1", "task-3");
    expect(recursion?.options[0]?.code).toMatch(/RecursionError/);

    const tokenize = getPracticeRunner("1.1", "task-5");
    expect(tokenize?.options[0]?.code).toMatch(/LEFT_PAREN/);
    expect(tokenize?.options[0]?.code).toMatch(/operator/);
    expect(tokenize?.options[0]?.code).toContain('expression = "2 * (3 + 4)"');
  });
});
