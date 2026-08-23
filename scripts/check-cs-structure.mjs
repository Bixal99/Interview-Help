import fs from "node:fs";
import path from "node:path";

// Verifies content/roadmaps/CS.md against structural expectations:
//  - global invariants (105 phases, anchors, balanced fences, playground count)
//  - exact lesson-tree equality against rewritten part files in .tmp-parts/
const root = process.cwd();
const mdPath = path.join(root, "content/roadmaps/CS.md");
const partsDir = path.join(root, ".tmp-parts");
const EXPECTED_PHASES = 105;
    const EXPECTED_PLAYGROUNDS = 100;

const errors = [];

function splitLines(text) {
  return text.split(/\r?\n/);
}

function parseStructure(markdown) {
  const lines = splitLines(markdown);
  let inFence = false;
  const phases = [];
  const anchors = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const anchor = /^\s*<a\s+id=["']phase-(\d+)["']\s*><\/a>\s*$/.exec(line);
    if (anchor) {
      anchors.push(Number(anchor[1]));
      continue;
    }
    const phase = /^#\s+PHASE\s+(\d+)\s+-\s+(.+?)\s*$/.exec(line);
    if (phase) {
      phases.push({ n: Number(phase[1]), title: phase[2], index: i, lessons: [] });
      continue;
    }
    const lesson = /^##\s+(\d+)\.(\d+)\s+(.+?)\s*$/.exec(line);
    if (lesson && phases.length) {
      phases[phases.length - 1].lessons.push({
        id: `${lesson[1]}.${lesson[2]}`,
        phase: Number(lesson[1]),
        title: lesson[3],
        index: i,
      });
      continue;
    }
    if (/^#{1}\s+/i.test(line) && !/^#\s+PHASE/i.test(line) && phases.length === 0) continue; // front matter H1
  }
  return { phases, anchors };
}

function fenceBalance(text) {
  const lines = splitLines(text);
  let open = 0;
  for (const line of lines) {
    if (/^\s*```/.test(line)) open ^= 1;
  }
  return open === 0;
}

function countFences(text) {
  return splitLines(text).filter((line) => /^\s*```/.test(line)).length;
}

const markdown = fs.readFileSync(mdPath, "utf8");
if (!fenceBalance(markdown)) errors.push("CS.md: unbalanced fenced code blocks");
const { phases } = parseStructure(markdown);

if (phases.length !== EXPECTED_PHASES) errors.push(`CS.md: expected ${EXPECTED_PHASES} phases, found ${phases.length}`);
for (let i = 0; i < phases.length; i++) {
  if (phases[i].n !== i + 1) errors.push(`CS.md: phase at position ${i} has number ${phases[i].n}`);
}
for (const phase of phases) {
  for (const lesson of phase.lessons) {
    if (Number(lesson.id.split(".")[0]) !== phase.n) errors.push(`CS.md: lesson ${lesson.id} sits under PHASE ${phase.n}`);
  }
}
const seenIds = new Set();
for (const phase of phases) {
  for (const lesson of phase.lessons) {
    if (seenIds.has(lesson.id)) errors.push(`CS.md: duplicate lesson id ${lesson.id}`);
    seenIds.add(lesson.id);
  }
}

const playgroundCount = (markdown.match(/^```[^\n]*playground=/gm) ?? []).length;
if (playgroundCount !== EXPECTED_PLAYGROUNDS) errors.push(`CS.md: expected ${EXPECTED_PLAYGROUNDS} playground fences, found ${playgroundCount}`);

// Compare rewritten part files against the corresponding CS.md slices.
if (fs.existsSync(partsDir)) {
  const partFiles = fs.readdirSync(partsDir).filter((f) => /^unit-\d+(?:-ch\d+)?\.md$/.test(f)).sort(comparePartNames);
  for (const file of partFiles) {
    const partText = fs.readFileSync(path.join(partsDir, file), "utf8");
    if (!fenceBalance(partText)) errors.push(`${file}: unbalanced fenced code blocks`);
    const parsedPart = parseStructure(partText);
    if (!parsedPart.phases.length) {
      errors.push(`${file}: no PHASE headings found`);
      continue;
    }
    const first = parsedPart.phases[0].n;
    const last = parsedPart.phases[parsedPart.phases.length - 1].n;
    for (const phase of parsedPart.phases) {
      const live = phases.find((p) => p.n === phase.n);
      if (!live) {
        errors.push(`${file}: PHASE ${phase.n} not found in CS.md`);
        continue;
      }
      const want = phase.lessons.map((l) => `${l.id} ${l.title}`);
      const got = live.lessons.map((l) => `${l.id} ${l.title}`);
      if (want.length !== got.length || want.some((w, i) => w !== got[i])) {
        errors.push(
          `${file}: PHASE ${phase.n} lesson tree mismatch\n  want: ${want.join(" | ") || "(none)"}\n  got:  ${got.join(" | ") || "(none)"}`,
        );
      }
      if ((live.title ?? "").trim() !== phase.title.trim()) {
        errors.push(`${file}: PHASE ${phase.n} title mismatch: want "${phase.title}", got "${live.title}"`);
      }
    }
    // Chrome-label audit restricted to the phases this part covers.
    const chromeLabels = [
      "WHY YOU ARE LEARNING THIS",
      "THE PROBLEM THIS SOLVES",
      "SEE IT BEFORE YOU MEMORIZE IT",
      "STEP-BY-STEP EXPLANATION",
      "THE MAIN IDEA IN SIMPLE WORDS",
      "WHY THE NEXT TOPIC IS NEEDED",
      "PICTURE IT LIKE THIS",
    ];
    for (const phase of parsedPart.phases) {
      const start = markdown.indexOf(`# PHASE ${phase.n} -`);
      const endMarker = phase.n < EXPECTED_PHASES ? `# PHASE ${phase.n + 1} -` : null;
      const end = endMarker ? markdown.indexOf(endMarker) : markdown.length;
      if (start < 0 || (endMarker && end < 0)) {
        errors.push(`CS.md: cannot locate PHASE ${phase.n} span for chrome audit`);
        continue;
      }
      const chunk = markdown.slice(start, end);
      for (const label of chromeLabels) {
        if (chunk.includes(label)) errors.push(`PHASE ${phase.n}: leftover chrome label "${label}"`);
      }
    }
  }
}

function comparePartNames(a, b) {
  const pa = a.replace(/\.md$/, "").split("-").map(Number);
  const pb = b.replace(/\.md$/, "").split("-").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d) return d;
  }
  return a.localeCompare(b);
}

if (errors.length) {
  console.error(`check-cs-structure: ${errors.length} problem(s)`);
  for (const e of errors) console.error(`ERROR ${e}`);
  process.exit(1);
}
console.log(
  `check-cs-structure: OK (${phases.length} phases, ${
    phases.reduce((acc, p) => acc + p.lessons.length, 0)
  } lessons, ${playgroundCount} playground fences)`,
);
