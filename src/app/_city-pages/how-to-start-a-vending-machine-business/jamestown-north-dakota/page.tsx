import JamestownNorthDakotaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Jamestown, North Dakota (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Jamestown, North Dakota. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Jamestown',
    'start vending business Jamestown, North Dakota',
    'Jamestown vending permits',
    'vending machine locations Jamestown',
    'Jamestown vending course',
    'vending business guide North Dakota'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jamestown-north-dakota'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Jamestown, North Dakota',
    description: 'Step-by-step guide with licensing, locations, and vending course for Jamestown, North Dakota',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/jamestown-north-dakota',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Jamestown, North Dakota'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Jamestown, North Dakota',
    description: 'Complete guide with licensing, locations, and vending course for Jamestown, North Dakota'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <JamestownNorthDakotaHowToStartPage />
}
