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
cs_path.write_text(cs[:start] + lean + cs[end:], encoding="utf-8")
print("before:", len(before), "after:", len(lean), "delta:", len(lean) - len(before))

# verify metadata still present
cs2 = cs_path.read_text(encoding="utf-8")
assert "| Q     |" in cs2
assert "Story IX (Phases 66" in cs2
assert "invisible-template" in cs2[cs2.index("### Story IX") : cs2.index("### Story X")]
print("metadata OK")
