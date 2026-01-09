import HialeahGardensFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hialeah Gardens, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Hialeah Gardens, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hialeah Gardens',
    'start vending business Hialeah Gardens, Florida',
    'Hialeah Gardens vending permits',
    'vending machine locations Hialeah Gardens',
    'Hialeah Gardens vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hialeah-gardens-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hialeah Gardens, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hialeah Gardens, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hialeah-gardens-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hialeah Gardens, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hialeah Gardens, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Hialeah Gardens, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HialeahGardensFloridaHowToStartPage />
}
