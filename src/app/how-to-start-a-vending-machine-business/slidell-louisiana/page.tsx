import SlidellLouisianaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Slidell, Louisiana (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Slidell, Louisiana. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Slidell',
    'start vending business Slidell, Louisiana',
    'Slidell vending permits',
    'vending machine locations Slidell',
    'Slidell vending course',
    'vending business guide Louisiana'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/slidell-louisiana'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Slidell, Louisiana',
    description: 'Step-by-step guide with licensing, locations, and vending course for Slidell, Louisiana',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/slidell-louisiana',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Slidell, Louisiana'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Slidell, Louisiana',
    description: 'Complete guide with licensing, locations, and vending course for Slidell, Louisiana'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SlidellLouisianaHowToStartPage />
}
