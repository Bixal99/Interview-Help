"""Assemble ODOO.md from intro + story batch files."""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT.parent.parent / "content" / "roadmaps" / "ODOO.md"

PARTS = [
    "00_intro.md",
    "stories_01_03.md",
    "stories_04_06.md",
    "stories_07_09.md",
    "stories_10_12.md",
    "stories_13_15.md",
    "stories_16_19.md",
]


def main() -> None:
    missing = [name for name in PARTS if not (ROOT / name).exists()]
    if missing:
        raise SystemExit(f"Missing parts: {missing}")

    chunks: list[str] = []
    for name in PARTS:
        text = (ROOT / name).read_text(encoding="utf-8").strip() + "\n"
        chunks.append(text)

    body = "\n".join(chunks).rstrip() + "\n"
    OUT.write_text(body, encoding="utf-8")
    phases = body.count("\n# PHASE ")
    print(f"Wrote {OUT}")
    print(f"lines={body.count(chr(10)) + 1} phases={phases} bytes={OUT.stat().st_size}")


if __name__ == "__main__":
    main()
