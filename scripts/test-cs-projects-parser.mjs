import fs from "fs";
import path from "path";

const projText = fs.readFileSync("help/ALL_105_CHAPTERS_PROJECTS_AND_TESTS.md", "utf8");
const solText = fs.readFileSync("help/ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md", "utf8");

// Parse projects
const projChunks = projText.split(/^###\s+Chapter\s+(\d+)\s*[-—:]\s*(.+)$/gim);
console.log("projChunks raw count:", projChunks.length);

const projects = {};
for (let i = 1; i < projChunks.length; i += 3) {
  const num = parseInt(projChunks[i], 10);
  const heading = projChunks[i + 1].trim();
  const body = projChunks[i + 2].trim();
  
  const formatMatch = /\*\s*\*\*Format:\*\*\s*(.+)/i.exec(body);
  const whyMatch = /\*\s*\*\*Why[^*]*\*\*\s*(.+)/i.exec(body);
  const projTitleMatch = /\*\s*\*\*Project\s*\/\s*Test:\*\*\s*(.+)/i.exec(body);
  const probMatch = /\*\s*\*\*Problem Statement:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*|\n---|$)/i.exec(body);
  const checklistMatch = /\*\s*\*\*Task Checklist:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*|\n---|$)/i.exec(body);
  
  projects[num] = {
    chapter: num,
    chapterTitle: heading,
    format: formatMatch ? formatMatch[1].trim() : "",
    why: whyMatch ? whyMatch[1].trim() : "",
    projectTitle: projTitleMatch ? projTitleMatch[1].replace(/\*\*/g, "").replace(/^["']|["']$/g, "").trim() : heading,
    problemStatement: probMatch ? probMatch[1].trim() : "",
    checklist: checklistMatch ? checklistMatch[1].trim() : "",
    raw: body
  };
}

console.log("Parsed projects count:", Object.keys(projects).length);
const missingProj = [];
for (let i = 1; i <= 105; i++) {
  if (!projects[i]) missingProj.push(i);
}
console.log("Missing project numbers:", missingProj);

// Parse solutions
const solChunks = solText.split(/^###\s+Chapter\s+(\d+)\s*[-—:]\s*(.+)$/gim);
console.log("solChunks raw count:", solChunks.length);

const solutions = {};
for (let i = 1; i < solChunks.length; i += 3) {
  const num = parseInt(solChunks[i], 10);
  const heading = solChunks[i + 1].trim();
  const body = solChunks[i + 2].trim();
  
  solutions[num] = {
    chapter: num,
    title: heading,
    solutionMarkdown: body
  };
}

console.log("Parsed solutions count:", Object.keys(solutions).length);
const missingSol = [];
for (let i = 1; i <= 105; i++) {
  if (!solutions[i]) missingSol.push(i);
}
console.log("Missing solution numbers:", missingSol);
