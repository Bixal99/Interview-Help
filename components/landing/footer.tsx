import Link from "next/link";
import { BrandWordmark } from "@/components/brand-mark";
import { SITE_NAME } from "@/lib/brand";

const learn = [
  { href: "/courses", label: "Tutorials" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const tools = [
  { href: "/progress", label: "Progress" },
  { href: "/search", label: "Search" },
  { href: "/cv-template", label: "CV template" },
  { href: "/downloads/job-tracker", label: "Job tracker" },
];

export function LandingFooter() {
  return (
    <footer className="ih-landing-foot">
      <div className="ih-landing-foot-inner">
        <div className="ih-landing-foot-cta">
          <div>
            <p className="ih-landing-foot-kicker">Start learning</p>
            <h2 className="ih-landing-foot-headline">
              Pick a tutorial. Dig into the next lesson.
            </h2>
          </div>
          <Link href="/courses" className="ih-landing-cta ih-landing-foot-browse">
            Browse tutorials
          </Link>
        </div>

        <div className="ih-landing-foot-grid">
          <div className="ih-landing-foot-brand">
            <Link href="/" className="ih-landing-logo is-foot">
              <BrandWordmark />
            </Link>
            <p>
              {SITE_NAME} turns the repo Markdown into one-lesson tutorial pages. No account and no paywall.
            </p>
            <a
              href="https://github.com/Bixal99/Interview-Help"
              title="GitHub"
              className="ih-landing-foot-github"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
              </svg>
              Star on GitHub
            </a>
          </div>

          <nav className="ih-landing-foot-col" aria-label="Learn">
            <p className="ih-landing-foot-label">Learn</p>
            <ul>
              {learn.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="ih-landing-foot-col" aria-label="Tools">
            <p className="ih-landing-foot-label">Tools</p>
            <ul>
              {tools.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("/downloads") ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ih-landing-foot-note">
            <p className="ih-landing-foot-label">Open source</p>
            <p>
              Built from Markdown in the repo. Fork it, fix it, teach with it.
            </p>
          </div>
        </div>

        <div className="ih-landing-foot-bar">
          <p>© 2026 {SITE_NAME}</p>
          <p className="ih-landing-foot-tag">No account · No paywall</p>
        </div>
      </div>
    </footer>
  );
}
