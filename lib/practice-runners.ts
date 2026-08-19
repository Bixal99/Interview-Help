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
  "2.1:task-1": {
    options: [
      {
        language: "python",
        label: "Python",
        code: `# Theory + a tiny demo: one loop that sums an array.

nums = [4, 1, 7, 2]  # n = 4 items
ops = 0
total = 0

for value in nums:  # visits each item once
    total += value
    ops += 1  # one addition per item

print("Array:", nums)
print("Sum:", total)
print("Operations counted:", ops)
print()
print("Time: O(n) — the loop body runs once per element.")
print("Space: O(1) extra — total and ops are a few variables, not a copy of the array.")
`,
      },
    ],
    observe: "One pass over n items is O(n) time and O(1) extra space. The demo just makes the counter visible.",
  },
  "2.1:task-2": {
    options: [
      {
        language: "python",
        label: "Python",
        code: `# Nested loops vs two sequential loops over the same array.

arr = [10, 20, 30, 40]
n = len(arr)

seq_ops = 0
for _ in arr:  # first pass: n steps
    seq_ops += 1
for _ in arr:  # second pass: another n steps
    seq_ops += 1

nested_ops = 0
for _ in arr:  # outer n
    for _ in arr:  # inner n for every outer step
        nested_ops += 1

print(f"n = {n}")
print(f"Two sequential loops: {seq_ops} ops  -> O(n) + O(n) = O(n)")
print(f"Two nested loops:     {nested_ops} ops  -> O(n) * O(n) = O(n²)")
print()
print("Same array, different shape: sequential stays linear; nested becomes quadratic.")
`,
      },
    ],
    observe: "O(n)+O(n) is still O(n). Nested loops multiply, so n times n is O(n²).",
  },
  "2.1:task-3": {
    options: [
      {
        language: "python",
        label: "Python",
        code: `# Naive recursive Fibonacci: each call splits into two more calls.

calls = 0


def fib(n):
    global calls
    calls += 1  # count every invocation, including base cases
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)


n = 6
value = fib(n)
print(f"fib({n}) = {value}")
print(f"Call count: {calls}")
print()
print("The call tree doubles at each level: fib(n) waits on fib(n-1) AND fib(n-2).")
print("That branching is why the time is O(2ⁿ), not O(n).")
print("Worked example: fib(5) calls fib(4) and fib(3); those split again; overlapping work is repeated.")
`,
      },
    ],
    observe: "Naive fib(n) fans out into two subcalls. The tree has about 2ⁿ nodes, so the time is O(2ⁿ).",
  },
};

function pythonEscape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\$/g, "");
}

function fallbackRunner(label: string): PracticeRunnerSpec {
  const prompt = pythonEscape(label);
  return {
    options: [
      {
        language: "python",
        label: "Python",
        code: `# Reasoning task. Not every practice item is a coding problem.

prompt = "${prompt}"

print("PROMPT")
print(prompt)
print()
print("This can be theory: write the answer in comments or on paper.")
print("Run keeps the prompt here. When it feels familiar, go Back and check the box.")
`,
      },
    ],
    observe: "Theory is allowed. Use this page to hold the prompt, then go back and check the task.",
  };
}

export function practiceRunnerKey(lessonId: string, taskId: string) {
  return `${lessonId}:${taskId}`;
}

export function getPracticeRunner(lessonId: string, taskId: string, label?: string): PracticeRunnerSpec | null {
  const found = runners[practiceRunnerKey(lessonId, taskId)];
  if (found) return found;
  if (label?.trim()) return fallbackRunner(label);
  return null;
}

export function lessonHasPracticeRunners(lessonId: string): boolean {
  return Object.keys(runners).some((key) => key.startsWith(`${lessonId}:`));
}
