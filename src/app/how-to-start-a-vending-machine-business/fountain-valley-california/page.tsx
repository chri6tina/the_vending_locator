import FountainValleyCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fountain Valley, California (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fountain Valley, C. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fountain Valley',
    'start vending business Fountain Valley California',
    'Fountain Valley vending permits',
    'vending machine locations Fountain Valley',
    'Fountain Valley vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fountain-valley-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fountain Valley, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fountain Valley, C',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fountain-valley-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fountain Valley, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fountain Valley, California',
    description: 'Complete guide with licensing, locations, and vending course for Fountain Valley, C'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FountainValleyCaliforniaHowToStartPage />
}



