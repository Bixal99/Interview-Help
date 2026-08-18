import type { FencedBlock, YouTubeInfo } from "./content-utils";

export type VideoResource = {
  href: string;
  title: string;
  info: YouTubeInfo;
};

export type CodeExample = FencedBlock;

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  markdown: string;
  videos: VideoResource[];
  codeExamples: CodeExample[];
  sourcePath?: string;
};

export type PhaseProject = {
  id: string;
  coursePrefix: string;
  phaseId: string;
  title: string;
  markdown: string;
  gitCheckpoint?: string;
};

export type Phase = {
  id: string;
  number: string;
  title: string;
  anchorIds: string[];
  overview: string;
  goal?: string;
  lessons: Lesson[];
  project?: PhaseProject;
  sourcePath?: string;
};

export type ParsedCourse = {
  slug: string;
  title: string;
  introMarkdown: string;
  teaserMarkdown: string;
  phases: Phase[];
};

export type CourseChapter = {
  id: string;
  title: string;
  phaseIds: string[];
};

export type PathStep = {
  course: string;
  phaseId: string;
};

export type LearningPath = {
  id: string;
  title: string;
  steps: PathStep[];
};

export type CourseProgressState = {
  lastVisitedAt: string;
  currentPhaseId?: string;
  currentLessonId?: string;
  visitedLessons: string[];
  completedLessons: string[];
  completedExercises: string[];
  completedProjects: string[];
  completedGitCheckpoints: string[];
  completedPhases: string[];
};

export type LearningProgress = {
  version: 2 | 3;
  activePath?: string;
  courses: Record<string, CourseProgressState>;
  legacyIds?: string[];
};

export type SearchHit = {
  id: string;
  title: string;
  course: string;
  type: "course" | "phase" | "lesson" | "concept" | "project" | "interview" | "command" | "example";
  href: string;
  excerpt: string;
  searchText: string;
  phase?: string;
};
