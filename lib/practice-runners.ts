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

/**
 * Topic-matched reference solutions for coding-classified items that have no
 * hand-curated runner above. Each one is a genuine, runnable program — not a
 * stub — so "Practice Yourself" always opens with working code, even for the
 * long tail of exercises that have not been individually curated yet.
 */
const TOPIC_FALLBACKS: { pattern: RegExp; code: string; observe: string }[] = [
  {
    pattern: /\bsearch\b/i,
    observe: "Binary search halves the search space each comparison, so it finds a target (or proves it is absent) in O(log n) steps on a sorted list.",
    code: `# Reference solution: binary search on a sorted list.

def binary_search(values, target):
    lo, hi = 0, len(values) - 1
    steps = 0
    while lo <= hi:
        steps += 1
        mid = (lo + hi) // 2
        if values[mid] == target:
            return mid, steps
        if values[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1, steps


sample = [1, 3, 4, 7, 9, 12, 20]
index, steps = binary_search(sample, 9)
    print(f"Found 9 at index {index} in {steps} comparisons")
`,
  },
  {
    pattern: /\bsort/i,
    observe: "Bubble sort compares neighbors and swaps them; after each full pass the largest unsorted value is in place, so the pass length shrinks by one each time.",
    code: `# Reference solution: sort a list from scratch (bubble sort).

def bubble_sort(values):
    values = list(values)
    n = len(values)
    for pass_end in range(n - 1, 0, -1):
        swapped = False
        for i in range(pass_end):
            if values[i] > values[i + 1]:
                values[i], values[i + 1] = values[i + 1], values[i]
                swapped = True
        if not swapped:
            break
    return values


sample = [5, 2, 9, 1, 5, 6]
print("Before:", sample)
print("After: ", bubble_sort(sample))
`,
  },
  {
    pattern: /\brecursi|\bfibonacci\b/i,
    observe: "Each call either hits a base case or breaks the problem into a smaller version of itself; the base case is what stops the recursion from running forever.",
    code: `# Reference solution: recursion with a clear base case.

def factorial(n):
    if n <= 1:            # base case — stops the recursion
        return 1
    return n * factorial(n - 1)   # recursive case — smaller subproblem


for n in range(6):
    print(f"factorial({n}) = {factorial(n)}")
`,
  },
  {
    pattern: /\bstack\b/i,
    observe: "A stack is last-in-first-out: push adds to the top, pop removes from the top, so the most recently added item always leaves first.",
    code: `# Reference solution: a stack (LIFO) built on a Python list.

stack = []
stack.append("a")  # push
stack.append("b")
stack.append("c")
print("Stack after pushes:", stack)

top = stack.pop()   # pop
print("Popped:", top)
print("Stack after pop:", stack)
`,
  },
  {
    pattern: /\bqueue\b/i,
    observe: "A queue is first-in-first-out: enqueue adds to the back, dequeue removes from the front, so items leave in the order they arrived.",
    code: `# Reference solution: a queue (FIFO) using collections.deque.

from collections import deque

queue = deque()
queue.append("a")  # enqueue
queue.append("b")
queue.append("c")
print("Queue after enqueues:", list(queue))

front = queue.popleft()  # dequeue
print("Dequeued:", front)
print("Queue after dequeue:", list(queue))
`,
  },
  {
    pattern: /\blinked list\b/i,
    observe: "Each node only knows its own value and a pointer to the next node, so traversal has to walk one link at a time from the head.",
    code: `# Reference solution: a minimal singly linked list.

class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


def build(values):
    head = None
    for value in reversed(values):
        head = Node(value, head)
    return head


def to_list(head):
    out = []
    node = head
    while node:
        out.append(node.value)
        node = node.next
    return out


head = build([10, 20, 30])
print("Linked list:", to_list(head))
`,
  },
  {
    pattern: /\bhash\b/i,
    observe: "A hash map trades memory for speed: it turns a key into a slot with a hash function so lookup does not need to scan every item.",
    code: `# Reference solution: a hash map used to count occurrences.

words = ["cat", "dog", "cat", "bird", "dog", "cat"]
counts = {}
for word in words:
    counts[word] = counts.get(word, 0) + 1

print("Counts:", counts)
print("Most common:", max(counts, key=counts.get))
`,
  },
  {
    pattern: /\btree\b/i,
    observe: "A recursive traversal visits a node, then recurses into its children — the recursion naturally follows the tree's own branching shape.",
    code: `# Reference solution: build a small binary tree and traverse it in order.

class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def in_order(node, out):
    if node is None:
        return
    in_order(node.left, out)
    out.append(node.value)
    in_order(node.right, out)


root = Node(5, Node(3, Node(1), Node(4)), Node(8, Node(7), Node(9)))
result = []
in_order(root, result)
print("In-order traversal:", result)
`,
  },
  {
    pattern: /\bgraph\b/i,
    observe: "Breadth-first search explores one full 'ring' of neighbors before moving further out, which is what guarantees the shortest path in an unweighted graph.",
    code: `# Reference solution: breadth-first search on a graph.

from collections import deque

graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C", "E"],
    "E": ["D"],
}


def bfs(graph, start):
    visited = {start}
    order = []
    queue = deque([start])
    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order


print("BFS order from A:", bfs(graph, "A"))
`,
  },
  {
    pattern: /\bregular expression\b|\bregex\b/i,
    observe: "The pattern describes a shape, not literal characters; the engine tries to match that shape against the text and reports every place it succeeds.",
    code: `# Reference solution: extract data with a regular expression.

import re

text = "Contact: alice@example.com or bob@example.org"
pattern = r"[\\w.+-]+@[\\w-]+\\.[\\w.-]+"

matches = re.findall(pattern, text)
print("Emails found:", matches)
`,
  },
  {
    pattern: /\bsql\b|\bquery\b/i,
    observe: "A query describes the shape of the result you want; the engine figures out how to scan/join/filter the tables to produce exactly that shape.",
    code: `# Reference solution: model a tiny table in Python and answer a query.
# (Swap this for real SQL once you have a database — same logic either way.)

employees = [
    {"name": "Alice", "dept": "Engineering", "salary": 95000},
    {"name": "Bob", "dept": "Sales", "salary": 62000},
    {"name": "Cara", "dept": "Engineering", "salary": 88000},
]

# Equivalent to: SELECT name FROM employees WHERE dept = 'Engineering' ORDER BY salary DESC
engineers = sorted(
    (row for row in employees if row["dept"] == "Engineering"),
    key=lambda row: row["salary"],
    reverse=True,
)
print("Engineers by salary:", [row["name"] for row in engineers])
`,
  },
];

function genericCodingFallback(label: string): { code: string; observe: string } {
  const prompt = pythonEscape(label);
  return {
    observe: "No curated solution exists yet for this exact prompt — this scaffold runs cleanly so you can build the real solution on top of it.",
    code: `# Task: ${prompt}
#
# No curated reference solution exists yet for this exact exercise. This is a
# clean, runnable starting point — replace the body of solve() with real logic.


def solve():
    # TODO: implement the task described above.
    return None


if __name__ == "__main__":
    result = solve()
    print("Result:", result)
`,
  };
}

function fallbackCodingRunner(label: string): PracticeRunnerSpec {
  const topic = TOPIC_FALLBACKS.find((entry) => entry.pattern.test(label));
  const { code, observe } = topic ?? genericCodingFallback(label);
  return {
    options: [{ language: "python", label: "Python", code }],
    observe,
  };
}

export function practiceRunnerKey(lessonId: string, taskId: string) {
  return `${lessonId}:${taskId}`;
}

export function hasCuratedRunner(lessonId: string, taskId: string): boolean {
  return Boolean(runners[practiceRunnerKey(lessonId, taskId)]);
}

/**
 * Returns a compiler runner spec for coding-classified items. Callers should
 * only invoke this once they know the item is a coding task (curated, or
 * classified as coding by `classifyPracticeTask`) — written/reasoning tasks
 * belong in the notepad instead (see `notepad-storage.ts`).
 */
export function getPracticeRunner(lessonId: string, taskId: string, label?: string): PracticeRunnerSpec | null {
  const found = runners[practiceRunnerKey(lessonId, taskId)];
  if (found) return found;
  if (label?.trim()) return fallbackCodingRunner(label);
  return null;
}

export function lessonHasPracticeRunners(lessonId: string): boolean {
  return Object.keys(runners).some((key) => key.startsWith(`${lessonId}:`));
}
