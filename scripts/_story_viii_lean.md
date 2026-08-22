# PHASE 60 - Database Foundations

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Explain what a database management system adds over a flat file — storage engine, write-ahead log, query planner, concurrency control, and schema enforcement — and name when a document, key-value, column, or graph store fits better than relational.

**WHAT YOU SHOULD KNOW FIRST:** Phase 59 — APIs over HTTP (stateless requests).

**LEARNING RESOURCES:**

- [How Databases Find Data So Fast (Database Dive)](https://www.youtube.com/watch?v=whBMD3RP1Hs) — why not just a file
- [SQLite How It Works](https://www.sqlite.org/arch.html) — pages, WAL, planner in one readable architecture
- [cstack/db_tutorial](https://github.com/cstack/db_tutorial) — build a tiny DB from scratch
- [CMU Database Systems (Andy Pavlo)](https://www.youtube.com/playlist?list=PLSE8ODhjZXjbj8BMuIrRcacnQh20hmY9g) — deeper internals track
- Interactive: [SQLite CLI](https://sqlite.org/cli.html); [DB Fiddle](https://www.db-fiddle.com/)

## 60.1 From Files to Databases

Phase 59's API can accept an order and return JSON — then the process restarts and the order is gone. HTTP remembers nothing between requests. A plain file feels like the obvious fix: append a line, read it back later. That works for a single-user script. The moment two requests write at once, a crash interrupts a write, or you need "every order over $100 for Ada," the file stops being a storage strategy and starts being a liability.

**WHY A FLAT FILE COLLAPSES:**

```text
Plain file (e.g. orders.csv for a bookstore)
  Problem 1: two processes appending at once can corrupt the file
             (Phase 53's race, now permanent on disk).
  Problem 2: "orders over $100" means reading EVERY byte, every time.
  Problem 3: nothing rejects a row missing a required field.
  Problem 4: power loss mid-write can leave a half-written line forever.
```

A **database management system (DBMS)** is a dedicated program that owns all reads and writes. It is not "a fancy file." It is five pieces of machinery that each kill one failure mode above.

**WHAT A DBMS ADDS:**

A **storage engine** arranges bytes into fixed-size **pages** (commonly 4 KB, 8 KB, or 16 KB). Disks and the OS virtual memory (Phase 50) already work in pages, so one logical read is one physical read. The engine keeps a **buffer pool** in memory — recently used pages, with an eviction policy. That is why the same query is slow the first time (cold) and fast the second (warm).

A **write-ahead log (WAL)** provides durability and crash recovery. Before modifying a page, append a record describing the change to a sequential log and flush that log to disk. If power dies mid-write, recovery replays the log to finish or undo whatever was in flight. Half-written rows become structurally impossible. Sequential log appends are also far cheaper than scattering random writes across a data file — which is why databases feel faster than "write twice" suggests.

A **query planner** turns a declarative request into a physical plan: scan the table, use an index, join order. It uses statistics about your data. The same SQL can suddenly slow down when those statistics drift — which is why `EXPLAIN` is the single most useful diagnostic in this story.

**Concurrency control** solves Phase 53's race on durable rows. Most modern engines use **multi-version concurrency control (MVCC)**: keep multiple versions of each row so readers need not block writers and writers need not block readers. Each transaction sees a consistent snapshot. Details deepen in Phase 64.

An **access layer** enforces structure and permissions: a schema that rejects invalid rows, constraints that reject invalid relationships, and who may read or write what.

**FROM FILE WRITE TO COMMITTED CHANGE:**

```text
YOUR CODE WRITING TO A FILE:

  open("orders.csv", "a")
  write("9,shipped,120\n")   <-- if power dies HERE, you may have
  close()                        "9,ship" on disk forever

  Two processes appending at once:
  A and B both seek to offset 5000 and write
  -> one silently overwrites the other, or bytes interleave.

THE SAME WRITE THROUGH A DATABASE:

  UPDATE orders SET status='shipped' WHERE id=9;
        |
        v
  [1] PARSE + PLAN
        "orders has an index on id -> seek, not scan"
        |
        v
  [2] BEGIN (implicit if you did not say so)
        |
        v
  [3] WRITE-AHEAD LOG first, flushed BEFORE data pages change:
        | LSN 4412 | txn 88 | page 27 | BEFORE: paid AFTER: shipped |
        Sequential append. Log first, then data. Absolute rule.
        |
        v
  [4] MODIFY THE PAGE in the buffer pool (memory). Mark dirty.
        Disk write of the page may happen later, in a batch.
        |
        v
  [5] COMMIT: append COMMIT to the log and flush.
        That flush IS durability — even if the data page is still only
        in memory.
        |
        v
  [6] Reply "1 row affected"

CRASH AFTER STEP 5:
  Restart reads the WAL from the last checkpoint.
  txn 88 has COMMIT -> REDO the change to page 27.
  txn 91 has no COMMIT -> UNDO every partial change.
  Result: every committed transaction applied; no uncommitted leftovers.
```

**PAGES, NOT LINES:**

A disk cannot fetch one byte; its unit is a block. The OS maps memory in pages. Aligning row storage to pages means neighbors ride along for free in the buffer pool — the same locality argument as CPU cache lines (Phase 32), one level down the hierarchy.

**WHEN RELATIONAL IS NOT THE DEFAULT:**

The relational model (tables, keys, SQL — Phase 61) is still the right default for most applications: strong consistency, ad-hoc queries, enforced relationships. Alternatives earn their place by access pattern:

| Store | Wins when… | Loses when… |
| ----- | ---------- | ----------- |
| Document (e.g. MongoDB) | Data is naturally nested and read as a whole | You need cross-document joins and strong consistency between them |
| Key-value (e.g. Redis) | Point lookups by key at extreme speed | Any question other than "what is at this key" |
| Column store (e.g. ClickHouse) | Aggregates over one column across huge tables | Fetching one complete transactional row |
| Graph (e.g. Neo4j) | Deep traversals ("friends of friends") | Ordinary tabular reporting without path queries |

"SQL or NoSQL" in an interview is answered by naming the access pattern — not by brand loyalty.

**FILE VERSUS SQLITE, SIDE BY SIDE:**

```python playground=cs-phase-60-file-vs-sqlite
import sqlite3, csv, os, time, random

# ---------- The file version ----------
with open("orders.csv", "w", newline="") as f:
    w = csv.writer(f)
    for i in range(1, 200_001):
        w.writerow([i, random.choice(["paid", "shipped"]), random.randint(1, 500)])

def file_query_over(threshold):
    hits = 0
    with open("orders.csv", newline="") as f:
        for row in csv.reader(f):
            if int(row[2]) > threshold:
                hits += 1
    return hits

start = time.perf_counter()
print("file scan:", file_query_over(400), f"in {time.perf_counter()-start:.3f}s")

# ---------- The database version ----------
conn = sqlite3.connect("orders.db")
conn.execute("PRAGMA journal_mode=WAL")

conn.execute("""
CREATE TABLE IF NOT EXISTS orders (
    id      INTEGER PRIMARY KEY,
    status  TEXT    NOT NULL CHECK (status IN ('paid','shipped','cancelled')),
    total   INTEGER NOT NULL CHECK (total > 0)
)""")

with conn:
    conn.executemany(
        "INSERT OR REPLACE INTO orders (id, status, total) VALUES (?,?,?)",
        ((i, random.choice(["paid", "shipped"]), random.randint(1, 500))
         for i in range(1, 200_001)))

start = time.perf_counter()
print("db scan:  ", conn.execute(
    "SELECT COUNT(*) FROM orders WHERE total > 400").fetchone()[0],
    f"in {time.perf_counter()-start:.3f}s")

conn.execute("CREATE INDEX IF NOT EXISTS idx_total ON orders(total)")
start = time.perf_counter()
print("db indexed:", conn.execute(
    "SELECT COUNT(*) FROM orders WHERE total > 400").fetchone()[0],
    f"in {time.perf_counter()-start:.3f}s")

for row in conn.execute(
        "EXPLAIN QUERY PLAN SELECT COUNT(*) FROM orders WHERE total > 400"):
    print("plan:", row)

try:
    conn.execute("INSERT INTO orders (id,status,total) VALUES (999999,'???',-5)")
except sqlite3.IntegrityError as e:
    print("rejected:", e)

try:
    with conn:
        conn.execute("UPDATE orders SET total = total - 100 WHERE id = 1")
        raise RuntimeError("simulated crash mid-transaction")
except RuntimeError:
    pass
print("after failed txn, id=1 total unchanged:",
      conn.execute("SELECT total FROM orders WHERE id=1").fetchone())

conn.close()
os.remove("orders.csv")
```

Without an index, the database scan is not magic — it still touches every row. The index (Phase 63) is what turns "check everything" into "seek." The schema rejects bad rows the CSV would accept. The aborted transaction rolls back; a CSV write would already be on disk with nothing to undo.

| Mechanism | Buys you | Costs you |
| --------- | -------- | --------- |
| Schema | Invalid data becomes unwritable | Shape changes are migrations |
| Pages + buffer pool | Hot data from memory; aligned I/O | Memory dedicated to the DB; cold vs warm gap |
| WAL | Exact crash recovery; cheap sequential commits | Every change written twice (log + later pages) |
| Query planner | Declarative SQL; indexes change perf without rewriting queries | Plans shift when statistics shift |
| MVCC | Readers and writers coexist | Old versions accumulate; long txns hold them alive |
| Single owning process | Correct concurrency and permissions | That process must be run, backed up, and scaled (Phase 65) |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Run the playground; record the three timings. Why is the unindexed DB scan close to the file scan? |
| Easy | Name which file problem each of schema, WAL, index, and concurrency control kills |
| Medium | Turn WAL off in SQLite and measure insert throughput; explain sequential vs random writes |
| Medium | For each domain, pick a store type in one sentence: bank ledger, session cache, product catalog with varying attributes, clickstream analytics, social graph |
| Hard | Work through [cstack/db_tutorial](https://github.com/cstack/db_tutorial) through pages; explain why an unsorted array stops scaling |
| Hard | Implement a tiny WAL: append intent, apply, kill mid-write, recover |

**WHAT THIS UNLOCKS NEXT:**

A DBMS solves the mechanical problems — concurrency, durability, crash safety. It still needs a *model* for how facts relate: tables, keys, and a language for asking questions. That language is SQL — Phase 61.


---

> **Phase 60 complete?** [Continue to Phase 61](#phase-61)

---



# PHASE 61 - SQL

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Write a correct multi-table JOIN (inner vs left), aggregate with `GROUP BY` / `HAVING`, factor a multi-step query with a CTE (`WITH`), choose primary/foreign keys for a small schema, and read a basic `EXPLAIN` well enough to say whether the planner used an index.

**WHAT YOU SHOULD KNOW FIRST:** Phase 60 — what a DBMS adds over a file.

**LEARNING RESOURCES:**

- [6 SQL Joins You MUST Know (Anton Putra)](https://www.youtube.com/watch?v=Yh4CrPHVBdE) — row pairing, not Venn diagrams
- [SQLBolt](https://sqlbolt.com/) — interactive joins and aggregates
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [SQL Execution Order (ByteByteGo)](https://www.youtube.com/watch?v=BHwzDmr6d7s)
- [pgexercises.com](https://pgexercises.com/); [SQL Murder Mystery](https://mystery.knightlab.com/)

## 61.1 The Relational Model, Tables, Keys & SQL

Phase 60 gave you a clerk who will not corrupt the cabinet. You still have to tell the clerk how facts relate. For a **bookstore**: a customer places many orders; an order contains many line items; a line item names a book. The **relational model** represents everything as **tables** (rows and columns) and relationships as **keys**.

**TABLES ARE SETS OF FACTS:**

A row is one fact. A **primary key (PK)** minimally identifies which fact you mean — without it you cannot reliably update or delete a single row. A **foreign key (FK)** is a claim that another table's fact must exist; the database *enforces* that claim. `ON DELETE CASCADE`, `SET NULL`, and `RESTRICT` are the three answers to "what happens to orders when a customer is deleted" — a real design choice, not trivia.

**Natural keys** (email, ISBN) read well until the real world changes them. **Surrogate keys** (auto-increment, UUID) never change and leak no business meaning. **Composite keys** fit junction tables where the *pair* is the fact. **Candidate keys** are any unique column set — uniqueness constraints on them catch bugs the PK alone would miss.

**WHERE THE FOREIGN KEY LIVES:**

```text
ONE-TO-MANY (one customer, many orders)  -- FK on the MANY side
   customers                 orders
   +----+--------+           +----+-------------+-------+
   | id | name   |           | id | customer_id | total |
   +----+--------+           +----+-------------+-------+
   |  1 | Ada    |<---+      |  9 |           1 |   120 |
   |  2 | Grace  |<-+ |      | 10 |           1 |    45 |
   +----+--------+  | |      | 11 |           2 |   300 |
                    | +--------------+
                    +----------------+

   WRONG: customers(id, name, order_ids TEXT)  -- "9,10"
          cannot index, constrain, or join cleanly.

MANY-TO-MANY (books <-> authors)  -- needs a THIRD (junction) table
   books        book_authors              authors
   +----+       +---------+----------+    +----+
   | id |<------| book_id | author_id|--->| id |
   +----+       +---------+----------+    +----+
                PRIMARY KEY (book_id, author_id)
                Per-pairing facts (role, ordinal) belong HERE.

ONE-TO-ONE (customer <-> profile)  -- FK + UNIQUE
   Without UNIQUE this is just one-to-many. Often one table would do,
   unless you split rarely-read columns or different permissions.
```

**ASKING QUESTIONS WITH SQL:**

SQL describes *what* you want; the planner decides *how*. Joins are **row-pairing**, not set Venn diagrams.

```text
customers                    orders
+----+-------+               +----+-------------+
| id | name  |               | id | customer_id |
+----+-------+               +----+-------------+
|  1 | Ada   |               |  9 |           1 |
|  2 | Grace |               | 10 |           1 |
|  3 | Lin   | <- no orders  | 11 |           2 |
+----+-------+               | 12 |        NULL | <- orphan
                             +----+-------------+

 INNER JOIN  -> only matched pairs. Lin vanishes. Orphan vanishes.
               Ada appears TWICE (one per order) — not a bug.

 LEFT JOIN (customers left) -> every customer; Lin with NULLs.
               COUNT(orders.id) gives Lin 0; COUNT(*) gives Lin 1.

 CROSS JOIN -> every pairing (3×4=12). Usually a missing ON clause.
```

Three planner strategies (same query, different costs):

```text
SELECT c.name, o.total FROM customers c JOIN orders o ON c.id = o.customer_id;

 [1] NESTED LOOP  — for each customer, probe orders.
     O(n·m); with an index on orders.customer_id → O(n log m).
     Right when one side is tiny.

 [2] HASH JOIN    — build a hash table of the smaller side (Phase 36),
     probe once per row of the larger. O(n+m). Workhorse for equality.

 [3] MERGE JOIN   — both sides sorted; walk in lockstep (Phase 39 merge).
     O(n+m), little memory; needs sorted input (often from an index).

 EXPLAIN tells you which. A sudden slowdown is often a plan change
 after statistics went stale.
```

**NULL** is unknown, not a value: `NULL = NULL` is unknown; use `IS NULL`. `COUNT(col)` skips nulls; `COUNT(*)` does not. `NOT IN (subquery)` returns nothing if the subquery yields any NULL — use `NOT EXISTS` or an anti-join instead.

```sql
CREATE TABLE customers (
    id    INTEGER PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    name  TEXT NOT NULL
);

CREATE TABLE orders (
    id          INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers(id) ON DELETE RESTRICT,
    total       INTEGER NOT NULL CHECK (total > 0),
    status      TEXT NOT NULL DEFAULT 'paid'
);

CREATE TABLE books (
    id    INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    price INTEGER NOT NULL
);

CREATE TABLE order_items (
    order_id   INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    book_id    INTEGER NOT NULL REFERENCES books(id) ON DELETE RESTRICT,
    quantity   INTEGER NOT NULL CHECK (quantity > 0),
    unit_price INTEGER NOT NULL,  -- captured at purchase time (Phase 62)
    PRIMARY KEY (order_id, book_id)
);

-- INNER: buyers who actually ordered
SELECT c.name, o.id AS order_id, o.total
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.total > 100;

-- LEFT: every customer, including zero orders
SELECT c.name,
       COUNT(o.id) AS order_count,
       COALESCE(SUM(o.total), 0) AS lifetime_value
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name;

-- Never ordered (safe anti-join)
SELECT c.name FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;
```

| Decision | Buys | Costs |
| -------- | ---- | ----- |
| Surrogate PK | Stable joins | Extra column; join for human labels |
| Natural PK | Self-describing rows | Real-world renames cascade |
| Enforced FKs | No dangling refs | Write-time checks; pain across shards (Phase 65) |
| Split tables | One home per fact (Phase 62) | Reads need joins |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | SQLBolt lessons 1–6; then write: orders over 100 with buyer name; every customer with order count including zero; books never ordered |
| Easy | Draw relationship shapes for: authors↔books, students↔courses, customer↔profile photo, orders↔line items |
| Medium | Demonstrate `NOT IN` returning nothing after inserting a NULL `customer_id`; fix with `NOT EXISTS` |
| Medium | `EXPLAIN` a join before/after an index on the FK; name nested loop vs hash vs merge |
| Hard | Schema for ride-sharing: riders, drivers, trips, ratings — justify every `ON DELETE` |

**WHAT THIS UNLOCKS NEXT:**

Joins reconstruct relationships row by row. Real questions ask for *summaries* ("total per customer") and *multi-step* logic ("customers above average spend"). That is `GROUP BY` / `HAVING` and `WITH` — next.

---

## 61.2 GROUP BY, HAVING & CTEs

Section 61.1 already used `GROUP BY` in a LEFT JOIN example. Aggregation is how you answer "per group" without pulling every row into application code. **CTEs** name intermediate results so multi-step questions stay readable.

**COLLAPSING ROWS INTO GROUPS:**

**GROUP BY** collapses many rows into one row per group. After grouping, you may only `SELECT` grouping columns and aggregates (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`). A non-grouped, non-aggregated column is illegal in strict SQL (and a silent wrong answer in loose modes).

| Clause | When it runs | Filters |
| ------ | ------------ | ------- |
| `WHERE` | *Before* grouping | Individual rows |
| `HAVING` | *After* grouping | Groups (usually with aggregates) |

"Orders over $100" → `WHERE total > 100`. "Customers with more than 3 orders" → `GROUP BY customer_id HAVING COUNT(*) > 3`. Putting the second filter in `WHERE` fails because `COUNT(*)` does not exist yet per row.

Logical order (simplified): `FROM/JOIN` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY`.

**NAMING THE STEPS WITH WITH:**

A **CTE** (`WITH name AS (SELECT ...)`) is a named temporary result for one statement — same power as a subquery, clearer with two or more steps. Recursive CTEs exist for hierarchies; know they exist; deep graph patterns can wait.

```sql
SELECT customer_id, SUM(total) AS lifetime
FROM orders
GROUP BY customer_id
HAVING SUM(total) > 500;

WITH per_customer AS (
    SELECT customer_id, SUM(total) AS lifetime
    FROM orders
    GROUP BY customer_id
),
big AS (
    SELECT * FROM per_customer WHERE lifetime > 500
)
SELECT c.name, b.lifetime
FROM big b
JOIN customers c ON c.id = b.customer_id
ORDER BY b.lifetime DESC;
```

```python playground=cs-phase-61-groupby-cte
# Rows -> buckets by key -> aggregate -> filter buckets (HAVING).

orders = [
    {"customer_id": 1, "total": 120},
    {"customer_id": 1, "total": 80},
    {"customer_id": 2, "total": 50},
    {"customer_id": 3, "total": 400},
    {"customer_id": 3, "total": 200},
]

from collections import defaultdict
buckets = defaultdict(list)
for row in orders:
    buckets[row["customer_id"]].append(row["total"])

per_customer = {cid: sum(totals) for cid, totals in buckets.items()}
big = {cid: life for cid, life in per_customer.items() if life > 500}

print("per_customer:", dict(per_customer))
print("HAVING lifetime > 500:", big)
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | `GROUP BY` + `COUNT` for orders per customer; add `HAVING COUNT(*) >= 2` |
| Medium | Rewrite "above average lifetime spend" from a nested subquery as a two-step CTE |
| Hard | Why is `WHERE COUNT(*) > 2` wrong, and what do you write instead? |

**WHAT THIS UNLOCKS NEXT:**

Keys, JOINs, and aggregates let you *query* split data. Nothing yet tells you *where* the splits should go. Get that wrong and you are back to duplicated, inconsistent facts — just spread across tables. That is normalization — Phase 62.


---

> **Phase 61 complete?** [Continue to Phase 62](#phase-62)

---



# PHASE 62 - Data Modeling

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Design a normalized schema through 3NF for a small domain, name the update/insert/delete anomalies each form prevents, and justify one deliberate denormalization.

**WHAT YOU SHOULD KNOW FIRST:** Phase 61 — tables, keys, and JOINs.

**LEARNING RESOURCES:**

- [Database Normalization 1NF–5NF (Decomplexify)](https://www.youtube.com/watch?v=GFQaEYEc8_8)
- [dbdiagram.io](https://dbdiagram.io/) — sketch ER diagrams quickly
- [GeeksforGeeks — Normal Forms](https://www.geeksforgeeks.org/dbms/normal-forms-in-dbms/)
- [Designing Data-Intensive Applications](https://dataintensive.net/) ch. 2 — when document stores push back
- [Pagila sample schema](https://github.com/devrimgunduz/pagila) — read a real normalized design

## 62.1 Normalization

Our bookstore can already JOIN customers to orders. Put `customer_email` on every order row and the next email change becomes a scavenger hunt — miss one row and the database disagrees with itself about one fact. **Normalization** is the mechanical fix: each fact lives in exactly one place.

**FUNCTIONAL DEPENDENCIES DRIVE THE FORMS:**

A **functional dependency** `A → B` means "if you know A, B is determined." In a bad orders table, `customer_id → email`. Normal forms require every dependency to point *from the primary key* (and nothing else).

- **1NF:** atomic columns — no lists, no repeating groups. `"widget, gizmo"` in one cell cannot be indexed or joined cleanly.
- **2NF:** 1NF + no **partial dependency** on part of a composite key. `order_items(order_id, book_id, …, book_title)` repeats the title on every line; title depends only on `book_id`. Surrogate single-column keys are in 2NF for free.
- **3NF:** 2NF + no **transitive dependency**. `orders(…, dept_id, dept_name)` with `id → dept_id → dept_name` duplicates department names. Move `dept_name` to `departments`. **BCNF** is a slightly stricter 3NF; if you are solidly in 3NF you are almost always in BCNF.
- **4NF / 5NF:** multi-valued and join dependencies — know they exist; rarely needed below specialist work.

Practical shortcut: *every table describes one kind of thing; every column is a fact about that thing only.* If a column on `orders` is really about the customer, it belongs on `customers`.

**THE THREE ANOMALIES:**

```text
orders_bad (not even 1NF)
 +----+---------+--------------+------------------+-------+
 | id | cust_id | cust_email   | products         | total |
 +----+---------+--------------+------------------+-------+
 |  1 |      42 | ada@x.com    | "widget, gizmo"  |   150 |
 |  2 |      42 | ada@x.com    | "widget"         |    50 |
 |  3 |      43 | bob@x.com    | "gizmo"          |   200 |
 +----+---------+--------------+------------------+-------+

 UPDATE anomaly: change Ada's email on row 1 only -> two emails for one person.
 INSERT anomaly: new customer with zero orders -> nowhere to store email.
 DELETE anomaly: delete Bob's only order -> Bob disappears from the database.
```

**SPLITTING TABLES WITHOUT LOSING THE WORLD:**

```text
1NF: split the list
  order_items(order_id, product, quantity)  -- "gizmo, gizmo" -> quantity 2

2NF: move attributes that depend on part of a composite key
  books(id, title, price)  <-  order_items(order_id, book_id, quantity, unit_price)

3NF: break transitive chains
  departments(id, name)  <-  orders(..., dept_id)

FINAL BOOKSTORE SHAPE:
  customers --< orders --< order_items >-- books
                  \
                   >-- departments   (if you track fulfillment dept)

  Ada's email exists in EXACTLY ONE PLACE.
  Price to pay: "Ada's history with titles" needs joins — that is the deal.
```

**WHEN DUPLICATION IS ON PURPOSE:**

**Denormalization** reintroduces redundancy when reads dominate and join cost is *measured*. Forms: precomputed counters (`comment_count`), duplicated display columns (`author_name` on a post), materialized views, cached read models (later). Every copy needs a sync story — triggers, app code, or the DB owning a materialized view. Miss a path and you recreate the anomaly.

One case that is **not** a violation: `order_items.unit_price` vs `books.price`. Those are different facts — what the customer paid vs what it costs today. Normalize the first away and old invoices change when prices change.

```sql
CREATE TABLE customers (
    id    INTEGER PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    city  TEXT NOT NULL
);

CREATE TABLE books (
    id    INTEGER PRIMARY KEY,
    title TEXT NOT NULL UNIQUE,
    price INTEGER NOT NULL          -- price TODAY
);

CREATE TABLE orders (
    id          INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers(id),
    placed_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    order_id   INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    book_id    INTEGER NOT NULL REFERENCES books(id),
    quantity   INTEGER NOT NULL CHECK (quantity > 0),
    unit_price INTEGER NOT NULL,    -- what was ACTUALLY PAID
    PRIMARY KEY (order_id, book_id)
);

UPDATE customers SET email = 'ada@new.com' WHERE id = 42;
-- one row; every JOIN reflects it

-- Deliberate denormalization with an explicit sync obligation:
ALTER TABLE orders ADD COLUMN item_count INTEGER NOT NULL DEFAULT 0;
-- Prefer a VIEW / MATERIALIZED VIEW when the DB can own the copy.
```

| Decision | Buys | Costs |
| -------- | ---- | ----- |
| 1NF | Indexable, joinable columns | Extra table for former lists |
| 2NF / 3NF | One home per fact; anomalies gone | More joins on read |
| Precomputed counters | O(1) reads | Every write path must maintain them |
| Captured `unit_price` | Historically correct invoices | Looks like duplication to a rushed reviewer |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Produce the update and delete anomalies on an `orders_bad` table, then fix to 3NF |
| Easy | `books(isbn, title, author_id, author_name, author_country)` — name the transitive dependency and normalize |
| Medium | Normalize `enrollments(student_id, course_id, student_name, course_title, instructor)` step by step |
| Medium | Explain why `order_items.unit_price` is not a 3NF violation in dependency language |
| Hard | Hospital schema (patients, doctors, appointments, prescriptions); pick one deliberate denormalization and justify the read path |

**WHAT THIS UNLOCKS NEXT:**

The schema is correct and non-redundant. `SELECT * FROM orders WHERE customer_id = 5` still checks every row — O(n). Hashing and trees already solved that in memory (Phases 36–37). Databases need the same idea on disk: indexes — Phase 63.


---

> **Phase 62 complete?** [Continue to Phase 63](#phase-63)

---



# PHASE 63 - Database Internals

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Explain why a B+ tree index makes one query fast and another write slower, choose a useful composite index column order, and read `EXPLAIN (ANALYZE)` well enough to spot a sequential scan you did not expect.

**WHAT YOU SHOULD KNOW FIRST:** Phase 62 — correct schema; Phase 37 — tree search intuition; Phase 50 — pages / buffer pool.

**LEARNING RESOURCES:**

- [Understanding B-Trees (Spanning Tree)](https://www.youtube.com/watch?v=K1WeoKxLZ5o) — wait, use: [Understanding B-Trees (Spanning Tree)](https://www.youtube.com/watch?v=K1a2Bk8NrYQ)
- [B+ Tree visualization (USFCA)](https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html)
- [Use The Index, Luke](https://use-the-index-luke.com/) — vendor-neutral indexing book
- [PostgreSQL index types](https://www.postgresql.org/docs/current/indexes-types.html)
- [explain.dalibo.com](https://explain.dalibo.com/) — paste real `EXPLAIN` output

## 63.1 Indexes & B-Trees

A normalized bookstore schema still dies on `WHERE customer_id = 5` if every order row must be checked. An **index** is a separate structure that buys seeks on a chosen access pattern. Every index makes some reads cheaper and every `INSERT`/`UPDATE`/`DELETE` more expensive — that trade is the whole topic.

**FINDING ROWS WITHOUT SCANNING EVERYTHING:**

Most relational engines use a **B+ tree**: all row pointers live in **leaf** nodes; leaves are linked in sorted order; internal nodes hold only keys (signposts). Consequences: higher fanout (shallower tree), and range queries descend once then walk the leaf chain. A **hash index** is O(1) for equality only — no ranges, no `ORDER BY`.

**Why not a BST (Phase 37)?** On disk, minimize *page reads*, not comparisons. High fanout keeps millions of rows at height 3–4.

```text
FANOUT (8 KB page, ~16-byte key+pointer → ~400 entries/node):

  height 3 → ~64 million rows in 3 page reads
  height 4 → ~25 billion
  Binary tree over 64M rows → ~26 levels → up to 26 random reads

  Root (and often level 2) stay in the buffer pool → often 1 real disk I/O.
```

**B+ TREE SHAPE:**

```text
A B+ TREE on orders(id):

                        [ 30 | 60 ]          internal: keys only
                       /     |      \
              [10|20]     [40|50]    [70|80]
               / | \       / | \      / | \
  LEAVES: [5,8]->[10..]->[20..]->...->[70..]->[80..]
          linked in sorted order; ONLY leaves point at rows

  INSERT into a full leaf → SPLIT; middle key goes UP.
  If the root splits, the tree grows by one level at the TOP —
  always balanced without separate rebalancing logic.

  COST: each INSERT is O(log n) per index. Five indexes ⇒ five trees
  to update on every write.
```

**CLUSTERED VS NON-CLUSTERED; COVERING:**

A **clustered** index defines physical row order (at most one; InnoDB clusters on the PK). Random UUIDv4 PKs cause page splits and cache misses; monotonic keys (or UUIDv7/ULID) append cleanly. A **non-clustered** index stores key + pointer — using it may fetch the heap row next. A **covering** index includes every column the query needs so the table is never touched (index-only scan).

**COMPOSITE ORDER — THE PHONE BOOK RULE:**

Index on `(a, b, c)` serves filters on `a`, `(a,b)`, or `(a,b,c)` — not `b` alone. Put equality columns before range columns: `(status, created_at)` serves `status = 'paid' AND created_at > X`; `(created_at, status)` wastes the status part after the range.

**WHY THE PLANNER IGNORES YOUR INDEX:**

1. Function on the column (`LOWER(email)`) — use an expression index  
2. Leading wildcard (`LIKE '%son'`) — prefix `LIKE 'John%'` is fine  
3. Type mismatch / implicit cast  
4. Low selectivity (40% of rows match → seq scan is cheaper)  
5. Stale statistics — `ANALYZE`  
6. `OR` across different columns — often rewrite as `UNION`

```sql
-- Illustrative Postgres-shaped workflow (run where you have a live engine)
CREATE TABLE orders (
    id         SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    status     TEXT NOT NULL,
    total      INTEGER NOT NULL,
    email      TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE INDEX idx_orders_customer ON orders (customer_id);
CREATE INDEX idx_status_created ON orders (status, created_at);
CREATE INDEX idx_cover ON orders (customer_id) INCLUDE (status, total);
CREATE INDEX idx_email_lower ON orders (lower(email));

EXPLAIN (ANALYZE, BUFFERS)
SELECT status, total FROM orders WHERE customer_id = 4242;
-- Prefer "Index Only Scan" when covering works
```

| Operation | No index | With B+ tree |
| --------- | -------- | ------------ |
| Point lookup | O(n) | O(log n) |
| Range | O(n) | O(log n + k) |
| Write | cheap | O(log n) per index |
| `ORDER BY` indexed col | sort | walk leaves |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Insert keys into the B+ tree visualizer (max degree 3); draw after each split |
| Easy | Index `(country, city, postcode)` — which filters can use it? |
| Medium | Same composite in both column orders; prove equality-before-range with `EXPLAIN` |
| Medium | Covering index → index-only scan; compare buffer reads |
| Medium | Time 50k inserts with 1 index vs 6; report the write tax |
| Hard | Why can a random UUID PK hurt inserts more than `bigserial`? (clustering + page splits) |

**WHAT THIS UNLOCKS NEXT:**

Indexes make a *single* query fast. They say nothing about two related writes that must succeed or fail together — debit one account, credit another. Crash between them and money vanishes or doubles. That unit of work is a **transaction** — Phase 64.


---

> **Phase 63 complete?** [Continue to Phase 64](#phase-64)

---



# PHASE 64 - Transactions & Concurrency

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Explain each ACID letter with a concrete failure it prevents, name the anomaly an isolation level blocks (dirty / non-repeatable / phantom / write skew), and say when your app must retry a serialization failure.

**WHAT YOU SHOULD KNOW FIRST:** Phase 63 — fast single queries; Phase 53 — races on shared state.

**LEARNING RESOURCES:**

- [ACID Properties With Examples (ByteByteGo)](https://www.youtube.com/watch?v=GAe5oB742dw)
- [PostgreSQL Transaction Isolation](https://www.postgresql.org/docs/current/transaction-iso.html)
- [PostgreSQL MVCC intro](https://www.postgresql.org/docs/current/mvcc-intro.html)
- [ept/hermitage](https://github.com/ept/hermitage) — anomalies vs real engines
- [DDIA](https://dataintensive.net/) chapter 7

## 64.1 Transactions & ACID

Indexes keep bookstore lookups fast. Checkout still needs two writes — decrement stock, insert the order — that must not leave a half-applied world. A **transaction** is that all-or-nothing unit. The guarantees are **ACID**.

**ALL OR NOTHING ACROSS MULTIPLE WRITES:**

- **Atomicity** — all statements commit, or none do. Crash between debit and credit → undo via WAL (Phase 60); money does not vanish.
- **Consistency** — commit only leaves a valid state (constraints still hold). An order referencing a deleted customer is rejected. *Not* the same as CAP "consistency" (later stories): ACID C is invariants *inside one database*.
- **Isolation** — concurrent transactions behave as if they ran one after another, even though they interleave. This is Phase 53's race on rows — and it is a *dial*, not a single absolute.
- **Durability** — after commit returns, the change survives a crash (WAL flushed). A "success" that disappears on power loss is a silent lie.

**THE ANOMALIES ISOLATION IS DEFINED AGAINST:**

```text
DIRTY READ — read another txn's uncommitted write; it may ROLLBACK.
NON-REPEATABLE READ — same row, two SELECTs, different values after a commit.
PHANTOM READ — same query, different *row set* after inserts/deletes.
WRITE SKEW — each txn is locally valid; together they break a multi-row invariant.
  Classic: two on-call doctors each see the other on duty, both go off duty.
  They never touched the SAME row — only SERIALIZABLE catches this.
```

| Level | Dirty | Non-rep. | Phantom | Write skew |
| ----- | ----- | -------- | ------- | ---------- |
| Read Uncommitted | yes | yes | yes | yes |
| Read Committed (PG default) | no | yes | yes | yes |
| Repeatable Read (MySQL default*) | no | no | maybe* | yes |
| Serializable | no | no | no | no |

\* Names are standard; behavior differs (Postgres RR ≈ snapshot isolation and prevents phantoms; still allows write skew). Saying "which database?" is a strong answer.

Throughput ←————————→ correctness. Raise the dial, expect more aborts.

**MVCC VS LOCKS; APP PATTERNS:**

**Two-phase locking** — readers block writers and vice versa; simple, can stall writes behind analytics. **MVCC** — version chains; readers never block writers; writers still conflict with writers (one aborts). Costs: vacuum/GC; long reads pin old versions.

Lost update on the last seat:

```text
BUG:  both read seats=1; both write seats=0  → two tickets, one seat.

PESSIMISTIC: SELECT ... FOR UPDATE  (lock first; right when conflicts common)
OPTIMISTIC:  version column; UPDATE ... WHERE version = :old  (0 rows → retry)
BEST WHEN EXPRESSIBLE:
  UPDATE events SET seats = seats - 1 WHERE id = 1 AND seats > 0;
  -- 0 rows means sold out; no lock, no retry
```

ACID stops at **one database**. Across two services you get 2PC (blocks if coordinator dies) or **sagas** with compensating actions — Story XI territory. Know the boundary; do not pretend one `BEGIN` spans microservices.

```sql
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
-- Both or neither — even if power fails between the UPDATEs.
```

```python playground=cs-phase-64-serializable-retry
# SERIALIZABLE (and often RR) can abort through no fault of your logic.
# Code without a retry loop works in dev and fails under concurrency.

def run_serializable(conn, work, max_attempts=5):
    """Pseudo-API shaped like psycopg2 — adapt to your driver."""
    import time
    for attempt in range(max_attempts):
        try:
            conn.execute("BEGIN ISOLATION LEVEL SERIALIZABLE")
            result = work(conn)
            conn.execute("COMMIT")
            return result
        except Exception as e:
            conn.execute("ROLLBACK")
            if "could not serialize" not in str(e).lower() and type(e).__name__ != "SerializationFailure":
                raise
            time.sleep(0.05 * (2 ** attempt))
    raise RuntimeError("gave up after serialization conflicts")

def go_off_call(conn, doctor="alice"):
    n = conn.execute("SELECT COUNT(*) FROM shifts WHERE on_call").fetchone()[0]
    if n <= 1:
        raise ValueError("cannot leave: last doctor on call")
    conn.execute("UPDATE shifts SET on_call = false WHERE doctor = ?", (doctor,))

# Two concurrent callers: one commits; the other retries and then correctly refuses.
```

| Choice | Buys | Costs |
| ------ | ---- | ----- |
| Read Committed | No dirty reads; high concurrency | Non-repeatable reads legal |
| Serializable | Prevents write skew | More aborts; retry mandatory |
| MVCC | Readers ∥ writers | Version bloat; vacuum |
| `FOR UPDATE` | Safe under hot conflicts | Contention / deadlock risk |
| Optimistic version | No long locks | You own the retry |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | One sentence per ACID letter: the bug without it |
| Easy | Produce a non-repeatable read at Read Committed in two sessions; raise to RR and show it vanish |
| Medium | Lost update on last seat — fix three ways (`FOR UPDATE`, version column, conditional `UPDATE`) |
| Medium | Write skew with on-call doctors at RR; show Serializable aborting one |
| Medium | Implement the serialization retry loop with backoff in your stack |
| Hard | Checkout spanning inventory DB + payments API — why not one txn; sketch a saga |

**WHAT THIS UNLOCKS NEXT:**

One well-indexed, transactional database still has a ceiling: one machine's CPU, memory, and disk. Availability and throughput beyond that mean copies and splits — replication, partitioning, sharding — Phase 65. Not full distributed consensus yet; that is a later story.


---

> **Phase 64 complete?** [Continue to Phase 65](#phase-65)

---



# PHASE 65 - Operating & Scaling Databases

**Track:** Data & Security

**WHAT YOU WILL BE ABLE TO DO:** Explain replication lag and a read-your-own-writes fix; contrast **replication** (copies) vs **partitioning** (split data) vs **sharding** (partitioning across servers); and name cheaper options to try before you shard.

**WHAT YOU SHOULD KNOW FIRST:** Phase 64 — ACID on one machine.

> **Boundary:** Phase 65 is database *operations* scaling — replicas, lag, shard keys, the "try cheaper things first" ladder. It does **not** teach CAP, consensus, or multi-service design (Phases 81–88). Stop when the answer becomes "we need a consensus algorithm."

**LEARNING RESOURCES:**

- [Database Sharding and Partitioning (Exponent)](https://www.youtube.com/watch?v=be6PLMKKSto)
- [Database Replication Explained (Exponent)](https://www.youtube.com/watch?v=bI8Ry6GhMSE)
- [7 Strategies to Scale Your Database (ByteByteGo)](https://www.youtube.com/watch?v=_1IKwnbscQU)
- [PostgreSQL High Availability](https://www.postgresql.org/docs/current/high-availability.html)
- [DDIA](https://dataintensive.net/) chapters 5–6; [Vitess](https://vitess.io/docs/) for practiced sharding

## 65.1 Replication, Partitioning & Sharding

One bookstore primary that is correctly ACID is still one failure domain and one throughput ceiling. Scaling spreads load along two axes that people constantly mash together.

**WHEN ONE MACHINE IS NOT ENOUGH:**

| Term | What it does | Buys you |
| ---- | ------------ | -------- |
| **Replication** | Same data on multiple machines | Availability + read capacity; writes usually still hit one leader |
| **Partitioning** | Split different rows/tables into pieces | Smaller working sets; can stay on *one* machine |
| **Sharding** | Partitioning **across** database servers | Storage + write throughput beyond one box; pays with cross-shard pain |

Real systems do both: each shard is itself replicated.

**LEADER / FOLLOWERS AND THE LAG BUG:**

```text
SINGLE-LEADER (default in Postgres/MySQL):

                 writes
                   |
                   v
              +--------+
              | LEADER |  owns the WAL — stream = same log as crash recovery
              +--------+
              /   |    \
         follower follower follower   <-- reads may go here

ASYNCHRONOUS: ACK after local fsync → fast; leader death can lose recent ACKs.
SYNCHRONOUS:  ACK after a follower has it → safe; network RTT; slow follower stalls writes.
SEMI-SYNC:    one sync follower + async rest — common production compromise.

REPLICATION LAG (every naive app hits this):
  t=0  user POSTs a review          -> LEADER
  t=1  redirect to the product page -> REPLICA 200ms behind
       -> user's own review is MISSING

  FIX — read-your-own-writes:
    (a) stick that user's reads to the leader for N seconds after a write
    (b) pin reads for recently written keys to the leader
    (c) client remembers log position (LSN); replica answers only when caught up

  Also name: monotonic reads (time must not go backwards across replicas);
  consistent prefix (do not see a reply before its question).
```

Failover: detect timeout → promote newest follower → repoint clients. Async gaps lose acknowledged writes; a resurrected old leader can cause **split brain**. Making "who is leader" a cluster agreement is why consensus appears in Story XI — not here.

**PARTITIONING VS SHARDING:**

**Range** partitioning keeps range queries local and creates hotspots (date keys → all of today's writes hit one piece). **Hash** distributes evenly and destroys range locality; `hash % N` remaps almost everything when N changes. **Consistent hashing** places shards and keys on a ring so adding a shard moves ~1/N of keys; **virtual nodes** even the load. **Directory** maps key→shard explicitly — flexible, and the directory becomes critical.

**Shard key** is the least reversible decision: shard the bookstore by `customer_id` and "Ada's orders" stay local while "top sellers in Doha today" scatter-gather. There is no key that makes every query local — choose which queries you are willing to make expensive.

What sharding takes away: cross-shard joins (denormalize, app join, or co-locate), cross-shard ACID (sagas), `SERIAL` IDs (Snowflake / UUIDv7), global secondary indexes, cheap global `ORDER BY … LIMIT`.

**CLIMB THIS LADDER FIRST:**

```text
 1. indexes (Phase 63)           5. read replicas
 2. fix EXPLAIN-exposed queries  6. blobs → object storage
 3. cache                        7. PARTITION within one DB
 4. bigger machine               8. only then: SHARD
Rungs 1–7 are reversible. Rung 8 is not.
```

```python playground=cs-phase-65-replica-routing
import random, time, hashlib, bisect
from collections import Counter

class Cluster:
    """Route writes to the leader; fix read-your-own-writes with stickiness."""

    def __init__(self, leader, replicas, stickiness_seconds=5.0):
        self.leader = leader
        self.replicas = replicas
        self.stickiness = stickiness_seconds
        self._recent_writers: dict[str, float] = {}

    def write(self, user_id, sql, params=()):
        self._recent_writers[user_id] = time.monotonic()
        return self.leader.execute(sql, params)

    def read(self, user_id, sql, params=()):
        last = self._recent_writers.get(user_id, 0)
        if time.monotonic() - last < self.stickiness:
            return self.leader.execute(sql, params)
        return random.choice(self.replicas).execute(sql, params)


def naive_shard(key, num_shards):
    return int(hashlib.md5(str(key).encode()).hexdigest(), 16) % num_shards

keys = list(range(10_000))
before = {k: naive_shard(k, 4) for k in keys}
after = {k: naive_shard(k, 5) for k in keys}
moved = sum(1 for k in keys if before[k] != after[k])
print(f"naive hash: adding 1 shard to 4 moves {moved/len(keys):.0%} of keys")


class ConsistentHashRing:
    def __init__(self, shards=(), virtual_nodes=150):
        self.vnodes = virtual_nodes
        self._ring: dict[int, str] = {}
        self._sorted: list[int] = []
        for s in shards:
            self.add(s)

    @staticmethod
    def _hash(value) -> int:
        return int(hashlib.md5(str(value).encode()).hexdigest(), 16)

    def add(self, shard):
        for i in range(self.vnodes):
            point = self._hash(f"{shard}#{i}")
            self._ring[point] = shard
            bisect.insort(self._sorted, point)

    def route(self, key) -> str:
        if not self._sorted:
            raise RuntimeError("empty ring")
        point = self._hash(key)
        idx = bisect.bisect_right(self._sorted, point) % len(self._sorted)
        return self._ring[self._sorted[idx]]


ring = ConsistentHashRing(["shard-a", "shard-b", "shard-c", "shard-d"])
before = {k: ring.route(k) for k in keys}
ring.add("shard-e")
after = {k: ring.route(k) for k in keys}
moved = sum(1 for k in keys if before[k] != after[k])
print(f"consistent hash: adding 1 shard to 4 moves {moved/len(keys):.0%}")
print(Counter(after.values()))
```

```sql
-- Partitioning WITHIN one database (ladder rung 7) — no lost joins
CREATE TABLE events (
    id         BIGSERIAL,
    created_at TIMESTAMPTZ NOT NULL,
    payload    JSONB
) PARTITION BY RANGE (created_at);

CREATE TABLE events_2026_08 PARTITION OF events
    FOR VALUES FROM ('2026-08-01') TO ('2026-09-01');

-- Dropping old data is metadata, not a million-row DELETE:
-- DROP TABLE events_2026_07;
```

| Decision | Buys | Costs |
| -------- | ---- | ----- |
| Read replicas | Read scale + failover candidate | Lag; read-your-own-writes bugs |
| Async replication | Fast writes | Possible loss of recent ACKs |
| Sync replication | No lost ACKs | Latency; stalled writes |
| Hash sharding | Even writes | Range queries; resize pain without consistent hashing |
| Sharding at all | Horizontal write/storage scale | Cross-shard joins/txns/indexes become projects |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Report naive-hash vs consistent-hash move % from the playground; list the eight ladder rungs |
| Easy | Three queries local if sharded by `customer_id`; three that are not |
| Medium | Docker Postgres primary+replica; measure lag; reproduce then fix read-your-own-writes |
| Medium | Partition by month; confirm pruning with `EXPLAIN`; time `DROP` vs bulk `DELETE` |
| Hard | Shard key design for chat (users, conversations, messages) — which features become expensive? |

**PRACTICE WITH A SMALL PROJECT:**

Design a normalized bookstore schema (customers, books, orders, order_items), write the JOIN for "a customer's order history with titles," name indexes and their write cost, and describe adding a read replica if read traffic triples. Then build the [Phase 65 mini-project](../guides/Projects.md#cs-phase-65-project).

**WHAT THIS UNLOCKS NEXT:**

Data can survive, be queried, structured, indexed, transacted, and scaled across machines. None of that asks *who* is allowed to read or change it — or what happens when the network and clients are untrusted. Packets already crossed machines you do not control (Phases 55–58). Persistent stores concentrate the blast radius of a stolen dump, a forged identity, or a query that turns input into instructions. That map of trust boundaries and threats is Story IX, starting at Phase 66.


---

> **Phase 65 complete?** [Build the Phase 65 mini-project](../guides/Projects.md#cs-phase-65-project) · [Continue to Phase 66](#phase-66)

---


