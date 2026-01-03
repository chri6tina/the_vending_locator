import LafayetteLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lafayette, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lafayette, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lafayette',
    'start vending business Lafayette Louisiana',
    'Lafayette vending permits',
    'vending machine locations Lafayette',
    'Lafayette vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lafayette-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lafayette, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lafayette, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lafayette-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lafayette, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lafayette, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Lafayette, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LafayetteLouisianaHowToStartPage />
}
