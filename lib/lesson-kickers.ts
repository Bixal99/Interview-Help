/**
 * Lesson semantic-section kickers.
 *
 * Content authors write bold labels like `**WHY THIS MATTERS:**` or contextual
 * titles like `**FROM THE SOCKET TO THE NETWORK:**`. The markdown renderer
 * classifies them:
 *
 * - `utility`  → always show as `h2.ih-lesson-kicker` (phase chrome / practice)
 * - `flow`     → checklist / generic teaching slots: no visible heading chrome
 *                (prose continues — template stays invisible to the learner)
 * - `heading`  → contextual journey titles: show as standalone section headings
 *
 * Do NOT use `###` for these sections: `## N.M` is reserved for lesson
 * boundaries in `parse-course.ts`, and `### N.M.K` for nested topics.
 */

export type KickerVisibility = "utility" | "flow" | "heading";

export type LessonKicker = {
  title: string;
  kind: "interview" | "section";
  visibility: KickerVisibility;
};

type KickerRule = {
  pattern: RegExp;
  title: string;
  visibility: KickerVisibility;
  kind?: "interview" | "section";
};

/**
 * Known labels. Checklist teaching moves default to `flow` so every modernized
 * lesson does not paint the same WHY → PROBLEM → HOW skeleton in the UI.
 * Utility chrome stays visible. Unknown ALL-CAPS labels are contextual headings.
 */
const KICKER_RULES: KickerRule[] = [
  // Phase utility chrome
  { pattern: /what you should know first/i, title: "Before You Start", visibility: "utility" },
  { pattern: /what you will be able to do/i, title: "What You Will Be Able To Do", visibility: "utility" },
  { pattern: /^learning resources?\b/i, title: "Learning Resources", visibility: "utility" },
  { pattern: /^practice\b/i, title: "Practice Exercises", visibility: "utility" },
  { pattern: /practice until it feels familiar/i, title: "Practice Exercises", visibility: "utility" },
  { pattern: /^what this unlocks next\b/i, title: "What This Unlocks Next", visibility: "utility" },
  { pattern: /^what comes next\b/i, title: "What Comes Next", visibility: "utility" },
  { pattern: /why the next topic is needed/i, title: "What Comes Next", visibility: "utility" },

  // Checklist / generic teaching — authoring slots, not UI form chrome
  { pattern: /why you are learning this/i, title: "Why This Matters", visibility: "flow" },
  { pattern: /why you need to learn this/i, title: "Why This Matters", visibility: "flow" },
  { pattern: /^why this matters\b/i, title: "Why This Matters", visibility: "flow" },
  { pattern: /the problem this solves/i, title: "The Problem", visibility: "flow" },
  { pattern: /^the problem\b/i, title: "The Problem", visibility: "flow" },
  { pattern: /the main idea/i, title: "The Solution", visibility: "flow" },
  { pattern: /step-by-step explanation/i, title: "How It Works", visibility: "flow" },
  { pattern: /how it works internally/i, title: "How It Works Internally", visibility: "flow" },
  { pattern: /^how it works\b/i, title: "How It Works", visibility: "flow" },
  { pattern: /see it before you memorize/i, title: "Visual Learning", visibility: "flow" },
  { pattern: /^diagram\b/i, title: "Visual Explanation", visibility: "flow" },
  { pattern: /^visual model\b/i, title: "Visual Model", visibility: "flow" },
  { pattern: /picture it like this/i, title: "Simple Real-World Analogy", visibility: "flow" },
  { pattern: /what you gain/i, title: "Trade-offs", visibility: "flow" },
  { pattern: /^trade-?offs?\b/i, title: "Trade-offs", visibility: "flow" },
  { pattern: /small working example/i, title: "Worked Example", visibility: "flow" },
  { pattern: /^worked example\b/i, title: "Worked Example", visibility: "flow" },
  { pattern: /^example\b/i, title: "Worked Example", visibility: "flow" },
  { pattern: /try it yourself/i, title: "Try It Yourself", visibility: "flow" },
  {
    pattern: /how to explain this in an interview/i,
    title: "Interview Note",
    visibility: "flow",
    kind: "interview",
  },
  { pattern: /^interview note\b/i, title: "Interview Note", visibility: "flow", kind: "interview" },
  {
    pattern: /^interview perspective\b/i,
    title: "Interview Note",
    visibility: "flow",
    kind: "interview",
  },

  // Legacy specialty titles that were already contextual in Phase 1
  { pattern: /compiler vs interpreter/i, title: "Compiler vs Interpreter", visibility: "heading" },
  { pattern: /internal working/i, title: "How Code Becomes Machine Code", visibility: "heading" },
  { pattern: /where a variable actually lives/i, title: "How a Program Uses Memory", visibility: "heading" },
];

/** Display-title pairs for tests and tooling. */
export const KICKER_TITLES: Array<[RegExp, string]> = KICKER_RULES.map((rule) => [
  rule.pattern,
  rule.title,
]);

function sentenceCase(value: string) {
  const lower = value.toLowerCase();
  return lower.replace(/^[a-z]/, (letter) => letter.toUpperCase());
}

/**
 * Returns a kicker if `label` is a known semantic section (or ALL-CAPS contextual).
 * `label` is the text inside `**...**`, with or without a trailing colon.
 */
export function parseKicker(label: string): LessonKicker | null {
  const cleaned = label.replace(/:$/, "").trim();
  if (/^notes?$/i.test(cleaned)) return null;
  const [lead] = cleaned.split(/\s+[-–—]\s+/, 2);
  for (const rule of KICKER_RULES) {
    if (rule.pattern.test(cleaned) || rule.pattern.test(lead)) {
      return {
        title: rule.title,
        kind: rule.kind ?? (/interview/i.test(rule.title) ? "interview" : "section"),
        visibility: rule.visibility,
      };
    }
  }
  const letters = lead.replace(/[^A-Za-z]/g, "");
  if (letters.length < 8) return null;
  const upperRatio = letters.replace(/[^A-Z]/g, "").length / letters.length;
  if (upperRatio < 0.8) return null;
  // Contextual journey title — visible heading, not checklist chrome
  return { title: sentenceCase(lead), kind: "section", visibility: "heading" };
}

/** Bold labels that look like section kickers but are not recognized (Title Case notes). */
export function looksLikeUnrecognizedSectionLabel(label: string): boolean {
  const cleaned = label.replace(/:$/, "").trim();
  if (cleaned.length < 6 || cleaned.length > 48) return false;
  if (parseKicker(cleaned)) return false;
  // Title Case multi-word label (2+ words) — single bold terms like **Adapter** are not sections
  return /^[A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,4}$/.test(cleaned);
}
