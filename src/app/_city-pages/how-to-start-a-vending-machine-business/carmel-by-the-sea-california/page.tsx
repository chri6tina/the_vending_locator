import CarmelbytheSeaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Carmel-by-the-Sea, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Carmel-by-the-Sea, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Carmel-by-the-Sea',
    'start vending business Carmel-by-the-Sea, California',
    'Carmel-by-the-Sea vending permits',
    'vending machine locations Carmel-by-the-Sea',
    'Carmel-by-the-Sea vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/carmel-by-the-sea-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Carmel-by-the-Sea, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Carmel-by-the-Sea, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/carmel-by-the-sea-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Carmel-by-the-Sea, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Carmel-by-the-Sea, California',
    description: 'Complete guide with licensing, locations, and vending course for Carmel-by-the-Sea, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CarmelbytheSeaCaliforniaHowToStartPage />
}
