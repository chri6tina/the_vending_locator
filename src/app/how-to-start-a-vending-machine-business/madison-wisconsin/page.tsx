import MadisonWisconsinHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Madison, Wisconsin (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Madison, Wisconsin. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Madison',
    'start vending business Madison Wisconsin',
    'Madison vending permits',
    'vending machine locations Madison',
    'Madison vending course',
    'vending business guide Wisconsin'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/madison-wisconsin'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Madison, Wisconsin',
    description: 'Step-by-step guide with licensing, locations, and vending course for Madison, Wisconsin',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/madison-wisconsin',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Madison, Wisconsin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Madison, Wisconsin',
    description: 'Complete guide with licensing, locations, and vending course for Madison, Wisconsin'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MadisonWisconsinHowToStartPage />
}
