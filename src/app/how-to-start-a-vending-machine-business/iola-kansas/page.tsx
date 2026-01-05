import IolaMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Iola, Maine (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Iola, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Iola',
    'start vending business Iola, Maine',
    'Iola vending permits',
    'vending machine locations Iola',
    'Iola vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/iola-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Iola, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Iola, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/iola-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Iola, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Iola, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Iola, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <IolaMaineHowToStartPage />
}
