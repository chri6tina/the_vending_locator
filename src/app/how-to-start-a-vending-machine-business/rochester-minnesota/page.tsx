import RochesterMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rochester, Minnesota (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Rochester, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rochester',
    'start vending business Rochester Minnesota',
    'Rochester vending permits',
    'vending machine locations Rochester',
    'Rochester vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rochester-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rochester, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rochester, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rochester-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rochester, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rochester, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Rochester, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RochesterMinnesotaHowToStartPage />
}
