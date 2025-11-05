import BearDelawareHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bear, Delaware (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Bear, Delaware. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bear',
    'start vending business Bear Delaware',
    'Bear vending permits',
    'vending machine locations Bear',
    'Bear vending course',
    'vending business guide Delaware'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bear-delaware'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bear, Delaware',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bear, Delaware',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bear-delaware',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bear, Delaware'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bear, Delaware',
    description: 'Complete guide with licensing, locations, and vending course for Bear, Delaware'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BearDelawareHowToStartPage />
}
