import RochesterHillsMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rochester Hills, Michigan (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Rochester Hills, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rochester Hills',
    'start vending business Rochester Hills Michigan',
    'Rochester Hills vending permits',
    'vending machine locations Rochester Hills',
    'Rochester Hills vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rochester-hills-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rochester Hills, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rochester Hills, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rochester-hills-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rochester Hills, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rochester Hills, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Rochester Hills, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RochesterHillsMichiganHowToStartPage />
}
