import EustisFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Eustis, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Eustis, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Eustis',
    'start vending business Eustis, Florida',
    'Eustis vending permits',
    'vending machine locations Eustis',
    'Eustis vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/eustis-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Eustis, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Eustis, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/eustis-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Eustis, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Eustis, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Eustis, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EustisFloridaHowToStartPage />
}
