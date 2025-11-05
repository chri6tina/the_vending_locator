import BellevueWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bellevue, Washington (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Bellevue, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bellevue',
    'start vending business Bellevue Washington',
    'Bellevue vending permits',
    'vending machine locations Bellevue',
    'Bellevue vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bellevue-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bellevue, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bellevue, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bellevue-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bellevue, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bellevue, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Bellevue, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BellevueWashingtonHowToStartPage />
}
