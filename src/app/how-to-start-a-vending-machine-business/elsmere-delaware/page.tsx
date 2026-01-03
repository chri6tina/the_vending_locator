import ElsmereDelawareHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Elsmere, Delaware (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Elsmere, Delaware. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Elsmere',
    'start vending business Elsmere Delaware',
    'Elsmere vending permits',
    'vending machine locations Elsmere',
    'Elsmere vending course',
    'vending business guide Delaware'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elsmere-delaware'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Elsmere, Delaware',
    description: 'Step-by-step guide with licensing, locations, and vending course for Elsmere, Delaware',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/elsmere-delaware',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Elsmere, Delaware'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Elsmere, Delaware',
    description: 'Complete guide with licensing, locations, and vending course for Elsmere, Delaware'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <ElsmereDelawareHowToStartPage />
}
