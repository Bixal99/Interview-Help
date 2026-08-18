# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Self-paced learners using this repository's technical roadmaps to study for software, data, cloud, security, and related roles. They work at a desk, often for long sessions, and need one lesson at a time rather than a giant Markdown dump.

## Product Purpose

Interview Help turns the existing README and roadmap Markdown into a W3Schools-style tutorial website. Success is: a learner can open a course, read one lesson, watch that lesson's YouTube on the same page, complete the matching phase project on its own page, and only then continue to the next phase.

## Positioning

The curriculum already exists in the repo. The site does not invent lessons, videos, or quizzes. It displays the connected story the files already tell. Computer Science is one `CS.md` tutorial (foundations, programming, OOP, then data structures onward).

## Operating Context

- Canonical teaching text: `content/roadmaps/*.md`, `content/guides/Projects.md`, `content/guides/Interview.md`, and README.md.
- Progress lives only in the browser (`localStorage`). No account, no paywall.
- Recommended Software Engineer loop: Computer Science Phases 1–25 → Git 1–10 → Computer Science Phases 26 onward.
- OOP is not a separate course in the UI. Old `/courses/object-oriented-programming` URLs redirect into Computer Science.

## Capabilities and Constraints

- Do not edit roadmap or teaching Markdown. Do not add or remove resources.
- One lesson per route. Phase projects are separate routes. Next phase stays disabled until that phase's project is marked complete.
- In-page YouTube uses URLs already in the source. No autoplay.
- Exercise UI may only restate practice already in the file.
- Old `/courses/[course]/learn#anchor` URLs must keep working.

## Brand Commitments

Product name is Interview Help. Visual reference is W3Schools tutorial chrome: black `#282A35` bar, green `#04AA6D`, page gray, white article, Segoe UI / Arial, clickable colored course cards on home. Do not copy the W3Schools logo, ads, Plus, Spaces, or certificates.

## Evidence on Hand

Real roadmaps, Projects.md cards, Interview.md, CV template, Job Tracker spreadsheet, and YouTube/docs/GitHub links already in those files. No testimonials, hour promises, or invented quiz banks.

## Product Principles

- Display the source; do not replace it.
- One lesson, then that phase's project, then the next chapter.
- The left index is a map; completion checks follow project completion.
- Light, low-arousal reading first.
- Home is a W3-style directory of clickable course cards, not a list of Start links.

## Accessibility & Inclusion

Keyboard access, skip link, visible focus, theme toggle kept as `ih-theme`, body text contrast at least 4.5:1.
