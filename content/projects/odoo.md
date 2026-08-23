# Odoo Chapter Projects

One required applied project follows every chapter in the [Odoo roadmap](../roadmaps/ODOO.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## I. Understand the business before the code

**Shared unit storyline:** Keep one workspace for I. Understand the business before the code. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-1-project"></a>
### ODOO CHAPTER 1 PROJECT

#### PROJECT: WHAT IS ERP? WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Explain ERP as one shared system of business truth — name processes, departments, master data, and transactions — contrast ERP with CRM, and sketch how a small company would run without spreadsheet chaos.

**Chapter topic:** What Is ERP?

**Unit storyline:** Continue the **I. Understand the business before the code** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for What Is ERP? that connects Business Processes, Departments, Cross-Department Workflows and makes every important result inspectable.

#### LESSONS PRACTICED

- **1.1 — Business Processes:** Implement or demonstrate Business Processes in the shared unit project and add a focused check.
- **1.2 — Departments:** Implement or demonstrate Departments in the shared unit project and add a focused check.
- **1.3 — Cross-Department Workflows:** Implement or demonstrate Cross-Department Workflows in the shared unit project and add a focused check.
- **1.4 — Master Data:** Implement or demonstrate Master Data in the shared unit project and add a focused check.
- **1.5 — Transactions:** Implement or demonstrate Transactions in the shared unit project and add a focused check.
- **1.6 — Single Source of Truth:** Implement or demonstrate Single Source of Truth in the shared unit project and add a focused check.
- **1.7 — ERP vs CRM:** Implement or demonstrate ERP vs CRM in the shared unit project and add a focused check.
- **1.8 — ERP vs Standalone Business Software:** Implement or demonstrate ERP vs Standalone Business Software in the shared unit project and add a focused check.
- **1.9 — PRACTICE — Model a Small Company:** Implement or demonstrate PRACTICE — Model a Small Company in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for What Is ERP? that connects Business Processes, Departments, Cross-Department Workflows and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for What Is ERP?.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared I. Understand the business before the code unit workspace under odoo/story-1.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for What Is ERP? that connects Business Processes, Departments, Cross-Department Workflows and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-1/chapter-1-what-is-erp-workbench
git commit -m "feat(what-is-erp-workbench): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 1](../roadmaps/ODOO.md#phase-1) | [CONTINUE TO ODOO CHAPTER 2](../roadmaps/ODOO.md#phase-2)


<a id="odoo-phase-2-project"></a>
### ODOO CHAPTER 2 PROJECT

#### PROJECT: UNDERSTANDING ODOO WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Distinguish Community from Enterprise, explain apps vs modules/addons, describe users and multi-company, name the shared business records that glue apps together, and navigate a real Odoo database with intent.

**Chapter topic:** Understanding Odoo

**Unit storyline:** Continue the **I. Understand the business before the code** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Understanding Odoo that connects What Odoo Is, Odoo Ecosystem, Community Edition and makes every important result inspectable.

#### LESSONS PRACTICED

- **2.1 — What Odoo Is:** Implement or demonstrate What Odoo Is in the shared unit project and add a focused check.
- **2.2 — Odoo Ecosystem:** Implement or demonstrate Odoo Ecosystem in the shared unit project and add a focused check.
- **2.3 — Community Edition:** Implement or demonstrate Community Edition in the shared unit project and add a focused check.
- **2.4 — Enterprise Edition:** Implement or demonstrate Enterprise Edition in the shared unit project and add a focused check.
- **2.5 — Odoo Apps:** Implement or demonstrate Odoo Apps in the shared unit project and add a focused check.
- **2.6 — Modules / Addons:** Implement or demonstrate Modules / Addons in the shared unit project and add a focused check.
- **2.7 — Users:** Implement or demonstrate Users in the shared unit project and add a focused check.
- **2.8 — Companies:** Implement or demonstrate Companies in the shared unit project and add a focused check.
- **2.9 — Shared Business Records:** Implement or demonstrate Shared Business Records in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Understanding Odoo that connects What Odoo Is, Odoo Ecosystem, Community Edition and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Understanding Odoo.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared I. Understand the business before the code unit workspace under odoo/story-1.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Understanding Odoo that connects What Odoo Is, Odoo Ecosystem, Community Edition and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-1/chapter-2-understanding-odoo-workbench
git commit -m "feat(understanding-odoo-workbench): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 2](../roadmaps/ODOO.md#phase-2) | [CONTINUE TO ODOO CHAPTER 3](../roadmaps/ODOO.md#phase-3)


<a id="odoo-phase-3-project"></a>
### ODOO CHAPTER 3 PROJECT

#### PROJECT: ERP PROCESS MAP

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Describe what Contacts, CRM, Sales, Purchase, Inventory, Accounting, and Employees each own; trace a quote through delivery to invoice on shared partners/products; and spot where custom modules usually plug in later.

**Chapter topic:** Core Business Applications

**Unit storyline:** Continue the **I. Understand the business before the code** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build ERP Process Map as a focused exercise for ERP Thinking. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **3.1 — Contacts:** Implement or demonstrate Contacts in the shared unit project and add a focused check.
- **3.2 — CRM:** Implement or demonstrate CRM in the shared unit project and add a focused check.
- **3.3 — Sales:** Implement or demonstrate Sales in the shared unit project and add a focused check.
- **3.4 — Purchase:** Implement or demonstrate Purchase in the shared unit project and add a focused check.
- **3.5 — Inventory:** Implement or demonstrate Inventory in the shared unit project and add a focused check.
- **3.6 — Accounting:** Implement or demonstrate Accounting in the shared unit project and add a focused check.
- **3.7 — Employees / HR:** Implement or demonstrate Employees / HR in the shared unit project and add a focused check.
- **3.8 — Projects:** Implement or demonstrate Projects in the shared unit project and add a focused check.
- **3.9 — Manufacturing:** Implement or demonstrate Manufacturing in the shared unit project and add a focused check.
- **3.10 — PRACTICE — Trace Quote → Delivery → Invoice:** Implement or demonstrate PRACTICE — Trace Quote → Delivery → Invoice in the shared unit project and add a focused check.

#### SPECIFICATION

- Map a purchase-to-stock or class-registration process with actors, records, approvals, reports, pain points, and the Odoo apps that own each step.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Map a purchase-to-stock or class-registration process with actors, records, approvals, reports, pain points, and the Odoo apps that own each step.
- Define one realistic scenario, its boundaries, and the intended reader for the ERP Process Map.
- Collect or create the exact inputs needed to apply ERP Thinking; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named erp_process_map with a manifest, models, security, views, data, and tests folders.
2. Map a purchase-to-stock or class-registration process with actors, records, approvals, reports, pain points, and the Odoo apps that own each step.
3. Collect or create the exact inputs needed to apply ERP Thinking; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for ERP Thinking.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-1/chapter-3-erp-process-map
git commit -m "feat(erp-process-map): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 3](../roadmaps/ODOO.md#phase-3) | [CONTINUE TO ODOO CHAPTER 4](../roadmaps/ODOO.md#phase-4)


## II. How Odoo actually works

**Shared unit storyline:** Keep one workspace for II. How Odoo actually works. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-4-project"></a>
### ODOO CHAPTER 4 PROJECT

#### PROJECT: REQUEST-TO-DATABASE TRACE

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Trace a browser action through the web client, Odoo server, PostgreSQL, and filestore; explain where addons and the registry sit; and sketch the three-tier picture without confusing “Odoo” with “the database alone.”.

**Chapter topic:** Odoo Architecture

**Unit storyline:** Continue the **II. How Odoo actually works** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Request-to-Database Trace as a focused exercise for Three-Tier Architecture. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **4.1 — Three-Tier Architecture:** Represent Three-Tier Architecture in the design and justify one decision that depends on it.
- **4.2 — Browser / Web Client:** Represent Browser / Web Client in the design and justify one decision that depends on it.
- **4.3 — Odoo Application Server:** Represent Odoo Application Server in the design and justify one decision that depends on it.
- **4.4 — PostgreSQL:** Represent PostgreSQL in the design and justify one decision that depends on it.
- **4.5 — Filestore:** Represent Filestore in the design and justify one decision that depends on it.
- **4.6 — Addons:** Represent Addons in the design and justify one decision that depends on it.
- **4.7 — Registry:** Represent Registry in the design and justify one decision that depends on it.
- **4.8 — ORM:** Represent ORM in the design and justify one decision that depends on it.
- **4.9 — HTTP Layer:** Represent HTTP Layer in the design and justify one decision that depends on it.
- **4.10 — LAB — Trace Browser → Server → Database:** Represent LAB — Trace Browser → Server → Database in the design and justify one decision that depends on it.

#### SPECIFICATION

- Trace one Odoo screen load from browser request through controller, model/ORM query, PostgreSQL, view rendering, and response.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Trace one Odoo screen load from browser request through controller, model/ORM query, PostgreSQL, view rendering, and response.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use Three-Tier Architecture to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named request_to_database_trace with a manifest, models, security, views, data, and tests folders.
2. Trace one Odoo screen load from browser request through controller, model/ORM query, PostgreSQL, view rendering, and response.
3. Use Three-Tier Architecture to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for Three-Tier Architecture.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-2/chapter-4-request-to-database-trace
git commit -m "feat(request-to-database-trace): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 4](../roadmaps/ODOO.md#phase-4) | [CONTINUE TO ODOO CHAPTER 5](../roadmaps/ODOO.md#phase-5)


<a id="odoo-phase-5-project"></a>
### ODOO CHAPTER 5 PROJECT

#### PROJECT: REPRODUCIBLE ODOO DEV STACK

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Prepare a Python environment, PostgreSQL, and Odoo source; write a working configuration with addons_path; enable developer mode; read logs; and run Odoo locally for module work.

**Chapter topic:** Development Environment

**Unit storyline:** Continue the **II. How Odoo actually works** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reproducible Odoo Dev Stack as a focused exercise for Development Environment. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **5.1 — Python Environment:** Implement or demonstrate Python Environment in the shared unit project and add a focused check.
- **5.2 — PostgreSQL Setup:** Implement or demonstrate PostgreSQL Setup in the shared unit project and add a focused check.
- **5.3 — Odoo Source:** Implement or demonstrate Odoo Source in the shared unit project and add a focused check.
- **5.4 — Configuration File:** Implement or demonstrate Configuration File in the shared unit project and add a focused check.
- **5.5 — addons_path:** Implement or demonstrate addons_path in the shared unit project and add a focused check.
- **5.6 — Custom Addons Directory:** Implement or demonstrate Custom Addons Directory in the shared unit project and add a focused check.
- **5.7 — Developer Mode:** Implement or demonstrate Developer Mode in the shared unit project and add a focused check.
- **5.8 — Debug Assets Mode:** Implement or demonstrate Debug Assets Mode in the shared unit project and add a focused check.
- **5.9 — Logging:** Implement or demonstrate Logging in the shared unit project and add a focused check.
- **5.10 — LAB — Run Odoo Locally:** Implement or demonstrate LAB — Run Odoo Locally in the shared unit project and add a focused check.

#### SPECIFICATION

- Create a repeatable Odoo Community and PostgreSQL local environment with addons path, config, demo database, logs, and one-command start.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create a repeatable Odoo Community and PostgreSQL local environment with addons path, config, demo database, logs, and one-command start.
- Give the user one clear main action and keep all other features secondary.
- Use Development Environment in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named reproducible_odoo_dev_stack with a manifest, models, security, views, data, and tests folders.
2. Create a repeatable Odoo Community and PostgreSQL local environment with addons path, config, demo database, logs, and one-command start.
3. Use Development Environment in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Development Environment.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-2/chapter-5-reproducible-odoo-dev-stack
git commit -m "feat(reproducible-odoo-dev-stack): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 5](../roadmaps/ODOO.md#phase-5) | [CONTINUE TO ODOO CHAPTER 6](../roadmaps/ODOO.md#phase-6)


<a id="odoo-phase-6-project"></a>
### ODOO CHAPTER 6 PROJECT

#### PROJECT: ODOO SOURCE CODE STRUCTURE WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Orient inside the Odoo repository: core odoo/ package vs addons/, where models, HTTP, and services live, how the registry is populated from code, and find files on purpose instead of by desperate search.

**Chapter topic:** Odoo Source Code Structure

**Unit storyline:** Continue the **II. How Odoo actually works** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Odoo Source Code Structure that connects odoo/, addons/, Core Framework and makes every important result inspectable.

#### LESSONS PRACTICED

- **6.1 — odoo/:** Implement or demonstrate odoo/ in the shared unit project and add a focused check.
- **6.2 — addons/:** Implement or demonstrate addons/ in the shared unit project and add a focused check.
- **6.3 — Core Framework:** Implement or demonstrate Core Framework in the shared unit project and add a focused check.
- **6.4 — Models:** Implement or demonstrate Models in the shared unit project and add a focused check.
- **6.5 — HTTP:** Implement or demonstrate HTTP in the shared unit project and add a focused check.
- **6.6 — Services:** Implement or demonstrate Services in the shared unit project and add a focused check.
- **6.7 — Tools:** Implement or demonstrate Tools in the shared unit project and add a focused check.
- **6.8 — Registry:** Implement or demonstrate Registry in the shared unit project and add a focused check.
- **6.9 — Reading Official Addons:** Implement or demonstrate Reading Official Addons in the shared unit project and add a focused check.
- **6.10 — PRACTICE — Navigate the Odoo Repository:** Implement or demonstrate PRACTICE — Navigate the Odoo Repository in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Odoo Source Code Structure that connects odoo/, addons/, Core Framework and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Odoo Source Code Structure.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared II. How Odoo actually works unit workspace under odoo/story-2.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Odoo Source Code Structure that connects odoo/, addons/, Core Framework and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-2/chapter-6-odoo-source-code-structure-workbench
git commit -m "feat(odoo-source-code-structure-workbench): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 6](../roadmaps/ODOO.md#phase-6) | [CONTINUE TO ODOO CHAPTER 7](../roadmaps/ODOO.md#phase-7)


## III. Your first Odoo module

**Shared unit storyline:** Keep one workspace for III. Your first Odoo module. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-7-project"></a>
### ODOO CHAPTER 7 PROJECT

#### PROJECT: MINIMAL TODO ADDON

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Explain every standard folder in an Odoo addon, author a minimal __manifest__.py and __init__.py, place models/views/security/data/static correctly, and ship a “Hello Odoo” module that installs cleanly.

**Chapter topic:** Module Anatomy

**Unit storyline:** Continue the **III. Your first Odoo module** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Minimal Todo Addon as a focused exercise for Module Anatomy. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **7.1 — Addon Directory:** Implement or demonstrate Addon Directory in the shared unit project and add a focused check.
- **7.2 — __manifest__.py:** Implement or demonstrate __manifest__.py in the shared unit project and add a focused check.
- **7.3 — __init__.py:** Implement or demonstrate __init__.py in the shared unit project and add a focused check.
- **7.4 — models/:** Implement or demonstrate models/ in the shared unit project and add a focused check.
- **7.5 — views/:** Implement or demonstrate views/ in the shared unit project and add a focused check.
- **7.6 — security/:** Implement or demonstrate security/ in the shared unit project and add a focused check.
- **7.7 — data/:** Implement or demonstrate data/ in the shared unit project and add a focused check.
- **7.8 — demo/:** Implement or demonstrate demo/ in the shared unit project and add a focused check.
- **7.9 — static/:** Implement or demonstrate static/ in the shared unit project and add a focused check.
- **7.10 — controllers/:** Implement or demonstrate controllers/ in the shared unit project and add a focused check.
- **7.11 — wizard/:** Implement or demonstrate wizard/ in the shared unit project and add a focused check.
- **7.12 — report/:** Implement or demonstrate report/ in the shared unit project and add a focused check.
- **7.13 — i18n/:** Implement or demonstrate i18n/ in the shared unit project and add a focused check.
- **7.14 — MINI PROJECT — Hello Odoo:** Implement or demonstrate MINI PROJECT — Hello Odoo in the shared unit project and add a focused check.

#### SPECIFICATION

- Build an installable todo addon with manifest, model, ACL, list/form/search views, action, menu, demo record, and upgrade command.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build an installable todo addon with manifest, model, ACL, list/form/search views, action, menu, demo record, and upgrade command.
- Give the user one clear main action and keep all other features secondary.
- Use Module Anatomy in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named minimal_todo_addon with a manifest, models, security, views, data, and tests folders.
2. Build an installable todo addon with manifest, model, ACL, list/form/search views, action, menu, demo record, and upgrade command.
3. Use Module Anatomy in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Module Anatomy.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-3/chapter-7-minimal-todo-addon
git commit -m "feat(minimal-todo-addon): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 7](../roadmaps/ODOO.md#phase-7) | [CONTINUE TO ODOO CHAPTER 8](../roadmaps/ODOO.md#phase-8)


<a id="odoo-phase-8-project"></a>
### ODOO CHAPTER 8 PROJECT

#### PROJECT: MODULE LIFECYCLE WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Manage depends, install/upgrade/uninstall with intent, predict data load order effects, and use -i / -u (or Apps UI) safely on a training database.

**Chapter topic:** Module Lifecycle

**Unit storyline:** Continue the **III. Your first Odoo module** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Module Lifecycle that connects Module Discovery, Dependencies, Installation and makes every important result inspectable.

#### LESSONS PRACTICED

- **8.1 — Module Discovery:** Implement or demonstrate Module Discovery in the shared unit project and add a focused check.
- **8.2 — Dependencies:** Implement or demonstrate Dependencies in the shared unit project and add a focused check.
- **8.3 — Installation:** Implement or demonstrate Installation in the shared unit project and add a focused check.
- **8.4 — Initialization:** Implement or demonstrate Initialization in the shared unit project and add a focused check.
- **8.5 — Upgrade:** Implement or demonstrate Upgrade in the shared unit project and add a focused check.
- **8.6 — Uninstall:** Implement or demonstrate Uninstall in the shared unit project and add a focused check.
- **8.7 — Data Load Order:** Implement or demonstrate Data Load Order in the shared unit project and add a focused check.
- **8.8 — Application Flag:** Implement or demonstrate Application Flag in the shared unit project and add a focused check.
- **8.9 — Installable Flag:** Implement or demonstrate Installable Flag in the shared unit project and add a focused check.
- **8.10 — LAB — Install & Upgrade Your Module:** Implement or demonstrate LAB — Install & Upgrade Your Module in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Module Lifecycle that connects Module Discovery, Dependencies, Installation and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Module Lifecycle.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared III. Your first Odoo module unit workspace under odoo/story-3.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Module Lifecycle that connects Module Discovery, Dependencies, Installation and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-3/chapter-8-module-lifecycle-workbench
git commit -m "feat(module-lifecycle-workbench): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 8](../roadmaps/ODOO.md#phase-8) | [CONTINUE TO ODOO CHAPTER 9](../roadmaps/ODOO.md#phase-9)


## IV. Modeling business data

**Shared unit storyline:** Keep one workspace for IV. Modeling business data. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-9-project"></a>
### ODOO CHAPTER 9 PROJECT

#### PROJECT: LIBRARY DOMAIN MODELS

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Define a persistent Odoo model with models.Model, set _name, _description, and _rec_name, register it through the module import chain, and ship a first library book model that creates a real PostgreSQL table.

**Chapter topic:** Models

**Unit storyline:** Continue the **IV. Modeling business data** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Library Domain Models as a focused exercise for Models and Fields. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **9.1 — models.Model:** Implement or demonstrate models.Model in the shared unit project and add a focused check.
- **9.2 — models.AbstractModel:** Implement or demonstrate models.AbstractModel in the shared unit project and add a focused check.
- **9.3 — models.TransientModel:** Implement or demonstrate models.TransientModel in the shared unit project and add a focused check.
- **9.4 — _name:** Implement or demonstrate _name in the shared unit project and add a focused check.
- **9.5 — _description:** Implement or demonstrate _description in the shared unit project and add a focused check.
- **9.6 — _rec_name:** Implement or demonstrate _rec_name in the shared unit project and add a focused check.
- **9.7 — _order:** Implement or demonstrate _order in the shared unit project and add a focused check.
- **9.8 — Automatic Fields:** Implement or demonstrate Automatic Fields in the shared unit project and add a focused check.
- **9.9 — Reserved Field Names:** Implement or demonstrate Reserved Field Names in the shared unit project and add a focused check.
- **9.10 — MINI PROJECT — Library Model:** Implement or demonstrate MINI PROJECT — Library Model in the shared unit project and add a focused check.

#### SPECIFICATION

- Model library books, authors, copies, members, and loans with correct field types, relationships, constraints, computed fields, and defaults.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Model library books, authors, copies, members, and loans with correct field types, relationships, constraints, computed fields, and defaults.
- Give the user one clear main action and keep all other features secondary.
- Use Models and Fields in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named library_domain_models with a manifest, models, security, views, data, and tests folders.
2. Model library books, authors, copies, members, and loans with correct field types, relationships, constraints, computed fields, and defaults.
3. Use Models and Fields in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Models and Fields.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-4/chapter-9-library-domain-models
git commit -m "feat(library-domain-models): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 9](../roadmaps/ODOO.md#phase-9) | [CONTINUE TO ODOO CHAPTER 10](../roadmaps/ODOO.md#phase-10)


<a id="odoo-phase-10-project"></a>
### ODOO CHAPTER 10 PROJECT

#### PROJECT: FIELDS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Choose and declare the right basic field types for business data — Char, Text, Integer, Float, Boolean, Date, Datetime, Selection, Monetary — with string, required, default, and help, and model realistic library / sales-style records.

**Chapter topic:** Fields

**Unit storyline:** Continue the **IV. Modeling business data** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Fields that connects Char, Text, Html and makes every important result inspectable.

#### LESSONS PRACTICED

- **10.1 — Char:** Implement or demonstrate Char in the shared unit project and add a focused check.
- **10.2 — Text:** Implement or demonstrate Text in the shared unit project and add a focused check.
- **10.3 — Html:** Implement or demonstrate Html in the shared unit project and add a focused check.
- **10.4 — Integer:** Implement or demonstrate Integer in the shared unit project and add a focused check.
- **10.5 — Float:** Implement or demonstrate Float in the shared unit project and add a focused check.
- **10.6 — Boolean:** Implement or demonstrate Boolean in the shared unit project and add a focused check.
- **10.7 — Date:** Implement or demonstrate Date in the shared unit project and add a focused check.
- **10.8 — Datetime:** Implement or demonstrate Datetime in the shared unit project and add a focused check.
- **10.9 — Selection:** Implement or demonstrate Selection in the shared unit project and add a focused check.
- **10.10 — Monetary:** Implement or demonstrate Monetary in the shared unit project and add a focused check.
- **10.11 — Binary:** Implement or demonstrate Binary in the shared unit project and add a focused check.
- **10.12 — Image:** Implement or demonstrate Image in the shared unit project and add a focused check.
- **10.13 — Field Attributes:** Implement or demonstrate Field Attributes in the shared unit project and add a focused check.
- **10.14 — PRACTICE — Model Business Records:** Implement or demonstrate PRACTICE — Model Business Records in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Fields that connects Char, Text, Html and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Fields.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared IV. Modeling business data unit workspace under odoo/story-4.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Fields that connects Char, Text, Html and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-4/chapter-10-fields-workbench
git commit -m "feat(fields-workbench): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 10](../roadmaps/ODOO.md#phase-10) | [CONTINUE TO ODOO CHAPTER 11](../roadmaps/ODOO.md#phase-11)


<a id="odoo-phase-11-project"></a>
### ODOO CHAPTER 11 PROJECT

#### PROJECT: RELATIONSHIPS DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Model Many2one, One2many, and Many2many links correctly, expose related fields for denormalized display, and draw a coherent business data graph for a library or sales domain.

**Chapter topic:** Relationships

**Unit storyline:** Continue the **IV. Modeling business data** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Relationships that connects Many2one, One2many, Many2many and makes every important result inspectable.

#### LESSONS PRACTICED

- **11.1 — Many2one:** Represent Many2one in the design and justify one decision that depends on it.
- **11.2 — One2many:** Represent One2many in the design and justify one decision that depends on it.
- **11.3 — Many2many:** Represent Many2many in the design and justify one decision that depends on it.
- **11.4 — Related Fields:** Represent Related Fields in the design and justify one decision that depends on it.
- **11.5 — Relational Commands:** Represent Relational Commands in the design and justify one decision that depends on it.
- **11.6 — Command.create():** Represent Command.create() in the design and justify one decision that depends on it.
- **11.7 — Command.update():** Represent Command.update() in the design and justify one decision that depends on it.
- **11.8 — Command.delete():** Represent Command.delete() in the design and justify one decision that depends on it.
- **11.9 — Command.unlink():** Represent Command.unlink() in the design and justify one decision that depends on it.
- **11.10 — Command.link():** Represent Command.link() in the design and justify one decision that depends on it.
- **11.11 — Command.clear():** Represent Command.clear() in the design and justify one decision that depends on it.
- **11.12 — Command.set():** Represent Command.set() in the design and justify one decision that depends on it.
- **11.13 — DESIGN PROJECT — Business Data Graph:** Represent DESIGN PROJECT — Business Data Graph in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Relationships that connects Many2one, One2many, Many2many and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Relationships.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared IV. Modeling business data unit workspace under odoo/story-4.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Relationships that connects Many2one, One2many, Many2many and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-4/chapter-11-relationships-design-studio
git commit -m "feat(relationships-design-studio): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 11](../roadmaps/ODOO.md#phase-11) | [CONTINUE TO ODOO CHAPTER 12](../roadmaps/ODOO.md#phase-12)


<a id="odoo-phase-12-project"></a>
### ODOO CHAPTER 12 PROJECT

#### PROJECT: COMPUTED & DYNAMIC FIELDS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Implement compute methods with @api.depends, choose store, add inverse and search when needed, and ship automatic business calculations (loan duration, order totals) without hand-maintained duplicate numbers.

**Chapter topic:** Computed & Dynamic Fields

**Unit storyline:** Continue the **IV. Modeling business data** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Computed & Dynamic Fields that connects compute, @api.depends, Stored Computed Fields and makes every important result inspectable.

#### LESSONS PRACTICED

- **12.1 — compute:** Implement or demonstrate compute in the shared unit project and add a focused check.
- **12.2 — @api.depends:** Implement or demonstrate @api.depends in the shared unit project and add a focused check.
- **12.3 — Stored Computed Fields:** Implement or demonstrate Stored Computed Fields in the shared unit project and add a focused check.
- **12.4 — Non-Stored Fields:** Implement or demonstrate Non-Stored Fields in the shared unit project and add a focused check.
- **12.5 — inverse:** Implement or demonstrate inverse in the shared unit project and add a focused check.
- **12.6 — Custom Search Methods:** Implement or demonstrate Custom Search Methods in the shared unit project and add a focused check.
- **12.7 — Related Fields:** Implement or demonstrate Related Fields in the shared unit project and add a focused check.
- **12.8 — Default Values:** Implement or demonstrate Default Values in the shared unit project and add a focused check.
- **12.9 — copy:** Implement or demonstrate copy in the shared unit project and add a focused check.
- **12.10 — LAB — Automatic Business Calculations:** Implement or demonstrate LAB — Automatic Business Calculations in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Computed & Dynamic Fields that connects compute, @api.depends, Stored Computed Fields and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Computed & Dynamic Fields.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared IV. Modeling business data unit workspace under odoo/story-4.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Computed & Dynamic Fields that connects compute, @api.depends, Stored Computed Fields and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-4/chapter-12-computed-dynamic-fields-workbench
git commit -m "feat(computed-dynamic-fields-workbench): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 12](../roadmaps/ODOO.md#phase-12) | [CONTINUE TO ODOO CHAPTER 13](../roadmaps/ODOO.md#phase-13)


## V. Mastering the Odoo ORM

**Shared unit storyline:** Keep one workspace for V. Mastering the Odoo ORM. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-13-project"></a>
### ODOO CHAPTER 13 PROJECT

#### PROJECT: ENVIRONMENT & RECORDSETS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Navigate env and self, reason about recordsets (empty, singleton, multi), read and extend context, and correctly use the current user and company when writing business code.

**Chapter topic:** Environment & Recordsets

**Unit storyline:** Continue the **V. Mastering the Odoo ORM** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Environment & Recordsets that connects env, self, Recordsets and makes every important result inspectable.

#### LESSONS PRACTICED

- **13.1 — env:** Implement or demonstrate env in the shared unit project and add a focused check.
- **13.2 — self:** Implement or demonstrate self in the shared unit project and add a focused check.
- **13.3 — Recordsets:** Implement or demonstrate Recordsets in the shared unit project and add a focused check.
- **13.4 — Empty Recordsets:** Implement or demonstrate Empty Recordsets in the shared unit project and add a focused check.
- **13.5 — Singleton Records:** Implement or demonstrate Singleton Records in the shared unit project and add a focused check.
- **13.6 — env.user:** Implement or demonstrate env.user in the shared unit project and add a focused check.
- **13.7 — env.company:** Implement or demonstrate env.company in the shared unit project and add a focused check.
- **13.8 — env.companies:** Implement or demonstrate env.companies in the shared unit project and add a focused check.
- **13.9 — Context:** Implement or demonstrate Context in the shared unit project and add a focused check.
- **13.10 — with_context():** Implement or demonstrate with_context() in the shared unit project and add a focused check.
- **13.11 — with_user():** Implement or demonstrate with_user() in the shared unit project and add a focused check.
- **13.12 — with_company():** Implement or demonstrate with_company() in the shared unit project and add a focused check.
- **13.13 — sudo():** Implement or demonstrate sudo() in the shared unit project and add a focused check.
- **13.14 — with_env():** Implement or demonstrate with_env() in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Environment & Recordsets that connects env, self, Recordsets and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Environment & Recordsets.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared V. Mastering the Odoo ORM unit workspace under odoo/story-5.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Environment & Recordsets that connects env, self, Recordsets and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-5/chapter-13-environment-recordsets-workbench
git commit -m "feat(environment-recordsets-workbench): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 13](../roadmaps/ODOO.md#phase-13) | [CONTINUE TO ODOO CHAPTER 14](../roadmaps/ODOO.md#phase-14)


<a id="odoo-phase-14-project"></a>
### ODOO CHAPTER 14 PROJECT

#### PROJECT: RECORDSET QUERY EXPLORER

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Use create, browse, search, read, write, and unlink correctly on recordsets, including One2many/Many2many commands, and complete coding drills that mirror real library and sales operations.

**Chapter topic:** CRUD

**Unit storyline:** Continue the **V. Mastering the Odoo ORM** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Recordset Query Explorer as a focused exercise for ORM Queries. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **14.1 — create():** Add an executable create() procedure with verification and rollback or recovery guidance.
- **14.2 — browse():** Add an executable browse() procedure with verification and rollback or recovery guidance.
- **14.3 — search():** Add an executable search() procedure with verification and rollback or recovery guidance.
- **14.4 — search_fetch():** Add an executable search_fetch() procedure with verification and rollback or recovery guidance.
- **14.5 — read():** Add an executable read() procedure with verification and rollback or recovery guidance.
- **14.6 — write():** Add an executable write() procedure with verification and rollback or recovery guidance.
- **14.7 — unlink():** Add an executable unlink() procedure with verification and rollback or recovery guidance.
- **14.8 — copy():** Add an executable copy() procedure with verification and rollback or recovery guidance.
- **14.9 — exists():** Add an executable exists() procedure with verification and rollback or recovery guidance.
- **14.10 — CODING PRACTICE — CRUD Operations:** Add an executable CODING PRACTICE — CRUD Operations procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Create a query explorer that demonstrates search domains, mapped, filtered, sorted, grouped reads, batch updates, and recordset behavior.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create a query explorer that demonstrates search domains, mapped, filtered, sorted, grouped reads, batch updates, and recordset behavior.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by ORM Queries, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named recordset_query_explorer with a manifest, models, security, views, data, and tests folders.
2. Create a query explorer that demonstrates search domains, mapped, filtered, sorted, grouped reads, batch updates, and recordset behavior.
3. Show the part of the data or system explained by ORM Queries, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for ORM Queries.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-5/chapter-14-recordset-query-explorer
git commit -m "feat(recordset-query-explorer): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 14](../roadmaps/ODOO.md#phase-14) | [CONTINUE TO ODOO CHAPTER 15](../roadmaps/ODOO.md#phase-15)


<a id="odoo-phase-15-project"></a>
### ODOO CHAPTER 15 PROJECT

#### PROJECT: DOMAINS & SEARCHING WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Write correct domains with operators and AND/OR/NOT composition, use search, search_count, and search_read for business queries, and translate English questions into Odoo domains.

**Chapter topic:** Domains & Searching

**Unit storyline:** Continue the **V. Mastering the Odoo ORM** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Domains & Searching that connects Domain Syntax, Comparison Operators, in / not in and makes every important result inspectable.

#### LESSONS PRACTICED

- **15.1 — Domain Syntax:** Implement or demonstrate Domain Syntax in the shared unit project and add a focused check.
- **15.2 — Comparison Operators:** Implement or demonstrate Comparison Operators in the shared unit project and add a focused check.
- **15.3 — in / not in:** Implement or demonstrate in / not in in the shared unit project and add a focused check.
- **15.4 — like / ilike:** Implement or demonstrate like / ilike in the shared unit project and add a focused check.
- **15.5 — child_of / parent_of:** Implement or demonstrate child_of / parent_of in the shared unit project and add a focused check.
- **15.6 — AND:** Implement or demonstrate AND in the shared unit project and add a focused check.
- **15.7 — OR:** Implement or demonstrate OR in the shared unit project and add a focused check.
- **15.8 — NOT:** Implement or demonstrate NOT in the shared unit project and add a focused check.
- **15.9 — search_count():** Implement or demonstrate search_count() in the shared unit project and add a focused check.
- **15.10 — search_read():** Implement or demonstrate search_read() in the shared unit project and add a focused check.
- **15.11 — Ordering:** Implement or demonstrate Ordering in the shared unit project and add a focused check.
- **15.12 — Limit / Offset:** Implement or demonstrate Limit / Offset in the shared unit project and add a focused check.
- **15.13 — PRACTICE — Business Queries:** Implement or demonstrate PRACTICE — Business Queries in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Domains & Searching that connects Domain Syntax, Comparison Operators, in / not in and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Domains & Searching.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared V. Mastering the Odoo ORM unit workspace under odoo/story-5.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Domains & Searching that connects Domain Syntax, Comparison Operators, in / not in and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-5/chapter-15-domains-searching-workbench
git commit -m "feat(domains-searching-workbench): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 15](../roadmaps/ODOO.md#phase-15) | [CONTINUE TO ODOO CHAPTER 16](../roadmaps/ODOO.md#phase-16)


<a id="odoo-phase-16-project"></a>
### ODOO CHAPTER 16 PROJECT

#### PROJECT: RECORDSET OPERATIONS OPERATIONS RUNBOOK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Use filtered, mapped, sorted, and ensure_one fluently, and apply batch-friendly patterns that avoid naive Python loops over ORM chatter.

**Chapter topic:** Recordset Operations

**Unit storyline:** Continue the **V. Mastering the Odoo ORM** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Write and rehearse an operational runbook for Recordset Operations that connects Iteration, filtered(), filtered_domain() and makes every important result inspectable.

#### LESSONS PRACTICED

- **16.1 — Iteration:** Add an executable Iteration procedure with verification and rollback or recovery guidance.
- **16.2 — filtered():** Add an executable filtered() procedure with verification and rollback or recovery guidance.
- **16.3 — filtered_domain():** Add an executable filtered_domain() procedure with verification and rollback or recovery guidance.
- **16.4 — mapped():** Add an executable mapped() procedure with verification and rollback or recovery guidance.
- **16.5 — sorted():** Add an executable sorted() procedure with verification and rollback or recovery guidance.
- **16.6 — ensure_one():** Add an executable ensure_one() procedure with verification and rollback or recovery guidance.
- **16.7 — Recordset Union:** Add an executable Recordset Union procedure with verification and rollback or recovery guidance.
- **16.8 — Recordset Intersection:** Add an executable Recordset Intersection procedure with verification and rollback or recovery guidance.
- **16.9 — Recordset Difference:** Add an executable Recordset Difference procedure with verification and rollback or recovery guidance.
- **16.10 — Batch Operations:** Add an executable Batch Operations procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Recordset Operations that connects Iteration, filtered(), filtered_domain() and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused runbook artifact for Recordset Operations.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo environment.
- Markdown for evidence and rollback.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared V. Mastering the Odoo ORM unit workspace under odoo/story-5.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Recordset Operations that connects Iteration, filtered(), filtered_domain() and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-5/chapter-16-recordset-operations-operations-runbook
git commit -m "feat(recordset-operations-operations-runbook): complete chapter 16 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 16](../roadmaps/ODOO.md#phase-16) | [CONTINUE TO ODOO CHAPTER 17](../roadmaps/ODOO.md#phase-17)


<a id="odoo-phase-17-project"></a>
### ODOO CHAPTER 17 PROJECT

#### PROJECT: ORM INTERNALS & PERFORMANCE WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Explain prefetching and caching, reason about transactions and flush, diagnose N+1 query patterns, and optimize a slow recordset loop with evidence — not guesswork.

**Chapter topic:** ORM Internals & Performance

**Unit storyline:** Continue the **V. Mastering the Odoo ORM** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for ORM Internals & Performance that connects Prefetching, ORM Cache, Transactions and makes every important result inspectable.

#### LESSONS PRACTICED

- **17.1 — Prefetching:** Implement or demonstrate Prefetching in the shared unit project and add a focused check.
- **17.2 — ORM Cache:** Implement or demonstrate ORM Cache in the shared unit project and add a focused check.
- **17.3 — Transactions:** Implement or demonstrate Transactions in the shared unit project and add a focused check.
- **17.4 — Flush:** Implement or demonstrate Flush in the shared unit project and add a focused check.
- **17.5 — Cache Invalidation:** Implement or demonstrate Cache Invalidation in the shared unit project and add a focused check.
- **17.6 — N+1 Queries:** Implement or demonstrate N+1 Queries in the shared unit project and add a focused check.
- **17.7 — Batch Creation:** Implement or demonstrate Batch Creation in the shared unit project and add a focused check.
- **17.8 — Aggregation:** Implement or demonstrate Aggregation in the shared unit project and add a focused check.
- **17.9 — read_group():** Implement or demonstrate read_group() in the shared unit project and add a focused check.
- **17.10 — Raw SQL:** Implement or demonstrate Raw SQL in the shared unit project and add a focused check.
- **17.11 — ORM vs SQL:** Implement or demonstrate ORM vs SQL in the shared unit project and add a focused check.
- **17.12 — Security Implications of SQL:** Implement or demonstrate Security Implications of SQL in the shared unit project and add a focused check.
- **17.13 — LAB — Optimize ORM Code:** Implement or demonstrate LAB — Optimize ORM Code in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for ORM Internals & Performance that connects Prefetching, ORM Cache, Transactions and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for ORM Internals & Performance.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared V. Mastering the Odoo ORM unit workspace under odoo/story-5.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for ORM Internals & Performance that connects Prefetching, ORM Cache, Transactions and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-5/chapter-17-orm-internals-performance-workbench
git commit -m "feat(orm-internals-performance-workbench): complete chapter 17 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 17](../roadmaps/ODOO.md#phase-17) | [CONTINUE TO ODOO CHAPTER 18](../roadmaps/ODOO.md#phase-18)


## VI. Business rules and workflows

**Shared unit storyline:** Keep one workspace for VI. Business rules and workflows. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-18-project"></a>
### ODOO CHAPTER 18 PROJECT

#### PROJECT: VALIDATED ORDER WORKFLOW

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Write model methods for business actions, override create/write with correct super() usage, and expose actions that transition records the way a librarian or sales manager expects.

**Chapter topic:** Business Methods

**Unit storyline:** Continue the **VI. Business rules and workflows** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Validated Order Workflow as a focused exercise for Business Logic. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **18.1 — Model Methods:** Implement or demonstrate Model Methods in the shared unit project and add a focused check.
- **18.2 — Recordset Methods:** Implement or demonstrate Recordset Methods in the shared unit project and add a focused check.
- **18.3 — @api.model:** Implement or demonstrate @api.model in the shared unit project and add a focused check.
- **18.4 — @api.model_create_multi:** Implement or demonstrate @api.model_create_multi in the shared unit project and add a focused check.
- **18.5 — create() Override:** Implement or demonstrate create() Override in the shared unit project and add a focused check.
- **18.6 — write() Override:** Implement or demonstrate write() Override in the shared unit project and add a focused check.
- **18.7 — unlink() Override:** Implement or demonstrate unlink() Override in the shared unit project and add a focused check.
- **18.8 — super():** Implement or demonstrate super() in the shared unit project and add a focused check.
- **18.9 — Return Values:** Implement or demonstrate Return Values in the shared unit project and add a focused check.
- **18.10 — Business Actions:** Implement or demonstrate Business Actions in the shared unit project and add a focused check.

#### SPECIFICATION

- Implement a validated order workflow with draft, confirm, cancel, and done states plus capacity, total, and transition rules.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Implement a validated order workflow with draft, confirm, cancel, and done states plus capacity, total, and transition rules.
- Define a small input format, a transformed output format, and where failed records go.
- Use Business Logic to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named validated_order_workflow with a manifest, models, security, views, data, and tests folders.
2. Implement a validated order workflow with draft, confirm, cancel, and done states plus capacity, total, and transition rules.
3. Use Business Logic to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for Business Logic.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-6/chapter-18-validated-order-workflow
git commit -m "feat(validated-order-workflow): complete chapter 18 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 18](../roadmaps/ODOO.md#phase-18) | [CONTINUE TO ODOO CHAPTER 19](../roadmaps/ODOO.md#phase-19)


<a id="odoo-phase-19-project"></a>
### ODOO CHAPTER 19 PROJECT

#### PROJECT: CONSTRAINTS & VALIDATION WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Protect business invariants with @api.constrains and SQL constraints, raise ValidationError vs UserError appropriately, and lab-test rules that block illegal library or leave-request data.

**Chapter topic:** Constraints & Validation

**Unit storyline:** Continue the **VI. Business rules and workflows** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Constraints & Validation that connects Python Constraints, @api.constrains, SQL Constraints and makes every important result inspectable.

#### LESSONS PRACTICED

- **19.1 — Python Constraints:** Implement or demonstrate Python Constraints in the shared unit project and add a focused check.
- **19.2 — @api.constrains:** Implement or demonstrate @api.constrains in the shared unit project and add a focused check.
- **19.3 — SQL Constraints:** Implement or demonstrate SQL Constraints in the shared unit project and add a focused check.
- **19.4 — ValidationError:** Implement or demonstrate ValidationError in the shared unit project and add a focused check.
- **19.5 — UserError:** Implement or demonstrate UserError in the shared unit project and add a focused check.
- **19.6 — AccessError:** Implement or demonstrate AccessError in the shared unit project and add a focused check.
- **19.7 — LAB — Protect Business Rules:** Implement or demonstrate LAB — Protect Business Rules in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Constraints & Validation that connects Python Constraints, @api.constrains, SQL Constraints and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Constraints & Validation.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VI. Business rules and workflows unit workspace under odoo/story-6.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Constraints & Validation that connects Python Constraints, @api.constrains, SQL Constraints and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-6/chapter-19-constraints-validation-workbench
git commit -m "feat(constraints-validation-workbench): complete chapter 19 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 19](../roadmaps/ODOO.md#phase-19) | [CONTINUE TO ODOO CHAPTER 20](../roadmaps/ODOO.md#phase-20)


<a id="odoo-phase-20-project"></a>
### ODOO CHAPTER 20 PROJECT

#### PROJECT: ONCHANGE & UI LOGIC ANALYSIS DOSSIER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Use @api.onchange for interactive form logic, set field defaults and context defaults, and design dynamic form behavior that prepares values before the user clicks Save.

**Chapter topic:** Onchange & UI Logic

**Unit storyline:** Continue the **VI. Business rules and workflows** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an evidence-backed analysis for Onchange & UI Logic that connects @api.onchange, Defaults, default_get() and makes every important result inspectable.

#### LESSONS PRACTICED

- **20.1 — @api.onchange:** Apply @api.onchange to the controlled example and record the reasoning and result.
- **20.2 — Defaults:** Apply Defaults to the controlled example and record the reasoning and result.
- **20.3 — default_get():** Apply default_get() to the controlled example and record the reasoning and result.
- **20.4 — Context Defaults:** Apply Context Defaults to the controlled example and record the reasoning and result.
- **20.5 — Dynamic Forms:** Apply Dynamic Forms to the controlled example and record the reasoning and result.
- **20.6 — Onchange vs Compute:** Apply Onchange vs Compute to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Produce an evidence-backed analysis for Onchange & UI Logic that connects @api.onchange, Defaults, default_get() and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused analysis artifact for Onchange & UI Logic.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo database or documented simulation.
- Markdown.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VI. Business rules and workflows unit workspace under odoo/story-6.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an evidence-backed analysis for Onchange & UI Logic that connects @api.onchange, Defaults, default_get() and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-6/chapter-20-onchange-ui-logic-analysis-dossier
git commit -m "feat(onchange-ui-logic-analysis-dossier): complete chapter 20 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 20](../roadmaps/ODOO.md#phase-20) | [CONTINUE TO ODOO CHAPTER 21](../roadmaps/ODOO.md#phase-21)


<a id="odoo-phase-21-project"></a>
### ODOO CHAPTER 21 PROJECT

#### PROJECT: STATES & WORKFLOWS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Model document states with Selection fields, implement safe transitions (draft → confirmed → approved / cancelled), block illegal moves, and deliver an approval workflow project for leave requests or purchases.

**Chapter topic:** States & Workflows

**Unit storyline:** Continue the **VI. Business rules and workflows** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for States & Workflows that connects State Fields, Draft, Confirmed and makes every important result inspectable.

#### LESSONS PRACTICED

- **21.1 — State Fields:** Implement or demonstrate State Fields in the shared unit project and add a focused check.
- **21.2 — Draft:** Implement or demonstrate Draft in the shared unit project and add a focused check.
- **21.3 — Confirmed:** Implement or demonstrate Confirmed in the shared unit project and add a focused check.
- **21.4 — Approved:** Implement or demonstrate Approved in the shared unit project and add a focused check.
- **21.5 — Done:** Implement or demonstrate Done in the shared unit project and add a focused check.
- **21.6 — Cancelled:** Implement or demonstrate Cancelled in the shared unit project and add a focused check.
- **21.7 — Legal State Transitions:** Implement or demonstrate Legal State Transitions in the shared unit project and add a focused check.
- **21.8 — Buttons:** Implement or demonstrate Buttons in the shared unit project and add a focused check.
- **21.9 — Workflow Validation:** Implement or demonstrate Workflow Validation in the shared unit project and add a focused check.
- **21.10 — PROJECT — Approval Workflow:** Implement or demonstrate PROJECT — Approval Workflow in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for States & Workflows that connects State Fields, Draft, Confirmed and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for States & Workflows.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VI. Business rules and workflows unit workspace under odoo/story-6.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for States & Workflows that connects State Fields, Draft, Confirmed and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-6/chapter-21-states-workflows-workbench
git commit -m "feat(states-workflows-workbench): complete chapter 21 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 21](../roadmaps/ODOO.md#phase-21) | [CONTINUE TO ODOO CHAPTER 22](../roadmaps/ODOO.md#phase-22)


## VII. Building the user interface

**Shared unit storyline:** Keep one workspace for VII. Building the user interface. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-22-project"></a>
### ODOO CHAPTER 22 PROJECT

#### PROJECT: XML FOUNDATIONS ANALYSIS DOSSIER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Author Odoo data XML that creates stable ir.model.data external IDs, load in the right order through the manifest, and debug noupdate / missing-ref failures without guessing.

**Chapter topic:** XML Foundations

**Unit storyline:** Continue the **VII. Building the user interface** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an evidence-backed analysis for XML Foundations that connects XML Syntax, <record>, External IDs and makes every important result inspectable.

#### LESSONS PRACTICED

- **22.1 — XML Syntax:** Apply XML Syntax to the controlled example and record the reasoning and result.
- **22.2 — <record>:** Apply <record> to the controlled example and record the reasoning and result.
- **22.3 — External IDs:** Apply External IDs to the controlled example and record the reasoning and result.
- **22.4 — ref():** Apply ref() to the controlled example and record the reasoning and result.
- **22.5 — eval:** Apply eval to the controlled example and record the reasoning and result.
- **22.6 — Data Files:** Apply Data Files to the controlled example and record the reasoning and result.
- **22.7 — XML Loading:** Apply XML Loading to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Produce an evidence-backed analysis for XML Foundations that connects XML Syntax, <record>, External IDs and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused analysis artifact for XML Foundations.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo database or documented simulation.
- Markdown.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VII. Building the user interface unit workspace under odoo/story-7.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an evidence-backed analysis for XML Foundations that connects XML Syntax, <record>, External IDs and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-7/chapter-22-xml-foundations-analysis-dossier
git commit -m "feat(xml-foundations-analysis-dossier): complete chapter 22 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 22](../roadmaps/ODOO.md#phase-22) | [CONTINUE TO ODOO CHAPTER 23](../roadmaps/ODOO.md#phase-23)


<a id="odoo-phase-23-project"></a>
### ODOO CHAPTER 23 PROJECT

#### PROJECT: INHERITED LIBRARY VIEWS

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Design Odoo 18 form and list architectures — sheet layout, groups, notebooks, headers/buttons, list columns — so a business user can create, read, update, and navigate records without shell access.

**Chapter topic:** Form & List Views

**Unit storyline:** Continue the **VII. Building the user interface** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Inherited Library Views as a focused exercise for XML Views. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **23.1 — Form Views:** Implement or demonstrate Form Views in the shared unit project and add a focused check.
- **23.2 — List Views:** Implement or demonstrate List Views in the shared unit project and add a focused check.
- **23.3 — Field Display:** Implement or demonstrate Field Display in the shared unit project and add a focused check.
- **23.4 — Buttons:** Implement or demonstrate Buttons in the shared unit project and add a focused check.
- **23.5 — Groups:** Implement or demonstrate Groups in the shared unit project and add a focused check.
- **23.6 — Sheets:** Implement or demonstrate Sheets in the shared unit project and add a focused check.
- **23.7 — Notebook:** Implement or demonstrate Notebook in the shared unit project and add a focused check.
- **23.8 — Pages:** Implement or demonstrate Pages in the shared unit project and add a focused check.
- **23.9 — Widgets:** Implement or demonstrate Widgets in the shared unit project and add a focused check.
- **23.10 — Decorations:** Implement or demonstrate Decorations in the shared unit project and add a focused check.
- **23.11 — MINI PROJECT — CRUD Interface:** Implement or demonstrate MINI PROJECT — CRUD Interface in the shared unit project and add a focused check.

#### SPECIFICATION

- Extend library list, form, search, kanban, and calendar views through XML inheritance without replacing the original view.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Extend library list, form, search, kanban, and calendar views through XML inheritance without replacing the original view.
- Give the user one clear main action and keep all other features secondary.
- Use XML Views in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named inherited_library_views with a manifest, models, security, views, data, and tests folders.
2. Extend library list, form, search, kanban, and calendar views through XML inheritance without replacing the original view.
3. Use XML Views in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for XML Views.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-7/chapter-23-inherited-library-views
git commit -m "feat(inherited-library-views): complete chapter 23 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 23](../roadmaps/ODOO.md#phase-23) | [CONTINUE TO ODOO CHAPTER 24](../roadmaps/ODOO.md#phase-24)


<a id="odoo-phase-24-project"></a>
### ODOO CHAPTER 24 PROJECT

#### PROJECT: SEARCH, KANBAN & ANALYTICAL VIEWS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Attach search, kanban, calendar, pivot, and graph views to the same model so one dataset serves operations, planning, and light analytics.

**Chapter topic:** Search, Kanban & Analytical Views

**Unit storyline:** Continue the **VII. Building the user interface** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Search, Kanban & Analytical Views that connects Search Views, Filters, Group By and makes every important result inspectable.

#### LESSONS PRACTICED

- **24.1 — Search Views:** Implement or demonstrate Search Views in the shared unit project and add a focused check.
- **24.2 — Filters:** Implement or demonstrate Filters in the shared unit project and add a focused check.
- **24.3 — Group By:** Implement or demonstrate Group By in the shared unit project and add a focused check.
- **24.4 — Search Panels:** Implement or demonstrate Search Panels in the shared unit project and add a focused check.
- **24.5 — Kanban:** Implement or demonstrate Kanban in the shared unit project and add a focused check.
- **24.6 — Calendar:** Implement or demonstrate Calendar in the shared unit project and add a focused check.
- **24.7 — Pivot:** Implement or demonstrate Pivot in the shared unit project and add a focused check.
- **24.8 — Graph:** Implement or demonstrate Graph in the shared unit project and add a focused check.
- **24.9 — Activity Views:** Implement or demonstrate Activity Views in the shared unit project and add a focused check.
- **24.10 — PRACTICE — Multiple Views of Same Data:** Implement or demonstrate PRACTICE — Multiple Views of Same Data in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Search, Kanban & Analytical Views that connects Search Views, Filters, Group By and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Search, Kanban & Analytical Views.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VII. Building the user interface unit workspace under odoo/story-7.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Search, Kanban & Analytical Views that connects Search Views, Filters, Group By and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-7/chapter-24-search-kanban-analytical-views-workbench
git commit -m "feat(search-kanban-analytical-views-workbench): complete chapter 24 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 24](../roadmaps/ODOO.md#phase-24) | [CONTINUE TO ODOO CHAPTER 25](../roadmaps/ODOO.md#phase-25)


<a id="odoo-phase-25-project"></a>
### ODOO CHAPTER 25 PROJECT

#### PROJECT: ROLE-AWARE NAVIGATION MODULE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Connect models to window actions and menu trees with domains, contexts, and view modes so navigation opens the right records in the right views.

**Chapter topic:** Actions & Menus

**Unit storyline:** Continue the **VII. Building the user interface** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Role-Aware Navigation Module as a focused exercise for Actions and Menus. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **25.1 — Actions:** Implement or demonstrate Actions in the shared unit project and add a focused check.
- **25.2 — Action Bindings:** Implement or demonstrate Action Bindings in the shared unit project and add a focused check.
- **25.3 — Window Actions:** Implement or demonstrate Window Actions in the shared unit project and add a focused check.
- **25.4 — ir.actions.act_window:** Implement or demonstrate ir.actions.act_window in the shared unit project and add a focused check.
- **25.5 — URL Actions:** Implement or demonstrate URL Actions in the shared unit project and add a focused check.
- **25.6 — Server Actions:** Implement or demonstrate Server Actions in the shared unit project and add a focused check.
- **25.7 — Report Actions:** Implement or demonstrate Report Actions in the shared unit project and add a focused check.
- **25.8 — Client Actions:** Implement or demonstrate Client Actions in the shared unit project and add a focused check.
- **25.9 — Scheduled Actions:** Implement or demonstrate Scheduled Actions in the shared unit project and add a focused check.
- **25.10 — Menus:** Implement or demonstrate Menus in the shared unit project and add a focused check.
- **25.11 — Context:** Implement or demonstrate Context in the shared unit project and add a focused check.
- **25.12 — Domains:** Implement or demonstrate Domains in the shared unit project and add a focused check.
- **25.13 — Navigation:** Implement or demonstrate Navigation in the shared unit project and add a focused check.

#### SPECIFICATION

- Create role-aware menus, actions, domains, contexts, smart buttons, filters, and navigation while keeping authorization server-side.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create role-aware menus, actions, domains, contexts, smart buttons, filters, and navigation while keeping authorization server-side.
- Give the user one clear main action and keep all other features secondary.
- Use Actions and Menus in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named role_aware_navigation_module with a manifest, models, security, views, data, and tests folders.
2. Create role-aware menus, actions, domains, contexts, smart buttons, filters, and navigation while keeping authorization server-side.
3. Use Actions and Menus in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Actions and Menus.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-7/chapter-25-role-aware-navigation-module
git commit -m "feat(role-aware-navigation-module): complete chapter 25 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 25](../roadmaps/ODOO.md#phase-25) | [CONTINUE TO ODOO CHAPTER 26](../roadmaps/ODOO.md#phase-26)


<a id="odoo-phase-26-project"></a>
### ODOO CHAPTER 26 PROJECT

#### PROJECT: VIEW INHERITANCE WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Extend existing ir.ui.view arches with inherit_id and XPath position semantics so upgrades do not require forked copies of official forms.

**Chapter topic:** View Inheritance

**Unit storyline:** Continue the **VII. Building the user interface** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for View Inheritance that connects inherit_id, XPath, position and makes every important result inspectable.

#### LESSONS PRACTICED

- **26.1 — inherit_id:** Implement or demonstrate inherit_id in the shared unit project and add a focused check.
- **26.2 — XPath:** Implement or demonstrate XPath in the shared unit project and add a focused check.
- **26.3 — position:** Implement or demonstrate position in the shared unit project and add a focused check.
- **26.4 — Attributes:** Implement or demonstrate Attributes in the shared unit project and add a focused check.
- **26.5 — Adding Elements:** Implement or demonstrate Adding Elements in the shared unit project and add a focused check.
- **26.6 — Replacing Elements:** Implement or demonstrate Replacing Elements in the shared unit project and add a focused check.
- **26.7 — Moving Elements:** Implement or demonstrate Moving Elements in the shared unit project and add a focused check.
- **26.8 — View Resolution:** Implement or demonstrate View Resolution in the shared unit project and add a focused check.
- **26.9 — Debugging Inherited Views:** Implement or demonstrate Debugging Inherited Views in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for View Inheritance that connects inherit_id, XPath, position and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for View Inheritance.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VII. Building the user interface unit workspace under odoo/story-7.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for View Inheritance that connects inherit_id, XPath, position and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-7/chapter-26-view-inheritance-workbench
git commit -m "feat(view-inheritance-workbench): complete chapter 26 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 26](../roadmaps/ODOO.md#phase-26) | [CONTINUE TO ODOO CHAPTER 27](../roadmaps/ODOO.md#phase-27)


## VIII. Security and multi-company

**Shared unit storyline:** Keep one workspace for VIII. Security and multi-company. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-27-project"></a>
### ODOO CHAPTER 27 PROJECT

#### PROJECT: USERS & GROUPS DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Model responsibility with res.groups hierarchies (implied_ids), assign users correctly, and separate UI visibility groups from privilege design.

**Chapter topic:** Users & Groups

**Unit storyline:** Continue the **VIII. Security and multi-company** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Users & Groups that connects Users, Groups, Group Membership and makes every important result inspectable.

#### LESSONS PRACTICED

- **27.1 — Users:** Represent Users in the design and justify one decision that depends on it.
- **27.2 — Groups:** Represent Groups in the design and justify one decision that depends on it.
- **27.3 — Group Membership:** Represent Group Membership in the design and justify one decision that depends on it.
- **27.4 — Implied Groups:** Represent Implied Groups in the design and justify one decision that depends on it.
- **27.5 — Application Categories:** Represent Application Categories in the design and justify one decision that depends on it.
- **27.6 — Permission Design:** Represent Permission Design in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Users & Groups that connects Users, Groups, Group Membership and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Users & Groups.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VIII. Security and multi-company unit workspace under odoo/story-8.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Users & Groups that connects Users, Groups, Group Membership and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-8/chapter-27-users-groups-design-studio
git commit -m "feat(users-groups-design-studio): complete chapter 27 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 27](../roadmaps/ODOO.md#phase-27) | [CONTINUE TO ODOO CHAPTER 28](../roadmaps/ODOO.md#phase-28)


<a id="odoo-phase-28-project"></a>
### ODOO CHAPTER 28 PROJECT

#### PROJECT: ACCESS CONTROL LISTS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Author ir.model.access CSV matrices that grant least-privilege CRUD per group, and diagnose AccessError as missing model rights (not “Odoo is broken”).

**Chapter topic:** Access Control Lists

**Unit storyline:** Continue the **VIII. Security and multi-company** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Access Control Lists that connects ir.model.access, ir.model.access.csv, Read and makes every important result inspectable.

#### LESSONS PRACTICED

- **28.1 — ir.model.access:** Implement or demonstrate ir.model.access in the shared unit project and add a focused check.
- **28.2 — ir.model.access.csv:** Implement or demonstrate ir.model.access.csv in the shared unit project and add a focused check.
- **28.3 — Read:** Implement or demonstrate Read in the shared unit project and add a focused check.
- **28.4 — Write:** Implement or demonstrate Write in the shared unit project and add a focused check.
- **28.5 — Create:** Implement or demonstrate Create in the shared unit project and add a focused check.
- **28.6 — Unlink:** Implement or demonstrate Unlink in the shared unit project and add a focused check.
- **28.7 — Group ACLs:** Implement or demonstrate Group ACLs in the shared unit project and add a focused check.
- **28.8 — Additive Permissions:** Implement or demonstrate Additive Permissions in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Access Control Lists that connects ir.model.access, ir.model.access.csv, Read and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Access Control Lists.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VIII. Security and multi-company unit workspace under odoo/story-8.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Access Control Lists that connects ir.model.access, ir.model.access.csv, Read and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-8/chapter-28-access-control-lists-workbench
git commit -m "feat(access-control-lists-workbench): complete chapter 28 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 28](../roadmaps/ODOO.md#phase-28) | [CONTINUE TO ODOO CHAPTER 29](../roadmaps/ODOO.md#phase-29)


<a id="odoo-phase-29-project"></a>
### ODOO CHAPTER 29 PROJECT

#### PROJECT: MULTI-COMPANY ACCESS LAB

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Write ir.rule domains that enforce row-level security, explain global AND vs group OR combination, and debug “empty list for user / full list for admin” failures.

**Chapter topic:** Record Rules

**Unit storyline:** Continue the **VIII. Security and multi-company** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Multi-company Access Lab as a focused exercise for Access Control and Record Rules. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **29.1 — ir.rule:** Implement or demonstrate ir.rule in the shared unit project and add a focused check.
- **29.2 — domain_force:** Implement or demonstrate domain_force in the shared unit project and add a focused check.
- **29.3 — Global Rules:** Implement or demonstrate Global Rules in the shared unit project and add a focused check.
- **29.4 — Group Rules:** Implement or demonstrate Group Rules in the shared unit project and add a focused check.
- **29.5 — Rule Composition:** Implement or demonstrate Rule Composition in the shared unit project and add a focused check.
- **29.6 — Row-Level Security:** Implement or demonstrate Row-Level Security in the shared unit project and add a focused check.

#### SPECIFICATION

- Create receptionist and manager groups, ACLs, record rules, multi-company records, and automated allowed/denied access tests.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create receptionist and manager groups, ACLs, record rules, multi-company records, and automated allowed/denied access tests.
- Give the user one clear main action and keep all other features secondary.
- Use Access Control and Record Rules in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named multi_company_access_lab with a manifest, models, security, views, data, and tests folders.
2. Create receptionist and manager groups, ACLs, record rules, multi-company records, and automated allowed/denied access tests.
3. Use Access Control and Record Rules in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Access Control and Record Rules.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-8/chapter-29-multi-company-access-lab
git commit -m "feat(multi-company-access-lab): complete chapter 29 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 29](../roadmaps/ODOO.md#phase-29) | [CONTINUE TO ODOO CHAPTER 30](../roadmaps/ODOO.md#phase-30)


<a id="odoo-phase-30-project"></a>
### ODOO CHAPTER 30 PROJECT

#### PROJECT: SECURITY CONTEXT & SAFE PRIVILEGE WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Use sudo() and with_user() deliberately, keep security context narrow, and refuse patterns that launder privileges across request boundaries.

**Chapter topic:** Security Context & Safe Privilege

**Unit storyline:** Continue the **VIII. Security and multi-company** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Security Context & Safe Privilege that connects sudo(), with_user(), Access Checks and makes every important result inspectable.

#### LESSONS PRACTICED

- **30.1 — sudo():** Implement or demonstrate sudo() in the shared unit project and add a focused check.
- **30.2 — with_user():** Implement or demonstrate with_user() in the shared unit project and add a focused check.
- **30.3 — Access Checks:** Implement or demonstrate Access Checks in the shared unit project and add a focused check.
- **30.4 — check_access():** Implement or demonstrate check_access() in the shared unit project and add a focused check.
- **30.5 — Field Security:** Implement or demonstrate Field Security in the shared unit project and add a focused check.
- **30.6 — View / Menu Groups:** Implement or demonstrate View / Menu Groups in the shared unit project and add a focused check.
- **30.7 — Public Method Security:** Implement or demonstrate Public Method Security in the shared unit project and add a focused check.
- **30.8 — Unsafe Raw SQL:** Implement or demonstrate Unsafe Raw SQL in the shared unit project and add a focused check.
- **30.9 — Security Bypass Risks:** Implement or demonstrate Security Bypass Risks in the shared unit project and add a focused check.
- **30.10 — Least Privilege:** Implement or demonstrate Least Privilege in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Security Context & Safe Privilege that connects sudo(), with_user(), Access Checks and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Security Context & Safe Privilege.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VIII. Security and multi-company unit workspace under odoo/story-8.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Security Context & Safe Privilege that connects sudo(), with_user(), Access Checks and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-8/chapter-30-security-context-safe-privilege-workbench
git commit -m "feat(security-context-safe-privilege-workbench): complete chapter 30 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 30](../roadmaps/ODOO.md#phase-30) | [CONTINUE TO ODOO CHAPTER 31](../roadmaps/ODOO.md#phase-31)


<a id="odoo-phase-31-project"></a>
### ODOO CHAPTER 31 PROJECT

#### PROJECT: MULTI-COMPANY DEVELOPMENT WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Add company_id / company_ids correctly, apply company record-rule patterns, understand company-dependent fields, and prevent cross-company leakage.

**Chapter topic:** Multi-Company Development

**Unit storyline:** Continue the **VIII. Security and multi-company** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Multi-Company Development that connects res.company, company_id, company_ids and makes every important result inspectable.

#### LESSONS PRACTICED

- **31.1 — res.company:** Implement or demonstrate res.company in the shared unit project and add a focused check.
- **31.2 — company_id:** Implement or demonstrate company_id in the shared unit project and add a focused check.
- **31.3 — company_ids:** Implement or demonstrate company_ids in the shared unit project and add a focused check.
- **31.4 — env.company:** Implement or demonstrate env.company in the shared unit project and add a focused check.
- **31.5 — with_company():** Implement or demonstrate with_company() in the shared unit project and add a focused check.
- **31.6 — Company-Dependent Fields:** Implement or demonstrate Company-Dependent Fields in the shared unit project and add a focused check.
- **31.7 — _check_company:** Implement or demonstrate _check_company in the shared unit project and add a focused check.
- **31.8 — Multi-Company Domains:** Implement or demonstrate Multi-Company Domains in the shared unit project and add a focused check.
- **31.9 — Cross-Company Security:** Implement or demonstrate Cross-Company Security in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Multi-Company Development that connects res.company, company_id, company_ids and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Multi-Company Development.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared VIII. Security and multi-company unit workspace under odoo/story-8.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Multi-Company Development that connects res.company, company_id, company_ids and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-8/chapter-31-multi-company-development-workbench
git commit -m "feat(multi-company-development-workbench): complete chapter 31 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 31](../roadmaps/ODOO.md#phase-31) | [CONTINUE TO ODOO CHAPTER 32](../roadmaps/ODOO.md#phase-32)


## IX. Extending existing Odoo

**Shared unit storyline:** Keep one workspace for IX. Extending existing Odoo. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-32-project"></a>
### ODOO CHAPTER 32 PROJECT

#### PROJECT: SALE ORDER EXTENSION

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Extend existing models with _inherit, choose classical vs extension patterns, and override methods safely with super() under Odoo’s multi-module MRO.

**Chapter topic:** Model Inheritance

**Unit storyline:** Continue the **IX. Extending existing Odoo** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Sale Order Extension as a focused exercise for Inheritance. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **32.1 — Extension Inheritance:** Implement or demonstrate Extension Inheritance in the shared unit project and add a focused check.
- **32.2 — _inherit:** Implement or demonstrate _inherit in the shared unit project and add a focused check.
- **32.3 — Classical Inheritance:** Implement or demonstrate Classical Inheritance in the shared unit project and add a focused check.
- **32.4 — Method Overriding:** Implement or demonstrate Method Overriding in the shared unit project and add a focused check.
- **32.5 — Field Extension:** Implement or demonstrate Field Extension in the shared unit project and add a focused check.
- **32.6 — super():** Implement or demonstrate super() in the shared unit project and add a focused check.
- **32.7 — Multiple Inheritance:** Implement or demonstrate Multiple Inheritance in the shared unit project and add a focused check.

#### SPECIFICATION

- Extend sale.order with an approval field, inherited views, business rule, and upgrade-safe behavior without editing Odoo core.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Extend sale.order with an approval field, inherited views, business rule, and upgrade-safe behavior without editing Odoo core.
- Give the user one clear main action and keep all other features secondary.
- Use Inheritance in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named sale_order_extension with a manifest, models, security, views, data, and tests folders.
2. Extend sale.order with an approval field, inherited views, business rule, and upgrade-safe behavior without editing Odoo core.
3. Use Inheritance in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Inheritance.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-9/chapter-32-sale-order-extension
git commit -m "feat(sale-order-extension): complete chapter 32 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 32](../roadmaps/ODOO.md#phase-32) | [CONTINUE TO ODOO CHAPTER 33](../roadmaps/ODOO.md#phase-33)


<a id="odoo-phase-33-project"></a>
### ODOO CHAPTER 33 PROJECT

#### PROJECT: DELEGATION & MIXINS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Compose models with _inherits delegation, create parent rows correctly, and choose _inherit vs _inherits with a clear criterion.

**Chapter topic:** Delegation & Mixins

**Unit storyline:** Continue the **IX. Extending existing Odoo** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Delegation & Mixins that connects _inherits, Delegated Fields, Delegation vs Extension and makes every important result inspectable.

#### LESSONS PRACTICED

- **33.1 — _inherits:** Implement or demonstrate _inherits in the shared unit project and add a focused check.
- **33.2 — Delegated Fields:** Implement or demonstrate Delegated Fields in the shared unit project and add a focused check.
- **33.3 — Delegation vs Extension:** Implement or demonstrate Delegation vs Extension in the shared unit project and add a focused check.
- **33.4 — AbstractModel:** Implement or demonstrate AbstractModel in the shared unit project and add a focused check.
- **33.5 — Mixins:** Implement or demonstrate Mixins in the shared unit project and add a focused check.
- **33.6 — Reusable Model Behavior:** Implement or demonstrate Reusable Model Behavior in the shared unit project and add a focused check.
- **33.7 — Composition:** Implement or demonstrate Composition in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Delegation & Mixins that connects _inherits, Delegated Fields, Delegation vs Extension and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Delegation & Mixins.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared IX. Extending existing Odoo unit workspace under odoo/story-9.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Delegation & Mixins that connects _inherits, Delegated Fields, Delegation vs Extension and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-9/chapter-33-delegation-mixins-workbench
git commit -m "feat(delegation-mixins-workbench): complete chapter 33 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 33](../roadmaps/ODOO.md#phase-33) | [CONTINUE TO ODOO CHAPTER 34](../roadmaps/ODOO.md#phase-34)


<a id="odoo-phase-34-project"></a>
### ODOO CHAPTER 34 PROJECT

#### PROJECT: VIEW INHERITANCE IN REAL MODULES WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Patch dense official form/list/search arches with reliable XPath, coordinate primary/secondary inherits, and survive upstream structure changes safely.

**Chapter topic:** View Inheritance in Real Modules

**Unit storyline:** Continue the **IX. Extending existing Odoo** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for View Inheritance in Real Modules that connects Finding Parent Views, External IDs, XPath Targeting and makes every important result inspectable.

#### LESSONS PRACTICED

- **34.1 — Finding Parent Views:** Implement or demonstrate Finding Parent Views in the shared unit project and add a focused check.
- **34.2 — External IDs:** Implement or demonstrate External IDs in the shared unit project and add a focused check.
- **34.3 — XPath Targeting:** Implement or demonstrate XPath Targeting in the shared unit project and add a focused check.
- **34.4 — Adding Fields:** Implement or demonstrate Adding Fields in the shared unit project and add a focused check.
- **34.5 — Modifying Attributes:** Implement or demonstrate Modifying Attributes in the shared unit project and add a focused check.
- **34.6 — Replacing Elements:** Implement or demonstrate Replacing Elements in the shared unit project and add a focused check.
- **34.7 — Debugging Inheritance Conflicts:** Implement or demonstrate Debugging Inheritance Conflicts in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for View Inheritance in Real Modules that connects Finding Parent Views, External IDs, XPath Targeting and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for View Inheritance in Real Modules.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared IX. Extending existing Odoo unit workspace under odoo/story-9.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for View Inheritance in Real Modules that connects Finding Parent Views, External IDs, XPath Targeting and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-9/chapter-34-view-inheritance-in-real-modules-workbench
git commit -m "feat(view-inheritance-in-real-modules-workbench): complete chapter 34 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 34](../roadmaps/ODOO.md#phase-34) | [CONTINUE TO ODOO CHAPTER 35](../roadmaps/ODOO.md#phase-35)


<a id="odoo-phase-35-project"></a>
### ODOO CHAPTER 35 PROJECT

#### PROJECT: EXTENDING OFFICIAL APPLICATIONS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Customize sale.order, purchase, and stock workflows with fields, super() hooks, view inherits, and security that respects official flows.

**Chapter topic:** Extending Official Applications

**Unit storyline:** Continue the **IX. Extending existing Odoo** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Extending Official Applications that connects res.partner, sale.order, purchase.order and makes every important result inspectable.

#### LESSONS PRACTICED

- **35.1 — res.partner:** Implement or demonstrate res.partner in the shared unit project and add a focused check.
- **35.2 — sale.order:** Implement or demonstrate sale.order in the shared unit project and add a focused check.
- **35.3 — purchase.order:** Implement or demonstrate purchase.order in the shared unit project and add a focused check.
- **35.4 — stock.picking:** Implement or demonstrate stock.picking in the shared unit project and add a focused check.
- **35.5 — account.move:** Implement or demonstrate account.move in the shared unit project and add a focused check.
- **35.6 — Existing Workflows:** Implement or demonstrate Existing Workflows in the shared unit project and add a focused check.
- **35.7 — Extension Points:** Implement or demonstrate Extension Points in the shared unit project and add a focused check.
- **35.8 — Upgrade-Safe Customization:** Implement or demonstrate Upgrade-Safe Customization in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Extending Official Applications that connects res.partner, sale.order, purchase.order and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Extending Official Applications.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared IX. Extending existing Odoo unit workspace under odoo/story-9.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Extending Official Applications that connects res.partner, sale.order, purchase.order and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-9/chapter-35-extending-official-applications-workbench
git commit -m "feat(extending-official-applications-workbench): complete chapter 35 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 35](../roadmaps/ODOO.md#phase-35) | [CONTINUE TO ODOO CHAPTER 36](../roadmaps/ODOO.md#phase-36)


## X. Advanced business features

**Shared unit storyline:** Keep one workspace for X. Advanced business features. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-36-project"></a>
### ODOO CHAPTER 36 PROJECT

#### PROJECT: BULK UPDATE WIZARD

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Build multi-step dialogs with models.TransientModel, collect input from list/form selections via active_ids, apply business changes once, and close the dialog without polluting permanent tables.

**Chapter topic:** Wizards & TransientModel

**Unit storyline:** Continue the **X. Advanced business features** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Bulk Update Wizard as a focused exercise for Wizards and Transient Models. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **36.1 — TransientModel:** Implement or demonstrate TransientModel in the shared unit project and add a focused check.
- **36.2 — Wizard Fields:** Implement or demonstrate Wizard Fields in the shared unit project and add a focused check.
- **36.3 — Wizard Views:** Implement or demonstrate Wizard Views in the shared unit project and add a focused check.
- **36.4 — target="new":** Implement or demonstrate target="new" in the shared unit project and add a focused check.
- **36.5 — active_id:** Implement or demonstrate active_id in the shared unit project and add a focused check.
- **36.6 — active_ids:** Implement or demonstrate active_ids in the shared unit project and add a focused check.
- **36.7 — Context:** Implement or demonstrate Context in the shared unit project and add a focused check.
- **36.8 — Multi-Step Wizards:** Implement or demonstrate Multi-Step Wizards in the shared unit project and add a focused check.
- **36.9 — MINI PROJECT — Bulk Processing Wizard:** Implement or demonstrate MINI PROJECT — Bulk Processing Wizard in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a transient wizard that previews and confirms a bulk update, respects access rules, reports skipped records, and leaves an audit note.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build a transient wizard that previews and confirms a bulk update, respects access rules, reports skipped records, and leaves an audit note.
- Give the user one clear main action and keep all other features secondary.
- Use Wizards and Transient Models in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named bulk_update_wizard with a manifest, models, security, views, data, and tests folders.
2. Build a transient wizard that previews and confirms a bulk update, respects access rules, reports skipped records, and leaves an audit note.
3. Use Wizards and Transient Models in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Wizards and Transient Models.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-10/chapter-36-bulk-update-wizard
git commit -m "feat(bulk-update-wizard): complete chapter 36 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 36](../roadmaps/ODOO.md#phase-36) | [CONTINUE TO ODOO CHAPTER 37](../roadmaps/ODOO.md#phase-37)


<a id="odoo-phase-37-project"></a>
### ODOO CHAPTER 37 PROJECT

#### PROJECT: SEQUENCES WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Configure ir.sequence for document names, call next_by_code / next_by_id safely, and reason about gaps, company-specific sequences, and concurrency.

**Chapter topic:** Sequences

**Unit storyline:** Continue the **X. Advanced business features** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Sequences that connects ir.sequence, next_by_code(), Prefix and makes every important result inspectable.

#### LESSONS PRACTICED

- **37.1 — ir.sequence:** Implement or demonstrate ir.sequence in the shared unit project and add a focused check.
- **37.2 — next_by_code():** Implement or demonstrate next_by_code() in the shared unit project and add a focused check.
- **37.3 — Prefix:** Implement or demonstrate Prefix in the shared unit project and add a focused check.
- **37.4 — Suffix:** Implement or demonstrate Suffix in the shared unit project and add a focused check.
- **37.5 — Padding:** Implement or demonstrate Padding in the shared unit project and add a focused check.
- **37.6 — Date-Based Sequences:** Implement or demonstrate Date-Based Sequences in the shared unit project and add a focused check.
- **37.7 — Business References:** Implement or demonstrate Business References in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Sequences that connects ir.sequence, next_by_code(), Prefix and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Sequences.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared X. Advanced business features unit workspace under odoo/story-10.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Sequences that connects ir.sequence, next_by_code(), Prefix and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-10/chapter-37-sequences-workbench
git commit -m "feat(sequences-workbench): complete chapter 37 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 37](../roadmaps/ODOO.md#phase-37) | [CONTINUE TO ODOO CHAPTER 38](../roadmaps/ODOO.md#phase-38)


<a id="odoo-phase-38-project"></a>
### ODOO CHAPTER 38 PROJECT

#### PROJECT: SCHEDULED ACTIONS / CRON WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Define ir.cron jobs that call model methods on a schedule, keep jobs idempotent and short, choose the right user, and avoid “cron that locks the database.”.

**Chapter topic:** Scheduled Actions / Cron

**Unit storyline:** Continue the **X. Advanced business features** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Scheduled Actions / Cron that connects ir.cron, Scheduling, Cron Methods and makes every important result inspectable.

#### LESSONS PRACTICED

- **38.1 — ir.cron:** Implement or demonstrate ir.cron in the shared unit project and add a focused check.
- **38.2 — Scheduling:** Implement or demonstrate Scheduling in the shared unit project and add a focused check.
- **38.3 — Cron Methods:** Implement or demonstrate Cron Methods in the shared unit project and add a focused check.
- **38.4 — Batch Processing:** Implement or demonstrate Batch Processing in the shared unit project and add a focused check.
- **38.5 — Progress:** Implement or demonstrate Progress in the shared unit project and add a focused check.
- **38.6 — Failure Handling:** Implement or demonstrate Failure Handling in the shared unit project and add a focused check.
- **38.7 — Idempotency:** Implement or demonstrate Idempotency in the shared unit project and add a focused check.
- **38.8 — Cron Security:** Implement or demonstrate Cron Security in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Scheduled Actions / Cron that connects ir.cron, Scheduling, Cron Methods and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Scheduled Actions / Cron.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared X. Advanced business features unit workspace under odoo/story-10.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Scheduled Actions / Cron that connects ir.cron, Scheduling, Cron Methods and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-10/chapter-38-scheduled-actions-cron-workbench
git commit -m "feat(scheduled-actions-cron-workbench): complete chapter 38 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 38](../roadmaps/ODOO.md#phase-38) | [CONTINUE TO ODOO CHAPTER 39](../roadmaps/ODOO.md#phase-39)


<a id="odoo-phase-39-project"></a>
### ODOO CHAPTER 39 PROJECT

#### PROJECT: AUTOMATION & SERVER ACTIONS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Explain base automation (automated actions): triggers, domains, and server actions; know when configuration is enough and when to move logic into a module method.

**Chapter topic:** Automation & Server Actions

**Unit storyline:** Continue the **X. Advanced business features** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Automation & Server Actions that connects Automated Actions, Triggers, Conditions and makes every important result inspectable.

#### LESSONS PRACTICED

- **39.1 — Automated Actions:** Implement or demonstrate Automated Actions in the shared unit project and add a focused check.
- **39.2 — Triggers:** Implement or demonstrate Triggers in the shared unit project and add a focused check.
- **39.3 — Conditions:** Implement or demonstrate Conditions in the shared unit project and add a focused check.
- **39.4 — Server Actions:** Implement or demonstrate Server Actions in the shared unit project and add a focused check.
- **39.5 — Evaluation Context:** Implement or demonstrate Evaluation Context in the shared unit project and add a focused check.
- **39.6 — Action Chaining:** Implement or demonstrate Action Chaining in the shared unit project and add a focused check.
- **39.7 — When to Use Code Instead:** Implement or demonstrate When to Use Code Instead in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Automation & Server Actions that connects Automated Actions, Triggers, Conditions and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Automation & Server Actions.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared X. Advanced business features unit workspace under odoo/story-10.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Automation & Server Actions that connects Automated Actions, Triggers, Conditions and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-10/chapter-39-automation-server-actions-workbench
git commit -m "feat(automation-server-actions-workbench): complete chapter 39 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 39](../roadmaps/ODOO.md#phase-39) | [CONTINUE TO ODOO CHAPTER 40](../roadmaps/ODOO.md#phase-40)


<a id="odoo-phase-40-project"></a>
### ODOO CHAPTER 40 PROJECT

#### PROJECT: MAIL, CHATTER & ACTIVITIES WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Mixin mail.thread / mail.activity.mixin, post messages, manage followers, schedule activities, and keep portal/internal visibility straight.

**Chapter topic:** Mail, Chatter & Activities

**Unit storyline:** Continue the **X. Advanced business features** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Mail, Chatter & Activities that connects mail.thread, mail.activity.mixin, Messages and makes every important result inspectable.

#### LESSONS PRACTICED

- **40.1 — mail.thread:** Implement or demonstrate mail.thread in the shared unit project and add a focused check.
- **40.2 — mail.activity.mixin:** Implement or demonstrate mail.activity.mixin in the shared unit project and add a focused check.
- **40.3 — Messages:** Implement or demonstrate Messages in the shared unit project and add a focused check.
- **40.4 — Followers:** Implement or demonstrate Followers in the shared unit project and add a focused check.
- **40.5 — Tracking:** Implement or demonstrate Tracking in the shared unit project and add a focused check.
- **40.6 — Activities:** Implement or demonstrate Activities in the shared unit project and add a focused check.
- **40.7 — Notifications:** Implement or demonstrate Notifications in the shared unit project and add a focused check.
- **40.8 — Email Templates:** Implement or demonstrate Email Templates in the shared unit project and add a focused check.
- **40.9 — Sending Mail:** Implement or demonstrate Sending Mail in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Mail, Chatter & Activities that connects mail.thread, mail.activity.mixin, Messages and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Mail, Chatter & Activities.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared X. Advanced business features unit workspace under odoo/story-10.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Mail, Chatter & Activities that connects mail.thread, mail.activity.mixin, Messages and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-10/chapter-40-mail-chatter-activities-workbench
git commit -m "feat(mail-chatter-activities-workbench): complete chapter 40 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 40](../roadmaps/ODOO.md#phase-40) | [CONTINUE TO ODOO CHAPTER 41](../roadmaps/ODOO.md#phase-41)


<a id="odoo-phase-41-project"></a>
### ODOO CHAPTER 41 PROJECT

#### PROJECT: REPORTS & QWEB WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Author QWeb report templates, bind ir.actions.report, generate PDFs for recordsets, and keep report logic thin (data on the model, layout in QWeb).

**Chapter topic:** Reports & QWeb

**Unit storyline:** Continue the **X. Advanced business features** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Reports & QWeb that connects QWeb, QWeb Directives, Report Actions and makes every important result inspectable.

#### LESSONS PRACTICED

- **41.1 — QWeb:** Implement or demonstrate QWeb in the shared unit project and add a focused check.
- **41.2 — QWeb Directives:** Implement or demonstrate QWeb Directives in the shared unit project and add a focused check.
- **41.3 — Report Actions:** Implement or demonstrate Report Actions in the shared unit project and add a focused check.
- **41.4 — Report Templates:** Implement or demonstrate Report Templates in the shared unit project and add a focused check.
- **41.5 — PDF Reports:** Implement or demonstrate PDF Reports in the shared unit project and add a focused check.
- **41.6 — HTML Reports:** Implement or demonstrate HTML Reports in the shared unit project and add a focused check.
- **41.7 — Paper Formats:** Implement or demonstrate Paper Formats in the shared unit project and add a focused check.
- **41.8 — Custom Report Data:** Implement or demonstrate Custom Report Data in the shared unit project and add a focused check.
- **41.9 — Translatable Reports:** Implement or demonstrate Translatable Reports in the shared unit project and add a focused check.
- **41.10 — Barcodes:** Implement or demonstrate Barcodes in the shared unit project and add a focused check.
- **41.11 — Report Attachments:** Implement or demonstrate Report Attachments in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Reports & QWeb that connects QWeb, QWeb Directives, Report Actions and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Reports & QWeb.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared X. Advanced business features unit workspace under odoo/story-10.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Reports & QWeb that connects QWeb, QWeb Directives, Report Actions and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-10/chapter-41-reports-qweb-workbench
git commit -m "feat(reports-qweb-workbench): complete chapter 41 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 41](../roadmaps/ODOO.md#phase-41) | [CONTINUE TO ODOO CHAPTER 42](../roadmaps/ODOO.md#phase-42)


<a id="odoo-phase-42-project"></a>
### ODOO CHAPTER 42 PROJECT

#### PROJECT: DATA FILES, IMPORT & EXPORT OPERATIONS RUNBOOK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Use UI import/export responsibly, author module XML/CSV data with external IDs, and apply noupdate so upgrades do not wipe production configuration.

**Chapter topic:** Data Files, Import & Export

**Unit storyline:** Continue the **X. Advanced business features** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Write and rehearse an operational runbook for Data Files, Import & Export that connects XML Data, CSV Data, External IDs and makes every important result inspectable.

#### LESSONS PRACTICED

- **42.1 — XML Data:** Add an executable XML Data procedure with verification and rollback or recovery guidance.
- **42.2 — CSV Data:** Add an executable CSV Data procedure with verification and rollback or recovery guidance.
- **42.3 — External IDs:** Add an executable External IDs procedure with verification and rollback or recovery guidance.
- **42.4 — env.ref():** Add an executable env.ref() procedure with verification and rollback or recovery guidance.
- **42.5 — noupdate:** Add an executable noupdate procedure with verification and rollback or recovery guidance.
- **42.6 — Demo Data:** Add an executable Demo Data procedure with verification and rollback or recovery guidance.
- **42.7 — Seed Data:** Add an executable Seed Data procedure with verification and rollback or recovery guidance.
- **42.8 — Import:** Add an executable Import procedure with verification and rollback or recovery guidance.
- **42.9 — Export:** Add an executable Export procedure with verification and rollback or recovery guidance.
- **42.10 — Data Load Order:** Add an executable Data Load Order procedure with verification and rollback or recovery guidance.
- **42.11 — XML Data Operations:** Add an executable XML Data Operations procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Data Files, Import & Export that connects XML Data, CSV Data, External IDs and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused runbook artifact for Data Files, Import & Export.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo environment.
- Markdown for evidence and rollback.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared X. Advanced business features unit workspace under odoo/story-10.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Data Files, Import & Export that connects XML Data, CSV Data, External IDs and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-10/chapter-42-data-files-import-export-operations-runbook
git commit -m "feat(data-files-import-export-operations-runboo): complete chapter 42 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 42](../roadmaps/ODOO.md#phase-42) | [CONTINUE TO ODOO CHAPTER 43](../roadmaps/ODOO.md#phase-43)


## XI. Internationalization and localization

**Shared unit storyline:** Keep one workspace for XI. Internationalization and localization. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-43-project"></a>
### ODOO CHAPTER 43 PROJECT

#### PROJECT: INTERNATIONALIZATION & LOCALIZATION WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Work confidently with every topic under Internationalization & Localization — not as a glossary, but as mechanisms you can implement and debug.

**Chapter topic:** Internationalization & Localization

**Unit storyline:** Continue the **XI. Internationalization and localization** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Internationalization & Localization that connects Translatable Strings, _() Translation Function, Translatable Fields and makes every important result inspectable.

#### LESSONS PRACTICED

- **43.1 — Translatable Strings:** Implement or demonstrate Translatable Strings in the shared unit project and add a focused check.
- **43.2 — _() Translation Function:** Implement or demonstrate _() Translation Function in the shared unit project and add a focused check.
- **43.3 — Translatable Fields:** Implement or demonstrate Translatable Fields in the shared unit project and add a focused check.
- **43.4 — i18n/:** Implement or demonstrate i18n/ in the shared unit project and add a focused check.
- **43.5 — .po Files:** Implement or demonstrate .po Files in the shared unit project and add a focused check.
- **43.6 — .pot Templates:** Implement or demonstrate .pot Templates in the shared unit project and add a focused check.
- **43.7 — Exporting Translations:** Implement or demonstrate Exporting Translations in the shared unit project and add a focused check.
- **43.8 — Importing Translations:** Implement or demonstrate Importing Translations in the shared unit project and add a focused check.
- **43.9 — Languages:** Implement or demonstrate Languages in the shared unit project and add a focused check.
- **43.10 — Locale / Formatting:** Implement or demonstrate Locale / Formatting in the shared unit project and add a focused check.
- **43.11 — Translatable QWeb:** Implement or demonstrate Translatable QWeb in the shared unit project and add a focused check.
- **43.12 — Localization Modules:** Implement or demonstrate Localization Modules in the shared unit project and add a focused check.
- **43.13 — Accounting Localization Concept:** Implement or demonstrate Accounting Localization Concept in the shared unit project and add a focused check.
- **43.14 — PRACTICE — Translate a Custom Module:** Implement or demonstrate PRACTICE — Translate a Custom Module in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Internationalization & Localization that connects Translatable Strings, _() Translation Function, Translatable Fields and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Internationalization & Localization.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XI. Internationalization and localization unit workspace under odoo/story-11.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Internationalization & Localization that connects Translatable Strings, _() Translation Function, Translatable Fields and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-11/chapter-43-internationalization-localization-workbench
git commit -m "feat(internationalization-localization-workbenc): complete chapter 43 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 43](../roadmaps/ODOO.md#phase-43) | [CONTINUE TO ODOO CHAPTER 44](../roadmaps/ODOO.md#phase-44)


## XII. Web development with Odoo

**Shared unit storyline:** Keep one workspace for XII. Web development with Odoo. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-44-project"></a>
### ODOO CHAPTER 44 PROJECT

#### PROJECT: HTTP CONTROLLERS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Define http.Controller routes with @http.route, use request, choose auth modes (user, public, bearer, none), return HTTP/JSON responses, and treat CSRF as mandatory for browser form posts.

**Chapter topic:** HTTP Controllers

**Unit storyline:** Continue the **XII. Web development with Odoo** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for HTTP Controllers that connects http.Controller, @http.route, request and makes every important result inspectable.

#### LESSONS PRACTICED

- **44.1 — http.Controller:** Implement or demonstrate http.Controller in the shared unit project and add a focused check.
- **44.2 — @http.route:** Implement or demonstrate @http.route in the shared unit project and add a focused check.
- **44.3 — request:** Implement or demonstrate request in the shared unit project and add a focused check.
- **44.4 — Route Types:** Implement or demonstrate Route Types in the shared unit project and add a focused check.
- **44.5 — HTTP Methods:** Implement or demonstrate HTTP Methods in the shared unit project and add a focused check.
- **44.6 — Parameters:** Implement or demonstrate Parameters in the shared unit project and add a focused check.
- **44.7 — Responses:** Implement or demonstrate Responses in the shared unit project and add a focused check.
- **44.8 — Authentication:** Implement or demonstrate Authentication in the shared unit project and add a focused check.
- **44.9 — CSRF:** Implement or demonstrate CSRF in the shared unit project and add a focused check.
- **44.10 — Sessions:** Implement or demonstrate Sessions in the shared unit project and add a focused check.
- **44.11 — Error Handling:** Implement or demonstrate Error Handling in the shared unit project and add a focused check.
- **44.12 — Controller Security:** Implement or demonstrate Controller Security in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for HTTP Controllers that connects http.Controller, @http.route, request and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for HTTP Controllers.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XII. Web development with Odoo unit workspace under odoo/story-12.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for HTTP Controllers that connects http.Controller, @http.route, request and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-12/chapter-44-http-controllers-workbench
git commit -m "feat(http-controllers-workbench): complete chapter 44 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 44](../roadmaps/ODOO.md#phase-44) | [CONTINUE TO ODOO CHAPTER 45](../roadmaps/ODOO.md#phase-45)


<a id="odoo-phase-45-project"></a>
### ODOO CHAPTER 45 PROJECT

#### PROJECT: WEBSITE DEVELOPMENT DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Build website pages with QWeb, serve dynamic content through website controllers, and keep public templates free of private fields.

**Chapter topic:** Website Development

**Unit storyline:** Continue the **XII. Web development with Odoo** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Website Development that connects Website Architecture, Website Pages, QWeb Templates and makes every important result inspectable.

#### LESSONS PRACTICED

- **45.1 — Website Architecture:** Represent Website Architecture in the design and justify one decision that depends on it.
- **45.2 — Website Pages:** Represent Website Pages in the design and justify one decision that depends on it.
- **45.3 — QWeb Templates:** Represent QWeb Templates in the design and justify one decision that depends on it.
- **45.4 — Dynamic Content:** Represent Dynamic Content in the design and justify one decision that depends on it.
- **45.5 — Website Controllers:** Represent Website Controllers in the design and justify one decision that depends on it.
- **45.6 — Frontend Assets:** Represent Frontend Assets in the design and justify one decision that depends on it.
- **45.7 — Forms:** Represent Forms in the design and justify one decision that depends on it.
- **45.8 — SEO Basics:** Represent SEO Basics in the design and justify one decision that depends on it.
- **45.9 — Multi-Website Concept:** Represent Multi-Website Concept in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Website Development that connects Website Architecture, Website Pages, QWeb Templates and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Website Development.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XII. Web development with Odoo unit workspace under odoo/story-12.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Website Development that connects Website Architecture, Website Pages, QWeb Templates and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-12/chapter-45-website-development-design-studio
git commit -m "feat(website-development-design-studio): complete chapter 45 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 45](../roadmaps/ODOO.md#phase-45) | [CONTINUE TO ODOO CHAPTER 46](../roadmaps/ODOO.md#phase-46)


<a id="odoo-phase-46-project"></a>
### ODOO CHAPTER 46 PROJECT

#### PROJECT: PORTAL DEVELOPMENT WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Build portal pages for portal users, enforce portal security (share controllers + record rules), and expose customer records without granting internal groups.

**Chapter topic:** Portal Development

**Unit storyline:** Continue the **XII. Web development with Odoo** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Portal Development that connects Portal Users, Portal Controllers, Customer Pages and makes every important result inspectable.

#### LESSONS PRACTICED

- **46.1 — Portal Users:** Implement or demonstrate Portal Users in the shared unit project and add a focused check.
- **46.2 — Portal Controllers:** Implement or demonstrate Portal Controllers in the shared unit project and add a focused check.
- **46.3 — Customer Pages:** Implement or demonstrate Customer Pages in the shared unit project and add a focused check.
- **46.4 — Portal Layout:** Implement or demonstrate Portal Layout in the shared unit project and add a focused check.
- **46.5 — Portal Security:** Implement or demonstrate Portal Security in the shared unit project and add a focused check.
- **46.6 — Customer-Owned Records:** Implement or demonstrate Customer-Owned Records in the shared unit project and add a focused check.
- **46.7 — Pagination:** Implement or demonstrate Pagination in the shared unit project and add a focused check.
- **46.8 — Search / Filters:** Implement or demonstrate Search / Filters in the shared unit project and add a focused check.
- **46.9 — Access Tokens:** Implement or demonstrate Access Tokens in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Portal Development that connects Portal Users, Portal Controllers, Customer Pages and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Portal Development.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XII. Web development with Odoo unit workspace under odoo/story-12.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Portal Development that connects Portal Users, Portal Controllers, Customer Pages and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-12/chapter-46-portal-development-workbench
git commit -m "feat(portal-development-workbench): complete chapter 46 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 46](../roadmaps/ODOO.md#phase-46) | [CONTINUE TO ODOO CHAPTER 47](../roadmaps/ODOO.md#phase-47)


## XIII. APIs and integrations

**Shared unit storyline:** Keep one workspace for XIII. APIs and integrations. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-47-project"></a>
### ODOO CHAPTER 47 PROJECT

#### PROJECT: EXTERNAL API CONCEPTS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Describe integration contracts (identity, auth, resources, errors, idempotency, versioning) before writing code, and choose RPC vs custom REST vs webhook shapes deliberately.

**Chapter topic:** External API Concepts

**Unit storyline:** Continue the **XIII. APIs and integrations** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for External API Concepts that connects Client / Server, Resources, HTTP Methods and makes every important result inspectable.

#### LESSONS PRACTICED

- **47.1 — Client / Server:** Implement or demonstrate Client / Server in the shared unit project and add a focused check.
- **47.2 — Resources:** Implement or demonstrate Resources in the shared unit project and add a focused check.
- **47.3 — HTTP Methods:** Implement or demonstrate HTTP Methods in the shared unit project and add a focused check.
- **47.4 — JSON:** Implement or demonstrate JSON in the shared unit project and add a focused check.
- **47.5 — Authentication:** Implement or demonstrate Authentication in the shared unit project and add a focused check.
- **47.6 — Status Codes:** Implement or demonstrate Status Codes in the shared unit project and add a focused check.
- **47.7 — Pagination:** Implement or demonstrate Pagination in the shared unit project and add a focused check.
- **47.8 — Rate Limits:** Implement or demonstrate Rate Limits in the shared unit project and add a focused check.
- **47.9 — API Contracts:** Implement or demonstrate API Contracts in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for External API Concepts that connects Client / Server, Resources, HTTP Methods and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for External API Concepts.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIII. APIs and integrations unit workspace under odoo/story-13.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for External API Concepts that connects Client / Server, Resources, HTTP Methods and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-13/chapter-47-external-api-concepts-workbench
git commit -m "feat(external-api-concepts-workbench): complete chapter 47 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 47](../roadmaps/ODOO.md#phase-47) | [CONTINUE TO ODOO CHAPTER 48](../roadmaps/ODOO.md#phase-48)


<a id="odoo-phase-48-project"></a>
### ODOO CHAPTER 48 PROJECT

#### PROJECT: EXTERNAL ODOO ACCESS DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Authenticate via XML-RPC/JSON-RPC, call execute_kw / execute, use a least-privilege integration user (and API keys where available), and avoid embedding admin passwords in apps.

**Chapter topic:** External Odoo Access

**Unit storyline:** Continue the **XIII. APIs and integrations** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for External Odoo Access that connects External API Architecture, Integration Users, Authentication and makes every important result inspectable.

#### LESSONS PRACTICED

- **48.1 — External API Architecture:** Represent External API Architecture in the design and justify one decision that depends on it.
- **48.2 — Integration Users:** Represent Integration Users in the design and justify one decision that depends on it.
- **48.3 — Authentication:** Represent Authentication in the design and justify one decision that depends on it.
- **48.4 — Calling Models:** Represent Calling Models in the design and justify one decision that depends on it.
- **48.5 — CRUD Remotely:** Represent CRUD Remotely in the design and justify one decision that depends on it.
- **48.6 — Domains:** Represent Domains in the design and justify one decision that depends on it.
- **48.7 — Permissions:** Represent Permissions in the design and justify one decision that depends on it.
- **48.8 — Version Compatibility:** Represent Version Compatibility in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for External Odoo Access that connects External API Architecture, Integration Users, Authentication and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for External Odoo Access.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIII. APIs and integrations unit workspace under odoo/story-13.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for External Odoo Access that connects External API Architecture, Integration Users, Authentication and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-13/chapter-48-external-odoo-access-design-studio
git commit -m "feat(external-odoo-access-design-studio): complete chapter 48 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 48](../roadmaps/ODOO.md#phase-48) | [CONTINUE TO ODOO CHAPTER 49](../roadmaps/ODOO.md#phase-49)


<a id="odoo-phase-49-project"></a>
### ODOO CHAPTER 49 PROJECT

#### PROJECT: BUILDING API ENDPOINTS DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Design versioned JSON HTTP APIs with @http.route, authenticate callers, validate payloads, and map errors to stable HTTP statuses.

**Chapter topic:** Building API Endpoints

**Unit storyline:** Continue the **XIII. APIs and integrations** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Building API Endpoints that connects API Routes, Request Parsing, Validation and makes every important result inspectable.

#### LESSONS PRACTICED

- **49.1 — API Routes:** Represent API Routes in the design and justify one decision that depends on it.
- **49.2 — Request Parsing:** Represent Request Parsing in the design and justify one decision that depends on it.
- **49.3 — Validation:** Represent Validation in the design and justify one decision that depends on it.
- **49.4 — Serialization:** Represent Serialization in the design and justify one decision that depends on it.
- **49.5 — Response Design:** Represent Response Design in the design and justify one decision that depends on it.
- **49.6 — Authentication:** Represent Authentication in the design and justify one decision that depends on it.
- **49.7 — Authorization:** Represent Authorization in the design and justify one decision that depends on it.
- **49.8 — Pagination:** Represent Pagination in the design and justify one decision that depends on it.
- **49.9 — Error Responses:** Represent Error Responses in the design and justify one decision that depends on it.
- **49.10 — API Versioning Concepts:** Represent API Versioning Concepts in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Building API Endpoints that connects API Routes, Request Parsing, Validation and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Building API Endpoints.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIII. APIs and integrations unit workspace under odoo/story-13.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Building API Endpoints that connects API Routes, Request Parsing, Validation and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-13/chapter-49-building-api-endpoints-design-studio
git commit -m "feat(building-api-endpoints-design-studio): complete chapter 49 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 49](../roadmaps/ODOO.md#phase-49) | [CONTINUE TO ODOO CHAPTER 50](../roadmaps/ODOO.md#phase-50)


<a id="odoo-phase-50-project"></a>
### ODOO CHAPTER 50 PROJECT

#### PROJECT: IDEMPOTENT WEBHOOK MODULE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Receive incoming webhooks, verify signatures, process events idempotently, and design outgoing event notifications without losing or duplicating critical side effects.

**Chapter topic:** Webhooks

**Unit storyline:** Continue the **XIII. APIs and integrations** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Idempotent Webhook Module as a focused exercise for Controllers and Webhooks. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **50.1 — Incoming Webhooks:** Implement or demonstrate Incoming Webhooks in the shared unit project and add a focused check.
- **50.2 — Outgoing Events:** Implement or demonstrate Outgoing Events in the shared unit project and add a focused check.
- **50.3 — Payload Validation:** Implement or demonstrate Payload Validation in the shared unit project and add a focused check.
- **50.4 — Signatures:** Implement or demonstrate Signatures in the shared unit project and add a focused check.
- **50.5 — Secrets:** Implement or demonstrate Secrets in the shared unit project and add a focused check.
- **50.6 — Idempotency:** Implement or demonstrate Idempotency in the shared unit project and add a focused check.
- **50.7 — Retries:** Implement or demonstrate Retries in the shared unit project and add a focused check.
- **50.8 — Duplicate Events:** Implement or demonstrate Duplicate Events in the shared unit project and add a focused check.
- **50.9 — Audit Logging:** Implement or demonstrate Audit Logging in the shared unit project and add a focused check.

#### SPECIFICATION

- Receive a signed webhook, validate timestamp/raw body, deduplicate event ID, update business state once, and return quickly.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Receive a signed webhook, validate timestamp/raw body, deduplicate event ID, update business state once, and return quickly.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Controllers and Webhooks in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named idempotent_webhook_module with a manifest, models, security, views, data, and tests folders.
2. Receive a signed webhook, validate timestamp/raw body, deduplicate event ID, update business state once, and return quickly.
3. Use Controllers and Webhooks in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for Controllers and Webhooks.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-13/chapter-50-idempotent-webhook-module
git commit -m "feat(idempotent-webhook-module): complete chapter 50 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 50](../roadmaps/ODOO.md#phase-50) | [CONTINUE TO ODOO CHAPTER 51](../roadmaps/ODOO.md#phase-51)


<a id="odoo-phase-51-project"></a>
### ODOO CHAPTER 51 PROJECT

#### PROJECT: EXTERNAL SYNC CLIENT

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Structure REST integrations with authentication, field mapping, sync jobs, retries/backoff, and visible error handling — without scattering HTTP calls across every model method.

**Chapter topic:** Third-Party Integrations

**Unit storyline:** Continue the **XIII. APIs and integrations** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build External Sync Client as a focused exercise for External APIs. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **51.1 — REST APIs:** Implement or demonstrate REST APIs in the shared unit project and add a focused check.
- **51.2 — API Authentication:** Implement or demonstrate API Authentication in the shared unit project and add a focused check.
- **51.3 — Mapping External Data:** Implement or demonstrate Mapping External Data in the shared unit project and add a focused check.
- **51.4 — Data Ownership:** Implement or demonstrate Data Ownership in the shared unit project and add a focused check.
- **51.5 — Synchronization:** Implement or demonstrate Synchronization in the shared unit project and add a focused check.
- **51.6 — Incremental Sync:** Implement or demonstrate Incremental Sync in the shared unit project and add a focused check.
- **51.7 — Scheduled Sync:** Implement or demonstrate Scheduled Sync in the shared unit project and add a focused check.
- **51.8 — Retries / Backoff:** Implement or demonstrate Retries / Backoff in the shared unit project and add a focused check.
- **51.9 — Rate Limiting:** Implement or demonstrate Rate Limiting in the shared unit project and add a focused check.
- **51.10 — Error Handling:** Implement or demonstrate Error Handling in the shared unit project and add a focused check.
- **51.11 — Integration Logs:** Implement or demonstrate Integration Logs in the shared unit project and add a focused check.

#### SPECIFICATION

- Synchronize selected records with a free local mock API using configuration, timeout, retry, pagination, mapping, and graceful failure.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Synchronize selected records with a free local mock API using configuration, timeout, retry, pagination, mapping, and graceful failure.
- Define a small input format, a transformed output format, and where failed records go.
- Use External APIs to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named external_sync_client with a manifest, models, security, views, data, and tests folders.
2. Synchronize selected records with a free local mock API using configuration, timeout, retry, pagination, mapping, and graceful failure.
3. Use External APIs to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for External APIs.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-13/chapter-51-external-sync-client
git commit -m "feat(external-sync-client): complete chapter 51 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 51](../roadmaps/ODOO.md#phase-51) | [CONTINUE TO ODOO CHAPTER 52](../roadmaps/ODOO.md#phase-52)


<a id="odoo-phase-52-project"></a>
### ODOO CHAPTER 52 PROJECT

#### PROJECT: PAYMENT SANDBOX INTEGRATION

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Explain Odoo’s payment.provider / payment.transaction flow, keep PCI scope small, verify provider webhooks idempotently, and reconcile payment state safely.

**Chapter topic:** Payment Integrations

**Unit storyline:** Continue the **XIII. APIs and integrations** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Payment Sandbox Integration as a focused exercise for Integrations and Payments. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **52.1 — Payment Architecture:** Represent Payment Architecture in the design and justify one decision that depends on it.
- **52.2 — Payment Providers:** Represent Payment Providers in the design and justify one decision that depends on it.
- **52.3 — Payment Transactions:** Represent Payment Transactions in the design and justify one decision that depends on it.
- **52.4 — Checkout Flow:** Represent Checkout Flow in the design and justify one decision that depends on it.
- **52.5 — Redirects:** Represent Redirects in the design and justify one decision that depends on it.
- **52.6 — Tokens:** Represent Tokens in the design and justify one decision that depends on it.
- **52.7 — Callbacks:** Represent Callbacks in the design and justify one decision that depends on it.
- **52.8 — Webhooks:** Represent Webhooks in the design and justify one decision that depends on it.
- **52.9 — Payment Status:** Represent Payment Status in the design and justify one decision that depends on it.
- **52.10 — Failure Handling:** Represent Failure Handling in the design and justify one decision that depends on it.
- **52.11 — Refund Concepts:** Represent Refund Concepts in the design and justify one decision that depends on it.

#### SPECIFICATION

- Integrate only a payment provider sandbox or offline reference flow with initiation, callback verification, idempotency, refund state, and no card storage.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Integrate only a payment provider sandbox or offline reference flow with initiation, callback verification, idempotency, refund state, and no card storage.
- Give the user one clear main action and keep all other features secondary.
- Use Integrations and Payments in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named payment_sandbox_integration with a manifest, models, security, views, data, and tests folders.
2. Integrate only a payment provider sandbox or offline reference flow with initiation, callback verification, idempotency, refund state, and no card storage.
3. Use Integrations and Payments in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Integrations and Payments.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-13/chapter-52-payment-sandbox-integration
git commit -m "feat(payment-sandbox-integration): complete chapter 52 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 52](../roadmaps/ODOO.md#phase-52) | [CONTINUE TO ODOO CHAPTER 53](../roadmaps/ODOO.md#phase-53)


## XIV. Modern Odoo frontend

**Shared unit storyline:** Keep one workspace for XIV. Modern Odoo frontend. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-53-project"></a>
### ODOO CHAPTER 53 PROJECT

#### PROJECT: ODOO JAVASCRIPT ARCHITECTURE DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Map how the Odoo web client loads — assets, registries, services, and OWL components — and decide when XML views are enough versus when you need JavaScript.

**Chapter topic:** Odoo JavaScript Architecture

**Unit storyline:** Continue the **XIV. Modern Odoo frontend** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Odoo JavaScript Architecture that connects Web Client, JavaScript Modules, Native JS Modules and makes every important result inspectable.

#### LESSONS PRACTICED

- **53.1 — Web Client:** Represent Web Client in the design and justify one decision that depends on it.
- **53.2 — JavaScript Modules:** Represent JavaScript Modules in the design and justify one decision that depends on it.
- **53.3 — Native JS Modules:** Represent Native JS Modules in the design and justify one decision that depends on it.
- **53.4 — Frontend Environment:** Represent Frontend Environment in the design and justify one decision that depends on it.
- **53.5 — Components:** Represent Components in the design and justify one decision that depends on it.
- **53.6 — Registries:** Represent Registries in the design and justify one decision that depends on it.
- **53.7 — Services:** Represent Services in the design and justify one decision that depends on it.
- **53.8 — Hooks:** Represent Hooks in the design and justify one decision that depends on it.
- **53.9 — Backend ↔ Frontend Communication:** Represent Backend ↔ Frontend Communication in the design and justify one decision that depends on it.
- **53.10 — Frontend Debugging:** Represent Frontend Debugging in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Odoo JavaScript Architecture that connects Web Client, JavaScript Modules, Native JS Modules and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Odoo JavaScript Architecture.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIV. Modern Odoo frontend unit workspace under odoo/story-14.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Odoo JavaScript Architecture that connects Web Client, JavaScript Modules, Native JS Modules and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-14/chapter-53-odoo-javascript-architecture-design-studio
git commit -m "feat(odoo-javascript-architecture-design-studio): complete chapter 53 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 53](../roadmaps/ODOO.md#phase-53) | [CONTINUE TO ODOO CHAPTER 54](../roadmaps/ODOO.md#phase-54)


<a id="odoo-phase-54-project"></a>
### ODOO CHAPTER 54 PROJECT

#### PROJECT: OWL FUNDAMENTALS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Build a small OWL component with an XML template, typed props, reactive state, and correct lifecycle hooks — following Odoo’s setup() convention.

**Chapter topic:** OWL Fundamentals

**Unit storyline:** Continue the **XIV. Modern Odoo frontend** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for OWL Fundamentals that connects Components, Templates, Props and makes every important result inspectable.

#### LESSONS PRACTICED

- **54.1 — Components:** Implement or demonstrate Components in the shared unit project and add a focused check.
- **54.2 — Templates:** Implement or demonstrate Templates in the shared unit project and add a focused check.
- **54.3 — Props:** Implement or demonstrate Props in the shared unit project and add a focused check.
- **54.4 — State:** Implement or demonstrate State in the shared unit project and add a focused check.
- **54.5 — Events:** Implement or demonstrate Events in the shared unit project and add a focused check.
- **54.6 — Lifecycle:** Implement or demonstrate Lifecycle in the shared unit project and add a focused check.
- **54.7 — Composition:** Implement or demonstrate Composition in the shared unit project and add a focused check.
- **54.8 — Subcomponents:** Implement or demonstrate Subcomponents in the shared unit project and add a focused check.
- **54.9 — Reactive UI:** Implement or demonstrate Reactive UI in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for OWL Fundamentals that connects Components, Templates, Props and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for OWL Fundamentals.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIV. Modern Odoo frontend unit workspace under odoo/story-14.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for OWL Fundamentals that connects Components, Templates, Props and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-14/chapter-54-owl-fundamentals-workbench
git commit -m "feat(owl-fundamentals-workbench): complete chapter 54 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 54](../roadmaps/ODOO.md#phase-54) | [CONTINUE TO ODOO CHAPTER 55](../roadmaps/ODOO.md#phase-55)


<a id="odoo-phase-55-project"></a>
### ODOO CHAPTER 55 PROJECT

#### PROJECT: SERVICES, REGISTRIES & HOOKS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Register and consume web client services with useService, place components and actions in the correct registry categories, and use common Owl/Odoo hooks without inventing global singletons.

**Chapter topic:** Services, Registries & Hooks

**Unit storyline:** Continue the **XIV. Modern Odoo frontend** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Services, Registries & Hooks that connects Registries, Registry Categories, Services and makes every important result inspectable.

#### LESSONS PRACTICED

- **55.1 — Registries:** Implement or demonstrate Registries in the shared unit project and add a focused check.
- **55.2 — Registry Categories:** Implement or demonstrate Registry Categories in the shared unit project and add a focused check.
- **55.3 — Services:** Implement or demonstrate Services in the shared unit project and add a focused check.
- **55.4 — Service Dependencies:** Implement or demonstrate Service Dependencies in the shared unit project and add a focused check.
- **55.5 — useService():** Implement or demonstrate useService() in the shared unit project and add a focused check.
- **55.6 — ORM Service:** Implement or demonstrate ORM Service in the shared unit project and add a focused check.
- **55.7 — RPC Service:** Implement or demonstrate RPC Service in the shared unit project and add a focused check.
- **55.8 — Notification Service:** Implement or demonstrate Notification Service in the shared unit project and add a focused check.
- **55.9 — Action Service:** Implement or demonstrate Action Service in the shared unit project and add a focused check.
- **55.10 — Hooks:** Implement or demonstrate Hooks in the shared unit project and add a focused check.
- **55.11 — useBus:** Implement or demonstrate useBus in the shared unit project and add a focused check.
- **55.12 — useAssets:** Implement or demonstrate useAssets in the shared unit project and add a focused check.
- **55.13 — Custom Hooks:** Implement or demonstrate Custom Hooks in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Services, Registries & Hooks that connects Registries, Registry Categories, Services and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Services, Registries & Hooks.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIV. Modern Odoo frontend unit workspace under odoo/story-14.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Services, Registries & Hooks that connects Registries, Registry Categories, Services and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-14/chapter-55-services-registries-hooks-workbench
git commit -m "feat(services-registries-hooks-workbench): complete chapter 55 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 55](../roadmaps/ODOO.md#phase-55) | [CONTINUE TO ODOO CHAPTER 56](../roadmaps/ODOO.md#phase-56)


<a id="odoo-phase-56-project"></a>
### ODOO CHAPTER 56 PROJECT

#### PROJECT: ASSETS & FRONTEND RESOURCES WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Declare backend (and related) asset bundles in __manifest__.py, place static files correctly, control load order with directives, and debug “my JS never runs” failures.

**Chapter topic:** Assets & Frontend Resources

**Unit storyline:** Continue the **XIV. Modern Odoo frontend** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Assets & Frontend Resources that connects Asset Bundles, JavaScript Assets, SCSS / CSS and makes every important result inspectable.

#### LESSONS PRACTICED

- **56.1 — Asset Bundles:** Implement or demonstrate Asset Bundles in the shared unit project and add a focused check.
- **56.2 — JavaScript Assets:** Implement or demonstrate JavaScript Assets in the shared unit project and add a focused check.
- **56.3 — SCSS / CSS:** Implement or demonstrate SCSS / CSS in the shared unit project and add a focused check.
- **56.4 — XML Templates:** Implement or demonstrate XML Templates in the shared unit project and add a focused check.
- **56.5 — Manifest Assets:** Implement or demonstrate Manifest Assets in the shared unit project and add a focused check.
- **56.6 — Lazy Loading:** Implement or demonstrate Lazy Loading in the shared unit project and add a focused check.
- **56.7 — Asset Debugging:** Implement or demonstrate Asset Debugging in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Assets & Frontend Resources that connects Asset Bundles, JavaScript Assets, SCSS / CSS and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Assets & Frontend Resources.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIV. Modern Odoo frontend unit workspace under odoo/story-14.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Assets & Frontend Resources that connects Asset Bundles, JavaScript Assets, SCSS / CSS and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-14/chapter-56-assets-frontend-resources-workbench
git commit -m "feat(assets-frontend-resources-workbench): complete chapter 56 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 56](../roadmaps/ODOO.md#phase-56) | [CONTINUE TO ODOO CHAPTER 57](../roadmaps/ODOO.md#phase-57)


<a id="odoo-phase-57-project"></a>
### ODOO CHAPTER 57 PROJECT

#### PROJECT: EXTENDING & PATCHING THE WEB CLIENT WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Patch existing Owl components and view controllers with patch(), choose patch over fork, and avoid upgrade-hostile overrides.

**Chapter topic:** Extending & Patching the Web Client

**Unit storyline:** Continue the **XIV. Modern Odoo frontend** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Extending & Patching the Web Client that connects Patching Code, Patching Components, Extending Components and makes every important result inspectable.

#### LESSONS PRACTICED

- **57.1 — Patching Code:** Implement or demonstrate Patching Code in the shared unit project and add a focused check.
- **57.2 — Patching Components:** Implement or demonstrate Patching Components in the shared unit project and add a focused check.
- **57.3 — Extending Components:** Implement or demonstrate Extending Components in the shared unit project and add a focused check.
- **57.4 — Extending Registries:** Implement or demonstrate Extending Registries in the shared unit project and add a focused check.
- **57.5 — Custom Field Widgets:** Implement or demonstrate Custom Field Widgets in the shared unit project and add a focused check.
- **57.6 — View Extensions:** Implement or demonstrate View Extensions in the shared unit project and add a focused check.
- **57.7 — Upgrade Safety:** Implement or demonstrate Upgrade Safety in the shared unit project and add a focused check.
- **57.8 — When Not to Patch:** Implement or demonstrate When Not to Patch in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Extending & Patching the Web Client that connects Patching Code, Patching Components, Extending Components and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Extending & Patching the Web Client.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIV. Modern Odoo frontend unit workspace under odoo/story-14.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Extending & Patching the Web Client that connects Patching Code, Patching Components, Extending Components and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-14/chapter-57-extending-patching-the-web-client-workbench
git commit -m "feat(extending-patching-the-web-client-workbenc): complete chapter 57 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 57](../roadmaps/ODOO.md#phase-57) | [CONTINUE TO ODOO CHAPTER 58](../roadmaps/ODOO.md#phase-58)


<a id="odoo-phase-58-project"></a>
### ODOO CHAPTER 58 PROJECT

#### PROJECT: OWL KPI WIDGET

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Register an Owl component as a client action, bind it with ir.actions.client and a menu, and load data through orm/rpc services with loading and error states.

**Chapter topic:** Client Actions & Advanced Frontend

**Unit storyline:** Continue the **XIV. Modern Odoo frontend** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build OWL KPI Widget as a focused exercise for OWL Frontend. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **58.1 — Client Actions:** Implement or demonstrate Client Actions in the shared unit project and add a focused check.
- **58.2 — Action Registry:** Implement or demonstrate Action Registry in the shared unit project and add a focused check.
- **58.3 — OWL Client Components:** Implement or demonstrate OWL Client Components in the shared unit project and add a focused check.
- **58.4 — Loading Server Data:** Implement or demonstrate Loading Server Data in the shared unit project and add a focused check.
- **58.5 — Custom Dashboards:** Implement or demonstrate Custom Dashboards in the shared unit project and add a focused check.
- **58.6 — Generic Components:** Implement or demonstrate Generic Components in the shared unit project and add a focused check.
- **58.7 — Error Handling:** Implement or demonstrate Error Handling in the shared unit project and add a focused check.
- **58.8 — Error Boundaries:** Implement or demonstrate Error Boundaries in the shared unit project and add a focused check.
- **58.9 — Odoo Editor Concepts:** Implement or demonstrate Odoo Editor Concepts in the shared unit project and add a focused check.
- **58.10 — Mobile Web APIs:** Implement or demonstrate Mobile Web APIs in the shared unit project and add a focused check.
- **58.11 — Responsive Odoo UI:** Implement or demonstrate Responsive Odoo UI in the shared unit project and add a focused check.

#### SPECIFICATION

- Build an OWL KPI widget that calls an authorized endpoint and shows loading, value, empty, error, denied, and refresh states.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build an OWL KPI widget that calls an authorized endpoint and shows loading, value, empty, error, denied, and refresh states.
- Give the user one clear main action and keep all other features secondary.
- Use OWL Frontend in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named owl_kpi_widget with a manifest, models, security, views, data, and tests folders.
2. Build an OWL KPI widget that calls an authorized endpoint and shows loading, value, empty, error, denied, and refresh states.
3. Use OWL Frontend in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for OWL Frontend.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-14/chapter-58-owl-kpi-widget
git commit -m "feat(owl-kpi-widget): complete chapter 58 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 58](../roadmaps/ODOO.md#phase-58) | [CONTINUE TO ODOO CHAPTER 59](../roadmaps/ODOO.md#phase-59)


## XV. Files, attachments and media

**Shared unit storyline:** Keep one workspace for XV. Files, attachments and media. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-59-project"></a>
### ODOO CHAPTER 59 PROJECT

#### PROJECT: ATTACHMENTS & FILESTORE WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Work confidently with every topic under Attachments & Filestore — not as a glossary, but as mechanisms you can implement and debug.

**Chapter topic:** Attachments & Filestore

**Unit storyline:** Continue the **XV. Files, attachments and media** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Attachments & Filestore that connects ir.attachment, Binary Fields, Image Fields and makes every important result inspectable.

#### LESSONS PRACTICED

- **59.1 — ir.attachment:** Implement or demonstrate ir.attachment in the shared unit project and add a focused check.
- **59.2 — Binary Fields:** Implement or demonstrate Binary Fields in the shared unit project and add a focused check.
- **59.3 — Image Fields:** Implement or demonstrate Image Fields in the shared unit project and add a focused check.
- **59.4 — Database vs Filestore:** Implement or demonstrate Database vs Filestore in the shared unit project and add a focused check.
- **59.5 — Attachment Relationships:** Implement or demonstrate Attachment Relationships in the shared unit project and add a focused check.
- **59.6 — Uploads:** Implement or demonstrate Uploads in the shared unit project and add a focused check.
- **59.7 — Downloads:** Implement or demonstrate Downloads in the shared unit project and add a focused check.
- **59.8 — Attachment Access:** Implement or demonstrate Attachment Access in the shared unit project and add a focused check.
- **59.9 — Attachment Security:** Implement or demonstrate Attachment Security in the shared unit project and add a focused check.
- **59.10 — Public / Private Files:** Implement or demonstrate Public / Private Files in the shared unit project and add a focused check.
- **59.11 — LAB — Secure Document Attachment Feature:** Implement or demonstrate LAB — Secure Document Attachment Feature in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Attachments & Filestore that connects ir.attachment, Binary Fields, Image Fields and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Attachments & Filestore.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XV. Files, attachments and media unit workspace under odoo/story-15.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Attachments & Filestore that connects ir.attachment, Binary Fields, Image Fields and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-15/chapter-59-attachments-filestore-workbench
git commit -m "feat(attachments-filestore-workbench): complete chapter 59 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 59](../roadmaps/ODOO.md#phase-59) | [CONTINUE TO ODOO CHAPTER 60](../roadmaps/ODOO.md#phase-60)


## XVI. PostgreSQL and performance

**Shared unit storyline:** Keep one workspace for XVI. PostgreSQL and performance. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-60-project"></a>
### ODOO CHAPTER 60 PROJECT

#### PROJECT: ODOO DATABASE STRUCTURE WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Map Odoo models to PostgreSQL tables, recognize ir_* metadata tables, Many2many relation tables, and explain why hand-editing registry rows is dangerous.

**Chapter topic:** Odoo Database Structure

**Unit storyline:** Continue the **XVI. PostgreSQL and performance** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Odoo Database Structure that connects Models → Tables, Fields → Columns, Many2many Relation Tables and makes every important result inspectable.

#### LESSONS PRACTICED

- **60.1 — Models → Tables:** Implement or demonstrate Models → Tables in the shared unit project and add a focused check.
- **60.2 — Fields → Columns:** Implement or demonstrate Fields → Columns in the shared unit project and add a focused check.
- **60.3 — Many2many Relation Tables:** Implement or demonstrate Many2many Relation Tables in the shared unit project and add a focused check.
- **60.4 — Foreign Keys:** Implement or demonstrate Foreign Keys in the shared unit project and add a focused check.
- **60.5 — Metadata Tables:** Implement or demonstrate Metadata Tables in the shared unit project and add a focused check.
- **60.6 — ir_model:** Implement or demonstrate ir_model in the shared unit project and add a focused check.
- **60.7 — ir_model_fields:** Implement or demonstrate ir_model_fields in the shared unit project and add a focused check.
- **60.8 — Inspecting the Schema:** Implement or demonstrate Inspecting the Schema in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Odoo Database Structure that connects Models → Tables, Fields → Columns, Many2many Relation Tables and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Odoo Database Structure.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVI. PostgreSQL and performance unit workspace under odoo/story-16.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Odoo Database Structure that connects Models → Tables, Fields → Columns, Many2many Relation Tables and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-16/chapter-60-odoo-database-structure-workbench
git commit -m "feat(odoo-database-structure-workbench): complete chapter 60 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 60](../roadmaps/ODOO.md#phase-60) | [CONTINUE TO ODOO CHAPTER 61](../roadmaps/ODOO.md#phase-61)


<a id="odoo-phase-61-project"></a>
### ODOO CHAPTER 61 PROJECT

#### PROJECT: POSTGRESQL FOR ODOO DEVELOPERS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Use psql (or an equivalent) to inspect schemas, read basic query results, and explain the boundary between DBA SQL and Odoo ORM responsibilities.

**Chapter topic:** PostgreSQL for Odoo Developers

**Unit storyline:** Continue the **XVI. PostgreSQL and performance** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for PostgreSQL for Odoo Developers that connects SELECT, JOIN, GROUP BY and makes every important result inspectable.

#### LESSONS PRACTICED

- **61.1 — SELECT:** Implement or demonstrate SELECT in the shared unit project and add a focused check.
- **61.2 — JOIN:** Implement or demonstrate JOIN in the shared unit project and add a focused check.
- **61.3 — GROUP BY:** Implement or demonstrate GROUP BY in the shared unit project and add a focused check.
- **61.4 — Aggregates:** Implement or demonstrate Aggregates in the shared unit project and add a focused check.
- **61.5 — CTE Concepts:** Implement or demonstrate CTE Concepts in the shared unit project and add a focused check.
- **61.6 — Constraints:** Implement or demonstrate Constraints in the shared unit project and add a focused check.
- **61.7 — psql:** Implement or demonstrate psql in the shared unit project and add a focused check.
- **61.8 — Database Inspection:** Implement or demonstrate Database Inspection in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for PostgreSQL for Odoo Developers that connects SELECT, JOIN, GROUP BY and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for PostgreSQL for Odoo Developers.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVI. PostgreSQL and performance unit workspace under odoo/story-16.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for PostgreSQL for Odoo Developers that connects SELECT, JOIN, GROUP BY and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-16/chapter-61-postgresql-for-odoo-developers-workbench
git commit -m "feat(postgresql-for-odoo-developers-workbench): complete chapter 61 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 61](../roadmaps/ODOO.md#phase-61) | [CONTINUE TO ODOO CHAPTER 62](../roadmaps/ODOO.md#phase-62)


<a id="odoo-phase-62-project"></a>
### ODOO CHAPTER 62 PROJECT

#### PROJECT: TRANSACTIONS & CONCURRENCY WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Explain how an Odoo request maps to a database transaction, what flushing means, and how concurrent updates produce lock waits or inconsistent reads — without inventing DIY locking everywhere.

**Chapter topic:** Transactions & Concurrency

**Unit storyline:** Continue the **XVI. PostgreSQL and performance** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Transactions & Concurrency that connects Transactions, Commit, Rollback and makes every important result inspectable.

#### LESSONS PRACTICED

- **62.1 — Transactions:** Implement or demonstrate Transactions in the shared unit project and add a focused check.
- **62.2 — Commit:** Implement or demonstrate Commit in the shared unit project and add a focused check.
- **62.3 — Rollback:** Implement or demonstrate Rollback in the shared unit project and add a focused check.
- **62.4 — Isolation:** Implement or demonstrate Isolation in the shared unit project and add a focused check.
- **62.5 — Locks:** Implement or demonstrate Locks in the shared unit project and add a focused check.
- **62.6 — Deadlocks:** Implement or demonstrate Deadlocks in the shared unit project and add a focused check.
- **62.7 — Concurrent Updates:** Implement or demonstrate Concurrent Updates in the shared unit project and add a focused check.
- **62.8 — Savepoints:** Implement or demonstrate Savepoints in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Transactions & Concurrency that connects Transactions, Commit, Rollback and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Transactions & Concurrency.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVI. PostgreSQL and performance unit workspace under odoo/story-16.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Transactions & Concurrency that connects Transactions, Commit, Rollback and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-16/chapter-62-transactions-concurrency-workbench
git commit -m "feat(transactions-concurrency-workbench): complete chapter 62 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 62](../roadmaps/ODOO.md#phase-62) | [CONTINUE TO ODOO CHAPTER 63](../roadmaps/ODOO.md#phase-63)


<a id="odoo-phase-63-project"></a>
### ODOO CHAPTER 63 PROJECT

#### PROJECT: INDEXES & QUERY PLANS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Read a basic EXPLAIN (ANALYZE, BUFFERS) plan, relate slow domains to missing indexes, and add index=True / SQL indexes deliberately — not on every column.

**Chapter topic:** Indexes & Query Plans

**Unit storyline:** Continue the **XVI. PostgreSQL and performance** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Indexes & Query Plans that connects Indexes, B-Tree Intuition, Selectivity and makes every important result inspectable.

#### LESSONS PRACTICED

- **63.1 — Indexes:** Implement or demonstrate Indexes in the shared unit project and add a focused check.
- **63.2 — B-Tree Intuition:** Implement or demonstrate B-Tree Intuition in the shared unit project and add a focused check.
- **63.3 — Selectivity:** Implement or demonstrate Selectivity in the shared unit project and add a focused check.
- **63.4 — EXPLAIN:** Implement or demonstrate EXPLAIN in the shared unit project and add a focused check.
- **63.5 — EXPLAIN ANALYZE:** Implement or demonstrate EXPLAIN ANALYZE in the shared unit project and add a focused check.
- **63.6 — Query Plans:** Implement or demonstrate Query Plans in the shared unit project and add a focused check.
- **63.7 — Sequential Scan:** Implement or demonstrate Sequential Scan in the shared unit project and add a focused check.
- **63.8 — When to Add an Index:** Implement or demonstrate When to Add an Index in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Indexes & Query Plans that connects Indexes, B-Tree Intuition, Selectivity and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Indexes & Query Plans.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVI. PostgreSQL and performance unit workspace under odoo/story-16.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Indexes & Query Plans that connects Indexes, B-Tree Intuition, Selectivity and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-16/chapter-63-indexes-query-plans-workbench
git commit -m "feat(indexes-query-plans-workbench): complete chapter 63 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 63](../roadmaps/ODOO.md#phase-63) | [CONTINUE TO ODOO CHAPTER 64](../roadmaps/ODOO.md#phase-64)


<a id="odoo-phase-64-project"></a>
### ODOO CHAPTER 64 PROJECT

#### PROJECT: ORM QUERY TUNING REPORT

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Spot and fix classic Odoo N+1 patterns, use mapped/filtered wisely, prefetch intentionally, paginate searches, and know when read_group beats loading every row.

**Chapter topic:** ORM Performance

**Unit storyline:** Continue the **XVI. PostgreSQL and performance** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build ORM Query Tuning Report as a focused exercise for PostgreSQL for Odoo. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **64.1 — Query Counts:** Add an executable Query Counts procedure with verification and rollback or recovery guidance.
- **64.2 — Batch Operations:** Add an executable Batch Operations procedure with verification and rollback or recovery guidance.
- **64.3 — Prefetch:** Add an executable Prefetch procedure with verification and rollback or recovery guidance.
- **64.4 — Cache:** Add an executable Cache procedure with verification and rollback or recovery guidance.
- **64.5 — N+1 Problems:** Add an executable N+1 Problems procedure with verification and rollback or recovery guidance.
- **64.6 — Computed Field Costs:** Add an executable Computed Field Costs procedure with verification and rollback or recovery guidance.
- **64.7 — Stored Computations:** Add an executable Stored Computations procedure with verification and rollback or recovery guidance.
- **64.8 — Efficient Domains:** Add an executable Efficient Domains procedure with verification and rollback or recovery guidance.
- **64.9 — Algorithms & Complexity:** Add an executable Algorithms & Complexity procedure with verification and rollback or recovery guidance.
- **64.10 — Database Indexes from Models:** Add an executable Database Indexes from Models procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Measure an Odoo list/report query, inspect SQL/EXPLAIN, remove an N+1 pattern, add a justified index, and compare before/after.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Measure an Odoo list/report query, inspect SQL/EXPLAIN, remove an N+1 pattern, add a justified index, and compare before/after.
- Define one realistic scenario, its boundaries, and the intended reader for the ORM Query Tuning Report.
- Collect or create the exact inputs needed to apply PostgreSQL for Odoo; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named orm_query_tuning_report with a manifest, models, security, views, data, and tests folders.
2. Measure an Odoo list/report query, inspect SQL/EXPLAIN, remove an N+1 pattern, add a justified index, and compare before/after.
3. Collect or create the exact inputs needed to apply PostgreSQL for Odoo; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for PostgreSQL for Odoo.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-16/chapter-64-orm-query-tuning-report
git commit -m "feat(orm-query-tuning-report): complete chapter 64 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 64](../roadmaps/ODOO.md#phase-64) | [CONTINUE TO ODOO CHAPTER 65](../roadmaps/ODOO.md#phase-65)


<a id="odoo-phase-65-project"></a>
### ODOO CHAPTER 65 PROJECT

#### PROJECT: PROFILING & OPTIMIZATION WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Enable Odoo’s profiler, read speedscope-oriented results at a practical level, combine SQL logs with EXPLAIN, and apply a measure → fix → remeasure loop.

**Chapter topic:** Profiling & Optimization

**Unit storyline:** Continue the **XVI. PostgreSQL and performance** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Profiling & Optimization that connects Odoo Profiler, SQL Profiling, Query Collector and makes every important result inspectable.

#### LESSONS PRACTICED

- **65.1 — Odoo Profiler:** Implement or demonstrate Odoo Profiler in the shared unit project and add a focused check.
- **65.2 — SQL Profiling:** Implement or demonstrate SQL Profiling in the shared unit project and add a focused check.
- **65.3 — Query Collector:** Implement or demonstrate Query Collector in the shared unit project and add a focused check.
- **65.4 — Periodic Collector:** Implement or demonstrate Periodic Collector in the shared unit project and add a focused check.
- **65.5 — Finding Bottlenecks:** Implement or demonstrate Finding Bottlenecks in the shared unit project and add a focused check.
- **65.6 — Measuring Before Optimizing:** Implement or demonstrate Measuring Before Optimizing in the shared unit project and add a focused check.
- **65.7 — Benchmarking:** Implement or demonstrate Benchmarking in the shared unit project and add a focused check.
- **65.8 — Performance Regression:** Implement or demonstrate Performance Regression in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Profiling & Optimization that connects Odoo Profiler, SQL Profiling, Query Collector and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Profiling & Optimization.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVI. PostgreSQL and performance unit workspace under odoo/story-16.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Profiling & Optimization that connects Odoo Profiler, SQL Profiling, Query Collector and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-16/chapter-65-profiling-optimization-workbench
git commit -m "feat(profiling-optimization-workbench): complete chapter 65 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 65](../roadmaps/ODOO.md#phase-65) | [CONTINUE TO ODOO CHAPTER 66](../roadmaps/ODOO.md#phase-66)


## XVII. Testing and debugging

**Shared unit storyline:** Keep one workspace for XVII. Testing and debugging. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-66-project"></a>
### ODOO CHAPTER 66 PROJECT

#### PROJECT: ODOO LOGGING & DEBUGGING WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Configure meaningful log levels, place strategic logs, use debugger breakpoints on Python paths, and debug AccessError / ValidationError without cargo-cult printing.

**Chapter topic:** Odoo Logging & Debugging

**Unit storyline:** Continue the **XVII. Testing and debugging** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Odoo Logging & Debugging that connects Log Levels, Server Logs, Stack Traces and makes every important result inspectable.

#### LESSONS PRACTICED

- **66.1 — Log Levels:** Implement or demonstrate Log Levels in the shared unit project and add a focused check.
- **66.2 — Server Logs:** Implement or demonstrate Server Logs in the shared unit project and add a focused check.
- **66.3 — Stack Traces:** Implement or demonstrate Stack Traces in the shared unit project and add a focused check.
- **66.4 — Python Debugger:** Implement or demonstrate Python Debugger in the shared unit project and add a focused check.
- **66.5 — Breakpoints:** Implement or demonstrate Breakpoints in the shared unit project and add a focused check.
- **66.6 — Odoo Shell:** Implement or demonstrate Odoo Shell in the shared unit project and add a focused check.
- **66.7 — Developer Tools:** Implement or demonstrate Developer Tools in the shared unit project and add a focused check.
- **66.8 — Reproducing Bugs:** Implement or demonstrate Reproducing Bugs in the shared unit project and add a focused check.
- **66.9 — Root Cause Analysis:** Implement or demonstrate Root Cause Analysis in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Odoo Logging & Debugging that connects Log Levels, Server Logs, Stack Traces and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Odoo Logging & Debugging.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVII. Testing and debugging unit workspace under odoo/story-17.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Odoo Logging & Debugging that connects Log Levels, Server Logs, Stack Traces and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-17/chapter-66-odoo-logging-debugging-workbench
git commit -m "feat(odoo-logging-debugging-workbench): complete chapter 66 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 66](../roadmaps/ODOO.md#phase-66) | [CONTINUE TO ODOO CHAPTER 67](../roadmaps/ODOO.md#phase-67)


<a id="odoo-phase-67-project"></a>
### ODOO CHAPTER 67 PROJECT

#### PROJECT: PYTHON TESTS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Structure a tests/ package, write TransactionCase tests with assertions, understand savepoint isolation between methods, and tag tests for install vs post-install runs.

**Chapter topic:** Python Tests

**Unit storyline:** Continue the **XVII. Testing and debugging** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Python Tests that connects Test Module Structure, TransactionCase, Savepoint / Transaction Concepts and makes every important result inspectable.

#### LESSONS PRACTICED

- **67.1 — Test Module Structure:** Implement or demonstrate Test Module Structure in the shared unit project and add a focused check.
- **67.2 — TransactionCase:** Implement or demonstrate TransactionCase in the shared unit project and add a focused check.
- **67.3 — Savepoint / Transaction Concepts:** Implement or demonstrate Savepoint / Transaction Concepts in the shared unit project and add a focused check.
- **67.4 — Test Data:** Implement or demonstrate Test Data in the shared unit project and add a focused check.
- **67.5 — setUp():** Implement or demonstrate setUp() in the shared unit project and add a focused check.
- **67.6 — Assertions:** Implement or demonstrate Assertions in the shared unit project and add a focused check.
- **67.7 — Test Tags:** Implement or demonstrate Test Tags in the shared unit project and add a focused check.
- **67.8 — Running Selected Tests:** Implement or demonstrate Running Selected Tests in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Python Tests that connects Test Module Structure, TransactionCase, Savepoint / Transaction Concepts and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Python Tests.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVII. Testing and debugging unit workspace under odoo/story-17.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Python Tests that connects Test Module Structure, TransactionCase, Savepoint / Transaction Concepts and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-17/chapter-67-python-tests-workbench
git commit -m "feat(python-tests-workbench): complete chapter 67 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 67](../roadmaps/ODOO.md#phase-67) | [CONTINUE TO ODOO CHAPTER 68](../roadmaps/ODOO.md#phase-68)


<a id="odoo-phase-68-project"></a>
### ODOO CHAPTER 68 PROJECT

#### PROJECT: TESTING BUSINESS LOGIC ANALYSIS DOSSIER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Design tests for state transitions, constraints, computes, and wizards so business invariants stay enforced under refactor.

**Chapter topic:** Testing Business Logic

**Unit storyline:** Continue the **XVII. Testing and debugging** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an evidence-backed analysis for Testing Business Logic that connects CRUD Tests, Computed Field Tests, Constraint Tests and makes every important result inspectable.

#### LESSONS PRACTICED

- **68.1 — CRUD Tests:** Apply CRUD Tests to the controlled example and record the reasoning and result.
- **68.2 — Computed Field Tests:** Apply Computed Field Tests to the controlled example and record the reasoning and result.
- **68.3 — Constraint Tests:** Apply Constraint Tests to the controlled example and record the reasoning and result.
- **68.4 — Workflow Tests:** Apply Workflow Tests to the controlled example and record the reasoning and result.
- **68.5 — Cron Tests:** Apply Cron Tests to the controlled example and record the reasoning and result.
- **68.6 — Edge Cases:** Apply Edge Cases to the controlled example and record the reasoning and result.
- **68.7 — Regression Tests:** Apply Regression Tests to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Produce an evidence-backed analysis for Testing Business Logic that connects CRUD Tests, Computed Field Tests, Constraint Tests and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused analysis artifact for Testing Business Logic.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo database or documented simulation.
- Markdown.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVII. Testing and debugging unit workspace under odoo/story-17.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an evidence-backed analysis for Testing Business Logic that connects CRUD Tests, Computed Field Tests, Constraint Tests and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-17/chapter-68-testing-business-logic-analysis-dossier
git commit -m "feat(testing-business-logic-analysis-dossier): complete chapter 68 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 68](../roadmaps/ODOO.md#phase-68) | [CONTINUE TO ODOO CHAPTER 69](../roadmaps/ODOO.md#phase-69)


<a id="odoo-phase-69-project"></a>
### ODOO CHAPTER 69 PROJECT

#### PROJECT: TESTING SECURITY WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Write tests that prove groups can or cannot CRUD models, that record rules isolate rows, and that AccessError appears when it should — including multi-company gotchas.

**Chapter topic:** Testing Security

**Unit storyline:** Continue the **XVII. Testing and debugging** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Testing Security that connects User Context, ACL Tests, Record Rule Tests and makes every important result inspectable.

#### LESSONS PRACTICED

- **69.1 — User Context:** Implement or demonstrate User Context in the shared unit project and add a focused check.
- **69.2 — ACL Tests:** Implement or demonstrate ACL Tests in the shared unit project and add a focused check.
- **69.3 — Record Rule Tests:** Implement or demonstrate Record Rule Tests in the shared unit project and add a focused check.
- **69.4 — sudo() Tests:** Implement or demonstrate sudo() Tests in the shared unit project and add a focused check.
- **69.5 — Multi-Company Tests:** Implement or demonstrate Multi-Company Tests in the shared unit project and add a focused check.
- **69.6 — Portal Access Tests:** Implement or demonstrate Portal Access Tests in the shared unit project and add a focused check.
- **69.7 — Permission Regression:** Implement or demonstrate Permission Regression in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Testing Security that connects User Context, ACL Tests, Record Rule Tests and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Testing Security.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVII. Testing and debugging unit workspace under odoo/story-17.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Testing Security that connects User Context, ACL Tests, Record Rule Tests and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-17/chapter-69-testing-security-workbench
git commit -m "feat(testing-security-workbench): complete chapter 69 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 69](../roadmaps/ODOO.md#phase-69) | [CONTINUE TO ODOO CHAPTER 70](../roadmaps/ODOO.md#phase-70)


<a id="odoo-phase-70-project"></a>
### ODOO CHAPTER 70 PROJECT

#### PROJECT: WEB & FRONTEND TESTING REHEARSAL

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Use HttpCase / tour-style and controller tests at a practical level, know when JS unit tests vs tours vs Python tests fit, and protect critical web/portal paths.

**Chapter topic:** Web & Frontend Testing

**Unit storyline:** Continue the **XVII. Testing and debugging** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Complete a timed rehearsal and debrief for Web & Frontend Testing that connects HTTP Tests, Controller Tests, browser_js and makes every important result inspectable.

#### LESSONS PRACTICED

- **70.1 — HTTP Tests:** Practice explaining or applying HTTP Tests under a timer and record the evidence and correction.
- **70.2 — Controller Tests:** Practice explaining or applying Controller Tests under a timer and record the evidence and correction.
- **70.3 — browser_js:** Practice explaining or applying browser_js under a timer and record the evidence and correction.
- **70.4 — Test Tours:** Practice explaining or applying Test Tours under a timer and record the evidence and correction.
- **70.5 — Integration Tours:** Practice explaining or applying Integration Tours under a timer and record the evidence and correction.
- **70.6 — JavaScript Unit Tests:** Practice explaining or applying JavaScript Unit Tests under a timer and record the evidence and correction.
- **70.7 — HOOT:** Practice explaining or applying HOOT under a timer and record the evidence and correction.
- **70.8 — @odoo/hoot-dom:** Practice explaining or applying @odoo/hoot-dom under a timer and record the evidence and correction.
- **70.9 — Web Test Helpers:** Practice explaining or applying Web Test Helpers under a timer and record the evidence and correction.
- **70.10 — Mock Server:** Practice explaining or applying Mock Server under a timer and record the evidence and correction.
- **70.11 — Mocking RPC:** Practice explaining or applying Mocking RPC under a timer and record the evidence and correction.
- **70.12 — End-to-End Flows:** Practice explaining or applying End-to-End Flows under a timer and record the evidence and correction.

#### SPECIFICATION

- Complete a timed rehearsal and debrief for Web & Frontend Testing that connects HTTP Tests, Controller Tests, browser_js and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused rehearsal artifact for Web & Frontend Testing.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A timer.
- A disposable Odoo environment.
- Markdown and Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVII. Testing and debugging unit workspace under odoo/story-17.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Complete a timed rehearsal and debrief for Web & Frontend Testing that connects HTTP Tests, Controller Tests, browser_js and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-17/chapter-70-web-frontend-testing-rehearsal
git commit -m "feat(web-frontend-testing-rehearsal): complete chapter 70 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 70](../roadmaps/ODOO.md#phase-70) | [CONTINUE TO ODOO CHAPTER 71](../roadmaps/ODOO.md#phase-71)


<a id="odoo-phase-71-project"></a>
### ODOO CHAPTER 71 PROJECT

#### PROJECT: UPGRADE-SAFE TEST SUITE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Work confidently with every topic under Performance & Regression Testing — not as a glossary, but as mechanisms you can implement and debug.

**Chapter topic:** Performance & Regression Testing

**Unit storyline:** Continue the **XVII. Testing and debugging** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Upgrade-Safe Test Suite as a focused exercise for Testing, Debugging, and Upgrades. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **71.1 — Query Count Tests:** Implement or demonstrate Query Count Tests in the shared unit project and add a focused check.
- **71.2 — assertQueryCount():** Implement or demonstrate assertQueryCount() in the shared unit project and add a focused check.
- **71.3 — --log-sql:** Implement or demonstrate --log-sql in the shared unit project and add a focused check.
- **71.4 — Performance Budgets:** Implement or demonstrate Performance Budgets in the shared unit project and add a focused check.
- **71.5 — Regression Detection:** Implement or demonstrate Regression Detection in the shared unit project and add a focused check.
- **71.6 — Repeatable Benchmarks:** Implement or demonstrate Repeatable Benchmarks in the shared unit project and add a focused check.

#### SPECIFICATION

- Create install, model, security, workflow, controller, and migration tests that pass before and after an addon upgrade.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create install, model, security, workflow, controller, and migration tests that pass before and after an addon upgrade.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Testing, Debugging, and Upgrades and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named upgrade_safe_test_suite with a manifest, models, security, views, data, and tests folders.
2. Create install, model, security, workflow, controller, and migration tests that pass before and after an addon upgrade.
3. Use a metric connected to Testing, Debugging, and Upgrades and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Testing, Debugging, and Upgrades.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-17/chapter-71-upgrade-safe-test-suite
git commit -m "feat(upgrade-safe-test-suite): complete chapter 71 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 71](../roadmaps/ODOO.md#phase-71) | [CONTINUE TO ODOO CHAPTER 72](../roadmaps/ODOO.md#phase-72)


## XVIII. CLI and developer tooling

**Shared unit storyline:** Keep one workspace for XVIII. CLI and developer tooling. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-72-project"></a>
### ODOO CHAPTER 72 PROJECT

#### PROJECT: ODOO CLI & DEVELOPER COMMANDS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Work confidently with every topic under Odoo CLI & Developer Commands — not as a glossary, but as mechanisms you can implement and debug.

**Chapter topic:** Odoo CLI & Developer Commands

**Unit storyline:** Continue the **XVIII. CLI and developer tooling** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Odoo CLI & Developer Commands that connects odoo-bin / odoo, Configuration File, Database Selection and makes every important result inspectable.

#### LESSONS PRACTICED

- **72.1 — odoo-bin / odoo:** Implement or demonstrate odoo-bin / odoo in the shared unit project and add a focused check.
- **72.2 — Configuration File:** Implement or demonstrate Configuration File in the shared unit project and add a focused check.
- **72.3 — Database Selection:** Implement or demonstrate Database Selection in the shared unit project and add a focused check.
- **72.4 — -i Install:** Implement or demonstrate -i Install in the shared unit project and add a focused check.
- **72.5 — -u Upgrade:** Implement or demonstrate -u Upgrade in the shared unit project and add a focused check.
- **72.6 — --addons-path:** Implement or demonstrate --addons-path in the shared unit project and add a focused check.
- **72.7 — --dev:** Implement or demonstrate --dev in the shared unit project and add a focused check.
- **72.8 — --log-level:** Implement or demonstrate --log-level in the shared unit project and add a focused check.
- **72.9 — --log-sql:** Implement or demonstrate --log-sql in the shared unit project and add a focused check.
- **72.10 — --test-enable:** Implement or demonstrate --test-enable in the shared unit project and add a focused check.
- **72.11 — --test-tags:** Implement or demonstrate --test-tags in the shared unit project and add a focused check.
- **72.12 — --stop-after-init:** Implement or demonstrate --stop-after-init in the shared unit project and add a focused check.
- **72.13 — shell:** Implement or demonstrate shell in the shared unit project and add a focused check.
- **72.14 — scaffold:** Implement or demonstrate scaffold in the shared unit project and add a focused check.
- **72.15 — LAB — Complete CLI Development Workflow:** Implement or demonstrate LAB — Complete CLI Development Workflow in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Odoo CLI & Developer Commands that connects odoo-bin / odoo, Configuration File, Database Selection and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Odoo CLI & Developer Commands.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XVIII. CLI and developer tooling unit workspace under odoo/story-18.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Odoo CLI & Developer Commands that connects odoo-bin / odoo, Configuration File, Database Selection and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-18/chapter-72-odoo-cli-developer-commands-workbench
git commit -m "feat(odoo-cli-developer-commands-workbench): complete chapter 72 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 72](../roadmaps/ODOO.md#phase-72) | [CONTINUE TO ODOO CHAPTER 73](../roadmaps/ODOO.md#phase-73)


## XIX. Deployment and operations

**Shared unit storyline:** Keep one workspace for XIX. Deployment and operations. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-73-project"></a>
### ODOO CHAPTER 73 PROJECT

#### PROJECT: ODOO CONFIGURATION WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Author a production-minded odoo.conf (or equivalent CLI flags): database connection, addons_path, admin_passwd, dbfilter, logging, data/filestore paths, and the difference between “works on my machine” and “safe on the internet.”.

**Chapter topic:** Odoo Configuration

**Unit storyline:** Continue the **XIX. Deployment and operations** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Odoo Configuration that connects odoo.conf, addons_path, db_host and makes every important result inspectable.

#### LESSONS PRACTICED

- **73.1 — odoo.conf:** Implement or demonstrate odoo.conf in the shared unit project and add a focused check.
- **73.2 — addons_path:** Implement or demonstrate addons_path in the shared unit project and add a focused check.
- **73.3 — db_host:** Implement or demonstrate db_host in the shared unit project and add a focused check.
- **73.4 — db_port:** Implement or demonstrate db_port in the shared unit project and add a focused check.
- **73.5 — db_user:** Implement or demonstrate db_user in the shared unit project and add a focused check.
- **73.6 — Database Filters:** Implement or demonstrate Database Filters in the shared unit project and add a focused check.
- **73.7 — Logging:** Implement or demonstrate Logging in the shared unit project and add a focused check.
- **73.8 — Proxy Mode:** Implement or demonstrate Proxy Mode in the shared unit project and add a focused check.
- **73.9 — Secrets:** Implement or demonstrate Secrets in the shared unit project and add a focused check.
- **73.10 — Environment-Specific Configuration:** Implement or demonstrate Environment-Specific Configuration in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Odoo Configuration that connects odoo.conf, addons_path, db_host and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Odoo Configuration.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIX. Deployment and operations unit workspace under odoo/story-19.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Odoo Configuration that connects odoo.conf, addons_path, db_host and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-19/chapter-73-odoo-configuration-workbench
git commit -m "feat(odoo-configuration-workbench): complete chapter 73 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 73](../roadmaps/ODOO.md#phase-73) | [CONTINUE TO ODOO CHAPTER 74](../roadmaps/ODOO.md#phase-74)


<a id="odoo-phase-74-project"></a>
### ODOO CHAPTER 74 PROJECT

#### PROJECT: LINUX DEPLOYMENT DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Describe a sane on-premise layout: dedicated OS user, Python venv or packaged install, PostgreSQL role (not superuser), systemd service, and a repeatable start/stop/upgrade routine aligned with the [source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html) docs.

**Chapter topic:** Linux Deployment

**Unit storyline:** Continue the **XIX. Deployment and operations** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Linux Deployment that connects Linux User, Filesystem Layout, Python Environment and makes every important result inspectable.

#### LESSONS PRACTICED

- **74.1 — Linux User:** Represent Linux User in the design and justify one decision that depends on it.
- **74.2 — Filesystem Layout:** Represent Filesystem Layout in the design and justify one decision that depends on it.
- **74.3 — Python Environment:** Represent Python Environment in the design and justify one decision that depends on it.
- **74.4 — Source Deployment:** Represent Source Deployment in the design and justify one decision that depends on it.
- **74.5 — Addons:** Represent Addons in the design and justify one decision that depends on it.
- **74.6 — File Permissions:** Represent File Permissions in the design and justify one decision that depends on it.
- **74.7 — systemd:** Represent systemd in the design and justify one decision that depends on it.
- **74.8 — Service Management:** Represent Service Management in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Linux Deployment that connects Linux User, Filesystem Layout, Python Environment and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Linux Deployment.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIX. Deployment and operations unit workspace under odoo/story-19.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Linux Deployment that connects Linux User, Filesystem Layout, Python Environment and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-19/chapter-74-linux-deployment-design-studio
git commit -m "feat(linux-deployment-design-studio): complete chapter 74 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 74](../roadmaps/ODOO.md#phase-74) | [CONTINUE TO ODOO CHAPTER 75](../roadmaps/ODOO.md#phase-75)


<a id="odoo-phase-75-project"></a>
### ODOO CHAPTER 75 PROJECT

#### PROJECT: REVERSE PROXY & HTTPS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Put nginx (or similar) in front of Odoo for TLS termination, HTTP→HTTPS redirect, long timeouts, and websocket/livechat upstreams — with proxy_mode = True only when the proxy is trusted.

**Chapter topic:** Reverse Proxy & HTTPS

**Unit storyline:** Continue the **XIX. Deployment and operations** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Reverse Proxy & HTTPS that connects Reverse Proxy, Nginx, Domains and makes every important result inspectable.

#### LESSONS PRACTICED

- **75.1 — Reverse Proxy:** Implement or demonstrate Reverse Proxy in the shared unit project and add a focused check.
- **75.2 — Nginx:** Implement or demonstrate Nginx in the shared unit project and add a focused check.
- **75.3 — Domains:** Implement or demonstrate Domains in the shared unit project and add a focused check.
- **75.4 — DNS:** Implement or demonstrate DNS in the shared unit project and add a focused check.
- **75.5 — TLS / HTTPS:** Implement or demonstrate TLS / HTTPS in the shared unit project and add a focused check.
- **75.6 — Proxy Headers:** Implement or demonstrate Proxy Headers in the shared unit project and add a focused check.
- **75.7 — WebSocket / Long-Lived Connections:** Implement or demonstrate WebSocket / Long-Lived Connections in the shared unit project and add a focused check.
- **75.8 — Secure Production Exposure:** Implement or demonstrate Secure Production Exposure in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Reverse Proxy & HTTPS that connects Reverse Proxy, Nginx, Domains and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Reverse Proxy & HTTPS.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIX. Deployment and operations unit workspace under odoo/story-19.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Reverse Proxy & HTTPS that connects Reverse Proxy, Nginx, Domains and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-19/chapter-75-reverse-proxy-https-workbench
git commit -m "feat(reverse-proxy-https-workbench): complete chapter 75 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 75](../roadmaps/ODOO.md#phase-75) | [CONTINUE TO ODOO CHAPTER 76](../roadmaps/ODOO.md#phase-76)


<a id="odoo-phase-76-project"></a>
### ODOO CHAPTER 76 PROJECT

#### PROJECT: WORKERS & PRODUCTION CONFIGURATION WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Choose multi-processing workers vs the default multi-threaded server; apply official rules of thumb for worker count and RAM; set memory/time/request limits; and explain cron and livechat workers.

**Chapter topic:** Workers & Production Configuration

**Unit storyline:** Continue the **XIX. Deployment and operations** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Workers & Production Configuration that connects Development Mode, Multi-Processing, Workers and makes every important result inspectable.

#### LESSONS PRACTICED

- **76.1 — Development Mode:** Implement or demonstrate Development Mode in the shared unit project and add a focused check.
- **76.2 — Multi-Processing:** Implement or demonstrate Multi-Processing in the shared unit project and add a focused check.
- **76.3 — Workers:** Implement or demonstrate Workers in the shared unit project and add a focused check.
- **76.4 — Worker Sizing:** Implement or demonstrate Worker Sizing in the shared unit project and add a focused check.
- **76.5 — CPU Considerations:** Implement or demonstrate CPU Considerations in the shared unit project and add a focused check.
- **76.6 — Memory Limits:** Implement or demonstrate Memory Limits in the shared unit project and add a focused check.
- **76.7 — Request Time Limits:** Implement or demonstrate Request Time Limits in the shared unit project and add a focused check.
- **76.8 — Cron Workers:** Implement or demonstrate Cron Workers in the shared unit project and add a focused check.
- **76.9 — Production Configuration:** Implement or demonstrate Production Configuration in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Workers & Production Configuration that connects Development Mode, Multi-Processing, Workers and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Workers & Production Configuration.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIX. Deployment and operations unit workspace under odoo/story-19.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Workers & Production Configuration that connects Development Mode, Multi-Processing, Workers and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-19/chapter-76-workers-production-configuration-workbench
git commit -m "feat(workers-production-configuration-workbench): complete chapter 76 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 76](../roadmaps/ODOO.md#phase-76) | [CONTINUE TO ODOO CHAPTER 77](../roadmaps/ODOO.md#phase-77)


<a id="odoo-phase-77-project"></a>
### ODOO CHAPTER 77 PROJECT

#### PROJECT: POSTGRESQL OPERATIONS OPERATIONS RUNBOOK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Operate the Postgres side of Odoo: roles and privileges, connection limits vs worker counts, basic vacuum/analyze awareness, and when Odoo and Postgres live on separate hosts.

**Chapter topic:** PostgreSQL Operations

**Unit storyline:** Continue the **XIX. Deployment and operations** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Write and rehearse an operational runbook for PostgreSQL Operations that connects Database Users, Connections, Connection Limits and makes every important result inspectable.

#### LESSONS PRACTICED

- **77.1 — Database Users:** Add an executable Database Users procedure with verification and rollback or recovery guidance.
- **77.2 — Connections:** Add an executable Connections procedure with verification and rollback or recovery guidance.
- **77.3 — Connection Limits:** Add an executable Connection Limits procedure with verification and rollback or recovery guidance.
- **77.4 — Maintenance:** Add an executable Maintenance procedure with verification and rollback or recovery guidance.
- **77.5 — VACUUM Concepts:** Add an executable VACUUM Concepts procedure with verification and rollback or recovery guidance.
- **77.6 — ANALYZE:** Add an executable ANALYZE procedure with verification and rollback or recovery guidance.
- **77.7 — Monitoring:** Add an executable Monitoring procedure with verification and rollback or recovery guidance.
- **77.8 — Basic Tuning:** Add an executable Basic Tuning procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for PostgreSQL Operations that connects Database Users, Connections, Connection Limits and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused runbook artifact for PostgreSQL Operations.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo environment.
- Markdown for evidence and rollback.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIX. Deployment and operations unit workspace under odoo/story-19.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for PostgreSQL Operations that connects Database Users, Connections, Connection Limits and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-19/chapter-77-postgresql-operations-operations-runbook
git commit -m "feat(postgresql-operations-operations-runbook): complete chapter 77 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 77](../roadmaps/ODOO.md#phase-77) | [CONTINUE TO ODOO CHAPTER 78](../roadmaps/ODOO.md#phase-78)


<a id="odoo-phase-78-project"></a>
### ODOO CHAPTER 78 PROJECT

#### PROJECT: BACKUPS & DISASTER RECOVERY OPERATIONS RUNBOOK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Design and test backups that include both the PostgreSQL dump and the filestore; practice restore on a spare host; define RPO/RTO in plain language.

**Chapter topic:** Backups & Disaster Recovery

**Unit storyline:** Continue the **XIX. Deployment and operations** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Write and rehearse an operational runbook for Backups & Disaster Recovery that connects Database Backup, Filestore Backup, Configuration Backup and makes every important result inspectable.

#### LESSONS PRACTICED

- **78.1 — Database Backup:** Add an executable Database Backup procedure with verification and rollback or recovery guidance.
- **78.2 — Filestore Backup:** Add an executable Filestore Backup procedure with verification and rollback or recovery guidance.
- **78.3 — Configuration Backup:** Add an executable Configuration Backup procedure with verification and rollback or recovery guidance.
- **78.4 — Restore:** Add an executable Restore procedure with verification and rollback or recovery guidance.
- **78.5 — Backup Scheduling:** Add an executable Backup Scheduling procedure with verification and rollback or recovery guidance.
- **78.6 — Off-Site Backups:** Add an executable Off-Site Backups procedure with verification and rollback or recovery guidance.
- **78.7 — Recovery Testing:** Add an executable Recovery Testing procedure with verification and rollback or recovery guidance.
- **78.8 — Disaster Recovery Plan:** Add an executable Disaster Recovery Plan procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Backups & Disaster Recovery that connects Database Backup, Filestore Backup, Configuration Backup and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused runbook artifact for Backups & Disaster Recovery.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo environment.
- Markdown for evidence and rollback.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIX. Deployment and operations unit workspace under odoo/story-19.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Backups & Disaster Recovery that connects Database Backup, Filestore Backup, Configuration Backup and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-19/chapter-78-backups-disaster-recovery-operations-runbook
git commit -m "feat(backups-disaster-recovery-operations-runbo): complete chapter 78 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 78](../roadmaps/ODOO.md#phase-78) | [CONTINUE TO ODOO CHAPTER 79](../roadmaps/ODOO.md#phase-79)


<a id="odoo-phase-79-project"></a>
### ODOO CHAPTER 79 PROJECT

#### PROJECT: ODOO.SH DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Explain what Odoo.sh provides (Git-based builds, staging/production databases, CI-ish checks) versus self-hosted Linux, and when each fits.

**Chapter topic:** Odoo.sh

**Unit storyline:** Continue the **XIX. Deployment and operations** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Odoo.sh that connects Odoo.sh Architecture, Projects, Git Integration and makes every important result inspectable.

#### LESSONS PRACTICED

- **79.1 — Odoo.sh Architecture:** Represent Odoo.sh Architecture in the design and justify one decision that depends on it.
- **79.2 — Projects:** Represent Projects in the design and justify one decision that depends on it.
- **79.3 — Git Integration:** Represent Git Integration in the design and justify one decision that depends on it.
- **79.4 — Branches:** Represent Branches in the design and justify one decision that depends on it.
- **79.5 — Development:** Represent Development in the design and justify one decision that depends on it.
- **79.6 — Staging:** Represent Staging in the design and justify one decision that depends on it.
- **79.7 — Production:** Represent Production in the design and justify one decision that depends on it.
- **79.8 — Builds:** Represent Builds in the design and justify one decision that depends on it.
- **79.9 — Logs:** Represent Logs in the design and justify one decision that depends on it.
- **79.10 — Shell Access:** Represent Shell Access in the design and justify one decision that depends on it.
- **79.11 — Database Management:** Represent Database Management in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Odoo.sh that connects Odoo.sh Architecture, Projects, Git Integration and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Odoo.sh.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIX. Deployment and operations unit workspace under odoo/story-19.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Odoo.sh that connects Odoo.sh Architecture, Projects, Git Integration and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-19/chapter-79-odoo-sh-design-studio
git commit -m "feat(odoo-sh-design-studio): complete chapter 79 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 79](../roadmaps/ODOO.md#phase-79) | [CONTINUE TO ODOO CHAPTER 80](../roadmaps/ODOO.md#phase-80)


<a id="odoo-phase-80-project"></a>
### ODOO CHAPTER 80 PROJECT

#### PROJECT: DOCKER FOR ODOO WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Reason about official [odoo/docker](https://github.com/odoo/docker) images: Odoo container + Postgres container, volumes for filestore and DB data, env vars, and the fact that default images lean on the threaded server unless you configure otherwise.

**Chapter topic:** Docker for Odoo

**Unit storyline:** Continue the **XIX. Deployment and operations** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Docker for Odoo that connects Images, Containers, Volumes and makes every important result inspectable.

#### LESSONS PRACTICED

- **80.1 — Images:** Implement or demonstrate Images in the shared unit project and add a focused check.
- **80.2 — Containers:** Implement or demonstrate Containers in the shared unit project and add a focused check.
- **80.3 — Volumes:** Implement or demonstrate Volumes in the shared unit project and add a focused check.
- **80.4 — Networking:** Implement or demonstrate Networking in the shared unit project and add a focused check.
- **80.5 — Environment Variables:** Implement or demonstrate Environment Variables in the shared unit project and add a focused check.
- **80.6 — Odoo Container:** Implement or demonstrate Odoo Container in the shared unit project and add a focused check.
- **80.7 — PostgreSQL Container:** Implement or demonstrate PostgreSQL Container in the shared unit project and add a focused check.
- **80.8 — Persistent Filestore:** Implement or demonstrate Persistent Filestore in the shared unit project and add a focused check.
- **80.9 — Docker Compose:** Implement or demonstrate Docker Compose in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Docker for Odoo that connects Images, Containers, Volumes and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Docker for Odoo.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIX. Deployment and operations unit workspace under odoo/story-19.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Docker for Odoo that connects Images, Containers, Volumes and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-19/chapter-80-docker-for-odoo-workbench
git commit -m "feat(docker-for-odoo-workbench): complete chapter 80 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 80](../roadmaps/ODOO.md#phase-80) | [CONTINUE TO ODOO CHAPTER 81](../roadmaps/ODOO.md#phase-81)


<a id="odoo-phase-81-project"></a>
### ODOO CHAPTER 81 PROJECT

#### PROJECT: MONITORING & PRODUCTION TROUBLESHOOTING OPERATIONS RUNBOOK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Read Odoo and nginx/Postgres logs under load; watch worker memory kills, HTTP 5xx rates, disk, and backup job success; set a minimal alert set for production.

**Chapter topic:** Monitoring & Production Troubleshooting

**Unit storyline:** Continue the **XIX. Deployment and operations** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Write and rehearse an operational runbook for Monitoring & Production Troubleshooting that connects Application Logs, PostgreSQL Logs, CPU and makes every important result inspectable.

#### LESSONS PRACTICED

- **81.1 — Application Logs:** Add an executable Application Logs procedure with verification and rollback or recovery guidance.
- **81.2 — PostgreSQL Logs:** Add an executable PostgreSQL Logs procedure with verification and rollback or recovery guidance.
- **81.3 — CPU:** Add an executable CPU procedure with verification and rollback or recovery guidance.
- **81.4 — Memory:** Add an executable Memory procedure with verification and rollback or recovery guidance.
- **81.5 — Disk:** Add an executable Disk procedure with verification and rollback or recovery guidance.
- **81.6 — Database Connections:** Add an executable Database Connections procedure with verification and rollback or recovery guidance.
- **81.7 — Slow Requests:** Add an executable Slow Requests procedure with verification and rollback or recovery guidance.
- **81.8 — Failed Jobs:** Add an executable Failed Jobs procedure with verification and rollback or recovery guidance.
- **81.9 — Error Monitoring:** Add an executable Error Monitoring procedure with verification and rollback or recovery guidance.
- **81.10 — Incident Diagnosis:** Add an executable Incident Diagnosis procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Monitoring & Production Troubleshooting that connects Application Logs, PostgreSQL Logs, CPU and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused runbook artifact for Monitoring & Production Troubleshooting.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo environment.
- Markdown for evidence and rollback.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XIX. Deployment and operations unit workspace under odoo/story-19.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Monitoring & Production Troubleshooting that connects Application Logs, PostgreSQL Logs, CPU and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-19/chapter-81-monitoring-production-troubleshooting-operations-runbook
git commit -m "feat(monitoring-production-troubleshooting-oper): complete chapter 81 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 81](../roadmaps/ODOO.md#phase-81) | [CONTINUE TO ODOO CHAPTER 82](../roadmaps/ODOO.md#phase-82)


## XX. Upgrades, migrations and maintenance

**Shared unit storyline:** Keep one workspace for XX. Upgrades, migrations and maintenance. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-82-project"></a>
### ODOO CHAPTER 82 PROJECT

#### PROJECT: MODULE VERSIONING ANALYSIS DOSSIER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Use __manifest__.py version intentionally (series + module revision), know when -u runs, and relate version bumps to migration script folders.

**Chapter topic:** Module Versioning

**Unit storyline:** Continue the **XX. Upgrades, migrations and maintenance** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an evidence-backed analysis for Module Versioning that connects Manifest Version, Semantic Change Thinking, Release Changes and makes every important result inspectable.

#### LESSONS PRACTICED

- **82.1 — Manifest Version:** Apply Manifest Version to the controlled example and record the reasoning and result.
- **82.2 — Semantic Change Thinking:** Apply Semantic Change Thinking to the controlled example and record the reasoning and result.
- **82.3 — Release Changes:** Apply Release Changes to the controlled example and record the reasoning and result.
- **82.4 — Compatibility:** Apply Compatibility to the controlled example and record the reasoning and result.
- **82.5 — Dependencies:** Apply Dependencies to the controlled example and record the reasoning and result.
- **82.6 — Version Control Strategy:** Apply Version Control Strategy to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Produce an evidence-backed analysis for Module Versioning that connects Manifest Version, Semantic Change Thinking, Release Changes and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused analysis artifact for Module Versioning.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo database or documented simulation.
- Markdown.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XX. Upgrades, migrations and maintenance unit workspace under odoo/story-20.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an evidence-backed analysis for Module Versioning that connects Manifest Version, Semantic Change Thinking, Release Changes and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-20/chapter-82-module-versioning-analysis-dossier
git commit -m "feat(module-versioning-analysis-dossier): complete chapter 82 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 82](../roadmaps/ODOO.md#phase-82) | [CONTINUE TO ODOO CHAPTER 83](../roadmaps/ODOO.md#phase-83)


<a id="odoo-phase-83-project"></a>
### ODOO CHAPTER 83 PROJECT

#### PROJECT: SCHEMA CHANGES WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Evolve fields safely: add columns, rename with data preservation, change types carefully, and avoid “delete field in prod on Friday” disasters.

**Chapter topic:** Schema Changes

**Unit storyline:** Continue the **XX. Upgrades, migrations and maintenance** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Schema Changes that connects Adding Fields, Renaming Fields, Changing Field Types and makes every important result inspectable.

#### LESSONS PRACTICED

- **83.1 — Adding Fields:** Implement or demonstrate Adding Fields in the shared unit project and add a focused check.
- **83.2 — Renaming Fields:** Implement or demonstrate Renaming Fields in the shared unit project and add a focused check.
- **83.3 — Changing Field Types:** Implement or demonstrate Changing Field Types in the shared unit project and add a focused check.
- **83.4 — Changing Relationships:** Implement or demonstrate Changing Relationships in the shared unit project and add a focused check.
- **83.5 — Removing Fields:** Implement or demonstrate Removing Fields in the shared unit project and add a focused check.
- **83.6 — Constraints:** Implement or demonstrate Constraints in the shared unit project and add a focused check.
- **83.7 — Safe Schema Evolution:** Implement or demonstrate Safe Schema Evolution in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Schema Changes that connects Adding Fields, Renaming Fields, Changing Field Types and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Schema Changes.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XX. Upgrades, migrations and maintenance unit workspace under odoo/story-20.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Schema Changes that connects Adding Fields, Renaming Fields, Changing Field Types and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-20/chapter-83-schema-changes-workbench
git commit -m "feat(schema-changes-workbench): complete chapter 83 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 83](../roadmaps/ODOO.md#phase-83) | [CONTINUE TO ODOO CHAPTER 84](../roadmaps/ODOO.md#phase-84)


<a id="odoo-phase-84-project"></a>
### ODOO CHAPTER 84 PROJECT

#### PROJECT: DATA MIGRATIONS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Write and test upgrade scripts (migrations/ / official upgrade script API) that move data idempotently where possible, and know pre vs post migrate timing.

**Chapter topic:** Data Migrations

**Unit storyline:** Continue the **XX. Upgrades, migrations and maintenance** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Data Migrations that connects Migration Scripts, Pre-Migration, Post-Migration and makes every important result inspectable.

#### LESSONS PRACTICED

- **84.1 — Migration Scripts:** Implement or demonstrate Migration Scripts in the shared unit project and add a focused check.
- **84.2 — Pre-Migration:** Implement or demonstrate Pre-Migration in the shared unit project and add a focused check.
- **84.3 — Post-Migration:** Implement or demonstrate Post-Migration in the shared unit project and add a focused check.
- **84.4 — Transforming Records:** Implement or demonstrate Transforming Records in the shared unit project and add a focused check.
- **84.5 — Renaming Data:** Implement or demonstrate Renaming Data in the shared unit project and add a focused check.
- **84.6 — Preserving Relationships:** Implement or demonstrate Preserving Relationships in the shared unit project and add a focused check.
- **84.7 — Validation:** Implement or demonstrate Validation in the shared unit project and add a focused check.
- **84.8 — Large Dataset Considerations:** Implement or demonstrate Large Dataset Considerations in the shared unit project and add a focused check.
- **84.9 — Rollback Planning:** Implement or demonstrate Rollback Planning in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Data Migrations that connects Migration Scripts, Pre-Migration, Post-Migration and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Data Migrations.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XX. Upgrades, migrations and maintenance unit workspace under odoo/story-20.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Data Migrations that connects Migration Scripts, Pre-Migration, Post-Migration and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-20/chapter-84-data-migrations-workbench
git commit -m "feat(data-migrations-workbench): complete chapter 84 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 84](../roadmaps/ODOO.md#phase-84) | [CONTINUE TO ODOO CHAPTER 85](../roadmaps/ODOO.md#phase-85)


<a id="odoo-phase-85-project"></a>
### ODOO CHAPTER 85 PROJECT

#### PROJECT: ODOO VERSION UPGRADES WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Plan a major Odoo version upgrade: inventory custom modules, check deprecated APIs, use official upgrade paths/tools where applicable, and rehearse on staging.

**Chapter topic:** Odoo Version Upgrades

**Unit storyline:** Continue the **XX. Upgrades, migrations and maintenance** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Odoo Version Upgrades that connects Version Differences, Deprecated APIs, Framework Changes and makes every important result inspectable.

#### LESSONS PRACTICED

- **85.1 — Version Differences:** Implement or demonstrate Version Differences in the shared unit project and add a focused check.
- **85.2 — Deprecated APIs:** Implement or demonstrate Deprecated APIs in the shared unit project and add a focused check.
- **85.3 — Framework Changes:** Implement or demonstrate Framework Changes in the shared unit project and add a focused check.
- **85.4 — Module Compatibility:** Implement or demonstrate Module Compatibility in the shared unit project and add a focused check.
- **85.5 — Database Upgrade:** Implement or demonstrate Database Upgrade in the shared unit project and add a focused check.
- **85.6 — Upgrade Scripts:** Implement or demonstrate Upgrade Scripts in the shared unit project and add a focused check.
- **85.7 — Upgrade Utilities:** Implement or demonstrate Upgrade Utilities in the shared unit project and add a focused check.
- **85.8 — Frontend Migration:** Implement or demonstrate Frontend Migration in the shared unit project and add a focused check.
- **85.9 — Post-Upgrade Testing:** Implement or demonstrate Post-Upgrade Testing in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Odoo Version Upgrades that connects Version Differences, Deprecated APIs, Framework Changes and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Odoo Version Upgrades.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XX. Upgrades, migrations and maintenance unit workspace under odoo/story-20.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Odoo Version Upgrades that connects Version Differences, Deprecated APIs, Framework Changes and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-20/chapter-85-odoo-version-upgrades-workbench
git commit -m "feat(odoo-version-upgrades-workbench): complete chapter 85 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 85](../roadmaps/ODOO.md#phase-85) | [CONTINUE TO ODOO CHAPTER 86](../roadmaps/ODOO.md#phase-86)


<a id="odoo-phase-86-project"></a>
### ODOO CHAPTER 86 PROJECT

#### PROJECT: MODULE HOOKS WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Work confidently with every topic under Module Hooks — not as a glossary, but as mechanisms you can implement and debug.

**Chapter topic:** Module Hooks

**Unit storyline:** Continue the **XX. Upgrades, migrations and maintenance** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Module Hooks that connects Hooks Concept, pre_init_hook, post_init_hook and makes every important result inspectable.

#### LESSONS PRACTICED

- **86.1 — Hooks Concept:** Implement or demonstrate Hooks Concept in the shared unit project and add a focused check.
- **86.2 — pre_init_hook:** Implement or demonstrate pre_init_hook in the shared unit project and add a focused check.
- **86.3 — post_init_hook:** Implement or demonstrate post_init_hook in the shared unit project and add a focused check.
- **86.4 — uninstall_hook:** Implement or demonstrate uninstall_hook in the shared unit project and add a focused check.
- **86.5 — Environment During Hooks:** Implement or demonstrate Environment During Hooks in the shared unit project and add a focused check.
- **86.6 — Appropriate Uses:** Implement or demonstrate Appropriate Uses in the shared unit project and add a focused check.
- **86.7 — Avoiding Hook Abuse:** Implement or demonstrate Avoiding Hook Abuse in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Module Hooks that connects Hooks Concept, pre_init_hook, post_init_hook and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Module Hooks.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XX. Upgrades, migrations and maintenance unit workspace under odoo/story-20.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Module Hooks that connects Hooks Concept, pre_init_hook, post_init_hook and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-20/chapter-86-module-hooks-workbench
git commit -m "feat(module-hooks-workbench): complete chapter 86 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 86](../roadmaps/ODOO.md#phase-86) | [CONTINUE TO ODOO CHAPTER 87](../roadmaps/ODOO.md#phase-87)


<a id="odoo-phase-87-project"></a>
### ODOO CHAPTER 87 PROJECT

#### PROJECT: UPGRADE-SAFE CUSTOMIZATION DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Prefer extension (_inherit, xpath, intentional APIs) over editing core files; avoid private method dependence; keep overrides thin and tested.

**Chapter topic:** Upgrade-Safe Customization

**Unit storyline:** Continue the **XX. Upgrades, migrations and maintenance** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Upgrade-Safe Customization that connects Never Modify Core Directly, Extension Points, Model Inheritance and makes every important result inspectable.

#### LESSONS PRACTICED

- **87.1 — Never Modify Core Directly:** Represent Never Modify Core Directly in the design and justify one decision that depends on it.
- **87.2 — Extension Points:** Represent Extension Points in the design and justify one decision that depends on it.
- **87.3 — Model Inheritance:** Represent Model Inheritance in the design and justify one decision that depends on it.
- **87.4 — View Inheritance:** Represent View Inheritance in the design and justify one decision that depends on it.
- **87.5 — Stable Overrides:** Represent Stable Overrides in the design and justify one decision that depends on it.
- **87.6 — Dependency Management:** Represent Dependency Management in the design and justify one decision that depends on it.
- **87.7 — Avoiding Hard-Coding:** Represent Avoiding Hard-Coding in the design and justify one decision that depends on it.
- **87.8 — Future-Proof Design:** Represent Future-Proof Design in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Upgrade-Safe Customization that connects Never Modify Core Directly, Extension Points, Model Inheritance and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Upgrade-Safe Customization.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XX. Upgrades, migrations and maintenance unit workspace under odoo/story-20.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Upgrade-Safe Customization that connects Never Modify Core Directly, Extension Points, Model Inheritance and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-20/chapter-87-upgrade-safe-customization-design-studio
git commit -m "feat(upgrade-safe-customization-design-studio): complete chapter 87 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 87](../roadmaps/ODOO.md#phase-87) | [CONTINUE TO ODOO CHAPTER 88](../roadmaps/ODOO.md#phase-88)


<a id="odoo-phase-88-project"></a>
### ODOO CHAPTER 88 PROJECT

#### PROJECT: LEGACY MODULE MAINTENANCE OPERATIONS RUNBOOK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Triage old modules: map depends, find brittle inherits, isolate monkey patches, add characterization tests before changing behavior.

**Chapter topic:** Legacy Module Maintenance

**Unit storyline:** Continue the **XX. Upgrades, migrations and maintenance** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Write and rehearse an operational runbook for Legacy Module Maintenance that connects Read Before Changing, Trace Dependencies, Trace Execution and makes every important result inspectable.

#### LESSONS PRACTICED

- **88.1 — Read Before Changing:** Add an executable Read Before Changing procedure with verification and rollback or recovery guidance.
- **88.2 — Trace Dependencies:** Add an executable Trace Dependencies procedure with verification and rollback or recovery guidance.
- **88.3 — Trace Execution:** Add an executable Trace Execution procedure with verification and rollback or recovery guidance.
- **88.4 — Reproduce Existing Behavior:** Add an executable Reproduce Existing Behavior procedure with verification and rollback or recovery guidance.
- **88.5 — Characterization Tests:** Add an executable Characterization Tests procedure with verification and rollback or recovery guidance.
- **88.6 — Backward Compatibility:** Add an executable Backward Compatibility procedure with verification and rollback or recovery guidance.
- **88.7 — Safe Refactoring:** Add an executable Safe Refactoring procedure with verification and rollback or recovery guidance.
- **88.8 — Deprecation:** Add an executable Deprecation procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Legacy Module Maintenance that connects Read Before Changing, Trace Dependencies, Trace Execution and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused runbook artifact for Legacy Module Maintenance.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo environment.
- Markdown for evidence and rollback.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XX. Upgrades, migrations and maintenance unit workspace under odoo/story-20.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Legacy Module Maintenance that connects Read Before Changing, Trace Dependencies, Trace Execution and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-20/chapter-88-legacy-module-maintenance-operations-runbook
git commit -m "feat(legacy-module-maintenance-operations-runbo): complete chapter 88 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 88](../roadmaps/ODOO.md#phase-88) | [CONTINUE TO ODOO CHAPTER 89](../roadmaps/ODOO.md#phase-89)


## XXI. Functional Odoo for developers

**Shared unit storyline:** Keep one workspace for XXI. Functional Odoo for developers. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-89-project"></a>
### ODOO CHAPTER 89 PROJECT

#### PROJECT: CORE FUNCTIONAL APPLICATIONS OPERATIONS RUNBOOK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Explain, in business language, how CRM, Sales, Purchase, Inventory, Accounting concepts, and HR connect — enough to design with users, not only with models.

**Chapter topic:** Core Functional Applications

**Unit storyline:** Continue the **XXI. Functional Odoo for developers** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Write and rehearse an operational runbook for Core Functional Applications that connects Contacts, CRM, Sales and makes every important result inspectable.

#### LESSONS PRACTICED

- **89.1 — Contacts:** Add an executable Contacts procedure with verification and rollback or recovery guidance.
- **89.2 — CRM:** Add an executable CRM procedure with verification and rollback or recovery guidance.
- **89.3 — Sales:** Add an executable Sales procedure with verification and rollback or recovery guidance.
- **89.4 — Purchase:** Add an executable Purchase procedure with verification and rollback or recovery guidance.
- **89.5 — Inventory:** Add an executable Inventory procedure with verification and rollback or recovery guidance.
- **89.6 — Accounting Concepts:** Add an executable Accounting Concepts procedure with verification and rollback or recovery guidance.
- **89.7 — Invoicing:** Add an executable Invoicing procedure with verification and rollback or recovery guidance.
- **89.8 — Employees:** Add an executable Employees procedure with verification and rollback or recovery guidance.
- **89.9 — Recruitment:** Add an executable Recruitment procedure with verification and rollback or recovery guidance.
- **89.10 — Time Off:** Add an executable Time Off procedure with verification and rollback or recovery guidance.
- **89.11 — Projects:** Add an executable Projects procedure with verification and rollback or recovery guidance.
- **89.12 — Timesheets:** Add an executable Timesheets procedure with verification and rollback or recovery guidance.
- **89.13 — Manufacturing:** Add an executable Manufacturing procedure with verification and rollback or recovery guidance.
- **89.14 — Maintenance:** Add an executable Maintenance procedure with verification and rollback or recovery guidance.
- **89.15 — Helpdesk Concept:** Add an executable Helpdesk Concept procedure with verification and rollback or recovery guidance.
- **89.16 — Website:** Add an executable Website procedure with verification and rollback or recovery guidance.
- **89.17 — eCommerce:** Add an executable eCommerce procedure with verification and rollback or recovery guidance.
- **89.18 — Point of Sale:** Add an executable Point of Sale procedure with verification and rollback or recovery guidance.
- **89.19 — End-to-End Business Flow:** Add an executable End-to-End Business Flow procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Core Functional Applications that connects Contacts, CRM, Sales and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused runbook artifact for Core Functional Applications.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo environment.
- Markdown for evidence and rollback.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XXI. Functional Odoo for developers unit workspace under odoo/story-21.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Core Functional Applications that connects Contacts, CRM, Sales and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-21/chapter-89-core-functional-applications-operations-runbook
git commit -m "feat(core-functional-applications-operations-ru): complete chapter 89 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 89](../roadmaps/ODOO.md#phase-89) | [CONTINUE TO ODOO CHAPTER 90](../roadmaps/ODOO.md#phase-90)


## XXII. Real Odoo engineering

**Shared unit storyline:** Keep one workspace for XXII. Real Odoo engineering. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-90-project"></a>
### ODOO CHAPTER 90 PROJECT

#### PROJECT: REQUIREMENTS → ERP DESIGN REHEARSAL

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Interview stakeholders, map processes to Odoo apps, identify master data vs transactions, and produce a design that names modules and ownership — before writing models.

**Chapter topic:** Requirements → ERP Design

**Unit storyline:** Continue the **XXII. Real Odoo engineering** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Complete a timed rehearsal and debrief for Requirements → ERP Design that connects Stakeholder Interviews, Business Requirements, Functional Requirements and makes every important result inspectable.

#### LESSONS PRACTICED

- **90.1 — Stakeholder Interviews:** Practice explaining or applying Stakeholder Interviews under a timer and record the evidence and correction.
- **90.2 — Business Requirements:** Practice explaining or applying Business Requirements under a timer and record the evidence and correction.
- **90.3 — Functional Requirements:** Practice explaining or applying Functional Requirements under a timer and record the evidence and correction.
- **90.4 — Non-Functional Requirements:** Practice explaining or applying Non-Functional Requirements under a timer and record the evidence and correction.
- **90.5 — Business Process Mapping:** Practice explaining or applying Business Process Mapping under a timer and record the evidence and correction.
- **90.6 — As-Is Process:** Practice explaining or applying As-Is Process under a timer and record the evidence and correction.
- **90.7 — To-Be Process:** Practice explaining or applying To-Be Process under a timer and record the evidence and correction.
- **90.8 — Data Requirements:** Practice explaining or applying Data Requirements under a timer and record the evidence and correction.
- **90.9 — Roles:** Practice explaining or applying Roles under a timer and record the evidence and correction.
- **90.10 — Permissions:** Practice explaining or applying Permissions under a timer and record the evidence and correction.
- **90.11 — Acceptance Criteria:** Practice explaining or applying Acceptance Criteria under a timer and record the evidence and correction.

#### SPECIFICATION

- Complete a timed rehearsal and debrief for Requirements → ERP Design that connects Stakeholder Interviews, Business Requirements, Functional Requirements and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused rehearsal artifact for Requirements → ERP Design.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A timer.
- A disposable Odoo environment.
- Markdown and Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XXII. Real Odoo engineering unit workspace under odoo/story-22.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Complete a timed rehearsal and debrief for Requirements → ERP Design that connects Stakeholder Interviews, Business Requirements, Functional Requirements and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-22/chapter-90-requirements-erp-design-rehearsal
git commit -m "feat(requirements-erp-design-rehearsal): complete chapter 90 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 90](../roadmaps/ODOO.md#phase-90) | [CONTINUE TO ODOO CHAPTER 91](../roadmaps/ODOO.md#phase-91)


<a id="odoo-phase-91-project"></a>
### ODOO CHAPTER 91 PROJECT

#### PROJECT: ODOO SOLUTION ARCHITECTURE DESIGN STUDIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Split features into addons with a clean depends graph; avoid god-modules; separate glue from core business.

**Chapter topic:** Odoo Solution Architecture

**Unit storyline:** Continue the **XXII. Real Odoo engineering** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Odoo Solution Architecture that connects Module Boundaries, Model Ownership, Dependencies and makes every important result inspectable.

#### LESSONS PRACTICED

- **91.1 — Module Boundaries:** Represent Module Boundaries in the design and justify one decision that depends on it.
- **91.2 — Model Ownership:** Represent Model Ownership in the design and justify one decision that depends on it.
- **91.3 — Dependencies:** Represent Dependencies in the design and justify one decision that depends on it.
- **91.4 — Shared Models:** Represent Shared Models in the design and justify one decision that depends on it.
- **91.5 — Integration Boundaries:** Represent Integration Boundaries in the design and justify one decision that depends on it.
- **91.6 — Security Architecture:** Represent Security Architecture in the design and justify one decision that depends on it.
- **91.7 — Multi-Company Architecture:** Represent Multi-Company Architecture in the design and justify one decision that depends on it.
- **91.8 — Data Flow:** Represent Data Flow in the design and justify one decision that depends on it.
- **91.9 — Reusability:** Represent Reusability in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Odoo Solution Architecture that connects Module Boundaries, Model Ownership, Dependencies and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Odoo Solution Architecture.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- A version-matched Odoo reference.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XXII. Real Odoo engineering unit workspace under odoo/story-22.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Odoo Solution Architecture that connects Module Boundaries, Model Ownership, Dependencies and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-22/chapter-91-odoo-solution-architecture-design-studio
git commit -m "feat(odoo-solution-architecture-design-studio): complete chapter 91 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 91](../roadmaps/ODOO.md#phase-91) | [CONTINUE TO ODOO CHAPTER 92](../roadmaps/ODOO.md#phase-92)


<a id="odoo-phase-92-project"></a>
### ODOO CHAPTER 92 PROJECT

#### PROJECT: CONFIGURATION VS CUSTOMIZATION VS INTEGRATION OPERATIONS RUNBOOK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Decide when settings, automated actions, studio/optional tools, or standard workflows beat writing Python — and when they do not.

**Chapter topic:** Configuration vs Customization vs Integration

**Unit storyline:** Continue the **XXII. Real Odoo engineering** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Write and rehearse an operational runbook for Configuration vs Customization vs Integration that connects Standard Odoo, Configuration, Studio Concepts and makes every important result inspectable.

#### LESSONS PRACTICED

- **92.1 — Standard Odoo:** Add an executable Standard Odoo procedure with verification and rollback or recovery guidance.
- **92.2 — Configuration:** Add an executable Configuration procedure with verification and rollback or recovery guidance.
- **92.3 — Studio Concepts:** Add an executable Studio Concepts procedure with verification and rollback or recovery guidance.
- **92.4 — Custom Module:** Add an executable Custom Module procedure with verification and rollback or recovery guidance.
- **92.5 — Third-Party Module:** Add an executable Third-Party Module procedure with verification and rollback or recovery guidance.
- **92.6 — External Integration:** Add an executable External Integration procedure with verification and rollback or recovery guidance.
- **92.7 — Data Ownership:** Add an executable Data Ownership procedure with verification and rollback or recovery guidance.
- **92.8 — Upgrade Costs:** Add an executable Upgrade Costs procedure with verification and rollback or recovery guidance.
- **92.9 — Maintenance Costs:** Add an executable Maintenance Costs procedure with verification and rollback or recovery guidance.
- **92.10 — Choosing the Simplest Correct Solution:** Add an executable Choosing the Simplest Correct Solution procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Configuration vs Customization vs Integration that connects Standard Odoo, Configuration, Studio Concepts and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused runbook artifact for Configuration vs Customization vs Integration.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo environment.
- Markdown for evidence and rollback.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XXII. Real Odoo engineering unit workspace under odoo/story-22.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Configuration vs Customization vs Integration that connects Standard Odoo, Configuration, Studio Concepts and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-22/chapter-92-configuration-vs-customization-vs-integration-operations-runbook
git commit -m "feat(configuration-vs-customization-vs-integrat): complete chapter 92 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 92](../roadmaps/ODOO.md#phase-92) | [CONTINUE TO ODOO CHAPTER 93](../roadmaps/ODOO.md#phase-93)


<a id="odoo-phase-93-project"></a>
### ODOO CHAPTER 93 PROJECT

#### PROJECT: MAINTAINABLE ODOO CODE WORKBENCH

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Write modules that future teammates can navigate: clear models, thin controllers, tested business methods, honest names, and no cleverness that fights the ORM.

**Chapter topic:** Maintainable Odoo Code

**Unit storyline:** Continue the **XXII. Real Odoo engineering** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Maintainable Odoo Code that connects Naming, Small Methods, Separation of Concerns and makes every important result inspectable.

#### LESSONS PRACTICED

- **93.1 — Naming:** Implement or demonstrate Naming in the shared unit project and add a focused check.
- **93.2 — Small Methods:** Implement or demonstrate Small Methods in the shared unit project and add a focused check.
- **93.3 — Separation of Concerns:** Implement or demonstrate Separation of Concerns in the shared unit project and add a focused check.
- **93.4 — Cohesion:** Implement or demonstrate Cohesion in the shared unit project and add a focused check.
- **93.5 — Low Coupling:** Implement or demonstrate Low Coupling in the shared unit project and add a focused check.
- **93.6 — Reusable Mixins:** Implement or demonstrate Reusable Mixins in the shared unit project and add a focused check.
- **93.7 — Configuration over Hard-Coding:** Implement or demonstrate Configuration over Hard-Coding in the shared unit project and add a focused check.
- **93.8 — Constants:** Implement or demonstrate Constants in the shared unit project and add a focused check.
- **93.9 — Error Handling:** Implement or demonstrate Error Handling in the shared unit project and add a focused check.
- **93.10 — Logging:** Implement or demonstrate Logging in the shared unit project and add a focused check.
- **93.11 — Documentation:** Implement or demonstrate Documentation in the shared unit project and add a focused check.
- **93.12 — Upgrade Safety:** Implement or demonstrate Upgrade Safety in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Maintainable Odoo Code that connects Naming, Small Methods, Separation of Concerns and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Maintainable Odoo Code.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A version-matched local Odoo development environment.
- Python, XML, and PostgreSQL as introduced.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XXII. Real Odoo engineering unit workspace under odoo/story-22.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Build a small runnable artifact for Maintainable Odoo Code that connects Naming, Small Methods, Separation of Concerns and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-22/chapter-93-maintainable-odoo-code-workbench
git commit -m "feat(maintainable-odoo-code-workbench): complete chapter 93 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 93](../roadmaps/ODOO.md#phase-93) | [CONTINUE TO ODOO CHAPTER 94](../roadmaps/ODOO.md#phase-94)


<a id="odoo-phase-94-project"></a>
### ODOO CHAPTER 94 PROJECT

#### PROJECT: GIT, COLLABORATION & CODE REVIEW ANALYSIS DOSSIER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Review Odoo PRs for security, upgrade risk, performance, XML/data hazards, and missing tests — not just style.

**Chapter topic:** Git, Collaboration & Code Review

**Unit storyline:** Continue the **XXII. Real Odoo engineering** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an evidence-backed analysis for Git, Collaboration & Code Review that connects Repository, Branches, Commits and makes every important result inspectable.

#### LESSONS PRACTICED

- **94.1 — Repository:** Apply Repository to the controlled example and record the reasoning and result.
- **94.2 — Branches:** Apply Branches to the controlled example and record the reasoning and result.
- **94.3 — Commits:** Apply Commits to the controlled example and record the reasoning and result.
- **94.4 — Pull Requests:** Apply Pull Requests to the controlled example and record the reasoning and result.
- **94.5 — Merge:** Apply Merge to the controlled example and record the reasoning and result.
- **94.6 — Rebase Concepts:** Apply Rebase Concepts to the controlled example and record the reasoning and result.
- **94.7 — Release Branches:** Apply Release Branches to the controlled example and record the reasoning and result.
- **94.8 — Code Review for Correctness:** Apply Code Review for Correctness to the controlled example and record the reasoning and result.
- **94.9 — Security Review:** Apply Security Review to the controlled example and record the reasoning and result.
- **94.10 — ORM Performance Review:** Apply ORM Performance Review to the controlled example and record the reasoning and result.
- **94.11 — Upgrade-Safety Review:** Apply Upgrade-Safety Review to the controlled example and record the reasoning and result.
- **94.12 — Test Review:** Apply Test Review to the controlled example and record the reasoning and result.
- **94.13 — Documentation Review:** Apply Documentation Review to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Produce an evidence-backed analysis for Git, Collaboration & Code Review that connects Repository, Branches, Commits and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused analysis artifact for Git, Collaboration & Code Review.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- A disposable Odoo database or documented simulation.
- Markdown.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared XXII. Real Odoo engineering unit workspace under odoo/story-22.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an evidence-backed analysis for Git, Collaboration & Code Review that connects Repository, Branches, Commits and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-22/chapter-94-git-collaboration-code-review-analysis-dossier
git commit -m "feat(git-collaboration-code-review-analysis-dos): complete chapter 94 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 94](../roadmaps/ODOO.md#phase-94) | [CONTINUE TO ODOO CHAPTER 95](../roadmaps/ODOO.md#phase-95)


## XXIII. Grand Odoo capstone

**Shared unit storyline:** Keep one workspace for XXIII. Grand Odoo capstone. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-95-project"></a>
### ODOO CHAPTER 95 PROJECT

#### PROJECT: PORTFOLIO-READY BUSINESS MODULE

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Ship a coherent portfolio of Odoo modules (with README, tests, screenshots/GIF, upgrade notes) that prove backend, extension, integration, and OWL skills — then complete the final business ERP capstone.

**Chapter topic:** Production ERP Capstone

**Unit storyline:** Continue the **XXIII. Grand Odoo capstone** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Portfolio-Ready Business Module as a focused exercise for Portfolio Modules. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **95.1 — Problem Discovery:** Represent Problem Discovery in the design and justify one decision that depends on it.
- **95.2 — Business Requirements:** Represent Business Requirements in the design and justify one decision that depends on it.
- **95.3 — Process Maps:** Represent Process Maps in the design and justify one decision that depends on it.
- **95.4 — Architecture:** Represent Architecture in the design and justify one decision that depends on it.
- **95.5 — Module Boundaries:** Represent Module Boundaries in the design and justify one decision that depends on it.
- **95.6 — Data Models:** Represent Data Models in the design and justify one decision that depends on it.
- **95.7 — Relational Design:** Represent Relational Design in the design and justify one decision that depends on it.
- **95.8 — ORM:** Represent ORM in the design and justify one decision that depends on it.
- **95.9 — Business Rules:** Represent Business Rules in the design and justify one decision that depends on it.
- **95.10 — Security:** Represent Security in the design and justify one decision that depends on it.
- **95.11 — Multi-Company:** Represent Multi-Company in the design and justify one decision that depends on it.
- **95.12 — Views:** Represent Views in the design and justify one decision that depends on it.
- **95.13 — Workflows:** Represent Workflows in the design and justify one decision that depends on it.
- **95.14 — Wizards:** Represent Wizards in the design and justify one decision that depends on it.
- **95.15 — Chatter & Activities:** Represent Chatter & Activities in the design and justify one decision that depends on it.
- **95.16 — Automation:** Represent Automation in the design and justify one decision that depends on it.
- **95.17 — Reports:** Represent Reports in the design and justify one decision that depends on it.
- **95.18 — Attachments:** Represent Attachments in the design and justify one decision that depends on it.
- **95.19 — Translations:** Represent Translations in the design and justify one decision that depends on it.
- **95.20 — Website:** Represent Website in the design and justify one decision that depends on it.
- **95.21 — Portal:** Represent Portal in the design and justify one decision that depends on it.
- **95.22 — API:** Represent API in the design and justify one decision that depends on it.
- **95.23 — Webhooks:** Represent Webhooks in the design and justify one decision that depends on it.
- **95.24 — External Integration:** Represent External Integration in the design and justify one decision that depends on it.
- **95.25 — OWL Dashboard:** Represent OWL Dashboard in the design and justify one decision that depends on it.
- **95.26 — PostgreSQL Optimization:** Represent PostgreSQL Optimization in the design and justify one decision that depends on it.
- **95.27 — Automated Tests:** Represent Automated Tests in the design and justify one decision that depends on it.
- **95.28 — Security Tests:** Represent Security Tests in the design and justify one decision that depends on it.
- **95.29 — Performance Tests:** Represent Performance Tests in the design and justify one decision that depends on it.
- **95.30 — Migration Strategy:** Represent Migration Strategy in the design and justify one decision that depends on it.
- **95.31 — Backup Strategy:** Represent Backup Strategy in the design and justify one decision that depends on it.
- **95.32 — Deployment:** Represent Deployment in the design and justify one decision that depends on it.
- **95.33 — Monitoring:** Represent Monitoring in the design and justify one decision that depends on it.
- **95.34 — README:** Represent README in the design and justify one decision that depends on it.
- **95.35 — Architecture Diagram:** Represent Architecture Diagram in the design and justify one decision that depends on it.
- **95.36 — Technical Documentation:** Represent Technical Documentation in the design and justify one decision that depends on it.

#### SPECIFICATION

- Polish one business addon with demo data, tests, access rules, reports, translations-ready strings, screenshots, metadata, and license.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Polish one business addon with demo data, tests, access rules, reports, translations-ready strings, screenshots, metadata, and license.
- Define one realistic scenario, its boundaries, and the intended reader for the Portfolio-Ready Business Module.
- Collect or create the exact inputs needed to apply Portfolio Modules; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named portfolio_ready_business_module with a manifest, models, security, views, data, and tests folders.
2. Polish one business addon with demo data, tests, access rules, reports, translations-ready strings, screenshots, metadata, and license.
3. Collect or create the exact inputs needed to apply Portfolio Modules; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Portfolio Modules.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-23/chapter-95-portfolio-ready-business-module
git commit -m "feat(portfolio-ready-business-module): complete chapter 95 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 95](../roadmaps/ODOO.md#phase-95) | [CONTINUE TO ODOO CHAPTER 96](../roadmaps/ODOO.md#phase-96)


## XXIV. Interview, portfolio and job readiness

**Shared unit storyline:** Keep one workspace for XXIV. Interview, portfolio and job readiness. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="odoo-phase-96-project"></a>
### ODOO CHAPTER 96 PROJECT

#### PROJECT: TIMED ODOO DEBUG DRILL

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Answer Odoo interviews with mechanism + trade-offs: ORM, security, inheritance, upgrades, workers, config vs custom vs integrate — practicing with [Interview.md](../guides/Interview.md).

**Chapter topic:** Odoo Engineer Job Readiness

**Unit storyline:** Continue the **XXIV. Interview, portfolio and job readiness** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Build Timed Odoo Debug Drill as a focused exercise for Interviews. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **96.1 — ERP Fundamentals:** Practice explaining or applying ERP Fundamentals under a timer and record the evidence and correction.
- **96.2 — Odoo Functional Knowledge:** Practice explaining or applying Odoo Functional Knowledge under a timer and record the evidence and correction.
- **96.3 — Odoo Architecture:** Practice explaining or applying Odoo Architecture under a timer and record the evidence and correction.
- **96.4 — Module Anatomy:** Practice explaining or applying Module Anatomy under a timer and record the evidence and correction.
- **96.5 — Python:** Practice explaining or applying Python under a timer and record the evidence and correction.
- **96.6 — Models:** Practice explaining or applying Models under a timer and record the evidence and correction.
- **96.7 — Fields:** Practice explaining or applying Fields under a timer and record the evidence and correction.
- **96.8 — Relationships:** Practice explaining or applying Relationships under a timer and record the evidence and correction.
- **96.9 — ORM:** Practice explaining or applying ORM under a timer and record the evidence and correction.
- **96.10 — Recordsets:** Practice explaining or applying Recordsets under a timer and record the evidence and correction.
- **96.11 — Domains:** Practice explaining or applying Domains under a timer and record the evidence and correction.
- **96.12 — Computed Fields:** Practice explaining or applying Computed Fields under a timer and record the evidence and correction.
- **96.13 — Constraints:** Practice explaining or applying Constraints under a timer and record the evidence and correction.
- **96.14 — Workflows:** Practice explaining or applying Workflows under a timer and record the evidence and correction.
- **96.15 — XML:** Practice explaining or applying XML under a timer and record the evidence and correction.
- **96.16 — Views:** Practice explaining or applying Views under a timer and record the evidence and correction.
- **96.17 — Actions:** Practice explaining or applying Actions under a timer and record the evidence and correction.
- **96.18 — Security:** Practice explaining or applying Security under a timer and record the evidence and correction.
- **96.19 — Multi-Company:** Practice explaining or applying Multi-Company under a timer and record the evidence and correction.
- **96.20 — Inheritance:** Practice explaining or applying Inheritance under a timer and record the evidence and correction.
- **96.21 — Mixins:** Practice explaining or applying Mixins under a timer and record the evidence and correction.
- **96.22 — Wizards:** Practice explaining or applying Wizards under a timer and record the evidence and correction.
- **96.23 — Cron / Automation:** Practice explaining or applying Cron / Automation under a timer and record the evidence and correction.
- **96.24 — Chatter:** Practice explaining or applying Chatter under a timer and record the evidence and correction.
- **96.25 — QWeb / Reports:** Practice explaining or applying QWeb / Reports under a timer and record the evidence and correction.
- **96.26 — Internationalization:** Practice explaining or applying Internationalization under a timer and record the evidence and correction.
- **96.27 — Controllers:** Practice explaining or applying Controllers under a timer and record the evidence and correction.
- **96.28 — APIs:** Practice explaining or applying APIs under a timer and record the evidence and correction.
- **96.29 — Webhooks:** Practice explaining or applying Webhooks under a timer and record the evidence and correction.
- **96.30 — Integrations:** Practice explaining or applying Integrations under a timer and record the evidence and correction.
- **96.31 — OWL:** Practice explaining or applying OWL under a timer and record the evidence and correction.
- **96.32 — JavaScript Framework:** Practice explaining or applying JavaScript Framework under a timer and record the evidence and correction.
- **96.33 — PostgreSQL:** Practice explaining or applying PostgreSQL under a timer and record the evidence and correction.
- **96.34 — Performance:** Practice explaining or applying Performance under a timer and record the evidence and correction.
- **96.35 — Testing:** Practice explaining or applying Testing under a timer and record the evidence and correction.
- **96.36 — Debugging:** Practice explaining or applying Debugging under a timer and record the evidence and correction.
- **96.37 — CLI:** Practice explaining or applying CLI under a timer and record the evidence and correction.
- **96.38 — Deployment:** Practice explaining or applying Deployment under a timer and record the evidence and correction.
- **96.39 — Odoo.sh:** Practice explaining or applying Odoo.sh under a timer and record the evidence and correction.
- **96.40 — Docker:** Practice explaining or applying Docker under a timer and record the evidence and correction.
- **96.41 — Upgrades:** Practice explaining or applying Upgrades under a timer and record the evidence and correction.
- **96.42 — Migrations:** Practice explaining or applying Migrations under a timer and record the evidence and correction.
- **96.43 — Requirements Analysis:** Practice explaining or applying Requirements Analysis under a timer and record the evidence and correction.
- **96.44 — Solution Architecture:** Practice explaining or applying Solution Architecture under a timer and record the evidence and correction.
- **96.45 — Live Module Design:** Practice explaining or applying Live Module Design under a timer and record the evidence and correction.
- **96.46 — Live Debugging:** Practice explaining or applying Live Debugging under a timer and record the evidence and correction.
- **96.47 — Code Review:** Practice explaining or applying Code Review under a timer and record the evidence and correction.
- **96.48 — Portfolio Walkthrough:** Practice explaining or applying Portfolio Walkthrough under a timer and record the evidence and correction.
- **96.49 — PORTFOLIO PROJECT 1 — Library / Asset Management:** Practice explaining or applying PORTFOLIO PROJECT 1 — Library / Asset Management under a timer and record the evidence and correction.
- **96.50 — PORTFOLIO PROJECT 2 — HR / Leave Approval:** Practice explaining or applying PORTFOLIO PROJECT 2 — HR / Leave Approval under a timer and record the evidence and correction.
- **96.51 — PORTFOLIO PROJECT 3 — Sales Customization:** Practice explaining or applying PORTFOLIO PROJECT 3 — Sales Customization under a timer and record the evidence and correction.
- **96.52 — PORTFOLIO PROJECT 4 — Inventory Extension:** Practice explaining or applying PORTFOLIO PROJECT 4 — Inventory Extension under a timer and record the evidence and correction.
- **96.53 — PORTFOLIO PROJECT 5 — API / SaaS Integration:** Practice explaining or applying PORTFOLIO PROJECT 5 — API / SaaS Integration under a timer and record the evidence and correction.
- **96.54 — PORTFOLIO PROJECT 6 — OWL Dashboard:** Practice explaining or applying PORTFOLIO PROJECT 6 — OWL Dashboard under a timer and record the evidence and correction.
- **96.55 — PORTFOLIO PROJECT 7 — Customer Portal:** Practice explaining or applying PORTFOLIO PROJECT 7 — Customer Portal under a timer and record the evidence and correction.
- **96.56 — FINAL MOCK INTERVIEW:** Practice explaining or applying FINAL MOCK INTERVIEW under a timer and record the evidence and correction.

#### SPECIFICATION

- Debug a prepared Odoo failure under a timer using logs, developer mode, shell, SQL, tests, and a spoken root-cause explanation.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Debug a prepared Odoo failure under a timer using logs, developer mode, shell, SQL, tests, and a spoken root-cause explanation.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Interviews and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Odoo 18 Community.
- Python 3.12 and PostgreSQL.
- XML views; add JavaScript/OWL only for frontend widget phases.

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named timed_odoo_debug_drill with a manifest, models, security, views, data, and tests folders.
2. Debug a prepared Odoo failure under a timer using logs, developer mode, shell, SQL, tests, and a spoken root-cause explanation.
3. Use a metric connected to Interviews and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Interviews.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- odoo/story-24/chapter-96-timed-odoo-debug-drill
git commit -m "feat(timed-odoo-debug-drill): complete chapter 96 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO CHAPTER 96](../roadmaps/ODOO.md#phase-96) | [RETURN TO THE ODOO COURSE](../roadmaps/ODOO.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="odoo-main-portfolio-project"></a>
## ODOO MAIN PORTFOLIO PROJECT

#### PROJECT: COMMUNITY CENTER OPERATIONS SUITE

#### DESCRIPTION

An Odoo Community addon suite for managing members, rooms, classes, registrations, payments recorded offline, volunteer assignments, and operational reports for a nonprofit community center.

#### WHO THIS IS FOR

- Receptionist registering members and class bookings
- Program manager planning rooms, instructors, and attendance
- Finance or volunteer coordinator reviewing payments and assignments

#### WHAT USERS CAN DO

- Manage members, classes, rooms, sessions, registrations, volunteers, and attendance
- Prevent capacity, schedule, access, and state-transition errors
- Import data, integrate one free external service, and receive signed webhooks
- Show role-aware menus, reports, reminders, and a small KPI dashboard

#### FREE AND OPEN-SOURCE TECH STACK

- Odoo 18 Community Edition
- Python 3.12 and PostgreSQL
- XML views and QWeb reports
- OWL with JavaScript only for one dashboard widget
- Odoo tests, Ruff, and Git
- Docker Engine or Podman with Compose; every required application component is free and open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - ERP Thinking:** Map the center's member-to-class and room-booking processes, actors, pain points, and success measures.
2. **Phase 2 - Three-Tier Architecture:** Trace one browser request through controller, ORM, PostgreSQL, and response so every layer has a clear job.
3. **Phase 3 - Development Environment:** Create a reproducible local Odoo/PostgreSQL environment with demo configuration and no committed secrets.
4. **Phase 4 - Module Anatomy:** Create installable `community_center_core` and companion addon manifests with dependencies, data files, and icons.
5. **Phase 5 - Models and Fields:** Model members, classes, sessions, rooms, registrations, volunteers, and attendance with correct field types and constraints.
6. **Phase 6 - ORM Queries:** Implement filtered recordset queries, computed values, grouped counts, and batch-safe methods without N+1 loops.
7. **Phase 7 - Access Control and Record Rules:** Create groups, ACLs, record rules, multi-company tests, and separate receptionist, manager, and coordinator access.
8. **Phase 8 - XML Views:** Build list, form, search, kanban, calendar, and inherited views with clear labels and accessible status information.
9. **Phase 9 - Actions and Menus:** Add role-aware menus, window actions, smart buttons, filters, and navigation that never substitutes for real access rules.
10. **Phase 10 - Business Logic:** Implement capacity checks, schedule-conflict validation, registration states, attendance, reminders, and safe automated actions.
11. **Phase 11 - Inheritance:** Extend Contacts and Calendar through Odoo inheritance without copying core models or views.
12. **Phase 12 - Wizards and Transient Models:** Add a transient wizard for bulk registration, attendance entry, or schedule change with confirmation and validation.
13. **Phase 13 - Controllers and Webhooks:** Create a small public registration controller and a signed, idempotent webhook endpoint with replay protection.
14. **Phase 14 - External APIs:** Integrate one free public service such as geocoding or holidays with timeouts, retries, configuration, and graceful failure.
15. **Phase 15 - Integrations and Payments:** Record offline payment references or integrate a provider sandbox only; make callbacks idempotent and never store card data.
16. **Phase 16 - OWL Frontend:** Build one OWL KPI widget with loading, empty, error, access-denied, and refresh states.
17. **Phase 17 - PostgreSQL for Odoo:** Add indexes for measured slow queries, batch ORM work, inspect EXPLAIN output, and remove one verified N+1 query.
18. **Phase 18 - Testing, Debugging, and Upgrades:** Write model, security, workflow, controller, migration, and upgrade tests; verify install, update, and uninstall in a disposable database.
19. **PHASE 19 - Portfolio Modules (REQUIRED CAPSTONE-COMPLETION STEP):** Polish demo data, reports, translations-ready strings, screenshots, module metadata, and an open-source license.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Run a timed bug investigation and explain the request path, ORM behavior, security, tests, upgrade plan, and trade-offs.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `community_center_operations` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: installable addon scaffold, process map, models, ACLs, and menus**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "feat(community-center): establish installable operations addon"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: business rules, relationships, workflows, views, and record security**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "feat(community-center): implement secure operational workflows"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: reporting, scheduled work, integrations, web endpoints, and OWL interface**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "feat(community-center): integrate reporting automation and portal"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: tests, profiling, upgrades, deployment, backup, and observability**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "test(community-center): verify addon upgrade and operations"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: demo records, reports, metadata, screenshots, and release documentation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "docs(community-center): complete Odoo operations suite release"
git tag -a community-center-v1.0.0 -m "First complete community-center release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Build local Odoo and PostgreSQL images with Docker Compose, named volumes, health checks, and environment-based secrets.
2. Create a fresh database, install the addons from the command line, load demo data, and run all tests.
3. Put Nginx or Caddy in front of Odoo for a local production-like deployment with generated development TLS.
4. For a guaranteed free showcase, record a short sanitized demo and publish its static project page to GitHub Pages.
5. A live public Odoo server needs persistent compute and storage; use only a free VM you already control, never enter billing details for this project, and keep the Docker deployment portable.
6. Back up the PostgreSQL volume, restore it into a new local environment, and verify one complete registration workflow after restoration.

> **MAIN PROJECT NAVIGATION:** [REVIEW ODOO PHASE 95](../roadmaps/ODOO.md#phase-95) | [REVIEW ODOO PHASE 96](../roadmaps/ODOO.md#phase-96) | [RETURN TO THE ODOO ROADMAP](../roadmaps/ODOO.md#phase-index)
