import PiquaOhioHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Piqua, Ohio (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Piqua, Ohio. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Piqua',
    'start vending business Piqua, Ohio',
    'Piqua vending permits',
    'vending machine locations Piqua',
    'Piqua vending course',
    'vending business guide Ohio'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/piqua-ohio'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Piqua, Ohio',
    description: 'Step-by-step guide with licensing, locations, and vending course for Piqua, Ohio',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/piqua-ohio',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Piqua, Ohio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Piqua, Ohio',
    description: 'Complete guide with licensing, locations, and vending course for Piqua, Ohio'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PiquaOhioHowToStartPage />
}
