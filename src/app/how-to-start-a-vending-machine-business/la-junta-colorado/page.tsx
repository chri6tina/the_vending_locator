import LaJuntaColoradoHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in La Junta, Colorado (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in La Junta, Colorado. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business La Junta',
    'start vending business La Junta, Colorado',
    'La Junta vending permits',
    'vending machine locations La Junta',
    'La Junta vending course',
    'vending business guide Colorado'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/la-junta-colorado'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in La Junta, Colorado',
    description: 'Step-by-step guide with licensing, locations, and vending course for La Junta, Colorado',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/la-junta-colorado',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in La Junta, Colorado'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in La Junta, Colorado',
    description: 'Complete guide with licensing, locations, and vending course for La Junta, Colorado'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LaJuntaColoradoHowToStartPage />
}
