import VenturaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ventura, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Ventura, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ventura',
    'start vending business Ventura California',
    'Ventura vending permits',
    'vending machine locations Ventura',
    'Ventura vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ventura-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ventura, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ventura, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ventura-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ventura, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ventura, California',
    description: 'Complete guide with licensing, locations, and vending course for Ventura, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <VenturaCaliforniaHowToStartPage />
}
