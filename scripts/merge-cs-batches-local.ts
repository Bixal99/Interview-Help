#!/usr/bin/env tsx
/**
 * Merge Composio batch A/B into curated/computer-science.json with CS.md ID fixes.
 */
import fs from "node:fs";
import path from "node:path";

const batchesDir = path.join(process.cwd(), "lib/learning-resources/curated/batches");
const target = path.join(process.cwd(), "lib/learning-resources/curated/computer-science.json");

type Resource = Record<string, unknown>;
type Batch = { lessons?: Record<string, Resource[]>; phases?: Record<string, Resource[]>; projects?: Record<string, Resource[]> };

function loadBatch(name: string): Batch {
  const file = path.join(batchesDir, name);
  if (!fs.existsSync(file)) {
    console.error(`Missing ${file}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

const batchA = loadBatch("cs-batch-a.json");
const batchB = loadBatch("cs-batch-b.json");
const fixes = fs.existsSync(path.join(batchesDir, "cs-batch-fixes.json"))
  ? (JSON.parse(fs.readFileSync(path.join(batchesDir, "cs-batch-fixes.json"), "utf8")) as Batch)
  : { lessons: {} };

const current = fs.existsSync(target)
  ? JSON.parse(fs.readFileSync(target, "utf8"))
  : { lessons: {}, phases: {}, projects: {} };

const merged: Record<string, Resource[]> = { ...current.lessons };

// Batch A: hardware + language fundamentals (IDs verified against CS.md)
Object.assign(merged, batchA.lessons ?? {});

// Batch B: control flow + data structures (apply remaps before merge)
const b = { ...(batchB.lessons ?? {}) };

// 7.8 Mutability — batch B mislabeled this as 10.6
if (b["10.6"]) {
  merged["7.8"] = b["10.6"];
  delete b["10.6"];
}

// 11.2 Reading Files — batch B had file reading at 11.3
if (b["11.3"]) merged["11.2"] = b["11.3"];

// 11.3 Writing Files — batch B had file writing at 11.4
if (b["11.4"]) merged["11.3"] = b["11.4"];

// 10.5 Iteration — batch B had list comprehensions; prefer fixes file or 8.3 for-loops
if (fixes.lessons?.["10.5"]) {
  merged["10.5"] = fixes.lessons["10.5"];
} else if (b["8.3"]) {
  merged["10.5"] = b["8.3"].map((r) => ({
    ...r,
    description: String(r.description).replace("for loops", "iteration over collections"),
  }));
}

// 10.6 Nested Collections
if (fixes.lessons?.["10.6"]) {
  merged["10.6"] = fixes.lessons["10.6"];
}

// 11.4 JSON
if (fixes.lessons?.["11.4"]) {
  merged["11.4"] = fixes.lessons["11.4"];
}

// Remaining batch B lessons (skip remapped / corrected source keys)
const skip = new Set(["10.5", "10.6", "11.2", "11.3", "11.4"]);
for (const [id, resources] of Object.entries(b)) {
  if (skip.has(id)) continue;
  merged[id] = resources;
}

current.lessons = merged;
fs.writeFileSync(target, `${JSON.stringify(current, null, 2)}\n`, "utf8");

const added = Object.keys(merged).length;
console.log(`Merged ${added} total CS lesson entries into ${target}`);
