# IT Administration Chapter Projects

One required applied project follows every chapter in the [IT Administration roadmap](../roadmaps/IT_Administration.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## Support and endpoints

**Shared unit storyline:** Keep one workspace for Support and endpoints. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="it-admin-phase-1-project"></a>
### IT ADMINISTRATION CHAPTER 1 PROJECT

#### PROJECT: TICKETING, CHANGE, AND INCIDENT-RESPONSE SIMULATION

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Turn an unclear complaint into a controlled investigation that protects users and the business.

**Chapter topic:** Support Mindset and Operational Ownership

**Unit storyline:** Continue the **Support and endpoints** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** A manager reports “the ERP is down” while other users appear unaffected.

#### LESSONS PRACTICED

- **1.1 — Evidence Before Action:** Configure or simulate Evidence Before Action, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run a bounded, reversible lab for Support Mindset and Operational Ownership that connects Evidence Before Action and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- one incident ticket.
- scope/timeline.
- evidence/hypothesis table.
- user update.
- escalation packet.
- root-cause/prevention note.

#### TECH STACK

- An isolated local lab or documented simulation.
- Markdown for evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Support and endpoints unit workspace under it-administration/support.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Run a bounded, reversible lab for Support Mindset and Operational Ownership that connects Evidence Before Action and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** reveal after triage that only one browser profile is affected.
- **Reviewer check:** another learner can continue the case and identify what is still unknown.

#### COMPLETION CRITERIA

- the record is reproducible, appropriately prioritized, and escalation-ready.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/support/chapter-1-ticketing-change-and-incident-response-simulation
git commit -m "feat(ticketing-change-and-incident-response-sim): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 1](../roadmaps/IT_Administration.md#phase-1) | [CONTINUE TO IT ADMINISTRATION CHAPTER 2](../roadmaps/IT_Administration.md#phase-2)


<a id="it-admin-phase-2-project"></a>
### IT ADMINISTRATION CHAPTER 2 PROJECT

#### PROJECT: WORKSTATION DIAGNOSIS AND SUPPORT REPORT

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Diagnose, standardize, protect, and retire user devices responsibly.

**Chapter topic:** Hardware, Endpoints, and Device Lifecycle

**Unit storyline:** Continue the **Support and endpoints** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** A Finance laptop intermittently freezes and its warranty expires soon.

#### LESSONS PRACTICED

- **2.1 — From Components to a Managed Device:** Configure or simulate From Components to a Managed Device, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run a bounded, reversible lab for Hardware, Endpoints, and Device Lifecycle that connects From Components to a Managed Device and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- asset record.
- component/boot map.
- disk/RAM/thermal/driver checks.
- decision matrix.
- user summary.
- secure-disposal plan.

#### TECH STACK

- An isolated local lab or documented simulation.
- Markdown for evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Support and endpoints unit workspace under it-administration/support.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Run a bounded, reversible lab for Hardware, Endpoints, and Device Lifecycle that connects From Components to a Managed Device and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** nearly fill a disposable VM disk or disconnect a lab dock.
- **Reviewer check:** every recommendation cites evidence and preserves data.

#### COMPLETION CRITERIA

- a reviewer can approve the recommendation and update the asset lifecycle.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/support/chapter-2-workstation-diagnosis-and-support-report
git commit -m "feat(workstation-diagnosis-and-support-report): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 2](../roadmaps/IT_Administration.md#phase-2) | [CONTINUE TO IT ADMINISTRATION CHAPTER 3](../roadmaps/IT_Administration.md#phase-3)


<a id="it-admin-phase-3-project"></a>
### IT ADMINISTRATION CHAPTER 3 PROJECT

#### PROJECT: STANDARD WINDOWS WORKSTATION BUILD

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Install, secure, inspect, recover, and support a Windows workstation.

**Chapter topic:** Windows Client Administration

**Unit storyline:** Continue the **Support and endpoints** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Northstar needs consistent, recoverable Windows devices.

#### LESSONS PRACTICED

- **3.1 — Windows as an Operated System:** Add an executable Windows as an Operated System procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Windows Client Administration that connects Windows as an Operated System and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- build checklist.
- local user/group and NTFS test.
- update/Defender/BitLocker-state report.
- scheduled-task example.
- Event Viewer evidence.
- recovery test.

#### TECH STACK

- An isolated local lab.
- Markdown for the runbook and evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Support and endpoints unit workspace under it-administration/support.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Windows Client Administration that connects Windows as an Operated System and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** stop a harmless test service and recover from logs.
- **Reviewer check:** baseline commands match the checklist and allowed/denied access works.

#### COMPLETION CRITERIA

- the VM can be rebuilt and the fault diagnosed without a reimage.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/support/chapter-3-standard-windows-workstation-build
git commit -m "feat(standard-windows-workstation-build): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 3](../roadmaps/IT_Administration.md#phase-3) | [CONTINUE TO IT ADMINISTRATION CHAPTER 4](../roadmaps/IT_Administration.md#phase-4)


<a id="it-admin-phase-4-project"></a>
### IT ADMINISTRATION CHAPTER 4 PROJECT

#### PROJECT: WINDOWS AND LINUX SERVER OPERATIONS LAB

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Administer an Ubuntu/RHEL-style server safely from the shell and through SSH.

**Chapter topic:** Linux Administration

**Unit storyline:** Continue the **Support and endpoints** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** A small office operates both Windows and Ubuntu services.

#### LESSONS PRACTICED

- **4.1 — Files, Processes, Services, and Remote Control:** Represent Files, Processes, Services, and Remote Control in the design and justify one decision that depends on it.

#### SPECIFICATION

- Produce an implementation-ready design for Linux Administration that connects Files, Processes, Services, and Remote Control and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- user/group/permission lab.
- service and log runbook.
- SSH key setup.
- mount/timer/firewall exercise.
- Windows/Linux comparison table.

#### TECH STACK

- Markdown.
- Mermaid or diagrams.net.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Support and endpoints unit workspace under it-administration/support.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Produce an implementation-ready design for Linux Administration that connects Files, Processes, Services, and Remote Control and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** invalid noncritical service configuration validated before restart.
- **Reviewer check:** second learner can identify service, port, owner, log, and recovery path.

#### COMPLETION CRITERIA

- failure is detected, repaired, and reversed with evidence.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/support/chapter-4-windows-and-linux-server-operations-lab
git commit -m "feat(windows-and-linux-server-operations-lab): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 4](../roadmaps/IT_Administration.md#phase-4) | [CONTINUE TO IT ADMINISTRATION CHAPTER 5](../roadmaps/IT_Administration.md#phase-5)


## Networks and virtualization

**Shared unit storyline:** Keep one workspace for Networks and virtualization. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="it-admin-phase-5-project"></a>
### IT ADMINISTRATION CHAPTER 5 PROJECT

#### PROJECT: SMALL-OFFICE NETWORK AND IP PLAN

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Trace and troubleshoot endpoint-to-service connectivity without becoming a full network engineer.

**Chapter topic:** Networking for Administrators

**Unit storyline:** Continue the **Networks and virtualization** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Five departments need wired, Wi-Fi, printer, server, guest, VPN, and internet connectivity.

#### LESSONS PRACTICED

- **5.1 — Address, Name, Route, Port, and Policy:** Configure or simulate Address, Name, Route, Port, and Policy, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run a bounded, reversible lab for Networking for Administrators that connects Address, Name, Route, Port, and Policy and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- topology.
- VLAN/subnet/IP/DHCP/DNS plan.
- firewall-flow matrix.
- printer/VPN paths.
- command evidence.

#### TECH STACK

- An isolated local lab or documented simulation.
- Markdown for evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Networks and virtualization unit workspace under it-administration/network.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Run a bounded, reversible lab for Networking for Administrators that connects Address, Name, Route, Port, and Policy and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** wrong DNS on one lab client, then diagnose without changing the server.
- **Reviewer check:** every arrow has address, route, port/protocol, policy, and owner.

#### COMPLETION CRITERIA

- IP works/name fails case is found and repaired from evidence.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/network/chapter-5-small-office-network-and-ip-plan
git commit -m "feat(small-office-network-and-ip-plan): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 5](../roadmaps/IT_Administration.md#phase-5) | [CONTINUE TO IT ADMINISTRATION CHAPTER 6](../roadmaps/IT_Administration.md#phase-6)


<a id="it-admin-phase-6-project"></a>
### IT ADMINISTRATION CHAPTER 6 PROJECT

#### PROJECT: VIRTUALIZATION AND SERVER INVENTORY

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Build a resource-aware, isolated, recoverable virtual lab.

**Chapter topic:** Virtualization and Homelab Infrastructure

**Unit storyline:** Continue the **Networks and virtualization** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Northstar needs an affordable isolated training and recovery lab.

#### LESSONS PRACTICED

- **6.1 — Hosts, Guests, Switches, and Failure Boundaries:** Configure or simulate Hosts, Guests, Switches, and Failure Boundaries, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run a bounded, reversible lab for Virtualization and Homelab Infrastructure that connects Hosts, Guests, Switches, and Failure Boundaries and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- VM inventory.
- host capacity budget.
- virtual-network diagram.
- template standard.
- checkpoint policy.
- reset procedure.

#### TECH STACK

- An isolated local lab or documented simulation.
- Markdown for evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Networks and virtualization unit workspace under it-administration/network.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Run a bounded, reversible lab for Virtualization and Homelab Infrastructure that connects Hosts, Guests, Switches, and Failure Boundaries and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** exhaust a small disposable virtual disk.
- **Reviewer check:** no inbound public path, no sustained overcommit, and rebuild works from records.

#### COMPLETION CRITERIA

- one guest resets without losing documentation or independent backup.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/network/chapter-6-virtualization-and-server-inventory
git commit -m "feat(virtualization-and-server-inventory): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 6](../roadmaps/IT_Administration.md#phase-6) | [CONTINUE TO IT ADMINISTRATION CHAPTER 7](../roadmaps/IT_Administration.md#phase-7)


## Servers, AD, Microsoft cloud

**Shared unit storyline:** Keep one workspace for Servers, AD, Microsoft cloud. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="it-admin-phase-7-project"></a>
### IT ADMINISTRATION CHAPTER 7 PROJECT

#### PROJECT: SECURE SHARED-FOLDER AND PERMISSIONS PROJECT

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Operate shared Windows services with controlled access, remote management, hardening, and maintenance.

**Chapter topic:** Windows Server, Storage, File, and Print Services

**Unit storyline:** Continue the **Servers, AD, Microsoft cloud** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** HR and Finance require separate shares; Management needs read-only reports; IT administers without routine data access.

#### LESSONS PRACTICED

- **7.1 — A Shared Service Is More Than a Server Role:** Configure or simulate A Shared Service Is More Than a Server Role, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run a bounded, reversible lab for Windows Server, Storage, File, and Print Services that connects A Shared Service Is More Than a Server Role and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- group/access matrix.
- share/NTFS configuration.
- quota/capacity alert.
- maintenance plan.
- service/log evidence.

#### TECH STACK

- An isolated local lab or documented simulation.
- Markdown for evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Servers, AD, Microsoft cloud unit workspace under it-administration/identity.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Run a bounded, reversible lab for Windows Server, Storage, File, and Print Services that connects A Shared Service Is More Than a Server Role and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** remove a test group from a resource group, diagnose denial, restore membership.
- **Reviewer check:** effective access matches matrix and no individual user ACL is needed.

#### COMPLETION CRITERIA

- access, capacity, logging, backup, and rollback are all proven.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/identity/chapter-7-secure-shared-folder-and-permissions-project
git commit -m "feat(secure-shared-folder-and-permissions-proje): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 7](../roadmaps/IT_Administration.md#phase-7) | [CONTINUE TO IT ADMINISTRATION CHAPTER 8](../roadmaps/IT_Administration.md#phase-8)


<a id="it-admin-phase-8-project"></a>
### IT ADMINISTRATION CHAPTER 8 PROJECT

#### PROJECT: ACTIVE DIRECTORY COMPANY LAB

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Build and reason about a safe local Windows domain and its identity/resource structure.

**Chapter topic:** Active Directory Domain Services

**Unit storyline:** Continue the **Servers, AD, Microsoft cloud** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Northstar needs central identities for Management, HR, Finance, Sales, and IT.

#### LESSONS PRACTICED

- **8.1 — Central Identity, Devices, and Delegation:** Configure or simulate Central Identity, Devices, and Delegation, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run a bounded, reversible lab for Active Directory Domain Services that connects Central Identity, Devices, and Delegation and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- forest/domain/OU diagram.
- users/computers/groups.
- group-nesting plan.
- joined client.
- delegated-help-desk test.
- DNS health report.

#### TECH STACK

- An isolated local lab or documented simulation.
- Markdown for evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Servers, AD, Microsoft cloud unit workspace under it-administration/identity.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Run a bounded, reversible lab for Active Directory Domain Services that connects Central Identity, Devices, and Delegation and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** point client DNS elsewhere and diagnose join/login failure.
- **Reviewer check:** domain sign-in works, groups drive resource access, delegated user cannot administer the domain.

#### COMPLETION CRITERIA

- reproducible domain and least-privilege access proof.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/identity/chapter-8-active-directory-company-lab
git commit -m "feat(active-directory-company-lab): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 8](../roadmaps/IT_Administration.md#phase-8) | [CONTINUE TO IT ADMINISTRATION CHAPTER 9](../roadmaps/IT_Administration.md#phase-9)


<a id="it-admin-phase-9-project"></a>
### IT ADMINISTRATION CHAPTER 9 PROJECT

#### PROJECT: ONBOARDING, ROLE-CHANGE, AND OFFBOARDING AUTOMATION

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Apply policy, trace Windows authentication, operate joiner-mover-leaver workflows, and reason about AD resilience.

**Chapter topic:** Group Policy, Authentication, and Identity Lifecycle

**Unit storyline:** Continue the **Servers, AD, Microsoft cloud** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** New hires and departures are creating inconsistent access.

#### LESSONS PRACTICED

- **9.1 — From Sign-In to Controlled Access:** Configure or simulate From Sign-In to Controlled Access, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run a bounded, reversible lab for Group Policy, Authentication, and Identity Lifecycle that connects From Sign-In to Controlled Access and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- joiner/mover/leaver approvals.
- group rules.
- harmless test GPO.
- dry-run PowerShell plan.
- disable/revoke/data-transfer checklist.
- Kerberos/GPO troubleshooting evidence.

#### TECH STACK

- An isolated local lab or documented simulation.
- Markdown for evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Servers, AD, Microsoft cloud unit workspace under it-administration/identity.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Run a bounded, reversible lab for Group Policy, Authentication, and Identity Lifecycle that connects From Sign-In to Controlled Access and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** security-filter the GPO incorrectly.
- **Reviewer check:** policy applies only to target, old access is removed, disabled account cannot use resources, data ownership is recorded.

#### COMPLETION CRITERIA

- each lifecycle is approved, repeatable, reversible, and auditable.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/identity/chapter-9-onboarding-role-change-and-offboarding-automation
git commit -m "feat(onboarding-role-change-and-offboarding-aut): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 9](../roadmaps/IT_Administration.md#phase-9) | [CONTINUE TO IT ADMINISTRATION CHAPTER 10](../roadmaps/IT_Administration.md#phase-10)


<a id="it-admin-phase-10-project"></a>
### IT ADMINISTRATION CHAPTER 10 PROJECT

#### PROJECT: MICROSOFT 365 AND ENTRA SIMULATED ADMINISTRATION

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Administer cloud identities and services conceptually and in a licensed sandbox where available.

**Chapter topic:** Microsoft Entra ID, Microsoft 365, and Intune

**Unit storyline:** Continue the **Servers, AD, Microsoft cloud** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Northstar is moving email/collaboration and device policy to Microsoft cloud services.

#### LESSONS PRACTICED

- **10.1 — Cloud Identity Is Not a Hosted Domain Controller:** Configure or simulate Cloud Identity Is Not a Hosted Domain Controller, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run a bounded, reversible lab for Microsoft Entra ID, Microsoft 365, and Intune that connects Cloud Identity Is Not a Hosted Domain Controller and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- fictional tenant map.
- users/groups/licenses/roles.
- MFA/SSPR plan.
- Conditional Access decision table.
- Exchange/Teams/SharePoint cases.
- Intune enrollment/compliance/profile/app/remote-action flow.

#### TECH STACK

- An isolated local lab or documented simulation.
- Markdown for evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Servers, AD, Microsoft cloud unit workspace under it-administration/identity.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Run a bounded, reversible lab for Microsoft Entra ID, Microsoft 365, and Intune that connects Cloud Identity Is Not a Hosted Domain Controller and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** a broad policy would block admins-catch it in report-only/tabletop.
- **Reviewer check:** each case distinguishes authentication, policy, license, service, and data access.

#### COMPLETION CRITERIA

- five failures reach the correct control surface without Global Admin overuse.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/identity/chapter-10-microsoft-365-and-entra-simulated-administration
git commit -m "feat(microsoft-365-and-entra-simulated-administ): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 10](../roadmaps/IT_Administration.md#phase-10) | [CONTINUE TO IT ADMINISTRATION CHAPTER 11](../roadmaps/IT_Administration.md#phase-11)


## Recovery, security, operations

**Shared unit storyline:** Keep one workspace for Recovery, security, operations. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="it-admin-phase-11-project"></a>
### IT ADMINISTRATION CHAPTER 11 PROJECT

#### PROJECT: BACKUP-AND-RESTORE VERIFICATION

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Plan storage and prove recoverability for files, VMs, servers, databases, and ERP systems.

**Chapter topic:** Storage, Backups, and Disaster Recovery

**Unit storyline:** Continue the **Recovery, security, operations** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** A backup dashboard is green, but leadership wants proof Northstar can recover.

#### LESSONS PRACTICED

- **11.1 — Recovery Is the Product:** Add an executable Recovery Is the Product procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Storage, Backups, and Disaster Recovery that connects Recovery Is the Product and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- data inventory.
- recovery tiers, 3-2-1-1-style design.
- schedule/retention/credential model.
- file/VM/database/ERP restore procedures.
- timed evidence.

#### TECH STACK

- An isolated local lab.
- Markdown for the runbook and evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Recovery, security, operations unit workspace under it-administration/ops.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Storage, Backups, and Disaster Recovery that connects Recovery Is the Product and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** remove one required restore dependency or use a wrong credential, then correct the runbook.
- **Reviewer check:** another person restores without the author and backup job success alone is not accepted.

#### COMPLETION CRITERIA

- recovery meets declared targets or documents an owned gap.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/ops/chapter-11-backup-and-restore-verification
git commit -m "feat(backup-and-restore-verification): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 11](../roadmaps/IT_Administration.md#phase-11) | [CONTINUE TO IT ADMINISTRATION CHAPTER 12](../roadmaps/IT_Administration.md#phase-12)


<a id="it-admin-phase-12-project"></a>
### IT ADMINISTRATION CHAPTER 12 PROJECT

#### PROJECT: ODOO OPERATIONAL ADMINISTRATION LAB

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Support database-backed ERP services operationally and escalate at the right boundary.

**Chapter topic:** Databases and ERP Operations

**Unit storyline:** Continue the **Recovery, security, operations** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Odoo is slow and an attachment is missing after a change.

#### LESSONS PRACTICED

- **12.1 — Application, Database, Files, and Business Configuration:** Add an executable Application, Database, Files, and Business Configuration procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Databases and ERP Operations that connects Application, Database, Files, and Business Configuration and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- architecture.
- roles/access matrix.
- service/log/capacity checks.
- module/change plan.
- database+filestore backup/restore.
- vendor escalation packet.

#### TECH STACK

- An isolated local lab.
- Markdown for the runbook and evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Recovery, security, operations unit workspace under it-administration/ops.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Databases and ERP Operations that connects Application, Database, Files, and Business Configuration and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** database service stopped or wrong lab connection setting.
- **Reviewer check:** app, DB, attachment, scheduled job, and access tests pass.

#### COMPLETION CRITERIA

- fault ownership and recovery are proven without unsupported data edits.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/ops/chapter-12-odoo-operational-administration-lab
git commit -m "feat(odoo-operational-administration-lab): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 12](../roadmaps/IT_Administration.md#phase-12) | [CONTINUE TO IT ADMINISTRATION CHAPTER 13](../roadmaps/IT_Administration.md#phase-13)


<a id="it-admin-phase-13-project"></a>
### IT ADMINISTRATION CHAPTER 13 PROJECT

#### PROJECT: DEFENSIVE ADMINISTRATION AND INCIDENT TABLETOP

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Build defensive controls into daily administration and respond safely to common incidents.

**Chapter topic:** Security for Administrators

**Unit storyline:** Continue the **Recovery, security, operations** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Several users receive phishing email and one administrator entered credentials.

#### LESSONS PRACTICED

- **13.1 — Reduce Privilege, Exposure, and Recovery Risk:** Add an executable Reduce Privilege, Exposure, and Recovery Risk procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Security for Administrators that connects Reduce Privilege, Exposure, and Recovery Risk and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- least-privilege baseline.
- privileged-account map.
- phishing/ransomware/device-loss playbooks.
- evidence checklist.
- executive update.
- remediation register.

#### TECH STACK

- An isolated local lab.
- Markdown for the runbook and evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Recovery, security, operations unit workspace under it-administration/ops.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Security for Administrators that connects Reduce Privilege, Exposure, and Recovery Risk and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** reveal a former employee account still has group access.
- **Reviewer check:** decisions name authority, blast radius, evidence impact, service impact, and recovery validation.

#### COMPLETION CRITERIA

- the plan is executable and preserves both business service and investigation value.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/ops/chapter-13-defensive-administration-and-incident-tabletop
git commit -m "feat(defensive-administration-and-incident-tabl): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 13](../roadmaps/IT_Administration.md#phase-13) | [CONTINUE TO IT ADMINISTRATION CHAPTER 14](../roadmaps/IT_Administration.md#phase-14)


<a id="it-admin-phase-14-project"></a>
### IT ADMINISTRATION CHAPTER 14 PROJECT

#### PROJECT: MONITORING AND ALERTING

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Detect meaningful service degradation and execute changes with verification and rollback.

**Chapter topic:** Monitoring, Patching, and Maintenance

**Unit storyline:** Continue the **Recovery, security, operations** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Users discover failures before IT and a certificate will expire unnoticed.

#### LESSONS PRACTICED

- **14.1 — Turn Signals into Action:** Add an executable Turn Signals into Action procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Monitoring, Patching, and Maintenance that connects Turn Signals into Action and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- service/dependency map.
- baselines.
- Uptime Kuma/Zabbix/local checks.
- disk/cert/backup/ERP alerts.
- runbooks.
- patch-window record.

#### TECH STACK

- An isolated local lab.
- Markdown for the runbook and evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Recovery, security, operations unit workspace under it-administration/ops.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Monitoring, Patching, and Maintenance that connects Turn Signals into Action and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** stop test web service and age a simulated backup status.
- **Reviewer check:** one incident creates one actionable alert that clears, while normal variation does not page.

#### COMPLETION CRITERIA

- alert contains context, owner, action, and verified recovery.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/ops/chapter-14-monitoring-and-alerting
git commit -m "feat(monitoring-and-alerting): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 14](../roadmaps/IT_Administration.md#phase-14) | [CONTINUE TO IT ADMINISTRATION CHAPTER 15](../roadmaps/IT_Administration.md#phase-15)


<a id="it-admin-phase-15-project"></a>
### IT ADMINISTRATION CHAPTER 15 PROJECT

#### PROJECT: POWERSHELL/BASH ADMINISTRATION TOOLKIT

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Automate repetitive work with validation, least privilege, idempotence, logs, dry runs, and rollback.

**Chapter topic:** Administration Automation

**Unit storyline:** Continue the **Recovery, security, operations** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Inventory, health checks, log collection, and backup verification are inconsistent.

#### LESSONS PRACTICED

- **15.1 — Make the Safe Path Repeatable:** Add an executable Make the Safe Path Repeatable procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Administration Automation that connects Make the Safe Path Repeatable and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- PowerShell Windows inventory/health script.
- Bash Linux equivalent.
- small Python CSV/report helper optional.
- tests.
- dry-run/log/error/secret policy.
- schedule plan.
- Ansible-awareness note.

#### TECH STACK

- An isolated local lab.
- Markdown for the runbook and evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Recovery, security, operations unit workspace under it-administration/ops.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Administration Automation that connects Make the Safe Path Repeatable and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** malformed CSV and unreachable host.
- **Reviewer check:** second run makes no unintended change and failures are per-target.

#### COMPLETION CRITERIA

- clean checkout reproduces tests and report.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/ops/chapter-15-powershell-bash-administration-toolkit
git commit -m "feat(powershell-bash-administration-toolkit): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 15](../roadmaps/IT_Administration.md#phase-15) | [CONTINUE TO IT ADMINISTRATION CHAPTER 16](../roadmaps/IT_Administration.md#phase-16)


<a id="it-admin-phase-16-project"></a>
### IT ADMINISTRATION CHAPTER 16 PROJECT

#### PROJECT: SERVICE DESK, ASSET, VENDOR, AND HANDOVER PACK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Operate work from request to closure and leave records another administrator can trust.

**Chapter topic:** Help Desk, ITSM, Assets, Vendors, and Documentation

**Unit storyline:** Continue the **Recovery, security, operations** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Northstar has repeated incidents, unknown device ownership, and vendor escalations without evidence.

#### LESSONS PRACTICED

- **16.1 — Administration as a Service System:** Add an executable Administration as a Service System procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Help Desk, ITSM, Assets, Vendors, and Documentation that connects Administration as a Service System and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- incident/request/problem/change workflows.
- priority matrix/SLA examples.
- onboarding/offboarding KB.
- hardware/software/license inventory.
- warranty/lifecycle/spares.
- vendor ticket.
- network/server/IP/role records.
- SOPs/runbooks/change log.

#### TECH STACK

- An isolated local lab.
- Markdown for the runbook and evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Recovery, security, operations unit workspace under it-administration/ops.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Help Desk, ITSM, Assets, Vendors, and Documentation that connects Administration as a Service System and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** stale owner and expired warranty discovered during handover.
- **Reviewer check:** peer finds owner, impact, dependency, support contract, recovery, and last-tested date.

#### COMPLETION CRITERIA

- records enable independent operation rather than documentation for its own sake.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/ops/chapter-16-service-desk-asset-vendor-and-handover-pack
git commit -m "feat(service-desk-asset-vendor-and-handover-pac): complete chapter 16 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 16](../roadmaps/IT_Administration.md#phase-16) | [CONTINUE TO IT ADMINISTRATION CHAPTER 17](../roadmaps/IT_Administration.md#phase-17)


## Hybrid and hire

**Shared unit storyline:** Keep one workspace for Hybrid and hire. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="it-admin-phase-17-project"></a>
### IT ADMINISTRATION CHAPTER 17 PROJECT

#### PROJECT: HYBRID IT DESIGN AND MIGRATION EXERCISE

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Operate across on-premises, SaaS, and cloud boundaries without losing responsibility, cost, or recovery visibility.

**Chapter topic:** Cloud and Hybrid Administration

**Unit storyline:** Continue the **Hybrid and hire** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Northstar wants cloud-hosted collaboration and one application while retaining local identity/data dependencies.

#### LESSONS PRACTICED

- **17.1 — One Service Across Several Owners:** Add an executable One Service Across Several Owners procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Write and rehearse an operational runbook for Cloud and Hybrid Administration that connects One Service Across Several Owners and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- on-prem/IaaS/PaaS/SaaS responsibility matrix.
- provider-neutral topology.
- Entra/hybrid identity concept.
- VPN/DNS flow.
- backup/monitoring plan.
- budget/tagging rules.
- migration/cutover/rollback.

#### TECH STACK

- An isolated local lab.
- Markdown for the runbook and evidence.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Hybrid and hire unit workspace under it-administration/hire.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Write and rehearse an operational runbook for Cloud and Hybrid Administration that connects One Service Across Several Owners and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** simulated VPN outage or missed egress/storage cost.
- **Reviewer check:** every arrow and data copy has owner, control, signal, cost, and recovery.

#### COMPLETION CRITERIA

- design is supportable under loss of cloud, VPN, identity, or on-prem dependency.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/hire/chapter-17-hybrid-it-design-and-migration-exercise
git commit -m "feat(hybrid-it-design-and-migration-exercise): complete chapter 17 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 17](../roadmaps/IT_Administration.md#phase-17) | [CONTINUE TO IT ADMINISTRATION CHAPTER 18](../roadmaps/IT_Administration.md#phase-18)


<a id="it-admin-phase-18-project"></a>
### IT ADMINISTRATION CHAPTER 18 PROJECT

#### PROJECT: SMALL-COMPANY OPERATIONS DEMONSTRATION

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Present job-ready evidence from a complete, supportable, secure, and recoverable small-company environment.

**Chapter topic:** Small-Company Capstone and Career Readiness

**Unit storyline:** Continue the **Hybrid and hire** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

**Scenario:** Leadership and a replacement administrator need proof the environment is controlled and recoverable.

#### LESSONS PRACTICED

- **18.1 — From Lab Tasks to Operational Judgment:** Practice explaining or applying From Lab Tasks to Operational Judgment under a timer and record the evidence and correction.

#### SPECIFICATION

- Complete a timed rehearsal and debrief for Small-Company Capstone and Career Readiness that connects From Lab Tasks to Operational Judgment and makes every important result inspectable.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- five-minute executive brief, 15-minute technical tour.
- live health check.
- one induced incident.
- one restore.
- risk/roadmap.
- honest CV bullets.
- scenario-answer recordings.

#### TECH STACK

- A timer.
- Markdown or paper notes.
- Git.

#### BUILD IT STEP BY STEP

1. Create or continue the shared Hybrid and hire unit workspace under it-administration/hire.
2. Write a short plan that maps every lesson below to a deliverable or observable behavior.
3. Complete a timed rehearsal and debrief for Small-Company Capstone and Career Readiness that connects From Lab Tasks to Operational Judgment and makes every important result inspectable.
4. Complete each lesson-mapping item and keep evidence beside the artifact.
5. Run the normal, boundary, and safe-failure checks; repair the artifact and rerun them.
6. Record what changed, what remains limited, and the next chapter handoff.

#### VALIDATION

- **Normal case:** Complete the intended journey with representative generated or permissioned input and compare the result with the chapter outcome.
- **Boundary case:** Use the smallest, empty, maximum safe, or otherwise limiting input that matters to this artifact and record the observed behavior.
- **Safe failure case:** stop a service or misconfigure test DNS-never production.
- **Reviewer check:** reviewer answers who owns it, how it is monitored, how access is removed, how it recovers, and what remains risky.

#### COMPLETION CRITERIA

- peer can operate and recover the lab from repository evidence.

### Git Checkpoint

From the portfolio repository root, review and save only this chapter's folder:

```bash
git status
git add -- it-administration/hire/chapter-18-small-company-operations-demonstration
git commit -m "feat(small-company-operations-demonstration): complete chapter 18 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW IT ADMINISTRATION CHAPTER 18](../roadmaps/IT_Administration.md#phase-18) | [RETURN TO THE IT ADMINISTRATION COURSE](../roadmaps/IT_Administration.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="it-admin-main-portfolio-project"></a>

## IT ADMINISTRATION MAIN PORTFOLIO PROJECT - COMPLETE SMALL-COMPANY IT INFRASTRUCTURE

**Business scenario:** Design and operate Northstar Services for Management, HR, Finance, Sales, and IT on one reasonably capable host with low-resource alternatives. **Learning objective:** prove end-to-end administration, security, support, recovery, and handover.

**Prerequisites:** all 18 phases. **Free/open stack:** VirtualBox or Hyper-V; Windows evaluation VMs where legally available or documented simulation; Ubuntu Server; Odoo Community with PostgreSQL or architecture-only mode; PowerShell/Bash/Python; Uptime Kuma or Zabbix; Git and Mermaid/draw.io. No paid cloud or Microsoft 365 tenant is required.

**Required deliverables:** requirements and risk register; users/groups/role matrix; endpoint/server/asset inventory; DNS/DHCP/IP/VLAN/Wi-Fi/VPN/firewall plan; shared storage permissions; ERP access and service map; monitoring/alert evidence; backup design and tested restores; patch/maintenance plan; privileged/MFA/encryption/logging controls; onboarding/offboarding; incident/change/problem/ticket examples; vendor/support matrix; network/system diagrams; SOPs/runbooks/recovery procedures; configuration/change records; executive-friendly handover.

**Step-by-step milestones:** (1) define departments, services, data sensitivity, RPO/RTO, budget, and exclusions; (2) build isolated virtual network and inventories; (3) configure Windows/Linux services; (4) build AD/DNS, groups, OUs, client join, GPO, and delegation; (5) implement group-based shares; (6) simulate Entra/M365/Intune; (7) deploy or model Odoo/database/filestore; (8) implement monitoring and capacity/expiry/backup alerts; (9) build protected backups and restore file plus ERP/database artifact; (10) apply admin security baseline; (11) automate inventory/health and lifecycle dry runs; (12) operate tickets/changes/assets/vendors; (13) add hybrid design; (14) induce one endpoint, network/DNS, service, access, ERP/database, backup, and certificate-expiry scenario; (15) correct gaps found by peer handover.

**Validation checks:** role-based access tests; domain/DNS/GPO health; Windows/Linux service and log checks; ERP transaction/attachment/job tests; alert detection/clearance; backup integrity and timed restore; patch post-check; offboarding access removal; asset/license ownership; clean rebuild/reset instructions; a reviewer can use the runbooks.

**Failures to introduce safely:** one-user login failure, all-user DNS/DC simulation, wrong resolver, denied share, filtered GPO, department printer rule, low disposable disk, stopped test service after update, slow ERP symptom, stopped lab database, green job with failed restore dependency, former fictional employee access, simulated phishing table, expiring test certificate, accidental lab config change, and remote-office/VPN outage tabletop.

**Evidence to capture:** scope/impact; changes; commands/logs with timestamps; hypotheses; smallest safe tests; mitigation; root cause; prevention; restore hashes/timing; before/after access; approvals; communications; risk decisions. Screenshots support but do not replace repeatable text/configuration.

**Security notes:** isolate the lab; never expose RDP/SSH/database/ERP/hypervisor consoles publicly; use generated data and documentation IP ranges; keep secrets/backups/VM disks outside Git; use separate admin identities; preserve evidence; follow evaluation/trial licenses; delete optional cloud trial resources before billing.

**Interview explanation:** present requirements first, trace one employee workflow, explain three trade-offs, demonstrate one failure and recovery, state top risks and next improvements, and be explicit about what was simulated. Honest portfolio language beats inflated enterprise claims.

**Completion criteria:** every required outcome has an owner, configuration or procedure, validation signal, failure/recovery test, documentation, and peer-reviewed handover; all local tests pass from a clean checkout.

### Capstone Git Checkpoints

1. Foundations: commit requirements, topology, inventory, and reset plan.
2. Identity/services: commit sanitized AD, Windows/Linux, share, and ERP configuration evidence.
3. Operations: commit monitoring, backup/restore, security, automation, ITSM, and asset artifacts.
4. Handover: commit corrected diagrams/runbooks, reviewer rubric, CV bullets, and interview evidence.

At each checkpoint run project validation, inspect `git diff --staged`, scan for secrets/private data, stage only the named paths, commit atomically, and verify a clean status. Do not push unless you deliberately choose to publish the sanitized portfolio.
