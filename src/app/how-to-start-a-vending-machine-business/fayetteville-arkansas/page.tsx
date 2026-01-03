import FayettevilleArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Fayetteville, Arkansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Fayetteville, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Fayetteville',
    'start vending business Fayetteville Arkansas',
    'Fayetteville vending permits',
    'vending machine locations Fayetteville',
    'Fayetteville vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fayetteville-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Fayetteville, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Fayetteville, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/fayetteville-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Fayetteville, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Fayetteville, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Fayetteville, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FayettevilleArkansasHowToStartPage />
}
