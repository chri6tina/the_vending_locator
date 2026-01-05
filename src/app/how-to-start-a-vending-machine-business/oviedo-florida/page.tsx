import OviedoFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oviedo, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Oviedo, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oviedo',
    'start vending business Oviedo, Florida',
    'Oviedo vending permits',
    'vending machine locations Oviedo',
    'Oviedo vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oviedo-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oviedo, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oviedo, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oviedo-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oviedo, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oviedo, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Oviedo, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OviedoFloridaHowToStartPage />
}
