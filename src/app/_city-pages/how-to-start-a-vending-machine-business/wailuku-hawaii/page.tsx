import WailukuHawaiiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Wailuku, Hawaii (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Wailuku, Hawaii. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Wailuku',
    'start vending business Wailuku, Hawaii',
    'Wailuku vending permits',
    'vending machine locations Wailuku',
    'Wailuku vending course',
    'vending business guide Hawaii'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wailuku-hawaii'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Wailuku, Hawaii',
    description: 'Step-by-step guide with licensing, locations, and vending course for Wailuku, Hawaii',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/wailuku-hawaii',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Wailuku, Hawaii'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Wailuku, Hawaii',
    description: 'Complete guide with licensing, locations, and vending course for Wailuku, Hawaii'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WailukuHawaiiHowToStartPage />
}
