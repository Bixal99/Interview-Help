#!/usr/bin/env tsx
import fs from "node:fs";
import path from "node:path";

type Resource = {
  type: string;
  title: string;
  description: string;
  url: string;
  source?: string;
  channel?: string;
  videoId?: string;
  thumbnail?: string;
  embedSupported?: boolean;
  difficulty?: string;
};

function video(title: string, description: string, videoId: string, channel: string, source = "YouTube"): Resource {
  return {
    type: "video",
    title,
    description,
    url: `https://www.youtube.com/watch?v=${videoId}`,
    source,
    channel,
    videoId,
    thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    embedSupported: true,
    difficulty: "beginner",
  };
}

function link(type: string, title: string, description: string, url: string, source: string): Resource {
  return { type, title, description, url, source, difficulty: "beginner" };
}

const cs: Record<string, Resource[]> = {
  "2.8": [
    video("Little and Big-Endian, Explained", "How byte order affects multi-byte values in memory.", "oiL87U5WKsw", "Harry Wu"),
    link("interactive", "Endianness Converter", "Flip between big- and little-endian representations.", "https://www.scadacore.com/tools/programming-calculators/online-hex-converter/", "SCADAcore"),
  ],
  "4.8": [
    video("How Computers Work: CPU, Memory, Input & Output", "Khan-style walkthrough of I/O alongside CPU and memory.", "DKGZlaPlVLY", "Khan Academy"),
    video("Input Devices: Crash Course Games #24", "Controllers and human input mapped to machine signals.", "rR_mmsfIzzs", "CrashCourse", "Crash Course"),
  ],
  "5.8": [
    video("Parsing Explained", "Why grammars matter and how parsers read structured text.", "bxpc9Pp5pZM", "Computerphile"),
    video("Parsing Bottom Up", "Alternative parsing strategy with concrete examples.", "tH5AOX9929g", "Computerphile"),
    link("github", "Nearley parser toolkit", "Practical parser generator for experimenting with grammars.", "https://github.com/kach/nearley", "GitHub"),
  ],
  "11.8": [
    video("Serialization formats: JSON and Protobuf", "How programs exchange structured data on the wire.", "uGYZn6xk-hA", "Ivan talks about computers"),
    video("What is JSON?", "Quick JSON primer for configs and APIs.", "cj3h3Fb10QY", "Hostinger Academy"),
    link("documentation", "JSON specification", "Official reference for valid JSON syntax.", "https://www.json.org/json-en.html", "JSON.org"),
  ],
  "14.8": [
    video("Shared Exclusive Locking Protocol", "How databases coordinate concurrent access with locks.", "94C0V7f2zm4", "Gate Smashers"),
    link("documentation", "Python fcntl module", "File locking on Unix-like systems for scripts and tools.", "https://docs.python.org/3/library/fcntl.html", "Python Docs"),
  ],
  "17.1": [
    video("Direct Proofs — Discrete Mathematics", "Building proofs step-by-step from assumptions.", "YFZzLQN5qOU", "TrevTutor"),
    video("Direct Proofs Examples", "Worked examples including divisibility proofs.", "uDJfx4bK3Jc", "TrevTutor"),
  ],
  "17.2": [
    video("Proof by Contradiction — Prime Numbers", "Visual proof that primes are infinite.", "4NUlubBrmFY", "The Visual Engineer"),
    video("Discrete Math Proofs in 22 Minutes", "Survey of proof styles including contradiction.", "HIkIqt_ytdc", "TrevTutor"),
  ],
  "17.3": [
    video("Disproving Implications with Counterexamples", "When one counterexample kills a false claim.", "TcfVpnRRAvk", "Dr. Trefor Bazett"),
  ],
  "17.4": [
    video("What Does Mathematical Induction Really Look Like?", "Intuitive domino-style explanation of induction.", "5Hn8vUE3cBQ", "Zach Star"),
    video("The Magic of Induction", "Numberphile take on why induction works.", "DhZORrqL3xI", "Numberphile"),
  ],
  "17.5": [
    video("Proof by Contraposition — Discrete Mathematics", "Prove the contrapositive instead of the original statement.", "X-hJ7krLBn0", "TrevTutor"),
    video("Proof by Contrapositive | Method & First Example", "Clear first example with logical equivalence.", "0YqZIHFmVzg", "Dr. Trefor Bazett"),
  ],
  "18.1": [
    video("Permutations and Combinations Tutorial", "When order matters vs when it does not.", "XJnIdRXUi7A", "The Organic Chemistry Tutor"),
  ],
  "18.2": [
    video("Permutations and Combinations Tutorial", "Combination counting with worked problems.", "XJnIdRXUi7A", "The Organic Chemistry Tutor"),
    link("interactive", "Combinatorics practice", "Interactive counting problems with instant checks.", "https://brilliant.org/courses/combinatorics/", "Brilliant"),
  ],
  "18.3": [
    video("Math Antics — Basic Probability", "Foundational probability with clear visuals.", "KzfWUEJjG18", "mathantics"),
    video("Probability Explained | Khan Academy", "Independent and dependent events.", "uzkc-qNVoOk", "Khan Academy"),
  ],
  "18.4": [
    video("Probability Explained | Khan Academy", "Conditional probability with tree diagrams.", "uzkc-qNVoOk", "Khan Academy"),
  ],
  "18.5": [
    video("Finding Probability Example | Khan Academy", "Expected value intuition through worked examples.", "yUaI0JriZtY", "Khan Academy"),
  ],
  "18.6": [
    video("Bayes Theorem, the Geometry of Changing Beliefs", "3Blue1Brown visual proof of Bayes' rule.", "HZGCoVF3YvM", "3Blue1Brown"),
    video("The Quick Proof of Bayes' Theorem", "Short companion clip for the main video.", "U_85TaXbeIo", "3Blue1Brown"),
  ],
  "19.1": [
    video("Descriptive Statistics: Mean, Median, Mode, Variance & SD", "Full tutorial on central tendency and spread.", "SplCk-t1BeA", "Grad Coach"),
  ],
  "19.3": [
    video("Descriptive Statistics Tutorial", "How distributions summarize datasets.", "SplCk-t1BeA", "Grad Coach"),
    link("interactive", "Seeing Theory", "Beautiful interactive visualizations of probability distributions.", "https://seeing-theory.brown.edu/", "Brown University"),
  ],
  "19.4": [
    video("Cross Validation", "Why train/validation splits matter for honest evaluation.", "fSytzGwwBVw", "StatQuest"),
  ],
  "19.5": [
    video("Standard Deviation Formula", "Population vs sample variance explained clearly.", "Uk98hiMQgN0", "The Organic Chemistry Tutor"),
  ],
  "19.6": [
    video("Descriptive Statistics Tutorial", "Correlation vs causation and scatter relationships.", "SplCk-t1BeA", "Grad Coach"),
  ],
  "20.1": [
    video("Vectors | Essence of Linear Algebra", "Visual introduction to vectors as arrows in space.", "fNk_zzaMoSs", "3Blue1Brown"),
  ],
  "20.2": [
    video("Linear Transformations and Matrices", "Matrices as transformations of space.", "kYB8IZa5AuE", "3Blue1Brown"),
  ],
  "20.3": [
    video("Inverse Matrices, Column Space and Null Space", "Functions between vector spaces.", "uQhTuRlWMxw", "3Blue1Brown"),
  ],
  "20.4": [
    video("Gradient Descent in 3 Minutes", "Derivatives as slopes driving optimization.", "qg4PchTECck", "Visually Explained"),
    link("interactive", "Desmos Graphing Calculator", "Plot functions and inspect slopes interactively.", "https://www.desmos.com/calculator", "Desmos"),
  ],
  "20.5": [
    video("Vectors | Essence of Linear Algebra", "Dot products as projection and similarity.", "fNk_zzaMoSs", "3Blue1Brown"),
  ],
  "20.7": [
    video("Gradients and Partial Derivatives", "3D visualization of gradient vectors.", "GkB4vW16QHI", "Physics Videos by Eugene Khutoryansky"),
    video("Gradient Descent in 3 Minutes", "How gradients guide machine-learning updates.", "qg4PchTECck", "Visually Explained"),
  ],
  "21.2": [
    video("Fundamental Concepts of Object Oriented Programming", "Behavior, abstraction, and encapsulation overview.", "m_MQYyJpIjg", "Computer Science Lessons"),
  ],
  "21.3": [
    video("Intro to Object Oriented Programming — Crash Course", "Entities as objects with state and behavior.", "SiBw7os-_zI", "freeCodeCamp.org"),
  ],
  "21.4": [
    video("Object-Oriented Programming, Simplified", "Responsibilities split across encapsulated objects.", "pTB0EiLXUC8", "Programming with Mosh"),
  ],
  "22.1": [
    video("Intro to Object Oriented Programming — Crash Course", "Classes as blueprints for objects.", "SiBw7os-_zI", "freeCodeCamp.org"),
  ],
  "22.2": [
    video("Python OOP — Full Course for Beginners", "Creating and using class instances.", "iLRZi0Gu8Go", "freeCodeCamp.org"),
  ],
  "22.3": [
    video("Python OOP — Full Course for Beginners", "Constructors and initialization patterns.", "iLRZi0Gu8Go", "freeCodeCamp.org"),
  ],
  "22.4": [
    video("Object-Oriented Programming, Simplified", "Object identity vs references.", "pTB0EiLXUC8", "Programming with Mosh"),
  ],
  "22.5": [
    video("Object-Oriented Programming, Simplified", "Equality vs identity in OOP languages.", "pTB0EiLXUC8", "Programming with Mosh"),
  ],
  "23.1": [
    video("Abstraction vs Encapsulation", "Public APIs hiding internal details.", "57SIpmA3vcg", "Biz of Tech"),
  ],
  "23.2": [
    video("Object-Oriented Programming, Simplified", "Internal state guarded by methods.", "pTB0EiLXUC8", "Programming with Mosh"),
  ],
  "23.3": [
    video("Fundamental Concepts of Object Oriented Programming", "Invariants that must hold after every method.", "m_MQYyJpIjg", "Computer Science Lessons"),
  ],
  "23.4": [
    video("Object-Oriented Programming, Simplified", "Interfaces as contracts between components.", "pTB0EiLXUC8", "Programming with Mosh"),
  ],
  "24.1": [
    video("Object-Oriented Programming (OOP) | Animated", "is-a relationships through inheritance.", "RJUIcFfUPKs", "codechips"),
  ],
  "24.2": [
    video("Object-Oriented Programming, Simplified", "Method overriding in subclasses.", "pTB0EiLXUC8", "Programming with Mosh"),
  ],
  "24.3": [
    video("Python OOP — Full Course for Beginners", "Calling parent constructors with super().", "iLRZi0Gu8Go", "freeCodeCamp.org"),
  ],
  "24.4": [
    video("Object-Oriented Programming, Simplified", "Polymorphism and dynamic dispatch.", "pTB0EiLXUC8", "Programming with Mosh"),
  ],
  "24.5": [
    video("Object-Oriented Programming, Simplified", "Abstract classes and interface patterns.", "pTB0EiLXUC8", "Programming with Mosh"),
  ],
  "25.1": [
    video("Composition over Inheritance Explained", "has-a relationships with real analogies.", "HNzP1aLAffM", "Metaphorically Speaking"),
  ],
  "25.2": [
    video("The Flaws of Inheritance", "Association between loosely coupled objects.", "hxGOiiR9ZKg", "CodeAesthetic"),
  ],
  "25.3": [
    video("Inheritance vs Composition", "Aggregation without strong ownership.", "EqHX7DAL0Jk", "Machine tired of learning"),
  ],
  "25.4": [
    video("The Flaws of Inheritance", "Composition for stronger encapsulation.", "hxGOiiR9ZKg", "CodeAesthetic"),
  ],
  "25.5": [
    video("Inheritance vs Composition", "Delegation as forwarding behavior.", "EqHX7DAL0Jk", "Machine tired of learning"),
  ],
  "26.1": [
    video("SOLID Principles Explained", "Single Responsibility — one reason to change.", "V3TUEeB0kW0", "Awesome"),
  ],
  "26.2": [
    video("SOLID Principles: Do You Really Understand Them?", "Open/closed without modifying existing code.", "kF7rQmSRlq0", "Alex Hyett"),
  ],
  "26.3": [
    video("SOLID Principles Explained", "Liskov substitution and safe subtypes.", "V3TUEeB0kW0", "Awesome"),
  ],
  "26.4": [
    video("SOLID Principles: Do You Really Understand Them?", "Interface segregation for focused APIs.", "kF7rQmSRlq0", "Alex Hyett"),
  ],
  "26.5": [
    video("SOLID Principles Explained", "Dependency inversion and abstractions.", "V3TUEeB0kW0", "Awesome"),
  ],
  "27.1": [
    video("JavaScript Clean Code Course", "Naming that reveals intent.", "626BcUO84og", "freeCodeCamp.org"),
  ],
  "27.2": [
    video("Code Smells & Refactoring Techniques", "Removing duplication safely.", "FHWwtpsKGMM", "programmerCave"),
  ],
  "27.3": [
    video("A Few Common Code Smells", "Splitting long methods into focused units.", "KGsnhdcBvd0", "The Shaggy Dev"),
  ],
  "27.4": [
    video("Code Smells & Refactoring Techniques", "Breaking up god objects.", "FHWwtpsKGMM", "programmerCave"),
  ],
  "27.5": [
    video("Code Smells & Refactoring Techniques", "Reducing tight coupling between modules.", "FHWwtpsKGMM", "programmerCave"),
  ],
  "27.6": [
    video("A Few Common Code Smells", "Grouping related behavior for cohesion.", "KGsnhdcBvd0", "The Shaggy Dev"),
  ],
  "27.7": [
    video("A Few Common Code Smells", "Catalog of smells and how to fix them.", "KGsnhdcBvd0", "The Shaggy Dev"),
  ],
  "27.8": [
    video("JavaScript Clean Code Course", "Refactoring in small, tested steps.", "626BcUO84og", "freeCodeCamp.org"),
    link("github", "Refactoring catalog (Martin Fowler)", "Canonical reference for safe refactorings.", "https://github.com/wycats/artifice", "GitHub"),
  ],
  "28.1": [
    video("10 Design Patterns Explained in 10 Minutes", "Factory pattern overview.", "tv-_1er1mWI", "Fireship"),
  ],
  "28.2": [
    video("10 Design Patterns Explained in 10 Minutes", "Builder pattern for complex objects.", "tv-_1er1mWI", "Fireship"),
  ],
  "28.3": [
    video("10 Design Patterns Explained in 10 Minutes", "Adapter for incompatible interfaces.", "tv-_1er1mWI", "Fireship"),
  ],
  "28.4": [
    video("10 Design Patterns Explained in 10 Minutes", "Facade simplifying subsystems.", "tv-_1er1mWI", "Fireship"),
  ],
  "28.5": [
    video("10 Design Patterns Explained in 10 Minutes", "Decorator for extending behavior.", "tv-_1er1mWI", "Fireship"),
  ],
  "28.6": [
    video("Strategy Pattern, The Best Software Design Pattern", "Swapping algorithms at runtime.", "E9-4uaoncVY", "Jono Williams"),
  ],
  "28.7": [
    video("Design Patterns: Factory, Observer, Strategy", "Observer for event-driven updates.", "NP7RmrHn1Q0", "ByteMonk"),
  ],
  "28.8": [
    video("10 Design Patterns Explained in 10 Minutes", "Dependency injection basics.", "tv-_1er1mWI", "Fireship"),
  ],
  "28.9": [
    video("Design Patterns in Java Every Developer Should Know", "Repository pattern for data access.", "NP7RmrHn1Q0", "ByteMonk"),
    link("github", "Design patterns in Python", "Readable pattern examples to study and adapt.", "https://github.com/faif/python-patterns", "GitHub"),
  ],
  "29.1": [
    video("UML Class Diagrams", "Capturing requirements as model elements.", "6XrL5jXmTwM", "Lucid Software"),
  ],
  "29.2": [
    video("UML Class Diagrams", "Entity modeling with classes and attributes.", "6XrL5jXmTwM", "Lucid Software"),
  ],
  "29.3": [
    video("UML Class Diagrams", "Relationships: association, aggregation, composition.", "6XrL5jXmTwM", "Lucid Software"),
  ],
  "29.4": [
    video("UML Class Diagrams", "Interfaces on class diagrams.", "6XrL5jXmTwM", "Lucid Software"),
  ],
  "29.5": [
    video("UML Class Diagrams", "Full UML class diagram walkthrough.", "6XrL5jXmTwM", "Lucid Software"),
    link("tool", "PlantUML online editor", "Text-to-diagram UML for quick iteration.", "https://www.plantuml.com/plantuml/uml/", "PlantUML"),
  ],
  "29.6": [
    video("UML Sequence Diagrams — Georgia Tech", "Sequence diagrams for object interactions.", "XIQKt5Bs7II", "Udacity"),
    video("How to Make a UML Sequence Diagram", "Step-by-step sequence diagram tutorial.", "pCK6prSq8aw", "Lucid Software"),
  ],
  "29.7": [
    video("UML Behavioral Diagrams — Sequence", "State machines and behavioral modeling intro.", "XIQKt5Bs7II", "Udacity"),
  ],
};

const ai: Record<string, Resource[]> = {
  "1.2": [
    video("Cross Validation", "Train/validation/test splits for honest generalization.", "fSytzGwwBVw", "StatQuest"),
    video("Underfitting & Overfitting Explained", "Why held-out data reveals true performance.", "o3DztvnfAJg", "NStatum"),
  ],
  "3.2": [
    video("Pandas in 10 Minutes", "Quick pandas tour for exploratory analysis.", "dcqPhpY7Bbw", "Data School"),
    link("documentation", "Pandas documentation", "Official docs for DataFrame operations and plotting.", "https://pandas.pydata.org/docs/", "Pandas"),
  ],
  "4.1": [
    video("Gradient Descent in 3 Minutes", "Linear regression as loss minimization.", "qg4PchTECck", "Visually Explained"),
    video("Gradient Descent, How Neural Networks Learn", "Loss landscapes and weight updates.", "IHZwWFHWa-w", "3Blue1Brown"),
  ],
  "4.2": [
    video("StatQuest: Logistic Regression", "Decision boundaries and sigmoid outputs.", "yIYuk4Z7YQ4", "StatQuest"),
  ],
  "5.1": [
    video("StatQuest: ROC and AUC", "Metrics beyond accuracy for imbalanced data.", "4jRBRbJLspY", "StatQuest"),
  ],
  "5.2": [
    video("Cross Validation", "K-fold validation and variance estimation.", "fSytzGwwBVw", "StatQuest"),
    video("Underfitting & Overfitting Explained", "Bias-variance tradeoff intuition.", "o3DztvnfAJg", "NStatum"),
  ],
  "6.1": [
    video("Decision and Classification Trees, Clearly Explained", "How trees split features.", "_L39rN6gz7Y", "StatQuest"),
    video("What is Random Forest?", "Ensemble of trees for robust predictions.", "gkXX4h3qYm4", "IBM Technology"),
  ],
  "6.2": [
    video("Decision Trees, Random Forests and Gradient Boosting", "Boosting vs bagging comparison.", "uV2gdNt2MLc", "Leon Lok"),
  ],
  "7.2": [
    video("Underfitting & Overfitting Explained", "Regularization and early stopping context.", "o3DztvnfAJg", "NStatum"),
    link("documentation", "Scikit-learn regularization", "Dropout equivalents and penalty terms in classical ML.", "https://scikit-learn.org/stable/modules/linear_model.html", "scikit-learn"),
  ],
  "9.2": [
    video("Gradient Descent, How Neural Networks Learn", "Training loops and debugging loss curves.", "IHZwWFHWa-w", "3Blue1Brown"),
    link("github", "PyTorch tutorials", "Official examples for datasets and training loops.", "https://github.com/pytorch/tutorials", "GitHub"),
  ],
  "11.1": [
    video("Recurrent Neural Networks (RNNs), Clearly Explained", "State carried across time steps.", "AsNTP8Kwu80", "StatQuest"),
  ],
  "12.2": [
    video("Attention in Transformers, Step-by-Step", "Similarity and retrieval in vector spaces.", "eMlx5fFNoYc", "3Blue1Brown"),
  ],
  "14.2": [
    video("Illustrated Guide to Transformers", "Prompting patterns via attention mechanics.", "4Bdc55j80l8", "The AI Hacker"),
    link("documentation", "OpenAI prompt engineering guide", "Patterns and failure modes for LLM prompts.", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
  ],
  "16.2": [
    link("article", "RLHF explained (Hugging Face)", "Preferences, alignment, and safety trade-offs.", "https://huggingface.co/blog/rlhf", "Hugging Face"),
    video("Attention in Transformers, Step-by-Step", "Foundation for preference modeling in LLMs.", "eMlx5fFNoYc", "3Blue1Brown"),
  ],
  "17.2": [
    link("documentation", "LangGraph docs", "Memory, graphs, and human-in-the-loop agents.", "https://langchain-ai.github.io/langgraph/", "LangChain"),
    link("github", "LangGraph examples", "Reference agent workflows with memory.", "https://github.com/langchain-ai/langgraph", "GitHub"),
  ],
  "19.2": [
    link("documentation", "ML reproducibility checklist", "Versioning data, code, and environment.", "https://ml-ops.org/content/reproducible-ml", "MLOps Community"),
    link("github", "DVC — Data Version Control", "Track datasets and experiments reproducibly.", "https://github.com/iterative/dvc", "GitHub"),
  ],
  "20.1": [
    video("Cross Validation", "Core ML drill: splits and metrics.", "fSytzGwwBVw", "StatQuest"),
    video("Decision and Classification Trees, Clearly Explained", "Explain-like-production tree models.", "_L39rN6gz7Y", "StatQuest"),
  ],
  "20.2": [
    video("Illustrated Guide to Transformers", "LLM system design building blocks.", "4Bdc55j80l8", "The AI Hacker"),
    link("documentation", "OpenAI API docs", "Production LLM integration patterns.", "https://platform.openai.com/docs/", "OpenAI"),
  ],
};

const networks: Record<string, Resource[]> = {
  "15.2": [
    video("What is TCP/IP?", "Layered debugging starts with the stack.", "PpsEaqJV_A0", "Techquickie"),
    video("TCP/IP and OSI — Best Explanation", "Where to look when packets misbehave.", "3b_TAYtzuho", "_Drunk Engineer_"),
    link("tool", "Wireshark", "Capture and inspect packets layer by layer.", "https://www.wireshark.org/", "Wireshark"),
  ],
  "16.2": [
    video("What is TCP/IP?", "TCP retries and Wi-Fi interference context.", "PpsEaqJV_A0", "Techquickie"),
    link("documentation", "TCP congestion control (RFC 5681)", "How TCP responds to loss on noisy links.", "https://datatracker.ietf.org/doc/html/rfc5681", "IETF"),
  ],
  "18.2": [
    link("documentation", "Resource Public Key Infrastructure (RPKI)", "Why route origin validation matters.", "https://www.rfc-editor.org/rfc/rfc6480", "IETF"),
    video("SSL, TLS, HTTPS Explained", "Trust chains related to routing security.", "j9QmMEWmcfo", "ByteByteGo"),
  ],
  "20.1": [
    video("What is TCP/IP?", "URL-to-packet walkthrough foundation.", "PpsEaqJV_A0", "Techquickie"),
    link("tool", "DNS lookup (Google)", "Trace DNS resolution for any hostname.", "https://dns.google/", "Google"),
  ],
  "20.2": [
    video("SSL, TLS, HTTPS Explained", "Debugging stories around TLS handshakes.", "j9QmMEWmcfo", "ByteByteGo"),
    link("github", "Computer Networking: A Top-Down Approach resources", "Supplemental exercises and wireshark labs.", "https://github.com/csg-knu/Computer-Networking-A-Top-Down-Approach", "GitHub"),
  ],
};

const cybersecurity: Record<string, Resource[]> = {
  "3.2": [
    link("documentation", "Microsoft Windows Internals", "Official deep-dive for investigating Windows systems.", "https://learn.microsoft.com/en-us/sysinternals/learn/windows-internals", "Microsoft"),
    video("SSL, TLS, HTTPS Explained", "Security context for OS-level investigation.", "j9QmMEWmcfo", "ByteByteGo"),
  ],
  "4.2": [
    video("TLS / SSL — The Complete Sequence", "Certificates and trust chains step-by-step.", "LJDsdSh1CYM", "Practical Networking"),
    video("SSL/TLS Explained in 7 Minutes", "Quick visual overview of HTTPS.", "67Kfsmy_frM", "Sematext"),
  ],
  "8.1": [
    video("What is TCP/IP?", "Firewalls sit at network boundaries.", "PpsEaqJV_A0", "Techquickie"),
    link("documentation", "NIST firewall guidelines", "IDS/IPS and VPN placement reference.", "https://csrc.nist.gov/publications/detail/sp/800-41/rev-1/final", "NIST"),
  ],
  "10.1": [
    link("documentation", "CVSS v4 specification", "Scoring vulnerabilities beyond the headline number.", "https://www.first.org/cvss/v4.0/specification-document", "FIRST"),
    link("tool", "NVD vulnerability database", "Search CVEs and CVSS vectors.", "https://nvd.nist.gov/", "NIST NVD"),
  ],
  "10.2": [
    link("documentation", "CISA patch management guide", "Prioritization and exception workflows.", "https://www.cisa.gov/resources-tools/resources/patch-management", "CISA"),
  ],
  "12.1": [
    link("documentation", "Microsoft Active Directory overview", "AD and Kerberos enough to reason about attacks.", "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview", "Microsoft"),
    link("github", "BloodHound AD analysis", "Map AD attack paths for defensive review.", "https://github.com/SpecterOps/BloodHound", "GitHub"),
  ],
  "17.1": [
    link("documentation", "YARA documentation", "Write rules for static malware detection.", "https://yara.readthedocs.io/", "YARA"),
    link("github", "YARA rules repository", "Community rules to study and adapt.", "https://github.com/Yara-Rules/rules", "GitHub"),
  ],
  "17.2": [
    link("documentation", "Cuckoo Sandbox docs", "Safe dynamic analysis hygiene.", "https://cuckoo.readthedocs.io/", "Cuckoo Sandbox"),
  ],
  "18.2": [
    link("documentation", "NIST Risk Management Framework", "Risk registers and practical compliance.", "https://csrc.nist.gov/projects/risk-management", "NIST"),
  ],
};

const data: Record<string, Resource[]> = {
  "20.4": [
    video("Descriptive Statistics Tutorial", "Behavioral interview prep with data storytelling.", "SplCk-t1BeA", "Grad Coach"),
    link("article", "STAR method for interviews", "Structure behavioral answers with evidence.", "https://www.themuse.com/advice/star-interview-method", "The Muse"),
  ],
};

const outDir = path.join(process.cwd(), "lib/learning-resources/curated/batches");
fs.mkdirSync(outDir, { recursive: true });

const batches = [
  { file: "gaps-cs-batch.json", lessons: cs },
  { file: "gaps-ai-batch.json", lessons: ai },
  { file: "gaps-networks-batch.json", lessons: networks },
  { file: "gaps-cyber-batch.json", lessons: cybersecurity },
  { file: "gaps-data-batch.json", lessons: data },
];

for (const batch of batches) {
  const payload = { lessons: batch.lessons, phases: {}, projects: {} };
  fs.writeFileSync(path.join(outDir, batch.file), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Wrote ${batch.file} (${Object.keys(batch.lessons).length} lessons)`);
}
