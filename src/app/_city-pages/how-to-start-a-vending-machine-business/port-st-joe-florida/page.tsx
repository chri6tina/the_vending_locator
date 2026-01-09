import PortStJoeFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Port St. Joe, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Port St. Joe, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Port St. Joe',
    'start vending business Port St. Joe, Florida',
    'Port St. Joe vending permits',
    'vending machine locations Port St. Joe',
    'Port St. Joe vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/port-st-joe-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Port St. Joe, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Port St. Joe, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/port-st-joe-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Port St. Joe, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Port St. Joe, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Port St. Joe, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PortStJoeFloridaHowToStartPage />
}
