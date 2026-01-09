import SouthElginIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in South Elgin, Illinois (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in South Elgin, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business South Elgin',
    'start vending business South Elgin, Illinois',
    'South Elgin vending permits',
    'vending machine locations South Elgin',
    'South Elgin vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-elgin-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in South Elgin, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for South Elgin, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/south-elgin-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in South Elgin, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in South Elgin, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for South Elgin, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SouthElginIllinoisHowToStartPage />
}
