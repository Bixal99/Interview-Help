function Emphasis({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        const bold = /^\*\*([^*]+)\*\*$/.exec(part);
        return bold ? <strong key={index}>{bold[1]}</strong> : <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function CourseWelcome({ shortName, slug }: { shortName: string; slug: string }) {
  if (slug === "computer-science") {
    return (
      <section className="border border-[rgb(var(--line))] border-l-[5px] border-l-[#04AA6D] bg-[#F1F1F1] p-6 sm:p-8 lg:p-10 dark:bg-[rgb(var(--band))]">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#04AA6D]">Start here</p>
        <h2 className="mt-3 text-3xl font-bold uppercase tracking-wide sm:text-5xl">Welcome to this course</h2>
        <p className="mt-6 text-lg leading-relaxed">
          Welcome to the <strong>Computer Science</strong> tutorial. Start here if computer science is completely new to you.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          A <strong>program</strong> is a set of instructions a computer follows. An <strong>algorithm</strong> is the ordered method used to solve a problem, while a <strong>data structure</strong> is the way information is arranged so the program can use it. <strong>Memory</strong> is the computer&apos;s short-term working space. A <strong>system</strong> is a group of parts—programs, machines, storage, and networks—that work together. These ordinary ideas grow into the technical terms used later in the course.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Do not try to memorize definitions before you have seen them work. For each topic, read it, try the idea, change one input, and say what the computer does next.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          <strong>Words you will meet often:</strong> <strong>runtime</strong> is the time when a program is executing; a <strong>compiler</strong> translates code before it runs, while an <strong>interpreter</strong> executes it through another program; <strong>complexity</strong> describes how time or memory needs grow as the input grows; the <strong>stack</strong> stores active function calls; the <strong>heap</strong> holds longer-lived data created while the program runs; a <strong>process</strong> is a running program with its own memory; a <strong>thread</strong> is one path of work inside a process; an <strong>API</strong> is an agreed way for software parts to communicate; and a <strong>distributed system</strong> is one job performed by multiple computers that can communicate and fail independently.
        </p>
      </section>
    );
  }
  return (
    <section className="border border-[rgb(var(--line))] border-l-[5px] border-l-[#04AA6D] bg-[#F1F1F1] p-6 sm:p-8 lg:p-10 dark:bg-[rgb(var(--band))]">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#04AA6D]">Start here</p>
      <h2 className="mt-3 text-3xl font-bold uppercase tracking-wide sm:text-5xl">Welcome to this course</h2>
      <p className="mt-6 text-lg leading-relaxed">
        Welcome to the <strong>{shortName}</strong> tutorial. This page is the table of contents. Read the numbered phases in order, then open a topic when you are ready to start.
      </p>
    </section>
  );
}

export { Emphasis };
