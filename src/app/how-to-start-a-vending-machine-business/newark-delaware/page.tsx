import NewarkDelawareHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Newark, Delaware (2025 Guide)',
  description: 'Complete guide to starting a vending machine business in Newark, Delaware. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Newark',
    'start vending business Newark Delaware',
    'Newark vending permits',
    'vending machine locations Newark',
    'Newark vending course',
    'vending business guide Delaware'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/newark-delaware'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Newark, Delaware',
    description: 'Step-by-step guide with licensing, locations, and vending course for Newark, Delaware',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/newark-delaware',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Newark, Delaware'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Newark, Delaware',
    description: 'Complete guide with licensing, locations, and vending course for Newark, Delaware'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <NewarkDelawareHowToStartPage />
}
