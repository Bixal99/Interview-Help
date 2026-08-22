from pathlib import Path
import re

path = Path(r"content/roadmaps/CS.md")
t = path.read_text(encoding="utf-8")


def replace_unlock_in_block(block: str, new_text: str) -> str:
    return re.sub(
        r"\*\*WHAT THIS UNLOCKS NEXT:\*\*\s*\n\n.*?(?=\n---\n|\n> \*\*Phase|\Z)",
        new_text.rstrip() + "\n\n",
        block,
        count=1,
        flags=re.S,
    )


handoffs = {
    60: """**WHAT THIS UNLOCKS NEXT:**

A DBMS can keep bookstore data alive across process restarts — concurrency, durability, crash safety. Surviving is not the same as *asking questions*. You still need a model for how facts relate (tables, keys) and a language that can retrieve "Ada's orders over $100" without rewriting Python. That language is SQL — Phase 61.

""",
    62: """**WHAT THIS UNLOCKS NEXT:**

The schema is correct and non-redundant. Correctness does not make `SELECT * FROM orders WHERE customer_id = 5` fast — that query still checks every row (O(n)). Phases 36–37 already solved search in memory with hashing and trees. Databases need the same idea on disk: indexes — Phase 63.

""",
    63: """**WHAT THIS UNLOCKS NEXT:**

Indexes make a *single* query fast. They say nothing about two related writes that must succeed or fail together — debit one row, credit another. Crash between them and money vanishes or doubles. That unit of work is a **transaction** — Phase 64.

""",
    64: """**WHAT THIS UNLOCKS NEXT:**

One well-indexed, transactional database still has a ceiling: one machine's CPU, memory, and disk. When reads outgrow one box, or a single failure takes the store offline, copies and splits become necessary — replication, partitioning, sharding — Phase 65. Not full distributed consensus yet; that is a later story.

""",
    65: """**WHAT THIS UNLOCKS NEXT:**

Story VIII made data survive, answer questions, hold relationships, stay fast, stay correct under concurrency, and stretch across machines. None of that asks *who* may read or change it — or what happens when the network and clients are untrusted. Packets already crossed machines you do not control (Phases 55–58). A durable store concentrates the blast radius of a stolen dump, a forged identity, or a query that turns input into instructions. Mapping trust boundaries and threats is Story IX, starting at Phase 66.

""",
}

for n, text in handoffs.items():
    s = t.index(f"# PHASE {n} ")
    e = t.index(f"# PHASE {n + 1} ")
    block = t[s:e]
    new_block = replace_unlock_in_block(block, text)
    assert new_block != block, f"no change {n}"
    t = t[:s] + new_block + t[e:]
    print("updated", n)

s61 = t.index("# PHASE 61 ")
e61 = t.index("# PHASE 62 ")
p61 = t[s61:e61]
i612 = p61.index("## 61.2 ")
part1, part2 = p61[:i612], p61[i612:]
u611 = """**WHAT THIS UNLOCKS NEXT:**

Joins reconstruct relationships row by row. Real questions also ask for *summaries* ("orders per customer") and *multi-step* logic ("customers above average spend"). Filtering rows is not the same as collapsing groups — that is `GROUP BY` / `HAVING` and `WITH` — next.

"""
u612 = """**WHAT THIS UNLOCKS NEXT:**

Keys, JOINs, and aggregates let you *query* split data. Nothing yet tells you *where* those splits should live. Get the layout wrong and you are back to duplicated, inconsistent facts — just spread across tables. That is normalization — Phase 62.

"""
part1 = replace_unlock_in_block(part1, u611)
part2 = replace_unlock_in_block(part2, u612)
t = t[:s61] + part1 + part2 + t[e61:]
print("updated 61.1 and 61.2")

if "| P     |" not in t:
    idx = t.find("| O     |")
    line_end = t.index("\n", idx)
    batch = "\n| P     | Narrative closer rule + handoff extractor fix (WHAT THIS UNLOCKS NEXT visible after Practice); Story VIII endings strengthened; Story IX not started | Done this turn |"
    t = t[:line_end] + batch + t[line_end:]
    print("batch P")

path.write_text(t, encoding="utf-8")
print("done")
