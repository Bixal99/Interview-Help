import { describe, expect, it } from "vitest";

const KEYWORDS = /\b(compilers?|interpreters?|variables?|function calls?|recursive calls?|network requests?|electrical signals?|the stack|the heap|pointers?|process(?:es)?|CPU|bytecode|machine code|source code|runtime|loops?|stack overflow|Big O)\b/gi;

function matches(text: string) {
  return [...text.matchAll(new RegExp(KEYWORDS.source, "gi"))].map((m) => m[0]);
}

describe("keyword emphasis", () => {
  it("matches process and processes", () => {
    expect(/\bprocess(?:es)?\b/i.test('"a process")')).toBe(true);
    expect(/\bprocess(?:es)?\b/i.test("two processes")).toBe(true);
  });

  it("bolds quoted process in the roadmap intro", () => {
    const text = 'every later concept ("the stack," "a pointer," "a process") stays';
    expect(matches(text)).toEqual(["the stack", "pointer", "process"]);
  });
});
