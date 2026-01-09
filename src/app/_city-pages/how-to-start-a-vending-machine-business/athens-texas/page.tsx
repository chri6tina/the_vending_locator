import AthensTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Athens, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Athens, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Athens',
    'start vending business Athens, Texas',
    'Athens vending permits',
    'vending machine locations Athens',
    'Athens vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/athens-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Athens, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Athens, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/athens-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Athens, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Athens, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Athens, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AthensTexasHowToStartPage />
}
