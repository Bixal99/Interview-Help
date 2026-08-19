import { describe, expect, it } from "vitest";
import { plainFormula, splitFormulaParts, withCodeFormulas, withMarkdownMath, wrapBareFormulas } from "../lib/format-math";

describe("formula formatting", () => {
  it("keeps delimited latex and hides the dollar signs in plain output", () => {
    const parts = splitFormulaParts("why it's $O(2^n)$");
    expect(parts).toEqual([
      { type: "text", value: "why it's " },
      { type: "math", value: "O(2^n)", display: false },
    ]);
    expect(plainFormula("why it's $O(2^n)$")).toBe("why it's O(2ⁿ)");
  });

  it("wraps Big O and leftover caret exponents in the same sentence", () => {
    const text = "The tree has about 2^n nodes, so the time is O(2^n).";
    expect(wrapBareFormulas(text)).toContain("$2^{n}$");
    expect(wrapBareFormulas(text)).toContain("$O(2^{n})$");
    expect(plainFormula(text)).toBe("The tree has about 2ⁿ nodes, so the time is O(2ⁿ).");
  });

  it("renders n^2 and log forms without leaving carets or dollars", () => {
    expect(plainFormula("one pass $O(n)$ instead of $O(n^2)$")).toBe("one pass O(n) instead of O(n²)");
    expect(plainFormula("hash map O(n) vs nested loops O(n^2)")).toBe("hash map O(n) vs nested loops O(n²)");
    expect(plainFormula("sorts are $O(n\\log n)$")).toBe("sorts are O(n log n)");
  });

  it("does not rewrite formulas inside fenced or inline code", () => {
    const markdown = "See $O(n^2)$ and `O(n^2)`.\n\n```python\nprint(\"O(2^n)\")\n```\n";
    const next = withMarkdownMath(markdown);
    expect(next).toContain("`O(n^2)`");
    expect(next).toContain('print("O(2^n)")');
    expect(next).toContain("$O(n^2)$");
  });

  it("rewrites caret complexity inside playground source so saved sessions update", () => {
    const source = `print("That branching is why the time is O(2^n), not O(n).")\nprint("about 2^n nodes")\n`;
    expect(withCodeFormulas(source)).toContain("O(2ⁿ)");
    expect(withCodeFormulas(source)).toContain("2ⁿ nodes");
    expect(withCodeFormulas(source)).not.toMatch(/O\(2\^n\)/);
  });

  it("does not leave raw 2^{n} braces in observe copy", () => {
    const observe = "The tree has about 2^n nodes, so the time is O(2^n).";
    const unicode = "The tree has about 2ⁿ nodes, so the time is O(2ⁿ).";
    const braced = "The tree has about 2^{n} nodes, so the time is O(2^{n}).";
    expect(plainFormula(observe)).toBe(unicode);
    expect(plainFormula(unicode)).toBe(unicode);
    expect(plainFormula(braced)).toBe(unicode);
    expect(wrapBareFormulas(braced)).toContain("$2^{n}$");
    expect(plainFormula(observe)).not.toMatch(/\^\{/);
  });
});
