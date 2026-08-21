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

## Dominant semantic sections

| Topic type | Emphasize |
| ---------- | --------- |
| Concepts (ORM, registry, ACL) | WHY / PROBLEM / HOW IT WORKS / WORKED EXAMPLE |
| XML views / inheritance | HOW IT WORKS + VISUAL MODEL (arch trees) + EXAMPLE |
| Security | PROBLEM (AccessError) + HOW IT WORKS + PRACTICE scenarios |
| Integrations / payments | TRADE-OFFS + idempotency / safety notes |
| Portfolio / hire | PRACTICE as module deliverables, not LeetCode |

## Protected content

- Access rights / record rules correctness
- Upgrade and migration safety (`-u`, migrations/)
- Transaction / cursor / Environment mental model
- Manifest `depends` / version discipline

## Practice / playground policy

Use the platform practice catalog in the Learning Content Standard. Odoo-typical choices: configuration, debugging, written explanation, comparison, business scenario, architecture/design for module boundaries, and mini-projects when building a module teaches. Prefer TransactionCase-style tests over generic coding playgrounds.

## Resource policy

Official Odoo docs, OCA examples, version-pinned tutorials. Avoid version-agnostic blog spam.

## Non-goals

- Not a second CS DSA course
- Not a full frontend OWL deep-dive unless a dedicated story exists
- Not copying CS phase numbers or Story IV/V structure

## Readiness confirmation

The **frozen** platform standard + kicker renderer are course-agnostic. Odoo uses the same presentation and practice rules; this profile supplies ERP-specific teaching choices only — not CS curriculum structure.
