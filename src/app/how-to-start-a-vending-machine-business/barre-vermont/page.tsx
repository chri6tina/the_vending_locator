import BarreVermontHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Barre, Vermont (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Barre, Vermont. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Barre',
    'start vending business Barre, Vermont',
    'Barre vending permits',
    'vending machine locations Barre',
    'Barre vending course',
    'vending business guide Vermont'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/barre-vermont'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Barre, Vermont',
    description: 'Step-by-step guide with licensing, locations, and vending course for Barre, Vermont',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/barre-vermont',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Barre, Vermont'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Barre, Vermont',
    description: 'Complete guide with licensing, locations, and vending course for Barre, Vermont'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BarreVermontHowToStartPage />
}
