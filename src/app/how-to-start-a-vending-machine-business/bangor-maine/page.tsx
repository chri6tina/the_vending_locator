import BangorMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bangor, Maine (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Bangor, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bangor',
    'start vending business Bangor Maine',
    'Bangor vending permits',
    'vending machine locations Bangor',
    'Bangor vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bangor-maine'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bangor, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bangor, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bangor-maine',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bangor, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bangor, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Bangor, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BangorMaineHowToStartPage />
}
