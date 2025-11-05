import HoumaLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Houma, Louisiana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Houma, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Houma',
    'start vending business Houma Louisiana',
    'Houma vending permits',
    'vending machine locations Houma',
    'Houma vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/houma-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Houma, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Houma, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/houma-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Houma, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Houma, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Houma, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <HoumaLouisianaHowToStartPage />
}
