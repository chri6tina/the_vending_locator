import ParklandFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Parkland, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Parkland, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Parkland',
    'start vending business Parkland, Florida',
    'Parkland vending permits',
    'vending machine locations Parkland',
    'Parkland vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/parkland-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Parkland, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Parkland, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/parkland-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Parkland, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Parkland, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Parkland, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ParklandFloridaHowToStartPage />
}
