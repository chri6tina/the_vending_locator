import EssexJunctionVermontHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Essex Junction, Vermont (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Essex Junction, Vermont. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Essex Junction',
    'start vending business Essex Junction Vermont',
    'Essex Junction vending permits',
    'vending machine locations Essex Junction',
    'Essex Junction vending course',
    'vending business guide Vermont'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/essex-junction-vermont'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Essex Junction, Vermont',
    description: 'Step-by-step guide with licensing, locations, and vending course for Essex Junction, Vermont',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/essex-junction-vermont',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Essex Junction, Vermont'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Essex Junction, Vermont',
    description: 'Complete guide with licensing, locations, and vending course for Essex Junction, Vermont'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <EssexJunctionVermontHowToStartPage />
}
