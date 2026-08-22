# PHASE 81 - System Design Foundations

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Clarify a vague system-design prompt, run back-of-the-envelope estimates, draw the simplest shape that could work, and name which later lever (scale, cache, queue, consistency, consensus, reliability) the numbers force you to open next.

**WHAT YOU SHOULD KNOW FIRST:** Phase 80 — you can ship and observe one coherent system. Phases 55–65 — networks and databases already exist. Phase 68 — sticky in-process sessions break the moment a second app server appears.

**LEARNING RESOURCES:**

- [How to Answer System Design Interview Questions (Exponent)](https://www.youtube.com/watch?v=L9TfZdODuFQ) — process shape, not mechanisms
- [How to Approach Capacity Estimation (System Design Daily)](https://www.youtube.com/watch?v=L_ZwlSRIG5E)
- [System Design Primer](https://github.com/donnemartin/system-design-primer) — reference atlas; Phases 82–87 own the depth
- [Excalidraw](https://excalidraw.com/) — diagram + timer practice

## 81.1 How to Think About System Design

Story X left you able to ship and observe a system you can still reason about as a unit. The next limit is not “write better code.” It is load, partial failure, and more than one machine — when one coherent box stops being enough. System design is the skill of *selecting* components under incomplete requirements. This phase owns the **process and the map**. Phases 82–87 own the mechanisms. Phase 88 is the learning walkthrough that combines them; Story XV / Phase 103 applies the same skill under interview pressure.

**THE SIX MOVES (REHEARSE EVERY TIME):**

1. **Clarify** — functional requirements, explicit non-goals, users, read:write ratio, latency, availability, consistency needs. A vague prompt is a trap; narrowing it is the first graded skill.
2. **Estimate** — average and peak RPS, storage per year, bandwidth, working-set size. Numbers license every later choice — including *not* sharding.
3. **API + data sketch** — endpoints and primary tables/keys (Phases 59–65). Access patterns surface here before boxes do.
4. **Simplest design** — one box, or app + DB. Do not draw nine boxes first.
5. **Walk bottlenecks** — what breaks first; which phase owns the fix.
6. **Trade-offs + failure** — every stage costs complexity; name the cost and the new failure mode.

**WHY ESTIMATION IS NOT OPTIONAL:**

Without numbers, “we need microservices” and “one Postgres is fine” are both opinions. With numbers, they become decisions. A design review (or a good interview) rewards the candidate who can say “~200 peak writes/s → one primary; ~20k peak reads/s → cache first, not shard.” Arithmetic is how you earn the right to stay simple.

Rough constants you will reuse:

```text
Seconds per day ≈ 86_400
Peak ≈ 2–5× average (state your assumption)
Storage ≈ rows × bytes_per_row × retention
Working set ≈ hot_fraction × total (often Zipfian: few keys get most reads)
```

**VERTICAL VS HORIZONTAL (NAMED HERE; DIAGNOSED IN 82):**

| | Vertical | Horizontal |
| - | -------- | ---------- |
| Idea | Bigger machine | More machines |
| Wins | Simple; no app rewrite | Near-unbounded; redundancy |
| Costs | Finite ceiling; one failure domain | Statelessness required; shared state moves out |

“Stateless app tier” means session files, job state, and uploads do **not** live in the app process. When you add a second server, sticky sessions fight you — shared session store or tokens (Phase 68) become necessary. Phase 82 practices finding *which* scarce resource forces that move.

**OWNERSHIP MAP (DO NOT RE-TEACH HERE):**

```text
Phase 81  process + map + estimation habit
Phase 82  find the scarce resource; scale that tier (LB, replicas)
Phase 83  caching strategies + invalidation / stampede
Phase 84  queues / events; at-least-once + idempotency
Phase 85  CAP / PACELC; consistency models across machines
Phase 86  consensus (Raft-level intuition); leader agreement
Phase 87  timeouts, retries, circuit breakers (caller-side survival)
Phase 88  full walkthrough combining the toolbox
```

**JOURNEY MAP (PREVIEW ONLY — MECHANISMS LIVE LATER):**

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

**HEALTHY REVISIT:** Phase 65 already taught replication vs partitioning vs sharding as *database ops*. Here you only ask *when the numbers force them*. CAP (Phase 85) is the limit those choices operate under — not something you solve with “add a cache.”

Keep one running domain across Story XI: **Quarry Bookstore** (catalog, cart, checkout — from Story VIII) plus a **marketing URL shortener** the bookstore uses for campaign links. Same company; different load shapes. That reuse makes trade-offs comparable phase to phase.

**BOOKSTORE SHORT LINKS — ESTIMATION BEFORE ARCHITECTURE:**

```text
"URL shortener for bookstore campaigns: 100M new links / month"

WRITES: 100M/30/86400 ≈ 40/s avg → ~200/s peak
  → one primary DB is fine. Do not shard yet.

READS: assume 100:1 → ~4k/s avg, ~20k peak
  → cache becomes necessary (Phase 83); replicas if miss path still hot (65/82).

STORAGE: ~260B/row → ~26 GB/month → ~1.5 TB / 5 years
  → fits one disk. Sharding is for write volume or working set, not vanity.

CONCLUSION WITH NUMBERS: stages 1–5, not 6–7.
Designing microservices unasked is the common failure mode.
```

An architect does not start by picking marble finishes. First: how many people, what loads, what the code allows, what fails in a fire. Estimation is the load calculation. The stage map is the structural system. Finishes (Redis, Kafka, Raft) come after the arithmetic says you need them — that is Phases 82–87.

```python playground=cs-phase-81-estimate
# Estimation habit - arithmetic first, architecture second.
# Caching/queue code belongs in Phases 83–84; this only sizes the problem.

def estimate(name, monthly_writes, read_write_ratio, bytes_per_row,
             peak_multiplier=5, hot_fraction=0.2, years=5):
    w_avg = monthly_writes / 30 / 86_400
    w_peak = w_avg * peak_multiplier
    r_peak = w_peak * read_write_ratio
    storage_year = monthly_writes * 12 * bytes_per_row
    hot_bytes = monthly_writes * bytes_per_row * hot_fraction

    print(f"=== {name} ===")
    print(f"writes peak ≈ {w_peak:,.0f}/s   reads peak ≈ {r_peak:,.0f}/s")
    print(f"storage ≈ {storage_year/1e9:.1f} GB/yr; hot set ≈ {hot_bytes/1e9:.1f} GB")
    print(f"  shard writes (>10k/s)? {'YES' if w_peak > 10_000 else 'no → stay simple'}")
    print(f"  need cache (>5k reads/s)? {'YES → Phase 83' if r_peak > 5_000 else 'maybe later'}")
    print(f"  need async off path? ask: must user wait? (Phase 84)")

estimate("Bookstore URL shortener", 100_000_000, 100, 260)
estimate("Bookstore checkout ledger", 10_000_000, 10, 500)
estimate("Social-style activity feed", 50_000_000, 200, 400)
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List the six process steps from memory |
| Easy | Vertical vs horizontal in one sentence each; say what “stateless app” means |
| Medium | Estimate Quarry Bookstore checkout (state your assumptions). Name which phase owns your first scaling lever |
| Medium | Draw (Excalidraw) single-server → LB+apps → DB only — stop before inventing cache/queue detail |
| Hard | For shortener, feed, and ledger: write which stages the *numbers* force and which phases teach them |

**WHAT THIS UNLOCKS NEXT:**

A journey map is not a diagnosis. Under load you must name the scarce resource — CPU, disk, lock, network — and pick the move that multiplies *that* resource. Scaling without a bottleneck is cargo-cult architecture. That diagnosis habit is Phase 82.

---

> **Phase 81 complete?** [Continue to Phase 82](#phase-82)

---
