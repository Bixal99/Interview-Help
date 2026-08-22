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

Replication without agreement risks **split brain**: two nodes both believe they are primary, both accept writes, and the bookstore’s order ledger forks. CAP told you the minority side must become unavailable under a CP choice. Consensus is the mechanism that *implements* that choice for leadership and committed history.

**WHAT CONSENSUS BUYS YOU:**

- A single decided value (or log entry) that a **majority** has accepted.
- Leader election that remains safe under crash faults.
- A replicated log so followers apply the same commands in the same order.

What it costs: a round trip to a majority on the decision path; careful timeouts; you keep the consensus layer **small** (metadata / leadership / config), not every product page view.

**FLP — WHY TIMEOUTS EXIST:**

In a fully asynchronous network, FLP impossibility says no deterministic algorithm can guarantee consensus if even one node may fail — because you cannot distinguish “crashed” from “slow.” Real systems add **partial synchrony** via timeouts: preserve **safety** always; guarantee **liveness** when the network behaves. That is why election timeouts are load-bearing configuration, not trivia.

**RAFT IN THREE PIECES:**

Every node is **follower**, **candidate**, or **leader**. Time is divided into **terms**; at most one leader per term. Term numbers act as a logical clock so stale leaders get rejected.

**1. Leader election**

Followers expect heartbeats. If a randomised election timeout expires, a follower increments the term, becomes candidate, votes for itself, and requests votes. A node grants at most one vote per term, and only if the candidate’s log is at least as up to date. Majority of votes → leader. Randomised timeouts break permanent split votes.

**2. Log replication**

Clients write to the leader. Leader appends a log entry, ships `AppendEntries` to followers. When a **majority** has stored it, the leader marks it **committed**, applies it, answers the client. Followers may catch up later; commit does not wait for every node.

**3. Safety from majority overlap**

Any two majorities of the same set share at least one member, so two conflicting decisions cannot both achieve a majority in the same term. Odd cluster sizes (3, 5, 7): a fourth node often adds cost without adding failure tolerance.

```text
NORMAL, term 4
  [L n1] --heartbeat--> [F n2] [F n3]

LEADER DIES
  n2 timeout fires first (randomised) → candidate, term 5
  n2 gets n3's vote → majority of 3 → LEADER term 5

OLD LEADER RETURNS
  n1 heartbeats with term 4 → rejected; sees term 5 → steps down

SPLIT BRAIN PREVENTED
  partition {n1,n2,n3} | {n4,n5}  (N=5)
  majority side can elect/commit
  minority side cannot reach 3 → unavailable, not silently wrong
  → CP from Phase 85, as a mechanism
```

**FENCING — THE PAUSED LEADER TRAP:**

Quorums alone do not stop a leader that was paused (long GC) past its election, then resumes and writes. **Fencing tokens** (often the term number) travel with every privileged action; the resource refuses older tokens. A lock without a fence is incomplete.

**CRASH VS BYZANTINE (LIGHT):**

Raft assumes **crash faults** (stop or silent) — enough for most datacenters you control. **Byzantine** faults (nodes lie) need heavier protocols and more replicas (3f+1). Do not reach for BFT for a bookstore inventory service.

**KEEP CONSENSUS OFF THE HOT DATA PATH:**

```text
Good:  etcd/ZooKeeper decides who is primary; primary serves traffic
Bad:   every "add to cart" waits for a Raft round across regions

Kubernetes cluster state → etcd
Kafka partition leadership → consensus layer
Your product reads → not through Raft on every request
```

**ROLE SPLIT REMINDER:** Phase 86 = agreement among replicas. Phase 87 = timeouts/retries/breakers on the *caller* when a dependency is sick — even when consensus elsewhere is healthy.

```python
# Majority overlap intuition (not a full Raft implementation).
def majorities_overlap(n, a, b):
    need = n // 2 + 1
    return len(a) >= need and len(b) >= need and len(set(a) & set(b)) >= 1

print("safe conflict impossible?", majorities_overlap(5, [1,2,3], [3,4,5]))
print("even size buys little: N=4 majority=3, still tolerates only 1 failure")
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | In one sentence: what does consensus buy that “just promote the newest replica” does not? |
| Medium | Walk a 3-node election: timeout, votes, majority, old leader returns with stale term |
| Medium | Explain why N=4 often tolerates the same failures as N=3 for majority quorums |
| Hard | Sketch where bookstore order-service leadership uses consensus vs where Phase 87 patterns protect the checkout API from a sick payments dependency |

**WHAT THIS UNLOCKS NEXT:**

Agreement exists inside the cluster. Callers still face partial failure: slow dependencies, retry storms, cascading timeouts. Surviving *that* without melting the fleet is Phase 87.

---

> **Phase 86 complete?** [Build the Phase 86 mini-project](../guides/Projects.md#cs-phase-86-project) · [Continue to Phase 87](#phase-87)

---
