# The Zero-to-Hero Odoo Engineer Roadmap

*Mohammad Bilal's complete, self-paced path from absolute zero knowledge to job-ready Odoo engineering — business/ERP thinking, platform internals, modules, ORM, security, UI, integrations, OWL, attachments, PostgreSQL, testing, CLI, deployment, upgrades, functional fluency, and hire readiness — told as one continuous conversation in which each idea solves a limit left by the previous one.*

*Resources curated with Composio (web search, YouTube, GitHub) against [Odoo 18 Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html), [Architecture overview](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html), [Building a Module](https://www.odoo.com/documentation/18.0/developer/tutorials/backend.html), [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html), [Security in Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html), [View architectures](https://www.odoo.com/documentation/18.0/developer/reference/user_interface/view_architectures.html), [Web Controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html), [Web Services](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html), [Owl components](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html), [Translations](https://www.odoo.com/documentation/18.0/developer/misc/i18n/localization.html), [Source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html), [odoo/odoo](https://github.com/odoo/odoo), [odoo/owl](https://github.com/odoo/owl), [odoo/docker](https://github.com/odoo/docker), and beginner videos such as [What is ERP?](https://www.youtube.com/watch?v=10JeksrGVjI), [Odoo Beginner's Guide](https://www.youtube.com/watch?v=QuC6rc2q2mg), [Mastering Odoo ORM](https://www.youtube.com/watch?v=5YIwP9-55Qk), and [OWL widget tutorial](https://www.youtube.com/watch?v=YJg7dvwXQF8).*

*Where this sits:* Python comfort helps once modules start (classes, inheritance). Prefer working [`CS.md`](./CS.md) foundations (especially OOP) in parallel or just ahead of Stories IV–VI. Build matching work in [`Projects.md`](../guides/Projects.md) and drill [`Interview.md`](../guides/Interview.md) when you reach Story XXIV.*

**Scope:** 24 stories · 96 phases · zero knowledge → Job Ready Odoo Engineer.

Zero Knowledge → ERP Understanding → Odoo User → Odoo Backend Developer → Full-Stack Odoo Developer → Production Odoo Engineer → Job Ready

---

## How to Read This Document

### Start here if Odoo, ERP, and business software are completely new to you

Keep one small company in mind the whole way — a bookstore, a clinic, a workshop. For every topic, ask: *what business fact does this protect or move?* Enter a few records by hand when a lab asks you to.

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
| **ORM** | The **Python engine** that converts business objects to database rows |
| **Recordset** | A collection of **database records** handled in Python as one unit |
| **Environment (`env`)** | The active **user, company, and database transaction** bundle |
| **Record Rule** | A **row-level filter** restricting which records a user can see |
| **Owl** | Odoo's modern **reactive web client framework** |
| **QWeb** | The **XML templating engine** used for views and PDF reports |

**Prerequisites:** Basic curiosity and willingness to run a local Odoo environment. Elementary Python familiarity will carry you through all 24 units.

---

> **Integrated Git practice:** Each linked project card in [`Projects.md`](../guides/Projects.md) ends with one specific Git checkpoint.

---

## The Story Map

```text
ODOO DEVELOPER / ENGINEER
ZERO → PROFESSIONAL → PRODUCTION-READY

Zero Knowledge
      ↓
ERP Understanding
      ↓
Odoo User
      ↓
Odoo Architecture
      ↓
Module Developer
      ↓
Data Modeling
      ↓
ORM Developer
      ↓
Business Logic Developer
      ↓
Backend UI Developer
      ↓
Security-Aware Developer
      ↓
Official Odoo App Extension
      ↓
Advanced Backend Features
      ↓
Website / Portal Developer
      ↓
API & Integration Developer
      ↓
OWL / Frontend Developer
      ↓
PostgreSQL / Performance
      ↓
Testing & Debugging
      ↓
CLI / Tooling
      ↓
Deployment / Operations
      ↓
Migrations / Upgrades
      ↓
Functional Odoo Engineer
      ↓
Solution Architecture
      ↓
Production ERP Capstone
      ↓
Portfolio
      ↓
Interview Ready
      ↓
Professional Odoo Developer / Engineer


STORY I — UNDERSTAND THE BUSINESS BEFORE THE CODE
  "Odoo exists to run businesses. First understand the problem it solves."

  Chapter 1 — What Is ERP?
    1.1 Business Processes
      1.1.1 What Is a Business Process?
      1.1.2 Process Inputs
      1.1.3 Process Activities
      1.1.4 Process Outputs
      1.1.5 Process Owners
    1.2 Departments
      1.2.1 Sales
      1.2.2 Purchasing
      1.2.3 Warehouse
      1.2.4 Finance
      1.2.5 HR
      1.2.6 Operations
    1.3 Cross-Department Workflows
    1.4 Master Data
      1.4.1 Customers
      1.4.2 Vendors
      1.4.3 Products
      1.4.4 Employees
      1.4.5 Accounts
    1.5 Transactions
    1.6 Single Source of Truth
    1.7 ERP vs CRM
    1.8 ERP vs Standalone Business Software
    1.9 Business Process Mapping
    1.10 PRACTICE PROJECT — Model a Small Company

  Chapter 2 — Understanding Odoo
    2.1 What Odoo Is
    2.2 Odoo Ecosystem
    2.3 Community Edition
    2.4 Enterprise Edition
    2.5 Odoo Online
    2.6 Odoo.sh
    2.7 On-Premise Odoo
    2.8 Odoo Apps
    2.9 Modules / Addons
    2.10 Users
    2.11 Companies
    2.12 Shared Business Records
    2.13 Standard vs Custom Modules
    2.14 Odoo Studio Concept
    2.15 PROJECT — Explore an Odoo Database

  Chapter 3 — Core Business Applications
    3.1 Contacts
    3.2 CRM
    3.3 Sales
    3.4 Purchase
    3.5 Inventory
    3.6 Accounting / Invoicing
    3.7 Employees / HR
    3.8 Projects
    3.9 Timesheets
    3.10 Manufacturing
    3.11 Maintenance
    3.12 Website
    3.13 eCommerce
    3.14 Point of Sale
    3.15 Helpdesk
    3.16 End-to-End Document Flow
    3.17 PROJECT — Trace Quote → Delivery → Invoice

  STORY PROJECT I — Design a Company's ERP Flow


STORY II — HOW ODOO ACTUALLY WORKS
  "Before changing Odoo, understand what runs underneath it."

  Chapter 4 — Odoo Architecture
    4.1 Three-Tier Architecture
    4.2 Browser
    4.3 Odoo Web Client
    4.4 HTTP Request
    4.5 Odoo Application Server
    4.6 Python Runtime
    4.7 ORM
    4.8 PostgreSQL
    4.9 Filestore
    4.10 Addons
    4.11 Registry
    4.12 HTTP Layer
    4.13 Sessions
    4.14 Workers
    4.15 Cron Workers
    4.16 Long-Polling / WebSocket Concepts
    4.17 LAB — Trace Browser → Server → Database

  Chapter 5 — Development Environment
    5.1 Python Environment
    5.2 Python Virtual Environments
    5.3 Python Dependencies
    5.4 PostgreSQL Setup
    5.5 PostgreSQL User
    5.6 Odoo Source
    5.7 Git Clone
    5.8 Odoo Configuration File
    5.9 addons_path
    5.10 Custom Addons Directory
    5.11 Database Creation
    5.12 Developer Mode
    5.13 Developer Mode with Assets
    5.14 Logging
    5.15 IDE Setup
    5.16 Debugger Setup
    5.17 LAB — Run Odoo Locally

  Chapter 6 — Odoo Source Code Structure
    6.1 odoo/
    6.2 addons/
    6.3 Core Framework
    6.4 api.py Concepts
    6.5 fields.py Concepts
    6.6 models.py Concepts
    6.7 HTTP
    6.8 Services
    6.9 Tools
    6.10 Registry
    6.11 Modules Loader
    6.12 Reading Official Addons
    6.13 Tracing Model Definitions
    6.14 Tracing XML IDs
    6.15 Tracing Methods
    6.16 PROJECT — Navigate and Explain an Official Addon

  STORY PROJECT II — Local Odoo Development Workspace


STORY III — YOUR FIRST ODOO MODULE
  "Odoo changes should live inside modules, not scattered patches."

  Chapter 7 — Module Anatomy
    7.1 Addon Directory
    7.2 __manifest__.py
    7.3 __init__.py
    7.4 models/
    7.5 views/
    7.6 security/
    7.7 data/
    7.8 demo/
    7.9 static/
    7.10 controllers/
    7.11 wizard/
    7.12 report/
    7.13 i18n/
    7.14 tests/
    7.15 README
    7.16 Coding Conventions
    7.17 MINI PROJECT — Hello Odoo

  Chapter 8 — Module Lifecycle
    8.1 Module Discovery
    8.2 Manifest Metadata
    8.3 Dependencies
    8.4 Installation
    8.5 Initialization
    8.6 Registry Loading
    8.7 Upgrade
    8.8 Uninstall
    8.9 Data Load Order
    8.10 application Flag
    8.11 installable Flag
    8.12 auto_install
    8.13 External Dependencies
    8.14 Module Version
    8.15 LAB — Install, Upgrade & Uninstall a Module

  STORY PROJECT III — First Complete Addon


STORY IV — MODELING BUSINESS DATA
  "A business system begins with correctly modeled information."

  Chapter 9 — Models
    9.1 models.Model
    9.2 models.AbstractModel
    9.3 models.TransientModel
    9.4 _name
    9.5 _description
    9.6 _rec_name
    9.7 _order
    9.8 _inherit
    9.9 _inherits Introduction
    9.10 Automatic Fields
    9.11 id
    9.12 create_date
    9.13 create_uid
    9.14 write_date
    9.15 write_uid
    9.16 Reserved Field Names
    9.17 MINI PROJECT — Library Model

  Chapter 10 — Fields
    10.1 Char
    10.2 Text
    10.3 Html
    10.4 Integer
    10.5 Float
    10.6 Boolean
    10.7 Date
    10.8 Datetime
    10.9 Selection
    10.10 Monetary
    10.11 Binary
    10.12 Image
    10.13 Many2one Introduction
    10.14 Field string
    10.15 required
    10.16 readonly
    10.17 default
    10.18 help
    10.19 index
    10.20 copy
    10.21 groups
    10.22 tracking
    10.23 translate
    10.24 company_dependent
    10.25 PROJECT — Model Complete Business Records

  Chapter 11 — Relationships
    11.1 Many2one
    11.2 One2many
    11.3 Many2many
    11.4 Inverse Fields
    11.5 Related Fields
    11.6 Relational Commands
    11.7 Command.create()
    11.8 Command.update()
    11.9 Command.delete()
    11.10 Command.unlink()
    11.11 Command.link()
    11.12 Command.clear()
    11.13 Command.set()
    11.14 Relationship Ownership
    11.15 Cascading Behavior
    11.16 ondelete
    11.17 Referential Integrity
    11.18 DESIGN PROJECT — Business Data Graph

  Chapter 12 — Computed & Dynamic Fields
    12.1 compute
    12.2 @api.depends
    12.3 @api.depends_context
    12.4 Stored Computed Fields
    12.5 Non-Stored Computed Fields
    12.6 inverse
    12.7 Custom Search Methods
    12.8 Related Fields
    12.9 Default Values
    12.10 default_get()
    12.11 copy()
    12.12 Compute Dependencies
    12.13 Recompute Behavior
    12.14 Performance of Stored vs Non-Stored Fields
    12.15 LAB — Automatic Business Calculations

  STORY PROJECT IV — Business Data Management Module


STORY V — MASTERING THE ODOO ORM
  "Talk to business records through the ORM — safely, in batches, with clear intent."

  Chapter 13 — Environment & Recordsets
    13.1 env
    13.2 self
    13.3 Recordsets
    13.4 Empty Recordsets
    13.5 Singleton Records
    13.6 Multiple Records
    13.7 env.user
    13.8 env.company
    13.9 env.companies
    13.10 env.context
    13.11 Context
    13.12 with_context()
    13.13 with_user()
    13.14 with_company()
    13.15 sudo()
    13.16 with_env()
    13.17 Recordset Immutability
    13.18 PROJECT — Context-Aware Business Logic

  Chapter 14 — CRUD
    14.1 create()
      14.1.1 Single Record Creation
      14.1.2 Multiple Record Creation
      14.1.3 @api.model_create_multi
    14.2 browse()
    14.3 search()
    14.4 search_fetch()
    14.5 fetch()
    14.6 read()
    14.7 write()
    14.8 unlink()
    14.9 copy()
    14.10 exists()
    14.11 name_get / Display Name Concepts
    14.12 CRUD Return Values
    14.13 CRUD Side Effects
    14.14 Bulk CRUD
    14.15 CODING PROJECT — CRUD Operations

  Chapter 15 — Domains & Searching
    15.1 Domain Syntax
    15.2 Comparison Operators
    15.3 = / !=
    15.4 > / >= / < / <=
    15.5 in / not in
    15.6 like / not like
    15.7 ilike / not ilike
    15.8 =like / =ilike
    15.9 child_of
    15.10 parent_of
    15.11 AND
    15.12 OR
    15.13 NOT
    15.14 search_count()
    15.15 search_read()
    15.16 Ordering
    15.17 Limit
    15.18 Offset
    15.19 Dynamic Domains
    15.20 PROJECT — Business Query Explorer

  Chapter 16 — Recordset Operations
    16.1 Iteration
    16.2 filtered()
    16.3 filtered_domain()
    16.4 mapped()
    16.5 sorted()
    16.6 ensure_one()
    16.7 Recordset Membership
    16.8 Recordset Union
    16.9 Recordset Intersection
    16.10 Recordset Difference
    16.11 Batch Operations
    16.12 Avoiding Per-Record Queries
    16.13 PROJECT — Recordset Data Processor

  Chapter 17 — ORM Internals & Performance
    17.1 Prefetching
    17.2 Prefetch Sets
    17.3 ORM Cache
    17.4 Transactions
    17.5 Flush
    17.6 flush_model()
    17.7 flush_recordset()
    17.8 Cache Invalidation
    17.9 invalidate_model()
    17.10 invalidate_recordset()
    17.11 modified()
    17.12 N+1 Queries
    17.13 Batch Creation
    17.14 Batch Updates
    17.15 Aggregation
    17.16 read_group()
    17.17 Raw SQL
    17.18 SQL Wrapper Concepts
    17.19 ORM vs SQL
    17.20 Security Implications of SQL
    17.21 Algorithmic Complexity
    17.22 LAB — Optimize ORM Code

  STORY PROJECT V — Data-Heavy Odoo Module


STORY VI — BUSINESS RULES & WORKFLOWS
  "Business software enforces what is legal — not only what is possible."

  Chapter 18 — Business Methods
    18.1 Model Methods
    18.2 Recordset Methods
    18.3 @api.model
    18.4 @api.model_create_multi
    18.5 create() Override
    18.6 write() Override
    18.7 unlink() Override
    18.8 copy() Override
    18.9 super()
    18.10 Return Values
    18.11 Business Actions
    18.12 Private Methods
    18.13 Public Methods
    18.14 Method Design
    18.15 PROJECT — Business Service Methods

  Chapter 19 — Constraints & Validation
    19.1 Business Validation
    19.2 Python Constraints
    19.3 @api.constrains
    19.4 SQL Constraints
    19.5 ValidationError
    19.6 UserError
    19.7 AccessError
    19.8 MissingError
    19.9 Validation Timing
    19.10 Constraint Performance
    19.11 Database vs Application Constraints
    19.12 LAB — Protect Business Rules

  Chapter 20 — Onchange & UI Logic
    20.1 @api.onchange
    20.2 Defaults
    20.3 default_get()
    20.4 Context Defaults
    20.5 Dynamic Forms
    20.6 Returning Warnings
    20.7 Onchange Limitations
    20.8 Onchange vs Compute
    20.9 Onchange vs Constraint
    20.10 PROJECT — Dynamic Business Form

  Chapter 21 — States & Workflows
    21.1 State Fields
    21.2 Draft
    21.3 Confirmed
    21.4 Approved
    21.5 Done
    21.6 Cancelled
    21.7 Legal State Transitions
    21.8 Workflow Buttons
    21.9 Workflow Validation
    21.10 Immutable States
    21.11 Reopening Records
    21.12 Auditability
    21.13 PROJECT — Multi-Level Approval Workflow

  STORY PROJECT VI — Business Approval System


STORY VII — BUILDING THE USER INTERFACE
  "Users never see your Python — they see views, actions, and menus."

  Chapter 22 — XML Foundations
    22.1 XML Syntax
    22.2 XML Declaration
    22.3 <odoo>
    22.4 <data>
    22.5 <record>
    22.6 External IDs
    22.7 ref()
    22.8 eval
    22.9 Data Files
    22.10 XML Loading
    22.11 noupdate
    22.12 PROJECT — Define Odoo Data in XML

  Chapter 23 — Form & List Views
    23.1 Form Views
    23.2 List Views
    23.3 Field Display
    23.4 Buttons
    23.5 Groups
    23.6 Sheets
    23.7 Notebook
    23.8 Pages
    23.9 Widgets
    23.10 Decorations
    23.11 Header
    23.12 Statusbar
    23.13 Smart Buttons
    23.14 Invisible / Readonly Logic
    23.15 Editable Lists
    23.16 MINI PROJECT — Complete CRUD Interface

  Chapter 24 — Search, Kanban & Analytical Views
    24.1 Search Views
    24.2 Filters
    24.3 Group By
    24.4 Search Panels
    24.5 Kanban
    24.6 Kanban Templates
    24.7 Calendar
    24.8 Pivot
    24.9 Graph
    24.10 Activity Views
    24.11 Cohort Concepts
    24.12 Dashboard Concepts
    24.13 PROJECT — Multiple Views of the Same Business Data

  Chapter 25 — Actions & Menus
    25.1 Actions
    25.2 Action Bindings
    25.3 Window Actions
    25.4 ir.actions.act_window
    25.5 URL Actions
    25.6 Server Actions
    25.7 Report Actions
    25.8 Client Actions
    25.9 Scheduled Actions
    25.10 Menus
    25.11 Parent Menus
    25.12 Menu Sequence
    25.13 Context
    25.14 Domains
    25.15 Navigation
    25.16 PROJECT — Complete Application Navigation

  Chapter 26 — View Inheritance
    26.1 inherit_id
    26.2 XPath
    26.3 position
    26.4 before
    26.5 after
    26.6 inside
    26.7 replace
    26.8 attributes
    26.9 Adding Elements
    26.10 Removing Elements Safely
    26.11 Moving Elements
    26.12 View Priority
    26.13 View Resolution
    26.14 Debugging Inherited Views
    26.15 Avoiding Brittle XPath
    26.16 PROJECT — Extend an Existing Official View

  STORY PROJECT VII — Complete Odoo Application UI


STORY VIII — SECURITY & MULTI-COMPANY
  "If the wrong user can see or change the wrong row, the module is unfinished."

  Chapter 27 — Users & Groups
    27.1 Users
    27.2 Internal Users
    27.3 Portal Users
    27.4 Public User
    27.5 Groups
    27.6 Group Membership
    27.7 Implied Groups
    27.8 Application Categories
    27.9 Permission Design
    27.10 Role Design
    27.11 PROJECT — Design Application Roles

  Chapter 28 — Access Control Lists
    28.1 ACL Concepts
    28.2 ir.model.access
    28.3 ir.model.access.csv
    28.4 Read Permission
    28.5 Write Permission
    28.6 Create Permission
    28.7 Unlink Permission
    28.8 Group ACLs
    28.9 Additive Permissions
    28.10 Default-Deny Thinking
    28.11 LAB — Implement Model Permissions

  Chapter 29 — Record Rules
    29.1 ir.rule
    29.2 domain_force
    29.3 Global Rules
    29.4 Group Rules
    29.5 Rule Composition
    29.6 Row-Level Security
    29.7 User-Based Rules
    29.8 Company-Based Rules
    29.9 Ownership Rules
    29.10 Multi-Group Interactions
    29.11 PROJECT — Record-Level Data Isolation

  Chapter 30 — Security Context & Safe Privilege
    30.1 sudo()
    30.2 with_user()
    30.3 Access Checks
    30.4 check_access()
    30.5 Field Security
    30.6 View / Menu Groups
    30.7 Public Method Security
    30.8 Unsafe Raw SQL
    30.9 Controller Security
    30.10 Security Bypass Risks
    30.11 Least Privilege
    30.12 Avoiding Unnecessary sudo()
    30.13 Input Validation
    30.14 PROJECT — Security Audit a Module

  Chapter 31 — Multi-Company Development
    31.1 res.company
    31.2 company_id
    31.3 company_ids
    31.4 env.company
    31.5 env.companies
    31.6 with_company()
    31.7 Company-Dependent Fields
    31.8 _check_company
    31.9 Multi-Company Domains
    31.10 Cross-Company Security
    31.11 Shared Records
    31.12 Company-Specific Sequences
    31.13 Multi-Company Defaults
    31.14 PROJECT — Secure Multi-Company Module

  STORY PROJECT VIII — Secure Multi-Company Application


STORY IX — EXTENDING EXISTING ODOO
  "Prefer extending official apps over forking them."

  Chapter 32 — Model Inheritance
    32.1 Extension Inheritance
    32.2 _inherit
    32.3 Classical Inheritance
    32.4 Method Overriding
    32.5 Field Extension
    32.6 super()
    32.7 Multiple Inheritance
    32.8 Method Resolution Order
    32.9 Extension Conflicts
    32.10 PROJECT — Extend an Existing Model

  Chapter 33 — Delegation & Mixins
    33.1 _inherits
    33.2 Delegated Fields
    33.3 Delegation vs Extension
    33.4 AbstractModel
    33.5 Mixins
    33.6 Reusable Model Behavior
    33.7 Composition
    33.8 mail.thread
    33.9 mail.activity.mixin
    33.10 portal.mixin Concepts
    33.11 PROJECT — Reusable Business Mixin

  Chapter 34 — View Inheritance in Real Modules
    34.1 Finding Parent Views
    34.2 External IDs
    34.3 XPath Targeting
    34.4 Adding Fields
    34.5 Modifying Attributes
    34.6 Replacing Elements
    34.7 Moving Elements
    34.8 View Priority
    34.9 Conflicting Inheritances
    34.10 Debugging Inheritance Conflicts
    34.11 PROJECT — Customize an Official View

  Chapter 35 — Extending Official Applications
    35.1 res.partner
    35.2 product.template
    35.3 product.product
    35.4 crm.lead
    35.5 sale.order
    35.6 sale.order.line
    35.7 purchase.order
    35.8 stock.picking
    35.9 stock.move
    35.10 account.move
    35.11 hr.employee
    35.12 project.project
    35.13 Existing Workflows
    35.14 Extension Points
    35.15 Upgrade-Safe Customization
    35.16 PROJECT — Customize an Official Odoo Application

  STORY PROJECT IX — Production-Safe Official App Customization


STORY X — ADVANCED BUSINESS FEATURES
  "Wizards, sequences, cron, chatter, reports, and data files run real operations."

  Chapter 36 — Wizards & TransientModel
    36.1 TransientModel
    36.2 Wizard Fields
    36.3 Wizard Views
    36.4 target="new"
    36.5 active_model
    36.6 active_id
    36.7 active_ids
    36.8 Context
    36.9 Defaults
    36.10 Multi-Step Wizards
    36.11 Wizard Security
    36.12 MINI PROJECT — Bulk Processing Wizard

  Chapter 37 — Sequences
    37.1 ir.sequence
    37.2 next_by_code()
    37.3 Prefix
    37.4 Suffix
    37.5 Padding
    37.6 Date-Based Sequences
    37.7 Company-Specific Sequences
    37.8 Business References
    37.9 Concurrency Considerations
    37.10 PROJECT — Business Document Numbering

  Chapter 38 — Scheduled Actions / Cron
    38.1 ir.cron
    38.2 Scheduling
    38.3 Intervals
    38.4 Cron Methods
    38.5 Batch Processing
    38.6 Progress
    38.7 Failure Handling
    38.8 Idempotency
    38.9 Cron Security
    38.10 Long-Running Jobs
    38.11 Transaction Boundaries
    38.12 PROJECT — Scheduled Business Processor

  Chapter 39 — Automation & Server Actions
    39.1 Automated Actions
    39.2 Triggers
    39.3 Conditions
    39.4 Server Actions
    39.5 Evaluation Context
    39.6 Action Chaining
    39.7 Webhook Automation Concepts
    39.8 Maintainability
    39.9 Security
    39.10 When to Use Code Instead
    39.11 PROJECT — Business Automation Workflow

  Chapter 40 — Mail, Chatter & Activities
    40.1 mail.thread
    40.2 mail.activity.mixin
    40.3 Messages
    40.4 Followers
    40.5 Tracking
    40.6 Activities
    40.7 Activity Types
    40.8 Notifications
    40.9 Email Templates
    40.10 Sending Mail
    40.11 Incoming Mail Concepts
    40.12 Mail Aliases
    40.13 Mail Queue
    40.14 Subtypes
    40.15 PROJECT — Communication-Enabled Workflow

  Chapter 41 — Reports & QWeb
    41.1 QWeb
    41.2 QWeb Templates
    41.3 t-if
    41.4 t-foreach
    41.5 t-field
    41.6 t-esc / t-out
    41.7 Report Actions
    41.8 Report Templates
    41.9 PDF Reports
    41.10 HTML Reports
    41.11 Paper Formats
    41.12 Custom Report Data
    41.13 Translatable Reports
    41.14 Barcodes
    41.15 Report Attachments
    41.16 PROJECT — Professional Business PDF Report

  Chapter 42 — Data Files, Import & Export
    42.1 XML Data
    42.2 CSV Data
    42.3 External IDs
    42.4 env.ref()
    42.5 noupdate
    42.6 Demo Data
    42.7 Seed Data
    42.8 Import
    42.9 Export
    42.10 Data Load Order
    42.11 XML Data Operations
    42.12 Updating Existing Records
    42.13 Reference Integrity
    42.14 Large Imports
    42.15 PROJECT — Seed and Import a Business Dataset

  STORY PROJECT X — Automated Business Operations Module


STORY XI — INTERNATIONALIZATION & LOCALIZATION
  "Real ERP software serves people in different languages, countries and accounting environments."

  Chapter 43 — Internationalization & Localization
    43.1 Translatable Strings
    43.2 _() Translation Function
    43.3 Translatable Fields
    43.4 i18n/
    43.5 .po Files
    43.6 .pot Templates
    43.7 Exporting Translations
    43.8 Importing Translations
    43.9 Languages
    43.10 Locale / Formatting
    43.11 Dates & Times
    43.12 Numbers
    43.13 Currencies
    43.14 Translatable QWeb
    43.15 Localization Modules
    43.16 Accounting Localization Concept
    43.17 Country-Specific Behavior
    43.18 PROJECT — Multilingual Business Module

  STORY PROJECT XI — Localized Multilingual Module


STORY XII — WEB DEVELOPMENT WITH ODOO
  "Controllers, website, and portal put Odoo on the public and customer web."

  Chapter 44 — HTTP Controllers
    44.1 http.Controller
    44.2 @http.route
    44.3 request
    44.4 Request Environment
    44.5 route type="http"
    44.6 route type="json"
    44.7 HTTP Methods
    44.8 Parameters
    44.9 Responses
    44.10 Authentication
    44.11 auth="user"
    44.12 auth="public"
    44.13 auth="none"
    44.14 CSRF
    44.15 Sessions
    44.16 Cookies Concepts
    44.17 Error Handling
    44.18 Controller Inheritance
    44.19 Controller Security
    44.20 PROJECT — Secure Custom Controller

  Chapter 45 — Website Development
    45.1 Website Architecture
    45.2 Website Pages
    45.3 QWeb Templates
    45.4 Dynamic Content
    45.5 Website Controllers
    45.6 Frontend Assets
    45.7 Website Forms
    45.8 Form Validation
    45.9 Snippets Concepts
    45.10 SEO Basics
    45.11 Routing
    45.12 Multi-Website
    45.13 Website-Specific Records
    45.14 PROJECT — Dynamic Odoo Website

  Chapter 46 — Portal Development
    46.1 Portal Users
    46.2 Portal Controllers
    46.3 Customer Pages
    46.4 Portal Layout
    46.5 Portal Security
    46.6 Customer-Owned Records
    46.7 Pagination
    46.8 Search
    46.9 Filters
    46.10 Sort
    46.11 Access Tokens
    46.12 Chatter in Portal
    46.13 Downloads
    46.14 PROJECT — Customer Self-Service Portal

  STORY PROJECT XII — Customer Web Portal


STORY XIII — APIS & INTEGRATIONS
  "Other systems will call you — and you will call them. Contracts first."

  Chapter 47 — External API Concepts
    47.1 Client / Server
    47.2 Resources
    47.3 Endpoints
    47.4 HTTP Methods
    47.5 JSON
    47.6 Authentication
    47.7 Authorization
    47.8 Status Codes
    47.9 Headers
    47.10 Pagination
    47.11 Rate Limits
    47.12 API Contracts
    47.13 Idempotency
    47.14 PROJECT — Design an API Contract

  Chapter 48 — External Odoo Access
    48.1 External API Architecture
    48.2 Integration Users
    48.3 Authentication
    48.4 Calling Models
    48.5 CRUD Remotely
    48.6 Calling Methods
    48.7 Domains
    48.8 Permissions
    48.9 Context
    48.10 Error Handling
    48.11 Version Compatibility
    48.12 API Keys
    48.13 PROJECT — External Odoo Client

  Chapter 49 — Building API Endpoints
    49.1 API Routes
    49.2 Request Parsing
    49.3 Input Validation
    49.4 Serialization
    49.5 Response Design
    49.6 Authentication
    49.7 Authorization
    49.8 Pagination
    49.9 Filtering
    49.10 Sorting
    49.11 Error Responses
    49.12 Consistent Error Schema
    49.13 API Versioning Concepts
    49.14 Logging
    49.15 PROJECT — Production CRUD API

  Chapter 50 — Webhooks
    50.1 Incoming Webhooks
    50.2 Outgoing Events
    50.3 Payload Validation
    50.4 Signatures
    50.5 Secrets
    50.6 Timestamp Validation
    50.7 Replay Attacks
    50.8 Idempotency
    50.9 Retries
    50.10 Duplicate Events
    50.11 Audit Logging
    50.12 Dead-Letter Concepts
    50.13 PROJECT — Reliable Webhook Processor

  Chapter 51 — Third-Party Integrations
    51.1 REST APIs
    51.2 API Authentication
    51.3 OAuth Concepts
    51.4 Mapping External Data
    51.5 Data Ownership
    51.6 Synchronization
    51.7 One-Way Sync
    51.8 Two-Way Sync
    51.9 Incremental Sync
    51.10 Scheduled Sync
    51.11 Retries / Backoff
    51.12 Rate Limiting
    51.13 Conflict Resolution
    51.14 Error Handling
    51.15 Integration Logs
    51.16 PROJECT — Odoo ↔ External SaaS Integration

  Chapter 52 — Payment Integrations
    52.1 Payment Architecture
    52.2 Payment Providers
    52.3 Payment Transactions
    52.4 Checkout Flow
    52.5 Redirects
    52.6 Tokens
    52.7 Callbacks
    52.8 Webhooks
    52.9 Payment Status
    52.10 Pending Payments
    52.11 Failure Handling
    52.12 Refund Concepts
    52.13 Security
    52.14 Idempotency
    52.15 PROJECT — Sandbox Payment Provider Integration

  STORY PROJECT XIII — Odoo ↔ External SaaS Integration


STORY XIV — MODERN ODOO FRONTEND
  "Standard views go far. Custom interactive experiences require the web framework."

  Chapter 53 — Odoo JavaScript Architecture
    53.1 Web Client
    53.2 JavaScript Modules
    53.3 Native JS Modules
    53.4 Frontend Environment
    53.5 Components
    53.6 Registries
    53.7 Services
    53.8 Hooks
    53.9 Backend ↔ Frontend Communication
    53.10 ORM Service
    53.11 RPC
    53.12 Actions
    53.13 Frontend Debugging
    53.14 PROJECT — Inspect the Odoo Web Client

  Chapter 54 — OWL Fundamentals
    54.1 Components
    54.2 Templates
    54.3 Props
    54.4 State
    54.5 Events
    54.6 Lifecycle
    54.7 Composition
    54.8 Subcomponents
    54.9 Reactive UI
    54.10 Event Handlers
    54.11 Conditional Rendering
    54.12 Loops
    54.13 PROJECT — Interactive OWL Component

  Chapter 55 — Services, Registries & Hooks
    55.1 Registries
    55.2 Registry Categories
    55.3 Services
    55.4 Service Dependencies
    55.5 useService()
    55.6 ORM Service
    55.7 RPC Service
    55.8 Notification Service
    55.9 Action Service
    55.10 Router Concepts
    55.11 Hooks
    55.12 useBus
    55.13 useAssets
    55.14 Custom Hooks
    55.15 PROJECT — Service-Driven OWL Component

  Chapter 56 — Assets & Frontend Resources
    56.1 Asset Bundles
    56.2 JavaScript Assets
    56.3 SCSS / CSS
    56.4 XML Templates
    56.5 Manifest Assets
    56.6 Bundle Ordering
    56.7 Lazy Loading
    56.8 Asset Debugging
    56.9 Cache Busting Concepts
    56.10 PROJECT — Custom Frontend Asset Bundle

  Chapter 57 — Extending & Patching the Web Client
    57.1 Patching Code
    57.2 patch()
    57.3 Patching Components
    57.4 Extending Components
    57.5 Extending Registries
    57.6 Custom Field Widgets
    57.7 View Extensions
    57.8 Upgrade Safety
    57.9 Conflict Risks
    57.10 When Not to Patch
    57.11 PROJECT — Custom Field Widget

  Chapter 58 — Client Actions & Advanced Frontend
    58.1 Client Actions
    58.2 Action Registry
    58.3 OWL Client Components
    58.4 Loading Server Data
    58.5 Custom Dashboards
    58.6 Generic Components
    58.7 Dialogs
    58.8 Notifications
    58.9 Error Handling
    58.10 Error Boundaries
    58.11 Odoo Editor Concepts
    58.12 Mobile Web APIs
    58.13 Responsive Odoo UI
    58.14 Accessibility
    58.15 PROJECT — Interactive Odoo Dashboard

  STORY PROJECT XIV — Production OWL Dashboard


STORY XV — FILES, ATTACHMENTS & MEDIA
  "Business documents are files — store and secure them like business data."

  Chapter 59 — Attachments & Filestore
    59.1 ir.attachment
    59.2 Binary Fields
    59.3 Image Fields
    59.4 Database vs Filestore
    59.5 Attachment Relationships
    59.6 Uploads
    59.7 Downloads
    59.8 MIME Types
    59.9 File Names
    59.10 Attachment Access
    59.11 Attachment Security
    59.12 Public / Private Files
    59.13 Access Tokens
    59.14 Large File Considerations
    59.15 Image Processing Concepts
    59.16 PROJECT — Secure Document Attachment Feature

  STORY PROJECT XV — Document-Enabled Business Module


STORY XVI — POSTGRESQL & PERFORMANCE
  "The ORM sits on PostgreSQL. Performance starts with understanding both."

  Chapter 60 — Odoo Database Structure
    60.1 Models → Tables
    60.2 Fields → Columns
    60.3 Many2one Foreign Keys
    60.4 Many2many Relation Tables
    60.5 Foreign Keys
    60.6 Metadata Tables
    60.7 ir_model
    60.8 ir_model_fields
    60.9 ir_model_data
    60.10 Inspecting the Schema
    60.11 PROJECT — Map an Odoo Model to PostgreSQL

  Chapter 61 — PostgreSQL for Odoo Developers
    61.1 SELECT
    61.2 WHERE
    61.3 JOIN
    61.4 GROUP BY
    61.5 Aggregates
    61.6 Subqueries
    61.7 CTE Concepts
    61.8 Constraints
    61.9 psql
    61.10 Database Inspection
    61.11 Information Schema
    61.12 PROJECT — Analyze Odoo Data with SQL

  Chapter 62 — Transactions & Concurrency
    62.1 Transactions
    62.2 Commit
    62.3 Rollback
    62.4 Isolation
    62.5 Locks
    62.6 Row Locks
    62.7 Deadlocks
    62.8 Concurrent Updates
    62.9 Lost Update Concepts
    62.10 Savepoints
    62.11 Retry Patterns
    62.12 PROJECT — Concurrency-Safe Operation

  Chapter 63 — Indexes & Query Plans
    63.1 Indexes
    63.2 B-Tree Intuition
    63.3 Selectivity
    63.4 Composite Indexes
    63.5 EXPLAIN
    63.6 EXPLAIN ANALYZE
    63.7 Query Plans
    63.8 Sequential Scan
    63.9 Index Scan
    63.10 When to Add an Index
    63.11 Over-Indexing
    63.12 PROJECT — Optimize a Slow Query

  Chapter 64 — ORM Performance
    64.1 Query Counts
    64.2 Batch Operations
    64.3 Prefetch
    64.4 Cache
    64.5 N+1 Problems
    64.6 Computed Field Costs
    64.7 Stored Computations
    64.8 Efficient Domains
    64.9 Algorithms & Complexity
    64.10 Database Indexes from Models
    64.11 read_group()
    64.12 Avoiding Loops over Queries
    64.13 PROJECT — Optimize ORM Business Logic

  Chapter 65 — Profiling & Optimization
    65.1 Odoo Profiler
    65.2 SQL Profiling
    65.3 Query Collector
    65.4 Periodic Collector
    65.5 Finding Bottlenecks
    65.6 Measuring Before Optimizing
    65.7 Benchmarking
    65.8 Baselines
    65.9 Performance Regression
    65.10 Memory Considerations
    65.11 PROJECT — Optimize a Slow Odoo Application

  STORY PROJECT XVI — Performance Optimization Case Study


STORY XVII — TESTING & DEBUGGING
  "If you cannot prove it, you do not ship it."

  Chapter 66 — Odoo Logging & Debugging
    66.1 Log Levels
    66.2 Server Logs
    66.3 Stack Traces
    66.4 Python Debugger
    66.5 Breakpoints
    66.6 Odoo Shell
    66.7 Browser Developer Tools
    66.8 Developer Mode
    66.9 Reproducing Bugs
    66.10 Root Cause Analysis
    66.11 Minimal Reproduction
    66.12 PROJECT — Diagnose a Broken Module

  Chapter 67 — Python Tests
    67.1 Test Module Structure
    67.2 TransactionCase
    67.3 Savepoint / Transaction Concepts
    67.4 Test Data
    67.5 setUp()
    67.6 Assertions
    67.7 Test Tags
    67.8 Running Selected Tests
    67.9 Form Helper Concepts
    67.10 Deterministic Tests
    67.11 PROJECT — First Automated Test Suite

  Chapter 68 — Testing Business Logic
    68.1 CRUD Tests
    68.2 Computed Field Tests
    68.3 Constraint Tests
    68.4 Workflow Tests
    68.5 Cron Tests
    68.6 Wizard Tests
    68.7 Edge Cases
    68.8 Regression Tests
    68.9 Error Tests
    68.10 PROJECT — Business Rules Test Suite

  Chapter 69 — Testing Security
    69.1 User Context
    69.2 ACL Tests
    69.3 Record Rule Tests
    69.4 sudo() Tests
    69.5 Field Security Tests
    69.6 Multi-Company Tests
    69.7 Portal Access Tests
    69.8 Public Access Tests
    69.9 Permission Regression
    69.10 PROJECT — Security Regression Suite

  Chapter 70 — Web & Frontend Testing
    70.1 HTTP Tests
    70.2 Controller Tests
    70.3 browser_js
    70.4 Test Tours
    70.5 Integration Tours
    70.6 JavaScript Unit Tests
    70.7 HOOT
    70.8 @odoo/hoot-dom
    70.9 Web Test Helpers
    70.10 Mock Server
    70.11 Mocking RPC
    70.12 End-to-End Flows
    70.13 PROJECT — Browser-Based Business Flow Test

  Chapter 71 — Performance & Regression Testing
    71.1 Query Count Tests
    71.2 assertQueryCount()
    71.3 --log-sql
    71.4 Performance Budgets
    71.5 Regression Detection
    71.6 Repeatable Benchmarks
    71.7 Large Dataset Tests
    71.8 PROJECT — Performance Regression Suite

  STORY PROJECT XVII — Fully Tested Odoo Module


STORY XVIII — CLI & DEVELOPER TOOLING
  "Your terminal is part of the Odoo toolbox."

  Chapter 72 — Odoo CLI & Developer Commands
    72.1 odoo-bin / odoo
    72.2 Configuration File
    72.3 Database Selection
    72.4 -i Install
    72.5 -u Upgrade
    72.6 --addons-path
    72.7 --dev
    72.8 --log-level
    72.9 --log-sql
    72.10 --test-enable
    72.11 --test-tags
    72.12 --stop-after-init
    72.13 shell
    72.14 scaffold
    72.15 Database Commands
    72.16 Neutralize Concepts
    72.17 PROJECT — Complete CLI Development Workflow

  STORY PROJECT XVIII — Command-Line Odoo Workflow


STORY XIX — DEPLOYMENT & OPERATIONS
  "A module that cannot be deployed and restored is not finished."

  Chapter 73 — Odoo Configuration
    73.1 odoo.conf
    73.2 addons_path
    73.3 db_host
    73.4 db_port
    73.5 db_user
    73.6 db_password
    73.7 dbfilter
    73.8 Logging
    73.9 Proxy Mode
    73.10 Secrets
    73.11 Environment-Specific Configuration
    73.12 Resource Limits
    73.13 PROJECT — Production Configuration File

  Chapter 74 — Linux Deployment
    74.1 Linux User
    74.2 Filesystem Layout
    74.3 Python Environment
    74.4 Source Deployment
    74.5 Addons
    74.6 File Permissions
    74.7 PostgreSQL
    74.8 systemd
    74.9 Service Management
    74.10 Logs
    74.11 Deployment User Security
    74.12 PROJECT — Deploy Odoo on Linux

  Chapter 75 — Reverse Proxy & HTTPS
    75.1 Reverse Proxy
    75.2 Nginx
    75.3 Domains
    75.4 DNS
    75.5 TLS / HTTPS
    75.6 Certificates
    75.7 Proxy Headers
    75.8 WebSocket / Long-Lived Connections
    75.9 Static Content
    75.10 Secure Production Exposure
    75.11 PROJECT — Secure HTTPS Deployment

  Chapter 76 — Workers & Production Configuration
    76.1 Development Mode
    76.2 Multi-Processing
    76.3 Workers
    76.4 Worker Sizing
    76.5 CPU Considerations
    76.6 Memory Limits
    76.7 Request Time Limits
    76.8 Cron Workers
    76.9 Long-Polling / WebSocket Worker Concepts
    76.10 Capacity Planning
    76.11 PROJECT — Production Worker Configuration

  Chapter 77 — PostgreSQL Operations
    77.1 Database Users
    77.2 Connections
    77.3 Connection Limits
    77.4 Maintenance
    77.5 VACUUM Concepts
    77.6 ANALYZE
    77.7 Monitoring
    77.8 Basic Tuning
    77.9 Disk Usage
    77.10 Slow Queries
    77.11 PROJECT — Database Health Check

  Chapter 78 — Backups & Disaster Recovery
    78.1 Database Backup
    78.2 Filestore Backup
    78.3 Configuration Backup
    78.4 Restore
    78.5 Backup Scheduling
    78.6 Off-Site Backups
    78.7 Encryption
    78.8 Retention
    78.9 Recovery Testing
    78.10 Recovery Point Objective
    78.11 Recovery Time Objective
    78.12 Disaster Recovery Plan
    78.13 PROJECT — Tested Backup & Restore Plan

  Chapter 79 — Odoo.sh
    79.1 Odoo.sh Architecture
    79.2 Projects
    79.3 Git Integration
    79.4 Branches
    79.5 Development
    79.6 Staging
    79.7 Production
    79.8 Builds
    79.9 Logs
    79.10 Shell Access
    79.11 Database Management
    79.12 Backups
    79.13 PROJECT — Odoo.sh Delivery Workflow

  Chapter 80 — Docker for Odoo
    80.1 Images
    80.2 Containers
    80.3 Volumes
    80.4 Networking
    80.5 Environment Variables
    80.6 Odoo Container
    80.7 PostgreSQL Container
    80.8 Persistent Filestore
    80.9 Docker Compose
    80.10 Custom Addons Mounts
    80.11 Configuration
    80.12 Container Logs
    80.13 PROJECT — Dockerized Odoo Stack

  Chapter 81 — Monitoring & Production Troubleshooting
    81.1 Application Logs
    81.2 PostgreSQL Logs
    81.3 CPU
    81.4 Memory
    81.5 Disk
    81.6 Database Connections
    81.7 Slow Requests
    81.8 Failed Jobs
    81.9 Error Monitoring
    81.10 Health Checks
    81.11 Alerting Concepts
    81.12 Incident Diagnosis
    81.13 Incident Timeline
    81.14 Root Cause Analysis
    81.15 PROJECT — Diagnose a Production Incident

  STORY PROJECT XIX — Deploy an Odoo System


STORY XX — UPGRADES, MIGRATIONS & MAINTENANCE
  "Production code must survive tomorrow's Odoo version."

  Chapter 82 — Module Versioning
    82.1 Manifest Version
    82.2 Semantic Change Thinking
    82.3 Release Changes
    82.4 Compatibility
    82.5 Dependencies
    82.6 Version Control Strategy
    82.7 Changelog
    82.8 Release Notes
    82.9 PROJECT — Version a Production Module

  Chapter 83 — Schema Changes
    83.1 Adding Fields
    83.2 Renaming Fields
    83.3 Changing Field Types
    83.4 Changing Relationships
    83.5 Removing Fields
    83.6 Constraints
    83.7 Defaults
    83.8 Required Fields
    83.9 Index Changes
    83.10 Safe Schema Evolution
    83.11 PROJECT — Safely Evolve a Module Schema

  Chapter 84 — Data Migrations
    84.1 Migration Scripts
    84.2 Pre-Migration
    84.3 Post-Migration
    84.4 Transforming Records
    84.5 Renaming Data
    84.6 Preserving Relationships
    84.7 Validation
    84.8 Large Dataset Considerations
    84.9 Batching
    84.10 Idempotent Migrations
    84.11 Rollback Planning
    84.12 PROJECT — Migrate Legacy Business Data

  Chapter 85 — Odoo Version Upgrades
    85.1 Version Differences
    85.2 Deprecated APIs
    85.3 Framework Changes
    85.4 Module Compatibility
    85.5 Database Upgrade
    85.6 Upgrade Scripts
    85.7 Upgrade Utilities
    85.8 Frontend Migration
    85.9 XML/View Migration
    85.10 Asset Migration
    85.11 Post-Upgrade Testing
    85.12 PROJECT — Upgrade a Module Between Odoo Versions

  Chapter 86 — Module Hooks
    86.1 Hooks Concept
    86.2 pre_init_hook
    86.3 post_init_hook
    86.4 uninstall_hook
    86.5 Environment During Hooks
    86.6 Data Initialization
    86.7 Appropriate Uses
    86.8 Avoiding Hook Abuse
    86.9 PROJECT — Controlled Module Initialization

  Chapter 87 — Upgrade-Safe Customization
    87.1 Never Modify Core Directly
    87.2 Extension Points
    87.3 Model Inheritance
    87.4 View Inheritance
    87.5 Stable Overrides
    87.6 Dependency Management
    87.7 Avoiding Hard-Coding
    87.8 Configuration-Driven Design
    87.9 Stable XML IDs
    87.10 Future-Proof Design
    87.11 PROJECT — Refactor an Unsafe Customization

  Chapter 88 — Legacy Module Maintenance
    88.1 Read Before Changing
    88.2 Trace Dependencies
    88.3 Trace Execution
    88.4 Reproduce Existing Behavior
    88.5 Characterization Tests
    88.6 Backward Compatibility
    88.7 Safe Refactoring
    88.8 Deprecation
    88.9 Technical Debt
    88.10 Incremental Modernization
    88.11 PROJECT — Modernize a Legacy Odoo Module

  STORY PROJECT XX — Upgrade an Existing Odoo Module


STORY XXI — FUNCTIONAL ODOO FOR DEVELOPERS
  "An Odoo engineer should understand the business flows their code is changing."

  Chapter 89 — Core Functional Applications
    89.1 Contacts
      89.1.1 res.partner
      89.1.2 Customers
      89.1.3 Vendors
      89.1.4 Addresses
      89.1.5 Commercial Entities
    89.2 CRM
      89.2.1 Leads
      89.2.2 Opportunities
      89.2.3 Pipeline
      89.2.4 Stages
      89.2.5 CRM → Sales
    89.3 Sales
      89.3.1 Quotations
      89.3.2 Sales Orders
      89.3.3 Sale Order Lines
      89.3.4 Pricelists
      89.3.5 Discounts
      89.3.6 Taxes
      89.3.7 Delivery
      89.3.8 Invoicing
    89.4 Purchase
      89.4.1 RFQ
      89.4.2 Purchase Orders
      89.4.3 Vendor Pricelists
      89.4.4 Receipts
      89.4.5 Vendor Bills
    89.5 Inventory
      89.5.1 Products
      89.5.2 Product Variants
      89.5.3 Warehouses
      89.5.4 Locations
      89.5.5 Stock Moves
      89.5.6 Pickings
      89.5.7 Routes
      89.5.8 Reordering Rules
      89.5.9 Lots
      89.5.10 Serial Numbers
      89.5.11 Packages
      89.5.12 Inventory Adjustments
    89.6 Accounting Concepts
      89.6.1 Chart of Accounts
      89.6.2 Journals
      89.6.3 Journal Entries
      89.6.4 account.move
      89.6.5 account.move.line
      89.6.6 Receivable
      89.6.7 Payable
      89.6.8 Taxes
      89.6.9 Fiscal Positions
      89.6.10 Reconciliation
    89.7 Invoicing
      89.7.1 Customer Invoices
      89.7.2 Vendor Bills
      89.7.3 Credit Notes
      89.7.4 Payments
      89.7.5 Payment State
    89.8 Employees
    89.9 Recruitment
    89.10 Time Off
    89.11 Attendances
    89.12 Projects
    89.13 Timesheets
    89.14 Manufacturing
      89.14.1 Bills of Materials
      89.14.2 Manufacturing Orders
      89.14.3 Components
      89.14.4 Work Centers
      89.14.5 Work Orders
      89.14.6 Inventory Integration
    89.15 Maintenance
    89.16 Helpdesk Concept
    89.17 Website
    89.18 eCommerce
      89.18.1 Products
      89.18.2 Cart
      89.18.3 Checkout
      89.18.4 Delivery
      89.18.5 Payment
    89.19 Point of Sale
      89.19.1 POS Session
      89.19.2 POS Orders
      89.19.3 Payments
      89.19.4 Inventory Integration
    89.20 End-to-End Business Flow
      89.20.1 Lead → Opportunity
      89.20.2 Opportunity → Quotation
      89.20.3 Quotation → Sale
      89.20.4 Sale → Delivery
      89.20.5 Sale → Invoice
      89.20.6 Purchase → Receipt
      89.20.7 Purchase → Vendor Bill
      89.20.8 Manufacturing → Stock
      89.20.9 Payment → Reconciliation
    89.21 PROJECT — Trace a Company End-to-End

  STORY PROJECT XXI — Functional Business Flow Case Study


STORY XXII — REAL ODOO ENGINEERING
  "Judge trade-offs before you write models."

  Chapter 90 — Requirements → ERP Design
    90.1 Stakeholder Interviews
    90.2 Business Requirements
    90.3 Functional Requirements
    90.4 Non-Functional Requirements
    90.5 Business Process Mapping
    90.6 As-Is Process
    90.7 Pain Points
    90.8 To-Be Process
    90.9 Data Requirements
    90.10 Roles
    90.11 Permissions
    90.12 Integrations
    90.13 Reporting Requirements
    90.14 Acceptance Criteria
    90.15 Edge Cases
    90.16 Change Requests
    90.17 PROJECT — Requirements Document for an ERP

  Chapter 91 — Odoo Solution Architecture
    91.1 Module Boundaries
    91.2 Model Ownership
    91.3 Dependencies
    91.4 Shared Models
    91.5 Integration Boundaries
    91.6 Security Architecture
    91.7 Multi-Company Architecture
    91.8 Data Flow
    91.9 Reusability
    91.10 Configuration
    91.11 Reporting
    91.12 Performance
    91.13 Deployment
    91.14 Upgrade Strategy
    91.15 PROJECT — Odoo Solution Architecture Document

  Chapter 92 — Configuration vs Customization vs Integration
    92.1 Standard Odoo
    92.2 Configuration
    92.3 Studio Concepts
    92.4 Custom Module
    92.5 Third-Party Module
    92.6 External Integration
    92.7 Data Ownership
    92.8 Upgrade Costs
    92.9 Maintenance Costs
    92.10 User Training Costs
    92.11 Technical Debt
    92.12 Choosing the Simplest Correct Solution
    92.13 PROJECT — Build vs Configure Decision Study

  Chapter 93 — Maintainable Odoo Code
    93.1 Naming
    93.2 Small Methods
    93.3 Separation of Concerns
    93.4 Cohesion
    93.5 Low Coupling
    93.6 Reusable Mixins
    93.7 Configuration over Hard-Coding
    93.8 Constants
    93.9 Error Handling
    93.10 Logging
    93.11 Documentation
    93.12 Upgrade Safety
    93.13 Performance Awareness
    93.14 Security Awareness
    93.15 Testability
    93.16 Avoiding Premature Abstraction
    93.17 PROJECT — Refactor an Unmaintainable Module

  Chapter 94 — Git, Collaboration & Code Review
    94.1 Repository
    94.2 Branches
    94.3 Commits
    94.4 Commit Messages
    94.5 Pull Requests
    94.6 Merge
    94.7 Rebase Concepts
    94.8 Conflict Resolution
    94.9 Release Branches
    94.10 Tags
    94.11 Code Review for Correctness
    94.12 Security Review
    94.13 ORM Performance Review
    94.14 Upgrade-Safety Review
    94.15 Test Review
    94.16 Documentation Review
    94.17 CI Concepts
    94.18 Automated Tests in CI
    94.19 Linting / Static Quality Checks
    94.20 Staging Workflow
    94.21 Production Release Workflow
    94.22 PROJECT — Team-Based Odoo Delivery

  STORY PROJECT XXII — Design a Production ERP Solution


STORY XXIII — GRAND ODOO CAPSTONE
  "Stop learning isolated features. Engineer the whole ERP."

  Chapter 95 — Production ERP Capstone
    95.1 Problem Discovery
    95.2 Business Requirements
    95.3 Process Maps
    95.4 Architecture
    95.5 Module Boundaries
    95.6 Data Models
    95.7 Relational Design
    95.8 ORM
    95.9 Business Rules
    95.10 Security
    95.11 Multi-Company
    95.12 Views
    95.13 Workflows
    95.14 Wizards
    95.15 Chatter & Activities
    95.16 Automation
    95.17 Reports
    95.18 Attachments
    95.19 Translations
    95.20 Website
    95.21 Portal
    95.22 API
    95.23 Webhooks
    95.24 External Integration
    95.25 OWL Dashboard
    95.26 PostgreSQL Optimization
    95.27 Automated Tests
    95.28 Security Tests
    95.29 Performance Tests
    95.30 Migration Strategy
    95.31 Backup Strategy
    95.32 Deployment
    95.33 Monitoring
    95.34 README
    95.35 Architecture Diagram
    95.36 Technical Documentation
    95.37 Functional Documentation
    95.38 User Roles Matrix
    95.39 API Documentation
    95.40 Deployment Documentation
    95.41 Disaster Recovery Documentation
    95.42 Test Evidence
    95.43 Performance Baseline
    95.44 Security Review
    95.45 Upgrade Review
    95.46 Final Production Readiness Review

  GRAND STORY PROJECT XXIII — COMPLETE BUSINESS ERP
    Required evidence:
      Source Code
      Git Repository
      Clean Module Structure
      Functional Requirements
      Architecture Diagram
      Database/Data Model Diagram
      Security Matrix
      Tests
      API Documentation
      Deployment Instructions
      Backup/Restore Instructions
      Upgrade Strategy
      Screenshots / Demo
      README
      Full Technical Documentation


STORY XXIV — INTERVIEW, PORTFOLIO & JOB READINESS
  "Now prove that you can understand, build, debug and maintain Odoo."

  Chapter 96 — Odoo Engineer Job Readiness

    KNOWLEDGE REVIEW
      96.1 ERP Fundamentals
      96.2 Odoo Functional Knowledge
      96.3 Odoo Architecture
      96.4 Module Anatomy
      96.5 Python
      96.6 Models
      96.7 Fields
      96.8 Relationships
      96.9 ORM
      96.10 Recordsets
      96.11 Domains
      96.12 Computed Fields
      96.13 Constraints
      96.14 Workflows
      96.15 XML
      96.16 Views
      96.17 Actions
      96.18 Security
      96.19 Multi-Company
      96.20 Inheritance
      96.21 Mixins
      96.22 Wizards
      96.23 Cron / Automation
      96.24 Chatter
      96.25 QWeb / Reports
      96.26 Internationalization
      96.27 Controllers
      96.28 APIs
      96.29 Webhooks
      96.30 Integrations
      96.31 OWL
      96.32 JavaScript Framework
      96.33 PostgreSQL
      96.34 Performance
      96.35 Testing
      96.36 Debugging
      96.37 CLI
      96.38 Deployment
      96.39 Odoo.sh
      96.40 Docker
      96.41 Upgrades
      96.42 Migrations
      96.43 Requirements Analysis
      96.44 Solution Architecture

    LIVE ENGINEERING
      96.45 Live Module Design
        Requirements → Models → Relationships → Security → Workflow → UI → Tests
      96.46 Live Debugging
        Reproduce → Read Logs → Trace → Diagnose → Fix → Regression Test
      96.47 Code Review
        Correctness → Odoo Conventions → Security → ORM Performance → Maintainability → Tests → Upgrade Safety
      96.48 Portfolio Walkthrough

    PORTFOLIO PROJECTS
      96.49 PORTFOLIO PROJECT 1 — Library / Asset Management
      96.50 PORTFOLIO PROJECT 2 — HR / Leave Approval System
      96.51 PORTFOLIO PROJECT 3 — CRM + Sales Customization
      96.52 PORTFOLIO PROJECT 4 — Inventory / Warehouse Extension
      96.53 PORTFOLIO PROJECT 5 — API / SaaS Integration
      96.54 PORTFOLIO PROJECT 6 — OWL Analytics Dashboard
      96.55 PORTFOLIO PROJECT 7 — Customer Portal
      96.56 PORTFOLIO PROJECT 8 — Accounting-Aware Business Extension
      96.57 PORTFOLIO PROJECT 9 — Manufacturing / MRP Extension
      96.58 PORTFOLIO PROJECT 10 — Legacy Module Upgrade
      96.59 PORTFOLIO PROJECT 11 — Multi-Company ERP Extension
      96.60 PORTFOLIO PROJECT 12 — Production ERP Capstone

    FINAL ASSESSMENT
      96.61 Python/OOP Interview
      96.62 ORM Interview
      96.63 Security Interview
      96.64 Functional Odoo Interview
      96.65 PostgreSQL Interview
      96.66 OWL Interview
      96.67 Integration Interview
      96.68 Deployment Interview
      96.69 Architecture Interview
      96.70 Live Coding
      96.71 Live Debugging
      96.72 System Design
      96.73 Portfolio Defense
      96.74 FINAL MOCK ODOO ENGINEER INTERVIEW

```

| Story | Question it answers |
| --- | --- |
| I. Understand the Business Before the Code | Odoo exists to run businesses. First understand the problem it solves. |
| II. How Odoo Actually Works | Before changing Odoo, understand what runs underneath it. |
| III. Your First Odoo Module | Odoo changes should live inside modules, not scattered patches. |
| IV. Modeling Business Data | A business system begins with correctly modeled information. |
| V. Mastering the Odoo ORM | Talk to business records through the ORM — safely, in batches, with clear intent. |
| VI. Business Rules & Workflows | Business software enforces what is legal — not only what is possible. |
| VII. Building the User Interface | Users never see your Python — they see views, actions, and menus. |
| VIII. Security & Multi-Company | If the wrong user can see or change the wrong row, the module is unfinished. |
| IX. Extending Existing Odoo | Prefer extending official apps over forking them. |
| X. Advanced Business Features | Wizards, sequences, cron, chatter, reports, and data files run real operations. |
| XI. Internationalization & Localization | Real ERP software serves people in different languages, countries and accounting environments. |
| XII. Web Development with Odoo | Controllers, website, and portal put Odoo on the public and customer web. |
| XIII. APIs & Integrations | Other systems will call you — and you will call them. Contracts first. |
| XIV. Modern Odoo Frontend | Standard views go far. Custom interactive experiences require the web framework. |
| XV. Files, Attachments & Media | Business documents are files — store and secure them like business data. |
| XVI. PostgreSQL & Performance | The ORM sits on PostgreSQL. Performance starts with understanding both. |
| XVII. Testing & Debugging | If you cannot prove it, you do not ship it. |
| XVIII. CLI & Developer Tooling | Your terminal is part of the Odoo toolbox. |
| XIX. Deployment & Operations | A module that cannot be deployed and restored is not finished. |
| XX. Upgrades, Migrations & Maintenance | Production code must survive tomorrow's Odoo version. |
| XXI. Functional Odoo for Developers | An Odoo engineer should understand the business flows their code is changing. |
| XXII. Real Odoo Engineering | Judge trade-offs before you write models. |
| XXIII. Grand Odoo Capstone | Stop learning isolated features. Engineer the whole ERP. |
| XXIV. Interview, Portfolio & Job Readiness | Now prove that you can understand, build, debug and maintain Odoo. |

<a id="phase-index"></a>

## Chapter Index

*96 chapters across 24 units.*

### Unit I - Understand the Business Before the Code

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 1 | What Is ERP? | Single source of business truth | Complete Chapter 1 Practice Project |
| 2 | Understanding Odoo | Ecosystem, editions, users, records | Explore an Odoo database & structure |
| 3 | Core Business Applications | Document flows across apps | Trace quote → delivery → invoice |

### Unit II - How Odoo Actually Works

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 4 | Odoo Architecture | Three-tier system, server, DB | Trace browser → server → database |
| 5 | Development Environment | Local workspace, conf, dev mode | Run Odoo locally with custom addons |
| 6 | Odoo Source Code Structure | Core framework & official addons | Navigate and explain an official addon |

### Unit III - Your First Odoo Module

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 7 | Module Anatomy | Manifest, structure, conventions | Build Hello Odoo mini project |
| 8 | Module Lifecycle | Load order, install, upgrade | Install, upgrade & uninstall a module |

### Unit IV - Modeling Business Data

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 9 | Models | Model types, attributes, auto fields | Build Library Model mini project |
| 10 | Fields | Data types, attributes, tracking | Model complete business records |
| 11 | Relationships | Relational fields & commands | Design business data graph |
| 12 | Computed & Dynamic Fields | Compute, depends, inverse, defaults | Build automatic business calculations |

### Unit V - Mastering the Odoo ORM

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 13 | Environment & Recordsets | env, context, sudo, recordsets | Build context-aware business logic |
| 14 | CRUD | Create, read, write, unlink | Complete CRUD operations coding project |
| 15 | Domains & Searching | Search syntax, polish queries | Build business query explorer |
| 16 | Recordset Operations | Map, filter, sort, batch operations | Build recordset data processor |
| 17 | ORM Internals & Performance | Cache, prefetch, flush, SQL | Optimize ORM code & queries |

### Unit VI - Business Rules & Workflows

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 18 | Business Methods | Method design, overrides, actions | Build business service methods |
| 19 | Constraints & Validation | Python & SQL constraints, errors | Protect business rules in lab |
| 20 | Onchange & UI Logic | Dynamic forms, defaults, warnings | Build dynamic business form |
| 21 | States & Workflows | Document states, approval flows | Build multi-level approval workflow |

### Unit VII - Building the User Interface

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 22 | XML Foundations | Records, external IDs, data files | Define Odoo data in XML |
| 23 | Form & List Views | Form/list layouts, widgets, status | Build complete CRUD interface |
| 24 | Search, Kanban & Analytical Views | Filters, kanban, pivot, graph | View same data across multiple views |
| 25 | Actions & Menus | Window actions, menus, navigation | Build complete application navigation |
| 26 | View Inheritance | XPath, extension, overrides | Extend an existing official view |

### Unit VIII - Security & Multi-Company

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 27 | Users & Groups | Internal/portal users, groups | Design application roles |
| 28 | Access Control Lists | Model CRUD permissions via CSV | Implement model permissions in lab |
| 29 | Record Rules | Row-level domain filters | Implement record-level data isolation |
| 30 | Security Context & Safe Privilege | sudo safety, access checks | Security audit a module |
| 31 | Multi-Company Development | Company-dependent fields & rules | Build secure multi-company module |

### Unit IX - Extending Existing Odoo

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 32 | Model Inheritance | _inherit, extension, overrides | Extend an existing model |
| 33 | Delegation & Mixins | _inherits, composition, mixins | Build reusable business mixin |
| 34 | View Inheritance in Real Modules | Target official views cleanly | Customize an official view |
| 35 | Extending Official Applications | Extend sales, stock, account | Customize official Odoo application |

### Unit X - Advanced Business Features

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 36 | Wizards & TransientModel | Ephemeral models, dialogs | Build bulk processing wizard |
| 37 | Sequences | Unique auto-numbering references | Build business document numbering |
| 38 | Scheduled Actions / Cron | Background automated jobs | Build scheduled business processor |
| 39 | Automation & Server Actions | Triggered actions & logic | Build business automation workflow |
| 40 | Mail, Chatter & Activities | Threads, followers, activities | Build communication-enabled workflow |
| 41 | Reports & QWeb | QWeb templates, PDF printouts | Build professional business PDF report |
| 42 | Data Files, Import & Export | Seed data, demo data, CSV/XML | Seed and import business dataset |

### Unit XI - Internationalization & Localization

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 43 | Internationalization & Localization | Translations (.po), locale, formats | Build multilingual business module |

### Unit XII - Web Development with Odoo

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 44 | HTTP Controllers | Routes, auth, JSON/HTTP endpoints | Build secure custom controller |
| 45 | Website Development | Pages, templates, web forms | Build dynamic Odoo website |
| 46 | Portal Development | Customer self-service views | Build customer self-service portal |

### Unit XIII - APIs & Integrations

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 47 | External API Concepts | REST, JSON, auth, contracts | Design an API contract |
| 48 | External Odoo Access | Remote JSON-RPC / XML-RPC calls | Build external Odoo client |
| 49 | Building API Endpoints | Custom RESTful JSON endpoints | Build production CRUD API |
| 50 | Webhooks | Inbound/outbound signed webhooks | Build reliable webhook processor |
| 51 | Third-Party Integrations | Sync, retries, error handling | Build Odoo ↔ SaaS integration |
| 52 | Payment Integrations | Payment acquirers & transactions | Build sandbox payment integration |

### Unit XIV - Modern Odoo Frontend

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 53 | Odoo JavaScript Architecture | Web client, registries, services | Inspect Odoo web client |
| 54 | OWL Fundamentals | Components, props, reactive state | Build interactive OWL component |
| 55 | Services, Registries & Hooks | Built-in services, custom hooks | Build service-driven OWL component |
| 56 | Assets & Frontend Resources | Bundles, SCSS, manifest assets | Build custom frontend asset bundle |
| 57 | Extending & Patching the Web Client | Patching components & views | Build custom field widget |
| 58 | Client Actions & Advanced Frontend | Custom dashboards, client actions | Build interactive Odoo dashboard |

### Unit XV - Files, Attachments & Media

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 59 | Attachments & Filestore | ir.attachment, binary fields, storage | Build secure document attachment feature |

### Unit XVI - PostgreSQL & Performance

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 60 | Odoo Database Structure | Models to tables, metadata | Map Odoo model to PostgreSQL |
| 61 | PostgreSQL for Odoo Developers | SQL queries, aggregates, schema | Analyze Odoo data with SQL |
| 62 | Transactions & Concurrency | Locks, savepoints, isolation | Build concurrency-safe operation |
| 63 | Indexes & Query Plans | EXPLAIN ANALYZE, index design | Optimize a slow query |
| 64 | ORM Performance | Prefetch, batching, N+1 fix | Optimize ORM business logic |
| 65 | Profiling & Optimization | Profiler, query collector, benchmarks | Optimize a slow Odoo application |

### Unit XVII - Testing & Debugging

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 66 | Odoo Logging & Debugging | Logs, pdb, shell, dev mode | Diagnose a broken module |
| 67 | Python Tests | TransactionCase, test runners | Build first automated test suite |
| 68 | Testing Business Logic | Unit tests for constraints & logic | Build business rules test suite |
| 69 | Testing Security | ACL & record rule regression tests | Build security regression suite |
| 70 | Web & Frontend Testing | Tours, HOOT, mock RPC | Build browser-based business flow test |
| 71 | Performance & Regression Testing | assertQueryCount, benchmarks | Build performance regression suite |

### Unit XVIII - CLI & Developer Tooling

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 72 | Odoo CLI & Developer Commands | Flags, scaffold, shell, test-tags | Complete CLI development workflow |

### Unit XIX - Deployment & Operations

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 73 | Odoo Configuration | odoo.conf, secrets, filtering | Build production configuration file |
| 74 | Linux Deployment | systemd, users, permissions | Deploy Odoo on Linux |
| 75 | Reverse Proxy & HTTPS | Nginx, SSL/TLS, WebSockets | Build secure HTTPS deployment |
| 76 | Workers & Production Configuration | Multiprocessing, memory limits | Build production worker configuration |
| 77 | PostgreSQL Operations | Connection pools, VACUUM, tuning | Complete database health check |
| 78 | Backups & Disaster Recovery | DB + filestore backups, restore | Test backup & disaster recovery plan |
| 79 | Odoo.sh | Branches, staging, builds, shell | Complete Odoo.sh delivery workflow |
| 80 | Docker for Odoo | Containers, Compose, mounts | Build dockerized Odoo stack |
| 81 | Monitoring & Production Troubleshooting | Logs, metrics, alerts, diagnostics | Diagnose a production incident |

### Unit XX - Upgrades, Migrations & Maintenance

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 82 | Module Versioning | Semantic versioning & changelogs | Version a production module |
| 83 | Schema Changes | Safe field evolution, constraints | Safely evolve a module schema |
| 84 | Data Migrations | Migration scripts & transforms | Migrate legacy business data |
| 85 | Odoo Version Upgrades | API & view version upgrades | Upgrade module between Odoo versions |
| 86 | Module Hooks | pre_init, post_init, uninstall | Build controlled module initialization |
| 87 | Upgrade-Safe Customization | Extension points, stable overrides | Refactor an unsafe customization |
| 88 | Legacy Module Maintenance | Characterization tests, refactoring | Modernize a legacy Odoo module |

### Unit XXI - Functional Odoo for Developers

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 89 | Core Functional Applications | Deep functional flows across apps | Trace a company end-to-end |

### Unit XXII - Real Odoo Engineering

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 90 | Requirements → ERP Design | Stakeholder discovery to specs | Write ERP requirements document |
| 91 | Odoo Solution Architecture | Module boundaries & integrations | Write solution architecture document |
| 92 | Configuration vs Customization vs Integration | Trade-offs & technical debt | Complete build vs configure study |
| 93 | Maintainable Odoo Code | Clean code, coupling, mixins | Refactor an unmaintainable module |
| 94 | Git, Collaboration & Code Review | PRs, CI, reviews, release flow | Complete team-based Odoo delivery |

### Unit XXIII - Grand Odoo Capstone

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 95 | Production ERP Capstone | Full production ERP delivery | Deliver COMPLETE BUSINESS ERP |

### Unit XXIV - Interview, Portfolio & Job Readiness

| # | Chapter | Goal | Ready to continue when... |
| - | --- | --- | --- |
| 96 | Odoo Engineer Job Readiness | 12 portfolio projects + interviews | Pass FINAL MOCK ODOO INTERVIEW |

---
---

# STORY I — UNDERSTAND THE BUSINESS BEFORE THE CODE

**Track:** Business & ERP Fundamentals

*Understand the problem ERP solves before writing a single line of Python.*

---
<a id="chapter-1"></a>
<a id="phase-1"></a>
# CHAPTER 1 - What Is ERP?

**Track:** Business & ERP Fundamentals

**WHAT YOU WILL BE ABLE TO DO:** Explain ERP as one shared system of business truth — name processes, departments, master data, and transactions — contrast ERP with CRM, and sketch how a small company would run without spreadsheet chaos.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 1 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 1.1 Business Processes

**Business Processes** is an essential mechanism in **What Is ERP?**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Business Processes
# In what_is_erp?:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Business Processes** in two sentences using a real company example. |
| Medium | Locate **Business Processes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Business Processes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Business Processes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 1.2 Departments

**Departments** is an essential mechanism in **What Is ERP?**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Departments
# In what_is_erp?:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Departments** in two sentences using a real company example. |
| Medium | Locate **Departments** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Departments**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Departments** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 1.3 Cross-Department Workflows

**Cross-Department Workflows** is an essential mechanism in **What Is ERP?**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cross-Department Workflows
# In what_is_erp?:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cross-Department Workflows** in two sentences using a real company example. |
| Medium | Locate **Cross-Department Workflows** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cross-Department Workflows**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cross-Department Workflows** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 1.4 Master Data

**Master Data** is an essential mechanism in **What Is ERP?**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Master Data
# In what_is_erp?:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Master Data** in two sentences using a real company example. |
| Medium | Locate **Master Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Master Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Master Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 1.5 Transactions

**Transactions** is an essential mechanism in **What Is ERP?**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Transactions
# In what_is_erp?:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Transactions** in two sentences using a real company example. |
| Medium | Locate **Transactions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Transactions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Transactions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 1.6 Single Source of Truth

**Single Source of Truth** is an essential mechanism in **What Is ERP?**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Single Source of Truth
# In what_is_erp?:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Single Source of Truth** in two sentences using a real company example. |
| Medium | Locate **Single Source of Truth** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Single Source of Truth**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Single Source of Truth** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 1.7 ERP vs CRM

**ERP vs CRM** is an essential mechanism in **What Is ERP?**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ERP vs CRM
# In what_is_erp?:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ERP vs CRM** in two sentences using a real company example. |
| Medium | Locate **ERP vs CRM** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ERP vs CRM**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ERP vs CRM** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 1.8 ERP vs Standalone Business Software

**ERP vs Standalone Business Software** is an essential mechanism in **What Is ERP?**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ERP vs Standalone Business Software
# In what_is_erp?:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ERP vs Standalone Business Software** in two sentences using a real company example. |
| Medium | Locate **ERP vs Standalone Business Software** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ERP vs Standalone Business Software**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ERP vs Standalone Business Software** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 1.9 PRACTICE — Model a Small Company

**PRACTICE — Model a Small Company** is an essential mechanism in **What Is ERP?**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PRACTICE — Model a Small Company
# In what_is_erp?:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PRACTICE — Model a Small Company** in two sentences using a real company example. |
| Medium | Locate **PRACTICE — Model a Small Company** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PRACTICE — Model a Small Company**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PRACTICE — Model a Small Company** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-2"></a>
<a id="phase-2"></a>
# CHAPTER 2 - Understanding Odoo

**Track:** Business & ERP Fundamentals

**WHAT YOU WILL BE ABLE TO DO:** Distinguish Community from Enterprise, explain apps vs modules/addons, describe users and multi-company, name the shared business records that glue apps together, and navigate a real Odoo database with intent.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 1 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 2.1 What Odoo Is

**What Odoo Is** is an essential mechanism in **Understanding Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating What Odoo Is
# In understanding_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **What Odoo Is** in two sentences using a real company example. |
| Medium | Locate **What Odoo Is** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **What Odoo Is**. |

**WHAT THIS UNLOCKS NEXT:**
Once **What Odoo Is** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 2.2 Odoo Ecosystem

**Odoo Ecosystem** is an essential mechanism in **Understanding Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Ecosystem
# In understanding_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Ecosystem** in two sentences using a real company example. |
| Medium | Locate **Odoo Ecosystem** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Ecosystem**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Ecosystem** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 2.3 Community Edition

**Community Edition** is an essential mechanism in **Understanding Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Community Edition
# In understanding_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Community Edition** in two sentences using a real company example. |
| Medium | Locate **Community Edition** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Community Edition**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Community Edition** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 2.4 Enterprise Edition

**Enterprise Edition** is an essential mechanism in **Understanding Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Enterprise Edition
# In understanding_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Enterprise Edition** in two sentences using a real company example. |
| Medium | Locate **Enterprise Edition** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Enterprise Edition**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Enterprise Edition** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 2.5 Odoo Apps

**Odoo Apps** is an essential mechanism in **Understanding Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Apps
# In understanding_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Apps** in two sentences using a real company example. |
| Medium | Locate **Odoo Apps** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Apps**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Apps** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 2.6 Modules / Addons

**Modules / Addons** is an essential mechanism in **Understanding Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Modules / Addons
# In understanding_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Modules / Addons** in two sentences using a real company example. |
| Medium | Locate **Modules / Addons** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Modules / Addons**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Modules / Addons** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 2.7 Users

**Users** is an essential mechanism in **Understanding Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Users
# In understanding_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Users** in two sentences using a real company example. |
| Medium | Locate **Users** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Users**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Users** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 2.8 Companies

**Companies** is an essential mechanism in **Understanding Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Companies
# In understanding_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Companies** in two sentences using a real company example. |
| Medium | Locate **Companies** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Companies**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Companies** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 2.9 Shared Business Records

**Shared Business Records** is an essential mechanism in **Understanding Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Shared Business Records
# In understanding_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Shared Business Records** in two sentences using a real company example. |
| Medium | Locate **Shared Business Records** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Shared Business Records**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Shared Business Records** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-3"></a>
<a id="phase-3"></a>
# CHAPTER 3 - Core Business Applications

**Track:** Business & ERP Fundamentals

**WHAT YOU WILL BE ABLE TO DO:** Describe what Contacts, CRM, Sales, Purchase, Inventory, Accounting, and Employees each own; trace a quote through delivery to invoice on shared partners/products; and spot where custom modules usually plug in later.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 2 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 3.1 Contacts

**Contacts** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Contacts
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Contacts** in two sentences using a real company example. |
| Medium | Locate **Contacts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Contacts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Contacts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 3.2 CRM

**CRM** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CRM
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CRM** in two sentences using a real company example. |
| Medium | Locate **CRM** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CRM**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CRM** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 3.3 Sales

**Sales** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Sales
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Sales** in two sentences using a real company example. |
| Medium | Locate **Sales** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Sales**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Sales** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 3.4 Purchase

**Purchase** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Purchase
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Purchase** in two sentences using a real company example. |
| Medium | Locate **Purchase** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Purchase**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Purchase** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 3.5 Inventory

**Inventory** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Inventory
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Inventory** in two sentences using a real company example. |
| Medium | Locate **Inventory** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Inventory**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Inventory** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 3.6 Accounting

**Accounting** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Accounting
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Accounting** in two sentences using a real company example. |
| Medium | Locate **Accounting** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Accounting**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Accounting** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 3.7 Employees / HR

**Employees / HR** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Employees / HR
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Employees / HR** in two sentences using a real company example. |
| Medium | Locate **Employees / HR** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Employees / HR**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Employees / HR** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 3.8 Projects

**Projects** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Projects
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Projects** in two sentences using a real company example. |
| Medium | Locate **Projects** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Projects**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Projects** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 3.9 Manufacturing

**Manufacturing** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Manufacturing
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Manufacturing** in two sentences using a real company example. |
| Medium | Locate **Manufacturing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Manufacturing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Manufacturing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 3.10 PRACTICE — Trace Quote → Delivery → Invoice

**PRACTICE — Trace Quote → Delivery → Invoice** is an essential mechanism in **Core Business Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PRACTICE — Trace Quote → Delivery → Invoice
# In core_business_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PRACTICE — Trace Quote → Delivery → Invoice** in two sentences using a real company example. |
| Medium | Locate **PRACTICE — Trace Quote → Delivery → Invoice** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PRACTICE — Trace Quote → Delivery → Invoice**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PRACTICE — Trace Quote → Delivery → Invoice** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT I — Design a Company's ERP Flow

This is the capstone project for Story I. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story I.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY I:**
- You have mastered all lessons and concepts in Story I.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **HOW ODOO ACTUALLY WORKS**!

> **Story I Complete!** [Continue to Story II: HOW ODOO ACTUALLY WORKS](#story-ii)


---
---

# STORY II — HOW ODOO ACTUALLY WORKS

**Track:** Platform Architecture

*Three-tier architecture, PostgreSQL transactions, and the Python WSGI server.*

---
<a id="chapter-4"></a>
<a id="phase-4"></a>
# CHAPTER 4 - Odoo Architecture

**Track:** Platform Architecture

**WHAT YOU WILL BE ABLE TO DO:** Trace a browser action through the web client, Odoo server, PostgreSQL, and filestore; explain where addons and the registry sit; and sketch the three-tier picture without confusing “Odoo” with “the database alone.”.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 3 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 4.1 Three-Tier Architecture

**Three-Tier Architecture** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Three-Tier Architecture
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Three-Tier Architecture** in two sentences using a real company example. |
| Medium | Locate **Three-Tier Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Three-Tier Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Three-Tier Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 4.2 Browser / Web Client

**Browser / Web Client** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Browser / Web Client
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Browser / Web Client** in two sentences using a real company example. |
| Medium | Locate **Browser / Web Client** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Browser / Web Client**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Browser / Web Client** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 4.3 Odoo Application Server

**Odoo Application Server** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Application Server
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Application Server** in two sentences using a real company example. |
| Medium | Locate **Odoo Application Server** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Application Server**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Application Server** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 4.4 PostgreSQL

**PostgreSQL** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PostgreSQL
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PostgreSQL** in two sentences using a real company example. |
| Medium | Locate **PostgreSQL** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PostgreSQL**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PostgreSQL** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 4.5 Filestore

**Filestore** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Filestore
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Filestore** in two sentences using a real company example. |
| Medium | Locate **Filestore** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Filestore**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Filestore** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 4.6 Addons

**Addons** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Addons
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Addons** in two sentences using a real company example. |
| Medium | Locate **Addons** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Addons**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Addons** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 4.7 Registry

**Registry** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Registry
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Registry** in two sentences using a real company example. |
| Medium | Locate **Registry** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Registry**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Registry** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 4.8 ORM

**ORM** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ORM
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ORM** in two sentences using a real company example. |
| Medium | Locate **ORM** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ORM**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ORM** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 4.9 HTTP Layer

**HTTP Layer** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating HTTP Layer
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **HTTP Layer** in two sentences using a real company example. |
| Medium | Locate **HTTP Layer** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **HTTP Layer**. |

**WHAT THIS UNLOCKS NEXT:**
Once **HTTP Layer** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 4.10 LAB — Trace Browser → Server → Database

**LAB — Trace Browser → Server → Database** is an essential mechanism in **Odoo Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating LAB — Trace Browser → Server → Database
# In odoo_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **LAB — Trace Browser → Server → Database** in two sentences using a real company example. |
| Medium | Locate **LAB — Trace Browser → Server → Database** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **LAB — Trace Browser → Server → Database**. |

**WHAT THIS UNLOCKS NEXT:**
Once **LAB — Trace Browser → Server → Database** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-5"></a>
<a id="phase-5"></a>
# CHAPTER 5 - Development Environment

**Track:** Platform Architecture

**WHAT YOU WILL BE ABLE TO DO:** Prepare a Python environment, PostgreSQL, and Odoo source; write a working configuration with addons_path; enable developer mode; read logs; and run Odoo locally for module work.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 4 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 5.1 Python Environment

**Python Environment** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Python Environment
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Python Environment** in two sentences using a real company example. |
| Medium | Locate **Python Environment** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Python Environment**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Python Environment** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 5.2 PostgreSQL Setup

**PostgreSQL Setup** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PostgreSQL Setup
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PostgreSQL Setup** in two sentences using a real company example. |
| Medium | Locate **PostgreSQL Setup** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PostgreSQL Setup**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PostgreSQL Setup** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 5.3 Odoo Source

**Odoo Source** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Source
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Source** in two sentences using a real company example. |
| Medium | Locate **Odoo Source** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Source**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Source** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 5.4 Configuration File

**Configuration File** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Configuration File
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Configuration File** in two sentences using a real company example. |
| Medium | Locate **Configuration File** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Configuration File**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Configuration File** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 5.5 addons_path

**addons_path** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating addons_path
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **addons_path** in two sentences using a real company example. |
| Medium | Locate **addons_path** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **addons_path**. |

**WHAT THIS UNLOCKS NEXT:**
Once **addons_path** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 5.6 Custom Addons Directory

**Custom Addons Directory** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Custom Addons Directory
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Custom Addons Directory** in two sentences using a real company example. |
| Medium | Locate **Custom Addons Directory** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Custom Addons Directory**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Custom Addons Directory** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 5.7 Developer Mode

**Developer Mode** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Developer Mode
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Developer Mode** in two sentences using a real company example. |
| Medium | Locate **Developer Mode** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Developer Mode**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Developer Mode** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 5.8 Debug Assets Mode

**Debug Assets Mode** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Debug Assets Mode
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Debug Assets Mode** in two sentences using a real company example. |
| Medium | Locate **Debug Assets Mode** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Debug Assets Mode**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Debug Assets Mode** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 5.9 Logging

**Logging** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Logging
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Logging** in two sentences using a real company example. |
| Medium | Locate **Logging** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Logging**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Logging** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 5.10 LAB — Run Odoo Locally

**LAB — Run Odoo Locally** is an essential mechanism in **Development Environment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating LAB — Run Odoo Locally
# In development_environment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **LAB — Run Odoo Locally** in two sentences using a real company example. |
| Medium | Locate **LAB — Run Odoo Locally** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **LAB — Run Odoo Locally**. |

**WHAT THIS UNLOCKS NEXT:**
Once **LAB — Run Odoo Locally** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-6"></a>
<a id="phase-6"></a>
# CHAPTER 6 - Odoo Source Code Structure

**Track:** Platform Architecture

**WHAT YOU WILL BE ABLE TO DO:** Orient inside the Odoo repository: core odoo/ package vs addons/, where models, HTTP, and services live, how the registry is populated from code, and find files on purpose instead of by desperate search.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 5 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 6.1 odoo/

**odoo/** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating odoo/
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **odoo/** in two sentences using a real company example. |
| Medium | Locate **odoo/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **odoo/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **odoo/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 6.2 addons/

**addons/** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating addons/
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **addons/** in two sentences using a real company example. |
| Medium | Locate **addons/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **addons/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **addons/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 6.3 Core Framework

**Core Framework** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Core Framework
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Core Framework** in two sentences using a real company example. |
| Medium | Locate **Core Framework** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Core Framework**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Core Framework** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 6.4 Models

**Models** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Models
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Models** in two sentences using a real company example. |
| Medium | Locate **Models** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Models**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Models** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 6.5 HTTP

**HTTP** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating HTTP
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **HTTP** in two sentences using a real company example. |
| Medium | Locate **HTTP** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **HTTP**. |

**WHAT THIS UNLOCKS NEXT:**
Once **HTTP** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 6.6 Services

**Services** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Services
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Services** in two sentences using a real company example. |
| Medium | Locate **Services** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Services**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Services** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 6.7 Tools

**Tools** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Tools
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Tools** in two sentences using a real company example. |
| Medium | Locate **Tools** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Tools**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Tools** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 6.8 Registry

**Registry** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Registry
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Registry** in two sentences using a real company example. |
| Medium | Locate **Registry** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Registry**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Registry** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 6.9 Reading Official Addons

**Reading Official Addons** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reading Official Addons
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reading Official Addons** in two sentences using a real company example. |
| Medium | Locate **Reading Official Addons** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reading Official Addons**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reading Official Addons** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 6.10 PRACTICE — Navigate the Odoo Repository

**PRACTICE — Navigate the Odoo Repository** is an essential mechanism in **Odoo Source Code Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PRACTICE — Navigate the Odoo Repository
# In odoo_source_code_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PRACTICE — Navigate the Odoo Repository** in two sentences using a real company example. |
| Medium | Locate **PRACTICE — Navigate the Odoo Repository** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PRACTICE — Navigate the Odoo Repository**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PRACTICE — Navigate the Odoo Repository** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT II — Local Odoo Development Workspace

This is the capstone project for Story II. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story II.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY II:**
- You have mastered all lessons and concepts in Story II.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **THE FIRST CUSTOM ADDON**!

> **Story II Complete!** [Continue to Story III: THE FIRST CUSTOM ADDON](#story-iii)


---
---

# STORY III — THE FIRST CUSTOM ADDON

**Track:** Module Foundations

*Manifest files, module directory anatomy, and addon installation lifecycles.*

---
<a id="chapter-7"></a>
<a id="phase-7"></a>
# CHAPTER 7 - Module Anatomy

**Track:** Module Foundations

**WHAT YOU WILL BE ABLE TO DO:** Explain every standard folder in an Odoo addon, author a minimal __manifest__.py and __init__.py, place models/views/security/data/static correctly, and ship a “Hello Odoo” module that installs cleanly.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 6 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 7.1 Addon Directory

**Addon Directory** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Addon Directory
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Addon Directory** in two sentences using a real company example. |
| Medium | Locate **Addon Directory** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Addon Directory**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Addon Directory** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.2 __manifest__.py

**__manifest__.py** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating __manifest__.py
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **__manifest__.py** in two sentences using a real company example. |
| Medium | Locate **__manifest__.py** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **__manifest__.py**. |

**WHAT THIS UNLOCKS NEXT:**
Once **__manifest__.py** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.3 __init__.py

**__init__.py** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating __init__.py
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **__init__.py** in two sentences using a real company example. |
| Medium | Locate **__init__.py** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **__init__.py**. |

**WHAT THIS UNLOCKS NEXT:**
Once **__init__.py** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.4 models/

**models/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating models/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **models/** in two sentences using a real company example. |
| Medium | Locate **models/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **models/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **models/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.5 views/

**views/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating views/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **views/** in two sentences using a real company example. |
| Medium | Locate **views/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **views/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **views/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.6 security/

**security/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating security/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **security/** in two sentences using a real company example. |
| Medium | Locate **security/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **security/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **security/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.7 data/

**data/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating data/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **data/** in two sentences using a real company example. |
| Medium | Locate **data/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **data/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **data/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.8 demo/

**demo/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating demo/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **demo/** in two sentences using a real company example. |
| Medium | Locate **demo/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **demo/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **demo/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.9 static/

**static/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating static/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **static/** in two sentences using a real company example. |
| Medium | Locate **static/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **static/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **static/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.10 controllers/

**controllers/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating controllers/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **controllers/** in two sentences using a real company example. |
| Medium | Locate **controllers/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **controllers/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **controllers/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.11 wizard/

**wizard/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating wizard/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **wizard/** in two sentences using a real company example. |
| Medium | Locate **wizard/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **wizard/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **wizard/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.12 report/

**report/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating report/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **report/** in two sentences using a real company example. |
| Medium | Locate **report/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **report/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **report/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.13 i18n/

**i18n/** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating i18n/
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **i18n/** in two sentences using a real company example. |
| Medium | Locate **i18n/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **i18n/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **i18n/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 7.14 MINI PROJECT — Hello Odoo

**MINI PROJECT — Hello Odoo** is an essential mechanism in **Module Anatomy**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating MINI PROJECT — Hello Odoo
# In module_anatomy:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **MINI PROJECT — Hello Odoo** in two sentences using a real company example. |
| Medium | Locate **MINI PROJECT — Hello Odoo** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **MINI PROJECT — Hello Odoo**. |

**WHAT THIS UNLOCKS NEXT:**
Once **MINI PROJECT — Hello Odoo** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-8"></a>
<a id="phase-8"></a>
# CHAPTER 8 - Module Lifecycle

**Track:** Module Foundations

**WHAT YOU WILL BE ABLE TO DO:** Manage depends, install/upgrade/uninstall with intent, predict data load order effects, and use -i / -u (or Apps UI) safely on a training database.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 7 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 8.1 Module Discovery

**Module Discovery** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Module Discovery
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Module Discovery** in two sentences using a real company example. |
| Medium | Locate **Module Discovery** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Module Discovery**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Module Discovery** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 8.2 Dependencies

**Dependencies** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Dependencies
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Dependencies** in two sentences using a real company example. |
| Medium | Locate **Dependencies** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Dependencies**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Dependencies** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 8.3 Installation

**Installation** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Installation
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Installation** in two sentences using a real company example. |
| Medium | Locate **Installation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Installation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Installation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 8.4 Initialization

**Initialization** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Initialization
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Initialization** in two sentences using a real company example. |
| Medium | Locate **Initialization** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Initialization**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Initialization** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 8.5 Upgrade

**Upgrade** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Upgrade
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Upgrade** in two sentences using a real company example. |
| Medium | Locate **Upgrade** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Upgrade**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Upgrade** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 8.6 Uninstall

**Uninstall** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Uninstall
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Uninstall** in two sentences using a real company example. |
| Medium | Locate **Uninstall** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Uninstall**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Uninstall** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 8.7 Data Load Order

**Data Load Order** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Data Load Order
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Data Load Order** in two sentences using a real company example. |
| Medium | Locate **Data Load Order** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Data Load Order**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Data Load Order** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 8.8 Application Flag

**Application Flag** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Application Flag
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Application Flag** in two sentences using a real company example. |
| Medium | Locate **Application Flag** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Application Flag**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Application Flag** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 8.9 Installable Flag

**Installable Flag** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Installable Flag
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Installable Flag** in two sentences using a real company example. |
| Medium | Locate **Installable Flag** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Installable Flag**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Installable Flag** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 8.10 LAB — Install & Upgrade Your Module

**LAB — Install & Upgrade Your Module** is an essential mechanism in **Module Lifecycle**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating LAB — Install & Upgrade Your Module
# In module_lifecycle:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **LAB — Install & Upgrade Your Module** in two sentences using a real company example. |
| Medium | Locate **LAB — Install & Upgrade Your Module** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **LAB — Install & Upgrade Your Module**. |

**WHAT THIS UNLOCKS NEXT:**
Once **LAB — Install & Upgrade Your Module** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT III — Property Management Base Addon

This is the capstone project for Story III. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story III.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY III:**
- You have mastered all lessons and concepts in Story III.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **MODELING BUSINESS DATA**!

> **Story III Complete!** [Continue to Story IV: MODELING BUSINESS DATA](#story-iv)


---
---

# STORY IV — MODELING BUSINESS DATA

**Track:** Data Modeling

*Python models, basic fields, relational fields, and database table creation.*

---
<a id="chapter-9"></a>
<a id="phase-9"></a>
# CHAPTER 9 - Models

**Track:** Data Modeling

**WHAT YOU WILL BE ABLE TO DO:** Define a persistent Odoo model with models.Model, set _name, _description, and _rec_name, register it through the module import chain, and ship a first library book model that creates a real PostgreSQL table.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 8 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 9.1 models.Model

**models.Model** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating models.Model
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **models.Model** in two sentences using a real company example. |
| Medium | Locate **models.Model** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **models.Model**. |

**WHAT THIS UNLOCKS NEXT:**
Once **models.Model** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 9.2 models.AbstractModel

**models.AbstractModel** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating models.AbstractModel
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **models.AbstractModel** in two sentences using a real company example. |
| Medium | Locate **models.AbstractModel** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **models.AbstractModel**. |

**WHAT THIS UNLOCKS NEXT:**
Once **models.AbstractModel** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 9.3 models.TransientModel

**models.TransientModel** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating models.TransientModel
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **models.TransientModel** in two sentences using a real company example. |
| Medium | Locate **models.TransientModel** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **models.TransientModel**. |

**WHAT THIS UNLOCKS NEXT:**
Once **models.TransientModel** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 9.4 _name

**_name** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating _name
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **_name** in two sentences using a real company example. |
| Medium | Locate **_name** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **_name**. |

**WHAT THIS UNLOCKS NEXT:**
Once **_name** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 9.5 _description

**_description** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating _description
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **_description** in two sentences using a real company example. |
| Medium | Locate **_description** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **_description**. |

**WHAT THIS UNLOCKS NEXT:**
Once **_description** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 9.6 _rec_name

**_rec_name** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating _rec_name
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **_rec_name** in two sentences using a real company example. |
| Medium | Locate **_rec_name** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **_rec_name**. |

**WHAT THIS UNLOCKS NEXT:**
Once **_rec_name** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 9.7 _order

**_order** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating _order
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **_order** in two sentences using a real company example. |
| Medium | Locate **_order** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **_order**. |

**WHAT THIS UNLOCKS NEXT:**
Once **_order** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 9.8 Automatic Fields

**Automatic Fields** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Automatic Fields
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Automatic Fields** in two sentences using a real company example. |
| Medium | Locate **Automatic Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Automatic Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Automatic Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 9.9 Reserved Field Names

**Reserved Field Names** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reserved Field Names
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reserved Field Names** in two sentences using a real company example. |
| Medium | Locate **Reserved Field Names** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reserved Field Names**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reserved Field Names** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 9.10 MINI PROJECT — Library Model

**MINI PROJECT — Library Model** is an essential mechanism in **Models**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating MINI PROJECT — Library Model
# In models:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **MINI PROJECT — Library Model** in two sentences using a real company example. |
| Medium | Locate **MINI PROJECT — Library Model** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **MINI PROJECT — Library Model**. |

**WHAT THIS UNLOCKS NEXT:**
Once **MINI PROJECT — Library Model** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-10"></a>
<a id="phase-10"></a>
# CHAPTER 10 - Fields

**Track:** Data Modeling

**WHAT YOU WILL BE ABLE TO DO:** Choose and declare the right basic field types for business data — Char, Text, Integer, Float, Boolean, Date, Datetime, Selection, Monetary — with string, required, default, and help, and model realistic library / sales-style records.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 9 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 10.1 Char

**Char** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Char
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Char** in two sentences using a real company example. |
| Medium | Locate **Char** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Char**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Char** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.2 Text

**Text** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Text
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Text** in two sentences using a real company example. |
| Medium | Locate **Text** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Text**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Text** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.3 Html

**Html** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Html
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Html** in two sentences using a real company example. |
| Medium | Locate **Html** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Html**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Html** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.4 Integer

**Integer** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Integer
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Integer** in two sentences using a real company example. |
| Medium | Locate **Integer** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Integer**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Integer** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.5 Float

**Float** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Float
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Float** in two sentences using a real company example. |
| Medium | Locate **Float** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Float**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Float** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.6 Boolean

**Boolean** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Boolean
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Boolean** in two sentences using a real company example. |
| Medium | Locate **Boolean** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Boolean**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Boolean** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.7 Date

**Date** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Date
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Date** in two sentences using a real company example. |
| Medium | Locate **Date** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Date**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Date** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.8 Datetime

**Datetime** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Datetime
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Datetime** in two sentences using a real company example. |
| Medium | Locate **Datetime** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Datetime**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Datetime** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.9 Selection

**Selection** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Selection
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Selection** in two sentences using a real company example. |
| Medium | Locate **Selection** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Selection**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Selection** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.10 Monetary

**Monetary** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Monetary
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Monetary** in two sentences using a real company example. |
| Medium | Locate **Monetary** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Monetary**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Monetary** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.11 Binary

**Binary** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Binary
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Binary** in two sentences using a real company example. |
| Medium | Locate **Binary** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Binary**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Binary** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.12 Image

**Image** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Image
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Image** in two sentences using a real company example. |
| Medium | Locate **Image** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Image**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Image** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.13 Field Attributes

**Field Attributes** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Field Attributes
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Field Attributes** in two sentences using a real company example. |
| Medium | Locate **Field Attributes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Field Attributes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Field Attributes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 10.14 PRACTICE — Model Business Records

**PRACTICE — Model Business Records** is an essential mechanism in **Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PRACTICE — Model Business Records
# In fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PRACTICE — Model Business Records** in two sentences using a real company example. |
| Medium | Locate **PRACTICE — Model Business Records** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PRACTICE — Model Business Records**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PRACTICE — Model Business Records** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-11"></a>
<a id="phase-11"></a>
# CHAPTER 11 - Relationships

**Track:** Data Modeling

**WHAT YOU WILL BE ABLE TO DO:** Model Many2one, One2many, and Many2many links correctly, expose related fields for denormalized display, and draw a coherent business data graph for a library or sales domain.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 10 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 11.1 Many2one

**Many2one** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Many2one
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Many2one** in two sentences using a real company example. |
| Medium | Locate **Many2one** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Many2one**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Many2one** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.2 One2many

**One2many** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating One2many
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **One2many** in two sentences using a real company example. |
| Medium | Locate **One2many** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **One2many**. |

**WHAT THIS UNLOCKS NEXT:**
Once **One2many** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.3 Many2many

**Many2many** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Many2many
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Many2many** in two sentences using a real company example. |
| Medium | Locate **Many2many** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Many2many**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Many2many** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.4 Related Fields

**Related Fields** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Related Fields
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Related Fields** in two sentences using a real company example. |
| Medium | Locate **Related Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Related Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Related Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.5 Relational Commands

**Relational Commands** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Relational Commands
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Relational Commands** in two sentences using a real company example. |
| Medium | Locate **Relational Commands** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Relational Commands**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Relational Commands** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.6 Command.create()

**Command.create()** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Command.create()
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Command.create()** in two sentences using a real company example. |
| Medium | Locate **Command.create()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Command.create()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Command.create()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.7 Command.update()

**Command.update()** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Command.update()
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Command.update()** in two sentences using a real company example. |
| Medium | Locate **Command.update()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Command.update()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Command.update()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.8 Command.delete()

**Command.delete()** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Command.delete()
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Command.delete()** in two sentences using a real company example. |
| Medium | Locate **Command.delete()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Command.delete()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Command.delete()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.9 Command.unlink()

**Command.unlink()** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Command.unlink()
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Command.unlink()** in two sentences using a real company example. |
| Medium | Locate **Command.unlink()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Command.unlink()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Command.unlink()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.10 Command.link()

**Command.link()** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Command.link()
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Command.link()** in two sentences using a real company example. |
| Medium | Locate **Command.link()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Command.link()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Command.link()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.11 Command.clear()

**Command.clear()** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Command.clear()
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Command.clear()** in two sentences using a real company example. |
| Medium | Locate **Command.clear()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Command.clear()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Command.clear()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.12 Command.set()

**Command.set()** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Command.set()
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Command.set()** in two sentences using a real company example. |
| Medium | Locate **Command.set()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Command.set()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Command.set()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 11.13 DESIGN PROJECT — Business Data Graph

**DESIGN PROJECT — Business Data Graph** is an essential mechanism in **Relationships**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating DESIGN PROJECT — Business Data Graph
# In relationships:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **DESIGN PROJECT — Business Data Graph** in two sentences using a real company example. |
| Medium | Locate **DESIGN PROJECT — Business Data Graph** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **DESIGN PROJECT — Business Data Graph**. |

**WHAT THIS UNLOCKS NEXT:**
Once **DESIGN PROJECT — Business Data Graph** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-12"></a>
<a id="phase-12"></a>
# CHAPTER 12 - Computed & Dynamic Fields

**Track:** Data Modeling

**WHAT YOU WILL BE ABLE TO DO:** Implement compute methods with @api.depends, choose store, add inverse and search when needed, and ship automatic business calculations (loan duration, order totals) without hand-maintained duplicate numbers.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 11 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 12.1 compute

**compute** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating compute
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **compute** in two sentences using a real company example. |
| Medium | Locate **compute** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **compute**. |

**WHAT THIS UNLOCKS NEXT:**
Once **compute** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 12.2 @api.depends

**@api.depends** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating @api.depends
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **@api.depends** in two sentences using a real company example. |
| Medium | Locate **@api.depends** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **@api.depends**. |

**WHAT THIS UNLOCKS NEXT:**
Once **@api.depends** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 12.3 Stored Computed Fields

**Stored Computed Fields** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Stored Computed Fields
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Stored Computed Fields** in two sentences using a real company example. |
| Medium | Locate **Stored Computed Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Stored Computed Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Stored Computed Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 12.4 Non-Stored Fields

**Non-Stored Fields** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Non-Stored Fields
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Non-Stored Fields** in two sentences using a real company example. |
| Medium | Locate **Non-Stored Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Non-Stored Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Non-Stored Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 12.5 inverse

**inverse** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating inverse
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **inverse** in two sentences using a real company example. |
| Medium | Locate **inverse** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **inverse**. |

**WHAT THIS UNLOCKS NEXT:**
Once **inverse** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 12.6 Custom Search Methods

**Custom Search Methods** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Custom Search Methods
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Custom Search Methods** in two sentences using a real company example. |
| Medium | Locate **Custom Search Methods** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Custom Search Methods**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Custom Search Methods** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 12.7 Related Fields

**Related Fields** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Related Fields
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Related Fields** in two sentences using a real company example. |
| Medium | Locate **Related Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Related Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Related Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 12.8 Default Values

**Default Values** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Default Values
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Default Values** in two sentences using a real company example. |
| Medium | Locate **Default Values** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Default Values**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Default Values** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 12.9 copy

**copy** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating copy
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **copy** in two sentences using a real company example. |
| Medium | Locate **copy** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **copy**. |

**WHAT THIS UNLOCKS NEXT:**
Once **copy** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 12.10 LAB — Automatic Business Calculations

**LAB — Automatic Business Calculations** is an essential mechanism in **Computed & Dynamic Fields**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating LAB — Automatic Business Calculations
# In computed_&_dynamic_fields:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **LAB — Automatic Business Calculations** in two sentences using a real company example. |
| Medium | Locate **LAB — Automatic Business Calculations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **LAB — Automatic Business Calculations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **LAB — Automatic Business Calculations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT IV — Real Estate Data Architecture

This is the capstone project for Story IV. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story IV.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY IV:**
- You have mastered all lessons and concepts in Story IV.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **MASTERING THE ODOO ORM**!

> **Story IV Complete!** [Continue to Story V: MASTERING THE ODOO ORM](#story-v)


---
---

# STORY V — MASTERING THE ODOO ORM

**Track:** ORM & Database Operations

*Environment (env), recordset browsing, CRUD operations, and search domains.*

---
<a id="chapter-13"></a>
<a id="phase-13"></a>
# CHAPTER 13 - Environment & Recordsets

**Track:** ORM & Database Operations

**WHAT YOU WILL BE ABLE TO DO:** Navigate env and self, reason about recordsets (empty, singleton, multi), read and extend context, and correctly use the current user and company when writing business code.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 12 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 13.1 env

**env** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating env
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **env** in two sentences using a real company example. |
| Medium | Locate **env** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **env**. |

**WHAT THIS UNLOCKS NEXT:**
Once **env** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.2 self

**self** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating self
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **self** in two sentences using a real company example. |
| Medium | Locate **self** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **self**. |

**WHAT THIS UNLOCKS NEXT:**
Once **self** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.3 Recordsets

**Recordsets** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Recordsets
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Recordsets** in two sentences using a real company example. |
| Medium | Locate **Recordsets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Recordsets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Recordsets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.4 Empty Recordsets

**Empty Recordsets** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Empty Recordsets
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Empty Recordsets** in two sentences using a real company example. |
| Medium | Locate **Empty Recordsets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Empty Recordsets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Empty Recordsets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.5 Singleton Records

**Singleton Records** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Singleton Records
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Singleton Records** in two sentences using a real company example. |
| Medium | Locate **Singleton Records** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Singleton Records**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Singleton Records** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.6 env.user

**env.user** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating env.user
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **env.user** in two sentences using a real company example. |
| Medium | Locate **env.user** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **env.user**. |

**WHAT THIS UNLOCKS NEXT:**
Once **env.user** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.7 env.company

**env.company** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating env.company
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **env.company** in two sentences using a real company example. |
| Medium | Locate **env.company** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **env.company**. |

**WHAT THIS UNLOCKS NEXT:**
Once **env.company** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.8 env.companies

**env.companies** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating env.companies
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **env.companies** in two sentences using a real company example. |
| Medium | Locate **env.companies** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **env.companies**. |

**WHAT THIS UNLOCKS NEXT:**
Once **env.companies** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.9 Context

**Context** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Context
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Context** in two sentences using a real company example. |
| Medium | Locate **Context** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Context**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Context** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.10 with_context()

**with_context()** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating with_context()
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **with_context()** in two sentences using a real company example. |
| Medium | Locate **with_context()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **with_context()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **with_context()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.11 with_user()

**with_user()** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating with_user()
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **with_user()** in two sentences using a real company example. |
| Medium | Locate **with_user()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **with_user()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **with_user()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.12 with_company()

**with_company()** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating with_company()
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **with_company()** in two sentences using a real company example. |
| Medium | Locate **with_company()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **with_company()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **with_company()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.13 sudo()

**sudo()** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating sudo()
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **sudo()** in two sentences using a real company example. |
| Medium | Locate **sudo()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **sudo()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **sudo()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 13.14 with_env()

**with_env()** is an essential mechanism in **Environment & Recordsets**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating with_env()
# In environment_&_recordsets:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **with_env()** in two sentences using a real company example. |
| Medium | Locate **with_env()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **with_env()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **with_env()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-14"></a>
<a id="phase-14"></a>
# CHAPTER 14 - CRUD

**Track:** ORM & Database Operations

**WHAT YOU WILL BE ABLE TO DO:** Use create, browse, search, read, write, and unlink correctly on recordsets, including One2many/Many2many commands, and complete coding drills that mirror real library and sales operations.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 13 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 14.1 create()

**create()** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating create()
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **create()** in two sentences using a real company example. |
| Medium | Locate **create()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **create()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **create()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 14.2 browse()

**browse()** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating browse()
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **browse()** in two sentences using a real company example. |
| Medium | Locate **browse()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **browse()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **browse()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 14.3 search()

**search()** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating search()
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **search()** in two sentences using a real company example. |
| Medium | Locate **search()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **search()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **search()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 14.4 search_fetch()

**search_fetch()** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating search_fetch()
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **search_fetch()** in two sentences using a real company example. |
| Medium | Locate **search_fetch()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **search_fetch()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **search_fetch()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 14.5 read()

**read()** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating read()
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **read()** in two sentences using a real company example. |
| Medium | Locate **read()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **read()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **read()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 14.6 write()

**write()** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating write()
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **write()** in two sentences using a real company example. |
| Medium | Locate **write()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **write()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **write()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 14.7 unlink()

**unlink()** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating unlink()
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **unlink()** in two sentences using a real company example. |
| Medium | Locate **unlink()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **unlink()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **unlink()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 14.8 copy()

**copy()** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating copy()
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **copy()** in two sentences using a real company example. |
| Medium | Locate **copy()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **copy()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **copy()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 14.9 exists()

**exists()** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating exists()
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **exists()** in two sentences using a real company example. |
| Medium | Locate **exists()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **exists()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **exists()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 14.10 CODING PRACTICE — CRUD Operations

**CODING PRACTICE — CRUD Operations** is an essential mechanism in **CRUD**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CODING PRACTICE — CRUD Operations
# In crud:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CODING PRACTICE — CRUD Operations** in two sentences using a real company example. |
| Medium | Locate **CODING PRACTICE — CRUD Operations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CODING PRACTICE — CRUD Operations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CODING PRACTICE — CRUD Operations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-15"></a>
<a id="phase-15"></a>
# CHAPTER 15 - Domains & Searching

**Track:** ORM & Database Operations

**WHAT YOU WILL BE ABLE TO DO:** Write correct domains with operators and AND/OR/NOT composition, use search, search_count, and search_read for business queries, and translate English questions into Odoo domains.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 14 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 15.1 Domain Syntax

**Domain Syntax** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Domain Syntax
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Domain Syntax** in two sentences using a real company example. |
| Medium | Locate **Domain Syntax** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Domain Syntax**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Domain Syntax** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.2 Comparison Operators

**Comparison Operators** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Comparison Operators
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Comparison Operators** in two sentences using a real company example. |
| Medium | Locate **Comparison Operators** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Comparison Operators**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Comparison Operators** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.3 in / not in

**in / not in** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating in / not in
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **in / not in** in two sentences using a real company example. |
| Medium | Locate **in / not in** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **in / not in**. |

**WHAT THIS UNLOCKS NEXT:**
Once **in / not in** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.4 like / ilike

**like / ilike** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating like / ilike
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **like / ilike** in two sentences using a real company example. |
| Medium | Locate **like / ilike** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **like / ilike**. |

**WHAT THIS UNLOCKS NEXT:**
Once **like / ilike** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.5 child_of / parent_of

**child_of / parent_of** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating child_of / parent_of
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **child_of / parent_of** in two sentences using a real company example. |
| Medium | Locate **child_of / parent_of** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **child_of / parent_of**. |

**WHAT THIS UNLOCKS NEXT:**
Once **child_of / parent_of** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.6 AND

**AND** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating AND
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **AND** in two sentences using a real company example. |
| Medium | Locate **AND** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **AND**. |

**WHAT THIS UNLOCKS NEXT:**
Once **AND** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.7 OR

**OR** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating OR
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **OR** in two sentences using a real company example. |
| Medium | Locate **OR** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **OR**. |

**WHAT THIS UNLOCKS NEXT:**
Once **OR** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.8 NOT

**NOT** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating NOT
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **NOT** in two sentences using a real company example. |
| Medium | Locate **NOT** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **NOT**. |

**WHAT THIS UNLOCKS NEXT:**
Once **NOT** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.9 search_count()

**search_count()** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating search_count()
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **search_count()** in two sentences using a real company example. |
| Medium | Locate **search_count()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **search_count()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **search_count()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.10 search_read()

**search_read()** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating search_read()
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **search_read()** in two sentences using a real company example. |
| Medium | Locate **search_read()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **search_read()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **search_read()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.11 Ordering

**Ordering** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Ordering
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Ordering** in two sentences using a real company example. |
| Medium | Locate **Ordering** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Ordering**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Ordering** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.12 Limit / Offset

**Limit / Offset** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Limit / Offset
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Limit / Offset** in two sentences using a real company example. |
| Medium | Locate **Limit / Offset** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Limit / Offset**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Limit / Offset** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 15.13 PRACTICE — Business Queries

**PRACTICE — Business Queries** is an essential mechanism in **Domains & Searching**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PRACTICE — Business Queries
# In domains_&_searching:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PRACTICE — Business Queries** in two sentences using a real company example. |
| Medium | Locate **PRACTICE — Business Queries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PRACTICE — Business Queries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PRACTICE — Business Queries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-16"></a>
<a id="phase-16"></a>
# CHAPTER 16 - Recordset Operations

**Track:** ORM & Database Operations

**WHAT YOU WILL BE ABLE TO DO:** Use filtered, mapped, sorted, and ensure_one fluently, and apply batch-friendly patterns that avoid naive Python loops over ORM chatter.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 15 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 16.1 Iteration

**Iteration** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Iteration
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Iteration** in two sentences using a real company example. |
| Medium | Locate **Iteration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Iteration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Iteration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 16.2 filtered()

**filtered()** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating filtered()
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **filtered()** in two sentences using a real company example. |
| Medium | Locate **filtered()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **filtered()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **filtered()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 16.3 filtered_domain()

**filtered_domain()** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating filtered_domain()
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **filtered_domain()** in two sentences using a real company example. |
| Medium | Locate **filtered_domain()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **filtered_domain()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **filtered_domain()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 16.4 mapped()

**mapped()** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating mapped()
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **mapped()** in two sentences using a real company example. |
| Medium | Locate **mapped()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **mapped()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **mapped()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 16.5 sorted()

**sorted()** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating sorted()
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **sorted()** in two sentences using a real company example. |
| Medium | Locate **sorted()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **sorted()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **sorted()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 16.6 ensure_one()

**ensure_one()** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ensure_one()
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ensure_one()** in two sentences using a real company example. |
| Medium | Locate **ensure_one()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ensure_one()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ensure_one()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 16.7 Recordset Union

**Recordset Union** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Recordset Union
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Recordset Union** in two sentences using a real company example. |
| Medium | Locate **Recordset Union** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Recordset Union**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Recordset Union** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 16.8 Recordset Intersection

**Recordset Intersection** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Recordset Intersection
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Recordset Intersection** in two sentences using a real company example. |
| Medium | Locate **Recordset Intersection** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Recordset Intersection**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Recordset Intersection** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 16.9 Recordset Difference

**Recordset Difference** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Recordset Difference
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Recordset Difference** in two sentences using a real company example. |
| Medium | Locate **Recordset Difference** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Recordset Difference**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Recordset Difference** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 16.10 Batch Operations

**Batch Operations** is an essential mechanism in **Recordset Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Batch Operations
# In recordset_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Batch Operations** in two sentences using a real company example. |
| Medium | Locate **Batch Operations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Batch Operations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Batch Operations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-17"></a>
<a id="phase-17"></a>
# CHAPTER 17 - ORM Internals & Performance

**Track:** ORM & Database Operations

**WHAT YOU WILL BE ABLE TO DO:** Explain prefetching and caching, reason about transactions and flush, diagnose N+1 query patterns, and optimize a slow recordset loop with evidence — not guesswork.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 16 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 17.1 Prefetching

**Prefetching** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Prefetching
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Prefetching** in two sentences using a real company example. |
| Medium | Locate **Prefetching** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Prefetching**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Prefetching** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.2 ORM Cache

**ORM Cache** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ORM Cache
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ORM Cache** in two sentences using a real company example. |
| Medium | Locate **ORM Cache** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ORM Cache**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ORM Cache** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.3 Transactions

**Transactions** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Transactions
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Transactions** in two sentences using a real company example. |
| Medium | Locate **Transactions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Transactions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Transactions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.4 Flush

**Flush** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Flush
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Flush** in two sentences using a real company example. |
| Medium | Locate **Flush** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Flush**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Flush** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.5 Cache Invalidation

**Cache Invalidation** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cache Invalidation
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cache Invalidation** in two sentences using a real company example. |
| Medium | Locate **Cache Invalidation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cache Invalidation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cache Invalidation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.6 N+1 Queries

**N+1 Queries** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating N+1 Queries
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **N+1 Queries** in two sentences using a real company example. |
| Medium | Locate **N+1 Queries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **N+1 Queries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **N+1 Queries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.7 Batch Creation

**Batch Creation** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Batch Creation
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Batch Creation** in two sentences using a real company example. |
| Medium | Locate **Batch Creation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Batch Creation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Batch Creation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.8 Aggregation

**Aggregation** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Aggregation
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Aggregation** in two sentences using a real company example. |
| Medium | Locate **Aggregation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Aggregation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Aggregation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.9 read_group()

**read_group()** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating read_group()
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **read_group()** in two sentences using a real company example. |
| Medium | Locate **read_group()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **read_group()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **read_group()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.10 Raw SQL

**Raw SQL** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Raw SQL
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Raw SQL** in two sentences using a real company example. |
| Medium | Locate **Raw SQL** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Raw SQL**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Raw SQL** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.11 ORM vs SQL

**ORM vs SQL** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ORM vs SQL
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ORM vs SQL** in two sentences using a real company example. |
| Medium | Locate **ORM vs SQL** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ORM vs SQL**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ORM vs SQL** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.12 Security Implications of SQL

**Security Implications of SQL** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Security Implications of SQL
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Security Implications of SQL** in two sentences using a real company example. |
| Medium | Locate **Security Implications of SQL** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Security Implications of SQL**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Security Implications of SQL** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 17.13 LAB — Optimize ORM Code

**LAB — Optimize ORM Code** is an essential mechanism in **ORM Internals & Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating LAB — Optimize ORM Code
# In orm_internals_&_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **LAB — Optimize ORM Code** in two sentences using a real company example. |
| Medium | Locate **LAB — Optimize ORM Code** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **LAB — Optimize ORM Code**. |

**WHAT THIS UNLOCKS NEXT:**
Once **LAB — Optimize ORM Code** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT V — Bulk Data Processor & Reporting Engine

This is the capstone project for Story V. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story V.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY V:**
- You have mastered all lessons and concepts in Story V.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **BUSINESS RULES & WORKFLOWS**!

> **Story V Complete!** [Continue to Story VI: BUSINESS RULES & WORKFLOWS](#story-vi)


---
---

# STORY VI — BUSINESS RULES & WORKFLOWS

**Track:** Business Logic & Workflows

*Business methods, Python/SQL constraints, compute dependencies, and state machines.*

---
<a id="chapter-18"></a>
<a id="phase-18"></a>
# CHAPTER 18 - Business Methods

**Track:** Business Logic & Workflows

**WHAT YOU WILL BE ABLE TO DO:** Write model methods for business actions, override create/write with correct super() usage, and expose actions that transition records the way a librarian or sales manager expects.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 17 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 18.1 Model Methods

**Model Methods** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Model Methods
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Model Methods** in two sentences using a real company example. |
| Medium | Locate **Model Methods** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Model Methods**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Model Methods** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 18.2 Recordset Methods

**Recordset Methods** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Recordset Methods
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Recordset Methods** in two sentences using a real company example. |
| Medium | Locate **Recordset Methods** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Recordset Methods**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Recordset Methods** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 18.3 @api.model

**@api.model** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating @api.model
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **@api.model** in two sentences using a real company example. |
| Medium | Locate **@api.model** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **@api.model**. |

**WHAT THIS UNLOCKS NEXT:**
Once **@api.model** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 18.4 @api.model_create_multi

**@api.model_create_multi** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating @api.model_create_multi
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **@api.model_create_multi** in two sentences using a real company example. |
| Medium | Locate **@api.model_create_multi** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **@api.model_create_multi**. |

**WHAT THIS UNLOCKS NEXT:**
Once **@api.model_create_multi** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 18.5 create() Override

**create() Override** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating create() Override
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **create() Override** in two sentences using a real company example. |
| Medium | Locate **create() Override** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **create() Override**. |

**WHAT THIS UNLOCKS NEXT:**
Once **create() Override** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 18.6 write() Override

**write() Override** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating write() Override
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **write() Override** in two sentences using a real company example. |
| Medium | Locate **write() Override** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **write() Override**. |

**WHAT THIS UNLOCKS NEXT:**
Once **write() Override** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 18.7 unlink() Override

**unlink() Override** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating unlink() Override
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **unlink() Override** in two sentences using a real company example. |
| Medium | Locate **unlink() Override** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **unlink() Override**. |

**WHAT THIS UNLOCKS NEXT:**
Once **unlink() Override** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 18.8 super()

**super()** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating super()
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **super()** in two sentences using a real company example. |
| Medium | Locate **super()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **super()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **super()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 18.9 Return Values

**Return Values** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Return Values
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Return Values** in two sentences using a real company example. |
| Medium | Locate **Return Values** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Return Values**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Return Values** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 18.10 Business Actions

**Business Actions** is an essential mechanism in **Business Methods**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Business Actions
# In business_methods:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Business Actions** in two sentences using a real company example. |
| Medium | Locate **Business Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Business Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Business Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-19"></a>
<a id="phase-19"></a>
# CHAPTER 19 - Constraints & Validation

**Track:** Business Logic & Workflows

**WHAT YOU WILL BE ABLE TO DO:** Protect business invariants with @api.constrains and SQL constraints, raise ValidationError vs UserError appropriately, and lab-test rules that block illegal library or leave-request data.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 18 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 19.1 Python Constraints

**Python Constraints** is an essential mechanism in **Constraints & Validation**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Python Constraints
# In constraints_&_validation:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Python Constraints** in two sentences using a real company example. |
| Medium | Locate **Python Constraints** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Python Constraints**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Python Constraints** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 19.2 @api.constrains

**@api.constrains** is an essential mechanism in **Constraints & Validation**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating @api.constrains
# In constraints_&_validation:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **@api.constrains** in two sentences using a real company example. |
| Medium | Locate **@api.constrains** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **@api.constrains**. |

**WHAT THIS UNLOCKS NEXT:**
Once **@api.constrains** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 19.3 SQL Constraints

**SQL Constraints** is an essential mechanism in **Constraints & Validation**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating SQL Constraints
# In constraints_&_validation:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **SQL Constraints** in two sentences using a real company example. |
| Medium | Locate **SQL Constraints** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **SQL Constraints**. |

**WHAT THIS UNLOCKS NEXT:**
Once **SQL Constraints** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 19.4 ValidationError

**ValidationError** is an essential mechanism in **Constraints & Validation**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ValidationError
# In constraints_&_validation:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ValidationError** in two sentences using a real company example. |
| Medium | Locate **ValidationError** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ValidationError**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ValidationError** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 19.5 UserError

**UserError** is an essential mechanism in **Constraints & Validation**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating UserError
# In constraints_&_validation:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **UserError** in two sentences using a real company example. |
| Medium | Locate **UserError** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **UserError**. |

**WHAT THIS UNLOCKS NEXT:**
Once **UserError** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 19.6 AccessError

**AccessError** is an essential mechanism in **Constraints & Validation**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating AccessError
# In constraints_&_validation:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **AccessError** in two sentences using a real company example. |
| Medium | Locate **AccessError** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **AccessError**. |

**WHAT THIS UNLOCKS NEXT:**
Once **AccessError** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 19.7 LAB — Protect Business Rules

**LAB — Protect Business Rules** is an essential mechanism in **Constraints & Validation**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating LAB — Protect Business Rules
# In constraints_&_validation:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **LAB — Protect Business Rules** in two sentences using a real company example. |
| Medium | Locate **LAB — Protect Business Rules** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **LAB — Protect Business Rules**. |

**WHAT THIS UNLOCKS NEXT:**
Once **LAB — Protect Business Rules** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-20"></a>
<a id="phase-20"></a>
# CHAPTER 20 - Onchange & UI Logic

**Track:** Business Logic & Workflows

**WHAT YOU WILL BE ABLE TO DO:** Use @api.onchange for interactive form logic, set field defaults and context defaults, and design dynamic form behavior that prepares values before the user clicks Save.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 19 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 20.1 @api.onchange

**@api.onchange** is an essential mechanism in **Onchange & UI Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating @api.onchange
# In onchange_&_ui_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **@api.onchange** in two sentences using a real company example. |
| Medium | Locate **@api.onchange** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **@api.onchange**. |

**WHAT THIS UNLOCKS NEXT:**
Once **@api.onchange** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 20.2 Defaults

**Defaults** is an essential mechanism in **Onchange & UI Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Defaults
# In onchange_&_ui_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Defaults** in two sentences using a real company example. |
| Medium | Locate **Defaults** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Defaults**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Defaults** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 20.3 default_get()

**default_get()** is an essential mechanism in **Onchange & UI Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating default_get()
# In onchange_&_ui_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **default_get()** in two sentences using a real company example. |
| Medium | Locate **default_get()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **default_get()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **default_get()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 20.4 Context Defaults

**Context Defaults** is an essential mechanism in **Onchange & UI Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Context Defaults
# In onchange_&_ui_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Context Defaults** in two sentences using a real company example. |
| Medium | Locate **Context Defaults** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Context Defaults**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Context Defaults** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 20.5 Dynamic Forms

**Dynamic Forms** is an essential mechanism in **Onchange & UI Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Dynamic Forms
# In onchange_&_ui_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Dynamic Forms** in two sentences using a real company example. |
| Medium | Locate **Dynamic Forms** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Dynamic Forms**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Dynamic Forms** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 20.6 Onchange vs Compute

**Onchange vs Compute** is an essential mechanism in **Onchange & UI Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Onchange vs Compute
# In onchange_&_ui_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Onchange vs Compute** in two sentences using a real company example. |
| Medium | Locate **Onchange vs Compute** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Onchange vs Compute**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Onchange vs Compute** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-21"></a>
<a id="phase-21"></a>
# CHAPTER 21 - States & Workflows

**Track:** Business Logic & Workflows

**WHAT YOU WILL BE ABLE TO DO:** Model document states with Selection fields, implement safe transitions (draft → confirmed → approved / cancelled), block illegal moves, and deliver an approval workflow project for leave requests or purchases.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 20 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 21.1 State Fields

**State Fields** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating State Fields
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **State Fields** in two sentences using a real company example. |
| Medium | Locate **State Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **State Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **State Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 21.2 Draft

**Draft** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Draft
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Draft** in two sentences using a real company example. |
| Medium | Locate **Draft** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Draft**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Draft** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 21.3 Confirmed

**Confirmed** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Confirmed
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Confirmed** in two sentences using a real company example. |
| Medium | Locate **Confirmed** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Confirmed**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Confirmed** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 21.4 Approved

**Approved** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Approved
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Approved** in two sentences using a real company example. |
| Medium | Locate **Approved** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Approved**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Approved** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 21.5 Done

**Done** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Done
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Done** in two sentences using a real company example. |
| Medium | Locate **Done** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Done**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Done** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 21.6 Cancelled

**Cancelled** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cancelled
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cancelled** in two sentences using a real company example. |
| Medium | Locate **Cancelled** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cancelled**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cancelled** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 21.7 Legal State Transitions

**Legal State Transitions** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Legal State Transitions
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Legal State Transitions** in two sentences using a real company example. |
| Medium | Locate **Legal State Transitions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Legal State Transitions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Legal State Transitions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 21.8 Buttons

**Buttons** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Buttons
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Buttons** in two sentences using a real company example. |
| Medium | Locate **Buttons** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Buttons**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Buttons** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 21.9 Workflow Validation

**Workflow Validation** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Workflow Validation
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Workflow Validation** in two sentences using a real company example. |
| Medium | Locate **Workflow Validation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Workflow Validation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Workflow Validation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 21.10 PROJECT — Approval Workflow

**PROJECT — Approval Workflow** is an essential mechanism in **States & Workflows**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PROJECT — Approval Workflow
# In states_&_workflows:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PROJECT — Approval Workflow** in two sentences using a real company example. |
| Medium | Locate **PROJECT — Approval Workflow** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PROJECT — Approval Workflow**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PROJECT — Approval Workflow** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT VI — Real Estate Offer Lifecycle Engine

This is the capstone project for Story VI. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story VI.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY VI:**
- You have mastered all lessons and concepts in Story VI.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **BUILDING THE USER INTERFACE**!

> **Story VI Complete!** [Continue to Story VII: BUILDING THE USER INTERFACE](#story-vii)


---
---

# STORY VII — BUILDING THE USER INTERFACE

**Track:** User Interface & Views

*Form layouts, editable list views, search panels, and interactive Kanban boards.*

---
<a id="chapter-22"></a>
<a id="phase-22"></a>
# CHAPTER 22 - XML Foundations

**Track:** User Interface & Views

**WHAT YOU WILL BE ABLE TO DO:** Author Odoo data XML that creates stable ir.model.data external IDs, load in the right order through the manifest, and debug noupdate / missing-ref failures without guessing.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 21 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 22.1 XML Syntax

**XML Syntax** is an essential mechanism in **XML Foundations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating XML Syntax
# In xml_foundations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **XML Syntax** in two sentences using a real company example. |
| Medium | Locate **XML Syntax** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **XML Syntax**. |

**WHAT THIS UNLOCKS NEXT:**
Once **XML Syntax** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 22.2 <record>

**<record>** is an essential mechanism in **XML Foundations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating <record>
# In xml_foundations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **<record>** in two sentences using a real company example. |
| Medium | Locate **<record>** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **<record>**. |

**WHAT THIS UNLOCKS NEXT:**
Once **<record>** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 22.3 External IDs

**External IDs** is an essential mechanism in **XML Foundations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating External IDs
# In xml_foundations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **External IDs** in two sentences using a real company example. |
| Medium | Locate **External IDs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **External IDs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **External IDs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 22.4 ref()

**ref()** is an essential mechanism in **XML Foundations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ref()
# In xml_foundations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ref()** in two sentences using a real company example. |
| Medium | Locate **ref()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ref()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ref()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 22.5 eval

**eval** is an essential mechanism in **XML Foundations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating eval
# In xml_foundations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **eval** in two sentences using a real company example. |
| Medium | Locate **eval** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **eval**. |

**WHAT THIS UNLOCKS NEXT:**
Once **eval** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 22.6 Data Files

**Data Files** is an essential mechanism in **XML Foundations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Data Files
# In xml_foundations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Data Files** in two sentences using a real company example. |
| Medium | Locate **Data Files** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Data Files**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Data Files** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 22.7 XML Loading

**XML Loading** is an essential mechanism in **XML Foundations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating XML Loading
# In xml_foundations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **XML Loading** in two sentences using a real company example. |
| Medium | Locate **XML Loading** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **XML Loading**. |

**WHAT THIS UNLOCKS NEXT:**
Once **XML Loading** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-23"></a>
<a id="phase-23"></a>
# CHAPTER 23 - Form & List Views

**Track:** User Interface & Views

**WHAT YOU WILL BE ABLE TO DO:** Design Odoo 18 form and list architectures — sheet layout, groups, notebooks, headers/buttons, list columns — so a business user can create, read, update, and navigate records without shell access.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 22 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 23.1 Form Views

**Form Views** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Form Views
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Form Views** in two sentences using a real company example. |
| Medium | Locate **Form Views** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Form Views**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Form Views** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.2 List Views

**List Views** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating List Views
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **List Views** in two sentences using a real company example. |
| Medium | Locate **List Views** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **List Views**. |

**WHAT THIS UNLOCKS NEXT:**
Once **List Views** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.3 Field Display

**Field Display** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Field Display
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Field Display** in two sentences using a real company example. |
| Medium | Locate **Field Display** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Field Display**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Field Display** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.4 Buttons

**Buttons** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Buttons
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Buttons** in two sentences using a real company example. |
| Medium | Locate **Buttons** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Buttons**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Buttons** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.5 Groups

**Groups** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Groups
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Groups** in two sentences using a real company example. |
| Medium | Locate **Groups** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Groups**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Groups** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.6 Sheets

**Sheets** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Sheets
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Sheets** in two sentences using a real company example. |
| Medium | Locate **Sheets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Sheets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Sheets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.7 Notebook

**Notebook** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Notebook
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Notebook** in two sentences using a real company example. |
| Medium | Locate **Notebook** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Notebook**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Notebook** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.8 Pages

**Pages** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Pages
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Pages** in two sentences using a real company example. |
| Medium | Locate **Pages** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Pages**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Pages** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.9 Widgets

**Widgets** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Widgets
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Widgets** in two sentences using a real company example. |
| Medium | Locate **Widgets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Widgets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Widgets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.10 Decorations

**Decorations** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Decorations
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Decorations** in two sentences using a real company example. |
| Medium | Locate **Decorations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Decorations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Decorations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 23.11 MINI PROJECT — CRUD Interface

**MINI PROJECT — CRUD Interface** is an essential mechanism in **Form & List Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating MINI PROJECT — CRUD Interface
# In form_&_list_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **MINI PROJECT — CRUD Interface** in two sentences using a real company example. |
| Medium | Locate **MINI PROJECT — CRUD Interface** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **MINI PROJECT — CRUD Interface**. |

**WHAT THIS UNLOCKS NEXT:**
Once **MINI PROJECT — CRUD Interface** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-24"></a>
<a id="phase-24"></a>
# CHAPTER 24 - Search, Kanban & Analytical Views

**Track:** User Interface & Views

**WHAT YOU WILL BE ABLE TO DO:** Attach search, kanban, calendar, pivot, and graph views to the same model so one dataset serves operations, planning, and light analytics.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 23 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 24.1 Search Views

**Search Views** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Search Views
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Search Views** in two sentences using a real company example. |
| Medium | Locate **Search Views** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Search Views**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Search Views** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 24.2 Filters

**Filters** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Filters
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Filters** in two sentences using a real company example. |
| Medium | Locate **Filters** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Filters**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Filters** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 24.3 Group By

**Group By** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Group By
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Group By** in two sentences using a real company example. |
| Medium | Locate **Group By** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Group By**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Group By** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 24.4 Search Panels

**Search Panels** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Search Panels
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Search Panels** in two sentences using a real company example. |
| Medium | Locate **Search Panels** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Search Panels**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Search Panels** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 24.5 Kanban

**Kanban** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Kanban
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Kanban** in two sentences using a real company example. |
| Medium | Locate **Kanban** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Kanban**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Kanban** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 24.6 Calendar

**Calendar** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Calendar
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Calendar** in two sentences using a real company example. |
| Medium | Locate **Calendar** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Calendar**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Calendar** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 24.7 Pivot

**Pivot** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Pivot
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Pivot** in two sentences using a real company example. |
| Medium | Locate **Pivot** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Pivot**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Pivot** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 24.8 Graph

**Graph** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Graph
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Graph** in two sentences using a real company example. |
| Medium | Locate **Graph** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Graph**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Graph** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 24.9 Activity Views

**Activity Views** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Activity Views
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Activity Views** in two sentences using a real company example. |
| Medium | Locate **Activity Views** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Activity Views**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Activity Views** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 24.10 PRACTICE — Multiple Views of Same Data

**PRACTICE — Multiple Views of Same Data** is an essential mechanism in **Search, Kanban & Analytical Views**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PRACTICE — Multiple Views of Same Data
# In search,_kanban_&_analytical_views:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PRACTICE — Multiple Views of Same Data** in two sentences using a real company example. |
| Medium | Locate **PRACTICE — Multiple Views of Same Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PRACTICE — Multiple Views of Same Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PRACTICE — Multiple Views of Same Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-25"></a>
<a id="phase-25"></a>
# CHAPTER 25 - Actions & Menus

**Track:** User Interface & Views

**WHAT YOU WILL BE ABLE TO DO:** Connect models to window actions and menu trees with domains, contexts, and view modes so navigation opens the right records in the right views.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 24 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 25.1 Actions

**Actions** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Actions
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Actions** in two sentences using a real company example. |
| Medium | Locate **Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.2 Action Bindings

**Action Bindings** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Action Bindings
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Action Bindings** in two sentences using a real company example. |
| Medium | Locate **Action Bindings** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Action Bindings**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Action Bindings** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.3 Window Actions

**Window Actions** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Window Actions
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Window Actions** in two sentences using a real company example. |
| Medium | Locate **Window Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Window Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Window Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.4 ir.actions.act_window

**ir.actions.act_window** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ir.actions.act_window
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ir.actions.act_window** in two sentences using a real company example. |
| Medium | Locate **ir.actions.act_window** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ir.actions.act_window**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ir.actions.act_window** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.5 URL Actions

**URL Actions** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating URL Actions
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **URL Actions** in two sentences using a real company example. |
| Medium | Locate **URL Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **URL Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **URL Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.6 Server Actions

**Server Actions** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Server Actions
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Server Actions** in two sentences using a real company example. |
| Medium | Locate **Server Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Server Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Server Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.7 Report Actions

**Report Actions** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Report Actions
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Report Actions** in two sentences using a real company example. |
| Medium | Locate **Report Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Report Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Report Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.8 Client Actions

**Client Actions** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Client Actions
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Client Actions** in two sentences using a real company example. |
| Medium | Locate **Client Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Client Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Client Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.9 Scheduled Actions

**Scheduled Actions** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Scheduled Actions
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Scheduled Actions** in two sentences using a real company example. |
| Medium | Locate **Scheduled Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Scheduled Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Scheduled Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.10 Menus

**Menus** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Menus
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Menus** in two sentences using a real company example. |
| Medium | Locate **Menus** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Menus**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Menus** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.11 Context

**Context** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Context
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Context** in two sentences using a real company example. |
| Medium | Locate **Context** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Context**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Context** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.12 Domains

**Domains** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Domains
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Domains** in two sentences using a real company example. |
| Medium | Locate **Domains** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Domains**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Domains** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 25.13 Navigation

**Navigation** is an essential mechanism in **Actions & Menus**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Navigation
# In actions_&_menus:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Navigation** in two sentences using a real company example. |
| Medium | Locate **Navigation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Navigation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Navigation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-26"></a>
<a id="phase-26"></a>
# CHAPTER 26 - View Inheritance

**Track:** User Interface & Views

**WHAT YOU WILL BE ABLE TO DO:** Extend existing ir.ui.view arches with inherit_id and XPath position semantics so upgrades do not require forked copies of official forms.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 25 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 26.1 inherit_id

**inherit_id** is an essential mechanism in **View Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating inherit_id
# In view_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **inherit_id** in two sentences using a real company example. |
| Medium | Locate **inherit_id** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **inherit_id**. |

**WHAT THIS UNLOCKS NEXT:**
Once **inherit_id** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 26.2 XPath

**XPath** is an essential mechanism in **View Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating XPath
# In view_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **XPath** in two sentences using a real company example. |
| Medium | Locate **XPath** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **XPath**. |

**WHAT THIS UNLOCKS NEXT:**
Once **XPath** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 26.3 position

**position** is an essential mechanism in **View Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating position
# In view_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **position** in two sentences using a real company example. |
| Medium | Locate **position** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **position**. |

**WHAT THIS UNLOCKS NEXT:**
Once **position** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 26.4 Attributes

**Attributes** is an essential mechanism in **View Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Attributes
# In view_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Attributes** in two sentences using a real company example. |
| Medium | Locate **Attributes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Attributes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Attributes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 26.5 Adding Elements

**Adding Elements** is an essential mechanism in **View Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Adding Elements
# In view_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Adding Elements** in two sentences using a real company example. |
| Medium | Locate **Adding Elements** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Adding Elements**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Adding Elements** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 26.6 Replacing Elements

**Replacing Elements** is an essential mechanism in **View Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Replacing Elements
# In view_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Replacing Elements** in two sentences using a real company example. |
| Medium | Locate **Replacing Elements** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Replacing Elements**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Replacing Elements** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 26.7 Moving Elements

**Moving Elements** is an essential mechanism in **View Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Moving Elements
# In view_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Moving Elements** in two sentences using a real company example. |
| Medium | Locate **Moving Elements** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Moving Elements**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Moving Elements** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 26.8 View Resolution

**View Resolution** is an essential mechanism in **View Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating View Resolution
# In view_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **View Resolution** in two sentences using a real company example. |
| Medium | Locate **View Resolution** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **View Resolution**. |

**WHAT THIS UNLOCKS NEXT:**
Once **View Resolution** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 26.9 Debugging Inherited Views

**Debugging Inherited Views** is an essential mechanism in **View Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Debugging Inherited Views
# In view_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Debugging Inherited Views** in two sentences using a real company example. |
| Medium | Locate **Debugging Inherited Views** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Debugging Inherited Views**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Debugging Inherited Views** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT VII — Real Estate UI Suite

This is the capstone project for Story VII. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story VII.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY VII:**
- You have mastered all lessons and concepts in Story VII.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **SECURITY & MULTI-COMPANY**!

> **Story VII Complete!** [Continue to Story VIII: SECURITY & MULTI-COMPANY](#story-viii)


---
---

# STORY VIII — SECURITY & MULTI-COMPANY

**Track:** Security & Multi-Company

*Access rights (CSV), group hierarchies, row-level record rules, and company isolation.*

---
<a id="chapter-27"></a>
<a id="phase-27"></a>
# CHAPTER 27 - Users & Groups

**Track:** Security & Multi-Company

**WHAT YOU WILL BE ABLE TO DO:** Model responsibility with res.groups hierarchies (implied_ids), assign users correctly, and separate UI visibility groups from privilege design.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 26 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 27.1 Users

**Users** is an essential mechanism in **Users & Groups**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Users
# In users_&_groups:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Users** in two sentences using a real company example. |
| Medium | Locate **Users** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Users**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Users** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 27.2 Groups

**Groups** is an essential mechanism in **Users & Groups**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Groups
# In users_&_groups:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Groups** in two sentences using a real company example. |
| Medium | Locate **Groups** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Groups**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Groups** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 27.3 Group Membership

**Group Membership** is an essential mechanism in **Users & Groups**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Group Membership
# In users_&_groups:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Group Membership** in two sentences using a real company example. |
| Medium | Locate **Group Membership** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Group Membership**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Group Membership** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 27.4 Implied Groups

**Implied Groups** is an essential mechanism in **Users & Groups**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Implied Groups
# In users_&_groups:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Implied Groups** in two sentences using a real company example. |
| Medium | Locate **Implied Groups** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Implied Groups**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Implied Groups** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 27.5 Application Categories

**Application Categories** is an essential mechanism in **Users & Groups**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Application Categories
# In users_&_groups:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Application Categories** in two sentences using a real company example. |
| Medium | Locate **Application Categories** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Application Categories**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Application Categories** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 27.6 Permission Design

**Permission Design** is an essential mechanism in **Users & Groups**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Permission Design
# In users_&_groups:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Permission Design** in two sentences using a real company example. |
| Medium | Locate **Permission Design** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Permission Design**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Permission Design** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-28"></a>
<a id="phase-28"></a>
# CHAPTER 28 - Access Control Lists

**Track:** Security & Multi-Company

**WHAT YOU WILL BE ABLE TO DO:** Author ir.model.access CSV matrices that grant least-privilege CRUD per group, and diagnose AccessError as missing model rights (not “Odoo is broken”).

**WHAT YOU SHOULD KNOW FIRST:** Chapter 27 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 28.1 ir.model.access

**ir.model.access** is an essential mechanism in **Access Control Lists**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ir.model.access
# In access_control_lists:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ir.model.access** in two sentences using a real company example. |
| Medium | Locate **ir.model.access** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ir.model.access**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ir.model.access** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 28.2 ir.model.access.csv

**ir.model.access.csv** is an essential mechanism in **Access Control Lists**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ir.model.access.csv
# In access_control_lists:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ir.model.access.csv** in two sentences using a real company example. |
| Medium | Locate **ir.model.access.csv** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ir.model.access.csv**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ir.model.access.csv** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 28.3 Read

**Read** is an essential mechanism in **Access Control Lists**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Read
# In access_control_lists:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Read** in two sentences using a real company example. |
| Medium | Locate **Read** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Read**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Read** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 28.4 Write

**Write** is an essential mechanism in **Access Control Lists**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Write
# In access_control_lists:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Write** in two sentences using a real company example. |
| Medium | Locate **Write** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Write**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Write** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 28.5 Create

**Create** is an essential mechanism in **Access Control Lists**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Create
# In access_control_lists:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Create** in two sentences using a real company example. |
| Medium | Locate **Create** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Create**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Create** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 28.6 Unlink

**Unlink** is an essential mechanism in **Access Control Lists**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Unlink
# In access_control_lists:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Unlink** in two sentences using a real company example. |
| Medium | Locate **Unlink** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Unlink**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Unlink** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 28.7 Group ACLs

**Group ACLs** is an essential mechanism in **Access Control Lists**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Group ACLs
# In access_control_lists:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Group ACLs** in two sentences using a real company example. |
| Medium | Locate **Group ACLs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Group ACLs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Group ACLs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 28.8 Additive Permissions

**Additive Permissions** is an essential mechanism in **Access Control Lists**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Additive Permissions
# In access_control_lists:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Additive Permissions** in two sentences using a real company example. |
| Medium | Locate **Additive Permissions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Additive Permissions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Additive Permissions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-29"></a>
<a id="phase-29"></a>
# CHAPTER 29 - Record Rules

**Track:** Security & Multi-Company

**WHAT YOU WILL BE ABLE TO DO:** Write ir.rule domains that enforce row-level security, explain global AND vs group OR combination, and debug “empty list for user / full list for admin” failures.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 28 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 29.1 ir.rule

**ir.rule** is an essential mechanism in **Record Rules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ir.rule
# In record_rules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ir.rule** in two sentences using a real company example. |
| Medium | Locate **ir.rule** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ir.rule**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ir.rule** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 29.2 domain_force

**domain_force** is an essential mechanism in **Record Rules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating domain_force
# In record_rules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **domain_force** in two sentences using a real company example. |
| Medium | Locate **domain_force** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **domain_force**. |

**WHAT THIS UNLOCKS NEXT:**
Once **domain_force** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 29.3 Global Rules

**Global Rules** is an essential mechanism in **Record Rules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Global Rules
# In record_rules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Global Rules** in two sentences using a real company example. |
| Medium | Locate **Global Rules** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Global Rules**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Global Rules** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 29.4 Group Rules

**Group Rules** is an essential mechanism in **Record Rules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Group Rules
# In record_rules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Group Rules** in two sentences using a real company example. |
| Medium | Locate **Group Rules** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Group Rules**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Group Rules** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 29.5 Rule Composition

**Rule Composition** is an essential mechanism in **Record Rules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Rule Composition
# In record_rules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Rule Composition** in two sentences using a real company example. |
| Medium | Locate **Rule Composition** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Rule Composition**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Rule Composition** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 29.6 Row-Level Security

**Row-Level Security** is an essential mechanism in **Record Rules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Row-Level Security
# In record_rules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Row-Level Security** in two sentences using a real company example. |
| Medium | Locate **Row-Level Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Row-Level Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Row-Level Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-30"></a>
<a id="phase-30"></a>
# CHAPTER 30 - Security Context & Safe Privilege

**Track:** Security & Multi-Company

**WHAT YOU WILL BE ABLE TO DO:** Use sudo() and with_user() deliberately, keep security context narrow, and refuse patterns that launder privileges across request boundaries.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 29 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 30.1 sudo()

**sudo()** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating sudo()
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **sudo()** in two sentences using a real company example. |
| Medium | Locate **sudo()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **sudo()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **sudo()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 30.2 with_user()

**with_user()** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating with_user()
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **with_user()** in two sentences using a real company example. |
| Medium | Locate **with_user()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **with_user()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **with_user()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 30.3 Access Checks

**Access Checks** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Access Checks
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Access Checks** in two sentences using a real company example. |
| Medium | Locate **Access Checks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Access Checks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Access Checks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 30.4 check_access()

**check_access()** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating check_access()
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **check_access()** in two sentences using a real company example. |
| Medium | Locate **check_access()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **check_access()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **check_access()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 30.5 Field Security

**Field Security** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Field Security
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Field Security** in two sentences using a real company example. |
| Medium | Locate **Field Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Field Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Field Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 30.6 View / Menu Groups

**View / Menu Groups** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating View / Menu Groups
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **View / Menu Groups** in two sentences using a real company example. |
| Medium | Locate **View / Menu Groups** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **View / Menu Groups**. |

**WHAT THIS UNLOCKS NEXT:**
Once **View / Menu Groups** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 30.7 Public Method Security

**Public Method Security** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Public Method Security
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Public Method Security** in two sentences using a real company example. |
| Medium | Locate **Public Method Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Public Method Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Public Method Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 30.8 Unsafe Raw SQL

**Unsafe Raw SQL** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Unsafe Raw SQL
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Unsafe Raw SQL** in two sentences using a real company example. |
| Medium | Locate **Unsafe Raw SQL** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Unsafe Raw SQL**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Unsafe Raw SQL** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 30.9 Security Bypass Risks

**Security Bypass Risks** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Security Bypass Risks
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Security Bypass Risks** in two sentences using a real company example. |
| Medium | Locate **Security Bypass Risks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Security Bypass Risks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Security Bypass Risks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 30.10 Least Privilege

**Least Privilege** is an essential mechanism in **Security Context & Safe Privilege**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Least Privilege
# In security_context_&_safe_privilege:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Least Privilege** in two sentences using a real company example. |
| Medium | Locate **Least Privilege** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Least Privilege**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Least Privilege** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-31"></a>
<a id="phase-31"></a>
# CHAPTER 31 - Multi-Company Development

**Track:** Security & Multi-Company

**WHAT YOU WILL BE ABLE TO DO:** Add company_id / company_ids correctly, apply company record-rule patterns, understand company-dependent fields, and prevent cross-company leakage.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 30 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 31.1 res.company

**res.company** is an essential mechanism in **Multi-Company Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating res.company
# In multi-company_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **res.company** in two sentences using a real company example. |
| Medium | Locate **res.company** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **res.company**. |

**WHAT THIS UNLOCKS NEXT:**
Once **res.company** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 31.2 company_id

**company_id** is an essential mechanism in **Multi-Company Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating company_id
# In multi-company_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **company_id** in two sentences using a real company example. |
| Medium | Locate **company_id** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **company_id**. |

**WHAT THIS UNLOCKS NEXT:**
Once **company_id** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 31.3 company_ids

**company_ids** is an essential mechanism in **Multi-Company Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating company_ids
# In multi-company_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **company_ids** in two sentences using a real company example. |
| Medium | Locate **company_ids** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **company_ids**. |

**WHAT THIS UNLOCKS NEXT:**
Once **company_ids** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 31.4 env.company

**env.company** is an essential mechanism in **Multi-Company Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating env.company
# In multi-company_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **env.company** in two sentences using a real company example. |
| Medium | Locate **env.company** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **env.company**. |

**WHAT THIS UNLOCKS NEXT:**
Once **env.company** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 31.5 with_company()

**with_company()** is an essential mechanism in **Multi-Company Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating with_company()
# In multi-company_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **with_company()** in two sentences using a real company example. |
| Medium | Locate **with_company()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **with_company()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **with_company()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 31.6 Company-Dependent Fields

**Company-Dependent Fields** is an essential mechanism in **Multi-Company Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Company-Dependent Fields
# In multi-company_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Company-Dependent Fields** in two sentences using a real company example. |
| Medium | Locate **Company-Dependent Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Company-Dependent Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Company-Dependent Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 31.7 _check_company

**_check_company** is an essential mechanism in **Multi-Company Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating _check_company
# In multi-company_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **_check_company** in two sentences using a real company example. |
| Medium | Locate **_check_company** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **_check_company**. |

**WHAT THIS UNLOCKS NEXT:**
Once **_check_company** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 31.8 Multi-Company Domains

**Multi-Company Domains** is an essential mechanism in **Multi-Company Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Multi-Company Domains
# In multi-company_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Multi-Company Domains** in two sentences using a real company example. |
| Medium | Locate **Multi-Company Domains** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Multi-Company Domains**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Multi-Company Domains** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 31.9 Cross-Company Security

**Cross-Company Security** is an essential mechanism in **Multi-Company Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cross-Company Security
# In multi-company_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cross-Company Security** in two sentences using a real company example. |
| Medium | Locate **Cross-Company Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cross-Company Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cross-Company Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT VIII — Enterprise Multi-Company Security Matrix

This is the capstone project for Story VIII. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story VIII.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY VIII:**
- You have mastered all lessons and concepts in Story VIII.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **EXTENDING EXISTING ODOO**!

> **Story VIII Complete!** [Continue to Story IX: EXTENDING EXISTING ODOO](#story-ix)


---
---

# STORY IX — EXTENDING EXISTING ODOO

**Track:** Model & View Inheritance

*In-place model inheritance, XPath view patches, delegation, and mail.thread mixins.*

---
<a id="chapter-32"></a>
<a id="phase-32"></a>
# CHAPTER 32 - Model Inheritance

**Track:** Model & View Inheritance

**WHAT YOU WILL BE ABLE TO DO:** Extend existing models with _inherit, choose classical vs extension patterns, and override methods safely with super() under Odoo’s multi-module MRO.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 31 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 32.1 Extension Inheritance

**Extension Inheritance** is an essential mechanism in **Model Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Extension Inheritance
# In model_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Extension Inheritance** in two sentences using a real company example. |
| Medium | Locate **Extension Inheritance** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Extension Inheritance**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Extension Inheritance** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 32.2 _inherit

**_inherit** is an essential mechanism in **Model Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating _inherit
# In model_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **_inherit** in two sentences using a real company example. |
| Medium | Locate **_inherit** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **_inherit**. |

**WHAT THIS UNLOCKS NEXT:**
Once **_inherit** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 32.3 Classical Inheritance

**Classical Inheritance** is an essential mechanism in **Model Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Classical Inheritance
# In model_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Classical Inheritance** in two sentences using a real company example. |
| Medium | Locate **Classical Inheritance** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Classical Inheritance**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Classical Inheritance** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 32.4 Method Overriding

**Method Overriding** is an essential mechanism in **Model Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Method Overriding
# In model_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Method Overriding** in two sentences using a real company example. |
| Medium | Locate **Method Overriding** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Method Overriding**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Method Overriding** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 32.5 Field Extension

**Field Extension** is an essential mechanism in **Model Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Field Extension
# In model_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Field Extension** in two sentences using a real company example. |
| Medium | Locate **Field Extension** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Field Extension**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Field Extension** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 32.6 super()

**super()** is an essential mechanism in **Model Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating super()
# In model_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **super()** in two sentences using a real company example. |
| Medium | Locate **super()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **super()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **super()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 32.7 Multiple Inheritance

**Multiple Inheritance** is an essential mechanism in **Model Inheritance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Multiple Inheritance
# In model_inheritance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Multiple Inheritance** in two sentences using a real company example. |
| Medium | Locate **Multiple Inheritance** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Multiple Inheritance**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Multiple Inheritance** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-33"></a>
<a id="phase-33"></a>
# CHAPTER 33 - Delegation & Mixins

**Track:** Model & View Inheritance

**WHAT YOU WILL BE ABLE TO DO:** Compose models with _inherits delegation, create parent rows correctly, and choose _inherit vs _inherits with a clear criterion.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 32 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 33.1 _inherits

**_inherits** is an essential mechanism in **Delegation & Mixins**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating _inherits
# In delegation_&_mixins:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **_inherits** in two sentences using a real company example. |
| Medium | Locate **_inherits** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **_inherits**. |

**WHAT THIS UNLOCKS NEXT:**
Once **_inherits** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 33.2 Delegated Fields

**Delegated Fields** is an essential mechanism in **Delegation & Mixins**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Delegated Fields
# In delegation_&_mixins:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Delegated Fields** in two sentences using a real company example. |
| Medium | Locate **Delegated Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Delegated Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Delegated Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 33.3 Delegation vs Extension

**Delegation vs Extension** is an essential mechanism in **Delegation & Mixins**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Delegation vs Extension
# In delegation_&_mixins:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Delegation vs Extension** in two sentences using a real company example. |
| Medium | Locate **Delegation vs Extension** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Delegation vs Extension**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Delegation vs Extension** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 33.4 AbstractModel

**AbstractModel** is an essential mechanism in **Delegation & Mixins**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating AbstractModel
# In delegation_&_mixins:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **AbstractModel** in two sentences using a real company example. |
| Medium | Locate **AbstractModel** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **AbstractModel**. |

**WHAT THIS UNLOCKS NEXT:**
Once **AbstractModel** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 33.5 Mixins

**Mixins** is an essential mechanism in **Delegation & Mixins**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Mixins
# In delegation_&_mixins:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Mixins** in two sentences using a real company example. |
| Medium | Locate **Mixins** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Mixins**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Mixins** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 33.6 Reusable Model Behavior

**Reusable Model Behavior** is an essential mechanism in **Delegation & Mixins**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reusable Model Behavior
# In delegation_&_mixins:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reusable Model Behavior** in two sentences using a real company example. |
| Medium | Locate **Reusable Model Behavior** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reusable Model Behavior**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reusable Model Behavior** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 33.7 Composition

**Composition** is an essential mechanism in **Delegation & Mixins**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Composition
# In delegation_&_mixins:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Composition** in two sentences using a real company example. |
| Medium | Locate **Composition** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Composition**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Composition** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-34"></a>
<a id="phase-34"></a>
# CHAPTER 34 - View Inheritance in Real Modules

**Track:** Model & View Inheritance

**WHAT YOU WILL BE ABLE TO DO:** Patch dense official form/list/search arches with reliable XPath, coordinate primary/secondary inherits, and survive upstream structure changes safely.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 33 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 34.1 Finding Parent Views

**Finding Parent Views** is an essential mechanism in **View Inheritance in Real Modules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Finding Parent Views
# In view_inheritance_in_real_modules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Finding Parent Views** in two sentences using a real company example. |
| Medium | Locate **Finding Parent Views** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Finding Parent Views**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Finding Parent Views** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 34.2 External IDs

**External IDs** is an essential mechanism in **View Inheritance in Real Modules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating External IDs
# In view_inheritance_in_real_modules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **External IDs** in two sentences using a real company example. |
| Medium | Locate **External IDs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **External IDs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **External IDs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 34.3 XPath Targeting

**XPath Targeting** is an essential mechanism in **View Inheritance in Real Modules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating XPath Targeting
# In view_inheritance_in_real_modules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **XPath Targeting** in two sentences using a real company example. |
| Medium | Locate **XPath Targeting** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **XPath Targeting**. |

**WHAT THIS UNLOCKS NEXT:**
Once **XPath Targeting** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 34.4 Adding Fields

**Adding Fields** is an essential mechanism in **View Inheritance in Real Modules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Adding Fields
# In view_inheritance_in_real_modules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Adding Fields** in two sentences using a real company example. |
| Medium | Locate **Adding Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Adding Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Adding Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 34.5 Modifying Attributes

**Modifying Attributes** is an essential mechanism in **View Inheritance in Real Modules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Modifying Attributes
# In view_inheritance_in_real_modules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Modifying Attributes** in two sentences using a real company example. |
| Medium | Locate **Modifying Attributes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Modifying Attributes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Modifying Attributes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 34.6 Replacing Elements

**Replacing Elements** is an essential mechanism in **View Inheritance in Real Modules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Replacing Elements
# In view_inheritance_in_real_modules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Replacing Elements** in two sentences using a real company example. |
| Medium | Locate **Replacing Elements** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Replacing Elements**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Replacing Elements** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 34.7 Debugging Inheritance Conflicts

**Debugging Inheritance Conflicts** is an essential mechanism in **View Inheritance in Real Modules**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Debugging Inheritance Conflicts
# In view_inheritance_in_real_modules:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Debugging Inheritance Conflicts** in two sentences using a real company example. |
| Medium | Locate **Debugging Inheritance Conflicts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Debugging Inheritance Conflicts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Debugging Inheritance Conflicts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-35"></a>
<a id="phase-35"></a>
# CHAPTER 35 - Extending Official Applications

**Track:** Model & View Inheritance

**WHAT YOU WILL BE ABLE TO DO:** Customize sale.order, purchase, and stock workflows with fields, super() hooks, view inherits, and security that respects official flows.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 34 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 35.1 res.partner

**res.partner** is an essential mechanism in **Extending Official Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating res.partner
# In extending_official_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **res.partner** in two sentences using a real company example. |
| Medium | Locate **res.partner** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **res.partner**. |

**WHAT THIS UNLOCKS NEXT:**
Once **res.partner** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 35.2 sale.order

**sale.order** is an essential mechanism in **Extending Official Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating sale.order
# In extending_official_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **sale.order** in two sentences using a real company example. |
| Medium | Locate **sale.order** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **sale.order**. |

**WHAT THIS UNLOCKS NEXT:**
Once **sale.order** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 35.3 purchase.order

**purchase.order** is an essential mechanism in **Extending Official Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating purchase.order
# In extending_official_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **purchase.order** in two sentences using a real company example. |
| Medium | Locate **purchase.order** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **purchase.order**. |

**WHAT THIS UNLOCKS NEXT:**
Once **purchase.order** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 35.4 stock.picking

**stock.picking** is an essential mechanism in **Extending Official Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating stock.picking
# In extending_official_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **stock.picking** in two sentences using a real company example. |
| Medium | Locate **stock.picking** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **stock.picking**. |

**WHAT THIS UNLOCKS NEXT:**
Once **stock.picking** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 35.5 account.move

**account.move** is an essential mechanism in **Extending Official Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating account.move
# In extending_official_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **account.move** in two sentences using a real company example. |
| Medium | Locate **account.move** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **account.move**. |

**WHAT THIS UNLOCKS NEXT:**
Once **account.move** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 35.6 Existing Workflows

**Existing Workflows** is an essential mechanism in **Extending Official Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Existing Workflows
# In extending_official_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Existing Workflows** in two sentences using a real company example. |
| Medium | Locate **Existing Workflows** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Existing Workflows**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Existing Workflows** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 35.7 Extension Points

**Extension Points** is an essential mechanism in **Extending Official Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Extension Points
# In extending_official_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Extension Points** in two sentences using a real company example. |
| Medium | Locate **Extension Points** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Extension Points**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Extension Points** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 35.8 Upgrade-Safe Customization

**Upgrade-Safe Customization** is an essential mechanism in **Extending Official Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Upgrade-Safe Customization
# In extending_official_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Upgrade-Safe Customization** in two sentences using a real company example. |
| Medium | Locate **Upgrade-Safe Customization** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Upgrade-Safe Customization**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Upgrade-Safe Customization** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT IX — CRM & Property Management Bridge Addon

This is the capstone project for Story IX. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story IX.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY IX:**
- You have mastered all lessons and concepts in Story IX.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **ADVANCED BUSINESS FEATURES**!

> **Story IX Complete!** [Continue to Story X: ADVANCED BUSINESS FEATURES](#story-x)


---
---

# STORY X — ADVANCED BUSINESS FEATURES

**Track:** Advanced Backend Features

*TransientModel wizards, automated sequences, scheduled crons, and chatter tracking.*

---
<a id="chapter-36"></a>
<a id="phase-36"></a>
# CHAPTER 36 - Wizards & TransientModel

**Track:** Advanced Backend Features

**WHAT YOU WILL BE ABLE TO DO:** Build multi-step dialogs with models.TransientModel, collect input from list/form selections via active_ids, apply business changes once, and close the dialog without polluting permanent tables.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 35 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 36.1 TransientModel

**TransientModel** is an essential mechanism in **Wizards & TransientModel**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating TransientModel
# In wizards_&_transientmodel:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **TransientModel** in two sentences using a real company example. |
| Medium | Locate **TransientModel** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **TransientModel**. |

**WHAT THIS UNLOCKS NEXT:**
Once **TransientModel** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 36.2 Wizard Fields

**Wizard Fields** is an essential mechanism in **Wizards & TransientModel**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Wizard Fields
# In wizards_&_transientmodel:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Wizard Fields** in two sentences using a real company example. |
| Medium | Locate **Wizard Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Wizard Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Wizard Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 36.3 Wizard Views

**Wizard Views** is an essential mechanism in **Wizards & TransientModel**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Wizard Views
# In wizards_&_transientmodel:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Wizard Views** in two sentences using a real company example. |
| Medium | Locate **Wizard Views** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Wizard Views**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Wizard Views** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 36.4 target="new"

**target="new"** is an essential mechanism in **Wizards & TransientModel**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating target="new"
# In wizards_&_transientmodel:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **target="new"** in two sentences using a real company example. |
| Medium | Locate **target="new"** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **target="new"**. |

**WHAT THIS UNLOCKS NEXT:**
Once **target="new"** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 36.5 active_id

**active_id** is an essential mechanism in **Wizards & TransientModel**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating active_id
# In wizards_&_transientmodel:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **active_id** in two sentences using a real company example. |
| Medium | Locate **active_id** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **active_id**. |

**WHAT THIS UNLOCKS NEXT:**
Once **active_id** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 36.6 active_ids

**active_ids** is an essential mechanism in **Wizards & TransientModel**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating active_ids
# In wizards_&_transientmodel:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **active_ids** in two sentences using a real company example. |
| Medium | Locate **active_ids** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **active_ids**. |

**WHAT THIS UNLOCKS NEXT:**
Once **active_ids** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 36.7 Context

**Context** is an essential mechanism in **Wizards & TransientModel**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Context
# In wizards_&_transientmodel:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Context** in two sentences using a real company example. |
| Medium | Locate **Context** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Context**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Context** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 36.8 Multi-Step Wizards

**Multi-Step Wizards** is an essential mechanism in **Wizards & TransientModel**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Multi-Step Wizards
# In wizards_&_transientmodel:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Multi-Step Wizards** in two sentences using a real company example. |
| Medium | Locate **Multi-Step Wizards** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Multi-Step Wizards**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Multi-Step Wizards** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 36.9 MINI PROJECT — Bulk Processing Wizard

**MINI PROJECT — Bulk Processing Wizard** is an essential mechanism in **Wizards & TransientModel**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating MINI PROJECT — Bulk Processing Wizard
# In wizards_&_transientmodel:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **MINI PROJECT — Bulk Processing Wizard** in two sentences using a real company example. |
| Medium | Locate **MINI PROJECT — Bulk Processing Wizard** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **MINI PROJECT — Bulk Processing Wizard**. |

**WHAT THIS UNLOCKS NEXT:**
Once **MINI PROJECT — Bulk Processing Wizard** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-37"></a>
<a id="phase-37"></a>
# CHAPTER 37 - Sequences

**Track:** Advanced Backend Features

**WHAT YOU WILL BE ABLE TO DO:** Configure ir.sequence for document names, call next_by_code / next_by_id safely, and reason about gaps, company-specific sequences, and concurrency.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 36 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 37.1 ir.sequence

**ir.sequence** is an essential mechanism in **Sequences**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ir.sequence
# In sequences:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ir.sequence** in two sentences using a real company example. |
| Medium | Locate **ir.sequence** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ir.sequence**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ir.sequence** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 37.2 next_by_code()

**next_by_code()** is an essential mechanism in **Sequences**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating next_by_code()
# In sequences:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **next_by_code()** in two sentences using a real company example. |
| Medium | Locate **next_by_code()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **next_by_code()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **next_by_code()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 37.3 Prefix

**Prefix** is an essential mechanism in **Sequences**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Prefix
# In sequences:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Prefix** in two sentences using a real company example. |
| Medium | Locate **Prefix** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Prefix**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Prefix** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 37.4 Suffix

**Suffix** is an essential mechanism in **Sequences**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Suffix
# In sequences:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Suffix** in two sentences using a real company example. |
| Medium | Locate **Suffix** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Suffix**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Suffix** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 37.5 Padding

**Padding** is an essential mechanism in **Sequences**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Padding
# In sequences:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Padding** in two sentences using a real company example. |
| Medium | Locate **Padding** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Padding**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Padding** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 37.6 Date-Based Sequences

**Date-Based Sequences** is an essential mechanism in **Sequences**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Date-Based Sequences
# In sequences:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Date-Based Sequences** in two sentences using a real company example. |
| Medium | Locate **Date-Based Sequences** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Date-Based Sequences**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Date-Based Sequences** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 37.7 Business References

**Business References** is an essential mechanism in **Sequences**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Business References
# In sequences:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Business References** in two sentences using a real company example. |
| Medium | Locate **Business References** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Business References**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Business References** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-38"></a>
<a id="phase-38"></a>
# CHAPTER 38 - Scheduled Actions / Cron

**Track:** Advanced Backend Features

**WHAT YOU WILL BE ABLE TO DO:** Define ir.cron jobs that call model methods on a schedule, keep jobs idempotent and short, choose the right user, and avoid “cron that locks the database.”.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 37 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 38.1 ir.cron

**ir.cron** is an essential mechanism in **Scheduled Actions / Cron**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ir.cron
# In scheduled_actions_/_cron:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ir.cron** in two sentences using a real company example. |
| Medium | Locate **ir.cron** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ir.cron**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ir.cron** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 38.2 Scheduling

**Scheduling** is an essential mechanism in **Scheduled Actions / Cron**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Scheduling
# In scheduled_actions_/_cron:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Scheduling** in two sentences using a real company example. |
| Medium | Locate **Scheduling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Scheduling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Scheduling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 38.3 Cron Methods

**Cron Methods** is an essential mechanism in **Scheduled Actions / Cron**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cron Methods
# In scheduled_actions_/_cron:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cron Methods** in two sentences using a real company example. |
| Medium | Locate **Cron Methods** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cron Methods**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cron Methods** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 38.4 Batch Processing

**Batch Processing** is an essential mechanism in **Scheduled Actions / Cron**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Batch Processing
# In scheduled_actions_/_cron:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Batch Processing** in two sentences using a real company example. |
| Medium | Locate **Batch Processing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Batch Processing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Batch Processing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 38.5 Progress

**Progress** is an essential mechanism in **Scheduled Actions / Cron**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Progress
# In scheduled_actions_/_cron:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Progress** in two sentences using a real company example. |
| Medium | Locate **Progress** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Progress**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Progress** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 38.6 Failure Handling

**Failure Handling** is an essential mechanism in **Scheduled Actions / Cron**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Failure Handling
# In scheduled_actions_/_cron:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Failure Handling** in two sentences using a real company example. |
| Medium | Locate **Failure Handling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Failure Handling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Failure Handling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 38.7 Idempotency

**Idempotency** is an essential mechanism in **Scheduled Actions / Cron**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Idempotency
# In scheduled_actions_/_cron:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Idempotency** in two sentences using a real company example. |
| Medium | Locate **Idempotency** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Idempotency**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Idempotency** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 38.8 Cron Security

**Cron Security** is an essential mechanism in **Scheduled Actions / Cron**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cron Security
# In scheduled_actions_/_cron:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cron Security** in two sentences using a real company example. |
| Medium | Locate **Cron Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cron Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cron Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-39"></a>
<a id="phase-39"></a>
# CHAPTER 39 - Automation & Server Actions

**Track:** Advanced Backend Features

**WHAT YOU WILL BE ABLE TO DO:** Explain base automation (automated actions): triggers, domains, and server actions; know when configuration is enough and when to move logic into a module method.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 38 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 39.1 Automated Actions

**Automated Actions** is an essential mechanism in **Automation & Server Actions**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Automated Actions
# In automation_&_server_actions:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Automated Actions** in two sentences using a real company example. |
| Medium | Locate **Automated Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Automated Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Automated Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 39.2 Triggers

**Triggers** is an essential mechanism in **Automation & Server Actions**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Triggers
# In automation_&_server_actions:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Triggers** in two sentences using a real company example. |
| Medium | Locate **Triggers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Triggers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Triggers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 39.3 Conditions

**Conditions** is an essential mechanism in **Automation & Server Actions**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Conditions
# In automation_&_server_actions:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Conditions** in two sentences using a real company example. |
| Medium | Locate **Conditions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Conditions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Conditions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 39.4 Server Actions

**Server Actions** is an essential mechanism in **Automation & Server Actions**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Server Actions
# In automation_&_server_actions:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Server Actions** in two sentences using a real company example. |
| Medium | Locate **Server Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Server Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Server Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 39.5 Evaluation Context

**Evaluation Context** is an essential mechanism in **Automation & Server Actions**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Evaluation Context
# In automation_&_server_actions:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Evaluation Context** in two sentences using a real company example. |
| Medium | Locate **Evaluation Context** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Evaluation Context**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Evaluation Context** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 39.6 Action Chaining

**Action Chaining** is an essential mechanism in **Automation & Server Actions**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Action Chaining
# In automation_&_server_actions:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Action Chaining** in two sentences using a real company example. |
| Medium | Locate **Action Chaining** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Action Chaining**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Action Chaining** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 39.7 When to Use Code Instead

**When to Use Code Instead** is an essential mechanism in **Automation & Server Actions**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating When to Use Code Instead
# In automation_&_server_actions:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **When to Use Code Instead** in two sentences using a real company example. |
| Medium | Locate **When to Use Code Instead** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **When to Use Code Instead**. |

**WHAT THIS UNLOCKS NEXT:**
Once **When to Use Code Instead** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT X — Automated Operations & Wizard Engine

This is the capstone project for Story X. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story X.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY X:**
- You have mastered all lessons and concepts in Story X.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **INTERNATIONALIZATION & LOCALIZATION**!

> **Story X Complete!** [Continue to Story XI: INTERNATIONALIZATION & LOCALIZATION](#story-xi)


---
---

# STORY XI — INTERNATIONALIZATION & LOCALIZATION

**Track:** Reporting & Localization

*QWeb PDF generation, custom report parsers, Excel exports, and Arabic RTL translation.*

---
<a id="chapter-40"></a>
<a id="phase-40"></a>
# CHAPTER 40 - Mail, Chatter & Activities

**Track:** Reporting & Localization

**WHAT YOU WILL BE ABLE TO DO:** Mixin mail.thread / mail.activity.mixin, post messages, manage followers, schedule activities, and keep portal/internal visibility straight.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 39 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 40.1 mail.thread

**mail.thread** is an essential mechanism in **Mail, Chatter & Activities**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating mail.thread
# In mail,_chatter_&_activities:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **mail.thread** in two sentences using a real company example. |
| Medium | Locate **mail.thread** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **mail.thread**. |

**WHAT THIS UNLOCKS NEXT:**
Once **mail.thread** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 40.2 mail.activity.mixin

**mail.activity.mixin** is an essential mechanism in **Mail, Chatter & Activities**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating mail.activity.mixin
# In mail,_chatter_&_activities:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **mail.activity.mixin** in two sentences using a real company example. |
| Medium | Locate **mail.activity.mixin** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **mail.activity.mixin**. |

**WHAT THIS UNLOCKS NEXT:**
Once **mail.activity.mixin** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 40.3 Messages

**Messages** is an essential mechanism in **Mail, Chatter & Activities**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Messages
# In mail,_chatter_&_activities:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Messages** in two sentences using a real company example. |
| Medium | Locate **Messages** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Messages**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Messages** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 40.4 Followers

**Followers** is an essential mechanism in **Mail, Chatter & Activities**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Followers
# In mail,_chatter_&_activities:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Followers** in two sentences using a real company example. |
| Medium | Locate **Followers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Followers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Followers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 40.5 Tracking

**Tracking** is an essential mechanism in **Mail, Chatter & Activities**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Tracking
# In mail,_chatter_&_activities:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Tracking** in two sentences using a real company example. |
| Medium | Locate **Tracking** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Tracking**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Tracking** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 40.6 Activities

**Activities** is an essential mechanism in **Mail, Chatter & Activities**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Activities
# In mail,_chatter_&_activities:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Activities** in two sentences using a real company example. |
| Medium | Locate **Activities** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Activities**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Activities** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 40.7 Notifications

**Notifications** is an essential mechanism in **Mail, Chatter & Activities**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Notifications
# In mail,_chatter_&_activities:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Notifications** in two sentences using a real company example. |
| Medium | Locate **Notifications** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Notifications**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Notifications** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 40.8 Email Templates

**Email Templates** is an essential mechanism in **Mail, Chatter & Activities**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Email Templates
# In mail,_chatter_&_activities:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Email Templates** in two sentences using a real company example. |
| Medium | Locate **Email Templates** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Email Templates**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Email Templates** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 40.9 Sending Mail

**Sending Mail** is an essential mechanism in **Mail, Chatter & Activities**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Sending Mail
# In mail,_chatter_&_activities:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Sending Mail** in two sentences using a real company example. |
| Medium | Locate **Sending Mail** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Sending Mail**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Sending Mail** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-41"></a>
<a id="phase-41"></a>
# CHAPTER 41 - Reports & QWeb

**Track:** Reporting & Localization

**WHAT YOU WILL BE ABLE TO DO:** Author QWeb report templates, bind ir.actions.report, generate PDFs for recordsets, and keep report logic thin (data on the model, layout in QWeb).

**WHAT YOU SHOULD KNOW FIRST:** Chapter 40 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 41.1 QWeb

**QWeb** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating QWeb
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **QWeb** in two sentences using a real company example. |
| Medium | Locate **QWeb** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **QWeb**. |

**WHAT THIS UNLOCKS NEXT:**
Once **QWeb** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.2 QWeb Directives

**QWeb Directives** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating QWeb Directives
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **QWeb Directives** in two sentences using a real company example. |
| Medium | Locate **QWeb Directives** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **QWeb Directives**. |

**WHAT THIS UNLOCKS NEXT:**
Once **QWeb Directives** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.3 Report Actions

**Report Actions** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Report Actions
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Report Actions** in two sentences using a real company example. |
| Medium | Locate **Report Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Report Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Report Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.4 Report Templates

**Report Templates** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Report Templates
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Report Templates** in two sentences using a real company example. |
| Medium | Locate **Report Templates** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Report Templates**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Report Templates** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.5 PDF Reports

**PDF Reports** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PDF Reports
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PDF Reports** in two sentences using a real company example. |
| Medium | Locate **PDF Reports** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PDF Reports**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PDF Reports** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.6 HTML Reports

**HTML Reports** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating HTML Reports
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **HTML Reports** in two sentences using a real company example. |
| Medium | Locate **HTML Reports** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **HTML Reports**. |

**WHAT THIS UNLOCKS NEXT:**
Once **HTML Reports** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.7 Paper Formats

**Paper Formats** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Paper Formats
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Paper Formats** in two sentences using a real company example. |
| Medium | Locate **Paper Formats** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Paper Formats**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Paper Formats** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.8 Custom Report Data

**Custom Report Data** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Custom Report Data
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Custom Report Data** in two sentences using a real company example. |
| Medium | Locate **Custom Report Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Custom Report Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Custom Report Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.9 Translatable Reports

**Translatable Reports** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Translatable Reports
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Translatable Reports** in two sentences using a real company example. |
| Medium | Locate **Translatable Reports** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Translatable Reports**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Translatable Reports** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.10 Barcodes

**Barcodes** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Barcodes
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Barcodes** in two sentences using a real company example. |
| Medium | Locate **Barcodes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Barcodes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Barcodes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 41.11 Report Attachments

**Report Attachments** is an essential mechanism in **Reports & QWeb**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Report Attachments
# In reports_&_qweb:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Report Attachments** in two sentences using a real company example. |
| Medium | Locate **Report Attachments** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Report Attachments**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Report Attachments** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-42"></a>
<a id="phase-42"></a>
# CHAPTER 42 - Data Files, Import & Export

**Track:** Reporting & Localization

**WHAT YOU WILL BE ABLE TO DO:** Use UI import/export responsibly, author module XML/CSV data with external IDs, and apply noupdate so upgrades do not wipe production configuration.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 41 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 42.1 XML Data

**XML Data** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating XML Data
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **XML Data** in two sentences using a real company example. |
| Medium | Locate **XML Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **XML Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **XML Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.2 CSV Data

**CSV Data** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CSV Data
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CSV Data** in two sentences using a real company example. |
| Medium | Locate **CSV Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CSV Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CSV Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.3 External IDs

**External IDs** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating External IDs
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **External IDs** in two sentences using a real company example. |
| Medium | Locate **External IDs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **External IDs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **External IDs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.4 env.ref()

**env.ref()** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating env.ref()
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **env.ref()** in two sentences using a real company example. |
| Medium | Locate **env.ref()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **env.ref()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **env.ref()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.5 noupdate

**noupdate** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating noupdate
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **noupdate** in two sentences using a real company example. |
| Medium | Locate **noupdate** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **noupdate**. |

**WHAT THIS UNLOCKS NEXT:**
Once **noupdate** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.6 Demo Data

**Demo Data** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Demo Data
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Demo Data** in two sentences using a real company example. |
| Medium | Locate **Demo Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Demo Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Demo Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.7 Seed Data

**Seed Data** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Seed Data
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Seed Data** in two sentences using a real company example. |
| Medium | Locate **Seed Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Seed Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Seed Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.8 Import

**Import** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Import
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Import** in two sentences using a real company example. |
| Medium | Locate **Import** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Import**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Import** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.9 Export

**Export** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Export
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Export** in two sentences using a real company example. |
| Medium | Locate **Export** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Export**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Export** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.10 Data Load Order

**Data Load Order** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Data Load Order
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Data Load Order** in two sentences using a real company example. |
| Medium | Locate **Data Load Order** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Data Load Order**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Data Load Order** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 42.11 XML Data Operations

**XML Data Operations** is an essential mechanism in **Data Files, Import & Export**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating XML Data Operations
# In data_files,_import_&_export:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **XML Data Operations** in two sentences using a real company example. |
| Medium | Locate **XML Data Operations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **XML Data Operations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **XML Data Operations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-43"></a>
<a id="phase-43"></a>
# CHAPTER 43 - Internationalization & Localization

**Track:** Reporting & Localization

**WHAT YOU WILL BE ABLE TO DO:** Work confidently with every topic under Internationalization & Localization — not as a glossary, but as mechanisms you can implement and debug.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 42 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 43.1 Translatable Strings

**Translatable Strings** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Translatable Strings
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Translatable Strings** in two sentences using a real company example. |
| Medium | Locate **Translatable Strings** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Translatable Strings**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Translatable Strings** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.2 _() Translation Function

**_() Translation Function** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating _() Translation Function
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **_() Translation Function** in two sentences using a real company example. |
| Medium | Locate **_() Translation Function** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **_() Translation Function**. |

**WHAT THIS UNLOCKS NEXT:**
Once **_() Translation Function** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.3 Translatable Fields

**Translatable Fields** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Translatable Fields
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Translatable Fields** in two sentences using a real company example. |
| Medium | Locate **Translatable Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Translatable Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Translatable Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.4 i18n/

**i18n/** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating i18n/
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **i18n/** in two sentences using a real company example. |
| Medium | Locate **i18n/** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **i18n/**. |

**WHAT THIS UNLOCKS NEXT:**
Once **i18n/** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.5 .po Files

**.po Files** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating .po Files
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **.po Files** in two sentences using a real company example. |
| Medium | Locate **.po Files** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **.po Files**. |

**WHAT THIS UNLOCKS NEXT:**
Once **.po Files** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.6 .pot Templates

**.pot Templates** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating .pot Templates
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **.pot Templates** in two sentences using a real company example. |
| Medium | Locate **.pot Templates** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **.pot Templates**. |

**WHAT THIS UNLOCKS NEXT:**
Once **.pot Templates** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.7 Exporting Translations

**Exporting Translations** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Exporting Translations
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Exporting Translations** in two sentences using a real company example. |
| Medium | Locate **Exporting Translations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Exporting Translations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Exporting Translations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.8 Importing Translations

**Importing Translations** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Importing Translations
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Importing Translations** in two sentences using a real company example. |
| Medium | Locate **Importing Translations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Importing Translations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Importing Translations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.9 Languages

**Languages** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Languages
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Languages** in two sentences using a real company example. |
| Medium | Locate **Languages** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Languages**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Languages** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.10 Locale / Formatting

**Locale / Formatting** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Locale / Formatting
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Locale / Formatting** in two sentences using a real company example. |
| Medium | Locate **Locale / Formatting** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Locale / Formatting**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Locale / Formatting** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.11 Translatable QWeb

**Translatable QWeb** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Translatable QWeb
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Translatable QWeb** in two sentences using a real company example. |
| Medium | Locate **Translatable QWeb** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Translatable QWeb**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Translatable QWeb** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.12 Localization Modules

**Localization Modules** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Localization Modules
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Localization Modules** in two sentences using a real company example. |
| Medium | Locate **Localization Modules** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Localization Modules**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Localization Modules** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.13 Accounting Localization Concept

**Accounting Localization Concept** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Accounting Localization Concept
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Accounting Localization Concept** in two sentences using a real company example. |
| Medium | Locate **Accounting Localization Concept** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Accounting Localization Concept**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Accounting Localization Concept** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 43.14 PRACTICE — Translate a Custom Module

**PRACTICE — Translate a Custom Module** is an essential mechanism in **Internationalization & Localization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PRACTICE — Translate a Custom Module
# In internationalization_&_localization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PRACTICE — Translate a Custom Module** in two sentences using a real company example. |
| Medium | Locate **PRACTICE — Translate a Custom Module** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PRACTICE — Translate a Custom Module**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PRACTICE — Translate a Custom Module** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XI — Multi-Lingual Financial Reporting Suite

This is the capstone project for Story XI. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XI.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XI:**
- You have mastered all lessons and concepts in Story XI.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **WEB DEVELOPMENT WITH ODOO**!

> **Story XI Complete!** [Continue to Story XII: WEB DEVELOPMENT WITH ODOO](#story-xii)


---
---

# STORY XII — WEB DEVELOPMENT WITH ODOO

**Track:** Web & Portal Development

*HTTP web controllers, customer self-service portals, and external webhook endpoints.*

---
<a id="chapter-44"></a>
<a id="phase-44"></a>
# CHAPTER 44 - HTTP Controllers

**Track:** Web & Portal Development

**WHAT YOU WILL BE ABLE TO DO:** Define http.Controller routes with @http.route, use request, choose auth modes (user, public, bearer, none), return HTTP/JSON responses, and treat CSRF as mandatory for browser form posts.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 43 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 44.1 http.Controller

**http.Controller** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating http.Controller
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **http.Controller** in two sentences using a real company example. |
| Medium | Locate **http.Controller** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **http.Controller**. |

**WHAT THIS UNLOCKS NEXT:**
Once **http.Controller** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.2 @http.route

**@http.route** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating @http.route
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **@http.route** in two sentences using a real company example. |
| Medium | Locate **@http.route** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **@http.route**. |

**WHAT THIS UNLOCKS NEXT:**
Once **@http.route** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.3 request

**request** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating request
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **request** in two sentences using a real company example. |
| Medium | Locate **request** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **request**. |

**WHAT THIS UNLOCKS NEXT:**
Once **request** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.4 Route Types

**Route Types** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Route Types
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Route Types** in two sentences using a real company example. |
| Medium | Locate **Route Types** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Route Types**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Route Types** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.5 HTTP Methods

**HTTP Methods** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating HTTP Methods
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **HTTP Methods** in two sentences using a real company example. |
| Medium | Locate **HTTP Methods** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **HTTP Methods**. |

**WHAT THIS UNLOCKS NEXT:**
Once **HTTP Methods** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.6 Parameters

**Parameters** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Parameters
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Parameters** in two sentences using a real company example. |
| Medium | Locate **Parameters** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Parameters**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Parameters** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.7 Responses

**Responses** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Responses
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Responses** in two sentences using a real company example. |
| Medium | Locate **Responses** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Responses**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Responses** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.8 Authentication

**Authentication** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Authentication
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Authentication** in two sentences using a real company example. |
| Medium | Locate **Authentication** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Authentication**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Authentication** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.9 CSRF

**CSRF** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CSRF
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CSRF** in two sentences using a real company example. |
| Medium | Locate **CSRF** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CSRF**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CSRF** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.10 Sessions

**Sessions** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Sessions
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Sessions** in two sentences using a real company example. |
| Medium | Locate **Sessions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Sessions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Sessions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.11 Error Handling

**Error Handling** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Error Handling
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Error Handling** in two sentences using a real company example. |
| Medium | Locate **Error Handling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Error Handling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Error Handling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 44.12 Controller Security

**Controller Security** is an essential mechanism in **HTTP Controllers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Controller Security
# In http_controllers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Controller Security** in two sentences using a real company example. |
| Medium | Locate **Controller Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Controller Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Controller Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-45"></a>
<a id="phase-45"></a>
# CHAPTER 45 - Website Development

**Track:** Web & Portal Development

**WHAT YOU WILL BE ABLE TO DO:** Build website pages with QWeb, serve dynamic content through website controllers, and keep public templates free of private fields.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 44 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 45.1 Website Architecture

**Website Architecture** is an essential mechanism in **Website Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Website Architecture
# In website_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Website Architecture** in two sentences using a real company example. |
| Medium | Locate **Website Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Website Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Website Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 45.2 Website Pages

**Website Pages** is an essential mechanism in **Website Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Website Pages
# In website_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Website Pages** in two sentences using a real company example. |
| Medium | Locate **Website Pages** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Website Pages**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Website Pages** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 45.3 QWeb Templates

**QWeb Templates** is an essential mechanism in **Website Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating QWeb Templates
# In website_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **QWeb Templates** in two sentences using a real company example. |
| Medium | Locate **QWeb Templates** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **QWeb Templates**. |

**WHAT THIS UNLOCKS NEXT:**
Once **QWeb Templates** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 45.4 Dynamic Content

**Dynamic Content** is an essential mechanism in **Website Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Dynamic Content
# In website_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Dynamic Content** in two sentences using a real company example. |
| Medium | Locate **Dynamic Content** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Dynamic Content**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Dynamic Content** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 45.5 Website Controllers

**Website Controllers** is an essential mechanism in **Website Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Website Controllers
# In website_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Website Controllers** in two sentences using a real company example. |
| Medium | Locate **Website Controllers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Website Controllers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Website Controllers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 45.6 Frontend Assets

**Frontend Assets** is an essential mechanism in **Website Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Frontend Assets
# In website_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Frontend Assets** in two sentences using a real company example. |
| Medium | Locate **Frontend Assets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Frontend Assets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Frontend Assets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 45.7 Forms

**Forms** is an essential mechanism in **Website Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Forms
# In website_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Forms** in two sentences using a real company example. |
| Medium | Locate **Forms** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Forms**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Forms** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 45.8 SEO Basics

**SEO Basics** is an essential mechanism in **Website Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating SEO Basics
# In website_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **SEO Basics** in two sentences using a real company example. |
| Medium | Locate **SEO Basics** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **SEO Basics**. |

**WHAT THIS UNLOCKS NEXT:**
Once **SEO Basics** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 45.9 Multi-Website Concept

**Multi-Website Concept** is an essential mechanism in **Website Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Multi-Website Concept
# In website_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Multi-Website Concept** in two sentences using a real company example. |
| Medium | Locate **Multi-Website Concept** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Multi-Website Concept**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Multi-Website Concept** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-46"></a>
<a id="phase-46"></a>
# CHAPTER 46 - Portal Development

**Track:** Web & Portal Development

**WHAT YOU WILL BE ABLE TO DO:** Build portal pages for portal users, enforce portal security (share controllers + record rules), and expose customer records without granting internal groups.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 45 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 46.1 Portal Users

**Portal Users** is an essential mechanism in **Portal Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Portal Users
# In portal_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Portal Users** in two sentences using a real company example. |
| Medium | Locate **Portal Users** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Portal Users**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Portal Users** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 46.2 Portal Controllers

**Portal Controllers** is an essential mechanism in **Portal Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Portal Controllers
# In portal_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Portal Controllers** in two sentences using a real company example. |
| Medium | Locate **Portal Controllers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Portal Controllers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Portal Controllers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 46.3 Customer Pages

**Customer Pages** is an essential mechanism in **Portal Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Customer Pages
# In portal_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Customer Pages** in two sentences using a real company example. |
| Medium | Locate **Customer Pages** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Customer Pages**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Customer Pages** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 46.4 Portal Layout

**Portal Layout** is an essential mechanism in **Portal Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Portal Layout
# In portal_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Portal Layout** in two sentences using a real company example. |
| Medium | Locate **Portal Layout** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Portal Layout**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Portal Layout** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 46.5 Portal Security

**Portal Security** is an essential mechanism in **Portal Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Portal Security
# In portal_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Portal Security** in two sentences using a real company example. |
| Medium | Locate **Portal Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Portal Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Portal Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 46.6 Customer-Owned Records

**Customer-Owned Records** is an essential mechanism in **Portal Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Customer-Owned Records
# In portal_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Customer-Owned Records** in two sentences using a real company example. |
| Medium | Locate **Customer-Owned Records** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Customer-Owned Records**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Customer-Owned Records** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 46.7 Pagination

**Pagination** is an essential mechanism in **Portal Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Pagination
# In portal_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Pagination** in two sentences using a real company example. |
| Medium | Locate **Pagination** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Pagination**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Pagination** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 46.8 Search / Filters

**Search / Filters** is an essential mechanism in **Portal Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Search / Filters
# In portal_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Search / Filters** in two sentences using a real company example. |
| Medium | Locate **Search / Filters** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Search / Filters**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Search / Filters** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 46.9 Access Tokens

**Access Tokens** is an essential mechanism in **Portal Development**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Access Tokens
# In portal_development:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Access Tokens** in two sentences using a real company example. |
| Medium | Locate **Access Tokens** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Access Tokens**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Access Tokens** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XII — Customer Self-Service Portal & Webhook Engine

This is the capstone project for Story XII. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XII.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XII:**
- You have mastered all lessons and concepts in Story XII.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **APIS & INTEGRATIONS**!

> **Story XII Complete!** [Continue to Story XIII: APIS & INTEGRATIONS](#story-xiii)


---
---

# STORY XIII — APIS & INTEGRATIONS

**Track:** APIs & Integrations

*XML-RPC, JSON-RPC 2.0, REST endpoints, Bearer API keys, and third-party SaaS bridges.*

---
<a id="chapter-47"></a>
<a id="phase-47"></a>
# CHAPTER 47 - External API Concepts

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Describe integration contracts (identity, auth, resources, errors, idempotency, versioning) before writing code, and choose RPC vs custom REST vs webhook shapes deliberately.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 46 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 47.1 Client / Server

**Client / Server** is an essential mechanism in **External API Concepts**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Client / Server
# In external_api_concepts:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Client / Server** in two sentences using a real company example. |
| Medium | Locate **Client / Server** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Client / Server**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Client / Server** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 47.2 Resources

**Resources** is an essential mechanism in **External API Concepts**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Resources
# In external_api_concepts:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Resources** in two sentences using a real company example. |
| Medium | Locate **Resources** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Resources**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Resources** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 47.3 HTTP Methods

**HTTP Methods** is an essential mechanism in **External API Concepts**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating HTTP Methods
# In external_api_concepts:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **HTTP Methods** in two sentences using a real company example. |
| Medium | Locate **HTTP Methods** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **HTTP Methods**. |

**WHAT THIS UNLOCKS NEXT:**
Once **HTTP Methods** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 47.4 JSON

**JSON** is an essential mechanism in **External API Concepts**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating JSON
# In external_api_concepts:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **JSON** in two sentences using a real company example. |
| Medium | Locate **JSON** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **JSON**. |

**WHAT THIS UNLOCKS NEXT:**
Once **JSON** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 47.5 Authentication

**Authentication** is an essential mechanism in **External API Concepts**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Authentication
# In external_api_concepts:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Authentication** in two sentences using a real company example. |
| Medium | Locate **Authentication** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Authentication**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Authentication** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 47.6 Status Codes

**Status Codes** is an essential mechanism in **External API Concepts**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Status Codes
# In external_api_concepts:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Status Codes** in two sentences using a real company example. |
| Medium | Locate **Status Codes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Status Codes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Status Codes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 47.7 Pagination

**Pagination** is an essential mechanism in **External API Concepts**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Pagination
# In external_api_concepts:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Pagination** in two sentences using a real company example. |
| Medium | Locate **Pagination** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Pagination**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Pagination** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 47.8 Rate Limits

**Rate Limits** is an essential mechanism in **External API Concepts**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Rate Limits
# In external_api_concepts:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Rate Limits** in two sentences using a real company example. |
| Medium | Locate **Rate Limits** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Rate Limits**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Rate Limits** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 47.9 API Contracts

**API Contracts** is an essential mechanism in **External API Concepts**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating API Contracts
# In external_api_concepts:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **API Contracts** in two sentences using a real company example. |
| Medium | Locate **API Contracts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **API Contracts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **API Contracts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-48"></a>
<a id="phase-48"></a>
# CHAPTER 48 - External Odoo Access

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Authenticate via XML-RPC/JSON-RPC, call execute_kw / execute, use a least-privilege integration user (and API keys where available), and avoid embedding admin passwords in apps.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 47 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 48.1 External API Architecture

**External API Architecture** is an essential mechanism in **External Odoo Access**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating External API Architecture
# In external_odoo_access:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **External API Architecture** in two sentences using a real company example. |
| Medium | Locate **External API Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **External API Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **External API Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 48.2 Integration Users

**Integration Users** is an essential mechanism in **External Odoo Access**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Integration Users
# In external_odoo_access:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Integration Users** in two sentences using a real company example. |
| Medium | Locate **Integration Users** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Integration Users**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Integration Users** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 48.3 Authentication

**Authentication** is an essential mechanism in **External Odoo Access**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Authentication
# In external_odoo_access:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Authentication** in two sentences using a real company example. |
| Medium | Locate **Authentication** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Authentication**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Authentication** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 48.4 Calling Models

**Calling Models** is an essential mechanism in **External Odoo Access**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Calling Models
# In external_odoo_access:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Calling Models** in two sentences using a real company example. |
| Medium | Locate **Calling Models** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Calling Models**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Calling Models** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 48.5 CRUD Remotely

**CRUD Remotely** is an essential mechanism in **External Odoo Access**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CRUD Remotely
# In external_odoo_access:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CRUD Remotely** in two sentences using a real company example. |
| Medium | Locate **CRUD Remotely** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CRUD Remotely**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CRUD Remotely** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 48.6 Domains

**Domains** is an essential mechanism in **External Odoo Access**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Domains
# In external_odoo_access:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Domains** in two sentences using a real company example. |
| Medium | Locate **Domains** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Domains**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Domains** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 48.7 Permissions

**Permissions** is an essential mechanism in **External Odoo Access**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Permissions
# In external_odoo_access:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Permissions** in two sentences using a real company example. |
| Medium | Locate **Permissions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Permissions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Permissions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 48.8 Version Compatibility

**Version Compatibility** is an essential mechanism in **External Odoo Access**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Version Compatibility
# In external_odoo_access:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Version Compatibility** in two sentences using a real company example. |
| Medium | Locate **Version Compatibility** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Version Compatibility**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Version Compatibility** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-49"></a>
<a id="phase-49"></a>
# CHAPTER 49 - Building API Endpoints

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Design versioned JSON HTTP APIs with @http.route, authenticate callers, validate payloads, and map errors to stable HTTP statuses.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 48 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 49.1 API Routes

**API Routes** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating API Routes
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **API Routes** in two sentences using a real company example. |
| Medium | Locate **API Routes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **API Routes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **API Routes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 49.2 Request Parsing

**Request Parsing** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Request Parsing
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Request Parsing** in two sentences using a real company example. |
| Medium | Locate **Request Parsing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Request Parsing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Request Parsing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 49.3 Validation

**Validation** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Validation
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Validation** in two sentences using a real company example. |
| Medium | Locate **Validation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Validation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Validation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 49.4 Serialization

**Serialization** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Serialization
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Serialization** in two sentences using a real company example. |
| Medium | Locate **Serialization** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Serialization**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Serialization** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 49.5 Response Design

**Response Design** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Response Design
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Response Design** in two sentences using a real company example. |
| Medium | Locate **Response Design** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Response Design**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Response Design** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 49.6 Authentication

**Authentication** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Authentication
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Authentication** in two sentences using a real company example. |
| Medium | Locate **Authentication** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Authentication**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Authentication** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 49.7 Authorization

**Authorization** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Authorization
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Authorization** in two sentences using a real company example. |
| Medium | Locate **Authorization** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Authorization**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Authorization** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 49.8 Pagination

**Pagination** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Pagination
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Pagination** in two sentences using a real company example. |
| Medium | Locate **Pagination** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Pagination**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Pagination** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 49.9 Error Responses

**Error Responses** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Error Responses
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Error Responses** in two sentences using a real company example. |
| Medium | Locate **Error Responses** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Error Responses**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Error Responses** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 49.10 API Versioning Concepts

**API Versioning Concepts** is an essential mechanism in **Building API Endpoints**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating API Versioning Concepts
# In building_api_endpoints:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **API Versioning Concepts** in two sentences using a real company example. |
| Medium | Locate **API Versioning Concepts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **API Versioning Concepts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **API Versioning Concepts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-50"></a>
<a id="phase-50"></a>
# CHAPTER 50 - Webhooks

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Receive incoming webhooks, verify signatures, process events idempotently, and design outgoing event notifications without losing or duplicating critical side effects.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 49 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 50.1 Incoming Webhooks

**Incoming Webhooks** is an essential mechanism in **Webhooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Incoming Webhooks
# In webhooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Incoming Webhooks** in two sentences using a real company example. |
| Medium | Locate **Incoming Webhooks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Incoming Webhooks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Incoming Webhooks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 50.2 Outgoing Events

**Outgoing Events** is an essential mechanism in **Webhooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Outgoing Events
# In webhooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Outgoing Events** in two sentences using a real company example. |
| Medium | Locate **Outgoing Events** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Outgoing Events**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Outgoing Events** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 50.3 Payload Validation

**Payload Validation** is an essential mechanism in **Webhooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Payload Validation
# In webhooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Payload Validation** in two sentences using a real company example. |
| Medium | Locate **Payload Validation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Payload Validation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Payload Validation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 50.4 Signatures

**Signatures** is an essential mechanism in **Webhooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Signatures
# In webhooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Signatures** in two sentences using a real company example. |
| Medium | Locate **Signatures** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Signatures**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Signatures** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 50.5 Secrets

**Secrets** is an essential mechanism in **Webhooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Secrets
# In webhooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Secrets** in two sentences using a real company example. |
| Medium | Locate **Secrets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Secrets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Secrets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 50.6 Idempotency

**Idempotency** is an essential mechanism in **Webhooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Idempotency
# In webhooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Idempotency** in two sentences using a real company example. |
| Medium | Locate **Idempotency** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Idempotency**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Idempotency** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 50.7 Retries

**Retries** is an essential mechanism in **Webhooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Retries
# In webhooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Retries** in two sentences using a real company example. |
| Medium | Locate **Retries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Retries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Retries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 50.8 Duplicate Events

**Duplicate Events** is an essential mechanism in **Webhooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Duplicate Events
# In webhooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Duplicate Events** in two sentences using a real company example. |
| Medium | Locate **Duplicate Events** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Duplicate Events**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Duplicate Events** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 50.9 Audit Logging

**Audit Logging** is an essential mechanism in **Webhooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Audit Logging
# In webhooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Audit Logging** in two sentences using a real company example. |
| Medium | Locate **Audit Logging** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Audit Logging**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Audit Logging** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-51"></a>
<a id="phase-51"></a>
# CHAPTER 51 - Third-Party Integrations

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Structure REST integrations with authentication, field mapping, sync jobs, retries/backoff, and visible error handling — without scattering HTTP calls across every model method.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 50 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 51.1 REST APIs

**REST APIs** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating REST APIs
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **REST APIs** in two sentences using a real company example. |
| Medium | Locate **REST APIs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **REST APIs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **REST APIs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.2 API Authentication

**API Authentication** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating API Authentication
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **API Authentication** in two sentences using a real company example. |
| Medium | Locate **API Authentication** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **API Authentication**. |

**WHAT THIS UNLOCKS NEXT:**
Once **API Authentication** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.3 Mapping External Data

**Mapping External Data** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Mapping External Data
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Mapping External Data** in two sentences using a real company example. |
| Medium | Locate **Mapping External Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Mapping External Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Mapping External Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.4 Data Ownership

**Data Ownership** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Data Ownership
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Data Ownership** in two sentences using a real company example. |
| Medium | Locate **Data Ownership** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Data Ownership**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Data Ownership** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.5 Synchronization

**Synchronization** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Synchronization
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Synchronization** in two sentences using a real company example. |
| Medium | Locate **Synchronization** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Synchronization**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Synchronization** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.6 Incremental Sync

**Incremental Sync** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Incremental Sync
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Incremental Sync** in two sentences using a real company example. |
| Medium | Locate **Incremental Sync** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Incremental Sync**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Incremental Sync** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.7 Scheduled Sync

**Scheduled Sync** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Scheduled Sync
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Scheduled Sync** in two sentences using a real company example. |
| Medium | Locate **Scheduled Sync** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Scheduled Sync**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Scheduled Sync** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.8 Retries / Backoff

**Retries / Backoff** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Retries / Backoff
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Retries / Backoff** in two sentences using a real company example. |
| Medium | Locate **Retries / Backoff** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Retries / Backoff**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Retries / Backoff** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.9 Rate Limiting

**Rate Limiting** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Rate Limiting
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Rate Limiting** in two sentences using a real company example. |
| Medium | Locate **Rate Limiting** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Rate Limiting**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Rate Limiting** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.10 Error Handling

**Error Handling** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Error Handling
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Error Handling** in two sentences using a real company example. |
| Medium | Locate **Error Handling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Error Handling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Error Handling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 51.11 Integration Logs

**Integration Logs** is an essential mechanism in **Third-Party Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Integration Logs
# In third-party_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Integration Logs** in two sentences using a real company example. |
| Medium | Locate **Integration Logs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Integration Logs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Integration Logs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-52"></a>
<a id="phase-52"></a>
# CHAPTER 52 - Payment Integrations

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Explain Odoo’s payment.provider / payment.transaction flow, keep PCI scope small, verify provider webhooks idempotently, and reconcile payment state safely.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 51 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 52.1 Payment Architecture

**Payment Architecture** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Payment Architecture
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Payment Architecture** in two sentences using a real company example. |
| Medium | Locate **Payment Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Payment Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Payment Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.2 Payment Providers

**Payment Providers** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Payment Providers
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Payment Providers** in two sentences using a real company example. |
| Medium | Locate **Payment Providers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Payment Providers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Payment Providers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.3 Payment Transactions

**Payment Transactions** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Payment Transactions
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Payment Transactions** in two sentences using a real company example. |
| Medium | Locate **Payment Transactions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Payment Transactions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Payment Transactions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.4 Checkout Flow

**Checkout Flow** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Checkout Flow
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Checkout Flow** in two sentences using a real company example. |
| Medium | Locate **Checkout Flow** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Checkout Flow**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Checkout Flow** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.5 Redirects

**Redirects** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Redirects
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Redirects** in two sentences using a real company example. |
| Medium | Locate **Redirects** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Redirects**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Redirects** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.6 Tokens

**Tokens** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Tokens
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Tokens** in two sentences using a real company example. |
| Medium | Locate **Tokens** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Tokens**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Tokens** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.7 Callbacks

**Callbacks** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Callbacks
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Callbacks** in two sentences using a real company example. |
| Medium | Locate **Callbacks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Callbacks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Callbacks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.8 Webhooks

**Webhooks** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Webhooks
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Webhooks** in two sentences using a real company example. |
| Medium | Locate **Webhooks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Webhooks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Webhooks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.9 Payment Status

**Payment Status** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Payment Status
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Payment Status** in two sentences using a real company example. |
| Medium | Locate **Payment Status** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Payment Status**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Payment Status** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.10 Failure Handling

**Failure Handling** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Failure Handling
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Failure Handling** in two sentences using a real company example. |
| Medium | Locate **Failure Handling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Failure Handling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Failure Handling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 52.11 Refund Concepts

**Refund Concepts** is an essential mechanism in **Payment Integrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Refund Concepts
# In payment_integrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Refund Concepts** in two sentences using a real company example. |
| Medium | Locate **Refund Concepts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Refund Concepts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Refund Concepts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XIII — Enterprise Omni-Channel API Gateway

This is the capstone project for Story XIII. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XIII.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XIII:**
- You have mastered all lessons and concepts in Story XIII.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **MODERN ODOO FRONTEND**!

> **Story XIII Complete!** [Continue to Story XIV: MODERN ODOO FRONTEND](#story-xiv)


---
---

# STORY XIV — MODERN ODOO FRONTEND

**Track:** Owl Framework & Frontend

*Owl 2.0 components, useState reactivity, custom field widgets, and client action dashboards.*

---
<a id="chapter-53"></a>
<a id="phase-53"></a>
# CHAPTER 53 - Odoo JavaScript Architecture

**Track:** Owl Framework & Frontend

**WHAT YOU WILL BE ABLE TO DO:** Map how the Odoo web client loads — assets, registries, services, and OWL components — and decide when XML views are enough versus when you need JavaScript.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 52 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 53.1 Web Client

**Web Client** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Web Client
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Web Client** in two sentences using a real company example. |
| Medium | Locate **Web Client** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Web Client**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Web Client** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 53.2 JavaScript Modules

**JavaScript Modules** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating JavaScript Modules
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **JavaScript Modules** in two sentences using a real company example. |
| Medium | Locate **JavaScript Modules** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **JavaScript Modules**. |

**WHAT THIS UNLOCKS NEXT:**
Once **JavaScript Modules** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 53.3 Native JS Modules

**Native JS Modules** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Native JS Modules
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Native JS Modules** in two sentences using a real company example. |
| Medium | Locate **Native JS Modules** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Native JS Modules**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Native JS Modules** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 53.4 Frontend Environment

**Frontend Environment** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Frontend Environment
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Frontend Environment** in two sentences using a real company example. |
| Medium | Locate **Frontend Environment** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Frontend Environment**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Frontend Environment** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 53.5 Components

**Components** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Components
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Components** in two sentences using a real company example. |
| Medium | Locate **Components** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Components**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Components** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 53.6 Registries

**Registries** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Registries
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Registries** in two sentences using a real company example. |
| Medium | Locate **Registries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Registries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Registries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 53.7 Services

**Services** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Services
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Services** in two sentences using a real company example. |
| Medium | Locate **Services** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Services**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Services** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 53.8 Hooks

**Hooks** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Hooks
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Hooks** in two sentences using a real company example. |
| Medium | Locate **Hooks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Hooks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Hooks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 53.9 Backend ↔ Frontend Communication

**Backend ↔ Frontend Communication** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Backend ↔ Frontend Communication
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Backend ↔ Frontend Communication** in two sentences using a real company example. |
| Medium | Locate **Backend ↔ Frontend Communication** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Backend ↔ Frontend Communication**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Backend ↔ Frontend Communication** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 53.10 Frontend Debugging

**Frontend Debugging** is an essential mechanism in **Odoo JavaScript Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Frontend Debugging
# In odoo_javascript_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Frontend Debugging** in two sentences using a real company example. |
| Medium | Locate **Frontend Debugging** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Frontend Debugging**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Frontend Debugging** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-54"></a>
<a id="phase-54"></a>
# CHAPTER 54 - OWL Fundamentals

**Track:** Owl Framework & Frontend

**WHAT YOU WILL BE ABLE TO DO:** Build a small OWL component with an XML template, typed props, reactive state, and correct lifecycle hooks — following Odoo’s setup() convention.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 53 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 54.1 Components

**Components** is an essential mechanism in **OWL Fundamentals**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Components
# In owl_fundamentals:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Components** in two sentences using a real company example. |
| Medium | Locate **Components** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Components**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Components** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 54.2 Templates

**Templates** is an essential mechanism in **OWL Fundamentals**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Templates
# In owl_fundamentals:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Templates** in two sentences using a real company example. |
| Medium | Locate **Templates** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Templates**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Templates** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 54.3 Props

**Props** is an essential mechanism in **OWL Fundamentals**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Props
# In owl_fundamentals:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Props** in two sentences using a real company example. |
| Medium | Locate **Props** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Props**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Props** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 54.4 State

**State** is an essential mechanism in **OWL Fundamentals**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating State
# In owl_fundamentals:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **State** in two sentences using a real company example. |
| Medium | Locate **State** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **State**. |

**WHAT THIS UNLOCKS NEXT:**
Once **State** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 54.5 Events

**Events** is an essential mechanism in **OWL Fundamentals**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Events
# In owl_fundamentals:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Events** in two sentences using a real company example. |
| Medium | Locate **Events** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Events**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Events** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 54.6 Lifecycle

**Lifecycle** is an essential mechanism in **OWL Fundamentals**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Lifecycle
# In owl_fundamentals:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Lifecycle** in two sentences using a real company example. |
| Medium | Locate **Lifecycle** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Lifecycle**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Lifecycle** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 54.7 Composition

**Composition** is an essential mechanism in **OWL Fundamentals**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Composition
# In owl_fundamentals:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Composition** in two sentences using a real company example. |
| Medium | Locate **Composition** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Composition**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Composition** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 54.8 Subcomponents

**Subcomponents** is an essential mechanism in **OWL Fundamentals**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Subcomponents
# In owl_fundamentals:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Subcomponents** in two sentences using a real company example. |
| Medium | Locate **Subcomponents** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Subcomponents**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Subcomponents** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 54.9 Reactive UI

**Reactive UI** is an essential mechanism in **OWL Fundamentals**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reactive UI
# In owl_fundamentals:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reactive UI** in two sentences using a real company example. |
| Medium | Locate **Reactive UI** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reactive UI**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reactive UI** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-55"></a>
<a id="phase-55"></a>
# CHAPTER 55 - Services, Registries & Hooks

**Track:** Owl Framework & Frontend

**WHAT YOU WILL BE ABLE TO DO:** Register and consume web client services with useService, place components and actions in the correct registry categories, and use common Owl/Odoo hooks without inventing global singletons.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 54 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 55.1 Registries

**Registries** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Registries
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Registries** in two sentences using a real company example. |
| Medium | Locate **Registries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Registries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Registries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.2 Registry Categories

**Registry Categories** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Registry Categories
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Registry Categories** in two sentences using a real company example. |
| Medium | Locate **Registry Categories** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Registry Categories**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Registry Categories** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.3 Services

**Services** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Services
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Services** in two sentences using a real company example. |
| Medium | Locate **Services** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Services**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Services** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.4 Service Dependencies

**Service Dependencies** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Service Dependencies
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Service Dependencies** in two sentences using a real company example. |
| Medium | Locate **Service Dependencies** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Service Dependencies**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Service Dependencies** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.5 useService()

**useService()** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating useService()
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **useService()** in two sentences using a real company example. |
| Medium | Locate **useService()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **useService()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **useService()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.6 ORM Service

**ORM Service** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ORM Service
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ORM Service** in two sentences using a real company example. |
| Medium | Locate **ORM Service** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ORM Service**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ORM Service** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.7 RPC Service

**RPC Service** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating RPC Service
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **RPC Service** in two sentences using a real company example. |
| Medium | Locate **RPC Service** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **RPC Service**. |

**WHAT THIS UNLOCKS NEXT:**
Once **RPC Service** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.8 Notification Service

**Notification Service** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Notification Service
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Notification Service** in two sentences using a real company example. |
| Medium | Locate **Notification Service** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Notification Service**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Notification Service** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.9 Action Service

**Action Service** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Action Service
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Action Service** in two sentences using a real company example. |
| Medium | Locate **Action Service** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Action Service**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Action Service** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.10 Hooks

**Hooks** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Hooks
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Hooks** in two sentences using a real company example. |
| Medium | Locate **Hooks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Hooks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Hooks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.11 useBus

**useBus** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating useBus
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **useBus** in two sentences using a real company example. |
| Medium | Locate **useBus** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **useBus**. |

**WHAT THIS UNLOCKS NEXT:**
Once **useBus** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.12 useAssets

**useAssets** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating useAssets
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **useAssets** in two sentences using a real company example. |
| Medium | Locate **useAssets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **useAssets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **useAssets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 55.13 Custom Hooks

**Custom Hooks** is an essential mechanism in **Services, Registries & Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Custom Hooks
# In services,_registries_&_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Custom Hooks** in two sentences using a real company example. |
| Medium | Locate **Custom Hooks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Custom Hooks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Custom Hooks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-56"></a>
<a id="phase-56"></a>
# CHAPTER 56 - Assets & Frontend Resources

**Track:** Owl Framework & Frontend

**WHAT YOU WILL BE ABLE TO DO:** Declare backend (and related) asset bundles in __manifest__.py, place static files correctly, control load order with directives, and debug “my JS never runs” failures.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 55 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 56.1 Asset Bundles

**Asset Bundles** is an essential mechanism in **Assets & Frontend Resources**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Asset Bundles
# In assets_&_frontend_resources:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Asset Bundles** in two sentences using a real company example. |
| Medium | Locate **Asset Bundles** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Asset Bundles**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Asset Bundles** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 56.2 JavaScript Assets

**JavaScript Assets** is an essential mechanism in **Assets & Frontend Resources**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating JavaScript Assets
# In assets_&_frontend_resources:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **JavaScript Assets** in two sentences using a real company example. |
| Medium | Locate **JavaScript Assets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **JavaScript Assets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **JavaScript Assets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 56.3 SCSS / CSS

**SCSS / CSS** is an essential mechanism in **Assets & Frontend Resources**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating SCSS / CSS
# In assets_&_frontend_resources:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **SCSS / CSS** in two sentences using a real company example. |
| Medium | Locate **SCSS / CSS** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **SCSS / CSS**. |

**WHAT THIS UNLOCKS NEXT:**
Once **SCSS / CSS** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 56.4 XML Templates

**XML Templates** is an essential mechanism in **Assets & Frontend Resources**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating XML Templates
# In assets_&_frontend_resources:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **XML Templates** in two sentences using a real company example. |
| Medium | Locate **XML Templates** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **XML Templates**. |

**WHAT THIS UNLOCKS NEXT:**
Once **XML Templates** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 56.5 Manifest Assets

**Manifest Assets** is an essential mechanism in **Assets & Frontend Resources**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Manifest Assets
# In assets_&_frontend_resources:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Manifest Assets** in two sentences using a real company example. |
| Medium | Locate **Manifest Assets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Manifest Assets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Manifest Assets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 56.6 Lazy Loading

**Lazy Loading** is an essential mechanism in **Assets & Frontend Resources**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Lazy Loading
# In assets_&_frontend_resources:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Lazy Loading** in two sentences using a real company example. |
| Medium | Locate **Lazy Loading** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Lazy Loading**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Lazy Loading** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 56.7 Asset Debugging

**Asset Debugging** is an essential mechanism in **Assets & Frontend Resources**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Asset Debugging
# In assets_&_frontend_resources:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Asset Debugging** in two sentences using a real company example. |
| Medium | Locate **Asset Debugging** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Asset Debugging**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Asset Debugging** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-57"></a>
<a id="phase-57"></a>
# CHAPTER 57 - Extending & Patching the Web Client

**Track:** Owl Framework & Frontend

**WHAT YOU WILL BE ABLE TO DO:** Patch existing Owl components and view controllers with patch(), choose patch over fork, and avoid upgrade-hostile overrides.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 56 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 57.1 Patching Code

**Patching Code** is an essential mechanism in **Extending & Patching the Web Client**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Patching Code
# In extending_&_patching_the_web_client:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Patching Code** in two sentences using a real company example. |
| Medium | Locate **Patching Code** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Patching Code**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Patching Code** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 57.2 Patching Components

**Patching Components** is an essential mechanism in **Extending & Patching the Web Client**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Patching Components
# In extending_&_patching_the_web_client:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Patching Components** in two sentences using a real company example. |
| Medium | Locate **Patching Components** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Patching Components**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Patching Components** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 57.3 Extending Components

**Extending Components** is an essential mechanism in **Extending & Patching the Web Client**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Extending Components
# In extending_&_patching_the_web_client:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Extending Components** in two sentences using a real company example. |
| Medium | Locate **Extending Components** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Extending Components**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Extending Components** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 57.4 Extending Registries

**Extending Registries** is an essential mechanism in **Extending & Patching the Web Client**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Extending Registries
# In extending_&_patching_the_web_client:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Extending Registries** in two sentences using a real company example. |
| Medium | Locate **Extending Registries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Extending Registries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Extending Registries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 57.5 Custom Field Widgets

**Custom Field Widgets** is an essential mechanism in **Extending & Patching the Web Client**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Custom Field Widgets
# In extending_&_patching_the_web_client:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Custom Field Widgets** in two sentences using a real company example. |
| Medium | Locate **Custom Field Widgets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Custom Field Widgets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Custom Field Widgets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 57.6 View Extensions

**View Extensions** is an essential mechanism in **Extending & Patching the Web Client**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating View Extensions
# In extending_&_patching_the_web_client:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **View Extensions** in two sentences using a real company example. |
| Medium | Locate **View Extensions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **View Extensions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **View Extensions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 57.7 Upgrade Safety

**Upgrade Safety** is an essential mechanism in **Extending & Patching the Web Client**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Upgrade Safety
# In extending_&_patching_the_web_client:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Upgrade Safety** in two sentences using a real company example. |
| Medium | Locate **Upgrade Safety** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Upgrade Safety**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Upgrade Safety** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 57.8 When Not to Patch

**When Not to Patch** is an essential mechanism in **Extending & Patching the Web Client**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating When Not to Patch
# In extending_&_patching_the_web_client:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **When Not to Patch** in two sentences using a real company example. |
| Medium | Locate **When Not to Patch** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **When Not to Patch**. |

**WHAT THIS UNLOCKS NEXT:**
Once **When Not to Patch** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-58"></a>
<a id="phase-58"></a>
# CHAPTER 58 - Client Actions & Advanced Frontend

**Track:** Owl Framework & Frontend

**WHAT YOU WILL BE ABLE TO DO:** Register an Owl component as a client action, bind it with ir.actions.client and a menu, and load data through orm/rpc services with loading and error states.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 57 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 58.1 Client Actions

**Client Actions** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Client Actions
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Client Actions** in two sentences using a real company example. |
| Medium | Locate **Client Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Client Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Client Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.2 Action Registry

**Action Registry** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Action Registry
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Action Registry** in two sentences using a real company example. |
| Medium | Locate **Action Registry** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Action Registry**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Action Registry** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.3 OWL Client Components

**OWL Client Components** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating OWL Client Components
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **OWL Client Components** in two sentences using a real company example. |
| Medium | Locate **OWL Client Components** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **OWL Client Components**. |

**WHAT THIS UNLOCKS NEXT:**
Once **OWL Client Components** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.4 Loading Server Data

**Loading Server Data** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Loading Server Data
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Loading Server Data** in two sentences using a real company example. |
| Medium | Locate **Loading Server Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Loading Server Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Loading Server Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.5 Custom Dashboards

**Custom Dashboards** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Custom Dashboards
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Custom Dashboards** in two sentences using a real company example. |
| Medium | Locate **Custom Dashboards** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Custom Dashboards**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Custom Dashboards** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.6 Generic Components

**Generic Components** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Generic Components
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Generic Components** in two sentences using a real company example. |
| Medium | Locate **Generic Components** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Generic Components**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Generic Components** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.7 Error Handling

**Error Handling** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Error Handling
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Error Handling** in two sentences using a real company example. |
| Medium | Locate **Error Handling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Error Handling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Error Handling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.8 Error Boundaries

**Error Boundaries** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Error Boundaries
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Error Boundaries** in two sentences using a real company example. |
| Medium | Locate **Error Boundaries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Error Boundaries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Error Boundaries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.9 Odoo Editor Concepts

**Odoo Editor Concepts** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Editor Concepts
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Editor Concepts** in two sentences using a real company example. |
| Medium | Locate **Odoo Editor Concepts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Editor Concepts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Editor Concepts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.10 Mobile Web APIs

**Mobile Web APIs** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Mobile Web APIs
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Mobile Web APIs** in two sentences using a real company example. |
| Medium | Locate **Mobile Web APIs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Mobile Web APIs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Mobile Web APIs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 58.11 Responsive Odoo UI

**Responsive Odoo UI** is an essential mechanism in **Client Actions & Advanced Frontend**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Responsive Odoo UI
# In client_actions_&_advanced_frontend:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Responsive Odoo UI** in two sentences using a real company example. |
| Medium | Locate **Responsive Odoo UI** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Responsive Odoo UI**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Responsive Odoo UI** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XIV — Real Estate Analytics Owl Dashboard

This is the capstone project for Story XIV. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XIV.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XIV:**
- You have mastered all lessons and concepts in Story XIV.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **FILES, ATTACHMENTS & MEDIA**!

> **Story XIV Complete!** [Continue to Story XV: FILES, ATTACHMENTS & MEDIA](#story-xv)


---
---

# STORY XV — FILES, ATTACHMENTS & MEDIA

**Track:** Attachments & Filestore

*SHA1 disk filestore, binary fields, ir.attachment, and image resizing suites.*

---
<a id="chapter-59"></a>
<a id="phase-59"></a>
# CHAPTER 59 - Attachments & Filestore

**Track:** Attachments & Filestore

**WHAT YOU WILL BE ABLE TO DO:** Work confidently with every topic under Attachments & Filestore — not as a glossary, but as mechanisms you can implement and debug.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 58 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 59.1 ir.attachment

**ir.attachment** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ir.attachment
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ir.attachment** in two sentences using a real company example. |
| Medium | Locate **ir.attachment** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ir.attachment**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ir.attachment** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.2 Binary Fields

**Binary Fields** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Binary Fields
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Binary Fields** in two sentences using a real company example. |
| Medium | Locate **Binary Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Binary Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Binary Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.3 Image Fields

**Image Fields** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Image Fields
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Image Fields** in two sentences using a real company example. |
| Medium | Locate **Image Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Image Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Image Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.4 Database vs Filestore

**Database vs Filestore** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database vs Filestore
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database vs Filestore** in two sentences using a real company example. |
| Medium | Locate **Database vs Filestore** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database vs Filestore**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database vs Filestore** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.5 Attachment Relationships

**Attachment Relationships** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Attachment Relationships
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Attachment Relationships** in two sentences using a real company example. |
| Medium | Locate **Attachment Relationships** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Attachment Relationships**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Attachment Relationships** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.6 Uploads

**Uploads** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Uploads
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Uploads** in two sentences using a real company example. |
| Medium | Locate **Uploads** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Uploads**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Uploads** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.7 Downloads

**Downloads** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Downloads
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Downloads** in two sentences using a real company example. |
| Medium | Locate **Downloads** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Downloads**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Downloads** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.8 Attachment Access

**Attachment Access** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Attachment Access
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Attachment Access** in two sentences using a real company example. |
| Medium | Locate **Attachment Access** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Attachment Access**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Attachment Access** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.9 Attachment Security

**Attachment Security** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Attachment Security
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Attachment Security** in two sentences using a real company example. |
| Medium | Locate **Attachment Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Attachment Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Attachment Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.10 Public / Private Files

**Public / Private Files** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Public / Private Files
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Public / Private Files** in two sentences using a real company example. |
| Medium | Locate **Public / Private Files** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Public / Private Files**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Public / Private Files** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 59.11 LAB — Secure Document Attachment Feature

**LAB — Secure Document Attachment Feature** is an essential mechanism in **Attachments & Filestore**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating LAB — Secure Document Attachment Feature
# In attachments_&_filestore:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **LAB — Secure Document Attachment Feature** in two sentences using a real company example. |
| Medium | Locate **LAB — Secure Document Attachment Feature** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **LAB — Secure Document Attachment Feature**. |

**WHAT THIS UNLOCKS NEXT:**
Once **LAB — Secure Document Attachment Feature** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XV — Document Management & Media Vault

This is the capstone project for Story XV. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XV.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XV:**
- You have mastered all lessons and concepts in Story XV.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **POSTGRESQL & PERFORMANCE**!

> **Story XV Complete!** [Continue to Story XVI: POSTGRESQL & PERFORMANCE](#story-xvi)


---
---

# STORY XVI — POSTGRESQL & PERFORMANCE

**Track:** Performance & Infrastructure

*PostgreSQL tuning, indexing strategies, EXPLAIN ANALYZE, and PgBouncer connection pooling.*

---
<a id="chapter-60"></a>
<a id="phase-60"></a>
# CHAPTER 60 - Odoo Database Structure

**Track:** Performance & Infrastructure

**WHAT YOU WILL BE ABLE TO DO:** Map Odoo models to PostgreSQL tables, recognize ir_* metadata tables, Many2many relation tables, and explain why hand-editing registry rows is dangerous.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 59 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 60.1 Models → Tables

**Models → Tables** is an essential mechanism in **Odoo Database Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Models → Tables
# In odoo_database_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Models → Tables** in two sentences using a real company example. |
| Medium | Locate **Models → Tables** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Models → Tables**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Models → Tables** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 60.2 Fields → Columns

**Fields → Columns** is an essential mechanism in **Odoo Database Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Fields → Columns
# In odoo_database_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Fields → Columns** in two sentences using a real company example. |
| Medium | Locate **Fields → Columns** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Fields → Columns**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Fields → Columns** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 60.3 Many2many Relation Tables

**Many2many Relation Tables** is an essential mechanism in **Odoo Database Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Many2many Relation Tables
# In odoo_database_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Many2many Relation Tables** in two sentences using a real company example. |
| Medium | Locate **Many2many Relation Tables** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Many2many Relation Tables**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Many2many Relation Tables** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 60.4 Foreign Keys

**Foreign Keys** is an essential mechanism in **Odoo Database Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Foreign Keys
# In odoo_database_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Foreign Keys** in two sentences using a real company example. |
| Medium | Locate **Foreign Keys** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Foreign Keys**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Foreign Keys** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 60.5 Metadata Tables

**Metadata Tables** is an essential mechanism in **Odoo Database Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Metadata Tables
# In odoo_database_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Metadata Tables** in two sentences using a real company example. |
| Medium | Locate **Metadata Tables** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Metadata Tables**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Metadata Tables** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 60.6 ir_model

**ir_model** is an essential mechanism in **Odoo Database Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ir_model
# In odoo_database_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ir_model** in two sentences using a real company example. |
| Medium | Locate **ir_model** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ir_model**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ir_model** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 60.7 ir_model_fields

**ir_model_fields** is an essential mechanism in **Odoo Database Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ir_model_fields
# In odoo_database_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ir_model_fields** in two sentences using a real company example. |
| Medium | Locate **ir_model_fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ir_model_fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ir_model_fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 60.8 Inspecting the Schema

**Inspecting the Schema** is an essential mechanism in **Odoo Database Structure**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Inspecting the Schema
# In odoo_database_structure:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Inspecting the Schema** in two sentences using a real company example. |
| Medium | Locate **Inspecting the Schema** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Inspecting the Schema**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Inspecting the Schema** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-61"></a>
<a id="phase-61"></a>
# CHAPTER 61 - PostgreSQL for Odoo Developers

**Track:** Performance & Infrastructure

**WHAT YOU WILL BE ABLE TO DO:** Use psql (or an equivalent) to inspect schemas, read basic query results, and explain the boundary between DBA SQL and Odoo ORM responsibilities.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 60 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 61.1 SELECT

**SELECT** is an essential mechanism in **PostgreSQL for Odoo Developers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating SELECT
# In postgresql_for_odoo_developers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **SELECT** in two sentences using a real company example. |
| Medium | Locate **SELECT** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **SELECT**. |

**WHAT THIS UNLOCKS NEXT:**
Once **SELECT** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 61.2 JOIN

**JOIN** is an essential mechanism in **PostgreSQL for Odoo Developers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating JOIN
# In postgresql_for_odoo_developers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **JOIN** in two sentences using a real company example. |
| Medium | Locate **JOIN** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **JOIN**. |

**WHAT THIS UNLOCKS NEXT:**
Once **JOIN** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 61.3 GROUP BY

**GROUP BY** is an essential mechanism in **PostgreSQL for Odoo Developers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating GROUP BY
# In postgresql_for_odoo_developers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **GROUP BY** in two sentences using a real company example. |
| Medium | Locate **GROUP BY** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **GROUP BY**. |

**WHAT THIS UNLOCKS NEXT:**
Once **GROUP BY** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 61.4 Aggregates

**Aggregates** is an essential mechanism in **PostgreSQL for Odoo Developers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Aggregates
# In postgresql_for_odoo_developers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Aggregates** in two sentences using a real company example. |
| Medium | Locate **Aggregates** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Aggregates**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Aggregates** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 61.5 CTE Concepts

**CTE Concepts** is an essential mechanism in **PostgreSQL for Odoo Developers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CTE Concepts
# In postgresql_for_odoo_developers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CTE Concepts** in two sentences using a real company example. |
| Medium | Locate **CTE Concepts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CTE Concepts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CTE Concepts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 61.6 Constraints

**Constraints** is an essential mechanism in **PostgreSQL for Odoo Developers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Constraints
# In postgresql_for_odoo_developers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Constraints** in two sentences using a real company example. |
| Medium | Locate **Constraints** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Constraints**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Constraints** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 61.7 psql

**psql** is an essential mechanism in **PostgreSQL for Odoo Developers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating psql
# In postgresql_for_odoo_developers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **psql** in two sentences using a real company example. |
| Medium | Locate **psql** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **psql**. |

**WHAT THIS UNLOCKS NEXT:**
Once **psql** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 61.8 Database Inspection

**Database Inspection** is an essential mechanism in **PostgreSQL for Odoo Developers**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database Inspection
# In postgresql_for_odoo_developers:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database Inspection** in two sentences using a real company example. |
| Medium | Locate **Database Inspection** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database Inspection**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database Inspection** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-62"></a>
<a id="phase-62"></a>
# CHAPTER 62 - Transactions & Concurrency

**Track:** Performance & Infrastructure

**WHAT YOU WILL BE ABLE TO DO:** Explain how an Odoo request maps to a database transaction, what flushing means, and how concurrent updates produce lock waits or inconsistent reads — without inventing DIY locking everywhere.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 61 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 62.1 Transactions

**Transactions** is an essential mechanism in **Transactions & Concurrency**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Transactions
# In transactions_&_concurrency:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Transactions** in two sentences using a real company example. |
| Medium | Locate **Transactions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Transactions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Transactions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 62.2 Commit

**Commit** is an essential mechanism in **Transactions & Concurrency**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Commit
# In transactions_&_concurrency:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Commit** in two sentences using a real company example. |
| Medium | Locate **Commit** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Commit**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Commit** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 62.3 Rollback

**Rollback** is an essential mechanism in **Transactions & Concurrency**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Rollback
# In transactions_&_concurrency:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Rollback** in two sentences using a real company example. |
| Medium | Locate **Rollback** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Rollback**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Rollback** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 62.4 Isolation

**Isolation** is an essential mechanism in **Transactions & Concurrency**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Isolation
# In transactions_&_concurrency:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Isolation** in two sentences using a real company example. |
| Medium | Locate **Isolation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Isolation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Isolation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 62.5 Locks

**Locks** is an essential mechanism in **Transactions & Concurrency**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Locks
# In transactions_&_concurrency:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Locks** in two sentences using a real company example. |
| Medium | Locate **Locks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Locks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Locks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 62.6 Deadlocks

**Deadlocks** is an essential mechanism in **Transactions & Concurrency**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Deadlocks
# In transactions_&_concurrency:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Deadlocks** in two sentences using a real company example. |
| Medium | Locate **Deadlocks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Deadlocks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Deadlocks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 62.7 Concurrent Updates

**Concurrent Updates** is an essential mechanism in **Transactions & Concurrency**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Concurrent Updates
# In transactions_&_concurrency:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Concurrent Updates** in two sentences using a real company example. |
| Medium | Locate **Concurrent Updates** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Concurrent Updates**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Concurrent Updates** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 62.8 Savepoints

**Savepoints** is an essential mechanism in **Transactions & Concurrency**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Savepoints
# In transactions_&_concurrency:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Savepoints** in two sentences using a real company example. |
| Medium | Locate **Savepoints** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Savepoints**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Savepoints** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-63"></a>
<a id="phase-63"></a>
# CHAPTER 63 - Indexes & Query Plans

**Track:** Performance & Infrastructure

**WHAT YOU WILL BE ABLE TO DO:** Read a basic EXPLAIN (ANALYZE, BUFFERS) plan, relate slow domains to missing indexes, and add index=True / SQL indexes deliberately — not on every column.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 62 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 63.1 Indexes

**Indexes** is an essential mechanism in **Indexes & Query Plans**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Indexes
# In indexes_&_query_plans:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Indexes** in two sentences using a real company example. |
| Medium | Locate **Indexes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Indexes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Indexes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 63.2 B-Tree Intuition

**B-Tree Intuition** is an essential mechanism in **Indexes & Query Plans**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating B-Tree Intuition
# In indexes_&_query_plans:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **B-Tree Intuition** in two sentences using a real company example. |
| Medium | Locate **B-Tree Intuition** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **B-Tree Intuition**. |

**WHAT THIS UNLOCKS NEXT:**
Once **B-Tree Intuition** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 63.3 Selectivity

**Selectivity** is an essential mechanism in **Indexes & Query Plans**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Selectivity
# In indexes_&_query_plans:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Selectivity** in two sentences using a real company example. |
| Medium | Locate **Selectivity** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Selectivity**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Selectivity** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 63.4 EXPLAIN

**EXPLAIN** is an essential mechanism in **Indexes & Query Plans**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating EXPLAIN
# In indexes_&_query_plans:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **EXPLAIN** in two sentences using a real company example. |
| Medium | Locate **EXPLAIN** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **EXPLAIN**. |

**WHAT THIS UNLOCKS NEXT:**
Once **EXPLAIN** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 63.5 EXPLAIN ANALYZE

**EXPLAIN ANALYZE** is an essential mechanism in **Indexes & Query Plans**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating EXPLAIN ANALYZE
# In indexes_&_query_plans:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **EXPLAIN ANALYZE** in two sentences using a real company example. |
| Medium | Locate **EXPLAIN ANALYZE** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **EXPLAIN ANALYZE**. |

**WHAT THIS UNLOCKS NEXT:**
Once **EXPLAIN ANALYZE** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 63.6 Query Plans

**Query Plans** is an essential mechanism in **Indexes & Query Plans**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Query Plans
# In indexes_&_query_plans:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Query Plans** in two sentences using a real company example. |
| Medium | Locate **Query Plans** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Query Plans**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Query Plans** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 63.7 Sequential Scan

**Sequential Scan** is an essential mechanism in **Indexes & Query Plans**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Sequential Scan
# In indexes_&_query_plans:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Sequential Scan** in two sentences using a real company example. |
| Medium | Locate **Sequential Scan** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Sequential Scan**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Sequential Scan** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 63.8 When to Add an Index

**When to Add an Index** is an essential mechanism in **Indexes & Query Plans**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating When to Add an Index
# In indexes_&_query_plans:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **When to Add an Index** in two sentences using a real company example. |
| Medium | Locate **When to Add an Index** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **When to Add an Index**. |

**WHAT THIS UNLOCKS NEXT:**
Once **When to Add an Index** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-64"></a>
<a id="phase-64"></a>
# CHAPTER 64 - ORM Performance

**Track:** Performance & Infrastructure

**WHAT YOU WILL BE ABLE TO DO:** Spot and fix classic Odoo N+1 patterns, use mapped/filtered wisely, prefetch intentionally, paginate searches, and know when read_group beats loading every row.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 63 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 64.1 Query Counts

**Query Counts** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Query Counts
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Query Counts** in two sentences using a real company example. |
| Medium | Locate **Query Counts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Query Counts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Query Counts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 64.2 Batch Operations

**Batch Operations** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Batch Operations
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Batch Operations** in two sentences using a real company example. |
| Medium | Locate **Batch Operations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Batch Operations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Batch Operations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 64.3 Prefetch

**Prefetch** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Prefetch
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Prefetch** in two sentences using a real company example. |
| Medium | Locate **Prefetch** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Prefetch**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Prefetch** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 64.4 Cache

**Cache** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cache
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cache** in two sentences using a real company example. |
| Medium | Locate **Cache** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cache**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cache** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 64.5 N+1 Problems

**N+1 Problems** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating N+1 Problems
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **N+1 Problems** in two sentences using a real company example. |
| Medium | Locate **N+1 Problems** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **N+1 Problems**. |

**WHAT THIS UNLOCKS NEXT:**
Once **N+1 Problems** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 64.6 Computed Field Costs

**Computed Field Costs** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Computed Field Costs
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Computed Field Costs** in two sentences using a real company example. |
| Medium | Locate **Computed Field Costs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Computed Field Costs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Computed Field Costs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 64.7 Stored Computations

**Stored Computations** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Stored Computations
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Stored Computations** in two sentences using a real company example. |
| Medium | Locate **Stored Computations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Stored Computations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Stored Computations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 64.8 Efficient Domains

**Efficient Domains** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Efficient Domains
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Efficient Domains** in two sentences using a real company example. |
| Medium | Locate **Efficient Domains** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Efficient Domains**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Efficient Domains** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 64.9 Algorithms & Complexity

**Algorithms & Complexity** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Algorithms & Complexity
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Algorithms & Complexity** in two sentences using a real company example. |
| Medium | Locate **Algorithms & Complexity** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Algorithms & Complexity**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Algorithms & Complexity** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 64.10 Database Indexes from Models

**Database Indexes from Models** is an essential mechanism in **ORM Performance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database Indexes from Models
# In orm_performance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database Indexes from Models** in two sentences using a real company example. |
| Medium | Locate **Database Indexes from Models** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database Indexes from Models**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database Indexes from Models** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-65"></a>
<a id="phase-65"></a>
# CHAPTER 65 - Profiling & Optimization

**Track:** Performance & Infrastructure

**WHAT YOU WILL BE ABLE TO DO:** Enable Odoo’s profiler, read speedscope-oriented results at a practical level, combine SQL logs with EXPLAIN, and apply a measure → fix → remeasure loop.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 64 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 65.1 Odoo Profiler

**Odoo Profiler** is an essential mechanism in **Profiling & Optimization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Profiler
# In profiling_&_optimization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Profiler** in two sentences using a real company example. |
| Medium | Locate **Odoo Profiler** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Profiler**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Profiler** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 65.2 SQL Profiling

**SQL Profiling** is an essential mechanism in **Profiling & Optimization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating SQL Profiling
# In profiling_&_optimization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **SQL Profiling** in two sentences using a real company example. |
| Medium | Locate **SQL Profiling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **SQL Profiling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **SQL Profiling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 65.3 Query Collector

**Query Collector** is an essential mechanism in **Profiling & Optimization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Query Collector
# In profiling_&_optimization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Query Collector** in two sentences using a real company example. |
| Medium | Locate **Query Collector** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Query Collector**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Query Collector** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 65.4 Periodic Collector

**Periodic Collector** is an essential mechanism in **Profiling & Optimization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Periodic Collector
# In profiling_&_optimization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Periodic Collector** in two sentences using a real company example. |
| Medium | Locate **Periodic Collector** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Periodic Collector**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Periodic Collector** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 65.5 Finding Bottlenecks

**Finding Bottlenecks** is an essential mechanism in **Profiling & Optimization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Finding Bottlenecks
# In profiling_&_optimization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Finding Bottlenecks** in two sentences using a real company example. |
| Medium | Locate **Finding Bottlenecks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Finding Bottlenecks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Finding Bottlenecks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 65.6 Measuring Before Optimizing

**Measuring Before Optimizing** is an essential mechanism in **Profiling & Optimization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Measuring Before Optimizing
# In profiling_&_optimization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Measuring Before Optimizing** in two sentences using a real company example. |
| Medium | Locate **Measuring Before Optimizing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Measuring Before Optimizing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Measuring Before Optimizing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 65.7 Benchmarking

**Benchmarking** is an essential mechanism in **Profiling & Optimization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Benchmarking
# In profiling_&_optimization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Benchmarking** in two sentences using a real company example. |
| Medium | Locate **Benchmarking** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Benchmarking**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Benchmarking** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 65.8 Performance Regression

**Performance Regression** is an essential mechanism in **Profiling & Optimization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Performance Regression
# In profiling_&_optimization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Performance Regression** in two sentences using a real company example. |
| Medium | Locate **Performance Regression** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Performance Regression**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Performance Regression** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XVI — Database Performance & Optimization Suite

This is the capstone project for Story XVI. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XVI.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XVI:**
- You have mastered all lessons and concepts in Story XVI.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **TESTING & DEBUGGING**!

> **Story XVI Complete!** [Continue to Story XVII: TESTING & DEBUGGING](#story-xvii)


---
---

# STORY XVII — TESTING & DEBUGGING

**Track:** Testing & Tooling

*TransactionCase unit tests, HttpCase controller tests, browser UI tours, and CI/CD pipelines.*

---
<a id="chapter-66"></a>
<a id="phase-66"></a>
# CHAPTER 66 - Odoo Logging & Debugging

**Track:** Testing & Tooling

**WHAT YOU WILL BE ABLE TO DO:** Configure meaningful log levels, place strategic logs, use debugger breakpoints on Python paths, and debug AccessError / ValidationError without cargo-cult printing.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 65 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 66.1 Log Levels

**Log Levels** is an essential mechanism in **Odoo Logging & Debugging**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Log Levels
# In odoo_logging_&_debugging:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Log Levels** in two sentences using a real company example. |
| Medium | Locate **Log Levels** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Log Levels**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Log Levels** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 66.2 Server Logs

**Server Logs** is an essential mechanism in **Odoo Logging & Debugging**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Server Logs
# In odoo_logging_&_debugging:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Server Logs** in two sentences using a real company example. |
| Medium | Locate **Server Logs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Server Logs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Server Logs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 66.3 Stack Traces

**Stack Traces** is an essential mechanism in **Odoo Logging & Debugging**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Stack Traces
# In odoo_logging_&_debugging:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Stack Traces** in two sentences using a real company example. |
| Medium | Locate **Stack Traces** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Stack Traces**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Stack Traces** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 66.4 Python Debugger

**Python Debugger** is an essential mechanism in **Odoo Logging & Debugging**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Python Debugger
# In odoo_logging_&_debugging:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Python Debugger** in two sentences using a real company example. |
| Medium | Locate **Python Debugger** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Python Debugger**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Python Debugger** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 66.5 Breakpoints

**Breakpoints** is an essential mechanism in **Odoo Logging & Debugging**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Breakpoints
# In odoo_logging_&_debugging:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Breakpoints** in two sentences using a real company example. |
| Medium | Locate **Breakpoints** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Breakpoints**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Breakpoints** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 66.6 Odoo Shell

**Odoo Shell** is an essential mechanism in **Odoo Logging & Debugging**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Shell
# In odoo_logging_&_debugging:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Shell** in two sentences using a real company example. |
| Medium | Locate **Odoo Shell** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Shell**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Shell** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 66.7 Developer Tools

**Developer Tools** is an essential mechanism in **Odoo Logging & Debugging**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Developer Tools
# In odoo_logging_&_debugging:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Developer Tools** in two sentences using a real company example. |
| Medium | Locate **Developer Tools** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Developer Tools**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Developer Tools** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 66.8 Reproducing Bugs

**Reproducing Bugs** is an essential mechanism in **Odoo Logging & Debugging**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reproducing Bugs
# In odoo_logging_&_debugging:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reproducing Bugs** in two sentences using a real company example. |
| Medium | Locate **Reproducing Bugs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reproducing Bugs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reproducing Bugs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 66.9 Root Cause Analysis

**Root Cause Analysis** is an essential mechanism in **Odoo Logging & Debugging**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Root Cause Analysis
# In odoo_logging_&_debugging:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Root Cause Analysis** in two sentences using a real company example. |
| Medium | Locate **Root Cause Analysis** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Root Cause Analysis**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Root Cause Analysis** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-67"></a>
<a id="phase-67"></a>
# CHAPTER 67 - Python Tests

**Track:** Testing & Tooling

**WHAT YOU WILL BE ABLE TO DO:** Structure a tests/ package, write TransactionCase tests with assertions, understand savepoint isolation between methods, and tag tests for install vs post-install runs.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 66 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 67.1 Test Module Structure

**Test Module Structure** is an essential mechanism in **Python Tests**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Test Module Structure
# In python_tests:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Test Module Structure** in two sentences using a real company example. |
| Medium | Locate **Test Module Structure** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Test Module Structure**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Test Module Structure** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 67.2 TransactionCase

**TransactionCase** is an essential mechanism in **Python Tests**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating TransactionCase
# In python_tests:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **TransactionCase** in two sentences using a real company example. |
| Medium | Locate **TransactionCase** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **TransactionCase**. |

**WHAT THIS UNLOCKS NEXT:**
Once **TransactionCase** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 67.3 Savepoint / Transaction Concepts

**Savepoint / Transaction Concepts** is an essential mechanism in **Python Tests**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Savepoint / Transaction Concepts
# In python_tests:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Savepoint / Transaction Concepts** in two sentences using a real company example. |
| Medium | Locate **Savepoint / Transaction Concepts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Savepoint / Transaction Concepts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Savepoint / Transaction Concepts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 67.4 Test Data

**Test Data** is an essential mechanism in **Python Tests**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Test Data
# In python_tests:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Test Data** in two sentences using a real company example. |
| Medium | Locate **Test Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Test Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Test Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 67.5 setUp()

**setUp()** is an essential mechanism in **Python Tests**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating setUp()
# In python_tests:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **setUp()** in two sentences using a real company example. |
| Medium | Locate **setUp()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **setUp()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **setUp()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 67.6 Assertions

**Assertions** is an essential mechanism in **Python Tests**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Assertions
# In python_tests:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Assertions** in two sentences using a real company example. |
| Medium | Locate **Assertions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Assertions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Assertions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 67.7 Test Tags

**Test Tags** is an essential mechanism in **Python Tests**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Test Tags
# In python_tests:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Test Tags** in two sentences using a real company example. |
| Medium | Locate **Test Tags** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Test Tags**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Test Tags** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 67.8 Running Selected Tests

**Running Selected Tests** is an essential mechanism in **Python Tests**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Running Selected Tests
# In python_tests:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Running Selected Tests** in two sentences using a real company example. |
| Medium | Locate **Running Selected Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Running Selected Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Running Selected Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-68"></a>
<a id="phase-68"></a>
# CHAPTER 68 - Testing Business Logic

**Track:** Testing & Tooling

**WHAT YOU WILL BE ABLE TO DO:** Design tests for state transitions, constraints, computes, and wizards so business invariants stay enforced under refactor.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 67 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 68.1 CRUD Tests

**CRUD Tests** is an essential mechanism in **Testing Business Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CRUD Tests
# In testing_business_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CRUD Tests** in two sentences using a real company example. |
| Medium | Locate **CRUD Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CRUD Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CRUD Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 68.2 Computed Field Tests

**Computed Field Tests** is an essential mechanism in **Testing Business Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Computed Field Tests
# In testing_business_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Computed Field Tests** in two sentences using a real company example. |
| Medium | Locate **Computed Field Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Computed Field Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Computed Field Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 68.3 Constraint Tests

**Constraint Tests** is an essential mechanism in **Testing Business Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Constraint Tests
# In testing_business_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Constraint Tests** in two sentences using a real company example. |
| Medium | Locate **Constraint Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Constraint Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Constraint Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 68.4 Workflow Tests

**Workflow Tests** is an essential mechanism in **Testing Business Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Workflow Tests
# In testing_business_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Workflow Tests** in two sentences using a real company example. |
| Medium | Locate **Workflow Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Workflow Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Workflow Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 68.5 Cron Tests

**Cron Tests** is an essential mechanism in **Testing Business Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cron Tests
# In testing_business_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cron Tests** in two sentences using a real company example. |
| Medium | Locate **Cron Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cron Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cron Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 68.6 Edge Cases

**Edge Cases** is an essential mechanism in **Testing Business Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Edge Cases
# In testing_business_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Edge Cases** in two sentences using a real company example. |
| Medium | Locate **Edge Cases** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Edge Cases**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Edge Cases** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 68.7 Regression Tests

**Regression Tests** is an essential mechanism in **Testing Business Logic**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Regression Tests
# In testing_business_logic:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Regression Tests** in two sentences using a real company example. |
| Medium | Locate **Regression Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Regression Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Regression Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-69"></a>
<a id="phase-69"></a>
# CHAPTER 69 - Testing Security

**Track:** Testing & Tooling

**WHAT YOU WILL BE ABLE TO DO:** Write tests that prove groups can or cannot CRUD models, that record rules isolate rows, and that AccessError appears when it should — including multi-company gotchas.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 68 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 69.1 User Context

**User Context** is an essential mechanism in **Testing Security**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating User Context
# In testing_security:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **User Context** in two sentences using a real company example. |
| Medium | Locate **User Context** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **User Context**. |

**WHAT THIS UNLOCKS NEXT:**
Once **User Context** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 69.2 ACL Tests

**ACL Tests** is an essential mechanism in **Testing Security**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ACL Tests
# In testing_security:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ACL Tests** in two sentences using a real company example. |
| Medium | Locate **ACL Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ACL Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ACL Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 69.3 Record Rule Tests

**Record Rule Tests** is an essential mechanism in **Testing Security**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Record Rule Tests
# In testing_security:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Record Rule Tests** in two sentences using a real company example. |
| Medium | Locate **Record Rule Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Record Rule Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Record Rule Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 69.4 sudo() Tests

**sudo() Tests** is an essential mechanism in **Testing Security**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating sudo() Tests
# In testing_security:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **sudo() Tests** in two sentences using a real company example. |
| Medium | Locate **sudo() Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **sudo() Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **sudo() Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 69.5 Multi-Company Tests

**Multi-Company Tests** is an essential mechanism in **Testing Security**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Multi-Company Tests
# In testing_security:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Multi-Company Tests** in two sentences using a real company example. |
| Medium | Locate **Multi-Company Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Multi-Company Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Multi-Company Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 69.6 Portal Access Tests

**Portal Access Tests** is an essential mechanism in **Testing Security**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Portal Access Tests
# In testing_security:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Portal Access Tests** in two sentences using a real company example. |
| Medium | Locate **Portal Access Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Portal Access Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Portal Access Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 69.7 Permission Regression

**Permission Regression** is an essential mechanism in **Testing Security**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Permission Regression
# In testing_security:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Permission Regression** in two sentences using a real company example. |
| Medium | Locate **Permission Regression** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Permission Regression**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Permission Regression** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-70"></a>
<a id="phase-70"></a>
# CHAPTER 70 - Web & Frontend Testing

**Track:** Testing & Tooling

**WHAT YOU WILL BE ABLE TO DO:** Use HttpCase / tour-style and controller tests at a practical level, know when JS unit tests vs tours vs Python tests fit, and protect critical web/portal paths.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 69 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 70.1 HTTP Tests

**HTTP Tests** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating HTTP Tests
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **HTTP Tests** in two sentences using a real company example. |
| Medium | Locate **HTTP Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **HTTP Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **HTTP Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.2 Controller Tests

**Controller Tests** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Controller Tests
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Controller Tests** in two sentences using a real company example. |
| Medium | Locate **Controller Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Controller Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Controller Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.3 browser_js

**browser_js** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating browser_js
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **browser_js** in two sentences using a real company example. |
| Medium | Locate **browser_js** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **browser_js**. |

**WHAT THIS UNLOCKS NEXT:**
Once **browser_js** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.4 Test Tours

**Test Tours** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Test Tours
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Test Tours** in two sentences using a real company example. |
| Medium | Locate **Test Tours** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Test Tours**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Test Tours** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.5 Integration Tours

**Integration Tours** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Integration Tours
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Integration Tours** in two sentences using a real company example. |
| Medium | Locate **Integration Tours** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Integration Tours**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Integration Tours** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.6 JavaScript Unit Tests

**JavaScript Unit Tests** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating JavaScript Unit Tests
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **JavaScript Unit Tests** in two sentences using a real company example. |
| Medium | Locate **JavaScript Unit Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **JavaScript Unit Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **JavaScript Unit Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.7 HOOT

**HOOT** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating HOOT
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **HOOT** in two sentences using a real company example. |
| Medium | Locate **HOOT** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **HOOT**. |

**WHAT THIS UNLOCKS NEXT:**
Once **HOOT** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.8 @odoo/hoot-dom

**@odoo/hoot-dom** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating @odoo/hoot-dom
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **@odoo/hoot-dom** in two sentences using a real company example. |
| Medium | Locate **@odoo/hoot-dom** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **@odoo/hoot-dom**. |

**WHAT THIS UNLOCKS NEXT:**
Once **@odoo/hoot-dom** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.9 Web Test Helpers

**Web Test Helpers** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Web Test Helpers
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Web Test Helpers** in two sentences using a real company example. |
| Medium | Locate **Web Test Helpers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Web Test Helpers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Web Test Helpers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.10 Mock Server

**Mock Server** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Mock Server
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Mock Server** in two sentences using a real company example. |
| Medium | Locate **Mock Server** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Mock Server**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Mock Server** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.11 Mocking RPC

**Mocking RPC** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Mocking RPC
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Mocking RPC** in two sentences using a real company example. |
| Medium | Locate **Mocking RPC** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Mocking RPC**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Mocking RPC** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 70.12 End-to-End Flows

**End-to-End Flows** is an essential mechanism in **Web & Frontend Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating End-to-End Flows
# In web_&_frontend_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **End-to-End Flows** in two sentences using a real company example. |
| Medium | Locate **End-to-End Flows** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **End-to-End Flows**. |

**WHAT THIS UNLOCKS NEXT:**
Once **End-to-End Flows** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-71"></a>
<a id="phase-71"></a>
# CHAPTER 71 - Performance & Regression Testing

**Track:** Testing & Tooling

**WHAT YOU WILL BE ABLE TO DO:** Work confidently with every topic under Performance & Regression Testing — not as a glossary, but as mechanisms you can implement and debug.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 70 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 71.1 Query Count Tests

**Query Count Tests** is an essential mechanism in **Performance & Regression Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Query Count Tests
# In performance_&_regression_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Query Count Tests** in two sentences using a real company example. |
| Medium | Locate **Query Count Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Query Count Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Query Count Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 71.2 assertQueryCount()

**assertQueryCount()** is an essential mechanism in **Performance & Regression Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating assertQueryCount()
# In performance_&_regression_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **assertQueryCount()** in two sentences using a real company example. |
| Medium | Locate **assertQueryCount()** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **assertQueryCount()**. |

**WHAT THIS UNLOCKS NEXT:**
Once **assertQueryCount()** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 71.3 --log-sql

**--log-sql** is an essential mechanism in **Performance & Regression Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating --log-sql
# In performance_&_regression_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **--log-sql** in two sentences using a real company example. |
| Medium | Locate **--log-sql** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **--log-sql**. |

**WHAT THIS UNLOCKS NEXT:**
Once **--log-sql** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 71.4 Performance Budgets

**Performance Budgets** is an essential mechanism in **Performance & Regression Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Performance Budgets
# In performance_&_regression_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Performance Budgets** in two sentences using a real company example. |
| Medium | Locate **Performance Budgets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Performance Budgets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Performance Budgets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 71.5 Regression Detection

**Regression Detection** is an essential mechanism in **Performance & Regression Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Regression Detection
# In performance_&_regression_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Regression Detection** in two sentences using a real company example. |
| Medium | Locate **Regression Detection** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Regression Detection**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Regression Detection** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 71.6 Repeatable Benchmarks

**Repeatable Benchmarks** is an essential mechanism in **Performance & Regression Testing**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Repeatable Benchmarks
# In performance_&_regression_testing:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Repeatable Benchmarks** in two sentences using a real company example. |
| Medium | Locate **Repeatable Benchmarks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Repeatable Benchmarks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Repeatable Benchmarks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XVII — Comprehensive Automated Test Suite

This is the capstone project for Story XVII. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XVII.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XVII:**
- You have mastered all lessons and concepts in Story XVII.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **CLI & DEVELOPER TOOLING**!

> **Story XVII Complete!** [Continue to Story XVIII: CLI & DEVELOPER TOOLING](#story-xviii)


---
---

# STORY XVIII — CLI & DEVELOPER TOOLING

**Track:** Developer Automation

*odoo-bin flags, interactive Python shell, module scaffolding, and web developer mode.*

---
<a id="chapter-72"></a>
<a id="phase-72"></a>
# CHAPTER 72 - Odoo CLI & Developer Commands

**Track:** Developer Automation

**WHAT YOU WILL BE ABLE TO DO:** Work confidently with every topic under Odoo CLI & Developer Commands — not as a glossary, but as mechanisms you can implement and debug.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 71 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 72.1 odoo-bin / odoo

**odoo-bin / odoo** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating odoo-bin / odoo
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **odoo-bin / odoo** in two sentences using a real company example. |
| Medium | Locate **odoo-bin / odoo** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **odoo-bin / odoo**. |

**WHAT THIS UNLOCKS NEXT:**
Once **odoo-bin / odoo** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.2 Configuration File

**Configuration File** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Configuration File
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Configuration File** in two sentences using a real company example. |
| Medium | Locate **Configuration File** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Configuration File**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Configuration File** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.3 Database Selection

**Database Selection** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database Selection
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database Selection** in two sentences using a real company example. |
| Medium | Locate **Database Selection** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database Selection**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database Selection** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.4 -i Install

**-i Install** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating -i Install
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **-i Install** in two sentences using a real company example. |
| Medium | Locate **-i Install** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **-i Install**. |

**WHAT THIS UNLOCKS NEXT:**
Once **-i Install** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.5 -u Upgrade

**-u Upgrade** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating -u Upgrade
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **-u Upgrade** in two sentences using a real company example. |
| Medium | Locate **-u Upgrade** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **-u Upgrade**. |

**WHAT THIS UNLOCKS NEXT:**
Once **-u Upgrade** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.6 --addons-path

**--addons-path** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating --addons-path
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **--addons-path** in two sentences using a real company example. |
| Medium | Locate **--addons-path** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **--addons-path**. |

**WHAT THIS UNLOCKS NEXT:**
Once **--addons-path** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.7 --dev

**--dev** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating --dev
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **--dev** in two sentences using a real company example. |
| Medium | Locate **--dev** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **--dev**. |

**WHAT THIS UNLOCKS NEXT:**
Once **--dev** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.8 --log-level

**--log-level** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating --log-level
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **--log-level** in two sentences using a real company example. |
| Medium | Locate **--log-level** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **--log-level**. |

**WHAT THIS UNLOCKS NEXT:**
Once **--log-level** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.9 --log-sql

**--log-sql** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating --log-sql
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **--log-sql** in two sentences using a real company example. |
| Medium | Locate **--log-sql** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **--log-sql**. |

**WHAT THIS UNLOCKS NEXT:**
Once **--log-sql** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.10 --test-enable

**--test-enable** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating --test-enable
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **--test-enable** in two sentences using a real company example. |
| Medium | Locate **--test-enable** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **--test-enable**. |

**WHAT THIS UNLOCKS NEXT:**
Once **--test-enable** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.11 --test-tags

**--test-tags** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating --test-tags
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **--test-tags** in two sentences using a real company example. |
| Medium | Locate **--test-tags** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **--test-tags**. |

**WHAT THIS UNLOCKS NEXT:**
Once **--test-tags** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.12 --stop-after-init

**--stop-after-init** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating --stop-after-init
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **--stop-after-init** in two sentences using a real company example. |
| Medium | Locate **--stop-after-init** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **--stop-after-init**. |

**WHAT THIS UNLOCKS NEXT:**
Once **--stop-after-init** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.13 shell

**shell** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating shell
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **shell** in two sentences using a real company example. |
| Medium | Locate **shell** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **shell**. |

**WHAT THIS UNLOCKS NEXT:**
Once **shell** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.14 scaffold

**scaffold** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating scaffold
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **scaffold** in two sentences using a real company example. |
| Medium | Locate **scaffold** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **scaffold**. |

**WHAT THIS UNLOCKS NEXT:**
Once **scaffold** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 72.15 LAB — Complete CLI Development Workflow

**LAB — Complete CLI Development Workflow** is an essential mechanism in **Odoo CLI & Developer Commands**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating LAB — Complete CLI Development Workflow
# In odoo_cli_&_developer_commands:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **LAB — Complete CLI Development Workflow** in two sentences using a real company example. |
| Medium | Locate **LAB — Complete CLI Development Workflow** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **LAB — Complete CLI Development Workflow**. |

**WHAT THIS UNLOCKS NEXT:**
Once **LAB — Complete CLI Development Workflow** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XVIII — Developer CLI & Automation Toolkit

This is the capstone project for Story XVIII. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XVIII.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XVIII:**
- You have mastered all lessons and concepts in Story XVIII.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **DEPLOYMENT & OPERATIONS**!

> **Story XVIII Complete!** [Continue to Story XIX: DEPLOYMENT & OPERATIONS](#story-xix)


---
---

# STORY XIX — DEPLOYMENT & OPERATIONS

**Track:** Deployment & Operations

*Production Docker stacks, Nginx reverse proxy, systemd services, backups, and monitoring.*

---
<a id="chapter-73"></a>
<a id="phase-73"></a>
# CHAPTER 73 - Odoo Configuration

**Track:** Deployment & Operations

**WHAT YOU WILL BE ABLE TO DO:** Author a production-minded odoo.conf (or equivalent CLI flags): database connection, addons_path, admin_passwd, dbfilter, logging, data/filestore paths, and the difference between “works on my machine” and “safe on the internet.”.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 72 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 73.1 odoo.conf

**odoo.conf** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating odoo.conf
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **odoo.conf** in two sentences using a real company example. |
| Medium | Locate **odoo.conf** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **odoo.conf**. |

**WHAT THIS UNLOCKS NEXT:**
Once **odoo.conf** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 73.2 addons_path

**addons_path** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating addons_path
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **addons_path** in two sentences using a real company example. |
| Medium | Locate **addons_path** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **addons_path**. |

**WHAT THIS UNLOCKS NEXT:**
Once **addons_path** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 73.3 db_host

**db_host** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating db_host
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **db_host** in two sentences using a real company example. |
| Medium | Locate **db_host** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **db_host**. |

**WHAT THIS UNLOCKS NEXT:**
Once **db_host** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 73.4 db_port

**db_port** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating db_port
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **db_port** in two sentences using a real company example. |
| Medium | Locate **db_port** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **db_port**. |

**WHAT THIS UNLOCKS NEXT:**
Once **db_port** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 73.5 db_user

**db_user** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating db_user
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **db_user** in two sentences using a real company example. |
| Medium | Locate **db_user** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **db_user**. |

**WHAT THIS UNLOCKS NEXT:**
Once **db_user** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 73.6 Database Filters

**Database Filters** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database Filters
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database Filters** in two sentences using a real company example. |
| Medium | Locate **Database Filters** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database Filters**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database Filters** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 73.7 Logging

**Logging** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Logging
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Logging** in two sentences using a real company example. |
| Medium | Locate **Logging** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Logging**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Logging** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 73.8 Proxy Mode

**Proxy Mode** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Proxy Mode
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Proxy Mode** in two sentences using a real company example. |
| Medium | Locate **Proxy Mode** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Proxy Mode**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Proxy Mode** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 73.9 Secrets

**Secrets** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Secrets
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Secrets** in two sentences using a real company example. |
| Medium | Locate **Secrets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Secrets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Secrets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 73.10 Environment-Specific Configuration

**Environment-Specific Configuration** is an essential mechanism in **Odoo Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Environment-Specific Configuration
# In odoo_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Environment-Specific Configuration** in two sentences using a real company example. |
| Medium | Locate **Environment-Specific Configuration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Environment-Specific Configuration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Environment-Specific Configuration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-74"></a>
<a id="phase-74"></a>
# CHAPTER 74 - Linux Deployment

**Track:** Deployment & Operations

**WHAT YOU WILL BE ABLE TO DO:** Describe a sane on-premise layout: dedicated OS user, Python venv or packaged install, PostgreSQL role (not superuser), systemd service, and a repeatable start/stop/upgrade routine aligned with the [source install](https://www.odoo.com/documentation/18.0/administration/on_premise/source.html) docs.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 73 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 74.1 Linux User

**Linux User** is an essential mechanism in **Linux Deployment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Linux User
# In linux_deployment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Linux User** in two sentences using a real company example. |
| Medium | Locate **Linux User** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Linux User**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Linux User** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 74.2 Filesystem Layout

**Filesystem Layout** is an essential mechanism in **Linux Deployment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Filesystem Layout
# In linux_deployment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Filesystem Layout** in two sentences using a real company example. |
| Medium | Locate **Filesystem Layout** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Filesystem Layout**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Filesystem Layout** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 74.3 Python Environment

**Python Environment** is an essential mechanism in **Linux Deployment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Python Environment
# In linux_deployment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Python Environment** in two sentences using a real company example. |
| Medium | Locate **Python Environment** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Python Environment**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Python Environment** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 74.4 Source Deployment

**Source Deployment** is an essential mechanism in **Linux Deployment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Source Deployment
# In linux_deployment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Source Deployment** in two sentences using a real company example. |
| Medium | Locate **Source Deployment** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Source Deployment**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Source Deployment** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 74.5 Addons

**Addons** is an essential mechanism in **Linux Deployment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Addons
# In linux_deployment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Addons** in two sentences using a real company example. |
| Medium | Locate **Addons** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Addons**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Addons** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 74.6 File Permissions

**File Permissions** is an essential mechanism in **Linux Deployment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating File Permissions
# In linux_deployment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **File Permissions** in two sentences using a real company example. |
| Medium | Locate **File Permissions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **File Permissions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **File Permissions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 74.7 systemd

**systemd** is an essential mechanism in **Linux Deployment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating systemd
# In linux_deployment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **systemd** in two sentences using a real company example. |
| Medium | Locate **systemd** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **systemd**. |

**WHAT THIS UNLOCKS NEXT:**
Once **systemd** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 74.8 Service Management

**Service Management** is an essential mechanism in **Linux Deployment**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Service Management
# In linux_deployment:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Service Management** in two sentences using a real company example. |
| Medium | Locate **Service Management** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Service Management**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Service Management** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-75"></a>
<a id="phase-75"></a>
# CHAPTER 75 - Reverse Proxy & HTTPS

**Track:** Deployment & Operations

**WHAT YOU WILL BE ABLE TO DO:** Put nginx (or similar) in front of Odoo for TLS termination, HTTP→HTTPS redirect, long timeouts, and websocket/livechat upstreams — with proxy_mode = True only when the proxy is trusted.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 74 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 75.1 Reverse Proxy

**Reverse Proxy** is an essential mechanism in **Reverse Proxy & HTTPS**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reverse Proxy
# In reverse_proxy_&_https:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reverse Proxy** in two sentences using a real company example. |
| Medium | Locate **Reverse Proxy** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reverse Proxy**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reverse Proxy** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 75.2 Nginx

**Nginx** is an essential mechanism in **Reverse Proxy & HTTPS**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Nginx
# In reverse_proxy_&_https:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Nginx** in two sentences using a real company example. |
| Medium | Locate **Nginx** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Nginx**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Nginx** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 75.3 Domains

**Domains** is an essential mechanism in **Reverse Proxy & HTTPS**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Domains
# In reverse_proxy_&_https:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Domains** in two sentences using a real company example. |
| Medium | Locate **Domains** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Domains**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Domains** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 75.4 DNS

**DNS** is an essential mechanism in **Reverse Proxy & HTTPS**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating DNS
# In reverse_proxy_&_https:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **DNS** in two sentences using a real company example. |
| Medium | Locate **DNS** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **DNS**. |

**WHAT THIS UNLOCKS NEXT:**
Once **DNS** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 75.5 TLS / HTTPS

**TLS / HTTPS** is an essential mechanism in **Reverse Proxy & HTTPS**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating TLS / HTTPS
# In reverse_proxy_&_https:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **TLS / HTTPS** in two sentences using a real company example. |
| Medium | Locate **TLS / HTTPS** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **TLS / HTTPS**. |

**WHAT THIS UNLOCKS NEXT:**
Once **TLS / HTTPS** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 75.6 Proxy Headers

**Proxy Headers** is an essential mechanism in **Reverse Proxy & HTTPS**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Proxy Headers
# In reverse_proxy_&_https:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Proxy Headers** in two sentences using a real company example. |
| Medium | Locate **Proxy Headers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Proxy Headers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Proxy Headers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 75.7 WebSocket / Long-Lived Connections

**WebSocket / Long-Lived Connections** is an essential mechanism in **Reverse Proxy & HTTPS**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating WebSocket / Long-Lived Connections
# In reverse_proxy_&_https:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **WebSocket / Long-Lived Connections** in two sentences using a real company example. |
| Medium | Locate **WebSocket / Long-Lived Connections** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **WebSocket / Long-Lived Connections**. |

**WHAT THIS UNLOCKS NEXT:**
Once **WebSocket / Long-Lived Connections** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 75.8 Secure Production Exposure

**Secure Production Exposure** is an essential mechanism in **Reverse Proxy & HTTPS**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Secure Production Exposure
# In reverse_proxy_&_https:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Secure Production Exposure** in two sentences using a real company example. |
| Medium | Locate **Secure Production Exposure** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Secure Production Exposure**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Secure Production Exposure** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-76"></a>
<a id="phase-76"></a>
# CHAPTER 76 - Workers & Production Configuration

**Track:** Deployment & Operations

**WHAT YOU WILL BE ABLE TO DO:** Choose multi-processing workers vs the default multi-threaded server; apply official rules of thumb for worker count and RAM; set memory/time/request limits; and explain cron and livechat workers.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 75 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 76.1 Development Mode

**Development Mode** is an essential mechanism in **Workers & Production Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Development Mode
# In workers_&_production_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Development Mode** in two sentences using a real company example. |
| Medium | Locate **Development Mode** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Development Mode**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Development Mode** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 76.2 Multi-Processing

**Multi-Processing** is an essential mechanism in **Workers & Production Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Multi-Processing
# In workers_&_production_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Multi-Processing** in two sentences using a real company example. |
| Medium | Locate **Multi-Processing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Multi-Processing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Multi-Processing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 76.3 Workers

**Workers** is an essential mechanism in **Workers & Production Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Workers
# In workers_&_production_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Workers** in two sentences using a real company example. |
| Medium | Locate **Workers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Workers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Workers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 76.4 Worker Sizing

**Worker Sizing** is an essential mechanism in **Workers & Production Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Worker Sizing
# In workers_&_production_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Worker Sizing** in two sentences using a real company example. |
| Medium | Locate **Worker Sizing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Worker Sizing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Worker Sizing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 76.5 CPU Considerations

**CPU Considerations** is an essential mechanism in **Workers & Production Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CPU Considerations
# In workers_&_production_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CPU Considerations** in two sentences using a real company example. |
| Medium | Locate **CPU Considerations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CPU Considerations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CPU Considerations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 76.6 Memory Limits

**Memory Limits** is an essential mechanism in **Workers & Production Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Memory Limits
# In workers_&_production_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Memory Limits** in two sentences using a real company example. |
| Medium | Locate **Memory Limits** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Memory Limits**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Memory Limits** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 76.7 Request Time Limits

**Request Time Limits** is an essential mechanism in **Workers & Production Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Request Time Limits
# In workers_&_production_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Request Time Limits** in two sentences using a real company example. |
| Medium | Locate **Request Time Limits** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Request Time Limits**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Request Time Limits** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 76.8 Cron Workers

**Cron Workers** is an essential mechanism in **Workers & Production Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cron Workers
# In workers_&_production_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cron Workers** in two sentences using a real company example. |
| Medium | Locate **Cron Workers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cron Workers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cron Workers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 76.9 Production Configuration

**Production Configuration** is an essential mechanism in **Workers & Production Configuration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Production Configuration
# In workers_&_production_configuration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Production Configuration** in two sentences using a real company example. |
| Medium | Locate **Production Configuration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Production Configuration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Production Configuration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-77"></a>
<a id="phase-77"></a>
# CHAPTER 77 - PostgreSQL Operations

**Track:** Deployment & Operations

**WHAT YOU WILL BE ABLE TO DO:** Operate the Postgres side of Odoo: roles and privileges, connection limits vs worker counts, basic vacuum/analyze awareness, and when Odoo and Postgres live on separate hosts.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 76 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 77.1 Database Users

**Database Users** is an essential mechanism in **PostgreSQL Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database Users
# In postgresql_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database Users** in two sentences using a real company example. |
| Medium | Locate **Database Users** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database Users**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database Users** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 77.2 Connections

**Connections** is an essential mechanism in **PostgreSQL Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Connections
# In postgresql_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Connections** in two sentences using a real company example. |
| Medium | Locate **Connections** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Connections**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Connections** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 77.3 Connection Limits

**Connection Limits** is an essential mechanism in **PostgreSQL Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Connection Limits
# In postgresql_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Connection Limits** in two sentences using a real company example. |
| Medium | Locate **Connection Limits** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Connection Limits**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Connection Limits** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 77.4 Maintenance

**Maintenance** is an essential mechanism in **PostgreSQL Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Maintenance
# In postgresql_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Maintenance** in two sentences using a real company example. |
| Medium | Locate **Maintenance** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Maintenance**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Maintenance** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 77.5 VACUUM Concepts

**VACUUM Concepts** is an essential mechanism in **PostgreSQL Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating VACUUM Concepts
# In postgresql_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **VACUUM Concepts** in two sentences using a real company example. |
| Medium | Locate **VACUUM Concepts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **VACUUM Concepts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **VACUUM Concepts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 77.6 ANALYZE

**ANALYZE** is an essential mechanism in **PostgreSQL Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ANALYZE
# In postgresql_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ANALYZE** in two sentences using a real company example. |
| Medium | Locate **ANALYZE** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ANALYZE**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ANALYZE** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 77.7 Monitoring

**Monitoring** is an essential mechanism in **PostgreSQL Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Monitoring
# In postgresql_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Monitoring** in two sentences using a real company example. |
| Medium | Locate **Monitoring** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Monitoring**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Monitoring** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 77.8 Basic Tuning

**Basic Tuning** is an essential mechanism in **PostgreSQL Operations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Basic Tuning
# In postgresql_operations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Basic Tuning** in two sentences using a real company example. |
| Medium | Locate **Basic Tuning** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Basic Tuning**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Basic Tuning** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-78"></a>
<a id="phase-78"></a>
# CHAPTER 78 - Backups & Disaster Recovery

**Track:** Deployment & Operations

**WHAT YOU WILL BE ABLE TO DO:** Design and test backups that include both the PostgreSQL dump and the filestore; practice restore on a spare host; define RPO/RTO in plain language.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 77 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 78.1 Database Backup

**Database Backup** is an essential mechanism in **Backups & Disaster Recovery**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database Backup
# In backups_&_disaster_recovery:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database Backup** in two sentences using a real company example. |
| Medium | Locate **Database Backup** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database Backup**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database Backup** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 78.2 Filestore Backup

**Filestore Backup** is an essential mechanism in **Backups & Disaster Recovery**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Filestore Backup
# In backups_&_disaster_recovery:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Filestore Backup** in two sentences using a real company example. |
| Medium | Locate **Filestore Backup** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Filestore Backup**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Filestore Backup** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 78.3 Configuration Backup

**Configuration Backup** is an essential mechanism in **Backups & Disaster Recovery**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Configuration Backup
# In backups_&_disaster_recovery:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Configuration Backup** in two sentences using a real company example. |
| Medium | Locate **Configuration Backup** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Configuration Backup**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Configuration Backup** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 78.4 Restore

**Restore** is an essential mechanism in **Backups & Disaster Recovery**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Restore
# In backups_&_disaster_recovery:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Restore** in two sentences using a real company example. |
| Medium | Locate **Restore** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Restore**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Restore** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 78.5 Backup Scheduling

**Backup Scheduling** is an essential mechanism in **Backups & Disaster Recovery**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Backup Scheduling
# In backups_&_disaster_recovery:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Backup Scheduling** in two sentences using a real company example. |
| Medium | Locate **Backup Scheduling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Backup Scheduling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Backup Scheduling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 78.6 Off-Site Backups

**Off-Site Backups** is an essential mechanism in **Backups & Disaster Recovery**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Off-Site Backups
# In backups_&_disaster_recovery:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Off-Site Backups** in two sentences using a real company example. |
| Medium | Locate **Off-Site Backups** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Off-Site Backups**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Off-Site Backups** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 78.7 Recovery Testing

**Recovery Testing** is an essential mechanism in **Backups & Disaster Recovery**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Recovery Testing
# In backups_&_disaster_recovery:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Recovery Testing** in two sentences using a real company example. |
| Medium | Locate **Recovery Testing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Recovery Testing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Recovery Testing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 78.8 Disaster Recovery Plan

**Disaster Recovery Plan** is an essential mechanism in **Backups & Disaster Recovery**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Disaster Recovery Plan
# In backups_&_disaster_recovery:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Disaster Recovery Plan** in two sentences using a real company example. |
| Medium | Locate **Disaster Recovery Plan** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Disaster Recovery Plan**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Disaster Recovery Plan** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-79"></a>
<a id="phase-79"></a>
# CHAPTER 79 - Odoo.sh

**Track:** Deployment & Operations

**WHAT YOU WILL BE ABLE TO DO:** Explain what Odoo.sh provides (Git-based builds, staging/production databases, CI-ish checks) versus self-hosted Linux, and when each fits.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 78 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 79.1 Odoo.sh Architecture

**Odoo.sh Architecture** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo.sh Architecture
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo.sh Architecture** in two sentences using a real company example. |
| Medium | Locate **Odoo.sh Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo.sh Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo.sh Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.2 Projects

**Projects** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Projects
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Projects** in two sentences using a real company example. |
| Medium | Locate **Projects** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Projects**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Projects** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.3 Git Integration

**Git Integration** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Git Integration
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Git Integration** in two sentences using a real company example. |
| Medium | Locate **Git Integration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Git Integration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Git Integration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.4 Branches

**Branches** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Branches
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Branches** in two sentences using a real company example. |
| Medium | Locate **Branches** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Branches**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Branches** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.5 Development

**Development** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Development
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Development** in two sentences using a real company example. |
| Medium | Locate **Development** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Development**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Development** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.6 Staging

**Staging** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Staging
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Staging** in two sentences using a real company example. |
| Medium | Locate **Staging** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Staging**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Staging** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.7 Production

**Production** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Production
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Production** in two sentences using a real company example. |
| Medium | Locate **Production** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Production**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Production** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.8 Builds

**Builds** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Builds
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Builds** in two sentences using a real company example. |
| Medium | Locate **Builds** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Builds**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Builds** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.9 Logs

**Logs** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Logs
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Logs** in two sentences using a real company example. |
| Medium | Locate **Logs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Logs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Logs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.10 Shell Access

**Shell Access** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Shell Access
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Shell Access** in two sentences using a real company example. |
| Medium | Locate **Shell Access** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Shell Access**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Shell Access** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 79.11 Database Management

**Database Management** is an essential mechanism in **Odoo.sh**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database Management
# In odoo.sh:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database Management** in two sentences using a real company example. |
| Medium | Locate **Database Management** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database Management**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database Management** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-80"></a>
<a id="phase-80"></a>
# CHAPTER 80 - Docker for Odoo

**Track:** Deployment & Operations

**WHAT YOU WILL BE ABLE TO DO:** Reason about official [odoo/docker](https://github.com/odoo/docker) images: Odoo container + Postgres container, volumes for filestore and DB data, env vars, and the fact that default images lean on the threaded server unless you configure otherwise.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 79 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 80.1 Images

**Images** is an essential mechanism in **Docker for Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Images
# In docker_for_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Images** in two sentences using a real company example. |
| Medium | Locate **Images** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Images**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Images** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 80.2 Containers

**Containers** is an essential mechanism in **Docker for Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Containers
# In docker_for_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Containers** in two sentences using a real company example. |
| Medium | Locate **Containers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Containers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Containers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 80.3 Volumes

**Volumes** is an essential mechanism in **Docker for Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Volumes
# In docker_for_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Volumes** in two sentences using a real company example. |
| Medium | Locate **Volumes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Volumes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Volumes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 80.4 Networking

**Networking** is an essential mechanism in **Docker for Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Networking
# In docker_for_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Networking** in two sentences using a real company example. |
| Medium | Locate **Networking** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Networking**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Networking** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 80.5 Environment Variables

**Environment Variables** is an essential mechanism in **Docker for Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Environment Variables
# In docker_for_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Environment Variables** in two sentences using a real company example. |
| Medium | Locate **Environment Variables** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Environment Variables**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Environment Variables** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 80.6 Odoo Container

**Odoo Container** is an essential mechanism in **Docker for Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Container
# In docker_for_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Container** in two sentences using a real company example. |
| Medium | Locate **Odoo Container** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Container**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Container** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 80.7 PostgreSQL Container

**PostgreSQL Container** is an essential mechanism in **Docker for Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PostgreSQL Container
# In docker_for_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PostgreSQL Container** in two sentences using a real company example. |
| Medium | Locate **PostgreSQL Container** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PostgreSQL Container**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PostgreSQL Container** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 80.8 Persistent Filestore

**Persistent Filestore** is an essential mechanism in **Docker for Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Persistent Filestore
# In docker_for_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Persistent Filestore** in two sentences using a real company example. |
| Medium | Locate **Persistent Filestore** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Persistent Filestore**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Persistent Filestore** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 80.9 Docker Compose

**Docker Compose** is an essential mechanism in **Docker for Odoo**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Docker Compose
# In docker_for_odoo:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Docker Compose** in two sentences using a real company example. |
| Medium | Locate **Docker Compose** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Docker Compose**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Docker Compose** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-81"></a>
<a id="phase-81"></a>
# CHAPTER 81 - Monitoring & Production Troubleshooting

**Track:** Deployment & Operations

**WHAT YOU WILL BE ABLE TO DO:** Read Odoo and nginx/Postgres logs under load; watch worker memory kills, HTTP 5xx rates, disk, and backup job success; set a minimal alert set for production.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 80 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 81.1 Application Logs

**Application Logs** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Application Logs
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Application Logs** in two sentences using a real company example. |
| Medium | Locate **Application Logs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Application Logs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Application Logs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 81.2 PostgreSQL Logs

**PostgreSQL Logs** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PostgreSQL Logs
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PostgreSQL Logs** in two sentences using a real company example. |
| Medium | Locate **PostgreSQL Logs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PostgreSQL Logs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PostgreSQL Logs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 81.3 CPU

**CPU** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CPU
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CPU** in two sentences using a real company example. |
| Medium | Locate **CPU** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CPU**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CPU** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 81.4 Memory

**Memory** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Memory
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Memory** in two sentences using a real company example. |
| Medium | Locate **Memory** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Memory**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Memory** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 81.5 Disk

**Disk** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Disk
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Disk** in two sentences using a real company example. |
| Medium | Locate **Disk** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Disk**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Disk** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 81.6 Database Connections

**Database Connections** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database Connections
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database Connections** in two sentences using a real company example. |
| Medium | Locate **Database Connections** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database Connections**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database Connections** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 81.7 Slow Requests

**Slow Requests** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Slow Requests
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Slow Requests** in two sentences using a real company example. |
| Medium | Locate **Slow Requests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Slow Requests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Slow Requests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 81.8 Failed Jobs

**Failed Jobs** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Failed Jobs
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Failed Jobs** in two sentences using a real company example. |
| Medium | Locate **Failed Jobs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Failed Jobs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Failed Jobs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 81.9 Error Monitoring

**Error Monitoring** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Error Monitoring
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Error Monitoring** in two sentences using a real company example. |
| Medium | Locate **Error Monitoring** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Error Monitoring**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Error Monitoring** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 81.10 Incident Diagnosis

**Incident Diagnosis** is an essential mechanism in **Monitoring & Production Troubleshooting**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Incident Diagnosis
# In monitoring_&_production_troubleshooting:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Incident Diagnosis** in two sentences using a real company example. |
| Medium | Locate **Incident Diagnosis** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Incident Diagnosis**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Incident Diagnosis** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XIX — Production-Grade Cloud Deployment

This is the capstone project for Story XIX. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XIX.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XIX:**
- You have mastered all lessons and concepts in Story XIX.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **UPGRADES, MIGRATIONS & MAINTENANCE**!

> **Story XIX Complete!** [Continue to Story XX: UPGRADES, MIGRATIONS & MAINTENANCE](#story-xx)


---
---

# STORY XX — UPGRADES, MIGRATIONS & MAINTENANCE

**Track:** Maintenance & Upgrades

*OpenUpgrade migration scripts, database cleaning, refactoring, and long-term maintenance.*

---
<a id="chapter-82"></a>
<a id="phase-82"></a>
# CHAPTER 82 - Module Versioning

**Track:** Maintenance & Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Use __manifest__.py version intentionally (series + module revision), know when -u runs, and relate version bumps to migration script folders.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 81 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 82.1 Manifest Version

**Manifest Version** is an essential mechanism in **Module Versioning**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Manifest Version
# In module_versioning:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Manifest Version** in two sentences using a real company example. |
| Medium | Locate **Manifest Version** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Manifest Version**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Manifest Version** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 82.2 Semantic Change Thinking

**Semantic Change Thinking** is an essential mechanism in **Module Versioning**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Semantic Change Thinking
# In module_versioning:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Semantic Change Thinking** in two sentences using a real company example. |
| Medium | Locate **Semantic Change Thinking** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Semantic Change Thinking**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Semantic Change Thinking** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 82.3 Release Changes

**Release Changes** is an essential mechanism in **Module Versioning**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Release Changes
# In module_versioning:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Release Changes** in two sentences using a real company example. |
| Medium | Locate **Release Changes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Release Changes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Release Changes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 82.4 Compatibility

**Compatibility** is an essential mechanism in **Module Versioning**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Compatibility
# In module_versioning:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Compatibility** in two sentences using a real company example. |
| Medium | Locate **Compatibility** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Compatibility**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Compatibility** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 82.5 Dependencies

**Dependencies** is an essential mechanism in **Module Versioning**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Dependencies
# In module_versioning:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Dependencies** in two sentences using a real company example. |
| Medium | Locate **Dependencies** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Dependencies**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Dependencies** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 82.6 Version Control Strategy

**Version Control Strategy** is an essential mechanism in **Module Versioning**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Version Control Strategy
# In module_versioning:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Version Control Strategy** in two sentences using a real company example. |
| Medium | Locate **Version Control Strategy** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Version Control Strategy**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Version Control Strategy** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-83"></a>
<a id="phase-83"></a>
# CHAPTER 83 - Schema Changes

**Track:** Maintenance & Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Evolve fields safely: add columns, rename with data preservation, change types carefully, and avoid “delete field in prod on Friday” disasters.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 82 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 83.1 Adding Fields

**Adding Fields** is an essential mechanism in **Schema Changes**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Adding Fields
# In schema_changes:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Adding Fields** in two sentences using a real company example. |
| Medium | Locate **Adding Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Adding Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Adding Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 83.2 Renaming Fields

**Renaming Fields** is an essential mechanism in **Schema Changes**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Renaming Fields
# In schema_changes:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Renaming Fields** in two sentences using a real company example. |
| Medium | Locate **Renaming Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Renaming Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Renaming Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 83.3 Changing Field Types

**Changing Field Types** is an essential mechanism in **Schema Changes**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Changing Field Types
# In schema_changes:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Changing Field Types** in two sentences using a real company example. |
| Medium | Locate **Changing Field Types** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Changing Field Types**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Changing Field Types** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 83.4 Changing Relationships

**Changing Relationships** is an essential mechanism in **Schema Changes**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Changing Relationships
# In schema_changes:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Changing Relationships** in two sentences using a real company example. |
| Medium | Locate **Changing Relationships** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Changing Relationships**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Changing Relationships** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 83.5 Removing Fields

**Removing Fields** is an essential mechanism in **Schema Changes**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Removing Fields
# In schema_changes:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Removing Fields** in two sentences using a real company example. |
| Medium | Locate **Removing Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Removing Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Removing Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 83.6 Constraints

**Constraints** is an essential mechanism in **Schema Changes**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Constraints
# In schema_changes:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Constraints** in two sentences using a real company example. |
| Medium | Locate **Constraints** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Constraints**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Constraints** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 83.7 Safe Schema Evolution

**Safe Schema Evolution** is an essential mechanism in **Schema Changes**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Safe Schema Evolution
# In schema_changes:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Safe Schema Evolution** in two sentences using a real company example. |
| Medium | Locate **Safe Schema Evolution** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Safe Schema Evolution**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Safe Schema Evolution** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-84"></a>
<a id="phase-84"></a>
# CHAPTER 84 - Data Migrations

**Track:** Maintenance & Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Write and test upgrade scripts (migrations/ / official upgrade script API) that move data idempotently where possible, and know pre vs post migrate timing.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 83 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 84.1 Migration Scripts

**Migration Scripts** is an essential mechanism in **Data Migrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Migration Scripts
# In data_migrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Migration Scripts** in two sentences using a real company example. |
| Medium | Locate **Migration Scripts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Migration Scripts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Migration Scripts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 84.2 Pre-Migration

**Pre-Migration** is an essential mechanism in **Data Migrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Pre-Migration
# In data_migrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Pre-Migration** in two sentences using a real company example. |
| Medium | Locate **Pre-Migration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Pre-Migration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Pre-Migration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 84.3 Post-Migration

**Post-Migration** is an essential mechanism in **Data Migrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Post-Migration
# In data_migrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Post-Migration** in two sentences using a real company example. |
| Medium | Locate **Post-Migration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Post-Migration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Post-Migration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 84.4 Transforming Records

**Transforming Records** is an essential mechanism in **Data Migrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Transforming Records
# In data_migrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Transforming Records** in two sentences using a real company example. |
| Medium | Locate **Transforming Records** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Transforming Records**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Transforming Records** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 84.5 Renaming Data

**Renaming Data** is an essential mechanism in **Data Migrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Renaming Data
# In data_migrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Renaming Data** in two sentences using a real company example. |
| Medium | Locate **Renaming Data** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Renaming Data**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Renaming Data** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 84.6 Preserving Relationships

**Preserving Relationships** is an essential mechanism in **Data Migrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Preserving Relationships
# In data_migrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Preserving Relationships** in two sentences using a real company example. |
| Medium | Locate **Preserving Relationships** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Preserving Relationships**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Preserving Relationships** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 84.7 Validation

**Validation** is an essential mechanism in **Data Migrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Validation
# In data_migrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Validation** in two sentences using a real company example. |
| Medium | Locate **Validation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Validation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Validation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 84.8 Large Dataset Considerations

**Large Dataset Considerations** is an essential mechanism in **Data Migrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Large Dataset Considerations
# In data_migrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Large Dataset Considerations** in two sentences using a real company example. |
| Medium | Locate **Large Dataset Considerations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Large Dataset Considerations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Large Dataset Considerations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 84.9 Rollback Planning

**Rollback Planning** is an essential mechanism in **Data Migrations**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Rollback Planning
# In data_migrations:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Rollback Planning** in two sentences using a real company example. |
| Medium | Locate **Rollback Planning** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Rollback Planning**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Rollback Planning** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-85"></a>
<a id="phase-85"></a>
# CHAPTER 85 - Odoo Version Upgrades

**Track:** Maintenance & Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Plan a major Odoo version upgrade: inventory custom modules, check deprecated APIs, use official upgrade paths/tools where applicable, and rehearse on staging.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 84 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 85.1 Version Differences

**Version Differences** is an essential mechanism in **Odoo Version Upgrades**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Version Differences
# In odoo_version_upgrades:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Version Differences** in two sentences using a real company example. |
| Medium | Locate **Version Differences** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Version Differences**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Version Differences** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 85.2 Deprecated APIs

**Deprecated APIs** is an essential mechanism in **Odoo Version Upgrades**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Deprecated APIs
# In odoo_version_upgrades:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Deprecated APIs** in two sentences using a real company example. |
| Medium | Locate **Deprecated APIs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Deprecated APIs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Deprecated APIs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 85.3 Framework Changes

**Framework Changes** is an essential mechanism in **Odoo Version Upgrades**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Framework Changes
# In odoo_version_upgrades:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Framework Changes** in two sentences using a real company example. |
| Medium | Locate **Framework Changes** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Framework Changes**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Framework Changes** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 85.4 Module Compatibility

**Module Compatibility** is an essential mechanism in **Odoo Version Upgrades**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Module Compatibility
# In odoo_version_upgrades:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Module Compatibility** in two sentences using a real company example. |
| Medium | Locate **Module Compatibility** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Module Compatibility**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Module Compatibility** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 85.5 Database Upgrade

**Database Upgrade** is an essential mechanism in **Odoo Version Upgrades**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Database Upgrade
# In odoo_version_upgrades:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Database Upgrade** in two sentences using a real company example. |
| Medium | Locate **Database Upgrade** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Database Upgrade**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Database Upgrade** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 85.6 Upgrade Scripts

**Upgrade Scripts** is an essential mechanism in **Odoo Version Upgrades**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Upgrade Scripts
# In odoo_version_upgrades:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Upgrade Scripts** in two sentences using a real company example. |
| Medium | Locate **Upgrade Scripts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Upgrade Scripts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Upgrade Scripts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 85.7 Upgrade Utilities

**Upgrade Utilities** is an essential mechanism in **Odoo Version Upgrades**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Upgrade Utilities
# In odoo_version_upgrades:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Upgrade Utilities** in two sentences using a real company example. |
| Medium | Locate **Upgrade Utilities** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Upgrade Utilities**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Upgrade Utilities** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 85.8 Frontend Migration

**Frontend Migration** is an essential mechanism in **Odoo Version Upgrades**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Frontend Migration
# In odoo_version_upgrades:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Frontend Migration** in two sentences using a real company example. |
| Medium | Locate **Frontend Migration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Frontend Migration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Frontend Migration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 85.9 Post-Upgrade Testing

**Post-Upgrade Testing** is an essential mechanism in **Odoo Version Upgrades**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Post-Upgrade Testing
# In odoo_version_upgrades:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Post-Upgrade Testing** in two sentences using a real company example. |
| Medium | Locate **Post-Upgrade Testing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Post-Upgrade Testing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Post-Upgrade Testing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-86"></a>
<a id="phase-86"></a>
# CHAPTER 86 - Module Hooks

**Track:** Maintenance & Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Work confidently with every topic under Module Hooks — not as a glossary, but as mechanisms you can implement and debug.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 85 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 86.1 Hooks Concept

**Hooks Concept** is an essential mechanism in **Module Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Hooks Concept
# In module_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Hooks Concept** in two sentences using a real company example. |
| Medium | Locate **Hooks Concept** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Hooks Concept**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Hooks Concept** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 86.2 pre_init_hook

**pre_init_hook** is an essential mechanism in **Module Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating pre_init_hook
# In module_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **pre_init_hook** in two sentences using a real company example. |
| Medium | Locate **pre_init_hook** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **pre_init_hook**. |

**WHAT THIS UNLOCKS NEXT:**
Once **pre_init_hook** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 86.3 post_init_hook

**post_init_hook** is an essential mechanism in **Module Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating post_init_hook
# In module_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **post_init_hook** in two sentences using a real company example. |
| Medium | Locate **post_init_hook** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **post_init_hook**. |

**WHAT THIS UNLOCKS NEXT:**
Once **post_init_hook** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 86.4 uninstall_hook

**uninstall_hook** is an essential mechanism in **Module Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating uninstall_hook
# In module_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **uninstall_hook** in two sentences using a real company example. |
| Medium | Locate **uninstall_hook** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **uninstall_hook**. |

**WHAT THIS UNLOCKS NEXT:**
Once **uninstall_hook** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 86.5 Environment During Hooks

**Environment During Hooks** is an essential mechanism in **Module Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Environment During Hooks
# In module_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Environment During Hooks** in two sentences using a real company example. |
| Medium | Locate **Environment During Hooks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Environment During Hooks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Environment During Hooks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 86.6 Appropriate Uses

**Appropriate Uses** is an essential mechanism in **Module Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Appropriate Uses
# In module_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Appropriate Uses** in two sentences using a real company example. |
| Medium | Locate **Appropriate Uses** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Appropriate Uses**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Appropriate Uses** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 86.7 Avoiding Hook Abuse

**Avoiding Hook Abuse** is an essential mechanism in **Module Hooks**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Avoiding Hook Abuse
# In module_hooks:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Avoiding Hook Abuse** in two sentences using a real company example. |
| Medium | Locate **Avoiding Hook Abuse** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Avoiding Hook Abuse**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Avoiding Hook Abuse** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-87"></a>
<a id="phase-87"></a>
# CHAPTER 87 - Upgrade-Safe Customization

**Track:** Maintenance & Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Prefer extension (_inherit, xpath, intentional APIs) over editing core files; avoid private method dependence; keep overrides thin and tested.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 86 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 87.1 Never Modify Core Directly

**Never Modify Core Directly** is an essential mechanism in **Upgrade-Safe Customization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Never Modify Core Directly
# In upgrade-safe_customization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Never Modify Core Directly** in two sentences using a real company example. |
| Medium | Locate **Never Modify Core Directly** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Never Modify Core Directly**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Never Modify Core Directly** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 87.2 Extension Points

**Extension Points** is an essential mechanism in **Upgrade-Safe Customization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Extension Points
# In upgrade-safe_customization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Extension Points** in two sentences using a real company example. |
| Medium | Locate **Extension Points** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Extension Points**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Extension Points** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 87.3 Model Inheritance

**Model Inheritance** is an essential mechanism in **Upgrade-Safe Customization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Model Inheritance
# In upgrade-safe_customization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Model Inheritance** in two sentences using a real company example. |
| Medium | Locate **Model Inheritance** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Model Inheritance**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Model Inheritance** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 87.4 View Inheritance

**View Inheritance** is an essential mechanism in **Upgrade-Safe Customization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating View Inheritance
# In upgrade-safe_customization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **View Inheritance** in two sentences using a real company example. |
| Medium | Locate **View Inheritance** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **View Inheritance**. |

**WHAT THIS UNLOCKS NEXT:**
Once **View Inheritance** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 87.5 Stable Overrides

**Stable Overrides** is an essential mechanism in **Upgrade-Safe Customization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Stable Overrides
# In upgrade-safe_customization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Stable Overrides** in two sentences using a real company example. |
| Medium | Locate **Stable Overrides** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Stable Overrides**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Stable Overrides** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 87.6 Dependency Management

**Dependency Management** is an essential mechanism in **Upgrade-Safe Customization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Dependency Management
# In upgrade-safe_customization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Dependency Management** in two sentences using a real company example. |
| Medium | Locate **Dependency Management** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Dependency Management**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Dependency Management** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 87.7 Avoiding Hard-Coding

**Avoiding Hard-Coding** is an essential mechanism in **Upgrade-Safe Customization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Avoiding Hard-Coding
# In upgrade-safe_customization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Avoiding Hard-Coding** in two sentences using a real company example. |
| Medium | Locate **Avoiding Hard-Coding** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Avoiding Hard-Coding**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Avoiding Hard-Coding** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 87.8 Future-Proof Design

**Future-Proof Design** is an essential mechanism in **Upgrade-Safe Customization**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Future-Proof Design
# In upgrade-safe_customization:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Future-Proof Design** in two sentences using a real company example. |
| Medium | Locate **Future-Proof Design** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Future-Proof Design**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Future-Proof Design** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-88"></a>
<a id="phase-88"></a>
# CHAPTER 88 - Legacy Module Maintenance

**Track:** Maintenance & Upgrades

**WHAT YOU WILL BE ABLE TO DO:** Triage old modules: map depends, find brittle inherits, isolate monkey patches, add characterization tests before changing behavior.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 87 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 88.1 Read Before Changing

**Read Before Changing** is an essential mechanism in **Legacy Module Maintenance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Read Before Changing
# In legacy_module_maintenance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Read Before Changing** in two sentences using a real company example. |
| Medium | Locate **Read Before Changing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Read Before Changing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Read Before Changing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 88.2 Trace Dependencies

**Trace Dependencies** is an essential mechanism in **Legacy Module Maintenance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Trace Dependencies
# In legacy_module_maintenance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Trace Dependencies** in two sentences using a real company example. |
| Medium | Locate **Trace Dependencies** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Trace Dependencies**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Trace Dependencies** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 88.3 Trace Execution

**Trace Execution** is an essential mechanism in **Legacy Module Maintenance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Trace Execution
# In legacy_module_maintenance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Trace Execution** in two sentences using a real company example. |
| Medium | Locate **Trace Execution** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Trace Execution**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Trace Execution** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 88.4 Reproduce Existing Behavior

**Reproduce Existing Behavior** is an essential mechanism in **Legacy Module Maintenance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reproduce Existing Behavior
# In legacy_module_maintenance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reproduce Existing Behavior** in two sentences using a real company example. |
| Medium | Locate **Reproduce Existing Behavior** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reproduce Existing Behavior**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reproduce Existing Behavior** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 88.5 Characterization Tests

**Characterization Tests** is an essential mechanism in **Legacy Module Maintenance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Characterization Tests
# In legacy_module_maintenance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Characterization Tests** in two sentences using a real company example. |
| Medium | Locate **Characterization Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Characterization Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Characterization Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 88.6 Backward Compatibility

**Backward Compatibility** is an essential mechanism in **Legacy Module Maintenance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Backward Compatibility
# In legacy_module_maintenance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Backward Compatibility** in two sentences using a real company example. |
| Medium | Locate **Backward Compatibility** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Backward Compatibility**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Backward Compatibility** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 88.7 Safe Refactoring

**Safe Refactoring** is an essential mechanism in **Legacy Module Maintenance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Safe Refactoring
# In legacy_module_maintenance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Safe Refactoring** in two sentences using a real company example. |
| Medium | Locate **Safe Refactoring** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Safe Refactoring**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Safe Refactoring** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 88.8 Deprecation

**Deprecation** is an essential mechanism in **Legacy Module Maintenance**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Deprecation
# In legacy_module_maintenance:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Deprecation** in two sentences using a real company example. |
| Medium | Locate **Deprecation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Deprecation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Deprecation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XX — Automated Version Upgrade Engine

This is the capstone project for Story XX. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XX.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XX:**
- You have mastered all lessons and concepts in Story XX.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **FUNCTIONAL ODOO FOR DEVELOPERS**!

> **Story XX Complete!** [Continue to Story XXI: FUNCTIONAL ODOO FOR DEVELOPERS](#story-xxi)


---
---

# STORY XXI — FUNCTIONAL ODOO FOR DEVELOPERS

**Track:** Functional Business Flows

*Order-to-Cash, Procure-to-Pay, and double-entry accounting ledger mechanics.*

---
<a id="chapter-89"></a>
<a id="phase-89"></a>
# CHAPTER 89 - Core Functional Applications

**Track:** Functional Business Flows

**WHAT YOU WILL BE ABLE TO DO:** Explain, in business language, how CRM, Sales, Purchase, Inventory, Accounting concepts, and HR connect — enough to design with users, not only with models.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 88 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 89.1 Contacts

**Contacts** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Contacts
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Contacts** in two sentences using a real company example. |
| Medium | Locate **Contacts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Contacts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Contacts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.2 CRM

**CRM** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CRM
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CRM** in two sentences using a real company example. |
| Medium | Locate **CRM** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CRM**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CRM** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.3 Sales

**Sales** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Sales
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Sales** in two sentences using a real company example. |
| Medium | Locate **Sales** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Sales**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Sales** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.4 Purchase

**Purchase** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Purchase
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Purchase** in two sentences using a real company example. |
| Medium | Locate **Purchase** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Purchase**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Purchase** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.5 Inventory

**Inventory** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Inventory
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Inventory** in two sentences using a real company example. |
| Medium | Locate **Inventory** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Inventory**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Inventory** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.6 Accounting Concepts

**Accounting Concepts** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Accounting Concepts
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Accounting Concepts** in two sentences using a real company example. |
| Medium | Locate **Accounting Concepts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Accounting Concepts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Accounting Concepts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.7 Invoicing

**Invoicing** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Invoicing
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Invoicing** in two sentences using a real company example. |
| Medium | Locate **Invoicing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Invoicing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Invoicing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.8 Employees

**Employees** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Employees
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Employees** in two sentences using a real company example. |
| Medium | Locate **Employees** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Employees**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Employees** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.9 Recruitment

**Recruitment** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Recruitment
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Recruitment** in two sentences using a real company example. |
| Medium | Locate **Recruitment** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Recruitment**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Recruitment** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.10 Time Off

**Time Off** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Time Off
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Time Off** in two sentences using a real company example. |
| Medium | Locate **Time Off** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Time Off**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Time Off** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.11 Projects

**Projects** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Projects
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Projects** in two sentences using a real company example. |
| Medium | Locate **Projects** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Projects**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Projects** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.12 Timesheets

**Timesheets** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Timesheets
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Timesheets** in two sentences using a real company example. |
| Medium | Locate **Timesheets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Timesheets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Timesheets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.13 Manufacturing

**Manufacturing** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Manufacturing
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Manufacturing** in two sentences using a real company example. |
| Medium | Locate **Manufacturing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Manufacturing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Manufacturing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.14 Maintenance

**Maintenance** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Maintenance
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Maintenance** in two sentences using a real company example. |
| Medium | Locate **Maintenance** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Maintenance**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Maintenance** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.15 Helpdesk Concept

**Helpdesk Concept** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Helpdesk Concept
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Helpdesk Concept** in two sentences using a real company example. |
| Medium | Locate **Helpdesk Concept** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Helpdesk Concept**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Helpdesk Concept** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.16 Website

**Website** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Website
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Website** in two sentences using a real company example. |
| Medium | Locate **Website** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Website**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Website** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.17 eCommerce

**eCommerce** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating eCommerce
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **eCommerce** in two sentences using a real company example. |
| Medium | Locate **eCommerce** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **eCommerce**. |

**WHAT THIS UNLOCKS NEXT:**
Once **eCommerce** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.18 Point of Sale

**Point of Sale** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Point of Sale
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Point of Sale** in two sentences using a real company example. |
| Medium | Locate **Point of Sale** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Point of Sale**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Point of Sale** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 89.19 End-to-End Business Flow

**End-to-End Business Flow** is an essential mechanism in **Core Functional Applications**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating End-to-End Business Flow
# In core_functional_applications:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **End-to-End Business Flow** in two sentences using a real company example. |
| Medium | Locate **End-to-End Business Flow** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **End-to-End Business Flow**. |

**WHAT THIS UNLOCKS NEXT:**
Once **End-to-End Business Flow** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XXI — Trace a Company End-to-End

This is the capstone project for Story XXI. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XXI.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XXI:**
- You have mastered all lessons and concepts in Story XXI.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **REAL ODOO ENGINEERING**!

> **Story XXI Complete!** [Continue to Story XXII: REAL ODOO ENGINEERING](#story-xxii)


---
---

# STORY XXII — REAL ODOO ENGINEERING

**Track:** Clean Architecture & Scaling

*Clean architectural layering, dependency design, and enterprise performance scaling.*

---
<a id="chapter-90"></a>
<a id="phase-90"></a>
# CHAPTER 90 - Requirements → ERP Design

**Track:** Clean Architecture & Scaling

**WHAT YOU WILL BE ABLE TO DO:** Interview stakeholders, map processes to Odoo apps, identify master data vs transactions, and produce a design that names modules and ownership — before writing models.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 89 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 90.1 Stakeholder Interviews

**Stakeholder Interviews** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Stakeholder Interviews
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Stakeholder Interviews** in two sentences using a real company example. |
| Medium | Locate **Stakeholder Interviews** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Stakeholder Interviews**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Stakeholder Interviews** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.2 Business Requirements

**Business Requirements** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Business Requirements
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Business Requirements** in two sentences using a real company example. |
| Medium | Locate **Business Requirements** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Business Requirements**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Business Requirements** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.3 Functional Requirements

**Functional Requirements** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Functional Requirements
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Functional Requirements** in two sentences using a real company example. |
| Medium | Locate **Functional Requirements** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Functional Requirements**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Functional Requirements** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.4 Non-Functional Requirements

**Non-Functional Requirements** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Non-Functional Requirements
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Non-Functional Requirements** in two sentences using a real company example. |
| Medium | Locate **Non-Functional Requirements** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Non-Functional Requirements**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Non-Functional Requirements** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.5 Business Process Mapping

**Business Process Mapping** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Business Process Mapping
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Business Process Mapping** in two sentences using a real company example. |
| Medium | Locate **Business Process Mapping** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Business Process Mapping**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Business Process Mapping** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.6 As-Is Process

**As-Is Process** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating As-Is Process
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **As-Is Process** in two sentences using a real company example. |
| Medium | Locate **As-Is Process** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **As-Is Process**. |

**WHAT THIS UNLOCKS NEXT:**
Once **As-Is Process** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.7 To-Be Process

**To-Be Process** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating To-Be Process
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **To-Be Process** in two sentences using a real company example. |
| Medium | Locate **To-Be Process** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **To-Be Process**. |

**WHAT THIS UNLOCKS NEXT:**
Once **To-Be Process** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.8 Data Requirements

**Data Requirements** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Data Requirements
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Data Requirements** in two sentences using a real company example. |
| Medium | Locate **Data Requirements** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Data Requirements**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Data Requirements** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.9 Roles

**Roles** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Roles
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Roles** in two sentences using a real company example. |
| Medium | Locate **Roles** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Roles**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Roles** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.10 Permissions

**Permissions** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Permissions
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Permissions** in two sentences using a real company example. |
| Medium | Locate **Permissions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Permissions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Permissions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 90.11 Acceptance Criteria

**Acceptance Criteria** is an essential mechanism in **Requirements → ERP Design**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Acceptance Criteria
# In requirements_→_erp_design:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Acceptance Criteria** in two sentences using a real company example. |
| Medium | Locate **Acceptance Criteria** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Acceptance Criteria**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Acceptance Criteria** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XXII — Design a Production ERP Solution

This is the capstone project for Story XXII. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XXII.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XXII:**
- You have mastered all lessons and concepts in Story XXII.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **GRAND ODOO CAPSTONE**!

> **Story XXII Complete!** [Continue to Story XXIII: GRAND ODOO CAPSTONE](#story-xxiii)


---
---

# STORY XXIII — GRAND ODOO CAPSTONE

**Track:** Grand Capstone

*Full-scale enterprise real estate & hospitality ERP system build and deployment defense.*

---
<a id="chapter-91"></a>
<a id="phase-91"></a>
# CHAPTER 91 - Odoo Solution Architecture

**Track:** Grand Capstone

**WHAT YOU WILL BE ABLE TO DO:** Split features into addons with a clean depends graph; avoid god-modules; separate glue from core business.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 90 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 91.1 Module Boundaries

**Module Boundaries** is an essential mechanism in **Odoo Solution Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Module Boundaries
# In odoo_solution_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Module Boundaries** in two sentences using a real company example. |
| Medium | Locate **Module Boundaries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Module Boundaries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Module Boundaries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 91.2 Model Ownership

**Model Ownership** is an essential mechanism in **Odoo Solution Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Model Ownership
# In odoo_solution_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Model Ownership** in two sentences using a real company example. |
| Medium | Locate **Model Ownership** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Model Ownership**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Model Ownership** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 91.3 Dependencies

**Dependencies** is an essential mechanism in **Odoo Solution Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Dependencies
# In odoo_solution_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Dependencies** in two sentences using a real company example. |
| Medium | Locate **Dependencies** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Dependencies**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Dependencies** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 91.4 Shared Models

**Shared Models** is an essential mechanism in **Odoo Solution Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Shared Models
# In odoo_solution_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Shared Models** in two sentences using a real company example. |
| Medium | Locate **Shared Models** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Shared Models**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Shared Models** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 91.5 Integration Boundaries

**Integration Boundaries** is an essential mechanism in **Odoo Solution Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Integration Boundaries
# In odoo_solution_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Integration Boundaries** in two sentences using a real company example. |
| Medium | Locate **Integration Boundaries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Integration Boundaries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Integration Boundaries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 91.6 Security Architecture

**Security Architecture** is an essential mechanism in **Odoo Solution Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Security Architecture
# In odoo_solution_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Security Architecture** in two sentences using a real company example. |
| Medium | Locate **Security Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Security Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Security Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 91.7 Multi-Company Architecture

**Multi-Company Architecture** is an essential mechanism in **Odoo Solution Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Multi-Company Architecture
# In odoo_solution_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Multi-Company Architecture** in two sentences using a real company example. |
| Medium | Locate **Multi-Company Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Multi-Company Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Multi-Company Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 91.8 Data Flow

**Data Flow** is an essential mechanism in **Odoo Solution Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Data Flow
# In odoo_solution_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Data Flow** in two sentences using a real company example. |
| Medium | Locate **Data Flow** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Data Flow**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Data Flow** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 91.9 Reusability

**Reusability** is an essential mechanism in **Odoo Solution Architecture**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reusability
# In odoo_solution_architecture:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reusability** in two sentences using a real company example. |
| Medium | Locate **Reusability** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reusability**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reusability** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-92"></a>
<a id="phase-92"></a>
# CHAPTER 92 - Configuration vs Customization vs Integration

**Track:** Grand Capstone

**WHAT YOU WILL BE ABLE TO DO:** Decide when settings, automated actions, studio/optional tools, or standard workflows beat writing Python — and when they do not.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 91 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 92.1 Standard Odoo

**Standard Odoo** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Standard Odoo
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Standard Odoo** in two sentences using a real company example. |
| Medium | Locate **Standard Odoo** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Standard Odoo**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Standard Odoo** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 92.2 Configuration

**Configuration** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Configuration
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Configuration** in two sentences using a real company example. |
| Medium | Locate **Configuration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Configuration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Configuration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 92.3 Studio Concepts

**Studio Concepts** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Studio Concepts
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Studio Concepts** in two sentences using a real company example. |
| Medium | Locate **Studio Concepts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Studio Concepts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Studio Concepts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 92.4 Custom Module

**Custom Module** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Custom Module
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Custom Module** in two sentences using a real company example. |
| Medium | Locate **Custom Module** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Custom Module**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Custom Module** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 92.5 Third-Party Module

**Third-Party Module** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Third-Party Module
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Third-Party Module** in two sentences using a real company example. |
| Medium | Locate **Third-Party Module** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Third-Party Module**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Third-Party Module** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 92.6 External Integration

**External Integration** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating External Integration
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **External Integration** in two sentences using a real company example. |
| Medium | Locate **External Integration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **External Integration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **External Integration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 92.7 Data Ownership

**Data Ownership** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Data Ownership
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Data Ownership** in two sentences using a real company example. |
| Medium | Locate **Data Ownership** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Data Ownership**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Data Ownership** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 92.8 Upgrade Costs

**Upgrade Costs** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Upgrade Costs
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Upgrade Costs** in two sentences using a real company example. |
| Medium | Locate **Upgrade Costs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Upgrade Costs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Upgrade Costs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 92.9 Maintenance Costs

**Maintenance Costs** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Maintenance Costs
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Maintenance Costs** in two sentences using a real company example. |
| Medium | Locate **Maintenance Costs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Maintenance Costs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Maintenance Costs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 92.10 Choosing the Simplest Correct Solution

**Choosing the Simplest Correct Solution** is an essential mechanism in **Configuration vs Customization vs Integration**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Choosing the Simplest Correct Solution
# In configuration_vs_customization_vs_integration:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Choosing the Simplest Correct Solution** in two sentences using a real company example. |
| Medium | Locate **Choosing the Simplest Correct Solution** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Choosing the Simplest Correct Solution**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Choosing the Simplest Correct Solution** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-93"></a>
<a id="phase-93"></a>
# CHAPTER 93 - Maintainable Odoo Code

**Track:** Grand Capstone

**WHAT YOU WILL BE ABLE TO DO:** Write modules that future teammates can navigate: clear models, thin controllers, tested business methods, honest names, and no cleverness that fights the ORM.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 92 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 93.1 Naming

**Naming** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Naming
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Naming** in two sentences using a real company example. |
| Medium | Locate **Naming** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Naming**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Naming** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.2 Small Methods

**Small Methods** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Small Methods
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Small Methods** in two sentences using a real company example. |
| Medium | Locate **Small Methods** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Small Methods**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Small Methods** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.3 Separation of Concerns

**Separation of Concerns** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Separation of Concerns
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Separation of Concerns** in two sentences using a real company example. |
| Medium | Locate **Separation of Concerns** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Separation of Concerns**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Separation of Concerns** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.4 Cohesion

**Cohesion** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cohesion
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cohesion** in two sentences using a real company example. |
| Medium | Locate **Cohesion** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cohesion**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cohesion** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.5 Low Coupling

**Low Coupling** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Low Coupling
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Low Coupling** in two sentences using a real company example. |
| Medium | Locate **Low Coupling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Low Coupling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Low Coupling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.6 Reusable Mixins

**Reusable Mixins** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reusable Mixins
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reusable Mixins** in two sentences using a real company example. |
| Medium | Locate **Reusable Mixins** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reusable Mixins**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reusable Mixins** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.7 Configuration over Hard-Coding

**Configuration over Hard-Coding** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Configuration over Hard-Coding
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Configuration over Hard-Coding** in two sentences using a real company example. |
| Medium | Locate **Configuration over Hard-Coding** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Configuration over Hard-Coding**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Configuration over Hard-Coding** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.8 Constants

**Constants** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Constants
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Constants** in two sentences using a real company example. |
| Medium | Locate **Constants** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Constants**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Constants** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.9 Error Handling

**Error Handling** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Error Handling
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Error Handling** in two sentences using a real company example. |
| Medium | Locate **Error Handling** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Error Handling**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Error Handling** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.10 Logging

**Logging** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Logging
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Logging** in two sentences using a real company example. |
| Medium | Locate **Logging** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Logging**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Logging** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.11 Documentation

**Documentation** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Documentation
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Documentation** in two sentences using a real company example. |
| Medium | Locate **Documentation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Documentation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Documentation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 93.12 Upgrade Safety

**Upgrade Safety** is an essential mechanism in **Maintainable Odoo Code**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Upgrade Safety
# In maintainable_odoo_code:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Upgrade Safety** in two sentences using a real company example. |
| Medium | Locate **Upgrade Safety** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Upgrade Safety**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Upgrade Safety** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-94"></a>
<a id="phase-94"></a>
# CHAPTER 94 - Git, Collaboration & Code Review

**Track:** Grand Capstone

**WHAT YOU WILL BE ABLE TO DO:** Review Odoo PRs for security, upgrade risk, performance, XML/data hazards, and missing tests — not just style.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 93 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 94.1 Repository

**Repository** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Repository
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Repository** in two sentences using a real company example. |
| Medium | Locate **Repository** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Repository**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Repository** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.2 Branches

**Branches** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Branches
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Branches** in two sentences using a real company example. |
| Medium | Locate **Branches** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Branches**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Branches** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.3 Commits

**Commits** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Commits
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Commits** in two sentences using a real company example. |
| Medium | Locate **Commits** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Commits**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Commits** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.4 Pull Requests

**Pull Requests** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Pull Requests
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Pull Requests** in two sentences using a real company example. |
| Medium | Locate **Pull Requests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Pull Requests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Pull Requests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.5 Merge

**Merge** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Merge
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Merge** in two sentences using a real company example. |
| Medium | Locate **Merge** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Merge**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Merge** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.6 Rebase Concepts

**Rebase Concepts** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Rebase Concepts
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Rebase Concepts** in two sentences using a real company example. |
| Medium | Locate **Rebase Concepts** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Rebase Concepts**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Rebase Concepts** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.7 Release Branches

**Release Branches** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Release Branches
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Release Branches** in two sentences using a real company example. |
| Medium | Locate **Release Branches** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Release Branches**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Release Branches** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.8 Code Review for Correctness

**Code Review for Correctness** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Code Review for Correctness
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Code Review for Correctness** in two sentences using a real company example. |
| Medium | Locate **Code Review for Correctness** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Code Review for Correctness**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Code Review for Correctness** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.9 Security Review

**Security Review** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Security Review
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Security Review** in two sentences using a real company example. |
| Medium | Locate **Security Review** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Security Review**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Security Review** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.10 ORM Performance Review

**ORM Performance Review** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ORM Performance Review
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ORM Performance Review** in two sentences using a real company example. |
| Medium | Locate **ORM Performance Review** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ORM Performance Review**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ORM Performance Review** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.11 Upgrade-Safety Review

**Upgrade-Safety Review** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Upgrade-Safety Review
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Upgrade-Safety Review** in two sentences using a real company example. |
| Medium | Locate **Upgrade-Safety Review** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Upgrade-Safety Review**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Upgrade-Safety Review** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.12 Test Review

**Test Review** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Test Review
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Test Review** in two sentences using a real company example. |
| Medium | Locate **Test Review** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Test Review**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Test Review** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 94.13 Documentation Review

**Documentation Review** is an essential mechanism in **Git, Collaboration & Code Review**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Documentation Review
# In git,_collaboration_&_code_review:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Documentation Review** in two sentences using a real company example. |
| Medium | Locate **Documentation Review** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Documentation Review**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Documentation Review** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
<a id="chapter-95"></a>
<a id="phase-95"></a>
# CHAPTER 95 - Production ERP Capstone

**Track:** Grand Capstone

**WHAT YOU WILL BE ABLE TO DO:** Ship a coherent portfolio of Odoo modules (with README, tests, screenshots/GIF, upgrade notes) that prove backend, extension, integration, and OWL skills — then complete the final business ERP capstone.

**WHAT YOU SHOULD KNOW FIRST:** Chapter 94 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 95.1 Problem Discovery

**Problem Discovery** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Problem Discovery
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Problem Discovery** in two sentences using a real company example. |
| Medium | Locate **Problem Discovery** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Problem Discovery**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Problem Discovery** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.2 Business Requirements

**Business Requirements** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Business Requirements
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Business Requirements** in two sentences using a real company example. |
| Medium | Locate **Business Requirements** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Business Requirements**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Business Requirements** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.3 Process Maps

**Process Maps** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Process Maps
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Process Maps** in two sentences using a real company example. |
| Medium | Locate **Process Maps** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Process Maps**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Process Maps** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.4 Architecture

**Architecture** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Architecture
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Architecture** in two sentences using a real company example. |
| Medium | Locate **Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.5 Module Boundaries

**Module Boundaries** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Module Boundaries
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Module Boundaries** in two sentences using a real company example. |
| Medium | Locate **Module Boundaries** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Module Boundaries**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Module Boundaries** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.6 Data Models

**Data Models** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Data Models
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Data Models** in two sentences using a real company example. |
| Medium | Locate **Data Models** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Data Models**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Data Models** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.7 Relational Design

**Relational Design** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Relational Design
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Relational Design** in two sentences using a real company example. |
| Medium | Locate **Relational Design** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Relational Design**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Relational Design** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.8 ORM

**ORM** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ORM
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ORM** in two sentences using a real company example. |
| Medium | Locate **ORM** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ORM**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ORM** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.9 Business Rules

**Business Rules** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Business Rules
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Business Rules** in two sentences using a real company example. |
| Medium | Locate **Business Rules** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Business Rules**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Business Rules** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.10 Security

**Security** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Security
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Security** in two sentences using a real company example. |
| Medium | Locate **Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.11 Multi-Company

**Multi-Company** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Multi-Company
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Multi-Company** in two sentences using a real company example. |
| Medium | Locate **Multi-Company** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Multi-Company**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Multi-Company** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.12 Views

**Views** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Views
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Views** in two sentences using a real company example. |
| Medium | Locate **Views** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Views**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Views** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.13 Workflows

**Workflows** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Workflows
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Workflows** in two sentences using a real company example. |
| Medium | Locate **Workflows** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Workflows**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Workflows** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.14 Wizards

**Wizards** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Wizards
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Wizards** in two sentences using a real company example. |
| Medium | Locate **Wizards** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Wizards**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Wizards** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.15 Chatter & Activities

**Chatter & Activities** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Chatter & Activities
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Chatter & Activities** in two sentences using a real company example. |
| Medium | Locate **Chatter & Activities** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Chatter & Activities**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Chatter & Activities** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.16 Automation

**Automation** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Automation
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Automation** in two sentences using a real company example. |
| Medium | Locate **Automation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Automation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Automation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.17 Reports

**Reports** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Reports
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Reports** in two sentences using a real company example. |
| Medium | Locate **Reports** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Reports**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Reports** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.18 Attachments

**Attachments** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Attachments
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Attachments** in two sentences using a real company example. |
| Medium | Locate **Attachments** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Attachments**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Attachments** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.19 Translations

**Translations** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Translations
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Translations** in two sentences using a real company example. |
| Medium | Locate **Translations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Translations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Translations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.20 Website

**Website** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Website
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Website** in two sentences using a real company example. |
| Medium | Locate **Website** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Website**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Website** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.21 Portal

**Portal** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Portal
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Portal** in two sentences using a real company example. |
| Medium | Locate **Portal** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Portal**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Portal** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.22 API

**API** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating API
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **API** in two sentences using a real company example. |
| Medium | Locate **API** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **API**. |

**WHAT THIS UNLOCKS NEXT:**
Once **API** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.23 Webhooks

**Webhooks** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Webhooks
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Webhooks** in two sentences using a real company example. |
| Medium | Locate **Webhooks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Webhooks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Webhooks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.24 External Integration

**External Integration** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating External Integration
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **External Integration** in two sentences using a real company example. |
| Medium | Locate **External Integration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **External Integration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **External Integration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.25 OWL Dashboard

**OWL Dashboard** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating OWL Dashboard
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **OWL Dashboard** in two sentences using a real company example. |
| Medium | Locate **OWL Dashboard** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **OWL Dashboard**. |

**WHAT THIS UNLOCKS NEXT:**
Once **OWL Dashboard** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.26 PostgreSQL Optimization

**PostgreSQL Optimization** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PostgreSQL Optimization
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PostgreSQL Optimization** in two sentences using a real company example. |
| Medium | Locate **PostgreSQL Optimization** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PostgreSQL Optimization**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PostgreSQL Optimization** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.27 Automated Tests

**Automated Tests** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Automated Tests
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Automated Tests** in two sentences using a real company example. |
| Medium | Locate **Automated Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Automated Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Automated Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.28 Security Tests

**Security Tests** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Security Tests
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Security Tests** in two sentences using a real company example. |
| Medium | Locate **Security Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Security Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Security Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.29 Performance Tests

**Performance Tests** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Performance Tests
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Performance Tests** in two sentences using a real company example. |
| Medium | Locate **Performance Tests** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Performance Tests**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Performance Tests** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.30 Migration Strategy

**Migration Strategy** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Migration Strategy
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Migration Strategy** in two sentences using a real company example. |
| Medium | Locate **Migration Strategy** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Migration Strategy**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Migration Strategy** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.31 Backup Strategy

**Backup Strategy** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Backup Strategy
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Backup Strategy** in two sentences using a real company example. |
| Medium | Locate **Backup Strategy** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Backup Strategy**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Backup Strategy** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.32 Deployment

**Deployment** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Deployment
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Deployment** in two sentences using a real company example. |
| Medium | Locate **Deployment** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Deployment**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Deployment** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.33 Monitoring

**Monitoring** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Monitoring
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Monitoring** in two sentences using a real company example. |
| Medium | Locate **Monitoring** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Monitoring**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Monitoring** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.34 README

**README** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating README
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **README** in two sentences using a real company example. |
| Medium | Locate **README** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **README**. |

**WHAT THIS UNLOCKS NEXT:**
Once **README** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.35 Architecture Diagram

**Architecture Diagram** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Architecture Diagram
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Architecture Diagram** in two sentences using a real company example. |
| Medium | Locate **Architecture Diagram** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Architecture Diagram**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Architecture Diagram** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 95.36 Technical Documentation

**Technical Documentation** is an essential mechanism in **Production ERP Capstone**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Technical Documentation
# In production_erp_capstone:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Technical Documentation** in two sentences using a real company example. |
| Medium | Locate **Technical Documentation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Technical Documentation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Technical Documentation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XXIII — Complete Multi-Tenant Enterprise ERP

This is the capstone project for Story XXIII. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XXIII.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XXIII:**
- You have mastered all lessons and concepts in Story XXIII.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **INTERVIEW, PORTFOLIO & JOB READINESS**!

> **Story XXIII Complete!** [Continue to Story XXIV: INTERVIEW, PORTFOLIO & JOB READINESS](#story-xxiv)


---
---

# STORY XXIV — INTERVIEW, PORTFOLIO & JOB READINESS

**Track:** Job Ready

*Top 50 technical interview questions, live coding challenges, and career blueprint.*

---
<a id="chapter-96"></a>
<a id="phase-96"></a>
# CHAPTER 96 - Odoo Engineer Job Readiness

**Track:** Job Ready

**WHAT YOU WILL BE ABLE TO DO:** Answer Odoo interviews with mechanism + trade-offs: ORM, security, inheritance, upgrades, workers, config vs custom vs integrate — practicing with [Interview.md](../guides/Interview.md).

**WHAT YOU SHOULD KNOW FIRST:** Chapter 95 — previous foundational concepts.

**LEARNING RESOURCES:**

- [Odoo 18 Documentation](https://www.odoo.com/documentation/18.0/)
- [Server Framework 101](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101.html)

---

## 96.1 ERP Fundamentals

**ERP Fundamentals** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ERP Fundamentals
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ERP Fundamentals** in two sentences using a real company example. |
| Medium | Locate **ERP Fundamentals** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ERP Fundamentals**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ERP Fundamentals** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.2 Odoo Functional Knowledge

**Odoo Functional Knowledge** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Functional Knowledge
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Functional Knowledge** in two sentences using a real company example. |
| Medium | Locate **Odoo Functional Knowledge** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Functional Knowledge**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Functional Knowledge** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.3 Odoo Architecture

**Odoo Architecture** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo Architecture
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo Architecture** in two sentences using a real company example. |
| Medium | Locate **Odoo Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.4 Module Anatomy

**Module Anatomy** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Module Anatomy
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Module Anatomy** in two sentences using a real company example. |
| Medium | Locate **Module Anatomy** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Module Anatomy**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Module Anatomy** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.5 Python

**Python** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Python
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Python** in two sentences using a real company example. |
| Medium | Locate **Python** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Python**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Python** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.6 Models

**Models** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Models
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Models** in two sentences using a real company example. |
| Medium | Locate **Models** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Models**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Models** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.7 Fields

**Fields** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Fields
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Fields** in two sentences using a real company example. |
| Medium | Locate **Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.8 Relationships

**Relationships** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Relationships
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Relationships** in two sentences using a real company example. |
| Medium | Locate **Relationships** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Relationships**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Relationships** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.9 ORM

**ORM** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating ORM
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **ORM** in two sentences using a real company example. |
| Medium | Locate **ORM** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **ORM**. |

**WHAT THIS UNLOCKS NEXT:**
Once **ORM** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.10 Recordsets

**Recordsets** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Recordsets
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Recordsets** in two sentences using a real company example. |
| Medium | Locate **Recordsets** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Recordsets**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Recordsets** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.11 Domains

**Domains** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Domains
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Domains** in two sentences using a real company example. |
| Medium | Locate **Domains** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Domains**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Domains** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.12 Computed Fields

**Computed Fields** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Computed Fields
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Computed Fields** in two sentences using a real company example. |
| Medium | Locate **Computed Fields** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Computed Fields**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Computed Fields** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.13 Constraints

**Constraints** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Constraints
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Constraints** in two sentences using a real company example. |
| Medium | Locate **Constraints** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Constraints**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Constraints** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.14 Workflows

**Workflows** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Workflows
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Workflows** in two sentences using a real company example. |
| Medium | Locate **Workflows** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Workflows**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Workflows** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.15 XML

**XML** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating XML
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **XML** in two sentences using a real company example. |
| Medium | Locate **XML** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **XML**. |

**WHAT THIS UNLOCKS NEXT:**
Once **XML** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.16 Views

**Views** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Views
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Views** in two sentences using a real company example. |
| Medium | Locate **Views** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Views**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Views** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.17 Actions

**Actions** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Actions
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Actions** in two sentences using a real company example. |
| Medium | Locate **Actions** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Actions**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Actions** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.18 Security

**Security** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Security
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Security** in two sentences using a real company example. |
| Medium | Locate **Security** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Security**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Security** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.19 Multi-Company

**Multi-Company** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Multi-Company
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Multi-Company** in two sentences using a real company example. |
| Medium | Locate **Multi-Company** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Multi-Company**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Multi-Company** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.20 Inheritance

**Inheritance** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Inheritance
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Inheritance** in two sentences using a real company example. |
| Medium | Locate **Inheritance** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Inheritance**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Inheritance** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.21 Mixins

**Mixins** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Mixins
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Mixins** in two sentences using a real company example. |
| Medium | Locate **Mixins** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Mixins**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Mixins** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.22 Wizards

**Wizards** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Wizards
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Wizards** in two sentences using a real company example. |
| Medium | Locate **Wizards** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Wizards**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Wizards** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.23 Cron / Automation

**Cron / Automation** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Cron / Automation
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Cron / Automation** in two sentences using a real company example. |
| Medium | Locate **Cron / Automation** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Cron / Automation**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Cron / Automation** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.24 Chatter

**Chatter** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Chatter
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Chatter** in two sentences using a real company example. |
| Medium | Locate **Chatter** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Chatter**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Chatter** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.25 QWeb / Reports

**QWeb / Reports** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating QWeb / Reports
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **QWeb / Reports** in two sentences using a real company example. |
| Medium | Locate **QWeb / Reports** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **QWeb / Reports**. |

**WHAT THIS UNLOCKS NEXT:**
Once **QWeb / Reports** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.26 Internationalization

**Internationalization** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Internationalization
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Internationalization** in two sentences using a real company example. |
| Medium | Locate **Internationalization** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Internationalization**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Internationalization** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.27 Controllers

**Controllers** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Controllers
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Controllers** in two sentences using a real company example. |
| Medium | Locate **Controllers** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Controllers**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Controllers** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.28 APIs

**APIs** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating APIs
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **APIs** in two sentences using a real company example. |
| Medium | Locate **APIs** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **APIs**. |

**WHAT THIS UNLOCKS NEXT:**
Once **APIs** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.29 Webhooks

**Webhooks** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Webhooks
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Webhooks** in two sentences using a real company example. |
| Medium | Locate **Webhooks** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Webhooks**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Webhooks** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.30 Integrations

**Integrations** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Integrations
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Integrations** in two sentences using a real company example. |
| Medium | Locate **Integrations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Integrations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Integrations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.31 OWL

**OWL** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating OWL
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **OWL** in two sentences using a real company example. |
| Medium | Locate **OWL** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **OWL**. |

**WHAT THIS UNLOCKS NEXT:**
Once **OWL** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.32 JavaScript Framework

**JavaScript Framework** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating JavaScript Framework
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **JavaScript Framework** in two sentences using a real company example. |
| Medium | Locate **JavaScript Framework** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **JavaScript Framework**. |

**WHAT THIS UNLOCKS NEXT:**
Once **JavaScript Framework** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.33 PostgreSQL

**PostgreSQL** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PostgreSQL
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PostgreSQL** in two sentences using a real company example. |
| Medium | Locate **PostgreSQL** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PostgreSQL**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PostgreSQL** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.34 Performance

**Performance** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Performance
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Performance** in two sentences using a real company example. |
| Medium | Locate **Performance** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Performance**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Performance** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.35 Testing

**Testing** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Testing
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Testing** in two sentences using a real company example. |
| Medium | Locate **Testing** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Testing**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Testing** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.36 Debugging

**Debugging** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Debugging
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Debugging** in two sentences using a real company example. |
| Medium | Locate **Debugging** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Debugging**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Debugging** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.37 CLI

**CLI** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating CLI
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **CLI** in two sentences using a real company example. |
| Medium | Locate **CLI** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **CLI**. |

**WHAT THIS UNLOCKS NEXT:**
Once **CLI** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.38 Deployment

**Deployment** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Deployment
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Deployment** in two sentences using a real company example. |
| Medium | Locate **Deployment** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Deployment**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Deployment** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.39 Odoo.sh

**Odoo.sh** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Odoo.sh
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Odoo.sh** in two sentences using a real company example. |
| Medium | Locate **Odoo.sh** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Odoo.sh**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Odoo.sh** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.40 Docker

**Docker** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Docker
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Docker** in two sentences using a real company example. |
| Medium | Locate **Docker** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Docker**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Docker** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.41 Upgrades

**Upgrades** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Upgrades
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Upgrades** in two sentences using a real company example. |
| Medium | Locate **Upgrades** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Upgrades**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Upgrades** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.42 Migrations

**Migrations** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Migrations
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Migrations** in two sentences using a real company example. |
| Medium | Locate **Migrations** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Migrations**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Migrations** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.43 Requirements Analysis

**Requirements Analysis** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Requirements Analysis
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Requirements Analysis** in two sentences using a real company example. |
| Medium | Locate **Requirements Analysis** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Requirements Analysis**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Requirements Analysis** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.44 Solution Architecture

**Solution Architecture** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Solution Architecture
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Solution Architecture** in two sentences using a real company example. |
| Medium | Locate **Solution Architecture** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Solution Architecture**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Solution Architecture** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.45 Live Module Design

**Live Module Design** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Live Module Design
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Live Module Design** in two sentences using a real company example. |
| Medium | Locate **Live Module Design** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Live Module Design**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Live Module Design** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.46 Live Debugging

**Live Debugging** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Live Debugging
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Live Debugging** in two sentences using a real company example. |
| Medium | Locate **Live Debugging** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Live Debugging**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Live Debugging** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.47 Code Review

**Code Review** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Code Review
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Code Review** in two sentences using a real company example. |
| Medium | Locate **Code Review** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Code Review**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Code Review** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.48 Portfolio Walkthrough

**Portfolio Walkthrough** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating Portfolio Walkthrough
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **Portfolio Walkthrough** in two sentences using a real company example. |
| Medium | Locate **Portfolio Walkthrough** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **Portfolio Walkthrough**. |

**WHAT THIS UNLOCKS NEXT:**
Once **Portfolio Walkthrough** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.49 PORTFOLIO PROJECT 1 — Library / Asset Management

**PORTFOLIO PROJECT 1 — Library / Asset Management** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PORTFOLIO PROJECT 1 — Library / Asset Management
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PORTFOLIO PROJECT 1 — Library / Asset Management** in two sentences using a real company example. |
| Medium | Locate **PORTFOLIO PROJECT 1 — Library / Asset Management** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PORTFOLIO PROJECT 1 — Library / Asset Management**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PORTFOLIO PROJECT 1 — Library / Asset Management** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.50 PORTFOLIO PROJECT 2 — HR / Leave Approval

**PORTFOLIO PROJECT 2 — HR / Leave Approval** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PORTFOLIO PROJECT 2 — HR / Leave Approval
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PORTFOLIO PROJECT 2 — HR / Leave Approval** in two sentences using a real company example. |
| Medium | Locate **PORTFOLIO PROJECT 2 — HR / Leave Approval** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PORTFOLIO PROJECT 2 — HR / Leave Approval**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PORTFOLIO PROJECT 2 — HR / Leave Approval** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.51 PORTFOLIO PROJECT 3 — Sales Customization

**PORTFOLIO PROJECT 3 — Sales Customization** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PORTFOLIO PROJECT 3 — Sales Customization
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PORTFOLIO PROJECT 3 — Sales Customization** in two sentences using a real company example. |
| Medium | Locate **PORTFOLIO PROJECT 3 — Sales Customization** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PORTFOLIO PROJECT 3 — Sales Customization**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PORTFOLIO PROJECT 3 — Sales Customization** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.52 PORTFOLIO PROJECT 4 — Inventory Extension

**PORTFOLIO PROJECT 4 — Inventory Extension** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PORTFOLIO PROJECT 4 — Inventory Extension
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PORTFOLIO PROJECT 4 — Inventory Extension** in two sentences using a real company example. |
| Medium | Locate **PORTFOLIO PROJECT 4 — Inventory Extension** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PORTFOLIO PROJECT 4 — Inventory Extension**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PORTFOLIO PROJECT 4 — Inventory Extension** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.53 PORTFOLIO PROJECT 5 — API / SaaS Integration

**PORTFOLIO PROJECT 5 — API / SaaS Integration** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PORTFOLIO PROJECT 5 — API / SaaS Integration
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PORTFOLIO PROJECT 5 — API / SaaS Integration** in two sentences using a real company example. |
| Medium | Locate **PORTFOLIO PROJECT 5 — API / SaaS Integration** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PORTFOLIO PROJECT 5 — API / SaaS Integration**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PORTFOLIO PROJECT 5 — API / SaaS Integration** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.54 PORTFOLIO PROJECT 6 — OWL Dashboard

**PORTFOLIO PROJECT 6 — OWL Dashboard** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PORTFOLIO PROJECT 6 — OWL Dashboard
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PORTFOLIO PROJECT 6 — OWL Dashboard** in two sentences using a real company example. |
| Medium | Locate **PORTFOLIO PROJECT 6 — OWL Dashboard** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PORTFOLIO PROJECT 6 — OWL Dashboard**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PORTFOLIO PROJECT 6 — OWL Dashboard** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.55 PORTFOLIO PROJECT 7 — Customer Portal

**PORTFOLIO PROJECT 7 — Customer Portal** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating PORTFOLIO PROJECT 7 — Customer Portal
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **PORTFOLIO PROJECT 7 — Customer Portal** in two sentences using a real company example. |
| Medium | Locate **PORTFOLIO PROJECT 7 — Customer Portal** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **PORTFOLIO PROJECT 7 — Customer Portal**. |

**WHAT THIS UNLOCKS NEXT:**
Once **PORTFOLIO PROJECT 7 — Customer Portal** is concrete and verified, continue to the next lesson to build the complete operational flow.

---

## 96.56 FINAL MOCK INTERVIEW

**FINAL MOCK INTERVIEW** is an essential mechanism in **Odoo Engineer Job Readiness**. Treat it as a concrete building block in Odoo 18: a model attribute, an XML node, a Python method, or an operational rule.

```python
# Example demonstrating FINAL MOCK INTERVIEW
# In odoo_engineer_job_readiness:
# Connects business requirements directly to Odoo 18 architecture.
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain **FINAL MOCK INTERVIEW** in two sentences using a real company example. |
| Medium | Locate **FINAL MOCK INTERVIEW** in Odoo 18 core addons or docs and trace its data flow. |
| Hard | Implement a working test case or schema verification for **FINAL MOCK INTERVIEW**. |

**WHAT THIS UNLOCKS NEXT:**
Once **FINAL MOCK INTERVIEW** is concrete and verified, continue to the next lesson to build the complete operational flow.

---
# STORY PROJECT XXIV — Publish Your Enterprise Portfolio & Resume

This is the capstone project for Story XXIV. You will build and verify the complete working deliverable for this unit.

### Deliverables:
1. **Core Working Addon / Architecture:** Functional implementation covering all lessons in Story XXIV.
2. **Automated Verification:** Unit tests and validation checks asserting zero regressions.
3. **Documentation & Schema:** Clean README and architectural notes.

---

**CHECK YOUR UNDERSTANDING AFTER STORY XXIV:**
- You have mastered all lessons and concepts in Story XXIV.
- You can explain and implement the underlying Odoo 18 mechanisms from scratch.
- You are ready for **Curriculum Complete**!

> **Story XXIV Complete!** [Continue to Story I: Curriculum Complete](#story-i)


---
---

