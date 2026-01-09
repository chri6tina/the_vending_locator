import GreatBendMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Great Bend, Maine (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Great Bend, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Great Bend',
    'start vending business Great Bend, Maine',
    'Great Bend vending permits',
    'vending machine locations Great Bend',
    'Great Bend vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/great-bend-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Great Bend, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Great Bend, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/great-bend-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Great Bend, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Great Bend, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Great Bend, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GreatBendMaineHowToStartPage />
}
