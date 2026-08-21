# Learning Content Standard

**Status: FROZEN for CS Stories VI–XV and for later Odoo construction.**

*Platform-wide rules for tutorial Markdown on Quarry. Course-specific teaching choices live in [Course Profiles](./course-profiles/), not in this file.*

This is the permanent contract so we do **not** redesign lesson presentation again when starting Story VI or Odoo. It preserves Phase 1’s **reading rhythm** (standalone section headings + prose underneath) without requiring every lesson to copy Phase 1’s exact labels, length, or CS-specific topics.

---

## 1. Goals

1. First-time learners get a **lesson**, not compressed notes.
2. Presentation is **visually separated**: major teaching moves are section headings, then explanation.
3. Content stays **lean**: no link farms, no repeated chrome — but **lean ≠ hollow**. Mechanism, examples, and practice stay.
4. Courses share a **platform system**; each course owns how it teaches via a Course Profile.
5. The Markdown parser’s phase/lesson model stays stable (`# PHASE N`, `## N.M`).

---

## 2. Exact Markdown hierarchy (safe with the parser)

| Level | Form | Role | Notes |
| ----- | ---- | ---- | ----- |
| Phase | `# PHASE N - Title` | Phase boundary | Parsed by `lib/parse-course.ts`. |
| Lesson | `## N.M Title` | Lesson / sub-phase boundary | One lesson page per `## N.M`. |
| Nested topic (rare) | `### N.M.K Title` | Optional child topic | Only when a lesson truly nests numbered topics. |
| Semantic section | `**SECTION NAME:**` | Teaching move inside a lesson | **Not** a `#` / `##` / `###` heading. Renderer → `h2.ih-lesson-kicker`. |

### Why semantic sections are bold labels, not `###`

- `## N.M` already means “lesson.” Semantic `###` headings would pollute TOC, anchors, and progress.
- Bold labels are the platform convention; `lib/lesson-kickers.ts` promotes them to standalone uppercase section headings (Phase 1 rhythm).

### Permanent presentation rule

Standalone headings + explanation underneath is **required**. Title Case inline notes (`**Why This Matters:** one sentence…`) are the anti-pattern.

```markdown
**WHY THIS MATTERS:**

Prose that teaches a first-time learner...

**THE PROBLEM:**

A concrete failure mode, not a slogan...
```

---

## 3. Universal teaching philosophy

Answer, in order, **as far as the topic needs**:

1. Why this matters now (previous limitation).
2. What broke / what you cannot yet do.
3. How the idea works (precise mechanism — depth lives here).
4. A visual or analogy only when it teaches mechanism.
5. A worked example appropriate to the medium.
6. Trade-offs / complexity / failure modes when they exist.
7. Practice that matches the skill.
8. What this unlocks next (often at phase end).

**First-time test:** Would this teach someone who has never seen the topic, or only remind someone who already knows it?

**Lean test:** Did we remove repetition and chrome, or remove the mechanism?

**Thinness test:** A short **THE PROBLEM** is fine if **HOW IT WORKS** actually teaches. A one-sentence Problem *and* a one-sentence How It Works means the lean pass went too far — expand mechanism/example, not the link list.

---

## 4. Semantic section system (dynamic, not mandatory)

Sections are **semantic slots**, not a checklist. Skip slots that do not apply.

| Canonical label (source) | Purpose |
| ------------------------ | ------- |
| `WHY THIS MATTERS` | Motivation / previous limit |
| `THE PROBLEM` | Concrete failure |
| `HOW IT WORKS` | Mechanism (protected depth) |
| `VISUAL MODEL` | Diagram / trace |
| `WORKED EXAMPLE` | Runnable or worked instance |
| `TRADE-OFFS` | Costs, complexity, limits |
| `LEARNING RESOURCES` | Short curated set (phase-level preferred) |
| `PRACTICE` | Exercises matching the skill |
| `INTERVIEW NOTE` | Optional, short |
| `WHAT THIS UNLOCKS NEXT` | Bridge forward |

Legacy labels (`WHY YOU ARE LEARNING THIS`, `SEE IT BEFORE YOU MEMORIZE IT`, …) remain supported until older lessons are modernized.

Phase chrome: `WHAT YOU WILL BE ABLE TO DO`, `WHAT YOU SHOULD KNOW FIRST`.

### Prerequisite box rule (orientation, not teaching)

Keep **Before you start** / `WHAT YOU SHOULD KNOW FIRST` **lightweight**.

- Prefer: `Phase 54 — sockets as OS handles.`
- Avoid stuffing long explanations for Phases X, Y, and Z into the box.
- List only knowledge **genuinely required** to understand this lesson.
- If an earlier phase is a useful callback, connect it inside **WHY THIS MATTERS** or **HOW IT WORKS** instead (story continuity).

Do not mass-edit older stories just to shorten prereq boxes; fix only when clearly excessive and directly encountered.

**Different courses / topics will use different subsets.** Factory may need Problem + How + Example + Trade-offs. An ethics scenario may skip Visual Model. A DSA lesson must keep traces and complexity tables. That is intentional — not a defect.

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

Odoo must use **this same standard** (hierarchy + kickers + dynamic slots + practice catalog). It must **not** copy CS’s 15 stories, 105 phases, or DSA lesson shapes.

---

## 8. Renderer / parser contract

- Kickers: `lib/lesson-kickers.ts` → `components/markdown-document.tsx`
- Phase/lesson parse: `lib/parse-course.ts`
- Do not add semantic sections as `##` headings inside a lesson.

---

## 9. Freeze / migration

| Scope | Rule |
| ----- | ---- |
| CS Stories IV–V | Presentation + targeted teaching-flow repairs done; **no further mass rewrite** unless a specific defect is approved |
| CS Stories VI–XV | **Author against this standard from the start** |
| Other CS stories (I–III, legacy labels) | Valid; modernize only when that story is scheduled |
| ODOO.md | Same standard later; own Course Profile; no CS skeleton copy |
| Other roadmaps | Inherit when next edited; no mass rewrite required by this freeze |

Changing this document’s presentation rules again requires an explicit product decision — not a drive-by template tweak mid-story.
