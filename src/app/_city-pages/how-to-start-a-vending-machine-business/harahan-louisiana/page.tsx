import HarahanLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Harahan, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Harahan, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Harahan',
    'start vending business Harahan, Louisiana',
    'Harahan vending permits',
    'vending machine locations Harahan',
    'Harahan vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/harahan-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Harahan, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Harahan, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/harahan-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Harahan, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Harahan, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Harahan, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <HarahanLouisianaHowToStartPage />
}
