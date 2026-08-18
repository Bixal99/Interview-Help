import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";
import { AppChrome } from "@/components/app-chrome";
import { ProgressProvider } from "@/components/progress-client";
import { getProgressLookup } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://interview-help.vercel.app"),
  title: { default: "Interview Help", template: "%s · Interview Help" },
  description: "Free tutorial pages for the Interview Help roadmaps: one lesson at a time, with the matching phase project on its own page.",
  openGraph: { title: "Interview Help", description: "Learn one lesson, then complete that phase's project.", type: "website" },
};

const CONTRACT = `<!--
THESIS: Interview Help is a tutorial school for existing Markdown. Home is a cream Celebration-style landing (hero, offer, features, how it works). Tutorial pages keep the black bar and lesson chrome.
OWN-WORLD: Landing uses cream #FCF8F1, yellow-300 CTAs, black pills, blue-600 links. Tutorial chrome stays the existing ink bar and accent.
STORY: A learner lands on the marketing home, picks a track, reads one lesson, then completes that phase's project before the next chapter unlocks.
FIRST VIEWPORT: Cream header, split hero, Start learning CTA.
FORM: W3Schools tutorial school / user-pinned competitor path / seed skipped.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lookup = getProgressLookup();
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('ih-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}` }} /></head>
      <body>
        <span hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-20 bg-ink px-4 py-2 text-paper focus:translate-y-0">Skip to content</a>
        <ProgressProvider lookup={lookup}>
          <AppChrome>{children}</AppChrome>
        </ProgressProvider>
      </body>
    </html>
  );
}
