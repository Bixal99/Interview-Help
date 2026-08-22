from pathlib import Path
import re

root = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps")
cs = root / "CS.md"
text = cs.read_text(encoding="utf-8")
p73 = (root / "_story_x_phase73.md").read_text(encoding="utf-8")
p76 = (root / "_story_x_phase76.md").read_text(encoding="utf-8")
p7880 = (root / "_story_x_phases78_80.md").read_text(encoding="utf-8")

assert "# PHASE 73 -" not in text
assert "# PHASE 76 -" not in text
assert "# PHASE 78 -" not in text

text = text.replace("# PHASE 74 - Testing", p73 + "# PHASE 74 - Testing", 1)
text = text.replace("# PHASE 77 - CI/CD", p76 + "# PHASE 77 - CI/CD", 1)
text = text.replace(
    "# PHASE 81 - System Design Foundations",
    p7880 + "# PHASE 81 - System Design Foundations",
    1,
)

old_idx = """| 72  | Git & Collaboration *(current, see also* `[Git.md](./Git.md)`*)* | Safe collaboration history      | Review a PR and resolve a merge conflict confidently     |
| 73  | Requirements Engineering                                         | Turn ambiguity into a spec      | Write a spec a teammate could build from unaided         |
| 74  | Testing *(current)*                                              | Prove behavior automatically    | Write a test pyramid and explain what each layer catches |
| 75  | Software Architecture *(current)*                                | Keep policy independent         | Separate domain logic from I/O in a small service        |
| 76  | Development Process                                              | Ship predictably                | Explain your team's workflow and why each gate exists    |
| 77  | CI/CD *(current)*                                                | Automate the path to production | Explain a pipeline stage and what it would catch         |
| 78  | Containers & Deployment                                          | Package and ship                | Containerize and run a small service                     |
| 79  | Cloud Fundamentals                                               | Someone else's computer         | Explain compute/storage/network as cloud building blocks |
| 80  | Observability & Production Debugging                             | See what's actually happening   | Read logs/metrics/traces to find a live problem          |"""

new_idx = """| 72  | Git & Collaboration *(current, see also* `[Git.md](./Git.md)`*)* | Safe collaboration history      | Review a PR and resolve a merge conflict confidently     |
| 73  | Requirements Engineering *(current)*                             | Turn ambiguity into a spec      | Write a spec a teammate could build from unaided         |
| 74  | Testing *(current)*                                              | Prove behavior automatically    | Write a test pyramid and explain what each layer catches |
| 75  | Software Architecture *(current)*                                | Keep policy independent         | Separate domain logic from I/O in a small service        |
| 76  | Development Process *(current)*                                  | Ship predictably                | Explain your team's workflow and why each gate exists    |
| 77  | CI/CD *(current)*                                                | Automate the path to production | Explain a pipeline stage and what it would catch         |
| 78  | Containers & Deployment *(current)*                              | Package and ship                | Containerize and run a small service                     |
| 79  | Cloud Fundamentals *(current)*                                   | Someone else's computer         | Explain compute/storage/network as cloud building blocks |
| 80  | Observability & Production Debugging *(current)*                 | See what's actually happening   | Read logs/metrics/traces to find a live problem          |"""

assert old_idx in text, "index block missing"
text = text.replace(old_idx, new_idx, 1)

old81 = "**WHAT YOU SHOULD KNOW FIRST:** Everything before it. System design is where Phases 1-77 stop being separate subjects and become one toolbox you draw from at once."
new81 = "**WHAT YOU SHOULD KNOW FIRST:** Phases 72-80 (professional delivery loop) and everything before them. System design is where Phases 1-80 stop being separate subjects and become one toolbox you draw from at once."
if old81 in text:
    text = text.replace(old81, new81, 1)
else:
    print("WARN: 81 know line not found")

m = re.search(r'Phases with no "current" row above[^\n]+', text)
if m:
    print("old note:", m.group(0)[:180])
    replacement = (
        'Phases with no "current" row above - Story XI phases 82-84, 87; '
        "all of Story XII (89-91) and Story XIII (92-94); Story XIV phases 96-98; "
        "Story XV phases 100-101 - do not exist yet anywhere in this document and will be "
        "written from scratch in the batch listed in [Migration status](#migration-status)."
    )
    text = text[: m.start()] + replacement + text[m.end() :]

m7 = re.search(r"(\| 7\s+\| Stories IX - XI[^\|]+\| )([^\n]+)", text)
if m7:
    status = (
        "Stories IX-X Done - Story IX as before; Story X: new Phases 73, 76, 78-80 written; "
        "relocated 72/74/75/77 unique abilities/prereqs/transitions fixed, disclaimers removed, "
        "Composio resources (YouTube, web, fetch, Scholar, GitHub, DeepWiki; Drive/Sheets empty; "
        "Gmail 403 scopes). Story XI not started |"
    )
    text = text[: m7.start(2)] + status + text[m7.end() :]

cs.write_text(text, encoding="utf-8")
nums = [int(n) for n in re.findall(r"^# PHASE (\d+) - ", text, re.M)]
print("total", len(nums), "has 72-80", all(n in nums for n in range(72, 81)))
print("missing", [n for n in range(72, 81) if n not in nums])
