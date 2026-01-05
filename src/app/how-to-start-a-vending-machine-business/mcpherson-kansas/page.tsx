import McPhersonMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in McPherson, Maine (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in McPherson, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business McPherson',
    'start vending business McPherson, Maine',
    'McPherson vending permits',
    'vending machine locations McPherson',
    'McPherson vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mcpherson-kansas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in McPherson, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for McPherson, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/mcpherson-kansas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in McPherson, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in McPherson, Maine',
    description: 'Complete guide with licensing, locations, and vending course for McPherson, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <McPhersonMaineHowToStartPage />
}
