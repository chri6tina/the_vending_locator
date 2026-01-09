import KinstonNorthCarolinaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kinston, North Carolina (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Kinston, North Carolina. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kinston',
    'start vending business Kinston, North Carolina',
    'Kinston vending permits',
    'vending machine locations Kinston',
    'Kinston vending course',
    'vending business guide North Carolina'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kinston-north-carolina'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kinston, North Carolina',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kinston, North Carolina',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kinston-north-carolina',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kinston, North Carolina'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kinston, North Carolina',
    description: 'Complete guide with licensing, locations, and vending course for Kinston, North Carolina'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KinstonNorthCarolinaHowToStartPage />
}
