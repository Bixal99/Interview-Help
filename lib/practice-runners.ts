import type { PlaygroundLanguage } from "./code-playground/types";

export type PracticeRunnerSpec = {
  options: {
    language: PlaygroundLanguage;
    code: string;
    label?: string;
  }[];
  observe?: string;
  stdin?: string;
};

const runners: Record<string, PracticeRunnerSpec> = {
  "1.1:task-1": {
    options: [
      {
        language: "c",
        label: "C",
        code: `#include <stdio.h>

int add_one(int n) {
    return n + 1;
}

int main(void) {
    printf("Result: %d\\n", add_one(41));
    return 0;
}`,
      },
    ],
    observe: "Open this in the C playground, then paste the same function into Compiler Explorer to compare source lines with generated assembly.",
  },
  "1.1:task-2": {
    options: [
      {
        language: "python",
        label: "Python",
        code: `import time

total = 0
start = time.perf_counter()
for i in range(10_000_000):
    total += i
elapsed = time.perf_counter() - start

print(f"Sum: {total}")
print(f"Python time: {elapsed:.3f} seconds")
print()
print("Why slower: Python is interpreted.")
print("Each of the 10 million steps is bytecode the runtime must decode.")
print("C compiles that same loop to machine code first, so the CPU runs it directly.")
print("That interpreter tax vs native instructions is the compiled vs interpreted gap.")
`,
      },
      {
        language: "c",
        label: "C",
        code: `#include <stdio.h>
#include <time.h>

int main(void) {
    long long total = 0;
    clock_t start = clock();
    for (int i = 0; i < 10000000; i++) {
        total += i;
    }
    double elapsed = (double)(clock() - start) / CLOCKS_PER_SEC;
    printf("Sum: %lld\\n", total);
    printf("C time: %.6f seconds\\n", elapsed);
    printf("\\n");
    printf("Why faster: C is compiled.\\n");
    printf("This loop is already machine code — no interpreter in the way.\\n");
    printf("Python pays a decode cost on every iteration. That is the gap.\\n");
    return 0;
}`,
      },
    ],
    observe: "Python interprets bytecode one instruction at a time, so ten million loop steps pay an interpreter tax. C compiles to machine code first, so the CPU runs the same loop natively — that compiled vs interpreted gap is why C's time is near zero and Python's is measurable.",
  },
  "1.1:task-3": {
    options: [
      {
        language: "python",
        code: `# Recursive depth experiment — run and watch where it stops.

import sys

def recurse(n):
    return recurse(n + 1)

print(f"Configured recursion limit: {sys.getrecursionlimit()}")
print("Calling recurse(0)...")
try:
    recurse(0)
except RecursionError as error:
    print(f"Stopped with: {error}")
    print("That depth ≈ how many stack frames your runtime allows.")
`,
      },
    ],
    observe: "RecursionError means the call stack ran out of frames — that limit is what the number is measuring.",
  },
  "1.1:task-4": {
    options: [
      {
        language: "python",
        code: `# Stack frame vs heap — run and follow the ids and lengths.

def grow():
    items = []  # reference in the frame; list object on the heap
    for step in range(5):
        items.append(step)
        print(f"step {step}: list id={id(items)}, len={len(items)}")
    return items

result = grow()
print("Returned:", result)
print("In Python Tutor: frame 'items' points at the heap list box.")
`,
      },
    ],
    observe: "The frame holds a reference; the list object grows on the heap — same idea Python Tutor draws as two boxes.",
  },
  "1.1:task-5": {
    options: [
      {
        language: "python",
        label: "Python",
        code: `expression = "2 * (3 + 4)"

# -------------------------
# 1. TOKENIZE
# -------------------------

tokens = []

for char in expression:
    if char.isspace():
        continue

    elif char.isdigit():
        tokens.append(("NUMBER", int(char)))

    elif char == "*":
        tokens.append(("STAR", char))

    elif char == "+":
        tokens.append(("PLUS", char))

    elif char == "(":
        tokens.append(("LEFT_PAREN", char))

    elif char == ")":
        tokens.append(("RIGHT_PAREN", char))

tokens.append(("EOF", None))


# Print tokens
print("Tokens:")
print(tokens)


# -------------------------
# 2. BUILD TREE
# -------------------------

tree = {
    "operator": "*",
    "left": 2,
    "right": {
        "operator": "+",
        "left": 3,
        "right": 4
    }
}


# -------------------------
# 3. DISPLAY TREE
# -------------------------

print("Tree:")
print("""
        *
       / \\\\
      2   +
         / \\\\
        3   4
""")

# -------------------------
# 4. EVALUATE
# -------------------------
result = 2 * (3 + 4)
print("Result:")
print(result)
`,
      },
    ],
    observe: "Tokens are the characters classified. The tree groups (3 + 4) first, then multiplies by 2. Result is 14.",
  },
};

export function practiceRunnerKey(lessonId: string, taskId: string) {
  return `${lessonId}:${taskId}`;
}

export function getPracticeRunner(lessonId: string, taskId: string): PracticeRunnerSpec | null {
  return runners[practiceRunnerKey(lessonId, taskId)] ?? null;
}

export function lessonHasPracticeRunners(lessonId: string): boolean {
  return Object.keys(runners).some((key) => key.startsWith(`${lessonId}:`));
}
