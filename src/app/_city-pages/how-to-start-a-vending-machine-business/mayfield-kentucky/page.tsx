import MayfieldKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Mayfield, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Mayfield, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Mayfield',
    'start vending business Mayfield, Kentucky',
    'Mayfield vending permits',
    'vending machine locations Mayfield',
    'Mayfield vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mayfield-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Mayfield, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Mayfield, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mayfield-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Mayfield, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Mayfield, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Mayfield, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MayfieldKentuckyHowToStartPage />
}
