import type { LucideIcon } from "lucide-react";
import {
  Bot, Braces, Cloud, CodeXml, Database, GitBranch,
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
  projectPrefix: string;
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
  { slug: "computer-science", title: "Computer Science", sourcePath: "content/roadmaps/CS.md", route: "/courses/computer-science", type: "roadmap", shortName: "Computer Science", icon: Braces, description: "Foundations, programming, OOP, then data structures, systems, databases, design, and interview mastery.", difficulty: "Foundation → advanced", skills: ["Python", "OOP", "DSA", "Systems"], prerequisites: "No prior computer science required", projectPrefix: "cs", next: "git", accent: "#2F5D8A" },
  { slug: "git", title: "Git and Git Workflows", sourcePath: "content/roadmaps/Git.md", route: "/courses/git", type: "roadmap", shortName: "Git", icon: GitBranch, description: "Safe everyday Git, internals, recovery, collaboration, releases, and repository trust.", difficulty: "Beginner → professional", skills: ["Git", "Recovery", "CI"], prerequisites: "Ability to create and edit text files", projectPrefix: "git", next: "web-development", accent: "#2F5D8A" },
  { slug: "web-development", title: "Web Development", sourcePath: "content/roadmaps/Web.md", route: "/courses/web-development", type: "roadmap", shortName: "Web Development", icon: CodeXml, description: "Browser fundamentals, frontend, backend, APIs, security, testing, and deployment.", difficulty: "Beginner → production", skills: ["Frontend", "APIs", "Backend"], prerequisites: "Programming fundamentals and Git basics", projectPrefix: "web", next: "projects", accent: "#2F5D8A" },
  { slug: "artificial-intelligence", title: "Artificial Intelligence", sourcePath: "content/roadmaps/AI.md", route: "/courses/artificial-intelligence", type: "roadmap", shortName: "AI & ML", icon: Bot, description: "Classical ML through deep learning, transformers, RAG, agents, evaluation, and MLOps.", difficulty: "Intermediate", skills: ["Python", "ML", "LLMs"], prerequisites: "Programming, data, and useful math foundations", projectPrefix: "ai", next: "projects", accent: "#2F5D8A" },
  { slug: "data", title: "Data", sourcePath: "content/roadmaps/Data.md", route: "/courses/data", type: "roadmap", shortName: "Data", icon: Database, description: "Analytics, SQL, statistics, pipelines, warehouses, Spark, Kafka, and data interviews.", difficulty: "Beginner → advanced", skills: ["SQL", "Analytics", "Pipelines"], prerequisites: "No prior data experience required", projectPrefix: "data", next: "artificial-intelligence", accent: "#2F5D8A" },
  { slug: "networks", title: "Computer Networks", sourcePath: "content/roadmaps/Networks.md", route: "/courses/networks", type: "roadmap", shortName: "Networks", icon: Network, description: "Packets, protocols, routing, DNS, HTTP, security, operations, and network design.", difficulty: "Foundation → advanced", skills: ["TCP/IP", "DNS", "HTTP"], prerequisites: "Basic computer literacy", projectPrefix: "networks", next: "cloud", accent: "#2F5D8A" },
  { slug: "cybersecurity", title: "ICT and Cybersecurity", sourcePath: "content/roadmaps/ICT_Cybersecurity.md", route: "/courses/cybersecurity", type: "roadmap", shortName: "Cybersecurity", icon: ShieldCheck, description: "Defensive foundations, authorized labs, AppSec, cloud security, detection, and response.", difficulty: "Foundation → career", skills: ["Defense", "AppSec", "SOC"], prerequisites: "Start at Phase 1; pair with Networks", projectPrefix: "cyber", next: "projects", accent: "#2F5D8A" },
  { slug: "it-administration", title: "IT Administration", sourcePath: "content/roadmaps/IT_Administration.md", route: "/courses/it-administration", type: "roadmap", shortName: "IT Administration", icon: ServerCog, description: "Windows and Linux servers, Active Directory, Microsoft 365, networks, ERP, security, support, and tested recovery.", difficulty: "Beginner to job-ready", skills: ["Windows/Linux", "Active Directory", "Microsoft 365"], prerequisites: "Basic computer literacy", projectPrefix: "it-admin", next: "networks", accent: "#2F5D8A" },
  { slug: "cloud", title: "Cloud Engineering", sourcePath: "content/roadmaps/Cloud.md", route: "/courses/cloud", type: "roadmap", shortName: "Cloud", icon: Cloud, description: "Provider-aware architecture, IAM, networking, reliability, security, FinOps, and migration.", difficulty: "Intermediate", skills: ["AWS/Azure/GCP", "IaC", "FinOps"], prerequisites: "Linux and networking foundations", projectPrefix: "cloud", next: "devops", accent: "#2F5D8A" },
  { slug: "devops", title: "DevOps", sourcePath: "content/roadmaps/DevOps.md", route: "/courses/devops", type: "roadmap", shortName: "DevOps", icon: ServerCog, description: "Linux, CI/CD, containers, Kubernetes, IaC, SRE, GitOps, and incident response.", difficulty: "Intermediate", skills: ["CI/CD", "Kubernetes", "SRE"], prerequisites: "Linux, troubleshooting, and Git", projectPrefix: "devops", next: "projects", accent: "#2F5D8A" },
  { slug: "odoo", title: "Odoo", sourcePath: "content/roadmaps/ODOO.md", route: "/courses/odoo", type: "roadmap", shortName: "Odoo", icon: TerminalSquare, description: "ERP development with modules, ORM, XML, OWL, PostgreSQL, integrations, and delivery.", difficulty: "Specialized", skills: ["Python", "ORM", "OWL"], prerequisites: "Programming fundamentals, OOP, and Git", projectPrefix: "odoo", next: "projects", accent: "#2F5D8A" },
];

export const guideRegistry: ContentEntry[] = [
  { slug: "projects", title: "Projects Playbook", sourcePath: "content/guides/Projects.md", route: "/projects", type: "guide" },
  { slug: "interview", title: "Interview Playbook", sourcePath: "content/guides/Interview.md", route: "/interview", type: "guide" },
];

export const templateRegistry: ContentEntry[] = [
  { slug: "master-cv-template", title: "Master CV Template", sourcePath: "content/templates/Master_CV_Template.md", route: "/cv-template", type: "template" },
];

export const contentRegistry: ContentEntry[] = [...roadmapRegistry, ...guideRegistry, ...templateRegistry];
export const courseBarLabels: Record<string, string> = {
  "computer-science": "CS",
  git: "Git",
  "web-development": "Web",
  "artificial-intelligence": "AI",
  data: "Data",
  networks: "Networks",
  cloud: "Cloud",
  devops: "DevOps",
  cybersecurity: "Cyber",
  "it-administration": "IT",
  odoo: "Odoo",
};

export const courseCatalog = roadmapRegistry;
export const catalogBySlug = Object.fromEntries(courseCatalog.map((course) => [course.slug, course]));
export const contentBySlug = Object.fromEntries(contentRegistry.map((entry) => [entry.slug, entry]));
