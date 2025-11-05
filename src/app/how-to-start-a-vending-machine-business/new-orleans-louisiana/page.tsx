import NewOrleansLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in New Orleans, Louisiana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in New Orleans, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business New Orleans',
    'start vending business New Orleans Louisiana',
    'New Orleans vending permits',
    'vending machine locations New Orleans',
    'New Orleans vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-orleans-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in New Orleans, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for New Orleans, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-orleans-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in New Orleans, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in New Orleans, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for New Orleans, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <NewOrleansLouisianaHowToStartPage />
}
