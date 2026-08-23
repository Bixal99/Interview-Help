import fs from "node:fs";
import path from "node:path";

type CanonicalLesson = { id: string; title: string; children: { id: string; title: string }[] };
type CanonicalPhase = { number: number; title: string; lessons: CanonicalLesson[] };
type CanonicalStory = { number: number; title: string };
type StoryArtifact = {
  story: number;
  kind: "story-project" | "story-checkpoint";
  number: number;
  title: string;
  children: { id: string; title: string }[];
};
type ExistingSection = { id: string; title: string; slug: string; body: string; meta: boolean };

const root = process.cwd();
const coursePath = path.join(root, "content/roadmaps/CS.md");
const hierarchyPath = process.argv[2];
if (!hierarchyPath || !fs.existsSync(hierarchyPath)) {
  throw new Error("Usage: tsx scripts/realign-cs-course.ts <hierarchy.txt>");
}

const repair = (value: string) => value
  .replaceAll("â€”", "—")
  .replaceAll("â€“", "–")
  .replaceAll("â†’", "→")
  .replaceAll("Î©", "Ω")
  .replaceAll("Î˜", "Θ")
  .replaceAll("â‰¤", "≤")
  .replaceAll("â‰¥", "≥")
  .trim();

const slugify = (value: string) => value
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

function parseHierarchy(source: string) {
  const phases = new Map<number, CanonicalPhase>();
  const stories: CanonicalStory[] = [];
  const artifacts: StoryArtifact[] = [];
  let phase: CanonicalPhase | null = null;
  let story = 0;
  let artifact: StoryArtifact | null = null;

  for (const raw of source.split(/\r?\n/)) {
    const line = repair(raw);
    const storyMatch = /STORY\s+([IVX]+)\s+[^A-Za-z0-9]+\s*(.+)$/i.exec(line);
    if (storyMatch && !/PROJECT|CHECKPOINT/i.test(line)) {
      const roman = storyMatch[1].toUpperCase();
      const values: Record<string, number> = { I: 1, V: 5, X: 10 };
      let total = 0;
      for (let i = 0; i < roman.length; i++) {
        const current = values[roman[i]];
        const next = values[roman[i + 1]] ?? 0;
        total += current < next ? -current : current;
      }
      story = total;
      stories.push({ number: total, title: repair(storyMatch[2]) });
      phase = null;
      artifact = null;
      continue;
    }
    const phaseMatch = /Phase\s+(\d+)\s+[^A-Za-z0-9]+\s*(.+)$/i.exec(line);
    if (phaseMatch) {
      phase = { number: Number(phaseMatch[1]), title: repair(phaseMatch[2]), lessons: [] };
      phases.set(phase.number, phase);
      artifact = null;
      continue;
    }
    const artifactMatch = /STORY\s+(PROJECT|CHECKPOINT)\s+(\d+)(?:\s+[^A-Za-z0-9]+\s*(.+))?$/i.exec(line);
    if (artifactMatch) {
      artifact = {
        story: story || Number(artifactMatch[2]),
        kind: artifactMatch[1].toUpperCase() === "PROJECT" ? "story-project" : "story-checkpoint",
        number: Number(artifactMatch[2]),
        title: repair(artifactMatch[3] || `Story Checkpoint ${artifactMatch[2]}`),
        children: [],
      };
      artifacts.push(artifact);
      phase = null;
      continue;
    }
    const spMatch = /\b(SP\d+\.\d+)\s+(.+)$/.exec(line);
    if (artifact && spMatch) {
      artifact.children.push({ id: spMatch[1], title: repair(spMatch[2]) });
      continue;
    }
    if (!phase) continue;
    const lessonMatch = new RegExp(`\\b(${phase.number}\\.\\d+)(?:\\.(\\d+))?\\s+(.+)$`).exec(line);
    if (!lessonMatch) continue;
    if (lessonMatch[2]) {
      const parentId = lessonMatch[1];
      const parent = phase.lessons.find((item) => item.id === parentId);
      parent?.children.push({ id: `${parentId}.${lessonMatch[2]}`, title: repair(lessonMatch[3]) });
    } else if (!phase.lessons.some((item) => item.id === lessonMatch[1])) {
      phase.lessons.push({ id: lessonMatch[1], title: repair(lessonMatch[3]), children: [] });
    }
  }
  return { stories, phases: [...phases.values()].sort((a, b) => a.number - b.number), artifacts };
}

function outsideFenceHeadings(lines: string[], pattern: RegExp) {
  const result: { index: number; match: RegExpExecArray }[] = [];
  let inFence = false;
  for (let index = 0; index < lines.length; index++) {
    if (/^\s*```/.test(lines[index])) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = pattern.exec(lines[index]);
    if (match) result.push({ index, match });
  }
  return result;
}

function tokens(value: string) {
  const replacements: Record<string, string> = {
    "ci": "continuous integration",
    "cd": "continuous deployment",
    "bst": "binary search tree",
    "dp": "dynamic programming",
    "api": "interface",
    "apis": "interface",
    "interfaces": "interface",
    "columns": "column",
    "rows": "row",
    "files": "file",
    "lists": "list",
    "trees": "tree",
    "arrays": "array",
    "strings": "string",
    "functions": "function",
    "relations": "relation",
    "gradients": "gradient",
    "derivatives": "derivative",
  };
  const stop = new Set(["a", "an", "and", "the", "of", "for", "to", "from", "vs", "what", "is", "are", "chapter"]);
  return slugify(value).split("-").flatMap((token) => (replacements[token] ?? token).split(" "))
    .filter((token) => token && !stop.has(token));
}

function isMetaTitle(title: string) {
  return /^(chapter )?(opening|roadmap|summary|closing|transition)\b/i.test(title)
    || /^unit (closing|transition)\b/i.test(title)
    || /^course closing\b/i.test(title);
}

function activityKind(title: string) {
  if (/project/i.test(title)) return "project";
  if (/lab/i.test(title)) return "lab";
  if (/practice|exercise|implementation|simulator|exploration|deliverable/i.test(title)) return "practice";
  return "concept";
}

function matchScore(canonical: string, existing: string) {
  const a = tokens(canonical);
  const b = tokens(existing);
  const shared = a.filter((token) => b.includes(token)).length;
  let score = shared / Math.max(1, new Set([...a, ...b]).size);
  const an = slugify(canonical);
  const bn = slugify(existing);
  if (an === bn) score += 5;
  if (an.includes(bn) || bn.includes(an)) score += 1.5;
  if (activityKind(canonical) === activityKind(existing)) score += 0.8;
  if (activityKind(canonical) !== "concept" && activityKind(existing) === "concept") score -= 0.8;
  return score;
}

function parseExistingPhase(block: string) {
  const lines = block.split(/\r?\n/);
  const headings = outsideFenceHeadings(lines, /^##\s+(\d+\.\d+)\s+(.+?)\s*$/);
  const first = headings[0]?.index ?? lines.length;
  const overview = lines.slice(1, first).join("\n").trim();
  const sections: ExistingSection[] = headings.map((heading, position) => {
    const end = headings[position + 1]?.index ?? lines.length;
    const id = heading.match[1];
    const title = heading.match[2].trim();
    return {
      id,
      title,
      slug: slugify(title),
      body: lines.slice(heading.index + 1, end).join("\n").replace(/\n---\s*$/g, "").trim(),
      meta: isMetaTitle(title),
    };
  });
  return { overview, sections };
}

function contextual(title: string, body: string) {
  const cleaned = body.trim();
  if (!cleaned) return "";
  return `**${title.replace(/[.:]+$/, "").toUpperCase()}:**\n\n${cleaned}`;
}

function normalizeNestedHeadings(body: string, children: CanonicalLesson["children"]) {
  const found = new Set<string>();
  let inFence = false;
  const lines = body.split(/\r?\n/).map((line) => {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      return line;
    }
    if (inFence) return line;
    const match = /^###\s+(?:\d+\.\d+\.\d+\s+)?(.+?)\s*$/.exec(line);
    if (!match) return line;
    const title = match[1].trim();
    const best = children
      .map((child) => ({ child, score: matchScore(child.title, title) }))
      .sort((a, b) => b.score - a.score)[0];
    if (best && best.score >= 1.2 && !found.has(best.child.id)) {
      found.add(best.child.id);
      return `### ${best.child.id} ${best.child.title}`;
    }
    return `**${title.replace(/[.:]+$/, "").toUpperCase()}:**`;
  });
  for (const child of children) {
    if (!found.has(child.id)) {
      lines.push("", `### ${child.id} ${child.title}`, "", childExplanation(child.title));
    }
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function childExplanation(title: string) {
  if (/convert/i.test(title)) return "Work each conversion one place value at a time, write the intermediate sum, and verify by converting the result back to the original base.";
  if (/inspect/i.test(title)) return "Encode a short ASCII word and a word containing a non-ASCII character, inspect the resulting bytes, and explain why the byte counts differ.";
  if (/tokenize/i.test(title)) return "Scan left to right and emit one token at a time. Record the token type, source text, and position so later errors can point to the correct character.";
  if (/parse/i.test(title)) return "Turn the token stream into a tree that makes precedence explicit. Parentheses must change the tree rather than merely disappear.";
  if (/evaluate/i.test(title)) return "Evaluate child nodes before their parent and record every intermediate value. Reject unknown nodes instead of guessing their meaning.";
  if (/trace/i.test(title)) return "Print or record the current instruction, state before execution, and state afterward until the program halts.";
  if (/deployment/i.test(title)) return "Write the traffic movement, health check, rollback trigger, and maximum acceptable impact before choosing this deployment method.";
  return `Complete this part as a separate checkpoint: demonstrate ${title.toLowerCase()} with a concrete input, record the result, and explain what would make the result incorrect.`;
}

const scenarios: Record<number, string> = {
  16: "a school registration system with students, courses, and enrollments",
  77: "a bookstore API commit identified by Git SHA a1b2c3 moving through CI toward production",
  78: "the same bookstore API packaged as bookstore:1.4.0 with its database kept outside the container",
  79: "a small application with a web service, managed database, object storage, and users in two regions",
  80: "a checkout whose p95 latency rose from 120 ms to 900 ms after a deployment",
  86: "a five-node cluster that must choose one leader while two nodes are temporarily unreachable",
  87: "a checkout service calling an unreliable payment provider without multiplying failures",
  95: "an Open Community Resource Exchange where members list, request, approve, borrow, and return items",
  96: "the first deployed vertical slice of the Open Community Resource Exchange",
  97: "the deployed resource exchange under load, dependency failure, and malicious input",
  98: "the evidence package that lets another engineer evaluate and run the capstone",
  99: "a forty-minute interview problem solved aloud from clarification through complexity analysis",
  100: "a timed mixed-problem session followed by an honest pattern and error journal",
  101: "a two-minute fundamentals answer that begins with a model, gives an example, and names a trade-off",
  102: "a parking-lot design interview in which requirements change after the first class diagram",
  103: "a system-design interview for a growing collaboration service",
  104: "a real capstone or maintenance event converted into a concise STAR story",
  105: "a full mock loop followed immediately by evidence-based feedback and a repair plan",
};

function wordCount(value: string) {
  return value.replace(/```[\s\S]*?```/g, " ").match(/\b[\p{L}\p{N}_'-]+\b/gu)?.length ?? 0;
}

function teachingExpansion(phase: CanonicalPhase, lesson: CanonicalLesson) {
  const scenario = scenarios[phase.number] ?? `a small ${phase.title.toLowerCase()} example that can be traced by hand`;
  const concept = lesson.title.replace(/^(PRACTICE|CODING PRACTICE|WRITTEN PRACTICE|DESIGN EXERCISE|ARCHITECTURE EXERCISE|DIAGRAM PRACTICE|TRACE EXERCISE)\s*[—-]?\s*/i, "");
  return [
    "**WORKED APPLICATION:**",
    `Make ${concept.toLowerCase()} concrete with ${scenario}. Write down the starting state and the observable result before changing anything. Then apply the concept one step at a time, recording which component owns each decision and which assumption makes the step valid. This turns an abstract label into a model you can use to predict behavior.`,
    `Now change one condition: increase the input, remove a dependency, introduce an invalid value, or make one component fail. Explain whether ${concept.toLowerCase()} still produces the intended result and what trade-off appears. A useful explanation must predict the changed outcome, not merely repeat the definition.`,
    "**CHECK YOUR MODEL:**",
    `- Explain ${concept.toLowerCase()} without using the term itself.`,
    "- Give one situation where it is the right tool and one where it would add needless complexity.",
    "- Identify the evidence—output, trace, test, metric, or diagram—that would prove your explanation correct.",
  ].join("\n\n");
}

function activityExpansion(phase: CanonicalPhase, lesson: CanonicalLesson) {
  const kind = activityKind(lesson.title);
  if (kind === "concept") return "";
  const scenario = scenarios[phase.number] ?? `the concepts from Phase ${phase.number}`;
  if (kind === "project") {
    return [
      "**BUILD BRIEF:**",
      `Build a small, testable artifact for **${lesson.title.replace(/^.*?—\s*/, "")}** using ${scenario}. Start with the smallest end-to-end behavior, then add one requirement at a time so every step remains runnable.`,
      "**IMPLEMENTATION STAGES:**",
      "1. Write the inputs, outputs, invariants, and explicit non-goals.",
      "2. Build the smallest happy path and save one example run.",
      "3. Add validation and at least two failure cases.",
      "4. Separate responsibilities into functions or modules where the phase has taught that skill.",
      "5. Add automated checks or a repeatable manual test script and document how to run it.",
      "**ACCEPTANCE CHECKS:**",
      "- A new learner can run the artifact from the written instructions.",
      "- Normal, boundary, and invalid inputs produce deliberate outcomes.",
      "- The implementation visibly uses the phase concepts rather than bypassing them with a library shortcut.",
      "- The README or design note explains one trade-off and one limitation.",
      "**STRETCH:** Measure or visualize one internal step, then compare the result before and after one improvement.",
    ].join("\n\n");
  }
  return [
    "**PROGRESSIVE PRACTICE:**",
    `| Difficulty | Task | Evidence |\n| --- | --- | --- |\n| Easy | Reproduce one small example of ${lesson.title.toLowerCase()}. | Correct result plus a one-sentence explanation |\n| Medium | Apply it to ${scenario}. | Code, calculation, query, trace, or diagram |\n| Hard | Introduce a boundary case or failure and improve the solution. | Before/after evidence and the trade-off you chose |`,
  ].join("\n\n");
}

function artifactBody(artifact: StoryArtifact) {
  const title = artifact.title || `Story Checkpoint ${artifact.number}`;
  const steps = artifact.children.map((child, index) => `${index + 1}. **${child.id} ${child.title}:** ${childExplanation(child.title)}`).join("\n");
  const checkpoint = artifact.kind === "story-checkpoint";
  return [
    `## ${checkpoint ? "STORY CHECKPOINT" : "STORY PROJECT"} ${artifact.number}${title && !/^Story Checkpoint/i.test(title) ? ` — ${title}` : ""}`,
    "",
    checkpoint
      ? "This checkpoint consolidates the story without inventing a large new application. Its purpose is to prove that you can connect the ideas, reproduce the important reasoning, and explain what you would use next."
      : `This story project combines the phases you have just completed into one coherent build. The goal is not feature count; it is evidence that the parts work together and that you understand the boundaries between them.`,
    "",
    "**PREREQUISITES:** Complete the phases in this story and keep their exercises available as references. Reuse code only when you can explain it.",
    "",
    ...artifact.children.flatMap((child) => [
      `### ${child.id} ${child.title}`,
      "",
      childExplanation(child.title),
      "",
    ]),
    "**IMPLEMENTATION PLAN:**",
    "",
    steps || "1. Review the story notes and produce a concise map of the concepts, examples, and remaining weak areas.",
    "",
    "**FAILURE CASES TO TEST:**",
    "",
    "- Empty, malformed, duplicate, or out-of-range input where applicable.",
    "- A failed dependency or interrupted operation where the story introduced external resources.",
    "- A restart or repeated request when persistence, networking, or distributed behavior is involved.",
    "- A user action that violates an invariant, permission, or accessibility expectation.",
    "",
    "**ACCEPTANCE CHECKS:**",
    "",
    "- Every numbered deliverable above has visible evidence.",
    "- The happy path and at least two failure paths are repeatable.",
    "- A short design note explains responsibilities, data flow, and one rejected alternative.",
    "- Another learner can run or review the result from the instructions alone.",
    "",
    "**STRETCH:** Add one measurement, visualization, or deliberately injected failure that exposes an internal mechanism taught in this story.",
  ].join("\n").replace(/\n{3,}/g, "\n\n");
}

const hierarchy = parseHierarchy(fs.readFileSync(hierarchyPath, "utf8"));
if (hierarchy.phases.length !== 105) throw new Error(`Expected 105 phases, found ${hierarchy.phases.length}`);

const original = fs.readFileSync(coursePath, "utf8").replace(/\r\n/g, "\n");
const canonicalLessonCount = hierarchy.phases.reduce((sum, phase) => sum + phase.lessons.length, 0);
const visibleLessonCount = outsideFenceHeadings(original.split("\n"), /^##\s+\d+\.\d+\s+/).length;
if (/^## STORY (?:PROJECT|CHECKPOINT)\s+/m.test(original) && visibleLessonCount === canonicalLessonCount) {
  throw new Error("CS.md is already realigned. Refusing to overwrite its canonical content or compatibility inventory.");
}
const originalLines = original.split("\n");
const phaseHeadings = outsideFenceHeadings(originalLines, /^# PHASE\s+(\d+)\s+-\s+(.+?)\s*$/);
if (phaseHeadings.length !== 105) throw new Error(`Expected 105 existing phases, found ${phaseHeadings.length}`);
const prefix = originalLines.slice(0, phaseHeadings[0].index).join("\n").trimEnd();

const legacyAliases: Record<string, string[]> = {};
const progressMap: Record<string, string[]> = {};
const rebuilt: string[] = [prefix];

for (const canonicalPhase of hierarchy.phases) {
  const markerPosition = phaseHeadings.findIndex((item) => Number(item.match[1]) === canonicalPhase.number);
  const marker = phaseHeadings[markerPosition];
  if (!marker) throw new Error(`Missing existing Phase ${canonicalPhase.number}`);
  const end = phaseHeadings[markerPosition + 1]?.index ?? originalLines.length;
  const existingBlock = originalLines.slice(marker.index, end).join("\n");
  const existing = parseExistingPhase(existingBlock);
  const assigned = new Map<string, ExistingSection[]>();
  const used = new Set<ExistingSection>();

  for (const lesson of canonicalPhase.lessons) {
    const ranked = existing.sections.filter((section) => !section.meta && !used.has(section))
      .map((section) => ({ section, score: matchScore(lesson.title, section.title) }))
      .sort((a, b) => b.score - a.score);
    const best = ranked[0];
    if (best && (best.score >= 0.72 || activityKind(lesson.title) === activityKind(best.section.title))) {
      assigned.set(lesson.id, [best.section]);
      used.add(best.section);
      legacyAliases[lesson.id] = [...new Set([...(legacyAliases[lesson.id] ?? []), best.section.slug])];
      progressMap[best.section.id] = [lesson.id];
    }
  }

  for (const section of existing.sections.filter((item) => !item.meta && !used.has(item))) {
    const best = canonicalPhase.lessons
      .map((lesson) => ({ lesson, score: matchScore(lesson.title, section.title) }))
      .sort((a, b) => b.score - a.score)[0];
    const destination = best?.lesson ?? canonicalPhase.lessons[canonicalPhase.lessons.length - 1];
    assigned.set(destination.id, [...(assigned.get(destination.id) ?? []), section]);
    legacyAliases[destination.id] = [...new Set([...(legacyAliases[destination.id] ?? []), section.slug])];
    progressMap[section.id] = [destination.id];
  }

  const opening = existing.sections.filter((section) => section.meta && /opening|roadmap/i.test(section.title));
  const closing = existing.sections.filter((section) => section.meta && !/opening|roadmap/i.test(section.title));
  for (const section of opening) legacyAliases[canonicalPhase.lessons[0].id] = [...new Set([...(legacyAliases[canonicalPhase.lessons[0].id] ?? []), section.slug])];
  for (const section of closing) legacyAliases[canonicalPhase.lessons.at(-1)!.id] = [...new Set([...(legacyAliases[canonicalPhase.lessons.at(-1)!.id] ?? []), section.slug])];

  rebuilt.push("", "---", "", `# PHASE ${canonicalPhase.number} - ${canonicalPhase.title}`, "", existing.overview);
  for (let index = 0; index < canonicalPhase.lessons.length; index++) {
    const lesson = canonicalPhase.lessons[index];
    const sourceSections = assigned.get(lesson.id) ?? [];
    const pieces: string[] = [];
    if (index === 0) pieces.push(...opening.map((section) => contextual(section.title, section.body)).filter(Boolean));
    sourceSections.forEach((section, position) => {
      pieces.push(position === 0 ? section.body : contextual(section.title, section.body));
    });
    if (index === canonicalPhase.lessons.length - 1) pieces.push(...closing.map((section) => contextual(section.title, section.body)).filter(Boolean));
    let body = normalizeNestedHeadings(pieces.filter(Boolean).join("\n\n"), lesson.children);
    if (!body) body = `This lesson develops **${lesson.title}** from the concrete problem it solves, then applies it to a small example you can inspect by hand.`;
    const activity = activityExpansion(canonicalPhase, lesson);
    if (activity && !/ACCEPTANCE CHECKS|PROGRESSIVE PRACTICE/i.test(body)) body += `\n\n${activity}`;
    if (wordCount(body) < 115 && activityKind(lesson.title) === "concept") body += `\n\n${teachingExpansion(canonicalPhase, lesson)}`;
    rebuilt.push("", `## ${lesson.id} ${lesson.title}`, "", body.trim());
  }

  const terminalStory = [...hierarchy.artifacts].find((item) => {
    const storyRanges = [[1, 5], [6, 15], [16, 20], [21, 30], [31, 48], [49, 54], [55, 59], [60, 65], [66, 71], [72, 80], [81, 88], [89, 91], [92, 94]];
    return storyRanges[item.story - 1]?.[1] === canonicalPhase.number;
  });
  if (terminalStory) rebuilt.push("", artifactBody(terminalStory));
}

const appendixIndex = originalLines.findIndex((line) => /^## Appendix A\b/.test(line));
if (appendixIndex >= 0) rebuilt.push("", "---", "", originalLines.slice(appendixIndex).join("\n").trim());

const nextCourse = rebuilt.join("\n").replace(/\n{4,}/g, "\n\n\n").trimEnd() + "\n";
fs.writeFileSync(coursePath, nextCourse, "utf8");

const fixtureDir = path.join(root, "tests/fixtures");
fs.mkdirSync(fixtureDir, { recursive: true });
fs.writeFileSync(path.join(fixtureDir, "cs-hierarchy.json"), JSON.stringify(hierarchy, null, 2) + "\n", "utf8");

const compatibilitySource = `// Generated by scripts/realign-cs-course.ts from the pre-realignment CS curriculum.\n` +
  `// Keep this explicit: aliases preserve URLs; the progress map is deliberately conservative.\n` +
  `export const csLegacyLessonAliases: Record<string, string[]> = ${JSON.stringify(legacyAliases, null, 2)};\n\n` +
  `export const csProgressV5LessonMap: Record<string, string[]> = ${JSON.stringify(progressMap, null, 2)};\n`;
fs.writeFileSync(path.join(root, "lib/cs-curriculum-compat.ts"), compatibilitySource, "utf8");

console.log(JSON.stringify({
  phases: hierarchy.phases.length,
  lessons: hierarchy.phases.reduce((sum, phase) => sum + phase.lessons.length, 0),
  nested: hierarchy.phases.flatMap((phase) => phase.lessons).reduce((sum, lesson) => sum + lesson.children.length, 0),
  artifacts: hierarchy.artifacts.length,
  artifactChildren: hierarchy.artifacts.reduce((sum, item) => sum + item.children.length, 0),
  legacyAliasTargets: Object.keys(legacyAliases).length,
  progressMappings: Object.keys(progressMap).length,
}, null, 2));
