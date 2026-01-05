import PalmCoastFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Palm Coast, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Palm Coast, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Palm Coast',
    'start vending business Palm Coast, Florida',
    'Palm Coast vending permits',
    'vending machine locations Palm Coast',
    'Palm Coast vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/palm-coast-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Palm Coast, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Palm Coast, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/palm-coast-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Palm Coast, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Palm Coast, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Palm Coast, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PalmCoastFloridaHowToStartPage />
}
