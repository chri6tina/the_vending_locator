import DesPlainesIllinoisHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Des Plaines, Illinois (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Des Plaines, Illinois. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Des Plaines',
    'start vending business Des Plaines, Illinois',
    'Des Plaines vending permits',
    'vending machine locations Des Plaines',
    'Des Plaines vending course',
    'vending business guide Illinois'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/des-plaines-illinois'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Des Plaines, Illinois',
    description: 'Step-by-step guide with licensing, locations, and vending course for Des Plaines, Illinois',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/des-plaines-illinois',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Des Plaines, Illinois'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Des Plaines, Illinois',
    description: 'Complete guide with licensing, locations, and vending course for Des Plaines, Illinois'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DesPlainesIllinoisHowToStartPage />
}
