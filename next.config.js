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
  // Redirects for SEO preservation
  async redirects() {
    return [
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
