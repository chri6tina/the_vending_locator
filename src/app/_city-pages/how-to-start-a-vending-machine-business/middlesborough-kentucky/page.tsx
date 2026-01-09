import MiddlesboroughKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Middlesborough, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Middlesborough, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Middlesborough',
    'start vending business Middlesborough, Kentucky',
    'Middlesborough vending permits',
    'vending machine locations Middlesborough',
    'Middlesborough vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/middlesborough-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Middlesborough, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Middlesborough, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/middlesborough-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Middlesborough, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Middlesborough, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Middlesborough, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MiddlesboroughKentuckyHowToStartPage />
}
