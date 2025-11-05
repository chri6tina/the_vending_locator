import BatonRougeLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Baton Rouge, Louisiana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Baton Rouge, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Baton Rouge',
    'start vending business Baton Rouge Louisiana',
    'Baton Rouge vending permits',
    'vending machine locations Baton Rouge',
    'Baton Rouge vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/baton-rouge-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Baton Rouge, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Baton Rouge, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/baton-rouge-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Baton Rouge, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Baton Rouge, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Baton Rouge, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BatonRougeLouisianaHowToStartPage />
}
