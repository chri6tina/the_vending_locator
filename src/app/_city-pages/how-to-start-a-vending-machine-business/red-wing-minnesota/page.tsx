import RedWingMinnesotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Red Wing, Minnesota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Red Wing, Minnesota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Red Wing',
    'start vending business Red Wing, Minnesota',
    'Red Wing vending permits',
    'vending machine locations Red Wing',
    'Red Wing vending course',
    'vending business guide Minnesota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/red-wing-minnesota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Red Wing, Minnesota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Red Wing, Minnesota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/red-wing-minnesota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Red Wing, Minnesota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Red Wing, Minnesota',
    description: 'Complete guide with licensing, locations, and vending course for Red Wing, Minnesota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RedWingMinnesotaHowToStartPage />
}
