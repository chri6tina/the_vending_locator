import WheatRidgeColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wheat Ridge, Colorado (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wheat Ridge, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wheat Ridge',
    'start vending business Wheat Ridge, Colorado',
    'Wheat Ridge vending permits',
    'vending machine locations Wheat Ridge',
    'Wheat Ridge vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wheat-ridge-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wheat Ridge, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wheat Ridge, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wheat-ridge-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wheat Ridge, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wheat Ridge, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Wheat Ridge, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WheatRidgeColoradoHowToStartPage />
}
