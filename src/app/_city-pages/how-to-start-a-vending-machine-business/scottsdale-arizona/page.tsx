import ScottsdaleArizonaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Scottsdale, Arizona (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Scottsdale, Arizona. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Scottsdale',
    'start vending business Scottsdale Arizona',
    'Scottsdale vending permits',
    'vending machine locations Scottsdale',
    'Scottsdale vending course',
    'vending business guide Arizona'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/scottsdale-arizona'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Scottsdale, Arizona',
    description: 'Step-by-step guide with licensing, locations, and vending course for Scottsdale, Arizona',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/scottsdale-arizona',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Scottsdale, Arizona'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Scottsdale, Arizona',
    description: 'Complete guide with licensing, locations, and vending course for Scottsdale, Arizona'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ScottsdaleArizonaHowToStartPage />
}
