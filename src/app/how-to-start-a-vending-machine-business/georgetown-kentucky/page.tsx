import GeorgetownKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Georgetown, Kentucky (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Georgetown, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Georgetown',
    'start vending business Georgetown Kentucky',
    'Georgetown vending permits',
    'vending machine locations Georgetown',
    'Georgetown vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/georgetown-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Georgetown, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Georgetown, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/georgetown-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Georgetown, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Georgetown, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Georgetown, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <GeorgetownKentuckyHowToStartPage />
}
