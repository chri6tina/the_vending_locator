import MilwaukeeWisconsinHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Milwaukee, Wisconsin (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Milwaukee, Wisconsin. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Milwaukee',
    'start vending business Milwaukee Wisconsin',
    'Milwaukee vending permits',
    'vending machine locations Milwaukee',
    'Milwaukee vending course',
    'vending business guide Wisconsin'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/milwaukee-wisconsin'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Milwaukee, Wisconsin',
    description: 'Step-by-step guide with licensing, locations, and vending course for Milwaukee, Wisconsin',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/milwaukee-wisconsin',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Milwaukee, Wisconsin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Milwaukee, Wisconsin',
    description: 'Complete guide with licensing, locations, and vending course for Milwaukee, Wisconsin'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MilwaukeeWisconsinHowToStartPage />
}
