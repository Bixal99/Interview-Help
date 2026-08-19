import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CodePlayground } from "@/components/code-playground/code-playground";
import { getExercise, getExerciseIds } from "@/lib/code-playground/exercises";

export function generateStaticParams() {
  return getExerciseIds().map((exerciseId) => ({ exerciseId }));
}

export async function generateMetadata({ params }: { params: Promise<{ exerciseId: string }> }): Promise<Metadata> {
  const { exerciseId } = await params;
  const exercise = getExercise(exerciseId);
  return exercise ? { title: `${exercise.title} Playground`, description: exercise.instructions } : {};
}

export default async function PlaygroundPage({ params }: { params: Promise<{ exerciseId: string }> }) {
  const { exerciseId } = await params;
  const exercise = getExercise(exerciseId);
  if (!exercise) notFound();
  return (
    <main id="main-content" className="ih-playground-page px-4 py-6 sm:px-8">
      <CodePlayground exercise={exercise} mode="tryit" />
    </main>
  );
}
