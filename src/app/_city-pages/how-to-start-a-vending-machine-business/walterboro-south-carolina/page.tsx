import WalterboroSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Walterboro, South Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Walterboro, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Walterboro',
    'start vending business Walterboro, South Carolina',
    'Walterboro vending permits',
    'vending machine locations Walterboro',
    'Walterboro vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/walterboro-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Walterboro, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Walterboro, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/walterboro-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Walterboro, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Walterboro, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Walterboro, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <WalterboroSouthCarolinaHowToStartPage />
}
