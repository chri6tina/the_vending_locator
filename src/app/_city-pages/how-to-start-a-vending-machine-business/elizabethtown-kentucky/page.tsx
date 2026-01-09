import ElizabethtownKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Elizabethtown, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Elizabethtown, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Elizabethtown',
    'start vending business Elizabethtown, Kentucky',
    'Elizabethtown vending permits',
    'vending machine locations Elizabethtown',
    'Elizabethtown vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elizabethtown-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Elizabethtown, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Elizabethtown, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elizabethtown-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Elizabethtown, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Elizabethtown, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Elizabethtown, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ElizabethtownKentuckyHowToStartPage />
}
