import MiltonDelawareHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Milton, Delaware (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Milton, Delaware. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Milton',
    'start vending business Milton, Delaware',
    'Milton vending permits',
    'vending machine locations Milton',
    'Milton vending course',
    'vending business guide Delaware'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/milton-delaware'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Milton, Delaware',
    description: 'Step-by-step guide with licensing, locations, and vending course for Milton, Delaware',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/milton-delaware',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Milton, Delaware'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Milton, Delaware',
    description: 'Complete guide with licensing, locations, and vending course for Milton, Delaware'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <MiltonDelawareHowToStartPage />
}
