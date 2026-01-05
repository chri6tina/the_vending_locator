import MurrayKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Murray, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Murray, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Murray',
    'start vending business Murray, Kentucky',
    'Murray vending permits',
    'vending machine locations Murray',
    'Murray vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/murray-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Murray, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Murray, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/murray-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Murray, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Murray, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Murray, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MurrayKentuckyHowToStartPage />
}
