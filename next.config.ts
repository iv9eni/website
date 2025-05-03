import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export

  // Set base path for GitHub pages
  basePath: process.env.GITHUB_PAGES ? "/website" : "",

  // Configures asset prefix for GitHub pages
  assetPrefix: process.env.GITHUB_PAGES
    ? "https://iv9eni.github.io/website/"
    : undefined,

  // Disable server-side rendering since GitHub pages doesn't support it
  trailingSlash: true,

  // Configure images for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
