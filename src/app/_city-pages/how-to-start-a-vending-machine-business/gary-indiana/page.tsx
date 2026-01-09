import GaryIndianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Gary, Indiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Gary, Indiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Gary',
    'start vending business Gary Indiana',
    'Gary vending permits',
    'vending machine locations Gary',
    'Gary vending course',
    'vending business guide Indiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gary-indiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Gary, Indiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Gary, Indiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/gary-indiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Gary, Indiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Gary, Indiana',
    description: 'Complete guide with licensing, locations, and vending course for Gary, Indiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GaryIndianaHowToStartPage />
}
