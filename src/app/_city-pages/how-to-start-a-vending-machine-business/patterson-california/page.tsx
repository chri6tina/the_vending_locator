import PattersonCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Patterson, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Patterson, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Patterson',
    'start vending business Patterson, California',
    'Patterson vending permits',
    'vending machine locations Patterson',
    'Patterson vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/patterson-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Patterson, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Patterson, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/patterson-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Patterson, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Patterson, California',
    description: 'Complete guide with licensing, locations, and vending course for Patterson, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PattersonCaliforniaHowToStartPage />
}
