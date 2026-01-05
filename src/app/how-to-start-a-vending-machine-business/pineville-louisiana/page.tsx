import PinevilleLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pineville, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pineville, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pineville',
    'start vending business Pineville, Louisiana',
    'Pineville vending permits',
    'vending machine locations Pineville',
    'Pineville vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pineville-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pineville, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pineville, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pineville-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pineville, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pineville, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Pineville, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PinevilleLouisianaHowToStartPage />
}
