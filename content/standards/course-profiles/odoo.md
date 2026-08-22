# Course Profile: Odoo (`ODOO.md`) — readiness

Extends [Learning Content Standard](../LEARNING_CONTENT_STANDARD.md).

This profile is the **teaching specialization** for Odoo. It does **not** copy the CS 15-story / 105-phase skeleton. When Odoo is next constructed or modernized, authors follow the platform standard’s Markdown hierarchy and semantic kickers, guided by this profile.

## Audience and outcome

Developers who need to build and extend Odoo modules safely: models, views, security, wizards, integrations, tests, upgrades — thinking in declarative modules and ORM transactions, not one-off scripts.

## Storytelling shape (Odoo-specific)

Journey questions differ from CS, for example:

- What is business software / ERP?
- How does Odoo’s stack fit together?
- How do I run and develop modules?
- How do models, fields, and security compose?
- How do views, actions, and menus ship UX?
- How do I automate, integrate, and upgrade without breaking production?

Exact phase count and titles belong in `ODOO.md`, not here.

## Dominant teaching emphasis (authoring — not a UI form)

Same invisible-template rule as the platform standard: checklist slots guide authors; learners see continuous Odoo teaching with selective contextual headings — not Why → Problem → How on every page.

| Topic type | Emphasize in the *writing* |
| ---------- | -------------------------- |
| Concepts (ORM, registry, ACL) | Motivation + mechanism + worked example |
| XML views / inheritance | Mechanism + arch-tree visuals + example |
| Security | AccessError failure modes + mechanism + scenario practice |
| Integrations / payments | Trade-offs + idempotency / safety notes |
| Portfolio / hire | Practice as module deliverables, not LeetCode |

## Protected content

- Access rights / record rules correctness
- Upgrade and migration safety (`-u`, migrations/)
- Transaction / cursor / Environment mental model
- Manifest `depends` / version discipline

## Practice / playground policy

Use the platform practice catalog in the Learning Content Standard. Odoo-typical choices: configuration, debugging, written explanation, comparison, business scenario, architecture/design for module boundaries, and mini-projects when building a module teaches. Prefer TransactionCase-style tests over generic coding playgrounds.

## Narrative closers

Inherit the platform **Narrative closer** rule (Practice → visible handoff → navigation). Example shape later: model persistence without Views creates the need for Views — do not construct Odoo content in CS batches.

## Resource policy

Official Odoo docs, OCA examples, version-pinned tutorials. Avoid version-agnostic blog spam.

## Non-goals

- Not a second CS DSA course
- Not a second full OWL framework course outside Story XIII (OWL is taught there for Odoo engineering, not as a generic JS curriculum)
- Not copying CS phase numbers or Story IV/V structure

## Readiness confirmation

The **frozen** platform standard + kicker renderer are course-agnostic. Odoo inherits:

- Markdown hierarchy (`#` / `##` / bold semantic moves)
- Invisible-template / flow vs contextual vs utility visibility
- Practice catalog and resource policy

This profile supplies ERP-specific teaching choices only — not CS curriculum structure.

**Construction status:** `content/roadmaps/ODOO.md` is authored against this profile and the platform standard as a **19-story / 95-phase** zero→Odoo Engineer curriculum (business-first, then platform, modules, ORM, UI, security, integrations, OWL, ops, upgrades, hire). Do **not** copy CS story/phase numbering.
