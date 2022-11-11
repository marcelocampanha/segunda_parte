/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
  },
};

module.exports = nextConfig;
