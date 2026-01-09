import MacombIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Macomb, Illinois (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Macomb, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Macomb',
    'start vending business Macomb, Illinois',
    'Macomb vending permits',
    'vending machine locations Macomb',
    'Macomb vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/macomb-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Macomb, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Macomb, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/macomb-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Macomb, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Macomb, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Macomb, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MacombIllinoisHowToStartPage />
}
