import re

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'
proj_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_PROJECTS_AND_TESTS.md'

for path in [sol_path, proj_path]:
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()

    # Split any line that has :| or **| into two lines with a blank line between
    text = re.sub(r'(\*\*[^*]+?\*\*:\s*)\|', r'\1\n\n|', text)
    text = re.sub(r'([^\n|])\s*(\|(?:\s*[$A-Za-z0-9_ -]+\s*\|)+)', r'\1\n\n\2', text)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)

print("Fixed all attached tables in solution & project files!")
