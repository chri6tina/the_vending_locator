import CovingtonKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Covington, Kentucky (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Covington, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Covington',
    'start vending business Covington Kentucky',
    'Covington vending permits',
    'vending machine locations Covington',
    'Covington vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/covington-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Covington, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Covington, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/covington-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Covington, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Covington, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Covington, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <CovingtonKentuckyHowToStartPage />
}
