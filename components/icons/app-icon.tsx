import type { Icon, IconWeight } from "@phosphor-icons/react";
import {
  ArrowCounterClockwiseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowSquareOutIcon,
  ArrowsOutIcon,
  BookOpenIcon,
  BookOpenTextIcon,
  BooksIcon,
  BrainIcon,
  BrowserIcon,
  BuildingsIcon,
  CaretRightIcon,
  ChartLineUpIcon,
  ChatsCircleIcon,
  CheckCircleIcon,
  CheckSquareIcon,
  CircleIcon,
  CircleNotchIcon,
  CloudIcon,
  CodeBlockIcon,
  CodeIcon,
  CopyIcon,
  CpuIcon,
  CubeIcon,
  DatabaseIcon,
  DesktopTowerIcon,
  DownloadSimpleIcon,
  ExportIcon,
  GearIcon,
  GitBranchIcon,
  GitCommitIcon,
  GraphIcon,
  HammerIcon,
  HouseIcon,
  InfinityIcon,
  LightbulbIcon,
  ListIcon,
  LockIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  NetworkIcon,
  PathIcon,
  PlayCircleIcon,
  PlayIcon,
  PlaylistIcon,
  SealCheckIcon,
  ShieldCheckIcon,
  StepsIcon,
  SunIcon,
  TerminalIcon,
  TextAlignLeftIcon,
  UploadSimpleIcon,
  VideoIcon,
  WarningIcon,
  XCircleIcon,
  XIcon,
} from "@phosphor-icons/react/ssr";
import { COURSE_ICON_BY_SLUG, ICON_CLASS, ICON_SIZE, type AppIconName, type CourseIconName } from "@/lib/icons";

type GlyphName = AppIconName | CourseIconName;

const ICONS: Record<GlyphName, Icon> = {
  home: HouseIcon,
  courses: BooksIcon,
  learn: PlayCircleIcon,
  practice: CodeIcon,
  quiz: CheckSquareIcon,
  project: HammerIcon,
  progress: ChartLineUpIcon,
  video: VideoIcon,
  code: CodeIcon,
  terminal: TerminalIcon,
  interview: ChatsCircleIcon,
  search: MagnifyingGlassIcon,
  settings: GearIcon,
  complete: CheckCircleIcon,
  current: PlayCircleIcon,
  locked: LockIcon,
  externalLink: ArrowSquareOutIcon,
  menu: ListIcon,
  close: XIcon,
  sun: SunIcon,
  moon: MoonIcon,
  copy: CopyIcon,
  wrap: TextAlignLeftIcon,
  reset: ArrowCounterClockwiseIcon,
  run: PlayIcon,
  previous: ArrowLeftIcon,
  next: ArrowRightIcon,
  expand: CaretRightIcon,
  download: DownloadSimpleIcon,
  playlist: PlaylistIcon,
  fullscreen: ArrowsOutIcon,
  lesson: BookOpenTextIcon,
  phase: StepsIcon,
  diagram: GraphIcon,
  example: CodeBlockIcon,
  tip: LightbulbIcon,
  resource: BookOpenIcon,
  warning: WarningIcon,
  error: XCircleIcon,
  inProgress: CircleNotchIcon,
  notStarted: CircleIcon,
  phaseComplete: SealCheckIcon,
  projectComplete: CheckSquareIcon,
  gitCheckpoint: GitCommitIcon,
  exportProgress: ExportIcon,
  importProgress: UploadSimpleIcon,
  resetProgress: ArrowCounterClockwiseIcon,
  paths: PathIcon,
  computerScience: CpuIcon,
  oop: CubeIcon,
  git: GitBranchIcon,
  web: BrowserIcon,
  data: DatabaseIcon,
  ai: BrainIcon,
  networks: NetworkIcon,
  cybersecurity: ShieldCheckIcon,
  itAdministration: DesktopTowerIcon,
  cloud: CloudIcon,
  devops: InfinityIcon,
  odoo: BuildingsIcon,
};

type AppIconBase = {
  name: GlyphName;
  size?: number;
  weight?: Extract<IconWeight, "regular" | "bold" | "fill">;
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
  return (
    <Glyph
      size={size}
      weight={weight}
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
  const name = COURSE_ICON_BY_SLUG[slug];
  if (!name) return null;
  return <AppIcon name={name} size={size} className={className} />;
}
