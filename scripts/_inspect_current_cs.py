from pathlib import Path

cs = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md").read_text(encoding="utf-8")
print("size", len(cs))
print("phases", sum(1 for l in cs.splitlines() if l.startswith("# PHASE ") and " - " in l))

# Check phase 66, 72, 81, 88, 89 markers
for n in [60, 66, 72, 81, 88, 89, 91, 92]:
    marker = f"# PHASE {n} -"
    i = cs.find(marker)
    print(n, "found" if i>=0 else "MISSING", "SEE IT nearby" if "SEE IT BEFORE YOU MEMORIZE IT" in cs[i:i+2500] else "no SEE IT in first 2500")

# Migration table end
for line in cs.splitlines():
    if line.startswith("| O     |") or line.startswith("| P     |") or line.startswith("| Q     |") or line.startswith("| R     |") or line.startswith("| S     |") or line.startswith("| T     |") or "Migration status" in line:
        print(line[:140])

# Intro paragraph around Live lessons
for i, line in enumerate(cs.splitlines()):
    if "Live lessons below" in line:
        print("intro line", i+1)
        print(line[:300])
        break

# Story map markers for 60, 66, 81
for line in cs.splitlines():
    if line.startswith("| 60  |") or line.startswith("| 66  |") or line.startswith("| 81  |") or line.startswith("| 89  |"):
        print(line[:140])
