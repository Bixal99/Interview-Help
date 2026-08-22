from pathlib import Path
import json
import re

root = Path(r"C:\Users\msi\.cursor\projects\c-Users-msi-OneDrive-Desktop-Qatar\agent-transcripts")
needles = [
    "Story XII+ continues under that same amended standard",
    "authored against the amended **invisible-template**",
    "# PHASE 88 - Complete System Design",
]

# Scan recent transcripts for tool results containing large CS snippets
for p in sorted(root.rglob("*.jsonl"), key=lambda x: -x.stat().st_mtime)[:30]:
    text = p.read_text(encoding="utf-8", errors="ignore")
    if "invisible-template" not in text and "Story XII+" not in text:
        continue
    print("FILE", p, "size", p.stat().st_size)
    # Find longest line containing PHASE 88 or invisible-template
    best = ""
    for line in text.splitlines():
        if "invisible-template" in line or "PHASE 88" in line:
            if len(line) > len(best):
                best = line
    print("best line len", len(best))
    # Count occurrences
    print("invisible-template count", text.count("invisible-template"))
    print("cs-phase-86-project", text.count("cs-phase-86-project"))

# Also check if any write tool dumped full CS - look for contents with PHASE 1 and PHASE 105
for p in sorted(root.rglob("*.jsonl"), key=lambda x: -x.stat().st_mtime)[:10]:
    text = p.read_text(encoding="utf-8", errors="ignore")
    if text.count("# PHASE 1 -") and text.count("# PHASE 105"):
        print("FULL ROADMAP CANDIDATE", p.name, len(text))
