import HialeahFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hialeah, Florida (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Hialeah, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hialeah',
    'start vending business Hialeah Florida',
    'Hialeah vending permits',
    'vending machine locations Hialeah',
    'Hialeah vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hialeah-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hialeah, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hialeah, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hialeah-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hialeah, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hialeah, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Hialeah, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <HialeahFloridaHowToStartPage />
}
