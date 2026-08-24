import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Fix Chapter 10 List Example specifically
ch10_fix_target = """**TRY IT YOURSELF**

```python
# Create a list of your three favorite foods



**Key words**

| Word | Meaning |
| ---- | ------- |
| **list** | an ordered, mutable sequence: |
| **Lists** | Ordered collections of items accessed by **index** |
| **Arrays** | Ordered collections of items by **index** |


# Print the first one

# Replace the second one

# Add a fourth food
```"""

ch10_replacement = """**TRY IT YOURSELF**

```python
# Create a list of your three favorite foods
foods = ["Pizza", "Sushi", "Tacos"]

# Print the first one
print(foods[0])

# Replace the second one
foods[1] = "Burger"

# Add a fourth food
foods.append("Ramen")
print(foods)
```

**Key words**

| Word | Meaning |
| ---- | ------- |
| **list** | An ordered, mutable sequence of elements |
| **Lists** | Ordered collections of items accessed by **index** |
| **Arrays** | Contiguous memory collections indexed from zero |"""

if ch10_fix_target in text:
    text = text.replace(ch10_fix_target, ch10_replacement)
    print("Fixed Chapter 10 List Try It Yourself block!")
else:
    print("Exact match not found for Chapter 10, will search by regex...")
    # Regex fallback
    text = re.sub(
        r'\*\*TRY IT YOURSELF\*\*\s*```python\s*# Create a list of your three favorite foods[\s\S]*?```',
        ch10_replacement,
        text
    )

# Clean all code blocks where markdown headers or key words are trapped inside
def fix_trapped_markdown(doc: str) -> str:
    # Pattern: code block that has ## Lesson or #### inside it
    # We should split on ## or #### and close the code block before it
    def clean_block(match):
        block_content = match.group(1)
        lang = match.group(0).split('\n')[0] # e.g. ```python
        
        # If the block contains markdown headings or key words table
        if re.search(r'\n(## Lesson |\*\*Key words\*\*|#### )', block_content):
            # Split before the markdown header
            parts = re.split(r'(?=\n(?:## Lesson |\*\*Key words\*\*|#### ))', block_content)
            rebuilt = []
            for part in parts:
                if part.strip().startswith('## Lesson') or part.strip().startswith('####') or part.strip().startswith('**Key words**'):
                    # Markdown outside code block
                    rebuilt.append(part.strip())
                else:
                    # Valid code inside code block
                    code = part.strip()
                    if code:
                        rebuilt.append(f"{lang}\n{code}\n```")
            return "\n\n".join(rebuilt)
        return match.group(0)

    # Apply fix
    fixed = re.sub(r'```(?:python|py|[a-z0-9_-]+)?\n([\s\S]*?)```', clean_block, doc)
    return fixed

text = fix_trapped_markdown(text)

with open(cs_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Finished fixing trapped markdown and empty code blocks in CS.md!")
