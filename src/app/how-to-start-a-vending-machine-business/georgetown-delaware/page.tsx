import GeorgetownDelawareHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Georgetown, Delaware (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Georgetown, Delaware. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Georgetown',
    'start vending business Georgetown Delaware',
    'Georgetown vending permits',
    'vending machine locations Georgetown',
    'Georgetown vending course',
    'vending business guide Delaware'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/georgetown-delaware'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Georgetown, Delaware',
    description: 'Step-by-step guide with licensing, locations, and vending course for Georgetown, Delaware',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/georgetown-delaware',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Georgetown, Delaware'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Georgetown, Delaware',
    description: 'Complete guide with licensing, locations, and vending course for Georgetown, Delaware'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <GeorgetownDelawareHowToStartPage />
}
