import json
import re

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'

with open(sol_path, 'r', encoding='utf-8') as f:
    text = f.read().replace('\r\n', '\n')

chapters = re.split(r'\n(?=###\s+Chapter\s+\d+)', text)
print(f"Total chapter sections in solutions file: {len(chapters)}")

needs_driver = []
for ch in chapters:
    m = re.match(r'###\s+Chapter\s+(\d+)\b', ch)
    if not m:
        continue
    num = int(m.group(1))
    
    code_blocks = re.findall(r'```(?:python|py)?\n([\s\S]*?)```', ch)
    for idx, code in enumerate(code_blocks):
        if 'def ' in code or 'class ' in code:
            if 'if __name__' not in code and 'print(' not in code.splitlines()[-3:]:
                needs_driver.append((num, idx, code[:80]))

print(f"Chapters needing driver execution blocks: {len(needs_driver)}")
for num, idx, snippet in needs_driver:
    print(f"Ch {num:03d} block {idx}: {snippet.strip()[:60]}...")
