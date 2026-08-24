import re

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'
proj_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_PROJECTS_AND_TESTS.md'

with open(sol_path, 'r', encoding='utf-8') as f:
    sol_text = f.read()

with open(proj_path, 'r', encoding='utf-8') as f:
    proj_text = f.read()

# Find all chapters in proj_text
proj_chapters = re.findall(r'^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)', proj_text, re.M)
sol_chapters = re.findall(r'^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)', sol_text, re.M)

print(f"Projects count: {len(proj_chapters)}, Solutions count: {len(sol_chapters)}")

# Check code blocks in each solution chapter
sol_sections = re.split(r'(?=^###\s+Chapter\s+\d+)', sol_text, flags=re.M)

for sec in sol_sections:
    m = re.match(r'^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)', sec.strip())
    if not m: continue
    ch_num = int(m.group(1))
    ch_title = m.group(2).strip()
    
    code_blocks = re.findall(r'```(?:python|py)?\n([\s\S]*?)```', sec)
    if ch_num in [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 21, 22, 23, 24]:
        print(f"Chapter {ch_num}: {ch_title} -> Code blocks: {len(code_blocks)}")
        if code_blocks:
            first_lines = code_blocks[0].strip().split('\n')[:3]
            print(f"   Preview: {first_lines}")
        else:
            print(f"   NO CODE BLOCKS IN SOLUTION!")

