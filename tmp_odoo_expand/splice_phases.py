#!/usr/bin/env python3
"""Splice expanded phase bodies into ODOO.md. Fragments named phase_NN.md replace
from '# PHASE N ' through the line before the next phase / story project / story header.
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ODOO = ROOT.parent / "content" / "roadmaps" / "ODOO.md"
FRAG_DIR = ROOT


def find_phase_spans(text: str) -> dict[int, tuple[int, int]]:
    """Return {phase_num: (start_idx, end_idx)} exclusive end = start of next boundary."""
    lines = text.splitlines(keepends=True)
    starts: dict[int, int] = {}
    char_at_line: list[int] = []
    pos = 0
    for i, line in enumerate(lines):
        char_at_line.append(pos)
        pos += len(line)
        m = re.match(r"^# PHASE (\d+)\b", line)
        if m:
            starts[int(m.group(1))] = i

    # Boundaries that end a phase body: next PHASE, STORY PROJECT, STORY XVI-style
    boundary_lines: list[int] = []
    for i, line in enumerate(lines):
        if re.match(r"^# PHASE \d+\b", line):
            boundary_lines.append(i)
        elif re.match(r"^## STORY PROJECT\b", line):
            boundary_lines.append(i)
        elif re.match(r"^# STORY [IVXLC]+\b", line):
            boundary_lines.append(i)
        elif re.match(r"^# The Zero", line) and i > 0:
            pass

    spans: dict[int, tuple[int, int]] = {}
    sorted_phases = sorted(starts.keys())
    for p in sorted_phases:
        start_line = starts[p]
        end_line = len(lines)
        for b in boundary_lines:
            if b > start_line:
                end_line = b
                break
        # Also stop before trailing --- separators that belong to story project? keep through blank after phase complete
        start_char = char_at_line[start_line]
        end_char = char_at_line[end_line] if end_line < len(lines) else len(text)
        spans[p] = (start_char, end_char)
    return spans


def main() -> None:
    text = ODOO.read_text(encoding="utf-8")
    spans = find_phase_spans(text)
    frags = sorted(FRAG_DIR.glob("phase_*.md"))
    if not frags:
        raise SystemExit("No phase_*.md fragments found")

    # Apply from highest phase number downward so offsets stay valid
    replacements: list[tuple[int, int, int, str]] = []
    for frag in frags:
        m = re.match(r"phase_(\d+)\.md$", frag.name)
        if not m:
            continue
        num = int(m.group(1))
        if num not in spans:
            raise SystemExit(f"Phase {num} not found in ODOO.md")
        body = frag.read_text(encoding="utf-8")
        if not body.endswith("\n"):
            body += "\n"
        # Ensure trailing blank line before next section
        if not body.endswith("\n\n"):
            body += "\n"
        start, end = spans[num]
        replacements.append((num, start, end, body))

    replacements.sort(key=lambda x: x[1], reverse=True)
    for num, start, end, body in replacements:
        text = text[:start] + body + text[end:]
        print(f"Replaced phase {num} ({end - start} chars -> {len(body)} chars)")

    ODOO.write_text(text, encoding="utf-8")
    phase_count = len(re.findall(r"^# PHASE \d+\b", text, flags=re.M))
    line_count = text.count("\n") + (0 if text.endswith("\n") else 1)
    print(f"Done. PHASE count={phase_count}, lines≈{line_count}")


if __name__ == "__main__":
    main()
