import BeavertonOregonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Beaverton, Oregon (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Beaverton, Oregon. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Beaverton',
    'start vending business Beaverton Oregon',
    'Beaverton vending permits',
    'vending machine locations Beaverton',
    'Beaverton vending course',
    'vending business guide Oregon'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/beaverton-oregon'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Beaverton, Oregon',
    description: 'Step-by-step guide with licensing, locations, and vending course for Beaverton, Oregon',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/beaverton-oregon',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Beaverton, Oregon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Beaverton, Oregon',
    description: 'Complete guide with licensing, locations, and vending course for Beaverton, Oregon'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BeavertonOregonHowToStartPage />
}
