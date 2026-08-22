# PHASE 72 - Git & Collaboration

**Track:** Professional Software Engineering

**WHAT YOU WILL BE ABLE TO DO:** Keep a safe collaboration history — review a pull request, resolve a merge conflict, and explain what a commit graph records that a shared folder never can.

**WHAT YOU SHOULD KNOW FIRST:** Phase 71 — you can already build and present software; teams need shared history before they need more features. Phase 48 — well-structured code makes reviewable diffs possible.

**LEARNING RESOURCES:**

- [Learn Git Branching](https://learngitbranching.js.org/) — draw the commit graph as you type
- [Pro Git (free book)](https://git-scm.com/book/en/v2) — especially Ch. 10 on internals
- [Git MERGE vs REBASE (Academind)](https://www.youtube.com/watch?v=0chZFIZLR_0)
- [Google's Code Review Developer Guide](https://google.github.io/eng-practices/review/)
- Companion deep dive: `[Git.md](./Git.md)` Phases [2–4](./Git.md#phase-2) (state/internals), [6–10](./Git.md#phase-6) (merge/recovery/rebase), [14–15](./Git.md#phase-14) (team workflow) — plus matching [Git projects](../guides/Projects.md#git-and-git-workflows)

## 72.1 Version Control & Code Review

Story IX made software *responsible*. You can still break the moment more than one person — or one person across months — must change the same codebase safely. A shared folder with `final_v2_REAL.py` has no attributable history, no safe concurrent work, and no honest undo. Git is the shared history layer; this phase teaches the *software-engineering* model (snapshots, branches, review, recovery). For command-by-command internals, keep the companion `[Git.md](./Git.md)` open — do not treat this section as a paste of that course.

**SNAPSHOTS, NOT DIFFS:**

Git does not primarily store “patches.” It stores **snapshots** in a content-addressed object database. Four object types matter:

| Object | What it is |
| ------ | ---------- |
| **blob** | File contents with no name |
| **tree** | Directory: names → blobs and trees |
| **commit** | One tree + parent commit(s) + author, time, message |
| **tag** | Annotated pointer (releases) |

Every object's identity is the hash of its own contents. Identical content is stored once; change one byte and hashes change all the way up — history is tamper-evident by construction.

A **branch** is not a copy of the project. It is a movable label (often a 41-byte file) holding one commit hash. That is why branching is cheap. `HEAD` points at the current branch (or, when detached, directly at a commit). Commits form a **DAG**; `merge`, `rebase`, `reset`, and `cherry-pick` are different ways of adding nodes and moving labels.

```text
$ echo "hello" > greeting.txt && git add . && git commit -m "first"

commit  a1b2c3d
    tree      f4e5d6c
    parent    (none)
    message   "first"
        |
        v
tree    f4e5d6c
    100644 blob 9a2c1f8    greeting.txt
        |
        v
blob  9a2c1f8  →  "hello\n"

Verify:  git cat-file -p HEAD
         git cat-file -p HEAD^{tree}
         git cat-file -p HEAD:greeting.txt
```

**THREE AREAS:**

| Area | Role |
| ---- | ---- |
| Working directory | Files on disk |
| Staging area (index) | What the *next* commit will contain |
| Repository | Committed history |

`git add` moves working → index; `git commit` moves index → repository. The staging area lets you commit a coherent *subset* of a messy desk — `git add -p` stages hunks so reviews stay small.

```text
  working directory        staging (index)           repository
   (disk)                  (next commit)             (history)
        |----- git add ----------->|                        |
        |                          |----- git commit ------>|
```

**MERGE VS REBASE (REAL TRADE-OFF):**

```text
START
  main      A---B---C
                  \
  feature          D---E

MERGE into main →  A---B---C---M   (M has two parents: C and E)
  + true record of concurrency; safe on shared branches
  - noisier graph; bisect has more paths

REBASE feature onto main →  A---B---C---D'---E'
  D'/E' are NEW commits (new hashes); D/E orphaned (reflog ~90 days)
  + linear history; easy bisect
  - never rebase commits others already pulled

SQUASH → one commit F on main with all of D+E
  + one logical change on main
  - loses granular revert/blame of intermediate steps
```

**Conflict markers** mean both sides edited the same lines:

```text
<<<<<<< HEAD
price = compute(base)          # branch you are ON
=======
price = compute(base, tax)     # incoming
>>>>>>> feature
```

Edit to the correct final state, then `git add`. Prefer understanding the *intent* of both sides over blindly `--ours` / `--theirs`.

**RECOVERY WITHOUT PANIC:**

| Tool | What it buys |
| ---- | ------------ |
| `git reflog` | Every position `HEAD` held (~90 days) — nearly nothing is truly lost after a bad `reset --hard` |
| `git bisect` | Binary search history for the first bad commit (~log₂ *n* checks) — Phase 30.2 applied to time |
| `reset --soft / --mixed / --hard` | How far the three areas rewind; only `--hard` throws disk work away |
| `git revert` | New commit that undoes an old one — safe on *shared* history where rewrite is not |

Atomic commits make bisect useful: a 40-file “fix everything” commit answers “which commit?” poorly.

**CODE REVIEW AS A GATE:**

Review quality collapses as diffs grow. Empirical habit: changes a colleague can hold in their head in ~20 minutes get real scrutiny; thousand-line PRs get rubber stamps. Ask for review within a day; finish review within a day — stale branches diverge. Separate **blocking** comments from suggestions. Review for correctness, design fit, tests, and readability — not formatting (linters own that). Prefer questions over edicts; the author usually has context you lack.

A PR description that helps reviewers (labels inside the lesson body — **not** fake `##` lesson headings):

**What changed and why** — two sentences; the reviewer has none of your context.

**How I verified it** — which tests, which manual check, which failure path.

**Risk and rollback** — what breaks if this is wrong, and how to undo.

**Reviewer, please focus on** — direct attention; undirected review finds typos, not bugs.

Checklist habits: diff small enough to review; tests cover new behaviour *and* failure path; no formatting-only churn mixed with logic; commit messages explain *why* (the diff already shows *what*).

**WORKED COLLABORATION SCENARIO:**

Two bookstore engineers diverge:

```text
Ada on feature/checkout:   adds tax line to calculate_total
Sam on main hotfix:        renames calculate_total → order_total

Ada rebases onto main → conflict in the rename + edit.
Resolve: keep order_total, preserve Ada's tax logic.
Open PR: small diff, link to acceptance criteria from Phase 73,
         note "verified with unit tests for GB VAT + US no-VAT."
Reviewer checks: tax cap boundary, no secret in commit, DoD.
Merge (squash if intermediate commits were "wip").
```

That loop — branch, conflict, review, merge — is the daily texture of Story X. Git.md deepens the object model and recovery drills; Projects.md Git cards make the muscle memory.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Run `git cat-file -p HEAD` and walk commit → tree → blob by hand; explain why a branch is *O*(1) |
| Easy | Complete Learn Git Branching Main + Remote intro sequences |
| Medium | Create a deliberate merge conflict, resolve markers by hand, draw merge vs rebase vs squash graphs for the same divergence |
| Medium | `reset --hard` then recover via reflog; use `git bisect` (or `bisect run`) across ≥30 commits |
| Hard | Stage two unrelated hunks from one file into two commits with `git add -p`; write a review checklist tailored to your repo from Google's guide |

**WHAT THIS UNLOCKS NEXT:**

Git records *what* changed and *who* reviewed it. It does not decide *what should be built*. Ambiguous requests (“make it better,” “add a dashboard”) produce thrashing commits and angry reviews. Turning ambiguity into a buildable spec is Phase 73.

---

> **Phase 72 complete?** [Continue to Phase 73](#phase-73)

---

# PHASE 73 - Requirements Engineering

**Track:** Professional Software Engineering

**WHAT YOU WILL BE ABLE TO DO:** Turn an ambiguous stakeholder request into a short specification a teammate could build from unaided — with goals, constraints, acceptance criteria, and explicit non-goals.

**WHAT YOU SHOULD KNOW FIRST:** Phase 72 — you can propose changes as PRs; requirements decide *which* changes are worth proposing. Phases 21–30 — interfaces and invariants are how specs become code.

**LEARNING RESOURCES:**

- [Software Requirements vs User Stories (Modern Software Engineering)](https://www.youtube.com/watch?v=KP0U3I-f9-Y)
- [IEEE-style SRS qualities](https://www.inf.ed.ac.uk/teaching/courses/seoc/2004_2005/resources/re_intro.pdf) — correct, unambiguous, complete, consistent, verifiable, modifiable (skim)
- [Atlassian — User stories with acceptance criteria](https://www.atlassian.com/agile/project-management/user-stories)
- Practice: rewrite one vague ticket from any open-source issue tracker into goal + constraints + acceptance criteria

## 73.1 From Ambiguity to a Buildable Spec

You can now propose a clean PR and survive a conflict. That skill is wasted if the ticket said “add notifications” and three engineers built three different products. Most “failed” projects did not fail at Git or syntax — they failed because nobody agreed what *done* meant. Requirements engineering is the cheap agreement: who the user is, what problem you solve, what you will *not* build, and how you will know it works.

**THE MINI-SPEC:**

A useful one-pager (or ticket body) answers:

1. **Goal** — what user outcome improves if we succeed?
2. **Users & context** — who, where, under what constraints (time, device, permissions)?
3. **Functional behavior** — inputs → outputs / states the system must produce.
4. **Non-functional** — speed, safety, privacy, accessibility — measurable where possible.
5. **Acceptance criteria** — concrete checks a reviewer can run without re-interpreting the ask.
6. **Non-goals** — what is explicitly out of scope for *this* slice.

**User stories** (“As a … I want … so that …”) are a *format*, not a substitute for acceptance criteria. A story without Given/When/Then (or equivalent checks) is still ambiguous. Good acceptance criteria become Phase 74 tests almost verbatim — if you cannot say how you will *check* done, you do not yet have a requirement.

**FROM VAGUE TO BUILDABLE (BOOKSTORE):**

```text
Vague:  "Add notifications"

Still vague: "Notify users about activity"

Buildable slice:
  Goal: Signed-in users reply to PR comments within one business day
        without refreshing endlessly.
  Users: bookstore staff using the admin web app on desktop.
  Behavior: in-app badge when a teammate comments on a PR I watch.
  Non-functional: badge visible within 30s of next page load;
                  no PII in badge text beyond display name.
  Acceptance:
    Given I am signed in and watching PR #42,
    When a teammate posts a comment,
    Then I see a badge on next page load within 30s
    And the badge clears when I open that PR.
  Non-goals: email/SMS, mobile push, @-mention storms, Slack bots.
```

Same pattern for a worse ticket:

```text
Vague: "Make login better"

Better:
  Goal: Reduce password-reset tickets from staff who mistype once.
  Constraints: keep Phase 68 session model; no SMS MFA in this slice.
  Acceptance:
    Given valid email+password,
    When I submit login,
    Then I reach /dashboard within 2s on a warm server
    And a wrong password shows a generic error (no user enumeration).
  Non-goals: OAuth providers, magic links, redesign of the whole nav.
```

**QUALITY BAR (LIGHT IEEE HABITS):**

| Quality | Failure mode if missing |
| ------- | ----------------------- |
| Unambiguous | Two readers build different things |
| Verifiable | “Fast” / “intuitive” with no check |
| Complete *for the slice* | Hidden “obvious” assumptions |
| Consistent | Criteria contradict non-goals |
| Modifiable | Spec buried in a Slack thread nobody can update |

You are not writing a 40-page SRS for a student bookstore feature. You *are* writing something a stranger on the team could implement for one sprint without pinging you every hour.

**WORKED FLOW — TICKET → PR DESCRIPTION:**

```text
1. Stakeholder: "Customers should know when stock is back."
2. Clarify: in-app only? email? which SKUs? guest users?
3. Mini-spec + non-goals (email out of scope this sprint).
4. Split: (a) watchlist table (b) badge on product page (c) clear-on-view.
5. Each slice → Phase 72 PR with acceptance criteria pasted into
   "How I verified it" as manual + automated checks.
```

```python playground=cs-phase-73-acceptance-check
# Tiny acceptance harness: a "spec" is a list of checks.
# Passing checks = the slice is done. Failing = not shippable.

def badge_visible(state):
    return state.get("signed_in") and state.get("unseen_comments", 0) > 0

acceptance = [
    ("signed-in user with new comment sees badge",
     {"signed_in": True, "unseen_comments": 1}, True),
    ("signed-out user never sees badge",
     {"signed_in": False, "unseen_comments": 3}, False),
    ("after open, badge clears",
     {"signed_in": True, "unseen_comments": 0}, False),
]

for name, state, expected in acceptance:
    got = badge_visible(state)
    status = "PASS" if got == expected else "FAIL"
    print(f"{status}: {name}")
```

That harness is deliberately tiny — it shows the *shape*. Phase 74 turns the same Given/When/Then into a lasting automated pyramid.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List the six mini-spec questions from memory |
| Medium | Turn “make checkout better” into goal, constraints, ≥3 acceptance criteria, ≥2 non-goals |
| Hard | Take a real open-source issue; write a one-page spec a stranger could implement for one sprint, then mark which criteria become unit vs E2E checks |

**WHAT THIS UNLOCKS NEXT:**

A spec says what *should* happen. Automated tests keep proving it still happens after every change — without relying on memory or a lucky demo. That is Phase 74.

---

> **Phase 73 complete?** [Continue to Phase 74](#phase-74)

---

# PHASE 74 - Testing

**Track:** Professional Software Engineering

**WHAT YOU WILL BE ABLE TO DO:** Prove behavior automatically — sketch a test pyramid and explain what unit, integration, and end-to-end layers each catch (and what they cost).

**WHAT YOU SHOULD KNOW FIRST:** Phase 73 — acceptance criteria become the first tests worth writing. Phase 48 — testable design follows dependency inversion.

**LEARNING RESOURCES:**

- [The Practical Test Pyramid (Ham Vocke / Martin Fowler)](https://martinfowler.com/articles/practical-test-pyramid.html)
- [The Testing Pyramid (Continuous Delivery, Dave Farley)](https://www.youtube.com/watch?v=Af4M8GMoxi4)
- [TDD, Where Did It All Go Wrong (Ian Cooper)](https://www.youtube.com/watch?v=EZ05e7EMOLM)
- [Google Testing Blog — Test sizes](https://testing.googleblog.com/2010/12/test-sizes.html)
- [pytest documentation](https://docs.pytest.org/) · [Hypothesis](https://hypothesis.readthedocs.io/) for property-based testing

## 74.1 The Testing Pyramid

Acceptance criteria from Phase 73 are useless if “done” means “worked on my laptop once.” Manually re-checking every feature after every change does not scale — people skip it under deadline pressure. Automated tests encode “this should still be true” as code, so it can re-verify in seconds, forever.

**ARRANGE / ACT / ASSERT:**

Every test has the same three phases: set up state, exercise the behaviour, assert the outcome. A test that mixes these — or asserts several unrelated things — is the one nobody understands when it fails in six months.

**WHY A PYRAMID (NOT AN ICE-CREAM CONE):**

```text
        /\
       /  \      End-to-End — FEW
      /----\     whole system as a user would (slow, brittle, catches wiring)
     /      \
    /--------\   Integration — SOME
   /          \  a few real components together (DB, queue)
  /------------\ Unit — MANY
 /______________\ pure logic, no I/O (fast, precise failures)
```

As you move up, a test covers more of the real system and catches more *classes* of bug — and simultaneously becomes slower, costlier to maintain, and less precise about *what* broke. Total feedback time governs behaviour: a suite you run on every save must finish in seconds; anything slower gets run less often.

```text
                          count   speed        failure tells you
  E2E                        ~10   30s–5min    "something in the system"
  Integration               ~100   0.1–2s      "these two components disagree"
  Unit                     ~1000   <10ms       "THIS function, THIS input"

  1000 unit × 5ms  = 5s     → every save
   100 integ × 500ms = 50s  → before push
    10 e2e  × 60s  = 600s   → CI on the branch

  Invert (mostly E2E): hours of suite → ignored → NEGATIVE value
```

**WHAT A “UNIT” IS:**

If a unit is “one class,” every refactor that moves logic breaks tests that asserted structure, not behaviour. If a unit is “one observable behaviour through a stable public interface,” you restructure freely and tests keep verifying what users care about. Practical test: can you rename internals without editing a single test?

**TEST DOUBLES (USE THE RIGHT TOOL):**

| Double | Role | Asserts on | Risk |
| ------ | ---- | ---------- | ---- |
| **Real** | Actual dependency | Outcomes | Best when affordable |
| **Fake** | Working lightweight (in-memory repo) | Outcomes | Usually the right default inside your system |
| **Stub** | Canned answers | Outcomes | Fine for inputs |
| **Mock** | Records calls | *Implementation* | Breaks on refactor; can pass while production is broken |

Defensible rule: mock only boundaries you do not own (payment provider, SMS, clock). Prefer real DB via containers over mocking *your own* SQL. For anything you mock, add one **contract** check against the real sandbox on a schedule so drift surfaces as a red build, not a customer ticket.

**COVERAGE VS MUTATION:**

Line coverage measures which lines *ran*, not whether anything was asserted. A suite that calls every function and asserts nothing can hit 100%. Branch coverage is better. **Mutation testing** asks the only question that matters: if I break the code on purpose, does a test fail?

```text
def apply_discount(price, percent):
    if percent > 50:
        percent = 50
    return price * (1 - percent / 100)

# Assert only apply_discount(100, 10) == 90
# Mutant: percent > 50  →  percent >= 50  may SURVIVE
# Fix: also assert apply_discount(100, 50) == 50  (the boundary)
```

**TDD AS DESIGN FEEDBACK:**

Red → green → refactor: write a failing test, simplest code that passes, improve with the test holding you steady. Difficulty writing a test is usually feedback about too many dependencies or unclear responsibilities — Phase 75 will make that cheap at application scale.

**WORKED PYRAMID (BOOKSTORE ORDER TOTAL):**

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Order:
    subtotal_cents: int
    discount_percent: int
    country: str

def calculate_total(order: Order) -> int:
    """Pure domain: no clock, no DB, no network — trivially unit-testable."""
    if not 0 <= order.discount_percent <= 100:
        raise ValueError("discount must be between 0 and 100")
    percent = min(order.discount_percent, 50)
    discounted = order.subtotal_cents * (100 - percent) // 100
    vat = {"GB": 20, "DE": 19, "US": 0}.get(order.country, 0)
    return discounted + discounted * vat // 100

# --- UNIT (many) ---
def test_vat_after_discount():
    assert calculate_total(Order(10_000, 10, "GB")) == 10_800

def test_discount_cap_boundary():
    assert calculate_total(Order(10_000, 50, "US")) == 5_000
    assert calculate_total(Order(10_000, 51, "US")) == 5_000

# --- INTEGRATION (some): real DB constraint, not a mock ---
# INSERT negative subtotal → CheckViolation only a real Postgres catches

# --- E2E (few): Playwright on critical path ---
# click Checkout → see "Order confirmed" by role/text, not CSS class

# --- MOCK only at unpaid boundary ---
# payment_gateway.charge(...) asserted; own calculate_total NOT mocked
```

| Layer | Catches | Blind to | Maintenance |
| ----- | ------- | -------- | ----------- |
| Unit | Logic, edges, off-by-one | Wiring, real I/O | Low if behaviour-focused |
| Integration | Schema, transactions, serialization | Full browser journeys | Needs real deps |
| E2E | Config, deploy, full paths | Precise localization of fault | Highest flake risk |

Flaky tests train teams to ignore red builds — fix or delete. Independence (any subset, any order) enables parallel runs and keeps the fast loop honest.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write three unit tests with clear arrange/act/assert; explain why an inverted pyramid gets ignored |
| Medium | Parameterize boundaries for a function with ≥2 conditionals; replace a mocked DB with a containerized real one (or sketch the fixture) |
| Hard | Add one property-based invariant (Hypothesis-style) and one Playwright-style E2E that asserts on roles/text; name three structure-coupled tests you would rewrite |

**WHAT THIS UNLOCKS NEXT:**

Tests stay cheap only when business rules can run without spinning up a database or a web server. Keeping policy independent of frameworks and I/O — application architecture, lifting Phase 29’s object-scale lesson — is Phase 75.

---

> **Phase 74 complete?** [Continue to Phase 75](#phase-75)

---

# PHASE 75 - Software Architecture

**Track:** Professional Software Engineering

**WHAT YOU WILL BE ABLE TO DO:** Keep policy independent of frameworks and I/O — separate domain logic from adapters so tests and swaps stay cheap.

**WHAT YOU SHOULD KNOW FIRST:** Phase 74 — tests stay cheap when domain can run without a real database or web server. **Phase 29** — you already drew domain vs infrastructure and dependency direction at *object / LLD* scale.

> **Bridge from Phase 29:** In Story IV you practiced the same two ideas on a whiteboard for one feature: which classes hold business rules vs plumbing, and which way imports may point. Phase 75 does **not** reteach OOP. It lifts that object-level design into **application architecture**: the same domain/infra split and inward dependency rule, now across packages, deployable services, and framework boundaries. If Phase 29 felt like “draw the parking lot,” this phase is “keep the whole product’s rules out of Flask and SQLAlchemy.”

**LEARNING RESOURCES:**

- [The Clean Architecture (Uncle Bob)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [cosmicpython/book](https://github.com/cosmicpython/book) — layered Python example
- [Martin Fowler — Presentation Domain Data Layering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)
- [Hexagonal architecture primer](https://alistair.cockburn.us/hexagonal-architecture/)

## 75.1 Domain vs Infrastructure

Phase 74’s fast unit layer assumed something important: `calculate_total` imported nothing from Flask or Postgres. That was not an accident — it was architecture. **Domain** code expresses business rules (orders, fees, eligibility). **Infrastructure** talks to the world (SQL, HTTP, SMTP). Mixing them makes rules untestable and frameworks hard to swap. You met this vocabulary in Phase 29; here the unit of design is the *application*, not a single class diagram.

**THE FAILURE MODE:**

```text
@app.post("/checkout")
def checkout():
    # tax math + SQL string + SMTP send all in one handler
    # swap Flask → rewrite business rules
    # unit-test tax → need a fake HTTP stack
```

**LAYERS (PRAGMATIC “CLEAN-ISH”):**

| Layer | Owns | Must not own |
| ----- | ---- | ------------ |
| **Domain** | Entities, value objects, domain services | Flask, SQLAlchemy, status codes |
| **Application** | Use cases; orchestrates domain + ports | Vendor SQL dialects, raw sockets |
| **Infrastructure** | Repositories, controllers, CLI, mailers | Business policy (keep it thin) |

Small scripts skip layers; products that live years earn them. Microservices on day one without clear domains become a distributed monolith.

```text
HTTP controller  →  Application service  →  Domain
                         │
                         └→ Repository port  ←implements─  Postgres adapter
```

Restaurant analogy: recipes (domain) survive when you swap the stove brand (infra).

```python
# domain.py — no I/O imports
class Account:
    def __init__(self, balance: float):
        if balance < 0:
            raise ValueError("invalid")
        self._balance = balance

    def withdraw(self, amount: float) -> None:
        if amount > self._balance:
            raise ValueError("insufficient")
        self._balance -= amount

# application.py
class BankingService:
    def __init__(self, repo):
        self.repo = repo

    def cash_out(self, acct_id: str, amount: float) -> None:
        acct = self.repo.load(acct_id)
        acct.withdraw(amount)
        self.repo.save(acct_id, acct)

# infra fake — swap for Postgres adapter later without touching Account
class MemoryRepo:
    def __init__(self):
        self.db = {"A1": Account(100)}

    def load(self, acct_id: str) -> Account:
        return self.db[acct_id]

    def save(self, acct_id: str, acct: Account) -> None:
        self.db[acct_id] = acct

svc = BankingService(MemoryRepo())
svc.cash_out("A1", 30)
print(svc.repo.load("A1")._balance)
```

| Choice | Buys | Costs |
| ------ | ---- | ----- |
| Domain-centric layers | Testable core; swappable infra | More modules; discipline |
| Framework-first | Fast scaffold | Rules trapped in controllers |
| Microservices day one | Isolation fantasy | Network + unclear domains |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List what belongs in domain vs infra for a library checkout feature |
| Medium | Extract domain from a bloated controller sketch (handler + service + repo) |
| Hard | Decide where validation lives (HTTP edge vs domain invariant) and justify with a failing test story |

**WHAT THIS UNLOCKS NEXT:**

Separating layers is only half the rule. Source dependencies must point **inward** — infrastructure depends on domain ports, never the reverse. That enforcement is 75.2.

---

## 75.2 Dependency Direction

A clean folder tree still fails if `domain/order.py` imports `sqlalchemy`. The **dependency rule**: inner layers define interfaces (ports); outer layers implement them (adapters). Domain never mentions HTTP status codes. Controllers translate HTTP ↔ DTOs ↔ domain commands.

**ALLOWED VS FORBIDDEN:**

```text
ALLOWED:
  infra → application → domain
  infra → domain (via port interfaces)

FORBIDDEN:
  domain → infra
  domain → flask / django / sqlalchemy base models
```

Common leak: entities inheriting ORM base classes so the schema *is* the model. Isolate with mappers: ORM row ↔ domain entity at the boundary.

```python
# port near domain
class UserStore:
    def get(self, user_id: str) -> dict: ...

# adapter in infra
class InMemoryUserStore(UserStore):
    def __init__(self):
        self.data = {"u1": {"name": "Ada"}}

    def get(self, user_id: str) -> dict:
        return dict(self.data[user_id])

class GreetingPolicy:
    def greet(self, store: UserStore, user_id: str) -> str:
        user = store.get(user_id)
        return f"Hello, {user['name']}"

print(GreetingPolicy().greet(InMemoryUserStore(), "u1"))
```

City ordinance vs construction company: laws do not reference a builder’s toolbox brand. ORM-active-record everywhere buys less mapping and sells “DB schema drives the model.” Shared utils grab-bags hide coupling across layers.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name three forbidden imports in a domain package |
| Medium | Sketch a mapper from ORM row → domain entity for `Order` |
| Hard | Trade-offs of anemic domain model vs rich entities for the bookstore |

**WHAT THIS UNLOCKS NEXT:**

Clean layers tell you *where* code belongs. They do not tell a team *how* work moves from idea to production — who prioritizes, what “ready” means, which gates exist. That workflow is Phase 76.

---

> **Phase 75 complete?** [Build the Phase 75 mini-project](../guides/Projects.md#cs-phase-75-project) · [Continue to Phase 76](#phase-76)

---

# PHASE 76 - Development Process

**Track:** Professional Software Engineering

**WHAT YOU WILL BE ABLE TO DO:** Explain a team’s delivery workflow (backlog → ready → in progress → review → done) and why each gate exists — without pretending one ceremony fits every team.

**WHAT YOU SHOULD KNOW FIRST:** Phase 75 — architecture boundaries. Phase 73 — specs and acceptance criteria feed the backlog. Phase 72 — PRs are a process gate, not only a Git command.

**LEARNING RESOURCES:**

- [Scrum vs Kanban (Development That Pays)](https://www.youtube.com/watch?v=rIaz-l1Kf8w)
- [The Twelve-Factor App](https://12factor.net/) — habits that survive cloud deploys
- [Agile Manifesto principles](https://agilemanifesto.org/principles.html) — skim, then compare to how your last project *actually* worked
- [Kanban WIP limits (Atlassian)](https://www.atlassian.com/agile/kanban/wip-limits)

## 76.1 Shipping Predictably

Brilliant architecture still ships late when work is invisible, oversized, or blocked without a named owner. Process is not bureaucracy for its own sake — it is a shared map of *how unfinished work becomes finished work*, so the team can spot stuck items and improve the system instead of blaming individuals.

**GATES (NAMES VARY):**

| State | Purpose of the gate |
| ----- | ------------------- |
| **Backlog** | Ordered ideas; only the top is refined |
| **Ready** | Has acceptance criteria (Phase 73), owner, size small enough to finish soon |
| **In progress** | WIP limits stop multitasking from faking progress |
| **Review** | Code review (Phase 72) + product acceptance against criteria |
| **Done** | Definition of done: tests, notes, deployability, no secrets committed — not “merged somehow” |

**Scrum** time-boxes planning/review/retro. **Kanban** optimizes flow and WIP. Healthy teams borrow: small batches, visible work, frequent feedback, retrospectives that change the process.

```text
Bad smell                    Usually means
-------------------------    ----------------------------------
Everything is "urgent"       No prioritization / no capacity
Tickets stay "90% done"      No DoD / oversized stories
Review queue forever         Reviews unscheduled; PRs too big
Heroics every release        Missing automation (77+) or missing DoD
Context-switch soup          WIP limit ignored; five half-done slices
```

**WIP IS A FORCE MULTIPLIER:**

Starting ticket #6 while five are “almost done” increases cycle time for *all* of them. Finishing one unlocks review capacity and clears the board. The playground below encodes that as a hard gate — the same idea as a physical kanban column with two slots.

**DEFINITION OF DONE (EXAMPLE FOR A STUDENT BOOKSTORE SLICE):**

```text
[ ] Acceptance criteria from the ticket all pass (manual or automated)
[ ] Unit tests for new domain behaviour; failure path covered
[ ] PR reviewed; blocking comments resolved
[ ] No secrets in the diff; config via env at runtime (Phase 78 preview)
[ ] Deployable from main (or documented why not yet)
[ ] One-line note for the next engineer (what surprised you)
```

```python playground=cs-phase-76-wip-limit
# Toy board: enforce a WIP limit of 2 "in_progress" items.

board = [
    {"id": "A", "state": "ready"},
    {"id": "B", "state": "in_progress"},
    {"id": "C", "state": "in_progress"},
    {"id": "D", "state": "ready"},
]
WIP_LIMIT = 2

def start(ticket_id):
    in_prog = [t for t in board if t["state"] == "in_progress"]
    if len(in_prog) >= WIP_LIMIT:
        print(f"BLOCKED: cannot start {ticket_id}; WIP={len(in_prog)}")
        return
    for t in board:
        if t["id"] == ticket_id and t["state"] == "ready":
            t["state"] = "in_progress"
            print(f"STARTED {ticket_id}")
            return
    print(f"NO-OP {ticket_id}")

start("A")  # blocked — already at limit
for t in board:
    if t["id"] == "B":
        t["state"] = "done"
start("A")
print(board)
```

**BOOKSTORE SPRINT SKETCH:**

```text
Mon: refine top 3 backlog items into mini-specs (Phase 73)
Tue–Wed: WIP≤2; Ada on badge API, Sam on UI — both Ready→In progress→Review
Thu: review gate; squash-merge small PRs (Phase 72)
Fri: demo against acceptance; retro changes WIP or DoD if reviews stalled
Manual "run tests then FTP to server" still hurts → Phase 77 automates the path
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name five workflow states and one purpose for each gate |
| Medium | Write a one-paragraph Definition of Done for a student project |
| Hard | Compare Scrum vs Kanban for a 3-person team shipping weekly; pick and justify with WIP and review-queue risks |

**WHAT THIS UNLOCKS NEXT:**

Manual “run the tests on my laptop then copy files to the server” does not scale and is not repeatable. Automating build, test, and deploy gates is Phase 77.

---

> **Phase 76 complete?** [Continue to Phase 77](#phase-77)

---

# PHASE 77 - CI/CD

**Track:** Professional Software Engineering

**WHAT YOU WILL BE ABLE TO DO:** Automate the path to production — explain what each pipeline stage (lint, test, build, deploy) would catch if it failed.

**WHAT YOU SHOULD KNOW FIRST:** Phase 76 — process gates become machine-checkable. Phase 74 — the test suite is what CI actually runs. Phase 72 — pipelines usually trigger on branches and PRs.

**LEARNING RESOURCES:**

- [Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
- [CI/CD In 5 Minutes (Fireship)](https://www.youtube.com/watch?v=42UP1fxi2SY) · [IBM — What is CI/CD?](https://www.youtube.com/watch?v=scEDHsr3APg)
- [Continuous Delivery vs Continuous Deployment (Dave Farley)](https://www.youtube.com/watch?v=7SNbDWob6cI)
- [DORA research / quick check](https://dora.dev/research/) · [Google SRE — Release engineering](https://sre.google/sre-book/release-engineering/)
- [nektos/act](https://github.com/nektos/act) — run workflows locally

## 77.1 CI/CD (Continuous Integration & Continuous Deployment)

A Definition of Done that says “tests pass” is theatre if tests only run when someone remembers. CI/CD automates the path from commit to safely running software — and makes the Phase 76 gates enforceable by machine.

**THREE TERMS (DO NOT BLUR THEM):**

| Term | Means |
| ---- | ----- |
| **Continuous integration** | Merge to shared main frequently; every merge triggers build + tests. Frequency is the point — long-lived branches diverge superlinearly |
| **Continuous delivery** | Every green commit produces a *deployable* artifact; shipping is a business decision (one click / approval) |
| **Continuous deployment** | Green commits go to production with no human gate — needs strong verification and rollback |

Most teams should reach delivery; deployment is optional and honest about risk.

**PIPELINE ORDERED BY COST:**

```text
git push
  → [1] lint + format ........... ~10s   style / obvious errors
  → [2] type check .............. ~30s
  → [3] unit tests .............. ~60s   logic (Phase 74)
  → [4] BUILD ARTIFACT ......... ~2min  ONCE — tagged with commit SHA
  → [5] integration tests ....... ~4min  real DB in container
  → [6] security scan ........... ~1min  deps, secrets, image CVEs
  → [7] deploy SAME artifact → staging
  → [8] E2E smoke ............... ~5min  few critical paths
  → [9] deploy SAME artifact → production (progressive)
  → [10] verify metrics; degrade → rollback
```

Median failures are lint/unit — report them in under ~90 seconds or people route around the pipeline. **Build once, promote the same artifact**: rebuilding per environment reintroduces the variance CI exists to remove. Environment config and **secrets are injected at runtime**, never baked into the image (Phase 78 owns the packaging detail; the pipeline rule starts here).

**DEPLOY STRATEGIES:**

| Strategy | Idea | Rollback | Catches prod-only bugs? |
| -------- | ---- | -------- | ----------------------- |
| Rolling | Replace instances in batches | Another roll (slow) | Partially |
| Blue-green | Two environments; flip router | Instant flip back | No (all-or-nothing traffic) |
| Canary | Small % real traffic; compare metrics | Shift traffic back | **Yes** — that is its job |

All three require **backward-compatible migrations** while two code versions share one database — expand / migrate / contract:

```text
Rename users.name → users.full_name with zero downtime:

1 EXPAND   ADD COLUMN full_name; v1 ignores it
2 DUAL WRITE  write both; read name; backfill batches
3 SWITCH READS  read full_name; still write both
4 CONTRACT  stop writing name; later DROP name

Each step independently deployable and reversible.
```

**DEPLOY ≠ RELEASE:**

Feature flags put unfinished code on servers while behaviour stays off. Deploy continuously; release when metrics and product say so. Cost: every flag is a branch; flags need owners and expiry dates or they become permanent complexity.

**SECURITY IN THE PIPELINE:**

Secret scanning, dependency audit, image CVE scan, pin third-party Actions to commit SHAs (mutable tags are supply-chain risk). Pipeline credentials are high value — short-lived tokens, least privilege, secrets from a store at runtime.

**DORA (EMPIRICAL BACKING):**

Deployment frequency, lead time commit→prod, change failure rate, time to restore. Speed and stability reinforce each other: small changes are easier to verify and faster to undo. Ceremonial monthly batches buy *larger* risk, not safety.

```yaml
# Shape of a cost-ordered GitHub Actions pipeline (illustrative)
name: CI
on:
  push: { branches: [main] }
  pull_request: {}
jobs:
  fast-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ruff check . && ruff format --check .
      - run: pytest tests/unit -n auto
      - uses: gitleaks/gitleaks-action@v2   # secrets never reach history
  integration:
    needs: fast-checks
    services:
      postgres:
        image: postgres:16
        # pin by digest in real repos; inject DATABASE_URL at runtime
    steps:
      - run: pytest tests/integration -q
  build:
    needs: [integration]
    steps:
      - run: echo "build image tagged :${{ github.sha }} — promote, do not rebuild"
  production:
    needs: build
    if: github.ref == 'refs/heads/main'
    environment: production   # approval = delivery; omit for deployment
    steps:
      - run: ./deploy.sh --image ":${{ github.sha }}" --weight 5   # canary
      - run: ./verify-canary.sh && ./deploy.sh --weight 100
```

```python
# Feature flag: stable bucketing (not random() per request)
import hashlib
from dataclasses import dataclass
import datetime

@dataclass
class Flag:
    percentage: int
    allowlist: set[str]
    owner: str
    expires: datetime.date

def enabled(flag: Flag, name: str, user_id: str) -> bool:
    if user_id in flag.allowlist:
        return True
    bucket = int(hashlib.sha256(f"{name}:{user_id}".encode()).hexdigest()[:8], 16) % 100
    return bucket < flag.percentage
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add a workflow that runs lint + unit tests on every PR; break it three ways and read each log |
| Medium | Build an image tagged by commit SHA; deploy the *same* digest to two environments with runtime config only; add secret scanning |
| Hard | Walk expand-contract for a column rename; implement canary verification sketch (error rate + p99 vs baseline → rollback) |

**WHAT THIS UNLOCKS NEXT:**

A green pipeline that builds artifacts still leaves “works on my machine.” Packaging the app and its runtime so the same image runs in CI and production is Phase 78.

---

> **Phase 77 complete?** [Build the Phase 77 mini-project](../guides/Projects.md#cs-phase-77-project) · [Continue to Phase 78](#phase-78)

---

# PHASE 78 - Containers & Deployment

**Track:** Professional Software Engineering

**WHAT YOU WILL BE ABLE TO DO:** Package a small service in a container image; explain Dockerfile layers; and distinguish **config env vars** from **secrets** (never bake secrets into an image).

**WHAT YOU SHOULD KNOW FIRST:** Phase 77 — CI builds artifacts; containers are a common artifact shape; pipelines inject secrets at runtime. Phases 60–65 — the app still needs a real filesystem and network underneath the box.

**LEARNING RESOURCES:**

- [Docker explained (The Coding Sloth)](https://www.youtube.com/watch?v=DQdB7wFEygo)
- [Docker docs — Get Started](https://docs.docker.com/get-started/)
- [What is Secrets Management? (IBM Technology)](https://www.youtube.com/watch?v=iETENR5MEB8)
- [prakhar1989/docker-curriculum](https://github.com/prakhar1989/docker-curriculum)
- [12factor.net — Config](https://12factor.net/config)

## 78.1 Package Once, Run Anywhere (Almost)

CI can be green while three laptops disagree on Python minor versions and system libraries. Containers bundle the process and its runtime dependencies into an **image** you run the same way on a laptop, a CI runner, or a server. “Almost” remains honest: kernel, hardware, and external services still differ — but the *app runtime* stops being a mystery.

**CORE VOCABULARY:**

| Concept | What it is |
| ------- | ---------- |
| **Image** | Immutable filesystem snapshot + metadata (entrypoint, default env) |
| **Container** | Running (or stopped) instance — process isolation + namespaces |
| **Dockerfile** | Recipe of **layers**: base → deps → code → command |
| **Registry** | Where images are stored/pulled (GHCR, Docker Hub, private) |

**LAYERS AND CACHE:**

Each Dockerfile instruction typically adds a layer. Changing an early layer invalidates every later cache — so copy dependency manifests *before* application code so code edits do not reinstall the world.

```text
FROM python:3.12-slim          # layer 0 base
COPY requirements.txt .        # layer 1 deps-meta  ← change rarely
RUN pip install -r ...         # layer 2 deps
COPY app.py .                  # layer 3 app        ← change often
CMD ["python", "app.py"]       # layer 4 cmd

Edit app.py  → rebuild layers 3–4 only (CACHE on 0–2)
Edit requirements.txt → rebuild from layer 1 onward
```

**CONFIG VS SECRETS (DO NOT BLUR):**

| | Environment variables | Secrets |
| - | --------------------- | ------- |
| **Purpose** | Non-sensitive config (`PORT`, `LOG_LEVEL`, feature flags) | Credentials (`DB_PASSWORD`, API keys) |
| **OK in image?** | Defaults sometimes | **Never** bake into layers or `ENV` in Dockerfile |
| **Where they live** | Process env / orchestrator config | Secret store / CI injector / sealed volume |
| **Leak risk** | Crash dumps, `docker inspect` | Same — rotate when exposed |

Twelve-factor “store config in the environment” means *inject at runtime*, not commit production passwords in `.env` to Git. Local gitignored `.env` is a convenience; production uses a secrets manager or platform secret. Phase 77’s “promote the same artifact” depends on this: one image, many environments, different runtime injections.

```text
Host OS
  └─ container runtime
       └─ your process (only what the image installed)
Networks/volumes attach storage and ports.
Runtime injects: PORT=8080 (config) + DB_PASSWORD from secret store.
```

```dockerfile
# Good shape (secrets NOT present)
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app.py .
ENV PORT=8080
CMD ["python", "app.py"]
# DB_PASSWORD comes from orchestrator/CI at `docker run -e` / secret mount
```

```python playground=cs-phase-78-image-layers
# Model a tiny "Dockerfile" as ordered layers. Changing an early layer
# invalidates everything after it (cache bust) — same idea as real Docker.

layers = [
    ("FROM python:3.12-slim", "base"),
    ("COPY requirements.txt .", "deps-meta"),
    ("RUN pip install -r requirements.txt", "deps"),
    ("COPY app.py .", "app"),
    ("CMD python app.py", "cmd"),
]

def rebuild_from(change_index):
    print(f"Changed layer {change_index}: {layers[change_index][0]}")
    for i, (insn, name) in enumerate(layers):
        status = "REBUILD" if i >= change_index else "CACHE"
        print(f"  [{status}] {name}: {insn}")

rebuild_from(3)  # only app + cmd rebuild
rebuild_from(1)  # deps onward rebuild

bad = "ENV DB_PASSWORD=supersecret"  # baked into image history forever
good = "runtime inject from secret store / orchestrator"
print("bad:", bad)
print("good:", good)
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define image vs container; give one example of config vs secret |
| Medium | Write a short Dockerfile for a hello HTTP server; explain layer order and where the DB password comes from |
| Hard | Containerize a Phase 75-style service with a mapped port — password via runtime env, not the image; argue why CI must promote one digest |

**WHAT THIS UNLOCKS NEXT:**

Containers still need somewhere to run — VMs, managed container services, object storage, load balancers. Cloud is “someone else’s computer” as productized building blocks. That is Phase 79 — not full Kubernetes or distributed Story XI.

---

> **Phase 78 complete?** [Continue to Phase 79](#phase-79)

---

# PHASE 79 - Cloud Fundamentals

**Track:** Professional Software Engineering

**WHAT YOU WILL BE ABLE TO DO:** Explain cloud building blocks — compute, storage, and networking — and map IaaS / PaaS / SaaS to who manages which layer.

**WHAT YOU SHOULD KNOW FIRST:** Phase 78 — containers are one compute packaging. Phases 55–59 — networks still apply; the cloud does not erase packets and DNS. Phases 60–65 — managed databases are still databases with the same consistency trade-offs.

**LEARNING RESOURCES:**

- [IaaS vs PaaS vs SaaS (Google Cloud)](https://cloud.google.com/learn/paas-vs-iaas-vs-saas)
- [Cloud Computing fundamentals (Great Learning)](https://www.youtube.com/watch?v=UH6qCty0nF4)
- [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/) — read the diagram; ideas transfer across vendors
- Skim one provider’s free-tier docs for compute + object storage + VPC

## 79.1 Someone Else's Computer, Productized

An image from Phase 78 still needs a machine, a disk, a network path, and an identity policy. Cloud providers rent elastic capacity and managed services so you stop racking hardware — but you still choose shapes. Wrong choices look like “the cloud is slow” when the real issue is chatty cross-AZ traffic or a tiny instance. This phase is **fundamentals**, not Kubernetes or the full distributed design Story XI owns.

**SHARED RESPONSIBILITY (ACCURATE WORDING):**

The provider secures *of* the cloud (hardware, hypervisor, facilities, often the managed control plane). You secure *in* the cloud (guest OS on IaaS, app code, IAM policies, data classification, keys you choose to manage, network allow-lists). Moving to PaaS shifts more of the stack to the provider — it does **not** move responsibility for *your* application bugs, leaked secrets, or public buckets.

```text
                 You manage ←――――――――――――――→ Provider manages
IaaS (VMs):      OS patches, runtime, app, data, IAM     hardware, hypervisor, regions
PaaS:            app code, data, secrets, IAM            OS, runtime, much scaling plumbing
SaaS:            users, config, data you enter           almost the product stack
```

Misread to avoid: “we’re on a big cloud so security is handled.” Shared responsibility means **both** parties have jobs.

**BUILDING BLOCKS YOU WILL KEEP MEETING:**

| Block | Examples | Trap |
| ----- | -------- | ---- |
| **Compute** | VMs, containers, serverless functions | Undersized instance blamed on “cloud” |
| **Storage** | Block disks, object blobs, file shares | Durability ≠ a backup you tested restoring |
| **Networking** | VPC, subnets, security groups, LB, DNS | Cross-AZ chatter bills and latency |
| **Identity** | IAM who/what may call which API | Over-broad roles (ties to Story IX) |

```text
Bookstore sketch (vendor-neutral):

  DNS + load balancer
        │
   web container(s)  ── object storage (cover images)
        │
   api container(s)  ── managed relational DB (orders)
        │
   managed cache (sessions)     secrets from vault / platform store
```

Managed services buy speed and ops relief; they cost money and create vendor-shaped constraints. Design for *portability of ideas* (twelve-factor: config, logs, disposability) even when you embrace a managed DB. Full multi-region failover, consensus, and CAP trade-offs wait for Story XI — here you need to know which *layer* you bought and which risks remain yours.

```python playground=cs-phase-79-cloud-map
# Map a toy app to cloud building blocks (no vendor lock-in in the sketch).

app = {
    "web": "container on compute",
    "api": "container on compute",
    "uploads": "object storage",
    "sessions": "managed cache or DB",
    "users": "managed relational DB",
    "public_dns": "DNS + load balancer → web",
}

for component, block in app.items():
    print(f"{component:12} → {block}")

print("\nIf PaaS for web: you still own app code, secrets, and data correctness.")
print("IaaS VM: you also own OS patches and runtime upgrades.")
print("SaaS email: you own who may send and what PII goes in the body.")
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define IaaS, PaaS, SaaS with one example each; state one responsibility that remains yours on PaaS |
| Medium | Draw compute/storage/network/IAM for a photo-sharing toy app |
| Hard | Argue when a managed database is worth the lock-in for a student project vs a self-hosted container |

**WHAT THIS UNLOCKS NEXT:**

Once software runs on machines you do not sit next to, “print debugging” stops working. You need logs, metrics, and traces — and SLI/SLO language — to see what production is actually doing. That is Phase 80.

---

> **Phase 79 complete?** [Continue to Phase 80](#phase-80)

---

# PHASE 80 - Observability & Production Debugging

**Track:** Professional Software Engineering

**WHAT YOU WILL BE ABLE TO DO:** Use the three pillars — logs, metrics, and traces — to form a hypothesis about a live problem and say what signal would confirm or kill it; define a simple SLI/SLO pair.

**WHAT YOU SHOULD KNOW FIRST:** Phases 77–79 — you can ship to somewhere not-your-laptop. Phases 55–59 — latency and partial failure are network facts. Phase 74 — tests catch regressions before prod; observability catches what tests never saw.

**LEARNING RESOURCES:**

- [Metrics, Logs and Traces: What To Observe and Why](https://www.youtube.com/watch?v=aJpzr8648XE)
- [Observability primer (OpenTelemetry)](https://opentelemetry.io/docs/concepts/observability-primer/)
- [What is OpenTelemetry? (Better Stack)](https://www.youtube.com/watch?v=LzLULxhyIpU)
- [Google SRE book — SLIs, SLOs, SLAs](https://sre.google/sre-book/service-level-objectives/) (definitions)

## 80.1 See What Is Actually Happening

Story X taught you to collaborate, specify, test, structure, gate work, automate the path to production, package once, and host on shared infrastructure. Production still fails in ways unit tests never invent — bad deploys, dependency slowdowns, rare races, capacity cliffs. Observability is the ability to ask new questions of a running system without shipping new code for every question.

**THREE PILLARS:**

| Signal | Good for | Weak at |
| ------ | -------- | ------- |
| **Logs** | Exact errors, audit trail, “what happened to request X” | High-cardinality noise; hard to aggregate alone |
| **Metrics** | Rates, saturation, SLI time series | Often lose per-user detail |
| **Traces** | Where time went across services (spans + trace id) | Need context propagation; sampling trade-offs |

```text
Request abc123
  ├─ api.handle_checkout          920ms
  │    ├─ domain.calculate_total    2ms
  │    ├─ db.insert_order          40ms
  │    └─ payments.charge         850ms   ← culprit span
  └─ log: "timeout talking to payments"  trace=abc123
metric: http_p95_ms = 900 (was 120)
```

Correlate with a **request id / trace id**. Prefer structured logs (JSON fields) over free prose. Never paste secrets into logs.

**SLI / SLO / SLA (LIGHT):**

| Term | Meaning | Example |
| ---- | ------- | ------- |
| **SLI** | Measurement of user-visible goodness | Fraction of HTTP requests < 300 ms; successful checkouts / attempts |
| **SLO** | Target on an SLI over a window | 99.9% of requests < 300 ms over 30 days |
| **SLA** | Business/legal contract (often uses SLOs) | Outside beginner scope — know it exists |

Pick SLIs from **user journeys**, not from “CPU is high.” Metrics power SLOs; logs and traces explain *why* an error budget is burning. Canary deploys in Phase 77 only work if these signals exist.

**PRODUCTION DEBUG LOOP:**

```text
1 Symptom (checkout slow / error spike)
2 Which signal moved? (p95, error rate, saturation)
3 Narrow blast radius (one region? one dependency? one deploy SHA?)
4 Confirm with a trace or log field
5 Fix + regression test (Phase 74)
6 Alert so it cannot silently return
```

```python playground=cs-phase-80-debug-signals
# Toy "incident": p95 latency jumped. Which signal supports which hypothesis?

events = [
    {"type": "metric", "name": "http_p95_ms", "value": 900},  # was ~120
    {"type": "metric", "name": "db_error_rate", "value": 0.02},
    {"type": "log", "msg": "timeout talking to payments", "trace": "abc"},
    {"type": "trace_span", "name": "payments.charge", "ms": 850, "trace": "abc"},
]

def hypothesize(events):
    p95 = next(e["value"] for e in events if e.get("name") == "http_p95_ms")
    pay = next(e for e in events if e.get("name") == "payments.charge")
    if p95 > 500 and pay["ms"] > 500:
        return "Hypothesis: payments dependency is the latency culprit (trace confirms)."
    return "Hypothesis unclear — gather more signals."

print(hypothesize(events))
for e in events:
    print(e)
```

**BOOKSTORE SLI SKETCH:**

```text
Journey: complete paid checkout
SLI:     success_rate = paid_orders / checkout_attempts
SLO:     99.5% over 30 days rolling
Burn:    success_rate drops after deploy :a1b2 → check canary metrics,
         then trace slow spans, then logs for payment timeouts
Alert:   page when burn rate would exhaust monthly error budget in 2 hours
```

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define logs vs metrics vs traces in one line each; define SLI vs SLO in one line each |
| Medium | Given “checkout is slow,” list two metrics and one trace question you would check first |
| Hard | Sketch an OpenTelemetry-style plan for a 2-service app; name one SLI/SLO pair and what alert fires when the SLO burns |

**WHAT THIS UNLOCKS NEXT:**

Story X made you able to **ship with teammates safely**: shared history and review, buildable specs, automated proof, domain-centered architecture, visible process gates, CI/CD, containers with runtime secrets, cloud shared responsibility, and production signals with SLIs/SLOs. That toolkit still assumes *one coherent system you can reason about as a unit*. The next limit is load, partial failure, and multiple machines — when one server is no longer enough. System design foundations open Story XI at Phase 81: clarify, estimate, draw the simplest shape, and name which later lever (scale, cache, queue, consensus, reliability) you reach for when the numbers force it.

---

> **Phase 80 complete?** [Continue to Phase 81](#phase-81)

---
