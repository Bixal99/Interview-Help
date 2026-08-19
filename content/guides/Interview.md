# The Combined Interview Playbook

*Mohammad Bilal's interview Q&A companion to the roadmaps - [CS.md](../roadmaps/CS.md), [Git.md](../roadmaps/Git.md), [Data.md](../roadmaps/Data.md), [Networks.md](../roadmaps/Networks.md), [IT_Administration.md](../roadmaps/IT_Administration.md), [AI.md](../roadmaps/AI.md), [Web.md](../roadmaps/Web.md), [cloud.md](../roadmaps/Cloud.md), and [devops.md](../roadmaps/DevOps.md). High-frequency questions with strong answers, follow-ups, and traps - not a list of facts to memorize.*

*Curated with Composio (web search + DeepWiki on `mlabonne/llm-course`) against 2026 interview guides for DSA, SQL/DE, networking, and AI engineering, plus official web-platform, OpenAPI, OAuth, and OWASP documentation.*

**Scope:** Computer Science × Git × Data × Networks × IT Administration × AI × Web × Cloud × DevOps · speak trade-offs out loud.

Question → Strong answer → Follow-ups → Traps

---

**How challenging the project is**

| Tag | Meaning |
| --- | --- |
| Screen | New-grad / phone screen |
| Core | Expected mid-level confident working knowledge |
| Senior | Judgment, systems, failure modes |

---

## How to Use This Document

### Start here if technical interviews are new to you

An interviewer is usually checking how you think, not whether you can repeat a perfect paragraph. A strong answer defines the idea in everyday language, walks through a small example, and then explains one choice and one possible failure.

Practice aloud. It will feel slower and less polished than reading silently, and that is normal. Give yourself permission to pause, ask a clarifying question, and correct yourself. The aim is a clear conversation that another person can follow.

**Everyday words**

| Word | Meaning |
| --- | --- |
| **Constraint** | A **limit or requirement** in the question |
| **Trade-off** | A choice where gaining one benefit **costs something else** |
| **Failure mode** | A specific way the idea can **stop working** |

**Words you will meet often**

| Word | Meaning |
| --- | --- |
| **Big O** | How **time** or **memory** needs grow as the input grows |
| **Edge case** | An unusual but valid input near a **boundary** |
| **Invariant** | A condition that must remain **true** while an algorithm runs |
| **Follow-up** | The **next question** prompted by your answer |
| **System design** | Explaining how **multiple parts** would work together |
| **Behavioral question** | Asks for **evidence** from something you did |
| **STAR** | **Situation**, **Task**, **Action**, **Result**: a simple order for telling that story clearly |

This is not a list of sentences to memorize. It is a **spoken-answer gym** built from the same chain-of-discovery logic as the connected roadmaps. Every strong answer names: (1) the problem the idea solves, (2) the internal steps, (3) a trade-off, (4) a failure mode.

**How to practice**

1. Cover the answer. Speak for 60–120 seconds.
2. Check against structure.
3. Answer one follow-up cold.
4. If you cannot explain *why it exists*, go back to the roadmap phase - do not patch with more memorization.

**Universal answer skeleton (use every time)**

1. Clarify the question / constraints (10s)
2. Define the concept in one sentence
3. Why it exists (the wall before it)
4. How it works (2-5 steps or a tiny example)
5. Trade-off + when you would NOT use it
6. Optional: tie to a project you shipped

**Role routing**

| If interviewing for... | Prioritize sections |
| --- | --- |
| Software Engineer | A (CS), C (Networks essentials), F (URL/system) |
| Git / SCM-heavy role | V full + A16 + H3/H7/H12 |
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
| [V. Git and Version Control](#track-v---git-and-version-control) | State, internals, collaboration, recovery, workflows, trust | 18 |
| [E. Cross-Cutting Classics](#track-e---cross-cutting-classics) | URL bar, debug ladders, design prompts | 6 |
| [F. Behavioral / STAR](#track-f---behavioral-star-anchored-to-your-roadmaps) | Stories that prove judgment | 5 |

---

<a id="track-a"></a>

# Track A - Computer Science & Software Engineering

**Source roadmap:** CS.md

## A1. What is Big O, and how do you use it in an interview?

**Level:** Screen · **Source:** CS.md Phase 2

**THE INTERVIEWER'S QUESTION:** Explain Big O. What is the complexity of your solution?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Big O describes how runtime or memory grows as input size $n$ grows - worst-case asymptotic upper bound, ignoring constants. In interviews I state time and space after coding, name the dominant loop/recursion, and say whether I can improve it (e.g., hash map $O(n)$ vs nested loops $O(n^2)$).

**A SIMPLE ANSWER STRUCTURE:** Define → apply to *this* code → compare alternative → space too.

**QUESTIONS THEY MAY ASK NEXT:** Average vs worst case? Why ignore constants? $O(n\log n)$ sorts?

**COMMON MISTAKE:** Reciting the definition without analyzing your own code. Saying "hashmap is always $O(1)$" without average-case caveat / collisions.

---

## A2. Array / string patterns - two pointers & sliding window

**Level:** Screen · **Source:** CS.md Phase 26

**THE INTERVIEWER'S QUESTION:** When do you use two pointers or a sliding window?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Two pointers when the array is sorted or you grow/shrink from ends (pair sum, palindrome). Sliding window when you need the best contiguous subarray/substring under a constraint (longest substring without repeat). Both aim for one pass $O(n)$ instead of $O(n^2)$.

**A SIMPLE ANSWER STRUCTURE:** Name pattern → invariant → complexity → edge cases (empty, all unique).

**QUESTIONS THEY MAY ASK NEXT:** Fixed vs variable window? Need a hash map of counts?

**COMMON MISTAKE:** Jumping to brute force nested loops without naming the pattern.

---

## A3. Linked lists - reverse, cycle, careful pointers

**Level:** Core · **Source:** CS.md Phase 26

**THE INTERVIEWER'S QUESTION:** Reverse a linked list. Detect a cycle.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Reverse iteratively: save `next`, point `curr.next` to `prev`, advance. Cycle: Floyd tortoise/hare - if pointers meet, cycle exists; optional math to find entrance. Interviewers watch that I never lose the head or overwrite `next` before saving it.

**A SIMPLE ANSWER STRUCTURE:** Draw 3 nodes → code → null/single-node cases → complexity $O(n)/O(1)$.

**QUESTIONS THEY MAY ASK NEXT:** Recursive reverse? Find middle? Merge two sorted lists?

**COMMON MISTAKE:** Infinite loops from lost pointers; mutating without diagrams.

---

## A4. Stacks and queues - when each is the right tool

**Level:** Screen · **Source:** CS.md Phase 26

**THE INTERVIEWER'S QUESTION:** Stack vs queue - give use cases.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Stack = LIFO for nesting / most-recent: parentheses, undo, DFS recursion simulation. Queue = FIFO for order/time: BFS level order, task scheduling, rate limiting buffers. Cue phrases: "nested" → stack; "level by level / arrival order" → queue.

**QUESTIONS THEY MAY ASK NEXT:** Monotonic stack? Deque for sliding window max?

**COMMON MISTAKE:** Only defining LIFO/FIFO with no problem mapping.

---

## A5. Recursion and the call stack

**Level:** Core · **Source:** CS.md Phase 27

**THE INTERVIEWER'S QUESTION:** How do you think about recursion? When is it dangerous?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Every recursive call needs a correct base case and a smaller subproblem. The call stack holds deferred work - deep recursion can overflow. I can always rewrite with an explicit stack. Tree problems are usually clean recursion; I trace one example aloud.

**QUESTIONS THEY MAY ASK NEXT:** Tail recursion? Convert recursion to iteration.

**COMMON MISTAKE:** Missing base case; cannot dry-run the stack.

---

## A6. Trees / BST validation

**Level:** Core · **Source:** CS.md Phase 28

**THE INTERVIEWER'S QUESTION:** Validate a Binary Search Tree.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Checking only that an immediate left child is smaller and an immediate right child is larger is not enough. Pass a valid `(minimum, maximum)` range down each recursive call, or perform an in-order walk and check that every value increases. This checks the order of the whole binary search tree, not only nearby nodes.

**QUESTIONS THEY MAY ASK NEXT:** Lowest common ancestor? Balanced check? Serialize tree?

**COMMON MISTAKE:** Only checking immediate children.

---

## A7. Hash tables - why and when they fail

**Level:** Screen · **Source:** CS.md Phase 29

**THE INTERVIEWER'S QUESTION:** Why use a hash map? Collision handling?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Average $O(1)$ insert/lookup/delete for counting, indexing, caching, two-sum patterns. Collisions via chaining or open addressing; worst case degrades toward $O(n)$ if pathological. I mention load factor and that keys must be hashable.

**QUESTIONS THEY MAY ASK NEXT:** Hash set vs map? When sorted map/TreeMap instead?

**COMMON MISTAKE:** Claiming $O(1)$ worst-case always.

---

## A8. Sorting and binary search

**Level:** Core · **Source:** CS.md Phase 30

**THE INTERVIEWER'S QUESTION:** When binary search? Compare common sorts.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Binary search needs sorted order (or monotonic predicate) for $O(\log n)$. Mergesort stable $O(n\log n)$ guaranteed; quicksort fast average, worse $O(n^2)$ without care; heapsort in-place $O(n\log n)$. In interviews I often sort then two-pointer, or binary search on answer space.

**QUESTIONS THEY MAY ASK NEXT:** Search on rotated array? Lower bound vs exact match?

**COMMON MISTAKE:** Binary search off-by-one without stating invariant.

---

## A9. BFS vs DFS

**Level:** Core · **Source:** CS.md Phase 31

**THE INTERVIEWER'S QUESTION:** BFS vs DFS - when each?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** BFS (queue) for shortest path in unweighted graphs and level-order. DFS (stack/recursion) for path existence, topological sort, cycle detection, connected components, exhaustive search. I state visited-set discipline to avoid infinite loops.

**QUESTIONS THEY MAY ASK NEXT:** Weighted shortest path → Dijkstra. Grid BFS tricks.

**COMMON MISTAKE:** Using DFS for unweighted shortest path.

---

## A10. Dynamic programming intuition

**Level:** Senior-ish · **Source:** CS.md Phase 32

**THE INTERVIEWER'S QUESTION:** How do you recognize a DP problem?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Optimal substructure + overlapping subproblems. I define state, transition, base cases, then bottom-up or memoized recursion. Start with brute force recursive formulation, then cache. Classic: knapsack, LIS, edit distance, unique paths.

**QUESTIONS THEY MAY ASK NEXT:** Time/space optimize rolling arrays? Greedy vs DP?

**COMMON MISTAKE:** Jumping to DP table without stating state meaning.

---

## A11. OOP pillars and SOLID (short)

**Level:** Core · **Source:** CS.md Phases 9-12, 17, 33

**THE INTERVIEWER'S QUESTION:** Explain encapsulation / polymorphism. One SOLID principle with example.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Encapsulation hides invariants behind methods. Polymorphism lets callers depend on interfaces, swap implementations. Example SOLID: Dependency Inversion - high-level policy depends on abstractions (interface), not concrete DB class - enables testing with fakes.

**QUESTIONS THEY MAY ASK NEXT:** Composition vs inheritance? Design a parking lot / LRU.

**COMMON MISTAKE:** Buzzword salad without a concrete design choice.

---

## A12. Processes vs threads; concurrency basics

**Level:** Core · **Source:** CS.md Phase 34

**THE INTERVIEWER'S QUESTION:** Process vs thread? Race condition? Mutex?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Process = isolated address space; thread = shared memory inside a process, cheaper context. Race: concurrent access to shared state without synchronization. Mutex/lock serializes critical sections; deadlocks need circular wait - prevent with lock ordering / timeouts. For interviews I also mention why GIL matters in CPython (if asked Python concurrency).

**QUESTIONS THEY MAY ASK NEXT:** Async vs threads? When message passing beats shared memory?

**COMMON MISTAKE:** "Threads are always faster."

---

## A13. Virtual memory / page fault (high level)

**Level:** Core · **Source:** CS.md Phase 34

**THE INTERVIEWER'S QUESTION:** What is virtual memory?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Each process sees a virtual address space mapped to physical frames via page tables. Enables isolation and overcommit via disk (swap). A page fault loads missing pages; thrashing happens when working set exceeds RAM.

**QUESTIONS THEY MAY ASK NEXT:** TLB? mmap?

**COMMON MISTAKE:** Equating virtual memory only with "disk overflow."

---

## A14. Indexes and EXPLAIN (DB)

**Level:** Core · **Source:** CS.md Phase 37 / Data.md Phase 11

**THE INTERVIEWER'S QUESTION:** How do you speed up a slow query?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Measure with `EXPLAIN/ANALYZE`. Check selectivity of `WHERE`/`JOIN` keys. Add an index matching filter/join/order columns; consider covering indexes. Mention write amplification and that indexes are not free. Fixing queries (avoid `SELECT *`, sargable predicates) often beats blind indexing.

**QUESTIONS THEY MAY ASK NEXT:** Why index might not be used? Composite index column order?

**COMMON MISTAKE:** "Just add indexes" with no plan reading.

---

## A15. Transactions ACID + isolation

**Level:** Core · **Source:** CS.md Phase 37

**THE INTERVIEWER'S QUESTION:** What is ACID? Dirty read?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Atomicity, Consistency, Isolation, Durability. Isolation levels trade anomalies vs throughput: dirty read = seeing uncommitted data; prevented by Read Committed+. I mention when I'd accept weaker isolation for performance with application-level care.

**QUESTIONS THEY MAY ASK NEXT:** Phantom reads? Idempotent writes?

**COMMON MISTAKE:** Listing ACID letters with no anomaly example.

---

## A16. CAP / consistency vs availability (short)

**Level:** Senior · **Source:** CS.md Phase 41

**THE INTERVIEWER'S QUESTION:** Explain CAP in practical terms.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Under network partition, a distributed system must choose between linearizability-style consistency and full availability. Real systems pick per-decision: caches may be AP-ish; bank ledgers prefer C. I avoid treating CAP as a product sticker and instead discuss timeouts, retries, and conflict resolution.

**QUESTIONS THEY MAY ASK NEXT:** PACELC? Exactly-once myths?

**COMMON MISTAKE:** "Mongo is AP, Postgres is CA" slogans without nuance.

---

## A17. Caching strategies

**Level:** Core · **Source:** CS.md Phase 40

**THE INTERVIEWER'S QUESTION:** Cache-aside vs write-through? Invalidation?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Cache-aside: app reads cache, on miss loads DB then fills cache. Write-through updates cache+DB together (simpler coherence, more write latency). Invalidation is the hard part - TTL, explicit delete on write, version keys. Mention stampede and jittered TTLs.

**QUESTIONS THEY MAY ASK NEXT:** Redis eviction? Hot key?

**COMMON MISTAKE:** Caching without naming invalidation.

---

## A18. Design an LRU cache

**Level:** Core · **Source:** CS.md Phases 20, 29, 33

**THE INTERVIEWER'S QUESTION:** Implement LRU.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Hash map for $O(1)$ key→node plus doubly linked list for recency order. Get/put move node to head; evict tail when over capacity. Complexity $O(1)$ per op. This is the classic "combine two structures" interview.

**QUESTIONS THEY MAY ASK NEXT:** LFU? Thread-safety?

**COMMON MISTAKE:** Only a list ($O(n)$ find) or only a map (no order).

---

<a id="track-b"></a>

# Track B - Data Analyst & Data Engineer

**Source roadmap:** Data.md

## B1. Analyst vs engineer - lifecycle answer

**Level:** Screen · **Source:** Data.md Phase 1

**THE INTERVIEWER'S QUESTION:** Difference between data analyst and data engineer?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Same lifecycle (event → capture → move → model → decide), different failure ownership. Engineers own late/missing/duplicated pipelines, schemas, SLAs. Analysts own metric definitions, segments, honest charts, and decision memos. We collaborate on the metric contract. I do not answer with tool lists alone.

**QUESTIONS THEY MAY ASK NEXT:** Where does analytics engineer sit?

**COMMON MISTAKE:** "Engineers use Spark, analysts use Tableau."

---

## B2. INNER vs LEFT JOIN + fan-out

**Level:** Screen · **Source:** Data.md Phase 5

**THE INTERVIEWER'S QUESTION:** INNER vs LEFT JOIN? How do joins break sums?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** INNER keeps matches only; LEFT keeps all left rows, null-pads non-matches - used to find missing (`WHERE right.key IS NULL`). Fan-out: one-to-many join duplicates left rows so `SUM(left.amount)` inflates. I state grain first, pre-aggregate the many-side, or use carefully chosen counts (`COUNT(DISTINCT ...)` when appropriate).

**A SIMPLE ANSWER STRUCTURE:** Draw 2 tiny tables → join result → show duplicated sum → fix.

**QUESTIONS THEY MAY ASK NEXT:** FULL OUTER? Anti-join patterns?

**COMMON MISTAKE:** Definitions without fan-out warning.

---

## B3. GROUP BY vs window functions

**Level:** Core · **Source:** Data.md Phase 6

**THE INTERVIEWER'S QUESTION:** When window functions instead of GROUP BY?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** `GROUP BY` collapses rows. Windows (`SUM() OVER (PARTITION BY ...)`) keep row-level detail while adding rankings, running totals, LAG/LEAD. Dedup: `ROW_NUMBER() OVER (PARTITION BY key ORDER BY updated_at DESC) = 1`. I name CTEs for readability.

**QUESTIONS THEY MAY ASK NEXT:** RANK vs DENSE_RANK vs ROW_NUMBER?

**COMMON MISTAKE:** Using `GROUP BY` when you still need every row.

---

## B4. Written vs logical SQL order

**Level:** Screen · **Source:** Data.md Phase 4

**THE INTERVIEWER'S QUESTION:** Why can't you use a SELECT alias in WHERE?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Logical order is approximately `FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT`. Aliases in `SELECT` do not exist yet at `WHERE` time. I narrate grain, filters, and NULL behavior while writing live SQL.

**QUESTIONS THEY MAY ASK NEXT:** HAVING vs WHERE?

**COMMON MISTAKE:** Guessing dialect quirks without the logical-order model.

---

## B5. NULL behavior

**Level:** Core · **Source:** Data.md Phase 4

**THE INTERVIEWER'S QUESTION:** How do NULLs behave in SQL?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** `NULL` means unknown. `NULL = NULL` is unknown, not true - use `IS NULL`. Aggregates ignore NULLs (`SUM`/`AVG`), but `COUNT(*)` counts rows while `COUNT(col)` skips NULL cols. Join keys with NULLs never match. I use `COALESCE`/`NULLIF` deliberately.

**QUESTIONS THEY MAY ASK NEXT:** NULL in UNIQUE constraints? Three-valued logic in CHECK?

**COMMON MISTAKE:** Treating NULL like zero/empty string.

---

## B6. Metric design / funnel

**Level:** Core · **Source:** Data.md Phase 10

**THE INTERVIEWER'S QUESTION:** How would you define and diagnose a funnel metric drop?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Define exact numerator/denominator, time window, user grain, and safety checks and limits. Check instrumentation (event missing?), mix shifts, seasonality, and segments as exploratory - not instant causation. Write a short memo: observation → checks → hypotheses → recommended action → what to measure after.

**QUESTIONS THEY MAY ASK NEXT:** North star vs input metrics? Novelty effects in A/B?

**COMMON MISTAKE:** Storytelling from a single average with no denominator clarity.

---

## B7. Mean vs median; A/B literacy

**Level:** Core · **Source:** Data.md Phase 7

**THE INTERVIEWER'S QUESTION:** Mean or median? How evaluate a feature launch?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Skewed money/latency → median + percentiles; mean for additive totals. For launches: primary metric, safety checks and limits, randomization unit, practical significance, peeking/multiple-comparisons caution. I ask for distribution shape before inventing a narrative.

**QUESTIONS THEY MAY ASK NEXT:** What is a p-value not?

**COMMON MISTAKE:** Declaring winners from one peek at p<0.05.

---

## B8. Normalize to 3NF

**Level:** Core · **Source:** Data.md Phase 11

**THE INTERVIEWER'S QUESTION:** Normalize this order form to 3NF.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Identify entities (Customer, Order, OrderItem, Product), primary keys, foreign keys. Remove repeating groups, partial dependence, transitive dependence. Explain which anomaly each split fixes. Note when denormalization is OK on read-heavy paths - analytics uses star schemas instead.

**QUESTIONS THEY MAY ASK NEXT:** Surrogate vs natural keys?

**COMMON MISTAKE:** Endless BCNF purity with no workload talk.

---

## B9. Star schema + grain

**Level:** Core · **Source:** Data.md Phase 12

**THE INTERVIEWER'S QUESTION:** Design a star schema for e-commerce orders.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** State grain first (e.g., one row per order line per day). Fact: additive measures (quantity, revenue) + FK to dimensions (Date, Customer, Product, Store). Dimensions denormalized attributes. Snowflake only if hierarchy maintenance demands it. Separate OLTP from warehouse.

**QUESTIONS THEY MAY ASK NEXT:** SCD Type 1 vs 2 for customer address?

**COMMON MISTAKE:** Drawing boxes without declaring grain.

---

## B10. SCD Type 2

**Level:** Core · **Source:** Data.md Phase 12

**THE INTERVIEWER'S QUESTION:** How do you handle changing customer address historically?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** SCD2 keeps versions with `effective_from`/`effective_to` (or `is_current`). Facts point to the surrogate key valid at event time. Type 1 overwrites (no history). Join with half-open intervals carefully.

**QUESTIONS THEY MAY ASK NEXT:** Late arriving dimensions?

**COMMON MISTAKE:** Overwriting addresses then wondering why old orders "moved."

---

## B11. ETL vs ELT

**Level:** Core · **Source:** Data.md Phase 13

**THE INTERVIEWER'S QUESTION:** ETL vs ELT?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** ETL transforms before load (useful when warehouse compute is limited or secrets must be stripped early). ELT lands raw then transforms in warehouse SQL/dbt - better for reprocessing and ELT-centric stacks. I talk idempotency, schema contracts, and layering (raw → staging → marts), not only vendor logos.

**QUESTIONS THEY MAY ASK NEXT:** Idempotent incremental loads? Why Parquet?

**COMMON MISTAKE:** Tool religion without pattern.

---

## B12. Orchestration - Airflow mental model

**Level:** Core · **Source:** Data.md Phase 14

**THE INTERVIEWER'S QUESTION:** What is a DAG? How handle failures?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** A DAG is a directed acyclic graph of tasks with dependencies. Sensors wait for conditions; retries/backoff handle transient failure; alerting on SLA miss. Idempotent tasks so retries are safe. Docker freezes runtime so "works on my laptop" does not become prod drift.

**QUESTIONS THEY MAY ASK NEXT:** Backfills? Catchup?

**COMMON MISTAKE:** Cron soup with hidden dependencies.

---

## B13. dbt tests and layers

**Level:** Core · **Source:** Data.md Phase 15

**THE INTERVIEWER'S QUESTION:** How do you structure dbt projects?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Staging (1:1 clean), intermediate, marts. `ref()`/`source()` for lineage. Tests: unique/not_null/accepted_values/relationships. Docs + CI on PRs. Analytics code gets software habits.

**QUESTIONS THEY MAY ASK NEXT:** What belongs in dbt vs Airflow?

**COMMON MISTAKE:** Giant single SQL file with no tests.

---

## B14. Spark partitions & shuffle (DE)

**Level:** Senior · **Source:** Data.md Phase 17

**THE INTERVIEWER'S QUESTION:** Why is my Spark job slow?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Check partition count, data skew, and wide transformations that shuffle. Prefer narrow transforms; partition on join keys; broadcast small dimensions; avoid huge `collect()`. Explain stage boundaries simply.

**QUESTIONS THEY MAY ASK NEXT:** AQE? Predicate pushdown?

**COMMON MISTAKE:** "Add more executors" as first answer.

---

## B15. Kafka basics (DE)

**Level:** Core · **Source:** Data.md Phase 18

**THE INTERVIEWER'S QUESTION:** Topics, partitions, consumer groups? Delivery semantics?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Topic = category; partitions = parallelism/order within partition; consumer group = competing consumers for scale. At-least-once common; exactly-once needs idempotent producers/transactions and careful sinks. Offset commits define reprocessing behavior.

**QUESTIONS THEY MAY ASK NEXT:** Compaction? Lag monitoring?

**COMMON MISTAKE:** Treating Kafka as a DB.

---

## B16. Dashboard design prompt

**Level:** Core · **Source:** Data.md Phase 9–10

**THE INTERVIEWER'S QUESTION:** Design a dashboard for X.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Clarify users and decisions. Pick 3–5 metrics with definitions and freshness. Layout: overview KPIs → drilldown → diagnostics. Prevent metric sprawl; note caveats. Tools are secondary to definitions.

**QUESTIONS THEY MAY ASK NEXT:** How stop conflicting revenue numbers?

**COMMON MISTAKE:** Tool fanboying / 20 charts.

---

<a id="track-c"></a>

# Track C - Computer Networks

**Source roadmap:** Networks.md (+ CS.md Phase 35)

## C1. What is a computer network?

**Level:** Screen · **Source:** Networks.md Phase 1

**THE INTERVIEWER'S QUESTION:** What is a computer network?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Hosts exchanging messages over shared links under loss/delay/reordering constraints. Protocols add addressing, multiplexing, and reliability *as needed*. Packet switching shares capacity for bursty traffic better than reserved circuits - at the cost of congestion and variable latency.

**QUESTIONS THEY MAY ASK NEXT:** Bandwidth vs latency vs throughput?

**COMMON MISTAKE:** "Devices connected together."

---

## C2. Bandwidth vs latency (and BDP)

**Level:** Core · **Source:** Networks.md Phase 1–2

**THE INTERVIEWER'S QUESTION:** Bandwidth vs latency? What is bandwidth-delay product?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** $\text{bandwidth}=\text{capacity}\;(\mathrm{bit/s})$. $\text{latency/RTT}=\text{signal or request delay}$. $\text{throughput}=\text{achieved rate after loss and overhead}$. $\mathrm{BDP}=\text{bandwidth}\times\mathrm{RTT}\approx\text{bytes in flight needed to fill the pipe}$ - why TCP windows must be large on long fat networks. Bufferbloat: oversized buffers inflate latency under load.

**QUESTIONS THEY MAY ASK NEXT:** Which matters for 1KB RPC vs 1GB download?

**COMMON MISTAKE:** Using "speed" for both ideas interchangeably.

---

## C3. OSI / TCP-IP layering & encapsulation

**Level:** Screen · **Source:** Networks.md Phase 8

**THE INTERVIEWER'S QUESTION:** Explain the layered model. What is encapsulation?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Each layer solves one job and wraps the payload from above with its header. Practical stack: App (HTTP) → Transport (TCP/UDP) → Network (IP) → Link (Ethernet/Wi-Fi). PDU names: message/segment/packet/frame. Debugging = name which layer failed. Memorizing seven OSI names without mapping failures is weak.

**QUESTIONS THEY MAY ASK NEXT:** Hop-by-hop MAC rewrite vs end-to-end IP?

**COMMON MISTAKE:** Layer trivia with no encapsulation story.

---

## C4. MAC vs IP vs Port

**Level:** Screen · **Source:** Networks.md Phase 3/5/8

**THE INTERVIEWER'S QUESTION:** MAC vs IP address? What is a port?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** MAC = link-local hardware-ish ID for one segment. IP = logical routable location. Port = which process/socket on that host. Connection 4-tuple `(srcIP, srcPort, dstIP, dstPort)` (+ protocol) demultiplexes flows so one server `:443` serves many clients.

**QUESTIONS THEY MAY ASK NEXT:** Why ARP? Why can't MAC route the Internet?

**COMMON MISTAKE:** Treating MAC as global identity forever (ignoring randomization / local scope).

---

## C5. Subnetting live drill

**Level:** Core · **Source:** Networks.md Phase 5

**THE INTERVIEWER'S QUESTION:** Given `10.0.5.37/24`, network, broadcast, usable hosts?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** `/24` → mask `255.255.255.0`. Network `10.0.5.0`, broadcast `10.0.5.255`, usable `.1–.254` (254 hosts). Know RFC1918 private ranges cold. `/30` often for point-to-point (2 usable).

**QUESTIONS THEY MAY ASK NEXT:** Split `/24` into two `/25`s. What is `169.254/16`?

**COMMON MISTAKE:** Off-by-one on usable counts; confusing `/24` with classful lore only.

---

## C6. Switch vs router; VLAN

**Level:** Core · **Source:** Networks.md Phase 4/6

**THE INTERVIEWER'S QUESTION:** Switch vs router? How do VLANs communicate?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Switch forwards frames by MAC learning; floods unknown unicasts; stays in a broadcast domain. Router forwards packets by IP longest-prefix match between networks. VLANs split broadcast domains; different VLANs need L3 routing (SVI/router-on-a-stick). Trunks carry tagged 802.1Q.

**QUESTIONS THEY MAY ASK NEXT:** Spanning tree why? Unknown unicast walk-through?

**COMMON MISTAKE:** "Switch is Layer 2, router Layer 3" with no mechanism.

---

## C7. ARP, DHCP, ICMP

**Level:** Core · **Source:** Networks.md Phase 7

**THE INTERVIEWER'S QUESTION:** What happens before first packet to a gateway? DHCP DORA? Ping?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Need next-hop MAC → ARP request/reply cached. DHCP: Discover/Offer/Request/Ack for address+mask+gateway+DNS. ICMP carries echo (ping) and errors (Dest Unreachable, Time Exceeded for traceroute). Filtering all ICMP breaks PMTUD and diagnosis.

**QUESTIONS THEY MAY ASK NEXT:** Gratuitous ARP? Why traceroute shows `* * *`?

**COMMON MISTAKE:** "Ping equals network health" completely.

---

## C8. NAT and why inbound is hard

**Level:** Core · **Source:** Networks.md Phase 7

**THE INTERVIEWER'S QUESTION:** What is NAT? Why can't two phones host servers easily?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** NAT/PAT multiplexes many private hosts onto scarce public IPv4 by rewriting ports and keeping a mapping table. Unsolicited inbound packets have no mapping - dropped unless port-forwarded. CGNAT makes it worse. Video calls use STUN/TURN/relays. $\mathrm{NAT}\neq\text{firewall}$, but behaves like a default inbound filter.

**QUESTIONS THEY MAY ASK NEXT:** Hairpin NAT? IPv6 relation?

**COMMON MISTAKE:** "NAT is security."

---

## C9. TCP vs UDP

**Level:** Screen · **Source:** Networks.md Phase 9–10

**THE INTERVIEWER'S QUESTION:** TCP vs UDP?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** TCP: connection, reliable ordered byte stream, flow+congestion control - web, APIs, file transfer. UDP: datagram, no built-in reliability - DNS queries, gaming, live media, and QUIC/HTTP3 base. In TCP, one `send` does not correspond to one `recv` (you need framing). Choose UDP when you want control/latency and will handle loss yourself.

**QUESTIONS THEY MAY ASK NEXT:** Why HTTP/3 over UDP? Hol blocking?

**COMMON MISTAKE:** "UDP is always faster" as a slogan.

---

## C10. TCP handshake, SEQ/ACK, TIME_WAIT

**Level:** Core · **Source:** Networks.md Phase 10

**THE INTERVIEWER'S QUESTION:** Draw the three-way handshake. What is TIME_WAIT?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** `SYN → SYN-ACK → ACK`, then data. Sequence numbers order bytes; ACKs confirm receipt; loss → retransmit. Teardown FINs each direction. TIME_WAIT holds the tuple so delayed duplicates do not corrupt a new connection - causes "address already in use" on restart without `SO_REUSEADDR` care.

**QUESTIONS THEY MAY ASK NEXT:** Flow vs congestion control? Slow start?

**COMMON MISTAKE:** Confusing flow control (receiver window) with congestion control (network).

---

## C11. DNS resolution path

**Level:** Core · **Source:** Networks.md Phase 12

**THE INTERVIEWER'S QUESTION:** How does DNS work?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Stub → recursive resolver → root → TLD → authoritative. Records: A/AAAA, CNAME, MX, NS, TXT. TTL controls cache lifetime - low TTL for agile failover, higher load. DNS usually UDP/53; TCP for large/zone. Outages feel like "Internet is down." DoH/DoT encrypt client-resolver path; DNSSEC authenticates data (different problems).

**QUESTIONS THEY MAY ASK NEXT:** Site moved IPs but users broken? Apex CNAME limits?

**COMMON MISTAKE:** "DNS just converts names" with no hierarchy/cache.

---

## C12. HTTP methods, status codes, idempotency

**Level:** Screen · **Source:** Networks.md Phase 13

**THE INTERVIEWER'S QUESTION:** HTTP status classes? Idempotent methods?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** 2xx success, 3xx redirect, 4xx client, 5xx server. GET/PUT/DELETE idempotent in design; POST not. Host header enables virtual hosting. Cookies add state on a stateless protocol. Keep-alive reuses TCP.

**QUESTIONS THEY MAY ASK NEXT:** 401 vs 403? PUT vs PATCH?

**COMMON MISTAKE:** Memorizing codes without retry implications.

---

## C13. HTTP/1.1 vs 2 vs 3

**Level:** Core · **Source:** Networks.md Phase 13

**THE INTERVIEWER'S QUESTION:** Differences between HTTP versions?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** H1: text, often many parallel TCP conns. H2: binary multiplexing on one TCP - still suffers TCP HOL blocking on loss. H3: HTTP over QUIC/UDP - better stream isolation and connection setup, UDP may be blocked in some networks. Do not claim H2 is always faster.

**QUESTIONS THEY MAY ASK NEXT:** HPACK? Server push rarity?

**COMMON MISTAKE:** Version numbers without transport story.

---

## C14. TLS / HTTPS

**Level:** Core · **Source:** Networks.md Phase 14

**THE INTERVIEWER'S QUESTION:** What does TLS provide? What does a certificate prove?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Confidentiality, integrity, and server authentication (usually). Handshake agrees keys; cert binds public key to name via CA chain in trust store. Asymmetric for auth/key agreement; symmetric for bulk. Warnings are often auth failures (name mismatch, expiry, untrusted CA), not "encryption off." Forward secrecy protects past sessions if long-term keys leak later.

**QUESTIONS THEY MAY ASK NEXT:** Why both crypto types? mTLS? SNI?

**COMMON MISTAKE:** "HTTPS means the site is safe/trustworthy content."

---

## C15. CDN, load balancer, reverse proxy

**Level:** Core · **Source:** Networks.md Phase 17

**THE INTERVIEWER'S QUESTION:** CDN vs load balancer vs reverse proxy?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Reverse proxy sits in front of origins (TLS terminate, route, cache). Load balancer distributes across healthy backends (L4 tuples vs L7 HTTP rules) with health checks. CDN caches at edge PoPs near users (DNS/anycast steering) to cut latency and origin load. Overlap exists; clarify the job.

**QUESTIONS THEY MAY ASK NEXT:** Sticky sessions trade-offs? Cache-Control strategy?

**COMMON MISTAKE:** Using the three terms interchangeably.

---

## C16. BGP in one minute

**Level:** Senior · **Source:** Networks.md Phase 18

**THE INTERVIEWER'S QUESTION:** What is BGP? OSPF vs BGP?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** OSPF (IGP) computes paths inside an AS from topology/cost. BGP (EGP) exchanges reachability between ASes with **policy** (local pref, AS path) more than pure shortest path. Peering vs transit are business relationships. Leaks/hijacks happen - filtering/RPKI help. CDN anycast rides on BGP announcements.

**QUESTIONS THEY MAY ASK NEXT:** Why longer AS path might still win?

**COMMON MISTAKE:** "BGP is OSPF for the world."

---

<a id="track-d"></a>

# Track D - AI / ML / LLM Engineering

**Source roadmap:** AI.md (+ DeepWiki mlabonne/llm-course)

## D1. What is machine learning?

**Level:** Screen · **Source:** AI.md Phase 1

**THE INTERVIEWER'S QUESTION:** What is ML? Supervised vs unsupervised vs RL?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Learning parameters of a model from data to generalize to unseen examples - not hard-coding every rule. Supervised: labeled $(x,y)$. Unsupervised: structure without labels. RL: learn from rewards via actions. Generative models learn a distribution over data (often next-token).

**QUESTIONS THEY MAY ASK NEXT:** When rules beat ML?

**COMMON MISTAKE:** Listing libraries as the definition.

---

## D2. Train/val/test and leakage

**Level:** Screen · **Source:** AI.md Phase 1/5

**THE INTERVIEWER'S QUESTION:** Why split data? Give a leakage example.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Train fits params; validation chooses hyperparameters; test estimates final generalization - touch rarely. Leakage: using future info or label-derived features (e.g., "days until churn" to predict churn), or scaling with full-data stats before splitting. Pipelines must fit preprocessors on train folds only. Time/group splits for those domains.

**QUESTIONS THEY MAY ASK NEXT:** Nested CV? Stratification?

**COMMON MISTAKE:** Reporting training accuracy as success.

---

## D3. Precision, recall, F1, imbalanced classes

**Level:** Core · **Source:** AI.md Phase 5 / Data metrics habits

**THE INTERVIEWER'S QUESTION:** Accuracy is $99\%$ - are we done? Precision vs recall?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Not if class imbalance exists - always-negative gets $99\%$. Precision: of predicted positives, how many true. Recall: of actual positives, how many caught. F1 balances; choose threshold from business costs. Prefer PR-AUC under heavy imbalance; ROC can look optimistic.

**QUESTIONS THEY MAY ASK NEXT:** Calibration? Cost matrix?

**COMMON MISTAKE:** Optimizing accuracy by default.

---

## D4. Bias-variance; overfit signs

**Level:** Core · **Source:** AI.md Phase 5/7

**THE INTERVIEWER'S QUESTION:** Overfitting vs underfitting? Fixes?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Overfit: low train error, high val error - memorize noise. Underfit: high error everywhere - too simple / under-trained. Fixes for overfit: more data, regularization, dropout, early stopping, simpler model, augmentation. Learning curves diagnose.

**QUESTIONS THEY MAY ASK NEXT:** Why data often beats clever regularizers?

**COMMON MISTAKE:** Only saying "add dropout" without diagnosis.

---

## D5. Gradient descent & learning rate

**Level:** Screen · **Source:** AI.md Phase 2/8

**THE INTERVIEWER'S QUESTION:** Explain gradient descent. What does learning rate do?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Loss is a function of parameters; gradient points to steepest increase - we step opposite: $\theta \leftarrow \theta-\eta \nabla L$. Too high $\eta$: diverge. Too low: crawl. SGD uses minibatches (noisy cheap gradients). Adam adapts per-parameter steps - strong default, not magic. Schedules/warmup common when the amount of work grows.

**QUESTIONS THEY MAY ASK NEXT:** Local minima worry in deep nets? Momentum?

**COMMON MISTAKE:** Equations without the "downhill walk" intuition - or intuition with no update rule.

---

## D6. Linear vs logistic regression

**Level:** Core · **Source:** AI.md Phase 4

**THE INTERVIEWER'S QUESTION:** Why not MSE for classification? What do logistic coefficients mean?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Classification needs probabilities and log-loss/cross-entropy; MSE + linear outputs are poorly calibrated for labels. Logistic: linear log-odds through sigmoid. Coefficients: effect on log-odds per feature (scaled features!). Decision boundary still linear - XOR needs nonlinear models.

**QUESTIONS THEY MAY ASK NEXT:** Regularization L1/L2? Multicollinearity?

**COMMON MISTAKE:** Thresholding linear regression and calling it classification done.

---

## D7. Bagging vs boosting; RF vs GBDT

**Level:** Core · **Source:** AI.md Phase 6

**THE INTERVIEWER'S QUESTION:** Random forest vs gradient boosting?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Bagging (RF): average many deep trees on bootstrap samples → reduces variance; great baseline. Boosting: add trees sequentially to fix residuals with small learning rate → often best classic tabular performance, more tuning sensitive. Neural nets often lose to GBDT on medium tabular data.

**QUESTIONS THEY MAY ASK NEXT:** Feature importance pitfalls? Early stopping?

**COMMON MISTAKE:** "Boosting always better."

---

## D8. Why activations? Why ReLU?

**Level:** Screen · **Source:** AI.md Phase 7

**THE INTERVIEWER'S QUESTION:** Why activation functions? Softmax?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Stacked linear layers collapse to one linear map - activations create nonlinearity. ReLU is simple/fast and helped deep nets vs saturating sigmoids in hidden layers. Softmax turns logits into a probability distribution for multiclass.

**QUESTIONS THEY MAY ASK NEXT:** Dead ReLUs? Layer norm role later?

**COMMON MISTAKE:** "Activation makes it fire like a brain" without math role.

---

## D9. Backprop in plain language

**Level:** Core · **Source:** AI.md Phase 8

**THE INTERVIEWER'S QUESTION:** What is backpropagation?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Efficiently compute gradients of a scalar loss w.r.t. all parameters using the chain rule on a computational graph - cost comparable to one forward pass. Autograd records ops in forward, reverses in backward. Vanishing gradients with saturated sigmoids historically blocked depth; init/activations/residuals help.

**QUESTIONS THEY MAY ASK NEXT:** What does `loss.backward()` do in PyTorch? Why `zero_grad`?

**COMMON MISTAKE:** "AI learns by magic adjusting weights" with no chain-rule story.

---

## D10. CNN inductive bias; transfer learning

**Level:** Core · **Source:** AI.md Phase 10

**THE INTERVIEWER'S QUESTION:** Why CNNs for images? When transfer learning fails?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Local connectivity + weight sharing match spatial locality/translation structure - fewer params than dense flatten. Hierarchies: edges → parts → objects. Transfer learning reuses pretrained features; freeze backbone then fine-tune. Fails under extreme domain shift / tiny unrelated data - still often a strong start. Augmentations regularize.

**QUESTIONS THEY MAY ASK NEXT:** What is a channel? Equivariance intuition?

**COMMON MISTAKE:** Training huge nets from scratch on 500 images as default plan.

---

## D11. Embeddings & cosine similarity

**Level:** Core · **Source:** AI.md Phase 12

**THE INTERVIEWER'S QUESTION:** Why embeddings? Cosine vs Euclidean?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** One-hots make $\text{cat}\perp\text{dog}$. Embeddings place tokens in $\mathbb{R}^d$ so geometry reflects meaning (distributional hypothesis). Cosine focuses on direction (common after normalization); Euclidean cares about magnitude too. Static embeddings fail on polysemy - contextual models fix that. Power search/RAG.

**QUESTIONS THEY MAY ASK NEXT:** Chunk size effects? ANN indexes?

**COMMON MISTAKE:** "Vectors store meaning" with no training objective / similarity story.

---

## D12. Self-attention Q/K/V

**Level:** Core · **Source:** AI.md Phase 13

**THE INTERVIEWER'S QUESTION:** Explain self-attention. Why scale by $\sqrt{d_k}$?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Each token builds Query, Key, Value projections. Weights are $\mathrm{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)$, then mix Values. Every token can directly attend to every other (in window) - parallelizable vs RNNs. Scale keeps dot products from exploding softmax into tiny gradients. Multi-head = multiple subspaces. Positional encodings add order. Cost is $O(T^2)$.

**QUESTIONS THEY MAY ASK NEXT:** Causal mask? BERT vs GPT?

**COMMON MISTAKE:** Memorizing "attention is all you need" without the QKV steps.

---

## D13. Tokens, context, sampling

**Level:** Screen · **Source:** AI.md Phase 14

**THE INTERVIEWER'S QUESTION:** What is a token? Temperature?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Models read/write subword tokens (BPE etc.), not words. Context window is finite working memory - truncate silently if ignored. $\text{cost}\approx\text{input tokens}+\text{output tokens}$. Temperature/top-p control randomness; $\text{temperature}=0\approx\text{greedy decoding}$ (still not perfectly deterministic everywhere). Manage budgets deliberately.

**QUESTIONS THEY MAY ASK NEXT:** Why count tokens for billing?

**COMMON MISTAKE:** Pasting huge docs then blaming the model for "forgetting."

---

## D14. Prompting & hallucination control

**Level:** Core · **Source:** AI.md Phase 14

**THE INTERVIEWER'S QUESTION:** How reduce hallucinations? What is prompt injection?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Treat prompts as contracts: context, role, instructions, constraints, examples; demand grounded answers ("I don't know" if missing); validate schemas. Ground with RAG. Injection: untrusted text tries to override instructions - sanitize tool outputs, separate trusted system prompts, allowlist tools. Eval suites catch regressions.

**QUESTIONS THEY MAY ASK NEXT:** Few-shot vs fine-tune vs RAG decision?

**COMMON MISTAKE:** Magical prompt folklore without validation.

---

## D15. RAG system design

**Level:** Senior · **Source:** AI.md Phase 15

**THE INTERVIEWER'S QUESTION:** Design a RAG system. Failure modes?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Ingest → chunk → embed → index. Query → retrieve top-k → (rerank) → generate with citations. Evaluate retrieval recall@k separately from answer faithfulness. Hybrid BM25+vector for IDs/codes. Failures: bad chunking, wrong k, diluted context, citation hallucination, stale indexes. Version chunker+index+prompt+model together.

**QUESTIONS THEY MAY ASK NEXT:** When is agentic RAG worth latency?

**COMMON MISTAKE:** Only drawing "LLM + vector DB" with no eval.

---

## D16. RAG vs fine-tuning vs LoRA

**Level:** Core · **Source:** AI.md Phase 16

**THE INTERVIEWER'S QUESTION:** When RAG vs fine-tune? What is LoRA/QLoRA?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** RAG for dynamic/proprietary knowledge and citations. Fine-tune for stable style, format, tool schemas, domain dialect. LoRA trains small low-rank adapters instead of all weights; QLoRA quantizes base for consumer GPUs. Data quality >> quantity. Do not fine-tune weekly facts that belong in retrieval.

**QUESTIONS THEY MAY ASK NEXT:** Catastrophic forgetting? Preference tuning (DPO/RLHF) purpose?

**COMMON MISTAKE:** Fine-tuning to "add the PDF."

---

## D17. Agents / ReAct / safety

**Level:** Senior · **Source:** AI.md Phase 17

**THE INTERVIEWER'S QUESTION:** What is an AI agent? How keep it safe?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** A loop where the model chooses tools, deterministic code executes them, observations return - until final answer or limits. ReAct interleaves reason/act/observe. Safety: allowlists, sandboxes, authz, max steps/time/budget, human approval for irreversible actions, traces. Separate orchestrator control flow from free-form text. Injection via tool outputs is real.

**QUESTIONS THEY MAY ASK NEXT:** When should you not use an agent?

**COMMON MISTAKE:** Fully autonomous agents with no caps as the architecture.

---

## D18. Eval, observability, cost for LLM apps

**Level:** Senior · **Source:** AI.md Phase 18

**THE INTERVIEWER'S QUESTION:** How do you evaluate and operate an LLM feature?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Offline golden sets + property checks; retrieval metrics + answer metrics; careful LLM-as-judge; human sample reviews. Online: latency, cost/tokens, thumbs, error rate. Trace prompt version, model id, retrieved chunk IDs. Safety checks and limits on I/O; rate limits; caching; fallbacks; canary then rollback. Treat prompts/indexes as code in CI.

**QUESTIONS THEY MAY ASK NEXT:** OWASP LLM risks you care about?

**COMMON MISTAKE:** "We'll watch it in prod" with no golden set.

---

<a id="track-w"></a>

# Track W - Web Development

**Source roadmap:** Web.md (+ CS/Networks/Data foundations)

## W1. Trace a page from URL to interactive pixels

**Level:** Core · **Source:** Web.md Phases 1, 5, 12

**THE INTERVIEWER'S QUESTION:** What happens from entering a URL until the page is interactive?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Parse URL; resolve DNS; establish TCP/QUIC and TLS; send HTTP request; receive headers/body; parse HTML to DOM and CSS to CSSOM; build render tree, layout, paint, and composite; discover/fetch subresources; run JavaScript tasks and hydrate/attach behavior if needed. Name caches and failure points at each boundary. “Interactive” is user-facing: required JS has executed and the main thread can respond, not merely `load` fired.

**QUESTIONS THEY MAY ASK NEXT:** Where can head-of-line blocking occur? What changes with SSR or HTTP/3?

**COMMON MISTAKE:** Saying “DNS then server returns HTML” and skipping rendering, TLS, assets, or main-thread work.

---

## W2. Semantic HTML and accessibility first response

**Level:** Screen · **Source:** Web.md Phases 2-4

**THE INTERVIEWER'S QUESTION:** How do you make a custom interface accessible?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Begin with the HTML element whose built-in meaning matches the job. That meaning gives browsers and assistive technology useful keyboard behavior and information such as the element's role, name, and state. Check labels, heading order, page landmarks, visible focus, keyboard operation, color contrast, zoom and reflow, error announcements, and reduced motion. Add ARIA only when HTML cannot express the widget, then implement the complete keyboard and focus behavior. Verify it with a keyboard, the accessibility tree, automated checks, zoom, and a few screen-reader tests.

**QUESTIONS THEY MAY ASK NEXT:** How would you manage focus in a modal? Is passing axe enough?

**COMMON MISTAKE:** “Add aria-label everywhere” or treating accessibility as a final automated score.

---

## W3. Explain the CSS cascade and a layout choice

**Level:** Screen · **Source:** Web.md Phases 3-4

**THE INTERVIEWER'S QUESTION:** Why is a CSS rule not applying, and when do you choose Grid vs Flexbox?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Inspect whether the property applies, then cascade origin/importance, layer, specificity, scoping proximity, and source order; also check inheritance, shorthand overrides, media/container conditions, and invalid values. Use normal flow by default, Flexbox for one-dimensional distribution/alignment, and Grid for two-dimensional tracks. Avoid raising specificity blindly; fix ownership/layers or selector design.

**QUESTIONS THEY MAY ASK NEXT:** What creates a stacking context? Why `min-width: 0` in flex children?

**COMMON MISTAKE:** Reaching for `!important` or absolute positioning as the primary layout system.

---

## W4. JavaScript closure, event loop, and async ordering

**Level:** Core · **Source:** Web.md Phase 5

**THE INTERVIEWER'S QUESTION:** Explain a closure and why Promise callbacks run before a timer.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** A closure is a function retaining access to its lexical environment after the outer call returns. The runtime executes the current task to completion; resolved-Promise reactions enter the microtask queue, which drains before the browser takes the next task such as a timer and generally before the next rendering opportunity. Excess microtasks or long synchronous work can starve rendering/input. Use the model to explain stale captured state and cleanup leaks.

**QUESTIONS THEY MAY ASK NEXT:** What does `await` do? How do you cancel a fetch and avoid stale responses?

**COMMON MISTAKE:** Calling JavaScript “multithreaded because async” or memorizing output order without the queue model.

---

## W5. Component state, effects, and rendering

**Level:** Core · **Source:** Web.md Phases 8-10

**THE INTERVIEWER'S QUESTION:** Where should frontend state live, and when is an effect appropriate?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Put shareable navigation state in the URL, remote truth in a server-state cache, truly cross-cutting client state in context/store, and transient state in the nearest component. Derive values during render rather than synchronizing duplicates. An effect is for synchronizing with an external system-subscription, timer, DOM API, or network side effect-with dependency correctness, cleanup, and race handling. Stable keys preserve identity; rendering should remain pure.

**QUESTIONS THEY MAY ASK NEXT:** Controlled vs uncontrolled form? Optimistic update rollback? Why can an effect loop?

**COMMON MISTAKE:** A global store for everything or fetching/mirroring derived values in effects by default.

---

## W6. CSR vs SSR vs SSG and framework choice

**Level:** Core · **Source:** Web.md Phases 9-10

**THE INTERVIEWER'S QUESTION:** How do you choose a rendering strategy and frontend framework?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Start with the product's requirements and limits: must search engines read it, must each user see different or fresh information, how interactive is it, how much delay is acceptable, where will it run, and what can the team operate? Client-side rendering makes the browser create more of the page. Server-side rendering sends useful HTML sooner but adds server and hydration work. Static generation is fast and reliable for content known during the build, but updates may require another build. Streaming and islands can send or activate smaller pieces separately. Choose React with Next.js, Vue with Nuxt, Angular, SvelteKit, Astro, or no framework by matching those needs and the tool's long-term support-not by benchmark scores alone.

**QUESTIONS THEY MAY ASK NEXT:** What causes hydration mismatch? When is a server component useful?

**COMMON MISTAKE:** “SSR is always better for SEO” or picking a framework only because it is popular.

---

## W7. TypeScript and runtime validation

**Level:** Screen · **Source:** Web.md Phase 7

**THE INTERVIEWER'S QUESTION:** If an API response has a TypeScript type, why validate it?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** TypeScript types disappear at runtime and cannot make an untrusted response conform. Parse unknown input at the boundary with a schema/guard, reject or normalize invalid data, then expose the validated typed value internally. Use unions to make invalid application states unrepresentable, prefer inference/narrowing, and avoid `any` because it disables the proof chain.

**QUESTIONS THEY MAY ASK NEXT:** `unknown` vs `any`? Structural typing risk? Generated OpenAPI types?

**COMMON MISTAKE:** Casting `response.json() as User` and calling that validation.

---

## W8. Frontend test strategy

**Level:** Core · **Source:** Web.md Phase 15

**THE INTERVIEWER'S QUESTION:** What should you test in a frontend application?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Static checks catch type/rule/build failures; unit tests cover pure domain logic; component/integration tests assert user-visible behavior and accessibility through public interactions; a small E2E set covers critical cross-system journeys; add automated accessibility and performance budgets. Mock at external boundaries with contract-faithful responses, avoid testing private component state, and keep tests deterministic. Put a regression test at the cheapest layer that proves each bug.

**QUESTIONS THEY MAY ASK NEXT:** When use Playwright instead of Testing Library? How test race conditions?

**COMMON MISTAKE:** Snapshot-everything coverage or an enormous flaky E2E suite.

---

## W9. Backend request lifecycle and framework selection

**Level:** Core · **Source:** Web.md Phase 11

**THE INTERVIEWER'S QUESTION:** Walk through an API request and choose a backend framework.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Listener accepts request; middleware handles cross-cutting concerns; router selects handler; boundary validates/authenticates; authorization checks action/object; application use case coordinates domain and repositories/external clients; transaction preserves invariants; serializer maps a safe response; centralized error mapping/logging records correlation. Choose Node, Django/FastAPI, Laravel, Rails, Spring, ASP.NET, or Go using team/domain/library/runtime/operations constraints. Architecture boundaries matter more than framework brand.

**QUESTIONS THEY MAY ASK NEXT:** Where start a transaction? How handle graceful shutdown or CPU-heavy work in Node?

**COMMON MISTAKE:** Putting all business rules in controllers or declaring one framework “the fastest” without workload context.

---

## W10. SQL schema, indexes, transactions, and ORM

**Level:** Core · **Source:** Web.md Phase 13

**THE INTERVIEWER'S QUESTION:** A list endpoint is slow and concurrent updates lose data. What do you inspect?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Confirm query and parameters; inspect actual plan, row estimates, scan type, joins/sorts, and N+1 calls; align a selective composite/partial index with filter and order while considering write cost. For lost updates, define the invariant and use a transaction plus version/conditional update, appropriate locking, or a single atomic statement; keep database constraints as the final guard. Inspect ORM-generated SQL rather than bypassing understanding.

**QUESTIONS THEY MAY ASK NEXT:** Offset vs cursor pagination? Isolation levels? Cache invalidation?

**COMMON MISTAKE:** Add Redis or an index to every column before measuring the query.

---

## W11. Design a production REST API

**Level:** Core · **Source:** Web.md Phase 12

**THE INTERVIEWER'S QUESTION:** Design project/task CRUD for multiple clients.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Clarify resources, actors, permissions, workflows, scale, and compatibility. Use noun routes and HTTP semantics; define schemas, stable IDs/time/money, validation, machine-readable errors, filtering/sorting, deterministic cursor pagination, optimistic concurrency, idempotency for retried creates, rate limits, and request IDs. Publish OpenAPI with security and examples, generate/test clients where useful, evolve additively, and run a measured deprecation process.

**QUESTIONS THEY MAY ASK NEXT:** `PUT` vs `PATCH`? `401` vs `403`? When GraphQL/gRPC/webhook?

**COMMON MISTAKE:** A route list without errors, authorization, pagination, retries, or lifecycle policy.

---

## W12. Sessions vs JWT and OAuth/OIDC

**Level:** Core · **Source:** Web.md Phase 14

**THE INTERVIEWER'S QUESTION:** How would you authenticate a browser app and a third-party client?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Separate authentication from authorization. For a first-party browser, an opaque server session in Secure/HttpOnly/appropriate SameSite cookie gives simple revocation and keeps credentials out of JS; add CSRF defense where needed. For delegated third-party access use OAuth Authorization Code with PKCE; OIDC supplies identity. JWT access tokens are useful for verifiable distributed claims but require strict algorithm/signature/issuer/audience/expiry/key validation, short lifetimes, and a revocation/rotation story. Never store passwords reversibly.

**QUESTIONS THEY MAY ASK NEXT:** Where store refresh tokens? Cookie theft vs XSS? Why PKCE?

**COMMON MISTAKE:** “JWT is more secure and stateless” without threat model or revocation cost.

---

## W13. Authorization and common web attacks

**Level:** Core · **Source:** Web.md Phase 14

**THE INTERVIEWER'S QUESTION:** How do you prevent XSS, CSRF, injection, SSRF, and IDOR/BOLA?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** XSS: contextual output encoding, safe DOM APIs, sanitization only where rich HTML is required, and CSP defense-in-depth. CSRF: SameSite plus token/origin checks and no state-changing GET. SQLi: parameters and allowlists for identifiers. SSRF: strict outbound destinations, resolved-IP checks, redirect control, and egress policy. IDOR/BOLA: server-side action and object/tenant authorization on every request with negative tests. Add secure headers, limits, logging, secret hygiene, and dependency updates.

**QUESTIONS THEY MAY ASK NEXT:** Is CORS a security boundary? Secure file upload? Multi-tenant test cases?

**COMMON MISTAKE:** Client-side role checks or input “sanitization” as a universal security answer.

---

## W14. Webhooks, queues, retries, and exactly-once claims

**Level:** Senior · **Source:** Web.md Phase 18

**THE INTERVIEWER'S QUESTION:** A payment webhook may arrive twice or out of order. Design processing.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Verify signature over raw body plus timestamp; reject stale/invalid events; persist provider event ID under a unique constraint; acknowledge quickly; enqueue durable work; make business transition idempotent and monotonic; bound retries with jitter and dead-letter/operator replay; log/measure age, attempts, and outcomes. Use an outbox for local commit plus event publication. Do not promise end-to-end exactly once-combine at-least-once delivery with idempotent effects.

**QUESTIONS THEY MAY ASK NEXT:** What if response is lost? Poison message? Ordering per aggregate?

**COMMON MISTAKE:** Retrying indefinitely or deduplicating only in process memory.

---

## W15. Diagnose a slow web application end to end

**Level:** Senior · **Source:** Web.md Phases 16-17

**THE INTERVIEWER'S QUESTION:** Users say the app became slow after a deploy. What do you do?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Define affected users/actions/time and compare deploy/traffic/config changes. Trace one slow interaction: real-user Web Vitals and browser waterfall/main thread; network/CDN/TLS; API p50/p95/p99 and saturation; trace spans through dependencies; DB plan/locks/pool; cache hit rate; queue delay. Reproduce with controlled inputs, mitigate/rollback if impact is active, then fix the measured bottleneck and add a regression budget/alert. Preserve evidence and avoid changing multiple variables.

**QUESTIONS THEY MAY ASK NEXT:** High LCP but fast API? Good average but bad p99? Memory grows over time?

**COMMON MISTAKE:** Scale pods, add cache, or minify code before locating the latency.

---

## W16. Design and operate a full-stack SaaS slice

**Level:** Senior · **Source:** Web.md Phases 17-20

**THE INTERVIEWER'S QUESTION:** Design a multi-tenant project management application.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Clarify roles, tenant isolation, core workflow, traffic, consistency, latency, compliance, and non-goals. Start modular monolith: CDN/reverse proxy, server-rendered or SPA UI, API, Postgres with tenant constraints/indexes, object storage, queue/worker, optional Redis. Define REST/OpenAPI, session/OAuth needs, object authorization, audit events, rate limits, async notifications, test layers, CI/migrations, HTTPS/secrets, logs/metrics/traces, SLO/alerts, backup/restore, and rollback. Scale measured walls with cache/read replica/partition/service extraction-not preemptive microservices.

**QUESTIONS THEY MAY ASK NEXT:** Tenant migration? Noisy neighbor? Zero-downtime schema change? Regional failure?

**COMMON MISTAKE:** Starting with Kubernetes/microservices and omitting isolation, recovery, or operations.

---

<a id="track-g"></a>

# Track G - Cloud Engineering

**Source roadmap:** cloud.md (+ Networks/CS foundations)

## G1. Regions, zones, and shared responsibility

**Level:** Screen · **Source:** cloud.md Phases 1, 3

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** A region is a geographic failure and data-residency boundary; an availability zone is an isolated location inside it. I spread a service across zones for routine infrastructure failures and add another region only when recovery objectives, regulation, or user latency justify the cost and complexity. The provider secures the cloud's physical and managed-service foundation; I still own identities, data, configuration, application code, and service-specific controls.

**QUESTIONS THEY MAY ASK NEXT:** What still fails across multiple zones? When is multi-region wasteful? · **COMMON MISTAKE:** Saying the provider owns all security or treating a region as automatic disaster recovery.

---

## G2. Design least-privilege cloud identity

**Level:** Core · **Source:** cloud.md Phase 4

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Begin with human and workload identities, not long-lived access keys. Federate humans through SSO with MFA; give workloads roles or managed identities and short-lived credentials. Policies should allow only required actions on required resources under useful conditions, with explicit boundaries, separation of duties, centralized audit logs, and a tested emergency path. Review actual use and remove permissions continuously.

**QUESTIONS THEY MAY ASK NEXT:** Role vs user? How do you investigate an access denial? · **COMMON MISTAKE:** Administrator access plus secret keys stored in CI.

---

## G3. Design a public web service inside a VPC/VNet

**Level:** Core · **Source:** cloud.md Phase 5

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Put the public load balancer at controlled internet-facing subnets and application/database workloads in private subnets across zones. Routes decide reachability; stateful security groups or NSGs express workload intent, while network ACLs are coarse subnet guards. Private workloads use NAT only for required outbound internet access and private endpoints for provider services where possible. DNS, flow logs, egress control, and no public database complete the design.

**QUESTIONS THEY MAY ASK NEXT:** NAT gateway vs internet gateway? How does a private endpoint help? · **COMMON MISTAKE:** Calling a subnet private merely because its name says private.

---

## G4. Choose compute, scaling, and load balancing

**Level:** Core · **Source:** cloud.md Phase 6

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Choose VMs when OS/runtime control matters, containers for portable long-running services, and functions for event-driven work with bounded execution. Keep instances replaceable, externalize durable state, health-check real readiness, scale on a signal tied to saturation or demand, and load-balance across zones. Account for cold starts, connection draining, quotas, slow dependencies, and the difference between scaling out and recovering safely.

**QUESTIONS THEY MAY ASK NEXT:** Why can CPU autoscaling fail? L4 vs L7 load balancer? · **COMMON MISTAKE:** Autoscaling a stateful bottleneck without capacity or dependency analysis.

---

## G5. Choose cloud storage and databases

**Level:** Core · **Source:** cloud.md Phases 8-9

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Start from access pattern and guarantees. Object storage fits immutable blobs and data lakes; block storage fits mounted low-latency volumes; file storage fits shared filesystem semantics. Use relational databases for constraints, joins, and transactions; key-value/document systems for known high-scale access patterns; caches for derived hot data, never as unexplained truth. Define encryption, retention, versioning, backup, restore tests, replication, and consistency before choosing a product name.

**QUESTIONS THEY MAY ASK NEXT:** Backup vs replication? Strong vs eventual consistency? · **COMMON MISTAKE:** Selecting NoSQL only because the system may grow.

---

## G6. Build a reliable event-driven/serverless workflow

**Level:** Senior · **Source:** cloud.md Phases 7, 10

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Accept the event durably, acknowledge quickly, and let bounded workers process it. Assume at-least-once delivery: deduplicate by stable event ID, make state transitions idempotent, use exponential backoff with jitter, isolate poison messages in a dead-letter queue, and expose age/attempt/outcome metrics. Preserve ordering only where the business invariant requires it, and use an outbox when a database commit and event publication must move together.

**QUESTIONS THEY MAY ASK NEXT:** What if processing succeeds but acknowledgement is lost? · **COMMON MISTAKE:** Claiming a queue gives end-to-end exactly-once execution.

---

## G7. Explain infrastructure as code, state, and drift

**Level:** Core · **Source:** cloud.md Phase 12

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** IaC makes desired infrastructure reviewable, repeatable, testable, and recoverable. The engine compares configuration, stored state, and provider reality to build a plan, then converges resources. Protect remote state with locking, encryption, restricted access, and backups; separate environments and ownership boundaries; pin versions; review plans; detect drift; and import or intentionally replace manual resources instead of hiding differences.

**QUESTIONS THEY MAY ASK NEXT:** Why is state sensitive? Module boundaries? · **COMMON MISTAKE:** Editing production manually and assuming the next apply will harmlessly reconcile it.

---

## G8. Turn reliability goals into architecture

**Level:** Senior · **Source:** cloud.md Phases 15-16

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Translate business impact into SLI/SLO, RTO, RPO, and failure assumptions. Then choose health checks, multi-zone placement, timeouts, retries with budgets, circuit breaking, load shedding, backups, replication, and a tested recovery runbook. Logs, metrics, and traces must answer user-impact questions. I prove the design with restore tests and game days; redundancy without detection, failover, and data recovery evidence is only a diagram.

**QUESTIONS THEY MAY ASK NEXT:** RTO vs RPO? When do retries amplify an outage? · **COMMON MISTAKE:** Equating high availability with backup or disaster recovery.

---

## G9. Secure and control cloud cost

**Level:** Senior · **Source:** cloud.md Phases 14, 17

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Security and FinOps are feedback systems. Establish identity, encryption, secret management, network boundaries, audit/config findings, patch and vulnerability ownership, then prioritize by exposure and blast radius. For cost, enforce tagging/allocation, budgets and anomaly alerts, unit economics, right-sizing, lifecycle policies, commitment coverage, and architectural review. Optimize waste without buying fragility or hiding shared costs.

**QUESTIONS THEY MAY ASK NEXT:** Which finding gets fixed first? Reserved capacity vs autoscaling? · **COMMON MISTAKE:** Treating cost optimization as simply turning resources off.

---

## G10. Design a migration and production landing zone

**Level:** Senior · **Source:** cloud.md Phases 18-20

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Inventory dependencies, data classification, traffic, licensing, compliance, and recovery targets; create a governed landing zone for identity, accounts/subscriptions, networks, logging, policy, budgets, and break-glass access. Choose rehost, replatform, refactor, repurchase, retain, or retire per workload. Migrate in observable waves with data validation, performance baselines, cutover/rollback criteria, ownership, and a post-migration optimization period.

**QUESTIONS THEY MAY ASK NEXT:** How do you minimize database cutover? What belongs in a landing zone? · **COMMON MISTAKE:** A big-bang lift-and-shift with no rollback or operating model.

---

<a id="track-h"></a>

# Track H - DevOps Engineering

**Source roadmap:** devops.md (+ cloud/Networks/CS foundations)

## H1. What is DevOps, and how do you measure it?

**Level:** Screen · **Source:** devops.md Phase 1

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** DevOps is an operating model in which product, development, security, and operations shorten and stabilize the path from change to user value through shared ownership, automation, and feedback. I watch deployment frequency and lead time for flow, change failure rate and failed-deployment recovery time for stability, plus product and reliability outcomes. The metrics diagnose constraints; they are not quotas for gaming teams.

**QUESTIONS THEY MAY ASK NEXT:** Can speed and stability improve together? · **COMMON MISTAKE:** Defining DevOps as a job title or a list of tools.

---

## H2. Troubleshoot a failing Linux service

**Level:** Core · **Source:** devops.md Phases 2-3

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Define impact and recent change, then inspect service state and logs, process ownership, exit code, resource pressure, filesystem/inodes, permissions, environment/config, listening sockets, DNS and dependency reachability. Follow the request path with `systemctl`, `journalctl`, `ps`, `ss`, `curl`, `dig`, and targeted tracing. Mitigate first when impact is active, preserve evidence, change one variable, verify recovery, and record a prevention action.

**QUESTIONS THEY MAY ASK NEXT:** Process exists but port is closed-next checks? · **COMMON MISTAKE:** Restarting repeatedly until evidence disappears.

---

## H3. Git strategy and safe collaboration

**Level:** Screen · **Source:** devops.md Phase 4; Git.md Phases 5–10 and 14

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Git stores a graph of immutable commits and movable references. Prefer small changes, protected main, fast review, automated checks, and short-lived branches or trunk-based development when the team can sustain it. Merge preserves branch topology; rebase rewrites local ancestry for a linear story and should not rewrite shared history casually. A revert creates an auditable inverse change and is safer than erasing published commits.

For the full state, recovery, and workflow interview track, continue at [Track V - Git and Version Control](#track-v---git-and-version-control).

**QUESTIONS THEY MAY ASK NEXT:** When squash? How recover a lost commit? · **COMMON MISTAKE:** Long-lived environment branches and force-pushing shared history.

---

## H4. Write reliable operational automation

**Level:** Core · **Source:** devops.md Phase 5

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Automation should be idempotent, observable, bounded, and safe to rerun. Validate inputs and preconditions; quote variables; use strict error handling thoughtfully; write to a temporary target and atomically replace; set timeouts; retry only transient idempotent work; emit useful exit codes/logs; clean up; and support dry-run where consequences matter. Test the failure path, not just the happy path.

**QUESTIONS THEY MAY ASK NEXT:** How do you prevent two runs colliding? · **COMMON MISTAKE:** A script that works only from one directory with one user's environment.

---

## H5. Explain the build artifact and software-supply chain

**Level:** Core · **Source:** devops.md Phase 6

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Resolve pinned dependencies, compile/package, test, scan, generate metadata, sign or attest, and publish one immutable artifact. Promote that same digest through environments instead of rebuilding. Record source revision, toolchain and dependencies with provenance/SBOM, restrict publisher identity, protect the registry, and verify signatures/policy before deployment. Reproducibility and traceability make rollback and incident scope credible.

**QUESTIONS THEY MAY ASK NEXT:** Why not rebuild for production? · **COMMON MISTAKE:** Using a mutable `latest` tag as release identity.

---

## H6. Design a secure, fast CI pipeline

**Level:** Core · **Source:** devops.md Phase 7

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Trigger deterministic checks from versioned configuration; fail fast on format/type/unit tests, parallelize independent integration/security work, cache by safe content keys, and publish immutable results. Use isolated ephemeral runners, least-privilege short-lived cloud identity, masked secrets, protected environments, concurrency cancellation, and required checks. Track duration, queue time, flake rate, and failure cause; quarantine only with an owner and deadline.

**QUESTIONS THEY MAY ASK NEXT:** How can forked PRs access secrets? · **COMMON MISTAKE:** Retrying flaky tests until the pipeline turns green.

---

## H7. Choose a deployment and rollback strategy

**Level:** Senior · **Source:** devops.md Phase 8

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Separate deployment from release when useful. Rolling is resource-efficient but mixes versions; blue-green gives fast switchback but doubles capacity and complicates state; canary limits blast radius but needs representative traffic and automatic health gates. Use immutable artifacts, backward-compatible expand/migrate/contract schema changes, readiness and graceful drain, progressive verification, and a rehearsed rollback or roll-forward decision.

**QUESTIONS THEY MAY ASK NEXT:** What cannot be rolled back? · **COMMON MISTAKE:** Calling a deployment successful because pods started.

---

## H8. Explain a production container

**Level:** Core · **Source:** devops.md Phase 9

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** A container is an isolated process using kernel namespaces and cgroups, packaged with an immutable layered filesystem-not a small VM. Build from a pinned minimal base with multi-stage builds, run as non-root, exclude secrets, scan and sign, set resource expectations, send logs to stdout/stderr, keep state external, handle PID 1 signals, expose truthful readiness, and identify releases by digest.

**QUESTIONS THEY MAY ASK NEXT:** Image vs container? Why does PID 1 matter? · **COMMON MISTAKE:** Baking credentials or production data into an image.

---

## H9. Debug a Kubernetes deployment

**Level:** Senior · **Source:** devops.md Phase 10

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Start from user symptom and desired controller state. Inspect rollout and events, pod phase/restarts, current and previous logs, readiness/liveness/startup probes, requests/limits and OOM/eviction, image/config/secret mounts, service selectors/endpoints, DNS and network policy, then node/scheduler conditions. Fix the narrow cause, verify traffic and error rate, and improve the probe, limit, policy, alert, or runbook that allowed it.

**QUESTIONS THEY MAY ASK NEXT:** Pending vs CrashLoopBackOff? Service has no endpoints? · **COMMON MISTAKE:** Deleting pods repeatedly without reading events or previous logs.

---

## H10. Terraform versus configuration management

**Level:** Core · **Source:** devops.md Phases 11-13

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Terraform-like IaC manages infrastructure resources through a dependency graph, provider APIs, and state; Ansible-like configuration management converges packages, files, and services on hosts, preferably idempotently. Keep small ownership-aligned modules/roles, protected remote state, pinned versions, reviewed plans, secret indirection, policy/testing, and drift detection. Use cloud-native immutable images or managed services when they remove host configuration entirely.

**QUESTIONS THEY MAY ASK NEXT:** What belongs in a module? How handle drift? · **COMMON MISTAKE:** One giant state file and manual fixes between applies.

---

## H11. Observability, SLOs, and alerting

**Level:** Senior · **Source:** devops.md Phases 14-15

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Metrics show trends and saturation, logs explain discrete events, and traces connect latency across boundaries; correlate them with stable IDs and controlled cardinality. Define user-centered SLIs and SLOs, calculate an error budget, alert on actionable symptoms or burn rate, and attach ownership plus a runbook. Dashboards support investigation; pages demand action. Instrument the critical path before collecting everything.

**QUESTIONS THEY MAY ASK NEXT:** High-cardinality label risk? Why multi-window burn alerts? · **COMMON MISTAKE:** Paging on raw CPU or every logged error without user-impact context.

---

## H12. DevSecOps, GitOps, incidents, and platform engineering

**Level:** Senior · **Source:** devops.md Phases 16-20

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Put fast security feedback near the change-secret, dependency, SAST, IaC, image and policy checks-then prioritize exploitable risk and preserve exception ownership. With GitOps, reviewed Git state is reconciled continuously and drift is visible; protect promotion and emergency procedures. During incidents establish command, communication, mitigation, evidence, and recovery; follow with a blameless causal review. A platform packages these paved roads as a product with adoption and outcome metrics, not a ticket wall.

**QUESTIONS THEY MAY ASK NEXT:** Git is unavailable during an incident? How avoid security gate fatigue? · **COMMON MISTAKE:** More tools and gates without ownership, developer usability, or recovery practice.

---

<a id="track-v"></a>

# Track V - Git and Version Control

**Source roadmap:** [Git.md](../roadmaps/Git.md) · **Project evidence:** [Git project cards](./Projects.md#git-and-git-workflows)

## V1. Git, GitHub, and version-control models

**Level:** Screen · **Source:** Git.md Phase 1

**THE INTERVIEWER'S QUESTION:** What is Git, and how is it different from GitHub or centralized version control?

**BEGINNER-FRIENDLY ANSWER:** Git records versions and branches locally on my computer. GitHub is one service that hosts Git repositories and adds accounts, pull requests, permissions, and automation.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** Git is a distributed content-addressed object database with a commit DAG, refs, and an index. A clone normally contains the object history needed for local commit, branch, diff, and log operations offline. GitHub/Forgejo/Gitea/GitLab add server identity, authorization, review, issue, policy, release, and CI features; centralized VCS keeps the primary history on a server rather than giving each ordinary client a complete repository model.

**A SIMPLE ANSWER STRUCTURE:** Problem before version control → local/centralized/distributed distinction → Git mechanism → forge additions.

**QUESTIONS THEY MAY ASK NEXT:** Is `origin` GitHub? Can Git work offline? · **COMMON MISTAKE:** Using Git and GitHub as synonyms or calling GitHub open-source software.

---

## V2. Working tree, staging area, and repository

**Level:** Screen · **Source:** Git.md Phase 2

**THE INTERVIEWER'S QUESTION:** Explain Git's three states and `git diff` versus `git diff --staged`.

**BEGINNER-FRIENDLY ANSWER:** I edit in the working tree, stage the exact content for the next commit, and commit that staged snapshot. Plain diff shows edits not staged; staged diff shows what the next commit will contain.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** The working tree is the checkout, the index is the proposed tree, and `HEAD` normally resolves to the current commit tree. `git status` compares WT↔index and index↔`HEAD`; `git diff` renders the first delta and `git diff --staged` the second. A path can be simultaneously staged and modified because the index and disk hold different versions.

**A SIMPLE ANSWER STRUCTURE:** Name three states → two comparisons → one simultaneous-state example → verification.

**QUESTIONS THEY MAY ASK NEXT:** Does commit read disk or index? Why patch staging? · **COMMON MISTAKE:** Saying staging is just a list of filenames.

---

## V3. What a commit stores and what makes a good commit

**Level:** Core · **Source:** Git.md Phase 3

**THE INTERVIEWER'S QUESTION:** Is a Git commit a diff? What does atomic mean?

**BEGINNER-FRIENDLY ANSWER:** A commit names a complete project snapshot, links to its parent, and records a message and author. Atomic means it represents one coherent reason that can be reviewed and undone as a unit.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** A commit object identifies a root tree, parent IDs, author/committer metadata, timestamps, and message; those bytes determine its ID. Git can display diffs by comparing trees, but the commit model is snapshots. Atomicity is semantic and buildability-oriented, not “one file” or “few lines”; it improves review, revert, cherry-pick, and bisect precision.

**A SIMPLE ANSWER STRUCTURE:** Stored fields → snapshots versus displayed diffs → atomicity → practical benefit.

**QUESTIONS THEY MAY ASK NEXT:** Author versus committer? Why does rebase change IDs? · **COMMON MISTAKE:** Calling a commit mutable or equating atomic with tiny.

---

## V4. Blobs, trees, refs, `HEAD`, and detached `HEAD`

**Level:** Advanced · **Source:** Git.md Phase 4

**THE INTERVIEWER'S QUESTION:** Walk through Git internals and explain detached `HEAD`.

**BEGINNER-FRIENDLY ANSWER:** Git stores file content as blobs, directories as trees, and commits that point to a tree and parents. Branches are movable names for commits; detached `HEAD` means I checked out a commit directly instead of through a branch.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** Blobs contain bytes without filenames; trees map names/modes to object IDs; commits bind a root tree to parents and metadata; annotated tags add tag objects. Refs name object IDs, and symbolic `HEAD` normally names a local branch. Detached commits are valid objects, but I create a ref before reflog expiry/GC can remove the last recovery route.

**A SIMPLE ANSWER STRUCTURE:** Four object types → refs → symbolic/detached `HEAD` → reachability/recovery.

**QUESTIONS THEY MAY ASK NEXT:** Loose objects versus packfiles? Why is branch creation cheap? · **COMMON MISTAKE:** Saying a branch copies the working tree.

---

## V5. Local, remote-tracking, and upstream branches

**Level:** Core · **Source:** Git.md Phases 5 and 7

**THE INTERVIEWER'S QUESTION:** What is the difference between `main`, `origin/main`, and an upstream?

**BEGINNER-FRIENDLY ANSWER:** `main` is my movable local branch. `origin/main` is my local record of the remote's main from the last fetch. An upstream is configuration connecting my branch to the branch it normally compares/pulls/pushes against.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** Local branch refs live under `refs/heads`; remote-tracking refs under `refs/remotes` are updated by fetch refspecs and may be stale. Upstream config records a remote and merge ref for status/default operations. Ahead/behind counts are asymmetric reachability, not file age.

**A SIMPLE ANSWER STRUCTURE:** Name each ref → say who moves it → explain staleness → ahead/behind graph.

**QUESTIONS THEY MAY ASK NEXT:** Is `origin` reserved? What does `branch -vv` show? · **COMMON MISTAKE:** Treating `origin/main` as a live server branch.

---

## V6. Fast-forward, three-way merge, and conflict resolution

**Level:** Core · **Source:** Git.md Phase 6

**THE INTERVIEWER'S QUESTION:** How does Git merge, and how do you resolve a conflict safely?

**BEGINNER-FRIENDLY ANSWER:** If my branch can just move forward, Git fast-forwards. Otherwise it compares both tips with their common ancestor. I resolve the intended final content, stage it, test it, and continue - or abort before committing.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** A true merge computes one or more merge bases and performs a three-way comparison of base, ours, and theirs. Conflicted index entries occupy stages 1–3 until I add a resolved stage-0 entry. I inspect `ls-files -u`/combined diff, resolve semantics including rename/delete cases, run tests and `diff --check`, then commit/continue; `merge --abort` is the safe pre-completion exit.

**A SIMPLE ANSWER STRUCTURE:** Determine merge base → FF or three-way → inspect stages → semantic resolution → tests/graph.

**QUESTIONS THEY MAY ASK NEXT:** Binary conflicts? `rerere`? · **COMMON MISTAKE:** Deleting markers or choosing an entire side without understanding intent.

---

## V7. Fetch, pull, and push

**Level:** Screen · **Source:** Git.md Phase 7

**THE INTERVIEWER'S QUESTION:** What is the difference between fetch, pull, and push?

**BEGINNER-FRIENDLY ANSWER:** Fetch downloads remote objects and updates my remote-tracking view without applying it. Pull fetches and then merges or rebases. Push sends objects and asks the remote branch to move.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** Fetch negotiates objects and applies configured refspec updates locally. Pull is a porcelain composition of fetch plus the selected integration policy, so it can update working/index/history. Push transfers missing objects and requests remote ref transactions subject to fast-forward and server policy. I fetch/inspect separately while diagnosing.

**A SIMPLE ANSWER STRUCTURE:** Object transfer → which refs move → whether branch/WT changes → verification.

**QUESTIONS THEY MAY ASK NEXT:** Why can push be rejected? Why `pull --ff-only`? · **COMMON MISTAKE:** Calling all three “sync.”

---

## V8. Pull requests, code review, and protected branches

**Level:** Core · **Source:** Git.md Phase 7

**THE INTERVIEWER'S QUESTION:** Is a pull request a Git feature, and what makes a good review workflow?

**BEGINNER-FRIENDLY ANSWER:** A pull request is hosting-platform metadata around a proposed branch change. A good one is small, explains why and tests/risk, receives useful review, passes checks, and follows protected-main policy.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** Git supplies commits/refs/object exchange; a forge supplies PR/MR discussion, review states, CODEOWNERS, required checks, branch rules, and merge UI. I keep diffs reviewable, separate blocking from suggestions, update with commits, protect untrusted CI from secrets, and integrate using the repository's documented merge policy.

**A SIMPLE ANSWER STRUCTURE:** Git layer → forge layer → author evidence → reviewer duties → server gate.

**QUESTIONS THEY MAY ASK NEXT:** Squash versus merge commit? Review disagreement? · **COMMON MISTAKE:** Treating a green check or approval count as proof of correctness.

---

## V9. Restore, amend, reset, and revert

**Level:** Core · **Source:** Git.md Phase 8

**THE INTERVIEWER'S QUESTION:** How do you choose the right undo command?

**BEGINNER-FRIENDLY ANSWER:** I ask whether the problem is in the working file, staging area, unpublished commit, or shared history. I use restore/unstage narrowly, amend/reset only for private history, and revert for published commits.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** `restore` changes WT and optionally index from an explicit source; amend synthesizes a replacement commit; reset moves the current ref and soft/mixed/hard progressively reset index/WT; revert adds an inverse commit. Shared-ID dependency determines safety. I inspect both diffs, create a safety ref, and verify tree/graph/tests.

**A SIMPLE ANSWER STRUCTURE:** State → publication boundary → narrowest command → verify → recovery.

**QUESTIONS THEY MAY ASK NEXT:** Reset modes? Reverting a merge? · **COMMON MISTAKE:** Recommending `reset --hard` as generic undo.

---

## V10. Recovering a deleted branch or lost commit

**Level:** Core · **Source:** Git.md Phase 9

**THE INTERVIEWER'S QUESTION:** You deleted a branch or reset away commits. What do you do?

**BEGINNER-FRIENDLY ANSWER:** I stop changing things, inspect the reflog for the old tip, verify the candidate with `git show`, and create a rescue branch at that commit.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** Ref deletion usually removes a name, not objects immediately. I capture status/refs/graph, inspect relevant and `HEAD` reflogs, validate tree/ancestry, and restore reachability with a new ref. `fsck` dangling search is a weaker fallback. Reflogs are local and expire, so this is not backup.

**A SIMPLE ANSWER STRUCTURE:** Preserve evidence → reflog → inspect candidate → name it → verify reachability.

**QUESTIONS THEY MAY ASK NEXT:** What if reflog is gone? Does GC matter? · **COMMON MISTAKE:** Resetting repeatedly before recording the state.

---

## V11. A secret was committed and pushed

**Level:** Senior · **Source:** Git.md Phase 9

**THE INTERVIEWER'S QUESTION:** A real credential is in Git history. What is your response?

**BEGINNER-FRIENDLY ANSWER:** I revoke or rotate it immediately, assume it was exposed, review access, then decide with the team whether history must be rewritten. Deleting the latest file is not containment.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** I contain first - revoke/rotate, disable dependent access if needed, preserve evidence, inspect audit logs, and notify owners. Then I inventory every ref/mirror/cache and use a coordinated fresh-clone rewrite such as `git filter-repo`, verify absence, pause pushes, map old/new IDs, apply guarded ref updates, and require collaborator re-clone/reset. Rewriting does not unexpose the secret.

**A SIMPLE ANSWER STRUCTURE:** Contain → investigate → coordinated rewrite decision → verify → collaborator recovery/prevention.

**QUESTIONS THEY MAY ASK NEXT:** Why not BFG/filter-repo first? `--force-with-lease`? · **COMMON MISTAKE:** Saying “remove the file and force push” without rotation or coordination.

---

## V12. Merge versus rebase and interactive rebase

**Level:** Core · **Source:** Git.md Phase 10

**THE INTERVIEWER'S QUESTION:** When do you merge, rebase, squash, or fix up?

**BEGINNER-FRIENDLY ANSWER:** Merge joins existing histories and preserves them. Rebase copies my private commits onto a new base, so IDs change. I use interactive rebase to clean my unpublished series before review, not to rewrite shared history casually.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** Rebase selects commits not reachable from the new upstream and replays their patches, creating objects with new parents/IDs; merge creates a multi-parent commit or fast-forwards. Interactive actions reword/edit/reorder/squash/fixup/drop/split. I create a safety ref, resolve/test each boundary, use range-diff, and respect branch ownership/publication policy.

**A SIMPLE ANSWER STRUCTURE:** Graph result → identity effect → suitable boundary → verification/recovery.

**QUESTIONS THEY MAY ASK NEXT:** How split a commit? Why does ours/theirs feel reversed? · **COMMON MISTAKE:** Saying rebase “moves the same commits.”

---

## V13. Stash, cherry-pick, patch mode, and worktrees

**Level:** Core · **Source:** Git.md Phase 11

**THE INTERVIEWER'S QUESTION:** How do you handle an urgent interruption without mixing work?

**BEGINNER-FRIENDLY ANSWER:** For a short interruption I can name and inspect a stash; for simultaneous work I prefer another worktree/branch. I use patch mode to select intent and cherry-pick one coherent fix when backporting.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** Stash creates local commit structure under `refs/stash`; partial/index options control captured state. Worktrees share objects but have separate checkout/index/`HEAD` state. Cherry-pick applies a commit's change to current parent as a new commit, with `-x` useful for public backport provenance. Each can conflict and needs tests.

**A SIMPLE ANSWER STRUCTURE:** Duration/shareability → select tool → state/identity effect → provenance/test.

**QUESTIONS THEY MAY ASK NEXT:** `apply` versus `pop`? Why not cherry-pick everything? · **COMMON MISTAKE:** Treating stash as durable shared project management.

---

## V14. Blame and bisect a regression

**Level:** Core · **Source:** Git.md Phase 12

**THE INTERVIEWER'S QUESTION:** A bug appeared among hundreds of commits. How do you find it?

**BEGINNER-FRIENDLY ANSWER:** I identify one known-good and one known-bad revision, then use bisect to test midpoint commits until Git finds the first bad one. Blame can point me to a line's commit, but I inspect its context.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** Bisect performs roughly logarithmic classification over a reachable ancestry interval and can automate with exit-code semantics through `bisect run`; deterministic tests and buildable commits are prerequisites. I reset after the run. For line history I use `blame -w -C`, `log -L`, and the originating commit/review - never person-first blame.

**A SIMPLE ANSWER STRUCTURE:** Known boundaries → deterministic classifier → logarithmic search → inspect culprit → reset/fix.

**QUESTIONS THEY MAY ASK NEXT:** Unbuildable commits? Flaky tests? · **COMMON MISTAKE:** Linear log reading or treating blame output as causal proof.

---

## V15. Tags, releases, and signing

**Level:** Advanced · **Source:** Git.md Phase 12

**THE INTERVIEWER'S QUESTION:** What is the difference between a branch, tag, and release, and what does signing prove?

**BEGINNER-FRIENDLY ANSWER:** A branch moves as work continues. A tag gives one commit a stable version name. A release adds notes/artifacts around that tag. A valid signature proves the signed bytes match a key, not automatically that the change was reviewed or safe.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** A lightweight tag is a ref to an object; an annotated tag is a tag object with target/tagger/date/message and optional signature. A forge release is external metadata/artifacts. Trust requires key identity, accepted algorithms, expiry/revocation, bot policy, and artifact-to-commit provenance in addition to signature verification.

**A SIMPLE ANSWER STRUCTURE:** Ref mutability → annotated object → platform release → cryptographic claim and limits.

**QUESTIONS THEY MAY ASK NEXT:** Move a published tag? SemVer? · **COMMON MISTAKE:** Claiming “verified signature” means approved, vulnerability-free, or reproducible.

---

## V16. LFS, submodules, subtrees, sparse checkout, and monorepos

**Level:** Advanced · **Source:** Git.md Phase 13

**THE INTERVIEWER'S QUESTION:** How do you choose Git repository scale and dependency tools?

**BEGINNER-FRIENDLY ANSWER:** LFS keeps pointers in Git for large content stored elsewhere; submodules pin another repository; subtrees copy its history/content into mine; sparse checkout limits visible paths. I choose from team ownership, clone/build, and release needs.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** LFS adds a separate authenticated content service and backup/quota boundary. A submodule is a mode-160000 gitlink to an exact external commit. Subtree vendors content into ordinary history. Sparse checkout changes worktree population, while partial-clone filters affect object transfer. Monorepo versus multi-repo trades atomic cross-project change/unified tooling against permissions, CI scale, checkout, ownership, and independent release coordination.

**A SIMPLE ANSWER STRUCTURE:** Constraint → mechanism → extra operational boundary → failure/recovery cost.

**QUESTIONS THEY MAY ASK NEXT:** Does sparse checkout make clone small? LFS outage? · **COMMON MISTAKE:** Choosing by repository size alone or ignoring disaster recovery.

---

## V17. Design a team Git workflow

**Level:** Senior · **Source:** Git.md Phase 14

**THE INTERVIEWER'S QUESTION:** Choose a workflow for a team shipping daily, or supporting multiple release versions.

**BEGINNER-FRIENDLY ANSWER:** I first ask team size, deployment frequency, review/test maturity, supported versions, and compliance. Daily SaaS usually fits protected main with short branches/trunk practices; multiple supported releases may need release and hotfix branches.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** I derive ref lifecycle, maximum branch age, integration method, CODEOWNERS/reviews/checks, merge queue, release tags, backport/forward-fix order, emergency exception, and metrics from trust/deploy/release constraints. I compare feature branch, GitHub/GitLab Flow, Git Flow, trunk-based, and forking failure modes and explicitly say when the selected model stops fitting.

**A SIMPLE ANSWER STRUCTURE:** Clarify constraints → draw refs → normal flow → release/hotfix → failure/emergency → metrics.

**QUESTIONS THEY MAY ASK NEXT:** Squash or merge? Environment branches? · **COMMON MISTAKE:** Naming Git Flow or trunk-based without prerequisites and failure modes.

---

## V18. Live repository diagnosis, CI trust, and behavioral recovery

**Level:** Senior live exercise · **Source:** Git.md Phase 15 and capstone

**THE INTERVIEWER'S QUESTION:** The repository is in a confusing state and a PR is green but unsafe. Diagnose and design the gate.

**BEGINNER-FRIENDLY ANSWER:** I preserve evidence, inspect status, both diffs, graph, branches/upstreams, remotes, refs, and reflog before changing anything. I require protected main, human review, current combined tests, secret scanning, and no secrets for untrusted jobs.

**TECHNICALLY PRECISE PROFESSIONAL ANSWER:** I identify any merge/rebase/cherry-pick operation and intended invariant through read-only state first. For trust, I map contributor ref/identity to least-privilege isolated CI, pinned dependencies, deterministic required checks, CODEOWNER approval, merge-queue candidate against latest main, protected ref transaction, signed tag, and immutable artifact provenance. I threat-model admin bypass, stale checks, runner compromise, key revocation, flakes, and incident evidence retention.

**A SIMPLE ANSWER STRUCTURE:** Preserve → read-only ladder → hypothesis → one safe change → verify; then contributor-to-artifact chain → bypasses/recovery.

**QUESTIONS THEY MAY ASK NEXT:** Tell me about a Git mistake you recovered from. How do you handle review disagreement? · **COMMON MISTAKE:** Running reset/maintenance/retry immediately, or trusting a green badge/signature in isolation.

---

<a id="track-e"></a>

# Track E - Cross-Cutting Classics

**Source roadmap:** Networks + CS + Data + AI (serving concerns)

## E1. What happens when you type a URL and press Enter?

**Level:** Senior signal · **Source:** Networks.md Phases 8–14 · CS web phases

**THE INTERVIEWER'S QUESTION:** Walk me through typing `https://example.com`.

**STRONG ANSWER (layer tour):**

1. Parse URL (scheme/host/path). Check HSTS/cache.
2. DNS lookup (stub → recursive → auth) → IP(s).
3. TCP connect (SYN/SYN-ACK/ACK) to `:443` (or QUIC path for H3).
4. TLS handshake - cert verify for hostname, keys.
5. HTTP request (`GET /`, headers) maybe via CDN/LB/reverse proxy.
6. Server responds; browser parses HTML; may repeat for assets.
7. Rendering. Name failure modes at each step (NXDOMAIN, SYN timeout, cert error, 502, etc.).

**Practice 5-minute and 12-minute versions.** Invite depth: "Want TLS or routing next?"

**COMMON MISTAKE:** Stopping at "DNS then HTTP" with no ports/TLS/caching/CDN.

---

## E2. Layered debugging ladder (network)

**Level:** Core · **Source:** Networks.md Phase 15

**THE INTERVIEWER'S QUESTION:** Site is down - how do you debug?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Link up? ARP/neigh to gateway? Ping gateway? Ping public IP? DNS resolve? TCP connect? TLS? HTTP code? Map OS errors (`ECONNREFUSED` vs `ETIMEDOUT`) to packets (RST vs silence). Capture with filters when needed. Eliminate layers in order.

**COMMON MISTAKE:** Rebooting randomly / jumping to "MTU" first without evidence.

---

## E3. Idempotency, retries, timeouts (backend)

**Level:** Core · **Source:** CS + Networks HTTP + Data pipelines

**THE INTERVIEWER'S QUESTION:** How do you retry safely?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Timeouts everywhere; bounded retries with jittered backoff; idempotency keys for POST-like side effects; distinguish 429/503 (retry) vs 400 (do not). At-least-once delivery needs idempotent consumers. Pipelines: same.

**COMMON MISTAKE:** Infinite retries hammering a failing dependency.

---

## E4. Design a URL shortener / feed (skeleton)

**Level:** Senior · **Source:** CS system design

**THE INTERVIEWER'S QUESTION:** Design a URL shortener.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Clarify read/write QPS, retention, custom aliases. API: create/redirect. Encode IDs (base62), store map in DB+cache, 301/302 choice, analytics async, rate limits, abuse. Estimate storage. Discuss hot keys and cache.

**COMMON MISTAKE:** Jumping to Kafka/K8s before requirements.

---

## E5. Design an internal docs Q&A bot (AI system)

**Level:** Senior · **Source:** AI.md Phases 15–18

**THE INTERVIEWER'S QUESTION:** Design a company docs assistant.

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Users/SLA → ingest connectors → chunk/metadata → hybrid retrieve → rerank → grounded generate with citations → feedback → eval suite → tracing/cost caps → access control by doc ACL → HITL for sensitive actions. MVP without agents; add tools later.

**COMMON MISTAKE:** Single "agent" box with no ACL/eval.

---

## E6. Explain a slow API (combined)

**Level:** Core · **Source:** Networks + CS + Data

**THE INTERVIEWER'S QUESTION:** API p99 latency spiked - how investigate?

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Split client vs network vs server. Metrics: RTT, DB time, queue time, GC, dependency calls. Check deploys, cache hit rate, DB plans, thread pool saturation, DNS/TLS session reuse, payload sizes. Correlate with traffic. Packet/trace only after narrowing.

**COMMON MISTAKE:** Scaling pods before measuring where time goes.

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

**Shape:** Point to roadmap method - bridges, small artifacts, evaluation tests - not "I watched 40 hours of video."

## F5. Prioritization under ambiguity

**Shape:** MVP slice with a metric; defer agent autonomy; instrument first. Product sense > buzzwords.

---

## 7-Day Spaced Drill Plan

| Day | Drill (speak aloud, timed) |
| --- | --- |
| 1 | A1–A9 or W1–W4 + one coding pattern |
| 2 | B2–B7 live SQL + W10 data/API follow-ups |
| 3 | C3–C14 + E1/W1 URL tour (5 & 12 min) |
| 4 | D1–D12 ML, W5–W8 frontend, G1–G5 cloud, or V1–V6 Git foundations |
| 5 | D14–D18 AI, W9–W14 backend, H1–H8 delivery/runtime, or V7–V13 Git collaboration/recovery |
| 6 | E4–E6 + W15–W16, G6–G10, H9–H12, or V14–V18 Git investigation/workflow/trust |
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

- [Applied AI Engineer Interviews 2026 (RAG/Agents/Evaluation Tests)](https://www.techinterview.org/post/3233476824/ai-engineer-interview-rag-agents-evals)
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

### Git and Version Control

- [Git reference documentation](https://git-scm.com/docs) and [Pro Git](https://git-scm.com/book/en/v2)
- [Learn Git Branching](https://learngitbranching.js.org/?locale=en_US), [Oh My Git!](https://ohmygit.org/), and [Git Katas](https://github.com/eficode-academy/git-katas)
- [Missing Semester: Version Control](https://www.youtube.com/watch?v=2sjqTHE0zok) and [Git Internals - Fear Not The SHA!](https://www.youtube.com/watch?v=P6jD966jzlk)
- [Google Code Review Developer Guide](https://google.github.io/eng-practices/review/) and [Trunk Based Development](https://trunkbaseddevelopment.com/)

### Your roadmaps (primary depth)

- [CS.md](../roadmaps/CS.md) · [Git.md](../roadmaps/Git.md) · [Data.md](../roadmaps/Data.md) · [Networks.md](../roadmaps/Networks.md) · [AI.md](../roadmaps/AI.md) · [Web.md](../roadmaps/Web.md) · [cloud.md](../roadmaps/Cloud.md) · [devops.md](../roadmaps/DevOps.md)

---

*End of Playbook. Cover the answer. Speak. Check follow-ups. If the "why" is fuzzy, return to the roadmap bridges - do not memorize harder.*
<a id="track-i"></a>

# Track I - IT Administration

**Source roadmap:** [`IT_Administration.md`](../roadmaps/IT_Administration.md) · **Answer model:** scope and impact → recent changes → evidence → layer-by-layer hypotheses → smallest safe test → mitigation → root cause → prevention → documentation and communication.

Do not jump straight to a command. State what you are authorized to change, how you will protect data/evidence, what would make you escalate, and how you will verify the user-facing outcome. Product-specific behavior and licenses vary; say when you would confirm current vendor documentation.

## I1. What does an IT administrator own, and how is the role different from help desk, systems, network, cloud, DevOps, security, and ERP development?

**Level:** Foundation · **Source:** IT Administration Phase 1

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** An IT administrator owns the connected daily environment: employee identities and access, endpoints, shared services, Microsoft 365 or other SaaS, networks, business applications, monitoring, patching, backup/recovery, tickets, assets, vendors, and documentation. Help desk usually starts with individual user restoration; a systems or network administrator goes deeper into servers or connectivity; cloud/DevOps engineers focus on cloud platforms or software delivery; security analysts focus on risk/detection/response; ERP developers change application code. Boundaries vary, so I clarify ownership and escalate with evidence instead of assuming.

**QUESTIONS THEY MAY ASK NEXT:** What should a junior own independently? When do you escalate? · **COMMON MISTAKE:** Defining the job as “fixing computers” or claiming one person owns every specialist domain.

---

## I2. Walk through an evidence-based troubleshooting method

**Level:** Foundation · **Source:** Phase 1

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I first establish safety, scope, impact, start time, affected users/sites/services, and recent changes. I separate observations from hypotheses, reproduce only if safe, then test from the nearest layer outward with the smallest reversible action. I mitigate user impact, preserve logs and timelines, verify the actual business function, communicate owner and next update, then document root cause and prevention. If authority, risk, or expertise is exceeded, I escalate with timestamps, commands, results, and what remains unknown.

**QUESTIONS THEY MAY ASK NEXT:** What if the user is angry? What if you cannot reproduce it? · **COMMON MISTAKE:** Rebooting, resetting, or reinstalling before collecting evidence.

---

## I3. Diagnose a Windows workstation that freezes intermittently

**Level:** Core · **Source:** Phases 2-3

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I confirm whether the whole device or one application freezes, the workload, timing, temperatures, storage pressure, peripherals, and recent driver/update changes. I preserve data, inspect Reliability Monitor/Event Viewer, Task Manager/Performance Monitor, disk health and free space, memory diagnostics, thermal behavior, driver/firmware support, and a clean/known-good peripheral test. I avoid destructive disk tests and unsupported Registry edits. I compare recurrence, warranty, downtime, security support, repair cost, and replacement risk, then validate with the original workload and update the asset record.

**QUESTIONS THEY MAY ASK NEXT:** SSD health says good-are you done? Repair or replace? · **COMMON MISTAKE:** Treating one diagnostic result as proof or ignoring data protection and warranty.

---

## I4. Troubleshoot a failing Linux service

**Level:** Core · **Source:** Phase 4

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I check service scope and recent package/config changes, then `systemctl status`, current-boot `journalctl`, configuration validation, process and listening socket, user/permissions, filesystem capacity/mounts, firewall, and upstream dependencies. I do not repeatedly restart because that can erase timing and worsen load. I make a reversible lab-tested correction, restart only when justified, verify the port and real request, watch logs, and document rollback. I use console recovery before changing SSH or firewall access remotely.

**QUESTIONS THEY MAY ASK NEXT:** Enabled versus active? What if SELinux denies it? · **COMMON MISTAKE:** Disabling SELinux/firewall or running everything as root to make the symptom disappear.

---

## I5. Explain DNS, DHCP, VLANs, VPNs, and firewalls as an administrator

**Level:** Core · **Source:** Phase 5

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** DHCP leases IP, mask, gateway, and DNS; DNS maps the service name to an address; the mask and route decide local versus gateway; switches/VLANs create local segmentation; routers move between networks; firewalls allow intended flows by addresses, ports, protocol, state, and sometimes application; a VPN authenticates and encrypts a path across an untrusted network. I test link, IP, gateway/route, DNS, port, TLS/protocol, and application in order. A VPN protects transit, not the endpoint, and a VLAN is not security unless routing policy enforces it.

**QUESTIONS THEY MAY ASK NEXT:** Why can ping fail while HTTPS works? Internet versus intranet? · **COMMON MISTAKE:** Calling every reachability failure “DNS” or opening broad firewall rules without a flow requirement.

---

## I6. Explain virtualization, snapshots, high availability, and backups

**Level:** Core · **Source:** Phases 6 and 11

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** A hypervisor schedules physical host resources for isolated guests and connects them through virtual switches. Type 1 runs at the hardware/platform layer; type 2 as a host application. A checkpoint records short-term VM state dependencies for controlled rollback but shares the host/storage failure domain, so it is not a backup. High availability can restart/move a workload after host failure but may preserve deletion or corruption. A backup is an independently protected recovery copy whose restore is tested against RPO, RTO, integrity, access, and application behavior.

**QUESTIONS THEY MAY ASK NEXT:** What does overcommitment look like? Clone versus template? · **COMMON MISTAKE:** Keeping long checkpoint chains or claiming replication/RAID is backup.

---

## I7. Design secure Windows file-share permissions

**Level:** Core · **Source:** Phase 7

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I model business roles as global groups, resource permissions as domain-local groups, nest role groups into resource groups, and assign NTFS rights to those groups. SMB share permissions and NTFS permissions both apply to network access; the effective result is the most restrictive allowed combination. I avoid per-user ACLs and broad deny entries, test allowed, denied, and read-only personas, audit where justified, monitor capacity, protect SMB, back up and restore, and document owner and review cadence.

**QUESTIONS THEY MAY ASK NEXT:** Why does local access work but network access fail? · **COMMON MISTAKE:** “Everyone Full Control” everywhere or using Domain Admin to test normal access.

---

## I8. Explain Active Directory and troubleshoot sign-in

**Level:** Core · **Source:** Phases 8-9

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** A forest is the top AD security boundary; a domain is an identity/policy boundary; DCs store and replicate directory data and rely on DNS; OUs support policy/delegation; users/computers/groups are objects. For one-user failure I compare account state, password/lockout, group/token, workstation, cached versus online sign-in, DC/DNS/time, and logs. If all users fail I immediately treat shared DNS/DC/network/time/replication/change as higher-probability and assess business impact. I avoid deleting/recreating accounts because that changes identifiers and access history.

**QUESTIONS THEY MAY ASK NEXT:** Authentication versus authorization? Why does time matter? · **COMMON MISTAKE:** Pointing domain clients at public DNS or using OUs as permission groups.

---

## I9. Explain Kerberos, NTLM, Group Policy, replication, and FSMO at a practical level

**Level:** Core · **Source:** Phase 9

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** Kerberos uses the DC/KDC to issue a ticket-granting ticket and service tickets; DNS, SPNs, time, trust, and DC reachability matter. NTLM is older challenge-response fallback that should be monitored/reduced carefully. Group Policy applies computer/user settings through local, site, domain, and OU processing plus inheritance, security/WMI filters, loopback, and client-side extensions. Replication distributes directory changes; FSMO roles coordinate operations that cannot safely be ordinary multi-master. For GPO failure I check object location/link/order, filtering, replication, DNS/DC, resultant set, and operational logs before changing policy.

**QUESTIONS THEY MAY ASK NEXT:** Why does `gpupdate /force` not fix design? What is a gMSA? · **COMMON MISTAKE:** Treating every DC as independent or seizing FSMO roles casually.

---

## I10. Run onboarding, role change, and offboarding safely

**Level:** Core · **Source:** Phases 9, 10, and 15

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I require an approved source of truth, manager, start/end time, role, groups, license, device, MFA, data, and expiry. On role change I remove incompatible/old access and verify the new role. On offboarding I confirm authority, disable sign-in, revoke sessions/tokens, remove privileged access, preserve/transfer data under retention policy, recover devices/licenses, notify owners, and monitor. Disabled is reversible; deletion waits for retention and ownership decisions. Automation defaults to dry run, validates input, logs per-item outcomes without secrets, and never deletes by default.

**QUESTIONS THEY MAY ASK NEXT:** What if the manager wants mailbox access? · **COMMON MISTAKE:** Only disabling the on-prem password while cloud sessions, VPN, SaaS, tokens, and shared secrets remain.

---

## I11. Contrast Entra ID, AD DS, Microsoft 365, and Intune

**Level:** Core · **Source:** Phase 10

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** AD DS is an on-prem/domain directory using DCs, LDAP, Kerberos/NTLM, domain join, and GPO. Microsoft Entra ID is cloud identity/access using modern tokens, cloud roles, application/device objects, sign-in/audit logs, MFA, and Conditional Access. Microsoft 365 adds service administration and licenses for Exchange, Teams, SharePoint, and OneDrive. Intune enrolls devices and applies compliance/configuration/app/remote actions. Hybrid identity connects lifecycle but adds synchronization and dependency risk. If sign-in succeeds but email fails, I check Conditional Access/token, license, mailbox/service authorization and health-not reset the password automatically.

**QUESTIONS THEY MAY ASK NEXT:** What needs a paid license? Emergency access? · **COMMON MISTAKE:** Calling Entra a hosted DC or deploying a broad Conditional Access rule without report-only/pilot and emergency access.

---

## I12. Design and prove backup and disaster recovery

**Level:** Core · **Source:** Phase 11

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I inventory data and dependencies, derive RPO/RTO from business impact, choose application-consistent methods, and keep at least three copies across two media/failure types with one off-site plus offline/immutable protection where feasible. I separate and protect backup credentials, encrypt, monitor jobs/capacity, define retention, and test restores to isolation. Verification includes hashes or database checks, permissions, application transactions, dependency order, recovered point and elapsed time. A green job does not prove recoverability; the restore runbook and evidence do.

**QUESTIONS THEY MAY ASK NEXT:** Incremental versus differential? Bare metal? · **COMMON MISTAKE:** Restoring over production first or backing up an ERP database without its filestore/configuration.

---

## I13. Triage a slow or unavailable ERP

**Level:** Core · **Source:** Phase 12

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I establish scope by user, department, transaction, time, and recent change. I trace browser/DNS/TLS/proxy, ERP app workers and logs, database connection/locks/slow queries/capacity, filestore, permissions, scheduled jobs, email/integrations, and custom modules. I compare health and saturation rather than guessing. I mitigate safely, avoid direct production SQL or reinstalling, and escalate to DBA, developer, or vendor with versions, timestamps, reproduction, logs, actions, and backup status. Recovery validates database plus files and a business transaction.

**QUESTIONS THEY MAY ASK NEXT:** Website works but DB connection fails? Missing attachments? · **COMMON MISTAKE:** Confusing ERP administration with code customization or restoring only the database.

---

## I14. Secure administrator access and respond to phishing/ransomware

**Level:** Core · **Source:** Phase 13

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I separate daily/admin accounts, enforce MFA and least privilege, protect remote access, patch and baseline endpoints/servers, use EDR/host firewalls/encryption, manage secrets, centralize time/logs, and protect immutable/offline recoverable backups. For phishing I preserve messages/headers and sign-in evidence, scope recipients and actions, contain approved indicators/accounts, revoke/rotate based on exposure, communicate, and monitor. For ransomware I isolate affected systems without destroying evidence, activate incident authority, determine scope, rebuild from known-clean sources, restore in priority order, validate, and learn. Legal/regulatory/insurance steps follow policy.

**QUESTIONS THEY MAY ASK NEXT:** Pull the power? Pay ransom? · **COMMON MISTAKE:** Running offensive tools, deleting evidence, mass-resetting without scope, or reconnecting restored systems before cause/containment is understood.

---

## I15. Build monitoring, patching, automation, and ITSM as one operating loop

**Level:** Senior · **Source:** Phases 14-16

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I monitor user outcomes and dependencies-service response, capacity, certificate expiry, backup and ERP jobs-not every metric. Alerts need owner, severity, time window, runbook, and actionable threshold. Patching uses inventory, risk/compatibility, pilot rings, backup/rollback, maintenance communication, deploy/restart, and business verification. Automation validates inputs, queries current state, supports dry run, is idempotent, least-privileged, logged, bounded, and rollback-capable. Tickets classify incident/request/problem/change, prioritize by impact and urgency, preserve communication and evidence, and update assets, configuration, and knowledge after closure.

**QUESTIONS THEY MAY ASK NEXT:** How do you reduce alert fatigue? Partial automation failure? · **COMMON MISTAKE:** Calling command success service success, or automating a broken undocumented procedure.

---

## I16. Design a small-company IT environment

**Level:** Senior · **Source:** Phases 16-18

**A CLEAR ANSWER YOU CAN SAY OUT LOUD:** I begin with departments, users, business services, data sensitivity, availability/RPO/RTO, budget, sites, remote work, regulations, and team/vendor maturity. Then I design identity and separate admin paths, endpoints/lifecycle, segmented wired/Wi-Fi/VPN/firewall/DNS/DHCP, virtualized Windows/Linux services, group-based storage, ERP/database/filestore, Microsoft cloud boundaries, monitoring, patching, protected backups and restore tests, ITSM/assets/licenses/vendors, diagrams/runbooks, and a hybrid/cloud migration path. For every component I name owner, dependency, security control, health signal, capacity/cost, backup, restore, and rollback. I deliver an executive risk view and technical handover.

**QUESTIONS THEY MAY ASK NEXT:** What do you cut on a small budget? Single host? · **COMMON MISTAKE:** Starting with products, building a single flat network, or drawing redundancy without tested recovery and operational ownership.

---

## IT Administrator Live Troubleshooting Drills

For every case, answer aloud using the nine-step model at the top of Track I. The “first discriminating evidence” is not the entire solution; it is the safest observation that separates major branches.

| Scenario | First discriminating evidence | Important branches and traps |
| --- | --- | --- |
| One user cannot sign in | Exact error, device, online/cached scope, account state, recent change | Do not recreate account; compare another user/device, DNS/time/DC, lockout, token/groups. |
| All users cannot sign in | Site/service scope and DC/DNS/network/time health | Treat as major shared dependency; check recent identity/network change and emergency access. |
| Internet works by IP but not hostname | Resolver configuration and direct query to expected DNS | DNS server/record/suffix/cache/hosts; do not open firewall broadly. |
| Shared folder suddenly inaccessible | Who/where, name resolution, SMB reachability, token and effective ACL | Share versus NTFS, group change, server/storage, Kerberos; do not test as Domain Admin only. |
| Group Policy does not apply | Object OU, link/order, security filter, `gpresult`, operational log | Replication/DNS/DC/time/client extension; `gpupdate` is evidence, not a design fix. |
| Printer works for one department only | Queue/server/driver/path plus department group/VLAN/firewall policy | Separate physical/queue/driver/permission/network layers. |
| Disk space is nearly full | Filesystem, growth rate, largest categories, service impact | Do not delete unknown logs/data; protect backup/retention, mitigate then capacity-plan. |
| Service stops after an update | Timeline, unit/service event logs, config/dependency/version | Use rollback criteria, not endless restarts; verify real transaction afterward. |
| ERP is slow | Scope by transaction/user/time and app/DB/storage/integration saturation | Slow is not down; preserve queries/logs; avoid unsupported SQL/index changes. |
| ERP web works but DB fails | App connection error, DB service/port/auth/TLS/capacity/log | Protect credentials; distinguish network refusal, auth denial, saturation, migration/version. |
| Backup says success but restore fails | Exact restore step, dependency, chain/catalog/key, isolated target | Job success is not recovery; preserve backup, fix runbook, report RPO/RTO gap. |
| Former employee still has access | Which identity/session/app/resource and offboarding evidence | Disable/revoke/remove privilege, preserve/transfer data, investigate process gap. |
| Multiple users receive phishing | Preserve message/headers, recipient/action scope, sign-in evidence | Approved containment, token/session risk, communication; do not forward dangerous content casually. |
| Server certificate is expiring | Certificate identity, service binding, chain, owner, expiry/renewal method | Renew, deploy, restart only if needed, validate clients/monitoring, record next renewal. |
| Admin changed production accidentally | Scope, exact change/time, audit/diff, current impact, rollback readiness | Stop further drift, preserve evidence, mitigate/rollback with authority, review guardrails-not blame. |
| Remote office loses connectivity | Power/link, local gateway, WAN/VPN, DNS, provider scope, last change | Compare internet versus private routes, one/all sites, failover, ISP escalation evidence. |

## Behavioral and Operational Questions

1. Tell me about a time you slowed down an urgent request to protect data or evidence.
2. Describe an error you made with elevated access and the guardrail you added afterward.
3. Explain a disagreement with a vendor or user using evidence and business impact.
4. Tell me how you prioritize a VIP request against a wider lower-severity incident.
5. Describe documentation that allowed someone else to recover a service without you.
6. Explain when you escalated early and when you persisted independently.
7. Describe a repetitive task you automated and how you prevented scaled mistakes.
8. Explain a backup or maintenance test that exposed a hidden assumption.

Use STAR, but include technical evidence, risk, communication, and a changed operating control. “I worked hard and fixed it” is not a complete operational story.

## Live Exercises and Interview Traps

- **Command exercise:** given Windows/Linux outputs, identify observations before fixes. Trap: treating warnings, stopped manual services, or blocked ping as automatic root cause.
- **Access exercise:** design HR/Finance/Management shares. Trap: direct user ACLs, broad denies, or daily Domain Admin.
- **Automation exercise:** review CSV onboarding pseudocode. Trap: no schema validation, no dry run, hard-coded secret, delete-on-error, or all-or-nothing logging.
- **Recovery exercise:** choose RPO/RTO and demonstrate restore order for AD, file service, database, filestore, ERP, and integrations. Trap: confusing HA/RAID/replication with backup.
- **Change exercise:** patch a server with users waiting. Trap: no approval, backup, maintenance notice, compatibility test, rollback trigger, or business validation.
- **Incident exercise:** triage phishing/ransomware. Trap: destructive containment, unsupported attribution, hidden uncertainty, or missing legal/leadership escalation.
- **System-design exercise:** build Northstar Services. Trap: naming products before requirements, uncontrolled cloud cost, single flat trust zone, no owners/runbooks, or fake enterprise claims.

## Track I Completion Drill

Choose three scenarios at random. Give a 90-second triage answer, draw the relevant flow, name the first five evidence sources, state one unsafe action, define mitigation and rollback, and finish with prevention and user/leadership communication. Then present the [IT Administration capstone](../guides/Projects.md#it-admin-main-portfolio-project) in five minutes with one access test, one alert, one restore, one change, and one honest limitation.
