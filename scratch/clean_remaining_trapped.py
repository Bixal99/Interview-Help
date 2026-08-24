import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Fix the specific trapped keyword blocks
def clean_trapped_keyword_blocks(doc: str) -> str:
    # Pattern: code block that contains **Key words**
    def fix_single_block(m):
        raw = m.group(1)
        lang = m.group(0).split('\n')[0]
        
        # Split on **Key words**
        if '**Key words**' in raw:
            parts = raw.split('**Key words**')
            code_part = parts[0].strip()
            rest = parts[1]
            
            # Extract the table
            table_lines = []
            after_table_lines = []
            in_table = True
            for line in rest.splitlines():
                if in_table and ('|' in line or line.strip() == ''):
                    table_lines.append(line)
                else:
                    in_table = False
                    after_table_lines.append(line)
            
            table_str = "**Key words**\n" + "\n".join(table_lines).strip()
            after_code = "\n".join(after_table_lines).strip()
            
            # If after_code has Python comments or code, let's complete it
            if after_code:
                # Add implementation
                code_part = code_part + "\n\n" + after_code
                if "safe_divide" in code_part:
                    code_part += '\ndef safe_divide(a, b):\n    if b == 0:\n        return None\n    return a / b\n\nprint("Safe divide 10/2:", safe_divide(10, 2))\nprint("Safe divide 10/0:", safe_divide(10, 0))'
                elif "Create an integer" in code_part:
                    code_part += '\nx = 42\ny = 3.14\nz = "Hello"\nprint(type(x), type(y), type(z))'
                elif "import re" in code_part:
                    code_part += '\npattern = r"\\d+"\nmatches = re.findall(pattern, "Order 101, Item 42")\nprint("Found digits:", matches)'
                elif "import socket" in code_part:
                    code_part += '\n# Socket demonstration\nhost = "localhost"\nport = 8080\nprint(f"Server configured on {host}:{port}")'
                elif "import sqlite3" in code_part:
                    code_part += '\nconn = sqlite3.connect(":memory:")\ncursor = conn.cursor()\ncursor.execute("CREATE TABLE test (id INT, val TEXT)")\nprint("In-memory SQLite initialized.")'
            
            return f"{lang}\n{code_part}\n```\n\n{table_str}\n"
        return m.group(0)

    return re.sub(r'```(?:python|py|[a-z0-9_-]+)?\n([\s\S]*?)```', fix_single_block, doc)

cleaned_text = clean_trapped_keyword_blocks(text)

with open(cs_path, 'w', encoding='utf-8') as f:
    f.write(cleaned_text)

print("Cleaned all remaining trapped keyword blocks in CS.md!")
