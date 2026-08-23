import { describe, expect, it } from "vitest";
import { getPracticeRunner, hasCuratedRunner, lessonHasPracticeRunners, practiceRunnerKey } from "../lib/practice-runners";

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

    const fib = getPracticeRunner("2.1", "task-3");
    expect(fib?.options[0]?.code).toMatch(/O\(2ⁿ\)/);

    expect(hasCuratedRunner("1.1", "task-1")).toBe(true);
    expect(hasCuratedRunner("3.1", "task-1")).toBe(false);
  });

  it("falls back to a topic-matched, runnable reference solution for un-curated coding items", () => {
    const sorting = getPracticeRunner("3.1", "task-1", "Implement a function that sorts this list");
    expect(sorting?.options[0]?.code).toMatch(/def bubble_sort/);

    const searching = getPracticeRunner("3.1", "task-2", "Write a function to search a sorted array");
    expect(searching?.options[0]?.code).toMatch(/def binary_search/);
  });

  it("falls back to a clean, runnable starter when no topic matches", () => {
    const generic = getPracticeRunner("3.1", "task-9", "Write a program that reverses a string");
    expect(generic?.options[0]?.code).toMatch(/def solve\(\):/);
    expect(generic?.options[0]?.code).toContain("Write a program that reverses a string");
  });
});
