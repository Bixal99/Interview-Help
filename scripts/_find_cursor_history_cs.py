from pathlib import Path
import json
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

hist = Path.home() / "AppData/Roaming/Cursor/User/History"
hits = []
for d in hist.iterdir():
    e = d / "entries.json"
    if not e.exists():
        continue
    try:
        data = json.loads(e.read_text(encoding="utf-8"))
    except Exception:
        continue
    res = data.get("resource", "")
    if "Qatar" in res or "CS.md" in res:
        hits.append((res, d, data.get("entries", [])))

print("hits", len(hits))
for res, d, entries in hits:
    print("RES", res)
    print("DIR", d)
    for ent in entries[-8:]:
        print(" ", ent)
    # check largest history file in dir
    files = sorted(d.glob("*"), key=lambda p: p.stat().st_size, reverse=True)
    for f in files[:5]:
        if f.name == "entries.json":
            continue
        print("  file", f.name, f.stat().st_size, f.stat().st_mtime)

# Also search Claude Code / Cursor project cache for CS
for root_name in [
    Path.home() / ".cursor/projects/c-Users-msi-OneDrive-Desktop-Qatar",
    Path.home() / "AppData/Roaming/Cursor/User/workspaceStorage",
]:
    if not root_name.exists():
        continue
    for p in root_name.rglob("*"):
        if not p.is_file():
            continue
        if p.suffix.lower() not in {".md", ".txt", ".bak", ""}:
            continue
        try:
            sz = p.stat().st_size
        except OSError:
            continue
        if 900_000 <= sz <= 1_100_000:
            print("CAND", sz, p)
