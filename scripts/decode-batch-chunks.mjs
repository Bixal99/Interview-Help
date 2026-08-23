import fs from "node:fs";
import path from "node:path";

const srcFiles = [
  "C:/Users/msi/.cursor/projects/c-Users-msi-OneDrive-Desktop-Qatar/agent-tools/64ce28bc-bce8-47fa-892a-df897f337596.txt",
  "scripts/batch-b-chunks-extra.txt",
];

let text = "";
for (const src of srcFiles) {
  if (!fs.existsSync(src)) continue;
  const raw = fs.readFileSync(src, "utf8");
  try {
    const wrapper = JSON.parse(raw);
    text += wrapper.data?.stdout ?? raw;
  } catch {
    text += raw;
  }
}

const chunks = {};
for (const line of text.split("\n")) {
  const m = line.match(/^CHUNK_(cs-batch-[ab]\.json)_(\d+): (.+)$/);
  if (!m) continue;
  const [, file, idx, b64] = m;
  if (!chunks[file]) chunks[file] = [];
  chunks[file][Number(idx)] = b64.trim();
}

const outDir = path.join("lib/learning-resources/curated/batches");
fs.mkdirSync(outDir, { recursive: true });

for (const [file, parts] of Object.entries(chunks)) {
  const b64 = parts.join("");
  const json = Buffer.from(b64, "base64").toString("utf8");
  const parsed = JSON.parse(json);
  const out = path.join(outDir, file);
  fs.writeFileSync(out, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");
  console.log(`Wrote ${out} (${Object.keys(parsed.lessons ?? {}).length} lessons)`);
}
