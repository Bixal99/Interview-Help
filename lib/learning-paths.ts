import type { CourseChapter, LearningPath, PathStep } from "./learning-model";

function range(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, index) => String(from + index));
}

export const courseChapters: Record<string, CourseChapter[]> = {
  "computer-science": [
    {
      id: "story-1",
      title: "I. Before you write code",
      summary: "Before you write clever **programs**, you need a picture of what a computer actually does with the text you type: how **source code** becomes running instructions, where a variable lives in **memory**, and how information is represented as bits underneath it all.",
      phaseIds: range(1, 5),
    },
    {
      id: "story-2",
      title: "II. Learning to control the machine",
      summary: "This is how a **program** starts, remembers values, makes decisions, repeats work, and splits jobs into reusable pieces. You learn to run a **script**, read an error, and organize **code** so you are not copying the same lines forever.",
      phaseIds: range(6, 15),
    },
    {
      id: "story-3",
      title: "III. The mathematical language of CS",
      summary: "How computer scientists reason instead of guessing: sets and logic, proof, counting and probability, statistics, and just enough linear algebra and calculus to read the notation later phases use without flinching.",
      phaseIds: range(16, 20),
    },
    {
      id: "story-4",
      title: "IV. Organizing large software",
      summary: "Plain lists of instructions get messy once a **program** has to remember many related facts at once. Here you see why people group data and behavior into **objects**, the four classic **pillars**, **SOLID**, well-known **patterns**, and how to design under interview pressure.",
      phaseIds: range(21, 30),
    },
    {
      id: "story-5",
      title: "V. Data structures & algorithms",
      summary: "How information is arranged so a **program** can find, insert, or order it quickly: **lists**, **stacks**, **trees**, **hash maps**, **sorting**, **graphs**, and the repeating **algorithm** patterns behind interview problems. You build these by hand so they are mechanisms, not vocabulary.",
      phaseIds: range(31, 48),
    },
    {
      id: "story-6",
      title: "VI. Inside the computer",
      summary: "What is actually running your **code** on a machine: the fetch-decode-execute cycle, memory and virtual memory, what makes a programming language a language, **processes** versus **threads**, and why programs **deadlock**.",
      phaseIds: range(49, 54),
    },
    {
      id: "story-7",
      title: "VII. Connecting computers",
      summary: "How one computer talks to another: addressing and layers, TCP/UDP and sockets, DNS, and the everyday protocols (HTTP and REST APIs) that applications actually speak.",
      phaseIds: range(55, 59),
    },
    {
      id: "story-8",
      title: "VIII. Data that survives",
      summary: "How to store and query information in a **database** without losing it: relational modeling, SQL, indexes and B-trees, transactions and ACID, and how databases scale.",
      phaseIds: range(60, 65),
    },
    {
      id: "story-9",
      title: "IX. Security & human-centered software",
      summary: "How to protect what you built and the people using it: threats and trust boundaries, cryptography, authentication, the common web attacks, and designing software people can actually use.",
      phaseIds: range(66, 71),
    },
    {
      id: "story-10",
      title: "X. Professional software engineering",
      summary: "How real engineering teams build and operate software: Git and collaboration, requirements, testing, architecture, CI/CD, containers, cloud fundamentals, and observability.",
      phaseIds: range(72, 80),
    },
    {
      id: "story-11",
      title: "XI. System design & distributed systems",
      summary: "What happens when a single **server** is no longer enough: scaling, caching, async and event-driven systems, the CAP theorem, consensus, reliability patterns, and full system-design walkthroughs.",
      phaseIds: range(81, 88),
    },
    {
      id: "story-12",
      title: "XII. Other core CS areas",
      summary: "What else a well-rounded computer scientist should understand: the shape of AI/ML, specialized computing platforms, and the ethics and societal impact of the systems you build.",
      phaseIds: range(89, 91),
    },
    {
      id: "story-13",
      title: "XIII. Maintaining real software",
      summary: "Most engineering work happens inside existing systems: reading before writing, changing legacy code safely, and communicating decisions clearly.",
      phaseIds: range(92, 94),
    },
    {
      id: "story-14",
      title: "XIV. Grand capstone",
      summary: "Stop studying isolated concepts and build the system: plan, build, break, measure, harden, and release one production-style application that uses everything above.",
      phaseIds: range(95, 98),
    },
    {
      id: "story-15",
      title: "XV. Interview & job readiness",
      summary: "Prove you can think and communicate like an engineer: coding interview method, fundamentals review, low-level design, system design, behavioral stories, and a full mock-interview loop.",
      phaseIds: range(99, 105),
    },
  ],
  git: [
    {
      id: "setup",
      title: "Setup and state",
      summary: "What Git is keeping track of on your machine: files, snapshots, and the difference between what you edited, what you staged, and what is already saved. You learn a safe everyday workflow before anyone else is involved.",
      phaseIds: range(1, 4),
    },
    {
      id: "collaborate",
      title: "Branch, merge, remotes",
      summary: "How to try an idea on a side path without breaking the main line of work, how to combine those paths, and how a shared copy on a server stays in sync with yours.",
      phaseIds: range(5, 7),
    },
    {
      id: "recover",
      title: "Undo, recover, rewrite",
      summary: "Mistakes are normal. You learn which Git moves can be undone safely, how to find lost work, and when rewriting history helps versus when it will confuse everyone else.",
      phaseIds: range(8, 10),
    },
    {
      id: "professional",
      title: "Release, workflow, trust",
      summary: "How teams ship, review, and trust a repository: releases, collaboration habits, and the checks that keep a project honest as more people touch it.",
      phaseIds: range(11, 15),
    },
  ],
  "web-development": [
    {
      id: "browser",
      title: "Browser and HTML/CSS/JS",
      summary: "What a web page actually is: structure you can read, style that lays it out, and scripts that react to clicks. You start in the browser so later frameworks are tools, not magic.",
      phaseIds: range(1, 7),
    },
    {
      id: "frameworks",
      title: "Frameworks",
      summary: "How modern frontend libraries help you build screens from reusable pieces, keep state from getting tangled, and talk to a server without refreshing the whole page.",
      phaseIds: range(8, 10),
    },
    {
      id: "backend",
      title: "Server, data, and APIs",
      summary: "The other half of a website: a program that receives requests, stores information, and answers in a format other programs can use. You learn routes, data, and the contract between frontend and backend.",
      phaseIds: range(11, 14),
    },
    {
      id: "production",
      title: "Security, production, hire",
      summary: "What changes when real people use the site: locking down common attacks, testing, deploying, and presenting the work as something you can be hired for.",
      phaseIds: range(15, 20),
    },
  ],
  data: [
    {
      id: "analyst",
      title: "Analyst core",
      summary: "How to ask a question of a table of facts: SQL, basic statistics, and the habits that keep numbers honest so a chart is an answer, not a decoration.",
      phaseIds: range(1, 10),
    },
    {
      id: "engineer",
      title: "Engineering depth",
      summary: "How data moves at scale: pipelines, warehouses, and the tools that keep streams of information flowing when a spreadsheet is no longer enough.",
      phaseIds: range(11, 18),
    },
    {
      id: "hire",
      title: "Portfolio and hire",
      summary: "Turn analysis and pipelines into work you can show, then practice the questions data interviews actually ask.",
      phaseIds: ["19", "20"],
    },
  ],
  networks: [
    {
      id: "bits",
      title: "Bits and links",
      summary: "The physical and local picture first: bits on a wire or in the air, and how two nearby machines even begin to share a link.",
      phaseIds: range(1, 4),
    },
    {
      id: "packets",
      title: "Packets and routes",
      summary: "Why a message is chopped into packets, how those packets find a path across many hops, and what happens when a path is busy or broken.",
      phaseIds: range(5, 8),
    },
    {
      id: "apps",
      title: "Transport and apps",
      summary: "Reliable delivery, names like DNS, and the everyday protocols (HTTP and friends) that applications actually speak.",
      phaseIds: range(9, 14),
    },
    {
      id: "scale",
      title: "Scale",
      summary: "What changes when a network is no longer a lab diagram: operations, security, and design choices that keep a large network usable.",
      phaseIds: range(15, 18),
    },
    {
      id: "hire",
      title: "Hire",
      summary: "Collect the story into work you can show and the explanations network interviews expect.",
      phaseIds: ["19", "20"],
    },
  ],
  "artificial-intelligence": [
    {
      id: "data",
      title: "Data and math",
      summary: "The ingredients before any model: how data is represented, and just enough math to see why a model can improve instead of guessing at random.",
      phaseIds: range(1, 3),
    },
    {
      id: "learn",
      title: "Classical learning",
      summary: "The older, still-useful methods: models that find patterns in tables and features you can often explain, before neural networks take over the story.",
      phaseIds: range(4, 9),
    },
    {
      id: "deep",
      title: "Deep learning",
      summary: "Stacked layers that learn their own features from examples: what a neural network is doing in plain language, and how training actually updates it.",
      phaseIds: range(10, 12),
    },
    {
      id: "transformers",
      title: "Transformers and LLM systems",
      summary: "How large language models read and generate text, how retrieval and agents wrap them into products, and how you tell whether the system is actually working.",
      phaseIds: range(13, 18),
    },
    {
      id: "hire",
      title: "Portfolio and hire",
      summary: "Ship something you can demonstrate, then practice explaining trade-offs, evaluation, and failure modes the way hiring conversations require.",
      phaseIds: ["19", "20"],
    },
  ],
  cybersecurity: [
    {
      id: "foundations",
      title: "Foundations",
      summary: "What you are protecting, who might try to break it, and the basic defensive habits that apply before any specialized tool. Labs stay authorized; the goal is understanding, not harm.",
      phaseIds: range(1, 6),
    },
    {
      id: "defend",
      title: "Defend",
      summary: "How to harden systems and applications so common mistakes do not become open doors: identity, configuration, and application security.",
      phaseIds: range(7, 10),
    },
    {
      id: "attack",
      title: "Attack",
      summary: "How defenders think like an attacker in a legal lab: the techniques that exist so you can recognize and stop them, not so you can use them on systems you do not own.",
      phaseIds: range(11, 12),
    },
    {
      id: "detect",
      title: "Detect",
      summary: "Noticing that something is wrong: logs, signals, and the work of spotting an incident before it spreads.",
      phaseIds: range(13, 14),
    },
    {
      id: "respond",
      title: "Respond",
      summary: "What you do after detection: contain the problem, recover, and learn so the same hole is not left open.",
      phaseIds: range(15, 18),
    },
    {
      id: "hire",
      title: "Hire",
      summary: "Turn the path into a story and portfolio that security hiring conversations can test.",
      phaseIds: ["19", "20"],
    },
  ],
  odoo: [
    {
      id: "story-1",
      title: "I. Understand the business before the code",
      summary: "ERP thinking first: processes, master data, Odoo apps, and the quote → delivery → invoice path before any module syntax.",
      phaseIds: range(1, 3),
    },
    {
      id: "story-2",
      title: "II. How Odoo actually works",
      summary: "Client, server, PostgreSQL, filestore, local setup, and navigating the Odoo source so you can run and inspect a real database.",
      phaseIds: range(4, 6),
    },
    {
      id: "story-3",
      title: "III. Your first Odoo module",
      summary: "Manifest, models, views, security, and the install/upgrade lifecycle of a complete first addon.",
      phaseIds: range(7, 8),
    },
    {
      id: "story-4",
      title: "IV. Modeling business data",
      summary: "Models, fields, relationships, and computed values that turn business facts into persistent Odoo records.",
      phaseIds: range(9, 12),
    },
    {
      id: "story-5",
      title: "V. Mastering the Odoo ORM",
      summary: "Environments, CRUD, domains, recordset operations, and performance habits that keep data-heavy modules honest.",
      phaseIds: range(13, 17),
    },
    {
      id: "story-6",
      title: "VI. Business rules and workflows",
      summary: "Methods, constraints, onchange, and state machines that encode approvals instead of hoping callers behave.",
      phaseIds: range(18, 21),
    },
    {
      id: "story-7",
      title: "VII. Building the user interface",
      summary: "XML data, form/list/search/kanban views, actions, menus, and xpath inheritance for screens people can use.",
      phaseIds: range(22, 26),
    },
    {
      id: "story-8",
      title: "VIII. Security and multi-company",
      summary: "Groups, ACLs, record rules, sudo discipline, and company isolation so the wrong user never sees the wrong row.",
      phaseIds: range(27, 31),
    },
    {
      id: "story-9",
      title: "IX. Extending existing Odoo",
      summary: "Model and view inheritance, delegation, and safe customization of Sales, Purchase, and Inventory.",
      phaseIds: range(32, 35),
    },
    {
      id: "story-10",
      title: "X. Advanced business features",
      summary: "Wizards, sequences, cron, automation, chatter, QWeb reports, and data files for real operations.",
      phaseIds: range(36, 42),
    },
    {
      id: "story-11",
      title: "XI. Internationalization and localization",
      summary: "Translatable strings, .po/.pot, locales, and accounting localization concepts for multilingual ERP.",
      phaseIds: range(43, 43),
    },
    {
      id: "story-12",
      title: "XII. Web development with Odoo",
      summary: "HTTP controllers, website pages, and portal surfaces with authentication and CSRF treated as first-class.",
      phaseIds: range(44, 46),
    },
    {
      id: "story-13",
      title: "XIII. APIs and integrations",
      summary: "RPC, custom endpoints, webhooks, SaaS sync, and payment flows with contracts and idempotency.",
      phaseIds: range(47, 52),
    },
    {
      id: "story-14",
      title: "XIV. Modern Odoo frontend",
      summary: "OWL components, services, assets, patches, and client actions for interactive dashboards.",
      phaseIds: range(53, 58),
    },
    {
      id: "story-15",
      title: "XV. Files, attachments and media",
      summary: "ir.attachment, filestore vs database storage, and secure upload/download for business documents.",
      phaseIds: range(59, 59),
    },
    {
      id: "story-16",
      title: "XVI. PostgreSQL and performance",
      summary: "Schema reality, transactions, indexes, ORM performance, and profiling without bypassing security.",
      phaseIds: range(60, 65),
    },
    {
      id: "story-17",
      title: "XVII. Testing and debugging",
      summary: "Logging, TransactionCase, business/security/UI/performance tests, and proof that modules still work after change.",
      phaseIds: range(66, 71),
    },
    {
      id: "story-18",
      title: "XVIII. CLI and developer tooling",
      summary: "odoo-bin workflows: install, upgrade, dev mode, tests, shell, and scaffold as a daily toolkit.",
      phaseIds: range(72, 72),
    },
    {
      id: "story-19",
      title: "XIX. Deployment and operations",
      summary: "Production config, Linux, HTTPS, workers, backups, Odoo.sh, Docker concepts, and monitoring.",
      phaseIds: range(73, 81),
    },
    {
      id: "story-20",
      title: "XX. Upgrades, migrations and maintenance",
      summary: "Versioning, schema/data migrations, hooks, upgrade-safe customization, and legacy module maintenance.",
      phaseIds: range(82, 88),
    },
    {
      id: "story-21",
      title: "XXI. Functional Odoo for developers",
      summary: "Core business apps end-to-end so engineers understand the flows their code changes.",
      phaseIds: range(89, 89),
    },
    {
      id: "story-22",
      title: "XXII. Real Odoo engineering",
      summary: "Requirements to ERP design, solution architecture, config vs custom vs integrate, maintainable code, and review.",
      phaseIds: range(90, 94),
    },
    {
      id: "story-23",
      title: "XXIII. Grand Odoo capstone",
      summary: "Engineer a complete business ERP: models, security, portal, API, OWL, tests, migration, and deployment.",
      phaseIds: range(95, 95),
    },
    {
      id: "story-24",
      title: "XXIV. Interview, portfolio and job readiness",
      summary: "Portfolio modules, mock interviews across ORM/UI/security/integrations/OWL, and hire-ready proof.",
      phaseIds: range(96, 96),
    },
  ],
  cloud: [
    {
      id: "core",
      title: "Cloud core",
      summary: "What “the cloud” actually is: someone else’s computers, billed as services, with identity, networks, and building blocks you compose instead of racking your own machines.",
      phaseIds: range(1, 7),
    },
    {
      id: "data",
      title: "Data and traffic",
      summary: "Where information lives and how requests reach it: storage, databases, and the paths traffic takes into and across a cloud account.",
      phaseIds: range(8, 10),
    },
    {
      id: "native",
      title: "Cloud native",
      summary: "Running software as small replaceable pieces that scale: containers, orchestration, and the habits that make that model survivable.",
      phaseIds: range(11, 12),
    },
    {
      id: "govern",
      title: "Governance and security",
      summary: "Who is allowed to do what, how accounts stay organized, and the controls that keep a cloud environment from becoming an expensive, leaky maze.",
      phaseIds: range(13, 16),
    },
    {
      id: "hire",
      title: "Reliability, FinOps, hire",
      summary: "Keeping systems up, watching the bill, migrating without a panic, and explaining those choices in a hiring conversation.",
      phaseIds: range(17, 20),
    },
  ],
  devops: [
    {
      id: "flow",
      title: "Flow, Linux, Git",
      summary: "The daily path from an idea to a machine: Linux as the place software runs, Git as the history of changes, and the flow that connects them.",
      phaseIds: range(1, 5),
    },
    {
      id: "delivery",
      title: "Artifacts and CI/CD",
      summary: "How code becomes a tested package that can be deployed again and again: build, check, and ship without a hero doing it by hand each time.",
      phaseIds: range(6, 8),
    },
    {
      id: "runtime",
      title: "Containers and Kubernetes",
      summary: "Packaging an app with its environment, then running many of those packages across machines so one failure does not take everything down.",
      phaseIds: range(9, 10),
    },
    {
      id: "infra",
      title: "IaC and cloud",
      summary: "Describing servers and networks as code so environments can be rebuilt, reviewed, and kept in sync instead of clicked together once and forgotten.",
      phaseIds: range(11, 13),
    },
    {
      id: "hire",
      title: "SRE, platform, hire",
      summary: "Reliability work, platform thinking, incidents, and the story that turns this path into a job conversation.",
      phaseIds: range(14, 20),
    },
  ],
  "it-administration": [
    {
      id: "support",
      title: "Support and endpoints",
      summary: "The people-facing start of IT: helping users, managing the computers on desks, and solving the problems that show up before any server room.",
      phaseIds: range(1, 4),
    },
    {
      id: "network",
      title: "Networks and virtualization",
      summary: "How office machines share a network, and how one physical computer can host several virtual ones so you are not buying a new box for every role.",
      phaseIds: range(5, 6),
    },
    {
      id: "identity",
      title: "Servers, AD, Microsoft cloud",
      summary: "Windows and Linux servers, the directory that decides who is who, and Microsoft 365 as the cloud side of the same identity story.",
      phaseIds: range(7, 10),
    },
    {
      id: "ops",
      title: "Recovery, security, operations",
      summary: "Backups you have actually tested, the security habits that belong in daily operations, and the runbooks that keep an environment from depending on one person’s memory.",
      phaseIds: range(11, 16),
    },
    {
      id: "hire",
      title: "Hybrid and hire",
      summary: "Tying on-premises and cloud together, then presenting that operational skill as hireable work.",
      phaseIds: ["17", "18"],
    },
  ],
};

function steps(course: string, ids: string[]): PathStep[] {
  return ids.map((phaseId) => ({ course, phaseId }));
}

export const learningPaths: LearningPath[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    steps: [
      ...steps("computer-science", range(1, 30)),
      ...steps("git", range(1, 10)),
      ...steps("computer-science", range(31, 105)),
    ],
  },
  {
    id: "web-developer",
    title: "Web Developer",
    steps: [
      ...steps("computer-science", ["6", "7", "8", "9", "14"]),
      ...steps("git", range(1, 7)),
      ...steps("web-development", range(1, 20)),
    ],
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    steps: steps("artificial-intelligence", range(1, 20)),
  },
  {
    id: "odoo-developer",
    title: "Odoo Developer",
    steps: [
      ...steps("computer-science", ["6", "7", "8", "9", "14", ...range(21, 30), "102"]),
      ...steps("git", range(1, 7)),
      ...steps("odoo", range(1, 96)),
    ],
  },
  {
    id: "it-administrator",
    title: "IT Administrator",
    steps: steps("it-administration", range(1, 18)),
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    steps: [
      ...steps("devops", ["1", "2", "3"]),
      ...steps("git", range(1, 15)),
      ...steps("devops", range(4, 20)),
    ],
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer",
    steps: [
      ...steps("cloud", ["1", "2"]),
      ...steps("git", range(1, 9)),
      ...steps("cloud", range(3, 20)),
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    steps: steps("cybersecurity", range(1, 20)),
  },
  {
    id: "data",
    title: "Data",
    steps: steps("data", range(1, 20)),
  },
];

export const learningPathById = Object.fromEntries(learningPaths.map((path) => [path.id, path]));

export function chaptersFor(slug: string, phaseIds: string[]): CourseChapter[] {
  const configured = courseChapters[slug];
  if (!configured) {
    return [{ id: "tutorial", title: "Tutorial", summary: "The topics in this tutorial, in the order you will study them.", phaseIds }];
  }
  return configured
    .map((chapter) => ({ ...chapter, phaseIds: chapter.phaseIds.filter((id) => phaseIds.includes(id)) }))
    .filter((chapter) => chapter.phaseIds.length);
}

export function sequentialPath(course: string, phaseIds: string[]): PathStep[] {
  return steps(course, phaseIds);
}

export const defaultPathByCourse: Record<string, string> = {
  "computer-science": "software-engineer",
  git: "software-engineer",
  "web-development": "web-developer",
  "artificial-intelligence": "ai-engineer",
  odoo: "odoo-developer",
  "it-administration": "it-administrator",
  devops: "devops-engineer",
  cloud: "cloud-engineer",
  cybersecurity: "cybersecurity",
  data: "data",
};

export function pathForCourse(course: string, activePath?: string): LearningPath | undefined {
  if (activePath && learningPathById[activePath]) return learningPathById[activePath];
  const fallback = defaultPathByCourse[course];
  return fallback ? learningPathById[fallback] : undefined;
}
