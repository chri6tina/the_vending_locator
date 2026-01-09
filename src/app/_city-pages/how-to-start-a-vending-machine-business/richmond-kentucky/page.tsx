import RichmondKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Richmond, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Richmond, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Richmond',
    'start vending business Richmond Kentucky',
    'Richmond vending permits',
    'vending machine locations Richmond',
    'Richmond vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/richmond-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Richmond, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Richmond, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/richmond-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Richmond, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Richmond, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Richmond, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RichmondKentuckyHowToStartPage />
}
