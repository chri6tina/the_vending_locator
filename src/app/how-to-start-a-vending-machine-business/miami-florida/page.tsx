import MiamiFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Miami, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Miami, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Miami',
    'start vending business Miami Florida',
    'Miami vending permits',
    'vending machine locations Miami',
    'Miami vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/miami-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Miami, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Miami, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/miami-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Miami, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Miami, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Miami, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <MiamiFloridaHowToStartPage />
}
