import PalmerAlaskaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Palmer, Alaska (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Palmer, Alaska. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Palmer',
    'start vending business Palmer Alaska',
    'Palmer vending permits',
    'vending machine locations Palmer',
    'Palmer vending course',
    'vending business guide Alaska'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/palmer-alaska'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Palmer, Alaska',
    description: 'Step-by-step guide with licensing, locations, and vending course for Palmer, Alaska',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/palmer-alaska',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Palmer, Alaska'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Palmer, Alaska',
    description: 'Complete guide with licensing, locations, and vending course for Palmer, Alaska'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <PalmerAlaskaHowToStartPage />
}
