/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    esmExternals: 'loose', // <-- add this
    serverComponentsExternalPackages: ['mongoose'], // <-- and this
  },
  // and the following to enable top-level await support for Webpack
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_BASE_URL
  },
};
