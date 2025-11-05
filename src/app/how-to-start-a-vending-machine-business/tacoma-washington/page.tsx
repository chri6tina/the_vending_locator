import TacomaWashingtonHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Tacoma, Washington (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Tacoma, Washington. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Tacoma',
    'start vending business Tacoma Washington',
    'Tacoma vending permits',
    'vending machine locations Tacoma',
    'Tacoma vending course',
    'vending business guide Washington'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tacoma-washington'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Tacoma, Washington',
    description: 'Step-by-step guide with licensing, locations, and vending course for Tacoma, Washington',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/tacoma-washington',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Tacoma, Washington'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Tacoma, Washington',
    description: 'Complete guide with licensing, locations, and vending course for Tacoma, Washington'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <TacomaWashingtonHowToStartPage />
}
