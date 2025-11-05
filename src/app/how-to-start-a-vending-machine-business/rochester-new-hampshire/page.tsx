import RochesterNewHampshireHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rochester, New Hampshire (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Rochester, New Hampshire. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rochester',
    'start vending business Rochester New Hampshire',
    'Rochester vending permits',
    'vending machine locations Rochester',
    'Rochester vending course',
    'vending business guide New Hampshire'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rochester-new-hampshire'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rochester, New Hampshire',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rochester, New Hampshire',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rochester-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rochester, New Hampshire'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rochester, New Hampshire',
    description: 'Complete guide with licensing, locations, and vending course for Rochester, New Hampshire'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <RochesterNewHampshireHowToStartPage />
}
