import SouthDaytonaFloridaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in South Daytona, Florida (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in South Daytona, Florida. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business South Daytona',
    'start vending business South Daytona, Florida',
    'South Daytona vending permits',
    'vending machine locations South Daytona',
    'South Daytona vending course',
    'vending business guide Florida'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-daytona-florida'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in South Daytona, Florida',
    description: 'Step-by-step guide with licensing, locations, and vending course for South Daytona, Florida',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-daytona-florida',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in South Daytona, Florida'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in South Daytona, Florida',
    description: 'Complete guide with licensing, locations, and vending course for South Daytona, Florida'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthDaytonaFloridaHowToStartPage />
}
