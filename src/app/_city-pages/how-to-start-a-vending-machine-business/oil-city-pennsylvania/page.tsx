import OilCityPennsylvaniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oil City, Pennsylvania (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Oil City, Pennsylvania. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oil City',
    'start vending business Oil City, Pennsylvania',
    'Oil City vending permits',
    'vending machine locations Oil City',
    'Oil City vending course',
    'vending business guide Pennsylvania'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oil-city-pennsylvania'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oil City, Pennsylvania',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oil City, Pennsylvania',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oil-city-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oil City, Pennsylvania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oil City, Pennsylvania',
    description: 'Complete guide with licensing, locations, and vending course for Oil City, Pennsylvania'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OilCityPennsylvaniaHowToStartPage />
}
