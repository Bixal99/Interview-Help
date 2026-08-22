from pathlib import Path

p = Path(r"scripts/_story_x_lean.md")
t = p.read_text(encoding="utf-8")

def replace_once(text, old, new, label):
    if old not in text:
        raise SystemExit(f"anchor missing: {label}")
    return text.replace(old, new, 1)

t = replace_once(
    t,
    """`git add` moves working → index; `git commit` moves index → repository. The staging area lets you commit a coherent *subset* of a messy desk — `git add -p` stages hunks so reviews stay small.

```text
  working directory        staging (index)           repository
   (disk)                  (next commit)             (history)
        |----- git add ----------->|                        |
        |                          |----- git commit ------>|
```

**MERGE VS REBASE (REAL TRADE-OFF):**""",
    """`git add` moves working → index; `git commit` moves index → repository. The staging area lets you commit a coherent *subset* of a messy desk — `git add -p` stages hunks so reviews stay small.

```text
  working directory        staging (index)           repository
   (disk)                  (next commit)             (history)
        |----- git add ----------->|                        |
        |                          |----- git commit ------>|
        |<---- git restore <f> ----|                        |
        |<------------- git switch <branch> ----------------|
```

**LIBRARY ANALOGY (WHY BRANCHING IS CHEAP):**

Git is a library where nothing is edited in place — every edition is new. Pages (blobs) are filed by fingerprint of contents; identical text is one physical page no matter how many books cite it. A book (tree) is a list of which pages it contains. An edition (commit) notes author, date, message, and the previous edition. A branch is a sticky note on a shelf naming the current edition — moving work forward means moving the sticky note, not photocopying the book. Merging binds a new edition with two parents; rebasing re-types your chapters atop someone else's latest edition (new fingerprints). The reflog is the front desk's log of every shelf position that sticky note occupied.

**RESET DEPTH (AND WHY --hard FEELS DANGEROUS):**

```text
reset --soft  HEAD~1   repo rewound; index kept; disk kept
                       → "undo commit, keep everything staged"
reset --mixed HEAD~1   repo + index rewound; disk kept  (default)
                       → "undo commit and unstage"
reset --hard  HEAD~1   repo + index + disk rewound
                       → "throw the work away" — still often recoverable via reflog
```

**MERGE VS REBASE (REAL TRADE-OFF):**""",
    "72a",
)

t = replace_once(
    t,
    """Atomic commits make bisect useful: a 40-file “fix everything” commit answers “which commit?” poorly.

**CODE REVIEW AS A GATE:**""",
    """Atomic commits make bisect useful: a 40-file "fix everything" commit answers "which commit?" poorly.

```text
"Passed 500 commits ago; fails now."
Linear: up to 500 checks.  Bisect: ~log2(500) ≈ 9 checks.

  git bisect start
  git bisect bad                 # HEAD broken
  git bisect good v1.2.0         # known good
  # Git checks out midpoint; you test; answer good/bad
  git bisect run ./test.sh       # exit 0 = good — fully automated
  git bisect reset
```

**TRADE-OFFS TEAMS ACTUALLY ARGUE:**

| Choice | Gain | Cost |
| ------ | ---- | ---- |
| Rebase own feature branches | Linear history; clean bisect | Rewrites hashes; unsafe once shared |
| Merge commits | True concurrency record | Noisy graph at scale |
| Squash merges | One commit per logical change on main | Loses granular revert/blame |
| Trunk-based + small PRs | Real review; few conflicts | Needs flags + real tests (Phase 77) |
| Long-lived release branches | Controlled hotfixes | Painful merges; cherry-pick overhead |

**CODE REVIEW AS A GATE:**""",
    "72b",
)

t = replace_once(
    t,
    """That loop — branch, conflict, review, merge — is the daily texture of Story X. Git.md deepens the object model and recovery drills; Projects.md Git cards make the muscle memory.

**PRACTICE:**""",
    """That loop — branch, conflict, review, merge — is the daily texture of Story X. Git.md deepens the object model and recovery drills; Projects.md Git cards make the muscle memory.

**COMMAND LAB (RUN LOCALLY — NOT A PLAYGROUND):**

```bash
# 1. Prove the object model
git init demo && cd demo
echo "hello" > greeting.txt
git add . && git commit -m "first commit"
git cat-file -p HEAD
git cat-file -p HEAD^{tree}
git cat-file -p HEAD:greeting.txt
cat .git/refs/heads/main          # a branch really is one hash

# Identical content stored once:
cp greeting.txt copy.txt
git add . && git commit -m "same content, new name"
git cat-file -p HEAD^{tree}       # two names, one blob hash

# 2. Coherent commits from a mess
git add -p && git commit -v

# 3. Merge vs rebase on a real graph
git switch -c feature
echo "feature" >> greeting.txt && git commit -am "feature: D"
git switch main
echo "main" > other.txt && git add . && git commit -m "main: C"
git log --oneline --graph --all
git switch feature && git rebase main
git reflog                        # originals still here ~90 days

# 4. Recovery + blame
git revert <sha>                  # safe undo on shared history
git log -S "compute_discount" --oneline
git blame -w -C -- path/file.py
```

Interview texture (not a quiz sheet): merge vs rebase *and* the never-rebase-shared rule; reset vs revert; "committed a password" → rotate credential first, rewrite history second; bisect for "broke somewhere in the last N commits"; review disagreements that separate blocking vs nit.

**PRACTICE:**""",
    "72c",
)

t = replace_once(
    t,
    """That harness is deliberately tiny — it shows the *shape*. Phase 74 turns the same Given/When/Then into a lasting automated pyramid.

**PRACTICE:**""",
    """That harness is deliberately tiny — it shows the *shape*. Phase 74 turns the same Given/When/Then into a lasting automated pyramid.

**AMBIGUITY TAX (WHY THIS PHASE EXISTS):**

```text
No spec:
  Engineer A builds email digests
  Engineer B builds in-app toasts
  Reviewer argues about Slack
  Three PRs, zero shared "done"
  Git history looks busy; product is thrashing

With mini-spec + non-goals:
  One slice, one PR, acceptance pasted into "How I verified it"
  Disagreement happens in the ticket, not after merge
```

Non-functional criteria need numbers: "fast" is not a requirement; "p95 < 300 ms on staging for the watchlist badge endpoint" is. Privacy/accessibility belong here too when the slice touches them — "no user enumeration on login errors" is a requirement, not a nice-to-have.

**PRACTICE:**""",
    "73",
)

t = replace_once(
    t,
    """Flaky tests train teams to ignore red builds — fix or delete. Independence (any subset, any order) enables parallel runs and keeps the fast loop honest.

**PRACTICE:**""",
    """Flaky tests train teams to ignore red builds — fix or delete. Independence (any subset, any order) enables parallel runs and keeps the fast loop honest.

**AIRCRAFT ANALOGY (WHY THE SHAPE IS FORCED):**

Bolts are bench-tested by the thousand (unit). Wings are tested as assemblies (integration). The finished aircraft flies a handful of times (E2E). Nobody proposes skipping bolt tests and flying more often: a failed flight tells you almost nothing about which of a million parts failed, and you cannot afford a flight after every design change. Conversely, perfect bolts assembled wrong still fail — so integration and a few E2E paths remain. Mocking the fuselage while testing the wing is useful until the mock's bolt pattern drifts from the real fuselage — then the suite is green and the aircraft is not.

**PROPERTY-BASED + INTEGRATION SKETCH:**

```python
# Property: total never negative; never exceeds subtotal + max VAT
# Hypothesis-style: generate many (subtotal, percent, country); shrink failures

# Integration: real Postgres CHECK (subtotal_cents >= 0)
# A unit test cannot catch a missing DB constraint — only a real engine can.
# testcontainers / CI service containers make "use the real DB" affordable.

# E2E: assert get_by_role("button", name="Pay") and visible "Order confirmed"
# — not CSS class names (main flake source)
```

| Choice | Gain | Cost |
| ------ | ---- | ---- |
| Mock your own database | Milliseconds | Passes while real SQL is wrong |
| Real DB in a container | Confidence in queries/transactions | Seconds + Docker in CI |
| Test via public interfaces | Refactor freely | Indirect setup for some paths |
| Chase 100% line coverage | No unexamined regions | Tests written to hit lines, not assert |
| Branch coverage + mutation | Measures defence | Mutation runs are slow (often nightly) |

**PRACTICE:**""",
    "74",
)

t = replace_once(
    t,
    """Restaurant analogy: recipes (domain) survive when you swap the stove brand (infra).

```python
# domain.py — no I/O imports""",
    """Restaurant analogy: recipes (domain) survive when you swap the stove brand (infra).

**BOOKSTORE PACKAGE SKETCH:**

```text
bookstore/
  domain/          # Order, Money, InventoryPolicy — zero Flask/SQLAlchemy
  application/     # PlaceOrder, CancelOrder use cases + ports
  adapters/
    web/           # Flask/FastAPI controllers → commands/DTOs
    persistence/   # SQLAlchemy repos implementing ports
    mail/          # SMTP adapter
```

Imports may point inward only. Controllers depend on application services; application depends on domain + port interfaces; adapters implement ports. That is Phase 29's dependency arrow at *package* scale.

```python
# domain.py — no I/O imports""",
    "75",
)

t = replace_once(
    t,
    """**BOOKSTORE SPRINT SKETCH:**

```text
Mon: refine top 3 backlog items into mini-specs (Phase 73)
Tue–Wed: WIP≤2; Ada on badge API, Sam on UI — both Ready→In progress→Review
Thu: review gate; squash-merge small PRs (Phase 72)
Fri: demo against acceptance; retro changes WIP or DoD if reviews stalled
Manual "run tests then FTP to server" still hurts → Phase 77 automates the path
```

**PRACTICE:**""",
    """**BOOKSTORE SPRINT SKETCH:**

```text
Mon: refine top 3 backlog items into mini-specs (Phase 73)
Tue–Wed: WIP≤2; Ada on badge API, Sam on UI — both Ready→In progress→Review
Thu: review gate; squash-merge small PRs (Phase 72)
Fri: demo against acceptance; retro changes WIP or DoD if reviews stalled
Manual "run tests then FTP to server" still hurts → Phase 77 automates the path
```

**FLOW METRICS (LIGHT):**

| Metric | Asks | Process smell if bad |
| ------ | ---- | -------------------- |
| Cycle time | Ready → Done | Oversized stories; review queue |
| Lead time | Idea → production | Too much WIP; unclear priority |
| Throughput | Items finished / week | Starting without finishing |
| Age of WIP | How long current cards have sat | Hidden blockers; heroics |

You do not need a tool vendor's full suite — a whiteboard with WIP limits and honest "blocked" stickers already changes behaviour. Ceremonies that do not change the board are theatre; retros that only vent without changing WIP/DoD are theatre too.

**PRACTICE:**""",
    "76",
)

t = replace_once(
    t,
    """**DORA (EMPIRICAL BACKING):**

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

**PRACTICE:**""",
    """**DORA (EMPIRICAL BACKING):**

Deployment frequency, lead time commit→prod, change failure rate, time to restore. Speed and stability reinforce each other: small changes are easier to verify and faster to undo. Ceremonial monthly batches buy *larger* risk, not safety.

**FACTORY CORD (WHY A RED BUILD STOPS THE LINE):**

Toyota's insight: the cost of a defect grows the farther down the line it travels. A red CI build is the cord — stopping now, when the fault is localised, beats discovering it in a customer's driveway. "Main is red and everyone keeps merging" is the worst team state: the signal that protects you has been trained into noise.

**FULLER PIPELINE (STILL ILLUSTRATIVE):**

```yaml
# Cost-ordered stages; concurrency cancels superseded runs
name: CI
on:
  push: { branches: [main] }
  pull_request: {}
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
permissions:
  contents: read
jobs:
  fast-checks:
    runs-on: ubuntu-latest
    timeout-minutes: 10
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.12", cache: pip }
      - run: pip install -r requirements-dev.txt
      - run: ruff check . && ruff format --check .
      - run: mypy src/
      - run: pytest tests/unit -n auto --cov=src --cov-branch
      - uses: gitleaks/gitleaks-action@v2
  integration:
    needs: fast-checks
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env: { POSTGRES_PASSWORD: test }
        ports: ["5432:5432"]
    steps:
      - uses: actions/checkout@v4
      - run: pip install -r requirements-dev.txt
      - run: alembic upgrade head
        env: { DATABASE_URL: postgresql://postgres:test@localhost/postgres }
      - run: pytest tests/integration -q
        env: { DATABASE_URL: postgresql://postgres:test@localhost/postgres }
  security:
    needs: fast-checks
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pip install pip-audit && pip-audit --strict
  build:
    needs: [integration, security]
    runs-on: ubuntu-latest
    outputs: { image: ${{ steps.meta.outputs.image }} }
    steps:
      - id: meta
        run: echo "image=ghcr.io/${{ github.repository }}:${{ github.sha }}" >> $GITHUB_OUTPUT
      - run: echo "Build and push ${{ steps.meta.outputs.image }} — promote this digest only"
  staging:
    needs: build
    if: github.ref == 'refs/heads/main'
    environment: staging
    steps:
      - run: ./deploy.sh staging "${{ needs.build.outputs.image }}"
      - run: npx playwright test --grep @smoke
  production:
    needs: staging
    environment: production   # required reviewer = continuous DELIVERY
    steps:
      - run: ./deploy.sh production "${{ needs.build.outputs.image }}" --weight 5
      - run: ./verify-canary.sh --duration 300 --max-error-rate 0.5 --max-p99-ms 300
      - run: ./deploy.sh production "${{ needs.build.outputs.image }}" --weight 100
      - if: failure()
        run: ./deploy.sh production --rollback
```

Secrets and config: `DATABASE_URL` and deploy credentials come from GitHub Environments / a secret store at *job runtime*. They must not appear in Dockerfile `ENV`, in the committed workflow as plaintext, or in the image layers Phase 78 will discuss. Pin third-party Actions to a commit SHA in real repos — mutable tags are supply-chain risk.

```python
# Feature flag: stable bucketing (not random() per request)
import hashlib
from dataclasses import dataclass
import datetime

@dataclass
class Flag:
    name: str
    percentage: int
    allowlist: set[str]
    owner: str
    expires: datetime.date

def enabled(flag: Flag, user_id: str) -> bool:
    if user_id in flag.allowlist:
        return True
    bucket = int(hashlib.sha256(f"{flag.name}:{user_id}".encode()).hexdigest()[:8], 16) % 100
    return bucket < flag.percentage

def report_stale(flags, today):
    for f in flags:
        if f.expires < today:
            print(f"STALE: {f.name} owner={f.owner}")
        elif f.percentage == 100:
            print(f"DELETE: {f.name} fully rolled out — remove old path")
```

Without flags: a three-week feature branch → merge conflict pain → one huge release → revert undoes weeks. With flags: merge daily with behaviour OFF → enable for staff → 1% → 100% → delete the flag. Deploy = code on servers; release = users can see it.

**PRACTICE:**""",
    "77",
)

t = replace_once(
    t,
    """```dockerfile
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

```python playground=cs-phase-78-image-layers""",
    """```dockerfile
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

**MULTI-STAGE (WHY PRODUCTION IMAGES STAY SMALL):**

```dockerfile
# build stage: compilers, headers, test tooling
FROM python:3.12 AS build
WORKDIR /src
COPY requirements.txt .
RUN pip install --prefix=/install -r requirements.txt
COPY . .
# (optional) RUN pytest

# runtime stage: only what the process needs
FROM python:3.12-slim
COPY --from=build /install /usr/local
COPY app.py /app/app.py
WORKDIR /app
USER nobody
CMD ["python", "app.py"]
```

Build tools and secrets used *during* `docker build` can still leak into layer history if you `ENV` them or `COPY` a `.env`. Prefer BuildKit secret mounts for private pip indexes; never `COPY .env` into any stage that ships.

**RUN VS IMAGE:**

```text
docker build -t bookstore-api:a1b2c3d .
docker run --rm -p 8080:8080 \\
  -e PORT=8080 \\
  -e DATABASE_URL  # from shell/orchestrator — not from the image \\
  bookstore-api:a1b2c3d
```

Same digest `a1b2c3d` that passed CI staging should be what production runs (Phase 77 promote rule). Tag `latest` is a mutable lie about which code is live.

```python playground=cs-phase-78-image-layers""",
    "78",
)

t = replace_once(
    t,
    """Managed services buy speed and ops relief; they cost money and create vendor-shaped constraints. Design for *portability of ideas* (twelve-factor: config, logs, disposability) even when you embrace a managed DB. Full multi-region failover, consensus, and CAP trade-offs wait for Story XI — here you need to know which *layer* you bought and which risks remain yours.

```python playground=cs-phase-79-cloud-map""",
    """Managed services buy speed and ops relief; they cost money and create vendor-shaped constraints. Design for *portability of ideas* (twelve-factor: config, logs, disposability) even when you embrace a managed DB. Full multi-region failover, consensus, and CAP trade-offs wait for Story XI — here you need to know which *layer* you bought and which risks remain yours.

**RESPONSIBILITY WALKTHROUGH:**

```text
Incident: public read on an object-storage bucket of ID scans
  Provider: kept disks encrypted at rest, region up
  You: ACL/policy allowed public read — still your breach

Incident: unpatched OpenSSL on an IaaS VM
  Provider: hypervisor fine
  You: guest OS patches — your window

Incident: PaaS app SQL-injectable search box
  Provider: patched the runtime
  You: app code — Story IX still applies
```

Regions and AZs are productized failure domains: putting web and DB in different regions without a design for latency/consistency is how "the cloud is slow" bugs are born. Start single-region; let Story XI own multi-region truth.

```python playground=cs-phase-79-cloud-map""",
    "79",
)

t = replace_once(
    t,
    """**BOOKSTORE SLI SKETCH:**

```text
Journey: complete paid checkout
SLI:     success_rate = paid_orders / checkout_attempts
SLO:     99.5% over 30 days rolling
Burn:    success_rate drops after deploy :a1b2 → check canary metrics,
         then trace slow spans, then logs for payment timeouts
Alert:   page when burn rate would exhaust monthly error budget in 2 hours
```

**PRACTICE:**""",
    """**BOOKSTORE SLI SKETCH:**

```text
Journey: complete paid checkout
SLI:     success_rate = paid_orders / checkout_attempts
SLO:     99.5% over 30 days rolling
Burn:    success_rate drops after deploy :a1b2 → check canary metrics,
         then trace slow spans, then logs for payment timeouts
Alert:   page when burn rate would exhaust monthly error budget in 2 hours
```

**SIGNAL SELECTION UNDER PRESSURE:**

```text
Symptom: "checkout is slow"
  Metrics first: http_p95_ms, payments_p95_ms, db_p95_ms, CPU/sat
  If payments_p95 moved with http_p95 → dependency hypothesis
  Trace one slow request → confirm span
  Logs for that trace id → error class / timeout
  Fix: timeout+retry policy later (Phase 87); for now roll back deploy if canary

Symptom: "intermittent 500s"
  Metrics: error_rate by endpoint + deploy version
  Logs: exception class + request id (structured)
  Trace: which service returned 500 first
  Avoid: SSHing to random boxes hoping to reproduce
```

Cardinality warning: a metric label per user id will melt your metrics backend. High-cardinality detail belongs in traces/logs with sampling; SLIs stay coarse enough to chart for months.

OpenTelemetry-shaped habit (conceptual): instrument at edges (HTTP middleware, DB client) with one trace context propagated; export to whatever backend your team runs. You do not need to master every vendor UI — you need the three-pillar questions.

**PRACTICE:**""",
    "80",
)

p.write_text(t, encoding="utf-8")
print("lean chars:", len(t))
