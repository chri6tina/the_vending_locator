import HollywoodFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hollywood, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Hollywood, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hollywood',
    'start vending business Hollywood Florida',
    'Hollywood vending permits',
    'vending machine locations Hollywood',
    'Hollywood vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hollywood-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hollywood, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hollywood, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hollywood-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hollywood, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hollywood, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Hollywood, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HollywoodFloridaHowToStartPage />
}
