import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Find all code blocks containing markdown table or heading or key words
blocks = list(re.finditer(r'```(?:python|py|[a-z0-9_-]+)?\n([\s\S]*?)```', text))
print(f"Total code blocks: {len(blocks)}")

glitched_blocks = []
for b in blocks:
    content = b.group(1)
    if '**Key words**' in content or '| ---' in content or '## Lesson' in content:
        start_line = text[:b.start()].count('\n') + 1
        glitched_blocks.append((start_line, content[:150]))
        print(f"Glitched block at line {start_line}:\n{content[:150]}...\n")

print(f"Total glitched code blocks: {len(glitched_blocks)}")
