import { PracticeRichText } from "@/components/practice-rich-text";

function plainText(body: string) {
  return body.replace(/\*([^*]+)\*/g, "$1").replace(/_([^_]+)_/g, "$1");
}

export function WhatComesNextSection({ body }: { body: string }) {
  const sentences = body.split(/(?<=[.!?])\s+(?=[A-Z“(])/).map((item) => item.trim()).filter(Boolean);
  return (
    <section className="ih-what-next">
      <h2 className="ih-lesson-kicker">What Comes Next</h2>
      {sentences.length ? sentences.map((item) => <p key={item}><PracticeRichText text={item} /></p>) : <p><PracticeRichText text={plainText(body)} /></p>}
    </section>
  );
}
