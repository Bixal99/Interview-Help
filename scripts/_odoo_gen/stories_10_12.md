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
- [External API tutorial family on odoo.com](https://www.odoo.com/documentation/18.0/developer.html)

## 46.1 Integration Is a Product Surface

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

**RPC VS CUSTOM HTTP VS WEBHOOKS:**

| Style | Fit |
| ----- | --- |
| XML-RPC / JSON-RPC | Server-to-server CRUD using Odoo’s external API |
| Custom `@http.route` JSON | Tailored payloads, mobile, stricter DTOs |
| Incoming webhooks | Third parties push events to you |
| Outgoing webhooks/events | You notify others when records change |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write a one-page contract for “create lead from website form.” |
| Medium | Mark which fields are public vs internal on `res.partner`. |
| Hard | Specify idempotency for “create order” if the client retries after a timeout. |

**WHAT THIS UNLOCKS NEXT:**

Odoo already ships a remote ORM. Phase 47 teaches using it safely.

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
- Official REST docs of the vendor you integrate (not SEO blog spam)

## 50.1 Sync as a Module Boundary

```text
Odoo model method
    --> integration service (auth, rate limit, map fields)
        --> REST API
            --> remote id stored on Odoo record
```

Store **external ids** on your records (`external_ref`, `provider_id`). Cron reconciles drift. Retries use exponential backoff and stop on 4xx validation errors (fix data) but retry on 5xx/timeouts.

**ERROR HANDLING:**

- Log request id / correlation id (never log secrets or card data).
- Surface failures on the record (chatter message, sync status field).
- Alert ops when error rate spikes.
- Make re-sync idempotent: PUT/upsert by external id, not blind POST create.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Sketch models/fields for syncing contacts to a fictional CRM API. |
| Medium | Write a cron that pushes only `need_sync=True` records with limit=50. |
| Hard | Design retry: which HTTP codes retry, which poison-pill to a dead-letter status. |

**WHAT THIS UNLOCKS NEXT:**

Money movement has stricter rules than contact sync. **Payment integrations** close Story XII.

---

> **Phase 50 complete?** You can design a sync module with mapping, cron batches, retries, and user-visible failure states.

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
