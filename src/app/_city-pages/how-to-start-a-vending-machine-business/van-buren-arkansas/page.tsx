import VanBurenArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Van Buren, Arkansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Van Buren, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Van Buren',
    'start vending business Van Buren, Arkansas',
    'Van Buren vending permits',
    'vending machine locations Van Buren',
    'Van Buren vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/van-buren-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Van Buren, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Van Buren, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/van-buren-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Van Buren, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Van Buren, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Van Buren, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <VanBurenArkansasHowToStartPage />
}
