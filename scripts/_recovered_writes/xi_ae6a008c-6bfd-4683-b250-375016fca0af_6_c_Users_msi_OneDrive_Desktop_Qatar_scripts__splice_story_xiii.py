from pathlib import Path
import re

root = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps")
cs = root / "CS.md"
text = cs.read_text(encoding="utf-8")
chunk = (root / "_story_xiii_phases92_94.md").read_text(encoding="utf-8")

assert "# PHASE 92 -" not in text
assert "# PHASE 93 -" not in text
assert "# PHASE 94 -" not in text

text = text.replace(
    "# PHASE 95 - Capstone Planning",
    chunk + "# PHASE 95 - Capstone Planning",
    1,
)

# Soften Phase 95 KNOW FIRST if still vague
old95 = "**WHAT YOU SHOULD KNOW FIRST:** None specific; each project below assumes whatever phases it names."
new95 = "**WHAT YOU SHOULD KNOW FIRST:** Phases 92-94 (you can onboard, change legacy safely, and record decisions); the capstone assumes you will pull earlier stories as needed."
if old95 in text:
    text = text.replace(old95, new95, 1)

# Index
old_idx = """| 92  | Working in Existing Codebases | Read before you write            | Onboard into an unfamiliar codebase and ship a small fix |
| 93  | Legacy Code & Maintenance     | Change code safely without tests | Add a test seam to legacy code before changing it        |
| 94  | Engineering Communication     | Explain decisions, not just code | Write a design doc or ADR for a real decision            |"""

new_idx = """| 92  | Working in Existing Codebases *(current)* | Read before you write            | Onboard into an unfamiliar codebase and ship a small fix |
| 93  | Legacy Code & Maintenance *(current)*     | Change code safely without tests | Add a test seam to legacy code before changing it        |
| 94  | Engineering Communication *(current)*     | Explain decisions, not just code | Write a design doc or ADR for a real decision            |"""
assert old_idx in text, "Story XIII index missing"
text = text.replace(old_idx, new_idx, 1)

# Migration batch 8
m8 = re.search(r"(\| 8\s+\| Stories XII - XV[^\|]+\| )([^\n]+)", text)
assert m8, "batch 8 missing"
status = (
    "In progress - Stories XII-XIII Done: new Phases 89-94 written with Composio resources "
    "(YouTube, web, fetch, Scholar, GitHub, DeepWiki; Drive/Sheets empty; Gmail 403). "
    "VII-IX *(current)* markers previously reconciled. Stories XIV-XV not started |"
)
text = text[: m8.start(2)] + status + text[m8.end() :]

# Missing note
m = re.search(r'Phases with no "current" row above[^\n]+', text)
assert m, "missing note not found"
replacement = (
    'Phases with no "current" row above - Story XIV phases 96-98; Story XV phases 100-101 - '
    "do not exist yet anywhere in this document and will be written from scratch in the batch "
    "listed in [Migration status](#migration-status)."
)
text = text[: m.start()] + replacement + text[m.end() :]

cs.write_text(text, encoding="utf-8")
nums = [int(n) for n in re.findall(r"^# PHASE (\d+) - ", text, re.M)]
print("total", len(nums))
print("92-95", [n for n in nums if 92 <= n <= 95])
print("missing XIII", [n for n in (92, 93, 94) if n not in nums])
