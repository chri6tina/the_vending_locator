import MissionTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mission, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mission, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mission',
    'start vending business Mission, Texas',
    'Mission vending permits',
    'vending machine locations Mission',
    'Mission vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mission-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mission, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mission, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mission-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mission, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mission, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Mission, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MissionTexasHowToStartPage />
}
