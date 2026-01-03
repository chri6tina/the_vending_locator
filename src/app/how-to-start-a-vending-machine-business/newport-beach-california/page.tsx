import NewportBeachCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Newport Beach, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Newport Beach, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Newport Beach',
    'start vending business Newport Beach California',
    'Newport Beach vending permits',
    'vending machine locations Newport Beach',
    'Newport Beach vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/newport-beach-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Newport Beach, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Newport Beach, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/newport-beach-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Newport Beach, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Newport Beach, California',
    description: 'Complete guide with licensing, locations, and vending course for Newport Beach, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NewportBeachCaliforniaHowToStartPage />
}



