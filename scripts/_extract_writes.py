"""Extract Write tool contents from Story XI subagent transcripts."""
from pathlib import Path
import json
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

paths = [
    Path(r"C:\Users\msi\.cursor\projects\c-Users-msi-OneDrive-Desktop-Qatar\agent-transcripts\ae6a008c-6bfd-4683-b250-375016fca0af\subagents\8c229cd2-5012-4ec5-a581-07fc58c98373.jsonl"),
    Path(r"C:\Users\msi\.cursor\projects\c-Users-msi-OneDrive-Desktop-Qatar\agent-transcripts\ae6a008c-6bfd-4683-b250-375016fca0af\subagents\2977b241-1390-48e1-9932-d526411ed54a.jsonl"),
    Path(r"C:\Users\msi\.cursor\projects\c-Users-msi-OneDrive-Desktop-Qatar\agent-transcripts\ae6a008c-6bfd-4683-b250-375016fca0af\subagents\0a909554-fcad-421b-8192-bb80751713ee.jsonl"),
]

out_dir = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\scripts\_recovered_writes")
out_dir.mkdir(exist_ok=True)

for p in paths:
    if not p.exists():
        print("missing", p)
        continue
    print("===", p.name, "size", p.stat().st_size)
    n_writes = 0
    with p.open(encoding="utf-8", errors="ignore") as f:
        for lineno, line in enumerate(f, 1):
            if '"Write"' not in line and '"name":"Write"' not in line.replace(" ", ""):
                if "Write" not in line or "contents" not in line:
                    continue
            try:
                obj = json.loads(line)
            except Exception:
                continue
            # Walk message content for tool_use Write
            msg = obj.get("message", {})
            content = msg.get("content", [])
            if not isinstance(content, list):
                continue
            for part in content:
                if not isinstance(part, dict):
                    continue
                if part.get("type") != "tool_use" or part.get("name") != "Write":
                    continue
                inp = part.get("input", {})
                path = inp.get("path", "")
                contents = inp.get("contents", "")
                if not contents:
                    continue
                n_writes += 1
                safe = re.sub(r"[^a-zA-Z0-9._-]+", "_", path)[-80:]
                out = out_dir / f"{p.stem}_{n_writes}_{safe}"
                out.write_text(contents, encoding="utf-8")
                print(f"  L{lineno} -> {out.name} ({len(contents)} chars) path={path}")
    print("writes", n_writes)
