# Projects Playbook

*Mohammad Bilal's hands-on project guide for the Interview Help repo - small-to-medium builds that cement concepts from each roadmap. Pair every project with a public README that explains what broke, what you built, and what you would change next.*

*Project inspiration curated with Composio (YouTube and GitHub search) against hands-on tutorials, maintained repositories, Odoo examples, structured project collections, and official platform/API/security documentation. See [Curated inspiration](#curated-inspiration) at the bottom.*

**Scope:** One project cements one bridge · no mega-apps · public proof.

```
Build → Explain → Ship README → Drill Interview.md
```

---

**Project card legend (every project uses this shape)**

| Field | Meaning |
| --- | --- |
| **Roadmap** | Which file and phase cluster owns the theory |
| **Goal** | What you are proving in one sentence |
| **Concepts practiced** | Skills the build forces you to use |
| **Difficulty** | Easy / Medium / Hard (scope, not IQ) |
| **Steps** | 3-8 actionable bullets |
| **Done when** | Acceptance criteria - ship or do not ship |
| **Stretch** | Optional depth if you have time |

**Difficulty guide**

| Level | Typical scope | Time box (solo) |
| --- | --- | --- |
| Easy | Single file or CLI, no persistence | 2-6 hours |
| Medium | Multiple modules, files or DB, tests | 1-3 days |
| Hard | Design doc + code, concurrency, or integration | 3-7 days |

---

## 1. How to Use This File

This playbook is the **build layer** on top of the roadmaps. Reading [`CS.md`](./CS.md) Phase 3 teaches linked lists; building one from scratch is how you know you can explain the bridge out loud in [`Interview.md`](./Interview.md).

### Pick projects by phase cluster, not by hype

| Rule | Why |
| --- | --- |
| **1-2 projects per phase cluster** | Depth beats a portfolio of half-finished repos |
| **Finish before you hop tracks** | A shipped calculator teaches more than three abandoned CRUD apps |
| **Write the README first draft after building** | Forces you to name trade-offs, not just features |
| **Tag the roadmap phase in the README** | Recruiters and future-you can trace concept to artifact |

### Recommended rhythm

```
Read phase → hit mastery checkpoint → pick 1 project from that cluster → ship README → drill Interview.md questions for that topic
```

### What every public README must include

1. **Problem** - what wall you hit without this build
2. **Architecture** - one diagram or ASCII sketch
3. **How to run** - copy-paste commands that work on a clean machine
4. **Concepts map** - link to roadmap phases (e.g., "OOP Phase 4 encapsulation")
5. **Trade-offs** - one thing you simplified and why
6. **Next bridge** - what project you would do next and why

### Phase cluster quick map

| Roadmap file | Cluster | Example project IDs in this doc |
| --- | --- | --- |
| [`OOP.md`](./OOP.md) | Fundamentals (pre-OOP) | OOP-F01 to OOP-F04 |
| [`OOP.md`](./OOP.md) | Pillars (Phases 1-9) | OOP-P01 to OOP-P04 |
| [`OOP.md`](./OOP.md) | SOLID + Patterns (12-15) | OOP-S01 to OOP-S03 |
| [`OOP.md`](./OOP.md) | LLD + Portfolio (16-19) | OOP-L01 to OOP-L03 |
| [`CS.md`](./CS.md) | DS/A (Phases 3-9) | CS-D01 to CS-D04 |
| [`CS.md`](./CS.md) | Systems + Web (11-15) | CS-S01 to CS-S04 |
| [`CS.md`](./CS.md) | Design + Distributed (16-18) | CS-X01 to CS-X03 |
| [`Data.md`](./Data.md) | Analyst (1-10) | DATA-A01 to DATA-A05 |
| [`Data.md`](./Data.md) | Engineer (11-18) | DATA-E01 to DATA-E05 |
| [`Networks.md`](./Networks.md) | Core stack (1-14) | NET-01 to NET-05 |
| [`AI.md`](./AI.md) | Classical + Deep (1-11) | AI-01 to AI-05 |
| [`AI.md`](./AI.md) | LLM + Ship (12-18) | AI-06 to AI-09 |
| [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md) | Defensive and authorized security labs (1-20) | CYBER phase navigator below |
| [`ODOO.md`](./ODOO.md) | Module to integration | ODOO-01 to ODOO-08 |
| [`Web.md`](./Web.md) | Browser to production (1-19) | WEB-01 to WEB-06 |
| [`cloud.md`](./cloud.md) | Cloud foundations to production (1-19) | CLOUD-01 to CLOUD-04 |
| [`devops.md`](./devops.md) | Delivery foundations to production (1-19) | DEVOPS-01 to DEVOPS-05 |
| Cross-cutting | Capstones | CAP-01 to CAP-06 |
| [`Interview.md`](./Interview.md) | Timed speak + build | INT-01 to INT-07 |

## Phase-by-phase project navigator

Use this navigator at the end of **every phase**. Each phase section is a focused build specification, not a command to copy the linked repository. The external repositories and videos are public inspiration; implement your own version from the phase knowledge, cite anything you reuse, and obey repository licenses.

**Definition of done for every project section:** the artifact runs from a clean checkout, its verification evidence is committed, and its README links back to the matching roadmap phase.

- [Programming Fundamentals & OOP](#oop-phase-projects)
- [Computer Science](#cs-phase-projects)
- [Data Analyst & Engineer](#data-phase-projects)
- [Computer Networks](#networks-phase-projects)
- [Artificial Intelligence & Machine Learning](#ai-phase-projects)
- [Odoo Engineer](#odoo-phase-projects)
- [Web Developer](#web-phase-projects)
- [Cloud Engineer](#cloud-phase-projects)
- [DevOps Engineer](#devops-phase-projects)
- [ICT / Cybersecurity](#cyber-phase-projects)

### OOP Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### OOP Phase F1 Project

**Recommended build — Execution Trace Notebook**

**Why this project now:** it applies the material covered through [OOP Phase F1](./OOP.md#L167) without requiring later phases.

**Build specification**

- Build **Execution Trace Notebook** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Execution Trace Notebook Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [How to Build a Python CLI Tool People Actually Want to Use — ArjanCodes](https://www.youtube.com/watch?v=FWacanslfFM)

> **When this project is complete:** [Resume your study at OOP Phase F2](./OOP.md#L311) · [Review Phase F1](./OOP.md#L167)

---
#### OOP Phase F2 Project

**Recommended build — CLI Rule Engine**

**Why this project now:** it applies the material covered through [OOP Phase F2](./OOP.md#L311) without requiring later phases.

**Build specification**

- Build **CLI Rule Engine** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — CLI Rule Engine Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [How to Build a Python CLI Tool People Actually Want to Use — ArjanCodes](https://www.youtube.com/watch?v=FWacanslfFM)

> **When this project is complete:** [Resume your study at OOP Phase F3](./OOP.md#L459) · [Review Phase F2](./OOP.md#L311)

---
#### OOP Phase F3 Project

**Recommended build — Modular Text Statistics**

**Why this project now:** it applies the material covered through [OOP Phase F3](./OOP.md#L459) without requiring later phases.

**Build specification**

- Build **Modular Text Statistics** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Modular Text Statistics Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [How to Build a Python CLI Tool People Actually Want to Use — ArjanCodes](https://www.youtube.com/watch?v=FWacanslfFM)

> **When this project is complete:** [Resume your study at OOP Phase 1](./OOP.md#L608) · [Review Phase F3](./OOP.md#L459)

---
#### OOP Phase 1 Project

**Recommended build — Procedural-to-Objects Refactor**

**Why this project now:** it applies the material covered through [OOP Phase 1](./OOP.md#L608) without requiring later phases.

**Build specification**

- Build **Procedural-to-Objects Refactor** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Procedural-to-Objects Refactor Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners — Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 2](./OOP.md#L806) · [Review Phase 1](./OOP.md#L608)

---
#### OOP Phase 2 Project

**Recommended build — Class & Instance Registry**

**Why this project now:** it applies the material covered through [OOP Phase 2](./OOP.md#L806) without requiring later phases.

**Build specification**

- Build **Class & Instance Registry** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Class & Instance Registry Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners — Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 3](./OOP.md#L989) · [Review Phase 2](./OOP.md#L806)

---
#### OOP Phase 3 Project

**Recommended build — Bank Account State Machine**

**Why this project now:** it applies the material covered through [OOP Phase 3](./OOP.md#L989) without requiring later phases.

**Build specification**

- Build **Bank Account State Machine** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Bank Account State Machine Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners — Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 4](./OOP.md#L1172) · [Review Phase 3](./OOP.md#L989)

---
#### OOP Phase 4 Project

**Recommended build — Validated Wallet API**

**Why this project now:** it applies the material covered through [OOP Phase 4](./OOP.md#L1172) without requiring later phases.

**Build specification**

- Build **Validated Wallet API** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Validated Wallet API Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners — Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 5](./OOP.md#L1380) · [Review Phase 4](./OOP.md#L1172)

---
#### OOP Phase 5 Project

**Recommended build — Pluggable Shape Calculator**

**Why this project now:** it applies the material covered through [OOP Phase 5](./OOP.md#L1380) without requiring later phases.

**Build specification**

- Build **Pluggable Shape Calculator** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Pluggable Shape Calculator Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners — Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 6](./OOP.md#L1582) · [Review Phase 5](./OOP.md#L1380)

---
#### OOP Phase 6 Project

**Recommended build — Employee Payroll Hierarchy**

**Why this project now:** it applies the material covered through [OOP Phase 6](./OOP.md#L1582) without requiring later phases.

**Build specification**

- Build **Employee Payroll Hierarchy** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Employee Payroll Hierarchy Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners — Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 7](./OOP.md#L1775) · [Review Phase 6](./OOP.md#L1582)

---
#### OOP Phase 7 Project

**Recommended build — Polymorphic Exporter**

**Why this project now:** it applies the material covered through [OOP Phase 7](./OOP.md#L1775) without requiring later phases.

**Build specification**

- Build **Polymorphic Exporter** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Polymorphic Exporter Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners — Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 8](./OOP.md#L1964) · [Review Phase 7](./OOP.md#L1775)

---
#### OOP Phase 8 Project

**Recommended build — Composed Order Service**

**Why this project now:** it applies the material covered through [OOP Phase 8](./OOP.md#L1964) without requiring later phases.

**Build specification**

- Build **Composed Order Service** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Composed Order Service Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners — Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 9](./OOP.md#L2159) · [Review Phase 8](./OOP.md#L1964)

---
#### OOP Phase 9 Project

**Recommended build — Pythonic Collection Wrapper**

**Why this project now:** it applies the material covered through [OOP Phase 9](./OOP.md#L2159) without requiring later phases.

**Build specification**

- Build **Pythonic Collection Wrapper** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Pythonic Collection Wrapper Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners — Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 10](./OOP.md#L2355) · [Review Phase 9](./OOP.md#L2159)

---
#### OOP Phase 10 Project

**Recommended build — Library Relationship Model**

**Why this project now:** it applies the material covered through [OOP Phase 10](./OOP.md#L2355) without requiring later phases.

**Build specification**

- Build **Library Relationship Model** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Library Relationship Model Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) — CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 11](./OOP.md#L2542) · [Review Phase 10](./OOP.md#L2355)

---
#### OOP Phase 11 Project

**Recommended build — God-Object Rescue**

**Why this project now:** it applies the material covered through [OOP Phase 11](./OOP.md#L2542) without requiring later phases.

**Build specification**

- Build **God-Object Rescue** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — God-Object Rescue Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) — CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 12](./OOP.md#L2732) · [Review Phase 11](./OOP.md#L2542)

---
#### OOP Phase 12 Project

**Recommended build — SOLID Notification Service**

**Why this project now:** it applies the material covered through [OOP Phase 12](./OOP.md#L2732) without requiring later phases.

**Build specification**

- Build **SOLID Notification Service** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — SOLID Notification Service Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) — CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 13](./OOP.md#L2932) · [Review Phase 12](./OOP.md#L2732)

---
#### OOP Phase 13 Project

**Recommended build — Configurable Object Factory**

**Why this project now:** it applies the material covered through [OOP Phase 13](./OOP.md#L2932) without requiring later phases.

**Build specification**

- Build **Configurable Object Factory** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Configurable Object Factory Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) — CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 14](./OOP.md#L3131) · [Review Phase 13](./OOP.md#L2932)

---
#### OOP Phase 14 Project

**Recommended build — Legacy Payment Adapter**

**Why this project now:** it applies the material covered through [OOP Phase 14](./OOP.md#L3131) without requiring later phases.

**Build specification**

- Build **Legacy Payment Adapter** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Legacy Payment Adapter Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) — CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 15](./OOP.md#L3323) · [Review Phase 14](./OOP.md#L3131)

---
#### OOP Phase 15 Project

**Recommended build — Event-Driven Task Board**

**Why this project now:** it applies the material covered through [OOP Phase 15](./OOP.md#L3323) without requiring later phases.

**Build specification**

- Build **Event-Driven Task Board** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Event-Driven Task Board Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) — CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 16](./OOP.md#L3549) · [Review Phase 15](./OOP.md#L3323)

---
#### OOP Phase 16 Project

**Recommended build — Testable Domain Model**

**Why this project now:** it applies the material covered through [OOP Phase 16](./OOP.md#L3549) without requiring later phases.

**Build specification**

- Build **Testable Domain Model** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Testable Domain Model Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) — CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 17](./OOP.md#L3754) · [Review Phase 16](./OOP.md#L3549)

---
#### OOP Phase 17 Project

**Recommended build — Layered Inventory App**

**Why this project now:** it applies the material covered through [OOP Phase 17](./OOP.md#L3754) without requiring later phases.

**Build specification**

- Build **Layered Inventory App** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Layered Inventory App Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) — CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 18](./OOP.md#L3953) · [Review Phase 17](./OOP.md#L3754)

---
#### OOP Phase 18 Project

**Recommended build — Parking Lot LLD**

**Why this project now:** it applies the material covered through [OOP Phase 18](./OOP.md#L3953) without requiring later phases.

**Build specification**

- Build **Parking Lot LLD** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Parking Lot LLD Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Parking Lot Design — Think Software](https://www.youtube.com/watch?v=tVRyb4HaHgw)

> **When this project is complete:** [Resume your study at OOP Phase 19](./OOP.md#L4153) · [Review Phase 18](./OOP.md#L3953)

---
#### OOP Phase 19 Project

**Recommended build — Design Portfolio Pack**

**Why this project now:** it applies the material covered through [OOP Phase 19](./OOP.md#L4153) without requiring later phases.

**Build specification**

- Build **Design Portfolio Pack** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Design Portfolio Pack Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Parking Lot Design — Think Software](https://www.youtube.com/watch?v=tVRyb4HaHgw)

> **When this project is complete:** [Resume your study at OOP Phase 20](./OOP.md#L4314) · [Review Phase 19](./OOP.md#L4153)

---
#### OOP Phase 20 Project

**Recommended build — Timed OOP Design Kata**

**Why this project now:** it applies the material covered through [OOP Phase 20](./OOP.md#L4314) without requiring later phases.

**Build specification**

- Build **Timed OOP Design Kata** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Timed OOP Design Kata Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Parking Lot Design — Think Software](https://www.youtube.com/watch?v=tVRyb4HaHgw)

> **When this project is complete:** [Return to the OOP phase index](./OOP.md#L111) · [Review Phase 20](./OOP.md#L4314)

---

### CS Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### CS Phase 1 Project

**Recommended build — Mini Expression Runtime**

**Why this project now:** it applies the material covered through [CS Phase 1](./CS.md#L169) without requiring later phases.

**Build specification**

- Build **Mini Expression Runtime** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Mini Expression Runtime Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns — freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 2](./CS.md#L313) · [Review Phase 1](./CS.md#L169)

---
#### CS Phase 2 Project

**Recommended build — Algorithm Growth Profiler**

**Why this project now:** it applies the material covered through [CS Phase 2](./CS.md#L313) without requiring later phases.

**Build specification**

- Build **Algorithm Growth Profiler** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Algorithm Growth Profiler Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns — freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 3](./CS.md#L417) · [Review Phase 2](./CS.md#L313)

---
#### CS Phase 3 Project

**Recommended build — Data Structures Toolkit**

**Why this project now:** it applies the material covered through [CS Phase 3](./CS.md#L417) without requiring later phases.

**Build specification**

- Build **Data Structures Toolkit** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Data Structures Toolkit Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns — freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 4](./CS.md#L725) · [Review Phase 3](./CS.md#L417)

---
#### CS Phase 4 Project

**Recommended build — Recursive Filesystem Walker**

**Why this project now:** it applies the material covered through [CS Phase 4](./CS.md#L725) without requiring later phases.

**Build specification**

- Build **Recursive Filesystem Walker** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Recursive Filesystem Walker Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns — freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 5](./CS.md#L812) · [Review Phase 4](./CS.md#L725)

---
#### CS Phase 5 Project

**Recommended build — Priority Task Scheduler**

**Why this project now:** it applies the material covered through [CS Phase 5](./CS.md#L812) without requiring later phases.

**Build specification**

- Build **Priority Task Scheduler** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Priority Task Scheduler Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns — freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 6](./CS.md#L1040) · [Review Phase 5](./CS.md#L812)

---
#### CS Phase 6 Project

**Recommended build — Hash Table and LRU Cache**

**Why this project now:** it applies the material covered through [CS Phase 6](./CS.md#L1040) without requiring later phases.

**Build specification**

- Build **Hash Table and LRU Cache** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Hash Table and LRU Cache Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building — Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 7](./CS.md#L1125) · [Review Phase 6](./CS.md#L1040)

---
#### CS Phase 7 Project

**Recommended build — Sorting Benchmark Explorer**

**Why this project now:** it applies the material covered through [CS Phase 7](./CS.md#L1125) without requiring later phases.

**Build specification**

- Build **Sorting Benchmark Explorer** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Sorting Benchmark Explorer Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building — Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 8](./CS.md#L1287) · [Review Phase 7](./CS.md#L1125)

---
#### CS Phase 8 Project

**Recommended build — Graph Route Planner**

**Why this project now:** it applies the material covered through [CS Phase 8](./CS.md#L1287) without requiring later phases.

**Build specification**

- Build **Graph Route Planner** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Graph Route Planner Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building — Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 9](./CS.md#L1599) · [Review Phase 8](./CS.md#L1287)

---
#### CS Phase 9 Project

**Recommended build — Algorithm Pattern Workbook**

**Why this project now:** it applies the material covered through [CS Phase 9](./CS.md#L1599) without requiring later phases.

**Build specification**

- Build **Algorithm Pattern Workbook** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Algorithm Pattern Workbook Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building — Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 10](./CS.md#L2056) · [Review Phase 9](./CS.md#L1599)

---
#### CS Phase 10 Project

**Recommended build — Parking Lot LLD**

**Why this project now:** it applies the material covered through [CS Phase 10](./CS.md#L2056) without requiring later phases.

**Build specification**

- Build **Parking Lot LLD** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Parking Lot LLD Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building — Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 11](./CS.md#L2385) · [Review Phase 10](./CS.md#L2056)

---
#### CS Phase 11 Project

**Recommended build — Shell and Scheduler Simulator**

**Why this project now:** it applies the material covered through [CS Phase 11](./CS.md#L2385) without requiring later phases.

**Build specification**

- Build **Shell and Scheduler Simulator** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Shell and Scheduler Simulator Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API — JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 12](./CS.md#L3055) · [Review Phase 11](./CS.md#L2385)

---
#### CS Phase 12 Project

**Recommended build — TCP Chat Service**

**Why this project now:** it applies the material covered through [CS Phase 12](./CS.md#L3055) without requiring later phases.

**Build specification**

- Build **TCP Chat Service** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — TCP Chat Service Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API — JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 13](./CS.md#L3781) · [Review Phase 12](./CS.md#L3055)

---
#### CS Phase 13 Project

**Recommended build — Raw HTTP API Server**

**Why this project now:** it applies the material covered through [CS Phase 13](./CS.md#L3781) without requiring later phases.

**Build specification**

- Build **Raw HTTP API Server** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Raw HTTP API Server Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API — JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 14](./CS.md#L4389) · [Review Phase 13](./CS.md#L3781)

---
#### CS Phase 14 Project

**Recommended build — Transactional Library Database**

**Why this project now:** it applies the material covered through [CS Phase 14](./CS.md#L4389) without requiring later phases.

**Build specification**

- Build **Transactional Library Database** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Transactional Library Database Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API — JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 15](./CS.md#L6742) · [Review Phase 14](./CS.md#L4389)

---
#### CS Phase 15 Project

**Recommended build — Secure Auth Service**

**Why this project now:** it applies the material covered through [CS Phase 15](./CS.md#L6742) without requiring later phases.

**Build specification**

- Build **Secure Auth Service** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Secure Auth Service Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OWASP NodeGoat](https://github.com/OWASP/NodeGoat)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API — JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 16](./CS.md#L8418) · [Review Phase 15](./CS.md#L6742)

---
#### CS Phase 16 Project

**Recommended build — Tested CI-Ready Service**

**Why this project now:** it applies the material covered through [CS Phase 16](./CS.md#L8418) without requiring later phases.

**Build specification**

- Build **Tested CI-Ready Service** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Tested CI-Ready Service Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems — Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Resume your study at CS Phase 17](./CS.md#L9682) · [Review Phase 16](./CS.md#L8418)

---
#### CS Phase 17 Project

**Recommended build — Scalable URL Shortener Design**

**Why this project now:** it applies the material covered through [CS Phase 17](./CS.md#L9682) without requiring later phases.

**Build specification**

- Build **Scalable URL Shortener Design** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Scalable URL Shortener Design Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [System Design Primer](https://github.com/donnemartin/system-design-primer)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems — Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Resume your study at CS Phase 18](./CS.md#L11050) · [Review Phase 17](./CS.md#L9682)

---
#### CS Phase 18 Project

**Recommended build — Replicated Ledger Simulator**

**Why this project now:** it applies the material covered through [CS Phase 18](./CS.md#L11050) without requiring later phases.

**Build specification**

- Build **Replicated Ledger Simulator** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Replicated Ledger Simulator Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [System Design Primer](https://github.com/donnemartin/system-design-primer)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems — Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Resume your study at CS Phase 19](./CS.md#L11994) · [Review Phase 18](./CS.md#L11050)

---
#### CS Phase 19 Project

**Recommended build — Integrated Systems Capstone**

**Why this project now:** it applies the material covered through [CS Phase 19](./CS.md#L11994) without requiring later phases.

**Build specification**

- Build **Integrated Systems Capstone** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Integrated Systems Capstone Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems — Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Resume your study at CS Phase 20](./CS.md#L12453) · [Review Phase 19](./CS.md#L11994)

---
#### CS Phase 20 Project

**Recommended build — Timed Interview Harness**

**Why this project now:** it applies the material covered through [CS Phase 20](./CS.md#L12453) without requiring later phases.

**Build specification**

- Build **Timed Interview Harness** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Timed Interview Harness Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Coding Interview University](https://github.com/jwasham/coding-interview-university)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems — Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Return to the CS phase index](./CS.md#L140) · [Review Phase 20](./CS.md#L12453)

---

### Data Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### DATA Phase 1 Project

**Recommended build — Decision Metric Brief**

**Why this project now:** it applies the material covered through [DATA Phase 1](./Data.md#L156) without requiring later phases.

**Build specification**

- Build **Decision Metric Brief** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Decision Metric Brief Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio — CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 2](./Data.md#L444) · [Review Phase 1](./Data.md#L156)

---
#### DATA Phase 2 Project

**Recommended build — Spreadsheet KPI Dashboard**

**Why this project now:** it applies the material covered through [DATA Phase 2](./Data.md#L444) without requiring later phases.

**Build specification**

- Build **Spreadsheet KPI Dashboard** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Spreadsheet KPI Dashboard Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio — CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 3](./Data.md#L673) · [Review Phase 2](./Data.md#L444)

---
#### DATA Phase 3 Project

**Recommended build — Reproducible Data CLI**

**Why this project now:** it applies the material covered through [DATA Phase 3](./Data.md#L673) without requiring later phases.

**Build specification**

- Build **Reproducible Data CLI** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Reproducible Data CLI Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio — CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 4](./Data.md#L934) · [Review Phase 3](./Data.md#L673)

---
#### DATA Phase 4 Project

**Recommended build — SQL Bookstore Database**

**Why this project now:** it applies the material covered through [DATA Phase 4](./Data.md#L934) without requiring later phases.

**Build specification**

- Build **SQL Bookstore Database** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — SQL Bookstore Database Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio — CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 5](./Data.md#L1199) · [Review Phase 4](./Data.md#L934)

---
#### DATA Phase 5 Project

**Recommended build — Sales Cohort Analysis**

**Why this project now:** it applies the material covered through [DATA Phase 5](./Data.md#L1199) without requiring later phases.

**Build specification**

- Build **Sales Cohort Analysis** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Sales Cohort Analysis Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio — CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 6](./Data.md#L1468) · [Review Phase 5](./Data.md#L1199)

---
#### DATA Phase 6 Project

**Recommended build — Window Function Analytics Pack**

**Why this project now:** it applies the material covered through [DATA Phase 6](./Data.md#L1468) without requiring later phases.

**Build specification**

- Build **Window Function Analytics Pack** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Window Function Analytics Pack Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data — Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 7](./Data.md#L1759) · [Review Phase 6](./Data.md#L1468)

---
#### DATA Phase 7 Project

**Recommended build — A/B Test Analyzer**

**Why this project now:** it applies the material covered through [DATA Phase 7](./Data.md#L1759) without requiring later phases.

**Build specification**

- Build **A/B Test Analyzer** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — A/B Test Analyzer Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data — Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 8](./Data.md#L2004) · [Review Phase 7](./Data.md#L1759)

---
#### DATA Phase 8 Project

**Recommended build — Dirty Dataset Cleaner**

**Why this project now:** it applies the material covered through [DATA Phase 8](./Data.md#L2004) without requiring later phases.

**Build specification**

- Build **Dirty Dataset Cleaner** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Dirty Dataset Cleaner Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data — Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 9](./Data.md#L2241) · [Review Phase 8](./Data.md#L2004)

---
#### DATA Phase 9 Project

**Recommended build — Executive Data Story**

**Why this project now:** it applies the material covered through [DATA Phase 9](./Data.md#L2241) without requiring later phases.

**Build specification**

- Build **Executive Data Story** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Executive Data Story Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data — Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 10](./Data.md#L2455) · [Review Phase 9](./Data.md#L2241)

---
#### DATA Phase 10 Project

**Recommended build — Product Funnel EDA**

**Why this project now:** it applies the material covered through [DATA Phase 10](./Data.md#L2455) without requiring later phases.

**Build specification**

- Build **Product Funnel EDA** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Product Funnel EDA Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data — Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 11](./Data.md#L2741) · [Review Phase 10](./Data.md#L2455)

---
#### DATA Phase 11 Project

**Recommended build — Normalized Order Database**

**Why this project now:** it applies the material covered through [DATA Phase 11](./Data.md#L2741) without requiring later phases.

**Build specification**

- Build **Normalized Order Database** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Normalized Order Database Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow — jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 12](./Data.md#L3013) · [Review Phase 11](./Data.md#L2741)

---
#### DATA Phase 12 Project

**Recommended build — Star Schema Warehouse**

**Why this project now:** it applies the material covered through [DATA Phase 12](./Data.md#L3013) without requiring later phases.

**Build specification**

- Build **Star Schema Warehouse** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Star Schema Warehouse Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow — jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 13](./Data.md#L3378) · [Review Phase 12](./Data.md#L3013)

---
#### DATA Phase 13 Project

**Recommended build — Incremental ETL Pipeline**

**Why this project now:** it applies the material covered through [DATA Phase 13](./Data.md#L3378) without requiring later phases.

**Build specification**

- Build **Incremental ETL Pipeline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Incremental ETL Pipeline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow — jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 14](./Data.md#L3623) · [Review Phase 13](./Data.md#L3378)

---
#### DATA Phase 14 Project

**Recommended build — Scheduled Airflow Pipeline**

**Why this project now:** it applies the material covered through [DATA Phase 14](./Data.md#L3623) without requiring later phases.

**Build specification**

- Build **Scheduled Airflow Pipeline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Scheduled Airflow Pipeline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Apache Airflow](https://github.com/apache/airflow)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow — jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 15](./Data.md#L3873) · [Review Phase 14](./Data.md#L3623)

---
#### DATA Phase 15 Project

**Recommended build — dbt Analytics Project**

**Why this project now:** it applies the material covered through [DATA Phase 15](./Data.md#L3873) without requiring later phases.

**Build specification**

- Build **dbt Analytics Project** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — dbt Analytics Project Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [dbt Jaffle Shop](https://github.com/dbt-labs/jaffle_shop)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow — jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 16](./Data.md#L4135) · [Review Phase 15](./Data.md#L3873)

---
#### DATA Phase 16 Project

**Recommended build — Cloud Warehouse Migration**

**Why this project now:** it applies the material covered through [DATA Phase 16](./Data.md#L4135) without requiring later phases.

**Build specification**

- Build **Cloud Warehouse Migration** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Cloud Warehouse Migration Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project — Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Resume your study at DATA Phase 17](./Data.md#L4357) · [Review Phase 16](./Data.md#L4135)

---
#### DATA Phase 17 Project

**Recommended build — Distributed Spark Batch Job**

**Why this project now:** it applies the material covered through [DATA Phase 17](./Data.md#L4357) without requiring later phases.

**Build specification**

- Build **Distributed Spark Batch Job** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Distributed Spark Batch Job Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Apache Spark](https://github.com/apache/spark)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project — Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Resume your study at DATA Phase 18](./Data.md#L4568) · [Review Phase 17](./Data.md#L4357)

---
#### DATA Phase 18 Project

**Recommended build — Kafka Streaming Metrics**

**Why this project now:** it applies the material covered through [DATA Phase 18](./Data.md#L4568) without requiring later phases.

**Build specification**

- Build **Kafka Streaming Metrics** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Kafka Streaming Metrics Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project — Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Resume your study at DATA Phase 19](./Data.md#L4749) · [Review Phase 18](./Data.md#L4568)

---
#### DATA Phase 19 Project

**Recommended build — Data Quality Portfolio**

**Why this project now:** it applies the material covered through [DATA Phase 19](./Data.md#L4749) without requiring later phases.

**Build specification**

- Build **Data Quality Portfolio** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Data Quality Portfolio Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project — Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Resume your study at DATA Phase 20](./Data.md#L4934) · [Review Phase 19](./Data.md#L4749)

---
#### DATA Phase 20 Project

**Recommended build — Timed Analytics Case Study**

**Why this project now:** it applies the material covered through [DATA Phase 20](./Data.md#L4934) without requiring later phases.

**Build specification**

- Build **Timed Analytics Case Study** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Timed Analytics Case Study Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project — Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Return to the DATA phase index](./Data.md#L115) · [Review Phase 20](./Data.md#L4934)

---

### Networks Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### NETWORKS Phase 1 Project

**Recommended build — Latency vs Throughput Lab**

**Why this project now:** it applies the material covered through [NETWORKS Phase 1](./Networks.md#L159) without requiring later phases.

**Build specification**

- Build **Latency vs Throughput Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Latency vs Throughput Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab — Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 2](./Networks.md#L379) · [Review Phase 1](./Networks.md#L159)

---
#### NETWORKS Phase 2 Project

**Recommended build — Noisy Link Simulator**

**Why this project now:** it applies the material covered through [NETWORKS Phase 2](./Networks.md#L379) without requiring later phases.

**Build specification**

- Build **Noisy Link Simulator** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Noisy Link Simulator Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab — Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 3](./Networks.md#L549) · [Review Phase 2](./Networks.md#L379)

---
#### NETWORKS Phase 3 Project

**Recommended build — Ethernet Frame Encoder**

**Why this project now:** it applies the material covered through [NETWORKS Phase 3](./Networks.md#L549) without requiring later phases.

**Build specification**

- Build **Ethernet Frame Encoder** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Ethernet Frame Encoder Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab — Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 4](./Networks.md#L706) · [Review Phase 3](./Networks.md#L549)

---
#### NETWORKS Phase 4 Project

**Recommended build — Learning Switch Simulator**

**Why this project now:** it applies the material covered through [NETWORKS Phase 4](./Networks.md#L706) without requiring later phases.

**Build specification**

- Build **Learning Switch Simulator** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Learning Switch Simulator Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab — Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 5](./Networks.md#L863) · [Review Phase 4](./Networks.md#L706)

---
#### NETWORKS Phase 5 Project

**Recommended build — Subnet Calculator**

**Why this project now:** it applies the material covered through [NETWORKS Phase 5](./Networks.md#L863) without requiring later phases.

**Build specification**

- Build **Subnet Calculator** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Subnet Calculator Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab — Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 6](./Networks.md#L1011) · [Review Phase 5](./Networks.md#L863)

---
#### NETWORKS Phase 6 Project

**Recommended build — Longest-Prefix Router**

**Why this project now:** it applies the material covered through [NETWORKS Phase 6](./Networks.md#L1011) without requiring later phases.

**Build specification**

- Build **Longest-Prefix Router** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Longest-Prefix Router Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial — Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 7](./Networks.md#L1175) · [Review Phase 6](./Networks.md#L1011)

---
#### NETWORKS Phase 7 Project

**Recommended build — DHCP/NAT Table Simulator**

**Why this project now:** it applies the material covered through [NETWORKS Phase 7](./Networks.md#L1175) without requiring later phases.

**Build specification**

- Build **DHCP/NAT Table Simulator** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — DHCP/NAT Table Simulator Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial — Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 8](./Networks.md#L1341) · [Review Phase 7](./Networks.md#L1175)

---
#### NETWORKS Phase 8 Project

**Recommended build — Packet Encapsulation Visualizer**

**Why this project now:** it applies the material covered through [NETWORKS Phase 8](./Networks.md#L1341) without requiring later phases.

**Build specification**

- Build **Packet Encapsulation Visualizer** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Packet Encapsulation Visualizer Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial — Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 9](./Networks.md#L1487) · [Review Phase 8](./Networks.md#L1341)

---
#### NETWORKS Phase 9 Project

**Recommended build — Reliable UDP Chat**

**Why this project now:** it applies the material covered through [NETWORKS Phase 9](./Networks.md#L1487) without requiring later phases.

**Build specification**

- Build **Reliable UDP Chat** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Reliable UDP Chat Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial — Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 10](./Networks.md#L1636) · [Review Phase 9](./Networks.md#L1487)

---
#### NETWORKS Phase 10 Project

**Recommended build — TCP State Trace**

**Why this project now:** it applies the material covered through [NETWORKS Phase 10](./Networks.md#L1636) without requiring later phases.

**Build specification**

- Build **TCP State Trace** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — TCP State Trace Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial — Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 11](./Networks.md#L1802) · [Review Phase 10](./Networks.md#L1636)

---
#### NETWORKS Phase 11 Project

**Recommended build — Multi-client Socket Server**

**Why this project now:** it applies the material covered through [NETWORKS Phase 11](./Networks.md#L1802) without requiring later phases.

**Build specification**

- Build **Multi-client Socket Server** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Multi-client Socket Server Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS — Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 12](./Networks.md#L1980) · [Review Phase 11](./Networks.md#L1802)

---
#### NETWORKS Phase 12 Project

**Recommended build — Recursive DNS Resolver**

**Why this project now:** it applies the material covered through [NETWORKS Phase 12](./Networks.md#L1980) without requiring later phases.

**Build specification**

- Build **Recursive DNS Resolver** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Recursive DNS Resolver Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS — Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 13](./Networks.md#L2115) · [Review Phase 12](./Networks.md#L1980)

---
#### NETWORKS Phase 13 Project

**Recommended build — Raw HTTP Exchange**

**Why this project now:** it applies the material covered through [NETWORKS Phase 13](./Networks.md#L2115) without requiring later phases.

**Build specification**

- Build **Raw HTTP Exchange** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Raw HTTP Exchange Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS — Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 14](./Networks.md#L2255) · [Review Phase 13](./Networks.md#L2115)

---
#### NETWORKS Phase 14 Project

**Recommended build — TLS Certificate Inspector**

**Why this project now:** it applies the material covered through [NETWORKS Phase 14](./Networks.md#L2255) without requiring later phases.

**Build specification**

- Build **TLS Certificate Inspector** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — TLS Certificate Inspector Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS — Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 15](./Networks.md#L2391) · [Review Phase 14](./Networks.md#L2255)

---
#### NETWORKS Phase 15 Project

**Recommended build — Packet Forensics Report**

**Why this project now:** it applies the material covered through [NETWORKS Phase 15](./Networks.md#L2391) without requiring later phases.

**Build specification**

- Build **Packet Forensics Report** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Packet Forensics Report Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Wireshark](https://github.com/wireshark/wireshark)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS — Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 16](./Networks.md#L2544) · [Review Phase 15](./Networks.md#L2391)

---
#### NETWORKS Phase 16 Project

**Recommended build — Wi-Fi Survey and Heatmap**

**Why this project now:** it applies the material covered through [NETWORKS Phase 16](./Networks.md#L2544) without requiring later phases.

**Build specification**

- Build **Wi-Fi Survey and Heatmap** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Wi-Fi Survey and Heatmap Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab — Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Resume your study at NETWORKS Phase 17](./Networks.md#L2672) · [Review Phase 16](./Networks.md#L2544)

---
#### NETWORKS Phase 17 Project

**Recommended build — Reverse Proxy Load Lab**

**Why this project now:** it applies the material covered through [NETWORKS Phase 17](./Networks.md#L2672) without requiring later phases.

**Build specification**

- Build **Reverse Proxy Load Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Reverse Proxy Load Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab — Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Resume your study at NETWORKS Phase 18](./Networks.md#L2812) · [Review Phase 17](./Networks.md#L2672)

---
#### NETWORKS Phase 18 Project

**Recommended build — BGP Policy Simulator**

**Why this project now:** it applies the material covered through [NETWORKS Phase 18](./Networks.md#L2812) without requiring later phases.

**Build specification**

- Build **BGP Policy Simulator** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — BGP Policy Simulator Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab — Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Resume your study at NETWORKS Phase 19](./Networks.md#L2947) · [Review Phase 18](./Networks.md#L2812)

---
#### NETWORKS Phase 19 Project

**Recommended build — Automated Network Lab Portfolio**

**Why this project now:** it applies the material covered through [NETWORKS Phase 19](./Networks.md#L2947) without requiring later phases.

**Build specification**

- Build **Automated Network Lab Portfolio** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Automated Network Lab Portfolio Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab — Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Resume your study at NETWORKS Phase 20](./Networks.md#L3081) · [Review Phase 19](./Networks.md#L2947)

---
#### NETWORKS Phase 20 Project

**Recommended build — Timed Troubleshooting Drill**

**Why this project now:** it applies the material covered through [NETWORKS Phase 20](./Networks.md#L3081) without requiring later phases.

**Build specification**

- Build **Timed Troubleshooting Drill** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Timed Troubleshooting Drill Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab — Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Return to the NETWORKS phase index](./Networks.md#L111) · [Review Phase 20](./Networks.md#L3081)

---

### AI Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### AI Phase 1 Project

**Recommended build — Rule vs Learner Benchmark**

**Why this project now:** it applies the material covered through [AI Phase 1](./AI.md#L154) without requiring later phases.

**Build specification**

- Build **Rule vs Learner Benchmark** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Rule vs Learner Benchmark Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn — Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 2](./AI.md#L312) · [Review Phase 1](./AI.md#L154)

---
#### AI Phase 2 Project

**Recommended build — Gradient Descent Visualizer**

**Why this project now:** it applies the material covered through [AI Phase 2](./AI.md#L312) without requiring later phases.

**Build specification**

- Build **Gradient Descent Visualizer** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Gradient Descent Visualizer Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [micrograd](https://github.com/karpathy/micrograd)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn — Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 3](./AI.md#L457) · [Review Phase 2](./AI.md#L312)

---
#### AI Phase 3 Project

**Recommended build — NumPy/Pandas Dataset Lab**

**Why this project now:** it applies the material covered through [AI Phase 3](./AI.md#L457) without requiring later phases.

**Build specification**

- Build **NumPy/Pandas Dataset Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — NumPy/Pandas Dataset Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn — Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 4](./AI.md#L593) · [Review Phase 3](./AI.md#L457)

---
#### AI Phase 4 Project

**Recommended build — Regression and Classification Baseline**

**Why this project now:** it applies the material covered through [AI Phase 4](./AI.md#L593) without requiring later phases.

**Build specification**

- Build **Regression and Classification Baseline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Regression and Classification Baseline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn — Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 5](./AI.md#L739) · [Review Phase 4](./AI.md#L593)

---
#### AI Phase 5 Project

**Recommended build — Leakage-Proof Evaluation Harness**

**Why this project now:** it applies the material covered through [AI Phase 5](./AI.md#L739) without requiring later phases.

**Build specification**

- Build **Leakage-Proof Evaluation Harness** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Leakage-Proof Evaluation Harness Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn — Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 6](./AI.md#L878) · [Review Phase 5](./AI.md#L739)

---
#### AI Phase 6 Project

**Recommended build — Ensemble Model Showdown**

**Why this project now:** it applies the material covered through [AI Phase 6](./AI.md#L878) without requiring later phases.

**Build specification**

- Build **Ensemble Model Showdown** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Ensemble Model Showdown Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model — Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 7](./AI.md#L1020) · [Review Phase 6](./AI.md#L878)

---
#### AI Phase 7 Project

**Recommended build — Neural Network from Scratch**

**Why this project now:** it applies the material covered through [AI Phase 7](./AI.md#L1020) without requiring later phases.

**Build specification**

- Build **Neural Network from Scratch** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Neural Network from Scratch Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model — Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 8](./AI.md#L1173) · [Review Phase 7](./AI.md#L1020)

---
#### AI Phase 8 Project

**Recommended build — Tiny Autograd Engine**

**Why this project now:** it applies the material covered through [AI Phase 8](./AI.md#L1173) without requiring later phases.

**Build specification**

- Build **Tiny Autograd Engine** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Tiny Autograd Engine Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model — Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 9](./AI.md#L1319) · [Review Phase 8](./AI.md#L1173)

---
#### AI Phase 9 Project

**Recommended build — Reusable PyTorch Trainer**

**Why this project now:** it applies the material covered through [AI Phase 9](./AI.md#L1319) without requiring later phases.

**Build specification**

- Build **Reusable PyTorch Trainer** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Reusable PyTorch Trainer Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model — Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 10](./AI.md#L1469) · [Review Phase 9](./AI.md#L1319)

---
#### AI Phase 10 Project

**Recommended build — Transfer-Learning Image Classifier**

**Why this project now:** it applies the material covered through [AI Phase 10](./AI.md#L1469) without requiring later phases.

**Build specification**

- Build **Transfer-Learning Image Classifier** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Transfer-Learning Image Classifier Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model — Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 11](./AI.md#L1612) · [Review Phase 10](./AI.md#L1469)

---
#### AI Phase 11 Project

**Recommended build — Sequence Sentiment Classifier**

**Why this project now:** it applies the material covered through [AI Phase 11](./AI.md#L1612) without requiring later phases.

**Build specification**

- Build **Sequence Sentiment Classifier** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Sequence Sentiment Classifier Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch — freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 12](./AI.md#L1746) · [Review Phase 11](./AI.md#L1612)

---
#### AI Phase 12 Project

**Recommended build — Semantic Search Engine**

**Why this project now:** it applies the material covered through [AI Phase 12](./AI.md#L1746) without requiring later phases.

**Build specification**

- Build **Semantic Search Engine** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Semantic Search Engine Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch — freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 13](./AI.md#L1889) · [Review Phase 12](./AI.md#L1746)

---
#### AI Phase 13 Project

**Recommended build — Tiny Transformer Explainer**

**Why this project now:** it applies the material covered through [AI Phase 13](./AI.md#L1889) without requiring later phases.

**Build specification**

- Build **Tiny Transformer Explainer** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Tiny Transformer Explainer Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch — freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 14](./AI.md#L2036) · [Review Phase 13](./AI.md#L1889)

---
#### AI Phase 14 Project

**Recommended build — Prompt Experiment Matrix**

**Why this project now:** it applies the material covered through [AI Phase 14](./AI.md#L2036) without requiring later phases.

**Build specification**

- Build **Prompt Experiment Matrix** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Prompt Experiment Matrix Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch — freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 15](./AI.md#L2181) · [Review Phase 14](./AI.md#L2036)

---
#### AI Phase 15 Project

**Recommended build — Citation-First RAG**

**Why this project now:** it applies the material covered through [AI Phase 15](./AI.md#L2181) without requiring later phases.

**Build specification**

- Build **Citation-First RAG** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Citation-First RAG Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch — freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 16](./AI.md#L2342) · [Review Phase 15](./AI.md#L2181)

---
#### AI Phase 16 Project

**Recommended build — LoRA Fine-Tuning Report**

**Why this project now:** it applies the material covered through [AI Phase 16](./AI.md#L2342) without requiring later phases.

**Build specification**

- Build **LoRA Fine-Tuning Report** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — LoRA Fine-Tuning Report Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course — DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Resume your study at AI Phase 17](./AI.md#L2478) · [Review Phase 16](./AI.md#L2342)

---
#### AI Phase 17 Project

**Recommended build — Safe Tool-Using Agent**

**Why this project now:** it applies the material covered through [AI Phase 17](./AI.md#L2478) without requiring later phases.

**Build specification**

- Build **Safe Tool-Using Agent** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Safe Tool-Using Agent Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course — DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Resume your study at AI Phase 18](./AI.md#L2629) · [Review Phase 17](./AI.md#L2478)

---
#### AI Phase 18 Project

**Recommended build — Model Eval and Monitoring Pipeline**

**Why this project now:** it applies the material covered through [AI Phase 18](./AI.md#L2629) without requiring later phases.

**Build specification**

- Build **Model Eval and Monitoring Pipeline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Model Eval and Monitoring Pipeline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course — DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Resume your study at AI Phase 19](./AI.md#L2777) · [Review Phase 18](./AI.md#L2629)

---
#### AI Phase 19 Project

**Recommended build — Reproducible AI Portfolio**

**Why this project now:** it applies the material covered through [AI Phase 19](./AI.md#L2777) without requiring later phases.

**Build specification**

- Build **Reproducible AI Portfolio** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Reproducible AI Portfolio Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course — DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Resume your study at AI Phase 20](./AI.md#L2916) · [Review Phase 19](./AI.md#L2777)

---
#### AI Phase 20 Project

**Recommended build — ML System Design Drill**

**Why this project now:** it applies the material covered through [AI Phase 20](./AI.md#L2916) without requiring later phases.

**Build specification**

- Build **ML System Design Drill** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — ML System Design Drill Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course — DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Return to the AI phase index](./AI.md#L109) · [Review Phase 20](./AI.md#L2916)

---

### ODOO Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### ODOO Phase 1 Project

**Recommended build — ERP Process Map**

**Why this project now:** it applies the material covered through [ODOO Phase 1](./ODOO.md#L152) without requiring later phases.

**Build specification**

- Build **ERP Process Map** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — ERP Process Map Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 — OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 2](./ODOO.md#L336) · [Review Phase 1](./ODOO.md#L152)

---
#### ODOO Phase 2 Project

**Recommended build — Request-to-Database Trace**

**Why this project now:** it applies the material covered through [ODOO Phase 2](./ODOO.md#L336) without requiring later phases.

**Build specification**

- Build **Request-to-Database Trace** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Request-to-Database Trace Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 — OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 3](./ODOO.md#L515) · [Review Phase 2](./ODOO.md#L336)

---
#### ODOO Phase 3 Project

**Recommended build — Reproducible Odoo Dev Stack**

**Why this project now:** it applies the material covered through [ODOO Phase 3](./ODOO.md#L515) without requiring later phases.

**Build specification**

- Build **Reproducible Odoo Dev Stack** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Reproducible Odoo Dev Stack Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 — OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 4](./ODOO.md#L676) · [Review Phase 3](./ODOO.md#L515)

---
#### ODOO Phase 4 Project

**Recommended build — Minimal Todo Addon**

**Why this project now:** it applies the material covered through [ODOO Phase 4](./ODOO.md#L676) without requiring later phases.

**Build specification**

- Build **Minimal Todo Addon** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Minimal Todo Addon Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 — OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 5](./ODOO.md#L859) · [Review Phase 4](./ODOO.md#L676)

---
#### ODOO Phase 5 Project

**Recommended build — Library Domain Models**

**Why this project now:** it applies the material covered through [ODOO Phase 5](./ODOO.md#L859) without requiring later phases.

**Build specification**

- Build **Library Domain Models** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Library Domain Models Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 — OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 6](./ODOO.md#L1030) · [Review Phase 5](./ODOO.md#L859)

---
#### ODOO Phase 6 Project

**Recommended build — Recordset Query Explorer**

**Why this project now:** it applies the material covered through [ODOO Phase 6](./ODOO.md#L1030) without requiring later phases.

**Build specification**

- Build **Recordset Query Explorer** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Recordset Query Explorer Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security — EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 7](./ODOO.md#L1199) · [Review Phase 6](./ODOO.md#L1030)

---
#### ODOO Phase 7 Project

**Recommended build — Multi-company Access Lab**

**Why this project now:** it applies the material covered through [ODOO Phase 7](./ODOO.md#L1199) without requiring later phases.

**Build specification**

- Build **Multi-company Access Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Multi-company Access Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security — EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 8](./ODOO.md#L1361) · [Review Phase 7](./ODOO.md#L1199)

---
#### ODOO Phase 8 Project

**Recommended build — Inherited Library Views**

**Why this project now:** it applies the material covered through [ODOO Phase 8](./ODOO.md#L1361) without requiring later phases.

**Build specification**

- Build **Inherited Library Views** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Inherited Library Views Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security — EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 9](./ODOO.md#L1544) · [Review Phase 8](./ODOO.md#L1361)

---
#### ODOO Phase 9 Project

**Recommended build — Role-Aware Navigation Module**

**Why this project now:** it applies the material covered through [ODOO Phase 9](./ODOO.md#L1544) without requiring later phases.

**Build specification**

- Build **Role-Aware Navigation Module** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Role-Aware Navigation Module Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security — EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 10](./ODOO.md#L1710) · [Review Phase 9](./ODOO.md#L1544)

---
#### ODOO Phase 10 Project

**Recommended build — Validated Order Workflow**

**Why this project now:** it applies the material covered through [ODOO Phase 10](./ODOO.md#L1710) without requiring later phases.

**Build specification**

- Build **Validated Order Workflow** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Validated Order Workflow Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security — EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 11](./ODOO.md#L1893) · [Review Phase 10](./ODOO.md#L1710)

---
#### ODOO Phase 11 Project

**Recommended build — Sale Order Extension**

**Why this project now:** it applies the material covered through [ODOO Phase 11](./ODOO.md#L1893) without requiring later phases.

**Build specification**

- Build **Sale Order Extension** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Sale Order Extension Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation — VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 12](./ODOO.md#L2060) · [Review Phase 11](./ODOO.md#L1893)

---
#### ODOO Phase 12 Project

**Recommended build — Bulk Update Wizard**

**Why this project now:** it applies the material covered through [ODOO Phase 12](./ODOO.md#L2060) without requiring later phases.

**Build specification**

- Build **Bulk Update Wizard** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Bulk Update Wizard Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation — VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 13](./ODOO.md#L2230) · [Review Phase 12](./ODOO.md#L2060)

---
#### ODOO Phase 13 Project

**Recommended build — Idempotent Webhook Module**

**Why this project now:** it applies the material covered through [ODOO Phase 13](./ODOO.md#L2230) without requiring later phases.

**Build specification**

- Build **Idempotent Webhook Module** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Idempotent Webhook Module Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Connector](https://github.com/OCA/connector)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation — VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 14](./ODOO.md#L2402) · [Review Phase 13](./ODOO.md#L2230)

---
#### ODOO Phase 14 Project

**Recommended build — External Sync Client**

**Why this project now:** it applies the material covered through [ODOO Phase 14](./ODOO.md#L2402) without requiring later phases.

**Build specification**

- Build **External Sync Client** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — External Sync Client Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Connector](https://github.com/OCA/connector)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation — VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 15](./ODOO.md#L2580) · [Review Phase 14](./ODOO.md#L2402)

---
#### ODOO Phase 15 Project

**Recommended build — Payment Sandbox Integration**

**Why this project now:** it applies the material covered through [ODOO Phase 15](./ODOO.md#L2580) without requiring later phases.

**Build specification**

- Build **Payment Sandbox Integration** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Payment Sandbox Integration Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Connector](https://github.com/OCA/connector)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation — VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 16](./ODOO.md#L2758) · [Review Phase 15](./ODOO.md#L2580)

---
#### ODOO Phase 16 Project

**Recommended build — OWL KPI Widget**

**Why this project now:** it applies the material covered through [ODOO Phase 16](./ODOO.md#L2758) without requiring later phases.

**Build specification**

- Build **OWL KPI Widget** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — OWL KPI Widget Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL — AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Resume your study at ODOO Phase 17](./ODOO.md#L2930) · [Review Phase 16](./ODOO.md#L2758)

---
#### ODOO Phase 17 Project

**Recommended build — ORM Query Tuning Report**

**Why this project now:** it applies the material covered through [ODOO Phase 17](./ODOO.md#L2930) without requiring later phases.

**Build specification**

- Build **ORM Query Tuning Report** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — ORM Query Tuning Report Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL — AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Resume your study at ODOO Phase 18](./ODOO.md#L3088) · [Review Phase 17](./ODOO.md#L2930)

---
#### ODOO Phase 18 Project

**Recommended build — Upgrade-Safe Test Suite**

**Why this project now:** it applies the material covered through [ODOO Phase 18](./ODOO.md#L3088) without requiring later phases.

**Build specification**

- Build **Upgrade-Safe Test Suite** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Upgrade-Safe Test Suite Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL — AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Resume your study at ODOO Phase 19](./ODOO.md#L3258) · [Review Phase 18](./ODOO.md#L3088)

---
#### ODOO Phase 19 Project

**Recommended build — Portfolio-Ready Business Module**

**Why this project now:** it applies the material covered through [ODOO Phase 19](./ODOO.md#L3258) without requiring later phases.

**Build specification**

- Build **Portfolio-Ready Business Module** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Portfolio-Ready Business Module Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL — AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Resume your study at ODOO Phase 20](./ODOO.md#L3428) · [Review Phase 19](./ODOO.md#L3258)

---
#### ODOO Phase 20 Project

**Recommended build — Timed Odoo Debug Drill**

**Why this project now:** it applies the material covered through [ODOO Phase 20](./ODOO.md#L3428) without requiring later phases.

**Build specification**

- Build **Timed Odoo Debug Drill** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Timed Odoo Debug Drill Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL — AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Return to the ODOO phase index](./ODOO.md#L107) · [Review Phase 20](./ODOO.md#L3428)

---

### Web Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### WEB Phase 1 Project

**Recommended build — Client-Server Request Explorer**

**Why this project now:** it applies the material covered through [WEB Phase 1](./Web.md#L129) without requiring later phases.

**Build specification**

- Build **Client-Server Request Explorer** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Client-Server Request Explorer Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project — Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 2](./Web.md#L297) · [Review Phase 1](./Web.md#L129)

---
#### WEB Phase 2 Project

**Recommended build — Accessible Profile Page**

**Why this project now:** it applies the material covered through [WEB Phase 2](./Web.md#L297) without requiring later phases.

**Build specification**

- Build **Accessible Profile Page** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Accessible Profile Page Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project — Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 3](./Web.md#L458) · [Review Phase 2](./Web.md#L297)

---
#### WEB Phase 3 Project

**Recommended build — Design Token Style Guide**

**Why this project now:** it applies the material covered through [WEB Phase 3](./Web.md#L458) without requiring later phases.

**Build specification**

- Build **Design Token Style Guide** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Design Token Style Guide Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project — Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 4](./Web.md#L610) · [Review Phase 3](./Web.md#L458)

---
#### WEB Phase 4 Project

**Recommended build — Responsive Product Landing**

**Why this project now:** it applies the material covered through [WEB Phase 4](./Web.md#L610) without requiring later phases.

**Build specification**

- Build **Responsive Product Landing** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Responsive Product Landing Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project — Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 5](./Web.md#L764) · [Review Phase 4](./Web.md#L610)

---
#### WEB Phase 5 Project

**Recommended build — Interactive Expense Tracker**

**Why this project now:** it applies the material covered through [WEB Phase 5](./Web.md#L764) without requiring later phases.

**Build specification**

- Build **Interactive Expense Tracker** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Interactive Expense Tracker Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project — Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 6](./Web.md#L932) · [Review Phase 5](./Web.md#L764)

---
#### WEB Phase 6 Project

**Recommended build — Offline-Capable Notes App**

**Why this project now:** it applies the material covered through [WEB Phase 6](./Web.md#L932) without requiring later phases.

**Build specification**

- Build **Offline-Capable Notes App** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Offline-Capable Notes App Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project — Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 7](./Web.md#L1091) · [Review Phase 6](./Web.md#L932)

---
#### WEB Phase 7 Project

**Recommended build — Typed API Client**

**Why this project now:** it applies the material covered through [WEB Phase 7](./Web.md#L1091) without requiring later phases.

**Build specification**

- Build **Typed API Client** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Typed API Client Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project — Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 8](./Web.md#L1243) · [Review Phase 7](./Web.md#L1091)

---
#### WEB Phase 8 Project

**Recommended build — React Habit Tracker**

**Why this project now:** it applies the material covered through [WEB Phase 8](./Web.md#L1243) without requiring later phases.

**Build specification**

- Build **React Habit Tracker** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — React Habit Tracker Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project — Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 9](./Web.md#L1414) · [Review Phase 8](./Web.md#L1243)

---
#### WEB Phase 9 Project

**Recommended build — Cached Admin Dashboard**

**Why this project now:** it applies the material covered through [WEB Phase 9](./Web.md#L1414) without requiring later phases.

**Build specification**

- Build **Cached Admin Dashboard** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Cached Admin Dashboard Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project — Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 10](./Web.md#L1579) · [Review Phase 9](./Web.md#L1414)

---
#### WEB Phase 10 Project

**Recommended build — Full-Stack Issue Tracker**

**Why this project now:** it applies the material covered through [WEB Phase 10](./Web.md#L1579) without requiring later phases.

**Build specification**

- Build **Full-Stack Issue Tracker** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Full-Stack Issue Tracker Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project — Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 11](./Web.md#L1744) · [Review Phase 10](./Web.md#L1579)

---
#### WEB Phase 11 Project

**Recommended build — Express Service Starter**

**Why this project now:** it applies the material covered through [WEB Phase 11](./Web.md#L1744) without requiring later phases.

**Build specification**

- Build **Express Service Starter** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Express Service Starter Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD — Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 12](./Web.md#L1921) · [Review Phase 11](./Web.md#L1744)

---
#### WEB Phase 12 Project

**Recommended build — Contract-First REST API**

**Why this project now:** it applies the material covered through [WEB Phase 12](./Web.md#L1921) without requiring later phases.

**Build specification**

- Build **Contract-First REST API** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Contract-First REST API Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD — Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 13](./Web.md#L2080) · [Review Phase 12](./Web.md#L1921)

---
#### WEB Phase 13 Project

**Recommended build — Transactional Project Database**

**Why this project now:** it applies the material covered through [WEB Phase 13](./Web.md#L2080) without requiring later phases.

**Build specification**

- Build **Transactional Project Database** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Transactional Project Database Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD — Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 14](./Web.md#L2233) · [Review Phase 13](./Web.md#L2080)

---
#### WEB Phase 14 Project

**Recommended build — Secure Session Auth App**

**Why this project now:** it applies the material covered through [WEB Phase 14](./Web.md#L2233) without requiring later phases.

**Build specification**

- Build **Secure Session Auth App** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Secure Session Auth App Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OWASP NodeGoat](https://github.com/OWASP/NodeGoat)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD — Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 15](./Web.md#L2401) · [Review Phase 14](./Web.md#L2233)

---
#### WEB Phase 15 Project

**Recommended build — Full-Stack Test Pyramid**

**Why this project now:** it applies the material covered through [WEB Phase 15](./Web.md#L2401) without requiring later phases.

**Build specification**

- Build **Full-Stack Test Pyramid** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Full-Stack Test Pyramid Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD — Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 16](./Web.md#L2569) · [Review Phase 15](./Web.md#L2401)

---
#### WEB Phase 16 Project

**Recommended build — Web Vitals Optimization Case**

**Why this project now:** it applies the material covered through [WEB Phase 16](./Web.md#L2569) without requiring later phases.

**Build specification**

- Build **Web Vitals Optimization Case** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Web Vitals Optimization Case Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project — JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Resume your study at WEB Phase 17](./Web.md#L2734) · [Review Phase 16](./Web.md#L2569)

---
#### WEB Phase 17 Project

**Recommended build — Preview-to-Production Pipeline**

**Why this project now:** it applies the material covered through [WEB Phase 17](./Web.md#L2734) without requiring later phases.

**Build specification**

- Build **Preview-to-Production Pipeline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Preview-to-Production Pipeline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project — JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Resume your study at WEB Phase 18](./Web.md#L2908) · [Review Phase 17](./Web.md#L2734)

---
#### WEB Phase 18 Project

**Recommended build — Real-Time Collaboration Board**

**Why this project now:** it applies the material covered through [WEB Phase 18](./Web.md#L2908) without requiring later phases.

**Build specification**

- Build **Real-Time Collaboration Board** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Real-Time Collaboration Board Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project — JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Resume your study at WEB Phase 19](./Web.md#L3067) · [Review Phase 18](./Web.md#L2908)

---
#### WEB Phase 19 Project

**Recommended build — Production SaaS Slice**

**Why this project now:** it applies the material covered through [WEB Phase 19](./Web.md#L3067) without requiring later phases.

**Build specification**

- Build **Production SaaS Slice** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Production SaaS Slice Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project — JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Resume your study at WEB Phase 20](./Web.md#L3229) · [Review Phase 19](./Web.md#L3067)

---
#### WEB Phase 20 Project

**Recommended build — Timed Web Interview Lab**

**Why this project now:** it applies the material covered through [WEB Phase 20](./Web.md#L3229) without requiring later phases.

**Build specification**

- Build **Timed Web Interview Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Timed Web Interview Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project — JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Return to the WEB phase index](./Web.md#L88) · [Review Phase 20](./Web.md#L3229)

---

### Cloud Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### CLOUD Phase 1 Project

**Recommended build — Linux Service Baseline**

**Why this project now:** it applies the material covered through [CLOUD Phase 1](./cloud.md#L96) without requiring later phases.

**Build specification**

- Build **Linux Service Baseline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Linux Service Baseline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform — Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 2](./cloud.md#L189) · [Review Phase 1](./cloud.md#L96)

---
#### CLOUD Phase 2 Project

**Recommended build — VM vs Container Benchmark**

**Why this project now:** it applies the material covered through [CLOUD Phase 2](./cloud.md#L189) without requiring later phases.

**Build specification**

- Build **VM vs Container Benchmark** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — VM vs Container Benchmark Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform — Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 3](./cloud.md#L280) · [Review Phase 2](./cloud.md#L189)

---
#### CLOUD Phase 3 Project

**Recommended build — Multi-Provider Architecture Matrix**

**Why this project now:** it applies the material covered through [CLOUD Phase 3](./cloud.md#L280) without requiring later phases.

**Build specification**

- Build **Multi-Provider Architecture Matrix** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Multi-Provider Architecture Matrix Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform — Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 4](./cloud.md#L374) · [Review Phase 3](./cloud.md#L280)

---
#### CLOUD Phase 4 Project

**Recommended build — Least-Privilege IAM Lab**

**Why this project now:** it applies the material covered through [CLOUD Phase 4](./cloud.md#L374) without requiring later phases.

**Build specification**

- Build **Least-Privilege IAM Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Least-Privilege IAM Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform — Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 5](./cloud.md#L467) · [Review Phase 4](./cloud.md#L374)

---
#### CLOUD Phase 5 Project

**Recommended build — Multi-Tier VPC**

**Why this project now:** it applies the material covered through [CLOUD Phase 5](./cloud.md#L467) without requiring later phases.

**Build specification**

- Build **Multi-Tier VPC** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Multi-Tier VPC Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform — Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 6](./cloud.md#L564) · [Review Phase 5](./cloud.md#L467)

---
#### CLOUD Phase 6 Project

**Recommended build — Autoscaled Web Tier**

**Why this project now:** it applies the material covered through [CLOUD Phase 6](./cloud.md#L564) without requiring later phases.

**Build specification**

- Build **Autoscaled Web Tier** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Autoscaled Web Tier Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App — Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 7](./cloud.md#L657) · [Review Phase 6](./cloud.md#L564)

---
#### CLOUD Phase 7 Project

**Recommended build — Versioned Object Backup**

**Why this project now:** it applies the material covered through [CLOUD Phase 7](./cloud.md#L657) without requiring later phases.

**Build specification**

- Build **Versioned Object Backup** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Versioned Object Backup Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App — Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 8](./cloud.md#L746) · [Review Phase 7](./cloud.md#L657)

---
#### CLOUD Phase 8 Project

**Recommended build — Resilient Managed Data Tier**

**Why this project now:** it applies the material covered through [CLOUD Phase 8](./cloud.md#L746) without requiring later phases.

**Build specification**

- Build **Resilient Managed Data Tier** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Resilient Managed Data Tier Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App — Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 9](./cloud.md#L836) · [Review Phase 8](./cloud.md#L746)

---
#### CLOUD Phase 9 Project

**Recommended build — CDN Delivery Benchmark**

**Why this project now:** it applies the material covered through [CLOUD Phase 9](./cloud.md#L836) without requiring later phases.

**Build specification**

- Build **CDN Delivery Benchmark** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — CDN Delivery Benchmark Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App — Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 10](./cloud.md#L928) · [Review Phase 9](./cloud.md#L836)

---
#### CLOUD Phase 10 Project

**Recommended build — Event-Driven Image Pipeline**

**Why this project now:** it applies the material covered through [CLOUD Phase 10](./cloud.md#L928) without requiring later phases.

**Build specification**

- Build **Event-Driven Image Pipeline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Event-Driven Image Pipeline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [AWS Serverless Workshops](https://github.com/aws-samples/aws-serverless-workshops)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App — Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 11](./cloud.md#L1021) · [Review Phase 10](./cloud.md#L928)

---
#### CLOUD Phase 11 Project

**Recommended build — Managed Kubernetes Service**

**Why this project now:** it applies the material covered through [CLOUD Phase 11](./cloud.md#L1021) without requiring later phases.

**Build specification**

- Build **Managed Kubernetes Service** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Managed Kubernetes Service Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application — KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 12](./cloud.md#L1111) · [Review Phase 11](./cloud.md#L1021)

---
#### CLOUD Phase 12 Project

**Recommended build — Reusable Terraform Environment**

**Why this project now:** it applies the material covered through [CLOUD Phase 12](./cloud.md#L1111) without requiring later phases.

**Build specification**

- Build **Reusable Terraform Environment** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Reusable Terraform Environment Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application — KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 13](./cloud.md#L1205) · [Review Phase 12](./cloud.md#L1111)

---
#### CLOUD Phase 13 Project

**Recommended build — Governed Landing Zone**

**Why this project now:** it applies the material covered through [CLOUD Phase 13](./cloud.md#L1205) without requiring later phases.

**Build specification**

- Build **Governed Landing Zone** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Governed Landing Zone Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application — KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 14](./cloud.md#L1301) · [Review Phase 13](./cloud.md#L1205)

---
#### CLOUD Phase 14 Project

**Recommended build — Encrypted Secret Rotation**

**Why this project now:** it applies the material covered through [CLOUD Phase 14](./cloud.md#L1301) without requiring later phases.

**Build specification**

- Build **Encrypted Secret Rotation** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Encrypted Secret Rotation Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application — KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 15](./cloud.md#L1389) · [Review Phase 14](./cloud.md#L1301)

---
#### CLOUD Phase 15 Project

**Recommended build — Observable Cloud Service**

**Why this project now:** it applies the material covered through [CLOUD Phase 15](./cloud.md#L1389) without requiring later phases.

**Build specification**

- Build **Observable Cloud Service** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Observable Cloud Service Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application — KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 16](./cloud.md#L1477) · [Review Phase 15](./cloud.md#L1389)

---
#### CLOUD Phase 16 Project

**Recommended build — Policy-as-Code Guardrails**

**Why this project now:** it applies the material covered through [CLOUD Phase 16](./cloud.md#L1477) without requiring later phases.

**Build specification**

- Build **Policy-as-Code Guardrails** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Policy-as-Code Guardrails Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps — The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Resume your study at CLOUD Phase 17](./cloud.md#L1568) · [Review Phase 16](./cloud.md#L1477)

---
#### CLOUD Phase 17 Project

**Recommended build — Disaster Recovery Game Day**

**Why this project now:** it applies the material covered through [CLOUD Phase 17](./cloud.md#L1568) without requiring later phases.

**Build specification**

- Build **Disaster Recovery Game Day** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Disaster Recovery Game Day Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps — The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Resume your study at CLOUD Phase 18](./cloud.md#L1660) · [Review Phase 17](./cloud.md#L1568)

---
#### CLOUD Phase 18 Project

**Recommended build — Cloud Cost Optimizer**

**Why this project now:** it applies the material covered through [CLOUD Phase 18](./cloud.md#L1660) without requiring later phases.

**Build specification**

- Build **Cloud Cost Optimizer** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Cloud Cost Optimizer Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps — The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Resume your study at CLOUD Phase 19](./cloud.md#L1750) · [Review Phase 18](./cloud.md#L1660)

---
#### CLOUD Phase 19 Project

**Recommended build — Migration Runbook and Pilot**

**Why this project now:** it applies the material covered through [CLOUD Phase 19](./cloud.md#L1750) without requiring later phases.

**Build specification**

- Build **Migration Runbook and Pilot** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Migration Runbook and Pilot Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps — The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Resume your study at CLOUD Phase 20](./cloud.md#L1841) · [Review Phase 19](./cloud.md#L1750)

---
#### CLOUD Phase 20 Project

**Recommended build — Cloud Architecture Portfolio**

**Why this project now:** it applies the material covered through [CLOUD Phase 20](./cloud.md#L1841) without requiring later phases.

**Build specification**

- Build **Cloud Architecture Portfolio** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Cloud Architecture Portfolio Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps — The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Return to the CLOUD phase index](./cloud.md#L67) · [Review Phase 20](./cloud.md#L1841)

---

### DevOps Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### DEVOPS Phase 1 Project

**Recommended build — Value Stream Delivery Map**

**Why this project now:** it applies the material covered through [DEVOPS Phase 1](./devops.md#L96) without requiring later phases.

**Build specification**

- Build **Value Stream Delivery Map** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Value Stream Delivery Map Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD — VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 2](./devops.md#L182) · [Review Phase 1](./devops.md#L96)

---
#### DEVOPS Phase 2 Project

**Recommended build — Hardened Linux Service**

**Why this project now:** it applies the material covered through [DEVOPS Phase 2](./devops.md#L182) without requiring later phases.

**Build specification**

- Build **Hardened Linux Service** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Hardened Linux Service Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD — VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 3](./devops.md#L272) · [Review Phase 2](./devops.md#L182)

---
#### DEVOPS Phase 3 Project

**Recommended build — Incident Troubleshooting Toolkit**

**Why this project now:** it applies the material covered through [DEVOPS Phase 3](./devops.md#L272) without requiring later phases.

**Build specification**

- Build **Incident Troubleshooting Toolkit** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Incident Troubleshooting Toolkit Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD — VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 4](./devops.md#L362) · [Review Phase 3](./devops.md#L272)

---
#### DEVOPS Phase 4 Project

**Recommended build — Pull-Request Git Workflow**

**Why this project now:** it applies the material covered through [DEVOPS Phase 4](./devops.md#L362) without requiring later phases.

**Build specification**

- Build **Pull-Request Git Workflow** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Pull-Request Git Workflow Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD — VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 5](./devops.md#L452) · [Review Phase 4](./devops.md#L362)

---
#### DEVOPS Phase 5 Project

**Recommended build — Operations Automation CLI**

**Why this project now:** it applies the material covered through [DEVOPS Phase 5](./devops.md#L452) without requiring later phases.

**Build specification**

- Build **Operations Automation CLI** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Operations Automation CLI Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD — VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 6](./devops.md#L543) · [Review Phase 5](./devops.md#L452)

---
#### DEVOPS Phase 6 Project

**Recommended build — Reproducible Artifact Pipeline**

**Why this project now:** it applies the material covered through [DEVOPS Phase 6](./devops.md#L543) without requiring later phases.

**Build specification**

- Build **Reproducible Artifact Pipeline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Reproducible Artifact Pipeline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes — Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 7](./devops.md#L631) · [Review Phase 6](./devops.md#L543)

---
#### DEVOPS Phase 7 Project

**Recommended build — Quality-Gated CI Pipeline**

**Why this project now:** it applies the material covered through [DEVOPS Phase 7](./devops.md#L631) without requiring later phases.

**Build specification**

- Build **Quality-Gated CI Pipeline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Quality-Gated CI Pipeline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes — Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 8](./devops.md#L719) · [Review Phase 7](./devops.md#L631)

---
#### DEVOPS Phase 8 Project

**Recommended build — Canary Deployment Simulator**

**Why this project now:** it applies the material covered through [DEVOPS Phase 8](./devops.md#L719) without requiring later phases.

**Build specification**

- Build **Canary Deployment Simulator** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Canary Deployment Simulator Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes — Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 9](./devops.md#L809) · [Review Phase 8](./devops.md#L719)

---
#### DEVOPS Phase 9 Project

**Recommended build — Hardened Multi-Stage Container**

**Why this project now:** it applies the material covered through [DEVOPS Phase 9](./devops.md#L809) without requiring later phases.

**Build specification**

- Build **Hardened Multi-Stage Container** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Hardened Multi-Stage Container Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Docker Getting Started](https://github.com/docker/getting-started)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes — Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 10](./devops.md#L899) · [Review Phase 9](./devops.md#L809)

---
#### DEVOPS Phase 10 Project

**Recommended build — Kubernetes Operations Lab**

**Why this project now:** it applies the material covered through [DEVOPS Phase 10](./devops.md#L899) without requiring later phases.

**Build specification**

- Build **Kubernetes Operations Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Kubernetes Operations Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Kubernetes Examples](https://github.com/kubernetes/examples)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes — Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 11](./devops.md#L989) · [Review Phase 10](./devops.md#L899)

---
#### DEVOPS Phase 11 Project

**Recommended build — Terraform State Lifecycle Lab**

**Why this project now:** it applies the material covered through [DEVOPS Phase 11](./devops.md#L989) without requiring later phases.

**Build specification**

- Build **Terraform State Lifecycle Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Terraform State Lifecycle Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project — Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 12](./devops.md#L1080) · [Review Phase 11](./devops.md#L989)

---
#### DEVOPS Phase 12 Project

**Recommended build — Idempotent Ansible Baseline**

**Why this project now:** it applies the material covered through [DEVOPS Phase 12](./devops.md#L1080) without requiring later phases.

**Build specification**

- Build **Idempotent Ansible Baseline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Idempotent Ansible Baseline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project — Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 13](./devops.md#L1169) · [Review Phase 12](./devops.md#L1080)

---
#### DEVOPS Phase 13 Project

**Recommended build — Cloud Delivery Foundation**

**Why this project now:** it applies the material covered through [DEVOPS Phase 13](./devops.md#L1169) without requiring later phases.

**Build specification**

- Build **Cloud Delivery Foundation** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Cloud Delivery Foundation Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project — Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 14](./devops.md#L1257) · [Review Phase 13](./devops.md#L1169)

---
#### DEVOPS Phase 14 Project

**Recommended build — Observable Demo Service**

**Why this project now:** it applies the material covered through [DEVOPS Phase 14](./devops.md#L1257) without requiring later phases.

**Build specification**

- Build **Observable Demo Service** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Observable Demo Service Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project — Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 15](./devops.md#L1346) · [Review Phase 14](./devops.md#L1257)

---
#### DEVOPS Phase 15 Project

**Recommended build — SLO and Error Budget Dashboard**

**Why this project now:** it applies the material covered through [DEVOPS Phase 15](./devops.md#L1346) without requiring later phases.

**Build specification**

- Build **SLO and Error Budget Dashboard** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — SLO and Error Budget Dashboard Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project — Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 16](./devops.md#L1436) · [Review Phase 15](./devops.md#L1346)

---
#### DEVOPS Phase 16 Project

**Recommended build — Signed Software Supply Chain**

**Why this project now:** it applies the material covered through [DEVOPS Phase 16](./devops.md#L1436) without requiring later phases.

**Build specification**

- Build **Signed Software Supply Chain** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Signed Software Supply Chain Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial — LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Resume your study at DEVOPS Phase 17](./devops.md#L1525) · [Review Phase 16](./devops.md#L1436)

---
#### DEVOPS Phase 17 Project

**Recommended build — GitOps Application Platform**

**Why this project now:** it applies the material covered through [DEVOPS Phase 17](./devops.md#L1525) without requiring later phases.

**Build specification**

- Build **GitOps Application Platform** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — GitOps Application Platform Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Argo CD](https://github.com/argoproj/argo-cd)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial — LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Resume your study at DEVOPS Phase 18](./devops.md#L1614) · [Review Phase 17](./devops.md#L1525)

---
#### DEVOPS Phase 18 Project

**Recommended build — Chaos Game Day and Postmortem**

**Why this project now:** it applies the material covered through [DEVOPS Phase 18](./devops.md#L1614) without requiring later phases.

**Build specification**

- Build **Chaos Game Day and Postmortem** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Chaos Game Day and Postmortem Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial — LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Resume your study at DEVOPS Phase 19](./devops.md#L1702) · [Review Phase 18](./devops.md#L1614)

---
#### DEVOPS Phase 19 Project

**Recommended build — Production Delivery Platform**

**Why this project now:** it applies the material covered through [DEVOPS Phase 19](./devops.md#L1702) without requiring later phases.

**Build specification**

- Build **Production Delivery Platform** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Production Delivery Platform Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial — LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Resume your study at DEVOPS Phase 20](./devops.md#L1790) · [Review Phase 19](./devops.md#L1702)

---
#### DEVOPS Phase 20 Project

**Recommended build — Timed DevOps Incident Drill**

**Why this project now:** it applies the material covered through [DEVOPS Phase 20](./devops.md#L1790) without requiring later phases.

**Build specification**

- Build **Timed DevOps Incident Drill** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Timed DevOps Incident Drill Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial — LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Return to the DEVOPS phase index](./devops.md#L67) · [Review Phase 20](./devops.md#L1790)

---

### Cyber Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent portfolio artifact.

#### CYBER Phase 1 Project

**Recommended build — Risk Register and Treatment Plan**

**Why this project now:** it applies the material covered through [CYBER Phase 1](./ICT_Cybersecurity.md#L160) without requiring later phases.

**Build specification**

- Build **Risk Register and Treatment Plan** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Risk Register and Treatment Plan Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab — MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 2](./ICT_Cybersecurity.md#L308) · [Review Phase 1](./ICT_Cybersecurity.md#L160)

---
#### CYBER Phase 2 Project

**Recommended build — Network Attack Surface Map**

**Why this project now:** it applies the material covered through [CYBER Phase 2](./ICT_Cybersecurity.md#L308) without requiring later phases.

**Build specification**

- Build **Network Attack Surface Map** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Network Attack Surface Map Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab — MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 3](./ICT_Cybersecurity.md#L446) · [Review Phase 2](./ICT_Cybersecurity.md#L308)

---
#### CYBER Phase 3 Project

**Recommended build — Host Hardening Baseline**

**Why this project now:** it applies the material covered through [CYBER Phase 3](./ICT_Cybersecurity.md#L446) without requiring later phases.

**Build specification**

- Build **Host Hardening Baseline** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Host Hardening Baseline Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab — MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 4](./ICT_Cybersecurity.md#L586) · [Review Phase 3](./ICT_Cybersecurity.md#L446)

---
#### CYBER Phase 4 Project

**Recommended build — Secure File Vault**

**Why this project now:** it applies the material covered through [CYBER Phase 4](./ICT_Cybersecurity.md#L586) without requiring later phases.

**Build specification**

- Build **Secure File Vault** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Secure File Vault Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab — MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 5](./ICT_Cybersecurity.md#L724) · [Review Phase 4](./ICT_Cybersecurity.md#L586)

---
#### CYBER Phase 5 Project

**Recommended build — Least-Privilege IAM Review**

**Why this project now:** it applies the material covered through [CYBER Phase 5](./ICT_Cybersecurity.md#L724) without requiring later phases.

**Build specification**

- Build **Least-Privilege IAM Review** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Least-Privilege IAM Review Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab — MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 6](./ICT_Cybersecurity.md#L862) · [Review Phase 5](./ICT_Cybersecurity.md#L724)

---
#### CYBER Phase 6 Project

**Recommended build — Threat Model and ATT&CK Map**

**Why this project now:** it applies the material covered through [CYBER Phase 6](./ICT_Cybersecurity.md#L862) without requiring later phases.

**Build specification**

- Build **Threat Model and ATT&CK Map** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Threat Model and ATT&CK Map Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Atomic Red Team](https://github.com/redcanaryco/atomic-red-team)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab — Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 7](./ICT_Cybersecurity.md#L1007) · [Review Phase 6](./ICT_Cybersecurity.md#L862)

---
#### CYBER Phase 7 Project

**Recommended build — OWASP Remediation Lab**

**Why this project now:** it applies the material covered through [CYBER Phase 7](./ICT_Cybersecurity.md#L1007) without requiring later phases.

**Build specification**

- Build **OWASP Remediation Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — OWASP Remediation Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OWASP Juice Shop](https://github.com/juice-shop/juice-shop)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab — Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 8](./ICT_Cybersecurity.md#L1155) · [Review Phase 7](./ICT_Cybersecurity.md#L1007)

---
#### CYBER Phase 8 Project

**Recommended build — Firewall and IDS Validation**

**Why this project now:** it applies the material covered through [CYBER Phase 8](./ICT_Cybersecurity.md#L1155) without requiring later phases.

**Build specification**

- Build **Firewall and IDS Validation** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Firewall and IDS Validation Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab — Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 9](./ICT_Cybersecurity.md#L1283) · [Review Phase 8](./ICT_Cybersecurity.md#L1155)

---
#### CYBER Phase 9 Project

**Recommended build — Endpoint Hardening Pack**

**Why this project now:** it applies the material covered through [CYBER Phase 9](./ICT_Cybersecurity.md#L1283) without requiring later phases.

**Build specification**

- Build **Endpoint Hardening Pack** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Endpoint Hardening Pack Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab — Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 10](./ICT_Cybersecurity.md#L1410) · [Review Phase 9](./ICT_Cybersecurity.md#L1283)

---
#### CYBER Phase 10 Project

**Recommended build — Vulnerability Triage Program**

**Why this project now:** it applies the material covered through [CYBER Phase 10](./ICT_Cybersecurity.md#L1410) without requiring later phases.

**Build specification**

- Build **Vulnerability Triage Program** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Vulnerability Triage Program Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab — Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 11](./ICT_Cybersecurity.md#L1540) · [Review Phase 10](./ICT_Cybersecurity.md#L1410)

---
#### CYBER Phase 11 Project

**Recommended build — Authorized Web Pentest Report**

**Why this project now:** it applies the material covered through [CYBER Phase 11](./ICT_Cybersecurity.md#L1540) without requiring later phases.

**Build specification**

- Build **Authorized Web Pentest Report** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Authorized Web Pentest Report Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [OWASP Juice Shop](https://github.com/juice-shop/juice-shop)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM — Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 12](./ICT_Cybersecurity.md#L1682) · [Review Phase 11](./ICT_Cybersecurity.md#L1540)

---
#### CYBER Phase 12 Project

**Recommended build — Active Directory Detection Lab**

**Why this project now:** it applies the material covered through [CYBER Phase 12](./ICT_Cybersecurity.md#L1682) without requiring later phases.

**Build specification**

- Build **Active Directory Detection Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Active Directory Detection Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM — Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 13](./ICT_Cybersecurity.md#L1812) · [Review Phase 12](./ICT_Cybersecurity.md#L1682)

---
#### CYBER Phase 13 Project

**Recommended build — SIEM Detection Engineering Pack**

**Why this project now:** it applies the material covered through [CYBER Phase 13](./ICT_Cybersecurity.md#L1812) without requiring later phases.

**Build specification**

- Build **SIEM Detection Engineering Pack** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — SIEM Detection Engineering Pack Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM — Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 14](./ICT_Cybersecurity.md#L1949) · [Review Phase 13](./ICT_Cybersecurity.md#L1812)

---
#### CYBER Phase 14 Project

**Recommended build — Incident Forensics Case**

**Why this project now:** it applies the material covered through [CYBER Phase 14](./ICT_Cybersecurity.md#L1949) without requiring later phases.

**Build specification**

- Build **Incident Forensics Case** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Incident Forensics Case Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM — Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 15](./ICT_Cybersecurity.md#L2083) · [Review Phase 14](./ICT_Cybersecurity.md#L1949)

---
#### CYBER Phase 15 Project

**Recommended build — Cloud IAM Attack-Path Review**

**Why this project now:** it applies the material covered through [CYBER Phase 15](./ICT_Cybersecurity.md#L2083) without requiring later phases.

**Build specification**

- Build **Cloud IAM Attack-Path Review** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Cloud IAM Attack-Path Review Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM — Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 16](./ICT_Cybersecurity.md#L2215) · [Review Phase 15](./ICT_Cybersecurity.md#L2083)

---
#### CYBER Phase 16 Project

**Recommended build — Container Supply-Chain Lab**

**Why this project now:** it applies the material covered through [CYBER Phase 16](./ICT_Cybersecurity.md#L2215) without requiring later phases.

**Build specification**

- Build **Container Supply-Chain Lab** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Container Supply-Chain Lab Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas — Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Resume your study at CYBER Phase 17](./ICT_Cybersecurity.md#L2344) · [Review Phase 16](./ICT_Cybersecurity.md#L2215)

---
#### CYBER Phase 17 Project

**Recommended build — Static Malware Triage**

**Why this project now:** it applies the material covered through [CYBER Phase 17](./ICT_Cybersecurity.md#L2344) without requiring later phases.

**Build specification**

- Build **Static Malware Triage** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Static Malware Triage Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas — Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Resume your study at CYBER Phase 18](./ICT_Cybersecurity.md#L2469) · [Review Phase 17](./ICT_Cybersecurity.md#L2344)

---
#### CYBER Phase 18 Project

**Recommended build — Control-to-Evidence Audit Pack**

**Why this project now:** it applies the material covered through [CYBER Phase 18](./ICT_Cybersecurity.md#L2469) without requiring later phases.

**Build specification**

- Build **Control-to-Evidence Audit Pack** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Control-to-Evidence Audit Pack Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas — Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Resume your study at CYBER Phase 19](./ICT_Cybersecurity.md#L2596) · [Review Phase 18](./ICT_Cybersecurity.md#L2469)

---
#### CYBER Phase 19 Project

**Recommended build — Defensive Security Portfolio**

**Why this project now:** it applies the material covered through [CYBER Phase 19](./ICT_Cybersecurity.md#L2596) without requiring later phases.

**Build specification**

- Build **Defensive Security Portfolio** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Defensive Security Portfolio Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas — Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Resume your study at CYBER Phase 20](./ICT_Cybersecurity.md#L2730) · [Review Phase 19](./ICT_Cybersecurity.md#L2596)

---
#### CYBER Phase 20 Project

**Recommended build — Timed SOC Investigation**

**Why this project now:** it applies the material covered through [CYBER Phase 20](./ICT_Cybersecurity.md#L2730) without requiring later phases.

**Build specification**

- Build **Timed SOC Investigation** as the smallest working artifact that proves this phase's core idea. Demonstrate at least three scenarios or examples and explain where each concept learned so far appears.
- **Scope guard:** use only concepts introduced through this phase; treat later-phase tools as optional stretch work.
- **Done when:** a new reader can follow the README, reproduce or inspect the artifact, and see evidence for every stated scenario.

**Alternative project — Timed SOC Investigation Remix:** apply the same phase concept to a different small domain, dataset, topology, or workflow using no later-phase tools; document what changed.

- **Similar implementation on GitHub:** [Atomic Red Team](https://github.com/redcanaryco/atomic-red-team)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas — Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Return to the CYBER phase index](./ICT_Cybersecurity.md#L118) · [Review Phase 20](./ICT_Cybersecurity.md#L2730)

---

---


### Anti-patterns (do not do this)

- Starting a "full Netflix clone" before you can implement a stack from scratch
- Skipping README until "later" (later never ships)
- Copy-pasting LLD solutions without drawing your own class diagram first
- Building Odoo modules before you can explain `__init__` and encapsulation
- Deploying Kubernetes before you can diagnose a Linux process, network path, or container
- Clicking cloud resources into existence without an identity, cost, recovery, and IaC story

---

## 2. Programming Fundamentals & OOP (`OOP.md`)

**File:** [`OOP.md`](./OOP.md)

**Scope:** Procedural fundamentals first, then pillars, SOLID, patterns, and LLD interview classics.

*Beginner project ideas also appear in [droidevs/python-projects-beginner](https://github.com/droidevs/python-projects-beginner) and [beginnersly.com Python projects](https://www.beginnersly.com/tutorials/python/python-projects) - use them for extra prompts, not as copy-paste solutions.*

---

### Fundamentals cluster (before heavy OOP)

*Do these after [`CS.md`](./CS.md) Phase 1, alongside or just before [`OOP.md`](./OOP.md) Phase 1.*

#### OOP-F01: CLI Calculator

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1, [`OOP.md`](./OOP.md) Phase 1 |
| **Difficulty** | Easy |

**Goal:** Parse user input, apply operations, and handle bad input without crashing.

**Concepts practiced:** variables, control flow, functions, error handling, REPL loop

**Steps:**

1. Accept two numbers and an operator (`+`, `-`, `*`, `/`) from stdin
2. Wrap parsing in try/except for invalid input
3. Refuse division by zero with a clear message
4. Loop until the user types `quit`
5. Extract `parse_input()` and `calculate(a, op, b)` as pure functions
6. Add `--help` and a minimal test for `calculate`

**Done when:**

- All four operators work; bad input never crashes the program
- README shows sample session and lists one parsing edge case you handled

**Stretch (optional):**

- Add parentheses or a small expression parser (shunting-yard)

---

#### OOP-F02: Number Guessing Game

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1 |
| **Difficulty** | Easy |

**Goal:** Practice loops, randomness, and bounded attempts with user feedback.

**Concepts practiced:** `while` loops, `if/elif`, `random`, comparison operators

**Steps:**

1. Pick a secret integer in a configurable range (default 1-100)
2. Prompt until correct or attempts exhausted (default 7)
3. Reply "higher", "lower", or "correct"
4. Print attempt count on win; reveal secret on loss
5. Add `play_round()` callable from `main`
6. Log each guess to a list and print history at end

**Done when:**

- Win and loss paths both behave; range and max attempts are CLI flags
- You can explain why a binary-search strategy wins in fewer guesses

**Stretch (optional):**

- Two-player mode where one human sets the secret

---

#### OOP-F03: File Organizer by Extension

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1, [`OOP.md`](./OOP.md) Phase 1 |
| **Difficulty** | Easy |

**Goal:** Walk a directory tree and sort files into extension folders safely.

**Concepts practiced:** `pathlib` or `os`, loops, string ops, idempotent file moves

**Steps:**

1. Accept a source directory path via CLI argument
2. Create subfolders like `images/`, `docs/`, `other/` from a mapping dict
3. Move (or copy first for safety) each file by extension
4. Skip hidden files and already-organized folders
5. Print a summary: counts per category
6. Add `--dry-run` that only prints planned moves

**Done when:**

- Dry-run and live modes both work on a test folder you create
- README documents what happens on name collisions

**Stretch (optional):**

- Organize by date modified instead of extension

---

#### OOP-F04: Password Generator & Strength Checker

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1, [`OOP.md`](./OOP.md) Phase 4 (preview encapsulation) |
| **Difficulty** | Easy |

**Goal:** Generate cryptographically sensible passwords and score user-chosen ones.

**Concepts practiced:** `secrets` module, string categories, scoring functions

**Steps:**

1. Generate passwords with configurable length and character sets
2. Implement `score_password(pwd) -> int` using length and charset rules
3. Print human-readable feedback ("add symbols", "too short")
4. Never print or log generated passwords in debug mode by default
5. Add unit tests for scoring edge cases (empty, all lower, etc.)

**Done when:**

- Generator uses `secrets`, not `random`
- README explains why `random` is wrong for passwords

**Stretch (optional):**

- Read forbidden-password list from a file

---

### Pillars cluster (OOP Phases 1-9)

*Inspired in part by [muhammadwaheedairi/python-oop-practice](https://github.com/muhammadwaheedairi/python-oop-practice) - build your own versions.*

#### OOP-P01: Bank Account Hierarchy

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 2-7 |
| **Difficulty** | Medium |

**Goal:** Model accounts with shared behavior and specialized rules via inheritance and polymorphism.

**Concepts practiced:** classes, encapsulation, inheritance, polymorphism, `__repr__`

**Steps:**

1. Base `Account` with private balance, deposit, withdraw, and invariant checks
2. Subclasses: `SavingsAccount` (min balance), `CheckingAccount` (overdraft limit)
3. Block invalid withdrawals at the object boundary, not in `main`
4. Demonstrate polymorphism: loop over accounts and call `.withdraw(50)`
5. Add `@property` for read-only balance
6. Write tests that prove invalid state cannot be reached

**Done when:**

- No public mutable balance field
- README includes class diagram and MRO explanation for your hierarchy

**Stretch (optional):**

- Replace inheritance with composition (`AccountPolicy` strategy objects)

---

#### OOP-P02: Library Catalog System

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 4-10 |
| **Difficulty** | Medium |

**Goal:** Track books, members, and loans with clear object relationships.

**Concepts practiced:** composition, encapsulation, domain modeling, CRC-style thinking

**Steps:**

1. Classes: `Book`, `Member`, `Loan`, `Library`
2. `Library` lends/returns copies; enforce one active loan per copy
3. Persist state to JSON on exit; reload on start
4. Search by title or author via `Library.find_books(query)`
5. Sketch relationships (Member has many Loans, Book has many Copies)
6. Add overdue calculation without god-method on `Library`

**Done when:**

- Loan/return invariants hold after restart from JSON
- You can walk through associations in an interview without opening code

**Stretch (optional):**

- Fine calculation with a `FinePolicy` interface

---

#### OOP-P03: Shape Area Calculator (Abstraction Lab)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 5, 7 |
| **Difficulty** | Easy |

**Goal:** Use an abstract base class so callers depend on `Shape`, not concrete types.

**Concepts practiced:** ABCs, polymorphism, abstraction

**Steps:**

1. Define `Shape` ABC with `area()` and `perimeter()`
2. Implement `Circle`, `Rectangle`, `Triangle`
3. Collect shapes in a list and sum areas without `isinstance` chains
4. Validate constructor inputs (negative radius raises)
5. Add `__eq__` for value comparison on at least one shape
6. Test with a fake `Shape` stub in unit tests

**Done when:**

- Zero `if type ==` chains in area summation
- README explains what abstraction buys you vs a bag of functions

**Stretch (optional):**

- Serialize/deserialize shapes to JSON by type tag

---

#### OOP-P04: Contact Book with Encapsulation

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 3-4, 9 |
| **Difficulty** | Easy |

**Goal:** Store contacts behind a clean API; hide internal storage choices.

**Concepts practiced:** encapsulation, properties, dunder methods, validation

**Steps:**

1. `Contact` with validated email/phone setters
2. `ContactBook` with add, remove, search, list - no exposed raw dict
3. Implement `__len__` and `__contains__` on `ContactBook`
4. Pretty-print with `__repr__` on `Contact`
5. Persist to CSV or JSON via methods on `ContactBook`, not loose scripts
6. Test that invalid email cannot be assigned

**Done when:**

- External code never touches `_contacts` dict directly
- Search is case-insensitive and covered by a test

**Stretch (optional):**

- Tag contacts and filter by tag

---

### SOLID & Patterns cluster (OOP Phases 12-15)

#### OOP-S01: Notification System (Observer + Strategy)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 12, 15 |
| **Difficulty** | Medium |

**Goal:** Send notifications through multiple channels without modifying core domain logic for each new channel.

**Concepts practiced:** Open/Closed, Strategy, Observer, dependency direction

**Steps:**

1. Domain event: `OrderPlaced` with order id and total
2. `Notifier` interface with `send(event)` implementations: Email, SMS, Slack
3. `OrderService` publishes events to a list of subscribers
4. Register channels via config, not edits inside `OrderService`
5. Unit-test with fake `Notifier` that records messages
6. Document which SOLID letters each class satisfies

**Done when:**

- Adding `PushNotifier` requires zero changes to `OrderService`
- README maps classes to Observer vs Strategy roles

**Stretch (optional):**

- Async dispatch with a simple queue

---

#### OOP-S02: Payment Processor (Adapter + Factory)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 13-14 |
| **Difficulty** | Medium |

**Goal:** Integrate two fake payment APIs behind one `PaymentGateway` interface.

**Concepts practiced:** Adapter, Factory, Interface Segregation

**Steps:**

1. Define `PaymentGateway.charge(amount, currency) -> Receipt`
2. Write adapters for `StripeLikeAPI` and `PayPalLikeAPI` with different method names
3. Factory reads `GATEWAY=stripe|paypal` from env
4. Return unified `Receipt` or raise `PaymentError`
5. Test adapters with stub APIs
6. Explain in README why callers never import vendor classes

**Done when:**

- Switching gateway is one env var change
- Adapters contain all translation logic

**Stretch (optional):**

- Decorator for retry-on-timeout

---

#### OOP-S03: Text Formatter Pipeline (Decorator + Command)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 14-15 |
| **Difficulty** | Medium |

**Goal:** Apply reversible formatting steps to text using composable commands.

**Concepts practiced:** Decorator pattern, Command pattern, composition

**Steps:**

1. `Formatter` interface with `format(text) -> str`
2. Concrete formatters: trim, uppercase, replace tabs, wrap width
3. Compose formatters in a pipeline object
4. Command objects support `execute` and `undo` for at least two steps
5. CLI: `--steps trim,upper,wrap`
6. Test pipeline order matters (document order in README)

**Done when:**

- Pipeline is data-driven from CLI flags
- Undo works for wrap and replace steps

**Stretch (optional):**

- Persist command history to redo

---

### LLD & Portfolio cluster (OOP Phases 16-19)

#### OOP-L01: Parking Lot LLD

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phase 18, [`CS.md`](./CS.md) Phase 10 |
| **Difficulty** | Hard |

**Goal:** Classic LLD interview prompt - vehicles, spots, tickets, fees - with clean class boundaries.

**Concepts practiced:** LLD method, enums, composition, extensibility

**Steps:**

1. Write 1-page design: entities, APIs, concurrency assumptions
2. Implement `ParkingLot`, `Spot`, `Vehicle` (Car, Bike, Truck), `Ticket`
3. Support spot types and incompatible vehicle assignment rules
4. Calculate fee by duration with a pluggable `FeeStrategy`
5. Provide `park(vehicle)` and `unpark(ticket_id)` with full state transitions
6. Add tests for full lot, wrong spot type, and duplicate park attempt

**Done when:**

- Design doc and code both public; README links them
- You can whiteboard the diagram in under 5 minutes

**Stretch (optional):**

- Multi-floor lot with nearest-spot finder (BFS preview)

---

#### OOP-L02: Vending Machine State Machine

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 15, 18 |
| **Difficulty** | Medium |

**Goal:** Model vending machine behavior with explicit states instead of boolean flags.

**Concepts practiced:** State pattern, encapsulation, LLD

**Steps:**

1. States: Idle, HasMoney, Dispensing, OutOfStock
2. Events: insert coin, select item, dispense, cancel
3. Inventory per slot with refill API
4. Return change calculation with greedy coin logic
5. Reject invalid transitions with clear errors
6. Table in README: state x event -> next state

**Done when:**

- No giant `if self.state ==` in business methods (delegated to state objects)
- All transitions in table are covered by tests

**Stretch (optional):**

- Admin mode for price changes

---

#### OOP-L03: Elevator Controller (Multi-car LLD)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phase 18 |
| **Difficulty** | Hard |

**Goal:** Schedule elevator cars for pickup requests using a defined algorithm.

**Concepts practiced:** LLD, queues, strategy, simulation

**Steps:**

1. Define `Elevator`, `Controller`, `Request` (source floor, direction)
2. Implement SCAN or LOOK scan for one car first
3. Simulate requests from CLI or scripted file
4. Log each step: car id, floor, door open/close
5. Metrics: average wait time, max wait
6. Compare algorithm choice in README with trade-offs

**Done when:**

- Simulation runs deterministically from a seed file
- README states assumptions (number of floors, peak load, etc.)

**Stretch (optional):**

- Two cars with a simple dispatcher

---

## 3. Computer Science (`CS.md`)

**File:** [`CS.md`](./CS.md)

**Scope:** Data structures, algorithms, systems, web, databases, and design - each project maps to a phase cluster.

*Extra prompts: [yusufcore/python_practise](https://github.com/yusufcore/python_practise) for DS/A drills.*

---

### DS/A cluster (CS Phases 3-9)

#### CS-D01: Dynamic Array & Linked List from Scratch

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 3 |
| **Difficulty** | Medium |

**Goal:** Implement your own resizable array and singly linked list with the same API surface.

**Concepts practiced:** amortized analysis, pointers, Big O comparison

**Steps:**

1. `DynamicArray` with append, insert, delete, index get/set
2. `SinglyLinkedList` with the same operations
3. Benchmark or count operations for insert-at-head vs append
4. Implement `__iter__` on both
5. Document Big O per method in docstrings
6. Tests comparing behavior on edge cases (empty, single element)

**Done when:**

- No use of Python `list` inside `DynamicArray` storage
- README includes table: operation x structure x complexity

**Stretch (optional):**

- Doubly linked list with O(1) delete given node reference

---

#### CS-D02: Stack-Based Expression Evaluator

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 3 |
| **Difficulty** | Medium |

**Goal:** Evaluate infix arithmetic using two stacks or shunting-yard conversion.

**Concepts practiced:** stacks, parsing, operator precedence

**Steps:**

1. Support `+`, `-`, `*`, `/`, parentheses, integers
2. Implement shunting-yard to RPN, then evaluate
3. Reject malformed input with position hint
4. Unit tests for nested parens and unary minus
5. CLI accepts one expression string
6. Explain algorithm in README with one worked example

**Done when:**

- `"3 + 5 * (2 - 8)"` evaluates correctly
- Malformed input never throws uncaught exceptions

**Stretch (optional):**

- Variables via `x=3; x+1`

---

#### CS-D03: LRU Cache

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 3, 6 |
| **Difficulty** | Hard |

**Goal:** `get` and `put` in O(1) average with a capacity cap.

**Concepts practiced:** hash map + doubly linked list, design under constraints

**Steps:**

1. Define `LRUCache(capacity)` with `get(key)`, `put(key, value)`
2. Track usage order; evict LRU on overflow
3. `get` updates recency
4. Tests: eviction order, update existing key, capacity 1 edge case
5. Optional: thread-unsafe version first, document if adding locks
6. README diagram of map node <-> list node links

**Done when:**

- Pass a standard LeetCode-style test suite you write yourself
- Complexity claims match implementation

**Stretch (optional):**

- TTL expiry per key

---

#### CS-D04: Graph Route Planner (BFS/DFS)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 8 |
| **Difficulty** | Medium |

**Goal:** Find shortest path in an unweighted city graph and compare BFS vs DFS visits.

**Concepts practiced:** adjacency list, BFS, DFS, path reconstruction

**Steps:**

1. Load graph from JSON (nodes, edges)
2. Implement BFS shortest path and DFS reachability
3. Print visited order for both on same graph
4. CLI: `shortest A D` and `reach A`
5. Detect disconnected components count
6. Visualize small graph as ASCII in README

**Done when:**

- BFS returns shortest path length and path list
- You explain when DFS is wrong for shortest path

**Stretch (optional):**

- Dijkstra with weighted edges

---

### Systems, Web & DB cluster (CS Phases 11-15)

#### CS-S01: Mini HTTP Server (Raw Sockets)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 12-13, [`Networks.md`](./Networks.md) Phase 13 |
| **Difficulty** | Hard |

**Goal:** Serve static files over HTTP/1.1 using sockets only (no Flask).

**Concepts practiced:** TCP, HTTP parsing, status codes, MIME types

**Steps:**

1. TCP listen on port 8080; accept one client at a time first
2. Parse request line and headers minimally
3. Serve `GET /index.html` from a `public/` folder
4. Return 404 and 405 for missing paths and wrong verbs
5. Log method, path, status to stdout
6. Document request/response raw bytes in README

**Done when:**

- Browser loads HTML and CSS from your server
- curl shows correct headers and status codes

**Stretch (optional):**

- `Connection: keep-alive` for multiple requests

---

#### CS-S02: URL Shortener (Design + Code)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 13-14, 17 |
| **Difficulty** | Medium |

**Goal:** REST API for short links with redirect and basic analytics.

**Concepts practiced:** REST design, SQL schema, hashing/base62, indexes

**Steps:**

1. Design schema: `urls(id, slug, target, created_at, hits)`
2. `POST /api/shorten` with URL validation
3. `GET /:slug` redirects 302 and increments hits
4. Use SQLite or Postgres; index slug column
5. Write API tests for duplicate slug handling
6. One-page design doc: capacity estimate, collision strategy

**Done when:**

- Redirect works in browser; hit count persists
- README includes ER diagram and sample curl commands

**Stretch (optional):**

- Expiring links with TTL column

---

#### CS-S03: Task Queue Worker (Processes vs Threads)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 11 |
| **Difficulty** | Medium |

**Goal:** Compare thread pool vs process pool for CPU vs IO fake workloads.

**Concepts practiced:** threads, processes, GIL intuition, queues

**Steps:**

1. Producer enqueues jobs (sleep=IO, compute=CPU)
2. Worker pool consumes and writes results
3. Run same workload with `ThreadPoolExecutor` and `ProcessPoolExecutor`
4. Plot or tabulate throughput vs worker count
5. Explain results in README with GIL mention for Python
6. Graceful shutdown on SIGINT

**Done when:**

- Table shows IO-bound favors threads, CPU-bound favors processes (on your machine)
- Code is runnable with one command

**Stretch (optional):**

- Persistent queue with Redis or SQLite

---

#### CS-S04: Blog API with Auth

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 13-15 |
| **Difficulty** | Hard |

**Goal:** CRUD posts with password hashing and session or JWT auth.

**Concepts practiced:** REST, SQL, bcrypt/argon2, middleware, SQL injection prevention

**Steps:**

1. Users register/login; store hashed passwords only
2. JWT or session cookie protects `POST/PATCH/DELETE` posts
3. Parameterized SQL or ORM only - no string concat queries
4. Posts belong to authors; users cannot edit others' posts
5. Integration tests for auth failures and happy path
6. README threat model: what you protect and what you defer

**Done when:**

- SQL injection attempt in a test fails safely
- OpenAPI or route table documented

**Stretch (optional):**

- Refresh tokens or rate limiting on login

---

### Design & Distributed cluster (CS Phases 16-18)

#### CS-X01: Rate Limiter Library

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 17 |
| **Difficulty** | Medium |

**Goal:** Token bucket or sliding window limiter reusable in any API.

**Concepts practiced:** algorithms, time windows, system design building block

**Steps:**

1. Interface: `allow(key) -> bool`
2. Implement token bucket with configurable rate and burst
3. In-memory store first; thread-safe if using threads
4. Demo middleware for a tiny HTTP app
5. Tests advance clock or use injectable time source
6. README compares token bucket vs fixed window

**Done when:**

- Burst then steady rate behaves as documented
- Unit tests do not depend on real sleep for correctness

**Stretch (optional):**

- Redis-backed distributed limiter (design note enough if no Redis)

---

#### CS-X02: Consistent Hash Ring Simulator

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 18 |
| **Difficulty** | Medium |

**Goal:** Visualize key distribution when nodes join or leave the ring.

**Concepts practiced:** consistent hashing, minimal remapping on churn

**Steps:**

1. Hash keys and nodes to a ring (0..2^n-1 or library hash)
2. Assign key to first node clockwise
3. CLI: add/remove node, print moved key fraction
4. Compare vs naive mod-N hashing in README
5. Plot histogram of keys per node (matplotlib or ASCII)
6. Document virtual nodes option

**Done when:**

- Adding one node moves ~1/N keys, not nearly all
- README ties to cache sharding use case

**Stretch (optional):**

- Replication factor 3 placement

---

#### CS-X03: Event Sourcing Lite (Bank Ledger)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 14, 18 |
| **Difficulty** | Hard |

**Goal:** Store account state as append-only events; rebuild balance from log.

**Concepts practiced:** event sourcing, immutability, projections

**Steps:**

1. Events: `AccountOpened`, `MoneyDeposited`, `MoneyWithdrawn`
2. Append to JSON or SQL event table; no in-place balance updates
3. Projection rebuilds current balance from stream
4. Idempotent replay using event ids
5. Snapshot every N events for faster rebuild
6. Tests: replay twice yields same balance

**Done when:**

- You can delete projection table and rebuild from events
- README contrasts with CRUD-only design

**Stretch (optional):**

- Optimistic concurrency with expected version

---

## 4. Data Analyst & Engineer (`Data.md`)

**File:** [`Data.md`](./Data.md)

**Scope:** Analyst projects (Phases 1-10) cement SQL, stats, and storytelling; engineer projects (11-18) cement pipelines and warehouses.

---

### Analyst cluster (Data Phases 1-10)

#### DATA-A01: Dirty CSV Cleaner

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 2-3, 8 |
| **Difficulty** | Easy |

**Goal:** Ingest a messy CSV and output an analysis-ready table with a data dictionary.

**Concepts practiced:** types, nulls, parsing dates, Pandas or stdlib csv

**Steps:**

1. Start from a deliberately dirty file (mixed dates, `$` in numbers, dup rows)
2. Profile columns: null rate, unique count, sample values
3. Standardize dtypes; parse dates to ISO
4. Dedupe with documented key
5. Export clean CSV + `data_dictionary.md`
6. One pytest or assert block on row count and null rules

**Done when:**

- Clean file loads without manual Excel fixes
- README states every transform and why

**Stretch (optional):**

- Great Expectations or pandera schema validation

---

#### DATA-A02: Spreadsheet KPI Dashboard (Export to HTML)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 2, 9 |
| **Difficulty** | Easy |

**Goal:** Answer three business questions from a sheet and publish static charts.

**Concepts practiced:** PivotTables or Pandas pivot, chart choice, metric definition

**Steps:**

1. Pick a public sample dataset (sales, HR, web traffic)
2. Define 3 KPIs with formulas in README
3. Build bar, line, and one honest comparison chart
4. Export Plotly/Matplotlib HTML or PNG gallery
5. Write 200-word insight memo: so what, now what
6. Note one chart you rejected and why

**Done when:**

- Memo references specific numbers from your output
- Charts avoid dual-axis lies (or explain if used)

**Stretch (optional):**

- Parameterized notebook with papermill

---

#### DATA-A03: SQL Case Study Database

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 4-6 |
| **Difficulty** | Medium |

**Goal:** Design a mini star-ish schema and answer 10 analyst questions in SQL only.

**Concepts practiced:** joins, aggregations, CTEs, window functions, grain

**Steps:**

1. Model: customers, orders, order_items, products (SQLite or Postgres)
2. Seed with realistic skew and NULLs
3. Write 10 questions: retention, AOV, top-N, running total
4. One query uses window functions; one uses CTE
5. Document grain per query in comments
6. `queries/` folder with numbered `.sql` files

**Done when:**

- All queries run via single seed script
- README includes ER sketch and hardest query explanation

**Stretch (optional):**

- Explain plan for one slow query

---

#### DATA-A04: A/B Test Analyzer

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 7 |
| **Difficulty** | Medium |

**Goal:** Analyze a simulated experiment and decide ship or no-ship with uncertainty stated.

**Concepts practiced:** hypothesis testing, conversion rates, confidence, pitfalls

**Steps:**

1. Generate or use sample A/B click data with assignment column
2. Compute conversion rate per variant
3. Run chi-square or z-test; report p-value and CI
4. Check sample ratio mismatch and novelty effects (discuss)
5. One-page decision memo with recommendation
6. Script reproduces memo numbers from raw CSV

**Done when:**

- Memo names both statistical and business thresholds
- You explain what p-value is not

**Stretch (optional):**

- Bayesian beta-binomial posterior

---

#### DATA-A05: EDA Notebook to Executive Summary

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 10 |
| **Difficulty** | Medium |

**Goal:** Full EDA pipeline ending in metrics definitions stakeholders can adopt.

**Concepts practiced:** EDA, metric design, documentation, reproducibility

**Steps:**

1. Pick dataset with at least one datetime and one categorical
2. Univariate and bivariate sections with labeled plots
3. Define 2 north-star and 3 diagnostic metrics
4. Data quality section: missing, outliers, duplicates
5. Export notebook to HTML; summary PDF or MD
6. `requirements.txt` pins versions

**Done when:**

- Someone else can rerun notebook top to bottom
- Metrics have plain-English definitions

**Stretch (optional):**

- dbt-style metric YAML for one metric

---

### Engineer cluster (Data Phases 11-18)

#### DATA-E01: Mini ETL Pipeline (CSV to Postgres)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 11, 13 |
| **Difficulty** | Medium |

**Goal:** Extract from API or CSV, transform, load into Postgres idempotently.

**Concepts practiced:** ETL, idempotency, schemas, logging

**Steps:**

1. Docker Compose: Postgres + optional Adminer
2. Python script: extract (HTTP or file), transform, load
3. Upsert on natural key; log rows in/out/rejected
4. Config via env vars; no secrets in repo
5. Makefile or README one-liner to run
6. Test on empty re-run (no duplicate facts)

**Done when:**

- Second run does not duplicate rows
- README documents source schema to target schema mapping

**Stretch (optional):**

- Airflow DAG wrapper with retry

---

#### DATA-E02: Star Schema Warehouse Build

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 12 |
| **Difficulty** | Medium |

**Goal:** Build fact + dimension tables from OLTP-like JSON exports.

**Concepts practiced:** dimensional modeling, SCD Type 1 vs 2, grain

**Steps:**

1. Stage raw JSON to landing tables
2. Build `dim_customer`, `dim_product`, `fact_sales` with explicit grain
3. Implement SCD2 on customer address (optional column tracking)
4. Document unknown member handling
5. Sample analyst query joins star without fan-out
6. dbt or plain SQL migrations in repo

**Done when:**

- One fact row = one order line (or chosen grain)
- README star diagram matches DDL

**Stretch (optional):**

- Incremental load watermark column

---

#### DATA-E03: dbt Transformation Project

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 15 |
| **Difficulty** | Medium |

**Goal:** Layer staging, intermediate, and mart models with tests.

**Concepts practiced:** dbt, ref(), tests, documentation

**Steps:**

1. Init dbt project against Postgres or DuckDB
2. `stg_`, `int_`, `mart_` models for one business domain
3. Add `unique`, `not_null`, and one `relationships` test
4. Generate docs; screenshot lineage in README
5. Seed data for CI run
6. GitHub Action or local script runs `dbt test`

**Done when:**

- `dbt build` passes on clean clone
- README explains model naming convention

**Stretch (optional):**

- Snapshot for SCD2

---

#### DATA-E04: Kafka Event Producer/Consumer

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 18 |
| **Difficulty** | Hard |

**Goal:** Stream synthetic click events to a topic and aggregate counts in a consumer.

**Concepts practiced:** Kafka basics, partitions, at-least-once, streaming agg

**Steps:**

1. Docker Compose with Kafka (or Redpanda)
2. Producer emits JSON events with key=user_id
3. Consumer maintains per-minute counts in SQLite or prints tumbling window
4. Document partition key choice
5. Kill consumer mid-run; restart and note duplicate handling
6. README diagram: producer -> topic -> consumer

**Done when:**

- End-to-end demo in under 5 commands
- You explain offset commit trade-off

**Stretch (optional):**

- Exactly-once-ish idempotent sink

---

#### DATA-E05: Spark Batch Job on Local Cluster

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 17 |
| **Difficulty** | Hard |

**Goal:** Aggregate a medium CSV with PySpark locally (Docker or standalone).

**Concepts practiced:** Spark DataFrame, shuffle, partitions, lazy eval

**Steps:**

1. Input 1M+ row CSV (generate if needed)
2. Job: group by category, sum revenue, top 10
3. Tune `spark.sql.shuffle.partitions` and note runtime
4. Explain narrow vs wide transformation in README
5. Write output parquet partitioned by date
6. Compare pandas vs Spark timing on same machine

**Done when:**

- Spark job runs non-interactively via `spark-submit`
- README notes when Spark is overkill

**Stretch (optional):**

- Broadcast join on small lookup table

---

## 5. Computer Networks (`Networks.md`)

**File:** [`Networks.md`](./Networks.md)

**Scope:** Labs and small programs that make the stack visible - fewer projects, more write-ups.

---

#### NET-01: TCP Echo Client/Server

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phases 10-11 |
| **Difficulty** | Easy |

**Goal:** Echo bytes over TCP and print the four-tuple on connect.

**Concepts practiced:** sockets, TCP stream, client/server, byte strings

**Steps:**

1. Server binds localhost high port; accepts loop
2. Client sends line; server echoes until `quit`
3. Log local and remote addr on server
4. Handle broken pipe gracefully
5. Optional: concurrent clients with threading
6. Paste sample session in README

**Done when:**

- Works with `telnet` or netcat as client too
- You explain connection vs listening socket

**Stretch (optional):**

- UDP echo counterpart and compare semantics

---

#### NET-02: HTTP Raw Exchange Lab

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 13 |
| **Difficulty** | Easy |

**Goal:** Craft HTTP/1.1 request by hand with netcat or Python socket.

**Concepts practiced:** request line, headers, status codes, Host header

**Steps:**

1. Connect to `example.com:80` or local server
2. Send `GET / HTTP/1.1` with Host and Connection headers
3. Capture full response; highlight status and Content-Type
4. Repeat with `HEAD` and wrong path for 404
5. Document byte-exact request in README
6. List headers you must send vs optional

**Done when:**

- You receive valid HTML without curl
- README explains persistent vs close behavior

**Stretch (optional):**

- POST with form body to httpbin

---

#### NET-03: DNS Lookup Tracer Narrative

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 12 |
| **Difficulty** | Easy |

**Goal:** Trace resolution steps for one domain and publish a annotated write-up.

**Concepts practiced:** DNS records, recursion, TTL, tools

**Steps:**

1. Pick a domain you control or a public site
2. Run `dig` +trace or equivalent; save output
3. Explain A, AAAA, CNAME, NS roles for your case
4. Note TTL values and cache implications
5. Diagram resolver -> root -> TLD -> authoritative
6. Tie narrative to [`Interview.md`](./Interview.md) URL question

**Done when:**

- Public markdown post with redacted sensitive data if needed
- Reader can follow without running commands themselves

**Stretch (optional):**

- Compare DNS over HTTPS resolver

---

#### NET-04: Wireshark Capture Write-up

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 15 |
| **Difficulty** | Medium |

**Goal:** Capture a failing or interesting exchange and explain layers.

**Concepts practiced:** Wireshark, filters, TCP handshake, TLS overview

**Steps:**

1. Reproduce HTTPS login or local HTTP failure
2. Capture during reproduction; mark filter used
3. Screenshot SYN-SYN/ACK-ACK sequence
4. Identify one retransmission or RST if present
5. Map one packet to OSI layers in prose
6. Publish sanitized PCAP or screenshots only

**Done when:**

- Write-up answers: what happened, which layer, evidence packet
- Filter string documented

**Stretch (optional):**

- Decrypt local TLS with session keys (dev only)

---

#### NET-05: Traceroute Story (Path to Host)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phases 5-6, 7 |
| **Difficulty** | Easy |

**Goal:** Run traceroute to three hosts and interpret hop behavior.

**Concepts practiced:** ICMP, TTL, routing, NAT hints

**Steps:**

1. Trace to local gateway, regional site, global CDN
2. Record latency jumps and `*` hops
3. Relate hops to likely AS or geography (whois optional)
4. Explain why last miles differ across targets
5. ASCII map of paths in README
6. Link to routing phase concepts

**Done when:**

- Three traces compared in one table
- You explain one anonymized hop and one timeout

**Stretch (optional):**

- MTR over 50 cycles for packet loss

---

#### NET-06: Subnet Calculator CLI

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 5 |
| **Difficulty** | Medium |

**Goal:** Given CIDR, print network, broadcast, host range, and usable count.

**Concepts practiced:** CIDR, bitwise ops, address planning

**Steps:**

1. Parse `192.168.1.0/24` style input
2. Validate prefix length per IPv4 rules
3. Output network, broadcast, first/last host
4. Flag network/broadcast addresses as unusable for hosts
5. Tests for /32, /31 edge cases you document
6. README with one office subnetting example

**Done when:**

- Matches known online calculator on test vectors
- Invalid input returns helpful error

**Stretch (optional):**

- IPv6 /64 basics

---

#### NET-07: TLS Certificate Inspector

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 14 |
| **Difficulty** | Medium |

**Goal:** Fetch a site's certificate chain and summarize trust fields.

**Concepts practiced:** TLS, certificates, SAN, expiry, chain of trust

**Steps:**

1. Script connects to `host:443` with ssl module
2. Print subject, issuer, notBefore, notAfter, SANs
3. Warn if expiry within 30 days
4. Save PEM to file optionally
5. README explains what CA signing means
6. Compare cert for two subdomains

**Done when:**

- Output readable without openssl CLI
- You explain hostname verification vs cert validity

**Stretch (optional):**

- Pin expected SPKI hash for a known host

---

## 6. Artificial Intelligence (`AI.md`)

**File:** [`AI.md`](./AI.md)

**Scope:** Classical ML baselines first, then deep learning, then LLM apps with evals.

---

#### AI-01: sklearn Tabular Baseline

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phases 4-5 |
| **Difficulty** | Easy |

**Goal:** Train and evaluate a logistic regression on a public tabular dataset.

**Concepts practiced:** train/test split, metrics, baseline, overfitting check

**Steps:**

1. Load Titanic or similar via sklearn/openml
2. Simple preprocessing pipeline (impute, encode)
3. Fit logistic regression; report accuracy, precision, recall, ROC-AUC
4. Compare to dummy classifier baseline
5. Save model with joblib; load and predict in second script
6. README states metric choice for imbalanced data

**Done when:**

- Pipeline reproducible from one command
- You explain one metric weakness on this dataset

**Stretch (optional):**

- Cross-validation with std dev of scores

---

#### AI-02: Decision Tree vs Random Forest Showdown

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 6 |
| **Difficulty** | Medium |

**Goal:** Compare variance and interpretability between single tree and ensemble.

**Concepts practiced:** bagging, feature importance, hyperparameters

**Steps:**

1. Same dataset as AI-01 or credit default
2. Train DecisionTree with max_depth sweep
3. Train RandomForest; plot depth vs score
4. Print top feature importances for both
5. Discuss overfitting on training score vs val
6. Export comparison table to README

**Done when:**

- Forest beats single tree on held-out metric
- You explain bagging in one paragraph

**Stretch (optional):**

- Gradient boosting with XGBoost or sklearn GBM

---

#### AI-03: PyTorch MNIST Training Loop

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phases 7-9 |
| **Difficulty** | Medium |

**Goal:** Write training loop from scratch without high-level Trainer magic.

**Concepts practiced:** tensors, autograd, loss, optimizer, epochs

**Steps:**

1. Load MNIST with torchvision
2. Define small MLP or CNN
3. Loop: forward, loss, backward, step; log loss per epoch
4. Evaluate test accuracy after training
5. Save/load `state_dict`
6. Plot loss curve in README

**Done when:**

- Test accuracy above 95% with your MLP or above 98% with CNN
- Loop code is yours, not copy-pasted Trainer

**Stretch (optional):**

- Learning rate schedule

---

#### AI-04: Transfer Learning Image Classifier

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 10 |
| **Difficulty** | Medium |

**Goal:** Fine-tune a pretrained CNN on a small custom image folder.

**Concepts practiced:** transfer learning, frozen layers, data augmentation

**Steps:**

1. Collect 2-3 classes, ~50 images each (or use flowers102 subset)
2. Freeze backbone; train new head
3. Unfreeze last block; lower LR fine-tune
4. Report confusion matrix
5. Export TorchScript or ONNX optional
6. README compares train-from-scratch vs transfer on small data

**Done when:**

- Beats scratch model on same data budget
- Augmentation described

**Stretch (optional):**

- Grad-CAM visualization for one prediction

---

#### AI-05: Embedding Similarity Search

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 12 |
| **Difficulty** | Medium |

**Goal:** Embed sentences and retrieve nearest neighbors by cosine similarity.

**Concepts practiced:** embeddings, cosine similarity, vector search

**Steps:**

1. Corpus of 100+ short texts (FAQ, docs, or wiki snippets)
2. Embed with sentence-transformers or OpenAI API (document cost)
3. Build brute-force index; query top-5 neighbors
4. CLI interactive search
5. Show one failure case (false neighbor) and hypothesize why
6. README diagram: query -> embed -> compare -> rank

**Done when:**

- Top result relevant for 8/10 hand-picked queries
- Cosine formula and normalization explained

**Stretch (optional):**

- FAISS index for speed

---

#### AI-06: Tiny RAG over Your Notes

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 15 |
| **Difficulty** | Hard |

**Goal:** Chunk markdown notes, retrieve, and answer with citations.

**Concepts practiced:** chunking, retrieval, prompting, grounding

**Steps:**

1. Ingest folder of `.md` roadmap excerpts
2. Chunk ~500 tokens with overlap; embed to local vector store
3. Query pipeline: retrieve top-k, build prompt with sources
4. LLM API or local model generates answer with `[source]` tags
5. Log retrieved chunks for debugging
6. Eval set: 5 questions with expected source doc

**Done when:**

- Answers cite correct file for 4/5 eval questions
- README documents chunk size trade-off

**Stretch (optional):**

- Hybrid BM25 + vector retrieval

---

#### AI-07: Prompt Eval Suite

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phases 14, 18 |
| **Difficulty** | Medium |

**Goal:** Compare 3 prompt templates on a fixed task with a score rubric.

**Concepts practiced:** prompting, eval design, failure modes

**Steps:**

1. Task: extract JSON fields from messy customer emails (synthetic set)
2. Write 3 prompts (zero-shot, few-shot, structured output)
3. Run 20 examples; grade JSON validity and field accuracy
4. Table: prompt x success rate x avg tokens
5. Document one hallucination example
6. Store prompts as versioned files

**Done when:**

- Repro script outputs same scores on rerun
- README names when to change prompt vs change model

**Stretch (optional):**

- LLM-as-judge with human spot-check

---

#### AI-08: ReAct-Style Tool Agent (Safe Subset)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 17 |
| **Difficulty** | Hard |

**Goal:** Agent loop that calls whitelisted tools (calculator, datetime, search stub).

**Concepts practiced:** agents, tool schemas, loop limits, guardrails

**Steps:**

1. Define 2-3 tools with JSON schema descriptions
2. Loop: model proposes tool call -> execute -> feed result -> max 5 steps
3. Refuse tools not on allowlist
4. Timeout and max token budget
5. Log full trace for one successful and one failed run
6. README threat model: prompt injection via tool output

**Done when:**

- Solves 3/5 multi-step questions in eval set
- Cannot execute shell or file delete (explicitly out of scope)

**Stretch (optional):**

- Human approval gate before tool execution

---

#### AI-09: MLflow or CSV Experiment Tracker

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 18 |
| **Difficulty** | Easy |

**Goal:** Track hyperparameters and metrics across runs systematically.

**Concepts practiced:** MLOps basics, reproducibility, experiment comparison

**Steps:**

1. Wrap AI-01 or AI-03 training in experiment logger
2. Log params, metrics, artifact path per run
3. Run grid of at least 6 configs
4. UI or CSV summary of best run
5. Tag best model `staging`
6. README screenshot or table of runs

**Done when:**

- You can answer "which run won and why" from logs alone
- Seeds documented for reproducibility

**Stretch (optional):**

- Promote model only if metric beats previous best

---

## 7. Odoo Engineer (`ODOO.md`)

**File:** [`ODOO.md`](./ODOO.md) (companion roadmap)  
**Official tutorials: [odoo/tutorials](https://github.com/odoo/tutorials) - align module structure with upstream examples, but implement features yourself.*

**Prerequisites:** comfortable with [`OOP.md`](./OOP.md) Phases 1-9 and basic SQL from [`Data.md`](./Data.md) Phase 4.

---

#### ODOO-01: Custom Todo Module

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 1-2 |
| **Difficulty** | Easy |

**Goal:** Create installable module with todo model, views, and menu.

**Concepts practiced:** module manifest, models.Model, XML views, ACLs

**Steps:**

1. Scaffold module `my_todo` with `__manifest__.py`
2. Model fields: name, description, done, deadline
3. Tree and form views; menu under custom app
4. Basic access rights for user group
5. Demo data XML for 3 records
6. README: install steps on Odoo 17+ dev instance

**Done when:**

- Module installs without error; CRUD works in UI
- Uninstall leaves no orphan tables (or document expected residue)

**Stretch (optional):**

- Kanban view by status

---

#### ODOO-02: Library Management Module

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 2-3 |
| **Difficulty** | Medium |

**Goal:** Books, authors, borrowers, loans with relational fields.

**Concepts practiced:** Many2one, One2many, constraints, onchange

**Steps:**

1. Models: `library.book`, `library.author`, `library.loan`
2. SQL constraint: no duplicate ISBN
3. Python constraint: return date after borrow date
4. Onchange warns if book already on loan
5. Search filters and group by author
6. Security: librarian vs reader groups

**Done when:**

- Cannot create invalid loan via UI or ORM
- README ER diagram matches models

**Stretch (optional):**

- Email reminder on overdue (cron)

---

#### ODOO-03: Inherit `sale.order` (Discount Cap)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 4 |
| **Difficulty** | Medium |

**Goal:** Extend standard Sales with custom field and validation on order confirm.

**Concepts practiced:** `_inherit`, super(), xpath views, business rules

**Steps:**

1. Add field `x_discount_reason` on `sale.order`
2. Override confirm: block if discount > 20% without reason
3. Inherit form view with xpath after discount field
4. Unit test with TransactionCase or HttpCase
5. Module depends on `sale`
6. Document upgrade path when Odoo version bumps

**Done when:**

- Standard sale flow works; rule fires on edge case
- View inheritance does not duplicate fields

**Stretch (optional):**

- Approval workflow state for large discounts

---

#### ODOO-04: OWL Dashboard Widget

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 5-6 |
| **Difficulty** | Hard |

**Goal:** Custom backend widget showing KPI count from RPC.

**Concepts practiced:** OWL components, assets bundle, RPC, QWeb integration

**Steps:**

1. JS OWL component fetches count from custom JSON route or ORM
2. Register widget in backend assets
3. Embed on existing model form or systray
4. Loading and error states in UI
5. SCSS matches Odoo spacing roughly
6. README screenshots of widget mounted

**Done when:**

- Widget loads without console errors on fresh install
- Data refreshes on button click

**Stretch (optional):**

- Small chart with Chart.js

---

#### ODOO-05: Webhook Receiver Controller

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 7 |
| **Difficulty** | Medium |

**Goal:** HTTP controller accepts signed webhook and creates CRM lead.

**Concepts practiced:** `@http.route`, auth, CSRF, idempotency, logging

**Steps:**

1. Route `POST /api/webhook/lead` with JSON body
2. Verify HMAC signature header with secret in config
3. Map payload to `crm.lead` create vals
4. Idempotency key stored to ignore duplicates
5. Return 200/401/400 appropriately
6. Test with curl examples in README

**Done when:**

- Invalid signature rejected; duplicate payload ignored
- No CSRF on public route by design (document why)

**Stretch (optional):**

- Queue job for heavy processing

---

#### ODOO-06: Report QWeb PDF (Invoice Summary)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 8 |
| **Difficulty** | Medium |

**Goal:** Custom PDF report on sales orders with aggregated lines.

**Concepts practiced:** QWeb, report action, paperformat, translations

**Steps:**

1. Report template listing order lines grouped by product category
2. Subtotal per category and grand total
3. Bind report to `sale.order` print menu
4. Test with multi-currency order if available
5. Add company logo from standard field
6. PDF screenshot in README

**Done when:**

- PDF generates from UI for sample order
- Template uses t-foreach correctly

**Stretch (optional):**

- XLSX export with same data

---

#### ODOO-07: Automated Test Suite for Module

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 9 |
| **Difficulty** | Medium |

**Goal:** Tag-fast tests covering create, constraint, and workflow on your module.

**Concepts practiced:** Odoo test tags, setUp, mock, CI

**Steps:**

1. Tests in `tests/` imported from `__init__.py`
2. Cover at least one constraint violation assertion
3. Tag `@tagged('post_install', '-at_install')` as appropriate
4. Run `./odoo-bin -i my_module --test-enable --stop-after-init`
5. Optional GitHub Action on push (docker odoo)
6. README badge or log snippet showing green run

**Done when:**

- CI or local command exits 0 with tests enabled
- One test proves business rule, not only `assertTrue(True)`

**Stretch (optional):**

- Tour test with HttpCase browser simulation

---

#### ODOO-08: External API Integration (Rates or Geo)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 10 |
| **Difficulty** | Hard |

**Goal:** Scheduled job fetches external API and stores results on model.

**Concepts practiced:** cron, requests, error handling, config parameters

**Steps:**

1. Model stores rate/date or geo lookup cache
2. `ir.cron` daily job calls API with timeout and retry
3. Settings page for API key via `ir.config_parameter`
4. Log failures to chatter or logger model
5. Manual "refresh" button on form
6. Graceful degrade if API down

**Done when:**

- Cron runs; manual refresh matches
- Secrets not in git

**Stretch (optional):**

- Circuit breaker after N failures

---

## 8. Web Developer (`Web.md`)

**File:** [`Web.md`](./Web.md)

**Scope:** Progressive proof from standards-based frontend work to a secured, observable full-stack deployment. Build in order; later cards may reuse the domain from earlier ones.

### Foundations and browser cluster (Web Phases 1-8)

#### WEB-01: Accessible Responsive Product Page

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 2-4 |
| **Difficulty** | Easy |

**Goal:** Ship a standards-based page that remains usable without JavaScript and across keyboard, zoom, and narrow screens.

**Concepts practiced:** semantic HTML, forms, responsive images, cascade layers, Flexbox/Grid, accessibility, metadata

**Steps:**

1. Write the information architecture and HTML landmarks before styling
2. Add product media, pricing, variant selection, reviews, and a native purchase form
3. Build mobile-first layout with Grid/Flexbox and content-driven breakpoints
4. Add focus, hover, disabled, error, loading, and reduced-motion styles
5. Test keyboard order, accessible names, 200% zoom, 320px width, and long text
6. Record Lighthouse/axe results and fix meaningful findings

**Done when:**

- Page works with CSS or JavaScript disabled where applicable
- No horizontal scroll at 320px or 200% zoom
- Form controls have labels and errors are understandable
- README contains before/after accessibility evidence

**Stretch (optional):** Add RTL and dark themes using logical properties and design tokens.

---

#### WEB-02: Vanilla TypeScript Task Board

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 5-7 |
| **Difficulty** | Medium |

**Goal:** Prove browser and language fundamentals before a UI framework abstracts them.

**Concepts practiced:** TypeScript, DOM, event delegation, modules, async/fetch, abort, storage, runtime validation, tooling

**Steps:**

1. Model task states with TypeScript discriminated unions
2. Render lists with DOM APIs and delegated events
3. Persist drafts locally and load seed data from a mock API
4. Support loading, empty, error, retry, and offline states
5. Cancel stale searches with `AbortController` and prevent race-condition overwrites
6. Add format, lint, typecheck, unit-test, and build commands in CI

**Done when:**

- No framework and no `any` escape hatches in application code
- Reload restores valid local state and rejects corrupt stored data safely
- Keyboard interaction and status announcements work
- A deterministic test proves the stale-response race is handled

**Stretch (optional):** Add a service worker with a documented cache strategy.

---

### Frontend application cluster (Web Phases 9-11, 16)

#### WEB-03: Framework Admin Dashboard

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 8-10, 15-16 |
| **Difficulty** | Hard |

**Goal:** Build a production-style frontend in React/Next, Vue/Nuxt, Angular, or SvelteKit and justify the choice.

**Concepts practiced:** routing, rendering strategy, server state, forms, URL state, component APIs, accessibility, tests, performance

**Steps:**

1. Write an ADR comparing at least two framework/rendering options
2. Build protected-looking routes against a mock server without pretending UI checks are authorization
3. Put search/filter/page state in the URL and cache remote data correctly
4. Implement schema-validated create/edit forms with server-style field errors
5. Add optimistic mutation with rollback and explicit stale/refetch behavior
6. Create reusable table, dialog, form-field, toast, and empty-state components
7. Add component/integration tests plus one Playwright critical journey
8. Profile bundle and interaction performance; document one measured improvement

**Done when:**

- Refresh/deep links work and every route has loading/error/not-found behavior
- Keyboard focus is correct through dialogs and validation failures
- Tests assert behavior rather than private implementation
- README explains state ownership and client/server boundaries

**Stretch (optional):** Rebuild one route in a second framework and compare developer/runtime trade-offs.

---

### Backend, data, and API cluster (Web Phases 12-15)

#### WEB-04: OpenAPI Project Service

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 12-15, [`Data.md`](./Data.md) SQL phases |
| **Difficulty** | Hard |

**Goal:** Deliver a relational, documented REST API whose validation, authorization, and concurrency behavior are testable.

**Concepts practiced:** backend framework, PostgreSQL, migrations, transactions, REST, OpenAPI, cursor pagination, sessions/tokens, object authorization

**Steps:**

1. Model users, organizations, projects, memberships, and tasks with DB constraints
2. Implement migrations, seed data, and indexed access patterns verified with query plans
3. Publish OpenAPI for CRUD, filters, cursor pagination, errors, and security schemes
4. Validate inputs at the transport boundary and centralize safe error responses
5. Implement authentication plus tenant/object-level authorization on every route
6. Add ETags or version fields for conflicting edits and idempotency keys for creates
7. Write unit, database integration, API contract, and negative authorization tests
8. Add structured request logs, rate limiting, and graceful shutdown

**Done when:**

- Fresh setup runs migrations and contract tests from one documented command
- Cross-tenant IDs never expose or modify another tenant's data
- OpenAPI examples match actual responses
- Duplicate idempotency keys return the original safe outcome

**Stretch (optional):** Generate a typed client and verify compatibility in CI.

---

#### WEB-05: Secure Webhook and Background Job Processor

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 14-15, 17-18 |
| **Difficulty** | Hard |

**Goal:** Integrate an unreliable third party without losing, duplicating, or blindly trusting events.

**Concepts practiced:** webhook signatures, raw bodies, replay protection, queues, retries, dead letters, idempotency, outbox, observability

**Steps:**

1. Receive a provider-shaped webhook and verify signature/timestamp before parsing
2. Persist event ID and raw audit metadata with unique deduplication constraint
3. Return quickly, enqueue processing, and make the consumer idempotent
4. Add bounded exponential backoff, dead-letter state, and an operator replay endpoint
5. Publish outbound webhook events through a transactional outbox
6. Simulate duplicate, delayed, reordered, malformed, and dependency-down events
7. Build metrics for accepted, processed, retried, dead-lettered, and age-of-oldest job

**Done when:**

- Duplicate delivery changes business state once
- Invalid/stale signatures are rejected and secrets are redacted
- A failed job can be inspected and safely replayed
- Tests prove the database-commit/publish-failure boundary

**Stretch (optional):** Add SSE progress updates to an operator dashboard.

---

### Production capstone cluster (Web Phases 16-19)

#### WEB-06: Production Full-Stack SaaS Slice

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 16-19 |
| **Difficulty** | Hard |

**Goal:** Ship one narrow product workflow with the security, test, performance, delivery, and operations evidence expected of production work.

**Concepts practiced:** full-stack architecture, auth, REST, SQL, cache, jobs/realtime, test strategy, CI/CD, Docker, cloud, observability, recovery

**Steps:**

1. Define users, success metric, non-goals, threat model, and architecture ADR
2. Build responsive accessible UI, authenticated API, relational schema, and one background/realtime feature
3. Add unit, integration, contract, E2E, accessibility, and lightweight load tests
4. Enforce secure headers, object authorization, validation, upload/secret/rate-limit policy
5. Containerize and deploy through CI with migrations, health checks, and progressive verification
6. Add structured logs, metrics, traces, dashboard, actionable alert, and runbook
7. Measure Web Vitals/API percentiles and fix one evidenced bottleneck
8. Rehearse rollback plus database backup restoration and write the result

**Done when:**

- Public demo and clean-machine local setup both work
- CI blocks a deliberate test/type/security regression
- Dashboard links one slow browser action to API and database evidence
- README explains limits, cost, security decisions, incident exercise, and next bridge

**Stretch (optional):** Add feature-flagged canary delivery and an SLO/error-budget report.

---

## 9. Cloud Engineer (`cloud.md`)

**File:** [`cloud.md`](./cloud.md)

**Scope:** Architecture-first projects that prove identity, networking, managed services, reliability, security, cost control, and recovery—not provider-console tourism.

#### CLOUD-01: Multi-Zone Cloud Foundation

| Field | Detail |
| --- | --- |
| **Roadmap** | [`cloud.md`](./cloud.md) Phases 3-6, 12-14 |
| **Difficulty** | Medium |

**Goal:** Create a secure, reproducible network and compute foundation for a small web service.

**Concepts practiced:** accounts/subscriptions, IAM, VPC/VNet, subnets, routes, load balancing, autoscaling, IaC, secrets, audit logs

**Steps:**

1. Write the workload, data, threat, availability, and monthly-cost assumptions
2. Build public load-balancer and private application subnets across two zones with IaC
3. Use federated human access and a least-privilege workload role; store no static cloud keys
4. Deploy a tiny service with readiness checks, replacement, and autoscaling boundaries
5. Enable audit/config/network logs, encryption, tags, a budget, and a teardown command
6. Draw request, management, and egress paths and review the IaC plan in CI

**Done when:** A fresh environment is reproducible, the database/workload has no unnecessary public path, one zone can be removed without losing the service, and the README records cost plus security decisions.

**Stretch (optional):** Replace NAT traffic to provider services with private endpoints and compare cost.

---

#### CLOUD-02: Event-Driven Image or Job Pipeline

| Field | Detail |
| --- | --- |
| **Roadmap** | [`cloud.md`](./cloud.md) Phases 7-10, 14-15 |
| **Difficulty** | Hard |

**Goal:** Process uploaded work safely despite duplicates, retries, malformed inputs, and downstream failure.

**Concepts practiced:** object storage, events, functions/containers, queues, idempotency, dead letters, IAM, encryption, observability

**Steps:**

1. Accept a presigned upload or job submission and record a stable request ID
2. Publish durable work to a queue and process it with a least-privilege worker
3. Make the state transition idempotent and add bounded retry with jitter
4. Route poison work to a dead-letter queue with an inspected replay procedure
5. Add size/type limits, encryption, lifecycle rules, structured logs, and age/error metrics
6. Test duplicate, reordered, corrupt, dependency-down, and lost-ack scenarios

**Done when:** Duplicate delivery creates one business result, bad work is recoverable without editing production data, and a dashboard shows throughput, failures, retries, and age of oldest work.

**Stretch (optional):** Compare function and container cost/latency for the same workload.

---

#### CLOUD-03: Reliability and FinOps Game Day

| Field | Detail |
| --- | --- |
| **Roadmap** | [`cloud.md`](./cloud.md) Phases 15-18 |
| **Difficulty** | Hard |

**Goal:** Turn a deployed service into measured recovery evidence and an explainable unit-cost model.

**Concepts practiced:** SLI/SLO, alerts, RTO/RPO, backup/restore, zone failure, capacity, tags, budgets, right-sizing, runbooks

**Steps:**

1. Define one user SLI/SLO, error budget, RTO, RPO, and unit-cost denominator
2. Build logs/metrics/traces, a symptom alert, and a runbook with ownership
3. Back up data and restore it into an isolated environment; measure actual RTO/RPO
4. Inject dependency latency, instance loss, quota pressure, and a zone-style failure
5. Capture detection, mitigation, recovery, data correctness, and missed telemetry
6. Produce a tagged cost report and one right-sizing/lifecycle improvement without reducing the SLO

**Done when:** Restore and failover are demonstrated rather than claimed, the alert leads to a usable runbook, and before/after reliability and cost evidence is public.

**Stretch (optional):** Use a second region for backup recovery and document the real complexity premium.

---

#### CLOUD-04: Governed Migration Capstone

| Field | Detail |
| --- | --- |
| **Roadmap** | [`cloud.md`](./cloud.md) Phases 11-20 |
| **Difficulty** | Hard |

**Goal:** Migrate a small stateful application into a governed cloud landing zone with reversible cutover.

**Concepts practiced:** landing zone, service choice, IaC, security, migration waves, data validation, DNS cutover, rollback, operations, FinOps

**Steps:**

1. Inventory dependencies/data and write RTO/RPO, regulatory, latency, cost, and non-goals
2. Choose rehost/replatform/refactor per component in an architecture decision record
3. Provision identity, network, logging, policy, budget, compute, data, and backup foundations as code
4. Rehearse data copy and validate counts/checksums and application behavior
5. Run a low-risk migration wave, then a timed cutover with DNS/traffic and rollback thresholds
6. Operate for a measurement window and publish performance, incident, security, and cost findings

**Done when:** The old path can be restored within the declared window, data validation passes, ownership/runbooks exist, and the architecture/cost model explains every managed service.

**Stretch (optional):** Re-express the architecture for a second provider and compare primitives instead of brand names.

---

## 10. DevOps Engineer (`devops.md`)

**File:** [`devops.md`](./devops.md)

**Scope:** Delivery and operations projects that begin with Linux and flow, then earn containers, orchestration, IaC, observability, SRE, security, and platform abstractions.

#### DEVOPS-01: Linux Service and Incident Lab

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 2-5 |
| **Difficulty** | Medium |

**Goal:** Package, operate, break, and diagnose a real service without hiding behind an orchestrator.

**Concepts practiced:** Linux processes, systemd, permissions, filesystems, DNS/TCP/HTTP, shell automation, logs, runbooks

**Steps:**

1. Install a small HTTP service under a dedicated non-login user and systemd unit
2. Add environment/config separation, log rotation, health check, resource limits, and graceful stop
3. Write idempotent install, verify, backup, and rollback scripts with useful exit codes
4. Inject wrong permissions, port conflict, DNS failure, full disk, bad config, and killed dependency
5. Diagnose with service/process/socket/filesystem/network evidence and record a timeline
6. Turn each failure into a check, alert, test, or runbook improvement

**Done when:** A clean host can be configured twice safely, another person can resolve two injected failures from the runbook, and no secret is committed.

**Stretch (optional):** Add a read-only operator command that collects a safe diagnostic bundle.

---

#### DEVOPS-02: Secure CI Artifact Pipeline

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 6-8, 16 |
| **Difficulty** | Hard |

**Goal:** Convert a commit into one traceable, policy-checked artifact promoted through environments.

**Concepts practiced:** Git, build systems, CI, testing, caching, SBOM, signing, provenance, secrets, release strategies

**Steps:**

1. Pin dependencies and create deterministic lint, test, integration, package, and scan commands
2. Build once, generate SBOM/provenance, sign the digest, and publish to a protected registry
3. Use isolated runners and short-lived identity rather than stored cloud keys
4. Promote the same digest to staging and production behind approval and health gates
5. Add concurrency cancellation, safe caches, artifact retention, and flake ownership
6. Rehearse rollback and deliberately block a vulnerable dependency, leaked secret, and tampered artifact

**Done when:** Source-to-running digest is auditable, a failed gate cannot publish/promote, median pipeline time is measured, and rollback uses the prior immutable artifact.

**Stretch (optional):** Produce a verifiable SLSA-style provenance statement.

---

#### DEVOPS-03: Container and Kubernetes GitOps Delivery

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 9-11, 17 |
| **Difficulty** | Hard |

**Goal:** Operate a containerized service on Kubernetes through reviewed desired state and progressive delivery.

**Concepts practiced:** Docker, image hardening, Kubernetes controllers/services, probes, resources, policies, Helm/Kustomize, GitOps, canary

**Steps:**

1. Build a pinned multi-stage non-root image that handles signals and contains no secret
2. Declare Deployment, Service, config/secret references, probes, requests/limits, disruption and network policy
3. Package environment differences without copying entire manifests
4. Reconcile deployment state from a protected Git branch and expose drift/status
5. Add canary or blue-green promotion using application health, not pod count alone
6. Inject CrashLoop, Pending, OOM, bad selector, failed readiness, and DNS/policy faults

**Done when:** Git history identifies every release, manual drift is detected/reconciled, rollback is timed, and the troubleshooting guide maps symptoms to controller/network evidence.

**Stretch (optional):** Add policy-as-code that blocks privileged, unpinned, or resource-less workloads.

---

#### DEVOPS-04: Observable SLO and Incident Platform

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 14-18 |
| **Difficulty** | Hard |

**Goal:** Build the feedback and response loop around a service, then prove it during a game day.

**Concepts practiced:** metrics, logs, traces, OpenTelemetry, SLI/SLO, burn alerts, on-call, incidents, postmortems, capacity

**Steps:**

1. Instrument a critical user path with correlated metrics, structured logs, and traces
2. Define availability/latency SLIs, an SLO, error budget, and cardinality/retention limits
3. Create a service dashboard plus multi-window burn and saturation alerts with runbooks
4. Load test to find the first bottleneck and create a capacity forecast
5. Run an incident with commander, operations, communications, timeline, and recovery roles
6. Write a blameless causal review whose actions have owners, dates, and verification

**Done when:** A page corresponds to user impact, evidence finds the fault across a dependency boundary, and one corrective action prevents or shortens a repeated incident.

**Stretch (optional):** Add automated rollback guarded by error-budget burn and a manual override.

---

#### DEVOPS-05: Production Delivery Platform Capstone

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 1-20 |
| **Difficulty** | Hard |

**Goal:** Offer one paved road from repository creation to a secure, observable production service without hiding escape hatches.

**Concepts practiced:** platform product, templates, CI/CD, IaC, cloud, Kubernetes, secrets, policy, GitOps, SRE, documentation, adoption metrics

**Steps:**

1. Interview two developer personas and define the repeated delivery problem and success metrics
2. Create a service template with build/test, signed artifact, IaC, deployment, telemetry, SLO, and runbook defaults
3. Provide self-service environment creation through scoped identity, quotas, budgets, and policy
4. Implement promotion, rollback, break-glass, drift, secret rotation, and deprecation workflows
5. Onboard two example services, measure time-to-first-deploy and developer friction, then improve the road
6. Publish ownership, support model, escape hatch, versioning, adoption, reliability, security, and cost evidence

**Done when:** A new service reaches a test environment from documented steps, production change is auditable/reversible, platform failure does not trap teams, and outcomes—not tool count—show value.

**Stretch (optional):** Add a scorecard that gives actionable feedback without becoming a vanity ranking.

---

## 11. Cross-cutting / Portfolio Capstones

**Purpose:** Combine two or more tracks after you have shipped cluster projects. These are still bounded - not production ERP replacements.

| ID | Combines | Difficulty |
| --- | --- | --- |
| CAP-01 | CS + OOP | Medium |
| CAP-02 | CS + Data | Hard |
| CAP-03 | CS + Networks | Hard |
| CAP-04 | Data + AI | Hard |
| CAP-05 | Odoo + Data | Hard |
| CAP-06 | All tracks | Hard |

---

#### CAP-01: ERP-Lite Inventory CLI/API

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) LLD, [`CS.md`](./CS.md) Phases 13-14 |
| **Difficulty** | Medium |

**Goal:** Small inventory service with products, stock movements, and REST API.

**Concepts practiced:** layered architecture, REST, SQL, domain invariants

**Steps:**

1. Domain layer: Product, Warehouse, StockMove with quantity rules
2. Service layer orchestrates transactions
3. SQLite persistence; repository interfaces for testing
4. FastAPI or Flask REST endpoints
5. Tests on domain without HTTP
6. README architecture diagram with dependency direction

**Done when:**

- Cannot oversell stock in concurrent sequential tests
- API documented with curl examples

**Stretch (optional):**

- Optimistic locking on stock version column

---

#### CAP-02: Analytics Dashboard on App Database

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 14, [`Data.md`](./Data.md) Phases 8-10 |
| **Difficulty** | Hard |

**Goal:** Read replica or nightly export from CAP-01 (or any CRUD app) into analyst mart.

**Concepts practiced:** ETL, star schema, visualization, metric alignment

**Steps:**

1. Export OLTP tables to staging nightly
2. Build `fact_movements`, `dim_product` in warehouse DB
3. Pandas or SQL dashboard: stock turns, low-stock alerts
4. Align metric definitions with app team doc
5. Schedule via cron or Airflow mini-DAG
6. Public notebook or Streamlit read-only app

**Done when:**

- Numbers reconcile to source within documented tolerance
- README defines grain and refresh SLA

**Stretch (optional):**

- dbt tests on mart

---

#### CAP-03: Full-Stack App + Packet Capture Postmortem

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 13, [`Networks.md`](./Networks.md) Phases 13-15 |
| **Difficulty** | Hard |

**Goal:** Deploy tiny app locally, capture login flow, narrate full stack in one write-up.

**Concepts practiced:** HTTP, TLS, DNS, debugging, full-stack integration

**Steps:**

1. Deploy hello-auth app (CAP-01 API or minimal login)
2. Configure local DNS or hosts entry optional
3. Wireshark capture of successful and failed login
4. Annotate TCP, TLS, HTTP layers on one screenshot each
5. Tie to [`Interview.md`](./Interview.md) Track E URL question
6. Publish blog-style MD with diagrams

**Done when:**

- Reader sees code, packets, and prose in one repo
- Failure case explained with evidence

**Stretch (optional):**

- HTTP/2 capture comparison

---

#### CAP-04: RAG on Warehouse Documentation

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 10, [`AI.md`](./AI.md) Phase 15 |
| **Difficulty** | Hard |

**Goal:** Ask natural language questions about your CAP-02 metrics and schema docs.

**Concepts practiced:** RAG, data catalog, eval, grounding

**Steps:**

1. Corpus: schema YAML, metric definitions, EDA memos
2. Chunk and index; metadata tags per table
3. Chat UI returns answer + cited doc sections
4. Eval questions: "What is AOV grain?", "Which column is PII?"
5. Log retrieval misses; tune chunk boundaries
6. README compares manual catalog search vs RAG

**Done when:**

- 5/7 catalog questions answered with correct citation
- PII question refuses if not in corpus

**Stretch (optional):**

- SQL generation with human-in-loop approval

---

#### CAP-05: Odoo + External Analytics Sync

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md), [`Data.md`](./Data.md) Phase 13 |
| **Difficulty** | Hard |

**Goal:** Export Odoo sales data to warehouse on schedule; dashboard outside Odoo.

**Concepts practiced:** Odoo ORM read, ETL, API keys, idempotency

**Steps:**

1. Odoo module or script: export orders since watermark
2. Load to Postgres staging via JSON lines
3. Transform to star schema (reuse DATA-E02 patterns)
4. Streamlit or Metabase chart: revenue by week
5. Secure credentials; read-only DB user for BI
6. Document field mapping Odoo -> warehouse

**Done when:**

- Dashboard updates after cron run
- Totals match Odoo sales report for test month

**Stretch (optional):**

- Webhook trigger on order confirm instead of poll

---

#### CAP-06: Interview Portfolio Site (Static)

| Field | Detail |
| --- | --- |
| **Roadmap** | All roadmaps Phase 19 portfolio clusters |
| **Difficulty** | Medium |

**Goal:** One GitHub Pages site linking projects, roadmaps, and speak-aloud demos.

**Concepts practiced:** technical writing, portfolio curation, CI

**Steps:**

1. Static site generator or plain HTML/CSS
2. Sections per track with 2-3 best projects each
3. Each card: problem, stack, link, roadmap phases
4. Embed 60-second Loom or GIF for one LLD demo optional
5. Deploy via GitHub Actions on push
6. Link from resume and LinkedIn

**Done when:**

- Live HTTPS URL loads on mobile
- Every linked repo has README meeting Section 1 checklist

**Stretch (optional):**

- Blog post series mirroring bridge topics

---

## 12. Interview Drill Projects

**File:** [`Interview.md`](./Interview.md)

**Purpose:** Timed **speak + build** reps. Each drill pairs a short build or diagram with spoken answers from the matching Interview track.

### Drill format (use every time)

| Step | Time | Action |
| --- | --- | --- |
| 1 | 5 min | Read linked Interview.md questions cold |
| 2 | 45-90 min | Build or diagram minimal artifact |
| 3 | 10 min | Speak answer 60-120 sec without notes |
| 4 | 5 min | One follow-up cold |
| 5 | 5 min | Update README "Interview notes" section |

---

#### INT-01: LRU + Complexity Speak (Track A)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 3, [`Interview.md`](./Interview.md) Track A |
| **Difficulty** | Medium |

**Goal:** Implement LRU Cache (CS-D03 lite, 90 min max) then explain Big O and trade-offs aloud.

**Concepts practiced:** timed coding, complexity narration, follow-ups

**Steps:**

1. Set timer 90 minutes; build minimal LRU only
2. Record or transcribe 90-second explanation of get/put cost
3. Answer follow-up: "What if multithreaded?" without reading notes
4. Answer follow-up: "Why doubly linked list?"
5. Add "Interview notes" to repo with traps you hit
6. Link to Interview.md question ids if annotated in your fork

**Done when:**

- Code passes your handwritten tests
- Spoken answer names O(1) and memory cost

**Stretch (optional):**

- Whiteboard version without IDE

---

#### INT-02: URL Bar Narrative + Sequence Diagram (Track C/E)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md), [`Interview.md`](./Interview.md) Track C/E |
| **Difficulty** | Easy |

**Goal:** Draw sequence diagram for HTTPS request; speak full path in 120 seconds.

**Concepts practiced:** system narration, DNS, TCP, TLS, HTTP

**Steps:**

1. Pick one URL (your portfolio site)
2. Draw diagram: browser -> DNS -> TCP -> TLS -> HTTP -> server
3. Annotate 5 latency buckets
4. Speak answer using Interview.md skeleton (problem, mechanics, trade-off, failure)
5. Add one failure mode: DNS timeout
6. Commit diagram as PNG or Mermaid in repo

**Done when:**

- Diagram and spoken story match
- You mention caching at DNS and HTTP layers

**Stretch (optional):**

- HTTP/2 multiplexing paragraph

---

#### INT-03: SQL Window Drill (Track B)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 6, [`Interview.md`](./Interview.md) Track B |
| **Difficulty** | Medium |

**Goal:** Solve 3 window-function questions in 45 minutes; explain PARTITION BY aloud.

**Concepts practiced:** timed SQL, grain, speaking query logic

**Steps:**

1. Use DATA-A03 database or public warehouse sample
2. Queries: running total, rank within group, dedupe latest row per id
3. 15 min each; no AI assistance
4. After each, speak how ORDER BY affects result
5. Document one wrong query and fix
6. Save in `interview_drills/sql_window.sql`

**Done when:**

- All three queries return correct row counts
- Spoken explanation distinguishes ROW_NUMBER vs RANK

**Stretch (optional):**

- Optimize one with index suggestion

---

#### INT-04: LLD Parking Lot Timed (Track A + OOP)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phase 18, [`Interview.md`](./Interview.md) Track A |
| **Difficulty** | Hard |

**Goal:** 45-minute design + 45-minute code for parking lot lite.

**Concepts practiced:** LLD interview pacing, class identification, extensibility

**Steps:**

1. 0-10 min: clarify requirements out loud (vehicle types, payment?)
2. 10-25 min: class diagram and APIs on paper
3. 25-70 min: code core `park`/`unpark` paths only
4. 70-80 min: speak SOLID trade-offs you made
5. List 3 extensions interviewer might ask (multi-floor, concurrent)
6. Do not implement extensions unless time remains

**Done when:**

- Happy path works with tests
- Design doc photographed or scanned in repo

**Stretch (optional):**

- Second drill next day on elevator problem cold

---

#### INT-05: RAG Architecture Whiteboard (Track D)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 15, [`Interview.md`](./Interview.md) Track D |
| **Difficulty** | Medium |

**Goal:** Whiteboard RAG pipeline; speak failure modes without building full system.

**Concepts practiced:** LLM system design, retrieval trade-offs, eval

**Steps:**

1. Draw ingest, chunk, embed, store, retrieve, generate
2. Label 3 failure modes: bad chunks, wrong retrieval, hallucination
3. Speak mitigations: hybrid search, citations, eval set
4. Optional: implement smallest retrieve-only script (no LLM)
5. Compare RAG vs fine-tune in 30-second closing
6. Save photo + bullet outline in repo

**Done when:**

- 90-second spoken answer fits Interview.md Track D structure
- You name latency and cost drivers

**Stretch (optional):**

- Add eval metric definition on slide

---

#### INT-06: STAR Story Backed by Repo (Track F)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Interview.md`](./Interview.md) Track F |
| **Difficulty** | Easy |

**Goal:** Pick one shipped project; rehearse 2 STAR stories with metrics.

**Concepts practiced:** behavioral, storytelling, evidence

**Steps:**

1. Choose project with real friction (bug, scope cut, teamwork)
2. Write Situation/Task/Action/Result bullets
3. Quantify result (time saved, tests added, users)
4. Record 2-minute spoken story
5. Map story to resume bullet
6. Store `interview_drills/star_project_x.md` (no private employer secrets)

**Done when:**

- Story under 2 minutes; Result has number or observable outcome
- Action mentions your specific contribution

**Stretch (optional):**

- Second story on failure and learning

---

#### INT-07: Debug a Broken Microservice (Track E)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 11-13, [`Interview.md`](./Interview.md) Track E |
| **Difficulty** | Hard |

**Goal:** Given intentionally buggy two-service demo, find root cause under time box.

**Concepts practiced:** debugging narrative, logs, HTTP tracing, systematic isolation

**Steps:**

1. Clone or create two-container demo: api + db or api + worker
2. Plant one bug (wrong env var, timeout, off-by-one pagination)
3. Partner or past-you writes bug; you debug in 60 min
4. Document hypothesis -> test -> result log
5. Speak postmortem: blast radius, fix, prevention
6. Add regression test in fix PR

**Done when:**

- Root cause correct; fix has test
- Spoken postmortem under 3 minutes

**Stretch (optional):**

- Add OpenTelemetry span around failing call

---

## Curated Inspiration

Project prompts curated with **Composio** (YouTube and GitHub). The phase navigator uses 40 validated public videos plus track-specific repositories and project collections. Use them for inspiration—implement your own code and README.

| Resource | Best for |
| --- | --- |
| [droidevs/python-projects-beginner](https://github.com/droidevs/python-projects-beginner) | OOP-F*, early CLI projects |
| [beginnersly.com Python projects](https://www.beginnersly.com/tutorials/python/python-projects) | Fundamentals variety |
| [muhammadwaheedairi/python-oop-practice](https://github.com/muhammadwaheedairi/python-oop-practice) | OOP-P*, class design |
| [yusufcore/python_practise](https://github.com/yusufcore/python_practise) | CS-D* drills |
| [odoo/tutorials](https://github.com/odoo/tutorials) | ODOO-* module layout |
| [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development) | WEB-01/02 platform fundamentals |
| [OpenAPI Specification](https://spec.openapis.org/oas/latest) | WEB-04 API contract |
| [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) | WEB-04/05/06 security verification |
| [AWS Architecture Center](https://aws.amazon.com/architecture/) | CLOUD-* architecture patterns |
| [Azure Architecture Center](https://learn.microsoft.com/azure/architecture/) | CLOUD-* provider comparison |
| [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework) | CLOUD-03/04 reliability and operations |
| [CNCF Landscape](https://landscape.cncf.io/) | DEVOPS-* ecosystem discovery after fundamentals |
| [DORA](https://dora.dev/) | DEVOPS-02/05 delivery measurements |
| [Google SRE Books](https://sre.google/books/) | CLOUD-03 and DEVOPS-04 reliability practice |

---

## Master Project Index

| ID | Title | Track | Difficulty |
| --- | --- | --- | --- |
| OOP-F01 | CLI Calculator | OOP / CS | Easy |
| OOP-F02 | Number Guessing Game | CS | Easy |
| OOP-F03 | File Organizer | CS / OOP | Easy |
| OOP-F04 | Password Generator | CS / OOP | Easy |
| OOP-P01 | Bank Account Hierarchy | OOP | Medium |
| OOP-P02 | Library Catalog | OOP | Medium |
| OOP-P03 | Shape Calculator | OOP | Easy |
| OOP-P04 | Contact Book | OOP | Easy |
| OOP-S01 | Notification System | OOP | Medium |
| OOP-S02 | Payment Processor | OOP | Medium |
| OOP-S03 | Text Formatter Pipeline | OOP | Medium |
| OOP-L01 | Parking Lot LLD | OOP / CS | Hard |
| OOP-L02 | Vending Machine | OOP | Medium |
| OOP-L03 | Elevator Controller | OOP | Hard |
| CS-D01 | Dynamic Array & Linked List | CS | Medium |
| CS-D02 | Expression Evaluator | CS | Medium |
| CS-D03 | LRU Cache | CS | Hard |
| CS-D04 | Graph Route Planner | CS | Medium |
| CS-S01 | Mini HTTP Server | CS / NET | Hard |
| CS-S02 | URL Shortener | CS | Medium |
| CS-S03 | Task Queue Worker | CS | Medium |
| CS-S04 | Blog API with Auth | CS | Hard |
| CS-X01 | Rate Limiter | CS | Medium |
| CS-X02 | Consistent Hash Ring | CS | Medium |
| CS-X03 | Event Sourcing Lite | CS | Hard |
| DATA-A01 | Dirty CSV Cleaner | Data | Easy |
| DATA-A02 | KPI Dashboard | Data | Easy |
| DATA-A03 | SQL Case Study DB | Data | Medium |
| DATA-A04 | A/B Test Analyzer | Data | Medium |
| DATA-A05 | EDA to Executive Summary | Data | Medium |
| DATA-E01 | Mini ETL | Data | Medium |
| DATA-E02 | Star Schema Warehouse | Data | Medium |
| DATA-E03 | dbt Project | Data | Medium |
| DATA-E04 | Kafka Producer/Consumer | Data | Hard |
| DATA-E05 | Spark Batch Job | Data | Hard |
| NET-01 | TCP Echo | Networks | Easy |
| NET-02 | HTTP Raw Exchange | Networks | Easy |
| NET-03 | DNS Tracer Narrative | Networks | Easy |
| NET-04 | Wireshark Write-up | Networks | Medium |
| NET-05 | Traceroute Story | Networks | Easy |
| NET-06 | Subnet Calculator | Networks | Medium |
| NET-07 | TLS Certificate Inspector | Networks | Medium |
| AI-01 | sklearn Baseline | AI | Easy |
| AI-02 | Tree vs Forest | AI | Medium |
| AI-03 | PyTorch MNIST Loop | AI | Medium |
| AI-04 | Transfer Learning Classifier | AI | Medium |
| AI-05 | Embedding Search | AI | Medium |
| AI-06 | Tiny RAG | AI | Hard |
| AI-07 | Prompt Eval Suite | AI | Medium |
| AI-08 | Tool Agent | AI | Hard |
| AI-09 | Experiment Tracker | AI | Easy |
| ODOO-01 | Todo Module | Odoo | Easy |
| ODOO-02 | Library Module | Odoo | Medium |
| ODOO-03 | Inherit sale.order | Odoo | Medium |
| ODOO-04 | OWL Widget | Odoo | Hard |
| ODOO-05 | Webhook Controller | Odoo | Medium |
| ODOO-06 | QWeb PDF Report | Odoo | Medium |
| ODOO-07 | Test Suite | Odoo | Medium |
| ODOO-08 | External API Cron | Odoo | Hard |
| WEB-01 | Accessible Product Page | Web | Easy |
| WEB-02 | Vanilla TypeScript Task Board | Web | Medium |
| WEB-03 | Framework Admin Dashboard | Web | Hard |
| WEB-04 | OpenAPI Project Service | Web / Data | Hard |
| WEB-05 | Webhook & Job Processor | Web | Hard |
| WEB-06 | Production Full-Stack SaaS Slice | Web / Cross | Hard |
| CLOUD-01 | Multi-Zone Cloud Foundation | Cloud | Medium |
| CLOUD-02 | Event-Driven Job Pipeline | Cloud | Hard |
| CLOUD-03 | Reliability and FinOps Game Day | Cloud | Hard |
| CLOUD-04 | Governed Migration Capstone | Cloud | Hard |
| DEVOPS-01 | Linux Service and Incident Lab | DevOps | Medium |
| DEVOPS-02 | Secure CI Artifact Pipeline | DevOps | Hard |
| DEVOPS-03 | Container and Kubernetes GitOps Delivery | DevOps | Hard |
| DEVOPS-04 | Observable SLO and Incident Platform | DevOps | Hard |
| DEVOPS-05 | Production Delivery Platform Capstone | DevOps | Hard |
| CAP-01 | ERP-Lite Inventory | Cross | Medium |
| CAP-02 | Analytics on App DB | Cross | Hard |
| CAP-03 | App + Packet Capture | Cross | Hard |
| CAP-04 | RAG on Warehouse Docs | Cross | Hard |
| CAP-05 | Odoo Analytics Sync | Cross | Hard |
| CAP-06 | Portfolio Site | Cross | Medium |
| INT-01 | LRU + Speak | Interview | Medium |
| INT-02 | URL Narrative | Interview | Easy |
| INT-03 | SQL Window Drill | Interview | Medium |
| INT-04 | Parking Lot Timed | Interview | Hard |
| INT-05 | RAG Whiteboard | Interview | Medium |
| INT-06 | STAR + Repo | Interview | Easy |
| INT-07 | Debug Microservice | Interview | Hard |

**Total:** 87 projects across 12 sections.

---

## Suggested Learning Paths

| Your goal | First 3 projects | Then |
| --- | --- | --- |
| Python hire (general SWE) | OOP-F01, OOP-P01, CS-D01 | CS-S02, OOP-L01, INT-04 |
| Data analyst | DATA-A01, DATA-A03, DATA-A05 | DATA-A04, INT-03 |
| Data engineer | DATA-A01, DATA-E01, DATA-E03 | DATA-E04, CAP-02 |
| Network/infrastructure | NET-01, NET-03, NET-04 | NET-07, CAP-03, INT-02 |
| Cloud engineer | CLOUD-01, CLOUD-02, CLOUD-03 | CLOUD-04, DEVOPS-02, INT-07 |
| DevOps engineer | DEVOPS-01, DEVOPS-02, DEVOPS-03 | DEVOPS-04, DEVOPS-05, CLOUD-01 |
| AI/ML engineer | AI-01, AI-03, AI-06 | AI-07, CAP-04, INT-05 |
| Odoo developer | OOP-P02, ODOO-01, ODOO-03 | ODOO-04, CAP-05 |
| Frontend developer | WEB-01, WEB-02, WEB-03 | CAP-06, INT-02 |
| Backend/API developer | CS-S01, WEB-04, WEB-05 | WEB-06, INT-07 |
| Full-stack developer | WEB-01, WEB-03, WEB-04 | WEB-06, INT-06 |
| Portfolio sprint | CAP-06 + best README from each track | INT-06 |

---

## Author

**Mohammad Bilal** - Projects playbook for the Interview Help repo. Theory lives in the roadmaps; proof lives in your repos. Ship small, explain clearly, drill out loud.

*Pair with:* [`README.md`](./README.md) · [`OOP.md`](./OOP.md) · [`CS.md`](./CS.md) · [`Data.md`](./Data.md) · [`Networks.md`](./Networks.md) · [`AI.md`](./AI.md) · [`ODOO.md`](./ODOO.md) · [`Web.md`](./Web.md) · [`cloud.md`](./cloud.md) · [`devops.md`](./devops.md) · [`Interview.md`](./Interview.md)
