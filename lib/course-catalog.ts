import type { LucideIcon } from "lucide-react";
import {
  Bot, Boxes, Braces, Cloud, CodeXml, Database, GitBranch,
  Network, ServerCog, ShieldCheck, TerminalSquare,
} from "lucide-react";

export type CourseDefinition = {
  slug: string;
  file: string;
  shortName: string;
  icon: LucideIcon;
  description: string;
  difficulty: string;
  skills: string[];
  prerequisites: string;
  next?: string;
  accent: string;
};

export const courseCatalog: CourseDefinition[] = [
  { slug: "computer-science", file: "CS.md", shortName: "Computer Science", icon: Braces, description: "First principles, algorithms, systems, databases, design, and interview mastery.", difficulty: "Foundation → advanced", skills: ["DSA", "Systems", "Design"], prerequisites: "No prior computer science required", next: "object-oriented-programming", accent: "#2563eb" },
  { slug: "object-oriented-programming", file: "OOP.md", shortName: "OOP", icon: Boxes, description: "Programming fundamentals through SOLID, patterns, clean architecture, and LLD.", difficulty: "Beginner friendly", skills: ["Python", "SOLID", "Patterns"], prerequisites: "None — Part 0 starts from zero", next: "git", accent: "#7c3aed" },
  { slug: "git", file: "Git.md", shortName: "Git", icon: GitBranch, description: "Safe everyday Git, internals, recovery, collaboration, releases, and repository trust.", difficulty: "Beginner → professional", skills: ["Git", "Recovery", "CI"], prerequisites: "Ability to create and edit text files", next: "web-development", accent: "#ea580c" },
  { slug: "web-development", file: "Web.md", shortName: "Web Development", icon: CodeXml, description: "Browser fundamentals, frontend, backend, APIs, security, testing, and deployment.", difficulty: "Beginner → production", skills: ["Frontend", "APIs", "Backend"], prerequisites: "Programming fundamentals and Git basics", next: "projects", accent: "#0891b2" },
  { slug: "artificial-intelligence", file: "AI.md", shortName: "AI & ML", icon: Bot, description: "Classical ML through deep learning, transformers, RAG, agents, evaluation, and MLOps.", difficulty: "Intermediate", skills: ["Python", "ML", "LLMs"], prerequisites: "Programming, data, and useful math foundations", next: "projects", accent: "#db2777" },
  { slug: "data", file: "Data.md", shortName: "Data", icon: Database, description: "Analytics, SQL, statistics, pipelines, warehouses, Spark, Kafka, and data interviews.", difficulty: "Beginner → advanced", skills: ["SQL", "Analytics", "Pipelines"], prerequisites: "No prior data experience required", next: "artificial-intelligence", accent: "#0d9488" },
  { slug: "networks", file: "Networks.md", shortName: "Networks", icon: Network, description: "Packets, protocols, routing, DNS, HTTP, security, operations, and network design.", difficulty: "Foundation → advanced", skills: ["TCP/IP", "DNS", "HTTP"], prerequisites: "Basic computer literacy", next: "cloud", accent: "#4f46e5" },
  { slug: "cybersecurity", file: "ICT_Cybersecurity.md", shortName: "Cybersecurity", icon: ShieldCheck, description: "Defensive foundations, authorized labs, AppSec, cloud security, detection, and response.", difficulty: "Foundation → career", skills: ["Defense", "AppSec", "SOC"], prerequisites: "Start at Phase 1; pair with Networks", next: "projects", accent: "#dc2626" },
  { slug: "cloud", file: "Cloud.md", shortName: "Cloud", icon: Cloud, description: "Provider-aware architecture, IAM, networking, reliability, security, FinOps, and migration.", difficulty: "Intermediate", skills: ["AWS/Azure/GCP", "IaC", "FinOps"], prerequisites: "Linux and networking foundations", next: "devops", accent: "#0284c7" },
  { slug: "devops", file: "DevOps.md", shortName: "DevOps", icon: ServerCog, description: "Linux, CI/CD, containers, Kubernetes, IaC, SRE, GitOps, and incident response.", difficulty: "Intermediate", skills: ["CI/CD", "Kubernetes", "SRE"], prerequisites: "Linux, troubleshooting, and Git", next: "projects", accent: "#16a34a" },
  { slug: "odoo", file: "ODOO.md", shortName: "Odoo", icon: TerminalSquare, description: "ERP development with modules, ORM, XML, OWL, PostgreSQL, integrations, and delivery.", difficulty: "Specialized", skills: ["Python", "ORM", "OWL"], prerequisites: "Programming fundamentals, OOP, and Git", next: "projects", accent: "#9333ea" },
];

export const catalogBySlug = Object.fromEntries(courseCatalog.map((course) => [course.slug, course]));
