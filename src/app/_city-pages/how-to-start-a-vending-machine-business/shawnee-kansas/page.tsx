import ShawneeKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Shawnee, Kansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Shawnee, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Shawnee',
    'start vending business Shawnee, Kansas',
    'Shawnee vending permits',
    'vending machine locations Shawnee',
    'Shawnee vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/shawnee-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Shawnee, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Shawnee, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/shawnee-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Shawnee, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Shawnee, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Shawnee, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ShawneeKansasHowToStartPage />
}
