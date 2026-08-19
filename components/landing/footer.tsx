import Link from "next/link";
import { BrandWordmark } from "@/components/brand-mark";
import { SITE_NAME } from "@/lib/brand";

export function LandingFooter() {
  return (
    <footer className="ih-landing-foot">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="ih-landing-logo is-foot">
              <BrandWordmark />
            </Link>
            <p className="mt-6 max-w-[38ch] text-base leading-relaxed text-[#c8c8c8]">
              {SITE_NAME} turns the repo Markdown into one-lesson tutorial pages. No account and no paywall.
            </p>
            <a
              href="https://github.com/Bixal99/Interview-Help"
              title="GitHub"
              className="mt-8 inline-flex items-center gap-2 font-semibold"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
              </svg>
              GitHub
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9aa0a6]">Learn</p>
            <ul className="mt-5 space-y-3 text-base">
              <li><Link href="/courses">Tutorials</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9aa0a6]">Tools</p>
            <ul className="mt-5 space-y-3 text-base">
              <li><Link href="/progress">Progress</Link></li>
              <li><Link href="/search">Search</Link></li>
              <li><Link href="/cv-template">CV template</Link></li>
              <li><a href="/downloads/job-tracker">Job tracker</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9aa0a6]">Start learning</p>
            <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-[#c8c8c8]">
              New to coding? Open Computer Science. Programming fundamentals start at Phase 3.
            </p>
            <Link href="/courses" className="ih-landing-cta mt-6">
              Browse tutorials
            </Link>
          </div>
        </div>

        <p className="mt-16 border-t border-white/10 pt-8 text-sm text-[#9aa0a6]">© 2026 {SITE_NAME}</p>
      </div>
    </footer>
  );
}
