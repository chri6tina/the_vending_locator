import AberdeenSouthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Aberdeen, South Dakota (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Aberdeen, South Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Aberdeen',
    'start vending business Aberdeen South Dakota',
    'Aberdeen vending permits',
    'vending machine locations Aberdeen',
    'Aberdeen vending course',
    'vending business guide South Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/aberdeen-south-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Aberdeen, South Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Aberdeen, South Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/aberdeen-south-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Aberdeen, South Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Aberdeen, South Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Aberdeen, South Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <AberdeenSouthDakotaHowToStartPage />
}
