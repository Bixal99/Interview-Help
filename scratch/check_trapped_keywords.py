import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

blocks = list(re.finditer(r'```(?:python|py|[a-z0-9_-]+)?\n([\s\S]*?)```', text))
print(f"Total code blocks: {len(blocks)}")

found = []
for b in blocks:
    content = b.group(1)
    if '**Key words**' in content:
        line_no = text[:b.start()].count('\n') + 1
        found.append((line_no, content[:80]))

print(f"Blocks with trapped keywords: {len(found)}")
for l, c in found:
    print(f"Line {l}: {c}")
