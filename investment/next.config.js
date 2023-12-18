/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
