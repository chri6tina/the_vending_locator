import KailuaHawaiiHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Kailua, Hawaii (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Kailua, Hawaii. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Kailua',
    'start vending business Kailua Hawaii',
    'Kailua vending permits',
    'vending machine locations Kailua',
    'Kailua vending course',
    'vending business guide Hawaii'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kailua-hawaii'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Kailua, Hawaii',
    description: 'Step-by-step guide with licensing, locations, and vending course for Kailua, Hawaii',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/kailua-hawaii',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Kailua, Hawaii'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Kailua, Hawaii',
    description: 'Complete guide with licensing, locations, and vending course for Kailua, Hawaii'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <KailuaHawaiiHowToStartPage />
}
