import Link from "next/link";
import { GithubLogoIcon } from "@phosphor-icons/react/ssr";

export function SiteFooter() {
  return (
    <footer className="ih-footer">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center">
        <p className="sm:mr-auto">Interview Help. Source Markdown stays in the repository.</p>
        <Link href="/progress">Progress</Link>
        <Link href="/about">About</Link>
        <a href="https://github.com/Bixal99/Interview-Help" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          <GithubLogoIcon size={15} /> GitHub
        </a>
      </div>
    </footer>
  );
}
