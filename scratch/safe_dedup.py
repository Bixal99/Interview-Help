import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

chapters = re.split(r'(?=^# CHAPTER \d+)', text, flags=re.MULTILINE)
cleaned_chapters = []

for ch in chapters:
    if not ch.strip():
        cleaned_chapters.append(ch)
        continue

    # Split chapter by lessons
    # The trailing chapter summary and practice is after the last lesson
    # Let's find the last occurrence of "## Lesson "
    last_lesson_pos = ch.rfind("\n## Lesson ")
    if last_lesson_pos != -1:
        chapter_lessons_part = ch[:last_lesson_pos]
        last_lesson_part = ch[last_lesson_pos:]
        
        # In last_lesson_part, check for duplicate blocks
        # If "PRACTICE UNTIL IT FEELS FAMILIAR" or "CHAPTER SUMMARY:" appears multiple times in last_lesson_part, deduplicate
        prac_count = len(re.findall(r'\*\*PRACTICE UNTIL IT FEELS FAMILIAR\*\*', last_lesson_part))
        summ_count = len(re.findall(r'\*\*CHAPTER SUMMARY:\*\*', last_lesson_part))
        
        if prac_count > 1 or summ_count > 1:
            # Split on "\n---\n"
            parts = re.split(r'\n---\n', last_lesson_part)
            unique_parts = []
            seen_headers = set()
            
            for p in parts:
                header = None
                if "**PRACTICE UNTIL IT FEELS FAMILIAR**" in p:
                    header = "PRACTICE"
                elif "**CHAPTER SUMMARY:**" in p:
                    header = "SUMMARY"
                
                if header and header in seen_headers:
                    continue
                if header:
                    seen_headers.add(header)
                unique_parts.append(p)
            
            last_lesson_part = "\n---\n".join(unique_parts)
            if not last_lesson_part.endswith("\n\n---\n\n"):
                last_lesson_part = last_lesson_part.rstrip() + "\n\n---\n\n"
        
        ch = chapter_lessons_part + last_lesson_part

    cleaned_chapters.append(ch)

new_text = "".join(cleaned_chapters)

with open(cs_path, 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Safely cleaned all duplicated trailing summary blocks across CS.md!")
