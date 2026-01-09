import MorganHillCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Morgan Hill, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Morgan Hill, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Morgan Hill',
    'start vending business Morgan Hill, California',
    'Morgan Hill vending permits',
    'vending machine locations Morgan Hill',
    'Morgan Hill vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/morgan-hill-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Morgan Hill, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Morgan Hill, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/morgan-hill-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Morgan Hill, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Morgan Hill, California',
    description: 'Complete guide with licensing, locations, and vending course for Morgan Hill, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MorganHillCaliforniaHowToStartPage />
}
