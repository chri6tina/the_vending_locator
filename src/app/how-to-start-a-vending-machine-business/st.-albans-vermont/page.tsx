import StAlbansVermontHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in St. Albans, Vermont (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in St. Albans, Vermont. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business St. Albans',
    'start vending business St. Albans, Vermont',
    'St. Albans vending permits',
    'vending machine locations St. Albans',
    'St. Albans vending course',
    'vending business guide Vermont'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st.-albans-vermont'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in St. Albans, Vermont',
    description: 'Step-by-step guide with licensing, locations, and vending course for St. Albans, Vermont',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/st.-albans-vermont',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in St. Albans, Vermont'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in St. Albans, Vermont',
    description: 'Complete guide with licensing, locations, and vending course for St. Albans, Vermont'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <StAlbansVermontHowToStartPage />
}
