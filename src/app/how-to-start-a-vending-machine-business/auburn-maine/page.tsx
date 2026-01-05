import AuburnMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Auburn, Maine (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Auburn, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Auburn',
    'start vending business Auburn, Maine',
    'Auburn vending permits',
    'vending machine locations Auburn',
    'Auburn vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/auburn-maine'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Auburn, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Auburn, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/auburn-maine',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Auburn, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Auburn, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Auburn, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <AuburnMaineHowToStartPage />
}
