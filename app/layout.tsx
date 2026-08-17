import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://interview-help.vercel.app"),
  title: { default: "Interview Help — Learn from first principles", template: "%s · Interview Help" },
  description: "Free, connected technical roadmaps from first principles to interview-ready skill.",
  openGraph: { title: "Interview Help", description: "Learn. Practice. Build. Interview.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('ih-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}` }} /></head>
      <body><a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-20 rounded-lg bg-ink px-4 py-2 text-paper focus:translate-y-0">Skip to content</a><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
