import BurlingameCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Burlingame, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Burlingame, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Burlingame',
    'start vending business Burlingame, California',
    'Burlingame vending permits',
    'vending machine locations Burlingame',
    'Burlingame vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/burlingame-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Burlingame, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Burlingame, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/burlingame-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Burlingame, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Burlingame, California',
    description: 'Complete guide with licensing, locations, and vending course for Burlingame, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BurlingameCaliforniaHowToStartPage />
}
