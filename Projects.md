# Projects Playbook

*Mohammad Bilal's hands-on project guide for the Interview Help repo - small-to-medium builds that cement concepts from each roadmap. Pair every project with a public README that explains what broke, what you built, and what you would change next.*

*Project inspiration curated with Composio (YouTube and GitHub search) against hands-on tutorials, maintained repositories, Odoo examples, structured project collections, and official platform/API/security documentation. See [Curated inspiration](#curated-inspiration) at the bottom.*

**Scope:** Each project strengthens one connection between ideas · no oversized applications · public proof of your work.

```
Build → Explain → Write and publish the README → Practice with Interview.md
```

---

**Project card legend (every project uses this shape)**

| Field | Meaning |
| --- | --- |
| **Roadmap** | Which file and phase cluster owns the theory |
| **Goal** | What you are proving in one sentence |
| **Concepts practiced** | Skills the build forces you to use |
| **How challenging the project is** | Easy / Medium / Hard (scope, not IQ) |
| **Steps** | 3-8 actionable bullets |
| **Done when** | Acceptance criteria - clear checks that tell you whether the project is truly finished |
| **Stretch** | Optional depth if you have time |

**Difficulty guide**

| Level | Typical scope | Time box (solo) |
| --- | --- | --- |
| Easy | Single file or CLI, no persistence | 2-6 hours |
| Medium | Multiple modules, files or DB, tests | 1-3 days |
| Hard | Design doc + code, concurrency, or integration | 3-7 days |

---

## 1. How to Use This File

### Start here if you have never built a project before

A **project** is a small, working result that lets you use what you just learned. **Scope** means the exact boundary of what you will and will not build. **Acceptance criteria** are observable checks that tell you the work is finished. A **trade-off** is a choice where one benefit costs another, and a **README** is the instruction page that tells another person what the project does, how to run it, and what you learned.

Start smaller than your ambition. Make one path work from beginning to end, prove it with a test or saved output, and only then add an optional feature. Each phase project below is deliberately limited so you can finish it with the knowledge introduced up to that point.

**Words you will meet often:** a **repository** is the project folder and its version history; a **CLI** is a program you use by typing commands; a **test** checks that observed behavior matches an expected result; **evidence** is saved output, a test report, or another reproducible sign that a claim is true; a **stretch task** is an optional extra challenge; a **refactor** changes code structure without changing promised behavior; **deployment** puts a project into a running environment; and a **capstone** combines several earlier skills in one larger final project.

This playbook is where you turn reading into working practice. [`CS.md`](./CS.md) Phase 3 teaches linked lists; building one from scratch shows whether you can explain why it is useful and how it leads to the next idea in [`Interview.md`](./Interview.md).

### Pick projects by what you just learned, not by what is popular

| Rule | Why |
| --- | --- |
| **1-2 projects per phase cluster** | One finished, well-explained project teaches and proves more than several unfinished repositories |
| **Finish before you hop tracks** | A finished calculator teaches more than three abandoned create-read-update-delete applications |
| **Write the README first draft after building** | Makes you explain why you chose one approach and what that choice costs, instead of only listing features |
| **Tag the roadmap phase in the README** | Recruiters and future-you can connect the concept to the finished project |

### Recommended rhythm

```
Read the phase → pass its understanding check → choose one matching project → write and publish the README → practice the related Interview.md questions aloud
```

### What every public README must include

1. **Problem** - what wall you hit without this build
2. **Architecture** - one diagram or ASCII sketch
3. **How to run** - copy-paste commands that work on a clean machine
4. **Concepts map** - link to roadmap phases (e.g., "OOP Phase 4 encapsulation")
5. **Trade-offs** - one thing you simplified and why
6. **Next step** - which project you would do next and why

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
| [`AI.md`](./AI.md) | LLM applications you can evaluate and release (12-18) | AI-06 to AI-09 |
| [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md) | Defensive and authorized security labs (1-20) | CYBER phase navigator below |
| [`ODOO.md`](./ODOO.md) | Module to integration | ODOO-01 to ODOO-08 |
| [`Web.md`](./Web.md) | Browser to production (1-19) | WEB-01 to WEB-06 |
| [`cloud.md`](./cloud.md) | Cloud foundations to production (1-19) | CLOUD-01 to CLOUD-04 |
| [`devops.md`](./devops.md) | Delivery foundations to production (1-19) | DEVOPS-01 to DEVOPS-05 |
| Cross-cutting | Capstones | CAP-01 to CAP-06 |
| [`Interview.md`](./Interview.md) | Timed speak + build | INT-01 to INT-07 |

## Phase-by-phase project navigator

Use this navigator at the end of **every phase**. Each phase section is a focused build specification, not an instruction to copy someone else's repository. The external repositories and videos are public inspiration; implement your own version from the phase knowledge, cite anything you reuse, and obey repository licenses.

**Every project is complete only when:** the project runs from a clean checkout, its verification evidence is committed, and its README links back to the matching roadmap phase.

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

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### OOP Phase F1 Project

**Recommended build - Execution Trace Notebook**

**Why this is the right project now:** it applies the material covered through [OOP Phase F1](./OOP.md#phase-f1) without requiring later phases.

**What to build, step by step**

- Build **Execution Trace Notebook** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Execution Trace Notebook Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [How to Build a Python CLI Tool People Actually Want to Use - ArjanCodes](https://www.youtube.com/watch?v=FWacanslfFM)

> **When this project is complete:** [Resume your study at OOP Phase F2](./OOP.md#phase-f2) · [Review Phase F1](./OOP.md#phase-f1)

---
#### OOP Phase F2 Project

**Recommended build - CLI Rule Engine**

**Why this is the right project now:** it applies the material covered through [OOP Phase F2](./OOP.md#phase-f2) without requiring later phases.

**What to build, step by step**

- Build **CLI Rule Engine** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - CLI Rule Engine Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [How to Build a Python CLI Tool People Actually Want to Use - ArjanCodes](https://www.youtube.com/watch?v=FWacanslfFM)

> **When this project is complete:** [Resume your study at OOP Phase F3](./OOP.md#phase-f3) · [Review Phase F2](./OOP.md#phase-f2)

---
#### OOP Phase F3 Project

**Recommended build - Modular Text Statistics**

**Why this is the right project now:** it applies the material covered through [OOP Phase F3](./OOP.md#phase-f3) without requiring later phases.

**What to build, step by step**

- Build **Modular Text Statistics** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Modular Text Statistics Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [How to Build a Python CLI Tool People Actually Want to Use - ArjanCodes](https://www.youtube.com/watch?v=FWacanslfFM)

> **When this project is complete:** [Resume your study at OOP Phase 1](./OOP.md#phase-1) · [Review Phase F3](./OOP.md#phase-f3)

---
#### OOP Phase 1 Project

**Recommended build - Procedural-to-Objects Refactor**

**Why this is the right project now:** it applies the material covered through [OOP Phase 1](./OOP.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **Procedural-to-Objects Refactor** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Procedural-to-Objects Refactor Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners - Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 2](./OOP.md#phase-2) · [Review Phase 1](./OOP.md#phase-1)

---
#### OOP Phase 2 Project

**Recommended build - Class & Instance Registry**

**Why this is the right project now:** it applies the material covered through [OOP Phase 2](./OOP.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **Class & Instance Registry** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Class & Instance Registry Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners - Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 3](./OOP.md#phase-3) · [Review Phase 2](./OOP.md#phase-2)

---
#### OOP Phase 3 Project

**Recommended build - Bank Account State Machine**

**Why this is the right project now:** it applies the material covered through [OOP Phase 3](./OOP.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **Bank Account State Machine** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Bank Account State Machine Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners - Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 4](./OOP.md#phase-4) · [Review Phase 3](./OOP.md#phase-3)

---
#### OOP Phase 4 Project

**Recommended build - Validated Wallet API**

**Why this is the right project now:** it applies the material covered through [OOP Phase 4](./OOP.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **Validated Wallet API** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Validated Wallet API Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners - Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 5](./OOP.md#phase-5) · [Review Phase 4](./OOP.md#phase-4)

---
#### OOP Phase 5 Project

**Recommended build - Pluggable Shape Calculator**

**Why this is the right project now:** it applies the material covered through [OOP Phase 5](./OOP.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Pluggable Shape Calculator** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Pluggable Shape Calculator Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners - Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 6](./OOP.md#phase-6) · [Review Phase 5](./OOP.md#phase-5)

---
#### OOP Phase 6 Project

**Recommended build - Employee Payroll Hierarchy**

**Why this is the right project now:** it applies the material covered through [OOP Phase 6](./OOP.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Employee Payroll Hierarchy** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Employee Payroll Hierarchy Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners - Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 7](./OOP.md#phase-7) · [Review Phase 6](./OOP.md#phase-6)

---
#### OOP Phase 7 Project

**Recommended build - Polymorphic Exporter**

**Why this is the right project now:** it applies the material covered through [OOP Phase 7](./OOP.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **Polymorphic Exporter** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Polymorphic Exporter Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners - Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 8](./OOP.md#phase-8) · [Review Phase 7](./OOP.md#phase-7)

---
#### OOP Phase 8 Project

**Recommended build - Composed Order Service**

**Why this is the right project now:** it applies the material covered through [OOP Phase 8](./OOP.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **Composed Order Service** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Composed Order Service Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners - Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 9](./OOP.md#phase-9) · [Review Phase 8](./OOP.md#phase-8)

---
#### OOP Phase 9 Project

**Recommended build - Pythonic Collection Wrapper**

**Why this is the right project now:** it applies the material covered through [OOP Phase 9](./OOP.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **Pythonic Collection Wrapper** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Pythonic Collection Wrapper Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Python OOP Project for Beginners - Dave Gray](https://www.youtube.com/watch?v=PMFd95RgIwE)

> **When this project is complete:** [Resume your study at OOP Phase 10](./OOP.md#phase-10) · [Review Phase 9](./OOP.md#phase-9)

---
#### OOP Phase 10 Project

**Recommended build - Library Relationship Model**

**Why this is the right project now:** it applies the material covered through [OOP Phase 10](./OOP.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **Library Relationship Model** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Library Relationship Model Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) - CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 11](./OOP.md#phase-11) · [Review Phase 10](./OOP.md#phase-10)

---
#### OOP Phase 11 Project

**Recommended build - God-Object Rescue**

**Why this is the right project now:** it applies the material covered through [OOP Phase 11](./OOP.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **God-Object Rescue** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - God-Object Rescue Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) - CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 12](./OOP.md#phase-12) · [Review Phase 11](./OOP.md#phase-11)

---
#### OOP Phase 12 Project

**Recommended build - SOLID Notification Service**

**Why this is the right project now:** it applies the material covered through [OOP Phase 12](./OOP.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **SOLID Notification Service** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - SOLID Notification Service Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) - CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 13](./OOP.md#phase-13) · [Review Phase 12](./OOP.md#phase-12)

---
#### OOP Phase 13 Project

**Recommended build - Configurable Object Factory**

**Why this is the right project now:** it applies the material covered through [OOP Phase 13](./OOP.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **Configurable Object Factory** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Configurable Object Factory Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) - CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 14](./OOP.md#phase-14) · [Review Phase 13](./OOP.md#phase-13)

---
#### OOP Phase 14 Project

**Recommended build - Legacy Payment Adapter**

**Why this is the right project now:** it applies the material covered through [OOP Phase 14](./OOP.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **Legacy Payment Adapter** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Legacy Payment Adapter Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) - CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 15](./OOP.md#phase-15) · [Review Phase 14](./OOP.md#phase-14)

---
#### OOP Phase 15 Project

**Recommended build - Event-Driven Task Board**

**Why this is the right project now:** it applies the material covered through [OOP Phase 15](./OOP.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **Event-Driven Task Board** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Event-Driven Task Board Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) - CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 16](./OOP.md#phase-16) · [Review Phase 15](./OOP.md#phase-15)

---
#### OOP Phase 16 Project

**Recommended build - Testable Domain Model**

**Why this is the right project now:** it applies the material covered through [OOP Phase 16](./OOP.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **Testable Domain Model** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Testable Domain Model Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) - CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 17](./OOP.md#phase-17) · [Review Phase 16](./OOP.md#phase-16)

---
#### OOP Phase 17 Project

**Recommended build - Layered Inventory App**

**Why this is the right project now:** it applies the material covered through [OOP Phase 17](./OOP.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **Layered Inventory App** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Layered Inventory App Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Game of Life in Python (SOLID + Design Patterns) - CODE CREATIVE](https://www.youtube.com/watch?v=PIDrbtykQPY)

> **When this project is complete:** [Resume your study at OOP Phase 18](./OOP.md#phase-18) · [Review Phase 17](./OOP.md#phase-17)

---
#### OOP Phase 18 Project

**Recommended build - Parking Lot LLD**

**Why this is the right project now:** it applies the material covered through [OOP Phase 18](./OOP.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **Parking Lot LLD** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Parking Lot LLD Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cosmic Python](https://github.com/cosmicpython/book)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Parking Lot Design - Think Software](https://www.youtube.com/watch?v=tVRyb4HaHgw)

> **When this project is complete:** [Resume your study at OOP Phase 19](./OOP.md#phase-19) · [Review Phase 18](./OOP.md#phase-18)

---
#### OOP Phase 19 Project

**Recommended build - Design Portfolio Pack**

**Why this is the right project now:** it applies the material covered through [OOP Phase 19](./OOP.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Design Portfolio Pack** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Design Portfolio Pack Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Parking Lot Design - Think Software](https://www.youtube.com/watch?v=tVRyb4HaHgw)

> **When this project is complete:** [Resume your study at OOP Phase 20](./OOP.md#phase-20) · [Review Phase 19](./OOP.md#phase-19)

---
#### OOP Phase 20 Project

**Recommended build - Timed OOP Design Kata**

**Why this is the right project now:** it applies the material covered through [OOP Phase 20](./OOP.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **Timed OOP Design Kata** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Timed OOP Design Kata Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [More Python OOP Projects](https://github.com/MostafaAhmed98/Python_OOP_Projects)
- **YouTube build/lab:** [Parking Lot Design - Think Software](https://www.youtube.com/watch?v=tVRyb4HaHgw)

> **When this project is complete:** [Return to the OOP phase index](./OOP.md#phase-index) · [Review Phase 20](./OOP.md#phase-20)

---

### CS Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### CS Phase 1 Project

**Recommended build - Mini Expression Runtime**

**Why this is the right project now:** it applies the material covered through [CS Phase 1](./CS.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **Mini Expression Runtime** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Mini Expression Runtime Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns - freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 2](./CS.md#phase-2) · [Review Phase 1](./CS.md#phase-1)

---
#### CS Phase 2 Project

**Recommended build - Algorithm Growth Profiler**

**Why this is the right project now:** it applies the material covered through [CS Phase 2](./CS.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **Algorithm Growth Profiler** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Algorithm Growth Profiler Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns - freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 3](./CS.md#phase-3) · [Review Phase 2](./CS.md#phase-2)

---
#### CS Phase 3 Project

**Recommended build - Data Structures Toolkit**

**Why this is the right project now:** it applies the material covered through [CS Phase 3](./CS.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **Data Structures Toolkit** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Data Structures Toolkit Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns - freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 4](./CS.md#phase-4) · [Review Phase 3](./CS.md#phase-3)

---
#### CS Phase 4 Project

**Recommended build - Recursive Filesystem Walker**

**Why this is the right project now:** it applies the material covered through [CS Phase 4](./CS.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **Recursive Filesystem Walker** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Recursive Filesystem Walker Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns - freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 5](./CS.md#phase-5) · [Review Phase 4](./CS.md#phase-4)

---
#### CS Phase 5 Project

**Recommended build - Priority Task Scheduler**

**Why this is the right project now:** it applies the material covered through [CS Phase 5](./CS.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Priority Task Scheduler** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Priority Task Scheduler Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Data Structure and Algorithm Patterns - freeCodeCamp.org](https://www.youtube.com/watch?v=Z_c4byLrNBU)

> **When this project is complete:** [Resume your study at CS Phase 6](./CS.md#phase-6) · [Review Phase 5](./CS.md#phase-5)

---
#### CS Phase 6 Project

**Recommended build - Hash Table and LRU Cache**

**Why this is the right project now:** it applies the material covered through [CS Phase 6](./CS.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Hash Table and LRU Cache** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Hash Table and LRU Cache Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building - Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 7](./CS.md#phase-7) · [Review Phase 6](./CS.md#phase-6)

---
#### CS Phase 7 Project

**Recommended build - Sorting Benchmark Explorer**

**Why this is the right project now:** it applies the material covered through [CS Phase 7](./CS.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **Sorting Benchmark Explorer** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Sorting Benchmark Explorer Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building - Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 8](./CS.md#phase-8) · [Review Phase 7](./CS.md#phase-7)

---
#### CS Phase 8 Project

**Recommended build - Graph Route Planner**

**Why this is the right project now:** it applies the material covered through [CS Phase 8](./CS.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **Graph Route Planner** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Graph Route Planner Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building - Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 9](./CS.md#phase-9) · [Review Phase 8](./CS.md#phase-8)

---
#### CS Phase 9 Project

**Recommended build - Algorithm Pattern Workbook**

**Why this is the right project now:** it applies the material covered through [CS Phase 9](./CS.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **Algorithm Pattern Workbook** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Algorithm Pattern Workbook Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [The Algorithms](https://github.com/TheAlgorithms/Python)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building - Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 10](./CS.md#phase-10) · [Review Phase 9](./CS.md#phase-9)

---
#### CS Phase 10 Project

**Recommended build - Parking Lot LLD**

**Why this is the right project now:** it applies the material covered through [CS Phase 10](./CS.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **Parking Lot LLD** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Parking Lot LLD Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [python-patterns](https://github.com/faif/python-patterns)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Four Systems Projects Worth Building - Alexa Fazio](https://www.youtube.com/watch?v=6CJiM3E2mAA)

> **When this project is complete:** [Resume your study at CS Phase 11](./CS.md#phase-11) · [Review Phase 10](./CS.md#phase-10)

---
#### CS Phase 11 Project

**Recommended build - Shell and Scheduler Simulator**

**Why this is the right project now:** it applies the material covered through [CS Phase 11](./CS.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **Shell and Scheduler Simulator** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Shell and Scheduler Simulator Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API - JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 12](./CS.md#phase-12) · [Review Phase 11](./CS.md#phase-11)

---
#### CS Phase 12 Project

**Recommended build - TCP Chat Service**

**Why this is the right project now:** it applies the material covered through [CS Phase 12](./CS.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **TCP Chat Service** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - TCP Chat Service Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API - JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 13](./CS.md#phase-13) · [Review Phase 12](./CS.md#phase-12)

---
#### CS Phase 13 Project

**Recommended build - Raw HTTP API Server**

**Why this is the right project now:** it applies the material covered through [CS Phase 13](./CS.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **Raw HTTP API Server** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Raw HTTP API Server Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API - JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 14](./CS.md#phase-14) · [Review Phase 13](./CS.md#phase-13)

---
#### CS Phase 14 Project

**Recommended build - Transactional Library Database**

**Why this is the right project now:** it applies the material covered through [CS Phase 14](./CS.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **Transactional Library Database** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Transactional Library Database Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API - JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 15](./CS.md#phase-15) · [Review Phase 14](./CS.md#phase-14)

---
#### CS Phase 15 Project

**Recommended build - Secure Auth Service**

**Why this is the right project now:** it applies the material covered through [CS Phase 15](./CS.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **Secure Auth Service** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Secure Auth Service Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OWASP NodeGoat](https://github.com/OWASP/NodeGoat)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Build a Production-Ready Backend API - JavaScript Mastery](https://www.youtube.com/watch?v=rOpEN1JDaD0)

> **When this project is complete:** [Resume your study at CS Phase 16](./CS.md#phase-16) · [Review Phase 15](./CS.md#phase-15)

---
#### CS Phase 16 Project

**Recommended build - Tested CI-Ready Service**

**Why this is the right project now:** it applies the material covered through [CS Phase 16](./CS.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **Tested CI-Ready Service** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Tested CI-Ready Service Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems - Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Resume your study at CS Phase 17](./CS.md#phase-17) · [Review Phase 16](./CS.md#phase-16)

---
#### CS Phase 17 Project

**Recommended build - Scalable URL Shortener Design**

**Why this is the right project now:** it applies the material covered through [CS Phase 17](./CS.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **Scalable URL Shortener Design** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Scalable URL Shortener Design Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [System Design Primer](https://github.com/donnemartin/system-design-primer)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems - Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Resume your study at CS Phase 18](./CS.md#phase-18) · [Review Phase 17](./CS.md#phase-17)

---
#### CS Phase 18 Project

**Recommended build - Replicated Ledger Simulator**

**Why this is the right project now:** it applies the material covered through [CS Phase 18](./CS.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **Replicated Ledger Simulator** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Replicated Ledger Simulator Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [System Design Primer](https://github.com/donnemartin/system-design-primer)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems - Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Resume your study at CS Phase 19](./CS.md#phase-19) · [Review Phase 18](./CS.md#phase-18)

---
#### CS Phase 19 Project

**Recommended build - Integrated Systems Capstone**

**Why this is the right project now:** it applies the material covered through [CS Phase 19](./CS.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Integrated Systems Capstone** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Integrated Systems Capstone Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems - Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Resume your study at CS Phase 20](./CS.md#phase-20) · [Review Phase 19](./CS.md#phase-19)

---
#### CS Phase 20 Project

**Recommended build - Timed Interview Harness**

**Why this is the right project now:** it applies the material covered through [CS Phase 20](./CS.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **Timed Interview Harness** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Timed Interview Harness Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Coding Interview University](https://github.com/jwasham/coding-interview-university)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [System Design Primer: Distributed Systems - Gaurav Sen](https://www.youtube.com/watch?v=SqcXvc3ZmRU)

> **When this project is complete:** [Return to the CS phase index](./CS.md#phase-index) · [Review Phase 20](./CS.md#phase-20)

---

### Data Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### DATA Phase 1 Project

**Recommended build - Decision Metric Brief**

**Why this is the right project now:** it applies the material covered through [DATA Phase 1](./Data.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **Decision Metric Brief** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Decision Metric Brief Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio - CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 2](./Data.md#phase-2) · [Review Phase 1](./Data.md#phase-1)

---
#### DATA Phase 2 Project

**Recommended build - Spreadsheet KPI Dashboard**

**Why this is the right project now:** it applies the material covered through [DATA Phase 2](./Data.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **Spreadsheet KPI Dashboard** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Spreadsheet KPI Dashboard Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio - CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 3](./Data.md#phase-3) · [Review Phase 2](./Data.md#phase-2)

---
#### DATA Phase 3 Project

**Recommended build - Reproducible Data CLI**

**Why this is the right project now:** it applies the material covered through [DATA Phase 3](./Data.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **Reproducible Data CLI** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Reproducible Data CLI Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio - CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 4](./Data.md#phase-4) · [Review Phase 3](./Data.md#phase-3)

---
#### DATA Phase 4 Project

**Recommended build - SQL Bookstore Database**

**Why this is the right project now:** it applies the material covered through [DATA Phase 4](./Data.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **SQL Bookstore Database** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - SQL Bookstore Database Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio - CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 5](./Data.md#phase-5) · [Review Phase 4](./Data.md#phase-4)

---
#### DATA Phase 5 Project

**Recommended build - Sales Cohort Analysis**

**Why this is the right project now:** it applies the material covered through [DATA Phase 5](./Data.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Sales Cohort Analysis** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Sales Cohort Analysis Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Building Your First Data Analytics Portfolio - CareerFoundry](https://www.youtube.com/watch?v=j9Q84_Gn_T0)

> **When this project is complete:** [Resume your study at DATA Phase 6](./Data.md#phase-6) · [Review Phase 5](./Data.md#phase-5)

---
#### DATA Phase 6 Project

**Recommended build - Window Function Analytics Pack**

**Why this is the right project now:** it applies the material covered through [DATA Phase 6](./Data.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Window Function Analytics Pack** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Window Function Analytics Pack Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data - Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 7](./Data.md#phase-7) · [Review Phase 6](./Data.md#phase-6)

---
#### DATA Phase 7 Project

**Recommended build - A/B Test Analyzer**

**Why this is the right project now:** it applies the material covered through [DATA Phase 7](./Data.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **A/B Test Analyzer** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - A/B Test Analyzer Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data - Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 8](./Data.md#phase-8) · [Review Phase 7](./Data.md#phase-7)

---
#### DATA Phase 8 Project

**Recommended build - Dirty Dataset Cleaner**

**Why this is the right project now:** it applies the material covered through [DATA Phase 8](./Data.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **Dirty Dataset Cleaner** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Dirty Dataset Cleaner Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data - Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 9](./Data.md#phase-9) · [Review Phase 8](./Data.md#phase-8)

---
#### DATA Phase 9 Project

**Recommended build - Executive Data Story**

**Why this is the right project now:** it applies the material covered through [DATA Phase 9](./Data.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **Executive Data Story** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Executive Data Story Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data - Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 10](./Data.md#phase-10) · [Review Phase 9](./Data.md#phase-9)

---
#### DATA Phase 10 Project

**Recommended build - Product Funnel EDA**

**Why this is the right project now:** it applies the material covered through [DATA Phase 10](./Data.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **Product Funnel EDA** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Product Funnel EDA Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [SQL Data Analyst Portfolio Project with Real Data - Amlan Mohanty](https://www.youtube.com/watch?v=x8dfQkKTyP0)

> **When this project is complete:** [Resume your study at DATA Phase 11](./Data.md#phase-11) · [Review Phase 10](./Data.md#phase-10)

---
#### DATA Phase 11 Project

**Recommended build - Normalized Order Database**

**Why this is the right project now:** it applies the material covered through [DATA Phase 11](./Data.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **Normalized Order Database** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Normalized Order Database Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow - jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 12](./Data.md#phase-12) · [Review Phase 11](./Data.md#phase-11)

---
#### DATA Phase 12 Project

**Recommended build - Star Schema Warehouse**

**Why this is the right project now:** it applies the material covered through [DATA Phase 12](./Data.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **Star Schema Warehouse** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Star Schema Warehouse Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow - jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 13](./Data.md#phase-13) · [Review Phase 12](./Data.md#phase-12)

---
#### DATA Phase 13 Project

**Recommended build - Incremental ETL Pipeline**

**Why this is the right project now:** it applies the material covered through [DATA Phase 13](./Data.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **Incremental ETL Pipeline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Incremental ETL Pipeline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow - jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 14](./Data.md#phase-14) · [Review Phase 13](./Data.md#phase-13)

---
#### DATA Phase 14 Project

**Recommended build - Scheduled Airflow Pipeline**

**Why this is the right project now:** it applies the material covered through [DATA Phase 14](./Data.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **Scheduled Airflow Pipeline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Scheduled Airflow Pipeline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Apache Airflow](https://github.com/apache/airflow)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow - jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 15](./Data.md#phase-15) · [Review Phase 14](./Data.md#phase-14)

---
#### DATA Phase 15 Project

**Recommended build - dbt Analytics Project**

**Why this is the right project now:** it applies the material covered through [DATA Phase 15](./Data.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **dbt Analytics Project** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - dbt Analytics Project Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [dbt Jaffle Shop](https://github.com/dbt-labs/jaffle_shop)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Build an ELT Pipeline with dbt, Snowflake, and Airflow - jayzern](https://www.youtube.com/watch?v=OLXkGB7krGo)

> **When this project is complete:** [Resume your study at DATA Phase 16](./Data.md#phase-16) · [Review Phase 15](./Data.md#phase-15)

---
#### DATA Phase 16 Project

**Recommended build - Cloud Warehouse Migration**

**Why this is the right project now:** it applies the material covered through [DATA Phase 16](./Data.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **Cloud Warehouse Migration** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Cloud Warehouse Migration Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project - Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Resume your study at DATA Phase 17](./Data.md#phase-17) · [Review Phase 16](./Data.md#phase-16)

---
#### DATA Phase 17 Project

**Recommended build - Distributed Spark Batch Job**

**Why this is the right project now:** it applies the material covered through [DATA Phase 17](./Data.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **Distributed Spark Batch Job** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Distributed Spark Batch Job Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Apache Spark](https://github.com/apache/spark)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project - Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Resume your study at DATA Phase 18](./Data.md#phase-18) · [Review Phase 17](./Data.md#phase-17)

---
#### DATA Phase 18 Project

**Recommended build - Kafka Streaming Metrics**

**Why this is the right project now:** it applies the material covered through [DATA Phase 18](./Data.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **Kafka Streaming Metrics** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Kafka Streaming Metrics Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project - Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Resume your study at DATA Phase 19](./Data.md#phase-19) · [Review Phase 18](./Data.md#phase-18)

---
#### DATA Phase 19 Project

**Recommended build - Data Quality Portfolio**

**Why this is the right project now:** it applies the material covered through [DATA Phase 19](./Data.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Data Quality Portfolio** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Data Quality Portfolio Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project - Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Resume your study at DATA Phase 20](./Data.md#phase-20) · [Review Phase 19](./Data.md#phase-19)

---
#### DATA Phase 20 Project

**Recommended build - Timed Analytics Case Study**

**Why this is the right project now:** it applies the material covered through [DATA Phase 20](./Data.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **Timed Analytics Case Study** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Timed Analytics Case Study Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp)
- **More project ideas on GitHub:** [Udacity Data Engineering Projects](https://github.com/san089/Udacity-Data-Engineering-Projects)
- **YouTube build/lab:** [Spark, Kafka, and Cassandra End-to-End Streaming Project - Data Engineering](https://www.youtube.com/watch?v=wNnTNTVdglM)

> **When this project is complete:** [Return to the DATA phase index](./Data.md#phase-index) · [Review Phase 20](./Data.md#phase-20)

---

### Networks Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### NETWORKS Phase 1 Project

**Recommended build - Latency vs Throughput Lab**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 1](./Networks.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **Latency vs Throughput Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Latency vs Throughput Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab - Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 2](./Networks.md#phase-2) · [Review Phase 1](./Networks.md#phase-1)

---
#### NETWORKS Phase 2 Project

**Recommended build - Noisy Link Simulator**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 2](./Networks.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **Noisy Link Simulator** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Noisy Link Simulator Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab - Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 3](./Networks.md#phase-3) · [Review Phase 2](./Networks.md#phase-2)

---
#### NETWORKS Phase 3 Project

**Recommended build - Ethernet Frame Encoder**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 3](./Networks.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **Ethernet Frame Encoder** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Ethernet Frame Encoder Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab - Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 4](./Networks.md#phase-4) · [Review Phase 3](./Networks.md#phase-3)

---
#### NETWORKS Phase 4 Project

**Recommended build - Learning Switch Simulator**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 4](./Networks.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **Learning Switch Simulator** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Learning Switch Simulator Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab - Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 5](./Networks.md#phase-5) · [Review Phase 4](./Networks.md#phase-4)

---
#### NETWORKS Phase 5 Project

**Recommended build - Subnet Calculator**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 5](./Networks.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Subnet Calculator** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Subnet Calculator Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Free CCNA: Subnetting Lab - Jeremy's IT Lab](https://www.youtube.com/watch?v=bQ8sdpGQu8c)

> **When this project is complete:** [Resume your study at NETWORKS Phase 6](./Networks.md#phase-6) · [Review Phase 5](./Networks.md#phase-5)

---
#### NETWORKS Phase 6 Project

**Recommended build - Longest-Prefix Router**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 6](./Networks.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Longest-Prefix Router** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Longest-Prefix Router Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial - Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 7](./Networks.md#phase-7) · [Review Phase 6](./Networks.md#phase-6)

---
#### NETWORKS Phase 7 Project

**Recommended build - DHCP/NAT Table Simulator**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 7](./Networks.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **DHCP/NAT Table Simulator** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - DHCP/NAT Table Simulator Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial - Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 8](./Networks.md#phase-8) · [Review Phase 7](./Networks.md#phase-7)

---
#### NETWORKS Phase 8 Project

**Recommended build - Packet Encapsulation Visualizer**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 8](./Networks.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **Packet Encapsulation Visualizer** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Packet Encapsulation Visualizer Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial - Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 9](./Networks.md#phase-9) · [Review Phase 8](./Networks.md#phase-8)

---
#### NETWORKS Phase 9 Project

**Recommended build - Reliable UDP Chat**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 9](./Networks.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **Reliable UDP Chat** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Reliable UDP Chat Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial - Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 10](./Networks.md#phase-10) · [Review Phase 9](./Networks.md#phase-9)

---
#### NETWORKS Phase 10 Project

**Recommended build - TCP State Trace**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 10](./Networks.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **TCP State Trace** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - TCP State Trace Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Python Socket Programming Tutorial - Tech With Tim](https://www.youtube.com/watch?v=3QiPPX-KeSc)

> **When this project is complete:** [Resume your study at NETWORKS Phase 11](./Networks.md#phase-11) · [Review Phase 10](./Networks.md#phase-10)

---
#### NETWORKS Phase 11 Project

**Recommended build - Multi-client Socket Server**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 11](./Networks.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **Multi-client Socket Server** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Multi-client Socket Server Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS - Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 12](./Networks.md#phase-12) · [Review Phase 11](./Networks.md#phase-11)

---
#### NETWORKS Phase 12 Project

**Recommended build - Recursive DNS Resolver**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 12](./Networks.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **Recursive DNS Resolver** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Recursive DNS Resolver Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS - Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 13](./Networks.md#phase-13) · [Review Phase 12](./Networks.md#phase-12)

---
#### NETWORKS Phase 13 Project

**Recommended build - Raw HTTP Exchange**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 13](./Networks.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **Raw HTTP Exchange** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Raw HTTP Exchange Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS - Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 14](./Networks.md#phase-14) · [Review Phase 13](./Networks.md#phase-13)

---
#### NETWORKS Phase 14 Project

**Recommended build - TLS Certificate Inspector**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 14](./Networks.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **TLS Certificate Inspector** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - TLS Certificate Inspector Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS - Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 15](./Networks.md#phase-15) · [Review Phase 14](./Networks.md#phase-14)

---
#### NETWORKS Phase 15 Project

**Recommended build - Packet Forensics Report**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 15](./Networks.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **Packet Forensics Report** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Packet Forensics Report Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Wireshark](https://github.com/wireshark/wireshark)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Network Protocols: ARP through TLS and DNS - Practical Networking](https://www.youtube.com/watch?v=E5bSumTAHZE)

> **When this project is complete:** [Resume your study at NETWORKS Phase 16](./Networks.md#phase-16) · [Review Phase 15](./Networks.md#phase-15)

---
#### NETWORKS Phase 16 Project

**Recommended build - Wi-Fi Survey and Heatmap**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 16](./Networks.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **Wi-Fi Survey and Heatmap** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Wi-Fi Survey and Heatmap Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab - Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Resume your study at NETWORKS Phase 17](./Networks.md#phase-17) · [Review Phase 16](./Networks.md#phase-16)

---
#### NETWORKS Phase 17 Project

**Recommended build - Reverse Proxy Load Lab**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 17](./Networks.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **Reverse Proxy Load Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Reverse Proxy Load Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab - Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Resume your study at NETWORKS Phase 18](./Networks.md#phase-18) · [Review Phase 17](./Networks.md#phase-17)

---
#### NETWORKS Phase 18 Project

**Recommended build - BGP Policy Simulator**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 18](./Networks.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **BGP Policy Simulator** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - BGP Policy Simulator Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab - Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Resume your study at NETWORKS Phase 19](./Networks.md#phase-19) · [Review Phase 18](./Networks.md#phase-18)

---
#### NETWORKS Phase 19 Project

**Recommended build - Automated Network Lab Portfolio**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 19](./Networks.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Automated Network Lab Portfolio** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Automated Network Lab Portfolio Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab - Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Resume your study at NETWORKS Phase 20](./Networks.md#phase-20) · [Review Phase 19](./Networks.md#phase-19)

---
#### NETWORKS Phase 20 Project

**Recommended build - Timed Troubleshooting Drill**

**Why this is the right project now:** it applies the material covered through [NETWORKS Phase 20](./Networks.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **Timed Troubleshooting Drill** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Timed Troubleshooting Drill Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Mininet](https://github.com/mininet/mininet)
- **More project ideas on GitHub:** [Docker-Based Computer Networks Labs](https://github.com/senisioi/computer-networks)
- **YouTube build/lab:** [Wireshark Packet Analysis Lab - Concepts & Tricks](https://www.youtube.com/watch?v=2SYknklVHqU)

> **When this project is complete:** [Return to the NETWORKS phase index](./Networks.md#phase-index) · [Review Phase 20](./Networks.md#phase-20)

---

### AI Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### AI Phase 1 Project

**Recommended build - Rule vs Learner Benchmark**

**Why this is the right project now:** it applies the material covered through [AI Phase 1](./AI.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **Rule vs Learner Benchmark** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Rule vs Learner Benchmark Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn - Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 2](./AI.md#phase-2) · [Review Phase 1](./AI.md#phase-1)

---
#### AI Phase 2 Project

**Recommended build - Gradient Descent Visualizer**

**Why this is the right project now:** it applies the material covered through [AI Phase 2](./AI.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **Gradient Descent Visualizer** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Gradient Descent Visualizer Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [micrograd](https://github.com/karpathy/micrograd)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn - Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 3](./AI.md#phase-3) · [Review Phase 2](./AI.md#phase-2)

---
#### AI Phase 3 Project

**Recommended build - NumPy/Pandas Dataset Lab**

**Why this is the right project now:** it applies the material covered through [AI Phase 3](./AI.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **NumPy/Pandas Dataset Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - NumPy/Pandas Dataset Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn - Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 4](./AI.md#phase-4) · [Review Phase 3](./AI.md#phase-3)

---
#### AI Phase 4 Project

**Recommended build - Regression and Classification Baseline**

**Why this is the right project now:** it applies the material covered through [AI Phase 4](./AI.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **Regression and Classification Baseline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Regression and Classification Baseline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn - Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 5](./AI.md#phase-5) · [Review Phase 4](./AI.md#phase-4)

---
#### AI Phase 5 Project

**Recommended build - Leakage-Proof Evaluation Harness**

**Why this is the right project now:** it applies the material covered through [AI Phase 5](./AI.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Leakage-Proof Evaluation Harness** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Leakage-Proof Evaluation Harness Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build a Machine Learning Web App with scikit-learn - Patrick Loeber](https://www.youtube.com/watch?v=Klqn--Mu2pE)

> **When this project is complete:** [Resume your study at AI Phase 6](./AI.md#phase-6) · [Review Phase 5](./AI.md#phase-5)

---
#### AI Phase 6 Project

**Recommended build - Ensemble Model Showdown**

**Why this is the right project now:** it applies the material covered through [AI Phase 6](./AI.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Ensemble Model Showdown** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Ensemble Model Showdown Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model - Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 7](./AI.md#phase-7) · [Review Phase 6](./AI.md#phase-6)

---
#### AI Phase 7 Project

**Recommended build - Neural Network from Scratch**

**Why this is the right project now:** it applies the material covered through [AI Phase 7](./AI.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **Neural Network from Scratch** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Neural Network from Scratch Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model - Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 8](./AI.md#phase-8) · [Review Phase 7](./AI.md#phase-7)

---
#### AI Phase 8 Project

**Recommended build - Tiny Autograd Engine**

**Why this is the right project now:** it applies the material covered through [AI Phase 8](./AI.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **Tiny Autograd Engine** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Tiny Autograd Engine Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model - Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 9](./AI.md#phase-9) · [Review Phase 8](./AI.md#phase-8)

---
#### AI Phase 9 Project

**Recommended build - Reusable PyTorch Trainer**

**Why this is the right project now:** it applies the material covered through [AI Phase 9](./AI.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **Reusable PyTorch Trainer** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Reusable PyTorch Trainer Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model - Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 10](./AI.md#phase-10) · [Review Phase 9](./AI.md#phase-9)

---
#### AI Phase 10 Project

**Recommended build - Transfer-Learning Image Classifier**

**Why this is the right project now:** it applies the material covered through [AI Phase 10](./AI.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **Transfer-Learning Image Classifier** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Transfer-Learning Image Classifier Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Build Your First PyTorch Model - Rob Mulla](https://www.youtube.com/watch?v=tHL5STNJKag)

> **When this project is complete:** [Resume your study at AI Phase 11](./AI.md#phase-11) · [Review Phase 10](./AI.md#phase-10)

---
#### AI Phase 11 Project

**Recommended build - Sequence Sentiment Classifier**

**Why this is the right project now:** it applies the material covered through [AI Phase 11](./AI.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **Sequence Sentiment Classifier** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Sequence Sentiment Classifier Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [PyTorch Examples](https://github.com/pytorch/examples)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch - freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 12](./AI.md#phase-12) · [Review Phase 11](./AI.md#phase-11)

---
#### AI Phase 12 Project

**Recommended build - Semantic Search Engine**

**Why this is the right project now:** it applies the material covered through [AI Phase 12](./AI.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **Semantic Search Engine** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Semantic Search Engine Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch - freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 13](./AI.md#phase-13) · [Review Phase 12](./AI.md#phase-12)

---
#### AI Phase 13 Project

**Recommended build - Tiny Transformer Explainer**

**Why this is the right project now:** it applies the material covered through [AI Phase 13](./AI.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **Tiny Transformer Explainer** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Tiny Transformer Explainer Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch - freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 14](./AI.md#phase-14) · [Review Phase 13](./AI.md#phase-13)

---
#### AI Phase 14 Project

**Recommended build - Prompt Experiment Matrix**

**Why this is the right project now:** it applies the material covered through [AI Phase 14](./AI.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **Prompt Experiment Matrix** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Prompt Experiment Matrix Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch - freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 15](./AI.md#phase-15) · [Review Phase 14](./AI.md#phase-14)

---
#### AI Phase 15 Project

**Recommended build - Citation-First RAG**

**Why this is the right project now:** it applies the material covered through [AI Phase 15](./AI.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **Citation-First RAG** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Citation-First RAG Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [Learn RAG from Scratch - freeCodeCamp.org](https://www.youtube.com/watch?v=sVcwVQRHIc8)

> **When this project is complete:** [Resume your study at AI Phase 16](./AI.md#phase-16) · [Review Phase 15](./AI.md#phase-15)

---
#### AI Phase 16 Project

**Recommended build - LoRA Fine-Tuning Report**

**Why this is the right project now:** it applies the material covered through [AI Phase 16](./AI.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **LoRA Fine-Tuning Report** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - LoRA Fine-Tuning Report Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course - DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Resume your study at AI Phase 17](./AI.md#phase-17) · [Review Phase 16](./AI.md#phase-16)

---
#### AI Phase 17 Project

**Recommended build - Safe Tool-Using Agent**

**Why this is the right project now:** it applies the material covered through [AI Phase 17](./AI.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **Safe Tool-Using Agent** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Safe Tool-Using Agent Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Transformers](https://github.com/huggingface/transformers)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course - DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Resume your study at AI Phase 18](./AI.md#phase-18) · [Review Phase 17](./AI.md#phase-17)

---
#### AI Phase 18 Project

**Recommended build - Model Eval and Monitoring Pipeline**

**Why this is the right project now:** it applies the material covered through [AI Phase 18](./AI.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **Model Eval and Monitoring Pipeline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Model Eval and Monitoring Pipeline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course - DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Resume your study at AI Phase 19](./AI.md#phase-19) · [Review Phase 18](./AI.md#phase-18)

---
#### AI Phase 19 Project

**Recommended build - Reproducible AI Portfolio**

**Why this is the right project now:** it applies the material covered through [AI Phase 19](./AI.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Reproducible AI Portfolio** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Reproducible AI Portfolio Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course - DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Resume your study at AI Phase 20](./AI.md#phase-20) · [Review Phase 19](./AI.md#phase-19)

---
#### AI Phase 20 Project

**Recommended build - ML System Design Drill**

**Why this is the right project now:** it applies the material covered through [AI Phase 20](./AI.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **ML System Design Drill** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - ML System Design Drill Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [MLOps Zoomcamp](https://github.com/DataTalksClub/mlops-zoomcamp)
- **More project ideas on GitHub:** [Hands-On MLOps for DevOps Engineers](https://github.com/techiescamp/mlops-for-devops)
- **YouTube build/lab:** [AI Agent Evaluation Crash Course - DSwithBappy](https://www.youtube.com/watch?v=rwxcoEglXA4)

> **When this project is complete:** [Return to the AI phase index](./AI.md#phase-index) · [Review Phase 20](./AI.md#phase-20)

---

### ODOO Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### ODOO Phase 1 Project

**Recommended build - ERP Process Map**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 1](./ODOO.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **ERP Process Map** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - ERP Process Map Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 - OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 2](./ODOO.md#phase-2) · [Review Phase 1](./ODOO.md#phase-1)

---
#### ODOO Phase 2 Project

**Recommended build - Request-to-Database Trace**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 2](./ODOO.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **Request-to-Database Trace** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Request-to-Database Trace Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 - OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 3](./ODOO.md#phase-3) · [Review Phase 2](./ODOO.md#phase-2)

---
#### ODOO Phase 3 Project

**Recommended build - Reproducible Odoo Dev Stack**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 3](./ODOO.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **Reproducible Odoo Dev Stack** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Reproducible Odoo Dev Stack Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 - OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 4](./ODOO.md#phase-4) · [Review Phase 3](./ODOO.md#phase-3)

---
#### ODOO Phase 4 Project

**Recommended build - Minimal Todo Addon**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 4](./ODOO.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **Minimal Todo Addon** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Minimal Todo Addon Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 - OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 5](./ODOO.md#phase-5) · [Review Phase 4](./ODOO.md#phase-4)

---
#### ODOO Phase 5 Project

**Recommended build - Library Domain Models**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 5](./ODOO.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Library Domain Models** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Library Domain Models Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Create a Custom Module in Odoo 17/18 - OdooVerse](https://www.youtube.com/watch?v=A61AyJRzLB8)

> **When this project is complete:** [Resume your study at ODOO Phase 6](./ODOO.md#phase-6) · [Review Phase 5](./ODOO.md#phase-5)

---
#### ODOO Phase 6 Project

**Recommended build - Recordset Query Explorer**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 6](./ODOO.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Recordset Query Explorer** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Recordset Query Explorer Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security - EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 7](./ODOO.md#phase-7) · [Review Phase 6](./ODOO.md#phase-6)

---
#### ODOO Phase 7 Project

**Recommended build - Multi-company Access Lab**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 7](./ODOO.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **Multi-company Access Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Multi-company Access Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security - EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 8](./ODOO.md#phase-8) · [Review Phase 7](./ODOO.md#phase-7)

---
#### ODOO Phase 8 Project

**Recommended build - Inherited Library Views**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 8](./ODOO.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **Inherited Library Views** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Inherited Library Views Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security - EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 9](./ODOO.md#phase-9) · [Review Phase 8](./ODOO.md#phase-8)

---
#### ODOO Phase 9 Project

**Recommended build - Role-Aware Navigation Module**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 9](./ODOO.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **Role-Aware Navigation Module** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Role-Aware Navigation Module Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security - EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 10](./ODOO.md#phase-10) · [Review Phase 9](./ODOO.md#phase-9)

---
#### ODOO Phase 10 Project

**Recommended build - Validated Order Workflow**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 10](./ODOO.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **Validated Order Workflow** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Validated Order Workflow Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Module Structure: Models, Views, and Security - EasyDev](https://www.youtube.com/watch?v=ov-ReGkIxIg)

> **When this project is complete:** [Resume your study at ODOO Phase 11](./ODOO.md#phase-11) · [Review Phase 10](./ODOO.md#phase-10)

---
#### ODOO Phase 11 Project

**Recommended build - Sale Order Extension**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 11](./ODOO.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **Sale Order Extension** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Sale Order Extension Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation - VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 12](./ODOO.md#phase-12) · [Review Phase 11](./ODOO.md#phase-11)

---
#### ODOO Phase 12 Project

**Recommended build - Bulk Update Wizard**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 12](./ODOO.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **Bulk Update Wizard** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Bulk Update Wizard Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation - VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 13](./ODOO.md#phase-13) · [Review Phase 12](./ODOO.md#phase-12)

---
#### ODOO Phase 13 Project

**Recommended build - Idempotent Webhook Module**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 13](./ODOO.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **Idempotent Webhook Module** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Idempotent Webhook Module Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Connector](https://github.com/OCA/connector)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation - VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 14](./ODOO.md#phase-14) · [Review Phase 13](./ODOO.md#phase-13)

---
#### ODOO Phase 14 Project

**Recommended build - External Sync Client**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 14](./ODOO.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **External Sync Client** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - External Sync Client Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Connector](https://github.com/OCA/connector)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation - VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 15](./ODOO.md#phase-15) · [Review Phase 14](./ODOO.md#phase-14)

---
#### ODOO Phase 15 Project

**Recommended build - Payment Sandbox Integration**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 15](./ODOO.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **Payment Sandbox Integration** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Payment Sandbox Integration Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Connector](https://github.com/OCA/connector)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo 19 Webhook Automation - VeeVee Infotech](https://www.youtube.com/watch?v=ndt8OCP_uG8)

> **When this project is complete:** [Resume your study at ODOO Phase 16](./ODOO.md#phase-16) · [Review Phase 15](./ODOO.md#phase-15)

---
#### ODOO Phase 16 Project

**Recommended build - OWL KPI Widget**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 16](./ODOO.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **OWL KPI Widget** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - OWL KPI Widget Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL - AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Resume your study at ODOO Phase 17](./ODOO.md#phase-17) · [Review Phase 16](./ODOO.md#phase-16)

---
#### ODOO Phase 17 Project

**Recommended build - ORM Query Tuning Report**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 17](./ODOO.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **ORM Query Tuning Report** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - ORM Query Tuning Report Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL - AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Resume your study at ODOO Phase 18](./ODOO.md#phase-18) · [Review Phase 17](./ODOO.md#phase-17)

---
#### ODOO Phase 18 Project

**Recommended build - Upgrade-Safe Test Suite**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 18](./ODOO.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **Upgrade-Safe Test Suite** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Upgrade-Safe Test Suite Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OCA Server Tools](https://github.com/OCA/server-tools)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL - AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Resume your study at ODOO Phase 19](./ODOO.md#phase-19) · [Review Phase 18](./ODOO.md#phase-18)

---
#### ODOO Phase 19 Project

**Recommended build - Portfolio-Ready Business Module**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 19](./ODOO.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Portfolio-Ready Business Module** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Portfolio-Ready Business Module Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL - AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Resume your study at ODOO Phase 20](./ODOO.md#phase-20) · [Review Phase 19](./ODOO.md#phase-19)

---
#### ODOO Phase 20 Project

**Recommended build - Timed Odoo Debug Drill**

**Why this is the right project now:** it applies the material covered through [ODOO Phase 20](./ODOO.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **Timed Odoo Debug Drill** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Timed Odoo Debug Drill Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Odoo Tutorials](https://github.com/odoo/tutorials)
- **More project ideas on GitHub:** [Odoo Example Modules](https://github.com/SerhiiMiroshnychenko/Odoo_examples)
- **YouTube build/lab:** [Odoo Custom Dashboard with OWL - AJScript Media](https://www.youtube.com/watch?v=CJvaY-VGqwk)

> **When this project is complete:** [Return to the ODOO phase index](./ODOO.md#phase-index) · [Review Phase 20](./ODOO.md#phase-20)

---

### Web Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### WEB Phase 1 Project

**Recommended build - Client-Server Request Explorer**

**Why this is the right project now:** it applies the material covered through [WEB Phase 1](./Web.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **Client-Server Request Explorer** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Client-Server Request Explorer Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project - Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 2](./Web.md#phase-2) · [Review Phase 1](./Web.md#phase-1)

---
#### WEB Phase 2 Project

**Recommended build - Accessible Profile Page**

**Why this is the right project now:** it applies the material covered through [WEB Phase 2](./Web.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **Accessible Profile Page** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Accessible Profile Page Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project - Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 3](./Web.md#phase-3) · [Review Phase 2](./Web.md#phase-2)

---
#### WEB Phase 3 Project

**Recommended build - Design Token Style Guide**

**Why this is the right project now:** it applies the material covered through [WEB Phase 3](./Web.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **Design Token Style Guide** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Design Token Style Guide Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project - Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 4](./Web.md#phase-4) · [Review Phase 3](./Web.md#phase-3)

---
#### WEB Phase 4 Project

**Recommended build - Responsive Product Landing**

**Why this is the right project now:** it applies the material covered through [WEB Phase 4](./Web.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **Responsive Product Landing** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Responsive Product Landing Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project - Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 5](./Web.md#phase-5) · [Review Phase 4](./Web.md#phase-4)

---
#### WEB Phase 5 Project

**Recommended build - Interactive Expense Tracker**

**Why this is the right project now:** it applies the material covered through [WEB Phase 5](./Web.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Interactive Expense Tracker** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Interactive Expense Tracker Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Responsive HTML, CSS, and JavaScript Website Project - Brian Design](https://www.youtube.com/watch?v=FazgJVnrVuI)

> **When this project is complete:** [Resume your study at WEB Phase 6](./Web.md#phase-6) · [Review Phase 5](./Web.md#phase-5)

---
#### WEB Phase 6 Project

**Recommended build - Offline-Capable Notes App**

**Why this is the right project now:** it applies the material covered through [WEB Phase 6](./Web.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Offline-Capable Notes App** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Offline-Capable Notes App Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project - Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 7](./Web.md#phase-7) · [Review Phase 6](./Web.md#phase-6)

---
#### WEB Phase 7 Project

**Recommended build - Typed API Client**

**Why this is the right project now:** it applies the material covered through [WEB Phase 7](./Web.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **Typed API Client** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Typed API Client Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project - Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 8](./Web.md#phase-8) · [Review Phase 7](./Web.md#phase-7)

---
#### WEB Phase 8 Project

**Recommended build - React Habit Tracker**

**Why this is the right project now:** it applies the material covered through [WEB Phase 8](./Web.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **React Habit Tracker** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - React Habit Tracker Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project - Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 9](./Web.md#phase-9) · [Review Phase 8](./Web.md#phase-8)

---
#### WEB Phase 9 Project

**Recommended build - Cached Admin Dashboard**

**Why this is the right project now:** it applies the material covered through [WEB Phase 9](./Web.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **Cached Admin Dashboard** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Cached Admin Dashboard Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project - Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 10](./Web.md#phase-10) · [Review Phase 9](./Web.md#phase-9)

---
#### WEB Phase 10 Project

**Recommended build - Full-Stack Issue Tracker**

**Why this is the right project now:** it applies the material covered through [WEB Phase 10](./Web.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **Full-Stack Issue Tracker** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Full-Stack Issue Tracker Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Beginner React and TypeScript Project - Web Dev Simplified](https://www.youtube.com/watch?v=-ONUyenGnWw)

> **When this project is complete:** [Resume your study at WEB Phase 11](./Web.md#phase-11) · [Review Phase 10](./Web.md#phase-10)

---
#### WEB Phase 11 Project

**Recommended build - Express Service Starter**

**Why this is the right project now:** it applies the material covered through [WEB Phase 11](./Web.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **Express Service Starter** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Express Service Starter Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD - Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 12](./Web.md#phase-12) · [Review Phase 11](./Web.md#phase-11)

---
#### WEB Phase 12 Project

**Recommended build - Contract-First REST API**

**Why this is the right project now:** it applies the material covered through [WEB Phase 12](./Web.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **Contract-First REST API** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Contract-First REST API Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD - Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 13](./Web.md#phase-13) · [Review Phase 12](./Web.md#phase-12)

---
#### WEB Phase 13 Project

**Recommended build - Transactional Project Database**

**Why this is the right project now:** it applies the material covered through [WEB Phase 13](./Web.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **Transactional Project Database** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Transactional Project Database Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD - Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 14](./Web.md#phase-14) · [Review Phase 13](./Web.md#phase-13)

---
#### WEB Phase 14 Project

**Recommended build - Secure Session Auth App**

**Why this is the right project now:** it applies the material covered through [WEB Phase 14](./Web.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **Secure Session Auth App** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Secure Session Auth App Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OWASP NodeGoat](https://github.com/OWASP/NodeGoat)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD - Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 15](./Web.md#phase-15) · [Review Phase 14](./Web.md#phase-14)

---
#### WEB Phase 15 Project

**Recommended build - Full-Stack Test Pyramid**

**Why this is the right project now:** it applies the material covered through [WEB Phase 15](./Web.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **Full-Stack Test Pyramid** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Full-Stack Test Pyramid Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Node, Express, MongoDB API with Auth, JWT, and CRUD - Programming with Adil](https://www.youtube.com/watch?v=EMv8pc5Xo88)

> **When this project is complete:** [Resume your study at WEB Phase 16](./Web.md#phase-16) · [Review Phase 15](./Web.md#phase-15)

---
#### WEB Phase 16 Project

**Recommended build - Web Vitals Optimization Case**

**Why this is the right project now:** it applies the material covered through [WEB Phase 16](./Web.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **Web Vitals Optimization Case** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Web Vitals Optimization Case Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project - JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Resume your study at WEB Phase 17](./Web.md#phase-17) · [Review Phase 16](./Web.md#phase-16)

---
#### WEB Phase 17 Project

**Recommended build - Preview-to-Production Pipeline**

**Why this is the right project now:** it applies the material covered through [WEB Phase 17](./Web.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **Preview-to-Production Pipeline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Preview-to-Production Pipeline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project - JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Resume your study at WEB Phase 18](./Web.md#phase-18) · [Review Phase 17](./Web.md#phase-17)

---
#### WEB Phase 18 Project

**Recommended build - Real-Time Collaboration Board**

**Why this is the right project now:** it applies the material covered through [WEB Phase 18](./Web.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **Real-Time Collaboration Board** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Real-Time Collaboration Board Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project - JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Resume your study at WEB Phase 19](./Web.md#phase-19) · [Review Phase 18](./Web.md#phase-18)

---
#### WEB Phase 19 Project

**Recommended build - Production SaaS Slice**

**Why this is the right project now:** it applies the material covered through [WEB Phase 19](./Web.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Production SaaS Slice** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Production SaaS Slice Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project - JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Resume your study at WEB Phase 20](./Web.md#phase-20) · [Review Phase 19](./Web.md#phase-19)

---
#### WEB Phase 20 Project

**Recommended build - Timed Web Interview Lab**

**Why this is the right project now:** it applies the material covered through [WEB Phase 20](./Web.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **Timed Web Interview Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Timed Web Interview Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [RealWorld](https://github.com/realworld-apps/realworld)
- **More project ideas on GitHub:** [Project Based Learning](https://github.com/practical-tutorials/project-based-learning)
- **YouTube build/lab:** [Real-Time WebSockets Project - JavaScript Mastery](https://www.youtube.com/watch?v=pbOXOY78dNA)

> **When this project is complete:** [Return to the WEB phase index](./Web.md#phase-index) · [Review Phase 20](./Web.md#phase-20)

---

### Cloud Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### CLOUD Phase 1 Project

**Recommended build - Linux Service Baseline**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 1](./cloud.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **Linux Service Baseline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Linux Service Baseline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform - Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 2](./cloud.md#phase-2) · [Review Phase 1](./cloud.md#phase-1)

---
#### CLOUD Phase 2 Project

**Recommended build - VM vs Container Benchmark**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 2](./cloud.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **VM vs Container Benchmark** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - VM vs Container Benchmark Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform - Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 3](./cloud.md#phase-3) · [Review Phase 2](./cloud.md#phase-2)

---
#### CLOUD Phase 3 Project

**Recommended build - Multi-Provider Architecture Matrix**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 3](./cloud.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **Multi-Provider Architecture Matrix** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Multi-Provider Architecture Matrix Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform - Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 4](./cloud.md#phase-4) · [Review Phase 3](./cloud.md#phase-3)

---
#### CLOUD Phase 4 Project

**Recommended build - Least-Privilege IAM Lab**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 4](./cloud.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **Least-Privilege IAM Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Least-Privilege IAM Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform - Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 5](./cloud.md#phase-5) · [Review Phase 4](./cloud.md#phase-4)

---
#### CLOUD Phase 5 Project

**Recommended build - Multi-Tier VPC**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 5](./cloud.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Multi-Tier VPC** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Multi-Tier VPC Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Create an AWS VPC with Terraform - Cloud Champ](https://www.youtube.com/watch?v=4IFW5dXMW1Y)

> **When this project is complete:** [Resume your study at CLOUD Phase 6](./cloud.md#phase-6) · [Review Phase 5](./cloud.md#phase-5)

---
#### CLOUD Phase 6 Project

**Recommended build - Autoscaled Web Tier**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 6](./cloud.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Autoscaled Web Tier** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Autoscaled Web Tier Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App - Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 7](./cloud.md#phase-7) · [Review Phase 6](./cloud.md#phase-6)

---
#### CLOUD Phase 7 Project

**Recommended build - Versioned Object Backup**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 7](./cloud.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **Versioned Object Backup** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Versioned Object Backup Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App - Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 8](./cloud.md#phase-8) · [Review Phase 7](./cloud.md#phase-7)

---
#### CLOUD Phase 8 Project

**Recommended build - Resilient Managed Data Tier**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 8](./cloud.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **Resilient Managed Data Tier** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Resilient Managed Data Tier Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App - Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 9](./cloud.md#phase-9) · [Review Phase 8](./cloud.md#phase-8)

---
#### CLOUD Phase 9 Project

**Recommended build - CDN Delivery Benchmark**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 9](./cloud.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **CDN Delivery Benchmark** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - CDN Delivery Benchmark Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App - Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 10](./cloud.md#phase-10) · [Review Phase 9](./cloud.md#phase-9)

---
#### CLOUD Phase 10 Project

**Recommended build - Event-Driven Image Pipeline**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 10](./cloud.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **Event-Driven Image Pipeline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Event-Driven Image Pipeline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [AWS Serverless Workshops](https://github.com/aws-samples/aws-serverless-workshops)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Build an Event-Driven Serverless App - Google Cloud Tech](https://www.youtube.com/watch?v=pSdD28cY6r8)

> **When this project is complete:** [Resume your study at CLOUD Phase 11](./cloud.md#phase-11) · [Review Phase 10](./cloud.md#phase-10)

---
#### CLOUD Phase 11 Project

**Recommended build - Managed Kubernetes Service**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 11](./cloud.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **Managed Kubernetes Service** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Managed Kubernetes Service Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application - KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 12](./cloud.md#phase-12) · [Review Phase 11](./cloud.md#phase-11)

---
#### CLOUD Phase 12 Project

**Recommended build - Reusable Terraform Environment**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 12](./cloud.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **Reusable Terraform Environment** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Reusable Terraform Environment Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application - KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 13](./cloud.md#phase-13) · [Review Phase 12](./cloud.md#phase-12)

---
#### CLOUD Phase 13 Project

**Recommended build - Governed Landing Zone**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 13](./cloud.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **Governed Landing Zone** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Governed Landing Zone Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application - KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 14](./cloud.md#phase-14) · [Review Phase 13](./cloud.md#phase-13)

---
#### CLOUD Phase 14 Project

**Recommended build - Encrypted Secret Rotation**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 14](./cloud.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **Encrypted Secret Rotation** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Encrypted Secret Rotation Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application - KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 15](./cloud.md#phase-15) · [Review Phase 14](./cloud.md#phase-14)

---
#### CLOUD Phase 15 Project

**Recommended build - Observable Cloud Service**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 15](./cloud.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **Observable Cloud Service** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Observable Cloud Service Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Kubernetes Microservice Application - KodeKloud](https://www.youtube.com/watch?v=XuSQU5Grv1g)

> **When this project is complete:** [Resume your study at CLOUD Phase 16](./cloud.md#phase-16) · [Review Phase 15](./cloud.md#phase-15)

---
#### CLOUD Phase 16 Project

**Recommended build - Policy-as-Code Safety checks and limits**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 16](./cloud.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **Policy-as-Code Safety checks and limits** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Policy-as-Code Safety checks and limits Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps - The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Resume your study at CLOUD Phase 17](./cloud.md#phase-17) · [Review Phase 16](./cloud.md#phase-16)

---
#### CLOUD Phase 17 Project

**Recommended build - Disaster Recovery Game Day**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 17](./cloud.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **Disaster Recovery Game Day** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Disaster Recovery Game Day Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps - The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Resume your study at CLOUD Phase 18](./cloud.md#phase-18) · [Review Phase 17](./cloud.md#phase-17)

---
#### CLOUD Phase 18 Project

**Recommended build - Cloud Cost Optimizer**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 18](./cloud.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **Cloud Cost Optimizer** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Cloud Cost Optimizer Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps - The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Resume your study at CLOUD Phase 19](./cloud.md#phase-19) · [Review Phase 18](./cloud.md#phase-18)

---
#### CLOUD Phase 19 Project

**Recommended build - Migration Runbook and Pilot**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 19](./cloud.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Migration Runbook and Pilot** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Migration Runbook and Pilot Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Terraform AWS VPC](https://github.com/terraform-aws-modules/terraform-aws-vpc)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps - The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Resume your study at CLOUD Phase 20](./cloud.md#phase-20) · [Review Phase 19](./cloud.md#phase-19)

---
#### CLOUD Phase 20 Project

**Recommended build - Cloud Architecture Portfolio**

**Why this is the right project now:** it applies the material covered through [CLOUD Phase 20](./cloud.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **Cloud Architecture Portfolio** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Cloud Architecture Portfolio Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Cloud Resume Challenge Projects](https://github.com/cloudresumechallenge/projects)
- **More project ideas on GitHub:** [Cloud Engineering Project Ideas](https://github.com/madebygps/cloud-engineering-projects)
- **YouTube build/lab:** [Cloud Cost Optimization and FinOps - The Executive Briefing](https://www.youtube.com/watch?v=EiX2OQRB_Dk)

> **When this project is complete:** [Return to the CLOUD phase index](./cloud.md#phase-index) · [Review Phase 20](./cloud.md#phase-20)

---

### DevOps Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### DEVOPS Phase 1 Project

**Recommended build - Value Stream Delivery Map**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 1](./devops.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **Value Stream Delivery Map** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Value Stream Delivery Map Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD - VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 2](./devops.md#phase-2) · [Review Phase 1](./devops.md#phase-1)

---
#### DEVOPS Phase 2 Project

**Recommended build - Hardened Linux Service**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 2](./devops.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **Hardened Linux Service** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Hardened Linux Service Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD - VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 3](./devops.md#phase-3) · [Review Phase 2](./devops.md#phase-2)

---
#### DEVOPS Phase 3 Project

**Recommended build - Incident Troubleshooting Toolkit**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 3](./devops.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **Incident Troubleshooting Toolkit** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Incident Troubleshooting Toolkit Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD - VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 4](./devops.md#phase-4) · [Review Phase 3](./devops.md#phase-3)

---
#### DEVOPS Phase 4 Project

**Recommended build - Pull-Request Git Workflow**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 4](./devops.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **Pull-Request Git Workflow** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Pull-Request Git Workflow Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD - VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 5](./devops.md#phase-5) · [Review Phase 4](./devops.md#phase-4)

---
#### DEVOPS Phase 5 Project

**Recommended build - Operations Automation CLI**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 5](./devops.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Operations Automation CLI** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Operations Automation CLI Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Home Lab Automation with Terraform, Ansible, and CI/CD - VirtualizationHowto](https://www.youtube.com/watch?v=r5RckLwzkfc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 6](./devops.md#phase-6) · [Review Phase 5](./devops.md#phase-5)

---
#### DEVOPS Phase 6 Project

**Recommended build - Reproducible Artifact Pipeline**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 6](./devops.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Reproducible Artifact Pipeline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Reproducible Artifact Pipeline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes - Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 7](./devops.md#phase-7) · [Review Phase 6](./devops.md#phase-6)

---
#### DEVOPS Phase 7 Project

**Recommended build - Quality-Gated CI Pipeline**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 7](./devops.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **Quality-Gated CI Pipeline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Quality-Gated CI Pipeline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes - Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 8](./devops.md#phase-8) · [Review Phase 7](./devops.md#phase-7)

---
#### DEVOPS Phase 8 Project

**Recommended build - Canary Deployment Simulator**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 8](./devops.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **Canary Deployment Simulator** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Canary Deployment Simulator Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes - Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 9](./devops.md#phase-9) · [Review Phase 8](./devops.md#phase-8)

---
#### DEVOPS Phase 9 Project

**Recommended build - Hardened Multi-Stage Container**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 9](./devops.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **Hardened Multi-Stage Container** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Hardened Multi-Stage Container Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Docker Getting Started](https://github.com/docker/getting-started)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes - Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 10](./devops.md#phase-10) · [Review Phase 9](./devops.md#phase-9)

---
#### DEVOPS Phase 10 Project

**Recommended build - Kubernetes Operations Lab**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 10](./devops.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **Kubernetes Operations Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Kubernetes Operations Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Kubernetes Examples](https://github.com/kubernetes/examples)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Deploy a Monitoring Application on Kubernetes - Cloud Champ](https://www.youtube.com/watch?v=kBWCsHEcWnc)

> **When this project is complete:** [Resume your study at DEVOPS Phase 11](./devops.md#phase-11) · [Review Phase 10](./devops.md#phase-10)

---
#### DEVOPS Phase 11 Project

**Recommended build - Terraform State Lifecycle Lab**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 11](./devops.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **Terraform State Lifecycle Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Terraform State Lifecycle Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project - Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 12](./devops.md#phase-12) · [Review Phase 11](./devops.md#phase-11)

---
#### DEVOPS Phase 12 Project

**Recommended build - Idempotent Ansible Baseline**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 12](./devops.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **Idempotent Ansible Baseline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Idempotent Ansible Baseline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project - Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 13](./devops.md#phase-13) · [Review Phase 12](./devops.md#phase-12)

---
#### DEVOPS Phase 13 Project

**Recommended build - Cloud Delivery Foundation**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 13](./devops.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **Cloud Delivery Foundation** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Cloud Delivery Foundation Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project - Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 14](./devops.md#phase-14) · [Review Phase 13](./devops.md#phase-13)

---
#### DEVOPS Phase 14 Project

**Recommended build - Observable Demo Service**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 14](./devops.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **Observable Demo Service** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Observable Demo Service Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project - Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 15](./devops.md#phase-15) · [Review Phase 14](./devops.md#phase-14)

---
#### DEVOPS Phase 15 Project

**Recommended build - SLO and Error Budget Dashboard**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 15](./devops.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **SLO and Error Budget Dashboard** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - SLO and Error Budget Dashboard Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Terraform and Ansible Full DevOps Project - Pravesh Sudha](https://www.youtube.com/watch?v=tKlGTGye_hk)

> **When this project is complete:** [Resume your study at DEVOPS Phase 16](./devops.md#phase-16) · [Review Phase 15](./devops.md#phase-15)

---
#### DEVOPS Phase 16 Project

**Recommended build - Signed Software Supply Chain**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 16](./devops.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **Signed Software Supply Chain** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Signed Software Supply Chain Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial - LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Resume your study at DEVOPS Phase 17](./devops.md#phase-17) · [Review Phase 16](./devops.md#phase-16)

---
#### DEVOPS Phase 17 Project

**Recommended build - GitOps Application Platform**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 17](./devops.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **GitOps Application Platform** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - GitOps Application Platform Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Argo CD](https://github.com/argoproj/argo-cd)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial - LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Resume your study at DEVOPS Phase 18](./devops.md#phase-18) · [Review Phase 17](./devops.md#phase-17)

---
#### DEVOPS Phase 18 Project

**Recommended build - Chaos Game Day and Postmortem**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 18](./devops.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **Chaos Game Day and Postmortem** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Chaos Game Day and Postmortem Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial - LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Resume your study at DEVOPS Phase 19](./devops.md#phase-19) · [Review Phase 18](./devops.md#phase-18)

---
#### DEVOPS Phase 19 Project

**Recommended build - Production Delivery Platform**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 19](./devops.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Production Delivery Platform** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Production Delivery Platform Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial - LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Resume your study at DEVOPS Phase 20](./devops.md#phase-20) · [Review Phase 19](./devops.md#phase-19)

---
#### DEVOPS Phase 20 Project

**Recommended build - Timed DevOps Incident Drill**

**Why this is the right project now:** it applies the material covered through [DEVOPS Phase 20](./devops.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **Timed DevOps Incident Drill** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Timed DevOps Incident Drill Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DevOps Exercises](https://github.com/bregman-arie/devops-exercises)
- **More project ideas on GitHub:** [Kubernetes Practical Exercises](https://github.com/seifrajhi/Kubernetes-practical-exercises-Hands-on)
- **YouTube build/lab:** [Chaos Engineering Workflow Resiliency Tutorial - LitmusChaos](https://www.youtube.com/watch?v=OuB3dS05DHU)

> **When this project is complete:** [Return to the DEVOPS phase index](./devops.md#phase-index) · [Review Phase 20](./devops.md#phase-20)

---

### Cyber Phase Projects

Choose the recommended build first. Use the alternative only after the recommended version is complete, or when you already have an equivalent finished portfolio project.

#### CYBER Phase 1 Project

**Recommended build - Risk Register and Treatment Plan**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 1](./ICT_Cybersecurity.md#phase-1) without requiring later phases.

**What to build, step by step**

- Build **Risk Register and Treatment Plan** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Risk Register and Treatment Plan Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab - MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 2](./ICT_Cybersecurity.md#phase-2) · [Review Phase 1](./ICT_Cybersecurity.md#phase-1)

---
#### CYBER Phase 2 Project

**Recommended build - Network Attack Surface Map**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 2](./ICT_Cybersecurity.md#phase-2) without requiring later phases.

**What to build, step by step**

- Build **Network Attack Surface Map** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Network Attack Surface Map Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab - MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 3](./ICT_Cybersecurity.md#phase-3) · [Review Phase 2](./ICT_Cybersecurity.md#phase-2)

---
#### CYBER Phase 3 Project

**Recommended build - Host Hardening Baseline**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 3](./ICT_Cybersecurity.md#phase-3) without requiring later phases.

**What to build, step by step**

- Build **Host Hardening Baseline** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Host Hardening Baseline Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab - MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 4](./ICT_Cybersecurity.md#phase-4) · [Review Phase 3](./ICT_Cybersecurity.md#phase-3)

---
#### CYBER Phase 4 Project

**Recommended build - Secure File Vault**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 4](./ICT_Cybersecurity.md#phase-4) without requiring later phases.

**What to build, step by step**

- Build **Secure File Vault** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Secure File Vault Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab - MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 5](./ICT_Cybersecurity.md#phase-5) · [Review Phase 4](./ICT_Cybersecurity.md#phase-4)

---
#### CYBER Phase 5 Project

**Recommended build - Least-Privilege IAM Review**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 5](./ICT_Cybersecurity.md#phase-5) without requiring later phases.

**What to build, step by step**

- Build **Least-Privilege IAM Review** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Least-Privilege IAM Review Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a Basic Cybersecurity Home Lab - MyDFIR](https://www.youtube.com/watch?v=Zgiw-4z51NI)

> **When this project is complete:** [Resume your study at CYBER Phase 6](./ICT_Cybersecurity.md#phase-6) · [Review Phase 5](./ICT_Cybersecurity.md#phase-5)

---
#### CYBER Phase 6 Project

**Recommended build - Threat Model and ATT&CK Map**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 6](./ICT_Cybersecurity.md#phase-6) without requiring later phases.

**What to build, step by step**

- Build **Threat Model and ATT&CK Map** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Threat Model and ATT&CK Map Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Atomic Red Team](https://github.com/redcanaryco/atomic-red-team)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab - Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 7](./ICT_Cybersecurity.md#phase-7) · [Review Phase 6](./ICT_Cybersecurity.md#phase-6)

---
#### CYBER Phase 7 Project

**Recommended build - OWASP Remediation Lab**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 7](./ICT_Cybersecurity.md#phase-7) without requiring later phases.

**What to build, step by step**

- Build **OWASP Remediation Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - OWASP Remediation Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OWASP Juice Shop](https://github.com/juice-shop/juice-shop)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab - Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 8](./ICT_Cybersecurity.md#phase-8) · [Review Phase 7](./ICT_Cybersecurity.md#phase-7)

---
#### CYBER Phase 8 Project

**Recommended build - Firewall and IDS Validation**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 8](./ICT_Cybersecurity.md#phase-8) without requiring later phases.

**What to build, step by step**

- Build **Firewall and IDS Validation** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Firewall and IDS Validation Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab - Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 9](./ICT_Cybersecurity.md#phase-9) · [Review Phase 8](./ICT_Cybersecurity.md#phase-8)

---
#### CYBER Phase 9 Project

**Recommended build - Endpoint Hardening Pack**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 9](./ICT_Cybersecurity.md#phase-9) without requiring later phases.

**What to build, step by step**

- Build **Endpoint Hardening Pack** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Endpoint Hardening Pack Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab - Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 10](./ICT_Cybersecurity.md#phase-10) · [Review Phase 9](./ICT_Cybersecurity.md#phase-9)

---
#### CYBER Phase 10 Project

**Recommended build - Vulnerability Triage Program**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 10](./ICT_Cybersecurity.md#phase-10) without requiring later phases.

**What to build, step by step**

- Build **Vulnerability Triage Program** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Vulnerability Triage Program Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [OWASP Juice Shop Web Penetration Testing Lab - Woman in WhiteHat](https://www.youtube.com/watch?v=0XIzwlhWO3g)

> **When this project is complete:** [Resume your study at CYBER Phase 11](./ICT_Cybersecurity.md#phase-11) · [Review Phase 10](./ICT_Cybersecurity.md#phase-10)

---
#### CYBER Phase 11 Project

**Recommended build - Authorized Web Pentest Report**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 11](./ICT_Cybersecurity.md#phase-11) without requiring later phases.

**What to build, step by step**

- Build **Authorized Web Pentest Report** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Authorized Web Pentest Report Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [OWASP Juice Shop](https://github.com/juice-shop/juice-shop)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM - Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 12](./ICT_Cybersecurity.md#phase-12) · [Review Phase 11](./ICT_Cybersecurity.md#phase-11)

---
#### CYBER Phase 12 Project

**Recommended build - Active Directory Detection Lab**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 12](./ICT_Cybersecurity.md#phase-12) without requiring later phases.

**What to build, step by step**

- Build **Active Directory Detection Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Active Directory Detection Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM - Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 13](./ICT_Cybersecurity.md#phase-13) · [Review Phase 12](./ICT_Cybersecurity.md#phase-12)

---
#### CYBER Phase 13 Project

**Recommended build - SIEM Detection Engineering Pack**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 13](./ICT_Cybersecurity.md#phase-13) without requiring later phases.

**What to build, step by step**

- Build **SIEM Detection Engineering Pack** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - SIEM Detection Engineering Pack Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM - Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 14](./ICT_Cybersecurity.md#phase-14) · [Review Phase 13](./ICT_Cybersecurity.md#phase-13)

---
#### CYBER Phase 14 Project

**Recommended build - Incident Forensics Case**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 14](./ICT_Cybersecurity.md#phase-14) without requiring later phases.

**What to build, step by step**

- Build **Incident Forensics Case** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Incident Forensics Case Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM - Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 15](./ICT_Cybersecurity.md#phase-15) · [Review Phase 14](./ICT_Cybersecurity.md#phase-14)

---
#### CYBER Phase 15 Project

**Recommended build - Cloud IAM Attack-Path Review**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 15](./ICT_Cybersecurity.md#phase-15) without requiring later phases.

**What to build, step by step**

- Build **Cloud IAM Attack-Path Review** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Cloud IAM Attack-Path Review Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Build a SOC Home Lab with Elastic SIEM - Prabh Nair](https://www.youtube.com/watch?v=HsLpZCbiasA)

> **When this project is complete:** [Resume your study at CYBER Phase 16](./ICT_Cybersecurity.md#phase-16) · [Review Phase 15](./ICT_Cybersecurity.md#phase-15)

---
#### CYBER Phase 16 Project

**Recommended build - Container Supply-Chain Lab**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 16](./ICT_Cybersecurity.md#phase-16) without requiring later phases.

**What to build, step by step**

- Build **Container Supply-Chain Lab** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Container Supply-Chain Lab Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas - Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Resume your study at CYBER Phase 17](./ICT_Cybersecurity.md#phase-17) · [Review Phase 16](./ICT_Cybersecurity.md#phase-16)

---
#### CYBER Phase 17 Project

**Recommended build - Static Malware Triage**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 17](./ICT_Cybersecurity.md#phase-17) without requiring later phases.

**What to build, step by step**

- Build **Static Malware Triage** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Static Malware Triage Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas - Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Resume your study at CYBER Phase 18](./ICT_Cybersecurity.md#phase-18) · [Review Phase 17](./ICT_Cybersecurity.md#phase-17)

---
#### CYBER Phase 18 Project

**Recommended build - Control-to-Evidence Audit Pack**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 18](./ICT_Cybersecurity.md#phase-18) without requiring later phases.

**What to build, step by step**

- Build **Control-to-Evidence Audit Pack** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Control-to-Evidence Audit Pack Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Wazuh](https://github.com/wazuh/wazuh)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas - Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Resume your study at CYBER Phase 19](./ICT_Cybersecurity.md#phase-19) · [Review Phase 18](./ICT_Cybersecurity.md#phase-18)

---
#### CYBER Phase 19 Project

**Recommended build - Defensive Security Portfolio**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 19](./ICT_Cybersecurity.md#phase-19) without requiring later phases.

**What to build, step by step**

- Build **Defensive Security Portfolio** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Defensive Security Portfolio Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [DetectionLab](https://github.com/clong/DetectionLab)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas - Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Resume your study at CYBER Phase 20](./ICT_Cybersecurity.md#phase-20) · [Review Phase 19](./ICT_Cybersecurity.md#phase-19)

---
#### CYBER Phase 20 Project

**Recommended build - Timed SOC Investigation**

**Why this is the right project now:** it applies the material covered through [CYBER Phase 20](./ICT_Cybersecurity.md#phase-20) without requiring later phases.

**What to build, step by step**

- Build **Timed SOC Investigation** as the smallest working project that lets you practice the main idea from this phase and show that it works. Show at least three examples. For each one, point to the part of the project that uses what you learned in this phase, and explain it in your own words.
- Before writing code, state the input, the expected output, and the reason this phase's idea is needed.
- Build one simple success case first. Use the smallest sample data, network, screen, or workflow that makes the idea visible.
- Add a second normal example and one edge or failure case. Write what you expect before you run each one.
- Add at least one automated check. If automation is not practical for this phase, give an exact manual command and the output a learner should expect.
- In the README, define every technical term you use, explain the important files, include copy-and-paste run steps, save the result as evidence, and describe one mistake you found and fixed.
- **Keep the project manageable:** use only ideas introduced up to this phase. Tools from later phases belong only in the optional extra challenge.
- **You are finished when:** a first-time reader can follow the README, run or inspect the project, and find clear evidence that every promised example works.

**Alternative project - Timed SOC Investigation Remix:** build a second version around a different everyday example. Depending on the topic, this may be a different business story, sample dataset, network layout, or work process. Stay within the same phase, and explain exactly what you changed.

- **Similar implementation on GitHub:** [Atomic Red Team](https://github.com/redcanaryco/atomic-red-team)
- **More project ideas on GitHub:** [Hands-On Cybersecurity Labs](https://github.com/codelassey/cybersecurity-labs)
- **YouTube build/lab:** [Cybersecurity Portfolio Project Ideas - Cyber Culture Interface](https://www.youtube.com/watch?v=0LxVcNJUSdY)

> **When this project is complete:** [Return to the CYBER phase index](./ICT_Cybersecurity.md#phase-index) · [Review Phase 20](./ICT_Cybersecurity.md#phase-20)

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
| **How challenging the project is** | Easy |

**What you will build and prove:** Parse user input, apply operations, and handle bad input without crashing.

**What you will practice:** variables, control flow, functions, error handling, REPL loop

**Steps to follow:**

1. Accept two numbers and an operator (`+`, `-`, `*`, `/`) from stdin
2. Wrap parsing in try/except for invalid input
3. Refuse division by zero with a clear message
4. Loop until the user types `quit`
5. Extract `parse_input()` and `calculate(a, op, b)` as pure functions
6. Add `--help` and a minimal test for `calculate`

**You are finished when:**

- All four operators work; bad input never crashes the program
- README shows sample session and lists one parsing edge case you handled

**If you want an extra challenge:**

- Add parentheses or a small expression parser (shunting-yard)

---

#### OOP-F02: Number Guessing Game

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Practice loops, randomness, and bounded attempts with user feedback.

**What you will practice:** `while` loops, `if/elif`, `random`, comparison operators

**Steps to follow:**

1. Pick a secret integer in a configurable range (default 1-100)
2. Prompt until correct or attempts exhausted (default 7)
3. Reply "higher", "lower", or "correct"
4. Print attempt count on win; reveal secret on loss
5. Add `play_round()` callable from `main`
6. Log each guess to a list and print history at end

**You are finished when:**

- Win and loss paths both behave; range and max attempts are CLI flags
- You can explain why a binary-search strategy wins in fewer guesses

**If you want an extra challenge:**

- Two-player mode where one human sets the secret

---

#### OOP-F03: File Organizer by Extension

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1, [`OOP.md`](./OOP.md) Phase 1 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Walk a directory tree and sort files into extension folders safely.

**What you will practice:** `pathlib` or `os`, loops, string ops, idempotent file moves

**Steps to follow:**

1. Accept a source directory path via CLI argument
2. Create subfolders like `images/`, `docs/`, `other/` from a mapping dict
3. Move (or copy first for safety) each file by extension
4. Skip hidden files and already-organized folders
5. Print a summary: counts per category
6. Add `--dry-run` that only prints planned moves

**You are finished when:**

- Dry-run and live modes both work on a test folder you create
- README documents what happens on name collisions

**If you want an extra challenge:**

- Organize by date modified instead of extension

---

#### OOP-F04: Password Generator & Strength Checker

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1, [`OOP.md`](./OOP.md) Phase 4 (preview encapsulation) |
| **How challenging the project is** | Easy |

**What you will build and prove:** Generate cryptographically sensible passwords and score user-chosen ones.

**What you will practice:** `secrets` module, string categories, scoring functions

**Steps to follow:**

1. Generate passwords with configurable length and character sets
2. Implement `score_password(pwd) -> int` using length and charset rules
3. Print human-readable feedback ("add symbols", "too short")
4. Never print or log generated passwords in debug mode by default
5. Add unit tests for scoring edge cases (empty, all lower, etc.)

**You are finished when:**

- Generator uses `secrets`, not `random`
- README explains why `random` is wrong for passwords

**If you want an extra challenge:**

- Read forbidden-password list from a file

---

### Pillars cluster (OOP Phases 1-9)

*Inspired in part by [muhammadwaheedairi/python-oop-practice](https://github.com/muhammadwaheedairi/python-oop-practice) - build your own versions.*

#### OOP-P01: Bank Account Hierarchy

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 2-7 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Model accounts with shared behavior and specialized rules via inheritance and polymorphism.

**What you will practice:** classes, encapsulation, inheritance, polymorphism, `__repr__`

**Steps to follow:**

1. Base `Account` with private balance, deposit, withdraw, and invariant checks
2. Subclasses: `SavingsAccount` (min balance), `CheckingAccount` (overdraft limit)
3. Block invalid withdrawals at the object boundary, not in `main`
4. Demonstrate polymorphism: loop over accounts and call `.withdraw(50)`
5. Add `@property` for read-only balance
6. Write tests that prove invalid state cannot be reached

**You are finished when:**

- No public mutable balance field
- README includes class diagram and MRO explanation for your hierarchy

**If you want an extra challenge:**

- Replace inheritance with composition (`AccountPolicy` strategy objects)

---

#### OOP-P02: Library Catalog System

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 4-10 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Track books, members, and loans with clear object relationships.

**What you will practice:** composition, encapsulation, domain modeling, CRC-style thinking

**Steps to follow:**

1. Classes: `Book`, `Member`, `Loan`, `Library`
2. `Library` lends/returns copies; enforce one active loan per copy
3. Persist state to JSON on exit; reload on start
4. Search by title or author via `Library.find_books(query)`
5. Sketch relationships (Member has many Loans, Book has many Copies)
6. Add overdue calculation without god-method on `Library`

**You are finished when:**

- Loan/return invariants hold after restart from JSON
- You can walk through associations in an interview without opening code

**If you want an extra challenge:**

- Fine calculation with a `FinePolicy` interface

---

#### OOP-P03: Shape Area Calculator (Abstraction Lab)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 5, 7 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Use an abstract base class so callers depend on `Shape`, not concrete types.

**What you will practice:** ABCs, polymorphism, abstraction

**Steps to follow:**

1. Define `Shape` ABC with `area()` and `perimeter()`
2. Implement `Circle`, `Rectangle`, `Triangle`
3. Collect shapes in a list and sum areas without `isinstance` chains
4. Validate constructor inputs (negative radius raises)
5. Add `__eq__` for value comparison on at least one shape
6. Test with a fake `Shape` stub in unit tests

**You are finished when:**

- Zero `if type ==` chains in area summation
- README explains what abstraction buys you vs a bag of functions

**If you want an extra challenge:**

- Serialize/deserialize shapes to JSON by type tag

---

#### OOP-P04: Contact Book with Encapsulation

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 3-4, 9 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Store contacts behind a clean API; hide internal storage choices.

**What you will practice:** encapsulation, properties, dunder methods, validation

**Steps to follow:**

1. `Contact` with validated email/phone setters
2. `ContactBook` with add, remove, search, list - no exposed raw dict
3. Implement `__len__` and `__contains__` on `ContactBook`
4. Pretty-print with `__repr__` on `Contact`
5. Persist to CSV or JSON via methods on `ContactBook`, not loose scripts
6. Test that invalid email cannot be assigned

**You are finished when:**

- External code never touches `_contacts` dict directly
- Search is case-insensitive and covered by a test

**If you want an extra challenge:**

- Tag contacts and filter by tag

---

### SOLID & Patterns cluster (OOP Phases 12-15)

#### OOP-S01: Notification System (Observer + Strategy)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 12, 15 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Send notifications through multiple channels without modifying core domain logic for each new channel.

**What you will practice:** Open/Closed, Strategy, Observer, dependency direction

**Steps to follow:**

1. Domain event: `OrderPlaced` with order id and total
2. `Notifier` interface with `send(event)` implementations: Email, SMS, Slack
3. `OrderService` publishes events to a list of subscribers
4. Register channels via config, not edits inside `OrderService`
5. Unit-test with fake `Notifier` that records messages
6. Document which SOLID letters each class satisfies

**You are finished when:**

- Adding `PushNotifier` requires zero changes to `OrderService`
- README maps classes to Observer vs Strategy roles

**If you want an extra challenge:**

- Async dispatch with a simple queue

---

#### OOP-S02: Payment Processor (Adapter + Factory)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 13-14 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Integrate two fake payment APIs behind one `PaymentGateway` interface.

**What you will practice:** Adapter, Factory, Interface Segregation

**Steps to follow:**

1. Define `PaymentGateway.charge(amount, currency) -> Receipt`
2. Write adapters for `StripeLikeAPI` and `PayPalLikeAPI` with different method names
3. Factory reads `GATEWAY=stripe|paypal` from env
4. Return unified `Receipt` or raise `PaymentError`
5. Test adapters with stub APIs
6. Explain in README why callers never import vendor classes

**You are finished when:**

- Switching gateway is one env var change
- Adapters contain all translation logic

**If you want an extra challenge:**

- Decorator for retry-on-timeout

---

#### OOP-S03: Text Formatter Pipeline (Decorator + Command)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 14-15 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Apply reversible formatting steps to text using composable commands.

**What you will practice:** Decorator pattern, Command pattern, composition

**Steps to follow:**

1. `Formatter` interface with `format(text) -> str`
2. Concrete formatters: trim, uppercase, replace tabs, wrap width
3. Compose formatters in a pipeline object
4. Command objects support `execute` and `undo` for at least two steps
5. CLI: `--steps trim,upper,wrap`
6. Test pipeline order matters (document order in README)

**You are finished when:**

- Pipeline is data-driven from CLI flags
- Undo works for wrap and replace steps

**If you want an extra challenge:**

- Persist command history to redo

---

### LLD & Portfolio cluster (OOP Phases 16-19)

#### OOP-L01: Parking Lot LLD

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phase 18, [`CS.md`](./CS.md) Phase 10 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Classic LLD interview prompt - vehicles, spots, tickets, fees - with clean class boundaries.

**What you will practice:** LLD method, enums, composition, extensibility

**Steps to follow:**

1. Write 1-page design: entities, APIs, concurrency assumptions
2. Implement `ParkingLot`, `Spot`, `Vehicle` (Car, Bike, Truck), `Ticket`
3. Support spot types and incompatible vehicle assignment rules
4. Calculate fee by duration with a pluggable `FeeStrategy`
5. Provide `park(vehicle)` and `unpark(ticket_id)` with full state transitions
6. Add tests for full lot, wrong spot type, and duplicate park attempt

**You are finished when:**

- Design doc and code both public; README links them
- You can whiteboard the diagram in under 5 minutes

**If you want an extra challenge:**

- Multi-floor lot with nearest-spot finder (BFS preview)

---

#### OOP-L02: Vending Machine State Machine

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 15, 18 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Model vending machine behavior with explicit states instead of boolean flags.

**What you will practice:** State pattern, encapsulation, LLD

**Steps to follow:**

1. States: Idle, HasMoney, Dispensing, OutOfStock
2. Events: insert coin, select item, dispense, cancel
3. Inventory per slot with refill API
4. Return change calculation with greedy coin logic
5. Reject invalid transitions with clear errors
6. Table in README: state x event -> next state

**You are finished when:**

- No giant `if self.state ==` in business methods (delegated to state objects)
- All transitions in table are covered by tests

**If you want an extra challenge:**

- Admin mode for price changes

---

#### OOP-L03: Elevator Controller (Multi-car LLD)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phase 18 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Schedule elevator cars for pickup requests using a defined algorithm.

**What you will practice:** LLD, queues, strategy, simulation

**Steps to follow:**

1. Define `Elevator`, `Controller`, `Request` (source floor, direction)
2. Implement SCAN or LOOK scan for one car first
3. Simulate requests from CLI or scripted file
4. Log each step: car id, floor, door open/close
5. Metrics: average wait time, max wait
6. Compare algorithm choice in README with trade-offs

**You are finished when:**

- Simulation runs deterministically from a seed file
- README states assumptions (number of floors, peak load, etc.)

**If you want an extra challenge:**

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
| **How challenging the project is** | Medium |

**What you will build and prove:** Implement your own resizable array and singly linked list with the same API surface.

**What you will practice:** amortized analysis, pointers, Big O comparison

**Steps to follow:**

1. `DynamicArray` with append, insert, delete, index get/set
2. `SinglyLinkedList` with the same operations
3. Benchmark or count operations for insert-at-head vs append
4. Implement `__iter__` on both
5. Document Big O per method in docstrings
6. Tests comparing behavior on edge cases (empty, single element)

**You are finished when:**

- No use of Python `list` inside `DynamicArray` storage
- README includes table: operation x structure x complexity

**If you want an extra challenge:**

- Doubly linked list with O(1) delete given node reference

---

#### CS-D02: Stack-Based Expression Evaluator

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 3 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Evaluate infix arithmetic using two stacks or shunting-yard conversion.

**What you will practice:** stacks, parsing, operator precedence

**Steps to follow:**

1. Support `+`, `-`, `*`, `/`, parentheses, integers
2. Implement shunting-yard to RPN, then evaluate
3. Reject malformed input with position hint
4. Unit tests for nested parens and unary minus
5. CLI accepts one expression string
6. Explain algorithm in README with one worked example

**You are finished when:**

- `"3 + 5 * (2 - 8)"` evaluates correctly
- Malformed input never throws uncaught exceptions

**If you want an extra challenge:**

- Variables via `x=3; x+1`

---

#### CS-D03: LRU Cache

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 3, 6 |
| **How challenging the project is** | Hard |

**What you will build and prove:** `get` and `put` in O(1) average with a capacity cap.

**What you will practice:** hash map + doubly linked list, design under constraints

**Steps to follow:**

1. Define `LRUCache(capacity)` with `get(key)`, `put(key, value)`
2. Track usage order; evict LRU on overflow
3. `get` updates recency
4. Tests: eviction order, update existing key, capacity 1 edge case
5. Optional: thread-unsafe version first, document if adding locks
6. README diagram of map node <-> list node links

**You are finished when:**

- Pass a standard LeetCode-style test suite you write yourself
- Complexity claims match implementation

**If you want an extra challenge:**

- TTL expiry per key

---

#### CS-D04: Graph Route Planner (BFS/DFS)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 8 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Find shortest path in an unweighted city graph and compare BFS vs DFS visits.

**What you will practice:** adjacency list, BFS, DFS, path reconstruction

**Steps to follow:**

1. Load graph from JSON (nodes, edges)
2. Implement BFS shortest path and DFS reachability
3. Print visited order for both on same graph
4. CLI: `shortest A D` and `reach A`
5. Detect disconnected components count
6. Visualize small graph as ASCII in README

**You are finished when:**

- BFS returns shortest path length and path list
- You explain when DFS is wrong for shortest path

**If you want an extra challenge:**

- Dijkstra with weighted edges

---

### Systems, Web & DB cluster (CS Phases 11-15)

#### CS-S01: Mini HTTP Server (Raw Sockets)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 12-13, [`Networks.md`](./Networks.md) Phase 13 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Serve static files over HTTP/1.1 using sockets only (no Flask).

**What you will practice:** TCP, HTTP parsing, status codes, MIME types

**Steps to follow:**

1. TCP listen on port 8080; accept one client at a time first
2. Parse request line and headers minimally
3. Serve `GET /index.html` from a `public/` folder
4. Return 404 and 405 for missing paths and wrong verbs
5. Log method, path, status to stdout
6. Document request/response raw bytes in README

**You are finished when:**

- Browser loads HTML and CSS from your server
- curl shows correct headers and status codes

**If you want an extra challenge:**

- `Connection: keep-alive` for multiple requests

---

#### CS-S02: URL Shortener (Design + Code)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 13-14, 17 |
| **How challenging the project is** | Medium |

**What you will build and prove:** REST API for short links with redirect and basic analytics.

**What you will practice:** REST design, SQL schema, hashing/base62, indexes

**Steps to follow:**

1. Design schema: `urls(id, slug, target, created_at, hits)`
2. `POST /api/shorten` with URL validation
3. `GET /:slug` redirects 302 and increments hits
4. Use SQLite or Postgres; index slug column
5. Write API tests for duplicate slug handling
6. One-page design doc: capacity estimate, collision strategy

**You are finished when:**

- Redirect works in browser; hit count persists
- README includes ER diagram and sample curl commands

**If you want an extra challenge:**

- Expiring links with TTL column

---

#### CS-S03: Task Queue Worker (Processes vs Threads)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 11 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Compare thread pool vs process pool for CPU vs IO fake workloads.

**What you will practice:** threads, processes, GIL intuition, queues

**Steps to follow:**

1. Producer enqueues jobs (sleep=IO, compute=CPU)
2. Worker pool consumes and writes results
3. Run same workload with `ThreadPoolExecutor` and `ProcessPoolExecutor`
4. Plot or tabulate throughput vs worker count
5. Explain results in README with GIL mention for Python
6. Graceful shutdown on SIGINT

**You are finished when:**

- Table shows IO-bound favors threads, CPU-bound favors processes (on your machine)
- Code is runnable with one command

**If you want an extra challenge:**

- Persistent queue with Redis or SQLite

---

#### CS-S04: Blog API with Auth

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 13-15 |
| **How challenging the project is** | Hard |

**What you will build and prove:** CRUD posts with password hashing and session or JWT auth.

**What you will practice:** REST, SQL, bcrypt/argon2, middleware, SQL injection prevention

**Steps to follow:**

1. Users register/login; store hashed passwords only
2. JWT or session cookie protects `POST/PATCH/DELETE` posts
3. Parameterized SQL or ORM only - no string concat queries
4. Posts belong to authors; users cannot edit others' posts
5. Integration tests for auth failures and happy path
6. README threat model: what you protect and what you defer

**You are finished when:**

- SQL injection attempt in a test fails safely
- OpenAPI or route table documented

**If you want an extra challenge:**

- Refresh tokens or rate limiting on login

---

### Design & Distributed cluster (CS Phases 16-18)

#### CS-X01: Rate Limiter Library

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 17 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Token bucket or sliding window limiter reusable in any API.

**What you will practice:** algorithms, time windows, system design building block

**Steps to follow:**

1. Interface: `allow(key) -> bool`
2. Implement token bucket with configurable rate and burst
3. In-memory store first; thread-safe if using threads
4. Demo middleware for a tiny HTTP app
5. Tests advance clock or use injectable time source
6. README compares token bucket vs fixed window

**You are finished when:**

- Burst then steady rate behaves as documented
- Unit tests do not depend on real sleep for correctness

**If you want an extra challenge:**

- Redis-backed distributed limiter (design note enough if no Redis)

---

#### CS-X02: Consistent Hash Ring Simulator

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 18 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Visualize key distribution when nodes join or leave the ring.

**What you will practice:** consistent hashing, minimal remapping on churn

**Steps to follow:**

1. Hash keys and nodes to a ring (0..2^n-1 or library hash)
2. Assign key to first node clockwise
3. CLI: add/remove node, print moved key fraction
4. Compare vs naive mod-N hashing in README
5. Plot histogram of keys per node (matplotlib or ASCII)
6. Document virtual nodes option

**You are finished when:**

- Adding one node moves ~1/N keys, not nearly all
- README ties to cache sharding use case

**If you want an extra challenge:**

- Replication factor 3 placement

---

#### CS-X03: Event Sourcing Lite (Bank Ledger)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 14, 18 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Store account state as append-only events; rebuild balance from log.

**What you will practice:** event sourcing, immutability, projections

**Steps to follow:**

1. Events: `AccountOpened`, `MoneyDeposited`, `MoneyWithdrawn`
2. Append to JSON or SQL event table; no in-place balance updates
3. Projection rebuilds current balance from stream
4. Idempotent replay using event ids
5. Snapshot every N events for faster rebuild
6. Tests: replay twice yields same balance

**You are finished when:**

- You can delete projection table and rebuild from events
- README contrasts with CRUD-only design

**If you want an extra challenge:**

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
| **How challenging the project is** | Easy |

**What you will build and prove:** Ingest a messy CSV and output an analysis-ready table with a data dictionary.

**What you will practice:** types, nulls, parsing dates, Pandas or stdlib csv

**Steps to follow:**

1. Start from a deliberately dirty file (mixed dates, `$` in numbers, dup rows)
2. Profile columns: null rate, unique count, sample values
3. Standardize dtypes; parse dates to ISO
4. Dedupe with documented key
5. Export clean CSV + `data_dictionary.md`
6. One pytest or assert block on row count and null rules

**You are finished when:**

- Clean file loads without manual Excel fixes
- README states every transform and why

**If you want an extra challenge:**

- Great Expectations or pandera schema validation

---

#### DATA-A02: Spreadsheet KPI Dashboard (Export to HTML)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 2, 9 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Answer three business questions from a sheet and publish static charts.

**What you will practice:** PivotTables or Pandas pivot, chart choice, metric definition

**Steps to follow:**

1. Pick a public sample dataset (sales, HR, web traffic)
2. Define 3 KPIs with formulas in README
3. Build bar, line, and one honest comparison chart
4. Export Plotly/Matplotlib HTML or PNG gallery
5. Write 200-word insight memo: so what, now what
6. Note one chart you rejected and why

**You are finished when:**

- Memo references specific numbers from your output
- Charts avoid dual-axis lies (or explain if used)

**If you want an extra challenge:**

- Parameterized notebook with papermill

---

#### DATA-A03: SQL Case Study Database

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 4-6 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Design a mini star-ish schema and answer 10 analyst questions in SQL only.

**What you will practice:** joins, aggregations, CTEs, window functions, grain

**Steps to follow:**

1. Model: customers, orders, order_items, products (SQLite or Postgres)
2. Seed with realistic skew and NULLs
3. Write 10 questions: retention, AOV, top-N, running total
4. One query uses window functions; one uses CTE
5. Document grain per query in comments
6. `queries/` folder with numbered `.sql` files

**You are finished when:**

- All queries run via single seed script
- README includes ER sketch and hardest query explanation

**If you want an extra challenge:**

- Explain plan for one slow query

---

#### DATA-A04: A/B Test Analyzer

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 7 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Analyze a simulated experiment and recommend either releasing the change or holding it back. State what remains uncertain.

**What you will practice:** hypothesis testing, conversion rates, confidence, pitfalls

**Steps to follow:**

1. Generate or use sample A/B click data with assignment column
2. Compute conversion rate per variant
3. Run chi-square or z-test; report p-value and CI
4. Check sample ratio mismatch and novelty effects (discuss)
5. One-page decision memo with recommendation
6. Script reproduces memo numbers from raw CSV

**You are finished when:**

- Memo names both statistical and business thresholds
- You explain what p-value is not

**If you want an extra challenge:**

- Bayesian beta-binomial posterior

---

#### DATA-A05: EDA Notebook to Executive Summary

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 10 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Full EDA pipeline ending in metrics definitions stakeholders can adopt.

**What you will practice:** EDA, metric design, documentation, reproducibility

**Steps to follow:**

1. Pick dataset with at least one datetime and one categorical
2. Univariate and bivariate sections with labeled plots
3. Define 2 north-star and 3 diagnostic metrics
4. Data quality section: missing, outliers, duplicates
5. Export notebook to HTML; summary PDF or MD
6. `requirements.txt` pins versions

**You are finished when:**

- Someone else can rerun notebook top to bottom
- Metrics have plain-English definitions

**If you want an extra challenge:**

- dbt-style metric YAML for one metric

---

### Engineer cluster (Data Phases 11-18)

#### DATA-E01: Mini ETL Pipeline (CSV to Postgres)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 11, 13 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Extract from API or CSV, transform, load into Postgres idempotently.

**What you will practice:** ETL, idempotency, schemas, logging

**Steps to follow:**

1. Docker Compose: Postgres + optional Adminer
2. Python script: extract (HTTP or file), transform, load
3. Upsert on natural key; log rows in/out/rejected
4. Config via env vars; no secrets in repo
5. Makefile or README one-liner to run
6. Test on empty re-run (no duplicate facts)

**You are finished when:**

- Second run does not duplicate rows
- README documents source schema to target schema mapping

**If you want an extra challenge:**

- Airflow DAG wrapper with retry

---

#### DATA-E02: Star Schema Warehouse Build

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 12 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Build fact + dimension tables from OLTP-like JSON exports.

**What you will practice:** dimensional modeling, SCD Type 1 vs 2, grain

**Steps to follow:**

1. Stage raw JSON to landing tables
2. Build `dim_customer`, `dim_product`, `fact_sales` with explicit grain
3. Implement SCD2 on customer address (optional column tracking)
4. Document unknown member handling
5. Sample analyst query joins star without fan-out
6. dbt or plain SQL migrations in repo

**You are finished when:**

- One fact row = one order line (or chosen grain)
- README star diagram matches DDL

**If you want an extra challenge:**

- Incremental load watermark column

---

#### DATA-E03: dbt Transformation Project

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 15 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Layer staging, intermediate, and mart models with tests.

**What you will practice:** dbt, ref(), tests, documentation

**Steps to follow:**

1. Init dbt project against Postgres or DuckDB
2. `stg_`, `int_`, `mart_` models for one business domain
3. Add `unique`, `not_null`, and one `relationships` test
4. Generate docs; screenshot lineage in README
5. Seed data for CI run
6. GitHub Action or local script runs `dbt test`

**You are finished when:**

- `dbt build` passes on clean clone
- README explains model naming convention

**If you want an extra challenge:**

- Snapshot for SCD2

---

#### DATA-E04: Kafka Event Producer/Consumer

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 18 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Stream synthetic click events to a topic and aggregate counts in a consumer.

**What you will practice:** Kafka basics, partitions, at-least-once, streaming agg

**Steps to follow:**

1. Docker Compose with Kafka (or Redpanda)
2. Producer emits JSON events with key=user_id
3. Consumer maintains per-minute counts in SQLite or prints tumbling window
4. Document partition key choice
5. Kill consumer mid-run; restart and note duplicate handling
6. README diagram: producer -> topic -> consumer

**You are finished when:**

- End-to-end demo in under 5 commands
- You explain offset commit trade-off

**If you want an extra challenge:**

- Exactly-once-ish idempotent sink

---

#### DATA-E05: Spark Batch Job on Local Cluster

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 17 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Aggregate a medium CSV with PySpark locally (Docker or standalone).

**What you will practice:** Spark DataFrame, shuffle, partitions, lazy eval

**Steps to follow:**

1. Input 1M+ row CSV (generate if needed)
2. Job: group by category, sum revenue, top 10
3. Tune `spark.sql.shuffle.partitions` and note runtime
4. Explain narrow vs wide transformation in README
5. Write output parquet partitioned by date
6. Compare pandas vs Spark timing on same machine

**You are finished when:**

- Spark job runs non-interactively via `spark-submit`
- README notes when Spark is overkill

**If you want an extra challenge:**

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
| **How challenging the project is** | Easy |

**What you will build and prove:** Echo bytes over TCP and print the four-tuple on connect.

**What you will practice:** sockets, TCP stream, client/server, byte strings

**Steps to follow:**

1. Server binds localhost high port; accepts loop
2. Client sends line; server echoes until `quit`
3. Log local and remote addr on server
4. Handle broken pipe gracefully
5. Optional: concurrent clients with threading
6. Paste sample session in README

**You are finished when:**

- Works with `telnet` or netcat as client too
- You explain connection vs listening socket

**If you want an extra challenge:**

- UDP echo counterpart and compare semantics

---

#### NET-02: HTTP Raw Exchange Lab

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 13 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Craft HTTP/1.1 request by hand with netcat or Python socket.

**What you will practice:** request line, headers, status codes, Host header

**Steps to follow:**

1. Connect to `example.com:80` or local server
2. Send `GET / HTTP/1.1` with Host and Connection headers
3. Capture full response; highlight status and Content-Type
4. Repeat with `HEAD` and wrong path for 404
5. Document byte-exact request in README
6. List headers you must send vs optional

**You are finished when:**

- You receive valid HTML without curl
- README explains persistent vs close behavior

**If you want an extra challenge:**

- POST with form body to httpbin

---

#### NET-03: DNS Lookup Tracer Narrative

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 12 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Trace resolution steps for one domain and publish a annotated write-up.

**What you will practice:** DNS records, recursion, TTL, tools

**Steps to follow:**

1. Pick a domain you control or a public site
2. Run `dig` +trace or equivalent; save output
3. Explain A, AAAA, CNAME, NS roles for your case
4. Note TTL values and cache implications
5. Diagram resolver -> root -> TLD -> authoritative
6. Tie narrative to [`Interview.md`](./Interview.md) URL question

**You are finished when:**

- Public markdown post with redacted sensitive data if needed
- Reader can follow without running commands themselves

**If you want an extra challenge:**

- Compare DNS over HTTPS resolver

---

#### NET-04: Wireshark Capture Write-up

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 15 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Capture a failing or interesting exchange and explain layers.

**What you will practice:** Wireshark, filters, TCP handshake, TLS overview

**Steps to follow:**

1. Reproduce HTTPS login or local HTTP failure
2. Capture during reproduction; mark filter used
3. Screenshot SYN-SYN/ACK-ACK sequence
4. Identify one retransmission or RST if present
5. Map one packet to OSI layers in prose
6. Publish sanitized PCAP or screenshots only

**You are finished when:**

- Write-up answers: what happened, which layer, evidence packet
- Filter string documented

**If you want an extra challenge:**

- Decrypt local TLS with session keys (dev only)

---

#### NET-05: Traceroute Story (Path to Host)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phases 5-6, 7 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Run traceroute to three hosts and interpret hop behavior.

**What you will practice:** ICMP, TTL, routing, NAT hints

**Steps to follow:**

1. Trace to local gateway, regional site, global CDN
2. Record latency jumps and `*` hops
3. Relate hops to likely AS or geography (whois optional)
4. Explain why last miles differ across targets
5. ASCII map of paths in README
6. Link to routing phase concepts

**You are finished when:**

- Three traces compared in one table
- You explain one anonymized hop and one timeout

**If you want an extra challenge:**

- MTR over 50 cycles for packet loss

---

#### NET-06: Subnet Calculator CLI

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 5 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Given CIDR, print network, broadcast, host range, and usable count.

**What you will practice:** CIDR, bitwise ops, address planning

**Steps to follow:**

1. Parse `192.168.1.0/24` style input
2. Validate prefix length per IPv4 rules
3. Output network, broadcast, first/last host
4. Flag network/broadcast addresses as unusable for hosts
5. Tests for /32, /31 edge cases you document
6. README with one office subnetting example

**You are finished when:**

- Matches known online calculator on test vectors
- Invalid input returns helpful error

**If you want an extra challenge:**

- IPv6 /64 basics

---

#### NET-07: TLS Certificate Inspector

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 14 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Fetch a site's certificate chain and summarize trust fields.

**What you will practice:** TLS, certificates, SAN, expiry, chain of trust

**Steps to follow:**

1. Script connects to `host:443` with ssl module
2. Print subject, issuer, notBefore, notAfter, SANs
3. Warn if expiry within 30 days
4. Save PEM to file optionally
5. README explains what CA signing means
6. Compare cert for two subdomains

**You are finished when:**

- Output readable without openssl CLI
- You explain hostname verification vs cert validity

**If you want an extra challenge:**

- Pin expected SPKI hash for a known host

---

## 6. Artificial Intelligence (`AI.md`)

**File:** [`AI.md`](./AI.md)

**Scope:** Classical ML baselines first, then deep learning, then LLM apps with evaluation tests.

---

#### AI-01: sklearn Tabular Baseline

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phases 4-5 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Train and evaluate a logistic regression on a public tabular dataset.

**What you will practice:** train/test split, metrics, baseline, overfitting check

**Steps to follow:**

1. Load Titanic or similar via sklearn/openml
2. Simple preprocessing pipeline (impute, encode)
3. Fit logistic regression; report accuracy, precision, recall, ROC-AUC
4. Compare to dummy classifier baseline
5. Save model with joblib; load and predict in second script
6. README states metric choice for imbalanced data

**You are finished when:**

- Pipeline reproducible from one command
- You explain one metric weakness on this dataset

**If you want an extra challenge:**

- Cross-validation with std dev of scores

---

#### AI-02: Decision Tree vs Random Forest Showdown

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 6 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Compare variance and interpretability between single tree and ensemble.

**What you will practice:** bagging, feature importance, hyperparameters

**Steps to follow:**

1. Same dataset as AI-01 or credit default
2. Train DecisionTree with max_depth sweep
3. Train RandomForest; plot depth vs score
4. Print top feature importances for both
5. Discuss overfitting on training score vs val
6. Export comparison table to README

**You are finished when:**

- Forest beats single tree on held-out metric
- You explain bagging in one paragraph

**If you want an extra challenge:**

- Gradient boosting with XGBoost or sklearn GBM

---

#### AI-03: PyTorch MNIST Training Loop

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phases 7-9 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Write training loop from scratch without high-level Trainer magic.

**What you will practice:** tensors, autograd, loss, optimizer, epochs

**Steps to follow:**

1. Load MNIST with torchvision
2. Define small MLP or CNN
3. Loop: forward, loss, backward, step; log loss per epoch
4. Evaluate test accuracy after training
5. Save/load `state_dict`
6. Plot loss curve in README

**You are finished when:**

- Test accuracy above 95% with your MLP or above 98% with CNN
- Loop code is yours, not copy-pasted Trainer

**If you want an extra challenge:**

- Learning rate schedule

---

#### AI-04: Transfer Learning Image Classifier

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 10 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Fine-tune a pretrained CNN on a small custom image folder.

**What you will practice:** transfer learning, frozen layers, data augmentation

**Steps to follow:**

1. Collect 2-3 classes, ~50 images each (or use flowers102 subset)
2. Freeze backbone; train new head
3. Unfreeze last block; lower LR fine-tune
4. Report confusion matrix
5. Export TorchScript or ONNX optional
6. README compares train-from-scratch vs transfer on small data

**You are finished when:**

- Beats scratch model on same data budget
- Augmentation described

**If you want an extra challenge:**

- Grad-CAM visualization for one prediction

---

#### AI-05: Embedding Similarity Search

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 12 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Embed sentences and retrieve nearest neighbors by cosine similarity.

**What you will practice:** embeddings, cosine similarity, vector search

**Steps to follow:**

1. Corpus of 100+ short texts (FAQ, docs, or wiki snippets)
2. Embed with sentence-transformers or OpenAI API (document cost)
3. Build brute-force index; query top-5 neighbors
4. CLI interactive search
5. Show one failure case (false neighbor) and hypothesize why
6. README diagram: query -> embed -> compare -> rank

**You are finished when:**

- Top result relevant for 8/10 hand-picked queries
- Cosine formula and normalization explained

**If you want an extra challenge:**

- FAISS index for speed

---

#### AI-06: Tiny RAG over Your Notes

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 15 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Chunk markdown notes, retrieve, and answer with citations.

**What you will practice:** chunking, retrieval, prompting, grounding

**Steps to follow:**

1. Ingest folder of `.md` roadmap excerpts
2. Chunk ~500 tokens with overlap; embed to local vector store
3. Query pipeline: retrieve top-k, build prompt with sources
4. LLM API or local model generates answer with `[source]` tags
5. Log retrieved chunks for debugging
6. Eval set: 5 questions with expected source doc

**You are finished when:**

- Answers cite correct file for 4/5 eval questions
- README documents chunk size trade-off

**If you want an extra challenge:**

- Hybrid BM25 + vector retrieval

---

#### AI-07: Prompt Eval Suite

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phases 14, 18 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Compare 3 prompt templates on a fixed task with a score rubric.

**What you will practice:** prompting, eval design, failure modes

**Steps to follow:**

1. Task: extract JSON fields from messy customer emails (synthetic set)
2. Write 3 prompts (zero-shot, few-shot, structured output)
3. Run 20 examples; grade JSON validity and field accuracy
4. Table: prompt x success rate x avg tokens
5. Document one hallucination example
6. Store prompts as versioned files

**You are finished when:**

- Repro script outputs same scores on rerun
- README names when to change prompt vs change model

**If you want an extra challenge:**

- LLM-as-judge with human spot-check

---

#### AI-08: ReAct-Style Tool Agent (Safe Subset)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 17 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Agent loop that calls whitelisted tools (calculator, datetime, search stub).

**What you will practice:** agents, tool schemas, loop limits, safety checks and limits

**Steps to follow:**

1. Define 2-3 tools with JSON schema descriptions
2. Loop: model proposes tool call -> execute -> feed result -> max 5 steps
3. Refuse tools not on allowlist
4. Timeout and max token budget
5. Log full trace for one successful and one failed run
6. README threat model: prompt injection via tool output

**You are finished when:**

- Solves 3/5 multi-step questions in eval set
- Cannot execute shell or file delete (explicitly out of scope)

**If you want an extra challenge:**

- Human approval gate before tool execution

---

#### AI-09: MLflow or CSV Experiment Tracker

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 18 |
| **How challenging the project is** | Easy |

**What you will build and prove:** Track hyperparameters and metrics across runs systematically.

**What you will practice:** MLOps basics, reproducibility, experiment comparison

**Steps to follow:**

1. Wrap AI-01 or AI-03 training in experiment logger
2. Log params, metrics, artifact path per run
3. Run grid of at least 6 configs
4. UI or CSV summary of best run
5. Tag best model `staging`
6. README screenshot or table of runs

**You are finished when:**

- You can answer "which run won and why" from logs alone
- Seeds documented for reproducibility

**If you want an extra challenge:**

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
| **How challenging the project is** | Easy |

**What you will build and prove:** Create installable module with todo model, views, and menu.

**What you will practice:** module manifest, models.Model, XML views, ACLs

**Steps to follow:**

1. Scaffold module `my_todo` with `__manifest__.py`
2. Model fields: name, description, done, deadline
3. Tree and form views; menu under custom app
4. Basic access rights for user group
5. Demo data XML for 3 records
6. README: install steps on Odoo 17+ dev instance

**You are finished when:**

- Module installs without error; CRUD works in UI
- Uninstall leaves no orphan tables (or document expected residue)

**If you want an extra challenge:**

- Kanban view by status

---

#### ODOO-02: Library Management Module

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 2-3 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Books, authors, borrowers, loans with relational fields.

**What you will practice:** Many2one, One2many, constraints, onchange

**Steps to follow:**

1. Models: `library.book`, `library.author`, `library.loan`
2. SQL constraint: no duplicate ISBN
3. Python constraint: return date after borrow date
4. Onchange warns if book already on loan
5. Search filters and group by author
6. Security: librarian vs reader groups

**You are finished when:**

- Cannot create invalid loan via UI or ORM
- README ER diagram matches models

**If you want an extra challenge:**

- Email reminder on overdue (cron)

---

#### ODOO-03: Inherit `sale.order` (Discount Cap)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 4 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Extend standard Sales with custom field and validation on order confirm.

**What you will practice:** `_inherit`, super(), xpath views, business rules

**Steps to follow:**

1. Add field `x_discount_reason` on `sale.order`
2. Override confirm: block if discount > 20% without reason
3. Inherit form view with xpath after discount field
4. Unit test with TransactionCase or HttpCase
5. Module depends on `sale`
6. Document upgrade path when Odoo version bumps

**You are finished when:**

- Standard sale flow works; rule fires on edge case
- View inheritance does not duplicate fields

**If you want an extra challenge:**

- Approval workflow state for large discounts

---

#### ODOO-04: OWL Dashboard Widget

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 5-6 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Custom backend widget showing KPI count from RPC.

**What you will practice:** OWL components, assets bundle, RPC, QWeb integration

**Steps to follow:**

1. JS OWL component fetches count from custom JSON route or ORM
2. Register widget in backend assets
3. Embed on existing model form or systray
4. Loading and error states in UI
5. SCSS matches Odoo spacing roughly
6. README screenshots of widget mounted

**You are finished when:**

- Widget loads without console errors on fresh install
- Data refreshes on button click

**If you want an extra challenge:**

- Small chart with Chart.js

---

#### ODOO-05: Webhook Receiver Controller

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 7 |
| **How challenging the project is** | Medium |

**What you will build and prove:** HTTP controller accepts signed webhook and creates CRM lead.

**What you will practice:** `@http.route`, auth, CSRF, idempotency, logging

**Steps to follow:**

1. Route `POST /api/webhook/lead` with JSON body
2. Verify HMAC signature header with secret in config
3. Map payload to `crm.lead` create vals
4. Idempotency key stored to ignore duplicates
5. Return 200/401/400 appropriately
6. Test with curl examples in README

**You are finished when:**

- Invalid signature rejected; duplicate payload ignored
- No CSRF on public route by design (document why)

**If you want an extra challenge:**

- Queue job for heavy processing

---

#### ODOO-06: Report QWeb PDF (Invoice Summary)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 8 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Custom PDF report on sales orders with aggregated lines.

**What you will practice:** QWeb, report action, paperformat, translations

**Steps to follow:**

1. Report template listing order lines grouped by product category
2. Subtotal per category and grand total
3. Bind report to `sale.order` print menu
4. Test with multi-currency order if available
5. Add company logo from standard field
6. PDF screenshot in README

**You are finished when:**

- PDF generates from UI for sample order
- Template uses t-foreach correctly

**If you want an extra challenge:**

- XLSX export with same data

---

#### ODOO-07: Automated Test Suite for Module

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 9 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Tag-fast tests covering create, constraint, and workflow on your module.

**What you will practice:** Odoo test tags, setUp, mock, CI

**Steps to follow:**

1. Tests in `tests/` imported from `__init__.py`
2. Cover at least one constraint violation assertion
3. Tag `@tagged('post_install', '-at_install')` as appropriate
4. Run `./odoo-bin -i my_module --test-enable --stop-after-init`
5. Optional GitHub Action on push (docker odoo)
6. README badge or log snippet showing green run

**You are finished when:**

- CI or local command exits 0 with tests enabled
- One test proves business rule, not only `assertTrue(True)`

**If you want an extra challenge:**

- Tour test with HttpCase browser simulation

---

#### ODOO-08: External API Integration (Rates or Geo)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 10 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Scheduled job fetches external API and stores results on model.

**What you will practice:** cron, requests, error handling, config parameters

**Steps to follow:**

1. Model stores rate/date or geo lookup cache
2. `ir.cron` daily job calls API with timeout and retry
3. Settings page for API key via `ir.config_parameter`
4. Log failures to chatter or logger model
5. Manual "refresh" button on form
6. Graceful degrade if API down

**You are finished when:**

- Cron runs; manual refresh matches
- Secrets not in git

**If you want an extra challenge:**

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
| **How challenging the project is** | Easy |

**What you will build and prove:** Finish and publish a standards-based page that remains usable without JavaScript and with a keyboard, zoom, or a narrow screen.

**What you will practice:** semantic HTML, forms, responsive images, cascade layers, Flexbox/Grid, accessibility, metadata

**Steps to follow:**

1. Write the information architecture and HTML landmarks before styling
2. Add product media, pricing, variant selection, reviews, and a native purchase form
3. Build mobile-first layout with Grid/Flexbox and content-driven breakpoints
4. Add focus, hover, disabled, error, loading, and reduced-motion styles
5. Test keyboard order, accessible names, 200% zoom, 320px width, and long text
6. Record Lighthouse/axe results and fix meaningful findings

**You are finished when:**

- Page works with CSS or JavaScript disabled where applicable
- No horizontal scroll at 320px or 200% zoom
- Form controls have labels and errors are understandable
- README contains before/after accessibility evidence

**If you want an extra challenge:** Add RTL and dark themes using logical properties and design tokens.

---

#### WEB-02: Vanilla TypeScript Task Board

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 5-7 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Prove browser and language fundamentals before a UI framework abstracts them.

**What you will practice:** TypeScript, DOM, event delegation, modules, async/fetch, abort, storage, runtime validation, tooling

**Steps to follow:**

1. Model task states with TypeScript discriminated unions
2. Render lists with DOM APIs and delegated events
3. Persist drafts locally and load seed data from a mock API
4. Support loading, empty, error, retry, and offline states
5. Cancel stale searches with `AbortController` and prevent race-condition overwrites
6. Add format, lint, typecheck, unit-test, and build commands in CI

**You are finished when:**

- No framework and no `any` escape hatches in application code
- Reload restores valid local state and rejects corrupt stored data safely
- Keyboard interaction and status announcements work
- A deterministic test proves the stale-response race is handled

**If you want an extra challenge:** Add a service worker with a documented cache strategy.

---

### Frontend application cluster (Web Phases 9-11, 16)

#### WEB-03: Framework Admin Dashboard

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 8-10, 15-16 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Build a production-style frontend in React/Next, Vue/Nuxt, Angular, or SvelteKit and justify the choice.

**What you will practice:** routing, rendering strategy, server state, forms, URL state, component APIs, accessibility, tests, performance

**Steps to follow:**

1. Write an ADR comparing at least two framework/rendering options
2. Build protected-looking routes against a mock server without pretending UI checks are authorization
3. Put search/filter/page state in the URL and cache remote data correctly
4. Implement schema-validated create/edit forms with server-style field errors
5. Add optimistic mutation with rollback and explicit stale/refetch behavior
6. Create reusable table, dialog, form-field, toast, and empty-state components
7. Add component/integration tests plus one Playwright critical journey
8. Profile bundle and interaction performance; document one measured improvement

**You are finished when:**

- Refresh/deep links work and every route has loading/error/not-found behavior
- Keyboard focus is correct through dialogs and validation failures
- Tests assert behavior rather than private implementation
- README explains state ownership and client/server boundaries

**If you want an extra challenge:** Rebuild one route in a second framework and compare developer/runtime trade-offs.

---

### Backend, data, and API cluster (Web Phases 12-15)

#### WEB-04: OpenAPI Project Service

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 12-15, [`Data.md`](./Data.md) SQL phases |
| **How challenging the project is** | Hard |

**What you will build and prove:** Deliver a relational, documented REST API whose validation, authorization, and concurrency behavior are testable.

**What you will practice:** backend framework, PostgreSQL, migrations, transactions, REST, OpenAPI, cursor pagination, sessions/tokens, object authorization

**Steps to follow:**

1. Model users, organizations, projects, memberships, and tasks with DB constraints
2. Implement migrations, seed data, and indexed access patterns verified with query plans
3. Publish OpenAPI for CRUD, filters, cursor pagination, errors, and security schemes
4. Validate inputs at the transport boundary and centralize safe error responses
5. Implement authentication plus tenant/object-level authorization on every route
6. Add ETags or version fields for conflicting edits and idempotency keys for creates
7. Write unit, database integration, API contract, and negative authorization tests
8. Add structured request logs, rate limiting, and graceful shutdown

**You are finished when:**

- Fresh setup runs migrations and contract tests from one documented command
- Cross-tenant IDs never expose or modify another tenant's data
- OpenAPI examples match actual responses
- Duplicate idempotency keys return the original safe outcome

**If you want an extra challenge:** Generate a typed client and verify compatibility in CI.

---

#### WEB-05: Secure Webhook and Background Job Processor

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 14-15, 17-18 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Integrate an unreliable third party without losing, duplicating, or blindly trusting events.

**What you will practice:** webhook signatures, raw bodies, replay protection, queues, retries, dead letters, idempotency, outbox, observability

**Steps to follow:**

1. Receive a provider-shaped webhook and verify signature/timestamp before parsing
2. Persist event ID and raw audit metadata with unique deduplication constraint
3. Return quickly, enqueue processing, and make the consumer idempotent
4. Add bounded exponential backoff, dead-letter state, and an operator replay endpoint
5. Publish outbound webhook events through a transactional outbox
6. Simulate duplicate, delayed, reordered, malformed, and dependency-down events
7. Build metrics for accepted, processed, retried, dead-lettered, and age-of-oldest job

**You are finished when:**

- Duplicate delivery changes business state once
- Invalid/stale signatures are rejected and secrets are redacted
- A failed job can be inspected and safely replayed
- Tests prove the database-commit/publish-failure boundary

**If you want an extra challenge:** Add SSE progress updates to an operator dashboard.

---

### Production capstone cluster (Web Phases 16-19)

#### WEB-06: Production Full-Stack SaaS Slice

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Web.md`](./Web.md) Phases 16-19 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Finish and publish one focused product workflow with evidence for its security, tests, speed, delivery process, and operation in a real environment.

**What you will practice:** full-stack architecture, auth, REST, SQL, cache, jobs/realtime, test strategy, CI/CD, Docker, cloud, observability, recovery

**Steps to follow:**

1. Define users, success metric, non-goals, threat model, and architecture ADR
2. Build responsive accessible UI, authenticated API, relational schema, and one background/realtime feature
3. Add unit, integration, contract, E2E, accessibility, and lightweight load tests
4. Enforce secure headers, object authorization, validation, upload/secret/rate-limit policy
5. Containerize and deploy through CI with migrations, health checks, and progressive verification
6. Add structured logs, metrics, traces, dashboard, actionable alert, and runbook
7. Measure Web Vitals/API percentiles and fix one evidenced bottleneck
8. Rehearse rollback plus database backup restoration and write the result

**You are finished when:**

- Public demo and clean-machine local setup both work
- CI blocks a deliberate test/type/security regression
- Dashboard links one slow browser action to API and database evidence
- README explains limits, cost, security decisions, the incident exercise, and the next useful project

**If you want an extra challenge:** Add feature-flagged canary delivery and an SLO/error-budget report.

---

## 9. Cloud Engineer (`cloud.md`)

**File:** [`cloud.md`](./cloud.md)

**Scope:** Architecture-first projects that prove identity, networking, managed services, reliability, security, cost control, and recovery-not provider-console tourism.

#### CLOUD-01: Multi-Zone Cloud Foundation

| Field | Detail |
| --- | --- |
| **Roadmap** | [`cloud.md`](./cloud.md) Phases 3-6, 12-14 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Create a secure, reproducible network and compute foundation for a small web service.

**What you will practice:** accounts/subscriptions, IAM, VPC/VNet, subnets, routes, load balancing, autoscaling, IaC, secrets, audit logs

**Steps to follow:**

1. Write the workload, data, threat, availability, and monthly-cost assumptions
2. Build public load-balancer and private application subnets across two zones with IaC
3. Use federated human access and a least-privilege workload role; store no static cloud keys
4. Deploy a tiny service with readiness checks, replacement, and autoscaling boundaries
5. Enable audit/config/network logs, encryption, tags, a budget, and a teardown command
6. Draw request, management, and egress paths and review the IaC plan in CI

**You are finished when:** A fresh environment is reproducible, the database/workload has no unnecessary public path, one zone can be removed without losing the service, and the README records cost plus security decisions.

**If you want an extra challenge:** Replace NAT traffic to provider services with private endpoints and compare cost.

---

#### CLOUD-02: Event-Driven Image or Job Pipeline

| Field | Detail |
| --- | --- |
| **Roadmap** | [`cloud.md`](./cloud.md) Phases 7-10, 14-15 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Process uploaded work safely despite duplicates, retries, malformed inputs, and downstream failure.

**What you will practice:** object storage, events, functions/containers, queues, idempotency, dead letters, IAM, encryption, observability

**Steps to follow:**

1. Accept a presigned upload or job submission and record a stable request ID
2. Publish durable work to a queue and process it with a least-privilege worker
3. Make the state transition idempotent and add bounded retry with jitter
4. Route poison work to a dead-letter queue with an inspected replay procedure
5. Add size/type limits, encryption, lifecycle rules, structured logs, and age/error metrics
6. Test duplicate, reordered, corrupt, dependency-down, and lost-ack scenarios

**You are finished when:** Duplicate delivery creates one business result, bad work is recoverable without editing production data, and a dashboard shows throughput, failures, retries, and age of oldest work.

**If you want an extra challenge:** Compare function and container cost/latency for the same workload.

---

#### CLOUD-03: Reliability and FinOps Game Day

| Field | Detail |
| --- | --- |
| **Roadmap** | [`cloud.md`](./cloud.md) Phases 15-18 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Turn a deployed service into measured recovery evidence and an explainable unit-cost model.

**What you will practice:** SLI/SLO, alerts, RTO/RPO, backup/restore, zone failure, capacity, tags, budgets, right-sizing, runbooks

**Steps to follow:**

1. Define one user SLI/SLO, error budget, RTO, RPO, and unit-cost denominator
2. Build logs/metrics/traces, a symptom alert, and a runbook with ownership
3. Back up data and restore it into an isolated environment; measure actual RTO/RPO
4. Inject dependency latency, instance loss, quota pressure, and a zone-style failure
5. Capture detection, mitigation, recovery, data correctness, and missed telemetry
6. Produce a tagged cost report and one right-sizing/lifecycle improvement without reducing the SLO

**You are finished when:** Restore and failover are demonstrated rather than claimed, the alert leads to a usable runbook, and before/after reliability and cost evidence is public.

**If you want an extra challenge:** Use a second region for backup recovery and document the real complexity premium.

---

#### CLOUD-04: Governed Migration Capstone

| Field | Detail |
| --- | --- |
| **Roadmap** | [`cloud.md`](./cloud.md) Phases 11-20 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Migrate a small stateful application into a governed cloud landing zone with reversible cutover.

**What you will practice:** landing zone, service choice, IaC, security, migration waves, data validation, DNS cutover, rollback, operations, FinOps

**Steps to follow:**

1. Inventory dependencies/data and write RTO/RPO, regulatory, latency, cost, and non-goals
2. Choose rehost/replatform/refactor per component in an architecture decision record
3. Provision identity, network, logging, policy, budget, compute, data, and backup foundations as code
4. Rehearse data copy and validate counts/checksums and application behavior
5. Run a low-risk migration wave, then a timed cutover with DNS/traffic and rollback thresholds
6. Operate for a measurement window and publish performance, incident, security, and cost findings

**You are finished when:** The old path can be restored within the declared window, data validation passes, ownership/runbooks exist, and the architecture/cost model explains every managed service.

**If you want an extra challenge:** Re-express the architecture for a second provider and compare primitives instead of brand names.

---

## 10. DevOps Engineer (`devops.md`)

**File:** [`devops.md`](./devops.md)

**Scope:** Delivery and operations projects that begin with Linux and flow, then earn containers, orchestration, IaC, observability, SRE, security, and platform abstractions.

#### DEVOPS-01: Linux Service and Incident Lab

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 2-5 |
| **How challenging the project is** | Medium |

**What you will build and prove:** Package, operate, break, and diagnose a real service without hiding behind an orchestrator.

**What you will practice:** Linux processes, systemd, permissions, filesystems, DNS/TCP/HTTP, shell automation, logs, runbooks

**Steps to follow:**

1. Install a small HTTP service under a dedicated non-login user and systemd unit
2. Add environment/config separation, log rotation, health check, resource limits, and graceful stop
3. Write idempotent install, verify, backup, and rollback scripts with useful exit codes
4. Inject wrong permissions, port conflict, DNS failure, full disk, bad config, and killed dependency
5. Diagnose with service/process/socket/filesystem/network evidence and record a timeline
6. Turn each failure into a check, alert, test, or runbook improvement

**You are finished when:** A clean host can be configured twice safely, another person can resolve two injected failures from the runbook, and no secret is committed.

**If you want an extra challenge:** Add a read-only operator command that collects a safe diagnostic bundle.

---

#### DEVOPS-02: Secure CI Artifact Pipeline

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 6-8, 16 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Convert a commit into one traceable, policy-checked artifact promoted through environments.

**What you will practice:** Git, build systems, CI, testing, caching, SBOM, signing, provenance, secrets, release strategies

**Steps to follow:**

1. Pin dependencies and create deterministic lint, test, integration, package, and scan commands
2. Build once, generate SBOM/provenance, sign the digest, and publish to a protected registry
3. Use isolated runners and short-lived identity rather than stored cloud keys
4. Promote the same digest to staging and production behind approval and health gates
5. Add concurrency cancellation, safe caches, artifact retention, and flake ownership
6. Rehearse rollback and deliberately block a vulnerable dependency, leaked secret, and tampered artifact

**You are finished when:** Source-to-running digest is auditable, a failed gate cannot publish/promote, median pipeline time is measured, and rollback uses the prior immutable artifact.

**If you want an extra challenge:** Produce a verifiable SLSA-style provenance statement.

---

#### DEVOPS-03: Container and Kubernetes GitOps Delivery

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 9-11, 17 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Operate a containerized service on Kubernetes through reviewed desired state and progressive delivery.

**What you will practice:** Docker, image hardening, Kubernetes controllers/services, probes, resources, policies, Helm/Kustomize, GitOps, canary

**Steps to follow:**

1. Build a pinned multi-stage non-root image that handles signals and contains no secret
2. Declare Deployment, Service, config/secret references, probes, requests/limits, disruption and network policy
3. Package environment differences without copying entire manifests
4. Reconcile deployment state from a protected Git branch and expose drift/status
5. Add canary or blue-green promotion using application health, not pod count alone
6. Inject CrashLoop, Pending, OOM, bad selector, failed readiness, and DNS/policy faults

**You are finished when:** Git history identifies every release, manual drift is detected/reconciled, rollback is timed, and the troubleshooting guide maps symptoms to controller/network evidence.

**If you want an extra challenge:** Add policy-as-code that blocks privileged, unpinned, or resource-less workloads.

---

#### DEVOPS-04: Observable SLO and Incident Platform

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 14-18 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Build the feedback and response loop around a service, then prove it during a game day.

**What you will practice:** metrics, logs, traces, OpenTelemetry, SLI/SLO, burn alerts, on-call, incidents, postmortems, capacity

**Steps to follow:**

1. Instrument a critical user path with correlated metrics, structured logs, and traces
2. Define availability/latency SLIs, an SLO, error budget, and cardinality/retention limits
3. Create a service dashboard plus multi-window burn and saturation alerts with runbooks
4. Load test to find the first bottleneck and create a capacity forecast
5. Run an incident with commander, operations, communications, timeline, and recovery roles
6. Write a blameless causal review whose actions have owners, dates, and verification

**You are finished when:** A page corresponds to user impact, evidence finds the fault across a dependency boundary, and one corrective action prevents or shortens a repeated incident.

**If you want an extra challenge:** Add automated rollback guarded by error-budget burn and a manual override.

---

#### DEVOPS-05: Production Delivery Platform Capstone

| Field | Detail |
| --- | --- |
| **Roadmap** | [`devops.md`](./devops.md) Phases 1-20 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Offer one paved road from repository creation to a secure, observable production service without hiding escape hatches.

**What you will practice:** platform product, templates, CI/CD, IaC, cloud, Kubernetes, secrets, policy, GitOps, SRE, documentation, adoption metrics

**Steps to follow:**

1. Interview two developer personas and define the repeated delivery problem and success metrics
2. Create a service template with build/test, signed artifact, IaC, deployment, telemetry, SLO, and runbook defaults
3. Provide self-service environment creation through scoped identity, quotas, budgets, and policy
4. Implement promotion, rollback, break-glass, drift, secret rotation, and deprecation workflows
5. Onboard two example services, measure time-to-first-deploy and developer friction, then improve the road
6. Publish ownership, support model, escape hatch, versioning, adoption, reliability, security, and cost evidence

**You are finished when:** A new service reaches a test environment from documented steps, production change is auditable/reversible, platform failure does not trap teams, and outcomes-not tool count-show value.

**If you want an extra challenge:** Add a scorecard that gives actionable feedback without becoming a vanity ranking.

---

## 11. Cross-cutting / Portfolio Capstones

**Why this project exists:** Combine two or more learning paths after you have finished their smaller projects. Keep these projects limited; they are not replacements for a complete business system used by a real company.

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
| **How challenging the project is** | Medium |

**What you will build and prove:** Small inventory service with products, stock movements, and REST API.

**What you will practice:** layered architecture, REST, SQL, domain invariants

**Steps to follow:**

1. Domain layer: Product, Warehouse, StockMove with quantity rules
2. Service layer orchestrates transactions
3. SQLite persistence; repository interfaces for testing
4. FastAPI or Flask REST endpoints
5. Tests on domain without HTTP
6. README architecture diagram with dependency direction

**You are finished when:**

- Cannot oversell stock in concurrent sequential tests
- API documented with curl examples

**If you want an extra challenge:**

- Optimistic locking on stock version column

---

#### CAP-02: Analytics Dashboard on App Database

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 14, [`Data.md`](./Data.md) Phases 8-10 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Read replica or nightly export from CAP-01 (or any CRUD app) into analyst mart.

**What you will practice:** ETL, star schema, visualization, metric alignment

**Steps to follow:**

1. Export OLTP tables to staging nightly
2. Build `fact_movements`, `dim_product` in warehouse DB
3. Pandas or SQL dashboard: stock turns, low-stock alerts
4. Align metric definitions with app team doc
5. Schedule via cron or Airflow mini-DAG
6. Public notebook or Streamlit read-only app

**You are finished when:**

- Numbers reconcile to source within documented tolerance
- README defines grain and refresh SLA

**If you want an extra challenge:**

- dbt tests on mart

---

#### CAP-03: Full-Stack App + Packet Capture Postmortem

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 13, [`Networks.md`](./Networks.md) Phases 13-15 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Deploy tiny app locally, capture login flow, narrate full stack in one write-up.

**What you will practice:** HTTP, TLS, DNS, debugging, full-stack integration

**Steps to follow:**

1. Deploy hello-auth app (CAP-01 API or minimal login)
2. Configure local DNS or hosts entry optional
3. Wireshark capture of successful and failed login
4. Annotate TCP, TLS, HTTP layers on one screenshot each
5. Tie to [`Interview.md`](./Interview.md) Track E URL question
6. Publish blog-style MD with diagrams

**You are finished when:**

- Reader sees code, packets, and prose in one repo
- Failure case explained with evidence

**If you want an extra challenge:**

- HTTP/2 capture comparison

---

#### CAP-04: RAG on Warehouse Documentation

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 10, [`AI.md`](./AI.md) Phase 15 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Ask natural language questions about your CAP-02 metrics and schema docs.

**What you will practice:** RAG, data catalog, eval, grounding

**Steps to follow:**

1. Corpus: schema YAML, metric definitions, EDA memos
2. Chunk and index; metadata tags per table
3. Chat UI returns answer + cited doc sections
4. Eval questions: "What is AOV grain?", "Which column is PII?"
5. Log retrieval misses; tune chunk boundaries
6. README compares manual catalog search vs RAG

**You are finished when:**

- 5/7 catalog questions answered with correct citation
- PII question refuses if not in corpus

**If you want an extra challenge:**

- SQL generation with human-in-loop approval

---

#### CAP-05: Odoo + External Analytics Sync

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md), [`Data.md`](./Data.md) Phase 13 |
| **How challenging the project is** | Hard |

**What you will build and prove:** Export Odoo sales data to warehouse on schedule; dashboard outside Odoo.

**What you will practice:** Odoo ORM read, ETL, API keys, idempotency

**Steps to follow:**

1. Odoo module or script: export orders since watermark
2. Load to Postgres staging via JSON lines
3. Transform to star schema (reuse DATA-E02 patterns)
4. Streamlit or Metabase chart: revenue by week
5. Secure credentials; read-only DB user for BI
6. Document field mapping Odoo -> warehouse

**You are finished when:**

- Dashboard updates after cron run
- Totals match Odoo sales report for test month

**If you want an extra challenge:**

- Webhook trigger on order confirm instead of poll

---

#### CAP-06: Interview Portfolio Site (Static)

| Field | Detail |
| --- | --- |
| **Roadmap** | All roadmaps Phase 19 portfolio clusters |
| **How challenging the project is** | Medium |

**What you will build and prove:** One GitHub Pages site linking projects, roadmaps, and speak-aloud demos.

**What you will practice:** technical writing, portfolio curation, CI

**Steps to follow:**

1. Static site generator or plain HTML/CSS
2. Sections per track with 2-3 best projects each
3. Each card: problem, stack, link, roadmap phases
4. Embed 60-second Loom or GIF for one LLD demo optional
5. Deploy via GitHub Actions on push
6. Link from resume and LinkedIn

**You are finished when:**

- Live HTTPS URL loads on mobile
- Every linked repo has README meeting Section 1 checklist

**If you want an extra challenge:**

- Blog post series explaining how one topic leads to the next

---

## 12. Interview Drill Projects

**File:** [`Interview.md`](./Interview.md)

**Why this project exists:** Timed **speak + build** reps. Each drill pairs a short build or diagram with spoken answers from the matching Interview track.

### Drill format (use every time)

| Step | Time | Action |
| --- | --- | --- |
| 1 | 5 min | Read linked Interview.md questions cold |
| 2 | 45-90 min | Build or diagram the smallest working result |
| 3 | 10 min | Speak answer 60-120 sec without notes |
| 4 | 5 min | One follow-up cold |
| 5 | 5 min | Update README "Interview notes" section |

---

#### INT-01: LRU + Complexity Speak (Track A)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 3, [`Interview.md`](./Interview.md) Track A |
| **How challenging the project is** | Medium |

**What you will build and prove:** Implement LRU Cache (CS-D03 lite, 90 min max) then explain Big O and trade-offs aloud.

**What you will practice:** timed coding, complexity narration, follow-ups

**Steps to follow:**

1. Set timer 90 minutes; build minimal LRU only
2. Record or transcribe 90-second explanation of get/put cost
3. Answer follow-up: "What if multithreaded?" without reading notes
4. Answer follow-up: "Why doubly linked list?"
5. Add "Interview notes" to repo with traps you hit
6. Link to Interview.md question ids if annotated in your fork

**You are finished when:**

- Code passes your handwritten tests
- Spoken answer names O(1) and memory cost

**If you want an extra challenge:**

- Whiteboard version without IDE

---

#### INT-02: URL Bar Narrative + Sequence Diagram (Track C/E)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md), [`Interview.md`](./Interview.md) Track C/E |
| **How challenging the project is** | Easy |

**What you will build and prove:** Draw sequence diagram for HTTPS request; speak full path in 120 seconds.

**What you will practice:** system narration, DNS, TCP, TLS, HTTP

**Steps to follow:**

1. Pick one URL (your portfolio site)
2. Draw diagram: browser -> DNS -> TCP -> TLS -> HTTP -> server
3. Annotate 5 latency buckets
4. Speak answer using Interview.md skeleton (problem, mechanics, trade-off, failure)
5. Add one failure mode: DNS timeout
6. Commit diagram as PNG or Mermaid in repo

**You are finished when:**

- Diagram and spoken story match
- You mention caching at DNS and HTTP layers

**If you want an extra challenge:**

- HTTP/2 multiplexing paragraph

---

#### INT-03: SQL Window Drill (Track B)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 6, [`Interview.md`](./Interview.md) Track B |
| **How challenging the project is** | Medium |

**What you will build and prove:** Solve 3 window-function questions in 45 minutes; explain PARTITION BY aloud.

**What you will practice:** timed SQL, grain, speaking query logic

**Steps to follow:**

1. Use DATA-A03 database or public warehouse sample
2. Queries: running total, rank within group, dedupe latest row per id
3. 15 min each; no AI assistance
4. After each, speak how ORDER BY affects result
5. Document one wrong query and fix
6. Save in `interview_drills/sql_window.sql`

**You are finished when:**

- All three queries return correct row counts
- Spoken explanation distinguishes ROW_NUMBER vs RANK

**If you want an extra challenge:**

- Optimize one with index suggestion

---

#### INT-04: LLD Parking Lot Timed (Track A + OOP)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phase 18, [`Interview.md`](./Interview.md) Track A |
| **How challenging the project is** | Hard |

**What you will build and prove:** 45-minute design + 45-minute code for parking lot lite.

**What you will practice:** LLD interview pacing, class identification, extensibility

**Steps to follow:**

1. 0-10 min: clarify requirements out loud (vehicle types, payment?)
2. 10-25 min: class diagram and APIs on paper
3. 25-70 min: code core `park`/`unpark` paths only
4. 70-80 min: speak SOLID trade-offs you made
5. List 3 extensions interviewer might ask (multi-floor, concurrent)
6. Do not implement extensions unless time remains

**You are finished when:**

- Happy path works with tests
- Design doc photographed or scanned in repo

**If you want an extra challenge:**

- Second drill next day on elevator problem cold

---

#### INT-05: RAG Architecture Whiteboard (Track D)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 15, [`Interview.md`](./Interview.md) Track D |
| **How challenging the project is** | Medium |

**What you will build and prove:** Whiteboard RAG pipeline; speak failure modes without building full system.

**What you will practice:** LLM system design, retrieval trade-offs, eval

**Steps to follow:**

1. Draw ingest, chunk, embed, store, retrieve, generate
2. Label 3 failure modes: bad chunks, wrong retrieval, hallucination
3. Speak mitigations: hybrid search, citations, eval set
4. Optional: implement smallest retrieve-only script (no LLM)
5. Compare RAG vs fine-tune in 30-second closing
6. Save photo + bullet outline in repo

**You are finished when:**

- 90-second spoken answer fits Interview.md Track D structure
- You name latency and cost drivers

**If you want an extra challenge:**

- Add eval metric definition on slide

---

#### INT-06: STAR Story Backed by Repo (Track F)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Interview.md`](./Interview.md) Track F |
| **How challenging the project is** | Easy |

**What you will build and prove:** Pick one finished project and rehearse two STAR stories that include measured results.

**What you will practice:** behavioral, storytelling, evidence

**Steps to follow:**

1. Choose project with real friction (bug, scope cut, teamwork)
2. Write Situation/Task/Action/Result bullets
3. Quantify result (time saved, tests added, users)
4. Record 2-minute spoken story
5. Map story to resume bullet
6. Store `interview_drills/star_project_x.md` (no private employer secrets)

**You are finished when:**

- Story under 2 minutes; Result has number or observable outcome
- Action mentions your specific contribution

**If you want an extra challenge:**

- Second story on failure and learning

---

#### INT-07: Debug a Broken Microservice (Track E)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 11-13, [`Interview.md`](./Interview.md) Track E |
| **How challenging the project is** | Hard |

**What you will build and prove:** Given intentionally buggy two-service demo, find root cause under time box.

**What you will practice:** debugging narrative, logs, HTTP tracing, systematic isolation

**Steps to follow:**

1. Clone or create two-container demo: api + db or api + worker
2. Plant one bug (wrong env var, timeout, off-by-one pagination)
3. Partner or past-you writes bug; you debug in 60 min
4. Document hypothesis -> test -> result log
5. Speak postmortem: blast radius, fix, prevention
6. Add regression test in fix PR

**You are finished when:**

- Root cause correct; fix has test
- Spoken postmortem under 3 minutes

**If you want an extra challenge:**

- Add OpenTelemetry span around failing call

---

## Curated Inspiration

Project prompts curated with **Composio** (YouTube and GitHub). The phase navigator uses 40 validated public videos plus track-specific repositories and project collections. Use them for inspiration-implement your own code and README.

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
| [CNCF Landscape](https://landscape.cncf.io/) | Explore the wider set of DevOps tools after learning the fundamentals |
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

**Mohammad Bilal** - Projects playbook for the Interview Help repository. Theory lives in the roadmaps; proof lives in your project folders. Finish something small, explain it clearly, and practice aloud.

*Pair with:* [`README.md`](./README.md) · [`OOP.md`](./OOP.md) · [`CS.md`](./CS.md) · [`Data.md`](./Data.md) · [`Networks.md`](./Networks.md) · [`AI.md`](./AI.md) · [`ODOO.md`](./ODOO.md) · [`Web.md`](./Web.md) · [`cloud.md`](./cloud.md) · [`devops.md`](./devops.md) · [`Interview.md`](./Interview.md)
