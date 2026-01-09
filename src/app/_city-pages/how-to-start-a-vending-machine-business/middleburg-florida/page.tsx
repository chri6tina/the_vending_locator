import MiddleburgFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Middleburg, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Middleburg, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Middleburg',
    'start vending business Middleburg, Florida',
    'Middleburg vending permits',
    'vending machine locations Middleburg',
    'Middleburg vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/middleburg-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Middleburg, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Middleburg, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/middleburg-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Middleburg, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Middleburg, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Middleburg, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MiddleburgFloridaHowToStartPage />
}
