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
  // Optimize build performance
  productionBrowserSourceMaps: false,
  // Enable SWC minification
  swcMinify: true,
  // Reduce memory usage during build
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['@heroicons/react', 'framer-motion'],
    // Reduce memory usage during static generation
    workerThreads: false,
    cpus: 1,
  },
  // Optimize static generation to reduce memory usage
  // Use on-demand ISR for city pages to avoid building all at once
  // This reduces memory pressure during build
  // Ensure proper handling of dynamic routes
  trailingSlash: false,
  // Redirects for SEO preservation
  async redirects() {
    return [
      {
        source: '/howitworks',
        destination: '/how-it-works',
        permanent: true,
      },
      {
        source: '/how-itworks',
        destination: '/how-it-works',
        permanent: true,
      },
      {
        source: '/how-it-work',
        destination: '/how-it-works',
        permanent: true,
      },
      {
        source: '/vending-leads/dc',
        destination: '/vending-leads/washington-dc',
        permanent: true,
      },
      {
        source: '/location/new-york-ny',
        destination: '/vending-leads/new-york',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/guide/:slug',
        destination: '/how-to-start-a-vending-machine-business/:slug',
        permanent: true,
      },
    ];
  },
  /* config options here */
};

module.exports = nextConfig;
