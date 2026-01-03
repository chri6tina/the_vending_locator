import FrankfortKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Frankfort, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Frankfort, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Frankfort',
    'start vending business Frankfort Kentucky',
    'Frankfort vending permits',
    'vending machine locations Frankfort',
    'Frankfort vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/frankfort-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Frankfort, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Frankfort, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/frankfort-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Frankfort, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Frankfort, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Frankfort, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <FrankfortKentuckyHowToStartPage />
}
