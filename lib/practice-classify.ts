/**
 * Decides whether a practice item is a coding task (belongs in the code
 * playground/compiler) or a written task (belongs in a plain notepad with
 * no "run" button and no output). Curated runners in `practice-runners.ts`
 * always win — if a human already wired up real code for an item, it is a
 * coding task by definition. This classifier only judges the remaining,
 * un-curated items.
 */

const CODING_SIGNALS: RegExp[] = [
  /\bimplement\b/i,
  /\bwrite (?:a |an )?(?:function|program|script|method|class|module|query)\b/i,
  /\b(?:the |your )?code\b/i,
  /\bfunction that\b/i,
  /\bclass that\b/i,
  /\bin (?:python|javascript|typescript|java|c\+\+|c#|go|rust|sql|html|css)\b/i,
  /\bsql query\b/i,
  /\bregular expression\b|\bregex\b/i,
  /\brun (?:the|this) (?:program|code|script)\b/i,
  /\bdebug\b/i,
  /\bfix the bug\b|\brepair (?:the|this) (?:program|code|function)\b/i,
  /\bcompile\b/i,
  /\bunit test\b/i,
  /\bcommand line\b|\bterminal\b/i,
  /\bgit (?:commit|branch|merge|rebase)\b/i,
  /\bAPI (?:call|endpoint|request)\b/i,
  /\bwrite a query\b/i,
];

const WRITTEN_SIGNALS: RegExp[] = [
  /\bby hand\b/i,
  /\bon paper\b/i,
  /\bin your own words\b/i,
  /\bwithout (?:code|a computer|scrolling)\b/i,
  /\bexplain\b/i,
  /\bdescribe\b/i,
  /\bidentify\b/i,
  /\bwrite down\b/i,
  /\bparagraph\b/i,
  /\bdraw\b|\bsketch\b|\bdiagram\b/i,
  /\bsentence\b/i,
  /\bnumbered steps\b/i,
  /\bcompare\b/i,
  /\bhand-trace\b|\bhand trace\b/i,
  /\breproduce one small example\b/i,
  /\bapply it to the concepts\b/i,
  /\bintroduce a boundary case\b/i,
  /\bmodel\b.*\bon paper\b/i,
  /\bestimate\b/i,
  /\bpick a daily\b/i,
];

export type PracticeTaskKind = "coding" | "written";

export function classifyPracticeTask(label: string): PracticeTaskKind {
  const codingScore = CODING_SIGNALS.reduce((total, pattern) => total + (pattern.test(label) ? 1 : 0), 0);
  const writtenScore = WRITTEN_SIGNALS.reduce((total, pattern) => total + (pattern.test(label) ? 1 : 0), 0);
  if (writtenScore > codingScore) return "written";
  if (codingScore > 0) return "coding";
  return "written";
}
