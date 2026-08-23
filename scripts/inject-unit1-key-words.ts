/**
 * Inserts concise **Key words** tables into Unit I lessons in CS.md.
 * Run: npx tsx scripts/inject-unit1-key-words.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

export type Row = [term: string, meaning: string];

export const UNIT1_KEY_WORDS: Record<string, Row[]> = {
  "1.1": [
    [
      "Computer",
      "A machine that takes **input**, **processes** it by rules, and produces **output**",
    ],
    ["Input", "Data given to a program **before or while** it runs"],
    ["Processing", "Carrying out the **steps** of instructions on data"],
    ["Output", "The **result** a program produces after processing"],
    ["Computation", "Transforming **information** according to definite rules"],
  ],
  "1.2": [
    [
      "Algorithm",
      "A **precise, finite** sequence of steps that turns input into output",
    ],
    [
      "Ambiguity",
      "A step that leaves room for **judgment** - machines cannot follow it",
    ],
    ["Termination", "A guarantee the steps will **stop**, not run forever"],
  ],
  "1.3": [
    [
      "Computer science",
      "The study of **computation**: algorithms, representation, cost, and correctness",
    ],
    ["Programming", "Writing **precise instructions** a machine can execute"],
    [
      "Software engineering",
      "Building and operating software that **lasts**: teams, tests, design, deploy",
    ],
    [
      "Abstraction",
      "Hiding detail behind a **clean interface** so you can reason at one level",
    ],
  ],
  "1.4": [
    [
      "Abstraction",
      "Shows the details needed for a job and **hides** the rest",
    ],
    ["Interface", "What a caller is allowed to **see and use**"],
    ["Implementation", "How the work is done **underneath** the interface"],
    [
      "Leak",
      "When a hidden detail must be known to use or debug the abstraction",
    ],
  ],
  "1.5": [
    [
      "Decomposition",
      "Breaking a large problem into **smaller parts** with clear jobs",
    ],
    ["Responsibility", "What one part is **accountable** for"],
    ["Boundary", "Where one part **ends** and another begins"],
  ],
  "1.6": [
    [
      "Computational thinking",
      "Formulating problems so a person or machine can **carry out** a solution",
    ],
    [
      "Pattern recognition",
      "Spotting **repeated structure** so one solution can cover many cases",
    ],
    [
      "Algorithmic thinking",
      "Describing a solution as **clear steps** a machine can follow",
    ],
  ],
  "2.1": [
    ["Bit", "One piece of information with exactly two values: **0 or 1**"],
    ["Byte", "A group of **8 bits** treated as one unit"],
    [
      "Representation",
      "Agreed rules that map information onto **patterns of bits**",
    ],
  ],
  "2.2": [
    ["Binary", "Base-2 numbering using only digits **0 and 1**"],
    [
      "Place value",
      "Each bit position is worth **twice** the one to its right",
    ],
    ["Decimal", "Everyday base-10 numbering using digits **0–9**"],
  ],
  "2.3": [
    ["Hexadecimal", "Base-16 shorthand where **one hex digit = four bits**"],
    ["Nibble", "Four bits - the amount one **hex digit** represents"],
  ],
  "2.4": [
    ["Unsigned integer", "Whole numbers that are **zero or positive** only"],
    ["Signed integer", "Whole numbers that can be **negative or positive**"],
    ["Two's complement", "The usual bit pattern for **negative** integers"],
  ],
  "2.5": [
    [
      "Floating point",
      "A way to store **approximate** real numbers with limited bits",
    ],
    ["Precision", "How finely a float can distinguish nearby values"],
    [
      "Rounding error",
      "The small gap between a real value and its **float** encoding",
    ],
  ],
  "2.6": [
    ["ASCII", "An early encoding that maps characters to **7-bit** numbers"],
    [
      "Unicode",
      "A standard that assigns a unique **code point** to every character",
    ],
    ["UTF-8", "A variable-length encoding of Unicode into **bytes**"],
  ],
  "2.7": [
    ["Overflow", "When a result does not fit in the available **bit width**"],
    [
      "Wraparound",
      "Overflow that continues counting from the **other end** of the range",
    ],
  ],
  "2.8": [
    [
      "Endianness",
      "The byte **order** used to store a multi-byte value in memory",
    ],
    ["Big-endian", "Most significant byte stored at the **lowest** address"],
    [
      "Little-endian",
      "Least significant byte stored at the **lowest** address",
    ],
  ],
  "3.1": [
    ["Boolean", "A value that is only **true** or **false**"],
    [
      "Boolean logic",
      "Rules for combining true/false values with **AND, OR, NOT**",
    ],
  ],
  "3.2": [
    [
      "Truth table",
      "A table listing every input combination and its **output**",
    ],
    ["Proposition", "A statement that is either **true** or **false**"],
  ],
  "3.3": [
    ["AND", "True only if **both** inputs are true"],
    ["OR", "True if **at least one** input is true"],
    ["NOT", "**Flips** a single true/false input"],
    ["XOR", "True if the inputs **differ**"],
  ],
  "3.4": [
    ["Logic gate", "A small circuit that implements one **boolean** operation"],
    ["NAND", "NOT-AND - a single gate type that can build **any** circuit"],
    ["Transistor", "The electronic switch behind physical **gates**"],
  ],
  "3.5": [
    [
      "Combinational circuit",
      "Outputs depend only on **current inputs**, not on history",
    ],
    ["Half adder", "Adds two bits and produces **sum** and **carry**"],
  ],
  "3.6": [
    [
      "Sequential circuit",
      "Outputs can depend on **past state** as well as inputs",
    ],
    [
      "Clock",
      "A repeating signal that steps sequential circuits **forward in time**",
    ],
  ],
  "3.7": [
    ["Flip-flop", "A circuit that **stores** one bit of state"],
    ["State", "Remembered information that affects what happens **next**"],
  ],
  "4.1": [
    [
      "CPU",
      "The **Central Processing Unit** - the circuit that executes instructions",
    ],
    [
      "ALU",
      "Arithmetic/Logic Unit - does the **math and logic** inside the CPU",
    ],
    ["Core", "One independent compute engine inside a modern CPU"],
  ],
  "4.2": [
    ["Instruction", "One primitive CPU operation encoded as a **bit pattern**"],
    [
      "ISA",
      "Instruction Set Architecture - the CPU's allowed **vocabulary** of instructions",
    ],
    ["Operand", "A value or register an instruction **acts on**"],
  ],
  "4.3": [
    ["Register", "Tiny, ultra-fast storage **inside** the CPU"],
    [
      "Program counter",
      "Register holding the address of the **next** instruction",
    ],
    [
      "Flags",
      "Status bits set by the last operation (zero, negative, overflow)",
    ],
  ],
  "4.4": [
    [
      "Fetch",
      "Read the next instruction from memory using the **program counter**",
    ],
    [
      "Decode",
      "Interpret which operation it is and which **registers** it uses",
    ],
    ["Execute", "Perform the operation in the **ALU** or memory"],
  ],
  "4.5": [
    [
      "RAM",
      "Main memory - fast, **volatile** working space for running programs",
    ],
    ["Address", "A number that identifies one **byte** (or word) in memory"],
    ["Volatile", "Contents are lost when **power** is removed"],
  ],
  "4.6": [
    [
      "Cache",
      "Small fast memory between CPU and RAM that keeps **recently used** data",
    ],
    ["Hit", "Needed data was already in the cache"],
    ["Miss", "Needed data was not in the cache, so RAM must be read"],
  ],
  "4.7": [
    ["Storage", "SSDs/disks that keep data **without power**"],
    ["Persistence", "Data that survives after a program or machine **stops**"],
  ],
  "4.8": [
    ["I/O", "Input/output - how the computer talks to the **outside world**"],
    [
      "Device",
      "Hardware that feeds or receives data (keyboard, display, network)",
    ],
  ],
  "4.9": [
    ["Bus", "Shared wires carrying **addresses, data, and control** signals"],
    ["Bandwidth", "How much data a bus can move in a given **time**"],
  ],
  "5.1": [
    [
      "Source code",
      "A program written in a **human-readable** language as text",
    ],
    ["Machine code", "Binary instructions the **CPU** can execute directly"],
  ],
  "5.2": [
    ["Syntax", "The **grammar** of a language - which forms are allowed"],
    ["Semantics", "What a well-formed program **means** when it runs"],
    [
      "Syntax error",
      "Code rejected because it is not a **legal** sentence of the language",
    ],
  ],
  "5.3": [
    ["Compiler", "**Translates** source code into another form before it runs"],
    [
      "Compilation",
      "The whole translate-ahead process from source to runnable code",
    ],
  ],
  "5.4": [
    ["Interpreter", "**Executes** source (or an intermediate form) as it goes"],
    ["Runtime", "The time when a program is **executing**"],
  ],
  "5.5": [
    [
      "Bytecode",
      "Portable intermediate instructions run by a **virtual machine**",
    ],
    ["Virtual machine", "Software that executes bytecode on real hardware"],
  ],
  "5.6": [
    [
      "JIT",
      "Just-In-Time compilation - compiles **hot** code while the program runs",
    ],
    ["Hot path", "Code that runs often enough to be worth **speeding up**"],
  ],
  "5.7": [
    ["Lexer", "Splits source text into **tokens** (names, numbers, symbols)"],
    ["Token", "One meaningful chunk of source text"],
  ],
  "5.8": [
    ["Parser", "Builds structure from tokens and checks **grammar**"],
    ["AST", "Abstract Syntax Tree - the nested structure of the program"],
  ],
  "5.9": [
    [
      "Linking",
      "Combining compiled pieces and resolving **symbols** into one image",
    ],
    [
      "Symbol",
      "A named reference (function, variable) resolved at link or load time",
    ],
  ],
  "5.10": [
    [
      "Loading",
      "Mapping a program into memory and starting at the **entry point**",
    ],
    ["Stack", "Stores active **function calls** and their locals"],
    ["Heap", "Holds **longer-lived data** created while the program runs"],
  ],
};

function formatTable(rows: Row[]) {
  const lines = [
    "",
    "**Key words**",
    "",
    "| Word | Meaning |",
    "| ---- | ------- |",
    ...rows.map(([term, meaning]) => `| **${term}** | ${meaning} |`),
    "",
    "",
  ];
  return lines.join("\n");
}

function main() {
  const path = resolve("content/roadmaps/CS.md");
  let text = readFileSync(path, "utf8");

  // Remove any previously injected Key words blocks so re-runs are safe.
  text = text.replace(
    /\n\*\*Key words\*\*\n\n\| Word \| Meaning \|\n\| ---- \| ------- \|\n(?:\| \*\*[^*]+\*\* \|[^\n]+\n)+/g,
    "\n",
  );

  const ids = Object.keys(UNIT1_KEY_WORDS).sort((a, b) => {
    const [ap = 0, al = 0] = a.split(".").map(Number);
    const [bp = 0, bl = 0] = b.split(".").map(Number);
    return ap - bp || al - bl;
  });

  for (const id of ids) {
    const rows = UNIT1_KEY_WORDS[id]!;
    const heading = new RegExp(`^## ${id.replace(".", "\\.")}\\b.*$`, "m");
    const match = heading.exec(text);
    if (!match || match.index === undefined) {
      throw new Error(`Missing lesson heading for ${id}`);
    }
    const afterHeading = match.index + match[0].length;
    const rest = text.slice(afterHeading);
    const next = /^(?:## |\n# )/m.exec(rest);
    if (!next || next.index === undefined) {
      throw new Error(`Could not find end of lesson ${id}`);
    }
    const insertAt = afterHeading + next.index;
    // Skip if already present just before this boundary (paranoia).
    const before = text.slice(Math.max(0, insertAt - 400), insertAt);
    if (/\*\*Key words\*\*/.test(before)) continue;
    text = text.slice(0, insertAt) + formatTable(rows) + text.slice(insertAt);
  }

  writeFileSync(path, text);
  console.log(`Injected Key words tables for ${ids.length} Unit I lessons.`);
}

if (
  process.argv[1] &&
  /inject-unit1-key-words\.(ts|js|mjs|cjs)$/.test(
    process.argv[1].replace(/\\/g, "/"),
  )
) {
  main();
}
