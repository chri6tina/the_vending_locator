import BeavercreekOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Beavercreek, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Beavercreek, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Beavercreek',
    'start vending business Beavercreek, Ohio',
    'Beavercreek vending permits',
    'vending machine locations Beavercreek',
    'Beavercreek vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/beavercreek-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Beavercreek, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Beavercreek, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/beavercreek-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Beavercreek, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Beavercreek, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Beavercreek, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BeavercreekOhioHowToStartPage />
}
