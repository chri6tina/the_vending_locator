import PlainfieldNewJerseyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Plainfield, New Jersey (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Plainfield, New Jersey. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Plainfield',
    'start vending business Plainfield, New Jersey',
    'Plainfield vending permits',
    'vending machine locations Plainfield',
    'Plainfield vending course',
    'vending business guide New Jersey'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/plainfield-new-jersey'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Plainfield, New Jersey',
    description: 'Step-by-step guide with licensing, locations, and vending course for Plainfield, New Jersey',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/plainfield-new-jersey',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Plainfield, New Jersey'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Plainfield, New Jersey',
    description: 'Complete guide with licensing, locations, and vending course for Plainfield, New Jersey'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PlainfieldNewJerseyHowToStartPage />
}
