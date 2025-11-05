import BendOregonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bend, Oregon (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Bend, Oregon. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bend',
    'start vending business Bend Oregon',
    'Bend vending permits',
    'vending machine locations Bend',
    'Bend vending course',
    'vending business guide Oregon'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bend-oregon'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bend, Oregon',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bend, Oregon',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bend-oregon',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bend, Oregon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bend, Oregon',
    description: 'Complete guide with licensing, locations, and vending course for Bend, Oregon'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BendOregonHowToStartPage />
}
