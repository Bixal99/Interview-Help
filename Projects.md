# Projects Playbook

*Mohammad Bilal's hands-on project guide for the Interview Help repo - small-to-medium builds that cement concepts from each roadmap. Pair every project with a public README that explains what broke, what you built, and what you would change next.*

*Project inspiration curated with Composio (web search, GitHub) against beginner Python repos, OOP practice collections, Odoo tutorials, and structured project lists. See [Curated inspiration](#curated-inspiration) at the bottom.*

**Scope:** One project cements one bridge · no mega-apps · public proof.

```
Build → Explain → Ship README → Drill Interview.md
```

---

**Project card legend (every project uses this shape)**

| Field | Meaning |
| --- | --- |
| **Roadmap** | Which file and phase cluster owns the theory |
| **Goal** | What you are proving in one sentence |
| **Concepts practiced** | Skills the build forces you to use |
| **Difficulty** | Easy / Medium / Hard (scope, not IQ) |
| **Steps** | 3-8 actionable bullets |
| **Done when** | Acceptance criteria - ship or do not ship |
| **Stretch** | Optional depth if you have time |

**Difficulty guide**

| Level | Typical scope | Time box (solo) |
| --- | --- | --- |
| Easy | Single file or CLI, no persistence | 2-6 hours |
| Medium | Multiple modules, files or DB, tests | 1-3 days |
| Hard | Design doc + code, concurrency, or integration | 3-7 days |

---

## 1. How to Use This File

This playbook is the **build layer** on top of the roadmaps. Reading [`CS.md`](./CS.md) Phase 3 teaches linked lists; building one from scratch is how you know you can explain the bridge out loud in [`Interview.md`](./Interview.md).

### Pick projects by phase cluster, not by hype

| Rule | Why |
| --- | --- |
| **1-2 projects per phase cluster** | Depth beats a portfolio of half-finished repos |
| **Finish before you hop tracks** | A shipped calculator teaches more than three abandoned CRUD apps |
| **Write the README first draft after building** | Forces you to name trade-offs, not just features |
| **Tag the roadmap phase in the README** | Recruiters and future-you can trace concept to artifact |

### Recommended rhythm

```
Read phase → hit mastery checkpoint → pick 1 project from that cluster → ship README → drill Interview.md questions for that topic
```

### What every public README must include

1. **Problem** - what wall you hit without this build
2. **Architecture** - one diagram or ASCII sketch
3. **How to run** - copy-paste commands that work on a clean machine
4. **Concepts map** - link to roadmap phases (e.g., "OOP Phase 4 encapsulation")
5. **Trade-offs** - one thing you simplified and why
6. **Next bridge** - what project you would do next and why

### Phase cluster quick map

| Roadmap file | Cluster | Example project IDs in this doc |
| --- | --- | --- |
| [`OOP.md`](./OOP.md) | Fundamentals (pre-OOP) | OOP-F01 to OOP-F04 |
| [`OOP.md`](./OOP.md) | Pillars (Phases 1-9) | OOP-P01 to OOP-P04 |
| [`OOP.md`](./OOP.md) | SOLID + Patterns (12-15) | OOP-S01 to OOP-S03 |
| [`OOP.md`](./OOP.md) | LLD + Portfolio (16-19) | OOP-L01 to OOP-L03 |
| [`CS.md`](./CS.md) | DS/A (Phases 3-9) | CS-D01 to CS-D04 |
| [`CS.md`](./CS.md) | Systems + Web (11-15) | CS-S01 to CS-S04 |
| [`CS.md`](./CS.md) | Design + Distributed (16-18) | CS-X01 to CS-X03 |
| [`Data.md`](./Data.md) | Analyst (1-10) | DATA-A01 to DATA-A05 |
| [`Data.md`](./Data.md) | Engineer (11-18) | DATA-E01 to DATA-E05 |
| [`Networks.md`](./Networks.md) | Core stack (1-14) | NET-01 to NET-05 |
| [`AI.md`](./AI.md) | Classical + Deep (1-11) | AI-01 to AI-05 |
| [`AI.md`](./AI.md) | LLM + Ship (12-18) | AI-06 to AI-09 |
| [`ODOO.md`](./ODOO.md) | Module to integration | ODOO-01 to ODOO-08 |
| Cross-cutting | Capstones | CAP-01 to CAP-06 |
| [`Interview.md`](./Interview.md) | Timed speak + build | INT-01 to INT-07 |

### Anti-patterns (do not do this)

- Starting a "full Netflix clone" before you can implement a stack from scratch
- Skipping README until "later" (later never ships)
- Copy-pasting LLD solutions without drawing your own class diagram first
- Building Odoo modules before you can explain `__init__` and encapsulation

---

## 2. Programming Fundamentals & OOP (`OOP.md`)

**File:** [`OOP.md`](./OOP.md)

**Scope:** Procedural fundamentals first, then pillars, SOLID, patterns, and LLD interview classics.

*Beginner project ideas also appear in [droidevs/python-projects-beginner](https://github.com/droidevs/python-projects-beginner) and [beginnersly.com Python projects](https://www.beginnersly.com/tutorials/python/python-projects) - use them for extra prompts, not as copy-paste solutions.*

---

### Fundamentals cluster (before heavy OOP)

*Do these after [`CS.md`](./CS.md) Phase 1, alongside or just before [`OOP.md`](./OOP.md) Phase 1.*

#### OOP-F01: CLI Calculator

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1, [`OOP.md`](./OOP.md) Phase 1 |
| **Difficulty** | Easy |

**Goal:** Parse user input, apply operations, and handle bad input without crashing.

**Concepts practiced:** variables, control flow, functions, error handling, REPL loop

**Steps:**

1. Accept two numbers and an operator (`+`, `-`, `*`, `/`) from stdin
2. Wrap parsing in try/except for invalid input
3. Refuse division by zero with a clear message
4. Loop until the user types `quit`
5. Extract `parse_input()` and `calculate(a, op, b)` as pure functions
6. Add `--help` and a minimal test for `calculate`

**Done when:**

- All four operators work; bad input never crashes the program
- README shows sample session and lists one parsing edge case you handled

**Stretch (optional):**

- Add parentheses or a small expression parser (shunting-yard)

---

#### OOP-F02: Number Guessing Game

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1 |
| **Difficulty** | Easy |

**Goal:** Practice loops, randomness, and bounded attempts with user feedback.

**Concepts practiced:** `while` loops, `if/elif`, `random`, comparison operators

**Steps:**

1. Pick a secret integer in a configurable range (default 1-100)
2. Prompt until correct or attempts exhausted (default 7)
3. Reply "higher", "lower", or "correct"
4. Print attempt count on win; reveal secret on loss
5. Add `play_round()` callable from `main`
6. Log each guess to a list and print history at end

**Done when:**

- Win and loss paths both behave; range and max attempts are CLI flags
- You can explain why a binary-search strategy wins in fewer guesses

**Stretch (optional):**

- Two-player mode where one human sets the secret

---

#### OOP-F03: File Organizer by Extension

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1, [`OOP.md`](./OOP.md) Phase 1 |
| **Difficulty** | Easy |

**Goal:** Walk a directory tree and sort files into extension folders safely.

**Concepts practiced:** `pathlib` or `os`, loops, string ops, idempotent file moves

**Steps:**

1. Accept a source directory path via CLI argument
2. Create subfolders like `images/`, `docs/`, `other/` from a mapping dict
3. Move (or copy first for safety) each file by extension
4. Skip hidden files and already-organized folders
5. Print a summary: counts per category
6. Add `--dry-run` that only prints planned moves

**Done when:**

- Dry-run and live modes both work on a test folder you create
- README documents what happens on name collisions

**Stretch (optional):**

- Organize by date modified instead of extension

---

#### OOP-F04: Password Generator & Strength Checker

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 1, [`OOP.md`](./OOP.md) Phase 4 (preview encapsulation) |
| **Difficulty** | Easy |

**Goal:** Generate cryptographically sensible passwords and score user-chosen ones.

**Concepts practiced:** `secrets` module, string categories, scoring functions

**Steps:**

1. Generate passwords with configurable length and character sets
2. Implement `score_password(pwd) -> int` using length and charset rules
3. Print human-readable feedback ("add symbols", "too short")
4. Never print or log generated passwords in debug mode by default
5. Add unit tests for scoring edge cases (empty, all lower, etc.)

**Done when:**

- Generator uses `secrets`, not `random`
- README explains why `random` is wrong for passwords

**Stretch (optional):**

- Read forbidden-password list from a file

---

### Pillars cluster (OOP Phases 1-9)

*Inspired in part by [muhammadwaheedairi/python-oop-practice](https://github.com/muhammadwaheedairi/python-oop-practice) - build your own versions.*

#### OOP-P01: Bank Account Hierarchy

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 2-7 |
| **Difficulty** | Medium |

**Goal:** Model accounts with shared behavior and specialized rules via inheritance and polymorphism.

**Concepts practiced:** classes, encapsulation, inheritance, polymorphism, `__repr__`

**Steps:**

1. Base `Account` with private balance, deposit, withdraw, and invariant checks
2. Subclasses: `SavingsAccount` (min balance), `CheckingAccount` (overdraft limit)
3. Block invalid withdrawals at the object boundary, not in `main`
4. Demonstrate polymorphism: loop over accounts and call `.withdraw(50)`
5. Add `@property` for read-only balance
6. Write tests that prove invalid state cannot be reached

**Done when:**

- No public mutable balance field
- README includes class diagram and MRO explanation for your hierarchy

**Stretch (optional):**

- Replace inheritance with composition (`AccountPolicy` strategy objects)

---

#### OOP-P02: Library Catalog System

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 4-10 |
| **Difficulty** | Medium |

**Goal:** Track books, members, and loans with clear object relationships.

**Concepts practiced:** composition, encapsulation, domain modeling, CRC-style thinking

**Steps:**

1. Classes: `Book`, `Member`, `Loan`, `Library`
2. `Library` lends/returns copies; enforce one active loan per copy
3. Persist state to JSON on exit; reload on start
4. Search by title or author via `Library.find_books(query)`
5. Sketch relationships (Member has many Loans, Book has many Copies)
6. Add overdue calculation without god-method on `Library`

**Done when:**

- Loan/return invariants hold after restart from JSON
- You can walk through associations in an interview without opening code

**Stretch (optional):**

- Fine calculation with a `FinePolicy` interface

---

#### OOP-P03: Shape Area Calculator (Abstraction Lab)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 5, 7 |
| **Difficulty** | Easy |

**Goal:** Use an abstract base class so callers depend on `Shape`, not concrete types.

**Concepts practiced:** ABCs, polymorphism, abstraction

**Steps:**

1. Define `Shape` ABC with `area()` and `perimeter()`
2. Implement `Circle`, `Rectangle`, `Triangle`
3. Collect shapes in a list and sum areas without `isinstance` chains
4. Validate constructor inputs (negative radius raises)
5. Add `__eq__` for value comparison on at least one shape
6. Test with a fake `Shape` stub in unit tests

**Done when:**

- Zero `if type ==` chains in area summation
- README explains what abstraction buys you vs a bag of functions

**Stretch (optional):**

- Serialize/deserialize shapes to JSON by type tag

---

#### OOP-P04: Contact Book with Encapsulation

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 3-4, 9 |
| **Difficulty** | Easy |

**Goal:** Store contacts behind a clean API; hide internal storage choices.

**Concepts practiced:** encapsulation, properties, dunder methods, validation

**Steps:**

1. `Contact` with validated email/phone setters
2. `ContactBook` with add, remove, search, list - no exposed raw dict
3. Implement `__len__` and `__contains__` on `ContactBook`
4. Pretty-print with `__repr__` on `Contact`
5. Persist to CSV or JSON via methods on `ContactBook`, not loose scripts
6. Test that invalid email cannot be assigned

**Done when:**

- External code never touches `_contacts` dict directly
- Search is case-insensitive and covered by a test

**Stretch (optional):**

- Tag contacts and filter by tag

---

### SOLID & Patterns cluster (OOP Phases 12-15)

#### OOP-S01: Notification System (Observer + Strategy)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 12, 15 |
| **Difficulty** | Medium |

**Goal:** Send notifications through multiple channels without modifying core domain logic for each new channel.

**Concepts practiced:** Open/Closed, Strategy, Observer, dependency direction

**Steps:**

1. Domain event: `OrderPlaced` with order id and total
2. `Notifier` interface with `send(event)` implementations: Email, SMS, Slack
3. `OrderService` publishes events to a list of subscribers
4. Register channels via config, not edits inside `OrderService`
5. Unit-test with fake `Notifier` that records messages
6. Document which SOLID letters each class satisfies

**Done when:**

- Adding `PushNotifier` requires zero changes to `OrderService`
- README maps classes to Observer vs Strategy roles

**Stretch (optional):**

- Async dispatch with a simple queue

---

#### OOP-S02: Payment Processor (Adapter + Factory)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 13-14 |
| **Difficulty** | Medium |

**Goal:** Integrate two fake payment APIs behind one `PaymentGateway` interface.

**Concepts practiced:** Adapter, Factory, Interface Segregation

**Steps:**

1. Define `PaymentGateway.charge(amount, currency) -> Receipt`
2. Write adapters for `StripeLikeAPI` and `PayPalLikeAPI` with different method names
3. Factory reads `GATEWAY=stripe|paypal` from env
4. Return unified `Receipt` or raise `PaymentError`
5. Test adapters with stub APIs
6. Explain in README why callers never import vendor classes

**Done when:**

- Switching gateway is one env var change
- Adapters contain all translation logic

**Stretch (optional):**

- Decorator for retry-on-timeout

---

#### OOP-S03: Text Formatter Pipeline (Decorator + Command)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 14-15 |
| **Difficulty** | Medium |

**Goal:** Apply reversible formatting steps to text using composable commands.

**Concepts practiced:** Decorator pattern, Command pattern, composition

**Steps:**

1. `Formatter` interface with `format(text) -> str`
2. Concrete formatters: trim, uppercase, replace tabs, wrap width
3. Compose formatters in a pipeline object
4. Command objects support `execute` and `undo` for at least two steps
5. CLI: `--steps trim,upper,wrap`
6. Test pipeline order matters (document order in README)

**Done when:**

- Pipeline is data-driven from CLI flags
- Undo works for wrap and replace steps

**Stretch (optional):**

- Persist command history to redo

---

### LLD & Portfolio cluster (OOP Phases 16-19)

#### OOP-L01: Parking Lot LLD

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phase 18, [`CS.md`](./CS.md) Phase 10 |
| **Difficulty** | Hard |

**Goal:** Classic LLD interview prompt - vehicles, spots, tickets, fees - with clean class boundaries.

**Concepts practiced:** LLD method, enums, composition, extensibility

**Steps:**

1. Write 1-page design: entities, APIs, concurrency assumptions
2. Implement `ParkingLot`, `Spot`, `Vehicle` (Car, Bike, Truck), `Ticket`
3. Support spot types and incompatible vehicle assignment rules
4. Calculate fee by duration with a pluggable `FeeStrategy`
5. Provide `park(vehicle)` and `unpark(ticket_id)` with full state transitions
6. Add tests for full lot, wrong spot type, and duplicate park attempt

**Done when:**

- Design doc and code both public; README links them
- You can whiteboard the diagram in under 5 minutes

**Stretch (optional):**

- Multi-floor lot with nearest-spot finder (BFS preview)

---

#### OOP-L02: Vending Machine State Machine

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phases 15, 18 |
| **Difficulty** | Medium |

**Goal:** Model vending machine behavior with explicit states instead of boolean flags.

**Concepts practiced:** State pattern, encapsulation, LLD

**Steps:**

1. States: Idle, HasMoney, Dispensing, OutOfStock
2. Events: insert coin, select item, dispense, cancel
3. Inventory per slot with refill API
4. Return change calculation with greedy coin logic
5. Reject invalid transitions with clear errors
6. Table in README: state x event -> next state

**Done when:**

- No giant `if self.state ==` in business methods (delegated to state objects)
- All transitions in table are covered by tests

**Stretch (optional):**

- Admin mode for price changes

---

#### OOP-L03: Elevator Controller (Multi-car LLD)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phase 18 |
| **Difficulty** | Hard |

**Goal:** Schedule elevator cars for pickup requests using a defined algorithm.

**Concepts practiced:** LLD, queues, strategy, simulation

**Steps:**

1. Define `Elevator`, `Controller`, `Request` (source floor, direction)
2. Implement SCAN or LOOK scan for one car first
3. Simulate requests from CLI or scripted file
4. Log each step: car id, floor, door open/close
5. Metrics: average wait time, max wait
6. Compare algorithm choice in README with trade-offs

**Done when:**

- Simulation runs deterministically from a seed file
- README states assumptions (number of floors, peak load, etc.)

**Stretch (optional):**

- Two cars with a simple dispatcher

---

## 3. Computer Science (`CS.md`)

**File:** [`CS.md`](./CS.md)

**Scope:** Data structures, algorithms, systems, web, databases, and design - each project maps to a phase cluster.

*Extra prompts: [yusufcore/python_practise](https://github.com/yusufcore/python_practise) for DS/A drills.*

---

### DS/A cluster (CS Phases 3-9)

#### CS-D01: Dynamic Array & Linked List from Scratch

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 3 |
| **Difficulty** | Medium |

**Goal:** Implement your own resizable array and singly linked list with the same API surface.

**Concepts practiced:** amortized analysis, pointers, Big O comparison

**Steps:**

1. `DynamicArray` with append, insert, delete, index get/set
2. `SinglyLinkedList` with the same operations
3. Benchmark or count operations for insert-at-head vs append
4. Implement `__iter__` on both
5. Document Big O per method in docstrings
6. Tests comparing behavior on edge cases (empty, single element)

**Done when:**

- No use of Python `list` inside `DynamicArray` storage
- README includes table: operation x structure x complexity

**Stretch (optional):**

- Doubly linked list with O(1) delete given node reference

---

#### CS-D02: Stack-Based Expression Evaluator

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 3 |
| **Difficulty** | Medium |

**Goal:** Evaluate infix arithmetic using two stacks or shunting-yard conversion.

**Concepts practiced:** stacks, parsing, operator precedence

**Steps:**

1. Support `+`, `-`, `*`, `/`, parentheses, integers
2. Implement shunting-yard to RPN, then evaluate
3. Reject malformed input with position hint
4. Unit tests for nested parens and unary minus
5. CLI accepts one expression string
6. Explain algorithm in README with one worked example

**Done when:**

- `"3 + 5 * (2 - 8)"` evaluates correctly
- Malformed input never throws uncaught exceptions

**Stretch (optional):**

- Variables via `x=3; x+1`

---

#### CS-D03: LRU Cache

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 3, 6 |
| **Difficulty** | Hard |

**Goal:** `get` and `put` in O(1) average with a capacity cap.

**Concepts practiced:** hash map + doubly linked list, design under constraints

**Steps:**

1. Define `LRUCache(capacity)` with `get(key)`, `put(key, value)`
2. Track usage order; evict LRU on overflow
3. `get` updates recency
4. Tests: eviction order, update existing key, capacity 1 edge case
5. Optional: thread-unsafe version first, document if adding locks
6. README diagram of map node <-> list node links

**Done when:**

- Pass a standard LeetCode-style test suite you write yourself
- Complexity claims match implementation

**Stretch (optional):**

- TTL expiry per key

---

#### CS-D04: Graph Route Planner (BFS/DFS)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 8 |
| **Difficulty** | Medium |

**Goal:** Find shortest path in an unweighted city graph and compare BFS vs DFS visits.

**Concepts practiced:** adjacency list, BFS, DFS, path reconstruction

**Steps:**

1. Load graph from JSON (nodes, edges)
2. Implement BFS shortest path and DFS reachability
3. Print visited order for both on same graph
4. CLI: `shortest A D` and `reach A`
5. Detect disconnected components count
6. Visualize small graph as ASCII in README

**Done when:**

- BFS returns shortest path length and path list
- You explain when DFS is wrong for shortest path

**Stretch (optional):**

- Dijkstra with weighted edges

---

### Systems, Web & DB cluster (CS Phases 11-15)

#### CS-S01: Mini HTTP Server (Raw Sockets)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 12-13, [`Networks.md`](./Networks.md) Phase 13 |
| **Difficulty** | Hard |

**Goal:** Serve static files over HTTP/1.1 using sockets only (no Flask).

**Concepts practiced:** TCP, HTTP parsing, status codes, MIME types

**Steps:**

1. TCP listen on port 8080; accept one client at a time first
2. Parse request line and headers minimally
3. Serve `GET /index.html` from a `public/` folder
4. Return 404 and 405 for missing paths and wrong verbs
5. Log method, path, status to stdout
6. Document request/response raw bytes in README

**Done when:**

- Browser loads HTML and CSS from your server
- curl shows correct headers and status codes

**Stretch (optional):**

- `Connection: keep-alive` for multiple requests

---

#### CS-S02: URL Shortener (Design + Code)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 13-14, 17 |
| **Difficulty** | Medium |

**Goal:** REST API for short links with redirect and basic analytics.

**Concepts practiced:** REST design, SQL schema, hashing/base62, indexes

**Steps:**

1. Design schema: `urls(id, slug, target, created_at, hits)`
2. `POST /api/shorten` with URL validation
3. `GET /:slug` redirects 302 and increments hits
4. Use SQLite or Postgres; index slug column
5. Write API tests for duplicate slug handling
6. One-page design doc: capacity estimate, collision strategy

**Done when:**

- Redirect works in browser; hit count persists
- README includes ER diagram and sample curl commands

**Stretch (optional):**

- Expiring links with TTL column

---

#### CS-S03: Task Queue Worker (Processes vs Threads)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 11 |
| **Difficulty** | Medium |

**Goal:** Compare thread pool vs process pool for CPU vs IO fake workloads.

**Concepts practiced:** threads, processes, GIL intuition, queues

**Steps:**

1. Producer enqueues jobs (sleep=IO, compute=CPU)
2. Worker pool consumes and writes results
3. Run same workload with `ThreadPoolExecutor` and `ProcessPoolExecutor`
4. Plot or tabulate throughput vs worker count
5. Explain results in README with GIL mention for Python
6. Graceful shutdown on SIGINT

**Done when:**

- Table shows IO-bound favors threads, CPU-bound favors processes (on your machine)
- Code is runnable with one command

**Stretch (optional):**

- Persistent queue with Redis or SQLite

---

#### CS-S04: Blog API with Auth

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 13-15 |
| **Difficulty** | Hard |

**Goal:** CRUD posts with password hashing and session or JWT auth.

**Concepts practiced:** REST, SQL, bcrypt/argon2, middleware, SQL injection prevention

**Steps:**

1. Users register/login; store hashed passwords only
2. JWT or session cookie protects `POST/PATCH/DELETE` posts
3. Parameterized SQL or ORM only - no string concat queries
4. Posts belong to authors; users cannot edit others' posts
5. Integration tests for auth failures and happy path
6. README threat model: what you protect and what you defer

**Done when:**

- SQL injection attempt in a test fails safely
- OpenAPI or route table documented

**Stretch (optional):**

- Refresh tokens or rate limiting on login

---

### Design & Distributed cluster (CS Phases 16-18)

#### CS-X01: Rate Limiter Library

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 17 |
| **Difficulty** | Medium |

**Goal:** Token bucket or sliding window limiter reusable in any API.

**Concepts practiced:** algorithms, time windows, system design building block

**Steps:**

1. Interface: `allow(key) -> bool`
2. Implement token bucket with configurable rate and burst
3. In-memory store first; thread-safe if using threads
4. Demo middleware for a tiny HTTP app
5. Tests advance clock or use injectable time source
6. README compares token bucket vs fixed window

**Done when:**

- Burst then steady rate behaves as documented
- Unit tests do not depend on real sleep for correctness

**Stretch (optional):**

- Redis-backed distributed limiter (design note enough if no Redis)

---

#### CS-X02: Consistent Hash Ring Simulator

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 18 |
| **Difficulty** | Medium |

**Goal:** Visualize key distribution when nodes join or leave the ring.

**Concepts practiced:** consistent hashing, minimal remapping on churn

**Steps:**

1. Hash keys and nodes to a ring (0..2^n-1 or library hash)
2. Assign key to first node clockwise
3. CLI: add/remove node, print moved key fraction
4. Compare vs naive mod-N hashing in README
5. Plot histogram of keys per node (matplotlib or ASCII)
6. Document virtual nodes option

**Done when:**

- Adding one node moves ~1/N keys, not nearly all
- README ties to cache sharding use case

**Stretch (optional):**

- Replication factor 3 placement

---

#### CS-X03: Event Sourcing Lite (Bank Ledger)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 14, 18 |
| **Difficulty** | Hard |

**Goal:** Store account state as append-only events; rebuild balance from log.

**Concepts practiced:** event sourcing, immutability, projections

**Steps:**

1. Events: `AccountOpened`, `MoneyDeposited`, `MoneyWithdrawn`
2. Append to JSON or SQL event table; no in-place balance updates
3. Projection rebuilds current balance from stream
4. Idempotent replay using event ids
5. Snapshot every N events for faster rebuild
6. Tests: replay twice yields same balance

**Done when:**

- You can delete projection table and rebuild from events
- README contrasts with CRUD-only design

**Stretch (optional):**

- Optimistic concurrency with expected version

---

## 4. Data Analyst & Engineer (`Data.md`)

**File:** [`Data.md`](./Data.md)

**Scope:** Analyst projects (Phases 1-10) cement SQL, stats, and storytelling; engineer projects (11-18) cement pipelines and warehouses.

---

### Analyst cluster (Data Phases 1-10)

#### DATA-A01: Dirty CSV Cleaner

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 2-3, 8 |
| **Difficulty** | Easy |

**Goal:** Ingest a messy CSV and output an analysis-ready table with a data dictionary.

**Concepts practiced:** types, nulls, parsing dates, Pandas or stdlib csv

**Steps:**

1. Start from a deliberately dirty file (mixed dates, `$` in numbers, dup rows)
2. Profile columns: null rate, unique count, sample values
3. Standardize dtypes; parse dates to ISO
4. Dedupe with documented key
5. Export clean CSV + `data_dictionary.md`
6. One pytest or assert block on row count and null rules

**Done when:**

- Clean file loads without manual Excel fixes
- README states every transform and why

**Stretch (optional):**

- Great Expectations or pandera schema validation

---

#### DATA-A02: Spreadsheet KPI Dashboard (Export to HTML)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 2, 9 |
| **Difficulty** | Easy |

**Goal:** Answer three business questions from a sheet and publish static charts.

**Concepts practiced:** PivotTables or Pandas pivot, chart choice, metric definition

**Steps:**

1. Pick a public sample dataset (sales, HR, web traffic)
2. Define 3 KPIs with formulas in README
3. Build bar, line, and one honest comparison chart
4. Export Plotly/Matplotlib HTML or PNG gallery
5. Write 200-word insight memo: so what, now what
6. Note one chart you rejected and why

**Done when:**

- Memo references specific numbers from your output
- Charts avoid dual-axis lies (or explain if used)

**Stretch (optional):**

- Parameterized notebook with papermill

---

#### DATA-A03: SQL Case Study Database

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 4-6 |
| **Difficulty** | Medium |

**Goal:** Design a mini star-ish schema and answer 10 analyst questions in SQL only.

**Concepts practiced:** joins, aggregations, CTEs, window functions, grain

**Steps:**

1. Model: customers, orders, order_items, products (SQLite or Postgres)
2. Seed with realistic skew and NULLs
3. Write 10 questions: retention, AOV, top-N, running total
4. One query uses window functions; one uses CTE
5. Document grain per query in comments
6. `queries/` folder with numbered `.sql` files

**Done when:**

- All queries run via single seed script
- README includes ER sketch and hardest query explanation

**Stretch (optional):**

- Explain plan for one slow query

---

#### DATA-A04: A/B Test Analyzer

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 7 |
| **Difficulty** | Medium |

**Goal:** Analyze a simulated experiment and decide ship or no-ship with uncertainty stated.

**Concepts practiced:** hypothesis testing, conversion rates, confidence, pitfalls

**Steps:**

1. Generate or use sample A/B click data with assignment column
2. Compute conversion rate per variant
3. Run chi-square or z-test; report p-value and CI
4. Check sample ratio mismatch and novelty effects (discuss)
5. One-page decision memo with recommendation
6. Script reproduces memo numbers from raw CSV

**Done when:**

- Memo names both statistical and business thresholds
- You explain what p-value is not

**Stretch (optional):**

- Bayesian beta-binomial posterior

---

#### DATA-A05: EDA Notebook to Executive Summary

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 10 |
| **Difficulty** | Medium |

**Goal:** Full EDA pipeline ending in metrics definitions stakeholders can adopt.

**Concepts practiced:** EDA, metric design, documentation, reproducibility

**Steps:**

1. Pick dataset with at least one datetime and one categorical
2. Univariate and bivariate sections with labeled plots
3. Define 2 north-star and 3 diagnostic metrics
4. Data quality section: missing, outliers, duplicates
5. Export notebook to HTML; summary PDF or MD
6. `requirements.txt` pins versions

**Done when:**

- Someone else can rerun notebook top to bottom
- Metrics have plain-English definitions

**Stretch (optional):**

- dbt-style metric YAML for one metric

---

### Engineer cluster (Data Phases 11-18)

#### DATA-E01: Mini ETL Pipeline (CSV to Postgres)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phases 11, 13 |
| **Difficulty** | Medium |

**Goal:** Extract from API or CSV, transform, load into Postgres idempotently.

**Concepts practiced:** ETL, idempotency, schemas, logging

**Steps:**

1. Docker Compose: Postgres + optional Adminer
2. Python script: extract (HTTP or file), transform, load
3. Upsert on natural key; log rows in/out/rejected
4. Config via env vars; no secrets in repo
5. Makefile or README one-liner to run
6. Test on empty re-run (no duplicate facts)

**Done when:**

- Second run does not duplicate rows
- README documents source schema to target schema mapping

**Stretch (optional):**

- Airflow DAG wrapper with retry

---

#### DATA-E02: Star Schema Warehouse Build

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 12 |
| **Difficulty** | Medium |

**Goal:** Build fact + dimension tables from OLTP-like JSON exports.

**Concepts practiced:** dimensional modeling, SCD Type 1 vs 2, grain

**Steps:**

1. Stage raw JSON to landing tables
2. Build `dim_customer`, `dim_product`, `fact_sales` with explicit grain
3. Implement SCD2 on customer address (optional column tracking)
4. Document unknown member handling
5. Sample analyst query joins star without fan-out
6. dbt or plain SQL migrations in repo

**Done when:**

- One fact row = one order line (or chosen grain)
- README star diagram matches DDL

**Stretch (optional):**

- Incremental load watermark column

---

#### DATA-E03: dbt Transformation Project

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 15 |
| **Difficulty** | Medium |

**Goal:** Layer staging, intermediate, and mart models with tests.

**Concepts practiced:** dbt, ref(), tests, documentation

**Steps:**

1. Init dbt project against Postgres or DuckDB
2. `stg_`, `int_`, `mart_` models for one business domain
3. Add `unique`, `not_null`, and one `relationships` test
4. Generate docs; screenshot lineage in README
5. Seed data for CI run
6. GitHub Action or local script runs `dbt test`

**Done when:**

- `dbt build` passes on clean clone
- README explains model naming convention

**Stretch (optional):**

- Snapshot for SCD2

---

#### DATA-E04: Kafka Event Producer/Consumer

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 18 |
| **Difficulty** | Hard |

**Goal:** Stream synthetic click events to a topic and aggregate counts in a consumer.

**Concepts practiced:** Kafka basics, partitions, at-least-once, streaming agg

**Steps:**

1. Docker Compose with Kafka (or Redpanda)
2. Producer emits JSON events with key=user_id
3. Consumer maintains per-minute counts in SQLite or prints tumbling window
4. Document partition key choice
5. Kill consumer mid-run; restart and note duplicate handling
6. README diagram: producer -> topic -> consumer

**Done when:**

- End-to-end demo in under 5 commands
- You explain offset commit trade-off

**Stretch (optional):**

- Exactly-once-ish idempotent sink

---

#### DATA-E05: Spark Batch Job on Local Cluster

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 17 |
| **Difficulty** | Hard |

**Goal:** Aggregate a medium CSV with PySpark locally (Docker or standalone).

**Concepts practiced:** Spark DataFrame, shuffle, partitions, lazy eval

**Steps:**

1. Input 1M+ row CSV (generate if needed)
2. Job: group by category, sum revenue, top 10
3. Tune `spark.sql.shuffle.partitions` and note runtime
4. Explain narrow vs wide transformation in README
5. Write output parquet partitioned by date
6. Compare pandas vs Spark timing on same machine

**Done when:**

- Spark job runs non-interactively via `spark-submit`
- README notes when Spark is overkill

**Stretch (optional):**

- Broadcast join on small lookup table

---

## 5. Computer Networks (`Networks.md`)

**File:** [`Networks.md`](./Networks.md)

**Scope:** Labs and small programs that make the stack visible - fewer projects, more write-ups.

---

#### NET-01: TCP Echo Client/Server

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phases 10-11 |
| **Difficulty** | Easy |

**Goal:** Echo bytes over TCP and print the four-tuple on connect.

**Concepts practiced:** sockets, TCP stream, client/server, byte strings

**Steps:**

1. Server binds localhost high port; accepts loop
2. Client sends line; server echoes until `quit`
3. Log local and remote addr on server
4. Handle broken pipe gracefully
5. Optional: concurrent clients with threading
6. Paste sample session in README

**Done when:**

- Works with `telnet` or netcat as client too
- You explain connection vs listening socket

**Stretch (optional):**

- UDP echo counterpart and compare semantics

---

#### NET-02: HTTP Raw Exchange Lab

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 13 |
| **Difficulty** | Easy |

**Goal:** Craft HTTP/1.1 request by hand with netcat or Python socket.

**Concepts practiced:** request line, headers, status codes, Host header

**Steps:**

1. Connect to `example.com:80` or local server
2. Send `GET / HTTP/1.1` with Host and Connection headers
3. Capture full response; highlight status and Content-Type
4. Repeat with `HEAD` and wrong path for 404
5. Document byte-exact request in README
6. List headers you must send vs optional

**Done when:**

- You receive valid HTML without curl
- README explains persistent vs close behavior

**Stretch (optional):**

- POST with form body to httpbin

---

#### NET-03: DNS Lookup Tracer Narrative

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 12 |
| **Difficulty** | Easy |

**Goal:** Trace resolution steps for one domain and publish a annotated write-up.

**Concepts practiced:** DNS records, recursion, TTL, tools

**Steps:**

1. Pick a domain you control or a public site
2. Run `dig` +trace or equivalent; save output
3. Explain A, AAAA, CNAME, NS roles for your case
4. Note TTL values and cache implications
5. Diagram resolver -> root -> TLD -> authoritative
6. Tie narrative to [`Interview.md`](./Interview.md) URL question

**Done when:**

- Public markdown post with redacted sensitive data if needed
- Reader can follow without running commands themselves

**Stretch (optional):**

- Compare DNS over HTTPS resolver

---

#### NET-04: Wireshark Capture Write-up

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 15 |
| **Difficulty** | Medium |

**Goal:** Capture a failing or interesting exchange and explain layers.

**Concepts practiced:** Wireshark, filters, TCP handshake, TLS overview

**Steps:**

1. Reproduce HTTPS login or local HTTP failure
2. Capture during reproduction; mark filter used
3. Screenshot SYN-SYN/ACK-ACK sequence
4. Identify one retransmission or RST if present
5. Map one packet to OSI layers in prose
6. Publish sanitized PCAP or screenshots only

**Done when:**

- Write-up answers: what happened, which layer, evidence packet
- Filter string documented

**Stretch (optional):**

- Decrypt local TLS with session keys (dev only)

---

#### NET-05: Traceroute Story (Path to Host)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phases 5-6, 7 |
| **Difficulty** | Easy |

**Goal:** Run traceroute to three hosts and interpret hop behavior.

**Concepts practiced:** ICMP, TTL, routing, NAT hints

**Steps:**

1. Trace to local gateway, regional site, global CDN
2. Record latency jumps and `*` hops
3. Relate hops to likely AS or geography (whois optional)
4. Explain why last miles differ across targets
5. ASCII map of paths in README
6. Link to routing phase concepts

**Done when:**

- Three traces compared in one table
- You explain one anonymized hop and one timeout

**Stretch (optional):**

- MTR over 50 cycles for packet loss

---

#### NET-06: Subnet Calculator CLI

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 5 |
| **Difficulty** | Medium |

**Goal:** Given CIDR, print network, broadcast, host range, and usable count.

**Concepts practiced:** CIDR, bitwise ops, address planning

**Steps:**

1. Parse `192.168.1.0/24` style input
2. Validate prefix length per IPv4 rules
3. Output network, broadcast, first/last host
4. Flag network/broadcast addresses as unusable for hosts
5. Tests for /32, /31 edge cases you document
6. README with one office subnetting example

**Done when:**

- Matches known online calculator on test vectors
- Invalid input returns helpful error

**Stretch (optional):**

- IPv6 /64 basics

---

#### NET-07: TLS Certificate Inspector

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md) Phase 14 |
| **Difficulty** | Medium |

**Goal:** Fetch a site's certificate chain and summarize trust fields.

**Concepts practiced:** TLS, certificates, SAN, expiry, chain of trust

**Steps:**

1. Script connects to `host:443` with ssl module
2. Print subject, issuer, notBefore, notAfter, SANs
3. Warn if expiry within 30 days
4. Save PEM to file optionally
5. README explains what CA signing means
6. Compare cert for two subdomains

**Done when:**

- Output readable without openssl CLI
- You explain hostname verification vs cert validity

**Stretch (optional):**

- Pin expected SPKI hash for a known host

---

## 6. Artificial Intelligence (`AI.md`)

**File:** [`AI.md`](./AI.md)

**Scope:** Classical ML baselines first, then deep learning, then LLM apps with evals.

---

#### AI-01: sklearn Tabular Baseline

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phases 4-5 |
| **Difficulty** | Easy |

**Goal:** Train and evaluate a logistic regression on a public tabular dataset.

**Concepts practiced:** train/test split, metrics, baseline, overfitting check

**Steps:**

1. Load Titanic or similar via sklearn/openml
2. Simple preprocessing pipeline (impute, encode)
3. Fit logistic regression; report accuracy, precision, recall, ROC-AUC
4. Compare to dummy classifier baseline
5. Save model with joblib; load and predict in second script
6. README states metric choice for imbalanced data

**Done when:**

- Pipeline reproducible from one command
- You explain one metric weakness on this dataset

**Stretch (optional):**

- Cross-validation with std dev of scores

---

#### AI-02: Decision Tree vs Random Forest Showdown

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 6 |
| **Difficulty** | Medium |

**Goal:** Compare variance and interpretability between single tree and ensemble.

**Concepts practiced:** bagging, feature importance, hyperparameters

**Steps:**

1. Same dataset as AI-01 or credit default
2. Train DecisionTree with max_depth sweep
3. Train RandomForest; plot depth vs score
4. Print top feature importances for both
5. Discuss overfitting on training score vs val
6. Export comparison table to README

**Done when:**

- Forest beats single tree on held-out metric
- You explain bagging in one paragraph

**Stretch (optional):**

- Gradient boosting with XGBoost or sklearn GBM

---

#### AI-03: PyTorch MNIST Training Loop

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phases 7-9 |
| **Difficulty** | Medium |

**Goal:** Write training loop from scratch without high-level Trainer magic.

**Concepts practiced:** tensors, autograd, loss, optimizer, epochs

**Steps:**

1. Load MNIST with torchvision
2. Define small MLP or CNN
3. Loop: forward, loss, backward, step; log loss per epoch
4. Evaluate test accuracy after training
5. Save/load `state_dict`
6. Plot loss curve in README

**Done when:**

- Test accuracy above 95% with your MLP or above 98% with CNN
- Loop code is yours, not copy-pasted Trainer

**Stretch (optional):**

- Learning rate schedule

---

#### AI-04: Transfer Learning Image Classifier

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 10 |
| **Difficulty** | Medium |

**Goal:** Fine-tune a pretrained CNN on a small custom image folder.

**Concepts practiced:** transfer learning, frozen layers, data augmentation

**Steps:**

1. Collect 2-3 classes, ~50 images each (or use flowers102 subset)
2. Freeze backbone; train new head
3. Unfreeze last block; lower LR fine-tune
4. Report confusion matrix
5. Export TorchScript or ONNX optional
6. README compares train-from-scratch vs transfer on small data

**Done when:**

- Beats scratch model on same data budget
- Augmentation described

**Stretch (optional):**

- Grad-CAM visualization for one prediction

---

#### AI-05: Embedding Similarity Search

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 12 |
| **Difficulty** | Medium |

**Goal:** Embed sentences and retrieve nearest neighbors by cosine similarity.

**Concepts practiced:** embeddings, cosine similarity, vector search

**Steps:**

1. Corpus of 100+ short texts (FAQ, docs, or wiki snippets)
2. Embed with sentence-transformers or OpenAI API (document cost)
3. Build brute-force index; query top-5 neighbors
4. CLI interactive search
5. Show one failure case (false neighbor) and hypothesize why
6. README diagram: query -> embed -> compare -> rank

**Done when:**

- Top result relevant for 8/10 hand-picked queries
- Cosine formula and normalization explained

**Stretch (optional):**

- FAISS index for speed

---

#### AI-06: Tiny RAG over Your Notes

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 15 |
| **Difficulty** | Hard |

**Goal:** Chunk markdown notes, retrieve, and answer with citations.

**Concepts practiced:** chunking, retrieval, prompting, grounding

**Steps:**

1. Ingest folder of `.md` roadmap excerpts
2. Chunk ~500 tokens with overlap; embed to local vector store
3. Query pipeline: retrieve top-k, build prompt with sources
4. LLM API or local model generates answer with `[source]` tags
5. Log retrieved chunks for debugging
6. Eval set: 5 questions with expected source doc

**Done when:**

- Answers cite correct file for 4/5 eval questions
- README documents chunk size trade-off

**Stretch (optional):**

- Hybrid BM25 + vector retrieval

---

#### AI-07: Prompt Eval Suite

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phases 14, 18 |
| **Difficulty** | Medium |

**Goal:** Compare 3 prompt templates on a fixed task with a score rubric.

**Concepts practiced:** prompting, eval design, failure modes

**Steps:**

1. Task: extract JSON fields from messy customer emails (synthetic set)
2. Write 3 prompts (zero-shot, few-shot, structured output)
3. Run 20 examples; grade JSON validity and field accuracy
4. Table: prompt x success rate x avg tokens
5. Document one hallucination example
6. Store prompts as versioned files

**Done when:**

- Repro script outputs same scores on rerun
- README names when to change prompt vs change model

**Stretch (optional):**

- LLM-as-judge with human spot-check

---

#### AI-08: ReAct-Style Tool Agent (Safe Subset)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 17 |
| **Difficulty** | Hard |

**Goal:** Agent loop that calls whitelisted tools (calculator, datetime, search stub).

**Concepts practiced:** agents, tool schemas, loop limits, guardrails

**Steps:**

1. Define 2-3 tools with JSON schema descriptions
2. Loop: model proposes tool call -> execute -> feed result -> max 5 steps
3. Refuse tools not on allowlist
4. Timeout and max token budget
5. Log full trace for one successful and one failed run
6. README threat model: prompt injection via tool output

**Done when:**

- Solves 3/5 multi-step questions in eval set
- Cannot execute shell or file delete (explicitly out of scope)

**Stretch (optional):**

- Human approval gate before tool execution

---

#### AI-09: MLflow or CSV Experiment Tracker

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 18 |
| **Difficulty** | Easy |

**Goal:** Track hyperparameters and metrics across runs systematically.

**Concepts practiced:** MLOps basics, reproducibility, experiment comparison

**Steps:**

1. Wrap AI-01 or AI-03 training in experiment logger
2. Log params, metrics, artifact path per run
3. Run grid of at least 6 configs
4. UI or CSV summary of best run
5. Tag best model `staging`
6. README screenshot or table of runs

**Done when:**

- You can answer "which run won and why" from logs alone
- Seeds documented for reproducibility

**Stretch (optional):**

- Promote model only if metric beats previous best

---

## 7. Odoo Engineer (`ODOO.md`)

**File:** [`ODOO.md`](./ODOO.md) (companion roadmap)  
**Official tutorials: [odoo/tutorials](https://github.com/odoo/tutorials) - align module structure with upstream examples, but implement features yourself.*

**Prerequisites:** comfortable with [`OOP.md`](./OOP.md) Phases 1-9 and basic SQL from [`Data.md`](./Data.md) Phase 4.

---

#### ODOO-01: Custom Todo Module

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 1-2 |
| **Difficulty** | Easy |

**Goal:** Create installable module with todo model, views, and menu.

**Concepts practiced:** module manifest, models.Model, XML views, ACLs

**Steps:**

1. Scaffold module `my_todo` with `__manifest__.py`
2. Model fields: name, description, done, deadline
3. Tree and form views; menu under custom app
4. Basic access rights for user group
5. Demo data XML for 3 records
6. README: install steps on Odoo 17+ dev instance

**Done when:**

- Module installs without error; CRUD works in UI
- Uninstall leaves no orphan tables (or document expected residue)

**Stretch (optional):**

- Kanban view by status

---

#### ODOO-02: Library Management Module

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 2-3 |
| **Difficulty** | Medium |

**Goal:** Books, authors, borrowers, loans with relational fields.

**Concepts practiced:** Many2one, One2many, constraints, onchange

**Steps:**

1. Models: `library.book`, `library.author`, `library.loan`
2. SQL constraint: no duplicate ISBN
3. Python constraint: return date after borrow date
4. Onchange warns if book already on loan
5. Search filters and group by author
6. Security: librarian vs reader groups

**Done when:**

- Cannot create invalid loan via UI or ORM
- README ER diagram matches models

**Stretch (optional):**

- Email reminder on overdue (cron)

---

#### ODOO-03: Inherit `sale.order` (Discount Cap)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 4 |
| **Difficulty** | Medium |

**Goal:** Extend standard Sales with custom field and validation on order confirm.

**Concepts practiced:** `_inherit`, super(), xpath views, business rules

**Steps:**

1. Add field `x_discount_reason` on `sale.order`
2. Override confirm: block if discount > 20% without reason
3. Inherit form view with xpath after discount field
4. Unit test with TransactionCase or HttpCase
5. Module depends on `sale`
6. Document upgrade path when Odoo version bumps

**Done when:**

- Standard sale flow works; rule fires on edge case
- View inheritance does not duplicate fields

**Stretch (optional):**

- Approval workflow state for large discounts

---

#### ODOO-04: OWL Dashboard Widget

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 5-6 |
| **Difficulty** | Hard |

**Goal:** Custom backend widget showing KPI count from RPC.

**Concepts practiced:** OWL components, assets bundle, RPC, QWeb integration

**Steps:**

1. JS OWL component fetches count from custom JSON route or ORM
2. Register widget in backend assets
3. Embed on existing model form or systray
4. Loading and error states in UI
5. SCSS matches Odoo spacing roughly
6. README screenshots of widget mounted

**Done when:**

- Widget loads without console errors on fresh install
- Data refreshes on button click

**Stretch (optional):**

- Small chart with Chart.js

---

#### ODOO-05: Webhook Receiver Controller

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 7 |
| **Difficulty** | Medium |

**Goal:** HTTP controller accepts signed webhook and creates CRM lead.

**Concepts practiced:** `@http.route`, auth, CSRF, idempotency, logging

**Steps:**

1. Route `POST /api/webhook/lead` with JSON body
2. Verify HMAC signature header with secret in config
3. Map payload to `crm.lead` create vals
4. Idempotency key stored to ignore duplicates
5. Return 200/401/400 appropriately
6. Test with curl examples in README

**Done when:**

- Invalid signature rejected; duplicate payload ignored
- No CSRF on public route by design (document why)

**Stretch (optional):**

- Queue job for heavy processing

---

#### ODOO-06: Report QWeb PDF (Invoice Summary)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 8 |
| **Difficulty** | Medium |

**Goal:** Custom PDF report on sales orders with aggregated lines.

**Concepts practiced:** QWeb, report action, paperformat, translations

**Steps:**

1. Report template listing order lines grouped by product category
2. Subtotal per category and grand total
3. Bind report to `sale.order` print menu
4. Test with multi-currency order if available
5. Add company logo from standard field
6. PDF screenshot in README

**Done when:**

- PDF generates from UI for sample order
- Template uses t-foreach correctly

**Stretch (optional):**

- XLSX export with same data

---

#### ODOO-07: Automated Test Suite for Module

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 9 |
| **Difficulty** | Medium |

**Goal:** Tag-fast tests covering create, constraint, and workflow on your module.

**Concepts practiced:** Odoo test tags, setUp, mock, CI

**Steps:**

1. Tests in `tests/` imported from `__init__.py`
2. Cover at least one constraint violation assertion
3. Tag `@tagged('post_install', '-at_install')` as appropriate
4. Run `./odoo-bin -i my_module --test-enable --stop-after-init`
5. Optional GitHub Action on push (docker odoo)
6. README badge or log snippet showing green run

**Done when:**

- CI or local command exits 0 with tests enabled
- One test proves business rule, not only `assertTrue(True)`

**Stretch (optional):**

- Tour test with HttpCase browser simulation

---

#### ODOO-08: External API Integration (Rates or Geo)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md) Phase 10 |
| **Difficulty** | Hard |

**Goal:** Scheduled job fetches external API and stores results on model.

**Concepts practiced:** cron, requests, error handling, config parameters

**Steps:**

1. Model stores rate/date or geo lookup cache
2. `ir.cron` daily job calls API with timeout and retry
3. Settings page for API key via `ir.config_parameter`
4. Log failures to chatter or logger model
5. Manual "refresh" button on form
6. Graceful degrade if API down

**Done when:**

- Cron runs; manual refresh matches
- Secrets not in git

**Stretch (optional):**

- Circuit breaker after N failures

---

## 8. Cross-cutting / Portfolio Capstones

**Purpose:** Combine two or more tracks after you have shipped cluster projects. These are still bounded - not production ERP replacements.

| ID | Combines | Difficulty |
| --- | --- | --- |
| CAP-01 | CS + OOP | Medium |
| CAP-02 | CS + Data | Hard |
| CAP-03 | CS + Networks | Hard |
| CAP-04 | Data + AI | Hard |
| CAP-05 | Odoo + Data | Hard |
| CAP-06 | All tracks | Hard |

---

#### CAP-01: ERP-Lite Inventory CLI/API

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) LLD, [`CS.md`](./CS.md) Phases 13-14 |
| **Difficulty** | Medium |

**Goal:** Small inventory service with products, stock movements, and REST API.

**Concepts practiced:** layered architecture, REST, SQL, domain invariants

**Steps:**

1. Domain layer: Product, Warehouse, StockMove with quantity rules
2. Service layer orchestrates transactions
3. SQLite persistence; repository interfaces for testing
4. FastAPI or Flask REST endpoints
5. Tests on domain without HTTP
6. README architecture diagram with dependency direction

**Done when:**

- Cannot oversell stock in concurrent sequential tests
- API documented with curl examples

**Stretch (optional):**

- Optimistic locking on stock version column

---

#### CAP-02: Analytics Dashboard on App Database

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 14, [`Data.md`](./Data.md) Phases 8-10 |
| **Difficulty** | Hard |

**Goal:** Read replica or nightly export from CAP-01 (or any CRUD app) into analyst mart.

**Concepts practiced:** ETL, star schema, visualization, metric alignment

**Steps:**

1. Export OLTP tables to staging nightly
2. Build `fact_movements`, `dim_product` in warehouse DB
3. Pandas or SQL dashboard: stock turns, low-stock alerts
4. Align metric definitions with app team doc
5. Schedule via cron or Airflow mini-DAG
6. Public notebook or Streamlit read-only app

**Done when:**

- Numbers reconcile to source within documented tolerance
- README defines grain and refresh SLA

**Stretch (optional):**

- dbt tests on mart

---

#### CAP-03: Full-Stack App + Packet Capture Postmortem

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 13, [`Networks.md`](./Networks.md) Phases 13-15 |
| **Difficulty** | Hard |

**Goal:** Deploy tiny app locally, capture login flow, narrate full stack in one write-up.

**Concepts practiced:** HTTP, TLS, DNS, debugging, full-stack integration

**Steps:**

1. Deploy hello-auth app (CAP-01 API or minimal login)
2. Configure local DNS or hosts entry optional
3. Wireshark capture of successful and failed login
4. Annotate TCP, TLS, HTTP layers on one screenshot each
5. Tie to [`Interview.md`](./Interview.md) Track E URL question
6. Publish blog-style MD with diagrams

**Done when:**

- Reader sees code, packets, and prose in one repo
- Failure case explained with evidence

**Stretch (optional):**

- HTTP/2 capture comparison

---

#### CAP-04: RAG on Warehouse Documentation

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 10, [`AI.md`](./AI.md) Phase 15 |
| **Difficulty** | Hard |

**Goal:** Ask natural language questions about your CAP-02 metrics and schema docs.

**Concepts practiced:** RAG, data catalog, eval, grounding

**Steps:**

1. Corpus: schema YAML, metric definitions, EDA memos
2. Chunk and index; metadata tags per table
3. Chat UI returns answer + cited doc sections
4. Eval questions: "What is AOV grain?", "Which column is PII?"
5. Log retrieval misses; tune chunk boundaries
6. README compares manual catalog search vs RAG

**Done when:**

- 5/7 catalog questions answered with correct citation
- PII question refuses if not in corpus

**Stretch (optional):**

- SQL generation with human-in-loop approval

---

#### CAP-05: Odoo + External Analytics Sync

| Field | Detail |
| --- | --- |
| **Roadmap** | [`ODOO.md`](./ODOO.md), [`Data.md`](./Data.md) Phase 13 |
| **Difficulty** | Hard |

**Goal:** Export Odoo sales data to warehouse on schedule; dashboard outside Odoo.

**Concepts practiced:** Odoo ORM read, ETL, API keys, idempotency

**Steps:**

1. Odoo module or script: export orders since watermark
2. Load to Postgres staging via JSON lines
3. Transform to star schema (reuse DATA-E02 patterns)
4. Streamlit or Metabase chart: revenue by week
5. Secure credentials; read-only DB user for BI
6. Document field mapping Odoo -> warehouse

**Done when:**

- Dashboard updates after cron run
- Totals match Odoo sales report for test month

**Stretch (optional):**

- Webhook trigger on order confirm instead of poll

---

#### CAP-06: Interview Portfolio Site (Static)

| Field | Detail |
| --- | --- |
| **Roadmap** | All roadmaps Phase 19 portfolio clusters |
| **Difficulty** | Medium |

**Goal:** One GitHub Pages site linking projects, roadmaps, and speak-aloud demos.

**Concepts practiced:** technical writing, portfolio curation, CI

**Steps:**

1. Static site generator or plain HTML/CSS
2. Sections per track with 2-3 best projects each
3. Each card: problem, stack, link, roadmap phases
4. Embed 60-second Loom or GIF for one LLD demo optional
5. Deploy via GitHub Actions on push
6. Link from resume and LinkedIn

**Done when:**

- Live HTTPS URL loads on mobile
- Every linked repo has README meeting Section 1 checklist

**Stretch (optional):**

- Blog post series mirroring bridge topics

---

## 9. Interview Drill Projects

**File:** [`Interview.md`](./Interview.md)

**Purpose:** Timed **speak + build** reps. Each drill pairs a short build or diagram with spoken answers from the matching Interview track.

### Drill format (use every time)

| Step | Time | Action |
| --- | --- | --- |
| 1 | 5 min | Read linked Interview.md questions cold |
| 2 | 45-90 min | Build or diagram minimal artifact |
| 3 | 10 min | Speak answer 60-120 sec without notes |
| 4 | 5 min | One follow-up cold |
| 5 | 5 min | Update README "Interview notes" section |

---

#### INT-01: LRU + Complexity Speak (Track A)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phase 3, [`Interview.md`](./Interview.md) Track A |
| **Difficulty** | Medium |

**Goal:** Implement LRU Cache (CS-D03 lite, 90 min max) then explain Big O and trade-offs aloud.

**Concepts practiced:** timed coding, complexity narration, follow-ups

**Steps:**

1. Set timer 90 minutes; build minimal LRU only
2. Record or transcribe 90-second explanation of get/put cost
3. Answer follow-up: "What if multithreaded?" without reading notes
4. Answer follow-up: "Why doubly linked list?"
5. Add "Interview notes" to repo with traps you hit
6. Link to Interview.md question ids if annotated in your fork

**Done when:**

- Code passes your handwritten tests
- Spoken answer names O(1) and memory cost

**Stretch (optional):**

- Whiteboard version without IDE

---

#### INT-02: URL Bar Narrative + Sequence Diagram (Track C/E)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Networks.md`](./Networks.md), [`Interview.md`](./Interview.md) Track C/E |
| **Difficulty** | Easy |

**Goal:** Draw sequence diagram for HTTPS request; speak full path in 120 seconds.

**Concepts practiced:** system narration, DNS, TCP, TLS, HTTP

**Steps:**

1. Pick one URL (your portfolio site)
2. Draw diagram: browser -> DNS -> TCP -> TLS -> HTTP -> server
3. Annotate 5 latency buckets
4. Speak answer using Interview.md skeleton (problem, mechanics, trade-off, failure)
5. Add one failure mode: DNS timeout
6. Commit diagram as PNG or Mermaid in repo

**Done when:**

- Diagram and spoken story match
- You mention caching at DNS and HTTP layers

**Stretch (optional):**

- HTTP/2 multiplexing paragraph

---

#### INT-03: SQL Window Drill (Track B)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Data.md`](./Data.md) Phase 6, [`Interview.md`](./Interview.md) Track B |
| **Difficulty** | Medium |

**Goal:** Solve 3 window-function questions in 45 minutes; explain PARTITION BY aloud.

**Concepts practiced:** timed SQL, grain, speaking query logic

**Steps:**

1. Use DATA-A03 database or public warehouse sample
2. Queries: running total, rank within group, dedupe latest row per id
3. 15 min each; no AI assistance
4. After each, speak how ORDER BY affects result
5. Document one wrong query and fix
6. Save in `interview_drills/sql_window.sql`

**Done when:**

- All three queries return correct row counts
- Spoken explanation distinguishes ROW_NUMBER vs RANK

**Stretch (optional):**

- Optimize one with index suggestion

---

#### INT-04: LLD Parking Lot Timed (Track A + OOP)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`OOP.md`](./OOP.md) Phase 18, [`Interview.md`](./Interview.md) Track A |
| **Difficulty** | Hard |

**Goal:** 45-minute design + 45-minute code for parking lot lite.

**Concepts practiced:** LLD interview pacing, class identification, extensibility

**Steps:**

1. 0-10 min: clarify requirements out loud (vehicle types, payment?)
2. 10-25 min: class diagram and APIs on paper
3. 25-70 min: code core `park`/`unpark` paths only
4. 70-80 min: speak SOLID trade-offs you made
5. List 3 extensions interviewer might ask (multi-floor, concurrent)
6. Do not implement extensions unless time remains

**Done when:**

- Happy path works with tests
- Design doc photographed or scanned in repo

**Stretch (optional):**

- Second drill next day on elevator problem cold

---

#### INT-05: RAG Architecture Whiteboard (Track D)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`AI.md`](./AI.md) Phase 15, [`Interview.md`](./Interview.md) Track D |
| **Difficulty** | Medium |

**Goal:** Whiteboard RAG pipeline; speak failure modes without building full system.

**Concepts practiced:** LLM system design, retrieval trade-offs, eval

**Steps:**

1. Draw ingest, chunk, embed, store, retrieve, generate
2. Label 3 failure modes: bad chunks, wrong retrieval, hallucination
3. Speak mitigations: hybrid search, citations, eval set
4. Optional: implement smallest retrieve-only script (no LLM)
5. Compare RAG vs fine-tune in 30-second closing
6. Save photo + bullet outline in repo

**Done when:**

- 90-second spoken answer fits Interview.md Track D structure
- You name latency and cost drivers

**Stretch (optional):**

- Add eval metric definition on slide

---

#### INT-06: STAR Story Backed by Repo (Track F)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`Interview.md`](./Interview.md) Track F |
| **Difficulty** | Easy |

**Goal:** Pick one shipped project; rehearse 2 STAR stories with metrics.

**Concepts practiced:** behavioral, storytelling, evidence

**Steps:**

1. Choose project with real friction (bug, scope cut, teamwork)
2. Write Situation/Task/Action/Result bullets
3. Quantify result (time saved, tests added, users)
4. Record 2-minute spoken story
5. Map story to resume bullet
6. Store `interview_drills/star_project_x.md` (no private employer secrets)

**Done when:**

- Story under 2 minutes; Result has number or observable outcome
- Action mentions your specific contribution

**Stretch (optional):**

- Second story on failure and learning

---

#### INT-07: Debug a Broken Microservice (Track E)

| Field | Detail |
| --- | --- |
| **Roadmap** | [`CS.md`](./CS.md) Phases 11-13, [`Interview.md`](./Interview.md) Track E |
| **Difficulty** | Hard |

**Goal:** Given intentionally buggy two-service demo, find root cause under time box.

**Concepts practiced:** debugging narrative, logs, HTTP tracing, systematic isolation

**Steps:**

1. Clone or create two-container demo: api + db or api + worker
2. Plant one bug (wrong env var, timeout, off-by-one pagination)
3. Partner or past-you writes bug; you debug in 60 min
4. Document hypothesis -> test -> result log
5. Speak postmortem: blast radius, fix, prevention
6. Add regression test in fix PR

**Done when:**

- Root cause correct; fix has test
- Spoken postmortem under 3 minutes

**Stretch (optional):**

- Add OpenTelemetry span around failing call

---

## Curated Inspiration

Project prompts curated with **Composio** (web search, GitHub). Use for extra ideas - implement your own code and README.

| Resource | Best for |
| --- | --- |
| [droidevs/python-projects-beginner](https://github.com/droidevs/python-projects-beginner) | OOP-F*, early CLI projects |
| [beginnersly.com Python projects](https://www.beginnersly.com/tutorials/python/python-projects) | Fundamentals variety |
| [muhammadwaheedairi/python-oop-practice](https://github.com/muhammadwaheedairi/python-oop-practice) | OOP-P*, class design |
| [yusufcore/python_practise](https://github.com/yusufcore/python_practise) | CS-D* drills |
| [odoo/tutorials](https://github.com/odoo/tutorials) | ODOO-* module layout |

---

## Master Project Index

| ID | Title | Track | Difficulty |
| --- | --- | --- | --- |
| OOP-F01 | CLI Calculator | OOP / CS | Easy |
| OOP-F02 | Number Guessing Game | CS | Easy |
| OOP-F03 | File Organizer | CS / OOP | Easy |
| OOP-F04 | Password Generator | CS / OOP | Easy |
| OOP-P01 | Bank Account Hierarchy | OOP | Medium |
| OOP-P02 | Library Catalog | OOP | Medium |
| OOP-P03 | Shape Calculator | OOP | Easy |
| OOP-P04 | Contact Book | OOP | Easy |
| OOP-S01 | Notification System | OOP | Medium |
| OOP-S02 | Payment Processor | OOP | Medium |
| OOP-S03 | Text Formatter Pipeline | OOP | Medium |
| OOP-L01 | Parking Lot LLD | OOP / CS | Hard |
| OOP-L02 | Vending Machine | OOP | Medium |
| OOP-L03 | Elevator Controller | OOP | Hard |
| CS-D01 | Dynamic Array & Linked List | CS | Medium |
| CS-D02 | Expression Evaluator | CS | Medium |
| CS-D03 | LRU Cache | CS | Hard |
| CS-D04 | Graph Route Planner | CS | Medium |
| CS-S01 | Mini HTTP Server | CS / NET | Hard |
| CS-S02 | URL Shortener | CS | Medium |
| CS-S03 | Task Queue Worker | CS | Medium |
| CS-S04 | Blog API with Auth | CS | Hard |
| CS-X01 | Rate Limiter | CS | Medium |
| CS-X02 | Consistent Hash Ring | CS | Medium |
| CS-X03 | Event Sourcing Lite | CS | Hard |
| DATA-A01 | Dirty CSV Cleaner | Data | Easy |
| DATA-A02 | KPI Dashboard | Data | Easy |
| DATA-A03 | SQL Case Study DB | Data | Medium |
| DATA-A04 | A/B Test Analyzer | Data | Medium |
| DATA-A05 | EDA to Executive Summary | Data | Medium |
| DATA-E01 | Mini ETL | Data | Medium |
| DATA-E02 | Star Schema Warehouse | Data | Medium |
| DATA-E03 | dbt Project | Data | Medium |
| DATA-E04 | Kafka Producer/Consumer | Data | Hard |
| DATA-E05 | Spark Batch Job | Data | Hard |
| NET-01 | TCP Echo | Networks | Easy |
| NET-02 | HTTP Raw Exchange | Networks | Easy |
| NET-03 | DNS Tracer Narrative | Networks | Easy |
| NET-04 | Wireshark Write-up | Networks | Medium |
| NET-05 | Traceroute Story | Networks | Easy |
| NET-06 | Subnet Calculator | Networks | Medium |
| NET-07 | TLS Certificate Inspector | Networks | Medium |
| AI-01 | sklearn Baseline | AI | Easy |
| AI-02 | Tree vs Forest | AI | Medium |
| AI-03 | PyTorch MNIST Loop | AI | Medium |
| AI-04 | Transfer Learning Classifier | AI | Medium |
| AI-05 | Embedding Search | AI | Medium |
| AI-06 | Tiny RAG | AI | Hard |
| AI-07 | Prompt Eval Suite | AI | Medium |
| AI-08 | Tool Agent | AI | Hard |
| AI-09 | Experiment Tracker | AI | Easy |
| ODOO-01 | Todo Module | Odoo | Easy |
| ODOO-02 | Library Module | Odoo | Medium |
| ODOO-03 | Inherit sale.order | Odoo | Medium |
| ODOO-04 | OWL Widget | Odoo | Hard |
| ODOO-05 | Webhook Controller | Odoo | Medium |
| ODOO-06 | QWeb PDF Report | Odoo | Medium |
| ODOO-07 | Test Suite | Odoo | Medium |
| ODOO-08 | External API Cron | Odoo | Hard |
| CAP-01 | ERP-Lite Inventory | Cross | Medium |
| CAP-02 | Analytics on App DB | Cross | Hard |
| CAP-03 | App + Packet Capture | Cross | Hard |
| CAP-04 | RAG on Warehouse Docs | Cross | Hard |
| CAP-05 | Odoo Analytics Sync | Cross | Hard |
| CAP-06 | Portfolio Site | Cross | Medium |
| INT-01 | LRU + Speak | Interview | Medium |
| INT-02 | URL Narrative | Interview | Easy |
| INT-03 | SQL Window Drill | Interview | Medium |
| INT-04 | Parking Lot Timed | Interview | Hard |
| INT-05 | RAG Whiteboard | Interview | Medium |
| INT-06 | STAR + Repo | Interview | Easy |
| INT-07 | Debug Microservice | Interview | Hard |

**Total:** 72 projects across 9 sections.

---

## Suggested Learning Paths

| Your goal | First 3 projects | Then |
| --- | --- | --- |
| Python hire (general SWE) | OOP-F01, OOP-P01, CS-D01 | CS-S02, OOP-L01, INT-04 |
| Data analyst | DATA-A01, DATA-A03, DATA-A05 | DATA-A04, INT-03 |
| Data engineer | DATA-A01, DATA-E01, DATA-E03 | DATA-E04, CAP-02 |
| Network/infrastructure | NET-01, NET-03, NET-04 | NET-07, CAP-03, INT-02 |
| AI/ML engineer | AI-01, AI-03, AI-06 | AI-07, CAP-04, INT-05 |
| Odoo developer | OOP-P02, ODOO-01, ODOO-03 | ODOO-04, CAP-05 |
| Portfolio sprint | CAP-06 + best README from each track | INT-06 |

---

## Author

**Mohammad Bilal** - Projects playbook for the Interview Help repo. Theory lives in the roadmaps; proof lives in your repos. Ship small, explain clearly, drill out loud.

*Pair with:* [`README.md`](./README.md) · [`OOP.md`](./OOP.md) · [`CS.md`](./CS.md) · [`Data.md`](./Data.md) · [`Networks.md`](./Networks.md) · [`AI.md`](./AI.md) · [`ODOO.md`](./ODOO.md) · [`Interview.md`](./Interview.md)
