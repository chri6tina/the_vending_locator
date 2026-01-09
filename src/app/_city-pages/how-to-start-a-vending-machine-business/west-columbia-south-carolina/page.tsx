import WestColumbiaSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in West Columbia, South Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in West Columbia, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business West Columbia',
    'start vending business West Columbia, South Carolina',
    'West Columbia vending permits',
    'vending machine locations West Columbia',
    'West Columbia vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-columbia-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in West Columbia, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for West Columbia, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/west-columbia-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in West Columbia, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in West Columbia, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for West Columbia, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WestColumbiaSouthCarolinaHowToStartPage />
}
