# The Combined Interview Playbook

*Mohammad Bilal's interview Q&A companion to the roadmaps - [CS.md](CS.md), [Data.md](Data.md), [Networks.md](Networks.md), [AI.md](AI.md), [Web.md](Web.md), [cloud.md](cloud.md), and [devops.md](devops.md). High-frequency questions with strong answers, follow-ups, and traps - not a trivia dump.*

*Curated with Composio (web search + DeepWiki on `mlabonne/llm-course`) against 2026 interview guides for DSA, SQL/DE, networking, and AI engineering, plus official web-platform, OpenAPI, OAuth, and OWASP documentation.*

**Scope:** CS × Data × Networks × AI × Web × Cloud × DevOps · speak trade-offs out loud.

```
Question → Strong answer → Follow-ups → Traps
```

---

**Difficulty**

| Tag | Meaning |
| --- | --- |
| Screen | New-grad / phone screen |
| Core | Expected mid-level fluency |
| Senior | Judgment, systems, failure modes |

---

## How to Use This Document

This is not a list of sentences to memorize. It is a **spoken-answer gym** built from the same chain-of-discovery logic as the connected roadmaps. Every strong answer names: (1) the problem the idea solves, (2) the mechanics, (3) a trade-off, (4) a failure mode.

**How to practice**

1. Cover the answer. Speak for 60–120 seconds.
2. Check against structure.
3. Answer one follow-up cold.
4. If you cannot explain *why it exists*, go back to the roadmap phase - do not patch with more memorization.

**Universal answer skeleton (use every time)**

```
1. Clarify the question / constraints (10s)
2. Define the concept in one sentence
3. Why it exists (the wall before it)
4. How it works (2-5 steps or a tiny example)
5. Trade-off + when you would NOT use it
6. Optional: tie to a project you shipped
```

**Role routing**

| If interviewing for... | Prioritize sections |
| --- | --- |
| Software Engineer | A (CS), C (Networks essentials), F (URL/system) |
| Data Analyst | B1–B2 (SQL + metrics), skim B3 |
| Data Engineer | B full, C HTTP/DNS basics, F reliability |
| Backend / Infra | A + C deep, F |
| AI / ML Engineer | D full, A complexity literacy, C HTTP/DNS for serving |
| Full-stack / Generalist | A + C URL tour + B SQL + D LLM apps |
| Frontend Web Developer | W1-W8 + C12-C15 + E1/E6 + F |
| Backend / API Web Developer | W1, W7-W16 + A14-A17 + C12-C15 + F |
| Cloud Engineer | G full + C3-C16 + A12/A16/A17 + F |
| DevOps Engineer | H full + G1-G8 + C + F |

---

## Question Index

| Track | Focus | Q count |
| --- | --- | --- |
| [A. Computer Science & Software Engineering](#track-a---computer-science--software-engineering) | DSA, OOP, OS, DB, design | 18 |
| [B. Data Analyst & Data Engineer](#track-b---data-analyst--data-engineer) | SQL, metrics, modeling, pipelines | 16 |
| [C. Computer Networks](#track-c---computer-networks) | Layers, TCP/UDP, DNS, HTTP, TLS | 16 |
| [D. AI / ML / LLM Engineering](#track-d---ai--ml--llm-engineering) | Classical ML → transformers → RAG/agents | 18 |
| [W. Web Development](#track-w---web-development) | Browser, frontend, backend, REST, security, production | 16 |
| [G. Cloud Engineering](#track-g---cloud-engineering) | Architecture, IAM, networks, data, reliability, FinOps | 10 |
| [H. DevOps Engineering](#track-h---devops-engineering) | Linux, delivery, containers, Kubernetes, IaC, SRE | 12 |
| [E. Cross-Cutting Classics](#track-e---cross-cutting-classics) | URL bar, debug ladders, design prompts | 6 |
| [F. Behavioral / STAR](#track-f---behavioral-star-anchored-to-your-roadmaps) | Stories that prove judgment | 5 |

---

<a id="track-a"></a>

# Track A - Computer Science & Software Engineering

**Source roadmap:** CS.md

## A1. What is Big O, and how do you use it in an interview?

**Level:** Screen · **Source:** CS.md Phase 2

**QUESTION:** Explain Big O. What is the complexity of your solution?

**STRONG ANSWER:** Big O describes how runtime or memory grows as input size \(n\) grows - worst-case asymptotic upper bound, ignoring constants. In interviews I state time and space after coding, name the dominant loop/recursion, and say whether I can improve it (e.g., hash map \(O(n)\) vs nested loops \(O(n^2)\)).

**SAY-THIS STRUCTURE:** Define → apply to *this* code → compare alternative → space too.

**FOLLOW-UPS:** Average vs worst case? Why ignore constants? \(O(n \log n)\) sorts?

**TRAP:** Reciting the definition without analyzing your own code. Saying "hashmap is always O(1)" without average-case caveat / collisions.

---

## A2. Array / string patterns - two pointers & sliding window

**Level:** Screen · **Source:** CS.md Phase 3

**QUESTION:** When do you use two pointers or a sliding window?

**STRONG ANSWER:** Two pointers when the array is sorted or you grow/shrink from ends (pair sum, palindrome). Sliding window when you need the best contiguous subarray/substring under a constraint (longest substring without repeat). Both aim for one pass \(O(n)\) instead of \(O(n^2)\).

**SAY-THIS STRUCTURE:** Name pattern → invariant → complexity → edge cases (empty, all unique).

**FOLLOW-UPS:** Fixed vs variable window? Need a hash map of counts?

**TRAP:** Jumping to brute force nested loops without naming the pattern.

---

## A3. Linked lists - reverse, cycle, careful pointers

**Level:** Core · **Source:** CS.md Phase 3

**QUESTION:** Reverse a linked list. Detect a cycle.

**STRONG ANSWER:** Reverse iteratively: save `next`, point `curr.next` to `prev`, advance. Cycle: Floyd tortoise/hare - if pointers meet, cycle exists; optional math to find entrance. Interviewers watch that I never lose the head or overwrite `next` before saving it.

**SAY-THIS STRUCTURE:** Draw 3 nodes → code → null/single-node cases → complexity \(O(n)/O(1)\).

**FOLLOW-UPS:** Recursive reverse? Find middle? Merge two sorted lists?

**TRAP:** Infinite loops from lost pointers; mutating without diagrams.

---

## A4. Stacks and queues - when each is the right tool

**Level:** Screen · **Source:** CS.md Phase 3

**QUESTION:** Stack vs queue - give use cases.

**STRONG ANSWER:** Stack = LIFO for nesting / most-recent: parentheses, undo, DFS recursion simulation. Queue = FIFO for order/time: BFS level order, task scheduling, rate limiting buffers. Cue phrases: "nested" → stack; "level by level / arrival order" → queue.

**FOLLOW-UPS:** Monotonic stack? Deque for sliding window max?

**TRAP:** Only defining LIFO/FIFO with no problem mapping.

---

## A5. Recursion and the call stack

**Level:** Core · **Source:** CS.md Phase 4

**QUESTION:** How do you think about recursion? When is it dangerous?

**STRONG ANSWER:** Every recursive call needs a correct base case and a smaller subproblem. The call stack holds deferred work - deep recursion can overflow. I can always rewrite with an explicit stack. Tree problems are usually clean recursion; I trace one example aloud.

**FOLLOW-UPS:** Tail recursion? Convert recursion to iteration.

**TRAP:** Missing base case; cannot dry-run the stack.

---

## A6. Trees / BST validation

**Level:** Core · **Source:** CS.md Phase 5

**QUESTION:** Validate a Binary Search Tree.

**STRONG ANSWER:** Naive "left < node < right" on immediate children is wrong. Carry a valid `(min, max)` range down the recursion (or inorder and ensure increasing). That tests global BST order, not local.

**FOLLOW-UPS:** Lowest common ancestor? Balanced check? Serialize tree?

**TRAP:** Only checking immediate children.

---

## A7. Hash tables - why and when they fail

**Level:** Screen · **Source:** CS.md Phase 6

**QUESTION:** Why use a hash map? Collision handling?

**STRONG ANSWER:** Average \(O(1)\) insert/lookup/delete for counting, indexing, caching, two-sum patterns. Collisions via chaining or open addressing; worst case degrades toward \(O(n)\) if pathological. I mention load factor and that keys must be hashable.

**FOLLOW-UPS:** Hash set vs map? When sorted map/TreeMap instead?

**TRAP:** Claiming O(1) worst-case always.

---

## A8. Sorting and binary search

**Level:** Core · **Source:** CS.md Phase 7

**QUESTION:** When binary search? Compare common sorts.

**STRONG ANSWER:** Binary search needs sorted order (or monotonic predicate) for \(O(\log n)\). Mergesort stable \(O(n\log n)\) guaranteed; quicksort fast average, worse \(O(n^2)\) without care; heapsort in-place \(O(n\log n)\). In interviews I often sort then two-pointer, or binary search on answer space.

**FOLLOW-UPS:** Search on rotated array? Lower bound vs exact match?

**TRAP:** Binary search off-by-one without stating invariant.

---

## A9. BFS vs DFS

**Level:** Core · **Source:** CS.md Phase 8

**QUESTION:** BFS vs DFS - when each?

**STRONG ANSWER:** BFS (queue) for shortest path in unweighted graphs and level-order. DFS (stack/recursion) for path existence, topological sort, cycle detection, connected components, exhaustive search. I state visited-set discipline to avoid infinite loops.

**FOLLOW-UPS:** Weighted shortest path → Dijkstra. Grid BFS tricks.

**TRAP:** Using DFS for unweighted shortest path.

---

## A10. Dynamic programming intuition

**Level:** Senior-ish · **Source:** CS.md Phase 9

**QUESTION:** How do you recognize a DP problem?

**STRONG ANSWER:** Optimal substructure + overlapping subproblems. I define state, transition, base cases, then bottom-up or memoized recursion. Start with brute force recursive formulation, then cache. Classic: knapsack, LIS, edit distance, unique paths.

**FOLLOW-UPS:** Time/space optimize rolling arrays? Greedy vs DP?

**TRAP:** Jumping to DP table without stating state meaning.

---

## A11. OOP pillars and SOLID (short)

**Level:** Core · **Source:** CS.md Phase 10

**QUESTION:** Explain encapsulation / polymorphism. One SOLID principle with example.

**STRONG ANSWER:** Encapsulation hides invariants behind methods. Polymorphism lets callers depend on interfaces, swap implementations. Example SOLID: Dependency Inversion - high-level policy depends on abstractions (interface), not concrete DB class - enables testing with fakes.

**FOLLOW-UPS:** Composition vs inheritance? Design a parking lot / LRU.

**TRAP:** Buzzword salad without a concrete design choice.

---

## A12. Processes vs threads; concurrency basics

**Level:** Core · **Source:** CS.md Phase 11

**QUESTION:** Process vs thread? Race condition? Mutex?

**STRONG ANSWER:** Process = isolated address space; thread = shared memory inside a process, cheaper context. Race: concurrent access to shared state without synchronization. Mutex/lock serializes critical sections; deadlocks need circular wait - prevent with lock ordering / timeouts. For interviews I also mention why GIL matters in CPython (if asked Python concurrency).

**FOLLOW-UPS:** Async vs threads? When message passing beats shared memory?

**TRAP:** "Threads are always faster."

---

## A13. Virtual memory / page fault (high level)

**Level:** Core · **Source:** CS.md Phase 11

**QUESTION:** What is virtual memory?

**STRONG ANSWER:** Each process sees a virtual address space mapped to physical frames via page tables. Enables isolation and overcommit via disk (swap). A page fault loads missing pages; thrashing happens when working set exceeds RAM.

**FOLLOW-UPS:** TLB? mmap?

**TRAP:** Equating virtual memory only with "disk overflow."

---

## A14. Indexes and EXPLAIN (DB)

**Level:** Core · **Source:** CS.md Phase 14 / Data.md Phase 11

**QUESTION:** How do you speed up a slow query?

**STRONG ANSWER:** Measure with `EXPLAIN/ANALYZE`. Check selectivity of `WHERE`/`JOIN` keys. Add an index matching filter/join/order columns; consider covering indexes. Mention write amplification and that indexes are not free. Fixing queries (avoid `SELECT *`, sargable predicates) often beats blind indexing.

**FOLLOW-UPS:** Why index might not be used? Composite index column order?

**TRAP:** "Just add indexes" with no plan reading.

---

## A15. Transactions ACID + isolation

**Level:** Core · **Source:** CS.md Phase 14

**QUESTION:** What is ACID? Dirty read?

**STRONG ANSWER:** Atomicity, Consistency, Isolation, Durability. Isolation levels trade anomalies vs throughput: dirty read = seeing uncommitted data; prevented by Read Committed+. I mention when I'd accept weaker isolation for performance with application-level care.

**FOLLOW-UPS:** Phantom reads? Idempotent writes?

**TRAP:** Listing ACID letters with no anomaly example.

---

## A16. CAP / consistency vs availability (short)

**Level:** Senior · **Source:** CS.md distributed phases

**QUESTION:** Explain CAP in practical terms.

**STRONG ANSWER:** Under network partition, a distributed system must choose between linearizability-style consistency and full availability. Real systems pick per-decision: caches may be AP-ish; bank ledgers prefer C. I avoid treating CAP as a product sticker and instead discuss timeouts, retries, and conflict resolution.

**FOLLOW-UPS:** PACELC? Exactly-once myths?

**TRAP:** "Mongo is AP, Postgres is CA" slogans without nuance.

---

## A17. Caching strategies

**Level:** Core · **Source:** CS.md system design

**QUESTION:** Cache-aside vs write-through? Invalidation?

**STRONG ANSWER:** Cache-aside: app reads cache, on miss loads DB then fills cache. Write-through updates cache+DB together (simpler coherence, more write latency). Invalidation is the hard part - TTL, explicit delete on write, version keys. Mention stampede and jittered TTLs.

**FOLLOW-UPS:** Redis eviction? Hot key?

**TRAP:** Caching without naming invalidation.

---

## A18. Design an LRU cache

**Level:** Core · **Source:** CS.md patterns

**QUESTION:** Implement LRU.

**STRONG ANSWER:** Hash map for \(O(1)\) key→node plus doubly linked list for recency order. Get/put move node to head; evict tail when over capacity. Complexity \(O(1)\) per op. This is the classic "combine two structures" interview.

**FOLLOW-UPS:** LFU? Thread-safety?

**TRAP:** Only a list (O(n) find) or only a map (no order).

---

<a id="track-b"></a>

# Track B - Data Analyst & Data Engineer

**Source roadmap:** Data.md

## B1. Analyst vs engineer - lifecycle answer

**Level:** Screen · **Source:** Data.md Phase 1

**QUESTION:** Difference between data analyst and data engineer?

**STRONG ANSWER:** Same lifecycle (event → capture → move → model → decide), different failure ownership. Engineers own late/missing/duplicated pipelines, schemas, SLAs. Analysts own metric definitions, segments, honest charts, and decision memos. We collaborate on the metric contract. I do not answer with tool lists alone.

**FOLLOW-UPS:** Where does analytics engineer sit?

**TRAP:** "Engineers use Spark, analysts use Tableau."

---

## B2. INNER vs LEFT JOIN + fan-out

**Level:** Screen · **Source:** Data.md Phase 5

**QUESTION:** INNER vs LEFT JOIN? How do joins break sums?

**STRONG ANSWER:** INNER keeps matches only; LEFT keeps all left rows, null-pads non-matches - used to find missing (`WHERE right.key IS NULL`). Fan-out: one-to-many join duplicates left rows so `SUM(left.amount)` inflates. I state grain first, pre-aggregate the many-side, or use carefully chosen counts (`COUNT(DISTINCT ...)` when appropriate).

**SAY-THIS STRUCTURE:** Draw 2 tiny tables → join result → show duplicated sum → fix.

**FOLLOW-UPS:** FULL OUTER? Anti-join patterns?

**TRAP:** Definitions without fan-out warning.

---

## B3. GROUP BY vs window functions

**Level:** Core · **Source:** Data.md Phase 6

**QUESTION:** When window functions instead of GROUP BY?

**STRONG ANSWER:** `GROUP BY` collapses rows. Windows (`SUM() OVER (PARTITION BY ...)`) keep row-level detail while adding rankings, running totals, LAG/LEAD. Dedup: `ROW_NUMBER() OVER (PARTITION BY key ORDER BY updated_at DESC) = 1`. I name CTEs for readability.

**FOLLOW-UPS:** RANK vs DENSE_RANK vs ROW_NUMBER?

**TRAP:** Using `GROUP BY` when you still need every row.

---

## B4. Written vs logical SQL order

**Level:** Screen · **Source:** Data.md Phase 4

**QUESTION:** Why can't you use a SELECT alias in WHERE?

**STRONG ANSWER:** Logical order is approximately `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT`. Aliases in `SELECT` do not exist yet at `WHERE` time. I narrate grain, filters, and NULL behavior while writing live SQL.

**FOLLOW-UPS:** HAVING vs WHERE?

**TRAP:** Guessing dialect quirks without the logical-order model.

---

## B5. NULL behavior

**Level:** Core · **Source:** Data.md Phase 4

**QUESTION:** How do NULLs behave in SQL?

**STRONG ANSWER:** `NULL` means unknown. `NULL = NULL` is unknown, not true - use `IS NULL`. Aggregates ignore NULLs (`SUM`/`AVG`), but `COUNT(*)` counts rows while `COUNT(col)` skips NULL cols. Join keys with NULLs never match. I use `COALESCE`/`NULLIF` deliberately.

**FOLLOW-UPS:** NULL in UNIQUE constraints? Three-valued logic in CHECK?

**TRAP:** Treating NULL like zero/empty string.

---

## B6. Metric design / funnel

**Level:** Core · **Source:** Data.md Phase 10

**QUESTION:** How would you define and diagnose a funnel metric drop?

**STRONG ANSWER:** Define exact numerator/denominator, time window, user grain, and guardrails. Check instrumentation (event missing?), mix shifts, seasonality, and segments as exploratory - not instant causation. Write a short memo: observation → checks → hypotheses → recommended action → what to measure after.

**FOLLOW-UPS:** North star vs input metrics? Novelty effects in A/B?

**TRAP:** Storytelling from a single average with no denominator clarity.

---

## B7. Mean vs median; A/B literacy

**Level:** Core · **Source:** Data.md Phase 7

**QUESTION:** Mean or median? How evaluate a feature launch?

**STRONG ANSWER:** Skewed money/latency → median + percentiles; mean for additive totals. For launches: primary metric, guardrails, randomization unit, practical significance, peeking/multiple-comparisons caution. I ask for distribution shape before inventing a narrative.

**FOLLOW-UPS:** What is a p-value not?

**TRAP:** Declaring winners from one peek at p<0.05.

---

## B8. Normalize to 3NF

**Level:** Core · **Source:** Data.md Phase 11

**QUESTION:** Normalize this order form to 3NF.

**STRONG ANSWER:** Identify entities (Customer, Order, OrderItem, Product), primary keys, foreign keys. Remove repeating groups, partial dependence, transitive dependence. Explain which anomaly each split fixes. Note when denormalization is OK on read-heavy paths - analytics uses star schemas instead.

**FOLLOW-UPS:** Surrogate vs natural keys?

**TRAP:** Endless BCNF purity with no workload talk.

---

## B9. Star schema + grain

**Level:** Core · **Source:** Data.md Phase 12

**QUESTION:** Design a star schema for e-commerce orders.

**STRONG ANSWER:** State grain first (e.g., one row per order line per day). Fact: additive measures (quantity, revenue) + FK to dimensions (Date, Customer, Product, Store). Dimensions denormalized attributes. Snowflake only if hierarchy maintenance demands it. Separate OLTP from warehouse.

**FOLLOW-UPS:** SCD Type 1 vs 2 for customer address?

**TRAP:** Drawing boxes without declaring grain.

---

## B10. SCD Type 2

**Level:** Core · **Source:** Data.md Phase 12

**QUESTION:** How do you handle changing customer address historically?

**STRONG ANSWER:** SCD2 keeps versions with `effective_from`/`effective_to` (or `is_current`). Facts point to the surrogate key valid at event time. Type 1 overwrites (no history). Join with half-open intervals carefully.

**FOLLOW-UPS:** Late arriving dimensions?

**TRAP:** Overwriting addresses then wondering why old orders "moved."

---

## B11. ETL vs ELT

**Level:** Core · **Source:** Data.md Phase 13

**QUESTION:** ETL vs ELT?

**STRONG ANSWER:** ETL transforms before load (useful when warehouse compute is limited or secrets must be stripped early). ELT lands raw then transforms in warehouse SQL/dbt - better for reprocessing and ELT-centric stacks. I talk idempotency, schema contracts, and layering (raw → staging → marts), not only vendor logos.

**FOLLOW-UPS:** Idempotent incremental loads? Why Parquet?

**TRAP:** Tool religion without pattern.

---

## B12. Orchestration - Airflow mental model

**Level:** Core · **Source:** Data.md Phase 14

**QUESTION:** What is a DAG? How handle failures?

**STRONG ANSWER:** A DAG is a directed acyclic graph of tasks with dependencies. Sensors wait for conditions; retries/backoff handle transient failure; alerting on SLA miss. Idempotent tasks so retries are safe. Docker freezes runtime so "works on my laptop" does not become prod drift.

**FOLLOW-UPS:** Backfills? Catchup?

**TRAP:** Cron soup with hidden dependencies.

---

## B13. dbt tests and layers

**Level:** Core · **Source:** Data.md Phase 15

**QUESTION:** How do you structure dbt projects?

**STRONG ANSWER:** Staging (1:1 clean), intermediate, marts. `ref()`/`source()` for lineage. Tests: unique/not_null/accepted_values/relationships. Docs + CI on PRs. Analytics code gets software habits.

**FOLLOW-UPS:** What belongs in dbt vs Airflow?

**TRAP:** Giant single SQL file with no tests.

---

## B14. Spark partitions & shuffle (DE)

**Level:** Senior · **Source:** Data.md Phase 17

**QUESTION:** Why is my Spark job slow?

**STRONG ANSWER:** Check partition count, data skew, and wide transformations that shuffle. Prefer narrow transforms; partition on join keys; broadcast small dimensions; avoid huge `collect()`. Explain stage boundaries simply.

**FOLLOW-UPS:** AQE? Predicate pushdown?

**TRAP:** "Add more executors" as first answer.

---

## B15. Kafka basics (DE)

**Level:** Core · **Source:** Data.md Phase 18

**QUESTION:** Topics, partitions, consumer groups? Delivery semantics?

**STRONG ANSWER:** Topic = category; partitions = parallelism/order within partition; consumer group = competing consumers for scale. At-least-once common; exactly-once needs idempotent producers/transactions and careful sinks. Offset commits define reprocessing behavior.

**FOLLOW-UPS:** Compaction? Lag monitoring?

**TRAP:** Treating Kafka as a DB.

---

## B16. Dashboard design prompt

**Level:** Core · **Source:** Data.md Phase 9–10

**QUESTION:** Design a dashboard for X.

**STRONG ANSWER:** Clarify users and decisions. Pick 3–5 metrics with definitions and freshness. Layout: overview KPIs → drilldown → diagnostics. Prevent metric sprawl; note caveats. Tools are secondary to definitions.

**FOLLOW-UPS:** How stop conflicting revenue numbers?

**TRAP:** Tool fanboying / 20 charts.

---

<a id="track-c"></a>

# Track C - Computer Networks

**Source roadmap:** Networks.md (+ CS.md Phase 12)

## C1. What is a computer network?

**Level:** Screen · **Source:** Networks.md Phase 1

**QUESTION:** What is a computer network?

**STRONG ANSWER:** Hosts exchanging messages over shared links under loss/delay/reordering constraints. Protocols add addressing, multiplexing, and reliability *as needed*. Packet switching shares capacity for bursty traffic better than reserved circuits - at the cost of congestion and variable latency.

**FOLLOW-UPS:** Bandwidth vs latency vs throughput?

**TRAP:** "Devices connected together."

---

## C2. Bandwidth vs latency (and BDP)

**Level:** Core · **Source:** Networks.md Phase 1–2

**QUESTION:** Bandwidth vs latency? What is bandwidth-delay product?

**STRONG ANSWER:** Bandwidth = capacity (bits/sec). Latency/RTT = time for a signal/request to go (and often return). Throughput = achieved rate after losses/overhead. BDP = bandwidth × RTT ≈ bytes in flight needed to fill the pipe - why TCP windows must be large on long fat networks. Bufferbloat: oversized buffers inflate latency under load.

**FOLLOW-UPS:** Which matters for 1KB RPC vs 1GB download?

**TRAP:** Using "speed" for both ideas interchangeably.

---

## C3. OSI / TCP-IP layering & encapsulation

**Level:** Screen · **Source:** Networks.md Phase 8

**QUESTION:** Explain the layered model. What is encapsulation?

**STRONG ANSWER:** Each layer solves one job and wraps the payload from above with its header. Practical stack: App (HTTP) → Transport (TCP/UDP) → Network (IP) → Link (Ethernet/Wi-Fi). PDU names: message/segment/packet/frame. Debugging = name which layer failed. Memorizing seven OSI names without mapping failures is weak.

**FOLLOW-UPS:** Hop-by-hop MAC rewrite vs end-to-end IP?

**TRAP:** Layer trivia with no encapsulation story.

---

## C4. MAC vs IP vs Port

**Level:** Screen · **Source:** Networks.md Phase 3/5/8

**QUESTION:** MAC vs IP address? What is a port?

**STRONG ANSWER:** MAC = link-local hardware-ish ID for one segment. IP = logical routable location. Port = which process/socket on that host. Connection 4-tuple `(srcIP, srcPort, dstIP, dstPort)` (+ protocol) demultiplexes flows so one server `:443` serves many clients.

**FOLLOW-UPS:** Why ARP? Why can't MAC route the Internet?

**TRAP:** Treating MAC as global identity forever (ignoring randomization / local scope).

---

## C5. Subnetting live drill

**Level:** Core · **Source:** Networks.md Phase 5

**QUESTION:** Given `10.0.5.37/24`, network, broadcast, usable hosts?

**STRONG ANSWER:** `/24` → mask `255.255.255.0`. Network `10.0.5.0`, broadcast `10.0.5.255`, usable `.1–.254` (254 hosts). Know RFC1918 private ranges cold. `/30` often for point-to-point (2 usable).

**FOLLOW-UPS:** Split `/24` into two `/25`s. What is `169.254/16`?

**TRAP:** Off-by-one on usable counts; confusing `/24` with classful lore only.

---

## C6. Switch vs router; VLAN

**Level:** Core · **Source:** Networks.md Phase 4/6

**QUESTION:** Switch vs router? How do VLANs communicate?

**STRONG ANSWER:** Switch forwards frames by MAC learning; floods unknown unicasts; stays in a broadcast domain. Router forwards packets by IP longest-prefix match between networks. VLANs split broadcast domains; different VLANs need L3 routing (SVI/router-on-a-stick). Trunks carry tagged 802.1Q.

**FOLLOW-UPS:** Spanning tree why? Unknown unicast walk-through?

**TRAP:** "Switch is Layer 2, router Layer 3" with no mechanism.

---

## C7. ARP, DHCP, ICMP

**Level:** Core · **Source:** Networks.md Phase 7

**QUESTION:** What happens before first packet to a gateway? DHCP DORA? Ping?

**STRONG ANSWER:** Need next-hop MAC → ARP request/reply cached. DHCP: Discover/Offer/Request/Ack for address+mask+gateway+DNS. ICMP carries echo (ping) and errors (Dest Unreachable, Time Exceeded for traceroute). Filtering all ICMP breaks PMTUD and diagnosis.

**FOLLOW-UPS:** Gratuitous ARP? Why traceroute shows `* * *`?

**TRAP:** "Ping equals network health" completely.

---

## C8. NAT and why inbound is hard

**Level:** Core · **Source:** Networks.md Phase 7

**QUESTION:** What is NAT? Why can't two phones host servers easily?

**STRONG ANSWER:** NAT/PAT multiplexes many private hosts onto scarce public IPv4 by rewriting ports and keeping a mapping table. Unsolicited inbound packets have no mapping - dropped unless port-forwarded. CGNAT makes it worse. Video calls use STUN/TURN/relays. NAT ≠ firewall, but behaves like a default inbound filter.

**FOLLOW-UPS:** Hairpin NAT? IPv6 relation?

**TRAP:** "NAT is security."

---

## C9. TCP vs UDP

**Level:** Screen · **Source:** Networks.md Phase 9–10

**QUESTION:** TCP vs UDP?

**STRONG ANSWER:** TCP: connection, reliable ordered byte stream, flow+congestion control - web, APIs, file transfer. UDP: datagram, no built-in reliability - DNS queries, gaming, live media, and QUIC/HTTP3 base. TCP: one `send` ≠ one `recv` (need framing). Choose UDP when you want control/latency and will handle loss yourself.

**FOLLOW-UPS:** Why HTTP/3 over UDP? Hol blocking?

**TRAP:** "UDP is always faster" as a slogan.

---

## C10. TCP handshake, SEQ/ACK, TIME_WAIT

**Level:** Core · **Source:** Networks.md Phase 10

**QUESTION:** Draw the three-way handshake. What is TIME_WAIT?

**STRONG ANSWER:** `SYN → SYN-ACK → ACK`, then data. Sequence numbers order bytes; ACKs confirm receipt; loss → retransmit. Teardown FINs each direction. TIME_WAIT holds the tuple so delayed duplicates do not corrupt a new connection - causes "address already in use" on restart without `SO_REUSEADDR` care.

**FOLLOW-UPS:** Flow vs congestion control? Slow start?

**TRAP:** Confusing flow control (receiver window) with congestion control (network).

---

## C11. DNS resolution path

**Level:** Core · **Source:** Networks.md Phase 12

**QUESTION:** How does DNS work?

**STRONG ANSWER:** Stub → recursive resolver → root → TLD → authoritative. Records: A/AAAA, CNAME, MX, NS, TXT. TTL controls cache lifetime - low TTL for agile failover, higher load. DNS usually UDP/53; TCP for large/zone. Outages feel like "Internet is down." DoH/DoT encrypt client-resolver path; DNSSEC authenticates data (different problems).

**FOLLOW-UPS:** Site moved IPs but users broken? Apex CNAME limits?

**TRAP:** "DNS just converts names" with no hierarchy/cache.

---

## C12. HTTP methods, status codes, idempotency

**Level:** Screen · **Source:** Networks.md Phase 13

**QUESTION:** HTTP status classes? Idempotent methods?

**STRONG ANSWER:** 2xx success, 3xx redirect, 4xx client, 5xx server. GET/PUT/DELETE idempotent in design; POST not. Host header enables virtual hosting. Cookies add state on a stateless protocol. Keep-alive reuses TCP.

**FOLLOW-UPS:** 401 vs 403? PUT vs PATCH?

**TRAP:** Memorizing codes without retry implications.

---

## C13. HTTP/1.1 vs 2 vs 3

**Level:** Core · **Source:** Networks.md Phase 13

**QUESTION:** Differences between HTTP versions?

**STRONG ANSWER:** H1: text, often many parallel TCP conns. H2: binary multiplexing on one TCP - still suffers TCP HOL blocking on loss. H3: HTTP over QUIC/UDP - better stream isolation and connection setup, UDP may be blocked in some networks. Do not claim H2 is always faster.

**FOLLOW-UPS:** HPACK? Server push rarity?

**TRAP:** Version numbers without transport story.

---

## C14. TLS / HTTPS

**Level:** Core · **Source:** Networks.md Phase 14

**QUESTION:** What does TLS provide? What does a certificate prove?

**STRONG ANSWER:** Confidentiality, integrity, and server authentication (usually). Handshake agrees keys; cert binds public key to name via CA chain in trust store. Asymmetric for auth/key agreement; symmetric for bulk. Warnings are often auth failures (name mismatch, expiry, untrusted CA), not "encryption off." Forward secrecy protects past sessions if long-term keys leak later.

**FOLLOW-UPS:** Why both crypto types? mTLS? SNI?

**TRAP:** "HTTPS means the site is safe/trustworthy content."

---

## C15. CDN, load balancer, reverse proxy

**Level:** Core · **Source:** Networks.md Phase 17

**QUESTION:** CDN vs load balancer vs reverse proxy?

**STRONG ANSWER:** Reverse proxy sits in front of origins (TLS terminate, route, cache). Load balancer distributes across healthy backends (L4 tuples vs L7 HTTP rules) with health checks. CDN caches at edge PoPs near users (DNS/anycast steering) to cut latency and origin load. Overlap exists; clarify the job.

**FOLLOW-UPS:** Sticky sessions trade-offs? Cache-Control strategy?

**TRAP:** Using the three terms interchangeably.

---

## C16. BGP in one minute

**Level:** Senior · **Source:** Networks.md Phase 18

**QUESTION:** What is BGP? OSPF vs BGP?

**STRONG ANSWER:** OSPF (IGP) computes paths inside an AS from topology/cost. BGP (EGP) exchanges reachability between ASes with **policy** (local pref, AS path) more than pure shortest path. Peering vs transit are business relationships. Leaks/hijacks happen - filtering/RPKI help. CDN anycast rides on BGP announcements.

**FOLLOW-UPS:** Why longer AS path might still win?

**TRAP:** "BGP is OSPF for the world."

---

<a id="track-d"></a>

# Track D - AI / ML / LLM Engineering

**Source roadmap:** AI.md (+ DeepWiki mlabonne/llm-course)

## D1. What is machine learning?

**Level:** Screen · **Source:** AI.md Phase 1

**QUESTION:** What is ML? Supervised vs unsupervised vs RL?

**STRONG ANSWER:** Learning parameters of a model from data to generalize to unseen examples - not hard-coding every rule. Supervised: labeled \((x,y)\). Unsupervised: structure without labels. RL: learn from rewards via actions. Generative models learn a distribution over data (often next-token).

**FOLLOW-UPS:** When rules beat ML?

**TRAP:** Listing libraries as the definition.

---

## D2. Train/val/test and leakage

**Level:** Screen · **Source:** AI.md Phase 1/5

**QUESTION:** Why split data? Give a leakage example.

**STRONG ANSWER:** Train fits params; validation chooses hyperparameters; test estimates final generalization - touch rarely. Leakage: using future info or label-derived features (e.g., "days until churn" to predict churn), or scaling with full-data stats before splitting. Pipelines must fit preprocessors on train folds only. Time/group splits for those domains.

**FOLLOW-UPS:** Nested CV? Stratification?

**TRAP:** Reporting training accuracy as success.

---

## D3. Precision, recall, F1, imbalanced classes

**Level:** Core · **Source:** AI.md Phase 5 / Data metrics habits

**QUESTION:** Accuracy is 99% - are we done? Precision vs recall?

**STRONG ANSWER:** Not if class imbalance exists - always-negative gets 99%. Precision: of predicted positives, how many true. Recall: of actual positives, how many caught. F1 balances; choose threshold from business costs. Prefer PR-AUC under heavy imbalance; ROC can look optimistic.

**FOLLOW-UPS:** Calibration? Cost matrix?

**TRAP:** Optimizing accuracy by default.

---

## D4. Bias-variance; overfit signs

**Level:** Core · **Source:** AI.md Phase 5/7

**QUESTION:** Overfitting vs underfitting? Fixes?

**STRONG ANSWER:** Overfit: low train error, high val error - memorize noise. Underfit: high error everywhere - too simple / under-trained. Fixes for overfit: more data, regularization, dropout, early stopping, simpler model, augmentation. Learning curves diagnose.

**FOLLOW-UPS:** Why data often beats clever regularizers?

**TRAP:** Only saying "add dropout" without diagnosis.

---

## D5. Gradient descent & learning rate

**Level:** Screen · **Source:** AI.md Phase 2/8

**QUESTION:** Explain gradient descent. What does learning rate do?

**STRONG ANSWER:** Loss is a function of parameters; gradient points to steepest increase - we step opposite: \(\theta \leftarrow \theta - \eta \nabla L\). Too high \(\eta\): diverge. Too low: crawl. SGD uses minibatches (noisy cheap gradients). Adam adapts per-parameter steps - strong default, not magic. Schedules/warmup common at scale.

**FOLLOW-UPS:** Local minima worry in deep nets? Momentum?

**TRAP:** Equations without the "downhill walk" intuition - or intuition with no update rule.

---

## D6. Linear vs logistic regression

**Level:** Core · **Source:** AI.md Phase 4

**QUESTION:** Why not MSE for classification? What do logistic coefficients mean?

**STRONG ANSWER:** Classification needs probabilities and log-loss/cross-entropy; MSE + linear outputs are poorly calibrated for labels. Logistic: linear log-odds through sigmoid. Coefficients: effect on log-odds per feature (scaled features!). Decision boundary still linear - XOR needs nonlinear models.

**FOLLOW-UPS:** Regularization L1/L2? Multicollinearity?

**TRAP:** Thresholding linear regression and calling it classification done.

---

## D7. Bagging vs boosting; RF vs GBDT

**Level:** Core · **Source:** AI.md Phase 6

**QUESTION:** Random forest vs gradient boosting?

**STRONG ANSWER:** Bagging (RF): average many deep trees on bootstrap samples → reduces variance; great baseline. Boosting: add trees sequentially to fix residuals with small learning rate → often best classic tabular performance, more tuning sensitive. Neural nets often lose to GBDT on medium tabular data.

**FOLLOW-UPS:** Feature importance pitfalls? Early stopping?

**TRAP:** "Boosting always better."

---

## D8. Why activations? Why ReLU?

**Level:** Screen · **Source:** AI.md Phase 7

**QUESTION:** Why activation functions? Softmax?

**STRONG ANSWER:** Stacked linear layers collapse to one linear map - activations create nonlinearity. ReLU is simple/fast and helped deep nets vs saturating sigmoids in hidden layers. Softmax turns logits into a probability distribution for multiclass.

**FOLLOW-UPS:** Dead ReLUs? Layer norm role later?

**TRAP:** "Activation makes it fire like a brain" without math role.

---

## D9. Backprop in plain language

**Level:** Core · **Source:** AI.md Phase 8

**QUESTION:** What is backpropagation?

**STRONG ANSWER:** Efficiently compute gradients of a scalar loss w.r.t. all parameters using the chain rule on a computational graph - cost comparable to one forward pass. Autograd records ops in forward, reverses in backward. Vanishing gradients with saturated sigmoids historically blocked depth; init/activations/residuals help.

**FOLLOW-UPS:** What does `loss.backward()` do in PyTorch? Why `zero_grad`?

**TRAP:** "AI learns by magic adjusting weights" with no chain-rule story.

---

## D10. CNN inductive bias; transfer learning

**Level:** Core · **Source:** AI.md Phase 10

**QUESTION:** Why CNNs for images? When transfer learning fails?

**STRONG ANSWER:** Local connectivity + weight sharing match spatial locality/translation structure - fewer params than dense flatten. Hierarchies: edges → parts → objects. Transfer learning reuses pretrained features; freeze backbone then fine-tune. Fails under extreme domain shift / tiny unrelated data - still often a strong start. Augmentations regularize.

**FOLLOW-UPS:** What is a channel? Equivariance intuition?

**TRAP:** Training huge nets from scratch on 500 images as default plan.

---

## D11. Embeddings & cosine similarity

**Level:** Core · **Source:** AI.md Phase 12

**QUESTION:** Why embeddings? Cosine vs Euclidean?

**STRONG ANSWER:** One-hots make "cat"⊥"dog". Embeddings place tokens in \(\mathbb{R}^d\) so geometry reflects meaning (distributional hypothesis). Cosine focuses on direction (common after normalization); Euclidean cares about magnitude too. Static embeddings fail on polysemy - contextual models fix that. Power search/RAG.

**FOLLOW-UPS:** Chunk size effects? ANN indexes?

**TRAP:** "Vectors store meaning" with no training objective / similarity story.

---

## D12. Self-attention Q/K/V

**Level:** Core · **Source:** AI.md Phase 13

**QUESTION:** Explain self-attention. Why scale by \(\sqrt{d}\)?

**STRONG ANSWER:** Each token builds Query, Key, Value projections. Weights = softmax\((QK^\top)/\sqrt{d})\) then mix Values. Every token can directly attend to every other (in window) - parallelizable vs RNNs. Scale keeps dot products from exploding softmax into tiny gradients. Multi-head = multiple subspaces. Positional encodings add order. Cost \(O(T^2)\).

**FOLLOW-UPS:** Causal mask? BERT vs GPT?

**TRAP:** Memorizing "attention is all you need" without QKV mechanics.

---

## D13. Tokens, context, sampling

**Level:** Screen · **Source:** AI.md Phase 14

**QUESTION:** What is a token? Temperature?

**STRONG ANSWER:** Models read/write subword tokens (BPE etc.), not words. Context window is finite working memory - truncate silently if ignored. Cost ≈ tokens in+out. Temperature/top-p control randomness; temp 0 ≈ greedy (still not perfectly deterministic everywhere). Manage budgets deliberately.

**FOLLOW-UPS:** Why count tokens for billing?

**TRAP:** Pasting huge docs then blaming the model for "forgetting."

---

## D14. Prompting & hallucination control

**Level:** Core · **Source:** AI.md Phase 14

**QUESTION:** How reduce hallucinations? What is prompt injection?

**STRONG ANSWER:** Treat prompts as contracts: context, role, instructions, constraints, examples; demand grounded answers ("I don't know" if missing); validate schemas. Ground with RAG. Injection: untrusted text tries to override instructions - sanitize tool outputs, separate trusted system prompts, allowlist tools. Eval suites catch regressions.

**FOLLOW-UPS:** Few-shot vs fine-tune vs RAG decision?

**TRAP:** Magical prompt folklore without validation.

---

## D15. RAG system design

**Level:** Senior · **Source:** AI.md Phase 15

**QUESTION:** Design a RAG system. Failure modes?

**STRONG ANSWER:** Ingest → chunk → embed → index. Query → retrieve top-k → (rerank) → generate with citations. Evaluate retrieval recall@k separately from answer faithfulness. Hybrid BM25+vector for IDs/codes. Failures: bad chunking, wrong k, diluted context, citation hallucination, stale indexes. Version chunker+index+prompt+model together.

**FOLLOW-UPS:** When is agentic RAG worth latency?

**TRAP:** Only drawing "LLM + vector DB" with no eval.

---

## D16. RAG vs fine-tuning vs LoRA

**Level:** Core · **Source:** AI.md Phase 16

**QUESTION:** When RAG vs fine-tune? What is LoRA/QLoRA?

**STRONG ANSWER:** RAG for dynamic/proprietary knowledge and citations. Fine-tune for stable style, format, tool schemas, domain dialect. LoRA trains small low-rank adapters instead of all weights; QLoRA quantizes base for consumer GPUs. Data quality >> quantity. Do not fine-tune weekly facts that belong in retrieval.

**FOLLOW-UPS:** Catastrophic forgetting? Preference tuning (DPO/RLHF) purpose?

**TRAP:** Fine-tuning to "add the PDF."

---

## D17. Agents / ReAct / safety

**Level:** Senior · **Source:** AI.md Phase 17

**QUESTION:** What is an AI agent? How keep it safe?

**STRONG ANSWER:** A loop where the model chooses tools, deterministic code executes them, observations return - until final answer or limits. ReAct interleaves reason/act/observe. Safety: allowlists, sandboxes, authz, max steps/time/budget, human approval for irreversible actions, traces. Separate orchestrator control flow from free-form text. Injection via tool outputs is real.

**FOLLOW-UPS:** When should you not use an agent?

**TRAP:** Fully autonomous agents with no caps as the architecture.

---

## D18. Eval, observability, cost for LLM apps

**Level:** Senior · **Source:** AI.md Phase 18

**QUESTION:** How do you evaluate and operate an LLM feature?

**STRONG ANSWER:** Offline golden sets + property checks; retrieval metrics + answer metrics; careful LLM-as-judge; human sample reviews. Online: latency, cost/tokens, thumbs, error rate. Trace prompt version, model id, retrieved chunk IDs. Guardrails on I/O; rate limits; caching; fallbacks; canary then rollback. Treat prompts/indexes as code in CI.

**FOLLOW-UPS:** OWASP LLM risks you care about?

**TRAP:** "We'll watch it in prod" with no golden set.

---

<a id="track-w"></a>

# Track W - Web Development

**Source roadmap:** Web.md (+ CS/Networks/Data foundations)

## W1. Trace a page from URL to interactive pixels

**Level:** Core · **Source:** Web.md Phases 1, 5, 12

**QUESTION:** What happens from entering a URL until the page is interactive?

**STRONG ANSWER:** Parse URL; resolve DNS; establish TCP/QUIC and TLS; send HTTP request; receive headers/body; parse HTML to DOM and CSS to CSSOM; build render tree, layout, paint, and composite; discover/fetch subresources; run JavaScript tasks and hydrate/attach behavior if needed. Name caches and failure points at each boundary. “Interactive” is user-facing: required JS has executed and the main thread can respond, not merely `load` fired.

**FOLLOW-UPS:** Where can head-of-line blocking occur? What changes with SSR or HTTP/3?

**TRAP:** Saying “DNS then server returns HTML” and skipping rendering, TLS, assets, or main-thread work.

---

## W2. Semantic HTML and accessibility first response

**Level:** Screen · **Source:** Web.md Phases 2-4

**QUESTION:** How do you make a custom interface accessible?

**STRONG ANSWER:** Begin with the correct native element and document structure because semantics supply keyboard behavior and an accessibility-tree role/name/state. Ensure labels, heading/landmark order, focus visibility/order, keyboard operation, contrast/reflow, error/status announcements, and reduced motion. Add ARIA only when native HTML cannot express the widget, then implement its full keyboard/focus pattern. Verify with keyboard, accessibility tree, automation, zoom, and screen-reader spot checks.

**FOLLOW-UPS:** How would you manage focus in a modal? Is passing axe enough?

**TRAP:** “Add aria-label everywhere” or treating accessibility as a final automated score.

---

## W3. Explain the CSS cascade and a layout choice

**Level:** Screen · **Source:** Web.md Phases 3-4

**QUESTION:** Why is a CSS rule not applying, and when do you choose Grid vs Flexbox?

**STRONG ANSWER:** Inspect whether the property applies, then cascade origin/importance, layer, specificity, scoping proximity, and source order; also check inheritance, shorthand overrides, media/container conditions, and invalid values. Use normal flow by default, Flexbox for one-dimensional distribution/alignment, and Grid for two-dimensional tracks. Avoid raising specificity blindly; fix ownership/layers or selector design.

**FOLLOW-UPS:** What creates a stacking context? Why `min-width: 0` in flex children?

**TRAP:** Reaching for `!important` or absolute positioning as the primary layout system.

---

## W4. JavaScript closure, event loop, and async ordering

**Level:** Core · **Source:** Web.md Phase 5

**QUESTION:** Explain a closure and why Promise callbacks run before a timer.

**STRONG ANSWER:** A closure is a function retaining access to its lexical environment after the outer call returns. The runtime executes the current task to completion; resolved-Promise reactions enter the microtask queue, which drains before the browser takes the next task such as a timer and generally before the next rendering opportunity. Excess microtasks or long synchronous work can starve rendering/input. Use the model to explain stale captured state and cleanup leaks.

**FOLLOW-UPS:** What does `await` do? How do you cancel a fetch and avoid stale responses?

**TRAP:** Calling JavaScript “multithreaded because async” or memorizing output order without the queue model.

---

## W5. Component state, effects, and rendering

**Level:** Core · **Source:** Web.md Phases 8-10

**QUESTION:** Where should frontend state live, and when is an effect appropriate?

**STRONG ANSWER:** Put shareable navigation state in the URL, remote truth in a server-state cache, truly cross-cutting client state in context/store, and transient state in the nearest component. Derive values during render rather than synchronizing duplicates. An effect is for synchronizing with an external system—subscription, timer, DOM API, or network side effect—with dependency correctness, cleanup, and race handling. Stable keys preserve identity; rendering should remain pure.

**FOLLOW-UPS:** Controlled vs uncontrolled form? Optimistic update rollback? Why can an effect loop?

**TRAP:** A global store for everything or fetching/mirroring derived values in effects by default.

---

## W6. CSR vs SSR vs SSG and framework choice

**Level:** Core · **Source:** Web.md Phases 9-10

**QUESTION:** How do you choose a rendering strategy and frontend framework?

**STRONG ANSWER:** Start with product constraints: public crawlable content, personalization/freshness, interactivity, latency, hosting, team skill, and operations. CSR shifts startup to the browser; SSR improves first content/dynamic HTML but adds server/hydration work; SSG is fast/resilient for build-time content but has freshness/build costs; streaming/islands can reduce all-or-nothing work. Choose React/Next, Vue/Nuxt, Angular, SvelteKit, Astro, or no framework based on those constraints and ecosystem longevity—not benchmarks alone.

**FOLLOW-UPS:** What causes hydration mismatch? When is a server component useful?

**TRAP:** “SSR is always better for SEO” or picking a framework only because it is popular.

---

## W7. TypeScript and runtime validation

**Level:** Screen · **Source:** Web.md Phase 7

**QUESTION:** If an API response has a TypeScript type, why validate it?

**STRONG ANSWER:** TypeScript types disappear at runtime and cannot make an untrusted response conform. Parse unknown input at the boundary with a schema/guard, reject or normalize invalid data, then expose the validated typed value internally. Use unions to make invalid application states unrepresentable, prefer inference/narrowing, and avoid `any` because it disables the proof chain.

**FOLLOW-UPS:** `unknown` vs `any`? Structural typing risk? Generated OpenAPI types?

**TRAP:** Casting `response.json() as User` and calling that validation.

---

## W8. Frontend test strategy

**Level:** Core · **Source:** Web.md Phase 15

**QUESTION:** What should you test in a frontend application?

**STRONG ANSWER:** Static checks catch type/rule/build failures; unit tests cover pure domain logic; component/integration tests assert user-visible behavior and accessibility through public interactions; a small E2E set covers critical cross-system journeys; add automated accessibility and performance budgets. Mock at external boundaries with contract-faithful responses, avoid testing private component state, and keep tests deterministic. Put a regression test at the cheapest layer that proves each bug.

**FOLLOW-UPS:** When use Playwright instead of Testing Library? How test race conditions?

**TRAP:** Snapshot-everything coverage or an enormous flaky E2E suite.

---

## W9. Backend request lifecycle and framework selection

**Level:** Core · **Source:** Web.md Phase 11

**QUESTION:** Walk through an API request and choose a backend framework.

**STRONG ANSWER:** Listener accepts request; middleware handles cross-cutting concerns; router selects handler; boundary validates/authenticates; authorization checks action/object; application use case coordinates domain and repositories/external clients; transaction preserves invariants; serializer maps a safe response; centralized error mapping/logging records correlation. Choose Node, Django/FastAPI, Laravel, Rails, Spring, ASP.NET, or Go using team/domain/library/runtime/operations constraints. Architecture boundaries matter more than framework brand.

**FOLLOW-UPS:** Where start a transaction? How handle graceful shutdown or CPU-heavy work in Node?

**TRAP:** Putting all business rules in controllers or declaring one framework “the fastest” without workload context.

---

## W10. SQL schema, indexes, transactions, and ORM

**Level:** Core · **Source:** Web.md Phase 13

**QUESTION:** A list endpoint is slow and concurrent updates lose data. What do you inspect?

**STRONG ANSWER:** Confirm query and parameters; inspect actual plan, row estimates, scan type, joins/sorts, and N+1 calls; align a selective composite/partial index with filter and order while considering write cost. For lost updates, define the invariant and use a transaction plus version/conditional update, appropriate locking, or a single atomic statement; keep database constraints as the final guard. Inspect ORM-generated SQL rather than bypassing understanding.

**FOLLOW-UPS:** Offset vs cursor pagination? Isolation levels? Cache invalidation?

**TRAP:** Add Redis or an index to every column before measuring the query.

---

## W11. Design a production REST API

**Level:** Core · **Source:** Web.md Phase 12

**QUESTION:** Design project/task CRUD for multiple clients.

**STRONG ANSWER:** Clarify resources, actors, permissions, workflows, scale, and compatibility. Use noun routes and HTTP semantics; define schemas, stable IDs/time/money, validation, machine-readable errors, filtering/sorting, deterministic cursor pagination, optimistic concurrency, idempotency for retried creates, rate limits, and request IDs. Publish OpenAPI with security and examples, generate/test clients where useful, evolve additively, and run a measured deprecation process.

**FOLLOW-UPS:** `PUT` vs `PATCH`? `401` vs `403`? When GraphQL/gRPC/webhook?

**TRAP:** A route list without errors, authorization, pagination, retries, or lifecycle policy.

---

## W12. Sessions vs JWT and OAuth/OIDC

**Level:** Core · **Source:** Web.md Phase 14

**QUESTION:** How would you authenticate a browser app and a third-party client?

**STRONG ANSWER:** Separate authentication from authorization. For a first-party browser, an opaque server session in Secure/HttpOnly/appropriate SameSite cookie gives simple revocation and keeps credentials out of JS; add CSRF defense where needed. For delegated third-party access use OAuth Authorization Code with PKCE; OIDC supplies identity. JWT access tokens are useful for verifiable distributed claims but require strict algorithm/signature/issuer/audience/expiry/key validation, short lifetimes, and a revocation/rotation story. Never store passwords reversibly.

**FOLLOW-UPS:** Where store refresh tokens? Cookie theft vs XSS? Why PKCE?

**TRAP:** “JWT is more secure and stateless” without threat model or revocation cost.

---

## W13. Authorization and common web attacks

**Level:** Core · **Source:** Web.md Phase 14

**QUESTION:** How do you prevent XSS, CSRF, injection, SSRF, and IDOR/BOLA?

**STRONG ANSWER:** XSS: contextual output encoding, safe DOM APIs, sanitization only where rich HTML is required, and CSP defense-in-depth. CSRF: SameSite plus token/origin checks and no state-changing GET. SQLi: parameters and allowlists for identifiers. SSRF: strict outbound destinations, resolved-IP checks, redirect control, and egress policy. IDOR/BOLA: server-side action and object/tenant authorization on every request with negative tests. Add secure headers, limits, logging, secret hygiene, and dependency updates.

**FOLLOW-UPS:** Is CORS a security boundary? Secure file upload? Multi-tenant test cases?

**TRAP:** Client-side role checks or input “sanitization” as a universal security answer.

---

## W14. Webhooks, queues, retries, and exactly-once claims

**Level:** Senior · **Source:** Web.md Phase 18

**QUESTION:** A payment webhook may arrive twice or out of order. Design processing.

**STRONG ANSWER:** Verify signature over raw body plus timestamp; reject stale/invalid events; persist provider event ID under a unique constraint; acknowledge quickly; enqueue durable work; make business transition idempotent and monotonic; bound retries with jitter and dead-letter/operator replay; log/measure age, attempts, and outcomes. Use an outbox for local commit plus event publication. Do not promise end-to-end exactly once—combine at-least-once delivery with idempotent effects.

**FOLLOW-UPS:** What if response is lost? Poison message? Ordering per aggregate?

**TRAP:** Retrying indefinitely or deduplicating only in process memory.

---

## W15. Diagnose a slow web application end to end

**Level:** Senior · **Source:** Web.md Phases 16-17

**QUESTION:** Users say the app became slow after a deploy. What do you do?

**STRONG ANSWER:** Define affected users/actions/time and compare deploy/traffic/config changes. Trace one slow interaction: real-user Web Vitals and browser waterfall/main thread; network/CDN/TLS; API p50/p95/p99 and saturation; trace spans through dependencies; DB plan/locks/pool; cache hit rate; queue delay. Reproduce with controlled inputs, mitigate/rollback if impact is active, then fix the measured bottleneck and add a regression budget/alert. Preserve evidence and avoid changing multiple variables.

**FOLLOW-UPS:** High LCP but fast API? Good average but bad p99? Memory grows over time?

**TRAP:** Scale pods, add cache, or minify code before locating the latency.

---

## W16. Design and operate a full-stack SaaS slice

**Level:** Senior · **Source:** Web.md Phases 17-20

**QUESTION:** Design a multi-tenant project management application.

**STRONG ANSWER:** Clarify roles, tenant isolation, core workflow, traffic, consistency, latency, compliance, and non-goals. Start modular monolith: CDN/reverse proxy, server-rendered or SPA UI, API, Postgres with tenant constraints/indexes, object storage, queue/worker, optional Redis. Define REST/OpenAPI, session/OAuth needs, object authorization, audit events, rate limits, async notifications, test layers, CI/migrations, HTTPS/secrets, logs/metrics/traces, SLO/alerts, backup/restore, and rollback. Scale measured walls with cache/read replica/partition/service extraction—not preemptive microservices.

**FOLLOW-UPS:** Tenant migration? Noisy neighbor? Zero-downtime schema change? Regional failure?

**TRAP:** Starting with Kubernetes/microservices and omitting isolation, recovery, or operations.

---

<a id="track-g"></a>

# Track G - Cloud Engineering

**Source roadmap:** cloud.md (+ Networks/CS foundations)

## G1. Regions, zones, and shared responsibility

**Level:** Screen · **Source:** cloud.md Phases 1, 3

**STRONG ANSWER:** A region is a geographic failure and data-residency boundary; an availability zone is an isolated location inside it. I spread a service across zones for routine infrastructure failures and add another region only when recovery objectives, regulation, or user latency justify the cost and complexity. The provider secures the cloud's physical and managed-service foundation; I still own identities, data, configuration, application code, and service-specific controls.

**FOLLOW-UPS:** What still fails across multiple zones? When is multi-region wasteful? · **TRAP:** Saying the provider owns all security or treating a region as automatic disaster recovery.

---

## G2. Design least-privilege cloud identity

**Level:** Core · **Source:** cloud.md Phase 4

**STRONG ANSWER:** Begin with human and workload identities, not long-lived access keys. Federate humans through SSO with MFA; give workloads roles or managed identities and short-lived credentials. Policies should allow only required actions on required resources under useful conditions, with explicit boundaries, separation of duties, centralized audit logs, and a tested emergency path. Review actual use and remove permissions continuously.

**FOLLOW-UPS:** Role vs user? How do you investigate an access denial? · **TRAP:** Administrator access plus secret keys stored in CI.

---

## G3. Design a public web service inside a VPC/VNet

**Level:** Core · **Source:** cloud.md Phase 5

**STRONG ANSWER:** Put the public load balancer at controlled internet-facing subnets and application/database workloads in private subnets across zones. Routes decide reachability; stateful security groups or NSGs express workload intent, while network ACLs are coarse subnet guards. Private workloads use NAT only for required outbound internet access and private endpoints for provider services where possible. DNS, flow logs, egress control, and no public database complete the design.

**FOLLOW-UPS:** NAT gateway vs internet gateway? How does a private endpoint help? · **TRAP:** Calling a subnet private merely because its name says private.

---

## G4. Choose compute, scaling, and load balancing

**Level:** Core · **Source:** cloud.md Phase 6

**STRONG ANSWER:** Choose VMs when OS/runtime control matters, containers for portable long-running services, and functions for event-driven work with bounded execution. Keep instances replaceable, externalize durable state, health-check real readiness, scale on a signal tied to saturation or demand, and load-balance across zones. Account for cold starts, connection draining, quotas, slow dependencies, and the difference between scaling out and recovering safely.

**FOLLOW-UPS:** Why can CPU autoscaling fail? L4 vs L7 load balancer? · **TRAP:** Autoscaling a stateful bottleneck without capacity or dependency analysis.

---

## G5. Choose cloud storage and databases

**Level:** Core · **Source:** cloud.md Phases 8-9

**STRONG ANSWER:** Start from access pattern and guarantees. Object storage fits immutable blobs and data lakes; block storage fits mounted low-latency volumes; file storage fits shared filesystem semantics. Use relational databases for constraints, joins, and transactions; key-value/document systems for known high-scale access patterns; caches for derived hot data, never as unexplained truth. Define encryption, retention, versioning, backup, restore tests, replication, and consistency before choosing a product name.

**FOLLOW-UPS:** Backup vs replication? Strong vs eventual consistency? · **TRAP:** Selecting NoSQL only because the system may grow.

---

## G6. Build a reliable event-driven/serverless workflow

**Level:** Senior · **Source:** cloud.md Phases 7, 10

**STRONG ANSWER:** Accept the event durably, acknowledge quickly, and let bounded workers process it. Assume at-least-once delivery: deduplicate by stable event ID, make state transitions idempotent, use exponential backoff with jitter, isolate poison messages in a dead-letter queue, and expose age/attempt/outcome metrics. Preserve ordering only where the business invariant requires it, and use an outbox when a database commit and event publication must move together.

**FOLLOW-UPS:** What if processing succeeds but acknowledgement is lost? · **TRAP:** Claiming a queue gives end-to-end exactly-once execution.

---

## G7. Explain infrastructure as code, state, and drift

**Level:** Core · **Source:** cloud.md Phase 12

**STRONG ANSWER:** IaC makes desired infrastructure reviewable, repeatable, testable, and recoverable. The engine compares configuration, stored state, and provider reality to build a plan, then converges resources. Protect remote state with locking, encryption, restricted access, and backups; separate environments and ownership boundaries; pin versions; review plans; detect drift; and import or intentionally replace manual resources instead of hiding differences.

**FOLLOW-UPS:** Why is state sensitive? Module boundaries? · **TRAP:** Editing production manually and assuming the next apply will harmlessly reconcile it.

---

## G8. Turn reliability goals into architecture

**Level:** Senior · **Source:** cloud.md Phases 15-16

**STRONG ANSWER:** Translate business impact into SLI/SLO, RTO, RPO, and failure assumptions. Then choose health checks, multi-zone placement, timeouts, retries with budgets, circuit breaking, load shedding, backups, replication, and a tested recovery runbook. Logs, metrics, and traces must answer user-impact questions. I prove the design with restore tests and game days; redundancy without detection, failover, and data recovery evidence is only a diagram.

**FOLLOW-UPS:** RTO vs RPO? When do retries amplify an outage? · **TRAP:** Equating high availability with backup or disaster recovery.

---

## G9. Secure and control cloud cost

**Level:** Senior · **Source:** cloud.md Phases 14, 17

**STRONG ANSWER:** Security and FinOps are feedback systems. Establish identity, encryption, secret management, network boundaries, audit/config findings, patch and vulnerability ownership, then prioritize by exposure and blast radius. For cost, enforce tagging/allocation, budgets and anomaly alerts, unit economics, right-sizing, lifecycle policies, commitment coverage, and architectural review. Optimize waste without buying fragility or hiding shared costs.

**FOLLOW-UPS:** Which finding gets fixed first? Reserved capacity vs autoscaling? · **TRAP:** Treating cost optimization as simply turning resources off.

---

## G10. Design a migration and production landing zone

**Level:** Senior · **Source:** cloud.md Phases 18-20

**STRONG ANSWER:** Inventory dependencies, data classification, traffic, licensing, compliance, and recovery targets; create a governed landing zone for identity, accounts/subscriptions, networks, logging, policy, budgets, and break-glass access. Choose rehost, replatform, refactor, repurchase, retain, or retire per workload. Migrate in observable waves with data validation, performance baselines, cutover/rollback criteria, ownership, and a post-migration optimization period.

**FOLLOW-UPS:** How do you minimize database cutover? What belongs in a landing zone? · **TRAP:** A big-bang lift-and-shift with no rollback or operating model.

---

<a id="track-h"></a>

# Track H - DevOps Engineering

**Source roadmap:** devops.md (+ cloud/Networks/CS foundations)

## H1. What is DevOps, and how do you measure it?

**Level:** Screen · **Source:** devops.md Phase 1

**STRONG ANSWER:** DevOps is an operating model in which product, development, security, and operations shorten and stabilize the path from change to user value through shared ownership, automation, and feedback. I watch deployment frequency and lead time for flow, change failure rate and failed-deployment recovery time for stability, plus product and reliability outcomes. The metrics diagnose constraints; they are not quotas for gaming teams.

**FOLLOW-UPS:** Can speed and stability improve together? · **TRAP:** Defining DevOps as a job title or a list of tools.

---

## H2. Troubleshoot a failing Linux service

**Level:** Core · **Source:** devops.md Phases 2-3

**STRONG ANSWER:** Define impact and recent change, then inspect service state and logs, process ownership, exit code, resource pressure, filesystem/inodes, permissions, environment/config, listening sockets, DNS and dependency reachability. Follow the request path with `systemctl`, `journalctl`, `ps`, `ss`, `curl`, `dig`, and targeted tracing. Mitigate first when impact is active, preserve evidence, change one variable, verify recovery, and record a prevention action.

**FOLLOW-UPS:** Process exists but port is closed—next checks? · **TRAP:** Restarting repeatedly until evidence disappears.

---

## H3. Git strategy and safe collaboration

**Level:** Screen · **Source:** devops.md Phase 4

**STRONG ANSWER:** Git stores a graph of immutable commits and movable references. Prefer small changes, protected main, fast review, automated checks, and short-lived branches or trunk-based development when the team can sustain it. Merge preserves branch topology; rebase rewrites local ancestry for a linear story and should not rewrite shared history casually. A revert creates an auditable inverse change and is safer than erasing published commits.

**FOLLOW-UPS:** When squash? How recover a lost commit? · **TRAP:** Long-lived environment branches and force-pushing shared history.

---

## H4. Write reliable operational automation

**Level:** Core · **Source:** devops.md Phase 5

**STRONG ANSWER:** Automation should be idempotent, observable, bounded, and safe to rerun. Validate inputs and preconditions; quote variables; use strict error handling thoughtfully; write to a temporary target and atomically replace; set timeouts; retry only transient idempotent work; emit useful exit codes/logs; clean up; and support dry-run where consequences matter. Test the failure path, not just the happy path.

**FOLLOW-UPS:** How do you prevent two runs colliding? · **TRAP:** A script that works only from one directory with one user's environment.

---

## H5. Explain the build artifact and software-supply chain

**Level:** Core · **Source:** devops.md Phase 6

**STRONG ANSWER:** Resolve pinned dependencies, compile/package, test, scan, generate metadata, sign or attest, and publish one immutable artifact. Promote that same digest through environments instead of rebuilding. Record source revision, toolchain and dependencies with provenance/SBOM, restrict publisher identity, protect the registry, and verify signatures/policy before deployment. Reproducibility and traceability make rollback and incident scope credible.

**FOLLOW-UPS:** Why not rebuild for production? · **TRAP:** Using a mutable `latest` tag as release identity.

---

## H6. Design a secure, fast CI pipeline

**Level:** Core · **Source:** devops.md Phase 7

**STRONG ANSWER:** Trigger deterministic checks from versioned configuration; fail fast on format/type/unit tests, parallelize independent integration/security work, cache by safe content keys, and publish immutable results. Use isolated ephemeral runners, least-privilege short-lived cloud identity, masked secrets, protected environments, concurrency cancellation, and required checks. Track duration, queue time, flake rate, and failure cause; quarantine only with an owner and deadline.

**FOLLOW-UPS:** How can forked PRs access secrets? · **TRAP:** Retrying flaky tests until the pipeline turns green.

---

## H7. Choose a deployment and rollback strategy

**Level:** Senior · **Source:** devops.md Phase 8

**STRONG ANSWER:** Separate deployment from release when useful. Rolling is resource-efficient but mixes versions; blue-green gives fast switchback but doubles capacity and complicates state; canary limits blast radius but needs representative traffic and automatic health gates. Use immutable artifacts, backward-compatible expand/migrate/contract schema changes, readiness and graceful drain, progressive verification, and a rehearsed rollback or roll-forward decision.

**FOLLOW-UPS:** What cannot be rolled back? · **TRAP:** Calling a deployment successful because pods started.

---

## H8. Explain a production container

**Level:** Core · **Source:** devops.md Phase 9

**STRONG ANSWER:** A container is an isolated process using kernel namespaces and cgroups, packaged with an immutable layered filesystem—not a small VM. Build from a pinned minimal base with multi-stage builds, run as non-root, exclude secrets, scan and sign, set resource expectations, send logs to stdout/stderr, keep state external, handle PID 1 signals, expose truthful readiness, and identify releases by digest.

**FOLLOW-UPS:** Image vs container? Why does PID 1 matter? · **TRAP:** Baking credentials or production data into an image.

---

## H9. Debug a Kubernetes deployment

**Level:** Senior · **Source:** devops.md Phase 10

**STRONG ANSWER:** Start from user symptom and desired controller state. Inspect rollout and events, pod phase/restarts, current and previous logs, readiness/liveness/startup probes, requests/limits and OOM/eviction, image/config/secret mounts, service selectors/endpoints, DNS and network policy, then node/scheduler conditions. Fix the narrow cause, verify traffic and error rate, and improve the probe, limit, policy, alert, or runbook that allowed it.

**FOLLOW-UPS:** Pending vs CrashLoopBackOff? Service has no endpoints? · **TRAP:** Deleting pods repeatedly without reading events or previous logs.

---

## H10. Terraform versus configuration management

**Level:** Core · **Source:** devops.md Phases 11-13

**STRONG ANSWER:** Terraform-like IaC manages infrastructure resources through a dependency graph, provider APIs, and state; Ansible-like configuration management converges packages, files, and services on hosts, preferably idempotently. Keep small ownership-aligned modules/roles, protected remote state, pinned versions, reviewed plans, secret indirection, policy/testing, and drift detection. Use cloud-native immutable images or managed services when they remove host configuration entirely.

**FOLLOW-UPS:** What belongs in a module? How handle drift? · **TRAP:** One giant state file and manual fixes between applies.

---

## H11. Observability, SLOs, and alerting

**Level:** Senior · **Source:** devops.md Phases 14-15

**STRONG ANSWER:** Metrics show trends and saturation, logs explain discrete events, and traces connect latency across boundaries; correlate them with stable IDs and controlled cardinality. Define user-centered SLIs and SLOs, calculate an error budget, alert on actionable symptoms or burn rate, and attach ownership plus a runbook. Dashboards support investigation; pages demand action. Instrument the critical path before collecting everything.

**FOLLOW-UPS:** High-cardinality label risk? Why multi-window burn alerts? · **TRAP:** Paging on raw CPU or every logged error without user-impact context.

---

## H12. DevSecOps, GitOps, incidents, and platform engineering

**Level:** Senior · **Source:** devops.md Phases 16-20

**STRONG ANSWER:** Put fast security feedback near the change—secret, dependency, SAST, IaC, image and policy checks—then prioritize exploitable risk and preserve exception ownership. With GitOps, reviewed Git state is reconciled continuously and drift is visible; protect promotion and emergency procedures. During incidents establish command, communication, mitigation, evidence, and recovery; follow with a blameless causal review. A platform packages these paved roads as a product with adoption and outcome metrics, not a ticket wall.

**FOLLOW-UPS:** Git is unavailable during an incident? How avoid security gate fatigue? · **TRAP:** More tools and gates without ownership, developer usability, or recovery practice.

---

<a id="track-e"></a>

# Track E - Cross-Cutting Classics

**Source roadmap:** Networks + CS + Data + AI (serving concerns)

## E1. What happens when you type a URL and press Enter?

**Level:** Senior signal · **Source:** Networks.md Phases 8–14 · CS web phases

**QUESTION:** Walk me through typing `https://example.com`.

**STRONG ANSWER (layer tour):**

1. Parse URL (scheme/host/path). Check HSTS/cache.
2. DNS lookup (stub → recursive → auth) → IP(s).
3. TCP connect (SYN/SYN-ACK/ACK) to `:443` (or QUIC path for H3).
4. TLS handshake - cert verify for hostname, keys.
5. HTTP request (`GET /`, headers) maybe via CDN/LB/reverse proxy.
6. Server responds; browser parses HTML; may repeat for assets.
7. Rendering. Name failure modes at each step (NXDOMAIN, SYN timeout, cert error, 502, etc.).

**Practice 5-minute and 12-minute versions.** Invite depth: "Want TLS or routing next?"

**TRAP:** Stopping at "DNS then HTTP" with no ports/TLS/caching/CDN.

---

## E2. Layered debugging ladder (network)

**Level:** Core · **Source:** Networks.md Phase 15

**QUESTION:** Site is down - how do you debug?

**STRONG ANSWER:** Link up? ARP/neigh to gateway? Ping gateway? Ping public IP? DNS resolve? TCP connect? TLS? HTTP code? Map OS errors (`ECONNREFUSED` vs `ETIMEDOUT`) to packets (RST vs silence). Capture with filters when needed. Eliminate layers in order.

**TRAP:** Rebooting randomly / jumping to "MTU" first without evidence.

---

## E3. Idempotency, retries, timeouts (backend)

**Level:** Core · **Source:** CS + Networks HTTP + Data pipelines

**QUESTION:** How do you retry safely?

**STRONG ANSWER:** Timeouts everywhere; bounded retries with jittered backoff; idempotency keys for POST-like side effects; distinguish 429/503 (retry) vs 400 (do not). At-least-once delivery needs idempotent consumers. Pipelines: same.

**TRAP:** Infinite retries hammering a failing dependency.

---

## E4. Design a URL shortener / feed (skeleton)

**Level:** Senior · **Source:** CS system design

**QUESTION:** Design a URL shortener.

**STRONG ANSWER:** Clarify read/write QPS, retention, custom aliases. API: create/redirect. Encode IDs (base62), store map in DB+cache, 301/302 choice, analytics async, rate limits, abuse. Estimate storage. Discuss hot keys and cache.

**TRAP:** Jumping to Kafka/K8s before requirements.

---

## E5. Design an internal docs Q&A bot (AI system)

**Level:** Senior · **Source:** AI.md Phases 15–18

**QUESTION:** Design a company docs assistant.

**STRONG ANSWER:** Users/SLA → ingest connectors → chunk/metadata → hybrid retrieve → rerank → grounded generate with citations → feedback → eval suite → tracing/cost caps → access control by doc ACL → HITL for sensitive actions. MVP without agents; add tools later.

**TRAP:** Single "agent" box with no ACL/eval.

---

## E6. Explain a slow API (combined)

**Level:** Core · **Source:** Networks + CS + Data

**QUESTION:** API p99 latency spiked - how investigate?

**STRONG ANSWER:** Split client vs network vs server. Metrics: RTT, DB time, queue time, GC, dependency calls. Check deploys, cache hit rate, DB plans, thread pool saturation, DNS/TLS session reuse, payload sizes. Correlate with traffic. Packet/trace only after narrowing.

**TRAP:** Scaling pods before measuring where time goes.

---

<a id="track-f"></a>

# Track F - Behavioral (STAR) Anchored to Your Roadmaps

Use **Situation → Task → Action → Result**, and end with **what you would do differently**. Prefer stories from labs in your roadmaps.

## F1. Tell me about a time you debugged something hard

**Shape:** Network ladder or ML "won't learn" ladder or SQL fan-out bug. Show evidence order, not heroics.

## F2. Disagreement on a metric / design trade-off

**Shape:** Analyst vs engineer metric contract; RAG vs fine-tune debate; consistency vs latency. Show you named trade-offs and measured.

## F3. You shipped something that failed

**Shape:** Leakage, missing idempotency, prompt regression without golden set, DNS TTL surprise. Ownership + fix + prevention (tests/CI).

## F4. How you learn a new stack quickly

**Shape:** Point to roadmap method - bridges, small artifacts, evals - not "I watched 40 hours of video."

## F5. Prioritization under ambiguity

**Shape:** MVP slice with a metric; defer agent autonomy; instrument first. Product sense > buzzwords.

---

## 7-Day Spaced Drill Plan

| Day | Drill (speak aloud, timed) |
| --- | --- |
| 1 | A1–A9 or W1–W4 + one coding pattern |
| 2 | B2–B7 live SQL + W10 data/API follow-ups |
| 3 | C3–C14 + E1/W1 URL tour (5 & 12 min) |
| 4 | D1–D12 ML, W5–W8 frontend, or G1–G5 cloud foundations |
| 5 | D14–D18 AI, W9–W14 backend, or H1–H8 delivery/runtime loop |
| 6 | E4–E6 + W15–W16, G6–G10, or H9–H12 system design/debug prompts |
| 7 | Full mock: coding + role track + URL/design + behavioral |

---

## Appendix - External Guides (Composio-curated)

### CS / DSA / System Design

- [Top 50 DSA Interview Q&A (2026)](https://perfectnotes.org/interview-questions/dsa/top-50-dsa-interview-questions)
- [Data Structures Interview Questions](https://hyring.com/jobseeker-toolkit/interview-questions/technical/data-structures)
- [System Design Preparation Master Sheet](https://theskilledcoder.com/posts/interview-prep/system-design-preparation-master-sheet)
- [Software Engineer Interview Guide (MockIF)](https://mockif.com/industries/software-engineering)

### Data / SQL / DE

- [927 SQL Interview Questions (DataDriven)](https://datadriven.io/sql-interview-questions)
- [Top 50 SQL Interview Questions 2026](https://prachub.com/resources/top-50-sql-interview-questions-with-answers-2026)
- [SQL Round for DE Interviews](https://datadriven.io/data-engineer-interview-prep/sql-round)
- [Udacity DE Interview Tips](https://www.udacity.com/blog/top-data-engineer-interview-questions-tips-to-ace-your-next-interview/)

### Networks

- [Networking Interview Questions: HTTP, TCP, DNS, TLS](https://www.techinterview.org/post/3233460383/networking-interview-questions/)
- [What Happens When You Type a URL](https://readthemanual.co.uk/what-happens-when-you-type-a-url/)
- [DNS/TCP/TLS/HTTP for System Design (StackScholar)](https://stackscholar.com/system-design-interview/questions/how-the-internet-works-dns-tcp-tls-http)
- [Networking Essentials (System Design School)](https://systemdesignschool.io/technologies/networking-essentials)

### AI / ML / LLM

- [Applied AI Engineer Interviews 2026 (RAG/Agents/Evals)](https://www.techinterview.org/post/3233476824/ai-engineer-interview-rag-agents-evals/)
- [45+ AI Engineer Interview Questions (Exponent)](https://www.tryexponent.com/blog/ai-engineer-interview-questions)
- [AI Interview Questions 2026 (KodeKloud)](https://kodekloud.com/blog/ai-interview-questions/)
- [RAG & Agent System Design Questions (Towards AI)](https://towardsai.com/p/machine-learning/7-rag-agent-system-design-questions-you-will-face-in-every-ai-engineer-interview-with-answers)
- DeepWiki on [mlabonne/llm-course](https://github.com/mlabonne/llm-course) - fundamentals, RAG, fine-tuning, agents, evaluation tracks

### Web Development

- [MDN Web Platform](https://developer.mozilla.org/en-US/docs/Web) and [Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [React Learn](https://react.dev/learn) and [Next.js Docs](https://nextjs.org/docs)
- [OpenAPI Specification](https://spec.openapis.org/oas/latest)
- [OAuth 2.0 Security Best Current Practice](https://www.rfc-editor.org/rfc/rfc9700.html)
- [OWASP REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)

### Cloud Engineering

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [Microsoft Azure Well-Architected Framework](https://learn.microsoft.com/azure/well-architected/)
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework)
- [Cloud Native Computing Foundation](https://www.cncf.io/)

### DevOps Engineering

- [DORA research and metrics](https://dora.dev/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Google SRE Books](https://sre.google/books/)

### Your roadmaps (primary depth)

- [CS.md](CS.md) · [Data.md](Data.md) · [Networks.md](Networks.md) · [AI.md](AI.md) · [Web.md](Web.md) · [cloud.md](cloud.md) · [devops.md](devops.md)

---

*End of playbook. Cover the answer. Speak. Check follow-ups. If the "why" is fuzzy, return to the roadmap bridges - do not memorize harder.*
