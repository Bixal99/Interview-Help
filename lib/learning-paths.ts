import type { CourseChapter, LearningPath, PathStep } from "./learning-model";

function range(from: number, to: number) {
  return Array.from({ length: to - from + 1 }, (_, index) => String(from + index));
}

export const courseChapters: Record<string, CourseChapter[]> = {
  "computer-science": [
    {
      id: "foundations",
      title: "Foundations",
      summary: "Before you write clever **programs**, you need a picture of what a computer actually does with the text you type: how **source code** becomes running instructions, where a variable lives in **memory**, and how to tell whether one **solution** will get painfully slower as the problem gets bigger.",
      phaseIds: ["1", "2"],
    },
    {
      id: "programming",
      title: "Programming fundamentals",
      summary: "This is how a **program** starts, remembers values, makes decisions, repeats work, and splits jobs into reusable pieces. You learn to run a **script**, read an error, and organize **code** so you are not copying the same lines forever.",
      phaseIds: range(3, 5),
    },
    {
      id: "thinking",
      title: "Object thinking",
      summary: "Plain lists of instructions get messy once a **program** has to remember many related facts at once. Here you see why people group data and behavior into **objects**: a blueprint (the **class**) and the real things created from it (the **instances**), including what each one stores and what it can do.",
      phaseIds: range(6, 8),
    },
    {
      id: "pillars",
      title: "Pillars",
      summary: "The four classic **object-oriented** ideas, in ordinary language: **encapsulation** hides internal details so invalid states cannot happen, **abstraction** shows a simple outside while the inside can change, **inheritance** reuses a shared shape when things really are the same kind, and **polymorphism** lets different objects answer the same request in their own way. You also learn when **composition** beats inheriting them.",
      phaseIds: range(9, 13),
    },
    {
      id: "tools",
      title: "Tools and modeling",
      summary: "Python’s everyday **object** tools, how to sketch the **relationships** in a problem, and how to notice design **smells** early so you can **refactor** them before they spread.",
      phaseIds: range(14, 16),
    },
    {
      id: "solid",
      title: "SOLID and patterns",
      summary: "Named **SOLID** rules for keeping change local, plus well-known **patterns** for creating **objects**, arranging them, and letting them collaborate without a tangle of special cases.",
      phaseIds: range(17, 20),
    },
    {
      id: "architecture",
      title: "Architecture and LLD",
      summary: "How to prove a **design** with **tests**, keep **business rules** away from screens and **databases**, and walk a small **low-level design** prompt under time pressure the way interviews expect.",
      phaseIds: range(21, 23),
    },
    {
      id: "oop-hire",
      title: "OOP portfolio and interviews",
      summary: "Turn the **designs** you can explain into published work, then practice saying the ideas out loud: **pillars**, **trade-offs**, and why you chose one structure over another.",
      phaseIds: ["24", "25"],
    },
    {
      id: "algorithms",
      title: "Data structures and algorithms",
      summary: "How information is arranged so a **program** can find, insert, or order it quickly: **lists**, **stacks**, **trees**, **hash maps**, **sorting**, **graphs**, and the repeating **algorithm** patterns behind interview problems. You build these by hand so they are mechanisms, not vocabulary.",
      phaseIds: range(26, 32),
    },
    {
      id: "oop-revision",
      title: "OOP revision",
      summary: "A return to **object** design after **data structures**, so you can connect **class** design to the collections and **algorithms** you just learned and still explain each **pillar** with a concrete example.",
      phaseIds: ["33"],
    },
    {
      id: "systems",
      title: "Systems",
      summary: "What is actually running your **code** on a machine, and how separate computers talk: **processes** versus **threads**, why programs **deadlock**, and how a request travels across a **network**.",
      phaseIds: ["34", "35"],
    },
    {
      id: "web-data",
      title: "Web, data, and security",
      summary: "How **browsers** and **servers** exchange messages, how to store and query information in a **database** without losing it, and how to protect what you built: **passwords**, **sessions**, and the attacks that show up the moment something is on the internet.",
      phaseIds: range(36, 38),
    },
    {
      id: "design",
      title: "Design",
      summary: "How teams build **software** that can change safely, how a single **server** grows into a **system** that survives real traffic, and what breaks when many machines must agree in a **distributed system** while some of them fail.",
      phaseIds: range(39, 41),
    },
    {
      id: "hire",
      title: "Hire",
      summary: "Prove the path with a **project** that uses several of these ideas together, then practice explaining your thinking under **interview** pressure: **coding**, **design**, and the story of how you work.",
      phaseIds: ["42", "43"],
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
      id: "erp",
      title: "ERP and modules",
      summary: "What an ERP is in ordinary language: one system for sales, stock, accounting, and the rest, and how Odoo splits that world into modules you can extend.",
      phaseIds: range(1, 4),
    },
    {
      id: "orm",
      title: "ORM and security",
      summary: "How Odoo stores business records in Python, how access rules decide who may see or change them, and why those rules belong next to the data model.",
      phaseIds: range(5, 7),
    },
    {
      id: "ui",
      title: "User interface",
      summary: "Screens, lists, forms, and the frontend pieces people click. You learn to present the same records so a user can work without seeing the database.",
      phaseIds: range(8, 12),
    },
    {
      id: "web",
      title: "Web requests and data",
      summary: "How Odoo talks over HTTP, how records move in and out, and how to connect Odoo to other systems without losing the rules you already defined.",
      phaseIds: range(13, 17),
    },
    {
      id: "hire",
      title: "Release and hire",
      summary: "Package, test, and deliver a module like a professional, then present that work as hireable skill.",
      phaseIds: range(18, 20),
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
      ...steps("computer-science", range(1, 25)),
      ...steps("git", range(1, 10)),
      ...steps("computer-science", range(26, 43)),
    ],
  },
  {
    id: "web-developer",
    title: "Web Developer",
    steps: [
      ...steps("computer-science", range(3, 5)),
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
      ...steps("computer-science", range(3, 25)),
      ...steps("git", range(1, 7)),
      ...steps("odoo", range(1, 20)),
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
