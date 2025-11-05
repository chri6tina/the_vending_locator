import VallejoCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Vallejo, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Vallejo, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Vallejo',
    'start vending business Vallejo California',
    'Vallejo vending permits',
    'vending machine locations Vallejo',
    'Vallejo vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/vallejo-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Vallejo, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Vallejo, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/vallejo-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Vallejo, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Vallejo, California',
    description: 'Complete guide with licensing, locations, and vending course for Vallejo, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <VallejoCaliforniaHowToStartPage />
}
