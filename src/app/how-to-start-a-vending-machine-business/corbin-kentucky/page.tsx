import CorbinKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Corbin, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Corbin, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Corbin',
    'start vending business Corbin, Kentucky',
    'Corbin vending permits',
    'vending machine locations Corbin',
    'Corbin vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/corbin-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Corbin, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Corbin, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/corbin-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Corbin, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Corbin, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Corbin, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CorbinKentuckyHowToStartPage />
}
