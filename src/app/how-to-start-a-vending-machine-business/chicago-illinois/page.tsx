import ChicagoIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Chicago, Illinois (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Chicago, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Chicago',
    'start vending business Chicago Illinois',
    'Chicago vending permits',
    'vending machine locations Chicago',
    'Chicago vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chicago-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Chicago, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Chicago, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/chicago-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Chicago, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Chicago, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Chicago, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <ChicagoIllinoisHowToStartPage />
}
