"""Splice modernized Story XIII (Phases 92–94) into CS.md; update Batch U + notes."""
from pathlib import Path
import re

root = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar")
cs_path = root / "content/roadmaps/CS.md"
lean_path = root / "scripts/_story_xiii_lean.md"

cs = cs_path.read_text(encoding="utf-8")
lean = lean_path.read_text(encoding="utf-8").rstrip() + "\n\n"

start = cs.index("# PHASE 92 -")
end = cs.index("# PHASE 95 -")
cs = cs[:start] + lean + cs[end:]

# Intro: Story XIII invisible-template note
old_intro_tail = (
    "**Story XII (Phases 89–91)** is authored against the amended **invisible-template** from the start — "
    "continuous prose, selective contextual headings, utility chrome only for ability/prereq/resources/practice/unlock, "
    "and narrative closers after Practice (survey maps, not Story XI depth). "
    "**Story XIII+ continues under that same amended standard.**"
)
new_intro_tail = (
    "**Story XII (Phases 89–91)** is authored against the amended **invisible-template** from the start — "
    "continuous prose, selective contextual headings, utility chrome only for ability/prereq/resources/practice/unlock, "
    "and narrative closers after Practice (survey maps, not Story XI depth). "
    "**Story XIII (Phases 92–94)** is authored against the amended **invisible-template** from the start — "
    "continuous prose, selective contextual headings, utility chrome only for ability/prereq/resources/practice/unlock, "
    "and narrative closers after Practice (maintenance workflow: observe → trace → hypothesis → smallest safe change → verify). "
    "**Story XIV+ continues under that same amended standard.**"
)
if old_intro_tail not in cs:
    raise SystemExit("intro Story XII/XIII tail not found")
cs = cs.replace(old_intro_tail, new_intro_tail, 1)

# Phase Index Story XIII markers
old_idx = """| 92  | Working in Existing Codebases *(current)* | Read before you write            | Onboard into an unfamiliar codebase and ship a small fix |
| 93  | Legacy Code & Maintenance *(current)*     | Change code safely without tests | Add a test seam to legacy code before changing it        |
| 94  | Engineering Communication *(current)*     | Explain decisions, not just code | Write a design doc or ADR for a real decision            |"""

new_idx = """| 92  | Working in Existing Codebases *(current, invisible-template)* | Read before you write            | Onboard into an unfamiliar codebase and ship a small fix |
| 93  | Legacy Code & Maintenance *(current, invisible-template)*     | Change code safely without tests | Add a test seam to legacy code before changing it        |
| 94  | Engineering Communication *(current, invisible-template)*     | Explain decisions, not just code | Write a design doc or ADR for a real decision            |"""

if old_idx not in cs:
    raise SystemExit("Story XIII index rows not found")
cs = cs.replace(old_idx, new_idx, 1)

# Migration Batch U — append after Batch T
batch_t = (
    "| T     | Invisible-template rewrite Story XII (Phases 89–91) — AI/platforms/ethics survey; Story XIII untouched | "
    "Done this turn - authored against amended standard from the start (contextual headings + bridges; no identical Why→Problem→How skeleton); "
    "survey maps preferred over Story XI depth; removed SEE IT farms / legacy chrome; kept + slightly strengthened first-timer distinctions, "
    "comparison tables, diagrams, playgrounds; no encyclopedia inflation; 3 playground IDs unique once; no Projects.md cards; "
    "nav 88→89→90→91→92; 105 phases; Phase 88/92 bodies unchanged; Story XIII (92+) untouched |"
)
batch_u = (
    "| U     | Invisible-template rewrite Story XIII (Phases 92–94) — maintenance workflow; Story XIV untouched | "
    "Done this turn - authored against amended standard from the start (contextual headings + bridges; no identical Why→Problem→How skeleton); "
    "grew thin/checklist XIII for teaching quality (observe→trace→hypothesis→smallest safe change→verify); "
    "Quarry Bookstore running scenario; protected onboarding map, characterization+seams, refactor-vs-rewrite, light deprecation/compat, "
    "debt-as-risk, ADR scaffold; healthy callbacks to 74/75/73 only; 3 playground IDs unique once; no Projects.md cards; "
    "nav 91→92→93→94→95; 105 phases; Phase 91/95 bodies unchanged; Story XIV (95+) untouched |"
)

if batch_t not in cs:
    # Tolerate slight whitespace drift: find Batch T line and append U after it
    m = re.search(r"\| T\s+\| Invisible-template rewrite Story XII[^\n]+\n", cs)
    if not m:
        raise SystemExit("Batch T row not found")
    if "| U     |" in cs:
        raise SystemExit("Batch U already present")
    cs = cs[: m.end()] + batch_u + "\n" + cs[m.end() :]
else:
    if "| U     |" in cs:
        raise SystemExit("Batch U already present")
    cs = cs.replace(batch_t, batch_t + "\n" + batch_u, 1)

cs_path.write_text(cs, encoding="utf-8")

# Verify
nums = [int(n) for n in re.findall(r"^# PHASE (\d+) - ", cs, re.M)]
h2s = re.findall(r"^## (\d+\.\d+) ", cs, re.M)
play = re.findall(r"playground=(cs-phase-9[2-4][^\s`]+)", cs)
print("total phases", len(nums))
print("92-95 present", all(n in nums for n in (92, 93, 94, 95)))
print("required H2", [h for h in ("92.1", "93.1", "94.1") if f"{h}" in " ".join(h2s) or any(x.startswith(h) for x in h2s)])
print("H2 hits", [h for h in h2s if h.startswith(("92.", "93.", "94."))])
print("playgrounds", play)
print("lean chars", len(lean))
i92 = cs.index("# PHASE 92 -")
i95 = cs.index("# PHASE 95 -")
print("spliced XIII chars", len(cs[i92:i95]))
# Ensure 91 and 95 openers intact
assert "Story XII stepped sideways after distributed systems" in cs
assert "# PHASE 95 - Capstone Planning" in cs
assert "Scope a Capstone You Can Actually Finish" in cs
print("OK")
