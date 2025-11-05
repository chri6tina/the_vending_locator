import DentonTexasHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Denton, Texas (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Denton, Texas. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Denton',
    'start vending business Denton Texas',
    'Denton vending permits',
    'vending machine locations Denton',
    'Denton vending course',
    'vending business guide Texas'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/denton-texas'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Denton, Texas',
    description: 'Step-by-step guide with licensing, locations, and vending course for Denton, Texas',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/denton-texas',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Denton, Texas'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Denton, Texas',
    description: 'Complete guide with licensing, locations, and vending course for Denton, Texas'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <DentonTexasHowToStartPage />
}
