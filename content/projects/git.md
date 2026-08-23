# Git Chapter Projects

One required applied project follows every chapter in the [Git roadmap](../roadmaps/Git.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## Setup and state

**Shared unit storyline:** Keep one workspace for Setup and state. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="git-phase-1-project"></a>
### GIT CHAPTER 1 PROJECT

#### PROJECT: Reproducible Git Workbench

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Explain why version control exists, distinguish Git from hosting, configure Git intentionally, and create a disposable repository whose evidence you can trust.

**Chapter topic:** Foundations and Safe Setup

**Unit storyline:** Continue the **Setup and state** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reproducible Git Workbench as a small, finishable program.

#### LESSONS PRACTICED

- **1.1 — From final-final Folders to a Distributed Repository:** Apply From final-final Folders to a Distributed Repository to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Scenario / purpose: Reproduce a safe Git laboratory for a new teammate without hidden settings; prove Git is local and a forge is an optional collaboration layer.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Reproduce a safe Git laboratory for a new teammate without hidden settings; prove Git is local and a forge is an optional collaboration layer.
- Skills / prerequisites: Phase 1; installation verification, config scopes, init, bare remotes, clone, .git, and Git-versus-hosting boundaries.
- Starting state: No workbench directory or online account. Use only Git and a text editor; Forgejo/Gitea is optional and open source.
- Expected state: Before the checkpoint, two working clones point to one local bare remote and README.md is untracked. The checkpoint creates the first intentional commit for Phase 2 to inspect.

#### TECH STACK

- Markdown or a spreadsheet.
- A small controlled dataset.
- Git.

#### BUILD IT STEP BY STEP

1. Record git --version and a sanitized git config --list --show-origin; set honest identity, editor, and main deliberately.
2. Create git-workbench, run git init, add an untracked README, and locate repository administration with git rev-parse --git-dir.
3. Create ../workbench-remote.git with git init --bare, add it as a remote, and make a second clone.
4. Document working tree versus .git, and local Git versus GitHub/GitLab/Forgejo/Gitea responsibilities.
5. Verify both clones and remote URLs from a clean terminal; save no token, credential, or unsanitized identity output.

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
git add -- git/setup/chapter-1-reproducible-git-workbench
git commit -m "feat(reproducible-git-workbench): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 1](../roadmaps/Git.md#phase-1) | [CONTINUE TO GIT CHAPTER 2](../roadmaps/Git.md#phase-2)


<a id="git-phase-2-project"></a>
### GIT CHAPTER 2 PROJECT

#### PROJECT: Three-State Change Journal

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Predict and inspect the working tree, index, and repository; stage only the intended content; and read every common file state.

**Chapter topic:** The Three-State Model

**Unit storyline:** Continue the **Setup and state** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Three-State Change Journal as a small, finishable program.

#### LESSONS PRACTICED

- **2.1 — Working Tree, Index, Repository, and the File Lifecycle:** Implement or demonstrate Working Tree, Index, Repository, and the File Lifecycle in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Prove to a reviewer exactly what the next commit contains through working-tree/index/repository evidence.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Prove to a reviewer exactly what the next commit contains through working-tree/index/repository evidence.
- Skills / prerequisites: Phase 2 and Reproducible Git Workbench; lifecycle states, status, both diffs, patch staging, ignores, and untracking.
- Starting state: One committed README plus an unstaged line; Git CLI and editor only.
- Expected graph/state: A---B---C main; B/C each contain one concern and ignored build.log never enters the index.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Create journal.md, .gitignore, and generated build.log; capture untracked, staged, committed, and modified states.
2. Put two unrelated concerns in one file and select one with git add -p.
3. Save git diff and git diff --staged, commit the first concern, then commit the second separately.
4. Prove .gitignore affects untracked discovery but not a path already tracked; untrack the fixture without deleting its working copy.
5. Verify with git status --short, git check-ignore -v, git ls-files, git show --stat, and a clean final status.

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
git add -- git/setup/chapter-2-three-state-change-journal
git commit -m "feat(three-state-change-journal): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 2](../roadmaps/Git.md#phase-2) | [CONTINUE TO GIT CHAPTER 3](../roadmaps/Git.md#phase-3)


<a id="git-phase-3-project"></a>
### GIT CHAPTER 3 PROJECT

#### PROJECT: Atomic History Exhibit

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Create atomic commits, explain snapshot ancestry, compare revisions, and search history by content, path, author, or message.

**Chapter topic:** Commits and History

**Unit storyline:** Continue the **Setup and state** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Atomic History Exhibit as a small, finishable program.

#### LESSONS PRACTICED

- **3.1 — Snapshots, Parents, Revision Syntax, and Commit Quality:** Implement or demonstrate Snapshots, Parents, Revision Syntax, and Commit Quality in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Let a review panel understand five logical changes from history before opening final files.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Let a review panel understand five logical changes from history before opening final files.
- Skills / prerequisites: Phase 3 and Three-State Change Journal; atomic commits, author/committer, messages, revision syntax, comparison, and search.
- Starting state: Clean main with at least three commits; Git CLI and a tiny text project.
- Expected graph/state: A---B---C---D---E---F main; every commit is coherent and independently explainable.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Plan five logical changes, implement them in a deliberately mixed order, and stage them in logical order with patch mode.
2. Write specific subjects; add one body explaining why and one appropriate trailer.
3. Inspect with git log --format=fuller, git show, git rev-parse, and git diff A..B.
4. Answer five questions using git log -S, -G, --follow, --grep, and path limitation.
5. Revert each feature commit on a disposable branch and verify each is a coherent unit; compare final tree hashes after any private cleanup.

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
git add -- git/setup/chapter-3-atomic-history-exhibit
git commit -m "feat(atomic-history-exhibit): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 3](../roadmaps/Git.md#phase-3) | [CONTINUE TO GIT CHAPTER 4](../roadmaps/Git.md#phase-4)


<a id="git-phase-4-project"></a>
### GIT CHAPTER 4 PROJECT

#### PROJECT: Object Database Archaeology

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Walk Git's content-addressed object database, resolve refs and HEAD, explain reachability, and distinguish loose objects, reflogs, and packfiles.

**Chapter topic:** Git Internals and the Commit Graph

**Unit storyline:** Continue the **Setup and state** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Object Database Archaeology as a small, finishable program.

#### LESSONS PRACTICED

- **4.1 — Objects, Refs, HEAD, Reachability, and Storage:** Implement or demonstrate Objects, Refs, HEAD, Reachability, and Storage in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Prove what Git stores and why a detached or “lost” commit can remain recoverable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Prove what Git stores and why a detached or “lost” commit can remain recoverable.
- Skills / prerequisites: Phase 4 and Atomic History Exhibit; objects, trees, refs, HEAD, reachability, reflogs, loose/packed storage.
- Starting state: Six commits and two identical-content paths; Git CLI and optional open-source hex viewer.
- Expected graph/state: A---B---C main and C---D rescue/object-archaeology; D is temporarily unnamed, then rescued.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Map refs with git show-ref; resolve HEAD, its commit/tree, and every blob using rev-parse, cat-file, and ls-tree.
2. Prove two filenames with identical bytes reference one blob.
3. Detach HEAD, create D, switch away, locate D in reflog, inspect it, and name it with a rescue branch.
4. Record git count-objects -vH, run safe git gc, and compare object identity/count/storage afterward.
5. Use git fsck to confirm connectivity and write an object/reachability diagram.

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
git add -- git/setup/chapter-4-object-database-archaeology
git commit -m "feat(object-database-archaeology): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 4](../roadmaps/Git.md#phase-4) | [CONTINUE TO GIT CHAPTER 5](../roadmaps/Git.md#phase-5)


## Branch, merge, remotes

**Shared unit storyline:** Keep one workspace for Branch, merge, remotes. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="git-phase-5-project"></a>
### GIT CHAPTER 5 PROJECT

#### PROJECT: Parallel Feature Branch Lab

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Create, switch, track, compare, rename, and delete branches while preserving useful work and recognizing divergence.

**Chapter topic:** Branching and Parallel Work

**Unit storyline:** Continue the **Branch, merge, remotes** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Parallel Feature Branch Lab as a small, finishable program.

#### LESSONS PRACTICED

- **5.1 — Branch Refs, Upstreams, Divergence, and Cleanup:** Implement or demonstrate Branch Refs, Upstreams, Divergence, and Cleanup in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Model three developers working on a feature, docs, and hotfix from different bases without losing track of refs.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Model three developers working on a feature, docs, and hotfix from different bases without losing track of refs.
- Skills / prerequisites: Phase 5 and Object Database Archaeology; create/switch/rename/delete, upstreams, divergence, naming, reachability.
- Starting state: Clean main, local bare remote, two clones, and no feature branches.
- Expected graph/state: At least three tips from two bases, one ahead/behind upstream relationship, and no unnamed intended work.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Create three purpose-named branches and commit distinct work; publish two with explicit upstreams.
2. Advance the remote from clone B, fetch in clone A, and document local versus remote-tracking refs.
3. Use git branch -vv, merge-base, and left/right graph queries to explain ahead/behind.
4. Rename one branch and attempt safe deletion of merged and unmerged practice branches.
5. Make keep/delete decisions from reachability evidence and save the final ref audit.

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
git add -- git/collaborate/chapter-5-parallel-feature-branch-lab
git commit -m "feat(parallel-feature-branch-lab): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 5](../roadmaps/Git.md#phase-5) | [CONTINUE TO GIT CHAPTER 6](../roadmaps/Git.md#phase-6)


<a id="git-phase-6-project"></a>
### GIT CHAPTER 6 PROJECT

#### PROJECT: Conflict Resolution Gauntlet

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Predict fast-forward and three-way merges, read conflict stages, resolve text/rename/delete/binary cases, abort or continue safely, and verify semantics.

**Chapter topic:** Merging and Conflict Resolution

**Unit storyline:** Continue the **Branch, merge, remotes** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Conflict Resolution Gauntlet as a small, finishable program.

#### LESSONS PRACTICED

- **6.1 — Merge Bases, Merge Commits, Conflicts, and Verification:** Implement or demonstrate Merge Bases, Merge Commits, Conflicts, and Verification in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Resolve content, rename, modify/delete, and binary conflicts from written business intent rather than marker deletion.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Resolve content, rename, modify/delete, and binary conflicts from written business intent rather than marker deletion.
- Skills / prerequisites: Phase 6 and Parallel Feature Branch Lab; merge bases, FF/three-way, index stages, abort/continue, tools, rerere, tests.
- Starting state: Four prepared divergent branch pairs in a disposable clone; Git and optional open-source Meld/KDiff3.
- Expected graph/state: Four tested integration commits with two parents and documented merge bases/resolutions.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Predict each graph and reproduce all four conflict types with git merge --no-commit.
2. Inspect status, git ls-files -u, git diff --cc, and diff3 markers; abort and repeat one scenario.
3. Resolve from stated requirements, stage the final state, run git diff --staged --check and fixture tests, then commit.
4. Enable rerere, recreate a conflict, inspect the reused result, and challenge it with changed semantics.
5. Save before/after graphs and one decision record per conflict.

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
git add -- git/collaborate/chapter-6-conflict-resolution-gauntlet
git commit -m "feat(conflict-resolution-gauntlet): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 6](../roadmaps/Git.md#phase-6) | [CONTINUE TO GIT CHAPTER 7](../roadmaps/Git.md#phase-7)


<a id="git-phase-7-project"></a>
### GIT CHAPTER 7 PROJECT

#### PROJECT: Distributed Review Simulation

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Fetch, integrate, push, synchronize forks, manage multiple remotes, review pull/merge requests, and respect protected shared history.

**Chapter topic:** Remotes, Collaboration, and Open Source

**Unit storyline:** Continue the **Branch, merge, remotes** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Distributed Review Simulation as a small, finishable program.

#### LESSONS PRACTICED

- **7.1 — Object Exchange, Remote-Tracking Refs, Forks, and Review:** Apply Object Exchange, Remote-Tracking Refs, Forks, and Review to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Scenario / purpose: Simulate maintainer and contributors collaborating through forks/remotes, review, checks, and protected-main policy.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Simulate maintainer and contributors collaborating through forks/remotes, review, checks, and protected-main policy.
- Skills / prerequisites: Phase 7 and Conflict Resolution Gauntlet; fetch/pull/push, remote-tracking refs, multiple remotes, fork sync, PR/MR, review etiquette.
- Starting state: Upstream bare/Forgejo/Gitea repository, two contributor clones/forks, clean main.
- Expected graph/state: One reviewed tested integration on upstream main and synchronized forks with documented branch cleanup.

#### TECH STACK

- Markdown or a spreadsheet.
- A small controlled dataset.
- Git.

#### BUILD IT STEP BY STEP

1. Build origin/upstream topology and publish a short contributor branch.
2. Fetch a new upstream commit without integrating and prove the working tree remains unchanged.
3. Open or locally simulate a review; request one justified change and update through a new commit.
4. Resolve an induced conflict, run the required check, choose merge/squash/rebase policy, and integrate.
5. Synchronize the second fork and verify from a fresh clone using refs, graph, tests, and review record.

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
git add -- git/collaborate/chapter-7-distributed-review-simulation
git commit -m "feat(distributed-review-simulation): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 7](../roadmaps/Git.md#phase-7) | [CONTINUE TO GIT CHAPTER 8](../roadmaps/Git.md#phase-8)


## Undo, recover, rewrite

**Shared unit storyline:** Keep one workspace for Undo, recover, rewrite. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="git-phase-8-project"></a>
### GIT CHAPTER 8 PROJECT

#### PROJECT: Safe Undo Decision Lab

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Select restore, unstage, amend, reset, or revert from the affected state, publication boundary, and desired evidence.

**Chapter topic:** Safe Undoing Without Data Loss

**Unit storyline:** Continue the **Undo, recover, rewrite** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Safe Undo Decision Lab as a small, finishable program.

#### LESSONS PRACTICED

- **8.1 — Restore, Amend, Reset, Revert, and the Safety Decision:** Implement or demonstrate Restore, Amend, Reset, Revert, and the Safety Decision in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Solve six different “undo” requests by affected state, desired final state, and publication boundary.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Solve six different “undo” requests by affected state, desired final state, and publication boundary.
- Skills / prerequisites: Phase 8 and Distributed Review Simulation; restore/unstage, amend, reset modes, revert, merge revert, verification.
- Starting state: Tagged baseline, staged/unstaged edits, unpublished commits, and a simulated published merge in disposable clones.
- Expected graph/state: Private cases may replace/move refs; published cases retain ancestry and add inverse commits.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Classify one working-tree discard and one unstage request; inspect both diffs before/after.
2. Amend one unpublished commit and compare old/new objects through reflog.
3. Demonstrate soft, mixed, and hard reset from identical cloned state; record WT/index/ref triples.
4. Revert a published commit and a merge with an explicitly justified mainline.
5. Compare tree hashes, tests, graphs, and collaborator-clone behavior for every result.

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
git add -- git/recover/chapter-8-safe-undo-decision-lab
git commit -m "feat(safe-undo-decision-lab): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 8](../roadmaps/Git.md#phase-8) | [CONTINUE TO GIT CHAPTER 9](../roadmaps/Git.md#phase-9)


<a id="git-phase-9-project"></a>
### GIT CHAPTER 9 PROJECT

#### PROJECT: Reflog Rescue Mission

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Recover deleted branches and lost commits, respond to accidentally committed files or secrets, and coordinate guarded shared-history repair.

**Chapter topic:** Recovery and Shared-History Safety

**Unit storyline:** Continue the **Undo, recover, rewrite** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reflog Rescue Mission as a small, finishable program.

#### LESSONS PRACTICED

- **9.1 — Reflog Rescue, Secret Response, and Guarded Force Updates:** Add an executable Reflog Rescue, Secret Response, and Guarded Force Updates procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Scenario / purpose: Recover deleted/reset work, untrack generated content, and respond to a fake credential already pushed to a shared lab remote.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Recover deleted/reset work, untrack generated content, and respond to a fake credential already pushed to a shared lab remote.
- Skills / prerequisites: Phase 9 and Safe Undo Decision Lab; reflog, fsck, secret containment, git-filter-repo, coordination, leases.
- Starting state: Two disposable clones, bare remote, safety bundle/tag, failure refs, and fake credentials only.
- Expected graph/state: All intended commits have refs; fake-secret path is absent from intended rewritten refs; unseen remote work is preserved.

#### TECH STACK

- An isolated local lab.
- Markdown for the runbook and evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Stop writes and capture status, refs, graph, and reflog; recover a deleted branch and bad-reset tip.
2. Stop tracking a generated file while keeping its working copy and adding ignore policy.
3. Execute fake-secret response: contain/rotate in the scenario, analyze refs, rewrite a fresh clone, and verify absence.
4. Advance the remote from clone B, demonstrate --force-with-lease refusal in A, then fetch and preserve B's work.
5. Complete the approved guarded update and provide collaborator re-clone/reset instructions plus old/new tip mapping.

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
git add -- git/recover/chapter-9-reflog-rescue-mission
git commit -m "feat(reflog-rescue-mission): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 9](../roadmaps/Git.md#phase-9) | [CONTINUE TO GIT CHAPTER 10](../roadmaps/Git.md#phase-10)


<a id="git-phase-10-project"></a>
### GIT CHAPTER 10 PROJECT

#### PROJECT: Curated History Workshop

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Rebase a private branch, resolve rebase conflicts, and use interactive rebase to reword, edit, reorder, squash, fix up, drop, and split commits.

**Chapter topic:** Rebase and Intentional History Rewriting

**Unit storyline:** Continue the **Undo, recover, rewrite** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Curated History Workshop as a small, finishable program.

#### LESSONS PRACTICED

- **10.1 — Merge Versus Rebase and the Interactive Todo List:** Implement or demonstrate Merge Versus Rebase and the Interactive Todo List in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Transform eight messy private commits into four reviewable, buildable commits on current main without harming collaborators.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Transform eight messy private commits into four reviewable, buildable commits on current main without harming collaborators.
- Skills / prerequisites: Phase 10 and Reflog Rescue Mission; rebase internals/conflicts, interactive actions, split, autosquash, safety refs, range-diff.
- Starting state: Eight private commits, two upstream commits, one planned conflict, and safety/pre-rebase.
- Expected graph/state: Old B---D1...D8; new current-main series C---N1---N2---N3---N4 with documented mapping.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Classify commits and create appropriate fixup! commits; write an oldest-first interactive plan.
2. Reword, reorder, drop, squash, and autosquash; mark one mixed commit edit and split it with patch staging.
3. Resolve the planned conflict, test each meaningful intermediate commit, and continue.
4. Compare series with git range-diff, compare intended final trees, and retain the old safety ref.
5. Recover to the old tip once, then return to the curated line to prove the safety plan.

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
git add -- git/recover/chapter-10-curated-history-workshop
git commit -m "feat(curated-history-workshop): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 10](../roadmaps/Git.md#phase-10) | [CONTINUE TO GIT CHAPTER 11](../roadmaps/Git.md#phase-11)


## Release, workflow, trust

**Shared unit storyline:** Keep one workspace for Release, workflow, trust. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="git-phase-11-project"></a>
### GIT CHAPTER 11 PROJECT

#### PROJECT: Context-Switching Workbench

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Switch contexts and move selected changes with stash, patch mode, cherry-pick, worktrees, aliases, and correctly scoped configuration.

**Chapter topic:** Productive Everyday Git

**Unit storyline:** Continue the **Release, workflow, trust** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Context-Switching Workbench as a small, finishable program.

#### LESSONS PRACTICED

- **11.1 — Stash, Patch Selection, Cherry-Pick, Worktrees, and Configuration:** Implement or demonstrate Stash, Patch Selection, Cherry-Pick, Worktrees, and Configuration in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Preserve a half-finished feature while an urgent hotfix is built and backported without mixed changes.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Preserve a half-finished feature while an urgent hotfix is built and backported without mixed changes.
- Skills / prerequisites: Phase 11 and Curated History Workshop; partial stash, patch mode, cherry-pick provenance, worktrees, safe aliases/scopes.
- Starting state: Dirty feature with staged/unstaged/untracked work plus a release branch.
- Expected graph/state: Feature and release contain only intended changes; hotfix/backport IDs differ; no stale stash/worktree remains.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Inventory all three dirty-state categories and stash only selected work with a descriptive name.
2. Create a hotfix worktree/branch, fix and test, then backport with cherry-pick -x.
3. Resume the feature while preserving its intended staged versus unstaged distinction.
4. Define one read-only local graph alias and explain scope/origin.
5. Remove/prune the linked worktree safely and verify status, stash list, worktree list, graph, and tests.

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
git add -- git/professional/chapter-11-context-switching-workbench
git commit -m "feat(context-switching-workbench): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 11](../roadmaps/Git.md#phase-11) | [CONTINUE TO GIT CHAPTER 12](../roadmaps/Git.md#phase-12)


<a id="git-phase-12-project"></a>
### GIT CHAPTER 12 PROJECT

#### PROJECT: Regression Hunt and Signed Release

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Investigate line history responsibly, locate a regression with bisect, and create an auditable versioned release with changelog and signed tag evidence.

**Chapter topic:** Investigation, Tags, and Releases

**Unit storyline:** Continue the **Release, workflow, trust** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Regression Hunt and Signed Release as a small, finishable program.

#### LESSONS PRACTICED

- **12.1 — Blame, Bisect, Tags, Changelogs, and Semantic Versions:** Implement or demonstrate Blame, Bisect, Tags, Changelogs, and Semantic Versions in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Locate a regression in a long history, repair it, and publish a verifiable maintenance release.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Locate a regression in a long history, repair it, and publish a verifiable maintenance release.
- Skills / prerequisites: Phase 12 and Context-Switching Workbench; blame context, automated bisect, tags/signing, changelog, SemVer.
- Starting state: At least 32 commits, known-good tag, bad tip, moved/formatted function, deterministic test target.
- Expected graph/state: v1.0.0 ... first-bad ... fix---v1.0.1; tag targets the exact tested fix.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Compare ordinary blame with -w -C and inspect the responsible commit/context rather than person-first conclusions.
2. Write a good/bad test and run git bisect run; save classifications and reset afterward.
3. Fix the culprit on a maintenance branch and rerun the complete suite.
4. Choose SemVer change from a defined API, update changelog, create annotated/signed tag, and generate checksum/release notes.
5. Verify from a fresh checkout; if signing is unavailable, use annotated tag and document the missing trust step honestly.

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
git add -- git/professional/chapter-12-regression-hunt-and-signed-release
git commit -m "feat(regression-hunt-and-signed-release): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 12](../roadmaps/Git.md#phase-12) | [CONTINUE TO GIT CHAPTER 13](../roadmaps/Git.md#phase-13)


<a id="git-phase-13-project"></a>
### GIT CHAPTER 13 PROJECT

#### PROJECT: Scalable Repository Architecture Lab

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Define attributes and line endings, and choose LFS, sparse checkout, submodules, subtrees, or monorepo practices from explicit constraints.

**Chapter topic:** Large and Multi-Repository Strategies

**Unit storyline:** Continue the **Release, workflow, trust** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Scalable Repository Architecture Lab as a small, finishable program.

#### LESSONS PRACTICED

- **13.1 — Attributes, Large Files, Partial Work, and Repository Boundaries:** Implement or demonstrate Attributes, Large Files, Partial Work, and Repository Boundaries in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Design for cross-platform scripts, fake large binary versions, a shared library, three services, and slow clones.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Design for cross-platform scripts, fake large binary versions, a shared library, three services, and slow clones.
- Skills / prerequisites: Phase 13 and Regression Hunt and Signed Release; attributes, LFS, sparse/partial, submodule/subtree, monorepo trade-offs.
- Starting state: Multi-service fixture with text churn, fake binary, and external tiny library; all required tools open source/local.
- Expected graph/state: Isolated comparison branches and one ADR-selected strategy on main with reproducible checkout.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Add .gitattributes, verify with check-attr, and isolate --renormalize from functional work.
2. Track fake binary through local Git LFS and inspect pointer/content storage.
3. Integrate one library as submodule and subtree on separate branches; compare clone/update/recovery behavior.
4. Configure sparse checkout and blob-filtered clone; measure transfer, checkout, and build inputs.
5. Write an ADR covering ownership, permissions, atomic changes, CI, release, backup, and failure boundaries.

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
git add -- git/professional/chapter-13-scalable-repository-architecture-lab
git commit -m "feat(scalable-repository-architecture-lab): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 13](../roadmaps/Git.md#phase-13) | [CONTINUE TO GIT CHAPTER 14](../roadmaps/Git.md#phase-14)


<a id="git-phase-14-project"></a>
### GIT CHAPTER 14 PROJECT

#### PROJECT: Team Workflow Design Studio

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Select and document a branching, integration, release, hotfix, and merge policy that fits a team's constraints.

**Chapter topic:** Professional Team Workflows

**Unit storyline:** Continue the **Release, workflow, trust** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Team Workflow Design Studio as a small, finishable program.

#### LESSONS PRACTICED

- **14.1 — Feature Branches, Flows, Trunk, Forks, and Merge Policies:** Implement or demonstrate Feature Branches, Flows, Trunk, Forks, and Merge Policies in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Design different workflows for daily-deploy SaaS, regulated two-version product, and public open-source teams.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Design different workflows for daily-deploy SaaS, regulated two-version product, and public open-source teams.
- Skills / prerequisites: Phase 14 and Scalable Repository Architecture Lab; workflow/merge policy, CI, releases/hotfixes, metrics, failure design.
- Starting state: One reusable fixture and three constraint briefs; Git and optional Forgejo/Gitea.
- Expected graph/state: Three distinct graphs whose refs, reviews, releases, and hotfix propagation match their ADRs.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Elicit team/trust/deploy/release/compliance/CI constraints and select the smallest fitting workflow.
2. Define branch/ref lifecycle, owners, maximum age, checks, reviews, merge method, release, hotfix, and emergency policy.
3. Simulate a normal change and compare merge-commit, squash, and rebase-merge evidence.
4. Inject stale branch, failed check, urgent security fix, and unavailable maintainer; update policy from results.
5. Measure branch age/review/queue/recovery signals and finalize three ADRs with “when not to use.”.

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
git add -- git/professional/chapter-14-team-workflow-design-studio
git commit -m "feat(team-workflow-design-studio): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 14](../roadmaps/Git.md#phase-14) | [CONTINUE TO GIT CHAPTER 15](../roadmaps/Git.md#phase-15)


<a id="git-phase-15-project"></a>
### GIT CHAPTER 15 PROJECT

#### PROJECT: Trusted Delivery Gate

#### ARTIFACT TYPE

code

#### CHAPTER OUTCOME

Design repository gates, signed evidence, safe CI for untrusted changes, merge queues, secret scanning, hooks, and maintenance/diagnostic routines.

**Chapter topic:** CI, Trust, Security, and Repository Health

**Unit storyline:** Continue the **Release, workflow, trust** shared workspace. This chapter adds a self-contained code deliverable and one reviewable commit without requiring concepts from later chapters.

Build Trusted Delivery Gate as a small, finishable program.

#### LESSONS PRACTICED

- **15.1 — From Commit to Trusted Integration:** Implement or demonstrate From Commit to Trusted Integration in the shared unit project and add a focused check.

#### SPECIFICATION

- Scenario / purpose: Accept untrusted public contributions and produce verified releases without secret exposure or silent bypass.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scenario / purpose: Accept untrusted public contributions and produce verified releases without secret exposure or silent bypass.
- Skills / prerequisites: Phase 15 and Team Workflow Design Studio; hooks/CI, protection, reviews, queues, signing, scans, maintenance, diagnosis.
- Starting state: Open-source fixture, two clones, fake secret, test signing key, stale candidate, and Forgejo/Gitea or optional GitHub free CI.
- Expected graph/state: Only reviewed, green, current-base changes reach main; verified release tag targets that integration.

#### TECH STACK

- A local code editor.
- Git.
- The language and runtime introduced in the chapter.

#### BUILD IT STEP BY STEP

1. Add a fast local hook and identical central gate; demonstrate local bypass but CI refusal.
2. Minimize workflow permissions and isolate untrusted changes from secrets; run format/test/secret/dependency checks.
3. Simulate a combined-tip merge queue and prove individually green but incompatible changes do not merge.
4. Sign/verify release evidence, revoke the test key in policy, and exercise verification failure.
5. Run the read-only diagnosis ladder and repository maintenance/health audit only after preserving evidence.

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
git add -- git/professional/chapter-15-trusted-delivery-gate
git commit -m "feat(trusted-delivery-gate): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT CHAPTER 15](../roadmaps/Git.md#phase-15) | [RETURN TO THE GIT COURSE](../roadmaps/Git.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="git-main-portfolio-project"></a>
## GIT MAIN PORTFOLIO PROJECT

#### PROJECT: Open-Source Team Delivery Lifecycle

#### DESCRIPTION

Manage a tiny public open-source CLI through a complete professional Git lifecycle: setup, atomic history, contributor forks, review, conflicts, private-history cleanup, recovery, regression diagnosis, trusted CI, signed releases, supported-version hotfix, and final history audit. The repository evidence is the product.

#### WHO THIS IS FOR

- Contributor proposing a small reviewable change
- Maintainer/code owner integrating safely
- CI/security reviewer protecting untrusted inputs
- Release manager and incident commander preserving traceability

#### REPOSITORY, REVIEW, RELEASE, AND SECURITY RULES

- Protected `main`, short-lived contributor branches/forks, and `release/1.x` only while supported.
- Atomic buildable commits; contribution, code-of-conduct, security, ownership, issue/PR templates, ignore/attributes, changelog, and OSI-approved license.
- One owner approval; two for authentication/release policy; required format/unit/integration/secret/dependency/build checks.
- Squash routine PRs, preserve meaningful merge topology, never blind force push, and use explicit emergency records.
- Tested annotated signed SemVer tags, checksums, source artifact, release/hotfix/forward-fix policy, least-privilege CI, and fake-secret drills only.

#### FREE AND OPEN-SOURCE TECH STACK

- Git, shell, any open-source language/test runner, GnuPG or SSH signing, Gitleaks, and local bare remotes
- Forgejo or Gitea plus an Actions-compatible runner as the open-source default
- Optional public GitHub free-tier repository for professional-platform evidence; GitHub itself is not open source
- Git LFS/local dependency fixtures only when used; no paid API, subscription, premium course, or real secret is required

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Foundations:** Reproducible setup, identity/config evidence, local/forge trust boundary.
2. **Phase 2 - Three States:** Intentional index, ignores, staged-diff evidence, selective snapshot.
3. **Phase 3 - History:** At least six atomic buildable commits with meaningful messages and queries.
4. **Phase 4 - Internals:** Object/ref/HEAD map plus detached-commit rescue evidence.
5. **Phase 5 - Branches:** Two contributor branches/forks, upstreams, divergence, and cleanup policy.
6. **Phase 6 - Merges:** Content and rename/delete conflict resolved from requirements with tests.
7. **Phase 7 - Remotes/Review:** PR/MR discussion, requested change, approval, required checks, and chosen integration.
8. **Phase 8 - Undo:** State-based undo table applied to private and shared scenarios.
9. **Phase 9 - Recovery:** Reflog reset rescue, fake-secret rotation/rewrite, and lease-refusal coordination.
10. **Phase 10 - Rebase:** Autosquash, split, conflict, safety ref, and range-diff on private history.
11. **Phase 11 - Daily Tools:** Hotfix worktree, partial stash, backport with provenance, clean resumption.
12. **Phase 12 - Investigation/Release:** Automated 32+ commit bisect and verified `v1.0.0` release.
13. **Phase 13 - Scale:** Versioned attributes plus one measured LFS/dependency/sparse decision and ADR.
14. **Phase 14 - Workflow:** Branch/review/merge/release/hotfix/emergency policy justified by team constraints.
15. **Phase 15 - Trust:** Least-privilege untrusted CI, secret scan, merge-race gate, signatures, maintenance, health audit, and `v1.0.1` hotfix evidence.

#### REQUIRED FAILURE, RECOVERY, AND EVIDENCE

- Reproduce wrong hunk, bad merge resolution, deleted branch, disposable hard reset, dropped rebase commit, stale lease, fake secret, flaky bisect, untrusted secret request, signature failure, merge-queue race, and wrong-direction hotfix propagation.
- For each: starting/expected/observed state, preserved evidence, smallest safe action, recovery, verification, prevention, and shared-history effect.
- Save graphs for branch/merge/rebase/reflog/rewrite/release/hotfix; status/diffs/refs/upstreams/remotes; review/check records; range-diff; bisect transcript; signature/checksum; CI permission/threat table; fresh-clone audit.

#### RUBRIC AND DEFINITION OF DONE

| Area | Weight |
| --- | ---: |
| State/internals and graph quality | 30% |
| Collaboration/review | 15% |
| Safety/recovery | 20% |
| Workflow/release judgment | 15% |
| CI/security/trust | 15% |
| Reproducible portfolio communication | 5% |

Another learner can clone fresh, verify both releases, run checks, reproduce a contribution and recovery drill, trace artifacts to reviewed commits, and understand every exception. No real credential, paid dependency, unexplained force update, missing phase, or unverified signed/secure claim remains.

#### PORTFOLIO AND INTERVIEW PRESENTATION

Lead the README with the team problem, policy, lifecycle diagram, one-command verification, release evidence, and one recovered failure. In five minutes explain Git versus forge, index/objects/refs, workflow fit, contributor-to-artifact trust, reflog/lease/rotation recovery, hotfix propagation, and the next trade-off at larger scale.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in its own `open-source-team-delivery-lifecycle` repository because repository history is the product. Test each phase group and review both staged diffs before committing. Store only sanitized evidence under `evidence/`; never commit signing private keys, tokens, credentials, or raw incident data.

##### Git Checkpoint 1

You have completed **Phases 1-4: repository policy, intentional index, atomic history, and object/ref evidence**. Save the auditable foundation:

```bash
git status
git add -- README.md LICENSE CONTRIBUTING.md CODE_OF_CONDUCT.md SECURITY.md .gitignore .gitattributes evidence
git commit -m "chore(delivery-lifecycle): establish auditable Git foundation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the checks pass and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-7: contributor branches, conflict resolution, review, and protected integration**. Save the reviewed collaboration evidence:

```bash
git status
git add -- README.md src tests evidence
git commit -m "feat(delivery-lifecycle): complete reviewed collaboration flow"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the checks pass and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 8-11: undo decisions, reflog rescue, coordinated rewrite, and context-switching evidence**. Save the recovery record:

```bash
git status
git add -- README.md scripts evidence
git commit -m "fix(delivery-lifecycle): verify recovery and private history cleanup"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the checks pass and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 12-14: bisect result, signed release, repository-scale ADR, and workflow policy**. Save the release and workflow evidence:

```bash
git status
git add -- README.md CHANGELOG.md evidence
git commit -m "docs(delivery-lifecycle): record release and workflow evidence"
```

Verify:

```bash
git log -1 --oneline
git status
git tag --list 'v1.*'
```

Continue only when the checks pass and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 15: least-privilege CI, secret scanning, merge-race checks, hotfix handling, and the final history audit**. Save the trusted-delivery evidence after verifying `v1.0.0` and `v1.0.1` already exist:

```bash
git status
git add -- README.md CHANGELOG.md SECURITY.md evidence
git commit -m "ci(delivery-lifecycle): complete trusted delivery lifecycle"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag --list 'v1.*'
```

The capstone is complete only when a fresh clone passes its checks, both release tags verify, and the working tree is clean.

#### HOW TO RUN IT FOR FREE

1. Use local bare remotes or run Forgejo/Gitea and its runner on a local machine; bind administration to localhost unless deliberately secured.
2. Simulate each role in a separate clone and use fake test credentials only.
3. Run tests, Gitleaks, signing verification, checksums, bisect, and release scripts locally; a public GitHub free-tier mirror is optional.
4. Publish only sanitized diagrams, logs, review screenshots/links, and release evidence; keep keys, raw incident data, and personal identifiers private.
5. Verify from a clean clone, then remove disposable worktrees/containers/remotes while retaining the final public repository and sanitized evidence.

> **MAIN PROJECT NAVIGATION:** [REVIEW GIT PHASE 15](../roadmaps/Git.md#phase-15) | [REVIEW THE GIT CAPSTONE](../roadmaps/Git.md#main-git-capstone) | [RETURN TO THE GIT ROADMAP](../roadmaps/Git.md#phase-index)

---

Build small after every phase. Build the main portfolio project only after you have completed every phase in that roadmap.
<a id="it-administration-projects"></a>
