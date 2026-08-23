import fs from "fs";

const projText = fs.readFileSync("help/ALL_105_CHAPTERS_PROJECTS_AND_TESTS.md", "utf8");
const solText = fs.readFileSync("help/ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md", "utf8");

const projChunks = projText.split(/^###\s+Chapter\s+(\d+)\s*[-—:]\s*(.+)$/gim);
const solChunks = solText.split(/^###\s+Chapter\s+(\d+)\s*[-—:]\s*(.+)$/gim);

const solutions = {};
for (let i = 1; i < solChunks.length; i += 3) {
  const num = parseInt(solChunks[i], 10);
  const heading = solChunks[i + 1].trim();
  const body = solChunks[i + 2].trim();
  solutions[num] = { num, heading, body };
}

for (let i = 1; i < projChunks.length; i += 3) {
  const num = parseInt(projChunks[i], 10);
  const heading = projChunks[i + 1].trim();
  const body = projChunks[i + 2].trim();
  const formatMatch = /\*\s*\*\*Format:\*\*\s*(.+)/i.exec(body);
  const fmt = formatMatch ? formatMatch[1].trim() : "";
  
  const sol = solutions[num];
  const codeBlocks = [...sol.body.matchAll(/```([a-z0-9_-]*)\n([\s\S]*?)```/gi)];
  
  const isCoding = /coding|python|sql|tooling|shell|terminal|load-testing|sprint/i.test(fmt) && !/no coding needed/i.test(fmt);
  
  console.log(`Ch ${num.toString().padStart(3)} | ${isCoding ? 'CODE' : 'NOTE'} | Blocks: ${codeBlocks.length} | ${fmt.slice(0, 45)}`);
}
