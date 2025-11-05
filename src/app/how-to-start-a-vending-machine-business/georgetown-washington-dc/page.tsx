import GeorgetownWashingtonDcHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Georgetown, Washington DC (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Georgetown, Washington DC. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Georgetown',
    'start vending business Georgetown Washington DC',
    'Georgetown vending permits',
    'vending machine locations Georgetown',
    'Georgetown vending course',
    'vending business guide Washington DC'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/georgetown-washington-dc'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Georgetown, Washington DC',
    description: 'Step-by-step guide with licensing, locations, and vending course for Georgetown, Washington DC',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/georgetown-washington-dc',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Georgetown, Washington DC'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Georgetown, Washington DC',
    description: 'Complete guide with licensing, locations, and vending course for Georgetown, Washington DC'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <GeorgetownWashingtonDcHowToStartPage />
}
