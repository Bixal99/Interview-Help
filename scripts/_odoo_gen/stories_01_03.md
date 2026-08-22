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
