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
