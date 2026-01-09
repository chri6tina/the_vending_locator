import SouthMiamiFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in South Miami, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in South Miami, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business South Miami',
    'start vending business South Miami, Florida',
    'South Miami vending permits',
    'vending machine locations South Miami',
    'South Miami vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-miami-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in South Miami, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for South Miami, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-miami-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in South Miami, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in South Miami, Florida',
    description: 'Complete guide with licensing, locations, and vending course for South Miami, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthMiamiFloridaHowToStartPage />
}
