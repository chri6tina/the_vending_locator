import CoffeyvilleMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Coffeyville, Maine (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Coffeyville, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Coffeyville',
    'start vending business Coffeyville, Maine',
    'Coffeyville vending permits',
    'vending machine locations Coffeyville',
    'Coffeyville vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/coffeyville-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Coffeyville, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Coffeyville, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/coffeyville-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Coffeyville, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Coffeyville, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Coffeyville, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CoffeyvilleMaineHowToStartPage />
}
