import FallonNevadaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fallon, Nevada (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fallon, Nevada. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fallon',
    'start vending business Fallon, Nevada',
    'Fallon vending permits',
    'vending machine locations Fallon',
    'Fallon vending course',
    'vending business guide Nevada'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fallon-nevada'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fallon, Nevada',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fallon, Nevada',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fallon-nevada',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fallon, Nevada'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fallon, Nevada',
    description: 'Complete guide with licensing, locations, and vending course for Fallon, Nevada'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FallonNevadaHowToStartPage />
}
