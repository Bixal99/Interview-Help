from pathlib import Path

files = {
    "current": Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md"),
    "bak": Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps\CS.md.bak"),
}
for name, p in files.items():
    t = p.read_text(encoding="utf-8", errors="replace")
    print("====", name, p.stat().st_size)
    print("invisible-template", t.count("invisible-template"))
    print("WHAT THIS UNLOCKS NEXT", t.count("WHAT THIS UNLOCKS NEXT"))
    print("SEE IT BEFORE YOU MEMORIZE IT", t.count("SEE IT BEFORE YOU MEMORIZE IT"))
    print("Story XI authored", "Story XI (Phases" in t)
    print("Batch S", "| S     |" in t or "Story XI (Phases 81" in t)
    for line in t.splitlines():
        if "invisible-template" in line and "Story" in line:
            print("INTRO:", line[:180])
            break
    for line in t.splitlines():
        if line.startswith("| S     |") or line.startswith("| R     |") or line.startswith("| T     |"):
            print(line[:160])

xi = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\scripts\_story_xi_phases")
if xi.exists():
    for f in sorted(xi.glob("*")):
        print(f.name, f.stat().st_size)
