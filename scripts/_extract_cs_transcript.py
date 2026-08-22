"""Try to extract the largest CS.md-like content from agent transcripts."""
from pathlib import Path
import json
import re

path = Path(r"C:\Users\msi\.cursor\projects\c-Users-msi-OneDrive-Desktop-Qatar\agent-transcripts\ae6a008c-6bfd-4683-b250-375016fca0af\ae6a008c-6bfd-4683-b250-375016fca0af.jsonl")

best = ""
best_meta = None
count_phase1 = 0

with path.open(encoding="utf-8", errors="ignore") as f:
    for i, line in enumerate(f):
        if "# PHASE 1 -" not in line or "invisible-template" not in line:
            continue
        # Prefer lines/tool payloads with Story XI marker
        if "Story XI (Phases" not in line and "Story XII+" not in line:
            continue
        if len(line) > len(best):
            best = line
            best_meta = (i, len(line))
            count_phase1 += 1

print("candidates touched", count_phase1, "best", best_meta)

if best:
    # Try parse as JSON message
    try:
        obj = json.loads(best)
        print("json keys", obj.keys() if isinstance(obj, dict) else type(obj))
        s = json.dumps(obj)
    except Exception as e:
        print("not json line", e)
        s = best

    # Extract markdown body if embedded
    # Look for content starting with '# The Zero-to-Hero'
    m = re.search(r"# The Zero-to-Hero Computer Science[\s\S]*?# PHASE 105[^\n]*\n[\s\S]{0,5000}", s)
    if m:
        body = m.group(0)
        print("extracted len", len(body))
        out = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\scripts\_cs_recovered_from_transcript.md")
        # Unescape common JSON escapes
        body2 = body.encode("utf-8").decode("unicode_escape") if "\\n" in body[:500] else body
        # Better: if body has \\n, decode properly
        if "\\n" in body[:2000]:
            try:
                body2 = bytes(body, "utf-8").decode("unicode_escape")
            except Exception:
                body2 = body.replace("\\n", "\n").replace('\\"', '"')
        out.write_text(body2, encoding="utf-8")
        print("wrote", out, "size", out.stat().st_size)
        print("phases", body2.count("# PHASE "))
        print("invisible", body2.count("invisible-template"))
    else:
        print("no full body match; sample", s[:500])
