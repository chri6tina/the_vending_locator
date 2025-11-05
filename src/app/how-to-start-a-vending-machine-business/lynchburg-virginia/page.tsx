import LynchburgVirginiaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lynchburg, Virginia (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Lynchburg, Virginia. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lynchburg',
    'start vending business Lynchburg Virginia',
    'Lynchburg vending permits',
    'vending machine locations Lynchburg',
    'Lynchburg vending course',
    'vending business guide Virginia'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lynchburg-virginia'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lynchburg, Virginia',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lynchburg, Virginia',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lynchburg-virginia',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lynchburg, Virginia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lynchburg, Virginia',
    description: 'Complete guide with licensing, locations, and vending course for Lynchburg, Virginia'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <LynchburgVirginiaHowToStartPage />
}
