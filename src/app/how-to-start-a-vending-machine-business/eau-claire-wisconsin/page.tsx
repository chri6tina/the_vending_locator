import EauClaireWisconsinHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Eau Claire, Wisconsin (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Eau Claire, Wisconsin. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Eau Claire',
    'start vending business Eau Claire Wisconsin',
    'Eau Claire vending permits',
    'vending machine locations Eau Claire',
    'Eau Claire vending course',
    'vending business guide Wisconsin'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/eau-claire-wisconsin'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Eau Claire, Wisconsin',
    description: 'Step-by-step guide with licensing, locations, and vending course for Eau Claire, Wisconsin',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/eau-claire-wisconsin',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Eau Claire, Wisconsin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Eau Claire, Wisconsin',
    description: 'Complete guide with licensing, locations, and vending course for Eau Claire, Wisconsin'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <EauClaireWisconsinHowToStartPage />
}
