import OldsmarFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oldsmar, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Oldsmar, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oldsmar',
    'start vending business Oldsmar, Florida',
    'Oldsmar vending permits',
    'vending machine locations Oldsmar',
    'Oldsmar vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oldsmar-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oldsmar, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oldsmar, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oldsmar-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oldsmar, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oldsmar, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Oldsmar, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OldsmarFloridaHowToStartPage />
}
