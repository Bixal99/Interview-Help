import type { PlaygroundLanguage } from "./code-playground/types";
import type { ProjectBrief } from "./parse-project-brief";

export type ProjectStarter = {
  language: PlaygroundLanguage;
  code: string;
  observe: string;
};

const PHASE_1_EXPRESSION = `# Mini Expression Runtime
# Each comment says what the next line does.

expression = "2 * (3 + 4)"  # the input we will tokenize, tree, and evaluate

# ---- 1. TOKENIZE: turn characters into labeled pieces ----
tokens = []  # empty list that will hold (kind, value) pairs

for char in expression:  # walk the input one character at a time
    if char.isspace():  # skip spaces; they are not tokens
        continue
    elif char.isdigit():  # a digit is a NUMBER token
        tokens.append(("NUMBER", int(char)))
    elif char == "*":  # multiply operator
        tokens.append(("STAR", char))
    elif char == "+":  # add operator
        tokens.append(("PLUS", char))
    elif char == "(":  # start of a grouped sub-expression
        tokens.append(("LEFT_PAREN", char))
    elif char == ")":  # end of a grouped sub-expression
        tokens.append(("RIGHT_PAREN", char))

tokens.append(("EOF", None))  # end-of-file marker, like a real compiler

print("Tokens:")  # show the token stream a learner can inspect
print(tokens)

# ---- 2. BUILD TREE: parentheses group 3 + 4 before multiplying by 2 ----
tree = {  # nested dict = parse tree
    "operator": "*",  # root operation
    "left": 2,  # left child is the number 2
    "right": {  # right child is another operation
        "operator": "+",
        "left": 3,
        "right": 4,
    },
}

print("Tree:")  # print a readable picture of that structure
print("""
        *
       / \\\\
      2   +
         / \\\\
        3   4
""")

# ---- 3. EVALUATE: compute the value, then check a boundary and an invalid case ----
result = 2 * (3 + 4)  # normal case: 14
print("Normal result:", result)

boundary = 0 + (1 * 1)  # boundary: smallest non-empty arithmetic
print("Boundary result:", boundary)

invalid = "2 * (3 +"  # incomplete expression — we refuse it
print("Invalid input rejected:", invalid, "-> missing closing tokens")
`;

const PHASE_2_GROWTH = `# Algorithm Growth Profiler
# Each comment says what the next line does.
# We count OPERATIONS, not wall-clock time, so growth stays comparable.

SIZES = [1, 2, 4, 8, 16, 32]  # increasing n; small enough that n^2 still finishes


def constant(n):
    # O(1): the work does not grow with n
    ops = 1  # one array-style lookup
    return ops


def linear(n):
    # O(n): one visit per item
    ops = 0
    for _ in range(n):  # n steps
        ops += 1  # count each visit
    return ops


def logarithmic(n):
    # O(log n): cut the remaining size in half each step
    ops = 0
    size = max(n, 1)  # avoid a zero-size loop
    while size > 1:
        ops += 1  # one split / comparison
        size //= 2  # half remains
    return ops


def quadratic(n):
    # O(n^2): nested loops visit every pair
    ops = 0
    for _ in range(n):  # outer n
        for _ in range(n):  # inner n
            ops += 1  # one pair
    return ops


def bar(ops, scale=8):
    # ASCII chart of operation count (not seconds)
    width = max(1, ops // scale)
    return "#" * width


print("n | O(1) | O(log n) | O(n) | O(n^2)")  # table header
print("--|------|----------|------|------")

rows = []  # store the same controlled inputs for later comparison
for n in SIZES:
    c = constant(n)
    lg = logarithmic(n)
    lin = linear(n)
    q = quadratic(n)
    rows.append((n, c, lg, lin, q))
    print(f"{n:2} | {c:4} | {lg:8} | {lin:4} | {q:5}  {bar(q)}")

# Baseline vs alternative: linear vs quadratic on the same n
baseline = rows[-1][3]  # O(n) at n=32
alternative = rows[-1][4]  # O(n^2) at n=32
print()
print("Metric: operation count. A smaller count means less work as n grows.")
print(f"Baseline linear at n=32: {baseline} ops")
print(f"Alternative quadratic at n=32: {alternative} ops")
print("Preferred linear wins here.")
print()
print("Where the preferred approach is a poor choice:")
print("If you actually need every pair (unique friendships, brute-force compare),")
print("linear misses pairs. Quadratic is then the correct algorithm, not the slow one.")
`;

function fallbackStarter(brief: ProjectBrief): string {
  const specLines = brief.spec.length
    ? brief.spec.map((item, index) => `print("${index + 1}. ${item.replace(/"/g, "'")}")`).join("\n")
    : `print("1. Implement the behavior described on the build page.")`;
  const stepLines = brief.steps.slice(0, 5).map((item, index) => `# Step ${index + 1}: ${item}`).join("\n");
  const title = brief.title || "Build";
  const topic = brief.topic || "this topic";
  return `# ${title}
# Each comment says what the next line does.

print("=== ${title} ===")  # name of this build
print("Topic: ${topic}")  # the skill this program practices
print()

# What this program must do:
${specLines}

print()
${stepLines}

print()
print("Starter ran. Read every comment, then extend the program until the list above is true.")
print("Done when a normal case, a boundary case, and a failure case all print.")
`;
}

const STARTERS: Record<string, ProjectStarter> = {
  "cs-phase-1-project": {
    language: "python",
    code: PHASE_1_EXPRESSION,
    observe: "Run this. You should see tokens, a tree, 14, a tiny boundary case, and a rejected invalid string. That is a miniature compiler pipeline.",
  },
  "cs-phase-2-project": {
    language: "python",
    code: PHASE_2_GROWTH,
    observe: "Run this. The table is operation counts, not seconds. Watch $O(n^2)$ explode while $O(1)$ stays flat — that is growth rate.",
  },
};

export function getProjectStarter(projectId: string, brief: ProjectBrief): ProjectStarter {
  return STARTERS[projectId] ?? {
    language: "python",
    code: fallbackStarter(brief),
    observe: "Run the starter, then replace the print list with working functions until every requirement on the build page is true.",
  };
}
