from pathlib import Path
import re

root = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps")
cs = root / "CS.md"
text = cs.read_text(encoding="utf-8")
chunk = (root / "_story_xii_phases89_91.md").read_text(encoding="utf-8")

assert "# PHASE 89 -" not in text
assert "# PHASE 90 -" not in text
assert "# PHASE 91 -" not in text

text = text.replace(
    "# PHASE 95 - Capstone Planning",
    chunk + "# PHASE 95 - Capstone Planning",
    1,
)

# Fix Phase 95 prereq lightly if it still says vague things - leave for XIV

# Mark Stories VII-IX as current in index (bodies exist; markers lagged)
replacements = [
    ("| 55  | Networking Foundations             |", "| 55  | Networking Foundations *(current)* |"),
    ("| 56  | TCP, UDP & Sockets                 |", "| 56  | TCP, UDP & Sockets *(current)*     |"),
    ("| 57  | DNS & The Internet                 |", "| 57  | DNS & The Internet *(current)*     |"),
    ("| 58  | HTTP                               |", "| 58  | HTTP *(current)*                   |"),
    ("| 59  | API Design                         |", "| 59  | API Design *(current)*             |"),
    ("| 60  | Database Foundations          |", "| 60  | Database Foundations *(current)* |"),
    ("| 61  | SQL                           |", "| 61  | SQL *(current)*                 |"),
    ("| 62  | Data Modeling                 |", "| 62  | Data Modeling *(current)*       |"),
    ("| 63  | Database Internals            |", "| 63  | Database Internals *(current)*  |"),
    ("| 64  | Transactions & Concurrency    |", "| 64  | Transactions & Concurrency *(current)* |"),
    ("| 65  | Operating & Scaling Databases |", "| 65  | Operating & Scaling Databases *(current)* |"),
    ("| 66  | Security Foundations                       |", "| 66  | Security Foundations *(current)*           |"),
    ("| 67  | Cryptography for Developers                |", "| 67  | Cryptography for Developers *(current)*    |"),
    ("| 68  | Authentication & Authorization             |", "| 68  | Authentication & Authorization *(current)* |"),
    ("| 69  | Application Security                       |", "| 69  | Application Security *(current)*           |"),
    ("| 70  | Human-Computer Interaction                 |", "| 70  | Human-Computer Interaction *(current)*     |"),
    ("| 71  | Graphics & Interactive Computing           |", "| 71  | Graphics & Interactive Computing *(current)* |"),
]
for a, b in replacements:
    if a not in text:
        print("WARN missing index row:", a[:50])
    else:
        text = text.replace(a, b, 1)

# Story XII index → current
old_idx = """| 89  | Artificial Intelligence Foundations | What ML/AI actually is       | Explain the difference between classical ML and deep learning |
| 90  | Specialized Computing Platforms     | Mobile, embedded, and beyond | Name a constraint unique to one specialized platform          |
| 91  | Computing, Society & Ethics         | Software has consequences    | Write a short case-study response on a real ethical trade-off |"""

new_idx = """| 89  | Artificial Intelligence Foundations *(current)* | What ML/AI actually is       | Explain the difference between classical ML and deep learning |
| 90  | Specialized Computing Platforms *(current)*     | Mobile, embedded, and beyond | Name a constraint unique to one specialized platform          |
| 91  | Computing, Society & Ethics *(current)*         | Software has consequences    | Write a short case-study response on a real ethical trade-off |"""
assert old_idx in text, "Story XII index missing"
text = text.replace(old_idx, new_idx, 1)

# Migration batch 8 status
m8 = re.search(r"(\| 8\s+\| Stories XII - XV[^\|]+\| )([^\n]+)", text)
assert m8, "batch 8 missing"
status = (
    "In progress - Story XII Done: new Phases 89-91 written with Composio resources "
    "(YouTube, web, fetch, Scholar, GitHub, DeepWiki; Drive/Sheets empty; Gmail 403). "
    "Also fixed lagged *(current)* markers for Stories VII-IX (55-71 bodies already existed). "
    "Stories XIII-XV not started |"
)
text = text[: m8.start(2)] + status + text[m8.end() :]

# Missing-phases note
m = re.search(r'Phases with no "current" row above[^\n]+', text)
assert m, "missing note not found"
replacement = (
    'Phases with no "current" row above - Story XIII (92-94); Story XIV phases 96-98; '
    "Story XV phases 100-101 - do not exist yet anywhere in this document and will be "
    "written from scratch in the batch listed in [Migration status](#migration-status)."
)
text = text[: m.start()] + replacement + text[m.end() :]

# Clarify what *(current)* means in Phase Index blurb
old_blurb = (
    '*Target structure - 105 phases across 15 stories. "Current" rows already have a body '
    "section at that exact number below; \"planned\" rows have no section yet and will be "
    "written in the batch noted in [Migration status](#migration-status). See the "
    "[Legacy Content Map](#legacy-content-map) for exactly how each old 1-43 phase maps here.*"
)
new_blurb = (
    '*Target structure - 105 phases across 15 stories. Mark a row *(current)* only when a '
    "`# PHASE N` body exists below — not when the row is merely planned. Relocated bodies may "
    "still need a full newer-template prose rewrite even when marked current. See the "
    "[Legacy Content Map](#legacy-content-map) for how each old 1-43 phase maps here.*"
)
if old_blurb in text:
    text = text.replace(old_blurb, new_blurb, 1)
else:
    print("WARN: index blurb not found exact")

cs.write_text(text, encoding="utf-8")
nums = [int(n) for n in re.findall(r"^# PHASE (\d+) - ", text, re.M)]
print("total", len(nums))
print("89-91", [n for n in nums if 89 <= n <= 91])
print("missing XII", [n for n in (89, 90, 91) if n not in nums])
