import SpartanburgSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Spartanburg, South Carolina (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Spartanburg, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Spartanburg',
    'start vending business Spartanburg South Carolina',
    'Spartanburg vending permits',
    'vending machine locations Spartanburg',
    'Spartanburg vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/spartanburg-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Spartanburg, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Spartanburg, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/spartanburg-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Spartanburg, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Spartanburg, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Spartanburg, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <SpartanburgSouthCarolinaHowToStartPage />
}
