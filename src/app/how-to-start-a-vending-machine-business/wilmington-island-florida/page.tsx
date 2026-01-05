import WilmingtonIslandFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wilmington Island, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wilmington Island, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wilmington Island',
    'start vending business Wilmington Island, Florida',
    'Wilmington Island vending permits',
    'vending machine locations Wilmington Island',
    'Wilmington Island vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wilmington-island-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wilmington Island, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wilmington Island, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wilmington-island-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wilmington Island, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wilmington Island, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Wilmington Island, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WilmingtonIslandFloridaHowToStartPage />
}
