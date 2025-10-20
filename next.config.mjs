/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["motion", "lucide-react"],
  },
  // Enable scroll restoration
  scrollRestoration: true,
  // Optimize bundle
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
