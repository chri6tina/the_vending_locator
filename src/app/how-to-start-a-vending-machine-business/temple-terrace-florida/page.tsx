import TempleTerraceFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Temple Terrace, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Temple Terrace, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Temple Terrace',
    'start vending business Temple Terrace, Florida',
    'Temple Terrace vending permits',
    'vending machine locations Temple Terrace',
    'Temple Terrace vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/temple-terrace-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Temple Terrace, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Temple Terrace, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/temple-terrace-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Temple Terrace, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Temple Terrace, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Temple Terrace, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TempleTerraceFloridaHowToStartPage />
}
