# PHASE 89 - Artificial Intelligence Foundations

**Track:** Other Core Computer Science Areas

**WHAT YOU WILL BE ABLE TO DO:** Explain what ML/AI actually is in CS terms - learning from data vs hand-written rules - and clearly separate classical machine learning from deep learning.

**WHAT YOU SHOULD KNOW FIRST:** Phase 31-48 (you already reason about algorithms, probability-ish trade-offs, and optimization under constraints), Phase 60-65 (training data is still data with quality and privacy issues), Phase 66-69 (models can become attack surfaces and privacy leaks).

## 89.1 Learning From Data (Without the Hype)

**WHY YOU ARE LEARNING THIS:** "AI" in product marketing is vague. In CS it usually means systems that **improve performance on a task using data** (or search/planning over large spaces). You do not need to become a researcher here - you need a vocabulary that stops you from confusing a linear classifier, a neural net, and a rules engine.

**SEE IT BEFORE YOU MEMORIZE IT**

- Intuition: [Neural Networks (3Blue1Brown)](https://www.youtube.com/watch?v=aircAruvnKk) *(Composio YouTube)*; [ML vs deep learning overview (IBM Technology)](https://www.youtube.com/watch?v=q6kJ71tEYqM) *(Composio YouTube)*
- Written: [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) *(Composio web + fetch)*; supervised/unsupervised curriculum framing *(Composio web)*
- Hands-on path: [ageron/handson-ml3](https://github.com/ageron/handson-ml3) *(Composio GitHub + DeepWiki)* - classical ML notebooks before deep learning chapters
- Scholar angle: ML foundations texts treat features, loss, and generalization as the core *(Composio Scholar)*

**STEP-BY-STEP EXPLANATION**

| Idea | Meaning |
| ---- | ------- |
| **Supervised learning** | Learn a mapping examples → labels (spam/not, price, class) |
| **Unsupervised learning** | Find structure without labels (clusters, dimensionality reduction) |
| **Classical ML** | Often hand-designed features + models like linear/logistic regression, trees, SVM, k-NN |
| **Deep learning** | Multi-layer neural nets learn representations from raw-ish inputs (images, text, audio) |
| **Train / validation / test** | Fit on train; tune on validation; report honestly on held-out test |

Deep learning is still optimization of a loss on data - it is not magic. It shines when you have **lots of data** and features are hard to hand-engineer. Classical ML often wins on tabular data, small datasets, and interpretability needs.

```text
Rules engine:  if amount > 1000 and country_new → flag
Classical ML:  features (amount, velocity, …) → model → score
Deep learning: raw pixels / tokens → layers → score
```

**SMALL WORKING EXAMPLE**

```python playground=cs-phase-89-classical-vs-deep
# Tiny analogy: "classical" = hand features; "deep" = stacked transforms.
# Not a real training loop - a mental model you can run.

def classical_score(amount, velocity):
    # human-chosen features
    return 0.7 * amount + 0.3 * velocity

def deep_ish(x, weights_layers):
    # stacked linear-ish transforms (toy)
    for W in weights_layers:
        x = [sum(a * b for a, b in zip(x, row)) for row in W]
    return x[0]

print("classical", classical_score(amount=10, velocity=2))
print("deep-ish", deep_ish([10, 2], weights_layers=[
    [[0.5, 0.1], [0.2, 0.4]],
    [[0.6, 0.3]],
]))
print("Same goal: map inputs → score. Different who invents the features.")
```

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Define supervised vs unsupervised in one sentence each |
| Medium | Give one problem better for classical ML and one for deep learning, with why |
| Hard | Read one Hands-on ML chapter and explain train/val/test leakage in your own words |

**WHY THE NEXT TOPIC IS NEEDED - Specialized Platforms:** Desktop/server assumptions (plenty of RAM, always-on power, big screens) fail on phones, microcontrollers, and robots. Those constraints change what algorithms and architectures are even possible. That is Phase 90.

---

> **Phase 89 complete?** [Continue to Phase 90](#phase-90)

---



# PHASE 90 - Specialized Computing Platforms

**Track:** Other Core Computer Science Areas

**WHAT YOU WILL BE ABLE TO DO:** Name at least one hard constraint unique to a specialized platform (mobile, embedded/IoT, or similar) and explain how it changes a design you would use on a laptop server.

**WHAT YOU SHOULD KNOW FIRST:** Phase 49-54 (CPU, memory, OS, concurrency - the same physics, tighter budgets), Phase 78-79 (packaging and cloud do not erase device limits), Phase 89 (on-device ML is an emerging special case of those limits).

## 90.1 When the Machine Is Not a Laptop

**WHY YOU ARE LEARNING THIS:** Most of this roadmap assumes a general-purpose computer. Phones, watches, cars, sensors, and factory controllers are computers too - with **power, memory, real-time, and safety** budgets that make "just use another microservice" absurd. Specialization is CS under constraints.

**SEE IT BEFORE YOU MEMORIZE IT**

- Embedded/IoT constraints: [Embedded systems session (IEEE)](https://www.youtube.com/watch?v=Pgc5z1e4bL0) *(Composio YouTube)*; embedded/real-time/power curriculum notes *(Composio web)*
- Mobile architecture constraints: [Mobile development architecture series](https://www.youtube.com/watch?v=nH03mvy7J-8) *(Composio YouTube)*
- Practice: pick one app you use on your phone and list what would break if RAM were 10× smaller and the network were intermittent

**STEP-BY-STEP EXPLANATION**

| Platform family | Typical hard constraints |
| --------------- | ------------------------ |
| **Mobile** | Battery, thermal throttling, flaky networks, store review, background limits, privacy permissions |
| **Embedded / IoT** | Tiny RAM/flash, real-time deadlines, years on a battery, no interactive debugger in the field |
| **Browser / edge** | Sandbox, cold starts, limited CPU before jank, offline-first expectations |

Design moves that show you understood the platform:

1. **Measure the scarce resource** (mAh, ms, KB) before optimizing aesthetics.
2. **Fail soft offline** - queue writes; don't assume always-on APIs (Phase 84 helps).
3. **Push work up or down the stack** - server when the device can't; on-device when privacy/latency demand it.
4. **Respect update reality** - cars and sensors may update rarely; bugs live longer.

```text
Laptop assumption          Device reality
------------------         --------------
GB of RAM                  KB–MB budgets
AC power                   mW budgets / sleep
Wired or Wi-Fi             Intermittent radio
Easy SSH debug             Field devices, OTA risk
```

**SMALL WORKING EXAMPLE**

```python playground=cs-phase-90-budget
# Toy "device budget": decide if a feature fits.

battery_mah = 200
radio_cost_mah = 15   # per sync
cpu_cost_mah = 2      # per local compute
syncs_per_day = 48    # every 30 min

radio_day = syncs_per_day * radio_cost_mah
local_day = 24 * 60 * cpu_cost_mah  # absurd on purpose
print(f"radio/day={radio_day} mAh  battery={battery_mah}")
if radio_day > battery_mah * 0.3:
    print("FAIL: sync cadence too aggressive — batch or duty-cycle the radio.")
else:
    print("OK: radio budget plausible; still measure in the field.")
```

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| ---------- | ---- |
| Easy | List three constraints that differ between a phone and a server VM |
| Medium | Redesign a chat app sync policy for airplane-mode friendliness |
| Hard | Argue when on-device ML beats cloud ML for a wearable |

**WHY THE NEXT TOPIC IS NEEDED - Ethics:** Specialized platforms and AI amplify impact - who is scored, watched, locked out, or put at risk. Technical ability without ethical judgment is incomplete CS. That is Phase 91.

---

> **Phase 90 complete?** [Continue to Phase 91](#phase-91)

---



# PHASE 91 - Computing, Society & Ethics

**Track:** Other Core Computer Science Areas

**WHAT YOU WILL BE ABLE TO DO:** Write a short case-study response on a real ethical trade-off in software - naming stakeholders, harms, and a concrete mitigation - not just a slogan.

**WHAT YOU SHOULD KNOW FIRST:** Phase 66-71 (security and HCI already showed that "users" and "attackers" are people), Phase 89-90 (AI and devices concentrate power and risk), Phase 72-80 (shipping process is where ethical review either happens or is skipped).

## 91.1 Software Has Consequences

**WHY YOU ARE LEARNING THIS:** Code ships into hiring, credit, medicine, policing, content feeds, and critical infrastructure. Ethics here is not optional philosophy - it is **professional practice**: foresee harm, refuse reckless designs, document trade-offs, and build mitigations. The ACM Code of Ethics exists because the field learned this the hard way.

**SEE IT BEFORE YOU MEMORIZE IT**

- Professional standard: [ACM Code of Ethics and Professional Conduct](https://www.acm.org/code-of-ethics) *(Composio fetch)*
- Bias / fairness overview: [AI ethics discussions](https://www.youtube.com/watch?v=r1R-AqPNvts) *(Composio YouTube)*; algorithmic bias literature *(Composio Scholar)*
- Risk framing: NIST AI Risk Management Framework materials *(Composio web)*; fairness metrics caveats *(Composio DeepWiki / course materials)*
- Practice: pick a real news case (facial recognition, content moderation, medical triage) and write a one-page stakeholder map

**STEP-BY-STEP EXPLANATION**

A usable mini-response has four parts:

1. **Facts** - what the system does; who is scored or affected.
2. **Stakeholders** - users, non-users, operators, regulators, future selves.
3. **Harms & benefits** - including unequal error rates, privacy, autonomy, safety.
4. **Mitigations** - technical (thresholds, human review, opt-out) *and* process (audit, red team, refuse to ship).

Common failure modes: optimizing a metric that is not the moral goal; training data that encodes historical injustice; dark patterns that "work" in A/B tests; security that excludes accessibility.

```text
Bad ethics answer:  "Be careful and fair."
Better:             "False positives deny loans to group X at 3× rate.
                     Mitigation: threshold review + human appeal +
                     stop using feature F correlated with zip code proxy."
```

**SMALL WORKING EXAMPLE**

```python playground=cs-phase-91-case-scaffold
# Scaffold for an ethics case write-up (fill the strings).

case = {
    "system": "resume screening model",
    "stakeholders": ["applicants", "recruiters", "company", "regulators"],
    "metric_optimized": "interview invite rate for past 'successful' hires",
    "risk": "replicates historical hiring bias encoded in labels",
    "mitigations": [
        "remove proxy features (name, zip)",
        "measure error rates by group",
        "human review for borderline rejects",
        "document known limits in model card",
    ],
}

print("CASE:", case["system"])
print("RISK:", case["risk"])
print("DO NOT ONLY OPTIMIZE:", case["metric_optimized"])
for m in case["mitigations"]:
    print(" -", m)
```

**PRACTICE UNTIL IT FEELS FAMILIAR**

| Difficulty | Task |
| ---------- | ---- |
| Easy | Quote one ACM Code principle and give a software example |
| Medium | Write a half-page case response for a content-moderation false positive |
| Hard | Critique an AI feature you use daily: metric, harm, mitigation, residual risk |

**WHY THE NEXT TOPIC IS NEEDED - Maintaining Real Software:** Survey knowledge is not enough - most of your career is changing systems you did not create. Story XIII starts with reading unfamiliar codebases at Phase 92.

---

> **Phase 91 complete?** [Continue to Phase 92](#phase-92)

---


