import ElyriaOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Elyria, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Elyria, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Elyria',
    'start vending business Elyria, Ohio',
    'Elyria vending permits',
    'vending machine locations Elyria',
    'Elyria vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elyria-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Elyria, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Elyria, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elyria-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Elyria, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Elyria, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Elyria, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ElyriaOhioHowToStartPage />
}
