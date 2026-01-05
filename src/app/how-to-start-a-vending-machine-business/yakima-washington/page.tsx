import YakimaWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Yakima, Washington (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Yakima, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Yakima',
    'start vending business Yakima, Washington',
    'Yakima vending permits',
    'vending machine locations Yakima',
    'Yakima vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/yakima-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Yakima, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Yakima, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/yakima-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Yakima, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Yakima, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Yakima, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <YakimaWashingtonHowToStartPage />
}
