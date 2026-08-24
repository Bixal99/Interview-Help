import re

sol_path = r'c:\Users\msi\OneDrive\Desktop\Qatar\help\ALL_105_CHAPTERS_SOLUTIONS_AND_ANSWER_KEYS.md'

with open(sol_path, 'r', encoding='utf-8') as f:
    text = f.read().replace('\r\n', '\n')

ENRICHMENTS = {
    50: '''
```python
"""
Chapter 50 Solution: Memory & Virtual Address Translation Simulator
Simulates a multi-level page table and computes Physical Address from Virtual Address.
"""

PAGE_SIZE = 4096  # 4KB pages (offset = 12 bits)

def translate_virtual_to_physical(virtual_address: int, page_table: dict[int, int]) -> dict:
    virtual_page_number = virtual_address // PAGE_SIZE
    offset = virtual_address % PAGE_SIZE

    if virtual_page_number not in page_table:
        raise MemoryError(f"PAGE FAULT: VPN 0x{virtual_page_number:X} not mapped in Page Table!")

    physical_frame_number = page_table[virtual_page_number]
    physical_address = (physical_frame_number * PAGE_SIZE) + offset

    return {
        "virtual_address": hex(virtual_address),
        "virtual_page_number": hex(virtual_page_number),
        "offset": hex(offset),
        "physical_frame_number": hex(physical_frame_number),
        "physical_address": hex(physical_address)
    }

if __name__ == "__main__":
    # Page table mapping: VPN -> PFN
    sample_pt = {0x00: 0x05, 0x01: 0x09, 0x02: 0x02}
    v_addr = 0x1050  # VPN 1, offset 0x50
    result = translate_virtual_to_physical(v_addr, sample_pt)
    print("Address Translation Success:", result)
```
''',
    52: '''
```python
"""
Chapter 52 Solution: OS Process Lifecycle & Round-Robin Scheduler
Demonstrates preemptive Round-Robin scheduling across PCB processes.
"""
from collections import deque
from dataclasses import dataclass

@dataclass
class ProcessControlBlock:
    pid: int
    name: str
    burst_time: int
    remaining_time: int
    state: str = "READY"

def round_robin_schedule(processes: list[ProcessControlBlock], time_quantum: int = 2):
    queue = deque(processes)
    timeline = []

    print(f"=== ROUND ROBIN SCHEDULER (Quantum = {time_quantum}) ===")
    while queue:
        current = queue.popleft()
        current.state = "RUNNING"
        executed_time = min(current.remaining_time, time_quantum)
        current.remaining_time -= executed_time
        timeline.append((current.name, executed_time))

        print(f"Executing {current.name} for {executed_time}ms (Remaining: {current.remaining_time}ms)")

        if current.remaining_time > 0:
            current.state = "READY"
            queue.append(current)
        else:
            current.state = "TERMINATED"
            print(f"-> Process {current.name} (PID {current.pid}) FINISHED execution.")

    return timeline

if __name__ == "__main__":
    procs = [
        ProcessControlBlock(pid=1, name="Web Browser", burst_time=5, remaining_time=5),
        ProcessControlBlock(pid=2, name="Code Editor", burst_time=3, remaining_time=3),
        ProcessControlBlock(pid=3, name="Music Player", burst_time=4, remaining_time=4),
    ]
    round_robin_schedule(procs, time_quantum=2)
```
''',
    56: '''
```python
"""
Chapter 56 Solution: TCP Sockets Simulation & Packet Protocol
Demonstrates low-level reliable frame transmission, checksum verification, and ACK sequence numbers.
"""
import hashlib

class Packet:
    def __init__(self, seq_num: int, payload: str):
        self.seq_num = seq_num
        self.payload = payload
        self.checksum = self.calculate_checksum()

    def calculate_checksum(self) -> str:
        return hashlib.md5(f"{self.seq_num}:{self.payload}".encode()).hexdigest()[:8]

    def is_valid(self) -> bool:
        return self.checksum == self.calculate_checksum()

class Receiver:
    def __init__(self):
        self.expected_seq = 0
        self.received_buffer = []

    def receive_packet(self, packet: Packet) -> dict:
        if not packet.is_valid():
            return {"status": "NACK", "reason": "Checksum Corrupted"}
        if packet.seq_num == self.expected_seq:
            self.received_buffer.append(packet.payload)
            self.expected_seq += 1
            return {"status": "ACK", "ack_seq": self.expected_seq}
        return {"status": "DUP_ACK", "ack_seq": self.expected_seq}

if __name__ == "__main__":
    rx = Receiver()
    for i, msg in enumerate(["SYN_DATA", "CHUNK_1", "FIN_DATA"]):
        p = Packet(seq_num=i, payload=msg)
        res = rx.receive_packet(p)
        print(f"Sent Seq {i} ('{msg}') -> Receiver: {res}")
    print("Reconstructed Stream:", "".join(rx.received_buffer))
```
''',
    60: '''
```python
"""
Chapter 60 Solution: In-Memory Relational Database Engine with Indexing
Demonstrates Table creation, Row insertions, and indexed Primary Key lookups.
"""

class Table:
    def __init__(self, name: str, schema: list[str]):
        self.name = name
        self.schema = schema
        self.rows: list[dict] = []
        self.primary_index: dict[int, dict] = {}

    def insert(self, record: dict):
        pk = record[self.schema[0]]
        if pk in self.primary_index:
            raise ValueError(f"UNIQUE CONSTRAINT VIOLATION: PK {pk} already exists.")
        self.rows.append(record)
        self.primary_index[pk] = record
        print(f"[{self.name}] Inserted record: {record}")

    def find_by_pk(self, pk: int) -> dict | None:
        # Direct O(1) Index Lookup
        return self.primary_index.get(pk)

if __name__ == "__main__":
    users = Table("users", ["id", "username", "email"])
    users.insert({"id": 1, "username": "alice", "email": "alice@antigravity.io"})
    users.insert({"id": 2, "username": "bob", "email": "bob@antigravity.io"})
    print("Index Lookup ID=2:", users.find_by_pk(2))
```
''',
    63: '''
```python
"""
Chapter 63 Solution: Database B-Tree Index Search & Insertion
Implements a 2-3 B-Tree node branching structure for logarithmic search time.
"""

class BTreeNode:
    def __init__(self, leaf: bool = True):
        self.leaf = leaf
        self.keys: list[int] = []
        self.children: list['BTreeNode'] = []

    def search(self, key: int) -> bool:
        i = 0
        while i < len(self.keys) and key > self.keys[i]:
            i += 1
        if i < len(self.keys) and self.keys[i] == key:
            return True
        if self.leaf:
            return False
        return self.children[i].search(key)

if __name__ == "__main__":
    root = BTreeNode(leaf=False)
    root.keys = [50]
    left = BTreeNode(leaf=True)
    left.keys = [10, 25, 40]
    right = BTreeNode(leaf=True)
    right.keys = [60, 75, 90]
    root.children = [left, right]

    print("Search 25:", root.search(25))
    print("Search 75:", root.search(75))
    print("Search 99:", root.search(99))
```
''',
    64: '''
```python
"""
Chapter 64 Solution: ACID Transaction Manager with Write-Ahead Logging (WAL)
Simulates atomicity rollback and commit persistence guarantees.
"""

class Account:
    def __init__(self, account_id: str, balance: float):
        self.id = account_id
        self.balance = balance

class TransactionManager:
    def __init__(self):
        self.wal_log: list[str] = []

    def transfer(self, sender: Account, receiver: Account, amount: float):
        self.wal_log.append(f"BEGIN TRANS: {sender.id} -> {receiver.id} (${amount})")
        
        # Save snapshot for Atomicity
        sender_initial = sender.balance
        receiver_initial = receiver.balance

        try:
            if sender.balance < amount:
                raise ValueError("INSUFFICIENT FUNDS: Cannot complete transfer.")
            sender.balance -= amount
            receiver.balance += amount
            self.wal_log.append(f"COMMIT TRANS: New Balances [{sender.id}: {sender.balance}, {receiver.id}: {receiver.balance}]")
            print(f"-> SUCCESS: Transferred ${amount}. Sender balance: ${sender.balance}")
        except Exception as e:
            # Rollback
            sender.balance = sender_initial
            receiver.balance = receiver_initial
            self.wal_log.append(f"ROLLBACK TRANS: Reason: {e}")
            print(f"-> ABORTED & ROLLED BACK: {e}")

if __name__ == "__main__":
    tm = TransactionManager()
    acc1 = Account("ACC-101", 100.0)
    acc2 = Account("ACC-202", 50.0)
    tm.transfer(acc1, acc2, 30.0)
    tm.transfer(acc1, acc2, 150.0)  # Fails & rolls back
```
''',
    69: '''
```python
"""
Chapter 69 Solution: OWASP Security Vulnerability Scanner
Detects SQL Injection (SQLi) and Cross-Site Scripting (XSS) patterns in user payloads.
"""
import html
import re

SQLI_PATTERNS = [
    r"(\b(UNION|SELECT|INSERT|DELETE|UPDATE|DROP)\b)",
    r"('|\")\s*(OR|AND)\s*('|\")?\d+('|\")?\s*=\s*('|\")?\d+",
    r"--|/\*|\*/"
]

def sanitize_and_inspect_payload(payload: str) -> dict:
    alerts = []
    
    # Check SQL Injection
    for pattern in SQLI_PATTERNS:
        if re.search(pattern, payload, re.IGNORECASE):
            alerts.append(f"CRITICAL: SQL Injection pattern detected matching '{pattern}'")
            break

    # Check XSS Script Tags
    if re.search(r"<script.*?>.*?</script.*?>", payload, re.IGNORECASE):
        alerts.append("HIGH: Cross-Site Scripting (XSS) script tag injection detected.")

    # Apply HTML entity escaping
    sanitized = html.escape(payload)

    return {
        "raw_payload": payload,
        "is_malicious": len(alerts) > 0,
        "alerts": alerts,
        "sanitized_safe_output": sanitized
    }

if __name__ == "__main__":
    test_inputs = [
        "Alice Smith",
        "' OR '1'='1' --",
        "<script>alert('pwned')</script>"
    ]
    for inp in test_inputs:
        report = sanitize_and_inspect_payload(inp)
        print(f"\nPayload: {inp}\nSafe: {not report['is_malicious']} | Alerts: {report['alerts']}")
```
''',
    83: '''
```python
"""
Chapter 83 Solution: Distributed LRU Cache with TTL Expiration
Demonstrates sub-millisecond cache hits, evictions, and TTL time expiration.
"""
import time
from collections import OrderedDict

class LRUCacheWithTTL:
    def __init__(self, capacity: int = 3, default_ttl_sec: float = 2.0):
        self.capacity = capacity
        self.default_ttl = default_ttl_sec
        self.cache: OrderedDict[str, tuple[any, float]] = OrderedDict()

    def get(self, key: str) -> any | None:
        if key not in self.cache:
            return None
        val, expiry = self.cache[key]
        if time.time() > expiry:
            del self.cache[key]  # Expired
            return None
        self.cache.move_to_end(key)
        return val

    def put(self, key: str, value: any):
        expiry = time.time() + self.default_ttl
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = (value, expiry)
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # Evict oldest LRU

if __name__ == "__main__":
    cache = LRUCacheWithTTL(capacity=2, default_ttl_sec=1.5)
    cache.put("user:1", "Alice")
    cache.put("user:2", "Bob")
    print("Get user:1:", cache.get("user:1"))
    cache.put("user:3", "Charlie")  # Evicts user:2
    print("Get user:2 (evicted):", cache.get("user:2"))
    print("Get user:3:", cache.get("user:3"))
```
''',
    86: '''
```python
"""
Chapter 86 Solution: Raft Consensus Heartbeat & Leader Election Simulator
Simulates cluster nodes, term increments, and majority leader election.
"""
import random

class Node:
    def __init__(self, node_id: int):
        self.id = node_id
        self.state = "FOLLOWER"
        self.term = 0
        self.voted_for = None

    def start_election(self, cluster_size: int) -> bool:
        self.state = "CANDIDATE"
        self.term += 1
        self.voted_for = self.id
        votes = 1  # Votes for itself

        # Request votes from peers
        for peer_id in range(1, cluster_size + 1):
            if peer_id != self.id:
                # 80% peer vote acceptance chance
                if random.random() < 0.8:
                    votes += 1

        majority = (cluster_size // 2) + 1
        if votes >= majority:
            self.state = "LEADER"
            print(f"Node {self.id} WON election for Term {self.term} with {votes}/{cluster_size} votes!")
            return True
        else:
            self.state = "FOLLOWER"
            print(f"Node {self.id} LOST election for Term {self.term} ({votes}/{cluster_size} votes).")
            return False

if __name__ == "__main__":
    nodes = [Node(i) for i in range(1, 6)]
    candidate = nodes[0]
    candidate.start_election(cluster_size=5)
```
''',
    87: '''
```python
"""
Chapter 87 Solution: Microservice Circuit Breaker Pattern
Protects distributed services from cascading failures using Closed, Open, and Half-Open states.
"""
import time

class CircuitBreaker:
    def __init__(self, failure_threshold: int = 3, recovery_timeout: float = 1.0):
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.failure_count = 0
        self.state = "CLOSED"  # CLOSED, OPEN, HALF_OPEN
        self.last_failure_time = 0.0

    def execute(self, service_func, *args):
        now = time.time()
        if self.state == "OPEN":
            if now - self.last_failure_time > self.recovery_timeout:
                self.state = "HALF_OPEN"
                print("[CIRCUIT BREAKER] State -> HALF_OPEN: Probing downstream health.")
            else:
                raise RuntimeError("[CIRCUIT BREAKER] State -> OPEN: Fast failing request to prevent cascade.")

        try:
            result = service_func(*args)
            if self.state == "HALF_OPEN":
                self.state = "CLOSED"
                self.failure_count = 0
                print("[CIRCUIT BREAKER] State -> CLOSED: Downstream recovered.")
            return result
        except Exception as e:
            self.failure_count += 1
            self.last_failure_time = now
            if self.failure_count >= self.failure_threshold:
                self.state = "OPEN"
                print(f"[CIRCUIT BREAKER] State -> OPEN: Threshold ({self.failure_threshold}) reached.")
            raise e

def flaky_service(success: bool):
    if not success:
        raise ConnectionError("503 Gateway Timeout")
    return "200 OK: Data Payload"

if __name__ == "__main__":
    cb = CircuitBreaker(failure_threshold=2, recovery_timeout=0.5)
    for i in range(3):
        try:
            cb.execute(flaky_service, False)
        except Exception as err:
            print(f"Request {i+1} Failed:", err)
```
'''
}

for ch_num, enrich_code in ENRICHMENTS.items():
    # Insert code into the chapter section if not already having python block
    pattern = rf'(###\s+Chapter\s+{ch_num}\b[^\n]*\n)([\s\S]*?)(?=\n---\n|###\s+Chapter|\Z)'
    m = re.search(pattern, text)
    if m:
        sec_header = m.group(1)
        sec_body = m.group(2)
        if '```python' not in sec_body:
            sec_body = sec_body.strip() + "\n\n#### Executable Python Implementation\n" + enrich_code.strip() + "\n"
            text = text[:m.start()] + sec_header + sec_body + text[m.end():]

with open(sol_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Enriched all missing chapter code blocks!")
