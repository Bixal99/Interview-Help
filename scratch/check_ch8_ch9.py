import re

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'

with open(sol_path, 'r', encoding='utf-8') as f:
    sol_text = f.read()

sol_sections = re.split(r'(?=^###\s+Chapter\s+\d+)', sol_text, flags=re.M)

for sec in sol_sections:
    m = re.match(r'^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)', sec.strip())
    if not m: continue
    ch_num = int(m.group(1))
    if ch_num in [8, 9]:
        print(f"=== CHAPTER {ch_num} ===")
        code_blocks = re.findall(r'```(?:python|py)?\n([\s\S]*?)```', sec)
        for i, cb in enumerate(code_blocks):
            print(f"--- Block {i+1} ({len(cb.splitlines())} lines) ---")
            print(cb[:400])
            print("...")

