# Interview Help

**Mohammad Bilal's zero-to-hero interview preparation roadmaps** — self-paced paths from first principles to hire-ready skill, told as one continuous chain of discoveries.

This repo is not a bag of random notes. Each concept exists because the previous one hit a wall. You learn *why* something was invented, how it works, what it costs, and what limitation forces the next idea.

There are **no week clocks**. Progress means: *can I explain why the last concept wasn't enough, and how this one fixes it?*

---

## What's inside

| File | Track | Who it's for |
|------|--------|--------------|
| [`CS.md`](./CS.md) | Computer Science & Software Engineering | Backend / full-stack / general SWE interviews |
| [`Data.md`](./Data.md) | Data Analyst & Data Engineer | Analytics, SQL, pipelines, warehouses, Spark/Kafka |
| [`Networks.md`](./Networks.md) | Computer Networks | Network/infra engineers and SWEs who must understand the stack |
| [`AI.md`](./AI.md) | Artificial Intelligence & Machine Learning | ML practitioners and AI engineers shipping LLM apps |
| [`Interview.md`](./Interview.md) | Combined Interview Playbook | Spoken Q&A drill across all four tracks |

All four roadmaps use the **same teaching rhythm**. [`Interview.md`](./Interview.md) is the speak-aloud gym built from those tracks.

---

## How every concept is taught

Each roadmap section follows the same shape so you always know where to look:

| Section | Purpose |
|---------|---------|
| **Why this exists** | The wall the previous idea hit |
| **The problem before** | What broke without this concept |
| **Visual learning** | Videos, interactive tools, docs, GitHub, practice |
| **Detailed explanation** | Mechanics in plain prose |
| **The idea that fixed it** | The compact insight |
| **Internal working** | Step-by-step + ASCII diagrams |
| **Real-world analogy** | Hold the idea without a screen |
| **Complexity / trade-offs** | What you gain and what it costs |
| **Code implementation** | Minimal runnable example |
| **Interview perspective** | How this gets tested |
| **Practice problems** | Easy → Medium → Hard |
| **The bridge** | The crack that forces the next concept |

**First pass:** read in order — the document is one argument, not a wiki.  
**Revision:** jump straight to *Why this exists* and *The bridge*; those two rebuild the reasoning.

---

## Track 1 — Computer Science & Software Engineering

**File:** [`CS.md`](./CS.md)  
**Scope:** ~53 concepts across **20 phases** — programming foundations through distributed systems and mock interviews.

```
Foundations → Data structures & algorithms → Systems → Web & data → Design → Hire
```

| # | Phase | Goal |
|--:|-------|------|
| 01 | Programming Foundations | What happens when code runs |
| 02 | Complexity Analysis | Big O as a measuring stick |
| 03 | Linear Data Structures | Arrays, lists, stacks, queues |
| 04 | Recursion | Call stack and base cases |
| 05 | Hierarchical & Priority Structures | Trees, BSTs, heaps |
| 06 | Hashing | O(1) “have I seen this?” |
| 07 | Sorting & Binary Search | Impose and exploit order |
| 08 | Graphs | BFS, DFS, relationships |
| 09 | Algorithmic Patterns | DP, greedy, backtracking |
| 10 | OOP & Low-Level Design | SOLID and class design |
| 11 | Operating Systems | Processes, threads, memory |
| 12 | Computer Networks | Packets, TCP/UDP, DNS |
| 13 | Web, HTTP & APIs | REST and the request path |
| 14 | Databases & Data Modeling | SQL, schemas, indexes |
| 15 | Authentication & Security | Passwords, sessions, JWT, injection |
| 16 | Software Engineering & Testing | Tests that make change safe |
| 17 | System Design & Scalability | Caching, sharding, load balancing |
| 18 | Distributed Systems | CAP, consensus, failure |
| 19 | Projects | Build proof across phases |
| 20 | Interview Mastery | Coding + design + behavioral |

---

## Track 2 — Data Analyst & Data Engineer

**File:** [`Data.md`](./Data.md)  
**Scope:** **20 phases** — from data thinking to portfolio and interviews.

```
Analyst core (1–10) → Engineering depth (11–18) → Portfolio & hire (19–20)
```

- **Analyst path:** finish through Phase 10, skim 11–12, then jump to 19–20.  
- **Engineer path:** do not skip the analyst phases — pipelines without metric literacy produce data nobody trusts.

| # | Phase | Goal |
|--:|-------|------|
| 01 | Data Thinking | Event → decision; analyst vs engineer |
| 02 | Spreadsheets & Literacy | Dirty tables, PivotTables |
| 03 | Python for Data | Automate beyond the sheet |
| 04 | SQL Foundations | SELECT, WHERE, NULL literacy |
| 05 | Joins & Aggregations | Combine and summarize correctly |
| 06 | Advanced SQL | CTEs and window functions |
| 07 | Statistics | Signal vs noise, A/B literacy |
| 08 | Pandas | Clean, join, group, reshape |
| 09 | Visualization | Honest charts that persuade |
| 10 | EDA & Metrics | Insight memos that drive decisions |
| 11 | Relational Modeling | OLTP schemas and indexes |
| 12 | Warehouse & Dimensional | Star schemas, SCDs |
| 13 | ETL/ELT & Formats | Move and store efficiently |
| 14 | Orchestration & Containers | Airflow, Docker, retries |
| 15 | dbt & Analytics Eng | Tested warehouse transforms |
| 16 | Cloud Platforms | Batch / lake / warehouse on cloud |
| 17 | Spark | Beyond one machine |
| 18 | Kafka Streaming | Near-real-time events |
| 19 | Portfolio & Quality | Public proof + data quality |
| 20 | Interviews | SQL + case + design out loud |

---

## Track 3 — Computer Networks

**File:** [`Networks.md`](./Networks.md)  
**Scope:** **40 concepts · 20 phases** — packet switching through BGP, labs, and interviews.

```
Bits → Packets → Routes → Apps → Scale → Hire
```

- **Software engineer path:** finish through Phase 14 carefully, then skim 15–18 for production vocabulary.  
- **Network / infra path:** do not skip sockets and HTTP — apps and networks fail together.

| # | Phase | Goal |
|--:|-------|------|
| 01 | Network Thinking | Shared unreliable pipes; latency vs bandwidth |
| 02 | Physical Layer | How bits move on a medium |
| 03 | Data Link & Ethernet | Frames, MAC, CRC on one segment |
| 04 | Switching & VLANs | MAC learning; split broadcast domains |
| 05 | IP & Subnetting | Global addressing and CIDR plans |
| 06 | Routing | Longest-prefix match; RIP / OSPF / BGP roles |
| 07 | ARP / DHCP / ICMP / NAT | Make IP usable on real LANs |
| 08 | Layered Models | OSI / TCP-IP; encapsulation end to end |
| 09 | UDP | Minimal datagrams and their costs |
| 10 | TCP | Handshake, ACKs, flow vs congestion control |
| 11 | Sockets | Program the transport four-tuple |
| 12 | DNS | Recursive lookup and common records |
| 13 | HTTP | Raw HTTP/1.1 and what /2 /3 change |
| 14 | TLS & HTTPS | Handshake goals and certificates |
| 15 | Wireshark | Capture and filter the failing exchange |
| 16 | Wireless (Wi-Fi) | Shared medium, interference, association |
| 17 | CDN, LB & Edge | Scale services at the edge |
| 18 | BGP & Internet | AS, peering, policy over shortest path |
| 19 | Labs & Portfolio | Captures, labs, public write-ups |
| 20 | Interviews | Narrate “what happens when you type a URL” |

---

## Track 4 — Artificial Intelligence & Machine Learning

**File:** [`AI.md`](./AI.md)  
**Scope:** **40 concepts · 20 phases** — math intuition through transformers, RAG, agents, MLOps, and hire.

```
Data → Learn → Deep → Transformers → Ship → Hire
```

- **AI engineer (LLM apps) path:** do not skip Phases 4–8 — loss and overfitting still kill demos.  
- **ML / research path:** still finish eval and shipping phases — models that never meet users are incomplete.

| # | Phase | Goal |
|--:|-------|------|
| 01 | AI Thinking | Learning as fitting from data |
| 02 | Math for ML | Gradients, expectation, loss intuition |
| 03 | Python for AI | Arrays and clean train matrices |
| 04 | Classical ML | Linear/logistic baselines; overfitting |
| 05 | Evaluation | Metrics that matter; leakage |
| 06 | Trees & Ensembles | Bagging vs boosting |
| 07 | Neural Nets Basics | Compose differentiable layers |
| 08 | Backprop & Optimizers | Train by gradient descent |
| 09 | PyTorch Practice | Real training loops with autograd |
| 10 | CNNs & Vision | Convolution + transfer learning |
| 11 | Sequences | RNNs and the limits that force transformers |
| 12 | Embeddings | Meaning as vectors; cosine similarity |
| 13 | Transformers | Attention, Q/K/V, multi-head |
| 14 | LLMs & Prompting | Prompts with named failure modes |
| 15 | RAG | Chunk → embed → retrieve → generate |
| 16 | Fine-tuning | LoRA vs full FT vs RAG |
| 17 | Agents | Tool-using loops, safely |
| 18 | Eval, Safety & MLOps | Evals, tracing, guardrails |
| 19 | Portfolio | Projects with metrics |
| 20 | Interviews | Explain systems end-to-end under pressure |

---

## Interview Playbook

**File:** [`Interview.md`](./Interview.md)  
**Scope:** Combined spoken Q&A across all four roadmaps — strong answers, speak-aloud structure, follow-ups, and traps.

| Track | Focus | Approx. Q count |
|-------|--------|----------------:|
| A | Computer Science & Software Engineering | 18 |
| B | Data Analyst & Data Engineer | 16 |
| C | Computer Networks | 16 |
| D | AI / ML / LLM Engineering | 18 |
| E | Cross-cutting classics (URL bar, debug, design) | 6 |
| F | Behavioral / STAR | 5 |

**How to practice:** cover the answer → speak 60–120 seconds → check structure → answer one follow-up cold. If you cannot explain *why it exists*, return to the linked roadmap phase.

---

## How to use this repo

1. Pick a primary track: [`CS.md`](./CS.md), [`Data.md`](./Data.md), [`Networks.md`](./Networks.md), or [`AI.md`](./AI.md).
2. Start at Phase 1. Do not skip bridges on the first pass.
3. Use mastery checkpoints before moving on.
4. When revising, search by phase title or jump via the phase index at the top of each file.
5. Drill spoken answers in [`Interview.md`](./Interview.md) — interview sections are meant to be spoken, not only read.

**Role routing (quick)**

| Role | Start with | Then drill |
|------|------------|------------|
| Software Engineer | `CS.md` | `Networks.md` essentials + `Interview.md` A/C/F |
| Data Analyst | `Data.md` (through Phase 10) | `Interview.md` B |
| Data Engineer | `Data.md` full | `Interview.md` B + reliability |
| Network / Infra | `Networks.md` | `Interview.md` C + F |
| AI / ML Engineer | `AI.md` | `Interview.md` D + A complexity literacy |

---

## Philosophy in one line

> Every topic is a *reaction* to the topic before it — not a checklist item to cover.

---

## Author

**Mohammad Bilal** — Interview Help roadmaps for software engineering, data, networks, and AI careers.
