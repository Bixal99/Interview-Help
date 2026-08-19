function plainText(body: string) {
  return body.replace(/\*([^*]+)\*/g, "$1").replace(/_([^_]+)_/g, "$1");
}

function formatBody(body: string) {
  const text = plainText(body);
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z“(])/).map((item) => item.trim()).filter(Boolean);
  if (sentences.length <= 1) return <p>{text}</p>;
  return (
    <>
      <p>{sentences[0]}</p>
      <ul className="ih-prose-list">
        {sentences.slice(1).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export function WhatComesNextSection({ body }: { body: string }) {
  return (
    <section className="ih-what-next">
      <h2 className="ih-lesson-kicker">What Comes Next</h2>
      {formatBody(body)}
    </section>
  );
}
