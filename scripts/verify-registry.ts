import fs from "fs";
import { CS_PROJECTS_REGISTRY } from "../lib/cs-projects-registry.js";

console.log("Total CS projects in registry:", Object.keys(CS_PROJECTS_REGISTRY).length);

let notepadCount = 0;
let compilerCount = 0;
const emptyCode = [];

for (let i = 1; i <= 105; i++) {
  const p = CS_PROJECTS_REGISTRY[i];
  if (!p) {
    console.error("Missing chapter", i);
    continue;
  }
  if (p.workspaceType === "notepad") {
    notepadCount++;
    if (!p.solutionMarkdown || p.solutionMarkdown.length < 50) {
      console.warn(`Chapter ${i} notepad solution is suspiciously short! Length:`, p.solutionMarkdown?.length);
    }
  } else {
    compilerCount++;
    if (!p.starterCode || p.starterCode.length < 50) {
      emptyCode.push(i);
      console.warn(`Chapter ${i} compiler starter code is suspiciously short! Length:`, p.starterCode?.length);
    }
  }
}

console.log(`Summary: Notepad projects: ${notepadCount}, Compiler projects: ${compilerCount}`);
console.log("Empty or short code chapters:", emptyCode);
