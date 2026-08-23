import fs from "node:fs";
import path from "node:path";

const [label, outPath, ...jsonParts] = process.argv.slice(2);
if (!label || !outPath || !jsonParts.length) {
  console.error("Usage: node scripts/save-workbench-json.mjs <label> <outPath> <json>");
  process.exit(1);
}

const raw = jsonParts.join(" ");
const data = JSON.parse(raw);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(`Wrote ${label} (${Object.keys(data.lessons ?? {}).length} lessons) -> ${outPath}`);
