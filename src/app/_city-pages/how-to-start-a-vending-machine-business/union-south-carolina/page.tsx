import UnionSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Union, South Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Union, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Union',
    'start vending business Union, South Carolina',
    'Union vending permits',
    'vending machine locations Union',
    'Union vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/union-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Union, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Union, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/union-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Union, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Union, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Union, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <UnionSouthCarolinaHowToStartPage />
}
