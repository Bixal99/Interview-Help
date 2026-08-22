# PHASE 87 - Reliability Patterns

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Explain retries, timeouts, circuit breakers, and bulkheads — the failure mode each pattern prevents *and* the failure mode it introduces if misconfigured. This is *caller-side* survival, not replica agreement (Phase 86).

**WHAT YOU SHOULD KNOW FIRST:** Phases 84–86 — async and consensus still sit on unreliable networks. Phase 80 — you need signals to know a dependency is sick. Phase 77 — deploy/rollback is part of surviving bad releases.

**LEARNING RESOURCES:**

- [Circuit Breaker (Microsoft Azure Architecture Center)](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)
- [Retry pattern (Azure Architecture Center)](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry)
- [Bulkhead pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead)
- Resilience4j concepts (circuit breaker, retry, bulkhead) — skim one library overview

## 87.1 Survive Partial Failure

Consensus (86) keeps a *cluster* agreeing. Reliability patterns keep *your service* from melting when a dependency is sick. In a distributed bookstore, **something is always broken** — payments slow, mailer down, search timeout. Retries without backoff amplify outages. Missing timeouts hold threads forever. Without a circuit breaker, a dead dependency takes the whole fleet down. These patterns make services fail *locally* instead of globally. This phase does **not** re-teach CAP.

**WHY CALLER-SIDE PATTERNS BECOME NECESSARY NOW:**

Even with a correctly elected leader and a consistent quorum, the checkout API still calls payments over the network. Partial failure looks like: some calls succeed, some hang, some return 503. If every app thread waits forever, the app tier becomes the outage — even though your DB is fine (Phase 82’s wrong-bottleneck lesson, from the other side).

| Pattern | Prevents | Can cause if wrong |
| ------- | -------- | ------------------ |
| **Timeout** | Threads stuck on dead peers | False failures if too aggressive |
| **Retry + backoff + jitter** | Transient blips | **Retry storms** that melt the dependency |
| **Circuit breaker** | Repeated calls to a known-bad dependency | Cascading “open” if too sensitive; stuck open without half-open probes |
| **Bulkhead** | One pool of work starving all resources | Under-utilization; tuning complexity |
| **Idempotency keys** | Double effects under retry | Key mismanagement / too-short TTL |

**TIMEOUTS — THE FIRST LINE:**

Every outbound call needs a deadline. Without one, a slow payments service holds checkout workers until the whole site looks “down.” The new problem: timeouts that are too tight turn healthy-but-slow into false errors and unnecessary retries.

**RETRIES — HELP AND HARM:**

Retries fix transient network blips and brief leader elections. Unbounded immediate retries turn one slow dependency into a **retry storm**: N app instances × M retries × failing calls = accidental DDoS of the victim.

Rules of thumb:

- Cap attempts (often 2–3 for user-facing paths).
- Exponential backoff **with jitter** so clients do not align.
- Retry only **idempotent** or explicitly safe operations (Phase 84).
- Prefer fail-fast + degrade over hammering.

```text
WITHOUT JITTER (herd):
  t=0 fail → all retry at t=100ms → all retry at t=200ms → dependency dies harder

WITH JITTER:
  retries spread across a window → victim gets a chance to recover
```

**CIRCUIT BREAKER — STOP CALLING THE DEAD:**

```text
Closed ──failures──► Open ──cooldown──► Half-open ──success──► Closed
                         │                    │
                         └── fail fast        └── trial requests
```

- **Closed:** calls flow; track error rate / latency.
- **Open:** fail fast; do not touch the dependency; optionally serve degraded response (cached price, “payments temporarily unavailable”).
- **Half-open:** allow a few probes; success closes; failure re-opens.

The new problem: a breaker that opens on one blip flaps; a breaker that never half-opens stays dark forever. Thresholds need Phase 80 metrics — error rate and latency, not a single 500.

**BULKHEADS — LIMIT THE BLAST RADIUS:**

Isolate pools: checkout’s payments client gets its own connection/thread budget so a stuck search indexer cannot consume every worker. The new problem: more pools to size; idle capacity in one bulkhead while another saturates.

**BOOKSTORE CHECKOUT — COMBINED SKETCH:**

```text
Checkout API → payments (timeout 2s, max 2 retries with jitter, idempotency key)
            → inventory (timeout 500ms, breaker; on open: fail the order, do not guess stock)
            → enqueue receipt email (async; Phase 84) — never block checkout on SMTP

If payments breaker open:
  return 503 with retry-after — better than 30s hangs × 200 workers
```

Golden rules: every outbound call has a timeout; retries are capped and idempotent; breakers trip on error rate/latency; degrade gracefully when you can (cached non-critical reads) and fail loudly when you cannot (money).

```python playground=cs-phase-87-circuit-breaker
# Tiny circuit breaker: open after 3 failures; half-open after cooldown.

class Breaker:
    def __init__(self, threshold=3, cooldown=2):
        self.failures = 0
        self.threshold = threshold
        self.cooldown = cooldown
        self.state = "closed"
        self.open_until = 0

    def allow(self, t):
        if self.state == "open" and t >= self.open_until:
            self.state = "half-open"
        return self.state != "open"

    def record(self, ok, t):
        if ok:
            self.failures = 0
            self.state = "closed"
            return
        self.failures += 1
        if self.failures >= self.threshold:
            self.state = "open"
            self.open_until = t + self.cooldown

b = Breaker()
for t, ok in enumerate([False, False, False, False, True], start=1):
    if not b.allow(t):
        print(t, "FAIL-FAST", b.state)
        continue
    print(t, "CALL", "ok" if ok else "err")
    b.record(ok, t)
    print("   →", b.state)
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define timeout, retry, circuit breaker in one line each |
| Medium | Explain why retries without jitter worsen an outage |
| Medium | Contrast Phase 86 consensus vs Phase 87 breaker for “payments is sick” |
| Hard | Design breaker + timeout + retry budget for bookstore payments (what opens, what half-open means, what the user sees) |

**WHAT THIS UNLOCKS NEXT:**

You now have the Story XI toolbox: process and estimates (81), bottlenecks (82), cache (83), async (84), CAP/consistency (85), consensus (86), caller survival (87). Knowing each tool is not the same as choosing among them when a prompt is underspecified. Phase 88 forces an end-to-end **learning** walkthrough that uses the levers together — not interview theater (that returns in Phase 103).

---

> **Phase 87 complete?** [Continue to Phase 88](#phase-88)

---
