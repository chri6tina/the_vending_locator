import WestMelbourneFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in West Melbourne, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in West Melbourne, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business West Melbourne',
    'start vending business West Melbourne, Florida',
    'West Melbourne vending permits',
    'vending machine locations West Melbourne',
    'West Melbourne vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-melbourne-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in West Melbourne, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for West Melbourne, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-melbourne-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in West Melbourne, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in West Melbourne, Florida',
    description: 'Complete guide with licensing, locations, and vending course for West Melbourne, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestMelbourneFloridaHowToStartPage />
}
