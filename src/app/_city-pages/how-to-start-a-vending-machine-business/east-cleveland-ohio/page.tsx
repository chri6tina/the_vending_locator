import EastClevelandOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in East Cleveland, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in East Cleveland, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business East Cleveland',
    'start vending business East Cleveland, Ohio',
    'East Cleveland vending permits',
    'vending machine locations East Cleveland',
    'East Cleveland vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/east-cleveland-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in East Cleveland, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for East Cleveland, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/east-cleveland-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in East Cleveland, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in East Cleveland, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for East Cleveland, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <EastClevelandOhioHowToStartPage />
}
