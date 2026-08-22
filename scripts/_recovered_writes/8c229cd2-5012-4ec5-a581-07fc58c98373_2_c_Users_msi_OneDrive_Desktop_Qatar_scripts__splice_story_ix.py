from pathlib import Path

cs_path = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md")
lean_path = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\scripts\_story_ix_lean.md")
cs = cs_path.read_text(encoding="utf-8")
lean = lean_path.read_text(encoding="utf-8")
if not lean.endswith("\n"):
    lean += "\n"

start = cs.index("# PHASE 66 -")
end = cs.index("# PHASE 72 -")
before = cs[start:end]
after_cs = cs[:start] + lean + cs[end:]

old_intro = "**Story IX+ continues under that same amended standard.**"
new_intro = (
    "**Story IX (Phases 66–71)** is authored against the amended **invisible-template** "
    "from the start — continuous prose, selective contextual headings, utility chrome only "
    "for ability/prereq/resources/practice/unlock, and narrative closers after Practice. "
    "**Story X+ continues under that same amended standard.**"
)
if old_intro not in after_cs:
    raise SystemExit("intro note anchor not found")
after_cs = after_cs.replace(old_intro, new_intro, 1)

batch_p = (
    "| P     | Narrative closer rule + handoff extractor fix "
    "(WHAT THIS UNLOCKS NEXT visible after Practice); Story VIII endings strengthened; "
    "Story IX not started | Done this turn |\n"
)
batch_q = (
    batch_p
    + "| Q     | Invisible-template rewrite Story IX (Phases 66–71) — security/HCI/graphics "
    "journey; Story X untouched | Done this turn - authored against amended standard from "
    "the start (contextual headings + bridges; no identical Why→Problem→How skeleton); "
    "bookstore running domain; defensive security only; protected trust/CIA/STRIDE, "
    "hash≠encrypt≠sign, TLS, password hashing, sessions/MFA/RBAC, JWT/OAuth, "
    "SQLi/XSS/CSRF/CORS, rate limits, HCI heuristics, render/input loop kept; "
    "4 playground IDs unique once; Projects.md#cs-phase-69-project preserved; "
    "nav 65→…→72; 105 phases; Phase 65/72 bodies unchanged; Story X (72+) untouched |\n"
)
if batch_p not in after_cs:
    raise SystemExit("batch P row not found")
after_cs = after_cs.replace(batch_p, batch_q, 1)

idx_replacements = [
    (
        "| 66  | Security Foundations *(current)*           |",
        "| 66  | Security Foundations *(current, invisible-template)* |",
    ),
    (
        "| 67  | Cryptography for Developers *(current)*    |",
        "| 67  | Cryptography for Developers *(current, invisible-template)* |",
    ),
    (
        "| 68  | Authentication & Authorization *(current)* |",
        "| 68  | Authentication & Authorization *(current, invisible-template)* |",
    ),
    (
        "| 69  | Application Security *(current)*           |",
        "| 69  | Application Security *(current, invisible-template)* |",
    ),
    (
        "| 70  | Human-Computer Interaction *(current)*     |",
        "| 70  | Human-Computer Interaction *(current, invisible-template)* |",
    ),
    (
        "| 71  | Graphics & Interactive Computing *(current)* |",
        "| 71  | Graphics & Interactive Computing *(current, invisible-template)* |",
    ),
]
for a, b in idx_replacements:
    if a not in after_cs:
        raise SystemExit(f"index row not found: {a}")
    after_cs = after_cs.replace(a, b, 1)

cs_path.write_text(after_cs, encoding="utf-8")

print("before Story IX chars:", len(before))
print("after Story IX chars:", len(lean))
print("delta:", len(lean) - len(before))
print("total CS chars:", len(after_cs))

assert after_cs.index("# PHASE 65 -") < after_cs.index("# PHASE 66 -")
assert after_cs.index("# PHASE 71 -") < after_cs.index("# PHASE 72 -")
p65 = after_cs[after_cs.index("# PHASE 65 -") : after_cs.index("# PHASE 66 -")]
assert (
    "Mapping trust boundaries and threats is Story IX, starting at Phase 66." in p65
)
p72 = after_cs[after_cs.index("# PHASE 72 -") : after_cs.index("# PHASE 72 -") + 500]
assert "Keep a safe collaboration history" in p72
print("boundary checks OK")
