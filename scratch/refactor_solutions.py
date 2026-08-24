import re
import os

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'

with open(sol_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Clean bullet-prefixed headings like "* 1. Title" or "- **1. Title**" -> "#### 1. Title"
content = re.sub(r'^\s*[-*]\s+\*\*(\d+\.\s+[^*]+?)\*\*:?', r'#### \1', content, flags=re.MULTILINE)
content = re.sub(r'^\s*[-*]\s+(\d+\.\s+[^\n]+?):', r'#### \1', content, flags=re.MULTILINE)

# 2. Fix inline tables where table started immediately after a heading or list item without double newline
content = re.sub(r'([^\n])\n(\s*\|[^\n]+\|\n\s*\|[-:| ]+\|\n)', r'\1\n\n\2', content)

# 3. Format Memory Hierarchy (Chapter 4)
ch4_old = """3. Complete Memory Hierarchy Comparison:
1. Registers: Located directly on CPU core. Access latency: < 1 ns. Capacity: ~ 1 KB. Cost per byte: Extremely High.
2. L1 Cache: Dedicated per core. Access latency: ~ 1 ns. Capacity: 32–64 KB.
3. L2 Cache: Dedicated/Shared per core. Access latency: ~ 4 ns. Capacity: 512 KB – 1 MB.
4. L3 Cache: Shared across all cores. Access latency: ~ 10–15 ns. Capacity: 16–64 MB.
5. Main Memory (DRAM): Connected via memory bus. Access latency: ~ 60–100 ns. Capacity: 16–64 GB.
6. Solid State Drive (NVMe SSD): Persistent secondary storage. Access latency: ~ 50–100 \mu s (1,000x slower than DRAM). Capacity: 1–4 TB. Cost per byte: Very Low."""

ch4_table = """#### 3. Complete Memory Hierarchy Comparison

| Hierarchy Level | Physical Location | Typical Latency | Typical Capacity | Relative Cost per Byte |
| :--- | :--- | :--- | :--- | :--- |
| **CPU Registers** | Directly on CPU core datapath | $< 1\\text{ ns}$ | $\\sim 1\\text{ KB}$ | Extremely High |
| **L1 Cache (I/D)** | Dedicated per CPU core | $\\sim 1\\text{ ns}$ | $32\\text{--}64\\text{ KB}$ | Very High |
| **L2 Cache** | Dedicated or shared per core | $\\sim 4\\text{ ns}$ | $512\\text{ KB -- }1\\text{ MB}$ | High |
| **L3 Cache** | Shared across all cores | $\\sim 10\\text{--}15\\text{ ns}$ | $16\\text{--}64\\text{ MB}$ | Moderate |
| **Main Memory (DRAM)** | Connected via external memory bus | $\\sim 60\\text{--}100\\text{ ns}$ | $16\\text{--}64\\text{ GB}$ | Low |
| **NVMe SSD Storage** | Persistent flash via PCIe bus | $\\sim 50\\text{--}100\\ \\mu\\text{s}$ | $1\\text{--}4\\text{ TB}$ | Very Low |"""

content = content.replace(ch4_old, ch4_table)

# Format Cache Miss Mechanics in Chapter 4
ch4_miss_old = """4. Hardware Cache Miss Mechanics: When the CPU requests a memory address not present in the L1/L2/L3 caches, a cache miss signal is triggered. The CPU pipeline stalls while the cache controller sends an address request over the memory bus to DRAM, retrieving an entire 64-byte aligned block (a Cache Line). This block is written into the cache hierarchy, replacing an older cache line using a policy such as Least Recently Used (LRU), and the requested word is finally delivered to the CPU register so instruction execution can resume."""

ch4_miss_new = """#### 4. Hardware Cache Miss Mechanics & Pipeline Stalls

When the CPU requests a memory address not currently resident in the L1/L2/L3 cache hierarchy, a **Hardware Cache Miss** occurs through the following discrete sequence:

1. **Cache Miss Detection & Pipeline Stall**: The CPU tag-comparator detects an address mismatch. The instruction execution pipeline stalls.
2. **Bus Request Dispatch**: The integrated memory controller issues a physical memory address read command over the system bus to **DRAM**.
3. **Cache Line Retrieval**: Rather than fetching a single 8-byte word, an entire **64-byte aligned block (Cache Line)** is transferred to exploit *spatial locality*.
4. **Eviction & Replacement**: If the designated cache set is full, an existing cache line is evicted according to the **Least Recently Used (LRU)** or pseudo-LRU policy (writing back dirty lines if modified).
5. **Cache Line Allocation & Execution Resumption**: The new 64-byte line is written into L3 $\\to$ L2 $\\to$ L1 caches, and the requested 64-bit word is immediately forwarded to the CPU register to resume instruction execution."""

content = content.replace(ch4_miss_old, ch4_miss_new)

with open(sol_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Refactored solution walkthroughs with structured tables and clear step-by-step formatting!")
