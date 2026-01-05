import GulfBreezeFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Gulf Breeze, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Gulf Breeze, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Gulf Breeze',
    'start vending business Gulf Breeze, Florida',
    'Gulf Breeze vending permits',
    'vending machine locations Gulf Breeze',
    'Gulf Breeze vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gulf-breeze-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Gulf Breeze, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Gulf Breeze, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gulf-breeze-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Gulf Breeze, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Gulf Breeze, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Gulf Breeze, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GulfBreezeFloridaHowToStartPage />
}
