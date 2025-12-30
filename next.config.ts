import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ofc',
  assetPrefix: '/ofc',
};

export default nextConfig;
