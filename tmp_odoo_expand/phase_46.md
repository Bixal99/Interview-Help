# PHASE 46 - External API Concepts

**Track:** APIs & Integrations

**WHAT YOU WILL BE ABLE TO DO:** Describe integration contracts (identity, auth, resources, errors, idempotency, versioning) before writing code, and choose RPC vs custom REST vs webhook shapes deliberately.

**WHAT YOU SHOULD KNOW FIRST:** Story XI — HTTP auth/CSRF/portal boundaries. Phase 28–30 — security context. Phase 38 — idempotent jobs.

**LEARNING RESOURCES:**

- [Web Services — Odoo 18](https://www.odoo.com/documentation/18.0/developer/howtos/web_services.html)
- [HTTP controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)
- [External API / developer hub](https://www.odoo.com/documentation/18.0/developer.html)

## 46.1 Integration Is a Product Surface

Story XI gave customers and public browsers a door into Odoo. Story XII asks a harder question: what happens when **another system** — a mobile app, a middleware bus, a warehouse WMS, a payment provider — needs to create leads, read stock, or confirm payments?

Calling Odoo from outside is not “just run SQL against PostgreSQL.” You are exposing **business operations**. For the official external API (XML-RPC / JSON-RPC), those operations still run through the ORM with the **same ACL and record rules** as the UI. For custom controllers, *you* must reinvent that honesty deliberately — or ship an IDOR.

Before you open an editor, write the contract. Integration without a contract becomes tribal knowledge and midnight pages.

**CONTRACT CHECKLIST:**

```text
1. Identity      who is calling? (integration user, API key, OAuth, HMAC)
2. Authority     what may they read/write? (groups, rules, scopes)
3. Resources     which models/fields are in the public surface?
4. Errors        4xx vs 5xx; stable machine-readable codes
5. Idempotency   retries must not duplicate orders / payments
6. Versioning    how you change the contract without breaking clients
7. Observability logs/metrics without leaking secrets or PAN data
```

**WHY THIS ORDER MATTERS:**

Teams often start with “POST /create_order JSON.” That skips identity and authority. Six months later every partner shares the admin password, fields leak into mobile clients, and a timeout retry creates three sales orders. The checklist is the antidote: name the failure modes while the design is still cheap to change.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write a one-page contract for “create lead from website form.” |
| Medium | Mark which fields on `res.partner` are public vs internal for a mobile CRM sync. |
| Hard | Specify idempotency for “create order” if the client retries after a timeout (key, natural unique, or both). |

**WHAT THIS UNLOCKS NEXT:**

A checklist is not a transport. You still must choose *how* bytes move — RPC, custom HTTP, or webhooks — and each shape owns different failure modes.

---

## 46.2 Choosing the Cable: RPC, Custom HTTP, Webhooks

Odoo does not force one integration style. Pick deliberately.

| Style | Fit | Typical risk |
| ----- | --- | ------------ |
| XML-RPC / JSON-RPC | Server-to-server CRUD using Odoo’s external API | Over-broad methods / admin user |
| Custom `@http.route` JSON | Tailored payloads, mobile DTOs, stricter shapes | Homemade auth, forgotten ACL |
| Incoming webhooks | Third parties push events to you | Forged POSTs, non-idempotent handlers |
| Outgoing events / polling | You notify others or pull on a schedule | Slow HTTP inside `create`/`write`, unbounded cron |

```text
                    +----------------------+
   Client systems -->|  Integration edge   |
                    +----------+-----------+
                               |
            +------------------+------------------+
            |                  |                  |
            v                  v                  v
     XML/JSON-RPC        Custom routes      Webhooks in/out
     (remote ORM)        (your DTOs)        (event push)
            |                  |                  |
            +--------+---------+---------+--------+
                     v
              ORM + ACL + rules
                     v
                PostgreSQL
```

**RPC** is the fastest honest path when the caller can speak Odoo models: `execute_kw` on `res.partner` with a least-privilege user. You inherit security for free — if you do not cheat with an admin account.

**Custom HTTP** wins when the caller must not see Odoo’s field names, when you need versioned `/api/v1/...` URLs, or when a mobile team wants a stable DTO. Security becomes your job: auth mode, allow-listed fields, AccessError → 403 mapping.

**Webhooks** win when the other system owns the event clock (“payment succeeded,” “parcel scanned”). Polling every minute is wasteful and late; push is timely — and adversarial unless you verify signatures.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | For each style, name one bookstore scenario that fits. |
| Medium | Argue why “mobile app uses admin XML-RPC” fails the authority row of the checklist. |
| Hard | Design a hybrid: RPC for back-office sync + webhook for carrier scan events. |

**WHAT THIS UNLOCKS NEXT:**

Shape choice still leaves hard questions: what happens on retry, how you version, and how you observe failures without logging secrets.

---

## 46.3 Failure Modes, Idempotency, and Versioning

Integrations fail in boring, expensive ways. Treat these as design requirements, not ops folklore.

**TIMEOUTS AND RETRIES:**

```text
Client POST create_order
        |
        +--> 201 + id          happy path
        |
        +--> timeout (maybe created, maybe not)
                |
                +--> naive retry --> duplicate order
                +--> idempotent retry --> same order
```

Idempotency strategies that work in Odoo practice:

1. **Client idempotency key** stored on your model (`client_ref` unique) — second create finds the existing row.
2. **Natural business key** (provider payment intent id, external PO number).
3. **Outbox / webhook event table** keyed by provider event id (Phase 49 deepens this).

**VERSIONING WITHOUT DRAMA:**

- Put versions in the path (`/api/v1/loans`) or accept an explicit `api_version` for RPC wrappers.
- Additive changes (new optional fields) are cheaper than renames.
- Never silently change the meaning of `state` values consumers already switch on.

**OBSERVABILITY WITHOUT LEAKS:**

Log correlation ids, HTTP status, model, and record id. Do **not** log passwords, API keys, card numbers, or full webhook bodies that contain PII unless your retention policy and access controls allow it — and prefer redaction.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List three fields you would never put in an integration log line. |
| Medium | Write the unique constraint + create path for `client_ref` on a demo order model. |
| Hard | Draft a deprecation plan: v1 keeps working 90 days while v2 ships a renamed field. |

**WHAT THIS UNLOCKS NEXT:**

Odoo already ships a remote ORM. Phase 47 teaches using XML-RPC / JSON-RPC safely with a least-privilege integration user — the first concrete cable.

---

> **Phase 46 complete?** You can draft an integration contract, pick RPC vs custom HTTP vs webhooks with reasons, and name retry/versioning failure modes before coding.

---
