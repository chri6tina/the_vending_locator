import NewCastleDelawareHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in New Castle, Delaware (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in New Castle, Delaware. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business New Castle',
    'start vending business New Castle Delaware',
    'New Castle vending permits',
    'vending machine locations New Castle',
    'New Castle vending course',
    'vending business guide Delaware'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-castle-delaware'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in New Castle, Delaware',
    description: 'Step-by-step guide with licensing, locations, and vending course for New Castle, Delaware',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/new-castle-delaware',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in New Castle, Delaware'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in New Castle, Delaware',
    description: 'Complete guide with licensing, locations, and vending course for New Castle, Delaware'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NewCastleDelawareHowToStartPage />
}
