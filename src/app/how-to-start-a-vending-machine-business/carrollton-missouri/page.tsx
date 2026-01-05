import CarrolltonMissouriHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Carrollton, Missouri (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Carrollton, Missouri. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Carrollton',
    'start vending business Carrollton, Missouri',
    'Carrollton vending permits',
    'vending machine locations Carrollton',
    'Carrollton vending course',
    'vending business guide Missouri'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/carrollton-missouri'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Carrollton, Missouri',
    description: 'Step-by-step guide with licensing, locations, and vending course for Carrollton, Missouri',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/carrollton-missouri',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Carrollton, Missouri'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Carrollton, Missouri',
    description: 'Complete guide with licensing, locations, and vending course for Carrollton, Missouri'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CarrolltonMissouriHowToStartPage />
}
