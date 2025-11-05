import JuneauAlaskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Juneau, Alaska (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Juneau, Alaska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Juneau',
    'start vending business Juneau Alaska',
    'Juneau vending permits',
    'vending machine locations Juneau',
    'Juneau vending course',
    'vending business guide Alaska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/juneau-alaska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Juneau, Alaska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Juneau, Alaska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/juneau-alaska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Juneau, Alaska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Juneau, Alaska',
    description: 'Complete guide with licensing, locations, and vending course for Juneau, Alaska'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <JuneauAlaskaHowToStartPage />
}
