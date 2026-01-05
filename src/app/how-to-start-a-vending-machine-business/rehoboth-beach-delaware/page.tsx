import RehobothBeachDelawareHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Rehoboth Beach, Delaware (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Rehoboth Beach, Delaware. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Rehoboth Beach',
    'start vending business Rehoboth Beach, Delaware',
    'Rehoboth Beach vending permits',
    'vending machine locations Rehoboth Beach',
    'Rehoboth Beach vending course',
    'vending business guide Delaware'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rehoboth-beach-delaware'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Rehoboth Beach, Delaware',
    description: 'Step-by-step guide with licensing, locations, and vending course for Rehoboth Beach, Delaware',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/rehoboth-beach-delaware',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Rehoboth Beach, Delaware'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Rehoboth Beach, Delaware',
    description: 'Complete guide with licensing, locations, and vending course for Rehoboth Beach, Delaware'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RehobothBeachDelawareHowToStartPage />
}
