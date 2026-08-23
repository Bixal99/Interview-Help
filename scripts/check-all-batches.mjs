import fs from "fs";
import path from "path";

const batchesDir = "lib/learning-resources/curated/batches";
const batchFiles = fs.readdirSync(batchesDir);
console.log("Found batch files:", batchFiles);

let allLessons = {};

for (const file of batchFiles) {
  if (!file.endsWith(".json")) continue;
  try {
    const content = JSON.parse(fs.readFileSync(path.join(batchesDir, file), "utf8"));
    const lessons = content.lessons || content;
    let count = 0;
    for (const [k, v] of Object.entries(lessons)) {
      if (Array.isArray(v)) {
        if (!allLessons[k]) allLessons[k] = [];
        // Add unique by url
        for (const item of v) {
          if (!allLessons[k].some(existing => existing.url === item.url || (existing.title && existing.title === item.title))) {
            allLessons[k].push(item);
          }
        }
        count++;
      }
    }
    console.log(`Loaded ${count} lesson entries from ${file}`);
  } catch (e) {
    console.error(`Error loading ${file}:`, e.message);
  }
}

console.log("Total unique lessons across all batches:", Object.keys(allLessons).length);
