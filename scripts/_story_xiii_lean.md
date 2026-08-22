# PHASE 92 - Working in Existing Codebases

**Track:** Maintaining Real Software

**WHAT YOU WILL BE ABLE TO DO:** Onboard into an unfamiliar production codebase deliberately — run it, map entry points, follow one real request path, form a hypothesis — and ship a small, reviewable fix without rewriting the world.

**WHAT YOU SHOULD KNOW FIRST:** Phase 72 — PRs and reviewable diffs. Phases 74–75 — tests and boundaries help you find safe places to change. Phase 91 — you are changing something that already affects real users.

**LEARNING RESOURCES:**

- [How to approach large/unfamiliar codebases (ForrestKnight)](https://www.youtube.com/watch?v=jqHXJ3O7WGw)
- [Google's Code Review Developer Guide](https://google.github.io/eng-practices/review/) — what “small and reviewable” looks like from the reviewer’s side
- [Working Effectively with Legacy Code themes (Tech Lead Journal)](https://www.youtube.com/watch?v=mwVRHDD0tEk) — preview of Phase 93’s lens
- Practice: clone any mid-size open-source web app, run it, and write a one-page map before changing a line

## 92.1 Read Before You Write

Phase 91 closed Story XII with a hard truth: software reaches people, and ethical judgment is professional practice. That judgment does not mostly show up on greenfield side projects. Most of a career is **changing systems you did not create** — already running for real users, under constraints and consequences you just named. Story XIII teaches the maintenance workflow: **observe → trace → form a hypothesis → make the smallest safe change → verify**.

You join the Quarry Bookstore team. Checkout has been live for years. Your first ticket is not “redesign payments.” It is something confusing and narrow: some customers see a **wrong gift-card balance** on the checkout summary, only on retry after a failed card charge. Nobody on the current team wrote the original path. Opening folders at random and “cleaning up” until production breaks is the expensive mistake. Onboarding is a skill: build a **mental map**, then prove you can navigate with a **tiny, reviewable change**.

**THE FIRST-WEEK LOOP (DO NOT SKIP STEPS):**

1. **Run it** — install, seed data, hit a happy-path checkout; record the exact commands that worked. If you cannot run it, you cannot verify a fix.
2. **Find the front door** — HTTP routes, CLI `main`, job scheduler, message consumer. For this ticket: whatever serves `POST /checkout` and the balance widget.
3. **Trace one vertical slice** — request → handler → domain → DB / outbound call → response. Draw it. Do not skim the whole repo.
4. **Locate ownership signals** — README, CONTRIBUTING, CODEOWNERS, existing ADRs (Phase 94), recent PRs that touched checkout or wallet.
5. **Form a hypothesis** — “balance is cached from the first attempt and not refreshed on retry,” or “the UI reads a stale field while the charge path updates another.” Write it in one sentence before editing.
6. **Ship a tiny fix** — logging, a null check, a test, docs, or a narrowly scoped bug — sized so a teammate can review in minutes and you learn the review culture.

```text
Bad onboarding:  "I'll refactor the folder structure first."
Good onboarding: "I can run it, draw the request path, and merged a 20-line fix."

Ticket shape (example):
  Observe:   balance wrong only after failed charge + retry
  Trace:     POST /checkout → CheckoutController → WalletBalance
             → GiftCardRepo.read → CheckoutSummaryDTO
  Hypothesis: summary DTO keeps first-attempt balance; retry skips refresh
  Tiny fix:   refresh balance before building summary on retry
  Verify:     reproduce with seed gift card; assert summary matches repo
```

**OBSERVE BEFORE YOU TOUCH:**

Production symptoms are data. Reproduce locally with the same seed if you can. Read the last few commits and open incidents on that path. Ask who owns the wallet service — a CODEOWNERS hit or a Slack channel is a signal, not bureaucracy. Phase 80’s observability habits help: a structured log on checkout failure is often a better first PR than a speculative rewrite of pricing.

**YOUR ONE-PAGE ONBOARDING MAP:**

Fill this while reading — not after you “feel ready.” The map is the deliverable of week one; the tiny PR is the proof.

```python playground=cs-phase-92-onboard-map
# Toy "codebase map" you fill while reading a real repo.
# Replace entries with what you actually find in Quarry Bookstore (or any OSS app).

map_ = {
    "how_to_run": ["docker compose up", "npm test", "seed: gift card + cart"],
    "entry_points": ["POST /checkout", "GET /wallet/balance", "worker: emails"],
    "slice_balance_bug": [
        "route → CheckoutController",
        "→ WalletBalance.read_for_cart",
        "→ GiftCardRepo",
        "→ CheckoutSummaryDTO",
    ],
    "ownership_signals": ["CODEOWNERS: /wallet", "ADR-004 payments", "PR #1842"],
    "hypothesis": "summary keeps first-attempt balance; retry skips refresh",
    "first_safe_change": "refresh balance before summary on retry + log attempt_id",
}

for k, v in map_.items():
    print(k.upper())
    if isinstance(v, list):
        for item in v:
            print(" -", item)
    else:
        print(" ", v)
```

**WHAT “SMALL” MEANS:**

A first PR teaches the pipeline, the reviewers’ expectations, and whether your mental map was wrong. A 400-line “cleanup” teaches fear. Prefer: add a characterization-friendly log line, fix the one null the ticket names, or add a regression test once you understand the path. Phase 72 already taught reviewable diffs — use that muscle here. Architecture cleanup and “proper” seams come after you can find the door (Phase 93).

**COMMON ONBOARDING FAILURES:**

| Failure | What goes wrong |
| ------- | --------------- |
| Folder tourism | You rename and rearrange without a running happy path |
| Big-bang rewrite | You invent a second system while checkout still serves customers |
| Silent drive-by | You “fix style” in files unrelated to the ticket |
| No hypothesis | You edit until symptoms move, then cannot explain why |
| No verify | You ship without reproducing the bug or the fix |

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List the first-week loop steps from memory; mark which step your last project skipped |
| Medium | Map one open-source web app from one route to one database write; one page, one slice |
| Hard | Submit a real small PR to an unfamiliar repo — or a local Quarry-style checkout fix — and write three sentences on what the review taught you |

**WHAT THIS UNLOCKS NEXT:**

You can run the bookstore service, name the checkout front door, and ship a tiny fix with a written hypothesis. That still fails when the scary file — say `legacy_pricing.py` — has **almost no tests**, and every edit feels like a production bet. You need techniques to **characterize** what the code does today and introduce **seams** before you change logic. That is Phase 93.

---

> **Phase 92 complete?** [Continue to Phase 93](#phase-93)

---

# PHASE 93 - Legacy Code & Maintenance

**Track:** Maintaining Real Software

**WHAT YOU WILL BE ABLE TO DO:** Add characterization tests and a test seam around legacy behavior so you can change code safely when the original authors and tests are gone — and judge refactor vs rewrite without turning debt into a moral panic.

**WHAT YOU SHOULD KNOW FIRST:** Phase 92 — you can navigate the system. Phase 74 — you already know a test pyramid; here the first tests often pin *current* behavior, not ideal behavior. Phase 75 — seams are often dependency boundaries.

**LEARNING RESOURCES:**

- [Seams: How to Test Legacy Code (Michael Feathers)](https://www.youtube.com/watch?v=j4VkzzYM4k4)
- [Characterization Test (Martin Fowler bliki)](https://martinfowler.com/bliki/CharacterizationTest.html)
- [emilybache/GildedRose-Refactoring-Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata) — pin behavior, then refactor
- [Working Effectively with Legacy Code themes (Tech Lead Journal)](https://www.youtube.com/watch?v=mwVRHDD0tEk)

## 93.1 Change Safely When Tests Are Missing

Phase 92 got you into the bookstore checkout path with a map and a small merge. The next ticket is nastier: **discount stacking** in `legacy_pricing` looks wrong for multi-item carts, and there is no meaningful test suite around it. The author left two years ago. Teammates say “don’t touch pricing.” Fear is rational — without a safety net, “quick fixes” accumulate accidental breakage. Michael Feathers’ practical definition still holds: **legacy code is code without tests**. This phase is not a second testing-pyramid course (that was Phase 74) and not a full architecture redesign (Phase 75). It is the **maintenance move**: characterize → seam → smallest change → verify — then decide whether to refactor behind green lights or leave well enough alone.

**CHARACTERIZATION FIRST:**

A characterization test locks **what the system does today** for known inputs — including weird edge cases — before you decide what it *should* do. You are not blessing bad behavior forever; you are installing a tripwire so a rename or extract cannot silently change totals. When intent becomes clear, replace pure characterization with intentional behavior tests. Until then, green means “still the same strange world.”

```text
1) Capture:  assert legacy_price(cart) == <whatever it returns today>
2) Seam:     pass clock / tax table / catalog as parameters (or wrap statics)
3) Change:   implement the fix behind the tripwire
4) Tighten:  replace pure characterization with intentional tests when intent is clear
```

**SEAMS, SPROUT, WRAP:**

A **seam** is a place you can alter behavior without editing every call site — inject a collaborator, pass a function parameter, subclass, or wrap a static call. **Sprout** means grow new code beside the old (new method/class) and call it from a narrow place. **Wrap** means put a thin layer around the ball of mud so callers talk to something testable. Only then refactor: rename, extract, simplify behind green tests. Phase 75’s dependency boundaries are the same idea with better vocabulary; here you may invent a temporary seam that is ugly but safe.

**WORKED SLICE — BOOKSTORE LEGACY PRICING:**

```python playground=cs-phase-93-characterization
# Legacy pricing with a hidden global tax table — characterize, then seam.

TAX = {"default": 0.10}  # pretend module-global config

def legacy_line_total(unit_price, qty):
    # "legacy": hard to test because tax comes from a global
    return round(unit_price * qty * (1 + TAX["default"]), 2)

def line_total(unit_price, qty, tax_rate):
    # sprouted seam: tax injected
    return round(unit_price * qty * (1 + tax_rate), 2)

# Characterization of current behavior (including the weird rounding you inherit)
assert legacy_line_total(10.00, 3) == 33.0

# Same behavior via seam — now testable without mutating globals
assert line_total(10.00, 3, tax_rate=0.10) == 33.0

# After the seam exists, you can characterize edge cases deliberately
cases = [(0, 1, 0.0), (19.99, 2, 43.98), (5.00, 0, 0.0)]
for price, qty, expected in cases:
    assert line_total(price, qty, tax_rate=0.10) == expected

print("characterization OK; seam ready for safer discount-stacking changes")
```

In the real checkout module the “global” might be a static DB lookup, a file read, or `datetime.now()`. The move is the same: capture outputs, introduce a seam, then change discount stacking with the tripwire on.

**REFACTOR VS REWRITE (JUDGMENT, NOT SLOGAN):**

| Path | When it fits | Failure mode |
| ---- | ------------ | ------------ |
| **Refactor behind tests** | Behavior is mostly right; structure blocks the fix | Endless tidy with no product outcome |
| **Sprout / strangler** | New behavior can live beside old; cut over gradually | Two systems forever if you never delete the old path |
| **Rewrite** | Boundary is clear, characterization is hopeless, or compliance forces a clean break | Second system while checkout still serves customers |

Rewrites feel virtuous and often destroy institutional knowledge. Prefer the smallest path that makes the next change safe. Technical debt is **managed risk** — interest you pay in fear and slow delivery — not a moral failing of the previous team. Pay down the debt that sits on the change you need; do not declare holy war on every ugly file.

**COMPATIBILITY AND DEPRECATION (LIGHT DEPTH):**

When you extract or replace a pricing helper that other services still call, honesty requires a **compatibility story**: keep the old signature for a release, mark it deprecated, log call sites, and migrate callers. Feature flags and dual-run (old vs new total compared in logs) are maintenance tools, not Phase 81 system design. Skip them and you “fixed” pricing by breaking the mobile client.

**WHAT THIS PHASE IS NOT:**

- Not re-teaching the test pyramid end-to-end (74) — you already know unit/integration/e2e roles; characterization is the *first* net when none exists.
- Not a microservice redesign course (75 / 81–88) — seams here are surgical, not an excuse to invent seven new services for one discount bug.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define legacy code (Feathers) and characterization test in one line each |
| Medium | Add characterization tests for one Gilded Rose rule *before* refactoring; show the red/green you expected |
| Hard | Introduce a seam in a static-heavy module (clock, config, or HTTP) and cover it; write three sentences on refactor vs rewrite for that module |

**WHAT THIS UNLOCKS NEXT:**

You can change `legacy_pricing` without praying — characterize, seam, smallest fix, verify. Safe technical change still fails if the **decision** is invisible: six months from now the team will re-litigate “why did we extract a pricing port?” from Slack archaeology. Design docs and Architecture Decision Records leave a trail teammates can act on without a meeting. That is Phase 94.

---

> **Phase 93 complete?** [Continue to Phase 94](#phase-94)

---

# PHASE 94 - Engineering Communication

**Track:** Maintaining Real Software

**WHAT YOU WILL BE ABLE TO DO:** Write a short Architecture Decision Record (ADR) or design note for a real maintenance decision — context, options, choice, and consequences — that a teammate can act on without a meeting.

**WHAT YOU SHOULD KNOW FIRST:** Phase 73 — requirements clarify *what* to build. Phases 75–76 — architecture and process clarify *how we work*. Phases 92–93 — you now change systems others built; leave a trail.

**LEARNING RESOURCES:**

- [Documenting Architecture Decisions (Michael Nygard)](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
- [adr.github.io](https://adr.github.io/)
- [Architecture Decision Records (CodeOpinion)](https://www.youtube.com/watch?v=6H6zfCNeqek)
- [adr/madr](https://github.com/adr/madr) — a practical template family
- [joelparkerhenderson/architecture-decision-record](https://github.com/joelparkerhenderson/architecture-decision-record)

## 94.1 Explain Decisions, Not Just Code

Phases 92–93 made you able to onboard into Quarry Bookstore checkout and change legacy pricing behind characterization tests. The next pressure is organizational, not mechanical: the team wants to **extract a pricing port** so web checkout and a new mobile BFF stop duplicating discount rules. The code change is doable. What usually dies is the *why* — which option lost, what staleness or coupling you accepted, what you will not do yet. Code shows what shipped. It rarely shows why alternatives lost. ADRs and short design docs are how teams stay fast without re-deriving every crossroads from chat history.

This is not Phase 73’s requirements rewrite (you are not restating the whole product) and not Phase 81’s system-design interview walkthrough (you are not estimating RPS for a URL shortener). It is **engineering communication for maintenance**: durable, dated, honest about trade-offs, short enough that people read it.

**NYGARD-STYLE ADR (MINIMUM VIABLE):**

1. **Title** — short name of the decision  
2. **Status** — proposed / accepted / deprecated / superseded  
3. **Context** — forces that make a decision necessary *now*  
4. **Decision** — what we will do  
5. **Consequences** — good, bad, and neutral follow-ons  

A longer **design doc** adds goals/non-goals, detailed design, rollout, risks, and alternatives — use it for larger bets. Use ADRs for durable crossroads (“we will extract a pricing port”; “we will not rewrite checkout this quarter”). Good ones fit on one page. Bad ones are novels nobody updates, or slogans with no rejected options.

```text
Context:   web checkout and mobile BFF duplicate discount rules;
           Phase 93 characterization shows drift on multi-item carts
Options:   (A) keep duplicating + sync by hand
           (B) extract PricingPort; both callers use one module
           (C) full rewrite of checkout + pricing as a new service
Decision:  B — extract in-process port first; no new network hop yet
Consequences: + one rule source; - migration of two call sites;
              - must deprecate old helpers; NOT solving multi-region yet
```

**WORKED SCAFFOLD — PRICING PORT ADR:**

```python playground=cs-phase-94-adr-scaffold
# Fill this scaffold; the point is the structure, not fancy formatting.

adr = {
    "title": "ADR-014: Extract in-process PricingPort for checkout",
    "status": "accepted",
    "context": (
        "Web checkout and mobile BFF diverge on multi-item discounts; "
        "legacy_pricing characterized in Phase 93; duplicate fixes shipping twice"
    ),
    "options": [
        "A: keep two copies; document the formula in the wiki",
        "B: extract PricingPort module; both callers depend on it",
        "C: rewrite pricing as a standalone microservice now",
    ],
    "decision": "B",
    "consequences": [
        "+ single source of discount truth for current clients",
        "- migrate two call sites; deprecate legacy helpers for one release",
        "- new module ownership in CODEOWNERS",
        "neutral: microservice split deferred until a second bounded context appears",
    ],
}

print(adr["title"], f"[{adr['status']}]")
print("Context:", adr["context"])
print("Decision:", adr["decision"])
for c in adr["consequences"]:
    print(" ", c)
```

**STATUS OVER TIME:**

ADRs are living records. When a later choice replaces this one, mark the old ADR **superseded**, link the new ID, and say what changed — e.g. “PricingPort moves to its own service after mobile traffic forces an independent deploy.” Deprecation without a link is how archaeology starts again.

**DESIGN DOC VS ADR (PICK THE LIGHTWEIGHT TOOL):**

| Artifact | Best for | Smell of misuse |
| -------- | -------- | --------------- |
| **ADR** | One crossroads; options + consequences | Writing an ADR for every rename |
| **Design doc** | Multi-week bet; rollout and risks | Using a design doc to avoid a decision |
| **PR description** | What *this* diff does | Hiding architecture choice only in a PR |

Phase 92’s ownership signals should point at these files. Future onboarders (including you) will thank the trail.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List the five Nygard ADR fields from memory |
| Medium | Write an ADR for extracting PricingPort (or a real choice in one of your projects) — include one rejected option with why |
| Hard | Supersede an old ADR: mark status, link the new one, explain what force changed |

**WHAT THIS UNLOCKS NEXT:**

Story XIII made you able to **maintain real software**: onboard with a map and a tiny fix (92), change legacy behavior behind characterization and seams (93), and leave a durable decision record (94). You can join a production team without rewriting the world — and without losing the *why*. That maintenance fluency is exactly what you need before you **own an end-to-end build** of your own. Story XIV’s Grand Capstone starts at Phase 95 with an honestly scoped MVP: musts, non-goals, architecture sketch, and a trade-off log *before* you implement production features. Building, hardening, and portfolio packaging are 96–98 — do not start coding the dream yet; start by scoping what you can finish.

---

> **Phase 94 complete?** [Continue to Phase 95](#phase-95)

---
