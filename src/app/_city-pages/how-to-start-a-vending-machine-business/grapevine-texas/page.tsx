import GrapevineTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Grapevine, Texas (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Grapevine, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Grapevine',
    'start vending business Grapevine, Texas',
    'Grapevine vending permits',
    'vending machine locations Grapevine',
    'Grapevine vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grapevine-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Grapevine, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Grapevine, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/grapevine-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Grapevine, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Grapevine, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Grapevine, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GrapevineTexasHowToStartPage />
}
