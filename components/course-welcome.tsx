import { PracticeRichText } from "@/components/practice-rich-text";
import type { BeginnerIntro, BeginnerTerm } from "@/lib/learning-model";

export function Emphasis({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        const bold = /^\*\*([^*]+)\*\*$/.exec(part);
        if (bold) return <strong key={index}><PracticeRichText text={bold[1]} /></strong>;
        const italic = /^\*([^*]+)\*$/.exec(part);
        if (italic) return <em key={index}><PracticeRichText text={italic[1]} /></em>;
        return <PracticeRichText key={index} text={part} />;
      })}
    </>
  );
}

function TermTable({ heading, items }: { heading: string; items: BeginnerTerm[] }) {
  if (items.length === 0) return null;
  return (
    <>
      <h3 className="mt-8 text-xl font-bold uppercase tracking-wide sm:text-2xl">{heading}</h3>
      <table className="ih-glossary-table">
        <caption className="sr-only">Word and meaning, in the order you will meet them</caption>
        <thead>
          <tr>
            <th scope="col">Word</th>
            <th scope="col">Meaning</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.term}>
              <th scope="row">{item.term}</th>
              <td>
                <Emphasis text={item.meaning} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function CourseWelcome({
  shortName,
  intro,
}: {
  shortName: string;
  intro: BeginnerIntro | null;
}) {
  return (
    <section className="border border-[rgb(var(--line))] border-l-[5px] border-l-[#04AA6D] bg-[#F1F1F1] p-6 sm:p-8 lg:p-10">
      <h2 className="text-4xl font-bold uppercase tracking-wide sm:text-6xl">Welcome to this course</h2>
      {intro ? (
        <>
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 64)} className="mt-4 text-lg leading-relaxed">
              <Emphasis text={paragraph} />
            </p>
          ))}
          <TermTable heading="Everyday words" items={intro.everydayTerms} />
          <TermTable heading="Words you will meet often" items={intro.terms} />
          {intro.closingParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 64)} className="mt-6 text-lg leading-relaxed">
              <Emphasis text={paragraph} />
            </p>
          ))}
        </>
      ) : (
        <p className="mt-6 text-lg leading-relaxed">
          Welcome to the <strong>{shortName}</strong> tutorial.
        </p>
      )}
    </section>
  );
}
