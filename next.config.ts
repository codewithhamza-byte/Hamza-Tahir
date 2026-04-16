import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Useful for some deployments or if using static export
  },
};

export default nextConfig;
