import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'
odoo_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\ODOO.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    cs_text = f.read()

# Scan for duplicated consecutive headers or blocks
chapters = re.split(r'(?=^# CHAPTER \d+)', cs_text, flags=re.MULTILINE)
print(f"Total split chapters in CS.md: {len(chapters)}")

for i, ch in enumerate(chapters):
    if not ch.strip(): continue
    ch_match = re.search(r'^# CHAPTER (\d+)', ch, re.MULTILINE)
    ch_num = ch_match.group(1) if ch_match else str(i)
    
    # Check for duplicated "PRACTICE UNTIL IT FEELS FAMILIAR"
    count_practice = len(re.findall(r'\*\*PRACTICE UNTIL IT FEELS FAMILIAR\*\*', ch))
    count_summary = len(re.findall(r'\*\*CHAPTER SUMMARY:\*\*', ch))
    if count_practice > 1 or count_summary > 1:
        print(f"Chapter {ch_num} has duplicate blocks! (Practice: {count_practice}, Summary: {count_summary})")

