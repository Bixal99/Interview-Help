# Learning Content Standard

**Status: FROZEN for CS Stories VIII–XV and for later Odoo construction** (amended: invisible-template / journey continuity).

*Platform-wide rules for tutorial Markdown on Quarry. Course-specific teaching choices live in [Course Profiles](./course-profiles/), not in this file.*

This contract exists so we do **not** redesign lesson presentation mid-curriculum. It preserves Phase 1’s **reading rhythm** (clear teaching moves + prose) without requiring every lesson to show the same visible heading skeleton.

---

## 1. Goals

1. First-time learners get a **lesson**, not compressed notes — and not a form.
2. The learner feels **one teacher, one continuous journey**: each page continues the previous page and creates the need for the next.
3. The **authoring checklist is invisible** to the student. Canonical slots constrain authors (and Cursor); they must not become repetitive UI chrome.
4. Content stays **lean**: no link farms, no repeated chrome — but **lean ≠ hollow**. Mechanism, examples, and practice stay.
5. Courses share a **platform system**; each course owns how it teaches via a Course Profile.
6. The Markdown parser’s phase/lesson model stays stable (`# PHASE N`, `## N.M`).

### Invisible-template test

Could a careful student forget that a “template” exists? If every page clearly shows `WHY THIS MATTERS → THE PROBLEM → HOW IT WORKS → …`, the system failed — even if the prose underneath is good.

### Continuity test

Can a student read `1.1 → 1.2 → 2.1 → 2.2` (or `54 → … → 60`) and feel one accumulating mental model, not isolated topic cards?

---

## 2. Exact Markdown hierarchy (safe with the parser)

| Level | Form | Role | Notes |
| ----- | ---- | ---- | ----- |
| Phase | `# PHASE N - Title` | Phase boundary | Parsed by `lib/parse-course.ts`. |
| Lesson | `## N.M Title` | Lesson / sub-phase boundary | One lesson page per `## N.M`. |
| Nested topic (rare) | `### N.M.K Title` | Optional child topic | Only when a lesson truly nests numbered topics. |
| Semantic move | `**LABEL:**` | Teaching move inside a lesson | **Not** a `#` / `##` / `###` heading. Renderer decides visibility (see §4). |

### Why semantic moves are bold labels, not `###`

- `## N.M` already means “lesson.” Semantic `###` headings would pollute TOC, anchors, and progress.
- Bold labels are the platform convention; `lib/lesson-kickers.ts` classifies them.

### Permanent presentation rule

Major teaching moves are **visually separated when a heading helps**, then explained in prose. Title Case inline notes (`**Why This Matters:** one sentence…`) remain the anti-pattern.

**New content must not ship an identical canonical heading skeleton on every page.** Prefer continuous prose and **contextual** headings that name *this* idea in the journey.

---

## 3. Universal teaching philosophy (authoring checklist)

Authors (and Cursor) still answer these questions **as far as the topic needs** — this is the **checklist**, not the UI:

1. Why this matters now (previous limitation) — often as a **backward bridge** in opening prose.
2. What broke / what you cannot yet do — fold into prose unless a distinct beat helps.
3. How the idea works (precise mechanism — depth lives here).
4. A visual or analogy only when it teaches mechanism.
5. A worked example appropriate to the medium.
6. Trade-offs / complexity / failure modes when they exist.
7. Practice that matches the skill.
8. What this unlocks next — **forward bridge** (often at phase end).

**First-time test:** Would this teach someone who has never seen the topic, or only remind someone who already knows it?

**Lean test:** Did we remove repetition and chrome, or remove the mechanism?

**Thinness test:** A short problem beat is fine if the mechanism actually teaches. One-sentence motivation *and* one-sentence mechanism means the lean pass went too far — expand mechanism/example, not the link list.

**Bridge test:** Opening prose should remember the previous lesson; closing prose should create the need for the next — without stuffing essays into the prerequisite box.

### Narrative closer (permanent — all courses)

Every meaningful lesson that has a **next concept** must end with a **visible forward handoff** after Practice and before navigation.

**Page order (required):** teaching content → Practice → **What Comes Next** (handoff) → Previous/Next (and project CTA when present).

**Authoring labels** (extracted by `lib/lesson-sections.ts`, rendered by `WhatComesNextSection`):

- Prefer: `**WHAT THIS UNLOCKS NEXT:**` or `**WHAT COMES NEXT:**`
- Legacy still accepted: `**WHY THE NEXT TOPIC IS NEEDED:**`

**Body rules:**

- Contextual wording that names the **new limit** this lesson cannot solve — not identical boilerplate every page.
- Navigation follows the handoff; the handoff creates the need for the next lesson/phase/story.
- Mid-phase lessons (e.g. 61.1 → 61.2) need handoffs too when the next subsection is a new teaching beat.
- **Story-ending** handoffs (end of a Story) should be stronger than ordinary lesson transitions: summarize what the story made possible, then open the next story’s problem.
- Capstone / final-course endings may use **closure** instead of setting up another topic.
- Do not duplicate the same handoff text on both a lesson page and its project page.

This rule is **course-agnostic** (CS, Odoo, Git, Networking, Cybersecurity, AI/Data, IT, and future courses). Example shape for Odoo later (do not edit Odoo now): “We can define a model and persist records — but users still have no screen — that creates the need for Views.”

---

## 4. Semantic section system (dynamic visibility)

### 4.1 Checklist slots (for authors — not a mandatory UI form)

| Canonical slot | Purpose | Default learner visibility |
| -------------- | ------- | -------------------------- |
| Why / motivation | Previous limit; backward bridge | **Flow** (no generic heading) unless replaced by a contextual title |
| Problem | Concrete failure | **Flow** (prefer merge into opening/mechanism) |
| How it works | Mechanism (protected depth) | **Flow** under a contextual title *or* continuous prose |
| Visual model | Diagram / trace | **Flow**, or contextual title when the diagram needs a name |
| Worked example | Runnable or worked instance | **Flow**, or contextual title when helpful |
| Trade-offs | Costs, complexity, limits | **Flow** |
| Interview note | Optional, short | **Flow** |
| Learning resources | Short curated set | **Heading** (utility chrome) |
| Practice | Exercises matching the skill | **Heading** (utility chrome) |
| What this unlocks next | Forward narrative handoff | **Utility section after Practice** (see Narrative closer rule) |

Phase utility chrome (also **Heading**): `WHAT YOU WILL BE ABLE TO DO`, `WHAT YOU SHOULD KNOW FIRST`.

Legacy labels (`WHY YOU ARE LEARNING THIS`, `SEE IT BEFORE YOU MEMORIZE IT`, …) remain parseable until older lessons are modernized. Generic teaching labels render as **flow** so Stories IV–VII do not look like a repeated form; utility chrome stays visible.

### 4.2 Contextual headings (preferred when a teaching heading is needed)

Write a journey-specific label the student can only see *here*:

```markdown
**FROM THE SOCKET TO THE NETWORK:**

Phase 54 gave you a socket — an OS handle. That handle does not explain how bytes leave your machine...

**ONE PACKET, FOUR ENVELOPES:**

```text
...
```
```

Rules:

- Contextual titles must be specific to this lesson’s idea (not synonyms of the whole checklist).
- Skip a heading when the next paragraph already continues the conversation.
- Do **not** invent a contextual title for every checklist slot — that recreates the form with different words.

### 4.3 Prerequisite box rule (orientation, not teaching)

Keep **Before you start** / `WHAT YOU SHOULD KNOW FIRST` **lightweight**.

- Prefer: `Phase 54 — sockets as OS handles.`
- Avoid stuffing long explanations for Phases X, Y, and Z into the box.
- List only knowledge **genuinely required** to understand this lesson.
- Useful callbacks belong in opening prose (backward bridge), not in the box.

Do not mass-edit older stories just to shorten prereq boxes; fix only when clearly excessive and directly encountered.

### 4.4 Different courses / topics use different subsets

Factory may need problem + how + example + trade-offs in the *authoring* sense. An ethics scenario may skip visuals. A DSA lesson must keep traces and complexity. That is intentional — not a defect. Visibility still follows §4.1–4.2.

---

## 5. Practice types (choose what fits)

Practice is **not** “always LeetCode” and **not** “always a mini-project.” Pick from:

| Type | When it fits |
| ---- | ------------ |
| Predict output | Mental model of code/query/config |
| Debugging | Broken artifact; find/fix the fault |
| Configuration | Settings, env, flags, manifests |
| Written explanation | Definitions, trade-offs, proofs light |
| Comparison | A vs B with criteria |
| Architecture / design | Diagrams, CRC, API shapes, boundaries |
| Packet inspection | Networks / protocols (capture, label) |
| Database query | SQL / modeling exercises |
| UI exercise | HCI / forms / usability critique |
| Business scenario | Stakeholders, constraints, ethics |
| Mini-project | Only when *building* improves understanding |

**Project rule:** Add a `Projects.md` card only when constructing something genuinely teaches. Interview phases should not invent portfolio work that steals later stories.

Playgrounds: only when execution teaches; keep `playground=` IDs unique.

---

## 6. Resources

One short list per phase (or per lesson for surveys). Prefer verified primary sources. Not a link farm.

---

## 7. Course Profile system (course-agnostic platform)

Each course may ship `content/standards/course-profiles/<slug>.md` with audience, storytelling shape, dominant sections, protected content, practice policy, resources, non-goals.

- **CS** specializes DSA/systems/interview needs — see `course-profiles/cs.md`.
- **Odoo** specializes modules/ORM/security/upgrades — see `course-profiles/odoo.md`.

Odoo must use **this same standard** (hierarchy + dynamic semantic moves + practice catalog + invisible-template rule). It must **not** copy CS’s 15 stories, 105 phases, or DSA lesson shapes.

---

## 8. Renderer / parser contract

- Kickers: `lib/lesson-kickers.ts` → `components/markdown-document.tsx`
  - **Utility** labels → visible `h2.ih-lesson-kicker`
  - **Checklist / generic teaching** labels → **flow** (no repeated heading chrome; prose continues)
  - **Contextual** ALL-CAPS (or recognized) labels → visible journey-specific headings
- Forward handoff: `lib/lesson-sections.ts` (`extractWhatComesNext`) + `lib/practice.ts` (Practice must end *before* the handoff label) → `WhatComesNextSection` after Practice on the lesson page
- Phase/lesson parse: `lib/parse-course.ts`
- Do not add semantic sections as `##` headings inside a lesson.

---

## 9. Freeze / migration

| Scope | Rule |
| ----- | ---- |
| CS Stories IV–VII | No mass rewrite for heading cosmetics; renderer flow hides generic skeleton; fix bridges when a continuity defect is approved |
| CS Stories VIII–XV | **Author against this amended standard from the start** (contextual headings + bridges; no identical skeleton) |
| Other CS stories (I–III, legacy labels) | Valid; modernize only when that story is scheduled |
| ODOO.md | Same standard later; own Course Profile; no CS skeleton copy |
| Other roadmaps | Inherit when next edited; no mass rewrite required by this freeze |

Changing presentation rules again requires an explicit product decision — not a drive-by template tweak mid-story.
