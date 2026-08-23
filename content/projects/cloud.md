# Cloud Chapter Projects

One required applied project follows every chapter in the [Cloud roadmap](../roadmaps/Cloud.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## Cloud core

**Shared unit storyline:** Keep one workspace for Cloud core. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cloud-phase-1-project"></a>
### CLOUD CHAPTER 1 PROJECT

#### PROJECT: LINUX SERVICE BASELINE

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Build the operating-system, networking, and automation base that every cloud console hides.

**Chapter topic:** The Cloud Engineer's Ground Floor

**Unit storyline:** Continue the **Cloud core** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Linux Service Baseline as a focused exercise for Linux and Service Foundations. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **1.1 — The Cloud Engineer's Ground Floor:** Configure or simulate The Cloud Engineer's Ground Floor, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run a small Linux HTTP service with a dedicated user, systemd unit, permissions, logs, port check, health endpoint, and restart behavior.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Run a small Linux HTTP service with a dedicated user, systemd unit, permissions, logs, port check, health endpoint, and restart behavior.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Linux and Service Foundations in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Ubuntu Linux or WSL 2.
- systemd, journalctl, ss, and curl.
- Bash; no cloud account required.

#### BUILD IT STEP BY STEP

1. Create linux-service-baseline with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Run a small Linux HTTP service with a dedicated user, systemd unit, permissions, logs, port check, health endpoint, and restart behavior.
3. Use Linux and Service Foundations in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for Linux and Service Foundations.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/core/chapter-1-linux-service-baseline
git commit -m "feat(linux-service-baseline): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 1](../roadmaps/Cloud.md#phase-1) | [CONTINUE TO CLOUD CHAPTER 2](../roadmaps/Cloud.md#phase-2)


<a id="cloud-phase-2-project"></a>
### CLOUD CHAPTER 2 PROJECT

#### PROJECT: VM VS CONTAINER BENCHMARK

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Understand what a provider pools, what you still operate, and how IaaS, PaaS, SaaS, containers, and serverless move the boundary.

**Chapter topic:** Virtualization and Cloud Service Models

**Unit storyline:** Continue the **Cloud core** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build VM vs Container Benchmark as a focused exercise for Virtualization and Service Models. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **2.1 — Virtualization and Cloud Service Models:** Configure or simulate Virtualization and Cloud Service Models, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run the same workload in a local VM and container and compare startup time, CPU/memory, image size, isolation, and operator responsibility.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Run the same workload in a local VM and container and compare startup time, CPU/memory, image size, isolation, and operator responsibility.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Virtualization and Service Models and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Docker Engine or Podman.
- Ubuntu container or VM.
- hyperfine or PowerShell Measure-Command.

#### BUILD IT STEP BY STEP

1. Create vm-vs-container-benchmark with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Run the same workload in a local VM and container and compare startup time, CPU/memory, image size, isolation, and operator responsibility.
3. Use a metric connected to Virtualization and Service Models and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Virtualization and Service Models.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/core/chapter-2-vm-vs-container-benchmark
git commit -m "feat(vm-vs-container-benchmark): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 2](../roadmaps/Cloud.md#phase-2) | [CONTINUE TO CLOUD CHAPTER 3](../roadmaps/Cloud.md#phase-3)


<a id="cloud-phase-3-project"></a>
### CLOUD CHAPTER 3 PROJECT

#### PROJECT: MULTI-PROVIDER ARCHITECTURE MATRIX

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Read global infrastructure as a failure map and map AWS, Azure, and GCP vocabulary without confusing names for capabilities.

**Chapter topic:** Providers, Regions, Zones, and Shared Responsibility

**Unit storyline:** Continue the **Cloud core** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Multi-Provider Architecture Matrix as a focused exercise for Providers, Regions, and Shared Responsibility. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **3.1 — Providers, Regions, Zones, and Shared Responsibility:** Configure or simulate Providers, Regions, Zones, and Shared Responsibility, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Compare AWS, Azure, and Google equivalents for identity, network, compute, storage, database, monitoring, responsibility, and lock-in without creating resources.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Compare AWS, Azure, and Google equivalents for identity, network, compute, storage, database, monitoring, responsibility, and lock-in without creating resources.
- Define one realistic scenario, its boundaries, and the intended reader for the Multi-Provider Architecture Matrix.
- Collect or create the exact inputs needed to apply Providers, Regions, and Shared Responsibility; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- diagrams.net.
- AWS, Azure, and Google Cloud documentation.
- No coding or paid resources required.

#### BUILD IT STEP BY STEP

1. Create multi-provider-architecture-matrix with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Compare AWS, Azure, and Google equivalents for identity, network, compute, storage, database, monitoring, responsibility, and lock-in without creating resources.
3. Collect or create the exact inputs needed to apply Providers, Regions, and Shared Responsibility; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Providers, Regions, and Shared Responsibility.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/core/chapter-3-multi-provider-architecture-matrix
git commit -m "feat(multi-provider-architecture-matrix): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 3](../roadmaps/Cloud.md#phase-3) | [CONTINUE TO CLOUD CHAPTER 4](../roadmaps/Cloud.md#phase-4)


<a id="cloud-phase-4-project"></a>
### CLOUD CHAPTER 4 PROJECT

#### PROJECT: LEAST-PRIVILEGE IAM LAB

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Make every human and workload prove identity and receive only the permissions required for the current task.

**Chapter topic:** Identity and Access Management

**Unit storyline:** Continue the **Cloud core** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Least-Privilege IAM Lab as a focused exercise for Identity and Access Management. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **4.1 — Identity and Access Management:** Configure or simulate Identity and Access Management, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Create local IAM-style users, roles, and policies for admin, operator, application, and auditor; prove allowed and denied actions.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create local IAM-style users, roles, and policies for admin, operator, application, and auditor; prove allowed and denied actions.
- Give the user one clear main action and keep all other features secondary.
- Use Identity and Access Management in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community.
- OpenTofu and the LocalStack CLI.
- IAM policy JSON.

#### BUILD IT STEP BY STEP

1. Create least-privilege-iam-lab with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Create local IAM-style users, roles, and policies for admin, operator, application, and auditor; prove allowed and denied actions.
3. Use Identity and Access Management in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Identity and Access Management.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/core/chapter-4-least-privilege-iam-lab
git commit -m "feat(least-privilege-iam-lab): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 4](../roadmaps/Cloud.md#phase-4) | [CONTINUE TO CLOUD CHAPTER 5](../roadmaps/Cloud.md#phase-5)


<a id="cloud-phase-5-project"></a>
### CLOUD CHAPTER 5 PROJECT

#### PROJECT: MULTI-TIER VPC

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Build an address and routing plan in which every allowed path is intentional and every forbidden path is testable.

**Chapter topic:** Cloud Networking: VPCs, Subnets, Routes, and Private Access

**Unit storyline:** Continue the **Cloud core** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Multi-Tier VPC as a focused exercise for Cloud Networking. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **5.1 — Cloud Networking: VPCs, Subnets, Routes, and Private Access:** Configure or simulate Cloud Networking: VPCs, Subnets, Routes, and Private Access, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Build a local multi-tier virtual network with public/private subnets, routes, egress, DNS, and restrictive security rules.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build a local multi-tier virtual network with public/private subnets, routes, egress, DNS, and restrictive security rules.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Networking in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community.
- OpenTofu and the LocalStack CLI.
- VPC, subnets, route tables, and security groups.

#### BUILD IT STEP BY STEP

1. Create multi-tier-vpc with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Build a local multi-tier virtual network with public/private subnets, routes, egress, DNS, and restrictive security rules.
3. Use Cloud Networking in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Cloud Networking.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/core/chapter-5-multi-tier-vpc
git commit -m "feat(multi-tier-vpc): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 5](../roadmaps/Cloud.md#phase-5) | [CONTINUE TO CLOUD CHAPTER 6](../roadmaps/Cloud.md#phase-6)


<a id="cloud-phase-6-project"></a>
### CLOUD CHAPTER 6 PROJECT

#### PROJECT: AUTOSCALED WEB TIER

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Run stateless workloads as replaceable groups that scale from measured demand and survive instance or zone failure.

**Chapter topic:** Compute, Images, Load Balancing, and Autoscaling

**Unit storyline:** Continue the **Cloud core** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Autoscaled Web Tier as a focused exercise for Compute and Autoscaling. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **6.1 — Compute, Images, Load Balancing, and Autoscaling:** Configure or simulate Compute, Images, Load Balancing, and Autoscaling, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run multiple immutable web instances behind a load balancer, add health checks, simulate autoscaling decisions, and replace an unhealthy instance.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Run multiple immutable web instances behind a load balancer, add health checks, simulate autoscaling decisions, and replace an unhealthy instance.
- Give the user one clear main action and keep all other features secondary.
- Use Compute and Autoscaling in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create autoscaled-web-tier with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Run multiple immutable web instances behind a load balancer, add health checks, simulate autoscaling decisions, and replace an unhealthy instance.
3. Use Compute and Autoscaling in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Compute and Autoscaling.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/core/chapter-6-autoscaled-web-tier
git commit -m "feat(autoscaled-web-tier): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 6](../roadmaps/Cloud.md#phase-6) | [CONTINUE TO CLOUD CHAPTER 7](../roadmaps/Cloud.md#phase-7)


<a id="cloud-phase-7-project"></a>
### CLOUD CHAPTER 7 PROJECT

#### PROJECT: VERSIONED OBJECT BACKUP

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Choose storage from access pattern, durability, consistency, throughput, sharing, lifecycle, and recovery rather than from familiar filesystem habits.

**Chapter topic:** Object, Block, and File Storage

**Unit storyline:** Continue the **Cloud core** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Versioned Object Backup as a focused exercise for Cloud Storage. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **7.1 — Object, Block, and File Storage:** Configure or simulate Object, Block, and File Storage, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Store versioned objects in MinIO, enforce lifecycle/retention rules, restore a deleted version, and compare object, block, and file choices.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Store versioned objects in MinIO, enforce lifecycle/retention rules, restore a deleted version, and compare object, block, and file choices.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Storage in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create versioned-object-backup with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Store versioned objects in MinIO, enforce lifecycle/retention rules, restore a deleted version, and compare object, block, and file choices.
3. Use Cloud Storage in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Cloud Storage.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/core/chapter-7-versioned-object-backup
git commit -m "feat(versioned-object-backup): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 7](../roadmaps/Cloud.md#phase-7) | [CONTINUE TO CLOUD CHAPTER 8](../roadmaps/Cloud.md#phase-8)


## Data and traffic

**Shared unit storyline:** Keep one workspace for Data and traffic. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cloud-phase-8-project"></a>
### CLOUD CHAPTER 8 PROJECT

#### PROJECT: RESILIENT MANAGED DATA TIER

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Select a data service from consistency, query, transaction, scale, and recovery requirements, then operate its failure modes.

**Chapter topic:** Managed Databases, NoSQL, Replication, and Caching

**Unit storyline:** Continue the **Data and traffic** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Resilient Managed Data Tier as a focused exercise for Managed Data Services. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **8.1 — Managed Databases, NoSQL, Replication, and Caching:** Configure or simulate Managed Databases, NoSQL, Replication, and Caching, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run PostgreSQL with backup/restore, a cache, connection limits, replica simulation, and documented failover behavior.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Run PostgreSQL with backup/restore, a cache, connection limits, replica simulation, and documented failover behavior.
- Give the user one clear main action and keep all other features secondary.
- Use Managed Data Services in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create resilient-managed-data-tier with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Run PostgreSQL with backup/restore, a cache, connection limits, replica simulation, and documented failover behavior.
3. Use Managed Data Services in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Managed Data Services.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/data/chapter-8-resilient-managed-data-tier
git commit -m "feat(resilient-managed-data-tier): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 8](../roadmaps/Cloud.md#phase-8) | [CONTINUE TO CLOUD CHAPTER 9](../roadmaps/Cloud.md#phase-9)


<a id="cloud-phase-9-project"></a>
### CLOUD CHAPTER 9 PROJECT

#### PROJECT: CDN DELIVERY BENCHMARK

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Route users to healthy origins and cache safe content near demand while preserving correctness and observability.

**Chapter topic:** DNS, Load Balancing, CDN, and Edge Delivery

**Unit storyline:** Continue the **Data and traffic** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build CDN Delivery Benchmark as a focused exercise for DNS, CDN, and Edge. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **9.1 — DNS, Load Balancing, CDN, and Edge Delivery:** Configure or simulate DNS, Load Balancing, CDN, and Edge Delivery, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Serve static content through local DNS and an Nginx cache, then measure cached/uncached latency and test invalidation.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Serve static content through local DNS and an Nginx cache, then measure cached/uncached latency and test invalidation.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to DNS, CDN, and Edge and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create cdn-delivery-benchmark with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Serve static content through local DNS and an Nginx cache, then measure cached/uncached latency and test invalidation.
3. Use a metric connected to DNS, CDN, and Edge and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for DNS, CDN, and Edge.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/data/chapter-9-cdn-delivery-benchmark
git commit -m "feat(cdn-delivery-benchmark): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 9](../roadmaps/Cloud.md#phase-9) | [CONTINUE TO CLOUD CHAPTER 10](../roadmaps/Cloud.md#phase-10)


<a id="cloud-phase-10-project"></a>
### CLOUD CHAPTER 10 PROJECT

#### PROJECT: EVENT-DRIVEN IMAGE PIPELINE

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Decouple producers from work using events, queues, topics, functions, retries, and dead-letter handling.

**Chapter topic:** Serverless and Event-Driven Architecture

**Unit storyline:** Continue the **Data and traffic** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Event-Driven Image Pipeline as a focused exercise for Serverless and Events. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **10.1 — Serverless and Event-Driven Architecture:** Represent Serverless and Event-Driven Architecture in the design and justify one decision that depends on it.

#### SPECIFICATION

- Process uploaded images or documents through an event-driven local function with retries, idempotency, and dead-letter handling.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Process uploaded images or documents through an event-driven local function with retries, idempotency, and dead-letter handling.
- Define a small input format, a transformed output format, and where failed records go.
- Use Serverless and Events to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create event-driven-image-pipeline with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Process uploaded images or documents through an event-driven local function with retries, idempotency, and dead-letter handling.
3. Use Serverless and Events to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for Serverless and Events.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/data/chapter-10-event-driven-image-pipeline
git commit -m "feat(event-driven-image-pipeline): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 10](../roadmaps/Cloud.md#phase-10) | [CONTINUE TO CLOUD CHAPTER 11](../roadmaps/Cloud.md#phase-11)


## Cloud native

**Shared unit storyline:** Keep one workspace for Cloud native. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cloud-phase-11-project"></a>
### CLOUD CHAPTER 11 PROJECT

#### PROJECT: MANAGED KUBERNETES SERVICE

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Choose between managed containers and Kubernetes from scheduling, portability, team maturity, and operational needs.

**Chapter topic:** Containers and Managed Kubernetes

**Unit storyline:** Continue the **Cloud native** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Managed Kubernetes Service as a focused exercise for Containers and Kubernetes. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **11.1 — Containers and Managed Kubernetes:** Configure or simulate Containers and Managed Kubernetes, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Deploy a small service to kind/k3d with requests, limits, probes, config, secrets, scaling, rollout, and rollback.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Deploy a small service to kind/k3d with requests, limits, probes, config, secrets, scaling, rollout, and rollback.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Containers and Kubernetes in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create managed-kubernetes-service with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Deploy a small service to kind/k3d with requests, limits, probes, config, secrets, scaling, rollout, and rollback.
3. Use Containers and Kubernetes in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for Containers and Kubernetes.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/native/chapter-11-managed-kubernetes-service
git commit -m "feat(managed-kubernetes-service): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 11](../roadmaps/Cloud.md#phase-11) | [CONTINUE TO CLOUD CHAPTER 12](../roadmaps/Cloud.md#phase-12)


<a id="cloud-phase-12-project"></a>
### CLOUD CHAPTER 12 PROJECT

#### PROJECT: REUSABLE OPENTOFU ENVIRONMENT

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Represent infrastructure as versioned desired state with plans, modules, remote state, policy, and controlled delivery.

**Chapter topic:** Infrastructure as Code with Terraform and Native Tools

**Unit storyline:** Continue the **Cloud native** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reusable OpenTofu Environment as a focused exercise for Infrastructure as Code. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **12.1 — Infrastructure as Code with Terraform and Native Tools:** Configure or simulate Infrastructure as Code with Terraform and Native Tools, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Create reusable OpenTofu modules for the local environment with variables, outputs, state locking simulation, plan checks, and destroy.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create reusable OpenTofu modules for the local environment with variables, outputs, state locking simulation, plan checks, and destroy.
- Give the user one clear main action and keep all other features secondary.
- Use Infrastructure as Code in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- OpenTofu.
- LocalStack Community.
- OpenTofu and the LocalStack CLI.

#### BUILD IT STEP BY STEP

1. Create reusable-opentofu-environment with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Create reusable OpenTofu modules for the local environment with variables, outputs, state locking simulation, plan checks, and destroy.
3. Use Infrastructure as Code in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Infrastructure as Code.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/native/chapter-12-reusable-opentofu-environment
git commit -m "feat(reusable-opentofu-environment): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 12](../roadmaps/Cloud.md#phase-12) | [CONTINUE TO CLOUD CHAPTER 13](../roadmaps/Cloud.md#phase-13)


## Governance and security

**Shared unit storyline:** Keep one workspace for Governance and security. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cloud-phase-13-project"></a>
### CLOUD CHAPTER 13 PROJECT

#### PROJECT: GOVERNED LANDING ZONE

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Create a scalable organization boundary with identity, logging, network, policy, billing, and workload vending built in.

**Chapter topic:** Landing Zones, Accounts, Governance, and Policy

**Unit storyline:** Continue the **Governance and security** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Governed Landing Zone as a focused exercise for Landing Zones and Governance. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **13.1 — Landing Zones, Accounts, Governance, and Policy:** Add an executable Landing Zones, Accounts, Governance, and Policy procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Design separate environment/account boundaries with naming, tags, quotas, policy guardrails, and a break-glass path.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Design separate environment/account boundaries with naming, tags, quotas, policy guardrails, and a break-glass path.
- Give the user one clear main action and keep all other features secondary.
- Use Landing Zones and Governance in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create governed-landing-zone with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Design separate environment/account boundaries with naming, tags, quotas, policy guardrails, and a break-glass path.
3. Use Landing Zones and Governance in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Landing Zones and Governance.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/govern/chapter-13-governed-landing-zone
git commit -m "feat(governed-landing-zone): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 13](../roadmaps/Cloud.md#phase-13) | [CONTINUE TO CLOUD CHAPTER 14](../roadmaps/Cloud.md#phase-14)


<a id="cloud-phase-14-project"></a>
### CLOUD CHAPTER 14 PROJECT

#### PROJECT: ENCRYPTED SECRET ROTATION

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Keep credentials out of code, encrypt data with controlled keys, and rotate access without redeploying permanent secrets.

**Chapter topic:** Secrets, Encryption, and Key Management

**Unit storyline:** Continue the **Governance and security** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Encrypted Secret Rotation as a focused exercise for Secrets and Encryption. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **14.1 — Secrets, Encryption, and Key Management:** Configure or simulate Secrets, Encryption, and Key Management, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Store and rotate an application secret in OpenBao, encrypt connections, prevent log exposure, and test an expired credential.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Store and rotate an application secret in OpenBao, encrypt connections, prevent log exposure, and test an expired credential.
- Give the user one clear main action and keep all other features secondary.
- Use Secrets and Encryption in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create encrypted-secret-rotation with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Store and rotate an application secret in OpenBao, encrypt connections, prevent log exposure, and test an expired credential.
3. Use Secrets and Encryption in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Secrets and Encryption.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/govern/chapter-14-encrypted-secret-rotation
git commit -m "feat(encrypted-secret-rotation): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 14](../roadmaps/Cloud.md#phase-14) | [CONTINUE TO CLOUD CHAPTER 15](../roadmaps/Cloud.md#phase-15)


<a id="cloud-phase-15-project"></a>
### CLOUD CHAPTER 15 PROJECT

#### PROJECT: OBSERVABLE CLOUD SERVICE

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Turn metrics, logs, traces, events, and configuration changes into fast detection and evidence-based diagnosis.

**Chapter topic:** Cloud Observability and Operations

**Unit storyline:** Continue the **Governance and security** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Observable Cloud Service as a focused exercise for Observability and Operations. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **15.1 — Cloud Observability and Operations:** Add an executable Cloud Observability and Operations procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Collect service metrics, logs, and traces, build a dashboard, trigger an actionable alert, and follow its runbook.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Collect service metrics, logs, and traces, build a dashboard, trigger an actionable alert, and follow its runbook.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Observability and Operations in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create observable-cloud-service with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Collect service metrics, logs, and traces, build a dashboard, trigger an actionable alert, and follow its runbook.
3. Use Observability and Operations in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for Observability and Operations.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/govern/chapter-15-observable-cloud-service
git commit -m "feat(observable-cloud-service): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 15](../roadmaps/Cloud.md#phase-15) | [CONTINUE TO CLOUD CHAPTER 16](../roadmaps/Cloud.md#phase-16)


<a id="cloud-phase-16-project"></a>
### CLOUD CHAPTER 16 PROJECT

#### PROJECT: POLICY-AS-CODE SAFETY CHECKS AND LIMITS

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Continuously reduce attack paths with posture controls, segmentation, detection, evidence, and risk-based remediation.

**Chapter topic:** Cloud Security, Governance, and Compliance

**Unit storyline:** Continue the **Governance and security** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Policy-as-Code Safety checks and limits as a focused exercise for Cloud Security and Compliance. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **16.1 — Cloud Security, Governance, and Compliance:** Add an executable Cloud Security, Governance, and Compliance procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write OPA/Checkov policies that block public data, wildcard privilege, unencrypted storage, and unsafe network rules.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Write OPA/Checkov policies that block public data, wildcard privilege, unencrypted storage, and unsafe network rules.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Security and Compliance in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create policy-as-code-safety-checks-and-limits with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Write OPA/Checkov policies that block public data, wildcard privilege, unencrypted storage, and unsafe network rules.
3. Use Cloud Security and Compliance in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Cloud Security and Compliance.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/govern/chapter-16-policy-as-code-safety-checks-and-limits
git commit -m "feat(policy-as-code-safety-checks-and-limits): complete chapter 16 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 16](../roadmaps/Cloud.md#phase-16) | [CONTINUE TO CLOUD CHAPTER 17](../roadmaps/Cloud.md#phase-17)


## Reliability, FinOps, hire

**Shared unit storyline:** Keep one workspace for Reliability, FinOps, hire. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cloud-phase-17-project"></a>
### CLOUD CHAPTER 17 PROJECT

#### PROJECT: DISASTER RECOVERY GAME DAY

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Design failure containment and tested recovery from component, zone, region, dependency, and operator failures.

**Chapter topic:** Reliability, High Availability, and Disaster Recovery

**Unit storyline:** Continue the **Reliability, FinOps, hire** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Disaster Recovery Game Day as a focused exercise for Reliability and Disaster Recovery. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **17.1 — Reliability, High Availability, and Disaster Recovery:** Add an executable Reliability, High Availability, and Disaster Recovery procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Define RTO/RPO, create backups, remove one service/zone simulation, restore data, and measure actual recovery.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Define RTO/RPO, create backups, remove one service/zone simulation, restore data, and measure actual recovery.
- Give the user one clear main action and keep all other features secondary.
- Use Reliability and Disaster Recovery in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create disaster-recovery-game-day with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Define RTO/RPO, create backups, remove one service/zone simulation, restore data, and measure actual recovery.
3. Use Reliability and Disaster Recovery in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Reliability and Disaster Recovery.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/hire/chapter-17-disaster-recovery-game-day
git commit -m "feat(disaster-recovery-game-day): complete chapter 17 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 17](../roadmaps/Cloud.md#phase-17) | [CONTINUE TO CLOUD CHAPTER 18](../roadmaps/Cloud.md#phase-18)


<a id="cloud-phase-18-project"></a>
### CLOUD CHAPTER 18 PROJECT

#### PROJECT: CLOUD COST OPTIMIZER

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Make unit cost, ownership, budgets, anomalies, and optimization part of architecture and daily operation.

**Chapter topic:** FinOps and Cloud Cost Engineering

**Unit storyline:** Continue the **Reliability, FinOps, hire** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Cloud Cost Optimizer as a focused exercise for FinOps. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **18.1 — FinOps and Cloud Cost Engineering:** Configure or simulate FinOps and Cloud Cost Engineering, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Create a local cost model from resource quantities, flag idle/oversized resources, and show before/after monthly estimates.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create a local cost model from resource quantities, flag idle/oversized resources, and show before/after monthly estimates.
- Give the user one clear main action and keep all other features secondary.
- Use FinOps in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create cloud-cost-optimizer with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Create a local cost model from resource quantities, flag idle/oversized resources, and show before/after monthly estimates.
3. Use FinOps in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for FinOps.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/hire/chapter-18-cloud-cost-optimizer
git commit -m "feat(cloud-cost-optimizer): complete chapter 18 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 18](../roadmaps/Cloud.md#phase-18) | [CONTINUE TO CLOUD CHAPTER 19](../roadmaps/Cloud.md#phase-19)


<a id="cloud-phase-19-project"></a>
### CLOUD CHAPTER 19 PROJECT

#### PROJECT: MIGRATION RUNBOOK AND PILOT

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Move or connect workloads from business constraints while avoiding accidental lowest-common-denominator architecture.

**Chapter topic:** Hybrid Cloud, Multi-Cloud, and Migration

**Unit storyline:** Continue the **Reliability, FinOps, hire** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Migration Runbook and Pilot as a focused exercise for Migration. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **19.1 — Hybrid Cloud, Multi-Cloud, and Migration:** Configure or simulate Hybrid Cloud, Multi-Cloud, and Migration, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Write a migration inventory, dependency map, wave plan, pilot, validation, rollback, data reconciliation, and cutover checklist.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Write a migration inventory, dependency map, wave plan, pilot, validation, rollback, data reconciliation, and cutover checklist.
- Define one realistic scenario, its boundaries, and the intended reader for the Migration Runbook and Pilot.
- Collect or create the exact inputs needed to apply Migration; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create migration-runbook-and-pilot with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Write a migration inventory, dependency map, wave plan, pilot, validation, rollback, data reconciliation, and cutover checklist.
3. Collect or create the exact inputs needed to apply Migration; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Migration.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/hire/chapter-19-migration-runbook-and-pilot
git commit -m "feat(migration-runbook-and-pilot): complete chapter 19 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 19](../roadmaps/Cloud.md#phase-19) | [CONTINUE TO CLOUD CHAPTER 20](../roadmaps/Cloud.md#phase-20)


<a id="cloud-phase-20-project"></a>
### CLOUD CHAPTER 20 PROJECT

#### PROJECT: CLOUD ARCHITECTURE PORTFOLIO

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Turn the full chain into operated projects, architecture decisions, incident stories, and concise interview reasoning.

**Chapter topic:** Cloud Projects, Architecture Interviews, and Career Proof

**Unit storyline:** Continue the **Reliability, FinOps, hire** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Build Cloud Architecture Portfolio as a focused exercise for Architecture Interviews and Portfolio. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **20.1 — Cloud Projects, Architecture Interviews, and Career Proof:** Practice explaining or applying Cloud Projects, Architecture Interviews, and Career Proof under a timer and record the evidence and correction.

#### SPECIFICATION

- Assemble diagrams, IaC, policy checks, dashboards, recovery results, and a timed architecture presentation into one portfolio package.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Assemble diagrams, IaC, policy checks, dashboards, recovery results, and a timed architecture presentation into one portfolio package.
- Define one realistic scenario, its boundaries, and the intended reader for the Cloud Architecture Portfolio.
- Collect or create the exact inputs needed to apply Architecture Interviews and Portfolio; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- LocalStack Community or a local Linux VM.
- OpenTofu and the LocalStack CLI.
- OpenTofu when the phase introduces infrastructure as code.

#### BUILD IT STEP BY STEP

1. Create cloud-architecture-portfolio with infra, config, tests, and diagrams folders; use only a local sandbox.
2. Assemble diagrams, IaC, policy checks, dashboards, recovery results, and a timed architecture presentation into one portfolio package.
3. Collect or create the exact inputs needed to apply Architecture Interviews and Portfolio; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Architecture Interviews and Portfolio.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

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
git add -- cloud/hire/chapter-20-cloud-architecture-portfolio
git commit -m "feat(cloud-architecture-portfolio): complete chapter 20 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD CHAPTER 20](../roadmaps/Cloud.md#phase-20) | [RETURN TO THE CLOUD COURSE](../roadmaps/Cloud.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="cloud-main-portfolio-project"></a>
## CLOUD MAIN PORTFOLIO PROJECT

#### PROJECT: LOCAL NONPROFIT CLOUD PLATFORM

#### DESCRIPTION

A cloud-like platform for a fictional nonprofit, built entirely in a local sandbox. It provisions isolated environments, identity, networking, compute, storage, events, Kubernetes, monitoring, security policies, recovery, and cost reports without creating paid cloud resources.

#### WHO THIS IS FOR

- Application team requesting a safe environment
- Cloud operator applying changes and responding to alerts
- Security or finance reviewer checking policy, recovery, and estimated cost

#### WHAT USERS CAN DO

- Provision development and production-like local environments from code
- Run a small service across isolated networks with storage and events
- Enforce identity, secret, security, and governance rules
- Observe, back up, restore, estimate cost, and tear down the platform

#### FREE AND OPEN-SOURCE TECH STACK

- Linux and KVM/libvirt or containers
- OpenTofu
- LocalStack Community and MinIO
- k3d or kind with Kubernetes
- Keycloak and OpenBao
- Prometheus, Grafana, Loki, and OpenTelemetry
- Trivy, Checkov, and Open Policy Agent
- Docker Engine or Podman; all required components are free and open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Linux and Service Foundations:** Create a Linux service baseline with users, permissions, processes, ports, logs, and a health check.
2. **Phase 2 - Virtualization and Service Models:** Compare a VM and container for isolation, startup, resource use, and operational responsibility.
3. **Phase 3 - Providers, Regions, and Shared Responsibility:** Draw provider-neutral regions, zones, services, failure boundaries, and shared-responsibility ownership.
4. **Phase 4 - Identity and Access Management:** Configure Keycloak roles and least-privilege service identities; test one allowed and one denied action.
5. **Phase 5 - Cloud Networking:** Create isolated virtual networks, public/private subnets, routes, egress, DNS, and restrictive firewall rules.
6. **Phase 6 - Compute and Autoscaling:** Run two stateless service instances behind a local load balancer and demonstrate health-based replacement.
7. **Phase 7 - Cloud Storage:** Use MinIO object storage with versioning and lifecycle rules, plus a local volume for database data.
8. **Phase 8 - Managed Data Services:** Deploy PostgreSQL with replica/cache simulations, backups, restore checks, connection limits, and failure handling.
9. **Phase 9 - DNS, CDN, and Edge:** Add local DNS, Nginx edge caching, TLS, cache headers, and a measured cached-versus-uncached comparison.
10. **Phase 10 - Serverless and Events:** Create an event-driven thumbnail or document-processing function with retries, dead letters, and idempotency.
11. **Phase 11 - Containers and Kubernetes:** Deploy the service to k3d/kind with requests, limits, probes, config, secrets, scaling, and controlled rollout.
12. **Phase 12 - Infrastructure as Code:** Represent the environment in reusable OpenTofu modules with remote-state simulation, locking, plans, and policy checks.
13. **Phase 13 - Landing Zones and Governance:** Create environment/account boundaries, naming, tags, quotas, allowed services, and OPA guardrails.
14. **Phase 14 - Secrets and Encryption:** Store secrets in OpenBao, rotate one credential, encrypt data in transit/at rest, and prevent log leakage.
15. **Phase 15 - Observability and Operations:** Collect metrics, logs, and traces; create dashboards, actionable alerts, and a linked operator runbook.
16. **Phase 16 - Cloud Security and Compliance:** Run Checkov/Trivy/OPA checks and map the most important controls to generated non-sensitive evidence.
17. **Phase 17 - Reliability and Disaster Recovery:** Define availability and recovery targets, simulate a zone/service loss, restore PostgreSQL, and time recovery.
18. **Phase 18 - FinOps:** Create a provider-neutral cost model, budgets, anomaly rules, utilization findings, and three optimization actions.
19. **PHASE 19 - Migration (REQUIRED CAPSTONE-COMPLETION STEP):** Write a migration wave for one legacy service, perform the local pilot, validate it, and define rollback.
20. **PHASE 20 - Architecture Interviews and Portfolio (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Package architecture diagrams, reusable modules, dashboards, recovery results, and a timed design explanation for the portfolio.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `local-nonprofit-cloud-platform` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: Linux service baseline, architecture requirements, identity model, and network design**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "feat(nonprofit-cloud): establish secure platform foundation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: compute, storage, database, messaging, containers, and Kubernetes platform**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "feat(nonprofit-cloud): integrate resilient application platform"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: serverless event flow, OpenTofu, observability, secrets, and backup recovery**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "feat(nonprofit-cloud): automate operations and recovery controls"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: reliability, cost, governance, and multi-region failure exercises**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "test(nonprofit-cloud): verify reliability governance and disaster recovery"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: migration evidence, sanitized diagrams, local demo, and teardown documentation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "docs(nonprofit-cloud): complete nonprofit cloud platform release"
git tag -a nonprofit-cloud-v1.0.0 -m "First complete nonprofit-cloud release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Install Docker Engine/Podman, OpenTofu, and k3d/kind on a local Linux machine; no cloud account is required.
2. Run one bootstrap command that starts LocalStack, MinIO, Keycloak, OpenBao, observability, and the Kubernetes cluster.
3. Apply OpenTofu, deploy the sample service, and execute identity, network, policy, health, backup, and restore checks.
4. Expose dashboards only on localhost and never publish sandbox credentials or management ports.
5. Export sanitized diagrams, Grafana snapshots, policy results, and recovery timings to a static portfolio site on GitHub Pages.
6. Run the destroy command, confirm that containers, clusters, volumes marked temporary, and networks are removed, and retain only intentional backup fixtures.

> **MAIN PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 19](../roadmaps/Cloud.md#phase-19) | [REVIEW CLOUD PHASE 20](../roadmaps/Cloud.md#phase-20) | [RETURN TO THE CLOUD ROADMAP](../roadmaps/Cloud.md#phase-index)
