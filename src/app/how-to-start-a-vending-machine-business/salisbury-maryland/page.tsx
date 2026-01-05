import SalisburyMarylandHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Salisbury, Maryland (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Salisbury, Maryland. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Salisbury',
    'start vending business Salisbury, Maryland',
    'Salisbury vending permits',
    'vending machine locations Salisbury',
    'Salisbury vending course',
    'vending business guide Maryland'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/salisbury-maryland'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Salisbury, Maryland',
    description: 'Step-by-step guide with licensing, locations, and vending course for Salisbury, Maryland',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/salisbury-maryland',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Salisbury, Maryland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Salisbury, Maryland',
    description: 'Complete guide with licensing, locations, and vending course for Salisbury, Maryland'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SalisburyMarylandHowToStartPage />
}
