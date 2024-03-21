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
};

export default nextConfig;
