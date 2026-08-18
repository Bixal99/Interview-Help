import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto flex min-h-[65vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">This path is not in the tutorial.</h1>
      <p className="mt-4 text-muted">The page may have moved, or the source link may need an update.</p>
      <Link href="/courses" className="btn-next mt-7">Browse tutorials</Link>
    </main>
  );
}
