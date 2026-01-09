import OlympiaWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Olympia, Washington (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Olympia, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Olympia',
    'start vending business Olympia, Washington',
    'Olympia vending permits',
    'vending machine locations Olympia',
    'Olympia vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/olympia-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Olympia, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Olympia, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/olympia-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Olympia, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Olympia, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Olympia, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OlympiaWashingtonHowToStartPage />
}
