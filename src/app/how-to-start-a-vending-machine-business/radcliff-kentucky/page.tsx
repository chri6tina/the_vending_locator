import RadcliffKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Radcliff, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Radcliff, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Radcliff',
    'start vending business Radcliff, Kentucky',
    'Radcliff vending permits',
    'vending machine locations Radcliff',
    'Radcliff vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/radcliff-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Radcliff, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Radcliff, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/radcliff-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Radcliff, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Radcliff, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Radcliff, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RadcliffKentuckyHowToStartPage />
}
