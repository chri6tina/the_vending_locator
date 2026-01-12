import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New masculine color scheme
        'navy': '#4f6f8f',        // Softer, more pastel navy blue
        'navy-light': '#6b8bb3',  // Lighter pastel navy for accents
        'charcoal': '#374151',     // Dark charcoal gray
        'stone': '#78716c',       // Warm stone gray
        'warm-white': '#fafaf9',  // Warm off-white
        'bronze': '#92400e',      // Rich bronze accent
        'bronze-light': '#a16207', // Lighter bronze
        'coral': '#f97360',       // CTA coral color
        'cream': '#fef9f3',       // Light cream for cards
        'chocolate': '#7c2d12',   // Chocolate brown
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
