import BakersfieldCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bakersfield, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Bakersfield, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bakersfield',
    'start vending business Bakersfield California',
    'Bakersfield vending permits',
    'vending machine locations Bakersfield',
    'Bakersfield vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bakersfield-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bakersfield, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bakersfield, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bakersfield-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bakersfield, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bakersfield, California',
    description: 'Complete guide with licensing, locations, and vending course for Bakersfield, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <BakersfieldCaliforniaHowToStartPage />
}
