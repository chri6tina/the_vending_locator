import BothellWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bothell, Washington (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bothell, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bothell',
    'start vending business Bothell, Washington',
    'Bothell vending permits',
    'vending machine locations Bothell',
    'Bothell vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bothell-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bothell, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bothell, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bothell-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bothell, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bothell, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Bothell, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BothellWashingtonHowToStartPage />
}
