import WinterHavenFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Winter Haven, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Winter Haven, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Winter Haven',
    'start vending business Winter Haven, Florida',
    'Winter Haven vending permits',
    'vending machine locations Winter Haven',
    'Winter Haven vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winter-haven-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Winter Haven, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Winter Haven, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/winter-haven-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Winter Haven, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Winter Haven, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Winter Haven, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WinterHavenFloridaHowToStartPage />
}
