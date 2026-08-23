import fs from "fs";
import path from "path";

const csPath = path.join(process.cwd(), "content/roadmaps/CS.md");
const csContent = fs.readFileSync(csPath, "utf8");

const pythonFences = [...csContent.matchAll(/```(?:python|py)?\n([\s\S]*?)```/gi)];
console.log("Total Python code fences in CS.md:", pythonFences.length);

let bareFunctions = [];
for (let i = 0; i < pythonFences.length; i++) {
  const code = pythonFences[i][1];
  if (/^\s*def\s+\w+/m.test(code) && !/print\s*\(/m.test(code)) {
    bareFunctions.push({ index: i, code: code.trim() });
  }
}

console.log("Bare function definitions without print statements:", bareFunctions.length);
for (const item of bareFunctions.slice(0, 10)) {
  console.log("---");
  console.log(item.code);
}
