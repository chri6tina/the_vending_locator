import NewportNewsVirginiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Newport News, Virginia (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Newport News, Virginia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Newport News',
    'start vending business Newport News Virginia',
    'Newport News vending permits',
    'vending machine locations Newport News',
    'Newport News vending course',
    'vending business guide Virginia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/newport-news-virginia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Newport News, Virginia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Newport News, Virginia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/newport-news-virginia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Newport News, Virginia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Newport News, Virginia',
    description: 'Complete guide with licensing, locations, and vending course for Newport News, Virginia'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <NewportNewsVirginiaHowToStartPage />
}
