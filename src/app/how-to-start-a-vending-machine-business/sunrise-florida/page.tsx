import SunriseFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Sunrise, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Sunrise, F. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Sunrise',
    'start vending business Sunrise Florida',
    'Sunrise vending permits',
    'vending machine locations Sunrise',
    'Sunrise vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sunrise-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Sunrise, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Sunrise, F',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/sunrise-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Sunrise, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Sunrise, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Sunrise, F'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SunriseFloridaHowToStartPage />
}



