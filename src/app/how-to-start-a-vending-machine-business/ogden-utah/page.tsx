import OgdenUtahHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ogden, Utah (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Ogden, Utah. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ogden',
    'start vending business Ogden Utah',
    'Ogden vending permits',
    'vending machine locations Ogden',
    'Ogden vending course',
    'vending business guide Utah'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ogden-utah'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ogden, Utah',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ogden, Utah',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ogden-utah',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ogden, Utah'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ogden, Utah',
    description: 'Complete guide with licensing, locations, and vending course for Ogden, Utah'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OgdenUtahHowToStartPage />
}
