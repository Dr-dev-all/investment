/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
