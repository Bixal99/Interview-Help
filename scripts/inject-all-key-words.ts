/**
 * Injects concise **Key words** tables into every CS.md lesson (all units).
 * Re-runnable: strips previous Key words blocks first.
 * Run: npx tsx scripts/inject-all-key-words.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { UNIT1_KEY_WORDS, type Row } from "./inject-unit1-key-words";

const META =
  /^(practice|lab|mini(?:\s|-)?(?:project|lab)|phase project|coding practice|implementation|visual(?:\s|-)?(?:lab|project|practice)|design(?:\s|-)?(?:exercise|project|practice)|refactoring lab|written(?:\s|-)?(?:practice|exercise)|diagram|trace|architecture|project |exploration|story )/i;

/** Curated overrides (Unit I fully curated). */
const CURATED: Record<string, Row[]> = { ...UNIT1_KEY_WORDS };

/** Short meanings keyed by normalized title fragment. */
const BANK: Record<string, string> = {
  parser: "Builds structure from tokens and checks **grammar**",
  linking: "Combining compiled pieces and resolving **symbols**",
  loading: "Mapping a program into memory at the **entry point**",
  lexer: "Splits source text into **tokens**",
  bytecode: "Portable intermediate instructions for a **VM**",
  jit: "Compiles hot code while the program **runs**",
  "source code": "Human-readable program text",
  "syntax semantics": "Grammar of the language vs what it **means**",
  files: "Named units of stored **data** on disk",
  folders: "Containers that **group** related files",
  "files folders": "How a computer **organizes** named storage on disk",
  "code editor ide": "Where you **write and edit** program source",
  "command line arguments": "Extra values given when you **start** a program",
  "environment variables": "Named values the OS/shell **passes** to programs",
  path: "Where the shell looks for **commands** to run",
  terminal: "A text interface for **running commands**",
  "running programs": "Starting code so the machine **executes** it",
  // Unit II
  "files folders": "How a computer **organizes** named storage on disk",
  files: "Named units of stored **data** on disk",
  folders: "Containers that **group** related files",
  "code editor ide": "Where you **write and edit** program source",
  "code editor": "An app for **writing** source code",
  ide: "Editor plus tools for **running and debugging** code",
  terminal: "A text interface for **running commands**",
  "running programs": "Starting code so the machine **executes** it",
  path: "Where the shell looks for **commands** to run",
  "environment variables": "Named values the OS/shell **passes** to programs",
  "command line arguments": "Extra values given when you **start** a program",
  variables: "Named places that hold **values** while a program runs",
  assignment: "Storing a value **into** a variable",
  "integers floats": "Whole numbers vs numbers with a **fractional** part",
  integers: "Whole numbers with **no** fractional part",
  floats: "Numbers that can include a **fractional** part",
  booleans: "Values that are only **true** or **false**",
  strings: "Text data made of a sequence of **characters**",
  operators: "Symbols that **combine or compare** values",
  "type conversion": "Changing a value from one **type** to another",
  mutability: "Whether a value can be **changed** after creation",
  "if else": "Choose which block runs based on a **condition**",
  "nested conditions": "Conditions **inside** other conditions",
  for: "Repeat work a known number of times (or over a **collection**)",
  while: "Repeat work **while** a condition stays true",
  "break continue": "Leave a loop early, or **skip** to the next pass",
  break: "Leave a loop **immediately**",
  continue: "Skip the rest of this loop pass and go to the **next**",
  "boolean conditions": "True/false tests that **control** if and loops",
  functions: "Reusable named blocks of **behavior**",
  parameters: "Inputs a function **receives** when called",
  "return values": "The result a function **sends back** to the caller",
  "local scope": "Names that exist only **inside** a function",
  "global scope": "Names visible across much of the **program**",
  "call stack intuition": "How nested function calls **stack** and unwind",
  "pure vs side effecting functions": "Pure returns a value only; side effects also **change** the world",
  "lists arrays": "Ordered collections of items accessed by **index**",
  lists: "Ordered, usually **mutable** collections of items",
  arrays: "Ordered collections of items by **index**",
  tuples: "Ordered collections that are typically **immutable**",
  dictionaries: "Collections of **key → value** pairs",
  sets: "Collections of **unique** items with no order guarantee",
  iteration: "Visiting items in a collection **one by one**",
  "nested collections": "Collections that contain **other** collections",
  "string processing": "Inspecting and transforming **text**",
  "reading files": "Loading file contents **into** a program",
  "writing files": "Saving program data **out** to a file",
  json: "A common text format for **structured** data",
  csv: "Tabular data stored as **comma-separated** text",
  paths: "Strings that locate a file or folder in the **filesystem**",
  "text vs binary files": "Human-readable text vs raw **byte** data",
  serialization: "Turning in-memory data into a form you can **store or send**",
  "syntax errors": "Code the language **rejects** before it runs",
  "runtime errors": "Failures that happen **while** the program runs",
  "logical bugs": "Code that runs but does the **wrong** thing",
  exceptions: "A structured way to **signal and handle** failures",
  "input validation": "Checking data is **acceptable** before using it",
  assertions: "Checks that must be true or the program **stops**",
  "fail fast": "Stop early when something is **wrong**",
  "reading error messages": "Using traceback text to find **where** it broke",
  "reproducing bugs": "Making a failure happen **again** on purpose",
  logging: "Recording what the program did for later **diagnosis**",
  breakpoints: "Pauses where a debugger lets you **inspect** state",
  "stack traces": "The chain of calls active when an error **occurred**",
  watches: "Debugger views that track an expression's **value**",
  "step into over out": "Debugger moves: enter a call, skip over it, or leave it",
  imports: "Bringing names from another module into **this** file",
  "multiple files": "Splitting a program across more than one **source** file",
  packages: "Grouped modules published or shared as a **unit**",
  dependencies: "Other packages your project **needs** to run",
  "virtual environments": "Isolated install areas for a project's **packages**",
  "package managers": "Tools that **install and update** dependencies",
  "semantic versioning": "Version numbers that signal **compatible** change",
  "lock files": "Pinned exact versions for **reproducible** installs",

  // Unit III
  sets: "Collections of distinct elements (math sense)",
  relations: "Links that hold between pairs of elements",
  logic: "Rules for valid true/false **reasoning**",
  quantifiers: "Words like **for all** and **there exists**",
  "propositional logic": "Logic built from whole true/false **statements**",
  "predicate logic": "Logic that talks about **properties** of objects",
  "direct proof": "Deriving the claim by a clear chain of **steps**",
  contradiction: "Proving a claim by showing its opposite is **impossible**",
  counterexamples: "One case that **disproves** a general claim",
  induction: "Prove for n=0 (or 1), then show n implies **n+1**",
  "proof by contrapositive": "Prove **not Q ⇒ not P** instead of P ⇒ Q",
  permutations: "Ordered arrangements of items",
  combinations: "Selections of items where **order does not** matter",
  probability: "How likely an outcome is, from **0 to 1**",
  "conditional probability": "Probability of A **given** that B happened",
  "expected value": "The long-run **average** outcome of a random process",
  "bayes theorem": "How to update probabilities when new **evidence** arrives",
  "mean median": "Average vs middle value of a dataset",
  mean: "The arithmetic **average** of values",
  median: "The middle value when data are **ordered**",
  variance: "How spread out values are around the **mean**",
  distributions: "How probability or frequency is **spread** across values",
  sampling: "Studying a subset to learn about a **whole** population",
  "standard deviation": "A common measure of **spread** (sqrt of variance)",
  correlation: "How two variables tend to **move together**",
  vectors: "Ordered lists of numbers with length and **direction**",
  matrices: "Rectangular grids of numbers used in **linear** maps",
  derivatives: "How fast a function's output **changes**",
  "dot products": "A number measuring how two vectors **align**",
  "matrix transformations": "Using matrices to **map** vectors to new vectors",
  gradients: "The direction of **steepest increase** of a function",

  // Unit IV OOP
  state: "Data an object **remembers** over time",
  behavior: "What an object can **do** (its methods)",
  entities: "Things in the problem that become **objects**",
  responsibilities: "Jobs one class or module should **own**",
  classes: "Blueprints that define an object's **data and behavior**",
  instances: "Concrete objects created from a **class**",
  constructors: "Special methods that **set up** a new instance",
  identity: "Whether two references point to the **same** object",
  equality: "Whether two objects are considered the **same value**",
  "public api": "The methods/fields callers are **allowed** to use",
  "internal state": "Private data that should stay **hidden**",
  invariants: "Facts that must stay true while an object is **valid**",
  interfaces: "Contracts of methods a type must **provide**",
  "information hiding": "Keeping internals private behind a **stable** surface",
  "is a": "Inheritance: one type **is a kind of** another",
  overriding: "A subclass replaces a parent **method**",
  "super": "Calling the **parent** version of a method",
  polymorphism: "Same call, different behavior based on **type**",
  "abstract classes interfaces": "Types that define contracts, not full **implementations**",
  "has a": "One object **contains** or uses another",
  association: "A general link between objects",
  aggregation: "A whole–part link where parts can **live alone**",
  composition: "A whole–part link where parts belong to the **whole**",
  delegation: "One object forwards work to **another**",
  "single responsibility principle": "A class should have one reason to **change**",
  "open closed principle": "Open for extension, closed for **modification**",
  "liskov substitution principle": "Subtypes must be usable **wherever** the parent is",
  "interface segregation principle": "Prefer small focused interfaces over **fat** ones",
  "dependency inversion principle": "Depend on abstractions, not **concrete** details",
  naming: "Clear names that reveal **intent**",
  duplication: "Repeated code that should often be **unified**",
  "long methods": "Functions that do too many steps in **one** place",
  "god objects": "Objects that know or do **too much**",
  coupling: "How tightly modules **depend** on each other",
  cohesion: "How closely a module's parts **belong** together",
  "code smells": "Warning signs that design may need **cleanup**",
  "refactoring safely": "Improving structure without changing **behavior**",
  factory: "Creates objects without exposing **construction** details",
  builder: "Builds complex objects **step by step**",
  adapter: "Makes one interface look like **another**",
  facade: "A simple front for a **complex** subsystem",
  decorator: "Adds behavior by wrapping another **object**",
  strategy: "Swap algorithms behind a shared **interface**",
  observer: "Notify listeners when something **changes**",
  "dependency injection": "Supplying collaborators from the **outside**",
  "repository pattern": "A collection-like API over **persistence**",
  requirements: "What the system must **achieve**",
  relationships: "How entities **connect**",
  uml: "Standard diagrams for software **structure and behavior**",
  "sequence diagrams": "Show messages between objects over **time**",
  "state diagrams": "Show how an object moves between **states**",

  // Unit V DSA
  "big o": "Upper-bound growth rate of time/space as input **grows**",
  "time complexity": "How runtime grows with **input size**",
  "space complexity": "How memory use grows with **input size**",
  "best average worst case": "Different input scenarios for measuring **cost**",
  "big omega": "Lower-bound growth rate of an algorithm's **cost**",
  "big theta": "Tight bound when upper and lower bounds **match**",
  "amortized analysis": "Average cost per operation over a **sequence**",
  "memory layout": "How items sit next to each other in **memory**",
  indexing: "Accessing an item by its **position**",
  "insertion deletion": "Adding or removing items from a **structure**",
  "dynamic arrays": "Arrays that **grow** as you append",
  "string representation": "How text is stored as a sequence of **units**",
  nodes: "Linked units that hold data and **links**",
  "singly linked lists": "Nodes with a link to the **next** node only",
  "doubly linked lists": "Nodes linked to both **previous and next**",
  "circular lists": "A list where the last node links back to the **first**",
  stack: "Last-in, first-out (**LIFO**) structure",
  queue: "First-in, first-out (**FIFO**) structure",
  deque: "A double-ended queue: add/remove at **both** ends",
  "priority queue intuition": "Always serve the **highest-priority** item next",
  "base case": "The smallest input a recursion can answer **directly**",
  "recursive case": "A step that calls the same problem on a **smaller** input",
  "call stack": "Frames for active function calls",
  "recursion trees": "A picture of recursive calls and their **sizes**",
  "tail recursion": "Recursion where the call is the **last** action",
  "hash functions": "Map keys to bucket numbers **deterministically**",
  "hash tables": "Key-value storage using a hash into **buckets**",
  collisions: "Two keys hashing to the **same** bucket",
  "load factor": "How full a hash table is (**items / buckets**)",
  chaining: "Store colliding keys in a **list** per bucket",
  "open addressing": "On collision, probe for another empty **slot**",
  "binary trees": "Trees where each node has at most **two** children",
  traversals: "Visiting every node in a defined **order**",
  "binary search trees": "Left < node < right ordering for fast **search**",
  "balanced tree intuition": "Keep height low so operations stay **fast**",
  "avl trees": "BSTs that rebalance to keep height **difference ≤ 1**",
  "red black tree intuition": "Color rules that keep BSTs roughly **balanced**",
  "min heap": "Parent is always ≤ its children",
  "max heap": "Parent is always ≥ its children",
  heapify: "Turn an array into a valid **heap**",
  "priority queues": "Always extract the best-priority item **next**",
  "bubble sort": "Repeatedly swap adjacent out-of-order **pairs**",
  "selection sort": "Repeatedly select the next **smallest** item",
  "insertion sort": "Insert each item into an already-sorted **prefix**",
  "merge sort": "Split, sort halves, then **merge**",
  "quick sort": "Partition around a pivot, then sort **sides**",
  "heap sort": "Sort by repeatedly extracting from a **heap**",
  "stable vs unstable sorting": "Whether equal keys keep their **relative** order",
  "comparison vs non comparison sorting": "Sorting by comparisons vs by **keys' structure**",
  "linear search": "Check items one by one until found",
  "binary search": "Halve a sorted range each step",
  "binary search on answer": "Binary-search a numeric answer space",
  "graph representation": "How edges/vertices are stored (lists or **matrix**)",
  bfs: "Breadth-first search — explore by **layers**",
  dfs: "Depth-first search — explore down a path **first**",
  "topological sort": "Order nodes so every edge goes **forward**",
  dijkstra: "Shortest paths from a source with **non-negative** weights",
  "connected components": "Maximal sets of mutually reachable **nodes**",
  "minimum spanning trees": "Cheapest set of edges connecting all **nodes**",
  kruskal: "MST by adding cheapest edges that avoid **cycles**",
  prim: "MST by growing a tree from a starting **node**",
  "two pointers": "Two indices that move through a structure **together**",
  "sliding window": "A moving subarray/substring that tracks a **range**",
  "prefix sum": "Precomputed running totals for fast **range** queries",
  "divide conquer": "Split a problem, solve parts, **combine**",
  "fast slow pointers": "Two speeds to find cycles or midpoints",
  "monotonic stack": "A stack kept sorted to answer next-greater style **queries**",
  "interval patterns": "Techniques for problems about overlapping **ranges**",
  "greedy choice": "Pick the locally best option hoping for a **global** win",
  "local vs global optimum": "Best nearby choice vs best overall **solution**",
  "decision trees": "Branching picture of choices in search/**backtracking**",
  "choose explore undo": "Backtracking: try, recurse, then **revert**",
  pruning: "Skip branches that cannot beat the **best** so far",
  "overlapping subproblems": "Subproblems that appear **many times**",
  "optimal substructure": "Best solution built from best **sub-solutions**",
  memoization: "Cache recursive results to avoid **recomputing**",
  tabulation: "Build DP answers bottom-up in a **table**",
  "state transition design": "Define DP state and how states **move**",
  "space optimization": "Reduce memory a DP table **needs**",
  tries: "Trees for storing strings by shared **prefixes**",
  "union find": "Track disjoint sets with fast **union/find**",
  "bloom filters": "Probabilistic set membership with **false positives**",
  "segment trees": "Trees for fast range queries and **updates**",
  "fenwick trees": "Binary indexed trees for prefix **sums**",
  preconditions: "What must be true **before** an algorithm runs",
  postconditions: "What must be true **after** it finishes",
  "loop invariants": "Facts true before/after each loop **iteration**",
  termination: "Proof the algorithm will **stop**",

  // Unit VI systems
  "instruction sets": "The vocabulary of operations a CPU can **run**",
  registers: "Tiny fast storage **inside** the CPU",
  "assembly intuition": "Human-readable labels for **machine** instructions",
  cache: "Fast memory holding recently used **data**",
  pipelining: "Overlapping stages of many instructions in **flight**",
  multicore: "Multiple CPU cores running work in **parallel**",
  "risc vs cisc": "Simple many-instruction vs complex fewer-instruction **ISAs**",
  "branch prediction": "Guessing which way a branch will **go**",
  "cache locality": "Using nearby/recent data so caches **hit**",
  "simd intuition": "One instruction operates on many data **lanes**",
  stack: "Call frames and locals — grows/shrinks with **calls**",
  heap: "Dynamically allocated longer-lived **objects**",
  "static global storage": "Data that lives for the whole **program**",
  "references pointers": "Values that **refer to** another location",
  "memory safety": "Preventing invalid reads/writes and **use-after-free**",
  "allocation deallocation": "Obtaining and releasing heap **memory**",
  "garbage collection": "Automatic reclaim of unreachable **objects**",
  "memory leaks": "Memory that is never freed though unused",
  "dangling pointers": "Pointers to memory that is no longer **valid**",
  "ownership borrowing intuition": "Who may free or mutate a value, and who may only **read**",
  grammars: "Rules that define a language's legal **forms**",
  lexing: "Splitting source text into **tokens**",
  parsing: "Building structure and checking **grammar**",
  ast: "Tree form of a program's nested **structure**",
  "type systems": "Rules about which values expressions may **have**",
  "runtime models": "How a language executes and manages **memory**",
  "regular languages": "Languages recognized by finite **automata**",
  "finite state machines": "Machines with finite states and **transitions**",
  "regular expressions": "Patterns that match strings in regular **languages**",
  "context free grammars": "Grammars powerful enough for typical **syntax**",
  "static vs dynamic typing": "Types checked before run vs during **run**",
  "intermediate representation": "Compiler's internal program form between **front/back** ends",
  "code generation": "Emitting machine or bytecode from an **IR**",
  "compiler optimization intuition": "Rewrites that keep meaning but improve **speed/size**",
  kernel: "Core OS code that manages hardware and **protection**",
  "system calls": "Controlled entries from user programs into the **kernel**",
  processes: "Running programs with their own **address space**",
  threads: "Concurrent paths of execution inside a **process**",
  scheduling: "Choosing which ready work runs **next**",
  "virtual memory": "Illusion of a private address space via **mapping**",
  filesystems: "OS organization of files and **directories**",
  "user mode vs kernel mode": "Restricted app mode vs privileged **OS** mode",
  paging: "Mapping memory in fixed-size **pages**",
  "page faults": "Traps when a needed page is not in **RAM**",
  "inter process communication": "How processes exchange data or **signals**",
  "context switching": "Saving/restoring CPU state when switching **tasks**",
  "race conditions": "Bugs from timing-dependent shared-state **access**",
  "critical sections": "Code that must not run concurrently on shared **data**",
  mutexes: "Locks allowing one thread into a critical **section**",
  semaphores: "Counters that control access to limited **resources**",
  deadlocks: "Cycles of waiting where no one can **proceed**",
  atomics: "Operations that complete as one **indivisible** step",
  "thread safety": "Correct behavior when many threads use the **same** code",
  "condition variables": "Wait/notify for a condition under a **lock**",
  "futures promises": "Handles for a result that will arrive **later**",
  "async programming": "Overlapping waiting work without blocking a **thread**",
  "file descriptors": "OS handles for open files/sockets/**pipes**",
  "process control": "Creating, waiting on, and ending **processes**",
  pipes: "Byte streams connecting process **output to input**",
  signals: "Async notifications the OS delivers to a **process**",
  sockets: "Endpoints for network (or local) **communication**",
  "memory mapped files": "Files that appear as bytes in **address space**",

  // Unit VII networking
  "osi tcp ip": "Layered models of how network protocols **stack**",
  mac: "Hardware address on a local network **interface**",
  ip: "Network-layer address for routing across **networks**",
  subnets: "Partitions of an IP network with a shared **prefix**",
  routers: "Devices that forward packets between **networks**",
  nat: "Rewrites addresses so many hosts share public **IPs**",
  ports: "Numbers that identify apps on a host for **transport**",
  ethernet: "Common LAN technology for framing and **access**",
  arp: "Maps IP addresses to MAC addresses on a **LAN**",
  dhcp: "Automatically assigns IP settings to **hosts**",
  firewalls: "Filters traffic by policy at a network **boundary**",
  "ipv4 vs ipv6": "32-bit vs 128-bit Internet addressing",
  "tcp handshake": "Three-way setup before reliable TCP **data**",
  reliability: "Detecting loss and ensuring delivery (TCP)",
  ordering: "Delivering bytes in the sent **sequence**",
  udp: "Fast datagrams without built-in **reliability**",
  "flow control": "Sender slows so receiver is not **overrun**",
  "congestion control": "Sender slows when the network is **busy**",
  domains: "Human-readable names for network **hosts**",
  resolution: "Turning a domain name into an **IP**",
  caching: "Remembering answers to avoid repeated **lookups**",
  "routing intuition": "Choosing paths packets take across the **Internet**",
  "dns records": "Typed DNS answers (A, AAAA, CNAME, MX, …)",
  "recursive vs authoritative dns": "Resolvers that chase answers vs servers that **own** zones",
  "request response": "Client asks; server answers",
  methods: "HTTP verbs like GET, POST, PUT, DELETE",
  headers: "Metadata sent with HTTP requests/**responses**",
  "status codes": "Numeric HTTP outcomes (200, 404, 500, …)",
  cookies: "Small data the browser stores and **sends back**",
  https: "HTTP over TLS for confidentiality and **integrity**",
  "http 1 1 vs http 2 vs http 3": "Successive HTTP versions with different **performance** trade-offs",
  "browser server lifecycle": "Steps from URL to rendered **page**",
  websockets: "Long-lived bidirectional channels over **HTTP upgrade**",
  rest: "API style centered on resources and HTTP **verbs**",
  resources: "Nouns an API exposes (users, orders, …)",
  crud: "Create, Read, Update, Delete operations",
  validation: "Checking request data before accepting it",
  pagination: "Returning large results in **pages**",
  filtering: "Narrowing results by query **criteria**",
  versioning: "Evolving an API without breaking old **clients**",
  idempotency: "Repeating a request has the same **effect**",
  authentication: "Proving who the caller **is**",
  authorization: "Deciding what the caller may **do**",
  "error models": "Consistent shapes for API **failures**",
  openapi: "A standard description of HTTP **APIs**",
  "graphql overview": "Clients query exactly the fields they **need**",
  "grpc overview": "RPC over HTTP/2 with typed **protobufs**",

  // Unit VIII databases
  "why databases exist": "Reliable shared storage beyond one **process**",
  dbms: "Software that manages databases",
  tables: "Named grids of rows and columns",
  "rows columns": "Records and fields in a relational **table**",
  keys: "Columns that identify or link **rows**",
  "relational vs non relational": "Tables/SQL vs document/kv/graph style **stores**",
  select: "Query rows from tables",
  insert: "Add new rows",
  update: "Change existing rows",
  delete: "Remove rows",
  join: "Combine rows from related **tables**",
  "group by": "Aggregate rows into **buckets**",
  cte: "Named temporary result sets in a **query**",
  subqueries: "Queries nested inside other **queries**",
  "window functions": "Calculations across related rows **without collapsing** them",
  transactions: "Groups of statements that commit or **roll back** together",
  "primary foreign keys": "Identity keys vs keys that **reference** other tables",
  constraints: "Rules the database **enforces**",
  normalization: "Structuring tables to reduce **redundancy**",
  "er diagrams": "Pictures of entities and their **relationships**",
  "denormalization trade offs": "Adding redundancy on purpose for **speed**",
  pages: "Fixed-size disk blocks databases read/**write**",
  "b trees": "Balanced trees used heavily for **indexes**",
  indexes: "Structures that speed lookups at write **cost**",
  "query plans": "The engine's chosen steps to run a **query**",
  "sequential vs index scan": "Read whole table vs use an **index**",
  "write ahead log": "Durable log of changes before data pages **update**",
  "buffer cache": "DBMS cache of pages in **memory**",
  acid: "Atomicity, Consistency, Isolation, **Durability**",
  isolation: "How concurrent transactions are kept **apart**",
  locks: "Mechanisms that serialize conflicting **access**",
  "dirty reads": "Seeing another transaction's uncommitted **data**",
  "non repeatable reads": "A row changes between your two **reads**",
  "phantom reads": "New matching rows appear between **queries**",
  mvcc: "Readers see snapshots without blocking **writers**",
  "connection pools": "Reuse DB connections instead of opening **new** ones",
  migrations: "Versioned schema changes",
  backups: "Copies used to restore after **loss**",
  replication: "Keeping copies of data on other **servers**",
  partitioning: "Splitting a table into pieces by a **key**",
  sharding: "Spreading data across many database **servers**",
  "read replicas": "Copies specialized for **read** traffic",
  failover: "Promoting a standby when a primary **fails**",
  "nosql models": "Document, key-value, wide-column, graph **stores**",

  // Unit IX security / HCI
  "confidentiality integrity availability": "The CIA triad of security **goals**",
  threats: "Potential causes of harm to a **system**",
  vulnerabilities: "Weaknesses an attacker can **exploit**",
  risk: "Likelihood × impact of a bad **outcome**",
  "least privilege": "Grant only the access needed for the **job**",
  "attack surface": "Places an attacker can try to **enter**",
  "defense in depth": "Multiple overlapping security **layers**",
  hashing: "One-way fingerprint of data",
  "symmetric encryption": "Same key encrypts and **decrypts**",
  "asymmetric encryption": "Public key encrypts; private key **decrypts**",
  signatures: "Proof a message came from a holder of a **key**",
  tls: "Crypto protocol securing network **connections**",
  salts: "Random data mixed into password **hashes**",
  "key derivation": "Turning passwords into strong **keys**",
  "certificates pki": "How public keys are bound to **identities**",
  "password hashing": "Storing passwords as slow salted **hashes**",
  sessions: "Server-side login state tied to a **client**",
  jwt: "Signed tokens carrying claims for **auth**",
  "oauth oidc": "Delegated login / identity **protocols**",
  mfa: "Requiring more than one authentication **factor**",
  rbac: "Permissions based on assigned **roles**",
  "abac overview": "Permissions based on attributes and **policies**",
  "access vs refresh tokens": "Short-lived access vs longer refresh **credentials**",
  "sql injection": "Attack that sneaks SQL through **input**",
  xss: "Injecting script into pages other users **see**",
  csrf: "Tricking a browser into unwanted **authenticated** requests",

  cors: "Browser rules for cross-origin HTTP **requests**",
  secrets: "Credentials that must stay **private**",
  "dependency security": "Keeping packages free of known **vulnerabilities**",
  "rate limiting": "Capping how often an action may **happen**",
  ssrf: "Tricking a server into fetching **internal** URLs",
  "path traversal": "Using ../ tricks to reach forbidden **files**",
  "broken access control": "Users can reach actions they should not **perform**",
  "secure headers": "HTTP headers that harden browser **behavior**",
  "owasp top 10": "A standard list of common web **risks**",
  usability: "How easy a product is to **use successfully**",
  feedback: "Clear signals about what the system is **doing**",
  accessibility: "Design so people with disabilities can **use** it",
  "error prevention": "Stopping mistakes before they **happen**",
  "information architecture": "How content and navigation are **organized**",
  "interaction design": "How people act and the system **responds**",
  "responsive design principles": "Layouts that work across screen **sizes**",
  pixels: "Smallest dots that make up a **raster** image",
  coordinates: "Numbers locating a point in a **space**",
  colors: "How hue/intensity are encoded for **display**",
  transformations: "Move, scale, or rotate geometry",
  "rendering pipeline": "Steps from scene data to **pixels**",
  "raster vs vector": "Pixel grids vs math shapes for **graphics**",
  repository: "A versioned project history (often a **Git** repo)",
  commit: "A saved snapshot in version **control**",
  branch: "A movable line of commits for parallel **work**",
  merge: "Combine histories from different **branches**",
  "pull request": "A proposed change set for **review**",
  "remote origin": "The shared copy of a repo on a **server**",
  rebase: "Replay commits onto another base **commit**",
  "merge conflicts": "Overlapping edits Git cannot auto-**combine**",
  "tags releases": "Named markers for shipped **versions**",
  gitignore: "Patterns of files Git should **ignore**",
  "functional requirements": "What the product must **do**",
  "non functional requirements": "How well it must do it (speed, security, …)",
  "user stories": "Short user-centered requirement **cards**",
  "acceptance criteria": "Checks that prove a story is **done**",
  stakeholders: "People affected by or invested in the **product**",
  constraints: "Hard limits on the **solution**",
  "scope scope creep": "Agreed work vs unplanned growth of **work**",
  "unit testing": "Tests of small pieces in **isolation**",
  "integration testing": "Tests of pieces working **together**",
  "end to end testing": "Tests of a full user journey through the **system**",
  "fakes mocks": "Stand-ins for dependencies in **tests**",
  "regression testing": "Re-running tests to catch broken old **behavior**",
  "test pyramid": "Many unit tests, fewer UI/E2E **tests**",
  "property based testing": "Generate many inputs that should keep **properties**",
  "performance testing": "Measuring speed/capacity under **load**",
  "test coverage": "How much code is exercised by **tests**",
  "separation of concerns": "Split distinct responsibilities into **parts**",
  layers: "Stacked tiers each with a clear **job**",
  "modular monolith": "One deployable with strong internal **modules**",
  "microservices trade offs": "Many small services vs operational **cost**",
  "client server architecture": "Clients request; servers **respond**",
  mvc: "Model–View–Controller separation of **UI** concerns",
  "hexagonal clean architecture intuition": "Core domain isolated from **adapters**",
  planning: "Deciding work order and **goals**",
  iteration: "Short cycles of build–learn–**adjust**",
  agile: "Adaptive delivery in small **increments**",
  "code review": "Peers inspect changes before **merge**",
  "technical debt": "Shortcuts that cost more later to **fix**",
  documentation: "Written knowledge others can **rely on**",
  "scrum kanban overview": "Common agile process **frameworks**",
  "issue tracking": "Tickets for bugs and planned **work**",
  estimation: "Rough sizing of effort or **time**",
  build: "Compile/package sources into **artifacts**",
  lint: "Static checks for style and simple **bugs**",
  test: "Automated checks that behavior still **holds**",
  package: "Bundle software for distribution",
  deploy: "Put a build into a live **environment**",
  rollback: "Revert to a previous known-good **release**",
  "build artifacts": "Outputs of a build ready to **ship**",
  environments: "Isolated stages like dev/stage/**prod**",
  "deployment strategies": "Patterns for releasing with less **risk**",
  docker: "Tooling to build and run **containers**",
  images: "Immutable filesystem snapshots for **containers**",
  containers: "Isolated processes with packaged **dependencies**",
  "reverse proxy": "A front server that forwards client **requests**",
  dockerfile: "Recipe for building a container **image**",
  volumes: "Persistent storage attached to **containers**",
  "container networking": "How containers reach each other and the **host**",
  "docker compose": "Declare multi-container apps in one **file**",
  "container registries": "Stores for publishing container **images**",
  "kubernetes orchestration overview": "Scheduling containers across a **cluster**",
  compute: "Processing capacity in the **cloud**",
  storage: "Durable data capacity (disks/objects)",
  networking: "Connectivity between cloud **resources**",
  "managed databases": "DB services operated by a **cloud** provider",
  iam: "Identity and access management for **cloud** resources",
  "regions availability zones": "Geographic and fault-isolated **placements**",
  autoscaling: "Add/remove capacity based on **load**",
  serverless: "Run code without managing **servers** yourself",
  "object storage": "Blob storage for files and large **objects**",
  "infrastructure as code": "Declare cloud resources in **versioned** files",
  "secrets management": "Store and rotate credentials **safely**",
  logs: "Timestamped event records from a **system**",
  metrics: "Numeric measurements over **time**",
  traces: "End-to-end timing of a request across **services**",
  alerts: "Notifications when a condition is **breached**",
  "root cause analysis": "Finding why an incident really **happened**",
  "health checks": "Probes that say whether a service is **ready**",
  dashboards: "Views that summarize live system **health**",
  "sli slo sla": "Indicators, objectives, and contractual **targets**",
  "incident response": "Coordinated handling of production **failures**",
  postmortems: "Blameless write-ups that prevent **repeats**",
  scale: "How load and data size the system must **handle**",
  latency: "Time until a response **arrives**",
  throughput: "Work completed per unit **time**",
  availability: "Fraction of time the system is **up**",
  "capacity estimation": "Rough math for storage, QPS, and **bandwidth**",
  reliability: "Continuing to work correctly under **stress**",
  durability: "Data surviving crashes and **failures**",
  "vertical scaling": "Make one machine **bigger**",
  "horizontal scaling": "Add more machines",
  "stateless services": "Servers that keep no sticky client **session** state",
  "load balancing": "Spread requests across many **servers**",
  "service discovery": "How clients find healthy service **instances**",
  "browser cache": "Pages/assets stored in the **browser**",
  cdn: "Edge servers that cache content near **users**",
  "application cache": "In-process or local service **cache**",
  "distributed cache": "Shared cache across many **servers**",
  "cache invalidation": "Removing or updating stale cached **data**",
  "cache aside": "App reads cache; on miss loads DB then **fills** cache",
  "write through": "Writes go to cache and store **together**",
  ttl: "Time-to-live before a cache entry **expires**",
  eviction: "Removing entries when a cache is **full**",
  queues: "Buffers that hold work for later **consumers**",
  producers: "Components that **enqueue** messages",
  consumers: "Components that **process** messages",
  "pub sub": "Publish once; many subscribers **receive**",
  events: "Facts that something **happened**",
  retries: "Trying a failed operation **again**",
  "dead letter queues": "Parking failed messages for later **inspection**",
  "message ordering": "Whether messages stay in send **order**",
  "at least once delivery": "May duplicate; must not silently **drop**",
  "idempotent consumers": "Processing the same message twice is **safe**",
  "partial failure": "Some nodes/network paths fail while others **work**",
  "network partitions": "Groups of nodes that cannot reach each **other**",
  "strong consistency": "All readers see the latest committed **write**",
  "eventual consistency": "Replicas converge if updates **stop**",
  cap: "Consistency, Availability, Partition-tolerance **trade-offs**",
  "leader election": "Choosing one node to coordinate **others**",
  quorums: "Majority (or weighted) agreement sets",
  "consensus intuition": "Agreeing on one value despite **failures**",
  "distributed locks": "Cross-node mutual exclusion",
  leases: "Time-bounded ownership of a **resource**",
  "raft intuition": "A practical consensus algorithm **family**",
  timeouts: "Give up waiting after a deadline",
  backoff: "Wait longer between successive **retries**",
  "circuit breakers": "Stop calling a failing dependency for a **while**",
  "graceful degradation": "Offer reduced service instead of total **outage**",
  bulkheads: "Isolate failures so one part cannot sink the **whole**",
  "api gateway": "Single entry that routes and polices API **traffic**",
  "machine learning": "Programs that improve from **data**",
  "neural networks": "Layered models inspired by **neurons**",
  "llm overview": "Large language models for text **tasks**",
  "supervised learning": "Learn from labeled **examples**",
  "unsupervised learning": "Find structure without **labels**",
  "training vs inference": "Fitting a model vs using it to **predict**",
  overfitting: "Memorizing training data; failing on **new** data",
  mobile: "Software for phones and **tablets**",
  "embedded iot": "Software in constrained devices and **sensors**",
  gpus: "Processors strong at parallel numeric **work**",
  "edge computing": "Compute near the data source / **user**",
  "cloud computing": "On-demand remote compute and **services**",
  privacy: "Control over personal **data**",
  bias: "Unfair skew in data or model **outcomes**",
  "intellectual property": "Legal rights over creations and **code**",
  sustainability: "Environmental cost of computing **choices**",
  "professional responsibility": "Ethical duties of practicing **engineers**",
  "open source licenses": "Rules for using and sharing **OSS**",
  "software licensing": "Legal terms for using a **product**",
  "responsible ai": "Building AI with safety and fairness in **mind**",
  "read before changing": "Understand existing code before **edits**",
  "trace execution": "Follow what runs for a given **input**",
  boundaries: "Clear edges between modules or **teams**",
  "small safe changes": "Tiny diffs that are easy to **verify**",
  "characterization tests": "Tests that lock in current **behavior**",
  "safe refactoring": "Restructure with tests as a **safety net**",
  "backward compatibility": "Old clients keep working after **change**",
  deprecation: "Marking old APIs for planned **removal**",
  "feature flags": "Toggle behavior without a full **redeploy**",
  "incremental migration": "Move systems in small safe **steps**",
  "dependency upgrades": "Updating libraries without breaking **apps**",
  readme: "First-stop project overview for **humans**",
  "design documents": "Written plans before large **builds**",
  "bug reports": "Clear descriptions that help fix **defects**",
  "pr descriptions": "Context for reviewers of a **change**",
  "architecture decision records": "Short records of significant design **choices**",
  "api documentation": "How callers should use an **API**",
  runbooks: "Step-by-step ops guides for **incidents**",
  "release notes": "What changed in a shipped **version**",
  problem: "The user pain the capstone must **solve**",
  architecture: "Major components and how they **connect**",
  "database design": "Schema that fits the product's **data**",
  milestones: "Checkpoints that prove **progress**",
  risks: "What could go wrong and how you **mitigate**",
  "trade offs": "Choices where gaining one thing costs **another**",
  backend: "Server-side logic and **data** handling",
  "ci cd": "Automated integrate, test, and **deploy**",
  observability: "Ability to understand a running **system**",
  "load testing": "Measuring behavior under heavy **traffic**",
  bottlenecks: "Limits that cap overall **performance**",
  "failure simulation": "Deliberately breaking parts to test **resilience**",
  "security review": "Looking for weaknesses before **release**",
  profiling: "Finding where time or memory is **spent**",
  clarify: "Ask questions until the problem is **clear**",
  examples: "Concrete cases that pin down **behavior**",
  "brute force": "A correct but simple first **approach**",
  optimize: "Improve a solution's **cost**",
  "complexity analysis": "State time/space growth of a **solution**",
  backtracking: "Try choices; undo when they **fail**",
  "dynamic programming": "Reuse overlapping subproblem **answers**",
  oop: "Organizing software around **objects**",
  "operating systems": "Software that manages hardware and **programs**",
  concurrency: "Multiple tasks making progress **together**",
  security: "Protecting systems and data from **harm**",
  "computer architecture": "How hardware executes **programs**",
  "programming languages": "Notations and runtimes for writing **software**",
  "class diagrams": "UML pictures of types and **links**",
  extensibility: "How easily new needs can be **added**",
  "failure modes": "Ways the system can break and **recover**",
  consistency: "How up-to-date replicas appear to **readers**",
  star: "Situation, Task, Action, Result story **shape**",
  "project stories": "Narrative evidence from real **work**",
  ownership: "Taking responsibility for an **outcome**",
  "technical decisions": "Why you chose one design over **another**",
  leadership: "Helping a group move toward a **goal**",
  ambiguity: "Acting usefully when requirements are **unclear**",
  "coding round": "Live problem-solving with an **interviewer**",
  "system design round": "Design a large system under **review**",
  "behavioral round": "Stories about how you work with **people**",
  bit: "One piece of information: **0 or 1**",
  byte: "Eight bits treated as one **unit**",
  binary: "Base-2 numbering with digits **0 and 1**",
  hexadecimal: "Base-16 shorthand (**one hex digit = 4 bits**)",
  cpu: "Central Processing Unit — executes **instructions**",
  ram: "Fast volatile working **memory**",
  compiler: "Translates source **before** it runs",
  interpreter: "Executes code **as it goes**",
  runtime: "The time when a program is **executing**",
  api: "An agreed way for software parts to **communicate**",
  process: "A running program with its own **memory**",
  thread: "One path of work inside a **process**",
  stack: "Last-in, first-out structure (also: call **frames**)",
};

function norm(value: string) {
  return value
    .toLowerCase()
    .replace(/[→←↔]/g, " ")
    .replace(/[^a-z0-9+]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function titleParts(title: string): string[] {
  return title
    .split(/\s*(?:\/|&|→|,|\||\bvs\b|\bv\b)\s*/i)
    .map((part) => part.replace(/\([^)]*\)/g, "").trim())
    .filter((part) => part.length > 1 && !META.test(part));
}

function extractShortDefs(markdown: string, limit: number): Row[] {
  const items: Row[] = [];
  const seen = new Set<string>();
  const push = (term: string, meaning: string) => {
    const cleanTerm = term.replace(/\s+/g, " ").trim();
    const cleanMeaning = meaning
      .replace(/\*\*([^*]+)\*\*/g, "**$1**")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\s+/g, " ")
      .replace(/\s*[.]*\s*$/, "")
      .trim();
    if (!cleanTerm || cleanTerm.length > 48 || cleanMeaning.length < 12 || cleanMeaning.length > 110) return;
    if (/^(chapter|why |what |how |try |learning|practice|note|example)/i.test(cleanTerm)) return;
    const key = cleanTerm.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    items.push([cleanTerm, cleanMeaning]);
  };

  const lines = markdown.split(/\r?\n/);
  let inFence = false;
  for (const line of lines) {
    if (items.length >= limit) break;
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const trimmed = line.trim();
    if (!trimmed || /^\*\*[A-Z0-9][^*]{0,60}:\*\*$/.test(trimmed)) continue;

    const listed =
      /^(?:\d+\.|[-*])\s+\*\*([^*]{2,40})\*\*\s*[-–—:]\s*(.+)$/.exec(trimmed) ??
      /^\*\*([^*]{2,40})\*\*\s*[-–—:]\s*(.+)$/.exec(trimmed);
    if (listed) {
      push(listed[1]!, listed[2]!.split(/(?<=[.!?])\s/)[0] ?? listed[2]!);
      continue;
    }

    const defined =
      /(?:^|[.]\s+)(?:[Aa]n?\s+)?\*\*([^*]{2,40})\*\*\s+(?:is|are|means)\s+(.+)$/i.exec(trimmed);
    if (defined) {
      push(defined[1]!, defined[2]!.split(/(?<=[.!?])\s/)[0] ?? defined[2]!);
    }
  }
  return items;
}

function rowsForLesson(id: string, title: string, body: string): Row[] {
  if (CURATED[id]) return CURATED[id]!;

  const rows: Row[] = [];
  const seen = new Set<string>();
  const add = (term: string, meaning: string) => {
    const key = term.toLowerCase();
    if (seen.has(key) || rows.length >= 5) return;
    seen.add(key);
    rows.push([term, meaning]);
  };

  for (const [term, meaning] of extractShortDefs(body, 5)) {
    add(term, meaning);
  }

  const full = norm(title);
  if (BANK[full]) add(titleParts(title)[0] ?? title, BANK[full]!);

  for (const part of titleParts(title)) {
    const key = norm(part);
    if (BANK[key]) add(part, BANK[key]!);
  }

  if (!rows.length) {
    for (const part of titleParts(title)) {
      add(part, `Short review term from lesson **${id}**`);
    }
  }
  if (!rows.length) {
    add(title, `Short review term from lesson **${id}**`);
  }
  return rows.slice(0, 5);
}

function formatTable(rows: Row[]) {
  return [
    "",
    "**Key words**",
    "",
    "| Word | Meaning |",
    "| ---- | ------- |",
    ...rows.map(([term, meaning]) => `| **${term}** | ${meaning} |`),
    "",
    "",
  ].join("\n");
}

function main() {
  const path = resolve("content/roadmaps/CS.md");
  let text = readFileSync(path, "utf8");

  text = text.replace(
    /\n\*\*Key words\*\*\n\n\| Word \| Meaning \|\n\| ---- \| ------- \|\n(?:\| \*\*[^*]+\*\* \|[^\n]+\n)+/g,
    "\n",
  );

  const headingRe = /^## (\d+\.\d+)\s+(.+)$/gm;
  const matches: { id: string; title: string; index: number; headingLen: number }[] = [];
  for (const match of text.matchAll(headingRe)) {
    matches.push({
      id: match[1]!,
      title: match[2]!.trim(),
      index: match.index!,
      headingLen: match[0].length,
    });
  }

  let injected = 0;
  let skipped = 0;
  // Insert from the end so earlier indexes stay valid.
  for (let i = matches.length - 1; i >= 0; i -= 1) {
    const lesson = matches[i]!;
    if (META.test(lesson.title)) {
      skipped += 1;
      continue;
    }
    const bodyStart = lesson.index + lesson.headingLen;
    const next = matches[i + 1];
    const bodyEnd = next ? next.index : text.search(/\n# PHASE |\n---\s*\n# PHASE /);
    const end = bodyEnd > bodyStart ? bodyEnd : text.length;
    // Prefer ending at next ## or # heading if closer.
    const rest = text.slice(bodyStart);
    const boundary = /^(?:## |\n# )/m.exec(rest);
    const insertAt = boundary?.index !== undefined ? bodyStart + boundary.index : end;
    const body = text.slice(bodyStart, insertAt);
    const rows = rowsForLesson(lesson.id, lesson.title, body);
    text = text.slice(0, insertAt) + formatTable(rows) + text.slice(insertAt);
    injected += 1;
  }

  writeFileSync(path, text);
  console.log(`Injected Key words for ${injected} lessons (skipped ${skipped} practice/lab lessons).`);
}

main();
