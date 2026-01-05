import PortRicheyFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Port Richey, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Port Richey, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Port Richey',
    'start vending business Port Richey, Florida',
    'Port Richey vending permits',
    'vending machine locations Port Richey',
    'Port Richey vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/port-richey-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Port Richey, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for Port Richey, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/port-richey-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Port Richey, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Port Richey, Florida',
    description: 'Complete guide with licensing, locations, and vending course for Port Richey, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PortRicheyFloridaHowToStartPage />
}
