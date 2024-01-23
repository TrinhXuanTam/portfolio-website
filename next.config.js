/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "storage.googleapis.com"],
  },
  output: 'standalone',
};

module.exports = nextConfig;
