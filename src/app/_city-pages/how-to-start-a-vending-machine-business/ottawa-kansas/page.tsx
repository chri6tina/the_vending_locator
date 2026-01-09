import OttawaKansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Ottawa, Kansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Ottawa, Kansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Ottawa',
    'start vending business Ottawa, Kansas',
    'Ottawa vending permits',
    'vending machine locations Ottawa',
    'Ottawa vending course',
    'vending business guide Kansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ottawa-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Ottawa, Kansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Ottawa, Kansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/ottawa-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Ottawa, Kansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Ottawa, Kansas',
    description: 'Complete guide with licensing, locations, and vending course for Ottawa, Kansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OttawaKansasHowToStartPage />
}
