import { VisualLearning } from "@/components/visual-learning";
import { learningResourceToVisual } from "@/lib/learning-resources/normalize";
import type { LearningResource } from "@/lib/learning-resources/types";

export function RecommendedResources({
  resources,
  sourcePath,
  embedYouTube = true,
}: {
  resources: LearningResource[];
  sourcePath: string;
  embedYouTube?: boolean;
}) {
  if (resources.length === 0) return null;
  const visual = resources.map(learningResourceToVisual);
  return <VisualLearning resources={visual} sourcePath={sourcePath} embedYouTube={embedYouTube} heading="Recommended Resources" />;
}
