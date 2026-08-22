from pathlib import Path
import re

root = Path(r"c:\Users\msi\OneDrive\Desktop\Qatar\content\roadmaps")
cs = root / "CS.md"
text = cs.read_text(encoding="utf-8")

p82 = (root / "_story_x_phase82.md").read_text(encoding="utf-8")
p83 = (root / "_story_x_phase83.md").read_text(encoding="utf-8")
p84 = (root / "_story_x_phase84.md").read_text(encoding="utf-8")
p87 = (root / "_story_x_phase87.md").read_text(encoding="utf-8")

assert "# PHASE 82 -" not in text
assert "# PHASE 83 -" not in text
assert "# PHASE 84 -" not in text
assert "# PHASE 87 -" not in text

# Insert 82-84 before 85
text = text.replace(
    "# PHASE 85 - Distributed Systems",
    p82 + p83 + p84 + "# PHASE 85 - Distributed Systems",
    1,
)
# Insert 87 before 88
text = text.replace(
    "# PHASE 88 - Complete System Design",
    p87 + "# PHASE 88 - Complete System Design",
    1,
)

# --- Headers ---
old81 = """# PHASE 81 - System Design Foundations

**Track:** Engineering when the amount of work grows

**WHAT YOU WILL BE ABLE TO DO:** Design systems that keep working correctly as traffic, data, and team size grow - by walking the same progressive-problem-solving path real engineering organizations walk.

**WHAT YOU SHOULD KNOW FIRST:** Phases 72-80 (professional delivery loop) and everything before them. System design is where Phases 1-80 stop being separate subjects and become one toolbox you draw from at once.

*Relocated from old Phase 40 during the Story XI structural migration; prose has not been rewritten to the new lesson template yet.*
"""
new81 = """# PHASE 81 - System Design Foundations

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Walk a system from a single server to a load-balanced multi-tier shape - and explain what each added component (LB, stateless app, shared data store) buys you.

**WHAT YOU SHOULD KNOW FIRST:** Phases 72-80 (professional delivery loop) and everything before them. System design is where those subjects become one toolbox.
"""
assert old81 in text, "81 header missing"
text = text.replace(old81, new81, 1)

old85 = """# PHASE 85 - Distributed Systems

**Track:** Engineering when the amount of work grows

**WHAT YOU WILL BE ABLE TO DO:** Design systems that keep working correctly as traffic, data, and team size grow - by walking the same progressive-problem-solving path real engineering organizations walk.

**WHAT YOU SHOULD KNOW FIRST:** Everything before it. System design is where Phases 1-77 stop being separate subjects and become one toolbox you draw from at once.

*Relocated from old Phase 40 + old Phase 41 during the Story XI structural migration; prose has not been rewritten to the new lesson template yet.*
"""
new85 = """# PHASE 85 - Distributed Systems

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Reason about failure across machines - explain the CAP theorem with a concrete partition example and what CP vs AP means for a real service.

**WHAT YOU SHOULD KNOW FIRST:** Phases 81-84 (you already scale, cache, and queue; CAP is the limit those techniques operate under), Phase 64-65 (replication and consistency at the database layer).
"""
assert old85 in text, "85 header missing"
text = text.replace(old85, new85, 1)

# 86 header - need exact KNOW FIRST line
m86 = re.search(
    r"# PHASE 86 - Coordination & Consensus\n\n\*\*Track:\*\* .+?\n\n\*\*WHAT YOU WILL BE ABLE TO DO:\*\* .+?\n\n\*\*WHAT YOU SHOULD KNOW FIRST:\*\* .+?\n(?:\n\*Relocated[^\n]+\*\n)?",
    text,
    re.S,
)
assert m86, "86 header regex failed"
new86 = """# PHASE 86 - Coordination & Consensus

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Explain what a consensus algorithm (e.g. Raft) buys you - leader election and replicated log agreement - when machines can fail or lose contact.

**WHAT YOU SHOULD KNOW FIRST:** Phase 85 (CAP is the problem statement consensus responds to), Phase 53 (agreement across threads foreshadows agreement across machines).
"""
text = text[: m86.start()] + new86 + text[m86.end() :]

old88 = """# PHASE 88 - Complete System Design

**Track:** Engineering when the amount of work grows

**WHAT YOU WILL BE ABLE TO DO:** Design systems that keep working correctly as traffic, data, and team size grow - by walking the same progressive-problem-solving path real engineering organizations walk.

**WHAT YOU SHOULD KNOW FIRST:** Everything before it. System design is where Phases 1-77 stop being separate subjects and become one toolbox you draw from at once.

*Relocated from old Phase 40 during the Story XI structural migration; prose has not been rewritten to the new lesson template yet.*
"""
new88 = """# PHASE 88 - Complete System Design

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Run a full system-design walkthrough unprompted - requirements → capacity → components → data → trade-offs → failure modes - using Phases 81-87 as a toolbox.

**WHAT YOU SHOULD KNOW FIRST:** Phases 81-87 (foundations through reliability patterns). This phase combines them; it does not introduce a new building block.
"""
assert old88 in text, "88 header missing"
text = text.replace(old88, new88, 1)

# --- Transitions ---
old81t = """**WHY THE NEXT TOPIC IS NEEDED - the CAP Theorem:** The stages above kept adding machines, and each addition quietly assumed those machines can talk to each other. They cannot, not always. Networks partition, and the moment they do, a system spread across them faces a choice that is not an engineering weakness but a provable limit, and no amount of careful implementation avoids it.

---

> **Phase 81 complete?** [Continue to Phase 82](#phase-82)
"""
new81t = """**WHY THE NEXT TOPIC IS NEEDED - Scaling Applications:** A load-balanced diagram is only the starting shape. Under real traffic you must name *which* resource is scarce and pick the scaling move that multiplies that resource - Phase 82.

---

> **Phase 81 complete?** [Continue to Phase 82](#phase-82)
"""
assert old81t in text, "81 transition missing"
text = text.replace(old81t, new81t, 1)

# 85 transition to 86 is already correct thematically - keep, maybe light touch
# 86 transition: Projects → Reliability
old86t = """**WHY THE NEXT TOPIC IS NEEDED - Projects:** Phases 1 through 86 have built a complete mental model, concept by concept. None of it is fully internalized until you've built something real with it - a project is where a concept stops being "something I can explain" and becomes "something I've debugged at 11pm and now actually understand."
"""
new86t = """**WHY THE NEXT TOPIC IS NEEDED - Reliability Patterns:** Consensus tells you how machines agree. It does not tell a service how to survive a slow or dead dependency without taking the whole fleet down - timeouts, retries, and circuit breakers. That is Phase 87.
"""
assert old86t in text, "86 transition missing"
text = text.replace(old86t, new86t, 1)

old88t = """**WHY THE NEXT TOPIC IS NEEDED - Distributed Systems:** Phase 81 introduced replication, sharding, and microservices as *techniques* for scaling, and named the CAP theorem as the fundamental limit they all operate under. It didn't yet explain *how* multiple machines actually agree on anything - how a replica knows it has the latest data, or how a cluster picks a new leader when the old one fails. That's the deeper mechanics of distributed systems.
"""
new88t = """**WHY THE NEXT TOPIC IS NEEDED - Other Core CS Areas:** You can now design for scale, asynchrony, partitions, consensus, and partial failure. Story XII steps sideways into AI foundations, specialized platforms, and the societal consequences of software - starting at Phase 89.
"""
assert old88t in text, "88 transition missing"
text = text.replace(old88t, new88t, 1)

# --- Stale ref remaps inside Story XI phases (81-88 bodies only) ---
def remap_section(start_marker: str, end_marker: str, replacements: list[tuple[str, str]]):
    global text
    s = text.index(start_marker)
    e = text.index(end_marker, s + 10)
    seg = text[s:e]
    for a, b in replacements:
        seg = seg.replace(a, b)
    text = text[:s] + seg + text[e:]

# Order matters: longer / more specific first
common = [
    ("Phase 40.2", "Phase 85"),
    ("Phase 40.1", "Phase 81"),
    ("Phase 41.2", "Phase 86"),
    ("Phase 37.6", "Phase 65"),
    ("Phase 37.5", "Phase 64"),
    ("Phase 37.2", "Phase 61"),
    ("Phase 36.2", "Phase 59"),
    ("Phase 39.3", "Phase 77"),
    ("Phase 34.3", "Phase 53"),
    ("Phase 17.2", "Phase 85"),
    ("Phase 17.1", "Phase 65"),
    ("Phases 1-77", "Phases 1-84"),
    ("Phase 40", "Phase 81"),
    ("Phase 41", "Phase 85"),
    ("Phase 39", "Phase 72"),
    ("Phase 37", "Phase 60"),
    ("Phase 36", "Phase 58"),
    ("Phase 31", "Phase 41"),  # graphs if referenced - old 31→41
]

remap_section("# PHASE 81 -", "# PHASE 82 -", common)
remap_section("# PHASE 85 -", "# PHASE 86 -", common)
remap_section("# PHASE 86 -", "# PHASE 87 -", common)
remap_section("# PHASE 88 -", "# PHASE 89 -" if "# PHASE 89 -" in text else "# PHASE 95 -", common)

# Composio resource refresh lines on relocated SEE IT sections
if "donnemartin/system-design-primer" not in text[
    text.index("# PHASE 81 -") : text.index("# PHASE 82 -")
]:
    needle = "**SEE IT BEFORE YOU MEMORIZE IT**"
    s = text.index("# PHASE 81 -")
    e = text.index("# PHASE 82 -")
    seg = text[s:e]
    if needle in seg:
        add = (
            needle
            + "\n\n- Composio refresh: [system-design-primer](https://github.com/donnemartin/system-design-primer) *(Composio GitHub + DeepWiki)*; [Load Balancing (Exponent)](https://www.youtube.com/watch?v=chyZRNT7eEo) *(Composio YouTube)*\n"
        )
        seg = seg.replace(needle + "\n", add, 1)
        text = text[:s] + seg + text[e:]

s85 = text.index("# PHASE 85 -")
e85 = text.index("# PHASE 86 -")
seg85 = text[s85:e85]
if "gkg-FAEXIkY" not in seg85 and "**SEE IT BEFORE YOU MEMORIZE IT**" in seg85:
    seg85 = seg85.replace(
        "**SEE IT BEFORE YOU MEMORIZE IT**\n",
        "**SEE IT BEFORE YOU MEMORIZE IT**\n\n- Composio refresh: [CAP theorem explained (Studying With Alex)](https://www.youtube.com/watch?v=gkg-FAEXIkY) *(Composio YouTube)*; Brewer CAP materials *(Composio web + Scholar)*; [Patterns of Distributed Systems](https://martinfowler.com/articles/patterns-of-distributed-systems/) *(Composio fetch)*\n",
        1,
    )
    text = text[:s85] + seg85 + text[e85:]

s86 = text.index("# PHASE 86 -")
e86 = text.index("# PHASE 87 -")
seg86 = text[s86:e86]
if "raft.github.io" not in seg86 and "**SEE IT BEFORE YOU MEMORIZE IT**" in seg86:
    seg86 = seg86.replace(
        "**SEE IT BEFORE YOU MEMORIZE IT**\n",
        "**SEE IT BEFORE YOU MEMORIZE IT**\n\n- Composio refresh: [Raft site](https://raft.github.io/) *(Composio fetch)*; [Raft explained](https://www.youtube.com/watch?v=IujMVjKvWP4) *(Composio YouTube)*; DeepWiki on `hashicorp/raft` *(Composio DeepWiki)*; Ongaro/Ousterhout paper *(Composio web + Scholar)*\n",
        1,
    )
    text = text[:s86] + seg86 + text[e86:]

s88 = text.index("# PHASE 88 -")
e88 = text.index("# PHASE 89 -") if "# PHASE 89 -" in text else text.index("# PHASE 95 -")
seg88 = text[s88:e88]
if "HHUi8F_qAXM" not in seg88 and "**SEE IT BEFORE YOU MEMORIZE IT**" in seg88:
    seg88 = seg88.replace(
        "**SEE IT BEFORE YOU MEMORIZE IT**\n",
        "**SEE IT BEFORE YOU MEMORIZE IT**\n\n- Composio refresh: [System design interview walkthroughs (ByteByteGo)](https://www.youtube.com/watch?v=HHUi8F_qAXM) *(Composio YouTube)*; [system-design-primer](https://github.com/donnemartin/system-design-primer) *(Composio GitHub)*\n",
        1,
    )
    text = text[:s88] + seg88 + text[e88:]

# --- Index ---
old_idx = """| 81  | System Design Foundations *(current)* | One server to many                   | Walk a system from single-server to load-balanced            |
| 82  | Scaling Applications                  | Handle more load                     | Identify a bottleneck and the fix that removes it            |
| 83  | Caching                               | Trade staleness for speed            | Choose a cache strategy and explain its invalidation risk    |
| 84  | Asynchronous & Event-Driven Systems   | Decouple with queues/events          | Explain when a queue beats a direct call                     |
| 85  | Distributed Systems *(current)*       | Reason about failure across machines | Explain the CAP theorem with a concrete example              |
| 86  | Coordination & Consensus *(current)*  | Agree despite failure                | Explain what a consensus algorithm buys you                  |
| 87  | Reliability Patterns                  | Survive partial failure              | Explain retries, timeouts, circuit breakers, and their risks |
| 88  | Complete System Design *(current)*    | Put it all together                  | Run a full system design walkthrough unprompted              |"""

new_idx = """| 81  | System Design Foundations *(current)* | One server to many                   | Walk a system from single-server to load-balanced            |
| 82  | Scaling Applications *(current)*      | Handle more load                     | Identify a bottleneck and the fix that removes it            |
| 83  | Caching *(current)*                   | Trade staleness for speed            | Choose a cache strategy and explain its invalidation risk    |
| 84  | Asynchronous & Event-Driven Systems *(current)* | Decouple with queues/events  | Explain when a queue beats a direct call                     |
| 85  | Distributed Systems *(current)*       | Reason about failure across machines | Explain the CAP theorem with a concrete example              |
| 86  | Coordination & Consensus *(current)*  | Agree despite failure                | Explain what a consensus algorithm buys you                  |
| 87  | Reliability Patterns *(current)*      | Survive partial failure              | Explain retries, timeouts, circuit breakers, and their risks |
| 88  | Complete System Design *(current)*    | Put it all together                  | Run a full system design walkthrough unprompted              |"""
assert old_idx in text, "Story XI index missing"
text = text.replace(old_idx, new_idx, 1)

# Migration batch 7
m7 = re.search(r"(\| 7\s+\| Stories IX - XI[^\|]+\| )([^\n]+)", text)
assert m7, "batch 7 missing"
status = (
    "Stories IX-XI Done - Story IX-X as before; Story XI: new Phases 82-84, 87 written; "
    "relocated 81/85/86/88 unique abilities/prereqs/transitions fixed, stale 36.x/37.x/39.x/40.x/41.x refs remapped, "
    "disclaimers removed, Composio resources (YouTube, web, fetch, Scholar, GitHub, DeepWiki; Drive/Sheets empty; Gmail 403). |"
)
text = text[: m7.start(2)] + status + text[m7.end() :]

# Missing-phases note
m = re.search(r'Phases with no "current" row above[^\n]+', text)
assert m, "missing note not found"
replacement = (
    'Phases with no "current" row above - all of Story XII (89-91) and Story XIII (92-94); '
    "Story XIV phases 96-98; Story XV phases 100-101 - do not exist yet anywhere in this document "
    "and will be written from scratch in the batch listed in [Migration status](#migration-status)."
)
text = text[: m.start()] + replacement + text[m.end() :]

cs.write_text(text, encoding="utf-8")
nums = [int(n) for n in re.findall(r"^# PHASE (\d+) - ", text, re.M)]
print("total", len(nums))
print("81-88", [n for n in nums if 81 <= n <= 88])
print("missing", [n for n in range(81, 89) if n not in nums])
