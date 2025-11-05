import PompanoBeachFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pompano Beach, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Pompano Beach, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pompano Beach',
    'start vending business Pompano Beach Florida',
    'Pompano Beach vending permits',
    'vending machine locations Pompano Beach',
    'Pompano Beach vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pompano-beach-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pompano Beach, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pompano Beach, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pompano-beach-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pompano Beach, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pompano Beach, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Pompano Beach, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PompanoBeachFloridaHowToStartPage />
}
