import GrandJunctionColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Grand Junction, Colorado (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Grand Junction, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Grand Junction',
    'start vending business Grand Junction Colorado',
    'Grand Junction vending permits',
    'vending machine locations Grand Junction',
    'Grand Junction vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grand-junction-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Grand Junction, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Grand Junction, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grand-junction-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Grand Junction, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Grand Junction, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Grand Junction, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <GrandJunctionColoradoHowToStartPage />
}
