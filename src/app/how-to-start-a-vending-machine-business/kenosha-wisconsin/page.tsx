import KenoshaWisconsinHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kenosha, Wisconsin (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Kenosha, Wisconsin. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kenosha',
    'start vending business Kenosha Wisconsin',
    'Kenosha vending permits',
    'vending machine locations Kenosha',
    'Kenosha vending course',
    'vending business guide Wisconsin'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kenosha-wisconsin'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kenosha, Wisconsin',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kenosha, Wisconsin',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kenosha-wisconsin',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kenosha, Wisconsin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kenosha, Wisconsin',
    description: 'Complete guide with licensing, locations, and vending course for Kenosha, Wisconsin'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <KenoshaWisconsinHowToStartPage />
}
