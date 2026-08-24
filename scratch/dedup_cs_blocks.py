import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Pattern for consecutive duplicate practice/summary blocks
# e.g.:
# **PRACTICE UNTIL IT FEELS FAMILIAR** ... > **Chapter X complete?** ... **PROGRESSIVE PRACTICE:** ...
# followed immediately by the exact same block.

def deduplicate_chapter_ends(doc: str) -> str:
    chapters = re.split(r'(?=^# CHAPTER \d+)', doc, flags=re.MULTILINE)
    new_chapters = []
    
    for ch in chapters:
        if not ch.strip():
            new_chapters.append(ch)
            continue
        
        # Check if the practice block or summary block appears multiple times
        # Remove identical repeated sections
        # Match from the first "**PRACTICE UNTIL IT FEELS FAMILIAR**" or "**CHAPTER SUMMARY:**" to the end of chapter
        # If there are duplicate blocks of "**PRACTICE UNTIL IT FEELS FAMILIAR**", let's keep only the last one or remove the duplicate
        
        # Regex to find duplicate consecutive practice blocks
        pattern = r'(\*\*PRACTICE UNTIL IT FEELS FAMILIAR\*\*[\s\S]*?)(?=\n---\s*\n\s*\*\*PRACTICE UNTIL IT FEELS FAMILIAR\*\*|\n\*\*PRACTICE UNTIL IT FEELS FAMILIAR\*\*)'
        
        # We can also clean duplicated trailing blocks by splitting on "\n---\n"
        sections = re.split(r'\n---\n', ch)
        cleaned_sections = []
        for sec in sections:
            # If sec is identical to the previous section or already in cleaned_sections at the end
            if cleaned_sections and sec.strip() == cleaned_sections[-1].strip():
                continue
            # Also check if it has the exact same practice table as previous
            if cleaned_sections and "PRACTICE UNTIL IT FEELS FAMILIAR" in sec and "PRACTICE UNTIL IT FEELS FAMILIAR" in cleaned_sections[-1]:
                continue
            if cleaned_sections and "CHAPTER SUMMARY:" in sec and "CHAPTER SUMMARY:" in cleaned_sections[-1]:
                continue
            cleaned_sections.append(sec)
        
        ch_cleaned = "\n---\n".join(cleaned_sections)
        new_chapters.append(ch_cleaned)

    return "".join(new_chapters)

cleaned_text = deduplicate_chapter_ends(text)

with open(cs_path, 'w', encoding='utf-8') as f:
    f.write(cleaned_text)

print("Deduplicated CS.md chapter summary and practice blocks!")
