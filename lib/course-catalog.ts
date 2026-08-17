import type { LucideIcon } from "lucide-react";
import {
  Bot, Boxes, Braces, Cloud, CodeXml, Database, GitBranch,
  Network, ServerCog, ShieldCheck, TerminalSquare,
} from "lucide-react";

export type CourseDefinition = {
  slug: string;
  title: string;
  sourcePath: string;
  route: string;
  type: "roadmap";
  shortName: string;
  icon: LucideIcon;
  description: string;
  difficulty: string;
  skills: string[];
  prerequisites: string;
  next?: string;
  accent: string;
};

export type ContentEntry = {
  slug: string;
  title: string;
  sourcePath: string;
  route: string;
  type: "roadmap" | "guide" | "template";
};

export const roadmapRegistry: CourseDefinition[] = [
  { slug: "computer-science", title: "Computer Science", sourcePath: "content/roadmaps/CS.md", route: "/courses/computer-science", type: "roadmap", shortName: "Computer Science", icon: Braces, description: "First principles, algorithms, systems, databases, design, and interview mastery.", difficulty: "Foundation → advanced", skills: ["DSA", "Systems", "Design"], prerequisites: "No prior computer science required", next: "object-oriented-programming", accent: "#2563eb" },
  { slug: "object-oriented-programming", title: "Object-Oriented Programming", sourcePath: "content/roadmaps/OOP.md", route: "/courses/object-oriented-programming", type: "roadmap", shortName: "OOP", icon: Boxes, description: "Programming fundamentals through SOLID, patterns, clean architecture, and LLD.", difficulty: "Beginner friendly", skills: ["Python", "SOLID", "Patterns"], prerequisites: "None — Part 0 starts from zero", next: "git", accent: "#7c3aed" },
  { slug: "git", title: "Git and Git Workflows", sourcePath: "content/roadmaps/Git.md", route: "/courses/git", type: "roadmap", shortName: "Git", icon: GitBranch, description: "Safe everyday Git, internals, recovery, collaboration, releases, and repository trust.", difficulty: "Beginner → professional", skills: ["Git", "Recovery", "CI"], prerequisites: "Ability to create and edit text files", next: "web-development", accent: "#ea580c" },
  { slug: "web-development", title: "Web Development", sourcePath: "content/roadmaps/Web.md", route: "/courses/web-development", type: "roadmap", shortName: "Web Development", icon: CodeXml, description: "Browser fundamentals, frontend, backend, APIs, security, testing, and deployment.", difficulty: "Beginner → production", skills: ["Frontend", "APIs", "Backend"], prerequisites: "Programming fundamentals and Git basics", next: "projects", accent: "#0891b2" },
  { slug: "artificial-intelligence", title: "Artificial Intelligence", sourcePath: "content/roadmaps/AI.md", route: "/courses/artificial-intelligence", type: "roadmap", shortName: "AI & ML", icon: Bot, description: "Classical ML through deep learning, transformers, RAG, agents, evaluation, and MLOps.", difficulty: "Intermediate", skills: ["Python", "ML", "LLMs"], prerequisites: "Programming, data, and useful math foundations", next: "projects", accent: "#db2777" },
  { slug: "data", title: "Data", sourcePath: "content/roadmaps/Data.md", route: "/courses/data", type: "roadmap", shortName: "Data", icon: Database, description: "Analytics, SQL, statistics, pipelines, warehouses, Spark, Kafka, and data interviews.", difficulty: "Beginner → advanced", skills: ["SQL", "Analytics", "Pipelines"], prerequisites: "No prior data experience required", next: "artificial-intelligence", accent: "#0d9488" },
  { slug: "networks", title: "Computer Networks", sourcePath: "content/roadmaps/Networks.md", route: "/courses/networks", type: "roadmap", shortName: "Networks", icon: Network, description: "Packets, protocols, routing, DNS, HTTP, security, operations, and network design.", difficulty: "Foundation → advanced", skills: ["TCP/IP", "DNS", "HTTP"], prerequisites: "Basic computer literacy", next: "cloud", accent: "#4f46e5" },
  { slug: "cybersecurity", title: "ICT and Cybersecurity", sourcePath: "content/roadmaps/ICT_Cybersecurity.md", route: "/courses/cybersecurity", type: "roadmap", shortName: "Cybersecurity", icon: ShieldCheck, description: "Defensive foundations, authorized labs, AppSec, cloud security, detection, and response.", difficulty: "Foundation → career", skills: ["Defense", "AppSec", "SOC"], prerequisites: "Start at Phase 1; pair with Networks", next: "projects", accent: "#dc2626" },
  { slug: "cloud", title: "Cloud Engineering", sourcePath: "content/roadmaps/Cloud.md", route: "/courses/cloud", type: "roadmap", shortName: "Cloud", icon: Cloud, description: "Provider-aware architecture, IAM, networking, reliability, security, FinOps, and migration.", difficulty: "Intermediate", skills: ["AWS/Azure/GCP", "IaC", "FinOps"], prerequisites: "Linux and networking foundations", next: "devops", accent: "#0284c7" },
  { slug: "devops", title: "DevOps", sourcePath: "content/roadmaps/DevOps.md", route: "/courses/devops", type: "roadmap", shortName: "DevOps", icon: ServerCog, description: "Linux, CI/CD, containers, Kubernetes, IaC, SRE, GitOps, and incident response.", difficulty: "Intermediate", skills: ["CI/CD", "Kubernetes", "SRE"], prerequisites: "Linux, troubleshooting, and Git", next: "projects", accent: "#16a34a" },
  { slug: "odoo", title: "Odoo", sourcePath: "content/roadmaps/ODOO.md", route: "/courses/odoo", type: "roadmap", shortName: "Odoo", icon: TerminalSquare, description: "ERP development with modules, ORM, XML, OWL, PostgreSQL, integrations, and delivery.", difficulty: "Specialized", skills: ["Python", "ORM", "OWL"], prerequisites: "Programming fundamentals, OOP, and Git", next: "projects", accent: "#9333ea" },
];

export const guideRegistry: ContentEntry[] = [
  { slug: "projects", title: "Projects Playbook", sourcePath: "content/guides/Projects.md", route: "/projects", type: "guide" },
  { slug: "interview", title: "Interview Playbook", sourcePath: "content/guides/Interview.md", route: "/interview", type: "guide" },
];

export const templateRegistry: ContentEntry[] = [
  { slug: "master-cv-template", title: "Master CV Template", sourcePath: "content/templates/Master_CV_Template.md", route: "/cv-template", type: "template" },
];

export const contentRegistry: ContentEntry[] = [...roadmapRegistry, ...guideRegistry, ...templateRegistry];
export const courseCatalog = roadmapRegistry;
export const catalogBySlug = Object.fromEntries(courseCatalog.map((course) => [course.slug, course]));
export const contentBySlug = Object.fromEntries(contentRegistry.map((entry) => [entry.slug, entry]));
