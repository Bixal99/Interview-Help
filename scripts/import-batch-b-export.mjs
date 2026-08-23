import fs from "node:fs";
import path from "node:path";

const exportPath = process.argv[2];
if (!exportPath) {
  console.error("Usage: node scripts/import-batch-b-export.mjs <composio-response.json>");
  process.exit(1);
}

const wrapper = JSON.parse(fs.readFileSync(exportPath, "utf8"));
const batch = JSON.parse(wrapper.data.stdout);
const out = path.join("lib/learning-resources/curated/batches/cs-batch-b.json");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, `${JSON.stringify(batch, null, 2)}\n`, "utf8");
console.log(`Wrote ${out} (${Object.keys(batch.lessons).length} lessons)`);
