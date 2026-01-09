import DarlingtonSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Darlington, South Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Darlington, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Darlington',
    'start vending business Darlington, South Carolina',
    'Darlington vending permits',
    'vending machine locations Darlington',
    'Darlington vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/darlington-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Darlington, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Darlington, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/darlington-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Darlington, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Darlington, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Darlington, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DarlingtonSouthCarolinaHowToStartPage />
}
