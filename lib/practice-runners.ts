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
    return 0;
}`,
      },
    ],
    observe: "Run both versions, then compare the reported times to explain interpreted Python vs compiled C.",
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
        code: `# Hand-tokenize: 2 * (3 + 4)
# Run to see the token stream Crafting Interpreters builds toward a tree.

expr = "2 * (3 + 4)"
tokens = []
index = 0

while index < len(expr):
    char = expr[index]
    if char.isdigit():
        end = index
        while end < len(expr) and expr[end].isdigit():
            end += 1
        tokens.append(("NUMBER", expr[index:end]))
        index = end
    elif char in "+-*/()":
        tokens.append(("OP", char))
        index += 1
    elif char.isspace():
        index += 1
    else:
        raise ValueError(f"unexpected {char!r}")

print("Expression:", expr)
print("Tokens:", tokens)
print("Next step: group (3 + 4), then multiply by 2 — that's the tree.")
`,
      },
    ],
    observe: "Tokens left-to-right, then imagine grouping 3 + 4 before multiplying by 2 — that's the parse tree.",
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
