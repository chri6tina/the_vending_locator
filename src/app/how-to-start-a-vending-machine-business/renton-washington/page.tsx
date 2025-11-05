import RentonWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Renton, Washington (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Renton, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Renton',
    'start vending business Renton Washington',
    'Renton vending permits',
    'vending machine locations Renton',
    'Renton vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/renton-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Renton, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Renton, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/renton-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Renton, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Renton, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Renton, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <RentonWashingtonHowToStartPage />
}
