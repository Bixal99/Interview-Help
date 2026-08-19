import type { LucideIcon } from "lucide-react";
import {
  AlignLeft,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BookOpenText,
  Boxes,
  BrainCircuit,
  Building2,
  ChartNoAxesColumnIncreasing,
  ChevronRight,
  Circle,
  CircleCheck,
  CircleHelp,
  CircleX,
  Cloud,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileDown,
  FileUp,
  FolderKanban,
  GitCommit,
  GitBranch,
  Globe,
  Home,
  Infinity,
  Library,
  Lightbulb,
  ListOrdered,
  ListVideo,
  LoaderCircle,
  Lock,
  Maximize2,
  Menu,
  MessagesSquare,
  MonitorCog,
  Network,
  PencilLine,
  Play,
  RotateCcw,
  Route,
  Search,
  Settings,
  ShieldCheck,
  Terminal,
  TriangleAlert,
  Workflow,
  X,
} from "lucide-react";
import { COURSE_ICON_BY_SLUG, ICON_CLASS, ICON_SIZE, type AppIconName, type CourseIconName } from "@/lib/icons";
import { TechnologyIcon } from "./technology-icon";

type GlyphName = AppIconName | CourseIconName;

const ICONS: Record<GlyphName, LucideIcon> = {
  home: Home,
  courses: Library,
  learn: BookOpen,
  practice: PencilLine,
  quiz: CircleHelp,
  project: FolderKanban,
  progress: ChartNoAxesColumnIncreasing,
  video: Play,
  code: Code2,
  terminal: Terminal,
  interview: MessagesSquare,
  search: Search,
  settings: Settings,
  complete: CircleCheck,
  current: Play,
  locked: Lock,
  externalLink: ExternalLink,
  menu: Menu,
  close: X,
  copy: Copy,
  wrap: AlignLeft,
  reset: RotateCcw,
  run: Play,
  previous: ArrowLeft,
  next: ArrowRight,
  expand: ChevronRight,
  download: Download,
  playlist: ListVideo,
  fullscreen: Maximize2,
  lesson: BookOpenText,
  phase: ListOrdered,
  diagram: Workflow,
  example: Code2,
  tip: Lightbulb,
  resource: BookOpen,
  warning: TriangleAlert,
  error: CircleX,
  inProgress: LoaderCircle,
  notStarted: Circle,
  phaseComplete: BadgeCheck,
  projectComplete: CircleCheck,
  gitCheckpoint: GitCommit,
  exportProgress: FileDown,
  importProgress: FileUp,
  resetProgress: RotateCcw,
  paths: Route,
  computerScience: Cpu,
  oop: Boxes,
  git: GitBranch,
  web: Globe,
  data: Database,
  ai: BrainCircuit,
  networks: Network,
  cybersecurity: ShieldCheck,
  itAdministration: MonitorCog,
  cloud: Cloud,
  devops: Infinity,
  odoo: Building2,
};

const COURSE_BRAND: Record<string, string> = {
  git: "git",
  odoo: "odoo",
};

type AppIconBase = {
  name: GlyphName;
  size?: number;
  weight?: "regular" | "bold" | "fill";
  className?: string;
};

type AppIconProps = AppIconBase & (
  | { decorative?: true; label?: never }
  | { decorative: false; label: string }
);

export function AppIcon({
  name,
  size = ICON_SIZE.ui,
  weight = "regular",
  decorative = true,
  label,
  className,
}: AppIconProps) {
  const Glyph = ICONS[name];
  const strokeWidth = weight === "regular" ? 2 : 2.4;
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      className={className ? `${ICON_CLASS} ${className}` : ICON_CLASS}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : "img"}
    />
  );
}

export function CourseIdentityIcon({
  slug,
  size = ICON_SIZE.course,
  className,
}: {
  slug: string;
  size?: number;
  className?: string;
}) {
  const brand = COURSE_BRAND[slug];
  if (brand) {
    return <TechnologyIcon slug={brand} title={brand} size={size} useBrandColor decorative className={className} />;
  }
  const name = COURSE_ICON_BY_SLUG[slug];
  if (!name) return null;
  return <AppIcon name={name} size={size} className={className} />;
}
