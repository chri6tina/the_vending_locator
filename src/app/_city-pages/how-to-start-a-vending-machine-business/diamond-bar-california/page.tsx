import DiamondBarCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Diamond Bar, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Diamond Bar, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Diamond Bar',
    'start vending business Diamond Bar, California',
    'Diamond Bar vending permits',
    'vending machine locations Diamond Bar',
    'Diamond Bar vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/diamond-bar-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Diamond Bar, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Diamond Bar, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/diamond-bar-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Diamond Bar, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Diamond Bar, California',
    description: 'Complete guide with licensing, locations, and vending course for Diamond Bar, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DiamondBarCaliforniaHowToStartPage />
}
