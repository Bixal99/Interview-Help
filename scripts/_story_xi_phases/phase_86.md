# PHASE 86 - Coordination & Consensus

**Track:** System Design & Distributed Systems

**WHAT YOU WILL BE ABLE TO DO:** Explain what a consensus algorithm (Raft-level intuition) buys you — leader election and replicated log agreement — when machines can fail or lose contact. Distinct from Phase 87: consensus is *how replicas agree*; reliability patterns are *how a client survives a sick dependency*.

**WHAT YOU SHOULD KNOW FIRST:** Phase 85 — CAP is the problem statement consensus responds to. Phase 65 — “promote a replica” was named operationally; this phase asks *how the remaining nodes agree which one*. Phase 53 — agreement across threads foreshadows agreement across machines.

**LEARNING RESOURCES:**

- [The Secret Lives of Data — Raft visualized](http://thesecretlivesofdata.com/raft/) — click through first
- [Raft Explained (ByteByteGo)](https://www.youtube.com/watch?v=IujMVjKvWP4)
- [Raft paper (Ongaro & Ousterhout)](https://raft.github.io/raft.pdf) — unusually readable
- [Raftscope](https://raft.github.io/) — pause nodes; watch elections
- Optional depth: [MIT 6.5840](https://pdos.csail.mit.edu/6.824/) Raft lab overview page

## 86.1 Consensus & Fault Tolerance

Phase 65/82 said “if the primary fails, a replica can be promoted.” Phase 85 showed that during a partition, two sides can disagree. So *how* do the remaining machines agree on exactly *which* replica becomes primary — especially if several cannot talk, and any one may crash mid-decision? Getting unreliable machines to agree on a single value is the **consensus** problem. This phase owns Raft-level intuition: leader election, log replication, majority quorums, split-brain prevention. Not a Paxos research dump; not a caller-side retry catalog (87).

**WHY CONSENSUS BECOMES NECESSARY NOW:**

Replication without agreement risks **split brain**: two nodes both believe they are primary, both accept writes, and the bookstore’s order ledger forks into two histories that cannot both be true. CAP told you the minority side must become unavailable under a CP choice. Consensus is the mechanism that *implements* that choice for leadership and committed history.

**WHAT CONSENSUS BUYS YOU:**

- A single decided value (or log entry) that a **majority** has accepted.
- Leader election that remains safe under crash faults.
- A replicated log so followers apply the same commands in the same order.

What it costs: a round trip to a majority on the decision path; careful timeouts; you keep the consensus layer **small** (metadata / leadership / config), not every product page view.

**FLP — WHY TIMEOUTS EXIST:**

In a fully asynchronous network, FLP impossibility says no deterministic algorithm can guarantee consensus if even one node may fail — because you cannot distinguish “crashed” from “slow.” Real systems add **partial synchrony** via timeouts: preserve **safety** always; guarantee **liveness** when the network behaves. That is why election timeouts are load-bearing configuration, not trivia.

**RAFT IN THREE PIECES:**

Raft was designed to be understandable. Every node is **follower**, **candidate**, or **leader**. Time is divided into **terms**; at most one leader per term. Term numbers act as a logical clock so stale leaders get rejected.

**1. Leader election**

Followers expect heartbeats. If a randomised election timeout expires without one, a follower increments the term, becomes candidate, votes for itself, and requests votes. A node grants at most one vote per term, and only if the candidate’s log is at least as up to date. Majority of votes → leader. Randomised timeouts break permanent split votes.

**2. Log replication**

Clients write to the leader. Leader appends a log entry, ships `AppendEntries` to followers. When a **majority** has stored it, the leader marks it **committed**, applies it to its state machine, answers the client. Followers may catch up later; commit does not wait for every node. A subtle safety rule: a leader does not treat entries from a previous term as committed by replica count alone — that hole is how committed entries can otherwise vanish across a leadership change.

**3. Safety from majority overlap**

Any two majorities of the same set share at least one member, so two conflicting decisions cannot both achieve a majority in the same term. That is arithmetic, not timing luck.

```text
NORMAL OPERATION, term 4
   [L n1] --heartbeat--> [F n2]
      |   --heartbeat--> [F n3]
   followers reset election timers on every heartbeat

THE LEADER DIES
   t=0     n1 crashes. Heartbeats stop.
   t=150ms n2's election timeout fires FIRST (randomised: 150-300ms)
           n2: term 4 → 5, follower → candidate, votes for itself

   n2 --RequestVote(term=5)--> n3
   n3 checks: higher term? unused vote? log up-to-date? → GRANTS

   n2 has 2 of 3 = MAJORITY → LEADER, term 5
   n2 sends heartbeats immediately

THE OLD LEADER RETURNS
   n1 wakes, still "leader" of term 4
   n1 --heartbeat(term=4)--> n2
   n2 replies with term 5 → n1 steps down to follower
   Term number is what makes this safe.

SPLIT VOTE (why randomisation matters)
   n2 and n3 time out together, both candidates for term 5,
   each has 1 vote → neither reaches majority → both time out
   again with NEW random delays → one almost certainly wins.
```

**LOG REPLICATION AND WHY MAJORITY IS THE MAGIC NUMBER:**

```text
CLIENT WRITE, term 5, leader n2

  client --set x=1--> [n2 leader]
      n2 appends log index 8: {term 5, x=1}   NOT committed yet
      n2 --AppendEntries(8)--> n1, n3

      n3 stores + acks.   n2 + n3 = 2 of 3 = MAJORITY
      → n2 marks index 8 COMMITTED, applies, replies 200
      → n1 may catch up later; not required for commit

WHY A MAJORITY, SPECIFICALLY
  Any two majorities of the same set MUST overlap in ≥ 1 node.

     N=5, majority=3
       group A = {n1,n2,n3}      group B = {n3,n4,n5}
                        \_______________/
                         n3 is in both

  n3 cannot vote for two conflicting decisions in the same term.

WHY ODD NUMBERS
     N   majority   failures tolerated
     1      1              0
     2      2              0   ← worse than 1 for writes
     3      2              1
     4      3              1   ← 4th node: cost, not more tolerance
     5      3              2

SPLIT BRAIN, PREVENTED
     partition:  {n1,n2,n3} | {n4,n5}
     majority side: can elect and commit
     minority side: cannot reach 3 → UNAVAILABLE, not WRONG
     → CP from Phase 85, as a mechanism
```

**FENCING — THE PAUSED LEADER TRAP:**

Quorums alone do not stop a leader that was paused (long GC, VM stall) past a new election, then resumes and writes. **Fencing tokens** (often the term number) travel with every privileged action; the storage resource refuses older tokens. A lock or lease without a fence is incomplete — the holder can be frozen past expiry and still believe it owns the resource.

```text
  t=0  n1 leader, begins write
  t=1  n1 paused (GC). Not dead — frozen.
  t=2  others elect n2, term 6
  t=3  n2 writes with token 6
  t=4  n1 resumes, completes old write with token 5
       WITHOUT fencing → corruption
       WITH fencing: storage highest=6; token 5 REJECTED
```

**CRASH VS BYZANTINE (LIGHT):**

Raft assumes **crash faults** (stop or silent) — enough for most datacenters you control (2f+1 nodes for f failures). **Byzantine** faults (nodes lie) need heavier protocols (often 3f+1). Do not reach for BFT for a bookstore inventory service.

**KEEP CONSENSUS OFF THE HOT DATA PATH:**

| Choice | Gain | Cost |
| ------ | ---- | ---- |
| 3 nodes | cheapest quorum, lowest latency | tolerates only one failure |
| 5 nodes | tolerates two failures | every write waits for 3 acks |
| Nodes in one DC | fast elections | DC is one failure domain |
| Nodes across regions | survive losing a region | every write pays cross-region RTT |
| Consensus for all data | strong everywhere | throughput capped at one leader |
| Consensus for metadata only | cheap, scalable (standard) | data path needs its own correctness argument |

```text
Good:  etcd/ZooKeeper decides who is primary; primary serves traffic
Bad:   every "add to cart" waits for a Raft round across regions

Kubernetes cluster state → etcd
Kafka partition leadership → consensus layer
Bookstore product reads → not through Raft on every request
```

**ROLE SPLIT REMINDER:** Phase 86 = agreement among replicas. Phase 87 = timeouts/retries/breakers on the *caller* when a dependency is sick — even when consensus elsewhere is healthy.

```python
# Majority overlap + odd-size intuition (not a full Raft implementation).
def majority(n):
    return n // 2 + 1

def majorities_overlap(n, a, b):
    need = majority(n)
    return len(a) >= need and len(b) >= need and len(set(a) & set(b)) >= 1

print("overlap safe?", majorities_overlap(5, [1, 2, 3], [3, 4, 5]))
for n in range(1, 8):
    print(f"N={n} majority={majority(n)} tolerate={majority(n)-1}")
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | In one sentence: what does consensus buy that “just promote the newest replica” does not? |
| Medium | Walk a 3-node election: timeout, votes, majority, old leader returns with stale term |
| Medium | Explain why N=4 often tolerates the same failures as N=3 for majority quorums |
| Hard | Sketch where bookstore order-service leadership uses consensus vs where Phase 87 patterns protect the checkout API from a sick payments dependency; include why fencing matters for a paused leader |

**WHAT THIS UNLOCKS NEXT:**

Agreement exists inside the cluster. Callers still face partial failure: slow dependencies, retry storms, cascading timeouts. Surviving *that* without melting the fleet is Phase 87.

---

> **Phase 86 complete?** [Build the Phase 86 mini-project](../guides/Projects.md#cs-phase-86-project) · [Continue to Phase 87](#phase-87)

---
