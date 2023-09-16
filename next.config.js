/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pouya-barari-g.iran.liara.run",
      },
    ],
  },
};

module.exports = nextConfig;
