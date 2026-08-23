# Cybersecurity Chapter Projects

One required applied project follows every chapter in the [Cybersecurity roadmap](../roadmaps/ICT_Cybersecurity.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## Foundations

**Shared unit storyline:** Keep one workspace for Foundations. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cyber-phase-1-project"></a>
### CYBERSECURITY CHAPTER 1 PROJECT

#### PROJECT: RISK REGISTER AND TREATMENT PLAN

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Stop treating security as a list of tools. Start thinking in assets, threats, vulnerabilities, and controls.

**Chapter topic:** Security Mindset: Risk Before Tools

**Unit storyline:** Continue the **Foundations** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Risk Register and Treatment Plan as a focused exercise for Risk-Based Security. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **1.1 — CIA Triad, AAA, and What "Secure" Means:** Represent CIA Triad, AAA, and What "Secure" Means in the design and justify one decision that depends on it.
- **1.2 — Ethics, Scope, and the Attacker Mindset Without Becoming the Attacker:** Represent Ethics, Scope, and the Attacker Mindset Without Becoming the Attacker in the design and justify one decision that depends on it.

#### SPECIFICATION

- Create a risk register for a fictional organization with assets, threats, vulnerabilities, likelihood, impact, owner, treatment, due date, and residual risk.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create a risk register for a fictional organization with assets, threats, vulnerabilities, likelihood, impact, owner, treatment, due date, and residual risk.
- Define one realistic scenario, its boundaries, and the intended reader for the Risk Register and Treatment Plan.
- Collect or create the exact inputs needed to apply Risk-Based Security; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Spreadsheet or Markdown table.
- A fictional small-company scenario.
- No coding required.

#### BUILD IT STEP BY STEP

1. Create an isolated risk-register-and-treatment-plan lab and an artifacts folder; use only systems you own or are authorized to test.
2. Create a risk register for a fictional organization with assets, threats, vulnerabilities, likelihood, impact, owner, treatment, due date, and residual risk.
3. Collect or create the exact inputs needed to apply Risk-Based Security; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Risk-Based Security.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/foundations/chapter-1-risk-register-and-treatment-plan
git commit -m "feat(risk-register-and-treatment-plan): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 1](../roadmaps/ICT_Cybersecurity.md#phase-1) | [CONTINUE TO CYBERSECURITY CHAPTER 2](../roadmaps/ICT_Cybersecurity.md#phase-2)


<a id="cyber-phase-2-project"></a>
### CYBERSECURITY CHAPTER 2 PROJECT

#### PROJECT: NETWORK ATTACK SURFACE MAP

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Read network behavior well enough to spot abuse, place controls, and follow investigations.

**Chapter topic:** Networking for Security

**Unit storyline:** Continue the **Foundations** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Network Attack Surface Map as a focused exercise for Networking for Security. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **2.1 — OSI / TCP-IP, Ports, and Packet Paths:** Configure or simulate OSI / TCP-IP, Ports, and Packet Paths, capture observable evidence, and restore the safe baseline.
- **2.2 — Sniffing, Segmentation, and Why Flat Networks Fail:** Configure or simulate Sniffing, Segmentation, and Why Flat Networks Fail, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Draw an authorized lab network, inventory hosts/services/trust boundaries, validate exposure with safe scans, and prioritize attack paths.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Draw an authorized lab network, inventory hosts/services/trust boundaries, validate exposure with safe scans, and prioritize attack paths.
- Define one realistic scenario, its boundaries, and the intended reader for the Network Attack Surface Map.
- Collect or create the exact inputs needed to apply Networking for Security; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- diagrams.net.
- Nmap against your own lab only.
- No coding required.

#### BUILD IT STEP BY STEP

1. Create an isolated network-attack-surface-map lab and an artifacts folder; use only systems you own or are authorized to test.
2. Draw an authorized lab network, inventory hosts/services/trust boundaries, validate exposure with safe scans, and prioritize attack paths.
3. Collect or create the exact inputs needed to apply Networking for Security; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Networking for Security.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/foundations/chapter-2-network-attack-surface-map
git commit -m "feat(network-attack-surface-map): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 2](../roadmaps/ICT_Cybersecurity.md#phase-2) | [CONTINUE TO CYBERSECURITY CHAPTER 3](../roadmaps/ICT_Cybersecurity.md#phase-3)


<a id="cyber-phase-3-project"></a>
### CYBERSECURITY CHAPTER 3 PROJECT

#### PROJECT: HOST HARDENING BASELINE

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Be dangerous (productively) on both major OS families: work through, inspect, harden basics, read logs.

**Chapter topic:** Linux and Windows for Security

**Unit storyline:** Continue the **Foundations** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Host Hardening Baseline as a focused exercise for Host Security. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **3.1 — Linux CLI, Permissions, Processes, and Logs:** Represent Linux CLI, Permissions, Processes, and Logs in the design and justify one decision that depends on it.
- **3.2 — Windows Internals Enough to Investigate:** Represent Windows Internals Enough to Investigate in the design and justify one decision that depends on it.

#### SPECIFICATION

- Apply and verify a Linux/Windows hardening baseline for accounts, patches, services, firewall, audit logs, and file permissions.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Apply and verify a Linux/Windows hardening baseline for accounts, patches, services, firewall, audit logs, and file permissions.
- Give the user one clear main action and keep all other features secondary.
- Use Host Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated host-hardening-baseline lab and an artifacts folder; use only systems you own or are authorized to test.
2. Apply and verify a Linux/Windows hardening baseline for accounts, patches, services, firewall, audit logs, and file permissions.
3. Use Host Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Host Security.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/foundations/chapter-3-host-hardening-baseline
git commit -m "feat(host-hardening-baseline): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 3](../roadmaps/ICT_Cybersecurity.md#phase-3) | [CONTINUE TO CYBERSECURITY CHAPTER 4](../roadmaps/ICT_Cybersecurity.md#phase-4)


<a id="cyber-phase-4-project"></a>
### CYBERSECURITY CHAPTER 4 PROJECT

#### PROJECT: SECURE FILE VAULT

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Use cryptography correctly: know what each primitive is for, and never roll your own.

**Chapter topic:** Cryptography for Defenders and Builders

**Unit storyline:** Continue the **Foundations** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Secure File Vault as a focused exercise for Cryptography. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **4.1 — Hashing, Symmetric, Asymmetric, and Signatures:** Configure or simulate Hashing, Symmetric, Asymmetric, and Signatures, capture observable evidence, and restore the safe baseline.
- **4.2 — TLS, Certificates, and Trust Chains:** Configure or simulate TLS, Certificates, and Trust Chains, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Build a local file vault using established cryptographic libraries with encryption, integrity, key derivation, rotation, and tamper failure.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build a local file vault using established cryptographic libraries with encryption, integrity, key derivation, rotation, and tamper failure.
- Give the user one clear main action and keep all other features secondary.
- Use Cryptography in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated secure-file-vault lab and an artifacts folder; use only systems you own or are authorized to test.
2. Build a local file vault using established cryptographic libraries with encryption, integrity, key derivation, rotation, and tamper failure.
3. Use Cryptography in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Cryptography.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/foundations/chapter-4-secure-file-vault
git commit -m "feat(secure-file-vault): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 4](../roadmaps/ICT_Cybersecurity.md#phase-4) | [CONTINUE TO CYBERSECURITY CHAPTER 5](../roadmaps/ICT_Cybersecurity.md#phase-5)


<a id="cyber-phase-5-project"></a>
### CYBERSECURITY CHAPTER 5 PROJECT

#### PROJECT: LEAST-PRIVILEGE IAM REVIEW

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Design and critique how systems decide who someone is and what they may do.

**Chapter topic:** Identity and Access Management

**Unit storyline:** Continue the **Foundations** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Least-Privilege IAM Review as a focused exercise for Identity and Access Management. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **5.1 — Passwords, Sessions, Cookies, MFA, and Tokens:** Configure or simulate Passwords, Sessions, Cookies, MFA, and Tokens, capture observable evidence, and restore the safe baseline.
- **5.2 — Authorization: RBAC, Least Privilege, and Broken Access Control:** Configure or simulate Authorization: RBAC, Least Privilege, and Broken Access Control, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Review fictional users, groups, roles, service accounts, MFA, stale access, and separation of duties and produce least-privilege changes.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Review fictional users, groups, roles, service accounts, MFA, stale access, and separation of duties and produce least-privilege changes.
- Give the user one clear main action and keep all other features secondary.
- Use Identity and Access Management in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated least-privilege-iam-review lab and an artifacts folder; use only systems you own or are authorized to test.
2. Review fictional users, groups, roles, service accounts, MFA, stale access, and separation of duties and produce least-privilege changes.
3. Use Identity and Access Management in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Identity and Access Management.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/foundations/chapter-5-least-privilege-iam-review
git commit -m "feat(least-privilege-iam-review): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 5](../roadmaps/ICT_Cybersecurity.md#phase-5) | [CONTINUE TO CYBERSECURITY CHAPTER 6](../roadmaps/ICT_Cybersecurity.md#phase-6)


<a id="cyber-phase-6-project"></a>
### CYBERSECURITY CHAPTER 6 PROJECT

#### PROJECT: THREAT MODEL AND ATT&CK MAP

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Anticipate abuse before writing detections or exploits. Speak ATT&CK fluently.

**Chapter topic:** Threat Modeling and MITRE ATT&CK

**Unit storyline:** Continue the **Foundations** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Threat Model and ATT&CK Map as a focused exercise for Threat Modeling and ATT&CK. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **6.1 — STRIDE, Assets, and Data-Flow Diagrams:** Represent STRIDE, Assets, and Data-Flow Diagrams in the design and justify one decision that depends on it.
- **6.2 — MITRE ATT&CK: TTPs as a Shared Map:** Represent MITRE ATT&CK: TTPs as a Shared Map in the design and justify one decision that depends on it.

#### SPECIFICATION

- Threat-model a small portal with data-flow and trust-boundary diagrams, STRIDE-style threats, ATT&CK techniques, and prioritized controls.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Threat-model a small portal with data-flow and trust-boundary diagrams, STRIDE-style threats, ATT&CK techniques, and prioritized controls.
- Define one realistic scenario, its boundaries, and the intended reader for the Threat Model and ATT&CK Map.
- Collect or create the exact inputs needed to apply Threat Modeling and ATT&CK; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- OWASP Threat Dragon.
- MITRE ATT&CK Navigator.
- No coding required.

#### BUILD IT STEP BY STEP

1. Create an isolated threat-model-and-att-ck-map lab and an artifacts folder; use only systems you own or are authorized to test.
2. Threat-model a small portal with data-flow and trust-boundary diagrams, STRIDE-style threats, ATT&CK techniques, and prioritized controls.
3. Collect or create the exact inputs needed to apply Threat Modeling and ATT&CK; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Threat Modeling and ATT&CK.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/foundations/chapter-6-threat-model-and-att-ck-map
git commit -m "feat(threat-model-and-att-ck-map): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 6](../roadmaps/ICT_Cybersecurity.md#phase-6) | [CONTINUE TO CYBERSECURITY CHAPTER 7](../roadmaps/ICT_Cybersecurity.md#phase-7)


## Defend

**Shared unit storyline:** Keep one workspace for Defend. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cyber-phase-7-project"></a>
### CYBERSECURITY CHAPTER 7 PROJECT

#### PROJECT: OWASP REMEDIATION LAB

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Understand, exploit (in labs), and fix the web vulnerabilities that dominate real breaches.

**Chapter topic:** Web Application Security (OWASP)

**Unit storyline:** Continue the **Defend** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build OWASP Remediation Lab as a focused exercise for Web Application Security. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **7.1 — Injection and XSS (OWASP A03 and Friends):** Configure or simulate Injection and XSS (OWASP A03 and Friends), capture observable evidence, and restore the safe baseline.
- **7.2 — SSRF, CSRF, and Modern Access-Control Bugs:** Configure or simulate SSRF, CSRF, and Modern Access-Control Bugs, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run OWASP Juice Shop locally, demonstrate selected issues safely, implement or document mitigations, and retest the same cases.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Run OWASP Juice Shop locally, demonstrate selected issues safely, implement or document mitigations, and retest the same cases.
- Give the user one clear main action and keep all other features secondary.
- Use Web Application Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- OWASP Juice Shop in Docker.
- Burp Suite Community or browser tools.
- Use only the local practice target.

#### BUILD IT STEP BY STEP

1. Create an isolated owasp-remediation-lab lab and an artifacts folder; use only systems you own or are authorized to test.
2. Run OWASP Juice Shop locally, demonstrate selected issues safely, implement or document mitigations, and retest the same cases.
3. Use Web Application Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Web Application Security.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/defend/chapter-7-owasp-remediation-lab
git commit -m "feat(owasp-remediation-lab): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 7](../roadmaps/ICT_Cybersecurity.md#phase-7) | [CONTINUE TO CYBERSECURITY CHAPTER 8](../roadmaps/ICT_Cybersecurity.md#phase-8)


<a id="cyber-phase-8-project"></a>
### CYBERSECURITY CHAPTER 8 PROJECT

#### PROJECT: FIREWALL AND IDS VALIDATION

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Place and critique network controls that reduce blast radius and add detection points.

**Chapter topic:** Network Defenses

**Unit storyline:** Continue the **Defend** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Firewall and IDS Validation as a focused exercise for Network Defenses. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **8.1 — Firewalls, VPN, IDS/IPS:** Represent Firewalls, VPN, IDS/IPS in the design and justify one decision that depends on it.
- **8.2 — Secure Network Design Patterns:** Represent Secure Network Design Patterns in the design and justify one decision that depends on it.

#### SPECIFICATION

- Configure local segmentation, host firewall, Suricata rules, allowed traffic tests, blocked probes, alert validation, and false-positive tuning.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Configure local segmentation, host firewall, Suricata rules, allowed traffic tests, blocked probes, alert validation, and false-positive tuning.
- Give the user one clear main action and keep all other features secondary.
- Use Network Defenses in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated firewall-and-ids-validation lab and an artifacts folder; use only systems you own or are authorized to test.
2. Configure local segmentation, host firewall, Suricata rules, allowed traffic tests, blocked probes, alert validation, and false-positive tuning.
3. Use Network Defenses in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Network Defenses.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/defend/chapter-8-firewall-and-ids-validation
git commit -m "feat(firewall-and-ids-validation): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 8](../roadmaps/ICT_Cybersecurity.md#phase-8) | [CONTINUE TO CYBERSECURITY CHAPTER 9](../roadmaps/ICT_Cybersecurity.md#phase-9)


<a id="cyber-phase-9-project"></a>
### CYBERSECURITY CHAPTER 9 PROJECT

#### PROJECT: ENDPOINT HARDENING PACK

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Shrink attack surface with baselines; understand what EDR/AV actually buy you.

**Chapter topic:** Hardening and Endpoint Security

**Unit storyline:** Continue the **Defend** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Endpoint Hardening Pack as a focused exercise for Endpoint Hardening. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **9.1 — CIS-Style Baselines and Attack Surface Reduction:** Configure or simulate CIS-Style Baselines and Attack Surface Reduction, capture observable evidence, and restore the safe baseline.
- **9.2 — AV / EDR Intuition (Without Vendor Worship):** Configure or simulate AV / EDR Intuition (Without Vendor Worship), capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Create endpoint hardening configuration with audit/file-integrity telemetry, verification commands, rollback, and one simulated alert.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create endpoint hardening configuration with audit/file-integrity telemetry, verification commands, rollback, and one simulated alert.
- Give the user one clear main action and keep all other features secondary.
- Use Endpoint Hardening in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated endpoint-hardening-pack lab and an artifacts folder; use only systems you own or are authorized to test.
2. Create endpoint hardening configuration with audit/file-integrity telemetry, verification commands, rollback, and one simulated alert.
3. Use Endpoint Hardening in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Endpoint Hardening.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/defend/chapter-9-endpoint-hardening-pack
git commit -m "feat(endpoint-hardening-pack): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 9](../roadmaps/ICT_Cybersecurity.md#phase-9) | [CONTINUE TO CYBERSECURITY CHAPTER 10](../roadmaps/ICT_Cybersecurity.md#phase-10)


<a id="cyber-phase-10-project"></a>
### CYBERSECURITY CHAPTER 10 PROJECT

#### PROJECT: VULNERABILITY TRIAGE PROGRAM

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Run a sane vuln program: discover, prioritize by risk, remediate, verify.

**Chapter topic:** Vulnerability Management

**Unit storyline:** Continue the **Defend** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Vulnerability Triage Program as a focused exercise for Vulnerability Management. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **10.1 — Scanning, CVSS, and Prioritization Beyond the Score:** Configure or simulate Scanning, CVSS, and Prioritization Beyond the Score, capture observable evidence, and restore the safe baseline.
- **10.2 — Patch Management and Secure Exceptions:** Configure or simulate Patch Management and Secure Exceptions, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Scan a deliberately vulnerable local VM with Greenbone, validate findings, rank them by context, assign remediation, and rescan.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Scan a deliberately vulnerable local VM with Greenbone, validate findings, rank them by context, assign remediation, and rescan.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Vulnerability Management and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Greenbone/OpenVAS or Nessus Essentials.
- A deliberately vulnerable local VM.
- Spreadsheet; use only your own lab.

#### BUILD IT STEP BY STEP

1. Create an isolated vulnerability-triage-program lab and an artifacts folder; use only systems you own or are authorized to test.
2. Scan a deliberately vulnerable local VM with Greenbone, validate findings, rank them by context, assign remediation, and rescan.
3. Use a metric connected to Vulnerability Management and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Vulnerability Management.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/defend/chapter-10-vulnerability-triage-program
git commit -m "feat(vulnerability-triage-program): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 10](../roadmaps/ICT_Cybersecurity.md#phase-10) | [CONTINUE TO CYBERSECURITY CHAPTER 11](../roadmaps/ICT_Cybersecurity.md#phase-11)


## Attack

**Shared unit storyline:** Keep one workspace for Attack. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cyber-phase-11-project"></a>
### CYBERSECURITY CHAPTER 11 PROJECT

#### PROJECT: AUTHORIZED WEB PENTEST REPORT

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Run offensive work as a professional process with scope, evidence, and clear reporting - never as random hacking.

**Chapter topic:** Penetration Testing Methodology

**Unit storyline:** Continue the **Attack** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Authorized Web Pentest Report as a focused exercise for Penetration Testing Methodology. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **11.1 — Scopes, Recon, Enumeration, and Tooling Discipline:** Configure or simulate Scopes, Recon, Enumeration, and Tooling Discipline, capture observable evidence, and restore the safe baseline.
- **11.2 — Exploitation, Post-Exploitation, and Reporting:** Configure or simulate Exploitation, Post-Exploitation, and Reporting, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Perform a scoped authorized assessment of a local training app through planning, discovery, validation, evidence, cleanup, and remediation report.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Perform a scoped authorized assessment of a local training app through planning, discovery, validation, evidence, cleanup, and remediation report.
- Define one realistic scenario, its boundaries, and the intended reader for the Authorized Web Pentest Report.
- Collect or create the exact inputs needed to apply Penetration Testing Methodology; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- OWASP Juice Shop in Docker.
- Burp Suite Community.
- Use only the local practice target.

#### BUILD IT STEP BY STEP

1. Create an isolated authorized-web-pentest-report lab and an artifacts folder; use only systems you own or are authorized to test.
2. Perform a scoped authorized assessment of a local training app through planning, discovery, validation, evidence, cleanup, and remediation report.
3. Collect or create the exact inputs needed to apply Penetration Testing Methodology; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Penetration Testing Methodology.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/attack/chapter-11-authorized-web-pentest-report
git commit -m "feat(authorized-web-pentest-report): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 11](../roadmaps/ICT_Cybersecurity.md#phase-11) | [CONTINUE TO CYBERSECURITY CHAPTER 12](../roadmaps/ICT_Cybersecurity.md#phase-12)


<a id="cyber-phase-12-project"></a>
### CYBERSECURITY CHAPTER 12 PROJECT

#### PROJECT: ACTIVE DIRECTORY DETECTION LAB

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Explain AD authentication flows and common attack paths at a professional level; practice only in lab domains.

**Chapter topic:** Active Directory Attacks and Defenses

**Unit storyline:** Continue the **Attack** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Active Directory Detection Lab as a focused exercise for Active Directory Defense. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **12.1 — AD Basics and Kerberos (Enough to Reason):** Configure or simulate AD Basics and Kerberos (Enough to Reason), capture observable evidence, and restore the safe baseline.
- **12.2 — Lateral Movement Themes and Defensive Countermeasures:** Configure or simulate Lateral Movement Themes and Defensive Countermeasures, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Build a small AD training segment or use prepared logs, detect suspicious authentication/group changes, and write a containment checklist.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build a small AD training segment or use prepared logs, detect suspicious authentication/group changes, and write a containment checklist.
- Give the user one clear main action and keep all other features secondary.
- Use Active Directory Defense in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated active-directory-detection-lab lab and an artifacts folder; use only systems you own or are authorized to test.
2. Build a small AD training segment or use prepared logs, detect suspicious authentication/group changes, and write a containment checklist.
3. Use Active Directory Defense in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Active Directory Defense.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/attack/chapter-12-active-directory-detection-lab
git commit -m "feat(active-directory-detection-lab): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 12](../roadmaps/ICT_Cybersecurity.md#phase-12) | [CONTINUE TO CYBERSECURITY CHAPTER 13](../roadmaps/ICT_Cybersecurity.md#phase-13)


## Detect

**Shared unit storyline:** Keep one workspace for Detect. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cyber-phase-13-project"></a>
### CYBERSECURITY CHAPTER 13 PROJECT

#### PROJECT: SIEM DETECTION ENGINEERING PACK

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Turn telemetry into reliable detections with low noise and clear response paths.

**Chapter topic:** SOC, SIEM, and Detection Engineering

**Unit storyline:** Continue the **Detect** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build SIEM Detection Engineering Pack as a focused exercise for SIEM and Detection Engineering. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **13.1 — Logs, SIEM Pipelines, and SOC Workflow:** Configure or simulate Logs, SIEM Pipelines, and SOC Workflow, capture observable evidence, and restore the safe baseline.
- **13.2 — Detection Engineering with Sigma and ATT&CK:** Configure or simulate Detection Engineering with Sigma and ATT&CK, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Ingest endpoint/network/auth logs into Wazuh, write and test Sigma detections, tune noise, and link alerts to triage steps.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Ingest endpoint/network/auth logs into Wazuh, write and test Sigma detections, tune noise, and link alerts to triage steps.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from SIEM and Detection Engineering explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Wazuh or Elastic Security.
- A local Linux endpoint.
- Sigma rules.

#### BUILD IT STEP BY STEP

1. Create an isolated siem-detection-engineering-pack lab and an artifacts folder; use only systems you own or are authorized to test.
2. Ingest endpoint/network/auth logs into Wazuh, write and test Sigma detections, tune noise, and link alerts to triage steps.
3. Represent the important states or data structures from SIEM and Detection Engineering explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for SIEM and Detection Engineering.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/detect/chapter-13-siem-detection-engineering-pack
git commit -m "feat(siem-detection-engineering-pack): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 13](../roadmaps/ICT_Cybersecurity.md#phase-13) | [CONTINUE TO CYBERSECURITY CHAPTER 14](../roadmaps/ICT_Cybersecurity.md#phase-14)


<a id="cyber-phase-14-project"></a>
### CYBERSECURITY CHAPTER 14 PROJECT

#### PROJECT: INCIDENT FORENSICS CASE

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Move from alert to containment and evidence-based narrative without destroying artifacts.

**Chapter topic:** Digital Forensics and Incident Response

**Unit storyline:** Continue the **Detect** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Incident Forensics Case as a focused exercise for Digital Forensics and Incident Response. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **14.1 — IR Lifecycle and Triage:** Add an executable IR Lifecycle and Triage procedure with verification and rollback or recovery guidance.
- **14.2 — Forensics Tooling Basics and Safe Malware Triage:** Add an executable Forensics Tooling Basics and Safe Malware Triage procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Investigate prepared disk/log/network evidence, create a timeline, identify root cause and scope, then define containment, eradication, and recovery.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Investigate prepared disk/log/network evidence, create a timeline, identify root cause and scope, then define containment, eradication, and recovery.
- Give the user one clear main action and keep all other features secondary.
- Use Digital Forensics and Incident Response in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated incident-forensics-case lab and an artifacts folder; use only systems you own or are authorized to test.
2. Investigate prepared disk/log/network evidence, create a timeline, identify root cause and scope, then define containment, eradication, and recovery.
3. Use Digital Forensics and Incident Response in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Digital Forensics and Incident Response.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/detect/chapter-14-incident-forensics-case
git commit -m "feat(incident-forensics-case): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 14](../roadmaps/ICT_Cybersecurity.md#phase-14) | [CONTINUE TO CYBERSECURITY CHAPTER 15](../roadmaps/ICT_Cybersecurity.md#phase-15)


## Respond

**Shared unit storyline:** Keep one workspace for Respond. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cyber-phase-15-project"></a>
### CYBERSECURITY CHAPTER 15 PROJECT

#### PROJECT: CLOUD IAM ATTACK-PATH REVIEW

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Secure cloud like an engineer: identity first, exposure second, logging always.

**Chapter topic:** Cloud Security Fundamentals

**Unit storyline:** Continue the **Respond** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Cloud IAM Attack-Path Review as a focused exercise for Cloud Security. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **15.1 — Shared Responsibility and IAM Least Privilege:** Configure or simulate Shared Responsibility and IAM Least Privilege, capture observable evidence, and restore the safe baseline.
- **15.2 — Cloud Networking, Logging, and Common Misconfigs:** Configure or simulate Cloud Networking, Logging, and Common Misconfigs, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Map a local cloud IAM graph, find excessive trust/privilege paths, correct policies, and detect one safe simulated misuse.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Map a local cloud IAM graph, find excessive trust/privilege paths, correct policies, and detect one safe simulated misuse.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated cloud-iam-attack-path-review lab and an artifacts folder; use only systems you own or are authorized to test.
2. Map a local cloud IAM graph, find excessive trust/privilege paths, correct policies, and detect one safe simulated misuse.
3. Use Cloud Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Cloud Security.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/respond/chapter-15-cloud-iam-attack-path-review
git commit -m "feat(cloud-iam-attack-path-review): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 15](../roadmaps/ICT_Cybersecurity.md#phase-15) | [CONTINUE TO CYBERSECURITY CHAPTER 16](../roadmaps/ICT_Cybersecurity.md#phase-16)


<a id="cyber-phase-16-project"></a>
### CYBERSECURITY CHAPTER 16 PROJECT

#### PROJECT: CONTAINER SUPPLY-CHAIN LAB

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Secure the path from commit to runtime: dependencies, images, cluster RBAC, and CI gates.

**Chapter topic:** Containers, Kubernetes, and DevSecOps

**Unit storyline:** Continue the **Respond** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Container Supply-Chain Lab as a focused exercise for Container and DevSecOps Security. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **16.1 — Container Image Risk and Kubernetes Hardening Themes:** Configure or simulate Container Image Risk and Kubernetes Hardening Themes, capture observable evidence, and restore the safe baseline.
- **16.2 — DevSecOps: SAST, SCA, Secrets, and Gates:** Configure or simulate DevSecOps: SAST, SCA, Secrets, and Gates, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Generate an SBOM, scan code/image/manifests, enforce safe container/Kubernetes policy, and observe one harmless runtime anomaly.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Generate an SBOM, scan code/image/manifests, enforce safe container/Kubernetes policy, and observe one harmless runtime anomaly.
- Give the user one clear main action and keep all other features secondary.
- Use Container and DevSecOps Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated container-supply-chain-lab lab and an artifacts folder; use only systems you own or are authorized to test.
2. Generate an SBOM, scan code/image/manifests, enforce safe container/Kubernetes policy, and observe one harmless runtime anomaly.
3. Use Container and DevSecOps Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Container and DevSecOps Security.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/respond/chapter-16-container-supply-chain-lab
git commit -m "feat(container-supply-chain-lab): complete chapter 16 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 16](../roadmaps/ICT_Cybersecurity.md#phase-16) | [CONTINUE TO CYBERSECURITY CHAPTER 17](../roadmaps/ICT_Cybersecurity.md#phase-17)


<a id="cyber-phase-17-project"></a>
### CYBERSECURITY CHAPTER 17 PROJECT

#### PROJECT: STATIC MALWARE TRIAGE

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Triage suspicious binaries safely and extract IOCs for defenders.

**Chapter topic:** Malware Analysis Basics

**Unit storyline:** Continue the **Respond** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Static Malware Triage as a focused exercise for Malware Analysis. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **17.1 — Static Analysis and YARA Thinking:** Apply Static Analysis and YARA Thinking to the controlled example and record the reasoning and result.
- **17.2 — Dynamic Analysis Hygiene:** Apply Dynamic Analysis Hygiene to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Perform static-only analysis of a harmless training binary using hashes, strings, headers, imports, signatures, and a YARA rule.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Perform static-only analysis of a harmless training binary using hashes, strings, headers, imports, signatures, and a YARA rule.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Malware Analysis and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- REMnux or FLARE-VM.
- Static-analysis tools only.
- Use a harmless training sample; do not execute unknown malware.

#### BUILD IT STEP BY STEP

1. Create an isolated static-malware-triage lab and an artifacts folder; use only systems you own or are authorized to test.
2. Perform static-only analysis of a harmless training binary using hashes, strings, headers, imports, signatures, and a YARA rule.
3. Use a metric connected to Malware Analysis and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Malware Analysis.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/respond/chapter-17-static-malware-triage
git commit -m "feat(static-malware-triage): complete chapter 17 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 17](../roadmaps/ICT_Cybersecurity.md#phase-17) | [CONTINUE TO CYBERSECURITY CHAPTER 18](../roadmaps/ICT_Cybersecurity.md#phase-18)


<a id="cyber-phase-18-project"></a>
### CYBERSECURITY CHAPTER 18 PROJECT

#### PROJECT: CONTROL-TO-EVIDENCE AUDIT PACK

#### ARTIFACT TYPE

runbook

#### CHAPTER OUTCOME

Speak the language that funds security: risk, control objectives, and evidence.

**Chapter topic:** Governance, Risk, and Compliance

**Unit storyline:** Continue the **Respond** shared workspace. This chapter adds a self-contained runbook deliverable and one reviewable commit without requiring concepts from later chapters.

Build Control-to-Evidence Audit Pack as a focused exercise for Governance, Risk, and Compliance. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **18.1 — Policies, Standards, and Frameworks (NIST/ISO Literacy):** Add an executable Policies, Standards, and Frameworks (NIST/ISO Literacy) procedure with verification and rollback or recovery guidance.
- **18.2 — Risk Registers, Vendors, and Practical Compliance:** Add an executable Risk Registers, Vendors, and Practical Compliance procedure with verification and rollback or recovery guidance.

#### SPECIFICATION

- Map a fictional organization's risks and controls to a small framework, identify evidence owners/gaps, and create a remediation plan.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Map a fictional organization's risks and controls to a small framework, identify evidence owners/gaps, and create a remediation plan.
- Define one realistic scenario, its boundaries, and the intended reader for the Control-to-Evidence Audit Pack.
- Collect or create the exact inputs needed to apply Governance, Risk, and Compliance; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated control-to-evidence-audit-pack lab and an artifacts folder; use only systems you own or are authorized to test.
2. Map a fictional organization's risks and controls to a small framework, identify evidence owners/gaps, and create a remediation plan.
3. Collect or create the exact inputs needed to apply Governance, Risk, and Compliance; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Governance, Risk, and Compliance.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/respond/chapter-18-control-to-evidence-audit-pack
git commit -m "feat(control-to-evidence-audit-pack): complete chapter 18 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 18](../roadmaps/ICT_Cybersecurity.md#phase-18) | [CONTINUE TO CYBERSECURITY CHAPTER 19](../roadmaps/ICT_Cybersecurity.md#phase-19)


## Hire

**Shared unit storyline:** Keep one workspace for Hire. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="cyber-phase-19-project"></a>
### CYBERSECURITY CHAPTER 19 PROJECT

#### PROJECT: DEFENSIVE SECURITY PORTFOLIO

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Produce hireable artifacts: labs, writeups, detections, and hardened projects with READMEs.

**Chapter topic:** Portfolio and Labs

**Unit storyline:** Continue the **Hire** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build Defensive Security Portfolio as a focused exercise for Security Portfolio. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **19.1 — Home Lab Architecture Worth Showing:** Represent Home Lab Architecture Worth Showing in the design and justify one decision that depends on it.
- **19.2 — Writeups, Bug Bounty Hygiene, and Cert Timing:** Represent Writeups, Bug Bounty Hygiene, and Cert Timing in the design and justify one decision that depends on it.

#### SPECIFICATION

- Package sanitized risk, hardening, detection, investigation, cloud, and container artifacts into a coherent defensive portfolio.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Package sanitized risk, hardening, detection, investigation, cloud, and container artifacts into a coherent defensive portfolio.
- Define one realistic scenario, its boundaries, and the intended reader for the Defensive Security Portfolio.
- Collect or create the exact inputs needed to apply Security Portfolio; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated defensive-security-portfolio lab and an artifacts folder; use only systems you own or are authorized to test.
2. Package sanitized risk, hardening, detection, investigation, cloud, and container artifacts into a coherent defensive portfolio.
3. Collect or create the exact inputs needed to apply Security Portfolio; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Security Portfolio.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/hire/chapter-19-defensive-security-portfolio
git commit -m "feat(defensive-security-portfolio): complete chapter 19 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 19](../roadmaps/ICT_Cybersecurity.md#phase-19) | [CONTINUE TO CYBERSECURITY CHAPTER 20](../roadmaps/ICT_Cybersecurity.md#phase-20)


<a id="cyber-phase-20-project"></a>
### CYBERSECURITY CHAPTER 20 PROJECT

#### PROJECT: TIMED SOC INVESTIGATION

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Explain security end-to-end under time pressure for Security Engineer, SOC, and junior pentester interviews.

**Chapter topic:** Interview Mastery for Cybersecurity Roles

**Unit storyline:** Continue the **Hire** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Build Timed SOC Investigation as a focused exercise for Interviews. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **20.1 — Technical Drills Across Blue, Red, and SecEng:** Practice explaining or applying Technical Drills Across Blue, Red, and SecEng under a timer and record the evidence and correction.
- **20.2 — Security System Design and Behavioral Stories:** Practice explaining or applying Security System Design and Behavioral Stories under a timer and record the evidence and correction.

#### SPECIFICATION

- Investigate a timed alert packet, state severity and hypotheses, gather evidence, choose containment, and communicate next steps.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Investigate a timed alert packet, state severity and hypotheses, gather evidence, choose containment, and communicate next steps.
- Give the user one clear main action and keep all other features secondary.
- Use Interviews in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine.
- Python 3.12 and Wireshark.
- Use deliberately vulnerable practice targets only; never test systems without permission.

#### BUILD IT STEP BY STEP

1. Create an isolated timed-soc-investigation lab and an artifacts folder; use only systems you own or are authorized to test.
2. Investigate a timed alert packet, state severity and hypotheses, gather evidence, choose containment, and communicate next steps.
3. Use Interviews in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Interviews.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

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
git add -- cybersecurity/hire/chapter-20-timed-soc-investigation
git commit -m "feat(timed-soc-investigation): complete chapter 20 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBERSECURITY CHAPTER 20](../roadmaps/ICT_Cybersecurity.md#phase-20) | [RETURN TO THE CYBERSECURITY COURSE](../roadmaps/ICT_Cybersecurity.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="cyber-main-portfolio-project"></a>
## CYBER MAIN PORTFOLIO PROJECT

#### PROJECT: DEFENSIVE SOC LAB FOR A SMALL NONPROFIT

#### DESCRIPTION

An isolated blue-team environment that models a small nonprofit, hardens its systems, centralizes logs, detects safe simulated attacks, investigates an incident, and maps technical controls to risk and compliance needs.

#### WHO THIS IS FOR

- SOC analyst monitoring and investigating alerts
- Security engineer hardening endpoints, network, cloud, and containers
- Nonprofit manager reviewing prioritized risk and response status

#### WHAT USERS CAN DO

- Maintain an asset, identity, risk, and control inventory
- Detect and investigate safe network, endpoint, web, identity, and container simulations
- Preserve evidence and follow a repeatable incident workflow
- Publish sanitized detections and risk summaries without exposing attackable systems

#### FREE AND OPEN-SOURCE TECH STACK

- VirtualBox or KVM/libvirt with isolated virtual networks
- Ubuntu, Windows evaluation VM, and deliberately vulnerable training targets
- Wazuh or Elastic Open Source, Zeek, and Suricata
- Sigma, YARA, osquery, Velociraptor, and Timesketch
- Greenbone Community Edition and OWASP ZAP
- Docker Engine or Podman, kind, Trivy, and Falco
- MITRE ATT&CK Navigator and OWASP Threat Dragon
- All required security tooling is free; testing is limited to the isolated authorized lab

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Risk-Based Security:** Define nonprofit assets, owners, threats, likelihood, impact, risk appetite, and a prioritized treatment register.
2. **Phase 2 - Networking for Security:** Draw the authorized network, capture a baseline, and identify only lab services, trust boundaries, and exposure.
3. **Phase 3 - Host Security:** Harden Linux and Windows baselines, enable useful audit logs, and verify required services still work.
4. **Phase 4 - Cryptography:** Create a small file-encryption and integrity workflow with safe key handling, rotation, and tamper detection.
5. **Phase 5 - Identity and Access Management:** Centralize users and roles, enforce least privilege and MFA where possible, and test joiner/mover/leaver cases.
6. **Phase 6 - Threat Modeling and ATT&CK:** Threat-model the nonprofit portal, map realistic techniques to MITRE ATT&CK, and select preventive/detective controls.
7. **Phase 7 - Web Application Security:** Run OWASP Juice Shop locally, identify selected OWASP issues, apply or describe remediations, and retest safely.
8. **Phase 8 - Network Defenses:** Configure segmentation, firewall rules, Zeek, and Suricata; verify allowed traffic and alert on a safe blocked probe.
9. **Phase 9 - Endpoint Hardening:** Deploy endpoint hardening, osquery/Wazuh telemetry, file-integrity monitoring, and one containment action.
10. **Phase 10 - Vulnerability Management:** Scan only the lab with Greenbone, validate findings, rank by exploitability and business impact, and track remediation.
11. **Phase 11 - Penetration Testing Methodology:** Follow scope, discovery, validation, evidence, cleanup, and reporting for an authorized ZAP-based portal assessment.
12. **Phase 12 - Active Directory Defense:** Build an Active Directory training segment, simulate a safe authentication anomaly, and detect it from Windows events.
13. **Phase 13 - SIEM and Detection Engineering:** Centralize logs, write Sigma detections, tune false positives, test alerts, and link each alert to a triage runbook.
14. **Phase 14 - Digital Forensics and Incident Response:** Investigate a prepared incident with a timeline, volatile/disk/log evidence, containment, eradication, recovery, and lessons.
15. **Phase 15 - Cloud Security:** Model a local cloud IAM attack path, remove excessive permissions, and detect the simulated misuse in audit logs.
16. **Phase 16 - Container and DevSecOps Security:** Scan container code/images/manifests, generate an SBOM, enforce admission-style policy, and detect suspicious runtime behavior.
17. **Phase 17 - Malware Analysis:** Perform static-only triage of a harmless training sample with hashes, strings, metadata, imports, YARA, and safe conclusions.
18. **Phase 18 - Governance, Risk, and Compliance:** Map risks and controls to a small framework, assign evidence owners, identify gaps, and create a realistic remediation plan.
19. **PHASE 19 - Security Portfolio (REQUIRED CAPSTONE-COMPLETION STEP):** Polish sanitized detections, dashboards, timelines, risk tables, hardening code, lab diagrams, and an open-source license.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Run a timed unknown-alert investigation and explain severity, evidence, containment, communication, and next steps aloud.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `defensive-soc-lab` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: risk register, isolated topology, hardened hosts, and cryptographic evidence**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "feat(soc-lab): establish authorized defensive lab baseline"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: identity, threat model, web and network defenses, endpoint telemetry, and vulnerability process**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "feat(soc-lab): implement layered detection and hardening"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: authorized assessment, AD defense, SIEM detections, incident timeline, and cloud controls**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "feat(soc-lab): integrate detection and incident workflows"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: container policy, safe malware triage, governance mapping, and recovery checks**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "test(soc-lab): verify safe security exercises and controls"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: sanitized detections, dashboards, evidence, diagrams, and portfolio documentation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "docs(soc-lab): complete defensive SOC lab release"
git tag -a soc-lab-v1.0.0 -m "First complete soc-lab release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Run all security systems on an isolated host-only VirtualBox/KVM network; never bridge vulnerable targets to the public internet.
2. Use automation to start sensors, SIEM, endpoints, training targets, and safe simulations, then verify log ingestion and alert routing.
3. Take snapshots before exercises and provide one command or documented sequence to reset every target.
4. Bind dashboards to localhost or an authenticated management network and remove default credentials.
5. Export only sanitized ATT&CK maps, Sigma/YARA rules, dashboards, incident timelines, and risk summaries to GitHub Pages for free.
6. Shut down the lab after use, confirm no vulnerable listener is public, and keep raw evidence containing identifiers outside the public repository.

> **MAIN PROJECT NAVIGATION:** [REVIEW CYBER PHASE 19](../roadmaps/ICT_Cybersecurity.md#phase-19) | [REVIEW CYBER PHASE 20](../roadmaps/ICT_Cybersecurity.md#phase-20) | [RETURN TO THE CYBER ROADMAP](../roadmaps/ICT_Cybersecurity.md#phase-index)
