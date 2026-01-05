import TraverseCityMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Traverse City, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Traverse City, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Traverse City',
    'start vending business Traverse City, Michigan',
    'Traverse City vending permits',
    'vending machine locations Traverse City',
    'Traverse City vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/traverse-city-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Traverse City, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Traverse City, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/traverse-city-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Traverse City, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Traverse City, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Traverse City, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TraverseCityMichiganHowToStartPage />
}
