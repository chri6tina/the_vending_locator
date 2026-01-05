import OrovilleCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oroville, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Oroville, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oroville',
    'start vending business Oroville, California',
    'Oroville vending permits',
    'vending machine locations Oroville',
    'Oroville vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oroville-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oroville, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oroville, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oroville-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oroville, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oroville, California',
    description: 'Complete guide with licensing, locations, and vending course for Oroville, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OrovilleCaliforniaHowToStartPage />
}
