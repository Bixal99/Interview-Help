import re

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'

with open(sol_path, 'r', encoding='utf-8') as f:
    text = f.read().replace('\r\n', '\n')

sections = re.split(r'(?=^###\s+Chapter\s+\d+)', text, flags=re.M)

for sec in sections:
    m = re.match(r'^###\s+Chapter\s+(\d+)\s*[-—:]\s*([^\n]+)', sec.strip())
    if not m: continue
    num = int(m.group(1))
    title = m.group(2).strip()
    
    code_blocks = re.findall(r'```(?:python|py|[a-z0-9_-]+)?\n([\s\S]*?)```', sec)
    print(f"Ch {num:03d}: {title[:35]:<35} | Blocks: {len(code_blocks)} | Total code lines: {sum(len(b.splitlines()) for b in code_blocks)}")

