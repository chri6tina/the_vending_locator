import MyrtleBeachSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Myrtle Beach, South Carolina (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Myrtle Beach, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Myrtle Beach',
    'start vending business Myrtle Beach South Carolina',
    'Myrtle Beach vending permits',
    'vending machine locations Myrtle Beach',
    'Myrtle Beach vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/myrtle-beach-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Myrtle Beach, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Myrtle Beach, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/myrtle-beach-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Myrtle Beach, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Myrtle Beach, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Myrtle Beach, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <MyrtleBeachSouthCarolinaHowToStartPage />
}
