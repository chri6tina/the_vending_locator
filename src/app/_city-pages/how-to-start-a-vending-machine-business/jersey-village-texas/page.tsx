import JerseyVillageTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Jersey Village, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Jersey Village, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Jersey Village',
    'start vending business Jersey Village, Texas',
    'Jersey Village vending permits',
    'vending machine locations Jersey Village',
    'Jersey Village vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jersey-village-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Jersey Village, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Jersey Village, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jersey-village-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Jersey Village, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Jersey Village, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Jersey Village, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <JerseyVillageTexasHowToStartPage />
}
