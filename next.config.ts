import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingIncludes: {
    "/downloads/job-tracker": ["./data/Job_Tracker.xlsx"],
  },
  poweredByHeader: false,
  experimental: { optimizePackageImports: ["lucide-react"] },
};

export default nextConfig;
