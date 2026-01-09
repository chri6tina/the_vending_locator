import MiamiLakesFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Miami Lakes, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Miami Lakes, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Miami Lakes',
    'start vending business Miami Lakes, Florida',
    'Miami Lakes vending permits',
    'vending machine locations Miami Lakes',
    'Miami Lakes vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/miami-lakes-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Miami Lakes, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Miami Lakes, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/miami-lakes-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Miami Lakes, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Miami Lakes, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Miami Lakes, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MiamiLakesFloridaHowToStartPage />
}
