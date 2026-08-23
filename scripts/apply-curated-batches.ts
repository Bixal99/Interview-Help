#!/usr/bin/env tsx
/**
 * Merge curated batch JSON files into lib/learning-resources/curated/computer-science.json
 * Usage: npx tsx scripts/apply-curated-batches.ts lib/learning-resources/curated/batches/*.json
 */
import fs from "node:fs";
import path from "node:path";

const files = process.argv.slice(2);
if (!files.length) {
  console.error("Provide one or more batch JSON files");
  process.exit(1);
}

const target = path.join(process.cwd(), "lib/learning-resources/curated/computer-science.json");
const current = fs.existsSync(target)
  ? JSON.parse(fs.readFileSync(target, "utf8"))
  : { lessons: {}, phases: {}, projects: {} };

let added = 0;
for (const file of files) {
  const batch = JSON.parse(fs.readFileSync(file, "utf8")) as {
    lessons?: Record<string, unknown[]>;
  };
  for (const [id, resources] of Object.entries(batch.lessons ?? {})) {
    current.lessons[id] = resources;
    added += 1;
  }
}

fs.writeFileSync(target, `${JSON.stringify(current, null, 2)}\n`, "utf8");
console.log(`Applied ${added} lessons from ${files.length} batch file(s) to ${target}`);
