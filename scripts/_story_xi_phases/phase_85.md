# PHASE 85 - Distributed Systems

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Explain the CAP theorem with a concrete partition example, distinguish CAP consistency from ACID consistency, apply PACELC lightly to everyday latency trade-offs, and reason about replication consistency models when the bookstore’s data lives on more than one machine.

**WHAT YOU SHOULD KNOW FIRST:** Phases 81–84 — you already scale, cache, and queue; CAP is the limit those techniques operate under. Phases 64–65 — ACID and replication/partitioning/sharding at the database layer (ops story). This phase revisits that machinery as *consistency theory*, not a second ops chapter.

**LEARNING RESOURCES:**

- [CAP Theorem Simplified (ByteByteGo)](https://www.youtube.com/watch?v=BHqjEjzAicA)
- [Eric Brewer — CAP twelve years later](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/)
- [Kleppmann — A Critique of the CAP Theorem](https://arxiv.org/abs/1509.05393)
- [Daniel Abadi on PACELC](https://dbmsmusings.blogspot.com/2010/04/problems-with-cap-and-yahoos-little.html)
- [Jepsen analyses](https://jepsen.io/analyses) — read one database you use; see which guarantees broke

## 85.1 The CAP Theorem

Phases 82–84 gave you more machines, more copies, and more asynchronous paths. The moment those machines can lose contact, a fundamental limit appears. No amount of clever caching invents a third option that Gilbert and Lynch already ruled out. This lesson owns that limit with a **concrete partition** — not a buzzword triangle.

**PROGRESSION 65 → 85 (HEALTHY REVISIT, NOT A DUPLICATE):**

Phase 65 taught *how* replication, partitioning, and sharding work inside a database story — failover, write scale, operational shapes. Phase 85 teaches what those techniques *cannot* promise once the network can partition: **CAP consistency is not ACID consistency**. The C in ACID (Phase 64) is about integrity constraints inside a database transaction. The C in CAP means *linearizability* (single-copy semantics) across replicas during a partition — a different, stronger, easier-to-lose property. Conflating them is a common interview failure.

**FORMAL PROPERTIES (PRECISE ENOUGH TO USE):**

The Gilbert–Lynch result concerns three properties:

- **Consistency (linearizability):** the system behaves as if there is a single copy of the data; every operation happens at one instant; any read returns the most recently completed write.
- **Availability:** every request to a non-failed node eventually receives a non-error response.
- **Partition tolerance:** the system continues to operate despite arbitrary message loss between nodes.

Most popular restatements are sloppy. Precision matters because “consistent enough” and “available enough” are how people talk themselves into believing they escaped the theorem.

**YOU DO NOT “PICK TWO OF THREE”:**

Partitions are not a product feature you enable. Cables get cut, switches fail, routes flap, and a sufficiently long delay is indistinguishable from a partition. **P is compulsory** for any system spread across a network. The theorem is a conditional about the partition window: choose C or A *then*. A system marketed as “CA” is really a single node — or a system that will be wrong when the network misbehaves.

**THE PROOF YOU SHOULD BE ABLE TO RECONSTRUCT:**

```text
Two nodes, one value, replicated. A cable is cut.

    client A                                    client B
       |                                            |
       v                                            v
   [ node 1 ]  x  x  x  PARTITION  x  x  x  [ node 2 ]
    v = "old"                                  v = "old"

  1. client A writes v = "new" to node 1
  2. node 1 tries to replicate to node 2 ......... message lost
  3. client B reads from node 2 RIGHT NOW
  4. node 2 has exactly two options:

     OPTION A (Availability):
         return "old" — successful, possibly wrong vs completed write
         → linearizability broken

     OPTION B (Consistency):
         refuse until it can confirm with node 1 — impossible while cut
         → unavailable for this read until the partition heals

  5. No option C. The bytes for "new" have not crossed the gap.
     No algorithm creates information that has not arrived.

  6. Therefore: during a partition, C and A cannot both hold.

  What the theorem does NOT say:
     * nothing about behaviour when the network is healthy
     * "pick 2 of 3" is a misstatement — P is not optional
     * a "CA system" is a single node, or wrong under partition
```

Two bank branches with the line down, both asked for a balance: refuse until the line returns (C over A), or answer with last-known and risk staleness (A over C). There is no third option that is both instantly available and guaranteed fresh while the line is down.

**BOOKSTORE INVENTORY DURING A PARTITION:**

```text
Warehouse node W and Storefront node S lose contact.
Customer buys the last copy of Dune on S.
Warehouse staff adjusts stock on W for a damaged return.

AP choice: both sides accept writes → oversell / negative stock later → reconcile.
CP choice: minority side refuses writes → lost sales during the outage → no silent conflict.

Neither is free. The business cost decides: "sold the same book twice"
is not the same as "recommendation widget was three seconds stale."
```

Practical judgment: choose consistency when a stale or conflicting answer causes harm that cannot be reconciled — ledgers, inventory that cannot oversell, unique username registration, distributed locks. Choose availability when staleness is briefly tolerable and reconciliation is possible — feeds, view counts, likes, recommendations, caches, analytics.

**PACELC — THE CLAUSE YOU PAY EVERY DAY:**

CAP is about the rare emergency. **PACELC** adds: if Partition, choose A or C; **Else** (normal operation), choose **Latency** or **Consistency**. That second clause dominates operating time. Quorum reads across three regions cost a cross-region round trip on *every* healthy read, forever. Designing only for the disaster and ignoring the permanent latency bill is the common mistake.

```text
                   is there a Partition?
                    /                  \
                 YES                    NO  (most of the time)
                  |                      |
          Availability                Latency
              or                          or
          Consistency                Consistency

  Three replicas in three regions, quorum reads:
      same region        ~1 ms
      cross-region       ~70 ms   ← EVERY read, forever, healthy network or not
      a quorum read waits for the 2nd fastest of 3
      → your p50 read latency becomes a geography problem
```

| Shape | Partition behavior | Else (healthy) | Examples (typical configs) |
| ----- | ------------------ | -------------- | -------------------------- |
| PC/EC | prefer C | prefer C (pay latency) | etcd, ZooKeeper, Spanner-like |
| PA/EL | prefer A | prefer low latency | Cassandra/Dynamo-style defaults |
| PA/EC | prefer A under partition | prefer C when healthy | some MongoDB defaults |
| PC/EL | prefer C under partition | prefer low latency when healthy | rare / interesting |

Do not memorize vendor logos as destiny — configs change. Use the labels to ask *which bill you are paying*.

**CONSISTENCY AS A DIAL (BRIDGE INTO 85.2):**

Modern systems often expose consistency **per operation**. With N replicas, if write quorum W plus read quorum R exceeds N, read and write sets must overlap — the read sees the latest write. Same cluster: linearizable balance updates, eventual view counters. Labelling an entire database “CP” or “AP” is usually too coarse for the bookstore.

```text
N=3  W=2 R=2  (W+R>N)  → strong; minority side of a 2/1 split stops
N=3  W=1 R=1  (not >N) → fast; stale reads legal by design
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | State CAP in one sentence that mentions *during a partition*; say why “pick 2 of 3” is misleading |
| Medium | Give a two-node partition example for bookstore stock; argue CP vs AP with a business cost |
| Medium | Explain CAP C ≠ ACID C in two sentences |
| Hard | Using PACELC, explain why cross-region quorum reads hurt p50 even when the network is healthy |

**WHAT THIS UNLOCKS NEXT:**

CAP tells you the emergency trade-off. Day-to-day you still need vocabulary for what “replica lag,” “read your own writes,” and “eventual consistency” mean when the bookstore serves from multiple copies. That consistency-model toolkit is lesson 85.2.

---

> **Continue:** [85.2 Replication & Consistency Models](#phase-85)

---

## 85.2 Replication & Consistency Models, Revisited

Lesson 85.1 made the partition limit inevitable. This lesson owns the **models you use when the network is mostly fine** — the language of replication lag, session guarantees, and quorum arithmetic. Phase 65 already showed *how* to run replicas and shards. Here you ask *what readers are allowed to observe*.

**WHY MODELS BECOME NECESSARY NOW:**

Once you have a primary plus replicas (Phase 65) or an AP store that accepts concurrent writes, “the database” is no longer one timeline. A customer who updates their shipping address and immediately refreshes may hit a lagging replica and see the old address — **read-your-own-writes** violated. A feed that jumps backward in time violates **monotonic reads**. These are not CAP corner cases; they are everyday replica physics.

**COMMON MODELS (STRONGER → WEAKER — INTUITION, NOT A TAXONOMY EXAM):**

| Model | Promise (intuition) | Typical cost |
| ----- | ------------------- | ------------ |
| **Linearizability** | Single-copy semantics; operations appear at one instant | Coordination / quorums; higher latency |
| **Sequential consistency** | Same order for all viewers, not necessarily wall-clock real-time | Still strong; subtle gap vs linearizability |
| **Causal consistency** | If A happened-before B, everyone sees A before B | Track dependencies; often a sweet spot |
| **Read-your-own-writes** | A client sees its own updates | Session stickiness or version tokens |
| **Monotonic reads** | A client never goes backward in time | Track high-water mark |
| **Eventual consistency** | If writes stop, replicas converge | Fast; conflicts need merge/reconcile |

**QUORUM ARITHMETIC — THE DIAL MADE CONCRETE:**

```text
N = 3 replicas.  W = replicas that must ack a write.
                 R = replicas that must answer a read.

RULE:  W + R > N  ⇒  read set and write set MUST overlap
                     ⇒  read can see the latest write.

  W=1, R=1   (1+1=2, NOT > 3)   FAST, eventually consistent
      write →  [n1*] [n2 ] [n3 ]        only n1 has it
      read  ←        [n2 ]              STALE. legal. by design.
      latency: one node. survives 2 failures. AP-shaped.

  W=2, R=2   (2+2=4 > 3)         STRONGLY consistent
      write →  [n1*] [n2*] [n3 ]        2 acked
      read  ←        [n2*] [n3 ]        n2 in both sets → fresh
      latency: slower of two. survives 1 failure. CP-shaped.

  W=3, R=1   fragile writes — ANY node down blocks writes
  W=1, R=3   fragile reads — mirror image

DURING A PARTITION with W=2, R=2 and a 2/1 split:
  majority side (2): can still reach W=2 → keeps serving
  minority side (1): cannot → unavailable
  That is CP in practice: the minority side stops, it does not silently diverge.
```

Same system, per query: `balance` at quorum, `views` at one. The engineering work is classifying **operations**, not branding the database.

**SESSION GUARANTEES — THE BUGS USERS ACTUALLY REPORT:**

```text
READ-YOUR-OWN-WRITES VIOLATION
  user writes address="New" to primary
  user immediately GETs from lagging replica → still "Old"
  feels like the site "ate" their edit

FIXES (pick one consciously):
  • pin session reads to primary for a short window after write
  • track last-write version; refuse replicas below that version
  • write-through the cache on update (Phase 83) so the hot path
    never depends on replica lag for that key

MONOTONIC READS VIOLATION
  read1 sees version 5 from replica A
  read2 sees version 3 from replica B  → time went backwards

FIX: client high-water mark; only accept replicas ≥ mark
```

**CONFLICTS UNDER AP WRITES:**

If both sides of a partition accept writes to the same key, you need a merge story:

- **Last-write-wins** — simple; can discard a warehouse adjustment the storefront never saw.
- **Application merge** — business rules (e.g. stock = min of both sides, then reconcile).
- **Version vectors** — detect concurrent updates instead of guessing causality from timestamps.

Name the cost out loud. Timestamps lie under clock skew; “newest wins” is a product decision wearing a systems costume.

**BOOKSTORE — PER-OPERATION CHOICES:**

```text
Charge card / finalize order     → strong: W+R>N or primary reads
Update "pages viewed" counter    → eventual is fine
Creator clicks their new short link immediately
  → read-your-own-writes: write-through cache on create (Phase 83)
Catalog blurb edited by staff    → short stale window OK; invalidate cache
Inventory under multi-warehouse  → decide CP vs AP with oversell cost (85.1)
```

**WHAT THIS PHASE STILL DOES NOT OWN:**

How replicas *agree* on a leader under failure is Phase 86 (consensus). How your *caller* survives a sick dependency with retries and breakers is Phase 87. Do not turn consistency models into a reliability-pattern catalog. Do not re-teach Phase 65’s runbooks for failover — bridge to them, do not duplicate the ops chapter.

```python
# Quorum overlap rule — mechanism, not a database.
def is_strong(N, W, R):
    return W + R > N

print("W2R2 strong?", is_strong(3, 2, 2))
print("W1R1 strong?", is_strong(3, 1, 1))

write_set, read_set = {"n1"}, {"n2"}
print("eventual path overlap?", bool(write_set & read_set))  # False → stale legal
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define eventual consistency vs linearizability in one sentence each |
| Medium | Show W,R,N values that give strong reads and values that allow stale reads |
| Medium | Explain read-your-own-writes for a customer who edits an address then reloads — and one fix |
| Hard | For bookstore checkout vs view-counter vs short-link redirect, assign a consistency model and justify the cost |

**WHAT THIS UNLOCKS NEXT:**

Consistency models describe what readers may see. They do not by themselves elect a new primary when the old one dies mid-write without risking split brain. Getting unreliable machines to **agree on one value** (who is leader; what is committed) is the consensus problem — Phase 86.

---

> **Phase 85 complete?** [Continue to Phase 86](#phase-86)

---
