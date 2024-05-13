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
    MEDUSA_BACKEND_API: process.env.MEDUSA_BACKEND_API,
    STRAPI_API: process.env.STRAPI_API,
    STRAPI_UPLOADS: process.env.STRAPI_UPLOADS,
    NEXT_PUBLIC_STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  }
};

export default nextConfig;
