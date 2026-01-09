import OrangeTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Orange, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Orange, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Orange',
    'start vending business Orange, Texas',
    'Orange vending permits',
    'vending machine locations Orange',
    'Orange vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/orange-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Orange, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Orange, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/orange-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Orange, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Orange, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Orange, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OrangeTexasHowToStartPage />
}
