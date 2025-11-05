import SuffolkVirginiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Suffolk, Virginia (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Suffolk, Virginia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Suffolk',
    'start vending business Suffolk Virginia',
    'Suffolk vending permits',
    'vending machine locations Suffolk',
    'Suffolk vending course',
    'vending business guide Virginia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/suffolk-virginia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Suffolk, Virginia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Suffolk, Virginia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/suffolk-virginia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Suffolk, Virginia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Suffolk, Virginia',
    description: 'Complete guide with licensing, locations, and vending course for Suffolk, Virginia'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <SuffolkVirginiaHowToStartPage />
}
