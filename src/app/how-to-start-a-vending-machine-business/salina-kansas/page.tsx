import SalinaKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Salina, Kansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Salina, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Salina',
    'start vending business Salina, Kansas',
    'Salina vending permits',
    'vending machine locations Salina',
    'Salina vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/salina-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Salina, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Salina, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/salina-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Salina, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Salina, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Salina, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SalinaKansasHowToStartPage />
}
