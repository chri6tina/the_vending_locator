import BrocktonMassachusettsHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Brockton, Massachusetts (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Brockton, Massachusetts. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Brockton',
    'start vending business Brockton, Massachusetts',
    'Brockton vending permits',
    'vending machine locations Brockton',
    'Brockton vending course',
    'vending business guide Massachusetts'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brockton-massachusetts'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Brockton, Massachusetts',
    description: 'Step-by-step guide with licensing, locations, and vending course for Brockton, Massachusetts',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/brockton-massachusetts',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Brockton, Massachusetts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Brockton, Massachusetts',
    description: 'Complete guide with licensing, locations, and vending course for Brockton, Massachusetts'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BrocktonMassachusettsHowToStartPage />
}
