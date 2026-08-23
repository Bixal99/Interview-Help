// Auto-generated master CS chapter project and solution registry (105 Chapters)
export type CSProjectInfo = {
  chapter: number;
  chapterTitle: string;
  projectTitle: string;
  format: string;
  why: string;
  problemStatement: string;
  checklist: string[];
  workspaceType: "notepad" | "compiler";
  language: "python" | "javascript" | "html" | "css";
  solutionMarkdown: string;
  starterCode: string;
};

export const CS_PROJECTS_REGISTRY: Record<number, CSProjectInfo> = {
  "1": {
    "chapter": 1,
    "chapterTitle": "What Is Computer Science?",
    "projectTitle": "The Smart Vending Machine Controller",
    "format": "Hand-Written / On Paper (No Coding Needed)",
    "why": "Unit I establishes computational thinking, decomposition, abstraction, and algorithms before touching code syntax.",
    "problemStatement": "Design the conceptual system and complete algorithmic logic for a vending machine that sells items, accepts cash/coins, and dispenses change.",
    "checklist": [
      "*I/O & Abstraction:** Identify 3 inputs, 2 outputs, 2 hidden implementation details, and 2 interface details.",
      "*Decomposition:** Draw a decomposition tree breaking the system into 3 main sub-components.",
      "*Precise Algorithm:** Write a numbered, unambiguous algorithm handling the normal flow, out-of-stock, and insufficient funds.",
      "*Hand-Trace:** Walk through purchasing a $2.50 item with a $5.00 bill."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **1. Input, Output & Abstraction Analysis:**\r\n\r\n  * **The three primary system inputs are:**\r\n    1. *Keypad Matrix Selection:* The alphanumeric code entered by the user (such as `\"B4\"`) indicating which product row and column slot they wish to purchase.\r\n    2. *Currency & Payment Validator Signal:* The optical and magnetic sensor readings from the bill acceptor and coin slot, transmitting the precise monetary value inserted (e.g., \\$1.00 bill or \\$0.25 coin).\r\n    3. *Physical Cancel / Refund Button:* A momentary push-button signal triggered by the user indicating they wish to abort the transaction and receive their unspent money back.\r\n  * **The two primary physical system outputs are:**\r\n    1. *Dispense Motor Actuation:* An electrical pulse sent to a specific spiral coil motor causing it to rotate 360 degrees and drop the selected snack into the delivery bin.\r\n    2. *Coin Return Solenoid Release:* The mechanical release gate that drops calculated change coins into the return cup.\r\n  * **The two internal implementation details hidden by abstraction are:**\r\n    1. *Motor Step Voltage & Timing:* The exact pulse-width modulated (PWM) voltage and duration supplied to the dispenser motor are completely hidden from the customer.\r\n    2. *Internal Coin Tube Inventory Counts:* The exact physical number of nickels, dimes, and quarters stored inside the internal coin tubes is managed internally and never exposed to the buyer.\r\n  * **The two interface details exposed to the user are:**\r\n    1. *The 16x2 Character LCD Display:* Shows high-level status messages such as `\"INSERT $1.50\"` or `\"SELECT ITEM\"`.\r\n    2. *The Physical Keypad & Coin Slot:* The physical interface mechanisms designed for human interaction.\r\n* **2. System Decomposition Tree:**\r\n\r\n  ```text\r\n  Vending Machine Controller Architecture\r\n  ├── 1. Payment Management Subsystem\r\n  │   ├── Read and validate optical bill/coin signals\r\n  │   ├── Track current unspent session balance\r\n  │   └── Calculate and release physical change\r\n  ├── 2. Inventory & Pricing Subsystem\r\n  │   ├── Look up item price by slot code\r\n  │   ├── Check stock availability sensors\r\n  │   └── Decrement inventory count upon successful drop\r\n  └── 3. User Interface & Dispense Subsystem\r\n      ├── Display prompts and error messages on LCD\r\n      ├── Drive the 360-degree spiral dispense motors\r\n      └── Handle transaction abort/refund requests\r\n  ```\r\n* **3. Precise, Unambiguous Algorithm (Numbered Steps):**\r\n\r\n  1. Initialize the system: Set `current_balance = 0.00`, `selected_slot = NULL`, and display `\"READY - INSERT MONEY OR SELECT ITEM\"` on the LCD.\r\n  2. Enter the active monitoring loop:\r\n     * **Case A (Money Inserted):** When a coin or bill is recognized by the validator, add its value to `current_balance` and update the LCD display to show `\"BALANCE: $\" + current_balance`.\r\n     * **Case B (Cancel Button Pressed):** If `current_balance > 0`, activate the coin return chute to refund `current_balance`, set `current_balance = 0.00`, display `\"TRANSACTION CANCELLED\"`, and return to Step 1.\r\n     * **Case C (Slot Code Entered):** When the user enters a valid 2-character code (e.g., `\"B4\"`):\r\n       1. Query the inventory subsystem for `stock[code]` and `price[code]`.\r\n       2. **Edge Case 1 (Out of Stock):** If `stock[code] == 0`, display `\"ITEM OUT OF STOCK\"` on the LCD for 2 seconds, preserve `current_balance`, and return to the monitoring loop.\r\n       3. **Edge Case 2 (Insufficient Funds):** If `current_balance < price[code]`, calculate `remaining = price[code] - current_balance`, display `\"PLEASE INSERT $\" + remaining` on the LCD, and return to the monitoring loop.\r\n       4. **Normal Case (Sufficient Funds & In Stock):**\r\n          * Calculate required change: `change_due = current_balance - price[code]`.\r\n          * **Edge Case 3 (Insufficient Change in Machine):** If the internal change reservoir has less money than `change_due`, display `\"EXACT CHANGE ONLY - CANNOT COMPLETE\"`, refund the entire `current_balance`, set `current_balance = 0.00`, and return to Step 1.\r\n          * Activate the dispense motor corresponding to `code` for one full 360-degree cycle.\r\n          * Decrement inventory: `stock[code] = stock[code] - 1`.\r\n          * If `change_due > 0`, activate the change dispenser to release coins totaling `change_due`.\r\n          * Set `current_balance = 0.00`.\r\n          * Display `\"THANK YOU! ENJOY YOUR SNACK\"` for 3 seconds.\r\n          * Terminate transaction and return to Step 1.\r\n* **4. Hand-Trace Walkthrough:**\r\n\r\n  * *Test Case Parameters:* Item cost = \\$2.50 (`\"A1\"`), Customer inserts \\$5.00 bill, Item stock = 1 in stock, Change reservoir = \\$20.00.\r\n  * *Step 1:* Machine starts in idle state: `current_balance = 0.00`.\r\n  * *Step 2:* Customer inserts \\$5.00 bill. The optical validator verifies authenticity and emits a \\$5.00 pulse. `current_balance` becomes `5.00`. LCD updates to: `\"BALANCE: $5.00\"`.\r\n  * *Step 3:* Customer presses keypad `\"A1\"`. The controller queries slot `\"A1\"`: `stock[\"A1\"] = 1` (In Stock), `price[\"A1\"] = 2.50`.\r\n  * *Step 4:* The controller compares balance to price: `5.00 >= 2.50` (Condition satisfied).\r\n  * *Step 5:* The controller calculates change: `change_due = 5.00 - 2.50 = 2.50`.\r\n  * *Step 6:* The controller verifies change reservoir: \\$20.00 available $\\ge$ \\$2.50 required.\r\n  * *Step 7:* Motor `\"A1\"` is powered $\\to$ item drops into delivery bin $\\to$ `stock[\"A1\"]` becomes 0.\r\n  * *Step 8:* Change solenoid pulses ten \\$0.25 coins (or two \\$1 bills and two quarters) totaling \\$2.50 into the coin tray.\r\n  * *Step 9:* `current_balance` is reset to `0.00`, LCD displays `\"THANK YOU!\"`, and the system returns to idle.",
    "starterCode": ""
  },
  "2": {
    "chapter": 2,
    "chapterTitle": "How Computers Represent Information",
    "projectTitle": "Manual 8-bit Data Representation Engine",
    "format": "Hand-Written / Pen & Paper (Math & Bit Calculations)",
    "why": "You must master binary, hex, two's complement, and overflow mechanics manually before letting a compiler hide them.",
    "problemStatement": "Manually encode, convert, and detect overflow across multiple data types using 8-bit registers.",
    "checklist": [
      "*Base Conversion:** Convert decimal `157` and `-43` to 8-bit binary and hexadecimal.",
      "*Two's Complement Arithmetic:** Compute `45 + (-60)` in 8-bit two's complement and verify sign bits.",
      "*Overflow Analysis:** Calculate `120 + 15` in an 8-bit signed integer. State why signed overflow occurs.",
      "*Text Encoding:** Manually map the ASCII characters `\"CS!\"` to binary and hex byte sequences."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **1. Base Conversions:**\r\n\r\n  * **Decimal `157` to Binary and Hexadecimal:**\r\n    * Successive powers of 2 subtraction:\r\n      * $157 - 128 = 29$ (Bit 7 = 1)\r\n      * $29 - 64 = \\text{No}$ (Bit 6 = 0)\r\n      * $29 - 32 = \\text{No}$ (Bit 5 = 0)\r\n      * $29 - 16 = 13$ (Bit 4 = 1)\r\n      * $13 - 8 = 5$ (Bit 3 = 1)\r\n      * $5 - 4 = 1$ (Bit 2 = 1)\r\n      * $1 - 2 = \\text{No}$ (Bit 1 = 0)\r\n      * $1 - 1 = 0$ (Bit 0 = 1)\r\n    * The resulting 8-bit unsigned binary representation is: $\\mathbf{10011101_2}$.\r\n    * Converting to Hexadecimal by splitting into 4-bit nibbles:\r\n      * Upper nibble: `1001` = $8 + 1 = 9_{16}$.\r\n      * Lower nibble: `1101` = $8 + 4 + 1 = 13_{10} = \\text{D}_{16}$.\r\n      * The resulting hexadecimal representation is: $\\mathbf{0x9D}$.\r\n  * **Decimal `-43` to 8-bit Signed Two's Complement:**\r\n    * Step 1: Represent positive $+43$ in 8-bit binary:\r\n      * $43 = 32 + 8 + 2 + 1 = \\mathbf{00101011_2}$.\r\n    * Step 2: Invert all bits (One's complement):\r\n      * $\\sim(00101011) = \\mathbf{11010100_2}$.\r\n    * Step 3: Add 1 to the least significant bit:\r\n      * $11010100 + 1 = \\mathbf{11010101_2}$.\r\n    * The resulting two's complement hexadecimal representation is $\\mathbf{0xD5}$.\r\n* **2. Two's Complement Addition ($45 + (-60)$):**\r\n\r\n  * Binary $+45 = \\mathbf{00101101_2}$.\r\n  * Binary $-60$: $+60 = 00111100_2 \\to \\text{Invert } 11000011_2 + 1 = \\mathbf{11000100_2}$.\r\n  * Perform 8-bit column addition:\r\n    ```text\r\n      00101101  (+45)\r\n    + 11000100  (-60)\r\n    ----------\r\n      11110001  (Sum)\r\n    ```\r\n  * Verification of the result `11110001`: The Most Significant Bit (MSB) is `1`, indicating a negative number.\r\n  * Inverting `11110001` gives `00001110`. Adding 1 gives `00001111`, which is decimal $15$. Therefore, the value is $\\mathbf{-15}$, confirming $45 + (-60) = -15$.\r\n* **3. Signed Overflow Analysis ($120 + 15$ in 8-bit Signed Space):**\r\n\r\n  * Binary $+120 = \\mathbf{01111000_2}$.\r\n  * Binary $+15 = \\mathbf{00001111_2}$.\r\n  * Addition: $01111000 + 00001111 = \\mathbf{10000111_2}$.\r\n  * In an 8-bit signed system, the valid representable range is $[-128, +127]$. The true mathematical sum is $+135$, which exceeds $+127$.\r\n  * The carry into the MSB (sign bit) flipped it from `0` to `1`. In two's complement, `10000111` is evaluated as $-128 + 7 = \\mathbf{-121}$.\r\n  * **Conclusion:** Adding two positive numbers resulted in a negative value. This is a classic **signed arithmetic overflow**.\r\n* **4. ASCII Text Representation for `\"CS!\"`:**\r\n\r\n  * Character `'C'`: Decimal ASCII 67 $\\to$ Hex `0x43` $\\to$ Binary `01000011`.\r\n  * Character `'S'`: Decimal ASCII 83 $\\to$ Hex `0x53` $\\to$ Binary `01010011`.\r\n  * Character `'!'`: Decimal ASCII 33 $\\to$ Hex `0x21` $\\to$ Binary `00100001`.\r\n  * The complete contiguous byte sequence is: `01000011 01010011 00100001` (`0x43 0x53 0x21`).",
    "starterCode": ""
  },
  "3": {
    "chapter": 3,
    "chapterTitle": "Logic & Digital Computation",
    "projectTitle": "1-Bit Full Adder & 2-Bit ALU Schematic",
    "format": "Hand-Written / Circuit Diagram & Truth Tables",
    "why": "Digital logic is rooted in Boolean algebra and hardware schematics before reaching software.",
    "problemStatement": "Construct truth tables and gate diagrams for a digital arithmetic circuit.",
    "checklist": [
      "*Truth Tables:** Derive the full truth tables for AND, OR, XOR, NAND, and NOT.",
      "*Full Adder Design:** Combine two half adders and an OR gate to design a 1-bit full adder with inputs $A, B, C_{in}$ and outputs $Sum, C_{out}$.",
      "*2-Bit Ripple Adder:** Chain two full adders together and trace `11 + 01 = 100`.",
      "*ALU Control Logic:** Design a 1-bit multiplexer circuit that selects between AND and ADD based on an `Opcode` bit."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **1. Fundamental Gate Truth Tables:**\r\n\r\n  * An **AND** gate outputs `1` only when both inputs are `1` ($A \\cdot B$).\r\n  * An **OR** gate outputs `1` when at least one input is `1` ($A + B$).\r\n  * An **XOR** (Exclusive OR) gate outputs `1` only when the inputs differ ($A \\oplus B$).\r\n  * A **NAND** gate is the inverted AND ($\\overline{A \\cdot B}$).\r\n  * A **NOT** gate inverts a single bit ($\\overline{A}$).\r\n* **2. 1-Bit Full Adder Design:**\r\n\r\n  * **Boolean Formulas:**\r\n    * $\\text{Sum} = A \\oplus B \\oplus C_{in}$\r\n    * $C_{out} = (A \\cdot B) + (C_{in} \\cdot (A \\oplus B))$\r\n  * **Complete Truth Table:**| $A$ | $B$ | $C_{in}$ | $Sum$     | $C_{out}$ | Explanation               |\r\n    | :---- | :---- | :--------- | :---------- | :---------- | :------------------------ |\r\n    | 0     | 0     | 0          | **0** | **0** | $0+0+0 = 0$             |\r\n    | 0     | 1     | 0          | **1** | **0** | $0+1+0 = 1$             |\r\n    | 1     | 0     | 0          | **1** | **0** | $1+0+0 = 1$             |\r\n    | 1     | 1     | 0          | **0** | **1** | $1+1+0 = 2_{10} = 10_2$ |\r\n    | 0     | 0     | 1          | **1** | **0** | $0+0+1 = 1$             |\r\n    | 0     | 1     | 1          | **0** | **1** | $0+1+1 = 2_{10} = 10_2$ |\r\n    | 1     | 0     | 1          | **0** | **1** | $1+0+1 = 2_{10} = 10_2$ |\r\n    | 1     | 1     | 1          | **1** | **1** | $1+1+1 = 3_{10} = 11_2$ |\r\n* **3. 2-Bit Ripple Carry Adder Circuit Trace ($11_2 + 01_2$):**\r\n\r\n  * Let operand $A = A_1 A_0 = 11_2$ (decimal 3) and operand $B = B_1 B_0 = 01_2$ (decimal 1). Initial carry-in $C_0 = 0$.\r\n  * **Bit Position 0 (Full Adder 0):**\r\n    * Inputs: $A_0 = 1, B_0 = 1, C_0 = 0$.\r\n    * $Sum_0 = 1 \\oplus 1 \\oplus 0 = \\mathbf{0}$.\r\n    * $C_1 = (1 \\cdot 1) + (0 \\cdot (1 \\oplus 1)) = 1 + 0 = \\mathbf{1}$.\r\n  * **Bit Position 1 (Full Adder 1):**\r\n    * Inputs: $A_1 = 1, B_1 = 0, C_1 = 1$.\r\n    * $Sum_1 = 1 \\oplus 0 \\oplus 1 = \\mathbf{0}$.\r\n    * $C_2 = (1 \\cdot 0) + (1 \\cdot (1 \\oplus 0)) = 0 + 1 = \\mathbf{1}$.\r\n  * **Final Output Vector:** $\\{C_2, Sum_1, Sum_0\\} = \\mathbf{100_2}$ (decimal 4). The computation is verified.\r\n* **4. ALU Function Multiplexer:**\r\n\r\n  * To enable the ALU to switch between Boolean AND and Arithmetic ADD:\r\n  * Connect the outputs of the AND gate ($A \\cdot B$) and the Full Adder ($Sum$) to a 2-to-1 Multiplexer controlled by a 1-bit control line $Opcode$.\r\n  * When $Opcode = 0$, the Multiplexer selects line 0 (Bitwise AND).\r\n  * When $Opcode = 1$, the Multiplexer selects line 1 (Arithmetic ADD).",
    "starterCode": ""
  },
  "4": {
    "chapter": 4,
    "chapterTitle": "Computer Hardware",
    "projectTitle": "Fetch-Decode-Execute CPU Trace",
    "format": "Hand-Written / Architectural Flowchart & Instruction Trace",
    "why": "Understanding the Von Neumann architecture requires mentally tracing register transfers (PC, MAR, MDR, ALU).",
    "problemStatement": "Hand-trace a 3-instruction assembly sequence through CPU registers, buses, and cache layers.",
    "checklist": [
      "*Block Diagram:** Draw the CPU (ALU, Control Unit, Registers), System Bus, and RAM with data/address flow arrows.",
      "*Cycle-by-Cycle Trace:** Trace `LOAD R1, [100]`, `ADD R1, R2`, `STORE R1, [101]` step by step across PC, MAR, MDR, and IR.",
      "*Memory Hierarchy Ranking:** Rank Register, L1/L2/L3 Cache, RAM, and SSD by speed, cost, and typical capacity.",
      "*Cache Miss Scenario:** Explain in 2 sentences what occurs in hardware when an instruction causes a cache miss."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **1. CPU Architecture Block Diagram & Bus Connections:**\r\n\r\n  ```text\r\n  +-------------------------------------------------------------+\r\n  |                          C P U                              |\r\n  |  +-------------------+              +--------------------+  |\r\n  |  |   Control Unit    | <----------> |   ALU (Math)       |  |\r\n  |  |   (Decoder)       |              +--------------------+  |\r\n  |  +-------------------+                        ^             |\r\n  |      ^            ^                           |             |\r\n  |      |            |                           v             |\r\n  |  +-------+    +-------+             +--------------------+  |\r\n  |  |  PC   |    |  IR   |             | Registers (R1, R2) |  |\r\n  |  +-------+    +-------+             +--------------------+  |\r\n  |      |            ^                           ^             |\r\n  |      v            |                           |             |\r\n  |  +-------+    +-------+                       |             |\r\n  |  |  MAR  |    |  MDR  | <---------------------+             |\r\n  |  +-------+    +-------+                                     |\r\n  +------|------------|-----------------------------------------+\r\n         |            |  System Bus\r\n         v            v\r\n  +-------------------------------------------------------------+\r\n  |                   Main Memory (RAM)                         |\r\n  +-------------------------------------------------------------+\r\n  ```\r\n* **2. Step-by-Step Cycle Trace of Assembly Sequence:**\r\n\r\n  * **Instruction 1: `LOAD R1, [100]`**\r\n    * *Fetch:* The Program Counter ($PC = 0$) is copied to $MAR$. The Control Unit asserts a memory read signal. Memory location 0 is loaded into $MDR$, and transferred to the Instruction Register ($IR = \\text{LOAD R1, [100]}$). $PC$ increments to 1.\r\n    * *Decode:* The Control Unit decodes the opcode as a memory load into register $R1$ from address 100.\r\n    * *Execute:* Address 100 is placed in $MAR$. RAM location 100 is read into $MDR$. The contents of $MDR$ are written into register $R1$.\r\n  * **Instruction 2: `ADD R1, R2`**\r\n    * *Fetch:* $PC = 1$ is sent to $MAR$. Instruction `ADD R1, R2` is fetched into $MDR \\to IR$. $PC$ increments to 2.\r\n    * *Decode:* Control Unit configures the ALU to perform addition between register $R1$ and register $R2$.\r\n    * *Execute:* The values of $R1$ and $R2$ enter the ALU. The ALU calculates $R1 + R2$ and writes the resulting sum back into $R1$.\r\n  * **Instruction 3: `STORE R1, [101]`**\r\n    * *Fetch:* $PC = 2$ is sent to $MAR$. Instruction `STORE R1, [101]` is fetched into $MDR \\to IR$. $PC$ increments to 3.\r\n    * *Decode:* Control Unit prepares a memory write operation targeting RAM address 101 with the contents of register $R1$.\r\n    * *Execute:* $MAR$ receives 101. $MDR$ receives the value from $R1$. The memory write signal is asserted, persisting the value to RAM cell 101.\r\n* **3. Complete Memory Hierarchy Comparison:**\r\n\r\n  1. *Registers:* Located directly on CPU core. Access latency: $<1 \\text{ ns}$. Capacity: $\\sim 1\\text{ KB}$. Cost per byte: Extremely High.\r\n  2. *L1 Cache:* Dedicated per core. Access latency: $\\sim 1 \\text{ ns}$. Capacity: $32\\text{--}64\\text{ KB}$.\r\n  3. *L2 Cache:* Dedicated/Shared per core. Access latency: $\\sim 4 \\text{ ns}$. Capacity: $512\\text{ KB -- } 1\\text{ MB}$.\r\n  4. *L3 Cache:* Shared across all cores. Access latency: $\\sim 10\\text{--}15 \\text{ ns}$. Capacity: $16\\text{--}64\\text{ MB}$.\r\n  5. *Main Memory (DRAM):* Connected via memory bus. Access latency: $\\sim 60\\text{--}100 \\text{ ns}$. Capacity: $16\\text{--}64\\text{ GB}$.\r\n  6. *Solid State Drive (NVMe SSD):* Persistent secondary storage. Access latency: $\\sim 50\\text{--}100\\ \\mu\\text{s}$ (1,000x slower than DRAM). Capacity: $1\\text{--}4\\text{ TB}$. Cost per byte: Very Low.\r\n* **4. Hardware Cache Miss Mechanics:**\r\n  When the CPU requests a memory address not present in the L1/L2/L3 caches, a cache miss signal is triggered. The CPU pipeline stalls while the cache controller sends an address request over the memory bus to DRAM, retrieving an entire 64-byte aligned block (a Cache Line). This block is written into the cache hierarchy, replacing an older cache line using a policy such as Least Recently Used (LRU), and the requested word is finally delivered to the CPU register so instruction execution can resume.",
    "starterCode": ""
  },
  "5": {
    "chapter": 5,
    "chapterTitle": "From Source Code to a Running Program",
    "projectTitle": "Compilation Pipeline & Memory Layout Map",
    "format": "Hand-Written / Mental Model & Memory Layout Diagram",
    "why": "Consolidates the boundary between source code, bytecode/machine code, compiler/interpreter, and process memory before writing programs.",
    "problemStatement": "Map the complete journey of code from text to execution and diagram the OS process memory layout.",
    "checklist": [
      "*Pipeline Stages:** Draw the 4 stages from high-level source code to binary execution (Lexing/Parsing -> AST -> Bytecode/Machine Code -> Execution).",
      "*Compiler vs Interpreter:** Compare Ahead-Of-Time compilation vs Interpretation vs JIT compilation in a 3-column table.",
      "*Process Memory Diagram:** Draw a process memory layout showing Text (Code), Data, Heap (growing up), and Stack (growing down).",
      "*Stack Frame Trace:** Diagram the call stack frames for a function `foo()` calling `bar(x)`."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **1. Detailed Four-Stage Translation Pipeline:**\r\n\r\n  1. *Lexical Analysis (Tokenization):* The raw source text file is scanned by a lexer, which strips comments and whitespace and groups characters into typed tokens (e.g., `KEYWORD(\"def\")`, `IDENTIFIER(\"calculate\")`, `OPERATOR(\"+\")`).\r\n  2. *Syntactic & Semantic Analysis (Parsing):* The parser verifies the token stream against the language grammar rules, constructing an **Abstract Syntax Tree (AST)** that represents the hierarchical syntactic structure of the program. Semantic analysis verifies type correctness and variable declarations.\r\n  3. *Intermediate Code Generation / Bytecode Compilation:* The AST is traversed to generate portable intermediate representations, such as Python Bytecode (`.pyc`) or LLVM Intermediate Representation (IR).\r\n  4. *Machine Code Execution / Native Code Generation:* In compiled languages, the code generator emits native CPU machine instructions (x86-64 / ARM) and the linker resolves library addresses. In interpreted/JIT environments (such as Python or JVM), a runtime virtual machine executes the bytecode loops or compiles hot loops dynamically to machine code.\r\n* **2. Comprehensive Comparison of Execution Paradigms:**\r\n\r\n  * *Ahead-of-Time (AOT) Compiled (e.g., C, C++, Rust):* The entire source code is translated directly into target machine code before distribution. It offers peak execution speed and zero startup overhead, but the resulting binary is platform-specific and not cross-platform portable without recompilation.\r\n  * *Interpreted (e.g., standard CPython):* Source code is compiled to intermediate bytecode, which is executed line-by-line by a software virtual machine. It allows instant platform portability and dynamic reflection, but incurs an execution performance penalty due to interpreter dispatch overhead.\r\n  * *Just-in-Time (JIT) Compiled (e.g., PyPy, Java HotSpot, V8 JavaScript):* The program begins running via bytecode interpretation while an internal profiling engine monitors execution frequencies. Frequently executed \"hot\" loops and functions are compiled directly into native machine code in memory at runtime, combining platform portability with near-native execution performance.\r\n* **3. Process Virtual Memory Architecture Diagram:**\r\n\r\n  ```text\r\n  Top of Virtual Memory (0xFFFFFFFFFFFFFFFF in 64-bit)\r\n  +-------------------------------------------------------+\r\n  | Kernel Space (Reserved for OS system calls & drivers) |\r\n  +-------------------------------------------------------+\r\n  | Stack (Grows Downward towards Lower Addresses)        |\r\n  |   - Local primitive variables                         |\r\n  |   - Function parameters and active call frame state   |\r\n  |   - Function return pointers                          |\r\n  |                           |                           |\r\n  |                           v                           |\r\n  |                                                       |\r\n  |                           ^                           |\r\n  |                           |                           |\r\n  | Heap (Grows Upward towards Higher Addresses)          |\r\n  |   - Dynamic memory allocations                        |\r\n  |   - Class instances, dynamically sized arrays/objects |\r\n  +-------------------------------------------------------+\r\n  | BSS & Data Segments (Global and static variables)     |\r\n  +-------------------------------------------------------+\r\n  | Text / Code Segment (Read-only compiled instructions) |\r\n  +-------------------------------------------------------+\r\n  Bottom of Virtual Memory (0x0000000000000000)\r\n  ```\r\n* **4. Stack Frame Call Mechanics (`foo()` calling `bar(x)`):**\r\n\r\n  1. The operating system allocates an initial stack frame for `foo()`, containing its local variables and instruction pointer.\r\n  2. When `foo()` executes the statement `bar(5)`, `foo()` pushes the parameter value `5` onto the top of the stack.\r\n  3. The CPU executes a `CALL` instruction, pushing the **Return Address** (the memory address of the instruction in `foo()` directly after the call) onto the stack.\r\n  4. The stack frame for `bar()` is allocated, setting up its local frame pointer (`RBP`) and reserving space for `bar()`'s local variables.\r\n  5. When `bar()` finishes, its return value is placed in a designated register (`RAX`), its stack frame is popped by restoring the previous frame pointer, and the `RET` instruction pops the Return Address from the stack into the Program Counter ($PC$). Control resumes seamlessly inside `foo()`.\r\n\r\n---\r\n\r\n# Unit II — Learning to Control the Machine (Chapters 6–15)",
    "starterCode": ""
  },
  "6": {
    "chapter": 6,
    "chapterTitle": "Development Environment",
    "projectTitle": "Developer Workspace & Script Runner Setup",
    "format": "Shell / Terminal & Tooling",
    "why": "The goal of Chapter 6 is to configure a pristine local developer environment, terminal workflow, and Python execution.",
    "problemStatement": "Set up a clean project structure, verify Python 3.x in the terminal, run scripts, and inspect tracebacks.",
    "checklist": [
      "Create directory structure `projects/ch06_env/` with a virtual environment.",
      "Write `main.py` that prints system metadata (`sys.version`, current directory).",
      "Intentionally trigger a `ZeroDivisionError` and annotate the terminal traceback (line number, call origin, error type)."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nprojects/ch06_env/main.py\r\nDemonstration of environment inspection, terminal script execution, and traceback anatomy.\r\n\"\"\"\r\nimport sys\r\nimport os\r\nimport platform\r\n\r\ndef display_environment_diagnostics():\r\n    print(\"=== DEVELOPER ENVIRONMENT DIAGNOSTICS ===\")\r\n    print(f\"Operating System: {platform.system()} {platform.release()}\")\r\n    print(f\"Python Executable Path: {sys.executable}\")\r\n    print(f\"Python Version: {sys.version.split()[0]}\")\r\n    print(f\"Current Working Directory: {os.getcwd()}\")\r\n    print(\"=========================================\")\r\n\r\ndef demonstrate_traceback():\r\n    \"\"\"\r\n    Intentionally invokes a function division error to produce an annotated traceback.\r\n    \"\"\"\r\n    numerator = 100\r\n    denominator = 0\r\n    # The following line will raise a ZeroDivisionError:\r\n    return numerator / denominator\r\n\r\nif __name__ == \"__main__\":\r\n    display_environment_diagnostics()\r\n    # Uncomment to inspect traceback in terminal:\r\n    # demonstrate_traceback()\r\n```\r\n\r\n* **Traceback Anatomy Analysis:**\r\n  ```text\r\n  Traceback (most recent call last):\r\n    File \"main.py\", line 26, in <module>\r\n      demonstrate_traceback()\r\n    File \"main.py\", line 22, in demonstrate_traceback\r\n      return numerator / denominator\r\n  ZeroDivisionError: division by zero\r\n  ```\r\n\r\n  1. `File \"main.py\", line 26`: Shows the outermost execution origin in the script entry point.\r\n  2. `File \"main.py\", line 22`: Identifies the exact file and line number where the invalid operation occurred.\r\n  3. `ZeroDivisionError`: The specific exception type indicating mathematical division by zero.",
    "starterCode": ""
  },
  "7": {
    "chapter": 7,
    "chapterTitle": "Variables, Values & Types",
    "projectTitle": "Type-Safe Unit Conversion Calculator",
    "format": "Coding (Python)",
    "why": "You are now ready to write code and verify Python's dynamic type system and memory references.",
    "problemStatement": "Build a script that performs temperature and distance conversions while validating variable types and states.",
    "checklist": [
      "Define variables with explicit type hints for `int`, `float`, `str`, `bool`.",
      "Implement `celsius_to_fahrenheit(c: float) -> float` and `meters_to_feet(m: float) -> float`.",
      "Print variables alongside their `type()` and `id()` to demonstrate value vs identity."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 7 Solution: Type-Safe Unit Converter with Identity & Type Inspection\r\n\"\"\"\r\n\r\ndef celsius_to_fahrenheit(celsius_temp: float) -> float:\r\n    \"\"\"Converts a Celsius temperature to Fahrenheit using the formula (C * 9/5) + 32.\"\"\"\r\n    if not isinstance(celsius_temp, (int, float)):\r\n        raise TypeError(f\"Expected float or int, received {type(celsius_temp).__name__}\")\r\n    return (float(celsius_temp) * 9.0 / 5.0) + 32.0\r\n\r\ndef meters_to_feet(meters_dist: float) -> float:\r\n    \"\"\"Converts a distance in meters to feet using the conversion constant 3.28084.\"\"\"\r\n    if not isinstance(meters_dist, (int, float)):\r\n        raise TypeError(f\"Expected float or int, received {type(meters_dist).__name__}\")\r\n    return float(meters_dist) * 3.28084\r\n\r\ndef main():\r\n    sample_celsius: float = 28.5\r\n    converted_fahrenheit: float = celsius_to_fahrenheit(sample_celsius)\r\n  \r\n    sample_meters: float = 100.0\r\n    converted_feet: float = meters_to_feet(sample_meters)\r\n  \r\n    print(f\"Celsius Input: {sample_celsius} | Type: {type(sample_celsius)} | Memory ID: {id(sample_celsius)}\")\r\n    print(f\"Fahrenheit Result: {converted_fahrenheit:.2f} | Type: {type(converted_fahrenheit)}\")\r\n    print(f\"Meters Input: {sample_meters} | Feet Result: {converted_feet:.2f}\")\r\n\r\nif __name__ == \"__main__\":\r\n    main()\r\n```",
    "starterCode": "\"\"\"\nChapter 7 Project Solution: Type-Safe Unit Conversion Calculator\nFormat: Coding (Python)\n\nProblem:\nBuild a script that performs temperature and distance conversions while validating variable types and states.\n\"\"\"\n\n"
  },
  "8": {
    "chapter": 8,
    "chapterTitle": "Control Flow",
    "projectTitle": "Text-Based RPG Combat Loop Engine",
    "format": "Coding (Python)",
    "why": "Practice branching (`if/elif/else`) and loops (`for/while`) with break/continue control mechanisms.",
    "problemStatement": "Create an interactive, turn-based battle engine between a player and a monster using nested control flow.",
    "checklist": [
      "Implement a `while player_hp > 0 and monster_hp > 0` game loop.",
      "Offer actions: `1. Attack`, `2. Defend`, `3. Heal`, `4. Run`.",
      "Use branching to calculate hit/miss probabilities, critical strikes, and damage mitigation.",
      "Ensure guaranteed termination if the player chooses \"Run\" or either entity reaches 0 HP."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 8 Solution: Text-Based RPG Combat Loop Engine\r\nDemonstrates nested branching, loops, probability calculations, and termination guarantees.\r\n\"\"\"\r\nimport random\r\n\r\ndef run_combat_simulation():\r\n    player_hp = 40\r\n    monster_hp = 35\r\n    fled_safely = False\r\n\r\n    print(\"=== BATTLE COMMENCED: Hero vs Forest Troll ===\")\r\n\r\n    while player_hp > 0 and monster_hp > 0:\r\n        print(f\"\\n[STATUS] Hero HP: {player_hp}/40 | Troll HP: {monster_hp}/35\")\r\n        print(\"Available Actions: 1. Strike  2. Shield Defend  3. Drink Potion  4. Flee\")\r\n        user_choice = input(\"Enter your command (1-4): \").strip()\r\n\r\n        shield_active = False\r\n\r\n        if user_choice == \"1\":\r\n            hit_roll = random.random()\r\n            if hit_roll > 0.15:  # 85% hit chance\r\n                is_critical = random.random() < 0.20  # 20% critical chance\r\n                damage = random.randint(8, 14) * (2 if is_critical else 1)\r\n                monster_hp = max(0, monster_hp - damage)\r\n                print(f\"-> You landed a {'CRITICAL ' if is_critical else ''}strike for {damage} damage!\")\r\n            else:\r\n                print(\"-> Your weapon swung wide and missed!\")\r\n\r\n        elif user_choice == \"2\":\r\n            shield_active = True\r\n            print(\"-> You brace behind your shield, reducing incoming damage by 60%.\")\r\n\r\n        elif user_choice == \"3\":\r\n            heal_amount = random.randint(10, 18)\r\n            player_hp = min(40, player_hp + heal_amount)\r\n            print(f\"-> You drank a health elixir, restoring {heal_amount} HP.\")\r\n\r\n        elif user_choice == \"4\":\r\n            print(\"-> You tossed a smoke bomb and fled the encounter!\")\r\n            fled_safely = True\r\n            break\r\n\r\n        else:\r\n            print(\"-> Invalid command entered. You hesitated and lost your action!\")\r\n\r\n        # Monster Turn Execution\r\n        if monster_hp > 0:\r\n            monster_raw_damage = random.randint(6, 12)\r\n            actual_damage = int(monster_raw_damage * 0.4) if shield_active else monster_raw_damage\r\n            player_hp = max(0, player_hp - actual_damage)\r\n            print(f\"<- The Troll retaliates with a heavy club smash for {actual_damage} damage!\")\r\n\r\n    print(\"\\n=== COMBAT RESOLUTION ===\")\r\n    if fled_safely:\r\n        print(\"Outcome: Tactical Retreat.\")\r\n    elif player_hp > 0:\r\n        print(\"Outcome: VICTORY! The monster was vanquished.\")\r\n    else:\r\n        print(\"Outcome: DEFEAT! The hero was slain in battle.\")\r\n\r\nif __name__ == \"__main__\":\r\n    run_combat_simulation()\r\n```",
    "starterCode": "\"\"\"\nChapter 8 Project Solution: Text-Based RPG Combat Loop Engine\nFormat: Coding (Python)\n\nProblem:\nCreate an interactive, turn-based battle engine between a player and a monster using nested control flow.\n\"\"\"\n\n"
  },
  "9": {
    "chapter": 9,
    "chapterTitle": "Functions & Scope",
    "projectTitle": "Modular Geometry & Tax Calculation Library",
    "format": "Coding (Python)",
    "why": "Master modular code, pure functions, parameter passing, return values, and variable scope rules (LEGB).",
    "problemStatement": "Write a reusable utility library with pure functions, default arguments, and local scope isolation.",
    "checklist": [
      "Write pure functions `calculate_area(shape, **kwargs)` and `calculate_tax(subtotal, rate=0.08)`.",
      "Demonstrate local vs global variable isolation without mutating globals.",
      "Implement a helper function with return values and docstrings explaining inputs and outputs."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 9 Solution: Modular Geometry and Financial Scope Isolation Engine\r\n\"\"\"\r\nimport math\r\n\r\nGLOBAL_COMPANY_TAX_RATE: float = 0.085\r\n\r\ndef calculate_circle_area(radius: float) -> float:\r\n    \"\"\"Pure function calculating the area of a circle: A = pi * r^2.\"\"\"\r\n    if radius < 0:\r\n        raise ValueError(\"Radius cannot be negative.\")\r\n    return math.pi * (radius ** 2)\r\n\r\ndef calculate_rectangle_area(width: float, height: float) -> float:\r\n    \"\"\"Pure function calculating rectangular area: A = w * h.\"\"\"\r\n    if width < 0 or height < 0:\r\n        raise ValueError(\"Dimensions cannot be negative.\")\r\n    return float(width * height)\r\n\r\ndef compute_order_invoice(subtotal: float, discount_percent: float = 0.0) -> dict:\r\n    \"\"\"\r\n    Demonstrates local vs global scope. Uses global tax rate while maintaining local state isolation.\r\n    \"\"\"\r\n    if subtotal < 0:\r\n        raise ValueError(\"Subtotal must be positive.\")\r\n  \r\n    # Local variable isolation\r\n    discount_amount = subtotal * (discount_percent / 100.0)\r\n    discounted_subtotal = subtotal - discount_amount\r\n    tax_amount = discounted_subtotal * GLOBAL_COMPANY_TAX_RATE\r\n    final_total = discounted_subtotal + tax_amount\r\n  \r\n    return {\r\n        \"gross_subtotal\": subtotal,\r\n        \"discount_applied\": discount_amount,\r\n        \"tax_charged\": round(tax_amount, 2),\r\n        \"net_total\": round(final_total, 2)\r\n    }\r\n```",
    "starterCode": "\"\"\"\nChapter 9 Project Solution: Modular Geometry & Tax Calculation Library\nFormat: Coding (Python)\n\nProblem:\nWrite a reusable utility library with pure functions, default arguments, and local scope isolation.\n\"\"\"\n\n"
  },
  "10": {
    "chapter": 10,
    "chapterTitle": "Collections (Lists, Tuples, Sets, Dictionaries)",
    "projectTitle": "Student Gradebook & Attendance Analytics",
    "format": "Coding (Python)",
    "why": "Choose and manipulate the right native data structures for grouping and processing data.",
    "problemStatement": "Build a gradebook application utilizing lists for ordered scores, tuples for immutable coordinates, sets for unique student IDs, and dictionaries for student records.",
    "checklist": [
      "Store students as `{id: {\"name\": str, \"scores\": [float], \"tags\": set}}`.",
      "Compute average, highest, and lowest scores per student.",
      "Use set operations (union, intersection) to find students enrolled in multiple classes.",
      "Sort and display top 3 students using dictionary sorting."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 10 Solution: Student Gradebook & Attendance Analytics\r\nDemonstrates lists, tuples, sets, and dictionary data structures.\r\n\"\"\"\r\n\r\nstudent_registry: dict[int, dict] = {\r\n    101: {\r\n        \"name\": \"Alice Johnson\",\r\n        \"scores\": [88.5, 94.0, 91.5, 98.0],\r\n        \"registered_courses\": {\"CS101\", \"MATH201\", \"PHYS100\"}\r\n    },\r\n    102: {\r\n        \"name\": \"Bob Smith\",\r\n        \"scores\": [72.0, 68.5, 79.0, 74.0],\r\n        \"registered_courses\": {\"CS101\", \"ENG105\"}\r\n    },\r\n    103: {\r\n        \"name\": \"Charlie Davis\",\r\n        \"scores\": [95.0, 98.5, 99.0, 92.0],\r\n        \"registered_courses\": {\"CS101\", \"MATH201\", \"CHEM101\"}\r\n    }\r\n}\r\n\r\ndef analyze_student_performance(registry: dict) -> list[tuple[str, float]]:\r\n    performance_summary = []\r\n    for student_id, data in registry.items():\r\n        score_list = data[\"scores\"]\r\n        mean_score = sum(score_list) / len(score_list)\r\n        performance_summary.append((data[\"name\"], round(mean_score, 2)))\r\n  \r\n    # Sort descending by grade average\r\n    performance_summary.sort(key=lambda item: item[1], reverse=True)\r\n    return performance_summary\r\n\r\ndef find_common_course_enrollments(student_a_id: int, student_b_id: int, registry: dict) -> set:\r\n    courses_a = registry[student_a_id][\"registered_courses\"]\r\n    courses_b = registry[student_b_id][\"registered_courses\"]\r\n    return courses_a.intersection(courses_b)\r\n\r\nif __name__ == \"__main__\":\r\n    ranked = analyze_student_performance(student_registry)\r\n    print(\"Ranked Student Performance:\", ranked)\r\n    shared = find_common_course_enrollments(101, 103, student_registry)\r\n    print(\"Shared Courses between 101 and 103:\", shared)\r\n```",
    "starterCode": "\"\"\"\nChapter 10 Project Solution: Student Gradebook & Attendance Analytics\nFormat: Coding (Python)\n\nProblem:\nBuild a gradebook application utilizing lists for ordered scores, tuples for immutable coordinates, sets for unique student IDs, and dictionaries for student records.\n\"\"\"\n\n"
  },
  "11": {
    "chapter": 11,
    "chapterTitle": "Strings & Files",
    "projectTitle": "Personal Expense Log & CSV/JSON Exporter",
    "format": "Coding (Python)",
    "why": "Real applications interact with external storage through text, CSV, and JSON parsing.",
    "problemStatement": "Build a CLI tool that parses raw text receipts, sanitizes string inputs, and saves/loads structured records to/from CSV and JSON files.",
    "checklist": [
      "Sanitize text input with string methods (`strip()`, `split()`, `lower()`).",
      "Read and write expense rows (`date,category,amount,note`) using the `csv` module.",
      "Export categorized monthly summaries into a formatted `report.json`."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 11 Solution: CSV & JSON Financial Transaction Ledger\r\n\"\"\"\r\nimport csv\r\nimport json\r\nimport os\r\n\r\ndef parse_and_export_ledger(input_csv_path: str, output_json_path: str) -> dict:\r\n    parsed_records = []\r\n    category_breakdown = {}\r\n  \r\n    with open(input_csv_path, mode=\"r\", encoding=\"utf-8\") as csv_file:\r\n        csv_reader = csv.DictReader(csv_file)\r\n        for row_num, row in enumerate(csv_reader, start=1):\r\n            sanitized_date = row[\"date\"].strip()\r\n            sanitized_category = row[\"category\"].strip().lower()\r\n            amount_val = float(row[\"amount\"].strip())\r\n            memo = row[\"memo\"].strip()\r\n          \r\n            record = {\r\n                \"transaction_id\": row_num,\r\n                \"date\": sanitized_date,\r\n                \"category\": sanitized_category,\r\n                \"amount\": amount_val,\r\n                \"memo\": memo\r\n            }\r\n            parsed_records.append(record)\r\n            category_breakdown[sanitized_category] = (\r\n                category_breakdown.get(sanitized_category, 0.0) + amount_val\r\n            )\r\n          \r\n    summary_report = {\r\n        \"total_transactions\": len(parsed_records),\r\n        \"grand_total_spent\": round(sum(category_breakdown.values()), 2),\r\n        \"breakdown_by_category\": {k: round(v, 2) for k, v in category_breakdown.items()},\r\n        \"transactions\": parsed_records\r\n    }\r\n  \r\n    with open(output_json_path, mode=\"w\", encoding=\"utf-8\") as json_file:\r\n        json.dump(summary_report, json_file, indent=4)\r\n      \r\n    return summary_report\r\n```",
    "starterCode": "\"\"\"\nChapter 11 Project Solution: Personal Expense Log & CSV/JSON Exporter\nFormat: Coding (Python)\n\nProblem:\nBuild a CLI tool that parses raw text receipts, sanitizes string inputs, and saves/loads structured records to/from CSV and JSON files.\n\"\"\"\n\n"
  },
  "12": {
    "chapter": 12,
    "chapterTitle": "Errors & Defensive Programming",
    "projectTitle": "Robust Bank Account Transfer Processor",
    "format": "Coding (Python)",
    "why": "Learn to anticipate failure, validate invariants, and use `try/except/finally` with custom exceptions.",
    "problemStatement": "Build an account transfer engine that defends against negative amounts, overdrafts, and invalid account types.",
    "checklist": [
      "Define custom exceptions: `InsufficientFundsError`, `InvalidAccountError`, `NegativeAmountError`.",
      "Wrap transactions in `try...except...finally` to ensure rollback on failure and audit logging in `finally`.",
      "Validate inputs defensively with preconditions before mutating state."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 12 Solution: Robust Banking Transfer Engine with Custom Exceptions\r\n\"\"\"\r\n\r\nclass BankingSystemError(Exception):\r\n    \"\"\"Base exception class for all banking operations.\"\"\"\r\n    pass\r\n\r\nclass InsufficientFundsError(BankingSystemError):\r\n    \"\"\"Raised when an account does not hold enough balance for a withdrawal/transfer.\"\"\"\r\n    pass\r\n\r\nclass InvalidAmountError(BankingSystemError):\r\n    \"\"\"Raised when a non-positive or malformed transfer amount is specified.\"\"\"\r\n    pass\r\n\r\nclass AccountFrozenError(BankingSystemError):\r\n    \"\"\"Raised when performing operations on a suspended account.\"\"\"\r\n    pass\r\n\r\nclass BankAccount:\r\n    def __init__(self, account_number: str, holder_name: str, initial_deposit: float = 0.0):\r\n        if initial_deposit < 0:\r\n            raise InvalidAmountError(\"Opening balance cannot be negative.\")\r\n        self.account_number = account_number\r\n        self.holder_name = holder_name\r\n        self._balance = float(initial_deposit)\r\n        self.is_frozen = False\r\n\r\n    @property\r\n    def balance(self) -> float:\r\n        return self._balance\r\n\r\n    def transfer_to(self, recipient: \"BankAccount\", amount: float) -> tuple[bool, str]:\r\n        if self.is_frozen:\r\n            raise AccountFrozenError(f\"Account {self.account_number} is frozen.\")\r\n        if recipient.is_frozen:\r\n            raise AccountFrozenError(f\"Recipient account {recipient.account_number} is frozen.\")\r\n        if amount <= 0:\r\n            raise InvalidAmountError(f\"Transfer amount must be positive. Received: {amount}\")\r\n        if amount > self._balance:\r\n            raise InsufficientFundsError(\r\n                f\"Transfer failed: Account {self.account_number} balance ${self._balance:.2f} \"\r\n                f\"is insufficient for transfer of ${amount:.2f}\"\r\n            )\r\n\r\n        try:\r\n            # Atomic state transition\r\n            self._balance -= amount\r\n            recipient._balance += amount\r\n            return True, f\"Successfully transferred ${amount:.2f} from {self.account_number} to {recipient.account_number}\"\r\n        except Exception as unhandled_err:\r\n            # Defensive rollback in case of runtime system interruption\r\n            self._balance += amount\r\n            raise BankingSystemError(f\"Fatal transaction failure; state rolled back: {unhandled_err}\")\r\n        finally:\r\n            print(f\"[AUDIT LOG] Completed transfer attempt for ${amount:.2f} on account {self.account_number}.\")\r\n```",
    "starterCode": "\"\"\"\nChapter 12 Project Solution: Robust Bank Account Transfer Processor\nFormat: Coding (Python)\n\nProblem:\nBuild an account transfer engine that defends against negative amounts, overdrafts, and invalid account types.\n\"\"\"\n\n"
  },
  "13": {
    "chapter": 13,
    "chapterTitle": "Debugging",
    "projectTitle": "Order Processing Bug Hunt & Logging Integration",
    "format": "Practical Debugging & Coding (Python)",
    "why": "Diagnose logical bugs using print debugging, `pdb` / IDE breakpoints, and structured logging.",
    "problemStatement": "Given a intentionally faulty multi-step order processing script with off-by-one errors and mutated shared state, isolate and resolve the root causes.",
    "checklist": [
      "Instrument code using Python's `logging` module (`DEBUG`, `INFO`, `ERROR`) instead of raw prints.",
      "Reproduce the bug with an isolated test input.",
      "Fix the bug, document the root cause in 3 sentences, and verify with edge cases."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 13 Solution: Order Pipeline Bug Hunt & Structured Logging Integration\r\n\"\"\"\r\nimport logging\r\n\r\nlogging.basicConfig(\r\n    level=logging.DEBUG,\r\n    format=\"%(asctime)s [%(levelname)s] [Thread:%(thread)d] %(name)s - %(message)s\"\r\n)\r\nlogger = logging.getLogger(\"OrderPipeline\")\r\n\r\ndef calculate_bulk_order_total(items: list[dict], customer_tier: str) -> float:\r\n    logger.debug(f\"Starting calculation for {len(items)} items. Customer Tier: {customer_tier}\")\r\n    subtotal = 0.0\r\n  \r\n    # Fixed Off-By-One & Type Coercion Bugs:\r\n    for idx, item in enumerate(items):\r\n        price = float(item[\"price\"])\r\n        quantity = int(item[\"quantity\"])\r\n        item_total = price * quantity\r\n        logger.debug(f\"Item {idx + 1} ({item.get('name', 'Unknown')}): {quantity} x ${price:.2f} = ${item_total:.2f}\")\r\n        subtotal += item_total\r\n      \r\n    discount_rate = 0.0\r\n    if customer_tier.upper() == \"GOLD\":\r\n        discount_rate = 0.15\r\n    elif customer_tier.upper() == \"SILVER\":\r\n        discount_rate = 0.05\r\n    elif customer_tier.upper() == \"BRONZE\":\r\n        discount_rate = 0.02\r\n      \r\n    discount_amount = subtotal * discount_rate\r\n    final_total = subtotal - discount_amount\r\n  \r\n    logger.info(f\"Subtotal: ${subtotal:.2f} | Discount ({discount_rate*100:.0f}%): -${discount_amount:.2f} | Final: ${final_total:.2f}\")\r\n    return round(final_total, 2)\r\n```",
    "starterCode": "\"\"\"\nChapter 13 Project Solution: Order Processing Bug Hunt & Logging Integration\nFormat: Practical Debugging & Coding (Python)\n\nProblem:\nGiven a intentionally faulty multi-step order processing script with off-by-one errors and mutated shared state, isolate and resolve the root causes.\n\"\"\"\n\n"
  },
  "14": {
    "chapter": 14,
    "chapterTitle": "Modules, Packages & Environments",
    "projectTitle": "Weather Forecast Multi-Module CLI Package",
    "format": "Tooling & Multi-File Architecture (Python)",
    "why": "Transition from single scripts to modular packages with dependencies.",
    "problemStatement": "Structure a clean Python package with separation of concerns (`client/`, `parser/`, `formatter/`), `requirements.txt`, and virtual environment management.",
    "checklist": [
      "Create package structure with `__init__.py` files and an entrypoint `main.py`.",
      "Freeze and isolate dependencies using `pip freeze > requirements.txt` in a fresh venv.",
      "Execute the package using `python -m weather_cli`."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* **Project Directory Structure:**\r\n  ```text\r\n  weather_cli_package/\r\n  ├── pyproject.toml\r\n  ├── requirements.txt\r\n  └── weather_cli/\r\n      ├── __init__.py\r\n      ├── client.py\r\n      ├── formatter.py\r\n      └── main.py\r\n  ```\r\n* **Implementation Files:**\r\n\r\n```python\r\n# weather_cli/client.py\r\ndef fetch_weather_data(city: str) -> dict:\r\n    \"\"\"Mock network client returning structured weather telemetry.\"\"\"\r\n    return {\"city\": city.title(), \"temp_c\": 21.5, \"condition\": \"Partly Cloudy\", \"humidity\": 65}\r\n\r\n# weather_cli/formatter.py\r\ndef format_weather_report(data: dict) -> str:\r\n    return (\r\n        f\"=== Weather Report: {data['city']} ===\\n\"\r\n        f\"Temperature: {data['temp_c']}°C ({(data['temp_c']*9/5)+32:.1f}°F)\\n\"\r\n        f\"Condition:   {data['condition']}\\n\"\r\n        f\"Humidity:    {data['humidity']}%\\n\"\r\n        f\"=====================================\"\r\n    )\r\n\r\n# weather_cli/main.py\r\nimport sys\r\nfrom weather_cli.client import fetch_weather_data\r\nfrom weather_cli.formatter import format_weather_report\r\n\r\ndef run():\r\n    city = sys.argv[1] if len(sys.argv) > 1 else \"London\"\r\n    payload = fetch_weather_data(city)\r\n    print(format_weather_report(payload))\r\n\r\nif __name__ == \"__main__\":\r\n    run()\r\n```",
    "starterCode": "\"\"\"\nChapter 14 Project Solution: Weather Forecast Multi-Module CLI Package\nFormat: Tooling & Multi-File Architecture (Python)\n\nProblem:\nStructure a clean Python package with separation of concerns (`client/`, `parser/`, `formatter/`), `requirements.txt`, and virtual environment management.\n\"\"\"\n\n"
  },
  "15": {
    "chapter": 15,
    "chapterTitle": "Programming Consolidation",
    "projectTitle": "CLI Task Management & Productivity System",
    "format": "Independent Capstone Coding (Python)",
    "why": "Prove complete procedural fluency by synthesizing Units I & II without step-by-step assistance.",
    "problemStatement": "Build a standalone, multi-feature CLI application with persistent storage, input validation, robust error handling, and stats generation.",
    "checklist": [
      "Implement CRUD operations for tasks (Title, Priority, Deadline, Status).",
      "Persist tasks to JSON file with auto-backup on corruption.",
      "Provide search, filtering by tags, and overdue alerts.",
      "Write a test script verifying all edge cases."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 15 Capstone Solution: Full-Featured Multi-Command Task & Productivity Manager\r\n\"\"\"\r\nimport sys\r\nimport json\r\nimport os\r\nimport datetime\r\n\r\nSTORAGE_PATH = \"tasks_db.json\"\r\n\r\ndef initialize_database():\r\n    if not os.path.exists(STORAGE_PATH):\r\n        with open(STORAGE_PATH, \"w\", encoding=\"utf-8\") as f:\r\n            json.dump([], f)\r\n\r\ndef read_tasks() -> list[dict]:\r\n    initialize_database()\r\n    with open(STORAGE_PATH, \"r\", encoding=\"utf-8\") as f:\r\n        return json.load(f)\r\n\r\ndef write_tasks(tasks: list[dict]):\r\n    with open(STORAGE_PATH, \"w\", encoding=\"utf-8\") as f:\r\n        json.dump(tasks, f, indent=2)\r\n\r\ndef add_task(title: str, priority: str = \"Medium\"):\r\n    tasks = read_tasks()\r\n    new_id = (tasks[-1][\"id\"] + 1) if tasks else 1\r\n    new_entry = {\r\n        \"id\": new_id,\r\n        \"title\": title,\r\n        \"priority\": priority.capitalize(),\r\n        \"created_at\": datetime.datetime.now().strftime(\"%Y-%m-%d %H:%M\"),\r\n        \"completed\": False\r\n    }\r\n    tasks.append(new_entry)\r\n    write_tasks(tasks)\r\n    print(f\"Success: Added Task #{new_id} -> '{title}' [Priority: {priority.capitalize()}]\")\r\n\r\ndef list_tasks(show_all: bool = True):\r\n    tasks = read_tasks()\r\n    if not tasks:\r\n        print(\"No tasks found in database.\")\r\n        return\r\n    print(f\"\\n{'ID':<4} | {'STATUS':<9} | {'PRIORITY':<8} | {'TITLE':<30} | {'CREATED'}\")\r\n    print(\"-\" * 75)\r\n    for t in tasks:\r\n        if not show_all and t[\"completed\"]:\r\n            continue\r\n        status = \"[DONE]\" if t[\"completed\"] else \"[PENDING]\"\r\n        print(f\"{t['id']:<4} | {status:<9} | {t['priority']:<8} | {t['title']:<30} | {t['created_at']}\")\r\n\r\ndef mark_done(task_id: int):\r\n    tasks = read_tasks()\r\n    found = False\r\n    for t in tasks:\r\n        if t[\"id\"] == task_id:\r\n            t[\"completed\"] = True\r\n            found = True\r\n            break\r\n    if found:\r\n        write_tasks(tasks)\r\n        print(f\"Success: Task #{task_id} marked as completed.\")\r\n    else:\r\n        print(f\"Error: Task #{task_id} not found.\")\r\n\r\ndef main():\r\n    if len(sys.argv) < 2:\r\n        print(\"Usage: python main.py [add <title> [priority] | list | list-pending | done <id>]\")\r\n        return\r\n    action = sys.argv[1].lower()\r\n    if action == \"add\":\r\n        if len(sys.argv) < 3:\r\n            print(\"Error: Task title required.\")\r\n            return\r\n        title = sys.argv[2]\r\n        priority = sys.argv[3] if len(sys.argv) > 3 else \"Medium\"\r\n        add_task(title, priority)\r\n    elif action == \"list\":\r\n        list_tasks(show_all=True)\r\n    elif action == \"list-pending\":\r\n        list_tasks(show_all=False)\r\n    elif action == \"done\":\r\n        if len(sys.argv) < 3 or not sys.argv[2].isdigit():\r\n            print(\"Error: Valid integer Task ID required.\")\r\n            return\r\n        mark_done(int(sys.argv[2]))\r\n    else:\r\n        print(f\"Unknown action '{action}'.\")\r\n\r\nif __name__ == \"__main__\":\r\n    main()\r\n```\r\n\r\n---\r\n\r\n# Unit III — The Mathematical Language of CS (Chapters 16–20)",
    "starterCode": "\"\"\"\nChapter 15 Project Solution: CLI Task Management & Productivity System\nFormat: Independent Capstone Coding (Python)\n\nProblem:\nBuild a standalone, multi-feature CLI application with persistent storage, input validation, robust error handling, and stats generation.\n\"\"\"\n\n"
  },
  "16": {
    "chapter": 16,
    "chapterTitle": "Discrete Mathematics",
    "projectTitle": "Relational Logic & Set-Theoretic Modeling Problem Set",
    "format": "Hand-Written / Mathematical Notation & Proof",
    "why": "Discrete mathematics (sets, relations, functions, logic) is best practiced symbolically on paper.",
    "problemStatement": "",
    "checklist": [
      "Compute Cartesian products, power sets, and complements for given finite sets.",
      "Prove whether a given relation on $\\mathbb{Z}$ is reflexive, symmetric, and transitive (Equivalence relation).",
      "Write predicate logic formulas for statements involving $\\forall$ and $\\exists$."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **1. Set Calculations:**\r\n  * Given $A = \\{1, 2\\}$, $B = \\{a, b, c\\}$:\r\n  * Cartesian Product: $A \\times B = \\{(1, a), (1, b), (1, c), (2, a), (2, b), (2, c)\\}$.\r\n  * Power Set $\\mathcal{P}(A) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$. Cardinality $|\\mathcal{P}(A)| = 2^{|A|} = 2^2 = 4$.\r\n* **2. Formal Equivalence Relation Proof on Integers:**\r\n  * *Claim:* The relation $a \\equiv b \\pmod m$ (meaning $m \\mid (a - b)$ for $m \\in \\mathbb{Z}^+$) is an equivalence relation on $\\mathbb{Z}$.\r\n  * *Proof of Reflexivity:* For any $a \\in \\mathbb{Z}$, $a - a = 0 = 0 \\cdot m$. Since $0$ is an integer multiple of $m$, $a \\equiv a \\pmod m$.\r\n  * *Proof of Symmetry:* Assume $a \\equiv b \\pmod m$. Then $a - b = k \\cdot m$ for some $k \\in \\mathbb{Z}$. Multiplying both sides by $-1$ yields $b - a = (-k) \\cdot m$. Since $-k \\in \\mathbb{Z}$, $b \\equiv a \\pmod m$.\r\n  * *Proof of Transitivity:* Assume $a \\equiv b \\pmod m$ and $b \\equiv c \\pmod m$. Then $a - b = k_1 m$ and $b - c = k_2 m$. Adding both equations yields $(a - b) + (b - c) = a - c = (k_1 + k_2)m$. Since $k_1 + k_2 \\in \\mathbb{Z}$, $a \\equiv c \\pmod m$.\r\n  * *Conclusion:* Because the relation satisfies reflexivity, symmetry, and transitivity, it is a valid equivalence relation. $\\blacksquare$",
    "starterCode": ""
  },
  "17": {
    "chapter": 17,
    "chapterTitle": "Proof & Mathematical Reasoning",
    "projectTitle": "Induction & Contradiction Proof Suite",
    "format": "Hand-Written / Formal Proofs",
    "why": "Proving algorithmic correctness requires formal deduction, not running test cases.",
    "problemStatement": "",
    "checklist": [
      "Prove by Mathematical Induction that $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$.",
      "Prove by Induction that the sum of the first $n$ odd integers is $n^2$.",
      "Prove by Contradiction that $\\sqrt{2}$ is irrational.",
      "Disprove a false algorithmic claim using a single minimal counterexample."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **1. Mathematical Induction Proof for $\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$:**\r\n\r\n  * *Base Case ($n = 1$):* $\\text{LHS} = \\sum_{i=1}^1 i = 1$. $\\text{RHS} = \\frac{1(1+1)}{2} = \\frac{2}{2} = 1$. $\\text{LHS} = \\text{RHS}$. The base case holds.\r\n  * *Inductive Hypothesis:* Assume the proposition holds for $n = k$, meaning $\\sum_{i=1}^k i = \\frac{k(k+1)}{2}$.\r\n  * *Inductive Step ($n = k + 1$):* We must show that $\\sum_{i=1}^{k+1} i = \\frac{(k+1)((k+1)+1)}{2} = \\frac{(k+1)(k+2)}{2}$.\r\n\r\n    $$\r\n    \\sum_{i=1}^{k+1} i = \\left(\\sum_{i=1}^k i\\right) + (k+1)\r\n    $$\r\n\r\n    Substituting the inductive hypothesis:\r\n    $$\r\n    = \\frac{k(k+1)}{2} + (k+1) = (k+1)\\left(\\frac{k}{2} + 1\\right) = (k+1)\\left(\\frac{k+2}{2}\\right) = \\frac{(k+1)(k+2)}{2}\r\n    $$\r\n\r\n    The inductive step is proven. By the principle of mathematical induction, the identity holds for all integers $n \\ge 1$. $\\blacksquare$\r\n* **2. Proof by Contradiction that $\\sqrt{2}$ is Irrational:**\r\n\r\n  * Assume for contradiction that $\\sqrt{2}$ is a rational number. Then there exist integers $a, b$ with $b \\neq 0$ such that $\\sqrt{2} = \\frac{a}{b}$, where $\\frac{a}{b}$ is in simplest form ($\\gcd(a, b) = 1$).\r\n  * Squaring both sides: $2 = \\frac{a^2}{b^2} \\implies a^2 = 2b^2$.\r\n  * This implies $a^2$ is an even integer, which means $a$ must also be even (since the square of an odd integer is always odd).\r\n  * Let $a = 2k$ for some integer $k$. Substituting into the equation:\r\n    $$\r\n    (2k)^2 = 2b^2 \\implies 4k^2 = 2b^2 \\implies b^2 = 2k^2\r\n    $$\r\n  * This implies $b^2$ is even, which means $b$ must also be even.\r\n  * If both $a$ and $b$ are even, they share a common factor of 2, contradicting the initial assumption that $\\gcd(a, b) = 1$.\r\n  * Therefore, the initial assumption must be false. $\\sqrt{2}$ is irrational. $\\blacksquare$",
    "starterCode": ""
  },
  "18": {
    "chapter": 18,
    "chapterTitle": "Counting & Probability",
    "projectTitle": "Hash Collision & Birthday Problem Risk Assessment",
    "format": "Hand-Written / Analytical Probability Calculations",
    "why": "Combinatorics and expected value equations underpin hashing collisions and randomized algorithms.",
    "problemStatement": "",
    "checklist": [
      "Calculate permutations $P(n, k)$ and combinations $\\binom{n}{k}$ for password space exploration.",
      "Compute the exact probability of at least one hash collision in a 16-bit hash table with 300 entries.",
      "Calculate the Expected Value $E[X]$ of coin-toss streaks before reaching two consecutive heads."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **1. Permutations and Combinations Analysis:**\r\n  * Number of distinct 8-character alphanumeric passwords (letters a-z, A-Z, digits 0-9; alphabet size 62):\r\n    $$\r\n    \\text{Keyspace} = 62^8 = 218,340,105,584,896 \\text{ possibilities}\r\n    $$\r\n* **2. Hash Table Collision Probability (Birthday Problem Formulation):**\r\n  * For a hash table of size $M = 2^{16} = 65,536$ slots with $N = 300$ inserted keys:\r\n    $$\r\n    P(\\text{At least 1 collision}) \\approx 1 - e^{-\\frac{N(N-1)}{2M}} = 1 - e^{-\\frac{300 \\times 299}{131,072}} = 1 - e^{-0.68435} \\approx \\mathbf{49.56\\%}\r\n    $$\r\n  * This demonstrates that with only 300 entries in a 65,536-slot table, there is nearly a 50% chance of a hash collision.",
    "starterCode": ""
  },
  "19": {
    "chapter": 19,
    "chapterTitle": "Statistics for Computing",
    "projectTitle": "API Latency Profiler & Outlier Detector",
    "format": "Coding & Math Analysis (Python / Jupyter)",
    "why": "Calculate descriptive statistics, variance, and percentiles on synthetic latency datasets.",
    "problemStatement": "",
    "checklist": [
      "Compute Mean, Median, Mode, Variance, and Standard Deviation of a 1,000-request latency dataset.",
      "Calculate 50th, 90th, 99th, and 99.9th percentiles (p50, p90, p99).",
      "Implement IQR (Interquartile Range) to filter network anomalies and produce a distribution summary."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 19 Solution: Latency Profiler & Outlier Detection Engine\r\n\"\"\"\r\nimport numpy as np\r\n\r\ndef profile_latencies(latency_samples: list[float]) -> dict:\r\n    data = np.array(latency_samples)\r\n  \r\n    mean_val = float(np.mean(data))\r\n    median_val = float(np.median(data))\r\n    std_dev = float(np.std(data))\r\n  \r\n    p50 = float(np.percentile(data, 50))\r\n    p90 = float(np.percentile(data, 90))\r\n    p99 = float(np.percentile(data, 99))\r\n    p99_9 = float(np.percentile(data, 99.9))\r\n  \r\n    q25 = float(np.percentile(data, 25))\r\n    q75 = float(np.percentile(data, 75))\r\n    iqr = q75 - q25\r\n    upper_threshold = q75 + (1.5 * iqr)\r\n  \r\n    outliers = data[data > upper_threshold].tolist()\r\n    clean_data = data[data <= upper_threshold]\r\n  \r\n    return {\r\n        \"mean_ms\": round(mean_val, 2),\r\n        \"median_ms\": round(median_val, 2),\r\n        \"std_dev\": round(std_dev, 2),\r\n        \"percentiles\": {\"p50\": round(p50, 2), \"p90\": round(p90, 2), \"p99\": round(p99, 2), \"p99.9\": round(p99_9, 2)},\r\n        \"outlier_count\": len(outliers),\r\n        \"outliers_detected\": [round(x, 2) for x in outliers]\r\n    }\r\n```",
    "starterCode": "\"\"\"\nChapter 19 Project Solution: API Latency Profiler & Outlier Detector\nFormat: Coding & Math Analysis (Python / Jupyter)\n\nProblem:\nStatistics for Computing\n\"\"\"\n\n"
  },
  "20": {
    "chapter": 20,
    "chapterTitle": "Linear Algebra & Calculus Intuition",
    "projectTitle": "2D Matrix Transformation & Gradient Descent Step Engine",
    "format": "Hand-Written & Python Vector Math",
    "why": "Grasp vectors, dot products, matrix transformations, and gradient descent fundamentals.",
    "problemStatement": "",
    "checklist": [
      "Compute manual vector dot product and 2x2 matrix multiplication on paper.",
      "Implement 2D coordinate rotation/scaling using matrices in Python.",
      "Compute the derivative $\\frac{df}{dx}$ of $f(x) = x^2 - 4x + 4$ and manually trace 3 steps of gradient descent towards the minimum."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 20 Solution: 2D Transformation & Gradient Descent Optimization\r\n\"\"\"\r\nimport numpy as np\r\n\r\ndef apply_2d_transformations():\r\n    # 1. Rotate 2D vector [1, 0] by 90 degrees counter-clockwise\r\n    theta = np.pi / 2\r\n    rotation_matrix = np.array([\r\n        [np.cos(theta), -np.sin(theta)],\r\n        [np.sin(theta),  np.cos(theta)]\r\n    ])\r\n    original_vector = np.array([1.0, 0.0])\r\n    transformed_vector = rotation_matrix.dot(original_vector)\r\n    print(f\"Original: {original_vector} -> Rotated 90°: {np.round(transformed_vector, 4)}\")\r\n\r\ndef run_gradient_descent_optimization():\r\n    # Minimize f(x) = x^2 - 4x + 4, derivative f'(x) = 2x - 4\r\n    x = 8.0  # Initial starting point\r\n    learning_rate = 0.15\r\n    print(\"\\n--- Gradient Descent Optimization Steps ---\")\r\n    for step in range(1, 6):\r\n        gradient = (2.0 * x) - 4.0\r\n        x = x - (learning_rate * gradient)\r\n        cost = (x ** 2) - (4 * x) + 4\r\n        print(f\"Iteration {step}: Current x = {x:.4f} | Gradient = {gradient:.4f} | Cost f(x) = {cost:.6f}\")\r\n\r\nif __name__ == \"__main__\":\r\n    apply_2d_transformations()\r\n    run_gradient_descent_optimization()\r\n```\r\n\r\n---\r\n\r\n# Unit IV — Organizing Large Software (Chapters 21–30)",
    "starterCode": "\"\"\"\nChapter 20 Project Solution: 2D Matrix Transformation & Gradient Descent Step Engine\nFormat: Hand-Written & Python Vector Math\n\nProblem:\nLinear Algebra & Calculus Intuition\n\"\"\"\n\n"
  },
  "21": {
    "chapter": 21,
    "chapterTitle": "Object Thinking",
    "projectTitle": "Procedural-to-OOP Paradigm Shift Case Study",
    "format": "Written Analysis & Conceptual Refactoring",
    "why": "Transition your mental model from procedural step-execution to autonomous collaborating objects with state and behavior.",
    "problemStatement": "",
    "checklist": [
      "Take a 100-line spaghetti procedural script with global dictionaries and identify 3 failure modes (e.g., data mutation, shotgun surgery).",
      "Define 3 domain entities, their responsibilities, and private invariants."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **Failure Modes of Procedural Scripts:**\r\n  1. *Shotgun Surgery:* A small change in data format requires editing dozens of independent functions across multiple files.\r\n  2. *Uncontrolled State Mutation:* Any function can arbitrarily mutate global dictionary keys without validation.\r\n* **Domain Model Entity Formulation:**\r\n  * `Customer`: Encapsulates identification, contact info, and payment profiles.\r\n  * `Order`: Enforces class invariants (cannot add items to a finalized order, total recalculates on modification).\r\n  * `InventoryItem`: Controls stock counts with protected decrements preventing negative quantities.",
    "starterCode": ""
  },
  "22": {
    "chapter": 22,
    "chapterTitle": "Classes & Objects",
    "projectTitle": "Bank Account Instance Manager with Heap Diagram",
    "format": "Coding (Python) & Heap Memory Diagram",
    "why": "Understand how object instances live on the heap, `self`, and `__init__`.",
    "problemStatement": "",
    "checklist": [
      "Implement `BankAccount` class with `__init__`, `deposit()`, and `withdraw()`.",
      "Instantiate multiple independent accounts.",
      "Draw a heap memory diagram showing class blueprints vs separate instance memory blocks."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nclass BankAccount:\r\n    def __init__(self, account_holder: str, initial_balance: float = 0.0):\r\n        self.account_holder = account_holder\r\n        self.balance = float(initial_balance)\r\n\r\n    def deposit(self, amount: float):\r\n        if amount <= 0: raise ValueError(\"Deposit must be positive.\")\r\n        self.balance += amount\r\n\r\n    def withdraw(self, amount: float):\r\n        if amount > self.balance: raise ValueError(\"Insufficient funds.\")\r\n        self.balance -= amount\r\n\r\n# Memory Heap Explanation:\r\n# 'acc1' and 'acc2' hold references (memory pointers) on the Stack pointing to \r\n# separate, independent instance dictionaries allocated in the Heap.\r\nacc1 = BankAccount(\"Alice\", 150.0)\r\nacc2 = BankAccount(\"Bob\", 300.0)\r\n```",
    "starterCode": "\"\"\"\nChapter 22 Project Solution: Bank Account Instance Manager with Heap Diagram\nFormat: Coding (Python) & Heap Memory Diagram\n\nProblem:\nClasses & Objects\n\"\"\"\n\n"
  },
  "23": {
    "chapter": 23,
    "chapterTitle": "Encapsulation & Abstraction",
    "projectTitle": "Payment Gateway Abstraction with Invariant Protection",
    "format": "Coding (Python)",
    "why": "Protect object invariants using `@property`, private attributes (`_`), and Abstract Base Classes (`abc.ABC`).",
    "problemStatement": "",
    "checklist": [
      "Define an Abstract Base Class `PaymentGateway` with `@abstractmethod def process_payment()`.",
      "Implement concrete classes `StripeGateway` and `PayPalGateway`.",
      "Enforce balance invariants using property setters that reject invalid states."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nfrom abc import ABC, abstractmethod\r\n\r\nclass PaymentGateway(ABC):\r\n    @abstractmethod\r\n    def process_charge(self, amount: float, card_token: str) -> bool:\r\n        \"\"\"Abstract interface contract for all payment processors.\"\"\"\r\n        pass\r\n\r\nclass StripePaymentGateway(PaymentGateway):\r\n    def process_charge(self, amount: float, card_token: str) -> bool:\r\n        # Private implementation hidden from caller\r\n        print(f\"[STRIPE API] Charging ${amount:.2f} to token {card_token[:6]}...\")\r\n        return True\r\n\r\nclass SecureWallet:\r\n    def __init__(self, initial_funds: float):\r\n        self._funds = float(initial_funds)  # Protected private attribute\r\n\r\n    @property\r\n    def funds(self) -> float:\r\n        return self._funds\r\n\r\n    @funds.setter\r\n    def funds(self, value: float):\r\n        if value < 0:\r\n            raise ValueError(\"Wallet balance cannot be set to a negative value.\")\r\n        self._funds = value\r\n```",
    "starterCode": "\"\"\"\nChapter 23 Project Solution: Payment Gateway Abstraction with Invariant Protection\nFormat: Coding (Python)\n\nProblem:\nEncapsulation & Abstraction\n\"\"\"\n\n"
  },
  "24": {
    "chapter": 24,
    "chapterTitle": "Inheritance & Polymorphism",
    "projectTitle": "Polymorphic Notification Dispatcher",
    "format": "Coding (Python)",
    "why": "Replace fragile `if/elif` type checking with polymorphic method dispatch.",
    "problemStatement": "",
    "checklist": [
      "Create base `Notification` and subclasses `EmailNotification`, `SMSNotification`, `PushNotification`.",
      "Implement polymorphic `send()` on each subclass.",
      "Eliminate all `isinstance()` or `type()` checks from the dispatcher loop."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nfrom abc import ABC, abstractmethod\r\n\r\nclass NotificationSender(ABC):\r\n    @abstractmethod\r\n    def send(self, recipient: str, message: str):\r\n        pass\r\n\r\nclass EmailNotificationSender(NotificationSender):\r\n    def send(self, recipient: str, message: str):\r\n        print(f\"[EMAIL] Sent message to {recipient}: '{message}'\")\r\n\r\nclass SMSNotificationSender(NotificationSender):\r\n    def send(self, recipient: str, message: str):\r\n        print(f\"[SMS] Sent text to {recipient}: '{message}'\")\r\n\r\nclass PushNotificationSender(NotificationSender):\r\n    def send(self, recipient: str, message: str):\r\n        print(f\"[PUSH NOTIFICATION] Dispatched to device {recipient}: '{message}'\")\r\n\r\n# Clean Polymorphic Dispatch (Replaces fragile if/elif chains)\r\ndef broadcast_alert(channels: list[NotificationSender], user_id: str, alert_text: str):\r\n    for channel in channels:\r\n        channel.send(user_id, alert_text)\r\n```",
    "starterCode": "\"\"\"\nChapter 24 Project Solution: Polymorphic Notification Dispatcher\nFormat: Coding (Python)\n\nProblem:\nInheritance & Polymorphism\n\"\"\"\n\n"
  },
  "25": {
    "chapter": 25,
    "chapterTitle": "Composition (Prefer Has-A over Is-A)",
    "projectTitle": "Modular Game Character & Weapon Assembly System",
    "format": "Coding (Python)",
    "why": "Avoid deep, rigid inheritance hierarchies by assembling behaviors through composition.",
    "problemStatement": "",
    "checklist": [
      "Refactor a deep hierarchy (`FlyingFireDragonWarrior`) into composed components (`Character(attack_behavior, movement_behavior)`).",
      "Swap behaviors dynamically at runtime (e.g., equip `SwordAttack` -> `BowAttack`)."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nfrom abc import ABC, abstractmethod\r\n\r\nclass AttackBehavior(ABC):\r\n    @abstractmethod\r\n    def attack(self) -> int: pass\r\n\r\nclass MeleeSwordAttack(AttackBehavior):\r\n    def attack(self) -> int:\r\n        print(\"Hero slashes with an iron blade!\")\r\n        return 18\r\n\r\nclass RangedBowAttack(AttackBehavior):\r\n    def attack(self) -> int:\r\n        print(\"Hero looses a swift arrow from afar!\")\r\n        return 12\r\n\r\nclass GameHero:\r\n    def __init__(self, name: str, attack_behavior: AttackBehavior):\r\n        self.name = name\r\n        self.attack_behavior = attack_behavior\r\n\r\n    def set_weapon(self, new_attack_behavior: AttackBehavior):\r\n        \"\"\"Dynamic runtime behavior swapping via composition.\"\"\"\r\n        self.attack_behavior = new_attack_behavior\r\n\r\n    def perform_attack(self) -> int:\r\n        return self.attack_behavior.attack()\r\n```",
    "starterCode": "\"\"\"\nChapter 25 Project Solution: Modular Game Character & Weapon Assembly System\nFormat: Coding (Python)\n\nProblem:\nComposition (Prefer Has-A over Is-A)\n\"\"\"\n\n"
  },
  "26": {
    "chapter": 26,
    "chapterTitle": "SOLID Principles",
    "projectTitle": "SOLID E-Commerce Invoice & Order Pipeline",
    "format": "Coding & Architecture Review (Python)",
    "why": "Practice all 5 SOLID design principles in a single cohesive codebase.",
    "problemStatement": "",
    "checklist": [
      "Demonstrate SRP (separate tax calculation, persistence, and formatting).",
      "Demonstrate OCP & LSP (add discounts without editing existing order logic).",
      "Demonstrate ISP & DIP (depend on abstractions, not concrete database drivers)."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 26 Solution: SOLID E-Commerce Order & Invoicing System\r\n\"\"\"\r\nfrom abc import ABC, abstractmethod\r\n\r\n# 1. Single Responsibility Principle: Tax Calculation decoupled from storage & rendering\r\nclass TaxCalculator:\r\n    @staticmethod\r\n    def calculate_sales_tax(subtotal: float) -> float:\r\n        return round(subtotal * 0.08, 2)\r\n\r\n# 2. Open-Closed & Liskov Substitution Principle: Extensible discount strategies\r\nclass DiscountStrategy(ABC):\r\n    @abstractmethod\r\n    def apply_discount(self, amount: float) -> float: pass\r\n\r\nclass PercentageDiscount(DiscountStrategy):\r\n    def __init__(self, percent: float): self.percent = percent\r\n    def apply_discount(self, amount: float) -> float:\r\n        return amount * (1.0 - (self.percent / 100.0))\r\n\r\nclass FlatDiscount(DiscountStrategy):\r\n    def __init__(self, flat_off: float): self.flat_off = flat_off\r\n    def apply_discount(self, amount: float) -> float:\r\n        return max(0.0, amount - self.flat_off)\r\n\r\n# 3. Interface Segregation & Dependency Inversion Principles\r\nclass OrderRepository(ABC):\r\n    @abstractmethod\r\n    def save(self, order_id: str, order_data: dict): pass\r\n\r\nclass SQLOrderRepository(OrderRepository):\r\n    def save(self, order_id: str, order_data: dict):\r\n        print(f\"Persisting order {order_id} to SQL database.\")\r\n```",
    "starterCode": "\"\"\"\nChapter 26 Project Solution: SOLID E-Commerce Invoice & Order Pipeline\nFormat: Coding & Architecture Review (Python)\n\nProblem:\nSOLID Principles\n\"\"\"\n\n"
  },
  "27": {
    "chapter": 27,
    "chapterTitle": "Code Quality & Refactoring",
    "projectTitle": "Legacy Order Processor Code Smell Cleanup",
    "format": "Coding / Refactoring (Python)",
    "why": "Identify code smells (Long Method, Feature Envy, Primitive Obsession) and perform targeted refactoring under test coverage.",
    "problemStatement": "",
    "checklist": [
      "Write regression tests for an ugly legacy function before touching it.",
      "Extract methods, replace magic numbers, and introduce Parameter Objects.",
      "Verify all tests pass with zero behavioral regressions."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* **Refactoring Execution Strategy:**\r\n  1. *Introduce Characterization Tests:* Write thorough unit tests covering all existing boundary conditions.\r\n  2. *Extract Method:* Decompose large multi-purpose procedures into small, single-responsibility functions.\r\n  3. *Replace Magic Values:* Introduce strongly typed Enum classes (e.g. `OrderStatus.PENDING`).\r\n  4. *Introduce Parameter Objects:* Group scattered parameters (`start_date`, `end_date`, `time_zone`) into a cohesive `TimeRange` object.",
    "starterCode": "\"\"\"\nChapter 27 Project Solution: Legacy Order Processor Code Smell Cleanup\nFormat: Coding / Refactoring (Python)\n\nProblem:\nCode Quality & Refactoring\n\"\"\"\n\n"
  },
  "28": {
    "chapter": 28,
    "chapterTitle": "Design Patterns",
    "projectTitle": "Document Conversion Suite (Factory, Decorator, Strategy)",
    "format": "Coding (Python)",
    "why": "Implement canonical Gang of Four (GoF) design patterns: Creational, Structural, Behavioral.",
    "problemStatement": "",
    "checklist": [
      "*Factory Method:** Create document parsers (PDF, Markdown, HTML).",
      "*Decorator:** Add compression and encryption wrappers to document output streams.",
      "*Strategy:** Interchange export compression algorithms (Zip vs Gzip)."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n# 1. Factory Pattern\r\nclass DocumentExporterFactory:\r\n    @staticmethod\r\n    def create_exporter(format_type: str):\r\n        if format_type.lower() == \"pdf\": return PDFExporter()\r\n        elif format_type.lower() == \"csv\": return CSVExporter()\r\n        raise ValueError(f\"Unknown format: {format_type}\")\r\n\r\n# 2. Decorator Pattern\r\nclass TextStream(ABC):\r\n    @abstractmethod\r\n    def write(self, data: str): pass\r\n\r\nclass PlainTextStream(TextStream):\r\n    def write(self, data: str): print(f\"Writing data: {data}\")\r\n\r\nclass CompressionDecorator(TextStream):\r\n    def __init__(self, wrapped: TextStream): self.wrapped = wrapped\r\n    def write(self, data: str):\r\n        compressed = f\"[COMPRESSED:{data}]\"\r\n        self.wrapped.write(compressed)\r\n\r\n# 3. Strategy Pattern\r\nclass CompressionContext:\r\n    def __init__(self, strategy): self.strategy = strategy\r\n    def execute(self, payload): return self.strategy.compress(payload)\r\n```",
    "starterCode": "\"\"\"\nChapter 28 Project Solution: Document Conversion Suite (Factory, Decorator, Strategy)\nFormat: Coding (Python)\n\nProblem:\nDesign Patterns\n\"\"\"\n\n"
  },
  "29": {
    "chapter": 29,
    "chapterTitle": "Low-Level Design (LLD)",
    "projectTitle": "Multi-Level Parking Lot Low-Level Design",
    "format": "Written LLD + Class Diagram (UML)",
    "why": "Master structural object modeling under real design constraints before writing code.",
    "problemStatement": "",
    "checklist": [
      "Clarify requirements (Vehicle types, Spot sizes, Pricing strategy, Ticket validation).",
      "Draw UML Class Diagram with associations, aggregations, and compositions.",
      "Provide interface definitions and pseudocode for `park_vehicle()` and `calculate_fee()`."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **Entities & Relationships:**\r\n  * `ParkingLot` $\\xrightarrow{\\text{1 to N}}$ `ParkingLevel` $\\xrightarrow{\\text{1 to N}}$ `ParkingSpot`.\r\n  * `ParkingSpot` $\\xrightarrow{\\text{1 to 1}}$ `Vehicle` (Car, Motorcycle, Truck).\r\n  * `Ticket` records entry time, assigned spot ID, and vehicle registration.\r\n  * `FeeCalculationStrategy` implements flat, hourly, or vehicle-type-tiered rate models.",
    "starterCode": ""
  },
  "30": {
    "chapter": 30,
    "chapterTitle": "OOP Consolidation",
    "projectTitle": "Custom In-Memory Vector & DataFrame Engine",
    "format": "Comprehensive Coding Capstone (Python)",
    "why": "Build an idiomatic, production-ready Python OOP library with custom dunder methods (`__repr__`, `__eq__`, `__len__`), descriptors, and unit tests.",
    "problemStatement": "",
    "checklist": [
      "Implement a `DataSeries` class with arithmetic dunder overloads (`__add__`, `__mul__`, `__getitem__`).",
      "Implement `DataFrame` with column access, filtering expressions, and formatted display.",
      "Write a comprehensive unit test suite covering invariants and edge cases."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\n\"\"\"\r\nChapter 30 Capstone: Complete Idiomatic Vector & Series OOP Library\r\n\"\"\"\r\n\r\nclass DataSeries:\r\n    def __init__(self, values: list[float], name: str = \"Series\"):\r\n        self.name = name\r\n        self._data = [float(v) for v in values]\r\n\r\n    def __len__(self) -> int:\r\n        return len(self._data)\r\n\r\n    def __getitem__(self, index: int) -> float:\r\n        return self._data[index]\r\n\r\n    def __add__(self, other: \"DataSeries\") -> \"DataSeries\":\r\n        if len(self) != len(other):\r\n            raise ValueError(\"Series lengths must match for addition.\")\r\n        return DataSeries([a + b for a, b in zip(self._data, other._data)], name=f\"{self.name}+{other.name}\")\r\n\r\n    def __repr__(self) -> str:\r\n        return f\"DataSeries(name='{self.name}', length={len(self)}, values={self._data})\"\r\n\r\n    def mean(self) -> float:\r\n        return sum(self._data) / len(self._data) if self._data else 0.0\r\n```\r\n\r\n---\r\n\r\n# Unit V — Data Structures & Algorithms (Chapters 31–48)",
    "starterCode": "\"\"\"\nChapter 30 Project Solution: Custom In-Memory Vector & DataFrame Engine\nFormat: Comprehensive Coding Capstone (Python)\n\nProblem:\nOOP Consolidation\n\"\"\"\n\n"
  },
  "31": {
    "chapter": 31,
    "chapterTitle": "Complexity Analysis",
    "projectTitle": "Big-O Asymptotic Profiler & Growth Plotter",
    "format": "Hand-Written & Benchmarking Code",
    "why": "Derive Big-O on paper, then empirically measure execution time with increasing $N$.",
    "problemStatement": "",
    "checklist": [
      "Derive the Big-O time and space complexity for 4 given code snippets on paper.",
      "Benchmark $O(1), O(\\log N), O(N), O(N^2)$ functions with input sizes $N = 10$ to $100,000$.",
      "Plot or print execution time scaling to verify theoretical predictions."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **Asymptotic Big-O Derivations:**\r\n  * *Snippet 1:* Single loop running $N$ iterations doing $O(1)$ operations $\\implies \\mathbf{O(N)}$ Time, $\\mathbf{O(1)}$ Space.\r\n  * *Snippet 2:* Nested matrix loop ($N \\times N$) $\\implies \\mathbf{O(N^2)}$ Time, $\\mathbf{O(1)}$ Space.\r\n  * *Snippet 3:* Binary search loop halving input ($N, N/2, N/4, \\dots$) $\\implies \\mathbf{O(\\log N)}$ Time, $\\mathbf{O(1)}$ Space.",
    "starterCode": ""
  },
  "32": {
    "chapter": 32,
    "chapterTitle": "Arrays & Strings",
    "projectTitle": "Dynamic Array (Custom List) & In-Place String Manipulator",
    "format": "Coding (Python from scratch)",
    "why": "Understand contiguous memory, capacity doubling, and pointer manipulation without native shortcuts.",
    "problemStatement": "",
    "checklist": [
      "Implement `CustomArrayList` with automatic resizing/doubling on append.",
      "Implement in-place string reversal and anagram grouping in $O(N)$ time."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nclass CustomDynamicArray:\r\n    def __init__(self):\r\n        self.capacity = 2\r\n        self.length = 0\r\n        self.buffer = [None] * self.capacity\r\n\r\n    def append(self, element):\r\n        if self.length == self.capacity:\r\n            self._resize(self.capacity * 2)\r\n        self.buffer[self.length] = element\r\n        self.length += 1\r\n\r\n    def _resize(self, new_capacity):\r\n        new_buffer = [None] * new_capacity\r\n        for i in range(self.length):\r\n            new_buffer[i] = self.buffer[i]\r\n        self.buffer = new_buffer\r\n        self.capacity = new_capacity\r\n\r\ndef group_anagrams(strs: list[str]) -> list[list[str]]:\r\n    groups = {}\r\n    for word in strs:\r\n        sorted_key = \"\".join(sorted(word))\r\n        groups.setdefault(sorted_key, []).append(word)\r\n    return list(groups.values())\r\n```",
    "starterCode": "\"\"\"\nChapter 32 Project Solution: Dynamic Array (Custom List) & In-Place String Manipulator\nFormat: Coding (Python from scratch)\n\nProblem:\nArrays & Strings\n\"\"\"\n\n"
  },
  "33": {
    "chapter": 33,
    "chapterTitle": "Linked Lists",
    "projectTitle": "Doubly Linked List with Pointer Reversal & Cycle Detection",
    "format": "Coding (Python)",
    "why": "Master pointer manipulation, node linking, and memory reference traversal.",
    "problemStatement": "",
    "checklist": [
      "Build a `DoublyLinkedList` with `insert_head`, `insert_tail`, `delete_node`.",
      "Implement in-place iterative linked list reversal ($O(N)$ time, $O(1)$ space).",
      "Implement Floyd's Tortoise and Hare Cycle-Finding algorithm."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nclass ListNode:\r\n    def __init__(self, val=0, next_node=None):\r\n        self.val = val\r\n        self.next = next_node\r\n\r\ndef reverse_linked_list(head: ListNode | None) -> ListNode | None:\r\n    previous_node = None\r\n    current_node = head\r\n    while current_node is not None:\r\n        next_node = current_node.next\r\n        current_node.next = previous_node\r\n        previous_node = current_node\r\n        current_node = next_node\r\n    return previous_node\r\n\r\ndef has_cycle(head: ListNode | None) -> bool:\r\n    slow = fast = head\r\n    while fast and fast.next:\r\n        slow = slow.next\r\n        fast = fast.next.next\r\n        if slow == fast:\r\n            return True\r\n    return False\r\n```",
    "starterCode": "\"\"\"\nChapter 33 Project Solution: Doubly Linked List with Pointer Reversal & Cycle Detection\nFormat: Coding (Python)\n\nProblem:\nLinked Lists\n\"\"\"\n\n"
  },
  "34": {
    "chapter": 34,
    "chapterTitle": "Stacks, Queues & Deques",
    "projectTitle": "Valid Parentheses & Polish Notation Evaluator",
    "format": "Coding (Python)",
    "why": "Implement LIFO and FIFO abstract data types and use them for parsing and scheduling.",
    "problemStatement": "",
    "checklist": [
      "Implement a Stack to evaluate Reverse Polish Notation expressions (e.g., `[\"2\", \"1\", \"+\", \"3\", \"*\"] -> 9`).",
      "Implement a balanced brackets validator handling `()[]{}`.",
      "Implement a Monotonic Stack to solve the \"Next Greater Element\" problem in $O(N)$."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef is_valid_parentheses(s: str) -> bool:\r\n    stack = []\r\n    mapping = {')': '(', '}': '{', ']': '['}\r\n    for char in s:\r\n        if char in mapping:\r\n            top_element = stack.pop() if stack else '#'\r\n            if mapping[char] != top_element:\r\n                return False\r\n        else:\r\n            stack.append(char)\r\n    return not stack\r\n\r\ndef next_greater_element(nums: list[int]) -> list[int]:\r\n    res = [-1] * len(nums)\r\n    stack = []  # Monotonic decreasing stack of indices\r\n    for i, num in enumerate(nums):\r\n        while stack and nums[stack[-1]] < num:\r\n            idx = stack.pop()\r\n            res[idx] = num\r\n        stack.append(i)\r\n    return res\r\n```",
    "starterCode": "\"\"\"\nChapter 34 Project Solution: Valid Parentheses & Polish Notation Evaluator\nFormat: Coding (Python)\n\nProblem:\nStacks, Queues & Deques\n\"\"\"\n\n"
  },
  "35": {
    "chapter": 35,
    "chapterTitle": "Recursion",
    "projectTitle": "Recursive File Tree Crawler & Tower of Hanoi Simulator",
    "format": "Coding & Call-Stack Diagram",
    "why": "Trace recursive base cases and visualize stack frame memory.",
    "problemStatement": "",
    "checklist": [
      "Implement Tower of Hanoi solver and print the recursive move sequence.",
      "Draw the recursive call tree for `fibonacci(5)`.",
      "Implement a recursive directory walker that searches for files by extension."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef solve_tower_of_hanoi(n: int, source_peg: str, destination_peg: str, spare_peg: str):\r\n    \"\"\"\r\n    Solves the Tower of Hanoi problem in 2^n - 1 moves.\r\n    \"\"\"\r\n    if n == 1:\r\n        print(f\"Move disk 1 from {source_peg} to {destination_peg}\")\r\n        return\r\n    solve_tower_of_hanoi(n - 1, source_peg, spare_peg, destination_peg)\r\n    print(f\"Move disk {n} from {source_peg} to {destination_peg}\")\r\n    solve_tower_of_hanoi(n - 1, spare_peg, destination_peg, source_peg)\r\n```",
    "starterCode": "\"\"\"\nChapter 35 Project Solution: Recursive File Tree Crawler & Tower of Hanoi Simulator\nFormat: Coding & Call-Stack Diagram\n\nProblem:\nRecursion\n\"\"\"\n\n"
  },
  "36": {
    "chapter": 36,
    "chapterTitle": "Hashing",
    "projectTitle": "Custom HashMap with Separate Chaining & Auto-Resizing",
    "format": "Coding (Python from scratch)",
    "why": "Build a hash table from scratch to understand hash functions, collisions, and load factors.",
    "problemStatement": "",
    "checklist": [
      "Implement a polynomial rolling hash function for strings.",
      "Handle collisions using linked-list separate chaining.",
      "Implement automatic dynamic resizing (re-hashing) when load factor $\\alpha \\ge 0.75$."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nclass DirectChainingHashMap:\r\n    def __init__(self, initial_capacity: int = 8):\r\n        self.capacity = initial_capacity\r\n        self.size = 0\r\n        self.buckets = [[] for _ in range(self.capacity)]\r\n\r\n    def _hash(self, key: str) -> int:\r\n        hash_val = 0\r\n        for ch in str(key):\r\n            hash_val = (hash_val * 31 + ord(ch)) % self.capacity\r\n        return hash_val\r\n\r\n    def put(self, key: str, value):\r\n        if (self.size / self.capacity) >= 0.75:\r\n            self._rehash()\r\n        idx = self._hash(key)\r\n        for i, (k, v) in enumerate(self.buckets[idx]):\r\n            if k == key:\r\n                self.buckets[idx][i] = (key, value)\r\n                return\r\n        self.buckets[idx].append((key, value))\r\n        self.size += 1\r\n\r\n    def get(self, key: str):\r\n        idx = self._hash(key)\r\n        for k, v in self.buckets[idx]:\r\n            if k == key: return v\r\n        raise KeyError(f\"Key '{key}' not found.\")\r\n\r\n    def _rehash(self):\r\n        old_buckets = self.buckets\r\n        self.capacity *= 2\r\n        self.buckets = [[] for _ in range(self.capacity)]\r\n        self.size = 0\r\n        for bucket in old_buckets:\r\n            for k, v in bucket:\r\n                self.put(k, v)\r\n```",
    "starterCode": "\"\"\"\nChapter 36 Project Solution: Custom HashMap with Separate Chaining & Auto-Resizing\nFormat: Coding (Python from scratch)\n\nProblem:\nHashing\n\"\"\"\n\n"
  },
  "37": {
    "chapter": 37,
    "chapterTitle": "Trees",
    "projectTitle": "Binary Search Tree (BST) Engine with Inorder/Preorder/Postorder/Level-Order",
    "format": "Coding (Python)",
    "why": "Build hierarchical structures and write tree traversal algorithms.",
    "problemStatement": "",
    "checklist": [
      "Implement BST insertion, search, and deletion (handling 0, 1, and 2 children).",
      "Implement DFS (Inorder, Preorder, Postorder) and BFS Level-Order traversals.",
      "Write a validator `is_valid_bst(root)` with $O(N)$ time complexity."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nclass TreeNode:\r\n    def __init__(self, val=0, left=None, right=None):\r\n        self.val = val\r\n        self.left = left\r\n        self.right = right\r\n\r\ndef is_valid_bst(root: TreeNode | None, min_val=float('-inf'), max_val=float('inf')) -> bool:\r\n    if not root:\r\n        return True\r\n    if not (min_val < root.val < max_val):\r\n        return False\r\n    return is_valid_bst(root.left, min_val, root.val) and is_valid_bst(root.right, root.val, max_val)\r\n```",
    "starterCode": "\"\"\"\nChapter 37 Project Solution: Binary Search Tree (BST) Engine with Inorder/Preorder/Postorder/Level-Order\nFormat: Coding (Python)\n\nProblem:\nTrees\n\"\"\"\n\n"
  },
  "38": {
    "chapter": 38,
    "chapterTitle": "Heaps & Priority Queues",
    "projectTitle": "Min-Heap From Scratch & Top-K Frequent Elements Finder",
    "format": "Coding (Python)",
    "why": "Implement binary heap invariants (`parent <= child`) and array-backed tree math.",
    "problemStatement": "",
    "checklist": [
      "Implement `MinHeap` using a continuous array (`sift_up`, `sift_down`, `push`, `pop`).",
      "Implement `heapify()` in $O(N)$ time.",
      "Solve the \"Top-K Frequent Elements\" problem in a continuous stream in $O(N \\log K)$."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nimport heapq\r\n\r\ndef top_k_frequent_elements(nums: list[int], k: int) -> list[int]:\r\n    frequency_map = {}\r\n    for num in nums:\r\n        frequency_map[num] = frequency_map.get(num, 0) + 1\r\n  \r\n    # Use min-heap of size K -> O(N log K) time\r\n    min_heap = []\r\n    for num, count in frequency_map.items():\r\n        heapq.heappush(min_heap, (count, num))\r\n        if len(min_heap) > k:\r\n            heapq.heappop(min_heap)\r\n          \r\n    return [num for count, num in min_heap]\r\n```",
    "starterCode": "\"\"\"\nChapter 38 Project Solution: Min-Heap From Scratch & Top-K Frequent Elements Finder\nFormat: Coding (Python)\n\nProblem:\nHeaps & Priority Queues\n\"\"\"\n\n"
  },
  "39": {
    "chapter": 39,
    "chapterTitle": "Sorting",
    "projectTitle": "MergeSort, QuickSort (Lomuto/Hoare) & Count Inversions",
    "format": "Coding (Python)",
    "why": "Implement divide-and-conquer sorting algorithms from scratch.",
    "problemStatement": "",
    "checklist": [
      "Implement iterative or recursive MergeSort ($O(N \\log N)$ guaranteed).",
      "Implement QuickSort with randomized pivot selection.",
      "Modify MergeSort to count the number of inversions in an array in $O(N \\log N)$."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef merge_sort(arr: list[int]) -> list[int]:\r\n    if len(arr) <= 1:\r\n        return arr\r\n    mid = len(arr) // 2\r\n    left = merge_sort(arr[:mid])\r\n    right = merge_sort(arr[mid:])\r\n  \r\n    merged = []\r\n    i = j = 0\r\n    while i < len(left) and j < len(right):\r\n        if left[i] <= right[j]:\r\n            merged.append(left[i]); i += 1\r\n        else:\r\n            merged.append(right[j]); j += 1\r\n    merged.extend(left[i:])\r\n    merged.extend(right[j:])\r\n    return merged\r\n```",
    "starterCode": "\"\"\"\nChapter 39 Project Solution: MergeSort, QuickSort (Lomuto/Hoare) & Count Inversions\nFormat: Coding (Python)\n\nProblem:\nSorting\n\"\"\"\n\n"
  },
  "40": {
    "chapter": 40,
    "chapterTitle": "Searching",
    "projectTitle": "Advanced Binary Search Suite (Lower/Upper Bound, Rotated Array)",
    "format": "Coding (Python)",
    "why": "Master logarithmic search and binary search invariants on arrays.",
    "problemStatement": "",
    "checklist": [
      "Implement standard Binary Search ($O(\\log N)$).",
      "Implement `lower_bound` (first occurrence) and `upper_bound` (last occurrence).",
      "Find the minimum element in a rotated sorted array in $O(\\log N)$."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef search_rotated_sorted_array(nums: list[int], target: int) -> int:\r\n    left, right = 0, len(nums) - 1\r\n    while left <= right:\r\n        mid = (left + right) // 2\r\n        if nums[mid] == target:\r\n            return mid\r\n        # Left half is sorted\r\n        if nums[left] <= nums[mid]:\r\n            if nums[left] <= target < nums[mid]:\r\n                right = mid - 1\r\n            else:\r\n                left = mid + 1\r\n        # Right half is sorted\r\n        else:\r\n            if nums[mid] < target <= nums[right]:\r\n                left = mid + 1\r\n            else:\r\n                right = mid - 1\r\n    return -1\r\n```",
    "starterCode": "\"\"\"\nChapter 40 Project Solution: Advanced Binary Search Suite (Lower/Upper Bound, Rotated Array)\nFormat: Coding (Python)\n\nProblem:\nSearching\n\"\"\"\n\n"
  },
  "41": {
    "chapter": 41,
    "chapterTitle": "Graphs",
    "projectTitle": "Network Router: BFS, DFS, Topological Sort & Dijkstra's Algorithm",
    "format": "Coding (Python)",
    "why": "Model networks and solve traversal, shortest path, and topological dependency problems.",
    "problemStatement": "",
    "checklist": [
      "Represent graph with adjacency list.",
      "Implement BFS (shortest path in unweighted graph) and DFS (cycle detection).",
      "Implement Kahn's Algorithm for Topological Sorting (Task Dependency Resolver).",
      "Implement Dijkstra's Algorithm using a Priority Queue for weighted shortest paths."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nimport heapq\r\n\r\ndef dijkstra_shortest_path(graph: dict[str, dict[str, int]], start_node: str) -> dict[str, int]:\r\n    distances = {node: float('inf') for node in graph}\r\n    distances[start_node] = 0\r\n    priority_queue = [(0, start_node)]\r\n  \r\n    while priority_queue:\r\n        curr_dist, curr_node = heapq.heappop(priority_queue)\r\n        if curr_dist > distances[curr_node]:\r\n            continue\r\n          \r\n        for neighbor, weight in graph[curr_node].items():\r\n            distance = curr_dist + weight\r\n            if distance < distances[neighbor]:\r\n                distances[neighbor] = distance\r\n                heapq.heappush(priority_queue, (distance, neighbor))\r\n              \r\n    return distances\r\n```",
    "starterCode": "\"\"\"\nChapter 41 Project Solution: Network Router: BFS, DFS, Topological Sort & Dijkstra's Algorithm\nFormat: Coding (Python)\n\nProblem:\nGraphs\n\"\"\"\n\n"
  },
  "42": {
    "chapter": 42,
    "chapterTitle": "Algorithmic Patterns",
    "projectTitle": "Two Pointers, Sliding Window & Prefix Sum Challenge Suite",
    "format": "Coding (Python)",
    "why": "Train muscle memory on canonical LeetCode algorithmic patterns.",
    "problemStatement": "",
    "checklist": [
      "Solve \"Longest Substring Without Repeating Characters\" using Sliding Window ($O(N)$).",
      "Solve \"Container With Most Water\" using Two Pointers ($O(N)$).",
      "Solve \"Subarray Sum Equals K\" using Prefix Sum + Hash Map ($O(N)$)."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef min_window_substring(s: str, t: str) -> str:\r\n    if not t or not s: return \"\"\r\n    target_counts = {}\r\n    for c in t: target_counts[c] = target_counts.get(c, 0) + 1\r\n  \r\n    window_counts = {}\r\n    have, need = 0, len(target_counts)\r\n    res, res_len = [-1, -1], float('inf')\r\n    left = 0\r\n  \r\n    for right, c in enumerate(s):\r\n        window_counts[c] = window_counts.get(c, 0) + 1\r\n        if c in target_counts and window_counts[c] == target_counts[c]:\r\n            have += 1\r\n          \r\n        while have == need:\r\n            if (right - left + 1) < res_len:\r\n                res = [left, right]\r\n                res_len = right - left + 1\r\n            window_counts[s[left]] -= 1\r\n            if s[left] in target_counts and window_counts[s[left]] < target_counts[s[left]]:\r\n                have -= 1\r\n            left += 1\r\n          \r\n    l, r = res\r\n    return s[l:r+1] if res_len != float('inf') else \"\"\r\n```",
    "starterCode": "\"\"\"\nChapter 42 Project Solution: Two Pointers, Sliding Window & Prefix Sum Challenge Suite\nFormat: Coding (Python)\n\nProblem:\nAlgorithmic Patterns\n\"\"\"\n\n"
  },
  "43": {
    "chapter": 43,
    "chapterTitle": "Greedy Algorithms",
    "projectTitle": "Interval Scheduling & Huffman Coding File Compressor",
    "format": "Coding & Correctness Argument",
    "why": "Prove that a locally optimal choice produces a globally optimal solution before writing code.",
    "problemStatement": "",
    "checklist": [
      "Solve the \"Non-Overlapping Interval Scheduling\" problem greedily.",
      "Write a 1-paragraph proof of the Greedy-Choice Property.",
      "Implement Huffman Coding tree construction and text compression/decompression."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef interval_scheduling_max_events(intervals: list[list[int]]) -> int:\r\n    # Sort greedily by finish time\r\n    intervals.sort(key=lambda x: x[1])\r\n    count = 0\r\n    current_end = float('-inf')\r\n  \r\n    for start, end in intervals:\r\n        if start >= current_end:\r\n            count += 1\r\n            current_end = end\r\n    return count\r\n```",
    "starterCode": "\"\"\"\nChapter 43 Project Solution: Interval Scheduling & Huffman Coding File Compressor\nFormat: Coding & Correctness Argument\n\nProblem:\nGreedy Algorithms\n\"\"\"\n\n"
  },
  "44": {
    "chapter": 44,
    "chapterTitle": "Backtracking",
    "projectTitle": "N-Queens & Sudoku Constraint-Satisfaction Solver",
    "format": "Coding (Python)",
    "why": "Traverse and prune exponential decision search trees.",
    "problemStatement": "",
    "checklist": [
      "Implement $N$-Queens solver that generates all valid non-attacking board states.",
      "Implement a Sudoku Solver using recursive backtracking with state restoration.",
      "Measure and print the number of pruned branches vs explored branches."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef solve_sudoku_board(board: list[list[str]]) -> bool:\r\n    def is_valid(r, c, ch):\r\n        for i in range(9):\r\n            if board[r][i] == ch or board[i][c] == ch: return False\r\n            if board[3 * (r // 3) + i // 3][3 * (c // 3) + i % 3] == ch: return False\r\n        return True\r\n\r\n    for r in range(9):\r\n        for c in range(9):\r\n            if board[r][c] == '.':\r\n                for ch in \"123456789\":\r\n                    if is_valid(r, c, ch):\r\n                        board[r][c] = ch\r\n                        if solve_sudoku_board(board): return True\r\n                        board[r][c] = '.'\r\n                return False\r\n    return True\r\n```",
    "starterCode": "\"\"\"\nChapter 44 Project Solution: N-Queens & Sudoku Constraint-Satisfaction Solver\nFormat: Coding (Python)\n\nProblem:\nBacktracking\n\"\"\"\n\n"
  },
  "45": {
    "chapter": 45,
    "chapterTitle": "Dynamic Programming (DP)",
    "projectTitle": "0/1 Knapsack & Longest Common Subsequence (Memoized vs Tabulated)",
    "format": "Coding (Python)",
    "why": "Solve overlapping subproblems using both Top-Down Memoization and Bottom-Up Tabulation.",
    "problemStatement": "",
    "checklist": [
      "Solve 0/1 Knapsack recursively with memoization ($O(N \\times W)$).",
      "Solve 0/1 Knapsack using a 2D/1D bottom-up DP table.",
      "Solve Longest Common Subsequence (LCS) and reconstruct the optimal string."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef longest_common_subsequence(text1: str, text2: str) -> int:\r\n    m, n = len(text1), len(text2)\r\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\r\n  \r\n    for i in range(1, m + 1):\r\n        for j in range(1, n + 1):\r\n            if text1[i - 1] == text2[j - 1]:\r\n                dp[i][j] = 1 + dp[i - 1][j - 1]\r\n            else:\r\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\r\n              \r\n    return dp[m][n]\r\n```",
    "starterCode": "\"\"\"\nChapter 45 Project Solution: 0/1 Knapsack & Longest Common Subsequence (Memoized vs Tabulated)\nFormat: Coding (Python)\n\nProblem:\nDynamic Programming (DP)\n\"\"\"\n\n"
  },
  "46": {
    "chapter": 46,
    "chapterTitle": "Specialized Data Structures",
    "projectTitle": "Trie Autocomplete Engine & Union-Find with Path Compression",
    "format": "Coding (Python)",
    "why": "Build advanced structures used in search engines and network connectivity.",
    "problemStatement": "",
    "checklist": [
      "Implement a `Trie` with `insert`, `search`, and `starts_with` prefix search.",
      "Implement Disjoint-Set Union (`UnionFind`) with Path Compression and Rank Optimization.",
      "Solve Dynamic Graph Connectivity / Kruskal's Minimum Spanning Tree using Union-Find."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nclass DisjointSetUnion:\r\n    def __init__(self, n: int):\r\n        self.parent = list(range(n))\r\n        self.rank = [1] * n\r\n\r\n    def find(self, x: int) -> int:\r\n        if self.parent[x] != x:\r\n            self.parent[x] = self.find(self.parent[x])  # Path compression\r\n        return self.parent[x]\r\n\r\n    def union(self, x: int, y: int) -> bool:\r\n        root_x, root_y = self.find(x), self.find(y)\r\n        if root_x == root_y:\r\n            return False\r\n        if self.rank[root_x] < self.rank[root_y]:\r\n            root_x, root_y = root_y, root_x\r\n        self.parent[root_y] = root_x\r\n        if self.rank[root_x] == self.rank[root_y]:\r\n            self.rank[root_x] += 1\r\n        return True\r\n```",
    "starterCode": "\"\"\"\nChapter 46 Project Solution: Trie Autocomplete Engine & Union-Find with Path Compression\nFormat: Coding (Python)\n\nProblem:\nSpecialized Data Structures\n\"\"\"\n\n"
  },
  "47": {
    "chapter": 47,
    "chapterTitle": "Algorithm Correctness",
    "projectTitle": "Loop Invariant & Correctness Proof for Partition / Binary Search",
    "format": "Hand-Written / Mathematical Invariant Proof",
    "why": "Formally prove an algorithm will never fail on any input using loop invariants.",
    "problemStatement": "",
    "checklist": [
      "State the Initialization, Maintenance, and Termination conditions for Binary Search.",
      "Formally prove that the loop invariant holds at every iteration.",
      "Write an induction proof for QuickSort's correctness."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **Binary Search Invariant:** At the start of every iteration of `while left <= right`, if the target exists in `nums`, it must be located within the subarray `nums[left...right]`.\r\n  * *Initialization:* Prior to loop entry, `left = 0` and `right = len(nums) - 1`, covering the entire array.\r\n  * *Maintenance:* If `nums[mid] < target`, the sorted property guarantees no index $\\le mid$ can contain `target`. Setting `left = mid + 1` preserves the invariant.\r\n  * *Termination:* If `left > right`, the search range is empty, proving `target` is not present. $\\blacksquare$",
    "starterCode": ""
  },
  "48": {
    "chapter": 48,
    "chapterTitle": "DSA Consolidation",
    "projectTitle": "High-Performance Thread-Safe LRU Cache with TTL",
    "format": "Full Coding Capstone (Python)",
    "why": "Combine multiple data structures to build a production-grade system component.",
    "problemStatement": "",
    "checklist": [
      "Combine a Hash Map + Doubly Linked List for $O(1)$ `get` and `put`.",
      "Add Time-To-Live (TTL) expiration per key.",
      "Stress-test under 100,000 randomized operations and verify eviction ordering."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nclass LRUCacheNode:\r\n    def __init__(self, key: int, value: int):\r\n        self.key = key\r\n        self.value = value\r\n        self.prev = None\r\n        self.next = None\r\n\r\nclass LRUCache:\r\n    def __init__(self, capacity: int):\r\n        self.capacity = capacity\r\n        self.map = {}\r\n        self.head = LRUCacheNode(0, 0)\r\n        self.tail = LRUCacheNode(0, 0)\r\n        self.head.next = self.tail\r\n        self.tail.prev = self.head\r\n\r\n    def _remove(self, node: LRUCacheNode):\r\n        node.prev.next = node.next\r\n        node.next.prev = node.prev\r\n\r\n    def _add_to_front(self, node: LRUCacheNode):\r\n        node.next = self.head.next\r\n        node.prev = self.head\r\n        self.head.next.prev = node\r\n        self.head.next = node\r\n\r\n    def get(self, key: int) -> int:\r\n        if key in self.map:\r\n            node = self.map[key]\r\n            self._remove(node)\r\n            self._add_to_front(node)\r\n            return node.value\r\n        return -1\r\n\r\n    def put(self, key: int, value: int):\r\n        if key in self.map:\r\n            self._remove(self.map[key])\r\n        new_node = LRUCacheNode(key, value)\r\n        self._add_to_front(new_node)\r\n        self.map[key] = new_node\r\n        if len(self.map) > self.capacity:\r\n            lru_node = self.tail.prev\r\n            self._remove(lru_node)\r\n            del self.map[lru_node.key]\r\n```\r\n\r\n---\r\n\r\n# Unit VI — Inside the Computer (Chapters 49–54)",
    "starterCode": "\"\"\"\nChapter 48 Project Solution: High-Performance Thread-Safe LRU Cache with TTL\nFormat: Full Coding Capstone (Python)\n\nProblem:\nDSA Consolidation\n\"\"\"\n\n"
  },
  "49": {
    "chapter": 49,
    "chapterTitle": "Computer Architecture",
    "projectTitle": "5-Stage RISC Pipeline Hazard Simulator",
    "format": "Hand-Written / Architectural Simulation",
    "why": "Trace instruction pipelining, hazards, and branch prediction on paper.",
    "problemStatement": "",
    "checklist": [
      "Trace 5 assembly instructions through IF, ID, EX, MEM, WB stages.",
      "Identify a Data Hazard (Read-After-Write) and insert NOPs / Forwarding paths.",
      "Explain branch misprediction penalty in 2 sentences."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Data hazard resolution: When instruction $I_2$ reads a register written by $I_1$, hardware **Data Forwarding** routes the ALU output from the $EX/MEM$ stage directly to the $ALU$ input of $I_2$, preventing stalls.",
    "starterCode": ""
  },
  "50": {
    "chapter": 50,
    "chapterTitle": "Memory & Program Representation",
    "projectTitle": "Virtual Address Translation & Page Table Walker",
    "format": "Hand-Written & C/Python Memory Inspection",
    "why": "Understand virtual memory, page tables, page faults, and pointers.",
    "problemStatement": "",
    "checklist": [
      "Given a 32-bit virtual address and a 4KB page size, extract the Virtual Page Number (VPN) and Offset.",
      "Trace address lookup through a 2-level Page Table diagram.",
      "Explain what triggers a Page Fault and the exact steps the OS takes to resolve it."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* 32-bit Virtual Address with 4KB Pages ($2^{12}$ bytes):\r\n  * Virtual Page Number (VPN) = Top 20 bits. Offset = Bottom 12 bits.\r\n  * Translation Lookaside Buffer (TLB) speeds up page lookup from 100ns to $<1$ns.",
    "starterCode": "\"\"\"\nChapter 50 Project Solution: Virtual Address Translation & Page Table Walker\nFormat: Hand-Written & C/Python Memory Inspection\n\nProblem:\nMemory & Program Representation\n\"\"\"\n\n"
  },
  "51": {
    "chapter": 51,
    "chapterTitle": "Programming Language Foundations",
    "projectTitle": "Mini-Lisp / Arithmetic AST Interpreter",
    "format": "Coding (Python)",
    "why": "Build a miniature language interpreter with Lexer, Parser, and AST evaluator.",
    "problemStatement": "",
    "checklist": [
      "Tokenize input strings (e.g., `(+ 5 (* 2 3))`).",
      "Parse tokens into an Abstract Syntax Tree (AST).",
      "Evaluate the AST recursively to compute the final result."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef evaluate_expression_ast(node: dict | int | float):\r\n    if isinstance(node, (int, float)):\r\n        return node\r\n    op = node[\"op\"]\r\n    left = evaluate_expression_ast(node[\"left\"])\r\n    right = evaluate_expression_ast(node[\"right\"])\r\n    if op == \"+\": return left + right\r\n    if op == \"-\": return left - right\r\n    if op == \"*\": return left * right\r\n    if op == \"/\": return left / right\r\n    raise ValueError(f\"Unknown operator: {op}\")\r\n```",
    "starterCode": "\"\"\"\nChapter 51 Project Solution: Mini-Lisp / Arithmetic AST Interpreter\nFormat: Coding (Python)\n\nProblem:\nProgramming Language Foundations\n\"\"\"\n\n"
  },
  "52": {
    "chapter": 52,
    "chapterTitle": "Operating Systems",
    "projectTitle": "Process Monitor & Inode Filesystem Explorer",
    "format": "Tooling & Python OS Scripting",
    "why": "Inspect OS processes, file descriptors, inodes, and signals.",
    "problemStatement": "",
    "checklist": [
      "Inspect process metadata using Python's `os` and `psutil` (PID, memory, open file descriptors).",
      "Spawn child processes, handle signals (`SIGINT`, `SIGTERM`), and prevent zombie processes.",
      "Explain the relationship between file path, directory inode, and disk data blocks."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* A Process possesses an isolated memory space, file descriptor table, and PID. A Thread is an execution unit inside a process sharing its heap and open descriptors.",
    "starterCode": "\"\"\"\nChapter 52 Project Solution: Process Monitor & Inode Filesystem Explorer\nFormat: Tooling & Python OS Scripting\n\nProblem:\nOperating Systems\n\"\"\"\n\n"
  },
  "53": {
    "chapter": 53,
    "chapterTitle": "Concurrency & Parallelism",
    "projectTitle": "Race Condition Reproducer & Thread-Safe Bank System",
    "format": "Coding (Python `threading` & `multiprocessing`)",
    "why": "Reproduce race conditions, deadlocks, and resolve them with locks and semaphores.",
    "problemStatement": "",
    "checklist": [
      "Create a script where 10 threads concurrently deposit to a shared balance, demonstrating race conditions.",
      "Fix the race condition using `threading.Lock`.",
      "Create a deliberate 2-lock deadlock scenario and document how to prevent it with lock ordering."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nimport threading\r\n\r\nshared_counter = 0\r\nmutex_lock = threading.Lock()\r\n\r\ndef safe_increment():\r\n    global shared_counter\r\n    for _ in range(100000):\r\n        with mutex_lock:\r\n            shared_counter += 1\r\n```",
    "starterCode": "\"\"\"\nChapter 53 Project Solution: Race Condition Reproducer & Thread-Safe Bank System\nFormat: Coding (Python `threading` & `multiprocessing`)\n\nProblem:\nConcurrency & Parallelism\n\"\"\"\n\n"
  },
  "54": {
    "chapter": 54,
    "chapterTitle": "Systems Programming",
    "projectTitle": "Zero-Copy File Server via Raw Sockets & Syscalls",
    "format": "Coding (Python / C / Low-Level Sockets & Syscalls)",
    "why": "Interact directly with OS system calls and low-level I/O streams.",
    "problemStatement": "",
    "checklist": [
      "Open, read, and write files using raw OS file descriptors (`os.open`, `os.read`, `os.write`).",
      "Stream binary files over raw TCP sockets without high-level web frameworks.",
      "Implement non-blocking I/O polling with `selectors` or `epoll`."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nimport os\r\nimport socket\r\nimport select\r\n\r\ndef run_nonblocking_echo_server():\r\n    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\r\n    server.setblocking(False)\r\n    server.bind(('127.0.0.1', 8888))\r\n    server.listen(5)\r\n    inputs = [server]\r\n  \r\n    while True:\r\n        readable, _, _ = select.select(inputs, [], [], 1.0)\r\n        for s in readable:\r\n            if s is server:\r\n                conn, addr = s.accept()\r\n                conn.setblocking(False)\r\n                inputs.append(conn)\r\n            else:\r\n                data = s.recv(1024)\r\n                if data:\r\n                    s.sendall(data)\r\n                else:\r\n                    inputs.remove(s)\r\n                    s.close()\r\n        break\r\n```\r\n\r\n---\r\n\r\n# Unit VII — Connecting Computers (Chapters 55–59)",
    "starterCode": "\"\"\"\nChapter 54 Project Solution: Zero-Copy File Server via Raw Sockets & Syscalls\nFormat: Coding (Python / C / Low-Level Sockets & Syscalls)\n\nProblem:\nSystems Programming\n\"\"\"\n\n"
  },
  "55": {
    "chapter": 55,
    "chapterTitle": "Networking Foundations",
    "projectTitle": "5-Layer Packet Encapsulation Diagram & Trace Analysis",
    "format": "Hand-Written / Packet Trace Diagram & Wireshark Analysis",
    "why": "Trace packet headers across all 5 layers of the TCP/IP stack.",
    "problemStatement": "",
    "checklist": [
      "Diagram an HTTP GET request encapsulated through Application, Transport (TCP), Network (IP), Data Link (Ethernet), and Physical layers.",
      "Annotate source/destination MAC addresses, IP addresses, and Port numbers.",
      "Identify packet fragmentation when payload exceeds MTU (1500 bytes)."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Packet Encapsulation: Application Data (HTTP) $\\to$ Transport Header (TCP Port) $\\to$ Network Header (IP Address) $\\to$ Data Link Frame (Ethernet MAC Address).",
    "starterCode": ""
  },
  "56": {
    "chapter": 56,
    "chapterTitle": "TCP, UDP & Sockets",
    "projectTitle": "Reliable TCP Chat Server & Fast UDP Heartbeat Ping",
    "format": "Coding (Python `socket`)",
    "why": "Build network communication protocols from scratch.",
    "problemStatement": "",
    "checklist": [
      "Build a multi-client TCP broadcast chat server using non-blocking socket selectors.",
      "Hand-trace the TCP 3-Way Handshake (`SYN`, `SYN-ACK`, `ACK`) and 4-Way Teardown (`FIN`).",
      "Build a UDP latency ping tool measuring packet loss and round-trip time."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* TCP 3-Way Handshake: Client sends `SYN` (seq=x) $\\to$ Server replies `SYN-ACK` (seq=y, ack=x+1) $\\to$ Client sends `ACK` (seq=x+1, ack=y+1).",
    "starterCode": "\"\"\"\nChapter 56 Project Solution: Reliable TCP Chat Server & Fast UDP Heartbeat Ping\nFormat: Coding (Python `socket`)\n\nProblem:\nTCP, UDP & Sockets\n\"\"\"\n\n"
  },
  "57": {
    "chapter": 57,
    "chapterTitle": "DNS & The Internet",
    "projectTitle": "Raw UDP DNS Query Tool & Resolver",
    "format": "Coding (Python)",
    "why": "Build a raw DNS query tool that speaks the binary DNS wire protocol.",
    "problemStatement": "",
    "checklist": [
      "Construct raw DNS query binary packet for domain `example.com` (Type A).",
      "Send query via UDP socket to `8.8.8.8:53`.",
      "Parse the DNS response header and answer section to extract the IP address."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nimport socket\r\n\r\ndef resolve_domain_name(domain: str) -> str:\r\n    return socket.gethostbyname(domain)\r\n```",
    "starterCode": "\"\"\"\nChapter 57 Project Solution: Raw UDP DNS Query Tool & Resolver\nFormat: Coding (Python)\n\nProblem:\nDNS & The Internet\n\"\"\"\n\n"
  },
  "58": {
    "chapter": 58,
    "chapterTitle": "HTTP",
    "projectTitle": "Custom HTTP/1.1 Static Web Server from Scratch",
    "format": "Coding (Python)",
    "why": "Build an HTTP/1.1 compliant web server from raw sockets without Flask/FastAPI.",
    "problemStatement": "",
    "checklist": [
      "Parse raw HTTP request strings (Method, Path, Headers, Body).",
      "Serve static files (`index.html`, images) with correct `Content-Type` and `Content-Length`.",
      "Return proper HTTP status codes (`200 OK`, `400 Bad Request`, `404 Not Found`)."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nimport socket\r\n\r\ndef run_http_server():\r\n    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\r\n    sock.bind(('127.0.0.1', 8080))\r\n    sock.listen(1)\r\n  \r\n    while True:\r\n        client, _ = sock.accept()\r\n        raw_request = client.recv(1024).decode('utf-8')\r\n        body = \"<html><body><h1>Hello from Scratch!</h1></body></html>\"\r\n        response = (\r\n            \"HTTP/1.1 200 OK\\r\\n\"\r\n            \"Content-Type: text/html\\r\\n\"\r\n            f\"Content-Length: {len(body)}\\r\\n\"\r\n            \"Connection: close\\r\\n\\r\\n\" + body\r\n        )\r\n        client.sendall(response.encode('utf-8'))\r\n        client.close()\r\n        break\r\n```",
    "starterCode": "\"\"\"\nChapter 58 Project Solution: Custom HTTP/1.1 Static Web Server from Scratch\nFormat: Coding (Python)\n\nProblem:\nHTTP\n\"\"\"\n\n"
  },
  "59": {
    "chapter": 59,
    "chapterTitle": "API Design",
    "projectTitle": "Production RESTful E-Commerce Catalog API",
    "format": "Written Spec & Coding (FastAPI / Flask)",
    "why": "Design a clean RESTful API contract before implementing it.",
    "problemStatement": "",
    "checklist": [
      "Write OpenAPI / Swagger specification with proper REST resources and HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`).",
      "Implement pagination (`limit`, `offset`), filtering, and sorting.",
      "Implement standardized JSON error envelopes and status codes (`201 Created`, `422 Unprocessable Entity`)."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nfrom fastapi import FastAPI, HTTPException\r\nfrom pydantic import BaseModel\r\n\r\napp = FastAPI(title=\"E-Commerce Catalog API\")\r\n\r\nclass Item(BaseModel):\r\n    title: str\r\n    price: float\r\n\r\n@app.post(\"/items\", status_code=201)\r\ndef add_item(item: Item):\r\n    return {\"id\": 101, \"title\": item.title, \"price\": item.price}\r\n```\r\n\r\n---\r\n\r\n# Unit VIII — Data That Survives (Chapters 60–65)",
    "starterCode": "\"\"\"\nChapter 59 Project Solution: Production RESTful E-Commerce Catalog API\nFormat: Written Spec & Coding (FastAPI / Flask)\n\nProblem:\nAPI Design\n\"\"\"\n\n"
  },
  "60": {
    "chapter": 60,
    "chapterTitle": "Database Foundations",
    "projectTitle": "Flat-File Concurrent Corrupter vs SQLite Benchmark",
    "format": "Coding (Python)",
    "why": "Compare file-based storage corruption against relational database durability.",
    "problemStatement": "",
    "checklist": [
      "Simulate 50 concurrent workers writing to a raw JSON file, demonstrating file corruption and lost updates.",
      "Implement the same workflow in SQLite with atomic transactions, demonstrating 100% data integrity."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Flat files lack atomicity and concurrency control, causing partial writes and data corruption during power loss or multi-process access.",
    "starterCode": "\"\"\"\nChapter 60 Project Solution: Flat-File Concurrent Corrupter vs SQLite Benchmark\nFormat: Coding (Python)\n\nProblem:\nDatabase Foundations\n\"\"\"\n\n"
  },
  "61": {
    "chapter": 61,
    "chapterTitle": "SQL (Structured Query Language)",
    "projectTitle": "E-Commerce Analytics SQL Query Suite",
    "format": "Coding (SQL queries)",
    "why": "Write production-grade queries with joins, aggregations, subqueries, and CTEs.",
    "problemStatement": "",
    "checklist": [
      "Write multi-table `INNER`, `LEFT`, and `FULL OUTER JOIN` queries.",
      "Write analytical queries using `GROUP BY`, `HAVING`, and aggregate functions (`COUNT`, `SUM`, `AVG`).",
      "Use Common Table Expressions (CTEs) and Window Functions (`ROW_NUMBER()`, `RANK()`) to find top 3 spenders per region."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```sql\r\nSELECT c.name, COUNT(o.id) as order_count, SUM(o.total_amount) as lifetime_spend\r\nFROM customers c\r\nINNER JOIN orders o ON c.id = o.customer_id\r\nWHERE o.created_at >= '2026-01-01'\r\nGROUP BY c.id, c.name\r\nHAVING SUM(o.total_amount) > 1000.00\r\nORDER BY lifetime_spend DESC;\r\n```",
    "starterCode": "\"\"\"\nChapter 61 Project Solution: E-Commerce Analytics SQL Query Suite\nFormat: Coding (SQL queries)\n\nProblem:\nSQL (Structured Query Language)\n\"\"\"\n\n"
  },
  "62": {
    "chapter": 62,
    "chapterTitle": "Data Modeling",
    "projectTitle": "Hospital Management Relational Schema (1NF to 3NF)",
    "format": "Written Schema Design & Normalization",
    "why": "Design normalized relational database schemas and defend denormalization trade-offs.",
    "problemStatement": "",
    "checklist": [
      "Take an unnormalized flat table and normalize it through 1NF, 2NF, and 3NF.",
      "Define primary keys, foreign keys, and referential integrity constraints.",
      "Identify one specific read-heavy reporting query and justify a controlled denormalization."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* 1NF: Atomic values, unique rows.\r\n* 2NF: No partial dependencies on composite primary keys.\r\n* 3NF: No transitive dependencies ($X \\to Y \\to Z$).",
    "starterCode": ""
  },
  "63": {
    "chapter": 63,
    "chapterTitle": "Database Internals (Indexes & B-Trees)",
    "projectTitle": "B-Tree Index Deep Dive & `EXPLAIN QUERY PLAN` Profiler",
    "format": "Hand-Written / Diagram & SQL Profiling",
    "why": "Understand B-Tree indexing, index scans vs table scans, and write amplification.",
    "problemStatement": "",
    "checklist": [
      "Draw a 3-level B+ Tree showing internal search keys and leaf linked-list pointers.",
      "Run `EXPLAIN QUERY PLAN` on a 1,000,000-row table before and after creating a composite index.",
      "Explain why indexing improves read performance while degrading write/insert performance."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* B+ Tree leaf nodes contain a linked list of data pointers, allowing range scans in $O(\\log N + K)$ operations.",
    "starterCode": "\"\"\"\nChapter 63 Project Solution: B-Tree Index Deep Dive & `EXPLAIN QUERY PLAN` Profiler\nFormat: Hand-Written / Diagram & SQL Profiling\n\nProblem:\nDatabase Internals (Indexes & B-Trees)\n\"\"\"\n\n"
  },
  "64": {
    "chapter": 64,
    "chapterTitle": "Transactions & Concurrency (ACID)",
    "projectTitle": "ACID Isolation Anomaly Reproducer",
    "format": "Coding & SQL Concurrency Testing",
    "why": "Reproduce concurrency anomalies across isolation levels (Read Committed, Repeatable Read, Serializable).",
    "problemStatement": "",
    "checklist": [
      "Set up two concurrent database sessions.",
      "Reproduce a Dirty Read (Read Uncommitted).",
      "Reproduce a Non-Repeatable Read and a Phantom Read.",
      "Demonstrate how Serializable isolation or Optimistic Locking prevents race conditions."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Isolation Levels: Read Uncommitted (Dirty Reads possible) $\\to$ Read Committed $\\to$ Repeatable Read $\\to$ Serializable.",
    "starterCode": "\"\"\"\nChapter 64 Project Solution: ACID Isolation Anomaly Reproducer\nFormat: Coding & SQL Concurrency Testing\n\nProblem:\nTransactions & Concurrency (ACID)\n\"\"\"\n\n"
  },
  "65": {
    "chapter": 65,
    "chapterTitle": "Operating & Scaling Databases",
    "projectTitle": "Global Multi-Region Database Sharding Strategy",
    "format": "Written Architecture & Sharding Design",
    "why": "Design read replicas, partitioning, and horizontal sharding strategies.",
    "problemStatement": "",
    "checklist": [
      "Contrast Master-Replica Replication vs Partitioning vs Horizontal Sharding.",
      "Design a Sharding Key strategy for a multi-tenant SaaS application (e.g., hash-based vs range-based).",
      "Explain how to handle cross-shard queries and re-sharding when nodes fill up."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Consistent Hashing maps database nodes and partition keys across a circular $2^{32}$ hash ring to minimize cache/data migration upon cluster scaling.\r\n\r\n---\r\n\r\n# Unit IX — Security & Human-Centered Software (Chapters 66–71)",
    "starterCode": ""
  },
  "66": {
    "chapter": 66,
    "chapterTitle": "Security Foundations",
    "projectTitle": "STRIDE Threat Model for Telemedicine Health App",
    "format": "Written Threat Model & Diagram",
    "why": "Identify trust boundaries, threat actors, and attack surfaces using the STRIDE model.",
    "problemStatement": "",
    "checklist": [
      "Draw a Data Flow Diagram (DFD) showing user browser, API gateway, database, and 3rd-party payment gateway.",
      "Identify trust boundaries.",
      "Document 1 threat for each STRIDE category (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) with mitigations."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* STRIDE Framework: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.",
    "starterCode": ""
  },
  "67": {
    "chapter": 67,
    "chapterTitle": "Cryptography for Developers",
    "projectTitle": "Secure Vault: Argon2id Hashing, AES-256-GCM & HMAC Verification",
    "format": "Coding (Python `cryptography` / `hashlib`)",
    "why": "Implement password hashing, symmetric encryption, and digital signatures correctly.",
    "problemStatement": "",
    "checklist": [
      "Hash passwords using `Argon2id` or `bcrypt` with unique salts.",
      "Encrypt/decrypt sensitive payload files using AES-256-GCM authenticated symmetric encryption.",
      "Generate and verify digital signatures using RSA / Ed25519 keypairs."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM\r\nimport os\r\n\r\nkey = AESGCM.generate_key(bit_length=256)\r\naesgcm = AESGCM(key)\r\nnonce = os.urandom(12)\r\ncipher_bytes = aesgcm.encrypt(nonce, b\"Confidential Medical Record\", None)\r\nrecovered_bytes = aesgcm.decrypt(nonce, cipher_bytes, None)\r\n```",
    "starterCode": "\"\"\"\nChapter 67 Project Solution: Secure Vault: Argon2id Hashing, AES-256-GCM & HMAC Verification\nFormat: Coding (Python `cryptography` / `hashlib`)\n\nProblem:\nCryptography for Developers\n\"\"\"\n\n"
  },
  "68": {
    "chapter": 68,
    "chapterTitle": "Authentication & Authorization",
    "projectTitle": "Stateless JWT Auth Service with RBAC Middleware",
    "format": "Coding (Python / JWT)",
    "why": "Implement stateless JWT authentication, refresh tokens, and Role-Based Access Control (RBAC).",
    "problemStatement": "",
    "checklist": [
      "Build user registration/login generating signed JWT access and refresh tokens.",
      "Implement an authorization decorator/middleware enforcing roles (`Admin`, `Editor`, `Viewer`).",
      "Handle token expiration and blacklisting on logout."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nimport jwt\r\nimport datetime\r\n\r\nSECRET_KEY = \"enterprise-secret-key\"\r\npayload = {\"sub\": \"user_456\", \"role\": \"ADMIN\", \"exp\": datetime.datetime.utcnow() + datetime.timedelta(hours=2)}\r\nauth_token = jwt.encode(payload, SECRET_KEY, algorithm=\"HS256\")\r\nverified_payload = jwt.decode(auth_token, SECRET_KEY, algorithms=[\"HS256\"])\r\n```",
    "starterCode": "\"\"\"\nChapter 68 Project Solution: Stateless JWT Auth Service with RBAC Middleware\nFormat: Coding (Python / JWT)\n\nProblem:\nAuthentication & Authorization\n\"\"\"\n\n"
  },
  "69": {
    "chapter": 69,
    "chapterTitle": "Application Security (AppSec)",
    "projectTitle": "Vulnerable Web App Exploitation & Hardening Suite",
    "format": "Coding & Security Patching",
    "why": "Exploit and patch OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR).",
    "problemStatement": "",
    "checklist": [
      "Fix a vulnerable raw SQL concatenation with parameterized prepared statements.",
      "Sanitize user input to prevent Stored XSS.",
      "Implement token bucket / sliding window IP rate limiting."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Defend against SQL Injection using parameterized prepared statements. Defend against XSS using output HTML escaping and strict Content Security Policies (CSP).",
    "starterCode": "\"\"\"\nChapter 69 Project Solution: Vulnerable Web App Exploitation & Hardening Suite\nFormat: Coding & Security Patching\n\nProblem:\nApplication Security (AppSec)\n\"\"\"\n\n"
  },
  "70": {
    "chapter": 70,
    "chapterTitle": "Human-Computer Interaction (HCI)",
    "projectTitle": "SaaS Dashboard Usability Audit & Wireframe Redesign",
    "format": "Written Heuristic Evaluation & Redesign",
    "why": "Evaluate software usability using Nielsen's 10 Usability Heuristics.",
    "problemStatement": "",
    "checklist": [
      "Audit a confusing existing interface against Nielsen's Heuristics.",
      "Identify 3 major usability violations (e.g., lack of error prevention, poor visibility of system status).",
      "Sketch a clean, intuitive wireframe redesign addressing every violation."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Apply Nielsen's Usability Heuristics: Visibility of system status, Match between system and real world, User control and freedom, Consistency and standards, Error prevention.",
    "starterCode": ""
  },
  "71": {
    "chapter": 71,
    "chapterTitle": "Graphics & Interactive Computing",
    "projectTitle": "Interactive 2D Physics & Particle Engine",
    "format": "Coding (HTML5 Canvas / Pygame)",
    "why": "Build a 60 FPS rendering pipeline, event loop, and collision detection.",
    "problemStatement": "",
    "checklist": [
      "Implement a 60 FPS game loop with delta-time calculation (`dt`).",
      "Handle keyboard and mouse input events.",
      "Render 1,000 moving particles with bounding-box collision detection and gravity simulation."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```javascript\r\n// 60 FPS Canvas Game Loop\r\nlet lastTimestamp = performance.now();\r\nfunction renderLoop(currentTimestamp) {\r\n    let deltaTime = (currentTimestamp - lastTimestamp) / 1000.0;\r\n    lastTimestamp = currentTimestamp;\r\n    updateSimulation(deltaTime);\r\n    drawScene();\r\n    requestAnimationFrame(renderLoop);\r\n}\r\n```\r\n\r\n---\r\n\r\n# Unit X — Professional Software Engineering (Chapters 72–80)",
    "starterCode": "\"\"\"\nChapter 71 Project Solution: Interactive 2D Physics & Particle Engine\nFormat: Coding (HTML5 Canvas / Pygame)\n\nProblem:\nGraphics & Interactive Computing\n\"\"\"\n\n"
  },
  "72": {
    "chapter": 72,
    "chapterTitle": "Git & Collaboration",
    "projectTitle": "Git Merge Conflict Resolution & Feature-Branch Flow",
    "format": "Tooling / Git CLI Workflow",
    "why": "Master branching, rebasing, pull requests, and resolving merge conflicts.",
    "problemStatement": "",
    "checklist": [
      "Create a repository, develop on feature branch `feature/auth`.",
      "Simulate a merge conflict on `main`, resolve the conflict manually, and verify git commit history.",
      "Perform an interactive rebase (`git rebase -i`) to squash messy WIP commits."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Interactive Rebase: `git rebase -i HEAD~3` allows squashing intermediate checkpoint commits into clean semantic commits before merge.",
    "starterCode": ""
  },
  "73": {
    "chapter": 73,
    "chapterTitle": "Requirements Engineering",
    "projectTitle": "Product Requirements Document (PRD) for Real-Time File Sync",
    "format": "Written Engineering Specification",
    "why": "Translate ambiguous product ideas into unambiguous technical specifications.",
    "problemStatement": "",
    "checklist": [
      "Write functional and non-functional requirements (throughput, latency, availability).",
      "Define clear in-scope features and explicit out-of-scope non-goals.",
      "Write unambiguous Acceptance Criteria using Gherkin syntax (`Given... When... Then...`)."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "```gherkin\r\nFeature: Order Checkout\r\n  Scenario: Payment processed successfully\r\n    Given an authenticated user with items in cart\r\n    When the user submits valid credit card details\r\n    Then the order status becomes \"CONFIRMED\"\r\n    And a receipt email is dispatched to the user\r\n```",
    "starterCode": ""
  },
  "74": {
    "chapter": 74,
    "chapterTitle": "Testing",
    "projectTitle": "Automated Test Suite with Fixtures, Mocks & Mutation Testing",
    "format": "Coding (Python `pytest`)",
    "why": "Build a comprehensive Test Pyramid (Unit, Integration, Mocks).",
    "problemStatement": "",
    "checklist": [
      "Write isolated unit tests with `pytest` for core domain logic.",
      "Use `unittest.mock` to mock external API calls and database connections.",
      "Measure test coverage and achieve $\\ge 90\\%$ branch coverage."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nimport pytest\r\n\r\ndef test_shopping_cart_subtotal_calculation():\r\n    items = [{\"price\": 10.0, \"qty\": 2}, {\"price\": 5.0, \"qty\": 1}]\r\n    assert sum(i[\"price\"] * i[\"qty\"] for i in items) == 25.0\r\n```",
    "starterCode": "\"\"\"\nChapter 74 Project Solution: Automated Test Suite with Fixtures, Mocks & Mutation Testing\nFormat: Coding (Python `pytest`)\n\nProblem:\nTesting\n\"\"\"\n\n"
  },
  "75": {
    "chapter": 75,
    "chapterTitle": "Software Architecture",
    "projectTitle": "Clean Architecture Order Processing Service",
    "format": "Coding & Architecture Design",
    "why": "Decouple business logic from external frameworks using Clean / Hexagonal Architecture.",
    "problemStatement": "",
    "checklist": [
      "Separate code into Domain Entities, Use Cases, Repositories, and Delivery/Controllers.",
      "Ensure Domain logic contains zero dependencies on external frameworks or databases.",
      "Swap the database repository from in-memory to SQLite without modifying domain code."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Decouple core domain logic from framework controllers and database drivers using abstract interfaces (Ports and Adapters).",
    "starterCode": "\"\"\"\nChapter 75 Project Solution: Clean Architecture Order Processing Service\nFormat: Coding & Architecture Design\n\nProblem:\nSoftware Architecture\n\"\"\"\n\n"
  },
  "76": {
    "chapter": 76,
    "chapterTitle": "Development Process",
    "projectTitle": "Engineering Team Delivery Playbook & Incident Post-Mortem",
    "format": "Written Team Playbook",
    "why": "Design high-velocity, reliable software delivery workflows.",
    "problemStatement": "",
    "checklist": [
      "Define the team's Definition of Ready (DoR) and Definition of Done (DoD).",
      "Design a Pull Request code review checklist.",
      "Write a Blameless Post-Mortem for a simulated production outage."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Definition of Ready (DoR): Requirements specified, UX wireframes completed, acceptance criteria defined.\r\n* Definition of Done (DoD): Code peer-reviewed, test coverage $\\ge 85\\%$, CI pipeline green, deployed to staging.",
    "starterCode": ""
  },
  "77": {
    "chapter": 77,
    "chapterTitle": "CI/CD (Continuous Integration & Delivery)",
    "projectTitle": "Automated GitHub Actions CI/CD Pipeline",
    "format": "Tooling / GitHub Actions YAML",
    "why": "Automate linting, testing, and container deployment pipelines.",
    "problemStatement": "",
    "checklist": [
      "Write a `.github/workflows/ci.yml` pipeline.",
      "Run linters (`ruff`/`flake8`), typecheckers (`mypy`), and test suites on every PR.",
      "Automatically build and publish a container image only on passing `main` merges."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "```yaml\r\nname: Continuous Integration\r\non: [push, pull_request]\r\njobs:\r\n  build_and_test:\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v3\r\n      - uses: actions/setup-python@v4\r\n        with: { python-version: '3.11' }\r\n      - run: pip install -r requirements.txt\r\n      - run: pytest --maxfail=1 --disable-warnings\r\n```",
    "starterCode": ""
  },
  "78": {
    "chapter": 78,
    "chapterTitle": "Containers & Deployment",
    "projectTitle": "Multi-Stage Dockerfile & Multi-Container Docker Compose Stack",
    "format": "Tooling / Docker & Docker Compose",
    "why": "Package applications into reproducible, lightweight containers.",
    "problemStatement": "",
    "checklist": [
      "Write an optimized multi-stage `Dockerfile` minimizing image size.",
      "Create `docker-compose.yml` linking the API service, PostgreSQL database, and Redis cache.",
      "Verify data persistence using Docker named volumes."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "```dockerfile\r\nFROM python:3.11-slim\r\nWORKDIR /app\r\nCOPY requirements.txt .\r\nRUN pip install --no-cache-dir -r requirements.txt\r\nCOPY . .\r\nEXPOSE 8000\r\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]\r\n```",
    "starterCode": ""
  },
  "79": {
    "chapter": 79,
    "chapterTitle": "Cloud Fundamentals",
    "projectTitle": "High-Availability Cloud Architecture Blueprint (AWS/GCP)",
    "format": "Written Cloud Architecture & Cost Model",
    "why": "Model cloud infrastructure across compute, storage, and networking.",
    "problemStatement": "",
    "checklist": [
      "Design a multi-AZ architecture with VPC, public/private subnets, and NAT Gateways.",
      "Choose between IaaS (EC2/Compute Engine), PaaS (App Engine), and Serverless (Lambda).",
      "Estimate monthly infrastructure cost under 100,000 monthly active users."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Multi-AZ Architecture: Application Load Balancer in public subnets distributing traffic across auto-scaled compute instances in private subnets with a Multi-AZ managed database.",
    "starterCode": ""
  },
  "80": {
    "chapter": 80,
    "chapterTitle": "Observability & Production Debugging",
    "projectTitle": "Production Observability Suite with Metrics & Traces",
    "format": "Coding (Python / Prometheus / OpenTelemetry)",
    "why": "Instrument systems with the 3 pillars of observability: Logs, Metrics, and Traces.",
    "problemStatement": "",
    "checklist": [
      "Output structured JSON logs containing `trace_id` and request context.",
      "Expose Prometheus metrics (Request Count, Latency Histogram, Error Rate).",
      "Instrument OpenTelemetry distributed tracing across two communicating microservices."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* The 3 Pillars:\r\n  1. *Metrics:* Numeric telemetry aggregated over time (CPU usage, p99 latency).\r\n  2. *Logs:* Timestamped structured event records.\r\n  3. *Traces:* End-to-end request journeys across distributed microservices.\r\n\r\n---\r\n\r\n# Unit XI — System Design & Distributed Systems (Chapters 81–88)",
    "starterCode": "\"\"\"\nChapter 80 Project Solution: Production Observability Suite with Metrics & Traces\nFormat: Coding (Python / Prometheus / OpenTelemetry)\n\nProblem:\nObservability & Production Debugging\n\"\"\"\n\n"
  },
  "81": {
    "chapter": 81,
    "chapterTitle": "System Design Foundations",
    "projectTitle": "URL Shortener (Bitly) Back-of-the-Envelope Capacity Model",
    "format": "Written Capacity Estimation & Design",
    "why": "Practice back-of-the-envelope calculations and traffic sizing.",
    "problemStatement": "",
    "checklist": [
      "Estimate Read/Write QPS (Queries Per Second), Storage capacity for 5 years, and Network Bandwidth.",
      "Choose hash algorithm (Base62 vs MD5 truncation).",
      "Draw high-level architecture diagram."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* For a system handling 500 million Daily Active Users (DAU) generating 2 reads/sec each:\r\n  $$\r\n  \\text{Read QPS} = \\frac{500,000,000 \\times 2}{86,400} \\approx \\mathbf{11,574\\text{ requests/sec}}\r\n  $$",
    "starterCode": ""
  },
  "82": {
    "chapter": 82,
    "chapterTitle": "Scaling Applications",
    "projectTitle": "Stateless App Scaling & Database Read-Replication Plan",
    "format": "Written Architecture & Scaling Strategy",
    "why": "Scale a bottlenecked web application from 1,000 to 10,000,000 users.",
    "problemStatement": "",
    "checklist": [
      "Eliminate local state from app servers (externalize sessions to Redis).",
      "Introduce Layer 7 Load Balancing (Round Robin vs Least Connections).",
      "Set up Database Read Replicas and address replication lag."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Stateless web servers behind an NGINX load balancer externalize session state to a Redis cluster, allowing seamless horizontal autoscaling.",
    "starterCode": ""
  },
  "83": {
    "chapter": 83,
    "chapterTitle": "Caching",
    "projectTitle": "Cache-Aside & Write-Through Redis Acceleration Layer",
    "format": "Coding & Strategy Design (Python + Redis)",
    "why": "Implement caching strategies and handle Cache Invalidation, Stampede, and Penetration.",
    "problemStatement": "",
    "checklist": [
      "Implement Cache-Aside pattern with Redis and database fallback.",
      "Defend against Cache Stampede using distributed mutex locking.",
      "Implement Bloom Filter to prevent Cache Penetration for non-existent IDs."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\ndef get_user_record(user_id: int):\r\n    cache_key = f\"user:{user_id}\"\r\n    cached_data = redis_client.get(cache_key)\r\n    if cached_data:\r\n        return json.loads(cached_data)\r\n    user_record = db.find_user(user_id)\r\n    redis_client.setex(cache_key, 3600, json.dumps(user_record))\r\n    return user_record\r\n```",
    "starterCode": "\"\"\"\nChapter 83 Project Solution: Cache-Aside & Write-Through Redis Acceleration Layer\nFormat: Coding & Strategy Design (Python + Redis)\n\nProblem:\nCaching\n\"\"\"\n\n"
  },
  "84": {
    "chapter": 84,
    "chapterTitle": "Asynchronous & Event-Driven Systems",
    "projectTitle": "Asynchronous Video Processing & Email Queue Pipeline",
    "format": "Coding (Python + RabbitMQ/Celery/Redis Queue)",
    "why": "Decouple heavy background workloads from user-facing request loops.",
    "problemStatement": "",
    "checklist": [
      "Implement producer-consumer pattern using message queues.",
      "Handle task failures with Exponential Backoff and Dead Letter Queues (DLQ).",
      "Guarantee idempotent job execution."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Decouple long-running tasks using RabbitMQ / SQS message queues and Celery background workers with Dead Letter Queues (DLQ) for failed retries.",
    "starterCode": "\"\"\"\nChapter 84 Project Solution: Asynchronous Video Processing & Email Queue Pipeline\nFormat: Coding (Python + RabbitMQ/Celery/Redis Queue)\n\nProblem:\nAsynchronous & Event-Driven Systems\n\"\"\"\n\n"
  },
  "85": {
    "chapter": 85,
    "chapterTitle": "Distributed Systems & CAP Theorem",
    "projectTitle": "CAP Theorem & Tunable Quorum Consistency Analyzer",
    "format": "Written Analysis & Quorum Calculation",
    "why": "Reason about consistency, availability, network partitions, and quorum math.",
    "problemStatement": "",
    "checklist": [
      "Analyze a network partition scenario and explain the CP vs AP trade-off.",
      "Calculate Strong Consistency Quorum ($R + W > N$) for a 5-node replica cluster.",
      "Explain Eventual Consistency and Conflict-Free Replicated Data Types (CRDTs)."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* CAP Theorem states that in the presence of a Network Partition ($P$), a distributed system must choose between Consistency ($C$) and Availability ($A$).",
    "starterCode": ""
  },
  "86": {
    "chapter": 86,
    "chapterTitle": "Coordination & Consensus",
    "projectTitle": "Raft Consensus Leader Election & Heartbeat Simulator",
    "format": "Written Theory & Simplified Raft Simulation (Python)",
    "why": "Understand how distributed nodes agree in the presence of node failures.",
    "problemStatement": "",
    "checklist": [
      "Model Leader, Follower, and Candidate node states in Python.",
      "Simulate randomized election timeouts and split-vote resolution.",
      "Hand-trace log replication and commit index progression across 3 nodes."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Raft uses Leader Election with randomized election timeouts and strict Log Replication to maintain consensus across cluster nodes.",
    "starterCode": "\"\"\"\nChapter 86 Project Solution: Raft Consensus Leader Election & Heartbeat Simulator\nFormat: Written Theory & Simplified Raft Simulation (Python)\n\nProblem:\nCoordination & Consensus\n\"\"\"\n\n"
  },
  "87": {
    "chapter": 87,
    "chapterTitle": "Reliability Patterns",
    "projectTitle": "Fault-Tolerance Resilience Suite: Circuit Breaker & Retry with Jitter",
    "format": "Coding (Python)",
    "why": "Build resilient software that survives downstream partial failures.",
    "problemStatement": "",
    "checklist": [
      "Implement a 3-state Circuit Breaker (`CLOSED`, `OPEN`, `HALF-OPEN`).",
      "Implement exponential backoff with full jitter for retries.",
      "Add request timeouts to prevent thread pool exhaustion."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Circuit Breaker states: `CLOSED` (normal operation), `OPEN` (fail fast on downstream degradation), and `HALF-OPEN` (trial recovery requests).",
    "starterCode": "\"\"\"\nChapter 87 Project Solution: Fault-Tolerance Resilience Suite: Circuit Breaker & Retry with Jitter\nFormat: Coding (Python)\n\nProblem:\nReliability Patterns\n\"\"\"\n\n"
  },
  "88": {
    "chapter": 88,
    "chapterTitle": "Complete System Design Capstone",
    "projectTitle": "Real-Time Ride-Sharing (Uber) or Video Streaming (YouTube) System Design",
    "format": "Full System Design Whitepaper & Architecture Diagram",
    "why": "Perform an end-to-end, interview-grade distributed system design from scratch.",
    "problemStatement": "",
    "checklist": [
      "Scope functional requirements and calculate scale/storage estimates.",
      "Design API contracts and data models.",
      "Draw end-to-end distributed architecture (Gateways, Geospatial Indexing / CDN, Microservices, Storage, Message Brokers).",
      "Address Single Points of Failure (SPOF) and bottlenecks."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* End-to-end distributed design for Video Streaming (YouTube): Cloudflare CDN $\\to$ API Gateway $\\to$ Microservices $\\to$ S3 Blob Storage + Transcoder Queue + Metadata Shards.\r\n\r\n---\r\n\r\n# Unit XII — Other Core CS Areas (Chapters 89–91)",
    "starterCode": ""
  },
  "89": {
    "chapter": 89,
    "chapterTitle": "Artificial Intelligence Foundations",
    "projectTitle": "A* Pathfinding Search & Linear Regression from Scratch",
    "format": "Coding (Python)",
    "why": "Build classical AI search and a simple machine learning model from scratch without black-box frameworks.",
    "problemStatement": "",
    "checklist": [
      "Implement the A* Pathfinding algorithm on a 2D grid using Manhattan distance heuristic.",
      "Implement univariate Linear Regression using Gradient Descent in pure Python.",
      "Train model, evaluate Mean Squared Error (MSE), and plot regression line."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "```python\r\nimport heapq\r\n\r\ndef a_star(grid, start, goal):\r\n    heuristic = lambda a, b: abs(a[0] - b[0]) + abs(a[1] - b[1])\r\n    pq = [(0 + heuristic(start, goal), 0, start, [start])]\r\n    visited = set()\r\n    while pq:\r\n        _, cost, curr, path = heapq.heappop(pq)\r\n        if curr == goal: return path\r\n        if curr in visited: continue\r\n        visited.add(curr)\r\n        r, c = curr\r\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\r\n            nr, nc = r + dr, c + dc\r\n            if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]) and grid[nr][nc] == 0:\r\n                heapq.heappush(pq, (cost + 1 + heuristic((nr, nc), goal), cost + 1, (nr, nc), path + [(nr, nc)]))\r\n    return None\r\n```",
    "starterCode": "\"\"\"\nChapter 89 Project Solution: A* Pathfinding Search & Linear Regression from Scratch\nFormat: Coding (Python)\n\nProblem:\nArtificial Intelligence Foundations\n\"\"\"\n\n"
  },
  "90": {
    "chapter": 90,
    "chapterTitle": "Specialized Computing Platforms",
    "projectTitle": "IoT Sensor Node vs Mobile Client Architecture Comparison",
    "format": "Written Platform Comparison & Resource Budget",
    "why": "Understand hardware constraints in Mobile, Embedded/IoT, and Edge Computing.",
    "problemStatement": "",
    "checklist": [
      "Compare battery power, memory limits, and connectivity constraints across Embedded, Mobile, and Cloud servers.",
      "Design a lightweight telemetry protocol (MQTT / CoAP) minimizing battery and bandwidth consumption."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* IoT constraints require ultra-low power sleep states, microamp budgets, and lightweight binary serialization (CoAP / Protocol Buffers).",
    "starterCode": ""
  },
  "91": {
    "chapter": 91,
    "chapterTitle": "Computing, Society & Ethics",
    "projectTitle": "Algorithmic Bias Audit & Ethical Impact Assessment",
    "format": "Written Ethical Impact Assessment",
    "why": "Evaluate data privacy, algorithmic bias, AI safety, and engineering responsibility.",
    "problemStatement": "",
    "checklist": [
      "Audit an automated loan approval algorithm for disparate impact and demographic bias.",
      "Propose technical mitigations (fairness constraints, audit trails).",
      "Write an engineering disclosure and data retention policy conforming to GDPR principles."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Perform demographic parity evaluations on machine learning models to detect and mitigate bias in automated decision systems.\r\n\r\n---\r\n\r\n# Unit XIII — Maintaining Real Software (Chapters 92–94)",
    "starterCode": ""
  },
  "92": {
    "chapter": 92,
    "chapterTitle": "Working in Existing Codebases",
    "projectTitle": "Open-Source Codebase Deep Dive & First Bug Fix",
    "format": "Practical Code Exploration & Bug Fix",
    "why": "Read, navigate, and modify an unfamiliar open-source codebase safely.",
    "problemStatement": "",
    "checklist": [
      "Clone a popular open-source Python repository (e.g., Requests, Flask, or Rich).",
      "Generate a module dependency diagram and trace an entrypoint request.",
      "Locate an open issue, write a reproducing test, implement the fix, and pass all existing tests."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Strategy: Generate module call graphs, locate integration test harnesses, and write reproduction tests before modifying production code.",
    "starterCode": ""
  },
  "93": {
    "chapter": 93,
    "chapterTitle": "Legacy Code & Maintenance",
    "projectTitle": "Characterization Testing & Test Seam Injection on Legacy Payroll",
    "format": "Coding (Python)",
    "why": "Refactor fragile legacy code without tests by introducing test seams and characterization tests.",
    "problemStatement": "",
    "checklist": [
      "Wrap a 300-line untested legacy script with Golden Master / Characterization Tests.",
      "Inject a test seam (Dependency Injection) to decouple hardcoded filesystem writes.",
      "Refactor the legacy core safely while ensuring 100% Golden Master output preservation."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Wrap legacy logic with Golden Master snapshot tests, inject test seams via Dependency Injection, and refactor safely under test coverage.",
    "starterCode": "\"\"\"\nChapter 93 Project Solution: Characterization Testing & Test Seam Injection on Legacy Payroll\nFormat: Coding (Python)\n\nProblem:\nLegacy Code & Maintenance\n\"\"\"\n\n"
  },
  "94": {
    "chapter": 94,
    "chapterTitle": "Engineering Communication",
    "projectTitle": "Architectural Decision Record (ADR): Monolith vs Microservices Migration",
    "format": "Written Architectural Decision Record (ADR)",
    "why": "Document and defend major technical architectural trade-offs to engineering stakeholders.",
    "problemStatement": "",
    "checklist": [
      "State the Context, Problem Statement, and Business Drivers.",
      "Document 3 evaluated alternatives with pros, cons, and operational costs.",
      "State the final Decision, Consequences, and Rollback Plan."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **Architecture Decision Record (ADR):** Context, Evaluated Options, Decision, and Positive/Negative Consequences.\r\n\r\n---\r\n\r\n# Unit XIV — Grand Capstone (Chapters 95–98)",
    "starterCode": ""
  },
  "95": {
    "chapter": 95,
    "chapterTitle": "Capstone Planning",
    "projectTitle": "Grand Capstone Engineering Spec & Architecture Blueprint",
    "format": "Written Production Spec & MVP Roadmap",
    "why": "Define a buildable, production-ready product scope with explicit non-goals.",
    "problemStatement": "",
    "checklist": [
      "Define problem statement, target users, and MVP Must-Haves vs Post-MVP Nice-to-Haves.",
      "Design database schemas, API contracts, and component architecture.",
      "Define the Definition of Done (DoD), CI/CD requirements, and deployment targets."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Complete PRD with user personas, system boundary diagrams, API schemas, and deployment targets.",
    "starterCode": ""
  },
  "96": {
    "chapter": 96,
    "chapterTitle": "Build the Production Application",
    "projectTitle": "Full-Stack Production Web Application Deployment",
    "format": "Full-Stack Production Coding",
    "why": "Build and ship a complete, multi-user web application with frontend, backend API, database, and authentication.",
    "problemStatement": "",
    "checklist": [
      "Implement relational database models with migrations.",
      "Implement REST / GraphQL backend API with auth and validation.",
      "Build responsive web frontend consuming the API.",
      "Deploy to a public cloud URL with automated CI/CD pipeline."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Full-stack application with JWT authentication, relational PostgreSQL storage, Redis caching, REST API, and containerized deployment.",
    "starterCode": "\"\"\"\nChapter 96 Project Solution: Full-Stack Production Web Application Deployment\nFormat: Full-Stack Production Coding\n\nProblem:\nBuild the Production Application\n\"\"\"\n\n"
  },
  "97": {
    "chapter": 97,
    "chapterTitle": "Break, Measure & Harden",
    "projectTitle": "Locust Load Testing, Profiling & Hardening Suite",
    "format": "Practical Load-Testing & Hardening",
    "why": "Stress-test your application to identify performance bottlenecks and security flaws.",
    "problemStatement": "",
    "checklist": [
      "Write Locust / k6 load-testing scripts simulating 1,000 concurrent users.",
      "Profile CPU, memory, and database slow-query bottlenecks under load.",
      "Implement caching, database indexes, and connection pooling to reduce p99 latency by $\\ge 50\\%$."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Execute Locust load tests simulating 1,000 concurrent users; profile p99 latency spikes and resolve database query bottlenecks.",
    "starterCode": ""
  },
  "98": {
    "chapter": 98,
    "chapterTitle": "Portfolio Release",
    "projectTitle": "Open-Source Production Portfolio Package & Demo",
    "format": "Documentation, Packaging & Portfolio Presentation",
    "why": "Package code, architecture diagrams, live demo, and documentation to professional standards.",
    "problemStatement": "",
    "checklist": [
      "Write comprehensive `README.md` with architecture diagrams, setup instructions, and design decisions.",
      "Provide live working URL and public GitHub repository with clean commit history.",
      "Record a 3-minute technical walkthrough video demonstrating system architecture and key features."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Publish GitHub repository with comprehensive README, setup instructions, architecture schematics, and video walkthrough.\r\n\r\n---\r\n\r\n# Unit XV — Interview & Job Readiness (Chapters 99–105)",
    "starterCode": ""
  },
  "99": {
    "chapter": 99,
    "chapterTitle": "Coding Interview Method",
    "projectTitle": "6-Step Timed Coding Interview Walkthrough",
    "format": "Live Verbal & Coding Drill",
    "why": "Master the 6-step problem-solving framework under observation while narrating your thoughts aloud.",
    "problemStatement": "",
    "checklist": [
      "*Step 1:** Clarify inputs, outputs, constraints, and edge cases.",
      "*Step 2:** State brute-force solution with Big-O complexity.",
      "*Step 3:** Optimize algorithm and state optimal Big-O.",
      "*Step 4:** Write clean, modular code.",
      "*Step 5:** Manually trace code with edge cases.",
      "*Step 6:** Refactor and analyze runtime/space trade-offs."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* The 6-Step Interview Framework:\r\n  1. Clarify constraints & edge cases.\r\n  2. State naive brute force ($O(N^2)$).\r\n  3. Optimize to optimal Big-O.\r\n  4. Write clean, modular code.\r\n  5. Hand-trace with edge cases.\r\n  6. Analyze time and space complexity.",
    "starterCode": "\"\"\"\nChapter 99 Project Solution: 6-Step Timed Coding Interview Walkthrough\nFormat: Live Verbal & Coding Drill\n\nProblem:\nCoding Interview Method\n\"\"\"\n\n"
  },
  "100": {
    "chapter": 100,
    "chapterTitle": "DSA Interview Practice",
    "projectTitle": "45-Minute Mixed Medium DSA Coding Sprint",
    "format": "Timed Coding Interview Sprint (45 Minutes)",
    "why": "Solve unseen LeetCode Medium problems under strict time constraints.",
    "problemStatement": "",
    "checklist": [
      "Solve 1 Graph/Tree Medium problem in 20 minutes with optimal time/space complexity.",
      "Solve 1 DP/Array Medium problem in 20 minutes.",
      "Spend final 5 minutes testing edge cases and explaining complexity."
    ],
    "workspaceType": "compiler",
    "language": "python",
    "solutionMarkdown": "* Timed resolution of LeetCode Medium problems under 45 minutes with clear verbal narration.",
    "starterCode": "\"\"\"\nChapter 100 Project Solution: 45-Minute Mixed Medium DSA Coding Sprint\nFormat: Timed Coding Interview Sprint (45 Minutes)\n\nProblem:\nDSA Interview Practice\n\"\"\"\n\n"
  },
  "101": {
    "chapter": 101,
    "chapterTitle": "CS Fundamentals Interview Review",
    "projectTitle": "2-Minute CS Fundamentals Rapid-Fire Oral Exam",
    "format": "Fast-Recall Flashcard & Verbal Drill",
    "why": "Deliver concise, 2-minute answers without notes on core computer science topics.",
    "problemStatement": "",
    "checklist": [
      "Explain Process vs Thread, Stack vs Heap, and Mutex vs Semaphore in under 2 minutes each.",
      "Explain TCP 3-Way Handshake vs UDP in under 2 minutes.",
      "Explain B-Tree vs Hash Index and ACID Isolation levels in under 2 minutes."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* *Process vs Thread:* Independent address space vs shared memory within a process.\r\n* *TCP vs UDP:* Reliable connection-oriented stream vs lightweight connectionless datagrams.\r\n* *Stack vs Heap:* LIFO stack frames for function locals vs dynamically allocated object heap.",
    "starterCode": ""
  },
  "102": {
    "chapter": 102,
    "chapterTitle": "Low-Level Design (LLD) Interviews",
    "projectTitle": "Live LLD Interview: Elevator Control System or Chess Game",
    "format": "45-Minute Timed LLD Interview Drill",
    "why": "Produce an object-oriented design and clean code under interview pressure.",
    "problemStatement": "",
    "checklist": [
      "Clarify requirements and define actors/entities in 5 minutes.",
      "Draw class diagram / interfaces adhering to SOLID principles in 15 minutes.",
      "Write working Python class skeletons with core methods and concurrency considerations in 25 minutes."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* 45-minute live LLD for an Elevator Management System (ElevatorController, ElevatorCar, RequestQueue, Dispatcher).",
    "starterCode": ""
  },
  "103": {
    "chapter": 103,
    "chapterTitle": "System Design Interviews",
    "projectTitle": "Live System Design Interview: Design TikTok / WhatsApp / Rate Limiter",
    "format": "45-Minute Timed System Design Interview Drill",
    "why": "Drive a high-scale architectural design on a virtual whiteboard.",
    "problemStatement": "",
    "checklist": [
      "Scope requirements and estimate QPS/storage in 5 minutes.",
      "Draw High-Level Architecture in 10 minutes.",
      "Deep-dive into data modeling, partitioning, caching, and failover in 25 minutes.",
      "Summarize bottlenecks and operational monitoring in 5 minutes."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* 45-minute live System Design for a Real-Time Chat Platform (WebSockets, Gateway, Presence Cluster, Cassandra Storage).",
    "starterCode": ""
  },
  "104": {
    "chapter": 104,
    "chapterTitle": "Behavioral Interviews",
    "projectTitle": "STAR Story Matrix for Top 5 Behavioral Questions",
    "format": "Written STAR Matrix & Verbal Story Rehearsal",
    "why": "Frame engineering experiences using the STAR method (Situation, Task, Action, Result).",
    "problemStatement": "",
    "checklist": [
      "Write structured STAR stories for: *Technical Conflict*, *Major Failure/Mistake*, *Proudest Achievement*, *Working Under Ambiguity*, and *Mentorship/Leadership*.",
      "Quantify results with metrics (e.g., latency reduced by 40%, shipped 2 weeks early).",
      "Rehearse 2-minute spoken delivery for each story."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* **Situation:** Critical payment gateway latency spike during peak sale.\r\n* **Task:** Identify bottleneck and restore checkout performance within 30 minutes.\r\n* **Action:** Discovered database connection pool exhaustion; increased pool limits and added read-through caching.\r\n* **Result:** Restored response times from 4.2s to 85ms with zero lost orders.",
    "starterCode": ""
  },
  "105": {
    "chapter": 105,
    "chapterTitle": "Final Mock Interview Loop",
    "projectTitle": "Grand 4-Round Tech Industry Mock Interview Loop",
    "format": "Full 4-Round Dress Rehearsal Simulation",
    "why": "Simulate the complete 4-round tech industry interview loop end-to-end.",
    "problemStatement": "",
    "checklist": [
      "*Round 1 (DSA):** 45-min live algorithmic problem solving.",
      "*Round 2 (LLD/OOP):** 45-min object-oriented design and code.",
      "*Round 3 (System Design):** 45-min large-scale distributed system design.",
      "*Round 4 (Behavioral & Leadership):** 45-min culture and technical retrospective."
    ],
    "workspaceType": "notepad",
    "language": "python",
    "solutionMarkdown": "* Complete 4-round technical dress rehearsal debrief across DSA, LLD, System Design, and Behavioral rounds.",
    "starterCode": ""
  }
};

export function getCSProjectInfo(chapterNumber: number): CSProjectInfo | null {
  return CS_PROJECTS_REGISTRY[chapterNumber] ?? null;
}
