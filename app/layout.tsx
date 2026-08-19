import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";
import { AppChrome } from "@/components/app-chrome";
import { ProgressProvider } from "@/components/progress-client";
import { getProgressLookup } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://interview-help.vercel.app"),
  title: { default: "Quarry", template: "%s · Quarry" },
  description: "Free tutorial pages for Quarry roadmaps: one lesson at a time, with the matching phase project on its own page.",
  openGraph: { title: "Quarry", description: "Learn one lesson, then complete that phase's project.", type: "website" },
};

const CONTRACT = `<!--
THESIS: Quarry is a tutorial school for existing Markdown. The landing is an original marketing page in the site's black/green/paper family, not a W3Schools clone and not a cream template.
OWN-WORLD: Landing uses paper #F1F1F1, ink #1A1A1A, band #282A35, accent #04AA6D, white nav with a green rule, square pastel course tiles. Tutorial chrome stays .ih-w3.
STORY: A learner lands, reads the offer, picks a course card, then follows one lesson and that phase's project.
FIRST VIEWPORT: Tall white nav, large ink headline, green Start learning, compact real counts.
FORM: W3 color family, original landing composition; seed skipped because the brief named the sections.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lookup = getProgressLookup();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{localStorage.removeItem('ih-theme');document.documentElement.classList.remove('dark')}catch(e){}` }} />
      </head>
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
