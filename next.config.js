/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  eslint: {
    dirs: ['src'],
  },
};

// const withTM = require("next-transpile-modules")(["three"]);
// module.exports = withTM();
