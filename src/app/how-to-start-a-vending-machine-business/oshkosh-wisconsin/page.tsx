import OshkoshWisconsinHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Oshkosh, Wisconsin (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Oshkosh, Wisconsin. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Oshkosh',
    'start vending business Oshkosh Wisconsin',
    'Oshkosh vending permits',
    'vending machine locations Oshkosh',
    'Oshkosh vending course',
    'vending business guide Wisconsin'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oshkosh-wisconsin'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Oshkosh, Wisconsin',
    description: 'Step-by-step guide with licensing, locations, and vending course for Oshkosh, Wisconsin',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/oshkosh-wisconsin',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Oshkosh, Wisconsin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Oshkosh, Wisconsin',
    description: 'Complete guide with licensing, locations, and vending course for Oshkosh, Wisconsin'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <OshkoshWisconsinHowToStartPage />
}
