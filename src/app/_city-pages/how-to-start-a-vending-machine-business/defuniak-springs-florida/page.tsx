import DeFuniakSpringsFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in DeFuniak Springs, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in DeFuniak Springs, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business DeFuniak Springs',
    'start vending business DeFuniak Springs, Florida',
    'DeFuniak Springs vending permits',
    'vending machine locations DeFuniak Springs',
    'DeFuniak Springs vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/defuniak-springs-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in DeFuniak Springs, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for DeFuniak Springs, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/defuniak-springs-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in DeFuniak Springs, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in DeFuniak Springs, Florida',
    description: 'Complete guide with licensing, locations, and vending course for DeFuniak Springs, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DeFuniakSpringsFloridaHowToStartPage />
}
