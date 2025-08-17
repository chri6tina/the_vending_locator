/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['picsum.photos', 'images.ctfassets.net'],
  },
  // Ensure proper handling of dynamic routes
  trailingSlash: false,
  /* config options here */
};

module.exports = nextConfig;
