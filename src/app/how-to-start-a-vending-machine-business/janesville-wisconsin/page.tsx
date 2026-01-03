import JanesvilleWisconsinHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Janesville, Wisconsin (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Janesville, Wisconsin. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Janesville',
    'start vending business Janesville Wisconsin',
    'Janesville vending permits',
    'vending machine locations Janesville',
    'Janesville vending course',
    'vending business guide Wisconsin'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/janesville-wisconsin'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Janesville, Wisconsin',
    description: 'Step-by-step guide with licensing, locations, and vending course for Janesville, Wisconsin',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/janesville-wisconsin',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Janesville, Wisconsin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Janesville, Wisconsin',
    description: 'Complete guide with licensing, locations, and vending course for Janesville, Wisconsin'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <JanesvilleWisconsinHowToStartPage />
}
