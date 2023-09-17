/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pouya-barari-g.iran.liara.run",
      },
      {
        hostname: "pouya-bararig.ir",
      },
    ],
  },
};

module.exports = nextConfig;
