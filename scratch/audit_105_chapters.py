import re
import json

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'
reg_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\lib\cs-project-registry.json'

with open(cs_path, 'r', encoding='utf-8') as f:
    cs_text = f.read()

with open(reg_path, 'r', encoding='utf-8') as f:
    registry = json.load(f)

chapters = re.findall(r'^# CHAPTER (\d+)\s*[-—:]\s*([^\n]+)', cs_text, re.M)

print(f"Total Chapters in CS.md: {len(chapters)}")
print(f"Total Registered Projects: {len(registry)}")

# Check each chapter
missing_code = []
for num_str, title in chapters:
    num = int(num_str)
    proj = registry.get(str(num))
    if not proj:
        print(f"MISSING REGISTRY FOR CH {num}: {title}")
        continue
    
    ws_type = proj.get("workspaceType")
    starter = proj.get("starterCode", "").strip()
    sol_md = proj.get("solutionMarkdown", "").strip()
    
    code_lines = len(starter.splitlines())
    has_code = len(starter) > 40
    print(f"Ch {num:03d} | {title[:32]:<32} | {ws_type:<8} | Starter lines: {code_lines:<4} | Sol len: {len(sol_md):<5}")
    if not has_code and ws_type == "compiler":
        missing_code.append(num)

print(f"\nMissing starter code in compiler chapters: {missing_code}")
