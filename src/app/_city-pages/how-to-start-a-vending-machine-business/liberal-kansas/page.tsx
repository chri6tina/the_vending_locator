import LiberalKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Liberal, Kansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Liberal, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Liberal',
    'start vending business Liberal, Kansas',
    'Liberal vending permits',
    'vending machine locations Liberal',
    'Liberal vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/liberal-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Liberal, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Liberal, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/liberal-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Liberal, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Liberal, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Liberal, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LiberalKansasHowToStartPage />
}
