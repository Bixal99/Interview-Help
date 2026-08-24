import re

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'
proj_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_PROJECTS_AND_TESTS.md'

with open(sol_path, 'r', encoding='utf-8') as f:
    sol_text = f.read()

# Fix 1: Fix tables concatenated onto bullet lines like:
# * **Complete Truth Table:**| $A$ | $B$ |
# Replace with:
# * **Complete Truth Table:**\n\n| $A$ | $B$ |
sol_text_fixed = re.sub(r'(\*\s*\*\*[^*]+?\*\*:\s*)\|', r'\1\n\n|', sol_text)

# Fix 2: Fix bulleted numbers like:
# * **1. Title:** -> #### 1. Title
# * **2. Title:** -> #### 2. Title
sol_text_fixed = re.sub(r'^\*\s+\*\*(\d+\.\s+[^*]+?):\*\*', r'#### \1', sol_text_fixed, flags=re.MULTILINE)

# Also fix any trailing tables inside lists that need blank lines
sol_text_fixed = re.sub(r'(\n\s*[-*]\s+[^\n]+)\n(\s*\|[^\n]+\|\n\s*\|[-:| ]+\|\n)', r'\1\n\n\2', sol_text_fixed)

with open(sol_path, 'w', encoding='utf-8') as f:
    f.write(sol_text_fixed)

print("Fixed solutions markdown formatting!")
