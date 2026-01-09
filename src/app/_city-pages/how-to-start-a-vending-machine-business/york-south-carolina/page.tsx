import YorkSouthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in York, South Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in York, South Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business York',
    'start vending business York, South Carolina',
    'York vending permits',
    'vending machine locations York',
    'York vending course',
    'vending business guide South Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/york-south-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in York, South Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for York, South Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/york-south-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in York, South Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in York, South Carolina',
    description: 'Complete guide with licensing, locations, and vending course for York, South Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <YorkSouthCarolinaHowToStartPage />
}
