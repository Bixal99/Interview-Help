from pathlib import Path

new_81 = r'''# PHASE 81 - System Design Foundations

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Approach a system-design problem the way an interview or design review expects - clarify requirements, do back-of-the-envelope estimation, draw the simplest shape that could work, and name which later phase owns each scaling lever.

**WHAT YOU SHOULD KNOW FIRST:** Phases 72-80 (you can ship and observe software), Phases 55-65 (networks and databases already exist), Phase 68 (sessions break the moment a second app server appears).

## 81.1 How to Think About System Design

**WHY YOU ARE LEARNING THIS:** Stories I–X taught components. System design is the skill of *selecting* components under load, failure, and incomplete requirements. Phase 81 teaches the *process and map*. Phases 82–87 own the mechanisms (bottlenecks, caching, queues, CAP, consensus, reliability). Phase 88 is the learning capstone that walks a full design; Story XV applies the same skill under interview pressure.

**SEE IT BEFORE YOU MEMORIZE IT**

- Process: [How to Answer System Design Interview Questions (Exponent)](https://www.youtube.com/watch?v=L9TfZdODuFQ) *(Composio YouTube)*; [How to Approach Capacity Estimation (System Design Daily)](https://www.youtube.com/watch?v=L_ZwlSRIG5E) *(Composio YouTube)*
- Map overview: [Scalability Simply Explained (ByteByteGo)](https://www.youtube.com/watch?v=EWS_CIxttVw) *(Composio YouTube)* - stage progression; treat deep caching/async as previews of Phases 83–84, not the homework of this phase
- Alternative: [System Design Basics (Gaurav Sen)](https://www.youtube.com/watch?v=xpDnVSmNFX0) *(Composio YouTube)*
- Written: [System Design Primer](https://github.com/donnemartin/system-design-primer) *(Composio GitHub)* - reference atlas, not a substitute for 82–87
- Practice medium: [Excalidraw](https://excalidraw.com/) + a timer; prefer diagrams and arithmetic over premature code

**STEP-BY-STEP EXPLANATION**

**The process (rehearse this every time):**

1. **Clarify** - functional requirements, explicit non-goals, users, read:write, latency, availability, consistency needs.
2. **Estimate** - average and peak RPS, storage/year, bandwidth, working-set size. Numbers license every later choice (including *not* sharding).
3. **API + data sketch** - endpoints and primary tables/keys (Phases 59–65). Access patterns surface here.
4. **Simplest design** - one box or app+DB. Do not draw nine boxes first.
5. **Walk bottlenecks** - what breaks first; which phase owns the fix.
6. **Trade-offs + failure** - every stage costs complexity; name it.

**Vertical vs horizontal (owned lightly here; depth in Phase 82):**

| | Vertical | Horizontal |
| - | -------- | ---------- |
| Idea | Bigger machine | More machines |
| Wins | Simple; no app rewrite | Near-unbounded; redundancy |
| Costs | Finite ceiling; one failure domain | Statelessness required; shared state moves out |

**Stateless app tier:** "stateless" means session/files/job state do not live *in* the app process. Fixes when you add a second server: shared session store **or** tokens (Phase 68) - preview only; Phase 82 practices bottleneck diagnosis.

**Ownership map (do not re-teach these here):**

```text
Phase 81  process + map + estimation habit
Phase 82  find the scarce resource; scale that tier (LB, replicas)
Phase 83  caching strategies + invalidation / stampede
Phase 84  queues / events; at-least-once + idempotency
Phase 85  CAP / PACELC; consistency models across machines
Phase 86  consensus (Raft-level intuition); leader agreement
Phase 87  timeouts, retries, circuit breakers (client-side survival)
Phase 88  full walkthrough combining the toolbox
```

**Journey map (preview only - mechanisms live later):**

```text
1 single server          → ceiling: one box
2 vertical scale         → still one failure domain
3 LB + N app servers     → Phase 82 (sessions must leave local memory)
4 cache                  → Phase 83 (staleness budget)
5 DB replication         → Phase 65 revisit + Phase 85 consistency
6 sharding               → Phase 65 write scale; Phase 85 coordination cost
7 service split          → organizational scale; network failure → 85–87
(+ async off request path → Phase 84; reliability wrappers → Phase 87)
```

**Healthy revisit:** Phase 65 already taught replication vs partitioning vs sharding. Here you only ask *when the numbers force them*. CAP (Phase 85) is the limit those choices operate under - not something to solve with "add a cache."

**PICTURE IT LIKE THIS**

An architect does not start by picking marble finishes. First: how many people, what loads, what code allows, what fails in a fire. Estimation is the load calculation. The stage map is the structural system. Finishes (Redis, Kafka, Raft) come after the arithmetic says you need them - that is Phases 82–87.

**Internal Working, back-of-the-envelope (the skill this phase owns)**

```text
"URL shortener: 100M new links / month"

WRITES: 100M/30/86400 ≈ 40/s avg → ~200/s peak
  → one primary DB is fine. Do not shard yet.

READS: assume 100:1 → ~4k/s avg, ~20k peak
  → cache is mandatory (Phase 83); replicas if miss path still hot (65/82).

STORAGE: ~260B/row → ~26 GB/month → ~1.5 TB / 5 years
  → fits one disk. Sharding is for write volume or working set, not vanity.

CONCLUSION WITH NUMBERS: stages 1–5, not 6–7.
Designing microservices unasked is the common interview failure mode.
```

**SMALL WORKING EXAMPLE**

```python playground=cs-phase-81-estimate
# Estimation habit - arithmetic first, architecture second.
# Caching/queue code belongs in Phases 83–84; this only sizes the problem.

def estimate(name, monthly_writes, read_write_ratio, bytes_per_row,
             peak_multiplier=3, hot_fraction=0.2, years=5):
    w_avg = monthly_writes / 30 / 86_400
    w_peak = w_avg * peak_multiplier
    r_peak = w_peak * read_write_ratio
    storage_year = monthly_writes * 12 * bytes_per_row
    hot_bytes = monthly_writes * bytes_per_row * hot_fraction

    print(f"=== {name} ===")
    print(f"writes peak ≈ {w_peak:,.0f}/s   reads peak ≈ {r_peak:,.0f}/s")
    print(f"storage ≈ {storage_year/1e9:.1f} GB/yr; hot set ≈ {hot_bytes/1e9:.1f} GB")
    print(f"  shard writes (>10k/s)? {'YES' if w_peak > 10_000 else 'no → Phase 82/65 later'}")
    print(f"  need cache (>5k reads/s)? {'YES → Phase 83' if r_peak > 5_000 else 'maybe later'}")
    print(f"  need async off path? ask: must user wait? (Phase 84)")

estimate("URL shortener", 100_000_000, 100, 260)
estimate("Bank ledger", 10_000_000, 10, 500)
```

**PRACTICE UNTIL IT FEELS FAMILIAR**


| Difficulty | Task |
| ---------- | ---- |
| Easy | List the six process steps from memory |
| Easy | Vertical vs horizontal in one sentence each; name what "stateless app" means |
| Medium | Estimate a chat app (state assumptions). Say which phase owns your first scaling lever |
| Medium | Draw (Excalidraw) single-server → LB+apps → DB only - stop before inventing cache/queue detail |
| Hard | For three prompts (shortener, feed, ledger), write which stages the *numbers* force and which phases teach them |
| Hard | Narrate a 10-minute mock: clarify → estimate → simplest diagram → "I'd open Phase 83 next because…" |


**WHY THE NEXT TOPIC IS NEEDED - Scaling Applications:** A journey map is not a diagnosis. Under load you must name the scarce resource (CPU, disk, lock, network) and pick the move that multiplies *that* resource. That is Phase 82.

---

> **Phase 81 complete?** [Continue to Phase 82](#phase-82)

---



'''

p = Path(r'content/roadmaps/CS.md')
text = p.read_text(encoding='utf-8')
start = text.index('# PHASE 81 - System Design Foundations')
end = text.index('# PHASE 82 - Scaling Applications')
p.write_text(text[:start] + new_81 + text[end:], encoding='utf-8')
print('replaced phase 81; new len', len(new_81))
