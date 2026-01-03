import WellingtonFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wellington, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wellington, F. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wellington',
    'start vending business Wellington Florida',
    'Wellington vending permits',
    'vending machine locations Wellington',
    'Wellington vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wellington-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wellington, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wellington, F',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wellington-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wellington, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wellington, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Wellington, F'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WellingtonFloridaHowToStartPage />
}



