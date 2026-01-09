import EverettMassachusettsHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Everett, Massachusetts (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Everett, Massachusetts. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Everett',
    'start vending business Everett, Massachusetts',
    'Everett vending permits',
    'vending machine locations Everett',
    'Everett vending course',
    'vending business guide Massachusetts'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/everett-massachusetts'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Everett, Massachusetts',
    description: 'Step-by-step guide with licensing, locations, and vending course for Everett, Massachusetts',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/everett-massachusetts',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Everett, Massachusetts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Everett, Massachusetts',
    description: 'Complete guide with licensing, locations, and vending course for Everett, Massachusetts'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EverettMassachusettsHowToStartPage />
}
