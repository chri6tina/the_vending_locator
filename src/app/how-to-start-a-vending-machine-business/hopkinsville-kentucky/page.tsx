import HopkinsvilleKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Hopkinsville, Kentucky (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Hopkinsville, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Hopkinsville',
    'start vending business Hopkinsville Kentucky',
    'Hopkinsville vending permits',
    'vending machine locations Hopkinsville',
    'Hopkinsville vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hopkinsville-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Hopkinsville, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Hopkinsville, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/hopkinsville-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Hopkinsville, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Hopkinsville, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Hopkinsville, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <HopkinsvilleKentuckyHowToStartPage />
}
