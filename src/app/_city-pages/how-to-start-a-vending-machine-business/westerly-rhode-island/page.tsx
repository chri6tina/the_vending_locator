import WesterlyRhodeIslandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Westerly, Rhode Island (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Westerly, Rhode Island. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Westerly',
    'start vending business Westerly, Rhode Island',
    'Westerly vending permits',
    'vending machine locations Westerly',
    'Westerly vending course',
    'vending business guide Rhode Island'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/westerly-rhode-island'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Westerly, Rhode Island',
    description: 'Step-by-step guide with licensing, locations, and vending course for Westerly, Rhode Island',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/westerly-rhode-island',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Westerly, Rhode Island'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Westerly, Rhode Island',
    description: 'Complete guide with licensing, locations, and vending course for Westerly, Rhode Island'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WesterlyRhodeIslandHowToStartPage />
}
