import ClewistonFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Clewiston, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Clewiston, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Clewiston',
    'start vending business Clewiston, Florida',
    'Clewiston vending permits',
    'vending machine locations Clewiston',
    'Clewiston vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/clewiston-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Clewiston, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Clewiston, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/clewiston-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Clewiston, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Clewiston, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Clewiston, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ClewistonFloridaHowToStartPage />
}
