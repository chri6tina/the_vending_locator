import RomeovilleIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Romeoville, Illinois (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Romeoville, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Romeoville',
    'start vending business Romeoville, Illinois',
    'Romeoville vending permits',
    'vending machine locations Romeoville',
    'Romeoville vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/romeoville-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Romeoville, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Romeoville, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/romeoville-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Romeoville, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Romeoville, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Romeoville, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <RomeovilleIllinoisHowToStartPage />
}
