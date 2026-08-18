# Design

<!-- impeccable:design-system -->

## Product
Interview Help is a tutorial website for existing roadmap Markdown: one lesson per page, YouTube on that lesson, and a separate phase project page. Next phase stays off until the project is marked complete. Home is a W3Schools-style directory of clickable colored course cards.

## Surfaces
- `/` landing: dark hero, search, four featured course cards, eight smaller tiles, four path cards, continue strip
- `/courses` the same card grid for every tutorial
- `/courses/[course]` tutorial HOME with chapter list
- `/courses/[course]/phase/[phase]/[lesson]` one lesson
- `/projects/[course]/phase/[phase]` phase project
- `/progress` local progress, export/import/reset
- `/search`, `/interview`, `/about`, `/cv-template`, `/paths`, `/practice`

## Palette
Light (default CSS): paper `#F1F1F1`, ink `#1A1A1A`, accent `#04AA6D`, surface `#FFFFFF`, band `#282A35`.
Dark (`ih-theme` or `prefers-color-scheme`): charcoal paper `#1D2A35`, same green.
Home tiles only use per-course fills (`#D9EEE1`, `#FFF4A3`, `#FFC0C7`, `#96D4FA`, `#F3ECEA`). Tutorial chrome stays green and black.

## Type
`"Segoe UI", Arial, sans-serif` for UI and reading. JetBrains Mono for code. Body measure ~65–75ch.

## Layout
W3Schools tutorial grammar without ads or certificates: black utility bar, horizontal course subject bar, left tutorial index with green active row, white lesson column, green Prev/Next under the title and again at the bottom. Home is full-width cards, not a 900px list.

## Components
- Wordmark: Interview in white, Help in `#04AA6D`
- `btn-prev` and `btn-next` are both solid green
- Course cards: the whole tile is a `Link` to `/courses/[slug]`
- Code blocks: light Example pane and green Try it Yourself »
- YouTube: click-to-play inside the article
- Exercise block restates practice already in the Markdown
- Project page: Git checkpoint + project-complete checkboxes; Next phase disabled until complete

## Motion
None beyond focus and hover. Reading comes first.
