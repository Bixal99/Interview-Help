# Web Development Chapter Projects

One required applied project follows every chapter in the [Web Development roadmap](../roadmaps/Web.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## Browser and HTML/CSS/JS

**Shared unit storyline:** Keep one workspace for Browser and HTML/CSS/JS. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="web-phase-1-project"></a>
### WEB DEVELOPMENT CHAPTER 1 PROJECT

#### PROJECT: CLIENT-SERVER REQUEST EXPLORER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

See the browser-server contract and the request path before touching frameworks.

**Chapter topic:** Web Thinking

**Unit storyline:** Continue the **Browser and HTML/CSS/JS** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an evidence-backed analysis for Web Thinking that connects The Web as Client-Server Documents, Dev Environment and Project Shape and makes every important result inspectable.

#### LESSONS PRACTICED

- **1.1 — The Web as Client-Server Documents:** Apply The Web as Client-Server Documents to the controlled example and record the reasoning and result.
- **1.2 — Dev Environment and Project Shape:** Apply Dev Environment and Project Shape to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Produce an evidence-backed analysis for Web Thinking that connects The Web as Client-Server Documents, Dev Environment and Project Shape and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused analysis artifact for Web Thinking.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Browser Developer Tools.
- curl.
- No application code required.

#### BUILD IT STEP BY STEP

1. Open a simple website and press F12 to open Developer Tools.
2. Open the Network tab, reload the page, and select the main document request.
3. Write down the request URL and method, then the response status and content type.
4. Run curl -I https://example.com and find the same kind of response information.
5. Change the URL to a missing page and compare the successful and failed status codes.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/browser/chapter-1-client-server-request-explorer
git commit -m "feat(client-server-request-explorer): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 1](../roadmaps/Web.md#phase-1) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 2](../roadmaps/Web.md#phase-2)


<a id="web-phase-2-project"></a>
### WEB DEVELOPMENT CHAPTER 2 PROJECT

#### PROJECT: ACCESSIBLE PROFILE PAGE

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Structure content so machines and humans both understand it.

**Chapter topic:** HTML Foundations

**Unit storyline:** Continue the **Browser and HTML/CSS/JS** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an evidence-backed analysis for HTML Foundations that connects Semantics, Structure, and Accessibility, Forms, Media, and Metadata and makes every important result inspectable.

#### LESSONS PRACTICED

- **2.1 — Semantics, Structure, and Accessibility:** Apply Semantics, Structure, and Accessibility to the controlled example and record the reasoning and result.
- **2.2 — Forms, Media, and Metadata:** Apply Forms, Media, and Metadata to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Produce an evidence-backed analysis for HTML Foundations that connects Semantics, Structure, and Accessibility, Forms, Media, and Metadata and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused analysis artifact for HTML Foundations.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- HTML5.
- VSCodium or any text editor.
- A modern browser; no framework and no JavaScript.

#### BUILD IT STEP BY STEP

1. Create a folder named profile-page and add index.html.
2. Add header, nav, main, section, and footer elements in that order.
3. Add a heading, short biography, skills list, profile image with alternative text, and contact links.
4. Add a contact form; connect every input to a visible label.
5. Open the file in a browser and press Tab through every link and form field to confirm the order makes sense.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/browser/chapter-2-accessible-profile-page
git commit -m "feat(accessible-profile-page): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 2](../roadmaps/Web.md#phase-2) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 3](../roadmaps/Web.md#phase-3)


<a id="web-phase-3-project"></a>
### WEB DEVELOPMENT CHAPTER 3 PROJECT

#### PROJECT: DESIGN TOKEN STYLE GUIDE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Style and space content predictably.

**Chapter topic:** CSS Fundamentals

**Unit storyline:** Continue the **Browser and HTML/CSS/JS** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for CSS Fundamentals that connects Cascade, Specificity, and the Box Model, Typography, Color, and Variables and makes every important result inspectable.

#### LESSONS PRACTICED

- **3.1 — Cascade, Specificity, and the Box Model:** Implement or demonstrate Cascade, Specificity, and the Box Model in the shared unit project and add a focused check.
- **3.2 — Typography, Color, and Variables:** Implement or demonstrate Typography, Color, and Variables in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for CSS Fundamentals that connects Cascade, Specificity, and the Box Model, Typography, Color, and Variables and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for CSS Fundamentals.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- HTML5 and CSS3.
- VSCodium or any text editor.
- CSS custom properties; no framework and no JavaScript.

#### BUILD IT STEP BY STEP

1. Create index.html and styles.css in a style-guide folder.
2. In :root, define variables for colors, spacing, font sizes, borders, and shadows.
3. Add HTML examples for headings, body text, buttons, form fields, and cards.
4. Style every example by reusing the variables instead of repeating raw values.
5. Change one color and one spacing variable and confirm all related components update together.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/browser/chapter-3-design-token-style-guide
git commit -m "feat(design-token-style-guide): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 3](../roadmaps/Web.md#phase-3) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 4](../roadmaps/Web.md#phase-4)


<a id="web-phase-4-project"></a>
### WEB DEVELOPMENT CHAPTER 4 PROJECT

#### PROJECT: RESPONSIVE PRODUCT LANDING

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Layout pages for phones, tablets, and desktops without brittle floats.

**Chapter topic:** CSS Layout & Responsive Design

**Unit storyline:** Continue the **Browser and HTML/CSS/JS** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for CSS Layout & Responsive Design that connects Flexbox and Alignment, Grid, Media Queries, and Mobile-First and makes every important result inspectable.

#### LESSONS PRACTICED

- **4.1 — Flexbox and Alignment:** Represent Flexbox and Alignment in the design and justify one decision that depends on it.
- **4.2 — Grid, Media Queries, and Mobile-First:** Represent Grid, Media Queries, and Mobile-First in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for CSS Layout & Responsive Design that connects Flexbox and Alignment, Grid, Media Queries, and Mobile-First and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for CSS Layout & Responsive Design.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- HTML5 and CSS3.
- VSCodium or any text editor.
- Flexbox, CSS Grid, and media queries; no framework and no JavaScript.

#### BUILD IT STEP BY STEP

1. Create a product-landing folder with index.html, styles.css, and an images folder.
2. Write the page sections in HTML first: header, hero, benefits, feature cards, call-to-action, and footer.
3. Start the CSS at phone size: use one column, readable text, full-width buttons, and images that never overflow.
4. Use Flexbox for one-dimensional rows and CSS Grid for the feature-card layout.
5. Add a breakpoint near 768px so the hero and cards use more columns when space is available.
6. Test at 320px, 768px, and a wide desktop size. Fix any overlap, tiny text, or horizontal scroll.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/browser/chapter-4-responsive-product-landing
git commit -m "feat(responsive-product-landing): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 4](../roadmaps/Web.md#phase-4) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 5](../roadmaps/Web.md#phase-5)


<a id="web-phase-5-project"></a>
### WEB DEVELOPMENT CHAPTER 5 PROJECT

#### PROJECT: INTERACTIVE EXPENSE TRACKER

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Add behavior: events, DOM updates, and async I/O.

**Chapter topic:** JavaScript Fundamentals

**Unit storyline:** Continue the **Browser and HTML/CSS/JS** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for JavaScript Fundamentals that connects Language Core: Values, Functions, and Collections, DOM, Events, and Fetch and makes every important result inspectable.

#### LESSONS PRACTICED

- **5.1 — Language Core: Values, Functions, and Collections:** Implement or demonstrate Language Core: Values, Functions, and Collections in the shared unit project and add a focused check.
- **5.2 — DOM, Events, and Fetch:** Implement or demonstrate DOM, Events, and Fetch in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for JavaScript Fundamentals that connects Language Core: Values, Functions, and Collections, DOM, Events, and Fetch and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for JavaScript Fundamentals.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- HTML5, CSS3, and JavaScript.
- VSCodium or any text editor.
- Browser localStorage; no framework.

#### BUILD IT STEP BY STEP

1. Create index.html, styles.css, and app.js.
2. Build the form and an empty list area in HTML.
3. In JavaScript, store expenses in an array of objects and write one function that redraws the list.
4. On form submit, validate the fields, add the expense, update the total, and clear the form.
5. Add a Delete button to each row and save the array in localStorage.
6. Reload the page and confirm saved expenses return; also try an empty and a negative amount.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/browser/chapter-5-interactive-expense-tracker
git commit -m "feat(interactive-expense-tracker): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 5](../roadmaps/Web.md#phase-5) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 6](../roadmaps/Web.md#phase-6)


<a id="web-phase-6-project"></a>
### WEB DEVELOPMENT CHAPTER 6 PROJECT

#### PROJECT: OFFLINE-CAPABLE NOTES APP

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Debug like a pro; package code with npm and bundlers.

**Chapter topic:** Browser APIs & Tooling

**Unit storyline:** Continue the **Browser and HTML/CSS/JS** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Browser APIs & Tooling that connects DevTools, Debugging, and Network Panel, npm, Vite, and Environment Config and makes every important result inspectable.

#### LESSONS PRACTICED

- **6.1 — DevTools, Debugging, and Network Panel:** Implement or demonstrate DevTools, Debugging, and Network Panel in the shared unit project and add a focused check.
- **6.2 — npm, Vite, and Environment Config:** Implement or demonstrate npm, Vite, and Environment Config in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Browser APIs & Tooling that connects DevTools, Debugging, and Network Panel, npm, Vite, and Environment Config and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Browser APIs & Tooling.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- HTML5, CSS3, and JavaScript modules.
- Vite.
- Service Worker, Cache API, and localStorage.

#### BUILD IT STEP BY STEP

1. Create the project with npm create vite@latest notes-app -- --template vanilla and install it.
2. Build the note form, search box, list, empty state, and offline message.
3. Save notes locally and render them again after a page refresh.
4. Add a service worker that caches the application shell during installation.
5. Switch the browser Network panel to Offline and confirm the app still opens.
6. Run npm run build and fix any build errors.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/browser/chapter-6-offline-capable-notes-app
git commit -m "feat(offline-capable-notes-app): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 6](../roadmaps/Web.md#phase-6) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 7](../roadmaps/Web.md#phase-7)


<a id="web-phase-7-project"></a>
### WEB DEVELOPMENT CHAPTER 7 PROJECT

#### PROJECT: TYPED API CLIENT

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Add static types to JavaScript for safer refactors when the amount of work grows.

**Chapter topic:** TypeScript for Web

**Unit storyline:** Continue the **Browser and HTML/CSS/JS** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for TypeScript for Web that connects Types, Interfaces, and Strictness, Generics and Project TSConfig and makes every important result inspectable.

#### LESSONS PRACTICED

- **7.1 — Types, Interfaces, and Strictness:** Implement or demonstrate Types, Interfaces, and Strictness in the shared unit project and add a focused check.
- **7.2 — Generics and Project TSConfig:** Implement or demonstrate Generics and Project TSConfig in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for TypeScript for Web that connects Types, Interfaces, and Strictness, Generics and Project TSConfig and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for TypeScript for Web.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- TypeScript.
- Vite.
- Fetch API and Vitest.

#### BUILD IT STEP BY STEP

1. Create a TypeScript Vite project and install its packages.
2. Define TypeScript types for the API item and error result.
3. Write one fetch function with a timeout and a visible error message.
4. Render loading, empty, success, and retry views.
5. Add one test for valid data and one for malformed data.
6. Run npm run build and the test command until both pass.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/browser/chapter-7-typed-api-client
git commit -m "feat(typed-api-client): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 7](../roadmaps/Web.md#phase-7) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 8](../roadmaps/Web.md#phase-8)


## Frameworks

**Shared unit storyline:** Keep one workspace for Frameworks. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="web-phase-8-project"></a>
### WEB DEVELOPMENT CHAPTER 8 PROJECT

#### PROJECT: REACT HABIT TRACKER

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Build UIs from components with declarative state.

**Chapter topic:** React Fundamentals

**Unit storyline:** Continue the **Frameworks** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for React Fundamentals that connects Components, JSX, Props, and State, useEffect, Forms, and Composition and makes every important result inspectable.

#### LESSONS PRACTICED

- **8.1 — Components, JSX, Props, and State:** Implement or demonstrate Components, JSX, Props, and State in the shared unit project and add a focused check.
- **8.2 — useEffect, Forms, and Composition:** Implement or demonstrate useEffect, Forms, and Composition in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for React Fundamentals that connects Components, JSX, Props, and State, useEffect, Forms, and Composition and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for React Fundamentals.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- React with TypeScript.
- Vite.
- React Testing Library.

#### BUILD IT STEP BY STEP

1. Create a React TypeScript Vite project and install it.
2. Create HabitForm, HabitList, HabitItem, and Summary components.
3. Keep the habit array in the nearest shared parent component and pass data through props.
4. Add create, toggle, delete, and filter actions.
5. Show useful empty text when there are no habits.
6. Test adding and completing a habit, then run the production build.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/frameworks/chapter-8-react-habit-tracker
git commit -m "feat(react-habit-tracker): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 8](../roadmaps/Web.md#phase-8) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 9](../roadmaps/Web.md#phase-9)


<a id="web-phase-9-project"></a>
### WEB DEVELOPMENT CHAPTER 9 PROJECT

#### PROJECT: CACHED ADMIN DASHBOARD

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Scale UI logic with routing, context, and server state libraries.

**Chapter topic:** React Patterns & State

**Unit storyline:** Continue the **Frameworks** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for React Patterns & State that connects Routing and Layout Composition, Context, TanStack Query, and Form Patterns and makes every important result inspectable.

#### LESSONS PRACTICED

- **9.1 — Routing and Layout Composition:** Implement or demonstrate Routing and Layout Composition in the shared unit project and add a focused check.
- **9.2 — Context, TanStack Query, and Form Patterns:** Implement or demonstrate Context, TanStack Query, and Form Patterns in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for React Patterns & State that connects Routing and Layout Composition, Context, TanStack Query, and Form Patterns and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for React Patterns & State.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- React with TypeScript.
- Vite.
- TanStack Query and React Router.

#### BUILD IT STEP BY STEP

1. Create a React TypeScript project and add React Router and TanStack Query.
2. Create routes for the dashboard list and the edit page.
3. Load seeded mock API data through a query hook.
4. Store search, filter, and page values in URL query parameters.
5. Add an edit mutation with loading, success, error, and rollback behavior.
6. Test a filtered deep link and confirm refreshing keeps the same screen.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/frameworks/chapter-9-cached-admin-dashboard
git commit -m "feat(cached-admin-dashboard): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 9](../roadmaps/Web.md#phase-9) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 10](../roadmaps/Web.md#phase-10)


<a id="web-phase-10-project"></a>
### WEB DEVELOPMENT CHAPTER 10 PROJECT

#### PROJECT: FULL-STACK ISSUE TRACKER

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Ship React with routing, SSR, and API routes in one framework.

**Chapter topic:** Next.js & Full-Stack React

**Unit storyline:** Continue the **Frameworks** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Next.js & Full-Stack React that connects App Router, Layouts, and Rendering Models, Route Handlers, Server Actions, and Auth Hooks and makes every important result inspectable.

#### LESSONS PRACTICED

- **10.1 — App Router, Layouts, and Rendering Models:** Implement or demonstrate App Router, Layouts, and Rendering Models in the shared unit project and add a focused check.
- **10.2 — Route Handlers, Server Actions, and Auth Hooks:** Implement or demonstrate Route Handlers, Server Actions, and Auth Hooks in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Next.js & Full-Stack React that connects App Router, Layouts, and Rendering Models, Route Handlers, Server Actions, and Auth Hooks and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Next.js & Full-Stack React.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Next.js with TypeScript.
- React.
- Tailwind CSS or CSS Modules.

#### BUILD IT STEP BY STEP

1. Create a Next.js TypeScript app.
2. Add list, detail, new-issue, loading, error, and not-found pages.
3. Use server components for initial reads and a client component only for interactive form behavior.
4. Validate the new-issue form on the server and return field-specific errors.
5. Add metadata for the list and detail pages.
6. Run the development server, test direct URLs, and run the production build.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/frameworks/chapter-10-full-stack-issue-tracker
git commit -m "feat(full-stack-issue-tracker): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 10](../roadmaps/Web.md#phase-10) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 11](../roadmaps/Web.md#phase-11)


## Server, data, and APIs

**Shared unit storyline:** Keep one workspace for Server, data, and APIs. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="web-phase-11-project"></a>
### WEB DEVELOPMENT CHAPTER 11 PROJECT

#### PROJECT: EXPRESS SERVICE STARTER

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Run JavaScript on the server with an HTTP framework.

**Chapter topic:** Node.js & Express

**Unit storyline:** Continue the **Server, data, and APIs** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Node.js & Express that connects Node Runtime, Modules, and Express Basics, Validation, Logging, and Project Structure and makes every important result inspectable.

#### LESSONS PRACTICED

- **11.1 — Node Runtime, Modules, and Express Basics:** Implement or demonstrate Node Runtime, Modules, and Express Basics in the shared unit project and add a focused check.
- **11.2 — Validation, Logging, and Project Structure:** Implement or demonstrate Validation, Logging, and Project Structure in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Node.js & Express that connects Node Runtime, Modules, and Express Basics, Validation, Logging, and Project Structure and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Node.js & Express.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Node.js LTS and TypeScript.
- Express.
- Vitest and Supertest.

#### BUILD IT STEP BY STEP

1. Create a Node.js TypeScript project and install Express, Vitest, and Supertest.
2. Create separate files for the app, server startup, task routes, and error handling.
3. Add GET /health and create, list, update, and delete task routes using an in-memory array.
4. Validate required task fields before changing the array.
5. Add tests for one successful request, one missing task, and one invalid body.
6. Run the test command, then start the server and call the health route in a browser or with curl.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/backend/chapter-11-express-service-starter
git commit -m "feat(express-service-starter): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 11](../roadmaps/Web.md#phase-11) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 12](../roadmaps/Web.md#phase-12)


<a id="web-phase-12-project"></a>
### WEB DEVELOPMENT CHAPTER 12 PROJECT

#### PROJECT: CONTRACT-FIRST REST API

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Design resources, status codes, and versioning developers trust.

**Chapter topic:** REST API Design

**Unit storyline:** Continue the **Server, data, and APIs** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for REST API Design that connects Resources, Methods, and Status Codes, Pagination, Filtering, Errors, and Versioning and makes every important result inspectable.

#### LESSONS PRACTICED

- **12.1 — Resources, Methods, and Status Codes:** Represent Resources, Methods, and Status Codes in the design and justify one decision that depends on it.
- **12.2 — Pagination, Filtering, Errors, and Versioning:** Represent Pagination, Filtering, Errors, and Versioning in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for REST API Design that connects Resources, Methods, and Status Codes, Pagination, Filtering, Errors, and Versioning and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for REST API Design.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Node.js LTS and TypeScript.
- Express.
- OpenAPI, Zod, Vitest, and Supertest.

#### BUILD IT STEP BY STEP

1. Create an Express TypeScript project and add Zod, Vitest, and Supertest.
2. Write openapi.yaml with the project and task endpoints and example responses.
3. Implement the routes to match that contract exactly.
4. Add Zod validation and one consistent JSON error format.
5. Add filtering plus a simple page limit and cursor.
6. Test success, invalid input, missing records, and pagination; compare every response with the OpenAPI examples.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/backend/chapter-12-contract-first-rest-api
git commit -m "feat(contract-first-rest-api): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 12](../roadmaps/Web.md#phase-12) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 13](../roadmaps/Web.md#phase-13)


<a id="web-phase-13-project"></a>
### WEB DEVELOPMENT CHAPTER 13 PROJECT

#### PROJECT: TRANSACTIONAL PROJECT DATABASE

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Persist data with relational schemas and an ORM.

**Chapter topic:** Databases for Web Apps

**Unit storyline:** Continue the **Server, data, and APIs** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Produce an implementation-ready design for Databases for Web Apps that connects Relational Modeling and Migrations, Queries, N+1, and Transactions and makes every important result inspectable.

#### LESSONS PRACTICED

- **13.1 — Relational Modeling and Migrations:** Represent Relational Modeling and Migrations in the design and justify one decision that depends on it.
- **13.2 — Queries, N+1, and Transactions:** Represent Queries, N+1, and Transactions in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Databases for Web Apps that connects Relational Modeling and Migrations, Queries, N+1, and Transactions and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused design artifact for Databases for Web Apps.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- PostgreSQL 16.
- Node.js and TypeScript.
- Prisma ORM.

#### BUILD IT STEP BY STEP

1. Start a local PostgreSQL database and create a Node.js TypeScript project with Prisma.
2. Design User, Project, and Task models with primary keys, foreign keys, required fields, and timestamps.
3. Create and run the first migration, then add a seed script with a few records.
4. Implement one transaction that creates a project and its first task together.
5. Add list, update, and delete operations and handle a missing record clearly.
6. Run the project from an empty database to confirm migrations and seed data work in the correct order.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/backend/chapter-13-transactional-project-database
git commit -m "feat(transactional-project-database): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 13](../roadmaps/Web.md#phase-13) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 14](../roadmaps/Web.md#phase-14)


<a id="web-phase-14-project"></a>
### WEB DEVELOPMENT CHAPTER 14 PROJECT

#### PROJECT: SECURE SESSION AUTH APP

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Know who the user is and what they may do.

**Chapter topic:** Authentication & Authorization

**Unit storyline:** Continue the **Server, data, and APIs** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Authentication & Authorization that connects Passwords, Sessions, and Cookies, JWT, OAuth2 Overview, and RBAC and makes every important result inspectable.

#### LESSONS PRACTICED

- **14.1 — Passwords, Sessions, and Cookies:** Implement or demonstrate Passwords, Sessions, and Cookies in the shared unit project and add a focused check.
- **14.2 — JWT, OAuth2 Overview, and RBAC:** Implement or demonstrate JWT, OAuth2 Overview, and RBAC in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Authentication & Authorization that connects Passwords, Sessions, and Cookies, JWT, OAuth2 Overview, and RBAC and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Authentication & Authorization.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Node.js and TypeScript.
- Express and PostgreSQL.
- Secure cookie sessions, Argon2, and Zod.

#### BUILD IT STEP BY STEP

1. Create an Express TypeScript app connected to PostgreSQL.
2. Add a User table with a unique email and a password-hash field; never store the original password.
3. Validate sign-up input and hash passwords with Argon2.
4. Create a server-side session on sign-in and send only a secure, HTTP-only cookie to the browser.
5. Protect the profile route and check ownership again when loading user data.
6. Test wrong passwords, missing sessions, duplicate email, and access to another user's ID.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/backend/chapter-14-secure-session-auth-app
git commit -m "feat(secure-session-auth-app): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 14](../roadmaps/Web.md#phase-14) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 15](../roadmaps/Web.md#phase-15)


## Security, production, hire

**Shared unit storyline:** Keep one workspace for Security, production, hire. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="web-phase-15-project"></a>
### WEB DEVELOPMENT CHAPTER 15 PROJECT

#### PROJECT: FULL-STACK TEST PYRAMID

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Automate confidence: unit, integration, and end-to-end.

**Chapter topic:** Testing Web Applications

**Unit storyline:** Continue the **Security, production, hire** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Testing Web Applications that connects Unit and Component Tests, API Integration and E2E Tests and makes every important result inspectable.

#### LESSONS PRACTICED

- **15.1 — Unit and Component Tests:** Implement or demonstrate Unit and Component Tests in the shared unit project and add a focused check.
- **15.2 — API Integration and E2E Tests:** Implement or demonstrate API Integration and E2E Tests in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Testing Web Applications that connects Unit and Component Tests, API Integration and E2E Tests and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Testing Web Applications.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- TypeScript.
- Vitest and React Testing Library.
- Supertest and Playwright.

#### BUILD IT STEP BY STEP

1. Choose one existing small app and list its single most important user journey.
2. Add unit tests for its pure validation or calculation functions.
3. Add Supertest integration tests for the API and a disposable test database.
4. Add React Testing Library tests for loading, success, and error behavior.
5. Add one Playwright test that completes the main journey in a browser.
6. Run all test levels from one command, deliberately break one behavior, and confirm the correct test catches it.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/production/chapter-15-full-stack-test-pyramid
git commit -m "feat(full-stack-test-pyramid): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 15](../roadmaps/Web.md#phase-15) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 16](../roadmaps/Web.md#phase-16)


<a id="web-phase-16-project"></a>
### WEB DEVELOPMENT CHAPTER 16 PROJECT

#### PROJECT: WEB VITALS OPTIMIZATION CASE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Fast sites convert; slow sites lose users and SEO rank.

**Chapter topic:** Performance & Web Vitals

**Unit storyline:** Continue the **Security, production, hire** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Performance & Web Vitals that connects Core Web Vitals and Loading Strategy, Caching, Compression, and Bundle Size and makes every important result inspectable.

#### LESSONS PRACTICED

- **16.1 — Core Web Vitals and Loading Strategy:** Implement or demonstrate Core Web Vitals and Loading Strategy in the shared unit project and add a focused check.
- **16.2 — Caching, Compression, and Bundle Size:** Implement or demonstrate Caching, Compression, and Bundle Size in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Performance & Web Vitals that connects Core Web Vitals and Loading Strategy, Caching, Compression, and Bundle Size and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Performance & Web Vitals.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Chromium DevTools and Lighthouse.
- WebPageTest.
- The existing web application stack; add no new framework.

#### BUILD IT STEP BY STEP

1. Choose one page with images, fonts, and JavaScript and open it in an incognito browser window.
2. Run Lighthouse three times and record the middle LCP, INP, and CLS result.
3. Use the Performance and Network panels to find the largest delay or layout shift.
4. Make one focused fix such as sizing images, lazy-loading below-fold media, reducing JavaScript, or preloading a critical font.
5. Run the same measurements three more times under the same conditions.
6. Keep the change only if the measured result improves and the page still works at phone and desktop widths.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/production/chapter-16-web-vitals-optimization-case
git commit -m "feat(web-vitals-optimization-case): complete chapter 16 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 16](../roadmaps/Web.md#phase-16) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 17](../roadmaps/Web.md#phase-17)


<a id="web-phase-17-project"></a>
### WEB DEVELOPMENT CHAPTER 17 PROJECT

#### PROJECT: PREVIEW-TO-PRODUCTION PIPELINE

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Ship reliably: build pipelines, hosting, containers, env separation.

**Chapter topic:** Deployment & CI/CD

**Unit storyline:** Continue the **Security, production, hire** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Write and rehearse an operational runbook for Deployment & CI/CD that connects Hosting Models and Environment Promotion, Docker, CI Pipelines, and Rollbacks and makes every important result inspectable.

#### LESSONS PRACTICED

- **17.1 — Hosting Models and Environment Promotion:** Add an executable Hosting Models and Environment Promotion procedure with verification and rollback or recovery guidance.
- **17.2 — Docker, CI Pipelines, and Rollbacks:** Add an executable Docker, CI Pipelines, and Rollbacks procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Deployment & CI/CD that connects Hosting Models and Environment Promotion, Docker, CI Pipelines, and Rollbacks and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused runbook artifact for Deployment & CI/CD.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- GitHub Actions.
- Docker.
- Render free web service or Cloudflare Pages free plan.

#### BUILD IT STEP BY STEP

1. Put a tested web app in GitHub and confirm its local production build succeeds.
2. Add a Dockerfile and run the container locally.
3. Create a GitHub Actions workflow that installs locked dependencies, lints, tests, and builds.
4. Connect a practice Vercel or Render project and enable a preview for pull requests.
5. Merge only after the checks pass and verify the production health route.
6. Introduce a temporary failing test and confirm the pipeline blocks it, then undo that test change.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/production/chapter-17-preview-to-production-pipeline
git commit -m "feat(preview-to-production-pipeline): complete chapter 17 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 17](../roadmaps/Web.md#phase-17) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 18](../roadmaps/Web.md#phase-18)


<a id="web-phase-18-project"></a>
### WEB DEVELOPMENT CHAPTER 18 PROJECT

#### PROJECT: REAL-TIME COLLABORATION BOARD

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

When REST is not enough: typed graphs, realtime, and webhooks.

**Chapter topic:** GraphQL, WebSockets & Modern APIs

**Unit storyline:** Continue the **Security, production, hire** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for GraphQL, WebSockets & Modern APIs that connects GraphQL Schema, Queries, and Trade-offs, WebSockets, SSE, and Webhooks and makes every important result inspectable.

#### LESSONS PRACTICED

- **18.1 — GraphQL Schema, Queries, and Trade-offs:** Implement or demonstrate GraphQL Schema, Queries, and Trade-offs in the shared unit project and add a focused check.
- **18.2 — WebSockets, SSE, and Webhooks:** Implement or demonstrate WebSockets, SSE, and Webhooks in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for GraphQL, WebSockets & Modern APIs that connects GraphQL Schema, Queries, and Trade-offs, WebSockets, SSE, and Webhooks and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for GraphQL, WebSockets & Modern APIs.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- React and TypeScript.
- Node.js and Socket.IO.
- PostgreSQL.

#### BUILD IT STEP BY STEP

1. Create a React TypeScript client, a Node.js Socket.IO server, and a small PostgreSQL database.
2. Build a board with cards that can be added and moved.
3. Save each accepted change in the database before broadcasting it to connected users.
4. Open two browser windows and confirm a change in one appears in the other.
5. Disconnect one window, make another change, reconnect, and reload the latest state.
6. Add an operation ID so resending the same action does not create a duplicate card.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/production/chapter-18-real-time-collaboration-board
git commit -m "feat(real-time-collaboration-board): complete chapter 18 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 18](../roadmaps/Web.md#phase-18) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 19](../roadmaps/Web.md#phase-19)


<a id="web-phase-19-project"></a>
### WEB DEVELOPMENT CHAPTER 19 PROJECT

#### PROJECT: PRODUCTION SAAS SLICE

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Public repos with READMEs beat certificate collections.

**Chapter topic:** Portfolio & Capstone Projects

**Unit storyline:** Continue the **Security, production, hire** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build a small runnable artifact for Portfolio & Capstone Projects that connects What Belongs in a Web Portfolio, Capstone Patterns That Hire and makes every important result inspectable.

#### LESSONS PRACTICED

- **19.1 — What Belongs in a Web Portfolio:** Implement or demonstrate What Belongs in a Web Portfolio in the shared unit project and add a focused check.
- **19.2 — Capstone Patterns That Hire:** Implement or demonstrate Capstone Patterns That Hire in the shared unit project and add a focused check.

#### SPECIFICATION

- Build a small runnable artifact for Portfolio & Capstone Projects that connects What Belongs in a Web Portfolio, Capstone Patterns That Hire and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused code artifact for Portfolio & Capstone Projects.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Next.js and TypeScript.
- PostgreSQL and Prisma.
- Secure sessions, Vitest, Playwright, Docker, and GitHub Actions.

#### BUILD IT STEP BY STEP

1. Create a Next.js TypeScript app with PostgreSQL and Prisma.
2. Add the User, Project, and Task schema, migrations, and small seed data.
3. Implement secure sign-up, sign-in, sign-out, and ownership checks on every project and task operation.
4. Build responsive list, detail, create, edit, loading, empty, error, and not-found screens.
5. Add unit, API, and one Playwright browser test for the main workflow.
6. Add Docker and a GitHub Actions check, deploy the app, and verify the deployed health route and main workflow.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/production/chapter-19-production-saas-slice
git commit -m "feat(production-saas-slice): complete chapter 19 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 19](../roadmaps/Web.md#phase-19) | [CONTINUE TO WEB DEVELOPMENT CHAPTER 20](../roadmaps/Web.md#phase-20)


<a id="web-phase-20-project"></a>
### WEB DEVELOPMENT CHAPTER 20 PROJECT

#### PROJECT: TIMED WEB INTERVIEW LAB

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Speak HTML→deploy fluently under time pressure.

**Chapter topic:** Web Developer Interviews

**Unit storyline:** Continue the **Security, production, hire** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Complete a timed rehearsal and debrief for Web Developer Interviews that connects Frontend and JavaScript Drills, Full-Stack Design and Behavioral and makes every important result inspectable.

#### LESSONS PRACTICED

- **20.1 — Frontend and JavaScript Drills:** Practice explaining or applying Frontend and JavaScript Drills under a timer and record the evidence and correction.
- **20.2 — Full-Stack Design and Behavioral:** Practice explaining or applying Full-Stack Design and Behavioral under a timer and record the evidence and correction.

#### SPECIFICATION

- Complete a timed rehearsal and debrief for Web Developer Interviews that connects Frontend and JavaScript Drills, Full-Stack Design and Behavioral and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- A focused rehearsal artifact for Web Developer Interviews.
- A lesson-coverage checklist with evidence for every mapped lesson.
- A validation record covering a normal case, a boundary case, and a safe failure case.

#### TECH STACK

- Node.js LTS.
- VSCodium or any text editor.
- Vitest and a timer; no new framework.

#### BUILD IT STEP BY STEP

1. Create separate javascript, api, and system-design folders.
2. Put one clearly worded prompt and starter file in each folder.
3. Add Vitest checks for the JavaScript problem and Supertest checks for the API task.
4. Set a timer, speak your assumptions aloud, and solve without copying an existing answer.
5. Run the prepared checks and correct only the failing behavior.
6. Repeat on another day with new inputs until you can finish and explain all three exercises clearly.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** Introduce one reversible invalid input, failed dependency, or incorrect assumption; detect it, recover, and preserve the evidence.
- **Reviewer check:** Another learner can reproduce the result from the README and identify which lesson each piece of evidence proves.

#### COMPLETION CRITERIA

- Every lesson ID is represented, all three validation paths are recorded, the artifact is reproducible, and its limitations are explicit.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- web-development/production/chapter-20-timed-web-interview-lab
git commit -m "feat(timed-web-interview-lab): complete chapter 20 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB DEVELOPMENT CHAPTER 20](../roadmaps/Web.md#phase-20) | [RETURN TO THE WEB DEVELOPMENT COURSE](../roadmaps/Web.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="web-main-portfolio-project"></a>
## WEB MAIN PORTFOLIO PROJECT

#### PROJECT: OPEN COMMUNITY SKILL EXCHANGE

#### DESCRIPTION

A complete web platform where people offer a skill, request help, schedule a learning session, exchange messages, and leave feedback. It gives a portfolio reviewer one polished workflow across frontend, backend, data, security, testing, performance, deployment, and realtime features.

#### WHO THIS IS FOR

- Learner searching for free peer help
- Volunteer offering a skill and managing requests
- Community moderator reviewing reports and keeping listings safe

#### WHAT USERS CAN DO

- Create a profile and publish, search, filter, and save skill offers
- Request, accept, schedule, complete, or cancel a peer-learning session
- Exchange realtime messages and receive status updates
- Report unsafe content while moderators act through protected tools

#### FREE AND OPEN-SOURCE TECH STACK

- HTML5, CSS3, and TypeScript
- React, Next.js, Node.js, and Express
- PostgreSQL with Prisma
- Zod, secure cookie sessions, and Argon2
- Socket.IO for realtime messages
- Vitest, React Testing Library, Supertest, and Playwright
- Docker Engine or Podman and GitHub Actions
- Free public demo: Cloudflare Pages, Render free web service, and Supabase Free Postgres; application code is open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Web Thinking:** Draw the browser, frontend, API, database, and realtime request paths and define the smallest complete user journey.
2. **Phase 2 - HTML Foundations:** Write semantic HTML for landing, search, offer details, forms, account, and moderation; ensure keyboard and screen-reader basics.
3. **Phase 3 - CSS Fundamentals:** Create design tokens and accessible styles for type, color, spacing, controls, focus, errors, and dark mode.
4. **Phase 4 - Responsive Layout:** Build mobile-first Grid/Flexbox layouts that work at 320px, 768px, desktop, zoom, long text, and reduced motion.
5. **Phase 5 - JavaScript Fundamentals:** Prototype offer creation, filtering, saved items, and form validation in plain JavaScript before framework code.
6. **Phase 6 - Browser APIs and Tooling:** Add modules, fetch, abortable search, local drafts, offline feedback, bundling, formatting, and linting with Vite.
7. **Phase 7 - TypeScript:** Define strict TypeScript domain, API, form, and error types; validate unknown network data at runtime.
8. **Phase 8 - React Fundamentals:** Build reusable React components and implement offer list, details, create form, and shared state with clear ownership.
9. **Phase 9 - React State Patterns:** Add routing, URL-based filters, TanStack Query caching, optimistic saves, rollback, and accessible dialogs/toasts.
10. **Phase 10 - Next.js:** Use Next.js for public and account pages with loading, error, not-found, metadata, and deliberate server/client boundaries.
11. **Phase 11 - Node.js and Express:** Build an Express TypeScript API with configuration, logging, validation, graceful shutdown, and health endpoints.
12. **Phase 12 - REST API Design:** Define OpenAPI endpoints, consistent errors, filters, cursor pagination, idempotent creates, and versioning rules.
13. **Phase 13 - Web Databases:** Create PostgreSQL/Prisma models, migrations, seeds, constraints, indexes, and a transaction for accepting a session.
14. **Phase 14 - Authentication and Authorization:** Implement sign-up, sign-in, sign-out, secure sessions, password hashing, CSRF protection, and object-level authorization.
15. **Phase 15 - Web Testing:** Add unit, component, API integration, database, security-negative, accessibility, and Playwright journey tests.
16. **Phase 16 - Performance and Web Vitals:** Measure Core Web Vitals and API latency, then fix one proven image, JavaScript, query, or caching bottleneck.
17. **Phase 17 - Deployment and CI/CD:** Create Docker builds and GitHub Actions checks, preview the app, deploy migrations safely, and verify health after release.
18. **Phase 18 - Realtime and Modern APIs:** Add Socket.IO messages/status updates with reconnection, authorization, ordering, and duplicate-event protection.
19. **PHASE 19 - Portfolio Capstones (REQUIRED CAPSTONE-COMPLETION STEP):** Polish seed accounts, moderation, empty/error states, screenshots, an open-source license, and one complete public demo workflow.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Practice explaining one frontend change, one API bug, one database decision, and the whole system design under a timer.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `open-community-skill-exchange` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: request model, semantic accessible interface, design system, and responsive layout**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "feat(skill-exchange): establish accessible responsive interface"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: typed client state, React flows, routing, caching, and full-stack application shell**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "feat(skill-exchange): implement typed full-stack user flows"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: API contracts, PostgreSQL transactions, authentication, and test pyramid**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "feat(skill-exchange): integrate secure API and persistence"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: performance, preview delivery, observability, and realtime collaboration checks**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "test(skill-exchange): verify performance delivery and realtime behavior"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: production SaaS slice, documentation, demo accounts, and public portfolio evidence**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "docs(skill-exchange): complete community skill exchange release"
git tag -a skill-exchange-v1.0.0 -m "First complete skill-exchange release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Run frontend, Express API, PostgreSQL, and realtime service locally with Docker Compose; run the complete test suite.
2. Create a Supabase Free project, store demo-only data, apply Prisma migrations, and copy its connection string into Render secrets.
3. Deploy the Express/Socket.IO service to a Render free web service, bind to `0.0.0.0:$PORT`, and configure `/health`.
4. Build the frontend and deploy its static output to Cloudflare Pages free plan; point it to the Render API and deployed WebSocket URL.
5. Allow only the public frontend origin, use secure production cookies, seed non-sensitive demo accounts, and test the full journey in two browsers.
6. Free hosting can sleep and has quotas; place a friendly cold-start message in the UI and keep Docker Compose as the permanent zero-cost deployment.

> **MAIN PROJECT NAVIGATION:** [REVIEW WEB PHASE 19](../roadmaps/Web.md#phase-19) | [REVIEW WEB PHASE 20](../roadmaps/Web.md#phase-20) | [RETURN TO THE WEB ROADMAP](../roadmaps/Web.md#phase-index)
