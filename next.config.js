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
    // Reduce memory by limiting concurrency
    serverMinification: false,
  },
  // Optimize webpack to reduce memory usage during build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Reduce memory usage for client-side builds
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
      };
    }
    return config;
  },
  // Use standalone output to reduce memory usage
  output: 'standalone',
  // Optimize static generation to reduce memory usage
  // Use on-demand ISR for city pages to avoid building all at once
  // This reduces memory pressure during build
  // Ensure proper handling of dynamic routes
  trailingSlash: false,
  // Generate unique build ID to avoid caching issues
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Redirects for SEO preservation and 404 fixes
  async redirects() {
    return [
      // Existing redirects
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
        source: '/guide/:slug',
        destination: '/how-to-start-a-vending-machine-business/:slug',
        permanent: true,
      },
      // Specific broken URL fixes
      {
        source: '/vending-leads/penn-ylvania',
        destination: '/vending-leads/pennsylvania',
        permanent: true,
      },
      {
        source: '/vending-leads/york',
        destination: '/vending-leads/new-york',
        permanent: true,
      },
      {
        source: '/vending-leads/dc',
        destination: '/vending-leads/washington-dc',
        permanent: true,
      },
      {
        source: '/vending-leads/rochester hills-michigan',
        destination: '/vending-leads/rochester-hills-michigan',
        permanent: true,
      },
      {
        source: '/vending-leads/new-york-ny',
        destination: '/vending-leads/new-york',
        permanent: true,
      },
      {
        source: '/vending-leads/philadelphia-pa',
        destination: '/vending-leads/philadelphia-pennsylvania',
        permanent: true,
      },
      {
        source: '/location/index.html',
        destination: '/vending-leads',
        permanent: true,
      },
      // Pattern-based redirects: State abbreviations (must come before generic patterns)
      {
        source: '/vending-leads/:city-tx',
        destination: '/vending-leads/:city-texas',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-il',
        destination: '/vending-leads/:city-illinois',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ca',
        destination: '/vending-leads/:city-california',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-wa',
        destination: '/vending-leads/:city-washington',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-az',
        destination: '/vending-leads/:city-arizona',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-pa',
        destination: '/vending-leads/:city-pennsylvania',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-fl',
        destination: '/vending-leads/:city-florida',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ny',
        destination: '/vending-leads/:city-new-york',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ak',
        destination: '/vending-leads/:city-alaska',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-hi',
        destination: '/vending-leads/:city-hawaii',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ct',
        destination: '/vending-leads/:city-connecticut',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-me',
        destination: '/vending-leads/:city-maine',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-nv',
        destination: '/vending-leads/:city-nevada',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-mn',
        destination: '/vending-leads/:city-minnesota',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ar',
        destination: '/vending-leads/:city-arkansas',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-nj',
        destination: '/vending-leads/:city-new-jersey',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-or',
        destination: '/vending-leads/:city-oregon',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-la',
        destination: '/vending-leads/:city-louisiana',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ri',
        destination: '/vending-leads/:city-rhode-island',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-nh',
        destination: '/vending-leads/:city-new-hampshire',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-de',
        destination: '/vending-leads/:city-delaware',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ky',
        destination: '/vending-leads/:city-kentucky',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-sc',
        destination: '/vending-leads/:city-south-carolina',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-nc',
        destination: '/vending-leads/:city-north-carolina',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-al',
        destination: '/vending-leads/:city-alabama',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-nm',
        destination: '/vending-leads/:city-new-mexico',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-mt',
        destination: '/vending-leads/:city-montana',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-in',
        destination: '/vending-leads/:city-indiana',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ut',
        destination: '/vending-leads/:city-utah',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-co',
        destination: '/vending-leads/:city-colorado',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ma',
        destination: '/vending-leads/:city-massachusetts',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-md',
        destination: '/vending-leads/:city-maryland',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ms',
        destination: '/vending-leads/:city-mississippi',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-mo',
        destination: '/vending-leads/:city-missouri',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ok',
        destination: '/vending-leads/:city-oklahoma',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-wi',
        destination: '/vending-leads/:city-wisconsin',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-mi',
        destination: '/vending-leads/:city-michigan',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ga',
        destination: '/vending-leads/:city-georgia',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-tn',
        destination: '/vending-leads/:city-tennessee',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ia',
        destination: '/vending-leads/:city-iowa',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ks',
        destination: '/vending-leads/:city-kansas',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-ne',
        destination: '/vending-leads/:city-nebraska',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-nd',
        destination: '/vending-leads/:city-north-dakota',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-sd',
        destination: '/vending-leads/:city-south-dakota',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-wv',
        destination: '/vending-leads/:city-west-virginia',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-id',
        destination: '/vending-leads/:city-idaho',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-vt',
        destination: '/vending-leads/:city-vermont',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-va',
        destination: '/vending-leads/:city-virginia',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-wy',
        destination: '/vending-leads/:city-wyoming',
        permanent: true,
      },
      {
        source: '/vending-leads/:city-dc',
        destination: '/vending-leads/:city-washington-dc',
        permanent: true,
      },
      // Location URLs with state abbreviations
      {
        source: '/location/:city-tx',
        destination: '/vending-leads/:city-texas',
        permanent: true,
      },
      {
        source: '/location/:city-tx.html',
        destination: '/vending-leads/:city-texas',
        permanent: true,
      },
      {
        source: '/location/:city-il',
        destination: '/vending-leads/:city-illinois',
        permanent: true,
      },
      {
        source: '/location/:city-il.html',
        destination: '/vending-leads/:city-illinois',
        permanent: true,
      },
      {
        source: '/location/:city-ca',
        destination: '/vending-leads/:city-california',
        permanent: true,
      },
      {
        source: '/location/:city-ca.html',
        destination: '/vending-leads/:city-california',
        permanent: true,
      },
      {
        source: '/location/:city-wa',
        destination: '/vending-leads/:city-washington',
        permanent: true,
      },
      {
        source: '/location/:city-wa.html',
        destination: '/vending-leads/:city-washington',
        permanent: true,
      },
      {
        source: '/location/:city-az',
        destination: '/vending-leads/:city-arizona',
        permanent: true,
      },
      {
        source: '/location/:city-az.html',
        destination: '/vending-leads/:city-arizona',
        permanent: true,
      },
      {
        source: '/location/:city-pa',
        destination: '/vending-leads/:city-pennsylvania',
        permanent: true,
      },
      {
        source: '/location/:city-pa.html',
        destination: '/vending-leads/:city-pennsylvania',
        permanent: true,
      },
      {
        source: '/location/:city-fl',
        destination: '/vending-leads/:city-florida',
        permanent: true,
      },
      {
        source: '/location/:city-fl.html',
        destination: '/vending-leads/:city-florida',
        permanent: true,
      },
      {
        source: '/location/:city-ny',
        destination: '/vending-leads/:city-new-york',
        permanent: true,
      },
      {
        source: '/location/:city-ny.html',
        destination: '/vending-leads/:city-new-york',
        permanent: true,
      },
      // Generic pattern-based redirects (must come last)
      {
        source: '/location/:path*',
        destination: '/vending-leads/:path*',
        permanent: true,
      },
      {
        source: '/location/:path*.html',
        destination: '/vending-leads/:path*',
        permanent: true,
      },
      {
        source: '/vending-machines-for-sale-in-:path*',
        destination: '/vending-leads/:path*',
        permanent: true,
      },
    ];
  },
  /* config options here */
};

module.exports = nextConfig;
