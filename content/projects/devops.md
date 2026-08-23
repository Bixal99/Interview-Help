# DevOps Chapter Projects

One required applied project follows every chapter in the [DevOps roadmap](../roadmaps/DevOps.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## Flow, Linux, Git

**Shared unit storyline:** Keep one workspace for Flow, Linux, Git. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="devops-phase-1-project"></a>
### DEVOPS CHAPTER 1 PROJECT

#### PROJECT: VALUE STREAM DELIVERY MAP

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Understand DevOps as a sociotechnical feedback system rather than a job title or tool list.

**Chapter topic:** DevOps as a Delivery System

**Unit storyline:** Continue the **Flow, Linux, Git** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Value Stream Delivery Map as a focused exercise for DevOps Delivery Systems. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **1.1 — DevOps as a Delivery System:** Configure or simulate DevOps as a Delivery System, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Map a sample change from idea to production with wait/work time, handoffs, failure rate, recovery time, bottleneck, and one improvement experiment.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Map a sample change from idea to production with wait/work time, handoffs, failure rate, recovery time, bottleneck, and one improvement experiment.
- Define one realistic scenario, its boundaries, and the intended reader for the Value Stream Delivery Map.
- Collect or create the exact inputs needed to apply DevOps Delivery Systems; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create value-stream-delivery-map with app, automation, tests, and deploy folders in a Git repository.
2. Map a sample change from idea to production with wait/work time, handoffs, failure rate, recovery time, bottleneck, and one improvement experiment.
3. Collect or create the exact inputs needed to apply DevOps Delivery Systems; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for DevOps Delivery Systems.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/flow/chapter-1-value-stream-delivery-map
git commit -m "feat(value-stream-delivery-map): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 1](../roadmaps/DevOps.md#phase-1) | [CONTINUE TO DEVOPS CHAPTER 2](../roadmaps/DevOps.md#phase-2)


<a id="devops-phase-2-project"></a>
### DEVOPS CHAPTER 2 PROJECT

#### PROJECT: HARDENED LINUX SERVICE

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Operate Linux confidently through processes, files, permissions, services, packages, and logs.

**Chapter topic:** Linux, the Shell, Files, Permissions, and Services

**Unit storyline:** Continue the **Flow, Linux, Git** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Hardened Linux Service as a focused exercise for Linux and Services. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **2.1 — Linux, the Shell, Files, Permissions, and Services:** Represent Linux, the Shell, Files, Permissions, and Services in the design and justify one decision that depends on it.

#### SPECIFICATION

- Harden and run a Linux service with dedicated identity, least-privilege files, systemd, logs, resource limits, health checks, and safe restart.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Harden and run a Linux service with dedicated identity, least-privilege files, systemd, logs, resource limits, health checks, and safe restart.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Linux and Services in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create hardened-linux-service with app, automation, tests, and deploy folders in a Git repository.
2. Harden and run a Linux service with dedicated identity, least-privilege files, systemd, logs, resource limits, health checks, and safe restart.
3. Use Linux and Services in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for Linux and Services.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/flow/chapter-2-hardened-linux-service
git commit -m "feat(hardened-linux-service): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 2](../roadmaps/DevOps.md#phase-2) | [CONTINUE TO DEVOPS CHAPTER 3](../roadmaps/DevOps.md#phase-3)


<a id="devops-phase-3-project"></a>
### DEVOPS CHAPTER 3 PROJECT

#### PROJECT: INCIDENT TROUBLESHOOTING TOOLKIT

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Diagnose from user symptom through DNS, route, transport, process, resource, and dependency using falsifiable checks.

**Chapter topic:** Systems and Network Troubleshooting

**Unit storyline:** Continue the **Flow, Linux, Git** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Incident Troubleshooting Toolkit as a focused exercise for Systems and Network Troubleshooting. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **3.1 — Systems and Network Troubleshooting:** Configure or simulate Systems and Network Troubleshooting, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Create a read-only diagnostic CLI that checks DNS, route, port, TLS, HTTP, process, resources, logs, and dependency health in order.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create a read-only diagnostic CLI that checks DNS, route, port, TLS, HTTP, process, resources, logs, and dependency health in order.
- Give the user one clear main action and keep all other features secondary.
- Use Systems and Network Troubleshooting in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create incident-troubleshooting-toolkit with app, automation, tests, and deploy folders in a Git repository.
2. Create a read-only diagnostic CLI that checks DNS, route, port, TLS, HTTP, process, resources, logs, and dependency health in order.
3. Use Systems and Network Troubleshooting in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Systems and Network Troubleshooting.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/flow/chapter-3-incident-troubleshooting-toolkit
git commit -m "feat(incident-troubleshooting-toolkit): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 3](../roadmaps/DevOps.md#phase-3) | [CONTINUE TO DEVOPS CHAPTER 4](../roadmaps/DevOps.md#phase-4)


<a id="devops-phase-4-project"></a>
### DEVOPS CHAPTER 4 PROJECT

#### PROJECT: PULL-REQUEST GIT WORKFLOW

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Use Git as a reviewable graph of small changes and choose branching practices that support continuous integration.

**Chapter topic:** Git, Collaboration, and Change History

**Unit storyline:** Continue the **Flow, Linux, Git** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Pull-Request Git Workflow as a focused exercise for Git Collaboration. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **4.1 — Git, Collaboration, and Change History:** Configure or simulate Git, Collaboration, and Change History, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Demonstrate branch, pull request, review, conflict resolution, protected main, release tag, revert, and bisect in a small repository.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Demonstrate branch, pull request, review, conflict resolution, protected main, release tag, revert, and bisect in a small repository.
- Define a small input format, a transformed output format, and where failed records go.
- Use Git Collaboration to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Git.
- GitHub.
- A small sample repository; no application framework required.

#### BUILD IT STEP BY STEP

1. Create pull-request-git-workflow with app, automation, tests, and deploy folders in a Git repository.
2. Demonstrate branch, pull request, review, conflict resolution, protected main, release tag, revert, and bisect in a small repository.
3. Use Git Collaboration to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for Git Collaboration.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/flow/chapter-4-pull-request-git-workflow
git commit -m "feat(pull-request-git-workflow): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 4](../roadmaps/DevOps.md#phase-4) | [CONTINUE TO DEVOPS CHAPTER 5](../roadmaps/DevOps.md#phase-5)


<a id="devops-phase-5-project"></a>
### DEVOPS CHAPTER 5 PROJECT

#### PROJECT: OPERATIONS AUTOMATION CLI

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Replace fragile runbooks with validated, idempotent, testable automation that fails visibly and cleans up safely.

**Chapter topic:** Shell and Python Automation

**Unit storyline:** Continue the **Flow, Linux, Git** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Operations Automation CLI as a focused exercise for Shell and Python Automation. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **5.1 — Shell and Python Automation:** Configure or simulate Shell and Python Automation, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Build an idempotent operations CLI with typed arguments, validation, dry-run, structured logs, safe retry, and predictable exit codes.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build an idempotent operations CLI with typed arguments, validation, dry-run, structured logs, safe retry, and predictable exit codes.
- Give the user one clear main action and keep all other features secondary.
- Use Shell and Python Automation in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create operations-automation-cli with app, automation, tests, and deploy folders in a Git repository.
2. Build an idempotent operations CLI with typed arguments, validation, dry-run, structured logs, safe retry, and predictable exit codes.
3. Use Shell and Python Automation in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Shell and Python Automation.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/flow/chapter-5-operations-automation-cli
git commit -m "feat(operations-automation-cli): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 5](../roadmaps/DevOps.md#phase-5) | [CONTINUE TO DEVOPS CHAPTER 6](../roadmaps/DevOps.md#phase-6)


## Artifacts and CI/CD

**Shared unit storyline:** Keep one workspace for Artifacts and CI/CD. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="devops-phase-6-project"></a>
### DEVOPS CHAPTER 6 PROJECT

#### PROJECT: REPRODUCIBLE ARTIFACT PIPELINE

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Produce immutable, traceable artifacts once and promote the same bytes through every environment.

**Chapter topic:** Builds, Dependencies, Artifacts, and Registries

**Unit storyline:** Continue the **Artifacts and CI/CD** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reproducible Artifact Pipeline as a focused exercise for Builds and Artifacts. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **6.1 — Builds, Dependencies, Artifacts, and Registries:** Configure or simulate Builds, Dependencies, Artifacts, and Registries, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Produce a reproducible versioned artifact from pinned dependencies, checksum it, generate an SBOM, and store it in a local OCI registry.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Produce a reproducible versioned artifact from pinned dependencies, checksum it, generate an SBOM, and store it in a local OCI registry.
- Define a small input format, a transformed output format, and where failed records go.
- Use Builds and Artifacts to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create reproducible-artifact-pipeline with app, automation, tests, and deploy folders in a Git repository.
2. Produce a reproducible versioned artifact from pinned dependencies, checksum it, generate an SBOM, and store it in a local OCI registry.
3. Use Builds and Artifacts to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for Builds and Artifacts.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/delivery/chapter-6-reproducible-artifact-pipeline
git commit -m "feat(reproducible-artifact-pipeline): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 6](../roadmaps/DevOps.md#phase-6) | [CONTINUE TO DEVOPS CHAPTER 7](../roadmaps/DevOps.md#phase-7)


<a id="devops-phase-7-project"></a>
### DEVOPS CHAPTER 7 PROJECT

#### PROJECT: QUALITY-GATED CI PIPELINE

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Integrate every small change through fast, deterministic, security-aware feedback and produce one trusted artifact.

**Chapter topic:** Continuous Integration

**Unit storyline:** Continue the **Artifacts and CI/CD** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Quality-Gated CI Pipeline as a focused exercise for Continuous Integration. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **7.1 — Continuous Integration:** Configure or simulate Continuous Integration, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Create CI that runs format, lint, type, unit, integration, build, and scan stages and stops before publishing on failure.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create CI that runs format, lint, type, unit, integration, build, and scan stages and stops before publishing on failure.
- Define a small input format, a transformed output format, and where failed records go.
- Use Continuous Integration to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- GitHub Actions.
- A small sample application.
- Its normal formatter, linter, and test runner.

#### BUILD IT STEP BY STEP

1. Create quality-gated-ci-pipeline with app, automation, tests, and deploy folders in a Git repository.
2. Create CI that runs format, lint, type, unit, integration, build, and scan stages and stops before publishing on failure.
3. Use Continuous Integration to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for Continuous Integration.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/delivery/chapter-7-quality-gated-ci-pipeline
git commit -m "feat(quality-gated-ci-pipeline): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 7](../roadmaps/DevOps.md#phase-7) | [CONTINUE TO DEVOPS CHAPTER 8](../roadmaps/DevOps.md#phase-8)


<a id="devops-phase-8-project"></a>
### DEVOPS CHAPTER 8 PROJECT

#### PROJECT: CANARY DEPLOYMENT SIMULATOR

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Promote immutable artifacts with progressive exposure, automated verification, database compatibility, and a rehearsed rollback.

**Chapter topic:** Continuous Delivery and Deployment Strategies

**Unit storyline:** Continue the **Artifacts and CI/CD** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Canary Deployment Simulator as a focused exercise for Continuous Delivery. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **8.1 — Continuous Delivery and Deployment Strategies:** Add an executable Continuous Delivery and Deployment Strategies procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Simulate rolling, blue/green, and canary releases with health checks, verification thresholds, traffic changes, and automatic rollback.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Simulate rolling, blue/green, and canary releases with health checks, verification thresholds, traffic changes, and automatic rollback.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Continuous Delivery explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create canary-deployment-simulator with app, automation, tests, and deploy folders in a Git repository.
2. Simulate rolling, blue/green, and canary releases with health checks, verification thresholds, traffic changes, and automatic rollback.
3. Represent the important states or data structures from Continuous Delivery explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for Continuous Delivery.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/delivery/chapter-8-canary-deployment-simulator
git commit -m "feat(canary-deployment-simulator): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 8](../roadmaps/DevOps.md#phase-8) | [CONTINUE TO DEVOPS CHAPTER 9](../roadmaps/DevOps.md#phase-9)


## Containers and Kubernetes

**Shared unit storyline:** Keep one workspace for Containers and Kubernetes. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="devops-phase-9-project"></a>
### DEVOPS CHAPTER 9 PROJECT

#### PROJECT: HARDENED MULTI-STAGE CONTAINER

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Build small, non-root, reproducible images and operate container networking, storage, resources, and lifecycle correctly.

**Chapter topic:** Docker and Container Engineering

**Unit storyline:** Continue the **Containers and Kubernetes** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Hardened Multi-Stage Container as a focused exercise for Container Engineering. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **9.1 — Docker and Container Engineering:** Configure or simulate Docker and Container Engineering, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Build a minimal non-root multi-stage container with pinned base, small context, read-only filesystem, health check, and vulnerability scan.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build a minimal non-root multi-stage container with pinned base, small context, read-only filesystem, health check, and vulnerability scan.
- Give the user one clear main action and keep all other features secondary.
- Use Container Engineering in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Docker.
- A small sample application.
- Trivy for a local image scan.

#### BUILD IT STEP BY STEP

1. Create hardened-multi-stage-container with app, automation, tests, and deploy folders in a Git repository.
2. Build a minimal non-root multi-stage container with pinned base, small context, read-only filesystem, health check, and vulnerability scan.
3. Use Container Engineering in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Container Engineering.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/runtime/chapter-9-hardened-multi-stage-container
git commit -m "feat(hardened-multi-stage-container): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 9](../roadmaps/DevOps.md#phase-9) | [CONTINUE TO DEVOPS CHAPTER 10](../roadmaps/DevOps.md#phase-10)


<a id="devops-phase-10-project"></a>
### DEVOPS CHAPTER 10 PROJECT

#### PROJECT: KUBERNETES OPERATIONS LAB

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Operate declarative workloads through controllers, scheduling, networking, storage, health, policy, and upgrades.

**Chapter topic:** Kubernetes Operations

**Unit storyline:** Continue the **Containers and Kubernetes** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Kubernetes Operations Lab as a focused exercise for Kubernetes Operations. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **10.1 — Kubernetes Operations:** Add an executable Kubernetes Operations procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Operate a service on kind/k3d with namespaces, resources, probes, config, secrets, autoscaling, disruption, rollout, and rollback.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Operate a service on kind/k3d with namespaces, resources, probes, config, secrets, autoscaling, disruption, rollout, and rollback.
- Give the user one clear main action and keep all other features secondary.
- Use Kubernetes Operations in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Docker Engine or Podman.
- kind or minikube.
- kubectl and Kubernetes YAML.

#### BUILD IT STEP BY STEP

1. Create kubernetes-operations-lab with app, automation, tests, and deploy folders in a Git repository.
2. Operate a service on kind/k3d with namespaces, resources, probes, config, secrets, autoscaling, disruption, rollout, and rollback.
3. Use Kubernetes Operations in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Kubernetes Operations.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/runtime/chapter-10-kubernetes-operations-lab
git commit -m "feat(kubernetes-operations-lab): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 10](../roadmaps/DevOps.md#phase-10) | [CONTINUE TO DEVOPS CHAPTER 11](../roadmaps/DevOps.md#phase-11)


## IaC and cloud

**Shared unit storyline:** Keep one workspace for IaC and cloud. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="devops-phase-11-project"></a>
### DEVOPS CHAPTER 11 PROJECT

#### PROJECT: OPENTOFU STATE LIFECYCLE LAB

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Plan and reconcile versioned infrastructure through protected state, modules, policy, drift handling, and CI.

**Chapter topic:** Terraform and Infrastructure Lifecycle

**Unit storyline:** Continue the **IaC and cloud** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build OpenTofu State Lifecycle Lab as a focused exercise for Infrastructure as Code. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **11.1 — Terraform and Infrastructure Lifecycle:** Configure or simulate Terraform and Infrastructure Lifecycle, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Manage a local resource lifecycle with OpenTofu plans, state, locking, drift detection, import, module change, and safe destroy.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Manage a local resource lifecycle with OpenTofu plans, state, locking, drift detection, import, module change, and safe destroy.
- Give the user one clear main action and keep all other features secondary.
- Use Infrastructure as Code in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- OpenTofu.
- LocalStack or an isolated cloud sandbox.
- Git.

#### BUILD IT STEP BY STEP

1. Create opentofu-state-lifecycle-lab with app, automation, tests, and deploy folders in a Git repository.
2. Manage a local resource lifecycle with OpenTofu plans, state, locking, drift detection, import, module change, and safe destroy.
3. Use Infrastructure as Code in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Infrastructure as Code.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/infra/chapter-11-opentofu-state-lifecycle-lab
git commit -m "feat(opentofu-state-lifecycle-lab): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 11](../roadmaps/DevOps.md#phase-11) | [CONTINUE TO DEVOPS CHAPTER 12](../roadmaps/DevOps.md#phase-12)


<a id="devops-phase-12-project"></a>
### DEVOPS CHAPTER 12 PROJECT

#### PROJECT: IDEMPOTENT ANSIBLE BASELINE

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Converge host configuration through inventories, variables, roles, handlers, templates, idempotent modules, and protected secrets.

**Chapter topic:** Ansible and Configuration Management

**Unit storyline:** Continue the **IaC and cloud** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Idempotent Ansible Baseline as a focused exercise for Configuration Management. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **12.1 — Ansible and Configuration Management:** Configure or simulate Ansible and Configuration Management, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Configure two local hosts/containers with Ansible roles, variables, handlers, secrets, check mode, and a clean second idempotent run.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Configure two local hosts/containers with Ansible roles, variables, handlers, secrets, check mode, and a clean second idempotent run.
- Give the user one clear main action and keep all other features secondary.
- Use Configuration Management in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ansible.
- Two local Linux VMs or containers.
- YAML and SSH.

#### BUILD IT STEP BY STEP

1. Create idempotent-ansible-baseline with app, automation, tests, and deploy folders in a Git repository.
2. Configure two local hosts/containers with Ansible roles, variables, handlers, secrets, check mode, and a clean second idempotent run.
3. Use Configuration Management in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Configuration Management.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/infra/chapter-12-idempotent-ansible-baseline
git commit -m "feat(idempotent-ansible-baseline): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 12](../roadmaps/DevOps.md#phase-12) | [CONTINUE TO DEVOPS CHAPTER 13](../roadmaps/DevOps.md#phase-13)


<a id="devops-phase-13-project"></a>
### DEVOPS CHAPTER 13 PROJECT

#### PROJECT: CLOUD DELIVERY FOUNDATION

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Automate cloud identity, VPC paths, compute, storage, DNS, and managed services without confusing provider names for architecture.

**Chapter topic:** Cloud Infrastructure for DevOps

**Unit storyline:** Continue the **IaC and cloud** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Cloud Delivery Foundation as a focused exercise for Cloud Infrastructure. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **13.1 — Cloud Infrastructure for DevOps:** Configure or simulate Cloud Infrastructure for DevOps, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Provision the local network, cluster, registry, DNS, and storage foundation needed by a delivery pipeline from repeatable code.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Provision the local network, cluster, registry, DNS, and storage foundation needed by a delivery pipeline from repeatable code.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Infrastructure in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create cloud-delivery-foundation with app, automation, tests, and deploy folders in a Git repository.
2. Provision the local network, cluster, registry, DNS, and storage foundation needed by a delivery pipeline from repeatable code.
3. Use Cloud Infrastructure in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Cloud Infrastructure.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/infra/chapter-13-cloud-delivery-foundation
git commit -m "feat(cloud-delivery-foundation): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 13](../roadmaps/DevOps.md#phase-13) | [CONTINUE TO DEVOPS CHAPTER 14](../roadmaps/DevOps.md#phase-14)


## SRE, platform, hire

**Shared unit storyline:** Keep one workspace for SRE, platform, hire. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="devops-phase-14-project"></a>
### DEVOPS CHAPTER 14 PROJECT

#### PROJECT: OBSERVABLE DEMO SERVICE

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Instrument delivery and runtime so one user symptom correlates with version, dependency, resource, and change.

**Chapter topic:** Observability: Metrics, Logs, Traces, and Alerts

**Unit storyline:** Continue the **SRE, platform, hire** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Observable Demo Service as a focused exercise for Observability. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **14.1 — Observability: Metrics, Logs, Traces, and Alerts:** Configure or simulate Observability: Metrics, Logs, Traces, and Alerts, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Instrument a demo service with metrics, logs, traces, request IDs, dashboard, alert, and a runbook linked to user impact.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Instrument a demo service with metrics, logs, traces, request IDs, dashboard, alert, and a runbook linked to user impact.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Observability in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create observable-demo-service with app, automation, tests, and deploy folders in a Git repository.
2. Instrument a demo service with metrics, logs, traces, request IDs, dashboard, alert, and a runbook linked to user impact.
3. Use Observability in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for Observability.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/hire/chapter-14-observable-demo-service
git commit -m "feat(observable-demo-service): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 14](../roadmaps/DevOps.md#phase-14) | [CONTINUE TO DEVOPS CHAPTER 15](../roadmaps/DevOps.md#phase-15)


<a id="devops-phase-15-project"></a>
### DEVOPS CHAPTER 15 PROJECT

#### PROJECT: SLO AND ERROR BUDGET DASHBOARD

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Define reliability from user outcomes and balance feature velocity against measured risk.

**Chapter topic:** SRE, SLIs, SLOs, Error Budgets, and Toil

**Unit storyline:** Continue the **SRE, platform, hire** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build SLO and Error Budget Dashboard as a focused exercise for SRE and Error Budgets. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **15.1 — SRE, SLIs, SLOs, Error Budgets, and Toil:** Configure or simulate SRE, SLIs, SLOs, Error Budgets, and Toil, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Define availability/latency SLIs, an SLO, error budget, burn-rate alert, and one automation that removes recurring toil.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Define availability/latency SLIs, an SLO, error budget, burn-rate alert, and one automation that removes recurring toil.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by SRE and Error Budgets, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create slo-and-error-budget-dashboard with app, automation, tests, and deploy folders in a Git repository.
2. Define availability/latency SLIs, an SLO, error budget, burn-rate alert, and one automation that removes recurring toil.
3. Show the part of the data or system explained by SRE and Error Budgets, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for SRE and Error Budgets.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/hire/chapter-15-slo-and-error-budget-dashboard
git commit -m "feat(slo-and-error-budget-dashboard): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 15](../roadmaps/DevOps.md#phase-15) | [CONTINUE TO DEVOPS CHAPTER 16](../roadmaps/DevOps.md#phase-16)


<a id="devops-phase-16-project"></a>
### DEVOPS CHAPTER 16 PROJECT

#### PROJECT: SIGNED SOFTWARE SUPPLY CHAIN

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Protect source, dependencies, CI identities, artifacts, deployments, and runtime with verifiable provenance and least privilege.

**Chapter topic:** DevSecOps and Software Supply-Chain Security

**Unit storyline:** Continue the **SRE, platform, hire** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Signed Software Supply Chain as a focused exercise for Software Supply-Chain Security. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **16.1 — DevSecOps and Software Supply-Chain Security:** Configure or simulate DevSecOps and Software Supply-Chain Security, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Generate SBOM/provenance, scan code/dependencies/image/IaC, sign and verify the image, and block one unsafe admission.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Generate SBOM/provenance, scan code/dependencies/image/IaC, sign and verify the image, and block one unsafe admission.
- Give the user one clear main action and keep all other features secondary.
- Use Software Supply-Chain Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create signed-software-supply-chain with app, automation, tests, and deploy folders in a Git repository.
2. Generate SBOM/provenance, scan code/dependencies/image/IaC, sign and verify the image, and block one unsafe admission.
3. Use Software Supply-Chain Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Software Supply-Chain Security.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/hire/chapter-16-signed-software-supply-chain
git commit -m "feat(signed-software-supply-chain): complete chapter 16 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 16](../roadmaps/DevOps.md#phase-16) | [CONTINUE TO DEVOPS CHAPTER 17](../roadmaps/DevOps.md#phase-17)


<a id="devops-phase-17-project"></a>
### DEVOPS CHAPTER 17 PROJECT

#### PROJECT: GITOPS APPLICATION PLATFORM

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Provide a self-service paved road where Git declares runtime state and platform capabilities reduce cognitive load.

**Chapter topic:** GitOps and Platform Engineering

**Unit storyline:** Continue the **SRE, platform, hire** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build GitOps Application Platform as a focused exercise for GitOps and Platform Engineering. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **17.1 — GitOps and Platform Engineering:** Configure or simulate GitOps and Platform Engineering, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Reconcile an application from Git with Argo CD, detect drift, roll back through Git, and expose a safe service template.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Reconcile an application from Git with Argo CD, detect drift, roll back through Git, and expose a safe service template.
- Give the user one clear main action and keep all other features secondary.
- Use GitOps and Platform Engineering in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create gitops-application-platform with app, automation, tests, and deploy folders in a Git repository.
2. Reconcile an application from Git with Argo CD, detect drift, roll back through Git, and expose a safe service template.
3. Use GitOps and Platform Engineering in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for GitOps and Platform Engineering.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/hire/chapter-17-gitops-application-platform
git commit -m "feat(gitops-application-platform): complete chapter 17 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 17](../roadmaps/DevOps.md#phase-17) | [CONTINUE TO DEVOPS CHAPTER 18](../roadmaps/DevOps.md#phase-18)


<a id="devops-phase-18-project"></a>
### DEVOPS CHAPTER 18 PROJECT

#### PROJECT: CHAOS GAME DAY AND POSTMORTEM

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Mitigate impact, preserve evidence, coordinate clearly, learn without blame, and test resilience hypotheses.

**Chapter topic:** Incident Response, Postmortems, and Chaos Engineering

**Unit storyline:** Continue the **SRE, platform, hire** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Chaos Game Day and Postmortem as a focused exercise for Incident Response and Chaos. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **18.1 — Incident Response, Postmortems, and Chaos Engineering:** Add an executable Incident Response, Postmortems, and Chaos Engineering procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Run a controlled latency or dependency-failure game day with roles, timeline, recovery, blameless analysis, and owned actions.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Run a controlled latency or dependency-failure game day with roles, timeline, recovery, blameless analysis, and owned actions.
- Give the user one clear main action and keep all other features secondary.
- Use Incident Response and Chaos in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create chaos-game-day-and-postmortem with app, automation, tests, and deploy folders in a Git repository.
2. Run a controlled latency or dependency-failure game day with roles, timeline, recovery, blameless analysis, and owned actions.
3. Use Incident Response and Chaos in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Incident Response and Chaos.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/hire/chapter-18-chaos-game-day-and-postmortem
git commit -m "feat(chaos-game-day-and-postmortem): complete chapter 18 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 18](../roadmaps/DevOps.md#phase-18) | [CONTINUE TO DEVOPS CHAPTER 19](../roadmaps/DevOps.md#phase-19)


<a id="devops-phase-19-project"></a>
### DEVOPS CHAPTER 19 PROJECT

#### PROJECT: PRODUCTION DELIVERY PLATFORM

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Build complete delivery and operations systems whose claims are backed by code, telemetry, failure tests, and runbooks.

**Chapter topic:** DevOps Projects and Portfolio Evidence

**Unit storyline:** Continue the **SRE, platform, hire** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Production Delivery Platform as a focused exercise for Portfolio Delivery Platform. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **19.1 — DevOps Projects and Portfolio Evidence:** Configure or simulate DevOps Projects and Portfolio Evidence, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Combine CI, signed containers, Kubernetes, GitOps, observability, SLOs, security, rollback, and recovery into one demo platform.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Combine CI, signed containers, Kubernetes, GitOps, observability, SLOs, security, rollback, and recovery into one demo platform.
- Give the user one clear main action and keep all other features secondary.
- Use Portfolio Delivery Platform in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create production-delivery-platform with app, automation, tests, and deploy folders in a Git repository.
2. Combine CI, signed containers, Kubernetes, GitOps, observability, SLOs, security, rollback, and recovery into one demo platform.
3. Use Portfolio Delivery Platform in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Portfolio Delivery Platform.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/hire/chapter-19-production-delivery-platform
git commit -m "feat(production-delivery-platform): complete chapter 19 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 19](../roadmaps/DevOps.md#phase-19) | [CONTINUE TO DEVOPS CHAPTER 20](../roadmaps/DevOps.md#phase-20)


<a id="devops-phase-20-project"></a>
### DEVOPS CHAPTER 20 PROJECT

#### PROJECT: TIMED DEVOPS INCIDENT DRILL

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Communicate systems reasoning through troubleshooting, delivery design, reliability, security, and behavioral evidence.

**Chapter topic:** DevOps Interviews and Career Mastery

**Unit storyline:** Continue the **SRE, platform, hire** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Build Timed DevOps Incident Drill as a focused exercise for Interviews. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **20.1 — DevOps Interviews and Career Mastery:** Practice explaining or applying DevOps Interviews and Career Mastery under a timer and record the evidence and correction.

#### SPECIFICATION

- Diagnose a timed broken deployment using pipeline, cluster, application, and telemetry evidence and explain each decision.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Diagnose a timed broken deployment using pipeline, cluster, application, and telemetry evidence and explain each decision.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Interviews and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- Git and Bash.
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase.

#### BUILD IT STEP BY STEP

1. Create timed-devops-incident-drill with app, automation, tests, and deploy folders in a Git repository.
2. Diagnose a timed broken deployment using pipeline, cluster, application, and telemetry evidence and explain each decision.
3. Use a metric connected to Interviews and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Interviews.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

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
git add -- devops/hire/chapter-20-timed-devops-incident-drill
git commit -m "feat(timed-devops-incident-drill): complete chapter 20 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS CHAPTER 20](../roadmaps/DevOps.md#phase-20) | [RETURN TO THE DEVOPS COURSE](../roadmaps/DevOps.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="devops-main-portfolio-project"></a>
## DEVOPS MAIN PORTFOLIO PROJECT

#### PROJECT: OPEN DEVELOPER SELF-SERVICE DELIVERY PLATFORM

#### DESCRIPTION

A local platform that lets a developer create a service from a template, test it, build and sign a container, deploy it to Kubernetes through GitOps, observe it, roll it back, and respond to an incident.

#### WHO THIS IS FOR

- Application developer shipping a small service
- Platform engineer maintaining safe paved-road automation
- On-call engineer diagnosing and recovering the service

#### WHAT USERS CAN DO

- Generate a consistent service repository from a template
- Test, build, scan, sign, and promote an immutable artifact
- Deploy and reconcile it through GitOps with rollback
- Measure reliability and run a repeatable incident exercise

#### FREE AND OPEN-SOURCE TECH STACK

- Linux, Bash, Python, and Git
- Forgejo or a public GitHub repository with free Actions
- Docker Engine or Podman, BuildKit, and an OCI registry
- k3d or kind, Kubernetes, Helm, and Argo CD
- OpenTofu and Ansible
- Prometheus, Grafana, Loki, Tempo, and OpenTelemetry
- Trivy, Syft, Cosign, Checkov, and Open Policy Agent
- All required runtime and security tools are free and open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - DevOps Delivery Systems:** Map idea-to-production flow, queues, handoffs, lead time, failure rate, recovery time, and one improvement target.
2. **Phase 2 - Linux and Services:** Harden the Linux host, create service users, permissions, systemd units, logs, and safe operational commands.
3. **Phase 3 - Systems and Network Troubleshooting:** Build a DNS-to-process troubleshooting command that gathers bounded evidence without making changes.
4. **Phase 4 - Git Collaboration:** Use short-lived branches, pull requests, protected main, conventional commits, tags, and a clean rollback history.
5. **Phase 5 - Shell and Python Automation:** Create an idempotent Python/Bash CLI that scaffolds a service, validates input, supports dry-run, and logs changes.
6. **Phase 6 - Builds and Artifacts:** Pin dependencies, create reproducible builds, generate checksums/SBOM, and store immutable versioned artifacts.
7. **Phase 7 - Continuous Integration:** Create CI stages for formatting, linting, tests, dependency review, build, scan, and artifact publication.
8. **Phase 8 - Continuous Delivery:** Implement rolling, blue/green, and canary choices in a local simulator; define verification and automatic rollback.
9. **Phase 9 - Container Engineering:** Create a non-root multi-stage container with a read-only filesystem, health check, small context, and pinned base.
10. **Phase 10 - Kubernetes Operations:** Deploy to k3d/kind with namespaces, resources, probes, config, secrets, autoscaling, disruption control, and rollback.
11. **Phase 11 - Infrastructure as Code:** Provision local supporting resources with OpenTofu and demonstrate plan review, state locking, drift, import, and destroy.
12. **Phase 12 - Configuration Management:** Use Ansible to configure the host idempotently and prove the second run reports no unintended changes.
13. **Phase 13 - Cloud Infrastructure:** Create provider-neutral interfaces for DNS, storage, and registry so a cloud sandbox can replace local services later.
14. **Phase 14 - Observability:** Instrument the app with metrics, structured logs, traces, dashboards, alerts, and request correlation.
15. **Phase 15 - SRE and Error Budgets:** Define SLIs/SLOs, calculate an error budget and burn rate, automate one toil task, and write a useful runbook.
16. **Phase 16 - Software Supply-Chain Security:** Generate an SBOM, scan dependencies/images/IaC, sign the image with Cosign, verify it, and enforce an OPA policy.
17. **Phase 17 - GitOps and Platform Engineering:** Install Argo CD, reconcile desired state from Git, detect drift, and provide a safe self-service service template.
18. **Phase 18 - Incident Response and Chaos:** Inject latency, dependency failure, and pod loss; run incident command, recover, and create action-focused follow-up items.
19. **PHASE 19 - Portfolio Delivery Platform (REQUIRED CAPSTONE-COMPLETION STEP):** Polish the golden path, diagrams, dashboards, sample service, open-source license, and one-command local demonstration.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Practice a timed broken-deployment drill and explain architecture, delivery metrics, security, SLOs, and recovery decisions.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `open-developer-self-service-delivery-platform` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: delivery map, hardened host, diagnostic workflow, and reviewed Git policy**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "feat(delivery-platform): establish delivery and repository foundation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: scaffold automation, reproducible artifacts, CI/CD, containers, and Kubernetes**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "feat(delivery-platform): implement build and deployment golden path"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: OpenTofu, Ansible, cloud interfaces, observability, and SLO operations**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "feat(delivery-platform): integrate platform operations and reliability"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: supply-chain controls, GitOps reconciliation, and chaos recovery evidence**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "test(delivery-platform): verify trusted GitOps and incident recovery"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: polished self-service demo, diagrams, dashboards, and release documentation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "docs(delivery-platform): complete self-service platform release"
git tag -a delivery-platform-v1.0.0 -m "First complete delivery-platform release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Bootstrap the complete platform on a local Linux machine with Docker Engine/Podman and k3d/kind.
2. Run the scaffold CLI, push a sample service, and let the free public-repository CI or local Forgejo runner build, scan, sign, and publish it.
3. Let Argo CD deploy the signed image to the local cluster and confirm probes, dashboards, logs, traces, and rollback.
4. Keep Grafana, Argo CD, the registry, and cluster APIs bound to localhost unless you deliberately secure access.
5. Publish only a sanitized static architecture/demo page to GitHub Pages; do not expose the lab control plane.
6. Run the teardown and recovery commands from a clean checkout to prove another learner can reproduce the platform without paid services.

> **MAIN PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 19](../roadmaps/DevOps.md#phase-19) | [REVIEW DEVOPS PHASE 20](../roadmaps/DevOps.md#phase-20) | [RETURN TO THE DEVOPS ROADMAP](../roadmaps/DevOps.md#phase-index)
