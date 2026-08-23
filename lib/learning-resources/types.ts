export type ResourceType =
  | "video"
  | "article"
  | "documentation"
  | "interactive"
  | "visualizer"
  | "github"
  | "tutorial"
  | "reference"
  | "course"
  | "tool";

export type ResourceDifficulty = "beginner" | "intermediate" | "advanced";

export type LearningResource = {
  type: ResourceType;
  title: string;
  description: string;
  url: string;
  source?: string;
  thumbnail?: string;
  videoId?: string;
  channel?: string;
  duration?: string;
  embedSupported?: boolean;
  difficulty?: ResourceDifficulty;
};

export type ResourceBundle = {
  lessons: Record<string, LearningResource[]>;
  phases: Record<string, LearningResource[]>;
  projects: Record<string, LearningResource[]>;
};

export type ResourceScope =
  | { kind: "lesson"; courseSlug: string; phaseId: string; lessonId: string }
  | { kind: "phase"; courseSlug: string; phaseId: string }
  | { kind: "project"; courseSlug: string; phaseId: string }
  | { kind: "sublesson"; courseSlug: string; phaseId: string; lessonId: string; sublessonId: string };

export type ResourceEntry = ResourceScope & {
  resources: LearningResource[];
};

export type ResourceLookupKey = string;
