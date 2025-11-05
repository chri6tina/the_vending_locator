import BossierCityLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bossier City, Louisiana (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Bossier City, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bossier City',
    'start vending business Bossier City Louisiana',
    'Bossier City vending permits',
    'vending machine locations Bossier City',
    'Bossier City vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bossier-city-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bossier City, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bossier City, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bossier-city-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bossier City, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bossier City, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Bossier City, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BossierCityLouisianaHowToStartPage />
}
