import BostonMassachusettsHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Boston, Massachusetts (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Boston, Massachusetts. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Boston',
    'start vending business Boston Massachusetts',
    'Boston vending permits',
    'vending machine locations Boston',
    'Boston vending course',
    'vending business guide Massachusetts'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boston-massachusetts'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Boston, Massachusetts',
    description: 'Step-by-step guide with licensing, locations, and vending course for Boston, Massachusetts',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boston-massachusetts',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Boston, Massachusetts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Boston, Massachusetts',
    description: 'Complete guide with licensing, locations, and vending course for Boston, Massachusetts'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BostonMassachusettsHowToStartPage />
}
