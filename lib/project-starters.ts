import type { PlaygroundLanguage, PlaygroundSource, ProjectVfs } from "./code-playground/types";
import type { ProjectBrief } from "./parse-project-brief";
import { projectFromSingleScript } from "./project-starters/layout";
import { MINI_EXPRESSION_OBSERVE, miniExpressionProject } from "./project-starters/mini-expression-runtime";

export type ProjectStarter = {
  language: PlaygroundLanguage;
  observe: string;
  project: ProjectVfs;
};

export function starterSource(starter: ProjectStarter): PlaygroundSource {
  return starter.project;
}

const PHASE_2_GROWTH = `# Algorithm Growth Profiler
# Each comment says what the next line does.
# We count OPERATIONS, not wall-clock time, so growth stays comparable.

SIZES = [1, 2, 4, 8, 16, 32]  # increasing n; small enough that n² still finishes


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
    # O(n²): nested loops visit every pair
    ops = 0
    for _ in range(n):  # outer n
        for _ in range(n):  # inner n
            ops += 1  # one pair
    return ops


def bar(ops, scale=8):
    # ASCII chart of operation count (not seconds)
    width = max(1, ops // scale)
    return "#" * width


print("n | O(1) | O(log n) | O(n) | O(n²)")  # table header
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
alternative = rows[-1][4]  # O(n²) at n=32
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
    project: miniExpressionProject(),
    observe: MINI_EXPRESSION_OBSERVE,
  },
  "cs-phase-2-project": {
    language: "python",
    project: projectFromSingleScript(PHASE_2_GROWTH, {
      "examples/sizes.txt": "1\n2\n4\n8\n16\n32\n",
      "tests/test_starter.py": `def constant(n):
    return 1


def quadratic(n):
    return n * n


def test_growth():
    assert constant(32) == 1
    assert quadratic(8) == 64


if __name__ == "__main__":
    test_growth()
    print("growth checks passed")
`,
    }),
    observe: "Run this. The table is operation counts, not seconds. Watch $O(n^2)$ explode while $O(1)$ stays flat - that is growth rate.",
  },
};

export function getProjectStarter(projectId: string, brief: ProjectBrief): ProjectStarter {
  return STARTERS[projectId] ?? {
    language: "python",
    project: projectFromSingleScript(fallbackStarter(brief)),
    observe: "Run the starter, then replace the print list with working functions until every requirement on the build page is true.",
  };
}
