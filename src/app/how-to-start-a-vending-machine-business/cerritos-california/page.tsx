import CerritosCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Cerritos, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Cerritos, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Cerritos',
    'start vending business Cerritos California',
    'Cerritos vending permits',
    'vending machine locations Cerritos',
    'Cerritos vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cerritos-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Cerritos, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Cerritos, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/cerritos-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Cerritos, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Cerritos, California',
    description: 'Complete guide with licensing, locations, and vending course for Cerritos, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CerritosCaliforniaHowToStartPage />
}



