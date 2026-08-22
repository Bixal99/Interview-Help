# PHASE 52 - Odoo JavaScript Architecture

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Map how the Odoo web client loads — assets, registries, services, and OWL components — and decide when XML views are enough versus when you need JavaScript.

**WHAT YOU SHOULD KNOW FIRST:** Story XII — controllers, RPC, and integrations. Story VII — views, actions, and menus. You can ship business screens in XML; this story starts when the screen must *behave* in ways XML cannot express.

**LEARNING RESOURCES:**

- [OWL components (Odoo 18)](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [Discover the JS framework — OWL components tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [Services reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/services.html)
- [OWL introduction (YouTube)](https://www.youtube.com/watch?v=YJg7dvwXQF8)
- [Odoo architecture overview (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)
- [odoo/owl](https://github.com/odoo/owl) · [odoo/odoo web client](https://github.com/odoo/odoo)

## 52.1 From Server Screens to a Living Client

Story XII closed with Odoo talking to the outside world — RPC, webhooks, payments. Those integrations still land in **views** and **actions** you already know how to declare. For many products that is enough: a form, a list, a button that calls a Python method, a statusbar that moves draft → confirmed.

Then a real requirement shows up that XML alone cannot carry:

- a live KPI strip that refreshes without reloading the whole form
- a drag-and-drop planner that is not a kanban card rename
- a dashboard that composes charts, filters, and RPC calls into one full-screen experience
- a small UX hint that must react instantly to keystrokes before any server round-trip

You are no longer only describing *what fields appear*. You are programming the **browser half** of Odoo.

**THE WEB CLIENT IS AN APPLICATION, NOT A PAGE:**

```text
BROWSER                                              SERVER
+----------------------------------+                 +------------------+
| Web Client (Owl + services)      |   RPC / HTTP    | Odoo Python      |
|  registries | components | assets| <-------------> | ORM + controllers|
+----------------------------------+                 +--------+---------+
                                                               |
                                                               v
                                                         PostgreSQL
```

The client boots once, loads **asset bundles** (JS, CSS, XML templates), starts **services** (notification, rpc, orm, user, router…), and mounts a tree of **OWL components**. Clicking a menu does not download a brand-new website for every screen the way a 2005 ERP might. It asks the client to open an **action**, which mounts the right view or custom component.

That mental model matters because bugs feel different here. A missing CSS class is often “asset not in the right bundle.” A silent RPC failure is often “service used wrong” or “component destroyed mid-await.” An upgrade break is often “you patched a private method that moved.”

## 52.2 Boot Sequence: Assets → Services → Actions

When you open `/web`, roughly this happens (simplified, Odoo 18-shaped):

```text
1. Browser requests the web client shell
2. Asset bundles for backend load (JS modules + XML templates + CSS)
3. Owl environment is created
4. Services registry starts (notification, rpc, orm, user, action, ...)
5. WebClient component mounts (navbar, menus, content area)
6. User clicks a menu → action service loads an action descriptor
7. act_window → standard view controllers
   ir.actions.client → your registered Owl action component
```

**ES MODULES AND `@odoo-module`:**

Modern Odoo JS files are ES modules. The magic comment `/** @odoo-module **/` tells the asset pipeline to treat the file as a module with imports/exports. Imports like `@web/core/registry` or `@odoo/owl` resolve through Odoo’s alias map — you are not configuring Webpack by hand in an addon.

**LEGACY FOOTGUNS:**

| Old habit | Modern replacement |
| --------- | ------------------ |
| jQuery `$(...).on` in random JS | Owl event handlers / patch |
| `odoo.define(...)` AMD (very old) | ES modules + registries |
| Inline `<script>` in form views | Assets + components |
| Copying minified `web.assets` | Never |

If a tutorial still teaches `odoo.define` as the default for new Odoo 18 work, close the tab. Read Odoo 18 frontend docs and `ged-odoo/odoo-js-training-public` instead.

**WHEN XML IS ENOUGH — AND WHEN IT IS NOT:**

| Need | Prefer | Why |
| ---- | ------ | --- |
| Show/hide fields, buttons, domains | XML views + attrs / modifiers | Declarative, upgrade-friendly |
| Call server business logic | `type="object"` button → Python | Keeps rules on the server |
| Light polish (colors, icons) | SCSS in assets | Still declarative packaging |
| Interactive widget / dashboard / custom UX | OWL component + registry | Real client behavior |

The expensive mistake is forking the web client or pasting jQuery from Odoo 13 Stack Overflow into a modern database. Odoo 14+ rebuilt the client around **OWL**. Your job in Story XIII is to extend that architecture the way Odoo intends: modules declare assets, register pieces, patch narrowly, and keep business truth on the server.

**WHERE TO LOOK IN THE REPO (ORIENTATION, NOT MEMORIZATION):**

```text
addons/web/static/src/
  core/          # registries, services, utils, components
  views/         # form, list, kanban controllers & renderers
  webclient/     # shell: menus, action service, navbar
  search/        # search model / facets
```

You will not rewrite those folders. You will **depend on `web`**, ship files under your module’s `static/src/`, and hook into the same registries the core uses.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name three reasons a form might still stay pure XML instead of OWL. |
| Medium | Draw the browser → RPC → ORM path for “user clicks Confirm on a sales order.” Mark where OWL lives. |
| Hard | Open `addons/web/static/src` in a source checkout and list five registry category names you find (grep `registry.category`). |

**WHAT THIS UNLOCKS NEXT:**

You can picture the client as an app with registries and services. You still cannot build a piece of UI inside it. That starts with OWL itself — components, templates, props, state, and lifecycle.

---

> **Phase 52 complete?** [Continue to Phase 53](#phase-53---owl-fundamentals)

---

# PHASE 53 - OWL Fundamentals

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Build a small OWL component with an XML template, typed props, reactive state, and correct lifecycle hooks — following Odoo’s `setup()` convention.

**WHAT YOU SHOULD KNOW FIRST:** Phase 52 — the web client is an Owl application loaded through assets and registries. Basic JavaScript classes and `async`/`await`.

**LEARNING RESOURCES:**

- [OWL components reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [Discover JS framework — 01 Owl components](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [Frontend OWL components howto](https://www.odoo.com/documentation/18.0/developer/howtos/frontend_owl_components.html)
- [OWL introduction (YouTube)](https://www.youtube.com/watch?v=YJg7dvwXQF8)
- [odoo/owl](https://github.com/odoo/owl)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)

## 53.1 Components & Templates

**OWL** (Odoo Web Library) is Odoo’s component system — loosely inspired by ideas you may know from Vue or React, but with **QWeb-style templates** and Odoo-specific packaging. A component is a JavaScript class that owns a template, optional props, and optional local state. The framework mounts it into the DOM and re-renders when reactive state changes.

**THE SMALLEST HONEST COMPONENT:**

```javascript
/** @odoo-module **/
import { Component, useState } from "@odoo/owl";

export class LoanCounter extends Component {
    static template = "library_mgmt.LoanCounter";
    static props = {
        title: { type: String, optional: true },
    };

    setup() {
        this.state = useState({ count: 0 });
    }

    increment() {
        this.state.count++;
    }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<templates xml:space="preserve">
    <t t-name="library_mgmt.LoanCounter">
        <div class="o_loan_counter" t-on-click="increment">
            <t t-esc="props.title or 'Loans'"/>:
            <t t-esc="state.count"/>
        </div>
    </t>
</templates>
```

Three packaging rules from the official docs that save upgrade pain:

1. Prefer **XML template files** over inline `xml\`...\`` so strings can be translated and kept next to the component.
2. Name templates `addon_name.ComponentName` to avoid collisions across modules.
3. Initialize in **`setup()`**, never in `constructor`. Odoo’s patching and inheritance patterns assume `setup`.

**TEMPLATE DIRECTIVES YOU WILL USE CONSTANTLY:**

| Directive | Job |
| --------- | --- |
| `t-esc` | Escape and print a value |
| `t-out` | Output markup carefully (know the XSS risk) |
| `t-if` / `t-elif` / `t-else` | Conditional blocks |
| `t-foreach` / `t-as` | Loop |
| `t-on-click` | Event handler bound to a method |
| `t-att-class` / `t-attf-href` | Dynamic attributes |

Think of the template as the **view**, the class as the **controller**, and the server as the **source of business truth**. OWL is not where you hide access rules.

## 53.2 Templates in Depth

Templates are QWeb-for-Owl: XML with `t-` directives, compiled into render functions. Put them in `static/src/.../*.xml` wrapped in `<templates>`, not in `views/` (those are server view architectures).

**ESCAPING AND XSS:**

- `t-esc` escapes HTML — default for user-influenced strings.
- `t-out` can emit markup — only for trusted, sanitized content.
- Never `t-out` a partner name from the database without thinking about scripts.

**EVENTS:**

`t-on-click="increment"` calls the component method. Prefer small methods over huge inline expressions when loops and events combine.

**SUBCOMPONENTS:**

```xml
<t t-name="library_mgmt.LoanPanel">
  <div class="o_loan_panel">
    <LoanCounter title="'Open'" t-props="counterProps"/>
  </div>
</t>
```

Register child classes on the parent (`static components = { LoanCounter }`) so templates can instantiate them. Composition beats one 800-line dashboard template.

**CONDITIONAL UX:**

```xml
<t t-if="state.loading">Loading…</t>
<t t-elif="state.error"><t t-esc="state.error"/></t>
<t t-elif="!state.openLoans">No open loans.</t>
<t t-else="">Open loans: <t t-esc="state.openLoans"/></t>
```

Those four states (loading / error / empty / ready) are how ERP UIs earn trust.

## 53.3 Props, State & Lifecycle

**Props** are inputs from the parent (or from the registry/action that mounts you). Treat them as read-only for the child. **State** is local, mutable data owned by the component — created with `useState` so Owl can re-render when it changes.

**PROPS ARE THE CONTRACT; STATE IS THE SCRATCHPAD:**

```text
Parent / Action
   |  props: { partnerId, title }
   v
LoanCounter
   |  state: { count, loading, error }
   |  may call orm/rpc in setup / handlers
   v
DOM
```

Validate props with `static props = { ... }`. Optional props need `optional: true`. Missing required props fail loudly in debug — that is a gift.

**LIFECYCLE HOOKS (THE ONES YOU REACH FOR FIRST):**

| Hook | When it runs | Typical use |
| ---- | ------------ | ----------- |
| `setup()` | Component construction | Services, state, event buses |
| `onWillStart` | Before first render (async OK) | Initial RPC / orm read |
| `onMounted` | After first paint | Focus, measure DOM, start timers |
| `onWillUpdateProps` | Props about to change | Reset derived state |
| `onWillUnmount` | About to leave the DOM | Clear intervals, abort work |

```javascript
/** @odoo-module **/
import { Component, onWillStart, onWillUnmount, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class PartnerLoanBadge extends Component {
    static template = "library_mgmt.PartnerLoanBadge";
    static props = { partnerId: Number };

    setup() {
        this.orm = useService("orm");
        this.state = useState({ openLoans: 0, loading: true });
        onWillStart(async () => {
            this.state.openLoans = await this.orm.searchCount("library.loan", [
                ["partner_id", "=", this.props.partnerId],
                ["state", "=", "open"],
            ]);
            this.state.loading = false;
        });
        // If you start a setInterval, clear it in onWillUnmount.
        onWillUnmount(() => {});
    }
}
```

**ASYNC SAFETY:**

If the user navigates away while `await orm.searchCount(...)` is in flight, the component may already be destroyed. Prefer Odoo services marked async-aware, keep handlers idempotent, and do not write into `this.state` blindly after long waits without a mounted check pattern your version documents. Leaking intervals is the classic dashboard bug.

**BUSINESS RULE STILL LIVES ON THE SERVER:**

OWL can compute a pretty total for display. It must not be the only place that enforces “you may not confirm this loan.” A crafted RPC or another client could bypass the browser. Use OWL for interaction; use Python constraints, methods, and record rules for truth.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List three differences between props and `useState` values. |
| Medium | Write a component that shows loading → value → empty for a `searchCount` result (code on paper is fine). |
| Hard | Explain why translating strings belongs in XML templates and why `setup()` beats `constructor` in Odoo. |

**WHAT THIS UNLOCKS NEXT:**

A lone component still cannot talk to the rest of the client cleanly. Notifications, RPC, the current user, and action navigation live in **services**, discovered through **registries** and **hooks**.

---

> **Phase 53 complete?** [Continue to Phase 54](#phase-54---services-registries--hooks)

---

# PHASE 54 - Services, Registries & Hooks

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Register and consume web client services with `useService`, place components and actions in the correct registry categories, and use common Owl/Odoo hooks without inventing global singletons.

**WHAT YOU SHOULD KNOW FIRST:** Phase 53 — components, templates, props, state, lifecycle.

**LEARNING RESOURCES:**

- [Services reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/services.html)
- [OWL components](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [Discover JS framework tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)
- [odoo/odoo — web/core](https://github.com/odoo/odoo/tree/18.0/addons/web/static/src/core)

## 54.1 Services as Dependency Injection

A **service** is a long-lived feature of the web client: notifications, RPC, ORM helpers, router, user info, effects (the famous rainbow man), titles, cookies. Components should not invent `window.myGlobalRpc`. They should **declare a dependency** and receive the service through the environment.

At startup, Odoo walks the `services` registry, starts each service (honoring `dependencies`), and stores the result on `env.services`.

```javascript
/** @odoo-module **/
import { registry } from "@web/core/registry";

const tickService = {
    dependencies: ["notification"],
    start(env, { notification }) {
        // Side-effect-only services may return nothing (null).
        let n = 0;
        const id = setInterval(() => {
            n += 1;
            notification.add(`Library heartbeat ${n}`, { type: "info" });
        }, 60000);
        return {
            stop() {
                clearInterval(id);
            },
        };
    },
};

registry.category("services").add("library_tick", tickService);
```

**USING A SERVICE FROM A COMPONENT:**

```javascript
import { useService } from "@web/core/utils/hooks";

setup() {
    this.notification = useService("notification");
    this.orm = useService("orm");
    this.action = useService("action");
}
```

| Service (examples) | You reach for it when… |
| ------------------ | ---------------------- |
| `notification` | Toast a success / warning |
| `orm` | Call `searchRead` / `call` the way the client prefers |
| `rpc` | Lower-level `/web/dataset` style calls when needed |
| `action` | `doAction` to open another act_window / client action |
| `user` | Current user context bits |
| `router` | URL / hash coordination |
| `effect` | Celebratory UI feedback (use sparingly) |

Services are also a **testing seam**: JS tests can disable or replace services so side effects do not poison assertions. That is why “just attach to `window`” is not only ugly — it fights the framework.

## 54.2 Registries & Hooks

A **registry** is a named catalog. Categories you will meet early:

| Category | Typical content |
| -------- | --------------- |
| `services` | Long-lived services |
| `actions` | Client actions (full-screen custom UI) |
| `view_widgets` / field widgets | Field UI extensions |
| `main_components` | Shell-level mounts |
| `effects` | Effect implementations |

```javascript
/** @odoo-module **/
import { registry } from "@web/core/registry";
import { LibraryDashboard } from "./library_dashboard";

registry.category("actions").add("library_mgmt.dashboard", LibraryDashboard);
```

Registration is how your module **publishes** a capability without editing core files. The key string becomes part of your public contract — keep it namespaced (`module.thing`).

**HOOKS ARE HOW COMPONENTS SUBSCRIBE TO THE FRAMEWORK:**

- Owl hooks: `useState`, `onWillStart`, `onMounted`, `onWillUnmount`, …
- Odoo hooks: `useService`, plus view-specific hooks you will meet when extending form/list

Rule of thumb: if you need something global and stateful, it is probably a **service**. If you need UI composition, it is a **component** registered somewhere. If you need one-line access inside `setup`, it is a **hook**.

**ANTI-PATTERNS THIS PHASE KILLS:**

```text
Bad:  window.odooLibraryState = {}
Bad:  fetch('/web/dataset/call_kw/...') by hand in five widgets
Bad:  importing a service file and calling its internals as a singleton
Good: useService("orm") + registry.category("actions").add(...)
```

## 54.3 The `orm` Service vs Hand-Rolled RPC

Prefer `useService("orm")` for model operations from Owl:

```javascript
const rows = await this.orm.searchRead(
    "library.loan",
    [["state", "=", "open"]],
    ["id", "name", "partner_id", "due_date"],
    { limit: 80 },
);
await this.orm.call("library.loan", "action_confirm", [ids]);
```

Use lower-level `rpc` when you must hit a custom JSON route. Do not invent a third HTTP client. Consistency matters when debugging network panels and when services’ async flags protect destroyed components.

**ENV AS THE SHARED WORLD:**

Services receive `env`. Components reach services through hooks that read `env`. That shared environment is why replacing a service in tests works. Global singletons erase that boundary.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain services vs components in one paragraph. |
| Medium | Sketch a service that wraps `notification` to standardize library toast titles. |
| Hard | Find three `registry.category(...)` calls in `web` or an OCA module and write what each category is for. |

**WHAT THIS UNLOCKS NEXT:**

You know how to register and consume pieces. Those pieces still never load unless the **asset bundle** includes your JS/XML/SCSS. Manifest assets are the shipping department of the frontend.

---

> **Phase 54 complete?** [Continue to Phase 55](#phase-55---assets)

---

# PHASE 55 - Assets

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Declare backend (and related) asset bundles in `__manifest__.py`, place static files correctly, control load order with directives, and debug “my JS never runs” failures.

**WHAT YOU SHOULD KNOW FIRST:** Phases 52–54 — architecture, OWL components, registries/services. Phase 7 — module anatomy (`static/`).

**LEARNING RESOURCES:**

- [Assets reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/assets.html)
- [OWL components — file layout](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [Discover JS framework tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [Architecture overview (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)

## 55.1 Bundles, Paths & Load Order

Odoo does not magically import every file under `static/`. You **declare** which files belong to which **bundle**. Common backend work uses `web.assets_backend`. Website work uses frontend bundles. Putting backend OWL code in the website bundle is a classic “works on my machine / invisible in form view” bug.

**MANIFEST SHAPE:**

```python
# __manifest__.py (excerpt)
{
    "name": "Library Management",
    "depends": ["web", "base"],
    "assets": {
        "web.assets_backend": [
            "library_mgmt/static/src/**/*",
            # or explicit files:
            # "library_mgmt/static/src/components/loan_counter/loan_counter.js",
            # "library_mgmt/static/src/components/loan_counter/loan_counter.xml",
            # "library_mgmt/static/src/components/loan_counter/loan_counter.scss",
        ],
    },
}
```

**FILE LAYOUT THAT MATCHES ODOO’S HABIT:**

```text
library_mgmt/
  static/
    src/
      components/
        loan_counter/
          loan_counter.js
          loan_counter.xml
          loan_counter.scss
      services/
        library_tick_service.js
      actions/
        library_dashboard.js
        library_dashboard.xml
```

Keep component triplets together. Use `/** @odoo-module **/` at the top of JS files so the bundler treats them as ES modules.

**ORDER DIRECTIVES:**

Manifest list entries can include tuples like `'before'`, `'after'`, `'replace'` when you must inject relative to another file. Reach for them when a SCSS variable must exist before your rules, or when you intentionally replace a file — not as a first instinct.

**DEBUGGING “ASSET NEVER LOADS”:**

1. Confirm the file path matches the module directory name exactly.
2. Upgrade the module (`-u library_mgmt`) after manifest asset changes.
3. Use developer mode / `--dev=assets` during iteration so bundles rebuild more helpfully.
4. Hard-refresh the browser (asset hashes and caching lie to tired developers).
5. Check you targeted `web.assets_backend` for backend UI.

**QWEB REPORTS ≠ OWL TEMPLATES:**

Report QWeb (PDF/HTML print) and Owl XML templates both look like XML with `t-` directives, but they live in different pipelines. Do not drop a report template into `static/src` and expect a component to find it — or the reverse.

## 55.2 Glob Patterns & Rebuild Discipline

`module/static/src/**/*` is convenient and dangerous: it may include files you did not mean to ship, and order can surprise you. Prefer explicit lists for small modules; use globs when the tree is disciplined.

After changing assets:

```text
1. -u your_module
2. hard refresh / disable cache in devtools
3. confirm Network panel fetched your file (or the bundle containing it)
4. only then debug component logic
```

Half of “Owl is broken” tickets are asset pipeline tickets in disguise.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Name the bundle you usually want for a form-view widget. |
| Medium | Write a minimal `assets` dict for one JS + one XML + one SCSS file. |
| Hard | Reproduce (safely) a missing-asset failure on purpose, then fix it; write the three checks you used. |

**WHAT THIS UNLOCKS NEXT:**

Assets load your code. Most production frontend work is not a brand-new screen — it is a **narrow extension** of an existing controller or renderer. That is patching.

---

> **Phase 55 complete?** [Continue to Phase 56](#phase-56---extending--patching-web-client)

---

# PHASE 56 - Extending / Patching Web Client

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Patch existing Owl components and view controllers with `patch()`, choose patch over fork, and avoid upgrade-hostile overrides.

**WHAT YOU SHOULD KNOW FIRST:** Phases 53–55 — components, services/registries, assets. Story IX — server-side `_inherit` mindset (same discipline, different layer).

**LEARNING RESOURCES:**

- [Frontend OWL components howto](https://www.odoo.com/documentation/18.0/developer/howtos/frontend_owl_components.html)
- [OWL components reference](https://www.odoo.com/documentation/18.0/developer/reference/frontend/owl_components.html)
- [OWL intro (YouTube)](https://www.youtube.com/watch?v=YJg7dvwXQF8)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)
- [odoo/odoo web views](https://github.com/odoo/odoo/tree/18.0/addons/web/static/src/views)

## 56.1 Patch, Don’t Fork

On the server you learned `_inherit` instead of copying `sale_order.py`. On the client the cousin is **`patch`**: open a prototype (or object), add or wrap methods, call `super`.

```javascript
/** @odoo-module **/
import { patch } from "@web/core/utils/patch";
import { FormController } from "@web/views/form/form_controller";

patch(FormController.prototype, {
    setup() {
        super.setup(...arguments);
        if (this.props.resModel === "library.book") {
            // Safe, model-gated extension point.
            console.debug("Library book form ready");
        }
    },
});
```

**THE UPGRADE CONTRACT:**

| Approach | Upgrade risk | When it fits |
| -------- | ------------ | ------------ |
| XML view inherit | Lowest | Structure / fields / buttons |
| Narrow `patch` on public methods | Medium | Behavior tweaks |
| Copy entire core component into your module | Extreme | Almost never |
| Edit `addons/web` in place | Forbidden in real teams | Never |

Patch only what you must. Gate on `resModel`, action XML id, or a marker in context so you do not change every form in the database. Prefer extending via **official registries** (field widgets, client actions) when the framework already offers a slot — a registry add is usually clearer than a prototype patch.

**WRAPPING METHODS WITH SUPER:**

```javascript
patch(SomeController.prototype, {
    async saveButtonClicked() {
        // pre-hook
        const result = await super.saveButtonClicked(...arguments);
        // post-hook
        return result;
    },
});
```

If you forget `super`, you delete core behavior. If you patch a private method named like `_getSomethingInternal`, you are volunteering for breakage on the next minor release.

**TEMPLATE EXTENSION VS LOGIC PATCH:**

Sometimes you need a bit more DOM. Prefer view inheritance (XML) or a dedicated child component registered as a widget. Patching templates is possible in places but harder to reason about — treat it as advanced and document why.

## 56.2 Choosing Extension Mechanism

```text
Need                          Prefer
----------------------------  ----------------------------------
Extra field on form           XML inherit view
Extra button calling Python   XML button + Python method
Change list row formatting    field widget / formatter
KPI on existing form          OWL widget / small patch + component
Entire new workplace UI       Client action (Phase 57)
Change all forms globally     Almost never — gate tightly
```

Document patches in the module README: what you patch, why, and which upstream method names you depend on. Future you during an upgrade will thank present you.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Contrast `_inherit` (Python) with `patch` (JS) in three bullets. |
| Medium | Write a model-gated FormController patch that only runs for `library.loan`. |
| Hard | Review a messy “copy the whole list renderer” PR and rewrite the approach as patch + registry. |

**WHAT THIS UNLOCKS NEXT:**

Patches tweak existing screens. Some products need a **whole screen** that is not a form/list/kanban at all — a dashboard, planner, or console. That is a **client action**.

---

> **Phase 56 complete?** [Continue to Phase 57](#phase-57---custom-client-actions)

---

# PHASE 57 - Custom Client Actions

**Track:** OWL Frontend

**WHAT YOU WILL BE ABLE TO DO:** Register an Owl component as a client action, bind it with `ir.actions.client` and a menu, and load data through `orm`/`rpc` services with loading and error states.

**WHAT YOU SHOULD KNOW FIRST:** Phases 54–56 — registries, assets, patching. Phase 25 — actions & menus (server-side action records).

**LEARNING RESOURCES:**

- [Frontend OWL components howto](https://www.odoo.com/documentation/18.0/developer/howtos/frontend_owl_components.html)
- [Services — orm / notification](https://www.odoo.com/documentation/18.0/developer/reference/frontend/services.html)
- [Discover JS framework](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html)
- [OWL intro (YouTube)](https://www.youtube.com/watch?v=YJg7dvwXQF8)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)

## 57.1 Full-Screen Owl Actions

A **client action** tells the web client: “mount this JavaScript action implementation,” not “open this model’s views.” Dashboards, configuration studios, and custom workplaces live here.

**THREE MOVING PARTS:**

```text
1) Owl component  -> registry.category("actions").add("library_mgmt.dashboard", Comp)
2) ir.actions.client XML  -> tag = library_mgmt.dashboard
3) Menu  -> action = that client action
(+ assets so the JS/XML actually load)
```

```javascript
/** @odoo-module **/
import { Component, onWillStart, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class LibraryDashboard extends Component {
    static template = "library_mgmt.LibraryDashboard";
    static props = { "*": true }; // action props vary; tighten when you know the shape

    setup() {
        this.orm = useService("orm");
        this.action = useService("action");
        this.notification = useService("notification");
        this.state = useState({
            loading: true,
            openLoans: 0,
            overdue: 0,
            error: null,
        });
        onWillStart(async () => {
            try {
                this.state.openLoans = await this.orm.searchCount("library.loan", [
                    ["state", "=", "open"],
                ]);
                this.state.overdue = await this.orm.searchCount("library.loan", [
                    ["state", "=", "open"],
                    ["due_date", "<", new Date().toISOString().slice(0, 10)],
                ]);
            } catch (e) {
                this.state.error = e.message || String(e);
            } finally {
                this.state.loading = false;
            }
        });
    }

    openOverdue() {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Overdue loans",
            res_model: "library.loan",
            views: [[false, "list"], [false, "form"]],
            domain: [
                ["state", "=", "open"],
                ["due_date", "<", new Date().toISOString().slice(0, 10)],
            ],
        });
    }
}

registry.category("actions").add("library_mgmt.dashboard", LibraryDashboard);
```

```xml
<record id="action_library_dashboard" model="ir.actions.client">
    <field name="name">Library Dashboard</field>
    <field name="tag">library_mgmt.dashboard</field>
</record>

<menuitem id="menu_library_dashboard"
          name="Dashboard"
          parent="menu_library_root"
          action="action_library_dashboard"
          sequence="1"/>
```

**UX STATES THAT SEPARATE TOYS FROM PRODUCTS:**

| State | User sees |
| ----- | --------- |
| Loading | Skeleton / spinner |
| Empty | Honest empty copy + CTA |
| Error | Message + retry; no blank screen |
| Access denied | Friendly denial (server still enforces) |
| Ready | KPIs + buttons that `doAction` into real views |

## 57.2 Server Methods for Aggregates

If the dashboard needs five counts, prefer one Python method returning a dict over five `searchCount` round trips from Owl:

```python
# library.loan
def get_dashboard_kpis(self):
    self.check_access_rights("read")
    Loan = self.env["library.loan"]
    return {
        "open": Loan.search_count([("state", "=", "open")]),
        "overdue": Loan.search_count([
            ("state", "=", "open"),
            ("due_date", "<", fields.Date.context_today(self)),
        ]),
    }
```

Call it with `orm.call`. Still enforce ACL inside. The browser displays; the server decides.

Never trust the browser as ACL. If `searchCount` succeeds for a user who should see nothing, your **record rules** are wrong — fix security on the server (Story VIII), then keep the dashboard honest.

**STORY PROJECT — INTERACTIVE ODOO DASHBOARD:**

Build a small backend dashboard module that:

1. Registers a client action with Owl.
2. Declares assets correctly.
3. Loads at least two KPIs via `orm`.
4. Offers a button that opens a filtered `act_window`.
5. Handles loading, empty, and error states.
6. Does **not** bypass ACL with reckless `sudo` on the server just to make the widget pretty.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Explain `ir.actions.client` vs `ir.actions.act_window` in two sentences. |
| Medium | Wire tag ↔ registry key ↔ menu for a hello-world client action. |
| Hard | Add a refresh button that reloads KPIs without leaving the action. |

**WHAT THIS UNLOCKS NEXT:**

Story XIII made the browser half of Odoo programmable. Those KPIs and lists still live in **PostgreSQL**. When the dashboard is slow at 200k loans, XML and Owl cannot save you — you need the database story: schema, plans, transactions, and ORM performance.

---

> **Phase 57 complete?** [Build the Interactive Odoo Dashboard](../guides/Projects.md) · [Continue to Phase 58](#phase-58---odoo-database-structure)

---

# PHASE 58 - Odoo Database Structure

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Map Odoo models to PostgreSQL tables, recognize `ir_*` metadata tables, Many2many relation tables, and explain why hand-editing registry rows is dangerous.

**WHAT YOU SHOULD KNOW FIRST:** Stories IV–V — models, fields, ORM. Story XIII — the client reads data the server loads from PostgreSQL. Phase 4 — three-tier architecture.

**LEARNING RESOURCES:**

- [Odoo data model / backend data](https://www.odoo.com/documentation/18.0/developer/reference/backend/data.html)
- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [Architecture tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/server_framework_101/01_architecture.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [Architecture overview (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)

## 58.1 Tables Behind Models

Every `models.Model` with `_auto = True` (the default) gets a PostgreSQL table. By convention the table name is the model name with dots → underscores: `library.book` → `library_book`. You can override with `_table`, but fighting the convention needs a reason.

**WHAT ELSE IS IN THE DATABASE:**

```text
BUSINESS TABLES              METADATA / SYSTEM
library_book                 ir_model
library_loan                 ir_model_fields
res_partner                  ir_ui_view
                             ir_rule
                             ir_model_access
                             ir_attachment  (+ filestore files)
                             ir_sequence
```

**Many2many** fields create (or reuse) a relation table, often named like `library_book_tag_rel` with two foreign-key columns. **One2many** is not a reverse column on the parent — it is a many2one on the child that the ORM presents as a collection.

**Translations & JSONB:** modern Odoo versions store translated field values in ways that involve JSONB columns — inspecting `\d library_book` in `psql` teaches more than memorizing version trivia. Attachments metadata live in `ir_attachment`; large file bytes often live in the **filestore** on disk, not as giant bytea columns you casually SELECT.

**ir_* IS THE ZONING OFFICE:**

| Table | Role |
| ----- | ---- |
| `ir_model` | Which models exist for this database |
| `ir_model_fields` | Field definitions visible to UI / ORM |
| `ir_ui_view` | View architectures (arch_db) |
| `ir_rule` | Record rules |
| `ir_module_module` | Installed module state |

Deleting “junk” rows from `ir_ui_view` or `ir_model_fields` with raw SQL to “fix a stuck upgrade” is how databases enter the twilight zone. Prefer ORM, module uninstall, and official upgrade paths (Story XVII).

**READ-ONLY INSPECTION HABITS:**

```sql
-- Orientation only — not a substitute for ORM security
SELECT id, name, model FROM ir_model WHERE model LIKE 'library.%';
SELECT name, ttype, store FROM ir_model_fields WHERE model = 'library.book';
SELECT id, name FROM library_book ORDER BY id DESC LIMIT 10;
```

Use inspection to **learn and diagnose**. Use the ORM to **mutate business data** so constraints, mail chatter, computed fields, and access rules still run.

## 58.2 Columns You Will Meet Over and Over

| Column pattern | Meaning |
| -------------- | ------- |
| `id` | Integer primary key (usual) |
| `create_uid` / `create_date` | Audit: who/when created |
| `write_uid` / `write_date` | Audit: who/when last wrote |
| `company_id` | Multi-company ownership when present |
| `active` | Archive pattern (`False` hides without delete) |

Relational columns for Many2one are typically `<field>_id`. Looking at `\d library_loan` should feel like reading the Python model with types lowered into SQL.

**EXTERNAL IDS LIVE IN SQL TOO:**

`ir_model_data` maps XML ids (`library_mgmt.book_demo_1`) to database ids. That is how `env.ref(...)` works. When a module uninstalls, related `ir_model_data` rows and owned records follow uninstall rules — another reason not to invent “orphan” rows with raw INSERT that no XML id owns.

**DEMO vs EMPTY DB:**

Demo data populates tables so UI tours feel alive. Performance work needs **volume**, not demo — seed scripts or copies of anonymized staging. Schema literacy without data volume still leaves you blind to seq scans.

**STORY BRIDGE:**

Story XIII’s dashboard counted loans with `orm.searchCount`. Those counts are SQL `COUNT` under the hood against tables you can now name. When counts get slow, you will know which relation to index — Phase 61 — instead of blaming Owl.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Predict the default table name for `library.loan.line`. |
| Medium | In a dev DB, `\d` your custom model and sketch columns vs fields. |
| Hard | Find the M2M relation table for a Many2many you own; explain each column. |

**WHAT THIS UNLOCKS NEXT:**

You can name tables. You still need enough PostgreSQL literacy to inspect indexes, permissions at the DB level (separate from Odoo ACL), and query plans without pretending SQL replaces the ORM.

---

> **Phase 58 complete?** [Continue to Phase 59](#phase-59---postgresql-for-odoo-developers)

---

# PHASE 59 - PostgreSQL for Odoo Developers

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Use `psql` (or an equivalent) to inspect schemas, read basic query results, and explain the boundary between DBA SQL and Odoo ORM responsibilities.

**WHAT YOU SHOULD KNOW FIRST:** Phase 58 — table mapping and `ir_*`. Comfortable running a local Odoo with PostgreSQL (Phase 5).

**LEARNING RESOURCES:**

- [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html)
- [Odoo ORM performance notes](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#performance)
- [Deploy / PostgreSQL notes](https://www.odoo.com/documentation/18.0/administration/on_premise/deploy.html)
- [Architecture (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)
- [odoo/odoo](https://github.com/odoo/odoo)

## 59.1 SQL Literacy Without Bypassing the ORM

Odoo developers are not full-time DBAs — but a developer who cannot read `\d`, `EXPLAIN`, and a slow query log will guess forever. This phase builds **literacy**, not a second application architecture based on raw SQL.

**TOOLING:**

```text
psql your_database
\dt library_*
\d library_loan
\di library_loan*
SELECT version();
```

Inside Odoo shells you may also `self.env.cr.execute(...)` for diagnostics. Prefer parameterized queries. Prefer **rollback** mental mode when exploring.

**THE HARD BOUNDARY (MEMORIZE THIS):**

| Task | Use |
| ---- | --- |
| Create loan, confirm, cancel | ORM methods |
| Enforce “cannot confirm without partner” | `@api.constrains` / Python |
| Hide rows from a user group | Record rules + ACL |
| See why a list view timings out | SQL `EXPLAIN`, indexes, prefetch |
| Nightly analytics dump for BI | Often SQL/views — still respect privacy laws |
| “Quick fix” UPDATE to close loans | Dangerous — skips business methods |

Raw SQL that writes business rows can **skip** constraints, computed field invalidation, chatter messages, workflow methods, and access checks. That is not speed — that is silent corruption. Story XIV teaches SQL so you can **see** what the ORM emits and **tune** storage/plans — not so you can replace security with `WHERE company_id = 1` pasted into a cron.

## 59.2 Seeing the SQL the ORM Emits

Turn on short-lived SQL logging in development:

```text
odoo-bin ... --log-level=debug_sql
```

Confirm a loan and watch `INSERT`/`UPDATE`/`SELECT` patterns. Then rewrite a naive loop and watch query counts drop. That feedback loop teaches more than any slogan about prefetch.

**PARAMETERIZATION:**

```python
self.env.cr.execute(
    "SELECT id FROM library_loan WHERE partner_id = %s AND state = %s",
    (partner_id, "open"),
)
```

Never format SQL with user input via string interpolation. Injection bugs in ERP modules are career-limiting.

**SCHEMAS & SEARCH_PATH:**

Odoo typically uses the `public` schema. Extensions and exotic search_path setups exist in some deployments; know that “table not found” can be a path issue, not a missing model.

**USERS & PRIVILEGES (DB vs ODOO):**

PostgreSQL roles control connection and table privileges. Odoo **users/groups/ACL/rules** control application authorization. A Postgres superuser can destroy the database and still be irrelevant to “can Alice see Bob’s leads?” Application security stays in Odoo.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Run `\d` on `res_partner` and name three columns you recognize from the UI. |
| Medium | Write a parameterized SELECT that counts open loans — then write the ORM equivalent. |
| Hard | Find a blog that recommends “just UPDATE the table” for a workflow; write why it is unsafe in Odoo. |

**WHAT THIS UNLOCKS NEXT:**

Inspection is static. Real systems fail under **concurrent** writers. Transactions, locks, and isolation are the next gap.

---

> **Phase 59 complete?** [Continue to Phase 60](#phase-60---transactions--concurrency)

---

# PHASE 60 - Transactions & Concurrency

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Explain how an Odoo request maps to a database transaction, what flushing means, and how concurrent updates produce lock waits or inconsistent reads — without inventing DIY locking everywhere.

**WHAT YOU SHOULD KNOW FIRST:** Phase 59 — SQL literacy boundary. Phase 13/17 — environment, cursor, prefetch/flush ideas from the ORM story.

**LEARNING RESOURCES:**

- [ORM API — transaction / environment](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [PostgreSQL concurrency control](https://www.postgresql.org/docs/current/mvcc-intro.html)
- [Performance reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/performance.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 60.1 One Request, One Cursor Story

Typical HTTP worker flow:

```text
request starts
  -> Environment + cursor opened
  -> Python business code uses ORM
  -> flush: pending writes become SQL
  -> commit on success  /  rollback on error
request ends
```

Uncaught exceptions roll back. Partial success that you “manually patched” with extra commits inside business methods is a smell — it breaks the atomic story users expect (“confirm either fully happens or not at all”).

**FLUSH VS COMMIT:**

- **Flush:** ORM pushes pending field changes to PostgreSQL *inside* the open transaction so later SQL/reads see them.
- **Commit:** Transaction becomes permanent.

You rarely call commit in normal model code. Framework code does. In tests, `TransactionCase` keeps work in a transaction that rolls back (Phase 65).

**CONCURRENCY PICTURE:**

```text
Session A: reads loan 42 state=open
Session B: reads loan 42 state=open
Session A: writes state=returned  (lock row)
Session B: waits or conflicts depending on pattern
```

PostgreSQL uses MVCC. Writers take row locks. Long transactions that hold locks while calling external payment APIs are a production classic: everyone queues behind a network call. Keep transactions short; do slow I/O outside critical lock sections when designing integrations (Story XII lessons apply).

**ODOO PATTERNS THAT TOUCH CONCURRENCY:**

| Pattern | Note |
| ------- | ---- |
| `sudo()` | Does not invent a new DB transaction; changes auth context |
| `with_env` / new cursor helpers | Advanced — easy to leak cursors |
| Unique SQL constraints | Database-enforced last line of defense |
| `FOR UPDATE` via SQL | Rare; prefer business redesign when possible |

When two users confirm the last library copy, the fix is usually a **constraint + well-structured method**, not a clever sleep. Optimistic UI + server-side validation beats home-grown lock tables.

## 60.2 Isolation & “Why Did I See Old Data?”

PostgreSQL’s default isolation (typically Read Committed) means each statement sees a snapshot of committed data. Long-running Python that reads, waits on HTTP, then writes can make decisions on stale facts. Patterns:

1. Re-read critical rows before mutating (`browse` + check state again).
2. Use SQL constraints as backstops (`unique`, check).
3. Design methods to be **idempotent** where possible (confirm twice should not double-decrement).

Cursor management helpers appear in cron and webhook code. Misused, they commit half a business operation. Prefer staying inside the request transaction until you understand the failure modes.

**LOCK WAITS YOU WILL SEE IN LOGS:**

```text
could not obtain lock on row in relation "library_loan"
canceling statement due to lock timeout
```

Someone held a row too long. Find the long transaction (slow method, external HTTP inside the critical section, forgotten shell session with an open transaction). Fix the design; do not raise lock timeouts as a “performance feature.”

**TESTS PREVIEW:**

`TransactionCase` (Phase 65) leans on this same transactional world — savepoints and rollbacks — so your concurrency literacy becomes your test literacy.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Difference between flush and commit in one sentence each. |
| Medium | Describe a double-confirm race on stock qty=1 and how a constraint helps. |
| Hard | Trace a webhook handler that commits too early; list the failure mode. |

**WHAT THIS UNLOCKS NEXT:**

Concurrency explains *when* things wait. Indexes and query plans explain *why a single user still waits* on an unindexed domain.

---

> **Phase 60 complete?** [Continue to Phase 61](#phase-61---indexes--query-plans)

---

# PHASE 61 - Indexes & Query Plans

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Read a basic `EXPLAIN (ANALYZE, BUFFERS)` plan, relate slow domains to missing indexes, and add `index=True` / SQL indexes deliberately — not on every column.

**WHAT YOU SHOULD KNOW FIRST:** Phases 58–60 — schema, SQL literacy, transactions. Phase 15 — domains.

**LEARNING RESOURCES:**

- [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html)
- [ORM performance](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#performance)
- [Odoo performance / profiling](https://www.odoo.com/documentation/18.0/developer/reference/backend/performance.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 61.1 Indexes Are Access Paths, Not Magic

An **index** is a separate structure that lets PostgreSQL find rows without scanning the whole table. Useful for domains you run constantly (`partner_id = …`, `state = …`, email lookups). Harmful when sprayed onto low-selectivity columns you never filter — every write maintains every index.

**IN ODOO FIELDS:**

```python
partner_id = fields.Many2one("res.partner", required=True, index=True)
state = fields.Selection([...], default="draft", index=True)
isbn = fields.Char(index=True)  # if you search by ISBN constantly
```

Many2one fields often deserve indexes because joins and domains hit them constantly. Storing a computed field you filter/group on (`store=True`) is sometimes the real fix — an unstored compute cannot be indexed as a normal column.

**EXPLAIN WITHOUT FEAR:**

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT id, name
FROM library_loan
WHERE state = 'open' AND partner_id = 42;
```

Things to notice in plans:

| Plan idea | Plain language |
| --------- | -------------- |
| Seq Scan | Read most/all of the table |
| Index Scan / Index Only Scan | Use an index to find rows |
| Bitmap Heap Scan | Combine index hits, then fetch heaps |
| Nested Loop / Hash Join | How tables combine |
| high actual time | Where seconds go |

`ANALYZE` runs the query. Use it on **copies / staging**, not carelessly on heavy production writers. `BUFFERS` shows cache vs disk feel.

**MATCH INDEXES TO DOMAINS:**

```text
Domain: [("state", "=", "open"), ("partner_id", "=", pid)]
Ask:   Is there an index that leads with partner_id or a composite that fits?
Also:  Is the action's domain applied at search, or do we search([]) and filter in Python?
```

Filtering 200k rows in Python after a wide SELECT is not an indexing problem — it is an ORM problem (Phase 62).

## 61.2 Reading EXPLAIN Like a Developer

A simplified story of a bad plan:

```text
Seq Scan on library_loan  (cost=0.00..18500 rows=12000 width=64)
  Filter: ((state = 'open') AND (partner_id = 42))
  Rows Removed by Filter: 188000
Planning Time: 0.2 ms
Execution Time: 95 ms
```

After a useful index on `partner_id` (or a composite that fits):

```text
Index Scan using library_loan_partner_id_index on library_loan
  Index Cond: (partner_id = 42)
  Filter: (state = 'open')
Execution Time: 0.8 ms
```

**WHAT “COST” MEANS:**

PostgreSQL’s cost is a planner estimate (arbitrary units), not wall-clock truth. `ANALYZE` gives actual times. Trust **actual time** and **rows** first; use cost to understand the planner’s bet.

**PARTIAL INDEXES (ADVANCED):**

If 95% of loans are `returned` and you always query `state = 'open'`, a partial index can stay small:

```sql
CREATE INDEX library_loan_open_partner
  ON library_loan (partner_id)
  WHERE state = 'open';
```

In Odoo you more often declare `index=True` on fields and let the ORM create standard indexes. Partial indexes may appear in carefully reviewed SQL init hooks — document them; upgrades must know they exist.

**STATISTICS:**

Planner quality depends on `ANALYZE` statistics. If EXPLAIN estimates 100 rows and reality is 100000, your index choice fights bad stats. Ops depth continues in Story XVI.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | When would `index=True` on a boolean field be pointless? |
| Medium | Take one slow list view domain; propose one index and justify with EXPLAIN. |
| Hard | Compare Seq Scan vs Index Scan on the same query before/after an index on staging; paste both plans in your notes. |

**WHAT THIS UNLOCKS NEXT:**

Good indexes still lose to bad ORM patterns — N+1 loops, unbounded searches, and repeated flushes. Phase 62 attacks the Python side.

---

> **Phase 61 complete?** [Continue to Phase 62](#phase-62---orm-performance)

---

# PHASE 62 - ORM Performance

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Spot and fix classic Odoo N+1 patterns, use `mapped`/`filtered` wisely, prefetch intentionally, paginate searches, and know when `read_group` beats loading every row.

**WHAT YOU SHOULD KNOW FIRST:** Phase 61 — indexes/plans. Story V — recordsets, mapped/filtered, prefetch/cache.

**LEARNING RESOURCES:**

- [ORM performance section](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#performance)
- [Odoo performance profiling](https://www.odoo.com/documentation/18.0/developer/reference/backend/performance.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [OWL/architecture videos only as context](https://www.youtube.com/watch?v=WnsYmsq4Qr8)

## 62.1 Batch Thinking on Recordsets

The ORM is optimized for **recordsets**, not for Python `for` loops that each trigger SQL.

**N+1 — THE LIBRARY LOAN TRAP:**

```python
# Bad: may query partner (and more) per loan
for loan in self.search([("state", "=", "open")]):
    print(loan.partner_id.name)

# Better: prefetch partners in batch, or:
loans = self.search([("state", "=", "open")])
names = loans.mapped("partner_id.name")
```

`mapped` / browsing related fields on a recordset usually triggers batch reads. Searching inside a loop does not:

```python
# Bad
for partner in partners:
    count = self.env["library.loan"].search_count([
        ("partner_id", "=", partner.id),
        ("state", "=", "open"),
    ])

# Better direction: one search, then group in memory / read_group
Loan = self.env["library.loan"]
loans = Loan.search([
    ("partner_id", "in", partners.ids),
    ("state", "=", "open"),
])
# or read_group to aggregate in SQL
```

**UNBOUNDED SEARCH IS A PRODUCTION INCIDENT:**

```python
# Dangerous in cron / report
self.search([])  # million rows later...

self.search(domain, limit=200)  # intentional batches
```

Always ask: *What is the maximum rows this can return in three years?*

**STORED COMPUTES & SEARCHABILITY:**

If a list view filters on a value, storing the compute (with correct `@api.depends`) can move work to write-time and make indexes possible. Non-stored computes recalculate when read — fine for rare displays, painful for search/group.

**READ_GROUP FOR AGGREGATES:**

Dashboards that need counts per state should not load every loan into Owl and count in JavaScript. Prefer server `read_group` / carefully designed methods that return aggregates, still under ACL.

**RAW SQL?**

Sometimes a report uses `_auto = False` SQL views or `cr.execute` with joins. That is an advanced, reviewed decision — and it still must not become a backdoor past record rules for interactive users. Prefer ORM until measurement says otherwise (Phase 63).

## 62.2 Prefetch, Cache & Flush Costs

**Prefetch:** When you read `loan.partner_id.name` for many loans in one recordset, Odoo tries to fetch partners in batches. Breaking the recordset into one-id searches destroys that.

**Cache:** Field values sit in cache on the recordset. After writes, flushes, or invalidations, prefer short methods with clear write → read order.

**Flush storms:** Touching many computed stored fields can schedule extensive recomputation. Profile before blaming “Postgres is slow” when Python is recomputing half the database.

**BATCH CREATE/WRITE:**

```python
Loan.create([{...}, {...}, {...}])
records.write({"state": "cancelled"})  # batch when legal
```

Batching is not a license to skip validation.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Rewrite a partner-name loop using `mapped`. |
| Medium | Find an N+1 in a sample compute; fix it. |
| Hard | Design a KPI method that returns counts via `read_group` instead of search+len. |

**WHAT THIS UNLOCKS NEXT:**

You know common fixes. Without **measurement**, you will optimize the wrong layer. Profiling makes performance empirical.

---

> **Phase 62 complete?** [Continue to Phase 63](#phase-63---profiling--optimization)

---

# PHASE 63 - Profiling & Optimization

**Track:** PostgreSQL & Performance

**WHAT YOU WILL BE ABLE TO DO:** Enable Odoo’s profiler, read speedscope-oriented results at a practical level, combine SQL logs with EXPLAIN, and apply a measure → fix → remeasure loop.

**WHAT YOU SHOULD KNOW FIRST:** Phases 61–62 — plans and ORM patterns.

**LEARNING RESOURCES:**

- [Odoo Performance / Profiling](https://www.odoo.com/documentation/18.0/developer/reference/backend/performance.html)
- [ORM performance](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html#performance)
- [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 63.1 Measure Before You Rewrite

Guessing “it must be the index” wastes days. Odoo ships an integrated **profiler** that can record SQL and stack samples into `ir.profile` and open results in speedscope-style views.

**ENABLEMENT (DEV / STAGING HABIT):**

1. Developer mode on.
2. Enable profiling globally for a limited time (UI tools / settings — follow current 18.0 docs).
3. Enable profiling on your session with SQL + traces collectors.
4. Reproduce the slow action once (warm cache considerations apply).
5. Open the profile, look for hot SQL and hot Python frames.
6. Disable profiling — it is not free.

Collectors (from docs): SQL, periodic traces, QWeb, sync (heavy). Default SQL + periodic traces are the usual starting pair.

**ALSO USE:**

| Tool | When |
| ---- | ---- |
| `--log-level=debug_sql` | See ORM SQL in logs (noisy; short sessions) |
| `EXPLAIN (ANALYZE, BUFFERS)` | Validate a specific query shape |
| Browser network tab | Separate client OWL cost from server time |
| `--workers` realities | Later in deploy story; don’t confuse prod worker limits with algo bugs |

**OPTIMIZATION LOOP:**

```text
1. Reproduce with representative data volume
2. Profile / EXPLAIN
3. Change ONE thing (index, domain, mapped, stored field, pagination)
4. Remeasure
5. Keep a before/after note for the PR
```

## 63.2 Separating Client Time from Server Time

A “slow dashboard” might be:

| Layer | Symptom | Fix direction |
| ----- | ------- | ------------- |
| Owl render | CPU busy in browser, tiny network | Simplify template / paginate client data |
| RPC fan-out | Many small `/web/dataset` calls | Batch orm reads / one server method |
| SQL | Few calls, each heavy | Indexes, domains, read_group |
| Python | High CPU between SQL | Algorithm / compute store / careful caching |

Browser Network + Odoo profiler + EXPLAIN together answer which row of that table is guilty.

**BEFORE/AFTER NOTES FOR PRS:**

```text
Before: library dashboard 3.8s (N+1 partner reads; seq scan on state)
After:  220ms (read_group + index on partner_id, state)
Evidence: speedscope link / EXPLAIN paste / debug_sql count 240 → 6
```

Without numbers, “I optimized it” is theater. With numbers, reviewers learn and regressions get caught.

**STORY PROJECT — OPTIMIZE A SLOW ODOO APPLICATION:**

Take a deliberately slow library (or similar) scenario:

1. Seed enough rows that a naive list/dashboard hurts.
2. Capture evidence (profile screenshot or EXPLAIN).
3. Fix N+1 and/or indexes and/or unbounded search.
4. Show before/after timings.
5. Refuse “solutions” that only work by disabling rules or using raw UPDATE.

Story XIV ends when you can *prove* a performance change — not when you can recite index trivia.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List why profiling on an empty DB lies. |
| Medium | Profile one slow screen on staging; write the top two offenders. |
| Hard | Ship a PR with before/after numbers and the single root cause named. |

**WHAT THIS UNLOCKS NEXT:**

You can make Odoo fast enough to trust. You still cannot **prove** business rules, security, and UI flows keep working as the module evolves. Story XV is that proof system — logging, TransactionCase, and targeted tests.

---

> **Phase 63 complete?** [Build Optimize a Slow Odoo Application](../guides/Projects.md) · [Continue to Phase 64](#phase-64---odoo-logging--debugging)

---

# PHASE 64 - Odoo Logging & Debugging

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Configure meaningful log levels, place strategic logs, use debugger breakpoints on Python paths, and debug AccessError / ValidationError without cargo-cult printing.

**WHAT YOU SHOULD KNOW FIRST:** Stories IV–VIII — ORM and security. Story XIV — how to read SQL when performance is the bug.

**LEARNING RESOURCES:**

- [CLI / logging notes in Odoo docs](https://www.odoo.com/documentation/18.0/developer/reference/cli.html)
- [Testing reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [Security reference](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [Architecture (YouTube)](https://www.youtube.com/watch?v=WnsYmsq4Qr8)

## 64.1 Debug Like an Engineer

When a loan will not confirm, the amateur pastes `print(record)` in five places and reloads. The engineer asks: *Is it ACL, record rule, constraint, onchange, client patch, or data?* Logging and breakpoints answer that faster.

**LOG LEVELS YOU ACTUALLY USE:**

| Level | Use |
| ----- | --- |
| `INFO` | Lifecycle milestones |
| `WARNING` | Recoverable oddities |
| `ERROR` | Failures needing attention |
| `debug_sql` / debug | Short investigative sessions |

```python
import logging
_logger = logging.getLogger(__name__)

def action_confirm(self):
    for loan in self:
        _logger.info("Confirming loan %s for partner %s", loan.id, loan.partner_id.id)
        # ...
```

Log **identifiers and states**, not full record dumps of sensitive partner data in production. GDPR-ish discipline is part of professionalism.

**ACCESSERROR TRIAGE:**

```text
1. Which model? Which operation (read/write/create/unlink)?
2. ACL CSV missing row for the group?
3. Record rule domain excluding the row?
4. sudo() used earlier hiding the real user path?
5. Company_id mismatch (multi-company)?
```

Reproduce as the **same user** (or `with_user`) — debugging as admin lies.

**BREAKPOINTS:**

Use your IDE remote debugger or `breakpoint()` in local dev on the method you suspect. Prefer breaking in business methods over scattering prints. For JS, browser devtools on Owl components; remember assets must be the files you think they are (Phase 55).

**SERVER TRACEBACKS ARE TEACHERS:**

Read the bottom frame first (origin), then scan upward for your module namespace. Core frames teach call paths; your frames usually hold the bug.

## 64.2 Reproducible Bug Reports

Before fixing, capture:

```text
- Odoo version / module version
- User login + groups (not password)
- Exact menu / action / record id
- Steps from clean screen
- Traceback or failing assertion
- Whether tests / browser / API triggered it
```

“It doesn’t work” is not a bug report. A traceback plus record id is. This discipline also feeds Phase 65 — many bugs become the next unit test.

**JS SIDE QUICKLY:**

For Owl issues: confirm the asset loaded, set a breakpoint in `setup`, watch Network for failed RPC, and remember that a destroyed component will not thank you for writing state after `await`. Server AccessError often surfaces as a notification rather than a Python traceback in the browser — read the response payload.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Add one structured `_logger.info` to a confirm method and find it in the log. |
| Medium | Force an AccessError on purpose; write the triage checklist result. |
| Hard | Debug a failing compute with a breakpoint; note the recordset size you saw. |

**WHAT THIS UNLOCKS NEXT:**

Manual debugging finds today’s bug. **Tests** prevent tomorrow’s regression. TransactionCase is the default Odoo unit-test workhorse.

---

> **Phase 64 complete?** [Continue to Phase 65](#phase-65---python-tests)

---

# PHASE 65 - Python Tests

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Structure a `tests/` package, write `TransactionCase` tests with assertions, understand savepoint isolation between methods, and tag tests for install vs post-install runs.

**WHAT YOU SHOULD KNOW FIRST:** Phase 64 — logging/debug. Story VI — constraints and workflows you can assert.

**LEARNING RESOURCES:**

- [Testing Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [odoo/odoo tests helpers](https://github.com/odoo/odoo/tree/18.0/odoo/tests)
- [ged-odoo training](https://github.com/ged-odoo/odoo-js-training-public) (JS side later)

## 65.1 TransactionCase & Assertions

Odoo’s Python tests build on `unittest`. Standard layout:

```text
library_mgmt/
  tests/
    __init__.py          # imports test modules
    test_loan_workflow.py
```

```python
# tests/__init__.py
from . import test_loan_workflow
```

**TransactionCase (modern mental model):**

Each test method runs inside a transaction mechanism that **rolls back** so tests do not permanently dirty the database. Internally, Odoo uses **savepoints** so methods stay isolated while sharing class-level setup efficiently. Older docs talked about `SavepointCase`; today you should be fluent in **`TransactionCase`** and understand that **savepoint isolation** is the concept keeping tests independent.

```python
from odoo.tests import TransactionCase, tagged
from odoo.exceptions import ValidationError, UserError

@tagged("post_install", "-at_install")
class TestLoanWorkflow(TransactionCase):

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.partner = cls.env["res.partner"].create({"name": "Test Reader"})
        cls.book = cls.env["library.book"].create({"name": "Test Book"})

    def test_confirm_sets_open(self):
        loan = self.env["library.loan"].create({
            "partner_id": self.partner.id,
            "book_id": self.book.id,
        })
        loan.action_confirm()
        self.assertEqual(loan.state, "open")

    def test_confirm_requires_partner(self):
        loan = self.env["library.loan"].new({"book_id": self.book.id})
        with self.assertRaises(ValidationError):
            loan._check_partner()  # or whatever constraint path you expose
```

**RULES THAT KEEP CI GREEN:**

| Rule | Why |
| ---- | --- |
| Methods start with `test_` | Otherwise they never run |
| Import test modules from `tests/__init__.py` | Otherwise they never collect |
| Prefer `setUpClass` for shared demo rows | Faster than recreating everything per method when safe |
| Assert outcomes, not implementation trivia | Tests survive refactors |
| Use `Form` helper when onchanges matter | Closer to UI behavior |

**TAGS:**

Default tags often include `standard` and `at_install`. Use `@tagged('-at_install', 'post_install')` when the test needs a fuller registry (common for anything touching extra modules).

**SingleTransactionCase** exists for special suites that intentionally share one transaction across methods — know it exists; do not reach for it first.

## 65.2 Savepoints, Registry Cleanup & Assertions That Matter

**Savepoint mental model:**

```text
BEGIN transaction for the test class machinery
  setUpClass creates partner + book
  SAVEPOINT sp_test_confirm
    test_confirm_sets_open runs
  ROLLBACK TO SAVEPOINT sp_test_confirm
  SAVEPOINT sp_test_requires_partner
    test_confirm_requires_partner runs
  ROLLBACK TO SAVEPOINT ...
ROLLBACK / close without committing to the durable DB
```

That is why tests can create thousands of rows safely: nothing persists. It is also why debugging tests interactively after a failure needs care — the row may already be rolled back.

**If a test mutates the registry** (adds models/fields cleverly), clean up (`self.registry.reset_changes()` per docs). Ordinary business tests should not mutate the registry.

**ASSERTION TOOLKIT:**

| Assertion | Use |
| --------- | --- |
| `assertEqual` | States, counts, simple fields |
| `assertTrue` / `assertFalse` | Flags |
| `assertRaises(ValidationError)` | Constraints |
| `assertRaises(UserError)` | Workflow guards |
| `assertRaises(AccessError)` | Security (Phase 67) |

Prefer asserting **business outcomes**: state became `open`, return_date set. Avoid asserting private helper return tuples that will churn.

**RUNNING TESTS (SHAPE):**

```text
odoo-bin -d testdb -u library_mgmt --test-enable --stop-after-init
```

Know your team’s exact flags. The skill is: tests live in-module, are importable, and CI runs them on every merge.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Create `tests/` scaffolding that imports one empty test file. |
| Medium | Write two TransactionCase methods: happy path + `assertRaises`. |
| Hard | Explain savepoint isolation to a teammate using a whiteboard diagram; include why setUpClass side effects roll back between methods. |

**WHAT THIS UNLOCKS NEXT:**

You can assert a field value. Real modules need tests around **workflows** — states, constraints, and side effects — as a deliberate design.

---

> **Phase 65 complete?** [Continue to Phase 66](#phase-66---testing-business-logic)

---

# PHASE 66 - Testing Business Logic

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Design tests for state transitions, constraints, computes, and wizards so business invariants stay enforced under refactor.

**WHAT YOU SHOULD KNOW FIRST:** Phase 65 — TransactionCase. Story VI — methods, constraints, states.

**LEARNING RESOURCES:**

- [Testing Odoo — Form helper](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [ORM API](https://www.odoo.com/documentation/18.0/developer/reference/backend/orm.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 66.1 Test the Invariants Customers Pay For

Business logic tests answer: *If a librarian confirms, returns, or cancels a loan, does the system keep stock and state consistent?* They are not about asserting that a private helper returned `3`.

**MATRIX TO COVER FOR A WORKFLOW MODEL:**

| Transition / rule | Test idea |
| ----------------- | --------- |
| draft → open | Happy confirm |
| open → returned | Sets return date |
| draft → cancelled | Allowed |
| open → cancelled | Allowed or blocked per rules |
| confirm without book | ValidationError |
| double confirm | UserError / idempotent behavior |
| compute overdue flag | Depends fields flip correctly |

```python
def test_return_flow(self):
    loan = self.env["library.loan"].create({...})
    loan.action_confirm()
    loan.action_return()
    self.assertEqual(loan.state, "returned")
    self.assertTrue(loan.return_date)
```

**FORM HELPER WHEN ONCHANGES MATTER:**

```python
from odoo.tests import Form

def test_onchange_partner_populates_address(self):
    with Form(self.env["library.loan"]) as f:
        f.book_id = self.book
        f.partner_id = self.partner
        # fields that onchange would set are visible here
    loan = f.record
    self.assertTrue(loan.id)
```

**WIZARDS:**

Create the transient record, call its action method, assert side effects on real models. Remember transient cleanup — TransactionCase rollback still saves you from residue.

**AVOID BRITTLE TESTS:**

- Do not assert exact chatter HTML.
- Do not depend on demo XML ids from optional modules unless tagged properly.
- Do not sleep() for cron — call the method directly in unit tests; test scheduling wiring separately if needed.

## 66.2 Arrange → Act → Assert for Workflows

Keep each test readable:

```python
def test_cannot_return_draft_loan(self):
    # Arrange
    loan = self.env["library.loan"].create({
        "partner_id": self.partner.id,
        "book_id": self.book.id,
    })
    # Act + Assert
    with self.assertRaises(UserError):
        loan.action_return()
```

One behavior per test method beats mega-tests that confirm, return, cancel, and import in one function. When a mega-test fails, you do not know which invariant broke.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List five invariants for your loan model worth asserting. |
| Medium | Implement happy + failure tests for one transition. |
| Hard | Use `Form` to test an onchange that sets a default due date. |

**WHAT THIS UNLOCKS NEXT:**

Logic can be green while security is theater. Phase 67 tests ACL and record rules as first-class behavior.

---

> **Phase 66 complete?** [Continue to Phase 67](#phase-67---testing-security)

---

# PHASE 67 - Testing Security

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Write tests that prove groups can or cannot CRUD models, that record rules isolate rows, and that `AccessError` appears when it should — including multi-company gotchas.

**WHAT YOU SHOULD KNOW FIRST:** Phase 66 — business tests. Story VIII — users, ACL, record rules, sudo discipline.

**LEARNING RESOURCES:**

- [Testing Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [Security in Odoo](https://www.odoo.com/documentation/18.0/developer/reference/backend/security.html)
- [Restrict access tutorial](https://www.odoo.com/documentation/18.0/developer/tutorials/restrict_data_access.html)
- [odoo/odoo](https://github.com/odoo/odoo)

## 67.1 Security Is Behavior — Assert It

If you only test as `admin` / superuser, you have not tested the product. Security tests create users in groups and act `with_user`.

```python
from odoo.exceptions import AccessError
from odoo.tests import TransactionCase

class TestLoanSecurity(TransactionCase):

    def test_librarian_can_confirm(self):
        user = self.env["res.users"].create({
            "name": "Lib",
            "login": "lib_test",
            "groups_id": [(6, 0, [self.env.ref("library_mgmt.group_library_user").id])],
        })
        loan = self.env["library.loan"].with_user(user).create({...})
        loan.action_confirm()
        self.assertEqual(loan.state, "open")

    def test_portal_cannot_read_others_loans(self):
        other = self.env["library.loan"].create({...})  # as admin setup
        portal_user = self.env.ref("base.demo_user0")  # example — prefer your own
        with self.assertRaises(AccessError):
            other.with_user(portal_user).read(["name"])
```

**WHAT TO COVER:**

| Layer | Assertion style |
| ----- | --------------- |
| ACL | `check_access_rights` / CRUD that raises AccessError |
| Record rules | `search` returns subset; `browse` + read raises or empty |
| `sudo` escape hatches | Documented, minimal; test the *public* method still safe |
| Multi-company | User of company A cannot read company B rows |

**NEVER “FIX” A FAILING SECURITY TEST BY SUDO IN THE TEST SUBJECT:**

If production code under test needs `sudo` to pass a security test, you may be testing the wrong thing — or hiding a real hole. Prefer fixing ACL/rules or redesigning the method’s privileged section with an explicit, reviewed `sudo` boundary.

**RAW SQL IN SECURITY TESTS?**

You may inspect rows as admin for setup. Do not teach “verify security with a SQL SELECT as the application user.” Application users do not connect as distinct Postgres roles per Odoo login. **Odoo security is ORM-level.** Tests must exercise the ORM as that user.

## 67.2 Group Fixtures Without Flaky Demoing

Create groups/users in `setUpClass` with XML ids from *your* module (`self.env.ref("library_mgmt.group_library_user")`). Depending on demo users makes CI fragile when demo is off.

```python
@classmethod
def setUpClass(cls):
    super().setUpClass()
    cls.group_user = cls.env.ref("library_mgmt.group_library_user")
    cls.user_lib = cls.env["res.users"].create({
        "name": "Librarian",
        "login": "librarian_test",
        "email": "lib@example.com",
        "groups_id": [(6, 0, [cls.group_user.id])],
    })
```

Test both **positive** (allowed) and **negative** (AccessError) paths. A suite with only negative tests can pass while nobody can use the feature; a suite with only positive tests can pass while everyone can see everything.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Write one AccessError test for a group without write ACL. |
| Medium | Prove a record rule hides another user’s private records. |
| Hard | Add a multi-company isolation test for one model with `company_id`. |

**WHAT THIS UNLOCKS NEXT:**

Backend green lights still miss broken controllers and client actions. Phase 68 covers HTTP/UI flow testing.

---

> **Phase 67 complete?** [Continue to Phase 68](#phase-68---testing-ui--web-flows)

---

# PHASE 68 - Testing UI / Web Flows

**Track:** Testing & Debugging

**WHAT YOU WILL BE ABLE TO DO:** Use `HttpCase` / tour-style and controller tests at a practical level, know when JS unit tests vs tours vs Python tests fit, and protect critical web/portal paths.

**WHAT YOU SHOULD KNOW FIRST:** Phase 67 — security tests. Stories XI–XIII — controllers, portal, OWL client actions.

**LEARNING RESOURCES:**

- [Testing Odoo — HttpCase & tours](https://www.odoo.com/documentation/18.0/developer/reference/backend/testing.html)
- [JS framework / tours in Odoo docs](https://www.odoo.com/documentation/18.0/developer/reference/frontend.html)
- [HTTP controllers](https://www.odoo.com/documentation/18.0/developer/reference/backend/http.html)
- [odoo/odoo](https://github.com/odoo/odoo)
- [ged-odoo/odoo-js-training-public](https://github.com/ged-odoo/odoo-js-training-public)

## 68.1 Three Layers of Frontend Confidence

Odoo docs describe three complementary kinds of tests:

| Kind | Good for |
| ---- | -------- |
| Python unit (`TransactionCase`) | Models, security, workflows |
| JS unit tests | Owl components in isolation |
| Tours / HttpCase browser helpers | Python ↔ JS integration through the real client |

You do not need a tour for every button. You need them for **money, access, and irreversible** flows — confirming a loan that changes stock, portal pages that must not leak, payment redirects (Story XII).

**HttpCase SKETCH:**

```python
from odoo.tests import HttpCase, tagged

@tagged("post_install", "-at_install")
class TestLibraryHttp(HttpCase):

    def test_dashboard_page_loads_as_admin(self):
        self.authenticate("admin", "admin")
        # Exact URL depends on how your client action is routed;
        # many teams assert controller JSON endpoints more often than full tours.
        response = self.url_open("/web")
        self.assertEqual(response.status_code, 200)
```

`browser_js` / tours run Chrome headless, execute JS, and wait for a success signal (`console.log("test successful")` by default). They are slower and more brittle than unit tests — keep them few and high-value.

**CONTROLLER TESTS:**

For JSON/API routes from Story XI–XII, `url_open` with auth and CSRF awareness often gives more ROI than full UI tours. Assert status codes, payload shapes, and AccessError equivalents.

**OWL / CLIENT ACTION:**

Prefer: unit-test business methods heavily; add one HttpCase or tour that opens the dashboard and checks a KPI DOM node if the action is customer-facing. Do not duplicate every KPI assertion in the browser.

## 68.2 Tours Without Testing Everything Twice

A tour is a scripted click-path. Keep tours for:

- install → open client action → see KPI (Story XIII dashboard)
- portal user sees only own documents
- payment or webhook acknowledgment screens

Do **not** tour every CRUD. TransactionCase already owns CRUD. Tours own “Python and JS still speak to each other after a refactor.”

When a tour flakes, check asset readiness, demo data assumptions, and selectors bound to translated strings. Prefer stable CSS classes you own (`o_library_dashboard`) over brittle text matches.

**STORY PROJECT — FULLY TESTED MODULE:**

Ship (or extend) a module with:

1. TransactionCase workflow tests (happy + failure).
2. At least two security tests (`AccessError` / record rule).
3. One HttpCase or controller test for a critical path.
4. README section: how to run tests (`odoo-bin -i/-u … --test-enable / tagged`).
5. No reliance on raw SQL writes to “set up state” that bypasses constraints — use ORM setup helpers.

That closes Story XV: you can debug, prove business logic, prove security, and smoke-test web flows. Combined with Stories XIII–XIV, you are ready to put the system into production-shaped environments — workers, proxies, backups — without treating “it works on my laptop” as a deployment strategy.

**PRACTICE:**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Decide for three features whether unit, JS, or tour fits best. |
| Medium | Write an HttpCase that authenticates and hits `/web` successfully. |
| Hard | Add a tour or `browser_js` check that your client action renders a KPI. |

**WHAT THIS UNLOCKS NEXT:**

Stories XIII–XV made you full-stack inside one Odoo database: Owl UX, PostgreSQL performance, and automated proof. Running that system for real users — workers, HTTPS, backups, monitoring — is a different job. Story XVI starts **deployment and operations**.

---

> **Phase 68 complete?** [Build the Fully Tested Module](../guides/Projects.md) · [Continue to Phase 69](#phase-69---odoo-configuration)
