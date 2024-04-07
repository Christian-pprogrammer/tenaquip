/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tenaquip.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1"
      }
    ],
    domains: ["www.tenaquip.com", "127.0.0.1"],
  },
  env: {
    MEDUSA_BACKEND_API: process.env.MEDUSA_BACKEND_API
  }
};

export default nextConfig;
