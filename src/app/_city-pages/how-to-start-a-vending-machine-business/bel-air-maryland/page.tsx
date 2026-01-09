import BelAirMarylandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bel Air, Maryland (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bel Air, Maryland. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bel Air',
    'start vending business Bel Air, Maryland',
    'Bel Air vending permits',
    'vending machine locations Bel Air',
    'Bel Air vending course',
    'vending business guide Maryland'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bel-air-maryland'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bel Air, Maryland',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bel Air, Maryland',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bel-air-maryland',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bel Air, Maryland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bel Air, Maryland',
    description: 'Complete guide with licensing, locations, and vending course for Bel Air, Maryland'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BelAirMarylandHowToStartPage />
}
