# Project Build Guide

Use this guide in two layers:

1. After each roadmap phase, build its detailed mini-project while the lesson is fresh.
2. After the roadmap's final phase, build the track's main portfolio project. Its numbered steps reuse that roadmap's phases in order.

Every required tool is free. Application libraries and local infrastructure are open source. Optional public hosts use free plans, can sleep or enforce quotas, and can be replaced by the permanent local deployment instructions.

## Integrated Git Workflow for Project Cards

Use one portfolio repository for the non-Git project folders in this guide. Initialize it once, not again inside every phase folder. If you are already working inside a repository, skip `git init` and keep its existing branch policy.

Before the first project, create a root `README.md` and `.gitignore`. Ignore `.env`, credentials, `.venv`, `node_modules`, caches, generated build output, large model files, raw packet captures, and local databases unless a card explicitly requires a small sanitized fixture. Then make the one-time workspace commit:

```bash
git init
git branch -M main
git status
git add -- README.md .gitignore
git commit -m "chore(portfolio): initialize project workspace"
```

Every checkpoint below assumes you are at this portfolio root. Keep phase projects under their lowercase roadmap directory, such as `cs/mini-expression-runtime`, `web/profile-page`, or `odoo/erp_process_map`; the checkpoint path is the canonical location. Inspect `git status` before staging and never commit secrets. The Git roadmap projects use their own evolving `git-workbench` repository because repository state is the subject of those labs.

> New to staging and commits? Review [`Git.md` Phase 2](../roadmaps/Git.md#phase-2) and [Phase 3](../roadmaps/Git.md#phase-3) before continuing.

---

## Choose your roadmap

- [Programming Fundamentals and OOP](#programming-fundamentals-and-oop)
- [Git and Git Workflows](#git-and-git-workflows)
- [Computer Science](#computer-science)
- [Data Analysis and Engineering](#data-analysis-and-engineering)
- [Computer Networks](#computer-networks)
- [Artificial Intelligence and Machine Learning](#artificial-intelligence-and-machine-learning)
- [Odoo Engineering](#odoo-engineering)
- [Web Development](#web-development)
- [Cloud Engineering](#cloud-engineering)
- [DevOps Engineering](#devops-engineering)
- [Cybersecurity](#cybersecurity)

## Programming Fundamentals and OOP

Study this roadmap first: [OOP.md](../roadmaps/OOP.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="oop-phase-f1-project"></a>
### OOP PHASE F1 MINI-PROJECT

#### PROJECT: EXECUTION TRACE NOTEBOOK

#### SPECIFICATION

Build **Execution Trace Notebook** as a focused exercise for **Execution Tracing**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run three short Python programs one statement at a time and output a table showing line number, variable values, branch taken, and printed result.
- Define one realistic scenario, its boundaries, and the intended reader for the Execution Trace Notebook.
- Collect or create the exact inputs needed to apply Execution Tracing; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `execution-trace-notebook` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Run three short Python programs one statement at a time and output a table showing line number, variable values, branch taken, and printed result.
3. Collect or create the exact inputs needed to apply Execution Tracing; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Execution Tracing**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **EXECUTION TRACE NOTEBOOK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/execution-trace-notebook
git commit -m "feat(execution-trace-notebook): complete execution trace notebook"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE F1](../roadmaps/OOP.md#phase-f1) | [CONTINUE TO OOP PHASE F2](../roadmaps/OOP.md#phase-f2)

<a id="oop-phase-f2-project"></a>
### OOP PHASE F2 MINI-PROJECT

#### PROJECT: CLI RULE ENGINE

#### SPECIFICATION

Build **CLI Rule Engine** as a focused exercise for **Control Flow and Rules**. Keep the data and interface small enough to finish, but implement the following behavior:

- Read simple facts from the command line, evaluate ordered if/elif rules, and print both the chosen result and the rule that matched.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Control Flow and Rules explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `cli-rule-engine` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Read simple facts from the command line, evaluate ordered if/elif rules, and print both the chosen result and the rule that matched.
3. Represent the important states or data structures from Control Flow and Rules explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Control Flow and Rules**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **CLI RULE ENGINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/cli-rule-engine
git commit -m "feat(cli-rule-engine): complete cli rule engine"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE F2](../roadmaps/OOP.md#phase-f2) | [CONTINUE TO OOP PHASE F3](../roadmaps/OOP.md#phase-f3)

<a id="oop-phase-f3-project"></a>
### OOP PHASE F3 MINI-PROJECT

#### PROJECT: MODULAR TEXT STATISTICS

#### SPECIFICATION

Build **Modular Text Statistics** as a focused exercise for **Functions and Modules**. Keep the data and interface small enough to finish, but implement the following behavior:

- Read text from a file, call separate counting functions, and report lines, words, characters, unique words, and the five most frequent words.
- Give the user one clear main action and keep all other features secondary.
- Use Functions and Modules in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `modular-text-statistics` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Read text from a file, call separate counting functions, and report lines, words, characters, unique words, and the five most frequent words.
3. Use Functions and Modules in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Functions and Modules**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **MODULAR TEXT STATISTICS**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/modular-text-statistics
git commit -m "feat(modular-text-statistics): complete modular text statistics"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE F3](../roadmaps/OOP.md#phase-f3) | [CONTINUE TO OOP PHASE 1](../roadmaps/OOP.md#phase-1)

<a id="oop-phase-1-project"></a>
### OOP PHASE 1 MINI-PROJECT

#### PROJECT: PROCEDURAL-TO-OBJECTS REFACTOR

#### SPECIFICATION

Build **Procedural-to-Objects Refactor** as a focused exercise for **Object Thinking**. Keep the data and interface small enough to finish, but implement the following behavior:

- Start with a procedural order-pricing script, identify its data and responsibilities, then refactor it into collaborating objects without changing the result.
- Give the user one clear main action and keep all other features secondary.
- Use Object Thinking in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `procedural-to-objects-refactor` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Start with a procedural order-pricing script, identify its data and responsibilities, then refactor it into collaborating objects without changing the result.
3. Use Object Thinking in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Object Thinking**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **PROCEDURAL-TO-OBJECTS REFACTOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/procedural-to-objects-refactor
git commit -m "refactor(procedural-to-objects-refactor): complete procedural-to-objects refactor"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 1](../roadmaps/OOP.md#phase-1) | [CONTINUE TO OOP PHASE 2](../roadmaps/OOP.md#phase-2)

<a id="oop-phase-2-project"></a>
### OOP PHASE 2 MINI-PROJECT

#### PROJECT: CLASS & INSTANCE REGISTRY

#### SPECIFICATION

Build **Class & Instance Registry** as a focused exercise for **Classes and Objects**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a registry that constructs multiple class instances, assigns unique IDs, separates class data from instance data, and searches by ID.
- Give the user one clear main action and keep all other features secondary.
- Use Classes and Objects in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `class-instance-registry` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Create a registry that constructs multiple class instances, assigns unique IDs, separates class data from instance data, and searches by ID.
3. Use Classes and Objects in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Classes and Objects**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **CLASS & INSTANCE REGISTRY**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/class-instance-registry
git commit -m "feat(class-instance-registry): complete class & instance registry"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 2](../roadmaps/OOP.md#phase-2) | [CONTINUE TO OOP PHASE 3](../roadmaps/OOP.md#phase-3)

<a id="oop-phase-3-project"></a>
### OOP PHASE 3 MINI-PROJECT

#### PROJECT: BANK ACCOUNT STATE MACHINE

#### SPECIFICATION

Build **Bank Account State Machine** as a focused exercise for **State and Behavior**. Keep the data and interface small enough to finish, but implement the following behavior:

- Model a bank account with deposit, withdraw, freeze, and close operations and reject every invalid state transition.
- Give the user one clear main action and keep all other features secondary.
- Use State and Behavior in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `bank-account-state-machine` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Model a bank account with deposit, withdraw, freeze, and close operations and reject every invalid state transition.
3. Use State and Behavior in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **State and Behavior**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **BANK ACCOUNT STATE MACHINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/bank-account-state-machine
git commit -m "feat(bank-account-state-machine): complete bank account state machine"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 3](../roadmaps/OOP.md#phase-3) | [CONTINUE TO OOP PHASE 4](../roadmaps/OOP.md#phase-4)

<a id="oop-phase-4-project"></a>
### OOP PHASE 4 MINI-PROJECT

#### PROJECT: VALIDATED WALLET API

#### SPECIFICATION

Build **Validated Wallet API** as a focused exercise for **Encapsulation**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a wallet whose balance cannot be changed directly and whose methods enforce positive amounts, sufficient funds, and a transaction history.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Encapsulation in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `validated-wallet-api` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Create a wallet whose balance cannot be changed directly and whose methods enforce positive amounts, sufficient funds, and a transaction history.
3. Use Encapsulation in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Encapsulation**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **VALIDATED WALLET API**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/validated-wallet-api
git commit -m "feat(validated-wallet-api): complete validated wallet api"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 4](../roadmaps/OOP.md#phase-4) | [CONTINUE TO OOP PHASE 5](../roadmaps/OOP.md#phase-5)

<a id="oop-phase-5-project"></a>
### OOP PHASE 5 MINI-PROJECT

#### PROJECT: PLUGGABLE SHAPE CALCULATOR

#### SPECIFICATION

Build **Pluggable Shape Calculator** as a focused exercise for **Abstraction**. Keep the data and interface small enough to finish, but implement the following behavior:

- Calculate area and perimeter through a Shape abstraction with circle, rectangle, and triangle implementations.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Abstraction explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `pluggable-shape-calculator` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Calculate area and perimeter through a Shape abstraction with circle, rectangle, and triangle implementations.
3. Represent the important states or data structures from Abstraction explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Abstraction**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **PLUGGABLE SHAPE CALCULATOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/pluggable-shape-calculator
git commit -m "feat(pluggable-shape-calculator): complete pluggable shape calculator"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 5](../roadmaps/OOP.md#phase-5) | [CONTINUE TO OOP PHASE 6](../roadmaps/OOP.md#phase-6)

<a id="oop-phase-6-project"></a>
### OOP PHASE 6 MINI-PROJECT

#### PROJECT: EMPLOYEE PAYROLL HIERARCHY

#### SPECIFICATION

Build **Employee Payroll Hierarchy** as a focused exercise for **Inheritance**. Keep the data and interface small enough to finish, but implement the following behavior:

- Calculate payroll for salaried, hourly, and commission employees while keeping shared identity behavior in a small base class.
- Give the user one clear main action and keep all other features secondary.
- Use Inheritance in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `employee-payroll-hierarchy` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Calculate payroll for salaried, hourly, and commission employees while keeping shared identity behavior in a small base class.
3. Use Inheritance in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Inheritance**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **EMPLOYEE PAYROLL HIERARCHY**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/employee-payroll-hierarchy
git commit -m "feat(employee-payroll-hierarchy): complete employee payroll hierarchy"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 6](../roadmaps/OOP.md#phase-6) | [CONTINUE TO OOP PHASE 7](../roadmaps/OOP.md#phase-7)

<a id="oop-phase-7-project"></a>
### OOP PHASE 7 MINI-PROJECT

#### PROJECT: POLYMORPHIC EXPORTER

#### SPECIFICATION

Build **Polymorphic Exporter** as a focused exercise for **Polymorphism**. Keep the data and interface small enough to finish, but implement the following behavior:

- Export the same records to CSV, JSON, and plain text by calling one export interface with different implementations.
- Give the user one clear main action and keep all other features secondary.
- Use Polymorphism in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `polymorphic-exporter` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Export the same records to CSV, JSON, and plain text by calling one export interface with different implementations.
3. Use Polymorphism in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Polymorphism**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **POLYMORPHIC EXPORTER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/polymorphic-exporter
git commit -m "feat(polymorphic-exporter): complete polymorphic exporter"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 7](../roadmaps/OOP.md#phase-7) | [CONTINUE TO OOP PHASE 8](../roadmaps/OOP.md#phase-8)

<a id="oop-phase-8-project"></a>
### OOP PHASE 8 MINI-PROJECT

#### PROJECT: COMPOSED ORDER SERVICE

#### SPECIFICATION

Build **Composed Order Service** as a focused exercise for **Composition over Inheritance**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build an order service from cart, pricing, inventory, payment, and notification components that can be replaced independently.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Composition over Inheritance in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `composed-order-service` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Build an order service from cart, pricing, inventory, payment, and notification components that can be replaced independently.
3. Use Composition over Inheritance in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Composition over Inheritance**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **COMPOSED ORDER SERVICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/composed-order-service
git commit -m "feat(composed-order-service): complete composed order service"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 8](../roadmaps/OOP.md#phase-8) | [CONTINUE TO OOP PHASE 9](../roadmaps/OOP.md#phase-9)

<a id="oop-phase-9-project"></a>
### OOP PHASE 9 MINI-PROJECT

#### PROJECT: PYTHONIC COLLECTION WRAPPER

#### SPECIFICATION

Build **Pythonic Collection Wrapper** as a focused exercise for **Python Power Tools**. Keep the data and interface small enough to finish, but implement the following behavior:

- Wrap a collection with length, iteration, indexing, membership, string display, validated properties, and a useful classmethod constructor.
- Give the user one clear main action and keep all other features secondary.
- Use Python Power Tools in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `pythonic-collection-wrapper` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Wrap a collection with length, iteration, indexing, membership, string display, validated properties, and a useful classmethod constructor.
3. Use Python Power Tools in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Python Power Tools**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **PYTHONIC COLLECTION WRAPPER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/pythonic-collection-wrapper
git commit -m "feat(pythonic-collection-wrapper): complete pythonic collection wrapper"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 9](../roadmaps/OOP.md#phase-9) | [CONTINUE TO OOP PHASE 10](../roadmaps/OOP.md#phase-10)

<a id="oop-phase-10-project"></a>
### OOP PHASE 10 MINI-PROJECT

#### PROJECT: LIBRARY RELATIONSHIP MODEL

#### SPECIFICATION

Build **Library Relationship Model** as a focused exercise for **Relationships and Modeling**. Keep the data and interface small enough to finish, but implement the following behavior:

- Model library books, physical copies, members, authors, loans, and reservations with correct one-to-one and one-to-many relationships.
- Give the user one clear main action and keep all other features secondary.
- Use Relationships and Modeling in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `library-relationship-model` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Model library books, physical copies, members, authors, loans, and reservations with correct one-to-one and one-to-many relationships.
3. Use Relationships and Modeling in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Relationships and Modeling**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **LIBRARY RELATIONSHIP MODEL**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/library-relationship-model
git commit -m "feat(library-relationship-model): complete library relationship model"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 10](../roadmaps/OOP.md#phase-10) | [CONTINUE TO OOP PHASE 11](../roadmaps/OOP.md#phase-11)

<a id="oop-phase-11-project"></a>
### OOP PHASE 11 MINI-PROJECT

#### PROJECT: GOD-OBJECT RESCUE

#### SPECIFICATION

Build **God-Object Rescue** as a focused exercise for **Smells and Refactoring**. Keep the data and interface small enough to finish, but implement the following behavior:

- Split an oversized order manager into cohesive pricing, inventory, payment, persistence, and notification responsibilities.
- Give the user one clear main action and keep all other features secondary.
- Use Smells and Refactoring in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `god-object-rescue` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Split an oversized order manager into cohesive pricing, inventory, payment, persistence, and notification responsibilities.
3. Use Smells and Refactoring in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Smells and Refactoring**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **GOD-OBJECT RESCUE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/god-object-rescue
git commit -m "fix(god-object-rescue): complete god-object rescue"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 11](../roadmaps/OOP.md#phase-11) | [CONTINUE TO OOP PHASE 12](../roadmaps/OOP.md#phase-12)

<a id="oop-phase-12-project"></a>
### OOP PHASE 12 MINI-PROJECT

#### PROJECT: SOLID NOTIFICATION SERVICE

#### SPECIFICATION

Build **SOLID Notification Service** as a focused exercise for **SOLID**. Keep the data and interface small enough to finish, but implement the following behavior:

- Send notifications through injected email, SMS, or console channels while keeping message policy independent of delivery details.
- Define the accepted request or message shape and the returned success and error shapes.
- Use SOLID in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `solid-notification-service` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Send notifications through injected email, SMS, or console channels while keeping message policy independent of delivery details.
3. Use SOLID in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **SOLID**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **SOLID NOTIFICATION SERVICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/solid-notification-service
git commit -m "feat(solid-notification-service): complete solid notification service"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 12](../roadmaps/OOP.md#phase-12) | [CONTINUE TO OOP PHASE 13](../roadmaps/OOP.md#phase-13)

<a id="oop-phase-13-project"></a>
### OOP PHASE 13 MINI-PROJECT

#### PROJECT: CONFIGURABLE OBJECT FACTORY

#### SPECIFICATION

Build **Configurable Object Factory** as a focused exercise for **Creational Patterns**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create objects from configuration through a factory that validates type names and constructs the correct repository or notification channel.
- Give the user one clear main action and keep all other features secondary.
- Use Creational Patterns in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `configurable-object-factory` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Create objects from configuration through a factory that validates type names and constructs the correct repository or notification channel.
3. Use Creational Patterns in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Creational Patterns**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **CONFIGURABLE OBJECT FACTORY**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/configurable-object-factory
git commit -m "feat(configurable-object-factory): complete configurable object factory"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 13](../roadmaps/OOP.md#phase-13) | [CONTINUE TO OOP PHASE 14](../roadmaps/OOP.md#phase-14)

<a id="oop-phase-14-project"></a>
### OOP PHASE 14 MINI-PROJECT

#### PROJECT: LEGACY PAYMENT ADAPTER

#### SPECIFICATION

Build **Legacy Payment Adapter** as a focused exercise for **Structural Patterns**. Keep the data and interface small enough to finish, but implement the following behavior:

- Make a legacy payment function satisfy a modern PaymentGateway interface through an adapter without changing legacy code.
- Give the user one clear main action and keep all other features secondary.
- Use Structural Patterns in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `legacy-payment-adapter` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Make a legacy payment function satisfy a modern PaymentGateway interface through an adapter without changing legacy code.
3. Use Structural Patterns in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Structural Patterns**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **LEGACY PAYMENT ADAPTER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/legacy-payment-adapter
git commit -m "feat(legacy-payment-adapter): complete legacy payment adapter"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 14](../roadmaps/OOP.md#phase-14) | [CONTINUE TO OOP PHASE 15](../roadmaps/OOP.md#phase-15)

<a id="oop-phase-15-project"></a>
### OOP PHASE 15 MINI-PROJECT

#### PROJECT: EVENT-DRIVEN TASK BOARD

#### SPECIFICATION

Build **Event-Driven Task Board** as a focused exercise for **Behavioral Patterns**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a task board whose add, move, and complete commands notify subscribed views and keep an undoable command history.
- Give the user one clear main action and keep all other features secondary.
- Use Behavioral Patterns in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `event-driven-task-board` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Create a task board whose add, move, and complete commands notify subscribed views and keep an undoable command history.
3. Use Behavioral Patterns in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Behavioral Patterns**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **EVENT-DRIVEN TASK BOARD**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/event-driven-task-board
git commit -m "feat(event-driven-task-board): complete event-driven task board"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 15](../roadmaps/OOP.md#phase-15) | [CONTINUE TO OOP PHASE 16](../roadmaps/OOP.md#phase-16)

<a id="oop-phase-16-project"></a>
### OOP PHASE 16 MINI-PROJECT

#### PROJECT: TESTABLE DOMAIN MODEL

#### SPECIFICATION

Build **Testable Domain Model** as a focused exercise for **Testing OOP**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a small order domain whose rules are tested with fake clock, payment, inventory, and notification dependencies.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Testing OOP and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `testable-domain-model` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Build a small order domain whose rules are tested with fake clock, payment, inventory, and notification dependencies.
3. Use a metric connected to Testing OOP and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Testing OOP**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **TESTABLE DOMAIN MODEL**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/testable-domain-model
git commit -m "test(testable-domain-model): complete testable domain model"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 16](../roadmaps/OOP.md#phase-16) | [CONTINUE TO OOP PHASE 17](../roadmaps/OOP.md#phase-17)

<a id="oop-phase-17-project"></a>
### OOP PHASE 17 MINI-PROJECT

#### PROJECT: LAYERED INVENTORY APP

#### SPECIFICATION

Build **Layered Inventory App** as a focused exercise for **Layers and Clean Architecture**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create an inventory program with separate domain, application, persistence, and CLI layers and no database imports in domain code.
- Give the user one clear main action and keep all other features secondary.
- Use Layers and Clean Architecture in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `layered-inventory-app` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Create an inventory program with separate domain, application, persistence, and CLI layers and no database imports in domain code.
3. Use Layers and Clean Architecture in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Layers and Clean Architecture**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **LAYERED INVENTORY APP**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/layered-inventory-app
git commit -m "feat(layered-inventory-app): complete layered inventory app"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 17](../roadmaps/OOP.md#phase-17) | [CONTINUE TO OOP PHASE 18](../roadmaps/OOP.md#phase-18)

<a id="oop-phase-18-project"></a>
### OOP PHASE 18 MINI-PROJECT

#### PROJECT: PARKING LOT LLD

#### SPECIFICATION

Build **Parking Lot LLD** as a focused exercise for **Low-Level Design Method**. Keep the data and interface small enough to finish, but implement the following behavior:

- Design a parking lot with vehicle types, spots, tickets, entry/exit, pricing, and capacity rules before implementing its core workflow.
- Give the user one clear main action and keep all other features secondary.
- Use Low-Level Design Method in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `parking-lot-lld` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Design a parking lot with vehicle types, spots, tickets, entry/exit, pricing, and capacity rules before implementing its core workflow.
3. Use Low-Level Design Method in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Low-Level Design Method**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **PARKING LOT LLD**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/parking-lot-lld
git commit -m "feat(oop-parking-lot-lld): complete parking lot lld"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 18](../roadmaps/OOP.md#phase-18) | [CONTINUE TO OOP PHASE 19](../roadmaps/OOP.md#phase-19)

<a id="oop-phase-19-project"></a>
### OOP PHASE 19 MINI-PROJECT

#### PROJECT: DESIGN PORTFOLIO PACK

#### SPECIFICATION

Build **Design Portfolio Pack** as a focused exercise for **Portfolio**. Keep the data and interface small enough to finish, but implement the following behavior:

- Polish three earlier designs with diagrams, runnable examples, tests, consistent naming, and a short in-app explanation of trade-offs.
- Define one realistic scenario, its boundaries, and the intended reader for the Design Portfolio Pack.
- Collect or create the exact inputs needed to apply Portfolio; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `design-portfolio-pack` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Polish three earlier designs with diagrams, runnable examples, tests, consistent naming, and a short in-app explanation of trade-offs.
3. Collect or create the exact inputs needed to apply Portfolio; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Portfolio**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **DESIGN PORTFOLIO PACK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/design-portfolio-pack
git commit -m "feat(design-portfolio-pack): complete design portfolio pack"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 19](../roadmaps/OOP.md#phase-19) | [CONTINUE TO OOP PHASE 20](../roadmaps/OOP.md#phase-20)

<a id="oop-phase-20-project"></a>
### OOP PHASE 20 MINI-PROJECT

#### PROJECT: TIMED OOP DESIGN KATA

#### SPECIFICATION

Build **Timed OOP Design Kata** as a focused exercise for **Interviews**. Keep the data and interface small enough to finish, but implement the following behavior:

- Solve a timed object-design change, write tests, and answer follow-up questions about responsibilities, patterns, and alternatives.
- Give the user one clear main action and keep all other features secondary.
- Use Interviews in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; add pytest only when the phase introduces testing

#### BUILD IT STEP BY STEP

1. Create `timed-oop-design-kata` with `src`, `tests`, and a small `main.py` entry point; create a Python virtual environment.
2. Solve a timed object-design change, write tests, and answer follow-up questions about responsibilities, patterns, and alternatives.
3. Use Interviews in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Interviews**.
7. Run the project with `python -m src.main`, then run `pytest`; both must finish without errors.

### Git Checkpoint

You have completed **TIMED OOP DESIGN KATA**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- oop/timed-oop-design-kata
git commit -m "feat(timed-oop-design-kata): complete timed oop design kata"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW OOP PHASE 20](../roadmaps/OOP.md#phase-20) | [BUILD THE OOP MAIN PORTFOLIO PROJECT](#oop-main-portfolio-project)

<a id="oop-main-portfolio-project"></a>
## OOP MAIN PORTFOLIO PROJECT

#### PROJECT: COMMUNITY WORKSHOP INVENTORY AND BOOKING SYSTEM

#### DESCRIPTION

A local-first application that helps a community workshop lend tools, reserve work areas, track members, and record returns. It is large enough to demonstrate professional object-oriented design while remaining possible for one learner to finish.

#### WHO THIS IS FOR

- Workshop coordinator who registers tools and approves bookings
- Member who searches availability and reserves equipment
- Maintainer who records inspections and removes unsafe tools from circulation

#### WHAT USERS CAN DO

- Register members, tools, work areas, and maintenance records
- Search availability and create, cancel, check-out, and return bookings
- Block unsafe or already-booked equipment with clear domain errors
- Persist data locally and export a simple usage summary

#### FREE AND OPEN-SOURCE TECH STACK

- Python 3.12
- Textual for a terminal user interface
- SQLite with the Python standard library
- pytest, Ruff, and mypy
- PyInstaller for a downloadable desktop executable
- Git and a public GitHub repository; every application dependency is free and open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Object Thinking:** Turn the workshop story into objects, responsibilities, and messages instead of one long procedural script.
2. **Phase 2 - Classes and Objects:** Create Tool, Member, Booking, WorkArea, and MaintenanceRecord classes with clear constructors.
3. **Phase 3 - State and Behavior:** Add state-changing methods such as reserve, check_out, return_tool, and mark_unsafe; reject impossible transitions.
4. **Phase 4 - Encapsulation:** Keep fields private where changing them directly could break a rule, and expose safe methods or properties.
5. **Phase 5 - Abstraction:** Define repository, clock, and notification abstractions so business rules do not depend on SQLite or the screen.
6. **Phase 6 - Inheritance:** Use inheritance only for genuinely shared member or tool behavior; demonstrate and test the chosen hierarchy.
7. **Phase 7 - Polymorphism:** Use polymorphism for different pricing, borrowing-limit, or notification policies behind one interface.
8. **Phase 8 - Composition over Inheritance:** Compose BookingService from repositories, policies, and a clock instead of building a deep inheritance tree.
9. **Phase 9 - Python Power Tools:** Add useful dunder methods, dataclasses, enums, and properties so domain values are safe and readable.
10. **Phase 10 - Relationships and Modeling:** Draw the class relationships, then implement one-to-many member bookings and tool maintenance history.
11. **Phase 11 - Smells and Refactoring:** Identify one oversized class or duplicated rule and refactor it without changing behavior.
12. **Phase 12 - SOLID:** Review the design against all five SOLID principles and correct the two clearest violations.
13. **Phase 13 - Creational Patterns:** Use a factory to construct tools or policies from saved configuration without conditionals spread everywhere.
14. **Phase 14 - Structural Patterns:** Add an adapter between the domain repository interface and SQLite, plus a facade for the terminal UI.
15. **Phase 15 - Behavioral Patterns:** Use Observer for notifications or Strategy for booking rules; show why the pattern removes a real conditional.
16. **Phase 16 - Testing OOP:** Write unit tests for domain rules with fakes and integration tests for the SQLite adapter.
17. **Phase 17 - Layers and Clean Architecture:** Separate domain, application, infrastructure, and interface folders so business rules point inward.
18. **Phase 18 - Low-Level Design Method:** Create a short low-level design for a new wait-list feature, then implement it from the design.
19. **PHASE 19 - Portfolio (REQUIRED CAPSTONE-COMPLETION STEP):** Polish the terminal screens, seed realistic data, add screenshots, choose an open-source license, and remove secrets or machine-specific paths.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Practice a timed change such as adding a new tool category, then explain the design, tests, trade-offs, and complexity aloud.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `community-workshop-inventory-and-booking-system` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: workshop domain model and protected state transitions**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community-workshop-inventory-and-booking-system
git commit -m "feat(workshop): model tools members and booking state"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: booking policies, composition, and domain relationships**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community-workshop-inventory-and-booking-system
git commit -m "feat(workshop): implement booking policies and relationships"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: refactored services, patterns, SQLite adapter, and terminal facade**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community-workshop-inventory-and-booking-system
git commit -m "refactor(workshop): integrate services patterns and persistence"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: automated tests, clean architecture, and wait-list design**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community-workshop-inventory-and-booking-system
git commit -m "test(workshop): verify domain adapters and wait-list flow"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: polished screens, demo data, documentation, and release assets**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community-workshop-inventory-and-booking-system
git commit -m "docs(workshop): complete community workshop portfolio release"
git tag -a workshop-v1.0.0 -m "First complete workshop release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Run `pytest`, Ruff, and mypy locally; fix every error.
2. Build a standalone executable with PyInstaller for your operating system.
3. Create a version tag and attach the executable plus a small sample database to a GitHub Release.
4. Use a public repository and GitHub Actions standard runners to repeat tests and package builds at no cost.
5. Install the release on a second computer or clean user account and complete one booking from start to finish.

> **MAIN PROJECT NAVIGATION:** [REVIEW OOP PHASE 19](../roadmaps/OOP.md#phase-19) | [REVIEW OOP PHASE 20](../roadmaps/OOP.md#phase-20) | [RETURN TO THE OOP ROADMAP](../roadmaps/OOP.md#phase-index)

## Computer Science

Study this roadmap first: [CS.md](../roadmaps/CS.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="cs-phase-1-project"></a>
### CS PHASE 1 MINI-PROJECT

#### PROJECT: MINI EXPRESSION RUNTIME

#### SPECIFICATION

Build **Mini Expression Runtime** as a focused exercise for **Programming Foundations and Program Execution**. Keep the data and interface small enough to finish, but implement the following behavior:

- Tokenize and evaluate integer expressions containing parentheses and +, -, *, and / while printing tokens, parse result, and execution trace.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Programming Foundations and Program Execution explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `mini-expression-runtime` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Tokenize and evaluate integer expressions containing parentheses and +, -, *, and / while printing tokens, parse result, and execution trace.
3. Represent the important states or data structures from Programming Foundations and Program Execution explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Programming Foundations and Program Execution**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **MINI EXPRESSION RUNTIME**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/mini-expression-runtime
git commit -m "feat(mini-expression-runtime): complete mini expression runtime"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 1](../roadmaps/CS.md#phase-1) | [CONTINUE TO CS PHASE 2](../roadmaps/CS.md#phase-2)

<a id="cs-phase-2-project"></a>
### CS PHASE 2 MINI-PROJECT

#### PROJECT: ALGORITHM GROWTH PROFILER

#### SPECIFICATION

Build **Algorithm Growth Profiler** as a focused exercise for **Complexity Analysis**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run constant, linear, logarithmic, and quadratic functions at increasing input sizes and chart operation counts rather than relying only on wall-clock time.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Complexity Analysis and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `algorithm-growth-profiler` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Run constant, linear, logarithmic, and quadratic functions at increasing input sizes and chart operation counts rather than relying only on wall-clock time.
3. Use a metric connected to Complexity Analysis and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Complexity Analysis**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **ALGORITHM GROWTH PROFILER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/algorithm-growth-profiler
git commit -m "feat(algorithm-growth-profiler): complete algorithm growth profiler"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 2](../roadmaps/CS.md#phase-2) | [CONTINUE TO CS PHASE 3](../roadmaps/CS.md#phase-3)

<a id="cs-phase-3-project"></a>
### CS PHASE 3 MINI-PROJECT

#### PROJECT: DATA STRUCTURES TOOLKIT

#### SPECIFICATION

Build **Data Structures Toolkit** as a focused exercise for **Linear Data Structures**. Keep the data and interface small enough to finish, but implement the following behavior:

- Implement a dynamic array, singly linked list, stack, queue, and deque with the same small set of runnable demonstrations and tests.
- Give the user one clear main action and keep all other features secondary.
- Use Linear Data Structures in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `data-structures-toolkit` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Implement a dynamic array, singly linked list, stack, queue, and deque with the same small set of runnable demonstrations and tests.
3. Use Linear Data Structures in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Linear Data Structures**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **DATA STRUCTURES TOOLKIT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/data-structures-toolkit
git commit -m "feat(data-structures-toolkit): complete data structures toolkit"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 3](../roadmaps/CS.md#phase-3) | [CONTINUE TO CS PHASE 4](../roadmaps/CS.md#phase-4)

<a id="cs-phase-4-project"></a>
### CS PHASE 4 MINI-PROJECT

#### PROJECT: RECURSIVE FILESYSTEM WALKER

#### SPECIFICATION

Build **Recursive Filesystem Walker** as a focused exercise for **Recursion**. Keep the data and interface small enough to finish, but implement the following behavior:

- Walk a temporary directory recursively, print an indented tree, total file sizes, skip symbolic-link cycles, and handle unreadable paths.
- Give the user one clear main action and keep all other features secondary.
- Use Recursion in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `recursive-filesystem-walker` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Walk a temporary directory recursively, print an indented tree, total file sizes, skip symbolic-link cycles, and handle unreadable paths.
3. Use Recursion in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Recursion**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **RECURSIVE FILESYSTEM WALKER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/recursive-filesystem-walker
git commit -m "feat(recursive-filesystem-walker): complete recursive filesystem walker"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 4](../roadmaps/CS.md#phase-4) | [CONTINUE TO CS PHASE 5](../roadmaps/CS.md#phase-5)

<a id="cs-phase-5-project"></a>
### CS PHASE 5 MINI-PROJECT

#### PROJECT: PRIORITY TASK SCHEDULER

#### SPECIFICATION

Build **Priority Task Scheduler** as a focused exercise for **Hierarchical and Priority Structures**. Keep the data and interface small enough to finish, but implement the following behavior:

- Implement a binary search tree and min-heap, then use the heap to schedule tasks by priority and stable arrival order.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Hierarchical and Priority Structures explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `priority-task-scheduler` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Implement a binary search tree and min-heap, then use the heap to schedule tasks by priority and stable arrival order.
3. Represent the important states or data structures from Hierarchical and Priority Structures explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Hierarchical and Priority Structures**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **PRIORITY TASK SCHEDULER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/priority-task-scheduler
git commit -m "feat(priority-task-scheduler): complete priority task scheduler"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 5](../roadmaps/CS.md#phase-5) | [CONTINUE TO CS PHASE 6](../roadmaps/CS.md#phase-6)

<a id="cs-phase-6-project"></a>
### CS PHASE 6 MINI-PROJECT

#### PROJECT: HASH TABLE AND LRU CACHE

#### SPECIFICATION

Build **Hash Table and LRU Cache** as a focused exercise for **Hashing**. Keep the data and interface small enough to finish, but implement the following behavior:

- Implement a hash table with collision handling, then build a fixed-capacity LRU cache with $O(1)$-style get and put operations.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Hashing explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `hash-table-and-lru-cache` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Implement a hash table with collision handling, then build a fixed-capacity LRU cache with $O(1)$-style get and put operations.
3. Represent the important states or data structures from Hashing explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Hashing**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **HASH TABLE AND LRU CACHE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/hash-table-and-lru-cache
git commit -m "feat(hash-table-and-lru-cache): complete hash table and lru cache"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 6](../roadmaps/CS.md#phase-6) | [CONTINUE TO CS PHASE 7](../roadmaps/CS.md#phase-7)

<a id="cs-phase-7-project"></a>
### CS PHASE 7 MINI-PROJECT

#### PROJECT: SORTING BENCHMARK EXPLORER

#### SPECIFICATION

Build **Sorting Benchmark Explorer** as a focused exercise for **Sorting and Binary Search**. Keep the data and interface small enough to finish, but implement the following behavior:

- Implement insertion, merge, and quick sort plus binary search, count comparisons, and compare behavior on random, sorted, and reversed inputs.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by Sorting and Binary Search, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `sorting-benchmark-explorer` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Implement insertion, merge, and quick sort plus binary search, count comparisons, and compare behavior on random, sorted, and reversed inputs.
3. Show the part of the data or system explained by Sorting and Binary Search, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for **Sorting and Binary Search**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **SORTING BENCHMARK EXPLORER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/sorting-benchmark-explorer
git commit -m "feat(sorting-benchmark-explorer): complete sorting benchmark explorer"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 7](../roadmaps/CS.md#phase-7) | [CONTINUE TO CS PHASE 8](../roadmaps/CS.md#phase-8)

<a id="cs-phase-8-project"></a>
### CS PHASE 8 MINI-PROJECT

#### PROJECT: GRAPH ROUTE PLANNER

#### SPECIFICATION

Build **Graph Route Planner** as a focused exercise for **Graphs**. Keep the data and interface small enough to finish, but implement the following behavior:

- Load a small weighted map, find routes with BFS and Dijkstra, detect unreachable locations, and reconstruct the selected path.
- Define one realistic scenario, its boundaries, and the intended reader for the Graph Route Planner.
- Collect or create the exact inputs needed to apply Graphs; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `graph-route-planner` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Load a small weighted map, find routes with BFS and Dijkstra, detect unreachable locations, and reconstruct the selected path.
3. Collect or create the exact inputs needed to apply Graphs; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Graphs**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **GRAPH ROUTE PLANNER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/graph-route-planner
git commit -m "docs(graph-route-planner): complete graph route planner"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 8](../roadmaps/CS.md#phase-8) | [CONTINUE TO CS PHASE 9](../roadmaps/CS.md#phase-9)

<a id="cs-phase-9-project"></a>
### CS PHASE 9 MINI-PROJECT

#### PROJECT: ALGORITHM PATTERN WORKBOOK

#### SPECIFICATION

Build **Algorithm Pattern Workbook** as a focused exercise for **Algorithmic Patterns**. Keep the data and interface small enough to finish, but implement the following behavior:

- Solve and categorize a focused set using two pointers, sliding window, prefix sums, greedy choice, backtracking, dynamic programming, and a trie.
- Define one realistic scenario, its boundaries, and the intended reader for the Algorithm Pattern Workbook.
- Collect or create the exact inputs needed to apply Algorithmic Patterns; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `algorithm-pattern-workbook` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Solve and categorize a focused set using two pointers, sliding window, prefix sums, greedy choice, backtracking, dynamic programming, and a trie.
3. Collect or create the exact inputs needed to apply Algorithmic Patterns; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Algorithmic Patterns**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **ALGORITHM PATTERN WORKBOOK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/algorithm-pattern-workbook
git commit -m "feat(algorithm-pattern-workbook): complete algorithm pattern workbook"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 9](../roadmaps/CS.md#phase-9) | [CONTINUE TO CS PHASE 10](../roadmaps/CS.md#phase-10)

<a id="cs-phase-10-project"></a>
### CS PHASE 10 MINI-PROJECT

#### PROJECT: PARKING LOT LLD

#### SPECIFICATION

Build **Parking Lot LLD** as a focused exercise for **OOP and Low-Level Design**. Keep the data and interface small enough to finish, but implement the following behavior:

- Design and implement parking entry, exit, spot assignment, ticket, pricing, and capacity rules with clear object responsibilities.
- Give the user one clear main action and keep all other features secondary.
- Use OOP and Low-Level Design in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `parking-lot-lld` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Design and implement parking entry, exit, spot assignment, ticket, pricing, and capacity rules with clear object responsibilities.
3. Use OOP and Low-Level Design in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **OOP and Low-Level Design**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **PARKING LOT LLD**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/parking-lot-lld
git commit -m "feat(cs-parking-lot-lld): complete parking lot lld"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 10](../roadmaps/CS.md#phase-10) | [CONTINUE TO CS PHASE 11](../roadmaps/CS.md#phase-11)

<a id="cs-phase-11-project"></a>
### CS PHASE 11 MINI-PROJECT

#### PROJECT: SHELL AND SCHEDULER SIMULATOR

#### SPECIFICATION

Build **Shell and Scheduler Simulator** as a focused exercise for **Operating Systems**. Keep the data and interface small enough to finish, but implement the following behavior:

- Simulate processes moving through ready, running, blocked, and finished states under first-come and round-robin scheduling.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Operating Systems explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `shell-and-scheduler-simulator` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Simulate processes moving through ready, running, blocked, and finished states under first-come and round-robin scheduling.
3. Represent the important states or data structures from Operating Systems explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Operating Systems**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **SHELL AND SCHEDULER SIMULATOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/shell-and-scheduler-simulator
git commit -m "feat(shell-and-scheduler-simulator): complete shell and scheduler simulator"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 11](../roadmaps/CS.md#phase-11) | [CONTINUE TO CS PHASE 12](../roadmaps/CS.md#phase-12)

<a id="cs-phase-12-project"></a>
### CS PHASE 12 MINI-PROJECT

#### PROJECT: TCP CHAT SERVICE

#### SPECIFICATION

Build **TCP Chat Service** as a focused exercise for **Computer Networks**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a multi-client TCP chat with message framing, nicknames, join/leave notices, timeouts, and clean disconnect handling.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Computer Networks in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `tcp-chat-service` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Build a multi-client TCP chat with message framing, nicknames, join/leave notices, timeouts, and clean disconnect handling.
3. Use Computer Networks in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Computer Networks**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **TCP CHAT SERVICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/tcp-chat-service
git commit -m "feat(tcp-chat-service): complete tcp chat service"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 12](../roadmaps/CS.md#phase-12) | [CONTINUE TO CS PHASE 13](../roadmaps/CS.md#phase-13)

<a id="cs-phase-13-project"></a>
### CS PHASE 13 MINI-PROJECT

#### PROJECT: RAW HTTP API SERVER

#### SPECIFICATION

Build **Raw HTTP API Server** as a focused exercise for **Web, HTTP, and APIs**. Keep the data and interface small enough to finish, but implement the following behavior:

- Serve GET and POST routes directly over TCP, parse minimal HTTP safely, and return correct status, headers, body length, and errors.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Web, HTTP, and APIs in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `raw-http-api-server` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Serve GET and POST routes directly over TCP, parse minimal HTTP safely, and return correct status, headers, body length, and errors.
3. Use Web, HTTP, and APIs in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Web, HTTP, and APIs**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **RAW HTTP API SERVER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/raw-http-api-server
git commit -m "feat(raw-http-api-server): complete raw http api server"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 13](../roadmaps/CS.md#phase-13) | [CONTINUE TO CS PHASE 14](../roadmaps/CS.md#phase-14)

<a id="cs-phase-14-project"></a>
### CS PHASE 14 MINI-PROJECT

#### PROJECT: TRANSACTIONAL LIBRARY DATABASE

#### SPECIFICATION

Build **Transactional Library Database** as a focused exercise for **Databases and Data Modeling**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create books, members, and loans in SQLite/PostgreSQL with constraints and a transaction that checks out a book or changes nothing.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use Databases and Data Modeling to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `transactional-library-database` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Create books, members, and loans in SQLite/PostgreSQL with constraints and a transaction that checks out a book or changes nothing.
3. Use Databases and Data Modeling to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for **Databases and Data Modeling**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **TRANSACTIONAL LIBRARY DATABASE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/transactional-library-database
git commit -m "feat(transactional-library-database): complete transactional library database"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 14](../roadmaps/CS.md#phase-14) | [CONTINUE TO CS PHASE 15](../roadmaps/CS.md#phase-15)

<a id="cs-phase-15-project"></a>
### CS PHASE 15 MINI-PROJECT

#### PROJECT: SECURE AUTH SERVICE

#### SPECIFICATION

Build **Secure Auth Service** as a focused exercise for **Authentication and Security**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create sign-up, sign-in, sign-out, protected profile, password hashing, session expiry, rate limiting, and object authorization.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Authentication and Security in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `secure-auth-service` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Create sign-up, sign-in, sign-out, protected profile, password hashing, session expiry, rate limiting, and object authorization.
3. Use Authentication and Security in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Authentication and Security**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **SECURE AUTH SERVICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/secure-auth-service
git commit -m "feat(secure-auth-service): complete secure auth service"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 15](../roadmaps/CS.md#phase-15) | [CONTINUE TO CS PHASE 16](../roadmaps/CS.md#phase-16)

<a id="cs-phase-16-project"></a>
### CS PHASE 16 MINI-PROJECT

#### PROJECT: TESTED CI-READY SERVICE

#### SPECIFICATION

Build **Tested CI-Ready Service** as a focused exercise for **Software Engineering and Testing**. Keep the data and interface small enough to finish, but implement the following behavior:

- Turn a small service into a package with unit/integration tests, lint/type checks, deterministic configuration, and a CI workflow.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Software Engineering and Testing in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `tested-ci-ready-service` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Turn a small service into a package with unit/integration tests, lint/type checks, deterministic configuration, and a CI workflow.
3. Use Software Engineering and Testing in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Software Engineering and Testing**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **TESTED CI-READY SERVICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/tested-ci-ready-service
git commit -m "test(tested-ci-ready-service): complete tested ci-ready service"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 16](../roadmaps/CS.md#phase-16) | [CONTINUE TO CS PHASE 17](../roadmaps/CS.md#phase-17)

<a id="cs-phase-17-project"></a>
### CS PHASE 17 MINI-PROJECT

#### PROJECT: SCALABLE URL SHORTENER DESIGN

#### SPECIFICATION

Build **Scalable URL Shortener Design** as a focused exercise for **System Design and Scalability**. Keep the data and interface small enough to finish, but implement the following behavior:

- Design a URL shortener with API, schema, cache, collision handling, redirects, abuse limits, metrics, and capacity estimates.
- Give the user one clear main action and keep all other features secondary.
- Use System Design and Scalability in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `scalable-url-shortener-design` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Design a URL shortener with API, schema, cache, collision handling, redirects, abuse limits, metrics, and capacity estimates.
3. Use System Design and Scalability in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **System Design and Scalability**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **SCALABLE URL SHORTENER DESIGN**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/scalable-url-shortener-design
git commit -m "feat(scalable-url-shortener-design): complete scalable url shortener design"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 17](../roadmaps/CS.md#phase-17) | [CONTINUE TO CS PHASE 18](../roadmaps/CS.md#phase-18)

<a id="cs-phase-18-project"></a>
### CS PHASE 18 MINI-PROJECT

#### PROJECT: REPLICATED LEDGER SIMULATOR

#### SPECIFICATION

Build **Replicated Ledger Simulator** as a focused exercise for **Distributed Systems**. Keep the data and interface small enough to finish, but implement the following behavior:

- Simulate a replicated ledger with leader/follower state, duplicate messages, retry, delayed replication, failure, and recovery.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Distributed Systems explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `replicated-ledger-simulator` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Simulate a replicated ledger with leader/follower state, duplicate messages, retry, delayed replication, failure, and recovery.
3. Represent the important states or data structures from Distributed Systems explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Distributed Systems**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **REPLICATED LEDGER SIMULATOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/replicated-ledger-simulator
git commit -m "feat(replicated-ledger-simulator): complete replicated ledger simulator"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 18](../roadmaps/CS.md#phase-18) | [CONTINUE TO CS PHASE 19](../roadmaps/CS.md#phase-19)

<a id="cs-phase-19-project"></a>
### CS PHASE 19 MINI-PROJECT

#### PROJECT: INTEGRATED SYSTEMS CAPSTONE

#### SPECIFICATION

Build **Integrated Systems Capstone** as a focused exercise for **Projects**. Keep the data and interface small enough to finish, but implement the following behavior:

- Combine a tested API, relational database, authentication, cache, worker, metrics, and recovery check into one small system.
- Give the user one clear main action and keep all other features secondary.
- Use Projects in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `integrated-systems-capstone` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Combine a tested API, relational database, authentication, cache, worker, metrics, and recovery check into one small system.
3. Use Projects in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Projects**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **INTEGRATED SYSTEMS CAPSTONE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/integrated-systems-capstone
git commit -m "feat(integrated-systems-capstone): complete integrated systems capstone"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 19](../roadmaps/CS.md#phase-19) | [CONTINUE TO CS PHASE 20](../roadmaps/CS.md#phase-20)

<a id="cs-phase-20-project"></a>
### CS PHASE 20 MINI-PROJECT

#### PROJECT: TIMED INTERVIEW HARNESS

#### SPECIFICATION

Build **Timed Interview Harness** as a focused exercise for **Interview Mastery**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a timer-driven harness that serves coding, debugging, and system-design prompts and runs prepared correctness checks afterward.
- Give the user one clear main action and keep all other features secondary.
- Use Interview Mastery in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- VSCodium or any text editor
- Python standard library; use SQLite only for database projects

#### BUILD IT STEP BY STEP

1. Create `timed-interview-harness` with `src`, `tests`, and `examples` folders; use a Python virtual environment.
2. Create a timer-driven harness that serves coding, debugging, and system-design prompts and runs prepared correctness checks afterward.
3. Use Interview Mastery in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Interview Mastery**.
7. Run the examples from the command line and run `pytest`; compare the observed output with the known answers.

### Git Checkpoint

You have completed **TIMED INTERVIEW HARNESS**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cs/timed-interview-harness
git commit -m "feat(timed-interview-harness): complete timed interview harness"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CS PHASE 20](../roadmaps/CS.md#phase-20) | [BUILD THE CS MAIN PORTFOLIO PROJECT](#cs-main-portfolio-project)

<a id="cs-main-portfolio-project"></a>
## CS MAIN PORTFOLIO PROJECT

#### PROJECT: OPEN COMMUNITY RESOURCE EXCHANGE

#### DESCRIPTION

A full-stack service where neighbors list useful items, request a loan, approve or reject it, and track returns. The project combines algorithms, operating systems, networking, databases, security, testing, scalability, and distributed-system thinking in one portfolio story.

#### WHO THIS IS FOR

- Neighbor who lists an item or requests to borrow one
- Community moderator who handles reports and unavailable items
- Project operator who monitors health, backups, and usage

#### WHAT USERS CAN DO

- Search and list resources by category, distance label, and availability
- Create a borrow request and move it through approval, checkout, return, or rejection
- Authenticate users and enforce owner, borrower, and moderator permissions
- Expose health metrics, audit events, and a recoverable database backup

#### FREE AND OPEN-SOURCE TECH STACK

- Python 3.12 and FastAPI
- React with TypeScript and Vite
- PostgreSQL and Redis-compatible Valkey
- SQLAlchemy and Alembic
- pytest, Vitest, Playwright, Ruff, and mypy
- Docker Engine or Podman and Docker Compose
- Prometheus and Grafana
- Free public demo: Cloudflare Pages, Render free web service, and Supabase Free Postgres; all application code and libraries are open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Programming Foundations and Program Execution:** Build a small command-line version first and trace how source code becomes a running process.
2. **Phase 2 - Complexity Analysis:** Measure time and memory for search and request-list operations at several dataset sizes; record Big O expectations.
3. **Phase 3 - Linear Data Structures:** Use arrays/lists, queues, and stacks for result pages, pending requests, and undoable moderation actions.
4. **Phase 4 - Recursion:** Add a recursive category tree operation and protect it from cycles and excessive depth.
5. **Phase 5 - Hierarchical and Priority Structures:** Use a heap for expiry reminders and a tree structure for category navigation.
6. **Phase 6 - Hashing:** Add hash-based indexes and an LRU cache for popular searches; define eviction and invalidation rules.
7. **Phase 7 - Sorting and Binary Search:** Sort by distance, date, and popularity and use binary search where a sorted in-memory structure is justified.
8. **Phase 8 - Graphs:** Model users and resources as a graph and add breadth-first recommendations within a chosen hop limit.
9. **Phase 9 - Algorithmic Patterns:** Use two-pointer, sliding-window, or greedy patterns for one suitable feed or scheduling feature and explain the choice.
10. **Phase 10 - OOP and Low-Level Design:** Refactor the domain into cohesive classes and produce a low-level design for the borrow workflow.
11. **Phase 11 - Operating Systems:** Run API and worker processes separately, handle signals, limit concurrency, and shut down without losing accepted work.
12. **Phase 12 - Computer Networks:** Define the browser-to-API network path, timeouts, connection reuse, and one simulated network failure.
13. **Phase 13 - Web, HTTP, and APIs:** Publish versioned HTTP endpoints with validation, pagination, idempotency, and consistent error responses.
14. **Phase 14 - Databases and Data Modeling:** Create a normalized PostgreSQL schema, migrations, indexes, and a transaction for approving a request.
15. **Phase 15 - Authentication and Security:** Add password hashing or external OAuth, secure sessions, authorization on every object, rate limiting, and audit logging.
16. **Phase 16 - Software Engineering and Testing:** Create unit, integration, contract, and browser tests plus a free GitHub Actions CI workflow.
17. **Phase 17 - System Design and Scalability:** Add caching, background work, health endpoints, metrics, and a load test; document the next scaling bottleneck.
18. **Phase 18 - Distributed Systems:** Make notifications idempotent, use an outbox table, simulate retry and duplication, and explain consistency choices.
19. **PHASE 19 - Projects (REQUIRED CAPSTONE-COMPLETION STEP):** Polish one end-to-end workflow, seed demo accounts, choose an open-source license, and make the public demo safe.
20. **PHASE 20 - Interview Mastery (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Rehearse a timed coding change and a system-design explanation using this project as the concrete example.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `open-community-resource-exchange` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: executable prototype, complexity evidence, core structures, and category recursion**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-resource-exchange
git commit -m "feat(resource-exchange): build executable domain prototype"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: indexed search, scheduling, graph recommendations, and cohesive domain design**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-resource-exchange
git commit -m "feat(resource-exchange): implement search scheduling and recommendations"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: process model, HTTP API, database transactions, and authorization**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-resource-exchange
git commit -m "feat(resource-exchange): integrate secure API and persistence"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: test suite, observability, scaling evidence, and idempotent delivery**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-resource-exchange
git commit -m "test(resource-exchange): verify scalable distributed workflows"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: safe demo workflow, documentation, license, and public portfolio assets**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-resource-exchange
git commit -m "docs(resource-exchange): complete community exchange release"
git tag -a resource-exchange-v1.0.0 -m "First complete resource-exchange release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Start PostgreSQL, Valkey, the API, and the frontend locally with Docker Compose and run all tests.
2. Create a free Supabase project for the public-demo PostgreSQL database and apply migrations with only demo data.
3. Deploy the FastAPI container as a Render free web service, set secrets in its dashboard, bind to `0.0.0.0:$PORT`, and add `/health`.
4. Build the Vite frontend and deploy the static `dist` folder to Cloudflare Pages on the free plan.
5. Set the frontend API URL, allow only the deployed frontend origin, and test sign-in, request, approval, and return.
6. State clearly that free services can sleep or enforce quotas; keep Docker Compose as the permanent no-cost local deployment.

> **MAIN PROJECT NAVIGATION:** [REVIEW CS PHASE 19](../roadmaps/CS.md#phase-19) | [REVIEW CS PHASE 20](../roadmaps/CS.md#phase-20) | [RETURN TO THE CS ROADMAP](../roadmaps/CS.md#phase-index)

## Data Analysis and Engineering

Study this roadmap first: [Data.md](../roadmaps/Data.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="data-phase-1-project"></a>
### DATA PHASE 1 MINI-PROJECT

#### PROJECT: DECISION METRIC BRIEF

#### SPECIFICATION

Build **Decision Metric Brief** as a focused exercise for **Data Thinking**. Keep the data and interface small enough to finish, but implement the following behavior:

- Turn a fictional business question into a one-page metric definition containing grain, formula, segments, owner, decision, guardrail, and known limitation.
- Define one realistic scenario, its boundaries, and the intended reader for the Decision Metric Brief.
- Collect or create the exact inputs needed to apply Data Thinking; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- LibreOffice Calc
- A small CSV file
- No coding required

#### BUILD IT STEP BY STEP

1. Create `decision-metric-brief` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Turn a fictional business question into a one-page metric definition containing grain, formula, segments, owner, decision, guardrail, and known limitation.
3. Collect or create the exact inputs needed to apply Data Thinking; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Data Thinking**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **DECISION METRIC BRIEF**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/decision-metric-brief
git commit -m "docs(decision-metric-brief): complete decision metric brief"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 1](../roadmaps/Data.md#phase-1) | [CONTINUE TO DATA PHASE 2](../roadmaps/Data.md#phase-2)

<a id="data-phase-2-project"></a>
### DATA PHASE 2 MINI-PROJECT

#### PROJECT: SPREADSHEET KPI DASHBOARD

#### SPECIFICATION

Build **Spreadsheet KPI Dashboard** as a focused exercise for **Spreadsheets and Data Literacy**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a LibreOffice Calc dashboard from a small sales CSV using typed columns, formulas, lookups, a pivot table, filters, and three labeled KPIs.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by Spreadsheets and Data Literacy, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- LibreOffice Calc
- Pivot tables and charts
- No coding required

#### BUILD IT STEP BY STEP

1. Create `spreadsheet-kpi-dashboard` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Build a LibreOffice Calc dashboard from a small sales CSV using typed columns, formulas, lookups, a pivot table, filters, and three labeled KPIs.
3. Show the part of the data or system explained by Spreadsheets and Data Literacy, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for **Spreadsheets and Data Literacy**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **SPREADSHEET KPI DASHBOARD**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/spreadsheet-kpi-dashboard
git commit -m "feat(spreadsheet-kpi-dashboard): complete spreadsheet kpi dashboard"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 2](../roadmaps/Data.md#phase-2) | [CONTINUE TO DATA PHASE 3](../roadmaps/Data.md#phase-3)

<a id="data-phase-3-project"></a>
### DATA PHASE 3 MINI-PROJECT

#### PROJECT: REPRODUCIBLE DATA CLI

#### SPECIFICATION

Build **Reproducible Data CLI** as a focused exercise for **Python for Data**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a Python CLI that reads CSV, validates required columns and types, prints data-quality counts, and writes a deterministic cleaned file.
- Give the user one clear main action and keep all other features secondary.
- Use Python for Data in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects

#### BUILD IT STEP BY STEP

1. Create `reproducible-data-cli` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Create a Python CLI that reads CSV, validates required columns and types, prints data-quality counts, and writes a deterministic cleaned file.
3. Use Python for Data in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Python for Data**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **REPRODUCIBLE DATA CLI**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/reproducible-data-cli
git commit -m "feat(reproducible-data-cli): complete reproducible data cli"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 3](../roadmaps/Data.md#phase-3) | [CONTINUE TO DATA PHASE 4](../roadmaps/Data.md#phase-4)

<a id="data-phase-4-project"></a>
### DATA PHASE 4 MINI-PROJECT

#### PROJECT: SQL BOOKSTORE DATABASE

#### SPECIFICATION

Build **SQL Bookstore Database** as a focused exercise for **SQL Foundations**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create authors, books, customers, orders, and order_items in PostgreSQL and answer ten progressively harder SQL questions.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use SQL Foundations to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- PostgreSQL 16
- DBeaver or pgAdmin
- SQL only

#### BUILD IT STEP BY STEP

1. Create `sql-bookstore-database` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Create authors, books, customers, orders, and order_items in PostgreSQL and answer ten progressively harder SQL questions.
3. Use SQL Foundations to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for **SQL Foundations**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **SQL BOOKSTORE DATABASE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/sql-bookstore-database
git commit -m "feat(sql-bookstore-database): complete sql bookstore database"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 4](../roadmaps/Data.md#phase-4) | [CONTINUE TO DATA PHASE 5](../roadmaps/Data.md#phase-5)

<a id="data-phase-5-project"></a>
### DATA PHASE 5 MINI-PROJECT

#### PROJECT: SALES COHORT ANALYSIS

#### SPECIFICATION

Build **Sales Cohort Analysis** as a focused exercise for **SQL Joins and Aggregations**. Keep the data and interface small enough to finish, but implement the following behavior:

- Join customer, order, and payment tables to calculate monthly cohorts, retention, revenue, and repeat-purchase rate.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to SQL Joins and Aggregations and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- pandas, Matplotlib, and seaborn

#### BUILD IT STEP BY STEP

1. Create `sales-cohort-analysis` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Join customer, order, and payment tables to calculate monthly cohorts, retention, revenue, and repeat-purchase rate.
3. Use a metric connected to SQL Joins and Aggregations and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **SQL Joins and Aggregations**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **SALES COHORT ANALYSIS**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/sales-cohort-analysis
git commit -m "feat(sales-cohort-analysis): complete sales cohort analysis"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 5](../roadmaps/Data.md#phase-5) | [CONTINUE TO DATA PHASE 6](../roadmaps/Data.md#phase-6)

<a id="data-phase-6-project"></a>
### DATA PHASE 6 MINI-PROJECT

#### PROJECT: WINDOW FUNCTION ANALYTICS PACK

#### SPECIFICATION

Build **Window Function Analytics Pack** as a focused exercise for **Advanced SQL**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a SQL pack using CTEs and window functions for rank, running total, moving average, lag, percent-of-total, and sessionization.
- Give the user one clear main action and keep all other features secondary.
- Use Advanced SQL in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- PostgreSQL 16
- DBeaver or pgAdmin
- SQL window functions

#### BUILD IT STEP BY STEP

1. Create `window-function-analytics-pack` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Build a SQL pack using CTEs and window functions for rank, running total, moving average, lag, percent-of-total, and sessionization.
3. Use Advanced SQL in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Advanced SQL**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **WINDOW FUNCTION ANALYTICS PACK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/window-function-analytics-pack
git commit -m "feat(window-function-analytics-pack): complete window function analytics pack"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 6](../roadmaps/Data.md#phase-6) | [CONTINUE TO DATA PHASE 7](../roadmaps/Data.md#phase-7)

<a id="data-phase-7-project"></a>
### DATA PHASE 7 MINI-PROJECT

#### PROJECT: A/B TEST ANALYZER

#### SPECIFICATION

Build **A/B Test Analyzer** as a focused exercise for **Statistics for Analysts**. Keep the data and interface small enough to finish, but implement the following behavior:

- Calculate sample size, confidence interval, lift, and significance for a two-group experiment and warn when assumptions are violated.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Statistics for Analysts and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- pandas, SciPy, and Matplotlib

#### BUILD IT STEP BY STEP

1. Create `a-b-test-analyzer` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Calculate sample size, confidence interval, lift, and significance for a two-group experiment and warn when assumptions are violated.
3. Use a metric connected to Statistics for Analysts and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Statistics for Analysts**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **A/B TEST ANALYZER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/a-b-test-analyzer
git commit -m "test(a-b-test-analyzer): complete a/b test analyzer"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 7](../roadmaps/Data.md#phase-7) | [CONTINUE TO DATA PHASE 8](../roadmaps/Data.md#phase-8)

<a id="data-phase-8-project"></a>
### DATA PHASE 8 MINI-PROJECT

#### PROJECT: DIRTY DATASET CLEANER

#### SPECIFICATION

Build **Dirty Dataset Cleaner** as a focused exercise for **Pandas and Wrangling**. Keep the data and interface small enough to finish, but implement the following behavior:

- Clean a deliberately dirty dataset with explicit rules for nulls, duplicates, types, categories, dates, outliers, and rejected rows.
- Give the user one clear main action and keep all other features secondary.
- Use Pandas and Wrangling in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects

#### BUILD IT STEP BY STEP

1. Create `dirty-dataset-cleaner` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Clean a deliberately dirty dataset with explicit rules for nulls, duplicates, types, categories, dates, outliers, and rejected rows.
3. Use Pandas and Wrangling in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Pandas and Wrangling**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **DIRTY DATASET CLEANER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/dirty-dataset-cleaner
git commit -m "feat(dirty-dataset-cleaner): complete dirty dataset cleaner"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 8](../roadmaps/Data.md#phase-8) | [CONTINUE TO DATA PHASE 9](../roadmaps/Data.md#phase-9)

<a id="data-phase-9-project"></a>
### DATA PHASE 9 MINI-PROJECT

#### PROJECT: EXECUTIVE DATA STORY

#### SPECIFICATION

Build **Executive Data Story** as a focused exercise for **Visualization and Storytelling**. Keep the data and interface small enough to finish, but implement the following behavior:

- Turn one analysis into an executive-ready sequence of three charts: context, key finding, and recommended action.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by Visualization and Storytelling, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects

#### BUILD IT STEP BY STEP

1. Create `executive-data-story` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Turn one analysis into an executive-ready sequence of three charts: context, key finding, and recommended action.
3. Show the part of the data or system explained by Visualization and Storytelling, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for **Visualization and Storytelling**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **EXECUTIVE DATA STORY**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/executive-data-story
git commit -m "feat(executive-data-story): complete executive data story"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 9](../roadmaps/Data.md#phase-9) | [CONTINUE TO DATA PHASE 10](../roadmaps/Data.md#phase-10)

<a id="data-phase-10-project"></a>
### DATA PHASE 10 MINI-PROJECT

#### PROJECT: PRODUCT FUNNEL EDA

#### SPECIFICATION

Build **Product Funnel EDA** as a focused exercise for **EDA, Metrics, and Analytics**. Keep the data and interface small enough to finish, but implement the following behavior:

- Analyze a signup-to-purchase funnel by step, segment, and time; identify the largest drop and test one alternative explanation.
- Give the user one clear main action and keep all other features secondary.
- Use EDA, Metrics, and Analytics in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- pandas, Matplotlib, and seaborn

#### BUILD IT STEP BY STEP

1. Create `product-funnel-eda` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Analyze a signup-to-purchase funnel by step, segment, and time; identify the largest drop and test one alternative explanation.
3. Use EDA, Metrics, and Analytics in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **EDA, Metrics, and Analytics**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **PRODUCT FUNNEL EDA**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/product-funnel-eda
git commit -m "feat(product-funnel-eda): complete product funnel eda"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 10](../roadmaps/Data.md#phase-10) | [CONTINUE TO DATA PHASE 11](../roadmaps/Data.md#phase-11)

<a id="data-phase-11-project"></a>
### DATA PHASE 11 MINI-PROJECT

#### PROJECT: NORMALIZED ORDER DATABASE

#### SPECIFICATION

Build **Normalized Order Database** as a focused exercise for **Relational Modeling**. Keep the data and interface small enough to finish, but implement the following behavior:

- Design a normalized order system with customers, products, inventory, orders, payments, and shipments plus constraints and indexes.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use Relational Modeling to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- PostgreSQL 16
- DBeaver or pgAdmin
- SQL DDL and constraints

#### BUILD IT STEP BY STEP

1. Create `normalized-order-database` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Design a normalized order system with customers, products, inventory, orders, payments, and shipments plus constraints and indexes.
3. Use Relational Modeling to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for **Relational Modeling**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **NORMALIZED ORDER DATABASE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/normalized-order-database
git commit -m "feat(normalized-order-database): complete normalized order database"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 11](../roadmaps/Data.md#phase-11) | [CONTINUE TO DATA PHASE 12](../roadmaps/Data.md#phase-12)

<a id="data-phase-12-project"></a>
### DATA PHASE 12 MINI-PROJECT

#### PROJECT: STAR SCHEMA WAREHOUSE

#### SPECIFICATION

Build **Star Schema Warehouse** as a focused exercise for **Warehouses and Dimensional Modeling**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a star schema with order facts and customer, product, channel, and date dimensions, including slowly changing history.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use Warehouses and Dimensional Modeling to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- PostgreSQL 16
- dbdiagram.io
- SQL star schema

#### BUILD IT STEP BY STEP

1. Create `star-schema-warehouse` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Create a star schema with order facts and customer, product, channel, and date dimensions, including slowly changing history.
3. Use Warehouses and Dimensional Modeling to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for **Warehouses and Dimensional Modeling**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **STAR SCHEMA WAREHOUSE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/star-schema-warehouse
git commit -m "feat(star-schema-warehouse): complete star schema warehouse"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 12](../roadmaps/Data.md#phase-12) | [CONTINUE TO DATA PHASE 13](../roadmaps/Data.md#phase-13)

<a id="data-phase-13-project"></a>
### DATA PHASE 13 MINI-PROJECT

#### PROJECT: INCREMENTAL ETL PIPELINE

#### SPECIFICATION

Build **Incremental ETL Pipeline** as a focused exercise for **ETL and ELT Pipelines**. Keep the data and interface small enough to finish, but implement the following behavior:

- Load changed source rows into a warehouse incrementally with checkpoints, deduplication, upsert, quarantine, and reconciliation.
- Define a small input format, a transformed output format, and where failed records go.
- Use ETL and ELT Pipelines to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Python 3.12
- PostgreSQL 16
- pandas and SQLAlchemy

#### BUILD IT STEP BY STEP

1. Create `incremental-etl-pipeline` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Load changed source rows into a warehouse incrementally with checkpoints, deduplication, upsert, quarantine, and reconciliation.
3. Use ETL and ELT Pipelines to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for **ETL and ELT Pipelines**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **INCREMENTAL ETL PIPELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/incremental-etl-pipeline
git commit -m "chore(incremental-etl-pipeline): complete incremental etl pipeline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 13](../roadmaps/Data.md#phase-13) | [CONTINUE TO DATA PHASE 14](../roadmaps/Data.md#phase-14)

<a id="data-phase-14-project"></a>
### DATA PHASE 14 MINI-PROJECT

#### PROJECT: SCHEDULED AIRFLOW PIPELINE

#### SPECIFICATION

Build **Scheduled Airflow Pipeline** as a focused exercise for **Airflow and Containers**. Keep the data and interface small enough to finish, but implement the following behavior:

- Schedule extract, validate, load, and quality tasks in Airflow with dependencies, retries, backfill, and a visible failed-task path.
- Define a small input format, a transformed output format, and where failed records go.
- Use Airflow and Containers to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Python 3.12
- Apache Airflow
- PostgreSQL 16

#### BUILD IT STEP BY STEP

1. Create `scheduled-airflow-pipeline` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Schedule extract, validate, load, and quality tasks in Airflow with dependencies, retries, backfill, and a visible failed-task path.
3. Use Airflow and Containers to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for **Airflow and Containers**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **SCHEDULED AIRFLOW PIPELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/scheduled-airflow-pipeline
git commit -m "chore(scheduled-airflow-pipeline): complete scheduled airflow pipeline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 14](../roadmaps/Data.md#phase-14) | [CONTINUE TO DATA PHASE 15](../roadmaps/Data.md#phase-15)

<a id="data-phase-15-project"></a>
### DATA PHASE 15 MINI-PROJECT

#### PROJECT: DBT ANALYTICS PROJECT

#### SPECIFICATION

Build **dbt Analytics Project** as a focused exercise for **Analytics Engineering with dbt**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create dbt sources, staging models, marts, tests, freshness, snapshots, documentation, and lineage for the order warehouse.
- Give the user one clear main action and keep all other features secondary.
- Use Analytics Engineering with dbt in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- dbt Core
- PostgreSQL 16
- SQL and YAML

#### BUILD IT STEP BY STEP

1. Create `dbt-analytics-project` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Create dbt sources, staging models, marts, tests, freshness, snapshots, documentation, and lineage for the order warehouse.
3. Use Analytics Engineering with dbt in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Analytics Engineering with dbt**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **DBT ANALYTICS PROJECT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/dbt-analytics-project
git commit -m "feat(dbt-analytics-project): complete dbt analytics project"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 15](../roadmaps/Data.md#phase-15) | [CONTINUE TO DATA PHASE 16](../roadmaps/Data.md#phase-16)

<a id="data-phase-16-project"></a>
### DATA PHASE 16 MINI-PROJECT

#### PROJECT: CLOUD WAREHOUSE MIGRATION

#### SPECIFICATION

Build **Cloud Warehouse Migration** as a focused exercise for **Cloud Data Platforms**. Keep the data and interface small enough to finish, but implement the following behavior:

- Move the same warehouse models between local PostgreSQL and DuckDB-compatible files while documenting dialect and performance changes.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use Cloud Data Platforms to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects

#### BUILD IT STEP BY STEP

1. Create `cloud-warehouse-migration` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Move the same warehouse models between local PostgreSQL and DuckDB-compatible files while documenting dialect and performance changes.
3. Use Cloud Data Platforms to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for **Cloud Data Platforms**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **CLOUD WAREHOUSE MIGRATION**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/cloud-warehouse-migration
git commit -m "feat(cloud-warehouse-migration): complete cloud warehouse migration"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 16](../roadmaps/Data.md#phase-16) | [CONTINUE TO DATA PHASE 17](../roadmaps/Data.md#phase-17)

<a id="data-phase-17-project"></a>
### DATA PHASE 17 MINI-PROJECT

#### PROJECT: DISTRIBUTED SPARK BATCH JOB

#### SPECIFICATION

Build **Distributed Spark Batch Job** as a focused exercise for **Big Data with Spark**. Keep the data and interface small enough to finish, but implement the following behavior:

- Aggregate a partitioned trip dataset with PySpark, avoid unnecessary shuffles, and compare result and runtime with pandas/Polars.
- Give the user one clear main action and keep all other features secondary.
- Use Big Data with Spark in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- PySpark
- A local Spark installation

#### BUILD IT STEP BY STEP

1. Create `distributed-spark-batch-job` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Aggregate a partitioned trip dataset with PySpark, avoid unnecessary shuffles, and compare result and runtime with pandas/Polars.
3. Use Big Data with Spark in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Big Data with Spark**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **DISTRIBUTED SPARK BATCH JOB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/distributed-spark-batch-job
git commit -m "feat(distributed-spark-batch-job): complete distributed spark batch job"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 17](../roadmaps/Data.md#phase-17) | [CONTINUE TO DATA PHASE 18](../roadmaps/Data.md#phase-18)

<a id="data-phase-18-project"></a>
### DATA PHASE 18 MINI-PROJECT

#### PROJECT: KAFKA STREAMING METRICS

#### SPECIFICATION

Build **Kafka Streaming Metrics** as a focused exercise for **Streaming with Kafka**. Keep the data and interface small enough to finish, but implement the following behavior:

- Publish simulated order events to Kafka and calculate windowed order counts and revenue with duplicate and late-event handling.
- Give the user one clear main action and keep all other features secondary.
- Use Streaming with Kafka in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Apache Kafka
- Docker Compose for the local broker

#### BUILD IT STEP BY STEP

1. Create `kafka-streaming-metrics` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Publish simulated order events to Kafka and calculate windowed order counts and revenue with duplicate and late-event handling.
3. Use Streaming with Kafka in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Streaming with Kafka**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **KAFKA STREAMING METRICS**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/kafka-streaming-metrics
git commit -m "feat(kafka-streaming-metrics): complete kafka streaming metrics"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 18](../roadmaps/Data.md#phase-18) | [CONTINUE TO DATA PHASE 19](../roadmaps/Data.md#phase-19)

<a id="data-phase-19-project"></a>
### DATA PHASE 19 MINI-PROJECT

#### PROJECT: DATA QUALITY PORTFOLIO

#### SPECIFICATION

Build **Data Quality Portfolio** as a focused exercise for **Data Quality and Portfolio**. Keep the data and interface small enough to finish, but implement the following behavior:

- Package one batch and one analytics workflow with automated schema, null, uniqueness, relationship, freshness, and reconciliation checks.
- Define one realistic scenario, its boundaries, and the intended reader for the Data Quality Portfolio.
- Collect or create the exact inputs needed to apply Data Quality and Portfolio; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects

#### BUILD IT STEP BY STEP

1. Create `data-quality-portfolio` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Package one batch and one analytics workflow with automated schema, null, uniqueness, relationship, freshness, and reconciliation checks.
3. Collect or create the exact inputs needed to apply Data Quality and Portfolio; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Data Quality and Portfolio**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **DATA QUALITY PORTFOLIO**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/data-quality-portfolio
git commit -m "feat(data-quality-portfolio): complete data quality portfolio"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 19](../roadmaps/Data.md#phase-19) | [CONTINUE TO DATA PHASE 20](../roadmaps/Data.md#phase-20)

<a id="data-phase-20-project"></a>
### DATA PHASE 20 MINI-PROJECT

#### PROJECT: TIMED ANALYTICS CASE STUDY

#### SPECIFICATION

Build **Timed Analytics Case Study** as a focused exercise for **Interview Mastery**. Keep the data and interface small enough to finish, but implement the following behavior:

- Complete a timed business case from raw data through SQL/Python analysis, chart, recommendation, and spoken explanation.
- Define one realistic scenario, its boundaries, and the intended reader for the Timed Analytics Case Study.
- Collect or create the exact inputs needed to apply Interview Mastery; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- pandas and Matplotlib; use PostgreSQL for SQL and warehouse projects

#### BUILD IT STEP BY STEP

1. Create `timed-analytics-case-study` with `data/raw`, `data/processed`, `src`, `tests`, and `output` folders.
2. Complete a timed business case from raw data through SQL/Python analysis, chart, recommendation, and spoken explanation.
3. Collect or create the exact inputs needed to apply Interview Mastery; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Interview Mastery**.
7. Run the workflow from raw input to final output, then open every exported table or chart and check its labels and totals.

### Git Checkpoint

You have completed **TIMED ANALYTICS CASE STUDY**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- data/timed-analytics-case-study
git commit -m "feat(timed-analytics-case-study): complete timed analytics case study"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DATA PHASE 20](../roadmaps/Data.md#phase-20) | [BUILD THE DATA MAIN PORTFOLIO PROJECT](#data-main-portfolio-project)

<a id="data-main-portfolio-project"></a>
## DATA MAIN PORTFOLIO PROJECT

#### PROJECT: OPEN CITY MOBILITY ANALYTICS PLATFORM

#### DESCRIPTION

A reproducible data platform that ingests open or generated trip data, checks its quality, builds analytics models, and serves a public dashboard for transport planners and residents.

#### WHO THIS IS FOR

- Transport analyst investigating delays, demand, and service quality
- City planner comparing routes and time periods
- Resident viewing simple, non-technical service trends

#### WHAT USERS CAN DO

- Ingest batch trip files and a simulated live event stream
- Create trustworthy route, stop, time, delay, and ridership metrics
- Show filters, maps or charts, data freshness, and quality status
- Rebuild the platform from raw data with repeatable commands

#### FREE AND OPEN-SOURCE TECH STACK

- Python 3.12, pandas, Polars, and JupyterLab
- PostgreSQL, DuckDB, and SQL
- Apache Airflow, dbt Core, Apache Spark, and Apache Kafka
- Great Expectations Core or Soda Core
- Apache Superset or Streamlit
- Docker Engine or Podman with Compose
- GitHub Actions and GitHub Pages; optional Render free web service for a small dashboard

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Data Thinking:** Define the decision questions, metric owners, event grain, and what the data cannot prove.
2. **Phase 2 - Spreadsheets and Data Literacy:** Create a LibreOffice Calc prototype with clean types, formulas, a pivot table, and one chart.
3. **Phase 3 - Python for Data:** Build a Python CLI that validates a raw CSV and writes a typed, cleaned file.
4. **Phase 4 - SQL Foundations:** Load stops, routes, trips, and events into PostgreSQL and answer basic filtering and grouping questions.
5. **Phase 5 - SQL Joins and Aggregations:** Join the tables to calculate route-level trips, riders, delays, and cancellation rates.
6. **Phase 6 - Advanced SQL:** Add window functions for rolling averages, ranks, period comparisons, and consecutive delay streaks.
7. **Phase 7 - Statistics for Analysts:** Calculate confidence intervals or a controlled before/after test and state assumptions in plain language.
8. **Phase 8 - Pandas and Wrangling:** Create a pandas/Polars cleaning layer for nulls, duplicates, invalid timestamps, and impossible values.
9. **Phase 9 - Visualization and Storytelling:** Build an accessible dashboard with correctly chosen chart types, units, labels, and annotations.
10. **Phase 10 - EDA, Metrics, and Analytics:** Perform EDA, define a metric tree, segment results, and turn one finding into an operational recommendation.
11. **Phase 11 - Relational Modeling:** Normalize the operational PostgreSQL model and enforce keys, uniqueness, checks, and referential integrity.
12. **Phase 12 - Warehouses and Dimensional Modeling:** Create a star schema with trip facts and route, stop, vehicle, and date dimensions.
13. **Phase 13 - ETL and ELT Pipelines:** Build an incremental ETL job with checkpoints, idempotent loads, quarantine, and row-count reconciliation.
14. **Phase 14 - Airflow and Containers:** Schedule the pipeline in Airflow and run every component in local containers with retry and alert behavior.
15. **Phase 15 - Analytics Engineering with dbt:** Create dbt staging, intermediate, and mart models with tests, sources, freshness, and generated lineage.
16. **Phase 16 - Cloud Data Platforms:** Reproduce the warehouse on free/local PostgreSQL or DuckDB and separate platform-specific SQL behind adapters.
17. **Phase 17 - Big Data with Spark:** Process a larger partitioned dataset with local PySpark and compare its cost with pandas/Polars.
18. **Phase 18 - Streaming with Kafka:** Publish simulated vehicle events to Kafka and maintain a windowed delay metric with late-event handling.
19. **PHASE 19 - Data Quality and Portfolio (REQUIRED CAPSTONE-COMPLETION STEP):** Add automated quality gates, a small data catalog, open-source license, sample data, and a polished public dashboard.
20. **PHASE 20 - Interview Mastery (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Complete a timed SQL/analytics case using the platform and explain metric definitions, trade-offs, and failures aloud.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `open-city-mobility-analytics-platform` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: metric contract, spreadsheet prototype, validated CSV flow, and SQL foundation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "feat(mobility-data): establish metrics and ingestion foundation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: joined analytics, statistics, wrangling, and dashboard story**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "feat(mobility-data): build trusted mobility analytics"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: warehouse model, incremental pipeline, Airflow, and dbt lineage**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "feat(mobility-data): integrate warehouse and orchestrated models"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: portable platform, Spark batch, and Kafka streaming verification**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "test(mobility-data): verify batch and streaming pipelines"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: quality gates, catalog, sample data, and polished dashboard**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-city-mobility-analytics-platform
git commit -m "docs(mobility-data): complete city mobility analytics release"
git tag -a mobility-data-v1.0.0 -m "First complete mobility-data release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Run the full platform locally with Docker Compose using PostgreSQL, Airflow, Kafka, dbt, and the chosen dashboard.
2. Create a lightweight public-demo mode that reads prebuilt DuckDB/Parquet outputs and contains no personal or secret data.
3. Deploy static charts and the data dictionary to GitHub Pages for a guaranteed free public portfolio page.
4. Optionally deploy the lightweight Streamlit dashboard to a Render free web service and accept its sleep and quota limits.
5. Use a public-repository GitHub Actions workflow to run SQL linting, Python tests, dbt tests, and a small pipeline smoke test for free.
6. Test the published dashboard on phone and desktop and include the last successful data timestamp inside the interface.

> **MAIN PROJECT NAVIGATION:** [REVIEW DATA PHASE 19](../roadmaps/Data.md#phase-19) | [REVIEW DATA PHASE 20](../roadmaps/Data.md#phase-20) | [RETURN TO THE DATA ROADMAP](../roadmaps/Data.md#phase-index)

## Computer Networks

Study this roadmap first: [Networks.md](../roadmaps/Networks.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="networks-phase-1-project"></a>
### NETWORKS PHASE 1 MINI-PROJECT

#### PROJECT: LATENCY VS THROUGHPUT LAB

#### SPECIFICATION

Build **Latency vs Throughput Lab** as a focused exercise for **Network Thinking**. Keep the data and interface small enough to finish, but implement the following behavior:

- Send controlled local traffic at different message sizes and delays, then calculate and chart latency, throughput, jitter, and loss.
- Give the user one clear main action and keep all other features secondary.
- Use Network Thinking in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `latency-vs-throughput-lab` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Send controlled local traffic at different message sizes and delays, then calculate and chart latency, throughput, jitter, and loss.
3. Use Network Thinking in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Network Thinking**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **LATENCY VS THROUGHPUT LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/latency-vs-throughput-lab
git commit -m "feat(latency-vs-throughput-lab): complete latency vs throughput lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 1](../roadmaps/Networks.md#phase-1) | [CONTINUE TO NETWORKS PHASE 2](../roadmaps/Networks.md#phase-2)

<a id="networks-phase-2-project"></a>
### NETWORKS PHASE 2 MINI-PROJECT

#### PROJECT: NOISY LINK SIMULATOR

#### SPECIFICATION

Build **Noisy Link Simulator** as a focused exercise for **Physical Layer**. Keep the data and interface small enough to finish, but implement the following behavior:

- Encode a bit stream, inject configurable flips or burst errors, and compare parity, checksum, and CRC detection results.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Physical Layer explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `noisy-link-simulator` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Encode a bit stream, inject configurable flips or burst errors, and compare parity, checksum, and CRC detection results.
3. Represent the important states or data structures from Physical Layer explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Physical Layer**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **NOISY LINK SIMULATOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/noisy-link-simulator
git commit -m "feat(noisy-link-simulator): complete noisy link simulator"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 2](../roadmaps/Networks.md#phase-2) | [CONTINUE TO NETWORKS PHASE 3](../roadmaps/Networks.md#phase-3)

<a id="networks-phase-3-project"></a>
### NETWORKS PHASE 3 MINI-PROJECT

#### PROJECT: ETHERNET FRAME ENCODER

#### SPECIFICATION

Build **Ethernet Frame Encoder** as a focused exercise for **Ethernet and Data Link**. Keep the data and interface small enough to finish, but implement the following behavior:

- Encode and decode Ethernet frames with MAC addresses, EtherType, payload, and FCS-like validation; reject malformed lengths.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Ethernet and Data Link explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `ethernet-frame-encoder` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Encode and decode Ethernet frames with MAC addresses, EtherType, payload, and FCS-like validation; reject malformed lengths.
3. Represent the important states or data structures from Ethernet and Data Link explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Ethernet and Data Link**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **ETHERNET FRAME ENCODER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/ethernet-frame-encoder
git commit -m "feat(ethernet-frame-encoder): complete ethernet frame encoder"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 3](../roadmaps/Networks.md#phase-3) | [CONTINUE TO NETWORKS PHASE 4](../roadmaps/Networks.md#phase-4)

<a id="networks-phase-4-project"></a>
### NETWORKS PHASE 4 MINI-PROJECT

#### PROJECT: LEARNING SWITCH SIMULATOR

#### SPECIFICATION

Build **Learning Switch Simulator** as a focused exercise for **Switching and VLANs**. Keep the data and interface small enough to finish, but implement the following behavior:

- Learn source MAC-to-port mappings from incoming frames, forward or flood correctly, age entries, and isolate two simulated VLANs.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Switching and VLANs explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `learning-switch-simulator` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Learn source MAC-to-port mappings from incoming frames, forward or flood correctly, age entries, and isolate two simulated VLANs.
3. Represent the important states or data structures from Switching and VLANs explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Switching and VLANs**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **LEARNING SWITCH SIMULATOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/learning-switch-simulator
git commit -m "feat(learning-switch-simulator): complete learning switch simulator"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 4](../roadmaps/Networks.md#phase-4) | [CONTINUE TO NETWORKS PHASE 5](../roadmaps/Networks.md#phase-5)

<a id="networks-phase-5-project"></a>
### NETWORKS PHASE 5 MINI-PROJECT

#### PROJECT: SUBNET CALCULATOR

#### SPECIFICATION

Build **Subnet Calculator** as a focused exercise for **IP Addressing and Subnetting**. Keep the data and interface small enough to finish, but implement the following behavior:

- Convert prefix and mask formats, calculate network/broadcast/host ranges, split a network into subnets, and reject invalid or overlapping input.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from IP Addressing and Subnetting explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `subnet-calculator` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Convert prefix and mask formats, calculate network/broadcast/host ranges, split a network into subnets, and reject invalid or overlapping input.
3. Represent the important states or data structures from IP Addressing and Subnetting explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **IP Addressing and Subnetting**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **SUBNET CALCULATOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/subnet-calculator
git commit -m "feat(subnet-calculator): complete subnet calculator"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 5](../roadmaps/Networks.md#phase-5) | [CONTINUE TO NETWORKS PHASE 6](../roadmaps/Networks.md#phase-6)

<a id="networks-phase-6-project"></a>
### NETWORKS PHASE 6 MINI-PROJECT

#### PROJECT: LONGEST-PREFIX ROUTER

#### SPECIFICATION

Build **Longest-Prefix Router** as a focused exercise for **Routing and Forwarding**. Keep the data and interface small enough to finish, but implement the following behavior:

- Store CIDR routes in a table, choose the longest matching prefix for each destination, and show default and unreachable decisions.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Routing and Forwarding explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `longest-prefix-router` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Store CIDR routes in a table, choose the longest matching prefix for each destination, and show default and unreachable decisions.
3. Represent the important states or data structures from Routing and Forwarding explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Routing and Forwarding**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **LONGEST-PREFIX ROUTER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/longest-prefix-router
git commit -m "fix(longest-prefix-router): complete longest-prefix router"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 6](../roadmaps/Networks.md#phase-6) | [CONTINUE TO NETWORKS PHASE 7](../roadmaps/Networks.md#phase-7)

<a id="networks-phase-7-project"></a>
### NETWORKS PHASE 7 MINI-PROJECT

#### PROJECT: DHCP/NAT TABLE SIMULATOR

#### SPECIFICATION

Build **DHCP/NAT Table Simulator** as a focused exercise for **ARP, DHCP, ICMP, and NAT**. Keep the data and interface small enough to finish, but implement the following behavior:

- Simulate DHCP leases and NAT mappings with allocation, expiry, renewal, collision prevention, and inbound/outbound lookup.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from ARP, DHCP, ICMP, and NAT explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `dhcp-nat-table-simulator` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Simulate DHCP leases and NAT mappings with allocation, expiry, renewal, collision prevention, and inbound/outbound lookup.
3. Represent the important states or data structures from ARP, DHCP, ICMP, and NAT explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **ARP, DHCP, ICMP, and NAT**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **DHCP/NAT TABLE SIMULATOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/dhcp-nat-table-simulator
git commit -m "feat(dhcp-nat-table-simulator): complete dhcp/nat table simulator"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 7](../roadmaps/Networks.md#phase-7) | [CONTINUE TO NETWORKS PHASE 8](../roadmaps/Networks.md#phase-8)

<a id="networks-phase-8-project"></a>
### NETWORKS PHASE 8 MINI-PROJECT

#### PROJECT: PACKET ENCAPSULATION VISUALIZER

#### SPECIFICATION

Build **Packet Encapsulation Visualizer** as a focused exercise for **OSI and TCP/IP Models**. Keep the data and interface small enough to finish, but implement the following behavior:

- Wrap an application message through transport, IP, Ethernet, and physical representations, then unwrap it with field explanations.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by OSI and TCP/IP Models, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `packet-encapsulation-visualizer` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Wrap an application message through transport, IP, Ethernet, and physical representations, then unwrap it with field explanations.
3. Show the part of the data or system explained by OSI and TCP/IP Models, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for **OSI and TCP/IP Models**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **PACKET ENCAPSULATION VISUALIZER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/packet-encapsulation-visualizer
git commit -m "feat(packet-encapsulation-visualizer): complete packet encapsulation visualizer"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 8](../roadmaps/Networks.md#phase-8) | [CONTINUE TO NETWORKS PHASE 9](../roadmaps/Networks.md#phase-9)

<a id="networks-phase-9-project"></a>
### NETWORKS PHASE 9 MINI-PROJECT

#### PROJECT: RELIABLE UDP CHAT

#### SPECIFICATION

Build **Reliable UDP Chat** as a focused exercise for **UDP**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build local UDP chat with sequence numbers, acknowledgements, retry limits, duplicate suppression, ordering, and timeout behavior.
- Give the user one clear main action and keep all other features secondary.
- Use UDP in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `reliable-udp-chat` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Build local UDP chat with sequence numbers, acknowledgements, retry limits, duplicate suppression, ordering, and timeout behavior.
3. Use UDP in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **UDP**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **RELIABLE UDP CHAT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/reliable-udp-chat
git commit -m "feat(reliable-udp-chat): complete reliable udp chat"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 9](../roadmaps/Networks.md#phase-9) | [CONTINUE TO NETWORKS PHASE 10](../roadmaps/Networks.md#phase-10)

<a id="networks-phase-10-project"></a>
### NETWORKS PHASE 10 MINI-PROJECT

#### PROJECT: TCP STATE TRACE

#### SPECIFICATION

Build **TCP State Trace** as a focused exercise for **TCP**. Keep the data and interface small enough to finish, but implement the following behavior:

- Capture or simulate a TCP exchange and show handshake, sequence/acknowledgement changes, retransmission, flow control, and close states.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from TCP explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `tcp-state-trace` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Capture or simulate a TCP exchange and show handshake, sequence/acknowledgement changes, retransmission, flow control, and close states.
3. Represent the important states or data structures from TCP explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **TCP**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **TCP STATE TRACE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/tcp-state-trace
git commit -m "feat(tcp-state-trace): complete tcp state trace"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 10](../roadmaps/Networks.md#phase-10) | [CONTINUE TO NETWORKS PHASE 11](../roadmaps/Networks.md#phase-11)

<a id="networks-phase-11-project"></a>
### NETWORKS PHASE 11 MINI-PROJECT

#### PROJECT: MULTI-CLIENT SOCKET SERVER

#### SPECIFICATION

Build **Multi-client Socket Server** as a focused exercise for **Socket Programming**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a concurrent TCP server with length-prefixed messages, bounded clients, per-client timeout, broadcast, and graceful shutdown.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Socket Programming in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `multi-client-socket-server` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Build a concurrent TCP server with length-prefixed messages, bounded clients, per-client timeout, broadcast, and graceful shutdown.
3. Use Socket Programming in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Socket Programming**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **MULTI-CLIENT SOCKET SERVER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/multi-client-socket-server
git commit -m "feat(multi-client-socket-server): complete multi-client socket server"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 11](../roadmaps/Networks.md#phase-11) | [CONTINUE TO NETWORKS PHASE 12](../roadmaps/Networks.md#phase-12)

<a id="networks-phase-12-project"></a>
### NETWORKS PHASE 12 MINI-PROJECT

#### PROJECT: RECURSIVE DNS RESOLVER

#### SPECIFICATION

Build **Recursive DNS Resolver** as a focused exercise for **DNS**. Keep the data and interface small enough to finish, but implement the following behavior:

- Resolve names through root, TLD, and authoritative data in a tiny recursive resolver with cache, TTL, NXDOMAIN, and loop protection.
- Define the accepted request or message shape and the returned success and error shapes.
- Use DNS in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `recursive-dns-resolver` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Resolve names through root, TLD, and authoritative data in a tiny recursive resolver with cache, TTL, NXDOMAIN, and loop protection.
3. Use DNS in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **DNS**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **RECURSIVE DNS RESOLVER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/recursive-dns-resolver
git commit -m "feat(recursive-dns-resolver): complete recursive dns resolver"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 12](../roadmaps/Networks.md#phase-12) | [CONTINUE TO NETWORKS PHASE 13](../roadmaps/Networks.md#phase-13)

<a id="networks-phase-13-project"></a>
### NETWORKS PHASE 13 MINI-PROJECT

#### PROJECT: RAW HTTP EXCHANGE

#### SPECIFICATION

Build **Raw HTTP Exchange** as a focused exercise for **HTTP and the Web**. Keep the data and interface small enough to finish, but implement the following behavior:

- Send and receive raw HTTP/1.1 messages over a socket and inspect method, path, headers, content length, status, and connection behavior.
- Give the user one clear main action and keep all other features secondary.
- Use HTTP and the Web in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `raw-http-exchange` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Send and receive raw HTTP/1.1 messages over a socket and inspect method, path, headers, content length, status, and connection behavior.
3. Use HTTP and the Web in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **HTTP and the Web**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **RAW HTTP EXCHANGE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/raw-http-exchange
git commit -m "feat(raw-http-exchange): complete raw http exchange"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 13](../roadmaps/Networks.md#phase-13) | [CONTINUE TO NETWORKS PHASE 14](../roadmaps/Networks.md#phase-14)

<a id="networks-phase-14-project"></a>
### NETWORKS PHASE 14 MINI-PROJECT

#### PROJECT: TLS CERTIFICATE INSPECTOR

#### SPECIFICATION

Build **TLS Certificate Inspector** as a focused exercise for **TLS and HTTPS**. Keep the data and interface small enough to finish, but implement the following behavior:

- Connect to an HTTPS host, print certificate subject, issuer, names, validity, chain information, and clear verification failures.
- Give the user one clear main action and keep all other features secondary.
- Use TLS and HTTPS in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- OpenSSL
- A modern browser
- No programming required

#### BUILD IT STEP BY STEP

1. Create `tls-certificate-inspector` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Connect to an HTTPS host, print certificate subject, issuer, names, validity, chain information, and clear verification failures.
3. Use TLS and HTTPS in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **TLS and HTTPS**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **TLS CERTIFICATE INSPECTOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/tls-certificate-inspector
git commit -m "feat(tls-certificate-inspector): complete tls certificate inspector"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 14](../roadmaps/Networks.md#phase-14) | [CONTINUE TO NETWORKS PHASE 15](../roadmaps/Networks.md#phase-15)

<a id="networks-phase-15-project"></a>
### NETWORKS PHASE 15 MINI-PROJECT

#### PROJECT: PACKET FORENSICS REPORT

#### SPECIFICATION

Build **Packet Forensics Report** as a focused exercise for **Packet Analysis**. Keep the data and interface small enough to finish, but implement the following behavior:

- Analyze a prepared packet capture, reconstruct one transaction, build a timeline, identify the failing layer, and support the conclusion with packet fields.
- Define one realistic scenario, its boundaries, and the intended reader for the Packet Forensics Report.
- Collect or create the exact inputs needed to apply Packet Analysis; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Wireshark
- A provided or self-recorded packet capture
- No programming required

#### BUILD IT STEP BY STEP

1. Create `packet-forensics-report` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Analyze a prepared packet capture, reconstruct one transaction, build a timeline, identify the failing layer, and support the conclusion with packet fields.
3. Collect or create the exact inputs needed to apply Packet Analysis; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Packet Analysis**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **PACKET FORENSICS REPORT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/packet-forensics-report
git commit -m "docs(packet-forensics-report): complete packet forensics report"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 15](../roadmaps/Networks.md#phase-15) | [CONTINUE TO NETWORKS PHASE 16](../roadmaps/Networks.md#phase-16)

<a id="networks-phase-16-project"></a>
### NETWORKS PHASE 16 MINI-PROJECT

#### PROJECT: WI-FI SURVEY AND HEATMAP

#### SPECIFICATION

Build **Wi-Fi Survey and Heatmap** as a focused exercise for **Wireless and Wi-Fi**. Keep the data and interface small enough to finish, but implement the following behavior:

- Survey authorized Wi-Fi locations, record channel, signal, noise, and security, then produce a floor-plan heatmap and channel recommendation.
- Define one realistic scenario, its boundaries, and the intended reader for the Wi-Fi Survey and Heatmap.
- Collect or create the exact inputs needed to apply Wireless and Wi-Fi; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- WiFi Analyzer
- A spreadsheet
- No programming required; survey only places where you have permission

#### BUILD IT STEP BY STEP

1. Create `wi-fi-survey-and-heatmap` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Survey authorized Wi-Fi locations, record channel, signal, noise, and security, then produce a floor-plan heatmap and channel recommendation.
3. Collect or create the exact inputs needed to apply Wireless and Wi-Fi; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Wireless and Wi-Fi**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **WI-FI SURVEY AND HEATMAP**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/wi-fi-survey-and-heatmap
git commit -m "docs(wi-fi-survey-and-heatmap): complete wi-fi survey and heatmap"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 16](../roadmaps/Networks.md#phase-16) | [CONTINUE TO NETWORKS PHASE 17](../roadmaps/Networks.md#phase-17)

<a id="networks-phase-17-project"></a>
### NETWORKS PHASE 17 MINI-PROJECT

#### PROJECT: REVERSE PROXY LOAD LAB

#### SPECIFICATION

Build **Reverse Proxy Load Lab** as a focused exercise for **CDN, Load Balancers, and Edge**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run two local backends behind Nginx, observe balancing and health checks, stop one backend, and measure failover and cache behavior.
- Give the user one clear main action and keep all other features secondary.
- Use CDN, Load Balancers, and Edge in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Docker
- Nginx
- curl and a small local demo service

#### BUILD IT STEP BY STEP

1. Create `reverse-proxy-load-lab` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Run two local backends behind Nginx, observe balancing and health checks, stop one backend, and measure failover and cache behavior.
3. Use CDN, Load Balancers, and Edge in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **CDN, Load Balancers, and Edge**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **REVERSE PROXY LOAD LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/reverse-proxy-load-lab
git commit -m "feat(reverse-proxy-load-lab): complete reverse proxy load lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 17](../roadmaps/Networks.md#phase-17) | [CONTINUE TO NETWORKS PHASE 18](../roadmaps/Networks.md#phase-18)

<a id="networks-phase-18-project"></a>
### NETWORKS PHASE 18 MINI-PROJECT

#### PROJECT: BGP POLICY SIMULATOR

#### SPECIFICATION

Build **BGP Policy Simulator** as a focused exercise for **BGP and Internet Architecture**. Keep the data and interface small enough to finish, but implement the following behavior:

- Simulate autonomous systems exchanging prefixes with local preference, AS path, withdrawal, loop prevention, and convergence output.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from BGP and Internet Architecture explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `bgp-policy-simulator` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Simulate autonomous systems exchanging prefixes with local preference, AS path, withdrawal, loop prevention, and convergence output.
3. Represent the important states or data structures from BGP and Internet Architecture explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **BGP and Internet Architecture**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **BGP POLICY SIMULATOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/bgp-policy-simulator
git commit -m "docs(bgp-policy-simulator): complete bgp policy simulator"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 18](../roadmaps/Networks.md#phase-18) | [CONTINUE TO NETWORKS PHASE 19](../roadmaps/Networks.md#phase-19)

<a id="networks-phase-19-project"></a>
### NETWORKS PHASE 19 MINI-PROJECT

#### PROJECT: AUTOMATED NETWORK LAB PORTFOLIO

#### SPECIFICATION

Build **Automated Network Lab Portfolio** as a focused exercise for **Labs and Automation**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create one command that starts a local network topology, configures nodes, runs reachability/services tests, saves sanitized results, and tears down.
- Define one realistic scenario, its boundaries, and the intended reader for the Automated Network Lab Portfolio.
- Collect or create the exact inputs needed to apply Labs and Automation; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `automated-network-lab-portfolio` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Create one command that starts a local network topology, configures nodes, runs reachability/services tests, saves sanitized results, and tears down.
3. Collect or create the exact inputs needed to apply Labs and Automation; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Labs and Automation**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **AUTOMATED NETWORK LAB PORTFOLIO**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/automated-network-lab-portfolio
git commit -m "feat(automated-network-lab-portfolio): complete automated network lab portfolio"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 19](../roadmaps/Networks.md#phase-19) | [CONTINUE TO NETWORKS PHASE 20](../roadmaps/Networks.md#phase-20)

<a id="networks-phase-20-project"></a>
### NETWORKS PHASE 20 MINI-PROJECT

#### PROJECT: TIMED TROUBLESHOOTING DRILL

#### SPECIFICATION

Build **Timed Troubleshooting Drill** as a focused exercise for **Interviews**. Keep the data and interface small enough to finish, but implement the following behavior:

- Diagnose timed DNS, route, TCP, TLS, and HTTP failures using an ordered hypothesis-and-tool checklist.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Interviews and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12
- Wireshark
- Packet Tracer for topology labs; use only your own or an authorized lab network

#### BUILD IT STEP BY STEP

1. Create `timed-troubleshooting-drill` with `src`, `captures`, `topology`, and `tests` folders; keep the lab isolated.
2. Diagnose timed DNS, route, TCP, TLS, and HTTP failures using an ordered hypothesis-and-tool checklist.
3. Use a metric connected to Interviews and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Interviews**.
7. Run the local lab, save only a small non-sensitive capture or result, and confirm the normal and failure behaviors.

### Git Checkpoint

You have completed **TIMED TROUBLESHOOTING DRILL**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- networks/timed-troubleshooting-drill
git commit -m "feat(timed-troubleshooting-drill): complete timed troubleshooting drill"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 20](../roadmaps/Networks.md#phase-20) | [BUILD THE NETWORKS MAIN PORTFOLIO PROJECT](#networks-main-portfolio-project)

<a id="networks-main-portfolio-project"></a>
## NETWORKS MAIN PORTFOLIO PROJECT

#### PROJECT: OPEN NETWORK OPERATIONS LAB AND DIAGNOSTIC PORTAL

#### DESCRIPTION

An isolated small-company network lab with routing, VLANs, DNS, HTTPS, load balancing, monitoring, packet capture, and a diagnostic portal. It demonstrates networking by making normal traffic and failures visible.

#### WHO THIS IS FOR

- Junior network technician learning a safe troubleshooting order
- Small-company operator checking service and link health
- Reviewer who wants to reproduce network failures without touching a real organization

#### WHAT USERS CAN DO

- Start a multi-subnet office topology with users, services, and an edge
- Observe addresses, routes, DNS, TCP, TLS, HTTP, and load-balanced requests
- Trigger documented failures and receive ordered diagnostic hints
- Export a sanitized health dashboard without exposing the lab

#### FREE AND OPEN-SOURCE TECH STACK

- containerlab or GNS3
- FRRouting, Linux network namespaces, and Open vSwitch
- Python 3.12 with FastAPI
- BIND or CoreDNS, Nginx, and OpenSSL
- Wireshark, tcpdump, iproute2, dig, curl, and mtr
- Prometheus and Grafana
- Docker Engine or Podman; all lab software is free and open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Network Thinking:** Write service goals for latency, throughput, availability, and failure visibility before drawing the topology.
2. **Phase 2 - Physical Layer:** Model link speed, delay, noise, and loss on one path and measure how each changes application traffic.
3. **Phase 3 - Ethernet and Data Link:** Create Ethernet segments and inspect source, destination, EtherType, and payload in a local capture.
4. **Phase 4 - Switching and VLANs:** Add two VLANs, access/trunk ports, and a learning bridge; prove broadcast isolation.
5. **Phase 5 - IP Addressing and Subnetting:** Design IPv4 subnets, gateways, DHCP ranges, and reserved addresses with no overlap.
6. **Phase 6 - Routing and Forwarding:** Configure forwarding and longest-prefix routes between subnets, including a deliberate missing route.
7. **Phase 7 - ARP, DHCP, ICMP, and NAT:** Add ARP, DHCP, ICMP checks and controlled NAT at the lab edge.
8. **Phase 8 - OSI and TCP/IP Models:** Display each packet's encapsulation through application, transport, network, and link layers.
9. **Phase 9 - UDP:** Add a UDP telemetry sender, loss counter, timeout, and optional application acknowledgement.
10. **Phase 10 - TCP:** Trace a TCP connection through handshake, data transfer, retransmission, flow control, and close.
11. **Phase 11 - Socket Programming:** Create a concurrent socket service with bounded clients, timeouts, framing, and graceful shutdown.
12. **Phase 12 - DNS:** Run an internal authoritative DNS zone and a caching resolver; test success, NXDOMAIN, and expiry.
13. **Phase 13 - HTTP and the Web:** Serve the diagnostic portal through HTTP and inspect methods, headers, status codes, persistence, and errors.
14. **Phase 14 - TLS and HTTPS:** Create a local certificate authority, enable HTTPS, verify names and trust, and demonstrate one rejected certificate.
15. **Phase 15 - Packet Analysis:** Capture one working and one broken transaction and diagnose them from packets before reading application logs.
16. **Phase 16 - Wireless and Wi-Fi:** Add a simulated wireless segment, channel/interference assumptions, and a safe survey using only authorized space.
17. **Phase 17 - CDN, Load Balancers, and Edge:** Place Nginx in front of two portal instances and measure distribution, health checks, caching, and failover.
18. **Phase 18 - BGP and Internet Architecture:** Add two FRRouting autonomous systems, apply a simple BGP policy, and observe route withdrawal and convergence.
19. **PHASE 19 - Labs and Automation (REQUIRED CAPSTONE-COMPLETION STEP):** Automate lab start, tests, fault injection, sanitized captures, and teardown with one command.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Run a timed unknown-failure drill and explain the symptom-to-layer-to-tool reasoning without guessing.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `open-network-operations-lab` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: requirements, packet evidence, addressing, switching, and VLAN topology**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "feat(network-lab): establish observable routed topology"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: routing, DNS, transport, TLS, HTTP, and load-balanced services**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "feat(network-lab): integrate secure network services"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: wireless, security controls, automation, virtualization, and cloud networking**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "feat(network-lab): automate protected hybrid topology"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: monitoring, performance baselines, and ordered troubleshooting failures**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "test(network-lab): verify monitoring and fault diagnosis"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: one-command lab, sanitized captures, diagrams, and teardown evidence**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-network-operations-lab
git commit -m "docs(network-lab): complete network operations lab release"
git tag -a network-lab-v1.0.0 -m "First complete network-lab release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Run the entire network only on a local machine with containerlab/GNS3 and Docker or Podman; do not expose router management ports.
2. Start the topology, run the automated checks, then inject and repair one DNS, route, TLS, and backend failure.
3. Deploy Grafana and the diagnostic portal inside the lab and access them through localhost port forwarding.
4. Generate a sanitized static summary with diagrams, metrics, and packet screenshots containing no real addresses or credentials.
5. Publish only that static summary to GitHub Pages for free; keep captures and vulnerable lab services private.
6. Provide one teardown command and verify that it removes lab containers, namespaces, bridges, and temporary certificates.

> **MAIN PROJECT NAVIGATION:** [REVIEW NETWORKS PHASE 19](../roadmaps/Networks.md#phase-19) | [REVIEW NETWORKS PHASE 20](../roadmaps/Networks.md#phase-20) | [RETURN TO THE NETWORKS ROADMAP](../roadmaps/Networks.md#phase-index)

## Artificial Intelligence and Machine Learning

Study this roadmap first: [AI.md](../roadmaps/AI.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="ai-phase-1-project"></a>
### AI PHASE 1 MINI-PROJECT

#### PROJECT: RULE VS LEARNER BENCHMARK

#### SPECIFICATION

Build **Rule vs Learner Benchmark** as a focused exercise for **AI Thinking**. Keep the data and interface small enough to finish, but implement the following behavior:

- Compare a hand-written rule system with a learned classifier on the same small dataset and error table.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to AI Thinking and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases

#### BUILD IT STEP BY STEP

1. Create `rule-vs-learner-benchmark` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Compare a hand-written rule system with a learned classifier on the same small dataset and error table.
3. Use a metric connected to AI Thinking and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **AI Thinking**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **RULE VS LEARNER BENCHMARK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/rule-vs-learner-benchmark
git commit -m "feat(rule-vs-learner-benchmark): complete rule vs learner benchmark"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 1](../roadmaps/AI.md#phase-1) | [CONTINUE TO AI PHASE 2](../roadmaps/AI.md#phase-2)

<a id="ai-phase-2-project"></a>
### AI PHASE 2 MINI-PROJECT

#### PROJECT: GRADIENT DESCENT VISUALIZER

#### SPECIFICATION

Build **Gradient Descent Visualizer** as a focused exercise for **Math for ML**. Keep the data and interface small enough to finish, but implement the following behavior:

- Implement linear regression and gradient descent with NumPy, plot the loss surface and path, and compare learning rates.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by Math for ML, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases

#### BUILD IT STEP BY STEP

1. Create `gradient-descent-visualizer` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Implement linear regression and gradient descent with NumPy, plot the loss surface and path, and compare learning rates.
3. Show the part of the data or system explained by Math for ML, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for **Math for ML**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **GRADIENT DESCENT VISUALIZER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/gradient-descent-visualizer
git commit -m "feat(gradient-descent-visualizer): complete gradient descent visualizer"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 2](../roadmaps/AI.md#phase-2) | [CONTINUE TO AI PHASE 3](../roadmaps/AI.md#phase-3)

<a id="ai-phase-3-project"></a>
### AI PHASE 3 MINI-PROJECT

#### PROJECT: NUMPY/PANDAS DATASET LAB

#### SPECIFICATION

Build **NumPy/Pandas Dataset Lab** as a focused exercise for **Python for AI**. Keep the data and interface small enough to finish, but implement the following behavior:

- Load, inspect, clean, transform, split, and summarize a tabular dataset with reusable NumPy/pandas functions.
- Give the user one clear main action and keep all other features secondary.
- Use Python for AI in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases

#### BUILD IT STEP BY STEP

1. Create `numpy-pandas-dataset-lab` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Load, inspect, clean, transform, split, and summarize a tabular dataset with reusable NumPy/pandas functions.
3. Use Python for AI in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Python for AI**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **NUMPY/PANDAS DATASET LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/numpy-pandas-dataset-lab
git commit -m "feat(numpy-pandas-dataset-lab): complete numpy/pandas dataset lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 3](../roadmaps/AI.md#phase-3) | [CONTINUE TO AI PHASE 4](../roadmaps/AI.md#phase-4)

<a id="ai-phase-4-project"></a>
### AI PHASE 4 MINI-PROJECT

#### PROJECT: REGRESSION AND CLASSIFICATION BASELINE

#### SPECIFICATION

Build **Regression and Classification Baseline** as a focused exercise for **Classical Machine Learning**. Keep the data and interface small enough to finish, but implement the following behavior:

- Train regression and classification baselines with preprocessing pipelines and compare against a simple dummy model.
- Give the user one clear main action and keep all other features secondary.
- Use Classical Machine Learning in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases

#### BUILD IT STEP BY STEP

1. Create `regression-and-classification-baseline` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Train regression and classification baselines with preprocessing pipelines and compare against a simple dummy model.
3. Use Classical Machine Learning in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Classical Machine Learning**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **REGRESSION AND CLASSIFICATION BASELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/regression-and-classification-baseline
git commit -m "chore(regression-and-classification-baseline): complete regression and classification baseline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 4](../roadmaps/AI.md#phase-4) | [CONTINUE TO AI PHASE 5](../roadmaps/AI.md#phase-5)

<a id="ai-phase-5-project"></a>
### AI PHASE 5 MINI-PROJECT

#### PROJECT: LEAKAGE-PROOF EVALUATION HARNESS

#### SPECIFICATION

Build **Leakage-Proof Evaluation Harness** as a focused exercise for **Evaluation and Generalization**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create train/validation/test splits before preprocessing, run cross-validation, choose metrics, and demonstrate one leakage failure.
- Give the user one clear main action and keep all other features secondary.
- Use Evaluation and Generalization in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases

#### BUILD IT STEP BY STEP

1. Create `leakage-proof-evaluation-harness` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Create train/validation/test splits before preprocessing, run cross-validation, choose metrics, and demonstrate one leakage failure.
3. Use Evaluation and Generalization in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Evaluation and Generalization**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **LEAKAGE-PROOF EVALUATION HARNESS**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/leakage-proof-evaluation-harness
git commit -m "feat(leakage-proof-evaluation-harness): complete leakage-proof evaluation harness"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 5](../roadmaps/AI.md#phase-5) | [CONTINUE TO AI PHASE 6](../roadmaps/AI.md#phase-6)

<a id="ai-phase-6-project"></a>
### AI PHASE 6 MINI-PROJECT

#### PROJECT: ENSEMBLE MODEL SHOWDOWN

#### SPECIFICATION

Build **Ensemble Model Showdown** as a focused exercise for **Trees and Ensembles**. Keep the data and interface small enough to finish, but implement the following behavior:

- Compare decision tree, random forest, and gradient boosting models on the same split, metrics, runtime, and error slices.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Trees and Ensembles and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases

#### BUILD IT STEP BY STEP

1. Create `ensemble-model-showdown` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Compare decision tree, random forest, and gradient boosting models on the same split, metrics, runtime, and error slices.
3. Use a metric connected to Trees and Ensembles and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Trees and Ensembles**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **ENSEMBLE MODEL SHOWDOWN**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/ensemble-model-showdown
git commit -m "feat(ensemble-model-showdown): complete ensemble model showdown"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 6](../roadmaps/AI.md#phase-6) | [CONTINUE TO AI PHASE 7](../roadmaps/AI.md#phase-7)

<a id="ai-phase-7-project"></a>
### AI PHASE 7 MINI-PROJECT

#### PROJECT: NEURAL NETWORK FROM SCRATCH

#### SPECIFICATION

Build **Neural Network from Scratch** as a focused exercise for **Neural Network Basics**. Keep the data and interface small enough to finish, but implement the following behavior:

- Implement a dense neural network forward pass, activations, loss, and training loop in NumPy for a tiny dataset.
- Give the user one clear main action and keep all other features secondary.
- Use Neural Network Basics in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy only

#### BUILD IT STEP BY STEP

1. Create `neural-network-from-scratch` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Implement a dense neural network forward pass, activations, loss, and training loop in NumPy for a tiny dataset.
3. Use Neural Network Basics in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Neural Network Basics**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **NEURAL NETWORK FROM SCRATCH**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/neural-network-from-scratch
git commit -m "feat(neural-network-from-scratch): complete neural network from scratch"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 7](../roadmaps/AI.md#phase-7) | [CONTINUE TO AI PHASE 8](../roadmaps/AI.md#phase-8)

<a id="ai-phase-8-project"></a>
### AI PHASE 8 MINI-PROJECT

#### PROJECT: TINY AUTOGRAD ENGINE

#### SPECIFICATION

Build **Tiny Autograd Engine** as a focused exercise for **Backpropagation and Optimizers**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create scalar/tensor operations that record a computation graph and compute gradients by reverse-mode automatic differentiation.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Backpropagation and Optimizers explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- PyTorch
- Jupyter Notebook and Matplotlib

#### BUILD IT STEP BY STEP

1. Create `tiny-autograd-engine` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Create scalar/tensor operations that record a computation graph and compute gradients by reverse-mode automatic differentiation.
3. Represent the important states or data structures from Backpropagation and Optimizers explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Backpropagation and Optimizers**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **TINY AUTOGRAD ENGINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/tiny-autograd-engine
git commit -m "feat(tiny-autograd-engine): complete tiny autograd engine"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 8](../roadmaps/AI.md#phase-8) | [CONTINUE TO AI PHASE 9](../roadmaps/AI.md#phase-9)

<a id="ai-phase-9-project"></a>
### AI PHASE 9 MINI-PROJECT

#### PROJECT: REUSABLE PYTORCH TRAINER

#### SPECIFICATION

Build **Reusable PyTorch Trainer** as a focused exercise for **PyTorch Practice**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a configurable PyTorch trainer with datasets, batches, device handling, checkpoints, early stopping, metrics, and resume.
- Give the user one clear main action and keep all other features secondary.
- Use PyTorch Practice in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- PyTorch and torchvision
- Jupyter Notebook

#### BUILD IT STEP BY STEP

1. Create `reusable-pytorch-trainer` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Build a configurable PyTorch trainer with datasets, batches, device handling, checkpoints, early stopping, metrics, and resume.
3. Use PyTorch Practice in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **PyTorch Practice**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **REUSABLE PYTORCH TRAINER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/reusable-pytorch-trainer
git commit -m "feat(reusable-pytorch-trainer): complete reusable pytorch trainer"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 9](../roadmaps/AI.md#phase-9) | [CONTINUE TO AI PHASE 10](../roadmaps/AI.md#phase-10)

<a id="ai-phase-10-project"></a>
### AI PHASE 10 MINI-PROJECT

#### PROJECT: TRANSFER-LEARNING IMAGE CLASSIFIER

#### SPECIFICATION

Build **Transfer-Learning Image Classifier** as a focused exercise for **CNNs and Computer Vision**. Keep the data and interface small enough to finish, but implement the following behavior:

- Fine-tune an open pretrained image model on a small labeled dataset and inspect confusion matrix plus misclassified images.
- Give the user one clear main action and keep all other features secondary.
- Use CNNs and Computer Vision in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- PyTorch
- Hugging Face datasets

#### BUILD IT STEP BY STEP

1. Create `transfer-learning-image-classifier` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Fine-tune an open pretrained image model on a small labeled dataset and inspect confusion matrix plus misclassified images.
3. Use CNNs and Computer Vision in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **CNNs and Computer Vision**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **TRANSFER-LEARNING IMAGE CLASSIFIER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/transfer-learning-image-classifier
git commit -m "feat(transfer-learning-image-classifier): complete transfer-learning image classifier"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 10](../roadmaps/AI.md#phase-10) | [CONTINUE TO AI PHASE 11](../roadmaps/AI.md#phase-11)

<a id="ai-phase-11-project"></a>
### AI PHASE 11 MINI-PROJECT

#### PROJECT: SEQUENCE SENTIMENT CLASSIFIER

#### SPECIFICATION

Build **Sequence Sentiment Classifier** as a focused exercise for **Sequence Models**. Keep the data and interface small enough to finish, but implement the following behavior:

- Train a small recurrent or LSTM sentiment classifier with padding, masking, checkpoints, and error analysis.
- Give the user one clear main action and keep all other features secondary.
- Use Sequence Models in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- sentence-transformers
- FAISS or Chroma

#### BUILD IT STEP BY STEP

1. Create `sequence-sentiment-classifier` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Train a small recurrent or LSTM sentiment classifier with padding, masking, checkpoints, and error analysis.
3. Use Sequence Models in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Sequence Models**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **SEQUENCE SENTIMENT CLASSIFIER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/sequence-sentiment-classifier
git commit -m "feat(sequence-sentiment-classifier): complete sequence sentiment classifier"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 11](../roadmaps/AI.md#phase-11) | [CONTINUE TO AI PHASE 12](../roadmaps/AI.md#phase-12)

<a id="ai-phase-12-project"></a>
### AI PHASE 12 MINI-PROJECT

#### PROJECT: SEMANTIC SEARCH ENGINE

#### SPECIFICATION

Build **Semantic Search Engine** as a focused exercise for **Embeddings and Representation Learning**. Keep the data and interface small enough to finish, but implement the following behavior:

- Embed documents and queries with an open model, index them in FAISS, return top-k results, and measure retrieval relevance.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Embeddings and Representation Learning explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Python 3.12
- PyTorch
- Jupyter Notebook; implement a tiny educational model

#### BUILD IT STEP BY STEP

1. Create `semantic-search-engine` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Embed documents and queries with an open model, index them in FAISS, return top-k results, and measure retrieval relevance.
3. Represent the important states or data structures from Embeddings and Representation Learning explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Embeddings and Representation Learning**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **SEMANTIC SEARCH ENGINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/semantic-search-engine
git commit -m "feat(semantic-search-engine): complete semantic search engine"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 12](../roadmaps/AI.md#phase-12) | [CONTINUE TO AI PHASE 13](../roadmaps/AI.md#phase-13)

<a id="ai-phase-13-project"></a>
### AI PHASE 13 MINI-PROJECT

#### PROJECT: TINY TRANSFORMER EXPLAINER

#### SPECIFICATION

Build **Tiny Transformer Explainer** as a focused exercise for **Transformers**. Keep the data and interface small enough to finish, but implement the following behavior:

- Implement tokenization, positional information, scaled dot-product attention, masking, and a tiny transformer visualization.
- Give the user one clear main action and keep all other features secondary.
- Use Transformers in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases

#### BUILD IT STEP BY STEP

1. Create `tiny-transformer-explainer` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Implement tokenization, positional information, scaled dot-product attention, masking, and a tiny transformer visualization.
3. Use Transformers in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Transformers**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **TINY TRANSFORMER EXPLAINER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/tiny-transformer-explainer
git commit -m "feat(tiny-transformer-explainer): complete tiny transformer explainer"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 13](../roadmaps/AI.md#phase-13) | [CONTINUE TO AI PHASE 14](../roadmaps/AI.md#phase-14)

<a id="ai-phase-14-project"></a>
### AI PHASE 14 MINI-PROJECT

#### PROJECT: PROMPT EXPERIMENT MATRIX

#### SPECIFICATION

Build **Prompt Experiment Matrix** as a focused exercise for **LLMs and Prompting**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run a fixed prompt dataset through several system/user prompt variants on a small local model and score format, accuracy, and refusal behavior.
- Define one realistic scenario, its boundaries, and the intended reader for the Prompt Experiment Matrix.
- Collect or create the exact inputs needed to apply LLMs and Prompting; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- Ollama with a small open model; store no secrets in code

#### BUILD IT STEP BY STEP

1. Create `prompt-experiment-matrix` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Run a fixed prompt dataset through several system/user prompt variants on a small local model and score format, accuracy, and refusal behavior.
3. Collect or create the exact inputs needed to apply LLMs and Prompting; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **LLMs and Prompting**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **PROMPT EXPERIMENT MATRIX**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/prompt-experiment-matrix
git commit -m "feat(prompt-experiment-matrix): complete prompt experiment matrix"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 14](../roadmaps/AI.md#phase-14) | [CONTINUE TO AI PHASE 15](../roadmaps/AI.md#phase-15)

<a id="ai-phase-15-project"></a>
### AI PHASE 15 MINI-PROJECT

#### PROJECT: CITATION-FIRST RAG

#### SPECIFICATION

Build **Citation-First RAG** as a focused exercise for **Retrieval-Augmented Generation**. Keep the data and interface small enough to finish, but implement the following behavior:

- Chunk local documents, retrieve passages, generate an answer with citations, and refuse when retrieved evidence is too weak.
- Give the user one clear main action and keep all other features secondary.
- Use Retrieval-Augmented Generation in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- sentence-transformers
- FAISS or Chroma and a model API/local model

#### BUILD IT STEP BY STEP

1. Create `citation-first-rag` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Chunk local documents, retrieve passages, generate an answer with citations, and refuse when retrieved evidence is too weak.
3. Use Retrieval-Augmented Generation in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Retrieval-Augmented Generation**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **CITATION-FIRST RAG**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/citation-first-rag
git commit -m "feat(citation-first-rag): complete citation-first rag"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 15](../roadmaps/AI.md#phase-15) | [CONTINUE TO AI PHASE 16](../roadmaps/AI.md#phase-16)

<a id="ai-phase-16-project"></a>
### AI PHASE 16 MINI-PROJECT

#### PROJECT: LORA FINE-TUNING REPORT

#### SPECIFICATION

Build **LoRA Fine-Tuning Report** as a focused exercise for **Fine-Tuning and Alignment**. Keep the data and interface small enough to finish, but implement the following behavior:

- Train a small LoRA adapter on generated examples, compare it with the base model, and record quality, memory, and time.
- Define one realistic scenario, its boundaries, and the intended reader for the LoRA Fine-Tuning Report.
- Collect or create the exact inputs needed to apply Fine-Tuning and Alignment; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- Hugging Face Transformers and PEFT
- PyTorch

#### BUILD IT STEP BY STEP

1. Create `lora-fine-tuning-report` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Train a small LoRA adapter on generated examples, compare it with the base model, and record quality, memory, and time.
3. Collect or create the exact inputs needed to apply Fine-Tuning and Alignment; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Fine-Tuning and Alignment**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **LORA FINE-TUNING REPORT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/lora-fine-tuning-report
git commit -m "docs(lora-fine-tuning-report): complete lora fine-tuning report"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 16](../roadmaps/AI.md#phase-16) | [CONTINUE TO AI PHASE 17](../roadmaps/AI.md#phase-17)

<a id="ai-phase-17-project"></a>
### AI PHASE 17 MINI-PROJECT

#### PROJECT: SAFE TOOL-USING AGENT

#### SPECIFICATION

Build **Safe Tool-Using Agent** as a focused exercise for **Agents and Tool Use**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build an agent with typed allow-listed tools, confirmation for state changes, iteration limits, timeouts, and prompt-injection defenses.
- Give the user one clear main action and keep all other features secondary.
- Use Agents and Tool Use in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Python 3.12
- Ollama with a small open model
- Pydantic and a small allow-listed tool set

#### BUILD IT STEP BY STEP

1. Create `safe-tool-using-agent` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Build an agent with typed allow-listed tools, confirmation for state changes, iteration limits, timeouts, and prompt-injection defenses.
3. Use Agents and Tool Use in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Agents and Tool Use**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **SAFE TOOL-USING AGENT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/safe-tool-using-agent
git commit -m "feat(safe-tool-using-agent): complete safe tool-using agent"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 17](../roadmaps/AI.md#phase-17) | [CONTINUE TO AI PHASE 18](../roadmaps/AI.md#phase-18)

<a id="ai-phase-18-project"></a>
### AI PHASE 18 MINI-PROJECT

#### PROJECT: MODEL EVAL AND MONITORING PIPELINE

#### SPECIFICATION

Build **Model Eval and Monitoring Pipeline** as a focused exercise for **Evaluation, Safety, and MLOps**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run a versioned evaluation set on retrieval, answer quality, safety, latency, and drift and display changes over runs.
- Define a small input format, a transformed output format, and where failed records go.
- Use Evaluation, Safety, and MLOps to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Python 3.12
- pytest and pandas
- MLflow or simple JSON/CSV experiment logs

#### BUILD IT STEP BY STEP

1. Create `model-eval-and-monitoring-pipeline` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Run a versioned evaluation set on retrieval, answer quality, safety, latency, and drift and display changes over runs.
3. Use Evaluation, Safety, and MLOps to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for **Evaluation, Safety, and MLOps**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **MODEL EVAL AND MONITORING PIPELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/model-eval-and-monitoring-pipeline
git commit -m "chore(model-eval-and-monitoring-pipeline): complete model eval and monitoring pipeline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 18](../roadmaps/AI.md#phase-18) | [CONTINUE TO AI PHASE 19](../roadmaps/AI.md#phase-19)

<a id="ai-phase-19-project"></a>
### AI PHASE 19 MINI-PROJECT

#### PROJECT: REPRODUCIBLE AI PORTFOLIO

#### SPECIFICATION

Build **Reproducible AI Portfolio** as a focused exercise for **Portfolio and Projects**. Keep the data and interface small enough to finish, but implement the following behavior:

- Package three best AI artifacts with reproducible commands, fixed seeds, model/data cards, demo inputs, and honest limitations.
- Define one realistic scenario, its boundaries, and the intended reader for the Reproducible AI Portfolio.
- Collect or create the exact inputs needed to apply Portfolio and Projects; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases

#### BUILD IT STEP BY STEP

1. Create `reproducible-ai-portfolio` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Package three best AI artifacts with reproducible commands, fixed seeds, model/data cards, demo inputs, and honest limitations.
3. Collect or create the exact inputs needed to apply Portfolio and Projects; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Portfolio and Projects**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **REPRODUCIBLE AI PORTFOLIO**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/reproducible-ai-portfolio
git commit -m "feat(reproducible-ai-portfolio): complete reproducible ai portfolio"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 19](../roadmaps/AI.md#phase-19) | [CONTINUE TO AI PHASE 20](../roadmaps/AI.md#phase-20)

<a id="ai-phase-20-project"></a>
### AI PHASE 20 MINI-PROJECT

#### PROJECT: ML SYSTEM DESIGN DRILL

#### SPECIFICATION

Build **ML System Design Drill** as a focused exercise for **Interviews**. Keep the data and interface small enough to finish, but implement the following behavior:

- Design an ML system under a timer, covering data, training, serving, evaluation, monitoring, safety, cost, and rollback.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Interviews and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Python 3.12
- Jupyter Notebook
- NumPy, pandas, scikit-learn; add PyTorch only for neural-network phases

#### BUILD IT STEP BY STEP

1. Create `ml-system-design-drill` with `data`, `notebooks`, `src`, `models`, and `tests` folders; create a Python virtual environment.
2. Design an ML system under a timer, covering data, training, serving, evaluation, monitoring, safety, cost, and rollback.
3. Use a metric connected to Interviews and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Interviews**.
7. Run the full notebook or script from a clean session, save the chosen metric, and confirm the same seed gives a comparable result.

### Git Checkpoint

You have completed **ML SYSTEM DESIGN DRILL**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- ai/ml-system-design-drill
git commit -m "feat(ml-system-design-drill): complete ml system design drill"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW AI PHASE 20](../roadmaps/AI.md#phase-20) | [BUILD THE AI MAIN PORTFOLIO PROJECT](#ai-main-portfolio-project)

<a id="ai-main-portfolio-project"></a>
## AI MAIN PORTFOLIO PROJECT

#### PROJECT: LOCAL CAREER KNOWLEDGE ASSISTANT WITH VERIFIABLE ANSWERS

#### DESCRIPTION

A privacy-friendly assistant that helps job seekers search their own notes, compare skill gaps, and receive answers with exact source citations. Models run locally or use small open weights, so the application requires no paid model API.

#### WHO THIS IS FOR

- Job seeker searching personal study notes and job descriptions
- Career mentor reviewing cited skill-gap summaries
- Project reviewer testing answer quality, safety, and reproducibility

#### WHAT USERS CAN DO

- Import local Markdown/text notes and public job descriptions
- Search semantically and answer only from retrieved passages with citations
- Compare a learner profile with role requirements and explain missing skills
- Show evaluation scores, limitations, and a safe refusal when evidence is absent

#### FREE AND OPEN-SOURCE TECH STACK

- Python 3.12, NumPy, pandas, and scikit-learn
- PyTorch and Hugging Face Transformers with open-weight small models
- sentence-transformers and FAISS
- Ollama for local generation
- FastAPI and Gradio
- MLflow or local JSON experiment tracking
- pytest, Ruff, Docker Engine or Podman; no paid API is required

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - AI Thinking:** Define a rule-based keyword-search baseline and a learning-based alternative; specify what improvement means.
2. **Phase 2 - Math for ML:** Implement cosine similarity and gradient-descent examples on tiny vectors before using libraries.
3. **Phase 3 - Python for AI:** Create reproducible Python data loading, cleaning, configuration, seeding, and command-line workflows.
4. **Phase 4 - Classical Machine Learning:** Train simple regression/classification baselines for role matching and compare them with rules.
5. **Phase 5 - Evaluation and Generalization:** Split by source before training, prevent leakage, and report precision, recall, F1, calibration, and error slices.
6. **Phase 6 - Trees and Ensembles:** Compare decision trees and ensembles for skill classification and inspect feature importance carefully.
7. **Phase 7 - Neural Network Basics:** Build a tiny neural network from NumPy and verify its forward output on known values.
8. **Phase 8 - Backpropagation and Optimizers:** Implement backpropagation for the tiny network and visualize loss under two optimizers.
9. **Phase 9 - PyTorch Practice:** Move the model to a reusable PyTorch trainer with checkpoints, configuration, and deterministic evaluation.
10. **Phase 10 - CNNs and Computer Vision:** Add an optional document-image classifier or screenshot tagger using transfer learning and CPU-friendly samples.
11. **Phase 11 - Sequence Models:** Build a small sequence baseline for sentence or job-description classification and inspect failure cases.
12. **Phase 12 - Embeddings and Representation Learning:** Create document embeddings, a FAISS index, semantic search, and a clearly measured retrieval baseline.
13. **Phase 13 - Transformers:** Implement a tiny transformer attention explainer and connect its concepts to the chosen open model.
14. **Phase 14 - LLMs and Prompting:** Create prompt templates for cited answers, compare prompt variants on a fixed question set, and store results.
15. **Phase 15 - Retrieval-Augmented Generation:** Chunk documents, retrieve passages, generate grounded answers, show citations, and refuse when retrieval is weak.
16. **Phase 16 - Fine-Tuning and Alignment:** Fine-tune only a tiny open model or adapter on generated examples; compare it with the unchanged baseline and stop if it adds no value.
17. **Phase 17 - Agents and Tool Use:** Add allow-listed tools for search and profile comparison with typed arguments, confirmation, timeouts, and output validation.
18. **Phase 18 - Evaluation, Safety, and MLOps:** Build automated retrieval, answer, safety, latency, and drift checks; log model, data, prompt, and result versions.
19. **PHASE 19 - Portfolio and Projects (REQUIRED CAPSTONE-COMPLETION STEP):** Polish the local Gradio app, add model/data cards, select an open-source license, and include honest limitations in the interface.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Practice an ML system-design review covering data, serving, evaluation, monitoring, privacy, cost, and rollback.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `local-career-knowledge-assistant` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: problem framing, dataset, baseline model, and reproducible evaluation split**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "feat(career-assistant): establish data and baseline evaluation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: trained models, error analysis, embeddings, retrieval, and grounded generation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "feat(career-assistant): build evaluated retrieval pipeline"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: agent workflow, serving layer, observability, and safety controls**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "feat(career-assistant): integrate assistant service and safeguards"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: adversarial evaluation, monitoring, optimization, and reproducibility checks**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "test(career-assistant): verify quality safety and reproducibility"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: model cards, limitations, demo data, and local portfolio application**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-career-knowledge-assistant
git commit -m "docs(career-assistant): complete verifiable assistant release"
git tag -a career-assistant-v1.0.0 -m "First complete career-assistant release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Download the chosen small open model through Ollama and run the API, vector index, and Gradio UI locally.
2. Create a CPU-only Docker image and confirm it starts without any paid API key.
3. Deploy a lightweight demo using a tiny model on a Render free web service if it fits current memory limits; allow cold starts and keep the local version canonical.
4. If live inference is too heavy, publish a static interactive sample with precomputed queries to GitHub Pages instead of paying for compute.
5. Use free GitHub Actions on the public repository for tests, linting, and a small evaluation set; do not download a large model in CI.
6. Test every public sample for private data, prompt injection, unsupported claims, and working citations before sharing it.

> **MAIN PROJECT NAVIGATION:** [REVIEW AI PHASE 19](../roadmaps/AI.md#phase-19) | [REVIEW AI PHASE 20](../roadmaps/AI.md#phase-20) | [RETURN TO THE AI ROADMAP](../roadmaps/AI.md#phase-index)

## Odoo Engineering

Study this roadmap first: [ODOO.md](../roadmaps/ODOO.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="odoo-phase-1-project"></a>
### ODOO PHASE 1 MINI-PROJECT

#### PROJECT: ERP PROCESS MAP

#### SPECIFICATION

Build **ERP Process Map** as a focused exercise for **ERP Thinking**. Keep the data and interface small enough to finish, but implement the following behavior:

- Map a purchase-to-stock or class-registration process with actors, records, approvals, reports, pain points, and the Odoo apps that own each step.
- Define one realistic scenario, its boundaries, and the intended reader for the ERP Process Map.
- Collect or create the exact inputs needed to apply ERP Thinking; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `erp_process_map` with a manifest, models, security, views, data, and tests folders.
2. Map a purchase-to-stock or class-registration process with actors, records, approvals, reports, pain points, and the Odoo apps that own each step.
3. Collect or create the exact inputs needed to apply ERP Thinking; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **ERP Thinking**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **ERP PROCESS MAP**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/erp_process_map
git commit -m "docs(erp-process-map): complete erp process map"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 1](../roadmaps/ODOO.md#phase-1) | [CONTINUE TO ODOO PHASE 2](../roadmaps/ODOO.md#phase-2)

<a id="odoo-phase-2-project"></a>
### ODOO PHASE 2 MINI-PROJECT

#### PROJECT: REQUEST-TO-DATABASE TRACE

#### SPECIFICATION

Build **Request-to-Database Trace** as a focused exercise for **Three-Tier Architecture**. Keep the data and interface small enough to finish, but implement the following behavior:

- Trace one Odoo screen load from browser request through controller, model/ORM query, PostgreSQL, view rendering, and response.
- Model at least three related entities with primary keys, foreign keys, and meaningful constraints.
- Use Three-Tier Architecture to protect data correctness and answer at least three useful questions.
- Include repeatable schema creation and seed data with normal and invalid examples.
- Prove that one rejected write and one multi-step successful operation behave correctly.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `request_to_database_trace` with a manifest, models, security, views, data, and tests folders.
2. Trace one Odoo screen load from browser request through controller, model/ORM query, PostgreSQL, view rendering, and response.
3. Use Three-Tier Architecture to protect data correctness and answer at least three useful questions.
4. Include repeatable schema creation and seed data with normal and invalid examples.
5. Prove that one rejected write and one multi-step successful operation behave correctly.
6. Add one normal example and one edge or failure example specifically for **Three-Tier Architecture**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **REQUEST-TO-DATABASE TRACE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/request_to_database_trace
git commit -m "feat(request-to-database-trace): complete request-to-database trace"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 2](../roadmaps/ODOO.md#phase-2) | [CONTINUE TO ODOO PHASE 3](../roadmaps/ODOO.md#phase-3)

<a id="odoo-phase-3-project"></a>
### ODOO PHASE 3 MINI-PROJECT

#### PROJECT: REPRODUCIBLE ODOO DEV STACK

#### SPECIFICATION

Build **Reproducible Odoo Dev Stack** as a focused exercise for **Development Environment**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a repeatable Odoo Community and PostgreSQL local environment with addons path, config, demo database, logs, and one-command start.
- Give the user one clear main action and keep all other features secondary.
- Use Development Environment in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `reproducible_odoo_dev_stack` with a manifest, models, security, views, data, and tests folders.
2. Create a repeatable Odoo Community and PostgreSQL local environment with addons path, config, demo database, logs, and one-command start.
3. Use Development Environment in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Development Environment**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **REPRODUCIBLE ODOO DEV STACK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/reproducible_odoo_dev_stack
git commit -m "chore(reproducible-odoo-dev-stack): complete reproducible odoo dev stack"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 3](../roadmaps/ODOO.md#phase-3) | [CONTINUE TO ODOO PHASE 4](../roadmaps/ODOO.md#phase-4)

<a id="odoo-phase-4-project"></a>
### ODOO PHASE 4 MINI-PROJECT

#### PROJECT: MINIMAL TODO ADDON

#### SPECIFICATION

Build **Minimal Todo Addon** as a focused exercise for **Module Anatomy**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build an installable todo addon with manifest, model, ACL, list/form/search views, action, menu, demo record, and upgrade command.
- Give the user one clear main action and keep all other features secondary.
- Use Module Anatomy in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `minimal_todo_addon` with a manifest, models, security, views, data, and tests folders.
2. Build an installable todo addon with manifest, model, ACL, list/form/search views, action, menu, demo record, and upgrade command.
3. Use Module Anatomy in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Module Anatomy**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **MINIMAL TODO ADDON**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/minimal_todo_addon
git commit -m "feat(minimal-todo-addon): complete minimal todo addon"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 4](../roadmaps/ODOO.md#phase-4) | [CONTINUE TO ODOO PHASE 5](../roadmaps/ODOO.md#phase-5)

<a id="odoo-phase-5-project"></a>
### ODOO PHASE 5 MINI-PROJECT

#### PROJECT: LIBRARY DOMAIN MODELS

#### SPECIFICATION

Build **Library Domain Models** as a focused exercise for **Models and Fields**. Keep the data and interface small enough to finish, but implement the following behavior:

- Model library books, authors, copies, members, and loans with correct field types, relationships, constraints, computed fields, and defaults.
- Give the user one clear main action and keep all other features secondary.
- Use Models and Fields in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `library_domain_models` with a manifest, models, security, views, data, and tests folders.
2. Model library books, authors, copies, members, and loans with correct field types, relationships, constraints, computed fields, and defaults.
3. Use Models and Fields in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Models and Fields**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **LIBRARY DOMAIN MODELS**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/library_domain_models
git commit -m "feat(library-domain-models): complete library domain models"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 5](../roadmaps/ODOO.md#phase-5) | [CONTINUE TO ODOO PHASE 6](../roadmaps/ODOO.md#phase-6)

<a id="odoo-phase-6-project"></a>
### ODOO PHASE 6 MINI-PROJECT

#### PROJECT: RECORDSET QUERY EXPLORER

#### SPECIFICATION

Build **Recordset Query Explorer** as a focused exercise for **ORM Queries**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a query explorer that demonstrates search domains, mapped, filtered, sorted, grouped reads, batch updates, and recordset behavior.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by ORM Queries, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `recordset_query_explorer` with a manifest, models, security, views, data, and tests folders.
2. Create a query explorer that demonstrates search domains, mapped, filtered, sorted, grouped reads, batch updates, and recordset behavior.
3. Show the part of the data or system explained by ORM Queries, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for **ORM Queries**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **RECORDSET QUERY EXPLORER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/recordset_query_explorer
git commit -m "feat(recordset-query-explorer): complete recordset query explorer"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 6](../roadmaps/ODOO.md#phase-6) | [CONTINUE TO ODOO PHASE 7](../roadmaps/ODOO.md#phase-7)

<a id="odoo-phase-7-project"></a>
### ODOO PHASE 7 MINI-PROJECT

#### PROJECT: MULTI-COMPANY ACCESS LAB

#### SPECIFICATION

Build **Multi-company Access Lab** as a focused exercise for **Access Control and Record Rules**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create receptionist and manager groups, ACLs, record rules, multi-company records, and automated allowed/denied access tests.
- Give the user one clear main action and keep all other features secondary.
- Use Access Control and Record Rules in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `multi_company_access_lab` with a manifest, models, security, views, data, and tests folders.
2. Create receptionist and manager groups, ACLs, record rules, multi-company records, and automated allowed/denied access tests.
3. Use Access Control and Record Rules in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Access Control and Record Rules**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **MULTI-COMPANY ACCESS LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/multi_company_access_lab
git commit -m "feat(multi-company-access-lab): complete multi-company access lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 7](../roadmaps/ODOO.md#phase-7) | [CONTINUE TO ODOO PHASE 8](../roadmaps/ODOO.md#phase-8)

<a id="odoo-phase-8-project"></a>
### ODOO PHASE 8 MINI-PROJECT

#### PROJECT: INHERITED LIBRARY VIEWS

#### SPECIFICATION

Build **Inherited Library Views** as a focused exercise for **XML Views**. Keep the data and interface small enough to finish, but implement the following behavior:

- Extend library list, form, search, kanban, and calendar views through XML inheritance without replacing the original view.
- Give the user one clear main action and keep all other features secondary.
- Use XML Views in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `inherited_library_views` with a manifest, models, security, views, data, and tests folders.
2. Extend library list, form, search, kanban, and calendar views through XML inheritance without replacing the original view.
3. Use XML Views in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **XML Views**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **INHERITED LIBRARY VIEWS**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/inherited_library_views
git commit -m "feat(inherited-library-views): complete inherited library views"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 8](../roadmaps/ODOO.md#phase-8) | [CONTINUE TO ODOO PHASE 9](../roadmaps/ODOO.md#phase-9)

<a id="odoo-phase-9-project"></a>
### ODOO PHASE 9 MINI-PROJECT

#### PROJECT: ROLE-AWARE NAVIGATION MODULE

#### SPECIFICATION

Build **Role-Aware Navigation Module** as a focused exercise for **Actions and Menus**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create role-aware menus, actions, domains, contexts, smart buttons, filters, and navigation while keeping authorization server-side.
- Give the user one clear main action and keep all other features secondary.
- Use Actions and Menus in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `role_aware_navigation_module` with a manifest, models, security, views, data, and tests folders.
2. Create role-aware menus, actions, domains, contexts, smart buttons, filters, and navigation while keeping authorization server-side.
3. Use Actions and Menus in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Actions and Menus**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **ROLE-AWARE NAVIGATION MODULE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/role_aware_navigation_module
git commit -m "feat(role-aware-navigation-module): complete role-aware navigation module"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 9](../roadmaps/ODOO.md#phase-9) | [CONTINUE TO ODOO PHASE 10](../roadmaps/ODOO.md#phase-10)

<a id="odoo-phase-10-project"></a>
### ODOO PHASE 10 MINI-PROJECT

#### PROJECT: VALIDATED ORDER WORKFLOW

#### SPECIFICATION

Build **Validated Order Workflow** as a focused exercise for **Business Logic**. Keep the data and interface small enough to finish, but implement the following behavior:

- Implement a validated order workflow with draft, confirm, cancel, and done states plus capacity, total, and transition rules.
- Define a small input format, a transformed output format, and where failed records go.
- Use Business Logic to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `validated_order_workflow` with a manifest, models, security, views, data, and tests folders.
2. Implement a validated order workflow with draft, confirm, cancel, and done states plus capacity, total, and transition rules.
3. Use Business Logic to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for **Business Logic**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **VALIDATED ORDER WORKFLOW**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/validated_order_workflow
git commit -m "feat(validated-order-workflow): complete validated order workflow"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 10](../roadmaps/ODOO.md#phase-10) | [CONTINUE TO ODOO PHASE 11](../roadmaps/ODOO.md#phase-11)

<a id="odoo-phase-11-project"></a>
### ODOO PHASE 11 MINI-PROJECT

#### PROJECT: SALE ORDER EXTENSION

#### SPECIFICATION

Build **Sale Order Extension** as a focused exercise for **Inheritance**. Keep the data and interface small enough to finish, but implement the following behavior:

- Extend sale.order with an approval field, inherited views, business rule, and upgrade-safe behavior without editing Odoo core.
- Give the user one clear main action and keep all other features secondary.
- Use Inheritance in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `sale_order_extension` with a manifest, models, security, views, data, and tests folders.
2. Extend sale.order with an approval field, inherited views, business rule, and upgrade-safe behavior without editing Odoo core.
3. Use Inheritance in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Inheritance**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **SALE ORDER EXTENSION**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/sale_order_extension
git commit -m "feat(sale-order-extension): complete sale order extension"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 11](../roadmaps/ODOO.md#phase-11) | [CONTINUE TO ODOO PHASE 12](../roadmaps/ODOO.md#phase-12)

<a id="odoo-phase-12-project"></a>
### ODOO PHASE 12 MINI-PROJECT

#### PROJECT: BULK UPDATE WIZARD

#### SPECIFICATION

Build **Bulk Update Wizard** as a focused exercise for **Wizards and Transient Models**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a transient wizard that previews and confirms a bulk update, respects access rules, reports skipped records, and leaves an audit note.
- Give the user one clear main action and keep all other features secondary.
- Use Wizards and Transient Models in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `bulk_update_wizard` with a manifest, models, security, views, data, and tests folders.
2. Build a transient wizard that previews and confirms a bulk update, respects access rules, reports skipped records, and leaves an audit note.
3. Use Wizards and Transient Models in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Wizards and Transient Models**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **BULK UPDATE WIZARD**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/bulk_update_wizard
git commit -m "feat(bulk-update-wizard): complete bulk update wizard"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 12](../roadmaps/ODOO.md#phase-12) | [CONTINUE TO ODOO PHASE 13](../roadmaps/ODOO.md#phase-13)

<a id="odoo-phase-13-project"></a>
### ODOO PHASE 13 MINI-PROJECT

#### PROJECT: IDEMPOTENT WEBHOOK MODULE

#### SPECIFICATION

Build **Idempotent Webhook Module** as a focused exercise for **Controllers and Webhooks**. Keep the data and interface small enough to finish, but implement the following behavior:

- Receive a signed webhook, validate timestamp/raw body, deduplicate event ID, update business state once, and return quickly.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Controllers and Webhooks in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `idempotent_webhook_module` with a manifest, models, security, views, data, and tests folders.
2. Receive a signed webhook, validate timestamp/raw body, deduplicate event ID, update business state once, and return quickly.
3. Use Controllers and Webhooks in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Controllers and Webhooks**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **IDEMPOTENT WEBHOOK MODULE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/idempotent_webhook_module
git commit -m "feat(idempotent-webhook-module): complete idempotent webhook module"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 13](../roadmaps/ODOO.md#phase-13) | [CONTINUE TO ODOO PHASE 14](../roadmaps/ODOO.md#phase-14)

<a id="odoo-phase-14-project"></a>
### ODOO PHASE 14 MINI-PROJECT

#### PROJECT: EXTERNAL SYNC CLIENT

#### SPECIFICATION

Build **External Sync Client** as a focused exercise for **External APIs**. Keep the data and interface small enough to finish, but implement the following behavior:

- Synchronize selected records with a free local mock API using configuration, timeout, retry, pagination, mapping, and graceful failure.
- Define a small input format, a transformed output format, and where failed records go.
- Use External APIs to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `external_sync_client` with a manifest, models, security, views, data, and tests folders.
2. Synchronize selected records with a free local mock API using configuration, timeout, retry, pagination, mapping, and graceful failure.
3. Use External APIs to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for **External APIs**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **EXTERNAL SYNC CLIENT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/external_sync_client
git commit -m "feat(external-sync-client): complete external sync client"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 14](../roadmaps/ODOO.md#phase-14) | [CONTINUE TO ODOO PHASE 15](../roadmaps/ODOO.md#phase-15)

<a id="odoo-phase-15-project"></a>
### ODOO PHASE 15 MINI-PROJECT

#### PROJECT: PAYMENT SANDBOX INTEGRATION

#### SPECIFICATION

Build **Payment Sandbox Integration** as a focused exercise for **Integrations and Payments**. Keep the data and interface small enough to finish, but implement the following behavior:

- Integrate only a payment provider sandbox or offline reference flow with initiation, callback verification, idempotency, refund state, and no card storage.
- Give the user one clear main action and keep all other features secondary.
- Use Integrations and Payments in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `payment_sandbox_integration` with a manifest, models, security, views, data, and tests folders.
2. Integrate only a payment provider sandbox or offline reference flow with initiation, callback verification, idempotency, refund state, and no card storage.
3. Use Integrations and Payments in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Integrations and Payments**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **PAYMENT SANDBOX INTEGRATION**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/payment_sandbox_integration
git commit -m "feat(payment-sandbox-integration): complete payment sandbox integration"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 15](../roadmaps/ODOO.md#phase-15) | [CONTINUE TO ODOO PHASE 16](../roadmaps/ODOO.md#phase-16)

<a id="odoo-phase-16-project"></a>
### ODOO PHASE 16 MINI-PROJECT

#### PROJECT: OWL KPI WIDGET

#### SPECIFICATION

Build **OWL KPI Widget** as a focused exercise for **OWL Frontend**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build an OWL KPI widget that calls an authorized endpoint and shows loading, value, empty, error, denied, and refresh states.
- Give the user one clear main action and keep all other features secondary.
- Use OWL Frontend in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `owl_kpi_widget` with a manifest, models, security, views, data, and tests folders.
2. Build an OWL KPI widget that calls an authorized endpoint and shows loading, value, empty, error, denied, and refresh states.
3. Use OWL Frontend in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **OWL Frontend**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **OWL KPI WIDGET**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/owl_kpi_widget
git commit -m "feat(owl-kpi-widget): complete owl kpi widget"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 16](../roadmaps/ODOO.md#phase-16) | [CONTINUE TO ODOO PHASE 17](../roadmaps/ODOO.md#phase-17)

<a id="odoo-phase-17-project"></a>
### ODOO PHASE 17 MINI-PROJECT

#### PROJECT: ORM QUERY TUNING REPORT

#### SPECIFICATION

Build **ORM Query Tuning Report** as a focused exercise for **PostgreSQL for Odoo**. Keep the data and interface small enough to finish, but implement the following behavior:

- Measure an Odoo list/report query, inspect SQL/EXPLAIN, remove an N+1 pattern, add a justified index, and compare before/after.
- Define one realistic scenario, its boundaries, and the intended reader for the ORM Query Tuning Report.
- Collect or create the exact inputs needed to apply PostgreSQL for Odoo; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `orm_query_tuning_report` with a manifest, models, security, views, data, and tests folders.
2. Measure an Odoo list/report query, inspect SQL/EXPLAIN, remove an N+1 pattern, add a justified index, and compare before/after.
3. Collect or create the exact inputs needed to apply PostgreSQL for Odoo; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **PostgreSQL for Odoo**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **ORM QUERY TUNING REPORT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/orm_query_tuning_report
git commit -m "docs(orm-query-tuning-report): complete orm query tuning report"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 17](../roadmaps/ODOO.md#phase-17) | [CONTINUE TO ODOO PHASE 18](../roadmaps/ODOO.md#phase-18)

<a id="odoo-phase-18-project"></a>
### ODOO PHASE 18 MINI-PROJECT

#### PROJECT: UPGRADE-SAFE TEST SUITE

#### SPECIFICATION

Build **Upgrade-Safe Test Suite** as a focused exercise for **Testing, Debugging, and Upgrades**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create install, model, security, workflow, controller, and migration tests that pass before and after an addon upgrade.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Testing, Debugging, and Upgrades and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `upgrade_safe_test_suite` with a manifest, models, security, views, data, and tests folders.
2. Create install, model, security, workflow, controller, and migration tests that pass before and after an addon upgrade.
3. Use a metric connected to Testing, Debugging, and Upgrades and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Testing, Debugging, and Upgrades**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **UPGRADE-SAFE TEST SUITE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/upgrade_safe_test_suite
git commit -m "test(upgrade-safe-test-suite): complete upgrade-safe test suite"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 18](../roadmaps/ODOO.md#phase-18) | [CONTINUE TO ODOO PHASE 19](../roadmaps/ODOO.md#phase-19)

<a id="odoo-phase-19-project"></a>
### ODOO PHASE 19 MINI-PROJECT

#### PROJECT: PORTFOLIO-READY BUSINESS MODULE

#### SPECIFICATION

Build **Portfolio-Ready Business Module** as a focused exercise for **Portfolio Modules**. Keep the data and interface small enough to finish, but implement the following behavior:

- Polish one business addon with demo data, tests, access rules, reports, translations-ready strings, screenshots, metadata, and license.
- Define one realistic scenario, its boundaries, and the intended reader for the Portfolio-Ready Business Module.
- Collect or create the exact inputs needed to apply Portfolio Modules; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `portfolio_ready_business_module` with a manifest, models, security, views, data, and tests folders.
2. Polish one business addon with demo data, tests, access rules, reports, translations-ready strings, screenshots, metadata, and license.
3. Collect or create the exact inputs needed to apply Portfolio Modules; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Portfolio Modules**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **PORTFOLIO-READY BUSINESS MODULE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/portfolio_ready_business_module
git commit -m "feat(portfolio-ready-business-module): complete portfolio-ready business module"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 19](../roadmaps/ODOO.md#phase-19) | [CONTINUE TO ODOO PHASE 20](../roadmaps/ODOO.md#phase-20)

<a id="odoo-phase-20-project"></a>
### ODOO PHASE 20 MINI-PROJECT

#### PROJECT: TIMED ODOO DEBUG DRILL

#### SPECIFICATION

Build **Timed Odoo Debug Drill** as a focused exercise for **Interviews**. Keep the data and interface small enough to finish, but implement the following behavior:

- Debug a prepared Odoo failure under a timer using logs, developer mode, shell, SQL, tests, and a spoken root-cause explanation.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Interviews and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Odoo 18 Community
- Python 3.12 and PostgreSQL
- XML views; add JavaScript/OWL only for frontend widget phases

#### BUILD IT STEP BY STEP

1. Create an Odoo addon named `timed_odoo_debug_drill` with a manifest, models, security, views, data, and tests folders.
2. Debug a prepared Odoo failure under a timer using logs, developer mode, shell, SQL, tests, and a spoken root-cause explanation.
3. Use a metric connected to Interviews and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Interviews**.
7. Upgrade the addon in a fresh local test database, complete the normal workflow, and run its Odoo tests.

### Git Checkpoint

You have completed **TIMED ODOO DEBUG DRILL**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- odoo/timed_odoo_debug_drill
git commit -m "fix(timed-odoo-debug-drill): complete timed odoo debug drill"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW ODOO PHASE 20](../roadmaps/ODOO.md#phase-20) | [BUILD THE ODOO MAIN PORTFOLIO PROJECT](#odoo-main-portfolio-project)

<a id="odoo-main-portfolio-project"></a>
## ODOO MAIN PORTFOLIO PROJECT

#### PROJECT: COMMUNITY CENTER OPERATIONS SUITE

#### DESCRIPTION

An Odoo Community addon suite for managing members, rooms, classes, registrations, payments recorded offline, volunteer assignments, and operational reports for a nonprofit community center.

#### WHO THIS IS FOR

- Receptionist registering members and class bookings
- Program manager planning rooms, instructors, and attendance
- Finance or volunteer coordinator reviewing payments and assignments

#### WHAT USERS CAN DO

- Manage members, classes, rooms, sessions, registrations, volunteers, and attendance
- Prevent capacity, schedule, access, and state-transition errors
- Import data, integrate one free external service, and receive signed webhooks
- Show role-aware menus, reports, reminders, and a small KPI dashboard

#### FREE AND OPEN-SOURCE TECH STACK

- Odoo 18 Community Edition
- Python 3.12 and PostgreSQL
- XML views and QWeb reports
- OWL with JavaScript only for one dashboard widget
- Odoo tests, Ruff, and Git
- Docker Engine or Podman with Compose; every required application component is free and open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - ERP Thinking:** Map the center's member-to-class and room-booking processes, actors, pain points, and success measures.
2. **Phase 2 - Three-Tier Architecture:** Trace one browser request through controller, ORM, PostgreSQL, and response so every layer has a clear job.
3. **Phase 3 - Development Environment:** Create a reproducible local Odoo/PostgreSQL environment with demo configuration and no committed secrets.
4. **Phase 4 - Module Anatomy:** Create installable `community_center_core` and companion addon manifests with dependencies, data files, and icons.
5. **Phase 5 - Models and Fields:** Model members, classes, sessions, rooms, registrations, volunteers, and attendance with correct field types and constraints.
6. **Phase 6 - ORM Queries:** Implement filtered recordset queries, computed values, grouped counts, and batch-safe methods without N+1 loops.
7. **Phase 7 - Access Control and Record Rules:** Create groups, ACLs, record rules, multi-company tests, and separate receptionist, manager, and coordinator access.
8. **Phase 8 - XML Views:** Build list, form, search, kanban, calendar, and inherited views with clear labels and accessible status information.
9. **Phase 9 - Actions and Menus:** Add role-aware menus, window actions, smart buttons, filters, and navigation that never substitutes for real access rules.
10. **Phase 10 - Business Logic:** Implement capacity checks, schedule-conflict validation, registration states, attendance, reminders, and safe automated actions.
11. **Phase 11 - Inheritance:** Extend Contacts and Calendar through Odoo inheritance without copying core models or views.
12. **Phase 12 - Wizards and Transient Models:** Add a transient wizard for bulk registration, attendance entry, or schedule change with confirmation and validation.
13. **Phase 13 - Controllers and Webhooks:** Create a small public registration controller and a signed, idempotent webhook endpoint with replay protection.
14. **Phase 14 - External APIs:** Integrate one free public service such as geocoding or holidays with timeouts, retries, configuration, and graceful failure.
15. **Phase 15 - Integrations and Payments:** Record offline payment references or integrate a provider sandbox only; make callbacks idempotent and never store card data.
16. **Phase 16 - OWL Frontend:** Build one OWL KPI widget with loading, empty, error, access-denied, and refresh states.
17. **Phase 17 - PostgreSQL for Odoo:** Add indexes for measured slow queries, batch ORM work, inspect EXPLAIN output, and remove one verified N+1 query.
18. **Phase 18 - Testing, Debugging, and Upgrades:** Write model, security, workflow, controller, migration, and upgrade tests; verify install, update, and uninstall in a disposable database.
19. **PHASE 19 - Portfolio Modules (REQUIRED CAPSTONE-COMPLETION STEP):** Polish demo data, reports, translations-ready strings, screenshots, module metadata, and an open-source license.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Run a timed bug investigation and explain the request path, ORM behavior, security, tests, upgrade plan, and trade-offs.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `community_center_operations` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: installable addon scaffold, process map, models, ACLs, and menus**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "feat(community-center): establish installable operations addon"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: business rules, relationships, workflows, views, and record security**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "feat(community-center): implement secure operational workflows"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: reporting, scheduled work, integrations, web endpoints, and OWL interface**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "feat(community-center): integrate reporting automation and portal"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: tests, profiling, upgrades, deployment, backup, and observability**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "test(community-center): verify addon upgrade and operations"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: demo records, reports, metadata, screenshots, and release documentation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- community_center_operations
git commit -m "docs(community-center): complete Odoo operations suite release"
git tag -a community-center-v1.0.0 -m "First complete community-center release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Build local Odoo and PostgreSQL images with Docker Compose, named volumes, health checks, and environment-based secrets.
2. Create a fresh database, install the addons from the command line, load demo data, and run all tests.
3. Put Nginx or Caddy in front of Odoo for a local production-like deployment with generated development TLS.
4. For a guaranteed free showcase, record a short sanitized demo and publish its static project page to GitHub Pages.
5. A live public Odoo server needs persistent compute and storage; use only a free VM you already control, never enter billing details for this project, and keep the Docker deployment portable.
6. Back up the PostgreSQL volume, restore it into a new local environment, and verify one complete registration workflow after restoration.

> **MAIN PROJECT NAVIGATION:** [REVIEW ODOO PHASE 19](../roadmaps/ODOO.md#phase-19) | [REVIEW ODOO PHASE 20](../roadmaps/ODOO.md#phase-20) | [RETURN TO THE ODOO ROADMAP](../roadmaps/ODOO.md#phase-index)

## Web Development

Study this roadmap first: [Web.md](../roadmaps/Web.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="web-phase-1-project"></a>
### WEB PHASE 1 MINI-PROJECT

#### PROJECT: CLIENT-SERVER REQUEST EXPLORER

#### SPECIFICATION

Inspect one ordinary web request and identify the URL, method, request headers, status code, response headers, and response body.

#### TECH STACK

- Browser Developer Tools
- curl
- No application code required

#### BUILD IT STEP BY STEP

1. Open a simple website and press F12 to open Developer Tools.
2. Open the Network tab, reload the page, and select the main document request.
3. Write down the request URL and method, then the response status and content type.
4. Run `curl -I https://example.com` and find the same kind of response information.
5. Change the URL to a missing page and compare the successful and failed status codes.

### Git Checkpoint

You have completed **CLIENT-SERVER REQUEST EXPLORER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/client-server-request-explorer
git commit -m "feat(client-server-request-explorer): complete client-server request explorer"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 1](../roadmaps/Web.md#phase-1) | [CONTINUE TO WEB PHASE 2](../roadmaps/Web.md#phase-2)

<a id="web-phase-2-project"></a>
### WEB PHASE 2 MINI-PROJECT

#### PROJECT: ACCESSIBLE PROFILE PAGE

#### SPECIFICATION

Build a one-page personal profile with a header, navigation, main biography, skills list, contact form, and footer. It must work with a keyboard and use meaningful HTML elements.

#### TECH STACK

- HTML5
- VSCodium or any text editor
- A modern browser; no framework and no JavaScript

#### BUILD IT STEP BY STEP

1. Create a folder named `profile-page` and add `index.html`.
2. Add `header`, `nav`, `main`, `section`, and `footer` elements in that order.
3. Add a heading, short biography, skills list, profile image with alternative text, and contact links.
4. Add a contact form; connect every input to a visible `label`.
5. Open the file in a browser and press Tab through every link and form field to confirm the order makes sense.

### Git Checkpoint

You have completed **ACCESSIBLE PROFILE PAGE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/profile-page
git commit -m "feat(accessible-profile-page): complete accessible profile page"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 2](../roadmaps/Web.md#phase-2) | [CONTINUE TO WEB PHASE 3](../roadmaps/Web.md#phase-3)

<a id="web-phase-3-project"></a>
### WEB PHASE 3 MINI-PROJECT

#### PROJECT: DESIGN TOKEN STYLE GUIDE

#### SPECIFICATION

Build a small style-guide page showing colors, type sizes, spacing, buttons, inputs, and cards. Store repeated design values as CSS custom properties.

#### TECH STACK

- HTML5 and CSS3
- VSCodium or any text editor
- CSS custom properties; no framework and no JavaScript

#### BUILD IT STEP BY STEP

1. Create `index.html` and `styles.css` in a `style-guide` folder.
2. In `:root`, define variables for colors, spacing, font sizes, borders, and shadows.
3. Add HTML examples for headings, body text, buttons, form fields, and cards.
4. Style every example by reusing the variables instead of repeating raw values.
5. Change one color and one spacing variable and confirm all related components update together.

### Git Checkpoint

You have completed **DESIGN TOKEN STYLE GUIDE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/design-token-style-guide
git commit -m "docs(design-token-style-guide): complete design token style guide"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 3](../roadmaps/Web.md#phase-3) | [CONTINUE TO WEB PHASE 4](../roadmaps/Web.md#phase-4)

<a id="web-phase-4-project"></a>
### WEB PHASE 4 MINI-PROJECT

#### PROJECT: RESPONSIVE PRODUCT LANDING

#### SPECIFICATION

Build one product landing page with a header, hero area, product benefits, three feature cards, a call-to-action, and a footer. It must fit phones from 320px wide, tablets, and desktop screens without horizontal scrolling.

#### TECH STACK

- HTML5 and CSS3
- VSCodium or any text editor
- Flexbox, CSS Grid, and media queries; no framework and no JavaScript

#### BUILD IT STEP BY STEP

1. Create a `product-landing` folder with `index.html`, `styles.css`, and an `images` folder.
2. Write the page sections in HTML first: header, hero, benefits, feature cards, call-to-action, and footer.
3. Start the CSS at phone size: use one column, readable text, full-width buttons, and images that never overflow.
4. Use Flexbox for one-dimensional rows and CSS Grid for the feature-card layout.
5. Add a breakpoint near `768px` so the hero and cards use more columns when space is available.
6. Test at 320px, 768px, and a wide desktop size. Fix any overlap, tiny text, or horizontal scroll.

### Git Checkpoint

You have completed **RESPONSIVE PRODUCT LANDING**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/product-landing
git commit -m "feat(responsive-product-landing): complete responsive product landing"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 4](../roadmaps/Web.md#phase-4) | [CONTINUE TO WEB PHASE 5](../roadmaps/Web.md#phase-5)

<a id="web-phase-5-project"></a>
### WEB PHASE 5 MINI-PROJECT

#### PROJECT: INTERACTIVE EXPENSE TRACKER

#### SPECIFICATION

Build an expense tracker where a user can add an amount, category, and date; see all expenses; see the total; and delete an item. Invalid or empty amounts must show a clear message.

#### TECH STACK

- HTML5, CSS3, and JavaScript
- VSCodium or any text editor
- Browser localStorage; no framework

#### BUILD IT STEP BY STEP

1. Create `index.html`, `styles.css`, and `app.js`.
2. Build the form and an empty list area in HTML.
3. In JavaScript, store expenses in an array of objects and write one function that redraws the list.
4. On form submit, validate the fields, add the expense, update the total, and clear the form.
5. Add a Delete button to each row and save the array in `localStorage`.
6. Reload the page and confirm saved expenses return; also try an empty and a negative amount.

### Git Checkpoint

You have completed **INTERACTIVE EXPENSE TRACKER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/interactive-expense-tracker
git commit -m "feat(interactive-expense-tracker): complete interactive expense tracker"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 5](../roadmaps/Web.md#phase-5) | [CONTINUE TO WEB PHASE 6](../roadmaps/Web.md#phase-6)

<a id="web-phase-6-project"></a>
### WEB PHASE 6 MINI-PROJECT

#### PROJECT: OFFLINE-CAPABLE NOTES APP

#### SPECIFICATION

Build a notes app that can create, edit, delete, and search notes. Previously opened notes must remain available after the network is disconnected.

#### TECH STACK

- HTML5, CSS3, and JavaScript modules
- Vite
- Service Worker, Cache API, and localStorage

#### BUILD IT STEP BY STEP

1. Create the project with `npm create vite@latest notes-app -- --template vanilla` and install it.
2. Build the note form, search box, list, empty state, and offline message.
3. Save notes locally and render them again after a page refresh.
4. Add a service worker that caches the application shell during installation.
5. Switch the browser Network panel to Offline and confirm the app still opens.
6. Run `npm run build` and fix any build errors.

### Git Checkpoint

You have completed **OFFLINE-CAPABLE NOTES APP**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/notes-app
git commit -m "feat(offline-capable-notes-app): complete offline-capable notes app"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 6](../roadmaps/Web.md#phase-6) | [CONTINUE TO WEB PHASE 7](../roadmaps/Web.md#phase-7)

<a id="web-phase-7-project"></a>
### WEB PHASE 7 MINI-PROJECT

#### PROJECT: TYPED API CLIENT

#### SPECIFICATION

Build a typed client that loads a list from a public or mock JSON API, validates the received data, and shows loading, success, empty, and error states.

#### TECH STACK

- TypeScript
- Vite
- Fetch API and Vitest

#### BUILD IT STEP BY STEP

1. Create a TypeScript Vite project and install its packages.
2. Define TypeScript types for the API item and error result.
3. Write one fetch function with a timeout and a visible error message.
4. Render loading, empty, success, and retry views.
5. Add one test for valid data and one for malformed data.
6. Run `npm run build` and the test command until both pass.

### Git Checkpoint

You have completed **TYPED API CLIENT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/typed-api-client
git commit -m "feat(typed-api-client): complete typed api client"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 7](../roadmaps/Web.md#phase-7) | [CONTINUE TO WEB PHASE 8](../roadmaps/Web.md#phase-8)

<a id="web-phase-8-project"></a>
### WEB PHASE 8 MINI-PROJECT

#### PROJECT: REACT HABIT TRACKER

#### SPECIFICATION

Build a habit tracker that lets a user add habits, mark today complete, filter the list, and see a completion count. Split the interface into small React components.

#### TECH STACK

- React with TypeScript
- Vite
- React Testing Library

#### BUILD IT STEP BY STEP

1. Create a React TypeScript Vite project and install it.
2. Create `HabitForm`, `HabitList`, `HabitItem`, and `Summary` components.
3. Keep the habit array in the nearest shared parent component and pass data through props.
4. Add create, toggle, delete, and filter actions.
5. Show useful empty text when there are no habits.
6. Test adding and completing a habit, then run the production build.

### Git Checkpoint

You have completed **REACT HABIT TRACKER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/react-habit-tracker
git commit -m "feat(react-habit-tracker): complete react habit tracker"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 8](../roadmaps/Web.md#phase-8) | [CONTINUE TO WEB PHASE 9](../roadmaps/Web.md#phase-9)

<a id="web-phase-9-project"></a>
### WEB PHASE 9 MINI-PROJECT

#### PROJECT: CACHED ADMIN DASHBOARD

#### SPECIFICATION

Build an admin dashboard with a list, search, filters, pagination, and an edit form. Put filters in the URL and cache server data so returning to a page does not immediately refetch it.

#### TECH STACK

- React with TypeScript
- Vite
- TanStack Query and React Router

#### BUILD IT STEP BY STEP

1. Create a React TypeScript project and add React Router and TanStack Query.
2. Create routes for the dashboard list and the edit page.
3. Load seeded mock API data through a query hook.
4. Store search, filter, and page values in URL query parameters.
5. Add an edit mutation with loading, success, error, and rollback behavior.
6. Test a filtered deep link and confirm refreshing keeps the same screen.

### Git Checkpoint

You have completed **CACHED ADMIN DASHBOARD**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/cached-admin-dashboard
git commit -m "feat(cached-admin-dashboard): complete cached admin dashboard"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 9](../roadmaps/Web.md#phase-9) | [CONTINUE TO WEB PHASE 10](../roadmaps/Web.md#phase-10)

<a id="web-phase-10-project"></a>
### WEB PHASE 10 MINI-PROJECT

#### PROJECT: FULL-STACK ISSUE TRACKER

#### SPECIFICATION

Build a small issue tracker with pages for issue list, issue details, and new issue. Load initial data on the server and keep secrets and database code out of browser components.

#### TECH STACK

- Next.js with TypeScript
- React
- Tailwind CSS or CSS Modules

#### BUILD IT STEP BY STEP

1. Create a Next.js TypeScript app.
2. Add list, detail, new-issue, loading, error, and not-found pages.
3. Use server components for initial reads and a client component only for interactive form behavior.
4. Validate the new-issue form on the server and return field-specific errors.
5. Add metadata for the list and detail pages.
6. Run the development server, test direct URLs, and run the production build.

### Git Checkpoint

You have completed **FULL-STACK ISSUE TRACKER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/full-stack-issue-tracker
git commit -m "chore(full-stack-issue-tracker): complete full-stack issue tracker"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 10](../roadmaps/Web.md#phase-10) | [CONTINUE TO WEB PHASE 11](../roadmaps/Web.md#phase-11)

<a id="web-phase-11-project"></a>
### WEB PHASE 11 MINI-PROJECT

#### PROJECT: EXPRESS SERVICE STARTER

#### SPECIFICATION

Build a small Express service with a health route and CRUD routes for tasks. Every route must return JSON, use the correct status code, and send a safe error for bad input.

#### TECH STACK

- Node.js LTS and TypeScript
- Express
- Vitest and Supertest

#### BUILD IT STEP BY STEP

1. Create a Node.js TypeScript project and install Express, Vitest, and Supertest.
2. Create separate files for the app, server startup, task routes, and error handling.
3. Add `GET /health` and create, list, update, and delete task routes using an in-memory array.
4. Validate required task fields before changing the array.
5. Add tests for one successful request, one missing task, and one invalid body.
6. Run the test command, then start the server and call the health route in a browser or with curl.

### Git Checkpoint

You have completed **EXPRESS SERVICE STARTER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/express-service-starter
git commit -m "feat(express-service-starter): complete express service starter"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 11](../roadmaps/Web.md#phase-11) | [CONTINUE TO WEB PHASE 12](../roadmaps/Web.md#phase-12)

<a id="web-phase-12-project"></a>
### WEB PHASE 12 MINI-PROJECT

#### PROJECT: CONTRACT-FIRST REST API

#### SPECIFICATION

Build a versioned REST API for projects and tasks. Define the request, response, error, filtering, and pagination shapes in an OpenAPI file before implementing the routes.

#### TECH STACK

- Node.js LTS and TypeScript
- Express
- OpenAPI, Zod, Vitest, and Supertest

#### BUILD IT STEP BY STEP

1. Create an Express TypeScript project and add Zod, Vitest, and Supertest.
2. Write `openapi.yaml` with the project and task endpoints and example responses.
3. Implement the routes to match that contract exactly.
4. Add Zod validation and one consistent JSON error format.
5. Add filtering plus a simple page limit and cursor.
6. Test success, invalid input, missing records, and pagination; compare every response with the OpenAPI examples.

### Git Checkpoint

You have completed **CONTRACT-FIRST REST API**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/contract-first-rest-api
git commit -m "feat(contract-first-rest-api): complete contract-first rest api"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 12](../roadmaps/Web.md#phase-12) | [CONTINUE TO WEB PHASE 13](../roadmaps/Web.md#phase-13)

<a id="web-phase-13-project"></a>
### WEB PHASE 13 MINI-PROJECT

#### PROJECT: TRANSACTIONAL PROJECT DATABASE

#### SPECIFICATION

Build a PostgreSQL database for users, projects, and tasks. Protect relationships with keys and constraints, then complete create, list, update, and delete operations through a small Node.js program.

#### TECH STACK

- PostgreSQL 16
- Node.js and TypeScript
- Prisma ORM

#### BUILD IT STEP BY STEP

1. Start a local PostgreSQL database and create a Node.js TypeScript project with Prisma.
2. Design User, Project, and Task models with primary keys, foreign keys, required fields, and timestamps.
3. Create and run the first migration, then add a seed script with a few records.
4. Implement one transaction that creates a project and its first task together.
5. Add list, update, and delete operations and handle a missing record clearly.
6. Run the project from an empty database to confirm migrations and seed data work in the correct order.

### Git Checkpoint

You have completed **TRANSACTIONAL PROJECT DATABASE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/transactional-project-database
git commit -m "feat(transactional-project-database): complete transactional project database"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 13](../roadmaps/Web.md#phase-13) | [CONTINUE TO WEB PHASE 14](../roadmaps/Web.md#phase-14)

<a id="web-phase-14-project"></a>
### WEB PHASE 14 MINI-PROJECT

#### PROJECT: SECURE SESSION AUTH APP

#### SPECIFICATION

Build a small sign-up, sign-in, sign-out, and protected-profile application. Passwords must be hashed, login state must use a secure cookie, and one user must never read another user's private record.

#### TECH STACK

- Node.js and TypeScript
- Express and PostgreSQL
- Secure cookie sessions, Argon2, and Zod

#### BUILD IT STEP BY STEP

1. Create an Express TypeScript app connected to PostgreSQL.
2. Add a User table with a unique email and a password-hash field; never store the original password.
3. Validate sign-up input and hash passwords with Argon2.
4. Create a server-side session on sign-in and send only a secure, HTTP-only cookie to the browser.
5. Protect the profile route and check ownership again when loading user data.
6. Test wrong passwords, missing sessions, duplicate email, and access to another user's ID.

### Git Checkpoint

You have completed **SECURE SESSION AUTH APP**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/secure-session-auth-app
git commit -m "feat(secure-session-auth-app): complete secure session auth app"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 14](../roadmaps/Web.md#phase-14) | [CONTINUE TO WEB PHASE 15](../roadmaps/Web.md#phase-15)

<a id="web-phase-15-project"></a>
### WEB PHASE 15 MINI-PROJECT

#### PROJECT: FULL-STACK TEST PYRAMID

#### SPECIFICATION

Add a practical test pyramid to a small full-stack application: fast unit tests, API/database integration tests, component tests, and one browser test for the main user journey.

#### TECH STACK

- TypeScript
- Vitest and React Testing Library
- Supertest and Playwright

#### BUILD IT STEP BY STEP

1. Choose one existing small app and list its single most important user journey.
2. Add unit tests for its pure validation or calculation functions.
3. Add Supertest integration tests for the API and a disposable test database.
4. Add React Testing Library tests for loading, success, and error behavior.
5. Add one Playwright test that completes the main journey in a browser.
6. Run all test levels from one command, deliberately break one behavior, and confirm the correct test catches it.

### Git Checkpoint

You have completed **FULL-STACK TEST PYRAMID**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/full-stack-test-pyramid
git commit -m "test(full-stack-test-pyramid): complete full-stack test pyramid"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 15](../roadmaps/Web.md#phase-15) | [CONTINUE TO WEB PHASE 16](../roadmaps/Web.md#phase-16)

<a id="web-phase-16-project"></a>
### WEB PHASE 16 MINI-PROJECT

#### PROJECT: WEB VITALS OPTIMIZATION CASE

#### SPECIFICATION

Measure and improve one real page. Record its initial Core Web Vitals, fix the largest measured problem, and confirm the page is faster without breaking its layout or accessibility.

#### TECH STACK

- Chromium DevTools and Lighthouse
- WebPageTest
- The existing web application stack; add no new framework

#### BUILD IT STEP BY STEP

1. Choose one page with images, fonts, and JavaScript and open it in an incognito browser window.
2. Run Lighthouse three times and record the middle LCP, INP, and CLS result.
3. Use the Performance and Network panels to find the largest delay or layout shift.
4. Make one focused fix such as sizing images, lazy-loading below-fold media, reducing JavaScript, or preloading a critical font.
5. Run the same measurements three more times under the same conditions.
6. Keep the change only if the measured result improves and the page still works at phone and desktop widths.

### Git Checkpoint

You have completed **WEB VITALS OPTIMIZATION CASE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/web-vitals-optimization-case
git commit -m "feat(web-vitals-optimization-case): complete web vitals optimization case"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 16](../roadmaps/Web.md#phase-16) | [CONTINUE TO WEB PHASE 17](../roadmaps/Web.md#phase-17)

<a id="web-phase-17-project"></a>
### WEB PHASE 17 MINI-PROJECT

#### PROJECT: PREVIEW-TO-PRODUCTION PIPELINE

#### SPECIFICATION

Create a pipeline that checks, builds, previews, and deploys a small web app. A failed test must stop deployment, and the running service must expose a health check.

#### TECH STACK

- GitHub Actions
- Docker
- Render free web service or Cloudflare Pages free plan

#### BUILD IT STEP BY STEP

1. Put a tested web app in GitHub and confirm its local production build succeeds.
2. Add a Dockerfile and run the container locally.
3. Create a GitHub Actions workflow that installs locked dependencies, lints, tests, and builds.
4. Connect a practice Vercel or Render project and enable a preview for pull requests.
5. Merge only after the checks pass and verify the production health route.
6. Introduce a temporary failing test and confirm the pipeline blocks it, then undo that test change.

### Git Checkpoint

You have completed **PREVIEW-TO-PRODUCTION PIPELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/preview-to-production-pipeline
git commit -m "chore(preview-to-production-pipeline): complete preview-to-production pipeline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 17](../roadmaps/Web.md#phase-17) | [CONTINUE TO WEB PHASE 18](../roadmaps/Web.md#phase-18)

<a id="web-phase-18-project"></a>
### WEB PHASE 18 MINI-PROJECT

#### PROJECT: REAL-TIME COLLABORATION BOARD

#### SPECIFICATION

Build a two-user collaboration board where changes appear in real time. Reconnecting must restore the latest saved state without duplicating an action.

#### TECH STACK

- React and TypeScript
- Node.js and Socket.IO
- PostgreSQL

#### BUILD IT STEP BY STEP

1. Create a React TypeScript client, a Node.js Socket.IO server, and a small PostgreSQL database.
2. Build a board with cards that can be added and moved.
3. Save each accepted change in the database before broadcasting it to connected users.
4. Open two browser windows and confirm a change in one appears in the other.
5. Disconnect one window, make another change, reconnect, and reload the latest state.
6. Add an operation ID so resending the same action does not create a duplicate card.

### Git Checkpoint

You have completed **REAL-TIME COLLABORATION BOARD**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/real-time-collaboration-board
git commit -m "feat(real-time-collaboration-board): complete real-time collaboration board"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 18](../roadmaps/Web.md#phase-18) | [CONTINUE TO WEB PHASE 19](../roadmaps/Web.md#phase-19)

<a id="web-phase-19-project"></a>
### WEB PHASE 19 MINI-PROJECT

#### PROJECT: PRODUCTION SAAS SLICE

#### SPECIFICATION

Build one complete SaaS workflow: a user signs in, creates a project, adds tasks, and sees only their own data. The app must be responsive, tested, containerized, and deployed.

#### TECH STACK

- Next.js and TypeScript
- PostgreSQL and Prisma
- Secure sessions, Vitest, Playwright, Docker, and GitHub Actions

#### BUILD IT STEP BY STEP

1. Create a Next.js TypeScript app with PostgreSQL and Prisma.
2. Add the User, Project, and Task schema, migrations, and small seed data.
3. Implement secure sign-up, sign-in, sign-out, and ownership checks on every project and task operation.
4. Build responsive list, detail, create, edit, loading, empty, error, and not-found screens.
5. Add unit, API, and one Playwright browser test for the main workflow.
6. Add Docker and a GitHub Actions check, deploy the app, and verify the deployed health route and main workflow.

### Git Checkpoint

You have completed **PRODUCTION SAAS SLICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/production-saas-slice
git commit -m "feat(production-saas-slice): complete production saas slice"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 19](../roadmaps/Web.md#phase-19) | [CONTINUE TO WEB PHASE 20](../roadmaps/Web.md#phase-20)

<a id="web-phase-20-project"></a>
### WEB PHASE 20 MINI-PROJECT

#### PROJECT: TIMED WEB INTERVIEW LAB

#### SPECIFICATION

Create a repeatable interview practice lab containing one JavaScript problem, one small API task, and one web-system design prompt. Complete each within a fixed time and check it with prepared tests.

#### TECH STACK

- Node.js LTS
- VSCodium or any text editor
- Vitest and a timer; no new framework

#### BUILD IT STEP BY STEP

1. Create separate `javascript`, `api`, and `system-design` folders.
2. Put one clearly worded prompt and starter file in each folder.
3. Add Vitest checks for the JavaScript problem and Supertest checks for the API task.
4. Set a timer, speak your assumptions aloud, and solve without copying an existing answer.
5. Run the prepared checks and correct only the failing behavior.
6. Repeat on another day with new inputs until you can finish and explain all three exercises clearly.

### Git Checkpoint

You have completed **TIMED WEB INTERVIEW LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- web/timed-web-interview-lab
git commit -m "feat(timed-web-interview-lab): complete timed web interview lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW WEB PHASE 20](../roadmaps/Web.md#phase-20) | [BUILD THE WEB MAIN PORTFOLIO PROJECT](#web-main-portfolio-project)

<a id="web-main-portfolio-project"></a>
## WEB MAIN PORTFOLIO PROJECT

#### PROJECT: OPEN COMMUNITY SKILL EXCHANGE

#### DESCRIPTION

A complete web platform where people offer a skill, request help, schedule a learning session, exchange messages, and leave feedback. It gives a portfolio reviewer one polished workflow across frontend, backend, data, security, testing, performance, deployment, and realtime features.

#### WHO THIS IS FOR

- Learner searching for free peer help
- Volunteer offering a skill and managing requests
- Community moderator reviewing reports and keeping listings safe

#### WHAT USERS CAN DO

- Create a profile and publish, search, filter, and save skill offers
- Request, accept, schedule, complete, or cancel a peer-learning session
- Exchange realtime messages and receive status updates
- Report unsafe content while moderators act through protected tools

#### FREE AND OPEN-SOURCE TECH STACK

- HTML5, CSS3, and TypeScript
- React, Next.js, Node.js, and Express
- PostgreSQL with Prisma
- Zod, secure cookie sessions, and Argon2
- Socket.IO for realtime messages
- Vitest, React Testing Library, Supertest, and Playwright
- Docker Engine or Podman and GitHub Actions
- Free public demo: Cloudflare Pages, Render free web service, and Supabase Free Postgres; application code is open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Web Thinking:** Draw the browser, frontend, API, database, and realtime request paths and define the smallest complete user journey.
2. **Phase 2 - HTML Foundations:** Write semantic HTML for landing, search, offer details, forms, account, and moderation; ensure keyboard and screen-reader basics.
3. **Phase 3 - CSS Fundamentals:** Create design tokens and accessible styles for type, color, spacing, controls, focus, errors, and dark mode.
4. **Phase 4 - Responsive Layout:** Build mobile-first Grid/Flexbox layouts that work at 320px, 768px, desktop, zoom, long text, and reduced motion.
5. **Phase 5 - JavaScript Fundamentals:** Prototype offer creation, filtering, saved items, and form validation in plain JavaScript before framework code.
6. **Phase 6 - Browser APIs and Tooling:** Add modules, fetch, abortable search, local drafts, offline feedback, bundling, formatting, and linting with Vite.
7. **Phase 7 - TypeScript:** Define strict TypeScript domain, API, form, and error types; validate unknown network data at runtime.
8. **Phase 8 - React Fundamentals:** Build reusable React components and implement offer list, details, create form, and shared state with clear ownership.
9. **Phase 9 - React State Patterns:** Add routing, URL-based filters, TanStack Query caching, optimistic saves, rollback, and accessible dialogs/toasts.
10. **Phase 10 - Next.js:** Use Next.js for public and account pages with loading, error, not-found, metadata, and deliberate server/client boundaries.
11. **Phase 11 - Node.js and Express:** Build an Express TypeScript API with configuration, logging, validation, graceful shutdown, and health endpoints.
12. **Phase 12 - REST API Design:** Define OpenAPI endpoints, consistent errors, filters, cursor pagination, idempotent creates, and versioning rules.
13. **Phase 13 - Web Databases:** Create PostgreSQL/Prisma models, migrations, seeds, constraints, indexes, and a transaction for accepting a session.
14. **Phase 14 - Authentication and Authorization:** Implement sign-up, sign-in, sign-out, secure sessions, password hashing, CSRF protection, and object-level authorization.
15. **Phase 15 - Web Testing:** Add unit, component, API integration, database, security-negative, accessibility, and Playwright journey tests.
16. **Phase 16 - Performance and Web Vitals:** Measure Core Web Vitals and API latency, then fix one proven image, JavaScript, query, or caching bottleneck.
17. **Phase 17 - Deployment and CI/CD:** Create Docker builds and GitHub Actions checks, preview the app, deploy migrations safely, and verify health after release.
18. **Phase 18 - Realtime and Modern APIs:** Add Socket.IO messages/status updates with reconnection, authorization, ordering, and duplicate-event protection.
19. **PHASE 19 - Portfolio Capstones (REQUIRED CAPSTONE-COMPLETION STEP):** Polish seed accounts, moderation, empty/error states, screenshots, an open-source license, and one complete public demo workflow.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Practice explaining one frontend change, one API bug, one database decision, and the whole system design under a timer.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `open-community-skill-exchange` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: request model, semantic accessible interface, design system, and responsive layout**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "feat(skill-exchange): establish accessible responsive interface"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: typed client state, React flows, routing, caching, and full-stack application shell**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "feat(skill-exchange): implement typed full-stack user flows"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: API contracts, PostgreSQL transactions, authentication, and test pyramid**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "feat(skill-exchange): integrate secure API and persistence"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: performance, preview delivery, observability, and realtime collaboration checks**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "test(skill-exchange): verify performance delivery and realtime behavior"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: production SaaS slice, documentation, demo accounts, and public portfolio evidence**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-community-skill-exchange
git commit -m "docs(skill-exchange): complete community skill exchange release"
git tag -a skill-exchange-v1.0.0 -m "First complete skill-exchange release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Run frontend, Express API, PostgreSQL, and realtime service locally with Docker Compose; run the complete test suite.
2. Create a Supabase Free project, store demo-only data, apply Prisma migrations, and copy its connection string into Render secrets.
3. Deploy the Express/Socket.IO service to a Render free web service, bind to `0.0.0.0:$PORT`, and configure `/health`.
4. Build the frontend and deploy its static output to Cloudflare Pages free plan; point it to the Render API and deployed WebSocket URL.
5. Allow only the public frontend origin, use secure production cookies, seed non-sensitive demo accounts, and test the full journey in two browsers.
6. Free hosting can sleep and has quotas; place a friendly cold-start message in the UI and keep Docker Compose as the permanent zero-cost deployment.

> **MAIN PROJECT NAVIGATION:** [REVIEW WEB PHASE 19](../roadmaps/Web.md#phase-19) | [REVIEW WEB PHASE 20](../roadmaps/Web.md#phase-20) | [RETURN TO THE WEB ROADMAP](../roadmaps/Web.md#phase-index)

## Cloud Engineering

Study this roadmap first: [cloud.md](../roadmaps/Cloud.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="cloud-phase-1-project"></a>
### CLOUD PHASE 1 MINI-PROJECT

#### PROJECT: LINUX SERVICE BASELINE

#### SPECIFICATION

Build **Linux Service Baseline** as a focused exercise for **Linux and Service Foundations**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run a small Linux HTTP service with a dedicated user, systemd unit, permissions, logs, port check, health endpoint, and restart behavior.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Linux and Service Foundations in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Ubuntu Linux or WSL 2
- systemd, journalctl, ss, and curl
- Bash; no cloud account required

#### BUILD IT STEP BY STEP

1. Create `linux-service-baseline` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Run a small Linux HTTP service with a dedicated user, systemd unit, permissions, logs, port check, health endpoint, and restart behavior.
3. Use Linux and Service Foundations in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Linux and Service Foundations**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **LINUX SERVICE BASELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/linux-service-baseline
git commit -m "chore(linux-service-baseline): complete linux service baseline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 1](../roadmaps/Cloud.md#phase-1) | [CONTINUE TO CLOUD PHASE 2](../roadmaps/Cloud.md#phase-2)

<a id="cloud-phase-2-project"></a>
### CLOUD PHASE 2 MINI-PROJECT

#### PROJECT: VM VS CONTAINER BENCHMARK

#### SPECIFICATION

Build **VM vs Container Benchmark** as a focused exercise for **Virtualization and Service Models**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run the same workload in a local VM and container and compare startup time, CPU/memory, image size, isolation, and operator responsibility.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Virtualization and Service Models and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Docker Engine or Podman
- Ubuntu container or VM
- hyperfine or PowerShell Measure-Command

#### BUILD IT STEP BY STEP

1. Create `vm-vs-container-benchmark` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Run the same workload in a local VM and container and compare startup time, CPU/memory, image size, isolation, and operator responsibility.
3. Use a metric connected to Virtualization and Service Models and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Virtualization and Service Models**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **VM VS CONTAINER BENCHMARK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/vm-vs-container-benchmark
git commit -m "feat(vm-vs-container-benchmark): complete vm vs container benchmark"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 2](../roadmaps/Cloud.md#phase-2) | [CONTINUE TO CLOUD PHASE 3](../roadmaps/Cloud.md#phase-3)

<a id="cloud-phase-3-project"></a>
### CLOUD PHASE 3 MINI-PROJECT

#### PROJECT: MULTI-PROVIDER ARCHITECTURE MATRIX

#### SPECIFICATION

Build **Multi-Provider Architecture Matrix** as a focused exercise for **Providers, Regions, and Shared Responsibility**. Keep the data and interface small enough to finish, but implement the following behavior:

- Compare AWS, Azure, and Google equivalents for identity, network, compute, storage, database, monitoring, responsibility, and lock-in without creating resources.
- Define one realistic scenario, its boundaries, and the intended reader for the Multi-Provider Architecture Matrix.
- Collect or create the exact inputs needed to apply Providers, Regions, and Shared Responsibility; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- diagrams.net
- AWS, Azure, and Google Cloud documentation
- No coding or paid resources required

#### BUILD IT STEP BY STEP

1. Create `multi-provider-architecture-matrix` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Compare AWS, Azure, and Google equivalents for identity, network, compute, storage, database, monitoring, responsibility, and lock-in without creating resources.
3. Collect or create the exact inputs needed to apply Providers, Regions, and Shared Responsibility; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Providers, Regions, and Shared Responsibility**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **MULTI-PROVIDER ARCHITECTURE MATRIX**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/multi-provider-architecture-matrix
git commit -m "docs(multi-provider-architecture-matrix): complete multi-provider architecture matrix"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 3](../roadmaps/Cloud.md#phase-3) | [CONTINUE TO CLOUD PHASE 4](../roadmaps/Cloud.md#phase-4)

<a id="cloud-phase-4-project"></a>
### CLOUD PHASE 4 MINI-PROJECT

#### PROJECT: LEAST-PRIVILEGE IAM LAB

#### SPECIFICATION

Build **Least-Privilege IAM Lab** as a focused exercise for **Identity and Access Management**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create local IAM-style users, roles, and policies for admin, operator, application, and auditor; prove allowed and denied actions.
- Give the user one clear main action and keep all other features secondary.
- Use Identity and Access Management in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community
- OpenTofu and the LocalStack CLI
- IAM policy JSON

#### BUILD IT STEP BY STEP

1. Create `least-privilege-iam-lab` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Create local IAM-style users, roles, and policies for admin, operator, application, and auditor; prove allowed and denied actions.
3. Use Identity and Access Management in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Identity and Access Management**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **LEAST-PRIVILEGE IAM LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/least-privilege-iam-lab
git commit -m "feat(least-privilege-iam-lab): complete least-privilege iam lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 4](../roadmaps/Cloud.md#phase-4) | [CONTINUE TO CLOUD PHASE 5](../roadmaps/Cloud.md#phase-5)

<a id="cloud-phase-5-project"></a>
### CLOUD PHASE 5 MINI-PROJECT

#### PROJECT: MULTI-TIER VPC

#### SPECIFICATION

Build **Multi-Tier VPC** as a focused exercise for **Cloud Networking**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a local multi-tier virtual network with public/private subnets, routes, egress, DNS, and restrictive security rules.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Networking in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community
- OpenTofu and the LocalStack CLI
- VPC, subnets, route tables, and security groups

#### BUILD IT STEP BY STEP

1. Create `multi-tier-vpc` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Build a local multi-tier virtual network with public/private subnets, routes, egress, DNS, and restrictive security rules.
3. Use Cloud Networking in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Cloud Networking**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **MULTI-TIER VPC**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/multi-tier-vpc
git commit -m "feat(multi-tier-vpc): complete multi-tier vpc"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 5](../roadmaps/Cloud.md#phase-5) | [CONTINUE TO CLOUD PHASE 6](../roadmaps/Cloud.md#phase-6)

<a id="cloud-phase-6-project"></a>
### CLOUD PHASE 6 MINI-PROJECT

#### PROJECT: AUTOSCALED WEB TIER

#### SPECIFICATION

Build **Autoscaled Web Tier** as a focused exercise for **Compute and Autoscaling**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run multiple immutable web instances behind a load balancer, add health checks, simulate autoscaling decisions, and replace an unhealthy instance.
- Give the user one clear main action and keep all other features secondary.
- Use Compute and Autoscaling in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `autoscaled-web-tier` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Run multiple immutable web instances behind a load balancer, add health checks, simulate autoscaling decisions, and replace an unhealthy instance.
3. Use Compute and Autoscaling in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Compute and Autoscaling**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **AUTOSCALED WEB TIER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/autoscaled-web-tier
git commit -m "feat(autoscaled-web-tier): complete autoscaled web tier"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 6](../roadmaps/Cloud.md#phase-6) | [CONTINUE TO CLOUD PHASE 7](../roadmaps/Cloud.md#phase-7)

<a id="cloud-phase-7-project"></a>
### CLOUD PHASE 7 MINI-PROJECT

#### PROJECT: VERSIONED OBJECT BACKUP

#### SPECIFICATION

Build **Versioned Object Backup** as a focused exercise for **Cloud Storage**. Keep the data and interface small enough to finish, but implement the following behavior:

- Store versioned objects in MinIO, enforce lifecycle/retention rules, restore a deleted version, and compare object, block, and file choices.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Storage in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `versioned-object-backup` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Store versioned objects in MinIO, enforce lifecycle/retention rules, restore a deleted version, and compare object, block, and file choices.
3. Use Cloud Storage in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Cloud Storage**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **VERSIONED OBJECT BACKUP**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/versioned-object-backup
git commit -m "feat(versioned-object-backup): complete versioned object backup"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 7](../roadmaps/Cloud.md#phase-7) | [CONTINUE TO CLOUD PHASE 8](../roadmaps/Cloud.md#phase-8)

<a id="cloud-phase-8-project"></a>
### CLOUD PHASE 8 MINI-PROJECT

#### PROJECT: RESILIENT MANAGED DATA TIER

#### SPECIFICATION

Build **Resilient Managed Data Tier** as a focused exercise for **Managed Data Services**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run PostgreSQL with backup/restore, a cache, connection limits, replica simulation, and documented failover behavior.
- Give the user one clear main action and keep all other features secondary.
- Use Managed Data Services in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `resilient-managed-data-tier` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Run PostgreSQL with backup/restore, a cache, connection limits, replica simulation, and documented failover behavior.
3. Use Managed Data Services in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Managed Data Services**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **RESILIENT MANAGED DATA TIER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/resilient-managed-data-tier
git commit -m "feat(resilient-managed-data-tier): complete resilient managed data tier"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 8](../roadmaps/Cloud.md#phase-8) | [CONTINUE TO CLOUD PHASE 9](../roadmaps/Cloud.md#phase-9)

<a id="cloud-phase-9-project"></a>
### CLOUD PHASE 9 MINI-PROJECT

#### PROJECT: CDN DELIVERY BENCHMARK

#### SPECIFICATION

Build **CDN Delivery Benchmark** as a focused exercise for **DNS, CDN, and Edge**. Keep the data and interface small enough to finish, but implement the following behavior:

- Serve static content through local DNS and an Nginx cache, then measure cached/uncached latency and test invalidation.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to DNS, CDN, and Edge and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `cdn-delivery-benchmark` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Serve static content through local DNS and an Nginx cache, then measure cached/uncached latency and test invalidation.
3. Use a metric connected to DNS, CDN, and Edge and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **DNS, CDN, and Edge**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **CDN DELIVERY BENCHMARK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/cdn-delivery-benchmark
git commit -m "feat(cdn-delivery-benchmark): complete cdn delivery benchmark"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 9](../roadmaps/Cloud.md#phase-9) | [CONTINUE TO CLOUD PHASE 10](../roadmaps/Cloud.md#phase-10)

<a id="cloud-phase-10-project"></a>
### CLOUD PHASE 10 MINI-PROJECT

#### PROJECT: EVENT-DRIVEN IMAGE PIPELINE

#### SPECIFICATION

Build **Event-Driven Image Pipeline** as a focused exercise for **Serverless and Events**. Keep the data and interface small enough to finish, but implement the following behavior:

- Process uploaded images or documents through an event-driven local function with retries, idempotency, and dead-letter handling.
- Define a small input format, a transformed output format, and where failed records go.
- Use Serverless and Events to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `event-driven-image-pipeline` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Process uploaded images or documents through an event-driven local function with retries, idempotency, and dead-letter handling.
3. Use Serverless and Events to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for **Serverless and Events**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **EVENT-DRIVEN IMAGE PIPELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/event-driven-image-pipeline
git commit -m "chore(event-driven-image-pipeline): complete event-driven image pipeline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 10](../roadmaps/Cloud.md#phase-10) | [CONTINUE TO CLOUD PHASE 11](../roadmaps/Cloud.md#phase-11)

<a id="cloud-phase-11-project"></a>
### CLOUD PHASE 11 MINI-PROJECT

#### PROJECT: MANAGED KUBERNETES SERVICE

#### SPECIFICATION

Build **Managed Kubernetes Service** as a focused exercise for **Containers and Kubernetes**. Keep the data and interface small enough to finish, but implement the following behavior:

- Deploy a small service to kind/k3d with requests, limits, probes, config, secrets, scaling, rollout, and rollback.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Containers and Kubernetes in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `managed-kubernetes-service` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Deploy a small service to kind/k3d with requests, limits, probes, config, secrets, scaling, rollout, and rollback.
3. Use Containers and Kubernetes in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Containers and Kubernetes**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **MANAGED KUBERNETES SERVICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/managed-kubernetes-service
git commit -m "feat(managed-kubernetes-service): complete managed kubernetes service"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 11](../roadmaps/Cloud.md#phase-11) | [CONTINUE TO CLOUD PHASE 12](../roadmaps/Cloud.md#phase-12)

<a id="cloud-phase-12-project"></a>
### CLOUD PHASE 12 MINI-PROJECT

#### PROJECT: REUSABLE OPENTOFU ENVIRONMENT

#### SPECIFICATION

Build **Reusable OpenTofu Environment** as a focused exercise for **Infrastructure as Code**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create reusable OpenTofu modules for the local environment with variables, outputs, state locking simulation, plan checks, and destroy.
- Give the user one clear main action and keep all other features secondary.
- Use Infrastructure as Code in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- OpenTofu
- LocalStack Community
- OpenTofu and the LocalStack CLI

#### BUILD IT STEP BY STEP

1. Create `reusable-opentofu-environment` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Create reusable OpenTofu modules for the local environment with variables, outputs, state locking simulation, plan checks, and destroy.
3. Use Infrastructure as Code in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Infrastructure as Code**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **REUSABLE OPENTOFU ENVIRONMENT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/reusable-opentofu-environment
git commit -m "chore(reusable-opentofu-environment): complete reusable opentofu environment"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 12](../roadmaps/Cloud.md#phase-12) | [CONTINUE TO CLOUD PHASE 13](../roadmaps/Cloud.md#phase-13)

<a id="cloud-phase-13-project"></a>
### CLOUD PHASE 13 MINI-PROJECT

#### PROJECT: GOVERNED LANDING ZONE

#### SPECIFICATION

Build **Governed Landing Zone** as a focused exercise for **Landing Zones and Governance**. Keep the data and interface small enough to finish, but implement the following behavior:

- Design separate environment/account boundaries with naming, tags, quotas, policy guardrails, and a break-glass path.
- Give the user one clear main action and keep all other features secondary.
- Use Landing Zones and Governance in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `governed-landing-zone` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Design separate environment/account boundaries with naming, tags, quotas, policy guardrails, and a break-glass path.
3. Use Landing Zones and Governance in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Landing Zones and Governance**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **GOVERNED LANDING ZONE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/governed-landing-zone
git commit -m "feat(governed-landing-zone): complete governed landing zone"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 13](../roadmaps/Cloud.md#phase-13) | [CONTINUE TO CLOUD PHASE 14](../roadmaps/Cloud.md#phase-14)

<a id="cloud-phase-14-project"></a>
### CLOUD PHASE 14 MINI-PROJECT

#### PROJECT: ENCRYPTED SECRET ROTATION

#### SPECIFICATION

Build **Encrypted Secret Rotation** as a focused exercise for **Secrets and Encryption**. Keep the data and interface small enough to finish, but implement the following behavior:

- Store and rotate an application secret in OpenBao, encrypt connections, prevent log exposure, and test an expired credential.
- Give the user one clear main action and keep all other features secondary.
- Use Secrets and Encryption in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `encrypted-secret-rotation` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Store and rotate an application secret in OpenBao, encrypt connections, prevent log exposure, and test an expired credential.
3. Use Secrets and Encryption in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Secrets and Encryption**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **ENCRYPTED SECRET ROTATION**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/encrypted-secret-rotation
git commit -m "feat(encrypted-secret-rotation): complete encrypted secret rotation"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 14](../roadmaps/Cloud.md#phase-14) | [CONTINUE TO CLOUD PHASE 15](../roadmaps/Cloud.md#phase-15)

<a id="cloud-phase-15-project"></a>
### CLOUD PHASE 15 MINI-PROJECT

#### PROJECT: OBSERVABLE CLOUD SERVICE

#### SPECIFICATION

Build **Observable Cloud Service** as a focused exercise for **Observability and Operations**. Keep the data and interface small enough to finish, but implement the following behavior:

- Collect service metrics, logs, and traces, build a dashboard, trigger an actionable alert, and follow its runbook.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Observability and Operations in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `observable-cloud-service` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Collect service metrics, logs, and traces, build a dashboard, trigger an actionable alert, and follow its runbook.
3. Use Observability and Operations in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Observability and Operations**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **OBSERVABLE CLOUD SERVICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/observable-cloud-service
git commit -m "feat(observable-cloud-service): complete observable cloud service"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 15](../roadmaps/Cloud.md#phase-15) | [CONTINUE TO CLOUD PHASE 16](../roadmaps/Cloud.md#phase-16)

<a id="cloud-phase-16-project"></a>
### CLOUD PHASE 16 MINI-PROJECT

#### PROJECT: POLICY-AS-CODE SAFETY CHECKS AND LIMITS

#### SPECIFICATION

Build **Policy-as-Code Safety checks and limits** as a focused exercise for **Cloud Security and Compliance**. Keep the data and interface small enough to finish, but implement the following behavior:

- Write OPA/Checkov policies that block public data, wildcard privilege, unencrypted storage, and unsafe network rules.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Security and Compliance in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `policy-as-code-safety-checks-and-limits` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Write OPA/Checkov policies that block public data, wildcard privilege, unencrypted storage, and unsafe network rules.
3. Use Cloud Security and Compliance in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Cloud Security and Compliance**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **POLICY-AS-CODE SAFETY CHECKS AND LIMITS**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/policy-as-code-safety-checks-and-limits
git commit -m "docs(policy-as-code-safety-checks-and-limits): complete policy-as-code safety checks and limits"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 16](../roadmaps/Cloud.md#phase-16) | [CONTINUE TO CLOUD PHASE 17](../roadmaps/Cloud.md#phase-17)

<a id="cloud-phase-17-project"></a>
### CLOUD PHASE 17 MINI-PROJECT

#### PROJECT: DISASTER RECOVERY GAME DAY

#### SPECIFICATION

Build **Disaster Recovery Game Day** as a focused exercise for **Reliability and Disaster Recovery**. Keep the data and interface small enough to finish, but implement the following behavior:

- Define RTO/RPO, create backups, remove one service/zone simulation, restore data, and measure actual recovery.
- Give the user one clear main action and keep all other features secondary.
- Use Reliability and Disaster Recovery in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `disaster-recovery-game-day` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Define RTO/RPO, create backups, remove one service/zone simulation, restore data, and measure actual recovery.
3. Use Reliability and Disaster Recovery in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Reliability and Disaster Recovery**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **DISASTER RECOVERY GAME DAY**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/disaster-recovery-game-day
git commit -m "fix(disaster-recovery-game-day): complete disaster recovery game day"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 17](../roadmaps/Cloud.md#phase-17) | [CONTINUE TO CLOUD PHASE 18](../roadmaps/Cloud.md#phase-18)

<a id="cloud-phase-18-project"></a>
### CLOUD PHASE 18 MINI-PROJECT

#### PROJECT: CLOUD COST OPTIMIZER

#### SPECIFICATION

Build **Cloud Cost Optimizer** as a focused exercise for **FinOps**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a local cost model from resource quantities, flag idle/oversized resources, and show before/after monthly estimates.
- Give the user one clear main action and keep all other features secondary.
- Use FinOps in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `cloud-cost-optimizer` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Create a local cost model from resource quantities, flag idle/oversized resources, and show before/after monthly estimates.
3. Use FinOps in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **FinOps**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **CLOUD COST OPTIMIZER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/cloud-cost-optimizer
git commit -m "feat(cloud-cost-optimizer): complete cloud cost optimizer"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 18](../roadmaps/Cloud.md#phase-18) | [CONTINUE TO CLOUD PHASE 19](../roadmaps/Cloud.md#phase-19)

<a id="cloud-phase-19-project"></a>
### CLOUD PHASE 19 MINI-PROJECT

#### PROJECT: MIGRATION RUNBOOK AND PILOT

#### SPECIFICATION

Build **Migration Runbook and Pilot** as a focused exercise for **Migration**. Keep the data and interface small enough to finish, but implement the following behavior:

- Write a migration inventory, dependency map, wave plan, pilot, validation, rollback, data reconciliation, and cutover checklist.
- Define one realistic scenario, its boundaries, and the intended reader for the Migration Runbook and Pilot.
- Collect or create the exact inputs needed to apply Migration; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `migration-runbook-and-pilot` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Write a migration inventory, dependency map, wave plan, pilot, validation, rollback, data reconciliation, and cutover checklist.
3. Collect or create the exact inputs needed to apply Migration; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Migration**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **MIGRATION RUNBOOK AND PILOT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/migration-runbook-and-pilot
git commit -m "docs(migration-runbook-and-pilot): complete migration runbook and pilot"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 19](../roadmaps/Cloud.md#phase-19) | [CONTINUE TO CLOUD PHASE 20](../roadmaps/Cloud.md#phase-20)

<a id="cloud-phase-20-project"></a>
### CLOUD PHASE 20 MINI-PROJECT

#### PROJECT: CLOUD ARCHITECTURE PORTFOLIO

#### SPECIFICATION

Build **Cloud Architecture Portfolio** as a focused exercise for **Architecture Interviews and Portfolio**. Keep the data and interface small enough to finish, but implement the following behavior:

- Assemble diagrams, IaC, policy checks, dashboards, recovery results, and a timed architecture presentation into one portfolio package.
- Define one realistic scenario, its boundaries, and the intended reader for the Cloud Architecture Portfolio.
- Collect or create the exact inputs needed to apply Architecture Interviews and Portfolio; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- LocalStack Community or a local Linux VM
- OpenTofu and the LocalStack CLI
- OpenTofu when the phase introduces infrastructure as code

#### BUILD IT STEP BY STEP

1. Create `cloud-architecture-portfolio` with `infra`, `config`, `tests`, and `diagrams` folders; use only a local sandbox.
2. Assemble diagrams, IaC, policy checks, dashboards, recovery results, and a timed architecture presentation into one portfolio package.
3. Collect or create the exact inputs needed to apply Architecture Interviews and Portfolio; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Architecture Interviews and Portfolio**.
7. Apply the local lab, run its checks, capture the non-sensitive result, and destroy the temporary resources.

### Git Checkpoint

You have completed **CLOUD ARCHITECTURE PORTFOLIO**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cloud/cloud-architecture-portfolio
git commit -m "docs(cloud-architecture-portfolio): complete cloud architecture portfolio"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 20](../roadmaps/Cloud.md#phase-20) | [BUILD THE CLOUD MAIN PORTFOLIO PROJECT](#cloud-main-portfolio-project)

<a id="cloud-main-portfolio-project"></a>
## CLOUD MAIN PORTFOLIO PROJECT

#### PROJECT: LOCAL NONPROFIT CLOUD PLATFORM

#### DESCRIPTION

A cloud-like platform for a fictional nonprofit, built entirely in a local sandbox. It provisions isolated environments, identity, networking, compute, storage, events, Kubernetes, monitoring, security policies, recovery, and cost reports without creating paid cloud resources.

#### WHO THIS IS FOR

- Application team requesting a safe environment
- Cloud operator applying changes and responding to alerts
- Security or finance reviewer checking policy, recovery, and estimated cost

#### WHAT USERS CAN DO

- Provision development and production-like local environments from code
- Run a small service across isolated networks with storage and events
- Enforce identity, secret, security, and governance rules
- Observe, back up, restore, estimate cost, and tear down the platform

#### FREE AND OPEN-SOURCE TECH STACK

- Linux and KVM/libvirt or containers
- OpenTofu
- LocalStack Community and MinIO
- k3d or kind with Kubernetes
- Keycloak and OpenBao
- Prometheus, Grafana, Loki, and OpenTelemetry
- Trivy, Checkov, and Open Policy Agent
- Docker Engine or Podman; all required components are free and open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Linux and Service Foundations:** Create a Linux service baseline with users, permissions, processes, ports, logs, and a health check.
2. **Phase 2 - Virtualization and Service Models:** Compare a VM and container for isolation, startup, resource use, and operational responsibility.
3. **Phase 3 - Providers, Regions, and Shared Responsibility:** Draw provider-neutral regions, zones, services, failure boundaries, and shared-responsibility ownership.
4. **Phase 4 - Identity and Access Management:** Configure Keycloak roles and least-privilege service identities; test one allowed and one denied action.
5. **Phase 5 - Cloud Networking:** Create isolated virtual networks, public/private subnets, routes, egress, DNS, and restrictive firewall rules.
6. **Phase 6 - Compute and Autoscaling:** Run two stateless service instances behind a local load balancer and demonstrate health-based replacement.
7. **Phase 7 - Cloud Storage:** Use MinIO object storage with versioning and lifecycle rules, plus a local volume for database data.
8. **Phase 8 - Managed Data Services:** Deploy PostgreSQL with replica/cache simulations, backups, restore checks, connection limits, and failure handling.
9. **Phase 9 - DNS, CDN, and Edge:** Add local DNS, Nginx edge caching, TLS, cache headers, and a measured cached-versus-uncached comparison.
10. **Phase 10 - Serverless and Events:** Create an event-driven thumbnail or document-processing function with retries, dead letters, and idempotency.
11. **Phase 11 - Containers and Kubernetes:** Deploy the service to k3d/kind with requests, limits, probes, config, secrets, scaling, and controlled rollout.
12. **Phase 12 - Infrastructure as Code:** Represent the environment in reusable OpenTofu modules with remote-state simulation, locking, plans, and policy checks.
13. **Phase 13 - Landing Zones and Governance:** Create environment/account boundaries, naming, tags, quotas, allowed services, and OPA guardrails.
14. **Phase 14 - Secrets and Encryption:** Store secrets in OpenBao, rotate one credential, encrypt data in transit/at rest, and prevent log leakage.
15. **Phase 15 - Observability and Operations:** Collect metrics, logs, and traces; create dashboards, actionable alerts, and a linked operator runbook.
16. **Phase 16 - Cloud Security and Compliance:** Run Checkov/Trivy/OPA checks and map the most important controls to generated non-sensitive evidence.
17. **Phase 17 - Reliability and Disaster Recovery:** Define availability and recovery targets, simulate a zone/service loss, restore PostgreSQL, and time recovery.
18. **Phase 18 - FinOps:** Create a provider-neutral cost model, budgets, anomaly rules, utilization findings, and three optimization actions.
19. **PHASE 19 - Migration (REQUIRED CAPSTONE-COMPLETION STEP):** Write a migration wave for one legacy service, perform the local pilot, validate it, and define rollback.
20. **PHASE 20 - Architecture Interviews and Portfolio (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Package architecture diagrams, reusable modules, dashboards, recovery results, and a timed design explanation for the portfolio.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `local-nonprofit-cloud-platform` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: Linux service baseline, architecture requirements, identity model, and network design**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "feat(nonprofit-cloud): establish secure platform foundation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: compute, storage, database, messaging, containers, and Kubernetes platform**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "feat(nonprofit-cloud): integrate resilient application platform"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: serverless event flow, OpenTofu, observability, secrets, and backup recovery**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "feat(nonprofit-cloud): automate operations and recovery controls"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: reliability, cost, governance, and multi-region failure exercises**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "test(nonprofit-cloud): verify reliability governance and disaster recovery"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: migration evidence, sanitized diagrams, local demo, and teardown documentation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- local-nonprofit-cloud-platform
git commit -m "docs(nonprofit-cloud): complete nonprofit cloud platform release"
git tag -a nonprofit-cloud-v1.0.0 -m "First complete nonprofit-cloud release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Install Docker Engine/Podman, OpenTofu, and k3d/kind on a local Linux machine; no cloud account is required.
2. Run one bootstrap command that starts LocalStack, MinIO, Keycloak, OpenBao, observability, and the Kubernetes cluster.
3. Apply OpenTofu, deploy the sample service, and execute identity, network, policy, health, backup, and restore checks.
4. Expose dashboards only on localhost and never publish sandbox credentials or management ports.
5. Export sanitized diagrams, Grafana snapshots, policy results, and recovery timings to a static portfolio site on GitHub Pages.
6. Run the destroy command, confirm that containers, clusters, volumes marked temporary, and networks are removed, and retain only intentional backup fixtures.

> **MAIN PROJECT NAVIGATION:** [REVIEW CLOUD PHASE 19](../roadmaps/Cloud.md#phase-19) | [REVIEW CLOUD PHASE 20](../roadmaps/Cloud.md#phase-20) | [RETURN TO THE CLOUD ROADMAP](../roadmaps/Cloud.md#phase-index)

## DevOps Engineering

Study this roadmap first: [devops.md](../roadmaps/DevOps.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="devops-phase-1-project"></a>
### DEVOPS PHASE 1 MINI-PROJECT

#### PROJECT: VALUE STREAM DELIVERY MAP

#### SPECIFICATION

Build **Value Stream Delivery Map** as a focused exercise for **DevOps Delivery Systems**. Keep the data and interface small enough to finish, but implement the following behavior:

- Map a sample change from idea to production with wait/work time, handoffs, failure rate, recovery time, bottleneck, and one improvement experiment.
- Define one realistic scenario, its boundaries, and the intended reader for the Value Stream Delivery Map.
- Collect or create the exact inputs needed to apply DevOps Delivery Systems; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `value-stream-delivery-map` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Map a sample change from idea to production with wait/work time, handoffs, failure rate, recovery time, bottleneck, and one improvement experiment.
3. Collect or create the exact inputs needed to apply DevOps Delivery Systems; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **DevOps Delivery Systems**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **VALUE STREAM DELIVERY MAP**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/value-stream-delivery-map
git commit -m "docs(value-stream-delivery-map): complete value stream delivery map"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 1](../roadmaps/DevOps.md#phase-1) | [CONTINUE TO DEVOPS PHASE 2](../roadmaps/DevOps.md#phase-2)

<a id="devops-phase-2-project"></a>
### DEVOPS PHASE 2 MINI-PROJECT

#### PROJECT: HARDENED LINUX SERVICE

#### SPECIFICATION

Build **Hardened Linux Service** as a focused exercise for **Linux and Services**. Keep the data and interface small enough to finish, but implement the following behavior:

- Harden and run a Linux service with dedicated identity, least-privilege files, systemd, logs, resource limits, health checks, and safe restart.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Linux and Services in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `hardened-linux-service` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Harden and run a Linux service with dedicated identity, least-privilege files, systemd, logs, resource limits, health checks, and safe restart.
3. Use Linux and Services in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Linux and Services**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **HARDENED LINUX SERVICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/hardened-linux-service
git commit -m "feat(hardened-linux-service): complete hardened linux service"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 2](../roadmaps/DevOps.md#phase-2) | [CONTINUE TO DEVOPS PHASE 3](../roadmaps/DevOps.md#phase-3)

<a id="devops-phase-3-project"></a>
### DEVOPS PHASE 3 MINI-PROJECT

#### PROJECT: INCIDENT TROUBLESHOOTING TOOLKIT

#### SPECIFICATION

Build **Incident Troubleshooting Toolkit** as a focused exercise for **Systems and Network Troubleshooting**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a read-only diagnostic CLI that checks DNS, route, port, TLS, HTTP, process, resources, logs, and dependency health in order.
- Give the user one clear main action and keep all other features secondary.
- Use Systems and Network Troubleshooting in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `incident-troubleshooting-toolkit` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Create a read-only diagnostic CLI that checks DNS, route, port, TLS, HTTP, process, resources, logs, and dependency health in order.
3. Use Systems and Network Troubleshooting in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Systems and Network Troubleshooting**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **INCIDENT TROUBLESHOOTING TOOLKIT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/incident-troubleshooting-toolkit
git commit -m "feat(incident-troubleshooting-toolkit): complete incident troubleshooting toolkit"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 3](../roadmaps/DevOps.md#phase-3) | [CONTINUE TO DEVOPS PHASE 4](../roadmaps/DevOps.md#phase-4)

<a id="devops-phase-4-project"></a>
### DEVOPS PHASE 4 MINI-PROJECT

#### PROJECT: PULL-REQUEST GIT WORKFLOW

#### SPECIFICATION

Build **Pull-Request Git Workflow** as a focused exercise for **Git Collaboration**. Keep the data and interface small enough to finish, but implement the following behavior:

- Demonstrate branch, pull request, review, conflict resolution, protected main, release tag, revert, and bisect in a small repository.
- Define a small input format, a transformed output format, and where failed records go.
- Use Git Collaboration to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Git
- GitHub
- A small sample repository; no application framework required

#### BUILD IT STEP BY STEP

1. Create `pull-request-git-workflow` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Demonstrate branch, pull request, review, conflict resolution, protected main, release tag, revert, and bisect in a small repository.
3. Use Git Collaboration to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for **Git Collaboration**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **PULL-REQUEST GIT WORKFLOW**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/pull-request-git-workflow
git commit -m "feat(pull-request-git-workflow): complete pull-request git workflow"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 4](../roadmaps/DevOps.md#phase-4) | [CONTINUE TO DEVOPS PHASE 5](../roadmaps/DevOps.md#phase-5)

<a id="devops-phase-5-project"></a>
### DEVOPS PHASE 5 MINI-PROJECT

#### PROJECT: OPERATIONS AUTOMATION CLI

#### SPECIFICATION

Build **Operations Automation CLI** as a focused exercise for **Shell and Python Automation**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build an idempotent operations CLI with typed arguments, validation, dry-run, structured logs, safe retry, and predictable exit codes.
- Give the user one clear main action and keep all other features secondary.
- Use Shell and Python Automation in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `operations-automation-cli` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Build an idempotent operations CLI with typed arguments, validation, dry-run, structured logs, safe retry, and predictable exit codes.
3. Use Shell and Python Automation in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Shell and Python Automation**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **OPERATIONS AUTOMATION CLI**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/operations-automation-cli
git commit -m "feat(operations-automation-cli): complete operations automation cli"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 5](../roadmaps/DevOps.md#phase-5) | [CONTINUE TO DEVOPS PHASE 6](../roadmaps/DevOps.md#phase-6)

<a id="devops-phase-6-project"></a>
### DEVOPS PHASE 6 MINI-PROJECT

#### PROJECT: REPRODUCIBLE ARTIFACT PIPELINE

#### SPECIFICATION

Build **Reproducible Artifact Pipeline** as a focused exercise for **Builds and Artifacts**. Keep the data and interface small enough to finish, but implement the following behavior:

- Produce a reproducible versioned artifact from pinned dependencies, checksum it, generate an SBOM, and store it in a local OCI registry.
- Define a small input format, a transformed output format, and where failed records go.
- Use Builds and Artifacts to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `reproducible-artifact-pipeline` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Produce a reproducible versioned artifact from pinned dependencies, checksum it, generate an SBOM, and store it in a local OCI registry.
3. Use Builds and Artifacts to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for **Builds and Artifacts**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **REPRODUCIBLE ARTIFACT PIPELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/reproducible-artifact-pipeline
git commit -m "chore(reproducible-artifact-pipeline): complete reproducible artifact pipeline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 6](../roadmaps/DevOps.md#phase-6) | [CONTINUE TO DEVOPS PHASE 7](../roadmaps/DevOps.md#phase-7)

<a id="devops-phase-7-project"></a>
### DEVOPS PHASE 7 MINI-PROJECT

#### PROJECT: QUALITY-GATED CI PIPELINE

#### SPECIFICATION

Build **Quality-Gated CI Pipeline** as a focused exercise for **Continuous Integration**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create CI that runs format, lint, type, unit, integration, build, and scan stages and stops before publishing on failure.
- Define a small input format, a transformed output format, and where failed records go.
- Use Continuous Integration to make the pipeline repeatable without duplicating correct results.
- Show processed, skipped, and failed counts at the end of every run.
- Rerun the same input and prove that the final output remains correct.

#### TECH STACK

- GitHub Actions
- A small sample application
- Its normal formatter, linter, and test runner

#### BUILD IT STEP BY STEP

1. Create `quality-gated-ci-pipeline` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Create CI that runs format, lint, type, unit, integration, build, and scan stages and stops before publishing on failure.
3. Use Continuous Integration to make the pipeline repeatable without duplicating correct results.
4. Show processed, skipped, and failed counts at the end of every run.
5. Rerun the same input and prove that the final output remains correct.
6. Add one normal example and one edge or failure example specifically for **Continuous Integration**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **QUALITY-GATED CI PIPELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/quality-gated-ci-pipeline
git commit -m "chore(quality-gated-ci-pipeline): complete quality-gated ci pipeline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 7](../roadmaps/DevOps.md#phase-7) | [CONTINUE TO DEVOPS PHASE 8](../roadmaps/DevOps.md#phase-8)

<a id="devops-phase-8-project"></a>
### DEVOPS PHASE 8 MINI-PROJECT

#### PROJECT: CANARY DEPLOYMENT SIMULATOR

#### SPECIFICATION

Build **Canary Deployment Simulator** as a focused exercise for **Continuous Delivery**. Keep the data and interface small enough to finish, but implement the following behavior:

- Simulate rolling, blue/green, and canary releases with health checks, verification thresholds, traffic changes, and automatic rollback.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from Continuous Delivery explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `canary-deployment-simulator` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Simulate rolling, blue/green, and canary releases with health checks, verification thresholds, traffic changes, and automatic rollback.
3. Represent the important states or data structures from Continuous Delivery explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **Continuous Delivery**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **CANARY DEPLOYMENT SIMULATOR**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/canary-deployment-simulator
git commit -m "feat(canary-deployment-simulator): complete canary deployment simulator"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 8](../roadmaps/DevOps.md#phase-8) | [CONTINUE TO DEVOPS PHASE 9](../roadmaps/DevOps.md#phase-9)

<a id="devops-phase-9-project"></a>
### DEVOPS PHASE 9 MINI-PROJECT

#### PROJECT: HARDENED MULTI-STAGE CONTAINER

#### SPECIFICATION

Build **Hardened Multi-Stage Container** as a focused exercise for **Container Engineering**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a minimal non-root multi-stage container with pinned base, small context, read-only filesystem, health check, and vulnerability scan.
- Give the user one clear main action and keep all other features secondary.
- Use Container Engineering in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Docker
- A small sample application
- Trivy for a local image scan

#### BUILD IT STEP BY STEP

1. Create `hardened-multi-stage-container` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Build a minimal non-root multi-stage container with pinned base, small context, read-only filesystem, health check, and vulnerability scan.
3. Use Container Engineering in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Container Engineering**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **HARDENED MULTI-STAGE CONTAINER**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/hardened-multi-stage-container
git commit -m "feat(hardened-multi-stage-container): complete hardened multi-stage container"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 9](../roadmaps/DevOps.md#phase-9) | [CONTINUE TO DEVOPS PHASE 10](../roadmaps/DevOps.md#phase-10)

<a id="devops-phase-10-project"></a>
### DEVOPS PHASE 10 MINI-PROJECT

#### PROJECT: KUBERNETES OPERATIONS LAB

#### SPECIFICATION

Build **Kubernetes Operations Lab** as a focused exercise for **Kubernetes Operations**. Keep the data and interface small enough to finish, but implement the following behavior:

- Operate a service on kind/k3d with namespaces, resources, probes, config, secrets, autoscaling, disruption, rollout, and rollback.
- Give the user one clear main action and keep all other features secondary.
- Use Kubernetes Operations in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Docker Engine or Podman
- kind or minikube
- kubectl and Kubernetes YAML

#### BUILD IT STEP BY STEP

1. Create `kubernetes-operations-lab` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Operate a service on kind/k3d with namespaces, resources, probes, config, secrets, autoscaling, disruption, rollout, and rollback.
3. Use Kubernetes Operations in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Kubernetes Operations**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **KUBERNETES OPERATIONS LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/kubernetes-operations-lab
git commit -m "feat(kubernetes-operations-lab): complete kubernetes operations lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 10](../roadmaps/DevOps.md#phase-10) | [CONTINUE TO DEVOPS PHASE 11](../roadmaps/DevOps.md#phase-11)

<a id="devops-phase-11-project"></a>
### DEVOPS PHASE 11 MINI-PROJECT

#### PROJECT: OPENTOFU STATE LIFECYCLE LAB

#### SPECIFICATION

Build **OpenTofu State Lifecycle Lab** as a focused exercise for **Infrastructure as Code**. Keep the data and interface small enough to finish, but implement the following behavior:

- Manage a local resource lifecycle with OpenTofu plans, state, locking, drift detection, import, module change, and safe destroy.
- Give the user one clear main action and keep all other features secondary.
- Use Infrastructure as Code in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- OpenTofu
- LocalStack or an isolated cloud sandbox
- Git

#### BUILD IT STEP BY STEP

1. Create `opentofu-state-lifecycle-lab` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Manage a local resource lifecycle with OpenTofu plans, state, locking, drift detection, import, module change, and safe destroy.
3. Use Infrastructure as Code in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Infrastructure as Code**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **OPENTOFU STATE LIFECYCLE LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/opentofu-state-lifecycle-lab
git commit -m "feat(opentofu-state-lifecycle-lab): complete opentofu state lifecycle lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 11](../roadmaps/DevOps.md#phase-11) | [CONTINUE TO DEVOPS PHASE 12](../roadmaps/DevOps.md#phase-12)

<a id="devops-phase-12-project"></a>
### DEVOPS PHASE 12 MINI-PROJECT

#### PROJECT: IDEMPOTENT ANSIBLE BASELINE

#### SPECIFICATION

Build **Idempotent Ansible Baseline** as a focused exercise for **Configuration Management**. Keep the data and interface small enough to finish, but implement the following behavior:

- Configure two local hosts/containers with Ansible roles, variables, handlers, secrets, check mode, and a clean second idempotent run.
- Give the user one clear main action and keep all other features secondary.
- Use Configuration Management in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ansible
- Two local Linux VMs or containers
- YAML and SSH

#### BUILD IT STEP BY STEP

1. Create `idempotent-ansible-baseline` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Configure two local hosts/containers with Ansible roles, variables, handlers, secrets, check mode, and a clean second idempotent run.
3. Use Configuration Management in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Configuration Management**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **IDEMPOTENT ANSIBLE BASELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/idempotent-ansible-baseline
git commit -m "chore(idempotent-ansible-baseline): complete idempotent ansible baseline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 12](../roadmaps/DevOps.md#phase-12) | [CONTINUE TO DEVOPS PHASE 13](../roadmaps/DevOps.md#phase-13)

<a id="devops-phase-13-project"></a>
### DEVOPS PHASE 13 MINI-PROJECT

#### PROJECT: CLOUD DELIVERY FOUNDATION

#### SPECIFICATION

Build **Cloud Delivery Foundation** as a focused exercise for **Cloud Infrastructure**. Keep the data and interface small enough to finish, but implement the following behavior:

- Provision the local network, cluster, registry, DNS, and storage foundation needed by a delivery pipeline from repeatable code.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Infrastructure in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `cloud-delivery-foundation` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Provision the local network, cluster, registry, DNS, and storage foundation needed by a delivery pipeline from repeatable code.
3. Use Cloud Infrastructure in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Cloud Infrastructure**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **CLOUD DELIVERY FOUNDATION**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/cloud-delivery-foundation
git commit -m "feat(cloud-delivery-foundation): complete cloud delivery foundation"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 13](../roadmaps/DevOps.md#phase-13) | [CONTINUE TO DEVOPS PHASE 14](../roadmaps/DevOps.md#phase-14)

<a id="devops-phase-14-project"></a>
### DEVOPS PHASE 14 MINI-PROJECT

#### PROJECT: OBSERVABLE DEMO SERVICE

#### SPECIFICATION

Build **Observable Demo Service** as a focused exercise for **Observability**. Keep the data and interface small enough to finish, but implement the following behavior:

- Instrument a demo service with metrics, logs, traces, request IDs, dashboard, alert, and a runbook linked to user impact.
- Define the accepted request or message shape and the returned success and error shapes.
- Use Observability in the request path instead of hiding all work in one function.
- Handle invalid input, a missing resource, and one dependency failure safely.
- Add an automated check for the main success path and the most important failure path.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `observable-demo-service` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Instrument a demo service with metrics, logs, traces, request IDs, dashboard, alert, and a runbook linked to user impact.
3. Use Observability in the request path instead of hiding all work in one function.
4. Handle invalid input, a missing resource, and one dependency failure safely.
5. Add an automated check for the main success path and the most important failure path.
6. Add one normal example and one edge or failure example specifically for **Observability**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **OBSERVABLE DEMO SERVICE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/observable-demo-service
git commit -m "feat(observable-demo-service): complete observable demo service"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 14](../roadmaps/DevOps.md#phase-14) | [CONTINUE TO DEVOPS PHASE 15](../roadmaps/DevOps.md#phase-15)

<a id="devops-phase-15-project"></a>
### DEVOPS PHASE 15 MINI-PROJECT

#### PROJECT: SLO AND ERROR BUDGET DASHBOARD

#### SPECIFICATION

Build **SLO and Error Budget Dashboard** as a focused exercise for **SRE and Error Budgets**. Keep the data and interface small enough to finish, but implement the following behavior:

- Define availability/latency SLIs, an SLO, error budget, burn-rate alert, and one automation that removes recurring toil.
- Use a small, understandable dataset with at least one normal, empty, and unusual value.
- Show the part of the data or system explained by SRE and Error Budgets, not decorative charts.
- Provide labels, units, legends, and one simple control or comparison where appropriate.
- Make the output readable without needing to inspect the source code.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `slo-and-error-budget-dashboard` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Define availability/latency SLIs, an SLO, error budget, burn-rate alert, and one automation that removes recurring toil.
3. Show the part of the data or system explained by SRE and Error Budgets, not decorative charts.
4. Provide labels, units, legends, and one simple control or comparison where appropriate.
5. Make the output readable without needing to inspect the source code.
6. Add one normal example and one edge or failure example specifically for **SRE and Error Budgets**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **SLO AND ERROR BUDGET DASHBOARD**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/slo-and-error-budget-dashboard
git commit -m "feat(slo-and-error-budget-dashboard): complete slo and error budget dashboard"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 15](../roadmaps/DevOps.md#phase-15) | [CONTINUE TO DEVOPS PHASE 16](../roadmaps/DevOps.md#phase-16)

<a id="devops-phase-16-project"></a>
### DEVOPS PHASE 16 MINI-PROJECT

#### PROJECT: SIGNED SOFTWARE SUPPLY CHAIN

#### SPECIFICATION

Build **Signed Software Supply Chain** as a focused exercise for **Software Supply-Chain Security**. Keep the data and interface small enough to finish, but implement the following behavior:

- Generate SBOM/provenance, scan code/dependencies/image/IaC, sign and verify the image, and block one unsafe admission.
- Give the user one clear main action and keep all other features secondary.
- Use Software Supply-Chain Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `signed-software-supply-chain` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Generate SBOM/provenance, scan code/dependencies/image/IaC, sign and verify the image, and block one unsafe admission.
3. Use Software Supply-Chain Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Software Supply-Chain Security**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **SIGNED SOFTWARE SUPPLY CHAIN**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/signed-software-supply-chain
git commit -m "feat(signed-software-supply-chain): complete signed software supply chain"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 16](../roadmaps/DevOps.md#phase-16) | [CONTINUE TO DEVOPS PHASE 17](../roadmaps/DevOps.md#phase-17)

<a id="devops-phase-17-project"></a>
### DEVOPS PHASE 17 MINI-PROJECT

#### PROJECT: GITOPS APPLICATION PLATFORM

#### SPECIFICATION

Build **GitOps Application Platform** as a focused exercise for **GitOps and Platform Engineering**. Keep the data and interface small enough to finish, but implement the following behavior:

- Reconcile an application from Git with Argo CD, detect drift, roll back through Git, and expose a safe service template.
- Give the user one clear main action and keep all other features secondary.
- Use GitOps and Platform Engineering in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `gitops-application-platform` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Reconcile an application from Git with Argo CD, detect drift, roll back through Git, and expose a safe service template.
3. Use GitOps and Platform Engineering in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **GitOps and Platform Engineering**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **GITOPS APPLICATION PLATFORM**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/gitops-application-platform
git commit -m "feat(gitops-application-platform): complete gitops application platform"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 17](../roadmaps/DevOps.md#phase-17) | [CONTINUE TO DEVOPS PHASE 18](../roadmaps/DevOps.md#phase-18)

<a id="devops-phase-18-project"></a>
### DEVOPS PHASE 18 MINI-PROJECT

#### PROJECT: CHAOS GAME DAY AND POSTMORTEM

#### SPECIFICATION

Build **Chaos Game Day and Postmortem** as a focused exercise for **Incident Response and Chaos**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run a controlled latency or dependency-failure game day with roles, timeline, recovery, blameless analysis, and owned actions.
- Give the user one clear main action and keep all other features secondary.
- Use Incident Response and Chaos in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `chaos-game-day-and-postmortem` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Run a controlled latency or dependency-failure game day with roles, timeline, recovery, blameless analysis, and owned actions.
3. Use Incident Response and Chaos in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Incident Response and Chaos**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **CHAOS GAME DAY AND POSTMORTEM**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/chaos-game-day-and-postmortem
git commit -m "feat(chaos-game-day-and-postmortem): complete chaos game day and postmortem"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 18](../roadmaps/DevOps.md#phase-18) | [CONTINUE TO DEVOPS PHASE 19](../roadmaps/DevOps.md#phase-19)

<a id="devops-phase-19-project"></a>
### DEVOPS PHASE 19 MINI-PROJECT

#### PROJECT: PRODUCTION DELIVERY PLATFORM

#### SPECIFICATION

Build **Production Delivery Platform** as a focused exercise for **Portfolio Delivery Platform**. Keep the data and interface small enough to finish, but implement the following behavior:

- Combine CI, signed containers, Kubernetes, GitOps, observability, SLOs, security, rollback, and recovery into one demo platform.
- Give the user one clear main action and keep all other features secondary.
- Use Portfolio Delivery Platform in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `production-delivery-platform` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Combine CI, signed containers, Kubernetes, GitOps, observability, SLOs, security, rollback, and recovery into one demo platform.
3. Use Portfolio Delivery Platform in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Portfolio Delivery Platform**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **PRODUCTION DELIVERY PLATFORM**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/production-delivery-platform
git commit -m "feat(production-delivery-platform): complete production delivery platform"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 19](../roadmaps/DevOps.md#phase-19) | [CONTINUE TO DEVOPS PHASE 20](../roadmaps/DevOps.md#phase-20)

<a id="devops-phase-20-project"></a>
### DEVOPS PHASE 20 MINI-PROJECT

#### PROJECT: TIMED DEVOPS INCIDENT DRILL

#### SPECIFICATION

Build **Timed DevOps Incident Drill** as a focused exercise for **Interviews**. Keep the data and interface small enough to finish, but implement the following behavior:

- Diagnose a timed broken deployment using pipeline, cluster, application, and telemetry evidence and explain each decision.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Interviews and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Ubuntu Linux or WSL 2
- Git and Bash
- Add Docker, Kubernetes, OpenTofu, or Ansible only when named by the phase

#### BUILD IT STEP BY STEP

1. Create `timed-devops-incident-drill` with `app`, `automation`, `tests`, and `deploy` folders in a Git repository.
2. Diagnose a timed broken deployment using pipeline, cluster, application, and telemetry evidence and explain each decision.
3. Use a metric connected to Interviews and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Interviews**.
7. Run the full automation from a clean checkout and prove that a deliberate bad input or failed check stops safely.

### Git Checkpoint

You have completed **TIMED DEVOPS INCIDENT DRILL**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- devops/timed-devops-incident-drill
git commit -m "feat(timed-devops-incident-drill): complete timed devops incident drill"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 20](../roadmaps/DevOps.md#phase-20) | [BUILD THE DEVOPS MAIN PORTFOLIO PROJECT](#devops-main-portfolio-project)

<a id="devops-main-portfolio-project"></a>
## DEVOPS MAIN PORTFOLIO PROJECT

#### PROJECT: OPEN DEVELOPER SELF-SERVICE DELIVERY PLATFORM

#### DESCRIPTION

A local platform that lets a developer create a service from a template, test it, build and sign a container, deploy it to Kubernetes through GitOps, observe it, roll it back, and respond to an incident.

#### WHO THIS IS FOR

- Application developer shipping a small service
- Platform engineer maintaining safe paved-road automation
- On-call engineer diagnosing and recovering the service

#### WHAT USERS CAN DO

- Generate a consistent service repository from a template
- Test, build, scan, sign, and promote an immutable artifact
- Deploy and reconcile it through GitOps with rollback
- Measure reliability and run a repeatable incident exercise

#### FREE AND OPEN-SOURCE TECH STACK

- Linux, Bash, Python, and Git
- Forgejo or a public GitHub repository with free Actions
- Docker Engine or Podman, BuildKit, and an OCI registry
- k3d or kind, Kubernetes, Helm, and Argo CD
- OpenTofu and Ansible
- Prometheus, Grafana, Loki, Tempo, and OpenTelemetry
- Trivy, Syft, Cosign, Checkov, and Open Policy Agent
- All required runtime and security tools are free and open source

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - DevOps Delivery Systems:** Map idea-to-production flow, queues, handoffs, lead time, failure rate, recovery time, and one improvement target.
2. **Phase 2 - Linux and Services:** Harden the Linux host, create service users, permissions, systemd units, logs, and safe operational commands.
3. **Phase 3 - Systems and Network Troubleshooting:** Build a DNS-to-process troubleshooting command that gathers bounded evidence without making changes.
4. **Phase 4 - Git Collaboration:** Use short-lived branches, pull requests, protected main, conventional commits, tags, and a clean rollback history.
5. **Phase 5 - Shell and Python Automation:** Create an idempotent Python/Bash CLI that scaffolds a service, validates input, supports dry-run, and logs changes.
6. **Phase 6 - Builds and Artifacts:** Pin dependencies, create reproducible builds, generate checksums/SBOM, and store immutable versioned artifacts.
7. **Phase 7 - Continuous Integration:** Create CI stages for formatting, linting, tests, dependency review, build, scan, and artifact publication.
8. **Phase 8 - Continuous Delivery:** Implement rolling, blue/green, and canary choices in a local simulator; define verification and automatic rollback.
9. **Phase 9 - Container Engineering:** Create a non-root multi-stage container with a read-only filesystem, health check, small context, and pinned base.
10. **Phase 10 - Kubernetes Operations:** Deploy to k3d/kind with namespaces, resources, probes, config, secrets, autoscaling, disruption control, and rollback.
11. **Phase 11 - Infrastructure as Code:** Provision local supporting resources with OpenTofu and demonstrate plan review, state locking, drift, import, and destroy.
12. **Phase 12 - Configuration Management:** Use Ansible to configure the host idempotently and prove the second run reports no unintended changes.
13. **Phase 13 - Cloud Infrastructure:** Create provider-neutral interfaces for DNS, storage, and registry so a cloud sandbox can replace local services later.
14. **Phase 14 - Observability:** Instrument the app with metrics, structured logs, traces, dashboards, alerts, and request correlation.
15. **Phase 15 - SRE and Error Budgets:** Define SLIs/SLOs, calculate an error budget and burn rate, automate one toil task, and write a useful runbook.
16. **Phase 16 - Software Supply-Chain Security:** Generate an SBOM, scan dependencies/images/IaC, sign the image with Cosign, verify it, and enforce an OPA policy.
17. **Phase 17 - GitOps and Platform Engineering:** Install Argo CD, reconcile desired state from Git, detect drift, and provide a safe self-service service template.
18. **Phase 18 - Incident Response and Chaos:** Inject latency, dependency failure, and pod loss; run incident command, recover, and create action-focused follow-up items.
19. **PHASE 19 - Portfolio Delivery Platform (REQUIRED CAPSTONE-COMPLETION STEP):** Polish the golden path, diagrams, dashboards, sample service, open-source license, and one-command local demonstration.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Practice a timed broken-deployment drill and explain architecture, delivery metrics, security, SLOs, and recovery decisions.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `open-developer-self-service-delivery-platform` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: delivery map, hardened host, diagnostic workflow, and reviewed Git policy**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "feat(delivery-platform): establish delivery and repository foundation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: scaffold automation, reproducible artifacts, CI/CD, containers, and Kubernetes**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "feat(delivery-platform): implement build and deployment golden path"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: OpenTofu, Ansible, cloud interfaces, observability, and SLO operations**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "feat(delivery-platform): integrate platform operations and reliability"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: supply-chain controls, GitOps reconciliation, and chaos recovery evidence**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "test(delivery-platform): verify trusted GitOps and incident recovery"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: polished self-service demo, diagrams, dashboards, and release documentation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- open-developer-self-service-delivery-platform
git commit -m "docs(delivery-platform): complete self-service platform release"
git tag -a delivery-platform-v1.0.0 -m "First complete delivery-platform release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Bootstrap the complete platform on a local Linux machine with Docker Engine/Podman and k3d/kind.
2. Run the scaffold CLI, push a sample service, and let the free public-repository CI or local Forgejo runner build, scan, sign, and publish it.
3. Let Argo CD deploy the signed image to the local cluster and confirm probes, dashboards, logs, traces, and rollback.
4. Keep Grafana, Argo CD, the registry, and cluster APIs bound to localhost unless you deliberately secure access.
5. Publish only a sanitized static architecture/demo page to GitHub Pages; do not expose the lab control plane.
6. Run the teardown and recovery commands from a clean checkout to prove another learner can reproduce the platform without paid services.

> **MAIN PROJECT NAVIGATION:** [REVIEW DEVOPS PHASE 19](../roadmaps/DevOps.md#phase-19) | [REVIEW DEVOPS PHASE 20](../roadmaps/DevOps.md#phase-20) | [RETURN TO THE DEVOPS ROADMAP](../roadmaps/DevOps.md#phase-index)

## Cybersecurity

Study this roadmap first: [ICT_Cybersecurity.md](../roadmaps/ICT_Cybersecurity.md). Build each mini-project after its phase, then build the main portfolio project after Phase 20.

<a id="cyber-phase-1-project"></a>
### CYBER PHASE 1 MINI-PROJECT

#### PROJECT: RISK REGISTER AND TREATMENT PLAN

#### SPECIFICATION

Build **Risk Register and Treatment Plan** as a focused exercise for **Risk-Based Security**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create a risk register for a fictional organization with assets, threats, vulnerabilities, likelihood, impact, owner, treatment, due date, and residual risk.
- Define one realistic scenario, its boundaries, and the intended reader for the Risk Register and Treatment Plan.
- Collect or create the exact inputs needed to apply Risk-Based Security; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Spreadsheet or Markdown table
- A fictional small-company scenario
- No coding required

#### BUILD IT STEP BY STEP

1. Create an isolated `risk-register-and-treatment-plan` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Create a risk register for a fictional organization with assets, threats, vulnerabilities, likelihood, impact, owner, treatment, due date, and residual risk.
3. Collect or create the exact inputs needed to apply Risk-Based Security; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Risk-Based Security**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **RISK REGISTER AND TREATMENT PLAN**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/risk-register-and-treatment-plan
git commit -m "docs(risk-register-and-treatment-plan): complete risk register and treatment plan"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 1](../roadmaps/ICT_Cybersecurity.md#phase-1) | [CONTINUE TO CYBER PHASE 2](../roadmaps/ICT_Cybersecurity.md#phase-2)

<a id="cyber-phase-2-project"></a>
### CYBER PHASE 2 MINI-PROJECT

#### PROJECT: NETWORK ATTACK SURFACE MAP

#### SPECIFICATION

Build **Network Attack Surface Map** as a focused exercise for **Networking for Security**. Keep the data and interface small enough to finish, but implement the following behavior:

- Draw an authorized lab network, inventory hosts/services/trust boundaries, validate exposure with safe scans, and prioritize attack paths.
- Define one realistic scenario, its boundaries, and the intended reader for the Network Attack Surface Map.
- Collect or create the exact inputs needed to apply Networking for Security; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- diagrams.net
- Nmap against your own lab only
- No coding required

#### BUILD IT STEP BY STEP

1. Create an isolated `network-attack-surface-map` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Draw an authorized lab network, inventory hosts/services/trust boundaries, validate exposure with safe scans, and prioritize attack paths.
3. Collect or create the exact inputs needed to apply Networking for Security; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Networking for Security**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **NETWORK ATTACK SURFACE MAP**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/network-attack-surface-map
git commit -m "docs(network-attack-surface-map): complete network attack surface map"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 2](../roadmaps/ICT_Cybersecurity.md#phase-2) | [CONTINUE TO CYBER PHASE 3](../roadmaps/ICT_Cybersecurity.md#phase-3)

<a id="cyber-phase-3-project"></a>
### CYBER PHASE 3 MINI-PROJECT

#### PROJECT: HOST HARDENING BASELINE

#### SPECIFICATION

Build **Host Hardening Baseline** as a focused exercise for **Host Security**. Keep the data and interface small enough to finish, but implement the following behavior:

- Apply and verify a Linux/Windows hardening baseline for accounts, patches, services, firewall, audit logs, and file permissions.
- Give the user one clear main action and keep all other features secondary.
- Use Host Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `host-hardening-baseline` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Apply and verify a Linux/Windows hardening baseline for accounts, patches, services, firewall, audit logs, and file permissions.
3. Use Host Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Host Security**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **HOST HARDENING BASELINE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/host-hardening-baseline
git commit -m "chore(host-hardening-baseline): complete host hardening baseline"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 3](../roadmaps/ICT_Cybersecurity.md#phase-3) | [CONTINUE TO CYBER PHASE 4](../roadmaps/ICT_Cybersecurity.md#phase-4)

<a id="cyber-phase-4-project"></a>
### CYBER PHASE 4 MINI-PROJECT

#### PROJECT: SECURE FILE VAULT

#### SPECIFICATION

Build **Secure File Vault** as a focused exercise for **Cryptography**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a local file vault using established cryptographic libraries with encryption, integrity, key derivation, rotation, and tamper failure.
- Give the user one clear main action and keep all other features secondary.
- Use Cryptography in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `secure-file-vault` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Build a local file vault using established cryptographic libraries with encryption, integrity, key derivation, rotation, and tamper failure.
3. Use Cryptography in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Cryptography**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **SECURE FILE VAULT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/secure-file-vault
git commit -m "feat(secure-file-vault): complete secure file vault"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 4](../roadmaps/ICT_Cybersecurity.md#phase-4) | [CONTINUE TO CYBER PHASE 5](../roadmaps/ICT_Cybersecurity.md#phase-5)

<a id="cyber-phase-5-project"></a>
### CYBER PHASE 5 MINI-PROJECT

#### PROJECT: LEAST-PRIVILEGE IAM REVIEW

#### SPECIFICATION

Build **Least-Privilege IAM Review** as a focused exercise for **Identity and Access Management**. Keep the data and interface small enough to finish, but implement the following behavior:

- Review fictional users, groups, roles, service accounts, MFA, stale access, and separation of duties and produce least-privilege changes.
- Give the user one clear main action and keep all other features secondary.
- Use Identity and Access Management in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `least-privilege-iam-review` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Review fictional users, groups, roles, service accounts, MFA, stale access, and separation of duties and produce least-privilege changes.
3. Use Identity and Access Management in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Identity and Access Management**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **LEAST-PRIVILEGE IAM REVIEW**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/least-privilege-iam-review
git commit -m "feat(least-privilege-iam-review): complete least-privilege iam review"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 5](../roadmaps/ICT_Cybersecurity.md#phase-5) | [CONTINUE TO CYBER PHASE 6](../roadmaps/ICT_Cybersecurity.md#phase-6)

<a id="cyber-phase-6-project"></a>
### CYBER PHASE 6 MINI-PROJECT

#### PROJECT: THREAT MODEL AND ATT&CK MAP

#### SPECIFICATION

Build **Threat Model and ATT&CK Map** as a focused exercise for **Threat Modeling and ATT&CK**. Keep the data and interface small enough to finish, but implement the following behavior:

- Threat-model a small portal with data-flow and trust-boundary diagrams, STRIDE-style threats, ATT&CK techniques, and prioritized controls.
- Define one realistic scenario, its boundaries, and the intended reader for the Threat Model and ATT&CK Map.
- Collect or create the exact inputs needed to apply Threat Modeling and ATT&CK; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- OWASP Threat Dragon
- MITRE ATT&CK Navigator
- No coding required

#### BUILD IT STEP BY STEP

1. Create an isolated `threat-model-and-att-ck-map` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Threat-model a small portal with data-flow and trust-boundary diagrams, STRIDE-style threats, ATT&CK techniques, and prioritized controls.
3. Collect or create the exact inputs needed to apply Threat Modeling and ATT&CK; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Threat Modeling and ATT&CK**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **THREAT MODEL AND ATT&CK MAP**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/threat-model-and-att-ck-map
git commit -m "docs(threat-model-and-att-ck-map): complete threat model and att&ck map"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 6](../roadmaps/ICT_Cybersecurity.md#phase-6) | [CONTINUE TO CYBER PHASE 7](../roadmaps/ICT_Cybersecurity.md#phase-7)

<a id="cyber-phase-7-project"></a>
### CYBER PHASE 7 MINI-PROJECT

#### PROJECT: OWASP REMEDIATION LAB

#### SPECIFICATION

Build **OWASP Remediation Lab** as a focused exercise for **Web Application Security**. Keep the data and interface small enough to finish, but implement the following behavior:

- Run OWASP Juice Shop locally, demonstrate selected issues safely, implement or document mitigations, and retest the same cases.
- Give the user one clear main action and keep all other features secondary.
- Use Web Application Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- OWASP Juice Shop in Docker
- Burp Suite Community or browser tools
- Use only the local practice target

#### BUILD IT STEP BY STEP

1. Create an isolated `owasp-remediation-lab` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Run OWASP Juice Shop locally, demonstrate selected issues safely, implement or document mitigations, and retest the same cases.
3. Use Web Application Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Web Application Security**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **OWASP REMEDIATION LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/owasp-remediation-lab
git commit -m "feat(owasp-remediation-lab): complete owasp remediation lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 7](../roadmaps/ICT_Cybersecurity.md#phase-7) | [CONTINUE TO CYBER PHASE 8](../roadmaps/ICT_Cybersecurity.md#phase-8)

<a id="cyber-phase-8-project"></a>
### CYBER PHASE 8 MINI-PROJECT

#### PROJECT: FIREWALL AND IDS VALIDATION

#### SPECIFICATION

Build **Firewall and IDS Validation** as a focused exercise for **Network Defenses**. Keep the data and interface small enough to finish, but implement the following behavior:

- Configure local segmentation, host firewall, Suricata rules, allowed traffic tests, blocked probes, alert validation, and false-positive tuning.
- Give the user one clear main action and keep all other features secondary.
- Use Network Defenses in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `firewall-and-ids-validation` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Configure local segmentation, host firewall, Suricata rules, allowed traffic tests, blocked probes, alert validation, and false-positive tuning.
3. Use Network Defenses in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Network Defenses**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **FIREWALL AND IDS VALIDATION**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/firewall-and-ids-validation
git commit -m "feat(firewall-and-ids-validation): complete firewall and ids validation"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 8](../roadmaps/ICT_Cybersecurity.md#phase-8) | [CONTINUE TO CYBER PHASE 9](../roadmaps/ICT_Cybersecurity.md#phase-9)

<a id="cyber-phase-9-project"></a>
### CYBER PHASE 9 MINI-PROJECT

#### PROJECT: ENDPOINT HARDENING PACK

#### SPECIFICATION

Build **Endpoint Hardening Pack** as a focused exercise for **Endpoint Hardening**. Keep the data and interface small enough to finish, but implement the following behavior:

- Create endpoint hardening configuration with audit/file-integrity telemetry, verification commands, rollback, and one simulated alert.
- Give the user one clear main action and keep all other features secondary.
- Use Endpoint Hardening in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `endpoint-hardening-pack` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Create endpoint hardening configuration with audit/file-integrity telemetry, verification commands, rollback, and one simulated alert.
3. Use Endpoint Hardening in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Endpoint Hardening**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **ENDPOINT HARDENING PACK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/endpoint-hardening-pack
git commit -m "feat(endpoint-hardening-pack): complete endpoint hardening pack"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 9](../roadmaps/ICT_Cybersecurity.md#phase-9) | [CONTINUE TO CYBER PHASE 10](../roadmaps/ICT_Cybersecurity.md#phase-10)

<a id="cyber-phase-10-project"></a>
### CYBER PHASE 10 MINI-PROJECT

#### PROJECT: VULNERABILITY TRIAGE PROGRAM

#### SPECIFICATION

Build **Vulnerability Triage Program** as a focused exercise for **Vulnerability Management**. Keep the data and interface small enough to finish, but implement the following behavior:

- Scan a deliberately vulnerable local VM with Greenbone, validate findings, rank them by context, assign remediation, and rescan.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Vulnerability Management and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- Greenbone/OpenVAS or Nessus Essentials
- A deliberately vulnerable local VM
- Spreadsheet; use only your own lab

#### BUILD IT STEP BY STEP

1. Create an isolated `vulnerability-triage-program` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Scan a deliberately vulnerable local VM with Greenbone, validate findings, rank them by context, assign remediation, and rescan.
3. Use a metric connected to Vulnerability Management and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Vulnerability Management**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **VULNERABILITY TRIAGE PROGRAM**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/vulnerability-triage-program
git commit -m "feat(vulnerability-triage-program): complete vulnerability triage program"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 10](../roadmaps/ICT_Cybersecurity.md#phase-10) | [CONTINUE TO CYBER PHASE 11](../roadmaps/ICT_Cybersecurity.md#phase-11)

<a id="cyber-phase-11-project"></a>
### CYBER PHASE 11 MINI-PROJECT

#### PROJECT: AUTHORIZED WEB PENTEST REPORT

#### SPECIFICATION

Build **Authorized Web Pentest Report** as a focused exercise for **Penetration Testing Methodology**. Keep the data and interface small enough to finish, but implement the following behavior:

- Perform a scoped authorized assessment of a local training app through planning, discovery, validation, evidence, cleanup, and remediation report.
- Define one realistic scenario, its boundaries, and the intended reader for the Authorized Web Pentest Report.
- Collect or create the exact inputs needed to apply Penetration Testing Methodology; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- OWASP Juice Shop in Docker
- Burp Suite Community
- Use only the local practice target

#### BUILD IT STEP BY STEP

1. Create an isolated `authorized-web-pentest-report` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Perform a scoped authorized assessment of a local training app through planning, discovery, validation, evidence, cleanup, and remediation report.
3. Collect or create the exact inputs needed to apply Penetration Testing Methodology; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Penetration Testing Methodology**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **AUTHORIZED WEB PENTEST REPORT**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/authorized-web-pentest-report
git commit -m "test(authorized-web-pentest-report): complete authorized web pentest report"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 11](../roadmaps/ICT_Cybersecurity.md#phase-11) | [CONTINUE TO CYBER PHASE 12](../roadmaps/ICT_Cybersecurity.md#phase-12)

<a id="cyber-phase-12-project"></a>
### CYBER PHASE 12 MINI-PROJECT

#### PROJECT: ACTIVE DIRECTORY DETECTION LAB

#### SPECIFICATION

Build **Active Directory Detection Lab** as a focused exercise for **Active Directory Defense**. Keep the data and interface small enough to finish, but implement the following behavior:

- Build a small AD training segment or use prepared logs, detect suspicious authentication/group changes, and write a containment checklist.
- Give the user one clear main action and keep all other features secondary.
- Use Active Directory Defense in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `active-directory-detection-lab` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Build a small AD training segment or use prepared logs, detect suspicious authentication/group changes, and write a containment checklist.
3. Use Active Directory Defense in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Active Directory Defense**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **ACTIVE DIRECTORY DETECTION LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/active-directory-detection-lab
git commit -m "feat(active-directory-detection-lab): complete active directory detection lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 12](../roadmaps/ICT_Cybersecurity.md#phase-12) | [CONTINUE TO CYBER PHASE 13](../roadmaps/ICT_Cybersecurity.md#phase-13)

<a id="cyber-phase-13-project"></a>
### CYBER PHASE 13 MINI-PROJECT

#### PROJECT: SIEM DETECTION ENGINEERING PACK

#### SPECIFICATION

Build **SIEM Detection Engineering Pack** as a focused exercise for **SIEM and Detection Engineering**. Keep the data and interface small enough to finish, but implement the following behavior:

- Ingest endpoint/network/auth logs into Wazuh, write and test Sigma detections, tune noise, and link alerts to triage steps.
- Accept a tiny text, number, file, packet, or task input and validate it before processing.
- Represent the important states or data structures from SIEM and Detection Engineering explicitly.
- Show each important result or state transition in a form a learner can inspect.
- Check a normal case, a boundary case, and an invalid case against known answers.

#### TECH STACK

- Wazuh or Elastic Security
- A local Linux endpoint
- Sigma rules

#### BUILD IT STEP BY STEP

1. Create an isolated `siem-detection-engineering-pack` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Ingest endpoint/network/auth logs into Wazuh, write and test Sigma detections, tune noise, and link alerts to triage steps.
3. Represent the important states or data structures from SIEM and Detection Engineering explicitly.
4. Show each important result or state transition in a form a learner can inspect.
5. Check a normal case, a boundary case, and an invalid case against known answers.
6. Add one normal example and one edge or failure example specifically for **SIEM and Detection Engineering**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **SIEM DETECTION ENGINEERING PACK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/siem-detection-engineering-pack
git commit -m "feat(siem-detection-engineering-pack): complete siem detection engineering pack"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 13](../roadmaps/ICT_Cybersecurity.md#phase-13) | [CONTINUE TO CYBER PHASE 14](../roadmaps/ICT_Cybersecurity.md#phase-14)

<a id="cyber-phase-14-project"></a>
### CYBER PHASE 14 MINI-PROJECT

#### PROJECT: INCIDENT FORENSICS CASE

#### SPECIFICATION

Build **Incident Forensics Case** as a focused exercise for **Digital Forensics and Incident Response**. Keep the data and interface small enough to finish, but implement the following behavior:

- Investigate prepared disk/log/network evidence, create a timeline, identify root cause and scope, then define containment, eradication, and recovery.
- Give the user one clear main action and keep all other features secondary.
- Use Digital Forensics and Incident Response in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `incident-forensics-case` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Investigate prepared disk/log/network evidence, create a timeline, identify root cause and scope, then define containment, eradication, and recovery.
3. Use Digital Forensics and Incident Response in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Digital Forensics and Incident Response**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **INCIDENT FORENSICS CASE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/incident-forensics-case
git commit -m "feat(incident-forensics-case): complete incident forensics case"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 14](../roadmaps/ICT_Cybersecurity.md#phase-14) | [CONTINUE TO CYBER PHASE 15](../roadmaps/ICT_Cybersecurity.md#phase-15)

<a id="cyber-phase-15-project"></a>
### CYBER PHASE 15 MINI-PROJECT

#### PROJECT: CLOUD IAM ATTACK-PATH REVIEW

#### SPECIFICATION

Build **Cloud IAM Attack-Path Review** as a focused exercise for **Cloud Security**. Keep the data and interface small enough to finish, but implement the following behavior:

- Map a local cloud IAM graph, find excessive trust/privilege paths, correct policies, and detect one safe simulated misuse.
- Give the user one clear main action and keep all other features secondary.
- Use Cloud Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `cloud-iam-attack-path-review` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Map a local cloud IAM graph, find excessive trust/privilege paths, correct policies, and detect one safe simulated misuse.
3. Use Cloud Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Cloud Security**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **CLOUD IAM ATTACK-PATH REVIEW**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/cloud-iam-attack-path-review
git commit -m "feat(cloud-iam-attack-path-review): complete cloud iam attack-path review"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 15](../roadmaps/ICT_Cybersecurity.md#phase-15) | [CONTINUE TO CYBER PHASE 16](../roadmaps/ICT_Cybersecurity.md#phase-16)

<a id="cyber-phase-16-project"></a>
### CYBER PHASE 16 MINI-PROJECT

#### PROJECT: CONTAINER SUPPLY-CHAIN LAB

#### SPECIFICATION

Build **Container Supply-Chain Lab** as a focused exercise for **Container and DevSecOps Security**. Keep the data and interface small enough to finish, but implement the following behavior:

- Generate an SBOM, scan code/image/manifests, enforce safe container/Kubernetes policy, and observe one harmless runtime anomaly.
- Give the user one clear main action and keep all other features secondary.
- Use Container and DevSecOps Security in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `container-supply-chain-lab` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Generate an SBOM, scan code/image/manifests, enforce safe container/Kubernetes policy, and observe one harmless runtime anomaly.
3. Use Container and DevSecOps Security in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Container and DevSecOps Security**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **CONTAINER SUPPLY-CHAIN LAB**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/container-supply-chain-lab
git commit -m "feat(container-supply-chain-lab): complete container supply-chain lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 16](../roadmaps/ICT_Cybersecurity.md#phase-16) | [CONTINUE TO CYBER PHASE 17](../roadmaps/ICT_Cybersecurity.md#phase-17)

<a id="cyber-phase-17-project"></a>
### CYBER PHASE 17 MINI-PROJECT

#### PROJECT: STATIC MALWARE TRIAGE

#### SPECIFICATION

Build **Static Malware Triage** as a focused exercise for **Malware Analysis**. Keep the data and interface small enough to finish, but implement the following behavior:

- Perform static-only analysis of a harmless training binary using hashes, strings, headers, imports, signatures, and a YARA rule.
- Choose a baseline and at least one alternative that can be compared fairly.
- Use a metric connected to Malware Analysis and explain in one sentence what a better value means.
- Run both approaches on the same controlled inputs and store the result in a table.
- Include one case where the preferred approach fails or becomes a poor choice.

#### TECH STACK

- REMnux or FLARE-VM
- Static-analysis tools only
- Use a harmless training sample; do not execute unknown malware

#### BUILD IT STEP BY STEP

1. Create an isolated `static-malware-triage` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Perform static-only analysis of a harmless training binary using hashes, strings, headers, imports, signatures, and a YARA rule.
3. Use a metric connected to Malware Analysis and explain in one sentence what a better value means.
4. Run both approaches on the same controlled inputs and store the result in a table.
5. Include one case where the preferred approach fails or becomes a poor choice.
6. Add one normal example and one edge or failure example specifically for **Malware Analysis**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **STATIC MALWARE TRIAGE**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/static-malware-triage
git commit -m "feat(static-malware-triage): complete static malware triage"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 17](../roadmaps/ICT_Cybersecurity.md#phase-17) | [CONTINUE TO CYBER PHASE 18](../roadmaps/ICT_Cybersecurity.md#phase-18)

<a id="cyber-phase-18-project"></a>
### CYBER PHASE 18 MINI-PROJECT

#### PROJECT: CONTROL-TO-EVIDENCE AUDIT PACK

#### SPECIFICATION

Build **Control-to-Evidence Audit Pack** as a focused exercise for **Governance, Risk, and Compliance**. Keep the data and interface small enough to finish, but implement the following behavior:

- Map a fictional organization's risks and controls to a small framework, identify evidence owners/gaps, and create a remediation plan.
- Define one realistic scenario, its boundaries, and the intended reader for the Control-to-Evidence Audit Pack.
- Collect or create the exact inputs needed to apply Governance, Risk, and Compliance; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `control-to-evidence-audit-pack` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Map a fictional organization's risks and controls to a small framework, identify evidence owners/gaps, and create a remediation plan.
3. Collect or create the exact inputs needed to apply Governance, Risk, and Compliance; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Governance, Risk, and Compliance**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **CONTROL-TO-EVIDENCE AUDIT PACK**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/control-to-evidence-audit-pack
git commit -m "docs(control-to-evidence-audit-pack): complete control-to-evidence audit pack"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 18](../roadmaps/ICT_Cybersecurity.md#phase-18) | [CONTINUE TO CYBER PHASE 19](../roadmaps/ICT_Cybersecurity.md#phase-19)

<a id="cyber-phase-19-project"></a>
### CYBER PHASE 19 MINI-PROJECT

#### PROJECT: DEFENSIVE SECURITY PORTFOLIO

#### SPECIFICATION

Build **Defensive Security Portfolio** as a focused exercise for **Security Portfolio**. Keep the data and interface small enough to finish, but implement the following behavior:

- Package sanitized risk, hardening, detection, investigation, cloud, and container artifacts into a coherent defensive portfolio.
- Define one realistic scenario, its boundaries, and the intended reader for the Defensive Security Portfolio.
- Collect or create the exact inputs needed to apply Security Portfolio; label assumptions instead of hiding them.
- Produce a final diagram, table, report, or decision document with findings ordered by importance.
- Add one concrete recommendation or next action for every important finding.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `defensive-security-portfolio` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Package sanitized risk, hardening, detection, investigation, cloud, and container artifacts into a coherent defensive portfolio.
3. Collect or create the exact inputs needed to apply Security Portfolio; label assumptions instead of hiding them.
4. Produce a final diagram, table, report, or decision document with findings ordered by importance.
5. Add one concrete recommendation or next action for every important finding.
6. Add one normal example and one edge or failure example specifically for **Security Portfolio**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **DEFENSIVE SECURITY PORTFOLIO**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/defensive-security-portfolio
git commit -m "feat(defensive-security-portfolio): complete defensive security portfolio"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 19](../roadmaps/ICT_Cybersecurity.md#phase-19) | [CONTINUE TO CYBER PHASE 20](../roadmaps/ICT_Cybersecurity.md#phase-20)

<a id="cyber-phase-20-project"></a>
### CYBER PHASE 20 MINI-PROJECT

#### PROJECT: TIMED SOC INVESTIGATION

#### SPECIFICATION

Build **Timed SOC Investigation** as a focused exercise for **Interviews**. Keep the data and interface small enough to finish, but implement the following behavior:

- Investigate a timed alert packet, state severity and hypotheses, gather evidence, choose containment, and communicate next steps.
- Give the user one clear main action and keep all other features secondary.
- Use Interviews in the design and make that use visible in the code or interface.
- Keep the working data after restart when persistence is relevant.
- Handle empty input, invalid input, and the normal user journey without crashing.

#### TECH STACK

- Ubuntu/Kali Linux in an isolated virtual machine
- Python 3.12 and Wireshark
- Use deliberately vulnerable practice targets only; never test systems without permission

#### BUILD IT STEP BY STEP

1. Create an isolated `timed-soc-investigation` lab and an `artifacts` folder; use only systems you own or are authorized to test.
2. Investigate a timed alert packet, state severity and hypotheses, gather evidence, choose containment, and communicate next steps.
3. Use Interviews in the design and make that use visible in the code or interface.
4. Keep the working data after restart when persistence is relevant.
5. Handle empty input, invalid input, and the normal user journey without crashing.
6. Add one normal example and one edge or failure example specifically for **Interviews**.
7. Verify the defensive result, export only sanitized artifacts, and restore the isolated lab snapshot if it was changed.

### Git Checkpoint

You have completed **TIMED SOC INVESTIGATION**. Run the card's final command, test, or output check. From the portfolio repository root, review and save only this project's folder:

```bash
git status
git add -- cyber/timed-soc-investigation
git commit -m "feat(timed-soc-investigation): complete timed soc investigation"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW CYBER PHASE 20](../roadmaps/ICT_Cybersecurity.md#phase-20) | [BUILD THE CYBER MAIN PORTFOLIO PROJECT](#cyber-main-portfolio-project)

<a id="cyber-main-portfolio-project"></a>
## CYBER MAIN PORTFOLIO PROJECT

#### PROJECT: DEFENSIVE SOC LAB FOR A SMALL NONPROFIT

#### DESCRIPTION

An isolated blue-team environment that models a small nonprofit, hardens its systems, centralizes logs, detects safe simulated attacks, investigates an incident, and maps technical controls to risk and compliance needs.

#### WHO THIS IS FOR

- SOC analyst monitoring and investigating alerts
- Security engineer hardening endpoints, network, cloud, and containers
- Nonprofit manager reviewing prioritized risk and response status

#### WHAT USERS CAN DO

- Maintain an asset, identity, risk, and control inventory
- Detect and investigate safe network, endpoint, web, identity, and container simulations
- Preserve evidence and follow a repeatable incident workflow
- Publish sanitized detections and risk summaries without exposing attackable systems

#### FREE AND OPEN-SOURCE TECH STACK

- VirtualBox or KVM/libvirt with isolated virtual networks
- Ubuntu, Windows evaluation VM, and deliberately vulnerable training targets
- Wazuh or Elastic Open Source, Zeek, and Suricata
- Sigma, YARA, osquery, Velociraptor, and Timesketch
- Greenbone Community Edition and OWASP ZAP
- Docker Engine or Podman, kind, Trivy, and Falco
- MITRE ATT&CK Navigator and OWASP Threat Dragon
- All required security tooling is free; testing is limited to the isolated authorized lab

No paid API, commercial license, or paid cloud resource is required. Use only generated, public, or permissioned data.

> **HOW PHASES 19 AND 20 WORK HERE:** Phase 19 is a required capstone-completion step: apply that roadmap's final engineering, integration, automation, migration, quality, or portfolio work. Phase 20 does not add another product feature. It is post-build interview and presentation practice using the completed project. The software is functionally complete after Phase 19; do Phase 20 to complete the career-preparation roadmap.

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Risk-Based Security:** Define nonprofit assets, owners, threats, likelihood, impact, risk appetite, and a prioritized treatment register.
2. **Phase 2 - Networking for Security:** Draw the authorized network, capture a baseline, and identify only lab services, trust boundaries, and exposure.
3. **Phase 3 - Host Security:** Harden Linux and Windows baselines, enable useful audit logs, and verify required services still work.
4. **Phase 4 - Cryptography:** Create a small file-encryption and integrity workflow with safe key handling, rotation, and tamper detection.
5. **Phase 5 - Identity and Access Management:** Centralize users and roles, enforce least privilege and MFA where possible, and test joiner/mover/leaver cases.
6. **Phase 6 - Threat Modeling and ATT&CK:** Threat-model the nonprofit portal, map realistic techniques to MITRE ATT&CK, and select preventive/detective controls.
7. **Phase 7 - Web Application Security:** Run OWASP Juice Shop locally, identify selected OWASP issues, apply or describe remediations, and retest safely.
8. **Phase 8 - Network Defenses:** Configure segmentation, firewall rules, Zeek, and Suricata; verify allowed traffic and alert on a safe blocked probe.
9. **Phase 9 - Endpoint Hardening:** Deploy endpoint hardening, osquery/Wazuh telemetry, file-integrity monitoring, and one containment action.
10. **Phase 10 - Vulnerability Management:** Scan only the lab with Greenbone, validate findings, rank by exploitability and business impact, and track remediation.
11. **Phase 11 - Penetration Testing Methodology:** Follow scope, discovery, validation, evidence, cleanup, and reporting for an authorized ZAP-based portal assessment.
12. **Phase 12 - Active Directory Defense:** Build an Active Directory training segment, simulate a safe authentication anomaly, and detect it from Windows events.
13. **Phase 13 - SIEM and Detection Engineering:** Centralize logs, write Sigma detections, tune false positives, test alerts, and link each alert to a triage runbook.
14. **Phase 14 - Digital Forensics and Incident Response:** Investigate a prepared incident with a timeline, volatile/disk/log evidence, containment, eradication, recovery, and lessons.
15. **Phase 15 - Cloud Security:** Model a local cloud IAM attack path, remove excessive permissions, and detect the simulated misuse in audit logs.
16. **Phase 16 - Container and DevSecOps Security:** Scan container code/images/manifests, generate an SBOM, enforce admission-style policy, and detect suspicious runtime behavior.
17. **Phase 17 - Malware Analysis:** Perform static-only triage of a harmless training sample with hashes, strings, metadata, imports, YARA, and safe conclusions.
18. **Phase 18 - Governance, Risk, and Compliance:** Map risks and controls to a small framework, assign evidence owners, identify gaps, and create a realistic remediation plan.
19. **PHASE 19 - Security Portfolio (REQUIRED CAPSTONE-COMPLETION STEP):** Polish sanitized detections, dashboards, timelines, risk tables, hardening code, lab diagrams, and an open-source license.
20. **PHASE 20 - Interviews (POST-BUILD PRACTICE; NO NEW PRODUCT FEATURE):** Run a timed unknown-alert investigation and explain severity, evidence, containment, communication, and next steps aloud.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in `defensive-soc-lab` inside the portfolio repository. The five checkpoints below preserve working phase groups without interrupting every implementation step. Test the completed group before committing; the repository-level ignore rules still apply.

##### Git Checkpoint 1

You have completed **Phases 1-4: risk register, isolated topology, hardened hosts, and cryptographic evidence**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "feat(soc-lab): establish authorized defensive lab baseline"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-10: identity, threat model, web and network defenses, endpoint telemetry, and vulnerability process**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "feat(soc-lab): implement layered detection and hardening"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 11-15: authorized assessment, AD defense, SIEM detections, incident timeline, and cloud controls**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "feat(soc-lab): integrate detection and incident workflows"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 16-18: container policy, safe malware triage, governance mapping, and recovery checks**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "test(soc-lab): verify safe security exercises and controls"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the completed milestone works and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 19: sanitized detections, dashboards, evidence, diagrams, and portfolio documentation**. Run the relevant application checks, then save this capstone milestone:

```bash
git status
git add -- defensive-soc-lab
git commit -m "docs(soc-lab): complete defensive SOC lab release"
git tag -a soc-lab-v1.0.0 -m "First complete soc-lab release"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag
```

Continue only when the completed milestone works and the working tree is clean.

#### HOW TO DEPLOY IT FOR FREE

1. Run all security systems on an isolated host-only VirtualBox/KVM network; never bridge vulnerable targets to the public internet.
2. Use automation to start sensors, SIEM, endpoints, training targets, and safe simulations, then verify log ingestion and alert routing.
3. Take snapshots before exercises and provide one command or documented sequence to reset every target.
4. Bind dashboards to localhost or an authenticated management network and remove default credentials.
5. Export only sanitized ATT&CK maps, Sigma/YARA rules, dashboards, incident timelines, and risk summaries to GitHub Pages for free.
6. Shut down the lab after use, confirm no vulnerable listener is public, and keep raw evidence containing identifiers outside the public repository.

> **MAIN PROJECT NAVIGATION:** [REVIEW CYBER PHASE 19](../roadmaps/ICT_Cybersecurity.md#phase-19) | [REVIEW CYBER PHASE 20](../roadmaps/ICT_Cybersecurity.md#phase-20) | [RETURN TO THE CYBER ROADMAP](../roadmaps/ICT_Cybersecurity.md#phase-index)

## Git and Git Workflows

Study this roadmap first: [Git.md](../roadmaps/Git.md). Build one project after each of its 15 phases, then build the main portfolio project after Phase 15. The cards below intentionally preserve the richer safety, evidence, and recovery requirements of the Git roadmap.

<a id="git-phase-1-project"></a>
### GIT PHASE 1 MINI-PROJECT

#### PROJECT: Reproducible Git Workbench

#### SPECIFICATION

- **Scenario / purpose:** Reproduce a safe Git laboratory for a new teammate without hidden settings; prove Git is local and a forge is an optional collaboration layer.
- **Skills / prerequisites:** Phase 1; installation verification, config scopes, `init`, bare remotes, `clone`, `.git`, and Git-versus-hosting boundaries.
- **Starting state:** No workbench directory or online account. Use only Git and a text editor; Forgejo/Gitea is optional and open source.
- **Expected state:** Before the checkpoint, two working clones point to one local bare remote and `README.md` is untracked. The checkpoint creates the first intentional commit for Phase 2 to inspect.

#### BUILD IT STEP BY STEP

1. Record `git --version` and a sanitized `git config --list --show-origin`; set honest identity, editor, and `main` deliberately.
2. Create `git-workbench`, run `git init`, add an untracked README, and locate repository administration with `git rev-parse --git-dir`.
3. Create `../workbench-remote.git` with `git init --bare`, add it as a remote, and make a second clone.
4. Document working tree versus `.git`, and local Git versus GitHub/GitLab/Forgejo/Gitea responsibilities.
5. Verify both clones and remote URLs from a clean terminal; save no token, credential, or unsanitized identity output.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** initialize and label boundaries; prove global/local precedence; reproduce the full lab at a second path from README alone.
- **Deliberate mistake / recovery:** set a wrong local email, then correct only local scope and verify its origin without altering global config.
- **Common mistakes:** treating author identity as authentication, assuming `origin` means GitHub, or editing `.git` blindly.
- **Definition of done / portfolio evidence:** reproducible README, sanitized config output, topology diagram, and a one-minute explanation of why clone is more than download.

### Git Checkpoint

You have completed **Reproducible Git Workbench**. Run its final verification, save the required sanitized evidence under `evidence/phase-1`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-1
git commit -m "chore(workbench): establish reproducible Git lab"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 1](../roadmaps/Git.md#phase-1) | [CONTINUE TO GIT PHASE 2](../roadmaps/Git.md#phase-2)

<a id="git-phase-2-project"></a>
### GIT PHASE 2 MINI-PROJECT

#### PROJECT: Three-State Change Journal

#### SPECIFICATION

- **Scenario / purpose:** Prove to a reviewer exactly what the next commit contains through working-tree/index/repository evidence.
- **Skills / prerequisites:** Phase 2 and Reproducible Git Workbench; lifecycle states, `status`, both diffs, patch staging, ignores, and untracking.
- **Starting state:** One committed README plus an unstaged line; Git CLI and editor only.
- **Expected graph/state:** `A---B---C main`; B/C each contain one concern and ignored `build.log` never enters the index.

#### BUILD IT STEP BY STEP

1. Create `journal.md`, `.gitignore`, and generated `build.log`; capture untracked, staged, committed, and modified states.
2. Put two unrelated concerns in one file and select one with `git add -p`.
3. Save `git diff` and `git diff --staged`, commit the first concern, then commit the second separately.
4. Prove `.gitignore` affects untracked discovery but not a path already tracked; untrack the fixture without deleting its working copy.
5. Verify with `git status --short`, `git check-ignore -v`, `git ls-files`, `git show --stat`, and a clean final status.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** show all states; split two concerns; demonstrate already-tracked ignore behavior and correct untracking.
- **Deliberate mistake / recovery:** stage the wrong hunk, unstage it without losing disk edits, verify both diffs, then stage correctly.
- **Common mistakes:** reading only status, confusing diff directions, or using destructive restore for an index-only problem.
- **Definition of done / portfolio evidence:** lifecycle table, saved staged diffs, exact commit IDs, ignored-file proof, and an interview explanation of “staged and modified” simultaneously.

### Git Checkpoint

You have completed **Three-State Change Journal**. Run its final verification, save the required sanitized evidence under `evidence/phase-2`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- journal.md .gitignore evidence/phase-2
git commit -m "feat(index): complete three-state change journal"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 2](../roadmaps/Git.md#phase-2) | [CONTINUE TO GIT PHASE 3](../roadmaps/Git.md#phase-3)

<a id="git-phase-3-project"></a>
### GIT PHASE 3 MINI-PROJECT

#### PROJECT: Atomic History Exhibit

#### SPECIFICATION

- **Scenario / purpose:** Let a review panel understand five logical changes from history before opening final files.
- **Skills / prerequisites:** Phase 3 and Three-State Change Journal; atomic commits, author/committer, messages, revision syntax, comparison, and search.
- **Starting state:** Clean main with at least three commits; Git CLI and a tiny text project.
- **Expected graph/state:** `A---B---C---D---E---F main`; every commit is coherent and independently explainable.

#### BUILD IT STEP BY STEP

1. Plan five logical changes, implement them in a deliberately mixed order, and stage them in logical order with patch mode.
2. Write specific subjects; add one body explaining why and one appropriate trailer.
3. Inspect with `git log --format=fuller`, `git show`, `git rev-parse`, and `git diff A..B`.
4. Answer five questions using `git log -S`, `-G`, `--follow`, `--grep`, and path limitation.
5. Revert each feature commit on a disposable branch and verify each is a coherent unit; compare final tree hashes after any private cleanup.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** identify parents/messages; locate added/removed content; reorder/split history without changing the intended final tree.
- **Deliberate mistake / recovery:** create one `misc changes` commit, split it before publication, and prove the final tree is unchanged.
- **Common mistakes:** treating atomic as “few lines,” confusing author/committer, or using `..` and `...` interchangeably.
- **Definition of done / portfolio evidence:** graph, five IDs, message rationale, history-investigation report, tree comparison, and defense of commit boundaries.

### Git Checkpoint

You have completed **Atomic History Exhibit**. Run its final verification, save the required sanitized evidence under `evidence/phase-3`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-3
git commit -m "docs(history): record atomic history investigation"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 3](../roadmaps/Git.md#phase-3) | [CONTINUE TO GIT PHASE 4](../roadmaps/Git.md#phase-4)

<a id="git-phase-4-project"></a>
### GIT PHASE 4 MINI-PROJECT

#### PROJECT: Object Database Archaeology

#### SPECIFICATION

- **Scenario / purpose:** Prove what Git stores and why a detached or “lost” commit can remain recoverable.
- **Skills / prerequisites:** Phase 4 and Atomic History Exhibit; objects, trees, refs, `HEAD`, reachability, reflogs, loose/packed storage.
- **Starting state:** Six commits and two identical-content paths; Git CLI and optional open-source hex viewer.
- **Expected graph/state:** `A---B---C main` and `C---D rescue/object-archaeology`; D is temporarily unnamed, then rescued.

#### BUILD IT STEP BY STEP

1. Map refs with `git show-ref`; resolve `HEAD`, its commit/tree, and every blob using `rev-parse`, `cat-file`, and `ls-tree`.
2. Prove two filenames with identical bytes reference one blob.
3. Detach `HEAD`, create D, switch away, locate D in reflog, inspect it, and name it with a rescue branch.
4. Record `git count-objects -vH`, run safe `git gc`, and compare object identity/count/storage afterward.
5. Use `git fsck` to confirm connectivity and write an object/reachability diagram.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** object inventory; detached rescue; optional plumbing-created commit readable by normal Git.
- **Deliberate mistake / recovery:** abandon a detached commit, then recover only after evidence-based identification.
- **Common mistakes:** editing `.git/objects`, calling reflog remote backup, or treating pack deltas as the commit model.
- **Definition of done / portfolio evidence:** object map, command transcript, before/after counts, rescue graph, and detached-HEAD interview explanation.

### Git Checkpoint

You have completed **Object Database Archaeology**. Run its final verification, save the required sanitized evidence under `evidence/phase-4`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-4
git commit -m "docs(internals): document object database archaeology"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 4](../roadmaps/Git.md#phase-4) | [CONTINUE TO GIT PHASE 5](../roadmaps/Git.md#phase-5)

<a id="git-phase-5-project"></a>
### GIT PHASE 5 MINI-PROJECT

#### PROJECT: Parallel Feature Branch Lab

#### SPECIFICATION

- **Scenario / purpose:** Model three developers working on a feature, docs, and hotfix from different bases without losing track of refs.
- **Skills / prerequisites:** Phase 5 and Object Database Archaeology; create/switch/rename/delete, upstreams, divergence, naming, reachability.
- **Starting state:** Clean main, local bare remote, two clones, and no feature branches.
- **Expected graph/state:** At least three tips from two bases, one ahead/behind upstream relationship, and no unnamed intended work.

#### BUILD IT STEP BY STEP

1. Create three purpose-named branches and commit distinct work; publish two with explicit upstreams.
2. Advance the remote from clone B, fetch in clone A, and document local versus remote-tracking refs.
3. Use `git branch -vv`, `merge-base`, and left/right graph queries to explain ahead/behind.
4. Rename one branch and attempt safe deletion of merged and unmerged practice branches.
5. Make keep/delete decisions from reachability evidence and save the final ref audit.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** create/name; explain divergence; prove cleanup safety for all refs.
- **Deliberate mistake / recovery:** trigger `git branch -d` refusal on unmerged work, preserve a safety ref, and integrate or retain it instead of forcing blindly.
- **Common mistakes:** confusing local/remote-tracking branches, deleting by age, or using permanent environment branches by habit.
- **Definition of done / portfolio evidence:** graph, `branch -vv`, merge bases, naming policy, cleanup log, and ahead/behind explanation.

### Git Checkpoint

You have completed **Parallel Feature Branch Lab**. Run its final verification, save the required sanitized evidence under `evidence/phase-5`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-5
git commit -m "docs(branching): capture parallel branch experiment"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 5](../roadmaps/Git.md#phase-5) | [CONTINUE TO GIT PHASE 6](../roadmaps/Git.md#phase-6)

<a id="git-phase-6-project"></a>
### GIT PHASE 6 MINI-PROJECT

#### PROJECT: Conflict Resolution Gauntlet

#### SPECIFICATION

- **Scenario / purpose:** Resolve content, rename, modify/delete, and binary conflicts from written business intent rather than marker deletion.
- **Skills / prerequisites:** Phase 6 and Parallel Feature Branch Lab; merge bases, FF/three-way, index stages, abort/continue, tools, `rerere`, tests.
- **Starting state:** Four prepared divergent branch pairs in a disposable clone; Git and optional open-source Meld/KDiff3.
- **Expected graph/state:** Four tested integration commits with two parents and documented merge bases/resolutions.

#### BUILD IT STEP BY STEP

1. Predict each graph and reproduce all four conflict types with `git merge --no-commit`.
2. Inspect `status`, `git ls-files -u`, `git diff --cc`, and diff3 markers; abort and repeat one scenario.
3. Resolve from stated requirements, stage the final state, run `git diff --staged --check` and fixture tests, then commit.
4. Enable `rerere`, recreate a conflict, inspect the reused result, and challenge it with changed semantics.
5. Save before/after graphs and one decision record per conflict.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** text conflict; rename/delete conflicts; binary ownership plus `rerere` reuse audit.
- **Deliberate mistake / recovery:** accept an entire side that discards a required line; abort or correct/retest and prove the failure test detects it.
- **Common mistakes:** context-free ours/theirs, untested marker removal, or destructive reset instead of merge abort.
- **Definition of done / portfolio evidence:** correct trees, index-stage capture, tests, resolution rationale, graphs, and a three-way merge explanation.

### Git Checkpoint

You have completed **Conflict Resolution Gauntlet**. Run its final verification, save the required sanitized evidence under `evidence/phase-6`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-6
git commit -m "test(merge): document conflict resolution gauntlet"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 6](../roadmaps/Git.md#phase-6) | [CONTINUE TO GIT PHASE 7](../roadmaps/Git.md#phase-7)

<a id="git-phase-7-project"></a>
### GIT PHASE 7 MINI-PROJECT

#### PROJECT: Distributed Review Simulation

#### SPECIFICATION

- **Scenario / purpose:** Simulate maintainer and contributors collaborating through forks/remotes, review, checks, and protected-main policy.
- **Skills / prerequisites:** Phase 7 and Conflict Resolution Gauntlet; fetch/pull/push, remote-tracking refs, multiple remotes, fork sync, PR/MR, review etiquette.
- **Starting state:** Upstream bare/Forgejo/Gitea repository, two contributor clones/forks, clean main.
- **Expected graph/state:** One reviewed tested integration on upstream main and synchronized forks with documented branch cleanup.

#### BUILD IT STEP BY STEP

1. Build `origin`/`upstream` topology and publish a short contributor branch.
2. Fetch a new upstream commit without integrating and prove the working tree remains unchanged.
3. Open or locally simulate a review; request one justified change and update through a new commit.
4. Resolve an induced conflict, run the required check, choose merge/squash/rebase policy, and integrate.
5. Synchronize the second fork and verify from a fresh clone using refs, graph, tests, and review record.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** fetch proof; reviewer-author iteration; compare three host integration methods for the same proposal.
- **Deliberate mistake / recovery:** pull a diverged branch without explicit strategy, abort/inspect, then repeat with a documented strategy.
- **Common mistakes:** treating `origin/main` as live, assuming `origin` is reserved, leaking credentials, or reviewing generated noise.
- **Definition of done / portfolio evidence:** topology, PR/MR or transcript, check output, graph, merge rationale, and fetch/pull/PR distinction.

### Git Checkpoint

You have completed **Distributed Review Simulation**. Run its final verification, save the required sanitized evidence under `evidence/phase-7`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-7
git commit -m "docs(collaboration): record distributed review simulation"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 7](../roadmaps/Git.md#phase-7) | [CONTINUE TO GIT PHASE 8](../roadmaps/Git.md#phase-8)

<a id="git-phase-8-project"></a>
### GIT PHASE 8 MINI-PROJECT

#### PROJECT: Safe Undo Decision Lab

#### SPECIFICATION

- **Scenario / purpose:** Solve six different “undo” requests by affected state, desired final state, and publication boundary.
- **Skills / prerequisites:** Phase 8 and Distributed Review Simulation; restore/unstage, amend, reset modes, revert, merge revert, verification.
- **Starting state:** Tagged baseline, staged/unstaged edits, unpublished commits, and a simulated published merge in disposable clones.
- **Expected graph/state:** Private cases may replace/move refs; published cases retain ancestry and add inverse commits.

#### BUILD IT STEP BY STEP

1. Classify one working-tree discard and one unstage request; inspect both diffs before/after.
2. Amend one unpublished commit and compare old/new objects through reflog.
3. Demonstrate soft, mixed, and hard reset from identical cloned state; record WT/index/ref triples.
4. Revert a published commit and a merge with an explicitly justified mainline.
5. Compare tree hashes, tests, graphs, and collaborator-clone behavior for every result.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** classify states; prove reset differences; safely reason through merge revert and later re-merge.
- **Deliberate mistake / recovery:** use mixed when staged state was required; recover/reforge state from safety ref/reflog without losing disk edits.
- **Common mistakes:** skipping diffs, rewriting published IDs, or claiming hard reset instantly destroys all objects.
- **Definition of done / portfolio evidence:** completed decision table, state matrices, graphs, tests, warnings, and a state-first interview answer.

### Git Checkpoint

You have completed **Safe Undo Decision Lab**. Run its final verification, save the required sanitized evidence under `evidence/phase-8`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-8
git commit -m "docs(undo): document safe undo decisions"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 8](../roadmaps/Git.md#phase-8) | [CONTINUE TO GIT PHASE 9](../roadmaps/Git.md#phase-9)

<a id="git-phase-9-project"></a>
### GIT PHASE 9 MINI-PROJECT

#### PROJECT: Reflog Rescue Mission

#### SPECIFICATION

- **Scenario / purpose:** Recover deleted/reset work, untrack generated content, and respond to a fake credential already pushed to a shared lab remote.
- **Skills / prerequisites:** Phase 9 and Safe Undo Decision Lab; reflog, `fsck`, secret containment, `git-filter-repo`, coordination, leases.
- **Starting state:** Two disposable clones, bare remote, safety bundle/tag, failure refs, and fake credentials only.
- **Expected graph/state:** All intended commits have refs; fake-secret path is absent from intended rewritten refs; unseen remote work is preserved.

#### BUILD IT STEP BY STEP

1. Stop writes and capture status, refs, graph, and reflog; recover a deleted branch and bad-reset tip.
2. Stop tracking a generated file while keeping its working copy and adding ignore policy.
3. Execute fake-secret response: contain/rotate in the scenario, analyze refs, rewrite a fresh clone, and verify absence.
4. Advance the remote from clone B, demonstrate `--force-with-lease` refusal in A, then fetch and preserve B's work.
5. Complete the approved guarded update and provide collaborator re-clone/reset instructions plus old/new tip mapping.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** branch rescue; reset recovery/untracking; complete fake-secret/lease incident drill.
- **Deliberate mistake / recovery:** stale local view before rewrite; let the lease fail, re-plan, and update without overwriting collaborator work.
- **Common mistakes:** force first, assuming ignore removes history, practicing with real secrets, or calling reflog permanent backup.
- **Definition of done / portfolio evidence:** incident timeline, graphs/ref map, lease refusal, verification script, collaborator guide, and containment-first explanation.

### Git Checkpoint

You have completed **Reflog Rescue Mission**. Run its final verification, save the required sanitized evidence under `evidence/phase-9`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-9
git commit -m "fix(recovery): record reflog rescue and secret-response drill"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 9](../roadmaps/Git.md#phase-9) | [CONTINUE TO GIT PHASE 10](../roadmaps/Git.md#phase-10)

<a id="git-phase-10-project"></a>
### GIT PHASE 10 MINI-PROJECT

#### PROJECT: Curated History Workshop

#### SPECIFICATION

- **Scenario / purpose:** Transform eight messy private commits into four reviewable, buildable commits on current main without harming collaborators.
- **Skills / prerequisites:** Phase 10 and Reflog Rescue Mission; rebase internals/conflicts, interactive actions, split, autosquash, safety refs, range-diff.
- **Starting state:** Eight private commits, two upstream commits, one planned conflict, and `safety/pre-rebase`.
- **Expected graph/state:** Old `B---D1...D8`; new current-main series `C---N1---N2---N3---N4` with documented mapping.

#### BUILD IT STEP BY STEP

1. Classify commits and create appropriate `fixup!` commits; write an oldest-first interactive plan.
2. Reword, reorder, drop, squash, and autosquash; mark one mixed commit `edit` and split it with patch staging.
3. Resolve the planned conflict, test each meaningful intermediate commit, and continue.
4. Compare series with `git range-diff`, compare intended final trees, and retain the old safety ref.
5. Recover to the old tip once, then return to the curated line to prove the safety plan.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** reword/squash; autosquash/conflict; buildable split/reorder with defended mapping.
- **Deliberate mistake / recovery:** drop a required commit, abort or recover from safety ref/reflog, then repeat and audit.
- **Common mistakes:** rebasing shared main, misunderstanding todo order, testing only final tip, or blind force push.
- **Definition of done / portfolio evidence:** before/after graphs, todo, range-diff, test matrix, recovery proof, and merge-versus-rebase defense.

### Git Checkpoint

You have completed **Curated History Workshop**. Run its final verification, save the required sanitized evidence under `evidence/phase-10`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-10
git commit -m "refactor(history): curate private commit sequence"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 10](../roadmaps/Git.md#phase-10) | [CONTINUE TO GIT PHASE 11](../roadmaps/Git.md#phase-11)

<a id="git-phase-11-project"></a>
### GIT PHASE 11 MINI-PROJECT

#### PROJECT: Context-Switching Workbench

#### SPECIFICATION

- **Scenario / purpose:** Preserve a half-finished feature while an urgent hotfix is built and backported without mixed changes.
- **Skills / prerequisites:** Phase 11 and Curated History Workshop; partial stash, patch mode, cherry-pick provenance, worktrees, safe aliases/scopes.
- **Starting state:** Dirty feature with staged/unstaged/untracked work plus a release branch.
- **Expected graph/state:** Feature and release contain only intended changes; hotfix/backport IDs differ; no stale stash/worktree remains.

#### BUILD IT STEP BY STEP

1. Inventory all three dirty-state categories and stash only selected work with a descriptive name.
2. Create a hotfix worktree/branch, fix and test, then backport with `cherry-pick -x`.
3. Resume the feature while preserving its intended staged versus unstaged distinction.
4. Define one read-only local graph alias and explain scope/origin.
5. Remove/prune the linked worktree safely and verify status, stash list, worktree list, graph, and tests.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** named stash; provenance backport/conflict; preserve exact state across parallel worktrees.
- **Deliberate mistake / recovery:** try checking out one branch in two worktrees, interpret refusal, and create a separate branch without force.
- **Common mistakes:** stale stashes, popping before inspection, unexplained cherry-picks, or aliases hiding destructive actions.
- **Definition of done / portfolio evidence:** interruption timeline, worktree diagram, patch comparison, tests, config rationale, and tool-choice explanation.

### Git Checkpoint

You have completed **Context-Switching Workbench**. Run its final verification, save the required sanitized evidence under `evidence/phase-11`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-11
git commit -m "docs(workflow): record context-switching evidence"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 11](../roadmaps/Git.md#phase-11) | [CONTINUE TO GIT PHASE 12](../roadmaps/Git.md#phase-12)

<a id="git-phase-12-project"></a>
### GIT PHASE 12 MINI-PROJECT

#### PROJECT: Regression Hunt and Signed Release

#### SPECIFICATION

- **Scenario / purpose:** Locate a regression in a long history, repair it, and publish a verifiable maintenance release.
- **Skills / prerequisites:** Phase 12 and Context-Switching Workbench; blame context, automated bisect, tags/signing, changelog, SemVer.
- **Starting state:** At least 32 commits, known-good tag, bad tip, moved/formatted function, deterministic test target.
- **Expected graph/state:** `v1.0.0 ... first-bad ... fix---v1.0.1`; tag targets the exact tested fix.

#### BUILD IT STEP BY STEP

1. Compare ordinary blame with `-w -C` and inspect the responsible commit/context rather than person-first conclusions.
2. Write a good/bad test and run `git bisect run`; save classifications and reset afterward.
3. Fix the culprit on a maintenance branch and rerun the complete suite.
4. Choose SemVer change from a defined API, update changelog, create annotated/signed tag, and generate checksum/release notes.
5. Verify from a fresh checkout; if signing is unavailable, use annotated tag and document the missing trust step honestly.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** contextual blame; 32+ commit automated bisect; independently verified signed release and rollback note.
- **Deliberate mistake / recovery:** use a flaky classifier, detect contradiction, stabilize/seed, reset, rerun, and compare transcripts.
- **Common mistakes:** person-blame, forgetting bisect reset, moving published release tags, or SemVer without public API.
- **Definition of done / portfolio evidence:** bisect transcript/count, changelog/version rationale, signature/checksum, fresh-checkout tests, and atomic-history connection.

### Git Checkpoint

You have completed **Regression Hunt and Signed Release**. Run its final verification, save the required sanitized evidence under `evidence/phase-12`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-12
git commit -m "test(history): record bisect and signed release evidence"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 12](../roadmaps/Git.md#phase-12) | [CONTINUE TO GIT PHASE 13](../roadmaps/Git.md#phase-13)

<a id="git-phase-13-project"></a>
### GIT PHASE 13 MINI-PROJECT

#### PROJECT: Scalable Repository Architecture Lab

#### SPECIFICATION

- **Scenario / purpose:** Design for cross-platform scripts, fake large binary versions, a shared library, three services, and slow clones.
- **Skills / prerequisites:** Phase 13 and Regression Hunt and Signed Release; attributes, LFS, sparse/partial, submodule/subtree, monorepo trade-offs.
- **Starting state:** Multi-service fixture with text churn, fake binary, and external tiny library; all required tools open source/local.
- **Expected graph/state:** Isolated comparison branches and one ADR-selected strategy on main with reproducible checkout.

#### BUILD IT STEP BY STEP

1. Add `.gitattributes`, verify with `check-attr`, and isolate `--renormalize` from functional work.
2. Track fake binary through local Git LFS and inspect pointer/content storage.
3. Integrate one library as submodule and subtree on separate branches; compare clone/update/recovery behavior.
4. Configure sparse checkout and blob-filtered clone; measure transfer, checkout, and build inputs.
5. Write an ADR covering ownership, permissions, atomic changes, CI, release, backup, and failure boundaries.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** line-ending stability; LFS/dependency reproduction; measured monorepo/multi-repo architecture defense.
- **Deliberate mistake / recovery:** clone without LFS/dependency content, diagnose pointer/gitlink, fetch correctly, and add onboarding validation.
- **Common mistakes:** assuming hosted LFS is unlimited/free, mixing normalization with logic, or equating sparse checkout with complete transfer reduction.
- **Definition of done / portfolio evidence:** attributes diff, pointer trace, dependency comparison, timings, ADR, fresh-clone build, and boundary interview answer.

### Git Checkpoint

You have completed **Scalable Repository Architecture Lab**. Run its final verification, save the required sanitized evidence under `evidence/phase-13`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-13
git commit -m "docs(repository): document scalable repository decision"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 13](../roadmaps/Git.md#phase-13) | [CONTINUE TO GIT PHASE 14](../roadmaps/Git.md#phase-14)

<a id="git-phase-14-project"></a>
### GIT PHASE 14 MINI-PROJECT

#### PROJECT: Team Workflow Design Studio

#### SPECIFICATION

- **Scenario / purpose:** Design different workflows for daily-deploy SaaS, regulated two-version product, and public open-source teams.
- **Skills / prerequisites:** Phase 14 and Scalable Repository Architecture Lab; workflow/merge policy, CI, releases/hotfixes, metrics, failure design.
- **Starting state:** One reusable fixture and three constraint briefs; Git and optional Forgejo/Gitea.
- **Expected graph/state:** Three distinct graphs whose refs, reviews, releases, and hotfix propagation match their ADRs.

#### BUILD IT STEP BY STEP

1. Elicit team/trust/deploy/release/compliance/CI constraints and select the smallest fitting workflow.
2. Define branch/ref lifecycle, owners, maximum age, checks, reviews, merge method, release, hotfix, and emergency policy.
3. Simulate a normal change and compare merge-commit, squash, and rebase-merge evidence.
4. Inject stale branch, failed check, urgent security fix, and unavailable maintainer; update policy from results.
5. Measure branch age/review/queue/recovery signals and finalize three ADRs with “when not to use.”

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** justified defaults; hotfix/release propagation; four failure table-tops across all teams.
- **Deliberate mistake / recovery:** force one workflow onto all teams, identify mismatches, redesign, and compare graph/lead-time/risk.
- **Common mistakes:** branches as environments, Git Flow by slogan, linear history at any cost, or missing emergency/backport rules.
- **Definition of done / portfolio evidence:** three ADRs, graphs, failure transcripts, policy matrices, metrics, and cross-scenario interview defense.

### Git Checkpoint

You have completed **Team Workflow Design Studio**. Run its final verification, save the required sanitized evidence under `evidence/phase-14`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-14
git commit -m "docs(workflow): define team Git workflow policy"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 14](../roadmaps/Git.md#phase-14) | [CONTINUE TO GIT PHASE 15](../roadmaps/Git.md#phase-15)

<a id="git-phase-15-project"></a>
### GIT PHASE 15 MINI-PROJECT

#### PROJECT: Trusted Delivery Gate

#### SPECIFICATION

- **Scenario / purpose:** Accept untrusted public contributions and produce verified releases without secret exposure or silent bypass.
- **Skills / prerequisites:** Phase 15 and Team Workflow Design Studio; hooks/CI, protection, reviews, queues, signing, scans, maintenance, diagnosis.
- **Starting state:** Open-source fixture, two clones, fake secret, test signing key, stale candidate, and Forgejo/Gitea or optional GitHub free CI.
- **Expected graph/state:** Only reviewed, green, current-base changes reach main; verified release tag targets that integration.

#### BUILD IT STEP BY STEP

1. Add a fast local hook and identical central gate; demonstrate local bypass but CI refusal.
2. Minimize workflow permissions and isolate untrusted changes from secrets; run format/test/secret/dependency checks.
3. Simulate a combined-tip merge queue and prove individually green but incompatible changes do not merge.
4. Sign/verify release evidence, revoke the test key in policy, and exercise verification failure.
5. Run the read-only diagnosis ladder and repository maintenance/health audit only after preserving evidence.

#### VALIDATION, FAILURE, AND EVIDENCE

- **Easy / medium / hard:** hook versus gate; protected signed release; untrusted/race/flake/mutable-action/key/bypass threat drills.
- **Deliberate mistake / recovery:** request a secret from an untrusted job and race two green branches; fail closed, reduce permissions, retest combined candidate.
- **Common mistakes:** fork secrets, mutable dependencies, “signed means approved,” permanent admin bypass, or premature maintenance during incident evidence collection.
- **Definition of done / portfolio evidence:** policy/CI config, negative tests, permission table, queue graph, signature evidence, threat drill, health report, and trust-chain narration.

### Git Checkpoint

You have completed **Trusted Delivery Gate**. Run its final verification, save the required sanitized evidence under `evidence/phase-15`, and then preserve this working milestone from the `git-workbench` repository:

```bash
git status
git add -- README.md evidence/phase-15
git commit -m "ci(trust): implement trusted delivery gate"
```

Verify the checkpoint:

```bash
git log -1 --oneline
git status
```

Continue only when the project still works and the working tree is clean.

> **PROJECT NAVIGATION:** [REVIEW GIT PHASE 15](../roadmaps/Git.md#phase-15) | [BUILD THE GIT MAIN PORTFOLIO PROJECT](#git-main-portfolio-project)

<a id="git-main-portfolio-project"></a>
## GIT MAIN PORTFOLIO PROJECT

#### PROJECT: Open-Source Team Delivery Lifecycle

#### DESCRIPTION

Manage a tiny public open-source CLI through a complete professional Git lifecycle: setup, atomic history, contributor forks, review, conflicts, private-history cleanup, recovery, regression diagnosis, trusted CI, signed releases, supported-version hotfix, and final history audit. The repository evidence is the product.

#### WHO THIS IS FOR

- Contributor proposing a small reviewable change
- Maintainer/code owner integrating safely
- CI/security reviewer protecting untrusted inputs
- Release manager and incident commander preserving traceability

#### REPOSITORY, REVIEW, RELEASE, AND SECURITY RULES

- Protected `main`, short-lived contributor branches/forks, and `release/1.x` only while supported.
- Atomic buildable commits; contribution, code-of-conduct, security, ownership, issue/PR templates, ignore/attributes, changelog, and OSI-approved license.
- One owner approval; two for authentication/release policy; required format/unit/integration/secret/dependency/build checks.
- Squash routine PRs, preserve meaningful merge topology, never blind force push, and use explicit emergency records.
- Tested annotated signed SemVer tags, checksums, source artifact, release/hotfix/forward-fix policy, least-privilege CI, and fake-secret drills only.

#### FREE AND OPEN-SOURCE TECH STACK

- Git, shell, any open-source language/test runner, GnuPG or SSH signing, Gitleaks, and local bare remotes
- Forgejo or Gitea plus an Actions-compatible runner as the open-source default
- Optional public GitHub free-tier repository for professional-platform evidence; GitHub itself is not open source
- Git LFS/local dependency fixtures only when used; no paid API, subscription, premium course, or real secret is required

#### BUILD IT PHASE BY PHASE

1. **Phase 1 - Foundations:** Reproducible setup, identity/config evidence, local/forge trust boundary.
2. **Phase 2 - Three States:** Intentional index, ignores, staged-diff evidence, selective snapshot.
3. **Phase 3 - History:** At least six atomic buildable commits with meaningful messages and queries.
4. **Phase 4 - Internals:** Object/ref/HEAD map plus detached-commit rescue evidence.
5. **Phase 5 - Branches:** Two contributor branches/forks, upstreams, divergence, and cleanup policy.
6. **Phase 6 - Merges:** Content and rename/delete conflict resolved from requirements with tests.
7. **Phase 7 - Remotes/Review:** PR/MR discussion, requested change, approval, required checks, and chosen integration.
8. **Phase 8 - Undo:** State-based undo table applied to private and shared scenarios.
9. **Phase 9 - Recovery:** Reflog reset rescue, fake-secret rotation/rewrite, and lease-refusal coordination.
10. **Phase 10 - Rebase:** Autosquash, split, conflict, safety ref, and range-diff on private history.
11. **Phase 11 - Daily Tools:** Hotfix worktree, partial stash, backport with provenance, clean resumption.
12. **Phase 12 - Investigation/Release:** Automated 32+ commit bisect and verified `v1.0.0` release.
13. **Phase 13 - Scale:** Versioned attributes plus one measured LFS/dependency/sparse decision and ADR.
14. **Phase 14 - Workflow:** Branch/review/merge/release/hotfix/emergency policy justified by team constraints.
15. **Phase 15 - Trust:** Least-privilege untrusted CI, secret scan, merge-race gate, signatures, maintenance, health audit, and `v1.0.1` hotfix evidence.

#### REQUIRED FAILURE, RECOVERY, AND EVIDENCE

- Reproduce wrong hunk, bad merge resolution, deleted branch, disposable hard reset, dropped rebase commit, stale lease, fake secret, flaky bisect, untrusted secret request, signature failure, merge-queue race, and wrong-direction hotfix propagation.
- For each: starting/expected/observed state, preserved evidence, smallest safe action, recovery, verification, prevention, and shared-history effect.
- Save graphs for branch/merge/rebase/reflog/rewrite/release/hotfix; status/diffs/refs/upstreams/remotes; review/check records; range-diff; bisect transcript; signature/checksum; CI permission/threat table; fresh-clone audit.

#### RUBRIC AND DEFINITION OF DONE

| Area | Weight |
| --- | ---: |
| State/internals and graph quality | 30% |
| Collaboration/review | 15% |
| Safety/recovery | 20% |
| Workflow/release judgment | 15% |
| CI/security/trust | 15% |
| Reproducible portfolio communication | 5% |

Another learner can clone fresh, verify both releases, run checks, reproduce a contribution and recovery drill, trace artifacts to reviewed commits, and understand every exception. No real credential, paid dependency, unexplained force update, missing phase, or unverified signed/secure claim remains.

#### PORTFOLIO AND INTERVIEW PRESENTATION

Lead the README with the team problem, policy, lifecycle diagram, one-command verification, release evidence, and one recovered failure. In five minutes explain Git versus forge, index/objects/refs, workflow fit, contributor-to-artifact trust, reflog/lease/rotation recovery, hotfix propagation, and the next trade-off at larger scale.

#### GIT MILESTONE CHECKPOINTS

Keep this capstone in its own `open-source-team-delivery-lifecycle` repository because repository history is the product. Test each phase group and review both staged diffs before committing. Store only sanitized evidence under `evidence/`; never commit signing private keys, tokens, credentials, or raw incident data.

##### Git Checkpoint 1

You have completed **Phases 1-4: repository policy, intentional index, atomic history, and object/ref evidence**. Save the auditable foundation:

```bash
git status
git add -- README.md LICENSE CONTRIBUTING.md CODE_OF_CONDUCT.md SECURITY.md .gitignore .gitattributes evidence
git commit -m "chore(delivery-lifecycle): establish auditable Git foundation"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the checks pass and the working tree is clean.

##### Git Checkpoint 2

You have completed **Phases 5-7: contributor branches, conflict resolution, review, and protected integration**. Save the reviewed collaboration evidence:

```bash
git status
git add -- README.md src tests evidence
git commit -m "feat(delivery-lifecycle): complete reviewed collaboration flow"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the checks pass and the working tree is clean.

##### Git Checkpoint 3

You have completed **Phases 8-11: undo decisions, reflog rescue, coordinated rewrite, and context-switching evidence**. Save the recovery record:

```bash
git status
git add -- README.md scripts evidence
git commit -m "fix(delivery-lifecycle): verify recovery and private history cleanup"
```

Verify:

```bash
git log -1 --oneline
git status
```

Continue only when the checks pass and the working tree is clean.

##### Git Checkpoint 4

You have completed **Phases 12-14: bisect result, signed release, repository-scale ADR, and workflow policy**. Save the release and workflow evidence:

```bash
git status
git add -- README.md CHANGELOG.md evidence
git commit -m "docs(delivery-lifecycle): record release and workflow evidence"
```

Verify:

```bash
git log -1 --oneline
git status
git tag --list 'v1.*'
```

Continue only when the checks pass and the working tree is clean.

##### Final Git Checkpoint

You have completed **Phase 15: least-privilege CI, secret scanning, merge-race checks, hotfix handling, and the final history audit**. Save the trusted-delivery evidence after verifying `v1.0.0` and `v1.0.1` already exist:

```bash
git status
git add -- README.md CHANGELOG.md SECURITY.md evidence
git commit -m "ci(delivery-lifecycle): complete trusted delivery lifecycle"
```

Verify:

```bash
git log --oneline --decorate -5
git status
git tag --list 'v1.*'
```

The capstone is complete only when a fresh clone passes its checks, both release tags verify, and the working tree is clean.

#### HOW TO RUN IT FOR FREE

1. Use local bare remotes or run Forgejo/Gitea and its runner on a local machine; bind administration to localhost unless deliberately secured.
2. Simulate each role in a separate clone and use fake test credentials only.
3. Run tests, Gitleaks, signing verification, checksums, bisect, and release scripts locally; a public GitHub free-tier mirror is optional.
4. Publish only sanitized diagrams, logs, review screenshots/links, and release evidence; keep keys, raw incident data, and personal identifiers private.
5. Verify from a clean clone, then remove disposable worktrees/containers/remotes while retaining the final public repository and sanitized evidence.

> **MAIN PROJECT NAVIGATION:** [REVIEW GIT PHASE 15](../roadmaps/Git.md#phase-15) | [REVIEW THE GIT CAPSTONE](../roadmaps/Git.md#main-git-capstone) | [RETURN TO THE GIT ROADMAP](../roadmaps/Git.md#phase-index)

---

Build small after every phase. Build the main portfolio project only after you have completed every phase in that roadmap.
