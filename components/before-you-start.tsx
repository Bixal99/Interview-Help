export function BeforeYouStart({ text }: { text: string }) {
  return (
    <p className="ih-lesson-intro">
      <span className="font-semibold">Before you start:</span> {text}
    </p>
  );
}
