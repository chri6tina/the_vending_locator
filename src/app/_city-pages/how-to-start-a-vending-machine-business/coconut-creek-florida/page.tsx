import CoconutCreekFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Coconut Creek, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Coconut Creek, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Coconut Creek',
    'start vending business Coconut Creek, Florida',
    'Coconut Creek vending permits',
    'vending machine locations Coconut Creek',
    'Coconut Creek vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/coconut-creek-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Coconut Creek, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Coconut Creek, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/coconut-creek-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Coconut Creek, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Coconut Creek, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Coconut Creek, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CoconutCreekFloridaHowToStartPage />
}
