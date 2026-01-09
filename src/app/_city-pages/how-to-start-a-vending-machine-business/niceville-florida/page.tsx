import NicevilleFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Niceville, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Niceville, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Niceville',
    'start vending business Niceville, Florida',
    'Niceville vending permits',
    'vending machine locations Niceville',
    'Niceville vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/niceville-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Niceville, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Niceville, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/niceville-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Niceville, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Niceville, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Niceville, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NicevilleFloridaHowToStartPage />
}
