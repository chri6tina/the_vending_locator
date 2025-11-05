import MurrietaCaliforniaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Murrieta, California (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Murrieta, California. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Murrieta',
    'start vending business Murrieta California',
    'Murrieta vending permits',
    'vending machine locations Murrieta',
    'Murrieta vending course',
    'vending business guide California'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/murrieta-california'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Murrieta, California',
    description: 'Step-by-step guide with licensing, locations, and vending course for Murrieta, California',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/murrieta-california',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Murrieta, California'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Murrieta, California',
    description: 'Complete guide with licensing, locations, and vending course for Murrieta, California'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <MurrietaCaliforniaHowToStartPage />
}
