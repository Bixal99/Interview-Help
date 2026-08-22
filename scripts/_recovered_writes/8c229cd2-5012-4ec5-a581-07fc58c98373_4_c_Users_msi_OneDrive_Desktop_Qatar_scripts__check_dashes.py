from pathlib import Path

cs = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md").read_text(
    encoding="utf-8"
)
story = cs[cs.index("# PHASE 66 -") : cs.index("# PHASE 72 -")]
i = story.index("customer table")
s = story[i : i + 40]
print([hex(ord(c)) for c in s])
print(repr(s))
print("em dash", story.count("\u2014"))
print("en dash", story.count("\u2013"))
print("ellipsis", story.count("\u2026"))
lean = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\scripts\_story_ix_lean.md").read_text(
    encoding="utf-8"
)
print("lean em", lean.count("\u2014"), "en", lean.count("\u2013"))
i = lean.index("customer table")
print([hex(ord(c)) for c in lean[i : i + 40]])
