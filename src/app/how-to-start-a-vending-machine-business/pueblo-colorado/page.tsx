import PuebloColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pueblo, Colorado (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Pueblo, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pueblo',
    'start vending business Pueblo Colorado',
    'Pueblo vending permits',
    'vending machine locations Pueblo',
    'Pueblo vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pueblo-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pueblo, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pueblo, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pueblo-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pueblo, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pueblo, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for Pueblo, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <PuebloColoradoHowToStartPage />
}
