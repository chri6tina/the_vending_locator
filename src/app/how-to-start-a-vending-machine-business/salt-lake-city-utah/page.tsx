import SaltLakeCityUtahHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Salt Lake City, Utah (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Salt Lake City, Utah. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Salt Lake City',
    'start vending business Salt Lake City Utah',
    'Salt Lake City vending permits',
    'vending machine locations Salt Lake City',
    'Salt Lake City vending course',
    'vending business guide Utah'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/salt-lake-city-utah'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Salt Lake City, Utah',
    description: 'Step-by-step guide with licensing, locations, and vending course for Salt Lake City, Utah',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/salt-lake-city-utah',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Salt Lake City, Utah'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Salt Lake City, Utah',
    description: 'Complete guide with licensing, locations, and vending course for Salt Lake City, Utah'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SaltLakeCityUtahHowToStartPage />
}
