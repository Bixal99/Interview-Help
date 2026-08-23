#!/usr/bin/env tsx
/**
 * Composio-backed resource curation workflow.
 *
 * 1. Run `npm run build:resources` to extract inline markdown resources and list gaps.
 * 2. Use Composio MCP (YouTube search + web search) to research topic-specific resources.
 * 3. Add verified entries to `lib/learning-resources/curated/{course}.json` keyed by lesson id.
 * 4. Re-run `npm run build:resources` to merge curated + extracted data into `data/*.json`.
 *
 * Gaps file: lib/learning-resources/gaps.json
 */
import fs from "node:fs";
import path from "node:path";

type Gap = { course: string; phaseId: string; lessonId: string; title: string };

const gapsPath = path.join(process.cwd(), "lib/learning-resources/gaps.json");
const gaps = JSON.parse(fs.readFileSync(gapsPath, "utf8")) as Gap[];

const byCourse = gaps.reduce<Record<string, Gap[]>>((acc, gap) => {
  (acc[gap.course] ??= []).push(gap);
  return acc;
}, {});

console.log("Resource curation gaps by course:");
for (const [course, items] of Object.entries(byCourse)) {
  console.log(`  ${course}: ${items.length} lessons`);
}

const sample = gaps.slice(0, 20);
console.log("\nNext 20 lessons needing Composio research:");
for (const gap of sample) {
  console.log(`  [${gap.course}] ${gap.lessonId} — ${gap.title} (phase ${gap.phaseId})`);
}

console.log(`
Composio research checklist per lesson:
  1. Read lesson markdown context (title + phase topic)
  2. YOUTUBE_SEARCH_YOU_TUBE with topic-specific query (not generic)
  3. COMPOSIO_SEARCH_WEB for documentation / interactive tools / GitHub
  4. Verify URL relevance and difficulty level
  5. Add 2-5 curated resources to lib/learning-resources/curated/{course}.json
  6. npm run build:resources
`);
