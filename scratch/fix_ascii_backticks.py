import re

cs_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md'

with open(cs_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace any backticks used as ascii waveforms
# e.g. Clock: ___|```|___
# Data: _____|`````````|___________
def clean_ascii_backticks(doc: str) -> str:
    # Replace backticks in ascii waveforms
    doc = re.sub(r'___\|`+\|\s*', '___|^^^|___ ', doc)
    doc = re.sub(r'_____\|`+\|', '_____|^^^^^^^^^|', doc)
    doc = re.sub(r'_______\|`+\|', '_______|^^^^^^^^^^^|', doc)
    return doc

cleaned = clean_ascii_backticks(text)

with open(cs_path, 'w', encoding='utf-8') as f:
    f.write(cleaned)

print("Fixed all ascii waveform backticks in CS.md!")
