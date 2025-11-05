import SantaFeNewMexicoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Santa Fe, New Mexico (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Santa Fe, New Mexico. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Santa Fe',
    'start vending business Santa Fe New Mexico',
    'Santa Fe vending permits',
    'vending machine locations Santa Fe',
    'Santa Fe vending course',
    'vending business guide New Mexico'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/santa-fe-new-mexico'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Santa Fe, New Mexico',
    description: 'Step-by-step guide with licensing, locations, and vending course for Santa Fe, New Mexico',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/santa-fe-new-mexico',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Santa Fe, New Mexico'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Santa Fe, New Mexico',
    description: 'Complete guide with licensing, locations, and vending course for Santa Fe, New Mexico'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <SantaFeNewMexicoHowToStartPage />
}
