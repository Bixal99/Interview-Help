import re
import json

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'
odoo_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\ODOO.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    cs_text = f.read()

with open(odoo_path, 'r', encoding='utf-8') as f:
    odoo_text = f.read()

cs_chapters = re.findall(r'^# CHAPTER (\d+)\s*[-–—:]\s*(.+)$', cs_text, re.MULTILINE)
odoo_chapters = re.findall(r'^# CHAPTER (\d+)\s*[-–—:]\s*(.+)$', odoo_text, re.MULTILINE)

print(f"CS Chapters count: {len(cs_chapters)}")
print(f"Odoo Chapters count: {len(odoo_chapters)}")

for num, title in cs_chapters[:10]:
    print(f"CS Ch {num}: {title.strip()}")

for num, title in odoo_chapters[:10]:
    print(f"Odoo Ch {num}: {title.strip()}")
