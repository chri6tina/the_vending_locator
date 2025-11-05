import DoverNewHampshireHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Dover, New Hampshire (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Dover, New Hampshire. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Dover',
    'start vending business Dover New Hampshire',
    'Dover vending permits',
    'vending machine locations Dover',
    'Dover vending course',
    'vending business guide New Hampshire'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dover-new-hampshire'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Dover, New Hampshire',
    description: 'Step-by-step guide with licensing, locations, and vending course for Dover, New Hampshire',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dover-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Dover, New Hampshire'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Dover, New Hampshire',
    description: 'Complete guide with licensing, locations, and vending course for Dover, New Hampshire'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DoverNewHampshireHowToStartPage />
}
