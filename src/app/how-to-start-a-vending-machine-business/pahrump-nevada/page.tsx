import PahrumpNevadaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Pahrump, Nevada (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Pahrump, Nevada. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Pahrump',
    'start vending business Pahrump Nevada',
    'Pahrump vending permits',
    'vending machine locations Pahrump',
    'Pahrump vending course',
    'vending business guide Nevada'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pahrump-nevada'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Pahrump, Nevada',
    description: 'Step-by-step guide with licensing, locations, and vending course for Pahrump, Nevada',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/pahrump-nevada',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Pahrump, Nevada'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Pahrump, Nevada',
    description: 'Complete guide with licensing, locations, and vending course for Pahrump, Nevada'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <PahrumpNevadaHowToStartPage />
}
