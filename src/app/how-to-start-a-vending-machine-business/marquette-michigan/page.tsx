import MarquetteMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Marquette, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Marquette, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Marquette',
    'start vending business Marquette, Michigan',
    'Marquette vending permits',
    'vending machine locations Marquette',
    'Marquette vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/marquette-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Marquette, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Marquette, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/marquette-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Marquette, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Marquette, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Marquette, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MarquetteMichiganHowToStartPage />
}
