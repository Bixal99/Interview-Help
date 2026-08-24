import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

# If there is ```text or ```python followed by Initial System State: ... and then #### Step-by-Step Mechanism
# close the code block before #### Step-by-Step Mechanism
def close_system_state_blocks(doc: str) -> str:
    # Pattern: ```[a-z]*\nInitial System State:[\s\S]*?(?=#### Step-by-Step Mechanism)
    def fix_state_block(m):
        raw = m.group(0)
        # Check if it already has ``` at the end
        if raw.rstrip().endswith('```'):
            return raw
        return raw.rstrip() + "\n```\n\n"
    
    pattern = r'```[a-z0-9_-]*\nInitial System State:[\s\S]*?(?=#### Step-by-Step Mechanism)'
    fixed = re.sub(pattern, fix_state_block, doc)
    return fixed

text = close_system_state_blocks(text)

with open(cs_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Closed all Initial System State code fences cleanly!")
