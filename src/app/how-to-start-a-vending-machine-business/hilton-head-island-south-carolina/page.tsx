import HiltonHeadIslandSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hilton Head Island, South Carolina (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Hilton Head Island, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hilton Head Island',
    'start vending business Hilton Head Island South Carolina',
    'Hilton Head Island vending permits',
    'vending machine locations Hilton Head Island',
    'Hilton Head Island vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hilton-head-island-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hilton Head Island, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hilton Head Island, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hilton-head-island-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hilton Head Island, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hilton Head Island, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Hilton Head Island, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <HiltonHeadIslandSouthCarolinaHowToStartPage />
}
