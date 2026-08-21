/**
 * Lesson semantic-section kickers.
 *
 * Content authors write bold labels like `**WHY THIS MATTERS:**`. The markdown
 * renderer promotes matching labels to `h2.ih-lesson-kicker` so they read as
 * standalone section headings (Phase 1 rhythm), not compact inline notes.
 *
 * Do NOT use `###` for these sections: `## N.M` is reserved for lesson
 * boundaries in `parse-course.ts`, and `### N.M.K` for nested topics.
 */

export type LessonKicker = { title: string; kind: "interview" | "section" };

/** Canonical vocabulary → display title (CSS uppercases via `.ih-lesson-kicker`). */
export const KICKER_TITLES: Array<[RegExp, string]> = [
  // Legacy Phase 1-style vocabulary (Stories I–III and other courses)
  [/why you are learning this/i, "Why You Need to Learn This"],
  [/why you need to learn this/i, "Why You Need to Learn This"],
  [/the problem this solves/i, "The Problem"],
  [/the main idea/i, "The Solution"],
  [/step-by-step explanation/i, "How the Solution Works"],
  [/compiler vs interpreter/i, "Compiler vs Interpreter"],
  [/internal working/i, "How Code Becomes Machine Code"],
  [/where a variable actually lives/i, "How a Program Uses Memory"],
  [/see it before you memorize/i, "Visual Learning"],
  [/^diagram\b/i, "Visual Explanation"],
  [/how it works internally/i, "How It Works Internally"],
  [/picture it like this/i, "Simple Real-World Analogy"],
  [/what you gain/i, "Trade-offs & Limitations"],
  [/small working example/i, "Working Example"],
  [/try it yourself/i, "Try It Yourself"],
  [/how to explain this in an interview/i, "Interview Preparation"],
  [/practice until it feels familiar/i, "Practice Exercises"],
  [/why the next topic is needed/i, "What Comes Next"],
  [/what you should know first/i, "Before You Start"],
  [/what you will be able to do/i, "What You Will Be Able To Do"],

  // Lean / canonical semantic vocabulary (Stories IV–V onward; all courses)
  [/^why this matters\b/i, "Why This Matters"],
  [/^the problem\b/i, "The Problem"],
  [/^how it works\b/i, "How It Works"],
  [/^visual model\b/i, "Visual Model"],
  [/^worked example\b/i, "Worked Example"],
  [/^example\b/i, "Worked Example"],
  [/^trade-?offs?\b/i, "Trade-offs"],
  [/^learning resources?\b/i, "Learning Resources"],
  [/^interview note\b/i, "Interview Note"],
  [/^interview perspective\b/i, "Interview Note"],
  [/^what this unlocks next\b/i, "What This Unlocks Next"],
  [/^what comes next\b/i, "What Comes Next"],
  [/^practice\b/i, "Practice Exercises"],
];

function sentenceCase(value: string) {
  const lower = value.toLowerCase();
  return lower.replace(/^[a-z]/, (letter) => letter.toUpperCase());
}

/**
 * Returns a kicker if `label` is a known semantic section (or ALL-CAPS fallback).
 * `label` is the text inside `**...**`, with or without a trailing colon.
 */
export function parseKicker(label: string): LessonKicker | null {
  const cleaned = label.replace(/:$/, "").trim();
  if (/^notes?$/i.test(cleaned)) return null;
  const [lead] = cleaned.split(/\s+[-–—]\s+/, 2);
  for (const [pattern, title] of KICKER_TITLES) {
    if (pattern.test(cleaned) || pattern.test(lead)) {
      return { title, kind: /interview/i.test(title) ? "interview" : "section" };
    }
  }
  const letters = lead.replace(/[^A-Za-z]/g, "");
  if (letters.length < 8) return null;
  const upperRatio = letters.replace(/[^A-Z]/g, "").length / letters.length;
  if (upperRatio < 0.8) return null;
  return { title: sentenceCase(lead), kind: "section" };
}

/** Bold labels that look like section kickers but are not recognized (Title Case notes). */
export function looksLikeUnrecognizedSectionLabel(label: string): boolean {
  const cleaned = label.replace(/:$/, "").trim();
  if (cleaned.length < 6 || cleaned.length > 48) return false;
  if (parseKicker(cleaned)) return false;
  // Title Case multi-word label (2+ words) — single bold terms like **Adapter** are not sections
  return /^[A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,4}$/.test(cleaned);
}
