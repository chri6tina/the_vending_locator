import FortLauderdaleFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fort Lauderdale, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Fort Lauderdale, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fort Lauderdale',
    'start vending business Fort Lauderdale Florida',
    'Fort Lauderdale vending permits',
    'vending machine locations Fort Lauderdale',
    'Fort Lauderdale vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-lauderdale-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fort Lauderdale, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fort Lauderdale, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fort-lauderdale-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fort Lauderdale, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fort Lauderdale, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Fort Lauderdale, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <FortLauderdaleFloridaHowToStartPage />
}
