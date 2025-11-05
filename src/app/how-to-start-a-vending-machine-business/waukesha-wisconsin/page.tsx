import WaukeshaWisconsinHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Waukesha, Wisconsin (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Waukesha, Wisconsin. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Waukesha',
    'start vending business Waukesha Wisconsin',
    'Waukesha vending permits',
    'vending machine locations Waukesha',
    'Waukesha vending course',
    'vending business guide Wisconsin'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/waukesha-wisconsin'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Waukesha, Wisconsin',
    description: 'Step-by-step guide with licensing, locations, and vending course for Waukesha, Wisconsin',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/waukesha-wisconsin',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Waukesha, Wisconsin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Waukesha, Wisconsin',
    description: 'Complete guide with licensing, locations, and vending course for Waukesha, Wisconsin'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WaukeshaWisconsinHowToStartPage />
}
