#!/usr/bin/env tsx
import fs from "node:fs";
import path from "node:path";

const curatedPath = process.argv[2];
const course = process.argv[3] ?? "computer-science";
if (!curatedPath) {
  console.error("Usage: tsx scripts/merge-curated-batch.ts <batch.json> [course-slug]");
  process.exit(1);
}

const batch = JSON.parse(fs.readFileSync(curatedPath, "utf8")) as {
  lessons?: Record<string, unknown[]>;
  phases?: Record<string, unknown[]>;
  projects?: Record<string, unknown[]>;
};

const target = path.join(process.cwd(), "lib/learning-resources/curated", `${course}.json`);
const current = fs.existsSync(target)
  ? JSON.parse(fs.readFileSync(target, "utf8"))
  : { lessons: {}, phases: {}, projects: {} };

for (const section of ["lessons", "phases", "projects"] as const) {
  Object.assign(current[section], batch[section] ?? {});
}

fs.writeFileSync(target, `${JSON.stringify(current, null, 2)}\n`, "utf8");
const added = Object.keys(batch.lessons ?? {}).length;
console.log(`Merged ${added} lesson entries into ${target}`);
