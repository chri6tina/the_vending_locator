import SouthSaintPaulMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in South Saint Paul, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in South Saint Paul, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business South Saint Paul',
    'start vending business South Saint Paul, Minnesota',
    'South Saint Paul vending permits',
    'vending machine locations South Saint Paul',
    'South Saint Paul vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-saint-paul-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in South Saint Paul, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for South Saint Paul, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-saint-paul-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in South Saint Paul, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in South Saint Paul, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for South Saint Paul, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthSaintPaulMinnesotaHowToStartPage />
}
