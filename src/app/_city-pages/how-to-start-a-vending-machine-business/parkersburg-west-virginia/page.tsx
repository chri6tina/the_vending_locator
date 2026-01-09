import ParkersburgWestVirginiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Parkersburg, West Virginia (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Parkersburg, West Virginia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Parkersburg',
    'start vending business Parkersburg, West Virginia',
    'Parkersburg vending permits',
    'vending machine locations Parkersburg',
    'Parkersburg vending course',
    'vending business guide West Virginia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/parkersburg-west-virginia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Parkersburg, West Virginia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Parkersburg, West Virginia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/parkersburg-west-virginia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Parkersburg, West Virginia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Parkersburg, West Virginia',
    description: 'Complete guide with licensing, locations, and vending course for Parkersburg, West Virginia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ParkersburgWestVirginiaHowToStartPage />
}
