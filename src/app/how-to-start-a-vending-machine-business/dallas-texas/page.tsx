import DallasTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Dallas, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Dallas, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Dallas',
    'start vending business Dallas Texas',
    'Dallas vending permits',
    'vending machine locations Dallas',
    'Dallas vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dallas-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Dallas, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Dallas, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dallas-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Dallas, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Dallas, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Dallas, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <DallasTexasHowToStartPage />
}
