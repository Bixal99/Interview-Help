# PHASE 82 - Scaling Applications

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Identify a concrete bottleneck (CPU, memory, disk, network, or lock) under load and name the scaling move that removes *that* bottleneck — not a generic “add servers” answer.

**WHAT YOU SHOULD KNOW FIRST:** Phase 81 — process, estimation, journey map. Phases 49–54 — machines have finite CPU/RAM/I/O. Phases 55–59 — networks add latency and failure.

**LEARNING RESOURCES:**

- [Load Balancing system design (Exponent)](https://www.youtube.com/watch?v=chyZRNT7eEo)
- [Load Balancing Algorithms (ByteByteGo)](https://www.youtube.com/watch?v=dBmxNsS3BGE)
- DDIA chapter 1 vocabulary — reliability, scalability, maintainability (book)
- [system-design-primer — performance vs scalability notes](https://github.com/donnemartin/system-design-primer)

## 82.1 Find the Bottleneck, Then Scale

Phase 81 taught you to estimate and draw the simplest shape. “Scale it” is still not a design. Vertical scaling (bigger box) and horizontal scaling (more boxes) fix different limits. Guessing wrong wastes money and still leaves bookstore shoppers waiting on checkout. This phase owns the habit: **measure → name the scarce resource → pick the fix that multiplies that resource**.

**WHY A BOTTLENECK MUST COME FIRST:**

Adding app replicas when the database is pegged makes the outage *worse* — more workers hammer the same scarce disk. Adding a bigger CPU when the lock is global does nothing. The first skill is reading symptoms the way Phase 80 taught you to read signals: which resource is saturated, and what would happen if you only multiplied the *wrong* tier.

| Symptom | Likely scarce resource | First moves |
| ------- | ---------------------- | ----------- |
| CPU pegged; latency climbs with compute | CPU | Profile hot path; then more app replicas behind a **load balancer** |
| RAM grows with sessions / unbounded caches | Memory | Externalize session (Phase 68); bound caches (Phase 83); then more nodes |
| Disk / DB IOPS saturated; query queue depth rising | Storage I/O | Indexes, read replicas; shard later only if writes force it (Phase 65) |
| Timeouts while DB looks fine | Network / downstream | Connection pools; async off path (Phase 84); circuit breakers (Phase 87) |
| One lock / global mutex / single-threaded critical section | Contention | Partition work; avoid global serialization |

**VERTICAL THEN HORIZONTAL — AND THE NEW PROBLEM EACH CREATES:**

**Vertical** is the right first answer when you are still on one box and the numbers fit: bigger instance, more RAM, faster disk. It buys time without rewriting the app. The new problem: there is a hard ceiling, and the whole service is still one failure domain — one power event, one kernel panic, one bad deploy takes everything.

**Horizontal** multiplies capacity by adding machines. The new problem: anything stored *in* the process (sessions, uploads, in-memory job state) becomes wrong the moment request #2 hits a different node. You must make the app tier **stateless** and put durable shared state in DB, cache, or queue. Sticky sessions at the load balancer are a conscious trade-off that fights horizontal scale — prefer shared session store or tokens.

```text
BEFORE (one box):
  Client → [app + local sessions + DB on same machine]
  Ceiling: CPU or disk; failure domain: everything

AFTER (horizontal app tier):
  Client → LB → [app][app][app] → shared DB / cache / queue
                    ↑
           scale this tier when CPU-bound AND stateless
```

**LOAD BALANCER (THIS PHASE OWNS THE APP-TIER SHAPE):**

Clients hit one VIP (or DNS name). The LB distributes to healthy app instances — round-robin, least-connections, or consistent hashing when affinity is unavoidable. Health checks remove bad nodes so traffic stops landing on a dying process. The LB does **not** fix a saturated database; it only multiplies the app tier.

What the LB introduces: another hop, another config surface, and the temptation to sticky-session your way out of shared state. Say the trade-off out loud when you choose stickiness.

**BOOKSTORE CHECKOUT UNDER LOAD — WORKED DIAGNOSIS:**

```text
Observation (Phase 80 signals):
  http_p95_ms ↑     app CPU 25%     db_cpu 92%     checkout_errors ↑

Wrong move:  add 10 app pods
  → more connections → DB worse → error storm

Right move:  name scarce resource = DB CPU / query path
  → check slow queries / missing indexes
  → then read replicas for catalog reads (Phase 65 ops)
  → app replicas ONLY after DB headroom returns

If instead app CPU were 95% and DB 20%:
  → horizontal app scale behind LB is the lever
  → but first confirm sessions are not in-process
```

**NOT OWNED HERE:** cache-aside and invalidation detail (83), queue design (84), CAP proofs (85). You may *name* those as next levers when the bottleneck is “same hot rows” or “slow side effects” — you do not design them yet.

```python playground=cs-phase-82-bottleneck
# Toy capacity model: find which resource hits 100% first.

def diagnose(rps, cpu_ms_per_req, db_ms_per_req, cpu_cores, db_qps_cap):
    cpu_util = (rps * cpu_ms_per_req / 1000) / cpu_cores
    # crude: each request holds DB for db_ms; convert to equivalent QPS pressure
    db_util = (rps * db_ms_per_req / 1000) / (db_qps_cap * (db_ms_per_req / 1000))
    # simpler saturation model used in the lesson:
    db_util_simple = rps / db_qps_cap
    print(f"rps={rps}  CPU util≈{cpu_util:.2f}  DB util≈{db_util_simple:.2f}")
    if db_util_simple >= 1 and db_util_simple >= cpu_util:
        print("Bottleneck: DB — indexes/replicas/cut queries before more app pods.")
    elif cpu_util >= 1:
        print("Bottleneck: CPU — add app replicas after confirming stateless tier.")
    else:
        print("Headroom remains — measure again under real traffic.")

print("--- bookstore catalog browse spike ---")
diagnose(rps=800, cpu_ms_per_req=1.5, db_ms_per_req=4.0, cpu_cores=4, db_qps_cap=200)

print("--- CPU-heavy recommendation toy ---")
diagnose(rps=200, cpu_ms_per_req=25.0, db_ms_per_req=1.0, cpu_cores=4, db_qps_cap=500)
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define vertical vs horizontal scaling in one sentence each |
| Medium | Given “p99 latency up, CPU 30%, DB CPU 95%,” pick the first fix and why adding app pods would hurt |
| Medium | Draw before/after for making a session-sticky bookstore monolith horizontally scalable |
| Hard | For three symptoms (CPU pegged; disk saturated; global lock), name the scarce resource, the scale move, and the *new* problem that move introduces |

**WHAT THIS UNLOCKS NEXT:**

Scaling compute does not help if every request still hits a slow dependency for the same hot catalog row. Caching trades freshness for speed — and creates invalidation risk and stampedes. That staleness budget is Phase 83.

---

> **Phase 82 complete?** [Continue to Phase 83](#phase-83)

---
