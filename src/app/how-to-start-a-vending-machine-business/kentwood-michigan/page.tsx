import KentwoodMichiganHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kentwood, Michigan (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Kentwood, Michigan. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kentwood',
    'start vending business Kentwood Michigan',
    'Kentwood vending permits',
    'vending machine locations Kentwood',
    'Kentwood vending course',
    'vending business guide Michigan'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kentwood-michigan'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kentwood, Michigan',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kentwood, Michigan',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kentwood-michigan',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kentwood, Michigan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kentwood, Michigan',
    description: 'Complete guide with licensing, locations, and vending course for Kentwood, Michigan'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <KentwoodMichiganHowToStartPage />
}
