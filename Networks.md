# The Zero-to-Hero Computer Networks Roadmap

*Mohammad Bilal's complete, self-paced path from first principles to professional-level networking - packet switching, Ethernet, IP, routing, TCP/UDP, sockets, DNS, HTTP, TLS, Wireshark, Wi-Fi, CDNs, load balancers, BGP, and hiring readiness - told as a connected story in which each new idea solves a problem left by the previous one.*

*Resources curated with Composio (web search, YouTube, GitHub) against [AlgoMaster CN roadmap](https://algomaster.io/roadmaps/cn), [Stanford CS144](https://cs144.github.io/), [Beej's Guide](https://beej.us/guide/bgnet/), and production learning centers.*

**Scope:** 40 concepts · 20 phases · connected step by step, with no artificial weekly deadline.

```
Bits → Packets → Routes → Apps → Scale → Hire
```

---

## How to Read This Document

### Start here if computer networks are completely new to you

A **network** lets devices exchange information. A **packet** is a small labeled piece of that information. A **protocol** is an agreed set of rules for the exchange. An **address** identifies where information should go, a **port** identifies the program that should receive it, a **switch** connects devices on a local network, and a **router** moves packets between networks.

When a section feels abstract, picture one message traveling from your laptop to another machine. At each step ask: What information was added? Which device read it? What choice did that device make? Use the diagrams, capture real traffic in the safe labs, and repeat the explanation until you can tell the story without reciting a list of layers.

**Words you will meet often:** a **frame** carries data across one local link; a **MAC address** identifies a network interface on that local link; an **IP address** identifies a network destination; **DNS** translates names such as `example.com` into addresses; **TCP** provides an ordered, reliable byte stream; **UDP** sends separate messages without promising delivery; **HTTP** defines web requests and responses; **TLS** protects data while it travels and verifies the server; **NAT** translates addresses at a network boundary; **bandwidth** is the available carrying capacity; **latency** is delay; **throughput** is the amount successfully delivered over time; and a **CDN** keeps copies of suitable content closer to users.

The sections are connected. Read them in order the first time because each one begins with a problem that the previous idea could not solve. Each section begins by explaining **why what you just learned wasn't enough**, and closes by showing you **the remaining problem that leads to the next idea**. Read it in order the first time through - TCP only makes sense because of what broke with bare IP datagrams, and HTTPS only makes sense because of what broke with cleartext HTTP.

**There is no clock on this document.** No week numbers, no day-by-day plan, no "finish by." Networking knowledge does not compress into a fixed number of days, and pretending otherwise is how people memorize layer lists instead of building understanding. Move at the pace your own understanding requires. The only valid unit of progress here is: *can I now explain why the previous concept wasn't enough, and how this one fixes it?*

Every concept in this roadmap answers the same set of questions, because that set of questions *is* how networking knowledge actually accumulates:

- What is it, in plain language?
- Why does it exist - what problem forced someone to invent it?
- What did people do before it existed, and what broke?
- How does it solve that problem, step by step, inside the computer or system?
- What does it cost? (Every solution trades something for something.)
- Where does its own limitation show up - and what does *that* limitation force us to invent next?

That last question is the engine of the whole roadmap. Nothing here is "just a topic to cover." Every topic is a *reaction* to the topic before it.

### Two Kinds of Work, One Shared Foundation

This document covers both **Network Engineer / Infrastructure** depth and **Software Engineer who must understand networks** depth, because they share the same basic knowledge (packets, addressing, reliability, naming) and then diverge:

| Role | Primary question | Main work |
| --- | --- | --- |
| **Network / Infra Engineer** | How does traffic *get there*, reliably, when the amount of work grows? | Switching, routing, BGP, Wireshark, firewalls, automation |
| **Software Engineer** | How do my programs *talk* across machines correctly? | Sockets, HTTP, TLS, DNS, timeouts, retries, observability |

Phases 1-14 build the shared foundation. Phases 15-18 deepen ops and internet-scale design. Phases 19-20 are portfolio and hiring. If you only write application code, finish through Phase 14 carefully, then skim 15-18 for the vocabulary of production failures. If you want infrastructure, do not skip sockets and HTTP - engineers who cannot think in applications misconfigure the networks that serve them.

### The Beginner-Friendly Pattern Every Topic Follows

Those questions are answered in the same order every single time. Once you have read one section you know the shape of all of them:

| Element | What it gives you |
| --- | --- |
| **Why You Are Learning This** | The previous concept's limitation, stated plainly |
| **See It Before You Memorize It** | Videos, interactive tools, docs, GitHub, practice - placed *here* |
| **Step-by-Step Explanation** | A precise, step-by-step explanation in words |
| **The Idea That Fixed It** | The main idea in one clear sentence that made the concept stick |
| **Internal Working, Step by Step** | A prose and diagram "animation" of what happens underneath |
| **Picture It Like This** | Something you can picture without a screen |
| **Complexity / Trade-offs** | What improved, what it cost, and why |
| **Small Working Example** | A minimal, working version you can run |
| **How to Explain This in an Interview** | What the concept looks like when it is tested |
| **Practice** | Problems graded easy to hard |
| **Why the Next Topic Is Needed** | The exact limitation that makes the next concept necessary |

**Diagram conventions.** Diagrams are plain ASCII inside code fences. `|` and `v` mean "then this happens", `+--` joins related paths, `-->` and `->` mean packet movement, `X` marks a failure point, and boxes drawn with `+---+` are hosts, routers, or headers. Time runs downward.

---

## The Whole-Journey Map

```
 PHASE 1                 PHASE 2               PHASE 3                PHASE 4
 NETWORK THINKING        PHYSICAL LAYER        DATA LINK &            SWITCHING &
                                               ETHERNET               VLANs
    |                       |                      |                      |
    v                       v                      v                      v
 Why packet switching,   Bits on wire/fiber/   Frames, MAC, CRC,     Switches, MAC
 latency vs bandwidth,   radio; media limits   Ethernet, errors      tables, broadcast
 topologies                                                          domains, VLANs

 PHASE 5                 PHASE 6               PHASE 7                PHASE 8
 IP ADDRESSING &         ROUTING &             ARP, DHCP, ICMP,       LAYERED MODELS
 SUBNETTING              FORWARDING            NAT                    (OSI / TCP-IP)
    |                       |                      |                      |
    v                       v                      v                      v
 IPv4/IPv6, CIDR,        Longest-prefix        Glue protocols that   Encapsulation as
 host vs network         match, RIP/OSPF/BGP   make IP usable daily  the universal trick

 PHASE 9                 PHASE 10              PHASE 11               PHASE 12
 UDP                     TCP                   SOCKETS                DNS
    |                       |                      |                      |
    v                       v                      v                      v
 Fast, connectionless    Handshake, ACKs,      The programmer's API  Names → addresses,
 datagrams               congestion, streams   to the transport      records, resolvers

 PHASE 13                PHASE 14              PHASE 15               PHASE 16
 HTTP & THE WEB          TLS & HTTPS           WIRESHARK &            WIRELESS (Wi-Fi)
    |                       |                  PACKET ANALYSIS            |
    v                       v                      |                      v
 Request/response,       Confidentiality,          v                 Shared medium,
 versions, cookies       certificates, PKI    Capture, filter,       associations,
                                              diagnose               roaming limits

 PHASE 17                PHASE 18              PHASE 19               PHASE 20
 CDN, LB & EDGE          BGP & INTERNET        LABS, PORTFOLIO &      INTERVIEWS
    |                    ARCHITECTURE          AUTOMATION                 |
    v                       |                      |                      v
 Proxies, anycast,          v                      v                 URL bar walkthrough,
 scale-out               How ASNs peer,        Build, capture,       design prompts,
                         the real Internet     automate, ship        debugging out loud
```

---

## Phase Index

| # | Phase | Goal | You'll be ready to move on when you can... |
| --- | --- | --- | --- |
| 01 | [Network Thinking](#phase-1---network-thinking-shared-pipes-shared-failure) | See networks as shared unreliable pipes | Contrast circuit vs packet switching and name latency vs bandwidth |
| 02 | [Physical Layer](#phase-2---physical-layer-putting-bits-on-a-medium) | Know how bits actually move | Explain why media choice bounds speed and distance |
| 03 | [Data Link & Ethernet](#phase-3---data-link--ethernet-frames-on-a-segment) | Move frames on one segment | Draw a frame, explain MAC + CRC, and when CRC fails |
| 04 | [Switching & VLANs](#phase-4---switching--vlans) | Scale a LAN without flooding forever | Explain MAC learning and why VLANs split broadcast domains |
| 05 | [IP & Subnetting](#phase-5---ip-addressing--subnetting) | Address hosts globally | Compute network/broadcast for a CIDR and justify a subnet plan |
| 06 | [Routing](#phase-6---routing--forwarding) | Move packets between networks | Trace longest-prefix match and contrast RIP/OSPF/BGP roles |
| 07 | [ARP / DHCP / ICMP / NAT](#phase-7---arp-dhcp-icmp-and-nat) | Make IP usable on real LANs | Explain why NAT breaks inbound connects and what ICMP is for |
| 08 | [Layered Models](#phase-8---layered-models-osi-and-tcpip) | Hold the whole stack in one mental model | Walk encapsulation for one HTTP request hop by hop |
| 09 | [UDP](#phase-9---udp-user-datagram-protocol) | Ship datagrams with minimal ceremony | Know when UDP is the right trade and what you must handle yourself |
| 10 | [TCP](#phase-10---tcp-transmission-control-protocol) | Get reliable ordered streams | Explain handshake, ACKs, flow vs congestion control, HOL blocking |
| 11 | [Sockets](#phase-11---sockets-programming-the-network) | Program the transport | Write a TCP echo client/server and print the four-tuple |
| 12 | [DNS](#phase-12---dns-the-internets-phonebook) | Resolve names | Trace a recursive lookup and read common record types |
| 13 | [HTTP](#phase-13---http-and-the-web) | Speak the web's application protocol | Craft a raw HTTP/1.1 exchange and contrast HTTP/2 and /3 |
| 14 | [TLS & HTTPS](#phase-14---tls-and-https) | Encrypt and authenticate channels | Explain handshake goals and what a certificate actually proves |
| 15 | [Wireshark](#phase-15---wireshark-and-packet-analysis) | See the truth on the wire | Capture a handshake and filter to the failing exchange |
| 16 | [Wireless](#phase-16---wireless-and-wi-fi) | Understand shared-medium networks | Explain association, interference, and why Wi-Fi loss ≠ congestion |
| 17 | [CDN, LB & Edge](#phase-17---cdn-load-balancers-and-edge) | Scale services at the edge | Contrast CDN, reverse proxy, and load balancer jobs |
| 18 | [BGP & Internet](#phase-18---bgp-and-internet-architecture) | See how the Internet is glued | Explain AS, peering, and why BGP is policy more than shortest path |
| 19 | [Labs & Portfolio](#phase-19---labs-portfolio-and-automation) | Prove skill with artifacts | Ship captures, labs, and a public write-up |
| 20 | [Interviews](#phase-20---interviews) | Get hired | Narrate "what happens when you type a URL" with trade-offs |

### Anchor Resources (bookmark these)

- Structured map: [AlgoMaster Computer Networks Roadmap](https://algomaster.io/roadmaps/cn)
- Build TCP yourself: [Stanford CS144](https://cs144.github.io/) · [PKUFlyingPig/CS144-Computer-Network](https://github.com/PKUFlyingPig/CS144-Computer-Network)
- Socket bible: [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/html/) · [beejjorgensen/bgnet](https://github.com/beejjorgensen/bgnet)
- Concepts (Python-friendly): [Beej's Guide to Network Concepts](https://beej.us/guide/bgnet0/html/)
- Free textbook: [An Introduction to Computer Networks (Loyola)](https://intronetworks.cs.luc.edu/)
- Labs: [TCP/IP Essentials lab book site](https://ffund.github.io/tcp-ip-essentials/)
- Curated list: [nyquist/awesome-networking](https://github.com/nyquist/awesome-networking)
- Automation list: [networktocode/awesome-network-automation](https://github.com/networktocode/awesome-network-automation)
- Practical zero-to-hero repo: [OfekiAlm/practical-networking-from-zero-to-hero](https://github.com/OfekiAlm/practical-networking-from-zero-to-hero/)
- Python examples: [brandon-rhodes/fopnp](https://github.com/brandon-rhodes/fopnp)
- UNP source: [unpbook/unpv13e](https://github.com/unpbook/unpv13e)
- Capture tools: [caesar0301/awesome-pcaptools](https://github.com/caesar0301/awesome-pcaptools)
- Packet Tracer: [Cisco Packet Tracer](https://www.netacad.com/courses/packet-tracer)
- Wireshark: [wireshark.org](https://www.wireshark.org/) · [Sample Captures](https://wiki.wireshark.org/SampleCaptures)
- Cloudflare Learning: [What is the OSI model](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/) · [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) · [TLS](https://www.cloudflare.com/learning/ssl/what-is-tls/)
- High Performance Browser Networking (free): [hpbn.co](https://hpbn.co/)

---

<a id="phase-1"></a>

# PHASE 1 - Network Thinking: Shared Pipes, Shared Failure

**Track:** Foundations

**WHAT YOU WILL BE ABLE TO DO:** Understand *why* we network at all, what metrics matter, and why the Internet is built on packet switching rather than dedicated circuits.

**WHAT YOU SHOULD KNOW FIRST:** Curiosity and a machine that can run a terminal. No prior networking required.

## 1.1 What a Network Is - Hosts, Links, and the Job to Be Done

**WHY YOU ARE LEARNING THIS - WHERE THE ROADMAP STARTS:** Two programs on different machines share no memory. The only way they can cooperate is by sending messages across some physical medium. Every later protocol - Ethernet, IP, TCP, HTTP - exists to make that message exchange *possible*, then *scalable*, then *reliable*, then *named*, then *secure*. If you never see that single job clearly, you will treat networking as trivia instead of engineering.

**THE PROBLEM THIS SOLVES:** Dedicated point-to-point wires between every pair of machines do not scale. Telephone-style **circuit switching** reserved a path for the duration of a call: great for continuous voice, catastrophic for bursty computer traffic that sits idle most of the time and then spikes. Without a shared network abstraction, every application would reinvent addressing, routing, and failure handling.

**SEE IT BEFORE YOU MEMORIZE IT**

- Best animated explanation: [What is OSI Model | Real World Examples (ByteByteGo)](https://www.youtube.com/watch?v=0y6FtKsg6J4) - anchors "network" to devices you already use
- Alternative: [TCP / IP in 50 seconds (NeetCodeIO)](https://www.youtube.com/watch?v=zDmIuTl6Wmg) - the stack as a one-breath overview before we unpack it
- Another angle: [Network Engineer Roadmap from Zero to Hero](https://rajuginni.com/devops/network-engineer-roadmap/) - role map for people aiming at infra careers
- Interactive: [Cisco Packet Tracer](https://www.netacad.com/courses/packet-tracer) - place two PCs and a switch; watch a ping cross a link you built
- Second interactive: [AlgoMaster CN Roadmap](https://algomaster.io/roadmaps/cn) - the topic map this document expands into a chain
- Written: [An Introduction to Computer Networks](https://intronetworks.cs.luc.edu/) - free textbook, start at chapter 1
- GitHub: [nyquist/awesome-networking](https://github.com/nyquist/awesome-networking) - curated resource index
- Practice: Draw your home network: modem/ONT → router → Wi-Fi → laptop/phone. Label which boxes you control.

**STEP-BY-STEP EXPLANATION**

A **computer network** is a set of **hosts** (end systems: phones, laptops, servers) connected by **links** (copper, fiber, radio) through optional **middleboxes** (switches, routers, firewalls, load balancers). The unit of work is not "keep a continuous channel open." It is "deliver discrete messages under constraints." Those constraints are physical (finite speed of light and bandwidth), economic (shared infrastructure), and adversarial (loss, delay, reordering, eavesdropping).

Three metrics dominate every design conversation:

- **Bandwidth / throughput** - bits per second you can push when the pipe is full.
- **Latency / RTT** - time for a bit (or a request/response) to go and often come back.
- **Reliability** - probability that what was sent is what arrives, intact and in time.

Applications care about different mixes. A file download loves bandwidth. A game loves latency. A bank transfer loves reliability. Networking is the art of sharing one physical world among applications with incompatible wishes.

**THE MAIN IDEA IN SIMPLE WORDS:** Stop thinking "a wire between two programs." Think "a shared unreliable messenger service with addresses." Once that model is in place, protocols become policies for how the messenger should behave.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Without a network abstraction:

   App A  ============================  App B
          (private wire forever)
   Cost: O(n^2) wires for n hosts. Idle capacity wasted.


 With a shared network:

   App A ----+                    +---- App B
             |                    |
          +--+--+              +--+--+
          |Host |              |Host |
          +--+--+              +--+--+
             |                    |
             +------ NETWORK -----+
                     (shared)


 The network's contract (aspirational):
   "Give me bytes + a destination address.
    I will try to deliver them.
    I may lose, delay, reorder, or duplicate."
```

**PICTURE IT LIKE THIS**

A city road system: cars (packets) share streets (links). Traffic lights and signs (protocols) coordinate. Rush hour (congestion) slows everyone. A private driveway between every house would "work" and bankrupt the city.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | What it buys | What it costs |
| --- | --- | --- |
| Private wires everywhere | Predictable performance | Impossible cost and wiring |
| Shared packet network | Statistical multiplexing, scale | Variable latency, loss, complexity |
| Optimize only for bandwidth | Fat pipes | Interactive apps feel terrible |
| Optimize only for latency | Snappy UX | Waste capacity on tiny messages |

**SMALL WORKING EXAMPLE**

```python
# Networking starts as a thought experiment you can still measure locally.
import time
import urllib.request

def rough_rtt_and_size(url: str) -> tuple[float, int]:
    t0 = time.perf_counter()
    with urllib.request.urlopen(url, timeout=10) as resp:
        body = resp.read()
    rtt = time.perf_counter() - t0
    return rtt, len(body)

rtt, n = rough_rtt_and_size("https://example.com")
print(f"approx RTT+transfer: {rtt*1000:.1f} ms, bytes: {n}")
# This is NOT pure RTT (includes TLS + download), which is the point:
# real "speed" is always a mix of latency and bandwidth.
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "What is a computer network?" Weak answer: devices connected together. Strong answer: hosts exchanging messages over shared links under loss/delay constraints, with protocols providing addresses, multiplexing, and reliability *as needed*. Follow-up: "Why not circuit switching for the Internet?" - bursty traffic and scale.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | List five devices on your network and classify each as host or middlebox |
| Easy | For video call vs bulk backup, which metric matters more and why? |
| Medium | Estimate: 1 MB over a 100 ms RTT, 10 Mbps link - is latency or bandwidth the bottleneck? |
| Hard | Read AlgoMaster's Foundations section and rewrite it as a bridge chain (each topic forces the next) |

**WHY THE NEXT TOPIC IS NEEDED - Metrics & Packet Switching:** Knowing that machines share a messenger is not enough. We still need precise language for *how well* the messenger works, and a decisive answer to circuit vs packet switching - the fork that created the Internet.

---

## 1.2 Bandwidth, Latency, Throughput - and Packet Switching

**WHY YOU ARE LEARNING THIS:** People say "the network is slow" and mean three different failures. Separately, circuit switching cannot economically serve bursty computer traffic. **Packet switching** chops messages into independently routed chunks so links can be shared statistically. That choice is the root of nearly every later headache (loss, reordering, congestion) and nearly every later invention (TCP, buffers, QoS).

**THE PROBLEM THIS SOLVES:** Phone networks reserved end-to-end circuits. Fine for continuous voice. Computer traffic is silent, then floods. Reserved circuits sat idle while other users waited. Message switching (store whole messages at hops) added huge delay. Something had to multiplex better.

**SEE IT BEFORE YOU MEMORIZE IT**

- Best animated: [Understanding Routing! (Sabin Civil Engineering)](https://www.youtube.com/watch?v=gQtgtKtvRdo) - packets traveling a path (routing comes later; the *packet* idea is visible here)
- Alternative: [Routers, Switches, Packets and Frames (NGT Academy)](https://www.youtube.com/watch?v=zhlMLRNY5-4) - vocabulary of chunks on the wire
- Another angle: [High Performance Browser Networking - Latency & Bandwidth](https://hpbn.co/primer-on-latency-and-bandwidth/) - the best written primer in the industry
- Interactive: Use `ping` and `curl -w` locally to feel RTT vs transfer time
- Written: [Cloudflare Learning - What is latency?](https://www.cloudflare.com/learning/performance/glossary/what-is-latency/)
- GitHub: [OfekiAlm/practical-networking-from-zero-to-hero](https://github.com/OfekiAlm/practical-networking-from-zero-to-hero/)
- Practice: Compare `ping example.com` RTT to downloading a large file; write one paragraph on which limit you hit

**STEP-BY-STEP EXPLANATION**

**Latency** is delay. Propagation delay is distance / signal speed. Serialization delay is packet size / bandwidth. Queuing delay is waiting in buffers. Processing delay is device compute. **Bandwidth** is capacity. **Throughput** is what you actually achieve after loss and protocol overhead. **Goodput** is application-useful bytes per second.

**Packet switching** splits data into packets, each with addressing headers. Links are shared. Multiplexing is statistical: when you are quiet, someone else uses the wire. The costs are fundamental: packets can queue (variable delay), overflow buffers (loss), take different paths (reordering), and arrive duplicated. The entire Transport layer exists because of these costs.

Circuit switching still appears inside networks (optical wavelengths, telephone cores, some QoS reservations), but the Internet's *service model* to applications is packet-switched best effort.

**THE MAIN IDEA IN SIMPLE WORDS:** Chop communication into addressed packets and share links statistically. Accept unreliability at the bottom; add reliability only where applications need it (the end-to-end argument).

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Delay budget for one packet:

   total ≈ processing + queueing + serialization + propagation

   serialization = bits_in_packet / link_bandwidth
   propagation   = distance / (≈ 2e8 m/s in fiber)


 Circuit switching:

   Caller ----[reserved path]---- Callee
   While reserved, idle capacity cannot help anyone else.


 Packet switching:

   Msg: [=======BIG MESSAGE=======]
          | chunk | chunk | chunk |
          v       v       v
   Packet1 Packet2 Packet3  -- independently forwarded
        \     |      /
         \    |     /
          +---+---+
          | shared |
          |  link  |
          +--------+

   Burst from A uses the link; then burst from B; nobody holds it idle.
```

**PICTURE IT LIKE THIS**

A highway vs a private rail car reserved for your whole trip. Highways waste less when traffic is bursty; they also have jams, accidents, and unpredictable arrival times. TCP is the seatbelt and the re-drive-when-crashed policy.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | What it buys | What it costs |
| --- | --- | --- |
| Packet switching | Scale, efficiency for bursty traffic | Loss, jitter, reordering |
| Huge packets | Lower header overhead | Higher serialization delay, worse loss impact |
| Tiny packets | Lower per-packet delay | Header bloat, more PPS load |
| Big router buffers | Absorb bursts | Bufferbloat (latency inflation) |

**SMALL WORKING EXAMPLE**

```python
# Feel serialization delay vs bandwidth with a toy model.
def serialization_delay_ms(packet_bytes: int, bandwidth_mbps: float) -> float:
    bits = packet_bytes * 8
    seconds = bits / (bandwidth_mbps * 1_000_000)
    return seconds * 1000

for size in (64, 1500, 65535):
    print(size, "B @ 1Mbps ->", round(serialization_delay_ms(size, 1), 3), "ms")
    print(size, "B @ 1Gbps ->", round(serialization_delay_ms(size, 1000), 6), "ms")
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "Difference between bandwidth and latency?" and "Why packet switching?" are classic screens. Add bufferbloat if you want senior signal: big buffers raise latency under load even when throughput looks fine.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Define bandwidth, throughput, latency, jitter in one sentence each |
| Medium | A 1500-byte packet on a 10 Mbps link - serialization delay? |
| Medium | Two paths: 10ms RTT 1Mbps vs 100ms RTT 100Mbps - which wins for a 1KB RPC? for a 1GB file? |
| Hard | Read HPBN latency chapter and explain why mobile networks feel "slow" even on "fast" links |

**WHY THE NEXT TOPIC IS NEEDED - the Physical Layer:** Packet switching assumes we can put bits onto a medium and get them off. We have not yet asked what that medium *is*, what noise does to bits, or why distance and frequency bound everything above. That is the Physical layer.

---

> **Phase 1 complete?** [Build the aligned project](./Projects.md#networks-phase-1-project) · [Continue to Phase 2](#phase-2---physical-layer-putting-bits-on-a-medium)

<a id="phase-2"></a>

# PHASE 2 - Physical Layer: Putting Bits on a Medium

**Track:** Foundations

**WHAT YOU WILL BE ABLE TO DO:** Understand how bits become signals, why media choice matters, and which limits no protocol above can wish away.

**WHAT YOU SHOULD KNOW FIRST:** Phase 1 (packet switching and metrics).

## 2.1 Transmission Media, Signals, and Noise

**WHY YOU ARE LEARNING THIS:** Packets are logical. The universe is physical. Before Ethernet or IP can mean anything, energy must travel as voltage, light pulses, or radio waves. The Physical layer turns bits into signals and back, under noise, attenuation, and regulatory limits.

**THE PROBLEM THIS SOLVES:** Ideal "bit pipes" do not exist. Copper attenuates. Fiber needs optics and careful connectors. Radio is shared, regulated, and hostile. Ignoring the medium produces fantasy designs ("just send faster") that physics rejects.

**SEE IT BEFORE YOU MEMORIZE IT**

- Best animated: [How a Switch & Router work? (NETWORK WALKS)](https://www.youtube.com/watch?v=F1O8qs8hkm4) - devices sit on physical links; notice the cables/air as first-class
- Alternative: Professor Messer Network+ physical media segments (search "Professor Messer copper fiber")
- Another angle: [AlgoMaster - Transmission Media](https://algomaster.io/roadmaps/cn)
- Interactive: Inspect your own NIC link speed in OS settings; unplug Ethernet and watch link lights die
- Written: Loyola textbook physical layer chapters - [intronetworks.cs.luc.edu](https://intronetworks.cs.luc.edu/)
- GitHub: [CiscoDevNet/netprog_basics](https://github.com/CiscoDevNet/netprog_basics)
- Practice: Categorize last-mile access at home: DSL, cable DOCSIS, fiber ONT, 4G/5G, satellite

**STEP-BY-STEP EXPLANATION**

**Guided media** (twisted pair, coax, fiber) confine the signal. **Unguided media** (radio, microwave, free-space optical) radiate into space. Encoding maps bit patterns to signal patterns (NRZ, Manchester, PAM, QAM). **Modulation** moves baseband signals onto carriers for radio and optics.

Noise and attenuation force **repeaters/amplifiers** and limit distance-bandwidth products. Shannon capacity says: channel capacity depends on bandwidth and signal-to-noise ratio. No clever framing layer beats that ceiling; it can only approach it.

**THE MAIN IDEA IN SIMPLE WORDS:** Treat the Physical layer as a bit service with known error rates and delay. Design upper layers assuming bits flip and links fail.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 App bytes
    |
    v
 ... upper layers ...
    |
    v
 Physical coding:
   bits 0/1  -->  signal levels / light on-off / RF symbols
    |
    v
 Medium: copper / fiber / air
    |
    v  (attenuation, noise, interference)
 Receiver samples signal --> estimates bits --> hands up
```

**PICTURE IT LIKE THIS**

Shouting across a crowded room (radio), talking through a paper cup string (copper), or flashing a flashlight in Morse through a dark tube (fiber). Same message idea; different physics and failure modes.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Media | Strength | Weakness |
| --- | --- | --- |
| Copper Ethernet | Cheap, easy power (PoE) | Distance limits, EMI |
| Fiber | Distance, bandwidth, immune to EMI | Cost, fragility, no PoE itself |
| Wi-Fi / cellular | Mobility | Shared spectrum, interference, variable loss |

**SMALL WORKING EXAMPLE**

```python
# You cannot simulate electromagnetics in ten lines, but you can model BER impact.
import random

def transmit(bits: str, bit_error_rate: float) -> str:
    out = []
    for b in bits:
        if random.random() < bit_error_rate:
            out.append("1" if b == "0" else "0")
        else:
            out.append(b)
    return "".join(out)

msg = "101100101001"
print("sent    ", msg)
print("received", transmit(msg, 0.05))
# Upper layers must detect/correct or retransmit - Phase 3.
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Rarely deep physics in SE interviews; infra interviews may ask copper vs fiber vs wireless trade-offs, or why fiber for data center spines. Tie answers to latency, bandwidth, and failure domains.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Name one advantage of fiber over copper |
| Medium | Why does Wi-Fi throughput collapse in a crowded apartment building? |
| Hard | Explain Shannon capacity qualitatively and what "better encoding" can and cannot do |

**WHY THE NEXT TOPIC IS NEEDED - Framing:** The Physical layer delivers a stream of bits that may be wrong or unsynchronized. Applications need *messages* with boundaries and integrity checks. That requires framing - the Data Link layer.

---

## 2.2 Bandwidth-Delay, Encoding Limits, and Why Links Still Fail

**WHY YOU ARE LEARNING THIS:** Even a perfect encoding cannot erase distance. The **bandwidth-delay product** tells you how many bits are "in flight" on a fat long pipe - which later forces TCP window sizing. Physical links also fail: cuts, fading, congestion at the radio layer. Upper layers must assume failure is normal.

**THE PROBLEM THIS SOLVES:** Designers treated links as infinite reliable wires. Protocols then under-buffered long fat networks or panicked on wireless loss. Understanding BDP and link failure modes prevents those mistakes.

**SEE IT BEFORE YOU MEMORIZE IT**

- [HPBN - latency and bandwidth primer](https://hpbn.co/primer-on-latency-and-bandwidth/)
- [Subnetting / addressing comes later; for now watch link lights and `ethtool`/`ip link` output]
- [Cloudflare - bandwidth vs latency](https://www.cloudflare.com/learning/performance/glossary/what-is-latency/)
- [caesar0301/awesome-pcaptools](https://github.com/caesar0301/awesome-pcaptools) - later you will capture link-level frames

**STEP-BY-STEP EXPLANATION**

Bandwidth-delay product (BDP) = bandwidth × RTT. A 1 Gbps path with 40 ms RTT has about 5 MB in flight if fully utilized. A sender that cannot keep that much unacknowledged data outstanding will never fill the pipe. This Physical/metric fact becomes a Transport requirement in Phase 10.

Links "fail soft" too: Ethernet may renegotiate speed; Wi-Fi may rate-adapt downward; cellular may change towers. From IP's perspective the next hop sometimes just drops more packets.

**THE MAIN IDEA IN SIMPLE WORDS:** Measure the pipe (bandwidth, delay, loss). Size protocols to the pipe. Never assume a link is binary perfect.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 BDP example:

   bandwidth = 1 Gbit/s = 125 MB/s
   RTT       = 40 ms = 0.04 s
   BDP       = 125 MB/s * 0.04 s = 5 MB in flight

   If TCP window << 5 MB, throughput << capacity.
```

**PICTURE IT LIKE THIS**

A long freight train: the track can be "fast" (many cars per hour) and still take a long time for the first car to arrive (latency). How many cars are on the track at once is the BDP.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Reality | Consequence |
| --- | --- |
| Long fat networks | Need large windows / plenty of buffers (carefully) |
| Wireless loss | Must not always treat loss as congestion |
| Physical cuts | Need redundant paths (routing, Phase 6) |

**SMALL WORKING EXAMPLE**

```python
def bdp_bytes(bandwidth_mbps: float, rtt_ms: float) -> float:
    return (bandwidth_mbps * 1_000_000 / 8) * (rtt_ms / 1000)

print("BDP bytes:", int(bdp_bytes(1000, 40)))  # ~5_000_000
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "What is bandwidth-delay product and why does TCP care?" is a strong systems question. Answer with the in-flight bytes intuition.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Compute BDP for 100 Mbps, 10 ms RTT |
| Medium | Why might a satellite link with huge bandwidth still feel laggy for SSH? |
| Hard | Relate BDP to bufferbloat: when are large buffers helpful vs harmful? |

**WHY THE NEXT TOPIC IS NEEDED - Data Link:** Bits on a wire are not yet useful messages. We need frame boundaries, hardware addresses on a local segment, and error detection - Ethernet's world.

---

> **Phase 2 complete?** [Build the aligned project](./Projects.md#networks-phase-2-project) · [Continue to Phase 3](#phase-3---data-link--ethernet-frames-on-a-segment)

<a id="phase-3"></a>

# PHASE 3 - Data Link & Ethernet: Frames on a Segment

**Track:** Local Networks

**WHAT YOU WILL BE ABLE TO DO:** Understand framing, MAC addressing, error detection, and Ethernet as the dominant LAN technology.

**WHAT YOU SHOULD KNOW FIRST:** Phases 1-2.

## 3.1 Framing, MAC Addresses, and CRC

**WHY YOU ARE LEARNING THIS:** A raw bit stream has no message boundaries. The Data Link layer packages bits into **frames**, identifies source/destination on the *local* segment with **MAC addresses**, and often adds a **CRC** so corrupted frames can be discarded.

**THE PROBLEM THIS SOLVES:** Receivers could not tell where a message ended. Noise flipped bits silently. On a shared cable, nobody knew who should accept a transmission. Local delivery was chaos.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Routers, Switches, Packets and Frames (NGT Academy)](https://www.youtube.com/watch?v=zhlMLRNY5-4)
- [Network Ports Explained (PowerCert)](https://www.youtube.com/watch?v=g2fT-g9PX9o) - ports are L4; still useful contrast vs MAC
- [Wireshark](https://www.wireshark.org/) - expand Ethernet header on any capture
- [Cloudflare - What is a MAC address?](https://www.cloudflare.com/learning/network-layer/what-is-a-mac-address/)
- [smoltcp](https://github.com/smoltcp-rs/smoltcp) - link-layer modules in a real stack
- [Wireshark Sample Captures](https://wiki.wireshark.org/SampleCaptures)

**STEP-BY-STEP EXPLANATION**

A typical Ethernet frame: destination MAC, source MAC, EtherType (what payload is - IPv4, IPv6, ARP...), payload, FCS/CRC. MAC addresses are 48-bit link-layer identifiers. They are meaningful **only on the local segment**. The CRC detects (most) corruption; Ethernet usually drops bad frames rather than repairing them - recovery is left upward (TCP) or to retransmission strategies at other layers.

**THE MAIN IDEA IN SIMPLE WORDS:** Put boundaries and local addresses around payloads, checksum the frame, and drop garbage early.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Ethernet frame (simplified):

 +-----------+-----------+----------+------------------+-----+
 | dst MAC   | src MAC   | EtherType| payload (IP...)  | FCS |
 +-----------+-----------+----------+------------------+-----+

 On receive:
   1. Check FCS. Bad? Drop.
   2. dst MAC mine or broadcast/multicast I care about? Else drop.
   3. Hand payload to type demux (IP, ARP, ...).
```

**PICTURE IT LIKE THIS**

A sealed envelope with building-local room numbers (MAC), a "contents type" sticker (EtherType), and a wax seal (CRC). The postal truck route across cities is IP - a different address system.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Buys | Costs |
| --- | --- | --- |
| CRC drop-only | Simple, fast | Upper layers must handle loss |
| Global unique MACs | Plug-and-play local delivery | Privacy concerns; MACs can be randomized |
| Variable payload size | Efficiency | Need MTU discipline later |

**SMALL WORKING EXAMPLE**

```python
import struct, zlib

def fake_fcs(frame_without_fcs: bytes) -> int:
    # Real Ethernet CRC32 is specific; this only shows "trailer integrity check".
    return zlib.crc32(frame_without_fcs) & 0xFFFFFFFF

payload = b"HELLO"
header = b"\xff" * 6 + b"\x11\x22\x33\x44\x55\x66" + struct.pack("!H", 0x0800)
frame = header + payload
print(hex(fake_fcs(frame)))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "What is a MAC address vs IP address?" Link-local vs routable. "What happens if CRC fails?" Frame dropped.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | On Wireshark, find dst/src MAC and EtherType for one frame |
| Medium | Why can't you use MAC addresses to route across the Internet? |
| Hard | Read smoltcp ethernet module and summarize how it demuxes EtherTypes |

**WHY THE NEXT TOPIC IS NEEDED - Ethernet LANs & Switching:** Framing delivers to one segment. Modern buildings have hundreds of hosts. A single shared bus does not scale - we need switches and MAC learning.

---

## 3.2 Ethernet Evolution, MTU, and Collision Domains (Then vs Now)

**WHY YOU ARE LEARNING THIS:** Classic Ethernet shared a cable with CSMA/CD. Today's Ethernet is mostly switched full-duplex links - collisions are largely historical, but **MTU**, broadcasts, and segment thinking remain.

**THE PROBLEM BEFORE SWITCHING DOMINATED:** Shared media meant collisions, contention, and one chatty host ruining everyone's day. Understanding the old model explains why switches were revolutionary.

**SEE IT BEFORE YOU MEMORIZE IT**

- [How a Switch & Router work?](https://www.youtube.com/watch?v=F1O8qs8hkm4)
- [Cloudflare - MTU](https://www.cloudflare.com/learning/network-layer/what-is-mtu/)
- Packet Tracer: hub vs switch topologies

**STEP-BY-STEP EXPLANATION**

**MTU** (Maximum Transmission Unit) caps frame payload (commonly 1500 bytes on Ethernet). Exceed it and IP must fragment (discouraged) or TCP must segment. **Jumbo frames** raise MTU in controlled DCs. Modern full-duplex switched Ethernet eliminates CSMA/CD on those links; Wi-Fi remains a shared-medium spiritual cousin (Phase 16).

**THE MAIN IDEA IN SIMPLE WORDS:** Replace shared collision domains with point-to-point switched links; keep a sane MTU as a contract.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Old: Hub (one collision domain)
   Hosts A B C share wire; simultaneous talk => collision => retry

 Now: Switch (per-port collision domain / usually none in full duplex)
   A--switch--B
        |
        C
   Frames forwarded only to needed ports (Phase 4)
```

**PICTURE IT LIKE THIS**

A party where everyone shouts in one room (hub) vs a receptionist who opens only the right door for each message (switch).

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Design | Trade-off |
| --- | --- |
| 1500 MTU | Universal compatibility vs per-packet overhead |
| Jumbo MTU | Higher efficiency vs fragile mixed paths |
| Switched Ethernet | Scale vs need for spanning tree / loop prevention |

**SMALL WORKING EXAMPLE**

```python
# Path MTU discovery is ICMP-driven in real life; here, a policy stub.
def segments(payload: bytes, mtu: int = 1500, header: int = 40) -> list[bytes]:
    max_payload = mtu - header  # IP+TCP headers roughly
    return [payload[i:i+max_payload] for i in range(0, len(payload), max_payload)]

print(len(segments(b"x" * 4000)))  # how many L3/L4 chunks needed
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "What is MTU? What breaks if one hop has a smaller MTU?" Black holes without PMTUD; classic debugging story.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | State common Ethernet MTU |
| Medium | Explain why VPN encapsulation sometimes causes unexpected fragmentation |
| Hard | Lab: change MTU on a VM interface and observe TCP behavior with Wireshark |

**WHY THE NEXT TOPIC IS NEEDED - Switching & VLANs:** Switches scale Ethernet - but floods, loops, and flat broadcast domains create the next set of problems.

---

> **Phase 3 complete?** [Build the aligned project](./Projects.md#networks-phase-3-project) · [Continue to Phase 4](#phase-4---switching--vlans)

<a id="phase-4"></a>

# PHASE 4 - Switching & VLANs

**Track:** Local Networks

**WHAT YOU WILL BE ABLE TO DO:** Explain how switches forward frames, why flooding exists, and how VLANs segment broadcast domains.

**WHAT YOU SHOULD KNOW FIRST:** Phase 3.

## 4.1 MAC Learning, Flooding, and Forwarding

**WHY YOU ARE LEARNING THIS:** A switch must decide which port should receive a frame. It learns source MACs passively into a **MAC address table**. Unknown unicasts are **flooded**. This builds a LAN that scales far beyond a hub without configuring every host.

**THE PROBLEM THIS SOLVES:** Hubs repeated bits everywhere. Bandwidth shared; security none; collisions frequent. Manual wiring of every pair was impossible.

**SEE IT BEFORE YOU MEMORIZE IT**

- [How a Switch & Router work?](https://www.youtube.com/watch?v=F1O8qs8hkm4)
- [How do Routers work? What is a Routing Table? (Practical Networking)](https://www.youtube.com/watch?v=FzfrSDaWeLE) - contrast L2 forward vs L3 route
- Packet Tracer switching labs
- Vendor docs on CAM/MAC tables (Cisco, etc.)
- [networktocode/awesome-network-automation](https://github.com/networktocode/awesome-network-automation)

**STEP-BY-STEP EXPLANATION**

On each frame: learn `src MAC -> ingress port`. If `dst MAC` known, forward out that port; else flood all ports except ingress. Broadcasts always flood. MAC entries age out. Loops without spanning tree multiply broadcasts into storms - catastrophic.

**THE MAIN IDEA IN SIMPLE WORDS:** Learn by observation; forward selectively; flood only when necessary.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Empty table. A sends to B (unknown):

   A --p1--+           +--p2-- B
           |  SWITCH   |
   C --p3--+           +--p4-- D

   Learn A@p1. Flood to p2,p3,p4.
   B replies. Learn B@p2. Future A<->B is unicast switched, not flooded.
```

**PICTURE IT LIKE THIS**

A receptionist who writes down where each employee sits when they first speak, then delivers mail to the right desk - unless unknown, then ask everyone.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Behavior | Buys | Costs |
| --- | --- | --- |
| Flood unknown | Connectivity without config | Waste, privacy leak |
| Aging | Adapt to moves | Brief re-floods |
| No loop control | Simplicity | Broadcast storms |

**SMALL WORKING EXAMPLE**

```python
class Switch:
    def __init__(self):
        self.table: dict[str, str] = {}

    def handle(self, src: str, dst: str, ingress: str) -> list[str]:
        self.table[src] = ingress
        if dst in self.table and self.table[dst] != ingress:
            return [self.table[dst]]
        return [p for p in ("p1", "p2", "p3", "p4") if p != ingress]

s = Switch()
print(s.handle("AAA", "BBB", "p1"))  # flood
s.handle("BBB", "AAA", "p2")
print(s.handle("AAA", "BBB", "p1"))  # ["p2"]
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Walk through unknown unicast vs broadcast. Mention spanning tree if asked about loops.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Simulate three frames in the toy switch above on paper |
| Medium | Why do MAC flaps happen and what do they indicate? |
| Hard | Packet Tracer: create a loop without STP and observe the storm (carefully) |

**WHY THE NEXT TOPIC IS NEEDED - VLANs:** One flat LAN means one broadcast domain - noisy, insecure, too large. VLANs carve multiple logical LANs onto one physical switch fabric.

---

## 4.2 VLANs, Trunks, and Broadcast Domains

**WHY YOU ARE LEARNING THIS:** Security and scale demand isolation: guests should not see finance servers' broadcasts. **VLANs** tag frames (802.1Q) so one switch can host many logical L2 networks. Routers (or L3 switches) interconnect VLANs.

**THE PROBLEM THIS SOLVES:** Separate physical switches per department - expensive. One big LAN - dangerous and chatty. No middle ground.

**SEE IT BEFORE YOU MEMORIZE IT**

- Search "VLAN explained animated CertBros" / NetworkChuck VLAN videos
- [Cloudflare - What is a VLAN?](https://www.cloudflare.com/learning/network-layer/what-is-a-lan/) (LAN primer + VLAN articles in learning center)
- Packet Tracer VLAN labs

**STEP-BY-STEP EXPLANATION**

Access ports belong to one VLAN. Trunk ports carry multiple VLANs with tags. Broadcasts stay inside a VLAN. Inter-VLAN traffic requires L3 routing. Misconfigured trunks (native VLAN mismatches) are classic outage sources.

**THE MAIN IDEA IN SIMPLE WORDS:** Virtualize the LAN with tags; route between the virtual LANs intentionally.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 PC-A (VLAN 10) --access-- SWITCH --trunk-- SWITCH --access-- PC-B (VLAN 10)
                              |
                           router (SVI VLAN10, VLAN20)
                              |
                           Server (VLAN 20)

 Same VLAN: L2 switched. Different VLAN: must L3 route.
```

**PICTURE IT LIKE THIS**

Colored badges at a conference: same hall (physical switch), different rooms you are allowed to enter (VLANs). Security guards between rooms are routers.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Many VLANs | Isolation vs operational complexity |
| Flat L2 everywhere | Simple vs huge failure domains |
| L3 to the access | Scalability vs more routing design work |

**SMALL WORKING EXAMPLE**

```python
# 802.1Q tag conceptually: TPID 0x8100 + VLAN ID bits.
def vlan_tag(vlan_id: int) -> bytes:
    assert 1 <= vlan_id <= 4094
    return b"\x81\x00" + vlan_id.to_bytes(2, "big")

print(vlan_tag(10).hex())
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "How do hosts on different VLANs communicate?" Through a router/L3 gateway. "What is a trunk?" Tagged multi-VLAN link.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Define broadcast domain vs collision domain |
| Medium | Design VLANs for corp / guests / cameras on one switch stack |
| Hard | Explain VLAN hopping at a high level and how to mitigate |

**WHY THE NEXT TOPIC IS NEEDED - IP Addressing:** L2 gets you across a LAN/VLAN. It does not get you across the world. We need a *logical* global address space - IP - and a way to carve it into networks: subnetting.

---

> **Phase 4 complete?** [Build the aligned project](./Projects.md#networks-phase-4-project) · [Continue to Phase 5](#phase-5---ip-addressing--subnetting)

<a id="phase-5"></a>

# PHASE 5 - IP Addressing & Subnetting

**Track:** Internetworking

**WHAT YOU WILL BE ABLE TO DO:** Master IPv4 addressing, CIDR notation, subnet math, and why IPv6 exists.

**WHAT YOU SHOULD KNOW FIRST:** Phase 4 (you leave the LAN via a gateway IP).

## 5.1 IPv4 Addresses, CIDR, and Subnet Math

**WHY YOU ARE LEARNING THIS:** MAC addresses do not scale globally and are not topological. **IP addresses** are logical and hierarchical so routers can aggregate paths. **CIDR** (`a.b.c.d/n`) splits network vs host bits without old classful waste.

**THE PROBLEM THIS SOLVES:** Classful A/B/C wastes (a Class B for 300 hosts). Flat tables cannot hold every host on Earth. Hierarchy is mandatory.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Subnet Mask - Explained (PowerCert)](https://www.youtube.com/watch?v=s_Ntt6eTn94)
- [What is Subnetting? - Subnetting Mastery Part 1 (Practical Networking)](https://www.youtube.com/watch?v=BWZ-MHIhqjM)
- [IP addressing and Subnetting | CIDR (TechTerms)](https://www.youtube.com/watch?v=OqsXzkXfwRw)
- [subnetcalculator.com](https://www.subnet-calculator.com/) or similar
- [Cloudflare - What is an IP address?](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/)
- Practice repos / cheatsheets via [nyquist/awesome-networking](https://github.com/nyquist/awesome-networking)

**STEP-BY-STEP EXPLANATION**

IPv4: 32-bit address. `/24` means 24 network bits, 8 host bits → 256 addresses (254 usable typically, minus network/broadcast). Private ranges (RFC1918): `10/8`, `172.16/12`, `192.168/16`. Subnetting carves a prefix into smaller prefixes for departments or security zones. **Longest prefix match** (Phase 6) depends on this hierarchy.

**THE MAIN IDEA IN SIMPLE WORDS:** Addresses are hierarchical prefixes, not flat names - so routing scales by aggregation.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 192.168.1.10/24

 Address:  11000000.10101000.00000001.00001010
 Mask /24: 11111111.11111111.11111111.00000000
 Network:  192.168.1.0
 Broadcast:192.168.1.255
 Hosts:    .1 - .254

 Gateway is usually .1 on small LANs - convention, not magic.
```

**PICTURE IT LIKE THIS**

ZIP+street: the ZIP aggregates a region (prefix); the street address is the host. Mail trucks route on ZIP first.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Plan | Buys | Costs |
| --- | --- | --- |
| Big subnets | Simple | Waste, large broadcast domains |
| Tiny subnets | Tight security/growth control | More routes, operational overhead |
| Overlapping private IP across sites | Easy locally | VPN/merge nightmares |

**SMALL WORKING EXAMPLE**

```python
import ipaddress

net = ipaddress.ip_network("192.168.1.0/24")
print(net.network_address, net.broadcast_address, net.num_addresses)
print(ipaddress.ip_address("192.168.1.10") in net)

# carve /24 into two /25s
for sub in net.subnets(new_prefix=25):
    print(sub)
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Live subnetting still appears. Practice: given `10.0.5.37/24`, network, broadcast, usable range. Bonus: plan subnets for 5 depts with growth.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Usable hosts in /26? /30? |
| Medium | Split 10.0.0.0/24 into equal halves; give ranges |
| Hard | Design addressing for HQ + 20 branches with summarizable aggregates |

**WHY THE NEXT TOPIC IS NEEDED - IPv6 & Special Addresses:** IPv4 exhaustion and NAT kludges force the next address chapter - IPv6 and the special addresses you must recognize on sight.

---

## 5.2 IPv6, Special Addresses, and Why Hierarchy Matters

**WHY YOU ARE LEARNING THIS:** IPv4's 32 bits were not enough for every device. **IPv6** uses 128-bit addresses, simpler header ideas, and SLAAC/link-local behaviors. Even on IPv4-only networks, you must know loopback, link-local, multicast, and private space.

**THE PROBLEM THIS SOLVES:** NAT delayed the pain but broke end-to-end connectivity assumptions. Exhaustion made hierarchical public addressing political and expensive.

**SEE IT BEFORE YOU MEMORIZE IT**

- PowerCert / NetworkChuck IPv6 primers
- [Cloudflare - What is IPv6?](https://www.cloudflare.com/learning/dns/what-is-ipv6/)
- Beej concepts guide addressing chapters

**STEP-BY-STEP EXPLANATION**

Know on sight: `127.0.0.0/8` loopback, `169.254.0.0/16` link-local (APIPA), multicast `224.0.0.0/4`, RFC1918 private. IPv6: `::1` loopback, `fe80::/10` link-local, global unicast typically `2000::/3`. Dual-stack and tunneling still matter in transition.

**THE MAIN IDEA IN SIMPLE WORDS:** Expand the address space and restore the chance of global end-to-end addressing - while keeping hierarchical routing.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 IPv4 private + public NAT (Phase 7) was the band-aid.
 IPv6 goal: enough addresses that every host can be unique again.
 Reality: enterprise adoption uneven; dual-stack common.
```

**PICTURE IT LIKE THIS**

Running out of phone numbers in a city - add digits (IPv6) or share lines with extensions (NAT).

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Approach | Trade-off |
| --- | --- |
| NAT everywhere | Conserves IPv4 vs breaks inbound/P2P |
| Dual-stack | Compatibility vs two planes to secure |
| IPv6-only + translation | Future-proof vs app breakage risk |

**SMALL WORKING EXAMPLE**

```python
import ipaddress
print(ipaddress.ip_address("::1").ipv6_mapped if False else "loopback v6 ok")
addr = ipaddress.ip_address("fe80::1")
print(addr.is_link_local, addr.version)
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "Why IPv6?" Exhaustion + end-to-end. "What is 169.254?" DHCP failed. Know RFC1918 cold.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | List RFC1918 ranges |
| Medium | Explain why link-local IPv6 exists |
| Hard | Sketch a dual-stack data-center addressing plan |

**WHY THE NEXT TOPIC IS NEEDED - Routing:** Addresses name networks. Something must decide *which next hop* receives a packet toward that network - routing and forwarding.

---

> **Phase 5 complete?** [Build the aligned project](./Projects.md#networks-phase-5-project) · [Continue to Phase 6](#phase-6---routing--forwarding)

<a id="phase-6"></a>

# PHASE 6 - Routing & Forwarding

**Track:** Internetworking

**WHAT YOU WILL BE ABLE TO DO:** Separate forwarding (data plane) from routing (control plane); understand longest-prefix match and protocol roles.

**WHAT YOU SHOULD KNOW FIRST:** Phase 5.

## 6.1 Forwarding Tables and Longest Prefix Match

**WHY YOU ARE LEARNING THIS:** A router connects networks. For each packet it must choose an outgoing interface/next hop using the destination IP. **Longest prefix match** picks the most specific route. Default routes (`0.0.0.0/0`) catch the rest.

**THE PROBLEM THIS SOLVES:** Bridges flood globally - impossible at Internet scale. Hosts cannot know every path. Hierarchy + local decisions are required.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Understanding Routing!](https://www.youtube.com/watch?v=gQtgtKtvRdo)
- [How Routers Actually Work (TechVision Animated)](https://www.youtube.com/watch?v=FAY43J3FvZk)
- [How do Routers work? (Practical Networking)](https://www.youtube.com/watch?v=FzfrSDaWeLE)
- Kurose/Ross network layer chapters; Loyola textbook routing chapters
- Packet Tracer static routing labs

**STEP-BY-STEP EXPLANATION**

**Forwarding** is per-packet table lookup. **Routing** is how the table is built (static or dynamic protocols). TTL decrements each hop; at 0, packet dies and ICMP Time Exceeded may return (traceroute). Control plane vs data plane split lets hardware forward fast while software computes routes slowly.

**THE MAIN IDEA IN SIMPLE WORDS:** Route on prefixes, not hosts; decide hop-by-hop with the most specific match.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Packet dst = 10.1.5.9

 Table:
   10.1.5.0/24 -> eth0
   10.1.0.0/16 -> eth1
   0.0.0.0/0   -> eth2 (default)

 Match /24 and /16 and /0; pick /24 (longest). Forward out eth0.
 Rewrite L2 header for the next hop (ARP, Phase 7).
 Decrement TTL. If 0: drop (+ ICMP).
```

**PICTURE IT LIKE THIS**

Highway signs: "City Center" vs "Downtown - Main St" vs "Everywhere else →". You follow the most specific sign that applies.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Static routes | Simple vs no automatic failover |
| Specific routes | Precise control vs table bloat |
| Default-only edge | Tiny tables vs dependency on upstream |

**SMALL WORKING EXAMPLE**

```python
import ipaddress

def longest_prefix_match(dst: str, table: list[tuple[str, str]]) -> str:
    best = None
    best_len = -1
    addr = ipaddress.ip_address(dst)
    for cidr, nh in table:
        net = ipaddress.ip_network(cidr)
        if addr in net and net.prefixlen > best_len:
            best, best_len = nh, net.prefixlen
    return best

table = [("10.1.5.0/24", "eth0"), ("10.1.0.0/16", "eth1"), ("0.0.0.0/0", "eth2")]
print(longest_prefix_match("10.1.5.9", table))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Explain traceroute via TTL. Explain LPM. Contrast switch (MAC) vs router (IP).

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Given overlapping prefixes, which wins? |
| Medium | Interpret a `tracert`/`traceroute` output hop by hop |
| Hard | Build a 4-router Packet Tracer topology with static routes both ways |

**WHY THE NEXT TOPIC IS NEEDED - Routing Protocols:** Static routes do not scale across organizations. Networks need distributed algorithms - distance vector, link state - and eventually BGP policy.

---

## 6.2 RIP, OSPF, and the Role of BGP (Preview)

**WHY YOU ARE LEARNING THIS:** Inside an organization (**AS**), IGPs like **OSPF** (link state) or older **RIP** (distance vector) compute loop-free paths automatically. Between organizations, **BGP** exchanges reachability with *policy* first (Phase 18 deep dive). You need the map of who does what now.

**THE PROBLEM THIS SOLVES:** Manual routes on thousands of routers - unmaintainable. Link failures needed human reaction. The Internet needed a different protocol between ISPs than inside a campus.

**SEE IT BEFORE YOU MEMORIZE IT**

- ByteByteGo / Practical Networking BGP intro videos (deeper in Phase 18)
- [Cloudflare - What is BGP?](https://www.cloudflare.com/learning/security/glossary/what-is-bgp/)
- CS144 and textbook routing algorithm animations (Bellman-Ford / Dijkstra)

**STEP-BY-STEP EXPLANATION**

Distance vector: share tables with neighbors; risk count-to-infinity (mitigations exist). Link state: flood topology, run Dijkstra locally - faster convergence, more CPU/memory. OSPF areas hierarchical. BGP: path-vector with AS paths; chooses by policy attributes more than pure shortest path. Do not confuse "BGP makes the Internet work" with "BGP is OSPF at Earth scale" - different goals.

**THE MAIN IDEA IN SIMPLE WORDS:** Automate intradomain routing with topology-aware IGPs; glue domains with policy-aware BGP.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Campus:  OSPF builds map -> shortest path trees -> forwarding tables
 Internet: eBGP announces prefixes between ASes
           iBGP distributes external routes inside an AS
```

**PICTURE IT LIKE THIS**

City GPS (OSPF) vs international shipping contracts between companies (BGP) - contracts can prefer a partner even if the road is longer.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Protocol class | Strength | Weakness |
| --- | --- | --- |
| RIP | Simple | Slow, small networks |
| OSPF | Fast convergence | Complexity, flooding scope |
| BGP | Policy, scale of Internet | Misconfig can blackhole the planet |

**SMALL WORKING EXAMPLE**

```python
# Toy Bellman-Ford relaxation (distance vector spirit)
def relax(dist, u, v, w):
    if dist[u] + w < dist[v]:
        dist[v] = dist[u] + w
        return True
    return False

dist = {"A": 0, "B": 999, "C": 999}
edges = [("A", "B", 1), ("B", "C", 1), ("A", "C", 5)]
changed = True
while changed:
    changed = False
    for u, v, w in edges:
        changed |= relax(dist, u, v, w)
print(dist)  # A0 B1 C2
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "OSPF vs BGP?" Interior vs exterior; cost vs policy. Senior: convergence, areas, route reflectors (later).

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Define AS in one sentence |
| Medium | Why is BGP not just "Dijkstra on the world graph"? |
| Hard | Read Cloudflare BGP article; summarize a famous BGP leak at high level |

**WHY THE NEXT TOPIC IS NEEDED - ARP/DHCP/ICMP/NAT:** Routing assumes we can deliver to a *next hop IP on a local link* and that hosts can obtain addresses and diagnose failures. The glue protocols make that real.

---

> **Phase 6 complete?** [Build the aligned project](./Projects.md#networks-phase-6-project) · [Continue to Phase 7](#phase-7---arp-dhcp-icmp-and-nat)

<a id="phase-7"></a>

# PHASE 7 - ARP, DHCP, ICMP, and NAT

**Track:** Internetworking

**WHAT YOU WILL BE ABLE TO DO:** Explain how hosts discover MAC addresses, get IPs automatically, diagnose paths, and share public IPv4 via NAT.

**WHAT YOU SHOULD KNOW FIRST:** Phases 5-6.

## 7.1 ARP, DHCP, and ICMP

**WHY YOU ARE LEARNING THIS:** You know the next hop's IP. Frames need a MAC. **ARP** answers "who has this IP?" on IPv4 LANs. Hosts also need addresses without manual typing - **DHCP**. When things break, **ICMP** (ping, traceroute helpers) carries control and error messages.

**THE PROBLEM THIS SOLVES:** Static IP+MAC tables - brittle. No ping - blind debugging. Every laptop configured by hand - operational nightmare.

**SEE IT BEFORE YOU MEMORIZE IT**

- [DNS video later; for ARP watch Chris Greer Wireshark ARP filters](https://www.youtube.com/watch?v=OU-A2EmVrKQ)
- NetworkChuck / PowerCert DHCP explainers
- `arp -a`, `ip neigh`, `ping`, `tracert` on your machine
- [Cloudflare - What is ICMP?](https://www.cloudflare.com/learning/ddos/glossary/internet-control-message-protocol-icmp/)
- Capture ARP in Wireshark sample sets

**STEP-BY-STEP EXPLANATION**

ARP: broadcast request, unicast reply, cache entries. Gratuitous ARP updates. Spoofing risk on open L2. DHCP: DORA - Discover, Offer, Request, Acknowledge - leases IP, mask, gateway, DNS. ICMP: Echo Request/Reply (ping); Destination Unreachable; Time Exceeded (traceroute). ICMP is not "ping only" - it is the IP plane's error channel.

**THE MAIN IDEA IN SIMPLE WORDS:** Automate local resolution and host config; expose a lightweight control protocol for errors and probes.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Send to 8.8.8.8:
   1. Routing: next hop = 192.168.1.1 (local gateway)
   2. ARP: who-has 192.168.1.1? -> MAC aa:bb:...
   3. Frame to gateway MAC, IP dst still 8.8.8.8
   4. Gateway routes onward...

 DHCP DORA:
   Discover (broadcast) -> Offer -> Request -> Ack (lease)
```

**PICTURE IT LIKE THIS**

ARP is asking across the office "who sits at desk 192?" DHCP is hotel check-in assigning room+wifi info. ICMP is the "return to sender / delayed / no such address" stamps.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Mechanism | Risk |
| --- | --- |
| ARP broadcast | Spoofing on hostile L2 |
| Long DHCP leases | Stale mappings vs chatty renewals |
| Blocking ICMP | "Security" that breaks PMTUD and diagnosis |

**SMALL WORKING EXAMPLE**

```python
import subprocess, platform

def ping_once(host: str) -> str:
    count = "-n" if platform.system().lower() == "windows" else "-c"
    out = subprocess.run(["ping", count, "1", host], capture_output=True, text=True)
    return out.stdout.splitlines()[-1] if out.stdout else out.stderr

print(ping_once("127.0.0.1"))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "What happens before the first packet to a new gateway leaves?" ARP. "Why did traceroute stop showing names?" ICMP filtered. DHCP DORA order is a common quiz.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Run `arp -a` / `ip neigh` and identify your gateway |
| Medium | Capture DHCP on a lab VM join; label DORA packets |
| Hard | Explain why filtering all ICMP breaks large-packet transfers |

**WHY THE NEXT TOPIC IS NEEDED - NAT:** Private IPv4 plus one public address at the edge - how do many hosts share? NAT rewrites, and that rewrite has deep consequences.

---

## 7.2 NAT, PAT, and the End of Easy Peer Connectivity

**WHY YOU ARE LEARNING THIS:** IPv4 scarcity forced **Network Address Translation**. Home routers map many private internals to one public IP using port rewriting (**PAT**/NAPT). The Internet kept growing. Direct inbound connections became hard - shaping WebRTC, gaming, and P2P forever.

**THE PROBLEM THIS SOLVES:** Not enough public IPv4 for every laptop. Giving every device a public IP also expanded attack surface without perimeter devices.

**SEE IT BEFORE YOU MEMORIZE IT**

- [How Routers Actually Work - NAT Explained](https://www.youtube.com/watch?v=FAY43J3FvZk)
- ByteByteGo NAT explainers
- [Cloudflare - What is NAT?](https://www.cloudflare.com/learning/network-layer/what-is-nat/)
- Observe your public IP via a "what is my IP" site vs `ipconfig` private IP

**STEP-BY-STEP EXPLANATION**

Outbound: rewrite src IP/port; keep a mapping table; reverse on replies. Inbound unsolicited packets have no mapping - dropped unless port forwarded. Carrier-grade NAT worsens this. STUN/TURN/hole punching exist because NAT exists. NAT is not security by design, but it acts as a default inbound filter.

**THE MAIN IDEA IN SIMPLE WORDS:** Multiplex many private hosts onto scarce public IPv4 by rewriting transport identifiers - accept broken end-to-end as the price.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Laptop 192.168.1.10:52344 -> 93.184.216.34:443
 Router public 203.0.113.5:

   store map: 203.0.113.5:40001 <-> 192.168.1.10:52344
   send as   203.0.113.5:40001 -> 93.184.216.34:443

 Reply comes to :40001 -> translated back to laptop.
 Random inbound to :40001 with no map -> drop.
```

**PICTURE IT LIKE THIS**

An apartment mailroom: many residents, one street address. Outbound packages get tracked with a slot number (port). Random mail addressed only to the building without a slot cannot find a person.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Buys | Costs |
| --- | --- |
| IPv4 survival | Breaks inbound, complicates protocols |
| Cheap home networks | Harder P2P, extra failure mode |
| CGNAT | Even less control for subscribers |

**SMALL WORKING EXAMPLE**

```python
# Toy NAT table
class Nat:
    def __init__(self, public_ip: str):
        self.public_ip = public_ip
        self.table = {}
        self.next_port = 40000

    def outbound(self, priv_ip, priv_port, dst_ip, dst_port):
        pub_port = self.next_port
        self.next_port += 1
        self.table[pub_port] = (priv_ip, priv_port)
        return self.public_ip, pub_port

    def inbound(self, pub_port):
        return self.table.get(pub_port)

n = Nat("203.0.113.5")
print(n.outbound("192.168.1.10", 52344, "1.2.3.4", 443))
print(n.inbound(40000))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "Why can't two phones on LTE easily host servers?" CGNAT. "How does video calling work anyway?" Relays/STUN/TURN. Distinguish NAT from firewall.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Compare private IP vs public IP on your network |
| Medium | Explain port forwarding and its risks |
| Hard | Read about hole punching; summarize when it fails |

**WHY THE NEXT TOPIC IS NEEDED - Layered Models:** You now have L1-L3 pieces and glue. Before Transport, pause and unify: encapsulation, OSI vs TCP/IP - the mental model that makes the rest teachable.

---

> **Phase 7 complete?** [Build the aligned project](./Projects.md#networks-phase-7-project) · [Continue to Phase 8](#phase-8---layered-models-osi-and-tcpip)

<a id="phase-8"></a>

# PHASE 8 - Layered Models: OSI and TCP/IP

**Track:** Synthesis

**WHAT YOU WILL BE ABLE TO DO:** Unify what you built into OSI vs TCP/IP models and practice encapsulation end to end.

**WHAT YOU SHOULD KNOW FIRST:** Phases 1-7.

## 8.1 OSI vs TCP/IP and Why Layering Won

**WHY YOU ARE LEARNING THIS:** Bundling bit signaling, local delivery, global routing, reliability, and application meaning into one blob would freeze innovation. **Layering** lets Wi-Fi replace copper without rewriting HTTP. OSI is the 7-layer teaching model; TCP/IP is the 4-layer model the Internet actually implements.

**THE PROBLEM THIS SOLVES:** Monolithic protocols tied apps to media. Vendors locked stacks. Interoperability failed.

**SEE IT BEFORE YOU MEMORIZE IT**

- [MASTER the OSI Model in Just 5 Minutes (KnowledgeCatch)](https://www.youtube.com/watch?v=8YkL_qc6ozc)
- [What is OSI Model | Real World Examples (ByteByteGo)](https://www.youtube.com/watch?v=0y6FtKsg6J4)
- [OSI Model Explained (TechTerms)](https://www.youtube.com/watch?v=vv4y_uOneC0) · [Professor Messer OSI](https://www.youtube.com/watch?v=owDh6FNJUog)
- Wireshark packet tree = layers made visible
- [Cloudflare OSI model](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)
- [smoltcp](https://github.com/smoltcp-rs/smoltcp)

**STEP-BY-STEP EXPLANATION**

OSI: Physical, Data Link, Network, Transport, Session, Presentation, Application. TCP/IP: Link, Internet, Transport, Application (Session/Presentation folded up). PDU names: bits, frames, packets, segments/datagrams, messages. Engineers debug by naming the layer that failed: DNS vs TCP vs IP vs cable.

**THE MAIN IDEA IN SIMPLE WORDS:** Each layer solves one job and exposes a narrow interface upward - encapsulation hides the rest.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 SEND:
   HTTP message
     -> TCP segment (+ ports, seq)
       -> IP packet (+ IPs, TTL)
         -> Ethernet frame (+ MACs)
           -> bits

 RECV: unwrap reverse order.
 Hop-by-hop: MAC changes. End-to-end: IP src/dst (usually) stay.
```

**PICTURE IT LIKE THIS**

Nested envelopes: letter (app), certified-mail tracking (transport), city address (IP), local courier bag tag (MAC).

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Layering | Cost |
| --- | --- |
| Independence | Header overhead, duplication |
| Strict boundaries | Sometimes hide useful cross-layer info (wireless loss vs congestion) |

**SMALL WORKING EXAMPLE**

```python
import socket
# AF_INET = IPv4 (L3), SOCK_STREAM = TCP (L4)
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.settimeout(5)
s.connect(("example.com", 80))
s.sendall(b"GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n")
print(s.recv(200))
s.close()
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "What happens when you type a URL?" is a layer tour. Memorizing 7 names is weak; mapping failures to layers is strong.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Map Ethernet/IP/TCP/HTTP to OSI layers |
| Medium | In Wireshark, screenshot one packet's layer tree and label PDUs |
| Hard | Argue one case where strict layering hurts (e.g., TCP over Wi-Fi) |

**WHY THE NEXT TOPIC IS NEEDED - UDP:** Layering says Transport must move bytes between processes. The first design choice: do we promise reliability, or just ship datagrams fast? Start with UDP.

---

## 8.2 Ports, Sockets Preview, and Multiplexing

**WHY YOU ARE LEARNING THIS:** IP gets a packet to a machine. **Ports** get it to a process. The 4-tuple (src IP, src port, dst IP, dst port) + protocol demultiplexes connections. This is why one server IP serves millions of clients on port 443.

**THE PROBLEM THIS SOLVES:** One service per machine, or custom demux hacks. No standard way to multiplex apps.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Network Ports Explained (PowerCert)](https://www.youtube.com/watch?v=g2fT-g9PX9o)
- [Beej's Guide](https://beej.us/guide/bgnet/html/) - sockets intro
- `netstat -an` / `ss -tan` view established tuples

**STEP-BY-STEP EXPLANATION**

Well-known ports (80, 443, 53, 22). Ephemeral client ports. UDP and TCP port spaces are independent. Sockets are the OS abstraction binding an app to a local tuple.

**THE MAIN IDEA IN SIMPLE WORDS:** A 16-bit port namespace per transport protocol, combined into connection 4-tuples.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Browser tab1: (you:52344) <-> (server:443)
 Browser tab2: (you:52345) <-> (server:443)
 Same server port; different client ports => different sockets.
```

**PICTURE IT LIKE THIS**

Apartment number (port) inside a building (IP). Many visitors can talk to the same apartment using different return addresses.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Limit | Implication |
| --- | --- |
| 65535 ports | NAT and load balancer connection limits are real |
| Privileged ports <1024 | Security/policy convention on Unix |

**SMALL WORKING EXAMPLE**

```python
import socket
s = socket.create_connection(("example.com", 80))
print("local ", s.getsockname())
print("remote", s.getpeername())
s.close()
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "How can one process serve many clients?" - 4-tuple uniqueness + accept loop / async IO.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | List ports for HTTP, HTTPS, DNS, SSH |
| Medium | Open two connections; prove local ports differ |
| Hard | Explain TIME_WAIT and port exhaustion under load |

**WHY THE NEXT TOPIC IS NEEDED - UDP:** With ports in hand, the simplest transport is a datagram with almost no promises - UDP.

---

> **Phase 8 complete?** [Build the aligned project](./Projects.md#networks-phase-8-project) · [Continue to Phase 9](#phase-9---udp-user-datagram-protocol)

<a id="phase-9"></a>

# PHASE 9 - UDP: User Datagram Protocol

**Track:** Transport

**WHAT YOU WILL BE ABLE TO DO:** Know UDP's guarantees (almost none), when to use it, and how QUIC rides on it.

**WHAT YOU SHOULD KNOW FIRST:** Phase 8.

## 9.1 Datagrams, Use Cases, and What You Must Handle Yourself

**WHY YOU ARE LEARNING THIS:** Not every app wants a reliable ordered stream. Real-time audio would rather drop late packets than stall. DNS wants a quick request/response. **UDP** offers ports + optional checksum and little else.

**THE PROBLEM THIS SOLVES:** Forcing TCP everywhere adds handshake RTT, head-of-line blocking, and retry delays that hurt real-time and simple query protocols.

**SEE IT BEFORE YOU MEMORIZE IT**

- [TCP vs UDP Comparison (PowerCert)](https://www.youtube.com/watch?v=uwoD5YsGACg)
- [TCP vs UDP Explained Visually (ByteQuest)](https://www.youtube.com/watch?v=Xu85vTSZRWs)
- [CertBros TCP vs UDP](https://www.youtube.com/watch?v=cA9ZJdqzOoU)
- [Beej on datagram sockets](https://beej.us/guide/bgnet/html/)
- [brandon-rhodes/fopnp](https://github.com/brandon-rhodes/fopnp)

**STEP-BY-STEP EXPLANATION**

UDP header: src port, dst port, length, checksum (~8 bytes). No connection, no ACK, no ordering, no congestion control (app/QUIC may add). Preserves message boundaries: one `sendto` ≈ one `recvfrom` (or loss). Applications must handle loss, duplication, and congestion ethics (or use QUIC/HTTP3).

**THE MAIN IDEA IN SIMPLE WORDS:** Offer a thin demultiplexed datagram service; let apps choose reliability policy.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 CLIENT                         SERVER
   |---- DNS query datagram ---->|
   |---- (lost) ----------------X|
   |---- retry ----------------->|
   |<--- response ---------------|
 No handshake. First packet is data.
```

**PICTURE IT LIKE THIS**

Postcard vs certified letter. Postcard is UDP: cheap, may never arrive, no signature required.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Use UDP when | Avoid UDP when |
| --- | --- |
| Latency-sensitive media | You need easy correctness (file transfer) |
| Simple query/response | You do not want to invent reliability |
| Building custom transports (QUIC) | Middleboxes expect TCP (sometimes) |

**SMALL WORKING EXAMPLE**

```python
import socket

# Echo client sketch (run against a UDP echo server)
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.settimeout(2)
sock.sendto(b"hello-udp", ("127.0.0.1", 9999))
try:
    data, addr = sock.recvfrom(1024)
    print("got", data, "from", addr)
except socket.timeout:
    print("no reply - expected if no server; that IS the UDP lesson")
sock.close()
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Contrast TCP vs UDP with concrete app examples. Mention QUIC-over-UDP as modern plot twist.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Name three UDP apps/protocols |
| Medium | Implement UDP echo server + client locally |
| Hard | Explain why HTTP/3 uses UDP |

**WHY THE NEXT TOPIC IS NEEDED - TCP:** UDP's honesty about unreliability pushes the hard problem upward. Most apps still want a reliable stream - TCP's job.

---

## 9.2 QUIC Preview and Congestion Responsibility

**WHY YOU ARE LEARNING THIS:** UDP's lack of congestion control is dangerous if apps blast the network. Responsible UDP apps implement pacing/CC - or adopt **QUIC**, which puts reliability+TLS+streams over UDP to evolve without kernel TCP ossification.

**THE PROBLEM THIS SOLVES:** TCP in kernel is hard to upgrade globally. Middleboxes ossify TCP options. HTTP/2 multiplex over one TCP connection suffers HOL blocking.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Cloudflare - What is QUIC?](https://www.cloudflare.com/learning/performance/what-is-http3/)
- NeetCode / ByteByteGo HTTP/3 explainers
- HPBN and IETF QUIC overviews

**STEP-BY-STEP EXPLANATION**

QUIC = modern transport features in user space over UDP: crypto handshake fused with transport, multiple streams without TCP HOL, connection IDs for migration. Remember: UDP did not become "reliable"; QUIC added reliability on top.

**THE MAIN IDEA IN SIMPLE WORDS:** Use UDP as an escape hatch from kernel/middlebox ossification; implement a better transport above it.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 HTTP/3
   |
  QUIC (reliability, CC, TLS)
   |
  UDP
   |
  IP
```

**PICTURE IT LIKE THIS**

If the post office (kernel TCP) refuses to update rules, you invent a private courier service that still uses public roads (UDP/IP).

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Approach | Trade-off |
| --- | --- |
| Raw UDP | Max control vs you must be careful |
| QUIC | Modern features vs CPU/debug complexity |
| TCP | Ubiquity vs ossification / HOL |

**SMALL WORKING EXAMPLE**

```python
# Conceptual only - real QUIC needs a library (aioquic, quic-go, etc.)
print("HTTP/3 stack: App -> QUIC -> UDP -> IP")
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "Why is HTTP/3 over UDP?" User-space evolution + stream multiplexing without TCP HOL. Not "UDP is faster" as a slogan.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | One sentence: relationship UDP and QUIC |
| Medium | Compare HOL blocking TCP+HTTP/2 vs QUIC streams |
| Hard | Capture HTTP/3 if available; identify UDP 443 traffic |

**WHY THE NEXT TOPIC IS NEEDED - TCP:** Most of the Internet still runs on TCP. Master its handshake, reliability machine, and congestion control next.

---

> **Phase 9 complete?** [Build the aligned project](./Projects.md#networks-phase-9-project) · [Continue to Phase 10](#phase-10---tcp-transmission-control-protocol)

<a id="phase-10"></a>

# PHASE 10 - TCP: Transmission Control Protocol

**Track:** Transport

**WHAT YOU WILL BE ABLE TO DO:** Understand TCP's connection lifecycle, reliability machinery, flow vs congestion control, and stream framing pitfalls.

**WHAT YOU SHOULD KNOW FIRST:** Phases 8-9.

## 10.1 Handshake, Reliability, and Streams

**WHY YOU ARE LEARNING THIS:** IP can lose, reorder, and duplicate packets. Applications like file transfer and HTTP need a **reliable, ordered byte stream**. TCP provides connections, sequence numbers, ACKs, retransmits, and teardown - at the cost of latency and complexity.

**THE PROBLEM THIS SOLVES:** Every app reinvented reliability poorly. The network needed a shared, good-enough transport so apps could assume a sane pipe.

**SEE IT BEFORE YOU MEMORIZE IT**

- [TCP vs UDP Comparison (PowerCert)](https://www.youtube.com/watch?v=uwoD5YsGACg)
- [TCP Three-way Handshake (Sunny Classroom)](https://www.youtube.com/watch?v=xMtP5ZB3wSk)
- [TCP Fundamentals with Wireshark (Chris Greer)](https://www.youtube.com/watch?v=xdQ9sgpkrX8)
- Wireshark filter `tcp.flags.syn==1`
- [RFC 9293](https://www.rfc-editor.org/rfc/rfc9293.html) · [HPBN ch.2](https://hpbn.co/)
- [Stanford CS144](https://cs144.github.io/) · [PKUFlyingPig/CS144-Computer-Network](https://github.com/PKUFlyingPig/CS144-Computer-Network)
- [smoltcp tcp.rs](https://github.com/smoltcp-rs/smoltcp)

**STEP-BY-STEP EXPLANATION**

Three-way handshake: SYN, SYN-ACK, ACK. Sequence numbers number bytes. ACKs cumulatively confirm receipt; loss triggers retransmit (RTO or fast retransmit on dup ACKs). TCP is a **stream**: `send` boundaries ≠ `recv` boundaries - apps must frame (length prefix / delimiters). Teardown is FIN/ACK each direction; TIME_WAIT holds the tuple.

**THE MAIN IDEA IN SIMPLE WORDS:** Number every byte, ACK progress, retransmit holes, present a clean stream API upward.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 CLIENT                                   SERVER
   |-- SYN seq=1000 ---------------------->|
   |<-- SYN-ACK seq=5000 ack=1001 ---------|
   |-- ACK ack=5001 ---------------------->|
   |-- data "GET /" ---------------------->|
   ...
   |-- FIN ------------------------------->|
   |<-- ACK -------------------------------|
   |<-- FIN -------------------------------|
   |-- ACK ------------------------------->|
```

**PICTURE IT LIKE THIS**

Certified mail with page numbers: if page 4 is missing, resend page 4 before the reader continues the novel in order.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Feature | Cost |
| --- | --- |
| Handshake | +1 RTT before data (mitigated by TFO/QUIC) |
| Ordered stream | HOL blocking for multiplexed messages |
| Reliability | Buffering, timers, complexity |

**SMALL WORKING EXAMPLE**

```python
import socket

def fetch_headers(host: str) -> bytes:
    with socket.create_connection((host, 80), timeout=5) as s:
        s.sendall(f"GET / HTTP/1.1\r\nHost: {host}\r\nConnection: close\r\n\r\n".encode())
        chunks = []
        while True:
            b = s.recv(4096)
            if not b:
                break
            chunks.append(b)
        return b"".join(chunks).split(b"\r\n\r\n")[0]

print(fetch_headers("example.com").decode())
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Draw the handshake. Explain SEQ/ACK. Mention stream vs message. TIME_WAIT "address already in use."

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Capture a handshake in Wireshark; write SEQ/ACK numbers |
| Medium | TCP echo server; send three small writes; show coalesced reads |
| Hard | CS144 labs: byte stream + TCP sender/receiver |

**WHY THE NEXT TOPIC IS NEEDED - Congestion Control:** Reliability alone can still melt the network if senders blast. TCP must share - congestion control is the social contract.

---

## 10.2 Flow Control, Congestion Control, and HOL Blocking

**WHY YOU ARE LEARNING THIS:** Fast senders overwhelm slow receivers (**flow control** / window). Independent senders overwhelm shared links (**congestion control**). Classic loss-based CC assumes loss = congestion - shaky on Wi-Fi. Multiplexed apps on one TCP connection suffer **head-of-line blocking**.

**THE PROBLEM THIS SOLVES:** Early networks collapsed under load (congestion collapse). Without windows, hosts flooded links.

**SEE IT BEFORE YOU MEMORIZE IT**

- PowerCert / KnowledgeCatch TCP animations
- [Chris Greer TCP Wireshark series](https://www.youtube.com/watch?v=xdQ9sgpkrX8)
- HPBN congestion chapters · BBR papers (optional deep)
- CS144 measuring networks checkpoints

**STEP-BY-STEP EXPLANATION**

Flow control: receiver advertises window. Congestion control: sender cwnd - slow start (exponential), congestion avoidance (linear), cut on loss (or use delay/bandwidth signals in BBR). AIMD produces the sawtooth. HOL: one lost TCP segment blocks later bytes even if they belong to unrelated HTTP/2 streams - motivating QUIC.

**THE MAIN IDEA IN SIMPLE WORDS:** Probe carefully, back off on congestion signals, treat the network as a shared commons.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 cwnd
  ^     /|    /|
  |    / |   / |
  |   /  |  /  |     loss => cut
  |  /   | /   |
  | /    |/    |
  +----------------> time
    slow   AIMD
    start
```

**PICTURE IT LIKE THIS**

Entering a highway on-ramp meter (slow start/AIMD) so the freeway does not gridlock - even if your car can go faster.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Algorithm mindset | Trade-off |
| --- | --- |
| Loss-based CC | Simple vs wrong on wireless loss |
| Delay-based / BBR | Better utilization vs harder reasoning |
| One TCP conn for many streams | Efficient vs HOL |

**SMALL WORKING EXAMPLE**

```python
# Toy AIMD
cwnd = 1.0
for round in range(20):
    # increase
    cwnd += 1.0  # congestion avoidance style
    if round in (8, 15):  # fake loss events
        cwnd = max(1.0, cwnd / 2)
    print(round, round(cwnd, 2))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Separate flow vs congestion clearly. Explain slow start. Mention HOL as HTTP/2 limitation.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Define flow control vs congestion control |
| Medium | Sketch cwnd under slow start then loss |
| Hard | Read CS144 or HPBN; explain why bufferbloat hurts CC |

**WHY THE NEXT TOPIC IS NEEDED - Sockets:** Theory is useless until you bind it to the OS API programmers actually call - sockets.

---

> **Phase 10 complete?** [Build the aligned project](./Projects.md#networks-phase-10-project) · [Continue to Phase 11](#phase-11---sockets-programming-the-network)

<a id="phase-11"></a>

# PHASE 11 - Sockets: Programming the Network

**Track:** Programming

**WHAT YOU WILL BE ABLE TO DO:** Write real TCP/UDP clients and servers, understand blocking I/O, and frame messages on TCP streams.

**WHAT YOU SHOULD KNOW FIRST:** Phase 10 (TCP) and Phase 9 (UDP).

## 11.1 The Socket API - Client and Server Patterns

**WHY YOU ARE LEARNING THIS:** Kernels implement TCP/UDP. Applications need a portable API: **sockets**. `socket/bind/listen/accept/connect/send/recv/close` is the lingua franca from Beej to cloud microservices.

**THE PROBLEM THIS SOLVES:** Each OS exposed different networking calls. Without a standard abstraction, portable networked software was rare.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/html/) - *the* classic
- [beejjorgensen/bgnet](https://github.com/beejjorgensen/bgnet) · [brandon-rhodes/fopnp](https://github.com/brandon-rhodes/fopnp) · [unpbook/unpv13e](https://github.com/unpbook/unpv13e)
- [nguyenchiemminhvu/LinuxNetworkProgramming](https://github.com/nguyenchiemminhvu/LinuxNetworkProgramming)
- Pair with any "TCP sockets in Python" lab while reading Beej chapters 4-6
- Implement echo, then a tiny HTTP server

**STEP-BY-STEP EXPLANATION**

TCP server: `socket -> bind -> listen -> accept` loop. TCP client: `socket -> connect -> send/recv`. UDP: `sendto/recvfrom` without connect (or connected UDP). Blocking sockets stall threads; production uses threads, `select/poll/epoll`, or async. Errors are normal: timeouts, resets, broken pipes - handle them.

**THE MAIN IDEA IN SIMPLE WORDS:** One file-descriptor-like object representing an endpoint of communication, with a tiny set of verbs.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 SERVER                         CLIENT
 socket()                       socket()
 bind(port)                     |
 listen()                       |
 accept() <----- connect() -----|
 read/write <--> read/write
 close                          close
```

**PICTURE IT LIKE THIS**

A phone: bind is publishing your number, listen is waiting for calls, accept is picking up a specific call, connect is dialing.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Model | Buys | Costs |
| --- | --- | --- |
| Thread per connection | Simple code | Memory/context switch limits |
| select/epoll | Huge concurrency | Complexity |
| Blocking + timeout | Predictable failure | Easy to get timeouts wrong |

**SMALL WORKING EXAMPLE**

```python
# tcp_echo_server.py - run in one terminal
import socket

HOST, PORT = "127.0.0.1", 7_001
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    s.bind((HOST, PORT))
    s.listen()
    print("listening", HOST, PORT)
    conn, addr = s.accept()
    with conn:
        print("from", addr)
        while True:
            data = conn.recv(1024)
            if not data:
                break
            conn.sendall(data)
```

```python
# tcp_echo_client.py - run in another terminal
import socket
with socket.create_connection(("127.0.0.1", 7001)) as s:
    s.sendall(b"ping")
    print(s.recv(1024))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Explain accept vs connect. Discuss SO_REUSEADDR. Mention non-blocking and why reverse proxies exist.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Echo client/server locally |
| Medium | Concurrent server with threads handling 2 clients |
| Hard | Work Beej examples in C, or CS144 warmup sockets |

**WHY THE NEXT TOPIC IS NEEDED - Framing & Hardening:** TCP gives bytes, not messages. Production code must frame, timeout, and bound resources - or it hangs and melts.

---

## 11.2 Framing, Timeouts, and Graceful Failure

**WHY YOU ARE LEARNING THIS:** `recv` returning `"HEL"` then `"LO"` is correct TCP behavior. Protocols need **framing**. Without **timeouts**, a stalled peer freezes you. Without limits, a client can OOM your server.

**THE PROBLEM THIS SOLVES:** First socket programs assumed one `send` = one `recv`. They worked on localhost and failed on real networks.

**SEE IT BEFORE YOU MEMORIZE IT**

- Beej - "slightly advanced techniques" / partial sends
- [shuveb/zerohttpd](https://github.com/shuveb/zerohttpd) - tiny HTTP server architectures
- Chris Greer - watching retransmits when you pull a cable mid-transfer

**STEP-BY-STEP EXPLANATION**

Framing strategies: length prefix, delimiter (`\n`), or self-describing codecs. Always loop on `send`/`recv` until done or error. Set timeouts. Decide idempotency for retries (Phase 13 HTTP). Close vs shutdown semantics matter for half-open connections.

**THE MAIN IDEA IN SIMPLE WORDS:** Treat TCP as a hose of bytes; impose your own message boundaries and deadlines.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Want message "HELLO\n":
   recv -> "HE"
   recv -> "LLO\n"  concatenate until delimiter
 Length-prefix:
   [4-byte len][payload...] read exactly len bytes
```

**PICTURE IT LIKE THIS**

A phone call is a continuous audio stream; words are framed by silence and language - TCP won't tell you where sentences end.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Framing | Trade-off |
| --- | --- |
| Newline ASCII | Easy vs binary unsafe |
| Length prefix | reliable vs endian/max-size checks |
| Fixed size | Simple vs inflexible |

**SMALL WORKING EXAMPLE**

```python
import socket, struct

def recvall(conn: socket.socket, n: int) -> bytes:
    buf = b""
    while len(buf) < n:
        chunk = conn.recv(n - len(buf))
        if not chunk:
            raise ConnectionError("closed")
        buf += chunk
    return buf

def send_msg(conn: socket.socket, payload: bytes) -> None:
    conn.sendall(struct.pack("!I", len(payload)) + payload)

def recv_msg(conn: socket.socket) -> bytes:
    (n,) = struct.unpack("!I", recvall(conn, 4))
    if n > 1_000_000:
        raise ValueError("message too large")
    return recvall(conn, n)
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "Does one send equal one recv?" No. Follow-up: how design a protocol on TCP.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Demonstrate split reads with small `recv` buffers |
| Medium | Length-prefixed chat between two processes |
| Hard | Add timeouts + max message size + clean error logs |

**WHY THE NEXT TOPIC IS NEEDED - DNS:** Sockets connect to IPs. Humans use names. Something must map `example.com` → addresses - DNS.

---

> **Phase 11 complete?** [Build the aligned project](./Projects.md#networks-phase-11-project) · [Continue to Phase 12](#phase-12---dns-the-internets-phonebook)

<a id="phase-12"></a>

# PHASE 12 - DNS: The Internet's Phonebook

**Track:** Application Foundations

**WHAT YOU WILL BE ABLE TO DO:** Trace a DNS lookup, know major record types, and understand caching/TTL failure modes.

**WHAT YOU SHOULD KNOW FIRST:** UDP/TCP basics; IP addressing.

## 12.1 Resolution Path - Stub, Recursive, Authoritative

**WHY YOU ARE LEARNING THIS:** Humans cannot memorize IPs. **DNS** distributes a hierarchical namespace. Your stub resolver asks a recursive resolver, which walks root → TLD → authoritative nameservers.

**THE PROBLEM THIS SOLVES:** Hosts files (`HOSTS.TXT`) centrally distributed - could not scale to the global Internet.

**SEE IT BEFORE YOU MEMORIZE IT**

- [How a DNS Server works (PowerCert)](https://www.youtube.com/watch?v=mpQZVYPuDGU)
- [DNS Explained in 100 Seconds (Fireship)](https://www.youtube.com/watch?v=UVR9lhUGAyU)
- [How DNS Works Visually (Ryan Schachte)](https://www.youtube.com/watch?v=vrxwXXytEuI) · [NetworkChuck DNS](https://www.youtube.com/watch?v=NiQTs9DbtW4) · [Computerphile](https://www.youtube.com/watch?v=uOfonONtIuk)
- [Cloudflare - What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/) · [ByteByteGo DNS crash course](https://www.youtube.com/watch?v=27r4Bzuj5NQ)
- `nslookup`, `dig`, [dns.google](https://dns.google/)

**STEP-BY-STEP EXPLANATION**

Query types: A/AAAA (addresses), CNAME (alias), MX (mail), NS (nameserver), TXT (arbitrary), SRV. TTL controls cache lifetime. NXDOMAIN vs SERVFAIL matter for clients. DNS usually UDP/53; TCP for large responses/zone transfers. DNS is critical path for nearly every connection.

**THE MAIN IDEA IN SIMPLE WORDS:** Hierarchical delegation + caching beats any central host file.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 App -> Stub -> Recursive Resolver
                  |-- root: "ask .com"
                  |-- TLD:  "ask example.com NS"
                  |-- Auth: "A 93.184.216.34"
              <- answer (+ cache until TTL)
```

**PICTURE IT LIKE THIS**

Directory assistance: local desk (stub) calls a research librarian (recursive) who consults publishers (authoritative) and remembers the answer for a while (TTL).

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Caching | Fast reads vs slow updates after changes |
| DNS UDP | Low latency vs amplification attack risk |
| Low TTL | Agile failover vs higher query load |

**SMALL WORKING EXAMPLE**

```python
import socket
print(socket.getaddrinfo("example.com", 443, type=socket.SOCK_STREAM)[:2])
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Walk recursive resolution. Explain TTL for failover. CNAME vs A. Why DNS outages look like "the Internet is down."

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | `nslookup example.com` and identify answers |
| Medium | Compare TTL effects after a hypothetical IP change |
| Hard | Build a tiny UDP DNS stub that queries 8.8.8.8 (educational) |

**WHY THE NEXT TOPIC IS NEEDED - Records & Security:** Resolution path is not enough - you need confident working knowledge in records and awareness of DNS spoofing/DNSSEC/DoH as the trust problem.

---

## 12.2 Records, Caching Pitfalls, and Trust

**WHY YOU ARE LEARNING THIS:** Misread records cause subtle outages (MX pointed wrong, dangling CNAME). Caches delay fixes. Plain DNS is not authenticated by default - hence DNSSEC, DoT, DoH.

**THE PROBLEM THIS SOLVES:** Teams "updated DNS" and wondered why half the world still hit old IPs - TTLs. Attackers spoofed answers on path.

**SEE IT BEFORE YOU MEMORIZE IT**

- [DNS Records Explained (PowerCert)](https://www.youtube.com/watch?v=HnUDtycXSNE)
- Cloudflare Learning DNS record articles
- Study public zone examples; practice with dig

**STEP-BY-STEP EXPLANATION**

Glue records, apex CNAME restrictions, split-horizon DNS, and anycast resolvers appear in real ops. DoH/DoT encrypt client-resolver path; DNSSEC authenticates zone data. Know the difference.

**THE MAIN IDEA IN SIMPLE WORDS:** Treat DNS as a eventually-consistent distributed database with trust add-ons - not a instant global switch.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Change A record TTL 3600 -> wait up to 1 hour for caches.
 For fast failover: lower TTL *before* maintenance, then switch.
```

**PICTURE IT LIKE THIS**

Changing your phone number but old business cards (caches) still circulate until their "reprint date" (TTL).

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| DoH | Privacy vs enterprise visibility |
| DNSSEC | Authenticity vs operational complexity |
| Short TTL | Agility vs load |

**SMALL WORKING EXAMPLE**

```python
# Illustrative: many answers possible (round-robin)
import socket
ips = {ai[4][0] for ai in socket.getaddrinfo("example.com", 80)}
print(ips)
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "Site moves IPs but users still broken" - TTL/caching. "Is DNS encrypted?" - traditionally no; DoT/DoH optional.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Explain A vs AAAA vs CNAME |
| Medium | Design DNS for blue/green cutover |
| Hard | Summarize DNSSEC chain of trust at a high level |

**WHY THE NEXT TOPIC IS NEEDED - HTTP:** Names now resolve. Browsers still need an application protocol for "GET me this document" - HTTP.

---

> **Phase 12 complete?** [Build the aligned project](./Projects.md#networks-phase-12-project) · [Continue to Phase 13](#phase-13---http-and-the-web)

<a id="phase-13"></a>

# PHASE 13 - HTTP and the Web

**Track:** Application Protocols

**WHAT YOU WILL BE ABLE TO DO:** Speak HTTP/1.1 fluently and know what HTTP/2 and HTTP/3 changed.

**WHAT YOU SHOULD KNOW FIRST:** TCP sockets + DNS.

## 13.1 HTTP/1.1 - Methods, Status Codes, Headers, Bodies

**WHY YOU ARE LEARNING THIS:** TCP moves bytes. The Web needs a standard **request/response** language: method, path, headers, body, status codes. **HTTP** is that language - simple enough to type by hand, powerful enough to run the economy.

**THE PROBLEM THIS SOLVES:** Ad hoc application protocols everywhere. No uniform caching, content types, or intermediary rules (proxies).

**SEE IT BEFORE YOU MEMORIZE IT**

- [HTTP Explained (NeetCodeIO)](https://www.youtube.com/watch?v=wOPrIhmi7l0)
- [What Is REST API? (ByteByteGo)](https://www.youtube.com/watch?v=-mN3VyJuCjM)
- [WebSocket Protocol Explained (NeetCodeIO)](https://www.youtube.com/watch?v=5f0gZruaH9Y) - when HTTP request/response is not enough
- MDN HTTP docs · HPBN HTTP chapters
- [shuveb/zerohttpd](https://github.com/shuveb/zerohttpd)

**STEP-BY-STEP EXPLANATION**

Request line + headers + optional body. Response status (2xx success, 3xx redirect, 4xx client, 5xx server) + headers + body. Idempotent methods matter for retries (GET/PUT vs POST). Host header enables virtual hosting. Content-Length vs chunked encoding. Cookies carry state on a stateless protocol. Connection keep-alive reuses TCP.

**THE MAIN IDEA IN SIMPLE WORDS:** A text-friendly, extensible request/response convention on top of a reliable stream.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 CLIENT                                  SERVER
   |-- GET /index.html HTTP/1.1 -------->|
   |   Host: example.com                 |
   |   Connection: close                 |
   |<-- HTTP/1.1 200 OK -----------------|
   |   Content-Type: text/html           |
   |   <html>...                         |
```

**PICTURE IT LIKE THIS**

A standardized order form: verb (GET/POST), item path, sticky notes (headers), package (body), and a stamped result code.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Feature | Trade-off |
| --- | --- |
| Stateless + cookies | Scale vs privacy/complexity |
| Keep-alive | Less handshake cost vs idle connections |
| Proxies/caches | Performance vs freshness bugs |

**SMALL WORKING EXAMPLE**

```python
import socket
req = b"GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n"
with socket.create_connection(("example.com", 80), timeout=5) as s:
    s.sendall(req)
    print(s.recv(500).decode(errors="replace"))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Status code classes. Idempotency. Why Host header exists. Cookies vs tokens at a high level.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Manual GET with `curl -v` |
| Medium | Tiny static-file HTTP server in Python |
| Hard | Implement chunked responses |

**WHY THE NEXT TOPIC IS NEEDED - HTTP/2 & /3:** HTTP/1.1's many parallel connections and HOL issues forced new versions on better transports.

---

## 13.2 HTTP/2, HTTP/3, and Evolution Pressures

**WHY YOU ARE LEARNING THIS:** HTTP/1.1 opened many TCP connections to reduce HOL and head-of-line browser blocking. **HTTP/2** multiplexes streams over one TCP connection with binary framing. **HTTP/3** moves to QUIC to fix TCP HOL and improve handshake latency.

**THE PROBLEM THIS SOLVES:** Six connections per host hacks, head-of-line stalls, and slow crypto+TCP handshakes on mobile RTTs.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Cloudflare HTTP/3](https://www.cloudflare.com/learning/performance/what-is-http3/)
- ByteByteGo HTTP/2 vs HTTP/3 animations
- NeetCode TCP/IP + HTTP series

**STEP-BY-STEP EXPLANATION**

H2: binary frames, streams, HPACK header compression, server push (rarely used now). Still suffers TCP HOL. H3: QUIC streams, typically UDP/443, integrated TLS. From an app view, still HTTP semantics (methods, status, headers).

**THE MAIN IDEA IN SIMPLE WORDS:** Keep HTTP semantics; change the framing/transport underneath as networks and RTTs demand.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 HTTP/1.1: many TCP conns, text
 HTTP/2:   one TCP, many streams, binary - TCP loss blocks all streams
 HTTP/3:   QUIC/UDP, many streams - loss isolates better
```

**PICTURE IT LIKE THIS**

Same language of ordering food (HTTP semantics), but upgrading from one-lane roads with pileups (H1/H2+TCP) to multi-lane managed highways (H3/QUIC).

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Version | Wins | Costs |
| --- | --- | --- |
| H1 | Simplicity, debuggability | Parallelism hacks |
| H2 | Multiplex on TCP | TCP HOL, more complex |
| H3 | Latency, stream isolation | UDP blocking, harder capture |

**SMALL WORKING EXAMPLE**

```python
# Prefer stdlib/urllib or requests; HTTP/2 often needs httpx/h2 stacks.
import urllib.request
print(urllib.request.urlopen("https://example.com", timeout=5).status)
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "Difference HTTP/1.1 vs 2 vs 3?" Multiplexing and transport. Do not claim H2 is "always faster."

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | `curl -w %{http_version}` against a major site |
| Medium | Explain why one lost TCP packet hurts H2 streams |
| Hard | Compare waterfall charts H1 vs H2 in DevTools |

**WHY THE NEXT TOPIC IS NEEDED - TLS:** HTTP on port 80 is readable by anyone on path. Confidentiality and authentication require TLS - HTTPS.

---

> **Phase 13 complete?** [Build the aligned project](./Projects.md#networks-phase-13-project) · [Continue to Phase 14](#phase-14---tls-and-https)

<a id="phase-14"></a>

# PHASE 14 - TLS and HTTPS

**Track:** Security

**WHAT YOU WILL BE ABLE TO DO:** Explain what TLS guarantees, how certificates work at a high level, and how HTTPS composes TCP + TLS + HTTP.

**WHAT YOU SHOULD KNOW FIRST:** HTTP + TCP.

## 14.1 Confidentiality, Integrity, Authentication

**WHY YOU ARE LEARNING THIS:** Cleartext HTTP exposes passwords and cookies on any shared path. Attackers can also modify bytes. **TLS** provides encryption, integrity, and server authentication (usually). **HTTPS** is HTTP over TLS.

**THE PROBLEM THIS SOLVES:** Coffee-shop Wi-Fi could read your sessions. ISP middleboxes could inject ads. Users had no cryptographic proof they reached the real bank.

**SEE IT BEFORE YOU MEMORIZE IT**

- [SSL, TLS, HTTP, HTTPS Explained (PowerCert)](https://www.youtube.com/watch?v=hExRDVZHhig)
- [SSL, TLS, HTTPS Explained (ByteByteGo)](https://www.youtube.com/watch?v=j9QmMEWmcfo)
- [TLS Handshake (Sunny Classroom)](https://www.youtube.com/watch?v=sEkw8ZcxtFk) · [ByteMonk](https://www.youtube.com/watch?v=pOcHamIz7Ko)
- [Cloudflare - What is TLS?](https://www.cloudflare.com/learning/ssl/what-is-tls/)
- Browser padlock / certificate viewer

**STEP-BY-STEP EXPLANATION**

TLS handshake negotiates keys; modern TLS 1.3 is leaner (fewer RTTs). Certificates bind a public key to a name, signed by a Certificate Authority in a trust store. Asymmetric crypto authenticates/exchanges; symmetric encrypts bulk data. Forward secrecy protects past sessions if long-term keys leak later. HTTPS failures are often auth problems (name mismatch, expired, untrusted CA), not "encryption broken."

**THE MAIN IDEA IN SIMPLE WORDS:** Layer a cryptographic session on TCP (or inside QUIC) so HTTP can stay simple while the channel becomes hostile-network-safe.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 TCP handshake
   then TLS 1.3 handshake (certs, key agreement)
     then HTTP request bytes (encrypted records)
```

**PICTURE IT LIKE THIS**

A courier verifies the store's official seal (certificate), agrees a secret code (keys), then speaks in a language eavesdroppers cannot understand (encryption).

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Feature | Cost |
| --- | --- |
| TLS | CPU + handshake latency |
| Cert management | Ops burden / outage if expired |
| MITM proxies | Enterprise visibility vs trust/breakage |

**SMALL WORKING EXAMPLE**

```python
import ssl, socket
ctx = ssl.create_default_context()
with socket.create_connection(("example.com", 443), timeout=5) as raw:
    with ctx.wrap_socket(raw, server_hostname="example.com") as ssock:
        print(ssock.version())
        ssock.sendall(b"GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n")
        print(ssock.recv(300))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** HTTPS vs HTTP. What a cert proves. Why both asymmetric and symmetric. Certificate warning causes.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Inspect example.com certificate chain in browser |
| Medium | Explain hostname verification |
| Hard | Summarize TLS 1.2 vs 1.3 handshake differences |

**WHY THE NEXT TOPIC IS NEEDED - Wireshark:** You can describe stacks - now learn to *see* them on the wire when production lies to you.

---

## 14.2 PKI Pitfalls and Operational Reality

**WHY YOU ARE LEARNING THIS:** Most HTTPS outages are operational: expired certs, wrong SANs, incomplete chains, clock skew. Understanding PKI failure modes is as important as the handshake diagram.

**THE PROBLEM THIS SOLVES:** Teams enabled TLS once and forgot renewal. Mobile clients with pinned certs broke on rotation.

**SEE IT BEFORE YOU MEMORIZE IT**

- Let's Encrypt / ACME docs
- Certificate error debugging walkthroughs
- [SSL Labs server test](https://www.ssllabs.com/ssltest/)

**STEP-BY-STEP EXPLANATION**

Chain building, intermediate certs, OCSP/CRL revocation (imperfect), CT logs, and ACME automation. Mutual TLS (mTLS) authenticates clients too - common in service meshes.

**THE MAIN IDEA IN SIMPLE WORDS:** Automate issuance/renewal; monitor expiry; treat certificates as production dependencies.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 leaf cert --signed by--> intermediate --signed by--> root (in trust store)
 If intermediate missing on server: some clients fail.
```

**PICTURE IT LIKE THIS**

A passport (leaf) issued by a country office (intermediate) recognized because your border agent trusts that country's root authority.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Pinning | Strong MITM resistance vs brittle rotations |
| Long-lived certs | Less churn vs bigger compromise window |
| Short-lived certs | Safer vs harder offline devices |

**SMALL WORKING EXAMPLE**

```python
# Always pass server_hostname for SNI + verification (see prior snippet).
print("Ops rule: alert 30 days before cert expiry; prefer ACME auto-renew.")
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Walk a certificate warning. Mention SNI. mTLS for microservices.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Find expiry date on a site cert |
| Medium | Cause a local hostname mismatch with a self-signed cert and observe the error |
| Hard | Outline an ACME deployment for a fleet of services |

**WHY THE NEXT TOPIC IS NEEDED - Wireshark:** When TLS or TCP fails in the wild, packet captures settle arguments - learn to capture and filter next.

---

> **Phase 14 complete?** [Build the aligned project](./Projects.md#networks-phase-14-project) · [Continue to Phase 15](#phase-15---wireshark-and-packet-analysis)

<a id="phase-15"></a>

# PHASE 15 - Wireshark and Packet Analysis

**Track:** Observability

**WHAT YOU WILL BE ABLE TO DO:** Capture traffic, write useful display filters, and diagnose handshake/DNS/TLS problems from packets.

**WHAT YOU SHOULD KNOW FIRST:** Layers 2-4 vocabulary; HTTP/TLS awareness.

## 15.1 Capture Workflow and Display Filters

**WHY YOU ARE LEARNING THIS:** Logs lie; dashboards lag; users paraphrase. **Packets** are primary evidence. Wireshark (and `tshark`/`tcpdump`) turns the abstract stack into expandable bytes.

**THE PROBLEM THIS SOLVES:** "The network is slow" debates with no artifacts. Engineers guessed instead of measured.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Learn Wireshark! Tutorial for BEGINNERS (Chris Greer)](https://www.youtube.com/watch?v=OU-A2EmVrKQ)
- [Wireshark for BEGINNERS // Capture Network Traffic](https://www.youtube.com/watch?v=nWvscuxqais)
- [3 Tips for Wireshark Beginners](https://www.youtube.com/watch?v=Ch7wbgK6xb4) · [TCP Fundamentals Part 1](https://www.youtube.com/watch?v=xdQ9sgpkrX8)
- [Wireshark](https://www.wireshark.org/) · [Sample Captures](https://wiki.wireshark.org/SampleCaptures)
- [caesar0301/awesome-pcaptools](https://github.com/caesar0301/awesome-pcaptools)

**STEP-BY-STEP EXPLANATION**

Capture on the right interface; avoid capturing yourself into a loop. Use capture filters (BPF) to reduce volume; display filters to explore. Essential filters: `ip.addr==`, `tcp.port==443`, `dns`, `tcp.flags.syn==1`, `tcp.analysis.retransmission`. Follow TCP stream to rebuild application data (cleartext). For TLS, you often see only handshake plaintext unless keys are available.

**THE MAIN IDEA IN SIMPLE WORDS:** Make the layered model clickable - each header a tree node - then filter ruthlessly.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 1. Reproduce issue
 2. Capture near the failing endpoint
 3. Filter to 4-tuple of interest
 4. Ask: DNS fail? TCP SYN no SYN-ACK? TLS alert? HTTP 5xx?
 5. Save pcap + notes for the incident ticket
```

**PICTURE IT LIKE THIS**

A flight data recorder for conversations on the wire - not opinions about what was said.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Full capture | Completeness vs privacy/disk |
| SPAN/TAP | Visibility vs setup cost |
| Decrypt TLS | Deep app debug vs key handling risk |

**SMALL WORKING EXAMPLE**

```python
# Prefer tcpdump/tshark in shell; Python example using scapy if installed:
"""
from scapy.all import sniff
pkts = sniff(count=10, filter="udp port 53")
print(pkts.summary())
"""
print("Use: tcpdump -i any -w lab.pcap host example.com")
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Describe how you would debug "can't reach API" with packets. Name filters. Distinguish loss vs server refuse (RST) vs timeout.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Capture DNS lookup; identify query/response |
| Medium | Filter retransmissions during a large download |
| Hard | Diagnose a forced TLS intercept lab and explain certificate errors via capture |

**WHY THE NEXT TOPIC IS NEEDED - Diagnosis Patterns:** Capturing is not enough - you need a playbook mapping symptoms to layers.

---

## 15.2 A Layered Debugging Playbook

**WHY YOU ARE LEARNING THIS:** Random packet staring wastes hours. A disciplined path - L1 up or symptom down - finds root causes fast.

**THE PROBLEM THIS SOLVES:** Junior engineers jump to "maybe MTU" or "maybe DNS" without evidence ordering.

**SEE IT BEFORE YOU MEMORIZE IT**

- Chris Greer name resolution / dumpcap lessons
- Company runbooks; your own checklist in portfolio (Phase 19)

**STEP-BY-STEP EXPLANATION**

Quick ladder: link up? ARP/neigh for gateway? ping gateway? ping public IP? DNS resolve? TCP connect? TLS? HTTP code? Each "yes" eliminates a layer. Correlate OS errors (`ECONNREFUSED`, `ETIMEDOUT`) with packet evidence (RST vs silence).

**THE MAIN IDEA IN SIMPLE WORDS:** Debug by elimination along the same layered model you learned.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Symptom: browser spin
   DNS NXDOMAIN? -> DNS
   SYN no reply? -> filter/routing/blackhole
   SYN-ACK then RST? -> server/app
   TLS alert? -> cert/protocol
   HTTP 503? -> app/upstream
```

**PICTURE IT LIKE THIS**

A medic's ABC checklist - airway before surgery. Layers before exotic theories.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Blind restarts | Sometimes works vs no learning, recurring outages |
| Packet-first | Truth vs need for access/privacy controls |

**SMALL WORKING EXAMPLE**

```python
import socket

def check(host, port=443):
    try:
        socket.getaddrinfo(host, port)
        print("DNS ok")
    except socket.gaierror as e:
        return print("DNS fail", e)
    try:
        with socket.create_connection((host, port), timeout=3):
            print("TCP ok")
    except OSError as e:
        print("TCP fail", e)

check("example.com")
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Narrate this ladder out loud - it is most of "how do you debug networks?"

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Write your own 8-step checklist |
| Medium | Break DNS on purpose in a VM; follow the ladder |
| Hard | Blind-debug a pcap from Wireshark SampleCaptures |

**WHY THE NEXT TOPIC IS NEEDED - Wireless:** Wired captures are clean compared to radio. Wi-Fi reintroduces shared media, interference, and rate adaptation - Phase 16.

---

> **Phase 15 complete?** [Build the aligned project](./Projects.md#networks-phase-15-project) · [Continue to Phase 16](#phase-16---wireless-and-wi-fi)

<a id="phase-16"></a>

# PHASE 16 - Wireless and Wi-Fi

**Track:** Access Networks

**WHAT YOU WILL BE ABLE TO DO:** Understand Wi-Fi as a shared-medium access network and how it stresses TCP assumptions.

**WHAT YOU SHOULD KNOW FIRST:** Physical + link layers; TCP congestion caveats.

## 16.1 802.11 Basics - SSIDs, Association, Frames

**WHY YOU ARE LEARNING THIS:** Mobility demands radio. **Wi-Fi (802.11)** connects hosts without Ethernet cables using access points, associations, and its own frame types - still carrying IP above.

**THE PROBLEM THIS SOLVES:** Untethered devices could not join LANs. Proprietary wireless links did not interoperate.

**SEE IT BEFORE YOU MEMORIZE IT**

- NetworkChuck / PowerCert Wi-Fi explainers
- [AlgoMaster wireless section](https://algomaster.io/roadmaps/cn)
- InSSIDer / OS Wi-Fi diagnostics; AP channel maps

**STEP-BY-STEP EXPLANATION**

STA associates with AP; authentication/association states; encryption (WPA2/WPA3). Management vs data frames. Channels overlap; 2.4 GHz is crowded; 5/6 GHz trade range for airtime. CSMA/CA and airtime fairness matter. Roaming between APs can interrupt flows.

**THE MAIN IDEA IN SIMPLE WORDS:** Pretend to be Ethernet from IP's view, while managing a hostile shared RF medium underneath.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Device scan -> pick SSID -> auth/assoc -> 4-way handshake (WPA) -> get IP (DHCP) -> IP traffic
```

**PICTURE IT LIKE THIS**

A busy cafe conversation: everyone shares air; talking over each other forces retries; moving rooms (roaming) briefly loses the thread.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| 2.4 GHz | Range vs congestion |
| 5/6 GHz | Speed vs walls |
| Dense APs | Coverage vs co-channel interference |

**SMALL WORKING EXAMPLE**

```python
print("Measure, don't guess: RSSI, channel utilization, retries - AP controllers expose these.")
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Why wireless feels flaky vs Ethernet. WPA2 vs open. Enterprise vs PSK at high level.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Note your AP channel and RSSI |
| Medium | Explain hidden node problem conceptually |
| Hard | Site-survey a small apartment; recommend channels |

**WHY THE NEXT TOPIC IS NEEDED - TCP-over-Wi-Fi:** Radio loss tricks congestion control - the next concept ties Phases 10 and 16 together.

---

## 16.2 Interference, Retries, and TCP on Wi-Fi

**WHY YOU ARE LEARNING THIS:** 802.11 retries mask some loss, but residual loss and delay variation still make TCP shrink `cwnd` as if the Internet core were congested. Understanding this prevents false "WAN congestion" diagnoses.

**THE PROBLEM THIS SOLVES:** Operators blamed backhaul when the airtime was the bottleneck. TCP "optimized" for wired loss semantics.

**SEE IT BEFORE YOU MEMORIZE IT**

- HPBN mobile/wireless chapters
- Chris Greer captures on Wi-Fi pathologies (search)

**STEP-BY-STEP EXPLANATION**

Airtime is the scarce resource, not only Mbps peak PHY rate. Low RSSI → lower MCS → more airtime per byte → queueing. Neighboring networks collide. Cellular adds its own buffering (bufferbloat). Modern stacks use better CC (BBR) and QUIC; still measure RF first.

**THE MAIN IDEA IN SIMPLE WORDS:** Separate wireless loss/airtime problems from Internet congestion before you tune TCP.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Low RSSI -> rate down -> each TCP segment costs more airtime
 -> AP queues grow -> RTT spikes -> TCP may back off
 Looks like "Internet congestion" but fix is RF/channel/AP placement
```

**PICTURE IT LIKE THIS**

Blaming the highway for traffic when the parking garage exit is jammed.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Aggressive TCP retries | App recovery vs worse airtime collapse |
| Band-steering | Better client rates vs sticky client issues |

**SMALL WORKING EXAMPLE**

```python
import time, urllib.request
t0 = time.perf_counter()
urllib.request.urlopen("https://example.com", timeout=10).read(1000)
print("seconds", time.perf_counter() - t0)
# Compare on Ethernet vs Wi-Fi vs phone hotspot - interpret deltas carefully.
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** "Users on Wi-Fi slow, Ethernet fine - what check?" RF, channel, airtime, not only WAN.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Speedtest on Wi-Fi vs cable |
| Medium | Correlate retry counters with user complaints |
| Hard | Write a one-page incident postmortem template for "Wi-Fi congestion" |

**WHY THE NEXT TOPIC IS NEEDED - CDN/LB:** Access networks deliver users to the edge. Global apps still need scale-out delivery - CDNs and load balancers.

---

> **Phase 16 complete?** [Build the aligned project](./Projects.md#networks-phase-16-project) · [Continue to Phase 17](#phase-17---cdn-load-balancers-and-edge)

<a id="phase-17"></a>

# PHASE 17 - CDN, Load Balancers, and Edge

**Track:** Scale

**WHAT YOU WILL BE ABLE TO DO:** Contrast reverse proxies, load balancers, API gateways, and CDNs; know what problem each solves.

**WHAT YOU SHOULD KNOW FIRST:** DNS, HTTP, TLS.

## 17.1 Reverse Proxies and Load Balancing

**WHY YOU ARE LEARNING THIS:** One origin server dies under popularity. **Load balancers** distribute connections across healthy backends. **Reverse proxies** terminate TLS, route, cache, and shield origins.

**THE PROBLEM THIS SOLVES:** Clients hit a single IP/server. Failures were binary. Scaling meant bigger boxes (vertical) until that failed too.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Reverse Proxy vs API Gateway vs Load Balancer (ByteByteGo)](https://www.youtube.com/watch?v=RqfaTIWc3LQ)
- [Top 6 Load Balancing Algorithms (ByteByteGo)](https://www.youtube.com/watch?v=dBmxNsS3BGE)
- [What is a Load Balancer? (IBM Technology)](https://www.youtube.com/watch?v=sCR3SAVdyCc) · [Proxy vs Reverse Proxy](https://www.youtube.com/watch?v=4NB0NDtOwIQ)
- Cloudflare Learning reverse proxy / load balancing articles

**STEP-BY-STEP EXPLANATION**

L4 LB balances TCP/UDP tuples; L7 LB routes on HTTP host/path and can do sticky sessions, canary, WAF. Algorithms: round robin, least connections, consistent hashing. Health checks remove bad backends. API gateways add auth/rate-limit concerns on top of reverse proxy duties. Distinguish forward proxy (client side) vs reverse (server side).

**THE MAIN IDEA IN SIMPLE WORDS:** Put an indirection hop in front of many backends with health-aware distribution.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Client -> DNS -> LB VIP
              -> healthy backend A/B/C
 Health check fail on B -> remove from pool
```

**PICTURE IT LIKE THIS**

A restaurant host seating guests across waiters, skipping a waiter who called out sick (health check).

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Sticky sessions | Simplicity for stateful apps vs uneven load, harder failover |
| L7 routing | Power vs CPU cost |
| More hops | Features vs latency |

**SMALL WORKING EXAMPLE**

```python
backends = ["a", "b", "c"]
i = 0

def pick():
    global i
    b = backends[i % len(backends)]
    i += 1
    return b

print([pick() for _ in range(5)])
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** L4 vs L7. How health checks work. Idempotency when LB retries.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Define forward vs reverse proxy |
| Medium | Design LB for blue/green deploy |
| Hard | Explain consistent hashing for cache-friendly LB |

**WHY THE NEXT TOPIC IS NEEDED - CDN:** LB scales one region. Global users need content nearby - CDNs and anycast.

---

## 17.2 CDNs, Anycast, and Edge Caching

**WHY YOU ARE LEARNING THIS:** Speed of light is a hard limit. **CDNs** cache static (and sometimes dynamic) content at PoPs near users. DNS or anycast steers clients to a nearby edge. Origins see less traffic; users see less latency.

**THE PROBLEM THIS SOLVES:** Every hit slammed a central origin across oceans. Flash crowds melted single regions.

**SEE IT BEFORE YOU MEMORIZE IT**

- [What Is A CDN? How Does It Work? (ByteByteGo)](https://www.youtube.com/watch?v=RI9np1LWzqw)
- [Cloudflare - What is a CDN?](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)
- DNS + CDN steering case studies

**STEP-BY-STEP EXPLANATION**

Cache-Control headers decide what can be stored. Cache HIT/MISS/BYPASS. Purge/invalidate after deploy. TLS often terminates at edge. Anycast announces the same IP from many PoPs; BGP delivers to nearby announcement. CDNs also absorb some DDoS.

**THE MAIN IDEA IN SIMPLE WORDS:** Move bytes closer to users; keep origins authoritative but not overwhelmed.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 User -> edge PoP (HIT? return : fetch origin, maybe cache)
 Deploy new asset -> purge or versioned URL (better)
```

**PICTURE IT LIKE THIS**

Neighborhood mini-warehouses for popular products instead of shipping every order from one factory.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Long cache TTL | Speed vs stale content |
| Versioned URLs | Safe caching vs app discipline |
| Edge logic | Features vs complexity/debug difficulty |

**SMALL WORKING EXAMPLE**

```python
# Versioned URL pattern beats purge races
asset = "/static/app.js"
versioned = "/static/app.3f2a1c.js"
print("cache forever:", versioned)
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** How CDN works with DNS. Cache key pitfalls (query strings). Why `index.html` often short TTL while hashed JS long TTL.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Identify Cache-Control on a news homepage vs a .js asset |
| Medium | Design cache policy for SPA |
| Hard | Explain an anycast outage failure mode |

**WHY THE NEXT TOPIC IS NEEDED - BGP:** CDN anycast and multi-homing sit on the real Internet's interdomain routing - BGP.

---

> **Phase 17 complete?** [Build the aligned project](./Projects.md#networks-phase-17-project) · [Continue to Phase 18](#phase-18---bgp-and-internet-architecture)

<a id="phase-18"></a>

# PHASE 18 - BGP and Internet Architecture

**Track:** Interdomain

**WHAT YOU WILL BE ABLE TO DO:** Explain ASes, peering vs transit, and why BGP is policy-driven; recognize leak/hijack failure modes.

**WHAT YOU SHOULD KNOW FIRST:** Routing Phase 6; DNS/CDN curiosity.

## 18.1 Autonomous Systems, Peering, and Transit

**WHY YOU ARE LEARNING THIS:** No single organization owns the Internet. **Autonomous Systems (AS)** exchange reachability with **BGP**. Relationships - transit (pay for access) vs peering (settlement-free traffic exchange) - dominate path selection more than pure hop count.

**THE PROBLEM THIS SOLVES:** An IGP cannot administer independent companies with conflicting business goals. Interdomain routing needs policy.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Cloudflare - What is BGP?](https://www.cloudflare.com/learning/security/glossary/what-is-bgp/)
- ByteByteGo BGP videos
- [Hurricane Electric BGP toolkit](https://bgp.he.net/) look up ASNs
- Cloudflare Learning Center articles about how the Internet's parts work together

**STEP-BY-STEP EXPLANATION**

eBGP between ASes; iBGP inside. AS paths loop-prevent. Attributes (local pref, MED, AS path length) implement policy. Default-free zone carries many prefixes. IXPs help peering. Content providers peer aggressively to reduce transit costs and latency.

**THE MAIN IDEA IN SIMPLE WORDS:** Exchange routes as business relationships, not as a single global SPF computation.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 AS64500 (ISP) --transit--> AS64501 (enterprise)
 AS64502 (CDN) --peer------> AS64500
 Traffic prefers policy: local pref to peer may beat shorter AS path via transit
```

**PICTURE IT LIKE THIS**

Airlines: codeshares and alliances (peering) vs buying tickets through a competitor's network (transit). The "shortest" path is not always the contracted one.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Rich peering | Latency/cost wins vs complex relationships |
| Single transit | Simple vs expensive, weaker redundancy |

**SMALL WORKING EXAMPLE**

```python
# Toy policy: higher local_pref wins
candidates = [
    {"path": [1, 2, 3], "local_pref": 100},
    {"path": [1, 9], "local_pref": 200},
]
print(sorted(candidates, key=lambda c: (-c["local_pref"], len(c["path"])))[0])
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** What is an AS? Peering vs transit. Why BGP matters to HTTPS/CDN performance.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Look up Cloudflare's ASN on bgp.he.net |
| Medium | Explain why a longer AS path might still win |
| Hard | Read a BGP leak postmortem and summarize safeguards (RPKI, filters) |

**WHY THE NEXT TOPIC IS NEEDED - Hijacks & Security:** BGP's trust assumptions fail catastrophically when routes are leaked or hijacked - know the risk surface.

---

## 18.2 Leaks, Hijacks, RPKI - and Why Filtering Matters

**WHY YOU ARE LEARNING THIS:** A mistaken announcement can blackhole a chunk of the Internet. **Route leaks** and **hijacks** are recurring global incidents. Defenses include prefix filtering, IRR, and **RPKI**/ROA validation - imperfect but necessary.

**THE PROBLEM THIS SOLVES:** Early BGP assumed trustworthy neighbors. That does not scale to the modern Internet.

**SEE IT BEFORE YOU MEMORIZE IT**

- Cloudflare/MANRS materials on RPKI
- Postmortems of famous BGP incidents (YouTube/conference talks)

**STEP-BY-STEP EXPLANATION**

Operators should announce only their prefixes. Customers should not be used as transit accidentally. RPKI cryptographically attests which AS may originate a prefix. Adoption is partial - defense in depth still required.

**THE MAIN IDEA IN SIMPLE WORDS:** Constrain what BGP *will accept*, not only what it *can* compute.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Without filters: AS evil announces 0.0.0.0/0 or victim prefix -> traffic redirects
 With filters + RPKI: invalid origins dropped/rejected per policy
```

**PICTURE IT LIKE THIS**

Anyone can print fake road signs unless cities authenticate official signage - RPKI is the authentication attempt.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Strict RPKI | Safety vs risk of mis-ROA outages |
| Loose filters | Availability vs hijack exposure |

**SMALL WORKING EXAMPLE**

```python
allowed = {"203.0.113.0/24": 64501}

def accept(prefix, origin_asn):
    return allowed.get(prefix) == origin_asn

print(accept("203.0.113.0/24", 64501), accept("203.0.113.0/24", 666))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Explain a hijack at high level. Mention RPKI. Show humility - this is deep ops territory.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Define route leak vs hijack |
| Medium | Why can a more-specific prefix steal traffic? |
| Hard | Draft a checklist for a new BGP customer session |

**WHY THE NEXT TOPIC IS NEEDED - Labs & Portfolio:** Theory without artifacts will not hire you. Build captures, labs, and write-ups next.

---

> **Phase 18 complete?** [Build the aligned project](./Projects.md#networks-phase-18-project) · [Continue to Phase 19](#phase-19---labs-portfolio-and-automation)

<a id="phase-19"></a>

# PHASE 19 - Labs, Portfolio, and Automation

**Track:** Proof

**WHAT YOU WILL BE ABLE TO DO:** Produce public proof of skill: labs, pcaps, write-ups, and basic automation.

**WHAT YOU SHOULD KNOW FIRST:** the knowledge from Phases 1-18.

## 19.1 Build a Portfolio That Proves Networking Skill

**WHY YOU ARE LEARNING THIS:** Saying "I know TCP" is cheap. A repo with an echo server, a Wireshark challenge write-up, a Packet Tracer diagram, and CS144 progress is expensive - in the good way.

**THE PROBLEM THIS SOLVES:** Resumes list certifications or buzzwords without artifacts. Hiring managers cannot validate.

**SEE IT BEFORE YOU MEMORIZE IT**

- [Stanford CS144](https://cs144.github.io/)
- [OfekiAlm/practical-networking-from-zero-to-hero](https://github.com/OfekiAlm/practical-networking-from-zero-to-hero/)
- [PKUFlyingPig/CS144-Computer-Network](https://github.com/PKUFlyingPig/CS144-Computer-Network)
- [aos/computer-networking-study](https://github.com/aos/computer-networking-study)
- [AlgoMaster CN projects list](https://algomaster.io/roadmaps/cn)
- [Beej](https://beej.us/guide/bgnet/html/) exercises

**STEP-BY-STEP EXPLANATION**

Minimum viable portfolio: (1) TCP/UDP socket project with framing; (2) annotated pcap of DNS+TCP+TLS; (3) subnetting cheat-sheet you wrote; (4) small write-up "what happens when I curl my site"; (5) optional CS144 checkpoint notes. Quality of explanation > quantity of tools.

**THE MAIN IDEA IN SIMPLE WORDS:** Treat learning output as products with READMEs, diagrams, and reproduction steps.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 For each lab:
   Goal -> Steps -> Evidence (pcap/screenshot) -> What broke -> What I learned
 Publish to GitHub; link from resume.
```

**PICTURE IT LIKE THIS**

A chef's tasting menu vs claiming "I can cook."

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Broad shallow labs | Coverage vs no depth signal |
| One deep CS144 track | Strong signal vs time |

**SMALL WORKING EXAMPLE**

```python
# Portfolio README skeleton generator
sections = ["Goal", "Topology", "Steps", "Packets", "Failure injection", "Lessons"]
print("\n".join(f"## {s}" for s in sections))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Walk your own pcap in the interview. It beats whiteboard-only candidates.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Publish echo server repo |
| Medium | Annotated pcap write-up |
| Hard | Finish CS144 through TCP sender/receiver |

**WHY THE NEXT TOPIC IS NEEDED - Automation:** Manual CLI does not scale. Network automation is how infra teams ship changes safely.

---

## 19.2 Network Automation Literacy

**WHY YOU ARE LEARNING THIS:** Clicky UI changes drift and do not audit well. **Automation** (Python, Ansible, NAPALM, Terraform for cloud nets, NetBox as source of truth) makes changes repeatable.

**THE PROBLEM THIS SOLVES:** Snowflake routers. Nobody knew why a route existed. Outages from "temporary" ACL fixes.

**SEE IT BEFORE YOU MEMORIZE IT**

- [networktocode/awesome-network-automation](https://github.com/networktocode/awesome-network-automation)
- [CiscoDevNet/netprog_basics](https://github.com/CiscoDevNet/netprog_basics)
- DevNet / NTC blogs

**STEP-BY-STEP EXPLANATION**

Start with: inventory source of truth, intentional config generation, dry-run diffs, staged rollout, rollback. Even software engineers benefit: understand why "the network team" demands tickets and change windows.

**THE MAIN IDEA IN SIMPLE WORDS:** Apply software engineering to network state - version, test, review, deploy.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 NetBox inventory -> generate config -> review diff -> push N devices -> validate tests
```

**PICTURE IT LIKE THIS**

Infrastructure as code for buildings: blueprints over improvisational remodeling.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Full automation | Speed vs blast radius if buggy |
| Manual + docs | Careful vs drift |

**SMALL WORKING EXAMPLE**

```python
# Fake inventory diff
desired = {"r1": "ospf area 0"}
actual = {"r1": "ospf area 1"}
for device, conf in desired.items():
    if actual.get(device) != conf:
        print(f"CHANGE {device}: {actual.get(device)} -> {conf}")
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** How would you safely update ACLs on 200 routers? Mention canaries, diffs, source of truth.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | Script parsing of `ipconfig`/`ip addr` output |
| Medium | Ansible ping module against lab VMs |
| Hard | Generate interface configs from a YAML inventory |

**WHY THE NEXT TOPIC IS NEEDED - Interviews:** Artifacts ready - train the oral exam next: URL bar walkthroughs, design prompts, debugging narratives.

---

> **Phase 19 complete?** [Build the aligned project](./Projects.md#networks-phase-19-project) · [Continue to Phase 20](#phase-20---interviews)

<a id="phase-20"></a>

# PHASE 20 - Interviews

**Track:** Hire

**WHAT YOU WILL BE ABLE TO DO:** Narrate networking clearly under pressure with correct layering and honest trade-offs.

**WHAT YOU SHOULD KNOW FIRST:** Portfolio from Phase 19; confident working knowledge in Phases 1-18.

## 20.1 The URL Bar Walkthrough and Core Drills

**WHY YOU ARE LEARNING THIS:** "What happens when you type a URL and press Enter?" is the canonical systems networking question. It tests whether your knowledge is a chain or a trivia pile.

**THE PROBLEM THIS SOLVES:** Candidates recite "DNS then TCP then HTTP" without ports, TLS, caching, or failure modes - and freeze on follow-ups.

**SEE IT BEFORE YOU MEMORIZE IT**

- Review your own Phase 8/12/13/14 notes
- NeetCode HTTP + ByteByteGo TLS/CDN playlist
- HPBN as interview depth booster

**STEP-BY-STEP EXPLANATION**

A strong answer: browser cache/HSTS → DNS (stub/recursive/records) → connect (TCP or QUIC) → TLS (cert verify) → HTTP request → proxies/CDN/LB → server → response → rendering. Mention parallel connections, Keep-Alive, and where failure shows up. Then invite follow-ups: "want me to go deeper on TLS or routing?"

**THE MAIN IDEA IN SIMPLE WORDS:** Answer as a story of protocols reacting to limitations - the same bridges as this document.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Type URL
  -> parse scheme/host/path
  -> DNS
  -> transport+crypto
  -> HTTP
  -> bytes back
  -> render
 At each step: name one failure mode
```

**PICTURE IT LIKE THIS**

A tour guide who knows the city route and the alleys when a street is blocked - not someone who memorized street names from a list.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Too shallow | Fails screen |
| Too deep on crypto math | Misses time; read the interviewer |

**SMALL WORKING EXAMPLE**

```python
steps = [
    "DNS lookup",
    "TCP handshake",
    "TLS handshake",
    "HTTP GET",
    "response + render",
]
for i, s in enumerate(steps, 1):
    print(f"{i}. {s} - failure mode: ?")
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** This *is* the interview perspective. Practice aloud with a timer (5 and 12 minutes versions).

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | 5-minute URL walkthrough recorded |
| Medium | Add CDN + LB to the story |
| Hard | Answer follow-ups on NAT, HOL, BGP without notes |

**WHY THE NEXT TOPIC IS NEEDED - Design & Behavioral:** Networking interviews also include design prompts and stories about incidents - prepare those explicitly.

---

## 20.2 Design Prompts, Debugging Stories, and Soft Signals

**WHY YOU ARE LEARNING THIS:** Senior roles ask you to design a global API edge, or recount an outage. They test judgment: metrics, failure domains, rollbacks - not only RFC trivia.

**THE PROBLEM THIS SOLVES:** Candidates who can define SYN but cannot choose between anycast CDN vs multi-region LB under constraints.

**SEE IT BEFORE YOU MEMORIZE IT**

- ByteByteGo system design networking episodes (CDN, LB, DNS)
- Your Phase 19 postmortems

**STEP-BY-STEP EXPLANATION**

Design prompt checklist: requirements (latency, RPS, consistency), assumptions, high-level diagram, DNS plan, TLS termination, LB strategy, caching, health checks, observability (pcaps/metrics/logs), abuse/DDoS, rollout. Behavioral: STAR stories from labs ("I misconfigured NAT and learned...").

**THE MAIN IDEA IN SIMPLE WORDS:** Tie every design choice to a failure mode you can name from earlier phases.

**WHAT HAPPENS INSIDE, ONE STEP AT A TIME**

```
 Clarify -> Diagram -> Data plane path -> Control plane (DNS/BGP) -> Failure drills -> Metrics
```

**PICTURE IT LIKE THIS**

Architect plus firefighter: draw the building and explain the sprinkler test.

**WHAT YOU GAIN, WHAT IT COSTS, AND WHERE IT CAN FAIL**

| Choice | Trade-off |
| --- | --- |
| Over-design | Impressive diagram vs ignores constraints |
| Under-design | Ships but dies on day 2 traffic |

**SMALL WORKING EXAMPLE**

```python
checklist = ["SLA", "regions", "DNS TTL", "TLS", "LB", "cache", "health", "ddos", "o11y", "rollback"]
print("Design prompt checklist:", ", ".join(checklist))
```

**HOW TO EXPLAIN THIS IN AN INTERVIEW:** Ask clarifying questions first. State trade-offs explicitly. Admit unknowns; describe how you would verify with packets.

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| --- | --- |
| Easy | STAR story from a lab failure |
| Medium | 45-minute mock: URL + design a URL shortener edge |
| Hard | Full loop: debugging pcap + design + behavioral |

**WHY THE NEXT TOPIC IS NEEDED BEYOND This Document:** Production invents the next limitation - a BGP incident, a bufferbloat mystery, a QUIC middlebox - and that limitation becomes your next concept. Keep the habit: what broke, why, what we invent next.

---

> **Phase 20 complete?** [Build the aligned project](./Projects.md#networks-phase-20-project) · [Return to the phase index](#phase-index)

---

## Appendix A - Suggested Path Splits

**If you want Software Engineer networking literacy**

1 -> 2 (skim) -> 3 -> 5 -> 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13 -> 14 -> 15 -> 17 -> 20

**If you want Network / Infra Engineer**

1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 15 -> 16 -> 18 -> 19 -> 20
(Add 11-14 enough to partner with app teams.)

**If you want deep transport / systems (CS144 path)**

8 -> 9 -> 10 -> 11 -> CS144 labs continuous -> 15 -> 20

**If you want Web / SRE edge**

12 -> 13 -> 14 -> 17 -> 15 -> 18 (skim) -> 19 -> 20

---

## Appendix B - Resource Index (YouTube + GitHub + Interactive Sites)

*Gathered and verified via Composio Search / YouTube / GitHub toolkits during roadmap authoring.*

### Flagship GitHub

| Resource | Why |
| --- | --- |
| [beejjorgensen/bgnet](https://github.com/beejjorgensen/bgnet) | Beej's Guide source |
| [brandon-rhodes/fopnp](https://github.com/brandon-rhodes/fopnp) | Python network programming examples |
| [unpbook/unpv13e](https://github.com/unpbook/unpv13e) | Unix Network Programming code |
| [PKUFlyingPig/CS144-Computer-Network](https://github.com/PKUFlyingPig/CS144-Computer-Network) | CS144 lab companion |
| [smoltcp-rs/smoltcp](https://github.com/smoltcp-rs/smoltcp) | Readable TCP/IP stack |
| [nyquist/awesome-networking](https://github.com/nyquist/awesome-networking) | Curated networking list |
| [networktocode/awesome-network-automation](https://github.com/networktocode/awesome-network-automation) | Automation map |
| [caesar0301/awesome-pcaptools](https://github.com/caesar0301/awesome-pcaptools) | PCAP tooling |
| [OfekiAlm/practical-networking-from-zero-to-hero](https://github.com/OfekiAlm/practical-networking-from-zero-to-hero/) | Practical zero-to-hero repo |
| [CiscoDevNet/netprog_basics](https://github.com/CiscoDevNet/netprog_basics) | Network programmability basics |
| [shuveb/zerohttpd](https://github.com/shuveb/zerohttpd) | Tiny HTTP server teaching tool |
| [aos/computer-networking-study](https://github.com/aos/computer-networking-study) | Study notes/labs |

### Animated / Visual Videos

| Topic | Video |
| --- | --- |
| OSI | [KnowledgeCatch](https://www.youtube.com/watch?v=8YkL_qc6ozc) / [ByteByteGo](https://www.youtube.com/watch?v=0y6FtKsg6J4) / [TechTerms](https://www.youtube.com/watch?v=vv4y_uOneC0) |
| TCP vs UDP | [PowerCert](https://www.youtube.com/watch?v=uwoD5YsGACg) / [ByteQuest](https://www.youtube.com/watch?v=Xu85vTSZRWs) / [CertBros](https://www.youtube.com/watch?v=cA9ZJdqzOoU) |
| DNS | [PowerCert](https://www.youtube.com/watch?v=mpQZVYPuDGU) / [Fireship](https://www.youtube.com/watch?v=UVR9lhUGAyU) / [Ryan Schachte](https://www.youtube.com/watch?v=vrxwXXytEuI) |
| Routing | [Sabin](https://www.youtube.com/watch?v=gQtgtKtvRdo) / [NETWORK WALKS](https://www.youtube.com/watch?v=F1O8qs8hkm4) / [Practical Networking](https://www.youtube.com/watch?v=FzfrSDaWeLE) |
| Subnetting | [PowerCert](https://www.youtube.com/watch?v=s_Ntt6eTn94) / [Practical Networking Mastery](https://www.youtube.com/watch?v=BWZ-MHIhqjM) |
| HTTP | [NeetCodeIO](https://www.youtube.com/watch?v=wOPrIhmi7l0) |
| TLS | [PowerCert](https://www.youtube.com/watch?v=hExRDVZHhig) / [ByteByteGo](https://www.youtube.com/watch?v=j9QmMEWmcfo) |
| Wireshark | [Chris Greer beginners](https://www.youtube.com/watch?v=OU-A2EmVrKQ) |
| CDN / LB | [CDN](https://www.youtube.com/watch?v=RI9np1LWzqw) / [LB vs Gateway](https://www.youtube.com/watch?v=RqfaTIWc3LQ) |

### Interactive Websites & Courses

| Site | Use for |
| --- | --- |
| [AlgoMaster CN Roadmap](https://algomaster.io/roadmaps/cn) | Topic map |
| [Stanford CS144](https://cs144.github.io/) | Build TCP |
| [Beej's Guide](https://beej.us/guide/bgnet/html/) | Sockets |
| [Beej Network Concepts](https://beej.us/guide/bgnet0/html/) | Concepts via Python |
| [Loyola intro textbook](https://intronetworks.cs.luc.edu/) | Free book |
| [TCP/IP Essentials labs](https://ffund.github.io/tcp-ip-essentials/) | Lab approach |
| [Wireshark](https://www.wireshark.org/) | Captures |
| [Wireshark SampleCaptures](https://wiki.wireshark.org/SampleCaptures) | Practice pcaps |
| [Cisco Packet Tracer](https://www.netacad.com/courses/packet-tracer) | Topology labs |
| [Cloudflare Learning Center](https://www.cloudflare.com/learning/) | Clean explainers |
| [HPBN](https://hpbn.co/) | Web performance networking |
| [bgp.he.net](https://bgp.he.net/) | ASN / BGP exploration |
| [dns.google](https://dns.google/) | DNS debug |

---

*End of roadmap. Start at Phase 1. Do not skip the bridges.*
