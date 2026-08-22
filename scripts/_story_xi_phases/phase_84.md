# PHASE 84 - Asynchronous & Event-Driven Systems

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Explain when a message queue or event log beats a synchronous call — including at-least-once delivery, idempotent consumers, and the new problems of lag, duplicates, and harder debugging.

**WHAT YOU SHOULD KNOW FIRST:** Phases 82–83 — you have scaled and cached the sync path. Phases 55–59 — networks fail; timeouts matter. Phase 80 — traces help when work leaves the request thread.

**LEARNING RESOURCES:**

- [Kafka introduction (Apache)](https://kafka.apache.org/intro) — event log mental model
- [Message queues vs event streams overview](https://www.youtube.com/watch?v=PQHf_IzmUXE)
- [Patterns of Distributed Systems](https://martinfowler.com/articles/patterns-of-distributed-systems/)
- Phase 80 observability — follow a message across services with correlation ids

## 84.1 Decouple With Queues and Events

A bookstore checkout HTTP handler that also sends email, resizes the gift-wrap image, and updates search will time out and fail partially. Caching (83) helps repeated *reads*. It does not help slow *side effects* that must not block the user’s “order placed” response. This phase owns asynchronous designs that **accept work quickly**, then process it elsewhere — at the cost of eventual visibility, duplicate delivery, and harder debugging. Not a Kafka internals course; not consensus (86).

**WHY DECOUPLING BECOMES NECESSARY NOW:**

Synchronous chains create a failure union: any dependency down → caller fails. They also create a latency sum: every side effect adds to p99. When Phase 81’s clarify step says “user must not wait for email,” or Phase 82 shows timeouts while the DB is fine, you pull work off the request path. The new problem: the user may see “accepted” before side effects finish — and the same message may be delivered more than once.

**WHEN A QUEUE / EVENT BEATS A DIRECT CALL:**

1. Work is slow, bursty, or optional to the immediate user response.
2. Multiple independent consumers need the same fact (email + analytics + search).
3. You want **backpressure** (a buffer) instead of cascading timeouts into the API tier.

**WHEN A DIRECT CALL STILL WINS:**

The caller must know the result to continue — auth check, price quote, inventory reservation that must be sync-consistent for the next screen. Do not async your way out of a consistency requirement you have not designed (that conversation continues in Phase 85).

| Model | Strength | Watch-outs |
| ----- | -------- | ---------- |
| **Work queue** (compete consumers) | Parallelize jobs | Poison messages; visibility timeout; ordering not global |
| **Pub/sub** | Fan-out to many subscribers | Independent failure per subscriber |
| **Event log** (Kafka-style) | Replay; multiple consumer groups | Offset management; retention; **ordering per partition**, not globally |

```text
SYNC (coupled):
  API ──email──► mailer ──resize──► images ──index──► search
    └── user waits; any X fails the whole request

ASYNC (decoupled):
  API ──enqueue──► Queue/Log ──► Workers (email, images, search)
    │                              │
    └── fast 202 / "accepted"      └── side effects later
```

**AT-LEAST-ONCE IS THE DEFAULT — DESIGN FOR IT:**

Most practical queues give **at-least-once** delivery: after a crash, a message may be redelivered. Exactly-once is a special claim that usually means “effectively once” via idempotent writes + careful offsets — not magic.

Therefore consumers must be **idempotent**:

- Dedupe on a business key (`order_id`) stored in a processed-set or unique constraint.
- Prefer upserts over blind inserts.
- Never “debit account += amount” without a unique operation id.

```text
Message: { "order_id": "9", "action": "send_receipt" }

Delivery 1 → send email, record processed(order_id=9)
Delivery 2 → see processed → SKIP
Without dedupe → customer gets two receipts (annoying)
With money    → customer gets charged twice (catastrophic)
```

**THE NEW PROBLEMS ASYNC INTRODUCES:**

1. **Consumer lag** — producers are fine; workers fall behind; “eventual” becomes “hours.”
2. **Poison messages** — one bad payload blocks a partition/queue if you retry forever.
3. **Ordering illusions** — two partitions do not preserve global order; key by `user_id` when per-user order matters.
4. **Debuggability** — the HTTP request returned 202; the failure is elsewhere. Correlation ids and traces (Phase 80) become mandatory, not nice-to-have.
5. **Dual writes** — API writes DB *and* publishes an event; one can succeed without the other. Outbox pattern exists for a reason (name it; do not turn this phase into a catalog of every pattern).

**BOOKSTORE CHECKOUT — WORKED SPLIT:**

```text
Must be sync in the request:
  reserve inventory, charge payment, write order row

May be async after commit:
  send receipt email
  update recommendations
  reindex search
  notify warehouse

API returns 201 with order_id once the sync truth is durable.
Workers consume order_placed events; email consumer is idempotent on order_id.
```

Consensus about *who is leader* is Phase 86. Surviving a sick dependency with retries and breakers is Phase 87. Here you own the **decoupling contract**.

```python playground=cs-phase-84-queue-dedupe
# At-least-once delivery: same message may arrive twice. Idempotent handler.

inbox = ["order-9", "order-9", "order-10"]  # duplicate redelivery
done = set()
actions = []

for msg in inbox:
    if msg in done:
        print("SKIP duplicate", msg)
        continue
    actions.append(f"email:{msg}")
    done.add(msg)
    print("PROCESS", msg)

print("actions", actions)

# Contrast: non-idempotent debit would double-charge on the duplicate.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name one sync call and one async job in a typical bookstore checkout |
| Medium | Explain why at-least-once + non-idempotent debit is dangerous |
| Medium | Sketch when a work queue beats pub/sub for “send receipt,” and when fan-out wins |
| Hard | Design partition keys for “user_id ordered events” vs a case that needs global ordering — and say why global ordering hurts throughput |

**WHAT THIS UNLOCKS NEXT:**

Queues and replicas assume machines keep agreeing on reality. When you keep multiple copies — caches, DB replicas, event consumers — and the network partitions, you face a hard limit: during a partition you cannot have both perfect consistency and perfect availability. That limit is CAP, and it is Phase 85.

---

> **Phase 84 complete?** [Continue to Phase 85](#phase-85)

---
