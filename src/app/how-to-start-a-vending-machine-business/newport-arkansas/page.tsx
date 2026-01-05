import NewportArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Newport, Arkansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Newport, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Newport',
    'start vending business Newport, Arkansas',
    'Newport vending permits',
    'vending machine locations Newport',
    'Newport vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/newport-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Newport, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Newport, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/newport-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Newport, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Newport, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Newport, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NewportArkansasHowToStartPage />
}
