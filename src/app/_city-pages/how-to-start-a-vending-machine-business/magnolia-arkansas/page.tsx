import MagnoliaArkansasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Magnolia, Arkansas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Magnolia, Arkansas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Magnolia',
    'start vending business Magnolia, Arkansas',
    'Magnolia vending permits',
    'vending machine locations Magnolia',
    'Magnolia vending course',
    'vending business guide Arkansas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/magnolia-arkansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Magnolia, Arkansas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Magnolia, Arkansas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/magnolia-arkansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Magnolia, Arkansas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Magnolia, Arkansas',
    description: 'Complete guide with licensing, locations, and vending course for Magnolia, Arkansas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MagnoliaArkansasHowToStartPage />
}
