# Course Profile: Computer Science (`CS.md`)

Extends [Learning Content Standard](../LEARNING_CONTENT_STANDARD.md).

## Audience and outcome

Self-paced learner from true zero to professional-ready CS/SE: programming, math, OOP, DSA, systems, networks, data, security, engineering practice, distributed systems, capstone, interviews.

## Storytelling shape

15 stories; each answers one learner question (see Story Map in `CS.md`). Phases 1–105.

**Journey first:** Prefer narrative bridges over isolated topic dumps. Each phase should continue the previous mental model and create the need for the next. The authoring checklist constrains Cursor; the learner should not see an identical heading skeleton on every page.

## Dominant teaching emphasis (authoring — not a UI form)

| Story band | Emphasize in the *writing* |
| ---------- | -------------------------- |
| I–III | Motivation + mechanism + practice (math: paper traces); contextual titles when a heading helps |
| IV (OOP) | Mechanism + worked example + trade-offs; patterns must still teach first-timers |
| V (DSA) | Mechanism + visual traces + complexity + practice; protect traces |
| VI | Systems mechanisms and diagrams; OS handles |
| VII | Packet / web journeys (layers → TCP/UDP → DNS → HTTP → APIs); not cloud/distributed early |
| VIII | Data persistence (files → DBMS → query/transactions) |
| IX–XI | Security/SE/design judgment; scenarios |
| XII–XV | Survey / maintenance / capstone / interview application |

Do **not** force every lesson to display Why → Problem → How → Visual → Example. Use continuous prose + selective contextual headings (`**FROM THE SOCKET TO THE NETWORK:**`).

## Prerequisite boxes

Follow the platform **Prerequisite box rule**: short orientation only. Put callbacks in opening prose (backward bridges).

## Narrative closers

Every lesson with a next concept ends Practice → **What Comes Next** (contextual body) → navigation. Story-ending handoffs are stronger than ordinary transitions. See the platform **Narrative closer** rule.

## Protected content (do not lean away)

- Algorithm walkthroughs, complexity tables, hand traces, correctness/invariants
- ISA / memory / filesystem / protocol mechanism diagrams
- Ownership boundaries (e.g. 54 vs 56 sockets)
- Unique playground fence IDs
- Journey continuity across story boundaries (e.g. 54→59→60)

## Practice / playground policy

Prefer the standard’s practice catalog. Typical CS mix:

- Predict output, debugging, comparison, written explanation (foundations)
- Architecture/design (Story IV, XI)
- Packet inspection / database query (VII–VIII)
- Mini-projects only when building teaches (`Projects.md`)
- Coding playgrounds when execution teaches

## Resource policy

Phase-level Learning Resources (3–6). Prefer verified links when adding new ones.

## Non-goals

No specialist tracks for completeness (full K8s, pen-testing course, master’s compilers, LLM-only AI).
No redesign of the 105-phase hierarchy to chase presentation fashion.
