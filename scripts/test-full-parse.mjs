import fs from "fs";

const projText = fs.readFileSync("help/ALL_105_CHAPTERS_PROJECTS_AND_TESTS.md", "utf8");
const solText = fs.readFileSync("help/ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md", "utf8");

function parseAll() {
  const projSections = projText.split(/(?=^###\s+Chapter\s+\d+)/gim).filter(s => /^###\s+Chapter\s+\d+/i.test(s.trim()));
  const solSections = solText.split(/(?=^###\s+Chapter\s+\d+)/gim).filter(s => /^###\s+Chapter\s+\d+/i.test(s.trim()));

  console.log("projSections count:", projSections.length);
  console.log("solSections count:", solSections.length);

  const projectsMap = {};
  for (const sec of projSections) {
    const headerMatch = /^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)/im.exec(sec);
    if (!headerMatch) continue;
    const num = parseInt(headerMatch[1], 10);
    const heading = headerMatch[2].trim();
    
    const formatMatch = /\*\s*\*\*Format:\*\*\s*([^\n]+)/i.exec(sec);
    const whyMatch = /\*\s*\*\*Why[^*]*\*\*\s*([^\n]+)/i.exec(sec);
    const projTitleMatch = /\*\s*\*\*Project\s*\/\s*Test:\*\*\s*([^\n]+)/i.exec(sec);
    const probMatch = /\*\s*\*\*Problem Statement:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*|\n---|$)/i.exec(sec);
    const checklistMatch = /\*\s*\*\*Task Checklist:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*|\n---|$)/i.exec(sec);
    
    const format = formatMatch ? formatMatch[1].trim() : "";
    const isCode = /coding|python|sql|tooling|shell|terminal|load-testing|sprint/i.test(format) && !/no coding needed/i.test(format);
    
    projectsMap[num] = {
      num,
      chapterTitle: heading,
      format,
      why: whyMatch ? whyMatch[1].trim() : "",
      projectTitle: projTitleMatch ? projTitleMatch[1].replace(/\*\*/g, "").replace(/^["']|["']$/g, "").trim() : heading,
      problemStatement: probMatch ? probMatch[1].trim() : "",
      checklist: checklistMatch ? checklistMatch[1].trim() : "",
      isCode,
      raw: sec
    };
  }

  const solutionsMap = {};
  for (const sec of solSections) {
    const headerMatch = /^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)/im.exec(sec);
    if (!headerMatch) continue;
    const num = parseInt(headerMatch[1], 10);
    const heading = headerMatch[2].trim();
    
    const body = sec.replace(/^###\s+Chapter\s+\d+\s*[-—:][^\n]*\n+/im, "").replace(/\n---\s*$/g, "").trim();
    
    // Check for code blocks
    const codeBlocks = [...body.matchAll(/```(?:python|sql|sh|bash|json|yaml|text)?\n([\s\S]*?)```/gi)];
    
    solutionsMap[num] = {
      num,
      title: heading,
      body,
      codeBlocks: codeBlocks.map(m => m[1].trim())
    };
  }

  console.log("Projects Map entries:", Object.keys(projectsMap).length);
  console.log("Solutions Map entries:", Object.keys(solutionsMap).length);

  for (let i = 1; i <= 105; i++) {
    const p = projectsMap[i];
    const s = solutionsMap[i];
    if (!p) console.error("MISSING PROJ:", i);
    if (!s) console.error("MISSING SOL:", i);
  }
}

parseAll();
