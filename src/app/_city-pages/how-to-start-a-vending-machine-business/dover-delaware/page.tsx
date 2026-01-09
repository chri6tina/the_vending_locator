import DoverDelawareHowToStartPage from './pageClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start a Vending Machine Business in Dover, Delaware (2026 Guide)',
  description: 'Complete guide to starting a vending machine business in Dover, Delaware. Learn about licensing, permits, startup costs, finding locations, and our comprehensive vending course to get started.',
  keywords: [
    'vending machine business Dover',
    'start vending business Dover Delaware',
    'Dover vending permits',
    'vending machine locations Dover',
    'Dover vending course',
    'vending business guide Delaware'
  ],
  alternates: {
    canonical: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dover-delaware'
  },
  openGraph: {
    title: 'How to Start a Vending Machine Business in Dover, Delaware',
    description: 'Step-by-step guide with licensing, locations, and vending course for Dover, Delaware',
    url: 'https://www.thevendinglocator.com/how-to-start-a-vending-machine-business/dover-delaware',
    siteName: 'The Vending Locator',
    type: 'article',
    images: [
      {
        url: 'https://www.thevendinglocator.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Start a Vending Machine Business in Dover, Delaware'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start a Vending Machine Business in Dover, Delaware',
    description: 'Complete guide with licensing, locations, and vending course for Dover, Delaware'
  },
  robots: {
    index: true,
    follow: true
  }
}

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function Page() {
  return <DoverDelawareHowToStartPage />
}
