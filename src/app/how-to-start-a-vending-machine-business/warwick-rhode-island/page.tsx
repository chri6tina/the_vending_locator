import WarwickRhodeIslandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Warwick, Rhode Island (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Warwick, Rhode Island. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Warwick',
    'start vending business Warwick Rhode Island',
    'Warwick vending permits',
    'vending machine locations Warwick',
    'Warwick vending course',
    'vending business guide Rhode Island'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/warwick-rhode-island'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Warwick, Rhode Island',
    description: 'Step-by-step guide with licensing, locations, and vending course for Warwick, Rhode Island',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/warwick-rhode-island',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Warwick, Rhode Island'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Warwick, Rhode Island',
    description: 'Complete guide with licensing, locations, and vending course for Warwick, Rhode Island'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WarwickRhodeIslandHowToStartPage />
}
