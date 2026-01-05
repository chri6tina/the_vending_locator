import MorganCityLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Morgan City, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Morgan City, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Morgan City',
    'start vending business Morgan City, Louisiana',
    'Morgan City vending permits',
    'vending machine locations Morgan City',
    'Morgan City vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/morgan-city-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Morgan City, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Morgan City, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/morgan-city-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Morgan City, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Morgan City, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Morgan City, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MorganCityLouisianaHowToStartPage />
}
