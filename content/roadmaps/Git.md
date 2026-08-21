# The Zero-to-Hero Git and Git Workflows Roadmap

*Mohammad Bilal's self-paced path from the first saved snapshot to safe professional collaboration, recovery, releases, CI, repository security, and open-source contribution - told as one connected story in which every Git mechanism answers a problem left by the previous one.*

*Resources researched with Composio on 2026-08-17 through connected GitHub, YouTube, and web-search services. Selected videos were batch-checked as public and available; every required learning resource is free to access, and every required lab tool is open source.*

**Scope:** 15 phases · foundations, state, history, internals, branches, merges, remotes, undo, recovery, rewriting, daily tools, releases, repository scale, workflows, and trusted delivery.

```text
SAVE SAFELY -> UNDERSTAND STATE -> BUILD HISTORY -> SEE THE GRAPH
      |                |                |               |
      v                v                v               v
 version control   work/index/repo   atomic commits   objects/refs/HEAD
      +----------------+----------------+---------------+
                               |
                               v
 PARALLEL WORK -> INTEGRATE -> COLLABORATE -> UNDO -> RECOVER -> REWRITE
    branches        merges       remotes      safely    reflog     rebase
                               |
                               v
 DAILY TOOLS -> RELEASES -> REPOSITORY SCALE -> TEAM WORKFLOWS -> TRUSTED CI
```

---

## How to Read This Document

### Start here if Git is completely new to you

Git is not GitHub. Git works without an account or internet connection. GitHub is a proprietary hosting and collaboration platform with a usable free tier. GitLab offers an open-source Community Edition; Forgejo and Gitea are open-source Git forges. This roadmap teaches Git first, then uses hosting platforms only where pull requests, protected branches, and CI make the collaboration mechanism visible.

Use one disposable repository throughout the roadmap. Before a command, predict the working tree, index, branch pointer, and commit graph. Afterward, inspect them. When a command can discard work or rewrite shared history, reproduce it only in that disposable repository and prove the recovery path before using it on valuable work.

**Everyday words**

| Word | Meaning |
| --- | --- |
| **Version control** | A system for recording **meaningful versions** of files so you can compare them, restore them, and combine work |
| **Git** | The **open-source program** that records those versions locally |
| **Repository** | The project plus its **Git history** |
| **Commit** | A named **snapshot** with a reason |
| **Branch** | A **movable name** for one line of commits |
| **Remote** | Another copy of the repository reachable over a **network** |

**Words you will meet often**

| Word | Meaning |
| --- | --- |
| **Working tree** | The **checked-out files** on disk |
| **Index** | The proposed next snapshot, also called the **staging area** |
| **HEAD** | Identifies what is **checked out** |
| **Reference** | A name that points to an **object**, also called a ref |
| **Remote-tracking branch** | Your **local record** of a remote branch |
| **Reachability** | Whether a ref can still **lead to an object** |
| **Reflog** | A local **journal** of ref movement |

This is not a command catalogue. Every phase asks what state Git reads, what it changes, how to verify the result, whether shared history is safe, and how to recover. Read in order once. On revision, jump to **Why You Are Learning This**, **What Happens Inside**, the phase project, and **Why the Next Topic Is Needed**.

### The Beginner-Friendly Pattern Every Topic Follows

| Element | What it gives you |
| --- | --- |
| **Why You Are Learning This** | The limitation inherited from the previous phase |
| **The Problem This Solves** | The failure that forced the mechanism to exist |
| **See It Before You Memorize It** | Verified visual, interactive, primary, and practice resources |
| **Step-by-Step Explanation** | The theory and mechanics as one connected story |
| **The Main Idea in Simple Words** | The design move in one sentence |
| **What Happens Inside, One Step at a Time** | A compact state or commit-graph trace |
| **What You Gain, What It Costs, and Where It Can Fail** | Complexity, safety, and trade-offs |
| **Picture It Like This** | An analogy that survives after syntax fades |
| **Small Working Example** | A reproducible experiment with inspection commands |
| **How to Explain This in an Interview** | A beginner answer and a precise professional answer |
| **Practice Until It Feels Familiar** | Easy to hard, ending in observable evidence |
| **Why the Next Topic Is Needed** | The next limitation, stated explicitly |

**Diagram conventions.** Plain-text diagrams render reliably on GitHub. `A---B` is parent-to-child commit ancestry, a label at the right is a ref, `*` marks the checked-out commit, `|` and `v` mean “then,” `+--` joins paths, `X` marks failure, and `[WT]`, `[IDX]`, and `[DB]` mean working tree, index, and object database. Hashes are shortened for readability.

### Prerequisites and Companion Roadmaps

You need a computer where you may create disposable files and install the open-source Git CLI. A terminal helps; no programming or GitHub account is required for Phases 1-6. Use [`CS.md`](./CS.md) Phases 3-5 if shell and file concepts are new, [`CS.md`](./CS.md#phase-72) for broader software-engineering context, [`Networks.md`](./Networks.md) for SSH/HTTPS transport, [`DevOps.md`](./DevOps.md#phase-4) for delivery context, and [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md) for secret and supply-chain risk. Build the matching cards in [`Projects.md`](../guides/Projects.md#git-and-git-workflows) and drill the dedicated track in [`Interview.md`](../guides/Interview.md#track-v---git-and-version-control).

---

> **Integrated Git practice:** Each linked phase-project card in [`Projects.md`](../guides/Projects.md) ends with one specific Git checkpoint. Test the finished project first, commit only its named project path, verify the commit and clean working tree, then continue. Use [`Git.md` Phases 2-3](./Git.md#phase-2) if staging or commit selection is unfamiliar.

---

## The Whole-Journey Map

```text
 PHASES 1-4                PHASES 5-7                 PHASES 8-10
 FOUNDATION                COLLABORATION              SAFETY & HISTORY
 setup -> state ->         branch -> merge ->         undo -> rescue ->
 commits -> internals      remote/review              deliberate rewrite
       |                         |                           |
       +-------------------------+---------------------------+
                                 |
                                 v
 PHASES 11-13                              PHASES 14-15
 PRODUCTIVITY & SCALE                      PROFESSIONAL DELIVERY
 stash/worktree -> debug/release ->        workflow choice -> CI, trust,
 attributes/LFS/repo architecture          signing, security, maintenance
```

---

## Phase Index

|  # | Phase | Goal | Ready to move on when you can... |
| -: | ----- | ---- | -------------------------------- |
| 01 | [Foundations and Safe Setup](#phase-1---foundations-and-safe-setup) | Distinguish Git from hosting, configure it deliberately, and create a disposable workbench. | Explain local versus centralized versus distributed version control, initialize and clone repositories, and locate `.git`. |
| 02 | [The Three-State Model](#phase-2---the-three-state-model) | Predict movement among the working tree, index, and repository. | Use status and both diff forms to say exactly what the next commit contains. |
| 03 | [Commits and History](#phase-3---commits-and-history) | Build a readable graph of atomic snapshots and investigate ancestry. | Create coherent commits, compare revisions, and find when and why a change appeared. |
| 04 | [Git Internals and the Commit Graph](#phase-4---git-internals-and-the-commit-graph) | Inspect objects, refs, `HEAD`, reachability, reflogs, and storage. | Walk from a commit to a tree to a blob and explain why branch creation is cheap. |
| 05 | [Branching and Parallel Work](#phase-5---branching-and-parallel-work) | Isolate concurrent work with movable refs and clean it up safely. | Create, track, rename, compare, and delete branches while reading divergence correctly. |
| 06 | [Merging and Conflict Resolution](#phase-6---merging-and-conflict-resolution) | Integrate histories and resolve semantic conflicts with verification. | Predict fast-forward versus three-way merge, resolve several conflict types, and abort safely. |
| 07 | [Remotes, Collaboration, and Open Source](#phase-7---remotes-collaboration-and-open-source) | Exchange objects and review changes across repositories. | Distinguish fetch from integration, synchronize a fork, and complete a reviewed change. |
| 08 | [Safe Undoing Without Data Loss](#phase-8---safe-undoing-without-data-loss) | Choose restore, amend, reset, or revert from the affected state and sharing boundary. | Use an undo decision table and verify the result without guessing. |
| 09 | [Recovery and Shared-History Safety](#phase-9---recovery-and-shared-history-safety) | Recover lost refs and respond safely to published mistakes and secrets. | Restore a deleted branch, recover a lost commit, and explain `--force-with-lease`. |
| 10 | [Rebase and Intentional History Rewriting](#phase-10---rebase-and-intentional-history-rewriting) | Curate unpublished history without harming collaborators. | Reword, reorder, squash, fix up, drop, and split commits, then recover the original line. |
| 11 | [Productive Everyday Git](#phase-11---productive-everyday-git) | Switch context and move selected changes without hiding repository state. | Use stash, patch mode, cherry-pick, worktrees, aliases, and config scopes deliberately. |
| 12 | [Investigation, Tags, and Releases](#phase-12---investigation-tags-and-releases) | Trace regressions and turn a tested commit into an auditable release. | Automate a bisect, interpret blame carefully, create a signed tag, and write a changelog. |
| 13 | [Large and Multi-Repository Strategies](#phase-13---large-and-multi-repository-strategies) | Choose attributes, LFS, sparse checkout, submodules, subtrees, or monorepo practices by constraint. | Defend the repository boundary and reproduce a large-file or dependency checkout. |
| 14 | [Professional Team Workflows](#phase-14---professional-team-workflows) | Select a workflow and merge policy for team, release, and CI constraints. | Compare feature branches, GitHub/GitLab Flow, Git Flow, trunk-based, and forking workflows. |
| 15 | [CI, Trust, Security, and Repository Health](#phase-15---ci-trust-security-and-repository-health) | Protect the path from contributor identity to reviewed, verified, maintainable history. | Design required checks, signing, secret scanning, merge queues, hooks, and maintenance evidence. |

### Anchor Resources (bookmark these)

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Pro Git, 2nd Edition](https://git-scm.com/book/en/v2) | Official open-source book | Read Chapters 2-3 first and Chapter 10 after Phase 3. | It is free, primary, complete, and explains both porcelain and internals. |
| [Git reference documentation](https://git-scm.com/docs) | Official documentation | Check the exact command semantics and safety notes. | Current behavior belongs to the tool's own documentation. |
| [Learn Git Branching](https://learngitbranching.js.org/) | Open-source interactive exercise | Predict the graph, run a command, then compare. | It turns branches, merge, rebase, and remotes into visible state transitions. |
| [Oh My Git!](https://ohmygit.org/) | Open-source interactive game | Play with the real Git-backed terminal and live graph. | It makes refs and object movement tangible without risking valuable work. |
| [Git Katas](https://github.com/eficode-academy/git-katas) | Public open-source practice repository | Reproduce setup scripts and solve broken-history exercises. | Recovery confidence comes from repeatable failure, not reading alone. |
| [GitHub Skills: Introduction to Git](https://github.com/skills/introduction-to-git) | Free interactive exercise; platform not open source | Complete the CLI workflow and inspect every generated commit. | It supplies a realistic hosted collaboration exercise with a free tier. |
| [git/git](https://github.com/git/git) | Public open-source repository | Inspect documentation, tests, and contribution conventions. | Git itself is the most authoritative real-world implementation. |

---

<a id="phase-1"></a>

# PHASE 1 - Foundations and Safe Setup

**Track:** Foundations

**WHAT YOU WILL BE ABLE TO DO:** Explain why version control exists, distinguish Git from hosting, configure Git intentionally, and create a disposable repository whose evidence you can trust.

**WHAT YOU SHOULD KNOW FIRST:** Basic file and folder use. No programming, network account, or previous version-control knowledge is required.

**WHAT YOU HAVE LEARNED SO FAR:** Nothing is yet protecting the meaning or chronology of your changes. Manual copies preserve files but not trustworthy ancestry, authorship, or mergeable work.

## 1.1 From `final-final` Folders to a Distributed Repository

**WHY YOU ARE LEARNING THIS:** Before learning commands, you need the problem they solve and a workbench where every later failure is safe to reproduce.

**THE PROBLEM THIS SOLVES:** Timestamped folders such as `project-final-REAL` answer “what files did I copy?” but not “which logical change produced this state, who made it, why, and how do two lines of work combine?” Centralized systems add one shared history but can make the server the only complete authority. Git gives every clone the object history needed for local commits, branching, inspection, and recovery.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [How Git Works: Explained in 4 Minutes - ByteByteGo](https://www.youtube.com/watch?v=e9lnsKot_SQ) | Free verified video | Watch the working tree, staging area, local repository, and remote remain distinct. | It supplies the whole map before configuration details. |
| [Pro Git: Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) | Official open-source book | Compare local, centralized, and distributed models. | It names the architectural reason Git can work offline. |
| [Git downloads](https://git-scm.com/downloads) | Official documentation/software | Install Git for your operating system and verify the executable. | The required CLI is free and open source. |
| [Forgejo](https://forgejo.org/) and [Gitea](https://docs.gitea.com/) | Open-source Git forges | Notice what hosting adds above Git: accounts, review, permissions, and automation. | They keep Git separate from any one proprietary host. |

**STEP-BY-STEP EXPLANATION**

A version-control system records named states plus relationships. A local-only system keeps those versions on one machine. A centralized system keeps the authoritative history on a server and gives clients working copies. A distributed system gives each clone a full object database and refs, so history inspection, commits, and branches remain local operations; network commands exchange objects and ref updates later.

Git configuration has scopes: system, global user, and local repository. Set an honest author name/email, default branch, editor, and line-ending behavior; inspect where each value came from with `git config --list --show-origin`. Author identity is commit metadata, not authentication to a host. On Windows, understand `core.autocrlf` before changing it; later `.gitattributes` will make repository policy explicit.

`git init` creates administrative data in `.git`; it does not commit files. `git clone` copies objects, creates refs, checks out a working tree, and normally adds a remote named `origin`. `origin` is a convention, not a reserved server. The `.git` directory contains the database and references; deleting it leaves ordinary files but removes the repository's local history and configuration.

**THE MAIN IDEA IN SIMPLE WORDS:** Git is a local graph and object database first; hosting is a collaboration layer added later.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
project files                    .git/
   README.md         git init      objects/      stored content and commits
   notes.txt       ------------>   refs/         branch and tag names
                                    HEAD          what is checked out
                                    config        repository settings

clone = copy object database + create local refs + configure remote + checkout
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Model | What it buys | Cost / failure mode |
| --- | --- | --- |
| Manual copies | Nearly zero setup | No ancestry, merge model, intent, or reliable search |
| Centralized VCS | One governed history | Network/server availability controls many operations |
| Distributed Git | Full local history, cheap branches, offline commits | More refs and synchronization states to understand |
| Hosted forge | Review, permissions, issues, CI, releases | Platform policy and availability; GitHub/Bitbucket are not open-source Git itself |

**PICTURE IT LIKE THIS**

Manual folders are unlabeled photocopies. Git is a laboratory notebook whose entries cite their parents; a hosting platform is the shared reading room where people discuss and approve those entries.

**SMALL WORKING EXAMPLE**

```bash
git --version
git config --global user.name "Your Real Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --list --show-origin

mkdir git-workbench && cd git-workbench
git init
git status
git rev-parse --git-dir
```

This reads configuration, creates `.git`, and reports state; it creates no commit. Verify with `git log`, which should say the current branch has no commits yet.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** Git records versions on my computer; GitHub or another forge hosts a repository and adds collaboration features.

**Professional answer:** Git is a distributed content-addressed object database with a commit DAG and movable refs. A forge adds identity, authorization, review, policy, and automation. A clone normally has enough object history for local inspection and commits without contacting the server.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Explain Git versus GitHub and identify `.git` without opening random files inside it. |
| Medium | Compare system, global, and local configuration origins, then override the editor only in the disposable repository. |
| Hard | Create one repository with `init`, another with `clone`, and explain every extra ref/config item the clone created. |

**WHY THE NEXT TOPIC IS NEEDED:** A repository exists, but Git still cannot infer which current edits belong in the next meaningful snapshot. The three-state model solves that selection problem.

### Phase 1 Project - Reproducible Git Workbench

| Field | Requirement |
| --- | --- |
| **Scenario** | A new teammate must reproduce a safe Git laboratory on Windows, macOS, or Linux without inheriting hidden settings. |
| **Why this project exists** | Configuration mistakes contaminate every later exercise; the workbench makes assumptions visible. |
| **Skills being practiced** | Install verification, config scopes, `init`, `clone`, `.git`, Git-versus-forge explanation. |
| **Prerequisites** | Phase 1 only. |
| **Open-source tools required** | Git CLI and any plain-text editor; optional Forgejo/Gitea for a local forge. |
| **Starting repository state** | No `git-workbench` directory and no required online account. |

**Step-by-step tasks:** create the repository; record `git --version`; save sanitized `git config --list --show-origin`; create `README.md`; make a local bare remote with `git init --bare ../workbench-remote.git`; clone it beside the original; document which files belong to the working tree and which belong to Git administration.

**Commands to investigate or use:** `git --version`, `git config --show-origin --list`, `git init`, `git init --bare`, `git clone`, `git status`, `git rev-parse --git-dir`, `git remote -v`.

**Expected Git state or graph:** before the checkpoint, two working repositories point at one bare remote and `README.md` is untracked. The checkpoint creates the first intentional commit, which Phase 2 will use as its baseline.

**How to verify:** run every inspection command from a clean terminal, confirm both clones locate their own `.git`, and confirm no global credential or token appears in saved evidence.

| Difficulty | Requirement |
| --- | --- |
| Easy | Initialize the workbench and label Git versus hosting responsibilities. |
| Medium | Demonstrate global and local config precedence without changing another repository. |
| Hard | Recreate the lab from the README on a second path and compare sanitized outputs. |

**Deliberate failure or mistake to reproduce:** set the local author email incorrectly and capture `git config --local --get user.email`. **Recovery challenge:** correct only the local value, verify its origin, and leave global configuration unchanged.

**Common mistakes:** treating author email as login authentication, saving secrets in evidence, editing `.git` blindly, or assuming `origin` means GitHub.

**Definition of done:** a fresh user can reproduce the two-repository lab, identify every config scope used, and explain the state before and after the initial checkpoint commit. **Evidence to save / portfolio evidence:** setup README, sanitized commands, directory diagram, and one-minute screen recording. **Interview explanation:** explain why a clone is more than a downloaded folder. **Next-phase preparation:** after the checkpoint, make one new README edit without staging it so Phase 2 begins with a committed baseline and an unstaged change.

### Git Checkpoint

This project is mirrored in the [full **Reproducible Git Workbench** card](../guides/Projects.md#git-phase-1-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 1 complete?** [Build the full Phase 1 project card](../guides/Projects.md#git-phase-1-project) · [Continue to Phase 2](#phase-2---the-three-state-model)

---

<a id="phase-2"></a>

# PHASE 2 - The Three-State Model

**Track:** Foundations

**WHAT YOU WILL BE ABLE TO DO:** Predict and inspect the working tree, index, and repository; stage only the intended content; and read every common file state.

**WHAT YOU SHOULD KNOW FIRST:** Phase 1 and its untracked `README.md`.

**WHAT YOU HAVE LEARNED SO FAR:** Git can own a repository, but ownership alone does not say which edits form the next logical snapshot.

## 2.1 Working Tree, Index, Repository, and the File Lifecycle

**WHY YOU ARE LEARNING THIS:** Most beginner confusion comes from imagining only “saved” and “not saved.” Git has a deliberate middle proposal: the index.

**THE PROBLEM THIS SOLVES:** A file can contain two unrelated edits. Committing the whole file makes history dishonest; committing everything in the folder can leak generated files or secrets. The index lets you build the next snapshot intentionally.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Pro Git: Recording Changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) | Official open-source book | Follow untracked → staged → committed → modified. | It owns the canonical file lifecycle. |
| [Git Internals - How Git Works - Fear Not The SHA! - GitLab](https://www.youtube.com/watch?v=P6jD966jzlk) | Free verified Creative Commons video | Watch how the index becomes a tree. | It connects a visible state to the internal mechanism. |
| [Git Visualizer](https://git-school.github.io/visualizing-git/) | Free interactive visualizer | Run simple add/commit sequences and inspect labels. | It makes state changes visible before the graph becomes complex. |
| [Git Katas: basic exercises](https://github.com/eficode-academy/git-katas) | Public open-source exercises | Repeat staging and status tasks from clean setups. | Repetition makes `status` a reflex. |

**STEP-BY-STEP EXPLANATION**

The working tree is ordinary editable files. The index is a binary manifest of the exact paths, modes, and blob IDs proposed for the next commit. `HEAD` normally resolves to the current commit. `git status` compares working tree to index and index to `HEAD`; `git diff` shows the first comparison, while `git diff --staged` shows the second.

An untracked file exists only in the working tree. `git add` writes its content as a blob if needed and updates the index entry. Editing it again can make the same path both staged and modified: one version is in the index and a newer version is on disk. A commit reads the index, not “whatever is currently visible in the editor.” `.gitignore` affects untracked discovery; it does not stop tracking a file already committed.

**THE MAIN IDEA IN SIMPLE WORDS:** The index is your reviewed proposal for the next snapshot.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
untracked          staged                 committed
[WT: v1] --add--> [WT: v1][IDX: v1] --commit--> [WT: v1][IDX: v1][DB: v1]
                         |
                     edit again
                         v
                  [WT: v2][IDX: v1][DB: old]
                    git diff   git diff --staged
                    v2-v1          v1-old
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | What it buys | Cost / failure mode |
| --- | --- | --- |
| Stage everything | Fast for one-purpose changes | Unrelated edits and secrets can enter the snapshot |
| Stage paths | Clear path selection | Mixed concerns inside one file remain mixed |
| Stage patches | Atomic intent at hunk level | Requires careful review; dependent hunks can be split incorrectly |
| Ignore patterns | Removes generated noise | Already-tracked files stay tracked; broad patterns can hide required files |

**PICTURE IT LIKE THIS**

The working tree is a messy desk, the index is the carefully packed submission envelope, and the commit is the sealed archive copy. Editing the desk after packing does not alter the envelope.

**SMALL WORKING EXAMPLE**

```bash
printf "# Git Workbench\n" > README.md
git status --short
git diff
git add README.md
git diff --staged
printf "A second idea\n" >> README.md
git status
git diff
git diff --staged
git commit -m "docs: establish workbench purpose"
git status
```

Before committing, predict which version enters history. Verify with `git show HEAD:README.md`; the second line should remain only in the working tree.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** I edit in the working tree, stage what belongs in the next commit, and commit that staged snapshot.

**Professional answer:** `status` compares working tree/index and index/`HEAD`. `git diff` displays unstaged changes; `git diff --staged` displays the proposed tree delta. The index makes selective, atomic snapshots possible and is also used by merge machinery.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Produce and identify untracked, staged, committed, and modified states. |
| Medium | Make one path staged and modified simultaneously; prove which content will commit. |
| Hard | Use `git add -p` to divide two concerns in one file, then verify both commits reconstruct the final file. |

**WHY THE NEXT TOPIC IS NEEDED:** State selection creates snapshots, but a useful history also needs parent relationships, honest messages, and tools for asking how the project arrived here.

### Phase 2 Project - Three-State Change Journal

| Field | Requirement |
| --- | --- |
| **Scenario** | A reviewer doubts that the next commit contains only the promised change. Provide a state-by-state proof. |
| **Why this project exists** | It replaces “I think I staged it” with observable evidence. |
| **Skills being practiced** | File lifecycle, status, both diff directions, patch staging, ignores, untracking. |
| **Prerequisites** | Reproducible Git Workbench. |
| **Open-source tools required** | Git CLI and a text editor. |
| **Starting repository state** | One committed README plus one unstaged line from Phase 1. |

**Step-by-step tasks:** create `journal.md`, `.gitignore`, and a generated `build.log`; capture each file in every lifecycle state; put two concerns in `journal.md`; stage only one with `git add -p`; commit; then commit the second concern separately.

**Commands to investigate or use:** `git status --short`, `git diff`, `git diff --staged`, `git add`, `git add -p`, `git restore --staged`, `git check-ignore -v`, `git ls-files`.

**Expected Git state or graph:** `A---B---C main`, where B and C each represent one concern and `build.log` is absent from the index.

**How to verify:** `git show --stat B`, `git show --stat C`, `git ls-files`, and clean `git status`; save both pre-commit diffs.

| Difficulty | Requirement |
| --- | --- |
| Easy | Demonstrate all lifecycle states. |
| Medium | Stage and commit two concerns separately from one file. |
| Hard | Track a file, add it to `.gitignore`, prove it remains tracked, then untrack it without deleting the working copy. |

**Deliberate failure or mistake to reproduce:** stage the wrong hunk. **Recovery challenge:** unstage it without losing the working-tree edit, verify both diffs, then stage the correct hunk.

**Common mistakes:** reading only `status`, confusing `git diff` with `git diff --staged`, assuming ignore removes tracked content, or using destructive restore to solve an index-only problem.

**Definition of done:** every committed line was visible in a saved staged diff and the final status is clean. **Evidence to save / portfolio evidence:** lifecycle table, diff captures, two atomic commit IDs, and ignored-file proof. **Interview explanation:** walk through a path that is simultaneously staged and modified. **Next-phase preparation:** retain the three-commit graph for history queries.

### Git Checkpoint

This project is mirrored in the [full **Three-State Change Journal** card](../guides/Projects.md#git-phase-2-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 2 complete?** [Build the full Phase 2 project card](../guides/Projects.md#git-phase-2-project) · [Continue to Phase 3](#phase-3---commits-and-history)

---

<a id="phase-3"></a>

# PHASE 3 - Commits and History

**Track:** Foundations

**WHAT YOU WILL BE ABLE TO DO:** Create atomic commits, explain snapshot ancestry, compare revisions, and search history by content, path, author, or message.

**WHAT YOU SHOULD KNOW FIRST:** Phase 2's three-state model.

**WHAT YOU HAVE LEARNED SO FAR:** The index controls one snapshot. A project becomes understandable only when many snapshots form a readable chain of decisions.

## 3.1 Snapshots, Parents, Revision Syntax, and Commit Quality

**WHY YOU ARE LEARNING THIS:** Collaboration and recovery depend on commits being small enough to understand and connected well enough to navigate.

**THE PROBLEM THIS SOLVES:** A giant “misc changes” commit can be stored, but it is hard to review, revert, bisect, cherry-pick, or explain. Filenames and timestamps cannot express ancestry or intent.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Pro Git: Viewing History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History) | Official open-source book | Try formatting, path filters, and patch views. | It teaches history as a queryable graph. |
| [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) | Free open specification | Classify `feat`, `fix`, and breaking change intent. | Structured messages can support release automation without replacing judgment. |
| [How Git Works: Explained in 4 Minutes - ByteByteGo](https://www.youtube.com/watch?v=e9lnsKot_SQ) | Free verified video | Rewatch the snapshot and hash portion. | The concise visual reinforces that commits identify complete trees. |
| [git/git commit history](https://github.com/git/git/commits/master/) | Public open-source repository | Read messages and inspect changes from a mature project. | Real history reveals conventions and trade-offs better than toy slogans. |

**STEP-BY-STEP EXPLANATION**

A commit records a root tree, parent commit or commits, author, committer, timestamps, and message. The author represents who originally wrote the change; the committer represents who created this commit object, so rebases and applied patches can preserve one while changing the other. Because metadata and parent IDs are hashed too, replaying the same patch on a new parent produces a new commit ID.

Most ordinary commits have one parent. The first has none. A merge commit has two or more. Revision syntax names positions without copying hashes: `HEAD`, `HEAD^` (first parent), `HEAD~3` (three first-parent steps), `main..feature` (reachable from feature but not main), and `A...B` (symmetric difference, commonly with the merge base in diff contexts). Verify ambiguous expressions with `git rev-parse` and inspect the exact object with `git show`.

Atomic means one coherent reason that can stand, build, and be reverted as a unit - not “one file” or “few lines.” A good subject is imperative and specific; the body explains why, constraints, and non-obvious trade-offs. `git log -S<string>` finds commits where occurrence count changed; `-G<regex>` finds matching diff lines; path-limited logs and `--follow` investigate file history.

**THE MAIN IDEA IN SIMPLE WORDS:** A commit is a complete snapshot plus ancestry and intent; make each one a useful unit of reasoning.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
tree T1        tree T2        tree T3
   ^              ^              ^
   |              |              |
A (no parent) <- B (parent A) <- C (parent B)   main, HEAD

HEAD~2 = A        B..C = commits reachable from C but not B = {C}
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Practice | Gain | Cost / failure mode |
| --- | --- | --- |
| Small atomic commits | Review, revert, cherry-pick, and bisect precision | Requires staging discipline and sometimes temporary refactoring |
| Conventional format | Machine-readable release intent | Mechanical prefixes cannot rescue vague content |
| Rich bodies | Preserves rationale | Stale or copied explanations create false confidence |
| History rewriting before sharing | Clearer review story | Changes hashes and must respect the publication boundary |

**PICTURE IT LIKE THIS**

Each commit is a signed edition card for an entire library catalogue, with a pointer to the edition it descended from. The message explains why this edition deserved to exist.

**SMALL WORKING EXAMPLE**

```bash
git log --oneline --graph --decorate --all
git show --stat --format=fuller HEAD
git rev-parse HEAD HEAD^ HEAD~2
git diff HEAD~1..HEAD
git log --all --decorate --oneline -- journal.md
git log -S "second concern" --oneline -p
git log --grep="docs" --oneline
```

These are read-only. Before each query, write what set or difference you expect; compare that prediction with the output.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** A commit is a saved project snapshot with a message and a link to its parent.

**Professional answer:** A commit object identifies a tree, parent IDs, author/committer metadata, and message. Those bytes determine its ID. Atomic commits reduce review and recovery ambiguity; revision expressions select reachable graph sets rather than filename versions.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Draw three commits and resolve `HEAD`, `HEAD^`, and `HEAD~2`. |
| Medium | Split one mixed change into two independently revertible commits with honest messages. |
| Hard | Answer “when did this behavior change, who authored it, and why?” using `log`, `show`, `-S`, `-G`, and path history. |

**WHY THE NEXT TOPIC IS NEEDED:** Commit commands now work, but branches, reset, rebase, and recovery remain mysterious until you see the objects and movable references underneath.

### Phase 3 Project - Atomic History Exhibit

| Field | Requirement |
| --- | --- |
| **Scenario** | A code-review panel must understand a five-change feature without opening the final files first. |
| **Why this project exists** | It tests whether history communicates decisions instead of merely storing end state. |
| **Skills being practiced** | Atomic staging, author/committer inspection, revision syntax, comparison, history search, message quality. |
| **Prerequisites** | Three-State Change Journal. |
| **Open-source tools required** | Git CLI and any tiny text-based project. |
| **Starting repository state** | Clean `main` with at least three commits. |

**Step-by-step tasks:** plan five coherent changes; implement them in a deliberately mixed order; use patch staging to commit in logical order; add one explanatory body and trailer; draw the graph; answer five history questions in `history-investigation.md`.

**Commands to investigate or use:** `git add -p`, `git commit -v`, `git log --format=fuller`, `git show`, `git rev-parse`, `git diff A..B`, `git log -S`, `git log -G`, `git log --follow -- path`.

**Expected Git state or graph:** `A---B---C---D---E---F main`, with every commit buildable/readable and exactly one stated intent.

**How to verify:** recreate the final tree by checking out F, inspect every patch, and revert each feature commit in a disposable branch to prove it is a coherent unit.

| Difficulty | Requirement |
| --- | --- |
| Easy | Write five specific subjects and identify every parent. |
| Medium | Use content search to locate an introduced and later removed phrase. |
| Hard | Reorder the implementation into a reviewable sequence without changing the final tree. |

**Deliberate failure or mistake to reproduce:** create one “misc changes” commit. **Recovery challenge:** before publishing, split it into coherent commits and prove the final tree hash is unchanged.

**Common mistakes:** equating atomic with tiny, trusting abbreviated hashes without context, confusing author with committer, or using `A..B` and `A...B` interchangeably.

**Definition of done:** a reviewer can narrate the feature from `git log -p` alone. **Evidence to save / portfolio evidence:** graph, five commit IDs, message rationale, tree-hash comparison, and history investigation. **Interview explanation:** defend one boundary between two commits. **Next-phase preparation:** preserve all objects for plumbing inspection.

### Git Checkpoint

This project is mirrored in the [full **Atomic History Exhibit** card](../guides/Projects.md#git-phase-3-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 3 complete?** [Build the full Phase 3 project card](../guides/Projects.md#git-phase-3-project) · [Continue to Phase 4](#phase-4---git-internals-and-the-commit-graph)

---

<a id="phase-4"></a>

# PHASE 4 - Git Internals and the Commit Graph

**Track:** Mental Model

**WHAT YOU WILL BE ABLE TO DO:** Walk Git's content-addressed object database, resolve refs and `HEAD`, explain reachability, and distinguish loose objects, reflogs, and packfiles.

**WHAT YOU SHOULD KNOW FIRST:** Phase 3 commits and ancestry.

**WHAT YOU HAVE LEARNED SO FAR:** History is queryable, but commands still look unrelated until their common object-and-ref mechanism is visible.

## 4.1 Objects, Refs, `HEAD`, Reachability, and Storage

**WHY YOU ARE LEARNING THIS:** Internals turn branch, reset, rebase, and recovery from magic words into predictable graph operations.

**THE PROBLEM THIS SOLVES:** Without the object model, learners think a branch copies files, a commit stores a patch, detached `HEAD` is corruption, and a lost branch means lost content.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Lecture 6: Version Control (git) (2020) - Missing Semester](https://www.youtube.com/watch?v=2sjqTHE0zok) | Free university lecture | Build the DAG, objects, refs, and `HEAD` from first principles. | It derives Git from a data model rather than a command list. |
| [Git Internals - How Git Works - Fear Not The SHA! - GitLab](https://www.youtube.com/watch?v=P6jD966jzlk) | Free verified Creative Commons video | Follow blob → tree → commit → ref. | The visual explanation is both free and technically grounded. |
| [Pro Git: Git Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) | Official open-source book | Reproduce `hash-object`, `cat-file`, `mktree`, and `commit-tree`. | It is the primary internals walkthrough. |
| [git/git](https://github.com/git/git) | Public open-source source mirror | Read `Documentation/gitrepository-layout.txt` and one `t/` test. | The implementation and tests settle ambiguous mental models. |

**STEP-BY-STEP EXPLANATION**

Git's object database stores blobs (file content), trees (names/modes pointing to blobs or trees), commits (a tree, parents, metadata, message), and annotated tag objects. An object's ID is a hash over a type-and-length header plus its bytes. A filename is in a tree, not in a blob. A commit therefore fixes the complete root tree without copying unchanged objects.

Refs such as `refs/heads/main`, `refs/tags/v1.0.0`, and `refs/remotes/origin/main` contain object IDs or resolve through packed refs. A symbolic `HEAD` normally names the current branch; detached `HEAD` contains a commit ID directly. New detached commits are valid objects but need a ref before their reflog entries expire and unreachable objects are pruned.

Objects initially may be loose under `.git/objects/xx/...`. `git gc` and related maintenance can pack objects and delta-compress similar content for transfer/storage without changing object identity. Reflogs live separately from the commit graph and record local ref movements; they are recovery aids, not shared history. A reachable object can be followed from a ref through commits and trees. Unreachable is not immediately deleted, but it is not a retention promise.

**THE MAIN IDEA IN SIMPLE WORDS:** Git mostly creates immutable objects and moves small names that point to them.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
HEAD -> refs/heads/main -> commit C
                            | parent B
                            | tree T3
                            v
                       tree T3
                    src/ -> tree T2
                    README -> blob R
                              |
                              v
                           file bytes

A <- B <- C     reachable from main
          \
           D    valid but unreachable unless a ref/reflog still names it
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Mechanism | Gain | Cost / failure mode |
| --- | --- | --- |
| Content addressing | Deduplication, integrity, immutable identity | Any parent/metadata change creates a new commit ID |
| Movable refs | O(1)-like branch creation and flexible names | Moving the wrong ref can hide otherwise valid work |
| Reflogs | Local record of ref movement | Not normally pushed and eventually expires |
| Packfiles | Efficient storage and transfer | Plumbing output becomes less filesystem-obvious; use Git commands, not assumptions |

**PICTURE IT LIKE THIS**

Objects are immutable books filed by fingerprints. Trees are catalogues, commits are edition cards citing a catalogue and earlier editions, and branches are sticky notes that can move between cards.

**SMALL WORKING EXAMPLE**

```bash
git cat-file -t HEAD
git cat-file -p HEAD
git rev-parse HEAD^{tree}
git ls-tree -r HEAD
git cat-file -p HEAD:README.md
git show-ref
git symbolic-ref HEAD
git reflog --date=iso
git count-objects -vH
```

All commands are inspection-only. Record the commit, tree, and blob IDs, then prove the blob ID equals `git hash-object README.md` when the working file matches `HEAD`.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** Git stores file contents and directory snapshots as objects; commits point to a tree and parents, while branches are names pointing to commits.

**Professional answer:** Git is a content-addressed object store plus a ref database and index. Blobs lack filenames, trees bind names/modes to objects, commits bind a root tree to ancestry and metadata, and reachability from refs governs what history is named and eventually retained.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Walk `HEAD` → commit → tree → blob and record each type/ID. |
| Medium | Create identical content under two names and prove both tree entries use one blob. |
| Hard | Create a commit with plumbing commands in a disposable branch and make normal `git log` display it. |

**WHY THE NEXT TOPIC IS NEEDED:** One ref names one line of work. Parallel features need multiple movable refs and rules for switching, tracking, divergence, and cleanup.

### Phase 4 Project - Object Database Archaeology

| Field | Requirement |
| --- | --- |
| **Scenario** | An incident reviewer wants proof of what Git stores and why a supposedly “lost” commit may still exist. |
| **Why this project exists** | It grounds later recovery and rewriting in evidence. |
| **Skills being practiced** | Object traversal, refs, `HEAD`, detached state, reachability, loose/packed storage, reflogs. |
| **Prerequisites** | Atomic History Exhibit. |
| **Open-source tools required** | Git CLI; optional `xxd`/`od` for observation only. |
| **Starting repository state** | At least six commits and two identical-content paths. |

**Step-by-step tasks:** map every ref; traverse one commit to all reachable blobs; detach `HEAD` and commit; switch away; find the detached commit in the reflog; create `rescue/object-archaeology`; run safe maintenance; compare object counts before/after.

**Commands to investigate or use:** `git cat-file`, `git rev-parse`, `git ls-tree`, `git show-ref`, `git symbolic-ref`, `git reflog`, `git fsck --unreachable`, `git count-objects -vH`, `git gc`.

**Expected Git state or graph:** `A---B---C main` plus `C---D rescue/object-archaeology`; D is briefly unnamed, then made reachable.

**How to verify:** `git fsck`, `git show-ref`, `git cat-file -p D`, and the same tree/commit IDs before and after packing.

| Difficulty | Requirement |
| --- | --- |
| Easy | Produce an object inventory. |
| Medium | Rescue a detached commit using only inspection evidence. |
| Hard | Build a commit with plumbing and explain every byte category that affects its ID. |

**Deliberate failure or mistake to reproduce:** leave a detached commit unnamed and switch away. **Recovery challenge:** locate it via reflog, inspect it, then create a branch at that exact object.

**Common mistakes:** editing `.git/objects`, treating reflog as remote backup, assuming SHA abbreviations are globally unique, or teaching pack deltas as the commit model.

**Definition of done:** every graph node in the report resolves to an inspected object and the detached commit is reachable. **Evidence to save / portfolio evidence:** object map, commands/output, before/after counts, and rescue narrative. **Interview explanation:** explain detached `HEAD` without calling it an error. **Next-phase preparation:** retain the rescue branch for rename/delete practice.

### Git Checkpoint

This project is mirrored in the [full **Object Database Archaeology** card](../guides/Projects.md#git-phase-4-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 4 complete?** [Build the full Phase 4 project card](../guides/Projects.md#git-phase-4-project) · [Continue to Phase 5](#phase-5---branching-and-parallel-work)

---

<a id="phase-5"></a>

# PHASE 5 - Branching and Parallel Work

**Track:** Collaboration Mechanics

**WHAT YOU WILL BE ABLE TO DO:** Create, switch, track, compare, rename, and delete branches while preserving useful work and recognizing divergence.

**WHAT YOU SHOULD KNOW FIRST:** Phase 4 refs and `HEAD`.

**WHAT YOU HAVE LEARNED SO FAR:** Refs are cheap names for commits. Multiple refs now allow independent lines of work without copying project folders.

## 5.1 Branch Refs, Upstreams, Divergence, and Cleanup

**WHY YOU ARE LEARNING THIS:** Parallel work is useful only if you know where each ref points, what is checked out, and whether deletion loses the last useful name.

**THE PROBLEM THIS SOLVES:** Editing one shared line forces unfinished changes to collide. Copying folders avoids one collision but loses ancestry. Long-lived branches reduce immediate interference while accumulating integration risk.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Learn Git Branching](https://learngitbranching.js.org/?locale=en_US) | Open-source interactive simulator | Complete branch, `HEAD`, relative-ref, and remote-branch levels. | Predicting label movement is the core branch skill. |
| [Learn Git - Full Course for Beginners - freeCodeCamp.org](https://www.youtube.com/watch?v=zTjRZNkhiEU) | Free verified video | Pause before each switch/branch action and draw the graph. | The evolving repository connects syntax to state. |
| [Pro Git: Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) | Official open-source book | Relate `HEAD` and branch files to commits. | It explains why branches are lightweight. |
| [Oh My Git!](https://ohmygit.org/) | Open-source Git learning game | Watch branches and `HEAD` move in a real repository. | It counters the simulator limitation with real Git. |

**STEP-BY-STEP EXPLANATION**

`git switch -c feature/x` creates `refs/heads/feature/x` at the current commit, makes `HEAD` symbolic to it, and updates the working tree/index if necessary. A commit creates an object whose parent is the current tip, then advances that branch. Switching branches does not “move commits”; it moves `HEAD` and checks out the selected tree.

A local branch and a remote-tracking ref are different. An upstream relationship lets status, pull, and push defaults compare the local branch with (for example) `origin/feature/x`. “Ahead 2, behind 1” means each tip reaches commits the other does not; it is not a count of changed files. Inspect with `git branch -vv`, `git log --left-right --cherry-pick A...B`, and `git merge-base A B`.

Delete a merged branch with `git branch -d`; Git refuses if its tip is not merged into the current upstream context. `-D` overrides that safety and should follow an explicit reachability check. Branch names should encode purpose and remain short-lived by default. Long-lived release branches are a deliberate workflow choice, not a storage habit.

**THE MAIN IDEA IN SIMPLE WORDS:** A branch is a movable label for a line of commits; divergence is a graph fact, not a folder conflict.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
A---B---C  main
     \
      D---E  feature/search, HEAD

commit on feature:
A---B---C  main
     \
      D---E---F  feature/search, HEAD
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Branch pattern | Gain | Cost / failure mode |
| --- | --- | --- |
| Short-lived feature branch | Focused review, small divergence | Requires frequent integration and small scope |
| Direct trunk work | Immediate integration | Needs strong tests, flags, and team discipline |
| Long-lived release branch | Stable maintenance line | Repeated merges/cherry-picks and drift |
| Forced deletion | Removes obsolete refs | Can hide the last convenient name for unmerged work |

**PICTURE IT LIKE THIS**

Branches are labeled bookmarks in one book of history, not photocopies. Creating a bookmark is cheap; leaving two readers to write different endings for months makes reconciliation expensive.

**SMALL WORKING EXAMPLE**

```bash
git switch -c feature/search
printf "search\n" > search.txt
git add search.txt && git commit -m "feat: add search placeholder"
git switch main
printf "policy\n" > policy.txt
git add policy.txt && git commit -m "docs: record project policy"
git log --oneline --graph --decorate --all
git branch -vv
git merge-base main feature/search
```

Verify the two tips and common ancestor before integrating anything.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** A branch is a named line of commits that lets me work without moving `main`.

**Professional answer:** A local branch is a ref under `refs/heads`; `HEAD` normally points symbolically to the checked-out branch. An upstream is configuration connecting a local branch to a remote-tracking ref. Ahead/behind counts describe asymmetric reachability.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Create, switch, rename, and safely delete a merged branch. |
| Medium | Draw and produce a branch that is two ahead and one behind its upstream. |
| Hard | Audit ten branches, prove which tips are reachable, and propose safe cleanup without deleting first. |

**WHY THE NEXT TOPIC IS NEEDED:** Parallel histories eventually need one deliverable. Merge uses ancestry and a merge base to combine them, but overlapping intent can require a human decision.

### Phase 5 Project - Parallel Feature Branch Lab

| Field | Requirement |
| --- | --- |
| **Scenario** | Three developers work on search, documentation, and a hotfix from different starting commits. |
| **Why this project exists** | It tests parallel graph reasoning before merge complexity is introduced. |
| **Skills being practiced** | Creation, switching, naming, upstreams, ahead/behind, comparison, rename/delete, reachability. |
| **Prerequisites** | Object Database Archaeology. |
| **Open-source tools required** | Git CLI and the local bare remote. |
| **Starting repository state** | Clean `main`, one bare remote, no feature branches. |

**Step-by-step tasks:** create three branches; commit distinct work; publish two; configure one upstream explicitly; advance the bare remote from the second clone; fetch; document divergence; rename one local branch; safely delete only a proven-merged practice branch.

**Commands to investigate or use:** `git switch -c`, `git branch -m`, `git branch -d`, `git branch -vv`, `git push -u`, `git fetch`, `git merge-base`, `git log --left-right --graph --all`.

**Expected Git state or graph:** at least three tips from two bases, one local/upstream divergence, and no lost commits after cleanup.

**How to verify:** save `show-ref`, `branch -vv`, graph, merge bases, and a reachability explanation for each deletion.

| Difficulty | Requirement |
| --- | --- |
| Easy | Create and name branches consistently. |
| Medium | Produce and explain ahead/behind state. |
| Hard | Prove cleanup safety using graph queries rather than GUI color. |

**Deliberate failure or mistake to reproduce:** try `git branch -d` on an unmerged branch. **Recovery challenge:** explain the refusal, create a safety tag or backup branch, and integrate or retain the work instead of forcing deletion blindly.

**Common mistakes:** confusing local and remote-tracking refs, using `checkout` as one mental action for several behaviors, deleting based on age alone, or treating branches as environments forever.

**Definition of done:** every branch has a purpose, owner/upstream status, and evidence-backed keep/delete decision. **Evidence to save / portfolio evidence:** branch audit, graph, naming policy, and cleanup log. **Interview explanation:** explain ahead/behind without saying “newer files.” **Next-phase preparation:** keep two divergent branches for conflict work.

### Git Checkpoint

This project is mirrored in the [full **Parallel Feature Branch Lab** card](../guides/Projects.md#git-phase-5-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 5 complete?** [Build the full Phase 5 project card](../guides/Projects.md#git-phase-5-project) · [Continue to Phase 6](#phase-6---merging-and-conflict-resolution)

---

<a id="phase-6"></a>

# PHASE 6 - Merging and Conflict Resolution

**Track:** Collaboration Mechanics

**WHAT YOU WILL BE ABLE TO DO:** Predict fast-forward and three-way merges, read conflict stages, resolve text/rename/delete/binary cases, abort or continue safely, and verify semantics.

**WHAT YOU SHOULD KNOW FIRST:** Phase 5 divergence and merge bases.

**WHAT YOU HAVE LEARNED SO FAR:** Branches isolate changes; isolation becomes liability when independent histories must produce one correct tree.

## 6.1 Merge Bases, Merge Commits, Conflicts, and Verification

**WHY YOU ARE LEARNING THIS:** Git can combine non-overlapping changes automatically, but only a human or domain test can decide conflicting intent.

**THE PROBLEM THIS SOLVES:** Copy-pasting final files discards ancestry and can silently overwrite one side. Automatic “choose ours/theirs” can produce a syntactically clean but behaviorally wrong result.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Git Branching and Merging - Detailed Tutorial - SuperSimpleDev](https://www.youtube.com/watch?v=Q1kHG842HoI) | Free verified video | Draw the graph before each merge and compare result. | It provides a detailed visual walkthrough; open directly because embedding is disabled. |
| [GitHub Skills: Resolve Merge Conflicts](https://github.com/skills/resolve-merge-conflicts) | Free public MIT exercise; platform not open source | Complete the web conflict, then reproduce it in CLI. | It adds hosted workflow context but does not replace deeper local labs. |
| [Pro Git: Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) | Official open-source book | Identify fast-forward, common ancestor, and merge commit. | It anchors terminology and mechanisms. |
| [Git Katas](https://github.com/eficode-academy/git-katas) | Public open-source exercises | Repeat merge and conflict setups. | Deliberate repetition builds safe abort/continue habits. |

**STEP-BY-STEP EXPLANATION**

If the current tip is an ancestor of the other tip, Git can fast-forward the current ref without creating a commit. Otherwise, a three-way merge compares both tips with their best common ancestor. Non-overlapping edits combine. Conflicting edits put up to three versions in index stages: base (1), ours/current (2), theirs/incoming (3), plus conflict markers in a working file.

Resolve the desired final content, not the markers. `git add` marks a path resolved by updating stage 0. Then test, inspect `git diff --check` and the staged result, and `git commit` or `git merge --continue`. `git merge --abort` returns toward the pre-merge state when possible. Rename/delete conflicts require understanding intended path identity; binary conflicts need a chosen or regenerated artifact because line merging is unavailable.

`rerere` records a conflict shape and your resolution so repeated merges/rebases can reuse it. It is a productivity aid, not correctness proof; inspect and test reused results. External merge tools may help presentation, but the index and final tree remain the authority.

**THE MAIN IDEA IN SIMPLE WORDS:** Merge combines two tips relative to a common past; conflicts ask you to choose the correct future.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
fast-forward                         three-way
A---B main                           A---B---C main
     \                                    \ 
      C feature                            D---E feature

main moves to C                       merge base B + tips C/E
                                      -> A---B---C---M main
                                             \     /
                                              D---E
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Gain | Cost / failure mode |
| --- | --- | --- |
| Fast-forward | Simple linear graph | Hides explicit integration event unless policy disables it |
| Merge commit | Preserves topology and shared safety | More graph nodes; careless merges obscure intent |
| Whole-side resolution | Fast for generated/binary ownership | Can discard valid changes silently |
| `rerere` | Reuses known resolutions | Reused resolution may be semantically stale |

**PICTURE IT LIKE THIS**

Two editors annotate the same earlier manuscript. A three-way merge compares both edited copies with the shared original; a conflict is a paragraph where grammar cannot decide the intended meaning.

**SMALL WORKING EXAMPLE**

```bash
git switch main
git merge-base main feature/search
git merge --no-commit feature/search
git status
git ls-files -u
git diff --cc
# edit the final intended content, then:
git add <resolved-path>
git diff --staged --check
git commit
git log --oneline --graph --decorate --all
```

Use `git merge --abort` instead of random resets if the experiment must stop before the commit.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** Git compares both branches with their common ancestor, combines safe changes, and asks me to resolve overlapping intent.

**Professional answer:** A three-way merge uses merge base, ours, and theirs. Conflicted index entries occupy stages 1-3 until a resolved stage-0 entry is added. I inspect, resolve semantically, test, review the staged tree, then continue; abort is the safe exit before completion.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Produce and draw both fast-forward and true merge-commit outcomes. |
| Medium | Resolve a content conflict and explain every marker and index stage. |
| Hard | Resolve rename/rename, modify/delete, and binary ownership scenarios; enable `rerere` and verify reuse. |

**WHY THE NEXT TOPIC IS NEEDED:** A correct local merge is still local. Teams need to exchange objects and refs, review proposed integration, and enforce policy on shared branches.

### Phase 6 Project - Conflict Resolution Gauntlet

| Field | Requirement |
| --- | --- |
| **Scenario** | Two contributors independently change content, rename a file differently, delete a modified path, and replace a binary fixture. |
| **Why this project exists** | It proves conflict resolution is a domain decision with verification, not marker deletion. |
| **Skills being practiced** | Merge bases, FF/three-way merges, conflict stages, abort/continue, conflict types, tools, `rerere`, testing. |
| **Prerequisites** | Parallel Feature Branch Lab. |
| **Open-source tools required** | Git CLI; optional Meld/KDiff3 as an open-source merge viewer. |
| **Starting repository state** | Four prepared divergent branch pairs in a disposable clone. |

**Step-by-step tasks:** predict each merge; reproduce content, rename, modify/delete, and binary conflicts; inspect stages; abort and repeat one merge; resolve according to written requirements; enable `rerere`; recreate a conflict and inspect reused resolution.

**Commands to investigate or use:** `git merge-base`, `git merge --no-commit`, `git status`, `git ls-files -u`, `git diff --cc`, `git checkout --conflict=diff3`, `git merge --abort`, `git config rerere.enabled true`.

**Expected Git state or graph:** four integration commits, each with two parents and a tested final tree; the report includes the merge base and resolution decision.

**How to verify:** automated fixture checks, `git diff --check`, clean status, `git show --cc`, and graph proof of both parents.

| Difficulty | Requirement |
| --- | --- |
| Easy | Resolve one text conflict. |
| Medium | Resolve rename and delete conflicts with written intent. |
| Hard | Reuse a `rerere` resolution, challenge it with changed semantics, and explain why tests remain mandatory. |

**Deliberate failure or mistake to reproduce:** accept “ours” for the entire file even though one incoming line is required. **Recovery challenge:** abort before committing or revert/re-merge in a disposable branch, restore the intended line, and prove the test catches the bad resolution.

**Common mistakes:** interpreting ours/theirs from a GUI without current-operation context, deleting markers without understanding base, committing untested resolution, or using a destructive reset to abort casually.

**Definition of done:** all four conflicts produce correct tested trees and every decision is documented. **Evidence to save / portfolio evidence:** before/after graphs, index-stage capture, test output, and resolution rationale. **Interview explanation:** narrate the three-way inputs and verification. **Next-phase preparation:** publish the integrated repository to the local bare remote.

### Git Checkpoint

This project is mirrored in the [full **Conflict Resolution Gauntlet** card](../guides/Projects.md#git-phase-6-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 6 complete?** [Build the full Phase 6 project card](../guides/Projects.md#git-phase-6-project) · [Continue to Phase 7](#phase-7---remotes-collaboration-and-open-source)

---

<a id="phase-7"></a>

# PHASE 7 - Remotes, Collaboration, and Open Source

**Track:** Collaboration Mechanics

**WHAT YOU WILL BE ABLE TO DO:** Fetch, integrate, push, synchronize forks, manage multiple remotes, review pull/merge requests, and respect protected shared history.

**WHAT YOU SHOULD KNOW FIRST:** Branching and conflict resolution.

**WHAT YOU HAVE LEARNED SO FAR:** The local graph can integrate parallel work. Distribution adds independent copies whose refs move at different times and whose shared branches need human and automated gates.

## 7.1 Object Exchange, Remote-Tracking Refs, Forks, and Review

**WHY YOU ARE LEARNING THIS:** Professional Git means understanding exactly what crosses the network and separating download from integration.

**THE PROBLEM THIS SOLVES:** Treating `pull` as “sync” hides two operations and makes failures hard to diagnose. Treating `origin/main` as live server state leads to stale decisions. Direct pushes bypass review and required evidence.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [GitHub Skills: Introduction to GitHub](https://github.com/skills/introduction-to-github) | Free public MIT exercise; proprietary platform/free tier | Complete branch → commit → pull request → merge. | It shows the hosting layer while Git remains the data model. |
| [GitHub Skills: Review Pull Requests](https://github.com/skills/review-pull-requests) | Free public MIT exercise; proprietary platform/free tier | Assign, comment, suggest, approve, and merge; use manual review if course automation stalls. | Review is a collaboration state machine, not a Git object. |
| [Pro Git: Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) | Official open-source book | Add, inspect, fetch, push, and rename remotes. | It precisely separates refs and transport. |
| [Forgejo](https://forgejo.org/), [Gitea](https://docs.gitea.com/), [GitLab CE mirror](https://github.com/gitlabhq/gitlabhq) | Open-source forge options | Compare pull/merge requests, permissions, releases, and CI. | They prevent GitHub from being mistaken for Git or the only professional host. |

**STEP-BY-STEP EXPLANATION**

A remote is a named set of fetch/push URLs and refspecs. `git fetch origin` negotiates missing objects and updates remote-tracking refs such as `origin/main`; it does not merge them into the current branch or rewrite working files. `git pull` runs fetch followed by a configured integration method - merge or rebase - so inspect and fetch separately while learning. `git push` sends needed objects and requests a remote ref update; the server may reject non-fast-forward or policy-violating updates.

Remote-tracking refs are local observations updated by network operations. `origin` is only the default remote name created by clone. With a fork, commonly call your writable fork `origin` and the source repository `upstream`; fetch upstream, integrate upstream/main locally, then push the updated branch/fork. Never merge a remote-tracking ref into itself - it is not checked out.

A pull request (GitHub/Forgejo/Gitea) or merge request (GitLab) is host metadata around a proposed ref integration: diff, discussion, review states, checks, ownership, and merge choice. Keep changes small, describe why/test/risk, respond to review with commits, distinguish blocking issues from suggestions, and never expose secrets to untrusted CI. Protected branches and required checks prevent certain ref updates; Git itself does not provide those server policies.

**THE MAIN IDEA IN SIMPLE WORDS:** Fetch updates your knowledge; integration changes your branch; push asks another repository to move a ref.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
remote server:        A---B---C  main
                           |
                      git fetch
                           v
local:                A---B---C  origin/main
                           \
                            D---E  feature, HEAD

pull = fetch + configured merge/rebase
push = send missing objects + request remote ref movement
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Action/policy | Gain | Cost / failure mode |
| --- | --- | --- |
| Fetch then inspect | Explicit, safe state update | One extra decision before integration |
| Pull with configured strategy | Convenience | Hides the boundary; may create surprising merge/rebase |
| Forking workflow | Permission isolation and open contribution | Two remotes and synchronization overhead |
| Protected main + review | Quality and audit evidence | Queue/review delay; bad checks can become bureaucracy |

**PICTURE IT LIKE THIS**

Fetch downloads the latest map; it does not drive your car. Merge/rebase chooses a route onto your road, and push asks the city registry to update its official signpost.

**SMALL WORKING EXAMPLE**

```bash
git remote -v
git fetch --prune origin
git branch -vv
git log --oneline --graph --decorate --all
git diff main..origin/main
git switch main
git merge --ff-only origin/main
git push origin feature/search
```

`--ff-only` refuses a surprise merge commit. If it refuses, inspect divergence; do not add force until you understand the graph.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** Fetch downloads remote changes without applying them; pull fetches and then merges or rebases; push sends commits and asks the remote branch to move.

**Professional answer:** Network operations negotiate objects and update/request refs. Remote-tracking refs are local cached observations. Pull is composition, not a primitive synchronization state. A PR/MR adds host-side review and policy around ref integration; it is not a Git object.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Fetch a new remote commit and prove the working tree did not change. |
| Medium | Configure origin/upstream, synchronize a fork, and explain every ref before pushing. |
| Hard | Run a two-person review simulation with a conflict, required check, requested change, approval, and auditable merge choice. |

**WHY THE NEXT TOPIC IS NEEDED:** Collaboration makes mistakes inevitable. Before changing published history, you need a decision model for undoing the correct state with the least destructive tool.

### Phase 7 Project - Distributed Review Simulation

| Field | Requirement |
| --- | --- |
| **Scenario** | One maintainer and two contributors collaborate through forks/remotes, review, checks, and a protected-main simulation. |
| **Why this project exists** | It separates Git object exchange from host review metadata and policy. |
| **Skills being practiced** | Multiple remotes, fetch/pull/push, tracking refs, fork sync, PR/MR review, checks, etiquette. |
| **Prerequisites** | Conflict Resolution Gauntlet. |
| **Open-source tools required** | Git CLI; local bare remotes and optionally Forgejo/Gitea. GitHub free tier is optional and clearly proprietary. |
| **Starting repository state** | An upstream bare repository, two contributor clones/forks, and a clean main tip. |

**Step-by-step tasks:** create origin/upstream topology; contribute on a short branch; fetch without integrating; open or simulate a review; request a justified change; push the amendment; create and resolve a conflict; require a test script; merge according to policy; synchronize the second fork.

**Commands to investigate or use:** `git remote add/rename/get-url`, `git fetch --prune`, `git branch -vv`, `git pull --ff-only`, `git push -u`, `git log --all --graph`, `git range-diff`.

**Expected Git state or graph:** upstream main contains one reviewed integration; both forks' remote-tracking refs are current; contributor branches remain or are deleted according to documented policy.

**How to verify:** clone upstream fresh, run tests, inspect graph and refs, and match the review decision to the integrated commit/tree.

| Difficulty | Requirement |
| --- | --- |
| Easy | Show fetch without integration. |
| Medium | Complete reviewer-author iteration and fork synchronization. |
| Hard | Compare merge-commit, squash, and rebase-merge evidence for the same proposal and defend one. |

**Deliberate failure or mistake to reproduce:** run pull on a diverged branch without an agreed strategy and capture the refusal or unexpected merge in the disposable lab. **Recovery challenge:** abort if active, inspect refs/reflog, then repeat with an explicit strategy.

**Common mistakes:** assuming `origin` is special, treating `origin/main` as live, pushing from the wrong branch, reviewing generated noise, or leaking credentials to public evidence.

**Definition of done:** a fresh clone contains the tested reviewed result and the report distinguishes every local, remote-tracking, and remote branch. **Evidence to save / portfolio evidence:** topology diagram, review transcript/link, check output, graph, and merge-policy rationale. **Interview explanation:** explain fetch versus pull and PR versus commit. **Next-phase preparation:** create disposable mistakes only after tagging the current clean baseline.

### Git Checkpoint

This project is mirrored in the [full **Distributed Review Simulation** card](../guides/Projects.md#git-phase-7-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 7 complete?** [Build the full Phase 7 project card](../guides/Projects.md#git-phase-7-project) · [Continue to Phase 8](#phase-8---safe-undoing-without-data-loss)

---

<a id="phase-8"></a>

# PHASE 8 - Safe Undoing Without Data Loss

**Track:** Safety and Recovery

**WHAT YOU WILL BE ABLE TO DO:** Select restore, unstage, amend, reset, or revert from the affected state, publication boundary, and desired evidence.

**WHAT YOU SHOULD KNOW FIRST:** Working tree/index/repository, refs, remotes, and merge commits.

**WHAT YOU HAVE LEARNED SO FAR:** Git exposes several states because they support intentional snapshots and collaboration. Undo is therefore not one operation: it must target the right state.

## 8.1 Restore, Amend, Reset, Revert, and the Safety Decision

**WHY YOU ARE LEARNING THIS:** The word “undo” is dangerously underspecified. You may want to discard a disk edit, unstage content, replace an unpublished commit, move a branch, or publish an inverse commit.

**THE PROBLEM THIS SOLVES:** Habitually reaching for `reset --hard` can destroy uncommitted files. Rewriting a shared branch makes collaborators' ancestry diverge. Revert may be too noisy for a local typo but is the audit-friendly choice for published history.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [git-reset documentation](https://git-scm.com/docs/git-reset) | Official documentation | Study the reset/restore/revert examples and mode effects. | Exact state changes must come from primary documentation. |
| [Pro Git: Reset Demystified](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified) | Official open-source book | Follow the three trees for soft, mixed, and hard. | It turns similar syntax into a state model. |
| [Learn Git Branching](https://learngitbranching.js.org/?locale=en_US) | Open-source interactive simulator | Predict ref movement for reset and revert, then repeat in real Git. | The graph is visible, but simulation must be paired with local state inspection. |
| [Git Katas](https://github.com/eficode-academy/git-katas) | Public open-source exercises | Repeat amend/reset/revert tasks from known setups. | Safe judgment requires rehearsed distinctions. |

**STEP-BY-STEP EXPLANATION**

`git restore path` replaces working-tree content from a source (by default the index); `git restore --staged path` resets the index entry from `HEAD` while preserving the working copy. Always inspect both diffs first. `git commit --amend` creates a new commit from the current index with the previous commit's parent; it does not edit the old object. Use it freely only before others depend on that commit.

`git reset <target>` moves the current branch (or `HEAD` in special cases). `--soft` moves only the ref, keeping index and working tree. Default `--mixed` also resets the index to the target while leaving working files. `--hard` also overwrites tracked working-tree paths and may destroy uncommitted work. Prefer a backup ref and clean status before any destructive lab.

`git revert <commit>` applies the inverse change as a new commit; it preserves published ancestry and is normally shared-history safe. Reverting a merge requires `-m <parent-number>` to choose the mainline whose perspective remains, and later re-merging can be subtle because Git records that merge's changes as undone.

**THE MAIN IDEA IN SIMPLE WORDS:** Choose undo by state and sharing boundary, not by the word “undo.”

**What Should I Use?**

| Situation | Safest choice | What it changes | Shared-history safe? | Recovery / verification |
| --- | --- | --- | --- | --- |
| Discard one unstaged tracked edit | `git restore -- path` after review | Working tree | Yes; no history changes | Save patch if valuable; `git diff -- path` becomes empty |
| Unstage but keep the edit | `git restore --staged -- path` | Index only | Yes | `git diff` shows edit; staged diff clears |
| Fix last unpublished commit | Stage correction, `git commit --amend` | Creates replacement commit; moves branch | Only before collaborators depend on old ID | Old ID in reflog; compare `HEAD@{1}` and `HEAD` |
| Undo a published ordinary commit | `git revert <sha>` | New inverse commit/history grows | Yes | Revert the revert if needed; run tests |
| Undo a published merge | `git revert -m 1 <merge>` after graph review | New inverse commit | Usually; coordinate release semantics | Record mainline, test, consider revert-of-revert |
| Remove last local commit, keep staged | `git reset --soft HEAD^` | Branch only | No if published | Backup branch/reflog; staged diff must match |
| Remove last local commit, keep unstaged | `git reset --mixed HEAD^` | Branch and index | No if published | Backup branch/reflog; working diff must match |
| Discard tracked local state completely | Avoid if possible; `reset --hard` only in disposable/backup state | Branch, index, working tree | No; destructive locally | Create backup ref, confirm clean/unneeded work, verify reflog |

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
before:    A---B---C  main, HEAD       IDX=C      WT=C+edits

--soft B:  A---B  main, HEAD           IDX=C      WT=C+edits
--mixed B: A---B  main, HEAD           IDX=B      WT=C+edits
--hard B:  A---B  main, HEAD           IDX=B      WT=B   WARNING

revert C on published history:
A---B---C---R  main     R is a new commit whose patch inverses C
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Gain | Cost / failure mode |
| --- | --- | --- |
| Restore/unstage narrowly | Minimal blast radius | Wrong source can replace desired content |
| Amend/reset unpublished history | Clean local story | Old commit IDs become obsolete |
| Revert published history | Auditability and collaborator safety | Adds commits; merge reverts affect later integration |
| Hard reset | Exact tracked state replacement | Destroys uncommitted tracked edits and hides ref history |

**PICTURE IT LIKE THIS**

Restore changes a draft or packing list. Reset moves your private bookmark and may repack the desk. Revert publishes a new correction notice without tearing pages out of everyone else's copies.

**SMALL WORKING EXAMPLE**

```bash
git status
git diff && git diff --staged
git branch safety/before-undo

git restore --staged README.md       # index only
git restore --source=HEAD -- README.md  # working tree: inspect first
git commit --amend                   # unpublished only
git reset --soft HEAD^               # disposable unpublished lab only
git reset --mixed ORIG_HEAD          # return using recorded prior tip when valid
git revert <published-commit>        # shared-history-safe inverse
```

> **DANGER:** Do not copy `git reset --hard`, `git clean`, or a force push into a valuable repository from this roadmap. Use the disposable workbench, create a named safety ref, inspect `status` and both diffs, and prove the reflog recovery path first.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** Restore changes files, reset moves local history and may also reset staging/files, while revert adds a new commit that undoes an old one.

**Professional answer:** I first classify working tree, index, local unpublished ref, or shared history. I use the narrowest state transition, prefer revert for published commits, and treat amend/reset as ref-rewriting operations whose safety depends on whether old IDs are shared.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Unstage one path while preserving its working edit. |
| Medium | Demonstrate soft/mixed/hard on cloned disposable branches and record all three state triples. |
| Hard | Revert a merge with an explicitly justified mainline, then explain how a future re-merge behaves. |

**WHY THE NEXT TOPIC IS NEEDED:** Correct command choice prevents many losses, but refs still move incorrectly, branches get deleted, and secrets can be published. Recovery needs reflogs, coordination, and security response.

### Phase 8 Project - Safe Undo Decision Lab

| Field | Requirement |
| --- | --- |
| **Scenario** | A teammate reports six “undo” requests affecting different states; you must choose the least risky operation for each. |
| **Why this project exists** | It tests judgment, not syntax recall. |
| **Skills being practiced** | Restore, unstage, amend, reset modes, revert, merge revert, state verification, sharing boundary. |
| **Prerequisites** | Distributed Review Simulation. |
| **Open-source tools required** | Git CLI and disposable clones. |
| **Starting repository state** | Tagged clean baseline, staged and unstaged edits, unpublished commits, and a simulated published merge. |

**Step-by-step tasks:** solve one working-tree discard, one unstage, one amend, three reset-mode demonstrations in separate clones, one published revert, and one merge revert; record prediction and actual state for each.

**Commands to investigate or use:** `git restore`, `git commit --amend`, `git reset --soft/--mixed/--hard`, `git revert`, `git status`, both diffs, `git reflog`, `git show ORIG_HEAD`.

**Expected Git state or graph:** each scenario ends at a specified tree; published scenarios retain original commits plus inverse commits; local scenarios may replace/move refs.

**How to verify:** compare tree hashes, index entries, working files, graph, tests, and collaborator clone behavior.

| Difficulty | Requirement |
| --- | --- |
| Easy | Correctly classify all target states. |
| Medium | Prove reset-mode differences with the same starting commit. |
| Hard | Revert a merge and document mainline and later-merge implications. |

**Deliberate failure or mistake to reproduce:** use mixed reset when the requested outcome was “keep staged.” **Recovery challenge:** use reflog/safety ref and restage from the correct tree without losing working edits.

**Common mistakes:** skipping diffs, rewriting a published commit, confusing reset target with restored path, or claiming hard reset always erases objects immediately.

**Definition of done:** all six decisions match the requested final state and publication rule. **Evidence to save / portfolio evidence:** completed decision table, state matrices, graphs, tests, and safety checklist. **Interview explanation:** answer a surprise undo scenario by asking state/sharing questions first. **Next-phase preparation:** retain safety refs and deliberately create recoverable lost tips.

### Git Checkpoint

This project is mirrored in the [full **Safe Undo Decision Lab** card](../guides/Projects.md#git-phase-8-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 8 complete?** [Build the full Phase 8 project card](../guides/Projects.md#git-phase-8-project) · [Continue to Phase 9](#phase-9---recovery-and-shared-history-safety)

---

<a id="phase-9"></a>

# PHASE 9 - Recovery and Shared-History Safety

**Track:** Safety and Recovery

**WHAT YOU WILL BE ABLE TO DO:** Recover deleted branches and lost commits, respond to accidentally committed files or secrets, and coordinate guarded shared-history repair.

**WHAT YOU SHOULD KNOW FIRST:** Phase 8 state-aware undo and Phase 4 reachability/reflogs.

**WHAT YOU HAVE LEARNED SO FAR:** Most objects survive a mistaken ref move for a while. Recovery depends on finding the old object before expiry/pruning and on distinguishing data repair from security response.

## 9.1 Reflog Rescue, Secret Response, and Guarded Force Updates

**WHY YOU ARE LEARNING THIS:** Confidence with Git comes from knowing how to preserve evidence, locate old tips, and coordinate exceptional repairs instead of panicking.

**THE PROBLEM THIS SOLVES:** Developers recreate lost work unnecessarily, assume deleting a file removes its history, or force-push over a teammate's new commit. A leaked credential remains compromised even if its blob later becomes unreachable.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Recovering Lost Commits with Git Reflog - Train To Code](https://www.youtube.com/watch?v=hsAPjNZHv-E) | Free verified video | Observe old `HEAD` positions and branch recreation. | It demonstrates the shortest real recovery loop. |
| [git-reflog documentation](https://git-scm.com/docs/git-reflog) | Official documentation | Read selectors, expiry, and per-ref behavior. | Reflog guarantees must not be guessed. |
| [Pro Git: Maintenance and Data Recovery](https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery) | Official open-source book | Recover by reflog and dangling objects; understand pruning. | It connects reachability to recovery limits. |
| [git-filter-repo](https://github.com/newren/git-filter-repo) | Public open-source tool | Read fresh-clone safety and analysis docs before any history rewrite. | It is the recommended serious history-rewriting tool for repository cleanup. |

**STEP-BY-STEP EXPLANATION**

Stop making changes first. Capture `git status`, graph, refs, and `git reflog --all`. A deleted branch removes a ref, not necessarily its commits; find the old tip and create a new branch there. A bad reset similarly leaves the earlier tip in the current branch/`HEAD` reflog. If reflog is unavailable, `git fsck --lost-found` can expose dangling objects, but inspection is harder and retention is not guaranteed.

For an accidentally tracked non-secret file, add the path to ignore policy and remove it from the index with `git rm --cached`, then commit. Past commits still contain it. For a secret, first revoke/rotate the credential and review access logs; assume exposure when pushed to any remote or shared with CI. Then decide whether coordinated history rewrite is required for policy/data minimization. Use a fresh clone and a purpose-built tool such as `git filter-repo`, notify collaborators, pause pushes, preserve necessary refs securely, rewrite, verify absence, force-update guardedly, and have collaborators re-clone or carefully reset.

`git push --force-with-lease` replaces a remote ref only if it still matches the expected value you last observed (or explicitly provide). It reduces the chance of overwriting unseen work; it does not make a history rewrite safe, correct, or uncoordinated. Fetch immediately before the planned operation and verify the exact old/new tips.

**THE MAIN IDEA IN SIMPLE WORDS:** Rescue the old object locally; coordinate any shared repair; rotate secrets before rewriting history.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
before bad reset: A---B---C  main
after reset:      A---B      main
                           reflog still records C

git branch rescue C
                  A---B      main
                       \
                        C    rescue

guarded shared rewrite:
observe remote=R -> rewrite local=N -> force-with-lease expects R
if remote moved R->X, lease fails instead of overwriting X
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Mechanism | Gain | Cost / failure mode |
| --- | --- | --- |
| Reflog branch rescue | Fast, exact local recovery | Local only; expiry and GC limit the window |
| `fsck` dangling search | Last-resort object discovery | Weak context; object may already be pruned |
| Revert published mistake | Preserves collaboration | Sensitive bytes remain in earlier history |
| Filtered coordinated rewrite | Removes unwanted paths from rewritten refs | New IDs everywhere, broken clones/links/signatures, operational coordination |
| `--force-with-lease` | Detects unexpected remote movement | Stale/misconfigured leases and bad plans remain possible |

**PICTURE IT LIKE THIS**

The reflog is a local security-camera log of where bookmarks used to point. Secret rotation changes the lock; rewriting history only removes old photographs of the key.

**SMALL WORKING EXAMPLE**

```bash
git reflog --all --date=iso
git show <candidate-old-tip>
git branch rescue/lost-work <candidate-old-tip>
git log --oneline --graph --decorate --all

git rm --cached path/to/generated.file
printf "path/to/generated.file\n" >> .gitignore
git commit -m "chore: stop tracking generated file"
```

> **DANGER:** A secret-removal lab must use fake credentials in a disposable repository. Never place a real credential in a commit for practice. Revoke/rotate first in a real incident; do not run a history rewrite or force push without explicit team coordination and verified backups.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** I inspect the reflog for the old commit and create a branch at it. If a secret was pushed, I rotate it first because deleting the file does not make the credential safe.

**Professional answer:** I preserve evidence, recover locally through ref logs/reachability, and separate remediation from containment. For shared rewrites I pause writes, rotate/revoke secrets, rewrite from a fresh clone, verify all relevant refs, communicate new IDs, and use a lease-guarded update rather than blind force.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Delete an unmerged branch in a disposable repo and recreate it from reflog. |
| Medium | Recover commits after a hard reset and prove the final tree matches the safety tag. |
| Hard | Run a fake-secret incident drill: contain, analyze refs, rewrite a clone, verify absence, coordinate guarded updates, and document re-clone steps. |

**WHY THE NEXT TOPIC IS NEEDED:** Recovery makes experimentation safer. Now you can intentionally replace unpublished commits to tell a cleaner review story - while preserving the rule against rewriting shared ancestry.

### Phase 9 Project - Reflog Rescue Mission

| Field | Requirement |
| --- | --- |
| **Scenario** | A maintainer deletes an unmerged branch, resets another branch, commits a generated archive, and discovers a fake token already pushed to a shared lab remote. |
| **Why this project exists** | It combines technical recovery with operational and security judgment. |
| **Skills being practiced** | Reflog, lost objects, deleted refs, tracked-file cleanup, secret containment, coordinated rewrite, leases. |
| **Prerequisites** | Safe Undo Decision Lab. |
| **Open-source tools required** | Git CLI and `git-filter-repo`; fake credentials only. |
| **Starting repository state** | Two disposable clones, bare remote, safety bundle/tag, and scripted failure refs. |

**Step-by-step tasks:** capture evidence; recover deleted/reset tips; untrack a generated path; execute a fake-secret response plan; rotate the fake token in documentation; rewrite a fresh clone; verify all refs; simulate a collaborator moving remote main; demonstrate lease refusal; coordinate and complete the approved update.

**Commands to investigate or use:** `git reflog --all`, `git show`, `git branch rescue/...`, `git fsck --lost-found`, `git rm --cached`, `git filter-repo`, `git for-each-ref`, `git log --all`, `git push --force-with-lease`.

**Expected Git state or graph:** all intended work has named refs; generated/fake-secret paths are absent from rewritten relevant history; the first guarded update refuses after unseen movement.

**How to verify:** search every ref/object-reachable commit, clone fresh, run tests, compare expected trees, and record old/new tip mapping.

| Difficulty | Requirement |
| --- | --- |
| Easy | Recover one deleted branch. |
| Medium | Recover after reset and untrack a generated file correctly. |
| Hard | Complete the fake-secret/lease coordination drill with a rollback and collaborator recovery plan. |

**Deliberate failure or mistake to reproduce:** advance the remote from clone B after clone A's last fetch. **Recovery challenge:** show `--force-with-lease` refuse, fetch, preserve B's work, rebuild the rewrite plan, and update only with shared approval.

**Common mistakes:** force-pushing first, assuming an ignored file disappears from history, exposing real secrets in screenshots, or promising reflog as permanent backup.

**Definition of done:** all recoverable work is named, the fake secret is rotated and absent from intended rewritten refs, and no unseen remote commit is overwritten. **Evidence to save / portfolio evidence:** incident timeline, graphs, ref mapping, lease refusal, verification script, and collaborator instructions. **Interview explanation:** lead with containment, not `filter-repo`. **Next-phase preparation:** keep a messy unpublished feature branch and a safety tag.

### Git Checkpoint

This project is mirrored in the [full **Reflog Rescue Mission** card](../guides/Projects.md#git-phase-9-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 9 complete?** [Build the full Phase 9 project card](../guides/Projects.md#git-phase-9-project) · [Continue to Phase 10](#phase-10---rebase-and-intentional-history-rewriting)

---

<a id="phase-10"></a>

# PHASE 10 - Rebase and Intentional History Rewriting

**Track:** Safety and Recovery

**WHAT YOU WILL BE ABLE TO DO:** Rebase a private branch, resolve rebase conflicts, and use interactive rebase to reword, edit, reorder, squash, fix up, drop, and split commits.

**WHAT YOU SHOULD KNOW FIRST:** Commit internals, merges, undo, reflog recovery, and the unpublished/shared boundary.

**WHAT YOU HAVE LEARNED SO FAR:** Commits are immutable, but refs can be moved to replacement commits. Rewriting is therefore copying intent onto new parents, not editing history in place.

## 10.1 Merge Versus Rebase and the Interactive Todo List

**WHY YOU ARE LEARNING THIS:** Work often evolves as “WIP, typo, fix test.” Before review, those commits can be curated into coherent units without hiding meaningful decisions.

**THE PROBLEM THIS SOLVES:** Merging upstream repeatedly into a private feature branch can clutter review. Publishing every exploratory commit makes revert and bisect less meaningful. Rebasing shared work, however, duplicates ancestry and disrupts collaborators.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Learn Git Rebase in 6 minutes // explained with live animations! - The Modern Coder](https://www.youtube.com/watch?v=f1wnYdLEpgI) | Free verified animated video | Watch commits replay and receive new IDs. | The live graph makes replacement explicit. |
| [Git MERGE vs REBASE: Everything You Need to Know - ByteByteGo](https://www.youtube.com/watch?v=0chZFIZLR_0) | Free verified video | Compare topology preservation with linear replay. | It frames a trade-off rather than a universal winner. |
| [git-rebase documentation](https://git-scm.com/docs/git-rebase) | Official documentation | Read interactive actions, `--onto`, conflicts, abort/continue, and recovery notes. | Exact rewrite behavior must be primary-source grounded. |
| [Learn Git Branching](https://learngitbranching.js.org/?locale=en_US) | Open-source interactive simulator | Complete rebase, interactive rebase, and `--onto` levels; repeat locally. | It develops graph prediction safely. |

**STEP-BY-STEP EXPLANATION**

Given feature commits D/E based on B and a new main tip C, rebase finds commits reachable from feature but not upstream, temporarily remembers them, resets the feature base to C, and applies each patch to create D'/E'. IDs change because parent and often committer metadata change. Merge instead creates a commit with both tips as parents and preserves original IDs/topology.

Interactive rebase presents a todo list oldest-first. `reword` changes a message; `edit` pauses to amend; `squash` combines and edits messages; `fixup` combines while discarding the fixup message; `drop` omits; reordering changes parent order and may change behavior. To split, mark `edit`, reset the commit with `git reset HEAD^` (mixed), then stage/commit coherent pieces before continuing. `--autosquash` arranges `fixup!`/`squash!` commits near targets.

On conflict, inspect the current patch and remember that ours/theirs language can feel reversed during rebase because the checked-out base is the accumulating rebased line. Resolve the intended final content, stage, test, and `git rebase --continue`; use `--abort` to return to the original tip. Preserve a safety ref and use `git range-diff old...new` to review how the commit series changed.

**THE MAIN IDEA IN SIMPLE WORDS:** Rebase copies unpublished commits onto a new base; merge joins existing histories.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
before:             merge:                 rebase feature onto main:
A---B---C main      A---B---C---M main      A---B---C main
     \                   \     /                     \
      D---E feature       D---E                       D'---E' feature

D'/E' contain corresponding changes but have new parents and new IDs.
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Gain | Cost / failure mode |
| --- | --- | --- |
| Merge | Preserves real topology/IDs and is safe when shared | Graph can become noisy; series remains less curated |
| Rebase private branch | Linear review and current base | Replays conflicts, changes IDs, loses topology |
| Squash/fixup | Coherent mainline units | Can erase independently useful steps and authorship nuance |
| Reorder/drop | Better dependency story or removal | Changes behavior; tests must run at each meaningful boundary |

**PICTURE IT LIKE THIS**

Merge staples two existing notebooks together with a page citing both. Rebase recopies your private pages into a new notebook edition that begins after the latest upstream page.

**SMALL WORKING EXAMPLE**

```bash
git switch feature/search
git branch safety/pre-rebase
git fetch origin
git rebase -i --autosquash origin/main
# on conflict: inspect -> edit -> git add -> test ->
git rebase --continue
# or return exactly:
# git rebase --abort

git range-diff safety/pre-rebase...feature/search
git log --oneline --graph --decorate --all
```

Do not push rewritten shared commits without explicit coordination. If the branch is published but owned solely by you under agreed policy, use a lease-guarded update after fetching - not blind force.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** Merge joins histories; rebase replays my commits on a new base and changes their IDs, so I use it on my own unshared work.

**Professional answer:** Rebase selects a commit set relative to an upstream and creates new commit objects with new parentage. Interactive rebase curates that unpublished series. I preserve a safety ref, test, use range-diff, and never casually rewrite commits collaborators have based work on.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Rebase two private commits and identify old/new IDs. |
| Medium | Reword, reorder, squash, fix up, and drop commits while preserving intended final tree. |
| Hard | Split one mixed commit, resolve a mid-rebase conflict, run tests at each boundary, and audit with `range-diff`. |

**WHY THE NEXT TOPIC IS NEEDED:** A clean branch still faces daily interruptions and selective movement. Stash, patch mode, cherry-pick, worktrees, aliases, and scoped config make context switching explicit.

### Phase 10 Project - Curated History Workshop

| Field | Requirement |
| --- | --- |
| **Scenario** | A private feature branch contains eight messy commits and must become four reviewable, buildable commits on current main. |
| **Why this project exists** | It tests history editing as review design, not cosmetic linearity. |
| **Skills being practiced** | Rebase internals/conflicts, interactive actions, split, autosquash, safety refs, range-diff, publication policy. |
| **Prerequisites** | Reflog Rescue Mission. |
| **Open-source tools required** | Git CLI and a test script. |
| **Starting repository state** | Eight private commits, two upstream commits, one planned conflict, and `safety/pre-rebase` tag/ref. |

**Step-by-step tasks:** classify each commit; create `fixup!` commits; start interactive autosquash rebase; reword/reorder/drop/squash; pause and split one commit; resolve conflict; test each intended checkpoint; compare series and trees.

**Commands to investigate or use:** `git rebase -i --autosquash`, `git commit --fixup`, `git reset HEAD^`, `git rebase --continue/--abort`, `git range-diff`, `git diff old^{tree} new^{tree}`, `git reflog`.

**Expected Git state or graph:** old branch `B---D1...D8`; new branch on current main `C---N1---N2---N3---N4`, with documented mapping and intended final tree.

**How to verify:** `range-diff`, full tests at each N commit, final tree comparison, clean status, and recovery drill back to old tip.

| Difficulty | Requirement |
| --- | --- |
| Easy | Reword and squash. |
| Medium | Autosquash and resolve one conflict. |
| Hard | Split/reorder with buildable intermediate commits and defend every mapping. |

**Deliberate failure or mistake to reproduce:** drop a required commit during the first attempt. **Recovery challenge:** abort or recover through the safety ref/reflog, restore the plan, and repeat with a final range-diff review.

**Common mistakes:** rebasing shared main, misunderstanding todo order, resolving tests only at final tip, force-pushing blindly, or calling rewritten commits “the same commits.”

**Definition of done:** four coherent commits reproduce the intended feature and every old-to-new decision is auditable. **Evidence to save / portfolio evidence:** before/after graphs, todo plan, range-diff, test matrix, and recovery proof. **Interview explanation:** defend rebase versus merge for this exact branch. **Next-phase preparation:** keep a second urgent task ready for context switching.

### Git Checkpoint

This project is mirrored in the [full **Curated History Workshop** card](../guides/Projects.md#git-phase-10-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 10 complete?** [Build the full Phase 10 project card](../guides/Projects.md#git-phase-10-project) · [Continue to Phase 11](#phase-11---productive-everyday-git)

---

<a id="phase-11"></a>

# PHASE 11 - Productive Everyday Git

**Track:** Practical Tools

**WHAT YOU WILL BE ABLE TO DO:** Switch contexts and move selected changes with stash, patch mode, cherry-pick, worktrees, aliases, and correctly scoped configuration.

**WHAT YOU SHOULD KNOW FIRST:** State model, branches, recovery, and private-history rewriting.

**WHAT YOU HAVE LEARNED SO FAR:** History can be made safe and coherent. Daily work still creates interruptions, mixed changes, and parallel tasks that do not justify hidden folder copies.

## 11.1 Stash, Patch Selection, Cherry-Pick, Worktrees, and Configuration

**WHY YOU ARE LEARNING THIS:** Productivity tools should expose state and reduce context-switch cost without turning unfinished work into an invisible pile.

**THE PROBLEM THIS SOLVES:** Emergency fixes arrive during unfinished work. One useful commit may need to move between release lines. Constant switching rebuilds dependencies and risks dirty-tree mistakes. Long-lived stashes become forgotten shadow branches.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Pro Git: Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning) | Official open-source book | Practice named, partial, indexed, and untracked stashes; treat cleaning warnings seriously. | It explains stash as commits and documents boundaries. |
| [Pro Git: Interactive Staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging) | Official open-source book | Split hunks and inspect staged intent. | Selective staging is the foundation of atomic history. |
| [git-worktree documentation](https://git-scm.com/docs/git-worktree) | Official documentation | Create/prune/list linked working trees and note branch checkout restrictions. | Worktrees solve parallel checkout without repository copies. |
| [Git Katas](https://github.com/eficode-academy/git-katas) | Public open-source exercises | Repeat stash, cherry-pick, and patch workflows. | These tools become safe only through state-aware repetition. |

**STEP-BY-STEP EXPLANATION**

`git stash push` creates commit objects representing tracked working/index state and updates `refs/stash`; it is local history, not a magic clipboard. Name stashes, use `--include-untracked` only deliberately, `--keep-index` when staged work should remain, and `-p` for partial selection. Prefer a real WIP branch/commit for work that must survive, be shared, or remain understandable for days. `apply` keeps a stash entry; `pop` applies then drops only on success.

Patch mode (`git add -p`, `restore -p`, `stash -p`) selects hunks interactively; always review both diffs afterward. `git cherry-pick <commit>` applies one commit's change onto the current tip as a new commit with a new parent and ID. Use it for targeted backports, not to replace regular synchronization; record provenance with `-x` for public maintenance branches.

`git worktree add ../repo-hotfix -b hotfix/x main` gives another working tree connected to the same object/ref database. Different branches can be built simultaneously; the same branch cannot normally be checked out in two worktrees. Config scopes - system/global/local/worktree - control behavior. Aliases should shorten visible safe queries, not hide destructive multi-step operations.

**THE MAIN IDEA IN SIMPLE WORDS:** Make context switches named and inspectable; move the smallest coherent unit.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
one repository object store
        |
        +-- worktree A -> feature/search
        +-- worktree B -> hotfix/login
        +-- refs/stash -> temporary commit(s)

cherry-pick D onto release:
A---B---C---D main          A---B---R---D' release
                              D' has D's change, new parent/new ID
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Tool | Gain | Cost / failure mode |
| --- | --- | --- |
| Named short-lived stash | Quick clean context | Local, forgettable, conflicts on apply |
| Patch mode | Precise intent | Mis-split dependent hunks |
| Cherry-pick | Targeted backport | Duplicate patches and future merge confusion |
| Worktree | Simultaneous builds/branches | Shared repo metadata and cleanup discipline |
| Alias | Faster common inspection | Hidden unsafe behavior or team-specific vocabulary |

**PICTURE IT LIKE THIS**

A stash is a labeled drawer, cherry-pick is copying one approved page into another edition, and a worktree is a second desk using the same archive.

**SMALL WORKING EXAMPLE**

```bash
git stash push -p -m "wip: search UI only"
git stash list
git stash show -p stash@{0}
git worktree add ../git-workbench-hotfix -b hotfix/login main
git worktree list
git cherry-pick -x <fix-commit>   # on a maintenance branch
git config --local alias.graph "log --oneline --graph --decorate --all"
git graph
```

Verify clean/dirty state in every worktree and inspect the cherry-picked patch plus provenance.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** Stash temporarily records unfinished changes, cherry-pick copies one commit's change onto my branch, and worktrees let one repository check out multiple branches in different folders.

**Professional answer:** A stash is ref-backed commit structure, cherry-pick synthesizes a new commit by applying a patch to current `HEAD`, and linked worktrees share the object database while maintaining separate index/`HEAD` state. I use each for a bounded context and inspect conflicts/provenance.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Create, inspect, apply, and deliberately drop a named stash only after verification. |
| Medium | Backport one fix with `cherry-pick -x` and resolve a conflict. |
| Hard | Run feature and hotfix builds simultaneously in two worktrees, then clean up without deleting either branch. |

**WHY THE NEXT TOPIC IS NEEDED:** Moving changes efficiently is not enough when a regression appears or a tested commit must become a trusted release. Investigation and immutable release names solve those problems.

### Phase 11 Project - Context-Switching Workbench

| Field | Requirement |
| --- | --- |
| **Scenario** | A feature is half-complete when an urgent maintenance fix must be built, tested, and backported without mixing changes. |
| **Why this project exists** | It tests explicit context management under realistic interruption. |
| **Skills being practiced** | Partial stash, patch mode, cherry-pick/provenance, worktrees, safe aliases/config scopes. |
| **Prerequisites** | Curated History Workshop. |
| **Open-source tools required** | Git CLI and a local test script. |
| **Starting repository state** | Dirty feature tree containing staged, unstaged, and untracked work plus a release branch. |

**Step-by-step tasks:** inventory state; stash only selected feature work; create a hotfix worktree; fix/test/commit; cherry-pick to release with provenance; resume feature without losing index intent; define one read-only alias; remove the linked worktree safely.

**Commands to investigate or use:** `git stash push -p --include-untracked`, `git stash show`, `git add -p`, `git worktree add/list/remove/prune`, `git cherry-pick -x`, `git config --local`, `git status`.

**Expected Git state or graph:** feature and release each contain intended changes only; hotfix commit and backport have different IDs; no stale worktree metadata or unreviewed stash remains.

**How to verify:** tests in both worktrees, clean status, patch comparison, stash list, worktree list, and graph.

| Difficulty | Requirement |
| --- | --- |
| Easy | Preserve and restore one named stash. |
| Medium | Backport with provenance and conflict verification. |
| Hard | Preserve distinct staged/unstaged intent across the entire interruption and prove no diff crossed contexts. |

**Deliberate failure or mistake to reproduce:** attempt to check out the same branch in two worktrees. **Recovery challenge:** interpret the refusal and create/switch to the correct separate branch without using force.

**Common mistakes:** months-old stashes, popping before inspection, cherry-picking merge commits without parent reasoning, or aliases that hide force/destruction.

**Definition of done:** both tasks are clean, tested, separately reviewable, and reproducible from graph evidence. **Evidence to save / portfolio evidence:** interruption timeline, worktree diagram, patch/provenance comparison, tests, and config rationale. **Interview explanation:** choose stash versus WIP branch versus worktree. **Next-phase preparation:** introduce a regression across a scripted sequence of commits.

### Git Checkpoint

This project is mirrored in the [full **Context-Switching Workbench** card](../guides/Projects.md#git-phase-11-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 11 complete?** [Build the full Phase 11 project card](../guides/Projects.md#git-phase-11-project) · [Continue to Phase 12](#phase-12---investigation-tags-and-releases)

---

<a id="phase-12"></a>

# PHASE 12 - Investigation, Tags, and Releases

**Track:** Practical Tools

**WHAT YOU WILL BE ABLE TO DO:** Investigate line history responsibly, locate a regression with bisect, and create an auditable versioned release with changelog and signed tag evidence.

**WHAT YOU SHOULD KNOW FIRST:** Atomic history, branching, cherry-pick, and test automation.

**WHAT YOU HAVE LEARNED SO FAR:** Clean commits help maintenance, but teams still need to locate the first bad change and connect one tested commit to a human release name.

## 12.1 Blame, Bisect, Tags, Changelogs, and Semantic Versions

**WHY YOU ARE LEARNING THIS:** Git history is both a debugging index and a release ledger when commits are meaningful and tests can classify behavior.

**THE PROBLEM THIS SOLVES:** Reading hundreds of commits linearly wastes time. “Who wrote this line?” can become blame culture and miss copied/renamed context. A floating branch name cannot prove which exact commit users received.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [Git Tutorial #36: How to Use Git Bisect to Track Down Bugs \| Learn Git - GitKraken](https://www.youtube.com/watch?v=z-AkSXDqodc) | Free verified video | Mark known good/bad and watch the candidate interval halve. | It makes binary-search investigation concrete. |
| [git-bisect documentation](https://git-scm.com/docs/git-bisect) | Official documentation | Study manual/run modes, exit codes, skip, and reset. | Automation semantics and cleanup must be exact. |
| [Semantic Versioning 2.0.0](https://semver.org/) | Free open specification | Map incompatible, compatible feature, and fix changes to MAJOR/MINOR/PATCH. | Versions should communicate API compatibility, not aesthetics. |
| [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) | Free open specification | Connect commit intent to changelog/release tooling, while reviewing manually. | Structured history can support - never replace - release judgment. |

**STEP-BY-STEP EXPLANATION**

`git blame` attributes current lines to commits, not moral responsibility. Use `-w` to ignore whitespace and `-C` to detect moved/copied lines, then open the commit and surrounding history. `git log -L` follows a line range or function over time. The useful question is “what decision introduced this behavior and what context existed?”

Bisect needs one known good and one known bad revision. Git checks out a midpoint in the ancestry range; classify it, and repeat in roughly `O(log n)` tests. `git bisect run ./check.sh` automates classification: exit 0 good, 1-127 (except 125) bad, 125 skip. Tests must be deterministic and commits testable; always `git bisect reset` to restore the original checkout.

A lightweight tag is a ref directly to an object. An annotated tag creates a tag object containing tagger, date, message, and target; signing adds cryptographic verification. Use annotated, preferably signed, tags for releases. A release is broader host/project metadata and artifacts around a tagged commit. Changelogs explain user-visible change; Semantic Versioning applies only when you define a public API/compatibility contract.

**THE MAIN IDEA IN SIMPLE WORDS:** Use history to narrow evidence, then name the exact tested commit that users receive.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
known good G ------------------------- known bad B
                 test midpoint M
good result -> search M..B      bad result -> search G..M
after about log2(n) classifications -> first bad commit

refs/tags/v1.2.0 -> annotated tag object -> release commit C
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Tool/policy | Gain | Cost / failure mode |
| --- | --- | --- |
| Blame + context | Starting point for rationale | Misattributes moved code; encourages person-first framing |
| Automated bisect | Logarithmic regression search | Flaky tests or unbuildable commits poison classification |
| Annotated/signed tag | Human metadata and verifiable target | Key management, expiry/revocation, and verification discipline |
| SemVer/changelog | Compatibility and user communication | Meaningless if public API and release policy are undefined |

**PICTURE IT LIKE THIS**

Bisect is narrowing a fault along a railway by testing the midpoint. A release tag is a tamper-evident plaque attached to one exact station, while a branch sign can keep moving.

**SMALL WORKING EXAMPLE**

```bash
git blame -w -C -- path/to/file
git log -L :function_name:path/to/file

git bisect start
git bisect bad HEAD
git bisect good v1.0.0
git bisect run ./scripts/regression-check.sh
git bisect reset

git tag -s v1.1.0 -m "Release v1.1.0"   # requires configured signing key
git tag -v v1.1.0
git show v1.1.0
```

If signing is not configured, create an annotated tag with `-a` for the lab and document the missing trust setup rather than pretending it is signed.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** Bisect uses good/bad checks to find the first bad commit quickly; a tag gives one commit a stable release name.

**Professional answer:** Bisect performs binary search over a reachable commit interval and depends on deterministic classification. Blame is a navigation aid requiring move/whitespace/history context. Annotated signed tags bind release metadata and signer evidence to an immutable target, subject to key trust policy.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Compare ordinary blame with `-w -C` after a move/format commit. |
| Medium | Find one injected regression among at least 32 commits with automated bisect and record classification count. |
| Hard | Produce a changelog, SemVer decision, checksums, annotated/signed tag, verification output, and rollback note. |

**WHY THE NEXT TOPIC IS NEEDED:** One repository can now ship a release. Large binaries, platform line endings, partial checkouts, nested repositories, and monorepo scale introduce storage and boundary decisions.

### Phase 12 Project - Regression Hunt and Signed Release

| Field | Requirement |
| --- | --- |
| **Scenario** | A regression exists somewhere in a long history and the repaired commit must become a verifiable maintenance release. |
| **Why this project exists** | It connects history quality to debugging and release trust. |
| **Skills being practiced** | Contextual blame, automated bisect, tags, signing, changelog, SemVer, release evidence. |
| **Prerequisites** | Context-Switching Workbench. |
| **Open-source tools required** | Git CLI, shell test script, GnuPG or SSH signing support. |
| **Starting repository state** | At least 32 generated-but-meaningful commits, known good tag, bad tip, one moved/formatted function. |

**Step-by-step tasks:** investigate blame variants; automate bisect; fix the first bad commit on a maintenance branch; classify version bump; write changelog; create annotated/signed tag; verify signature and artifact checksum; document rollback.

**Commands to investigate or use:** `git blame -w -C`, `git log -L`, `git bisect start/good/bad/run/reset`, `git tag -a/-s/-v`, `git show`, `git describe`.

**Expected Git state or graph:** `v1.0.0 ... first-bad ... fix---v1.0.1`, with the release tag targeting the tested fix commit.

**How to verify:** deterministic bisect transcript, clean fresh-checkout tests at tag, signature verification (or documented unsigned fallback), checksum match, and changelog/tree consistency.

| Difficulty | Requirement |
| --- | --- |
| Easy | Locate change context correctly. |
| Medium | Automate bisect across 32+ commits. |
| Hard | Produce and independently verify the complete signed release evidence. |

**Deliberate failure or mistake to reproduce:** make the bisect test flaky. **Recovery challenge:** detect contradictory classifications, stabilize/seed the test, reset, rerun, and compare transcripts.

**Common mistakes:** blaming a person instead of investigating context, forgetting `bisect reset`, moving a published release tag, or choosing SemVer without a defined API.

**Definition of done:** a fresh verifier finds the same culprit and validates the release target/evidence. **Evidence to save / portfolio evidence:** bisect transcript, complexity calculation, changelog, version rationale, signature/checksum, and rollback note. **Interview explanation:** connect atomic commits to bisect usefulness. **Next-phase preparation:** add a binary asset and external component requirement.

### Git Checkpoint

This project is mirrored in the [full **Regression Hunt and Signed Release** card](../guides/Projects.md#git-phase-12-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 12 complete?** [Build the full Phase 12 project card](../guides/Projects.md#git-phase-12-project) · [Continue to Phase 13](#phase-13---large-and-multi-repository-strategies)

---

<a id="phase-13"></a>

# PHASE 13 - Large and Multi-Repository Strategies

**Track:** Repository Architecture

**WHAT YOU WILL BE ABLE TO DO:** Define attributes and line endings, and choose LFS, sparse checkout, submodules, subtrees, or monorepo practices from explicit constraints.

**WHAT YOU SHOULD KNOW FIRST:** Objects/packfiles, releases, remotes, and recovery.

**WHAT YOU HAVE LEARNED SO FAR:** Git handles text history and normal repositories well. Very large objects and repositories that span many products or dependencies stress clone size, checkout time, ownership, and release coupling.

## 13.1 Attributes, Large Files, Partial Work, and Repository Boundaries

**WHY YOU ARE LEARNING THIS:** Repository architecture affects every clone, CI job, merge, release, and recovery operation for years.

**THE PROBLEM THIS SOLVES:** OS-specific line endings create noisy diffs. Large binary revisions bloat every clone. Nested copies drift from upstream. Splitting every service creates coordination overhead; combining everything creates scale and permission challenges.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [gitattributes documentation](https://git-scm.com/docs/gitattributes) | Official documentation | Study text normalization, diff/merge drivers, export-ignore, and precedence. | Repository policy must be precise and versioned. |
| [Git LFS](https://git-lfs.com/) | Open-source tool | Track a fake large binary locally and inspect pointer files/object storage. | It solves binary transport differently from ordinary Git objects; hosted quotas may apply. |
| [Pro Git: Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) | Official open-source book | Observe the superproject storing a gitlink commit ID. | It explains the exact dependency pin and operational cost. |
| [git-sparse-checkout documentation](https://git-scm.com/docs/git-sparse-checkout) | Official documentation | Build cone-mode partial working trees and inspect what remains in history. | Sparse checkout reduces working-tree scope, not necessarily clone history. |

**STEP-BY-STEP EXPLANATION**

`.gitattributes` is committed policy by path. Mark text and normalization intentionally, for example `* text=auto` plus specific exceptions. A normalized repository stores canonical line endings while checkout conversion can serve platform needs. Use `git check-attr` and a renormalization change isolated from logic. `.gitignore` controls untracked discovery; attributes control how known paths are treated.

Git LFS stores small pointer blobs in Git while content lives in an LFS object store. The client is open source; third-party hosting storage/bandwidth may be limited or paid, so the required lab stays local. Rewriting existing large-file history needs the same coordination warnings as any rewrite.

A submodule stores a gitlink pointing to a commit in another repository; users must initialize/update it and access both remotes. A subtree vendors another repository's content into ordinary commits, making checkout simpler but synchronization/history noisier. Sparse checkout limits populated paths; partial clone filters object transfer. A monorepo makes cross-project atomic change and unified tooling easy while scaling checkout, permissions, CI selection, and ownership. Multiple repos isolate access/releases but require cross-repo dependency coordination.

**THE MAIN IDEA IN SIMPLE WORDS:** Put policy and boundaries in versioned evidence; choose scale tools by transfer, ownership, and release constraints.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
ordinary Git:   tree -> blob containing binary bytes
Git LFS:        tree -> small pointer blob -> LFS object store -> binary bytes

superproject tree -> gitlink (mode 160000) -> exact commit in dependency repo

sparse checkout: full/filtered object knowledge + only selected paths in WT
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Gain | Cost / failure mode |
| --- | --- | --- |
| Attributes normalization | Stable cross-platform diffs | One-time renormalization churn; bad patterns affect many paths |
| Git LFS | Small Git objects for binary versions | Separate availability, auth, quotas, backup, and migration |
| Submodule | Exact independent dependency commit | Detached dependency checkout and two-repo workflow complexity |
| Subtree | Simple consumer checkout | Vendor history/updates can be bulky and error-prone |
| Monorepo | Atomic cross-project changes and unified tooling | Scale, CI selection, ownership, access, and release tooling |
| Multi-repo | Isolation and independent lifecycle | Coordinated changes and dependency version drift |

**PICTURE IT LIKE THIS**

Attributes are shipping rules printed on packages. LFS puts a claim ticket in the catalogue for an item stored in a warehouse. A submodule records the exact edition number of another book rather than photocopying it.

**SMALL WORKING EXAMPLE**

```bash
printf "* text=auto\n*.sh text eol=lf\n*.bat text eol=crlf\n*.png binary\n" > .gitattributes
git check-attr --all -- scripts/build.sh assets/logo.png
git add --renormalize .
git diff --staged --stat

git sparse-checkout init --cone
git sparse-checkout set docs src/component-a
git sparse-checkout list
git ls-tree HEAD path/to/submodule
```

Keep any renormalization commit separate, review it from a clean clone, and never combine it with functional edits.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** Attributes define repository file behavior; LFS stores large content outside normal Git; submodules pin another repository; sparse checkout limits visible paths.

**Professional answer:** I choose among them from object transfer, checkout, ownership, access, atomicity, CI, release, and recovery constraints. LFS adds a separate content service; a submodule is mode-160000 commit identity; sparse checkout changes worktree population, while partial clone changes object transfer.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Create and verify cross-platform attributes without functional churn. |
| Medium | Compare submodule and subtree update/clone experience for the same tiny dependency. |
| Hard | Measure full versus sparse/partial workflows and design a monorepo or multi-repo boundary with CI/ownership/release trade-offs. |

**WHY THE NEXT TOPIC IS NEEDED:** Repository mechanics do not decide how a team integrates and releases. Workflow design must fit team size, deployment frequency, compliance, CI maturity, and hotfix policy.

### Phase 13 Project - Scalable Repository Architecture Lab

| Field | Requirement |
| --- | --- |
| **Scenario** | A team has cross-platform scripts, a large binary model, a shared library, three services, and slow CI clones. |
| **Why this project exists** | It tests repository decisions as architecture rather than fashionable commands. |
| **Skills being practiced** | Attributes, line endings, LFS, sparse/partial checkout, submodule/subtree, monorepo trade-offs, maintenance. |
| **Prerequisites** | Regression Hunt and Signed Release. |
| **Open-source tools required** | Git CLI, Git LFS client, local bare remotes, shell timing tools. |
| **Starting repository state** | Small multi-service fixture with text churn, fake binary versions, and an external tiny library. |

**Step-by-step tasks:** normalize attributes in an isolated commit; track the fake binary through local LFS; integrate the library once as submodule and once as subtree in separate branches; configure sparse checkout; measure clone/checkout/CI inputs; write an architecture decision record.

**Commands to investigate or use:** `git check-attr`, `git add --renormalize`, `git lfs track/ls-files`, `git submodule add/update/status`, `git subtree add/pull`, `git sparse-checkout`, `git clone --filter=blob:none`, `git count-objects -vH`.

**Expected Git state or graph:** separate comparison branches converge only in the ADR decision; normal main keeps one chosen dependency strategy and versioned attributes.

**How to verify:** fresh cross-path clones, LFS pointer/content checks, dependency commit proof, sparse path list, measurements, and no missing build input.

| Difficulty | Requirement |
| --- | --- |
| Easy | Eliminate line-ending noise. |
| Medium | Reproduce LFS and dependency checkout locally. |
| Hard | Defend monorepo/multi-repo and dependency strategy from measured constraints and recovery requirements. |

**Deliberate failure or mistake to reproduce:** clone without fetching the external dependency/LFS content. **Recovery challenge:** diagnose pointer/gitlink state, fetch the missing content safely, and improve onboarding checks.

**Common mistakes:** treating LFS as free hosted storage, confusing ignore with attributes, committing renormalization with logic, or assuming sparse checkout reduces all history transfer.

**Definition of done:** a fresh clone builds with documented prerequisites and the ADR quantifies trade-offs. **Evidence to save / portfolio evidence:** attributes diff, LFS pointer trace, dependency comparison, measurements, ADR, and onboarding validation. **Interview explanation:** defend the chosen boundary and name when it fails. **Next-phase preparation:** define a team/release scenario that uses this repository.

### Git Checkpoint

This project is mirrored in the [full **Scalable Repository Architecture Lab** card](../guides/Projects.md#git-phase-13-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 13 complete?** [Build the full Phase 13 project card](../guides/Projects.md#git-phase-13-project) · [Continue to Phase 14](#phase-14---professional-team-workflows)

---

<a id="phase-14"></a>

# PHASE 14 - Professional Team Workflows

**Track:** Professional Delivery

**WHAT YOU WILL BE ABLE TO DO:** Select and document a branching, integration, release, hotfix, and merge policy that fits a team's constraints.

**WHAT YOU SHOULD KNOW FIRST:** All local/collaboration mechanics plus CI and release basics from the companion roadmaps.

**WHAT YOU HAVE LEARNED SO FAR:** Git permits many graphs. A professional workflow deliberately restricts those possibilities so people and automation can coordinate reliably.

## 14.1 Feature Branches, Flows, Trunk, Forks, and Merge Policies

**WHY YOU ARE LEARNING THIS:** A workflow is an operating agreement, not a diagram copied from a popular company.

**THE PROBLEM THIS SOLVES:** Unnamed rules create inconsistent reviews, long-lived divergence, environment branches, emergency bypasses, and releases nobody can reproduce. Overengineered Git Flow can burden a continuously deployed small team; unmanaged trunk can overwhelm a team without tests or flags.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [3 Git Workflows Every Developer Should Know (And When to Use Each) - TechWorld with Nana](https://www.youtube.com/watch?v=GQQqf-C2ha4) | Free verified video | Compare team flow and failure pressures, not just branch names. | It offers a current professional overview. |
| [Trunk Based Development](https://trunkbaseddevelopment.com/) | Free methodology reference | Study short-lived branches, branch-by-abstraction, release branches, and CI prerequisites. | It connects integration frequency to delivery design. |
| [Atlassian Git Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows) | Free tutorial | Compare centralized, feature, Gitflow, and forking mechanics. | It provides accessible workflow diagrams and trade-offs. |
| [Google Code Review Developer Guide](https://google.github.io/eng-practices/review/) | Free engineering guide | Read author/reviewer responsibilities and review-speed guidance. | Branch diagrams fail without a healthy human review loop. |

**STEP-BY-STEP EXPLANATION**

Start with constraints: team/contributor trust, deployment frequency, release trains, supported versions, regulated approvals, repository scale, feature-flag/test maturity, and incident response. Then decide the protected integration branch, maximum branch lifetime, update strategy, required checks/reviews, merge method, release tagging, hotfix path, and exception/rollback policy. Environment configuration should normally be promoted as artifacts/configuration - not represented by permanently merging code through `dev`, `qa`, and `prod` branches.

Merge commit preserves topology and granular commits. Squash merge makes one mainline commit per proposal but loses internal commit identity on main. Rebase-and-merge creates a linear series of new IDs and requires every commit to be coherent. Choose one default and document exceptions. Linear history is a means for navigation/bisect, not a moral goal; true merge topology may be valuable.

**THE MAIN IDEA IN SIMPLE WORDS:** Choose the smallest workflow that makes integration, release, and recovery predictable for this team.

**Workflow Comparison**

| Workflow | Internal process / suitable team | Advantages | Disadvantages / failure modes | CI, release, hotfix | When not to use |
| --- | --- | --- | --- | --- | --- |
| Feature-branch workflow | Branch from protected main, review, checks, integrate; most small/medium teams | Clear proposal boundary and review | Long branches diverge; large PRs become rubber stamps | CI per branch/PR; tag main; hotfix from release target | When branches routinely live weeks or review cannot keep up |
| GitHub Flow | Short branch → PR → deployable main; web/SaaS teams | Simple, continuous, strong review/deploy link | Needs main always releasable and deployment controls | Every merged commit is candidate; hotfix uses same fast path | Many supported versions or scheduled complex releases |
| GitLab Flow | Upstream-first with environment/release branches where required | Adds explicit release/environment constraints | Can devolve into merge-forward branch bureaucracy | CI controls promotions; hotfix targets supported release then propagates | If environment branches merely duplicate deployment configuration |
| Git Flow | `develop`, feature, release, hotfix, main; versioned products/release trains | Explicit parallel release stabilization and hotfix path | Many long-lived branches, repeated merges, integration delay | CI on several branches; releases/hotfixes are first-class | Small continuously deployed product with one supported version |
| Trunk-based development | Commit to trunk or very short branches; flags/branch-by-abstraction; mature CI teams | Continuous integration, tiny divergence, rapid feedback | Requires excellent tests, review speed, flags, and safe rollout | CI protects trunk; release tags/short stabilization branches; hotfix trunk then release | Weak automated verification or changes cannot be decomposed safely |
| Forking workflow | Contributor fork → topic branch → upstream PR; public/open-source or low-trust contributors | Permission isolation and broad contribution | Fork sync, duplicate CI, maintainer load | Untrusted CI has no secrets; maintainers release; urgent fixes may be maintainer branches | Tight internal team where forks add needless remote overhead |
| Release/hotfix branches | Cut only for supported versions; fix on appropriate canonical line and propagate | Supports multiple deployed versions | Cherry-pick drift and missed propagation | Per-line CI/security; signed tags; documented backport order | One continuously deployed version with reliable rollback |

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
trunk-based:   A---B---C---D---E  main (integrate at least daily)
                         tags: v1.2

release lines: A---B---C---D---E  main
                        \
                         R---H  release/1.x (supported hotfix)

forking: upstream/main <- reviewed PR <- contributor/fork:topic
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Policy | Gain | Cost / failure mode |
| --- | --- | --- |
| Squash merge | One proposal/commit on main | Loses internal mainline IDs and granular revert/blame |
| Merge commit | Topology and original IDs | Dense graphs if branches live long or merge repeatedly |
| Rebase-and-merge | Linear granular series | Rewrites IDs; weak commits remain weak |
| Merge queue | Tests candidate combinations against changing main | Queue latency/capacity and stale-check design |
| Branch lifetime limit | Bounds divergence | Requires work slicing and feature isolation |

**PICTURE IT LIKE THIS**

A workflow is traffic law for movable signposts. More intersections need rules, but adding traffic lights to an empty road only slows everyone down.

**SMALL WORKING EXAMPLE**

```text
Repository policy excerpt
- protected branch: main; no direct human pushes
- branch lifetime target: <= 2 working days
- required evidence: format, unit, integration, secret scan
- required review: 1 owner; 2 for auth/payment policy
- default integration: squash; preserve merge commits for release integration
- release: annotated signed vMAJOR.MINOR.PATCH tag on tested main
- hotfix: branch from affected tag, test, integrate, tag patch, forward-fix main
- emergency: named approver, recorded reason, immediate retrospective
```

Verify policy by simulating normal change, stale branch, failed check, release, hotfix, and emergency exception.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** I choose a workflow based on how often the team integrates/releases and how much review and testing it has; short branches reduce conflicts.

**Professional answer:** I derive branch/ref lifecycle, integration method, checks, ownership, release/hotfix propagation, and exceptions from deployment frequency, supported versions, contributor trust, compliance, and CI/flag maturity. I name failure modes and metrics such as branch age, review time, queue time, and revert rate.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Choose between GitHub Flow and Git Flow for two contrasting scenarios. |
| Medium | Simulate merge, squash, and rebase-merge outcomes on the same proposal and compare recovery. |
| Hard | Design workflows for a five-person SaaS team, a regulated release train, and a public project; run failure table-tops for each. |

**WHY THE NEXT TOPIC IS NEEDED:** A policy document cannot enforce itself or prove a contributor, commit, test, and artifact relationship. CI, protection, signing, scanning, queues, and maintenance turn workflow intent into evidence.

### Phase 14 Project - Team Workflow Design Studio

| Field | Requirement |
| --- | --- |
| **Scenario** | Advise three teams: a daily-deploy SaaS team, a regulated product supporting two versions, and a public open-source project. |
| **Why this project exists** | It tests workflow selection against constraints rather than preference. |
| **Skills being practiced** | Workflow comparison, merge policy, CI/release/hotfix interaction, failure modes, monorepo/team size, metrics. |
| **Prerequisites** | Scalable Repository Architecture Lab. |
| **Open-source tools required** | Git CLI and Mermaid/text diagrams; optional Forgejo/Gitea. |
| **Starting repository state** | One reusable fixture and three written constraint briefs. |

**Step-by-step tasks:** elicit constraints; select workflow for each; define refs/owners/lifetimes/checks/merge/release/hotfix/emergency rules; simulate one normal change and two failures per team; compare graphs and metrics; write ADRs.

**Commands to investigate or use:** branch/fetch/merge/rebase/tag commands plus `git log --first-parent`, `git range-diff`, `git for-each-ref`, and forge protection configuration where available.

**Expected Git state or graph:** three distinct graphs that match the documented policies; releases/hotfixes are traceable to reviewed commits.

**How to verify:** table-top scripts, policy-to-ref mapping, fresh clones, test gates, and peer-readable ADRs.

| Difficulty | Requirement |
| --- | --- |
| Easy | Select and justify defaults. |
| Medium | Simulate hotfix/release propagation and three integration methods. |
| Hard | Inject stale branches, failed checks, urgent security fix, and maintainer absence; revise policy from evidence. |

**Deliberate failure or mistake to reproduce:** use one identical workflow for all teams. **Recovery challenge:** identify mismatches, redesign the minimal rules, and show how graph/lead-time/risk change.

**Common mistakes:** equating environments with branches, adopting Git Flow by name only, forcing linear history at any cost, or omitting emergency and backport policy.

**Definition of done:** each team's rules address normal delivery, releases, hotfixes, failures, and “when not to use” evidence. **Evidence to save / portfolio evidence:** three ADRs, graphs, failure transcripts, policy matrices, and metrics. **Interview explanation:** defend why one workflow is wrong for another team. **Next-phase preparation:** implement the chosen open-source-team policy as automated gates.

### Git Checkpoint

This project is mirrored in the [full **Team Workflow Design Studio** card](../guides/Projects.md#git-phase-14-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 14 complete?** [Build the full Phase 14 project card](../guides/Projects.md#git-phase-14-project) · [Continue to Phase 15](#phase-15---ci-trust-security-and-repository-health)

---

<a id="phase-15"></a>

# PHASE 15 - CI, Trust, Security, and Repository Health

**Track:** Professional Delivery

**WHAT YOU WILL BE ABLE TO DO:** Design repository gates, signed evidence, safe CI for untrusted changes, merge queues, secret scanning, hooks, and maintenance/diagnostic routines.

**WHAT YOU SHOULD KNOW FIRST:** All previous phases; [`DevOps.md`](./DevOps.md#phase-7) and [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md#phase-16) deepen runtime and supply-chain context.

**WHAT YOU HAVE LEARNED SO FAR:** Workflow rules define desired collaboration. Trust requires proving which identity proposed/approved a change, which code checks ran, which commit produced an artifact, and how exceptions are contained.

## 15.1 From Commit to Trusted Integration

**WHY YOU ARE LEARNING THIS:** A clean graph can still contain vulnerable code, leaked secrets, forged identity claims, flaky checks, or abandoned refs.

**THE PROBLEM THIS SOLVES:** Local hooks are bypassable, CI from forks can exfiltrate secrets, mutable action tags can change, stale required checks can merge bad combinations, and signatures can be displayed without a meaningful trust policy.

**SEE IT BEFORE YOU MEMORIZE IT**

| Resource | Type | What to watch or practice | Why it belongs here |
| --- | --- | --- | --- |
| [GitHub Skills: Hello GitHub Actions](https://github.com/skills/hello-github-actions) | Free public exercise; proprietary platform/free tier | Build a small PR workflow and inspect event/permission context. | It gives a hosted CI example while remaining optional. |
| [Git hooks documentation](https://git-scm.com/docs/githooks) | Official documentation | Classify client versus server hooks and bypassability. | Hooks assist local feedback but do not replace central enforcement. |
| [Git signing configuration](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work) | Official open-source book | Sign and verify commits/tags; document key trust and rotation. | Cryptographic evidence needs operational context. |
| [Google Code Review Developer Guide](https://google.github.io/eng-practices/review/) | Free engineering guide | Connect human approval with automated evidence. | Trust is both technical and social. |

**STEP-BY-STEP EXPLANATION**

Fast local hooks can format, lint, or prevent obvious mistakes; developers can bypass or fail to install them, so required truth belongs in CI/server policy. CI checks out an exact commit, uses pinned dependencies/actions, minimal permissions, isolated runners, no production secrets for untrusted forks, deterministic tests, and immutable artifacts labeled by commit ID. Secret scanning and dependency/static/IaC checks provide signals; findings need owners, severity/context, and a response path.

Protected branches/rulesets restrict deletion, force updates, direct pushes, and integration without reviews/checks. A merge queue tests proposed changes combined with the latest target state, reducing the “each PR was green alone” race. Queue design must handle throughput, cancellation, flaky checks, and priority emergencies.

Signed commits/tags bind bytes to a key identity, not automatically to a trusted human or reviewed change. Define accepted signing methods/keys, verification, expiry/revocation, bot identity, and what happens when signing is unavailable. Repository health includes pruning stale remote-tracking refs, auditing large/unreachable objects and refs, running background maintenance, documenting ownership, archiving responsibly, and diagnosing confusing state with `status`, graph, refs, upstreams, operations-in-progress, and reflog before changing anything.

**THE MAIN IDEA IN SIMPLE WORDS:** Trust a chain of verified evidence and policy, not a green badge or signature in isolation.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```text
contributor ref -> proposed commit -> review -> isolated required checks
       |                |               |             |
   identity          signature       ownership     tests/scans/build
       +----------------+---------------+-------------+
                                |
                         merge queue candidate
                                |
                                v
                     protected main -> signed tag -> artifact by commit ID
```

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Control | Gain | Cost / failure mode |
| --- | --- | --- |
| Client hook | Fast feedback | Bypassable and inconsistently installed |
| Required CI | Central repeatable evidence | Latency, flake, runner compromise, bad permissions |
| Branch protection | Prevents risky ref updates | Admin bypass/emergency process can become invisible |
| Merge queue | Tests combined current state | Queue delay and capacity management |
| Signing | Cryptographic origin/integrity claim | Key trust, theft, expiry/revocation, bot management |
| Secret scanning | Earlier exposure detection | False positives/negatives; still requires rotation/incident response |

**PICTURE IT LIKE THIS**

A secure release is a chain of custody: signed labels, independent inspection, controlled handoffs, and a ledger of exceptions. One stamped box is not the whole chain.

**SMALL WORKING EXAMPLE**

```bash
git status
git log --oneline --graph --decorate --all
git branch -vv
git remote -v
git show-ref
git reflog -10
git maintenance run
git count-objects -vH
git fsck --connectivity-only
git log --show-signature -1
git verify-tag v1.1.0
```

This is the “confusing repository state” read-only ladder. Look for merge/rebase/cherry-pick state files through `git status`; change one thing only after the graph and intended invariant are explicit.

**HOW TO EXPLAIN THIS IN AN INTERVIEW**

**Beginner answer:** I protect main, require review and automated checks, keep secrets out of untrusted jobs, and sign releases so the exact tested commit can be verified.

**Professional answer:** I design a least-privilege evidence chain from contributor identity/ref to reviewed commit, isolated deterministic checks, merge-queue candidate, protected ref, signed tag, and immutable artifact. I threat-model bypasses, mutable dependencies, runner trust, key lifecycle, secret response, and emergency exceptions.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Create a local hook and demonstrate why `--no-verify` means CI must enforce the same rule. |
| Medium | Build a free/local CI simulation with protected-main rules, secret scan, required tests, signed tag verification, and least privilege. |
| Hard | Simulate forked untrusted CI, stale-green merge race, flaky check, compromised action tag, signing-key revocation, and emergency bypass; document controls. |

**WHY THE NEXT TOPIC IS NEEDED:** There is no final Git command. The remaining work is integrating every mechanism into a professional lifecycle, auditing the result, and explaining the decisions under interview pressure.

### Phase 15 Project - Trusted Delivery Gate

| Field | Requirement |
| --- | --- |
| **Scenario** | A public project must accept untrusted contributions and produce verified releases without exposing secrets or bypassing review. |
| **Why this project exists** | It turns workflow claims into enforceable, inspectable evidence. |
| **Skills being practiced** | CI/CD Git triggers, hooks, protection, reviews/checks, queues, signing, scanning, maintenance, confusing-state diagnosis. |
| **Prerequisites** | Team Workflow Design Studio. |
| **Open-source tools required** | Git, Forgejo/Gitea Actions-compatible runner or a public GitHub free workflow, Gitleaks, GnuPG/SSH signing, shell tests. |
| **Starting repository state** | Open-source fixture with workflow policy, two contributor clones, fake secret, signed-release test key, and deliberate stale candidate. |

**Step-by-step tasks:** implement fast local hook and equivalent CI; minimize workflow permissions; isolate untrusted contribution; require review/tests/secret scan; simulate merge queue; sign/verify release; revoke test key; run maintenance; diagnose a prepared rebase/conflict/upstream state using the read-only ladder.

**Commands to investigate or use:** `git verify-commit/tag`, `git log --show-signature`, `git status`, `git branch -vv`, `git show-ref`, `git reflog`, `git maintenance`, `git fsck`, plus forge policy/CI configuration.

**Expected Git state or graph:** only reviewed, green, current-base changes reach protected main; release tag targets the verified integration; rejected/failed candidates remain inspectable without secrets.

**How to verify:** fresh clone, policy negative tests, untrusted job environment audit, signature/key-revocation evidence, queue race simulation, and repository health report.

| Difficulty | Requirement |
| --- | --- |
| Easy | Prove local hook bypass and central gate enforcement. |
| Medium | Complete protected reviewed signed release. |
| Hard | Reproduce all six threat/failure scenarios and show containment/recovery evidence. |

**Deliberate failure or mistake to reproduce:** let an untrusted job request a protected secret and let two individually green branches conflict when combined. **Recovery challenge:** prove the secret was never exposed, reduce permissions, test the merged candidate, and integrate only after current evidence.

**Common mistakes:** trusting forks with secrets, pinning mutable CI actions, equating signed with approved, permanent admin bypass, or running maintenance before preserving incident evidence.

**Definition of done:** the complete negative-test suite proves unauthorized/unsafe paths fail closed and one valid change produces a verified release. **Evidence to save / portfolio evidence:** policy/config, CI logs, permissions table, queue graph, signature verification, threat drill, and health report. **Interview explanation:** trace trust from contributor to artifact and name residual risk. **Next-phase preparation:** use all evidence in the capstone and interview track.

### Git Checkpoint

This project is mirrored in the [full **Trusted Delivery Gate** card](../guides/Projects.md#git-phase-15-project). Run that card's exact checkpoint after testing; its staging path and commit message are canonical so you do not commit the same milestone twice.

> **Phase 15 complete?** [Build the full Phase 15 project card](../guides/Projects.md#git-phase-15-project) · [Build the complete Git portfolio project](../guides/Projects.md#git-main-portfolio-project) · [Return to the phase index](#phase-index)

---

## Phase Project Map

| Git phase | Project in `Git.md` | Matching entry in `Projects.md` |
| ---: | --- | --- |
| 01 | Reproducible Git Workbench | [GIT PHASE 1 MINI-PROJECT](../guides/Projects.md#git-phase-1-project) |
| 02 | Three-State Change Journal | [GIT PHASE 2 MINI-PROJECT](../guides/Projects.md#git-phase-2-project) |
| 03 | Atomic History Exhibit | [GIT PHASE 3 MINI-PROJECT](../guides/Projects.md#git-phase-3-project) |
| 04 | Object Database Archaeology | [GIT PHASE 4 MINI-PROJECT](../guides/Projects.md#git-phase-4-project) |
| 05 | Parallel Feature Branch Lab | [GIT PHASE 5 MINI-PROJECT](../guides/Projects.md#git-phase-5-project) |
| 06 | Conflict Resolution Gauntlet | [GIT PHASE 6 MINI-PROJECT](../guides/Projects.md#git-phase-6-project) |
| 07 | Distributed Review Simulation | [GIT PHASE 7 MINI-PROJECT](../guides/Projects.md#git-phase-7-project) |
| 08 | Safe Undo Decision Lab | [GIT PHASE 8 MINI-PROJECT](../guides/Projects.md#git-phase-8-project) |
| 09 | Reflog Rescue Mission | [GIT PHASE 9 MINI-PROJECT](../guides/Projects.md#git-phase-9-project) |
| 10 | Curated History Workshop | [GIT PHASE 10 MINI-PROJECT](../guides/Projects.md#git-phase-10-project) |
| 11 | Context-Switching Workbench | [GIT PHASE 11 MINI-PROJECT](../guides/Projects.md#git-phase-11-project) |
| 12 | Regression Hunt and Signed Release | [GIT PHASE 12 MINI-PROJECT](../guides/Projects.md#git-phase-12-project) |
| 13 | Scalable Repository Architecture Lab | [GIT PHASE 13 MINI-PROJECT](../guides/Projects.md#git-phase-13-project) |
| 14 | Team Workflow Design Studio | [GIT PHASE 14 MINI-PROJECT](../guides/Projects.md#git-phase-14-project) |
| 15 | Trusted Delivery Gate | [GIT PHASE 15 MINI-PROJECT](../guides/Projects.md#git-phase-15-project) |

---

<a id="main-git-capstone"></a>

## Main Git Capstone Project - Open-Source Team Delivery Lifecycle

**Business or team scenario:** A small team maintains a public open-source command-line application with daily changes, external contributors, two supported release lines, and a zero-tolerance policy for exposed credentials. The project must accept changes, review them, recover from realistic mistakes, release verifiable artifacts, and survive a hotfix without losing traceability.

**Why this capstone exists:** It combines the complete roadmap into one observable lifecycle. The product can remain tiny; the quality of repository state, history, review, recovery, release, and evidence is the deliverable.

**Roles being simulated:** contributor, maintainer, code owner/reviewer, CI/security reviewer, release manager, and incident commander. One learner may perform all roles in separate clones and a timestamped decision log.

### Repository Rules

| Policy area | Required rule |
| --- | --- |
| Branching strategy | Protected `main`, short-lived contributor branches/forks, and `release/1.x` only while that line is supported |
| Branch naming | `feat/`, `fix/`, `docs/`, `security/`, `release/`, with issue/purpose identifier |
| Commit convention | Atomic, buildable commits; imperative subject; Conventional Commits where it clarifies release intent |
| Review policy | At least one owner approval; two for authentication/release policy; author responds with commits and records resolved discussion |
| CI requirements | Format, unit, integration, secret scan, dependency/license check, build, and tag verification; least privilege; untrusted forks receive no secrets |
| Merge policy | Squash routine PRs; preserve a merge commit when topology is operationally meaningful; no blind force pushes |
| Release policy | Tested annotated signed SemVer tag, changelog, checksums, source archive, release notes, and commit-to-artifact mapping |
| Hotfix policy | Branch from affected release tag/line, review/test, issue patch tag, then forward-fix main and any other supported line |
| Security requirements | `.gitignore`, `.gitattributes`, fake-secret drills only, immediate rotate/revoke in incident procedure, signed release evidence, pinned CI dependencies |
| Exception policy | Named approver, reason, bounded duration, captured evidence, follow-up action, and no silent admin bypass |

### Required Repository Files

Create `README.md`, `LICENSE` using an OSI-approved license, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`, `.gitignore`, `.gitattributes`, `CODEOWNERS` or forge equivalent, pull/merge request template, issue templates, CI workflow, release/hotfix runbook, and architecture/history diagrams. Keep tools and runtime dependencies open source. GitHub is optional as a proprietary platform with free public features; Forgejo or Gitea is the open-source default.

### Lifecycle Tasks

1. Initialize the repository and local bare/forge remotes; document config, default branch, line endings, and trust boundaries.
2. Build the tiny CLI in at least six atomic commits with tests and meaningful history.
3. Configure ignores/attributes, contribution rules, templates, ownership, and branch policy.
4. Simulate two contributors in independent clones/forks; open two reviewable changes with required evidence.
5. Create a realistic content conflict and one rename/delete conflict; resolve from business requirements and preserve verification.
6. Add a `fixup!` commit, rebase the private branch with autosquash, split one mixed commit, and audit with range-diff.
7. Deliberately lose a private commit through reset, recover it with reflog, and save the before/after graph.
8. Commit a fake credential, execute the full contain/rotate-analyze-rewrite-verify-coordinate drill, and demonstrate lease protection against unseen remote movement.
9. Inject a regression among at least 32 commits and locate it with automated `git bisect run`.
10. Implement the least-privilege CI gate, secret scan, signed commit/tag verification, protected-main or local policy simulation, and combined-tip queue check.
11. Compare squash, merge-commit, and rebase-merge results; use the repository policy to select and record one.
12. Create `v1.0.0` as a tested annotated signed tag with changelog, checksums, and release notes.
13. Cut `release/1.x`, add a mainline feature, receive a production hotfix request, patch `1.x`, tag `v1.0.1`, and forward-fix main without duplicate semantic change.
14. Synchronize a fork, review an external-style contribution, and document etiquette, provenance, and contributor credit.
15. Run a final repository audit: refs, upstreams, unreachable/large objects, signatures, stale branches, CI permissions, release reachability, and clean fresh clone.

### Git Milestone Checkpoints

Use the five canonical milestone checkpoints in the [matching full capstone card](../guides/Projects.md#git-main-portfolio-project). They cover the foundation, collaboration, recovery/rewrite, release/workflow, and trusted-delivery audit without duplicating commit commands here.

### Failure and Recovery Scenarios

Required failures are: wrong hunk staged, bad merge resolution, deleted branch, hard reset in disposable clone, dropped rebase commit, stale lease, fake leaked secret, flaky bisect check, untrusted CI secret request, failed signature verification, merge-queue race, and hotfix propagated in the wrong direction. Each incident record must include starting state, expected state, observed symptom, preserved evidence, smallest safe action, recovery, verification, prevention, and shared-history impact.

### Required Deliverables and Evidence

- Repository and contribution documentation listed above.
- Before/after graphs for branching, merge, rebase, reflog recovery, secret rewrite, release, and hotfix.
- Saved `status`, both diffs, `branch -vv`, refs, remotes, reflog excerpts, range-diff, bisect transcript, and fresh-clone verification.
- Pull/merge request with review discussion, requested change, approval, checks, and integration rationale.
- Signed tag/commit verification or a documented test-key limitation; never claim unsigned evidence is signed.
- CI permission table, threat model, negative-test results, secret-response timeline, and lease-refusal proof.
- `v1.0.0` and `v1.0.1` changelog/release artifacts and checksums.
- Post-project history audit and one-page “what I would change for a five-person, regulated, and public team” comparison.

### Rubric

| Area | Weight | Excellent evidence |
| --- | ---: | --- |
| State and internals | 15% | Commands are predicted, inspected, and explained through index/objects/refs. |
| Commit and graph quality | 15% | Atomic buildable commits; intentional merge/rebase history; clear messages. |
| Collaboration and review | 15% | Small PR/MR, useful discussion, ownership, checks, contributor etiquette. |
| Safety and recovery | 20% | Every destructive scenario is contained, recovered, verified, and documented. |
| Workflow/release judgment | 15% | Policies fit scenario; hotfix and supported-line propagation are correct. |
| CI, security, and trust | 15% | Least privilege, untrusted isolation, scans, signatures, queue/race evidence. |
| Portfolio communication | 5% | Reproducible README, clear diagrams, sanitized evidence, concise demo. |

### Definition of Done

Another learner can clone fresh, verify the release, run every required check, reproduce one normal contribution and one recovery drill, trace each artifact to a reviewed commit, and understand the workflow without private context. No real credential, paid dependency, unexplained force update, broken relative link, missing project phase, or unverified “signed/secure” claim remains.

### Portfolio Presentation and Interview Explanation

The README begins with the team problem, repository policy, lifecycle diagram, one-command local verification, release evidence, and a “failure I reproduced and recovered” section. Present a five-minute narrative: why Git rather than a host is the foundation; how index/objects/refs explain the graph; why the workflow fits; how a change becomes a verified release; how reflog/lease/rotation handled failure; what trade-off you would revisit at larger scale.

### Follow-Up Improvement Challenges

- Migrate the collaboration layer between GitHub free tier and Forgejo/Gitea without changing Git history semantics.
- Add a second supported release line and automate safe backport provenance.
- Measure branch age, review latency, queue time, failed-change recovery time, and revert rate.
- Add local Git LFS storage or a submodule and document its disaster-recovery dependency.
- Replace a long-lived branch with branch-by-abstraction or a feature flag and compare integration evidence.

> **CAPSTONE NAVIGATION:** [Build the full matching card in Projects.md](../guides/Projects.md#git-main-portfolio-project) · [Drill the Git interview track](../guides/Interview.md#track-v---git-and-version-control) · [Return to the phase index](#phase-index)

---

## Git Interview Preparation

Use the dedicated [Git and Version Control interview track](../guides/Interview.md#track-v---git-and-version-control) after every phase, not only at the end. For each question, give a simple answer first, then the precise state/graph answer, a trade-off, a verification command, and a recovery path.

| Level | Focus | Live evidence to practice |
| --- | --- | --- |
| Beginner | Git vs GitHub, three states, commits, branches, fetch/pull/push | `status`, both diffs, simple graph, remote-tracking explanation |
| Intermediate | Merge/conflicts, undo selection, reflog, rebase, stash/cherry-pick/worktree | Resolve or recover in a disposable repository while narrating |
| Advanced | Objects/reachability, secret incident, force-with-lease, bisect, signed releases, repository scale | Inspect refs/objects, run recovery/bisect, defend trust and boundary decisions |
| Workflow/design | Team workflow, merge policy, CI/protection/queue, open source | Clarify constraints, draw refs, identify failure/hotfix/release paths |
| Behavioral | Review disagreement, mistake/recovery, incident coordination | STAR story with preserved evidence, decision, result, and changed practice |

Live debugging order: preserve evidence → `git status` → both diffs → `git log --graph --decorate --all` → `git branch -vv` → `git remote -v` → `git show-ref` → operation-specific state → `git reflog` → form a hypothesis → change one thing → verify.

---

# A Closing Note on How This Roadmap Was Built

The 15 phases follow Git's natural pressure sequence rather than copying the repository's usual 20-phase shape. Undo and recovery are separated because safe command selection and incident rescue are different skills; history rewriting follows recovery so experimentation has a practiced safety net; repository scale, workflow design, and trust remain separate because each asks a different architecture question. Git stays central, GitHub remains an optional professionally relevant host, and every required lab can be completed with open-source software and local remotes.

## Appendix A - Important Command State and Safety Matrix

| Command | Reads | Working tree | Index | Commit/ref history | Shared-history safe? | Verify | Typical recovery |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `status` | WT, index, `HEAD` | No change | No change | No change | Yes | It is verification | None needed |
| `diff` | WT/index or named revisions | No | No | No | Yes | Repeat with explicit endpoints | None needed |
| `add` / `add -p` | WT | No | Updates selected entries | Writes blobs; no commit/ref move | Yes | `diff --staged` | `restore --staged` |
| `commit` | Index, parent ref | No | Normally unchanged to new `HEAD` tree | Creates commit; advances branch | Yes until sharing policy issues arise | `show`, graph, status | Amend/reset if private; revert if shared |
| `restore` | Source tree/index | May overwrite selected paths | Optional with `--staged` | No | Yes to shared history; local data risk | Both diffs | Recover from saved patch/source; uncommitted overwrite may be unrecoverable |
| `switch` | Target tree/ref | Updates checkout | Updates checkout | Moves `HEAD`; no branch tip move | Yes | status, branch, graph | Switch back; preserve dirty work first |
| `merge` | Tips/base/index | Updates | Updates | FF moves ref or creates merge commit | Yes when normal push policy allows | tests, staged diff, graph | `merge --abort` before commit; revert after shared |
| `fetch` | Remote refs/objects | No | No | Updates remote-tracking refs | Yes | refs, graph, `FETCH_HEAD` | Fetch again; refs/reflog |
| `pull` | Remote plus integration policy | May update | May update | Fetch + merge/rebase | Depends on chosen integration | inspect before/after graph | abort active operation; reflog |
| `push` | Local/remote refs | No local WT/index | No | Requests remote ref update | Fast-forward normally; policy-dependent | fetch/remote ref/forge UI | Revert shared mistake; coordinate rewrite |
| `commit --amend` | Index/old parent | No | Uses current index | Creates replacement; moves branch | No once old ID is shared | show/range-diff/reflog | Reflog/safety ref |
| `reset --soft` | Target | Keeps | Keeps | Moves branch | No if published | status, staged diff, graph | Reflog/safety ref |
| `reset --mixed` | Target | Keeps | Resets | Moves branch | No if published | both diffs, graph | Reflog then restage |
| `reset --hard` | Target | Overwrites tracked paths | Resets | Moves branch | No; destructive locally | graph/status/tests | Reflog for commits; uncommitted content may be gone |
| `revert` | Target patch | Updates through commit process | Updates/commits | Adds inverse commit | Yes, usually preferred | tests, show, graph | Revert the revert; merge reverts need special care |
| `rebase` | Commit set/new base | Updates during replay | Updates during replay | Creates replacements; moves branch | No for shared old IDs | range-diff, tests, graph | `rebase --abort`, reflog/safety ref |
| `cherry-pick` | Source commit | Updates | Updates | Creates new commit on current parent | Yes if resulting push is allowed | show `-x`, tests, graph | abort before finish; revert after shared |
| `stash` | WT/index | Usually cleans selected state | Usually cleans selected state | Creates local stash commits/ref | Not shared by default | stash list/show, status | Apply kept entry; reflog/fsck as last resort |
| `tag -a/-s` | Target object/key | No | No | Creates tag ref/object | Safe if tag name is new; do not silently move releases | `show`, `verify-tag` | Publish corrected new version; coordinate exceptional tag fix |
| `push --force-with-lease` | Expected remote ref | No | No | Replaces remote ref if lease matches | Exceptional, coordinated only | fetch, old/new mapping, collaborator clone | Restore old remote ref if preserved; coordinate immediately |

## Appendix B - Visual Resource and Practice Index

*Verified through Composio Search, GitHub, and YouTube toolkits during roadmap authoring on 2026-08-17. YouTube items are free learning resources, not open-source software.*

| Resource | Type | Best use |
| --- | --- | --- |
| [Learn Git Branching](https://learngitbranching.js.org/?locale=en_US) ([source](https://github.com/pcottle/learnGitBranching)) | Open-source browser simulator | Branch/HEAD/merge/rebase/reset/cherry-pick/remotes; repeat in real Git afterward |
| [Oh My Git!](https://ohmygit.org/) | Open-source desktop game using real Git | Live repository internals, cards, terminal, and team workflows |
| [Git Katas](https://github.com/eficode-academy/git-katas) | Public open-source exercises | Repeatable basic, merge, rewrite, stash, reset, and recovery setups |
| [Lecture 6: Version Control (git) (2020)](https://www.youtube.com/watch?v=2sjqTHE0zok) | Free university video by Missing Semester | Data model, DAG, objects, refs, remotes, undo; modernize dated `master` examples to `main` |
| [Learn Git – Full Course for Beginners](https://www.youtube.com/watch?v=zTjRZNkhiEU) | Free video by freeCodeCamp.org | Evolving repository from basics through internals, conflicts, rebase, and contribution |
| [Git Internals - How Git Works - Fear Not The SHA!](https://www.youtube.com/watch?v=P6jD966jzlk) | Free Creative Commons video by GitLab | 31-minute object/index/ref internal model |
| [How Git Works: Explained in 4 Minutes](https://www.youtube.com/watch?v=e9lnsKot_SQ) | Free video by ByteByteGo | Four-minute whole-system visual |
| [Learn Git Rebase in 6 minutes // explained with live animations!](https://www.youtube.com/watch?v=f1wnYdLEpgI) | Free animated video by The Modern Coder | Visual commit replay and new IDs |
| [Recovering Lost Commits with Git Reflog](https://www.youtube.com/watch?v=hsAPjNZHv-E) | Free video by Train To Code | Short lost-tip recovery demonstration |
| [Git Tutorial #36: How to Use Git Bisect to Track Down Bugs \| Learn Git](https://www.youtube.com/watch?v=z-AkSXDqodc) | Free video by GitKraken | Regression search and classification loop |
| [GitHub Skills](https://skills.github.com/) | Free hosted exercises; GitHub platform is proprietary | PR/review/conflict/Actions workflow, not Git internals |

## Appendix C - Open-Source and Free Tool Policy

- Required: Git, a text editor, shell, test runner, local bare remotes, and optional GnuPG/SSH signing - all free/open source.
- Optional open-source forge: Forgejo, Gitea, or self-managed GitLab Community Edition.
- Optional proprietary/free-tier platforms: GitHub, GitLab.com, and Bitbucket may appear for professional relevance; none is required to learn Git.
- Git LFS client is open source; hosted LFS quotas may not be free, so the required lab is local.
- Required learning material is freely accessible. Videos are labeled “free,” not falsely called open source.
- Never use real secrets, unauthorized repositories, or a paid trial as an essential lab dependency.

## Appendix D - Companion Bridges

| Need | Continue in |
| --- | --- |
| Broader software engineering, tests, and code review | [`CS.md`](./CS.md#phase-72) |
| Programming/project structure for a first repository | [`CS.md`](./CS.md) and [`Web.md`](./Web.md) |
| SSH, HTTPS, DNS, proxies, and transport diagnosis | [`Networks.md`](./Networks.md) |
| CI/CD, artifacts, GitOps, and platform delivery | [`DevOps.md`](./DevOps.md) Phases 4, 7, 16-17 |
| Cloud IaC, secrets, and delivery governance | [`Cloud.md`](./Cloud.md) Phases 12-16 |
| Secret response, signing, and supply-chain threat modeling | [`ICT_Cybersecurity.md`](./ICT_Cybersecurity.md) Phase 16 |
| Odoo source, OCA contribution, and Odoo.sh branch workflow | [`ODOO.md`](./ODOO.md) |
| Phase projects and complete capstone | [`Projects.md`](../guides/Projects.md#git-and-git-workflows) |
| Spoken questions and live debugging | [`Interview.md`](../guides/Interview.md#track-v---git-and-version-control) |

## Appendix E - Further Official References

- [Git reference documentation](https://git-scm.com/docs) - command authority.
- [Pro Git, 2nd Edition](https://git-scm.com/book/en/v2) and its [public source](https://github.com/progit/progit2) - free/open-source book.
- [git/git source mirror](https://github.com/git/git) - implementation, documentation, and tests; it is a publish-only mirror, so follow the project's documented contribution process rather than opening an ordinary GitHub PR.
- [Forgejo user documentation](https://forgejo.org/docs/latest/user/), [Gitea documentation](https://docs.gitea.com/), and [GitLab documentation](https://docs.gitlab.com/) - forge-specific collaboration behavior.
- [git-filter-repo](https://github.com/newren/git-filter-repo) - advanced coordinated history rewriting.

## Author

**Mohammad Bilal** - zero-to-hero Git and professional collaboration roadmap for the Interview Help repository. Predict the state, inspect the graph, preserve evidence, choose the smallest safe change, and narrate the trade-off.
