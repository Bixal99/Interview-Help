import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingIncludes: {
    "/downloads/job-tracker": ["./data/Job_Tracker.xlsx"],
  },
  poweredByHeader: false,
  experimental: { optimizePackageImports: ["lucide-react"] },
  transpilePackages: ["media-chrome", "youtube-video-element", "ce-la-react"],
};

export default nextConfig;
