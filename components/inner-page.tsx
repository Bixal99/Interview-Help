export function InnerPage({
  title,
  description,
  children,
  wide,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const measure = wide ? "max-w-[1600px]" : "max-w-[75ch]";
  return (
    <main id="main-content">
      <div className="ih-band px-4 py-8 sm:px-8">
        <h1 className={`mx-auto ${measure} text-3xl font-bold sm:text-4xl`}>{title}</h1>
        {description ? <p className={`mx-auto mt-3 ${measure} text-white/80`}>{description}</p> : null}
      </div>
      <div className="bg-[rgb(var(--surface))] px-4 py-8 sm:px-8">
        <div className={`mx-auto ${measure}`}>{children}</div>
      </div>
    </main>
  );
}
