import LynnwoodWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lynnwood, Washington (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Lynnwood, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lynnwood',
    'start vending business Lynnwood, Washington',
    'Lynnwood vending permits',
    'vending machine locations Lynnwood',
    'Lynnwood vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lynnwood-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lynnwood, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lynnwood, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lynnwood-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lynnwood, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lynnwood, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Lynnwood, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LynnwoodWashingtonHowToStartPage />
}
