import NorthCharlestonSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in North Charleston, South Carolina (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in North Charleston, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business North Charleston',
    'start vending business North Charleston South Carolina',
    'North Charleston vending permits',
    'vending machine locations North Charleston',
    'North Charleston vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/north-charleston-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in North Charleston, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for North Charleston, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/north-charleston-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in North Charleston, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in North Charleston, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for North Charleston, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NorthCharlestonSouthCarolinaHowToStartPage />
}
