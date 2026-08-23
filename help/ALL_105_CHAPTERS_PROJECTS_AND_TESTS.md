
# Complete 105-Chapter Project & Test Guide for Computer Science

Every single chapter in the curriculum has been dynamically evaluated based on what is taught in `CS.md`. The appropriate format (**Hand-Written / Pen & Paper**, **Coding**, **Tooling & Shell**, **Written Architecture / LLD / System Design**, or **Live Mock Interview Drill**) is selected to ensure you build genuine mastery without premature syntax distraction or skipped engineering rigor.

---

# Unit I — Before You Write Code (Chapters 1–5)

### Chapter 1 — What Is Computer Science?

* **Format:** Hand-Written / On Paper (No Coding Needed)
* **Why no coding yet?** Unit I establishes computational thinking, decomposition, abstraction, and algorithms before touching code syntax.
* **Project / Test:** **"The Smart Vending Machine Controller"**
* **Problem Statement:** Design the conceptual system and complete algorithmic logic for a vending machine that sells items, accepts cash/coins, and dispenses change.
* **Task Checklist:**
  1. **I/O & Abstraction:** Identify 3 inputs, 2 outputs, 2 hidden implementation details, and 2 interface details.
  2. **Decomposition:** Draw a decomposition tree breaking the system into 3 main sub-components.
  3. **Precise Algorithm:** Write a numbered, unambiguous algorithm handling the normal flow, out-of-stock, and insufficient funds.
  4. **Hand-Trace:** Walk through purchasing a $2.50 item with a $5.00 bill.

---

### Chapter 2 — How Computers Represent Information

* **Format:** Hand-Written / Pen & Paper (Math & Bit Calculations)
* **Why hand-written?** You must master binary, hex, two's complement, and overflow mechanics manually before letting a compiler hide them.
* **Project / Test:** **"Manual 8-bit Data Representation Engine"**
* **Problem Statement:** Manually encode, convert, and detect overflow across multiple data types using 8-bit registers.
* **Task Checklist:**
  1. **Base Conversion:** Convert decimal `157` and `-43` to 8-bit binary and hexadecimal.
  2. **Two's Complement Arithmetic:** Compute `45 + (-60)` in 8-bit two's complement and verify sign bits.
  3. **Overflow Analysis:** Calculate `120 + 15` in an 8-bit signed integer. State why signed overflow occurs.
  4. **Text Encoding:** Manually map the ASCII characters `"CS!"` to binary and hex byte sequences.

---

### Chapter 3 — Logic & Digital Computation

* **Format:** Hand-Written / Circuit Diagram & Truth Tables
* **Why hand-written?** Digital logic is rooted in Boolean algebra and hardware schematics before reaching software.
* **Project / Test:** **"1-Bit Full Adder & 2-Bit ALU Schematic"**
* **Problem Statement:** Construct truth tables and gate diagrams for a digital arithmetic circuit.
* **Task Checklist:**
  1. **Truth Tables:** Derive the full truth tables for AND, OR, XOR, NAND, and NOT.
  2. **Full Adder Design:** Combine two half adders and an OR gate to design a 1-bit full adder with inputs $A, B, C_{in}$ and outputs $Sum, C_{out}$.
  3. **2-Bit Ripple Adder:** Chain two full adders together and trace `11 + 01 = 100`.
  4. **ALU Control Logic:** Design a 1-bit multiplexer circuit that selects between AND and ADD based on an `Opcode` bit.

---

### Chapter 4 — Computer Hardware

* **Format:** Hand-Written / Architectural Flowchart & Instruction Trace
* **Why hand-written?** Understanding the Von Neumann architecture requires mentally tracing register transfers (PC, MAR, MDR, ALU).
* **Project / Test:** **"Fetch-Decode-Execute CPU Trace"**
* **Problem Statement:** Hand-trace a 3-instruction assembly sequence through CPU registers, buses, and cache layers.
* **Task Checklist:**
  1. **Block Diagram:** Draw the CPU (ALU, Control Unit, Registers), System Bus, and RAM with data/address flow arrows.
  2. **Cycle-by-Cycle Trace:** Trace `LOAD R1, [100]`, `ADD R1, R2`, `STORE R1, [101]` step by step across PC, MAR, MDR, and IR.
  3. **Memory Hierarchy Ranking:** Rank Register, L1/L2/L3 Cache, RAM, and SSD by speed, cost, and typical capacity.
  4. **Cache Miss Scenario:** Explain in 2 sentences what occurs in hardware when an instruction causes a cache miss.

---

### Chapter 5 — From Source Code to a Running Program

* **Format:** Hand-Written / Mental Model & Memory Layout Diagram
* **Why hand-written?** Consolidates the boundary between source code, bytecode/machine code, compiler/interpreter, and process memory before writing programs.
* **Project / Test:** **"Compilation Pipeline & Memory Layout Map"**
* **Problem Statement:** Map the complete journey of code from text to execution and diagram the OS process memory layout.
* **Task Checklist:**
  1. **Pipeline Stages:** Draw the 4 stages from high-level source code to binary execution (Lexing/Parsing -> AST -> Bytecode/Machine Code -> Execution).
  2. **Compiler vs Interpreter:** Compare Ahead-Of-Time compilation vs Interpretation vs JIT compilation in a 3-column table.
  3. **Process Memory Diagram:** Draw a process memory layout showing Text (Code), Data, Heap (growing up), and Stack (growing down).
  4. **Stack Frame Trace:** Diagram the call stack frames for a function `foo()` calling `bar(x)`.

---

# Unit II — Learning to Control the Machine (Chapters 6–15)

### Chapter 6 — Development Environment

* **Format:** Shell / Terminal & Tooling
* **Why tooling?** The goal of Chapter 6 is to configure a pristine local developer environment, terminal workflow, and Python execution.
* **Project / Test:** **"Developer Workspace & Script Runner Setup"**
* **Problem Statement:** Set up a clean project structure, verify Python 3.x in the terminal, run scripts, and inspect tracebacks.
* **Task Checklist:**
  1. Create directory structure `projects/ch06_env/` with a virtual environment.
  2. Write `main.py` that prints system metadata (`sys.version`, current directory).
  3. Intentionally trigger a `ZeroDivisionError` and annotate the terminal traceback (line number, call origin, error type).

---

### Chapter 7 — Variables, Values & Types

* **Format:** Coding (Python)
* **Why coding?** You are now ready to write code and verify Python's dynamic type system and memory references.
* **Project / Test:** **"Type-Safe Unit Conversion Calculator"**
* **Problem Statement:** Build a script that performs temperature and distance conversions while validating variable types and states.
* **Task Checklist:**
  1. Define variables with explicit type hints for `int`, `float`, `str`, `bool`.
  2. Implement `celsius_to_fahrenheit(c: float) -> float` and `meters_to_feet(m: float) -> float`.
  3. Print variables alongside their `type()` and `id()` to demonstrate value vs identity.

---

### Chapter 8 — Control Flow

* **Format:** Coding (Python)
* **Why coding?** Practice branching (`if/elif/else`) and loops (`for/while`) with break/continue control mechanisms.
* **Project / Test:** **"Text-Based RPG Combat Loop Engine"**
* **Problem Statement:** Create an interactive, turn-based battle engine between a player and a monster using nested control flow.
* **Task Checklist:**
  1. Implement a `while player_hp > 0 and monster_hp > 0` game loop.
  2. Offer actions: `1. Attack`, `2. Defend`, `3. Heal`, `4. Run`.
  3. Use branching to calculate hit/miss probabilities, critical strikes, and damage mitigation.
  4. Ensure guaranteed termination if the player chooses "Run" or either entity reaches 0 HP.

---

### Chapter 9 — Functions & Scope

* **Format:** Coding (Python)
* **Why coding?** Master modular code, pure functions, parameter passing, return values, and variable scope rules (LEGB).
* **Project / Test:** **"Modular Geometry & Tax Calculation Library"**
* **Problem Statement:** Write a reusable utility library with pure functions, default arguments, and local scope isolation.
* **Task Checklist:**
  1. Write pure functions `calculate_area(shape, **kwargs)` and `calculate_tax(subtotal, rate=0.08)`.
  2. Demonstrate local vs global variable isolation without mutating globals.
  3. Implement a helper function with return values and docstrings explaining inputs and outputs.

---

### Chapter 10 — Collections (Lists, Tuples, Sets, Dictionaries)

* **Format:** Coding (Python)
* **Why coding?** Choose and manipulate the right native data structures for grouping and processing data.
* **Project / Test:** **"Student Gradebook & Attendance Analytics"**
* **Problem Statement:** Build a gradebook application utilizing lists for ordered scores, tuples for immutable coordinates, sets for unique student IDs, and dictionaries for student records.
* **Task Checklist:**
  1. Store students as `{id: {"name": str, "scores": [float], "tags": set}}`.
  2. Compute average, highest, and lowest scores per student.
  3. Use set operations (union, intersection) to find students enrolled in multiple classes.
  4. Sort and display top 3 students using dictionary sorting.

---

### Chapter 11 — Strings & Files

* **Format:** Coding (Python)
* **Why coding?** Real applications interact with external storage through text, CSV, and JSON parsing.
* **Project / Test:** **"Personal Expense Log & CSV/JSON Exporter"**
* **Problem Statement:** Build a CLI tool that parses raw text receipts, sanitizes string inputs, and saves/loads structured records to/from CSV and JSON files.
* **Task Checklist:**
  1. Sanitize text input with string methods (`strip()`, `split()`, `lower()`).
  2. Read and write expense rows (`date,category,amount,note`) using the `csv` module.
  3. Export categorized monthly summaries into a formatted `report.json`.

---

### Chapter 12 — Errors & Defensive Programming

* **Format:** Coding (Python)
* **Why coding?** Learn to anticipate failure, validate invariants, and use `try/except/finally` with custom exceptions.
* **Project / Test:** **"Robust Bank Account Transfer Processor"**
* **Problem Statement:** Build an account transfer engine that defends against negative amounts, overdrafts, and invalid account types.
* **Task Checklist:**
  1. Define custom exceptions: `InsufficientFundsError`, `InvalidAccountError`, `NegativeAmountError`.
  2. Wrap transactions in `try...except...finally` to ensure rollback on failure and audit logging in `finally`.
  3. Validate inputs defensively with preconditions before mutating state.

---

### Chapter 13 — Debugging

* **Format:** Practical Debugging & Coding (Python)
* **Why debugging?** Diagnose logical bugs using print debugging, `pdb` / IDE breakpoints, and structured logging.
* **Project / Test:** **"Order Processing Bug Hunt & Logging Integration"**
* **Problem Statement:** Given a intentionally faulty multi-step order processing script with off-by-one errors and mutated shared state, isolate and resolve the root causes.
* **Task Checklist:**
  1. Instrument code using Python's `logging` module (`DEBUG`, `INFO`, `ERROR`) instead of raw prints.
  2. Reproduce the bug with an isolated test input.
  3. Fix the bug, document the root cause in 3 sentences, and verify with edge cases.

---

### Chapter 14 — Modules, Packages & Environments

* **Format:** Tooling & Multi-File Architecture (Python)
* **Why multi-file?** Transition from single scripts to modular packages with dependencies.
* **Project / Test:** **"Weather Forecast Multi-Module CLI Package"**
* **Problem Statement:** Structure a clean Python package with separation of concerns (`client/`, `parser/`, `formatter/`), `requirements.txt`, and virtual environment management.
* **Task Checklist:**
  1. Create package structure with `__init__.py` files and an entrypoint `main.py`.
  2. Freeze and isolate dependencies using `pip freeze > requirements.txt` in a fresh venv.
  3. Execute the package using `python -m weather_cli`.

---

### Chapter 15 — Programming Consolidation

* **Format:** Independent Capstone Coding (Python)
* **Why capstone?** Prove complete procedural fluency by synthesizing Units I & II without step-by-step assistance.
* **Project / Test:** **"CLI Task Management & Productivity System"**
* **Problem Statement:** Build a standalone, multi-feature CLI application with persistent storage, input validation, robust error handling, and stats generation.
* **Task Checklist:**
  1. Implement CRUD operations for tasks (Title, Priority, Deadline, Status).
  2. Persist tasks to JSON file with auto-backup on corruption.
  3. Provide search, filtering by tags, and overdue alerts.
  4. Write a test script verifying all edge cases.

---

# Unit III — The Mathematical Language of CS (Chapters 16–20)

### Chapter 16 — Discrete Mathematics

* **Format:** Hand-Written / Mathematical Notation & Proof
* **Why hand-written?** Discrete mathematics (sets, relations, functions, logic) is best practiced symbolically on paper.
* **Project / Test:** **"Relational Logic & Set-Theoretic Modeling Problem Set"**
* **Task Checklist:**
  1. Compute Cartesian products, power sets, and complements for given finite sets.
  2. Prove whether a given relation on $\mathbb{Z}$ is reflexive, symmetric, and transitive (Equivalence relation).
  3. Write predicate logic formulas for statements involving $\forall$ and $\exists$.

---

### Chapter 17 — Proof & Mathematical Reasoning

* **Format:** Hand-Written / Formal Proofs
* **Why hand-written?** Proving algorithmic correctness requires formal deduction, not running test cases.
* **Project / Test:** **"Induction & Contradiction Proof Suite"**
* **Task Checklist:**
  1. Prove by Mathematical Induction that $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$.
  2. Prove by Induction that the sum of the first $n$ odd integers is $n^2$.
  3. Prove by Contradiction that $\sqrt{2}$ is irrational.
  4. Disprove a false algorithmic claim using a single minimal counterexample.

---

### Chapter 18 — Counting & Probability

* **Format:** Hand-Written / Analytical Probability Calculations
* **Why hand-written?** Combinatorics and expected value equations underpin hashing collisions and randomized algorithms.
* **Project / Test:** **"Hash Collision & Birthday Problem Risk Assessment"**
* **Task Checklist:**
  1. Calculate permutations $P(n, k)$ and combinations $\binom{n}{k}$ for password space exploration.
  2. Compute the exact probability of at least one hash collision in a 16-bit hash table with 300 entries.
  3. Calculate the Expected Value $E[X]$ of coin-toss streaks before reaching two consecutive heads.

---

### Chapter 19 — Statistics for Computing

* **Format:** Coding & Math Analysis (Python / Jupyter)
* **Why hybrid?** Calculate descriptive statistics, variance, and percentiles on synthetic latency datasets.
* **Project / Test:** **"API Latency Profiler & Outlier Detector"**
* **Task Checklist:**
  1. Compute Mean, Median, Mode, Variance, and Standard Deviation of a 1,000-request latency dataset.
  2. Calculate 50th, 90th, 99th, and 99.9th percentiles (p50, p90, p99).
  3. Implement IQR (Interquartile Range) to filter network anomalies and produce a distribution summary.

---

### Chapter 20 — Linear Algebra & Calculus Intuition

* **Format:** Hand-Written & Python Vector Math
* **Why hybrid?** Grasp vectors, dot products, matrix transformations, and gradient descent fundamentals.
* **Project / Test:** **"2D Matrix Transformation & Gradient Descent Step Engine"**
* **Task Checklist:**
  1. Compute manual vector dot product and 2x2 matrix multiplication on paper.
  2. Implement 2D coordinate rotation/scaling using matrices in Python.
  3. Compute the derivative $\frac{df}{dx}$ of $f(x) = x^2 - 4x + 4$ and manually trace 3 steps of gradient descent towards the minimum.

---

# Unit IV — Organizing Large Software (Chapters 21–30)

### Chapter 21 — Object Thinking

* **Format:** Written Analysis & Conceptual Refactoring
* **Why written?** Transition your mental model from procedural step-execution to autonomous collaborating objects with state and behavior.
* **Project / Test:** **"Procedural-to-OOP Paradigm Shift Case Study"**
* **Task Checklist:**
  1. Take a 100-line spaghetti procedural script with global dictionaries and identify 3 failure modes (e.g., data mutation, shotgun surgery).
  2. Define 3 domain entities, their responsibilities, and private invariants.

---

### Chapter 22 — Classes & Objects

* **Format:** Coding (Python) & Heap Memory Diagram
* **Why coding + diagram?** Understand how object instances live on the heap, `self`, and `__init__`.
* **Project / Test:** **"Bank Account Instance Manager with Heap Diagram"**
* **Task Checklist:**
  1. Implement `BankAccount` class with `__init__`, `deposit()`, and `withdraw()`.
  2. Instantiate multiple independent accounts.
  3. Draw a heap memory diagram showing class blueprints vs separate instance memory blocks.

---

### Chapter 23 — Encapsulation & Abstraction

* **Format:** Coding (Python)
* **Why coding?** Protect object invariants using `@property`, private attributes (`_`), and Abstract Base Classes (`abc.ABC`).
* **Project / Test:** **"Payment Gateway Abstraction with Invariant Protection"**
* **Task Checklist:**
  1. Define an Abstract Base Class `PaymentGateway` with `@abstractmethod def process_payment()`.
  2. Implement concrete classes `StripeGateway` and `PayPalGateway`.
  3. Enforce balance invariants using property setters that reject invalid states.

---

### Chapter 24 — Inheritance & Polymorphism

* **Format:** Coding (Python)
* **Why coding?** Replace fragile `if/elif` type checking with polymorphic method dispatch.
* **Project / Test:** **"Polymorphic Notification Dispatcher"**
* **Task Checklist:**
  1. Create base `Notification` and subclasses `EmailNotification`, `SMSNotification`, `PushNotification`.
  2. Implement polymorphic `send()` on each subclass.
  3. Eliminate all `isinstance()` or `type()` checks from the dispatcher loop.

---

### Chapter 25 — Composition (Prefer Has-A over Is-A)

* **Format:** Coding (Python)
* **Why coding?** Avoid deep, rigid inheritance hierarchies by assembling behaviors through composition.
* **Project / Test:** **"Modular Game Character & Weapon Assembly System"**
* **Task Checklist:**
  1. Refactor a deep hierarchy (`FlyingFireDragonWarrior`) into composed components (`Character(attack_behavior, movement_behavior)`).
  2. Swap behaviors dynamically at runtime (e.g., equip `SwordAttack` -> `BowAttack`).

---

### Chapter 26 — SOLID Principles

* **Format:** Coding & Architecture Review (Python)
* **Why coding?** Practice all 5 SOLID design principles in a single cohesive codebase.
* **Project / Test:** **"SOLID E-Commerce Invoice & Order Pipeline"**
* **Task Checklist:**
  1. Demonstrate SRP (separate tax calculation, persistence, and formatting).
  2. Demonstrate OCP & LSP (add discounts without editing existing order logic).
  3. Demonstrate ISP & DIP (depend on abstractions, not concrete database drivers).

---

### Chapter 27 — Code Quality & Refactoring

* **Format:** Coding / Refactoring (Python)
* **Why coding?** Identify code smells (Long Method, Feature Envy, Primitive Obsession) and perform targeted refactoring under test coverage.
* **Project / Test:** **"Legacy Order Processor Code Smell Cleanup"**
* **Task Checklist:**
  1. Write regression tests for an ugly legacy function before touching it.
  2. Extract methods, replace magic numbers, and introduce Parameter Objects.
  3. Verify all tests pass with zero behavioral regressions.

---

### Chapter 28 — Design Patterns

* **Format:** Coding (Python)
* **Why coding?** Implement canonical Gang of Four (GoF) design patterns: Creational, Structural, Behavioral.
* **Project / Test:** **"Document Conversion Suite (Factory, Decorator, Strategy)"**
* **Task Checklist:**
  1. **Factory Method:** Create document parsers (PDF, Markdown, HTML).
  2. **Decorator:** Add compression and encryption wrappers to document output streams.
  3. **Strategy:** Interchange export compression algorithms (Zip vs Gzip).

---

### Chapter 29 — Low-Level Design (LLD)

* **Format:** Written LLD + Class Diagram (UML)
* **Why written LLD?** Master structural object modeling under real design constraints before writing code.
* **Project / Test:** **"Multi-Level Parking Lot Low-Level Design"**
* **Task Checklist:**
  1. Clarify requirements (Vehicle types, Spot sizes, Pricing strategy, Ticket validation).
  2. Draw UML Class Diagram with associations, aggregations, and compositions.
  3. Provide interface definitions and pseudocode for `park_vehicle()` and `calculate_fee()`.

---

### Chapter 30 — OOP Consolidation

* **Format:** Comprehensive Coding Capstone (Python)
* **Why capstone?** Build an idiomatic, production-ready Python OOP library with custom dunder methods (`__repr__`, `__eq__`, `__len__`), descriptors, and unit tests.
* **Project / Test:** **"Custom In-Memory Vector & DataFrame Engine"**
* **Task Checklist:**
  1. Implement a `DataSeries` class with arithmetic dunder overloads (`__add__`, `__mul__`, `__getitem__`).
  2. Implement `DataFrame` with column access, filtering expressions, and formatted display.
  3. Write a comprehensive unit test suite covering invariants and edge cases.

---

# Unit V — Data Structures & Algorithms (Chapters 31–48)

### Chapter 31 — Complexity Analysis

* **Format:** Hand-Written & Benchmarking Code
* **Why hybrid?** Derive Big-O on paper, then empirically measure execution time with increasing $N$.
* **Project / Test:** **"Big-O Asymptotic Profiler & Growth Plotter"**
* **Task Checklist:**
  1. Derive the Big-O time and space complexity for 4 given code snippets on paper.
  2. Benchmark $O(1), O(\log N), O(N), O(N^2)$ functions with input sizes $N = 10$ to $100,000$.
  3. Plot or print execution time scaling to verify theoretical predictions.

---

### Chapter 32 — Arrays & Strings

* **Format:** Coding (Python from scratch)
* **Why coding?** Understand contiguous memory, capacity doubling, and pointer manipulation without native shortcuts.
* **Project / Test:** **"Dynamic Array (Custom List) & In-Place String Manipulator"**
* **Task Checklist:**
  1. Implement `CustomArrayList` with automatic resizing/doubling on append.
  2. Implement in-place string reversal and anagram grouping in $O(N)$ time.

---

### Chapter 33 — Linked Lists

* **Format:** Coding (Python)
* **Why coding?** Master pointer manipulation, node linking, and memory reference traversal.
* **Project / Test:** **"Doubly Linked List with Pointer Reversal & Cycle Detection"**
* **Task Checklist:**
  1. Build a `DoublyLinkedList` with `insert_head`, `insert_tail`, `delete_node`.
  2. Implement in-place iterative linked list reversal ($O(N)$ time, $O(1)$ space).
  3. Implement Floyd's Tortoise and Hare Cycle-Finding algorithm.

---

### Chapter 34 — Stacks, Queues & Deques

* **Format:** Coding (Python)
* **Why coding?** Implement LIFO and FIFO abstract data types and use them for parsing and scheduling.
* **Project / Test:** **"Valid Parentheses & Polish Notation Evaluator"**
* **Task Checklist:**
  1. Implement a Stack to evaluate Reverse Polish Notation expressions (e.g., `["2", "1", "+", "3", "*"] -> 9`).
  2. Implement a balanced brackets validator handling `()[]{}`.
  3. Implement a Monotonic Stack to solve the "Next Greater Element" problem in $O(N)$.

---

### Chapter 35 — Recursion

* **Format:** Coding & Call-Stack Diagram
* **Why hybrid?** Trace recursive base cases and visualize stack frame memory.
* **Project / Test:** **"Recursive File Tree Crawler & Tower of Hanoi Simulator"**
* **Task Checklist:**
  1. Implement Tower of Hanoi solver and print the recursive move sequence.
  2. Draw the recursive call tree for `fibonacci(5)`.
  3. Implement a recursive directory walker that searches for files by extension.

---

### Chapter 36 — Hashing

* **Format:** Coding (Python from scratch)
* **Why coding?** Build a hash table from scratch to understand hash functions, collisions, and load factors.
* **Project / Test:** **"Custom HashMap with Separate Chaining & Auto-Resizing"**
* **Task Checklist:**
  1. Implement a polynomial rolling hash function for strings.
  2. Handle collisions using linked-list separate chaining.
  3. Implement automatic dynamic resizing (re-hashing) when load factor $\alpha \ge 0.75$.

---

### Chapter 37 — Trees

* **Format:** Coding (Python)
* **Why coding?** Build hierarchical structures and write tree traversal algorithms.
* **Project / Test:** **"Binary Search Tree (BST) Engine with Inorder/Preorder/Postorder/Level-Order"**
* **Task Checklist:**
  1. Implement BST insertion, search, and deletion (handling 0, 1, and 2 children).
  2. Implement DFS (Inorder, Preorder, Postorder) and BFS Level-Order traversals.
  3. Write a validator `is_valid_bst(root)` with $O(N)$ time complexity.

---

### Chapter 38 — Heaps & Priority Queues

* **Format:** Coding (Python)
* **Why coding?** Implement binary heap invariants (`parent <= child`) and array-backed tree math.
* **Project / Test:** **"Min-Heap From Scratch & Top-K Frequent Elements Finder"**
* **Task Checklist:**
  1. Implement `MinHeap` using a continuous array (`sift_up`, `sift_down`, `push`, `pop`).
  2. Implement `heapify()` in $O(N)$ time.
  3. Solve the "Top-K Frequent Elements" problem in a continuous stream in $O(N \log K)$.

---

### Chapter 39 — Sorting

* **Format:** Coding (Python)
* **Why coding?** Implement divide-and-conquer sorting algorithms from scratch.
* **Project / Test:** **"MergeSort, QuickSort (Lomuto/Hoare) & Count Inversions"**
* **Task Checklist:**
  1. Implement iterative or recursive MergeSort ($O(N \log N)$ guaranteed).
  2. Implement QuickSort with randomized pivot selection.
  3. Modify MergeSort to count the number of inversions in an array in $O(N \log N)$.

---

### Chapter 40 — Searching

* **Format:** Coding (Python)
* **Why coding?** Master logarithmic search and binary search invariants on arrays.
* **Project / Test:** **"Advanced Binary Search Suite (Lower/Upper Bound, Rotated Array)"**
* **Task Checklist:**
  1. Implement standard Binary Search ($O(\log N)$).
  2. Implement `lower_bound` (first occurrence) and `upper_bound` (last occurrence).
  3. Find the minimum element in a rotated sorted array in $O(\log N)$.

---

### Chapter 41 — Graphs

* **Format:** Coding (Python)
* **Why coding?** Model networks and solve traversal, shortest path, and topological dependency problems.
* **Project / Test:** **"Network Router: BFS, DFS, Topological Sort & Dijkstra's Algorithm"**
* **Task Checklist:**
  1. Represent graph with adjacency list.
  2. Implement BFS (shortest path in unweighted graph) and DFS (cycle detection).
  3. Implement Kahn's Algorithm for Topological Sorting (Task Dependency Resolver).
  4. Implement Dijkstra's Algorithm using a Priority Queue for weighted shortest paths.

---

### Chapter 42 — Algorithmic Patterns

* **Format:** Coding (Python)
* **Why coding?** Train muscle memory on canonical LeetCode algorithmic patterns.
* **Project / Test:** **"Two Pointers, Sliding Window & Prefix Sum Challenge Suite"**
* **Task Checklist:**
  1. Solve "Longest Substring Without Repeating Characters" using Sliding Window ($O(N)$).
  2. Solve "Container With Most Water" using Two Pointers ($O(N)$).
  3. Solve "Subarray Sum Equals K" using Prefix Sum + Hash Map ($O(N)$).

---

### Chapter 43 — Greedy Algorithms

* **Format:** Coding & Correctness Argument
* **Why hybrid?** Prove that a locally optimal choice produces a globally optimal solution before writing code.
* **Project / Test:** **"Interval Scheduling & Huffman Coding File Compressor"**
* **Task Checklist:**
  1. Solve the "Non-Overlapping Interval Scheduling" problem greedily.
  2. Write a 1-paragraph proof of the Greedy-Choice Property.
  3. Implement Huffman Coding tree construction and text compression/decompression.

---

### Chapter 44 — Backtracking

* **Format:** Coding (Python)
* **Why coding?** Traverse and prune exponential decision search trees.
* **Project / Test:** **"N-Queens & Sudoku Constraint-Satisfaction Solver"**
* **Task Checklist:**
  1. Implement $N$-Queens solver that generates all valid non-attacking board states.
  2. Implement a Sudoku Solver using recursive backtracking with state restoration.
  3. Measure and print the number of pruned branches vs explored branches.

---

### Chapter 45 — Dynamic Programming (DP)

* **Format:** Coding (Python)
* **Why coding?** Solve overlapping subproblems using both Top-Down Memoization and Bottom-Up Tabulation.
* **Project / Test:** **"0/1 Knapsack & Longest Common Subsequence (Memoized vs Tabulated)"**
* **Task Checklist:**
  1. Solve 0/1 Knapsack recursively with memoization ($O(N \times W)$).
  2. Solve 0/1 Knapsack using a 2D/1D bottom-up DP table.
  3. Solve Longest Common Subsequence (LCS) and reconstruct the optimal string.

---

### Chapter 46 — Specialized Data Structures

* **Format:** Coding (Python)
* **Why coding?** Build advanced structures used in search engines and network connectivity.
* **Project / Test:** **"Trie Autocomplete Engine & Union-Find with Path Compression"**
* **Task Checklist:**
  1. Implement a `Trie` with `insert`, `search`, and `starts_with` prefix search.
  2. Implement Disjoint-Set Union (`UnionFind`) with Path Compression and Rank Optimization.
  3. Solve Dynamic Graph Connectivity / Kruskal's Minimum Spanning Tree using Union-Find.

---

### Chapter 47 — Algorithm Correctness

* **Format:** Hand-Written / Mathematical Invariant Proof
* **Why hand-written?** Formally prove an algorithm will never fail on any input using loop invariants.
* **Project / Test:** **"Loop Invariant & Correctness Proof for Partition / Binary Search"**
* **Task Checklist:**
  1. State the Initialization, Maintenance, and Termination conditions for Binary Search.
  2. Formally prove that the loop invariant holds at every iteration.
  3. Write an induction proof for QuickSort's correctness.

---

### Chapter 48 — DSA Consolidation

* **Format:** Full Coding Capstone (Python)
* **Why capstone?** Combine multiple data structures to build a production-grade system component.
* **Project / Test:** **"High-Performance Thread-Safe LRU Cache with TTL"**
* **Task Checklist:**
  1. Combine a Hash Map + Doubly Linked List for $O(1)$ `get` and `put`.
  2. Add Time-To-Live (TTL) expiration per key.
  3. Stress-test under 100,000 randomized operations and verify eviction ordering.

---

# Unit VI — Inside the Computer (Chapters 49–54)

### Chapter 49 — Computer Architecture

* **Format:** Hand-Written / Architectural Simulation
* **Why hand-written?** Trace instruction pipelining, hazards, and branch prediction on paper.
* **Project / Test:** **"5-Stage RISC Pipeline Hazard Simulator"**
* **Task Checklist:**
  1. Trace 5 assembly instructions through IF, ID, EX, MEM, WB stages.
  2. Identify a Data Hazard (Read-After-Write) and insert NOPs / Forwarding paths.
  3. Explain branch misprediction penalty in 2 sentences.

---

### Chapter 50 — Memory & Program Representation

* **Format:** Hand-Written & C/Python Memory Inspection
* **Why hybrid?** Understand virtual memory, page tables, page faults, and pointers.
* **Project / Test:** **"Virtual Address Translation & Page Table Walker"**
* **Task Checklist:**
  1. Given a 32-bit virtual address and a 4KB page size, extract the Virtual Page Number (VPN) and Offset.
  2. Trace address lookup through a 2-level Page Table diagram.
  3. Explain what triggers a Page Fault and the exact steps the OS takes to resolve it.

---

### Chapter 51 — Programming Language Foundations

* **Format:** Coding (Python)
* **Why coding?** Build a miniature language interpreter with Lexer, Parser, and AST evaluator.
* **Project / Test:** **"Mini-Lisp / Arithmetic AST Interpreter"**
* **Task Checklist:**
  1. Tokenize input strings (e.g., `(+ 5 (* 2 3))`).
  2. Parse tokens into an Abstract Syntax Tree (AST).
  3. Evaluate the AST recursively to compute the final result.

---

### Chapter 52 — Operating Systems

* **Format:** Tooling & Python OS Scripting
* **Why tooling + coding?** Inspect OS processes, file descriptors, inodes, and signals.
* **Project / Test:** **"Process Monitor & Inode Filesystem Explorer"**
* **Task Checklist:**
  1. Inspect process metadata using Python's `os` and `psutil` (PID, memory, open file descriptors).
  2. Spawn child processes, handle signals (`SIGINT`, `SIGTERM`), and prevent zombie processes.
  3. Explain the relationship between file path, directory inode, and disk data blocks.

---

### Chapter 53 — Concurrency & Parallelism

* **Format:** Coding (Python `threading` & `multiprocessing`)
* **Why coding?** Reproduce race conditions, deadlocks, and resolve them with locks and semaphores.
* **Project / Test:** **"Race Condition Reproducer & Thread-Safe Bank System"**
* **Task Checklist:**
  1. Create a script where 10 threads concurrently deposit to a shared balance, demonstrating race conditions.
  2. Fix the race condition using `threading.Lock`.
  3. Create a deliberate 2-lock deadlock scenario and document how to prevent it with lock ordering.

---

### Chapter 54 — Systems Programming

* **Format:** Coding (Python / C / Low-Level Sockets & Syscalls)
* **Why coding?** Interact directly with OS system calls and low-level I/O streams.
* **Project / Test:** **"Zero-Copy File Server via Raw Sockets & Syscalls"**
* **Task Checklist:**
  1. Open, read, and write files using raw OS file descriptors (`os.open`, `os.read`, `os.write`).
  2. Stream binary files over raw TCP sockets without high-level web frameworks.
  3. Implement non-blocking I/O polling with `selectors` or `epoll`.

---

# Unit VII — Connecting Computers (Chapters 55–59)

### Chapter 55 — Networking Foundations

* **Format:** Hand-Written / Packet Trace Diagram & Wireshark Analysis
* **Why hand-written + Wireshark?** Trace packet headers across all 5 layers of the TCP/IP stack.
* **Project / Test:** **"5-Layer Packet Encapsulation Diagram & Trace Analysis"**
* **Task Checklist:**
  1. Diagram an HTTP GET request encapsulated through Application, Transport (TCP), Network (IP), Data Link (Ethernet), and Physical layers.
  2. Annotate source/destination MAC addresses, IP addresses, and Port numbers.
  3. Identify packet fragmentation when payload exceeds MTU (1500 bytes).

---

### Chapter 56 — TCP, UDP & Sockets

* **Format:** Coding (Python `socket`)
* **Why coding?** Build network communication protocols from scratch.
* **Project / Test:** **"Reliable TCP Chat Server & Fast UDP Heartbeat Ping"**
* **Task Checklist:**
  1. Build a multi-client TCP broadcast chat server using non-blocking socket selectors.
  2. Hand-trace the TCP 3-Way Handshake (`SYN`, `SYN-ACK`, `ACK`) and 4-Way Teardown (`FIN`).
  3. Build a UDP latency ping tool measuring packet loss and round-trip time.

---

### Chapter 57 — DNS & The Internet

* **Format:** Coding (Python)
* **Why coding?** Build a raw DNS query tool that speaks the binary DNS wire protocol.
* **Project / Test:** **"Raw UDP DNS Query Tool & Resolver"**
* **Task Checklist:**
  1. Construct raw DNS query binary packet for domain `example.com` (Type A).
  2. Send query via UDP socket to `8.8.8.8:53`.
  3. Parse the DNS response header and answer section to extract the IP address.

---

### Chapter 58 — HTTP

* **Format:** Coding (Python)
* **Why coding?** Build an HTTP/1.1 compliant web server from raw sockets without Flask/FastAPI.
* **Project / Test:** **"Custom HTTP/1.1 Static Web Server from Scratch"**
* **Task Checklist:**
  1. Parse raw HTTP request strings (Method, Path, Headers, Body).
  2. Serve static files (`index.html`, images) with correct `Content-Type` and `Content-Length`.
  3. Return proper HTTP status codes (`200 OK`, `400 Bad Request`, `404 Not Found`).

---

### Chapter 59 — API Design

* **Format:** Written Spec & Coding (FastAPI / Flask)
* **Why hybrid?** Design a clean RESTful API contract before implementing it.
* **Project / Test:** **"Production RESTful E-Commerce Catalog API"**
* **Task Checklist:**
  1. Write OpenAPI / Swagger specification with proper REST resources and HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`).
  2. Implement pagination (`limit`, `offset`), filtering, and sorting.
  3. Implement standardized JSON error envelopes and status codes (`201 Created`, `422 Unprocessable Entity`).

---

# Unit VIII — Data That Survives (Chapters 60–65)

### Chapter 60 — Database Foundations

* **Format:** Coding (Python)
* **Why coding?** Compare file-based storage corruption against relational database durability.
* **Project / Test:** **"Flat-File Concurrent Corrupter vs SQLite Benchmark"**
* **Task Checklist:**
  1. Simulate 50 concurrent workers writing to a raw JSON file, demonstrating file corruption and lost updates.
  2. Implement the same workflow in SQLite with atomic transactions, demonstrating 100% data integrity.

---

### Chapter 61 — SQL (Structured Query Language)

* **Format:** Coding (SQL queries)
* **Why coding?** Write production-grade queries with joins, aggregations, subqueries, and CTEs.
* **Project / Test:** **"E-Commerce Analytics SQL Query Suite"**
* **Task Checklist:**
  1. Write multi-table `INNER`, `LEFT`, and `FULL OUTER JOIN` queries.
  2. Write analytical queries using `GROUP BY`, `HAVING`, and aggregate functions (`COUNT`, `SUM`, `AVG`).
  3. Use Common Table Expressions (CTEs) and Window Functions (`ROW_NUMBER()`, `RANK()`) to find top 3 spenders per region.

---

### Chapter 62 — Data Modeling

* **Format:** Written Schema Design & Normalization
* **Why written design?** Design normalized relational database schemas and defend denormalization trade-offs.
* **Project / Test:** **"Hospital Management Relational Schema (1NF to 3NF)"**
* **Task Checklist:**
  1. Take an unnormalized flat table and normalize it through 1NF, 2NF, and 3NF.
  2. Define primary keys, foreign keys, and referential integrity constraints.
  3. Identify one specific read-heavy reporting query and justify a controlled denormalization.

---

### Chapter 63 — Database Internals (Indexes & B-Trees)

* **Format:** Hand-Written / Diagram & SQL Profiling
* **Why hybrid?** Understand B-Tree indexing, index scans vs table scans, and write amplification.
* **Project / Test:** **"B-Tree Index Deep Dive & `EXPLAIN QUERY PLAN` Profiler"**
* **Task Checklist:**
  1. Draw a 3-level B+ Tree showing internal search keys and leaf linked-list pointers.
  2. Run `EXPLAIN QUERY PLAN` on a 1,000,000-row table before and after creating a composite index.
  3. Explain why indexing improves read performance while degrading write/insert performance.

---

### Chapter 64 — Transactions & Concurrency (ACID)

* **Format:** Coding & SQL Concurrency Testing
* **Why coding?** Reproduce concurrency anomalies across isolation levels (Read Committed, Repeatable Read, Serializable).
* **Project / Test:** **"ACID Isolation Anomaly Reproducer"**
* **Task Checklist:**
  1. Set up two concurrent database sessions.
  2. Reproduce a Dirty Read (Read Uncommitted).
  3. Reproduce a Non-Repeatable Read and a Phantom Read.
  4. Demonstrate how Serializable isolation or Optimistic Locking prevents race conditions.

---

### Chapter 65 — Operating & Scaling Databases

* **Format:** Written Architecture & Sharding Design
* **Why written architecture?** Design read replicas, partitioning, and horizontal sharding strategies.
* **Project / Test:** **"Global Multi-Region Database Sharding Strategy"**
* **Task Checklist:**
  1. Contrast Master-Replica Replication vs Partitioning vs Horizontal Sharding.
  2. Design a Sharding Key strategy for a multi-tenant SaaS application (e.g., hash-based vs range-based).
  3. Explain how to handle cross-shard queries and re-sharding when nodes fill up.

---

# Unit IX — Security & Human-Centered Software (Chapters 66–71)

### Chapter 66 — Security Foundations

* **Format:** Written Threat Model & Diagram
* **Why written?** Identify trust boundaries, threat actors, and attack surfaces using the STRIDE model.
* **Project / Test:** **"STRIDE Threat Model for Telemedicine Health App"**
* **Task Checklist:**
  1. Draw a Data Flow Diagram (DFD) showing user browser, API gateway, database, and 3rd-party payment gateway.
  2. Identify trust boundaries.
  3. Document 1 threat for each STRIDE category (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) with mitigations.

---

### Chapter 67 — Cryptography for Developers

* **Format:** Coding (Python `cryptography` / `hashlib`)
* **Why coding?** Implement password hashing, symmetric encryption, and digital signatures correctly.
* **Project / Test:** **"Secure Vault: Argon2id Hashing, AES-256-GCM & HMAC Verification"**
* **Task Checklist:**
  1. Hash passwords using `Argon2id` or `bcrypt` with unique salts.
  2. Encrypt/decrypt sensitive payload files using AES-256-GCM authenticated symmetric encryption.
  3. Generate and verify digital signatures using RSA / Ed25519 keypairs.

---

### Chapter 68 — Authentication & Authorization

* **Format:** Coding (Python / JWT)
* **Why coding?** Implement stateless JWT authentication, refresh tokens, and Role-Based Access Control (RBAC).
* **Project / Test:** **"Stateless JWT Auth Service with RBAC Middleware"**
* **Task Checklist:**
  1. Build user registration/login generating signed JWT access and refresh tokens.
  2. Implement an authorization decorator/middleware enforcing roles (`Admin`, `Editor`, `Viewer`).
  3. Handle token expiration and blacklisting on logout.

---

### Chapter 69 — Application Security (AppSec)

* **Format:** Coding & Security Patching
* **Why coding?** Exploit and patch OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR).
* **Project / Test:** **"Vulnerable Web App Exploitation & Hardening Suite"**
* **Task Checklist:**
  1. Fix a vulnerable raw SQL concatenation with parameterized prepared statements.
  2. Sanitize user input to prevent Stored XSS.
  3. Implement token bucket / sliding window IP rate limiting.

---

### Chapter 70 — Human-Computer Interaction (HCI)

* **Format:** Written Heuristic Evaluation & Redesign
* **Why written?** Evaluate software usability using Nielsen's 10 Usability Heuristics.
* **Project / Test:** **"SaaS Dashboard Usability Audit & Wireframe Redesign"**
* **Task Checklist:**
  1. Audit a confusing existing interface against Nielsen's Heuristics.
  2. Identify 3 major usability violations (e.g., lack of error prevention, poor visibility of system status).
  3. Sketch a clean, intuitive wireframe redesign addressing every violation.

---

### Chapter 71 — Graphics & Interactive Computing

* **Format:** Coding (HTML5 Canvas / Pygame)
* **Why coding?** Build a 60 FPS rendering pipeline, event loop, and collision detection.
* **Project / Test:** **"Interactive 2D Physics & Particle Engine"**
* **Task Checklist:**
  1. Implement a 60 FPS game loop with delta-time calculation (`dt`).
  2. Handle keyboard and mouse input events.
  3. Render 1,000 moving particles with bounding-box collision detection and gravity simulation.

---

# Unit X — Professional Software Engineering (Chapters 72–80)

### Chapter 72 — Git & Collaboration

* **Format:** Tooling / Git CLI Workflow
* **Why tooling?** Master branching, rebasing, pull requests, and resolving merge conflicts.
* **Project / Test:** **"Git Merge Conflict Resolution & Feature-Branch Flow"**
* **Task Checklist:**
  1. Create a repository, develop on feature branch `feature/auth`.
  2. Simulate a merge conflict on `main`, resolve the conflict manually, and verify git commit history.
  3. Perform an interactive rebase (`git rebase -i`) to squash messy WIP commits.

---

### Chapter 73 — Requirements Engineering

* **Format:** Written Engineering Specification
* **Why written spec?** Translate ambiguous product ideas into unambiguous technical specifications.
* **Project / Test:** **"Product Requirements Document (PRD) for Real-Time File Sync"**
* **Task Checklist:**
  1. Write functional and non-functional requirements (throughput, latency, availability).
  2. Define clear in-scope features and explicit out-of-scope non-goals.
  3. Write unambiguous Acceptance Criteria using Gherkin syntax (`Given... When... Then...`).

---

### Chapter 74 — Testing

* **Format:** Coding (Python `pytest`)
* **Why coding?** Build a comprehensive Test Pyramid (Unit, Integration, Mocks).
* **Project / Test:** **"Automated Test Suite with Fixtures, Mocks & Mutation Testing"**
* **Task Checklist:**
  1. Write isolated unit tests with `pytest` for core domain logic.
  2. Use `unittest.mock` to mock external API calls and database connections.
  3. Measure test coverage and achieve $\ge 90\%$ branch coverage.

---

### Chapter 75 — Software Architecture

* **Format:** Coding & Architecture Design
* **Why coding?** Decouple business logic from external frameworks using Clean / Hexagonal Architecture.
* **Project / Test:** **"Clean Architecture Order Processing Service"**
* **Task Checklist:**
  1. Separate code into Domain Entities, Use Cases, Repositories, and Delivery/Controllers.
  2. Ensure Domain logic contains zero dependencies on external frameworks or databases.
  3. Swap the database repository from in-memory to SQLite without modifying domain code.

---

### Chapter 76 — Development Process

* **Format:** Written Team Playbook
* **Why written?** Design high-velocity, reliable software delivery workflows.
* **Project / Test:** **"Engineering Team Delivery Playbook & Incident Post-Mortem"**
* **Task Checklist:**
  1. Define the team's Definition of Ready (DoR) and Definition of Done (DoD).
  2. Design a Pull Request code review checklist.
  3. Write a Blameless Post-Mortem for a simulated production outage.

---

### Chapter 77 — CI/CD (Continuous Integration & Delivery)

* **Format:** Tooling / GitHub Actions YAML
* **Why tooling?** Automate linting, testing, and container deployment pipelines.
* **Project / Test:** **"Automated GitHub Actions CI/CD Pipeline"**
* **Task Checklist:**
  1. Write a `.github/workflows/ci.yml` pipeline.
  2. Run linters (`ruff`/`flake8`), typecheckers (`mypy`), and test suites on every PR.
  3. Automatically build and publish a container image only on passing `main` merges.

---

### Chapter 78 — Containers & Deployment

* **Format:** Tooling / Docker & Docker Compose
* **Why tooling?** Package applications into reproducible, lightweight containers.
* **Project / Test:** **"Multi-Stage Dockerfile & Multi-Container Docker Compose Stack"**
* **Task Checklist:**
  1. Write an optimized multi-stage `Dockerfile` minimizing image size.
  2. Create `docker-compose.yml` linking the API service, PostgreSQL database, and Redis cache.
  3. Verify data persistence using Docker named volumes.

---

### Chapter 79 — Cloud Fundamentals

* **Format:** Written Cloud Architecture & Cost Model
* **Why written architecture?** Model cloud infrastructure across compute, storage, and networking.
* **Project / Test:** **"High-Availability Cloud Architecture Blueprint (AWS/GCP)"**
* **Task Checklist:**
  1. Design a multi-AZ architecture with VPC, public/private subnets, and NAT Gateways.
  2. Choose between IaaS (EC2/Compute Engine), PaaS (App Engine), and Serverless (Lambda).
  3. Estimate monthly infrastructure cost under 100,000 monthly active users.

---

### Chapter 80 — Observability & Production Debugging

* **Format:** Coding (Python / Prometheus / OpenTelemetry)
* **Why coding?** Instrument systems with the 3 pillars of observability: Logs, Metrics, and Traces.
* **Project / Test:** **"Production Observability Suite with Metrics & Traces"**
* **Task Checklist:**
  1. Output structured JSON logs containing `trace_id` and request context.
  2. Expose Prometheus metrics (Request Count, Latency Histogram, Error Rate).
  3. Instrument OpenTelemetry distributed tracing across two communicating microservices.

---

# Unit XI — System Design & Distributed Systems (Chapters 81–88)

### Chapter 81 — System Design Foundations

* **Format:** Written Capacity Estimation & Design
* **Why written design?** Practice back-of-the-envelope calculations and traffic sizing.
* **Project / Test:** **"URL Shortener (Bitly) Back-of-the-Envelope Capacity Model"**
* **Task Checklist:**
  1. Estimate Read/Write QPS (Queries Per Second), Storage capacity for 5 years, and Network Bandwidth.
  2. Choose hash algorithm (Base62 vs MD5 truncation).
  3. Draw high-level architecture diagram.

---

### Chapter 82 — Scaling Applications

* **Format:** Written Architecture & Scaling Strategy
* **Why written architecture?** Scale a bottlenecked web application from 1,000 to 10,000,000 users.
* **Project / Test:** **"Stateless App Scaling & Database Read-Replication Plan"**
* **Task Checklist:**
  1. Eliminate local state from app servers (externalize sessions to Redis).
  2. Introduce Layer 7 Load Balancing (Round Robin vs Least Connections).
  3. Set up Database Read Replicas and address replication lag.

---

### Chapter 83 — Caching

* **Format:** Coding & Strategy Design (Python + Redis)
* **Why coding?** Implement caching strategies and handle Cache Invalidation, Stampede, and Penetration.
* **Project / Test:** **"Cache-Aside & Write-Through Redis Acceleration Layer"**
* **Task Checklist:**
  1. Implement Cache-Aside pattern with Redis and database fallback.
  2. Defend against Cache Stampede using distributed mutex locking.
  3. Implement Bloom Filter to prevent Cache Penetration for non-existent IDs.

---

### Chapter 84 — Asynchronous & Event-Driven Systems

* **Format:** Coding (Python + RabbitMQ/Celery/Redis Queue)
* **Why coding?** Decouple heavy background workloads from user-facing request loops.
* **Project / Test:** **"Asynchronous Video Processing & Email Queue Pipeline"**
* **Task Checklist:**
  1. Implement producer-consumer pattern using message queues.
  2. Handle task failures with Exponential Backoff and Dead Letter Queues (DLQ).
  3. Guarantee idempotent job execution.

---

### Chapter 85 — Distributed Systems & CAP Theorem

* **Format:** Written Analysis & Quorum Calculation
* **Why written?** Reason about consistency, availability, network partitions, and quorum math.
* **Project / Test:** **"CAP Theorem & Tunable Quorum Consistency Analyzer"**
* **Task Checklist:**
  1. Analyze a network partition scenario and explain the CP vs AP trade-off.
  2. Calculate Strong Consistency Quorum ($R + W > N$) for a 5-node replica cluster.
  3. Explain Eventual Consistency and Conflict-Free Replicated Data Types (CRDTs).

---

### Chapter 86 — Coordination & Consensus

* **Format:** Written Theory & Simplified Raft Simulation (Python)
* **Why hybrid?** Understand how distributed nodes agree in the presence of node failures.
* **Project / Test:** **"Raft Consensus Leader Election & Heartbeat Simulator"**
* **Task Checklist:**
  1. Model Leader, Follower, and Candidate node states in Python.
  2. Simulate randomized election timeouts and split-vote resolution.
  3. Hand-trace log replication and commit index progression across 3 nodes.

---

### Chapter 87 — Reliability Patterns

* **Format:** Coding (Python)
* **Why coding?** Build resilient software that survives downstream partial failures.
* **Project / Test:** **"Fault-Tolerance Resilience Suite: Circuit Breaker & Retry with Jitter"**
* **Task Checklist:**
  1. Implement a 3-state Circuit Breaker (`CLOSED`, `OPEN`, `HALF-OPEN`).
  2. Implement exponential backoff with full jitter for retries.
  3. Add request timeouts to prevent thread pool exhaustion.

---

### Chapter 88 — Complete System Design Capstone

* **Format:** Full System Design Whitepaper & Architecture Diagram
* **Why written architecture?** Perform an end-to-end, interview-grade distributed system design from scratch.
* **Project / Test:** **"Real-Time Ride-Sharing (Uber) or Video Streaming (YouTube) System Design"**
* **Task Checklist:**
  1. Scope functional requirements and calculate scale/storage estimates.
  2. Design API contracts and data models.
  3. Draw end-to-end distributed architecture (Gateways, Geospatial Indexing / CDN, Microservices, Storage, Message Brokers).
  4. Address Single Points of Failure (SPOF) and bottlenecks.

---

# Unit XII — Other Core CS Areas (Chapters 89–91)

### Chapter 89 — Artificial Intelligence Foundations

* **Format:** Coding (Python)
* **Why coding?** Build classical AI search and a simple machine learning model from scratch without black-box frameworks.
* **Project / Test:** **"A* Pathfinding Search & Linear Regression from Scratch"**
* **Task Checklist:**
  1. Implement the A* Pathfinding algorithm on a 2D grid using Manhattan distance heuristic.
  2. Implement univariate Linear Regression using Gradient Descent in pure Python.
  3. Train model, evaluate Mean Squared Error (MSE), and plot regression line.

---

### Chapter 90 — Specialized Computing Platforms

* **Format:** Written Platform Comparison & Resource Budget
* **Why written?** Understand hardware constraints in Mobile, Embedded/IoT, and Edge Computing.
* **Project / Test:** **"IoT Sensor Node vs Mobile Client Architecture Comparison"**
* **Task Checklist:**
  1. Compare battery power, memory limits, and connectivity constraints across Embedded, Mobile, and Cloud servers.
  2. Design a lightweight telemetry protocol (MQTT / CoAP) minimizing battery and bandwidth consumption.

---

### Chapter 91 — Computing, Society & Ethics

* **Format:** Written Ethical Impact Assessment
* **Why written?** Evaluate data privacy, algorithmic bias, AI safety, and engineering responsibility.
* **Project / Test:** **"Algorithmic Bias Audit & Ethical Impact Assessment"**
* **Task Checklist:**
  1. Audit an automated loan approval algorithm for disparate impact and demographic bias.
  2. Propose technical mitigations (fairness constraints, audit trails).
  3. Write an engineering disclosure and data retention policy conforming to GDPR principles.

---

# Unit XIII — Maintaining Real Software (Chapters 92–94)

### Chapter 92 — Working in Existing Codebases

* **Format:** Practical Code Exploration & Bug Fix
* **Why practical?** Read, navigate, and modify an unfamiliar open-source codebase safely.
* **Project / Test:** **"Open-Source Codebase Deep Dive & First Bug Fix"**
* **Task Checklist:**
  1. Clone a popular open-source Python repository (e.g., Requests, Flask, or Rich).
  2. Generate a module dependency diagram and trace an entrypoint request.
  3. Locate an open issue, write a reproducing test, implement the fix, and pass all existing tests.

---

### Chapter 93 — Legacy Code & Maintenance

* **Format:** Coding (Python)
* **Why coding?** Refactor fragile legacy code without tests by introducing test seams and characterization tests.
* **Project / Test:** **"Characterization Testing & Test Seam Injection on Legacy Payroll"**
* **Task Checklist:**
  1. Wrap a 300-line untested legacy script with Golden Master / Characterization Tests.
  2. Inject a test seam (Dependency Injection) to decouple hardcoded filesystem writes.
  3. Refactor the legacy core safely while ensuring 100% Golden Master output preservation.

---

### Chapter 94 — Engineering Communication

* **Format:** Written Architectural Decision Record (ADR)
* **Why written ADR?** Document and defend major technical architectural trade-offs to engineering stakeholders.
* **Project / Test:** **"Architectural Decision Record (ADR): Monolith vs Microservices Migration"**
* **Task Checklist:**
  1. State the Context, Problem Statement, and Business Drivers.
  2. Document 3 evaluated alternatives with pros, cons, and operational costs.
  3. State the final Decision, Consequences, and Rollback Plan.

---

# Unit XIV — Grand Capstone (Chapters 95–98)

### Chapter 95 — Capstone Planning

* **Format:** Written Production Spec & MVP Roadmap
* **Why written spec?** Define a buildable, production-ready product scope with explicit non-goals.
* **Project / Test:** **"Grand Capstone Engineering Spec & Architecture Blueprint"**
* **Task Checklist:**
  1. Define problem statement, target users, and MVP Must-Haves vs Post-MVP Nice-to-Haves.
  2. Design database schemas, API contracts, and component architecture.
  3. Define the Definition of Done (DoD), CI/CD requirements, and deployment targets.

---

### Chapter 96 — Build the Production Application

* **Format:** Full-Stack Production Coding
* **Why full-stack coding?** Build and ship a complete, multi-user web application with frontend, backend API, database, and authentication.
* **Project / Test:** **"Full-Stack Production Web Application Deployment"**
* **Task Checklist:**
  1. Implement relational database models with migrations.
  2. Implement REST / GraphQL backend API with auth and validation.
  3. Build responsive web frontend consuming the API.
  4. Deploy to a public cloud URL with automated CI/CD pipeline.

---

### Chapter 97 — Break, Measure & Harden

* **Format:** Practical Load-Testing & Hardening
* **Why practical load testing?** Stress-test your application to identify performance bottlenecks and security flaws.
* **Project / Test:** **"Locust Load Testing, Profiling & Hardening Suite"**
* **Task Checklist:**
  1. Write Locust / k6 load-testing scripts simulating 1,000 concurrent users.
  2. Profile CPU, memory, and database slow-query bottlenecks under load.
  3. Implement caching, database indexes, and connection pooling to reduce p99 latency by $\ge 50\%$.

---

### Chapter 98 — Portfolio Release

* **Format:** Documentation, Packaging & Portfolio Presentation
* **Why portfolio packaging?** Package code, architecture diagrams, live demo, and documentation to professional standards.
* **Project / Test:** **"Open-Source Production Portfolio Package & Demo"**
* **Task Checklist:**
  1. Write comprehensive `README.md` with architecture diagrams, setup instructions, and design decisions.
  2. Provide live working URL and public GitHub repository with clean commit history.
  3. Record a 3-minute technical walkthrough video demonstrating system architecture and key features.

---

# Unit XV — Interview & Job Readiness (Chapters 99–105)

### Chapter 99 — Coding Interview Method

* **Format:** Live Verbal & Coding Drill
* **Why live drill?** Master the 6-step problem-solving framework under observation while narrating your thoughts aloud.
* **Project / Test:** **"6-Step Timed Coding Interview Walkthrough"**
* **Task Checklist:**
  1. **Step 1:** Clarify inputs, outputs, constraints, and edge cases.
  2. **Step 2:** State brute-force solution with Big-O complexity.
  3. **Step 3:** Optimize algorithm and state optimal Big-O.
  4. **Step 4:** Write clean, modular code.
  5. **Step 5:** Manually trace code with edge cases.
  6. **Step 6:** Refactor and analyze runtime/space trade-offs.

---

### Chapter 100 — DSA Interview Practice

* **Format:** Timed Coding Interview Sprint (45 Minutes)
* **Why timed coding?** Solve unseen LeetCode Medium problems under strict time constraints.
* **Project / Test:** **"45-Minute Mixed Medium DSA Coding Sprint"**
* **Task Checklist:**
  1. Solve 1 Graph/Tree Medium problem in 20 minutes with optimal time/space complexity.
  2. Solve 1 DP/Array Medium problem in 20 minutes.
  3. Spend final 5 minutes testing edge cases and explaining complexity.

---

### Chapter 101 — CS Fundamentals Interview Review

* **Format:** Fast-Recall Flashcard & Verbal Drill
* **Why verbal drill?** Deliver concise, 2-minute answers without notes on core computer science topics.
* **Project / Test:** **"2-Minute CS Fundamentals Rapid-Fire Oral Exam"**
* **Task Checklist:**
  1. Explain Process vs Thread, Stack vs Heap, and Mutex vs Semaphore in under 2 minutes each.
  2. Explain TCP 3-Way Handshake vs UDP in under 2 minutes.
  3. Explain B-Tree vs Hash Index and ACID Isolation levels in under 2 minutes.

---

### Chapter 102 — Low-Level Design (LLD) Interviews

* **Format:** 45-Minute Timed LLD Interview Drill
* **Why live LLD?** Produce an object-oriented design and clean code under interview pressure.
* **Project / Test:** **"Live LLD Interview: Elevator Control System or Chess Game"**
* **Task Checklist:**
  1. Clarify requirements and define actors/entities in 5 minutes.
  2. Draw class diagram / interfaces adhering to SOLID principles in 15 minutes.
  3. Write working Python class skeletons with core methods and concurrency considerations in 25 minutes.

---

### Chapter 103 — System Design Interviews

* **Format:** 45-Minute Timed System Design Interview Drill
* **Why live system design?** Drive a high-scale architectural design on a virtual whiteboard.
* **Project / Test:** **"Live System Design Interview: Design TikTok / WhatsApp / Rate Limiter"**
* **Task Checklist:**
  1. Scope requirements and estimate QPS/storage in 5 minutes.
  2. Draw High-Level Architecture in 10 minutes.
  3. Deep-dive into data modeling, partitioning, caching, and failover in 25 minutes.
  4. Summarize bottlenecks and operational monitoring in 5 minutes.

---

### Chapter 104 — Behavioral Interviews

* **Format:** Written STAR Matrix & Verbal Story Rehearsal
* **Why structured stories?** Frame engineering experiences using the STAR method (Situation, Task, Action, Result).
* **Project / Test:** **"STAR Story Matrix for Top 5 Behavioral Questions"**
* **Task Checklist:**
  1. Write structured STAR stories for: *Technical Conflict*, *Major Failure/Mistake*, *Proudest Achievement*, *Working Under Ambiguity*, and *Mentorship/Leadership*.
  2. Quantify results with metrics (e.g., latency reduced by 40%, shipped 2 weeks early).
  3. Rehearse 2-minute spoken delivery for each story.

---

### Chapter 105 — Final Mock Interview Loop

* **Format:** Full 4-Round Dress Rehearsal Simulation
* **Why dress rehearsal?** Simulate the complete 4-round tech industry interview loop end-to-end.
* **Project / Test:** **"Grand 4-Round Tech Industry Mock Interview Loop"**
* **Task Checklist:**
  1. **Round 1 (DSA):** 45-min live algorithmic problem solving.
  2. **Round 2 (LLD/OOP):** 45-min object-oriented design and code.
  3. **Round 3 (System Design):** 45-min large-scale distributed system design.
  4. **Round 4 (Behavioral & Leadership):** 45-min culture and technical retrospective.
