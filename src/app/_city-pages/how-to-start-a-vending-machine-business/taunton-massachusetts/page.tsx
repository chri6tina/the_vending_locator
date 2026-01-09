import TauntonMassachusettsHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Taunton, Massachusetts (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Taunton, Massachusetts. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Taunton',
    'start vending business Taunton, Massachusetts',
    'Taunton vending permits',
    'vending machine locations Taunton',
    'Taunton vending course',
    'vending business guide Massachusetts'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/taunton-massachusetts'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Taunton, Massachusetts',
    description: 'Step-by-step guide with licensing, locations, and vending course for Taunton, Massachusetts',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/taunton-massachusetts',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Taunton, Massachusetts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Taunton, Massachusetts',
    description: 'Complete guide with licensing, locations, and vending course for Taunton, Massachusetts'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TauntonMassachusettsHowToStartPage />
}
