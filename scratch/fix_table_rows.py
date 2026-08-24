import re

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'

with open(sol_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Fix table row splitting
lines = text.split('\n')
clean_lines = []

for line in lines:
    stripped = line.strip()
    if stripped.startswith('|') and stripped.endswith('|'):
        clean_lines.append(stripped)
    elif stripped.startswith('|') and not stripped.endswith('|'):
        clean_lines.append(stripped)
    elif clean_lines and clean_lines[-1].startswith('|') and not clean_lines[-1].endswith('|') and stripped.endswith('|'):
        clean_lines[-1] = clean_lines[-1] + " " + stripped
    else:
        clean_lines.append(line)

fixed_text = '\n'.join(clean_lines)

# Explicitly replace the Chapter 3 Full Adder table with a clean, beautifully formatted table
ch3_truth_table = """#### 2. 1-Bit Full Adder Design

* **Boolean Formulas:**
  * $\\text{Sum} = A \\oplus B \\oplus C_{in}$
  * $C_{out} = (A \\cdot B) + (C_{in} \\cdot (A \\oplus B))$

* **Complete Truth Table:**

| $A$ | $B$ | $C_{in}$ | $Sum$ | $C_{out}$ | Explanation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | 0 | 0 | **0** | **0** | $0+0+0 = 0$ |
| 0 | 1 | 0 | **1** | **0** | $0+1+0 = 1$ |
| 1 | 0 | 0 | **1** | **0** | $1+0+0 = 1$ |
| 1 | 1 | 0 | **0** | **1** | $1+1+0 = 2_{10} = 10_2$ |
| 0 | 0 | 1 | **1** | **0** | $0+0+1 = 1$ |
| 0 | 1 | 1 | **0** | **1** | $0+1+1 = 2_{10} = 10_2$ |
| 1 | 0 | 1 | **0** | **1** | $1+0+1 = 2_{10} = 10_2$ |
| 1 | 1 | 1 | **1** | **1** | $1+1+1 = 3_{10} = 11_2$ |"""

fixed_text = re.sub(r'#### 2\. 1-Bit Full Adder Design[\s\S]*?(?=#### 3\.|\Z)', lambda m: ch3_truth_table + '\n\n', fixed_text)

with open(sol_path, 'w', encoding='utf-8') as f:
    f.write(fixed_text)

print("Properly formatted Chapter 3 and all table rows!")
