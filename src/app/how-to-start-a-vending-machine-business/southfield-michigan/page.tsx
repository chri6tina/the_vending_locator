import SouthfieldMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Southfield, Michigan (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Southfield, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Southfield',
    'start vending business Southfield, Michigan',
    'Southfield vending permits',
    'vending machine locations Southfield',
    'Southfield vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/southfield-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Southfield, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Southfield, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/southfield-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Southfield, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Southfield, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Southfield, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthfieldMichiganHowToStartPage />
}
