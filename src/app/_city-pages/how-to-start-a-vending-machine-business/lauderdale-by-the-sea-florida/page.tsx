import LauderdalebytheSeaFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lauderdale-by-the-Sea, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lauderdale-by-the-Sea, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lauderdale-by-the-Sea',
    'start vending business Lauderdale-by-the-Sea, Florida',
    'Lauderdale-by-the-Sea vending permits',
    'vending machine locations Lauderdale-by-the-Sea',
    'Lauderdale-by-the-Sea vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lauderdale-by-the-sea-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lauderdale-by-the-Sea, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lauderdale-by-the-Sea, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lauderdale-by-the-sea-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lauderdale-by-the-Sea, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lauderdale-by-the-Sea, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Lauderdale-by-the-Sea, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LauderdalebytheSeaFloridaHowToStartPage />
}
