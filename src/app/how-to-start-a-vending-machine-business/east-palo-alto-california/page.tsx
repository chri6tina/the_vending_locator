import EastPaloAltoCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in East Palo Alto, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in East Palo Alto, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business East Palo Alto',
    'start vending business East Palo Alto, California',
    'East Palo Alto vending permits',
    'vending machine locations East Palo Alto',
    'East Palo Alto vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/east-palo-alto-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in East Palo Alto, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for East Palo Alto, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/east-palo-alto-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in East Palo Alto, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in East Palo Alto, California',
    description: 'Complete guide with licensing, locations, and vending course for East Palo Alto, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EastPaloAltoCaliforniaHowToStartPage />
}
