import YoungstownOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Youngstown, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Youngstown, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Youngstown',
    'start vending business Youngstown Ohio',
    'Youngstown vending permits',
    'vending machine locations Youngstown',
    'Youngstown vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/youngstown-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Youngstown, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Youngstown, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/youngstown-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Youngstown, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Youngstown, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Youngstown, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <YoungstownOhioHowToStartPage />
}
