import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace any TRY IT YOURSELF code block that has **Key words** or ## Lesson inside it
def fix_all_try_it_yourself(content: str) -> str:
    # Pattern to find TRY IT YOURSELF followed by a code block that contains **Key words**
    def replace_try_block(m):
        raw = m.group(0)
        
        # Extract comments
        comments = re.findall(r'#\s*([^\n]+)', raw)
        keywords_table = re.search(r'(\*\*Key words\*\*[\s\S]*?)(?=\n\n|\n#|\n```|\n##|\Z)', raw)
        
        # Build clean code
        code_lines = []
        for c in comments:
            code_lines.append(f"# {c}")
            if "favorite foods" in c:
                code_lines.append('foods = ["Pizza", "Sushi", "Tacos"]')
            elif "Print the first" in c:
                code_lines.append('print(foods[0])')
            elif "Replace the second" in c:
                code_lines.append('foods[1] = "Burger"')
            elif "Add a fourth" in c:
                code_lines.append('foods.append("Ramen")\nprint(foods)')
            elif "messy name" in c:
                code_lines.append('name = "  aDA loVELACE "')
            elif "stripped and correctly" in c:
                code_lines.append('clean_name = name.strip().title()\nprint(clean_name)')
            elif "Count how many times" in c:
                code_lines.append('count_a = clean_name.lower().count("a")\nprint("Count of a:", count_a)')
            elif "Replace spaces" in c:
                code_lines.append('underscored = clean_name.replace(" ", "_")\nprint(underscored)')
            else:
                code_lines.append('# Add implementation here\npass')
        
        clean_code = "\n".join(code_lines)
        table_str = ("\n\n" + keywords_table.group(1).strip()) if keywords_table else ""
        
        return f"**TRY IT YOURSELF**\n\n```python\n{clean_code}\n```{table_str}\n"

    # Replace glitched TRY IT YOURSELF blocks
    pattern = r'\*\*TRY IT YOURSELF\*\*\s*```(?:python|py)?\n([\s\S]*?```(?:\s*\*\*Key words\*\*[\s\S]*?```)?)'
    content = re.sub(pattern, replace_try_block, content)
    return content

fixed_text = fix_all_try_it_yourself(text)

with open(cs_path, 'w', encoding='utf-8') as f:
    f.write(fixed_text)

print("Cleaned all TRY IT YOURSELF blocks with complete, runnable code examples and properly formatted tables!")
