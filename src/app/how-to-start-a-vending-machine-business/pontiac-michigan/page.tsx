import PontiacMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pontiac, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Pontiac, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pontiac',
    'start vending business Pontiac Michigan',
    'Pontiac vending permits',
    'vending machine locations Pontiac',
    'Pontiac vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pontiac-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pontiac, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pontiac, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pontiac-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pontiac, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pontiac, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Pontiac, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PontiacMichiganHowToStartPage />
}
