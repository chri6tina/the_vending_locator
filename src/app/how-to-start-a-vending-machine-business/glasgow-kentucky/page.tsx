import GlasgowKentuckyHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Glasgow, Kentucky (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Glasgow, Kentucky. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Glasgow',
    'start vending business Glasgow, Kentucky',
    'Glasgow vending permits',
    'vending machine locations Glasgow',
    'Glasgow vending course',
    'vending business guide Kentucky'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/glasgow-kentucky'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Glasgow, Kentucky',
    description: 'Step-by-step guide with licensing, locations, and vending course for Glasgow, Kentucky',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/glasgow-kentucky',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Glasgow, Kentucky'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Glasgow, Kentucky',
    description: 'Complete guide with licensing, locations, and vending course for Glasgow, Kentucky'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <GlasgowKentuckyHowToStartPage />
}
