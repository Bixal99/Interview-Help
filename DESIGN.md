# Design

<!-- impeccable:design-system -->

## Product
Interview Help is a tutorial website for existing roadmap Markdown: one lesson per page, YouTube on that lesson, and a separate phase project page. Next phase stays off until the project is marked complete.

## Surfaces
- `/` library home: search, continue strip, course directory, README path links
- `/courses/[course]` tutorial HOME with chapter list
- `/courses/[course]/phase/[phase]/[lesson]` one lesson
- `/projects/[course]/phase/[phase]` phase project
- `/progress` local progress, export/import/reset
- `/search`, `/interview`, `/about`, `/cv-template`, `/paths`, `/practice`

## Palette
Light (default CSS): paper `#F6F3EC`, ink `#1C1917`, accent `#2F5D8A`, success `#3F6F4E`, muted `#57534E`.
Dark (`ih-theme` or `prefers-color-scheme`): warm charcoal paper, same accent.
One accent only. No W3 green.

## Type
Source Sans 3 for UI and reading. JetBrains Mono for code. Body measure ~65–75ch.

## Layout
W3Schools tutorial grammar without ads or certificates: dark utility bar, horizontal course subject bar, left tutorial index, dark title band with Prev/Next, paper lesson column. No right-rail “On this page”.

## Components
- `btn-prev` white/paper with ink border; `btn-next` solid study-blue
- Code blocks: near-black pane, 3px study-blue left rail (brief-pinned)
- YouTube: click-to-play in the title band, remaining videos as a compact list
- Exercise block restates practice already in the Markdown
- Project page: Git checkpoint + project-complete checkboxes; Next phase disabled until complete

## Motion
None beyond focus and hover. Reading comes first.
