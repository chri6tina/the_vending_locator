import WestwegoLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Westwego, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Westwego, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Westwego',
    'start vending business Westwego, Louisiana',
    'Westwego vending permits',
    'vending machine locations Westwego',
    'Westwego vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/westwego-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Westwego, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Westwego, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/westwego-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Westwego, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Westwego, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Westwego, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestwegoLouisianaHowToStartPage />
}
