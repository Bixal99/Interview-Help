import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

chapters = re.split(r'(?=^# CHAPTER \d+)', text, flags=re.MULTILINE)
new_chapters = []

for ch in chapters:
    if not ch.strip():
        new_chapters.append(ch)
        continue

    # If the chapter has duplicate practice blocks:
    # Find all occurrences of "**PRACTICE UNTIL IT FEELS FAMILIAR**"
    splits = re.split(r'(?=\*\*PRACTICE UNTIL IT FEELS FAMILIAR\*\*)', ch)
    if len(splits) > 2:
        # splits[0] is the main chapter body
        # splits[1..n] are the trailing practice / summary blocks
        # Keep splits[0] and the first unique block
        main_body = splits[0]
        trailing_blocks = splits[1:]
        
        # Take the first block that contains the complete summary and continue link
        best_block = trailing_blocks[0]
        # Clean any trailing duplicate inside best_block
        best_block = re.split(r'(?=\*\*PRACTICE UNTIL IT FEELS FAMILIAR\*\*)', best_block)[0]
        
        # Ensure it ends with --- and a newline
        best_block = best_block.strip() + "\n\n---\n\n"
        
        ch = main_body + best_block
    elif len(splits) == 2:
        # Check if inside splits[1] there is a duplicated SUMMARY or PROGRESSIVE PRACTICE
        block = splits[1]
        sum_splits = re.split(r'(?=\*\*CHAPTER SUMMARY:\*\*)', block)
        if len(sum_splits) > 2:
            block = sum_splits[0] + sum_splits[1]
            block = block.strip() + "\n\n---\n\n"
            ch = splits[0] + block
            
    new_chapters.append(ch)

final_text = "".join(new_chapters)

with open(cs_path, 'w', encoding='utf-8') as f:
    f.write(final_text)

print("Finished thorough deduplication of all CS chapters!")
