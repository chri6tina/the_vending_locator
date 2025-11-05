import ArvadaColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Arvada, Colorado (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Arvada, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Arvada',
    'start vending business Arvada Colorado',
    'Arvada vending permits',
    'vending machine locations Arvada',
    'Arvada vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/arvada-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Arvada, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Arvada, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/arvada-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Arvada, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Arvada, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Arvada, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ArvadaColoradoHowToStartPage />
}
