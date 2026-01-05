import BethelAlaskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bethel, Alaska (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bethel, Alaska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bethel',
    'start vending business Bethel, Alaska',
    'Bethel vending permits',
    'vending machine locations Bethel',
    'Bethel vending course',
    'vending business guide Alaska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bethel-alaska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bethel, Alaska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bethel, Alaska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bethel-alaska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bethel, Alaska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bethel, Alaska',
    description: 'Complete guide with licensing, locations, and vending course for Bethel, Alaska'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BethelAlaskaHowToStartPage />
}
