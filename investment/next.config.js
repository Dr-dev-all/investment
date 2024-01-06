/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,

  env: {
    MONGO_URI:
      'mongodb+srv://bullharvest:bullharvest123@cluster0.nqd7zmu.mongodb.net/investdbretryWrites=true&w=majority',
    ACCESS_TOKEN_SEC: 'k1J22I2B2KJCBKDNBJNJNSS786BDBNX',
    REFRESH_TOKEN_SEC: 'knosdnonkslsm889r9rmmff86BDvvv',
  },

  webpack: (config) => {
    config.resolve.fallback = {
      'mongodb-client-encryption': false,
      aws4: false,
    };
  },
};
