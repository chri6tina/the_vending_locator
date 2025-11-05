import LewistonMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Lewiston, Maine (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Lewiston, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Lewiston',
    'start vending business Lewiston Maine',
    'Lewiston vending permits',
    'vending machine locations Lewiston',
    'Lewiston vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lewiston-maine'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Lewiston, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Lewiston, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/lewiston-maine',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Lewiston, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Lewiston, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Lewiston, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <LewistonMaineHowToStartPage />
}
