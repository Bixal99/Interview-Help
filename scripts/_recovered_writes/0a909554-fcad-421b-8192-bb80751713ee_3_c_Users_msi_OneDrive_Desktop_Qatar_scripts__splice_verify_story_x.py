from pathlib import Path
import re
from collections import Counter

cs = Path(r"content/roadmaps/CS.md")
lean = Path(r"scripts/_story_x_lean.md")
text = cs.read_text(encoding="utf-8")
lean_text = lean.read_text(encoding="utf-8").rstrip() + "\n\n"

p71 = text[text.index("# PHASE 71 -") : text.index("# PHASE 72 -")]
p81_before = text[text.index("# PHASE 81 -") : text.index("# PHASE 82 -")]

start = text.index("# PHASE 72 -")
end = text.index("# PHASE 81 -")
new_text = text[:start] + lean_text + text[end:]

old_intro = "**Story X+ continues under that same amended standard.**"
new_intro = (
    "**Story X (Phases 72–80)** is authored against the amended **invisible-template** "
    "from the start — continuous prose, selective contextual headings, utility chrome only "
    "for ability/prereq/resources/practice/unlock, and narrative closers after Practice. "
    "**Story XI+ continues under that same amended standard.**"
)
# May already be updated from prior attempt, or still old, or already new from partial
if old_intro in new_text:
    new_text = new_text.replace(old_intro, new_intro, 1)
elif "Story X (Phases 72–80)** is authored" not in new_text:
    # Try alternate: Story IX sentence ending
    alt = (
        "**Story IX (Phases 66–71)** is authored against the amended **invisible-template** "
        "from the start — continuous prose, selective contextual headings, utility chrome only "
        "for ability/prereq/resources/practice/unlock, and narrative closers after Practice. "
        "**Story X+ continues under that same amended standard.**"
    )
    alt_new = (
        "**Story IX (Phases 66–71)** is authored against the amended **invisible-template** "
        "from the start — continuous prose, selective contextual headings, utility chrome only "
        "for ability/prereq/resources/practice/unlock, and narrative closers after Practice. "
        + new_intro
    )
    if alt in new_text:
        new_text = new_text.replace(alt, alt_new, 1)
    else:
        raise SystemExit("intro anchor missing")

old_map = """| 72  | Git & Collaboration *(current, see also* `[Git.md](./Git.md)`*)* | Safe collaboration history      | Review a PR and resolve a merge conflict confidently     |
| 73  | Requirements Engineering *(current)*                             | Turn ambiguity into a spec      | Write a spec a teammate could build from unaided         |
| 74  | Testing *(current)*                                              | Prove behavior automatically    | Write a test pyramid and explain what each layer catches |
| 75  | Software Architecture *(current)*                                | Keep policy independent         | Separate domain logic from I/O in a small service        |
| 76  | Development Process *(current)*                                  | Ship predictably                | Explain your team's workflow and why each gate exists    |
| 77  | CI/CD *(current)*                                                | Automate the path to production | Explain a pipeline stage and what it would catch         |
| 78  | Containers & Deployment *(current)*                              | Package and ship                | Containerize and run a small service                     |
| 79  | Cloud Fundamentals *(current)*                                   | Shared responsibility           | Explain IaaS/PaaS/SaaS and who owns which risk layer     |
| 80  | Observability & Production Debugging *(current)*                 | Logs, metrics, traces           | Separate logs/metrics/traces; define a simple SLI/SLO    |"""

new_map = """| 72  | Git & Collaboration *(current, invisible-template; see also* `[Git.md](./Git.md)`*)* | Safe collaboration history      | Review a PR and resolve a merge conflict confidently     |
| 73  | Requirements Engineering *(current, invisible-template)*         | Turn ambiguity into a spec      | Write a spec a teammate could build from unaided         |
| 74  | Testing *(current, invisible-template)*                          | Prove behavior automatically    | Write a test pyramid and explain what each layer catches |
| 75  | Software Architecture *(current, invisible-template)*            | Keep policy independent         | Separate domain logic from I/O in a small service        |
| 76  | Development Process *(current, invisible-template)*              | Ship predictably                | Explain your team's workflow and why each gate exists    |
| 77  | CI/CD *(current, invisible-template)*                            | Automate the path to production | Explain a pipeline stage and what it would catch         |
| 78  | Containers & Deployment *(current, invisible-template)*          | Package and ship                | Containerize and run a small service                     |
| 79  | Cloud Fundamentals *(current, invisible-template)*               | Shared responsibility           | Explain IaaS/PaaS/SaaS and who owns which risk layer     |
| 80  | Observability & Production Debugging *(current, invisible-template)* | Logs, metrics, traces       | Separate logs/metrics/traces; define a simple SLI/SLO    |"""

if old_map in new_text:
    new_text = new_text.replace(old_map, new_map, 1)
elif "invisible-template; see also" not in new_text:
    raise SystemExit("story map anchor missing")

batch_q = """| Q     | Invisible-template rewrite Story IX (Phases 66–71) — security/HCI/graphics journey; Story X untouched | Done this turn - authored against amended standard from the start (contextual headings + bridges; no identical Why→Problem→How skeleton); bookstore running domain; defensive security only; protected trust/CIA/STRIDE, hash≠encrypt≠sign, TLS, password hashing, sessions/MFA/RBAC, JWT/OAuth, SQLi/XSS/CSRF/CORS, rate limits, HCI heuristics, render/input loop kept; 4 playground IDs unique once; Projects.md#cs-phase-69-project preserved; nav 65→…→72; 105 phases; Phase 65/72 bodies unchanged; Story X (72+) untouched |"""

batch_r_line = """| R     | Invisible-template rewrite Story X (Phases 72–80) — professional SE journey; Story XI untouched | Done this turn - authored against amended standard from the start (contextual headings + bridges; no identical Why→Problem→How skeleton); depth preferred over cut %; spurious Phase-72 ## PR labels fixed to bold prose; protected Git/requirements/pyramid/architecture/WIP/CI-CD/containers/cloud/observability mechanisms kept; 5 playground IDs unique once; Projects.md#cs-phase-75-project and #cs-phase-77-project + Git.md companion preserved; nav 71→…→81; 105 phases; Phase 71/81 bodies unchanged; Story XI (81+) untouched |"""

mig = new_text[new_text.index("### Migration status") : new_text.index("## Phase Index")]
if "| R     |" not in mig:
    if batch_q not in new_text:
        raise SystemExit("batch Q missing")
    new_text = new_text.replace(batch_q, batch_q + "\n" + batch_r_line, 1)

# Fix weak IEEE resource in lean if present
weak = "[IEEE-style SRS qualities](https://www.inf.ed.ac.uk/teaching/courses/seoc/2004_2005/resources/re_intro.pdf)"
strong = "[Pohl — Requirements Engineering intro (PDF)](https://people.eecs.ku.edu/~saiedian/Teaching/812/Lectures/Misc/pohl-intro-re.pdf)"
if weak in new_text:
    new_text = new_text.replace(weak, strong, 1)
# keep lean file in sync
lean_body = lean.read_text(encoding="utf-8")
if weak in lean_body:
    lean.write_text(lean_body.replace(weak, strong, 1), encoding="utf-8")

cs.write_text(new_text, encoding="utf-8")

s = new_text.index("# PHASE 72 -")
e = new_text.index("# PHASE 81 -")
story_x = new_text[s:e]
p71_after = new_text[new_text.index("# PHASE 71 -") : s]
p81_after = new_text[e : new_text.index("# PHASE 82 -")]

print("Story X chars:", len(story_x))
print("Phase 71 unchanged:", p71_after == p71)
print("Phase 81 unchanged:", p81_after == p81_before)
print(
    "105 phases:",
    sum(1 for n in range(1, 106) if f"# PHASE {n} -" in new_text) == 105,
)

required = [
    "## 72.1 Version Control & Code Review",
    "## 73.1 From Ambiguity to a Buildable Spec",
    "## 74.1 The Testing Pyramid",
    "## 75.1 Domain vs Infrastructure",
    "## 75.2 Dependency Direction",
    "## 76.1 Shipping Predictably",
    "## 77.1 CI/CD (Continuous Integration & Continuous Deployment)",
    "## 78.1 Package Once, Run Anywhere (Almost)",
    "## 79.1 Someone Else's Computer, Productized",
    "## 80.1 See What Is Actually Happening",
]
for h in required:
    print(("OK" if h in story_x else "MISSING"), h)

p72 = story_x[story_x.index("# PHASE 72 -") : story_x.index("# PHASE 73 -")]
h2s = re.findall(r"^## .+", p72, re.M)
print("Phase 72 ## headings:", h2s)
print("Spurious:", [h for h in h2s if not h.startswith("## 72.1")])

# All ## in story X should be N.M only
all_h2 = re.findall(r"^## .+", story_x, re.M)
bad = [h for h in all_h2 if not re.match(r"^## \d+\.\d+ ", h)]
print("Non lesson H2 in Story X:", bad or "none")

playgrounds = re.findall(r"playground=([\w-]+)", story_x)
print("Playgrounds:", playgrounds)
print("Dupes:", [k for k, v in Counter(playgrounds).items() if v > 1] or "none")

for proj in [
    "Projects.md#cs-phase-75-project",
    "Projects.md#cs-phase-77-project",
    "./Git.md",
]:
    print(proj, "OK" if proj in story_x else "MISSING")

for a, b in [
    (71, 72),
    (72, 73),
    (73, 74),
    (74, 75),
    (75, 76),
    (76, 77),
    (77, 78),
    (78, 79),
    (79, 80),
    (80, 81),
]:
    region = new_text[new_text.index(f"# PHASE {a} -") : new_text.index(f"# PHASE {b} -")]
    ok = f"#phase-{b}" in region.lower() or f"Phase {b}" in region
    print(f"nav {a}->{b}:", ok)

print("UNLOCK closers:", story_x.count("**WHAT THIS UNLOCKS NEXT:**"))
print("29 bridge:", "Bridge from Phase 29" in story_x)
print("Batch R present:", "| R     |" in new_text)
print("Intro Story X note:", "Story X (Phases 72–80)** is authored" in new_text)
print("SEE IT farms gone:", "SEE IT BEFORE YOU MEMORIZE IT" not in story_x)
print("WHY YOU ARE LEARNING chrome:", story_x.count("**WHY YOU ARE LEARNING THIS:**"))
