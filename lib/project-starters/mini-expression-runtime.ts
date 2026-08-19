import type { ProjectVfs } from "../code-playground/types";
import { projectFromFiles } from "./layout";

const TOKENIZER = `from __future__ import annotations


class Token:
    def __init__(self, kind: str, value):
        self.kind = kind
        self.value = value

    def __repr__(self):
        return f"({self.kind!r}, {self.value!r})"


def tokenize(source: str) -> list[Token]:
    tokens = []
    index = 0
    length = len(source)
    kinds = {
        "+": "PLUS",
        "-": "MINUS",
        "*": "STAR",
        "/": "SLASH",
        "(": "LEFT_PAREN",
        ")": "RIGHT_PAREN",
    }
    while index < length:
        char = source[index]
        if char.isspace():
            index += 1
            continue
        if char.isdigit():
            start = index
            while index < length and source[index].isdigit():
                index += 1
            tokens.append(Token("NUMBER", int(source[start:index])))
            continue
        if char in kinds:
            tokens.append(Token(kinds[char], char))
            index += 1
            continue
        raise ValueError(f"invalid character {char!r} at index {index}")
    tokens.append(Token("EOF", None))
    return tokens
`;

const PARSER = `from __future__ import annotations


class Parser:
    def __init__(self, tokens):
        self.tokens = tokens
        self.index = 0

    def peek(self):
        return self.tokens[self.index]

    def eat(self, kind=None):
        token = self.peek()
        if kind and token.kind != kind:
            raise ValueError(f"expected {kind}, got {token.kind}")
        self.index += 1
        return token

    def parse(self):
        node = self.expr()
        if self.peek().kind != "EOF":
            raise ValueError("unexpected tokens after the expression")
        return node

    def expr(self):
        node = self.term()
        while self.peek().kind in ("PLUS", "MINUS"):
            operator = self.eat()
            node = {"kind": "binop", "op": operator.value, "left": node, "right": self.term()}
        return node

    def term(self):
        node = self.factor()
        while self.peek().kind in ("STAR", "SLASH"):
            operator = self.eat()
            node = {"kind": "binop", "op": operator.value, "left": node, "right": self.factor()}
        return node

    def factor(self):
        token = self.peek()
        if token.kind == "NUMBER":
            self.eat()
            return {"kind": "number", "value": token.value}
        if token.kind == "MINUS":
            self.eat()
            return {"kind": "neg", "value": self.factor()}
        if token.kind == "LEFT_PAREN":
            self.eat()
            node = self.expr()
            self.eat("RIGHT_PAREN")
            return node
        raise ValueError("expected a number or '('")


def parse(tokens):
    return Parser(tokens).parse()


def format_tree(node, prefix="", is_tail=True):
    connector = "+-- " if is_tail else "|-- "
    if node["kind"] == "number":
        return prefix + connector + str(node["value"])
    if node["kind"] == "neg":
        line = prefix + connector + "negate"
        child = format_tree(node["value"], prefix + ("    " if is_tail else "|   "), True)
        return line + "\\n" + child
    line = prefix + connector + node["op"]
    left = format_tree(node["left"], prefix + ("    " if is_tail else "|   "), False)
    right = format_tree(node["right"], prefix + ("    " if is_tail else "|   "), True)
    return line + "\\n" + left + "\\n" + right
`;

const EVALUATOR = `from __future__ import annotations


def evaluate(node, trace=None):
    if trace is None:
        trace = []
    kind = node["kind"]
    if kind == "number":
        trace.append(f"load {node['value']}")
        return node["value"], trace
    if kind == "neg":
        value, _ = evaluate(node["value"], trace)
        result = -value
        trace.append(f"negate {value} -> {result}")
        return result, trace
    left, _ = evaluate(node["left"], trace)
    right, _ = evaluate(node["right"], trace)
    operator = node["op"]
    if operator == "+":
        result = left + right
    elif operator == "-":
        result = left - right
    elif operator == "*":
        result = left * right
    elif operator == "/":
        if right == 0:
            raise ValueError("division by zero")
        if left % right != 0:
            raise ValueError(f"{left}/{right} is not an integer")
        result = left // right
    else:
        raise ValueError(f"unknown operator {operator}")
    trace.append(f"{left} {operator} {right} = {result}")
    return result, trace
`;

const VALIDATE = `from __future__ import annotations


def load_input(raw: str) -> str:
    lines = [
        line.strip()
        for line in raw.splitlines()
        if line.strip() and not line.strip().startswith("#")
    ]
    if not lines:
        raise ValueError("empty input")
    return lines[0]
`;

const MAIN = `from __future__ import annotations

import importlib.util
from pathlib import Path

from evaluator import evaluate
from parser import format_tree, parse
from tokenizer import tokenize
from validate import load_input

ROOT = Path(__file__).resolve().parent.parent


def run_case(path: Path, expect_ok: bool):
    print("===", path.name, "===")
    raw = path.read_text(encoding="utf-8")
    try:
        text = load_input(raw)
        print("Input:", text)
        tokens = tokenize(text)
        print("Tokens:")
        print(tokens)
        tree = parse(tokens)
        print("Parse tree:")
        print(format_tree(tree))
        value, trace = evaluate(tree)
        print("Execution trace:")
        for step in trace:
            print(" ", step)
        print("Result:", value)
        return value
    except Exception as error:
        print("Invalid input rejected:", raw.strip().splitlines()[0] if raw.strip() else "", "->", error)
        if expect_ok:
            raise
        return None


def run_tests():
    test_path = ROOT / "tests" / "test_runtime.py"
    spec = importlib.util.spec_from_file_location("test_runtime", test_path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    module.run_all()


def main():
    print("Mini Expression Runtime")
    print("States: source text -> tokens -> parse tree -> evaluated integer")
    print()
    normal = run_case(ROOT / "examples" / "normal.txt", True)
    print()
    boundary = run_case(ROOT / "examples" / "boundary.txt", True)
    print()
    run_case(ROOT / "examples" / "invalid.txt", False)
    print()
    if normal != 14:
        raise SystemExit(f"normal case expected 14, got {normal}")
    if boundary != 0:
        raise SystemExit(f"boundary case expected 0, got {boundary}")
    print("Known answers matched: normal=14, boundary=0, invalid=rejected.")
    print()
    run_tests()


if __name__ == "__main__":
    main()
`;

const TESTS = `from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))

from evaluator import evaluate
from parser import parse
from tokenizer import tokenize
from validate import load_input


def test_normal():
    value, _ = evaluate(parse(tokenize(load_input("2 * (3 + 4)"))))
    assert value == 14


def test_boundary():
    value, _ = evaluate(parse(tokenize(load_input("0"))))
    assert value == 0


def test_invalid():
    try:
        parse(tokenize(load_input("2 * (3 +")))
    except ValueError:
        return
    raise AssertionError("expected invalid input to fail")


def run_all():
    test_normal()
    test_boundary()
    test_invalid()
    print("pytest-style checks passed (normal, boundary, invalid).")


if __name__ == "__main__":
    run_all()
`;

export const MINI_EXPRESSION_OBSERVE =
  "Run this. You should see tokens, a tree, 14, a tiny boundary case, and a rejected invalid string. That is a miniature compiler pipeline.";

export function miniExpressionProject(): ProjectVfs {
  return projectFromFiles(
    "src/main.py",
    {
      "src/__init__.py": "",
      "src/tokenizer.py": TOKENIZER,
      "src/parser.py": PARSER,
      "src/evaluator.py": EVALUATOR,
      "src/validate.py": VALIDATE,
      "src/main.py": MAIN,
      "tests/test_runtime.py": TESTS,
      "examples/normal.txt": "# normal case: 2 * (3 + 4) must equal 14\n2 * (3 + 4)\n",
      "examples/boundary.txt": "# boundary: the smallest integer expression\n0\n",
      "examples/invalid.txt": "# invalid: missing closing tokens\n2 * (3 +\n",
    },
    ["src", "tests", "examples"],
  );
}
