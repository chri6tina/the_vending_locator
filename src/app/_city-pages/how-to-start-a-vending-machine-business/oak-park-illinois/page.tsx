import OakParkIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oak Park, Illinois (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Oak Park, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oak Park',
    'start vending business Oak Park, Illinois',
    'Oak Park vending permits',
    'vending machine locations Oak Park',
    'Oak Park vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oak-park-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oak Park, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oak Park, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oak-park-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oak Park, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oak Park, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Oak Park, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OakParkIllinoisHowToStartPage />
}
