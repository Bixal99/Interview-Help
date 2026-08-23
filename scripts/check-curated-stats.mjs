import fs from "fs";

const data = JSON.parse(fs.readFileSync("lib/learning-resources/curated/computer-science.json", "utf8"));
console.log("Total lessons with curated resources in computer-science.json:", Object.keys(data.lessons).length);

let videoCount = 0;
let repoCount = 0;
let interactiveCount = 0;
let articleCount = 0;

for (const [lessonId, resList] of Object.entries(data.lessons)) {
  for (const r of resList) {
    if (r.type === "video") videoCount++;
    else if (r.type === "repo" || r.type === "github") repoCount++;
    else if (r.type === "interactive" || r.type === "tool") interactiveCount++;
    else articleCount++;
  }
}

console.log(`Stats: Videos: ${videoCount}, Repos: ${repoCount}, Interactive/Tools: ${interactiveCount}, Articles/Docs: ${articleCount}`);
