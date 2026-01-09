import SomersetKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Somerset, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Somerset, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Somerset',
    'start vending business Somerset, Kentucky',
    'Somerset vending permits',
    'vending machine locations Somerset',
    'Somerset vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/somerset-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Somerset, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Somerset, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/somerset-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Somerset, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Somerset, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Somerset, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SomersetKentuckyHowToStartPage />
}
