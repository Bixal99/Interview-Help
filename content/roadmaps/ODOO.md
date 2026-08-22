# The Zero-to-Hero Odoo Engineer Roadmap

*Mohammad Bilal's complete, self-paced path from absolute zero knowledge to job-ready Odoo engineering — business/ERP thinking, platform internals, modules, ORM, security, UI, integrations, OWL, PostgreSQL, testing, deployment, upgrades, and hire readiness — told as one continuous conversation in which each idea solves a limit left by the previous one.*

*Resources curated with Composio (web search, YouTube, GitHub) against [Odoo 18 Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html), [Architecture overview](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html), [Building a Module](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html), [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html), [Security in Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html), [Restrict access to data](https://www.odoo.com/documentation/18.0/developer/tutorials/restrict_data_access.html), [View architectures](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html), [Web Controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html), [Web Services](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html), [Owl components](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html), [Source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html), [odoo/odoo](https://github.com/odoo/odoo), [odoo/tutorials](https://github.com/odoo/tutorials), [odoo/documentation](https://github.com/odoo/documentation), [odoo/owl](https://github.com/odoo/owl), [odoo/docker](https://github.com/odoo/docker), [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public), [Yenthe666/Odoo_Samples](https://github.com/Yenthe666/Odoo_Samples), and beginner videos such as [What is ERP?](https://www.youtube.com/watch?v=10JeksrGVjI), [ERP Systems Explained](https://www.youtube.com/watch?v=Bb4jVGiQKKA), [Odoo Beginner's Guide](https://www.youtube.com/watch?v=QuC6rc2q2mg), [Mastering Odoo ORM](https://www.youtube.com/watch?v=5YIwP9-55Qk), [Security in Odoo](https://www.youtube.com/watch?v=mzg3EGD_6Gw), and [OWL widget tutorial](https://www.youtube.com/watch?v=YJg7dvwXQF8).*

*Where this sits:* Python comfort helps once modules start (classes, inheritance). Prefer working [`CS.md`](./CS.md) foundations (especially OOP) in parallel or just ahead of Stories IV–VI. Build matching work in [`Projects.md`](../guides/Projects.md) and drill [`Interview.md`](../guides/Interview.md) when you reach Story XIX.*

**Scope:** 19 stories · 95 phases · zero knowledge → Odoo Engineer.

ERP thinking → Platform → Modules → Data & ORM → Rules → UI → Security → Extension → Advanced features → Web/Portal → APIs → OWL → PostgreSQL → Tests → Deploy → Upgrades → Engineering judgment → Job ready

---

## How to Read This Document

### Start here if Odoo, ERP, and business software are completely new to you

Keep one small company in mind the whole way — a bookstore, a clinic, a workshop. For every topic, ask: *what business fact does this protect or move?* Enter a few records by hand when a lab asks you to. The vocabulary sticks when every term maps to a visible business action.

**Everyday words**

| Word | Meaning |
| --- | --- |
| **ERP** | One connected **business system** for sales, stock, money, people, and related work |
| **Odoo** | An **ERP platform** you can configure and extend with modules |
| **Module / Addon** | A package that **adds or changes** business features |
| **Model** | The definition of a kind of **business record** |
| **Record** | One stored item such as a **customer** or **sales order** |
| **View** | What the **user sees and clicks** for those records |

**Words you will meet often**

| Word | Meaning |
| --- | --- |
| **ORM** | Lets Python work with **database records** safely |
| **Manifest** | The file that describes a module and its **dependencies** |
| **Field** | One **named value** on a model |
| **Domain** | Conditions used to **find** records |
| **ACL** | Model-level **create / read / write / delete** permissions |
| **Record rule** | Row-level limits on **which records** a user may touch |
| **Registry** | Odoo's loaded map of **all models** in a database |
| **Controller** | Receives **HTTP requests** |
| **OWL** | Odoo's **component system** for interactive browser UI |
| **QWeb** | Odoo's **template** system for reports and pages |
| **Migration** | Changing code or data so a system survives an **upgrade** |

This is not a glossary to memorize on day one. It is one connected explanation: every section exists because the section before it reached a practical limit. ERP thinking only matters once spreadsheet chaos burned you. Record rules only matter once model ACLs still let users see rows they should not. OWL only matters once pure XML could not express the interaction you need.

Every meaningful lesson still answers the same engineering questions — in continuous prose, not as a repeated form on every page:

- What is this, in plain language?
- Why does it exist — what problem forced it?
- How does it work, step by step, inside Odoo?
- What does it cost?
- What limitation forces the next idea?

That last question is the engine of the whole roadmap.

### Two ways to use the same foundation

| Role | Primary question |
| --- | --- |
| **Backend Odoo** | Models, ORM, security, workflows, upgrades? |
| **Full-stack Odoo** | Views, HTTP, portal, RPC, payments, OWL, PostgreSQL tuning? |

Stories I–III build business and platform footing. Stories IV–IX build the core developer craft. Stories X–XV extend into automation, web, APIs, frontend, data performance, and tests. Stories XVI–XIX make you ship, maintain, judge trade-offs, and hire. Skip neither security nor UX — insecure features are breaches; unusable features never get adopted.

Authoring contract: [Learning Content Standard](../standards/LEARNING_CONTENT_STANDARD.md) and [Odoo Course Profile](../standards/course-profiles/odoo.md). Lessons use continuous teacher prose, selective contextual headings, and visible narrative closers after Practice (`**WHAT THIS UNLOCKS NEXT:**` / `**WHAT COMES NEXT:**`).

**Diagram conventions.** `|` and `v` mean sequence, `+--` joins paths, `-->` means a call or dependency, `X` marks a failure, boxes are models or tiers. Time usually runs downward.

**Prerequisites:** Curiosity and willingness to run a local Odoo. Comfortable Python before Story IV is strongly recommended. [`CS.md`](./CS.md) OOP helps; [`Networks.md`](./Networks.md) HTTP basics help for Stories XI–XII.

---

> **Integrated Git practice:** Each linked project card in [`Projects.md`](../guides/Projects.md) ends with one specific Git checkpoint. Test the finished work first, commit only its named path, verify a clean tree, then continue. Use [`Git.md` Phases 2–3](./Git.md#phase-2) if staging is unfamiliar.

---

## The Story Map

```text
 STORY I                 STORY II                STORY III
 BUSINESS BEFORE CODE    HOW ODOO WORKS          FIRST MODULE
    |                       |                      |
 ERP, apps, quote→invoice  client/server/DB/dev   manifest → install/upgrade
    +-----------------------+----------------------+
                                       |
                                       v
 STORY IV                STORY V                 STORY VI
 MODEL BUSINESS DATA     MASTER THE ORM          RULES & WORKFLOWS
    |                       |                      |
 models, fields, relations compute, CRUD, domains methods, constraints, states
    +-----------------------+----------------------+
                                       |
                                       v
 STORY VII               STORY VIII              STORY IX
 BUILD THE UI            SECURITY                EXTEND ODOO
    |                       |                      |
 views, actions, xpath     ACL, rules, multi-co   _inherit, customize apps
    +-----------------------+----------------------+
                                       |
                                       v
 STORY X                 STORY XI                STORY XII
 ADVANCED FEATURES       WEB & PORTAL            APIs & INTEGRATIONS
    |                       |                      |
 wizards, cron, chatter    controllers, website   RPC, webhooks, payments
 reports, import/export    portal security
    +-----------------------+----------------------+
                                       |
                                       v
 STORY XIII              STORY XIV               STORY XV
 OWL FRONTEND            POSTGRES & PERF         TEST & DEBUG
    |                       |                      |
 components, assets        schema, indexes, N+1   logging, TransactionCase
    +-----------------------+----------------------+
                                       |
                                       v
 STORY XVI               STORY XVII              STORY XVIII
 DEPLOY & OPERATE        UPGRADES                REAL ENGINEERING
    |                       |                      |
 workers, HTTPS, backup    migrations, -u         config vs custom vs integrate
    +-----------------------+----------------------+
                                       |
                                       v
                              STORY XIX
                              JOB READY
                         portfolio + capstone
                                       |
                                       v
                               ODOO ENGINEER
```

| Story | Question it answers |
| --- | --- |
| I. Understand the business before the code | Why does a company need one shared system, and what is Odoo in that picture? |
| II. How Odoo actually works | How do browser, server, PostgreSQL, and addons fit together locally? |
| III. Your first Odoo module | How do I ship a real addon and survive install/upgrade? |
| IV. Modeling business data | How do I declare the records a business lives on? |
| V. Mastering the Odoo ORM | How do I query and change those records safely and efficiently? |
| VI. Business rules & workflows | How do I encode approvals, validation, and state machines? |
| VII. Building the user interface | How do users see and navigate that data? |
| VIII. Security & multi-company | Who may touch which rows, across companies? |
| IX. Extending existing Odoo | How do I customize Sales/Stock without forking the product? |
| X. Advanced business features | Wizards, sequences, cron, chatter, reports, data files |
| XI. Web development with Odoo | Controllers, website, and customer portal |
| XII. APIs & integrations | RPC, webhooks, SaaS sync, payments |
| XIII. Modern Odoo frontend | OWL, assets, patches, client actions |
| XIV. PostgreSQL & performance | Schema, plans, ORM performance, profiling |
| XV. Testing & debugging | Logs, TransactionCase, security and UI tests |
| XVI. Deployment & operations | Production config, HTTPS, workers, backups, Odoo.sh, Docker |
| XVII. Upgrades & maintenance | Versioning, schema/data migrations, upgrade-safe custom code |
| XVIII. Real Odoo engineering | Requirements → design → config vs custom vs integrate |
| XIX. Becoming job ready | Functional fluency, portfolio, interviews, capstone ERP |

### Phase Index

| # | Phase | Goal | Move on when you can... |
| --- | --- | --- | --- |
| 01 | [What Is ERP?](#phase-1---what-is-erp) | See shared business truth | Model processes, master data, and transactions for a small company |
| 02 | [Understanding Odoo](#phase-2---understanding-odoo) | Map Odoo to ERP ideas | Contrast Community/Enterprise and name shared records |
| 03 | [Core Business Applications](#phase-3---core-business-applications) | Trace operational flow | Walk quote → delivery → invoice across apps |
| 04 | [Odoo Architecture](#phase-4---odoo-architecture) | Picture the 3 tiers | Trace browser → server → PostgreSQL → filestore |
| 05 | [Development Environment](#phase-5---development-environment) | Run Odoo locally | Use config, addons_path, and developer mode |
| 06 | [Odoo Source Code Structure](#phase-6---odoo-source-code-structure) | Navigate the repo | Find models, HTTP, services, and registry code |
| 07 | [Module Anatomy](#phase-7---module-anatomy) | Read an addon | Explain manifest, models, views, security, data |
| 08 | [Module Lifecycle](#phase-8---module-lifecycle) | Install and upgrade | Use depends, `-i`, `-u`, and data load order |
| 09 | [Models](#phase-9---models) | Declare models | Ship a library-style model with `_name` |
| 10 | [Fields](#phase-10---fields) | Choose field types | Model real business attributes correctly |
| 11 | [Relationships](#phase-11---relationships) | Link records | Draw Many2one / One2many / Many2many correctly |
| 12 | [Computed & Dynamic Fields](#phase-12---computed--dynamic-fields) | Auto-calculate | Use compute, depends, store, inverse, search |
| 13 | [Environment & Recordsets](#phase-13---environment--recordsets) | Think in env/self | Explain context, user, and company on a recordset |
| 14 | [CRUD](#phase-14---crud) | Create and mutate | Use create/browse/search/read/write/unlink fluently |
| 15 | [Domains & Searching](#phase-15---domains--searching) | Query with domains | Write AND/OR/NOT business searches |
| 16 | [Recordset Operations](#phase-16---recordset-operations) | Transform sets | Use filtered/mapped/sorted and batch writes |
| 17 | [ORM Internals & Performance](#phase-17---orm-internals--performance) | Avoid N+1 pain | Prefetch, flush, and spot cache mistakes |
| 18 | [Business Methods](#phase-18---business-methods) | Encode actions | Override create/write with super() safely |
| 19 | [Constraints & Validation](#phase-19---constraints--validation) | Protect invariants | Raise ValidationError / UserError correctly |
| 20 | [Onchange & UI Logic](#phase-20---onchange--ui-logic) | Dynamic forms | Use onchange and context defaults |
| 21 | [States & Workflows](#phase-21---states--workflows) | Model approvals | Implement legal state transitions |
| 22 | [XML Foundations](#phase-22---xml-foundations) | Load data as XML | Explain external IDs and load order |
| 23 | [Form & List Views](#phase-23---form--list-views) | Build CRUD screens | Author form/list with buttons and notebooks |
| 24 | [Search, Kanban & Other Views](#phase-24---search-kanban--other-views) | Multiple lenses | Ship search, kanban, calendar, pivot, graph |
| 25 | [Actions & Menus](#phase-25---actions--menus) | Wire navigation | Create act_window, menus, domains, context |
| 26 | [View Inheritance](#phase-26---view-inheritance) | Extend screens | Use inherit_id, xpath, and position |
| 27 | [Users & Groups](#phase-27---users--groups) | Role model | Design groups that match real jobs |
| 28 | [Access Control Lists](#phase-28---access-control-lists) | Model CRUD rights | Author ir.model.access.csv correctly |
| 29 | [Record Rules](#phase-29---record-rules) | Row security | Write ir.rule domains that isolate data |
| 30 | [sudo(), with_user() & Security Context](#phase-30---sudo-with_user--security-context) | Elevate carefully | Know when sudo is a smell vs a tool |
| 31 | [Multi-Company Development](#phase-31---multi-company-development) | Company isolation | Use company_id / company_ids safely |
| 32 | [Model Inheritance](#phase-32---model-inheritance) | Extend models | Choose classical vs extension `_inherit` |
| 33 | [Delegation](#phase-33---delegation) | Compose models | Use `_inherits` when delegation fits |
| 34 | [View Inheritance in Real Modules](#phase-34---view-inheritance-in-real-modules) | Patch official UI | Extend real app views without breakage |
| 35 | [Extending Sales / Purchase / Inventory](#phase-35---extending-sales--purchase--inventory) | Customize ops apps | Add fields/logic to sale/purchase/stock |
| 36 | [Wizards & TransientModel](#phase-36---wizards--transientmodel) | Multi-step dialogs | Build TransientModel wizards |
| 37 | [Sequences](#phase-37---sequences) | Human-readable IDs | Configure ir.sequence for documents |
| 38 | [Scheduled Actions / Cron](#phase-38---scheduled-actions--cron) | Background jobs | Define safe cron methods |
| 39 | [Automated Actions](#phase-39---automated-actions) | No-code triggers | Know when automation belongs in code |
| 40 | [Mail, Chatter & Activities](#phase-40---mail-chatter--activities) | Collaboration | Mix in mail.thread and activities |
| 41 | [Reports & QWeb](#phase-41---reports--qweb) | Print documents | Ship PDF reports with QWeb |
| 42 | [Import / Export & Data Files](#phase-42---import--export--data-files) | Move data | Design noupdate-safe data files |
| 43 | [HTTP Controllers](#phase-43---http-controllers) | Custom routes | Secure @http.route with auth and CSRF |
| 44 | [Website Development](#phase-44---website-development) | Public pages | Build website pages and controllers |
| 45 | [Portal Development](#phase-45---portal-development) | Customer self-service | Ship portal pages with portal security |
| 46 | [External API Concepts](#phase-46---external-api-concepts) | Integration mindset | Name contracts, identity, and failure modes |
| 47 | [RPC & External Odoo Access](#phase-47---rpc--external-odoo-access) | Call Odoo remotely | Use XML-RPC/JSON-RPC with integration users |
| 48 | [Building API Endpoints](#phase-48---building-api-endpoints) | Expose your own API | Design versioned, authenticated endpoints |
| 49 | [Webhooks](#phase-49---webhooks) | Event-driven sync | Handle signatures and idempotency |
| 50 | [Third-Party Integrations](#phase-50---third-party-integrations) | Sync SaaS systems | Retry, map, and reconcile safely |
| 51 | [Payment Integrations](#phase-51---payment-integrations) | Take money | Explain acquirer flow and failure handling |
| 52 | [Odoo JavaScript Architecture](#phase-52---odoo-javascript-architecture) | Web client map | Locate services, registries, and assets |
| 53 | [OWL Fundamentals](#phase-53---owl-fundamentals) | Build components | Use props, state, templates, lifecycle |
| 54 | [Services, Registries & Hooks](#phase-54---services-registries--hooks) | Wire frontend | Register services and use hooks |
| 55 | [Assets](#phase-55---assets) | Ship JS/CSS | Declare asset bundles in the manifest |
| 56 | [Extending / Patching Web Client](#phase-56---extending--patching-web-client) | Patch carefully | Patch components without fighting upgrades |
| 57 | [Custom Client Actions](#phase-57---custom-client-actions) | Full-screen UX | Register client actions for dashboards |
| 58 | [Odoo Database Structure](#phase-58---odoo-database-structure) | See SQL reality | Map models to tables and ir_* metadata |
| 59 | [PostgreSQL for Odoo Developers](#phase-59---postgresql-for-odoo-developers) | Speak enough SQL | Inspect and reason about Odoo schemas |
| 60 | [Transactions & Concurrency](#phase-60---transactions--concurrency) | Think in commits | Reason about locks and concurrent writes |
| 61 | [Indexes & Query Plans](#phase-61---indexes--query-plans) | Read EXPLAIN | Propose indexes that match domains |
| 62 | [ORM Performance](#phase-62---orm-performance) | Write fast ORM | Eliminate classic N+1 patterns |
| 63 | [Profiling & Optimization](#phase-63---profiling--optimization) | Measure first | Profile before rewriting |
| 64 | [Odoo Logging & Debugging](#phase-64---odoo-logging--debugging) | Debug calmly | Use logs, breakpoints, and --log-level |
| 65 | [Python Tests](#phase-65---python-tests) | Write TransactionCase | Assert business outcomes in tests |
| 66 | [Testing Business Logic](#phase-66---testing-business-logic) | Test workflows | Cover state transitions and constraints |
| 67 | [Testing Security](#phase-67---testing-security) | Prove ACL/rules | Assert AccessError and rule isolation |
| 68 | [Testing UI / Web Flows](#phase-68---testing-ui--web-flows) | Cover HTTP/UI | Test controllers and critical UI paths |
| 69 | [Odoo Configuration](#phase-69---odoo-configuration) | Production config | Tune odoo.conf for the environment |
| 70 | [Linux Deployment](#phase-70---linux-deployment) | Deploy on Linux | Install and run as a service user |
| 71 | [Reverse Proxy & HTTPS](#phase-71---reverse-proxy--https) | Terminate TLS | Put nginx/caddy correctly in front |
| 72 | [Workers & Production Configuration](#phase-72---workers--production-configuration) | Scale workers | Choose workers/memory limits sanely |
| 73 | [PostgreSQL Operations](#phase-73---postgresql-operations) | Operate the DB | Vacuum, roles, and connection basics |
| 74 | [Backups & Restore](#phase-74---backups--restore) | Survive disasters | Backup DB + filestore and restore |
| 75 | [Odoo.sh](#phase-75---odoosh) | Use Odoo.sh | Explain branches, builds, and deploys |
| 76 | [Docker Concepts for Odoo](#phase-76---docker-concepts-for-odoo) | Container mindset | Compose Odoo + Postgres thoughtfully |
| 77 | [Monitoring & Logs](#phase-77---monitoring--logs) | See production | Monitor health and read logs under load |
| 78 | [Module Versioning](#phase-78---module-versioning) | Version modules | Bump versions with intent |
| 79 | [Schema Changes](#phase-79---schema-changes) | Evolve columns | Change fields without data loss |
| 80 | [Data Migrations](#phase-80---data-migrations) | Move live data | Write upgrade scripts safely |
| 81 | [Odoo Version Upgrades](#phase-81---odoo-version-upgrades) | Major upgrades | Plan Community/Enterprise version jumps |
| 82 | [Upgrade-Safe Customization](#phase-82---upgrade-safe-customization) | Survive core changes | Prefer extension over core edits |
| 83 | [Debugging Legacy Modules](#phase-83---debugging-legacy-modules) | Inherit debt | Untangle old modules safely |
| 84 | [Requirements → ERP Design](#phase-84---requirements--erp-design) | Start from business | Turn interviews into module boundaries |
| 85 | [Module Architecture](#phase-85---module-architecture) | Split addons | Design depends graphs that stay maintainable |
| 86 | [Choosing Customization vs Configuration](#phase-86---choosing-customization-vs-configuration) | Prefer config | Decide when not to write code |
| 87 | [Choosing Customization vs Integration](#phase-87---choosing-customization-vs-integration) | Prefer integrate | Decide when another system should own a fact |
| 88 | [Maintainable Odoo Code](#phase-88---maintainable-odoo-code) | Write for humans | Keep modules readable and testable |
| 89 | [Git Workflow](#phase-89---git-workflow) | Collaborate | Branch, review, and release Odoo code |
| 90 | [Code Review](#phase-90---code-review) | Review like prod | Catch security and upgrade risks in review |
| 91 | [Odoo Functional Knowledge](#phase-91---odoo-functional-knowledge) | Speak ops | Explain CRM→Sales→Stock→Accounting paths |
| 92 | [Reading Existing Odoo Code](#phase-92---reading-existing-odoo-code) | Learn from core | Navigate official apps with purpose |
| 93 | [Debugging Real Odoo Problems](#phase-93---debugging-real-odoo-problems) | Fix production-shaped bugs | Diagnose AccessError, performance, upgrade breaks |
| 94 | [Odoo Interview Preparation](#phase-94---odoo-interview-preparation) | Talk clearly | Explain trade-offs under interview pressure |
| 95 | [Portfolio](#phase-95---portfolio) | Prove skill | Ship portfolio modules + complete ERP capstone |

### Anchor Resources (bookmark these)

- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html) · [Architecture](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html) · [Building a Module](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html) · [Security](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html) · [Restrict access](https://www.odoo.com/documentation/18.0/developer/tutorials/restrict_data_access.html)
- [View architectures](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html) · [HTTP](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html) · [Web Services](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html)
- [Owl components](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html) · [Source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html)
- [odoo/odoo](https://github.com/odoo/odoo) · [odoo/tutorials](https://github.com/odoo/tutorials) · [odoo/owl](https://github.com/odoo/owl) · [odoo/docker](https://github.com/odoo/docker)
- [What is ERP?](https://www.youtube.com/watch?v=10JeksrGVjI) · [Odoo Beginner's Guide](https://www.youtube.com/watch?v=QuC6rc2q2mg) · [ORM guide](https://www.youtube.com/watch?v=5YIwP9-55Qk) · [Security](https://www.youtube.com/watch?v=mzg3EGD_6Gw) · [OWL](https://www.youtube.com/watch?v=YJg7dvwXQF8)
- **Projects bridge:** [`Projects.md`](../guides/Projects.md) · **Interview bridge:** [`Interview.md`](../guides/Interview.md)

---

# PHASE 1 - What Is ERP?

**Track:** Business & ERP Foundations

**WHAT YOU WILL BE ABLE TO DO:** Explain ERP as one shared system of business truth — name processes, departments, master data, and transactions — contrast ERP with CRM, and sketch how a small company would run without spreadsheet chaos.

**WHAT YOU SHOULD KNOW FIRST:** Nothing about Odoo or ERP. Comfortable reading plain English and simple diagrams. Optional: basic Python later in the roadmap; not required yet.

**LEARNING RESOURCES:**

- [What is ERP? (YouTube)](https://www.youtube.com/watch?v=10JeksrGVjI)
- [ERP Systems Explained (YouTube)](https://www.youtube.com/watch?v=Bb4jVGiQKKA)
- [ERP explained without jargon (YouTube)](https://www.youtube.com/watch?v=EHiH7hp0PBU)
- [Odoo ERP overview (YouTube)](https://www.youtube.com/watch?v=s-4zNx7wCFk)
- [Odoo 18 — Server Framework 101 Architecture](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html)
- [Odoo developer landing](https://www.odoo.com/documentation/18.0/developer.html)

## 1.1 Business Processes

You are about to learn Odoo — a platform that runs companies. Before you touch Python, XML, or a database, you need the problem Odoo was built to solve. That problem is not “missing a programming language.” It is **business work that refuses to stay in one person’s head**.

A **business process** is a repeatable sequence of steps that turns an input into a business outcome. “Customer asks for a price” → “we send a quote” → “they order” → “we deliver” → “we invoice” → “they pay” is one process. Hiring someone, buying raw materials, and closing the month’s books are other processes. Companies live or die on whether those processes are reliable, auditable, and shared.

**WHEN “JUST ASK THE OWNER” STOPS WORKING:**

In a one-person shop, the owner *is* the process. They know who ordered what, what is on the shelf, and who still owes money. The moment you add a second salesperson, a warehouse helper, or an accountant, memory stops being a system. People invent shortcuts: sticky notes, chat messages, personal spreadsheets. Each shortcut feels faster — until two people update different “truths” and the company ships the wrong product or double-invoices a customer.

ERP (Enterprise Resource Planning) exists because **resources** — money, stock, people, time — must be planned and recorded together. “Enterprise” here does not mean “only Fortune 500.” It means the whole operating unit, even if that unit is a 12-person workshop in Doha.

```text
INPUT                    PROCESS                         OUTCOME
customer need     -->    quote → order → deliver    -->  cash + happy customer
supplier catalog  -->    RFQ → PO → receive         -->  stock ready to sell
candidate resume  -->    interview → contract       -->  employee on payroll
```

Notice the pattern: every process has **states** (draft, confirmed, done) and **hand-offs** between people. Software that only stores static lists misses the point. Software that tracks state changes along a process is getting closer to ERP.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List five business processes a bakery might run in a normal week. |
| Medium | For one process (e.g. “sell a cake”), write the steps and who owns each step. |
| Hard | Mark where two people could disagree on “truth” if they used separate notebooks. |

**WHAT THIS UNLOCKS NEXT:**

Processes name *what* the company does. The next lesson asks *who* does each hand-off — and why separate departments create the very chaos ERP was invented to fix.

---

## 1.2 Departments & Workflows

A process spans people. Companies group people into **departments**: Sales, Purchasing, Warehouse, Accounting, HR. Departments are useful — specialists focus — but they also create walls. Sales promises a delivery date the warehouse never saw. Accounting invoices a quantity Purchasing never ordered. HR onboards someone who never got a laptop from IT.

A **workflow** is the path a document or decision takes across those departments. In ERP language, a quotation “flows” into a sales order, which “flows” into a delivery, which “flows” into an invoice. The document changes **state**; each state change may notify or require another role.

**THE WALL BETWEEN SPREADSHEETS:**

```text
SALES                  WAREHOUSE               ACCOUNTING
sales_pipeline.xlsx    stock.xlsx              invoices.xlsx
     |                      |                       |
     |  email "ship it"     |                       |
     +--------------------->|                       |
                            |  email "shipped"      |
                            +---------------------->|
                                                    |
                         three files, three truths, endless reconciliation
```

ERP does not abolish departments. It gives them **one shared record** and a **shared sequence of states**, so hand-offs are data, not tribal knowledge.

| Department | Typical question | Needs from others |
| ---------- | ---------------- | ----------------- |
| Sales | Can we promise this? | Real stock + customer credit |
| Warehouse | What do we pick today? | Confirmed orders + locations |
| Accounting | What can we invoice? | Delivered quantities + taxes |
| Purchasing | What must we reorder? | Forecast + vendor lead times |
| HR | Who is on the team? | Roles, contracts, time off |

When you later open Odoo Apps, you will see Sales, Inventory, Accounting as separate apps — but they are **departments as modules**, not separate companies with separate databases.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name three departments in a furniture shop and one hand-off between each pair. |
| Medium | Draw a swimlane (Sales / Warehouse / Accounting) for “customer orders a desk.” |
| Hard | Invent one failure caused by a broken hand-off, and say which shared field would have prevented it. |

**WHAT THIS UNLOCKS NEXT:**

Workflows move documents. Those documents keep naming the same customers and products over and over. If every app spells “customer” differently, the workflow still lies. That is the job of master data.

---

## 1.3 Master Data

**Master data** is the slow-changing reference information the company agrees is true: who the customer is, what the product is, which unit of measure you sell in, which warehouse locations exist, who the employee is. Transactions (orders, deliveries, invoices) *point at* master data; they should not reinvent it.

**WHY SPELLING THE CUSTOMER TWICE DESTROYS TRUST:**

If Sales stores `Acme Trading` and Accounting stores `ACME trading W.L.L.`, reports disagree, credit limits fail, and you cannot answer “how much does this customer owe across all orders?” Master data means **one partner record**, referenced everywhere.

```text
MASTER DATA (reference)              TRANSACTIONS (events)
--------------------                 ---------------------
Partner: Acme Trading  <-----------  Quotation SO001
Product: Oak Desk      <-----------  Delivery WH/OUT/12
UoM: Unit              <-----------  Invoice INV/2026/88
Company: My Shop LLC
```

In Odoo you will meet models like `res.partner` (people and companies you deal with) and `product.product` (sellable/purchasable items). Those names can wait. The idea cannot: **identity lives in master data; activity lives in transactions.**

Good master data is boring on purpose: few fields that matter, clear ownership (who may edit a product’s cost?), and no duplicates. Bad master data looks like “we’ll clean it later” — later never comes, and every customization fights ghosts.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List six master-data entities for a bookstore (customer, book, …). |
| Medium | For “customer,” list fields that belong on the master vs fields that belong on an order. |
| Hard | Describe how a duplicate customer record would corrupt a monthly sales report. |

**WHAT THIS UNLOCKS NEXT:**

Master data alone is a directory. Businesses need a history of what *happened* — confirmed, shipped, paid. That history is made of transactions.

---

## 1.4 Transactions

A **transaction** (in the business sense) is a dated event that changes the company’s situation: a confirmed sales order, a stock move, a vendor bill, a payment. Transactions reference master data and carry quantities, amounts, and states.

```text
Time -->

[Create quote] --> [Confirm order] --> [Deliver] --> [Invoice] --> [Register payment]
   draft              sale              done         posted         reconciled
```

Two meanings of “transaction” will collide later when you write Odoo code:

1. **Business transaction** — the sale, the receipt, the invoice (what users care about).
2. **Database transaction** — a unit of work that commits or rolls back together (what PostgreSQL cares about).

For now, stay with meaning (1). ERP’s power is that confirming a sales order can **create related records** (stock moves, analytic lines) in one coherent story instead of three people typing the same numbers into three files.

**AUDIT TRAIL AS A FEATURE, NOT A SIDE EFFECT:**

Managers ask: who confirmed this? when did stock leave? which invoice matches which delivery? Spreadsheets answer with folklore. ERP answers with timestamps, users, and document links. That is why “just update the cell” is dangerous in operations software — you erase the story.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name four transaction types a café might record in one day. |
| Medium | Trace one coffee sale from order to payment; list which master records it touches. |
| Hard | Explain why deleting a posted invoice “to fix a typo” is worse than correcting it with a credit note. |

**WHAT THIS UNLOCKS NEXT:**

You now have processes, departments, master data, and transactions. Salespeople often hear “CRM” and think that is the whole system. The next lesson draws a clean line between CRM and ERP so you never confuse a pipeline tool with a full operating system for the company.

---

## 1.5 ERP vs CRM

**CRM** means Customer Relationship Management: tools focused on leads, opportunities, activities, and the sales pipeline — “who might buy, and where are we in the conversation?”

**ERP** means the broader operating system for the company: sales *and* purchase *and* inventory *and* accounting *and* HR, sharing master data and workflows.

```text
CRM focus (slice)                    ERP focus (whole)
-----------------                    -----------------
Leads / Opportunities                Partners + Products + Stock + Money + People
Pipeline stages                      Quote → Delivery → Invoice → Payment
"Will they buy?"                     "Can we fulfill, bill, and account for it?"
```

Odoo includes a CRM app **inside** an ERP platform. That is not a contradiction. CRM is one process family. ERP is the decision that CRM must share the same partners, products, and eventually invoices with the rest of the company.

| Question | CRM alone | ERP (with CRM) |
| -------- | --------- | -------------- |
| Track a lead | Strong | Strong |
| Reserve stock for a won deal | Weak / external | Native |
| Invoice from the same customer record | Often export | Same partner |
| Post to the general ledger | Rarely | Accounting app |

**WHEN A STARTUP OUTGROWS “CRM ONLY”:**

A team can live in a pure CRM for months. The day they ship physical goods, buy from vendors, or need proper books, CRM-only tools force copy-paste into inventory and accounting systems. That copy-paste is the pain ERP removes.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | In one sentence each, define CRM and ERP. |
| Medium | Give an example decision that needs CRM data *and* inventory data together. |
| Hard | Argue when a company should keep a separate best-of-breed CRM instead of Odoo CRM — and what integration tax they accept. |

**WHAT THIS UNLOCKS NEXT:**

Theory without a concrete company stays abstract. The next lesson forces you to model a small firm end-to-end so ERP vocabulary becomes a map you drew yourself.

---

## 1.6 PRACTICE — Model a Small Company

Pick one fictional company and keep it for the rest of Story I. Good choices: a bookstore, a furniture workshop, a catering kitchen, or a small IT reseller. You will reuse the same names in later phases.

**BUILD THIS ARTIFACT (ONE PAGE):**

1. **Company name and what it sells**
2. **Departments** (at least Sales, Warehouse/Operations, Accounting; add Purchasing or HR if relevant)
3. **Master data list** (partners, products, locations, …)
4. **One happy-path process** from customer request to cash
5. **Three failure modes** caused by duplicate or missing shared data

```text
Example skeleton — "Gulf Desk Co."

Departments: Sales | Workshop | Stores | Accounts
Master:      Customers, Vendors, Desk models, Wood types, Bin locations
Happy path:  Lead → Quotation → Sales Order → Manufacture/Pick → Delivery → Invoice → Payment
Failures:    two spellings of same customer; stock sold twice; invoice qty ≠ delivered qty
```

You are not configuring Odoo yet. You are proving you can **see the company as a system**. Odoo developers who skip this step write modules that fit the code and fight the business.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Complete the one-page model for your chosen company. |
| Medium | Add a purchase process (reorder wood / books) that shares product master data with sales. |
| Hard | Mark which steps must be atomic together (e.g. deliver + reduce stock) vs which can wait. |

**WHAT THIS UNLOCKS NEXT:**

You can describe a company as processes, master data, and transactions. The remaining question in Story I is: what is **Odoo** specifically — editions, apps, modules, users — and how does a real database embody the model you just drew?

---

> **Phase 1 complete?** You can explain ERP without buzzwords, separate master data from transactions, contrast ERP with CRM, and hold a one-page model of a small company. Move on when those four feel natural — not when you have memorized product names.

---

# PHASE 2 - Understanding Odoo

**Track:** Business & ERP Foundations

**WHAT YOU WILL BE ABLE TO DO:** Distinguish Community from Enterprise, explain apps vs modules/addons, describe users and multi-company, name the shared business records that glue apps together, and navigate a real Odoo database with intent.

**WHAT YOU SHOULD KNOW FIRST:** Phase 1 — processes, master data, transactions, ERP vs CRM, and your small-company model.

**LEARNING RESOURCES:**

- [Odoo Beginner's Guide (YouTube)](https://www.youtube.com/watch?v=QuC6rc2q2mg)
- [Odoo ERP overview (YouTube)](https://www.youtube.com/watch?v=s-4zNx7wCFk)
- [Odoo 18 — Architecture](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html)
- [Odoo 18 — Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [odoo/odoo on GitHub](https://github.com/odoo/odoo)
- [odoo/docker](https://github.com/odoo/docker)

## 2.1 Community vs Enterprise

Odoo ships in two well-known editions:

| | **Community** | **Enterprise** |
| --- | --- | --- |
| License | LGPL (open source core) | Proprietary extras on top of Community |
| Cost | Free to run the software | Subscription for Enterprise apps/features |
| Typical extras | Core apps, full custom module development | Studio, extra apps, hosting options, support packages |
| Developer reality | You can learn almost everything that matters for modules here | Some UI/apps differ; core ORM/module ideas are the same |

**WHAT “EDITION” MEANS FOR A LEARNER:**

You do **not** need Enterprise to become a strong Odoo developer. Models, views, security, wizards, and most workflows live in the open stack. Enterprise adds productized features and polish. When docs or screenshots differ, check the version (**18.0** in this roadmap) and the edition.

If you use [Odoo Online](https://www.odoo.com) trial databases, you may see Enterprise UI. If you run source from GitHub Community, you see Community. Both teach the same mental model: **one database, many apps, shared records**.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write one sentence: why Community is enough to learn module development. |
| Medium | List two features you have heard called “Enterprise-only” and note you will verify against current docs before assuming. |
| Hard | For your Phase 1 company, decide whether Community apps alone could cover the happy path — where would you feel pressure to buy or build? |

**WHAT THIS UNLOCKS NEXT:**

Edition tells you licensing. Day-to-day, users think in **Apps** — the tiles on the home screen. That is the next layer.

---

## 2.2 Odoo Apps

An **App** in Odoo is a user-facing package of business capability: CRM, Sales, Inventory, Accounting, Employees. Installing an app adds menus, models, views, and often demo data. From the user’s perspective, apps are how the ERP is assembled: turn on only what the company needs.

```text
Odoo home / app switcher

  [Contacts] [CRM] [Sales] [Purchase] [Inventory] [Accounting] [Employees] ...
       \________ shared partner & product truth underneath ________/
```

Apps are how **departments** from Phase 1 become clickable. Salespeople live in CRM/Sales; warehouse staff live in Inventory; accountants live in Accounting — yet they open the same customer.

**DEPENDENCY YOU WILL FEEL LATER:**

Installing Sales pulls in dependencies (often stock/product/partner pieces). You cannot treat apps as isolated USB sticks. Under the hood they are modules with `depends` in a manifest — Story III makes that file concrete.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Map each department from your Phase 1 model to an Odoo app name. |
| Medium | Predict which apps must be installed before “quote → delivery → invoice” works. |
| Hard | Explain why installing *every* app on a tiny company is usually a bad idea. |

**WHAT THIS UNLOCKS NEXT:**

Users say “app.” Developers say “module” or “addon.” Same family of packages — next lesson separates the vocabulary cleanly.

---

## 2.3 Modules / Addons

In Odoo development:

- A **module** (also called an **addon**) is a folder with a `__manifest__.py` that declares name, version, dependencies, and data files.
- Official apps are modules. Your custom feature will be a module. Third-party OCA code is modules.
- **`addons_path`** (Phase 5) tells the server which directories contain modules.

```text
addons/
  sale/                 <- official Sales app (module)
  stock/                <- Inventory
  my_company_flow/      <- YOUR module (Story III)
    __manifest__.py
    models/
    views/
    security/
```

**APP VS MODULE — PLAIN LANGUAGE:**

| Term | Audience | Meaning |
| ---- | -------- | ------- |
| App | End users | Installable business tile / feature set |
| Module / Addon | Developers | Technical package Odoo loads into the registry |

Most apps *are* modules (or a small set of modules). Custom work is almost always “write a module that depends on existing ones,” not “fork Odoo.”

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Open the [odoo/odoo](https://github.com/odoo/odoo) repo in a browser and find `addons/sale/__manifest__.py` (path may vary slightly by version layout). |
| Medium | Read the `depends` list of that manifest and name two modules Sales needs. |
| Hard | In one paragraph, explain why customization belongs in *your* module instead of editing `addons/sale` in place. |

**WHAT THIS UNLOCKS NEXT:**

Modules load into a database that has **users** and sometimes **multiple companies**. Access and company boundaries are business rules, not cosmetics.

---

## 2.4 Users & Companies

A **user** is a login that acts inside Odoo with a set of **groups** (permissions). The same human might be a salesperson (see CRM + Sales) but not an accountant (no journal access). Later stories teach ACL and record rules; here you only need: **users are not the same as partners**, and permissions matter from day one.

A **company** (`res.company`) is a legal/operating entity inside the database. Odoo supports **multi-company**: one database, several companies, with rules about which records are shared or company-specific.

```text
Database: quarry_training
  Company A: Gulf Desk Co.
  Company B: Gulf Desk Retail LLC
  User: sara@example.com  →  allowed companies A+B, default A
```

**PARTNER VS USER:**

| Concept | Model (preview) | Meaning |
| ------- | --------------- | ------- |
| Partner | `res.partner` | Customer, vendor, contact — business identity |
| User | `res.users` | Login that can open the UI / API — linked to a partner |

Your customer “Acme Trading” is a partner. Your employee Sara who logs in is a user (and usually also has a partner/employee record). Mixing these ideas causes messy data models later.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List three users your Phase 1 company would need and which apps each should open. |
| Medium | Decide whether your company needs multi-company on day one — justify yes or no. |
| Hard | Describe a risk of giving every user the admin group “just for convenience.” |

**WHAT THIS UNLOCKS NEXT:**

Users act through apps. Apps only cooperate because they share **business records**. That shared core is the next lesson — the heart of Odoo’s modular monolith.

---

## 2.5 Shared Business Records

Odoo is not forty separate products with forty databases. It is one PostgreSQL database and one registry of models. Apps cooperate because they **reuse** core records:

| Shared idea | Typical model | Used by |
| ----------- | ------------- | ------- |
| People & orgs | `res.partner` | CRM, Sales, Purchase, Accounting, HR… |
| Products | `product.template` / `product.product` | Sales, Purchase, Inventory, Accounting |
| Company | `res.company` | Almost everything |
| Users / groups | `res.users`, `res.groups` | Security everywhere |
| Currency | `res.currency` | Sales, Accounting |

```text
                res.partner
                 /    |    \
                /     |     \
           crm.lead  sale.order  account.move
                \     |     /
                 \    |    /
                same partner_id, one truth
```

**WHY DEVELOPERS CARE BEFORE THEY CODE:**

When you build a custom module, your first design question is rarely “which cool widget?” It is “which existing model already owns this fact?” Creating a parallel `my.customer` table that duplicates `res.partner` is a classic junior mistake — reports diverge and double-entry becomes impossible.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | From your Phase 1 model, mark each entity as “shared master” or “app-specific transaction.” |
| Medium | Explain why Sales and Accounting both need the same partner record for one invoice flow. |
| Hard | Propose a custom field that *should* extend `res.partner` vs a field that belongs only on `sale.order`. |

**WHAT THIS UNLOCKS NEXT:**

Vocabulary is useless until you click through a live system. The lab forces you to explore a real Odoo database with your company model as a scavenger hunt checklist.

---

## 2.6 LAB — Explore a Real Odoo Database

Use any of: a local install (if you already have one), [Odoo Online](https://www.odoo.com) trial, or a Docker-based Community database ([odoo/docker](https://github.com/odoo/docker)). Goal: **observe**, not customize.

**LAB CHECKLIST:**

1. Install or enable: Contacts, CRM, Sales, Inventory (and Accounting if available on your edition).
2. Create one customer partner matching your Phase 1 company story.
3. Create one product.
4. Create a quotation → confirm to sales order (if the UI allows in your setup).
5. Open the customer again from Contacts — confirm it is the same record Sales used.
6. Switch apps via the app switcher; notice menus change but the database does not.

```text
Explore path (minimum):

Apps → Contacts → create partner
Apps → Sales → New Quotation → pick same partner + product
Confirm → note document number / status
Apps → Contacts → open partner → related smart buttons (orders, etc.)
```

Write three sentences in your notes: (1) what felt like master data, (2) what felt like a transaction, (3) one place two apps clearly shared a record.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Complete the checklist and screenshot (or note) the sales order reference. |
| Medium | Find where the product’s stock or type settings live; relate them to Inventory. |
| Hard | Without looking it up first, predict the technical model names for partner and sales order — then verify in developer mode (Phase 5) or docs. |

**WHAT THIS UNLOCKS NEXT:**

You have seen Odoo as a product. Phase 3 walks the **core business applications** deliberately — Contacts through HR — so the quote → delivery → invoice path becomes a story you can narrate, not a blur of menus.

---

> **Phase 2 complete?** You can explain Community vs Enterprise, apps vs modules, users vs partners, multi-company at a high level, and shared records — and you have clicked through a real database. Continue when the scavenger hunt notes exist.

---

# PHASE 3 - Core Business Applications

**Track:** Business & ERP Foundations

**WHAT YOU WILL BE ABLE TO DO:** Describe what Contacts, CRM, Sales, Purchase, Inventory, Accounting, and Employees each own; trace a quote through delivery to invoice on shared partners/products; and spot where custom modules usually plug in later.

**WHAT YOU SHOULD KNOW FIRST:** Phase 2 — you have opened an Odoo database and understand apps as modules over shared records. Keep your Phase 1 company model nearby.

**LEARNING RESOURCES:**

- [Odoo Beginner's Guide (YouTube)](https://www.youtube.com/watch?v=QuC6rc2q2mg)
- [Odoo ERP overview (YouTube)](https://www.youtube.com/watch?v=s-4zNx7wCFk)
- [Odoo 18 developer docs](https://www.odoo.com/documentation/18.0/developer.html)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [odoo/odoo](https://github.com/odoo/odoo) — browse `addons/` for `sale`, `stock`, `account`, `hr`, `crm`

## 3.1 Contacts

**Contacts** is the address book of the ERP. Every customer, vendor, employee contact, and individual person tends to live as a **partner**. Companies and individuals can nest (a company partner with child contact partners).

**WHY CONTACTS COME FIRST:**

Without a stable partner, CRM leads, sales orders, purchase orders, and invoices have nothing trustworthy to point at. Contacts is not “the easy app.” It is the **identity hub**.

Typical partner facts: name, address, phone, email, tax ID, language, company vs person, and links to accounting receivable/payable settings later.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create two contacts: one company, one person under that company. |
| Medium | Decide which fields on your partner are master data vs which should wait for a sales order. |
| Hard | Explain how a vendor and a customer can be the same partner with different roles/flags. |

**WHAT THIS UNLOCKS NEXT:**

Contacts store who people are. CRM tracks whether they might buy — the pipeline before a firm order.

---

## 3.2 CRM

**CRM** manages leads and opportunities: incoming interest, stages (new → qualified → proposition → won/lost), activities (calls, meetings), and team assignment. Winning an opportunity often becomes a quotation in Sales.

```text
Lead / Opportunity stages (example)

  New --> Qualified --> Proposition --> Won --> (create quotation)
                                    \-> Lost
```

CRM answers “where is this deal in the conversation?” It should **not** become a second inventory system. Stock truth stays in Inventory; money truth stays in Accounting.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create one opportunity for your Phase 1 customer and move it across two stages. |
| Medium | Write the rule your company would use for Lead vs Opportunity. |
| Hard | List data CRM should *not* duplicate from Inventory or Accounting. |

**WHAT THIS UNLOCKS NEXT:**

When the deal is real enough to price and commit, you leave pure pipeline thinking and enter **Sales** documents.

---

## 3.3 Sales

**Sales** owns quotations and sales orders: lines with products, quantities, prices, taxes, and terms. Confirming a quotation makes a **sales order** — a commitment that can drive delivery and invoicing.

```text
draft quotation --> sent --> sales order (confirmed) --> to invoice / to deliver
```

Sales is where your Phase 1 happy path becomes concrete. The order lines reference **products**; the header references a **partner**. Those are the shared records from Phase 2.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create a quotation with one product line for your contact. |
| Medium | Confirm it and note which statuses / smart buttons appear. |
| Hard | Explain what should happen if the customer changes quantity after confirmation (business policy, not only UI). |

**WHAT THIS UNLOCKS NEXT:**

Sales promises goods. Someone must buy those goods or materials if you do not already hold them — that is **Purchase**.

---

## 3.4 Purchase

**Purchase** handles requests for quotation (RFQs) to vendors and **purchase orders** (POs). Receiving against a PO increases stock (with Inventory) and later creates vendor bills (with Accounting).

```text
Need stock --> RFQ to vendor --> PO confirmed --> Receive products --> Vendor bill
```

Sales and Purchase mirror each other on opposite sides of the partner graph: customers vs vendors, outbound vs inbound. Products are still the same master records when you sell finished goods you also buy.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name one product you would purchase for your company model. |
| Medium | Sketch RFQ → PO → receive for that product. |
| Hard | Describe a mismatch risk if Purchasing uses a different product name than Sales. |

**WHAT THIS UNLOCKS NEXT:**

Buying and selling only stay honest if **Inventory** tracks what physically moved.

---

## 3.5 Inventory

**Inventory** (Stock) tracks quantities by location, incoming and outgoing shipments (**pickings**), transfers, and optionally lots/serials. A delivery order linked to a sales order is the warehouse’s view of the same commitment Sales made.

```text
Sales order confirmed
        |
        v
Delivery (stock.picking OUT)  -->  validate  -->  stock decreases
        |
        v
Accounting can invoice based on delivered qty (policy-dependent)
```

**RESERVATION AND AVAILABILITY:**

ERP inventory is not a single cell saying “12 chairs.” It is quantities per location, possibly reserved for orders, with moves that have states. That complexity exists so two salespeople cannot sell the last chair twice without the system noticing.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Find where on-hand quantity appears for your product. |
| Medium | Open a delivery related to a sales order and name its status. |
| Hard | Explain why invoicing *ordered* qty vs *delivered* qty are different business policies. |

**WHAT THIS UNLOCKS NEXT:**

Goods moved. Money must be recognized. **Accounting** turns operational documents into financial ones.

---

## 3.6 Accounting

**Accounting** posts customer invoices, vendor bills, payments, journals, and the chart of accounts. In Odoo, customer invoices are typically `account.move` records in the right journal — you will see that technical name later; for now, treat invoices as **financial transactions** linked to partners and, ideally, to sales/purchase documents.

```text
Operational world              Financial world
-----------------              ----------------
sale.order / delivery   -->    customer invoice
purchase + receipt      -->    vendor bill
bank statement          -->    payments / reconciliation
```

Accounting is where “spreadsheet ERP” usually collapses: tax, receivables aging, and audit need structured journals, not a Sales folder of PDF invoices.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create or open a draft invoice related to your sales order (edition permitting). |
| Medium | Trace which partner and which order lines the invoice inherited. |
| Hard | Explain why validating (posting) an invoice should be harder to undo than editing a draft quotation. |

**WHAT THIS UNLOCKS NEXT:**

Money and goods need people. **Employees / HR** closes the core app tour with the human side of the company.

---

## 3.7 Employees / HR

**Employees** (HR) manages employee records, departments, jobs, and — depending on installed modules — time off, attendance, and contracts. Employees link to partners/users carefully: HR data is sensitive; not every salesperson should see salaries.

For your Phase 1 model, HR answers: who works here, in which department, and who approves what? Workflows in other apps often use employees as **responsible** users or approvers.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create one employee matching a user role from Phase 2. |
| Medium | Assign that employee to a department that maps to an app they use. |
| Hard | List three HR fields that should have stricter access than a product’s sale price. |

**WHAT THIS UNLOCKS NEXT:**

You have met the core apps one by one. The practice that follows stitches them into the single path every Odoo consultant narrates in interviews: quote → delivery → invoice.

---

## 3.8 PRACTICE — Trace Quote → Delivery → Invoice

Run this end-to-end in your database (or on paper if the edition blocks a step — still label each document).

```text
1. Contact exists          (Contacts)
2. Opportunity optional    (CRM)
3. Quotation → confirm     (Sales)
4. Delivery validate       (Inventory)
5. Invoice create/post     (Accounting)
6. (Optional) Payment      (Accounting)
```

For each step write: **document name/number**, **status**, **partner**, **product qty**. Then answer: where would a custom “customer PO number” field belong — partner, order, or invoice?

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Complete the happy path once and keep a written trace table. |
| Medium | Break the path on purpose (deliver partial qty) and note what invoice policy should do. |
| Hard | Draw the same path as boxes for models you predict (`res.partner`, `sale.order`, …) — refine later in Story II. |

**WHAT THIS UNLOCKS NEXT:**

Story I taught *what* the business needs and *which* Odoo apps cover it. You still cannot explain **how** a browser click becomes a PostgreSQL row. That mechanism gap opens Story II — architecture, local setup, and the source tree.

---

> **Phase 3 complete?** You can narrate Contacts → CRM → Sales → Purchase → Inventory → Accounting → HR at a business level and produce one quote → delivery → invoice trace. Story Project I locks the design before you touch server internals.

---

## STORY PROJECT — Design a Company's ERP Flow

**Track:** Business & ERP Foundations

**Goal:** Deliver a one-page (or short PDF/Markdown) **ERP flow design** for your Phase 1 company — no custom code yet.

**Include:**

1. Department → App map  
2. Master data list with owners  
3. Happy-path sequence diagram (quote → cash)  
4. Purchase path for at least one stocked product  
5. Three risks (duplicate partners, oversell, invoice mismatch) and the shared record that mitigates each  
6. A “custom later” parking lot: two features that would become *modules* in Story III+, not spreadsheet columns  

**Done when:** A stranger can understand how your company would run in Odoo without watching you click.

**WHAT THIS UNLOCKS NEXT:**

Story I made Odoo make sense as business software. Story II asks the developer question underneath every click: what runs between the browser, the Odoo server, PostgreSQL, and the filestore — and how do you run that stack yourself?

---

# PHASE 4 - Odoo Architecture

**Track:** Platform Internals

**WHAT YOU WILL BE ABLE TO DO:** Trace a browser action through the web client, Odoo server, PostgreSQL, and filestore; explain where addons and the registry sit; and sketch the three-tier picture without confusing “Odoo” with “the database alone.”

**WHAT YOU SHOULD KNOW FIRST:** Story I — business apps and shared records. You do not need to have compiled Odoo yet; Phase 5 installs it. Comfortable with “client / server / database” as everyday words.

**LEARNING RESOURCES:**

- [Odoo 18 — Architecture](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [Odoo developer landing](https://www.odoo.com/documentation/18.0/developer.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [odoo/docker](https://github.com/odoo/docker)
- [Odoo Beginner's Guide (YouTube)](https://www.youtube.com/watch?v=QuC6rc2q2mg)

## 4.1 Client

When you open Odoo in Chrome or Firefox, you are using the **web client**: HTML, CSS, and JavaScript that draw menus, forms, lists, and kanban boards. The browser does **not** contain your sales orders permanently. It asks the server for data and sends user actions back (save, confirm, validate).

```text
BROWSER (client)
  - renders views (forms, lists, kanban)
  - holds temporary UI state
  - talks HTTP/JSON to the Odoo server
  - never is the system of record
```

In modern Odoo the client includes OWL components for richer UI. You do not need OWL yet (a later story). You only need: **the client is a guest; the server owns truth.**

**WHEN THE UI LIES:**

If two users edit the same draft order, the client that last saved wins — unless business logic and concurrency rules say otherwise. Trusting only what one browser shows is how support tickets start. Always ask: did the server accept this?

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Open Odoo, press F12 → Network, click Save on a record, and note that a request leaves the browser. |
| Medium | Explain why clearing browser cache does not delete sales orders. |
| Hard | List three things that must live on the server (not only in JS) for audit reasons. |

**WHAT THIS UNLOCKS NEXT:**

The client sends requests somewhere. That somewhere is the **Odoo server** — Python processes that understand modules, security, and the ORM.

---

## 4.2 Odoo Server

The **Odoo server** is a Python application. It loads addons, builds the **registry** of models, checks access rules, runs business methods, and talks to PostgreSQL. When you click “Confirm” on a quotation, the client calls a server method; the server validates, writes rows, may create a delivery, and returns updated data to the client.

```text
HTTP request
    |
    v
Odoo server (Python)
    |-- authentication / session
    |-- ACL + record rules
    |-- ORM methods (create/write/action_confirm/...)
    |-- cursors / transactions
    v
PostgreSQL (+ filestore for binaries)
```

Think of the server as the **rules engine + API** for the company database. Custom modules extend this server. They do not replace the browser.

**MULTI-WORKER MENTAL MODEL (LIGHT):**

In production you may run multiple HTTP workers. For learning, one server process is enough. The idea stays: many browsers, one logical application talking to one database name you configured.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | In one sentence: what does the Odoo server do that the browser does not? |
| Medium | Map “Confirm quotation” to: client event → server method → DB writes → UI refresh. |
| Hard | Predict what happens if the server crashes after writing the order but before responding — what should a retry-safe design assume? (Qualitative answer OK.) |

**WHAT THIS UNLOCKS NEXT:**

The server still needs a place to store structured business data permanently. That place is **PostgreSQL**.

---

## 4.3 PostgreSQL

Odoo stores almost all business records in **PostgreSQL**. Models become tables (roughly); fields become columns; relational fields become foreign keys or intermediate tables. When you search customers in Contacts, the server runs SQL through the ORM — you rarely write raw SQL as a beginner, but you must know **where** the data lives.

```text
res.partner  ~  table res_partner
sale.order   ~  table sale_order
sale.order.line ~ table sale_order_line
```

**WHY POSTGRES, NOT “SQLITE FOR EVERYTHING”:**

ERP workloads need concurrent writers, solid transactions, and mature backups. PostgreSQL is the supported database for Odoo deployments. Learning Odoo includes eventually reading rows with `psql` during debugging — Phase 5 gets you connected; Phase later deepens tuning.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write: “Odoo business data lives primarily in ____.” |
| Medium | Explain why deleting a database in Postgres deletes the company’s records even if the Odoo code folder remains. |
| Hard | Distinguish database name (e.g. `odoo18`) from PostgreSQL *server* instance (host/port). |

**WHAT THIS UNLOCKS NEXT:**

Not everything fits neatly in a table cell — PDFs, images, attachments need files. That is the **filestore**.

---

## 4.4 Filestore

The **filestore** is a directory on disk where Odoo keeps binary attachments (uploaded PDFs, images, some assets). Metadata about the attachment lives in PostgreSQL; the bytes often live as files keyed by checksum/path.

```text
PostgreSQL                         Filestore directory
ir_attachment row  ------------->  /filestore/<db>/ab/abcd1234...
  name, res_model, res_id          actual PDF bytes
```

**BACKUP IMPLICATION YOU MUST NOT SKIP:**

A SQL-only dump without the filestore loses attachments. A filestore copy without the database loses meaning. Real backups capture **both**.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Attach a small image to a contact; note that something beyond “a text field” was stored. |
| Medium | Explain why copying only the `addons` folder is not a backup of customer data. |
| Hard | Sketch a backup checklist: Postgres dump + filestore path + which config points to them. |

**WHAT THIS UNLOCKS NEXT:**

Database and filestore hold runtime state. **Addons** hold the code and XML that define how that state is shaped.

---

## 4.5 Addons

**Addons** (modules) are the packages on disk: official apps under Odoo’s addons tree, plus your custom folders. At startup (and on module install/upgrade), the server reads manifests, imports Python, and loads XML/CSV data.

```text
addons_path directories
    |
    +-- sale/
    +-- stock/
    +-- account/
    +-- my_flow/          (your future module)
```

Without addons, Odoo is an empty framework shell. With addons, it becomes Sales, Inventory, Accounting — and your customizations.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name three addon folders you expect to exist in a Sales+Inventory database. |
| Medium | Explain the difference between “addon code on disk” and “module installed in this database.” |
| Hard | Why can two databases on one server have different installed module sets while sharing the same addons_path? |

**WHAT THIS UNLOCKS NEXT:**

Loaded addons populate the **registry** — the in-memory map of model names to Python classes the ORM uses.

---

## 4.6 Registry

The **registry** is Odoo’s living catalog of models for a database: `res.partner`, `sale.order`, your future `my.model`, each bound to a Python class with fields and methods. When modules install or upgrade, the registry is updated so the server knows the current shape of the business schema.

```text
Module Python classes
        |
        v
   Registry[db]
        |
        +-- "res.partner" -> ResPartner class
        +-- "sale.order"  -> SaleOrder class
        +-- "my.model"    -> MyModel class
        |
        v
   ORM uses registry to create env["sale.order"] recordsets
```

You will type `self.env["sale.order"]` constantly later. That lookup **is** the registry. No registry entry means no model, no matter what SQL tables leftover from a botched upgrade might still exist.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | In your own words: registry maps ____ to ____. |
| Medium | Explain why restarting/upgrading can be required after changing model Python code. |
| Hard | Predict a failure symptom if a module failed halfway through install (registry vs database mismatch). |

**WHAT THIS UNLOCKS NEXT:**

Architecture on paper is not the same as watching one click travel the tiers. The lab makes you trace browser → server → database deliberately.

---

## 4.7 LAB — Trace Browser → Server → Database

**LAB GOAL:** Prove the three tiers with evidence, not slogans.

1. Open browser DevTools → Network.  
2. Perform a visible write (create/save a contact).  
3. Identify the HTTP call to your Odoo host.  
4. On the server side (if local): watch the Odoo log line for that request (Phase 5 deepens logging).  
5. Optional if you have `psql`: `SELECT id, name FROM res_partner ORDER BY id DESC LIMIT 3;` and find your new row.  

```text
Evidence chain

[UI Save click]
    -> Network: /web/... or JSON-RPC call
    -> Server log: request / traceback if error
    -> Postgres: new/updated row in res_partner
```

Write a five-line lab note tying each tier to what you observed.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Capture one network request name/URL from a save. |
| Medium | Match that save to a SQL row (or explain what blocked you). |
| Hard | Trace a *Confirm* on a quotation across tiers — which extra tables might change? |

**WHAT THIS UNLOCKS NEXT:**

You can picture the running system. You still may not have a personal copy. Phase 5 builds the **development environment** so architecture becomes something you start and stop on your machine.

---

> **Phase 4 complete?** You can draw client → server → PostgreSQL → filestore, place addons and registry correctly, and show evidence from a click trace. Continue when that diagram is yours, not memorized from a slide.

---

# PHASE 5 - Development Environment

**Track:** Platform Internals

**WHAT YOU WILL BE ABLE TO DO:** Prepare a Python environment, PostgreSQL, and Odoo source; write a working configuration with `addons_path`; enable developer mode; read logs; and run Odoo locally for module work.

**WHAT YOU SHOULD KNOW FIRST:** Phase 4 architecture. Basic comfort with a terminal on your OS. Official reference: [Install from source](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html).

**LEARNING RESOURCES:**

- [Odoo 18 — Install from source](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html)
- [Odoo 18 — Architecture](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [odoo/docker](https://github.com/odoo/docker) — alternative path
- [odoo/documentation](https://github.com/odoo/documentation)

## 5.1 Python Environment

Odoo 18 expects a supported **Python 3** version (check the source install doc for the exact range — do not guess from older blog posts). Use a **virtual environment** so project dependencies do not fight your system Python.

```text
python -m venv venv
# Windows PowerShell:
.\venv\Scripts\Activate.ps1
# Linux/macOS:
source venv/bin/activate
pip install -r requirements.txt   # from the Odoo source tree
```

**WHY VENV IS NON-NEGOTIABLE:**

Global `pip install` of Odoo’s dependency pin set is how machines rot. One venv per Odoo version keeps 16/17/18 from colliding when you maintain client projects later.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create and activate a venv; run `python -V` and record the version. |
| Medium | Install Odoo’s `requirements.txt` into that venv (resolve OS-specific notes from official docs). |
| Hard | Explain what goes wrong if two projects share one global Django/Odoo dependency set. |

**WHAT THIS UNLOCKS NEXT:**

Python runs the server. PostgreSQL must accept connections before any database can be created.

---

## 5.2 PostgreSQL Setup

Install PostgreSQL locally (or use Docker). Create a role Odoo can use, with permission to create databases (typical for development).

```text
Example (illustrative — follow your OS docs):

  createuser --createdb odoo
  # set a password you will put in odoo.conf
```

Remember host (`localhost`), port (`5432` default), user, and password. These four values belong in the Odoo config file next.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Connect with `psql` (or a GUI) and run `SELECT version();`. |
| Medium | Create an empty database manually once — then prefer letting Odoo create DBs from the UI/CLI. |
| Hard | Document how you would reset a broken training database without deleting Postgres itself. |

**WHAT THIS UNLOCKS NEXT:**

Database engine ready. Next you need the **Odoo source** that knows how to speak to it.

---

## 5.3 Odoo Source

Clone the official repository at the branch matching your version (18.0 for this roadmap):

```text
git clone https://github.com/odoo/odoo.git --branch 18.0 --depth 1
```

You will run `odoo-bin` (or the equivalent entry point in that tree) with a config file. Community source is enough for learning modules.

**DOCKER ALTERNATIVE:**

If source install fights your OS, [odoo/docker](https://github.com/odoo/docker) can give you a running instance. Still learn where addons live and how config maps — do not treat Docker as “no config literacy.”

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Confirm `odoo-bin` exists in your clone. |
| Medium | Skim top-level folders; note `odoo/` vs `addons/` (Phase 6 deepens). |
| Hard | Pin the commit/branch you are on in your notes for reproducibility. |

**WHAT THIS UNLOCKS NEXT:**

Source without configuration still does not know your Postgres password or custom addons directory. That is the **configuration file**.

---

## 5.4 Configuration File

Create an `odoo.conf` (path yours to choose) with at least:

```ini
[options]
admin_passwd = choose_a_master_password
db_host = localhost
db_port = 5432
db_user = odoo
db_password = your_password
addons_path = /path/to/odoo/addons,/path/to/your/custom_addons
http_port = 8069
logfile = /path/to/odoo.log
```

`admin_passwd` protects database manager operations (create/drop DB) — not the same as an internal Odoo user password. Keep it secret on shared machines.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write a config skeleton with your real paths. |
| Medium | Start Odoo pointing at that config; open `http://localhost:8069`. |
| Hard | Create a training database from the DB manager and log in as admin. |

**WHAT THIS UNLOCKS NEXT:**

The most important config line for developers is **`addons_path`** — where your future modules must live.

---

## 5.5 addons_path

`addons_path` is a comma-separated list of directories Odoo scans for modules. Order can matter when the same module name appears twice (avoid duplicates). Typical layout:

```text
addons_path =
  <odoo_source>/addons,
  <odoo_source>/odoo/addons,   # depending on version layout
  <workspace>/custom_addons
```

Your Story III module will sit under `custom_addons/my_hello/` — **never** by editing core `sale/` in place.

```text
WRONG:  modify odoo/addons/sale/models/sale_order.py for a client
RIGHT:  custom_addons/client_sale_ext/ that _inherit sale.order
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Print your effective `addons_path` from config and verify folders exist. |
| Medium | Create an empty `custom_addons` directory and add it to `addons_path`. |
| Hard | Explain how a missing path entry produces “module not found” on install. |

**WHAT THIS UNLOCKS NEXT:**

Server runs; modules path is set. To see technical names and view structures in the UI, turn on **Developer Mode**.

---

## 5.6 Developer Mode

In Odoo: Settings → activate **Developer mode** (or use `?debug=1` patterns documented for your version). Developer mode reveals:

- Technical menus (Views, Models, Actions)
- “Edit view” / debugging affordances
- Field technical names on forms (hover / debug widgets)

```text
User view:  "Customer Name"
Dev mode:   partner_id / res.partner / view xml id
```

This mode is how Story I’s business words connect to Story III’s XML ids. Leave it on while learning; teach end users to leave it off.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Enable developer mode; open a contact; find a technical field name. |
| Medium | Open Settings → Technical → Models; search `res.partner`. |
| Hard | Find the external ID of a menu item you use daily. |

**WHAT THIS UNLOCKS NEXT:**

When something fails, the UI is not enough. **Logging** is how the server narrates errors and request traces.

---

## 5.7 Logging

Configure `logfile` and optionally log levels. In the terminal, Odoo prints tracebacks when a module fails to import or a method raises. Read from the **bottom** of a Python traceback up to the first of *your* files.

```text
Useful habits:

  - Reproduce once with logs visible
  - Copy the EXCEPTION line + your module frames
  - Fix, upgrade/restart, reproduce again
```

Log spam is normal. Learn to grep for your module name (`my_hello`) so core noise does not hide your bug.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Trigger a harmless error (optional) or simply locate the logfile path. |
| Medium | Grep the log for `ERROR` after a failed operation. |
| Hard | Explain the difference between a client-side JS error (browser console) and a server traceback (logfile). |

**WHAT THIS UNLOCKS NEXT:**

Pieces are ready. The lab demands a full local run — the rite of passage before reading the source tree in Phase 6.

---

## 5.8 LAB — Run Odoo Locally

**LAB CHECKLIST:**

1. venv active, requirements installed  
2. PostgreSQL accepting connections  
3. `odoo.conf` with correct `addons_path`  
4. Server starts without immediate crash  
5. Browser opens the database selector / login  
6. Developer mode on  
7. Create a note titled “my local URL + DB name”  

```text
odoo-bin -c odoo.conf
# or: python odoo-bin -c odoo.conf
```

If start fails, fix environment issues **now**. Story III assumes you can install a module into a DB you control.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Complete the checklist; keep the server running for five minutes of clicking. |
| Medium | Stop and restart the server; confirm the database still contains your data. |
| Hard | Add a second database for experiments so you never test upgrades only on “precious” data. |

**WHAT THIS UNLOCKS NEXT:**

You can run Odoo. Phase 6 teaches you to **navigate the source** so “server” stops being a black box and becomes folders you can open with intent.

---

> **Phase 5 complete?** You have a venv, Postgres, source, config, addons_path, developer mode, and logs — and Odoo answers on localhost. Do not proceed to module authoring until this lab is honestly green.

---

# PHASE 6 - Odoo Source Code Structure

**Track:** Platform Internals

**WHAT YOU WILL BE ABLE TO DO:** Orient inside the Odoo repository: core `odoo/` package vs `addons/`, where models, HTTP, and services live, how the registry is populated from code, and find files on purpose instead of by desperate search.

**WHAT YOU SHOULD KNOW FIRST:** Phase 5 — you can start Odoo locally and open developer mode. Git clone of 18.0 available on disk.

**LEARNING RESOURCES:**

- [Odoo 18 — Architecture](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [Backend reference / tutorials](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [odoo/documentation](https://github.com/odoo/documentation)

## 6.1 odoo/ (Core Package)

The **`odoo/`** Python package is the framework: ORM engine, CLI, HTTP stack, modules loading, OS abstractions, testing harness pieces, and more. When people say “the ORM,” much of that machinery lives here — not inside `addons/sale`.

```text
odoo/
  __main__ / cli entry pieces
  orm / models machinery (layout evolves by version — navigate, do not memorize paths blindly)
  http.py and controllers support
  modules/ loading & registry building
  service/  server & workers
  ...
```

**RULE OF THUMB:**

Fixing a business need by patching core `odoo/` is almost always wrong for application work. Core is for framework contributors. You extend via **addons**.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Open the `odoo/` directory; list five top-level subfolders in your notes. |
| Medium | Find a file whose name suggests HTTP or module loading; skim only headers/docstrings. |
| Hard | Write one paragraph: “I will change business behavior in ____, not in odoo/core, because ____.” |

**WHAT THIS UNLOCKS NEXT:**

Framework alone sells nothing. **`addons/`** is where Sales, Stock, and your future features live.

---

## 6.2 addons/

**`addons/`** holds installable modules. Each subdirectory with a manifest is a candidate module. Official business apps live here in Community source.

```text
addons/
  base/          # fundamental models (partners, users, ...) — critical
  web/           # web client pieces
  sale/
  stock/
  account/
  crm/
  hr/
  ...
```

When your `addons_path` includes this folder, Odoo can install `sale`. Your `custom_addons` mirrors this structure for private modules.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Open `addons/sale/__manifest__.py` and read `name`, `depends`, `data`. |
| Medium | Count how many XML files the sale manifest loads (approx). |
| Hard | Follow one `depends` entry into that module’s manifest — sketch a tiny dependency chain. |

**WHAT THIS UNLOCKS NEXT:**

Inside any business addon, **models/** is where Python classes declare fields and methods — the heart of backend work.

---

## 6.3 Models

Module `models/` packages define ORM models: `_name`, fields, constraints, business methods. Example shape (Odoo 18 style):

```python
from odoo import models, fields

class SaleOrder(models.Model):
    _inherit = "sale.order"

    client_po = fields.Char(string="Customer PO")
```

Official modules use `_name` for new models and `_inherit` to extend. You will write both starting in Story III–IV. For now, practice **finding** `class SaleOrder` in `addons/sale` and noticing inheritance patterns.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Locate a model file under `addons/sale/models/` and note a `_name` or `_inherit`. |
| Medium | Find a `fields.Char` or `fields.Many2one` example; write what it represents in business words. |
| Hard | Explain why `_inherit = "sale.order"` is safer for customization than copying the whole sale module. |

**WHAT THIS UNLOCKS NEXT:**

Models are not only called from the UI. **HTTP** controllers expose routes for web pages, JSON, and integrations.

---

## 6.4 HTTP

Odoo’s HTTP layer registers **controllers** — Python classes with `@http.route` endpoints. The web client uses this heavily; later you will add webhook routes carefully (security story).

```python
# Conceptual shape — read real examples in addons, do not invent production routes yet
from odoo import http

class MyController(http.Controller):
    @http.route("/my/hello", type="http", auth="public")
    def hello(self, **kwargs):
        return "Hello"
```

For Story II, your job is orientation: know that **not everything is an ORM call from `/web`**. Some URLs hit controllers directly.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Search the codebase for `@http.route` and open one simple example. |
| Medium | Note the `auth=` value on that route (`user`, `public`, `none`) and what it implies. |
| Hard | Explain why a public route that writes partner data is dangerous. |

**WHAT THIS UNLOCKS NEXT:**

Long-running server concerns — workers, cron-like duties, startup — sit in **services**. A light pass is enough here.

---

## 6.5 Services

**Services** cover how the Odoo process runs: starting HTTP, managing workers, scheduled actions triggering server-side jobs, and related process orchestration. Exact file names shift across versions; conceptually remember:

```text
CLI start -> service boots -> registry loaded per DB -> HTTP listens -> crons fire methods
```

When your module’s scheduled action “does nothing,” the bug might be cron service/domain — not only your method body. You will debug that later; today, know the layer exists.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | In docs or code, find where “worker” or “cron” is discussed at a high level. |
| Medium | Enable a scheduled action in a DB (Settings) and see it listed — do not write one yet. |
| Hard | Contrast “HTTP request lifecycle” with “cron job lifecycle” in three bullets. |

**WHAT THIS UNLOCKS NEXT:**

Models, HTTP, and services all hang off the **registry** loaded from modules — revisit it now as a source-code phenomenon, not only an architecture bubble.

---

## 6.6 Registry (in the source tree)

Phase 4 introduced the registry as a map. In source terms, module loading imports model classes and registers them by `_name`. Installing a module may create/alter tables to match fields. Upgrading reloads Python and applies updated XML.

```text
import module models
      |
      v
register classes on Registry
      |
      v
env["model.name"] -> recordset API
```

When you change Python field definitions, databases need **`-u your_module`** (Phase 8) so registry and schema converge again.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | In developer mode, open Models and pick `sale.order`; note it “comes from” modules. |
| Medium | Explain: code on disk changed, but DB not upgraded — who is stale, registry or files? |
| Hard | Predict symptoms of two modules defining the same `_name` accidentally. |

**WHAT THIS UNLOCKS NEXT:**

Orientation drills beat wandering. The practice lesson is a scavenger hunt through the repository with a checklist.

---

## 6.7 PRACTICE — Navigate the Odoo Repository

Complete this scavenger hunt in your 18.0 tree:

| # | Find | Write down |
| - | ---- | ---------- |
| 1 | `odoo-bin` | full path |
| 2 | `addons/base/__manifest__.py` | version field |
| 3 | a `sale.order` model definition | file path |
| 4 | one `@http.route` | path string + auth |
| 5 | `web` module manifest | one dependency |
| 6 | your `custom_addons` folder | empty or ready |

Timebox: 45–60 minutes. The goal is **muscle memory for where things live**, not reading every file.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Finish rows 1–3 of the hunt. |
| Medium | Finish the full table. |
| Hard | Add row 7: locate where QWeb or OWL assets are declared for `web` — note path only. |

**WHAT THIS UNLOCKS NEXT:**

Story II ends when your machine is a real **workspace**, not a pile of installs. The story project binds config, paths, and habits before Story III asks you to author a module.

---

> **Phase 6 complete?** You can point to core vs addons, find a model and a route, and explain registry updates after code changes. Capture the scavenger sheet before the story project.

---

## STORY PROJECT — Local Odoo Development Workspace

**Track:** Platform Internals

**Goal:** Freeze a repeatable local setup you could recreate on a second machine from notes alone.

**Deliverables:**

1. `README-dev.md` in your workspace with: Python version, Postgres version, Odoo branch, venv path, config path, start command  
2. Working `odoo.conf` (secrets redacted in the shared copy)  
3. `custom_addons/` on `addons_path`  
4. Screenshot or note: developer mode + Models search for `res.partner`  
5. Architecture diagram (client/server/Postgres/filestore/addons/registry) in ASCII  

**Done when:** You can stop Odoo, reboot the OS, start again from your README, and log into the same DB.

**WHAT THIS UNLOCKS NEXT:**

Story II made Odoo runnable and navigable. Story III asks the developer’s first creative act: **scaffold a module**, install it, and survive an upgrade cycle — still without a full business app, but with real addon anatomy.

---

# PHASE 7 - Module Anatomy

**Track:** First Module

**WHAT YOU WILL BE ABLE TO DO:** Explain every standard folder in an Odoo addon, author a minimal `__manifest__.py` and `__init__.py`, place models/views/security/data/static correctly, and ship a “Hello Odoo” module that installs cleanly.

**WHAT YOU SHOULD KNOW FIRST:** Story II workspace — local Odoo runs; `custom_addons` is on `addons_path`; developer mode works. Comfortable creating folders and editing text files.

**LEARNING RESOURCES:**

- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [Odoo 18 developer docs](https://www.odoo.com/documentation/18.0/developer.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [odoo/odoo](https://github.com/odoo/odoo) — copy structure from a tiny official module
- [Module walkthrough ideas (YouTube — ORM/dev)](https://www.youtube.com/watch?v=5YIwP9-55Qk)

## 7.1 __manifest__.py

Every module needs a **`__manifest__.py`** (a Python dict) describing the package to Odoo:

```python
{
    "name": "Hello Odoo",
    "version": "18.0.1.0.0",
    "summary": "Minimal training module",
    "category": "Training",
    "author": "Your Name",
    "license": "LGPL-3",
    "depends": ["base"],
    "data": [
        "security/ir.model.access.csv",
        "views/hello_views.xml",
    ],
    "installable": True,
    "application": True,
}
```

**KEYS YOU MUST RESPECT EARLY:**

| Key | Why it matters |
| --- | -------------- |
| `version` | Upgrade discipline; Odoo 18 modules commonly start with `18.0.` |
| `depends` | Other modules must load first (`base` is the usual root) |
| `data` | XML/CSV load **in list order** |
| `installable` | `False` hides broken WIP modules |
| `application` | `True` shows an app-style entry when appropriate |

Wrong paths in `data` cause install failures. Missing `depends` causes “model not found” when your XML references another app’s views.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create `custom_addons/hello_odoo/__manifest__.py` with `depends: ["base"]`. |
| Medium | Add empty `data` list first; install later after files exist. |
| Hard | Compare your manifest to `addons/note/__manifest__.py` (or similar small module); list three keys you omitted on purpose. |

**WHAT THIS UNLOCKS NEXT:**

The manifest advertises the module. Python still needs **`__init__.py`** so imports load your model package.

---

## 7.2 __init__.py

Odoo imports your module as a Python package. Top-level `__init__.py` typically imports subpackages:

```python
# hello_odoo/__init__.py
from . import models
```

And `models/__init__.py` imports each model file:

```python
# hello_odoo/models/__init__.py
from . import hello_model
```

**IF YOU FORGET AN IMPORT:**

The file can exist on disk and still never register a model. Symptom: “model hello.model does not exist” while your `.py` looks fine. Always check the import chain before doubting the ORM.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create both `__init__.py` files with the imports above (file may be empty until 7.3). |
| Medium | Deliberately omit a model import once in a throwaway DB and recognize the symptom — then fix it. |
| Hard | Explain why `__init__.py` matters more in Odoo modules than in some modern namespace-package layouts. |

**WHAT THIS UNLOCKS NEXT:**

Imports ready. **`models/`** is where your first business object is born.

---

## 7.3 models/

Create a simple model so the module does something real:

```python
# hello_odoo/models/hello_model.py
from odoo import models, fields

class HelloMessage(models.Model):
    _name = "hello.message"
    _description = "Hello Message"

    name = fields.Char(required=True)
    note = fields.Text()
```

`_name` is the registry key and roughly the table name (`hello_message`). `_description` shows up in technical UI. Fields declare columns the ORM manages.

```text
models/hello_model.py
        |
        v
  registry["hello.message"]
        |
        v
  table hello_message (after install)
```

You are not building Sales. You are proving **your code can enter the registry**.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add `HelloMessage` as above; ensure imports wire it. |
| Medium | Add a second `Char` field; plan to upgrade in Phase 8 to see schema change. |
| Hard | Predict the PostgreSQL table name Odoo will use; verify after install with developer mode or SQL. |

**WHAT THIS UNLOCKS NEXT:**

A model without screens is invisible to normal users. **`views/`** give them list/form UI.

---

## 7.4 views/

Views are XML records describing UI. Minimal list + form + action + menu:

```xml
<?xml version="1.0" encoding="utf-8"?>
<odoo>
  <record id="view_hello_message_list" model="ir.ui.view">
    <field name="name">hello.message.list</field>
    <field name="model">hello.message</field>
    <field name="arch" type="xml">
      <list>
        <field name="name"/>
        <field name="note"/>
      </list>
    </field>
  </record>

  <record id="view_hello_message_form" model="ir.ui.view">
    <field name="name">hello.message.form</field>
    <field name="model">hello.message</field>
    <field name="arch" type="xml">
      <form>
        <sheet>
          <group>
            <field name="name"/>
            <field name="note"/>
          </group>
        </sheet>
      </form>
    </field>
  </record>

  <record id="action_hello_message" model="ir.actions.act_window">
    <field name="name">Hello Messages</field>
    <field name="res_model">hello.message</field>
    <field name="view_mode">list,form</field>
  </record>

  <menuitem id="menu_hello_root"
            name="Hello Odoo"
            sequence="60"/>
  <menuitem id="menu_hello_message"
            name="Messages"
            parent="menu_hello_root"
            action="action_hello_message"
            sequence="10"/>
</odoo>
```

List the file in manifest `data`. In Odoo 18, list views use `<list>` (older docs say `<tree>` — follow 18.x examples when they differ).

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add `views/hello_views.xml` and reference it from the manifest. |
| Medium | Change the menu label; upgrade later to see XML reload. |
| Hard | In developer mode after install, open the view record and find your XML id. |

**WHAT THIS UNLOCKS NEXT:**

UI without **security** installs as admin theater — normal users hit AccessError. Next folder fixes that.

---

## 7.5 security/

Minimum viable access: `security/ir.model.access.csv` granting your group (or `base.group_user`) model rights:

```csv
id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
access_hello_message_user,hello.message.user,model_hello_message,base.group_user,1,1,1,1
```

The `model_hello_message` xml id is auto-convention from model `hello.message` (dots → underscores, `model_` prefix). Load this CSV **before** views that assume access, or at least include it in `data` before users need it — common pattern: security first in the manifest list.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add the CSV and put it first in `data`. |
| Medium | Log in as a non-admin demo user after install and open the menu. |
| Hard | Remove write permission, upgrade, and observe who can still edit (admin vs user). |

**WHAT THIS UNLOCKS NEXT:**

Security lets users in. **`data/`** (optional now, important soon) loads seed records and configuration XML.

---

## 7.6 data/

Use `data/` for master-ish records, sequences, default configs — XML or CSV that should exist after install. Example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<odoo>
  <record id="hello_message_welcome" model="hello.message">
    <field name="name">Welcome</field>
    <field name="note">Installed by data XML</field>
  </record>
</odoo>
```

**NOUPDATE VS NOCREATE:**

Data files can create records on install. Upgrades may update them depending on XML ids and flags (`noupdate`). Phase 8 returns to load order and upgrade behavior — for Hello Odoo, one demo record is enough optional credit.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Skip data/ for the absolute minimum — or add one welcome record. |
| Medium | Give your data record a stable `id=` and find it under Technical → Records after install. |
| Hard | Predict what happens on upgrade if you change the welcome note in XML (depends on noupdate). |

**WHAT THIS UNLOCKS NEXT:**

Backend works. **`static/`** holds assets (JS/CSS/images) when the client needs them — know the folder even if Hello Odoo stays backend-only.

---

## 7.7 static/

Convention:

```text
static/
  description/
    icon.png          # app icon
  src/                # sometimes used for JS/CSS sources
  src/xml/            # OWL templates in richer modules
```

For Hello Odoo, an icon under `static/description/icon.png` makes your app recognizable. Heavy OWL work is a later story — do not block Hello Odoo on frontend tooling.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add any small PNG as `static/description/icon.png` or note “icon deferred.” |
| Medium | Browse an official module’s `static/description` and copy the idea, not the trademarked art. |
| Hard | Find how assets bundles are declared in a `web` module — read only. |

**WHAT THIS UNLOCKS NEXT:**

Anatomy pieces exist in theory. The mini project forces a module that **installs and shows a menu**.

---

## 7.8 MINI PROJECT — Hello Odoo

**Build `hello_odoo` with:**

1. Manifest + init imports  
2. Model `hello.message` with `name`, `note`  
3. List + form + action + menu  
4. Access CSV for internal users  
5. Install on your training database  

```text
custom_addons/hello_odoo/
  __init__.py
  __manifest__.py
  models/
    __init__.py
    hello_model.py
  views/
    hello_views.xml
  security/
    ir.model.access.csv
  static/description/icon.png   (optional)
```

Start Odoo → Apps → Update Apps List → find Hello Odoo → Install. Create one message record from the menu.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Install and create one record. |
| Medium | Break the manifest path on purpose, read the log, fix it. |
| Hard | Add a field, note that install alone may not refresh schema — Phase 8’s upgrade is next. |

**WHAT THIS UNLOCKS NEXT:**

A module that only installs once is incomplete. Real work is **dependencies, upgrade, uninstall, and data load order** — Phase 8’s lifecycle.

---

> **Phase 7 complete?** Your `hello_odoo` module installs, shows a menu, and stores a record. Continue when Apps shows it as installed — not when the folders merely exist.

---

# PHASE 8 - Module Lifecycle

**Track:** First Module

**WHAT YOU WILL BE ABLE TO DO:** Manage `depends`, install/upgrade/uninstall with intent, predict data load order effects, and use `-i` / `-u` (or Apps UI) safely on a training database.

**WHAT YOU SHOULD KNOW FIRST:** Phase 7 — `hello_odoo` installs. You have a disposable training DB (never learn upgrades only on production).

**LEARNING RESOURCES:**

- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [Install from source](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [odoo/documentation](https://github.com/odoo/documentation)
- [Odoo developer landing](https://www.odoo.com/documentation/18.0/developer.html)

## 8.1 Dependencies

Manifest `depends` lists modules that must be installed first. If your views inherit `sale.order` form XML, you depend on `sale`. If you only use `res.partner`, `base` may suffice.

```python
"depends": ["base", "sale"],  # example for a sales extension
```

**DEPENDENCY GRAPH THINKING:**

```text
base
  |
  +-- web
  +-- sale --> product, ...
  +-- hello_odoo (depends base only)
```

Circular depends are forbidden. Over-depending slows installs and couples you to apps the customer did not buy. Under-depending crashes install when XML ids are missing.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Read `depends` on `hello_odoo` and on `sale`; contrast complexity. |
| Medium | Temporarily set `depends: ["sale"]` on hello (even unused) — observe install requiring Sales. Revert. |
| Hard | Design depends for a future module that adds a field on `sale.order` and a menu under Sales. |

**WHAT THIS UNLOCKS NEXT:**

Depends constrain **installation**. The install operation itself is the next lifecycle verb.

---

## 8.2 Installation

**Install** loads the module into a database for the first time: import Python, create tables for new `_name` models, load security/data/views in order, register menus.

Ways:

- UI: Apps → Install  
- CLI: `odoo-bin -c odoo.conf -d TRAIN_DB -i hello_odoo --stop-after-init`

`--stop-after-init` is ideal for scripts: apply install/upgrade, then exit.

**INSTALL IS NOT COPY FOLDER:**

Dropping a folder on disk only makes the module *discoverable*. The database rows in `ir_module_module` track installed state. Two databases can disagree while sharing addons_path (Phase 4 insight, now operational).

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Reinstall path: uninstall (next lessons) or use a fresh DB and `-i hello_odoo`. |
| Medium | Use CLI `-i` with `--stop-after-init` once; confirm exit code 0. |
| Hard | Inspect `ir.module.module` for `hello_odoo` state in developer mode. |

**WHAT THIS UNLOCKS NEXT:**

After you change code, install will not re-apply everything. You need **upgrade**.

---

## 8.3 Upgrade

**Upgrade** (`-u hello_odoo`) reloads the module: update Python model fields (schema sync), reload XML/CSV per rules, refresh registry for that module’s changes.

```text
Change field in models/*.py  -->  upgrade module  -->  column appears
Change view XML              -->  upgrade module  -->  UI updates
Change only Python method body --> often restart enough; upgrade still safest habit while learning
```

Bump manifest `version` as you iterate (`18.0.1.0.1`, …) so you remember what is deployed.

**WHEN LEARNERS GET STUCK:**

They edit XML, refresh the browser, see nothing change, and blame caches. Usually the module was never upgraded. Make `-u` muscle memory.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add a `Char` field; upgrade; see it on the form (add to view XML too). |
| Medium | Change a menu name in XML; upgrade; confirm UI. |
| Hard | Document a change that needed upgrade vs one that appeared after server restart only. |

**WHAT THIS UNLOCKS NEXT:**

Sometimes you must remove a module cleanly. **Uninstall** has sharper edges than beginners expect.

---

## 8.4 Uninstall

**Uninstall** removes the module’s data/models according to Odoo’s uninstall hooks — including tables for models that `_name` introduced (with constraints about dependencies). Modules that other installed modules `depends` on cannot be removed first.

```text
Safe training habit:

  - Uninstall experiments on TRAIN_DB
  - Never casually uninstall account/stock on a client DB
  - Expect custom data loss when uninstalling YOUR module
```

Uninstall is not “delete the folder.” Remove from Apps first (or CLI), then optionally delete code from disk.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | On a copy DB, uninstall `hello_odoo` and note menus disappearing. |
| Medium | Reinstall afterward; see which records survived (usually none for pure custom models). |
| Hard | Explain why uninstalling `sale` is blocked if another module depends on it. |

**WHAT THIS UNLOCKS NEXT:**

Install/upgrade both read the manifest `data` list. **Load order** decides whether security exists before views and whether record A can reference record B.

---

## 8.5 Data Load Order

Manifest `data` files execute **top to bottom**. Later files may reference XML ids defined earlier. Security CSV usually precedes views. Views precede data that needs UI? Actually data records often need models+access already present — models come from Python import at install, access from CSV, then views, then demo/data.

```python
"data": [
    "security/ir.model.access.csv",
    "views/hello_views.xml",
    "data/hello_data.xml",
],
```

**FAILURE PATTERN:**

`data/hello_data.xml` creates a record that references a menu XML id defined later → install crash. Reorder the list. Read the log’s “External ID not found” as a load-order hint.

Demo-only files often go under `demo:` key so production installs stay clean — nice-to-know for later packaging.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Verify your manifest order matches security → views → data. |
| Medium | Swap two lines to break references; fix from the logfile message. |
| Hard | Split views into two XML files and order them so action exists before menuitem that needs it (menuitem can reference action in same file — still practice splitting). |

**WHAT THIS UNLOCKS NEXT:**

Lifecycle theory sticks only when you **install and upgrade on purpose** in a lab with observable field/UI changes.

---

## 8.6 LAB — Install & Upgrade Your Module

**LAB SCRIPT:**

1. Ensure `hello_odoo` is installed.  
2. Add field `mood = fields.Selection([("ok", "OK"), ("great", "Great")])`.  
3. Add the field to the form view.  
4. Bump version in manifest.  
5. Run upgrade via UI or `odoo-bin -d TRAIN_DB -u hello_odoo --stop-after-init`.  
6. Open the form; set mood on a record.  
7. Check log for errors during upgrade.  

```text
Edit code -> upgrade -> verify UI/DB -> commit notes (what changed)
```

Optional stretch: add a `data/` welcome record; upgrade; observe whether values update.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Complete steps 1–6. |
| Medium | Introduce a deliberate XML typo; upgrade; fix from traceback. |
| Hard | Use a second training DB to practice `-i` vs `-u` until the difference is boring. |

**WHAT THIS UNLOCKS NEXT:**

You can baby-sit one tiny module through its life. The story project asks for a **complete first addon** — still small, but packaged as something you would show a mentor.

---

> **Phase 8 complete?** You can explain depends, install, upgrade, uninstall, and load order — and you have upgraded `hello_odoo` with a visible schema/UI change. Story III closes with a polished first addon, then Story IV will deepen models and fields.

---

## STORY PROJECT — First Complete Addon

**Track:** First Module

**Goal:** Turn Hello Odoo into a mentor-ready **first complete addon** (still training-scoped, not a fake ERP).

**Requirements:**

1. Module technical name stable (`hello_odoo` or `quarry_hello`)  
2. Manifest with version `18.0.*`, license, summary, depends  
3. At least one model with ≥3 fields  
4. List + form + action + menu  
5. `ir.model.access.csv` for internal users  
6. README.md: how to put it on `addons_path`, install, upgrade  
7. Proof: screenshot or notes of install + one upgrade cycle  

**Stretch (optional):** one `data/` seed record; app icon; a second model with a `Many2one` to the first.

**Done when:** Another developer can install from your README alone on a clean training DB.

**WHAT THIS UNLOCKS NEXT:**

Stories I–III took you from “what is a business?” to “I shipped an addon.” The next story must answer how **fields, relations, and constraints** express real business rules inside models — because a hello table is not yet an ERP object graph.

---

# PHASE 9 - Models

**Track:** Modeling Data

**WHAT YOU WILL BE ABLE TO DO:** Define a persistent Odoo model with `models.Model`, set `_name`, `_description`, and `_rec_name`, register it through the module import chain, and ship a first library book model that creates a real PostgreSQL table.

**WHAT YOU SHOULD KNOW FIRST:** Phase 8 — module skeleton (`__manifest__.py`, `models/`, import chain). Stories I–III — ERP records, local Odoo, and installing a custom addon.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Models](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#models)
- [Server Framework 101 — Models](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/04_models_and_basic_fields.html)
- [Backend tutorial overview](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [odoo/tutorials — estate sample](https://github.com/odoo/tutorials)
- [Manifest & first module (video)](https://www.youtube.com/watch?v=5YIwP9-55Qk)
- [odoo/odoo — Model base class](https://github.com/odoo/odoo)

## 9.1 models.Model, _name, _description, _rec_name

Stories I–III got you a running Odoo, a business vocabulary, and a module folder that installs without crashing. That skeleton still does not own any business facts. Until you declare a **model**, Odoo has nowhere to store a book, a loan, or a customer order of your own design.

In Odoo, a model is a Python class that describes one kind of business record. Instantiating that class is not your job — the registry builds a singleton per model. Your job is to tell Odoo the technical name, the human label, and (optionally) which field should stand for the record when it appears as a title.

**THE CLASS THAT BECOMES A TABLE:**

```python
# my_library/models/library_book.py
from odoo import models, fields


class LibraryBook(models.Model):
    _name = "library.book"
    _description = "Library Book"
    _rec_name = "name"

    name = fields.Char(string="Title", required=True)
    isbn = fields.Char(string="ISBN")
```

```text
Python class LibraryBook
        |
        v
Registry entry "library.book"
        |
        v
PostgreSQL table library_book
  id | name | isbn | create_uid | create_date | write_uid | write_date | ...
```

`models.Model` means **persistent**: rows survive restarts and live in PostgreSQL. Later you will meet `models.TransientModel` (wizards) and `models.AbstractModel` (mixins). For Story IV, almost everything you build is `models.Model`.

**_name** is the technical identity used everywhere: XML `model="library.book"`, `env["library.book"]`, security CSV rows, related fields. Convention: lowercase dotted path (`library.book`, `sale.order`). Underscores become table separators (`library_book`).

**_description** is the human label for settings, technical screens, and access lists. Without it, Odoo falls back to the technical name — fine for a prototype, noisy in a real database.

**_rec_name** chooses which field is the record's display title. Default is `name` if that field exists. A leave request might use `_rec_name = "employee_id"` so lists show the person, not an opaque number. If no suitable Char field exists, you will later override `name_get` / `display_name` — but start with a real Char field and `_rec_name`.

**REGISTRATION THROUGH THE IMPORT CHAIN:**

```text
my_library/__init__.py          -> from . import models
my_library/models/__init__.py   -> from . import library_book
my_library/models/library_book.py
```

Miss any import and the class never reaches the registry. The module installs, menus may appear later, but `library.book` simply does not exist. That failure mode is silent until the first XML or Python reference blows up.

**COMMON FIRST-MODEL MISTAKES:**

| Mistake | What you see |
| ------- | ------------ |
| Forgot `models/__init__.py` import | `KeyError: 'library.book'` or model missing in Settings → Technical |
| `_name` typo vs XML `model=` | View fails to load; model not found |
| Reused a core `_name` (`res.partner`) | You are extending/replacing a platform model — usually wrong for a first custom app |
| No `_description` | Ugly labels in ACL screens |

Upgrade with `-u my_library` after changing `_name` carefully: renaming a model does not magically rename the SQL table and all foreign keys. Treat `_name` as permanent once demo data exists.

**MODELS.MODEL VERSUS THE OTHER BASES (PREVIEW):**

| Base | Persists? | Typical use |
| ---- | --------- | ----------- |
| `models.Model` | Yes, PostgreSQL table | Books, orders, partners |
| `models.TransientModel` | Short-lived wizard rows | "Print labels" assistants (Story X) |
| `models.AbstractModel` | No table of its own | Mixins like `mail.thread` |

Your first business entities are almost always `models.Model`. If you inherit a mixin later, you still keep `_name` on the concrete model and list `_inherit` for the mixin — Phase 9 only needs the concrete case.

**HOW ODOO FINDS YOUR CLASS AT INSTALL:**

```text
1. Module listed in addons path; state -> installed / to upgrade
2. Python imports my_library -> models -> library_book
3. Metaclass registers LibraryBook under _name "library.book"
4. Registry builds / updates PostgreSQL columns for declared fields
5. XML data files may now reference model="library.book"
```

If step 2 fails, steps 4–5 never see your model. That is why the import chain is part of modeling, not "just packaging."

## 9.2 MINI PROJECT — Library Model

Build the smallest durable library core inside `my_library` (or extend the module from Story III).

**DELIVERABLE:**

1. Model `library.book` with `_description = "Library Book"` and `_rec_name = "name"`.
2. Fields for this mini-project: `name` (Char, required), `isbn` (Char), `active` (Boolean, default True). More field types arrive in Phase 10 — keep this thin.
3. Import chain correct; module upgrades cleanly.
4. From the Odoo shell or a temporary server action, create two books and confirm rows in Settings → Technical → Database Structure → Models, or via `env["library.book"].search([])`.

```python
# After -u my_library, in odoo shell:
Book = env["library.book"]
Book.create({"name": "Clean Code", "isbn": "978-0132350884"})
Book.create({"name": "Domain-Driven Design", "isbn": "978-0321125217"})
print(Book.search([]).mapped("name"))
```

You still have no form view and no menu — that is intentional. Persistence comes before chrome. If you can create and find records through the ORM, the model layer is real.

**VERIFY IN THE DATABASE (OPTIONAL BUT POWERFUL):**

```text
psql -> \dt library*
       \d library_book

Expect columns: id, name, isbn, active, create_uid, create_date, write_uid, write_date
```

Seeing the table makes the abstraction concrete: the Python class is a contract; PostgreSQL is the store.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write `library.author` with `_name`, `_description`, `_rec_name = "name"`, and a required Char `name` |
| Easy | Break the import chain on purpose, upgrade, and write down the exact error — then fix it |
| Medium | Explain why `_name = "LibraryBook"` (CamelCase) is wrong for Odoo |
| Medium | Create three books via `create` / `search`; show `_rec_name` driving how they print in a many2one later (preview with `display_name`) |
| Hard | Sketch which models a lending library needs (book, copy, member, loan) without writing fields yet — name each `_name` |

**WHAT THIS UNLOCKS NEXT:**

A model without typed fields is only a named box. Business data needs columns — text, numbers, dates, money, choices — so Phase 10 fills the model with the field API.


---

# PHASE 10 - Fields

**Track:** Modeling Data

**WHAT YOU WILL BE ABLE TO DO:** Choose and declare the right basic field types for business data — Char, Text, Integer, Float, Boolean, Date, Datetime, Selection, Monetary — with `string`, `required`, `default`, and `help`, and model realistic library / sales-style records.

**WHAT YOU SHOULD KNOW FIRST:** Phase 9 — a registered `models.Model` with `_name` and at least one Char field.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Fields](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#fields)
- [Basic fields tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/04_models_and_basic_fields.html)
- [Backend reference](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [First module fields walkthrough (video)](https://www.youtube.com/watch?v=5YIwP9-55Qk)
- [odoo/odoo field definitions](https://github.com/odoo/odoo)

## 10.1 Scalar Fields That Map to Columns

Phase 9 gave you `library.book` as a table. Each `fields.*` declaration becomes a column (or a related mechanism) with a Python type, a UI widget, and conversion rules on read/write.

**FIELD TYPE MAP (START HERE):**

| Field | Stores | Typical business use |
| ----- | ------ | -------------------- |
| `Char` | Short string | Title, ISBN, reference |
| `Text` | Long string | Synopsis, notes |
| `Html` | Rich text | Website description (careful with sanitization) |
| `Integer` | Whole number | Page count, quantity |
| `Float` | Decimal number | Rating, weight (prefer Monetary for money) |
| `Boolean` | True/False | Active, available, published |
| `Date` | Calendar day | Publication date, leave start |
| `Datetime` | Instant with time | Checkout timestamp |
| `Selection` | Closed list of codes | State, book format |
| `Monetary` | Amount + currency | Price, fine |

```python
from odoo import models, fields


class LibraryBook(models.Model):
    _name = "library.book"
    _description = "Library Book"

    name = fields.Char(string="Title", required=True, index=True)
    isbn = fields.Char(string="ISBN", size=17)
    synopsis = fields.Text(string="Synopsis")
    page_count = fields.Integer(string="Pages")
    rating = fields.Float(string="Rating", digits=(2, 1))
    is_available = fields.Boolean(string="Available", default=True)
    date_published = fields.Date(string="Published On")
    last_borrowed = fields.Datetime(string="Last Borrowed")
    format = fields.Selection(
        selection=[
            ("paperback", "Paperback"),
            ("hardcover", "Hardcover"),
            ("ebook", "E-Book"),
        ],
        string="Format",
        default="paperback",
        required=True,
    )
    currency_id = fields.Many2one(
        "res.currency",
        string="Currency",
        default=lambda self: self.env.company.currency_id,
    )
    list_price = fields.Monetary(string="List Price", currency_field="currency_id")
```

**COMMON KEYWORD ARGUMENTS:**

- `string` — label on forms and lists
- `required=True` — ORM and UI refuse empty values
- `default=...` — static value or callable `lambda self: ...`
- `help` — tooltip for users
- `index=True` — PostgreSQL index for frequent search fields
- `copy=False` — do not duplicate on record duplicate (useful for unique refs)
- `readonly=True` — UI cannot edit (server can still write unless you also protect in methods)

**SELECTION STORES CODES, NOT LABELS:**

```text
UI shows:  Hardcover
DB stores: hardcover

Always filter and write the code:
  books = env["library.book"].search([("format", "=", "hardcover")])
```

Changing a selection label is safe. Changing or removing a **code** that already sits in the database breaks historical rows — plan migrations.

**DATE VERSUS DATETIME:**

`Date` is a calendar day without timezone drama — good for "published on" or "leave from". `Datetime` is a moment; Odoo stores UTC and converts for the user's timezone in the UI. Mixing them ("compare a Date to a Datetime") causes subtle off-by-one-day bugs.

**MONETARY NEEDS A CURRENCY:**

`Monetary` alone is incomplete. Pair it with `currency_id` (Many2one to `res.currency`) and `currency_field="currency_id"`. For multi-company work you will usually default currency from `self.env.company.currency_id`. Using bare `Float` for money loses currency and invites rounding bugs in reports.

## 10.2 PRACTICE — Model Business Records

Extend `library.book` (and optionally add `library.member`) until the fields below exist and accept demo creates from the shell.

**SCENARIO — SMALL PUBLIC LIBRARY:**

| Model | Fields to add |
| ----- | ------------- |
| `library.book` | title fields above + `list_price` Monetary + `format` Selection |
| `library.member` | `name` Char, `email` Char, `date_joined` Date, `is_active` Boolean |
| Preview only | A future `library.loan` will need Datetime checkout — name the fields on paper |

```python
env["library.book"].create({
    "name": "The Pragmatic Programmer",
    "isbn": "978-0135957059",
    "page_count": 352,
    "format": "paperback",
    "list_price": 49.99,
    "date_published": "2019-09-13",
})
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add `synopsis` Text and `is_available` Boolean with a sensible default |
| Easy | Explain when you would pick Date vs Datetime for a leave request's start |
| Medium | Model a sales order header's scalar fields only (name/ref, date_order, state Selection, amount_total Monetary) — no lines yet |
| Medium | Break Monetary by omitting `currency_id`; fix it and document the error |
| Hard | Design field list for `hr.leave`-style request: employee name (Char for now), dates, days Float, state Selection — justify each type |

**WHAT THIS UNLOCKS NEXT:**

Scalar columns describe one record in isolation. Real businesses connect books to authors, orders to customers, loans to members. Phase 11 adds Many2one, One2many, Many2many, and related fields.


---

# PHASE 11 - Relationships

**Track:** Modeling Data

**WHAT YOU WILL BE ABLE TO DO:** Model Many2one, One2many, and Many2many links correctly, expose related fields for denormalized display, and draw a coherent business data graph for a library or sales domain.

**WHAT YOU SHOULD KNOW FIRST:** Phase 10 — scalar fields on registered models.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Relational fields](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#relational-fields)
- [Relational fields tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/06_basicviews.html)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [ORM relationships video](https://www.youtube.com/watch?v=ASPjB-WowBU)
- [odoo/odoo](https://github.com/odoo/odoo)

## 11.1 Many2one, One2many, Many2many

Business software is a graph of records. A loan points to one member and one book copy. An order has many lines. A book has many authors and an author has many books. Odoo gives you three relational field types for that graph.

**MANY2ONE — "THIS RECORD POINTS TO ONE OTHER":**

```python
class LibraryLoan(models.Model):
    _name = "library.loan"
    _description = "Library Loan"

    member_id = fields.Many2one("library.member", string="Member", required=True, ondelete="restrict")
    book_id = fields.Many2one("library.book", string="Book", required=True, ondelete="restrict")
    date_borrowed = fields.Datetime(default=fields.Datetime.now)
```

SQL reality: a column `member_id` stores the other row's integer `id`. `ondelete` matters:

| ondelete | When the target is deleted |
| -------- | -------------------------- |
| `cascade` | Delete this row too |
| `restrict` | Block deletion if references exist |
| `set null` | Clear the FK (field must not be required) |

Prefer `restrict` for business history (do not erase loans when someone deletes a member by accident). Use `cascade` only when the child has no meaning alone (order lines when the order dies).

**ONE2MANY — "THE INVERSE LIST":**

One2many is not stored as its own column. It is the reverse search of a Many2one on the other model.

```python
class LibraryMember(models.Model):
    _name = "library.member"
    _description = "Library Member"

    name = fields.Char(required=True)
    loan_ids = fields.One2many("library.loan", "member_id", string="Loans")
```

```text
library.member                 library.loan
+----------------+             +------------------+
| id = 7         | <---------- | member_id = 7    |
| loan_ids ----+ |             | book_id = 3      |
+--------------|-+             +------------------+
               |               +------------------+
               +-------------> | member_id = 7    |
                               | book_id = 9      |
                               +------------------+
```

You almost always declare the Many2one first (the real FK), then the One2many inverse for UI and convenience.

**MANY2MANY — "SET MEMBERSHIP BOTH WAYS":**

```python
class LibraryBook(models.Model):
    _name = "library.book"
    ...
    author_ids = fields.Many2many(
        "library.author",
        "library_book_author_rel",  # relation table name
        "book_id",
        "author_id",
        string="Authors",
    )


class LibraryAuthor(models.Model):
    _name = "library.author"
    ...
    book_ids = fields.Many2many(
        "library.book",
        "library_book_author_rel",
        "author_id",
        "book_id",
        string="Books",
    )
```

Odoo creates (or uses) a relation table with two FK columns. Name the relation table explicitly on both sides so both fields share one table — otherwise you can accidentally get two relation tables and a broken graph.

**COMANDS VS ORM WRITES (PREVIEW):**

Writing One2many / Many2many from Python uses command tuples `(0,0,vals)`, `(1,id,vals)`, `(2,id)`, `(3,id)`, `(4,id)`, `(5,)`, `(6,0,[ids])`. Phase 14 practices them in CRUD. For modeling, know that `loan_ids` and `author_ids` are editable collections, not plain lists of integers.

## 11.2 Related Fields & DESIGN PROJECT — Business Data Graph

**RELATED — READ A VALUE THROUGH A MANY2ONE PATH:**

```python
member_email = fields.Char(related="member_id.email", string="Member Email", store=False)
```

Related fields avoid forcing users to open the member just to see an email on the loan form. `store=True` denormalizes into a real column (faster search/group by; must invalidate when the source changes — Odoo handles depends). Start with `store=False` unless you search/group on it.

Related is not a substitute for a real FK. If you need to *set* the member's email from the loan, you want an inverse or an explicit write on `member_id` — not a related Char.

**DESIGN PROJECT — DRAW THE GRAPH BEFORE MORE CODE:**

```text
library.author ---M2M--- library.book
                              ^
                              | M2O
                        library.loan
                              |
                              v M2O
                        library.member
                              |
                              v M2O (optional)
                         res.partner   (reuse Odoo contacts when ready)
```

**RULES OF THUMB:**

1. If the child cannot exist without the parent → Many2one on child + One2many on parent.
2. If both sides are independent peers → Many2many.
3. If you are tempted to copy `member_name` as Char on the loan → use related or display the Many2one; do not duplicate master data.
4. Prefer linking to `res.partner` for people/companies once you leave the learning sandbox — Story III already showed shared contacts.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add `member_id` Many2one on `library.loan` and `loan_ids` One2many on `library.member` |
| Easy | Explain why One2many has no SQL column of its own |
| Medium | Implement book↔author Many2many with an explicit relation table name on both fields |
| Medium | Add `member_email = fields.Char(related="member_id.email")` and show it stays in sync when the member email changes |
| Hard | DESIGN PROJECT: full ASCII or paper ERD for library lending *or* sales order + order lines + products; mark each link M2O/O2M/M2M and choose `ondelete` |

**WHAT THIS UNLOCKS NEXT:**

Relationships and scalars still require humans to keep totals and derived values correct. Phase 12 teaches computed fields so the ORM maintains business calculations from their dependencies.


---

# PHASE 12 - Computed & Dynamic Fields

**Track:** Modeling Data

**WHAT YOU WILL BE ABLE TO DO:** Implement `compute` methods with `@api.depends`, choose `store`, add `inverse` and `search` when needed, and ship automatic business calculations (loan duration, order totals) without hand-maintained duplicate numbers.

**WHAT YOU SHOULD KNOW FIRST:** Phase 11 — relational fields; Phase 10 — Monetary / Float / Integer.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Computed fields](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#computed-fields)
- [Compute / depends / store](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#decorators)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [ORM deep dive (video)](https://www.youtube.com/watch?v=ASPjB-WowBU)
- [odoo/odoo](https://github.com/odoo/odoo)

## 12.1 compute, @api.depends, store, inverse, search

A stored Integer `day_count` that staff update by hand will drift. A computed field recalculates from sources you declare — that is the difference between a spreadsheet cell with a formula and a cell someone typed.

**MINIMAL PATTERN:**

```python
from odoo import api, fields, models


class LibraryLoan(models.Model):
    _name = "library.loan"
    _description = "Library Loan"

    date_borrowed = fields.Datetime(required=True)
    date_returned = fields.Datetime()
    duration_days = fields.Integer(
        string="Days Out",
        compute="_compute_duration_days",
        store=True,
    )

    @api.depends("date_borrowed", "date_returned")
    def _compute_duration_days(self):
        for loan in self:
            if not loan.date_borrowed:
                loan.duration_days = 0
                continue
            end = loan.date_returned or fields.Datetime.now()
            delta = end - loan.date_borrowed
            loan.duration_days = max(delta.days, 0)
```

**@api.depends IS THE CONTRACT:**

List every field path the compute reads. Miss a dependency and the value goes stale after edits — one of the most common silent Odoo bugs.

```text
User changes date_returned
        |
        v
ORM sees depends("date_borrowed", "date_returned")
        |
        v
Calls _compute_duration_days on affected recordset
        |
        v
If store=True -> write column duration_days
```

Dependencies can walk relations: `@api.depends("line_ids.price_subtotal", "line_ids.tax_id")`. Prefer the narrowest correct set — over-broad depends recompute too often; under-broad depends lie.

**STORE TRUE VS FALSE:**

| store | Behavior | Use when |
| ----- | -------- | -------- |
| `False` (default) | Computed on read; not a DB column | Cheap calcs; rarely searched |
| `True` | Column maintained; searchable/groupable | Totals, statuses used in domains |

Stored computes still need correct `@api.depends`. They are not "set once."

**INVERSE — ALLOW WRITING A COMPUTED FIELD:**

```python
price_incl = fields.Float(
    compute="_compute_price_incl",
    inverse="_inverse_price_incl",
    store=True,
)

def _inverse_price_incl(self):
    for rec in self:
        # push user edit back into base fields
        rec.price = rec.price_incl / (1 + rec.tax_rate)
```

Without `inverse`, a computed field is read-only in the ORM sense for user writes. Add inverse only when the business truly allows editing the derived value.

**SEARCH — MAKE NON-STORED FIELDS DOMAIN-CAPABLE:**

Non-stored computed fields cannot be searched unless you provide `search=`:

```python
is_overdue = fields.Boolean(compute="_compute_is_overdue", search="_search_is_overdue")

def _search_is_overdue(self, operator, value):
    # Translate domain on is_overdue into domains on real columns
    ...
```

If you need heavy searching, `store=True` is usually simpler than a clever search method.

**COMPUTE MUST ASSIGN EVERY RECORD:**

```python
# BAD: skips records -> CacheMiss / inconsistent UI
for loan in self:
    if loan.date_borrowed:
        loan.duration_days = ...

# GOOD: every record in self gets an assignment
for loan in self:
    loan.duration_days = ...  # including 0 / False
```

## 12.2 LAB — Automatic Business Calculations & STORY PROJECT

**LAB:** On `library.loan`, implement `duration_days` (stored) and `is_overdue` (compute from due date vs today). On a mini `sale.order`-style header with `line_ids`, implement `amount_total = sum(line.price_subtotal)`.

```python
class LibrarySaleOrder(models.Model):
    _name = "library.sale.order"
    _description = "Library Sale Order"

    line_ids = fields.One2many("library.sale.order.line", "order_id")
    amount_total = fields.Monetary(
        compute="_compute_amount_total",
        store=True,
        currency_field="currency_id",
    )

    @api.depends("line_ids.price_subtotal")
    def _compute_amount_total(self):
        for order in self:
            order.amount_total = sum(order.line_ids.mapped("price_subtotal"))
```

**STORY PROJECT — Business Data Management Module**

Ship a coherent `my_library` (name yours) that includes:

1. Models: author, book, member, loan (and optional sale order + lines).
2. Scalar fields, M2O/O2M/M2M as designed in Phase 11.
3. At least two stored computes with correct `@api.depends`.
4. Demo data XML or shell script creating a small graph of records.
5. README note: what is still missing (views, security, workflows) — honesty is part of the deliverable.

Story IV ends when the **data shape** is trustworthy. Screens and ACL come later; do not fake them here.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add a non-stored `display_label` Char compute that joins book name + ISBN |
| Medium | Implement stored order total from lines; change a line and prove the header updates after refresh |
| Medium | Intentionally omit a depends path; demonstrate the stale value; fix it |
| Hard | LAB: overdue flag + duration + order total in one module; write three shell assertions |
| Hard | STORY PROJECT: full Business Data Management Module as specified above |

**WHAT THIS UNLOCKS NEXT:**

You can declare rich business data — but working with thousands of records safely means understanding `env`, recordsets, context, and the ORM vocabulary for create/search/write. Story V begins there: mastering the Odoo ORM as an API, not just as model definitions.


---

# PHASE 13 - Environment & Recordsets

**Track:** ORM Mastery

**WHAT YOU WILL BE ABLE TO DO:** Navigate `env` and `self`, reason about recordsets (empty, singleton, multi), read and extend `context`, and correctly use the current user and company when writing business code.

**WHAT YOU SHOULD KNOW FIRST:** Story IV — models, fields, relations, computes. Module installs and upgrades.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Environment](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#environment)
- [Recordsets](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#recordsets)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [ORM video](https://www.youtube.com/watch?v=ASPjB-WowBU)
- [odoo/odoo](https://github.com/odoo/odoo)
- [odoo/tutorials](https://github.com/odoo/tutorials)

## 13.1 env, self, and Recordsets

Story IV taught you how to *declare* data. Story V teaches you how to *operate* on it. Every piece of server code in Odoo runs inside an **Environment**: a cursor, a registry, a user, a context, and caches.

```text
env
 ├── cr          database cursor (transaction)
 ├── uid         current user id
 ├── context     dict of flags and defaults
 ├── registry    all models
 └── cache       field values already fetched

env["library.book"]  ->  empty recordset of that model (the "model API")
book = env["library.book"].browse(3)  ->  recordset with id 3
books = env["library.book"].search([]) ->  recordset of 0..N records
```

Inside a model method, **`self` is a recordset** of that model — possibly empty, one record, or many. Odoo methods are written to work on batches:

```python
def action_mark_available(self):
    for book in self:
        book.is_available = True
    # or better, one write:
    # self.write({"is_available": True})
```

**RECORDSET MENTAL MODEL:**

| Expression | Meaning |
| ---------- | ------- |
| `self` | Current recordset (caller decides how many) |
| `self.ensure_one()` | Assert exactly one record; else raise |
| `bool(self)` | False if empty |
| `len(self)` | Count in memory (not always a SQL COUNT) |
| `self.ids` | List of integer ids |
| `self.env` | Environment for this recordset |

```python
books = env["library.book"].search([("is_available", "=", True)])
# books is a recordset — iterating yields singletons
for book in books:
    print(book.name)  # book is a recordset of length 1
```

Accessing a Many2one returns a recordset (possibly empty). Accessing a scalar on a multi-record recordset is forbidden unless all share the same value — another reason to loop or use `mapped`.

## 13.2 Context, Current User, Current Company

**CONTEXT** is a dict that travels with the environment. It carries defaults, UI flags, and business switches.

```python
# Read
lang = self.env.context.get("lang")
# Extend without mutating shared state wrongly
self.with_context(mail_notrack=True).write({"name": "New Title"})
active_books = self.with_context(active_test=False).search([("name", "ilike", "draft")])
```

`active_test` (default True) hides `active=False` records from search. Archiving is not deletion — context decides whether archived rows appear.

**CURRENT USER:**

```python
user = self.env.user          # res.users recordset
partner = self.env.user.partner_id
if not self.env.user.has_group("base.group_system"):
    raise UserError("Only administrators can do this.")
```

`self.env.uid` is the raw id. Prefer `self.env.user` for readability.

**CURRENT COMPANY (MULTI-COMPANY):**

```python
company = self.env.company              # active company
companies = self.env.companies          # allowed companies in this env
```

Company-dependent fields and `record rules` key off this. When creating records in cron or shell, set company explicitly if the default would be wrong:

```python
env["library.book"].with_company(company).create({...})
```

**WITH_USER / SUDO (PREVIEW OF POWER AND DANGER):**

```python
self.sudo()  # bypass record rules / ACL — use rarely, never casually in HTTP
self.with_user(other_user)  # run as another user
```

Story VIII will deepen security. For now: every `sudo()` is a conscious trust decision. Prefer fixing ACL/record rules over sprinkling `sudo()`.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | In a model method, log `self.env.user.name`, `self.env.company.name`, and `len(self)` |
| Easy | Show `search` with and without `active_test=False` on archived books |
| Medium | Write a method that works on a multi-record `self` using one `write`, not a Python loop of creates |
| Medium | Explain what recordset you get from an empty Many2one access (`loan.member_id`) |
| Hard | Trace a button click: which uid, company, and context keys are present — document five context keys you find |

**WHAT THIS UNLOCKS NEXT:**

Environment and recordsets are the stage. Phase 14 gives you the verbs — create, browse, search, read, write, unlink — to change business data safely.


---

# PHASE 14 - CRUD

**Track:** ORM Mastery

**WHAT YOU WILL BE ABLE TO DO:** Use `create`, `browse`, `search`, `read`, `write`, and `unlink` correctly on recordsets, including One2many/Many2many commands, and complete coding drills that mirror real library and sales operations.

**WHAT YOU SHOULD KNOW FIRST:** Phase 13 — env, recordsets, context.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — CRUD](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#model-reference)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [ORM video](https://www.youtube.com/watch?v=ASPjB-WowBU)
- [odoo/odoo](https://github.com/odoo/odoo)

## 14.1 create, browse, search, read, write, unlink

**CREATE — INSERT ROWS:**

```python
book = env["library.book"].create({
    "name": "Refactoring",
    "isbn": "978-0134757599",
    "format": "paperback",
})
# Multi-create (batch) — preferred when inserting many:
env["library.book"].create([
    {"name": "Book A"},
    {"name": "Book B"},
])
```

Defaults, computes, and constraints run. Override `create` later (Phase 18) for business side effects.

**BROWSE — RECORDSET FROM IDS (NO SQL BY ITSELF):**

```python
books = env["library.book"].browse([1, 2, 3])
# No search query yet — access fields to fetch
print(books.mapped("name"))
```

Browse on missing ids yields a recordset that may fail when you access fields — validate ids if they come from users.

**SEARCH — IDS FROM A DOMAIN:**

```python
books = env["library.book"].search([
    ("is_available", "=", True),
    ("format", "=", "ebook"),
], limit=50, order="name asc")
```

Phase 15 deepens domains. For now: search returns a recordset; it does not return dicts.

**READ — DICTS FOR EXTERNAL SHAPES:**

```python
data = books.read(["name", "isbn", "list_price"])
# [{'id': 1, 'name': '...', ...}, ...]
```

Prefer field access / `mapped` inside server code. Use `read` when exporting or answering RPC-like needs.

**WRITE — UPDATE:**

```python
books.write({"is_available": False})
# One SQL UPDATE for the batch when values are uniform
```

```python
loan.write({
    "book_id": book.id,
    "line_ids": [
        (0, 0, {"product_id": p.id, "qty": 2}),  # create line
        (1, line.id, {"qty": 5}),                # update line
        (2, line.id),                            # delete line
        (6, 0, [id1, id2]),                      # replace M2M ids
    ],
})
```

**UNLINK — DELETE:**

```python
loans.unlink()
```

Constraints and `ondelete` on other models fire. Prefer archive (`active=False`) for master data users might reference historically.

## 14.2 CODING PRACTICE — CRUD Operations

Run these against your library module in `odoo-bin shell` (or a TransactionCase test):

```python
Member = env["library.member"]
Book = env["library.book"]
Loan = env["library.loan"]

member = Member.create({"name": "Ada Lovelace", "email": "ada@example.com"})
book = Book.search([("name", "ilike", "Refactoring")], limit=1)
if not book:
    book = Book.create({"name": "Refactoring"})

loan = Loan.create({
    "member_id": member.id,
    "book_id": book.id,
})
loan.write({"date_returned": fields.Datetime.now()})
print(loan.read(["member_id", "book_id", "duration_days"]))
# loan.unlink()  # only when you mean it
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | `create` two members; `search` both; `write` emails; prove with `mapped("email")` |
| Easy | Contrast `browse(id)` vs `search([("id", "=", id)])` — when is browse enough? |
| Medium | Create a loan with M2O ids; then update using One2many commands on `member.loan_ids` |
| Medium | Batch-create 20 books in one `create([...])`; compare mentally to 20 single creates |
| Hard | CODING PRACTICE script: checkout → return → archive member → attempt loan (should fail or be blocked by your rules) — document behavior |

**WHAT THIS UNLOCKS NEXT:**

CRUD without expressive search is blunt. Phase 15 builds domain syntax so you can ask real business questions of the database.


---

# PHASE 15 - Domains & Searching

**Track:** ORM Mastery

**WHAT YOU WILL BE ABLE TO DO:** Write correct domains with operators and AND/OR/NOT composition, use `search`, `search_count`, and `search_read` for business queries, and translate English questions into Odoo domains.

**WHAT YOU SHOULD KNOW FIRST:** Phase 14 — search returns recordsets; basic domain tuples.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Domains](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#search-domains)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [ORM video](https://www.youtube.com/watch?v=ASPjB-WowBU)
- [odoo/odoo](https://github.com/odoo/odoo)

## 15.1 Domain Syntax, Operators, AND/OR/NOT

A **domain** is a list of conditions prefix-polished into Polish notation for AND/OR/NOT. The simple form is a list of triples:

```python
[("field", "operator", value), ("other", "=", True)]
# Implicit AND between conditions
```

**COMMON OPERATORS:**

| Op | Meaning |
| -- | ------- |
| `=`, `!=` | Equality |
| `>`, `>=`, `<`, `<=` | Comparisons |
| `like`, `ilike` | SQL LIKE (`ilike` case-insensitive); use `%` wildcards |
| `=like`, `=ilike` | Pattern without auto-wrapping |
| `in`, `not in` | Membership in a list of values |
| `child_of` | Hierarchy (categories, employees) |
| `any` / `not any` | Odoo 17+ relational subdomain (prefer docs for version) |

```python
# Available ebooks published after 2020
[
    ("is_available", "=", True),
    ("format", "=", "ebook"),
    ("date_published", ">=", "2020-01-01"),
]
```

**OR / NOT — PREFIX OPERATORS:**

```python
# name contains "clean" OR format is ebook
["|", ("name", "ilike", "clean"), ("format", "=", "ebook")]

# NOT available
["!", ("is_available", "=", True)]

# (A OR B) AND C
["&", "|", ("a", "=", 1), ("b", "=", 2), ("c", "=", 3)]
```

```text
Domain evaluation is prefix-based:

  ["|", A, B]           ->  A OR B
  ["&", A, B]           ->  A AND B   (AND is also the default between items)
  ["!", A]              ->  NOT A
  ["|", A, "&", B, C]   ->  A OR (B AND C)
```

Draw a stack when domains get nested. Off-by-one prefix mistakes are common interview and production bugs.

**RELATIONAL PATHS:**

```python
[("member_id.email", "ilike", "@example.com")]
[("author_ids.name", "ilike", "Fowler")]  # across M2M
```

Paths walk Many2one / One2many / Many2many the same way related fields do. Keep them short — deep paths (`a.b.c.d`) become slow and hard to index. If you filter on `member_id.email` often, consider a related stored field or search on `member_id` with a prior member search.

**EMPTY / FALSE GOTCHAS:**

```python
# Open loans: date_returned is not set
[("date_returned", "=", False)]
# Also works in many versions:
[("date_returned", "=", None)]
```

Do not write `[("date_returned", "!=", False)]` when you mean "has a return date" without checking null behavior — prefer positive conditions when you can.

## 15.2 search_count, search_read & PRACTICE — Business Queries

```python
n = env["library.loan"].search_count([("date_returned", "=", False)])
rows = env["library.book"].search_read(
    [("list_price", ">", 40)],
    ["name", "list_price", "format"],
    limit=20,
    order="list_price desc",
)
```

`search_count` avoids building a huge recordset when you only need a number. `search_read` is efficient for returning dicts (RPC, dashboards) without dangling recordsets.

**WORKED TRANSLATIONS:**

```python
# 1) Members who joined this year
Member.search([("date_joined", ">=", "2026-01-01")])

# 2) Open loans
Loan.search([("date_returned", "=", False)])

# 3) Hardcover OR ebook, AND available
Book.search([
    "&",
    "|", ("format", "=", "hardcover"), ("format", "=", "ebook"),
    ("is_available", "=", True),
])

# 4) Count overdue (if is_overdue stored or searchable)
Loan.search_count([("is_overdue", "=", True)])

# 5) Top prices as dicts
Book.search_read(
    [("list_price", ">", 0)],
    ["name", "list_price"],
    order="list_price desc",
    limit=10,
)
```

**PRACTICE — BUSINESS QUERIES:**

Translate each into a domain + API call (write them before peeking at the snippets above):

1. Members who joined this year.
2. Loans still open (`date_returned` empty).
3. Books that are hardcover **or** ebook, and available.
4. Count of overdue loans (use your compute or a date comparison).
5. `search_read` top 10 books by price for a simple report.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write domains for equality, `ilike`, and `in` on books |
| Easy | Explain why `("date_returned", "=", False)` finds open loans |
| Medium | Build a domain with `|` and `&` that matches the hardcover/ebook + available rule |
| Medium | Compare `len(search(...))` vs `search_count` on a large set — which should you use? |
| Hard | PRACTICE set: five business questions above with working shell snippets |

**WHAT THIS UNLOCKS NEXT:**

Domains fetch the right rows. Phase 16 works *inside* the recordset — filter, map, sort, and batch — without round-tripping to SQL for every tiny step.


---

# PHASE 16 - Recordset Operations

**Track:** ORM Mastery

**WHAT YOU WILL BE ABLE TO DO:** Use `filtered`, `mapped`, `sorted`, and `ensure_one` fluently, and apply batch-friendly patterns that avoid naive Python loops over ORM chatter.

**WHAT YOU SHOULD KNOW FIRST:** Phase 15 — search/domains; Phase 13 — recordsets.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Recordsets](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#recordsets)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [ORM video](https://www.youtube.com/watch?v=ASPjB-WowBU)
- [odoo/odoo](https://github.com/odoo/odoo)

## 16.1 filtered, mapped, sorted, ensure_one

Once you have a recordset, you often need a subset, a projection, or a stable order — in memory, after the SQL.

**FILTERED:**

```python
loans = env["library.loan"].search([])
open_loans = loans.filtered(lambda l: not l.date_returned)
# Or field path sugar when checking truthiness of a field:
# overdue = loans.filtered("is_overdue")
```

`filtered` does not hit SQL again; it evaluates in Python on the current cache. For huge sets, put the condition in the domain instead.

**MAPPED:**

```python
names = books.mapped("name")                 # list of values
members = loans.mapped("member_id")          # union recordset of members
emails = loans.mapped("member_id.email")     # list of emails
```

`mapped` on a Many2one returns a recordset (deduplicated). On a scalar, a list. This is the idiomatic way to gather related records without manual loops.

**SORTED:**

```python
books.sorted(key=lambda b: b.list_price or 0.0, reverse=True)
books.sorted("name")
```

**ENSURE_ONE:**

```python
def action_checkout(self):
    self.ensure_one()
    # safe to treat self as a single loan
```

Buttons and RPC often pass multi-recordsets by accident. `ensure_one()` fails loud instead of corrupting data quietly.

**SET OPERATIONS:**

```python
both = books_a | books_b      # union
common = books_a & books_b    # intersection
only_a = books_a - books_b    # difference
```

Recordset set ops are on **identity (ids)**, not on field equality. Two browse recordsets of the same ids collapse cleanly.

**FILTERED VERSUS DOMAIN — WHEN TO USE WHICH:**

```text
Need subset BEFORE loading thousands of rows?
  -> put the condition in search([...])  (SQL)

Already hold a moderate recordset and need a cheap Python predicate?
  -> filtered(lambda ...)

Need related records / scalars collected?
  -> mapped("path")
```

## 16.2 Batch Operations

Prefer recordset-wide writes and creates over per-record chatter:

```python
# Weaker — N writes
for book in books:
    book.is_available = False

# Stronger — one write
books.write({"is_available": False})
```

```python
# Weaker
for vals in list_of_vals:
    env["library.book"].create(vals)

# Stronger
env["library.book"].create(list_of_vals)
```

When each row needs different values, you may still loop — but gather reads first (prefetch helps; Phase 17) and avoid searching inside the loop.

```python
# BAD — search inside loop (classic N+1)
for loan in loans:
    member = env["library.member"].search([("id", "=", loan.member_id.id)])

# GOOD — use the relation already on the recordset
for loan in loans:
    member = loan.member_id
```

**EXISTS / INDEXING HELPERS:**

```python
if loans:
    ...
if book in books:           # membership by id
    ...
books[0]                    # first record (raises if empty — check first)
books[:10]                  # slice -> recordset
```

Slicing a recordset does not always mean "LIMIT was used in SQL" if the set was already loaded — prefer `search(..., limit=10)` when you only need ten rows from the database.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | From all loans, `filtered` open ones; `mapped` member names |
| Easy | Call a method without `ensure_one` on two records; then add it and show the error |
| Medium | Sort books by price; take the top 5 with slicing `books[:5]` after sort |
| Medium | Replace a Python loop of writes with one batch `write` |
| Hard | Refactor a messy method that searches in a loop into domain + `filtered`/`mapped` |

**WHAT THIS UNLOCKS NEXT:**

Batch style helps, but the ORM's prefetch cache, flush timing, and transactions decide whether production code stays fast. Phase 17 opens the hood.


---

# PHASE 17 - ORM Internals & Performance

**Track:** ORM Mastery

**WHAT YOU WILL BE ABLE TO DO:** Explain prefetching and caching, reason about transactions and `flush`, diagnose N+1 query patterns, and optimize a slow recordset loop with evidence — not guesswork.

**WHAT YOU SHOULD KNOW FIRST:** Phase 16 — batch recordset operations; Phase 14 — CRUD.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Performance](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Prefetching / cache notes in ORM docs](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#field-access)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [ORM video](https://www.youtube.com/watch?v=ASPjB-WowBU)
- [odoo/odoo](https://github.com/odoo/odoo)
- [odoo/tutorials](https://github.com/odoo/tutorials)

## 17.1 Prefetching, Caching, Transactions, Flush

**PREFETCH:**

When you iterate a recordset and touch `book.name`, Odoo often fetches `name` for **all ids in the prefetch set** in one query — not one query per book. That is why batch recordsets are fast *when you stay on the same field set*.

```text
books = search(200 ids)
for book in books:
    print(book.name)     # first access: SELECT name FROM ... WHERE id IN (200 ids)
    print(book.isbn)     # may trigger another batched fetch for isbn
```

Jumping into a related recordset per iteration without care can still explode:

```python
for book in books:
    for author in book.author_ids:  # can be OK if prefetch works
        print(author.name)
```

Watch for searches or `browse` of unrelated ids inside loops — prefetch cannot save you there.

**CACHE:**

The environment cache stores field values already read. Assignments update the cache and mark fields to flush. Reading after write usually sees the new value even before SQL runs.

**TRANSACTIONS:**

One HTTP request / one cron run ≈ one database transaction (simplified). Commit happens at success end; exceptions roll back. You rarely call `commit()` in business code — framework owns it. In shell, you must `env.cr.commit()` to persist experiments.

**FLUSH:**

Pending writes sit in cache until **flush** sends them to PostgreSQL — before searches that must see them, before constraints, at commit.

```python
self.name = "New"
# SQL may not have run yet
self.flush_model()          # or env.flush_all() / flush_recordset
# Now SQL is visible to subsequent queries on this cursor
```

Usually the ORM flushes automatically when needed. Manual flush matters when mixing raw SQL (`self.env.cr.execute`) with ORM writes, or when debugging "I wrote it but search cannot find it yet."

## 17.2 N+1 Queries, LAB — Optimize ORM Code & STORY PROJECT

**N+1 PATTERN:**

```python
# 1 query for loans + N queries for members if prefetch broken / forced oddly
loans = env["library.loan"].search([], limit=500)
for loan in loans:
    # BAD example: re-search
    m = env["library.member"].search([("id", "=", loan.member_id.id)])
    print(m.name)
```

```python
# BETTER
loans = env["library.loan"].search([], limit=500)
loans.mapped("member_id.name")  # uses relations + prefetch
```

**HOW TO SEE QUERIES:**

Run with `--log-level=debug_sql` or enable logging on `odoo.sql_db` temporarily. Count statements before/after a refactor. Optimization without a query count is theater.

**LAB — OPTIMIZE ORM CODE:**

1. Write a deliberately slow method: for each loan, `search` the member by id and the book by id.
2. Log SQL count (or approximate with debug_sql).
3. Replace with `loan.member_id` / `loan.book_id` and a single starting `search`.
4. Record before/after query counts in a short note.

**STORY PROJECT — Data-Heavy Odoo Module**

Extend the library (or a sales sandbox) to include:

1. ≥ 200 demo records (books/loans) via XML or a setup method.
2. A report method that returns top borrowers / most borrowed books using domains + `mapped`/`sorted` (no HTML view required).
3. Evidence that you removed at least one N+1 (paste query counts or log snippets in README).
4. One stored compute that remains correct under batch `write`.

Story V ends when you can **move data in bulk without melting PostgreSQL**.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain prefetch in your own words with a 3-step ASCII diagram |
| Easy | When do you need `flush` before raw SQL SELECT? |
| Medium | Find an N+1 in sample code and fix it |
| Medium | LAB steps 1–4 with written before/after counts |
| Hard | STORY PROJECT: Data-Heavy Odoo Module deliverable |

**WHAT THIS UNLOCKS NEXT:**

You can read and write data at scale — but businesses need *rules*: methods that enforce policy, constraints that block illegal states, onchanges that guide the UI, and workflows that move a document from draft to approved. Story VI begins with business methods.


---

# PHASE 18 - Business Methods

**Track:** Business Logic

**WHAT YOU WILL BE ABLE TO DO:** Write model methods for business actions, override `create`/`write` with correct `super()` usage, and expose actions that transition records the way a librarian or sales manager expects.

**WHAT YOU SHOULD KNOW FIRST:** Story V — env, CRUD, domains, recordsets. Story IV — models/fields.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Model methods](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Override create/write patterns](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#model-reference)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [ORM / backend video](https://www.youtube.com/watch?v=ASPjB-WowBU)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [odoo/odoo](https://github.com/odoo/odoo)

## 18.1 Model Methods & Business Actions

Not everything belongs in a compute. **Business methods** encode verbs: confirm, approve, return book, cancel. They are where you check preconditions, change several fields, talk to other models, and return UI actions.

```python
from odoo import models
from odoo.exceptions import UserError


class LibraryLoan(models.Model):
    _name = "library.loan"
    ...

    def action_return_book(self):
        for loan in self:
            if loan.date_returned:
                raise UserError("This loan is already returned.")
            loan.date_returned = fields.Datetime.now()
            loan.book_id.is_available = True
        return True
```

Name UI-triggered methods with `action_` by convention. They can return `False`/`True` or an `ir.actions` dict (open a wizard, reload, notify). Views will bind buttons later; for now call them from shell/tests.

**KEEP METHODS BATCH-SAFE:**

Assume `self` may hold many records. Either loop with clear per-record rules or write in batches when values match.

## 18.2 create/write Overrides & super()

Overrides inject policy into every insert/update — including imports, RPC, and UI saves.

```python
from odoo import api, models
from odoo.exceptions import ValidationError


class LibraryBook(models.Model):
    _name = "library.book"
    ...

    @api.model_create_multi
    def create(self, vals_list):
        for vals in vals_list:
            if vals.get("isbn"):
                vals["isbn"] = vals["isbn"].replace("-", "").strip()
        books = super().create(vals_list)
        # post-create side effects on recordset `books`
        return books

    def write(self, vals):
        if "isbn" in vals and vals["isbn"]:
            vals = dict(vals)
            vals["isbn"] = vals["isbn"].replace("-", "").strip()
        res = super().write(vals)
        return res
```

**RULES:**

1. Prefer `@api.model_create_multi` (Odoo 18) so batch create stays batch.
2. Always call `super()` — skipping it drops base behavior (mail tracking, parent logic).
3. Put *validation that depends on final field combinations* in `@api.constrains` (Phase 19), not only in write — constrains also run when related paths require it.
4. Avoid heavy remote calls inside `write` without care — every small UI edit pays the cost.

```text
UI Save
  -> write(vals)
       -> your pre-processing
       -> super().write(vals)
            -> ORM updates cache / SQL
            -> constrains / recompute
       -> your post-processing
```

**CREATE VERSUS ACTION METHODS:**

| Hook | Fires when | Good for |
| ---- | ---------- | -------- |
| `create` / `write` | Any insert/update path | Normalization, light defaults, audit stamps |
| `action_*` | Explicit button / code call | Confirm, approve, return — intentional verbs |
| `unlink` override | Deletion | Block delete of posted docs; prefer cancel |

If confirming an order must also reserve stock, put that in `action_confirm`, not in every `write` of `state` — otherwise imports and tests surprise you.

**WORKED ACTION — CHECKOUT:**

```python
def action_checkout(self):
    self.ensure_one()
    if not self.book_id.is_available:
        raise UserError("Book is already on loan.")
    self.book_id.is_available = False
    return {
        "type": "ir.actions.client",
        "tag": "display_notification",
        "params": {
            "title": "Checked out",
            "message": f"{self.book_id.display_name} loaned to {self.member_id.display_name}",
            "type": "success",
        },
    }
```

Returning a client action is optional; returning `True` is enough until views exist.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add `action_make_available` on books that sets Boolean and works on multi `self` |
| Easy | Override `create` to default `format` if missing — with `super()` |
| Medium | Normalize ISBN in both `create` and `write` without duplicating logic (extract helper) |
| Medium | Explain why skipping `super()` breaks inheritance chains |
| Hard | Business action `action_checkout` that creates a loan, marks book unavailable, and refuses if book is already out |

**WHAT THIS UNLOCKS NEXT:**

Methods can refuse with `UserError`, but data integrity also needs declarative constraints. Phase 19 adds `@api.constrains`, SQL constraints, and the right exception types.


---

# PHASE 19 - Constraints & Validation

**Track:** Business Logic

**WHAT YOU WILL BE ABLE TO DO:** Protect business invariants with `@api.constrains` and SQL constraints, raise `ValidationError` vs `UserError` appropriately, and lab-test rules that block illegal library or leave-request data.

**WHAT YOU SHOULD KNOW FIRST:** Phase 18 — business methods and create/write overrides.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — Constraints](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#constraints-and-indexes)
- [Exceptions](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [odoo/odoo](https://github.com/odoo/odoo)

## 19.1 @api.constrains, SQL Constraints, ValidationError, UserError

**PYTHON CONSTRAINTS — MULTI-FIELD BUSINESS RULES:**

```python
from odoo import api, models
from odoo.exceptions import ValidationError


class LibraryLoan(models.Model):
    _name = "library.loan"
    ...

    @api.constrains("date_borrowed", "date_returned")
    def _check_return_after_borrow(self):
        for loan in self:
            if loan.date_returned and loan.date_borrowed and loan.date_returned < loan.date_borrowed:
                raise ValidationError("Return date cannot be before borrow date.")
```

`@api.constrains("field", ...)` runs when those fields change (and on create). Always loop `self`. Raise **ValidationError** for data that must never be stored.

**SQL CONSTRAINTS — DATABASE-ENFORCED UNIQUENESS / CHECKS:**

```python
_sql_constraints = [
    ("isbn_unique", "unique(isbn)", "ISBN must be unique."),
    ("price_positive", "CHECK(list_price >= 0)", "Price cannot be negative."),
]
```

SQL constraints catch what Python might miss (raw SQL, races). They are blunt and fast. Use both layers: SQL for simple uniqueness/checks; Python for multi-table logic.

**VALIDATIONERROR VS USERERROR:**

| Exception | Use |
| --------- | --- |
| `ValidationError` | Illegal data / invariant broken (constrains, field integrity) |
| `UserError` | Business process refusal ("You cannot approve your own request") — often from buttons |
| `AccessError` | ACL / record rules (usually raised by ORM) |

Users see both as blocking dialogs; developers and tests distinguish intent.

**CONSTRAINS VERSUS CREATE/WRITE GUARDS:**

```text
create/write override
  - Good for normalizing values early
  - Easy to forget alternate write paths

@api.constrains
  - Runs when listed fields change
  - Central place for "this data must never exist"

_sql_constraints
  - Enforced by PostgreSQL for every writer
  - Best for unique(...) and simple CHECK(...)
```

Use all three deliberately: normalize in create/write, express multi-field truth in constrains, nail uniqueness in SQL.

## 19.2 LAB — Protect Business Rules

Implement and prove (shell or unit test):

1. Unique ISBN on books (`_sql_constraints`).
2. Loan return ≥ borrow (`@api.constrains`).
3. Cannot create a loan for an unavailable book (constrain or `create` override + ValidationError).
4. Leave-request style rule: `date_to >= date_from` on a practice model.

```python
@api.constrains("book_id", "date_returned")
def _check_book_available(self):
    for loan in self:
        if loan.date_returned:
            continue  # historical closed loans stay valid
        if loan.book_id and not loan.book_id.is_available:
            raise ValidationError("Book is not available for a new loan.")
```

Think about edge cases: editing an old returned loan should not spuriously fail; constrain logic must read state carefully.

**TEST SKELETON (TransactionCase STYLE):**

```python
def test_isbn_unique(self):
    self.Book.create({"name": "A", "isbn": "111"})
    with self.assertRaises(Exception):
        self.Book.create({"name": "B", "isbn": "111"})
```

You do not need a full CI suite yet — one failing and one passing case per rule is enough to prove the lab.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add unique SQL constraint on `isbn`; try duplicate create; capture error text |
| Easy | When would you choose UserError over ValidationError in `action_approve`? |
| Medium | Constrains on leave dates + positive day count |
| Medium | Show a race where only SQL uniqueness saves you — explain |
| Hard | LAB: all four rules above with tests or reproducible shell transcript |

**WHAT THIS UNLOCKS NEXT:**

Constraints protect saved data. Users also need *while-editing* guidance — defaults and `@api.onchange` that reshape the form before save. Phase 20.


---

# PHASE 20 - Onchange & UI Logic

**Track:** Business Logic

**WHAT YOU WILL BE ABLE TO DO:** Use `@api.onchange` for interactive form logic, set field defaults and context defaults, and design dynamic form behavior that prepares values before the user clicks Save.

**WHAT YOU SHOULD KNOW FIRST:** Phase 19 — validation on save; Phase 10 — field defaults.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — onchange](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#onchange)
- [View / form interaction](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [Module UI video](https://www.youtube.com/watch?v=5YIwP9-55Qk)
- [odoo/odoo](https://github.com/odoo/odoo)

## 20.1 @api.onchange

`@api.onchange` runs in the **UI form** (and new-form RPC) when listed fields change. It updates other fields in the client payload **before** save. It is not a substitute for constraints — malicious or non-UI writes skip onchange.

```python
@api.onchange("book_id")
def _onchange_book_id(self):
    if self.book_id:
        self.list_price = self.book_id.list_price
    else:
        self.list_price = 0.0
```

```text
User picks book on form
        |
        v
Web client calls onchange RPC
        |
        v
_onchange_book_id runs on a virtual record
        |
        v
Returned values update widgets
        |
        v
User clicks Save -> create/write (+ constrains)
```

**LIMITS:**

- Do not rely on onchange for security or integrity.
- Prefer small, predictable updates; huge onchanges feel laggy.
- `self` in onchange may be a NewId virtual record — be careful with `self.id` and creating related rows.

**ONCHANGE THAT CLEARS DEPENDENT FIELDS:**

```python
@api.onchange("member_id")
def _onchange_member_id(self):
    self.loan_notes = False
    if self.member_id:
        self.loan_notes = f"Loan for {self.member_id.name}"
```

Clearing (`= False`) matters: otherwise stale values from a previous member stick in the form.

## 20.2 Defaults, Context Defaults, Dynamic Forms

**FIELD DEFAULT:**

```python
date_borrowed = fields.Datetime(default=fields.Datetime.now)
format = fields.Selection(..., default="paperback")
company_id = fields.Many2one("res.company", default=lambda self: self.env.company)
```

Callable defaults receive `self` as a model (empty recordset) — use `self.env`, not per-record fields.

**CONTEXT DEFAULTS** (from actions/menus you will build in Story VII):

```python
# In an action context (preview):
{"default_member_id": active_id, "default_format": "ebook"}
```

When the form opens, fields fill from `default_*` keys. This is how "Create loan from member" pre-fills the member.

**DEFAULT_GET (WHEN DEFAULTS NEED LOGIC):**

```python
@api.model
def default_get(self, fields_list):
    res = super().default_get(fields_list)
    if "date_borrowed" in fields_list:
        res["date_borrowed"] = fields.Datetime.now()
    return res
```

Use `default_get` when several fields must be decided together from context; use field `default=` for simple cases.

**DYNAMIC FORM PATTERNS (LOGIC SIDE):**

| Goal | Mechanism |
| ---- | --------- |
| Prefill price from product | onchange |
| Company-dependent currency | default lambda + related |
| Hide fields until state allows | attrs/invisible in views (Story VII) + state field |
| Compute read-only total | compute (Phase 12), not onchange |

Rule of thumb: **onchange = UX convenience**; **compute = derived truth**; **constraint = hard law**; **business method = intentional verb**.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | onchange: set loan notes to include book name when `book_id` changes |
| Easy | Add a lambda default for `company_id` / currency |
| Medium | Document three `default_*` context keys you would pass from a member form action |
| Medium | Show that a shell `create` bypasses onchange — reinforce why constrains still matter |
| Hard | Design dynamic leave form logic: onchange employee → department related; defaults for dates; constrain duration |

**WHAT THIS UNLOCKS NEXT:**

Defaults and onchanges polish editing. Real documents still need a **life cycle** — draft, confirmed, approved, cancelled — with legal transitions. Phase 21.


---

# PHASE 21 - States & Workflows

**Track:** Business Logic

**WHAT YOU WILL BE ABLE TO DO:** Model document states with Selection fields, implement safe transitions (draft → confirmed → approved / cancelled), block illegal moves, and deliver an approval workflow project for leave requests or purchases.

**WHAT YOU SHOULD KNOW FIRST:** Phase 18 — action methods; Phase 19 — constraints/UserError; Phase 20 — defaults/onchange.

**LEARNING RESOURCES:**

- [Odoo 18 ORM — fields / methods](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- [Backend tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html)
- [odoo/tutorials](https://github.com/odoo/tutorials)
- [Backend workflow patterns (video)](https://www.youtube.com/watch?v=ASPjB-WowBU)
- [odoo/odoo](https://github.com/odoo/odoo)
- [First module patterns (video)](https://www.youtube.com/watch?v=5YIwP9-55Qk)

## 21.1 Draft, Confirmed, Approved, Cancelled & Transitions

Most business documents are state machines. A leave request should not jump from draft to paid salary impact without confirmation. Encode state as Selection — not as booleans like `is_confirmed` + `is_cancelled` that allow impossible combinations.

```python
state = fields.Selection(
    [
        ("draft", "Draft"),
        ("confirmed", "Confirmed"),
        ("approved", "Approved"),
        ("cancelled", "Cancelled"),
    ],
    default="draft",
    string="Status",
    required=True,
    copy=False,
    tracking=True,  # if mail.thread mixin later
)
```

```text
                 confirm                approve
   [draft] ----------------> [confirmed] ----------------> [approved]
      |                         |
      | cancel                  | cancel
      v                         v
              [cancelled] <-----+

Approved -> Cancelled may be forbidden or require a special reset action.
Never allow Approved -> Draft without an explicit "reset" policy.
```

```python
def action_confirm(self):
    for rec in self:
        if rec.state != "draft":
            raise UserError("Only draft requests can be confirmed.")
        rec.state = "confirmed"

def action_approve(self):
    for rec in self:
        if rec.state != "confirmed":
            raise UserError("Only confirmed requests can be approved.")
        if rec.employee_id.user_id == self.env.user:
            raise UserError("You cannot approve your own request.")
        rec.state = "approved"

def action_cancel(self):
    for rec in self:
        if rec.state == "approved":
            raise UserError("Approved requests cannot be cancelled; reset first.")
        rec.state = "cancelled"

def action_reset_to_draft(self):
    self.ensure_one()
    if not self.env.user.has_group("base.group_system"):
        raise UserError("Only managers can reset.")
    self.state = "draft"
```

Optional: `_sql_constraints` cannot easily express transition graphs — keep transitions in methods. Optionally forbid direct `write({"state": ...})` from non-method paths by checking context flags, but start with disciplined actions and readonly states in views (Story VII).

## 21.2 PROJECT — Approval Workflow & STORY PROJECT

**PROJECT — Approval Workflow (leave request or purchase):**

Model `library.leave.request` (or `training.purchase.request`) with:

| Field | Type |
| ----- | ---- |
| employee / requester | Many2one |
| date_from, date_to | Date |
| days | Float compute |
| state | Selection workflow |
| notes | Text |

Methods: confirm, approve, cancel, reset (manager). Constraints: date order, positive days. onchange: optional prefills. Demo: two users — requester cannot approve own record.

**STORY PROJECT — Business Approval System**

Package Story VI into one module slice:

1. Document model with explicit state machine.
2. Business actions for every legal transition; illegal ones raise UserError.
3. Constraints from Phase 19 still hold at every state.
4. Short README state diagram (ASCII) + test script or TransactionCase covering happy path and three refusals.
5. Note explicitly what Story VII must add (buttons on forms, statusbar widget, groups for approvers).

```text
Story IV  — what the data *is*
Story V   — how to *move* data safely at scale
Story VI  — what the business *allows* to happen
Story VII — how users *see and click* that policy
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Draw the state diagram for sales order draft/sent/sale/cancel |
| Easy | Implement `action_confirm` with a state guard |
| Medium | Block self-approval; prove with two users in shell (`with_user`) |
| Medium | PROJECT leave/purchase approval with compute days + constraints |
| Hard | STORY PROJECT: Business Approval System with tests for happy path + refusals |

**WHAT THIS UNLOCKS NEXT:**

You can enforce a real approval life cycle in Python — but staff still have no screens, status bars, or menus to click. That limitation opens **Story VII — Building the User Interface**: XML views, actions, and menus that expose the models and workflows you just built.

# PHASE 22 - XML Foundations

**Track:** User Interface

**WHAT YOU WILL BE ABLE TO DO:** Author Odoo data XML that creates stable `ir.model.data` external IDs, load in the right order through the manifest, and debug noupdate / missing-ref failures without guessing.

**WHAT YOU SHOULD KNOW FIRST:** Phases 9–21 — models, fields, ORM, and business methods. You can define a model and persist records in Python; users still have no declarative screen wiring.

**LEARNING RESOURCES:**

- [View architectures (Odoo 18)](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [Server Framework 101 — Security intro (data loading context)](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/04_securityintro.html)
- [odoo/odoo — base data XML patterns](https://github.com/odoo/odoo)
- [Odoo XML data files overview](https://www.youtube.com/watch?v=mzg3EGD_6Gw)

## 22.1 XML Records and External IDs

You already own business truth in Python models. The next wall is not “how do I `create()` a book?” — it is “how does Odoo remember *this* form, *this* menu, *this* group across databases and upgrades?” That memory is not a random primary key. It is an **external ID**: a namespaced string stored in `ir.model.data` that maps `module.xml_id` → database row.

**WHAT AN XML RECORD ACTUALLY IS:**

Every `<record>` in a data file is an instruction to the ORM: find-or-create a row in some model, set fields, and register (or reuse) an external ID.

```xml
<record id="view_library_book_form" model="ir.ui.view">
    <field name="name">library.book.form</field>
    <field name="model">library.book</field>
    <field name="arch" type="xml">
        <form string="Book">
            <sheet>
                <group>
                    <field name="name"/>
                    <field name="isbn"/>
                </group>
            </sheet>
        </form>
    </field>
</record>
```

- `id="view_library_book_form"` becomes the **XML ID** `your_module.view_library_book_form`.
- `model="ir.ui.view"` is the target model (not your business model alone — views, actions, menus, groups, sequences are all data rows).
- Nested `<field>` tags set columns on that row. `type="xml"` means the content is stored as an XML architecture, not escaped text.

**EXTERNAL IDS ARE THE PUBLIC API OF YOUR MODULE:**

```text
Module library_app installs:

  XML:  id="view_library_book_form"
           |
           v
  ir.model.data
    module = library_app
    name   = view_library_book_form
    model  = ir.ui.view
    res_id = 42          <-- this integer changes per database
           |
           v
  ir.ui.view (id=42) arch=...

Other XML can say:
  ref="library_app.view_library_book_form"   <-- stable across DBs
Never hardcode res_id=42.
```

`ref="module.xml_id"` resolves at load time. If the target is missing, install/`-u` fails loudly — that is good. Silent wrong IDs are worse.

**EVAL AND FUNCTION CALLS IN DATA:**

```xml
<field name="groups_id" eval="[(4, ref('base.group_user'))]"/>
<field name="binding_model_id" ref="model_library_book"/>
```

`eval` runs a restricted Python expression with helpers like `ref()`, `time`, and command tuples for x2many writes. Prefer `ref=` on simple Many2one fields; use `eval` when you need commands or computed values.

**NOUPDATE AND UPGRADES:**

`<odoo noupdate="1">` (or `<data noupdate="1">`) means: on **update**, do not overwrite existing rows for these XML IDs. First install still creates them. Use noupdate for:

- security groups users may have customized,
- sequences / demo-ish master data you must not reset,
- record rules a deployer tweaked in production.

Do **not** put evolving view arches under noupdate while you are actively developing — you will `-u` and wonder why XML changes never appear.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write a `<record>` for `ir.ui.view` with a stable `id` and explain what lands in `ir.model.data`. |
| Medium | Cross-reference two records with `ref=` (view → action). Predict the error if load order is reversed. |
| Hard | Decide which of: groups, form views, demo books should use `noupdate="1"` and justify each choice. |

**WHAT THIS UNLOCKS NEXT:**

A single record is not a module. Odoo loads **files** in a declared order. Wrong order means `ref` failures even when every ID is spelled correctly — that is Phase 22.2.

---

## 22.2 Data Files and XML Loading

The manifest’s `'data': [...]` list is a **pipeline**, not a bag. Odoo processes files top to bottom on install and update. Dependencies between XML IDs must respect that order — and module `depends` must ensure foreign modules’ IDs exist first.

**TYPICAL UI DATA LAYOUT:**

```text
library_app/
  __manifest__.py
    'data': [
      'security/library_security.xml',   # groups first
      'security/ir.model.access.csv',
      'views/library_book_views.xml',    # views before actions that need them
      'views/library_menus.xml',         # menus last (need actions)
      'data/library_sequence.xml',
    ]
  security/
  views/
  data/
```

**WHY ORDER BITES:**

```text
menus.xml loads first, contains:
  <field name="action" ref="library_app.action_library_book"/>

actions still undefined
        |
        v
ValueError: External ID not found: library_app.action_library_book
```

Fix: list the action file before the menu file — or keep action + menu in one file with action defined first.

**CSV VS XML:**

Access rights usually live in `ir.model.access.csv` (tabular ACL). Groups, rules, views, actions, menus live in XML. Both create external IDs. CSV rows use `id` and `model_id:id` / `group_id:id` columns that resolve XML IDs the same way.

**INSTALL VS UPDATE MENTAL MODEL:**

```text
odoo-bin -i library_app
  create DB rows + ir.model.data for every XML/CSV id

odoo-bin -u library_app
  for each XML id:
    if noupdate and row exists -> skip field writes
    else -> write fields again (views refresh, etc.)
```

During development, `-u` after every view change is normal. In production, treat `-u` as a release step with backup — views and security reload together.

**DEMO DATA:**

`'demo': [...]` loads only when the database was created with demo data enabled. Never put required security or menus only in demo files.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Sketch a manifest `data` list for groups → ACL → views → actions → menus. |
| Medium | Break a module on purpose with reversed refs; fix by reordering files only. |
| Hard | Audit an existing addon’s data list and mark every cross-file `ref=` dependency. |

**WHAT THIS UNLOCKS NEXT:**

Stable IDs and load order give you a place to hang UI. Phase 23 builds the screens users actually edit: **form** and **list** views bound to your models.

---

> **Phase 22 complete?** Continue to [Phase 23](#phase-23---form--list-views-form-list-fields-buttons-groups-notebookpages-mini-project--crud-interface)

---

# PHASE 23 - Form & List Views

**Track:** User Interface

**WHAT YOU WILL BE ABLE TO DO:** Design Odoo 18 form and list architectures — sheet layout, groups, notebooks, headers/buttons, list columns — so a business user can create, read, update, and navigate records without shell access.

**WHAT YOU SHOULD KNOW FIRST:** Phase 22 — XML records, external IDs, data load order. Your models from Stories IV–VI already exist.

**LEARNING RESOURCES:**

- [View architectures (Odoo 18)](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [Form / list UI walkthrough](https://www.youtube.com/watch?v=hwfhO2IGhmc)
- [odoo/odoo — sale form XML](https://github.com/odoo/odoo)

## 23.1 Form Views: Sheet, Groups, Notebook, Buttons

A **form view** is the detail/edit surface for one record. In Odoo 18 the architecture is XML inside `ir.ui.view`; the web client (OWL) renders widgets bound to field names on the model.

**ANATOMY OF A WORKING FORM:**

```xml
<record id="view_library_book_form" model="ir.ui.view">
    <field name="name">library.book.form</field>
    <field name="model">library.book</field>
    <field name="arch" type="xml">
        <form string="Book">
            <header>
                <button name="action_make_available" type="object"
                        string="Make Available"
                        invisible="state != 'loaned'"/>
                <field name="state" widget="statusbar"
                       statusbar_visible="draft,available,loaned"/>
            </header>
            <sheet>
                <div class="oe_title">
                    <h1><field name="name" placeholder="Book title"/></h1>
                </div>
                <group>
                    <group string="Identity">
                        <field name="isbn"/>
                        <field name="author_id"/>
                    </group>
                    <group string="Loan">
                        <field name="borrower_id"/>
                        <field name="due_date"/>
                    </group>
                </group>
                <notebook>
                    <page string="Notes" name="notes">
                        <field name="notes" nolabel="1"/>
                    </page>
                    <page string="Loans" name="loans">
                        <field name="loan_ids">
                            <list>
                                <field name="date_start"/>
                                <field name="partner_id"/>
                            </list>
                        </field>
                    </page>
                </notebook>
            </sheet>
        </form>
    </field>
</record>
```

**LAYOUT CONTRACT:**

```text
<form>
  <header>     statusbar + workflow buttons (object / action)
  <sheet>      main business fields
    <group>    two-column grids; nest group in group for 2x2
    <notebook> tabs for secondary density
      <page>
  optional: chatter (mail.thread) outside sheet in many official apps
```

- **`type="object"`** buttons call a Python method on the model (`def action_make_available(self):`).
- **`type="action"`** buttons open an `ir.actions.*` by XML ID.
- Odoo 18 prefers Python expressions in `invisible` / `readonly` / `required` (e.g. `state != 'draft'`) over legacy `attrs` dicts on new code.

**FIELD WIDGETS CHANGE THE JOB, NOT THE COLUMN:**

| Widget / option | When |
| --------------- | ---- |
| `widget="statusbar"` | Selection / many2one stages in the header |
| `widget="many2many_tags"` | Compact M2M |
| `widget="monetary"` | Amount + currency |
| `widget="badge"` | Soft status chips on lists/forms |
| `nolabel="1"` | Full-width text / HTML |

Domains on fields (`domain="[('active','=',True)]"`) limit *what you can pick*, not server security — Phase 28–29 still own authorization.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Form with two `group` columns and three fields. |
| Medium | Header button + statusbar; hide button unless `state` matches. |
| Hard | Notebook with an embedded one2many list editable inline. |

**WHAT THIS UNLOCKS NEXT:**

Forms edit one record. Operators live in queues of many records — that is the **list** view.

---

## 23.2 List Views and Dense Operations

In Odoo 18 the list root is `<list>` (historically `<tree>` still appears in older modules). Lists are for scanning, multi-edit, and opening forms.

```xml
<record id="view_library_book_list" model="ir.ui.view">
    <field name="name">library.book.list</field>
    <field name="model">library.book</field>
    <field name="arch" type="xml">
        <list string="Books" default_order="name"
              decoration-muted="state == 'archived'"
              decoration-danger="state == 'lost'">
            <field name="name"/>
            <field name="isbn" optional="hide"/>
            <field name="author_id"/>
            <field name="state" widget="badge"/>
            <field name="due_date"/>
        </list>
    </field>
</record>
```

- **`editable="bottom"`** or `"top"` enables inline create/edit without opening the form — powerful for line models, dangerous for complex workflows.
- **`optional="hide"` / `"show"`** lets users toggle columns.
- **`decoration-*`** apply row styling from expressions (presentation only).

**BUTTONS ON LISTS:**

```xml
<button name="action_renew" type="object" string="Renew" icon="fa-refresh"/>
```

Row buttons operate on that record’s recordset (`self` length 1). Prefer server actions / multi for bulk.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List with four columns and `default_order`. |
| Medium | Add `optional` column + decoration for overdue due dates. |
| Hard | Editable list for loan lines with a constrained many2one. |

**WHAT THIS UNLOCKS NEXT:**

Form + list alone are enough for a first CRUD UI — ship that mini interface next.

---

## 23.3 MINI PROJECT — CRUD Interface

Build a minimal but real UI for one model you already have (e.g. `library.book` or `estate.property`):

1. Form with header/statusbar or a simple state field, sheet groups, and one notebook page.
2. List with at least five meaningful columns and one decoration.
3. Both registered as `ir.ui.view` records with stable XML IDs.
4. Install / `-u` and create three records from the UI (you may temporarily open via Technical → Views if menus wait until Phase 25).

**Acceptance:** a non-developer can create and edit a record without the shell; field names on the form match the model; no traceback on save.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Screenshot form + list after creating one record. |
| Medium | Add a one2many page and create a child line from the form. |
| Hard | Make a field readonly when state is done using an Odoo 18 expression. |

**WHAT THIS UNLOCKS NEXT:**

CRUD without search filters forces users to scroll forever. Phase 24 adds **search**, **kanban**, and analytical views on the same model.

---

> **Phase 23 complete?** Continue to [Phase 24](#phase-24---search-kanban--other-views-search-views-filters-group-by-kanban-calendar-pivot-graph-practice--multiple-views-of-same-data)

---

# PHASE 24 - Search, Kanban & Other Views

**Track:** User Interface

**WHAT YOU WILL BE ABLE TO DO:** Attach search, kanban, calendar, pivot, and graph views to the same model so one dataset serves operations, planning, and light analytics.

**WHAT YOU SHOULD KNOW FIRST:** Phase 23 — form and list arches. Domains from the ORM story.

**LEARNING RESOURCES:**

- [View architectures (Odoo 18)](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [Multiple view types demo](https://www.youtube.com/watch?v=r11U1pqGqQQ)
- [odoo/odoo — CRM kanban / search examples](https://github.com/odoo/odoo)

## 24.1 Search Views: Filters and Group By

A **search view** does not display records. It defines the control strip above list/kanban: fields to search, preset filters, and group-by options.

```xml
<record id="view_library_book_search" model="ir.ui.view">
    <field name="name">library.book.search</field>
    <field name="model">library.book</field>
    <field name="arch" type="xml">
        <search string="Books">
            <field name="name"/>
            <field name="isbn"/>
            <field name="author_id"/>
            <filter name="filter_available" string="Available"
                    domain="[('state', '=', 'available')]"/>
            <filter name="filter_loaned" string="Loaned"
                    domain="[('state', '=', 'loaned')]"/>
            <separator/>
            <filter name="filter_my_authors" string="My Authors"
                    domain="[('author_id.user_id', '=', uid)]"/>
            <group expand="0" string="Group By">
                <filter name="groupby_author" string="Author"
                        context="{'group_by': 'author_id'}"/>
                <filter name="groupby_state" string="State"
                        context="{'group_by': 'state'}"/>
            </group>
            <searchpanel>
                <field name="state" enable_counters="1"/>
            </searchpanel>
        </search>
    </field>
</record>
```

**FILTER VS DOMAIN ON THE ACTION:**

```text
Action domain     = always-on constraint (e.g. only active books in this menu)
Search filter     = optional facet the user toggles
Both AND together when the filter is on.
```

`uid` in domains is the current user id. Prefer named filters over teaching users to write domains by hand.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Search view with two field searches and one domain filter. |
| Medium | Add group-by for many2one + selection. |
| Hard | Searchpanel on state with counters; verify filter + action domain interaction. |

**WHAT THIS UNLOCKS NEXT:**

Search shapes *which* rows. Kanban and friends change *how* those rows are experienced.

---

## 24.2 Kanban, Calendar, Pivot, Graph

**Kanban** — cards by stage (CRM DNA):

```xml
<kanban default_group_by="state" class="o_kanban_small_column">
    <field name="name"/>
    <field name="author_id"/>
    <field name="state"/>
    <templates>
        <t t-name="card">
            <field name="name" class="fw-bold"/>
            <field name="author_id"/>
        </t>
    </templates>
</kanban>
```

Drag between columns typically writes the group-by field — ensure that write is allowed by ACL/rules and business constraints.

**Calendar** — needs a date/datetime field:

```xml
<calendar date_start="due_date" color="author_id" mode="month">
    <field name="name"/>
</calendar>
```

**Pivot / Graph** — aggregates for managers:

```xml
<pivot string="Loans">
    <field name="author_id" type="row"/>
    <field name="state" type="col"/>
    <field name="id" type="measure"/>
</pivot>

<graph string="Books by State" type="bar">
    <field name="state"/>
    <field name="id" type="measure"/>
</graph>
```

Measures must be aggregable (stored numeric / countable). Computed non-stored fields often disappoint here — store or use SQL views when analytics matter.

**SAME MODEL, MANY ARCHES:**

```text
library.book
  ├── form     (edit one)
  ├── list     (scan many)
  ├── search   (filter/group controls)
  ├── kanban   (by state)
  ├── calendar (by due_date)
  ├── pivot    (counts by author/state)
  └── graph    (bar by state)

Window action (Phase 25) picks view_mode = "list,form,kanban,..."
```

**PRACTICE — MULTIPLE VIEWS OF SAME DATA:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add search + kanban to the Phase 23 model. |
| Medium | Calendar on a date field + list/form still working. |
| Hard | Pivot + graph that answer “how many loans per state this month?” |

**WHAT THIS UNLOCKS NEXT:**

Views sitting in Technical menus help developers only. Phase 25 wires **actions and menus** so normal users navigate.

---

> **Phase 24 complete?** Continue to [Phase 25](#phase-25---actions--menus-iractionsact_window-menus-context-domains-navigation)

---

# PHASE 25 - Actions & Menus

**Track:** User Interface

**WHAT YOU WILL BE ABLE TO DO:** Connect models to window actions and menu trees with domains, contexts, and view modes so navigation opens the right records in the right views.

**WHAT YOU SHOULD KNOW FIRST:** Phases 22–24 — XML IDs, form/list/search/kanban views.

**LEARNING RESOURCES:**

- [View architectures + actions usage](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [Menus and actions](https://www.youtube.com/watch?v=mzg3EGD_6Gw)
- [odoo/odoo — menu XML in addons](https://github.com/odoo/odoo)

## 25.1 Window Actions: Domain, Context, View Mode

`ir.actions.act_window` is the glue: “open this model, with these views, under this domain, with this context.”

```xml
<record id="action_library_book" model="ir.actions.act_window">
    <field name="name">Books</field>
    <field name="res_model">library.book</field>
    <field name="view_mode">list,form,kanban,graph</field>
    <field name="search_view_id" ref="view_library_book_search"/>
    <field name="domain">[('active', '=', True)]</field>
    <field name="context">{
        {
            'search_default_filter_available': 1,
            'default_state': 'draft',
        }
    </field>
    <field name="help" type="html">
        <p class="o_view_nocontent_smiling_face">
            Create your first book.
        </p>
    </field>
</record>
```

**DOMAIN VS CONTEXT:**

| Mechanism | Effect |
| --------- | ------ |
| `domain` on action | Permanent filter for this menu entry |
| `search_default_<filter_name>` | Turns on a search filter by default |
| `default_<field>` | Prefills new records |
| `group_by` in context | Opens already grouped |

```text
Menu "Available Books"
  action.domain = [('state','=','available')]

Menu "All Books"
  action.domain = []
  search_default_filter_available optional

Same model, different windows — do not fork models for menu filters.
```

You can pin explicit view IDs:

```xml
<field name="view_ids" eval="[
    (5, 0, 0),
    (0, 0, {'view_mode': 'list', 'view_id': ref('view_library_book_list')}),
    (0, 0, {'view_mode': 'form', 'view_id': ref('view_library_book_form')}),
]"/>
```

Usually `view_mode` + lowest-sequence views for the model are enough.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | `act_window` with `list,form` and empty domain. |
| Medium | Two actions on the same model with different domains/contexts. |
| Hard | `search_default_` + `default_state` and prove both in the UI. |

**WHAT THIS UNLOCKS NEXT:**

Actions without menus are orphan technical records. Menus place them in the app switcher / sidebar.

---

## 25.2 Menus and Navigation Groups

```xml
<menuitem id="menu_library_root"
          name="Library"
          sequence="10"
          web_icon="library_app,static/description/icon.png"/>

<menuitem id="menu_library_books"
          name="Books"
          parent="menu_library_root"
          action="action_library_book"
          sequence="10"
          groups="library_app.group_library_user"/>
```

- Root menuitem without `parent` becomes an app (with `web_icon`).
- Child menus usually set `action=...`.
- **`groups=` on menus hides navigation** — it is **visibility**, not security. RPC and ORM still need ACL/record rules (Story VIII).

**SEQUENCE AND PARENT CHAINS:**

```text
Library (root)
  ├── Books          -> action_library_book
  ├── Authors        -> action_library_author
  └── Configuration
        └── Book Categories -> action_library_category
```

Keep Configuration nested; do not dump every action at root.

**SERVER ACTIONS / BINDINGS (PREVIEW):**

Actions can bind to the Action menu on a model (`binding_model_id`). Full wizard flows arrive in Story X; for now know that not every action is a window action.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Root + one child menu opening your books action. |
| Medium | Nested Configuration menu with groups restricted to managers. |
| Hard | Two menus, one domain-limited; verify a user without the group cannot see the manager menu (still not enough for data security). |

**WHAT THIS UNLOCKS NEXT:**

Your own screens work. Real projects extend **standard** screens without copying them — Phase 26 is view inheritance with XPath.

---

> **Phase 25 complete?** Continue to [Phase 26](#phase-26---view-inheritance-inherit_id-xpath-position-extend-existing-screens)

---

# PHASE 26 - View Inheritance

**Track:** User Interface

**WHAT YOU WILL BE ABLE TO DO:** Extend existing `ir.ui.view` arches with `inherit_id` and XPath `position` semantics so upgrades do not require forked copies of official forms.

**WHAT YOU SHOULD KNOW FIRST:** Phases 22–25 — you can ship a full custom UI. Official apps already ship theirs.

**LEARNING RESOURCES:**

- [View architectures — inheritance](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [XPath inheritance deep dive](https://www.youtube.com/watch?v=hwfhO2IGhmc)
- [odoo/odoo — inherit patterns in sale/purchase](https://github.com/odoo/odoo)

## 26.1 inherit_id, XPath, and position

View inheritance creates a new `ir.ui.view` row that **patches** a parent arch. Odoo merges patches in module dependency order into the arch the client receives.

```xml
<record id="view_partner_form_library" model="ir.ui.view">
    <field name="name">res.partner.form.library</field>
    <field name="model">res.partner</field>
    <field name="inherit_id" ref="base.view_partner_form"/>
    <field name="arch" type="xml">
        <xpath expr="//field[@name='phone']" position="after">
            <field name="library_card_number"/>
        </xpath>
    </field>
</record>
```

**POSITIONS:**

| `position` | Effect |
| ---------- | ------ |
| `inside` | Append as last child of matched node |
| `before` / `after` | Sibling insertion |
| `replace` | Swap the matched node for your content |
| `attributes` | Change XML attributes without replacing the node |
| `move` | Relocate an existing node (Odoo version-aware; use carefully) |

```xml
<xpath expr="//field[@name='email']" position="attributes">
    <attribute name="required">1</attribute>
</xpath>
```

**XPATH DISCIPLINE:**

```text
Brittle:  //group[3]/field[2]
Stable:   //field[@name='partner_id']
Better:   //page[@name='order_lines']//field[@name='product_id']
```

Prefer anchors with `@name` on pages/fields. Index-based paths break when upstream inserts a group.

**MERGE PICTURE:**

```text
base.view_partner_form
        +
library.view_partner_form_library   (after phone)
        +
another.extension                   (inside sheet)
        =
single merged arch --> one form in UI
```

If XPath matches nothing, `-u` raises — fix the expr, do not catch and ignore.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Inherit partner form; add a Char after `phone`. |
| Medium | `position="attributes"` to make a field readonly when appropriate. |
| Hard | Two modules inherit the same anchor; predict merge order from `depends`. |

**WHAT THIS UNLOCKS NEXT:**

Surgical patches scale only if you practice on real density — next, apply inheritance as the primary way to customize, then close Story VII with a full UI project.

---

## 26.2 Extend Existing Screens Without Forking

**ANTI-PATTERN:** copy the entire sale order form into your module and edit it. Every Odoo upgrade reshuffles upstream XML; your fork bitrots immediately.

**PATTERN:**

1. Add fields via model `_inherit` (Story IX) or related placeholders you already have.
2. Inherit the official view; XPath only the delta.
3. Depend on the official module in `__manifest__.py`.
4. Keep patches small; one concern per inherit record when possible.

```xml
<!-- depends: ['sale'] -->
<record id="view_order_form_library_note" model="ir.ui.view">
    <field name="name">sale.order.form.library.note</field>
    <field name="model">sale.order</field>
    <field name="inherit_id" ref="sale.view_order_form"/>
    <field name="arch" type="xml">
        <xpath expr="//field[@name='payment_term_id']" position="after">
            <field name="library_pickup"/>
        </xpath>
    </field>
</record>
```

**VISIBILITY IS NOT SECURITY (PREVIEW OF STORY VIII):**

Hiding a field with `invisible="1"` or removing it via XPath does **not** block RPC write/read. Users and APIs can still touch the field if ACL allows. Inheritance controls UX layout; security controls data.

**STORY PROJECT — COMPLETE ODOO APPLICATION UI**

Ship one coherent addon UI for a business model set you already built:

| Deliverable | Done when |
| ----------- | --------- |
| Form + list + search | CRUD works from menus |
| At least one of kanban/calendar/graph | Second perspective on same data |
| Root app menu + children | Non-admin can navigate |
| One inherit on `res.partner` or similar | XPath patch, not a forked form |
| Manifest data order | Clean `-i` / `-u` |

Optional polish: empty-state `help` on the action, statusbar workflow buttons, decorations on the list.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List the view XML IDs you inherit vs own. |
| Medium | Replace a forked view (if any) with an XPath inherit. |
| Hard | Full story project checklist above green on a fresh DB. |

**WHAT THIS UNLOCKS NEXT:**

A beautiful UI with open ACLs is a breach waiting for a demo. Story VIII — **Security & Multi-Company** — makes menus honest: groups, ACL, record rules, `sudo` discipline, and company isolation.

---

> **Phase 26 complete?** [Story VII UI project](#phase-26---view-inheritance-inherit_id-xpath-position-extend-existing-screens) · Continue to [Phase 27](#phase-27---users--groups)

---

# PHASE 27 - Users & Groups

**Track:** Security

**WHAT YOU WILL BE ABLE TO DO:** Model responsibility with `res.groups` hierarchies (`implied_ids`), assign users correctly, and separate UI visibility groups from privilege design.

**WHAT YOU SHOULD KNOW FIRST:** Story VII — menus/views exist. Stories IV–VI — models hold data worth protecting.

**LEARNING RESOURCES:**

- [Access rights (applications)](https://www.odoo.com/documentation/18.0/applications/general/users/access_rights.html)
- [Security reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [Server Framework 101 — security intro](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/04_securityintro.html)
- [Restrict data access tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/restrict_data_access.html)
- [Users & groups walkthrough](https://www.youtube.com/watch?v=mzg3EGD_6Gw)

## 27.1 Users, Groups, and Implied Rights

In Odoo, a **user** (`res.users`) is a login bound to a partner. **Groups** (`res.groups`) are roles. Permissions attach to groups; users inherit the union of their groups’ rights (plus implied groups).

```xml
<record id="module_category_library" model="ir.module.category">
    <field name="name">Library</field>
    <field name="sequence">30</field>
</record>

<record id="group_library_user" model="res.groups">
    <field name="name">User</field>
    <field name="category_id" ref="module_category_library"/>
    <field name="implied_ids" eval="[(4, ref('base.group_user'))]"/>
</record>

<record id="group_library_manager" model="res.groups">
    <field name="name">Administrator</field>
    <field name="category_id" ref="module_category_library"/>
    <field name="implied_ids" eval="[(4, ref('group_library_user'))]"/>
    <field name="users" eval="[(4, ref('base.user_admin'))]"/>
</record>
```

**IMPLIED_IDS CASCADE:**

```text
Library / Administrator
    implies --> Library / User
                    implies --> Internal User (base.group_user)

Grant Manager => automatically receives User rights.
Do not duplicate every ACL row for Manager if User already has the baseline
(still common to give Manager extra unlink, etc.).
```

**CATEGORIES** drive the Settings → Users access rights matrix UI (Application section). Without a category, groups still work but are harder to administer.

**USERS VS SETTINGS:**

- Prefer granting groups in data for system users; humans get groups via the Users form.
- `base.group_system` (Settings) is extremely privileged — not a substitute for app manager groups.
- Portal / public users are separate (`base.group_portal`, public) — do not casually imply them into internal ACL.

**UI GROUPS VS SECURITY GROUPS:**

```text
menuitem groups="library.group_library_manager"
button  groups="library.group_library_manager"

  => hides widgets for non-members

ir.model.access / ir.rule still decide whether RPC succeeds.
Hidden button + open ACL = attacker calls method anyway.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define User + Manager groups with `implied_ids`. |
| Medium | Put groups in an `ir.module.category` and assign a test user only User. |
| Hard | Map every menu/button `groups=` and confirm each has a matching ACL story. |

**WHAT THIS UNLOCKS NEXT:**

Groups without ACL rows often mean AccessError on first click — Phase 28 adds **model-level** CRUD rights.

---

> **Phase 27 complete?** Continue to [Phase 28](#phase-28---access-control-lists)

---

# PHASE 28 - Access Control Lists

**Track:** Security

**WHAT YOU WILL BE ABLE TO DO:** Author `ir.model.access` CSV matrices that grant least-privilege CRUD per group, and diagnose AccessError as missing model rights (not “Odoo is broken”).

**WHAT YOU SHOULD KNOW FIRST:** Phase 27 — groups exist. Models from earlier stories.

**LEARNING RESOURCES:**

- [Security reference — access rights](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [Restrict data access](https://www.odoo.com/documentation/18.0/developer/tutorials/restrict_data_access.html)
- [Server Framework 101 — security](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/04_securityintro.html)
- [ACL configuration](https://www.youtube.com/watch?v=hwfhO2IGhmc)

## 28.1 ir.model.access: Model-Level CRUD

**ACL answers:** *May this group perform create/read/write/unlink on this model at all?* It does **not** answer *which rows*.

```csv
id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
access_library_book_user,library.book.user,model_library_book,library_app.group_library_user,1,1,1,0
access_library_book_manager,library.book.manager,model_library_book,library_app.group_library_manager,1,1,1,1
access_library_loan_user,library.loan.user,model_library_loan,library_app.group_library_user,1,1,1,0
```

- `model_id:id` uses the XML ID Odoo auto-creates for models: `model_<name_with_underscores>` (e.g. `library.book` → `model_library_book`), usually in your module or as `module.model_...`.
- Empty `group_id` means global (everyone) — rare and dangerous; prefer explicit groups.
- Missing row for a group ⇒ **AccessError** when that user touches the model.

**ACCESSERROR MENTAL MODEL:**

```text
User clicks Books menu
  -> act_window reads library.book
  -> ACL check: perm_read for user's groups?
        |
        +-- no  -> AccessError (often empty screen / popup)
        +-- yes -> continue to record rules (Phase 29)
```

Always test with a **non-admin** user. Admin/`sudo` paths hide ACL mistakes until production.

**LEAST PRIVILEGE PATTERNS:**

| Role | read | write | create | unlink |
| ---- | ---- | ----- | ------ | ------ |
| Officer | 1 | 1 | 1 | 0 |
| Manager | 1 | 1 | 1 | 1 |
| Portal readonly | 1 | 0 | 0 | 0 |

Transient wizard models need ACL too — forgotten wizard access is a classic install bug.

**ACL VS RECORD RULES (BOOKMARK THIS):**

```text
ACL          = gate to the table (model)
Record rule  = filter on rows (domain)
Both required for real multi-user apps.

                  +------------------+
 User request --> | ACL: model CRUD? | --no--> AccessError
                  +--------+---------+
                           | yes
                           v
                  +------------------+
                  | Rules: which     | --none match--> empty recordset
                  | rows?            | --match--> operate on rows
                  +------------------+
```

**FIELD-LEVEL `groups=` IS NOT A REPLACEMENT:**

```python
secret_note = fields.Char(groups="library_app.group_library_manager")
```

Non-managers omit the field from the default read/write field set — useful, still not a substitute for missing ACL on a dedicated sensitive model. Do not store payroll in a Char on `res.partner` with only `groups=` and call it done.

**MANIFEST LOADING:**

Keep `security/ir.model.access.csv` in `'data'` after group XML (groups must exist for `group_id:id`). On `-u`, CSV lines upsert by XML id — changing permissions in CSV is how you ship privilege fixes.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | CSV granting User read/write/create and Manager full CRUD. |
| Medium | Reproduce AccessError by removing a CSV line; fix it. |
| Hard | Audit five models for portal vs internal rights; no global ACL. |

**WHAT THIS UNLOCKS NEXT:**

Everyone in Sales can read `sale.order` — but each rep must see **their** orders. Phase 29 is row-level **record rules**.

---

> **Phase 28 complete?** Continue to [Phase 29](#phase-29---record-rules)

---

# PHASE 29 - Record Rules

**Track:** Security

**WHAT YOU WILL BE ABLE TO DO:** Write `ir.rule` domains that enforce row-level security, explain global AND vs group OR combination, and debug “empty list for user / full list for admin” failures.

**WHAT YOU SHOULD KNOW FIRST:** Phase 28 — ACL allows model access. Domains from the ORM story.

**LEARNING RESOURCES:**

- [Security reference — record rules](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [Restrict data access tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/restrict_data_access.html)
- [Record rules deep dive](https://www.youtube.com/watch?v=r11U1pqGqQQ)
- [odoo/odoo — base security rules](https://github.com/odoo/odoo)

## 29.1 ir.rule: Row-Level Domains

```xml
<record id="rule_library_book_officer_own" model="ir.rule">
    <field name="name">Books: officer sees own</field>
    <field name="model_id" ref="model_library_book"/>
    <field name="domain_force">[('officer_id', '=', user.id)]</field>
    <field name="groups" eval="[(4, ref('library_app.group_library_user'))]"/>
    <field name="perm_read" eval="True"/>
    <field name="perm_write" eval="True"/>
    <field name="perm_create" eval="True"/>
    <field name="perm_unlink" eval="False"/>
</record>
```

`domain_force` is a **string** evaluated with `user`, `time`, and company helpers available. Standard library `user` is the current `res.users` record.

**COMBINATION RULES (CRITICAL):**

```text
Global rules (no groups on ir.rule):
  ALL global rules AND together

Group-specific rules:
  For the user's groups, rules for a given operation OR together
  Then AND with globals

Example:
  Global:  company_id in company_ids
  Group A: officer_id = user.id
  Group B: state = 'published'   (user in A and B)

  Effective ≈ global AND (own OR published)
```

Misunderstanding OR/AND causes “manager suddenly sees nothing” after adding a strict global rule.

**PERM FLAGS ON RULES:**

A rule can apply only to certain operations. You might allow read broadly but restrict write/unlink more tightly — use separate rules rather than one overloaded domain when clarity suffers.

**VISIBILITY ≠ SECURITY (AGAIN):**

```text
List view decoration / invisible field
  -> cosmetic

Action domain
  -> UX default window scope (bypassable via other actions / RPC)

Record rule
  -> ORM enforces on search/read/write/unlink
```

If security matters, put it in **ACL + rules**, not in view XML alone.

**DEBUG PLAYBOOK:**

1. Reproduce with a dedicated test user (only intended groups).
2. As admin, check Settings → Technical → Security → Record Rules for the model.
3. In shell: `env['library.book'].with_user(test_user).search([])` vs `sudo()`.
4. Confirm ACL first — empty + AccessError is ACL; empty + no error often means rules filtered everything.

**WORKED FAILURE — “ADMIN SEES ROWS, USER SEES NONE”:**

```text
Symptom: Manager list shows 40 books; Officer list shows 0; no AccessError.

Check ACL: Officer has perm_read=1 on library.book     OK
Check action domain: []                                OK
Check rules:
  Global: [('company_id','in', company_ids)]           OK (same company)
  Group Officer: [('officer_id','=', user.id)]         <-- officer_id empty on all demo books

Cause: domain correct, data wrong — or rule too strict for how records are created.
Fix: set officer_id on create defaults, OR widen domain with '|', ('officer_id','=',False) if intentional.
```

**MULTI-COMPANY PREVIEW:**

Company isolation is usually a **global** `ir.rule` on transactional models. Phase 31 installs that pattern properly with `company_id` fields — do not invent a one-off company domain per menu and call it security.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Rule: users see only records where `create_uid = user.id`. |
| Medium | Global company rule + group own-document rule; explain the combo. |
| Hard | Debug a user who sees zero rows; write the root cause (ACL vs rule vs domain). |

**WHAT THIS UNLOCKS NEXT:**

Legitimate code sometimes must bypass or switch users — `sudo()` and `with_user()` — without becoming a backdoor. Phase 30.

---

> **Phase 29 complete?** Continue to [Phase 30](#phase-30---sudo-with_user--security-context)

---

# PHASE 30 - sudo(), with_user() & Security Context

**Track:** Security

**WHAT YOU WILL BE ABLE TO DO:** Use `sudo()` and `with_user()` deliberately, keep security context narrow, and refuse patterns that launder privileges across request boundaries.

**WHAT YOU SHOULD KNOW FIRST:** Phases 27–29 — groups, ACL, record rules. ORM environment from Story V.

**LEARNING RESOURCES:**

- [Security reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [Restrict data access](https://www.odoo.com/documentation/18.0/developer/tutorials/restrict_data_access.html)
- [Security context pitfalls](https://www.youtube.com/watch?v=r11U1pqGqQQ)
- [odoo/odoo — Environment / sudo usage in core](https://github.com/odoo/odoo)

## 30.1 Privileged Environments Without Privilege Laundering

Every recordset carries an **Environment**: cursor, uid, context, su flag. Access checks use that environment.

```python
# Dangerous: entire method runs as superuser
def action_confirm(self):
    self.sudo().write({"state": "done"})
    self.sudo().message_post(body="Confirmed")  # still sudo
```

```python
# Better: narrow sudo to the line that needs it
def action_confirm(self):
    self.check_access_rights("write")
    self.check_access_rule("write")
    sensitive = self.env["res.company"].sudo().browse(self.company_id.id)
    # ... read something the user cannot ...
    self.write({"state": "done"})  # as the real user
```

**SUDO():**

- Sets superuser mode on the environment: **ACL and record rules are skipped**.
- Required for cron jobs, some install hooks, crossing intentional trust boundaries.
- Default in controllers with `auth='none'` / public is *not* an excuse to write business data with sudo blindly — map to a real user when possible.

**WITH_USER(USER):**

```python
as_officer = self.env["library.book"].with_user(officer_user)
as_officer.search([])  # evaluates rules as officer_user
```

Use `with_user` for impersonation tests and for “run this workflow as the document owner” without full superuser. It still respects that user’s ACL/rules (unless chained with sudo).

**CONTEXT IS NOT SECURITY:**

```python
self.with_context(force_company=1)  # affects defaults / company-dependent fields
# Does NOT replace record rules.
```

Attackers control context from RPC more than beginners expect. Never put authorization decisions only in context flags the client can set.

**FAILURE PATTERN — SUDO IN A LOOP OVER USER INPUT:**

```text
Portal user posts book_id=17
Controller:
  request.env['library.book'].sudo().browse(book_id).unlink()

=> Portal just deleted any book. ACL/rules never ran.
```

Fix: operate as `request.env.user` (or a dedicated portal group with strict rules), verify ownership, then mutate.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Rewrite a method that sudo-writes everything into a narrow sudo read + user write. |
| Medium | Unit-style shell test: `with_user` sees subset; `sudo` sees all. |
| Hard | Find and fix a controller/cron that sudo-writes from external input. |

**WHAT THIS UNLOCKS NEXT:**

One database, several legal entities — Phase 31 **multi-company** fields, company-dependent data, and cross-company rules.

---

> **Phase 30 complete?** Continue to [Phase 31](#phase-31---multi-company-development-company_id-company_ids-company-dependent-data-cross-company-security)

---

# PHASE 31 - Multi-Company Development

**Track:** Security

**WHAT YOU WILL BE ABLE TO DO:** Add `company_id` / `company_ids` correctly, apply company record-rule patterns, understand company-dependent fields, and prevent cross-company leakage.

**WHAT YOU SHOULD KNOW FIRST:** Phases 27–30 — full security stack. `res.company` exists in every DB.

**LEARNING RESOURCES:**

- [Security reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [Access rights / multi-company UX](https://www.odoo.com/documentation/18.0/applications/general/users/access_rights.html)
- [Restrict data access](https://www.odoo.com/documentation/18.0/developer/tutorials/restrict_data_access.html)
- [Multi-company patterns](https://www.youtube.com/watch?v=hwfhO2IGhmc)
- [odoo/odoo — company rules in base](https://github.com/odoo/odoo)

## 31.1 company_id, Allowed Companies, and Dependent Fields

Multi-company is not a checkbox — it is a data model:

```python
class LibraryBook(models.Model):
    _name = "library.book"
    _check_company_auto = True

    name = fields.Char(required=True)
    company_id = fields.Many2one(
        "res.company",
        required=True,
        default=lambda self: self.env.company,
        index=True,
    )
    author_id = fields.Many2one("res.partner", check_company=True)
```

- **`env.company`** — current working company.
- **`env.companies` / `user.company_ids`** — companies the user may switch into.
- **`check_company=True`** — relational consistency: related records must share company (or be company-empty when allowed).
- **`_check_company_auto`** — enables automatic consistency checks on writes.

**STANDARD RECORD RULE PATTERN:**

```xml
<field name="domain_force">[
    '|',
    ('company_id', '=', False),
    ('company_id', 'in', company_ids),
]</field>
```

`company_ids` in rule evaluation refers to the user’s allowed companies. Empty `company_id` often means “shared across companies” — use deliberately (products sometimes; accounting rarely).

**COMPANY-DEPENDENT FIELDS:**

Some fields store **per-company values** (property-like / `company_dependent=True`). Reading them respects the active company. Writing in the wrong company silently affects another slice of data — always test with company switching.

```text
User active company = Qatar Co
  read product.standard_price  -> Qatar value

Switch to UAE Co
  read product.standard_price  -> UAE value

Same product row, different property bag.
```

**CROSS-COMPANY FAILURES:**

```text
Bad:  sale order company A, invoice company B, no checks
Bad:  record rule missing on custom model that holds money
Bad:  sudo() search without company domain in a multi-co cron

Good: company_id on transactional models
Good: check_company on money/partner links
Good: rules using company_ids
Good: tests with two companies + two users
```

**STORY PROJECT — SECURE MULTI-COMPANY MODULE**

Deliver a small module (or extend your library) that proves isolation:

| Check | Evidence |
| ----- | -------- |
| Groups User/Manager | XML + Settings matrix |
| ACL CSV | Non-admin AccessError without rights |
| Record rules | User A cannot read User B rows (or company B rows) |
| `company_id` on main model | Created records default to `env.company` |
| Company rule | User limited to company_ids sees only those rows |
| No sudo laundering | Business methods pass `with_user` tests |
| Menu `groups=` | Matched by real ACL (not UI-only) |

Write a short SECURITY.md in the module: who can do what, in one page.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add `company_id` defaulting to `env.company`. |
| Medium | Install the standard company rule domain; test with two companies. |
| Hard | Full story project: two companies, two users, zero cross leakage on your model. |

**WHAT THIS UNLOCKS NEXT:**

Your app is secure and usable. Story IX teaches how to **extend official Odoo apps** — `_inherit`, `_inherits`, real view patches, and Sales/Purchase/Inventory customizations — without breaking upgrades.

---

> **Phase 31 complete?** Continue to [Phase 32](#phase-32---model-inheritance-_inherit-classical-inheritance-extension-super)

---

# PHASE 32 - Model Inheritance

**Track:** Extension

**WHAT YOU WILL BE ABLE TO DO:** Extend existing models with `_inherit`, choose classical vs extension patterns, and override methods safely with `super()` under Odoo’s multi-module MRO.

**WHAT YOU SHOULD KNOW FIRST:** Stories IV–VI (models/ORM) and VII–VIII (views/security). You can build standalone models; production work extends `sale.order`, `res.partner`, etc.

**LEARNING RESOURCES:**

- [odoo/odoo — inheritance patterns in addons](https://github.com/odoo/odoo)
- [View architectures (pair with model inherit)](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [Inherit vs inherits](https://www.youtube.com/watch?v=mzg3EGD_6Gw)
- [Security reference — field groups still apply](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)

## 32.1 _inherit: Extension and Classical Patterns

Odoo inheritance is registry merging, not only Python `class Child(Parent)`.

**EXTENSION (MOST COMMON):**

Same `_name` as an existing model (often omitted when equal to inherit), plus `_inherit`:

```python
class SaleOrder(models.Model):
    _inherit = "sale.order"

    library_pickup = fields.Boolean(
        string="Library Pickup",
        help="Deliver to library desk instead of shipping.",
    )

    def action_confirm(self):
        res = super().action_confirm()
        pickup = self.filtered("library_pickup")
        if pickup:
            pickup._notify_library_desk()
        return res

    def _notify_library_desk(self):
        for order in self:
            order.message_post(body="Library pickup requested.")
```

Result: **same table**, merged fields/methods. Every module depending on `sale` that also inherits `sale.order` participates in one MRO.

**CLASSICAL INHERITANCE (NEW MODEL, SHARED TABLE BEHAVIOR):**

```python
class LibraryOffer(models.Model):
    _name = "library.offer"
    _inherit = ["mail.thread", "mail.activity.mixin"]
    _description = "Library Offer"

    name = fields.Char(required=True)
```

Here `_name` is new; `_inherit` pulls **mixin / parent** behavior (often abstract models). Distinct from delegation (`_inherits`) in Phase 33.

**SUPER() DISCIPLINE:**

```text
Module A overrides action_confirm -> super -> core
Module B overrides action_confirm -> super -> A -> core

Depends order + MRO decide who runs first.
Skipping super() drops other modules' and core behavior
(confirm without stock moves, etc.).
```

Always call `super()` unless you intentionally replace the workflow (document why). For `create`, prefer `@api.model_create_multi` and call super on the batch.

**SECURITY NOTE:**

Extending a model reuses its ACL. New sensitive fields are still readable to anyone who can read the model — use `groups=` on field definitions for field-level restriction where appropriate, plus UI inherit.

```python
salary_extra = fields.Float(groups="hr.group_hr_manager")
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | `_inherit` `res.partner` with one Char field. |
| Medium | Override a method with `super()` and a side effect. |
| Hard | Two modules override the same method; predict order from `depends`. |

**WHAT THIS UNLOCKS NEXT:**

Sometimes you must not widen `res.partner` for every app. Phase 33 **`_inherits`** delegates identity to a parent row instead.

---

> **Phase 32 complete?** Continue to [Phase 33](#phase-33---delegation-_inherits)

---

# PHASE 33 - Delegation

**Track:** Extension

**WHAT YOU WILL BE ABLE TO DO:** Compose models with `_inherits` delegation, create parent rows correctly, and choose `_inherit` vs `_inherits` with a clear criterion.

**WHAT YOU SHOULD KNOW FIRST:** Phase 32 — extension inheritance. Relational fields (Many2one) from Story IV.

**LEARNING RESOURCES:**

- [odoo/odoo — product.template / product.product delegation](https://github.com/odoo/odoo)
- [_inherit vs _inherits explained](https://www.youtube.com/watch?v=hwfhO2IGhmc)
- [Security still applies on both tables](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)

## 33.1 _inherits: Composition Through a Parent Row

**Delegation** creates a **new** model/table that links to a parent via a required Many2one. Parent fields are readable/writable through the child as if they were local.

```python
class LibraryMember(models.Model):
    _name = "library.member"
    _description = "Library Member"
    _inherits = {"res.partner": "partner_id"}

    partner_id = fields.Many2one(
        "res.partner",
        required=True,
        ondelete="cascade",
        delegate=True,
    )
    card_number = fields.Char(required=True, copy=False)
    membership_level = fields.Selection(
        [("bronze", "Bronze"), ("silver", "Silver"), ("gold", "Gold")],
        default="bronze",
    )
```

```text
library.member                         res.partner
+------------------+                   +----------------+
| id               |                   | id             |
| partner_id  -----+------------------>| name           |
| card_number      |                   | email          |
| membership_level |                   | phone          |
+------------------+                   +----------------+

member.email  ==  member.partner_id.email   (delegated)
create({name: "Ada", card_number: "L-1"})
  -> creates partner + member
```

**_INHERIT VS _INHERITS:**

| | `_inherit` extension | `_inherits` delegation |
| - | -------------------- | ---------------------- |
| Table | Same as parent model | New table + parent row |
| Use when | Field/behavior belongs on the official model for all | Specialized role with its own identity |
| Example | `sale.order` pickup flag | `product.product` → `product.template`; member → partner |
| Risk | Polluting core model with niche columns | Create/unlink cascades; extra joins |

**ACL:** both models need access rights. Delegated writes still touch `res.partner` — partner ACL/rules apply when the ORM writes through.

**WHEN NOT TO DELEGATE:**

If you only need a couple of related fields, a Many2one + `related=` fields may be simpler. Use `_inherits` when the child *is-a* specialized partner/product with its own lifecycle and screens.

**DECISION TREE:**

```text
Need extra behavior on an official document used everywhere?
  -> _inherit extension (same _name) + view xpath

Need a specialized role with its own menu, ACL, and identity,
while reusing partner/product fields?
  -> _inherits delegation (new _name + parent Many2one)

Need shared methods only (chatter, activities)?
  -> _inherit abstract mixins (mail.thread, ...) with a NEW _name

Need a one-off related display field?
  -> Many2one + related=  (no inheritance ceremony)
```

**UNLINK / ONDELETE:**

`ondelete="cascade"` on `partner_id` means deleting the member can delete the partner — catastrophic if that partner is also a customer. Prefer `restrict` or careful business methods when the parent is shared master data. Official `product.product` / `product.template` carefully owns that lifecycle; copy the pattern, do not invent cascades casually.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Sketch member→partner tables and which fields live where. |
| Medium | Implement `_inherits` member; create from UI and find both rows in DB. |
| Hard | Decide inherit vs inherits for “Patient” in a clinic app; write three sentences justifying. |

**WHAT THIS UNLOCKS NEXT:**

Model extension alone does not change screens. Phase 34 applies **view inheritance in real modules** — denser XPath against official arches.

---

> **Phase 33 complete?** Continue to [Phase 34](#phase-34---view-inheritance-in-real-modules)

---

# PHASE 34 - View Inheritance in Real Modules

**Track:** Extension

**WHAT YOU WILL BE ABLE TO DO:** Patch dense official form/list/search arches with reliable XPath, coordinate primary/secondary inherits, and survive upstream structure changes safely.

**WHAT YOU SHOULD KNOW FIRST:** Phase 26 — XPath basics. Phase 32 — fields exist on the extended model.

**LEARNING RESOURCES:**

- [View architectures](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [sale / purchase / stock view XML in odoo/odoo](https://github.com/odoo/odoo)
- [Real-module inheritance](https://www.youtube.com/watch?v=r11U1pqGqQQ)

## 34.1 Production-Grade View Patches

Official forms are deep: headers, button boxes, notebooks with named pages, one2many embedded lists. Your job is to anchor on **names**, not positions.

```xml
<record id="view_order_form_inherit_library" model="ir.ui.view">
    <field name="name">sale.order.form.inherit.library</field>
    <field name="model">sale.order</field>
    <field name="inherit_id" ref="sale.view_order_form"/>
    <field name="arch" type="xml">
        <xpath expr="//div[@name='button_box']" position="inside">
            <button name="action_open_library_pickups" type="object"
                    class="oe_stat_button" icon="fa-book"
                    invisible="not library_pickup">
                <div class="o_stat_info">
                    <span class="o_stat_text">Library</span>
                </div>
            </button>
        </xpath>

        <xpath expr="//page[@name='other_information']" position="inside">
            <group string="Library">
                <field name="library_pickup"/>
            </group>
        </xpath>

        <xpath expr="//field[@name='partner_id']" position="after">
            <field name="library_card_number"/>
        </xpath>
    </field>
</record>
```

**LIST / SEARCH INHERITS:**

```xml
<xpath expr="//list" position="inside">
    <field name="library_pickup" optional="hide"/>
</xpath>

<xpath expr="//filter[@name='my_sale_orders_filter']" position="after">
    <filter name="filter_library_pickup" string="Library Pickup"
            domain="[('library_pickup', '=', True)]"/>
</xpath>
```

(Exact upstream filter names vary by version — always copy from the parent arch in source.)

**UPGRADE BREAKAGE:**

```text
Odoo 18.0 -> 18.1a moves partner_id into another group
  Your xpath //field[@name='partner_id'] still works
  Your xpath //group[2]/field[1] dies

On -u failure:
  1. Open parent view arch (UI or source)
  2. Fix expr to a named anchor
  3. Avoid replace of huge subtrees
```

**PRIMARY VS EXTENSION VIEWS:**

Setting `mode` / primary inherits (duplicate as new root) is rarely needed for app customization. Prefer extension inherits (`inherit_id` without replacing the whole view) so all modules share one form.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add optional list column via inherit on an official list. |
| Medium | Stat button in `button_box` + field on a named page. |
| Hard | Inherit search view with a new filter; verify with `-u` after editing parent anchors. |

**WHAT THIS UNLOCKS NEXT:**

Apply the full stack to **Sales, Purchase, and Inventory** — the modules employers care about first.

---

> **Phase 34 complete?** Continue to [Phase 35](#phase-35---extending-sales--purchase--inventory)

---

# PHASE 35 - Extending Sales / Purchase / Inventory

**Track:** Extension

**WHAT YOU WILL BE ABLE TO DO:** Customize `sale.order`, purchase, and stock workflows with fields, super() hooks, view inherits, and security that respects official flows.

**WHAT YOU SHOULD KNOW FIRST:** Phases 32–34 — model + view inheritance. Story VIII — do not ship customizations without ACL awareness.

**LEARNING RESOURCES:**

- [View architectures](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [Security reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [odoo/odoo addons: sale, purchase, stock](https://github.com/odoo/odoo)
- [Extending business flows](https://www.youtube.com/watch?v=mzg3EGD_6Gw)

## 35.1 Sales, Purchase, and Stock Extension Patterns

**SALES — HOOK THE LIFECYCLE, DO NOT FORK IT:**

```python
class SaleOrder(models.Model):
    _inherit = "sale.order"

    client_po_ref = fields.Char(string="Client PO")

    def action_confirm(self):
        for order in self:
            if order.library_pickup and not order.client_po_ref:
                raise UserError("Client PO required for library pickup orders.")
        return super().action_confirm()
```

Extend lines similarly (`sale.order.line`) for product-level flags. Prefer constraints (`@api.constrains`) for invariant checks that must hold beyond one button.

**PURCHASE — MIRROR DISCIPLINE:**

```python
class PurchaseOrder(models.Model):
    _inherit = "purchase.order"

    laboratory_required = fields.Boolean()

    def button_approve(self, force=False):
        res = super().button_approve(force=force)
        self.filtered("laboratory_required")._create_lab_activity()
        return res
```

Know the official method names (`button_confirm`, `button_approve`, `button_cancel`) from the version you run — read the source, do not invent hooks.

**INVENTORY / STOCK:**

```python
class StockMove(models.Model):
    _inherit = "stock.move"

    def _action_done(self, cancel_backorder=False):
        res = super()._action_done(cancel_backorder=cancel_backorder)
        # never swallow errors from super; stock quant integrity depends on it
        return res
```

Stock is unforgiving: skipping `super()` or sudo-writing quants is how production inventory corrupts. Extend carefully; test with reserved quantities.

**DEPENDS AND DATA:**

```python
# __manifest__.py
{
    "name": "Library Sales Bridge",
    "depends": ["sale_management", "stock", "library_app"],
    "data": [
        "views/sale_order_views.xml",
        "security/ir.model.access.csv",  # only if you add NEW models
    ],
}
```

New *models* need ACL. Pure field extension on `sale.order` reuses sale’s access — still hide sensitive fields with `groups=` when needed.

**CROSS-APP CONSISTENCY:**

```text
sale.order (library_pickup)
    |
    v  on confirm
stock.picking / moves  (carry a related flag if warehouse must see it)
    |
    v
custom report / activity for library desk
```

Pass information through fields on official documents rather than parallel shadow tables when the business document *is* the sales order.

**STORY PROJECT — CUSTOMIZE AN OFFICIAL ODOO APP**

Build `library_sale_bridge` (name flexible) that:

1. Depends on `sale_management` (and stock if you touch deliveries).
2. Adds ≥2 fields on `sale.order` and/or `sale.order.line`.
3. Overrides one workflow method with `super()` + validation or side effect.
4. Inherits `sale.view_order_form` (and list/search) via XPath — no full form copy.
5. Adds a search filter for the customization.
6. Includes a short README: upgrade notes + which XPath anchors you rely on.
7. Passes a manual test: confirm order as a sales user (non-admin); AccessError-free; stock/sale still completes.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add a Char on `sale.order` + form XPath. |
| Medium | `action_confirm` guard with `UserError` + super. |
| Hard | Full story project including list filter and non-admin test. |

**WHAT THIS UNLOCKS NEXT:**

You can build UIs, lock them down across companies, and extend official apps without forks. Story X starts **advanced business features** — wizards, sequences, cron, automated actions, chatter, reports — the automation layer on top of stable models and screens.

---

> **Phase 35 complete?** [Story IX project](#phase-35---extending-sales--purchase--inventory) · Continue to Story X (Phase 36 — Wizards & TransientModel)

---

# PHASE 36 - Wizards & TransientModel

**Track:** Advanced Features

**WHAT YOU WILL BE ABLE TO DO:** Build multi-step dialogs with `models.TransientModel`, collect input from list/form selections via `active_ids`, apply business changes once, and close the dialog without polluting permanent tables.

**WHAT YOU SHOULD KNOW FIRST:** Phase 35 — you can extend Sales / Purchase / Inventory with fields and methods. Phase 23 — form views and buttons. Phase 25 — `ir.actions.act_window` and bindings. Phase 14 — `create` / `write` on real models.

**LEARNING RESOURCES:**

- [ORM — Transient models (Odoo 18)](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#transient-models)
- [Actions — window target `new`](https://www.odoo.com/documentation/18.0/developer/reference/backend/actions.html)
- [View architectures](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [odoo/odoo](https://github.com/odoo/odoo) — search `TransientModel` under `addons/` for real wizards
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

## 36.1 Why Permanent Models Are the Wrong Tool for Dialogs

Story IX left you able to customize standard apps: add a field, override a method, inherit a view. That is enough for “always-on” business data. It is the wrong tool for a one-shot question.

Imagine a warehouse manager selects twenty delivery orders and needs to “set a new scheduled date for all of them.” If you invent `stock.picking.bulk.date` as a normal `models.Model`, every click creates rows that live forever. Tomorrow the table has millions of sticky notes nobody will ever open again. Auditors ask why personal draft choices are in the production schema. That is the limit this phase removes.

**A wizard is not a business document.** It is a short-lived form that gathers parameters, then calls real business methods on real records, then disappears.

```text
List: select 20 pickings
        |
        v
Action menu → wizard dialog (TransientModel row)
        |
        v
User picks new date → Apply
        |
        v
Python writes stock.picking (real Model)
        |
        v
Dialog closes; transient row will be vacuumed later
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name three UI flows in Sales that feel like wizards (bulk update, confirm with options, import helper). |
| Medium | For each, say what permanent model should change vs what is only dialog input. |
| Hard | Explain why logging “who ran the bulk update” belongs on the *picking* chatter or a dedicated audit model — not on the wizard table. |

**WHAT THIS UNLOCKS NEXT:**

You know the *job*. Next: the class that makes temporary rows first-class — `TransientModel`.

---

## 36.2 TransientModel: Temporary Rows With Real ORM

`models.TransientModel` is still an ORM model. It has fields, constraints, `create`/`write`, and a PostgreSQL table. The difference is **lifecycle and access**:

- Records are meant to be **short-lived**.
- Odoo regularly **vacuums** old transient rows (`_transient_vacuum`), using limits such as `_transient_max_hours` (default around one hour) and optional `_transient_max_count`.
- Access is simplified: users can create; they normally only see **their own** transient records. The superuser sees all.

```python
from odoo import api, fields, models


class PickingScheduleWizard(models.TransientModel):
    _name = "stock.picking.schedule.wizard"
    _description = "Reschedule selected pickings"

    scheduled_date = fields.Datetime(required=True)
    picking_ids = fields.Many2many("stock.picking", string="Pickings")

    @api.model
    def default_get(self, fields_list):
        res = super().default_get(fields_list)
        active_ids = self.env.context.get("active_ids", [])
        if self.env.context.get("active_model") == "stock.picking" and active_ids:
            res["picking_ids"] = [(6, 0, active_ids)]
        return res

    def action_apply(self):
        self.ensure_one()
        if not self.picking_ids:
            raise models.UserError("Select at least one picking.")
        self.picking_ids.write({"scheduled_date": self.scheduled_date})
        return {"type": "ir.actions.act_window_close"}
```

**HOW `active_ids` REACH THE WIZARD:**

When a user selects rows in a list and opens an Action, the client puts `active_model`, `active_id`, and `active_ids` into the action **context**. Your wizard’s `default_get` (or field defaults) reads that context. Never assume the user is still looking at the same list when `action_apply` runs — trust the Many2many you stored on the wizard, or re-browse `active_ids` carefully.

**TRANSIENT VS ABSTRACT VS MODEL:**

| Class | Stored? | Typical use |
| ----- | ------- | ----------- |
| `Model` | Yes, permanent | Orders, partners, products |
| `TransientModel` | Yes, vacuumed | Wizards, assistants |
| `AbstractModel` | No table | Mixins (`mail.thread`) |

**WHERE WIZARDS FAIL:**

- Putting long-term audit data only on the transient row (it will vanish).
- Doing heavy work without batching (`for picking in self.picking_ids: picking.do_something()` with N queries).
- Returning nothing useful — prefer `act_window_close`, a reload action, or a notification client action so the user sees the result.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write a TransientModel with one required Char and an `action_apply` that raises if empty. |
| Medium | Implement `default_get` that copies `active_ids` into a Many2many. |
| Hard | Add an `@api.constrains` that rejects a date in the past; show the message in the dialog. |

**WHAT THIS UNLOCKS NEXT:**

A model without a view is invisible. The next lesson wires the modal action and list binding.

---

## 36.3 Wizard Views, `target="new"`, and Bindings

Open the wizard with an `ir.actions.act_window` whose `res_model` is the transient model, `view_mode` is `form`, and **`target` is `new`** (modal dialog). Bind it to the host model so it appears under **Action** on list/form.

```xml
<record id="action_picking_schedule_wizard" model="ir.actions.act_window">
    <field name="name">Reschedule</field>
    <field name="res_model">stock.picking.schedule.wizard</field>
    <field name="view_mode">form</field>
    <field name="target">new</field>
    <field name="binding_model_id" ref="stock.model_stock_picking"/>
    <field name="binding_view_types">list,form</field>
</record>

<record id="view_picking_schedule_wizard_form" model="ir.ui.view">
    <field name="name">stock.picking.schedule.wizard.form</field>
    <field name="model">stock.picking.schedule.wizard</field>
    <field name="arch" type="xml">
        <form string="Reschedule pickings">
            <group>
                <field name="scheduled_date"/>
                <field name="picking_ids" widget="many2many_tags"/>
            </group>
            <footer>
                <button name="action_apply" type="object" string="Apply" class="btn-primary"/>
                <button string="Cancel" special="cancel"/>
            </footer>
        </form>
    </field>
</record>
```

**MULTI-STEP WIZARDS:**

Occasionally `action_apply` returns *another* `act_window` on a second transient model (step 2). Keep that rare. Most business dialogs are one screen. If you need a long assistant, consider a dedicated client action later (Story XIII) — but learn the TransientModel pattern first; it is what core Odoo uses constantly.

**SECURITY NOTE:**

Wizard apply methods run as the logged-in user. They must not `sudo()` casually to “make the write work.” If the user cannot write the picking, the wizard should fail with `AccessError` — that is correct. Grant rights on the real model, not a silent elevation inside Apply.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add Cancel (`special="cancel"`) and primary Apply buttons. |
| Medium | Bind the wizard only to list view; verify form Action menu does not show it. |
| Hard | Return a `display_notification` client action after apply, then close — so users see “20 pickings updated.” |

**WHAT THIS UNLOCKS NEXT:**

Wizards collect decisions. Business documents still need **human-readable numbers** — SO001, INV/2026/0042 — that stay unique under concurrency. That is sequences.

---

> **Phase 36 complete?** You can ship a TransientModel wizard bound to a list, feed it `active_ids`, apply changes to real records, and close the dialog without leaving permanent junk.

---

# PHASE 37 - Sequences

**Track:** Advanced Features

**WHAT YOU WILL BE ABLE TO DO:** Configure `ir.sequence` for document names, call `next_by_code` / `next_by_id` safely, and reason about gaps, company-specific sequences, and concurrency.

**WHAT YOU SHOULD KNOW FIRST:** Phase 36 — wizards. Phase 14 — `create` overrides. Phase 31 — multi-company basics (`company_id`).

**LEARNING RESOURCES:**

- [ORM API (Odoo 18)](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Data files](https://www.odoo.com/documentation/18.0/developer/reference/backend/data.html)
- [odoo/odoo](https://github.com/odoo/odoo) — `addons/base/models/ir_sequence.py`
- Settings → Technical → Sequences (developer mode)

## 37.1 Human Numbers Are Not Primary Keys

PostgreSQL already gives every row an integer `id`. Users do not want to say “order 184392.” They want `SO/2026/0042`. That string is a **sequence-generated name**: readable, often prefixed by year or journal, sometimes per company.

```text
ir.sequence (code = "sale.order")
    prefix: SO/%(year)s/
    padding: 4
    next number: 42
        |
        v
next_by_code("sale.order")  -->  "SO/2026/0042"
        |
        v
sale.order.name = that string
```

Define sequences in XML data (usually `noupdate="1"` so production counters are not reset on `-u`):

```xml
<record id="seq_library_loan" model="ir.sequence">
    <field name="name">Library Loan</field>
    <field name="code">library.loan</field>
    <field name="prefix">LOAN/%(year)s/</field>
    <field name="padding">4</field>
    <field name="company_id" eval="False"/>
</record>
```

```python
@api.model_create_multi
def create(self, vals_list):
    for vals in vals_list:
        if vals.get("name", "New") == "New":
            vals["name"] = self.env["ir.sequence"].next_by_code("library.loan") or "New"
    return super().create(vals_list)
```

**GAPS ARE NORMAL:**

If a transaction rolls back after `next_by_code`, the number may be consumed anyway (implementation detail / locking strategy). Finance people sometimes panic at missing invoice numbers. Teach them: **uniqueness and auditability matter more than gapless vanity** unless a local legal rule demands gapless — and gapless sequences have performance and locking costs. Know the trade-off; do not invent homemade counters with `MAX(name)+1` (race conditions).

**COMPANY-SPECIFIC SEQUENCES:**

Multi-company databases often need separate counters per company. `ir.sequence` supports `company_id`. Calling `next_by_code` uses the sequence matching the current company when configured that way. Test with two companies before go-live.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create a sequence in developer mode and call `next_by_code` from the shell. |
| Medium | Wire a custom model’s `name` default through that sequence on create. |
| Hard | Explain why `name = fields.Char(default=lambda self: self.env['ir.sequence'].next_by_code(...))` on the field can surprise you (when defaults evaluate). Prefer create-time assignment for clarity. |

**WHAT THIS UNLOCKS NEXT:**

Documents get numbers when humans click Save. Overnight jobs need numbers — and many other tasks — **without** a human. That is scheduled actions.

---

> **Phase 37 complete?** You can ship an `ir.sequence`, generate names on create, and explain gaps vs homemade `MAX+1` races.

---

# PHASE 38 - Scheduled Actions / Cron

**Track:** Advanced Features

**WHAT YOU WILL BE ABLE TO DO:** Define `ir.cron` jobs that call model methods on a schedule, keep jobs idempotent and short, choose the right user, and avoid “cron that locks the database.”

**WHAT YOU SHOULD KNOW FIRST:** Phase 37 — sequences. Phase 18 — business methods. Phase 30 — `sudo()` discipline. Phase 17 — ORM performance instincts.

**LEARNING RESOURCES:**

- [ORM / automation patterns in core](https://github.com/odoo/odoo) — search `ir.cron` XML under `addons/`
- [Odoo 18 developer reference](https://www.odoo.com/documentation/18.0/developer/reference/backend.html)
- Settings → Technical → Automation → Scheduled Actions (developer mode)

## 38.1 Work That Must Happen When Nobody Is Looking

Confirming an order can trigger stock moves in the same request. Some work must not ride the user’s HTTP click: nightly invoice reminders, cleaning transient leftovers, syncing a carrier API every fifteen minutes, recomputing a heavy KPI.

A **scheduled action** (`ir.cron`) is a database record that says: “call this model’s method on this interval, as this user.”

```text
Odoo cron thread / worker
        |
        v
ir.cron due?  -->  run model.method()
        |
        +--> success: schedule next call
        +--> failure: log exception; do not silently “fix business”
```

```xml
<record id="ir_cron_library_overdue" model="ir.cron">
    <field name="name">Library: flag overdue loans</field>
    <field name="model_id" ref="model_library_loan"/>
    <field name="state">code</field>
    <field name="code">model._cron_flag_overdue()</field>
    <field name="interval_number">1</field>
    <field name="interval_type">hours</field>
    <field name="numbercall">-1</field>
    <field name="active" eval="True"/>
</record>
```

```python
def _cron_flag_overdue(self):
    """Idempotent: safe to run twice in a row."""
    overdue = self.search([
        ("state", "=", "borrowed"),
        ("due_date", "<", fields.Date.context_today(self)),
        ("is_overdue", "=", False),
    ])
    overdue.write({"is_overdue": True})
```

**CRON SAFETY RULES (MEMORIZE THESE):**

1. **Idempotent.** Running twice must not double-charge, double-email, or double-create. Prefer “search what still needs work” over “always create.”
2. **Bounded.** Process batches (`limit=200`) and reschedule or loop carefully. A cron that touches every partner every minute will melt production.
3. **Right user.** Cron runs with a configured user. That user needs ACL/record-rule rights for the work — or you carefully `sudo()` for a narrow system job and document why.
4. **No surprise writes on accounting.** Overnight jobs that post invoices need the same constraints as UI users.
5. **Logging.** Use `_logger` so failures are visible in server logs (Story XV deepens this).

**MULTI-WORKER NOTE:**

In multi-worker deployments, Odoo coordinates cron execution so jobs are not casually duplicated — but your *method* must still be idempotent. Coordination is not a substitute for “check before create.”

**WHEN NOT TO USE CRON:**

If the user must wait for the result of a button, use the button method (or a wizard). Cron is for deferred, periodic, or background work — not for hiding slow UI behind “we’ll get to it eventually” without a status the user can see.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List three jobs in a bookstore that belong on cron vs on a button. |
| Medium | Write an idempotent `_cron_*` method that flags overdue loans without double-notifying (add a boolean or last_notice_date). |
| Hard | Redesign a bad cron that `search([])` on all partners and emails everyone — into a domain + batch limit. |

**WHAT THIS UNLOCKS NEXT:**

Cron is code you ship. Business users also want “when stage changes, create an activity” **without** a developer. Automated actions sit between configuration and code — and can become a maintenance trap if you skip judgment.

---

> **Phase 38 complete?** You can declare `ir.cron`, write an idempotent batch method, and explain why `MAX+1` thinking and unbounded searches are production hazards.

---

# PHASE 39 - Automated Actions

**Track:** Advanced Features

**WHAT YOU WILL BE ABLE TO DO:** Explain base automation (automated actions): triggers, domains, and server actions; know when configuration is enough and when to move logic into a module method.

**WHAT YOU SHOULD KNOW FIRST:** Phase 38 — cron. Phase 21 — states/workflows. Phase 18 — server-side methods. Phase 28–29 — who may change what.

**LEARNING RESOURCES:**

- Settings → Technical → Automation (developer mode) on an Odoo 18 database
- [odoo/odoo](https://github.com/odoo/odoo) — `base_automation` module
- [Odoo 18 developer docs](https://www.odoo.com/documentation/18.0/developer.html)

## 39.1 Configuration That Fires on Record Events

An **automated action** watches a model for events: on creation, on write, on timed condition, sometimes on UI changes depending on edition/modules. When the trigger matches a domain, it runs a **server action**: update a field, send email, create activity, execute Python code (if allowed).

```text
sale.order write(state → sale)
        |
        v
Automated action domain matches?
        |
        v
Server action: create activity for salesperson
```

This is powerful for functional consultants. It is dangerous when every special case becomes a hidden automation nobody version-controls.

**CODE VS AUTOMATION:**

| Reach for… | When |
| ---------- | ---- |
| Automated action | Simple, company-specific glue; reversible; owned by ops |
| Module Python (`@api.model_create_multi`, constraints) | Invariants, security-sensitive writes, reusable product logic |
| Cron | Time-based batch, not “per click” |

**FAILURE MODES STUDENTS MUST NAME:**

- Automation loops: write → automation writes → automation fires again.
- Python server actions in production without review (arbitrary code risk).
- Logic that belongs in `sale.order` living only in DB automation — lost on a staging refresh if not exported.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create an automated action that posts a message when a demo model’s stage changes (on a test DB). |
| Medium | Document one automation you would *refuse* to implement as config (must be code). |
| Hard | Find a loop risk and break it with a domain or a “already processed” flag. |

**WHAT THIS UNLOCKS NEXT:**

Automations often create **activities** and **messages**. Collaboration on a record — chatter, followers, scheduled to-dos — is the next phase.

---

> **Phase 39 complete?** You can place automated actions on the config-vs-code spectrum and avoid loop-prone designs.

---

# PHASE 40 - Mail, Chatter & Activities

**Track:** Advanced Features

**WHAT YOU WILL BE ABLE TO DO:** Mixin `mail.thread` / `mail.activity.mixin`, post messages, manage followers, schedule activities, and keep portal/internal visibility straight.

**WHAT YOU SHOULD KNOW FIRST:** Phase 39 — automations that create activities. Phase 23 — form views. Phase 28–29 — ACL and record rules. Phase 32 — `_inherit` extension.

**LEARNING RESOURCES:**

- [odoo/odoo `mail` module](https://github.com/odoo/odoo/tree/18.0/addons/mail)
- [OWL / web client mention of messaging](https://www.odoo.com/documentation/18.0/developer/howtos/frontend_owl_components.html) — portal/web context later
- Open any Sales Order form in Odoo 18 and use the chatter deliberately

## 40.1 mail.thread: The Collaboration Mixin

Business records are not only fields. People argue on them, attach PDFs, @mention colleagues, and need a history that survives employee turnover. Odoo’s answer is the **chatter**: a message stream on the document.

Inherit the abstract models (mixins):

```python
class LibraryLoan(models.Model):
    _name = "library.loan"
    _inherit = ["mail.thread", "mail.activity.mixin"]
    _description = "Loan"

    name = fields.Char(required=True, tracking=True)
    partner_id = fields.Many2one("res.partner", required=True, tracking=True)
    state = fields.Selection(
        [("draft", "Draft"), ("borrowed", "Borrowed"), ("returned", "Returned")],
        default="draft",
        tracking=True,
    )
```

In the form view, add the chatter:

```xml
<form>
    <sheet><!-- fields --></sheet>
    <chatter/>
</form>
```

`tracking=True` on fields posts subtype messages when values change — the audit trail users expect on important documents.

**POSTING FROM CODE:**

```python
def action_borrow(self):
    for loan in self:
        loan.state = "borrowed"
        loan.message_post(
            body="Loan confirmed for %s" % loan.partner_id.display_name,
            message_type="comment",
            subtype_xmlid="mail.mt_comment",
        )
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add `mail.thread` + chatter to a custom model and post one message from a button. |
| Medium | Track three fields; change them and read the history. |
| Hard | Explain `_mail_post_access` (who may post) vs model write rights — when a user can read but not comment. |

**WHAT THIS UNLOCKS NEXT:**

Messages need an audience. Followers decide who is notified.

---

## 40.2 Messages, Followers, and Notification Boundaries

**Followers** subscribe partners/users to a document. When a message posts with the right subtype, followers may get inbox/email notifications.

```text
library.loan #42
  followers: Ada (salesperson), Library Bot
        |
        v
message_post(...)
        |
        v
mail.mail / notifications for followers (respecting subtypes & muted)
```

**INTERNAL VS SHARED WITH CUSTOMER:**

Not every note should email the customer. Odoo distinguishes note/comment subtypes and has patterns for **internal** notes vs customer-visible messages. Mis-posting a cost negotiation into a customer-visible thread is a real business incident — treat visibility as a feature, not a default.

**SECURITY:**

Chatter does not replace record rules. If a user cannot `read` the loan, they should not see its messages. Portal users (Story XI) get carefully scoped access — never “sudo and dump the whole thread.”

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add yourself as follower on a sales order; post a note; observe the inbox. |
| Medium | From code, `message_subscribe` a responsible user when state becomes borrowed. |
| Hard | Design when customers become followers vs when only internal users follow. |

**WHAT THIS UNLOCKS NEXT:**

Messages are history. **Activities** are future work — calls, to-dos, deadlines on the record.

---

## 40.3 Activities: Scheduled Work on the Document

`mail.activity.mixin` adds activities: “Call customer by Friday,” linked to a user, activity type, and date. Activities appear on the record and in users’ activity views.

```python
def action_borrow(self):
    self.ensure_one()
    self.state = "borrowed"
    self.activity_schedule(
        "mail.mail_activity_data_call",
        user_id=self.env.user.id,
        summary="Remind borrower 2 days before due",
        date_deadline=self.due_date,
    )
```

Automations (Phase 39) often create activities. Cron (Phase 38) often finds overdue activities or overdue documents. Together they form Odoo’s lightweight workflow layer without a separate BPM engine.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Schedule an activity manually from the chatter UI. |
| Medium | Schedule one from Python on state change. |
| Hard | Write a cron that searches overdue activities and posts a digest message to a manager. |

**WHAT THIS UNLOCKS NEXT:**

Collaboration is on-screen. Businesses still need **printable PDFs** — invoices, picks, loan slips. That is QWeb reports.

---

> **Phase 40 complete?** You can mixin chatter and activities, post messages responsibly, and reason about followers and visibility.

---

# PHASE 41 - Reports & QWeb

**Track:** Advanced Features

**WHAT YOU WILL BE ABLE TO DO:** Author QWeb report templates, bind `ir.actions.report`, generate PDFs for recordsets, and keep report logic thin (data on the model, layout in QWeb).

**WHAT YOU SHOULD KNOW FIRST:** Phase 40 — chatter on documents. Phase 22 — XML data files. Phase 23 — views (QWeb is another XML dialect). Phase 37 — document names on PDFs.

**LEARNING RESOURCES:**

- [QWeb / reports in Odoo docs](https://www.odoo.com/documentation/18.0/developer/reference/backend.html)
- [View architectures](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [odoo/odoo](https://github.com/odoo/odoo) — browse `report_` templates in `sale`, `account`, `stock`
- [Website apps overview](https://www.odoo.com/documentation/18.0/applications/websites.html) — QWeb also powers website (Phase 44)

## 41.1 QWeb as a Template Language for Documents

**QWeb** is Odoo’s XML templating engine. For reports, a template renders HTML that wkhtmltopdf (or the configured PDF engine) turns into a PDF. The template receives `docs` (the recordset being printed) and can call model methods.

```xml
<template id="report_library_loan_document">
    <t t-call="web.html_container">
        <t t-foreach="docs" t-as="doc">
            <t t-call="web.external_layout">
                <div class="page">
                    <h2>Loan <span t-field="doc.name"/></h2>
                    <p>Borrower: <span t-field="doc.partner_id"/></p>
                    <p>Due: <span t-field="doc.due_date"/></p>
                </div>
            </t>
        </t>
    </t>
</template>
```

```xml
<record id="action_report_library_loan" model="ir.actions.report">
    <field name="name">Loan Slip</field>
    <field name="model">library.loan</field>
    <field name="report_type">qweb-pdf</field>
    <field name="report_name">my_library.report_library_loan_document</field>
    <field name="report_file">my_library.report_library_loan_document</field>
    <field name="binding_model_id" ref="model_library_loan"/>
    <field name="binding_type">report</field>
</record>
```

**KEEP LOGIC OUT OF THE TEMPLATE:**

Bad: heavy Python-like calculations only in QWeb. Better: computed fields or report helper methods on the model, then `t-field` / `t-esc` in the template. Reports that embed business rules become untestable.

**EXTERNAL LAYOUT:**

Company header/footer come from layout templates. Inherit carefully; do not copy-paste entire invoice reports when you only need one extra line (use `inherit_id` on QWeb templates).

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add a PDF report action bound to your custom model. |
| Medium | Add a table of related lines with `t-foreach`. |
| Hard | Inherit a standard report (e.g. sale order) to add one field without rewriting the whole template. |

**WHAT THIS UNLOCKS NEXT:**

Reports print live data. Companies also move data in bulk — CSV/XML imports and module data files. That discipline is Phase 42.

---

> **Phase 41 complete?** You can ship a QWeb PDF report action and explain why business rules belong on the model, not in the template.

---

# PHASE 42 - Import / Export & Data Files

**Track:** Advanced Features

**WHAT YOU WILL BE ABLE TO DO:** Use UI import/export responsibly, author module XML/CSV data with external IDs, and apply `noupdate` so upgrades do not wipe production configuration.

**WHAT YOU SHOULD KNOW FIRST:** Phase 41 — reports. Phase 22 — XML foundations / external IDs. Phase 8 — module install vs upgrade. Phase 37 — sequences marked `noupdate`.

**LEARNING RESOURCES:**

- [Data files (Odoo 18)](https://www.odoo.com/documentation/18.0/developer/reference/backend/data.html)
- [External IDs / export in UI](https://www.odoo.com/documentation/18.0/developer.html)
- [odoo/odoo](https://github.com/odoo/odoo) — sample `data/*.xml` in any official addon

## 42.1 Two Worlds of “Data”

1. **Operational import** — a user uploads CSV of products into a live database (UI import).
2. **Module data** — XML/CSV shipped in an addon, loaded on `-i` / `-u`, identified by **external IDs** (`module.xml_id`).

```text
UI import                         Module data
---------                         -----------
One database, now                 Every database that installs the module
Easy for ops                      Versioned in Git
Easy to get wrong silently        Needs noupdate strategy
```

**EXTERNAL IDS ARE THE CONTRACT:**

`<record id="product_oak_desk" model="product.product">` creates `my_module.product_oak_desk`. Later upgrades find that row by XML ID instead of inventing duplicates. Never rely on “search by name and hope.”

**NOUPDATE:**

```xml
<data noupdate="1">
    <record id="seq_library_loan" model="ir.sequence">
        <!-- production counter must not reset on -u -->
    </record>
</data>
```

Use `noupdate="1"` for sequences, user-configurable defaults, and anything ops may customize. Leave `noupdate="0"` (default) for views and code-adjacent XML you *do* want refreshed on upgrade — understanding the trade-off is the skill.

**EXPORT FOR MIGRATIONS:**

UI export with external IDs helps move config between DBs. Treat imported security and automation as code review candidates.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Export five partners to CSV; re-import into a test DB. |
| Medium | Ship a demo `data/library_demo.xml` with external IDs for two loans. |
| Hard | Mark a sequence `noupdate="1"`, change prefix in XML, run `-u`, and explain whether the DB changed. |

**WHAT THIS UNLOCKS NEXT:**

Story X’s tools — wizards, sequences, cron, automation, chatter, reports, data files — combine into an **Automated Business Operations** module. Build that before you expose HTTP to the world.

---

> **Phase 42 complete?** You can distinguish UI import from module data, use external IDs, and protect counters with `noupdate`.

---

## STORY PROJECT — Automated Business Operations Module

**Track:** Advanced Features

**Goal:** Ship a small addon (e.g. `library_ops` or `bookstore_ops`) that proves Story X end-to-end — not a screenshot deck.

**Must include:**

1. A real model with sequence-based `name`
2. A TransientModel wizard that bulk-updates selected records
3. An `ir.cron` with an **idempotent** method (document why it is safe twice)
4. `mail.thread` + `mail.activity.mixin` + chatter on the form
5. A QWeb PDF report bound to the model
6. XML data with at least one `noupdate="1"` record (sequence or config)
7. ACL/CSV security consistent with Story VIII habits

**Done when:** A reviewer can install the module on a clean DB, run the wizard, trigger the cron from the UI (Run Manually), print the PDF, and see chatter history.

**WHAT THIS UNLOCKS NEXT:**

Internal users are covered. Customers and public browsers still have no safe doorway into your records. Story XI opens **HTTP controllers, website, and portal** — with CSRF and auth as first-class topics.

---

# PHASE 43 - HTTP Controllers

**Track:** Web & Portal

**WHAT YOU WILL BE ABLE TO DO:** Define `http.Controller` routes with `@http.route`, use `request`, choose `auth` modes (`user`, `public`, `bearer`, `none`), return HTTP/JSON responses, and treat CSRF as mandatory for browser form posts.

**WHAT YOU SHOULD KNOW FIRST:** Story X project complete (or equivalent comfort with models/security). Phase 28–30 — ACL, rules, sudo discipline. Networks intuition: HTTP verbs, cookies, sessions.

**LEARNING RESOURCES:**

- [Web Controllers — Odoo 18](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)
- [Web Services howto](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html)
- [odoo/odoo](https://github.com/odoo/odoo) — `odoo/http.py` and controllers under `addons/website`, `addons/portal`

## 43.1 Controllers: HTTP Entry Points Beside the ORM

The web client talks JSON-RPC to the ORM for normal screens. Sometimes you need a **custom URL**: `/library/status`, a webhook receiver, a public brochure page, a JSON API for a mobile app.

```python
from odoo import http
from odoo.http import request


class LibraryController(http.Controller):

    @http.route("/library/status", type="http", auth="public", website=True, methods=["GET"])
    def status(self, **kwargs):
        count = request.env["library.loan"].sudo().search_count([("state", "=", "borrowed")])
        return request.render("my_library.portal_status_template", {"borrowed": count})
```

**ANATOMY OF `@http.route`:**

| Argument | Meaning |
| -------- | ------- |
| path | URL pattern(s) |
| `type` | `'http'` (forms/pages) or `'json'` (JSON-RPC style body) |
| `auth` | Who runs the code — see below |
| `methods` | Limit verbs (`GET`, `POST`, …) |
| `csrf` | CSRF check for HTTP routes (default **True** for `http`) |
| `cors` | CORS header if browsers call you cross-origin |
| `readonly` | Prefer read-only DB cursor when safe |

**`request`** is the thread-local wrapper: `request.env`, `request.session`, `request.httprequest`, helpers like `make_json_response`, `render`, CSRF helpers.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add a GET route that returns plain text “ok” with `auth="user"`. |
| Medium | Return JSON with `make_json_response` listing fields the user is allowed to see (no sudo). |
| Hard | Override another module’s controller correctly by re-decorating `@http.route()` as the docs require. |

**WHAT THIS UNLOCKS NEXT:**

Routes without a clear **auth** story are security holes. Next: the auth modes and CSRF in depth.

---

## 43.2 Authentication Modes and CSRF

**AUTH MODES (ODOO 18):**

| `auth` | Behavior |
| ------ | -------- |
| `user` | Must be logged in; `request.env` is that user |
| `public` | May be anonymous; runs as the shared **Public** user if guest |
| `bearer` | API token via `Authorization: Bearer …`, else session user |
| `none` | No DB user facilities — framework/login style; rare in business modules |

```text
Browser form POST without CSRF token
        |
        v
HttpDispatcher checks csrf (default on for type=http)
        |
        X  rejected — forged cross-site post blocked
```

**CSRF — WHY IT EXISTS:**

If a user is logged into Odoo and visits an attacker’s page, the attacker could auto-POST to `/your/route` using the victim’s cookies. CSRF tokens bind the form to the session (`request.csrf_token()`). **Do not set `csrf=False` unless** you have another strong authenticity check (shared secret signature, verified webhook HMAC, etc.) and you understand the risk.

JSON routes default CSRF off because they are not classic HTML form posts — that does **not** mean “open to the world.” Still require `auth` and authorization.

**PUBLIC + SUDO IS A LOADED GUN:**

`auth="public"` plus `sudo()` is how partner data leaks. Prefer:

- `auth="user"` for private APIs
- Portal security groups for customers (Phase 45)
- Explicit record rules
- Narrow sudo only after validating an unguessable token

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Render a QWeb form that includes a CSRF token field. |
| Medium | Attempt POST without token on a csrf-protected route; observe failure. |
| Hard | Design a webhook route with `csrf=False` **and** HMAC verification (preview of Phase 49). |

**WHAT THIS UNLOCKS NEXT:**

Controllers can render pages. The **website** app adds page management, menus, and public-facing QWeb layouts.

---

> **Phase 43 complete?** You can declare secure routes, pick auth modes deliberately, and explain CSRF without disabling it “to make the demo work.”

---

# PHASE 44 - Website Development

**Track:** Web & Portal

**WHAT YOU WILL BE ABLE TO DO:** Build website pages with QWeb, serve dynamic content through website controllers, and keep public templates free of private fields.

**WHAT YOU SHOULD KNOW FIRST:** Phase 43 — controllers, auth, CSRF. Phase 41 — QWeb basics. Phase 7 — module structure (`views/`, templates).

**LEARNING RESOURCES:**

- [Odoo Websites applications](https://www.odoo.com/documentation/18.0/applications/websites.html)
- [HTTP controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)
- [odoo/odoo `website` module](https://github.com/odoo/odoo/tree/18.0/addons/website)

## 44.1 Public Pages on the Same Database

The website is not a separate CMS database. It is Odoo modules rendering QWeb for visitors, with `website=True` on routes and website-aware menus. Editors can drag blocks in Website Builder; developers add structured dynamic pages when the builder is not enough.

```python
@http.route("/books", type="http", auth="public", website=True)
def book_catalog(self, **kwargs):
    books = request.env["product.template"].search([("sale_ok", "=", True)], limit=50)
    return request.render("my_library.book_catalog_page", {"books": books})
```

```xml
<template id="book_catalog_page" name="Book catalog">
    <t t-call="website.layout">
        <div class="container">
            <h1>Books</h1>
            <t t-foreach="books" t-as="book">
                <div t-field="book.name"/>
            </t>
        </div>
    </t>
</template>
```

**DYNAMIC CONTENT RULES:**

- Assume the visitor is hostile or curious.
- Never expose cost, internal notes, or other companies’ data on `auth="public"`.
- Prefer dedicated published fields (`is_published`, website description) over dumping internal form fields.

**WEBSITE VS BACKEND VIEWS:**

Backend form/list XML is for employees. Website templates wrap `website.layout` and must look acceptable on mobile. Do not reuse backend view architecture as a public page.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create a `/hello` website route rendering a name. |
| Medium | List published products only; hide unpublished. |
| Hard | Add a POST form with CSRF that creates a `crm.lead` as public (check field allow-list). |

**WHAT THIS UNLOCKS NEXT:**

Anonymous pages are marketing. Logged-in **customers** need to see *their* orders and invoices — portal, not the backend.

---

> **Phase 44 complete?** You can ship a public website page with safe domains and website layout templates.

---

# PHASE 45 - Portal Development

**Track:** Web & Portal

**WHAT YOU WILL BE ABLE TO DO:** Build portal pages for portal users, enforce portal security (share controllers + record rules), and expose customer records without granting internal groups.

**WHAT YOU SHOULD KNOW FIRST:** Phase 44 — website pages. Phase 29 — record rules. Phase 27 — users/groups (`base.group_portal`). Phase 43 — auth modes.

**LEARNING RESOURCES:**

- [HTTP controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)
- [Security in Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [odoo/odoo `portal` module](https://github.com/odoo/odoo/tree/18.0/addons/portal)
- [Frontend OWL howto](https://www.odoo.com/documentation/18.0/developer/howtos/frontend_owl_components.html) — portal UX may use web components later

## 45.1 Portal Users Are Not Internal Users

A **portal user** logs in with limited rights: typically `base.group_portal`, not `base.group_user`. They use `/my` style pages, not the backend web client menus. They should see **their** quotations, invoices, tickets — never the whole company.

```text
Internal user          Portal user
--------------         -----------
Backend apps           /my portal home
group_user             group_portal
Wide record rules      Partner-scoped rules
```

```python
from odoo.addons.portal.controllers.portal import CustomerPortal
from odoo.exceptions import AccessError, MissingError


class LibraryPortal(CustomerPortal):

    @http.route(["/my/loans", "/my/loans/page/<int:page>"], type="http", auth="user", website=True)
    def portal_my_loans(self, page=1, **kwargs):
        partner = request.env.user.partner_id
        loans = request.env["library.loan"].search([("partner_id", "=", partner.id)])
        return request.render("my_library.portal_my_loans", {"loans": loans})
```

**PORTAL SECURITY — NON-NEGOTIABLES:**

1. **Record rules** on `library.loan` for portal groups: `[('partner_id','=', user.partner_id.id)]` (adjust to your model).
2. Controllers must not `sudo()` and then filter “for convenience” while forgetting an edge case — prefer letting the ORM enforce rules.
3. When using sudo for a composed page, **re-check** ownership (`if loan.partner_id != request.env.user.partner_id: raise AccessError`).
4. Never trust hidden form fields like `loan_id` without verifying access (`_document_check_access` patterns in `CustomerPortal`).
5. ACL: portal usually needs **read** (and limited write) on specific models — not admin.

```python
def _loan_get(self, loan_id):
    loan = request.env["library.loan"].browse(loan_id).exists()
    if not loan or loan.partner_id != request.env.user.partner_id:
        raise AccessError("This loan is not available.")
    return loan
```

**CUSTOMER RECORDS:**

Portal pages show customer-facing fields. Internal chatter notes must not leak. Use message subtypes / portal templates that render only shared messages.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Enable portal on a test partner; log in and open `/my`. |
| Medium | Add `/my/loans` listing only that partner’s loans via record rules. |
| Hard | Add a detail route `/my/loans/<id>` that rejects another partner’s id even if guessed. |

**WHAT THIS UNLOCKS NEXT:**

Story XI ends with a **Customer Self-Service Portal** project. After that, machines — not browsers — need access: Story XII APIs and integrations.

---

> **Phase 45 complete?** You can ship portal routes that survive IDOR attempts and rely on portal groups + record rules.

---

## STORY PROJECT — Customer Self-Service Portal

**Track:** Web & Portal

**Goal:** Extend your Story X operations module (or a thin companion module) with a customer portal slice.

**Must include:**

1. Portal group ACL + record rules for the customer document
2. `/my/...` list and detail pages (`auth="user"`, website layout)
3. CSRF-safe form (e.g. request extension / note) that verifies document ownership
4. Public website teaser page that exposes **no** private fields
5. A short SECURITY.md section: threat (IDOR), mitigations (rules + checks)

**Done when:** Two portal users cannot see each other’s records even when swapping IDs in the URL.

**WHAT THIS UNLOCKS NEXT:**

Humans have UI and portal. External systems need **contracts, RPC, webhooks, and payment-safe APIs** — Story XII.

---

# PHASE 46 - External API Concepts

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Describe integration contracts (identity, auth, resources, errors, idempotency, versioning) before writing code, and choose RPC vs custom REST vs webhook shapes deliberately.

**WHAT YOU SHOULD KNOW FIRST:** Story XI — HTTP auth/CSRF/portal boundaries. Phase 28–30 — security context. Phase 38 — idempotent jobs.

**LEARNING RESOURCES:**

- [Web Services — Odoo 18](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html)
- [HTTP controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)
- [Security in Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [External API tutorial family on odoo.com](https://www.odoo.com/documentation/18.0/developer.html)

## 46.1 Why Integrations Are Not “Just HTTP”

You can already build portals and controllers. The next temptation is to let a mobile app or middleware “talk to the database.” That phrase is dangerous. An integration is a **product surface**: the same business operations humans do in the UI, exposed to machines, with failures, retries, and attackers included.

**WHAT BREAKS WHEN YOU SKIP A CONTRACT:**

```text
Mobile app  --POST /create_order-->  Odoo
   timeout (user retries)
        |
        v
Two orders, two invoices, one angry customer
```

Without identity, authority, idempotency, and error contracts, every network glitch becomes a business incident.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name three systems that might call Odoo in a real company. |
| Medium | For “create sales order from ecommerce,” list what must never duplicate. |
| Hard | Explain why SQL from an external ETL tool bypasses Odoo security. |

**WHAT THIS UNLOCKS NEXT:**

You feel the risk. Next we write the **contract checklist** that every integration design must answer before code.

---

## 46.2 The Integration Contract Checklist

Calling Odoo from a mobile app or middleware is not “just run SQL.” You are exposing **business operations** with the same ACL/record rules as the UI (for RPC) or with explicit controller checks (for custom routes).

**CONTRACT CHECKLIST:**

```text
1. Identity     who is calling? (integration user, API key, OAuth)
2. Authority    what may they read/write?
3. Resources    which models/fields are in the public surface?
4. Errors       4xx vs 5xx; stable error codes
5. Idempotency  retries must not duplicate orders
6. Versioning   how you change the contract without breaking clients
7. Observability logs/metrics without leaking secrets
```

Write this as a one-pager before choosing XML-RPC vs custom JSON. Interviewers ask for it indirectly: “How would you integrate X?” Strong answers start with the contract, not with a library name.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write a one-page contract for “create lead from website form.” |
| Medium | Mark which fields are public vs internal on `res.partner`. |
| Hard | Specify idempotency for “create order” if the client retries after a timeout. |

**WHAT THIS UNLOCKS NEXT:**

Same checklist, different cables. Phase 46.3 compares RPC, custom HTTP, and webhooks so you pick deliberately.

---

## 46.3 RPC vs Custom HTTP vs Webhooks

**RPC VS CUSTOM HTTP VS WEBHOOKS:**

| Style | Fit | Main risk |
| ----- | --- | --------- |
| XML-RPC / JSON-RPC | Server-to-server CRUD using Odoo’s external API | Over-broad fields; admin users |
| Custom `@http.route` JSON | Tailored payloads, mobile, stricter DTOs | Homegrown auth mistakes |
| Incoming webhooks | Third parties push events to you | Unsigned public routes |
| Outgoing webhooks/events | You notify others when records change | Slow HTTP inside transactions |

```text
Choose RPC when:     another backend needs ORM-shaped CRUD quickly
Choose custom JSON when: clients need stable DTOs / mobile shapes
Choose webhooks when: events should push, not poll
Often combine:       RPC or custom API for commands + webhooks for events
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Pick a style for “nightly BI export of invoices” and justify. |
| Medium | Pick a style for “Stripe says payment succeeded.” |
| Hard | Design a hybrid: custom POST create + webhook status updates. |

**WHAT THIS UNLOCKS NEXT:**

Odoo already ships a remote ORM. Phase 47 teaches using **RPC** safely with least-privilege users.

---

> **Phase 46 complete?** You can draft an integration contract and pick RPC vs custom HTTP vs webhooks with reasons.

---

# PHASE 47 - RPC & External Odoo Access

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Authenticate via XML-RPC/JSON-RPC, call `execute_kw` / `execute`, use a least-privilege integration user (and API keys where available), and avoid embedding admin passwords in apps.

**WHAT YOU SHOULD KNOW FIRST:** Phase 46 — contracts. Phase 28–29 — groups and rules. [Web Services howto](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html).

**LEARNING RESOURCES:**

- [Web Services — Odoo 18](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html)
- [odoo/odoo](https://github.com/odoo/odoo) — external API examples in documentation sources
- Prefer official docs over random “Odoo REST” blog posts

## 47.1 Remote ORM: Same Rules, Different Cable

```python
import xmlrpc.client

url = "https://odoo.example.com"
db = "prod"
username = "integration@example.com"
password = "API_KEY_OR_PASSWORD"

common = xmlrpc.client.ServerProxy(f"{url}/xmlrpc/2/common")
uid = common.authenticate(db, username, password, {})

models = xmlrpc.client.ServerProxy(f"{url}/xmlrpc/2/object")
partners = models.execute_kw(
    db, uid, password,
    "res.partner", "search_read",
    [[["is_company", "=", True]]],
    {"fields": ["name", "email"], "limit": 10},
)
```

JSON-RPC uses `/jsonrpc` with `service`/`method`/`args` as in the official howto — same semantics.

**SECURITY PRACTICE:**

- Create a dedicated **integration user** with only needed groups.
- Prefer **API keys** over the user’s real password when the deployment supports them.
- Never commit credentials; rotate on leak.
- Prefer `search_read` with explicit `fields` and `limit`.
- Do not grant admin “so the sync works.” Fix the ACL instead.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Authenticate against a local DB and `search_read` partners. |
| Medium | Create a lead via RPC as a non-admin integration user. |
| Hard | Demonstrate an AccessError when the user lacks create on a model — then fix groups correctly. |

**WHAT THIS UNLOCKS NEXT:**

RPC exposes the ORM shape. Mobile teams often want **your** JSON shapes — custom endpoints (Phase 48).

---

> **Phase 47 complete?** You can call Odoo over XML-RPC/JSON-RPC with a least-privilege user and field-limited reads.

---

# PHASE 48 - Building API Endpoints

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Design versioned JSON HTTP APIs with `@http.route`, authenticate callers, validate payloads, and map errors to stable HTTP statuses.

**WHAT YOU SHOULD KNOW FIRST:** Phase 47 — RPC. Phase 43 — controllers, auth, CSRF. Phase 46 — contract checklist.

**LEARNING RESOURCES:**

- [HTTP controllers — Odoo 18](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html) — note `auth='bearer'`
- [Web Services](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html)

## 48.1 Tailored JSON Without Surrendering Security

```python
@http.route("/api/v1/loans", type="http", auth="bearer", methods=["GET"], csrf=False)
def api_loans(self, **kwargs):
    loans = request.env["library.loan"].search_read(
        [("state", "=", "borrowed")],
        fields=["name", "partner_id", "due_date"],
        limit=50,
    )
    return request.make_json_response({"data": loans})
```

**DESIGN RULES:**

- Version in the path (`/api/v1/...`).
- Auth: `bearer` or `user` + gateway; do not invent homebrew crypto.
- Validate input; reject unknown fields.
- Do not return `sudo()` recordsets “cleaned in Python” without tests for IDOR.
- Map `AccessError` → 403, `MissingError` → 404, `ValidationError` → 400.
- Keep writes transactional; return the new resource id and state.

**CSRF:** machine APIs using tokens typically set `csrf=False` **and** rely on bearer/HMAC auth — never “csrf=False + public + sudo.”

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | GET endpoint returning a count for the authenticated user. |
| Medium | POST endpoint creating a record from JSON with allow-listed keys. |
| Hard | Add pagination cursors/limits and document them in a short OpenAPI-style README. |

**WHAT THIS UNLOCKS NEXT:**

APIs you poll are not enough. Event-driven systems push **webhooks** — with signatures and idempotency.

---

> **Phase 48 complete?** You can ship a versioned, authenticated JSON route that respects ORM security.

---

# PHASE 49 - Webhooks

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Receive incoming webhooks, verify signatures, process events **idempotently**, and design outgoing event notifications without losing or duplicating critical side effects.

**WHAT YOU SHOULD KNOW FIRST:** Phase 48 — custom endpoints. Phase 38 — idempotent cron. Phase 43 — CSRF exceptions only with compensating controls.

**LEARNING RESOURCES:**

- [HTTP controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)
- Provider docs for signature headers (Stripe, GitHub, etc.) — prefer vendor official docs
- [odoo/odoo payment modules](https://github.com/odoo/odoo/tree/18.0/addons) — webhook handlers as reference patterns

## 49.1 Incoming Webhooks: Trust Nothing in the Body Alone

A webhook is an HTTP POST from a third party: “payment succeeded,” “shipment scanned.” Attackers can POST too. Authenticity comes from **signatures** (HMAC of the body with a shared secret) or mTLS — not from hiding the URL.

```text
Provider POST /webhooks/carrier
  Header: X-Signature: hex(hmac(secret, body))
        |
        v
Recompute HMAC; compare with hmac.compare_digest
        |
        +--> mismatch: 401, stop
        +--> match: parse event id; idempotency store
                |
                +--> already processed: 200 OK (no redo)
                +--> new: apply business change; store event id; 200
```

```python
import hashlib
import hmac
import json

from odoo import http
from odoo.http import request


class CarrierWebhook(http.Controller):

    @http.route("/webhooks/carrier", type="http", auth="public", methods=["POST"], csrf=False)
    def carrier_hook(self, **kwargs):
        secret = request.env["ir.config_parameter"].sudo().get_param("carrier.webhook_secret") or ""
        body = request.httprequest.data or b""
        sig = request.httprequest.headers.get("X-Signature", "")
        expected = hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()
        if not secret or not hmac.compare_digest(expected, sig):
            return request.make_json_response({"error": "invalid signature"}, status=401)

        try:
            payload = json.loads(body.decode() or "{}")
        except json.JSONDecodeError:
            return request.make_json_response({"error": "invalid json"}, status=400)

        event_id = payload.get("id")
        Event = request.env["my.webhook.event"].sudo()
        if event_id and Event.search_count([("event_id", "=", event_id)]):
            # Already applied — acknowledge so the provider stops retrying.
            return request.make_json_response({"status": "duplicate"}, status=200)

        # Apply business logic ONCE (write stock, update picking, …) then record the event id.
        # ... domain-specific work here ...
        if event_id:
            Event.create({"event_id": event_id, "name": payload.get("type", "event")})
        return request.make_json_response({"status": "ok"}, status=200)
```

**IDEMPOTENCY IS MANDATORY:**

Providers retry. Your handler will run twice. Use a unique event id table, or an idempotency key, or a natural key (“payment intent X already done”). Return 200 for duplicates after the first success so providers stop retrying — without re-applying side effects.

**OUTGOING EVENTS:**

When Odoo is the source of truth, notify others from `create`/`write` carefully (queues/cron better than slow HTTP in the request). Sign your payloads; document retry policy; expect consumers to be idempotent too.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write a pseudo-handler checklist: verify → dedupe → mutate → persist event id → 200. |
| Medium | Implement HMAC verify + duplicate table for a demo payload. |
| Hard | Simulate retries in a test: second delivery must not double-write stock. |

**WHAT THIS UNLOCKS NEXT:**

Webhooks are one sync style. Broader **SaaS integrations** add polling, mapping, retries, and error handling (Phase 50).

---

> **Phase 49 complete?** You can explain signature verification and build an idempotent webhook receiver that safe-fails on replay.

---

# PHASE 50 - Third-Party Integrations

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Structure REST integrations with authentication, field mapping, sync jobs, retries/backoff, and visible error handling — without scattering HTTP calls across every model method.

**WHAT YOU SHOULD KNOW FIRST:** Phase 49 — webhooks/idempotency. Phase 38 — cron batches. Phase 46 — contracts.

**LEARNING RESOURCES:**

- [Web Services](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html)
- [HTTP](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)
- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- Official REST docs of the vendor you integrate (not SEO blog spam)
- [odoo/odoo](https://github.com/odoo/odoo) — study how payment_* and connector-style addons isolate HTTP

## 50.1 REST APIs and Authentication

A webhook (Phase 49) is a push. Most SaaS syncs are also **pull or push-on-schedule**: Odoo calls a REST API with a token, maps fields, stores an external id, and retries when the network lies. The first design mistake is putting `requests.get(...)` inside every `create`/`write`. That couples your business model to one vendor’s downtime.

**KEEP HTTP BEHIND A SERVICE BOUNDARY:**

```text
library.partner / res.partner  (business facts)
        |
        v
my_module.integration.client   (auth, rate limit, HTTP verbs)
        |
        v
Vendor REST API
```

Authentication patterns you will actually meet:

| Pattern | Typical use | Store secrets in |
| ------- | ----------- | ---------------- |
| API key / bearer token | Server-to-server SaaS | `ir.config_parameter` or vault — never git |
| OAuth2 client credentials | Many modern SaaS | Token + refresh; rotate |
| Basic auth | Legacy APIs | Same as API key — least privilege account |
| Mutual TLS | High-security B2B | Ops-managed certs |

```python
import requests
from odoo import models, api
from odoo.exceptions import UserError


class VendorClient(models.AbstractModel):
    _name = "vendor.api.client"
    _description = "HTTP client for Vendor SaaS"

    def _base_url(self):
        return self.env["ir.config_parameter"].sudo().get_param("vendor.api_url")

    def _headers(self):
        token = self.env["ir.config_parameter"].sudo().get_param("vendor.api_token")
        if not token:
            raise UserError("Vendor API token is not configured.")
        return {"Authorization": f"Bearer {token}", "Accept": "application/json"}

    def request(self, method, path, **kwargs):
        url = f"{self._base_url().rstrip('/')}/{path.lstrip('/')}"
        timeout = kwargs.pop("timeout", 30)
        response = requests.request(method, url, headers=self._headers(), timeout=timeout, **kwargs)
        return response
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List three secrets that must never appear in a repo or screenshot. |
| Medium | Sketch `_headers()` for API key vs OAuth2 client-credentials (refresh step included). |
| Hard | Argue why calling the vendor from `res.partner.create` is worse than a dedicated client + cron. |

**WHAT THIS UNLOCKS NEXT:**

Auth gets you in the door. Synchronization needs **mapping**, **external ids**, and a strategy for “who owns the truth.”

---

## 50.2 Synchronization and Field Mapping

Two systems almost never share the same field names. Odoo’s `email` might be Vendor’s `primaryEmail`. Odoo’s `vat` might be optional while Vendor requires `taxId`. Mapping is a product decision: which system is master for each field?

**EXTERNAL IDS ARE THE JOIN KEY:**

```python
class ResPartner(models.Model):
    _inherit = "res.partner"

    vendor_id = fields.Char(index=True, copy=False)
    vendor_sync_state = fields.Selection(
        [
            ("idle", "Idle"),
            ("pending", "Pending"),
            ("error", "Error"),
        ],
        default="idle",
    )
    vendor_last_error = fields.Text()
    vendor_need_sync = fields.Boolean(default=False)
```

```text
Push (Odoo → Vendor):
  pending partners --> map fields --> POST/PUT --> store vendor_id

Pull (Vendor → Odoo):
  list remote changes --> match vendor_id --> write allow-listed fields

Conflict:
  last-write-wins is crude; field-level ownership is clearer
  (Odoo owns phone; Vendor owns marketing opt-in)
```

Prefer **upsert by external id** (`PUT /contacts/{vendor_id}`) over blind `POST` create. Blind creates duplicate contacts every retry.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Draw a table: Odoo field → Vendor field → who is master. |
| Medium | Add `vendor_id` + sync state fields to a training model. |
| Hard | Specify conflict rules for email changes on both sides in the same hour. |

**WHAT THIS UNLOCKS NEXT:**

Mapping assumes the HTTP call succeeds. Networks fail. Phase 50.3 is retries and error handling that do not amplify outages.

---

## 50.3 Retries, Backoff, and Error Handling

```text
Attempt 1  -->  timeout
wait 2s
Attempt 2  -->  502
wait 4s
Attempt 3  -->  200 OK
```

| HTTP outcome | Retry? | Why |
| ------------ | ------ | --- |
| 408 / 429 / 5xx / timeout | Yes (bounded) | Transient |
| 401 / 403 | No (alert ops) | Auth/config broken |
| 400 / 422 | No (fix payload) | Your mapping is wrong |
| 404 on PUT by id | Maybe create-once | Resource deleted remotely |

```python
import time
import logging
_logger = logging.getLogger(__name__)


def request_with_retry(client, method, path, attempts=3, **kwargs):
    delay = 2
    last = None
    for attempt in range(1, attempts + 1):
        response = client.request(method, path, **kwargs)
        last = response
        if response.status_code in (408, 429, 500, 502, 503, 504):
            _logger.warning("vendor %s %s attempt %s -> %s", method, path, attempt, response.status_code)
            if attempt < attempts:
                time.sleep(delay)
                delay *= 2
                continue
        return response
    return last
```

**CRON BATCHES BEAT REQUEST-PATH HTTP:**

```python
def cron_push_partners(self):
    partners = self.search([("vendor_need_sync", "=", True)], limit=50)
    Client = self.env["vendor.api.client"]
    for partner in partners:
        try:
            # map + upsert; set vendor_id; clear need_sync
            partner.vendor_sync_state = "idle"
            partner.vendor_last_error = False
            partner.vendor_need_sync = False
        except Exception as exc:
            partner.vendor_sync_state = "error"
            partner.vendor_last_error = str(exc)[:2000]
            partner.message_post(body=f"Vendor sync failed: {exc}")
```

Surface failures on the record (status field + chatter). Log correlation ids, never tokens or personal data dumps. Make re-sync idempotent so ops can click “Retry” safely.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Sketch models/fields for syncing contacts to a fictional CRM API. |
| Medium | Write a cron that pushes only `need_sync=True` records with `limit=50`. |
| Hard | Design retry: which HTTP codes retry, which poison-pill to a dead-letter status. |

**WHAT THIS UNLOCKS NEXT:**

Contact sync mistakes are embarrassing. Payment mistakes are legal and financial. **Payment integrations** close Story XII with stricter rules.

---

> **Phase 50 complete?** You can design a sync module with auth isolation, mapping, cron batches, retries, and user-visible failure states.

---

# PHASE 51 - Payment Integrations

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Explain Odoo’s `payment.provider` / `payment.transaction` flow, keep PCI scope small, verify provider webhooks idempotently, and reconcile payment state safely.

**WHAT YOU SHOULD KNOW FIRST:** Phase 49 — signed idempotent webhooks. Phase 50 — integration boundaries. Phase 43 — public routes carefully.

**LEARNING RESOURCES:**

- [odoo/odoo `payment` and `payment_*` addons](https://github.com/odoo/odoo/tree/18.0/addons) — especially `payment_stripe` as a reference
- Official provider docs (Stripe/PayPal/etc.) for webhooks and test mode
- Prefer Odoo core patterns over random “create payment acquirer” blog posts when they conflict

## 51.1 Money Paths Must Be Boring and Strict

Online payment in Odoo typically flows through **payment providers** and **payment transactions**, not a homemade `my.payment` table that ecommerce never sees.

```text
Customer checkout
    --> payment.transaction (draft/pending)
    --> redirect or JS SDK to provider
    --> customer pays
    --> provider webhook (signed)
    --> transaction -> done
    --> Odoo reconciles invoice / order payment state
```

```python
class PaymentProvider(models.Model):
    _inherit = "payment.provider"

    code = fields.Selection(
        selection_add=[("mygateway", "My Gateway")],
        ondelete={"mygateway": "set default"},
    )
```

**PAYMENT SAFETY RULES:**

1. **Never log PAN/CVV.** Never store raw cards if the provider can tokenize.
2. **Trust webhooks (verified) more than browser redirects.** Redirects can be forged; signed webhooks are the source of truth.
3. **Idempotent transaction updates.** Duplicate “payment_intent.succeeded” must not double-confirm.
4. **State machine.** Only allow legal transitions (pending → done/cancel/error).
5. **Amount & currency checks.** Verify webhook amount matches the transaction before marking paid.
6. **Sandbox first.** Test mode keys; replay tools; explicit go-live checklist.
7. **Least privilege.** Webhook routes are public to the network but secret-validated; still avoid sudo beyond the payment models you must write.

**FAILURE MODES:**

| Failure | Bad reaction | Better reaction |
| ------- | ------------ | --------------- |
| Webhook delayed | Mark paid on redirect only | Pending until webhook confirms |
| Retry storm | Create many payments | Upsert by provider reference |
| Partial refund | Ignore | Explicit refund transactions |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Trace a test payment in a demo DB through transaction states. |
| Medium | Write a checklist for verifying signature + amount + idempotency key. |
| Hard | Design refund flow that cannot refund more than captured. |

**WHAT THIS UNLOCKS NEXT:**

Story XII’s project binds API + webhook + sync habits into one **Odoo ↔ External SaaS** integration. After that, Story XIII moves into the **OWL web client** — interactive UI beyond QWeb pages.

---

> **Phase 51 complete?** You can narrate payment.transaction lifecycle and refuse unsafe patterns (log card data, trust redirects alone, non-idempotent webhooks).

---

## STORY PROJECT — Odoo ↔ External SaaS Integration

**Track:** APIs & Integrations

**Goal:** Build a focused integration module (shipping, helpdesk, marketing SaaS, or a mock HTTP server you control).

**Must include:**

1. Written contract (identity, resources, errors, idempotency)
2. Outbound REST client with stored external ids + sync status fields
3. Inbound webhook with **HMAC (or equivalent) verification** and duplicate protection
4. Cron reconciliation job (bounded batch)
5. Dedicated integration user / credentials via config parameters (no hardcoded secrets)
6. Chatter or status field showing last sync error to humans
7. README: how to run against sandbox + how to rotate secrets

**Done when:** Replaying the same webhook twice does not duplicate business side effects, and a reviewer can follow the security story without reading your mind.

**WHAT THIS UNLOCKS NEXT:**

Backend automation, portal, and integrations are in place — but rich interactive backend UI still leans on **OWL, assets, and client actions**. That is Story XIII: Modern Odoo Frontend.

---

# PHASE 52 - Odoo JavaScript Architecture

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Map how the Odoo web client loads — assets, registries, services, and OWL components — and decide when XML views are enough versus when you need JavaScript.

**WHAT YOU SHOULD KNOW FIRST:** Story XII — controllers, RPC, and integrations. Story VII — views, actions, and menus. You can ship business screens in XML; this story starts when the screen must *behave* in ways XML cannot express.

**LEARNING RESOURCES:**

- [OWL components (Odoo 18)](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [Discover the JS framework — OWL components tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [Services reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/services.html)
- [OWL introduction (YouTube)](https://www.youtube.com/watch?v=YJg7dvwXQF8)
- [Odoo architecture overview (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)
- [odoo/owl](https://github.com/odoo/owl) · [odoo/odoo web client](https://github.com/odoo/odoo)

## 52.1 From Server Screens to a Living Client

Story XII closed with Odoo talking to the outside world — RPC, webhooks, payments. Those integrations still land in **views** and **actions** you already know how to declare. For many products that is enough: a form, a list, a button that calls a Python method, a statusbar that moves draft → confirmed.

Then a real requirement shows up that XML alone cannot carry:

- a live KPI strip that refreshes without reloading the whole form
- a drag-and-drop planner that is not a kanban card rename
- a dashboard that composes charts, filters, and RPC calls into one full-screen experience
- a small UX hint that must react instantly to keystrokes before any server round-trip

You are no longer only describing *what fields appear*. You are programming the **browser half** of Odoo.

**THE WEB CLIENT IS AN APPLICATION, NOT A PAGE:**

```text
BROWSER                                              SERVER
+----------------------------------+                 +------------------+
| Web Client (Owl + services)      |   RPC / HTTP    | Odoo Python      |
|  registries | components | assets| <-------------> | ORM + controllers|
+----------------------------------+                 +--------+---------+
                                                               |
                                                               v
                                                         PostgreSQL
```

The client boots once, loads **asset bundles** (JS, CSS, XML templates), starts **services** (notification, rpc, orm, user, router…), and mounts a tree of **OWL components**. Clicking a menu does not download a brand-new website for every screen the way a 2005 ERP might. It asks the client to open an **action**, which mounts the right view or custom component.

That mental model matters because bugs feel different here. A missing CSS class is often “asset not in the right bundle.” A silent RPC failure is often “service used wrong” or “component destroyed mid-await.” An upgrade break is often “you patched a private method that moved.”

## 52.2 Boot Sequence: Assets → Services → Actions

When you open `/web`, roughly this happens (simplified, Odoo 18-shaped):

```text
1. Browser requests the web client shell
2. Asset bundles for backend load (JS modules + XML templates + CSS)
3. Owl environment is created
4. Services registry starts (notification, rpc, orm, user, action, ...)
5. WebClient component mounts (navbar, menus, content area)
6. User clicks a menu → action service loads an action descriptor
7. act_window → standard view controllers
   ir.actions.client → your registered Owl action component
```

**ES MODULES AND `@odoo-module`:**

Modern Odoo JS files are ES modules. The magic comment `/** @odoo-module **/` tells the asset pipeline to treat the file as a module with imports/exports. Imports like `@web/core/registry` or `@odoo/owl` resolve through Odoo’s alias map — you are not configuring Webpack by hand in an addon.

**LEGACY FOOTGUNS:**

| Old habit | Modern replacement |
| --------- | ------------------ |
| jQuery `$(...).on` in random JS | Owl event handlers / patch |
| `odoo.define(...)` AMD (very old) | ES modules + registries |
| Inline `<script>` in form views | Assets + components |
| Copying minified `web.assets` | Never |

If a tutorial still teaches `odoo.define` as the default for new Odoo 18 work, close the tab. Read Odoo 18 frontend docs and `ged-odoo/odoo-js-training-public` instead.

**WHEN XML IS ENOUGH — AND WHEN IT IS NOT:**

| Need | Prefer | Why |
| ---- | ------ | --- |
| Show/hide fields, buttons, domains | XML views + attrs / modifiers | Declarative, upgrade-friendly |
| Call server business logic | `type="object"` button → Python | Keeps rules on the server |
| Light polish (colors, icons) | SCSS in assets | Still declarative packaging |
| Interactive widget / dashboard / custom UX | OWL component + registry | Real client behavior |

The expensive mistake is forking the web client or pasting jQuery from Odoo 13 Stack Overflow into a modern database. Odoo 14+ rebuilt the client around **OWL**. Your job in Story XIII is to extend that architecture the way Odoo intends: modules declare assets, register pieces, patch narrowly, and keep business truth on the server.

**WHERE TO LOOK IN THE REPO (ORIENTATION, NOT MEMORIZATION):**

```text
addons/web/static/src/
  core/          # registries, services, utils, components
  views/         # form, list, kanban controllers & renderers
  webclient/     # shell: menus, action service, navbar
  search/        # search model / facets
```

You will not rewrite those folders. You will **depend on `web`**, ship files under your module’s `static/src/`, and hook into the same registries the core uses.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name three reasons a form might still stay pure XML instead of OWL. |
| Medium | Draw the browser → RPC → ORM path for “user clicks Confirm on a sales order.” Mark where OWL lives. |
| Hard | Open `addons/web/static/src` in a source checkout and list five registry category names you find (grep `registry.category`). |

**WHAT THIS UNLOCKS NEXT:**

You can picture the client as an app with registries and services. You still cannot build a piece of UI inside it. That starts with OWL itself — components, templates, props, state, and lifecycle.

---

> **Phase 52 complete?** [Continue to Phase 53](#phase-53---owl-fundamentals)

---

# PHASE 53 - OWL Fundamentals

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Build a small OWL component with an XML template, typed props, reactive state, and correct lifecycle hooks — following Odoo’s `setup()` convention.

**WHAT YOU SHOULD KNOW FIRST:** Phase 52 — the web client is an Owl application loaded through assets and registries. Basic JavaScript classes and `async`/`await`.

**LEARNING RESOURCES:**

- [OWL components reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [Discover JS framework — 01 Owl components](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [Frontend OWL components howto](https://www.odoo.com/documentation/18.0/developer/howtos/frontend_owl_components.html)
- [OWL introduction (YouTube)](https://www.youtube.com/watch?v=YJg7dvwXQF8)
- [odoo/owl](https://github.com/odoo/owl)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)

## 53.1 Components & Templates

**OWL** (Odoo Web Library) is Odoo’s component system — loosely inspired by ideas you may know from Vue or React, but with **QWeb-style templates** and Odoo-specific packaging. A component is a JavaScript class that owns a template, optional props, and optional local state. The framework mounts it into the DOM and re-renders when reactive state changes.

**THE SMALLEST HONEST COMPONENT:**

```javascript
/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class LoanCounter extends Component {
    static template = "library_mgmt.LoanCounter";
    static props = {
        title: { type: String, optional: true },
    };

    setup() {
        this.state = useState({ count: 0 });
    }

    increment() {
        this.state.count++;
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<templates xml:space="preserve">
    <t t-name="library_mgmt.LoanCounter">
        <div class="o_loan_counter" t-on-click="increment">
            <t t-esc="props.title or 'Loans'"/>:
            <t t-esc="state.count"/>
        </div>
    </t>
</templates>
```

Three packaging rules from the official docs that save upgrade pain:

1. Prefer **XML template files** over inline `xml\`...\`` so strings can be translated and kept next to the component.
2. Name templates `addon_name.ComponentName` to avoid collisions across modules.
3. Initialize in **`setup()`**, never in `constructor`. Odoo’s patching and inheritance patterns assume `setup`.

**TEMPLATE DIRECTIVES YOU WILL USE CONSTANTLY:**

| Directive | Job |
| --------- | --- |
| `t-esc` | Escape and print a value |
| `t-out` | Output markup carefully (know the XSS risk) |
| `t-if` / `t-elif` / `t-else` | Conditional blocks |
| `t-foreach` / `t-as` | Loop |
| `t-on-click` | Event handler bound to a method |
| `t-att-class` / `t-attf-href` | Dynamic attributes |

Think of the template as the **view**, the class as the **controller**, and the server as the **source of business truth**. OWL is not where you hide access rules.

## 53.2 Templates in Depth

Templates are QWeb-for-Owl: XML with `t-` directives, compiled into render functions. Put them in `static/src/.../*.xml` wrapped in `<templates>`, not in `views/` (those are server view architectures).

**ESCAPING AND XSS:**

- `t-esc` escapes HTML — default for user-influenced strings.
- `t-out` can emit markup — only for trusted, sanitized content.
- Never `t-out` a partner name from the database without thinking about scripts.

**EVENTS:**

`t-on-click="increment"` calls the component method. Prefer small methods over huge inline expressions when loops and events combine.

**SUBCOMPONENTS:**

```xml
<t t-name="library_mgmt.LoanPanel">
  <div class="o_loan_panel">
    <LoanCounter title="'Open'" t-props="counterProps"/>
  </div>
</t>
```

Register child classes on the parent (`static components = { LoanCounter }`) so templates can instantiate them. Composition beats one 800-line dashboard template.

**CONDITIONAL UX:**

```xml
<t t-if="state.loading">Loading…</t>
<t t-elif="state.error"><t t-esc="state.error"/></t>
<t t-elif="!state.openLoans">No open loans.</t>
<t t-else="">Open loans: <t t-esc="state.openLoans"/></t>
```

Those four states (loading / error / empty / ready) are how ERP UIs earn trust.

## 53.3 Props, State & Lifecycle

**Props** are inputs from the parent (or from the registry/action that mounts you). Treat them as read-only for the child. **State** is local, mutable data owned by the component — created with `useState` so Owl can re-render when it changes.

**PROPS ARE THE CONTRACT; STATE IS THE SCRATCHPAD:**

```text
Parent / Action
   |  props: { partnerId, title }
   v
LoanCounter
   |  state: { count, loading, error }
   |  may call orm/rpc in setup / handlers
   v
DOM
```

Validate props with `static props = { ... }`. Optional props need `optional: true`. Missing required props fail loudly in debug — that is a gift.

**LIFECYCLE HOOKS (THE ONES YOU REACH FOR FIRST):**

| Hook | When it runs | Typical use |
| ---- | ------------ | ----------- |
| `setup()` | Component construction | Services, state, event buses |
| `onWillStart` | Before first render (async OK) | Initial RPC / orm read |
| `onMounted` | After first paint | Focus, measure DOM, start timers |
| `onWillUpdateProps` | Props about to change | Reset derived state |
| `onWillUnmount` | About to leave the DOM | Clear intervals, abort work |

```javascript
/** @odoo-module **/
import { Component, onWillStart, onWillUnmount, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class PartnerLoanBadge extends Component {
    static template = "library_mgmt.PartnerLoanBadge";
    static props = { partnerId: Number };

    setup() {
        this.orm = useService("orm");
        this.state = useState({ openLoans: 0, loading: true });
        onWillStart(async () => {
            this.state.openLoans = await this.orm.searchCount("library.loan", [
                ["partner_id", "=", this.props.partnerId],
                ["state", "=", "open"],
            ]);
            this.state.loading = false;
        });
        // If you start a setInterval, clear it in onWillUnmount.
        onWillUnmount(() => {});
    }
}
```

**ASYNC SAFETY:**

If the user navigates away while `await orm.searchCount(...)` is in flight, the component may already be destroyed. Prefer Odoo services marked async-aware, keep handlers idempotent, and do not write into `this.state` blindly after long waits without a mounted check pattern your version documents. Leaking intervals is the classic dashboard bug.

**BUSINESS RULE STILL LIVES ON THE SERVER:**

OWL can compute a pretty total for display. It must not be the only place that enforces “you may not confirm this loan.” A crafted RPC or another client could bypass the browser. Use OWL for interaction; use Python constraints, methods, and record rules for truth.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List three differences between props and `useState` values. |
| Medium | Write a component that shows loading → value → empty for a `searchCount` result (code on paper is fine). |
| Hard | Explain why translating strings belongs in XML templates and why `setup()` beats `constructor` in Odoo. |

**WHAT THIS UNLOCKS NEXT:**

A lone component still cannot talk to the rest of the client cleanly. Notifications, RPC, the current user, and action navigation live in **services**, discovered through **registries** and **hooks**.

---

> **Phase 53 complete?** [Continue to Phase 54](#phase-54---services-registries--hooks)

---

# PHASE 54 - Services, Registries & Hooks

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Register and consume web client services with `useService`, place components and actions in the correct registry categories, and use common Owl/Odoo hooks without inventing global singletons.

**WHAT YOU SHOULD KNOW FIRST:** Phase 53 — components, templates, props, state, lifecycle.

**LEARNING RESOURCES:**

- [Services reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/services.html)
- [OWL components](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [Discover JS framework tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)
- [odoo/odoo — web/core](https://github.com/odoo/odoo/tree/18.0/addons/web/static/src/core)

## 54.1 Services as Dependency Injection

A **service** is a long-lived feature of the web client: notifications, RPC, ORM helpers, router, user info, effects (the famous rainbow man), titles, cookies. Components should not invent `window.myGlobalRpc`. They should **declare a dependency** and receive the service through the environment.

At startup, Odoo walks the `services` registry, starts each service (honoring `dependencies`), and stores the result on `env.services`.

```javascript
/** @odoo-module **/
import { registry } from "@web/core/registry";

const tickService = {
    dependencies: ["notification"],
    start(env, { notification }) {
        // Side-effect-only services may return nothing (null).
        let n = 0;
        const id = setInterval(() => {
            n += 1;
            notification.add(`Library heartbeat ${n}`, { type: "info" });
        }, 60000);
        return {
            stop() {
                clearInterval(id);
            },
        };
    },
};

registry.category("services").add("library_tick", tickService);
```

**USING A SERVICE FROM A COMPONENT:**

```javascript
import { useService } from "@web/core/utils/hooks";

setup() {
    this.notification = useService("notification");
    this.orm = useService("orm");
    this.action = useService("action");
}
```

| Service (examples) | You reach for it when… |
| ------------------ | ---------------------- |
| `notification` | Toast a success / warning |
| `orm` | Call `searchRead` / `call` the way the client prefers |
| `rpc` | Lower-level `/web/dataset` style calls when needed |
| `action` | `doAction` to open another act_window / client action |
| `user` | Current user context bits |
| `router` | URL / hash coordination |
| `effect` | Celebratory UI feedback (use sparingly) |

Services are also a **testing seam**: JS tests can disable or replace services so side effects do not poison assertions. That is why “just attach to `window`” is not only ugly — it fights the framework.

## 54.2 Registries & Hooks

A **registry** is a named catalog. Categories you will meet early:

| Category | Typical content |
| -------- | --------------- |
| `services` | Long-lived services |
| `actions` | Client actions (full-screen custom UI) |
| `view_widgets` / field widgets | Field UI extensions |
| `main_components` | Shell-level mounts |
| `effects` | Effect implementations |

```javascript
/** @odoo-module **/
import { registry } from "@web/core/registry";
import { LibraryDashboard } from "./library_dashboard";

registry.category("actions").add("library_mgmt.dashboard", LibraryDashboard);
```

Registration is how your module **publishes** a capability without editing core files. The key string becomes part of your public contract — keep it namespaced (`module.thing`).

**HOOKS ARE HOW COMPONENTS SUBSCRIBE TO THE FRAMEWORK:**

- Owl hooks: `useState`, `onWillStart`, `onMounted`, `onWillUnmount`, …
- Odoo hooks: `useService`, plus view-specific hooks you will meet when extending form/list

Rule of thumb: if you need something global and stateful, it is probably a **service**. If you need UI composition, it is a **component** registered somewhere. If you need one-line access inside `setup`, it is a **hook**.

**ANTI-PATTERNS THIS PHASE KILLS:**

```text
Bad:  window.odooLibraryState = {}
Bad:  fetch('/web/dataset/call_kw/...') by hand in five widgets
Bad:  importing a service file and calling its internals as a singleton
Good: useService("orm") + registry.category("actions").add(...)
```

## 54.3 The `orm` Service vs Hand-Rolled RPC

Prefer `useService("orm")` for model operations from Owl:

```javascript
const rows = await this.orm.searchRead(
    "library.loan",
    [["state", "=", "open"]],
    ["id", "name", "partner_id", "due_date"],
    { limit: 80 },
);
await this.orm.call("library.loan", "action_confirm", [ids]);
```

Use lower-level `rpc` when you must hit a custom JSON route. Do not invent a third HTTP client. Consistency matters when debugging network panels and when services’ async flags protect destroyed components.

**ENV AS THE SHARED WORLD:**

Services receive `env`. Components reach services through hooks that read `env`. That shared environment is why replacing a service in tests works. Global singletons erase that boundary.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain services vs components in one paragraph. |
| Medium | Sketch a service that wraps `notification` to standardize library toast titles. |
| Hard | Find three `registry.category(...)` calls in `web` or an OCA module and write what each category is for. |

**WHAT THIS UNLOCKS NEXT:**

You know how to register and consume pieces. Those pieces still never load unless the **asset bundle** includes your JS/XML/SCSS. Manifest assets are the shipping department of the frontend.

---

> **Phase 54 complete?** [Continue to Phase 55](#phase-55---assets)

---

# PHASE 55 - Assets

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Declare backend (and related) asset bundles in `__manifest__.py`, place static files correctly, control load order with directives, and debug “my JS never runs” failures.

**WHAT YOU SHOULD KNOW FIRST:** Phases 52–54 — architecture, OWL components, registries/services. Phase 7 — module anatomy (`static/`).

**LEARNING RESOURCES:**

- [Assets reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/assets.html)
- [OWL components — file layout](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [Discover JS framework tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [Architecture overview (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)

## 55.1 Bundles, Paths & Load Order

Odoo does not magically import every file under `static/`. You **declare** which files belong to which **bundle**. Common backend work uses `web.assets_backend`. Website work uses frontend bundles. Putting backend OWL code in the website bundle is a classic “works on my machine / invisible in form view” bug.

**MANIFEST SHAPE:**

```python
# __manifest__.py (excerpt)
{
    "name": "Library Management",
    "depends": ["web", "base"],
    "assets": {
        "web.assets_backend": [
            "library_mgmt/static/src/**/*",
            # or explicit files:
            # "library_mgmt/static/src/components/loan_counter/loan_counter.js",
            # "library_mgmt/static/src/components/loan_counter/loan_counter.xml",
            # "library_mgmt/static/src/components/loan_counter/loan_counter.scss",
        ],
    },
}
```

**FILE LAYOUT THAT MATCHES ODOO’S HABIT:**

```text
library_mgmt/
  static/
    src/
      components/
        loan_counter/
          loan_counter.js
          loan_counter.xml
          loan_counter.scss
      services/
        library_tick_service.js
      actions/
        library_dashboard.js
        library_dashboard.xml
```

Keep component triplets together. Use `/** @odoo-module **/` at the top of JS files so the bundler treats them as ES modules.

**ORDER DIRECTIVES:**

Manifest list entries can include tuples like `'before'`, `'after'`, `'replace'` when you must inject relative to another file. Reach for them when a SCSS variable must exist before your rules, or when you intentionally replace a file — not as a first instinct.

**DEBUGGING “ASSET NEVER LOADS”:**

1. Confirm the file path matches the module directory name exactly.
2. Upgrade the module (`-u library_mgmt`) after manifest asset changes.
3. Use developer mode / `--dev=assets` during iteration so bundles rebuild more helpfully.
4. Hard-refresh the browser (asset hashes and caching lie to tired developers).
5. Check you targeted `web.assets_backend` for backend UI.

**QWEB REPORTS ≠ OWL TEMPLATES:**

Report QWeb (PDF/HTML print) and Owl XML templates both look like XML with `t-` directives, but they live in different pipelines. Do not drop a report template into `static/src` and expect a component to find it — or the reverse.

## 55.2 Glob Patterns & Rebuild Discipline

`module/static/src/**/*` is convenient and dangerous: it may include files you did not mean to ship, and order can surprise you. Prefer explicit lists for small modules; use globs when the tree is disciplined.

After changing assets:

```text
1. -u your_module
2. hard refresh / disable cache in devtools
3. confirm Network panel fetched your file (or the bundle containing it)
4. only then debug component logic
```

Half of “Owl is broken” tickets are asset pipeline tickets in disguise.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name the bundle you usually want for a form-view widget. |
| Medium | Write a minimal `assets` dict for one JS + one XML + one SCSS file. |
| Hard | Reproduce (safely) a missing-asset failure on purpose, then fix it; write the three checks you used. |

**WHAT THIS UNLOCKS NEXT:**

Assets load your code. Most production frontend work is not a brand-new screen — it is a **narrow extension** of an existing controller or renderer. That is patching.

---

> **Phase 55 complete?** [Continue to Phase 56](#phase-56---extending--patching-web-client)

---

# PHASE 56 - Extending / Patching Web Client

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Patch existing Owl components and view controllers with `patch()`, choose patch over fork, and avoid upgrade-hostile overrides.

**WHAT YOU SHOULD KNOW FIRST:** Phases 53–55 — components, services/registries, assets. Story IX — server-side `_inherit` mindset (same discipline, different layer).

**LEARNING RESOURCES:**

- [Frontend OWL components howto](https://www.odoo.com/documentation/18.0/developer/howtos/frontend_owl_components.html)
- [OWL components reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [OWL intro (YouTube)](https://www.youtube.com/watch?v=YJg7dvwXQF8)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)
- [odoo/odoo web views](https://github.com/odoo/odoo/tree/18.0/addons/web/static/src/views)

## 56.1 Patch, Don’t Fork

On the server you learned `_inherit` instead of copying `sale_order.py`. On the client the cousin is **`patch`**: open a prototype (or object), add or wrap methods, call `super`.

```javascript
/** @odoo-module **/
import { patch } from "@web/core/utils/patch";
import { FormController } from "@web/views/form/form_controller";

patch(FormController.prototype, {
    setup() {
        super.setup(...arguments);
        if (this.props.resModel === "library.book") {
            // Safe, model-gated extension point.
            console.debug("Library book form ready");
        }
    },
});
```

**THE UPGRADE CONTRACT:**

| Approach | Upgrade risk | When it fits |
| -------- | ------------ | ------------ |
| XML view inherit | Lowest | Structure / fields / buttons |
| Narrow `patch` on public methods | Medium | Behavior tweaks |
| Copy entire core component into your module | Extreme | Almost never |
| Edit `addons/web` in place | Forbidden in real teams | Never |

Patch only what you must. Gate on `resModel`, action XML id, or a marker in context so you do not change every form in the database. Prefer extending via **official registries** (field widgets, client actions) when the framework already offers a slot — a registry add is usually clearer than a prototype patch.

**WRAPPING METHODS WITH SUPER:**

```javascript
patch(SomeController.prototype, {
    async saveButtonClicked() {
        // pre-hook
        const result = await super.saveButtonClicked(...arguments);
        // post-hook
        return result;
    },
});
```

If you forget `super`, you delete core behavior. If you patch a private method named like `_getSomethingInternal`, you are volunteering for breakage on the next minor release.

**TEMPLATE EXTENSION VS LOGIC PATCH:**

Sometimes you need a bit more DOM. Prefer view inheritance (XML) or a dedicated child component registered as a widget. Patching templates is possible in places but harder to reason about — treat it as advanced and document why.

## 56.2 Choosing Extension Mechanism

```text
Need                          Prefer
----------------------------  ----------------------------------
Extra field on form           XML inherit view
Extra button calling Python   XML button + Python method
Change list row formatting    field widget / formatter
KPI on existing form          OWL widget / small patch + component
Entire new workplace UI       Client action (Phase 57)
Change all forms globally     Almost never — gate tightly
```

Document patches in the module README: what you patch, why, and which upstream method names you depend on. Future you during an upgrade will thank present you.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Contrast `_inherit` (Python) with `patch` (JS) in three bullets. |
| Medium | Write a model-gated FormController patch that only runs for `library.loan`. |
| Hard | Review a messy “copy the whole list renderer” PR and rewrite the approach as patch + registry. |

**WHAT THIS UNLOCKS NEXT:**

Patches tweak existing screens. Some products need a **whole screen** that is not a form/list/kanban at all — a dashboard, planner, or console. That is a **client action**.

---

> **Phase 56 complete?** [Continue to Phase 57](#phase-57---custom-client-actions)

---

# PHASE 57 - Custom Client Actions

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Register an Owl component as a client action, bind it with `ir.actions.client` and a menu, and load data through `orm`/`rpc` services with loading and error states.

**WHAT YOU SHOULD KNOW FIRST:** Phases 54–56 — registries, assets, patching. Phase 25 — actions & menus (server-side action records).

**LEARNING RESOURCES:**

- [Frontend OWL components howto](https://www.odoo.com/documentation/18.0/developer/howtos/frontend_owl_components.html)
- [Services — orm / notification](https://www.odoo.com/documentation/18.0/developer/reference/frontend/services.html)
- [Discover JS framework](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [OWL intro (YouTube)](https://www.youtube.com/watch?v=YJg7dvwXQF8)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)

## 57.1 Full-Screen Owl Actions

A **client action** tells the web client: “mount this JavaScript action implementation,” not “open this model’s views.” Dashboards, configuration studios, and custom workplaces live here.

**THREE MOVING PARTS:**

```text
1) Owl component  -> registry.category("actions").add("library_mgmt.dashboard", Comp)
2) ir.actions.client XML  -> tag = library_mgmt.dashboard
3) Menu  -> action = that client action
(+ assets so the JS/XML actually load)
```

```javascript
/** @odoo-module **/
import { Component, onWillStart, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class LibraryDashboard extends Component {
    static template = "library_mgmt.LibraryDashboard";
    static props = { "*": true }; // action props vary; tighten when you know the shape

    setup() {
        this.orm = useService("orm");
        this.action = useService("action");
        this.notification = useService("notification");
        this.state = useState({
            loading: true,
            openLoans: 0,
            overdue: 0,
            error: null,
        });
        onWillStart(async () => {
            try {
                this.state.openLoans = await this.orm.searchCount("library.loan", [
                    ["state", "=", "open"],
                ]);
                this.state.overdue = await this.orm.searchCount("library.loan", [
                    ["state", "=", "open"],
                    ["due_date", "<", new Date().toISOString().slice(0, 10)],
                ]);
            } catch (e) {
                this.state.error = e.message || String(e);
            } finally {
                this.state.loading = false;
            }
        });
    }

    openOverdue() {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Overdue loans",
            res_model: "library.loan",
            views: [[false, "list"], [false, "form"]],
            domain: [
                ["state", "=", "open"],
                ["due_date", "<", new Date().toISOString().slice(0, 10)],
            ],
        });
    }
}

registry.category("actions").add("library_mgmt.dashboard", LibraryDashboard);
```

```xml
<record id="action_library_dashboard" model="ir.actions.client">
    <field name="name">Library Dashboard</field>
    <field name="tag">library_mgmt.dashboard</field>
</record>

<menuitem id="menu_library_dashboard"
          name="Dashboard"
          parent="menu_library_root"
          action="action_library_dashboard"
          sequence="1"/>
```

**UX STATES THAT SEPARATE TOYS FROM PRODUCTS:**

| State | User sees |
| ----- | --------- |
| Loading | Skeleton / spinner |
| Empty | Honest empty copy + CTA |
| Error | Message + retry; no blank screen |
| Access denied | Friendly denial (server still enforces) |
| Ready | KPIs + buttons that `doAction` into real views |

## 57.2 Server Methods for Aggregates

If the dashboard needs five counts, prefer one Python method returning a dict over five `searchCount` round trips from Owl:

```python
# library.loan
def get_dashboard_kpis(self):
    self.check_access_rights("read")
    Loan = self.env["library.loan"]
    return {
        "open": Loan.search_count([("state", "=", "open")]),
        "overdue": Loan.search_count([
            ("state", "=", "open"),
            ("due_date", "<", fields.Date.context_today(self)),
        ]),
    }
```

Call it with `orm.call`. Still enforce ACL inside. The browser displays; the server decides.

Never trust the browser as ACL. If `searchCount` succeeds for a user who should see nothing, your **record rules** are wrong — fix security on the server (Story VIII), then keep the dashboard honest.

**STORY PROJECT — INTERACTIVE ODOO DASHBOARD:**

Build a small backend dashboard module that:

1. Registers a client action with Owl.
2. Declares assets correctly.
3. Loads at least two KPIs via `orm`.
4. Offers a button that opens a filtered `act_window`.
5. Handles loading, empty, and error states.
6. Does **not** bypass ACL with reckless `sudo` on the server just to make the widget pretty.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain `ir.actions.client` vs `ir.actions.act_window` in two sentences. |
| Medium | Wire tag ↔ registry key ↔ menu for a hello-world client action. |
| Hard | Add a refresh button that reloads KPIs without leaving the action. |

**WHAT THIS UNLOCKS NEXT:**

Story XIII made the browser half of Odoo programmable. Those KPIs and lists still live in **PostgreSQL**. When the dashboard is slow at 200k loans, XML and Owl cannot save you — you need the database story: schema, plans, transactions, and ORM performance.

---

> **Phase 57 complete?** [Build the Interactive Odoo Dashboard](../guides/Projects.md) · [Continue to Phase 58](#phase-58---odoo-database-structure)

---

# PHASE 58 - Odoo Database Structure

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Map Odoo models to PostgreSQL tables, recognize `ir_*` metadata tables, Many2many relation tables, and explain why hand-editing registry rows is dangerous.

**WHAT YOU SHOULD KNOW FIRST:** Stories IV–V — models, fields, ORM. Story XIII — the client reads data the server loads from PostgreSQL. Phase 4 — three-tier architecture.

**LEARNING RESOURCES:**

- [Odoo data model / backend data](https://www.odoo.com/documentation/18.0/developer/reference/backend/data.html)
- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Architecture tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [Architecture overview (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)

## 58.1 Tables Behind Models

Every `models.Model` with `_auto = True` (the default) gets a PostgreSQL table. By convention the table name is the model name with dots → underscores: `library.book` → `library_book`. You can override with `_table`, but fighting the convention needs a reason.

**WHAT ELSE IS IN THE DATABASE:**

```text
BUSINESS TABLES              METADATA / SYSTEM
library_book                 ir_model
library_loan                 ir_model_fields
res_partner                  ir_ui_view
                             ir_rule
                             ir_model_access
                             ir_attachment  (+ filestore files)
                             ir_sequence
```

**Many2many** fields create (or reuse) a relation table, often named like `library_book_tag_rel` with two foreign-key columns. **One2many** is not a reverse column on the parent — it is a many2one on the child that the ORM presents as a collection.

**Translations & JSONB:** modern Odoo versions store translated field values in ways that involve JSONB columns — inspecting `\d library_book` in `psql` teaches more than memorizing version trivia. Attachments metadata live in `ir_attachment`; large file bytes often live in the **filestore** on disk, not as giant bytea columns you casually SELECT.

**ir_* IS THE ZONING OFFICE:**

| Table | Role |
| ----- | ---- |
| `ir_model` | Which models exist for this database |
| `ir_model_fields` | Field definitions visible to UI / ORM |
| `ir_ui_view` | View architectures (arch_db) |
| `ir_rule` | Record rules |
| `ir_module_module` | Installed module state |

Deleting “junk” rows from `ir_ui_view` or `ir_model_fields` with raw SQL to “fix a stuck upgrade” is how databases enter the twilight zone. Prefer ORM, module uninstall, and official upgrade paths (Story XVII).

**READ-ONLY INSPECTION HABITS:**

```sql
-- Orientation only — not a substitute for ORM security
SELECT id, name, model FROM ir_model WHERE model LIKE 'library.%';
SELECT name, ttype, store FROM ir_model_fields WHERE model = 'library.book';
SELECT id, name FROM library_book ORDER BY id DESC LIMIT 10;
```

Use inspection to **learn and diagnose**. Use the ORM to **mutate business data** so constraints, mail chatter, computed fields, and access rules still run.

## 58.2 Columns You Will Meet Over and Over

| Column pattern | Meaning |
| -------------- | ------- |
| `id` | Integer primary key (usual) |
| `create_uid` / `create_date` | Audit: who/when created |
| `write_uid` / `write_date` | Audit: who/when last wrote |
| `company_id` | Multi-company ownership when present |
| `active` | Archive pattern (`False` hides without delete) |

Relational columns for Many2one are typically `<field>_id`. Looking at `\d library_loan` should feel like reading the Python model with types lowered into SQL.

**EXTERNAL IDS LIVE IN SQL TOO:**

`ir_model_data` maps XML ids (`library_mgmt.book_demo_1`) to database ids. That is how `env.ref(...)` works. When a module uninstalls, related `ir_model_data` rows and owned records follow uninstall rules — another reason not to invent “orphan” rows with raw INSERT that no XML id owns.

**DEMO vs EMPTY DB:**

Demo data populates tables so UI tours feel alive. Performance work needs **volume**, not demo — seed scripts or copies of anonymized staging. Schema literacy without data volume still leaves you blind to seq scans.

**STORY BRIDGE:**

Story XIII’s dashboard counted loans with `orm.searchCount`. Those counts are SQL `COUNT` under the hood against tables you can now name. When counts get slow, you will know which relation to index — Phase 61 — instead of blaming Owl.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Predict the default table name for `library.loan.line`. |
| Medium | In a dev DB, `\d` your custom model and sketch columns vs fields. |
| Hard | Find the M2M relation table for a Many2many you own; explain each column. |

**WHAT THIS UNLOCKS NEXT:**

You can name tables. You still need enough PostgreSQL literacy to inspect indexes, permissions at the DB level (separate from Odoo ACL), and query plans without pretending SQL replaces the ORM.

---

> **Phase 58 complete?** [Continue to Phase 59](#phase-59---postgresql-for-odoo-developers)

---

# PHASE 59 - PostgreSQL for Odoo Developers

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Use `psql` (or an equivalent) to inspect schemas, read basic query results, and explain the boundary between DBA SQL and Odoo ORM responsibilities.

**WHAT YOU SHOULD KNOW FIRST:** Phase 58 — table mapping and `ir_*`. Comfortable running a local Odoo with PostgreSQL (Phase 5).

**LEARNING RESOURCES:**

- [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html)
- [Odoo ORM performance notes](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#performance)
- [Deploy / PostgreSQL notes](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [Architecture (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)
- [odoo/odoo](https://github.com/odoo/odoo)

## 59.1 SQL Literacy Without Bypassing the ORM

Odoo developers are not full-time DBAs — but a developer who cannot read `\d`, `EXPLAIN`, and a slow query log will guess forever. This phase builds **literacy**, not a second application architecture based on raw SQL.

**TOOLING:**

```text
psql your_database
\dt library_*
\d library_loan
\di library_loan*
SELECT version();
```

Inside Odoo shells you may also `self.env.cr.execute(...)` for diagnostics. Prefer parameterized queries. Prefer **rollback** mental mode when exploring.

**THE HARD BOUNDARY (MEMORIZE THIS):**

| Task | Use |
| ---- | --- |
| Create loan, confirm, cancel | ORM methods |
| Enforce “cannot confirm without partner” | `@api.constrains` / Python |
| Hide rows from a user group | Record rules + ACL |
| See why a list view timings out | SQL `EXPLAIN`, indexes, prefetch |
| Nightly analytics dump for BI | Often SQL/views — still respect privacy laws |
| “Quick fix” UPDATE to close loans | Dangerous — skips business methods |

Raw SQL that writes business rows can **skip** constraints, computed field invalidation, chatter messages, workflow methods, and access checks. That is not speed — that is silent corruption. Story XIV teaches SQL so you can **see** what the ORM emits and **tune** storage/plans — not so you can replace security with `WHERE company_id = 1` pasted into a cron.

## 59.2 Seeing the SQL the ORM Emits

Turn on short-lived SQL logging in development:

```text
odoo-bin ... --log-level=debug_sql
```

Confirm a loan and watch `INSERT`/`UPDATE`/`SELECT` patterns. Then rewrite a naive loop and watch query counts drop. That feedback loop teaches more than any slogan about prefetch.

**PARAMETERIZATION:**

```python
self.env.cr.execute(
    "SELECT id FROM library_loan WHERE partner_id = %s AND state = %s",
    (partner_id, "open"),
)
```

Never format SQL with user input via string interpolation. Injection bugs in ERP modules are career-limiting.

**SCHEMAS & SEARCH_PATH:**

Odoo typically uses the `public` schema. Extensions and exotic search_path setups exist in some deployments; know that “table not found” can be a path issue, not a missing model.

**USERS & PRIVILEGES (DB vs ODOO):**

PostgreSQL roles control connection and table privileges. Odoo **users/groups/ACL/rules** control application authorization. A Postgres superuser can destroy the database and still be irrelevant to “can Alice see Bob’s leads?” Application security stays in Odoo.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Run `\d` on `res_partner` and name three columns you recognize from the UI. |
| Medium | Write a parameterized SELECT that counts open loans — then write the ORM equivalent. |
| Hard | Find a blog that recommends “just UPDATE the table” for a workflow; write why it is unsafe in Odoo. |

**WHAT THIS UNLOCKS NEXT:**

Inspection is static. Real systems fail under **concurrent** writers. Transactions, locks, and isolation are the next gap.

---

> **Phase 59 complete?** [Continue to Phase 60](#phase-60---transactions--concurrency)

---

# PHASE 60 - Transactions & Concurrency

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Explain how an Odoo request maps to a database transaction, what flushing means, and how concurrent updates produce lock waits or inconsistent reads — without inventing DIY locking everywhere.

**WHAT YOU SHOULD KNOW FIRST:** Phase 59 — SQL literacy boundary. Phase 13/17 — environment, cursor, prefetch/flush ideas from the ORM story.

**LEARNING RESOURCES:**

- [ORM API — transaction / environment](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [PostgreSQL concurrency control](https://www.postgresql.org/docs/current/mvcc-intro.html)
- [Performance reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/performance.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 60.1 One Request, One Cursor Story

Typical HTTP worker flow:

```text
request starts
  -> Environment + cursor opened
  -> Python business code uses ORM
  -> flush: pending writes become SQL
  -> commit on success  /  rollback on error
request ends
```

Uncaught exceptions roll back. Partial success that you “manually patched” with extra commits inside business methods is a smell — it breaks the atomic story users expect (“confirm either fully happens or not at all”).

**FLUSH VS COMMIT:**

- **Flush:** ORM pushes pending field changes to PostgreSQL *inside* the open transaction so later SQL/reads see them.
- **Commit:** Transaction becomes permanent.

You rarely call commit in normal model code. Framework code does. In tests, `TransactionCase` keeps work in a transaction that rolls back (Phase 65).

**CONCURRENCY PICTURE:**

```text
Session A: reads loan 42 state=open
Session B: reads loan 42 state=open
Session A: writes state=returned  (lock row)
Session B: waits or conflicts depending on pattern
```

PostgreSQL uses MVCC. Writers take row locks. Long transactions that hold locks while calling external payment APIs are a production classic: everyone queues behind a network call. Keep transactions short; do slow I/O outside critical lock sections when designing integrations (Story XII lessons apply).

**ODOO PATTERNS THAT TOUCH CONCURRENCY:**

| Pattern | Note |
| ------- | ---- |
| `sudo()` | Does not invent a new DB transaction; changes auth context |
| `with_env` / new cursor helpers | Advanced — easy to leak cursors |
| Unique SQL constraints | Database-enforced last line of defense |
| `FOR UPDATE` via SQL | Rare; prefer business redesign when possible |

When two users confirm the last library copy, the fix is usually a **constraint + well-structured method**, not a clever sleep. Optimistic UI + server-side validation beats home-grown lock tables.

## 60.2 Isolation & “Why Did I See Old Data?”

PostgreSQL’s default isolation (typically Read Committed) means each statement sees a snapshot of committed data. Long-running Python that reads, waits on HTTP, then writes can make decisions on stale facts. Patterns:

1. Re-read critical rows before mutating (`browse` + check state again).
2. Use SQL constraints as backstops (`unique`, check).
3. Design methods to be **idempotent** where possible (confirm twice should not double-decrement).

Cursor management helpers appear in cron and webhook code. Misused, they commit half a business operation. Prefer staying inside the request transaction until you understand the failure modes.

**LOCK WAITS YOU WILL SEE IN LOGS:**

```text
could not obtain lock on row in relation "library_loan"
canceling statement due to lock timeout
```

Someone held a row too long. Find the long transaction (slow method, external HTTP inside the critical section, forgotten shell session with an open transaction). Fix the design; do not raise lock timeouts as a “performance feature.”

**TESTS PREVIEW:**

`TransactionCase` (Phase 65) leans on this same transactional world — savepoints and rollbacks — so your concurrency literacy becomes your test literacy.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Difference between flush and commit in one sentence each. |
| Medium | Describe a double-confirm race on stock qty=1 and how a constraint helps. |
| Hard | Trace a webhook handler that commits too early; list the failure mode. |

**WHAT THIS UNLOCKS NEXT:**

Concurrency explains *when* things wait. Indexes and query plans explain *why a single user still waits* on an unindexed domain.

---

> **Phase 60 complete?** [Continue to Phase 61](#phase-61---indexes--query-plans)

---

# PHASE 61 - Indexes & Query Plans

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Read a basic `EXPLAIN (ANALYZE, BUFFERS)` plan, relate slow domains to missing indexes, and add `index=True` / SQL indexes deliberately — not on every column.

**WHAT YOU SHOULD KNOW FIRST:** Phases 58–60 — schema, SQL literacy, transactions. Phase 15 — domains.

**LEARNING RESOURCES:**

- [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html)
- [ORM performance](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#performance)
- [Odoo performance / profiling](https://www.odoo.com/documentation/18.0/developer/reference/backend/performance.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 61.1 Indexes Are Access Paths, Not Magic

An **index** is a separate structure that lets PostgreSQL find rows without scanning the whole table. Useful for domains you run constantly (`partner_id = …`, `state = …`, email lookups). Harmful when sprayed onto low-selectivity columns you never filter — every write maintains every index.

**IN ODOO FIELDS:**

```python
partner_id = fields.Many2one("res.partner", required=True, index=True)
state = fields.Selection([...], default="draft", index=True)
isbn = fields.Char(index=True)  # if you search by ISBN constantly
```

Many2one fields often deserve indexes because joins and domains hit them constantly. Storing a computed field you filter/group on (`store=True`) is sometimes the real fix — an unstored compute cannot be indexed as a normal column.

**EXPLAIN WITHOUT FEAR:**

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, name
FROM library_loan
WHERE state = 'open' AND partner_id = 42;
```

Things to notice in plans:

| Plan idea | Plain language |
| --------- | -------------- |
| Seq Scan | Read most/all of the table |
| Index Scan / Index Only Scan | Use an index to find rows |
| Bitmap Heap Scan | Combine index hits, then fetch heaps |
| Nested Loop / Hash Join | How tables combine |
| high actual time | Where seconds go |

`ANALYZE` runs the query. Use it on **copies / staging**, not carelessly on heavy production writers. `BUFFERS` shows cache vs disk feel.

**MATCH INDEXES TO DOMAINS:**

```text
Domain: [("state", "=", "open"), ("partner_id", "=", pid)]
Ask:   Is there an index that leads with partner_id or a composite that fits?
Also:  Is the action's domain applied at search, or do we search([]) and filter in Python?
```

Filtering 200k rows in Python after a wide SELECT is not an indexing problem — it is an ORM problem (Phase 62).

## 61.2 Reading EXPLAIN Like a Developer

A simplified story of a bad plan:

```text
Seq Scan on library_loan  (cost=0.00..18500 rows=12000 width=64)
  Filter: ((state = 'open') AND (partner_id = 42))
  Rows Removed by Filter: 188000
Planning Time: 0.2 ms
Execution Time: 95 ms
```

After a useful index on `partner_id` (or a composite that fits):

```text
Index Scan using library_loan_partner_id_index on library_loan
  Index Cond: (partner_id = 42)
  Filter: (state = 'open')
Execution Time: 0.8 ms
```

**WHAT “COST” MEANS:**

PostgreSQL’s cost is a planner estimate (arbitrary units), not wall-clock truth. `ANALYZE` gives actual times. Trust **actual time** and **rows** first; use cost to understand the planner’s bet.

**PARTIAL INDEXES (ADVANCED):**

If 95% of loans are `returned` and you always query `state = 'open'`, a partial index can stay small:

```sql
CREATE INDEX library_loan_open_partner
  ON library_loan (partner_id)
  WHERE state = 'open';
```

In Odoo you more often declare `index=True` on fields and let the ORM create standard indexes. Partial indexes may appear in carefully reviewed SQL init hooks — document them; upgrades must know they exist.

**STATISTICS:**

Planner quality depends on `ANALYZE` statistics. If EXPLAIN estimates 100 rows and reality is 100000, your index choice fights bad stats. Ops depth continues in Story XVI.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | When would `index=True` on a boolean field be pointless? |
| Medium | Take one slow list view domain; propose one index and justify with EXPLAIN. |
| Hard | Compare Seq Scan vs Index Scan on the same query before/after an index on staging; paste both plans in your notes. |

**WHAT THIS UNLOCKS NEXT:**

Good indexes still lose to bad ORM patterns — N+1 loops, unbounded searches, and repeated flushes. Phase 62 attacks the Python side.

---

> **Phase 61 complete?** [Continue to Phase 62](#phase-62---orm-performance)

---

# PHASE 62 - ORM Performance

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Spot and fix classic Odoo N+1 patterns, use `mapped`/`filtered` wisely, prefetch intentionally, paginate searches, and know when `read_group` beats loading every row.

**WHAT YOU SHOULD KNOW FIRST:** Phase 61 — indexes/plans. Story V — recordsets, mapped/filtered, prefetch/cache.

**LEARNING RESOURCES:**

- [ORM performance section](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#performance)
- [Odoo performance profiling](https://www.odoo.com/documentation/18.0/developer/reference/backend/performance.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [OWL/architecture videos only as context](https://www.youtube.com/watch?v=WnsYmsq4Qr8)

## 62.1 Batch Thinking on Recordsets

The ORM is optimized for **recordsets**, not for Python `for` loops that each trigger SQL.

**N+1 — THE LIBRARY LOAN TRAP:**

```python
# Bad: may query partner (and more) per loan
for loan in self.search([("state", "=", "open")]):
    print(loan.partner_id.name)

# Better: prefetch partners in batch, or:
loans = self.search([("state", "=", "open")])
names = loans.mapped("partner_id.name")
```

`mapped` / browsing related fields on a recordset usually triggers batch reads. Searching inside a loop does not:

```python
# Bad
for partner in partners:
    count = self.env["library.loan"].search_count([
        ("partner_id", "=", partner.id),
        ("state", "=", "open"),
    ])

# Better direction: one search, then group in memory / read_group
Loan = self.env["library.loan"]
loans = Loan.search([
    ("partner_id", "in", partners.ids),
    ("state", "=", "open"),
])
# or read_group to aggregate in SQL
```

**UNBOUNDED SEARCH IS A PRODUCTION INCIDENT:**

```python
# Dangerous in cron / report
self.search([])  # million rows later...

self.search(domain, limit=200)  # intentional batches
```

Always ask: *What is the maximum rows this can return in three years?*

**STORED COMPUTES & SEARCHABILITY:**

If a list view filters on a value, storing the compute (with correct `@api.depends`) can move work to write-time and make indexes possible. Non-stored computes recalculate when read — fine for rare displays, painful for search/group.

**READ_GROUP FOR AGGREGATES:**

Dashboards that need counts per state should not load every loan into Owl and count in JavaScript. Prefer server `read_group` / carefully designed methods that return aggregates, still under ACL.

**RAW SQL?**

Sometimes a report uses `_auto = False` SQL views or `cr.execute` with joins. That is an advanced, reviewed decision — and it still must not become a backdoor past record rules for interactive users. Prefer ORM until measurement says otherwise (Phase 63).

## 62.2 Prefetch, Cache & Flush Costs

**Prefetch:** When you read `loan.partner_id.name` for many loans in one recordset, Odoo tries to fetch partners in batches. Breaking the recordset into one-id searches destroys that.

**Cache:** Field values sit in cache on the recordset. After writes, flushes, or invalidations, prefer short methods with clear write → read order.

**Flush storms:** Touching many computed stored fields can schedule extensive recomputation. Profile before blaming “Postgres is slow” when Python is recomputing half the database.

**BATCH CREATE/WRITE:**

```python
Loan.create([{...}, {...}, {...}])
records.write({"state": "cancelled"})  # batch when legal
```

Batching is not a license to skip validation.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Rewrite a partner-name loop using `mapped`. |
| Medium | Find an N+1 in a sample compute; fix it. |
| Hard | Design a KPI method that returns counts via `read_group` instead of search+len. |

**WHAT THIS UNLOCKS NEXT:**

You know common fixes. Without **measurement**, you will optimize the wrong layer. Profiling makes performance empirical.

---

> **Phase 62 complete?** [Continue to Phase 63](#phase-63---profiling--optimization)

---

# PHASE 63 - Profiling & Optimization

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Enable Odoo’s profiler, read speedscope-oriented results at a practical level, combine SQL logs with EXPLAIN, and apply a measure → fix → remeasure loop.

**WHAT YOU SHOULD KNOW FIRST:** Phases 61–62 — plans and ORM patterns.

**LEARNING RESOURCES:**

- [Odoo Performance / Profiling](https://www.odoo.com/documentation/18.0/developer/reference/backend/performance.html)
- [ORM performance](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#performance)
- [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 63.1 Measure Before You Rewrite

Guessing “it must be the index” wastes days. Odoo ships an integrated **profiler** that can record SQL and stack samples into `ir.profile` and open results in speedscope-style views.

**ENABLEMENT (DEV / STAGING HABIT):**

1. Developer mode on.
2. Enable profiling globally for a limited time (UI tools / settings — follow current 18.0 docs).
3. Enable profiling on your session with SQL + traces collectors.
4. Reproduce the slow action once (warm cache considerations apply).
5. Open the profile, look for hot SQL and hot Python frames.
6. Disable profiling — it is not free.

Collectors (from docs): SQL, periodic traces, QWeb, sync (heavy). Default SQL + periodic traces are the usual starting pair.

**ALSO USE:**

| Tool | When |
| ---- | ---- |
| `--log-level=debug_sql` | See ORM SQL in logs (noisy; short sessions) |
| `EXPLAIN (ANALYZE, BUFFERS)` | Validate a specific query shape |
| Browser network tab | Separate client OWL cost from server time |
| `--workers` realities | Later in deploy story; don’t confuse prod worker limits with algo bugs |

**OPTIMIZATION LOOP:**

```text
1. Reproduce with representative data volume
2. Profile / EXPLAIN
3. Change ONE thing (index, domain, mapped, stored field, pagination)
4. Remeasure
5. Keep a before/after note for the PR
```

## 63.2 Separating Client Time from Server Time

A “slow dashboard” might be:

| Layer | Symptom | Fix direction |
| ----- | ------- | ------------- |
| Owl render | CPU busy in browser, tiny network | Simplify template / paginate client data |
| RPC fan-out | Many small `/web/dataset` calls | Batch orm reads / one server method |
| SQL | Few calls, each heavy | Indexes, domains, read_group |
| Python | High CPU between SQL | Algorithm / compute store / careful caching |

Browser Network + Odoo profiler + EXPLAIN together answer which row of that table is guilty.

**BEFORE/AFTER NOTES FOR PRS:**

```text
Before: library dashboard 3.8s (N+1 partner reads; seq scan on state)
After:  220ms (read_group + index on partner_id, state)
Evidence: speedscope link / EXPLAIN paste / debug_sql count 240 → 6
```

Without numbers, “I optimized it” is theater. With numbers, reviewers learn and regressions get caught.

**STORY PROJECT — OPTIMIZE A SLOW ODOO APPLICATION:**

Take a deliberately slow library (or similar) scenario:

1. Seed enough rows that a naive list/dashboard hurts.
2. Capture evidence (profile screenshot or EXPLAIN).
3. Fix N+1 and/or indexes and/or unbounded search.
4. Show before/after timings.
5. Refuse “solutions” that only work by disabling rules or using raw UPDATE.

Story XIV ends when you can *prove* a performance change — not when you can recite index trivia.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List why profiling on an empty DB lies. |
| Medium | Profile one slow screen on staging; write the top two offenders. |
| Hard | Ship a PR with before/after numbers and the single root cause named. |

**WHAT THIS UNLOCKS NEXT:**

You can make Odoo fast enough to trust. You still cannot **prove** business rules, security, and UI flows keep working as the module evolves. Story XV is that proof system — logging, TransactionCase, and targeted tests.

---

> **Phase 63 complete?** [Build Optimize a Slow Odoo Application](../guides/Projects.md) · [Continue to Phase 64](#phase-64---odoo-logging--debugging)

---

# PHASE 64 - Odoo Logging & Debugging

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Configure meaningful log levels, place strategic logs, use debugger breakpoints on Python paths, and debug AccessError / ValidationError without cargo-cult printing.

**WHAT YOU SHOULD KNOW FIRST:** Stories IV–VIII — ORM and security. Story XIV — how to read SQL when performance is the bug.

**LEARNING RESOURCES:**

- [CLI / logging notes in Odoo docs](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)
- [Testing reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [Security reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [Architecture (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)

## 64.1 Debug Like an Engineer

When a loan will not confirm, the amateur pastes `print(record)` in five places and reloads. The engineer asks: *Is it ACL, record rule, constraint, onchange, client patch, or data?* Logging and breakpoints answer that faster.

**LOG LEVELS YOU ACTUALLY USE:**

| Level | Use |
| ----- | --- |
| `INFO` | Lifecycle milestones |
| `WARNING` | Recoverable oddities |
| `ERROR` | Failures needing attention |
| `debug_sql` / debug | Short investigative sessions |

```python
import logging
_logger = logging.getLogger(__name__)

def action_confirm(self):
    for loan in self:
        _logger.info("Confirming loan %s for partner %s", loan.id, loan.partner_id.id)
        # ...
```

Log **identifiers and states**, not full record dumps of sensitive partner data in production. GDPR-ish discipline is part of professionalism.

**ACCESSERROR TRIAGE:**

```text
1. Which model? Which operation (read/write/create/unlink)?
2. ACL CSV missing row for the group?
3. Record rule domain excluding the row?
4. sudo() used earlier hiding the real user path?
5. Company_id mismatch (multi-company)?
```

Reproduce as the **same user** (or `with_user`) — debugging as admin lies.

**BREAKPOINTS:**

Use your IDE remote debugger or `breakpoint()` in local dev on the method you suspect. Prefer breaking in business methods over scattering prints. For JS, browser devtools on Owl components; remember assets must be the files you think they are (Phase 55).

**SERVER TRACEBACKS ARE TEACHERS:**

Read the bottom frame first (origin), then scan upward for your module namespace. Core frames teach call paths; your frames usually hold the bug.

## 64.2 Reproducible Bug Reports

Before fixing, capture:

```text
- Odoo version / module version
- User login + groups (not password)
- Exact menu / action / record id
- Steps from clean screen
- Traceback or failing assertion
- Whether tests / browser / API triggered it
```

“It doesn’t work” is not a bug report. A traceback plus record id is. This discipline also feeds Phase 65 — many bugs become the next unit test.

**JS SIDE QUICKLY:**

For Owl issues: confirm the asset loaded, set a breakpoint in `setup`, watch Network for failed RPC, and remember that a destroyed component will not thank you for writing state after `await`. Server AccessError often surfaces as a notification rather than a Python traceback in the browser — read the response payload.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add one structured `_logger.info` to a confirm method and find it in the log. |
| Medium | Force an AccessError on purpose; write the triage checklist result. |
| Hard | Debug a failing compute with a breakpoint; note the recordset size you saw. |

**WHAT THIS UNLOCKS NEXT:**

Manual debugging finds today’s bug. **Tests** prevent tomorrow’s regression. TransactionCase is the default Odoo unit-test workhorse.

---

> **Phase 64 complete?** [Continue to Phase 65](#phase-65---python-tests)

---

# PHASE 65 - Python Tests

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Structure a `tests/` package, write `TransactionCase` tests with assertions, understand savepoint isolation between methods, and tag tests for install vs post-install runs.

**WHAT YOU SHOULD KNOW FIRST:** Phase 64 — logging/debug. Story VI — constraints and workflows you can assert.

**LEARNING RESOURCES:**

- [Testing Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [odoo/odoo tests helpers](https://github.com/odoo/odoo/tree/18.0/odoo/tests)
- [ged-odoo training](https://github.com/ged-odoo/odoo-js-training-public) (JS side later)

## 65.1 TransactionCase & Assertions

Odoo’s Python tests build on `unittest`. Standard layout:

```text
library_mgmt/
  tests/
    __init__.py          # imports test modules
    test_loan_workflow.py
```

```python
# tests/__init__.py
from . import test_loan_workflow
```

**TransactionCase (modern mental model):**

Each test method runs inside a transaction mechanism that **rolls back** so tests do not permanently dirty the database. Internally, Odoo uses **savepoints** so methods stay isolated while sharing class-level setup efficiently. Older docs talked about `SavepointCase`; today you should be fluent in **`TransactionCase`** and understand that **savepoint isolation** is the concept keeping tests independent.

```python
from odoo.tests import TransactionCase, tagged
from odoo.exceptions import ValidationError, UserError

@tagged("post_install", "-at_install")
class TestLoanWorkflow(TransactionCase):

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.partner = cls.env["res.partner"].create({"name": "Test Reader"})
        cls.book = cls.env["library.book"].create({"name": "Test Book"})

    def test_confirm_sets_open(self):
        loan = self.env["library.loan"].create({
            "partner_id": self.partner.id,
            "book_id": self.book.id,
        })
        loan.action_confirm()
        self.assertEqual(loan.state, "open")

    def test_confirm_requires_partner(self):
        loan = self.env["library.loan"].new({"book_id": self.book.id})
        with self.assertRaises(ValidationError):
            loan._check_partner()  # or whatever constraint path you expose
```

**RULES THAT KEEP CI GREEN:**

| Rule | Why |
| ---- | --- |
| Methods start with `test_` | Otherwise they never run |
| Import test modules from `tests/__init__.py` | Otherwise they never collect |
| Prefer `setUpClass` for shared demo rows | Faster than recreating everything per method when safe |
| Assert outcomes, not implementation trivia | Tests survive refactors |
| Use `Form` helper when onchanges matter | Closer to UI behavior |

**TAGS:**

Default tags often include `standard` and `at_install`. Use `@tagged('-at_install', 'post_install')` when the test needs a fuller registry (common for anything touching extra modules).

**SingleTransactionCase** exists for special suites that intentionally share one transaction across methods — know it exists; do not reach for it first.

## 65.2 Savepoints, Registry Cleanup & Assertions That Matter

**Savepoint mental model:**

```text
BEGIN transaction for the test class machinery
  setUpClass creates partner + book
  SAVEPOINT sp_test_confirm
    test_confirm_sets_open runs
  ROLLBACK TO SAVEPOINT sp_test_confirm
  SAVEPOINT sp_test_requires_partner
    test_confirm_requires_partner runs
  ROLLBACK TO SAVEPOINT ...
ROLLBACK / close without committing to the durable DB
```

That is why tests can create thousands of rows safely: nothing persists. It is also why debugging tests interactively after a failure needs care — the row may already be rolled back.

**If a test mutates the registry** (adds models/fields cleverly), clean up (`self.registry.reset_changes()` per docs). Ordinary business tests should not mutate the registry.

**ASSERTION TOOLKIT:**

| Assertion | Use |
| --------- | --- |
| `assertEqual` | States, counts, simple fields |
| `assertTrue` / `assertFalse` | Flags |
| `assertRaises(ValidationError)` | Constraints |
| `assertRaises(UserError)` | Workflow guards |
| `assertRaises(AccessError)` | Security (Phase 67) |

Prefer asserting **business outcomes**: state became `open`, return_date set. Avoid asserting private helper return tuples that will churn.

**RUNNING TESTS (SHAPE):**

```text
odoo-bin -d testdb -u library_mgmt --test-enable --stop-after-init
```

Know your team’s exact flags. The skill is: tests live in-module, are importable, and CI runs them on every merge.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create `tests/` scaffolding that imports one empty test file. |
| Medium | Write two TransactionCase methods: happy path + `assertRaises`. |
| Hard | Explain savepoint isolation to a teammate using a whiteboard diagram; include why setUpClass side effects roll back between methods. |

**WHAT THIS UNLOCKS NEXT:**

You can assert a field value. Real modules need tests around **workflows** — states, constraints, and side effects — as a deliberate design.

---

> **Phase 65 complete?** [Continue to Phase 66](#phase-66---testing-business-logic)

---

# PHASE 66 - Testing Business Logic

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Design tests for state transitions, constraints, computes, and wizards so business invariants stay enforced under refactor.

**WHAT YOU SHOULD KNOW FIRST:** Phase 65 — TransactionCase. Story VI — methods, constraints, states.

**LEARNING RESOURCES:**

- [Testing Odoo — Form helper](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 66.1 Test the Invariants Customers Pay For

Business logic tests answer: *If a librarian confirms, returns, or cancels a loan, does the system keep stock and state consistent?* They are not about asserting that a private helper returned `3`.

**MATRIX TO COVER FOR A WORKFLOW MODEL:**

| Transition / rule | Test idea |
| ----------------- | --------- |
| draft → open | Happy confirm |
| open → returned | Sets return date |
| draft → cancelled | Allowed |
| open → cancelled | Allowed or blocked per rules |
| confirm without book | ValidationError |
| double confirm | UserError / idempotent behavior |
| compute overdue flag | Depends fields flip correctly |

```python
def test_return_flow(self):
    loan = self.env["library.loan"].create({...})
    loan.action_confirm()
    loan.action_return()
    self.assertEqual(loan.state, "returned")
    self.assertTrue(loan.return_date)
```

**FORM HELPER WHEN ONCHANGES MATTER:**

```python
from odoo.tests import Form

def test_onchange_partner_populates_address(self):
    with Form(self.env["library.loan"]) as f:
        f.book_id = self.book
        f.partner_id = self.partner
        # fields that onchange would set are visible here
    loan = f.record
    self.assertTrue(loan.id)
```

**WIZARDS:**

Create the transient record, call its action method, assert side effects on real models. Remember transient cleanup — TransactionCase rollback still saves you from residue.

**AVOID BRITTLE TESTS:**

- Do not assert exact chatter HTML.
- Do not depend on demo XML ids from optional modules unless tagged properly.
- Do not sleep() for cron — call the method directly in unit tests; test scheduling wiring separately if needed.

## 66.2 Arrange → Act → Assert for Workflows

Keep each test readable:

```python
def test_cannot_return_draft_loan(self):
    # Arrange
    loan = self.env["library.loan"].create({
        "partner_id": self.partner.id,
        "book_id": self.book.id,
    })
    # Act + Assert
    with self.assertRaises(UserError):
        loan.action_return()
```

One behavior per test method beats mega-tests that confirm, return, cancel, and import in one function. When a mega-test fails, you do not know which invariant broke.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List five invariants for your loan model worth asserting. |
| Medium | Implement happy + failure tests for one transition. |
| Hard | Use `Form` to test an onchange that sets a default due date. |

**WHAT THIS UNLOCKS NEXT:**

Logic can be green while security is theater. Phase 67 tests ACL and record rules as first-class behavior.

---

> **Phase 66 complete?** [Continue to Phase 67](#phase-67---testing-security)

---

# PHASE 67 - Testing Security

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Write tests that prove groups can or cannot CRUD models, that record rules isolate rows, and that `AccessError` appears when it should — including multi-company gotchas.

**WHAT YOU SHOULD KNOW FIRST:** Phase 66 — business tests. Story VIII — users, ACL, record rules, sudo discipline.

**LEARNING RESOURCES:**

- [Testing Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [Security in Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [Restrict access tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/restrict_data_access.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 67.1 Security Is Behavior — Assert It

If you only test as `admin` / superuser, you have not tested the product. Security tests create users in groups and act `with_user`.

```python
from odoo.exceptions import AccessError
from odoo.tests import TransactionCase

class TestLoanSecurity(TransactionCase):

    def test_librarian_can_confirm(self):
        user = self.env["res.users"].create({
            "name": "Lib",
            "login": "lib_test",
            "groups_id": [(6, 0, [self.env.ref("library_mgmt.group_library_user").id])],
        })
        loan = self.env["library.loan"].with_user(user).create({...})
        loan.action_confirm()
        self.assertEqual(loan.state, "open")

    def test_portal_cannot_read_others_loans(self):
        other = self.env["library.loan"].create({...})  # as admin setup
        portal_user = self.env.ref("base.demo_user0")  # example — prefer your own
        with self.assertRaises(AccessError):
            other.with_user(portal_user).read(["name"])
```

**WHAT TO COVER:**

| Layer | Assertion style |
| ----- | --------------- |
| ACL | `check_access_rights` / CRUD that raises AccessError |
| Record rules | `search` returns subset; `browse` + read raises or empty |
| `sudo` escape hatches | Documented, minimal; test the *public* method still safe |
| Multi-company | User of company A cannot read company B rows |

**NEVER “FIX” A FAILING SECURITY TEST BY SUDO IN THE TEST SUBJECT:**

If production code under test needs `sudo` to pass a security test, you may be testing the wrong thing — or hiding a real hole. Prefer fixing ACL/rules or redesigning the method’s privileged section with an explicit, reviewed `sudo` boundary.

**RAW SQL IN SECURITY TESTS?**

You may inspect rows as admin for setup. Do not teach “verify security with a SQL SELECT as the application user.” Application users do not connect as distinct Postgres roles per Odoo login. **Odoo security is ORM-level.** Tests must exercise the ORM as that user.

## 67.2 Group Fixtures Without Flaky Demoing

Create groups/users in `setUpClass` with XML ids from *your* module (`self.env.ref("library_mgmt.group_library_user")`). Depending on demo users makes CI fragile when demo is off.

```python
@classmethod
def setUpClass(cls):
    super().setUpClass()
    cls.group_user = cls.env.ref("library_mgmt.group_library_user")
    cls.user_lib = cls.env["res.users"].create({
        "name": "Librarian",
        "login": "librarian_test",
        "email": "lib@example.com",
        "groups_id": [(6, 0, [cls.group_user.id])],
    })
```

Test both **positive** (allowed) and **negative** (AccessError) paths. A suite with only negative tests can pass while nobody can use the feature; a suite with only positive tests can pass while everyone can see everything.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write one AccessError test for a group without write ACL. |
| Medium | Prove a record rule hides another user’s private records. |
| Hard | Add a multi-company isolation test for one model with `company_id`. |

**WHAT THIS UNLOCKS NEXT:**

Backend green lights still miss broken controllers and client actions. Phase 68 covers HTTP/UI flow testing.

---

> **Phase 67 complete?** [Continue to Phase 68](#phase-68---testing-ui--web-flows)

---

# PHASE 68 - Testing UI / Web Flows

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Use `HttpCase` / tour-style and controller tests at a practical level, know when JS unit tests vs tours vs Python tests fit, and protect critical web/portal paths.

**WHAT YOU SHOULD KNOW FIRST:** Phase 67 — security tests. Stories XI–XIII — controllers, portal, OWL client actions.

**LEARNING RESOURCES:**

- [Testing Odoo — HttpCase & tours](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [JS framework / tours in Odoo docs](https://www.odoo.com/documentation/18.0/developer/reference/frontend.html)
- [HTTP controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)

## 68.1 Three Layers of Frontend Confidence

Odoo docs describe three complementary kinds of tests:

| Kind | Good for |
| ---- | -------- |
| Python unit (`TransactionCase`) | Models, security, workflows |
| JS unit tests | Owl components in isolation |
| Tours / HttpCase browser helpers | Python ↔ JS integration through the real client |

You do not need a tour for every button. You need them for **money, access, and irreversible** flows — confirming a loan that changes stock, portal pages that must not leak, payment redirects (Story XII).

**HttpCase SKETCH:**

```python
from odoo.tests import HttpCase, tagged

@tagged("post_install", "-at_install")
class TestLibraryHttp(HttpCase):

    def test_dashboard_page_loads_as_admin(self):
        self.authenticate("admin", "admin")
        # Exact URL depends on how your client action is routed;
        # many teams assert controller JSON endpoints more often than full tours.
        response = self.url_open("/web")
        self.assertEqual(response.status_code, 200)
```

`browser_js` / tours run Chrome headless, execute JS, and wait for a success signal (`console.log("test successful")` by default). They are slower and more brittle than unit tests — keep them few and high-value.

**CONTROLLER TESTS:**

For JSON/API routes from Story XI–XII, `url_open` with auth and CSRF awareness often gives more ROI than full UI tours. Assert status codes, payload shapes, and AccessError equivalents.

**OWL / CLIENT ACTION:**

Prefer: unit-test business methods heavily; add one HttpCase or tour that opens the dashboard and checks a KPI DOM node if the action is customer-facing. Do not duplicate every KPI assertion in the browser.

## 68.2 Tours Without Testing Everything Twice

A tour is a scripted click-path. Keep tours for:

- install → open client action → see KPI (Story XIII dashboard)
- portal user sees only own documents
- payment or webhook acknowledgment screens

Do **not** tour every CRUD. TransactionCase already owns CRUD. Tours own “Python and JS still speak to each other after a refactor.”

When a tour flakes, check asset readiness, demo data assumptions, and selectors bound to translated strings. Prefer stable CSS classes you own (`o_library_dashboard`) over brittle text matches.

**STORY PROJECT — FULLY TESTED MODULE:**

Ship (or extend) a module with:

1. TransactionCase workflow tests (happy + failure).
2. At least two security tests (`AccessError` / record rule).
3. One HttpCase or controller test for a critical path.
4. README section: how to run tests (`odoo-bin -i/-u … --test-enable / tagged`).
5. No reliance on raw SQL writes to “set up state” that bypasses constraints — use ORM setup helpers.

That closes Story XV: you can debug, prove business logic, prove security, and smoke-test web flows. Combined with Stories XIII–XIV, you are ready to put the system into production-shaped environments — workers, proxies, backups — without treating “it works on my laptop” as a deployment strategy.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Decide for three features whether unit, JS, or tour fits best. |
| Medium | Write an HttpCase that authenticates and hits `/web` successfully. |
| Hard | Add a tour or `browser_js` check that your client action renders a KPI. |

**WHAT THIS UNLOCKS NEXT:**

Stories XIII–XV made you full-stack inside one Odoo database: Owl UX, PostgreSQL performance, and automated proof. Running that system for real users — workers, HTTPS, backups, monitoring — is a different job. Story XVI starts **deployment and operations**.

---

> **Phase 68 complete?** [Build the Fully Tested Module](../guides/Projects.md) · [Continue to Phase 69](#phase-69---odoo-configuration)

# PHASE 69 - Odoo Configuration

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Author a production-minded `odoo.conf` (or equivalent CLI flags): database connection, `addons_path`, `admin_passwd`, `dbfilter`, logging, data/filestore paths, and the difference between “works on my machine” and “safe on the internet.”

**WHAT YOU SHOULD KNOW FIRST:** Phase 5 — local config and `addons_path`. Phase 8 — install/upgrade lifecycle. Phase 68 — you can test a module before you trust it in production.

**LEARNING RESOURCES:**

- [Source install (Odoo 18)](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html)
- [System configuration / deploy](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [CLI reference](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)
- [odoo/odoo](https://github.com/odoo/odoo) — read `odoo/tools/config.py` for option names

## 69.1 Config Is Policy, Not Convenience

Locally you may launch:

```bash
python3 odoo-bin -d mydb --addons-path=addons,~/addons -i sale --dev=reload
```

That is fine for learning. In production, every flag is a **policy decision**: who may create databases, which DB a website hostname maps to, where attachments live, how loud the logs are, whether the DB manager UI is reachable.

Odoo reads options from (in practice) a configuration file and/or the command line. Packaged installs often use `/etc/odoo/odoo.conf`. Source installs commonly use a file you pass with `-c /path/to/odoo.conf`.

**A MINIMAL PRODUCTION-SHAPED CONF:**

```ini
[options]
admin_passwd = REPLACE_WITH_LONG_RANDOM_SECRET
db_host = False
db_port = False
db_user = odoo
db_password = False
db_name = False
dbfilter = ^mycompany$
list_db = False
addons_path = /opt/odoo/odoo/addons,/opt/odoo/custom
data_dir = /var/lib/odoo
logfile = /var/log/odoo/odoo.log
log_level = info
proxy_mode = True
```

Walk the lines that matter most:

| Option | What it means |
| --- | --- |
| `admin_passwd` | Master password for **database manager** operations (create/drop/duplicate). Not the `admin` user login. Must be strong and secret. |
| `db_*` | How Odoo reaches PostgreSQL. `False`/`None` often means local defaults (Unix socket). Remote Postgres needs host, port, password, and often `db_sslmode`. |
| `addons_path` | Ordered list of addon directories. Enterprise path (if any) typically before Community `addons`, then your custom path. |
| `data_dir` | Filestore and sessions root. Backups must include this directory (Phase 74). |
| `dbfilter` | Regex selecting which DB a request may use — critical for website/portal multi-DB hosts (Phase 71 context). |
| `list_db` | When `False` (with a tight `dbfilter`), you hide the database list from the login screen. |
| `proxy_mode` | Trust `X-Forwarded-*` headers **only** when behind a reverse proxy you control. |
| `logfile` / `log_level` | Where operators look when users say “it’s slow” or “it error’d.” |

**THE DATABASE MANAGER IS A LOADED GUN:**

Anyone who can open `/web/database/manager` and know `admin_passwd` can create or drop databases. On internet-facing hosts: strong `admin_passwd`, prefer `list_db = False`, and often block the manager paths at the reverse proxy once you no longer need them.

## 69.2 One Host, Many Databases — Why `dbfilter` Exists

Odoo is multi-tenant: one server process can serve many PostgreSQL databases. Logged-in backend users pick a DB at login. **Anonymous** website/portal traffic has no login yet — Odoo must decide which DB owns `https://shop.example.com/`.

That decision is `dbfilter`: a regex, optionally with `%h` (hostname) or `%d` (first subdomain). Official guidance: for production multi-DB with website, set `dbfilter` or features break. Once one hostname maps to one DB, lock down listing.

```text
Request Host: shop.acme.com
dbfilter = ^%d$
        |
        v
Candidate DB name: "shop"
        |
        v
Load website + portal for that DB only
```

**Single-company production tip:** set `dbfilter` to an exact name (`^mycompany$`) even if you only have one DB. Ambiguity is how accidental cross-DB mistakes start.

## 69.3 Paths, Secrets, and Environment Split

Treat **dev**, **staging**, and **prod** as different configs that share module code:

- Different `db_name` / `dbfilter`
- Different `admin_passwd` and DB passwords
- Staging may allow `list_db = True`; prod should not
- Never commit real secrets into Git — use env-specific files or secret managers

`addons_path` should point at **version-pinned** code (Git tags/branches), not “whatever was last on the laptop.”

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Write an `odoo.conf` for a single DB named `training` with custom addons under `/opt/odoo/custom`, logging to a file. |
| Medium | Explain in writing the difference between `admin_passwd` and the Odoo user `admin`. |
| Hard | Design a three-file layout (`odoo.dev.conf`, `odoo.staging.conf`, `odoo.prod.conf`) listing which keys differ and why. |

**WHAT THIS UNLOCKS NEXT:** Config names the paths and secrets — but someone still has to install Odoo on a real Linux host, run it as a service user, and keep it alive across reboots. That is Linux deployment.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 69:** You can explain every critical `odoo.conf` key and why `dbfilter` + `admin_passwd` are security controls, not developer conveniences.

> **Phase 69 complete?** [Continue to Phase 70](#phase-70---linux-deployment)

<a id="phase-70"></a>

# PHASE 70 - Linux Deployment

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Describe a sane on-premise layout: dedicated OS user, Python venv or packaged install, PostgreSQL role (not superuser), systemd service, and a repeatable start/stop/upgrade routine aligned with the [source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html) docs.

**WHAT YOU SHOULD KNOW FIRST:** Phase 69 — configuration as policy. Phase 5 — you have already run Odoo locally.

**LEARNING RESOURCES:**

- [Source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html)
- [Deploy / system configuration](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [odoo/odoo](https://github.com/odoo/odoo) — `setup/debinstall.sh`, debian packaging hints

## 70.1 From “It Runs in My Shell” to “It Survives Reboot”

A developer session dies when the SSH window closes. Production needs:

1. A **non-root** OS user that owns the code and filestore (commonly `odoo`).
2. PostgreSQL role for that app — **not** the `postgres` superuser (Odoo forbids connecting as `postgres`; docs also warn the DB user must not be a superuser).
3. A **process supervisor** (`systemd`) that starts Odoo on boot and restarts it on crash.
4. Clear directories: code, config, logs, data.

**TYPICAL LAYOUT:**

```text
/opt/odoo/
  odoo/              # Community source (git clone --branch 18.0)
  enterprise/        # optional Enterprise addons
  custom/            # your addons (git)
  venv/              # Python virtualenv
/etc/odoo/
  odoo.conf
/var/lib/odoo/       # data_dir (filestore, sessions)
/var/log/odoo/
  odoo.log
```

Clone Community (and Enterprise if licensed) on the target branch, create a venv, install dependencies (`setup/debinstall.sh` on Debian/Ubuntu or pip from requirements), create the PostgreSQL role with createdb rights only if you still need the DB manager — many prod setups later remove createdb.

## 70.2 systemd Is Your Operator Interface

A minimal unit sketch:

```ini
[Unit]
Description=Odoo 18
After=network.target postgresql.service

[Service]
Type=simple
User=odoo
Group=odoo
ExecStart=/opt/odoo/venv/bin/python /opt/odoo/odoo/odoo-bin -c /etc/odoo/odoo.conf
Restart=on-failure
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
```

Operators then use:

```bash
sudo systemctl enable --now odoo
sudo systemctl status odoo
sudo journalctl -u odoo -f
```

**Upgrade ritual (module code):** pull Git → restart or rolling restart → run `-u module` in a maintenance window on a known DB — never “edit production files by hand and hope.”

**Install ritual (new server):** OS packages → Postgres role → clone → venv → conf → systemd → create DB → install base apps → deploy custom addons → verify HTTPS (next phases).

## 70.3 Permissions and Blast Radius

- Filestore under `data_dir` must be writable by the service user.
- Config files with passwords: mode `640`, owned by `root:odoo` or `odoo:odoo`.
- Do not run Odoo as root.
- Separate “deploy key” Git access from personal developer SSH keys when possible.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Draw the directory layout above and label which paths belong in backups. |
| Medium | Write a systemd unit for your lab machine and verify `systemctl status` after start. |
| Hard | Document a runbook: “deploy new addon version” with pull, restart, `-u`, smoke tests, and rollback. |

**WHAT THIS UNLOCKS NEXT:** Binding Odoo to port 8069 on localhost is not how the internet should talk to it. You need a reverse proxy and HTTPS.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 70:** You can place Odoo under a service user with systemd and explain why the PostgreSQL role is not a superuser.

> **Phase 70 complete?** [Continue to Phase 71](#phase-71---reverse-proxy--https)

<a id="phase-71"></a>

# PHASE 71 - Reverse Proxy & HTTPS

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Put nginx (or similar) in front of Odoo for TLS termination, HTTP→HTTPS redirect, long timeouts, and websocket/livechat upstreams — with `proxy_mode = True` only when the proxy is trusted.

**WHAT YOU SHOULD KNOW FIRST:** Phase 69 — `proxy_mode` and `dbfilter`. Phase 70 — Odoo listening on localhost:8069.

**LEARNING RESOURCES:**

- [Deploy — HTTPS section](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [Security recommendations](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html) (same deploy doc)
- Official nginx samples in the deploy documentation

## 71.1 Why Odoo Must Not Speak Cleartext on the Internet

Odoo transmits authentication material over HTTP unless you terminate TLS. Official deploy docs are blunt: a secure deployment **must** use HTTPS. The usual pattern:

```text
Browser  --TLS-->  nginx:443  --HTTP-->  127.0.0.1:8069 (Odoo HTTP)
                              --HTTP-->  127.0.0.1:8072 (livechat worker port)
```

nginx holds certificates; Odoo stays on loopback. Enable `proxy_mode = True` so Odoo trusts `X-Forwarded-For` / `X-Forwarded-Proto` from **that** proxy — never enable proxy mode on a naked public port (clients could spoof headers).

## 71.2 What the Proxy Must Do

From the official nginx sketch:

- `upstream odoo` → `127.0.0.1:8069`
- `upstream odoochat` → `127.0.0.1:8072` for websocket/livechat
- Long `proxy_*_timeout` values (Odoo examples use ~720s) for long requests/reports
- Redirect port 80 → 443
- Forward headers: Host, X-Forwarded-Host, X-Forwarded-For, X-Forwarded-Proto
- Optional: serve `/web/static/` with longer cache headers

**COMMON FAILURES:**

| Symptom | Likely cause |
| --- | --- |
| Mixed content / wrong URLs | `proxy_mode` off or missing `X-Forwarded-Proto` |
| Livechat/websocket dies | chat upstream or Upgrade headers missing |
| Timeouts on PDF/report | proxy read timeout too low |
| Wrong DB on website | `dbfilter` not aligned with hostname |

Certificates: Let’s Encrypt via certbot is common for labs; enterprises may use their own PKI. Renewals must be automated — expired certs look like “Odoo is down.”

## 71.3 Hardening at the Edge

Once DB selection is correct:

- Consider blocking `/web/database/*` at nginx in production.
- Rate-limit login paths if under attack.
- Do not expose PostgreSQL to the public internet.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Explain why `proxy_mode = True` is dangerous without a reverse proxy. |
| Medium | Write an nginx server block for `odoo.example.com` with HTTP redirect and two upstreams. |
| Hard | Trace a login request: TLS → nginx → Odoo → Postgres, listing headers at each hop. |

**WHAT THIS UNLOCKS NEXT:** One threaded process behind HTTPS still collapses under real concurrent users. Production needs **workers**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 71:** You can terminate TLS at a proxy, set `proxy_mode` correctly, and name the livechat port’s role.

> **Phase 71 complete?** [Continue to Phase 72](#phase-72---workers--production-configuration)

<a id="phase-72"></a>

# PHASE 72 - Workers & Production Configuration

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Choose multi-processing workers vs the default multi-threaded server; apply official rules of thumb for worker count and RAM; set memory/time/request limits; and explain cron and livechat workers.

**WHAT YOU SHOULD KNOW FIRST:** Phase 71 — proxy in front. Phase 60–63 — transactions and performance (workers amplify bad queries).

**LEARNING RESOURCES:**

- [Builtin server / workers (deploy docs)](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [CLI options](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)

## 72.1 Two Servers Inside One Binary

Odoo’s built-in HTTP stack can run two ways:

**Multi-threaded (`workers = 0`, default):** one process, threads for HTTP and cron. Fine for **development**, demos, and Docker defaults. Python’s GIL limits CPU scaling. Available on more OSes (including Windows for the threaded mode).

**Multi-processing (`workers > 0`):** a pool of worker **processes** for HTTP, plus cron workers, plus an event-driven livechat HTTP worker on an alternate port. Opt-in for **production**. Highly tuned for Linux — **not** available on Windows.

```text
workers = 0 (dev)
  [ one process ]
     +-- HTTP threads
     +-- cron threads

workers = 8 (prod Linux)
  [ master ]
     +-- HTTP worker × 8
     +-- cron worker(s)
     +-- livechat worker :8072
     +-- reaper (kills/restarts runaway workers)
```

## 72.2 Sizing — Official Rules of Thumb

From Odoo’s deploy documentation:

- **Worker count rule of thumb:** `(#CPU × 2) + 1`
- Rough concurrency: **1 worker ≈ 6 concurrent users**
- Cron needs CPU too — count it in capacity planning
- RAM estimate assumes ~20% heavy / ~80% light requests  
  - Heavy worker ≈ ~1 GB  
  - Light worker ≈ ~150 MB  
  - `Needed RAM ≈ #workers × (0.8×150MB + 0.2×1024MB)`

**Worked example (from docs):** 4 CPU, ~60 concurrent users → theoretical workers ≈ 10 by users, ≈ 9 by CPU formula → use **8 HTTP workers + 1 cron**, ~3 GB for Odoo processes alone (Postgres and OS need more).

```ini
[options]
workers = 8
max_cron_threads = 1
limit_memory_soft = 629145600
limit_memory_hard = 1677721600
limit_request = 8192
limit_time_cpu = 600
limit_time_real = 1200
```

**What the limits do:**

| Limit | Role |
| --- | --- |
| `limit_memory_soft` | Worker recycled after request when RSS exceeds soft limit |
| `limit_memory_hard` | Worker killed immediately if hard limit exceeded |
| `limit_request` | Recycle after N requests (fights slow leaks) |
| `limit_time_cpu` / `limit_time_real` | Kill runaway CPU / wall-clock requests |

These are **safety rails**, not substitutes for fixing N+1 queries (Story XIV).

## 72.3 Failure Modes You Must Recognize

- Setting `workers` high on a small RAM box → OOM killer → random 502s
- Forgetting livechat upstream when workers enabled → chat broken
- Running workers on Windows → unsupported; stay threaded or use Linux
- Long PDF reports hitting `limit_time_real` → raise carefully or move heavy jobs to queue/cron
- `proxy_mode` off behind nginx → wrong scheme/host with workers still “up”

**Interview staple:** “How many workers?” — answer with CPU formula, concurrent-user estimate, RAM math, and “measure with monitoring,” not a magic number.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Contrast threaded vs multiprocessing in one paragraph. |
| Medium | Size workers+RAM for 8 vCPU and 120 concurrent users; show arithmetic. |
| Hard | Given OOM kills every afternoon, list three config checks and three code checks before raising memory limits. |

**WHAT THIS UNLOCKS NEXT:** Workers talk to PostgreSQL hard. You need database operations that keep connections, vacuum, and roles healthy.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 72:** You can justify a `workers` value with CPU, concurrency, and RAM — and name what soft/hard memory limits do.

> **Phase 72 complete?** [Continue to Phase 73](#phase-73---postgresql-operations)

<a id="phase-73"></a>

# PHASE 73 - PostgreSQL Operations

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Operate the Postgres side of Odoo: roles and privileges, connection limits vs worker counts, basic vacuum/analyze awareness, and when Odoo and Postgres live on separate hosts.

**WHAT YOU SHOULD KNOW FIRST:** Phase 58–61 — schema and plans. Phase 72 — each worker opens DB connections.

**LEARNING RESOURCES:**

- [Deploy — PostgreSQL section](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [PostgreSQL docs — routine vacuuming](https://www.postgresql.org/docs/current/routine-vacuuming.html)

## 73.1 Odoo Is Only as Healthy as Its Database

Every ORM write becomes SQL. Workers multiply connections. Official sample configs raise `max_connections` thoughtfully (example values around 80 on a small dedicated Postgres). Rough planning:

```text
max_connections ≳ (odoo workers × connections per worker) + cron + admin + margin
```

If Postgres refuses connections, users see errors that look like “Odoo is down.”

**Roles:** create an `odoo` role that owns the application database. Do **not** use a superuser. For locking down the DB manager: no `CREATEDB` on the app role and a different owner strategy — see deploy docs.

**Remote Postgres:** configure `pg_hba.conf` and `listen_addresses` carefully; prefer SSL (`db_sslmode` in Odoo: `require` / `verify-full` as appropriate). Prefer private network over public exposure.

## 73.2 Maintenance Without Superstition

- **Autovacuum** usually handles dead tuples; giant bulk deletes/imports may need attention.
- **ANALYZE** keeps the planner honest after large data shape changes (Story XIV).
- Watch disk for WAL and data growth — a full disk stops Odoo cold.
- Extensions and custom SQL in modules must be upgrade-safe (Story XVII).

**Operator checklist weekly:** connections in use, slow queries, disk %, backup success (next phase), checkpoint/WAL warnings.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | List why the Odoo DB user must not be a superuser. |
| Medium | Given `workers = 8`, propose a `max_connections` floor and justify. |
| Hard | Write a one-page ops note: separate DB host, SSL mode, and firewall rules. |

**WHAT THIS UNLOCKS NEXT:** A perfect Postgres that you cannot restore after ransomware or human error is still a single point of failure. Backups.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 73:** You can connect worker count to Postgres connections and state the non-superuser rule.

> **Phase 73 complete?** [Continue to Phase 74](#phase-74---backups--restore)

<a id="phase-74"></a>

# PHASE 74 - Backups & Restore

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Design and test backups that include **both** the PostgreSQL dump **and** the filestore; practice restore on a spare host; define RPO/RTO in plain language.

**WHAT YOU SHOULD KNOW FIRST:** Phase 69 — `data_dir`. Phase 73 — Postgres ownership.

**LEARNING RESOURCES:**

- [Deploy documentation](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html) (security + ops context)
- [PostgreSQL backup/restore](https://www.postgresql.org/docs/current/backup.html)
- Odoo database manager backup (dev/small) vs `pg_dump` (production discipline)

## 74.1 Two Halves of One System

Odoo state is not “just the database.”

```text
BUSINESS STATE
  ├── PostgreSQL database  (records, settings, attachments metadata)
  └── Filestore under data_dir/filestore/<db>/  (binary attachments)

Restore only the dump  →  broken attachment links
Restore only filestore →  orphan files, empty business data
```

A backup is valid only if **both** pieces match the same point in time as closely as your RPO allows.

**RPO (Recovery Point Objective):** how much data you can afford to lose (e.g. 24h if nightly backups).  
**RTO (Recovery Time Objective):** how long until the business is usable again.

## 74.2 Production-Grade Pattern

1. `pg_dump` (custom or plain) of the DB — or continuous WAL archiving for tighter RPO.
2. Snapshot/rsync/tar of `data_dir` filestore for that DB.
3. Store **off-box** (another machine, object storage) — backups on the same disk die with the disk.
4. Encrypt backups if they leave your secure network.
5. **Restore test** monthly on a staging host. An untested backup is a rumor.

```bash
# Sketch — adapt paths/users; run under maintenance discipline
pg_dump -Fc -U odoo mycompany > /backup/mycompany-$(date +%F).dump
tar -C /var/lib/odoo/filestore -czf /backup/mycompany-filestore-$(date +%F).tgz mycompany
```

Odoo’s web database manager can dump a DB for small/lab use; serious production prefers scripted `pg_dump` + filestore with monitoring of job success.

## 74.3 Restore Drill

1. Provision Postgres + empty data_dir.
2. Restore dump into a new DB name.
3. Extract filestore into `data_dir/filestore/<dbname>/`.
4. Point `odoo.conf` at the restored DB; start Odoo.
5. Smoke-test: login, open a record with an attachment, run a report, confirm cron.

Document who can restore, where keys live, and how long the last drill took.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Explain why filestore must join DB backups. |
| Medium | Write a backup script outline and a restore checklist. |
| Hard | Define RPO/RTO for a company that invoices daily, and size backup frequency accordingly. |

**WHAT THIS UNLOCKS NEXT:** Not every team runs bare metal. Odoo.sh is the official PaaS path many projects use instead of self-managed Linux.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 74:** You can define a backup that includes dump + filestore and describe a restore drill.

> **Phase 74 complete?** [Continue to Phase 75](#phase-75---odoosh)

<a id="phase-75"></a>

# PHASE 75 - Odoo.sh

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Explain what Odoo.sh provides (Git-based builds, staging/production databases, CI-ish checks) versus self-hosted Linux, and when each fits.

**WHAT YOU SHOULD KNOW FIRST:** Phase 70–74 — you understand what Odoo.sh is automating for you.

**LEARNING RESOURCES:**

- [Odoo.sh documentation hub](https://www.odoo.com/documentation/18.0/administration/odoo_sh.html) (follow current official pages for branches, builds, and databases)
- [Odoo developer docs](https://www.odoo.com/documentation/18.0/developer.html)

## 75.1 Git Push as Deploy

Odoo.sh is Odoo’s cloud platform: you connect a Git repository; pushes build servers; branches map to environments (typically production + staging/dev databases). You still write the same modules — the platform owns much of OS, Postgres, HTTPS, and backup plumbing.

```text
feature branch  -->  build  -->  test DB
staging branch  -->  build  -->  staging DB (often prod copy)
production      -->  build  -->  live DB
```

You trade control for speed: less SSH DIY, more platform conventions (manifest versions, test status, build logs).

## 75.2 What You Still Own

- Module quality, security, and upgrade scripts
- Not stuffing secrets into Git
- Reviewing build failures and test red builds
- Functional UAT on staging before production merges
- Understanding limits (custom system packages, exotic daemons)

**When self-host instead:** strict data residency, unusual network integrations, heavy custom infra, or org policy against PaaS.  
**When Odoo.sh fits:** standard Odoo apps + custom addons, team already on Git, want staging clones without inventing ops from scratch.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | List three responsibilities Odoo.sh takes vs three you keep. |
| Medium | Design a branch strategy: feature → staging → production. |
| Hard | Compare cost/control of Odoo.sh vs the Linux stack from Phases 70–74 for a 40-user SME. |

**WHAT THIS UNLOCKS NEXT:** Containers are another packaging story — Docker concepts for Odoo without pretending containers erase ops.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 75:** You can describe Odoo.sh’s Git→build→DB loop and what it does not absolve you from.

> **Phase 75 complete?** [Continue to Phase 76](#phase-76---docker-concepts-for-odoo)

<a id="phase-76"></a>

# PHASE 76 - Docker Concepts for Odoo

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Reason about official [odoo/docker](https://github.com/odoo/docker) images: Odoo container + Postgres container, volumes for filestore and DB data, env vars, and the fact that default images lean on the **threaded** server unless you configure otherwise.

**WHAT YOU SHOULD KNOW FIRST:** Phase 70–74 — same concerns, different packaging.

**LEARNING RESOURCES:**

- [odoo/docker](https://github.com/odoo/docker)
- [Deploy docs — workers note for Docker](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [Source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html) for non-container comparison

## 76.1 Containers Package Processes, Not Magic

A typical compose mental model:

```text
[odoo container]  --TCP-->  [postgres container]
       |                         |
   volume: filestore         volume: pgdata
       |
   bind/mount: custom addons
```

You still need: backups of **both** volumes, HTTPS in front (Traefik/nginx/Caddy), resource limits, and upgrade discipline. Docker does not remove `dbfilter`, secrets, or worker sizing — it changes how you start processes.

Official images are a starting point; read their docs for env vars (`HOST`, `USER`, `PASSWORD`, etc.) and mounted addon paths. Default worker mode for containers is often threaded (`workers = 0`) per deploy docs — production containers on Linux can enable multiprocessing if the image/process setup allows, with the same RAM math as Phase 72.

## 76.2 Pitfalls Specific to Containers

- Losing unnamed volumes = losing filestore or Postgres
- Running as root inside casually
- Putting production secrets in compose files committed to Git
- “It works on Docker Desktop” ≠ production kernel/cgroup limits
- Upgrading the image tag without a tested `-u` / migration plan

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Sketch compose services for odoo + db + proxy. |
| Medium | List which volumes must be in the backup set. |
| Hard | Write a short ADR: Docker Compose vs bare systemd for a client with one VPS. |

**WHAT THIS UNLOCKS NEXT:** Whatever you deploy on, you need eyes — monitoring and logs — before users become your alerting system.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 76:** You can map containers to the same backup and proxy requirements as bare metal.

> **Phase 76 complete?** [Continue to Phase 77](#phase-77---monitoring--logs)

<a id="phase-77"></a>

# PHASE 77 - Monitoring & Logs

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Read Odoo and nginx/Postgres logs under load; watch worker memory kills, HTTP 5xx rates, disk, and backup job success; set a minimal alert set for production.

**WHAT YOU SHOULD KNOW FIRST:** Phase 64 — logging mindset. Phase 72 — worker limits leave fingerprints in logs.

**LEARNING RESOURCES:**

- [CLI / logging](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)
- [Deploy documentation](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)

## 77.1 Logs Are the First Timeline

Configure `logfile` and a sensible `log_level` (`info` for prod; temporarily `debug` for incidents). Correlate:

```text
nginx access/error  →  odoo.log worker events  →  postgres log
        |                      |                      |
   502/504 timing        traceback / MemoryError   fatal / connection
```

Workers recycled by `limit_memory_*` or time limits often precede “random” user errors. Cron failures hide in logs until invoices stop generating.

## 77.2 Minimum Useful Monitoring

| Signal | Why |
| --- | --- |
| Process up (systemd/container) | Cold downtime |
| HTTP 5xx rate | User-visible failure |
| Disk % on data + PG | Silent death when full |
| Backup job success | Future you |
| CPU / RAM / load | Capacity before meltdown |
| Certificate expiry | Avoidable outage |

Optional deeper: slow query logs, pg_stat_activity, APM — after basics work.

**Alerting rule:** pages should be rare and actionable. Email on backup failure; page on site down.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Given a traceback timestamp, list which three log files you open first. |
| Medium | Design a five-alert starter pack for a 2-vCPU Odoo VM. |
| Hard | Walk an incident: “reports timeout after 10 minutes” using limits from Phase 72 and proxy timeouts from Phase 71. |

**WHAT THIS UNLOCKS NEXT:** You can keep a system alive — Story XVI project asks you to deploy one end-to-end. After that, Story XVII faces the other half of operations: **upgrades** without destroying live data.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 77:** You can name a minimal monitor set and correlate nginx/Odoo/Postgres logs during an incident.

> **Phase 77 complete?** [Build the Story XVI project](#story-project---deploy-an-odoo-system) · [Continue to Story XVII](#story-xvii--upgrades--maintenance)

<a id="story-project---deploy-an-odoo-system"></a>

# STORY PROJECT — Deploy an Odoo System

**Track:** Deployment

**WHAT YOU WILL BE ABLE TO DO:** Deploy a working Odoo environment (Linux **or** Docker Compose **or** Odoo.sh) with HTTPS (or a documented local TLS stand-in for labs), sane config, backup/restore drill, and a short runbook — mapped to [`Projects.md`](../guides/Projects.md) when a matching card exists.

## The Brief

Take a module you already trust from earlier stories (or a small custom addon) and put it on a **non-laptop** path:

1. Write production-shaped `odoo.conf` (dbfilter, admin_passwd, paths, proxy_mode as appropriate).
2. Run behind a reverse proxy with HTTPS **or** document why your lab uses a tunnel/self-signed cert.
3. Enable workers **if** on Linux multiprocessing; otherwise document threaded mode limits.
4. Perform backup of DB **and** filestore; restore onto a second database name and prove attachments open.
5. Capture logs for one controlled failure (e.g. stop Postgres briefly) and write what you saw.
6. Deliver a one-page runbook: start/stop, deploy addon, backup, restore, rollback.

**Acceptance:** a second person (or future you in a week) can follow the runbook without Slack archaeology.

**WHAT COMES NEXT:** Deployment keeps today’s version alive. Businesses change modules and Odoo versions. Story XVII — Upgrades & Maintenance — teaches how to change a living system without gambling the database.

---

# STORY XVII — UPGRADES & MAINTENANCE

**Track:** Upgrades

A deployed Odoo that never changes is rare. Fields get renamed, workflows tighten, Odoo itself ships a new major version. Story XVII teaches the discipline that keeps living databases alive: **module versioning**, schema evolution, data migrations, major version upgrades, upgrade-safe customization, and debugging legacy modules.

The golden rule: **never invent a one-off SQL fix on production that you cannot replay on a clone.**

---

<a id="phase-78"></a>

# PHASE 78 - Module Versioning

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Use `__manifest__.py` `version` intentionally (series + module revision), know when `-u` runs, and relate version bumps to migration script folders.

**WHAT YOU SHOULD KNOW FIRST:** Phase 8 — module lifecycle. Phase 65–66 — tests that should pass before and after `-u`.

**LEARNING RESOURCES:**

- [Module manifests](https://www.odoo.com/documentation/18.0/developer/reference/backend/module.html)
- [Upgrades reference](https://www.odoo.com/documentation/18.0/developer/reference/upgrades.html)
- [Upgrade scripts](https://www.odoo.com/documentation/18.0/developer/reference/upgrades/upgrade_scripts.html)

## 78.1 Version Is a Contract with the Database

In the manifest:

```python
{
    "name": "Library",
    "version": "18.0.1.2.0",
    "depends": ["base", "mail"],
    ...
}
```

Common Odoo convention: `odoo_series.major.minor.patch` (exact house style varies by team — pick one and stay consistent). The series prefix (`18.0`) signals which Odoo generation the module targets.

When you change Python models, XML, or security, you typically:

1. Bump `version`
2. Ship code
3. Run `odoo-bin -u library -d thedb` (or install update from Apps)

`-u` reloads module data/updates according to rules (`noupdate`, etc.) and can trigger **migration scripts** keyed to version directories (Phase 80).

**Without a bump:** teammates and CI cannot tell “new code needs upgrade.”  
**With a careless bump and no migrations:** `-u` may create columns but leave old data stranded.

## 78.2 What an Upgrade Pass Actually Does

```text
Detect module version change
        |
        v
Run pre-migrate scripts (if any) for crossing versions
        |
        v
Update registry / schema from Python field definitions
        |
        v
Reload XML/CSV per noupdate rules
        |
        v
Run post-migrate scripts
        |
        v
Store new module version in the database
```

Interview answer: “We bump the manifest, write migrations when data must move, test `-u` on a staging clone, then schedule production.”

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Read a third-party module’s version history and list what each bump likely meant. |
| Medium | Propose a versioning policy for a team (when to bump patch vs minor). |
| Hard | Explain how CI should fail if models change but version did not. |

**WHAT THIS UNLOCKS NEXT:** Version bumps meet reality when columns rename or types change — schema changes.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 78:** You can explain why manifest version and `-u` are paired, and what happens in an upgrade pass at a high level.

> **Phase 78 complete?** [Continue to Phase 79](#phase-79---schema-changes)

<a id="phase-79"></a>

# PHASE 79 - Schema Changes

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Evolve fields safely: add columns, rename with data preservation, change types carefully, and avoid “delete field in prod on Friday” disasters.

**WHAT YOU SHOULD KNOW FIRST:** Phase 9–12 — fields. Phase 78 — versioning.

**LEARNING RESOURCES:**

- [ORM fields](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Upgrade scripts](https://www.odoo.com/documentation/18.0/developer/reference/upgrades/upgrade_scripts.html)

## 79.1 ORM Schema Is Not Free-Form SQL

When you add `priority = fields.Selection(...)`, an upgrade usually creates the column. When you **remove** a field from Python, Odoo may leave the column or clean it depending on version/tools — never assume production data is disposable.

**Safe patterns:**

| Change | Approach |
| --- | --- |
| Add field | Add field + bump version + `-u`; set defaults carefully |
| Rename field | Add new field → migrate data (Phase 80) → deprecate old → remove later |
| Change Selection keys | Map old keys to new in migration; do not silently orphan values |
| Char → Many2one | Create relation, migrate values, then switch UI |
| Shorten size / change type | Validate existing data first on a clone |

**Dangerous patterns:** drop column with live reports depending on it; reuse a column name for a different meaning; change `company_id` semantics casually.

```text
BAD:  rename field in Python only, hope values follow
GOOD: pre-migrate copies old_column → new_column, then model uses new name
```

## 79.2 Staging Clone Is Mandatory

Copy production (or a sanitized subset) → run `-u` → run tests → open critical forms → only then plan the maintenance window. Schema surprises love large tables and weird historical NULLs.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | List three schema changes that need a migration script, not just `-u`. |
| Medium | Plan renaming `x_code` → `legacy_code` without downtime longer than a short window. |
| Hard | Design a two-release deprecation for removing a field used in QWeb reports. |

**WHAT THIS UNLOCKS NEXT:** Schema is structure; **data migrations** move the meaning sitting in the rows.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 79:** You prefer expand-migrate-contract over in-place destructive renames.

> **Phase 79 complete?** [Continue to Phase 80](#phase-80---data-migrations)

<a id="phase-80"></a>

# PHASE 80 - Data Migrations

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Write and test upgrade scripts (`migrations/` / official upgrade script API) that move data idempotently where possible, and know pre vs post migrate timing.

**WHAT YOU SHOULD KNOW FIRST:** Phase 79 — schema strategy. Phase 65 — TransactionCase for business rules after migrate.

**LEARNING RESOURCES:**

- [Upgrade scripts](https://www.odoo.com/documentation/18.0/developer/reference/upgrades/upgrade_scripts.html)
- [Upgrade utils](https://www.odoo.com/documentation/18.0/developer/reference/upgrades/upgrade_utils.html)
- [Upgrades index](https://www.odoo.com/documentation/18.0/developer/reference/upgrades.html)

## 80.1 Why Migrations Exist

`-u` can create a new column. It will not invent business meaning: “every old `state='open'` becomes `'confirmed'`,” or “copy `old_code` into `legacy_code`.” That is **your** script.

Classic layout (know the exact API for your Odoo series — official upgrade scripts docs are authoritative):

```text
my_module/
  migrations/
    18.0.1.1.0/
      pre-migrate.py
      post-migrate.py
```

**Pre-migrate:** often runs before schema sync — good for renaming columns SQL-side so ORM does not lose data.  
**Post-migrate:** after ORM schema — good for filling new fields, recomputing, cleaning.

```python
# Conceptual pre-migrate sketch — verify against current upgrade script docs
def migrate(cr, version):
    cr.execute(
        """
        UPDATE library_book
           SET legacy_code = old_code
         WHERE legacy_code IS NULL
           AND old_code IS NOT NULL
        """
    )
```

## 80.2 Idempotency and Reality

Scripts may be re-run in recovery scenarios. Prefer:

- `WHERE new_col IS NULL AND old_col IS NOT NULL`
- Existence checks before DDL
- Logging row counts

Never assume a laptop DB’s shape matches production. Test on a **clone with ugly data**.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Write SQL that copies `old_code` → `legacy_code` only when needed. |
| Medium | Design pre vs post steps for replacing a Char status with Selection. |
| Hard | Make a migration that also fixes invalid emails found during the move, with a report of skipped rows. |

**WHAT THIS UNLOCKS NEXT:** Module migrations are one ladder. Jumping **Odoo 16 → 17 → 18** is a bigger ladder — major version upgrades.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 80:** You can place logic in pre vs post migrate and test on a clone before production.

> **Phase 80 complete?** [Continue to Phase 81](#phase-81---odoo-version-upgrades)

<a id="phase-81"></a>

# PHASE 81 - Odoo Version Upgrades

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Plan a major Odoo version upgrade: inventory custom modules, check deprecated APIs, use official upgrade paths/tools where applicable, and rehearse on staging.

**WHAT YOU SHOULD KNOW FIRST:** Phase 78–80 — module-level discipline. Phase 82 will deepen upgrade-safe coding.

**LEARNING RESOURCES:**

- [Upgrades reference](https://www.odoo.com/documentation/18.0/developer/reference/upgrades.html)
- [Odoo 18 developer docs](https://www.odoo.com/documentation/18.0/developer.html)
- Platform upgrade offerings / Odoo.sh upgrade docs (official pages for your edition)

## 81.1 Major Versions Change the Platform

A major upgrade can touch: ORM APIs, view architectures, JS/OWL, accounting engines, website builders, and removed modules. Custom code that monkey-patched core is the first to burn.

**Planning checklist:**

1. Inventory installed modules (standard + OCA + custom).
2. Ensure custom modules declare the target series and pass tests on it.
3. Read release notes / migration notes for broken changes.
4. Clone production → upgrade path on staging (often hop versions as required by tooling).
5. Fix custom modules; retest critical flows (quote→invoice, payments, inventory).
6. Schedule production with rollback plan (Phase 74 backups taken **immediately before**).

```text
Prod backup
    |
    v
Staging restore → platform upgrade scripts → -u customs → UAT
    |
    v
Fix → repeat until green
    |
    v
Maintenance window on prod
```

## 81.2 Community vs Enterprise Notes

Enterprise upgrades may involve Odoo’s upgrade service or Odoo.sh flows. Community teams often combine OpenUpgrade-style community tooling (evaluate carefully for your version) with manual custom work. Prefer **official** docs and supported paths for the edition you run; do not gamble production on a blog post.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | List five areas of a custom Sales module that might break on a major upgrade. |
| Medium | Write an upgrade project plan with roles: DBA, functional tester, developer. |
| Hard | Given three brittle `_inherit` overrides of private methods, propose a safer redesign before upgrading. |

**WHAT THIS UNLOCKS NEXT:** Surviving upgrades is easier if you wrote **upgrade-safe customizations** from day one.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 81:** You can outline a major-version upgrade rehearsal with backup and UAT gates.

> **Phase 81 complete?** [Continue to Phase 82](#phase-82---upgrade-safe-customization)

<a id="phase-82"></a>

# PHASE 82 - Upgrade-Safe Customization

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Prefer extension (`_inherit`, xpath, intentional APIs) over editing core files; avoid private method dependence; keep overrides thin and tested.

**WHAT YOU SHOULD KNOW FIRST:** Phases 32–35 — inheritance. Phase 81 — what breaks on upgrades.

**LEARNING RESOURCES:**

- [Inheritance](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#inheritance)
- [View inheritance](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html)
- [odoo/odoo](https://github.com/odoo/odoo) — study how official modules extend each other

## 82.1 The Customization Ladder (Safest First)

1. **Configuration** — settings, studio/automated actions (when appropriate), options
2. **Data** — secure XML with `noupdate` discipline
3. **Extension modules** — `_inherit`, view xpath, new models related to standard ones
4. **Copy-paste of standard module** — last resort; you inherit every upstream bugfix as a merge hell
5. **Editing `addons/sale` in place** — forbidden in professional work

```text
NEED: extra field on sale.order
SAFE: custom module _inherit sale.order + xpath on form
UNSAFE: edit sale/models/sale_order.py on the server
```

## 82.2 Thin Overrides, Public Methods, Tests

- Call `super()` unless you have a documented reason not to
- Prefer hooking documented methods / adding new methods called from buttons you own
- If you must override, write TransactionCase covering the flow (Story XV)
- JS patches: same rule — patch narrowly (Story XIII)

Upgrade-safe code is not “clever.” It is **boring, tested, and upstream-friendly.**

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Find one override in a sample module and judge if it calls `super()`. |
| Medium | Refactor a hypothetical core edit into an extension module outline. |
| Hard | Review a module that overrides `create` on `account.move` and list upgrade risks. |

**WHAT THIS UNLOCKS NEXT:** Real projects inherit **legacy** modules written before these rules. Debugging them is Phase 83.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 82:** You can argue against editing core and show an extension-shaped alternative.

> **Phase 82 complete?** [Continue to Phase 83](#phase-83---debugging-legacy-modules)

<a id="phase-83"></a>

# PHASE 83 - Debugging Legacy Modules

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Triage old modules: map depends, find brittle inherits, isolate monkey patches, add characterization tests before changing behavior.

**WHAT YOU SHOULD KNOW FIRST:** Phase 64 — debugging. Phase 82 — what “good” looks like.

**LEARNING RESOURCES:**

- [Testing](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [Logging / CLI](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)

## 83.1 Legacy Means “Unknown Invariants”

Before rewriting, **characterize**:

1. What models does it touch?
2. Which views/xpath are load-bearing?
3. Are there SQL constraints or raw `cr.execute`?
4. Does it patch JS?
5. Which business flows depend on it (ask users)?

Add tests that lock current behavior — even ugly behavior — so refactors do not “fix” the only process accounting still uses.

## 83.2 Common Legacy Smells

| Smell | Risk |
| --- | --- |
| `sudo()` everywhere | Security holes |
| Overridden `create` without `super` | Missed standard side effects |
| XPath on brittle absolute paths | Breaks when standard view changes |
| Copy of entire standard form | Unmergeable |
| No manifest version discipline | Mystery production state |
| Hardcoded IDs instead of xmlids | DB-specific landmines |

**Strategy:** strangler pattern — wrap, add tests, replace piece by piece, delete dead code only when coverage exists.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Given a legacy manifest, list depends and guess blast radius. |
| Medium | Write two characterization tests for a buggy `action_confirm` override. |
| Hard | Propose a three-sprint plan to make a legacy module upgrade-safe for 18.0. |

**WHAT THIS UNLOCKS NEXT:** Story XVII project — upgrade an existing module end-to-end. Then Story XVIII steps back from mechanics to **engineering judgment**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 83:** You characterize before you rewrite, and you can name legacy smells that break upgrades.

> **Phase 83 complete?** [Build the Story XVII project](#story-project---upgrade-an-existing-module) · [Continue to Story XVIII](#story-xviii--real-odoo-engineering)

<a id="story-project---upgrade-an-existing-module"></a>

# STORY PROJECT — Upgrade an Existing Module

**Track:** Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Take a module with intentional “old” schema, bump version, write migrations, run `-u` on a clone, and prove data survived — see also [`Projects.md`](../guides/Projects.md).

## The Brief

1. Start from a module that has a Char field you will replace or rename.
2. Bump manifest version.
3. Add pre/post migrate scripts that preserve data.
4. Update views/security as needed.
5. Run tests before and after `-u` on a database with seed rows.
6. Document rollback (restore backup) if upgrade fails.

**Acceptance:** a reviewer can read your migration notes and reproduce the upgrade on a fresh DB with fixtures.

**WHAT COMES NEXT:** You can deploy and upgrade. Clients still ask harder questions: should we customize at all? Story XVIII — Real Odoo Engineering — builds that judgment.

---

# STORY XVIII — REAL ODOO ENGINEERING

**Track:** Engineering Practice

Stories I–XVII taught you to build, secure, integrate, test, deploy, and upgrade. Story XVIII is about **judgment**: turning messy requirements into ERP design, splitting modules, choosing configuration vs customization vs integration, writing maintainable code, and collaborating with Git and code review like a professional team.

This is the difference between “I can write a module” and “I can be trusted with a production ERP.”

---

<a id="phase-84"></a>

# PHASE 84 - Requirements → ERP Design

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Interview stakeholders, map processes to Odoo apps, identify master data vs transactions, and produce a design that names modules and ownership — before writing models.

**WHAT YOU SHOULD KNOW FIRST:** Story I — ERP thinking. Phase 3 — core apps flow. Stories IV–IX — what custom modules can do.

**LEARNING RESOURCES:**

- [Odoo functional apps overview](https://www.odoo.com/documentation/18.0/) (Applications section)
- [`Projects.md`](../guides/Projects.md) — process-map style deliverables
- [`Interview.md`](../guides/Interview.md) — explaining design under pressure

## 84.1 Code Is the Last Step

A client says: “We need a better approval for vendor bills.” A junior opens `models/` and invents `x_approval`. An engineer asks:

- Who requests, who approves, who pays?
- Is this Accounting, Purchase, or a custom committee?
- Does standard Odoo already cover it with approvals / studio / tiers?
- What reporting must remain true for auditors?

**Design artifacts (lightweight):**

```text
Process map:  request → approve → post → pay
Master data:  vendors, products, analytic accounts
Transactions: bills, payments
Apps:         purchase? account? hr? custom?
Risks:        multi-company, tax, existing custom modules
```

Only then: module boundaries (Phase 85) and config vs code (Phase 86).

## 84.2 Requirements Smell Test

| Statement | Engineer hears |
| --- | --- |
| “Like Excel but shared” | Need audit trail, concurrency, permissions |
| “Just one more field” | Often a new process hiding |
| “Copy our old system” | Migrate process debt |
| “Make it flexible” | Undefined rules — push for examples |

Always collect **examples**: three real documents, three edge cases, one “this must never happen.”

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Turn “manage company cars” into master data vs transactions. |
| Medium | Interview script for a leave-approval ERP feature (10 questions). |
| Hard | Write a one-page design for quote→delivery→invoice with two companies sharing a catalog. |

**WHAT THIS UNLOCKS NEXT:** Design implies **module architecture** — how addons split and depend.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 84:** You refuse to start coding until process, apps, and risks are named.

> **Phase 84 complete?** [Continue to Phase 85](#phase-85---module-architecture)

<a id="phase-85"></a>

# PHASE 85 - Module Architecture

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Split features into addons with a clean `depends` graph; avoid god-modules; separate glue from core business.

**WHAT YOU SHOULD KNOW FIRST:** Phase 7–8 — anatomy and depends. Phase 84 — requirements map.

**LEARNING RESOURCES:**

- [Modules](https://www.odoo.com/documentation/18.0/developer/reference/backend/module.html)
- Study `depends` in [odoo/odoo](https://github.com/odoo/odoo) official apps

## 85.1 Depends Are Architecture

```text
BAD:  everything_custom  depends on  sale, stock, account, hr, website, ...
GOOD:
  my_partner_ext          → base
  my_sale_approval        → sale, my_partner_ext
  my_sale_stock_bridge    → my_sale_approval, stock
```

Small modules:

- Install only what a DB needs
- Upgrade blast radius stays small
- Tests stay focused
- Teams can own areas

**Glue modules** connect two apps without forcing every DB to install both stacks until needed.

## 85.2 Naming and Layers

- `*_account` for accounting specifics
- Avoid circular depends (A→B→A)
- Keep HTTP/portal in modules that already depend on `website`/`portal`
- Shared abstract models in a thin base module

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Draw depends for library + portal borrower history. |
| Medium | Split a god-module list of models into 3 manifests. |
| Hard | Detect a circular depends risk in a hypothetical graph and fix it. |

**WHAT THIS UNLOCKS NEXT:** Even perfect module splits fail if you customized something that should have been **configuration**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 85:** You can sketch a depends graph that keeps upgrade and install blast radius small.

> **Phase 85 complete?** [Continue to Phase 86](#phase-86---choosing-customization-vs-configuration)

<a id="phase-86"></a>

# PHASE 86 - Choosing Customization vs Configuration

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Decide when settings, automated actions, studio/optional tools, or standard workflows beat writing Python — and when they do not.

**WHAT YOU SHOULD KNOW FIRST:** Phase 39 — automated actions. Phase 84 — requirements.

**LEARNING RESOURCES:**

- Odoo Applications documentation for the apps you configure
- [Automated actions / studio](https://www.odoo.com/documentation/18.0/) (edition-dependent features — verify what your edition includes)

## 86.1 Configuration First

Prefer configuration when:

- Standard fields/workflows already express the rule
- Business users must change thresholds without deploys
- The rule is simple (email on stage change, required field via form)

Prefer **customization** when:

- Invariants must be enforced server-side with tests
- Performance-sensitive logic
- Complex multi-model transactions
- Security must not rely on a UI-only rule
- You need upgrade-safe, reviewable code in Git

```text
“Discount over 20% needs manager”
  → try standard approval / activity / group button first
  → customize if audit + multi-company + pricing engine demand it
```

## 86.2 The Hidden Cost of “No Code”

Automated actions and studio edits can become invisible spaghetti: no PR review, no tests, broken after upgrades. If configuration grows complex, **graduate it to a module** with tests.

**Interview scenario:** Client wants a field “Urgent” that emails the CEO. Your answer should compare: mail subtype / automated action / custom `write()` override — with security and upgrade notes.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Give one example best as config and one as code. |
| Medium | Critique a DB with 40 automated actions and propose graduation criteria. |
| Hard | Decision matrix for 5 real requests (you invent) with config/custom/integrate columns. |

**WHAT THIS UNLOCKS NEXT:** Sometimes the right answer is neither config nor custom Odoo code — it is **integration**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 86:** You can defend “don’t write a module” as an engineering decision.

> **Phase 86 complete?** [Continue to Phase 87](#phase-87---choosing-customization-vs-integration)

<a id="phase-87"></a>

# PHASE 87 - Choosing Customization vs Integration

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Decide when another system should own a fact (payments, WMS, tax engine, e-commerce) and Odoo should integrate — with idempotency and ownership clarity from Stories XI–XII.

**WHAT YOU SHOULD KNOW FIRST:** Phases 46–51 — APIs and integrations. Phase 86 — config vs custom.

**LEARNING RESOURCES:**

- [Web services](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html)
- [HTTP controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)

## 87.1 Who Owns the Truth?

| Fact | Often owned by |
| --- | --- |
| Chart of accounts / invoices | Odoo Accounting |
| Card capture / PCI | Payment PSP |
| Carrier rates | Shipping provider |
| Marketing email blasts | ESP |
| Deep e-commerce storefront | Sometimes website, sometimes external shop |

**Customize inside Odoo** when Odoo is the system of record and logic is ERP-native.  
**Integrate** when another system already specializes, must stay compliant, or already holds the master data.

## 87.2 Integration Costs You Must Price

- Auth, retries, idempotency (Phase 49)
- Mapping and reconciliation
- Partial failure UX
- Monitoring and replay tools
- Duplicate prevention

**Bad compromise:** half-building a payment gateway inside Odoo “to avoid Stripe fees.”  
**Good compromise:** Odoo owns orders/invoices; PSP owns card data; webhooks reconcile.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | For “sync HubSpot leads,” say who owns the lead and why. |
| Medium | Design ownership for inventory between Odoo and an external WMS. |
| Hard | Write an ADR: customize vs integrate for tax calculation in 3 countries. |

**WHAT THIS UNLOCKS NEXT:** Whatever you build, someone else must read it next year — maintainable Odoo code.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 87:** You can name system-of-record ownership and the operational cost of integrations.

> **Phase 87 complete?** [Continue to Phase 88](#phase-88---maintainable-odoo-code)

<a id="phase-88"></a>

# PHASE 88 - Maintainable Odoo Code

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Write modules that future teammates can navigate: clear models, thin controllers, tested business methods, honest names, and no cleverness that fights the ORM.

**WHAT YOU SHOULD KNOW FIRST:** Stories IV–VI, XV — craft + tests. Phase 82 — upgrade-safe patterns.

**LEARNING RESOURCES:**

- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Testing](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)

## 88.1 Maintainability Checklist

- Names match business language (`action_confirm`, not `do_stuff`)
- Business rules in model methods, not buried only in XML `button` contexts
- Domains and record rules readable
- No unexplained `sudo()`
- Avoid huge `create`/`write` overrides — extract helpers
- Prefetch-friendly loops (Story XIV)
- Tests for every invariant you would hate to lose

```python
# Prefer
def action_approve(self):
    self._check_can_approve()
    self.write({"state": "approved"})
    self._notify_requester()

# Avoid
def write(self, vals):
    # 200 lines of unrelated side effects
    return super().write(vals)
```

## 88.2 Documentation That Helps

README: purpose, depends, config steps, known limits.  
Code comments: *why*, not *what*.  
Migration notes: when you bump versions.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Rename three vague methods on a sample module to business verbs. |
| Medium | Split a fat `write()` override into helpers with tests. |
| Hard | Review a module and produce a maintainability debt list prioritized by upgrade risk. |

**WHAT THIS UNLOCKS NEXT:** Maintainable code still needs a **Git workflow** so teams do not overwrite each other.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 88:** You can list concrete habits that make an Odoo module reviewable six months later.

> **Phase 88 complete?** [Continue to Phase 89](#phase-89---git-workflow)

<a id="phase-89"></a>

# PHASE 89 - Git Workflow

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Use branch → review → merge → deploy habits for Odoo addons; keep secrets out of Git; align with Odoo.sh or self-hosted release tags.

**WHAT YOU SHOULD KNOW FIRST:** Phase 75 — Odoo.sh Git builds. [`Git.md`](./Git.md) basics if needed.

**LEARNING RESOURCES:**

- [`Git.md`](./Git.md) Phases 2–3
- [`Projects.md`](../guides/Projects.md) Git checkpoints
- [Odoo.sh docs](https://www.odoo.com/documentation/18.0/administration/odoo_sh.html)

## 89.1 Branches Match Environments

```text
feature/leave-approval  →  PR + tests
develop / staging       →  UAT database
main / production       →  production deploy
```

Commit **addon directories**, not whole filestore dumps. Never commit `odoo.conf` passwords or API keys — use examples (`odoo.conf.example`).

Tag releases that match manifest versions when you ship.

## 89.2 What Belongs in the Repo

| Include | Exclude |
| --- | --- |
| Modules, tests, README | Filestore, sessions |
| Example config | Real secrets |
| Upgrade notes | Production DB dumps (use secure backup storage) |

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Write a `.gitignore` sketch for an Odoo project. |
| Medium | Describe PR rules: tests required, who approves security-sensitive modules. |
| Hard | Design hotfix flow when production needs a one-line fix during peak hours. |

**WHAT THIS UNLOCKS NEXT:** PRs only help if **code review** catches Odoo-specific landmines.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 89:** You can describe a branch/PR/deploy path that never commits secrets.

> **Phase 89 complete?** [Continue to Phase 90](#phase-90---code-review)

<a id="phase-90"></a>

# PHASE 90 - Code Review

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Review Odoo PRs for security, upgrade risk, performance, XML/data hazards, and missing tests — not just style.

**WHAT YOU SHOULD KNOW FIRST:** Phases 27–31 — security. Phase 82 — upgrade safety. Story XIV — performance.

**LEARNING RESOURCES:**

- [Security](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [`Interview.md`](../guides/Interview.md) — explaining trade-offs

## 90.1 Odoo-Specific Review Lens

Ask, every PR:

1. **ACL / record rules** — new models covered? Portal-safe?
2. **`sudo()`** — justified? Still scoped?
3. **Multi-company** — `company_id` checked?
4. **`super()`** — called on overrides?
5. **Migrations** — needed for field renames?
6. **XML** — `noupdate`, xpath fragility?
7. **Performance** — searches in loops?
8. **Tests** — AccessError and business path covered?
9. **Dependencies** — manifest `depends` complete?

A polite “looks fine” without these checks is not a review.

## 90.2 Review as Teaching

Prefer comments that teach: “This `sudo()` bypasses partner rules — use an integration user group instead.” Catch issues in PR, not in production AccessError tickets.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Make a 9-point review checklist card for your team. |
| Medium | Review a hypothetical diff that adds `sudo()` in a portal controller; write your comments. |
| Hard | Find three defects in a sample legacy PR description (invented) and rank severity. |

**WHAT THIS UNLOCKS NEXT:** Story XVIII project — design a production ERP solution with these trade-offs explicit. Then Story XIX makes you **job ready**.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 90:** You review for security, upgrades, and tests — not only PEP8.

> **Phase 90 complete?** [Build the Story XVIII project](#story-project---design-a-production-erp-solution) · [Continue to Story XIX](#story-xix--becoming-job-ready)

<a id="story-project---design-a-production-erp-solution"></a>

# STORY PROJECT — Design a Production ERP Solution

**Track:** Engineering Practice

**WHAT YOU WILL BE ABLE TO DO:** Deliver a design pack (not necessarily full code): requirements summary, process map, module architecture, config vs custom vs integrate decisions, security notes, and upgrade/deploy assumptions — aligned with [`Projects.md`](../guides/Projects.md).

## The Brief

Pick a mid-size business scenario (distributor, clinic, training company). Produce:

1. Stakeholder goals and non-goals
2. Process maps for two critical flows
3. Standard apps used vs custom modules (depends graph)
4. Decision table: config / customize / integrate (at least five rows)
5. Security & multi-company notes
6. Test / migrate / deploy outline
7. Risks and open questions for the client

**Acceptance:** another Odoo engineer could start implementation from your pack without rediscovering the business.

**WHAT COMES NEXT:** Design maturity plus earlier craft prepares Story XIX — functional fluency, reading core, debugging, interviews, portfolio, and the final capstone.

---

# STORY XIX — BECOMING JOB READY

**Track:** Job Ready

You can build and operate Odoo. Employers still ask: Do you speak the business apps? Can you read core code? Can you debug ugly production issues? Can you explain trade-offs in an interview? Do you have proof?

Story XIX closes the roadmap: functional fluency, reading existing code, real debugging, interview prep, portfolio projects, and a **final capstone ERP** — then you step out as an Odoo Engineer, not into another fake phase.

---

<a id="phase-91"></a>

# PHASE 91 - Odoo Functional Knowledge

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Explain, in business language, how CRM, Sales, Purchase, Inventory, Accounting concepts, and HR connect — enough to design with users, not only with models.

**WHAT YOU SHOULD KNOW FIRST:** Phase 3 — core apps. Phase 84 — requirements mapping.

**LEARNING RESOURCES:**

- Odoo 18 Applications documentation: CRM, Sales, Purchase, Inventory, Accounting, Employees
- [Developer docs](https://www.odoo.com/documentation/18.0/developer.html) when you need model names behind the UI
- Hands-on: run demo data and click the flows

## 91.1 Why Functional Fluency Matters

A developer who does not know what a **delivery order** is will invent a parallel stock system. Functional knowledge is not becoming an accountant — it is knowing which standard document owns which fact.

**CRM:** leads/opportunities, pipeline stages, team assignment — often becomes a quotation.  
**Sales:** quotations → sales orders → optional locking; triggers delivery and invoicing policy.  
**Purchase:** RFQs → purchase orders → receipts → vendor bills.  
**Inventory:** products, warehouses, routes, pickings, valuation awareness (deep accounting links matter).  
**Accounting concepts:** chart of accounts, journals, invoices/bills, reconciliation, taxes — custom moves are dangerous without knowing invariants.  
**HR:** employees, departments, time off — often integrates with approval workflows you customize carefully.

## 91.2 Trace One Business Story Across Apps

```text
CRM opportunity won
        |
        v
Sales quotation confirmed → Sales Order
        |
        +--→ Inventory delivery (pick/pack/ship)
        |
        +--→ Customer invoice (Accounting)
                |
                v
            Payment & reconciliation

Parallel: Purchase replenishment when stock rules fire
```

Practice narrating this without opening code. Then open `sale.order` / `stock.picking` / `account.move` and match the UI labels to models.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Define lead vs opportunity vs quotation in one sentence each. |
| Medium | Walk purchase→receipt→bill on a demo DB; list documents created. |
| Hard | Explain to a fictional CFO why customizing `account.move` posting needs extra care. |

**WHAT THIS UNLOCKS NEXT:** Functional maps help you **read existing Odoo code** with purpose instead of drowning in `addons/`.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 91:** You can narrate CRM→Sales→Stock→Invoice and name the document at each step.

> **Phase 91 complete?** [Continue to Phase 92](#phase-92---reading-existing-odoo-code)

<a id="phase-92"></a>

# PHASE 92 - Reading Existing Odoo Code

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Navigate [odoo/odoo](https://github.com/odoo/odoo) (and Enterprise when licensed): find models from UI technical names, follow `action_` methods, locate views by xmlid, and learn patterns from official modules.

**WHAT YOU SHOULD KNOW FIRST:** Phase 6 — source structure. Phase 91 — what the UI is trying to do.

**LEARNING RESOURCES:**

- [odoo/odoo](https://github.com/odoo/odoo)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)
- Developer mode → View Metadata / Edit Action

## 92.1 From Screen to Source

1. Enable developer mode.
2. On a form: debug menu → **View Metadata**: model name, xmlids.
3. Grep / IDE search for `_name = 'sale.order'` or the xmlid.
4. Read the model method behind the button (`type="object"` name).
5. Check `security/` and record rules before trusting portal assumptions.

```text
Button "Confirm" on quotation
  → name="action_confirm"
  → sale/models/sale_order.py::action_confirm
  → super chain + stock/account side effects via depends modules
```

## 92.2 How to Learn Without Boiling the Ocean

Pick one flow per week: confirm SO, validate picking, post invoice. Read only the methods on that path. Copy **patterns**, not entire files. Official modules teach depends discipline, mail mixins, and state machines better than random blogs.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | From a Sales Order form, find the model and the confirm method path. |
| Medium | Trace how a product’s inventory routes relate to `stock` models for a delivery. |
| Hard | Document the call chain from portal “Accept order” to backend methods. |

**WHAT THIS UNLOCKS NEXT:** Reading prepares you to **debug real problems** when production diverges from demos.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 92:** You can go from a UI button to the Python method and its security context.

> **Phase 92 complete?** [Continue to Phase 93](#phase-93---debugging-real-odoo-problems)

<a id="phase-93"></a>

# PHASE 93 - Debugging Real Odoo Problems

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Systematically debug AccessError, performance hangs, upgrade failures, and “works on my DB” issues using logs, `--log-level`, shell, and staging clones.

**WHAT YOU SHOULD KNOW FIRST:** Phase 64–68 — tooling and tests. Phase 72–77 — workers and logs. Phase 82–83 — legacy risks.

**LEARNING RESOURCES:**

- [Logging / CLI](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)
- [Security](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [`Interview.md`](../guides/Interview.md) live-debug drills

## 93.1 A Production-Shaped Debug Loop

```text
1. Reproduce on staging with same module versions
2. Capture exact user, company, groups, record id
3. Read traceback end-to-end (model, method, access)
4. Form one hypothesis; test it
5. Fix with regression test
6. Deploy with -u if needed; watch logs
```

**AccessError:** check ACL CSV, record rules, `company_id`, `sudo()` misuse, portal user vs internal.  
**Slow list view:** domains, missing indexes, N+1, heavy computes (Story XIV).  
**Upgrade failure:** migration SQL, xpath parse errors, missing depends.  
**Intermittent:** worker memory limits, concurrency locks, cron overlap.

## 93.2 Tools Without Heroics

- Odoo shell with the **same** user via `env['res.users'].browse(id)` + `with_user`
- Raise log level temporarily on a staging worker
- `EXPLAIN` on suspicious SQL
- Bisect recent commits / module upgrades

Never debug only in production with `sudo()` “just to make it work.”

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Given an AccessError traceback, list the three security layers you check. |
| Medium | Write a debug plan for “confirm SO hangs 2 minutes.” |
| Hard | Diagnose a failed `-u` from a fictional ParseError xpath log and propose a fix. |

**WHAT THIS UNLOCKS NEXT:** Debugging stories become **interview** stories — if you can explain them clearly.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 93:** You debug with reproduce → hypothesis → test → regression, not random `sudo()`.

> **Phase 93 complete?** [Continue to Phase 94](#phase-94---odoo-interview-preparation)

<a id="phase-94"></a>

# PHASE 94 - Odoo Interview Preparation

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Answer Odoo interviews with mechanism + trade-offs: ORM, security, inheritance, upgrades, workers, config vs custom vs integrate — practicing with [`Interview.md`](../guides/Interview.md).

**WHAT YOU SHOULD KNOW FIRST:** Entire roadmap themes. Phase 93 — real incidents to narrate.

**LEARNING RESOURCES:**

- [`Interview.md`](../guides/Interview.md)
- [`Projects.md`](../guides/Projects.md) — portfolio talking points
- Official docs for any topic you claim

## 94.1 What Interviewers Probe

| Theme | Example prompt |
| --- | --- |
| ORM | Recordset, `mapped`, N+1 fix |
| Security | AccessError on portal; when is `sudo` OK? |
| Inheritance | `_inherit` vs `_inherits`; view xpath |
| Workflows | State machine design |
| Performance | Slow list; EXPLAIN |
| Deploy | Workers formula; backup contents |
| Upgrades | Migration for rename |
| Judgment | Config vs custom vs integrate |
| Functional | Quote → invoice narrative |

Answer shape: **context → mechanism → trade-off → what you’d verify**. Avoid buzzword salad.

## 94.2 Live Design and Live Debug

Expect: “Design leave approval for multi-company” or “Here’s an AccessError — talk through it.” Use Phases 84–87 and 93 out loud. Mention tests and upgrade safety unprompted — it signals seniority.

Drill timed answers from [`Interview.md`](../guides/Interview.md); record yourself once.

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | 90-second answer: what is a record rule? |
| Medium | 5-minute design: vendor bill approval. |
| Hard | Full mock: debug AccessError + propose module split + workers sizing. |

**WHAT THIS UNLOCKS NEXT:** Interviews ask for proof. Phase 95 — portfolio modules and the final capstone.

---

**CHECK YOUR UNDERSTANDING AFTER PHASE 94:** You can give mechanism-level answers and point to practice drills in Interview.md.

> **Phase 94 complete?** [Continue to Phase 95](#phase-95---portfolio)

<a id="phase-95"></a>

# PHASE 95 - Portfolio

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Ship a coherent portfolio of Odoo modules (with README, tests, screenshots/GIF, upgrade notes) that prove backend, extension, integration, and OWL skills — then complete the final business ERP capstone.

**WHAT YOU SHOULD KNOW FIRST:** Stories III–XVIII craft. [`Projects.md`](../guides/Projects.md) for structured builds.

**LEARNING RESOURCES:**

- [`Projects.md`](../guides/Projects.md)
- [`Interview.md`](../guides/Interview.md)
- [Testing reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [odoo/docker](https://github.com/odoo/docker) / [source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html) for demo environments

## 95.1 Portfolio Principles

Each project should show:

- Clear business problem
- Installable addon(s) with honest `depends`
- Security (ACL + rules as needed)
- Tests you would trust
- README with setup and limitations
- Git history that is not one mega-commit of chaos

Quality beats quantity — but the six projects below cover the skill map employers expect.

---

## 95.2 PROJECT 1 — Library / Asset Management

**Goal:** End-to-end custom business app: models, states, security, views, chatter optional.

**Must include:** loan/checkout workflow, constraints (cannot loan unavailable asset), list/form/search, groups for librarian vs reader, TransactionCase tests.

**Shows:** Stories IV–VIII fundamentals.

---

## 95.3 PROJECT 2 — HR / Leave Workflow

**Goal:** Approval workflow with states, activities/chatter, and multi-level approve/refuse.

**Must include:** employee-linked requests, manager group rules, mail activity on submit, tests for illegal transitions.

**Shows:** Stories VI, VIII, X (mail/activities).

---

## 95.4 PROJECT 3 — Sales Customization

**Goal:** Extension of `sale` without forking core.

**Must include:** `_inherit` fields on `sale.order`, xpath view inherit, business method with `super()`, security for new fields, upgrade-safe notes.

**Shows:** Stories IX, XVIII judgment (why not Studio-only).

---

## 95.5 PROJECT 4 — Inventory Extension

**Goal:** Extend stock flows thoughtfully (e.g. extra check on validation, custom field on picking/product).

**Must include:** depends on `stock`, careful override, tests with products/quants at a basic level, performance-conscious search.

**Shows:** Functional + extension + risk awareness around inventory.

---

## 95.6 PROJECT 5 — External API Integration

**Goal:** Idempotent integration with a fake or public HTTP API (or local mock server).

**Must include:** outbound sync job or webhook inbound, auth header handling, retry/error storage, logging, tests with mocked HTTP.

**Shows:** Story XII — not a toy `requests.get` in a button without failure design.

---

## 95.7 PROJECT 6 — OWL Dashboard

**Goal:** Client action dashboard reading Odoo data via RPC/ORM services.

**Must include:** asset bundle, OWL component, registered client action, menu item, graceful empty states.

**Shows:** Story XIII frontend competence.

---

## 95.8 How to Present the Six

One GitHub org/repo with six addons **or** six small repos — plus a portfolio page listing: problem, stack (Odoo 18), demo DB steps, test command, screenshot. Tie each project to a sentence you can say in interviews (“I enforced leave transitions with tests so managers cannot skip states”).

**PRACTICE:**

| Difficulty | Task |
| --- | --- |
| Easy | Write README outlines for Projects 1 and 3. |
| Medium | Implement Project 1 fully with tests. |
| Hard | Ship three of six to “demoable” quality and prepare a 10-minute walkthrough. |

**WHAT THIS UNLOCKS NEXT:** The **Final Capstone** stitches the whole engineer skill map into one business ERP — then the roadmap closes.

---

<a id="final-capstone---complete-business-erp"></a>

# FINAL CAPSTONE — COMPLETE BUSINESS ERP

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Design and implement (to a serious MVP depth) a multi-module business ERP solution that proves you can carry a system from requirements through deployment documentation — the portfolio crown, not a toy CRUD app.

This capstone is part of Phase 95’s completion criteria. It is **not** Phase 96. When it is done, you are done with the course curriculum.

## Capstone Brief

Choose one coherent business (examples: regional distributor, training academy, field-service company). Deliver a working Odoo 18 solution covering **all** of the following — depth may vary, but none may be a blank checkbox:

| Area | Capstone expectation |
| --- | --- |
| **Requirements** | Written scope, personas, non-goals, process maps |
| **Data Models** | Core models + relations; master vs transaction clarity |
| **ORM** | Domains, recordset-safe business methods, no reckless loops |
| **Security** | Groups, ACL, record rules; portal users if portal exists |
| **Multi-Company** | At least a documented company strategy; implement isolation if multi-co is in scope |
| **Views** | Form/list/search + one advanced view (kanban/pivot/calendar) |
| **Workflows** | Explicit states with legal transitions |
| **Chatter** | `mail.thread` / activities on at least one key document |
| **Reports** | At least one QWeb PDF report |
| **Scheduled Jobs** | At least one safe cron with tests or clear manual verification |
| **Website/Portal** | At least one public or portal page tied to real records |
| **API** | At least one authenticated route or RPC integration surface |
| **External Integration** | Sync or webhook with idempotency notes |
| **OWL Frontend** | At least one small client action or patched UI worth showing |
| **PostgreSQL Optimization** | Indexes / EXPLAIN notes on one heavy screen |
| **Automated Tests** | TransactionCase (and security tests) for critical paths |
| **Migration Strategy** | Manifest versioning + sample migration or upgrade notes |
| **Deployment** | Conf/workers or Odoo.sh/Docker notes + backup plan |
| **Documentation** | Architecture README + runbook + demo script |

Link implementation work to [`Projects.md`](../guides/Projects.md) cards where they help you structure Git checkpoints.

## Suggested Build Order

```text
Requirements & architecture (Story XVIII)
    → models + security + views + workflows
    → chatter + report + cron
    → portal/API/integration
    → OWL dashboard slice
    → tests + EXPLAIN pass
    → migration notes + deploy runbook
    → demo video / screenshots for portfolio
```

## Acceptance Gate

You can demo in under 15 minutes: create a document, move it through states, show security difference between two users, show a report, show one automated or integrated behavior, and point to tests + deploy notes. An interviewer reading the README understands trade-offs (config vs custom vs integrate) without reverse-engineering your Git history.

**WHAT COMES NEXT:** Not another phase — **closure** as an Odoo Engineer.

---

## Closure — You Are an Odoo Engineer

You started unable to name what ERP was for. You learned to see businesses as shared documents and workflows. You learned how Odoo’s tiers, modules, ORM, security, and views implement that sharing. You extended official apps, automated operations, built portals and APIs, shaped OWL UI, respected PostgreSQL, tested, deployed, migrated, and practiced engineering judgment.

The title **Odoo Engineer** does not mean you memorize every model in `addons/`. It means you can:

- hear a business need and map it to Odoo honestly  
- choose configuration, customization, or integration with eyes open  
- implement modules that survive security review and upgrades  
- operate and debug production-shaped systems  
- explain your decisions under interview pressure  
- prove skill with a portfolio and a capstone you can defend  

Keep building. Read core when stuck. Prefer boring upgrade-safe designs. Protect the database like the business depends on it — because it does.

Welcome to the work.

---

*Projects: [`Projects.md`](../guides/Projects.md). Interviews: [`Interview.md`](../guides/Interview.md).*
