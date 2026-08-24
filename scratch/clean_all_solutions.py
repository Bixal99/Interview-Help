import re

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'

with open(sol_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace any lingering bulleted numbered headings like "* 1. Title" or "* **1. Title:**"
text = re.sub(r'^\s*[-*]\s+\*\*?(\d+\.\s+[^\n]+?)\*\*?:?', r'#### \1', text, flags=re.MULTILINE)

# Ensure blank lines around headings
text = re.sub(r'([^\n])\n(####\s+[^\n]+)', r'\1\n\n\2', text)
text = re.sub(r'(####\s+[^\n]+)\n([^\n#])', r'\1\n\n\2', text)

# Ensure blank lines before and after tables
text = re.sub(r'([^\n])\n(\s*\|[^\n]+\|\n\s*\|[-:| ]+\|\n)', r'\1\n\n\2', text)

# Fix bullet list item indentation so nested lists render cleanly without wrapping inside a single item
text = re.sub(r'^\s*[-*]\s+([A-Z0-9_a-z]+:)\s*\|', r'* **\1**\n\n|', text, flags=re.MULTILINE)

with open(sol_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Cleaned all headings, lists, and tables in help/ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md!")
