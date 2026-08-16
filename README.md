# Interview Help

**Mohammad Bilal's zero-to-hero interview preparation roadmaps** - self-paced paths from first principles to hire-ready skill, told as a connected story in which each new idea solves a problem left by the previous one.

This repo is not a bag of random notes. Each concept exists because the previous one reached a practical limit. You learn *why* something was invented, how it works, what it costs, and what limitation forces the next idea.

There are **no artificial weekly deadline**. Progress means: *can I explain why the last concept wasn't enough, and how this one fixes it?*

---

## Start here if this is your first technical roadmap

A **roadmap** is an ordered learning guide. A **phase** is one manageable group of related ideas, and a **project** is a small working result that helps you practice those ideas. You do not need to understand the abbreviated job titles or tool names on this page yet. Choose the path closest to the work you want to try, open its first phase, and follow the examples in order.

Use this learning loop throughout the repository: read the problem in plain language, run the smallest example, change something, explain the result aloud, and complete the matching mini-project. Confusion on the first attempt is not failure. Repeat the example until you can describe what happened without copying the document's wording.

**Common abbreviations on this page:** **SWE** means software engineer; **OOP** means object-oriented programming; **DSA** means data structures and algorithms; **LLM** means large language model; **SOC** means security operations center; **ERP** means enterprise resource planning; **API** means an agreed way for programs to communicate; **CI/CD** means automated checking and delivery of software changes; **SRE** means site reliability engineering; **IaC** means infrastructure as code; and **LLD** means low-level design, or planning the classes and smaller parts inside a software system.

## What's inside

| File | Track | Who it's for |
|------|--------|--------------|
| [`CS.md`](./CS.md) | Computer Science & Software Engineering | Backend / full-stack / general SWE interviews |
| [`OOP.md`](./OOP.md) | Programming Fundamentals + OOP | Absolute beginners through SOLID, patterns, LLD (before CS Phase 3) |
| [`Data.md`](./Data.md) | Data Analyst & Data Engineer | Analytics, SQL, pipelines, warehouses, Spark/Kafka |
| [`Networks.md`](./Networks.md) | Computer Networks | Network/infra engineers and SWEs who must understand the stack |
| [`AI.md`](./AI.md) | Artificial Intelligence & Machine Learning | ML practitioners and AI engineers releasing LLM applications that people can use |
| [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md) | ICT / Cybersecurity Engineer | Security engineers, SOC/blue team, and junior pentesters |
| [`ODOO.md`](./ODOO.md) | Odoo Engineer / ERP Developer | Custom modules, ORM, XML, OWL, PostgreSQL, integrations |
| [`Web.md`](./Web.md) | Web Developer | Frontend, backend, full-stack, REST API, and production web roles |
| [`cloud.md`](./cloud.md) | Cloud Engineer | Provider-aware cloud architecture, operations, security, reliability, FinOps, and migration |
| [`devops.md`](./devops.md) | DevOps Engineer | Linux, delivery automation, CI/CD, containers, Kubernetes, IaC, SRE, and platform engineering |
| [`Projects.md`](./Projects.md) | Projects Playbook | Small builds that cement every roadmap |
| [`Interview.md`](./Interview.md) | Combined Interview Playbook | Spoken Q&A drill across the roadmaps |

All roadmaps use the **same teaching rhythm**. [`Projects.md`](./Projects.md) is how you prove it. [`Interview.md`](./Interview.md) is the place to practice answers aloud.

---

## How every concept is taught

Each roadmap section follows the same shape so you always know where to look:

| Section | Purpose |
|---------|---------|
| **Why this exists** | The wall the previous idea hit |
| **The problem before** | What broke without this concept |
| **Visual learning** | Videos, interactive tools, docs, GitHub, practice |
| **Detailed explanation** | The internal steps explained in plain language |
| **The idea that fixed it** | The main idea in one clear sentence |
| **Internal working** | Step-by-step + ASCII diagrams |
| **Real-world analogy** | Hold the idea without a screen |
| **Complexity / trade-offs** | What you gain and what it costs |
| **Code implementation** | Minimal runnable example |
| **Interview perspective** | How this gets tested |
| **Practice problems** | Easy → Medium → Hard |
| **Why the next topic is needed** | The problem that remains and leads to the next idea |

**First pass:** read in order - the document is one connected explanation, not a page of unrelated definitions.

**Revision:** jump straight to *Why you are learning this* and *Why the next topic is needed*; those two rebuild the reasoning.

**Practice:** after each phase, open its matching card in [`Projects.md`](./Projects.md) and follow the build steps.

---

## Suggested learning order

**SWE path**

```
CS Phases 1-2  →  OOP.md (Part 0 fundamentals + Phases 1-20)  →  CS Phase 3+
                 →  Projects.md along the way
                 →  Networks.md essentials when systems start
                 →  Interview.md before applications
```

**Odoo path:** finish [`OOP.md`](./OOP.md) (including Part 0), then [`ODOO.md`](./ODOO.md), and build the matching Odoo phase projects from [`Projects.md`](./Projects.md).

**Web developer path:** learn programming fundamentals in [`OOP.md`](./OOP.md) Part 0, then follow [`Web.md`](./Web.md) from browser fundamentals through frontend/backend tools, REST APIs, security, testing, and deployment. Pair Phase 1/6 with [`Networks.md`](./Networks.md), Phase 13 with [`Data.md`](./Data.md), and follow the matching Web phase builds in [`Projects.md`](./Projects.md).

**Cloud engineer path:** learn Linux and network fundamentals in [`cloud.md`](./cloud.md) Phases 1-2, deepen packet and systems reasoning with [`Networks.md`](./Networks.md) and [`CS.md`](./CS.md) Phases 11-12, then complete cloud identity, networking, data, security, reliability, FinOps, and migration. Follow the matching Cloud phase builds, then practice Interview Track G.

**DevOps engineer path:** follow [`devops.md`](./devops.md) from delivery flow through Linux, Git, automation, CI/CD, containers, Kubernetes, IaC, observability, SRE, DevSecOps, GitOps, and incidents. Pair Phase 13 with [`cloud.md`](./cloud.md), follow the matching DevOps phase builds, and practice Interview Track H.

**Cybersecurity path:** start [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md) Phase 1. Pair it with [`Networks.md`](./Networks.md) when packet behavior becomes more detailed. Practice only in authorized labs (PortSwigger, TryHackMe, HTB, or your own home lab), then practice the Phase 20 interviews.

```
Mindset → Networks/OS → Crypto/IAM → Web/Defend → Detect/Respond → Cloud → Portfolio → Hire
```

- **SOC / blue:** Phases 1-6, 8-10, 13-14, 19-20 (skim 7 and 11 for attacker empathy).  
- **Security engineer:** Phases 1-10, 15-16, 18-20 (heavy AppSec + cloud + DevSecOps).  
- **Pentest / red:** Phases 1-7, 10-12, 19-20 (never skip ethics; certs after lab hours).

---

## Track 1 - Computer Science & Software Engineering

**File:** [`CS.md`](./CS.md)  
**Scope:** ~53 concepts across **20 phases** - programming foundations through distributed systems and mock interviews.

```
Foundations → Data structures & algorithms → Systems → Web & data → Design → Hire
```

| # | Phase | Goal |
|--:|-------|------|
| 01 | Programming Foundations | What happens when code runs |
| 02 | Complexity Analysis | Big O as a measuring stick |
| - | → park here and do [`OOP.md`](./OOP.md) | Fundamentals + classes before Node/List/Tree types |
| 03 | Linear Data Structures | Arrays, lists, stacks, queues |
| 04 | Recursion | Call stack and base cases |
| 05 | Hierarchical & Priority Structures | Trees, BSTs, heaps |
| 06 | Hashing | O(1) "have I seen this?" |
| 07 | Sorting & Binary Search | Impose and exploit order |
| 08 | Graphs | BFS, DFS, relationships |
| 09 | Algorithmic Patterns | DP, greedy, backtracking |
| 10 | OOP & Low-Level Design | Revision if you already finished [`OOP.md`](./OOP.md) |
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

## Companion - Programming Fundamentals & OOP

**File:** [`OOP.md`](./OOP.md)  
**Scope:** **Part 0 fundamentals** + **40 OOP concepts · 20 phases** - from first Python script through SOLID, patterns, LLD, and interviews.

```
Code basics → Think → Pillars → SOLID → Patterns → LLD → Hire
```

**When to use it:** start here if you are new to coding (Part 0). Otherwise after [`CS.md`](./CS.md) Phases 1-2, **before** CS Phase 3. CS Phase 10 then becomes revision, not first exposure.

| # | Phase | Goal |
|--:|-------|------|
| F1 | How Programs Run | Interpreter, variables, types |
| F2 | Control Flow | if/else and loops |
| F3 | Functions & Modules | Reuse and organize files |
| 01 | Object Thinking | Why procedural hits a wall |
| 02 | Classes & Objects | Blueprint vs instance on the heap |
| 03 | State & Behavior | Attrs, methods, `__init__`, `self` |
| 04 | Encapsulation | Hide state; protect invariants |
| 05 | Abstraction | ABCs / contracts; what vs how |
| 06 | Inheritance | is-a reuse and MRO - carefully |
| 07 | Polymorphism | Same call, different behavior |
| 08 | Composition over Inheritance | Prefer has-a when coupling hurts |
| 09 | Python Power Tools | Dunders, properties, classmethods |
| 10 | Relationships & Modeling | CRC cards and lightweight UML |
| 11 | Smells & Refactoring | Spot God objects early |
| 12 | SOLID | Five principles that localize change |
| 13 | Creational Patterns | Factory, Singleton, Builder |
| 14 | Structural Patterns | Adapter, Decorator, Facade |
| 15 | Behavioral Patterns | Strategy, Observer, Command |
| 16 | Testing OOP | Fakes via dependency inversion |
| 17 | Layers & Clean-ish Architecture | Keep policy independent of I/O |
| 18 | LLD Method | Design under interview pressure |
| 19 | Portfolio | Finish complete designs that you can explain clearly |
| 20 | Interviews | Speak pillars, SOLID, and trade-offs |

---

## Track 2 - Data Analyst & Data Engineer

**File:** [`Data.md`](./Data.md)  
**Scope:** **20 phases** - from data thinking to portfolio and interviews.

```
Analyst core (1-10) → Engineering depth (11-18) → Portfolio & hire (19-20)
```

- **Analyst path:** finish through Phase 10, skim 11-12, then jump to 19-20.  
- **Engineer path:** do not skip the analyst phases - pipelines without metric literacy produce data nobody trusts.

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

## Track 3 - Computer Networks

**File:** [`Networks.md`](./Networks.md)  
**Scope:** **40 concepts · 20 phases** - packet switching through BGP, labs, and interviews.

```
Bits → Packets → Routes → Apps → Scale → Hire
```

- **Software engineer path:** finish through Phase 14 carefully, then skim 15-18 for production vocabulary.  
- **Network / infra path:** do not skip sockets and HTTP - apps and networks fail together.

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
| 20 | Interviews | Narrate "what happens when you type a URL" |

---

## Track 4 - Artificial Intelligence & Machine Learning

**File:** [`AI.md`](./AI.md)  
**Scope:** **40 concepts · 20 phases** - math intuition through transformers, RAG, agents, MLOps, and hire.

```
Data → Learn → Deep learning → Transformers → Release a usable system → Get hired
```

- **AI engineer (LLM apps) path:** do not skip Phases 4-8 - loss and overfitting still kill demos.  
- **ML / research path:** still finish the evaluation and release phases. A model that never reaches real users has not faced real conditions.

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
| 18 | Eval, Safety & MLOps | Evaluation tests, tracing, safety checks and limits |
| 19 | Portfolio | Projects with metrics |
| 20 | Interviews | Explain systems end-to-end under pressure |

---

## Track 5 - ICT / Cybersecurity Engineer

**File:** [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md)  
**Scope:** **40 concepts · 20 phases** - security mindset through networking, crypto, identity, OWASP, pentest, AD, SOC/SIEM, DFIR, cloud/K8s, GRC, and hire.

```
Foundations → Defend → Attack → Detect → Respond → Hire
```

- **SOC / blue path:** heavy on Phases 13-14; still learn web and identity so alerts make sense.  
- **Security engineer path:** heavy on 7, 15-16, 18; still practice authorized labs.  
- **Red / pentest path:** heavy on 7, 11-12; never skip ethics and scope. Practice only on authorized targets.

| # | Phase | Goal |
|--:|-------|------|
| 01 | Security Mindset | CIA, AAA, risk, ethics |
| 02 | Networking for Security | Packets, ports, segmentation |
| 03 | Linux & Windows | CLI, permissions, logs |
| 04 | Cryptography | Hash, encrypt, sign, TLS |
| 05 | Identity & Access | AuthN/AuthZ, MFA, least privilege |
| 06 | Threat Modeling & ATT&CK | STRIDE + shared TTP map |
| 07 | Web App Security | OWASP, PortSwigger labs |
| 08 | Network Defenses | Firewalls, VPN, IDS/IPS |
| 09 | Hardening & Endpoints | Baselines, EDR intuition |
| 10 | Vuln Management | Scan, prioritize, patch |
| 11 | Pentest Methodology | Scoped recon → report |
| 12 | Active Directory | Kerberos, lateral themes, defenses |
| 13 | SOC / SIEM / Detection | Logs, Sigma, ATT&CK rules |
| 14 | DFIR | Triage, forensics, IR lifecycle |
| 15 | Cloud Security | Shared responsibility, IAM |
| 16 | Containers & DevSecOps | K8s hardening, CI gates |
| 17 | Malware Basics | Safe static/dynamic triage |
| 18 | GRC & Risk | Policies, frameworks, registers |
| 19 | Portfolio & Labs | Writeups, home lab, detections |
| 20 | Interviews | Technical drills + security design |

**Anchor labs / refs:** [PortSwigger Academy](https://portswigger.net/web-security) · [OWASP Top 10](https://owasp.org/Top10/) · [MITRE ATT&CK](https://attack.mitre.org/) · TryHackMe / HTB · HackTricks · Sigma · Juice Shop

---

## Track 6 - Odoo Engineer (ERP)

**File:** [`ODOO.md`](./ODOO.md)  
**Scope:** **40 concepts · 20 phases** - ERP thinking through modules, ORM, security, views, HTTP, OWL, PostgreSQL, and hire.

```
ERP → Modules → ORM → User interface → Web requests → Release a working module → Get hired
```

**Prerequisites:** Python + [`OOP.md`](./OOP.md). Odoo is Python OOP when the amount of work grows with XML, JS (OWL), and PostgreSQL.

| # | Phase | Goal |
|--:|-------|------|
| 01 | Odoo Thinking / What ERP Is | Why companies need modular business apps |
| 02 | Architecture (3-tier) | PostgreSQL, Python server, web client |
| 03 | Dev Environment Setup | Local Odoo you can restart and debug |
| 04 | Module Anatomy | `__manifest__`, structure, installable addons |
| 05 | Models & Fields | ORM models that map to tables |
| 06 | ORM Queries | search, browse, create, write, unlink |
| 07 | Record Rules & Access | Security CSV and ir.model.access |
| 08 | Views XML | form, tree, search, kanban |
| 09 | Actions & Menus | How users reach your screens |
| 10 | Business Logic | computed, related, onchange, constraints |
| 11 | Inheritance | Python `_inherit` and XML xpath |
| 12 | Wizards & Transient Models | Short-lived UI workflows |
| 13 | Controllers & HTTP / Webhooks | Inbound HTTP into Odoo |
| 14 | External API | XML-RPC / JSON patterns to talk to Odoo |
| 15 | Integrations & Payment Gateways | Third-party systems and payments |
| 16 | OWL / JavaScript Frontend | Dynamic client UI |
| 17 | PostgreSQL for Odoo | Indexes, performance, psql literacy |
| 18 | Testing, Debugging, Upgrades | Keep modules alive across versions |
| 19 | Portfolio Modules | Public proof of Odoo skill |
| 20 | Interviews / Hire | Narrate design and trade-offs |

---

## Track 7 - Web Developer

**File:** [`Web.md`](./Web.md)
**Scope:** **40 concepts · 20 phases** - browser fundamentals through React/Next.js, Node/Express, REST/OpenAPI, databases, authentication, testing, performance, deployment, GraphQL/realtime, and hire.

```text
Browser -> HTML/CSS -> JavaScript -> Frameworks -> Server -> Data -> APIs -> Security -> Production -> Hire
```

- **Frontend path:** read Phases 1-10, 15-16, and 19-20 deeply; skim 11-14 for API literacy.
- **Backend/API path:** read Phases 1-7 quickly, then study 11-18 carefully; still finish one React interface.
- **Full-stack path:** complete all phases in order, then finish the Phase 19 capstone.

| # | Phase | Goal |
|--:|-------|------|
| 01 | Web Thinking | Browser/server contract and request path |
| 02 | HTML Foundations | Semantics, forms, media, accessibility |
| 03 | CSS Fundamentals | Cascade, box model, type, color, variables |
| 04 | CSS Layout & Responsive Design | Flexbox, Grid, mobile-first interfaces |
| 05 | JavaScript Fundamentals | Language, DOM, events, fetch, async |
| 06 | Browser APIs & Tooling | DevTools, npm, Vite, environment config |
| 07 | TypeScript for Web | Strict contracts, generics, project config |
| 08 | React Fundamentals | Components, props, state, effects, forms |
| 09 | React Patterns & State | Routing, Context, TanStack Query |
| 10 | Next.js & Full-Stack React | App Router, rendering, route handlers |
| 11 | Node.js & Express | Runtime, middleware, validation, logging |
| 12 | REST API Design | Resources, methods, status, OpenAPI, pagination |
| 13 | Databases for Web Apps | PostgreSQL, Prisma, migrations, transactions |
| 14 | Authentication & Authorization | Sessions, JWT, OAuth, RBAC, OWASP |
| 15 | Testing Web Applications | Vitest, Testing Library, SuperTest, Playwright |
| 16 | Performance & Web Vitals | LCP/INP/CLS, caching, compression, bundles |
| 17 | Deployment & CI/CD | Hosting, Docker, GitHub Actions, rollback |
| 18 | GraphQL, WebSockets & Modern APIs | GraphQL, SSE, WebSocket, webhooks |
| 19 | Portfolio & Capstone Projects | Public, deployed, documented proof |
| 20 | Web Developer Interviews | Frontend, backend, design, behavioral |

---

## Track 8 - Cloud Engineer

**File:** [`cloud.md`](./cloud.md)
**Scope:** **20 phases** - provider-aware foundations through identity, networking, compute, storage, data, serverless, Kubernetes, IaC, governance, security, reliability, FinOps, migration, projects, and interviews.

```text
Linux/Networks -> Cloud Core -> Data/Traffic -> Cloud Native -> Governance/Security -> Reliability/FinOps -> Hire
```

| # | Phase | Goal |
|--:|-------|------|
| 01 | Cloud Engineer Ground Floor | Linux, networking, scripting, and role boundaries |
| 02 | Virtualization & Service Models | VM, container, IaaS/PaaS/SaaS/serverless responsibility |
| 03 | Providers, Regions & Zones | AWS/Azure/GCP vocabulary and failure domains |
| 04 | Identity & Access Management | Federation, roles, policies, short-lived least privilege |
| 05 | Cloud Networking | VPC/VNet, subnets, routes, NAT, endpoints, security groups |
| 06 | Compute & Autoscaling | Images, load balancing, health, elasticity, immutable groups |
| 07 | Cloud Storage | Object, block, file, durability, lifecycle, restore |
| 08 | Managed Databases & Caching | SQL/NoSQL, replication, backup, cache correctness |
| 09 | DNS, CDN & Edge | Traffic steering, TLS, load balancing, cache policy |
| 10 | Serverless & Events | Functions, queues, topics, idempotency, dead letters |
| 11 | Containers & Managed Kubernetes | ECS/EKS/AKS/GKE and workload responsibility |
| 12 | Infrastructure as Code | Terraform/native tools, plans, modules, state, drift |
| 13 | Landing Zones & Governance | Organizations, account vending, safety checks and limits, audit |
| 14 | Secrets & Encryption | Secret managers, KMS, envelope encryption, rotation |
| 15 | Cloud Observability | Metrics, logs, traces, alerts, operational evidence |
| 16 | Cloud Security & Compliance | Threat models, posture, zero trust, control evidence |
| 17 | Reliability & Disaster Recovery | HA, RTO/RPO, backup, failover, game days |
| 18 | FinOps | Allocation, unit cost, anomaly, rightsizing, commitments |
| 19 | Hybrid/Multi-Cloud & Migration | Dependency discovery, 7Rs, cutover, rollback |
| 20 | Projects & Cloud Interviews | Architecture proof, provider mapping, hire-ready narration |

---

## Track 9 - DevOps Engineer

**File:** [`devops.md`](./devops.md)
**Scope:** **20 phases** - delivery flow through Linux, troubleshooting, Git, automation, artifacts, CI/CD, Docker, Kubernetes, IaC, cloud, observability, SRE, DevSecOps, platform engineering, incidents, projects, and interviews.

```text
Flow -> Linux/Git/Automation -> Artifact/CI/CD -> Containers/Kubernetes -> IaC/Cloud -> SRE/Security/Platform -> Hire
```

| # | Phase | Goal |
|--:|-------|------|
| 01 | DevOps Delivery System | Value stream, feedback, small batches, DORA signals |
| 02 | Linux & Services | Files, permissions, processes, systemd, journal |
| 03 | Troubleshooting | DNS-to-dependency evidence ladder and safe mitigation |
| 04 | Git & Collaboration | Commit graph, merge/rebase/revert, trunk and review |
| 05 | Shell & Python Automation | Validation, idempotency, dry-run, failure handling |
| 06 | Builds & Artifacts | Reproducibility, dependency locks, registries, digests |
| 07 | Continuous Integration | Fast protected checks, caches, flakes, branch gates |
| 08 | Continuous Delivery | Rolling/blue-green/canary, compatibility, rollback |
| 09 | Docker | Images, layers, isolation, networking, volumes, security |
| 10 | Kubernetes Operations | Controllers, workloads, services, health, debugging |
| 11 | Terraform | Desired infrastructure, state, modules, plans, drift |
| 12 | Ansible | Inventory, roles, templates, handlers, convergence |
| 13 | Cloud for DevOps | Federated CI identity, VPC, managed runtime, cloud cost |
| 14 | Observability | OpenTelemetry, Prometheus/Grafana, actionable alerts |
| 15 | SRE | SLIs/SLOs, error budgets, burn rates, toil |
| 16 | DevSecOps | SBOM, scanning, signing, provenance, admission |
| 17 | GitOps & Platform Engineering | Argo CD, reconciliation, self-service golden paths |
| 18 | Incidents & Chaos | Command, postmortems, game days, resilience experiments |
| 19 | DevOps Portfolio | Complete delivery system with telemetry and recovery proof |
| 20 | DevOps Interviews | Troubleshooting, system design, operational stories |

---

## Projects Playbook

**File:** [`Projects.md`](./Projects.md)  
**Scope:** A detailed mini-project for every phase plus one complete portfolio capstone for every 20-phase roadmap.

Every roadmap phase links to one matching mini-project card. After Phase 20, the roadmap links to a complete portfolio project with intended users, a free/open-source stack, exactly 20 phase-mapped build steps, and a no-cost deployment path.

Every mini-project ends with two navigation links: one returns to the phase you just studied, and the other continues to the next roadmap phase. Phase 20 continues to the larger main portfolio project.

```
Learn each phase → Build its mini-project → Finish Phase 20 → Build the complete portfolio project
```

- Finish the mini-project for the phase you just studied.
- Use the listed tech stack so you do not have to guess which tools to choose.
- Follow the numbered steps in order and keep the first version small.
- After Phase 20, build the track capstone in order from Phase 1 through Phase 20.
- For cybersecurity projects, use only systems you own or are explicitly authorized to test.

---

## Interview Playbook

**File:** [`Interview.md`](./Interview.md)  
**Scope:** Combined spoken Q&A across the roadmaps - strong answers, speak-aloud structure, follow-ups, and traps.

| Track | Focus | Approx. Q count |
|-------|--------|----------------:|
| A | Computer Science & Software Engineering | 18 |
| B | Data Analyst & Data Engineer | 16 |
| C | Computer Networks | 16 |
| D | AI / ML / LLM Engineering | 18 |
| W | Web Development | 16 |
| G | Cloud Engineering | 10 |
| H | DevOps Engineering | 12 |
| E | Cross-cutting classics (URL bar, debug, design) | 6 |
| F | Behavioral / STAR | 5 |

**Cybersecurity interviews:** drill [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md) Phase 20 (TLS, IAM, OWASP, ATT&CK, IR, cloud misconfig, security system design) plus Networks track C for packet confident working knowledge.

**How to practice:** cover the answer → speak 60-120 seconds → check structure → answer one follow-up cold. If you cannot explain *why it exists*, return to the linked roadmap phase.

---

## How to use this repo

1. Pick a primary track: [`CS.md`](./CS.md), [`Data.md`](./Data.md), [`Networks.md`](./Networks.md), [`AI.md`](./AI.md), [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md), [`ODOO.md`](./ODOO.md), [`Web.md`](./Web.md), [`cloud.md`](./cloud.md), or [`devops.md`](./devops.md).
2. If new to coding, start [`OOP.md`](./OOP.md) **Part 0**. On the SWE path: after CS Phases 1-2, finish OOP before CS Phase 3.
3. Start at Phase 1 (or Part 0). Do not skip bridges on the first pass.
4. After each phase, follow its matching beginner-friendly mini-project in [`Projects.md`](./Projects.md). After Phase 20, build that track's main portfolio project.
5. Use mastery checkpoints before moving on.
6. Drill spoken answers in [`Interview.md`](./Interview.md) (or Cyber Phase 20 for security roles).

**Role routing (quick)**

| Role | Start with | Then drill |
|------|------------|------------|
| Absolute beginner | `OOP.md` Part 0 → Phases 1+ | `Projects.md` fundamentals + `Interview.md` A |
| Software Engineer | `CS.md` → `OOP.md` → CS Phase 3+ | `Networks.md` essentials + `Projects.md` + `Interview.md` A/C/F |
| Frontend Developer | `OOP.md` Part 0 → `Web.md` Phases 1-10, 15-16 | Matching Web phase projects + `Interview.md` W |
| Backend/API Developer | `CS.md` foundations → `Web.md` Phases 11-18 | `Data.md` SQL + matching Web phase projects + `Interview.md` W/A |
| Full-stack Developer | `OOP.md` Part 0 → `Web.md` full | All Web phase projects + `Interview.md` W/C/F |
| Data Analyst | `Data.md` (through Phase 10) | `Projects.md` data + `Interview.md` B |
| Data Engineer | `Data.md` full | `Projects.md` data + `Interview.md` B |
| Network / Infra | `Networks.md` | `Projects.md` networks + `Interview.md` C/F |
| Cloud Engineer | `cloud.md` | `Networks.md` essentials + matching Cloud phase projects + `Interview.md` G/F |
| DevOps Engineer | `devops.md` | `cloud.md` foundations + matching DevOps phase projects + `Interview.md` H/G/F |
| AI / ML Engineer | `AI.md` | `Projects.md` AI + `Interview.md` D |
| SOC Analyst | `ICT_Cybersecurity.md` (blue path) | Phase 13-14 labs + Security+ / CySA+ |
| Security Engineer | `ICT_Cybersecurity.md` (SecEng path) | AppSec + cloud projects + Phase 20 |
| Junior Pentester | `ICT_Cybersecurity.md` (red path) | PortSwigger/HTB writeups → eJPT/PNPT |
| Odoo / ERP Engineer | `OOP.md` → `ODOO.md` | `Projects.md` Odoo section + integrations |

---

## Philosophy in one line

> Every topic is a *reaction* to the topic before it - not a checklist item to cover.

---

## Author

**Mohammad Bilal** - Interview Help roadmaps for software engineering, OOP, data, networks, AI, cybersecurity, Odoo, web development, cloud engineering, and DevOps careers.
