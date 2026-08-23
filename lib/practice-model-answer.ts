/**
 * Written practice items open a plain notepad (no run button, no output) —
 * see `notepad-storage.ts` and `notepad-playground.tsx`. This module supplies
 * the model answer shown there so the learner always has a solution to check
 * their own writing against, even though a "written" task has no single
 * verifiable output the way code does.
 *
 * Two tiers, same shape as `practice-runners.ts`:
 *  - `MODEL_ANSWERS` — hand-written answers keyed by `lessonId:taskId`.
 *  - a pattern fallback for templated rows that repeat across the whole
 *    curriculum (e.g. the "PROGRESSIVE PRACTICE" table), plus a generic
 *    structural fallback for everything else.
 */const MODEL_ANSWERS: Record<string, string> = {
  "1.7:task-1": `**Real-World Example — Ride-Sharing App (Uber / Google Maps):**

* **1. Input (Data entering the app):**
  * **Passenger:** Pickup GPS coordinates (\`lat: 37.7749, lng: -122.4194\`) and destination address.
  * **Fleet:** Real-time location coordinates and availability of nearby active drivers.
* **2. Processing (Algorithmic calculation):**
  * **Driver Search:** Finds drivers within a 3-mile radius using spatial grid indexing.
  * **Route Routing:** Calculates shortest ETA using graph search (Dijkstra / A*) weighted by live traffic.
  * **Dynamic Pricing:** Computes ride fare based on route distance, duration, and regional demand.
* **3. Output (Results produced):**
  * **Passenger:** Driver profile, license plate, live ETA (\`4 mins\`), fare (\`$18.50\`), and drawn map route.
  * **Driver:** Dispatch notification with turn-by-turn navigation to pickup location.

* **Core Takeaway:** Computation transforms input through definite algorithmic rules into useful output.`,

  "1.7:task-2": `**Real-World Example — Commercial Beverage Brewing Algorithm:**

* **Step 1 (Sensor Check):** Check water level (\`volume >= 250 mL\`) and check milk sensor (\`milk_available = true/false\`).
* **Step 2 (Heating):** Turn on heating element until water temperature reaches \`100°C\`, then turn off heater.
* **Step 3 (Extraction):** Dispense \`250 mL\` boiling water over tea bag and start a \`180-second\` countdown timer.
* **Step 4 (Tea Removal):** When timer reaches zero, remove the tea bag from the cup.
* **Step 5 (Condition Check):** If \`milk_available == true\`, add \`30 mL\` of milk; otherwise skip and serve black tea.
* **Step 6 (Completion):** Signal \`READY_TO_SERVE\` and halt the machine cycle.

* **Why this algorithm works:** Every step has exact amounts (\`100°C\`, \`250 mL\`, \`30 mL\`), missing milk is handled safely, and the timer ensures it always finishes.`,

  "1.7:task-3": `**Real-World Example — E-Commerce Order Fulfillment Pipeline:**

* **1. Decomposition:** Split order fulfillment into 4 separate jobs: verify payment, reserve warehouse stock, print shipping label, and alert courier.
* **2. Pattern Recognition:** Group orders heading to the same postal district together to optimize delivery vehicle routes.
* **3. Abstraction:** The delivery router ignores product color and brand, using only package weight and destination zip code.
* **4. Algorithmic Thinking:** Follow strict ordered steps: verify payment -> decrement inventory -> print barcode -> dispatch package.

* **Core Takeaway:** Computational thinking simplifies complex real-world workflows into modular, repeatable, and automated steps.`,
};

/** Templated rows that repeat verbatim across the whole curriculum. */
const PATTERN_ANSWERS: { pattern: RegExp; answer: (chapterHint: string) => string }[] = [
  {
    pattern: /reproduce one small example of practice/i,
    answer: () =>
      `Pick the single smallest concept covered in this lesson and redo it from scratch without looking at the source material — the same example, worked by hand, with your own numbers if the original used numbers.

Model structure for the write-up:
1. State the concept in one sentence.
2. Work one small example end to end.
3. State the result, plus a one-sentence explanation of *why* it is correct.

If you can do all three without peeking back at the lesson, the concept has actually stuck.`,
  },
  {
    pattern: /apply it to the concepts from chapter/i,
    answer: (chapterHint) =>
      `Take the concept from this lesson and connect it to at least one other idea from ${chapterHint || "this chapter"}.

Model structure for the write-up:
1. Name the other concept from the chapter you are connecting to.
2. Explain the connection in 1–2 sentences (e.g. "X depends on Y because…", or "X is a special case of Y").
3. Give one concrete example that uses both ideas together.

The goal is to show the concepts form one connected picture, not a list of isolated facts.`,
  },
  {
    pattern: /introduce a boundary case or failure/i,
    answer: () =>
      `Take your working example from the easier row above and deliberately break it: an empty input, the largest/smallest possible value, a duplicate, a missing piece, or whatever "edge" applies to this topic.

Model structure for the write-up:
1. State the boundary case you are introducing and why it is a reasonable edge to worry about.
2. Show what happens without any fix ("before").
3. Show the adjusted solution that now handles it ("after"), and name the trade-off the fix costs (extra step, more memory, more time, etc.).

Before/after plus the trade-off is the evidence a reviewer is actually looking for.`,
  },
];

function chapterHintFromPrompt(prompt: string): string {
  const match = /chapter\s+(\d+)/i.exec(prompt);
  return match ? `Chapter ${match[1]}` : "";
}

function genericModelOutline(label: string): string {
  const clauses = label
    .split(/(?:,\s*(?:and\s+)?|\s+and\s+)/i)
    .map((part) => part.trim())
    .filter(Boolean);
  const steps = clauses.length > 1 ? clauses : [label.trim()];
  const lines = steps.map((step, index) => `${index + 1}. **${step.replace(/[.:]$/, "")}.**`);
  return `**Solution Breakdown & Model Outline:**

${lines.join("\n")}

* **Key Focus:** Address each of the steps above systematically with concrete reasoning.`;
}

export function getModelAnswer(lessonId: string, taskId: string, label: string): string {
  const curated = MODEL_ANSWERS[`${lessonId}:${taskId}`];
  if (curated) return curated;
  for (const { pattern, answer } of PATTERN_ANSWERS) {
    if (pattern.test(label)) return answer(chapterHintFromPrompt(label));
  }
  return genericModelOutline(label);
}
