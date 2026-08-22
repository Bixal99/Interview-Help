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
