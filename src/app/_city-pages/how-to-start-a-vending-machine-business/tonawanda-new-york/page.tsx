import TonawandaNewYorkHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Tonawanda, New York (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Tonawanda, New York. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Tonawanda',
    'start vending business Tonawanda, New York',
    'Tonawanda vending permits',
    'vending machine locations Tonawanda',
    'Tonawanda vending course',
    'vending business guide New York'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tonawanda-new-york'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Tonawanda, New York',
    description: 'Step-by-step guide with licensing, locations, and vending course for Tonawanda, New York',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tonawanda-new-york',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Tonawanda, New York'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Tonawanda, New York',
    description: 'Complete guide with licensing, locations, and vending course for Tonawanda, New York'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <TonawandaNewYorkHowToStartPage />
}
