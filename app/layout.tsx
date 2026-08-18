import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";
import { ProgressProvider } from "@/components/progress-client";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SubjectBar } from "@/components/subject-bar";
import { getProgressLookup } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://interview-help.vercel.app"),
  title: { default: "Interview Help", template: "%s · Interview Help" },
  description: "Free tutorial pages for the Interview Help roadmaps: one lesson at a time, with the matching phase project on its own page.",
  openGraph: { title: "Interview Help", description: "Learn one lesson, then complete that phase's project.", type: "website" },
};

const CONTRACT = `<!--
THESIS: Interview Help is a tutorial school for existing Markdown, not a SaaS landing or a single HTML dump of a roadmap.
OWN-WORLD: Warm paper desk, Source Sans 3, charcoal ink, one study-blue accent, W3 two-column tutorial chrome.
STORY: A learner opens a course, reads one lesson, watches its video here, then completes that phase's project before the next chapter unlocks.
FIRST VIEWPORT: Dark utility bar, subject bar of 12 courses, search-led library directory with Continue and path links.
FORM: W3Schools tutorial school / pinned brief / seed skipped because the plan pinned layout and palette.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lookup = getProgressLookup();
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('ih-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}` }} /></head>
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-20 bg-ink px-4 py-2 text-paper focus:translate-y-0">Skip to content</a>
        <ProgressProvider lookup={lookup}>
          <SiteHeader />
          <SubjectBar />
          {children}
          <SiteFooter />
        </ProgressProvider>
      </body>
    </html>
  );
}
