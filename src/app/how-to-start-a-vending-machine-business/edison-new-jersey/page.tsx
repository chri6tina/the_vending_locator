import EdisonNewJerseyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Edison, New Jersey (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Edison, New Jersey. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Edison',
    'start vending business Edison New Jersey',
    'Edison vending permits',
    'vending machine locations Edison',
    'Edison vending course',
    'vending business guide New Jersey'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/edison-new-jersey'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Edison, New Jersey',
    description: 'Step-by-step guide with licensing, locations, and vending course for Edison, New Jersey',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/edison-new-jersey',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Edison, New Jersey'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Edison, New Jersey',
    description: 'Complete guide with licensing, locations, and vending course for Edison, New Jersey'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <EdisonNewJerseyHowToStartPage />
}
