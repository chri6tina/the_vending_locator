import LaMiradaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in La Mirada, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in La Mirada, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business La Mirada',
    'start vending business La Mirada California',
    'La Mirada vending permits',
    'vending machine locations La Mirada',
    'La Mirada vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/la-mirada-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in La Mirada, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for La Mirada, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/la-mirada-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in La Mirada, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in La Mirada, California',
    description: 'Complete guide with licensing, locations, and vending course for La Mirada, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LaMiradaCaliforniaHowToStartPage />
}



