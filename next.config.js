/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  }
  
  module.exports = nextConfig

  const withSass = require('@zeit/next-sass');
module.exports = withSass({});
