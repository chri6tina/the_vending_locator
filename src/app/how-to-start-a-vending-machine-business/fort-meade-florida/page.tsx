import FortMeadeFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fort Meade, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fort Meade, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fort Meade',
    'start vending business Fort Meade, Florida',
    'Fort Meade vending permits',
    'vending machine locations Fort Meade',
    'Fort Meade vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-meade-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fort Meade, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fort Meade, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-meade-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fort Meade, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fort Meade, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Fort Meade, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FortMeadeFloridaHowToStartPage />
}
