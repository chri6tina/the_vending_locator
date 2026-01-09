import PresqueIsleMaineHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Presque Isle, Maine (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Presque Isle, Maine. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Presque Isle',
    'start vending business Presque Isle, Maine',
    'Presque Isle vending permits',
    'vending machine locations Presque Isle',
    'Presque Isle vending course',
    'vending business guide Maine'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/presque-isle-maine'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Presque Isle, Maine',
    description: 'Step-by-step guide with licensing, locations, and vending course for Presque Isle, Maine',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/presque-isle-maine',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Presque Isle, Maine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Presque Isle, Maine',
    description: 'Complete guide with licensing, locations, and vending course for Presque Isle, Maine'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PresqueIsleMaineHowToStartPage />
}
