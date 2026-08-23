# Networks Chapter Projects

One required applied project follows every chapter in the [Networks roadmap](../roadmaps/Networks.md). Projects share a storyline inside each unit, but every chapter produces its own reviewable deliverable and commit.

## Bits and links

**Shared unit storyline:** Keep one workspace for Bits and links. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="networks-phase-1-project"></a>
### NETWORKS CHAPTER 1 PROJECT

#### PROJECT: LATENCY VS THROUGHPUT LAB

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Understand *why* we network at all, what metrics matter, and why the Internet is built on packet switching rather than dedicated circuits.

**Chapter topic:** Network Thinking: Shared Pipes, Shared Failure

**Unit storyline:** Continue the **Bits and links** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Latency vs Throughput Lab as a focused exercise for Network Thinking. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **1.1 — What a Network Is - Hosts, Links, and the Job to Be Done:** Apply What a Network Is - Hosts, Links, and the Job to Be Done to the controlled example and record the reasoning and result.
- **1.2 — Bandwidth, Latency, Throughput - and Packet Switching:** Apply Bandwidth, Latency, Throughput - and Packet Switching to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Send controlled local traffic at different message sizes and delays, then calculate and chart latency, throughput, jitter, and loss.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Send controlled local traffic at different message sizes and delays, then calculate and chart latency, throughput, jitter, and loss.
- Give the user one clear main action and keep all other features secondary.
- Use Network Thinking in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create latency-vs-throughput-lab with src, captures, topology, and tests folders; keep the lab isolated.
2. Send controlled local traffic at different message sizes and delays, then calculate and chart latency, throughput, jitter, and loss.
3. Use Network Thinking in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for Network Thinking.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/bits/chapter-1-latency-vs-throughput-lab
git commit -m "feat(latency-vs-throughput-lab): complete chapter 1 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 1](../roadmaps/Networks.md#phase-1) | [CONTINUE TO NETWORKS CHAPTER 2](../roadmaps/Networks.md#phase-2)


<a id="networks-phase-2-project"></a>
### NETWORKS CHAPTER 2 PROJECT

#### PROJECT: NOISY LINK SIMULATOR

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Understand how bits become signals, why media choice matters, and which limits no protocol above can wish away.

**Chapter topic:** Physical Layer: Putting Bits on a Medium

**Unit storyline:** Continue the **Bits and links** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Noisy Link Simulator as a focused exercise for Physical Layer. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **2.1 — Transmission Media, Signals, and Noise:** Configure or simulate Transmission Media, Signals, and Noise, capture observable evidence, and restore the safe baseline.
- **2.2 — Bandwidth-Delay, Encoding Limits, and Why Links Still Fail:** Configure or simulate Bandwidth-Delay, Encoding Limits, and Why Links Still Fail, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Encode a bit stream, inject configurable flips or burst errors, and compare parity, checksum, and CRC detection results.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Encode a bit stream, inject configurable flips or burst errors, and compare parity, checksum, and CRC detection results.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Physical Layer explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create noisy-link-simulator with src, captures, topology, and tests folders; keep the lab isolated.
2. Encode a bit stream, inject configurable flips or burst errors, and compare parity, checksum, and CRC detection results.
3. Represent the important states or data structures from Physical Layer explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for Physical Layer.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/bits/chapter-2-noisy-link-simulator
git commit -m "feat(noisy-link-simulator): complete chapter 2 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 2](../roadmaps/Networks.md#phase-2) | [CONTINUE TO NETWORKS CHAPTER 3](../roadmaps/Networks.md#phase-3)


<a id="networks-phase-3-project"></a>
### NETWORKS CHAPTER 3 PROJECT

#### PROJECT: ETHERNET FRAME ENCODER

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Understand framing, MAC addressing, error detection, and Ethernet as the dominant LAN technology.

**Chapter topic:** Data Link & Ethernet: Frames on a Segment

**Unit storyline:** Continue the **Bits and links** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Ethernet Frame Encoder as a focused exercise for Ethernet and Data Link. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **3.1 — Framing, MAC Addresses, and CRC:** Configure or simulate Framing, MAC Addresses, and CRC, capture observable evidence, and restore the safe baseline.
- **3.2 — Ethernet Evolution, MTU, and Collision Domains (Then vs Now):** Configure or simulate Ethernet Evolution, MTU, and Collision Domains (Then vs Now), capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Encode and decode Ethernet frames with MAC addresses, EtherType, payload, and FCS-like validation; reject malformed lengths.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Encode and decode Ethernet frames with MAC addresses, EtherType, payload, and FCS-like validation; reject malformed lengths.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Ethernet and Data Link explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create ethernet-frame-encoder with src, captures, topology, and tests folders; keep the lab isolated.
2. Encode and decode Ethernet frames with MAC addresses, EtherType, payload, and FCS-like validation; reject malformed lengths.
3. Represent the important states or data structures from Ethernet and Data Link explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for Ethernet and Data Link.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/bits/chapter-3-ethernet-frame-encoder
git commit -m "feat(ethernet-frame-encoder): complete chapter 3 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 3](../roadmaps/Networks.md#phase-3) | [CONTINUE TO NETWORKS CHAPTER 4](../roadmaps/Networks.md#phase-4)


<a id="networks-phase-4-project"></a>
### NETWORKS CHAPTER 4 PROJECT

#### PROJECT: LEARNING SWITCH SIMULATOR

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Explain how switches forward frames, why flooding exists, and how VLANs segment broadcast domains.

**Chapter topic:** Switching & VLANs

**Unit storyline:** Continue the **Bits and links** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Learning Switch Simulator as a focused exercise for Switching and VLANs. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **4.1 — MAC Learning, Flooding, and Forwarding:** Configure or simulate MAC Learning, Flooding, and Forwarding, capture observable evidence, and restore the safe baseline.
- **4.2 — VLANs, Trunks, and Broadcast Domains:** Configure or simulate VLANs, Trunks, and Broadcast Domains, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Learn source MAC-to-port mappings from incoming frames, forward or flood correctly, age entries, and isolate two simulated VLANs.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Learn source MAC-to-port mappings from incoming frames, forward or flood correctly, age entries, and isolate two simulated VLANs.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Switching and VLANs explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create learning-switch-simulator with src, captures, topology, and tests folders; keep the lab isolated.
2. Learn source MAC-to-port mappings from incoming frames, forward or flood correctly, age entries, and isolate two simulated VLANs.
3. Represent the important states or data structures from Switching and VLANs explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for Switching and VLANs.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/bits/chapter-4-learning-switch-simulator
git commit -m "feat(learning-switch-simulator): complete chapter 4 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 4](../roadmaps/Networks.md#phase-4) | [CONTINUE TO NETWORKS CHAPTER 5](../roadmaps/Networks.md#phase-5)


## Packets and routes

**Shared unit storyline:** Keep one workspace for Packets and routes. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="networks-phase-5-project"></a>
### NETWORKS CHAPTER 5 PROJECT

#### PROJECT: SUBNET CALCULATOR

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Master IPv4 addressing, CIDR notation, subnet math, and why IPv6 exists.

**Chapter topic:** IP Addressing & Subnetting

**Unit storyline:** Continue the **Packets and routes** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Subnet Calculator as a focused exercise for IP Addressing and Subnetting. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **5.1 — IPv4 Addresses, CIDR, and Subnet Math:** Apply IPv4 Addresses, CIDR, and Subnet Math to the controlled example and record the reasoning and result.
- **5.2 — IPv6, Special Addresses, and Why Hierarchy Matters:** Apply IPv6, Special Addresses, and Why Hierarchy Matters to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Convert prefix and mask formats, calculate network/broadcast/host ranges, split a network into subnets, and reject invalid or overlapping input.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Convert prefix and mask formats, calculate network/broadcast/host ranges, split a network into subnets, and reject invalid or overlapping input.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from IP Addressing and Subnetting explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create subnet-calculator with src, captures, topology, and tests folders; keep the lab isolated.
2. Convert prefix and mask formats, calculate network/broadcast/host ranges, split a network into subnets, and reject invalid or overlapping input.
3. Represent the important states or data structures from IP Addressing and Subnetting explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for IP Addressing and Subnetting.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/packets/chapter-5-subnet-calculator
git commit -m "feat(subnet-calculator): complete chapter 5 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 5](../roadmaps/Networks.md#phase-5) | [CONTINUE TO NETWORKS CHAPTER 6](../roadmaps/Networks.md#phase-6)


<a id="networks-phase-6-project"></a>
### NETWORKS CHAPTER 6 PROJECT

#### PROJECT: LONGEST-PREFIX ROUTER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Separate forwarding (data plane) from routing (control plane); understand longest-prefix match and protocol roles.

**Chapter topic:** Routing & Forwarding

**Unit storyline:** Continue the **Packets and routes** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Longest-Prefix Router as a focused exercise for Routing and Forwarding. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **6.1 — Forwarding Tables and Longest Prefix Match:** Apply Forwarding Tables and Longest Prefix Match to the controlled example and record the reasoning and result.
- **6.2 — RIP, OSPF, and the Role of BGP (Preview):** Apply RIP, OSPF, and the Role of BGP (Preview) to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Store CIDR routes in a table, choose the longest matching prefix for each destination, and show default and unreachable decisions.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Store CIDR routes in a table, choose the longest matching prefix for each destination, and show default and unreachable decisions.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Routing and Forwarding explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create longest-prefix-router with src, captures, topology, and tests folders; keep the lab isolated.
2. Store CIDR routes in a table, choose the longest matching prefix for each destination, and show default and unreachable decisions.
3. Represent the important states or data structures from Routing and Forwarding explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for Routing and Forwarding.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/packets/chapter-6-longest-prefix-router
git commit -m "feat(longest-prefix-router): complete chapter 6 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 6](../roadmaps/Networks.md#phase-6) | [CONTINUE TO NETWORKS CHAPTER 7](../roadmaps/Networks.md#phase-7)


<a id="networks-phase-7-project"></a>
### NETWORKS CHAPTER 7 PROJECT

#### PROJECT: DHCP/NAT TABLE SIMULATOR

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Explain how hosts discover MAC addresses, get IPs automatically, diagnose paths, and share public IPv4 via NAT.

**Chapter topic:** ARP, DHCP, ICMP, and NAT

**Unit storyline:** Continue the **Packets and routes** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build DHCP/NAT Table Simulator as a focused exercise for ARP, DHCP, ICMP, and NAT. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **7.1 — ARP, DHCP, and ICMP:** Configure or simulate ARP, DHCP, and ICMP, capture observable evidence, and restore the safe baseline.
- **7.2 — NAT, PAT, and the End of Easy Peer Connectivity:** Configure or simulate NAT, PAT, and the End of Easy Peer Connectivity, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Simulate DHCP leases and NAT mappings with allocation, expiry, renewal, collision prevention, and inbound/outbound lookup.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Simulate DHCP leases and NAT mappings with allocation, expiry, renewal, collision prevention, and inbound/outbound lookup.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from ARP, DHCP, ICMP, and NAT explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create dhcp-nat-table-simulator with src, captures, topology, and tests folders; keep the lab isolated.
2. Simulate DHCP leases and NAT mappings with allocation, expiry, renewal, collision prevention, and inbound/outbound lookup.
3. Represent the important states or data structures from ARP, DHCP, ICMP, and NAT explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for ARP, DHCP, ICMP, and NAT.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/packets/chapter-7-dhcp-nat-table-simulator
git commit -m "feat(dhcp-nat-table-simulator): complete chapter 7 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 7](../roadmaps/Networks.md#phase-7) | [CONTINUE TO NETWORKS CHAPTER 8](../roadmaps/Networks.md#phase-8)


<a id="networks-phase-8-project"></a>
### NETWORKS CHAPTER 8 PROJECT

#### PROJECT: PACKET ENCAPSULATION VISUALIZER

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Unify what you built into OSI vs TCP/IP models and practice encapsulation end to end.

**Chapter topic:** Layered Models: OSI and TCP/IP

**Unit storyline:** Continue the **Packets and routes** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Packet Encapsulation Visualizer as a focused exercise for OSI and TCP/IP Models. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **8.1 — OSI vs TCP/IP and Why Layering Won:** Apply OSI vs TCP/IP and Why Layering Won to the controlled example and record the reasoning and result.
- **8.2 — Ports, Sockets Preview, and Multiplexing:** Apply Ports, Sockets Preview, and Multiplexing to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Wrap an application message through transport, IP, Ethernet, and physical representations, then unwrap it with field explanations.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Wrap an application message through transport, IP, Ethernet, and physical representations, then unwrap it with field explanations.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by OSI and TCP/IP Models, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create packet-encapsulation-visualizer with src, captures, topology, and tests folders; keep the lab isolated.
2. Wrap an application message through transport, IP, Ethernet, and physical representations, then unwrap it with field explanations.
3. Show the part of the data or system explained by OSI and TCP/IP Models, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for OSI and TCP/IP Models.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/packets/chapter-8-packet-encapsulation-visualizer
git commit -m "feat(packet-encapsulation-visualizer): complete chapter 8 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 8](../roadmaps/Networks.md#phase-8) | [CONTINUE TO NETWORKS CHAPTER 9](../roadmaps/Networks.md#phase-9)


## Transport and apps

**Shared unit storyline:** Keep one workspace for Transport and apps. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="networks-phase-9-project"></a>
### NETWORKS CHAPTER 9 PROJECT

#### PROJECT: RELIABLE UDP CHAT

#### ARTIFACT TYPE

analysis

#### CHAPTER OUTCOME

Know UDP's guarantees (almost none), when to use it, and how QUIC rides on it.

**Chapter topic:** UDP: User Datagram Protocol

**Unit storyline:** Continue the **Transport and apps** shared workspace. This chapter adds a self-contained analysis deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reliable UDP Chat as a focused exercise for UDP. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **9.1 — Datagrams, Use Cases, and What You Must Handle Yourself:** Apply Datagrams, Use Cases, and What You Must Handle Yourself to the controlled example and record the reasoning and result.
- **9.2 — QUIC Preview and Congestion Responsibility:** Apply QUIC Preview and Congestion Responsibility to the controlled example and record the reasoning and result.

#### SPECIFICATION

- Build local UDP chat with sequence numbers, acknowledgements, retry limits, duplicate suppression, ordering, and timeout behavior.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build local UDP chat with sequence numbers, acknowledgements, retry limits, duplicate suppression, ordering, and timeout behavior.
- Give the user one clear main action and keep all other features secondary.
- Use UDP in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create reliable-udp-chat with src, captures, topology, and tests folders; keep the lab isolated.
2. Build local UDP chat with sequence numbers, acknowledgements, retry limits, duplicate suppression, ordering, and timeout behavior.
3. Use UDP in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for UDP.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/apps/chapter-9-reliable-udp-chat
git commit -m "feat(reliable-udp-chat): complete chapter 9 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 9](../roadmaps/Networks.md#phase-9) | [CONTINUE TO NETWORKS CHAPTER 10](../roadmaps/Networks.md#phase-10)


<a id="networks-phase-10-project"></a>
### NETWORKS CHAPTER 10 PROJECT

#### PROJECT: TCP STATE TRACE

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Understand TCP's connection lifecycle, reliability machinery, flow vs congestion control, and stream framing pitfalls.

**Chapter topic:** TCP: Transmission Control Protocol

**Unit storyline:** Continue the **Transport and apps** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build TCP State Trace as a focused exercise for TCP. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **10.1 — Handshake, Reliability, and Streams:** Configure or simulate Handshake, Reliability, and Streams, capture observable evidence, and restore the safe baseline.
- **10.2 — Flow Control, Congestion Control, and HOL Blocking:** Configure or simulate Flow Control, Congestion Control, and HOL Blocking, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Capture or simulate a TCP exchange and show handshake, sequence/acknowledgement changes, retransmission, flow control, and close states.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Capture or simulate a TCP exchange and show handshake, sequence/acknowledgement changes, retransmission, flow control, and close states.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from TCP explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create tcp-state-trace with src, captures, topology, and tests folders; keep the lab isolated.
2. Capture or simulate a TCP exchange and show handshake, sequence/acknowledgement changes, retransmission, flow control, and close states.
3. Represent the important states or data structures from TCP explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for TCP.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/apps/chapter-10-tcp-state-trace
git commit -m "feat(tcp-state-trace): complete chapter 10 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 10](../roadmaps/Networks.md#phase-10) | [CONTINUE TO NETWORKS CHAPTER 11](../roadmaps/Networks.md#phase-11)


<a id="networks-phase-11-project"></a>
### NETWORKS CHAPTER 11 PROJECT

#### PROJECT: MULTI-CLIENT SOCKET SERVER

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Write real TCP/UDP clients and servers, understand blocking I/O, and frame messages on TCP streams.

**Chapter topic:** Sockets: Programming the Network

**Unit storyline:** Continue the **Transport and apps** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Multi-client Socket Server as a focused exercise for Socket Programming. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **11.1 — The Socket API - Client and Server Patterns:** Configure or simulate The Socket API - Client and Server Patterns, capture observable evidence, and restore the safe baseline.
- **11.2 — Framing, Timeouts, and Graceful Failure:** Configure or simulate Framing, Timeouts, and Graceful Failure, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Build a concurrent TCP server with length-prefixed messages, bounded clients, per-client timeout, broadcast, and graceful shutdown.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Build a concurrent TCP server with length-prefixed messages, bounded clients, per-client timeout, broadcast, and graceful shutdown.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Socket Programming in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create multi-client-socket-server with src, captures, topology, and tests folders; keep the lab isolated.
2. Build a concurrent TCP server with length-prefixed messages, bounded clients, per-client timeout, broadcast, and graceful shutdown.
3. Use Socket Programming in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for Socket Programming.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/apps/chapter-11-multi-client-socket-server
git commit -m "feat(multi-client-socket-server): complete chapter 11 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 11](../roadmaps/Networks.md#phase-11) | [CONTINUE TO NETWORKS CHAPTER 12](../roadmaps/Networks.md#phase-12)


<a id="networks-phase-12-project"></a>
### NETWORKS CHAPTER 12 PROJECT

#### PROJECT: RECURSIVE DNS RESOLVER

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Trace a DNS lookup, know major record types, and understand caching/TTL failure modes.

**Chapter topic:** DNS: The Internet's Phonebook

**Unit storyline:** Continue the **Transport and apps** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Recursive DNS Resolver as a focused exercise for DNS. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **12.1 — Resolution Path - Stub, Recursive, Authoritative:** Configure or simulate Resolution Path - Stub, Recursive, Authoritative, capture observable evidence, and restore the safe baseline.
- **12.2 — Records, Caching Pitfalls, and Trust:** Configure or simulate Records, Caching Pitfalls, and Trust, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Resolve names through root, TLD, and authoritative data in a tiny recursive resolver with cache, TTL, NXDOMAIN, and loop protection.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Resolve names through root, TLD, and authoritative data in a tiny recursive resolver with cache, TTL, NXDOMAIN, and loop protection.
- Define the accepted request or message shape and the returned success and error shapes.
- Use DNS in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create recursive-dns-resolver with src, captures, topology, and tests folders; keep the lab isolated.
2. Resolve names through root, TLD, and authoritative data in a tiny recursive resolver with cache, TTL, NXDOMAIN, and loop protection.
3. Use DNS in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for DNS.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/apps/chapter-12-recursive-dns-resolver
git commit -m "feat(recursive-dns-resolver): complete chapter 12 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 12](../roadmaps/Networks.md#phase-12) | [CONTINUE TO NETWORKS CHAPTER 13](../roadmaps/Networks.md#phase-13)


<a id="networks-phase-13-project"></a>
### NETWORKS CHAPTER 13 PROJECT

#### PROJECT: RAW HTTP EXCHANGE

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Speak HTTP/1.1 fluently and know what HTTP/2 and HTTP/3 changed.

**Chapter topic:** HTTP and the Web

**Unit storyline:** Continue the **Transport and apps** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Raw HTTP Exchange as a focused exercise for HTTP and the Web. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **13.1 — HTTP/1.1 - Methods, Status Codes, Headers, Bodies:** Configure or simulate HTTP/1.1 - Methods, Status Codes, Headers, Bodies, capture observable evidence, and restore the safe baseline.
- **13.2 — HTTP/2, HTTP/3, and Evolution Pressures:** Configure or simulate HTTP/2, HTTP/3, and Evolution Pressures, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Send and receive raw HTTP/1.1 messages over a socket and inspect method, path, headers, content length, status, and connection behavior.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Send and receive raw HTTP/1.1 messages over a socket and inspect method, path, headers, content length, status, and connection behavior.
- Give the user one clear main action and keep all other features secondary.
- Use HTTP and the Web in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create raw-http-exchange with src, captures, topology, and tests folders; keep the lab isolated.
2. Send and receive raw HTTP/1.1 messages over a socket and inspect method, path, headers, content length, status, and connection behavior.
3. Use HTTP and the Web in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for HTTP and the Web.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/apps/chapter-13-raw-http-exchange
git commit -m "feat(raw-http-exchange): complete chapter 13 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 13](../roadmaps/Networks.md#phase-13) | [CONTINUE TO NETWORKS CHAPTER 14](../roadmaps/Networks.md#phase-14)


<a id="networks-phase-14-project"></a>
### NETWORKS CHAPTER 14 PROJECT

#### PROJECT: TLS CERTIFICATE INSPECTOR

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Explain what TLS guarantees, how certificates work at a high level, and how HTTPS composes TCP + TLS + HTTP.

**Chapter topic:** TLS and HTTPS

**Unit storyline:** Continue the **Transport and apps** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build TLS Certificate Inspector as a focused exercise for TLS and HTTPS. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **14.1 — Confidentiality, Integrity, Authentication:** Configure or simulate Confidentiality, Integrity, Authentication, capture observable evidence, and restore the safe baseline.
- **14.2 — PKI Pitfalls and Operational Reality:** Configure or simulate PKI Pitfalls and Operational Reality, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Connect to an HTTPS host, print certificate subject, issuer, names, validity, chain information, and clear verification failures.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Connect to an HTTPS host, print certificate subject, issuer, names, validity, chain information, and clear verification failures.
- Give the user one clear main action and keep all other features secondary.
- Use TLS and HTTPS in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- OpenSSL.
- A modern browser.
- No programming required.

#### BUILD IT STEP BY STEP

1. Create tls-certificate-inspector with src, captures, topology, and tests folders; keep the lab isolated.
2. Connect to an HTTPS host, print certificate subject, issuer, names, validity, chain information, and clear verification failures.
3. Use TLS and HTTPS in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for TLS and HTTPS.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/apps/chapter-14-tls-certificate-inspector
git commit -m "feat(tls-certificate-inspector): complete chapter 14 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 14](../roadmaps/Networks.md#phase-14) | [CONTINUE TO NETWORKS CHAPTER 15](../roadmaps/Networks.md#phase-15)


## Scale

**Shared unit storyline:** Keep one workspace for Scale. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="networks-phase-15-project"></a>
### NETWORKS CHAPTER 15 PROJECT

#### PROJECT: PACKET FORENSICS REPORT

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Capture traffic, write useful display filters, and diagnose handshake/DNS/TLS problems from packets.

**Chapter topic:** Wireshark and Packet Analysis

**Unit storyline:** Continue the **Scale** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Packet Forensics Report as a focused exercise for Packet Analysis. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **15.1 — Capture Workflow and Display Filters:** Configure or simulate Capture Workflow and Display Filters, capture observable evidence, and restore the safe baseline.
- **15.2 — A Layered Debugging Playbook:** Configure or simulate A Layered Debugging Playbook, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Analyze a prepared packet capture, reconstruct one transaction, build a timeline, identify the failing layer, and support the conclusion with packet fields.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Analyze a prepared packet capture, reconstruct one transaction, build a timeline, identify the failing layer, and support the conclusion with packet fields.
- Define one realistic scenario, its boundaries, and the intended reader for the Packet Forensics Report.
- Collect or create the exact inputs needed to apply Packet Analysis; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Wireshark.
- A provided or self-recorded packet capture.
- No programming required.

#### BUILD IT STEP BY STEP

1. Create packet-forensics-report with src, captures, topology, and tests folders; keep the lab isolated.
2. Analyze a prepared packet capture, reconstruct one transaction, build a timeline, identify the failing layer, and support the conclusion with packet fields.
3. Collect or create the exact inputs needed to apply Packet Analysis; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Packet Analysis.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/scale/chapter-15-packet-forensics-report
git commit -m "feat(packet-forensics-report): complete chapter 15 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 15](../roadmaps/Networks.md#phase-15) | [CONTINUE TO NETWORKS CHAPTER 16](../roadmaps/Networks.md#phase-16)


<a id="networks-phase-16-project"></a>
### NETWORKS CHAPTER 16 PROJECT

#### PROJECT: WI-FI SURVEY AND HEATMAP

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Understand Wi-Fi as a shared-medium access network and how it stresses TCP assumptions.

**Chapter topic:** Wireless and Wi-Fi

**Unit storyline:** Continue the **Scale** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Wi-Fi Survey and Heatmap as a focused exercise for Wireless and Wi-Fi. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **16.1 — 802.11 Basics - SSIDs, Association, Frames:** Configure or simulate 802.11 Basics - SSIDs, Association, Frames, capture observable evidence, and restore the safe baseline.
- **16.2 — Interference, Retries, and TCP on Wi-Fi:** Configure or simulate Interference, Retries, and TCP on Wi-Fi, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Survey authorized Wi-Fi locations, record channel, signal, noise, and security, then produce a floor-plan heatmap and channel recommendation.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Survey authorized Wi-Fi locations, record channel, signal, noise, and security, then produce a floor-plan heatmap and channel recommendation.
- Define one realistic scenario, its boundaries, and the intended reader for the Wi-Fi Survey and Heatmap.
- Collect or create the exact inputs needed to apply Wireless and Wi-Fi; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- WiFi Analyzer.
- A spreadsheet.
- No programming required; survey only places where you have permission.

#### BUILD IT STEP BY STEP

1. Create wi-fi-survey-and-heatmap with src, captures, topology, and tests folders; keep the lab isolated.
2. Survey authorized Wi-Fi locations, record channel, signal, noise, and security, then produce a floor-plan heatmap and channel recommendation.
3. Collect or create the exact inputs needed to apply Wireless and Wi-Fi; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Wireless and Wi-Fi.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/scale/chapter-16-wi-fi-survey-and-heatmap
git commit -m "feat(wi-fi-survey-and-heatmap): complete chapter 16 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 16](../roadmaps/Networks.md#phase-16) | [CONTINUE TO NETWORKS CHAPTER 17](../roadmaps/Networks.md#phase-17)


<a id="networks-phase-17-project"></a>
### NETWORKS CHAPTER 17 PROJECT

#### PROJECT: REVERSE PROXY LOAD LAB

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Contrast reverse proxies, load balancers, API gateways, and CDNs; know what problem each solves.

**Chapter topic:** CDN, Load Balancers, and Edge

**Unit storyline:** Continue the **Scale** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Reverse Proxy Load Lab as a focused exercise for CDN, Load Balancers, and Edge. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **17.1 — Reverse Proxies and Load Balancing:** Configure or simulate Reverse Proxies and Load Balancing, capture observable evidence, and restore the safe baseline.
- **17.2 — CDNs, Anycast, and Edge Caching:** Configure or simulate CDNs, Anycast, and Edge Caching, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Run two local backends behind Nginx, observe balancing and health checks, stop one backend, and measure failover and cache behavior.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Run two local backends behind Nginx, observe balancing and health checks, stop one backend, and measure failover and cache behavior.
- Give the user one clear main action and keep all other features secondary.
- Use CDN, Load Balancers, and Edge in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Docker.
- Nginx.
- curl and a small local demo service.

#### BUILD IT STEP BY STEP

1. Create reverse-proxy-load-lab with src, captures, topology, and tests folders; keep the lab isolated.
2. Run two local backends behind Nginx, observe balancing and health checks, stop one backend, and measure failover and cache behavior.
3. Use CDN, Load Balancers, and Edge in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for CDN, Load Balancers, and Edge.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/scale/chapter-17-reverse-proxy-load-lab
git commit -m "feat(reverse-proxy-load-lab): complete chapter 17 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 17](../roadmaps/Networks.md#phase-17) | [CONTINUE TO NETWORKS CHAPTER 18](../roadmaps/Networks.md#phase-18)


<a id="networks-phase-18-project"></a>
### NETWORKS CHAPTER 18 PROJECT

#### PROJECT: BGP POLICY SIMULATOR

#### ARTIFACT TYPE

design

#### CHAPTER OUTCOME

Explain ASes, peering vs transit, and why BGP is policy-driven; recognize leak/hijack failure modes.

**Chapter topic:** BGP and Internet Architecture

**Unit storyline:** Continue the **Scale** shared workspace. This chapter adds a self-contained design deliverable and one reviewable commit without requiring concepts from later chapters.

Build BGP Policy Simulator as a focused exercise for BGP and Internet Architecture. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **18.1 — Autonomous Systems, Peering, and Transit:** Represent Autonomous Systems, Peering, and Transit in the design and justify one decision that depends on it.
- **18.2 — Leaks, Hijacks, RPKI - and Why Filtering Matters:** Represent Leaks, Hijacks, RPKI - and Why Filtering Matters in the design and justify one decision that depends on it.

#### SPECIFICATION

- Simulate autonomous systems exchanging prefixes with local preference, AS path, withdrawal, loop prevention, and convergence output.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Simulate autonomous systems exchanging prefixes with local preference, AS path, withdrawal, loop prevention, and convergence output.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from BGP and Internet Architecture explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create bgp-policy-simulator with src, captures, topology, and tests folders; keep the lab isolated.
2. Simulate autonomous systems exchanging prefixes with local preference, AS path, withdrawal, loop prevention, and convergence output.
3. Represent the important states or data structures from BGP and Internet Architecture explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for BGP and Internet Architecture.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/scale/chapter-18-bgp-policy-simulator
git commit -m "feat(bgp-policy-simulator): complete chapter 18 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 18](../roadmaps/Networks.md#phase-18) | [CONTINUE TO NETWORKS CHAPTER 19](../roadmaps/Networks.md#phase-19)


## Hire

**Shared unit storyline:** Keep one workspace for Hire. Each chapter below extends it with a focused artifact, evidence, and a reversible checkpoint.

<a id="networks-phase-19-project"></a>
### NETWORKS CHAPTER 19 PROJECT

#### PROJECT: AUTOMATED NETWORK LAB PORTFOLIO

#### ARTIFACT TYPE

lab

#### CHAPTER OUTCOME

Produce public proof of skill: labs, pcaps, write-ups, and basic automation.

**Chapter topic:** Labs, Portfolio, and Automation

**Unit storyline:** Continue the **Hire** shared workspace. This chapter adds a self-contained lab deliverable and one reviewable commit without requiring concepts from later chapters.

Build Automated Network Lab Portfolio as a focused exercise for Labs and Automation. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **19.1 — Build a Portfolio That Proves Networking Skill:** Configure or simulate Build a Portfolio That Proves Networking Skill, capture observable evidence, and restore the safe baseline.
- **19.2 — Network Automation Literacy:** Configure or simulate Network Automation Literacy, capture observable evidence, and restore the safe baseline.

#### SPECIFICATION

- Create one command that starts a local network topology, configures nodes, runs reachability/services tests, saves sanitized results, and tears down.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Create one command that starts a local network topology, configures nodes, runs reachability/services tests, saves sanitized results, and tears down.
- Define one realistic scenario, its boundaries, and the intended reader for the Automated Network Lab Portfolio.
- Collect or create the exact inputs needed to apply Labs and Automation; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create automated-network-lab-portfolio with src, captures, topology, and tests folders; keep the lab isolated.
2. Create one command that starts a local network topology, configures nodes, runs reachability/services tests, saves sanitized results, and tears down.
3. Collect or create the exact inputs needed to apply Labs and Automation; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for Labs and Automation.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/hire/chapter-19-automated-network-lab-portfolio
git commit -m "feat(automated-network-lab-portfolio): complete chapter 19 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 19](../roadmaps/Networks.md#phase-19) | [CONTINUE TO NETWORKS CHAPTER 20](../roadmaps/Networks.md#phase-20)


<a id="networks-phase-20-project"></a>
### NETWORKS CHAPTER 20 PROJECT

#### PROJECT: TIMED TROUBLESHOOTING DRILL

#### ARTIFACT TYPE

rehearsal

#### CHAPTER OUTCOME

Narrate networking clearly under pressure with correct layering and honest trade-offs.

**Chapter topic:** Interviews

**Unit storyline:** Continue the **Hire** shared workspace. This chapter adds a self-contained rehearsal deliverable and one reviewable commit without requiring concepts from later chapters.

Build Timed Troubleshooting Drill as a focused exercise for Interviews. Keep the data and interface small enough to finish, but implement the following behavior.

#### LESSONS PRACTICED

- **20.1 — The URL Bar Walkthrough and Core Drills:** Practice explaining or applying The URL Bar Walkthrough and Core Drills under a timer and record the evidence and correction.
- **20.2 — Design Prompts, Debugging Stories, and Soft Signals:** Practice explaining or applying Design Prompts, Debugging Stories, and Soft Signals under a timer and record the evidence and correction.

#### SPECIFICATION

- Diagnose timed DNS, route, TCP, TLS, and HTTP failures using an ordered hypothesis-and-tool checklist.
- Make every lesson mapping above visible in the artifact, evidence, or explanation.
- Keep the scope small enough to finish, reproduce, review, and reset safely.

#### DELIVERABLES

- Diagnose timed DNS, route, TCP, TLS, and HTTP failures using an ordered hypothesis-and-tool checklist.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Interviews and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12.
- Wireshark.
- Packet Tracer for topology labs; use only your own or an authorized lab network.

#### BUILD IT STEP BY STEP

1. Create timed-troubleshooting-drill with src, captures, topology, and tests folders; keep the lab isolated.
2. Diagnose timed DNS, route, TCP, TLS, and HTTP failures using an ordered hypothesis-and-tool checklist.
3. Use a metric connected to Interviews and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for Interviews.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

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
git add -- networks/hire/chapter-20-timed-troubleshooting-drill
git commit -m "feat(timed-troubleshooting-drill): complete chapter 20 project"
git log -1 --oneline
git status
```

Continue only when the deliverables and validation evidence still work and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS CHAPTER 20](../roadmaps/Networks.md#phase-20) | [RETURN TO THE NETWORKS COURSE](../roadmaps/Networks.md)


## Additional Portfolio Capstones

These synthesis projects remain optional additions to the required chapter sequence.

<a id="networks-main-portfolio-project"></a>
## NETWORKS MAIN PORTFOLIO PROJECT

#### PROJECT: OPEN NETWORK OPERATIONS LAB AND DIAGNOSTIC PORTAL

#### DESCRIPTION

An isolated small-company network lab with routing, VLANs, DNS, HTTPS, load balancing, monitoring, packet capture, and a diagnostic portal. It demonstrates networking by making normal traffic and failures visible.

#### WHO THIS IS FOR

- Junior network technician learning a safe troubleshooting order
- Small-company operator checking service and link health
- Reviewer who wants to reproduce network failures without touching a real organization

#### WHAT USERS CAN DO

- Start a multi-subnet office topology with users, services, and an edge
- Observe addresses, routes, DNS, TCP, TLS, HTTP, and load-balanced requests
- Trigger documented failures and receive ordered diagnostic hints
- Export a sanitized health dashboard without exposing the lab

#### FREE AND OPEN-SOURCE TECH STACK

- containerlab or GNS3
- FRRouting, Linux network namespaces, and Open vSwitch
- Python 3.12 with FastAPI
- BIND or CoreDNS, Nginx, and OpenSSL
- Wireshark, tcpdump, iproute2, dig, curl, and mtr
- Prometheus and Grafana
- Docker Engine or Podman; all lab software is free and open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Network Thinking:** Write service goals for latency, throughput, availability, and failure visibility before drawing the topology.
2. **Phase 2 - Physical Layer:** Model link speed, delay, noise, and loss on one path and measure how each changes application traffic.
3. **Phase 3 - Ethernet and Data Link:** Create Ethernet segments and inspect source, destination, EtherType, and payload in a local capture.
4. **Phase 4 - Switching and VLANs:** Add two VLANs, access/trunk ports, and a learning bridge; prove broadcast isolation.
5. **Phase 5 - IP Addressing and Subnetting:** Design IPv4 subnets, gateways, DHCP ranges, and reserved addresses with no overlap.
6. **Phase 6 - Routing and Forwarding:** Configure forwarding and longest-prefix routes between subnets, including a deliberate missing route.
7. **Phase 7 - ARP, DHCP, ICMP, and NAT:** Add ARP, DHCP, ICMP checks and controlled NAT at the lab edge.
8. **Phase 8 - OSI and TCP/IP Models:** Display each packet's encapsulation through application, transport, network, and link layers.
9. **Phase 9 - UDP:** Add a UDP telemetry sender, loss counter, timeout, and optional application acknowledgement.
10. **Phase 10 - TCP:** Trace a TCP connection through handshake, data transfer, retransmission, flow control, and close.
11. **Phase 11 - Socket Programming:** Create a concurrent socket service with bounded clients, timeouts, framing, and graceful shutdown.
12. **Phase 12 - DNS:** Run an internal authoritative DNS zone and a caching resolver; test success, NXDOMAIN, and expiry.
13. **Phase 13 - HTTP and the Web:** Serve the diagnostic portal through HTTP and inspect methods, headers, status codes, persistence, and errors.
14. **Phase 14 - TLS and HTTPS:** Create a local certificate authority, enable HTTPS, verify names and trust, and demonstrate one rejected certificate.
15. **Phase 15 - Packet Analysis:** Capture one working and one broken transaction and diagnose them from packets before reading application logs.
16. **Phase 16 - Wireless and Wi-Fi:** Add a simulated wireless segment, channel/interference assumptions, and a safe survey using only authorized space.
17. **Phase 17 - CDN, Load Balancers, and Edge:** Place Nginx in front of two portal instances and measure distribution, health checks, caching, and failover.
18. **Phase 18 - BGP and Internet Architecture:** Add two FRRouting autonomous systems, apply a simple BGP policy, and observe route withdrawal and convergence.
19. **PHASE 19 - Labs and Automation (REQUIRED CAPSTONE-COMPLETION STEP):** Automate lab start, tests, fault injection, sanitized captures, and teardown with one command.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Run a timed unknown-failure drill and explain the symptom-to-layer-to-tool reasoning without guessing.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `open-network-operations-lab` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: requirements, packet evidence, addressing, switching, and VLAN topology**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "feat(network-lab): establish observable routed topology"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: routing, DNS, transport, TLS, HTTP, and load-balanced services**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "feat(network-lab): integrate secure network services"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: wireless, security controls, automation, virtualization, and cloud networking**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "feat(network-lab): automate protected hybrid topology"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: monitoring, performance baselines, and ordered troubleshooting failures**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "test(network-lab): verify monitoring and fault diagnosis"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: one-command lab, sanitized captures, diagrams, and teardown evidence**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "docs(network-lab): complete network operations lab release"
git tag -a network-lab-v1.0.0 -m "First complete network-lab release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Run the entire network only on a local machine with containerlab/GNS3 and Docker or Podman; do not expose router management ports.
2. Start the topology, run the automated checks, then inject and repair one DNS, route, TLS, and backend failure.
3. Deploy Grafana and the diagnostic portal inside the lab and access them through localhost port forwarding.
4. Generate a sanitized static summary with diagrams, metrics, and packet screenshots containing no real addresses or credentials.
5. Publish only that static summary to GitHub Pages for free; keep captures and vulnerable lab services private.
6. Provide one teardown command and verify that it removes lab containers, namespaces, bridges, and temporary certificates.

> **MAIN PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 19](../roadmaps/Networks.md#phase-19) | [REVIEW NETWORKS PHASE 20](../roadmaps/Networks.md#phase-20) | [RETURN TO THE NETWORKS ROADMAP](../roadmaps/Networks.md#phase-index)
