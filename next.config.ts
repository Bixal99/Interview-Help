import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16.3 skips next-server.js.nft.json when Vercel's adapter is active, which
  // crashes standalone finalization. Vercel ignores standalone output anyway.
  output: process.env.VERCEL ? undefined : "standalone",
  outputFileTracingIncludes: {
    "/downloads/job-tracker": ["./data/Job_Tracker.xlsx"],
  },
  outputFileTracingExcludes: {
    "/*": [
      "node_modules/monaco-editor/**",
      "node_modules/@monaco-editor/**",
      "node_modules/mermaid/**",
      "node_modules/@mermaid-js/**",
      "node_modules/@fontsource/**",
    ],
  },
  serverExternalPackages: ["monaco-editor", "mermaid"],
  poweredByHeader: false,
  experimental: { optimizePackageImports: ["lucide-react"] },
  transpilePackages: ["media-chrome", "youtube-video-element", "ce-la-react"],
};

export default nextConfig;
