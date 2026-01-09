import LongboatKeyFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Longboat Key, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Longboat Key, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Longboat Key',
    'start vending business Longboat Key, Florida',
    'Longboat Key vending permits',
    'vending machine locations Longboat Key',
    'Longboat Key vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/longboat-key-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Longboat Key, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Longboat Key, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/longboat-key-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Longboat Key, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Longboat Key, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Longboat Key, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LongboatKeyFloridaHowToStartPage />
}
