import ClovisCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Clovis, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Clovis, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Clovis',
    'start vending business Clovis California',
    'Clovis vending permits',
    'vending machine locations Clovis',
    'Clovis vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/clovis-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Clovis, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Clovis, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/clovis-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Clovis, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Clovis, California',
    description: 'Complete guide with licensing, locations, and vending course for Clovis, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <ClovisCaliforniaHowToStartPage />
}
