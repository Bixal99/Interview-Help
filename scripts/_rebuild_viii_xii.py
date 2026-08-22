"""Rebuild CS.md Stories VIII–XII from recovered lean sources + XII lean."""
from pathlib import Path
import re

root = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar")
cs_path = root / "content/roadmaps/CS.md"
scripts = root / "scripts"
xi_dir = scripts / "_story_xi_phases"

cs = cs_path.read_text(encoding="utf-8")

viii = (scripts / "_story_viii_lean.md").read_text(encoding="utf-8").rstrip() + "\n\n"
ix = (scripts / "_story_ix_lean.md").read_text(encoding="utf-8").rstrip() + "\n\n"
x = (scripts / "_story_x_lean.md").read_text(encoding="utf-8").rstrip() + "\n\n"
xi_parts = [(xi_dir / f"phase_{n}.md").read_text(encoding="utf-8").rstrip() for n in range(81, 89)]
xi = "\n\n".join(xi_parts) + "\n\n"
xii = (scripts / "_story_xii_lean.md").read_text(encoding="utf-8").rstrip() + "\n\n"


def splice(text: str, start_marker: str, end_marker: str, body: str) -> str:
    start = text.index(start_marker)
    end = text.index(end_marker)
    return text[:start] + body + text[end:]


cs = splice(cs, "# PHASE 60 -", "# PHASE 66 -", viii)
cs = splice(cs, "# PHASE 66 -", "# PHASE 72 -", ix)
cs = splice(cs, "# PHASE 72 -", "# PHASE 81 -", x)
cs = splice(cs, "# PHASE 81 -", "# PHASE 89 -", xi)
cs = splice(cs, "# PHASE 89 -", "# PHASE 92 -", xii)

new_intro = (
    "Live lessons below still use older bold labels until rewritten. "
    "**Stories IV–VII (Phases 21–59)** follow the lean semantic vocabulary for authors; "
    "the renderer keeps **generic checklist labels in flow** (no repeated Why→Problem→How form chrome) "
    "and shows **utility chrome** plus **contextual journey headings** when authors write them. "
    "**Story VIII (Phases 60–65)** is authored against the amended **invisible-template** from the start — "
    "continuous prose, selective contextual headings, utility chrome only for ability/prereq/resources/practice/unlock. "
    "Every meaningful lesson ends with a **visible narrative closer** (Practice → What Comes Next → navigation). "
    "Authoring contract: [Learning Content Standard](../standards/LEARNING_CONTENT_STANDARD.md) and "
    "[CS Course Profile](../standards/course-profiles/cs.md). "
    "**Story IX (Phases 66–71)** is authored against the amended **invisible-template** from the start — "
    "continuous prose, selective contextual headings, utility chrome only for ability/prereq/resources/practice/unlock, "
    "and narrative closers after Practice. "
    "**Story X (Phases 72–80)** is authored against the amended **invisible-template** from the start — "
    "continuous prose, selective contextual headings, utility chrome only for ability/prereq/resources/practice/unlock, "
    "and narrative closers after Practice. "
    "**Story XI (Phases 81–88)** is authored against the amended **invisible-template** from the start — "
    "continuous prose, selective contextual headings, utility chrome only for ability/prereq/resources/practice/unlock, "
    "and narrative closers after Practice. "
    "**Story XII (Phases 89–91)** is authored against the amended **invisible-template** from the start — "
    "continuous prose, selective contextual headings, utility chrome only for ability/prereq/resources/practice/unlock, "
    "and narrative closers after Practice (survey maps, not Story XI depth). "
    "**Story XIII+ continues under that same amended standard.**"
)

lines = cs.splitlines(keepends=True)
found = False
for i, line in enumerate(lines):
    if line.startswith("Live lessons below still use older bold labels"):
        nl = "\n" if line.endswith("\n") else ""
        lines[i] = new_intro + nl
        found = True
        break
if not found:
    raise SystemExit("intro line not found")
cs = "".join(lines)

batches_nt = """| N     | Invisible-template amendment (standard + renderer flow/contextual/utility); Story VII representative contextual headings + bridges; 1.2→2.1 continuity; Phase 60 prereq lightened at boundary only | Done prior turn - Story VIII NOT started |
| O     | Invisible-template rewrite Story VIII (Phases 60–65) — data persistence journey; Story IX untouched | Done this turn - authored against amended standard from the start (contextual headings + bridges; no identical Why→Problem→How skeleton); bookstore running domain; protected WAL/SQL/normalization/B-trees/ACID/replication mechanisms kept; 4 playground IDs unique once; nav 59→…→66; 105 phases; Phase 59/66 bodies unchanged; Story IX (66+) untouched |
| P     | Narrative closer rule + handoff extractor fix (WHAT THIS UNLOCKS NEXT visible after Practice); Story VIII endings strengthened; Story IX not started | Done this turn |
| Q     | Invisible-template rewrite Story IX (Phases 66–71) — security/HCI/graphics journey; Story X untouched | Done this turn - authored against amended standard from the start (contextual headings + bridges; no identical Why→Problem→How skeleton); bookstore running domain; defensive security only; protected trust/CIA/STRIDE, hash≠encrypt≠sign, TLS, password hashing, sessions/MFA/RBAC, JWT/OAuth, SQLi/XSS/CSRF/CORS, rate limits, HCI heuristics, render/input loop kept; 4 playground IDs unique once; Projects.md#cs-phase-69-project preserved; nav 65→…→72; 105 phases; Phase 65/72 bodies unchanged; Story X (72+) untouched |
| R     | Invisible-template rewrite Story X (Phases 72–80) — professional SE journey; Story XI untouched | Done this turn - authored against amended standard from the start (contextual headings + bridges; no identical Why→Problem→How skeleton); depth preferred over cut %; spurious Phase-72 ## PR labels fixed to bold prose; protected Git/requirements/pyramid/architecture/WIP/CI-CD/containers/cloud/observability mechanisms kept; 5 playground IDs unique once; Projects.md#cs-phase-75-project and #cs-phase-77-project + Git.md companion preserved; nav 71→…→81; 105 phases; Phase 71/81 bodies unchanged; Story XI (81+) untouched |
| S     | Invisible-template rewrite Story XI (Phases 81–88) — system design & distributed systems; Story XII untouched | Done this turn - authored against amended standard from the start (contextual headings + bridges; no identical Why→Problem→How skeleton); depth preferred over cut %; strengthened thin 82–84/87; trimmed chrome/farms on 85–86/88 without gutting CAP/PACELC/consensus/walkthrough; protected estimation/bottleneck/cache-aside/queues/CAP≠ACID C/Raft intuition/reliability/88 learning capstone kept; 5 playground IDs unique once; Projects.md#cs-phase-86-project and #cs-phase-88-project preserved; nav 80→…→89; 105 phases; Phase 80/89 bodies unchanged; Story XII (89+) untouched |
| T     | Invisible-template rewrite Story XII (Phases 89–91) — AI/platforms/ethics survey; Story XIII untouched | Done this turn - authored against amended standard from the start (contextual headings + bridges; no identical Why→Problem→How skeleton); survey maps preferred over Story XI depth; removed SEE IT farms / legacy chrome; kept + slightly strengthened first-timer distinctions, comparison tables, diagrams, playgrounds; no encyclopedia inflation; 3 playground IDs unique once; no Projects.md cards; nav 88→89→90→91→92; 105 phases; Phase 88/92 bodies unchanged; Story XIII (92+) untouched |
"""

if "| N     |" in cs:
    cs = re.sub(
        r"\| N     \|.*?(?=\n\nEvery phase number|\n\n---)",
        batches_nt.rstrip() + "\n",
        cs,
        count=1,
        flags=re.S,
    )
else:
    # Insert after batch M line
    m = re.search(r"^\| M     \|.*$", cs, re.M)
    if not m:
        raise SystemExit("Batch M not found")
    insert_at = m.end()
    cs = cs[:insert_at] + "\n" + batches_nt.rstrip() + cs[insert_at:]

# Story map: mark *(current)* → *(current, invisible-template)* for 60–91
# Careful with Git row which has nested italics.
def mark_current(line: str) -> str:
    if "*(current, invisible-template" in line:
        return line
    if "*(current, see also*" in line:
        return line.replace(
            "*(current, see also*",
            "*(current, invisible-template; see also*",
            1,
        )
    if "*(current)*" in line:
        return line.replace("*(current)*", "*(current, invisible-template)*", 1)
    return line


out_lines = []
for line in cs.splitlines(keepends=True):
    stripped = line.lstrip()
    mrow = re.match(r"\| (\d+)  \|", stripped)
    if mrow and 60 <= int(mrow.group(1)) <= 91:
        # preserve original line ending
        ending = "\n" if line.endswith("\n") else ""
        core = line[:-1] if ending else line
        out_lines.append(mark_current(core) + ending)
    else:
        out_lines.append(line)
cs = "".join(out_lines)

cs_path.write_text(cs, encoding="utf-8", newline="\n")

# Verify
phases = re.findall(r"^# PHASE (\d+) -", cs, re.M)
print("phase count", len(phases))
assert len(phases) == 105, phases
assert [int(p) for p in phases] == list(range(1, 106))

for n in range(60, 92):
    assert f"# PHASE {n} -" in cs

xii_body = cs[cs.index("# PHASE 89 -") : cs.index("# PHASE 92 -")]
for h2 in [
    "## 89.1 Learning From Data (Without the Hype)",
    "## 90.1 When the Machine Is Not a Laptop",
    "## 91.1 Software Has Consequences",
]:
    assert h2 in xii_body, h2
for pg in [
    "cs-phase-89-classical-vs-deep",
    "cs-phase-90-budget",
    "cs-phase-91-case-scaffold",
]:
    assert xii_body.count(pg) == 1, (pg, xii_body.count(pg))
assert "SEE IT BEFORE YOU MEMORIZE IT" not in xii_body
assert xii_body.count("WHAT THIS UNLOCKS NEXT") == 3
assert "| T     |" in cs
assert "Story XII (Phases 89–91)" in cs

# Modern markers in VIII–XI
for start, end, label in [
    (60, 66, "VIII"),
    (66, 72, "IX"),
    (72, 81, "X"),
    (81, 89, "XI"),
]:
    body = cs[cs.index(f"# PHASE {start} -") : cs.index(f"# PHASE {end} -")]
    see = body.count("SEE IT BEFORE YOU MEMORIZE IT")
    unlocks = body.count("WHAT THIS UNLOCKS NEXT")
    print(f"Story {label}: chars={len(body)} SEE_IT={see} UNLOCKS={unlocks}")

print("Story XII chars", len(xii_body))
print("OK rebuild")
