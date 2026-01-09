import BettendorfIowaHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Bettendorf, Iowa (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Bettendorf, Iowa. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Bettendorf',
    'start vending business Bettendorf, Iowa',
    'Bettendorf vending permits',
    'vending machine locations Bettendorf',
    'Bettendorf vending course',
    'vending business guide Iowa'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bettendorf-iowa'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Bettendorf, Iowa',
    description: 'Step-by-step guide with licensing, locations, and vending course for Bettendorf, Iowa',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/bettendorf-iowa',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Bettendorf, Iowa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Bettendorf, Iowa',
    description: 'Complete guide with licensing, locations, and vending course for Bettendorf, Iowa'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <BettendorfIowaHowToStartPage />
}
