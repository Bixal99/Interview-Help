import { describe, expect, it } from "vitest";
import { extractWhatComesNext } from "../lib/lesson-sections";
import { extractPractice, withoutPractice } from "../lib/practice";

describe("narrative handoff extraction", () => {
  const lesson = `## 60.1 From Files to Databases

Teaching prose here.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy       | Name one file failure mode |

**WHAT THIS UNLOCKS NEXT:**

Surviving is not querying. SQL is Phase 61.

---

> **Phase 60 complete?** [Continue to Phase 61](#phase-61)
`;

  it("stops Practice before WHAT THIS UNLOCKS NEXT", () => {
    const practice = extractPractice(lesson);
    expect(practice).not.toBeNull();
    expect(practice!.raw).toContain("Name one file failure mode");
    expect(practice!.raw).not.toContain("WHAT THIS UNLOCKS NEXT");
    expect(practice!.raw).not.toContain("SQL is Phase 61");
  });

  it("extracts WHAT THIS UNLOCKS NEXT after Practice is stripped", () => {
    const practice = extractPractice(lesson);
    const stripped = withoutPractice(lesson, practice);
    const { markdown, whatComesNext } = extractWhatComesNext(stripped);
    expect(whatComesNext?.body).toContain("SQL is Phase 61");
    expect(markdown).not.toMatch(/\*\*WHAT THIS UNLOCKS NEXT/i);
  });

  it("still accepts legacy WHY THE NEXT TOPIC IS NEEDED", () => {
    const { whatComesNext } = extractWhatComesNext(`intro

**WHY THE NEXT TOPIC IS NEEDED:**

Bits come next.

---
`);
    expect(whatComesNext?.body).toContain("Bits come next");
  });

  it("accepts WHAT COMES NEXT", () => {
    const { whatComesNext } = extractWhatComesNext(`intro

**WHAT COMES NEXT:**

Views are next.

---
`);
    expect(whatComesNext?.body).toContain("Views are next");
  });
});
