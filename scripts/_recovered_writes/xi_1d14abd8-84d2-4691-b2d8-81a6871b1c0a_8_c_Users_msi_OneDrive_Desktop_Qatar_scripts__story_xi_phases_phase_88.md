# PHASE 88 - Complete System Design

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Run a full system-design walkthrough unprompted — requirements → capacity → components → data → trade-offs → failure modes — using Phases 81–87 as a toolbox. This is the **Story XI learning capstone**. Interview application of the same skill under clock pressure returns in Story XV / Phase 103.

**WHAT YOU SHOULD KNOW FIRST:** Phases 81–87 — foundations through reliability patterns. This phase combines them; it does not introduce a new building block.

**LEARNING RESOURCES:**

- [Design a URL Shortener (ByteByteGo)](https://www.youtube.com/watch?v=JQDHz72OA3c) — compare after you draft your own
- [System Design Primer — worked solutions](https://github.com/donnemartin/system-design-primer#system-design-interview-questions-with-solutions)
- [Excalidraw](https://excalidraw.com/) — diagram the walkthrough cold
- Re-skim your own Story XI notes for 82–87 levers before starting

## 88.1 Putting It Together - Worked System Design Walkthrough

Phases 81–87 gave you a process, mechanisms, and a fundamental limit. Knowing every technique does not tell you which to reach for when a requirement arrives underspecified. That **selection** skill is what this phase trains: a learning walkthrough you can run without a tutor pointing at the next lever.

**PHASE 88 VS PHASE 103 (OWNERSHIP):**

| | Phase 88 (here) | Phase 103 (Story XV) |
| - | --------------- | -------------------- |
| Goal | Internalize the toolbox by walking a design calmly | Apply the same process under interview time pressure |
| Framing | Curriculum capstone — teach yourself the integration | Live interview application — narration graded under clock |
| New mechanisms | None | None |
| Avoid | Turning this page into mock-interview theater | Re-teaching CAP/Raft from scratch |

Do not invent portfolio work that steals later stories. The Projects.md card for this phase is a focused design exercise, not a second capstone product.

**THE WALKTHROUGH SHAPE (SAME SIX MOVES AS 81, NOW WITH DEPTH):**

1. Clarify and scope — functional list, explicit non-goals, NFRs that decide architecture.
2. Estimate — RPS, storage, working set (Phase 81 arithmetic).
3. API + data model — endpoints and keys; access patterns surface (59–65).
4. Simplest design — deliberately too small.
5. Scale by named bottlenecks — pull 82–87 only when a number forces each lever; each lever names the **new problem** it introduces.
6. Failure modes and operations — what breaks, what Phase 80 would show, what you alert on.

Narrate options you reject. Name costs. Arrive at complexity through bottlenecks — do not draw nine boxes in minute one.

**WORKED EXAMPLE — BOOKSTORE CAMPAIGN URL SHORTENER:**

Quarry Bookstore runs campaigns: print ads and emails point at short links that redirect to product pages. Same company as the catalog; different load shape (read-heavy redirects).

```text
PROMPT: Design the bookstore's URL shortener.

1. CLARIFY
     in scope:  create short link, redirect, optional alias/expiry,
                aggregate click counts
     out:       full user accounts UI, per-click forensic detail, spam ML
     scale:     100M new links/month, ~100:1 read:write
     latency:   redirect p99 < 100 ms (user-facing)
     available: 99.99% redirects; 99.9% creation OK
     consist.:  a created link MUST resolve immediately for its creator;
                analytics may be eventually consistent
                ^ different operations → different levers (85.2)

2. ESTIMATE                                    (Phase 81)
     writes   ~40/s avg, ~200/s peak       → one primary; NO sharding yet
     reads    ~4k/s avg, ~20k/s peak       → cache mandatory (83)
     storage  ~1.5 TB / 5 years            → one disk class machine
     hot set  few GB Zipfian               → fits RAM
     keyspace base62^7 plenty of headroom

3. API + DATA
     POST /links      {url, alias?, ttl?}  → 201 {code, short_url}
     GET  /{code}                          → 302 Location: long_url
     GET  /links/{code}/stats              → {clicks}

     links(code PK, long_url, created_at, expires_at)
     clicks_daily(code, day, count) PK(code, day)
       — do NOT store one row per click at this volume

4. SIMPLEST DESIGN
     Client → App → Postgres
     Serves ~200 rps writes easily. Stops here until a bottleneck appears.

5. SCALE — one bottleneck at a time

     Bottleneck: 20k reads/s >> one Postgres
       Lever 83: Redis cache-aside code → long_url
       New problem: staleness / invalidation
       Mitigation: links are mostly immutable until expiry;
                   TTL = link TTL; DEL on admin disable
       Remaining miss traffic ~1k/s — fine

     Bottleneck: app CPU at high QPS
       Lever 82: LB + N stateless app instances
       New problem: sticky sessions — N/A here (no server sessions). Say so.

     Bottleneck: single Postgres SPOF
       Lever 65/82: primary + replicas for misses/failover
       New problem: replication lag vs "creator clicks immediately"
       Fix: write-through cache on create (83) so redirect never needs
            a lagging replica — read-your-own-writes for free on this path

     Analytics path:
       Lever 84: enqueue click events; workers upsert clicks_daily
       New problem: at-least-once → idempotent upserts / dedupe keys

     Leadership / metadata (if multi-primary fantasy appears):
       Lever 86: only if you truly need automated leader election —
                 at this scale a managed primary is enough; say why
       Do not put redirects through Raft.

     Caller survival:
       Lever 87: timeouts on Redis/DB; breaker on dependency; retries
                 only on idempotent redirect path as appropriate
       New problem: retry storms if misconfigured

     NOT needed (and say why): sharding (200 w/s), microservices split,
       cross-region quorum on every redirect (PACELC latency bill — 85.1)

6. FAILURE MODES
     Redis down → fall through to Postgres (capacity plan for this)
     Postgres primary down → failover; accept brief create unavailability
     Worker lag → stats delayed, redirects unaffected (async win)
     Partition between regions → prefer CP for link create if dual-write
       risk; redirects from edge cache of immutable data can stay available
```

```text
                    ┌──────────────┐
   create/redirect  │  LB + apps   │
         ──────────►│  (stateless) │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              v            v            v
           Redis        Postgres     Queue
         (cache-aside)  primary+     (clicks)
                         replicas       │
                                        v
                                     workers
                                  (idempotent)
```

**SECOND SKETCH (SHORTER) — SOCIAL-STYLE ACTIVITY FEED FOR “FOLLOWED AUTHORS”:**

Only enough to show the toolbox transfers. Clarify: fan-out on write vs fan-out on read. Estimate: write amplification if every follower gets a copy. Cache timelines (83). Async fan-out (84). Eventual consistency for “like counts” vs stronger for “purchase receipt” (85). Do not start with Kafka + seven services. Numbers first; name the first scarce resource (82).

**COMMON FAILURE MODES OF THE *DESIGN PROCESS*:**

1. Drawing the final architecture before a bottleneck is named.
2. Never doing the arithmetic — even correct boxes are unjustified.
3. One global consistency label for every operation.
4. Retries without idempotency or breakers (87) bolted on as afterthoughts.
5. Treating Phase 88 like a timed interview rehearsal — save that energy for 103.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List the walkthrough steps and which Story XI phase arms each |
| Medium | Cold-draw the shortener: clarify → estimate → simplest → two bottlenecks with levers and new problems |
| Medium | For the feed sketch, argue fan-out-on-write vs fan-out-on-read with one number each |
| Hard | Take “bookstore checkout” and produce a one-page design that explicitly uses 82, 83, 84, 85, and 87 at least once each — and names what you are *not* doing |

**WHAT THIS UNLOCKS NEXT:**

Story XI made you able to **design for scale, asynchrony, partitions, consensus, and partial failure** — clarify and estimate first, then pull levers only when numbers force them, always naming the new problem each lever introduces. That distributed-systems toolkit still leaves large regions of CS untouched: learning from data, specialized platforms, and the societal consequences of software. Story XII steps sideways into those areas, starting with Artificial Intelligence foundations at Phase 89 — a survey vocabulary, not an LLM specialty track, and not more CAP.

---

> **Phase 88 complete?** [Build the Phase 88 mini-project](../guides/Projects.md#cs-phase-88-project) · [Continue to Phase 89](#phase-89)

---
