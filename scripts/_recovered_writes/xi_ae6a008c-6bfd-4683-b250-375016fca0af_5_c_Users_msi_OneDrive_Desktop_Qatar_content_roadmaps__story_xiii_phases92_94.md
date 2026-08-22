# PHASE 92 - Working in Existing Codebases

**Track:** Maintaining Real Software

**WHAT YOU WILL BE ABLE TO DO:** Onboard into an unfamiliar codebase deliberately - run it, map entry points, follow one real request path - and ship a small, reviewable fix without rewriting the world.

**WHAT YOU SHOULD KNOW FIRST:** Phase 72 (PRs and reviewable diffs), Phase 74-75 (tests and boundaries help you find safe places to change), Phase 91 (you are changing something that already affects real users).

## 92.1 Read Before You Write

**WHY YOU ARE LEARNING THIS:** Most professional work is not greenfield. The expensive mistake is opening files at random and "cleaning up" until you break production behavior you never understood. Onboarding is a skill: build a **mental map**, then make the **smallest change** that proves you can navigate the system.

**SEE IT BEFORE YOU MEMORIZE IT**

- Onboarding habits: [How to approach large/unfamiliar codebases (ForrestKnight)](https://www.youtube.com/watch?v=jqHXJ3O7WGw) *(Composio YouTube)*
- Written: get it running first, then follow one request path *(Composio web)*
- Practice: clone any mid-size open-source repo, run it, and write a one-page map before changing a line

**STEP-BY-STEP EXPLANATION**

A reliable first-week loop:

1. **Run it** - install, seed data, hit a happy path; record exact commands that worked.
2. **Find the front door** - HTTP routes, CLI `main`, job scheduler, message consumer.
3. **Trace one vertical slice** - request → handlers → domain → DB/outbound call → response.
4. **Locate ownership signals** - README, CONTRIBUTING, CODEOWNERS, ADRs (Phase 94), recent PRs on the area.
5. **Ship a tiny fix** - typo, test, logging, docs, or a narrowly scoped bug - to learn the review culture.

```text
Bad onboarding:  "I'll refactor the folder structure first."
Good onboarding: "I can run it, draw the request path, and merged a 20-line fix."
```

**SMALL WORKING EXAMPLE**

```python playground=cs-phase-92-onboard-map
# Toy "codebase map" you fill while reading a real repo.

map_ = {
    "how_to_run": ["docker compose up", "npm test"],
    "entry_points": ["POST /checkout", "worker: emails"],
    "slice": [
        "route → CheckoutController",
        "→ PricingService",
        "→ OrdersRepo.insert",
        "→ enqueue EmailJob",
    ],
    "first_safe_change": "add structured log on checkout failure",
}

for k, v in map_.items():
    print(k.upper())
    if isinstance(v, list):
        for item in v:
            print(" -", item)
    else:
        print(" ", v)
```

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List the five onboarding steps from memory |
| Medium | Map one open-source web app from route to database write |
| Hard | Submit a real small PR to an unfamiliar repo and write what surprised you |

**WHY THE NEXT TOPIC IS NEEDED - Legacy Code:** Sometimes the codebase has almost no tests and every change feels dangerous. You need techniques to **characterize** behavior and introduce **seams** before you change logic. That is Phase 93.

---

> **Phase 92 complete?** [Continue to Phase 93](#phase-93)

---



# PHASE 93 - Legacy Code & Maintenance

**Track:** Maintaining Real Software

**WHAT YOU WILL BE ABLE TO DO:** Add a test seam and characterization tests around legacy behavior so you can change code safely when the original authors and tests are gone.

**WHAT YOU SHOULD KNOW FIRST:** Phase 92 (you can navigate the system), Phase 74 (you already know a test pyramid - here the first tests often pin *current* behavior, not ideal behavior), Phase 75 (seams are often dependency boundaries).

## 93.1 Change Safely When Tests Are Missing

**WHY YOU ARE LEARNING THIS:** Michael Feathers' practical definition: **legacy code is code without tests**. Without a safety net, "quick fixes" accumulate fear and accidental breakage. Characterization tests document what the system *does today* so refactoring has a tripwire. Seams are places you can alter behavior without editing every call site - for injection, fakes, or temporary test hooks.

**SEE IT BEFORE YOU MEMORIZE IT**

- Feathers lens: [Working Effectively with Legacy Code themes (Tech Lead Journal)](https://www.youtube.com/watch?v=mwVRHDD0tEk) *(Composio YouTube)*
- Characterization tests: [Characterization testing walkthrough (Andrew Burgess)](https://www.youtube.com/watch?v=2q5PdGdlL8Y) *(Composio YouTube)*; [Characterization Test (Martin Fowler bliki)](https://martinfowler.com/bliki/CharacterizationTest.html) *(Composio fetch)*
- Kata: [emilybache/GildedRose-Refactoring-Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata) *(Composio GitHub + DeepWiki)* - pin behavior, then refactor
- Scholar / practice literature on maintaining legacy systems *(Composio Scholar)*

**STEP-BY-STEP EXPLANATION**

| Move | Purpose |
| ---- | ------- |
| **Characterization test** | Lock current outputs for known inputs (including weird edge cases) |
| **Seam** | Boundary where you can substitute a collaborator (interface, function param, subclass, link seam) |
| **Sprout / wrap** | Add new code beside old (sprout method/class) or wrap old calls instead of editing the ball of mud first |
| **Only then refactor** | Rename, extract, simplify behind the green tests |

```text
1) Capture:  assert legacy_fn(input) == <whatever it returns today>
2) Seam:     pass db/clock/http as parameters (or wrap static calls)
3) Change:   implement the fix / feature
4) Tighten:  replace pure characterization with intentional behavior tests when you understand intent
```

**SMALL WORKING EXAMPLE**

```python playground=cs-phase-93-characterization
# Legacy function with hidden global dependency — add a seam, then characterize.

CLOCK = ["2020-01-01"]  # pretend global

def legacy_greeting(name):
    # "legacy": hard to test because of global clock
    return f"{name} @ {CLOCK[0]}"

def greeting(name, today):
    # sprouted seam: clock injected
    return f"{name} @ {today}"

# Characterization of current behavior
assert legacy_greeting("Ada") == "Ada @ 2020-01-01"

# Same behavior via seam (now testable without globals)
assert greeting("Ada", today="2020-01-01") == "Ada @ 2020-01-01"
print("characterization OK; seam ready for safer changes")
```

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define legacy code (Feathers) and characterization test in one line each |
| Medium | Add characterization tests for one Gilded Rose rule before refactoring |
| Hard | Introduce a seam in a static-heavy module and cover it with tests |

**WHY THE NEXT TOPIC IS NEEDED - Engineering Communication:** Safe technical change still fails if the *decision* is invisible - future you will re-litigate the same debate. Design docs and ADRs record why a path was chosen. That is Phase 94.

---

> **Phase 93 complete?** [Continue to Phase 94](#phase-94)

---



# PHASE 94 - Engineering Communication

**Track:** Maintaining Real Software

**WHAT YOU WILL BE ABLE TO DO:** Write a design doc or Architecture Decision Record (ADR) for a real decision - context, options, choice, and consequences - that a teammate can act on without a meeting.

**WHAT YOU SHOULD KNOW FIRST:** Phase 73 (requirements force clarity of *what*), Phase 75-76 (architecture and process force clarity of *how we work*), Phase 92-93 (you now change systems others built - leave a trail).

## 94.1 Explain Decisions, Not Just Code

**WHY YOU ARE LEARNING THIS:** Code shows *what* shipped. It rarely shows *why alternatives lost*. ADRs and design docs are how teams stay fast without re-deriving every choice from Slack archaeology. Good ones are short, dated, and honest about trade-offs.

**SEE IT BEFORE YOU MEMORIZE IT**

- ADR idea: [Architecture Decision Records (CodeOpinion)](https://www.youtube.com/watch?v=6H6zfCNeqek) *(Composio YouTube)*; design docs: [What is a design doc? (Clément Mihailescu)](https://www.youtube.com/watch?v=bgHL41e7vgI) *(Composio YouTube)*
- Canonical: [Documenting Architecture Decisions (Michael Nygard)](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) *(Composio fetch)*; [adr.github.io](https://adr.github.io/) *(Composio fetch)*
- Templates: [adr/madr](https://github.com/adr/madr) *(Composio DeepWiki)*; [joelparkerhenderson/architecture-decision-record](https://github.com/joelparkerhenderson/architecture-decision-record) *(Composio GitHub)*
- Research: ADRs as living documentation *(Composio Scholar)*

**STEP-BY-STEP EXPLANATION**

**Nygard-style ADR (minimum viable):**

1. **Title** - short name of the decision  
2. **Status** - proposed / accepted / deprecated / superseded  
3. **Context** - forces that make a decision necessary  
4. **Decision** - what we will do  
5. **Consequences** - good, bad, neutral follow-ons  

A longer **design doc** adds goals/non-goals, detailed design, rollout, risks, and alternatives considered - use it for larger bets; use ADRs for durable crossroads.

```text
Context:   checkout p95 too high; DB CPU saturated
Options:   (A) more read replicas  (B) cache prices  (C) rewrite service
Decision:  B — cache-aside for price catalog, TTL 60s
Consequences: faster reads; risk of stale prices → invalidate on admin write
```

**SMALL WORKING EXAMPLE**

```python playground=cs-phase-94-adr-scaffold
# Fill this scaffold; the point is the structure, not fancy formatting.

adr = {
    "title": "ADR-001: Cache product prices in Redis",
    "status": "accepted",
    "context": "Checkout p95 > 800ms; price reads dominate DB CPU",
    "options": [
        "A: vertical scale DB",
        "B: cache-aside Redis TTL 60s + invalidate on admin write",
        "C: rewrite pricing service",
    ],
    "decision": "B",
    "consequences": [
        "+ lower DB load",
        "- possible 60s staleness",
        "- new dependency/ops surface",
    ],
}

print(adr["title"], f"[{adr['status']}]")
print("Context:", adr["context"])
print("Decision:", adr["decision"])
for c in adr["consequences"]:
    print(" ", c)
```

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List the five Nygard ADR fields from memory |
| Medium | Write an ADR for a real choice in one of your projects (even a student project) |
| Hard | Supersede an old ADR: mark status, link the new one, explain what changed |

**WHY THE NEXT TOPIC IS NEEDED - Grand Capstone:** Reading, sealing, and documenting existing systems prepares you to *own* an end-to-end build. Story XIV starts with scoping a honestly buildable capstone at Phase 95.

---

> **Phase 94 complete?** [Continue to Phase 95](#phase-95)

---


