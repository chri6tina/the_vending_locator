import SpringfieldOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Springfield, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Springfield, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Springfield',
    'start vending business Springfield Ohio',
    'Springfield vending permits',
    'vending machine locations Springfield',
    'Springfield vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/springfield-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Springfield, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Springfield, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/springfield-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Springfield, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Springfield, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Springfield, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <SpringfieldOhioHowToStartPage />
}
