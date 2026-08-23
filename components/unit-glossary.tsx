import { Pager } from "@/components/pager";
import { Emphasis } from "@/components/course-welcome";
import { ProgressVisit } from "@/components/progress-visit";
import type { BeginnerTerm } from "@/lib/learning-model";
import type { Neighbor } from "@/lib/navigation";
import { unitDisplayTitle } from "@/lib/curriculum-labels";
import type { UnitGlossarySection } from "@/lib/unit-glossary";

function TermTable({ heading, items }: { heading: string; items: BeginnerTerm[] }) {
  if (!items.length) return null;
  return (
    <>
      <h2 className="mt-10 text-xl font-bold tracking-wide sm:text-2xl">{heading}</h2>
      <table className="ih-glossary-table">
        <caption className="sr-only">Words and meanings from this lesson</caption>
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

export function UnitGlossary({
  unitTitle,
  unitId,
  courseSlug,
  phaseId,
  courseName,
  sections,
  prev,
  next,
}: {
  unitTitle: string;
  unitId: string;
  courseSlug: string;
  phaseId: string;
  courseName: string;
  sections: UnitGlossarySection[];
  prev: Neighbor | null;
  next: Neighbor | null;
}) {
  return (
    <article className="ih-lesson">
      <ProgressVisit slug={courseSlug} phaseId={phaseId} stopId={`glossary:${unitId}`} />
      <p className="ih-build-kicker">{courseName}</p>
      <h1>Glossary</h1>
      <p className="ih-lesson-intro">
        Words from each lesson in <strong>{unitDisplayTitle(unitTitle)}</strong>. Short keywords and meanings to review before you move on.
      </p>
      <Pager
        backHref={prev?.href ?? "/courses"}
        backLabel="Previous"
        proceedHref={next?.href}
        proceedLabel={next ? "Next" : undefined}
      />
      <div className="ih-lesson-body">
        {sections.length > 0 ? (
          sections.map((section) => (
            <TermTable key={section.heading} heading={section.heading} items={section.items} />
          ))
        ) : (
          <p className="mt-6 text-lg leading-relaxed">
            No glossary terms are listed for this unit yet. Continue to the next chapter when you are ready.
          </p>
        )}
      </div>
      <div className="ih-lesson-end">
        <Pager
          backHref={prev?.href ?? "/courses"}
          backLabel="Previous"
          proceedHref={next?.href}
          proceedLabel={next ? "Next" : undefined}
        />
      </div>
    </article>
  );
}
