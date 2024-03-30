/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tenaquip.com",
      },
    ],
    domains: ["www.tenaquip.com"],
  },
  env: {
    MEDUSA_BACKEND_API: process.env.MEDUSA_BACKEND_API
  }
};

export default nextConfig;
