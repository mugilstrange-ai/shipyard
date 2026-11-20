import type { NextConfig } from "next";
// GitHub Pages hosts this repository at /shipyard/ instead of the domain root.
// Static export disables server-only Next.js features intentionally.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shipyard",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
