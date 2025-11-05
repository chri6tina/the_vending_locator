import BocaRatonFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Boca Raton, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Boca Raton, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Boca Raton',
    'start vending business Boca Raton Florida',
    'Boca Raton vending permits',
    'vending machine locations Boca Raton',
    'Boca Raton vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boca-raton-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Boca Raton, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Boca Raton, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/boca-raton-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Boca Raton, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Boca Raton, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Boca Raton, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BocaRatonFloridaHowToStartPage />
}
