"""Extract Story XI / invisible-template CS fragments from parent transcript."""
from pathlib import Path
import json
import re

base = Path(r"C:\Users\msi\.cursor\projects\c-Users-msi-OneDrive-Desktop-Qatar\agent-transcripts\ae6a008c-6bfd-4683-b250-375016fca0af")

# Search all jsonl for Write tool contents of CS.md or lean story files
outs = []
for p in base.rglob("*.jsonl"):
    with p.open(encoding="utf-8", errors="ignore") as f:
        for lineno, line in enumerate(f, 1):
            if "content/roadmaps/CS.md" not in line and "CS.md" not in line:
                continue
            if len(line) < 5000:
                continue
            # Keep large CS-related lines
            outs.append((len(line), p.name, lineno, line[:200]))

outs.sort(reverse=True)
print("top large CS-related lines:")
for item in outs[:20]:
    print(item[0], item[1], "L"+str(item[2]), repr(item[3][:120]))

# Specifically look for tool_use Write with path CS.md
print("\n--- searching Write payloads ---")
for p in sorted(base.rglob("*.jsonl")):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if '"path": "content/roadmaps/CS.md"' in text or '"path":"content/roadmaps/CS.md"' in text:
        print("has write path", p.name, "count", text.count("content/roadmaps/CS.md"))
    if "_story_xi" in text:
        print("story_xi mention", p.name, text.count("_story_xi"))
