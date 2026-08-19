import type { PlaygroundLanguage, PlaygroundSource } from "./types";

export type TryExample = {
  id: string;
  title: string;
  hint: string;
  source: PlaygroundSource;
};

const PYTHON_TRY_EXAMPLES: TryExample[] = [
  {
    id: "hello",
    title: "Hello, World",
    hint: "Basic print — press Run",
    source: `print("Hello, World!")
print(10 + 20)
`,
  },
  {
    id: "types",
    title: "Numeric types",
    hint: "int, float, complex",
    source: `x = 10
y = 3.14
z = 2 + 3j

print(type(x))
print(type(y))
print(type(z))
`,
  },
  {
    id: "input",
    title: "input()",
    hint: "Answer boxes appear when you Run",
    source: `name = input("What is your name? ")
age = input("How old are you? ")
print(f"Hi {name}, you are {age}.")
`,
  },
  {
    id: "stack-heap",
    title: "Stack vs heap",
    hint: "From CS lesson 1.1 — run and read the comments",
    source: `# The same program, showing where each value physically lives.
# In CPython, id(x) is the object's memory address.

GREETING = "hello"          # static/global storage
print("static GREETING:", GREETING, "id=", id(GREETING))


def build_list(n):
    total = 0               # STACK: one slot in build_list's frame
    values = []             # list OBJECT on the HEAP; values holds its address
    for i in range(n):
        values.append(i)
    print("  stack local total id=", id(total))
    print("  heap list id=", id(values), "value=", values)
    return values


def countdown(n):
    print("  stack frame: countdown(" + str(n) + ")")
    if n == 0:
        return
    countdown(n - 1)


print("build_list returned:", build_list(4))
print("countdown(3) pushes 4 frames, then pops all 4:")
countdown(3)
`,
  },
  {
    id: "recursion-limit",
    title: "Recursion crash",
    hint: "Find where the stack limit stops you",
    source: `import sys

def recurse(n):
    return recurse(n + 1)

print(f"Recursion limit: {sys.getrecursionlimit()}")
try:
    recurse(0)
except RecursionError as error:
    print(error)
`,
  },
  {
    id: "loop-timing",
    title: "Loop timing",
    hint: "Ten million iterations — watch the seconds",
    source: `import time

total = 0
start = time.perf_counter()
for i in range(10_000_000):
    total += i
elapsed = time.perf_counter() - start

print(f"Sum: {total}")
print(f"Time: {elapsed:.3f}s")
`,
  },
  {
    id: "tokenize",
    title: "Tokenize expression",
    hint: "Hand-tokenize 2 * (3 + 4)",
    source: `expr = "2 * (3 + 4)"
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
        raise ValueError(char)

print("Expression:", expr)
print("Tokens:", tokens)
`,
  },
];

const JAVASCRIPT_TRY_EXAMPLES: TryExample[] = [
  {
    id: "hello",
    title: "Hello, World",
    hint: "console.log output",
    source: `console.log("JavaScript");
console.log(10 + 20);`,
  },
  {
    id: "input",
    title: "prompt()",
    hint: "Program Input answers feed prompt()",
    source: `const name = prompt("Name? ");
const age = prompt("Age? ");
console.log(\`Hi \${name}, you are \${age}\`);`,
  },
];

const HTML_TRY_EXAMPLES: TryExample[] = [
  {
    id: "heading",
    title: "Hello HTML",
    hint: "Simple heading preview",
    source: { html: "<h1>Hello HTML</h1>", css: "", javascript: "" },
  },
];

const CSS_TRY_EXAMPLES: TryExample[] = [
  {
    id: "heading-style",
    title: "Hello CSS",
    hint: "Edit CSS against starter HTML",
    source: {
      html: "<h1>Hello CSS</h1>",
      css: "h1 {\n  font-size: 40px;\n  color: teal;\n}",
      javascript: "",
    },
  },
];

const WEB_TRY_EXAMPLES: TryExample[] = [
  {
    id: "button-console",
    title: "Button Click",
    hint: "Preview + console logging",
    source: {
      html: '<button id="btn">Click</button>',
      css: "button { padding: 0.75rem 1rem; }",
      javascript: 'document.getElementById("btn").onclick = () => console.log("Clicked");',
    },
  },
];

const C_TRY_EXAMPLES: TryExample[] = [
  {
    id: "hello-c",
    title: "Hello C",
    hint: "Compile and run C",
    source: `#include <stdio.h>

int main() {
    printf("Hello C\\n");
    printf("%d\\n", 10 + 20);
    return 0;
}`,
  },
];

const CPP_TRY_EXAMPLES: TryExample[] = [
  {
    id: "hello-cpp",
    title: "Hello C++",
    hint: "Compile and run C++",
    source: `#include <iostream>

int main() {
    std::cout << "Hello C++" << std::endl;
    std::cout << 10 + 20 << std::endl;
    return 0;
}`,
  },
];

export function getTryExamples(language: PlaygroundLanguage): TryExample[] {
  if (language === "python") return PYTHON_TRY_EXAMPLES;
  if (language === "javascript") return JAVASCRIPT_TRY_EXAMPLES;
  if (language === "html") return HTML_TRY_EXAMPLES;
  if (language === "css") return CSS_TRY_EXAMPLES;
  if (language === "web") return WEB_TRY_EXAMPLES;
  if (language === "c") return C_TRY_EXAMPLES;
  if (language === "cpp") return CPP_TRY_EXAMPLES;
  return [];
}

export function getTryExample(language: PlaygroundLanguage, id: string): TryExample | undefined {
  return getTryExamples(language).find((example) => example.id === id);
}

export function defaultTryExample(language: PlaygroundLanguage): TryExample {
  return getTryExamples(language)[0] ?? {
    id: "empty",
    title: "Empty",
    hint: "Start typing",
    source: "",
  };
}
