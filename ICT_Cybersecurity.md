# The Zero-to-Hero ICT / Cybersecurity Engineer Roadmap

*Mohammad Bilal's complete, self-paced path from first principles to professional-level cybersecurity work: security mindset, networking, Linux/Windows, cryptography, identity, threat modeling, web appsec, network defenses, hardening, vuln management, pentesting, Active Directory, SOC/SIEM/detection engineering, DFIR, cloud and container security, DevSecOps, malware basics, GRC, portfolio labs, and hiring readiness - told as one continuous chain of discoveries.*

*Resources curated with Composio (web search, YouTube, GitHub) against [OWASP Top 10](https://owasp.org/Top10/), [PortSwigger Web Security Academy](https://portswigger.net/web-security), [MITRE ATT&CK](https://attack.mitre.org/), [HackTricks](https://github.com/HackTricks-wiki/hacktricks), [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings), [juice-shop/juice-shop](https://github.com/juice-shop/juice-shop), [fabacab/awesome-cybersecurity-blueteam](https://github.com/fabacab/awesome-cybersecurity-blueteam), [meirwah/awesome-incident-response](https://github.com/meirwah/awesome-incident-response), [brootware/awesome-cyber-security-university](https://github.com/brootware/awesome-cyber-security-university), and 2026 Security Engineer / SOC / pentest roadmaps.*

**Scope:** 40 concepts · 20 phases · bridge-driven, no week clocks.

```
Foundations → Defend → Attack → Detect → Respond → Hire
```

---

## How to Read This Document

This is not a stack of unrelated notes you can jump around in. It is one long argument, and every section exists because the section before it hit a wall. Each stop opens by explaining **why what you just learned wasn't enough**, and closes by showing you **the crack that the next concept was invented to fill**. Read it in order the first time through - SIEM detections only make sense after you understand logs and attacker TTPs, and cloud IAM only makes sense after you feel the pain of long-lived secrets.

**There is no clock on this document.** No week numbers, no day-by-day plan, no "finish by." Cybersecurity skill does not compress into a fixed number of days, and pretending otherwise is how people memorize tool names instead of building judgment. Move at the pace your own understanding requires. The only valid unit of progress here is: *can I now explain why the previous concept wasn't enough, and how this one fixes it?*

Every concept in this roadmap answers the same set of questions, because that set of questions *is* how security knowledge actually accumulates:

- What is it, in plain language?
- Why does it exist - what problem forced someone to invent it?
- What did people do before it existed, and what broke?
- How does it solve that problem, mechanically, underneath the hood?
- What does it cost? (Every control trades something for something.)
- Where does its own limitation show up - and what does *that* limitation force us to invent next?

That last question is the engine of the whole roadmap. Nothing here is "just a topic to cover." Every topic is a *reaction* to the topic before it.

### Three Crafts, One Spine

This document covers **Security Engineer**, **SOC / Blue Team**, and **Penetration Tester / Red Team** depth, because they share a spine (networks, systems, crypto, identity, threat models) and then diverge:

| Role | Primary question | Primary craft |
| --- | --- | --- |
| **Security Engineer** | How do we *design and build* systems that stay safe under attack? | Hardening, IAM, AppSec, cloud/K8s controls, DevSecOps |
| **SOC / Blue Team** | How do we *detect and respond* when something goes wrong? | Logs, SIEM, Sigma, IR, forensics, ATT&CK mapping |
| **Pentester / Red Team** | How would a skilled adversary *break* this, legally and reportably? | Recon, exploit chains, AD, web bugs, reporting |

Phases 1-10 build the shared foundation through vuln management. Phases 11-12 deepen offensive craft. Phases 13-14 deepen detection and response. Phases 15-18 deepen cloud, containers, malware, and GRC. Phases 19-20 are portfolio and hiring. If you only want SOC, do not skip Phases 4-8 - analysts who cannot think in protocols and auth fail on real investigations. If you want pentesting, still finish detection phases - the best attackers know how defenders see them.

### Ethics and Scope (non-negotiable)

Practice only on systems you own or have **written authorization** to test (labs, CTFs, bug bounty programs in scope). Unauthorized access is illegal. Every offensive technique in this document exists so you can defend better and report better - not so you can harm.

### The Rhythm Every Concept Follows

Those questions are answered in the same order every single time. Once you have read one section you know the shape of all of them:

| Element | What it gives you |
| --- | --- |
| **Why This Concept Exists** | The previous concept's limitation, stated plainly |
| **Visual Learning** | Videos, interactive tools, docs, GitHub, practice - placed *here* |
| **Detailed Explanation** | The mechanics, precisely, in prose |
| **The Idea That Fixed It** | The compact insight that made the concept stick |
| **Internal Working, Step by Step** | A prose and diagram "animation" of what happens underneath |
| **Real-World Analogy** | Something you can picture without a screen |
| **Complexity / Trade-offs** | What improved, what it cost, and why |
| **Code Implementation** | A minimal, working version you can run |
| **Interview Perspective** | What the concept looks like when it is tested |
| **Practice** | Problems graded easy to hard |
| **The Bridge** | The exact limitation that makes the next concept necessary |

**Diagram conventions.** Diagrams are plain ASCII inside code fences. `|` and `v` mean "then this happens", `+--` joins related paths, `-->` and `->` mean request or traffic flow, `X` marks a failure or compromise point, and boxes drawn with `+---+` are hosts, networks, or controls. Time usually runs downward.

---

## The Whole-Journey Map

```
 PHASE 1                 PHASE 2               PHASE 3                PHASE 4
 SECURITY MINDSET        NETWORKING FOR        LINUX & WINDOWS        CRYPTOGRAPHY
 & CIA TRIAD             SECURITY              FOR SECURITY
    |                       |                      |                      |
    v                       v                      v                      v
 Risk, CIA,                 OSI/TCP-IP,            CLI, permissions,     Hash, symmetric,
 AAA, ethics                ports, DNS,            processes, logs        asymmetric, TLS
                            packets

 PHASE 5                 PHASE 6               PHASE 7                PHASE 8
 IDENTITY & AUTH         THREAT MODELING       WEB APP SECURITY       NETWORK DEFENSES
    |                    & ATT&CK              (OWASP)                & FIREWALLS
    v                       |                      |                      |
 Sessions, MFA,             v                      v                      v
 OAuth, RBAC             Kill chain,           Injection, XSS,        Segmentation,
                         ATT&CK map            SSRF, CSRF,            VPN, IDS/IPS
                                               access control

 PHASE 9                 PHASE 10              PHASE 11               PHASE 12
 HARDENING &             VULN MGMT &           PENTEST                ACTIVE DIRECTORY
 ENDPOINTS               SCANNING              METHODOLOGY            & WINDOWS ATTACKS
    |                       |                      |                      |
    v                       v                      v                      v
 CIS baselines,          CVSS, scanners,       Recon → exploit →      Kerberos, lateral
 EDR intuition           patch priorities      report                 movement, priv esc

 PHASE 13                PHASE 14              PHASE 15               PHASE 16
 SOC / SIEM /            DFIR & IR             CLOUD SECURITY         CONTAINERS,
 DETECTION ENG.                                                    K8S & DEVSECOPS
    |                       |                      |                      |
    v                       v                      v                      v
 Logs, Sigma,            Triage, memory,       IAM least priv,        Images, RBAC,
 ATT&CK detections       disk, malware triage  shared responsibility  CI security gates

 PHASE 17                PHASE 18              PHASE 19               PHASE 20
 MALWARE BASICS          GRC & RISK            PORTFOLIO &            INTERVIEWS
                         MANAGEMENT            LABS                       |
    |                       |                      |                      v
    v                       v                      v                 Security+, CySA+,
 Static/dynamic,         Policies, NIST,       Home lab, writeups,   PNPT/OSCP paths,
 YARA intuition          risk registers        detections shipped    system design stories
```

---

## Phase Index

| # | Phase | Goal | You'll be ready to move on when you can... |
| --- | --- | --- | --- |
| 01 | [Security Mindset](#phase-1---security-mindset-risk-before-tools) | Think in risk and CIA | Explain confidentiality vs integrity vs availability with examples |
| 02 | [Networking for Security](#phase-2---networking-for-security) | Read traffic like a defender | Map a packet path and name common ports |
| 03 | [Linux & Windows](#phase-3---linux-and-windows-for-security) | Operate systems under pressure | Navigate CLI, permissions, and logs on both OS families |
| 04 | [Cryptography](#phase-4---cryptography-for-defenders-and-builders) | Use crypto correctly | Contrast hash vs encrypt vs sign, and explain TLS at a high level |
| 05 | [Identity & Auth](#phase-5---identity-and-access-management) | Control who can do what | Design MFA + least privilege for a simple app |
| 06 | [Threat Modeling](#phase-6---threat-modeling-and-mitre-attck) | Anticipate abuse | Draw a STRIDE/ATT&CK-backed model for a web app |
| 07 | [Web App Security](#phase-7---web-application-security-owasp) | Find and fix web bugs | Exploit and remediate SQLi/XSS in a lab legally |
| 08 | [Network Defenses](#phase-8---network-defenses) | Segment and filter | Propose firewall rules and VPN placement |
| 09 | [Hardening](#phase-9---hardening-and-endpoint-security) | Shrink attack surface | Apply a CIS-style baseline to a VM |
| 10 | [Vuln Management](#phase-10---vulnerability-management) | Prioritize risk | Rank findings by exploitability and business impact |
| 11 | [Pentest Methodology](#phase-11---penetration-testing-methodology) | Attack with process | Run a scoped lab engagement and write a report outline |
| 12 | [Active Directory](#phase-12---active-directory-attacks-and-defenses) | Break and defend AD | Explain Kerberos auth and a lateral movement path |
| 13 | [SOC & Detection](#phase-13---soc-siem-and-detection-engineering) | Detect with evidence | Write a Sigma-style rule mapped to ATT&CK |
| 14 | [DFIR](#phase-14---digital-forensics-and-incident-response) | Respond and investigate | Triage an alert into containment steps |
| 15 | [Cloud Security](#phase-15---cloud-security-fundamentals) | Secure shared clouds | Harden IAM and logging on AWS/Azure-style accounts |
| 16 | [Containers & DevSecOps](#phase-16---containers-kubernetes-and-devsecops) | Secure the pipeline | Spot risky Docker/K8s defaults and add a CI scan |
| 17 | [Malware Basics](#phase-17---malware-analysis-basics) | Analyze safely | Static-scan a sample in an isolated lab |
| 18 | [GRC & Risk](#phase-18---governance-risk-and-compliance) | Speak risk language | Map controls to a simple NIST/ISO-style framework |
| 19 | [Portfolio](#phase-19---portfolio-and-labs) | Prove skill with artifacts | Publish labs, writeups, and detections |
| 20 | [Interviews](#phase-20---interview-mastery-for-cybersecurity-roles) | Get hired | Tell security stories end-to-end under pressure |

### Anchor Resources (bookmark these)

- OWASP: [Top 10:2021](https://owasp.org/Top10/) · [Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- Labs: [PortSwigger Web Security Academy](https://portswigger.net/web-security) · [TryHackMe](https://tryhackme.com/) · [Hack The Box](https://www.hackthebox.com/) · [OverTheWire](https://overthewire.org/wargames/) · [picoCTF](https://picoctf.org/)
- Frameworks: [MITRE ATT&CK](https://attack.mitre.org/) · [SigmaHQ/sigma](https://github.com/SigmaHQ/sigma) · [redcanaryco/atomic-red-team](https://github.com/redcanaryco/atomic-red-team)
- Offensive refs: [HackTricks-wiki/hacktricks](https://github.com/HackTricks-wiki/hacktricks) · [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) · [danielmiessler/SecLists](https://github.com/danielmiessler/SecLists)
- Vulnerable apps: [juice-shop/juice-shop](https://github.com/juice-shop/juice-shop) · DVWA / WebGoat (local only)
- Blue team: [fabacab/awesome-cybersecurity-blueteam](https://github.com/fabacab/awesome-cybersecurity-blueteam) · [meirwah/awesome-incident-response](https://github.com/meirwah/awesome-incident-response) · [sottlmarek/DevSecOps](https://github.com/sottlmarek/DevSecOps)
- Learning lists: [brootware/awesome-cyber-security-university](https://github.com/brootware/awesome-cyber-security-university) · [0xsyr0/Awesome-Cybersecurity-Handbooks](https://github.com/0xsyr0/Awesome-Cybersecurity-Handbooks) · [lissy93/personal-security-checklist](https://github.com/lissy93/personal-security-checklist)
- 2026 paths: [Vibe Engines Security Engineer Roadmap](https://vibeengines.com/roadmap/security-engineer) · [HADESS Learning Path](https://hadess.io/cybersecurity-learning-path/)
- Channels: [John Hammond](https://www.youtube.com/@_JohnHammond) · [NetworkChuck](https://www.youtube.com/@NetworkChuck) · [LiveOverflow](https://www.youtube.com/@LiveOverflow) · [IppSec](https://www.youtube.com/@ippsec) · [Professor Messer](https://www.youtube.com/@professormesser) · [HackerSploit](https://www.youtube.com/@HackerSploit)
- Courses: [Harvard CS50 Intro to Cybersecurity (freeCodeCamp)](https://www.youtube.com/watch?v=9HOpanT0GRs) · [Google Cybersecurity Certificate overview](https://www.youtube.com/watch?v=_DVVNOGYtmU) · Professor Messer Security+ playlist

---

<a id="phase-1"></a>

# PHASE 1 - Security Mindset: Risk Before Tools

**Track:** Foundations

**GOAL:** Stop treating security as a list of tools. Start thinking in assets, threats, vulnerabilities, and controls.

**PREREQUISITES:** Curiosity and willingness to practice only in authorized labs.

## 1.1 CIA Triad, AAA, and What "Secure" Means

**WHY THIS EXISTS:** Without shared language, teams argue past each other. **Confidentiality**, **Integrity**, and **Availability** (CIA), plus **Authentication**, **Authorization**, and **Accounting** (AAA), are the vocabulary every control maps to.

**THE PROBLEM BEFORE THIS EXISTED:** People installed random "security products" with no goal. Availability got sacrificed for secrecy. Or secrecy was perfect and the business could not operate.

**VISUAL LEARNING**

- [Cybersecurity for Beginners | Google Cybersecurity Certificate](https://www.youtube.com/watch?v=_DVVNOGYtmU)
- [Harvard CS50’s Intro to Cybersecurity - Full University Course](https://www.youtube.com/watch?v=9HOpanT0GRs)
- [How I Would Learn Cyber Security if I Could Start Over (Cyber with Ben)](https://www.youtube.com/watch?v=b12JrM-6DBY)
- [HADESS Cybersecurity Learning Path 2026](https://hadess.io/cybersecurity-learning-path/)
- [lissy93/personal-security-checklist](https://github.com/lissy93/personal-security-checklist)
- Write CIA impacts for three news breach stories

**DETAILED EXPLANATION**

Confidentiality: only the right people see the data. Integrity: data and systems are not silently altered. Availability: systems work when needed. Authentication proves identity. Authorization decides permission. Accounting (audit) records who did what. Risk = likelihood × impact on assets. Controls reduce risk; they never erase it. Defense in depth stacks independent controls so one failure is not catastrophic.

**THE IDEA THAT FIXED IT:** Define the asset and the failure mode first. Then pick controls that reduce that specific risk.

**INTERNAL WORKING, STEP BY STEP**

```
 Asset (payroll DB)
   |
   v
 Threats (theft, ransomware, insider)
   |
   v
 Vulnerabilities (weak auth, unpatched, overshare)
   |
   v
 Controls (MFA, backups, least privilege, encryption)
   |
   v
 Residual risk (accepted / transferred / monitored)
```

**REAL-WORLD ANALOGY**

A bank vault (confidentiality + integrity) with fire exits and backup branches (availability). Locks without exits are unsafe. Exits without locks are unsafe.

**COMPLEXITY / TRADE-OFFS**

| Choice | Buys | Costs |
| --- | --- | --- |
| Max secrecy | Fewer leaks | Friction, shadow IT |
| Max availability | Uptime | More exposure surface |
| Many stacked controls | Resilience | Complexity, false sense of safety |

**CODE IMPLEMENTATION**

```python
cia = {"C": "only authorized eyes", "I": "no silent tampering", "A": "usable when needed"}
aaa = {"AuthN": "who are you?", "AuthZ": "what may you do?", "Acct": "what did you do?"}
print(cia)
print(aaa)
```

**INTERVIEW PERSPECTIVE:** Define CIA with one business example each. What is residual risk? Difference between AuthN and AuthZ?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Map password hashing to C/I/A (which does it primarily serve?) |
| Medium | For a hospital EHR, list one control per CIA letter |
| Hard | Argue when availability should outrank confidentiality (with ethics) |

**THE BRIDGE:** CIA is a scoreboard, not a network map. Packets ignore your vocabulary until you understand how machines talk - networking for security.

---

## 1.2 Ethics, Scope, and the Attacker Mindset Without Becoming the Attacker

**WHY THIS EXISTS:** Security work requires thinking like an adversary. Without ethics and legal scope, that skill becomes crime. Authorized practice (labs, CTFs, contracts, bounty scope) is the only place offensive techniques belong.

**THE PROBLEM BEFORE THIS EXISTED:** Script kiddie culture: run exploits "to learn" on random IPs. Careers and freedom ended. Defenders also failed because they never studied real attacker paths.

**VISUAL LEARNING**

- [Everything you NEED to know as Cybersecurity Beginner (Tech with Jono)](https://www.youtube.com/watch?v=X-O1-l0gP5Q)
- [How to Get Into Cybersecurity in 2026 (InfoSec Job Board)](https://www.infosecjobboard.com/blog/how-to-get-into-cybersecurity-2026)
- [Infosec Learning Roadmap (Coursera)](https://www.coursera.org/resources/infosec-learning-roadmap)
- Create a personal rule: "no scan outside lab VMs / explicit scope"

**DETAILED EXPLANATION**

Rules of engagement (ROE) define what is allowed, when, and how findings are reported. Responsible disclosure and bug bounty programs formalize permission. The attacker mindset means asking: "What can go wrong if this assumption fails?" - then building controls and detections. Curiosity is good. Unauthorized access is not.

**THE IDEA THAT FIXED IT:** Same skills, different authorization boundary. Permission is the product feature that makes security work legal.

**INTERNAL WORKING, STEP BY STEP**

```
 Curiosity --> Technique --> Authorization check
                              |-- YES --> lab / contract / bounty
                              |-- NO  --> STOP (illegal)
```

**REAL-WORLD ANALOGY**

A locksmith who practices on lock boards and customer doors with a work order - never random houses "for research."

**COMPLEXITY / TRADE-OFFS**

| Path | Buys | Costs |
| --- | --- | --- |
| Only theory | Safety | Weak intuition |
| Authorized labs | Real skill | Time, sometimes money |
| Unauthorized testing | Nothing useful | Legal risk |

**CODE IMPLEMENTATION**

```python
ALLOWED = {"tryhackme", "htb", "local-lab", "in-scope-bounty"}
target = "local-lab"
assert target in ALLOWED, "Refuse: not authorized"
print("proceed:", target)
```

**INTERVIEW PERSPECTIVE:** How do you decide if a test is legal? What belongs in a rules-of-engagement doc?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | List five legal practice platforms |
| Medium | Draft a 5-bullet ROE for testing your own home lab |
| Hard | Explain responsible disclosure steps for a found bug on a public site |

**THE BRIDGE:** Ethics without packets is still abstract. Networks are the battlefield every control and exploit travels on.

---

> **Phase 1 complete?** [Build the aligned project](./Projects.md#L3998) · [Continue to Phase 2](#phase-2---networking-for-security)

<a id="phase-2"></a>

# PHASE 2 - Networking for Security

**Track:** Foundations

**GOAL:** Read network behavior well enough to spot abuse, place controls, and follow investigations.

**PREREQUISITES:** Phase 1 mindset.

## 2.1 OSI / TCP-IP, Ports, and Packet Paths

**WHY THIS EXISTS:** Almost every intrusion moves over a network. If you cannot explain what a port, IP, DNS query, or TCP handshake is, firewalls, IDS, and lateral movement stay magic words.

**THE PROBLEM BEFORE THIS EXISTED:** People memorized "port 443 is HTTPS" without understanding sessions, DNS, or why NAT and proxies change what logs show.

**VISUAL LEARNING**

- [Computer Networking Course - Network Engineering (freeCodeCamp)](https://www.youtube.com/watch?v=qiQR5rTSshw)
- [Every Networking Concept Explained In 20 Minutes (TechWorld with Nana)](https://www.youtube.com/watch?v=xj_GjnD4uyI)
- [Computer Networking Full Course (Kunal Kushwaha)](https://www.youtube.com/watch?v=IPvYjXCsTg8)
- NetworkChuck networking / cybersecurity playlists
- Companion: this repo's [`Networks.md`](./Networks.md)
- Capture traffic on a lab VM with Wireshark and identify DNS + TLS

**DETAILED EXPLANATION**

TCP/IP layers: link, internet (IP), transport (TCP/UDP), application. TCP is reliable and connection-oriented; UDP is lightweight. Well-known ports: 22 SSH, 53 DNS, 80/443 HTTP(S), 3389 RDP, 445 SMB. Three-way handshake (SYN, SYN-ACK, ACK). DNS maps names to IPs and is a common abuse/exfil channel. Defenders care about who talks to whom, on which port, how often, and whether that is normal for the asset.

**THE IDEA THAT FIXED IT:** Security visibility is mostly "who connected to what, carrying what." Learn the plumbing first.

**INTERNAL WORKING, STEP BY STEP**

```
 Client --> DNS (53) --> resolve api.example
 Client --> TCP handshake --> :443
 Client --> TLS --> HTTP request
 Firewall / IDS sit on the path and decide allow / alert / drop
```

**REAL-WORLD ANALOGY**

A postal system: address (IP), apartment number (port), certified mail (TCP), postcard (UDP), phone book (DNS).

**COMPLEXITY / TRADE-OFFS**

| Protocol | Buys | Costs |
| --- | --- | --- |
| TCP | Reliability | Overhead, state |
| UDP | Speed | No delivery guarantee |
| Flat open network | Simplicity | Attacker freedom after one foothold |

**CODE IMPLEMENTATION**

```python
PORTS = {22: "ssh", 53: "dns", 80: "http", 443: "https", 3389: "rdp", 445: "smb"}
for p, name in PORTS.items():
    print(f"{p:>5} -> {name}")
```

**INTERVIEW PERSPECTIVE:** Explain TCP handshake. Why is DNS critical for both users and attackers? What does a firewall ACL actually match?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | List 8 common ports and services |
| Medium | Draw packet flow from laptop to HTTPS site through home router NAT |
| Hard | Explain how an attacker uses DNS tunneling at a high level |

**THE BRIDGE:** Networks move bytes. Attackers and admins both live on operating systems that produce those bytes - Linux and Windows fluency is next.

---

## 2.2 Sniffing, Segmentation, and Why Flat Networks Fail

**WHY THIS EXISTS:** Once you can read packets, the next wall appears: one compromised host can reach everything. Segmentation, VLANs, and least-network-privilege limit blast radius. Packet capture teaches what "normal" looks like so anomalies stand out.

**THE PROBLEM BEFORE THIS EXISTED:** Flat corporate LANs meant ransomware walked sideways in minutes. No capture skills meant "the SIEM said alert" with no ability to validate.

**VISUAL LEARNING**

- Wireshark sample captures + display filters
- [Best Hands-On Cybersecurity Labs 2026](https://thecybersecuritytrail.com/guide/best-hands-on-cybersecurity-labs-practice-platforms-in-2026/)
- TryHackMe networking rooms (authorized lab)

**DETAILED EXPLANATION**

pcap analysis uses filters (e.g. `dns`, `tcp.port == 443`). Segmentation separates trust zones: user, server, DMZ, management. East-west traffic needs controls, not only north-south edge firewalls. Zero Trust ideas extend this: authenticate and authorize every session, assume breach.

**THE IDEA THAT FIXED IT:** Assume a host will fall. Design so its neighbors are not free candy.

**INTERNAL WORKING, STEP BY STEP**

```
 [Users] --fw--> [App tier] --fw--> [DB]
     |                 |
     X lateral?       allow only 5432 from app SG
 Flat LAN: any --> any (X bad)
```

**REAL-WORLD ANALOGY**

Fire doors and compartments on a ship. One flooded room should not sink the vessel.

**COMPLEXITY / TRADE-OFFS**

| Design | Trade-off |
| --- | --- |
| Heavy segmentation | Safer vs operational pain |
| Capture everywhere | Visibility vs cost/privacy |
| Allow-lists | Strong vs brittle change mgmt |

**CODE IMPLEMENTATION**

```python
# toy ACL evaluator
acl = [("10.0.1.0/24", "10.0.2.5", 5432, "allow")]
src, dst, port = "10.0.1.9", "10.0.2.5", 5432
print("allow" if any(True for _ in acl if dst == "10.0.2.5" and port == 5432) else "deny")
```

**INTERVIEW PERSPECTIVE:** What is east-west traffic? Why DMZ? When is packet capture the wrong first tool?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Define VLAN in one sentence |
| Medium | Design 3 zones for a small company web app |
| Hard | Argue Zero Trust vs classic perimeter for a remote workforce |

**THE BRIDGE:** Zone diagrams are useless if you cannot log into the boxes and see processes, users, and files - OS skill next.

---

> **Phase 2 complete?** [Build the aligned project](./Projects.md#L4019) · [Continue to Phase 3](#phase-3---linux-and-windows-for-security)

<a id="phase-3"></a>

# PHASE 3 - Linux and Windows for Security

**Track:** Foundations

**GOAL:** Be dangerous (productively) on both major OS families: navigate, inspect, harden basics, read logs.

**PREREQUISITES:** Phase 2 networking intuition.

## 3.1 Linux CLI, Permissions, Processes, and Logs

**WHY THIS EXISTS:** Servers, containers, security tools, and many lab boxes are Linux. Privilege models (`chmod`, sudo, SUID), process inspection, and log paths are daily blue and red team work.

**THE PROBLEM BEFORE THIS EXISTED:** GUI-only learners froze in SSH sessions. Attackers who understood `bash` history and cron owned boxes that "looked patched."

**VISUAL LEARNING**

- [Introduction to Linux - Full Course for Beginners (freeCodeCamp)](https://www.youtube.com/watch?v=sWbUDq4S6Y8)
- [The 50 Most Popular Linux & Terminal Commands (freeCodeCamp)](https://www.youtube.com/watch?v=ZtqBQ68cfJc)
- [Introduction to Linux & Terminal Commands (Kunal Kushwaha)](https://www.youtube.com/watch?v=iwolPf6kN-k)
- [OverTheWire Bandit](https://overthewire.org/wargames/bandit/) - free terminal fundamentals
- [brootware/awesome-cyber-security-university](https://github.com/brootware/awesome-cyber-security-university)

**DETAILED EXPLANATION**

Users and groups; file modes `rwx`; sticky/SUID/SGID pitfalls; `ps`, `ss`/`netstat`, `journalctl`/`/var/log`; package managers; systemd services. Least privilege on accounts beats running everything as root. Bash scripting automates triage.

**THE IDEA THAT FIXED IT:** The shell is a microscope for the machine. Learn to look before you install another scanner.

**INTERNAL WORKING, STEP BY STEP**

```
 login --> shell
 inspect: whoami, id, ps, ss -tulpn
 files: ls -la, find, grep
 logs: journalctl -u ssh /var/log/auth.log
 privilege: sudo -l  (misconfig = path to root)
```

**REAL-WORLD ANALOGY**

A workshop: knowing which drawer holds which tool beats owning a bigger toolbox you cannot open.

**COMPLEXITY / TRADE-OFFS**

| Habit | Buys | Costs |
| --- | --- | --- |
| Root for everything | Speed | Total compromise on mistake |
| Scripting triage | Repeatability | Need review (dangerous scripts) |

**CODE IMPLEMENTATION**

```python
import os, stat
mode = 0o644
print(oct(mode), "owner rw, group r, other r")
print("SUID bit set?" , bool(mode & stat.S_ISUID))
```

**INTERVIEW PERSPECTIVE:** Explain Linux permissions numerically. What is SUID risk? Where do you look for failed SSH logins?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Complete Bandit levels 0-10 |
| Medium | Write a bash one-liner to list listening ports |
| Hard | Find and explain a deliberate SUID binary in a lab VM |

**THE BRIDGE:** Linux is half the estate. Enterprise identity and many endpoints are Windows - same depth required there.

---

## 3.2 Windows Internals Enough to Investigate

**WHY THIS EXISTS:** Endpoints, AD clients, and much malware live on Windows. Event logs, services, registry awareness, PowerShell, and privilege models are required for both IR and AD attacks later.

**THE PROBLEM BEFORE THIS EXISTED:** Analysts who only knew Linux could not read Event Viewer or understand token privileges. Pentests stalled at the first Windows host.

**VISUAL LEARNING**

- Professor Messer / NetworkChuck Windows admin & Security+ OS topics
- Microsoft Learn: Windows security baselines (skim concepts)
- TryHackMe Windows Fundamentals rooms

**DETAILED EXPLANATION**

NTFS ACLs, local vs domain accounts, services (SCM), Event Viewer channels (Security, System, PowerShell), UAC, Scheduled Tasks. PowerShell is both admin glue and attacker living-off-the-land. Sysinternals (Process Explorer, Autoruns) for investigations.

**THE IDEA THAT FIXED IT:** Treat Windows as a first-class citizen, not an afterthought GUI.

**INTERNAL WORKING, STEP BY STEP**

```
 User logon --> token + groups
 Process create --> Security log events
 Persistence --> Run keys / tasks / services
 IR: timeline events + process tree
```

**REAL-WORLD ANALOGY**

A city hall with badge readers (tokens), CCTV (event logs), and maintenance tunnels (LOLBins) - you must know the building plan.

**COMPLEXITY / TRADE-OFFS**

| Tooling | Trade-off |
| --- | --- |
| Heavy PowerShell logging | Detectability vs noise/storage |
| Local admin everywhere | Convenience vs ransomware paradise |

**CODE IMPLEMENTATION**

```python
# conceptual mapping only
windows_logs = {
    "Security": ["logon", "logoff", "privilege use"],
    "PowerShell": ["script block logging"],
    "Sysmon": ["process create", "network connect"],  # if deployed
}
print(windows_logs["Security"])
```

**INTERVIEW PERSPECTIVE:** What is a Windows access token? Why is local admin so dangerous? Name three persistence locations.

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Locate Security log and filter failed logons in a lab VM |
| Medium | Explain UAC bypass concept at interview level (no exploit steps) |
| Hard | Build a tiny lab: enable PowerShell logging and generate a known event |

**THE BRIDGE:** You can operate systems, but secrets still travel and rest as data - cryptography decides whether stolen bytes are useful.

---

> **Phase 3 complete?** [Build the aligned project](./Projects.md#L4040) · [Continue to Phase 4](#phase-4---cryptography-for-defenders-and-builders)

<a id="phase-4"></a>

# PHASE 4 - Cryptography for Defenders and Builders

**Track:** Foundations

**GOAL:** Use cryptography correctly: know what each primitive is for, and never roll your own.

**PREREQUISITES:** Phase 3 OS comfort.

## 4.1 Hashing, Symmetric, Asymmetric, and Signatures

**WHY THIS EXISTS:** Security controls constantly claim "we encrypt" or "we hash passwords." Mixing those up creates fatal designs (encrypted passwords that can be decrypted by anyone with the key, or "encrypted" tokens that are only encoded).

**THE PROBLEM BEFORE THIS EXISTED:** Base64 called encryption. MD5 for passwords. Homegrown ciphers. TLS "because the padlock icon."

**VISUAL LEARNING**

- [Cryptography for Developers](https://cryptography-for-devs.github.io/)
- [nakov/Practical-Cryptography-for-Developers-Book](https://github.com/nakov/Practical-Cryptography-for-Developers-Book)
- [Learn Cryptography in a Single Post (PyShine)](https://pyshine.com/Learn-Cryptography-in-One-Post-Complete-Tutorial-Symmetric-Asymmetric-Hashing-TLS-Quick-Start/)
- LiveOverflow crypto / encoding vs encryption videos

**DETAILED EXPLANATION**

Hash: one-way fingerprint (integrity, password storage with slow KDF like bcrypt/Argon2 + salt). Symmetric (AES-GCM): same key encrypt/decrypt, fast for bulk. Asymmetric (RSA/ECC): public encrypt / private decrypt or private sign / public verify - solves key distribution. Signatures prove origin + integrity. Encoding (Base64) is not encryption. Prefer vetted libraries (`cryptography` in Python).

**THE IDEA THAT FIXED IT:** Pick the primitive that matches the security goal. Never invent algorithms.

**INTERNAL WORKING, STEP BY STEP**

```
 Goal: hide data in transit/rest  -> authenticated encryption (AES-GCM)
 Goal: verify file not changed     -> hash (+ signature if origin matters)
 Goal: store passwords             -> slow salted KDF (Argon2/bcrypt)
 Goal: distribute secrets at scale -> asymmetric + TLS protocols
```

**REAL-WORLD ANALOGY**

A wax seal (signature) proves who closed the letter. A locked box (encryption) hides contents. A shredder-and-fingerprint (hash) lets you check sameness without reconstructing the letter.

**COMPLEXITY / TRADE-OFFS**

| Mistake | Why it hurts |
| --- | --- |
| Fast hash for passwords | GPU cracking |
| ECB mode | Pattern leaks |
| Custom crypto | Silent catastrophic failure |

**CODE IMPLEMENTATION**

```python
import hashlib, secrets
password = b"correct-horse"
salt = secrets.token_bytes(16)
digest = hashlib.pbkdf2_hmac("sha256", password, salt, 200_000)
print(salt.hex(), digest.hex()[:32], "...")
```

**INTERVIEW PERSPECTIVE:** Hash vs MAC vs signature? Why salt passwords? Why AES-GCM over naive AES?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Classify: Base64, SHA-256, AES-GCM, RSA verify |
| Medium | Implement salted password verify with pbkdf2 (as above) |
| Hard | Explain forward secrecy intuition for TLS 1.3 |

**THE BRIDGE:** Crypto primitives need a protocol to protect real users on the wire - TLS - and identity systems that decide who holds which keys and sessions.

---

## 4.2 TLS, Certificates, and Trust Chains

**WHY THIS EXISTS:** Most modern services speak TLS. Misconfigured certificates, expired trust, or HTTP downgrades defeat encryption. Understanding handshake goals (confidentiality, integrity, server auth) unlocks HTTPS debugging and MITM awareness.

**THE PROBLEM BEFORE THIS EXISTED:** Teams shipped HTTP "internally" forever. Users clicked through cert warnings. Private CAs with no inventory. Attackers on local networks intercepted sessions.

**VISUAL LEARNING**

- Oracle/docs style TLS overview articles + browser cert viewer practice
- BadSSL.com (in browser) to see failure modes
- Inspect certificate chain for a public site (browser or `openssl s_client`)

**DETAILED EXPLANATION**

TLS 1.3: agree keys, authenticate server via certificate chain to a trusted CA, then encrypt application data. Certificates bind public keys to identities. Pinning and mTLS are advanced patterns. HSTS reduces downgrade. Certificate transparency helps detect mis-issuance.

**THE IDEA THAT FIXED IT:** Encrypt the channel, authenticate the endpoint, rotate and monitor certificates.

**INTERNAL WORKING, STEP BY STEP**

```
 ClientHello -> ServerHello + cert
 verify chain to trust store
 derive session keys
 Application Data (encrypted)
 Wireshark shows SNI/certs meta; payloads ciphertext
```

**REAL-WORLD ANALOGY**

Showing a passport (certificate) at the border (client) issued by a government you trust (CA). Fake passport without trusted issuer fails.

**COMPLEXITY / TRADE-OFFS**

| Choice | Trade-off |
| --- | --- |
| Public CA | Easy trust vs dependency |
| Private CA | Control vs operational burden |
| mTLS | Strong identity vs client cert ops |

**CODE IMPLEMENTATION**

```python
# conceptual only - do not parse PEM here
print("TLS goals: confidentiality + integrity + server authentication")
print("Broken if: HTTP, expired cert, wrong hostname, untrusted CA")
```

**INTERVIEW PERSPECTIVE:** What does a browser verify in a cert? What is a MITM with a rogue CA? Why HSTS?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Screenshot and label a certificate chain for example.com |
| Medium | Explain difference between encryption in transit vs at rest |
| Hard | Design cert rotation for microservices with brief downtime budget |

**THE BRIDGE:** TLS protects pipes. Identity systems decide who gets a session after the pipe is safe - authentication and authorization next.

---

> **Phase 4 complete?** [Build the aligned project](./Projects.md#L4061) · [Continue to Phase 5](#phase-5---identity-and-access-management)

<a id="phase-5"></a>

# PHASE 5 - Identity and Access Management

**Track:** Core Security

**GOAL:** Design and critique how systems decide who someone is and what they may do.

**PREREQUISITES:** Phase 4 crypto literacy.

## 5.1 Passwords, Sessions, Cookies, MFA, and Tokens

**WHY THIS EXISTS:** Most breaches still start with identity failures: stolen passwords, session fixation, missing MFA, or tokens that never expire. AppSec and cloud security both collapse to IAM mistakes.

**THE PROBLEM BEFORE THIS EXISTED:** Shared passwords in spreadsheets. Infinite session lifetimes. MFA only for "important" admins. JWTs treated as magical unforgeable truth without verifying signatures or audience.

**VISUAL LEARNING**

- OWASP Authentication / Session Management Cheat Sheets
- NetworkChuck MFA / password manager explainers
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

**DETAILED EXPLANATION**

Store passwords with slow salted KDFs. Prefer passkeys/WebAuthn where possible. Sessions: opaque server-side IDs or well-designed tokens with short TTL, rotation, secure cookie flags (`HttpOnly`, `Secure`, `SameSite`). MFA adds a second factor (something you have/are). OAuth 2.0 / OIDC separate authorization of apps from login. Never log tokens.

**THE IDEA THAT FIXED IT:** Identity is a control plane. Protect it harder than the data plane.

**INTERNAL WORKING, STEP BY STEP**

```
 Login --> verify password (+ MFA)
      --> create session / issue tokens
      --> authorize each request
 Logout / expiry / revoke --> kill session
```

**REAL-WORLD ANALOGY**

A hotel key card (session) after showing ID at the desk (AuthN). The card opens only your floor (AuthZ). If you lose the card, front desk invalidates it (revocation).

**COMPLEXITY / TRADE-OFFS**

| Mechanism | Buys | Costs |
| --- | --- | --- |
| Passwords only | Familiar | Phishing, reuse |
| MFA | Huge risk drop | UX friction |
| Long-lived API keys | Simple scripts | Leak = lasting breach |

**CODE IMPLEMENTATION**

```python
import secrets, hashlib
session_id = secrets.token_urlsafe(32)
print("store only hash server-side:", hashlib.sha256(session_id.encode()).hexdigest()[:16], "...")
```

**INTERVIEW PERSPECTIVE:** Cookie flags that matter? JWT pitfalls? When prefer server sessions vs tokens?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | List three MFA types and phishing resistance |
| Medium | Threat-model a "remember me" checkbox |
| Hard | Design token revocation for a fleet of microservices |

**THE BRIDGE:** Knowing how auth works is not enough - you must systematically ask how it can be abused. Threat modeling and ATT&CK give that map.

---

## 5.2 Authorization: RBAC, Least Privilege, and Broken Access Control

**WHY THIS EXISTS:** Authentication without authorization is a locked front door with all interior doors open. Broken access control is #1 in OWASP Top 10:2021 for a reason - IDOR and privilege escalation dominate real apps.

**THE PROBLEM BEFORE THIS EXISTED:** "Is logged in" checks without "owns this object" checks. Admin role granted for convenience. Cloud IAM `*` actions.

**VISUAL LEARNING**

- [OWASP Top 10 A01 Broken Access Control](https://owasp.org/Top10/2021/)
- PortSwigger access-control labs
- OWASP Juice Shop access control challenges

**DETAILED EXPLANATION**

RBAC assigns permissions to roles, users to roles. ABAC adds attributes/context. Least privilege: minimum rights for the task, time-bounded. Vertical escalation = become admin. Horizontal = access peer's data (IDOR). Deny by default. Test every direct object reference.

**THE IDEA THAT FIXED IT:** Every request must answer: is *this* principal allowed to do *this* action on *this* object?

**INTERNAL WORKING, STEP BY STEP**

```
 Request (user=42, GET /invoices/99)
   |
   v
 AuthN ok? --> AuthZ: invoice.owner == 42?
   |-- yes --> return
   |-- no  --> 403 (do not leak existence carelessly)
```

**REAL-WORLD ANALOGY**

An employee badge opens the building; a separate ACL decides which cabinets. Badge alone is not enough.

**COMPLEXITY / TRADE-OFFS**

| Model | Trade-off |
| --- | --- |
| Coarse RBAC | Simple vs over-privilege |
| Fine ABAC | Precise vs complexity |
| Deny-by-default | Safer vs more engineering |

**CODE IMPLEMENTATION**

```python
def can_read_invoice(user_id, invoice):
    return invoice["owner_id"] == user_id or "finance" in invoice.get("roles", [])

print(can_read_invoice(7, {"owner_id": 7, "roles": []}))
print(can_read_invoice(7, {"owner_id": 9, "roles": []}))
```

**INTERVIEW PERSPECTIVE:** Explain IDOR with an example. RBAC vs ABAC. How test access control in QA?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Find an IDOR pattern in Juice Shop or a PortSwigger lab |
| Medium | Rewrite a route from "if session" to object-level check |
| Hard | Design least-privilege roles for a 5-service SaaS |

**THE BRIDGE:** Access rules need a catalog of how adversaries actually move - threat modeling and MITRE ATT&CK.

---

> **Phase 5 complete?** [Build the aligned project](./Projects.md#L4082) · [Continue to Phase 6](#phase-6---threat-modeling-and-mitre-attck)

<a id="phase-6"></a>

# PHASE 6 - Threat Modeling and MITRE ATT&CK

**Track:** Core Security

**GOAL:** Anticipate abuse before writing detections or exploits. Speak ATT&CK fluently.

**PREREQUISITES:** Phases 1-5.

## 6.1 STRIDE, Assets, and Data-Flow Diagrams

**WHY THIS EXISTS:** Controls scattered without a model waste money and miss the real paths. Threat modeling walks the design and asks structured "what can go wrong?" questions early - cheaper than after production.

**THE PROBLEM BEFORE THIS EXISTED:** Security reviews that only checked password length. Penetration tests that rediscovered issues architecture could have prevented. No DFDs, only vibes.

**VISUAL LEARNING**

- [Vibe Engines Security Engineer Roadmap](https://vibeengines.com/roadmap/security-engineer)
- Microsoft STRIDE documentation (concept skim)
- Draw a DFD for a login + payments toy app and list 6 threats

**DETAILED EXPLANATION**

STRIDE: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Start with assets and trust boundaries. Data flow diagrams show processes, stores, external entities. Rank threats; mitigate, transfer, accept. Revisit when architecture changes.

**THE IDEA THAT FIXED IT:** Model the system as an attacker would - on paper - before the attacker does it live.

**INTERNAL WORKING, STEP BY STEP**

```
 External User -> [Web] -> [API] -> [(DB)]
 Trust boundary at Web/API
 STRIDE each arrow and store
 Mitigations: AuthN, signing, audit logs, encryption, rate limits, priv separation
```

**REAL-WORLD ANALOGY**

A home security survey: doors, windows, valuables, lighting - before buying random gadgets.

**COMPLEXITY / TRADE-OFFS**

| Approach | Trade-off |
| --- | --- |
| Lightweight STRIDE workshop | Speed vs depth |
| Formal heavy models | Rigor vs stale docs |

**CODE IMPLEMENTATION**

```python
stride = list("STRIDE")
threats = {
    "S": "spoof identity",
    "T": "tamper data",
    "R": "deny actions",
    "I": "leak data",
    "D": "exhaust resources",
    "E": "gain privilege",
}
print(threats)
```

**INTERVIEW PERSPECTIVE:** Walk STRIDE on a URL shortener. What is a trust boundary?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Define each STRIDE letter in your own words |
| Medium | DFD + 8 threats for a password-reset flow |
| Hard | Threat model OAuth login with a malicious client |

**THE BRIDGE:** Generic STRIDE needs a shared catalog of real techniques. MITRE ATT&CK is that catalog.

---

## 6.2 MITRE ATT&CK: TTPs as a Shared Map

**WHY THIS EXISTS:** Blue and red teams talked past each other using tool names. ATT&CK maps tactics (why) and techniques (how) so detections, tests, and reports align. Detection engineering starts here.

**THE PROBLEM BEFORE THIS EXISTED:** Alert names like "malware.exe" with no tactic. Purple team exercises with no coverage matrix. SOC analysts memorizing SIEM queries without knowing what behavior they hunt.

**VISUAL LEARNING**

- [MITRE ATT&CK Navigator](https://attack.mitre.org/)
- [MITRE ATT&CK to Detection Rule Practitioner Guide (2026)](https://www.decryptiondigest.com/blog/how-to-read-mitre-attack-technique-write-detection-rule)
- [redcanaryco/atomic-red-team](https://github.com/redcanaryco/atomic-red-team)
- Pick one technique (e.g. T1059) and read Procedure Examples + Detection

**DETAILED EXPLANATION**

Matrix: tactics across columns (Initial Access ... Exfiltration / Impact), techniques as cells. Map your telemetry to techniques you can see. Atomic Red Team simulates techniques safely in labs. Coverage matrices show gaps. Reports should cite techniques, not only CVEs.

**THE IDEA THAT FIXED IT:** Describe adversary behavior in ATT&CK IDs so engineering and IR share one map.

**INTERNAL WORKING, STEP BY STEP**

```
 Technique page
   |-- Procedure examples (what to simulate)
   |-- Detection (log sources / ideas)
   |-- Mitigations
 Your work: telemetry? --> rule --> validate with Atomic test
```

**REAL-WORLD ANALOGY**

A field guide for animal tracks: same language for trackers and park rangers.

**COMPLEXITY / TRADE-OFFS**

| Use | Buys | Costs |
| --- | --- | --- |
| ATT&CK everywhere | Shared language | Over-mapping noise |
| Atomic tests | Proof of detection | Need safe lab |

**CODE IMPLEMENTATION**

```python
technique = {
    "id": "T1110",
    "name": "Brute Force",
    "tactic": "Credential Access",
    "telemetry": ["auth logs", "failed logon spikes"],
}
print(technique)
```

**INTERVIEW PERSPECTIVE:** Tactic vs technique vs procedure? How would you measure detection coverage?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Name the tactic for phishing |
| Medium | Build a mini coverage sheet: 10 techniques vs available logs |
| Hard | Propose detections for a technique your lab cannot yet see - list missing telemetry |

**THE BRIDGE:** ATT&CK tells you what adversaries do. The most common internet-facing battlefield is still the web application - OWASP next.

---

> **Phase 6 complete?** [Build the aligned project](./Projects.md#L4103) · [Continue to Phase 7](#phase-7---web-application-security-owasp)

<a id="phase-7"></a>

# PHASE 7 - Web Application Security (OWASP)

**Track:** Offense & Defense

**GOAL:** Understand, exploit (in labs), and fix the web vulnerabilities that dominate real breaches.

**PREREQUISITES:** Phases 2, 5, 6. Basic HTTP.

## 7.1 Injection and XSS (OWASP A03 and Friends)

**WHY THIS EXISTS:** Untrusted input interpreted as code or markup is still the classic killer. SQL injection and XSS teach the broader lesson: separate code from data, encode output, validate input.

**THE PROBLEM BEFORE THIS EXISTED:** String-concatenated SQL. `innerHTML` with user content. WAF-only "fixes" without code changes. CSRF tokens thought to stop XSS.

**VISUAL LEARNING**

- [OWASP Top 10:2021](https://owasp.org/Top10/2021/)
- [SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [PortSwigger Web Security Academy](https://portswigger.net/web-security) - free and best-in-class
- [juice-shop/juice-shop](https://github.com/juice-shop/juice-shop)
- [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings)
- [Ethical Hacking 101: Web App Penetration Testing (freeCodeCamp)](https://www.youtube.com/watch?v=2_lswM1S264)

**DETAILED EXPLANATION**

SQLi: attacker alters query structure. Fix with parameterized queries / ORM bind parameters. XSS: attacker injects script into victims' browsers (reflected, stored, DOM). Fix with output encoding, CSP, careful sinks. Command injection: same class on shells. Prefer allow-lists. Burp Suite is the standard web testing proxy for authorized tests.

**THE IDEA THAT FIXED IT:** Never let untrusted bytes become structure (SQL/HTML/shell). Parameterize and encode.

**INTERNAL WORKING, STEP BY STEP**

```
 User input --> (X concat into SQL) --> DB executes attacker logic
 User input --> parameterized statement --> data only
 User input --> (X raw HTML) --> victim browser runs script
 User input --> encoded text node + CSP --> safe render
```

**REAL-WORLD ANALOGY**

Putting customer notes into a filing clerk's instructions vs putting them in a sealed envelope labeled "data only."

**COMPLEXITY / TRADE-OFFS**

| Defense | Buys | Costs |
| --- | --- | --- |
| Parameterized SQL | Stops SQLi | Discipline in every query |
| CSP | Limits XSS impact | Tune carefully |
| WAF alone | Temporary shield | Bypassable; not root cause fix |

**CODE IMPLEMENTATION**

```python
# SAFE pattern (sqlite3)
import sqlite3
conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE users(id INT, name TEXT)")
conn.execute("INSERT INTO users VALUES (1, 'ada')")
user_input = "ada' OR '1'='1"
cur = conn.execute("SELECT * FROM users WHERE name = ?", (user_input,))
print("rows", cur.fetchall())  # no injection
```

**INTERVIEW PERSPECTIVE:** Blind SQLi idea? Stored vs reflected XSS? Why encoding context matters (HTML vs JS vs URL)?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Complete PortSwigger SQL injection apprentice labs |
| Medium | Complete XSS labs + fix a toy Flask app |
| Hard | Chain reflected XSS with session cookie theft scenario in lab only |

**THE BRIDGE:** Injection teaches input boundaries. Server-side request forgery and CSRF teach trust boundaries between browsers, servers, and internal networks.

---

## 7.2 SSRF, CSRF, and Modern Access-Control Bugs

**WHY THIS EXISTS:** Apps that fetch URLs (SSRF) become proxies into cloud metadata and internal admin panels. Browsers that auto-send cookies enable CSRF when state-changing requests lack anti-CSRF defenses. Combined with broken access control, these are high-impact and interview-favorite topics.

**THE PROBLEM BEFORE THIS EXISTED:** Webhook features with no allow-list. Cookie-based sessions without `SameSite` or tokens. Hidden security by obscure URLs.

**VISUAL LEARNING**

- [OWASP A10 SSRF](https://owasp.org/Top10/2021/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)
- SSRF / CSRF cheat sheets on OWASP
- PortSwigger SSRF + CSRF labs
- [HackTricks-wiki/hacktricks](https://github.com/HackTricks-wiki/hacktricks)

**DETAILED EXPLANATION**

SSRF: server requests attacker-controlled URL; hit `169.254.169.254` metadata, internal HTTP, or scan RFC1918. Mitigate: allow-lists, block link-local, no redirects, network egress controls. CSRF: forged cross-site request with victim cookies. Mitigate: anti-CSRF tokens, `SameSite` cookies, prefer non-cookie auth for APIs. Always re-check AuthZ server-side.

**THE IDEA THAT FIXED IT:** Do not let the server become the attacker's browser; do not let the victim's browser become the attacker's messenger.

**INTERNAL WORKING, STEP BY STEP**

```
 SSRF: Attacker -> App -> Internal IP / metadata (X)
 Fix: allow-list + egress filter
 CSRF: Evil site -> Victim browser -> Victim bank (cookies auto)
 Fix: CSRF token + SameSite
```

**REAL-WORLD ANALOGY**

SSRF is tricking a receptionist into phoning the vault room for you. CSRF is forging a signed slip using someone's automatic stamp.

**COMPLEXITY / TRADE-OFFS**

| Control | Trade-off |
| --- | --- |
| Strict URL allow-list | Safe vs inflexible webhooks |
| SameSite=Lax/Strict | CSRF help vs some cross-site flows break |

**CODE IMPLEMENTATION**

```python
from urllib.parse import urlparse
ALLOWED_hosts = {"images.example.com"}

def safe_fetch_url(url: str) -> bool:
    u = urlparse(url)
    return u.scheme in {"https"} and u.hostname in ALLOWED_HOSTS

print(safe_fetch_url("https://images.example.com/a.png"))
print(safe_fetch_url("http://169.254.169.254/latest/meta-data/"))
```

**INTERVIEW PERSPECTIVE:** Cloud metadata SSRF impact? CSRF vs XSS difference? Is CSRF dead in pure Bearer-token SPAs?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | PortSwigger CSRF lab |
| Medium | PortSwigger SSRF lab + write remediation notes |
| Hard | Threat-model a PDF-renderer feature for SSRF |

**THE BRIDGE:** Web apps sit on networks that still need perimeter and segmentation controls - firewalls, VPN, IDS.

---

> **Phase 7 complete?** [Build the aligned project](./Projects.md#L4124) · [Continue to Phase 8](#phase-8---network-defenses)

<a id="phase-8"></a>

# PHASE 8 - Network Defenses

**Track:** Defense

**GOAL:** Place and critique network controls that reduce blast radius and add detection points.

**PREREQUISITES:** Phases 2 and 6.

## 8.1 Firewalls, VPN, IDS/IPS

**WHY THIS EXISTS:** Hosts will be wrong sometimes. Network policy is the seatbelt. Firewalls enforce intent; VPN extends trust carefully; IDS/IPS watch or block known-bad patterns - with false positive trade-offs.

**THE PROBLEM BEFORE THIS EXISTED:** "Big firewall" at the edge and any-any inside. Always-on VPN that dumps remote users into flat LAN. IPS in drop mode without tuning - outages blamed on security.

**VISUAL LEARNING**

- NetworkChuck firewall / VLAN / VPN videos
- Vendor-neutral ACL design guides + this repo [`Networks.md`](./Networks.md)
- Build pfSense/OPNsense or cloud SG rules in a home lab

**DETAILED EXPLANATION**

Stateless vs stateful firewalls. Allow-lists over deny-lists when possible. Security groups as cloud firewalls. Site-to-site vs remote access VPN; prefer modern zero-trust network access patterns when replacing flat VPN. IDS (Suricata/Snort ideas) alerts; IPS can drop. Network detection is not a substitute for identity and patching.

**THE IDEA THAT FIXED IT:** Default deny between zones. Allow only business-needed flows. Log decisions.

**INTERNAL WORKING, STEP BY STEP**

```
 Internet --> Edge FW --> DMZ --> App FW --> Internal
 Remote user --> VPN/ZTNA --> only app portal (not whole LAN)
 IDS tap --> SIEM alerts
```

**REAL-WORLD ANALOGY**

Bouncers at sectioned venues vs one unlocked warehouse. VIP lane (VPN) still should not open every backstage door.

**COMPLEXITY / TRADE-OFFS**

| Control | Trade-off |
| --- | --- |
| IPS inline | Active block vs availability risk |
| Broad VPN | Access vs lateral risk |
| Microseg | Strong vs policy sprawl |

**CODE IMPLEMENTATION**

```python
# toy security group
sg = {("0.0.0.0/0", 443): "allow", ("10.0.0.0/8", 22): "allow"}
print("SSH from internet?", sg.get(("0.0.0.0/0", 22), "deny"))
```

**INTERVIEW PERSPECTIVE:** Stateful vs stateless? When IDS not IPS? Why split DMZ?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Write allow rules for a 3-tier web app |
| Medium | Critique an any-any lab firewall and fix it |
| Hard | Design remote access without flat VPN |

**THE BRIDGE:** Network policy helps, but endpoints still execute malware and misconfigs - host hardening and EDR intuition next.

---

## 8.2 Secure Network Design Patterns

**WHY THIS EXISTS:** Copy-pasted diagrams fail real orgs. You need repeatable patterns: 3-tier apps, management plane isolation, jump hosts, egress control, and logging of denies.

**THE PROBLEM BEFORE THIS EXISTED:** Jump boxes that were also browsing boxes. Management ports on the internet. No egress filters - C2 happy path.

**VISUAL LEARNING**

- Cloud security group best-practice posts (AWS/Azure style)
- [decalage2/awesome-security-hardening](https://github.com/decalage2/awesome-security-hardening)

**DETAILED EXPLANATION**

Isolate management interfaces. Bastion/jump with MFA and session recording. Restrict egress to needed FQDNs/IPs. Separate prod/non-prod. Monitor denied flows - they are free telemetry.

**THE IDEA THAT FIXED IT:** Make the easy path the safe path; make attacker paths noisy and narrow.

**INTERNAL WORKING, STEP BY STEP**

```
 Admins --> MFA bastion --> prod SSH (recorded)
 Prod egress --> proxy allow-list --> internet
 Deny logs --> SIEM
```

**REAL-WORLD ANALOGY**

Staff entrance with badge cameras vs loading dock left open "because trucks need it" without checks.

**COMPLEXITY / TRADE-OFFS**

| Pattern | Cost of skipping |
| --- | --- |
| Egress control | Easy exfil/C2 |
| Mgmt isolation | Instant ransomware admin |

**CODE IMPLEMENTATION**

```python
print("patterns:", ["bastion", "egress allow-list", "prod/nonprod split", "deny logging"])
```

**INTERVIEW PERSPECTIVE:** What is a bastion host? Why log denies?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Sketch mgmt vs data plane |
| Medium | List egress needs for a typical web app |
| Hard | Red-team your own diagram: find 3 bypasses |

**THE BRIDGE:** Even perfect network diagrams lose to unpatched, over-privileged endpoints - hardening time.

---

> **Phase 8 complete?** [Build the aligned project](./Projects.md#L4145) · [Continue to Phase 9](#phase-9---hardening-and-endpoint-security)

<a id="phase-9"></a>

# PHASE 9 - Hardening and Endpoint Security

**Track:** Defense

**GOAL:** Shrink attack surface with baselines; understand what EDR/AV actually buy you.

**PREREQUISITES:** Phase 3 OS skills.

## 9.1 CIS-Style Baselines and Attack Surface Reduction

**WHY THIS EXISTS:** Default OS installs optimize for convenience. Attackers optimize for defaults. Hardening applies known-good baselines (CIS, vendor security baselines) so every host starts from a smaller, documented surface.

**THE PROBLEM BEFORE THIS EXISTED:** Golden images with debugging tools forever. SMBv1 "for that one scanner." Local admin shared password. No disk encryption on laptops.

**VISUAL LEARNING**

- [decalage2/awesome-security-hardening](https://github.com/decalage2/awesome-security-hardening)
- CIS Benchmarks overview (concept level)
- Harden a lab Ubuntu + Windows VM; diff before/after open ports

**DETAILED EXPLANATION**

Remove unused services, enforce disk encryption, secure boot where applicable, disable risky legacy protocols, configure automatic updates carefully, apply least privilege locally, standardize images with Infrastructure as Code. Document exceptions with owners and expiry.

**THE IDEA THAT FIXED IT:** Defaults favor attackers. Baselines favor defenders - if maintained.

**INTERNAL WORKING, STEP BY STEP**

```
 Fresh OS --> apply baseline --> golden image --> fleet
 Exceptions register --> review quarterly
 Drift detection --> alert
```

**REAL-WORLD ANALOGY**

Closing unused windows and locking the basement before installing an expensive alarm.

**COMPLEXITY / TRADE-OFFS**

| Hardening | Trade-off |
| --- | --- |
| Aggressive CIS | Secure vs app breakage |
| Frozen old image | Stable vs vuln debt |

**CODE IMPLEMENTATION**

```python
baseline_checks = ["disk encryption", "no shared local admin", "auto updates", "unnecessary services off"]
print("\n".join(f"[ ] {c}" for c in baseline_checks))
```

**INTERVIEW PERSPECTIVE:** What is configuration drift? Why golden images rot?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | List 10 hardening items for a Linux web server |
| Medium | Apply and document a baseline on a lab VM |
| Hard | Design exception process with expiry and owners |

**THE BRIDGE:** Hardening reduces likelihood. You still need to find what slipped through - vulnerability management.

---

## 9.2 AV / EDR Intuition (Without Vendor Worship)

**WHY THIS EXISTS:** Signatures alone lost to polymorphic malware. EDR emphasizes behavioral telemetry: process trees, script activity, credential access attempts. Security engineers must know what sensors exist - and their blind spots.

**THE PROBLEM BEFORE THIS EXISTED:** "We have antivirus" as a complete strategy. Disabling EDR because it was noisy. No response playbooks when EDR alerted.

**VISUAL LEARNING**

- [fabacab/awesome-cybersecurity-blueteam](https://github.com/fabacab/awesome-cybersecurity-blueteam)
- John Hammond / Huntress style detection storytelling videos

**DETAILED EXPLANATION**

AV: known-bad matching. EDR: rich endpoint telemetry + analytics + response actions (isolate host). Still bypassable; pair with least privilege, ASR rules, application allow-listing where feasible. Telemetry feeds SOC (Phase 13).

**THE IDEA THAT FIXED IT:** Endpoint sensors are necessary, not sufficient. Behavior + identity + network beats any single agent.

**INTERNAL WORKING, STEP BY STEP**

```
 Process create --> EDR event --> detections --> SOC
 Response: kill / isolate / collect
 Blind spots: firmware, offline hosts, disabled agents
```

**REAL-WORLD ANALOGY**

Dashcam plus police radio. Helps a lot; does not replace locked doors or sober driving.

**COMPLEXITY / TRADE-OFFS**

| Tool | Limitation |
| --- | --- |
| Signature AV | Novel malware |
| EDR | Cost, privacy, bypass, alert fatigue |

**CODE IMPLEMENTATION**

```python
print("EDR value: telemetry + response hooks")
print("Still need: patching, least privilege, backups, IR plan")
```

**INTERVIEW PERSPECTIVE:** EDR vs AV? What is isolate host? How would an attacker try to blind EDR (high level)?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Compare AV vs EDR in a table |
| Medium | Map 5 EDR event types to ATT&CK tactics |
| Hard | Design backup plan if EDR agent is killed |

**THE BRIDGE:** You hardened and instrumented. Now continuously find and fix weaknesses - vuln management.

---

> **Phase 9 complete?** [Build the aligned project](./Projects.md#L4166) · [Continue to Phase 10](#phase-10---vulnerability-management)

<a id="phase-10"></a>

# PHASE 10 - Vulnerability Management

**Track:** Defense

**GOAL:** Run a sane vuln program: discover, prioritize by risk, remediate, verify.

**PREREQUISITES:** Phases 7-9.

## 10.1 Scanning, CVSS, and Prioritization Beyond the Score

**WHY THIS EXISTS:** Scanners produce mountains of CVEs. CVSS is a starting point, not a brain. Exploitability, asset criticality, exposure (internet-facing?), and compensating controls decide what you fix this week.

**THE PROBLEM BEFORE THIS EXISTED:** Chasing every Critical while ignoring mediums on the crown-jewel domain controller. Scanning without ownership. Patching theater without verification.

**VISUAL LEARNING**

- NVD / CVSS documentation (concept)
- Run OpenVAS/Nuclei/Trivy in lab against intentionally vulnerable VMs only
- SecLists / nuclei templates awareness (authorized use)

**DETAILED EXPLANATION**

Authenticated vs unauthenticated scans. Agent-based vs network. Deduplicate. Enrich with EPSS/KEV-style exploit signals when available. Ticketing with SLAs by severity × exposure. Exceptions with expiry. Re-scan to close the loop.

**THE IDEA THAT FIXED IT:** Risk prioritization beats alphabetical CVE panic.

**INTERNAL WORKING, STEP BY STEP**

```
 Discover --> Enrich (asset + exploit intel) --> Prioritize
 --> Patch / mitigate --> Verify --> Report metrics
```

**REAL-WORLD ANALOGY**

Triage in an ER: gunshot over paper cut even if both are "injuries." Internet-facing RCE is the gunshot.

**COMPLEXITY / TRADE-OFFS**

| Signal | Use |
| --- | --- |
| CVSS | Base severity |
| Exposure | Internet vs isolated |
| Exploit intel | Likely to be attacked |
| Asset value | Business impact |

**CODE IMPLEMENTATION**

```python
findings = [
    {"cve": "A", "cvss": 9.8, "internet": True, "asset": "web"},
    {"cve": "B", "cvss": 9.0, "internet": False, "asset": "lab-pc"},
]
def rank(f):
    return (not f["internet"], -f["cvss"])
print(sorted(findings, key=rank))
```

**INTERVIEW PERSPECTIVE:** Limitations of CVSS? Authenticated scan why? How report risk to executives?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Explain CVSS vs business risk |
| Medium | Prioritize a fake list of 10 vulns |
| Hard | Design SLA matrix for a 200-server estate |

**THE BRIDGE:** Scanners find known weaknesses. Adversaries chain unknowns and logic bugs - structured pentesting methodology is how you learn that craft safely.

---

## 10.2 Patch Management and Secure Exceptions

**WHY THIS EXISTS:** Knowing a CVE exists without a path to patch is theater. Change windows, canaries, and rollback plans make security and uptime coexist. Unpatchable systems need compensating controls.

**THE PROBLEM BEFORE THIS EXISTED:** "We'll patch next quarter" forever. Emergency patches that brick apps with no rollback. Infinite risk acceptances.

**VISUAL LEARNING**

- Vendor patch Tuesday / release note reading practice
- Patch a lab VM and document verification steps

**DETAILED EXPLANATION**

Inventory is prerequisite. Separate critical out-of-band patches from routine. Test in lower environments. Compensating controls: WAF virtual patch, network isolate, disable feature. Track MTTR metrics.

**THE IDEA THAT FIXED IT:** Remediation is a delivery problem as much as a security problem.

**INTERNAL WORKING, STEP BY STEP**

```
 Vuln ticket --> owner --> change plan --> canary --> fleet --> verify scan clean
```

**REAL-WORLD ANALOGY**

Fixing a cracked support beam: schedule, temporary bracing (compensating control), inspection after.

**COMPLEXITY / TRADE-OFFS**

| Strategy | Trade-off |
| --- | --- |
| Fast fleet-wide | Speed vs breakage |
| Slow careful | Stability vs exposure window |

**CODE IMPLEMENTATION**

```python
print("exception fields:", ["reason", "owner", "compensating_control", "expiry", "review_date"])
```

**INTERVIEW PERSPECTIVE:** What is a compensating control? How handle EOL software?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Draft an exception form template |
| Medium | Write patch verification checklist |
| Hard | Plan isolation for an unpatchable OT-like lab device |

**THE BRIDGE:** Programs find known issues. Offensive methodology finds what scanners miss - pentest process next.

---

> **Phase 10 complete?** [Build the aligned project](./Projects.md#L4187) · [Continue to Phase 11](#phase-11---penetration-testing-methodology)

<a id="phase-11"></a>

# PHASE 11 - Penetration Testing Methodology

**Track:** Offense

**GOAL:** Run offensive work as a professional process with scope, evidence, and clear reporting - never as random hacking.

**PREREQUISITES:** Phases 2-7, 10. Ethics from Phase 1.

## 11.1 Scopes, Recon, Enumeration, and Tooling Discipline

**WHY THIS EXISTS:** Without methodology, people spray Nmap and Metasploit, miss crown jewels, and cannot explain findings. Professional pentests follow phases: pre-engagement, recon, enumeration, exploitation, post-exploitation, reporting.

**THE PROBLEM BEFORE THIS EXISTED:** Out-of-scope disasters. Tool output pasted as "reports." No evidence. Destructive tests on production without permission.

**VISUAL LEARNING**

- [Penetration Testing Methodology | Ethical Hacking for Beginners](https://www.youtube.com/watch?v=Sy_c-s5fkcc)
- [Simple Penetration Testing Tutorial for Beginners (Loi Liang Yang)](https://www.youtube.com/watch?v=B7tTQ272OHE)
- [Penetration Testing with Nmap (Nielsen Networking)](https://www.youtube.com/watch?v=wlqUO09J-nw)
- [HackTricks-wiki/hacktricks](https://github.com/HackTricks-wiki/hacktricks)
- [danielmiessler/SecLists](https://github.com/danielmiessler/SecLists)
- TryHackMe Jr Pentest / HTB Starting Point (authorized)

**DETAILED EXPLANATION**

Pre-engagement: ROE, targets, timeboxes, emergency contacts, data handling. Passive recon (OSINT) vs active scanning. Enumerate services deeply before exploiting. Keep notes (CherryTree/Obsidian). Prefer understanding over one-click. Tools: Nmap, Burp, ffuf/gobuster, netexec/crackmapexec ideas, Impacket later for AD.

**THE IDEA THAT FIXED IT:** Process beats payloads. Notes beat memory. Scope beats curiosity.

**INTERNAL WORKING, STEP BY STEP**

```
 ROE signed
 --> passive recon
 --> active enum (ports/services)
 --> prioritized attack surface
 --> controlled exploit attempts
 --> evidence + screenshots
 --> report
```

**REAL-WORLD ANALOGY**

A building inspection with a checklist and camera, not kicking random doors "to see what happens."

**COMPLEXITY / TRADE-OFFS**

| Style | Trade-off |
| --- | --- |
| Fully automated scan dump | Coverage vs insight |
| Careful manual | Quality vs time |

**CODE IMPLEMENTATION**

```python
phases = ["pre-eng", "recon", "enum", "exploit", "post-ex", "report"]
print(" -> ".join(phases))
```

**INTERVIEW PERSPECTIVE:** What belongs in ROE? Active vs passive recon? How avoid scope creep?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Write a one-page ROE for your home lab |
| Medium | Nmap a lab target and write service enum notes |
| Hard | Full Starting Point box writeup with methodology sections |

**THE BRIDGE:** Enumeration finds doors. Exploitation and post-ex teach impact - still in labs - and force you to write reports humans can fix.

---

## 11.2 Exploitation, Post-Exploitation, and Reporting

**WHY THIS EXISTS:** A shell is not the deliverable. Business impact, reproduction steps, evidence, and remediation are. Post-ex shows what an attacker could reach - credential harvesting, pivoting - within scope.

**THE PROBLEM BEFORE THIS EXISTED:** Critical findings with no fix guidance. Destroying evidence. Privilege escalation without documenting the path for defenders.

**VISUAL LEARNING**

- [Penetration Testing with Metasploit overview (Nielsen Networking)](https://www.youtube.com/watch?v=Keld6Wi8aZ4)
- IppSec HTB walkthroughs (learn methodology, not blind copy)
- [Ethical Hacking Learning Roadmap (Coursera)](https://www.coursera.org/resources/ethical-hacking-learning-roadmap)
- Cert path later: eJPT → PNPT → OSCP (after lots of labs)

**DETAILED EXPLANATION**

Prove impact safely. Avoid destructive payloads on shared labs. Capture screenshots, requests, hashes of evidence. Post-ex: situational awareness, loot within scope, persistence only if allowed. Report structure: exec summary, scope, findings (severity, CVSS/ATT&CK, steps, impact, remediations), appendix. Write for engineers and for leadership.

**THE IDEA THAT FIXED IT:** If the customer cannot fix it from your report, you failed professionally.

**INTERNAL WORKING, STEP BY STEP**

```
 Foothold --> enum privs --> escalate (if in scope)
 --> map access to crown jewels
 --> cleanup if required
 --> report with remediations
```

**REAL-WORLD ANALOGY**

A safety inspector's report with photos and required fixes - not a trophy photo of a broken lock.

**COMPLEXITY / TRADE-OFFS**

| Finding quality | Effect |
| --- | --- |
| Repro + fix | Patch happens |
| Vague panic | Ignored or chaos |

**CODE IMPLEMENTATION**

```python
finding = {
    "title": "SQL injection in /search",
    "severity": "High",
    "attack": "T1190",
    "fix": "Parameterized queries + WAF interim",
}
print(finding)
```

**INTERVIEW PERSPECTIVE:** What is in an executive summary? How rate severity? Ethical cleanup expectations?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Template a finding writeup from a PortSwigger lab |
| Medium | Complete a full THM box writeup as if for a client |
| Hard | Peer-review a writeup for fixability and evidence |

**THE BRIDGE:** Many enterprise paths end in Windows domains. Active Directory is the next mountain.

---

> **Phase 11 complete?** [Build the aligned project](./Projects.md#L4208) · [Continue to Phase 12](#phase-12---active-directory-attacks-and-defenses)

<a id="phase-12"></a>

# PHASE 12 - Active Directory Attacks and Defenses

**Track:** Offense & Defense

**GOAL:** Explain AD authentication flows and common attack paths at a professional level; practice only in lab domains.

**PREREQUISITES:** Phase 3 Windows + Phase 11 methodology.

## 12.1 AD Basics and Kerberos (Enough to Reason)

**WHY THIS EXISTS:** AD is the keys-to-the-kingdom for most enterprises. Understanding users, groups, GPOs, LDAP, and Kerberos (TGT/TGS) is mandatory for both red and blue.

**THE PROBLEM BEFORE THIS EXISTED:** Treating AD as "just passwords." Ignoring service accounts. No idea what a Golden Ticket conceptually is (you need the model before the myth).

**VISUAL LEARNING**

- TryHackMe Active Directory modules / HTB AD labs (authorized)
- HackTricks AD sections
- IppSec / related AD lab walkthroughs

**DETAILED EXPLANATION**

Domain join, domain controllers, Kerberos tickets, NTLM legacy, SPNs, service accounts. BloodHound-style graph thinking: who can reach Domain Admin via nested rights? Defenders: tiered admin model, LAPS, protect DCs, monitor anomalous ticket behavior.

**THE IDEA THAT FIXED IT:** AD is a graph of trust. Attackers walk edges; defenders remove edges and monitor walks.

**INTERNAL WORKING, STEP BY STEP**

```
 User --> AS-REQ --> TGT (KRBTGT)
 User --> TGS-REQ --> Service ticket
 User --> App (Kerberos auth)
 Misconfigs = edges to DA
```

**REAL-WORLD ANALOGY**

A master key registry for an office tower. Steal the registry process, and every door is at risk.

**COMPLEXITY / TRADE-OFFS**

| Control | Buys |
| --- | --- |
| Tiered admins | Limits blast radius |
| LAPS | Stops shared local admin |
| MFA on privileged | Harder takeover |

**CODE IMPLEMENTATION**

```python
print("learn objects: user, group, OU, GPO, SPN, DC")
print("graph question: paths to high privilege")
```

**INTERVIEW PERSPECTIVE:** TGT vs service ticket? Why service accounts matter? What is tiered administration?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Define DC, domain, forest |
| Medium | Map a lab domain's groups on paper |
| Hard | Complete an AD lab path and write defender detections for it |

**THE BRIDGE:** Offensive AD skill without detection skill creates cowboys. SOC and detection engineering close the loop.

---

## 12.2 Lateral Movement Themes and Defensive Countermeasures

**WHY THIS EXISTS:** After a foothold, attackers reuse credentials and remote admin protocols to move. Defenders invent segmentation of admin, credential guardrails, and detections for unusual logon patterns.

**THE PROBLEM BEFORE THIS EXISTED:** Flat admin rights. Same local admin hash everywhere. No monitoring of 4624/4625 patterns or remote service creation.

**VISUAL LEARNING**

- [meirwah/awesome-incident-response](https://github.com/meirwah/awesome-incident-response)
- ATT&CK Lateral Movement tactic pages

**DETAILED EXPLANATION**

Themes (conceptual): credential reuse, remote execution via admin shares/WinRM/PsExec-like patterns, Kerberos abuses when misconfigured. Defenses: privileged access workstations, disable unnecessary protocols, monitor, rotate, network allow-lists between tiers. Do not memorize exploit steps - memorize detection and design lessons.

**THE IDEA THAT FIXED IT:** Assume breach of one workstation. Design so Domain Admin is still far away and noisy to reach.

**INTERNAL WORKING, STEP BY STEP**

```
 Workstation foothold
 --> credential theft risk
 --> lateral to server
 --> privilege escalation
 Break chain: tiering + monitoring + least privilege
```

**REAL-WORLD ANALOGY**

One stolen badge should not open the CEO suite and the cash vault without alarms.

**COMPLEXITY / TRADE-OFFS**

| Weakness | Defender fix |
| --- | --- |
| Shared local admin | LAPS + unique passwords |
| Overbroad DA | Delegation + time-based rights |

**CODE IMPLEMENTATION**

```python
print("defender checklist: tiering, LAPS, MFA, logon anomalies, admin workstation")
```

**INTERVIEW PERSPECTIVE:** What logon types matter in IR? How would you detect unusual remote admin? (concepts)

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | List 5 AD hardening controls |
| Medium | ATT&CK-map a lateral movement story from a lab writeup |
| Hard | Propose SIEM detections for your lab AD attack path |

**THE BRIDGE:** You can describe attacks. Now build the detection factory - SOC, SIEM, Sigma.

---

> **Phase 12 complete?** [Build the aligned project](./Projects.md#L4229) · [Continue to Phase 13](#phase-13---soc-siem-and-detection-engineering)

<a id="phase-13"></a>

# PHASE 13 - SOC, SIEM, and Detection Engineering

**Track:** Blue Team

**GOAL:** Turn telemetry into reliable detections with low noise and clear response paths.

**PREREQUISITES:** Phases 3, 6, 12 themes.

## 13.1 Logs, SIEM Pipelines, and SOC Workflow

**WHY THIS EXISTS:** Without centralized, parsed, retained logs, IR is guesswork. SIEM aggregates; SOC analysts triage; detection engineers build content. Home SIEM labs (Wazuh/Elastic/Splunk free tiers) teach the job.

**THE PROBLEM BEFORE THIS EXISTED:** Log collection with no use cases. Alert spam. Analysts clicking "close" forever. No runbooks.

**VISUAL LEARNING**

- [How to Become a SOC Analyst in 2026](https://www.infosecjobboard.com/blog/how-to-become-soc-analyst-2026)
- [fabacab/awesome-cybersecurity-blueteam](https://github.com/fabacab/awesome-cybersecurity-blueteam)
- Example labs: search GitHub for Wazuh/Splunk SOC lab projects
- Build a tiny Wazuh or Elastic lab; ingest auth logs

**DETAILED EXPLANATION**

Sources: endpoints, identity, network, cloud audit. Parse/normalize. Retention vs cost. SOC tiers: triage → deep investigate → hunt. Use cases driven by ATT&CK and business risks. Metrics: MTTD, MTTR, false positive rate. Runbooks beat heroics.

**THE IDEA THAT FIXED IT:** Collect with purpose. Alert with a question to answer. Respond with a written path.

**INTERNAL WORKING, STEP BY STEP**

```
 Sources --> shipper --> parse --> SIEM index
 --> rules/ML --> alert --> case --> IR actions
 Feedback: tune rule / add context
```

**REAL-WORLD ANALOGY**

A 911 center: calls (logs) must be routed, prioritized, and answered with playbooks - not vibes.

**COMPLEXITY / TRADE-OFFS**

| Choice | Trade-off |
| --- | --- |
| Log everything | Forensics vs cost/noise |
| Sparse logging | Cheap vs blind |

**CODE IMPLEMENTATION**

```python
alert = {"rule": "brute_force", "host": "vpn1", "count": 40, "window": "5m"}
print("triage Qs: expected? user travel? success after? malware?")
```

**INTERVIEW PERSPECTIVE:** What is a false positive? Tier-1 vs Tier-2? Why normalization matters?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | List 10 log sources a SOC wants |
| Medium | Write a runbook for brute-force VPN alerts |
| Hard | Stand up a lab SIEM and generate a true-positive test |

**THE BRIDGE:** Pipelines without content are empty warehouses. Detection-as-code with Sigma is next.

---

## 13.2 Detection Engineering with Sigma and ATT&CK

**WHY THIS EXISTS:** Vendor-specific queries do not travel. Sigma gives portable detection rules convertible to Splunk/KQL/etc. Good detections name the behavior, cite ATT&CK, define data sources, and get validated with Atomic tests.

**THE PROBLEM BEFORE THIS EXISTED:** Regex soup alerts. No owner. No test. Broken after parser changes. Copy-paste rules that never fire because fields differ (classic Wazuh decoder lesson).

**VISUAL LEARNING**

- [SigmaHQ/sigma](https://github.com/SigmaHQ/sigma)
- [Sigma Rules - Vendor-Agnostic Detection 2026](https://ringsafe.in/sigma-rules-vendor-agnostic-detection/)
- [MITRE ATT&CK to Detection Rule Guide](https://www.decryptiondigest.com/blog/how-to-read-mitre-attack-technique-write-detection-rule)
- [redcanaryco/atomic-red-team](https://github.com/redcanaryco/atomic-red-team)

**DETAILED EXPLANATION**

Sigma anatomy: title, logsource, detection map, condition, falsepositives, tags (`attack.txxxx`). Convert with sigma-cli. Validate on historical data; measure FP. Version in git. Pair with enrichment (asset owner, geo). Continuous tuning is the job.

**THE IDEA THAT FIXED IT:** Detections are products: tested, versioned, mapped, and owned.

**INTERNAL WORKING, STEP BY STEP**

```
 ATT&CK technique --> required fields
 --> Sigma rule --> convert --> SIEM
 --> Atomic test --> true positive?
 --> tune / promote
```

**REAL-WORLD ANALOGY**

A smoke detector tested with canned smoke, mapped to a fire escape plan - not a random beepy toy.

**COMPLEXITY / TRADE-OFFS**

| Quality bar | Why |
| --- | --- |
| ATT&CK tag | Shared language |
| FP notes | Analyst trust |
| Test evidence | Survives change |

**CODE IMPLEMENTATION**

```python
sigma_like = {
    "title": "Many Failed Logins",
    "logsource": "auth",
    "condition": "failures >= 10 in 5m",
    "tags": ["attack.t1110"],
}
print(sigma_like)
```

**INTERVIEW PERSPECTIVE:** What makes a detection high quality? How handle noisy but useful signals?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Read 3 Sigma rules and summarize behavior |
| Medium | Write a Sigma-style rule for your lab brute force |
| Hard | Validate with Atomic Red Team and record FP rate |

**THE BRIDGE:** Detections raise hands. Someone must investigate and contain - DFIR.

---

> **Phase 13 complete?** [Build the aligned project](./Projects.md#L4250) · [Continue to Phase 14](#phase-14---digital-forensics-and-incident-response)

<a id="phase-14"></a>

# PHASE 14 - Digital Forensics and Incident Response

**Track:** Blue Team

**GOAL:** Move from alert to containment and evidence-based narrative without destroying artifacts.

**PREREQUISITES:** Phase 13. OS skills.

## 14.1 IR Lifecycle and Triage

**WHY THIS EXISTS:** Incidents are chaotic. NIST-style IR phases (prepare, detect/analyze, contain, eradicate, recover, lessons learned) keep teams from making it worse. Triage decides severity and next actions fast.

**THE PROBLEM BEFORE THIS EXISTED:** Reimaging before memory capture. No communication plan. Containment that breaks the business unnecessarily - or too slowly.

**VISUAL LEARNING**

- [SANS: Getting Started in DFIR](https://www.sans.org/mlp/start-in-dfir)
- [DFIR Diva free IR training plan](https://dfirdiva.com/free-incident-response-training-plan/)
- [meirwah/awesome-incident-response](https://github.com/meirwah/awesome-incident-response)
- CyberDefenders / DFIR THM rooms

**DETAILED EXPLANATION**

Preparation: contacts, playbooks, tooling, backups tested. Analysis: scope users/hosts, malware? data at risk? Containment: network isolate, disable account, block IOC - choose precision. Eradication/recovery: reimage vs clean, credential resets, monitoring. Lessons learned with real changes. Chain of custody if legal matters.

**THE IDEA THAT FIXED IT:** Preserve what you need, contain what is burning, communicate clearly.

**INTERNAL WORKING, STEP BY STEP**

```
 Alert --> triage severity
 --> collect volatile evidence if needed
 --> contain
 --> eradicate / recover
 --> report + improve detections
```

**REAL-WORLD ANALOGY**

Emergency room + fire department coordination: stabilize, then repair, then fire-code updates.

**COMPLEXITY / TRADE-OFFS**

| Action | Risk if wrong |
| --- | --- |
| Premature reimage | Lost attribution |
| Slow contain | Spread |

**CODE IMPLEMENTATION**

```python
ir_phases = ["prepare", "detect/analyze", "contain", "eradicate", "recover", "lessons"]
print(" -> ".join(ir_phases))
```

**INTERVIEW PERSPECTIVE:** When isolate vs watch? What is chain of custody? Who do you call first?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Write a ransomware first-hour checklist |
| Medium | Tabletop: CEO laptop phish with MFA fatigue |
| Hard | Full timeline from a public breach report |

**THE BRIDGE:** Triage needs evidence tools - disk and memory forensics basics.

---

## 14.2 Forensics Tooling Basics and Safe Malware Triage

**WHY THIS EXISTS:** You need enough forensics to answer: what executed, what changed, what contacted the network? Disk tools (Autopsy/TSK), memory (Volatility), and Windows timeline tools (Eric Zimmerman) appear in every DFIR path. Malware analysis starts with safe static triage in VMs.

**THE PROBLEM BEFORE THIS EXISTED:** Running malware on your host. Only trusting AV labels. No hashes/IOCs shared with detections.

**VISUAL LEARNING**

- [SANS: How to start learning malware analysis](https://www.sans.org/blog/how-you-can-start-learning-malware-analysis)
- [Getting Into DFIR - DFIR Diva](https://dfirdiva.com/getting-into-dfir/)
- Autopsy, Volatility, REMnux, Ghidra, FLOSS (lab VMs)

**DETAILED EXPLANATION**

Order of volatility. Snapshot VMs. Hash evidence. Memory reveals running implants. Disk reveals persistence. Static malware triage: hashes, strings, imports, packers - before dynamic detonation in isolated nets. Feed IOCs back to SIEM and EDR blocks.

**THE IDEA THAT FIXED IT:** Investigate like you will teach the SOC tomorrow - with artifacts, not folklore.

**INTERNAL WORKING, STEP BY STEP**

```
 Isolate VM lab
 collect memory/disk
 hash + ticket
 analyze --> IOCs --> detections/blocks
 document timeline
```

**REAL-WORLD ANALOGY**

Crime scene photos and sealed bags before cleaning the room.

**COMPLEXITY / TRADE-OFFS**

| Method | Buys | Costs |
| --- | --- | --- |
| Static triage | Safe quick view | Limited if packed |
| Dynamic analysis | Behavior | Need isolated detonation lab |

**CODE IMPLEMENTATION**

```python
import hashlib
blob = b"pretend-evidence"
print("sha256", hashlib.sha256(blob).hexdigest())
```

**INTERVIEW PERSPECTIVE:** Order of volatility? Why hash evidence? When not to detonate malware?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Install Autopsy in lab and open a practice image |
| Medium | Volatility help + list processes on a practice dump |
| Hard | Write an IOC report that Phase 13 detections can consume |

**THE BRIDGE:** Many estates are not only on-prem. Cloud identity and misconfigs are the new domain controllers.

---

> **Phase 14 complete?** [Build the aligned project](./Projects.md#L4271) · [Continue to Phase 15](#phase-15---cloud-security-fundamentals)

<a id="phase-15"></a>

# PHASE 15 - Cloud Security Fundamentals

**Track:** Modern Stack

**GOAL:** Secure cloud like an engineer: identity first, exposure second, logging always.

**PREREQUISITES:** Phases 5, 8, 10.

## 15.1 Shared Responsibility and IAM Least Privilege

**WHY THIS EXISTS:** Cloud breaches are often customer misconfigurations: public buckets, admin keys on laptops, `*` IAM. Shared responsibility clarifies what the provider secures vs what you must secure. Short-lived federated credentials beat long-lived access keys.

**THE PROBLEM BEFORE THIS EXISTED:** Root account daily use. Access keys in Git. Public storage "temporary." No CloudTrail/Azure Activity Logs.

**VISUAL LEARNING**

- [Cloud Security Guide 2026 (RingSafe)](https://ringsafe.in/cloud-security-guide/)
- [Cloud IAM Best Practices 2026](https://www.infodivelabs.com/blog/cloud-iam-aws-azure-gcp)
- [AWS least privilege at scale blog](https://aws.amazon.com/blogs/security/strategies-for-achieving-least-privilege-at-scale-part-1/)
- [HackTricks-wiki/hacktricks-cloud](https://github.com/HackTricks-wiki/hacktricks-cloud)
- Free-tier AWS/Azure lab: IAM user with MFA, disable root keys, enable audit logs

**DETAILED EXPLANATION**

Provider: hardware, hypervisor, managed control plane baselines. You: identity, network config, data, application. MFA everywhere humans. Prefer roles/instance profiles/workload identity over static keys. SCPs/guardrails. Secrets managers. Encrypt disks and objects. Continuously find public exposures.

**THE IDEA THAT FIXED IT:** In cloud, identity is the perimeter. Log it. Least-privilege it. Federate it.

**INTERNAL WORKING, STEP BY STEP**

```
 Human --> IdP MFA --> short-lived role
 Workload --> OIDC/instance profile --> scoped permissions
 Audit logs --> SIEM
 Public exposure scanner --> ticket
```

**REAL-WORLD ANALOGY**

Renting an apartment: landlord secures the building structure; you lock your door and do not leave the spare key under the mat (and on GitHub).

**COMPLEXITY / TRADE-OFFS**

| Anti-pattern | Fix |
| --- | --- |
| Long-lived keys | Roles + rotation + discovery |
| Root daily | Break-glass only |
| * IAM | Scoped actions + conditions |

**CODE IMPLEMENTATION**

```python
policy_bad = {"Action": "*", "Resource": "*"}
policy_better = {"Action": ["s3:GetObject"], "Resource": ["arn:aws:s3:::app-bucket/reads/*"]}
print("prefer", policy_better)
```

**INTERVIEW PERSPECTIVE:** Shared responsibility for SaaS vs IaaS? Why disable root access keys? What is confused deputy (high level)?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Enable audit logging in a cloud free tier |
| Medium | Rewrite a wildcard IAM policy to least privilege |
| Hard | Design CI deployment identity without stored cloud keys |

**THE BRIDGE:** Cloud runs containers now. Kubernetes and pipelines need their own hardening story.

---

## 15.2 Cloud Networking, Logging, and Common Misconfigs

**WHY THIS EXISTS:** Public IPs, open security groups, missing logs, and overprivileged roles show up in every cloud pentest. Security engineers build guardrails and detection on control-plane logs.

**THE PROBLEM BEFORE THIS EXISTED:** SSH open to the world "for a minute." Disabled logging for cost. No alerts on IAM changes.

**VISUAL LEARNING**

- [Vibe Engines Security Engineer Roadmap](https://vibeengines.com/roadmap/security-engineer)
- Scout Suite / Prowler-style checks against a lab account (authorized)

**DETAILED EXPLANATION**

Private subnets for data stores, bastions or ZTNA for admin, flow logs, config rules/policies as code, alert on root use and policy changes, encrypt and block public ACLs. Threat detect services help but do not replace IAM hygiene.

**THE IDEA THAT FIXED IT:** Make secure configuration the default via policy-as-code, then detect drift.

**INTERNAL WORKING, STEP BY STEP**

```
 CSPM / config rules --> noncompliant resource --> auto ticket
 CloudTrail/Activity --> IAM change alerts
 Public bucket find --> break glass fix
```

**REAL-WORLD ANALOGY**

Leaving the store storeroom on the sidewalk because "the mall has security guards."

**COMPLEXITY / TRADE-OFFS**

| Control | Trade-off |
| --- | --- |
| Strict private networking | Safer vs ops complexity |
| Heavy logging | Visibility vs bill |

**CODE IMPLEMENTATION**

```python
misconfigs = ["0.0.0.0/0 ssh", "public bucket", "no audit logs", "admin access keys"]
print("hunt:", misconfigs)
```

**INTERVIEW PERSPECTIVE:** What is a public bucket risk story? Which control-plane events must alert?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | List top 10 cloud misconfigs |
| Medium | Fix open SG in lab and document |
| Hard | Write detection ideas for DisableLogging + CreateAccessKey |

**THE BRIDGE:** VMs were yesterday's unit. Containers and CI are today's - DevSecOps next.

---

> **Phase 15 complete?** [Build the aligned project](./Projects.md#L4292) · [Continue to Phase 16](#phase-16---containers-kubernetes-and-devsecops)

<a id="phase-16"></a>

# PHASE 16 - Containers, Kubernetes, and DevSecOps

**Track:** Modern Stack

**GOAL:** Secure the path from commit to runtime: dependencies, images, cluster RBAC, and CI gates.

**PREREQUISITES:** Phase 15 + basic Docker curiosity.

## 16.1 Container Image Risk and Kubernetes Hardening Themes

**WHY THIS EXISTS:** Containers share kernels and often run as root by default. Kubernetes multiplies misconfig surface: RBAC wildcards, privileged pods, no NetworkPolicy, exposed dashboards. The 4C model (Cloud, Cluster, Container, Code) organizes defenses.

**THE PROBLEM BEFORE THIS EXISTED:** Latest tags forever. Secrets in env vars in plain Deployments. cluster-admin for developers. Privileged debug pods left running.

**VISUAL LEARNING**

- [Kubernetes Security Fundamentals](https://k8s-security.guru/kubernetes-security/fundamentals/intro/)
- [K8s Security Checklist 2026](https://www.cloudanix.com/blog/kubernetes-security-checklist-2026-hardening-eks-aks-gke)
- [Container security best practices 2026](https://www.adayptus.com/blog/kubernetes-container-security-best-practices)
- [sottlmarek/DevSecOps](https://github.com/sottlmarek/DevSecOps)

**DETAILED EXPLANATION**

Minimal base images, non-root users, scan images (Trivy), sign/verify images, secrets via CSI/secret manager, Restricted Pod Security Standards, NetworkPolicy default deny, API server private, audit logs to SIEM, runtime detection (Falco-style). Workload identity over node keys.

**THE IDEA THAT FIXED IT:** Defaults are privileged. Change defaults. Enforce with admission policies.

**INTERNAL WORKING, STEP BY STEP**

```
 Code --> CI scan --> signed image --> cluster
 Pod security restricted
 NetworkPolicy default-deny
 Runtime alerts --> SIEM
```

**REAL-WORLD ANALOGY**

Shipping containers: locked boxes, sealed manifests, and a port authority - not open crates on a shared deck.

**COMPLEXITY / TRADE-OFFS**

| Shortcut | Consequence |
| --- | --- |
| Privileged pods | Host escape risk |
| Wildcard RBAC | Cluster takeover |

**CODE IMPLEMENTATION**

```python
dockerfile_advice = ["FROM minimal", "USER nonroot", "no secrets in layers", "pin digests"]
print("\n".join(dockerfile_advice))
```

**INTERVIEW PERSPECTIVE:** Why non-root containers? What is Pod Security Admission? Why NetworkPolicy?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Scan a public image with Trivy in lab |
| Medium | Rewrite a Deployment to drop capabilities / non-root |
| Hard | Draft NetworkPolicies for a 3-tier app on kind/minikube |

**THE BRIDGE:** Runtime clusters are fed by pipelines. Shift security left into CI without becoming a blocker theater.

---

## 16.2 DevSecOps: SAST, SCA, Secrets, and Gates

**WHY THIS EXISTS:** Security bolted on after release fails. DevSecOps adds automated checks to pipelines: dependency CVEs (SCA), code patterns (SAST), Dockerfile/K8s lint, secret scanning, IaC misconfig - with developer-friendly feedback.

**THE PROBLEM BEFORE THIS EXISTED:** Security team as last-minute veto. 10,000 SAST findings ignored. Secrets in git history forever.

**VISUAL LEARNING**

- [sottlmarek/DevSecOps](https://github.com/sottlmarek/DevSecOps)
- Add gitleaks + Trivy to a sample CI workflow
- OWASP ASVS awareness for app teams

**DETAILED EXPLANATION**

Threat model at design. Pre-commit secret scans. CI breaks on high SCA with reachable exploitability when possible. Protect main branches. Provenance (SBOM). Do not confuse scanner green checkmarks with secure software - still need design and tests.

**THE IDEA THAT FIXED IT:** Make the fastest path to production include the security checks that matter.

**INTERNAL WORKING, STEP BY STEP**

```
 commit --> secret scan --> SAST/SCA --> build --> image scan --> deploy
 fail gate on policy
 SBOM stored
```

**REAL-WORLD ANALOGY**

Factory quality checks on the assembly line, not only at the customer door.

**COMPLEXITY / TRADE-OFFS**

| Gate | Trade-off |
| --- | --- |
| Block on all mediums | Safe vs throughput death |
| Warn only | Speed vs ignored risk |

**CODE IMPLEMENTATION**

```python
print("CI gates:", ["gitleaks", "sca", "sast", "image scan", "iac scan"])
```

**INTERVIEW PERSPECTIVE:** SAST vs DAST vs SCA? What is an SBOM? How introduce gates without mutiny?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Run a secret scanner on a throwaway repo |
| Medium | Add CI security jobs to a sample app |
| Hard | Write a severity policy for break-the-build rules |

**THE BRIDGE:** Pipelines catch many issues. Targeted malware analysis skill still matters when something lands anyway.

---

> **Phase 16 complete?** [Build the aligned project](./Projects.md#L4313) · [Continue to Phase 17](#phase-17---malware-analysis-basics)

<a id="phase-17"></a>

# PHASE 17 - Malware Analysis Basics

**Track:** Specialization

**GOAL:** Triage suspicious binaries safely and extract IOCs for defenders.

**PREREQUISITES:** Phase 14. Isolated lab mandatory.

## 17.1 Static Analysis and YARA Thinking

**WHY THIS EXISTS:** Not every role needs reverse-engineering mastery, but security engineers should hash, string, classify, and write simple detection rules. YARA teaches pattern thinking shared with Sigma.

**THE PROBLEM BEFORE THIS EXISTED:** Uploading mystery samples to random public sandboxes that share with vendors/adversaries carelessly. Reverse engineering on a production laptop.

**VISUAL LEARNING**

- SANS malware analysis starter blog (linked in Phase 14)
- REMnux, Ghidra, FLOSS, Detect It Easy (lab)
- Flare-VM / REMnux practice samples from authorized corpora

**DETAILED EXPLANATION**

Static: file type, hashes, strings, imports, packer signs, signatures. YARA rules match patterns. Be careful with legal/ethical sample handling. Document IOCs: hashes, C2 domains, mutexes, paths.

**THE IDEA THAT FIXED IT:** Classify and extract facts before deep reversing. Feed defenders first.

**INTERNAL WORKING, STEP BY STEP**

```
 sample --> hash --> strings/imports --> YARA
 --> IOC list --> SIEM/EDR
 optional: deeper RE
```

**REAL-WORLD ANALOGY**

Identifying a suspicious package by shipping label and X-ray before opening it in a blast chamber.

**COMPLEXITY / TRADE-OFFS**

| Depth | When |
| --- | --- |
| Triage | SOC / IR default |
| Full RE | Specialist cases |

**CODE IMPLEMENTATION**

```python
yara_like = {"rule": "FakeAgent", "strings": ["evilmutex", "C2example"], "condition": "all of them"}
print(yara_like)
```

**INTERVIEW PERSPECTIVE:** What is a packed sample? How share IOCs safely? YARA vs AV signature?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Hash a file and collect strings in lab |
| Medium | Write a simple YARA rule for a practice pattern |
| Hard | Build an IOC package from a public malware writeup |

**THE BRIDGE:** Dynamic detonation shows behavior static misses - still only in isolated labs.

---

## 17.2 Dynamic Analysis Hygiene

**WHY THIS EXISTS:** Detonation reveals network callbacks and host changes. Without isolation, you become part of the botnet. Snapshots, fake net, and controlled time are basic hygiene.

**THE PROBLEM BEFORE THIS EXISTED:** Bridged malware VMs on home Wi-Fi. No snapshots. Believing one sandbox vendor label as ground truth.

**VISUAL LEARNING**

- INetSim / FakeNet-style ideas in REMnux docs
- Detonate a known practice sample in isolated VM; record process + network notes

**DETAILED EXPLANATION**

Host-only or simulated internet. Snapshot before/after. Capture procmon/sysmon-like events and pcap. Compare multiple sandboxes. Reset state always.

**THE IDEA THAT FIXED IT:** Observe behavior in a cage. Never on your daily driver.

**INTERNAL WORKING, STEP BY STEP**

```
 snapshot --> detonate --> observe --> revert
 export IOCs only
```

**REAL-WORLD ANALOGY**

Crash-test dummy cars on a closed track.

**COMPLEXITY / TRADE-OFFS**

| Setup | Risk if wrong |
| --- | --- |
| Bridged network | Real victim participation |
| No revert | Lab contamination |

**CODE IMPLEMENTATION**

```python
print("dynamic checklist: isolated nic, snapshot, time sync, capture, revert")
```

**INTERVIEW PERSPECTIVE:** Why multiple sandboxes? What artifacts prove persistence?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Create a revertible malware lab VM |
| Medium | Record a behavior timeline for a practice sample |
| Hard | Map observed behaviors to ATT&CK techniques |

**THE BRIDGE:** Technical controls need organizational glue - policies, risk registers, compliance maps.

---

> **Phase 17 complete?** [Build the aligned project](./Projects.md#L4334) · [Continue to Phase 18](#phase-18---governance-risk-and-compliance)

<a id="phase-18"></a>

# PHASE 18 - Governance, Risk, and Compliance

**Track:** Leadership Language

**GOAL:** Speak the language that funds security: risk, control objectives, and evidence.

**PREREQUISITES:** Enough technical depth from earlier phases to avoid hollow compliance.

## 18.1 Policies, Standards, and Frameworks (NIST/ISO Literacy)

**WHY THIS EXISTS:** Engineers who cannot map work to NIST CSF / ISO 27001-style control families struggle to get budget or pass audits. GRC is not the enemy of engineering - it is how organizations scale trust.

**THE PROBLEM BEFORE THIS EXISTED:** Binder policies nobody reads. Checkbox audits with no technical tests. Security team isolated from business risk.

**VISUAL LEARNING**

- NIST CSF overview pages (official)
- [Cybersecurity Certifications 2026 paths](https://hackerdna.com/blog/cybersecurity-certifications) - how GRC intersects careers
- Map 10 of your lab controls to CSF functions: Identify/Protect/Detect/Respond/Recover

**DETAILED EXPLANATION**

Policy = must/should rules. Standards = mandatory specifics. Procedures = how. Frameworks organize control objectives. Evidence: logs, tickets, configs, test results. Continuous control monitoring beats annual panic.

**THE IDEA THAT FIXED IT:** Translate technical work into risk reduction and evidence - or it will be cut.

**INTERNAL WORKING, STEP BY STEP**

```
 Business risk --> control objective --> technical control
 --> evidence --> audit/assurance
```

**REAL-WORLD ANALOGY**

Building codes: they constrain builders and protect occupants. Good engineers help write practical codes.

**COMPLEXITY / TRADE-OFFS**

| Failure mode | Result |
| --- | --- |
| Paper only | Breach + audit fail |
| Tech only | Defunded / ignored |

**CODE IMPLEMENTATION**

```python
csf = ["Identify", "Protect", "Detect", "Respond", "Recover"]
print(csf)
```

**INTERVIEW PERSPECTIVE:** Policy vs standard vs guideline? What is assurance evidence?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Write a 1-page acceptable use policy for your lab |
| Medium | Map Juice Shop remediations to OWASP + CSF |
| Hard | Draft a risk register with 8 entries and owners |

**THE BRIDGE:** Frameworks need quantified risk decisions - accept, mitigate, transfer.

---

## 18.2 Risk Registers, Vendors, and Practical Compliance

**WHY THIS EXISTS:** Not every risk is fixed immediately. Registers track likelihood, impact, owners, treatments, and residual risk. Vendor risk matters because your SaaS is your attack surface. Compliance (PCI-ish thinking, privacy) constrains design.

**THE PROBLEM BEFORE THIS EXISTED:** Infinite risk acceptance. Vendors with admin to prod and no review. Compliance projects that ignore actual threats.

**VISUAL LEARNING**

- Vendor questionnaire samples (concept)
- Build a risk register spreadsheet for a fictional startup

**DETAILED EXPLANATION**

Qualitative scales done consistently beat fake precision. Tie risks to assets and scenarios. Third parties: least privilege integrations, DPAs, offboarding. Privacy by design. Security champions in product teams.

**THE IDEA THAT FIXED IT:** Risk management is decision records - not fear.

**INTERNAL WORKING, STEP BY STEP**

```
 Scenario --> score --> treatment
 mitigate / transfer / accept (expiry)
 review cadence
```

**REAL-WORLD ANALOGY**

Insurance + locks + smoke detectors: different treatments for different parts of fire risk.

**COMPLEXITY / TRADE-OFFS**

| Treatment | When |
| --- | --- |
| Mitigate | Cheap vs impact |
| Transfer | Insurance/contract |
| Accept | Low impact, timed |

**CODE IMPLEMENTATION**

```python
risk = {"asset": "customer DB", "scenario": "ransomware", "treatment": "backups+MFA+EDR", "residual": "medium"}
print(risk)
```

**INTERVIEW PERSPECTIVE:** How present risk to a CFO? What is fourth-party risk?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Define likelihood/impact scales |
| Medium | Vendor review checklist (15 questions) |
| Hard | Residual risk debate for unpatched legacy box |

**THE BRIDGE:** Knowledge without artifacts does not hire. Portfolio labs prove you can do the work.

---

> **Phase 18 complete?** [Build the aligned project](./Projects.md#L4355) · [Continue to Phase 19](#phase-19---portfolio-and-labs)

<a id="phase-19"></a>

# PHASE 19 - Portfolio and Labs

**Track:** Proof

**GOAL:** Produce hireable artifacts: labs, writeups, detections, and hardened projects with READMEs.

**PREREQUISITES:** Complete enough prior phases to have material.

## 19.1 Home Lab Architecture Worth Showing

**WHY THIS EXISTS:** Hiring managers trust evidence. A documented lab with SIEM, vulnerable apps, AD or cloud identity, and your detections beats a cert list alone. Keep it legal and screenshotted.

**THE PROBLEM BEFORE THIS EXISTED:** Undocumented THM streaks. No GitHub. Cert dumps without projects.

**VISUAL LEARNING**

- [TryHackMe](https://tryhackme.com/) · [Hack The Box](https://www.hackthebox.com/) · [PortSwigger Academy](https://portswigger.net/web-security)
- [Best labs comparison 2026](https://thecybersecuritytrail.com/guide/best-hands-on-cybersecurity-labs-practice-platforms-in-2026/)
- [juice-shop/juice-shop](https://github.com/juice-shop/juice-shop)
- John Hammond lab / challenge videos for inspiration

**DETAILED EXPLANATION**

Suggested lab: hypervisor, pfSense/router VM, Windows + Linux targets, Juice Shop, Wazuh/Elastic, optional GOAD/lite AD. Document network diagram, attack paths you ran, detections you wrote, remediations you applied. Blog or GitHub writeups with ATT&CK IDs.

**THE IDEA THAT FIXED IT:** Show the loop: attack → detect → fix → retest.

**INTERNAL WORKING, STEP BY STEP**

```
 [Attacker box] --> [Targets]
       |               |
       +-----> [SIEM] <+
 README: diagram + findings + Sigma + patches
```

**REAL-WORLD ANALOGY**

A craftsman's workshop photos with before/after - not only certificates on the wall.

**COMPLEXITY / TRADE-OFFS**

| Artifact | Signal |
| --- | --- |
| Writeup + detection | Blue+red maturity |
| Hardened IaC | Engineer maturity |

**CODE IMPLEMENTATION**

```python
portfolio = ["network diagram", "3 writeups", "2 sigma rules", "1 hardened terraform/compose"]
print(portfolio)
```

**INTERVIEW PERSPECTIVE:** What belongs in a security project README? How show impact without leaking secrets?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Publish one PortSwigger lab writeup |
| Medium | SIEM + Juice Shop detection demo repo |
| Hard | Full attack/detect/fix case study with metrics |

**THE BRIDGE:** Artifacts open doors. Interviews test whether you can speak the work under pressure.

---

## 19.2 Writeups, Bug Bounty Hygiene, and Cert Timing

**WHY THIS EXISTS:** Writeups teach you twice. Bug bounty is optional income/practice with strict scope discipline. Certs (Security+, then CySA+ or PNPT, later OSCP) validate - they do not replace labs. Order: skills → cert, not the reverse.

**THE PROBLEM BEFORE THIS EXISTED:** Buying OSCP before networking basics. Public writeups that spoil active HTM boxes carelessly. Out-of-scope bounty hunting.

**VISUAL LEARNING**

- [Cybersecurity Certifications 2026](https://hackerdna.com/blog/cybersecurity-certifications)
- [Ethical hacking certs comparison 2026](https://securityelites.com/ethical-hacking-certifications/)
- Professor Messer Security+ playlists

**DETAILED EXPLANATION**

Recommended early cert: CompTIA Security+ (SY0-701) for HR screens. Blue path: CySA+. Red path: eJPT → PNPT → OSCP after serious lab hours. Write clearly: goal, steps, evidence, remediation, ATT&CK. Never violate bounty policy.

**THE IDEA THAT FIXED IT:** Certs unlock screens. Portfolios unlock offers. Labs unlock both.

**INTERNAL WORKING, STEP BY STEP**

```
 Skills in lab --> writeup --> optional cert
 Security+ early for SOC screens
 OSCP only after methodology solid
```

**REAL-WORLD ANALOGY**

Driver license after practice hours - not instead of learning to drive.

**COMPLEXITY / TRADE-OFFS**

| Cert first | Risk |
| --- | --- |
| OSCP too early | Expensive fail / shallow |
| Security+ only | Pass HR, fail technical |

**CODE IMPLEMENTATION**

```python
paths = {
  "soc": ["Security+", "CySA+", "labs+SIEM portfolio"],
  "red": ["eJPT", "PNPT", "OSCP", "writeups"],
  "seceng": ["Security+", "cloud cert optional", "AppSec+cloud projects"],
}
print(paths["seceng"])
```

**INTERVIEW PERSPECTIVE:** When take OSCP? Security+ worth it? How talk about bounty work ethically?

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | Pick your path: SOC / SecEng / Red and list 5 milestones |
| Medium | Draft Security+ study plan mapped to this roadmap |
| Hard | Publish a portfolio index README linking all artifacts |

**THE BRIDGE:** Portfolio ready. Now survive interviews: technical, behavioral, and design.

---

> **Phase 19 complete?** [Build the aligned project](./Projects.md#L4376) · [Continue to Phase 20](#phase-20---interview-mastery-for-cybersecurity-roles)

<a id="phase-20"></a>

# PHASE 20 - Interview Mastery for Cybersecurity Roles

**Track:** Hire

**GOAL:** Explain security end-to-end under time pressure for Security Engineer, SOC, and junior pentester interviews.

**PREREQUISITES:** Phase 19 artifacts you can discuss deeply.

## 20.1 Technical Drills Across Blue, Red, and SecEng

**WHY THIS EXISTS:** Interviews probe fundamentals: TLS, IAM, OWASP, ATT&CK, Linux, networking, and a deep dive into your project. Buzzwords without mechanics fail. Practice aloud.

**THE PROBLEM BEFORE THIS EXISTED:** Memorized cert dumps. Cannot explain a writeup you copied. Freeze on "walk me through a web request."

**VISUAL LEARNING**

- [Complete CyberSecurity Roadmap 2026 (Sheryians)](https://www.youtube.com/watch?v=U-mAqnc6ZkI)
- [How to Become a SOC Analyst 2026](https://www.infosecjobboard.com/blog/how-to-become-soc-analyst-2026)
- Record yourself explaining SQLi fix + Sigma rule + IAM least privilege (10 min total)

**DETAILED EXPLANATION**

Drill list: CIA examples, TCP handshake, DNS, hash vs encrypt, OAuth vs session, IDOR, SSRF, firewall allow rules, CVSS limits, ATT&CK tactic for phishing, IR first hour, cloud public bucket story, container as root risk. Always connect to your lab evidence.

**THE IDEA THAT FIXED IT:** Clarity under pressure beats trivia volume.

**INTERNAL WORKING, STEP BY STEP**

```
 Question --> define --> why exists --> how works
 --> trade-off --> example from YOUR lab
```

**REAL-WORLD ANALOGY**

A guide who has hiked the trail, not only read the brochure.

**COMPLEXITY / TRADE-OFFS**

| Failure | Fix |
| --- | --- |
| Tool laundry list | Teach mechanisms |
| No examples | Use portfolio |

**CODE IMPLEMENTATION**

```python
drills = ["TLS", "IDOR", "Sigma", "Kerberos idea", "contain ransomware", "IAM * policy"]
for d in drills:
    print("explain:", d)
```

**INTERVIEW PERSPECTIVE:** This section is the interview - timed verbal answers with trade-offs.

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | 30 definitions in one sitting |
| Medium | 45-min mock: networking + OWASP + your project |
| Hard | Blue-team case: alerts to containment narrative |

**THE BRIDGE:** Many senior screens add design: "Secure this system." Practice structured security architecture answers.

---

## 20.2 Security System Design and Behavioral Stories

**WHY THIS EXISTS:** "Design authentication for a SaaS" or "Detect ransomware in our fleet" tests judgment: assets, threats, controls, telemetry, residual risk, rollout. Behavioral STAR stories prove you collaborated and learned from incidents/labs.

**THE PROBLEM BEFORE THIS EXISTED:** Diagrams with only a firewall icon. No logging. No abuse cases. Blaming others in stories.

**VISUAL LEARNING**

- [Vibe Engines Security Engineer Roadmap](https://vibeengines.com/roadmap/security-engineer)
- Whiteboard: secure a URL shortener; then a CI/CD to K8s path

**DETAILED EXPLANATION**

Clarify users/assets/threats. Propose controls layered (identity, app, network, data, detect, respond). Name trade-offs and metrics. STAR: situation, task, action, result - especially a time you fixed a finding, tuned a noisy alert, or stopped a risky change.

**THE IDEA THAT FIXED IT:** Design for misuse and measurement first - product features second.

**INTERNAL WORKING, STEP BY STEP**

```
 Requirements --> assets --> threats --> controls
 --> telemetry --> IR hooks --> residual risk --> iterate
```

**REAL-WORLD ANALOGY**

City planning with fire codes and CCTV - not only a pretty skyline.

**COMPLEXITY / TRADE-OFFS**

| Overcontrol | Undercontrol |
| --- | --- |
| Unusable product | Inevitable breach |

**CODE IMPLEMENTATION**

```python
checklist = ["assets","threats","IAM","appsec","network","data","detect","respond","metrics"]
print(" -> ".join(checklist))
```

**INTERVIEW PERSPECTIVE:** Ask clarifying questions. State assumptions. Offer MVP hardening then next iterations.

**PRACTICE PROBLEMS**

| Difficulty | Task |
| --- | --- |
| Easy | STAR story from a lab failure you fixed |
| Medium | 30-min design: employee VPN replacement with ZTNA ideas |
| Hard | Full loop: design + ATT&CK coverage + IR runbook outline |

**THE BRIDGE:** Production invents the next limitation - a new SaaS integration, a zero-day, a cloud region outage - and that limitation becomes your next concept. Keep the habit: what broke, why, what we invent next.

---

> **Phase 20 complete?** [Build the aligned project](./Projects.md#L4397) · [Return to the phase index](#phase-index)

---

## Appendix A - Suggested Path Splits

**If you want SOC Analyst first**

1 → 2 → 3 → 4 → 5 → 6 → 8 → 9 → 10 → 13 → 14 → 19 → 20
(Add Security+ / CySA+. Skim 7 and 11 for attacker empathy.)

**If you want Security Engineer / AppSec / Cloud**

1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 15 → 16 → 18 → 19 → 20
(Add web labs heavily; cloud IAM projects.)

**If you want Penetration Tester / Red Team**

1 → 2 → 3 → 4 → 5 → 6 → 7 → 10 → 11 → 12 → 13 (skim detections) → 19 → 20
(eJPT → PNPT → OSCP only after serious lab hours. Never skip ethics.)

**If you want DFIR specialty**

1 → 2 → 3 → 4 → 6 → 9 → 12 (concepts) → 13 → 14 → 17 → 19 → 20

**Platform ladder (authorized labs)**

[OverTheWire Bandit](https://overthewire.org/wargames/bandit/) → [picoCTF](https://picoctf.org/) / [PortSwigger](https://portswigger.net/web-security) → [TryHackMe](https://tryhackme.com/) → [Hack The Box](https://www.hackthebox.com/) → specialized AD/cloud labs

---

## Appendix B - Resource Index (YouTube + GitHub + Labs)

*Gathered and verified via Composio Search / YouTube / GitHub toolkits during roadmap authoring (session research, 2026).*

### Flagship GitHub

| Resource | Why |
| --- | --- |
| [HackTricks-wiki/hacktricks](https://github.com/HackTricks-wiki/hacktricks) | Living pentest/enum encyclopedia |
| [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) | Web payloads and bypass notes |
| [danielmiessler/SecLists](https://github.com/danielmiessler/SecLists) | Wordlists for authorized testing |
| [juice-shop/juice-shop](https://github.com/juice-shop/juice-shop) | Modern vulnerable web app |
| [SigmaHQ/sigma](https://github.com/SigmaHQ/sigma) | Portable detections |
| [redcanaryco/atomic-red-team](https://github.com/redcanaryco/atomic-red-team) | Safe technique tests |
| [fabacab/awesome-cybersecurity-blueteam](https://github.com/fabacab/awesome-cybersecurity-blueteam) | Blue team toolkit list |
| [meirwah/awesome-incident-response](https://github.com/meirwah/awesome-incident-response) | IR tools |
| [sottlmarek/DevSecOps](https://github.com/sottlmarek/DevSecOps) | DevSecOps library |
| [brootware/awesome-cyber-security-university](https://github.com/brootware/awesome-cyber-security-university) | Free learning path list |
| [0xsyr0/Awesome-Cybersecurity-Handbooks](https://github.com/0xsyr0/Awesome-Cybersecurity-Handbooks) | Red team notes collection |
| [decalage2/awesome-security-hardening](https://github.com/decalage2/awesome-security-hardening) | Hardening guides |
| [lissy93/personal-security-checklist](https://github.com/lissy93/personal-security-checklist) | Personal security hygiene |
| [nakov/Practical-Cryptography-for-Developers-Book](https://github.com/nakov/Practical-Cryptography-for-Developers-Book) | Crypto for builders |
| [HackTricks-wiki/hacktricks-cloud](https://github.com/HackTricks-wiki/hacktricks-cloud) | Cloud attack/defense notes |

### Channels and Flagship Videos

| Topic | Resource |
| --- | --- |
| Broad intro | [CS50 Intro to Cybersecurity](https://www.youtube.com/watch?v=9HOpanT0GRs) |
| Beginner framing | [Google Cybersecurity Certificate overview](https://www.youtube.com/watch?v=_DVVNOGYtmU) · [Tech with Jono](https://www.youtube.com/watch?v=X-O1-l0gP5Q) |
| Roadmap storytelling | [Cyber with Ben](https://www.youtube.com/watch?v=b12JrM-6DBY) |
| Networking | [freeCodeCamp Network+](https://www.youtube.com/watch?v=qiQR5rTSshw) · NetworkChuck |
| Linux | [freeCodeCamp Linux](https://www.youtube.com/watch?v=sWbUDq4S6Y8) |
| Web pentest course | [freeCodeCamp Web App Pentesting](https://www.youtube.com/watch?v=2_lswM1S264) |
| Methodology | [Instructor Alton](https://www.youtube.com/watch?v=Sy_c-s5fkcc) · [Loi Liang Yang](https://www.youtube.com/watch?v=B7tTQ272OHE) |
| HTB walkthrough craft | [IppSec](https://www.youtube.com/@ippsec) |
| Deep explanations | [LiveOverflow](https://www.youtube.com/@LiveOverflow) |
| Challenges / teaching | [John Hammond](https://www.youtube.com/@_JohnHammond) |
| Cert lectures | [Professor Messer](https://www.youtube.com/@professormesser) |

### Labs and Practice Platforms

| Platform | Use for |
| --- | --- |
| [PortSwigger Web Security Academy](https://portswigger.net/web-security) | Best free web bug class depth |
| [OverTheWire](https://overthewire.org/wargames/) | Linux terminal fundamentals |
| [picoCTF](https://picoctf.org/) | Beginner CTF |
| [TryHackMe](https://tryhackme.com/) | Structured guided paths |
| [Hack The Box](https://www.hackthebox.com/) | Realistic boxes later |
| [MITRE ATT&CK](https://attack.mitre.org/) | Technique map + Navigator |
| [OWASP Top 10](https://owasp.org/Top10/) | Web risk taxonomy |
| [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/) | Builder remediations |
| [Vibe Engines Security Engineer 2026](https://vibeengines.com/roadmap/security-engineer) | Ship-oriented stations |

### Cert Ladder (do not skip labs)

| Stage | Credential | Fits |
| --- | --- | --- |
| Early HR screen | CompTIA Security+ (SY0-701) | Most first security jobs |
| Blue specialize | CompTIA CySA+ | SOC / detection |
| Red start | eJPT | Guided offensive baseline |
| Red bridge | PNPT | Practical network pentest |
| Red career marker | OSCP | After substantial lab time |

---

*Practice only on authorized targets. Stay curious. Stay legal. Follow the bridges.*
