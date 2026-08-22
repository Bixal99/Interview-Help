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
